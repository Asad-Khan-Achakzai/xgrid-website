/*
 Copyright (c) 2023, Xgrid Inc, http://xgrid.co

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
import React, { useState, useContext } from 'react';

// Next imports
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

// Constants imports
import constants from '../constants/constants';

// Component imports
import Button from './button';
import Emitter from './emitter';

// Context Api imports
import { AppContext } from '../context/appContext';

/**
 * Component for Full page menu, expecting following props
 * TODO: Will make this more generic later
 * @param {{
 * logo // image
 * navigateTo // Navigation href
 * }} param0
 * @returns Component
 */
const FullPageMenu = ({ logo, navigateTo }) => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [showResourcesSubMenu, setShowResourcesSubMenu] = useState(false);

  const router = useRouter();
  const { setIsSearchResult } = useContext(AppContext);

  /**
   * Function to emit an event when any resource is clicked
   * @param {String} filter
   */
  const resourceClicked = (filter) => {
    Emitter.emit(constants.filterResourceEvent, { filter: filter });
  };

  /**
   * Function to scroll down to the contact us section
   */
  const scrollElement = () => {
    const element = document.getElementById('contact-us-section');
    if (
      router.pathname === constants.pageLinks.caseStudiesRouterPath.path ||
      router.pathname === constants.pageLinks.careers.path ||
      router.pathname === constants.pageLinks.openPositions.path
    ) {
      setIsSearchResult(true);
      // There is no contact us section on careers and case studies page so navigate him to xcbg's contact us section
      router.push({
        pathname: constants.pageLinks.xcbg.path,
        query: {
          scrollElementId: 'contact-us-section',
          scrollOffset: constants.scrollOffsetValue,
        },
      });
    } else {
      setTimeout(
        () =>
          element?.scrollIntoView({
            behavior: 'auto',
            block: 'center',
          }),
        constants.setTimeoutValue
      );
    }
  };

  return (
    <>
      <div
        className='modal fade'
        id='menuModal'
        aria-hidden='true'
        aria-labelledby='menuModal'
        tabIndex='-1'
      >
        <div className='modal-dialog xg-modal-fullscreen row'>
          <div className='modal-content rounded-0 border-0 px-lg-5 py-4 col-12'>
            <div className='modal-header mb-2 row'>
              <div className='col-6'>
                <Link href={navigateTo}>
                  <Image
                    className='d-block d-md-none'
                    data-bs-dismiss='modal'
                    src={constants.images.xgridLogoBlack}
                    alt='Xgrid logo'
                  />
                </Link>
              </div>

              <div className='col-6  text-end'>
                <button
                  type='button'
                  className='bg-transparent border-0 xg-modal-btn-close'
                  data-bs-dismiss='modal'
                  aria-label='Close'
                >
                  <svg
                    width='48'
                    height='48'
                    viewBox='0 0 48 48'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M36 12L12 36'
                      stroke='black'
                      strokeWidth='3'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M12 12L36 36'
                      stroke='black'
                      strokeWidth='3'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className='modal-body'>
              <div className='container-fluid'>
                <div className='row ps-lg-4'>
                  <div className='col-lg-5 col-md-5 px-0 order-1 mt-4 mt-md-0'>
                    <div>
                      <div className='social-accounts'>
                        <span className='f-lato-reg color-grey menu-heading col-12'>
                          Social
                        </span>
                        <a
                          href={constants.socialAccounts.linkedIn}
                          className='f-lato-reg'
                          target='_blank'
                        >
                          LinkedIn
                        </a>
                        <a
                          href={constants.socialAccounts.instagram}
                          className='f-lato-reg'
                          target='_blank'
                        >
                          Instagram
                        </a>
                        <a
                          href={constants.socialAccounts.facebook}
                          className='f-lato-reg'
                          target='_blank'
                        >
                          Facebook
                        </a>
                        <a
                          href={constants.socialAccounts.twitter}
                          className='f-lato-reg'
                          target='_blank'
                        >
                          Twitter
                        </a>
                        <a
                          href={constants.socialAccounts.anchor}
                          className='f-lato-reg'
                          target='_blank'
                        >
                          Anchor
                        </a>
                        <a
                          href={constants.socialAccounts.youtube}
                          className='f-lato-reg'
                          target='_blank'
                        >
                          Youtube
                        </a>
                      </div>
                      <div className='btn-container'>
                        <div className=''>
                          <div className=''>
                            <Button
                              hrefLink={`mailto:${constants.xgridInfoEmailAddress}`}
                              label='Lets talk'
                              isIcon={true}
                              classes='purple-btn text-white border-0 rounded-3 px-5 mt-lg-3 my-sm-0 f-lato-reg lets-talk-btn'
                            ></Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-7 col-md-7 px-0 order-md-1'>
                    <div className='mb-4 color-grey menu-heading'>
                      <span>Menu</span>
                    </div>
                    <div className='mb-3 mb-md-5 menu-link'>
                      <span onClick={() => setShowSubMenu(!showSubMenu)}>
                        <a className='d-inline-block link-text f-lato-reg'>
                          Services
                        </a>
                      </span>
                      {showSubMenu && (
                        <>
                          <div data-bs-dismiss='modal'>
                            <Link href={constants.pageLinks.xcbg.path}>
                              <a
                                className={`d-inline-block f-lato-reg sub-menu ${
                                  router.pathname ===
                                    constants.pageLinks.xcbg.path && 'underline'
                                }`}
                              >
                                Cloud & DevOps
                              </a>
                            </Link>
                          </div>
                          <div data-bs-dismiss='modal'>
                            <Link href={constants.pageLinks.xwmg.path}>
                              <a
                                className={`d-inline-block f-lato-reg sub-menu ${
                                  router.pathname ===
                                    constants.pageLinks.xwmg.path && 'underline'
                                }`}
                              >
                                Web & Mobile Apps
                              </a>
                            </Link>
                          </div>
                          <div data-bs-dismiss='modal'>
                            <Link
                              href={constants.pageLinks.digitalMarketing.path}
                            >
                              <a
                                className='d-inline-block f-lato-reg sub-menu'
                                target='_blank'
                              >
                                Digital Marketing
                              </a>
                            </Link>
                          </div>
                        </>
                      )}
                    </div>
                    <div className='mb-3 mb-md-5 menu-link'>
                      <span
                        onClick={() =>
                          setShowResourcesSubMenu(!showResourcesSubMenu)
                        }
                      >
                        <a className={`d-inline-block link-text f-lato-reg`}>
                          Resources
                        </a>
                      </span>
                      {showResourcesSubMenu && (
                        <>
                          <div data-bs-dismiss='modal'>
                            <Link
                              href={`${constants.pageLinks.resources.path}?filter=${constants.resourcePageFilters.caseStudies.value}`}
                            >
                              <a
                                className={`d-inline-block f-lato-reg sub-menu ${
                                  router.asPath ===
                                    `${constants.pageLinks.resources.path}/?filter=${constants.resourcePageFilters.caseStudies.value}` &&
                                  'underline'
                                }`}
                                onClick={() =>
                                  resourceClicked(
                                    constants.resourcePageFilters.caseStudies
                                      .value
                                  )
                                }
                              >
                                {constants.resourcePageFilters.caseStudies.text}
                              </a>
                            </Link>
                          </div>
                          <div data-bs-dismiss='modal'>
                            <Link
                              href={`${constants.pageLinks.resources.path}?filter=${constants.resourcePageFilters.articles.value}`}
                            >
                              <a
                                className={`d-inline-block f-lato-reg sub-menu ${
                                  router.asPath ===
                                    `${constants.pageLinks.resources.path}/?filter=${constants.resourcePageFilters.articles.value}` &&
                                  'underline'
                                }`}
                                onClick={() =>
                                  resourceClicked(
                                    constants.resourcePageFilters.articles.value
                                  )
                                }
                              >
                                {constants.resourcePageFilters.articles.text}
                              </a>
                            </Link>
                          </div>
                          <div data-bs-dismiss='modal'>
                            <Link
                              href={`${constants.pageLinks.resources.path}?filter=${constants.resourcePageFilters.webinars.value}`}
                            >
                              <a
                                className={`d-inline-block f-lato-reg sub-menu ${
                                  router.asPath ===
                                    `${constants.pageLinks.resources.path}/?filter=${constants.resourcePageFilters.webinars.value}` &&
                                  'underline'
                                }`}
                                onClick={() =>
                                  resourceClicked(
                                    constants.resourcePageFilters.webinars.value
                                  )
                                }
                              >
                                {constants.resourcePageFilters.webinars.text}
                              </a>
                            </Link>
                          </div>
                          <div data-bs-dismiss='modal'>
                            <Link
                              href={`${constants.pageLinks.resources.path}?filter=${constants.resourcePageFilters.xgridTalks.value}`}
                            >
                              <a
                                className={`d-inline-block f-lato-reg sub-menu ${
                                  router.asPath ===
                                    `${constants.pageLinks.resources.path}/?filter=${constants.resourcePageFilters.xgridTalks.value}` &&
                                  'underline'
                                }`}
                                onClick={() =>
                                  resourceClicked(
                                    constants.resourcePageFilters.xgridTalks
                                      .value
                                  )
                                }
                              >
                                {constants.resourcePageFilters.xgridTalks.text}
                              </a>
                            </Link>
                          </div>
                          <div data-bs-dismiss='modal'>
                            <Link
                              href={`${constants.pageLinks.resources.path}?filter=${constants.resourcePageFilters.podcast.value}`}
                            >
                              <a
                                className={`d-inline-block f-lato-reg sub-menu ${
                                  router.asPath ===
                                    `${constants.pageLinks.resources.path}/?filter=${constants.resourcePageFilters.podcast.value}` &&
                                  'underline'
                                }`}
                                onClick={() =>
                                  resourceClicked(
                                    constants.resourcePageFilters.podcast.value
                                  )
                                }
                              >
                                {constants.resourcePageFilters.podcast.text}
                              </a>
                            </Link>
                          </div>
                          <div data-bs-dismiss='modal'>
                            <Link
                              href={`${constants.pageLinks.resources.path}?filter=${constants.resourcePageFilters.whitepapers.value}`}
                            >
                              <a
                                className={`d-inline-block f-lato-reg sub-menu ${
                                  router.asPath ===
                                    `${constants.pageLinks.resources.path}/?filter=${constants.resourcePageFilters.whitepapers.value}` &&
                                  'underline'
                                }`}
                                onClick={() =>
                                  resourceClicked(
                                    constants.resourcePageFilters.whitepapers
                                      .value
                                  )
                                }
                              >
                                {constants.resourcePageFilters.whitepapers.text}
                              </a>
                            </Link>
                          </div>
                        </>
                      )}
                    </div>
                    <div
                      className='mb-3 mb-md-5 menu-link'
                      data-bs-dismiss='modal'
                    >
                      <Link href={constants.pageLinks.company.path}>
                        <a
                          className={`d-inline-block link-text f-lato-reg ${
                            router.pathname ===
                              constants.pageLinks.company.path && 'underline'
                          }`}
                        >
                          Company
                        </a>
                      </Link>
                    </div>
                    <div
                      className='mb-3 mb-md-5 menu-link'
                      data-bs-dismiss='modal'
                    >
                      <Link href={constants.pageLinks.careers.path}>
                        <a
                          className={`d-inline-block link-text f-lato-reg ${
                            router.pathname ===
                              constants.pageLinks.careers.path && 'underline'
                          }`}
                        >
                          Careers
                        </a>
                      </Link>
                    </div>

                    <div
                      className='mb-3 mb-md-5 menu-link'
                      data-bs-dismiss='modal'
                    >
                      <a
                        className='d-inline-block link-text f-lato-reg'
                        onClick={scrollElement}
                      >
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FullPageMenu;
