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

// React imports
import React from 'react';

// Next imports
import Image from 'next/image';

// Constants import
import constants from '../constants/constants';

// Component imports
import Button from './button';
/**
 * Component for case study section, this component can be reusable and expecting the
 * following props
 * @param {{
 * caseStudies : Array, // List of case studies to be rendered
 * }}
 * @returns component
 */
const CaseStudySection = ({ caseStudies }) => {
  return (
    <>
      <div className='container-fluid'>
        <div className='custom-container py-3'>
          <div className='row'>
            {caseStudies.map((caseStudy) => (
              <div className='col-md-4 mt-md-5'>
                <div className='my-2 case-study-logo'>
                  <Image
                    src={caseStudy.logo}
                    alt={caseStudy.heading}
                  />
                </div>
                <h5 className='color-dark-grey f-inter-semi-bold case-study-desc'>
                  {caseStudy.heading}
                </h5>
                <h5 className='mb-md-5 color-dark-grey f-lato-regular case-study-desc'>
                  {caseStudy.description}
                </h5>
              </div>
            ))}
          </div>
          <div className='col-lg-12 text-center xgm-b-5 mt-5'>
            <Button
              label='Xplore our Work'
              classes='px-5 border py-3 rounded-3 purple-btn text-white f-inter-reg'
              isIcon={true}
              hrefLink={`${constants.pageLinks.resources.path}?filter=${constants.resourcePageFilters.caseStudies.value}`}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudySection;
