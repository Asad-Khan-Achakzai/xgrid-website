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
const Informationsecuritypolicy = () => {
  const security = [
    {
      subtitle:
        "Business requirements for the availability of information and systems are met.",
    },
    {
      subtitle:
        "Confidentiality, Integrity, and Availability (CIA) of the information is maintained throughout the process flow.",
    },
    {
      subtitle:
        "All legal, regulatory, contractual, and business requirements are met.",
    },
    {
      subtitle:
        "All corporate assets (tangible/intangible) are located in a physically and logically secure environment.",
    },
    {
      subtitle:
        "Risks to all corporate assets (tangible/intangible) are assessed and appropriate contingency and risk mitigation plans are defined against all risks.",
    },
    {
      subtitle:
        "Human resources are provided with a conducive work environment, free from safety hazards.",
    },
    {
      subtitle: "All personnel are trained on information security procedures.",
    },
    {
      subtitle:
        "Physical, Logical, and Remote access to all the corporate assets (tangible/intangible), information and physical locations is monitored and controlled.",
    },
    {
      subtitle:
        "Business continuity plans are established, maintained, and tested periodically and updated as needed.",
    },
  ];
  return (
    <>
      <div className="container-fluid terms-conditions">
        <div className="container">
          <div className="row justify-content-center py-5">
            <div className="col-lg-7 col-md-12 text-center">
              <h1 className="h1-internal text-center pb-4 f-lato-bold">
                Information Security Policy
              </h1>
            </div>
          </div>
          <div className="row f-inter-reg">
            <div className="col-lg-2 col-md-2"></div>
            <div className="col-lg-8 col-md-8 col-sm-12 col-12">
              <h4 className="color-dark-grey fw-500 mb-5">
                It is the policy of Xgrid to create, maintain, and continually
                improve the Information Security Management System and to adhere
                to Information Security Management System practices in
                compliance with best practices required for software development
                and information security needs of the customer.
              </h4>

              <h4 className="color-dark-grey fw-500 mb-5">
                Xgrid works within the framework of the Local Government while
                fulfilling the contractual obligation to the client. This is to
                ensure the protection of its information assets from all threats
                – internal or external, deliberate or accidental, and natural
                disasters.
              </h4>
              <h4 className="color-dark-grey fw-500 mb-3">
                Furthermore, to achieve this objective, Xgrid will ensure the
                following:
              </h4>

              <ul className="w-100">
                {security.map((secure) => (
                  <>
                    <h4 className="color-dark-grey fw-500">{secure.title}</h4>
                    <li>
                      <>
                        <h5 className="fw-500 f-inter-reg">
                          {secure.subtitle}
                        </h5>
                      </>
                    </li>
                  </>
                ))}
              </ul>
            </div>
            <div className="col-lg-2 col-md-2"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Informationsecuritypolicy;
