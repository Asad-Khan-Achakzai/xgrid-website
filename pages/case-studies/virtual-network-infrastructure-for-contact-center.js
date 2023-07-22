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

// Component Imports
import CaseStudyFormWrapper from "../../components/case-study-form-wrapper";
import CaseStudyForm from "../../components/case-study-form";

/**
 * Component for displaying case study form form
 * @returns component
 */
const CaseStudy3 = () => {
  return (
    <>
      <CaseStudyFormWrapper
        title="Download This Success Story Now!"
        description=""
        caseStudyForm={<CaseStudyForm caseStudyNum={3}/>}
      />
    </>
  );
}

export default CaseStudy3;
