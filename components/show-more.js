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

// React imports
import React, { useState } from 'react';

// Constants imports
import constants from '../constants/constants';

/**
 * Component to Show or hide the text
 * @param {string} children
 * @returns Modified text
 */
const ShowMore = ({ children }) => {
  const text = children;
  const [showFullText, setShowFullText] = useState(true);
  const toggleShowMore = () => {
    setShowFullText(!showFullText);
  };
  return (
    <p className='text f-inter-reg show-more'>
      {showFullText ? text.slice(0, constants.showTextLength) : text}
      <span onClick={toggleShowMore} className='read-or-hide cursor-pointer'>
        {showFullText ? '...Show more' : ' Show less'}
      </span>
    </p>
  );
};
export default ShowMore;
