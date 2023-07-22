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

// Constants imports
import constants from '../../constants/constants';

// Components imports
import Button from '../button';

/**
 * Component displays about us section
 * @param {string} title
 * @param {string} text
 * @param {string} btnLabel
 * @param {string} btnClasses
 * @param {image} img
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
      <div className={`row  ${containerClasses} case-study-card-about-us`}>
        <div className='col-sm-6 col-lg-6 py-3 text-wrapper'>
          <h2>{title}</h2>
          <p className='my-5'>{text}</p>
          <Button
            label={btnLabel}
            classes={btnClasses}
            scrollElementId='contact-us-section'
            scrollOffset={200}
            hrefLink={constants.pageLinks.xcbg.path}
          />
        </div>
        <div className='col-sm-12 col-lg-6'>
          <Image
            src={img}
            alt={title}
          />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
