/*
 Copyright (c) 2023, Xgrid Inc, http://xgrid.co

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

// Next import
import Image from 'next/image';

// React imports
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

// API imports
import {
  getAllWordpressBlogPostsBySlug,
  getAllWordpressBlogPosts,
} from '../api/api';

// Third party
import Moment from 'react-moment';
import he from 'he';
import { NextSeo } from 'next-seo';

// Constants imports
import constants from '../../constants/constants';

// Helpers imports
import { getCanonicalUrl } from '../../helpers/string';

// Component imports
import MultiplePosts from '../../components/multiplePosts';
import NewsLetter from '../../components/newsletter';
import Separator from '../../components/separator';
import Button from '../../components/button';
import ClipboardPopup from '../../components/clipboard-popup';

// Custom hooks imports
import useComponentVisible from '../../hooks/useComponentVisible';

/**
 * Function for getting inner content of the post by ID
 * @param {string} slug; - unique slug for post
 * @returns {object}; - returns object containing data and error keys
 */
const fetchPostContentBySlug = async (slug) => {
  try {
    const wordpressBlogResponse = await getAllWordpressBlogPostsBySlug(slug);
    /*
      Response of post fetched by slug is in array which always contains 1 post
      so specified 0 index
     */
    return {
      data: wordpressBlogResponse?.data[0],
      error: null,
    };
  } catch (err) {
    // TODO: will replace this when relevant UI element is ready
    console.error(err);
    return {
      data: null,
      error: err.message,
    };
  }
};
const buttons = [
  {
    label: constants.caseStudyCTAGroup.share,
    icon: constants.icons.share,
  },
  {
    label: constants.caseStudyCTAGroup.download,
    icon: constants.icons.download,
  },
  {
    label: constants.caseStudyCTAGroup.print,
    icon: constants.icons.print,
  },
  {
    label: constants.caseStudyCTAGroup.save,
    icon: constants.icons.save,
  },
];

/**
 * Component for displaying wordpress post inner content based on ID getting from query
 * @returns component
 */
