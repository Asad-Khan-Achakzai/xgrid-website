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

// Next imports
import Image from 'next/image';

// Constants import
import constants from '../../constants/constants';

/**
 * Component to display previous report of the company
 * @param {string} title
 * @param {string} titleClasses
 * @param {array} results
 * @param {array} reportImages
 * @returns Component
 */
const Report = ({ title, titleClasses, results, reportImages }) => {
  return (
    <>
      <div className='col-lg-11 mt-5 m-auto row ps-md-3'>
        <div className='row align-items-center'>
          <div className='col-lg-10 col-md-10 col-sm-12'>
            <h2 className={titleClasses}>{title}</h2>
          </div>
          <div className='col-lg-2 col-md-2 col-sm-12 mask-img d-none d-lg-block d-xl-block d-md-block'>
            <Image
              src={constants.images.maskFull}
              alt='mask-img'
            />
          </div>
        </div>
        <div className='my-5 row col-lg-11'>
          <div className='col-lg-4 col-md-4 col-sm-12 pe-lg-6 pe-md-6 pe-sm-0'>
            <div className='mx-auto mb-2'>
              <div className='report-percentage f-lato-reg f-lato-reg'>
                {results[0].percentage}
              </div>
              <h4 className='report-heading f-inter-reg'>
                {results[0].heading}
              </h4>
            </div>
            <p className='report-descriptions f-inter-reg'>
              {results[0].text}{' '}
            </p>
          </div>
          <div className='col-lg-4 col-md-4 col-sm-12 pe-lg-6 pe-md-6 pe-sm-0'>
            <div className='mx-auto mb-2'>
              <div className='report-percentage f-lato-reg'>
                {results[1].percentage}
              </div>
              <h4 className='report-heading f-inter-reg'>
                {results[1].heading}
              </h4>
            </div>
            <p className='report-descriptions f-inter-reg'>
              {results[1].text}{' '}
            </p>
          </div>
          <div className='col-lg-4 col-md-4 col-sm-12 pe-lg-6 pe-md-6 pe-sm-0'>
            <div className='mx-auto mb-2'>
              <div className='d-flex'>
                <div className='report-percentage f-lato-reg'>
                  {results[2].percentage}
                </div>
                <span className='mt-2 ms-1'>
                  <Image
                    src={constants.images.ratingStar}
                    alt='star icon'
                  />
                </span>
              </div>
              <h4 className='report-heading f-inter-reg'>
                {results[2].heading}
              </h4>
            </div>
            <p className='report-descriptions f-inter-reg'>
              {results[2].text}{' '}
            </p>
          </div>
        </div>
        <div className='my-5 row col-lg-11 col-sm-12 pe-0'>
          {reportImages.map((image, index) => (
            <div
              className='mx-auto mb-2 col-3'
              key={index}
            >
              <Image
                src={image}
                alt={`image ${index}`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Report;
