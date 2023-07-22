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

//Rotating Text Component

//React imports
import { useRef, useEffect } from 'react';

//Components imports
import VerticalSlider from './vertical-slider';

//Constants imports
import constants from '../constants/constants';

//Third party imports
import Lottie from 'lottie-react';

function RotatingText() {
  const speedRefTop = useRef();
  const speedRefBottom = useRef();

  useEffect(() => {
    speedRefTop.current.setSpeed(2.5);
    speedRefBottom.current.setSpeed(2.5);
  });

  const animationConfig = {
    circlesAnimation: {
      autoplay: true,
      loop: true,
      height: 330,
      width: 330,
    },
  };

  return (
    <>
      <div className='bg-overlay-img'>
        <div className='container position-relative rotating-text-wrapper'>
          <div className='row floating-text pb-5'>
            <div className='col-lg-3 col-md-3 col-4 ml-10'>
              <h4 className='e f-inter-reg'>
                Collaborate with Industry Veterans
              </h4>
            </div>
            <div className='col-lg-2 col-md-3 col-4 offset-1 pe-4'>
              <h4 className='e f-inter-reg'>10+ years of experience</h4>
            </div>
          </div>
          <div className='circles-animation-user position-absolute'>
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
          <div className='row mt-4'>
            <div className='col-12 customer-col'>
              <VerticalSlider />
            </div>
          </div>
          <div className='row floating-text justify-content-end pt-5 mb-5 mb-md-0'>
            <div className='col-lg-2 col-md-3 col-4'>
              <h4 className='e f-inter-reg'>Dash with Fortune 500</h4>
            </div>
            <div className='col-lg-2 col-md-3 col-4'>
              <h4 className='e f-inter-reg'>Work with Top 1% Talent</h4>
            </div>
            <div className='col-lg-2 col-md-3 col-4 offset-lg-1 mr-10'>
              <h4 className='e f-inter-reg'>Scale Your Team Quickly</h4>
            </div>
          </div>
          <div className='rotating-text-line-top-animation position-absolute mr-4 pt-3 d-lg-block d-md-block d-sm-block d-none'>
            <Lottie
              animationData={constants.animations.blackLineAnimationHorizontal}
              autoplay={true}
              loop={true}
              style={{ height: 230, width: 230 }}
              lottieRef={speedRefTop}
            />
          </div>
          <div className='rotating-text-line-bottom-animation position-absolute pb-5 ml-4 d-lg-block d-md-block d-sm-block d-none'>
            <Lottie
              animationData={
                constants.animations.blackLineAnimationHorizontalLong
              }
              autoplay={true}
              loop={true}
              style={{ height: 230, width: 230 }}
              lottieRef={speedRefBottom}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default RotatingText;
