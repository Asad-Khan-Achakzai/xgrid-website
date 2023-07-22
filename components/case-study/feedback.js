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

//  Next imports
import Image from 'next/image';

// Constants import
import constants from '../../constants/constants';

/**
 * Component displays feedback of the client
 * @param {string} title
 * @param {array} practice
 * @param {image} img
 * @param {text} containerClasses
 * @returns Component
 */
const Feedback = ({
  title,
  practice,
  clientImage,
  containerClasses,
  clientDesignation,
  clientOrganization,
  titleClasses,
  descriptionClasses,
}) => {
  return (
    <>
      <div className='col-lg-12'>
        <div className='row ms-0 me-0'>
          <div className='col-12 color-black-bg'>
            <div className='row ms-0 me-0'>
              <div className='client-logo pt-3 pb-3 col-4 col-lg-2 col-md-2'>
                <Image alt='Cisco icon' src={constants.images.Cisco} />
              </div>
              <div className='client-logo pt-3 pb-3 col-4 col-lg-2 col-md-2'>
                <Image
                  alt='InterVision icon'
                  src={constants.images.InterVision}
                />
              </div>
              <div className='client-logo pt-3 pb-3 col-4 col-lg-2 col-md-2'>
                <Image alt='Copebit icon' src={constants.images.Copebit} />
              </div>
              <div className='client-logo pt-3 pb-3 col-4 col-lg-2 col-md-2'>
                <Image
                  alt='FiberMountain icon'
                  src={constants.images.FiberMountain}
                />
              </div>
              <div className='client-logo pt-3 pb-3 col-4 col-lg-2 col-md-2'>
                <Image alt='Cavium icon' src={constants.images.Cavium} />
              </div>
              <div className='client-logo pt-3 pb-3 col-4 col-lg-2 col-md-2'>
                <Image alt='Nocosys icon' src={constants.images.Nocosys} />
              </div>
            </div>
          </div>
          <div className={`${containerClasses} col-12 pt-4 pt-md-0 p-lg-6`}>
            <div className='row ps-md-2'>
              <div className='col-lg-7 col-md-7 col-sm-12'>
                <h2 className={`${titleClasses} mb-4`}>{title}</h2>
                <div>
                  <p className={`${descriptionClasses} practice-desc-sm`}>
                    {practice}
                  </p>
                  <h2 className={`${titleClasses} mt-5 mb-0`}>
                    {clientOrganization}
                  </h2>
                  <p className={`${descriptionClasses}`}>{clientDesignation}</p>
                </div>
              </div>
              <div className='col-lg-5 col-md-5 col-sm-12 text-center'>
                <Image src={clientImage} alt='Gated Case Study' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
