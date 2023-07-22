/*
 Copyright (c) 2022, Xgrid Inc, http://xgrid.co

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

// React imports
import React, { useEffect, useState, useContext } from 'react';

// Context Api imports
import { AppContext } from '../context/appContext';

// Component imports
import Separator from './separator';
import LoadingSkeleton from './skeleton';
import Button from './button';

// Case study data import
import { caseStudies } from '../data/caseStudiesData';

// Constants imports
import constants from '../constants/constants';

// Next imports
import { useRouter } from 'next/router';

// He imports
import he from 'he';

/**
 * Functional component for rendering multiple posts, accepting following props
 * @param {{
 * source: // (filter tab | route) from where request to fetch posts is made
 * postsPerPage: // props for posts per page
 * separatorAdditionalClasses: // Separator additional classes, in case of different design
 * separatorText: // Separator text
 * ignorePosts: // ignoring first post from array
 * showSeparator: // boolean
 * showXploreButton: // Boolean show/hide button
 * dataFetchCallback: // callback method for fetching data
 * navigateBaseURL: // base url to append before the slug for navigation
 * renderedFor: // name of entity for which this component is renders e.g CaseStudy || Articles
 * }} param0
 * @returns component
 */
const MultiplePosts = ({
  source,
  postsPerPage,
  dataFetchCallback,
  navigateBaseURL,
  separatorAdditionalClasses,
  separatorText,
  ignorePosts,
  showSeparator,
  showXploreButton,
  renderedFor,
}) => {
  // Router
  const router = useRouter();
  // State for posts
  const [posts, setPosts] = useState();
  // Loading state
  const [loading, isLoading] = useState(false);
  // Blogs per page
  const {
    blogsPerPage,
    setBlogsPerPage,
    caseStudiesPerPage,
    setCaseStudiesPerPage,
  } = useContext(AppContext);
  // Inner loader for load more
  const [loadingLoadMore, setLoadingLoadMore] = useState(false);
  // Posts length
  const [postsLength, setPostsLength] = useState();
  // Previous posts length getting from postsLength
  const [previousPostsLength, setPreviousPostsLength] = useState();

  useEffect(() => {
    const filteredCasestudies = caseStudies.filter((caseStudy) => {
      // Remove caseStudy if it is Whitepaper
      if (caseStudy?.isWhitepaper) {
        return false;
      }

      // Remove caseStudy if it has type ungated and environment is production
      if (
        process.env.NEXT_PUBLIC_ENVIRONMENT === 'production' &&
        caseStudy.type === 'ungated'
      ) {
        return false;
      }
      return true;
    });
    if (
      (renderedFor === constants.resourcePageFilters.caseStudies.value &&
        postsLength >= filteredCasestudies.length) ||
      renderedFor === constants.resourcePageFilters.whitepapers.value
    ) {
      setPreviousPostsLength(postsLength);
    }
  }, [postsLength]);
  useEffect(() => {
    let postsToFetch = postsPerPage;
    // set initial values for global states on first render otherwise set postsToFetch
    // TODO: Will refactor this conditional block later
    if (renderedFor === constants.resourcePageFilters.articles.value) {
      if (!blogsPerPage.allTab || !blogsPerPage.articlesTab) {
        setBlogsPerPage(postsPerPage, source);
      } else {
        switch (source) {
          case constants.resourcePageFilters.all.value:
            postsToFetch = blogsPerPage.allTab;
            break;
          case constants.resourcePageFilters.articles.value:
            postsToFetch = blogsPerPage.articlesTab;
            break;
          default:
            postsToFetch = blogsPerPage.blogPage;
            break;
        }
      }
    }
    if (renderedFor === constants.resourcePageFilters.caseStudies.value) {
      if (!caseStudiesPerPage.allTab || !caseStudiesPerPage.caseStudyTab) {
        setCaseStudiesPerPage(postsPerPage, source);
      } else {
        switch (source) {
          case constants.resourcePageFilters.all.value:
            postsToFetch = caseStudiesPerPage.allTab;
            break;
          case constants.resourcePageFilters.caseStudies.value:
            postsToFetch = caseStudiesPerPage.caseStudyTab;
            break;
          default:
            postsToFetch = caseStudiesPerPage.caseStudyPage;
            break;
        }
      }
    }
    fetchPosts(postsToFetch);
  }, []);

  /**
   * Function for fetching posts through API
   */
  const fetchPosts = (posts) => {
    isLoading(true);
    dataFetchCallback(posts)
      .then((res) => {
        setPostsLength(res.data.length);
        setPreviousPostsLength(postsLength);
        setLoadingLoadMore(false);
        setPosts(res.data);
        isLoading(false);
      })
      .catch((err) => console.error(err));
  };

  /**
   * Function for loading more posts
   */
  const loadMorePosts = () => {
    let nextPostsToFetch = 0;
    /**
     * get value from correct global state i.e from blogsPerPage or caseStudiesPerPage by
     * checking if current component is rendered for caseStudy or articles
     */
    if (renderedFor === constants.resourcePageFilters.articles.value) {
      nextPostsToFetch =
        source === constants.resourcePageFilters.all.value
          ? blogsPerPage.allTab + constants.resourcesToLoadOnClick
          : blogsPerPage.articlesTab + constants.resourcesToLoadOnClick;
      setBlogsPerPage(nextPostsToFetch, source);
    } else {
      nextPostsToFetch =
        source === constants.resourcePageFilters.all.value
          ? caseStudiesPerPage.allTab + constants.resourcesToLoadOnClick
          : caseStudiesPerPage.caseStudyTab + constants.resourcesToLoadOnClick;
      setCaseStudiesPerPage(nextPostsToFetch, source);
    }
    fetchPosts(nextPostsToFetch);
    isLoading(false);
    setLoadingLoadMore(true);
  };

  /**
   * Function for getting post slug and navigating user to the post inner page
   * @param {string} slug - post slug
   */
  const navigateWithPostSlug = (slug, caseStudyLink) => {
    caseStudyLink
      ? (window.location.href = caseStudyLink)
      : router.push(`${navigateBaseURL}/${slug}`);
  };

  return (
    <>
      {showSeparator && posts?.length && posts?.length !== ignorePosts ? (
        <div className={`col-12 ${separatorAdditionalClasses}`}>
          <Separator
            innerContent={separatorText}
            classes='pb-3 border-bottom'
          />
        </div>
      ) : null}

      {!loading ? (
        posts?.slice(ignorePosts).map((res) => {
          return (
            <div
              className='col-lg-4 col-md-6 mb-6'
              key={res.id}
            >
              <div className='card border-0 h-100 bg-transparent'>
                <a
                  className='resourceBlog'
                  href={
                    res?.caseStudyLink
                      ? res.caseStudyLink
                      : `${navigateBaseURL}/${res.slug}`
                  }
                  target={
                    res?.caseStudyLink &&
                    !res?.caseStudyLink?.includes(
                      constants.pageLinks.alkira.path
                    ) &&
                    '_blank'
                  }
                >
                  <img
                    width='100%'
                    className='card-image-top cursor-pointer mb-2'
                    alt={res?.heroSection?.heroImgAlt || 'featured post'}
                    src={res?.featured_image_src || res?.thumbnail?.imgSrc.src}
                    onClick={() => {
                      !res?.caseStudyLink &&
                        navigateWithPostSlug(
                          res.slug,
                          res?.caseStudyLink && res.caseStudyLink
                        );
                    }}
                    // open caseStudy in new tab if it is of marketing
                    target={
                      res?.caseStudyLink ||
                      (!res?.caseStudyLink?.includes(
                        constants.pageLinks.alkira.path
                      ) &&
                        '_blank')
                    }
                  />
                </a>

                <div className='card-body bg-white d-flex flex-column justify-content-between h-100 align-items-baseline'>
                  <p className='mb-0 f-inter-reg'>
                    {res?.ctaGroupSection?.industry ||
                      res?._embedded['wp:term'][0].map((res) => res.name)}
                  </p>
                  <a
                    className='resourceBlog'
                    href={
                      res?.caseStudyLink
                        ? res.caseStudyLink
                        : `${navigateBaseURL}/${res.slug}`
                    }
                    // open caseStudy in new tab if it is of marketing
                    target={
                      res?.caseStudyLink &&
                      !res?.caseStudyLink?.includes(
                        constants.pageLinks.alkira.path
                      ) &&
                      '_blank'
                    }
                  >
                    <h3 className='fw-semibold text-dark text-hover-purple cursor-pointer f-lato-reg'>
                      {res?.title
                        ? he.decode(res?.title.rendered)
                        : res?.cardTitle}
                    </h3>
                  </a>
                  <div
                    className='f-inter-reg post-desc'
                    dangerouslySetInnerHTML={{
                      __html: res?.excerpt?.rendered
                        ? res?.excerpt.rendered
                        : res?.didYouKnowSection?.content.slice(0, 130) +
                          ' [......]',
                    }}
                  ></div>
                  <a
                    className='resourceBlog pt-3'
                    href={
                      res?.caseStudyLink
                        ? res.caseStudyLink
                        : `${navigateBaseURL}/${res.slug}`
                    }
                    // open caseStudy in new tab if it is of marketing
                    target={
                      res?.caseStudyLink &&
                      !res?.caseStudyLink?.includes(
                        constants.pageLinks.alkira.path
                      ) &&
                      '_blank'
                    }
                  >
                    <Button
                      label='Read more'
                      iconClasses={'color-purple'}
                      isIcon={true}
                      classes='bg-transparent border-0 text-hover-purple ps-0 f-inter-reg'
                      clickEvent={() => {
                        !res?.caseStudyLink ||
                        res?.caseStudyLink.includes(
                          constants.pageLinks.alkira.path
                        )
                          ? navigateWithPostSlug(
                              res?.slug,
                              res?.caseStudyLink && res.caseStudyLink
                            )
                          : window.open(res.caseStudyLink, '_blank');
                      }}
                    />
                  </a>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <LoadingSkeleton />
      )}
      {loadingLoadMore && (
        <div className='row mb-5'>
          <LoadingSkeleton />
        </div>
      )}
      {showXploreButton && posts?.length > 0 ? (
        <div className='col-lg-12 text-center xgm-b-5'>
          <Button
            label='Xplore More'
            isDisabled={
              previousPostsLength === postsLength ||
              (!previousPostsLength && !postsLength)
                ? true
                : false
            }
            classes='px-5 border py-3 rounded-3 purple-btn text-white f-inter-reg'
            isIcon={true}
            clickEvent={loadMorePosts}
          />
        </div>
      ) : null}
    </>
  );
};

export default MultiplePosts;