const WordpressSinglePostInner = ({ post }) => {
  const [isShareClicked, setShareClicked] = useState(false);
  const { isComponentVisible, setIsComponentVisible, ref } =
    useComponentVisible(true);
  const [actionButtonPlacement, setActionButtonPlacement] = useState(
    constants.actionButtonPlacement.right
  );

  /**
   * Function to convert string to array
   * @param {Array} string
   * @returns list of strings
   */
  const convert_string_to_array = (string) => {
    return string.split(',');
  };

  /**
   * Function to handle click event on action buttons
   * @param {String} label
   * @param {String} actionButtonPlacement
   * @param {File} pdf
   */
  const handleClick = async (label, actionButtonPlacement, pdf) => {
    setActionButtonPlacement(actionButtonPlacement);
    if (pdf && pdf !== 'null') {
      switch (label) {
        case constants.caseStudyCTAGroup.download:
          window.open(pdf, 'Download');
          break;
        case constants.caseStudyCTAGroup.print:
          window.open(pdf, 'PRINT');
          break;
        case constants.caseStudyCTAGroup.share:
          setShareClicked(true);
          setIsComponentVisible(true);
          break;
      }
    } else {
      alert('There is currently no PDF for this blog.');
    }
  };

  const [blogTitle, setBlogTitle] = useState();

  useEffect(() => {
    setBlogTitle(document.getElementsByClassName('blog-heading')[0]?.innerHTML);
  }, []);

  return (
    <>
      <NextSeo
        noindex={
          process.env.NEXT_PUBLIC_ENVIRONMENT === 'development' ? true : false
        }
        nofollow={
          process.env.NEXT_PUBLIC_ENVIRONMENT === 'development' ? true : false
        }
        title={post?.yoast_data?.title}
        description={post?.yoast_data?.description}
        openGraph={{
          url: getCanonicalUrl(),
          title: post?.yoast_data?.title,
          description: post?.yoast_data?.description,
          images: [
            {
              url: post?.featured_image_src,
              width: 800,
              height: 600,
              alt: "Blog's featured image",
              type: 'image/jpeg',
            },
          ],
          site_name: constants.siteName,
        }}
      />
      <div className='wrapper blog-div'>
        <div
          className='title-img'
          style={{
            backgroundImage: `url(${
              post.acf.meta_image
                ? post.acf.meta_image
                : post?.featured_image_src
            })`,
          }}
        >
          <div className='text-bg-gradient '>
            <div className='title-wrapper blog-title-m blog-title-m-l'>
              <div className='responsive-styles col-12 text-start mobile-padding-x mobile-padding-y'>
                <h1 className='fw-semibold mb-4 blog-title'>
                  {post ? he.decode(post?.title.rendered) : null}
                </h1>
                <div>
                  <div className='time'>
                    <Moment format='MMMM DD, y'>{post?.date}</Moment>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* blog authors & other options */}

        <div className='top-row'>
          {/* authors */}
          <div className='p-top-4 authors-bar'>
            <div>
              <p className='blog-author'>
                <span>By</span>
                <a>{post.authors.length && post.authors[0].display_name}</a>
              </p>
            </div>
            {post.authors.length > 1 && (
              <div>
                <p className='blog-author'>
                  <span>with</span>
                  {
                    // ignore first author in array as it is displayed above already
                    post.authors.slice(1).map((author, index) => (
                      <a key={author.user_id}>
                        {author.display_name}
                        {/*   Place comma after author name except the last author */}
                        {index !== post.authors.slice(1).length - 1 && ','}
                      </a>
                    ))
                  }
                </p>
              </div>
            )}
          </div>
          {/* options */}
          <div className='p-top-4 buttons-width'>
            {isShareClicked &&
              actionButtonPlacement ===
                constants.actionButtonPlacement.right && (
                <div ref={ref}>
                  {isComponentVisible && (
                    <ClipboardPopup
                      textToCopy={
                        post?.acf?.pdf_link ? post.acf.pdf_link : null
                      }
                      additionalClasses='clipboard-popup-blog'
                    />
                  )}
                </div>
              )}
            {post?.acf?.pdf_link &&
              process.env.NEXT_PUBLIC_ENVIRONMENT === 'development' && (
                <div className='text-center blog-options'>
                  {buttons.map((btn, index) => (
                    <div
                      onClick={() =>
                        handleClick(
                          btn.label,
                          constants.actionButtonPlacement.bottom,
                          post?.acf?.pdf_link ? post.acf.pdf_link : null
                        )
                      }
                      key={index}
                      className='cta-group btns'
                    >
                      <div className='h-1 icon'>
                        <Image
                          src={btn.icon}
                          className='icon-img'
                          alt='btn icon'
                        />
                      </div>
                      <h4 className='action-btn'>{btn.label}</h4>
                    </div>
                  ))}
                </div>
              )}
          </div>
        </div>

        {/* blog heading */}

        <div className='col-12 m-top blog-head'>
          <div
            className='col-10 p-left'
            dangerouslySetInnerHTML={{
              __html: blogTitle,
            }}
          ></div>
        </div>

        <div className='row article-body'>
          <div className='col-12 col-lg-9 mobile-padding-x p-left-sm p-right order-2 order-lg-1'>
            <div className='row'>
              <div className='col-sm-6 col-xs-12 d-block d-lg-none position-relative mt-4'>
                {isShareClicked &&
                  actionButtonPlacement ===
                    constants.actionButtonPlacement.center && (
                    <div ref={ref}>
                      {isComponentVisible && (
                        <ClipboardPopup
                          textToCopy={
                            post?.acf?.pdf_link ? post.acf.pdf_link : null
                          }
                          additionalClasses='clipboard-popup-blog-sm'
                        />
                      )}
                    </div>
                  )}
                {post?.acf?.pdf_link &&
                  process.env.NEXT_PUBLIC_ENVIRONMENT === 'development' && (
                    <div className='row text-center d-none'>
                      {buttons.map((btn, index) => (
                        <div
                          onClick={() =>
                            handleClick(
                              btn.label,
                              constants.actionButtonPlacement.center,
                              post?.acf?.pdf_link ? post.acf.pdf_link : null
                            )
                          }
                          key={index}
                          className='col-4 p-0 cta-group'
                        >
                          <div className='h-2'>
                            <Image
                              src={btn.icon}
                              alt='btn icon'
                            />
                          </div>
                          <h4 className='action-btn p-2'>{btn.label}</h4>
                        </div>
                      ))}
                    </div>
                  )}
              </div>
              <div className={`col-12 d-block d-lg-none`}>
                <Separator classes='pb-3 border-black d-none d-block' />
              </div>
              <div className='col-12 m-top'>
                <div
                  className='blogs-inner-content'
                  dangerouslySetInnerHTML={{
                    __html: post?.content.rendered,
                  }}
                ></div>
                <Separator classes='pb-3 border-black max-width' />
              </div>
            </div>
          </div>
          {/* right section. */}
          {process.env.NEXT_PUBLIC_ENVIRONMENT === 'development' && (
            <div className='col-12 col-lg-3 order-1 order-lg-2 right-section d-block d-lg-block position-relative'>
              {post?.acf?.pdf_link && (
                <>
                  <div className={`col-12`}>
                    <Separator classes='pb-3 border-black' />
                  </div>
                  <div className='download-p-top'>
                    <h4 className='sidebar-heading'>DOWNLOADS</h4>
                    <div className='download'>
                      <div className='article-icon'>
                        <Image
                          src={constants.icons.download}
                          alt='download'
                        />
                      </div>
                      <h4
                        className='download-label pointer-cursor'
                        onClick={() =>
                          handleClick(
                            constants.caseStudyCTAGroup.download,
                            constants.actionButtonPlacement.right,
                            post?.acf?.pdf_link ? post.acf.pdf_link : null
                          )
                        }
                      >
                        Article (PDF-276KB)
                      </h4>
                    </div>
                  </div>
                </>
              )}
              {post?.acf?.key_insights ? (
                <div className='d-none d-lg-block'>
                  <div className={`col-12 pt-3`}>
                    <Separator classes='pb-3 border-black d-none d-lg-block' />
                  </div>
                  <div className='download-p-top'>
                    <h4 className='sidebar-heading'>Most Popular insights</h4>
                  </div>
                  <div className='insights-p-top'>
                    <ol>
                      {convert_string_to_array(post?.acf?.key_insights).map(
                        (insight) => (
                          <li className='list pb-2'>{insight}</li>
                        )
                      )}
                    </ol>
                  </div>
                </div>
              ) : (
                <div className='d-none d-lg-block'>
                  <div className={`col-12 pt-3`}>
                    <Separator classes='pb-3 border-black d-none d-lg-block' />
                  </div>
                  <div className='download-p-top'>
                    <h4 className='sidebar-heading'>Most Popular insights</h4>
                  </div>
                  <div className='insights-p-top'>
                    <ol>
                      {constants.insights.xKops.map((insight) => (
                        <li className='list pb-2'>{insight}</li>
                      ))}
                    </ol>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* authors bottom */}
        <div className='row mb-5'>
          <div className='col-12 col-lg-12 col-md-12'>
            <div className='authors-bottom'>
              <p className='author-title'>author(s)</p>
              {/* authors */}
              <div className='authors-bar'>
                <div>
                  <p className='blog-author'>
                    <b>By</b>
                    <a>{post.authors.length && post.authors[0].display_name}</a>
                  </p>
                </div>
                {post.authors.length > 1 && (
                  <div>
                    <p className='blog-author'>
                      <b>with</b>
                      {
                        // ignore first author in array as it is displayed above already
                        post.authors.slice(1).map((author, index) => (
                          <a key={author.user_id}>
                            {author.display_name}
                            {/*   Place comma after author name except the last author */}
                            {index !== post.authors.slice(1).length - 1 && ','}
                          </a>
                        ))
                      }
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid light-grey-bg blog-footer'>
        <div className='custom-container related-articles'>
          <p className='articles-title'>Related Articles</p>
          <div className='row'>
            <MultiplePosts
              source='blogs'
              postsPerPage={3}
              showSeparator={false}
              ignorePosts={1}
              showXploreButton={false}
              separatorText='Latest Posts'
              separatorAdditionalClasses='mb-5 xgm-t-5'
              dataFetchCallback={getAllWordpressBlogPosts}
              navigateBaseURL={constants.pageLinks.resources.path}
              renderedFor={constants.resourcePageFilters.articles.value}
            />
            <div className='col-lg-12 text-center xgm-b-5'>
              <Button
                label='Xplore More'
                classes='px-4 border py-3 rounded-3 purple-btn text-white'
                icon={true}
                isIcon={true}
                hrefLink={constants.pageLinks.resources.path}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

/**
 * Returns blog page by completing the rendering on server side
 *  @param {object} context; - contains next.js meta data
 * @returns {object} props; - contains data needed to render the page
 */
export const getServerSideProps = async (context) => {
  try {
    const { data, error } = await fetchPostContentBySlug(context.params.slug);
    if (error || !data) {
      return { notFound: true };
    }
    return { props: { post: data } };
  } catch (err) {
    return { notFound: true };
  }
};

export default WordpressSinglePostInner;
