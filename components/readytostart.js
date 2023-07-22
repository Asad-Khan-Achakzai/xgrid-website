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

//  React imports
import { useContext } from 'react';

//  Next imports
import Image from 'next/image';

// Component Imports
import ContactForm from './contact-us-form';

// Constants imports
import constants from '../constants/constants';

// Context Api imports
import { AppContext } from '../context/appContext';

/**
 * Component for displaying contact form section
 * @param {{
 * title - Main headline text inside the form section
 * description - Additional description
 * }}
 * @returns component
 */
const ReadyToStart = ({ title, description }) => {
  const { isSearchResult } = useContext(AppContext);
  return (
    <>
      {isSearchResult && (
        <div
          className='container-fluid purple-bg  form-container'
          id='contact-us-section'
        >
          <div className='custom-container d-flex position-relative py-5'>
            <div className='left-bubble'>
              <Image
                src={constants.images.blueBubble}
                alt='bubble artifact'
              />
            </div>
            <div className='bg-light contact-form px-5 py-5'>
              <div className='col-12 text-center'>
                <div className='h1-replica contact-form-title f-lato-bold'>
                  {title}
                </div>
                <h4 className='contact-form-description mt-3 f-inter-reg'>
                  {description}
                </h4>
              </div>
              <div className={`col-lg-8 col-md-8 col-12 mx-auto pt-5`}>
                <ContactForm />
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
      )}
    </>
  );
};

export default ReadyToStart;
