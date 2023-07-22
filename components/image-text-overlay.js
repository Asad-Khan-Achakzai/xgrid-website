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

//Next imports
import Image from 'next/image';

//Constants import
import constants from '../constants/constants';

/**
 * Function to display image text overlay
 * @param {String} imgPersonClass
 * @param {String} imgPersonClass
 * @param {String} mainHeading
 * @param {String} subText
 * @param {String} mainText
 * @param {String} textOverlayPosition
 * @param {String} linkTxt
 * @param {String} linkIcon
 * @param {String} image
 * @param {String} hrefLink
 * @param {String} fullLink
 * @returns Component
 */
const ImageTextOverlay = ({
  imgContainer,
  imgPersonClass,
  mainHeading,
  subText,
  mainText,
  textOverlayPosition,
  linkTxt,
  linkIcon,
  image,
  hrefLink,
  fullLink,
}) => {
  return (
    <>
      <div className={imgContainer}>
        <div className='custom-container'>
          <div
            className={`row align-items-center pt-md-5 pt-lg-0 flex-column-reverse ${
              textOverlayPosition === 'right'
                ? 'flex-md-row'
                : 'flex-md-row-reverse'
            }`}
          >
            <div className='col-lg-6 text-center col-md-6 col-12 align-self-end'>
              <div className='mb-neg-5'>
                <Image
                  src={image}
                  alt={mainHeading}
                />
              </div>
            </div>
            <div className='col-lg-6 col-md-6 col-12 px-5 py-5 py-md-0 px-lg-2'>
              {mainText ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: mainText,
                  }}
                ></div>
              ) : (
                <div>
                  <h2 className='image-text-overlay f-lato-bold color-dark-grey fw-700 heading-lg'>
                    {mainHeading}
                  </h2>
                  <h4 className='text-start color-dark-grey img-container-spacing f-lato-reg fw-400 heading-sm'>
                    {subText}
                  </h4>
                </div>
              )}
              {hrefLink || fullLink ? (
                <a
                  className='resourceBlog'
                  href={
                    fullLink
                      ? `${fullLink}`
                      : `${constants.pageLinks.caseStudies.path}/${hrefLink}`
                  }
                >
                  <div className='d-flex justify-content-start align-items-center mt-5'>
                    <h4
                      className='text-start heading-sm text-black fw-500 cursor-pointer'
                      style={{ marginTop: '0 !important' }}
                    >
                      {linkTxt}
                    </h4>
                    <span className='pl-3 max-w-icon'>
                      <Image
                        alt={'Arrow in right direction'}
                        src={linkIcon}
                      />
                    </span>
                  </div>
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageTextOverlay;
