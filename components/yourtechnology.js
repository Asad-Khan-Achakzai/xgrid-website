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

// Constants Import
import constants from '../constants/constants';

const TechStackObject = [
  {
    image: constants.images.cloud,
    title: 'Cloud Support',
  },
  {
    image: constants.images.security,
    title: 'Security',
  },
  {
    image: constants.images.kubernetes,
    title: 'Kubernetes',
  },
  {
    image: constants.images.devops,
    title: 'DevOps',
  },
  {
    image: constants.images.backendApi,
    title: 'Backend APIs',
  },
  {
    image: constants.images.iot,
    title: 'IOT Pipelines',
  },
];

function YourTechnology(props) {
  return (
    <div>
      <div className='custom-container py-5 position-relative'>
        <div className='right-bubble d-none d-lg-block d-md-block'>
          <Image
            src={constants.images.rightBubble}
            alt='bubble artifact'
          />
        </div>
        <div className='row mt-4'>
          <div className='col-lg-6 col-md-12 col-sm-12 col-12 align-self-center fw-600 technology-title'>
            <div className='h1-internal mb-0 text-lg-start text-center f-lato-bold'>
              Your Technology
            </div>
            <div className='h1-internal color-purple mb-0 text-lg-start text-center f-lato-bold'>
              & Tools Experts
            </div>
          </div>

          {TechStackObject.slice(0, 2).map((tech, index) => (
            <>
              <div className='col-lg-3 col-md-3 col-sm-6 col-6 tech-responsive-none'>
                <div className='mt-4 pt-1'>
                  <div className='technology-images-left'>
                    <Image
                      src={tech.image}
                      alt={tech.title}
                    />
                  </div>
                </div>
                <h3 className='text-black color-dark-grey fw-700 tech-stack text-md-start text-center f-lato-bold'>
                  {tech.title}
                </h3>
              </div>
            </>
          ))}
        </div>

        <div className='row'>
          {TechStackObject.slice(2, 6).map((tech, index) => (
            <>
              <div className='col-lg-3 col-md-3 col-sm-3 col-6'>
                <div className='mt-4 pt-1'>
                  <div className='technology-images-left'>
                    <Image
                      src={tech.image}
                      alt={tech.title}
                    />
                  </div>
                </div>

                <h3 className='text-black color-dark-grey fw-700 tech-stack text-md-start text-center f-lato-bold'>
                  {tech.title}
                </h3>
              </div>
            </>
          ))}
        </div>
        <div className='row tech-responsive-row-none'>
          <div className='offset-sm-3 col-sm-3 col-3'>
            <div className='mt-4 pt-1'>
              <div className='technology-images-left'>
                <Image
                  src={TechStackObject[0].image}
                  alt={TechStackObject[0].title}
                />
              </div>
            </div>
            <h3 className='text-black color-dark-grey fw-500 tech-stack text-md-start text-center'>
              {TechStackObject[0].title}
            </h3>
          </div>
          <div className='col-sm-3 col-6'>
            <div className='mt-4 pt-1'>
              <div className='technology-images-left'>
                <Image
                  src={TechStackObject[1].image}
                  alt={TechStackObject[1].title}
                />
              </div>
            </div>
            <h3 className='text-black color-dark-grey fw-500 tech-stack text-md-start text-center'>
              {TechStackObject[1].title}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YourTechnology;
