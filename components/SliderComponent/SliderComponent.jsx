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

//Next imports
import Image from 'next/image';

// Carousel Imports
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const SliderComponent = (props) => {
    let responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 2,
          partialVisibilityGutter: 600
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
          partialVisibilityGutter: 600
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };
    return (
        <div className='portfolio-display-carousel'>
            <div className='carousel-wrapper mt-5 position-relative'>
              {props.imgUrls &&
                <Carousel infinite partialVisible responsive={responsive}
                additionalTransfrom={0}
                draggable
                focusOnSelect={false}
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}>
                    { props.imgUrls ? props.imgUrls.map((slides, index) => {
                          return (
                            <div className='carousel-custom-item-wrapper' key={index}>
                              <Image className='w-100' src={slides} alt='Slider Images' />
                            </div>
                          )
                        }) : null
                      }
                </Carousel>
              }
            </div>
        </div>
    );
}

export default SliderComponent;