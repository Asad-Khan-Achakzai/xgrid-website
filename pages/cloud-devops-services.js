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

// React Imports
import { useEffect } from 'react';

// Next Imports
import { useRouter } from 'next/router';

// Constants Imports
import constants from '../constants/constants';

// Helpers Import
import { scrollToElement } from '../helpers/dom';

// Component Imports
import CustomerReview from '../components/customer-review';
import DeliverQuality from '../components/deliver-quality';
import ChooseCloud from '../components/choose-cloud';
import YourTechnology from '../components/yourtechnology';
import SolutionArchitect from '../components/solutionArchitect';
import ImageTextOverlay from '../components/image-text-overlay';
import MetaTags from '../components/meta-tags';

const XCBG = () => {
  const router = useRouter();

  useEffect(() => {
    if (router.query.scrollElementId && router.query.scrollOffset) {
      scrollToElement(router.query.scrollElementId, router.query.scrollOffset);
    }
  }, [router]);

  return (
    <>
      <MetaTags
        title='Cloud & DevOps Consulting Services and Solutions | Xgrid'
        description='We offer reliable cloud and DevOps consulting services on cloud platforms to improve your cloud experience with robust solutions that make you innovate faster.'
        imgUrl={constants.thumbnails.cloud}
      />
      {/* World Class Solution Section */}
      <SolutionArchitect
        heading='Your World-Class Solution Architects'
        subheading={[
          ' Jumpstart Your Cloud Journey With',
          <span className='color-purple'> Top 1% </span>,
          'DevOps Talent.',
        ]}
        image={constants.images.BannerImg}
      />

      {/* Their Team Section */}
      <CustomerReview
        name='Nicolas Le Borgne'
        designation='CEO - Thermosphr'
        message='Xgrid, Inc. completed the project, and the company received considerable interest from potential customers after a successful UI launch. The team collaborated weekly through online meetings, providing updates and addressing feedback. Furthermore, their practical and exceptional solution stood out.'
        image={constants.images.Nicolas}
        showAnimation={true}
      />

      {/* Delivering Quality Section */}
      <div className='light-grey-bg' id='deliver-quality'>
        <DeliverQuality
          heading='Delivering quality since'
          subheading='2012'
          image={constants.images.quality}
        />
      </div>

      {/* Aws Team Section */}
      <div className='container-fluid p-0'>
        <ImageTextOverlay
          image={constants.images.xcbgOverlay1}
          imgPersonClass='img-person-left'
          imgAltTxt='Modernized MS Access platform task management product'
          imgContainer='img-container1'
          mainHeading="An E-commerce Company Achieves 35% Cost Savings with AWS Serverless Architecture"
          subText='Revamping AWS Cost Strategy with Fully Tagged Cloud Resources & Cost Visualization'
          linkTxt='See the case study'
          linkIcon={constants.images.rightArrowBlack}
          textOverlayPosition='right'
          hrefLink='/journey-crashing-black-fridays-90-percent-revenue-spike-21-days/'
          fullLink='https://marketing.xgrid.co/cost-optimization-through-full-cloud-resource-attribution/?_ga=2.208199890.1527119560.1681727518-2017632490.1677842246'
        />
      </div>

      {/* Choose Cloud Section */}
      <ChooseCloud />

      {/* App Devlopment Section */}
      <div className='container-fluid p-0'>
        <ImageTextOverlay
          image={constants.images.xcbgOverlay2}
          imgPersonClass='img-person-right'
          imgAltTxt='Our development services for Marketing Agency'
          imgContainer='img-container2'
          mainHeading='A Secure AWS EKS Migration Success Story for a B2B SaaS Startup'
          subText='From System Outages to High Performance Architecture: A Secure AWS EKS Migration Success Story'
          linkTxt='See the case study'
          linkIcon={constants.images.rightArrowBlack}
          textOverlayPosition='left'
          hrefLink='/B2B-SaaS-Startup-Grows-Customer-Base-Secure-AWS-EKS-Migration/'
        />
      </div>

      {/* Your Technology Section */}
      <YourTechnology />

      {/* Their Team Section */}
      <div className='light-grey-bg p-4'>
        <CustomerReview
          name='Orlando Beiner'
          designation='CEO & Chairman of the Board of Directors - copebit AG'
          message='Their team possesses a unique talent of working with a breadth of tools, techniques, and coding languages to deliver best in class services!'
          image={constants.images.feedBackPerson1}
          showAnimation={true}
        />
      </div>
    </>
  );
};

export default XCBG;
