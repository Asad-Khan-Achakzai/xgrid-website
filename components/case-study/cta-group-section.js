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

// Next import
import Image from 'next/image';

// React imports
import { useState } from 'react';

// Constants import
import constants from '../../constants/constants';

// Custom hooks imports
import useComponentVisible from '../../hooks/useComponentVisible';

// Components import
import Separator from '../separator';
import ClipboardPopup from '../clipboard-popup';

// Helpers import
import { downloadFile } from '../../helpers/files';

/**
 * Component to show download, share buttons with text section
 * @param {string} text - paragraph text
 * @param {string} industry - industry name
 * @param {string} project - project name
 * @param {array} buttonGroup - array containing data for each button
 * @param {string} caseStudyUrl - url of case study pdf file
 * @returns Component
 */
const CtaGroup = ({
  text,
  industry,
  project,
  buttonGroup,
  caseStudyUrl,
  caseStudyFileName,
}) => {
  const [isShareClicked, setShareClicked] = useState(false);
  const { isComponentVisible, setIsComponentVisible, ref } =
    useComponentVisible(true);

  const handleClick = async (label) => {
    switch (label) {
      case constants.caseStudyCTAGroup.download:
        await downloadFile(caseStudyUrl, caseStudyFileName);
        break;
      case constants.caseStudyCTAGroup.print:
        window.open(caseStudyUrl, 'PRINT');
        break;
      case constants.caseStudyCTAGroup.share:
        setShareClicked(true);
        setIsComponentVisible(true);
        break;
    }
  };

  return (
    <>
      <p className='text-center'>{text}</p>
      <Separator classes='line' />
      <div className='row position-relative'>
        <div className='d-none d-md-block'>
          {isShareClicked && (
            <div ref={ref}>
              {isComponentVisible && (
                <ClipboardPopup textToCopy={caseStudyUrl} />
              )}
            </div>
          )}
        </div>
        <div className='d-block d-md-none'>
          <div ref={ref}>
            {isComponentVisible && (
              <ClipboardPopup
                textToCopy={caseStudyUrl}
                additionalClasses='clipboard-popup-case-study-sm'
              />
            )}
          </div>
        </div>
        <div className='col-lg-6 col-md-6 col-sm-12'>
          <p>
            Industry: <strong>{industry}</strong>
          </p>
          <p>
            Project: <strong>{project}</strong>
          </p>
        </div>
        <div className='col-lg-6 col-md-6 col-sm-12'>
          <div className='col-12  pt-md-0 pt-3'>
            <div className='row text-center'>
              {buttonGroup?.map((btn) => (
                <div
                  onClick={() => handleClick(btn.label)}
                  className='col-4 p-0 cta-group f-inter-light'
                >
                  <div className='h-2'>
                    <Image
                      src={btn.icon}
                      alt='btn icon'
                    />
                  </div>
                  <h4 className='action-btn'>{btn.label}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CtaGroup;
