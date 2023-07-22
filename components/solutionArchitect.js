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

// React Imports
import React from 'react';

// Next Imports
import Image from 'next/image';

// Constants Imports
import constants from '../constants/constants';

// Component Imports
import Button from './button';

function SolutionArchitect({ heading, subheading, image }) {
  return (
    <>
      <div className='light-grey-bg container-fluid'>
        <div className='custom-container'>
          <div className='row align-items-center'>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 heading-banner-text-col align-middle'>
              <h1 className='banner-main-heading-xcbg h1-internal my-4 banner-heading f-lato-bold'>
                {heading}
              </h1>
              <h4 className='banner-sub-text mb-4 f-inter-reg'>{subheading}</h4>
              <div className='mb-3'>
                <Image
                  src={constants.images.AchievmentBadge}
                  alt={subheading}
                />
              </div>
              <Button
                label={'Xplore More'}
                scrollElementId={'deliver-quality'}
                scrollOffset={150}
                isIcon={true}
                classes='purple-btn text-white border-0 rounded-3 px-5 py-3 mt-lg-3 my-sm-0 f-inter-reg'
              />
            </div>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 text-end'>
              <Image
                className='mb-3 mt-4'
                src={image}
                alt='solution-architect-img'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SolutionArchitect;
