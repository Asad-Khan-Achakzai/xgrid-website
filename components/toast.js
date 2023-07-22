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
import ToastContainer from 'react-bootstrap/ToastContainer';
import Toast from 'react-bootstrap/Toast';

/**
 * Component for displaying toast message
 * @param {string} title - title to display in toast header
 * @param {string} message - message to display in toast
 * @param {boolean} show - to show/hide toast
 * @param {function} onClose - method to invoke when toast is closed
 * @returns component
 */
const XgridToast = ({
  title,
  message,
  show,
  onClose
}) => {
  return (
    <>
      <div className="position-relative">
        <ToastContainer containerPosition={"position-absolute"} position={"middle-end"}>
          <Toast show={show} onClose={onClose}>
            <Toast.Header>
              <strong className="me-auto">{title}</strong>
            </Toast.Header>
            <Toast.Body>{message}</Toast.Body>
          </Toast>
        </ToastContainer>
      </div>
    </>
  );
}

export default XgridToast;