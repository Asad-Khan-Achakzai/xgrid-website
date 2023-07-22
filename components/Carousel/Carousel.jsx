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
import React, {Fragment} from 'react';

//Next imports
import Image from 'next/image';

// React multi carousel imports
import Carousel from 'react-multi-carousel';

import {Link, NavLink} from "react-router-dom";

// Style Imports
// import './Carousel.scss';
import 'react-multi-carousel/lib/styles.css';

class CarouselComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      carouselItems: this.props['sliderItems']
    }
  }

  render() {
    const responsive = {
      desktop: {
        breakpoint: {max: 3000, min: 1024},
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
      },
      tablet: {
        breakpoint: {max: 1024, min: 464},
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
      },
      mobile: {
        breakpoint: {max: 464, min: 0},
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
      }
    };
    return (
      <Fragment>
        {this.state.carouselItems && <Carousel
          responsive={responsive}
          itemClass="carousel-item-padding-40-px pl-4"
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          containerClass="container-with-dots"
          draggable
          focusOnSelect={false}
          infinite
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
        >
          {this.state.carouselItems ? this.state.carouselItems.map((slides, index) => {
            return (
              slides.linkTo ? <Link to={slides.linkTo} >
                <div className="slides-img-wrapper" key={index}>
                  <Image src={slides.img} className="w-100"
                       alt={slides.caseStudyName} />
                </div>
              </Link> : <div className="slides-img-wrapper" key={index}>
                <Image src={slides.img} className="w-100"
                     alt={slides.caseStudyName} />
              </div>
            )
          }) : null}
        </Carousel>}
      </Fragment>
    )
  }
}

export default CarouselComponent;
