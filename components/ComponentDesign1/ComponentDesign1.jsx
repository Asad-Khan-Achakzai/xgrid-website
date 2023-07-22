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

const ComponentDesign1 = (props) => {
    function passImageCheck() {
        return props.checkImage(false);
    }
return (
    <div id='component-design-1-main-wrapper' className='position-relative'>
        <div className='container'>
            <div id='casestudy-main-image-wrapper' className='portfolio-main-image-wrapper px-lg-5'>
                {
                    props.mainImage ?
                    <div className='component-img'>
                        <Image className='w-100' src={props.mainImage} alt='Main Portfolio' />
                    </div>
                    : null
                }
            </div>
        </div>
        <div className='container-880'>
            <div className='content-wrapper-flex-bordered-items'>
                <div className='services-elements-trigger initial-opacity-transform-block'>
                    {
                        props.heading ?
                        <Fragment>
                            <div>
                                <h2 className='text-white'>{props.heading}</h2>
                            </div>
                            <div className='design-services'>
                                <div className='d-flex align-items-center mx-lg-5 design-types-styles-mobile'>
                                    {
                                        props.blurb ? props.blurb.map((data, index) => (
                                            <Fragment key={index}>
                                            <div>
                                                    <p>{data}</p>
                                                </div>
                                                <span className='mx-3'></span>
                                            </Fragment>
                                        )): null
                                    }
                                </div>
                            </div>
                        </Fragment>
                        : null
                    }
                </div>
                        {
                            props.content ?
                            props.content.map((data, index) => (
                            <div key={index} className={`design-details design-details-${index}`}>
                                <div className='d-lg-flex mt-4 justify-content-between initial-opacity-transform-block'>
                                    <div className='title'>
                                        <p className='text-white'>{data.name}</p>
                                    </div>
                                    <div className='details'>
                                            <h4 className='text-white font-eina-semi-bold'>
                                                {data.title}
                                            </h4>
                                            <p>
                                                {data.description}
                                            </p>
                                    </div>
                                </div>
                            </div>
                            ))
                            : null 
                        }
            </div>
        </div>
    </div>
    );
}

export default ComponentDesign1;
