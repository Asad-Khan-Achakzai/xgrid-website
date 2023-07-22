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

// Constants imports
import constants from '../constants/constants';

// Next imports
import { useRouter } from 'next/router';

// He imports
import he from 'he';

/**
 * Functional component for rendering multiple posts, accepting following props
 * @param {{
 * separatorAdditionalClasses: // Separator additional classes, in case of different design
 * separatorText: // Separator text
 * ignorePosts: // ignoring first post from array
 * showSeparator: // boolean
 * showXploreButton: // Boolean show/hide button
 * navigateBaseURL: // base url to append before the slug for navigation
 * renderedFor: // name of entity for which this component is renders e.g CaseStudy || Articles
 * searchedposts: // Array of posts those are searched and rendered
 * totalPosts: // Array of total post retreived
 * loadMorePosts: // Function to load more posts
 * }} param0
 * @returns component
 */
const MultiplePostsSearched = ({
  navigateBaseURL,
  separatorAdditionalClasses,
  separatorText,
  ignorePosts,
  showSeparator,
  showXploreButton,
  renderedFor,
  searchedposts,
  totalPosts,
  loadMorePosts,
}) => {
  // Router
  const router = useRouter();
  // Loading state
  const [loading, isLoading] = useState(false);
  // Inner loader for load more
  const [loadingLoadMore, setLoadingLoadMore] = useState(false);

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
      {showSeparator &&
      searchedposts?.length &&
      searchedposts?.length !== ignorePosts ? (
        <div className={`col-12 ${separatorAdditionalClasses}`}>
          <Separator
            innerContent={separatorText}
            classes='pb-3 border-bottom'
          />
        </div>
      ) : null}

      {!loading ? (
        searchedposts?.slice(ignorePosts).map((res) => {
          return (
            <div className='col-lg-4 col-md-6 mb-6' key={res.id}>
              <div className='card border-0 h-100 bg-transparent'>
                <a
                  className='resourceBlog'
                  href={
                    res?.caseStudyLink
                      ? res.caseStudyLink
                      : `${navigateBaseURL}/${res.slug}`
                  }
                >
                  <img
                    width='100%'
                    className='card-image-top cursor-pointer mb-2 b-r'
                    alt={res?.heroSection?.heroImgAlt || 'featured post'}
                    src={res?.featured_image_src || res?.thumbnail?.imgSrc.src}
                    onClick={() =>
                      navigateWithPostSlug(
                        res.slug,
                        res?.caseStudyLink && res.caseStudyLink
                      )
                    }
                  />
                </a>

                <div className='card-body bg-white d-flex flex-column justify-content-between h-100 align-items-baseline'>
                  <p className='mb-2 f-inter-reg'>
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
                  >
                    <h3 className='fw-semibold text-dark text-hover-purple cursor-pointer mb-3 f-lato-reg'>
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
                  >
                    <Button
                      label='Read more'
                      iconClasses={'color-purple'}
                      isIcon={true}
                      classes='bg-transparent border-0 text-hover-purple ps-0 f-inter-reg'
                      clickEvent={() =>
                        navigateWithPostSlug(
                          res?.slug,
                          res?.caseStudyLink && res.caseStudyLink
                        )
                      }
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

      {showXploreButton && searchedposts?.length > 1 ? (
        <div className='col-lg-12 text-center xgm-b-5'>
          <Button
            label='Xplore More'
            isDisabled={totalPosts?.length === searchedposts?.length}
            classes='px-5 border py-3 rounded-3 purple-btn text-white f-inter-reg'
            isIcon={true}
            clickEvent={() => loadMorePosts(renderedFor)}
          />
        </div>
      ) : null}
    </>
  );
};

export default MultiplePostsSearched;
