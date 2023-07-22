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

// React Imports
import React from 'react';

// Next Imports
import Image from 'next/image';

// Constants import
import constants from '../constants/constants';

const QualityDelivered = [
  {
    id: 1,
    qualityDelPercent: '~93%',
    qualityDelTitle: 'Repeat Customers',
    qualityDelDes: "There's a reason why customers keep coming back to us.",
  },
  {
    id: 2,
    qualityDelPercent: '+83%',
    qualityDelTitle: 'Certified Employees',
    qualityDelDes:
      'Your work is handled by top professionals with globally recognized certifications.',
  },
  {
    id: 3,
    qualityDelPercent: '4.7',
    qualityDelTitle: 'Clutch Rating',
    qualityDelDes:
      'You can become one of our delighted customers. Check what others are saying.',
  },
];

function DeliverQuality({ heading, subheading, image }) {
  return (
    <div className='container py-5'>
      <div className='row mt-5 pt-2 mb-3'>
        <div className='col-lg-12 col-md-12 col-sm-12 text-center f-lato-bold'>
          <div className='h1-replica h1-internal mb-0'>
            {heading}{' '}
            <span className='h1-internal color-purple gilroy d-md-block'>
              {subheading}
            </span>
          </div>
        </div>
      </div>
      <div className='container-fluid mb-5 pb-4'>
        <div className='row justify-content-between'>
          <div className='col-md-4 col-sm-5 col-12'>
            <div className='d-flex align-items-center flex-column'>
              {QualityDelivered.map((deliver) => (
                <div>
                  <div className='text-left card-box'>
                    <div className=' mb-0 quality-delivered-card-number f-lato-bold'>
                      <h1 className='h1-internal f-lato-bold'>
                        {deliver.qualityDelPercent}
                        {deliver?.id === 3 && (
                          <span className='color-purple px-2 color-rate'>
                            <sup>
                              <Image
                                src={constants.images.starRate}
                                alt='star image'
                              />
                            </sup>
                          </span>
                        )}
                      </h1>
                    </div>
                    <h4 className='f-lato-bold text-black color-dark-grey fw-500 quality-delivered-card-title'>
                      {deliver.qualityDelTitle}
                    </h4>
                    <h5 className=' f-inter-reg'>{deliver.qualityDelDes}</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='col-md-8 col-sm-7 col-12'>
            <Image
              src={image}
              alt='deliver-quality-img'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeliverQuality;
