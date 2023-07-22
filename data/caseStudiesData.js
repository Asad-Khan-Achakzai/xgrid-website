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

// Constants import
import constants from '../constants/constants';

export const caseStudies = [
  {
    id: 1,
    slug: 'green-passion',
    type: 'ungated',
    cardTitle: 'From Crashing on Black Fridays to 90% Revenue',
    downloadURL:
      'https://s3.amazonaws.com/www.xgrid.co/case-studies/journey-crashing-black-fridays-90-percent-revenue-spike-21-day.pdf',
    pdfFileName: 'green-passion',
    thumbnail: {
      title: 'From Crashing on Black Fridays to 90% Revenue',
      description:
        'The Journey From Crashing on Black Fridays to 90% Revenue Spike In 21 Days Xgrid has a history of delivering a wide range of intelligent and secure cloud infrastructure, development, user interface and user experience solutions.',
      imgUrl: constants.thumbnails.caseStudy.greeenPassion,
      imgSrc: constants.images.greenThumbnail,
    },
    heroSection: {
      heroText: {
        text: 'The Journey From Crashing on Black Fridays to 90% Revenue Spike In 21 Days',
      },
      heroImg: constants.images.greenPassionHeroImg,
      maskImg: constants.images.mask,
      heroImgAlt: 'case study image',
      heroBtnText: 'Download Case Study',
    },
    cardSection: [
      { cardMainText: '10K+', cardSubText: 'Requests per minute' },
      { cardMainText: '90%', cardSubText: 'Revenue increase' },
      { cardMainText: 'Net 0%', cardSubText: 'Downtime' },
    ],
    ctaGroupSection: {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel lacus purus in vulputate mauris mauris amet nec. Sit scelerisque suspendisse sed fusce pellentesque.',
      industry: 'DevOps, AWS, eCommerce',
      project: 'Ecommerce app | DevOps',
      buttons: [
        {
          label: constants.caseStudyCTAGroup.share,
          icon: constants.icons.share,
        },
        {
          label: constants.caseStudyCTAGroup.download,
          icon: constants.icons.download,
        },
        {
          label: constants.caseStudyCTAGroup.print,
          icon: constants.icons.print,
        },
      ],
    },
    problemStatementSection: {
      title:
        'An e-commerce store with crashes, zero infrastructure control, and lax security protections',
      content: [
        'The application frequently crashed during peak Black Friday traffic hours. In addition, the website architecture had multiple single points of failure.',
        'Xgrid helped the client to make its digital store highly available to avoid critical peak hour crashes. Also, we developed a cost-effective solution involving multiple AWS-managed services to enable a robust e-commerce platform that is flexible and scalable.',
        'After the solution was implemented and production traffic routed to the new infrastructure, the application could seamlessly handle high traffic load during peak hours with considerable cost reduction, thereby tapping the previously missed revenue potential. ',
      ],
    },
    problemSolutionSection: {
      title:
        'Designing and implementing a scalable architecture with zero downtime',
      firstLine:
        'To implement a scalable and future-looking technical architecture, Xgrid used the following AWS Services:',
      img: constants.images.greenPassionProblemSolution,
      alt: 'Scalable Architecture',
      content: `
              <ul>
                <li>We migrated the application from a single instance to <b>auto-scaling with load balancing</b>. EFS was used to enable application state sharing between computes.</li>
                <li>We used <b>Route 53 to send automated requests</b> over the internet for application discovery. <b>S3 was used with CloudFront</b> for static content delivery.</li>
                <li>We added <b>multi-regional architecture</b> to provide disaster recovery. The website architecture had multiple single points of failure. We used a multi-region active/passive strategy to implement a <b>hot standby strategy for Disaster Recovery (DR)</b>.</li>
                <li>To further bulletproof the application against downtime, we used Redis for in-memory caching to enhance across-region application performance-enabled <b>CloudWatch metrics</b> and <b>AWS’s predictive scaling. This helped in providing</b> insights on traffic flow to identify and fix critical performance bottlenecks. <b>AWS Patch Manager</b> was used to auto-detect and fix critical security issues on the compute.</li>
              </ul>`,
      lastLine: 'This project was successfully delivered in 3 weeks.',
    },
    results: {
      title:
        'Outcomes achieved by embracing this highly available infrastructure',
      content: [
        {
          img: constants.images.greenPassionOutcome1,
          alt: 'High Traffic',
          text: 'Achieved high traffic load on peak hours, around <b>10k+ Requests per minute.</b>',
        },
        {
          img: constants.images.greenPassionOutcome2,
          alt: '0% Downtime',
          text: 'Successfully achieved near <b>0% net downtime.</b>',
        },
        {
          img: constants.images.greenPassionOutcome3,
          alt: 'Auto Scaling',
          text: 'Achieved high availability status of the application using auto-scaling. <b>At least 2+ healthy instances running at a time.</b>',
        },
      ],
      lineText:
        'Let’s learn about the blueprints for building such a network yourself.',
    },
    tags: ['Customer Success', 'Cloud Infrastruture'],
    bestPracticesSection: {
      title: 'Approach and the best practices to follow',
      content: [
        '<p>Customers don’t really know this, but for a <b>highly available architecture</b>, the answer is usually a <b>distributed architecture</b>. It decreases the <b>load per instance</b> and removes <b>single points of failure</b>.</p>',
        '<p>Always apply the <b>80:20 rule</b>. 20% of the calls are the ones that are always hot. 80% are usually not. Identify that 20% of the calls and then build a cache around it.</p>',
        '<p>The <b>introduction of a multi-cache layer</b> can elevate a website’s performance and user experience significantly.</p>',
      ],
      bottomImage: constants.icons.blackStar,
      containerClasses: 'round-corner-container case-study-card-best-practice',
    },
    didYouKnowSection: {
      title: 'Did You Know?',
      content:
        'This future-proof cloud infrastructure empowered our client to rapidly deploy newer products, campaigns, and services. It enabled them to manage peak traffic hours with the confidence of ~zero e-commerce outages while obviating dependency on external IT vendors for consistent scalability support.',
    },
    aboutUsSection: {
      title: 'About Us',
      content:
        'Established in 2012, Xgrid has a history of delivering a wide range of intelligent and secure cloud infrastructure, user interface and user experience solutions. Our strength lies in our team and its ability to deliver end-to-end solutions using cutting edge technologies.',
      btnLabel: 'Schedule an Assessment',
      btnClasses: 'green-btn px-5 py-3 mt-lg-3 my-sm-0 br-10',
      img: constants.images.aboutUs,
      containerClasses: 'round-corner-container darker-white-bg p-5',
    },
  },
  {
    id: 1,
    slug: 'journey-crashing-black-fridays-90-percent-revenue-spike-21-days',
    type: 'gated',
    cardTitle:
      'The Journey From Crashing on Black Fridays to 90% Revenue Spike In 21 Days',
    downloadURL:
      'https://s3.amazonaws.com/www.xgrid.co/case-studies/Green-Passion-white.pdf',
    pdfFileName: 'green-passion',
    thumbnail: {
      title: 'From Crashing on Black Fridays to 90% Revenue',
      description:
        'The Journey From Crashing on Black Fridays to 90% Revenue Spike In 21 Days Xgrid has a history of delivering a wide range of intelligent and secure cloud infrastructure, development, user interface and user experience solutions.',
      imgUrl: constants.thumbnails.caseStudy.greeenPassion,
      imgSrc: constants.images.greenThumbnail,
    },
    heroSection: {
      heroText: {
        text: "<h1 class='gated-hero-heading gated-hero-heading-sm'>The Journey From Crashing on Black Fridays to <span class='fw-bold'><span class='half_background'>90% Revenue</span> Spike In 21 Days</span></h1>",
      },
      heroSubText:
        'Outcomes achieved by embracing this highly available infrastructure',
      heroImg: constants.images.greenPassiongatedHeroImg,
      maskImg: constants.images.mask,
      heroImgAlt: 'case study image',
      heroBtnText: 'Download Case Study',
      btnClasses: 'green-btn mt-lg-3 my-sm-0 br-10 w-100',
      downloadURL:
        'https://s3.amazonaws.com/www.xgrid.co/case-studies/journey-crashing-black-fridays-90-percent-revenue-spike-21-day.pdf',
      halfMaskImg: constants.images.halfMask,
    },
    ctaGroupSection: {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel lacus purus in vulputate mauris mauris amet nec. Sit scelerisque suspendisse sed fusce pellentesque.',
      industry: 'Ecommerce',
      project: 'Ecommerce app | DevOps',
      buttons: [
        { label: 'Share', icon: constants.icons.share },
        { label: 'Download', icon: constants.icons.download },
        { label: 'Print', icon: constants.icons.print },
        { label: 'Save', icon: constants.icons.save },
      ],
    },
    results: {
      title: 'Why Us?',
      titleClasses: 'report-title half_background',
      content: [
        {
          img: constants.images.greenPassionOutcome1,
          alt: 'High Traffic',
          text: 'Achieved high traffic load on peak hours, around <b>10k+ Requests per minute.</b>',
        },
        {
          img: constants.images.greenPassionOutcome2,
          alt: '0% Downtime',
          text: 'Successfully achieved near <b>0% net downtime.</b>',
        },
        {
          img: constants.images.greenPassionOutcome3,
          alt: 'Auto Scaling',
          text: 'Achieved high availability status of the application using auto-scaling. <b>At least 2+ healthy instances running at a time.</b>',
        },
      ],
      report: [
        {
          percentage: '~93%',
          heading: 'Repeat Customers',
          text: "There's a reason why customers keep coming back to us.",
        },
        {
          percentage: '+83%',
          heading: 'Certified Employees',
          text: 'Your work is handled by top professionals with globally recognized certifications.',
        },
        {
          percentage: '4.7',
          heading: 'Clutch Rating',
          text: 'You can become one of our delighted customers. Check what others are saying.',
        },
      ],
      reportImages: [
        constants.images.reportImage1,
        constants.images.reportImage2,
        constants.images.reportImage3,
        constants.images.reportImage4,
      ],
      lineText:
        'Let’s learn about the blueprints for building such a network yourself.',
    },
    feedback: {
      title: 'See what our client is saying about us',
      content: [
        'Our partnership with the Xgrid team over the past year and a half has been extremely invaluable. Xgrid’s excellent team of DevOps engineers possess a unique talent for working with a breadth of tools, technologies, and coding languages to deliver best-in-class services. Their expertise ranges from designing and developing cloud-native applications on AWS to migration to automation to CI/CD, all using agile development methodologies.',
      ],
      clientImage: constants.images.ClientFeedback,
      containerClasses: 'case-study-card-best-practice',
      titleClasses: 'practice-title',
      descriptionClasses: 'practice-desc',
      clientOrganization: 'E-commerce Store',
      clientDesignation: 'CEO & Chairman of the Board of Directors',
    },
    didYouKnowSection: {
      title: 'Did You Know?',
      content:
        'This future-proof cloud infrastructure empowered our client to rapidly deploy newer products, campaigns, and services. It enabled them to manage peak traffic hours with the confidence of ~zero e-commerce outages while obviating dependency on external IT vendors for consistent scalability support.',
    },
    aboutUsSection: {
      title: 'About Us',
      content:
        'Established in 2012, Xgrid has a history of delivering a wide range of intelligent and secure cloud infrastructure, user interface and user experience solutions. Our strength lies in our team and its ability to deliver end-to-end solutions using cutting edge technologies.',
      btnLabel: 'Schedule an Assessment',
      btnClasses: 'green-btn px-5 py-3 mt-lg-3 my-sm-0 br-10',
      img: constants.images.aboutUs,
      containerClasses:
        'row darker-white-bg pt-lg-5 pt-md-5 case-study-card-about-us justify-content-center ms-0 me-0',
    },
    velox: {
      title:
        'A B2B SaaS Startup Grows Customer Base With Secure AWS EKS Migration',
      content:
        'A Next-Gen Headless E-commerce Provider With Frequent System Outages, Slow Response Time, and Lack of Security & Control',
      btnLabel: 'See the case study',
      btnClasses: 'green-btn px-5 py-3 mt-lg-3 my-sm-0 br-10',
      img: constants.images.velox,
      containerClasses:
        'row curve-bg-light-black p-lg-5 p-3 justify-content-center ms-0 me-0',
      hrefLink: 'B2B-SaaS-Startup-Grows-Customer-Base-Secure-AWS-EKS-Migration',
    },
  },
  {
    id: 1,
    slug: 'B2B-SaaS-Startup-Grows-Customer-Base-Secure-AWS-EKS-Migration',
    type: 'gated',
    cardTitle:
      'A B2B SaaS Startup Grows Customer Base With Secure AWS EKS Migration',
    pdfFileName: 'Sly-Velox-white',
    thumbnail: {
      title:
        'A B2B SaaS Startup Grows Customer Base With Secure AWS EKS Migration',
      description:
        'Outcomes Achieved by Implementing a Highly Scalable & Distributed Architecture',
      imgUrl: constants.thumbnails.caseStudy.velox,
      imgSrc: constants.images.veloxThumbnail,
    },
    heroSection: {
      heroText: {
        text: "<h1 class='gated-hero-heading gated-hero-heading-sm'>A B2B  <span class='fw-bold'><span class='half_background_pastel_yellow'>SaaS</span> Startup </span> Grows Customer Base With Secure <span class='fw-bold'><span class='half_background_pastel_yellow'>AWS</span> EKS </span> Migration</h1>",
        boldText: '',
        boldAndUnderlined: '',
      },
      heroSubText:
        'Outcomes Achieved by Implementing a Highly Scalable & Distributed Architecture',
      heroImg: constants.images.heroImgB2B,
      maskImg: constants.images.maskFull,
      heroImgAlt: 'case study image',
      heroBtnText: 'Download',
      btnClasses: 'pastel-yellow-btn mt-lg-3 my-sm-0 br-10 w-100',
      downloadURL:
        'https://s3.amazonaws.com/www.xgrid.co/case-studies/B2B-SaaS-Startup-Grows-Customer-Base-Secure-AWS-EKS-Migration.pdf',
      halfMaskImg: constants.images.maskFull,
    },
    tags: ['AWS Migration', 'B2B SaaS Startup', 'Cloud Native'],
    ctaGroupSection: {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel lacus purus in vulputate mauris mauris amet nec. Sit scelerisque suspendisse sed fusce pellentesque.',
      industry: 'Devops, Kubernetes, AWS',
      project: 'Ecommerce app | DevOps',
      buttons: [
        { label: 'Share', icon: constants.icons.share },
        { label: 'Download', icon: constants.icons.download },
        { label: 'Print', icon: constants.icons.print },
        { label: 'Save', icon: constants.icons.save },
      ],
    },
    results: {
      title: 'Why Us?',
      titleClasses: 'report-title half_background_pastel_yellow',
      content: [
        {
          img: constants.images.greenPassionOutcomeB2B1,
          alt: 'High Traffic',
          text: 'Highly available <b>cloud-native k8s architecture</b> that now handles high traffic load.',
        },
        {
          img: constants.images.greenPassionOutcomeB2B2,
          alt: '0% Downtime',
          text: '<b>Zero trust and highly elastic architecture</b> to achieve close to zero downtime and remove single points of failure.',
        },
        {
          img: constants.images.greenPassionOutcomeB2B3,
          alt: 'Auto Scaling',
          text: 'Improved customer delight and revenue potential with <b>performance enhancements</b> as a result of <b>quick response time and no latency.</b>',
        },
        {
          img: constants.images.greenPassionOutcomeB2B5,
          alt: 'Auto Scaling',
          text: 'Fully encrypted data plane resulting in highly secure data management with <b>reduced data exfiltration and exposure risks.</b>',
        },
        {
          img: constants.images.greenPassionOutcomeB2B4,
          alt: 'Auto Scaling',
          text: 'Robust monitoring and alerts leading to <b>improved operational efficiency.</b>',
        },
      ],
      report: [
        {
          percentage: '~93%',
          heading: 'Repeat Customers',
          text: "There's a reason why customers keep coming back to us.",
        },
        {
          percentage: '+83%',
          heading: 'Certified Employees',
          text: 'Your work is handled by top professionals with globally recognized certifications.',
        },
        {
          percentage: '4.7',
          heading: 'Clutch Rating',
          text: 'You can become one of our delighted customers. Check what others are saying.',
        },
      ],
      reportImages: [
        constants.images.reportImage1,
        constants.images.reportImage2,
        constants.images.reportImage3,
        constants.images.reportImage4,
      ],
      lineText:
        'Let’s learn about the blueprints for building such a network yourself.',
    },
    feedback: {
      title: 'See what our client is saying about us',
      content: [
        'Our partnership with the Xgrid team over the past year and a half has been extremely invaluable. Xgrid’s excellent team of DevOps engineers possess a unique talent for working with a breadth of tools, technologies, and coding languages to deliver best-in-class services. Their expertise ranges from designing and developing cloud-native applications on AWS to migration to automation to CI/CD, all using agile development methodologies.',
      ],
      clientImage: constants.images.ClientFeedback,
      containerClasses: 'case-study-card-best-practice-yellow-bg',
      titleClasses: 'practice-title',
      descriptionClasses: 'practice-desc',
      clientOrganization: 'E-commerce Store',
      clientDesignation: 'CEO & Chairman of the Board of Directors',
    },
    didYouKnowSection: {
      title: 'Did You Know?',
      content:
        'This smartly orchestrated, future-proof architecture empowered the customer with independence to avoid and resolve downtime and scalability issues internally with minimal to zero manual interventions.',
    },
    aboutUsSection: {
      title: 'About Us',
      content:
        'Established in 2012, Xgrid has a history of delivering a wide range of intelligent and secure cloud infrastructure, user interface and user experience solutions. Our strength lies in our team and its ability to deliver end-to-end solutions using cutting edge technologies.',
      btnLabel: 'Schedule an Assessment',
      btnClasses: 'pastel-yellow-btn px-5 py-3 mt-lg-3 my-sm-0 br-10',
      img: constants.images.aboutUsB2B,
      containerClasses:
        'row darker-white-bg pt-lg-5 pt-md-5 case-study-card-about-us justify-content-center ms-0 me-0',
    },
    velox: {
      title:
        'The Journey From Crashing on Black Fridays to 90% Revenue Spike In 21 Days',
      content:
        'An e-commerce store with crashes, zero infrastructure control, and lax security protections',
      btnLabel: 'See the case study',
      btnClasses: 'pastel-yellow-btn px-5 py-3 mt-lg-3 my-sm-0 br-10',
      img: constants.images.veloxB2B,
      containerClasses:
        'row p-lg-5 p-3 justify-content-center ms-0 me-0 curve-bg-yellow',
      hrefLink:
        'journey-crashing-black-fridays-90-percent-revenue-spike-21-days',
    },
  },
  // TODO: Will remove the unwanted fields
  {
    id: 6,
    slug: 'Boost-Your-Customer-Satisfaction-with-Omnichannel-Case-Routing',
    type: 'gated',
    cardTitle: 'Boost Your Customer Satisfaction with Omnichannel Case Routing',
    thumbnail: {
      imgUrl: constants.thumbnails.caseStudy.omniChannel,
      imgSrc: constants.images.omniChannel,
    },
    caseStudyLink:
      'https://marketing.xgrid.co/customer-support-omnichannel-case-routing/',
    ctaGroupSection: {
      industry: 'Customer Success, Marketing Automation',
    },
    didYouKnowSection: {
      content:
        'Salesforce Omni-Channel routing helped customer service agents deal with customers via any channel and quickly switch among channels, effectively boosting overall productivity. The quote of minimum cases to be resolved per day per rep was reached by 100%. This routing also prioritized the importance of queries, enabling important work items to be routed to agents in that queue immediately.',
    },
    heroSection: {
      heroText: {
        text: 'Boost Your Customer Satisfaction with Omnichannel Case Routing',
      },
    },
    tags: [
      'B2B SaaS Marketing',
      'Customer Service Efficiency',
      'Omnichannel Case Routing',
      'Salesforce',
    ],
    results: {
      title: '',
      titleClasses: '',
      content: [],
      report: [
        {
          percentage: '',
          heading: '',
          text: '',
        },
        {
          percentage: '',
          heading: '',
          text: '',
        },
        {
          percentage: '',
          heading: '',
          text: '',
        },
      ],
      reportImages: [],
      lineText: '',
    },
    feedback: {
      title: '',
      content: [],
      clientImage: '',
      containerClasses: '',
      titleClasses: '',
      descriptionClasses: '',
      clientOrganization: '',
      clientDesignation: '',
    },
    aboutUsSection: {
      title: '',
      content: '',
      btnLabel: '',
      btnClasses: '',
      img: '',
      containerClasses: '',
    },
    velox: {
      title: '',
      content: '',
      btnLabel: '',
      btnClasses: '',
      img: '',
      containerClasses: '',
      hrefLink: '',
    },
  },
  {
    id: 7,
    slug: 'Increase-Your-Revenue-Multifold-with-Marketo-Revenue-Cycle-Model',
    type: 'gated',
    cardTitle:
      "Increase Your Revenue Multifold with Marketo's Revenue Cycle Model",
    thumbnail: {
      imgUrl: constants.thumbnails.caseStudy.RCM,
      imgSrc: constants.images.rcm,
    },
    caseStudyLink:
      'https://marketing.xgrid.co/increase-lead-funnel-revenue-growth-with-marketo-revenue-cycle-model/',
    ctaGroupSection: {
      industry: 'Lead Generation, Digital Marketing, Marketing Automation',
    },
    didYouKnowSection: {
      content:
        "By implementing Marketo's Revenue Cycle Model, our client was able to streamline their lead funnel, unlocking the full potential",
    },
    heroSection: {
      heroText: {
        text: "Increase Your Revenue Multifold with Marketo's Revenue Cycle Model",
      },
    },
    tags: ['B2B SaaS Marketing', 'Revenue Cycle Model'],
    results: {
      title: '',
      titleClasses: '',
      content: [],
      report: [
        {
          percentage: '',
          heading: '',
          text: '',
        },
        {
          percentage: '',
          heading: '',
          text: '',
        },
        {
          percentage: '',
          heading: '',
          text: '',
        },
      ],
      reportImages: [],
      lineText: '',
    },
    feedback: {
      title: '',
      content: [],
      clientImage: '',
      containerClasses: '',
      titleClasses: '',
      descriptionClasses: '',
      clientOrganization: '',
      clientDesignation: '',
    },
    aboutUsSection: {
      title: '',
      content: '',
      btnLabel: '',
      btnClasses: '',
      img: '',
      containerClasses: '',
    },
    velox: {
      title: '',
      content: '',
      btnLabel: '',
      btnClasses: '',
      img: '',
      containerClasses: '',
      hrefLink: '',
    },
  },
  {
    id: 8,
    slug: 'HubSpot-to-Marketo-Migration-42%-Boost-in-Lead-to-Customer-Conversion',
    type: 'gated',
    cardTitle:
      'HubSpot to Marketo Migration = 42% Boost in Lead-to-Customer Conversion',
    thumbnail: {
      imgUrl: constants.thumbnails.caseStudy.hubSpot,
      imgSrc: constants.images.hubSpot,
    },
    caseStudyLink:
      'https://marketing.xgrid.co/boost-conversions-hubspot-to-marketo-migration/',
    ctaGroupSection: {
      industry: 'eCommerce, Digital Marketing, Marketing Automation, MarTech',
    },
    didYouKnowSection: {
      content:
        'This migration brought many technical benefits, including user access to more team members, which ignited collaboration and innovation within the marketing team. The robust automation capabilities allowed for faster decision-making and streamlined marketing processes, unlocking new possibilities for the client. Our marketing automation services also resulted in measurable results, with increased visibility and attribution reporting. The team captured historical data to track the buyer’s journey carefully, considering potential roadblocks, and implemented data standardization for effortless sorting. They fine-tuned smart campaigns, automated setup, and notified the Sales owners of Marketing qualified leads resulting in a 50% increase in ROI.',
    },
    heroSection: {
      heroText: {
        text: 'HubSpot to Marketo Migration = 42% Boost in Lead-to-Customer Conversion',
      },
    },
    tags: [
      'B2B SaaS Marketing',
      'Digital Marketing Strategy',
      'Digital Transformation',
      'Data Migration',
      'HubSpot to Marketo Migration',
    ],
    results: {
      title: '',
      titleClasses: '',
      content: [],
      report: [
        {
          percentage: '',
          heading: '',
          text: '',
        },
        {
          percentage: '',
          heading: '',
          text: '',
        },
        {
          percentage: '',
          heading: '',
          text: '',
        },
      ],
      reportImages: [],
      lineText: '',
    },
    feedback: {
      title: '',
      content: [],
      clientImage: '',
      containerClasses: '',
      titleClasses: '',
      descriptionClasses: '',
      clientOrganization: '',
      clientDesignation: '',
    },
    aboutUsSection: {
      title: '',
      content: '',
      btnLabel: '',
      btnClasses: '',
      img: '',
      containerClasses: '',
    },
    velox: {
      title: '',
      content: '',
      btnLabel: '',
      btnClasses: '',
      img: '',
      containerClasses: '',
      hrefLink: '',
    },
  },
  {
    id: 9,
    slug: 'maximizing-marketing-efficiency-through-platform-migration',
    type: 'gated',
    isWhitepaper: true,
    cardTitle:
      'From HubSpot to Marketo: A Step-by-Step Guide to Successful Migration',
    thumbnail: {
      imgSrc: constants.images.maximizingMarketing,
    },
    caseStudyLink:
      'https://marketing.xgrid.co/maximizing-marketing-efficiency-through-platform-migration/',
    ctaGroupSection: {
      industry: 'Ecommerce',
    },
    didYouKnowSection: {
      content:
        'There can be several reasons why organizations might consider migrating from HubSpot to Marketo and Salesforce. Some of these reasons include the following:',
    },
    heroSection: {
      heroText: {
        text: 'From HubSpot to Marketo: A Step-by-Step Guide to Successful Migration',
      },
    },
    results: {
      title: '',
      titleClasses: '',
      content: [],
      report: [
        {
          percentage: '',
          heading: '',
          text: '',
        },
        {
          percentage: '',
          heading: '',
          text: '',
        },
        {
          percentage: '',
          heading: '',
          text: '',
        },
      ],
      reportImages: [],
      lineText: '',
    },
    feedback: {
      title: '',
      content: [],
      clientImage: '',
      containerClasses: '',
      titleClasses: '',
      descriptionClasses: '',
      clientOrganization: '',
      clientDesignation: '',
    },
    aboutUsSection: {
      title: '',
      content: '',
      btnLabel: '',
      btnClasses: '',
      img: '',
      containerClasses: '',
    },
    velox: {
      title: '',
      content: '',
      btnLabel: '',
      btnClasses: '',
      img: '',
      containerClasses: '',
      hrefLink: '',
    },
  },
  {
    id: 10,
    slug: 'Full_Cloud_Resource_Attribution_Leads_to_35%_Cost_Optimization_for_an_E-commerce_AWS_Serverless_Architecture',
    type: 'gated',
    cardTitle:
      'Full Cloud Resource Attribution Leads to 35% Cost Optimization for an E-commerce AWS Serverless Architecture',
    thumbnail: {
      imgSrc: constants.images.resourceAttribution,
    },
    caseStudyLink:
      'https://marketing.xgrid.co/cost-optimization-through-full-cloud-resource-attribution/',
    ctaGroupSection: {
      industry: 'DevOps',
    },
    didYouKnowSection: {
      content:
        'Our client achieved significant cost optimization while maintaining the necessary properties of the infrastructure by implementing policy compliance and event-based automated infrastructure capacity and scaling. Xgrid’s approach helped in better cost visualization and control, better monitoring, and capacity planning. We achieved fully tagged cloud resources and continuously identified key cost control areas. Our approach can be replicated by other mid to large-size organizations running their IT businesses based on cloud native or cloud agnostic Serverless Architectures.',
    },
    heroSection: {
      heroText: {
        text: 'Full Cloud Resource Attribution Leads to 35% Cost Optimization for an E-commerce AWS Serverless Architecture',
      },
    },
    tags: [
      'Cloud Costs',
      'Cloud Modernization',
      'Cloud Architecture',
      'DevOps consulting',
      'AWS',
      'serverless',
    ],
    results: {
      title: '',
      titleClasses: '',
      content: [],
      report: [
        {
          percentage: '',
          heading: '',
          text: '',
        },
        {
          percentage: '',
          heading: '',
          text: '',
        },
        {
          percentage: '',
          heading: '',
          text: '',
        },
      ],
      reportImages: [],
      lineText: '',
    },
    feedback: {
      title: '',
      content: [],
      clientImage: '',
      containerClasses: '',
      titleClasses: '',
      descriptionClasses: '',
      clientOrganization: '',
      clientDesignation: '',
    },
    aboutUsSection: {
      title: '',
      content: '',
      btnLabel: '',
      btnClasses: '',
      img: '',
      containerClasses: '',
    },
    velox: {
      title: '',
      content: '',
      btnLabel: '',
      btnClasses: '',
      img: '',
      containerClasses: '',
      hrefLink: '',
    },
  },
  {
    id: 12,
    slug: 'How-a-SaaS-Startup-Increased-Revenue-by-Streamlining-Configure-Price-&-Quote-Process',
    type: 'gated',
    cardTitle:
      'How a SaaS Startup Increased Revenue by Streamlining Configure, Price & Quote Process',
    thumbnail: {
      imgSrc: constants.images.salesForceThumbnail,
    },
    caseStudyLink:
      'https://marketing.xgrid.co/increase-revenue-streamlining-configure-price-quote-process/',
    ctaGroupSection: {
      industry: 'Ecommerce, Marketing Automation, Salesforce Automation',
    },
    didYouKnowSection: {
      content:
        'Our client’s sales cycle was a lengthy process prone to errors because of multiple manual interventions. Customer service was not optimal due to the delayed contract generation process.',
    },
    heroSection: {
      heroText: {
        text: 'How a SaaS Startup Increased Revenue by Streamlining Configure, Price & Quote Process',
      },
    },
    tags: [
      'Configure',
      'Price',
      'Quote (CPQ)',
      'Sales Cycle Optimization',
      'Customer Success',
    ],
    results: {
      title: '',
      titleClasses: '',
      content: [],
      report: [
        {
          percentage: '',
          heading: '',
          text: '',
        },
        {
          percentage: '',
          heading: '',
          text: '',
        },
        {
          percentage: '',
          heading: '',
          text: '',
        },
      ],
      reportImages: [],
      lineText: '',
    },
    feedback: {
      title: '',
      content: [],
      clientImage: '',
      containerClasses: '',
      titleClasses: '',
      descriptionClasses: '',
      clientOrganization: '',
      clientDesignation: '',
    },
    aboutUsSection: {
      title: '',
      content: '',
      btnLabel: '',
      btnClasses: '',
      img: '',
      containerClasses: '',
    },
    velox: {
      title: '',
      content: '',
      btnLabel: '',
      btnClasses: '',
      img: '',
      containerClasses: '',
      hrefLink: '',
    },
  },
  {
    id: 13,
    slug: 'A-SaaS-Startup-Skyrockets-Win-Rate-by-38%-with-a-Fully-Automated-Marketing-&-Sales-Funnel',
    type: 'gated',
    cardTitle:
      'A SaaS Startup Skyrockets Win Rate by 38% with a Fully-Automated Marketing & Sales Funnel',
    thumbnail: {
      imgSrc: constants.images.alkiraThumbnail,
    },
    caseStudyLink:
      'https://marketing.xgrid.co/saas-win-rate-38-fully-automated-marketing-sales-funnel/',
    ctaGroupSection: {
      industry: 'Marketing Automation',
    },
    didYouKnowSection: {
      content:
        'For our client, creating marketing campaigns took longer than the average industry benchmarks in Marketo. Our team engineered customizable program templates for quick plug-and-play, reducing the campaign launch time with minor modifications and improving reach and marketing KPIs.',
    },
    heroSection: {
      heroText: {
        text: 'A SaaS Startup Skyrockets Win Rate by 38% with a Fully-Automated Marketing & Sales Funnel',
      },
    },
    tags: [
      'Martech',
      'Sales & marketing automation tools',
      'Digital marketing',
      'Marketing automation consulting',
      'Marketing automation implementation',
    ],
    results: {
      title: '',
      titleClasses: '',
      content: [],
      report: [
        {
          percentage: '',
          heading: '',
          text: '',
        },
        {
          percentage: '',
          heading: '',
          text: '',
        },
        {
          percentage: '',
          heading: '',
          text: '',
        },
      ],
      reportImages: [],
      lineText: '',
    },
    feedback: {
      title: '',
      content: [],
      clientImage: '',
      containerClasses: '',
      titleClasses: '',
      descriptionClasses: '',
      clientOrganization: '',
      clientDesignation: '',
    },
    aboutUsSection: {
      title: '',
      content: '',
      btnLabel: '',
      btnClasses: '',
      img: '',
      containerClasses: '',
    },
    velox: {
      title: '',
      content: '',
      btnLabel: '',
      btnClasses: '',
      img: '',
      containerClasses: '',
      hrefLink: '',
    },
  },
  {
    id: 14,
    slug: 'A-SaaS-Startup-Skyrockets-Win-Rate-by-38%-with-a-Fully-Automated-Marketing-&-Sales-Funnel',
    type: 'gated',
    cardTitle:
      "Unleashing Alkira's brand development strategy with a powerful kickstart",
    thumbnail: {
      imgSrc: constants.images.alkiraThumbnailImage,
    },
    caseStudyLink: constants.pageLinks.alkira.path,
    ctaGroupSection: {
      industry: 'Digital Marketing',
    },
    didYouKnowSection: {
      content:
        'Building a website from scratch for a new startup comes with its own set of challenges. It requires designing an exceptional customer journey throughout the website that converts visitors into lead',
    },
    heroSection: {
      heroText: {
        text: "Unleashing Alkira's brand development strategy with a powerful kickstart",
      },
    },
    tags: ['SEO', 'Email Marketing', 'Marketing Automation', 'PPC/SEM'],
    results: {
      title: '',
      titleClasses: '',
      content: [],
      report: [
        {
          percentage: '',
          heading: '',
          text: '',
        },
        {
          percentage: '',
          heading: '',
          text: '',
        },
        {
          percentage: '',
          heading: '',
          text: '',
        },
      ],
      reportImages: [],
      lineText: '',
    },
    feedback: {
      title: '',
      content: [],
      clientImage: '',
      containerClasses: '',
      titleClasses: '',
      descriptionClasses: '',
      clientOrganization: '',
      clientDesignation: '',
    },
    aboutUsSection: {
      title: '',
      content: '',
      btnLabel: '',
      btnClasses: '',
      img: '',
      containerClasses: '',
    },
    velox: {
      title: '',
      content: '',
      btnLabel: '',
      btnClasses: '',
      img: '',
      containerClasses: '',
      hrefLink: '',
    },
  },
  {
    id: 15,
    slug: 'Creating-a-Sustainable-Digital-Eco-System-with-IOT-Equipment-Monitoring',
    type: 'gated',
    cardTitle:
      'Creating a Sustainable Digital Eco-System with IOT Equipment Monitoring',
    thumbnail: {
      imgSrc: constants.images.vectraThumb,
    },
    caseStudyLink:
      'https://marketing.xgrid.co/enhancing-business-operations-with-iot-equipment-monitoring-solution/',
    ctaGroupSection: {
      industry: 'Ecommerce, IoT, Data Engineering, DevOps',
    },
    didYouKnowSection: {
      content:
        'The outcomes of the project were significant. With the new solution in place, end users were able to access real-time data and receive notifications when equipment readings fell outside acceptable levels. This allowed for timely action to be taken',
    },
    heroSection: {
      heroText: {
        text: 'Creating a Sustainable Digital Eco-System with IOT Equipment Monitoring',
      },
    },
    tags: [
      'IoT Solutions',
      'IOT Equipment Monitoring',
      'Data Visualization',
      'Machine Learning',
      'Cloud Computing Infrastructure',
      'AWS',
    ],
    results: {
      title: '',
      titleClasses: '',
      content: [],
      report: [
        {
          percentage: '',
          heading: '',
          text: '',
        },
        {
          percentage: '',
          heading: '',
          text: '',
        },
        {
          percentage: '',
          heading: '',
          text: '',
        },
      ],
      reportImages: [],
      lineText: '',
    },
    feedback: {
      title: '',
      content: [],
      clientImage: '',
      containerClasses: '',
      titleClasses: '',
      descriptionClasses: '',
      clientOrganization: '',
      clientDesignation: '',
    },
    aboutUsSection: {
      title: '',
      content: '',
      btnLabel: '',
      btnClasses: '',
      img: '',
      containerClasses: '',
    },
    velox: {
      title: '',
      content: '',
      btnLabel: '',
      btnClasses: '',
      img: '',
      containerClasses: '',
      hrefLink: '',
    },
  },
  {
    id: 16,
    slug: 'IoT:-Monolets-Achieves-Near-Real-Time-Item-Tracking',
    type: 'gated',
    cardTitle: 'IoT: Monolets Achieves Near Real-Time Item Tracking',
    thumbnail: {
      imgSrc: constants.images.monoletsThumbnail,
    },
    caseStudyLink:
      'https://marketing.xgrid.co/iot-near-real-time-item-tracking/',
    ctaGroupSection: {
      industry: 'Data Engineering, DevOps',
    },
    didYouKnowSection: {
      content:
        'Supply Chain systems are inherently complex as they involve multiple stages, from manufacturing to transportation to delivery at the final destination. The ability to track items throughout the Supply Chain is crucial for ensuring timely delivery and, at times, maintaining the viability and quality of goods (e.g. perishables).',
    },
    heroSection: {
      heroText: {
        text: 'IoT: Monolets Achieves Near Real-Time Item Tracking',
      },
    },
    tags: [
      'IOT',
      'Cloud Costs',
      'Cloud Modernization',
      'Cloud Architecture',
      'DevOps implementation consulting',
      'AWS',
      'Kubernetes',
    ],
    results: {
      title: '',
      titleClasses: '',
      content: [],
      report: [
        {
          percentage: '',
          heading: '',
          text: '',
        },
        {
          percentage: '',
          heading: '',
          text: '',
        },
        {
          percentage: '',
          heading: '',
          text: '',
        },
      ],
      reportImages: [],
      lineText: '',
    },
    feedback: {
      title: '',
      content: [],
      clientImage: '',
      containerClasses: '',
      titleClasses: '',
      descriptionClasses: '',
      clientOrganization: '',
      clientDesignation: '',
    },
    aboutUsSection: {
      title: '',
      content: '',
      btnLabel: '',
      btnClasses: '',
      img: '',
      containerClasses: '',
    },
    velox: {
      title: '',
      content: '',
      btnLabel: '',
      btnClasses: '',
      img: '',
      containerClasses: '',
      hrefLink: '',
    },
  },
  {
    id: 17,
    slug: 'Driving-Business-Growth,-Elevating-Brand Reach,-and-Consolidating-Identity',
    type: 'gated',
    cardTitle:
      'Driving Business Growth, Elevating Brand Reach, and Consolidating Identity',
    thumbnail: {
      imgSrc: constants.images.agencyAngle,
    },
    caseStudyLink:
      'https://marketing.xgrid.co/driving-business-growth-elevating-brand-reach-and-consolidating-identity/',
    ctaGroupSection: {
      industry: 'Digital Marketing',
    },
    didYouKnowSection: {
      content:
        'The manager took his time to understand the agency’s business. goals, challenges, and pain points to provide targeted, relevant recommendations and solutions. Regular health checks were scheduled to monitor our client’s satisfaction.',
    },
    heroSection: {
      heroText: {
        text: 'Driving Business Growth, Elevating Brand Reach, and Consolidating Identity',
      },
    },
    tags: ['SEO', 'Email Marketing', 'Marketing Automation', 'PPC/SEM'],
    results: {
      title: '',
      titleClasses: '',
      content: [],
      report: [
        {
          percentage: '',
          heading: '',
          text: '',
        },
        {
          percentage: '',
          heading: '',
          text: '',
        },
        {
          percentage: '',
          heading: '',
          text: '',
        },
      ],
      reportImages: [],
      lineText: '',
    },
    feedback: {
      title: '',
      content: [],
      clientImage: '',
      containerClasses: '',
      titleClasses: '',
      descriptionClasses: '',
      clientOrganization: '',
      clientDesignation: '',
    },
    aboutUsSection: {
      title: '',
      content: '',
      btnLabel: '',
      btnClasses: '',
      img: '',
      containerClasses: '',
    },
    velox: {
      title: '',
      content: '',
      btnLabel: '',
      btnClasses: '',
      img: '',
      containerClasses: '',
      hrefLink: '',
    },
  },
];
