/*
 Copyright (c) 2022, Xgrid Inc, http://xgrid.co

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either expcontents or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

// Next imports
import { useRouter } from 'next/router';

// NPM imports
import he from 'he';

// Components imports
import Button from './button';

/**
 * Component to show post with Image, title, subtext, and category inside a card
 * @param {object} content - content for showing post card
 * @param {string} navigateBaseURL - base url for route navigation
 * @returns Card
 */
const SinglePost = ({ content, navigateBaseURL }) => {
  const router = useRouter();

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
    <div className='col-lg-4 col-md-6 mb-6' key={content.id}>
      <div className='card border-0 h-100 bg-transparent'>
        <a
          className='resourceBlog'
          href={
            content?.caseStudyLink
              ? content.caseStudyLink
              : `${navigateBaseURL}/${content.slug}`
          }
        >
          <img
            width='100%'
            className='card-image-top cursor-pointer mb-2'
            alt={content?.heroSection?.heroImgAlt || 'featured post'}
            src={content?.featured_image_src || content?.thumbnail?.imgSrc.src}
            onClick={() =>
              navigateWithPostSlug(
                content?.slug,
                content?.caseStudyLink && content.caseStudyLink
              )
            }
          />
        </a>
        <div className='card-body bg-white d-flex flex-column justify-content-between h-100 align-items-baseline'>
          <p className='mb-2 f-inter-reg'>
            {content?.ctaGroupSection?.industry ||
              content?._embedded['wp:term'][0].map((content) => content.name)}
          </p>
          <a
            className='resourceBlog'
            href={
              content?.caseStudyLink
                ? content.caseStudyLink
                : `${navigateBaseURL}/${content.slug}`
            }
          >
            <h3
              className='fw-semibold text-dark text-hover-purple cursor-pointer mb-3 f-lato-reg'
              onClick={() =>
                navigateWithPostSlug(
                  content?.slug,
                  content?.caseStudyLink && content.caseStudyLink
                )
              }
            >
              {content?.title
                ? he.decode(content?.title.rendered)
                : content?.cardTitle}
            </h3>
          </a>
          <div
            className='f-inter-reg post-desc'
            dangerouslySetInnerHTML={{
              __html: content?.excerpt?.rendered
                ? content?.excerpt.rendered
                : content?.didYouKnowSection?.content.slice(0, 130) +
                  ' [......]',
            }}
          ></div>
          <a
            className='resourceBlog pt-3'
            href={
              content?.caseStudyLink
                ? content.caseStudyLink
                : `${navigateBaseURL}/${content.slug}`
            }
          >
            <Button
              label='Read more'
              iconClasses={'color-purple'}
              isIcon={true}
              classes='bg-transparent border-0 text-hover-purple ps-0 f-inter-reg'
              clickEvent={() =>
                navigateWithPostSlug(
                  content?.slug,
                  content?.caseStudyLink && content.caseStudyLink
                )
              }
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
