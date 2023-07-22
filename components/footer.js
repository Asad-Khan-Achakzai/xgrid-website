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

//Next imports
import Link from 'next/link';
import Image from 'next/image';

//Constants imports
import constants from '../constants/constants';

// Component imports
import Icon from '../components/icon';

const Footer = () => {
  const services = [
    {
      name: constants.pageLinks.xcbg.label,
      link: constants.pageLinks.xcbg.path,
      icon: null,
      target: '_self',
    },
    {
      name: constants.pageLinks.xwmg.label,
      link: constants.pageLinks.xwmg.path,
      icon: null,
      target: '_self',
    },
    {
      name: constants.pageLinks.digitalMarketing.label,
      link: constants.pageLinks.digitalMarketing.path,
      icon: constants.images.externalLinkFooter,
      target: '_blank',
    },
    {
      name: constants.pageLinks.company.label,
      link: constants.pageLinks.company.path,
      icon: null,
      target: '_self',
    },
    {
      name: constants.pageLinks.careers.label,
      link: constants.pageLinks.careers.path,
      icon: null,
      target: '_self',
    },
    {
      name: constants.pageLinks.resources.label,
      link: constants.pageLinks.resources.path,
      icon: null,
      target: '_self',
    },
  ];

  return (
    <div
      className='custom-container pt-5 p-left-footer'
      id='footer-container'
    >
      <div className='row pt-3 justify-content-lg-between justify-content-md-start'>
        <div className='col-lg-5 col-md-5 col-sm-12 col-12 pe-5 mb-md-4 mb-lg-0'>
          <Image
            src={constants.images.xgridLogoMenu}
            alt='Xgrid logo'
          />
          <p className='font-footer color-dark-grey footer-text mt-3 f-inter-light'>
            Established in 2012, Xgrid has a history of delivering a wide range
            of intelligent and secure cloud infrastructure, user interface and
            user experience solutions. Our strength lies in our team and its
            ability to deliver end-to-end solutions using cutting edge
            technologies.
          </p>
        </div>
        <div className='col-lg-2 col-md-2 col-sm-4 col col-4 ms-lg-5 ms-md-0 ps-lg-5 ps-md-3'>
          <p className='font-footer color-dark-grey fw-500 mb-3 f-inter-semi-bold'>
            NAVIGATE
          </p>
          {services.map((serviceName) => (
            <p
              className='font-footer color-dark-grey fw-500 mb-1'
              key={serviceName.link}
            >
              <Link
                className='nav-link'
                href={serviceName.link}
              >
                <a
                  className='font-footer color-dark-grey fw-500 text-decoration-none f-inter-semi-bold'
                  target={serviceName.target}
                >
                  {serviceName.name}
                </a>
              </Link>
              {serviceName.icon && (
                <span className='nav-item-icon nav-item-icon-footer'>
                  <Image
                    src={serviceName.icon}
                    alt={serviceName.name}
                  />
                </span>
              )}
            </p>
          ))}
        </div>
        <div className='col-lg-4 col-md-4 col-sm-8 col-8 '>
          <p className='font-footer color-dark-grey fw-500 mb-3 f-inter-semi-bold'>
            OFFICE ADDRESS
          </p>
          <p className='font-footer color-dark-grey fw-500 mb-1 f-inter-semi-bold'>
            US Address:
          </p>
          <p className='font-footer color-dark-grey mb-4 f-inter-light'>
            Plug and Play Tech Center, 440 N Wolfe Rd, Sunnyvale, CA 94085
          </p>
          <p className='font-footer color-dark-grey fw-500 mb-1 f-inter-semi-bold'>
            Pakistan Address:
          </p>
          <p className='font-footer color-dark-grey f-inter-light'>
            Xgrid Solutions (Private) Limited, Bldg 96, GCC-11, Civic Center,
            Gulberg Greens, Islamabad
            <br />
            Xgrid Solutions (Private) Limited, 10th floor, Haly Tower, Sector R,
            DHA, Phase 2, Lahore
          </p>
          <p className='font-footer color-dark-grey f-inter-light'></p>
        </div>
      </div>
      <div className='row mt-4'>
        <div className='text-md-start text-center'>
          <a
            href={constants.socialMediaLinks.facebook}
            target='_blank'
          >
            <div className='socialIcon'>
              <Icon
                paths={constants.svgIcons.facebook}
                iconWidth='30'
                iconHeight='31'
              />
            </div>
          </a>
          <a
            href={constants.socialMediaLinks.youtube}
            target='_blank'
          >
            <div className='socialIcon'>
              <Icon
                paths={constants.svgIcons.youtube}
                iconWidth='30'
                iconHeight='31'
              />
            </div>
          </a>
          <a
            href={constants.socialMediaLinks.twitter}
            target='_blank'
          >
            <div className='socialIcon'>
              <Icon
                paths={constants.svgIcons.twitter}
                iconWidth='30'
                iconHeight='31'
              />
            </div>
          </a>
          <a
            href={constants.socialMediaLinks.instagram}
            target='_blank'
          >
            <div className='socialIcon'>
              <Icon
                paths={constants.svgIcons.instagram}
                iconWidth='30'
                iconHeight='31'
              />
            </div>
          </a>
          <a
            href={constants.socialMediaLinks.linkedIn}
            target='_blank'
          >
            <div className='socialIcon'>
              <Icon
                paths={constants.svgIcons.linkedIn}
                iconWidth='30'
                iconHeight='31'
              />
            </div>
          </a>
          <a
            href={constants.socialMediaLinks.anchor}
            target='_blank'
          >
            <div className='socialIcon'>
              <Icon
                paths={constants.svgIcons.anchor}
                viewBox='0 0 1000 160'
                iconWidth='100'
                iconHeight='31'
              />
            </div>
          </a>
        </div>
        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
          <div className='d-flex justify-content-center justify-content-md-start'>
            <p className=''>
              <span className='px-1'>
                <Link
                  className='nav-link'
                  href={constants.pageLinks.privacyPolicy.path}
                >
                  <a className='font-footer color-dark-grey fw-500 text-decoration-none f-inter-reg'>
                    {constants.pageLinks.privacyPolicy.label}
                  </a>
                </Link>
              </span>
              |
              <span className='px-1'>
                <Link
                  className='nav-link'
                  href={constants.pageLinks.termsAndConditions.path}
                >
                  <a className='font-footer color-dark-grey fw-500 text-decoration-none f-inter-reg'>
                    {constants.pageLinks.termsAndConditions.label}
                  </a>
                </Link>
              </span>
              |
              <span className='px-1'>
                <Link
                  className='nav-link'
                  href={constants.pageLinks.informationSecurityPolicy.path}
                >
                  <a className='font-footer color-dark-grey fw-500 text-decoration-none f-inter-reg'>
                    {constants.pageLinks.informationSecurityPolicy.label}
                  </a>
                </Link>
              </span>
            </p>
          </div>
        </div>
        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
          <div className='d-flex justify-content-center justify-content-md-end'>
            <p className='font-footer color-dark-grey f-inter-reg'>
              Xgrid © {new Date().getFullYear()}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
