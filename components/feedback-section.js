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

// Constants Imports
import constants from '../constants/constants';

//Third party imports
import Lottie from 'lottie-react';

function FeedbackSection({
  image,
  imgAltTxt,
  feedback,
  name,
  designation,
  showAnimation,
}) {
  const animationConfig = {
    circlesAnimation: {
      autoplay: true,
      loop: true,
      height: 330,
      width: 330,
    },
  };
  console.log('showAnimation', showAnimation);
  console.log('name', name);

  return (
    <>
      <div className='row justify-content-center align-items-center position-relative '>
        {showAnimation && (
          <div className='circles-animation-xwmg position-absolute d-none d-lg-block d-md-block'>
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
        <div className='col-lg-4 col-md-4 col-sm-6 col-12'>
          <div className='feedback-client-img text-end'>
            <Image alt={imgAltTxt} src={image} />
          </div>
        </div>
        <div className='col-lg-8 col-md-8 col-sm-6 col-12'>
          <div className='wrap-text'>
            <h3 className='color-dark-grey quote mt-4 mb-3 f-inter-light'>
              {feedback}
            </h3>
            <h3 className='color-purple fw-500 client-name mb-2 pl-4 f-inter-semi-bold'>
              {name}
            </h3>
            <h4 className='fw-500 designation-area client-designation heading-sm f-inter-semi-bold'>
              {designation}
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeedbackSection;
