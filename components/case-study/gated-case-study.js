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

//React imports
import React, { useContext, useEffect } from 'react';

// Components import
import GatedCaseStudiesHeroSection from '../case-study/gated-hero-section-case-studies';
import Feedback from '../case-study/feedback';
import Report from '../case-study/report';
import AboutUs from '../case-study/gated-about-us-section';
import Velox from '../case-study/velox';
import MetaTags from '../meta-tags';

// Context Api imports
import { AppContext } from '../../context/appContext';

/**
 * Case study landing page
 * @param {object} caseStudy - contains caseStudy data
 * @returns Page
 */
const GatedCaseStudy = ({ caseStudy }) => {
  const { setIsSearchResult } = useContext(AppContext);
  useEffect(() => {
    setIsSearchResult(false);
    return () => setIsSearchResult(true);
  }, []);

  return (
    <>
      <MetaTags
        title={caseStudy.thumbnail.title}
        description={caseStudy.thumbnail.description}
        imgUrl={caseStudy.thumbnail.imgUrl}
      />
      {/* Section 1 */}
      <GatedCaseStudiesHeroSection
        heading={caseStudy.heroSection.heroText}
        image={caseStudy.heroSection.heroImg}
        buttonText={caseStudy.heroSection.heroBtnText}
        buttonLink={caseStudy.heroSection.downloadURL}
        btnClasses={caseStudy.heroSection.btnClasses}
        maskImage={caseStudy.heroSection.maskImg}
        results={caseStudy.results.content}
        lineText={caseStudy.results.lineText}
        halfMaskImage={caseStudy.heroSection.halfMaskImg}
        heroSubText={caseStudy.heroSection.heroSubText}
        caseStudyFileName={caseStudy.pdfFileName}
      />
      {/* Section 6 */}
      <Feedback
        title={caseStudy.feedback.title}
        practice={caseStudy.feedback.content}
        clientImage={caseStudy.feedback.clientImage}
        containerClasses={caseStudy.feedback.containerClasses}
        clientOrganization={caseStudy.feedback.clientOrganization}
        clientDesignation={caseStudy.feedback.clientDesignation}
        titleClasses={caseStudy.feedback.titleClasses}
        descriptionClasses={caseStudy.feedback.descriptionClasses}
      />
      <Report
        title={caseStudy.results.title}
        titleClasses={caseStudy.results.titleClasses}
        results={caseStudy.results.report}
        reportImages={caseStudy.results.reportImages}
      />
      <div className='mt-5'>
        <AboutUs
          title={caseStudy.aboutUsSection.title}
          text={caseStudy.aboutUsSection.content}
          btnLabel={caseStudy.aboutUsSection.btnLabel}
          btnClasses={caseStudy.aboutUsSection.btnClasses}
          img={caseStudy.aboutUsSection.img}
          containerClasses={caseStudy.aboutUsSection.containerClasses}
        />
      </div>
      <Velox
        title={caseStudy.velox.title}
        text={caseStudy.velox.content}
        btnLabel={caseStudy.velox.btnLabel}
        btnClasses={caseStudy.velox.btnClasses}
        img={caseStudy.velox.img}
        containerClasses={caseStudy.velox.containerClasses}
        hrefLink={caseStudy.velox.hrefLink}
      />
    </>
  );
};
export default GatedCaseStudy;
