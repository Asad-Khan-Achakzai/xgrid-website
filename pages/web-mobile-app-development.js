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

//Components Import
import HeroSection from '../components/hero-section';
import ImageTextOverlay from '../components/image-text-overlay';
import FeedbackSection from '../components/feedback-section';
import CaseStudySection from '../components/case-study-section';
import MetaTags from '../components/meta-tags';

//Constants imports
import constants from '../constants/constants';

export default function XWMG() {
  const services = [
    {
      title: 'Build native & cross-platform consumer apps',
      text: 'Design and develop your website with our experts to ensure a great user experience for all kinds of websites.',
      cards: [
        { image: constants.images.apps, text: 'Native iOS/ Android App' },
        { image: constants.images.tabletApps, text: 'Tablet App' },
        {
          image: constants.images.crossPlatform,
          text: ['Cross platform ', <br />, '(React Native /  Flutter)'],
        },
      ],
    },
    {
      title: 'Engineer front-end & back-end solutions',
      text: 'Build custom apps using the right technology stacks that align with your business objectives and help you achieve maximum growth.',
      cards: [
        { image: constants.images.eCommerce, text: 'e-Commerce website' },
        { image: constants.images.adminPanel, text: 'Admin panel' },
        { image: constants.images.api, text: 'API development & Integrations' },
      ],
    },
    {
      title: 'Architect scalable software solutions',
      text: 'Strategize, design, and develop high quality native and hybrid mobile applications for Android and iOS platforms.',
      cards: [
        { image: constants.images.cms, text: 'Content Management Systems' },
        {
          image: constants.images.webHosting,
          text: 'Website Protection & Hosting',
        },
        { image: constants.images.webBranding, text: 'Branding website' },
      ],
    },
  ];
  const heroSectionProps = {
    mainHeading: 'Developers You’ve Been Searching For',
    subText: 'Build teams delivering for Fortune 500s and Unicorns.',
    ctaText: 'Build your perfect team now!',
    image: constants.images.xwmgBannerImg1,
    imgAltTxt: 'Our developers team',
    btnText: 'Xplore',
    btnHandler: '#',
  };
  const feedBackSection1Props = {
    image: constants.images.xwmgBannerImg2,
    imgAltTxt: 'Our happy client',
    feedback:
      'Each engagement and project we work together on has unique requirements but we streamline the process together with the use of project management tools, seamless communication, etc. The Xgrid team and Expert Marketing Advisors team work together as one in a 100% effective workflow!',
    name: 'Courtney Kehl',
    designation: 'Founder, Expert Marketing Advisors',
  };
  const feedBackSection2Props = {
    image: constants.images.xwmgBannerImg4,
    imgAltTxt: 'Our happy client',
    feedback:
      'Xgrid’s team has an immense knowledge pool. They are always willing to help and go beyond my expectations to deliver projects on time, every time. We at Intervision are hoping to continue our growing relationship with them for both in-house and external customer engagements.',
    name: 'Paul Clement',
    designation: 'InterVision – Director Cloud & Automation Services',
    showAnimation: true,
  };
  const imageTextOverlay1Props = {
    image: constants.images.xwmgBannerImgB5,
    imgPersonClass: 'img-person-left',
    imgAltTxt: 'Modernized MS Access platform task management product',
    imgContainer: 'img-container1',
    mainHeading: 'Modernized field support for a 10,000+ employees company',
    subText:
      'Modernized MS Access platform task management application with supported backward compatibility.',
    linkTxt: 'See the case study',
    linkIcon: constants.images.rightArrowBlack,
    textOverlayPosition: 'right',
  };
  const imageTextOverlay2Props = {
    image: constants.images.xwmgBannerImgB6,
    imgPersonClass: 'img-person-right',
    imgAltTxt: 'Our development services for Marketing Agency',
    imgContainer: 'img-container2',
    mainHeading: '100% effective workflow across 8+ projects',
    subText:
      'Web development services for Expert Marketing Advisors on diverse projects in an ongoing partnership.',
    linkTxt: 'See the case study',
    linkIcon: constants.images.rightArrowBlack,
    textOverlayPosition: 'left',
  };

  return (
    <>
      <MetaTags
        title='Custom Mobile and Web Application Development Services - Xgrid'
        description='Xgrid offer impactful custom mobile and web app development services to bring your project to market on every device and platform.'
        imgUrl={constants.thumbnails.xwmg}
      />
      {/* Section 1 */}
      <div className='container-fluid light-grey-bg mb-5'>
        {/* TODO: Change this to SolutionArchitect component */}
        <HeroSection
          heading='Developers You’ve Been Searching For'
          subHeading='Build teams delivering for Fortune 500s and Unicorns.'
          image={constants.images.xwmgBannerImg1}
          otherElement={
            <h4 className='banner-sub-heading heading-sm fw-500 mb-5 f-inter-semi-bold'>
              Build your perfect team now!
            </h4>
          }
        />
      </div>

      {/* Section 2 */}
      <div className='custom-container my-5'>
        <div className='white-bg feedback-container-spacing'>
          <FeedbackSection {...feedBackSection1Props} />
        </div>
      </div>

      {/* Section 3 */}
      <div
        className='container-fluid light-grey-bg portfolio-spacing position-relative'
        id='feature-development'
      >
        <div className='circle-design-xwmg d-none d-lg-block d-md-block'>
          <Image
            src={constants.images.circleDesignXWMG}
            alt='circle artifact'
          />
        </div>
        <div className='custom-container'>
          <div className='row align-items-between justify-content-between'>
            <div className='col-lg-6 col-md-6 col-12 portfolio-text-spacing'>
              <div className='portfolio-logo-wrapper mt-5'>
                <Image
                  src={constants.images.ciscoTransparentLogo}
                  alt='cisco logo'
                />
              </div>
              <h2 className='banner-main-heading heading-lg position-relative pb-4 mt-5 f-lato-bold'>
                50+ Features Developed for a Fortune 500
              </h2>
              <h4 className='heading-sm color-black f-inter-reg'>
                Developing and maintaining multiple tools built for Cisco SD-WAN
                with 50+ feature enhancements in a partnership of 5+ years.
              </h4>
              {/* Need later-on when required page is complete */}
              {/* <div className="d-flex align-items-center case-study-btn">
                                <h4 className="banner-sub-heading fw-500 heading-sm-bold color-dark-grey m-0">See the case study</h4>
                                <span className="pt-2 pl-3">
                                    <Image className="m-0" alt="Arrow towards right side" src={constants.images.rightArrowBlack} />
                                </span>
                            </div> */}
            </div>
            <div className='col-lg-6 col-md-6 col-12 portfolio-banner-img-spacing'>
              <div className='portfolio-banner-img-wrapper'>
                <Image
                  className='mb-3'
                  alt='Lifecycle of project development'
                  src={constants.images.xwmgBannerImg3}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <div className='container-fluid p-0'>
        <ImageTextOverlay {...imageTextOverlay1Props} />
      </div>

      {/* Section 5 */}
      <div className='container-fluid services-container-spacing position-relative'>
        <div className='circle-design d-none d-lg-block d-md-block'>
          <Image
            src={constants.images.circleDesign}
            alt='circle artifact'
          />
        </div>
        <div className='half-circle d-none d-lg-block d-md-block'>
          <Image
            src={constants.images.halfCircle}
            alt='half circle artifact'
          />
        </div>
        <div className=' mt-2'>
          <div className='text-center services-heading-spacing'>
            <div className='h1-replica heading-xl f-lato-bold'>
              Choose your use case
            </div>
          </div>
          {services.map((service, index) => (
            <div
              key={index}
              className='row align-items-center justify-content-center'
            >
              <div className='col-xl-9 col-lg-10 col-md-11 col-10'>
                <div className='row'>
                  <div className='col-xl-5 col-lg-4 col-md-5 col-12 services-text-spacing'>
                    <div className='d-flex-col my-5 services-text-wrapper'>
                      <h3 className='color-black heading-sm services-title fw-500 service-title-wrapper f-inter-semi-bold'>
                        {service.title}
                      </h3>
                      <p className='text service-text f-inter-light'>
                        {service.text}
                      </p>
                    </div>
                  </div>
                  <div className='col-xl-7 col-lg-8 col-md-7 col-12 services-card-row-spacing'>
                    <div className='row justify-content-end'>
                      {service.cards.map((card, index) => (
                        <div className='col-lg-4 col-md-4 col-sm-4 col-12'>
                          <div>
                            <div
                              key={index}
                              className='text-center services-card'
                            >
                              <div className='card-icon-wrapper'>
                                <Image
                                  alt={card.text}
                                  src={card.image}
                                />
                              </div>
                              <h5 className='color-black heading-xs px-lg-0 px-3 f-inter-light'>
                                {card.text}
                              </h5>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 6 */}
      <div className='container-fluid p-0'>
        <ImageTextOverlay {...imageTextOverlay2Props} />
      </div>

      {/* Section 7 */}
      <div className='custom-container my-5 py-5'>
        <div className='white-bg feedback-container-spacing'>
          <FeedbackSection {...feedBackSection2Props} />
        </div>
      </div>
    </>
  );
}
