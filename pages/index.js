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

//React imports
import { useEffect, useRef } from 'react';

//Third party imports
import Lottie from 'lottie-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger); //Registering ScrollTrigger plugin

//Next imports
import Image from 'next/image';

//Components Import
import BadgeSlider from '../components/badge-slider';
import Button from '../components/button';
import Logos from '../components/logos';
import RotatingText from '../components/rotating-text';
import DraggableSlider from '../components/draggable-slider';
import ClientSlider from '../components/client-slider';
import XgridTalks from '../components/xgrid-talks';
import MetaTags from '../components/meta-tags';
import CaseStudySection from '../components/case-study-section';

//Constants imports
import constants from '../constants/constants';

//TO DO: use translation library (i18next) for text after trying out text animations.

export default function Home() {
  const xtRef = useRef();
  const lsRef = useRef();
  const lsbRef = useRef();

  const caseStudies = [
    {
      logo: constants.images.ciscoTransparentLogo,
      heading: 'Fortune 500',
      description:
        'A customized cloud-hosted solution helped Cisco transform its networking device configurations and policies into SD-WAN compatible format.',
    },
    {
      logo: constants.images.usisTransparentLogo,
      heading: 'Enterprise',
      description:
        'USIS greatly streamlined their bulk tasks and activities on their job sites, thanks to a ProCon application designed specifically for this purpose.',
    },
    {
      logo: constants.images.copbitTransparentLogo,
      heading: 'Enterprise',
      description:
        'A professional team of AWS certified professionals assisted Copebit AG in migrating their microservices and automating Blue-Green deployment with their expertise.',
    },
  ];
  const draggableSliderImages = [
    constants.images.fmSlideImg,
    constants.images.triangleArtSlideImg,
    constants.images.alkiraSlideImg,
    constants.images.gradientSlideImg,
    constants.images.copebitSlideImg,
    constants.images.donutsSlideImg,
    constants.images.ciscoSlideImg,
    constants.images.umbrellaSlideImg,
    constants.images.procornSlideImg,
    constants.images.artSlideImg,
    constants.images.emaSlideImg,
    constants.images.gradientSlideImg,
    constants.images.codeSlideImg,
    constants.images.artSlideImg1,
  ];

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
  const cards = [
    { title: 10, description: 'Open Source Projects' },
    { title: 10, description: 'Years Of Experience' },
  ];
  useEffect(() => {
    ScrollTrigger.matchMedia({
      '(min-width:1112px)': function () {
        gsap.from(xtRef.current, {
          x: 100,
          duration: 1,
          scrollTrigger: {
            trigger: '.xt-trigger',
            scrub: true,
          },
        });
        gsap.from(lsRef.current, {
          x: 50,
          duration: 0.5,
          scrollTrigger: {
            trigger: '.ls-trigger',
            scrub: true,
          },
        });
        gsap.from(lsbRef.current, {
          x: 100,
          duration: 0.2,
          scrollTrigger: {
            trigger: '.lsb-trigger',
            scrub: true,
          },
        });
      },
    });
  });

  return (
    <>
      <MetaTags
        title='Xgrid - Cloud Services & Custom Application Development'
        description='Xgrid has a history of delivering a wide range of intelligent and secure cloud infrastructure, development, user interface and user experience solutions.'
        imgUrl={constants.thumbnails.main}
      />
      <div
        className='container-fluid pb-5'
        id='heading-banner-container'
      >
        <div className='custom-container position-relative'>
          <div className='circles-animation-wrapper position-absolute d-none d-lg-block'>
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
          <div className='black-line-diagonal-animation-wrapper position-absolute d-none d-md-block'>
            <Lottie
              animationData={constants.animations.blackLineAnimationDiagonal}
              autoplay={animationConfig.linesAnimation.autoplay}
              loop={animationConfig.linesAnimation.loop}
              style={{
                height: animationConfig.linesAnimation.height,
                width: animationConfig.linesAnimation.width,
              }}
            />
          </div>
          <div className='purple-line-diagonal-animation-wrapper position-absolute d-none d-lg-block'>
            <Lottie
              animationData={constants.animations.purpleLineAnimationDiagonal}
              autoplay={true}
              loop={true}
              style={{ height: 130, width: 130 }}
            />
          </div>
          <div className='row'>
            <div className='col-md-6 col-sm-12 col-12 mt-xl-5 pt-xl-5 pt-0 heading-banner-text-col'>
              <h1 className='banner-main-heading mb-3 f-lato-bold'>
                There’s a better way to scale your expertise
              </h1>
              <h4 className='banner-sub-text mb-5 f-inter-reg'>
                Fortune 500s and Unicorns have seen 98% success rate with Xgrid.
              </h4>
              <h4 className='banner-sub-heading fw-500 f-inter-reg'>
                Your search to find that{' '}
                <span className='color-purple'>Top 1% Talent</span> ends here.
              </h4>
              <Button
                label={'Xplore More'}
                isIcon={true}
                scrollElementId={'satisfied-customer'}
                scrollOffset={250}
                classes='purple-btn text-white border-0 rounded-3 px-5 py-3 mt-lg-3 my-sm-0 f-lato-reg xplore-more-btn'
              />
            </div>
            <div className='col-md-6 col-sm-12 col-12 px-0 d-none justify-content-around align-items-end d-md-flex images-block'>
              <div className='col-xl-7 col-lg-6 col-md-6 mt-xl-5 mt-0 banner-image-wrapper-left text-end'>
                <div className='home-hero-img hero-img'>
                  <Image
                    className='mb-0 mb-lg-3'
                    src={constants.images.bannerImg1}
                    alt='img1'
                  />
                </div>
                <Image
                  src={constants.images.bannerImg2}
                  alt='img2'
                />
              </div>
              <div className='col-xl-4 col-lg-5 col-md-5 mt-xl-5 mt-0 banner-image-wrapper-right align-self-end text-end'>
                <Image
                  src={constants.images.bannerImg3}
                  alt='img3'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='row d-md-none d-flex justify-content-evenly align-items-end mt-5'>
          <div className='col-lg-5 col-md-5 col-6 px-0'>
            <Image
              src={constants.images.bannerImg2}
              alt='img2'
            />
          </div>
          <div className='col-lg-4 col-md-4 col-6 px-0'>
            <Image
              src={constants.images.bannerImg1}
              alt='img1'
            />
          </div>
        </div>
      </div>
      <div
        className='container-fluid py-5'
        id='logo-strip-container'
      >
        <Logos />
      </div>
      <div
        className='container-fluid light-grey-bg-bg mb-0 z-index-1'
        id='satisfied-customer'
      >
        <RotatingText />
      </div>
      <div
        className='container-fluid pt-5 light-grey-bg globe-container'
        id='globe-container'
      >
        <div className='custom-container'>
          <div className='row justify-content-between align-items-center'>
            <div className='col-xl-5 col-lg-5 col-md-5 col-sm-4 col-12 text-center d-md-flex d-lg-block justify-content-md-center'>
              <>
                {process.browser &&
                typeof window.orientation !== 'undefined' ? (
                  // Show image for mobile devices those don't support autoplay
                  <Image
                    src={constants.images.TrulyGlobalGlobe}
                    alt='Globe img'
                  />
                ) : (
                  // Show video for the rest of the devices
                  <video
                    width={animationConfig.globeAnimation.width}
                    height={animationConfig.globeAnimation.height}
                    autoPlay={animationConfig.globeAnimation.autoPlay}
                    muted={animationConfig.globeAnimation.muted}
                    loop={animationConfig.globeAnimation.loop}
                    disablePictureInPicture={
                      animationConfig.globeAnimation.disablePictureInPicture
                    }
                  >
                    <source
                      src={animationConfig.globeAnimation.src}
                      type={animationConfig.globeAnimation.type}
                    />
                    Your browser does not support the video tag.
                  </video>
                )}
              </>
            </div>

            <div className='col-xl-7 col-lg-7 col-md-7 col-sm-8 col-12'>
              <div className='row d-flex mb-4'>
                <div className='col-11 ps-0'>
                  <h3 className='color-purple ps-lg-2 fw-500 text-center text-lg-start'>
                    Truly Global
                  </h3>
                </div>
              </div>
              <div className='row justify-content-center justify-content-md-start'>
                <div className='row d-flex justify-content-around mb-md-4 col-12 f-lato'>
                  <div className='col-xl-6 col-lg-6 col-md-6 col-6 mb-4 mb-md-0 text-center'>
                    <div className=' content-box'>
                      <h1 className='globe-card-heading f-lato'>
                        1000<span className='color-purple'>+</span>
                      </h1>
                      <h4 className='globe-card-title color-dark-grey color-dark-grey'>
                        Applications Deployed
                      </h4>
                    </div>
                  </div>
                  <div className='col-xl-6 col-lg-6 col-md-6 col-6 mb-4 mb-md-0 text-center '>
                    <div className='content-box'>
                      <h1 className='globe-card-heading f-lato'>
                        100<span className='color-purple'>+</span>
                      </h1>
                      <h4 className='globe-card-title color-dark-grey'>
                        Delivered Projects
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row justify-content-center justify-content-md-start'>
                <div className='row d-flex justify-content-around mb-md-4 col-12'>
                  {cards.map((card) => (
                    <div className='col-xl-6 col-lg-6 col-md-6 col-6 mb-6 mb-md-0 text-center'>
                      <div className=' content-box'>
                        <h1 className='globe-card-heading f-lato'>
                          {card.title}
                          <span className='color-purple'>+</span>
                        </h1>
                        <h4 className='globe-card-title color-dark-grey color-dark-grey'>
                          {card.description}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className='row mt-5 pt-5'>
            <div className='col-12 text-center'>
              <div className='h1-replica badge-title f-lato-bold'>
                <h1>Raising the Bar</h1>
              </div>
              <h4 className='brilliance-sub-text mt-4 f-inter-light'>
                Staying up-to-date on industry best practices is important to
                us. Presently, 73% of our team holds relevant certifications,
                and we are committed to reaching an even greater rate of 85% in
                the coming year.
              </h4>
            </div>
          </div>
          <BadgeSlider />
        </div>
      </div>
      <div
        className='container-fluid mt-5 pt-5'
        id='client-container'
      >
        <div className='custom-container'>
          <div className='row mb-5 pb-5'>
            <div className='col-12 text-center'>
              <div className='h1-replica client-container-title f-lato-bold'>
                <h1> Satisfied Customers </h1>
              </div>
              <h2 className='across-continent f-inter-semi-bold'>
                Across 3 Continents
              </h2>
              <h4 className='client-container-text mt-4 mt-md-0 f-inter-reg'>
                Expect top-tiered performance from Xgrid. Anything less is
                simply unacceptable.
              </h4>
            </div>
          </div>
          <ClientSlider />
        </div>
      </div>
      <div className='container-fluid py-6 light-grey-bg'>
        <DraggableSlider images={draggableSliderImages} />
      </div>
      <div
        className='custom-container py-5 mb-4'
        id='brilliance-container'
      >
        <div className='row mt-5'>
          <div className='col-12 text-center'>
            <div className='h1-replica brilliance-title f-lato-bold'>
              <h1> 98% Success Rate </h1>
            </div>
          </div>
        </div>
        <div className='row'>
          <CaseStudySection caseStudies={caseStudies} />
        </div>
      </div>
      <div className='container-fluid light-grey-bg py-5 xt-trigger'>
        <div
          className='custom-container py-4 position-relative XgridTalks'
          id='talks-container'
        >
          <div
            className='xt-circles-animation-wrapper d-none d-md-block'
            ref={xtRef}
          >
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
          <XgridTalks />
        </div>
      </div>
      <div
        className='custom-container mt-lg-5 mt-md-0 pt-5 ls-trigger'
        id='join-container'
      >
        <div className='row pt-5 '>
          <div className='col-12 text-center'>
            <div className='h1-replica join-title mb-4 f-lato-bold'>
              Looking for a career{' '}
              <span className='amanda-font color-green'>boost?</span>
            </div>
          </div>
        </div>
        <div className='row text-center'>
          <div className='col-12'>
            <Button
              label={'Join Us Now'}
              hrefLink={constants.pageLinks.careers.path}
              isIcon={true}
              iconColor='white'
              classes='purple-btn text-white border-0 rounded-3 px-5 py-3 f-inter-reg'
            />
          </div>
        </div>
        <div className='row justify-content-center'>
          <div className='col-12 text-center mt-5 jumping-img-container jumping-img'>
            <Image
              src={constants.images.groupPiclastSection}
              alt='group image'
            />
          </div>
        </div>
      </div>
      {/* Ready to get started with animations */}

      <div className='container-fluid'>
        <div className='custom-container position-relative'>
          <div
            className='ls-circles-animation-wrapper'
            ref={lsRef}
          >
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
          <div
            className='lsb-circles-animation-wrapper'
            ref={lsbRef}
          >
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
        </div>
      </div>
    </>
  );
}
