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
import React, { useContext, useState } from 'react';

// Next imports
import { useRouter } from 'next/router';

// Constants import
import constants from '../constants/constants';

// Helpers import
import { downloadFile } from '../helpers/files';
import { scrollToElement } from '../helpers/dom';

// Context Api imports
import { AppContext } from '../context/appContext';
/**
 * Functional component for the button being used in the website.
 * @param {{
 * hrefLink: String,  // route to navigate on click
 * label: String, // text to be shown on button
 * iconClasses, // classes for arrow icon
 * clickEvent: function,  // method to invoke on click
 * classes: String, // classes for button style customization
 * isIcon: Boolean, // show/hide default button icon
 * scrollElementId: String, // id of target element to scroll
 * scrollOffset: Number, // number of pixel to add in actual element position to show some distance from top when scrolling
 * hoverColor: String // color for button on hover state
 * }}
 * @returns component
 */
function Button({
  hrefLink,
  label,
  iconClasses = '',
  clickEvent,
  classes,
  isIcon,
  scrollElementId = '',
  scrollOffset = 0,
  hoverColor,
  isDisabled,
  downloadLink,
  caseStudyFileName,
}) {
  const router = useRouter();
  const [isHovering, setIsHovering] = useState(false);
  const { setIsSearchResult } = useContext(AppContext);

  // TODO will improve this later
  const handleMouseEnter = () => {
    hoverColor !== undefined ? setIsHovering(true) : null;
  };

  // TODO will improve this later
  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  /**
   * Function for handling button event (onClick),
   * if downloadLink exists then triggers download function
   * if href and scrollElementId exists then navigates to route and scrolls to target element
   * if href exists then navigates to route
   * if scrollElementId exists then scrolls to target element
   * if none of the above props exist then invoke clickEvent()
   * @param {Event} e
   */
  const eventHandler = async (e) => {
    e.preventDefault();
    if (downloadLink) {
      await downloadFile(downloadLink, caseStudyFileName);
    } else if (hrefLink && scrollElementId) {
      // As readyToStart page is hidden on gated case study so after this click event it makes it vissible
      setIsSearchResult(true);
      router.push({
        pathname: hrefLink,
        query: { scrollElementId, scrollOffset },
      });
    } else if (hrefLink) {
      router.push(hrefLink);
    } else if (scrollElementId) {
      if (router.pathname == constants.pageLinks.careers.path) {
        router.push({
          pathname: constants.pageLinks.xcbg.path,
          query: { scrollElementId, scrollOffset },
        });
      } else {
        scrollToElement(scrollElementId, scrollOffset);
      }
    } else {
      clickEvent(e);
    }
  };

  return (
    <button
      className={`${classes}`}
      style={{
        backgroundColor: isHovering ? hoverColor : '',
        color: isHovering ? constants.colors.white : constants.colors.darkGrey,
      }}
      disabled={isDisabled}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={eventHandler}
      id='xplore'
    >
      {label}
      <span className={iconClasses}>
        {isIcon && (
          <svg
            className='ps-1 ms-1'
            width='1.5rem'
            height='20'
            viewBox='0 0 23 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M20.9432 10.2977C20.8395 10.2977 20.7359 10.2977 20.6329 10.2977C14.2531 10.2976 7.8729 10.2976 1.49319 10.2976C1.28009 10.2976 1.03922 10.334 1.00237 10.0105C0.978331 9.79556 1.13696 9.70344 1.50067 9.70344C7.86275 9.70344 14.2248 9.70344 20.5869 9.70345C20.7076 9.70345 20.8278 9.70345 20.9485 9.70345C20.9784 9.65796 21.0089 9.61247 21.0388 9.56698C20.9448 9.51353 20.8321 9.48055 20.76 9.40378C18.3437 6.83819 15.9318 4.26861 13.5188 1.6996C13.2346 1.3971 13.186 1.23618 13.3559 1.08948C13.6101 0.870559 13.7586 1.10199 13.9119 1.26575C16.5385 4.06163 19.1646 6.85866 21.7902 9.65568C22.0717 9.95534 22.0706 10.0469 21.7827 10.3534C19.1572 13.1504 16.531 15.9469 13.9044 18.7439C13.6405 19.0248 13.4942 19.0674 13.3457 18.9071C13.1983 18.7484 13.2384 18.6006 13.507 18.314C15.9195 15.745 18.332 13.1754 20.7466 10.6081C20.8209 10.5291 20.9207 10.4768 21.0083 10.4119C20.987 10.3744 20.9651 10.3357 20.9432 10.2977Z'
              fill='currentColor'
              stroke='currentColor'
            />
          </svg>
        )}
      </span>
    </button>
  );
}

export default Button;
