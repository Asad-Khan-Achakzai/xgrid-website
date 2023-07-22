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
import UnGatedCaseStudy from '../../../components/case-study/ungated-case-study';
import GatedCaseStudy from '../../../components/case-study/gated-case-study';

// Constants import
import constants from '../../../constants/constants';

// Api methods import
import { getCaseStudyBySlug, getAllCaseStudies } from '../../api/api';

/**
 * Case study landing page
 * @param {object} caseStudy - contains caseStudy data
 * @returns Page
 */
const CaseStudy = ({ caseStudy }) => {
  return caseStudy.type === constants.caseStudyTypes.unGatedCaseStudy ? (
    <UnGatedCaseStudy caseStudy={caseStudy} />
  ) : (
    <GatedCaseStudy caseStudy={caseStudy} />
  );
};

/**
 * Generates paths for case studies, gets called at build time
 * @returns {object} - contains data needed to generate slugs/paths
 */
export const getStaticPaths = async () => {
  const { data: caseStudies } = await getAllCaseStudies();
  const paths = caseStudies.map((caseStudy) => ({
    params: { slug: caseStudy.slug },
  }));
  return { paths, fallback: false };
};

/**
 * Returns data for case study, gets called at build time
 *  @param {object} context; - contains next.js meta data
 * @returns {object} props; - contains data needed to render the page
 */
export const getStaticProps = (context) => {
  const caseStudy = getCaseStudyBySlug(context.params.slug);
  return {
    // Passed to the page component as props
    props: { caseStudy },
  };
};

export default CaseStudy;
