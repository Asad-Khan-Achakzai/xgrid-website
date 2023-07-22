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
 * Functional component for rendering svg icons
 * @param {{
 * iconWidth: // String: Icon width
 * iconHeight: // String: Icon height
 * viewBox: // String View box props
 * path: // List of paths
 * }}
 * @returns component
 */
const Icon = (props) => {
  return (
    <>
      <svg
        width={props.iconWidth}
        height={props.iconHeight}
        viewBox={props.viewBox != '' ? props.viewBox : '0 0 30 31'}
        fill='currentColor'
        xmlns='http://www.w3.org/2000/svg'
      >
        {props.paths.map((path) => {
          return (
            <>
              <path d={path} />
            </>
          );
        })}
      </svg>
    </>
  );
};

export default Icon;
