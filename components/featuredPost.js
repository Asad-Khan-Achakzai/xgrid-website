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
import React, { useEffect, useState } from 'react';

// Next imports
import { useRouter } from 'next/router';

// Component imports
import LoadingSkeleton from './skeleton';
import ShowMore from './show-more';

// NPM imports
import he from 'he';

// constants import
import constants from '../constants/constants';

/**
 * Component for displaying featured post with bigger image and brief text
 * @param {number} postsPerPage - no. posts to fetch
 * @param {callback} dataFetchCallback - callback to invoke for fetching posts
 * @param {string} navigationBaseURL - base url to append before the slug for navigation
 * @returns Component
 */
const FeaturedPosts = ({
  postsPerPage,
  dataFetchCallback,
  navigationBaseURL,
}) => {
  // Router
  const router = useRouter();
  // State for posts
  const [posts, setPosts] = useState();
  // Loading state, displaying skeleton
  const [loading, isLoading] = useState(false);

  useEffect(() => {
    fetchFeaturedPost(postsPerPage);
  }, []);

  /**
   * Function for fetching posts through API
   */
  const fetchFeaturedPost = (posts) => {
    isLoading(true);
    dataFetchCallback(posts)
      .then((res) => {
        setPosts(res.data);
        isLoading(false);
      })
      .catch((err) => console.error(err));
  };

  /**
   * Function for getting slug and navigating user to the post inner page
   * @param {*} slug
   */
  const navigateWithSlug = (slug, caseStudyLink) => {
    caseStudyLink
      ? (window.location.href = caseStudyLink)
      : router.push(`${navigationBaseURL}/${slug}`);
  };

  return (
    <>
      {/* Single post */}
      {!loading ? (
        posts?.map((res) => {
          return (
            <div className='row cursor-pointer mb-5'>
              <div className='col-lg-8'>
                <a
                  className='resourceBlog'
                  href={
                    res?.caseStudyLink
                      ? res.caseStudyLink
                      : `${navigationBaseURL}/${res.slug}`
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
                  <img
                    width='100%'
                    src={
                      res?.featured_image_src
                        ? res.featured_image_src
                        : res?.thumbnail?.imgSrc.src
                    }
                    alt={
                      res?.heroSection?.heroImgAlt
                        ? res.heroSection.heroImgAlt
                        : 'Featured Post'
                    }
                    onClick={() => {
                      !res?.caseStudyLink &&
                        navigateWithSlug(
                          res.slug,
                          res?.caseStudyLink && res.caseStudyLink
                        );
                    }}
                    target={
                      res?.caseStudyLink &&
                      !res?.caseStudyLink?.includes(
                        constants.pageLinks.alkira.path
                      ) &&
                      '_blank'
                    }
                  />
                </a>
              </div>
              <div className='col-lg-4 responsive-styles'>
                {/* Getting category */}
                <p className='mb-2 f-inter-reg'>
                  {res?.ctaGroupSection?.industry
                    ? res?.ctaGroupSection?.industry
                    : res?._embedded['wp:term'][0].map((res) => res.name)}
                </p>
                {/* Post title and excerpt */}
                <div className='mb-5'>
                  <a
                    className='resourceBlog'
                    href={
                      res?.caseStudyLink
                        ? res.caseStudyLink
                        : `${navigationBaseURL}/${res.slug}`
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
                    <h3
                      className='fw-semibold text-dark mb-3 text-hover-purple cursor-pointer f-inter-reg'
                      onClick={() => {
                        // if caseStudy link is not of marketing then navigate to the caseStudy on the same page.
                        res?.caseStudyLink?.includes(
                          constants.pageLinks.alkira.path
                        ) &&
                          navigateWithSlug(
                            res.slug,
                            res?.caseStudyLink && res.caseStudyLink
                          );
                      }}
                    >
                      {res?.title?.rendered
                        ? he.decode(res?.title.rendered)
                        : res?.cardTitle}
                    </h3>
                  </a>
                  <div
                    className='d-none d-lg-block f-inter-reg'
                    dangerouslySetInnerHTML={{
                      __html: res?.excerpt?.rendered
                        ? res?.excerpt.rendered
                        : res?.didYouKnowSection?.content,
                    }}
                  ></div>
                </div>
                {/* Author info */}
                {res?.authors?.length && (
                  <div
                    className={`d-flex ${
                      res?.authors[0].description
                        ? 'align-items-start'
                        : 'align-items-center'
                    }`}
                  >
                    <img
                      className='me-3 rounded-circle rounded-img-wrapper blog-img'
                      src={
                        res?.authors[0].avatar_url?.url
                          ? res?.authors[0].avatar_url?.url
                          : res?.authors[0].avatar_url
                      }
                    />
                    <div>
                      <h4 className='fw-semibold text-dark mb-0 f-inter-reg'>
                        {res?.authors[0].display_name}
                      </h4>
                      <p className='mb-0'>
                        {res?.authors[0].description ? (
                          <ShowMore>
                            {he.decode(res?.authors[0].description)}
                          </ShowMore>
                        ) : null}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })
      ) : (
        <div className='row mb-4'>
          <LoadingSkeleton />
        </div>
      )}
    </>
  );
};

export default FeaturedPosts;
