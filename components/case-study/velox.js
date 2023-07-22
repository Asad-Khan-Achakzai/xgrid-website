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

/**
 * Component displays velox section
 * @param {string} title
 * @param {string} text
 * @param {string} btnLabel
 * @param {string} btnClasses
 * @param {string} img
 * @param {string} containerClasses
 * @returns Component
 */
const Velox = ({
  title,
  text,
  btnLabel,
  btnClasses,
  img,
  containerClasses,
  hrefLink,
}) => {
  return (
    <div className={`${containerClasses}`}>
      <div className='col-lg-11'>
        <div className='row'>
          <div className='col-sm-12 col-lg-6 col-md-6 order-1 ps-5 ps-lg-0'>
            <Image
              src={img}
              alt={title}
            />
          </div>
          <div className='col-sm-12 col-lg-6 col-md-6 py-3 text-wrapper order-md-1 order-lg-1'>
            <h2 className='color-white-font about-us-heading f-lato-reg'>
              {title}
            </h2>
            <h2 className='my-5 color-white-font about-us-description'>
              {text}
            </h2>
            <Button
              label={btnLabel}
              classes={`${btnClasses} f-inter-reg`}
              isIcon={true}
              hrefLink={hrefLink}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Velox;
