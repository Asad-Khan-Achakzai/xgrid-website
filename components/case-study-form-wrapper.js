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

//  Next imports
import Image from 'next/image';

// Constants imports
import constants from '../constants/constants';

/**
 * Component for displaying contact form section
 * @param {{
 * title - Main headline text inside the form section
 * description - Additional description
 * }}
 * @returns component
 */
const CaseStudyFormWrapper = ({ title, description, caseStudyForm }) => {
  return (
    <>
      <div
        className='container-fluid purple-bg p-5 form-container'
        id='contact-us-section'
      >
        <div className='container d-flex position-relative py-5'>
          <div className='left-bubble'>
            <Image
              src={constants.images.blueBubble}
              alt='blue bubble image'
            />
          </div>
          <div className='bg-light contact-form px-5 py-5'>
            <div className='col-12 text-center'>
              <h2 className='contact-form-title'>{title}</h2>
              <h4 className='contact-form-description mt-3'>{description}</h4>
            </div>
            <div className={`col-lg-8 col-md-8 col-12 mx-auto pt-5`}>
              {caseStudyForm}
            </div>
          </div>
          <div className='right-diagonal-lines'>
            <Image
              src={constants.images.diagonalLines}
              alt='diagonal lines'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudyFormWrapper;
