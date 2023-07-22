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
import CaseStudyForm from './gated-case-study-form';

// Constants import
import constants from '../../constants/constants';

/**
 * Component for hero section on gated case study landing page
 * @returns Component
 */
const GatedCaseStudiesHeroSection = ({
  heading,
  image,
  buttonText,
  buttonLink,
  btnClasses,
  maskImage,
  lineText,
  results,
  halfMaskImage,
  heroSubText,
  caseStudyFileName,
}) => {
  return (
    <>
      <div className='light-grey-bg row me-0'>
        <div className='row align-items-center ps-5 pt-5 pe-0 ms-0'>
          <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ps-5 ps-lg-5 ps-md-2 heading-banner-text-col align-middle'>
            <span dangerouslySetInnerHTML={{ __html: heading.text }}></span>
          </div>
          <div className='d-block d-lg-none d-md-none position-relative'>
            <div className='black-star'>
              <Image
                src={constants.images.smallBlackStar}
                alt='Gated Case Study'
              />
            </div>
          </div>
          <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 pe-0 h-23 img-container img-container-sm order-1 text-end'>
            <div className='image-sm'>
              <Image src={image} alt='Gated Case Study' />
            </div>
            <div className='hero-form hero-form-sm hero-form-xxl text-start'>
              <CaseStudyForm
                buttonLink={buttonLink}
                buttonText={buttonText}
                btnClasses={btnClasses}
                caseStudyFileName={caseStudyFileName}
              />
            </div>
          </div>
          {buttonText && (
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ps-5 ps-lg-5 ps-md-2 heading-banner-text-col align-middle order-sm-1'>
              <p className='gated-h3 gated-h3-sm ps-md-2'>{heroSubText}</p>
            </div>
          )}
        </div>

        <div className='col-lg-10 col-md-8 ps-lg-6'>
          <div className='my-3 row ps-md-2'>
            {results.map((result, index) => (
              <div
                key={index}
                className='ps-4 col-lg-4 col-md-4 col-sm-12 pe-lg-6 pe-sm-0'
              >
                <div className='mx-auto mb-2'>
                  <Image src={result.img} alt='Gated Case Study' />
                </div>
                <p dangerouslySetInnerHTML={{ __html: result.text }} />
              </div>
            ))}
            {results.length === 5 ? (
              <div className='col-lg-4 col-md-4 col-sm-12 text-end m-auto'>
                <Image src={halfMaskImage} alt='Gated Case Study' />
              </div>
            ) : null}
          </div>
        </div>
        {results.length < 5 ? (
          <div className='col-lg-2 col-md-4 text-end pe-0 d-none d-md-block'>
            <Image src={halfMaskImage} alt='Gated Case Study' />
          </div>
        ) : null}
      </div>
    </>
  );
};

export default GatedCaseStudiesHeroSection;
