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

// Components import
import CaseStudiesHeroSection from '../case-study/hero-section-case-studies';
import Cards from '../case-study/cards';
import CtaGroup from '../case-study/cta-group-section';
import ProblemStatement from '../case-study/problem-statement';
import Results from '../case-study/results';
import BestPractices from '../case-study/best-practices-section';
import DidYouKnow from '../case-study/did-you-know-section';
import AboutUs from '../case-study/about-us-section';
import ProblemSolution from '../case-study/problem-solution';
import Button from '../button';
import MultiplePosts from '../multiplePosts';
import MetaTags from '../meta-tags';

// Constants import
import constants from '../../constants/constants';

// Api methods import
import { getCaseStudyBySlug, getAllCaseStudies } from '../../pages/api/api';

/**
 * Case study landing page
 * @param {object} caseStudy - contains caseStudy data
 * @returns Page
 */
const UnGatedCaseStudy = ({ caseStudy }) => {
  return (
    <>
      <MetaTags
        title={caseStudy.thumbnail.title}
        description={caseStudy.thumbnail.description}
        imgUrl={caseStudy.thumbnail.imgUrl}
      />
      {/* Section 1 */}
      <CaseStudiesHeroSection
        heading={caseStudy.heroSection.heroText}
        image={caseStudy.heroSection.heroImg}
        buttonText={caseStudy.heroSection.heroBtnText}
        buttonLink={caseStudy.downloadURL}
        caseStudyFileName={caseStudy.pdfFileName}
        maskImage={caseStudy.heroSection.maskImg}
      />

      <div className='container'>
        {/* Section 2 */}
        {/* Cards section on un-gated case studies */}
        <div className='container mt-5 p-5'>
          <Cards
            cards={caseStudy.cardSection}
            mainTextColorClass={'color-forest-green'}
            subTextColorClass={'color-cod-grey'}
          />
        </div>

        {/* Inner container */}
        <div className='inner-container col-lg-6 mt-5'>
          {/* Section 3 */}
          {/* CTA group containing download, share etc buttons with small paragraph */}
          <CtaGroup
            text={caseStudy.ctaGroupSection.text}
            industry={caseStudy.ctaGroupSection.industry}
            project={caseStudy.ctaGroupSection.project}
            buttonGroup={caseStudy.ctaGroupSection.buttons}
            caseStudyUrl={caseStudy.downloadURL}
            caseStudyFileName={caseStudy.pdfFileName}
          />
          <div className='my-5'>
            <ProblemStatement
              title={caseStudy.problemStatementSection.title}
              content={caseStudy.problemStatementSection.content}
            />
          </div>
        </div>
        {/* Section 4 */}
        <div>
          <Results
            title={caseStudy.results.title}
            results={caseStudy.results.content}
            lineText={caseStudy.results.lineText}
          />
        </div>
        <div className='inner-container col-lg-6 mt-5'>
          {/* Section 5 */}
          <ProblemSolution
            title={caseStudy.problemSolutionSection.title}
            img={caseStudy.problemSolutionSection.img}
            alt={caseStudy.problemSolutionSection.alt}
            firstLine={caseStudy.problemSolutionSection.firstLine}
            lastLine={caseStudy.problemSolutionSection.lastLine}
            content={caseStudy.problemSolutionSection.content}
          />

          {/* Section 6 */}
          <div className='p-3'>
            <BestPractices
              title={caseStudy.bestPracticesSection.title}
              practices={caseStudy.bestPracticesSection.content}
              img={caseStudy.bestPracticesSection.bottomImage}
              containerClasses={caseStudy.bestPracticesSection.containerClasses}
            />
          </div>

          {/* Section 7 */}
          <div>
            <DidYouKnow
              title={caseStudy.didYouKnowSection.title}
              text={caseStudy.didYouKnowSection.content}
            />
          </div>

          {/* Section 8 */}
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
        </div>

        {/* Section 9 */}
        <div className='container-fluid pt-7 light-grey-bg'>
          <div className='container'>
            <div className='row'>
              <MultiplePosts
                source={constants.pageLinks.caseStudies.path}
                postsPerPage={3}
                showSeparator={true}
                separatorText='Latest Case Studies'
                separatorAdditionalClasses='mb-5'
                dataFetchCallback={getAllCaseStudies}
                navigateBaseURL={constants.pageLinks.caseStudies.path}
                renderedFor={constants.resourcePageFilters.caseStudies.value}
              />
              <div className='col-lg-12 text-center xgm-b-5'>
                <Button
                  label='Xplore More'
                  classes='px-4 border py-3 rounded-3 purple-btn text-white'
                  icon={true}
                  isIcon={true}
                  hrefLink={constants.pageLinks.resources.path}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default UnGatedCaseStudy;
