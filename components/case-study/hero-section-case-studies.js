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

//Next imports
import Image from 'next/image';

//Components Imports
import Button from '../button';

/**
 * Component for hero section on case study landing page
 * @returns Component
 */
const CaseStudiesHeroSection = ({ heading, image, buttonText, buttonLink, caseStudyFileName, maskImage }) => {
  return (
    <>
      <div className='light-grey-bg'>
        <div className='row align-items-center pe-5 px-5 pt-5'>
          <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 heading-banner-text-col align-middle'>
            <h1 className='banner-main-heading-xcbg h1-internal my-4 banner-heading'>
            <span dangerouslySetInnerHTML={{ __html: heading.text }}></span>
            </h1>
          </div>
          <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
            <Image
              src={image}
              alt='solution-architect-img'
            />
          </div>
          {buttonText && (
              <div className='explore-btn-mob'>
                <Button
                  label={buttonText}
                  downloadLink={buttonLink}
                  caseStudyFileName={caseStudyFileName}
                  classes='green-btn px-5 py-3 mt-lg-3 my-sm-0 br-10'
                />
              </div>
            )}
               <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 text-end'>
            <Image
              src={maskImage}
              priority={true}
              alt='mask-img'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudiesHeroSection;
