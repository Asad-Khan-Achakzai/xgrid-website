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
import React from 'react';

//Next imports
import Image from 'next/image';

// Constants Import
import constants from '../constants/constants';

const CloudData = [
  {
    image: constants.images.healthcheck,
    title: 'Assess and health check your infrastructure and applications',
  },
  {
    image: constants.images.design,
    title: 'Design and architect your cloud solution',
  },
  {
    image: constants.images.deploy,
    title: 'Deploy, migrate, maintain and upgrade',
  },
  {
    image: constants.images.techdebt,
    title: 'Clear your technical debt and backlog',
  },
  {
    image: constants.images.develop,
    title: 'Design and develop your application APIs and backend',
  },
  {
    image: constants.images.risk,
    title: 'Reduce your risk posture (threat prevention)',
  },
];

function ChooseCloud() {
  return (
    <React.Fragment>
      <div className='custom-container py-5 position-relative'>
        <div className='circle-design d-none d-lg-block d-md-block'>
          <Image
            src={constants.images.circleDesign}
            alt='circle artifact'
          />
        </div>
        <div className='row mt-5'>
          <div className='col-12 text-center'>
            <div className='h1-internal text-center mb-0 f-lato-bold'>
              Choose your cloud
            </div>
            <div className='h1-internal text-center color-purple gilroy f-lato-bold'>
              solution
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-11 offset-lg-1'>
            <div className='row mt-3 mb-5'>
              {CloudData.map((cloud) => (
                <div className='col-sm-4 col-12 pb-6'>
                  <div className='row'>
                    <div className='col-sm-12 col-3'>
                      <div className='cloud-images'>
                        <Image
                          src={cloud.image}
                          alt='cloudImg'
                        />
                      </div>
                    </div>
                    <div className='col-sm-12 col-9'>
                      <h3 className='text-black color-dark-grey fw-500 my-3 f-lato-bold'>
                        {cloud.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ChooseCloud;
