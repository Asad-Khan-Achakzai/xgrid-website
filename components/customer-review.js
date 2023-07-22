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

//Third party imports
import Lottie from 'lottie-react';

function CustomerReview({ designation, name, message, image, showAnimation }) {
  const animationConfig = {
    circlesAnimation: {
      autoplay: true,
      loop: true,
      height: 330,
      width: 330,
    },
  };

  return (
    <div className='container mt-2 position-relative'>
      {showAnimation && (
        <div className='circles-animation-xcbg position-absolute d-none d-lg-block d-md-block'>
          <Lottie
            animationData={constants.animations.circlesAnimation}
            autoplay={animationConfig.circlesAnimation.autoplay}
            loop={animationConfig.circlesAnimation.loop}
            style={{
              height: animationConfig.circlesAnimation.height,
              width: animationConfig.circlesAnimation.width,
            }}
          />
        </div>
      )}
      <div className='customer-review'>
        <div className='row'>
          <div className='col-xl-4 col-lg-4 col-md-5 col-sm-6'>
            <div className='text-end customer-img-wrapper'>
              <Image
                className='testimonial-img'
                src={image}
                alt='testimonialImg'
              />
            </div>
          </div>
          <div className='col-xl-8 col-lg-8 col-md-7 col-sm-6'>
            <div className='text-wrapper m-3'>
              <h3 className='color-dark-grey pr-4  customer-text-wrapper f-inter-light'>
                {message}
              </h3>
              <h3 className='color-purple fw-500 mb-2 pl-4 text-xs-center customer-name f-inter-semi-bold'>
                {name}
              </h3>
              <h4 className='fw-500 pl-4 text-xs-center customer-designation f-inter-semi-bold'>
                {designation}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerReview;
