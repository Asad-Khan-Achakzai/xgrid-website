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

//Logos Component
import Image from 'next/image';
import constants from '../constants/constants';

//Slick Slider Import
import Slider from 'react-slick';

const Logos = () => {
  const settings = {
    slidesPerRow: 6,
    draggable: false,
    fade: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    className: 'logo-slider',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesPerRow: 5,
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
    constants.images.fiberMountain,
    constants.images.cavium,
    constants.images.nocsys,
    constants.images.fetchAi,
    constants.images.dataStore,
    constants.images.usis,
    constants.images.cisco,
    constants.images.afl,
    constants.images.alkira,
    constants.images.an10,
    constants.images.chkk,
    constants.images.cloud9,
    constants.images.copebit,
    constants.images.data,
    constants.images.ema,
    constants.images.fashion,
    constants.images.fenix,
    constants.images.intervision,
    constants.images.it,
    constants.images.monolets,
    constants.images.pel,
    constants.images.plumgrid,
    constants.images.postgre,
    constants.images.shoreline,
    constants.images.synergy,
    constants.images.tameer,
    constants.images.thermosphr,
    constants.images.viptela,
    constants.images.vizteck,
    constants.images.zigron,
  ];
  return (
    <>
      <div className='custom-container'>
        <Slider
          {...settings}
          className='row d-flex logo-slider justify-content-between logos-slider'
        >
          {images.map((val, index) => (
            <div
              key={index}
              className='col-lg-auto text-center'
            >
              <Image
                src={val}
                alt={`${val.src.split('/')[4].split('.')[0]} logo`}
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Logos;
