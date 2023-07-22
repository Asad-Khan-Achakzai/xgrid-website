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

//Component of Badge Slider
//Next Imports
import Image from 'next/image';

//Slick Slider Import
import Slider from 'react-slick';

//File Imports
import constants from '../constants/constants';

const BadgeSlider = () => {
  const settings = {
    slidesPerRow: 6,
    draggable: false,
    fade: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesPerRow: 6,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesPerRow: 2,
          rows: 2,
        },
      },
    ],
  };
  const images = [
    constants.images.badge1,
    constants.images.badge2,
    constants.images.badge3,
    constants.images.badge4,
    constants.images.badge5,
    constants.images.badge6,
    constants.images.badge7,
    constants.images.badge8,
    constants.images.badge9,
    constants.images.badge10,
    constants.images.badge11,
    constants.images.badge12,
    constants.images.badge13,
    constants.images.badge14,
    constants.images.badge15,
    constants.images.badge16,
    constants.images.badge17,
    constants.images.badge18,
    constants.images.badge19,
    constants.images.badge20,
    constants.images.badge21,
    constants.images.badge22,
  ];
  return (
    <div className='my-4'>
      <Slider
        {...settings}
        className='row align-items-center text-center badge-slider'
      >
        {images.map((val, index) => (
          <div
            key={index}
            className='col-2'
          >
            <Image
              src={val}
              alt={`badge ${index}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BadgeSlider;
