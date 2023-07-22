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

// Next imports
import Image from 'next/image';

// Components imports
import Button from '../button';

// Constant imports
import constants from '../../constants/constants';

/**
 * Component displays about us section
 * @param {string} title
 * @param {string} text
 * @param {string} btnLabel
 * @param {string} btnClasses
 * @param {string} img
 * @param {string} containerClasses
 * @returns Component
 */
const AboutUs = ({
  title,
  text,
  btnLabel,
  btnClasses,
  img,
  containerClasses,
}) => {
  return (
    <>
      <div className={`${containerClasses}`}>
        <div className='col-lg-11 ms-4'>
          <div className='row'>
            <div className='col-sm-12 col-lg-6 col-md-6 py-5 text-wrapper'>
              <div className='mask-container'>
                <div className='left-mask d-none d-lg-block d-xl-block'>
                  <Image src={constants.images.leftMask} alt='mask-img' />
                </div>
                <h2 className='about-us-heading'>{title}</h2>
              </div>
              <p className='my-4 about-us-description'>{text}</p>
              <Button
                label={btnLabel}
                classes={`${btnClasses} f-inter-reg`}
                scrollElementId='contact-us-section'
                scrollOffset={200}
                hrefLink={constants.pageLinks.xcbg.path}
              />
            </div>
            <div className='col-sm-12 col-lg-6 col-md-6 d-inline-flex justify-content-center'>
              <Image src={img} alt='about-img' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
