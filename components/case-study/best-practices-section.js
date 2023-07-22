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

// Components import
import Separator from "../separator";

/**
 * Component displays approaches and best practices section
 * @param {string} title
 * @param {array} practices
 * @param {image} img
 * @param {text} containerClasses
 * @returns Component
 */
const BestPractices = ({ title, practices, img, containerClasses }) => {
  return (
    <>
      <div className={`${containerClasses}`}>
        <h2 className="mb-4">{title}</h2>
        <div>
          <ul className="practices-list">
            {
              practices.map((practice, index) => (
                <li key={index} dangerouslySetInnerHTML={{ "__html": practice }} />
              ))
            }
          </ul>
          <div className="d-flex justify-content-end">
            <Image alt="star icon" src={img} />
          </div>
        </div>
      </div>
      <Separator classes="line" />
    </>
  )
}

export default BestPractices;