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

//React imports
import { useEffect, useRef, useState } from 'react';

//Next imports
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

//Constants imports
import constants from '../constants/constants';
import FullPageMenu from './fullPageMenu';

const Header = ({ classes }) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [stickyClass, setStickyClass] = useState('');
  const router = useRouter();
  const stickyRef = useRef();

  useEffect(() => {
    if (window !== undefined) {
      const observer = new window.IntersectionObserver(handler);
      observer.observe(stickyRef.current);
    }
  }, []);

  // Toggles navbar collapse menu
  const handleNavCollapsed = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  const handler = (entries) => {
    if (!entries[0].isIntersecting) {
      setStickyClass('sticky-nav');
    } else {
      setStickyClass('');
    }
  };

  return (
    <>
      <div
        ref={stickyRef}
        className='sticky-top-header-trigger'
      />
      <FullPageMenu
        logo={constants.images.xgridLogoWhite}
        navigateTo={constants.pageLinks.home.path}
      />
      <div
        className={`container-fluid py-4 sticky-container ${stickyClass} ${
          classes ? '' : 'light-grey-bg'
        }`}
      >
        <div
          className='custom-container'
          id='navbar-container'
        >
          <nav className='navbar navbar-expand'>
            <Link href={constants.pageLinks.home.path}>
              <Image
                className='cursor-pointer'
                src={constants.images.xgridLogoMenu}
                alt={'Xgrid Logo'}
              />
            </Link>

            <button
              className='navbar-toggler'
              onClick={handleNavCollapsed}
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarText'
              aria-controls='navbarText'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <div className='navbar-desktop-toggle'>
                <hr className='menu-top-line'></hr>
                <hr className='menu-bottom-line'></hr>
              </div>
            </button>
            <div
              className={`${
                isNavCollapsed ? 'collapse' : ''
              } navbar-collapse justify-content-lg-between justify-content-end`}
              id='navbarText'
            >
              <div className='d-none d-lg-block'>
                <ul className='navbar-nav mr-auto'>
                  <li
                    className={`nav-item f-inter-reg ${
                      router.pathname == constants.pageLinks.xcbg.path
                        ? 'active'
                        : ''
                    }`}
                  >
                    <Link
                      className='nav-link'
                      href={constants.pageLinks.xcbg.path}
                    >
                      <a onClick={handleNavCollapsed}>
                        {constants.pageLinks.xcbg.label}
                      </a>
                    </Link>
                  </li>
                  <li
                    className={`nav-item f-inter-reg ${
                      router.pathname == constants.pageLinks.xwmg.path
                        ? 'active'
                        : ''
                    }`}
                  >
                    <Link
                      className='nav-link f-inter-reg'
                      href={constants.pageLinks.xwmg.path}
                    >
                      <a onClick={handleNavCollapsed}>
                        {constants.pageLinks.xwmg.label}
                      </a>
                    </Link>
                  </li>
                  <li className='nav-item f-inter-reg'>
                    <Link
                      className='nav-link'
                      href={constants.pageLinks.digitalMarketing.path}
                    >
                      <a
                        target='_blank'
                        onClick={handleNavCollapsed}
                      >
                        {constants.pageLinks.digitalMarketing.label}
                        <div className='nav-item-icon'>
                          <Image
                            src={constants.images.externalLink}
                            alt='external link icon'
                          />
                        </div>
                      </a>
                    </Link>
                  </li>
                  <li
                    className={`nav-item d-lg-none ${
                      router.pathname == constants.pageLinks.careers.path
                        ? 'active'
                        : ''
                    }`}
                  >
                    <Link
                      className='nav-link'
                      href={constants.pageLinks.careers.path}
                    >
                      <a onClick={handleNavCollapsed}>
                        {constants.pageLinks.careers.label}
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
              <button
                data-bs-toggle='modal'
                href='#menuModal'
                role='button'
                onClick={handleNavCollapsed}
                type='button'
                aria-label='Toggle navigation'
                className='border-0 bg-transparent menu-button'
              >
                <div className='navbar-desktop-toggle'>
                  <hr className='menu-top-line'></hr>
                  <hr className='menu-bottom-line'></hr>
                </div>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};
export default Header;
