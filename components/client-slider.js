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

//Client slider component

//React imports
import React, { useState } from 'react';
import Slider from 'react-slick';

//Next imports
import Image from 'next/image';

//Constants imports
import constants from '../constants/constants';

//Third party imports
import Lottie from 'lottie-react';

function CustomNextArrow(props) {
  const { className, style, onClick: onClickprop, updateCurrentState } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'white' }}
      onClick={($event) => {
        updateCurrentState('increment');
        onClickprop();
      }}
    >
      <Image
        className='next-arrow'
        src={constants.images.nextArrow}
        alt='next arrow'
      />
    </div>
  );
}
const animationConfig = {
  circlesAnimation: {
    autoplay: true,
    loop: true,
    height: 330,
    width: 330,
  },
};
function CustomPrevArrow(props) {
  const { className, style, onClick: onClickprop, updateCurrentState } = props;

  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'white' }}
      onClick={($event) => {
        updateCurrentState('decrement');
        onClickprop();
      }}
    >
      <Image
        className='prev-arrow'
        src={constants.images.prevArrow}
        alt='back arrow'
      />
    </div>
  );
}

const ClientSlider = () => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  const [current, setCurrent] = useState(0);

  function updateCurrentState($event) {
    if ($event === 'increment') {
      if (current >= textwrappers.length - 1) {
        setCurrent((prevState) => {
          return 0;
        });
      } else {
        setCurrent((prevState) => {
          return prevState + 1;
        });
      }
    } else {
      if (current <= 0) {
        setCurrent((prevState) => {
          return textwrappers.length - 1;
        });
      } else {
        setCurrent((prevState) => {
          return prevState - 1;
        });
      }
    }
  }

  const imgSliderSettings = {
    infinite: true,
    autoplay: false,
    speed: 200,
    useCSS: true,
    useTransform: true,
    cssEase: 'ease-in-out',
    slidesToScroll: 1,
    nextArrow: (
      <CustomNextArrow
        updateCurrentState={updateCurrentState}
        current={current}
      />
    ),
    prevArrow: (
      <CustomPrevArrow
        updateCurrentState={updateCurrentState}
        current={current}
      />
    ),
    asNavFor: nav1,
    ref: (slider2) => setNav2(slider2),
    slidesToShow: 1,
    swipeToSlide: false,
    focusOnSelect: true,
    className: 'testimonial-img-slider',
    draggable: false,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          focusOnSelect: false,
        },
      },
    ],
  };

  const mainSliderSettings = {
    asNavFor: nav2,
    draggable: false,
    ref: (slider1) => setNav1(slider1),
    speed: 250,
    className: 'testimonial-main-slider',
    swipeToSlide: false,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          nextArrow: (
            <CustomNextArrow
              updateCurrentState={updateCurrentState}
              current={current}
            />
          ),
          prevArrow: (
            <CustomPrevArrow
              updateCurrentState={updateCurrentState}
              current={current}
            />
          ),
        },
      },
    ],
  };
  const textwrappers = [
    {
      textID: 1,
      description:
        '“ Each engagement and project we work together on has unique requirements but we streamline the process together with the use of project management tools, seamless communication, etc. The Xgrid team and Expert Marketing Advisors team work together as one in a 100% effective workflow! ”',
      clientName: 'Courtney Kehl',
      clientResolution: 'Founder, Expert Marketing Advisors',
      img: constants.images.client4,
    },
    {
      textID: 2,
      description:
        '“ The fact that we worked with them closely and were able to scale from needing 10 engineers to then working with over a 100 people means that they did a really good job. ”',
      clientName: 'Awais Nemat',
      clientResolution: 'CEO, Founder & Board Member',
      img: constants.images.client6,
    },
    {
      textID: 3,
      description:
        '“ Their team possesses a unique talent of working with a breadth of tools, techniques, and coding languages to deliver best in class services! ”',
      clientName: 'Orlando Beiner',
      clientResolution: 'CEO & Chairman of the Board of Directors - copebit AG',
      img: constants.images.client1,
    },
    {
      textID: 4,
      description:
        '“ Very competent and professional. Extremely knowledgeable with AWS Cloud and DevOps. Very hard working team and customer focused. They understand Cloud Networking and automation extremely well. ”',
      clientName: 'Paul Clement',
      clientResolution: 'InterVision – Director Cloud & Automation Services',
      img: constants.images.client2,
    },
    {
      textID: 5,
      description:
        '“ Xgrid, Inc. completed the project, and the company received considerable interest from potential customers after a successful UI launch. The team collaborated weekly through online meetings, providing updates and addressing feedback. ”',
      clientName: 'Nicolas Le Borgne',
      clientResolution: 'CEO - Thermosphr',
      img: constants.images.client5,
    },
  ];

  return (
    <>
      <div
        id='Client-Slider'
        className='row clientSlider pb-5'
      >
        <div className='col-lg-9 col-md-9 col-sm-8'>
          <Slider {...mainSliderSettings}>
            {' '}
            {textwrappers.map((item) => (
              <div key={item.textID}>
                <div className='row flex-column-reverse flex-md-row'>
                  <div className='col-12 col-md-5'>
                    <div className='text-wrapper-client'>
                      <h3 className='quote text-center text-md-start color-dark-grey mb-5 f-inter-light'>
                        {item.description}
                      </h3>
                      <h3 className='quote-author text-center text-md-start color-purple fw-500 mb-2 f-inter-semi-bold'>
                        {item.clientName}
                      </h3>
                      <h4 className='quote-author-designation text-center text-md-start fw-500 f-inter-semi-bold'>
                        {item.clientResolution}
                      </h4>
                    </div>
                  </div>
                  <div className='col-12 col-md-5 offset-md-1 mb-4 mb-md-5 mb-md-0 client-img-wrapper'>
                    <Image
                      className='testimonial-img'
                      src={item.img}
                      alt={item.clientName}
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className='col-lg-3 col-md-3 col-sm-4 d-none d-sm-block'>
          <Slider {...imgSliderSettings}>
            {textwrappers.map((item) => (
              <div key={item.textID}>
                <div className='img-wrapper'>
                  <Image
                    className='testimonial-slider-img'
                    src={item.img}
                    alt={item.clientName}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className='circles-animation-customer position-absolute d-none d-lg-block'>
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
    </>
  );
};
export default ClientSlider;
