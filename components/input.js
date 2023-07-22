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
import Image from 'next/image';
import React from 'react';
import constants from '../constants/constants';

/**
 * @param {{
 * classes: string // Additional classes
 * searchHandler: function for handling search,
 * val: string // input value
 * isIcon: boolean // toggle icon
 * inputIcon: string // for custom icon
 * }} param0
 * @returns component
 */
const XGInput = ({ classes, searchHandler, val, isIcon, inputIcon }) => {
  return (
    <div className={`${classes}`}>
      <span
        className='p-l-0 input-group-text border-0 search-icon bg-transparent'
        id='addon-wrapping'
      >
        {isIcon && (
          <Image
            src={inputIcon ? inputIcon : constants.icons.search}
            alt='search icon'
          />
        )}
      </span>
      <input
        type='text'
        value={val}
        className='form-control border-0 ps-0 border-start-0 light-grey-bg-imp'
        placeholder='Search...'
        onChange={(event) => searchHandler(event)}
      />
    </div>
  );
};

export default XGInput;
