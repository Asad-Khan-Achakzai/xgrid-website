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

//Next imports
import Image from 'next/image';

//Third party imports
import Lottie from 'lottie-react';

// Constants Import
import constants from '../constants/constants';

//Component imports
import Button from '../components/button';

function GlobalFootprint({ mainHeading, subHeading, image, showOpenings }) {
  return (
    <>
      <div
        className='container-fluid light-grey-bg py-5 my-5 position-relative'
        id='careers-footprint'
      >
        <div className='circles-animation-company position-absolute d-none d-lg-block d-md-block'>
          <Lottie
            animationData={constants.animations.circlesAnimation}
            autoplay={constants.animationConfig.circlesAnimation.autoplay}
            loop={constants.animationConfig.circlesAnimation.loop}
            style={{
              height: constants.animationConfig.circlesAnimation.height,
              width: constants.animationConfig.circlesAnimation.width,
            }}
          />
        </div>
        <div className='custom-container pt-5'>
          <div className='row justify-content-center py-5'>
            <div className='col-lg-7 col-md-12 text-center'>
              <div className='h1-internal f-lato-bold text-center'>
                {mainHeading}
              </div>
              <h4 className='f-inter-reg'>{subHeading}</h4>
            </div>
          </div>
          <div className='row pt-2'>
            <div className='col-12'>
              <Image
                src={image}
                alt={mainHeading}
              />
            </div>
          </div>
          {showOpenings && (
            <div className='row mt-5 pt-5'>
              <div className='col-12 text-center'>
                <h2 className='mb-4 f-lato-reg fw-600'>
                  Do you have what it takes to be a part of Xgrid?
                </h2>
                <Button
                  label={constants.pageLinks.openPositions.label}
                  hrefLink={constants.pageLinks.openPositions.path}
                  isIcon={true}
                  iconColor='white'
                  classes='purple-btn text-white border-0 rounded-3 px-lg-5 py-lg-3 careers-purple-btn f-inter-reg'
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default GlobalFootprint;
