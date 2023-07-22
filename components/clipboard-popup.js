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

// Next import
import Image from "next/image";

// React imports
import { useState } from "react";

// Constants import
import constants from "../constants/constants";

// NPM imports
import { Modal } from "react-bootstrap";
import { CopyToClipboard } from 'react-copy-to-clipboard';

/**
 * Displays text to copy inside an input box with copy icon
 * @param {string} textToCopy
 * @param {string} additionalClasses
 * @returns Component
 */
const ClipboardPopup = ({ textToCopy , additionalClasses }) => {
  const [isCopied, setCopied] = useState(false);

  return (
    <>
      <Modal.Dialog className={`share-popup position-absolute ${additionalClasses ? additionalClasses : "start-50 top-50 end-0 bottom-0"}`}>
        <Modal.Body className="light-grey-bg">
          <div className="copy-text">
            <input type="text" className="text" value={textToCopy} readOnly />
            <CopyToClipboard text={textToCopy}
              onCopy={() => setCopied(true)}>
              <span className="copy-text-icon">
                {
                  !isCopied ?
                    <Image src={constants.icons.clipboard} alt="Clipboard" />
                    : "Copied!"
                }
              </span>
            </CopyToClipboard>
          </div>
        </Modal.Body>
      </Modal.Dialog>
    </>
  )
}

export default ClipboardPopup;