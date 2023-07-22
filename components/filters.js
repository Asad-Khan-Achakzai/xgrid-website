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
import React from 'react';
import Link from 'next/link';

/**
 *
 * @param {{
 * filterActionHandler, // Function
 * filterPropsAndStyles, // Object, format { filterBtnClasses, filterBtnText }
 * active // prop for checking active link state
 * }} param0
 * @returns component
 */
const Filters = ({
  filterActionHandler, // Function
  filterPropsAndStyles, // Object, format { filterBtnClasses, filterBtnText }
  active,
}) => {
  return (
    <>
      <>
        <li className={`nav-item f-inter-reg ${active ? "active-link" : null}`}>
          <Link className='nav-link xg-btn px-4' href=''>
            <a onClick={filterActionHandler}>
              {filterPropsAndStyles.filterBtnText}
            </a>
          </Link>
        </li>
      </>
    </>
  );
};

export default React.memo(Filters);
