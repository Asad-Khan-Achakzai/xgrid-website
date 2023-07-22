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

// Constants Import
import constants from '../constants/constants';

// NPM Import
import Slider from 'react-slick';

//Components Import
import Button from '../components/button';
import GlobalFootprint from '../components/global-footprint';
import DraggableSlider from '../components/draggable-slider';
import LoadMoreSection from '../components/load-more-section';
import MetaTags from '../components/meta-tags';

//Third party imports
import Lottie from 'lottie-react';

/**
 * Functional component holds UI and data about company details.
 * @returns component
 */
const Company = () => {
  const timelineData = [
    '2022 - Launched XWMG & XCBG',
    '2021 - Launched X-96',
    '2020 - Cloud, DevOps, Security',
    '2018 - MarCom Group',
    '2016 - Networking & Cloud',
    '2012 - Founded',
  ];

  const draggableSliderImages = [
    constants.images.aboutSlideImg1,
    constants.images.triangleArtSlideImg,
    constants.images.aboutSlideImg3,
    constants.images.gradientSlideImg,
    constants.images.aboutSlideImg2,
    constants.images.curveLinesSlideImg,
    constants.images.aboutSlideImg5,
    constants.images.artSlideImg1,
    constants.images.aboutSlideImg4,
    constants.images.artSlideImg2,
    constants.images.aboutSlideImg6,
    constants.images.umbrellaSlideImg,
    constants.images.aboutSlideImg7,
    constants.images.gradientSlideImg2,
  ];

  const teams = [
    {
      img: constants.images.saadArshad,
      name: 'Saad Arshad',
      designation: 'COO',
    },
    {
      img: constants.images.abdurRehman,
      name: 'Abdur Rehman',
      designation: 'Customer Success Manager',
    },
    {
      img: constants.images.taimurKhan,
      name: 'Taimur Khan',
      designation: 'Senior Cloud Data Engineer',
    },
    {
      img: constants.images.manahil,
      name: 'Manahil binte Irfan',
      designation: 'Marketing Specialist II',
    },
    {
      img: constants.images.abdullahShah,
      name: 'Abdullah Shah',
      designation: 'GM and CTO',
    },
    {
      img: constants.images.umair,
      name: 'Umair Atiq',
      designation: 'Software Development Manager',
    },
    {
      img: constants.images.sidra,
      name: 'Sidra Irshad',
      designation: 'Software Development Manager',
    },
    {
      img: constants.images.farhan,
      name: 'Syed Farhan Ahmed',
      designation: 'SEO Manager',
    },
    {
      img: constants.images.shuja,
      name: 'Shuja Abedin',
      designation: 'Tech Lead',
    },
    {
      img: constants.images.anees,
      name: 'Anees Iqbal',
      designation: 'Senior Software Engineer II',
    },
    {
      img: constants.images.ismaTipu,
      name: 'Isma Tipu',
      designation: 'Senior QA Engineer II',
    },
    {
      img: constants.images.tayyabMahmood,
      name: 'Tayyab Mahmood',
      designation: 'Director of Engineering',
    },
    {
      img: constants.images.muhammadQasim,
      name: 'Muhammad Qasim',
      designation: 'Senior Software Engineer II',
    },
  ];
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesPerRow: 5,
    rows: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesPerRow: 5,
          rows: 2,
        },
      },
    ],
  };

  return (
    <>
      <MetaTags
        title='About Xgrid | Team and Company values - Xgrid'
        description='Xgrid has a great team of software developers and MarCom Specialists. Meet our talented team of software engineers, DevOps and MarCom specialists.'
        imgUrl={constants.thumbnails.about}
      />
      {/* Hero Section */}
      <div className='container-fluid hero-section-spacing '>
        <div className='custom-container'>
          <div className='hero-section position-relative'>
            <div className='circle-design-heading d-none d-lg-block d-md-block'>
              <Image
                src={constants.images.circleDesign}
                alt='circle artifact'
              />
            </div>
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
            <div className='hero-text-spacing hero-left-container'>
              <h1 className='h1-internal mb-2 f-lato-bold'>At Xgrid</h1>
              <h4 className='custom-h4 mt-2 f-inter-light'>
                Xgrid has delivered world-class end-to-end solutions focusing on
                web & mobile development, secure cloud infrastructure,
                intelligent cloud solutions, and user interface and user
                experience solutions.{' '}
              </h4>
              <h4 className='custom-h4 fw-500 mt-3 mb-3 f-inter-semi-bold'>
                Having established a distinct repertoire in these domains, we
                are committed to maintaining high standards directly
                attributable to our excellent teams.
              </h4>
            </div>
            <div className='d-flex hero-right-container mt-4'>
              <div>
                <h2 className='custom-h2 mb-lg-4 mb-md-2 f-lato-bold'>
                  Milestones
                </h2>
                <div className='timeline'>
                  <div className='vertical-line'></div>
                  <ol className='pt-3'>
                    {timelineData.map((text, index) => (
                      <li key={index}>
                        <h4 className='text-black custom-h4 f-inter-light'>
                          {text}
                        </h4>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
              <div className='d-lg-block d-none'>
                <div className='custom-mt-6'>
                  <Image
                    src={constants.images.circleAndRectangle}
                    alt='circle & rectangle artifact'
                  />
                </div>
              </div>
            </div>
          </div>
          <Button
            label={'Xplore More'}
            scrollElementId={'mission-statement'}
            scrollOffset={200}
            isIcon={true}
            classes='purple-btn text-white border-0 rounded-3 px-5 py-3 f-inter-reg'
          />
        </div>
      </div>

      {/* Gallery Images Section */}
      <div className='gallery-section mt-5 pt-5'>
        {constants.galleryImages.map((gallery, index) => (
          <div
            className={`gallery-img ${gallery.class}`}
            key={index}
          >
            <Image
              src={gallery.img}
              alt={`gallery image ${index}`}
            />
          </div>
        ))}
      </div>

      {/* Our mission Section */}
      <div
        className='container-fluid mt-5 pt-5'
        id='mission-statement'
      >
        <div className='custom-container'>
          <div className='row mb-2'>
            <div className='col-lg-12 mb-5'>
              <div className='text-center'>
                <div className='h1-internal text-center f-lato-bold'>
                  Mission Statement
                </div>
                <h4 className='custom-h4 f-inter-reg'>
                  Taking co-responsibility for your business and your seamless
                  growth.
                </h4>
              </div>
            </div>
            <div className='col-lg-12 d-sm-block d-none text-center'>
              <Image
                src={constants.images.ourMissionImgDesktop}
                alt='our mission'
              />
            </div>
            <div className='col-lg-12 d-sm-none d-block text-center'>
              <Image
                src={constants.images.ourMissionImgMobile}
                alt='our mission'
              />
            </div>
          </div>
        </div>
      </div>

      {/* Our team Section */}
      <div className='container-fluid my-5 py-5'>
        <div className='custom-container position-relative'>
          <div className='circle-design-company d-none d-lg-block d-md-block'>
            <Image
              src={constants.images.circleDesignXWMG}
              alt='circle artifact'
            />
          </div>
          <div className='row'>
            <div className='col-lg-12 talent-pool-text-wrapper'>
              <div className='h1-internal text-center f-lato-bold'>
                The Talent Pool
              </div>
              <h4 className='custom-h4 text-center f-inter-reg'>
                What we do together makes a difference. As a team, we achieve
                greatness beyond ourselves.
              </h4>
            </div>
            <div className='col-lg-12 d-sm-block d-none mt-5 text-center'>
              <Slider {...settings}>
                {teams.map((team, index) => (
                  <div>
                    {index === 5 ? <br /> : null}
                    <div
                      key={index}
                      className='mx-2 d-grid'
                    >
                      <div className='team-slider-img-wrapper text-start'>
                        <Image
                          src={team.img}
                          alt={team.name}
                        />
                        <div className='team-slider-text-wrapper text-start'>
                          <h5 className='fullname-text fw-500 f-inter-bold'>
                            {team.name}
                          </h5>
                          <h6 className='designation-text color-dark-grey fw-400 f-inter-reg light-grey'>
                            {team.designation}
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            {/* Hide slider on mobile view and show more rows on button click */}
            <div className='d-sm-none d-block mt-5'>
              <LoadMoreSection
                data={teams}
                imagesPerRow={6}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Draggable Slider */}
      <div className='container-fluid mt-5 position-relative'>
        <div className='circles-animation-slider position-absolute d-none d-lg-block d-md-block'>
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
        <div className='pt-lg-5'>
          <DraggableSlider images={draggableSliderImages} />
        </div>
      </div>

      {/* Global footprint section */}
      <GlobalFootprint
        mainHeading={'Global Footprint'}
        subHeading={
          'Our talented team members contribute to our services from all across the world.'
        }
        image={constants.images.careersFootprint}
      />
    </>
  );
};

export default Company;
