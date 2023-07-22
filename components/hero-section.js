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

//Components Imports
import Button from './button';

//Constants imports
import constants from '../constants/constants';

//Third party imports
import Lottie from 'lottie-react';

function HeroSection({ heading, subHeading, image, otherElement }) {
  const animationConfig = {
    circlesAnimation: {
      autoplay: true,
      loop: true,
      height: 330,
      width: 330,
    },
    linesAnimation: {
      autoplay: true,
      loop: false,
      height: 130,
      width: 130,
    },
    globeAnimation: {
      src: '/animations/purple-globe-animation.mp4',
      type: 'video/mp4',
      controls: false,
      loop: true,
      muted: true,
      autoPlay: true,
      disablePictureInPicture: true,
      width: '100%',
      height: '100%',
    },
  };
  return (
    <>
      {/* TODO: Should be a solutionArchitech component and change solutionArhitech naming convention */}
      <div className='light-grey-bg position-relative'>
        <div className='circles-animation-hero-section position-absolute d-none d-lg-block d-md-block'>
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
        <div className='custom-container'>
          <div className='row align-items-center'>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 heading-banner-text-col align-middle f-inter-bold'>
              <h1 className='banner-main-heading-xcbg h1-internal my-4 banner-heading f-lato-bold'>
                {heading}
              </h1>
              <h4 className='banner-sub-text mb-4 f-inter-light'>
                {subHeading}
              </h4>
              {otherElement}
              <div className='explore-btn-mob'>
                <Button
                  label={'Xplore More'}
                  scrollElementId={'feature-development'}
                  scrollOffset={250}
                  isIcon={true}
                  classes='purple-btn text-white border-0 rounded-3 px-5 py-3 mt-lg-3 my-sm-0 f-inter-reg'
                />
              </div>
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

export default HeroSection;
