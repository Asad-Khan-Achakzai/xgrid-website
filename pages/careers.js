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

//Component imports
import Button from '../components/button';
import YoutubePlayer from '../components/youtube-player';
import MetaTags from '../components/meta-tags';
import GlobalFootprint from '../components/global-footprint';

//Constants imports
import constants from '../constants/constants';

//Third party imports
import Lottie from 'lottie-react';

const Careers = () => {
  const reasonsArray = [
    {
      text: 'Align your key skills with your long term goals',
      image: constants.images.careersAlign,
    },
    {
      text: 'No clock ins clock outs because we trust you',
      image: constants.images.careersNoclock,
    },
    {
      text: 'Work from anywhere across the globe',
      image: constants.images.careersWFH,
    },
    {
      text: 'Grow in an easy going yet disciplined culture',
      image: constants.images.careersGrow,
    },
    {
      text: 'Enjoy daily meals, entertainment rooms, and care packages',
      image: constants.images.careersMeal,
    },
    {
      text: 'Communicate and collaborate to accomplish a shared goal',
      image: constants.images.careersCommunication,
    },
  ];
  const cultureArray = [
    {
      text: 'Honesty & excellence go hand in hand',
      image: constants.images.careersCultureIcon1,
    },
    {
      text: 'Goal is to encourage bold decisions',
      image: constants.images.careersCultureIcon2,
    },
    {
      text: 'Work on things you love',
      image: constants.images.careersCultureIcon3,
    },
    {
      text: 'No red tape, no long appointment',
      image: constants.images.careersCultureIcon6,
    },
    {
      text: 'Nothing like going forward as a team',
      image: constants.images.careersCultureIcon5,
    },
    {
      text: 'Do what you love, Love what you do',
      image: constants.images.careersCultureIcon4,
    },
  ];

  return (
    <>
      <MetaTags
        title='Careers at Xgrid - Xperience the Xtraordinary - Xgrid'
        description='Looking to work at Xgrid? Browse open positions across departments and learn more about the perks and benefits that come with a career on our team.'
        imgUrl={constants.thumbnails.careers}
      />
      <div
        className='container-fluid light-grey-bg py-5'
        id='careers-heading-banner-container'
      >
        <div className='custom-container position-relative'>
          <div className='circles-animation-career position-absolute d-none d-lg-block'>
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
          <div className='row justify-content-center'>
            <div className='col-sm-6 col-12 mt-lg-5'>
              <h1 className='mb-4 h1-internal w-100 f-lato-bold'>
                Let's make a dent in the universe together!
              </h1>
              <h4 className='mb-3 careers-header-sub-text heading-sm f-inter-reg'>
                At Xgrid, you are guaranteed a chance to transform your career,
                your team, and your community.
              </h4>
              <Button
                label={constants.pageLinks.openPositions.label}
                hrefLink={constants.pageLinks.openPositions.path}
                isIcon={true}
                iconColor='white'
                classes='purple-btn text-white border-0 rounded-3 px-5 py-3 mt-lg-3 my-sm-0 f-inter-reg'
              />
            </div>
            <div className='col-sm-6 col-12 col px-0 '>
              <Image
                src={constants.images.careersHeader}
                alt='careers header img'
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className='container-fluid py-5 my-5'
        id='careers-life-at-xgrid'
      >
        <div className='custom-container mb-5'>
          <div className='row'>
            <div className='col-12'>
              <div className='h1-internal text-center pb-4 f-lato-bold'>
                Life at <span className='color-purple'>Xgrid</span>
              </div>
              <YoutubePlayer
                url={'https://www.youtube.com/embed/OYoFIHxDMcE'}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className='container-fluid light-grey-bg py-5 my-5'
        id='careers-reasons'
      >
        <div className='custom-container pt-5'>
          <div className='row justify-content-center pt-5'>
            <div className='col-lg-8 col-md-12'>
              <div className='h1-internal text-center f-lato-bold'>
                6 reasons why you'd love{' '}
                <span className='color-purple'>this place</span>
              </div>
            </div>
          </div>
          <div className='row pt-5 mt-5 align-items-md-center align-items-lg-start position-relative'>
            <div className='circles-animation-reasonable position-absolute d-none d-lg-block'>
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
            <div className='col-md-6 col-12 mt-5'>
              <div className='row'>
                {reasonsArray.map((item, index) => (
                  <div
                    className='col-sm-6 col-12 mb-lg-5 pb-lg-5 mb-md-0 pb-md-4 pb-5'
                    key={index}
                  >
                    <div className='careers-reasons-img-wrapper'>
                      <Image
                        src={item.image}
                        alt={item.text}
                      />
                    </div>
                    <div className='careers-reasons-txt-wrapper mt-3'>
                      <h3 className='fw-500 color-dark-grey pe-5 pe-md-3 reason-img-text f-inter-semi-bold'>
                        {item.text}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className='col-sm-6 col-12 d-none d-md-block mt-5 pt-4'>
              <Image
                src={constants.images.careersReasonsMain}
                alt='image'
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className='container-fluid py-5 my-5'
        id='careers-culture'
      >
        <div className='custom-container pt-5'>
          <div className='row justify-content-center'>
            <div className='col-lg-8 col-md-12'>
              <div className='h1-internal text-center f-lato-bold'>
                Culture that is conducive to{' '}
                <span className='color-purple'>your growth</span>
              </div>
            </div>
          </div>
          <div className='row mt-3 flex-md-nowrap align-items-md-end'>
            <div className='col-md-3 col-4 mt-md-5 pt-5-custom no-padding-sm'>
              <Image
                src={constants.images.careersCulture1}
                alt='culture image'
              />
              <div className='h1-replica amanda-font color-green-imp  careers-culture-overlap-txt'>
                best place..
              </div>
            </div>
            <div className='col-lg-5 col-md-6 col-8 careers-culture-overlap-img no-padding-sm'>
              <Image
                src={constants.images.careersCulture2}
                alt='culture image'
              />
              <div className='d-none d-md-block'>
                {cultureArray.slice(0, 2).map((item, index) => (
                  <div
                    className='row careers-culture-overlap-row my-lg-5 my-md-4 pt-md-4 pt-lg-5 mt-5'
                    key={index}
                  >
                    <div className='col-lg-3 col-md-2 p-md-0 col-2 offset-md-1 text-end'>
                      <Image
                        src={item.image}
                        alt={item.text}
                      />
                    </div>
                    <div className='col-md-8 col-10'>
                      <h3 className='fw-500 color-dark-grey culture-items-text f-inter-semi-bold'>
                        {item.text}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className='col-md-4 col-lg-4 mt-lg-0 mt-md-5 mt-6'>
              {cultureArray.slice(2).map((item, index) => (
                <div
                  className='row my-lg-5 my-md-4 pt-md-4 pt-lg-5 my-5'
                  key={index}
                >
                  <div className='col-lg-3 col-md-3 col-2 offset-md-1 text-end'>
                    <Image
                      src={item.image}
                      alt={item.text}
                    />
                  </div>
                  <div className='col-md-8 col-10'>
                    <h3 className='fw-500 color-dark-grey culture-items-text f-inter-semi-bold'>
                      {item.text}
                    </h3>
                  </div>
                </div>
              ))}
              <div className='d-block d-md-none'>
                {cultureArray
                  .slice(0, 2)
                  .reverse()
                  .map((item, index) => (
                    <div
                      className='row careers-culture-overlap-row mt-5'
                      key={index}
                    >
                      <div className='col-2 text-end'>
                        <Image
                          src={item.image}
                          alt={item.text}
                        />
                      </div>
                      <div className='col-10'>
                        <h3 className='fw-500 color-dark-grey culture-items-text f-inter-semi-bold'>
                          {item.text}
                        </h3>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Global footprint section */}
      <GlobalFootprint
        mainHeading={'Global Footprint'}
        subHeading={
          ' Top tiered performance is expected, delivered, and maintained at Xgrid. Anything less is simply unacceptable.'
        }
        image={constants.images.careersFootprint}
        showOpenings={true}
      />
    </>
  );
};

export default Careers;
