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
import Image from "next/image";

//  Components import
import Separator from "../separator";

/**
 * Component to display content of problem solution section
 * @param {string} title
 * @param {string} firstLine
 * @param {image} img
 * @param {string} alt
 * @param {string} content
 * @param {string} lastLine
 * @returns Component
 */
const ProblemSolution = ({ title, firstLine, img, alt, content, lastLine }) => {
  return (
    <>
      <h2>{title}</h2>
      <div>
        <p className="my-4">{firstLine}</p>
        <div className="my-5">
          <Image alt={alt} src={img} />
        </div>
        <div className="px-3" dangerouslySetInnerHTML={{ "__html": content }} />
      </div>
      <div className="mt-5 pb-3 star-list-item">
        <li><p className="pt-3 color-black fw-bold">{lastLine}</p></li>
      </div>
      <Separator classes="line my-5" />
    </>
  )
}

export default ProblemSolution;