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

// React Imports
import React, { Fragment } from 'react';
import { useRef } from 'react';

import { Helmet } from 'react-helmet';

// Bootstrap Imports
import { Row, Col, Button, Container } from 'react-bootstrap';

//Next imports
import Image from 'next/image';

// Constants Imports
import constants from '../../../../constants/constants';

// Component Imports
import VideoComponent from '../../../../components/VideoComponent/VideoComponent';

// Smooth Scroll Imports
import { Element } from 'react-scroll';

// Components Imports
import SliderComponent from '../../../../components/SliderComponent/SliderComponent';
import Loader from '../../../../components/Loader/Loader';
import CaseStudyHeader from '../../../../components/CaseStudyHeader/CaseStudyHeader';
import ComponentDesign1 from '../../../../components/ComponentDesign1/ComponentDesign1';
import DocumentDesign from '../../../../components/DocumentDesign/DocumentDesign';
import CarouselComponent from '../../../../components/Carousel/Carousel';
import ShapesComponent from '../../../../components/ShapesComponent/ShapesComponent';

class AlkiraPortfolio extends React.Component {
  constructor() {
    super();
    this.myElementRef = React.createRef();

    this.state = {
      showLoader: true,
      prevScrollpos: 0,
      visible: true,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleMenuScroll);
    setTimeout(() => {
      const id = window.location.hash.split('#')[1];
      if (id) {
        const yOffset = -70;
        const element = document.getElementById(id);
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 2000);

    // Todo: SetTimeOut will be removed
    setTimeout(async () => {
      const {
        transformYBlock,
        animateNextPortfolioIndicator,
        animatesVideoSection,
        footerElementTransform,
        caseStudyHeaderAnimate,
        // changesNavbarLogo,
        animatesComponent1Elements,
      } = await import('../../../../components/animation-service');
      this.setState({ showLoader: false });
      // <Example />;
      // Animates Header Elements
      caseStudyHeaderAnimate(
        '#alkira-section-1-main-wrapper',
        '#alkira-menu-main-wrapper'
      );

      // Animates Component 1 Elements
      animatesComponent1Elements();

      transformYBlock(
        '#alkira-menu-main-wrapper',
        '#alkira-menu-main-wrapper .navbar-main-wrapper',
        200,
        0,
        'nav--top'
      );

      // Animates Sub Menu on Scroll
      transformYBlock(
        '#alkira-section-2-main-wrapper',
        '#alkira-submenu-main-wrapper .submenu-casestudy-wrapper',
        -50,
        0,
        'subnav--default'
      );
      transformYBlock(
        '#alkira-section-12-main-wrapper',
        '#alkira-submenu-main-wrapper',
        50,
        0,
        'subnav-top-wrapper'
      );

      // Animates Section Elements
      transformYBlock(
        '#alkira-section-4-main-wrapper',
        '#alkira-section-4-main-wrapper .trigger-first-section-content',
        50,
        0.85,
        'start-anim-transform-up'
      );
      transformYBlock(
        '#alkira-section-4-main-wrapper .trigger-second-section-content',
        '#alkira-section-4-main-wrapper .trigger-second-section-content .initial-opacity-transform-block',
        50,
        0.85,
        'start-anim-transform-up'
      );
      transformYBlock(
        '#alkira-section-4-main-wrapper .social-media-content-wrapper',
        '#alkira-section-4-main-wrapper .social-media-content-wrapper .initial-opacity-transform-block',
        50,
        0.85,
        'start-anim-transform-up'
      );
      transformYBlock(
        '#alkira-section-5-main-wrapper .trigger-section-content',
        '#alkira-section-5-main-wrapper .trigger-section-content .initial-opacity-transform-block',
        50,
        0.85,
        'start-anim-transform-up'
      );
      transformYBlock(
        '#alkira-section-8-main-wrapper .trigger-section-content',
        '#alkira-section-8-main-wrapper .trigger-section-content .initial-opacity-transform-block',
        50,
        0.85,
        'start-anim-transform-up'
      );
      transformYBlock(
        '#alkira-section-8-main-wrapper .trigger-second-section-content',
        '#alkira-section-8-main-wrapper .trigger-second-section-content .initial-opacity-transform-block',
        50,
        0.85,
        'start-anim-transform-up'
      );
      transformYBlock(
        '#alkira-section-9-main-wrapper .trigger-section-content',
        '#alkira-section-9-main-wrapper .trigger-section-content .initial-opacity-transform-block',
        50,
        0.85,
        'start-anim-transform-up'
      );

      // Animates Documentation Content
      transformYBlock(
        '#alkira-section-10-main-wrapper .document-component-main-wrapper',
        '#alkira-section-10-main-wrapper .document-component-main-wrapper .doc-content-animation-trigger',
        0,
        0.8,
        'start-anim-transform-up'
      );
      transformYBlock(
        '#alkira-section-10-main-wrapper .document-component-main-wrapper',
        '#alkira-section-10-main-wrapper .document-component-main-wrapper .doc-img-animation-trigger',
        500,
        0.9,
        'start-anim-transform-up'
      );
      transformYBlock(
        '#alkira-section-11-main-wrapper .trigger-section-content',
        '#alkira-section-11-main-wrapper .trigger-section-content .initial-opacity-transform-block',
        50,
        0.85,
        'start-anim-transform-up'
      );
      transformYBlock(
        '#alkira-section-11-main-wrapper .trigger-section-img',
        '#alkira-section-11-main-wrapper .trigger-section-img .initial-opacity-transform-block',
        50,
        0.85,
        'start-anim-transform-up'
      );

      // Animates Video Section
      animatesVideoSection('desktopAlkiraVideo');
      animatesVideoSection('mobileAlkiraVideo');

      // Animates Footer Elements
      footerElementTransform();

      // Animates Next Section Indicator
      animateNextPortfolioIndicator();
    }, 1500);
  }

  componentWillUnmount() {
    if (typeof window === 'object') {
      window.removeEventListener('scroll', this.handleMenuScroll);
    }
  }

  // Hide or show the menu.
  handleMenuScroll = () => {
    const { prevScrollpos } = this.state;
    let currentScrollPos;
    if (typeof window === 'object') {
      currentScrollPos = window.pageYOffset;
    } else {
      currentScrollPos = null;
    }

    const visible = prevScrollpos > currentScrollPos;
    this.setState({
      prevScrollpos: currentScrollPos,
      visible,
    });
  };

  render() {
    let engagementDetails = {
      title:
        "Unleashing Alkira's brand development strategy with a powerful kickstart",
      customerDetails: ['Alkira', ' California', '2019 - On going'],
      service: [
        {
          name: 'Brand & Design',
          anchor: 'alkira-brand-&-design',
        },
        {
          name: 'UX Design',
          anchor: 'alkira-ux-design',
        },
        {
          name: 'Technical Writing',
          anchor: 'alkira-technical-writer',
        },
        {
          name: 'Web Development',
          anchor: 'alkira-web-development',
        },
      ],
    };
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 2,
        partialVisibilityGutter: 600,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        partialVisibilityGutter: 600,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    };
    let secondSectionblurb = [
      'Logo Design',
      'Typography',
      'Iconography',
      'Marketing Collateral',
    ];
    let secondSectionContent = [
      {
        name: 'The challenge',
        title:
          'Crafting Alkira’s brand values, characteristics, attributes and positioning from scratch',
        description: [
          'Strong ',
          <b>foundation</b>,
          ', unique ',
          <b>voice</b>,
          ', and ',
          <b>brand</b>,
          ' consistency across all social networks to firmly ',
          <b>position</b>,
          ' Alkira in a distinctive headspace of the audience.',
        ],
      },
      {
        name: 'The solution',
        title:
          'Harnessing the power of branding to articulate a compelling vision for Alkira’s long-term success',
        description: [
          'We developed the client’s brand by creating a series of meaningful ',
          <b>logo</b>,
          ' designs. We developed Alkira’s ',
          <b>website</b>,
          ' and its entire ',
          <b>digital footprint</b>,
          '. We also created Alkira’s official ',
          <b>product documentation</b>,
          '.',
        ],
      },
    ];
    let marketingCollateral = [
      {
        img: constants.ui.alkiraCaseStudy.marketingCollateral1,
      },
      {
        img: constants.ui.alkiraCaseStudy.marketingCollateral2,
      },
      {
        img: constants.ui.alkiraCaseStudy.marketingCollateral3,
      },
      {
        img: constants.ui.alkiraCaseStudy.marketingCollateral4,
      },
    ];
    let uxDesignSliderShow = [
      constants.ui.alkiraCaseStudy.uxSlideShow1,
      constants.ui.alkiraCaseStudy.uxSlideShow2,
      constants.ui.alkiraCaseStudy.uxSlideShow3,
      constants.ui.alkiraCaseStudy.uxSlideShow4,
    ];
    if (this.state.showLoader)
      return (
        <Loader
          logo={constants.ui.images.alkiraLogo}
          heading='UI/UX Design'
          blurb='Desktop + Mobile'
          backgroundColor='bg-alkira-blue'
        />
      );
    if (!this.state.showLoader) {
      return (
        <div className='mainDiv'>
          <Fragment>
            <Helmet>
              <meta charSet='utf-8' />
              <title>Case Study - Alkira</title>
            </Helmet>
            <section id='alkira-section-1-main-wrapper'>
              <CaseStudyHeader
                websiteUrl='https://www.alkira.com/'
                leftLogoUrl={constants.ui.images.alkiraLogo}
                title={engagementDetails.title}
                customerEngagement={engagementDetails}
              />
            </section>
            <Element id='alkira-brand-&-design'>
              <div id='alkiraDesignStudio'></div>
              <section
                id='alkira-section-2-main-wrapper'
                className='position-relative component-design-1-sm-wrapper-alkira'
              >
                <ComponentDesign1
                  heading='1. Brand & Design'
                  blurb={secondSectionblurb}
                  mainImage={constants.ui.images.alkiraPortfolio}
                  content={secondSectionContent}
                />
                <div className='container pb-5'>
                  <div className='px-5 pb-5 d-sm-hidden'>
                    <Image
                      className='w-100'
                      src={constants.ui.images.alkiraLogoProcess}
                      alt='Alkira Logo Process'
                    />
                  </div>
                  <div className='px-5 pb-5 d-none d-sm-visible'>
                    <Image
                      className='w-100'
                      src={constants.ui.alkiraCaseStudy.alkiraMobile}
                      alt='Alkira Logo Process'
                    />
                  </div>
                </div>
              </section>
              <section
                id='alkira-section-3-main-wrapper'
                className='py-4 d-sm-hidden'
              >
                <div className='container'>
                  <div className='p-5'>
                    <Image
                      className='w-100'
                      src={constants.ui.images.alkiraLogoFrame}
                      alt='Alkira Logo'
                    />
                  </div>
                </div>
              </section>
              <section id='alkira-section-4-main-wrapper'>
                <div className='container-880'>
                  <div className='content-wrapper'>
                    <div className='trigger-first-section-content initial-opacity-transform-block'>
                      <h4 className='text-white font-eina-semi-bold'>
                        Logo Design
                      </h4>
                      <p className='color-cream-white pt-4'>
                        Multiple iterations of well-thought-out logo options
                        were designed using the <b>golden ratio</b> principle.
                        These logos were extensively tweaked to achieve
                        perfection.
                      </p>
                    </div>
                    <div className='trigger-second-section-content'>
                      <div className='my-5 typography-main-wrapper initial-opacity-transform-block'>
                        <h4 className='text-white font-eina-semi-bold'>
                          Typography
                        </h4>
                        <div className='d-flex px-5 px-sm-0'>
                          <div className='typography-indicator'>
                            <h5 className='mb-0 text-right text-white font-poppins-regular'>
                              Poppins
                            </h5>
                            <p className='text-right text-white font-eina-bold'>
                              Bold
                            </p>
                          </div>
                          <div className='separator'>
                            <span></span>
                          </div>
                          <div className='w-75 width-sm-auto'>
                            <h4 className='text-white font-poppins-bold'>
                              The{' '}
                              <span style={{ color: '#006DF0' }}>
                                spectacle
                              </span>{' '}
                              before us was indeed{' '}
                              <span style={{ color: '#background: #FB9827' }}>
                                sublime
                              </span>
                            </h4>
                          </div>
                        </div>
                        <div className='d-flex px-5 pt-4 px-sm-0'>
                          <div className='typography-indicator pl-3'>
                            <h5 className='mb-0 text-right text-white font-roboto-regular'>
                              Roboto
                            </h5>
                            <p className='text-right text-white font-eina-regular'>
                              Regular
                            </p>
                          </div>
                          <div className='separator seperator-sm-width'>
                            <span></span>
                          </div>
                          <div className='w-75 width-sm-auto'>
                            <p className='text-white font-roboto-regular'>
                              Apparently we had reached a great height in the
                              atmosphere, for the sky was a dead black, and the
                              stars had ceased to twinkle.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='container d-sm-hidden'>
                  <div className='color-palette bg-white p-5'>
                    <div className='container-880'>
                      <div>
                        <div className='d-flex justify-content-between align-items-lg-center'>
                          <div>
                            <h4 className='m-0 font-eina-semi-bold'>
                              Color Palette
                            </h4>
                          </div>
                          <div className='d-flex mr-lg-4 pr-lg-2'>
                            <div className='bg-alkira-black p-4 mx-2'>
                              <p className='text-white mb-0 font-eina-semi-bold'>
                                #122131
                              </p>
                            </div>
                            <div className='bg-alkira-blue p-4 mx-2'>
                              <p className='text-white mb-0 font-eina-semi-bold'>
                                #006DF0
                              </p>
                            </div>
                            <div className='bg-alkira-orange p-4 mx-2'>
                              <p className='text-white mb-0 font-eina-semi-bold'>
                                #FB9827
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='container d-none d-sm-visible mt-5'>
                  <div>
                    <Image
                      className='w-100'
                      src={constants.ui.alkiraCaseStudy.alkiraColorMobile}
                      alt='Alkira Logo'
                    />
                  </div>
                </div>
                <div className='container-880 social-media-content-wrapper'>
                  <div id='alkiraDigitalMarketing'></div>
                  <div className='content-wrapper initial-opacity-transform-block'>
                    <div className='my-5 py-5'>
                      <div className='d-flex justify-content-between'>
                        <div className='w-25'>
                          <h4 className='text-white'>Social Media</h4>
                        </div>
                        <div className='w-65'>
                          <p className='color-cream-white'>
                            From content to design, we covered all avenues of
                            <b> e-marketing</b> for Alkira to strengthen its
                            online presence.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='portfolio-collage-main-wrapper'>
                  <div>
                    <Image
                      className='w-100 collage-img-sm'
                      src={constants.ui.alkiraCaseStudy.alkiraPortfolioCollage}
                      alt='Alkira Portfolio'
                    />
                  </div>
                </div>
              </section>
              <section
                id='alkira-section-5-main-wrapper'
                className='bg-alkira-blue py-5'
              >
                <div className='container'>
                  <Row>
                    <Col
                      sm={6}
                      className='mx-0 px-0'
                    >
                      <div className='text-center'>
                        <Image
                          className='w-75'
                          src={constants.ui.alkiraCaseStudy.iconography}
                          alt='iconography'
                        />
                      </div>
                    </Col>
                    <Col
                      sm={6}
                      className='trigger-section-content'
                    >
                      <div className='d-flex flex-column h-100 justify-content-center w-100 initial-opacity-transform-block'>
                        <h4 className='text-white font-eina-semi-bold pb-4'>
                          Iconography
                        </h4>
                        <p className='text-white mb-0'>
                          X-96 developed <b>custom icon sets</b> which were used
                          across the website to make it unique and consistent.
                          We also created a wealth of internal icons used in{' '}
                          <b>presentations</b> and various{' '}
                          <b>product diagrams</b>.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </section>
              <section id='alkira-section-7-main-wrapper'>
                <Row className='bg-color-mirage pb-5rem mx-sm-0'>
                  <Col
                    lg={5}
                    className='text-center text-white mb-4 mb-lg-0 pt-3rem'
                  >
                    <div className='d-flex justify-content-center'>
                      <div className='marketing-collateral-wrapper w-50'>
                        <h4 className='text-left text-white mb-4 font-eina-semi-bold'>
                          Marketing Collateral Design
                        </h4>
                        <p className='text-left color-cream-white'>
                          X-96 created multiple templates for key{' '}
                          <b>marketing materials</b> such as solution briefs,
                          white papers, one-pagers, product explainers, and
                          presentations.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col
                    lg={7}
                    className='pr-lg-0'
                  >
                    <div className='z-in'>
                      <CarouselComponent sliderItems={marketingCollateral} />
                    </div>
                  </Col>
                </Row>
              </section>
            </Element>
            <Element id='alkira-ux-design'>
              <section
                id='alkira-section-8-main-wrapper'
                className='overflow-hidden'
              >
                <div className='container-880 trigger-section-content'>
                  <div className='content-wrapper initial-opacity-transform-block'>
                    <Row>
                      <Col md={12}>
                        <h2 className='text-white pb-2'>2. UX Design</h2>
                        <div className='pl-5 pl-sm-0'>
                          <h4 className='text-white font-eina-semi-bold pb-3'>
                            High-fid Mockups
                          </h4>
                          <p className='color-cream-white'>
                            We created simple, clear, and consistent
                            audience-specific web page designs. Our website
                            mockups were <b>user-centric</b> in terms of
                            aesthetics and experience.
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
                <div className='overflow-hidden'>
                  <SliderComponent imgUrls={uxDesignSliderShow} />
                </div>
                <div
                  className={
                    window.innerWidth <= 768
                      ? 'd-none'
                      : 'video-component-wrapper overflow-hidden d-block'
                  }
                  id='desktopAlkiraVideo'
                >
                  <VideoComponent
                    videowebm={constants.ui.videos.alkiraVideowebm}
                    videomp4={constants.ui.videos.alkiraVideo}
                    heading='Video Production'
                    description={[
                      'X-96 created multiple ',
                      <b>showcase videos</b>,
                      ' to highlight Alkira’s product features.',
                    ]}
                  />
                </div>

                <div
                  className={
                    window.innerWidth > 768
                      ? 'd-none'
                      : 'video-component-wrapper overflow-hidden d-block'
                  }
                  id='mobileAlkiraVideo'
                >
                  <VideoComponent
                    videowebm={constants.ui.videos.alkiraVideoWebmMobile}
                    videomp4={constants.ui.videos.alkiraVideoMp4Mobile}
                    heading='Video Production'
                    description={[
                      'X-96 created multiple ',
                      <b>showcase videos</b>,
                      ' to highlight Alkira’s product features.',
                    ]}
                  />
                </div>
              </section>
            </Element>
            <Element id='alkira-technical-writer'>
              <div id='alkiraTechnicalWriting'></div>
              <section
                id='alkira-section-9-main-wrapper'
                className='bg-alkira-blue'
              >
                <div className='container-880 trigger-section-content'>
                  <div className='content-wrapper initial-opacity-transform-block'>
                    <div>
                      <h2 className='text-white'>3. Technical Writing</h2>
                    </div>
                    <div className='content-inner-wrapper'>
                      <h4 className='text-white font-eina-semi-bold pb-3'>
                        Feature Documentation
                      </h4>
                      <p className='text-white'>
                        <b>HTML documents</b> were created using a customized
                        Alkira theme to explain their multi-cloud networking
                        services.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </Element>
            <Element id='alkira-web-development'>
              <div id='alkiraWebDevelopment'></div>
              <section
                id='alkira-section-11-main-wrapper'
                className='bg-color-mirage'
              >
                <div className='container-880'>
                  <div className='content-wrapper trigger-section-content'>
                    <Row className='initial-opacity-transform-block'>
                      <Col md={12}>
                        <h2 className='text-white pb-2'>4. Web Development</h2>
                        <div className='pl-2rem'>
                          <h4 className='text-white font-eina-semi-bold pb-3'>
                            Strategically designed website for better conversion
                            and site performance
                          </h4>
                          <p className='color-cream-white '>
                            We developed a <b>secure</b> and{' '}
                            <b>performance-optimized</b> website with multiple
                            third-party integrations. <b>Threat analysis</b> and{' '}
                            <b>quality assurance testing</b> were performed on a
                            regular basis to ensure quality and safeguard
                            against any vulnerabilities.
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
                <div className='trigger-section-img'>
                  <div className='container mt-5 initial-opacity-transform-block'>
                    <Image
                      className='w-100'
                      src={constants.ui.alkiraCaseStudy.alkiraWebisteView}
                      alt='Alkira Web View'
                    />
                  </div>
                </div>
              </section>
            </Element>
            <section id='alkira-section-12-main-wrapper'>
              {/* <GetInTouchComponent/> */}
            </section>
          </Fragment>
        </div>
      );
    }
  }
}

export default AlkiraPortfolio;
