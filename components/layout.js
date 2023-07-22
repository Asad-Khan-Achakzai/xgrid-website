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

// Next imports
import { useRouter } from 'next/router';

// Constants import
import constants from '../constants/constants';

// Components import
import Header from './header';
import Footer from './footer';
import ReadyToStart from './readytostart';
import NotFound from './svg-with-message';

/**
 * Component for applying layout on all pages
 * @params {component} children - pages which need to have layout components applied
 * @returns component
 */
const Layout = ({ children }) => {
  const router = useRouter();
  const {
    careers,
    openPositions,
    notFound,
    caseStudy1,
    caseStudy2,
    caseStudy3,
    caseStudy4,
    thankyou,
    home,
  } = constants.pageLinks;
  const pagesWithoutForm = [
    careers.path,
    openPositions.path,
    caseStudy1.path,
    caseStudy2.path,
    caseStudy3.path,
    caseStudy4.path,
    thankyou.path,
  ];

  // White background of the header on home page
  if (home.path === router.pathname) {
    return (
      <>
        <Header classes='white' />
        {children}
        <ReadyToStart
          title='Talk To Us Now!'
          description='Describe your project and leave us your contact info, we’ll get
                    back to you within 24 hours.'
        />
        <Footer />
      </>
    );
  }

  // Hides contact form on specific pages
  if (pagesWithoutForm.includes(router.pathname)) {
    return (
      <>
        <Header />
        {children}
        <Footer />
      </>
    );
  }
  if (notFound.path === router.pathname) {
    return (
      <>
        <Header />
        <NotFound />
        <Footer />
      </>
    );
  }

  if ('/[slug]' === router.pathname) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      {children}
      <ReadyToStart
        title='Talk To Us Now!'
        description='Describe your project and leave us your contact info, we’ll get
                  back to you within 24 hours.'
      />
      <Footer />
    </>
  );
};

export default Layout;
