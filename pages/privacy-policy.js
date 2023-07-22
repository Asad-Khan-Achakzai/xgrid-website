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
const Privacypolicy = () => {
  const policies = [
    {
      title: "Access to third-party accounts",
      subtitle: "Facebook account access",
      description:
        "Permissions: Contact email; Email; Insights; Website; Work History",
    },
    {
      title: "Advertising",
      subtitle: "LinkedIn Ads",
      description: "Personal Data: Tracker; Usage Data",
    },
    {
      title: "Analytics",
      subtitle:
        "Google Analytics, Google Analytics with anonymized IP, Google Ads conversion tracking, Matomo and Facebook Ads conversion tracking (Facebook pixel)",
      description: "Personal Data: Tracker; Usage Data",
    },
    {
      title: "Contacting the User",
      subtitle: "Contact form and Mailing list or newsletter",
      description:
        "Personal Data: company name; email address; first name; last name; phone number",
    },
    {
      title: "Content performance and features testing (A/B testing)",
      subtitle: "Google Optimize",
      description: "Personal Data: Tracker; Usage Data",
    },
    {
      title: "Displaying content from external platforms",
      subtitle: "Google Fonts and Font Awesome",
      description: "Personal Data: Tracker; Usage Data",
    },
    {
      title: "Hosting and backend infrastructure",
      subtitle: "Amazon Web Services (AWS)",
      description:
        "Personal Data: various types of Data as specified in the privacy policy of the service",
    },
    {
      title: "Interaction with external social networks and platforms",
      subtitle:
        "Facebook Like button and social widgets and Twitter Tweet button and social widgets",
      description: "Personal Data: Tracker; Usage Data",
    },
    {
      title: "Interaction with live chat platforms",
      subtitle: "Drift Widget",
      description:
        "Personal Data: Data communicated while using the service; Tracker; Usage Data; various types of Data as specified in the privacy policy of the service",
    },
    {
      title: "Remarketing and behavioral targeting",
      subtitle: "LinkedIn Website Retargeting",
      description: "Personal Data: Tracker; Usage Data",
    },
    {
      title: "Tag Management",
      subtitle: "Google Tag Manager",
      description: "Personal Data: Tracker; Usage Data",
    },
    {
      title: "Traffic optimization and distribution",
      subtitle: "Cloudflare",
      description:
        "Personal Data: various types of Data as specified in the privacy policy of the service",
    },
    {
      title: "User database management",
      subtitle: "HubSpot CRM",
      description:
        "Personal Data: email address; phone number; various types of Data as specified in the privacy policy of the service",
      subtitle1: "HubSpot Lead Management",
      description1:
        "Personal Data: various types of Data as specified in the privacy policy of the service",
    },
  ];
  return (
    <>
      <div className="container-fluid terms-conditions">
        <div className="container">
          <div className="row justify-content-center py-5">
            <div className="col-lg-7 col-md-12 text-center">
              <h1 className="h1-internal text-center pb-4 f-lato-bold">
                Privacy Policy of <span className="color-purple">Xgrid</span>
              </h1>
              <h4 className="f-inter-reg">This Website collects some Personal Data from its Users.</h4>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-2 col-md-2"></div>
            <div className="col-lg-8 col-md-8 col-sm-12 col-12">
              <ul className="w-100">
                {policies.map((policy) => (
                  <>
                    <h4 className="color-dark-grey fw-500 text-justify f-inter-semi-bold">{policy.title}</h4>
                    <li>
                      {policy.subtitle1 ? (
                        <>
                          <h5 className="fw-500 text-justify f-inter-semi-bold">
                            {policy.subtitle}
                          </h5>
                          <p className="f-inter-light">{policy.description}</p>
                          <h5 className="fw-500 text-justify f-inter-semi-bold">
                            {policy.subtitle1}
                          </h5>
                          <p className="text-justify f-inter-light">{policy.description1}</p>
                        </>
                      ) : (
                        <>
                          <h5 className="fw-500 text-justify f-inter-semi-bold">
                            {policy.subtitle}
                          </h5>
                          <p className="text-justify f-inter-light">{policy.description}</p>
                        </>
                      )}
                    </li>
                  </>
                ))}
              </ul>
              <h4 className="color-dark-grey fw-500 f-inter-semi-bold">
                Information on opting out of interest-based advertising
              </h4>
              <p className="f-inter-light">
                In addition to any opt-out feature provided by any of the
                services listed in this document, Users may learn more on how to
                generally opt out of interest-based advertising within the
                dedicated section of the Cookie Policy.
              </p>
            </div>
            <div className="col-lg-2 col-md-2"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacypolicy;
