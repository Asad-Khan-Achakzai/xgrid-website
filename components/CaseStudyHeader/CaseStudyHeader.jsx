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

import React, { Fragment } from 'react';
//Next imports
import Image from 'next/image';

// Bootstrap Imports
import { Container } from 'react-bootstrap';

const CaseStudyHeader = (props) => {
    return (
        <Fragment>
            <div className='casestudy-header-wrapper'>
                <Container fluid>
                    <div className='d-flex justify-content-center justify-content-lg-between p-lg-5 responsive-styles-case-study-header' id='casestudy-header-content-animate'>
                        <div>
                            {
                                props.leftLogoUrl ? <Image src={props.leftLogoUrl} width={props.logoSize && props.logoSize} alt='Logo' />: null
                            }
                        </div>
                        <div>
                            {
                                props.rightLogoUrl ? <Image src={props.rightLogoUrl} width={props.rightLogoSize && props.rightLogoSize} alt='Logo' />: null
                            }
                        </div>
                    </div>
                </Container>
                <div className='container-880'>
                    <div id='casestudy-header-content-animate' className='container-inner-wrapper'>
                        <div className='content-wrapper'>
                            <div>
                                <h1 className='text-white font-eina-semi-bold'>
                                    {props.title}
                                </h1>
                            </div>
                            <div className='project-details'>
                                <div className='d-flex align-items-center'>
                                    {
                                        props.customerEngagement ? props.customerEngagement.customerDetails.map(data => (
                                            <Fragment key={data}>
                                                <div>
                                                <p className='text-white'>{data}</p>
                                                </div>
                                                <span className='mx-3'></span>
                                            </Fragment>
                                        )): null
                                    }
                                </div>
                            </div>
                            <div className='services-details'>
                                <div className='d-flex align-items-center case-study-engagements-mobile'>
                                    {
                                        props.customerEngagement? props.customerEngagement.service.map(data => (
                                            <Fragment key={data.name}>
                                                <div>
                                                <p className='text-white'>{data.name}</p>
                                                </div>
                                                <span className='mx-3'></span>
                                            </Fragment>
                                        )): null
                                    }
                                </div>
                            </div>
                            {
                                props.websiteUrl ?
                                <div className='pt-4'>
                                    <a href={props.websiteUrl} className='text-white font-eina-bold' target="_blank" rel="noopener noreferrer">
                                        Visit Website
                                        <svg class="mx-2 mb-1" width="16" height="16" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.4492 1.45312C19.2305 0.246094 17.5664 0 15.4219 0H6.42188C4.30078 0 2.63672 0.246094 1.42969 1.45312C0.222656 2.64844 0 4.30078 0 6.42188V15.3516C0 17.5078 0.222656 19.1602 1.42969 20.3555C2.63672 21.5625 4.30078 21.7969 6.44531 21.7969H15.4219C17.5664 21.7969 19.2422 21.5625 20.4492 20.3555C21.6445 19.1484 21.8672 17.5078 21.8672 15.3516V6.45703C21.8672 4.30078 21.6445 2.64844 20.4492 1.45312ZM19.5352 6.12891V15.6797C19.5352 16.8984 19.3828 18 18.7383 18.6445C18.082 19.3008 16.9688 19.4648 15.75 19.4648H6.12891C4.91016 19.4648 3.78516 19.2891 3.14062 18.6445C2.49609 18 2.33203 16.8984 2.33203 15.6797V6.15234C2.33203 4.91016 2.49609 3.79688 3.14062 3.15234C3.78516 2.50781 4.91016 2.34375 6.15234 2.34375H15.75C16.9688 2.34375 18.082 2.50781 18.7383 3.15234C19.3828 3.80859 19.5352 4.91016 19.5352 6.12891ZM14.6016 13.957C15.1875 13.957 15.5625 13.5234 15.5625 12.8906V7.44141C15.5625 6.62109 15.1055 6.25781 14.3672 6.25781H8.89453C8.25 6.25781 7.83984 6.63281 7.83984 7.21875C7.83984 7.81641 8.26172 8.19141 8.90625 8.19141H10.875L12.4688 8.00391L10.7461 9.58594L6.64453 13.6875C6.44531 13.8867 6.30469 14.1562 6.30469 14.4375C6.30469 15.0703 6.75 15.4805 7.34766 15.4805C7.66406 15.4805 7.92188 15.3633 8.14453 15.1523L12.2344 11.0625L13.793 9.36328L13.6289 11.0391V12.9023C13.6289 13.5469 14.0039 13.957 14.6016 13.957Z" fill="white"></path></svg>
                                    </a>
                                </div>
                                : null
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};

export default CaseStudyHeader;
