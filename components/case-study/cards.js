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

/**
 * Component to show textual cards on case study landing pages
 * @param {object} cards - card object containing card data
 * @param {string} mainTextColorClass - css class name for text color
 * @returns Component
 */
const Cards = ({ cards, mainTextColorClass }) => {
  return (
    <>
      <div className="row">
        {
          cards.map(card => (
            <div className="col-lg-4 mb-4" key={card.cardMainText}>
              <div className="case-study-card mx-auto">
                <h2 className={mainTextColorClass}>{card.cardMainText}</h2>
                <p className="sub-text">{card.cardSubText}</p>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Cards;