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

const VideoComponent = (props) => {
    return (
        <Fragment>
            {
                props.heading ?
                    <div  className='video-component-main-wrapper position-relative'>
                            <div className='overlay-black overflow-hidden'>
                                <div className='container-880 text-white text-left d-flex flex-column justify-content-center h-100'>
                                    <div id='video-component-wrapper' className='video-content-wrapper'>
                                        <h2 className='pb-3'>{props.heading}</h2>
                                        <p className='font-eina-semi-bold w-80'>
                                            {props.description ? props.description: null}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        <div className='video-section-inner-wrapper'>
                            {
                                props.videomp4 ?
                                    <video width="100%" autoPlay muted loop playsInline>
                                        <source src={props.videomp4} type="video/mp4" />
                                    </video>
                                :
                                null
                            }
                        </div>
                    </div>
                :
                null
            }
        </Fragment>
    );
}

export default VideoComponent
