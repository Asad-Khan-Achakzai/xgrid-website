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

 // 3rd party imports
import Alert from 'react-bootstrap/Alert';

/**
 * Component for displaying alert message
 * @param {boolean} show - to show/hide alert
 * @param {string} message - message to display in alert
 * @param {string} variant - variant of alert i.e: info, danger, primary
 * @returns component
 */
const XgridAlert = ({
    show,
    message,
    variant
}) => {
  return (
    <>
      <Alert show={show} variant={variant}>
        {message}
      </Alert>
    </>
  );
}

export default XgridAlert;