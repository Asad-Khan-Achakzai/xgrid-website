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

const DocumentDesign = (props) => {
    return (
        <div className='document-component-main-wrapper'>
            <div className='container-880'>
                <div className='doc-content-animation-trigger initial-opacity-transform-block'>
                    {
                        props.content ?
                        <Fragment>
                            <h2 className='font-eina-semi-bold text-white pb-2 text-center'>
                            {props.content.heading}
                            </h2>
                            <p className='color-cream-white text-center'>
                                {props.content.description}
                            </p>
                        </Fragment>
                        : null
                    }
                </div>
            </div>
            <div className='container'>
                <div className='d-flex justify-content-center doc-img-animation-trigger initial-opacity-transform-block'>
                    <Image className='w-110' src={props.docImage} alt='Featured Documentation' />
                </div>
            </div>        
        </div>
    );
}

export default DocumentDesign;