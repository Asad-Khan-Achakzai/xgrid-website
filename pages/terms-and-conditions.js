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
const TermsAndConditions = () => {

  const definitions = [
    {
      title: "This Website (or this Application)",
      description: "The property that enables the provision of the Service."
    },
    {
      title: "Agreement",
      description: "Any legally binding or contractual relationship between the Owner and the User, governed by these Terms.."
    },
    {
      title: "Business User",
      description: "Any User that does not qualify as a Consumer."
    },
    {
      title: "European (or Europe)",
      description: "Applies where a User is physically present or has their registered offices within the EU, regardless of nationality."
    },
    {
      title: "Owner (or We)",
      description: "Indicates the natural person(s) or legal entity that provides this Website and/or the Service to Users."
    },
    {
      title: "Service",
      description: "The service provided by this Website as described in these Terms and on this Website."
    },
    {
      title: "Terms",
      description: "All provisions applicable to the use of this Website and/or the Service as described in this document, including any other related documents or agreements, and as updated from time to time."
    },
    {
      title: "User (or You)",
      description: "Indicates any natural person or legal entity using this Website."
    },
    {
      title: "Consumer",
      description: "Any User qualifying as a natural person who accesses goods or services for personal use, or more generally, acts for purposes outside their trade, business, craft or profession."
    },
  ]

  return (
    <>
      <div className="container-fluid terms-conditions">
        <div className="container">
          <div className="row justify-content-center py-5">
            <div className="col-lg-12 col-md-12 text-center">
              <h1 className="h1-internal text-center pb-4 f-lato-bold">
                Terms & Conditions of{" "}
                <span className="color-purple">Xgrid</span>
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-2 col-md-2"></div>
            <div className="col-lg-8 col-md-8 col-sm-12 col-12">
              <div className="w-100">
                <p className="f-inter-light">These Terms govern</p>
                <ul>
                  <li className="f-inter-reg">the use of this Website, and,</li>
                  <li className="f-inter-reg">
                    any other related Agreement or legal relationship with the
                    Owner
                  </li>
                </ul>
                <p className="f-inter-light">
                  in a legally binding way. Capitalized words are defined below.
                </p>
                <br />
                {/* Definitions and legal references button */}
                <div className="dropdown d-grid dropdown-definition-list mb-5">
                  <button
                    className="btn btn-secondary
                    dropdown-toggle f-inter-reg"
                    type="button"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Definitions and legal references
                  </button>

                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    {
                      definitions.map((definition) => (
                        <li key={definition.title}>
                          <h6 className="f-inter-semi-bold">{definition.title}</h6>
                          <p className="text-justify f-inter-light">{definition.description}</p>
                        </li>
                    ))}
                  </ul>
                </div>
                <p className="f-inter-light">The User must read this document carefully.</p>
                <div className="seperator-global mb-3"></div>
                <p className="f-inter-light">This Website is provided by:</p>
                <p className="f-inter-light">
                  Xgrid Inc., Plug and Play Tech Center, 440 N Wolfe Rd,
                  Sunnyvale, CA 94085
                </p>
                <p className="mb-5 f-inter-light">
                  <span className="fw-500 f-inter-semi-bold">Owner contact email: </span>
                  info@xgrid.co
                </p>

                <h4 className="color-dark-grey fw-500 text-justify f-inter-semi-bold">
                  What the User should know at a glance
                </h4>
                <ul>
                  <li className="f-inter-light">
                    Please note that some provisions in these Terms may only
                    apply to certain categories of Users. In particular, certain
                    provisions may only apply to Consumers or to those Users
                    that do not qualify as Consumers. Such limitations are
                    always explicitly mentioned within each affected clause. In
                    the absence of any such mention, clauses apply to all Users.
                  </li>
                </ul>
                <div className="row my-3 justify-content-lg-end justify-content-md-center pe-3">
                  <div className="seperator-global"></div>
                </div>
                {/*TERMS OF USE */}
                <h3 className="color-purple fw-500 text-justify mt-5 f-inter-semi-bold">
                  Terms of Use
                </h3>
                <p className="text-justify f-inter-light">
                  Unless otherwise specified, the terms of use detailed in this
                  section apply generally when using this Website.
                </p>
                <p className="text-justify f-inter-light">
                  Single or additional conditions of use or access may apply in
                  specific scenarios and in such cases are additionally
                  indicated within this document.
                </p>
                <p className="text-justify f-inter-light">
                  By using this Website, Users confirm to meet the following
                  requirements:
                </p>
                <ul>
                  <li className="f-inter-light">
                    There are no restrictions for Users in terms of being
                    Consumers or Business Users
                  </li>
                </ul>
                <h4 className="color-dark-grey fw-500 text-justify f-inter-semi-bold">
                  Content on this Website
                </h4>
                <p className="text-justify f-inter-light">
                  Unless where otherwise specified or clearly recognizable, all
                  content available on this Website is owned or provided by the
                  Owner or its licensors. The Owner undertakes its utmost effort
                  to ensure that the content provided on this Website infringes
                  no applicable legal provisions or third-party rights. However,
                  it may not always be possible to achieve such a result. In
                  such cases, without prejudice to any legal prerogatives of
                  Users to enforce their rights, Users are kindly asked to
                  preferably report related complaints using the contact details
                  provided in this document.
                </p>
                <h5 className="fw-500 text-justify f-inter-semi-bold">
                  Rights regarding content on this Website - All rights reserved
                </h5>
                <p className="text-justify f-inter-light">
                  The Owner holds and reserves all intellectual property rights
                  for any such content. Users may not therefore use such content
                  in any way that is not necessary or implicit in the proper use
                  of the Service. In particular, but without limitation, Users
                  may not copy, download, share (beyond the limits set forth
                  below), modify, translate, transform, publish, transmit, sell,
                  sublicense, edit, transfer/assign to third parties or create
                  derivative works from the content available on this Website,
                  nor allow any third party to do so through the User or their
                  device, even without the User's knowledge. Where explicitly
                  stated on this Website, the User may download, copy and/or
                  share some content available through this Website for its sole
                  personal and non-commercial use and provided that the
                  copyright attributions and all the other attributions
                  requested by the Owner are correctly implemented. Any
                  applicable statutory limitation or exception to copyright
                  shall stay unaffected.
                </p>
              </div>
              <h4 className="color-dark-grey fw-500 text-justify f-inter-semi-bold">
                Access to external resources
              </h4>
              <p className="text-justify f-inter-light">
                Through this Website Users may have access to external resources
                provided by third parties. Users acknowledge and accept that the
                Owner has no control over such resources and is therefore not
                responsible for their content and availability. Conditions
                applicable to any resources provided by third parties, including
                those applicable to any possible grant of rights in content,
                result from each such third parties’ terms and conditions or, in
                the absence of those, applicable statutory law.
              </p>
              <h4 className="color-dark-grey fw-500 text-justify f-inter-semi-bold">
                Acceptable use
              </h4>
              <p className="text-justify f-inter-light">
                This Website and the Service may only be used within the scope
                of what they are provided for, under these Terms and applicable
                law. Users are solely responsible for making sure that their use
                of this Website and/or the Service violates no applicable law,
                regulations or third-party rights. Therefore, the Owner reserves
                the right to take any appropriate measure to protect its
                legitimate interests including by denying Users access to this
                Website or the Service, terminating contracts, reporting any
                misconduct performed through this Website or the Service to the
                competent authorities – such as judicial or administrative
                authorities - whenever Users engage or are suspected to engage
                in any of the following activities:
              </p>
              <ul className="f-inter-light">
                <li>violate laws, regulations and/or these Terms</li>
                <li>infringe any third-party rights</li>
                <li>considerably impair the Owner’s legitimate interests</li>
                <li>offend the Owner or any third party.</li>
              </ul>

              {/*Liability and indemnification*/}
              <h3 className="color-purple fw-500 text-justify f-inter-semi-bold">
                Liability and indemnification
              </h3>
              <h4 className="color-dark-grey fw-500 text-justify f-inter-semi-bold">
                Australian Users
              </h4>
              <h5 className="fw-500 text-justify f-inter-semi-bold">
                Limitation of liability
              </h5>
              <p className="text-justify f-inter-light">
                Nothing in these Terms excludes, restricts or modifies any
                guarantee, condition, warranty, right or remedy which the User
                may have under the Competition and Consumer Act 2010 (Cth) or
                any similar State and Territory legislation and which cannot be
                excluded, restricted or modified (non-excludable right). To the
                fullest extent permitted by law, our liability to the User,
                including liability for a breach of a non-excludable right and
                liability which is not otherwise excluded under these Terms of
                Use, is limited, at the Owner’s sole discretion, to the
                re-performance of the services or the payment of the cost of
                having the services supplied again.
              </p>
              <h4 className="color-dark-grey fw-500 text-justify f-inter-semi-bold">US Users</h4>
              <h5 className="fw-500 text-justify f-inter-semi-bold">
                Disclaimer of Warranties
              </h5>
              <p className="text-justify f-inter-light">
                This Website is provided strictly on an “as is” and “as
                available” basis. Use of the Service is at Users’ own risk. To
                the maximum extent permitted by applicable law, the Owner
                expressly disclaims all conditions, representations, and
                warranties — whether express, implied, statutory or otherwise,
                including, but not limited to, any implied warranty of
                merchantability, fitness for a particular purpose, or
                non-infringement of third-party rights. No advice or
                information, whether oral or written, obtained by user from
                owner or through the Service will create any warranty not
                expressly stated herein. Without limiting the foregoing, the
                Owner, its subsidiaries, affiliates, licensors, officers,
                directors, agents, co-branders, partners, suppliers and
                employees do not warrant that the content is accurate, reliable
                or correct; that the Service will meet Users’ requirements; that
                the Service will be available at any particular time or
                location, uninterrupted or secure; that any defects or errors
                will be corrected; or that the Service is free of viruses or
                other harmful components. Any content downloaded or otherwise
                obtained through the use of the Service is downloaded at users
                own risk and users shall be solely responsible for any damage to
                Users’ computer system or mobile device or loss of data that
                results from such download or Users’ use of the Service. The
                Owner does not warrant, endorse, guarantee, or assume
                responsibility for any product or service advertised or offered
                by a third party through the Service or any hyperlinked website
                or service, and the Owner shall not be a party to or in any way
                monitor any transaction between Users and third-party providers
                of products or services. The Service may become inaccessible or
                it may not function properly with Users’ web browser, mobile
                device, and/or operating system. The owner cannot be held liable
                for any perceived or actual damages arising from Service
                content, operation, or use of this Service. Federal law, some
                states, and other jurisdictions, do not allow the exclusion and
                limitations of certain implied warranties. The above exclusions
                may not apply to Users. This Agreement gives Users specific
                legal rights, and Users may also have other rights which vary
                from state to state. The disclaimers and exclusions under this
                agreement shall not apply to the extent prohibited by applicable
                law.
              </p>
              <h5 className="fw-500 text-justify f-inter-semi-bold">
                Limitations of liability
              </h5>
              <p className="text-justify f-inter-light">
                To the maximum extent permitted by applicable law, in no event
                shall the Owner, and its subsidiaries, affiliates, officers,
                directors, agents, co-branders, partners, suppliers and
                employees be liable for
              </p>
              <ul className="f-inter-light">
                <li>
                  any indirect, punitive, incidental, special, consequential or
                  exemplary damages, including without limitation damages for
                  loss of profits, goodwill, use, data or other intangible
                  losses, arising out of or relating to the use of, or inability
                  to use, the Service; and
                </li>
                <li>
                  any damage, loss or injury resulting from hacking, tampering
                  or other unauthorized access or use of the Service or User
                  account or the information contained therein; any errors,
                  mistakes, or inaccuracies of content;
                </li>
                <li>
                  personal injury or property damage, of any nature whatsoever,
                  resulting from User access to or use of the Service;
                </li>
                <li>
                  any unauthorized access to or use of the Owner’s secure
                  servers and/or any and all personal information stored
                  therein;
                </li>
                <li>
                  any interruption or cessation of transmission to or from the
                  Service;
                </li>
                <li>
                  any bugs, viruses, trojan horses, or the like that may be
                  transmitted to or through the Service;
                </li>
                <li>
                  any errors or omissions in any content or for any loss or
                  damage incurred as a result of the use of any content posted,
                  emailed, transmitted, or otherwise made available through the
                  Service; and/or
                </li>
                <li>
                  the defamatory, offensive, or illegal conduct of any User or
                  third party. In no event shall the Owner, and its
                  subsidiaries, affiliates, officers, directors, agents,
                  co-branders, partners, suppliers and employees be liable for
                  any claims, proceedings, liabilities, obligations, damages,
                  losses or costs in an amount exceeding the amount paid by User
                  to the Owner hereunder in the preceding 12 months, or the
                  period of duration of this agreement between the Owner and
                  User, whichever is shorter.
                </li>
              </ul>
              <p className="text-justify f-inter-light">
                This limitation of liability section shall apply to the fullest
                extent permitted by law in the applicable jurisdiction whether
                the alleged liability is based on contract, tort, negligence,
                strict liability, or any other basis, even if company has been
                advised of the possibility of such damage.
              </p>
              <p className="text-justify f-inter-light">
                Some jurisdictions do not allow the exclusion or limitation of
                incidental or consequential damages, therefore the above
                limitations or exclusions may not apply to User. The terms give
                User specific legal rights, and User may also have other rights
                which vary from jurisdiction to jurisdiction. The disclaimers,
                exclusions, and limitations of liability under the terms shall
                not apply to the extent prohibited by applicable law.
              </p>

              <h5 className="fw-500 text-justify f-inter-semi-bold">
                Indemnification
              </h5>
              <p className="text-justify f-inter-light">
                The User agrees to defend, indemnify and hold the Owner and its
                subsidiaries, affiliates, officers, directors, agents,
                co-branders, partners, suppliers and employees harmless from and
                against any and all claims or demands, damages, obligations,
                losses, liabilities, costs or debt, and expenses, including, but
                not limited to, legal fees and expenses, arising from
              </p>
              <ul className="f-inter-light">
                <li>
                  User’s use of and access to the Service, including any data or
                  content transmitted or received by User;
                </li>
                <li>
                  User’s violation of these terms, including, but not limited
                  to, User’s breach of any of the representations and warranties
                  set forth in these terms;
                </li>
                <li>
                  User’s violation of any third-party rights, including, but not
                  limited to, any right of privacy or intellectual property
                  rights;
                </li>
                <li>
                  User’s violation of any statutory law, rule, or regulation;
                </li>
                <li>
                  any content that is submitted from User’s account, including
                  third party access with User’s unique username, password or
                  other security measure, if applicable, including, but not
                  limited to, misleading, false, or inaccurate information;
                </li>
                <li>User’s wilful misconduct; or</li>
                <li>
                  statutory provision by User or its affiliates, officers,
                  directors, agents, co-branders, partners, suppliers and
                  employees to the extent allowed by applicable law.
                </li>
              </ul>

              <h3 className="color-purple fw-500 text-justify f-inter-semi-bold">
                Common provisions
              </h3>
              <h4 className="color-dark-grey fw-500 text-justify f-inter-semi-bold">
                No Waiver
              </h4>
              <p className="text-justify f-inter-light">
                The Owner’s failure to assert any right or provision under these
                Terms shall not constitute a waiver of any such right or
                provision. No waiver shall be considered a further or continuing
                waiver of such term or any other term.
              </p>
              <h4 className="color-dark-grey fw-500 text-justify f-inter-semi-bold">
                Service interruption
              </h4>
              <p className="text-justify f-inter-light">
                To ensure the best possible service level, the Owner reserves
                the right to interrupt the Service for maintenance, system
                updates or any other changes, informing the Users appropriately.
              </p>
              <p className="text-justify f-inter-light">
                Within the limits of law, the Owner may also decide to suspend
                or terminate the Service altogether. If the Service is
                terminated, the Owner will cooperate with Users to enable them
                to withdraw Personal Data or information in accordance with
                applicable law.
              </p>
              <p className="text-justify f-inter-light">
                Additionally, the Service might not be available due to reasons
                outside the Owner’s reasonable control, such as “force majeure”
                (eg. labor actions, infrastructural breakdowns or blackouts
                etc).
              </p>
              <h4 className="color-dark-grey fw-500 text-justify f-inter-semi-bold">
                Service reselling
              </h4>
              <p className="text-justify f-inter-light">
                Users may not reproduce, duplicate, copy, sell, resell or
                exploit any portion of this Website and of its Service without
                the Owner’s express prior written permission, granted either
                directly or through a legitimate reselling programme.
              </p>
              <h4 className="color-dark-grey fw-500 text-justify f-inter-semi-bold">
                Privacy policy
              </h4>
              <p className="text-justify f-inter-light">
                To learn more about the use of their Personal Data, Users may
                refer to the privacy policy of this Website.
              </p>

              <h4 className="color-dark-grey fw-500 text-justify f-inter-semi-bold">
                Intellectual property rights
              </h4>
              <p className="text-justify f-inter-light">
                Without prejudice to any more specific provision of these Terms,
                any intellectual property rights, such as copyrights, trademark
                rights, patent rights and design rights related to this Website
                are the exclusive property of the Owner or its licensors and are
                subject to the protection granted by applicable laws or
                international treaties relating to intellectual property.
              </p>
              <p className="text-justify f-inter-light">
                All trademarks — nominal or figurative — and all other marks,
                trade names, service marks, word marks, illustrations, images,
                or logos appearing in connection with this Website are, and
                remain, the exclusive property of the Owner or its licensors and
                are subject to the protection granted by applicable laws or
                international treaties related to intellectual property.
              </p>

              <h4 className="color-dark-grey fw-500 text-justify f-inter-semi-bold">
                Changes to these Terms
              </h4>
              <p className="text-justify f-inter-light">
                The Owner reserves the right to amend or otherwise modify these
                Terms at any time. In such cases, the Owner will appropriately
                inform the User of these changes.
              </p>
              <p className="text-justify f-inter-light">
                Such changes will only affect the relationship with the User for
                the future.
              </p>
              <p className="text-justify f-inter-light">
                The continued use of the Service will signify the User’s
                acceptance of the revised Terms. If Users do not wish to be
                bound by the changes, they must stop using the Service. Failure
                to accept the revised Terms, may entitle either party to
                terminate the Agreement.
              </p>
              <p className="text-justify f-inter-light">
                The applicable previous version will govern the relationship
                prior to the User's acceptance. The User can obtain any previous
                version from the Owner.
              </p>
              <p className="text-justify f-inter-light">
                If required by applicable law, the Owner will specify the date
                by which the modified Terms will enter into force.
              </p>
              <h4 className="color-dark-grey fw-500 text-justify f-inter-semi-bold">
                Assignment of contract
              </h4>
              <p className="text-justify f-inter-light">
                The Owner reserves the right to transfer, assign, dispose of by
                novation, or subcontract any or all rights or obligations under
                these Terms, taking the User’s legitimate interests into
                account. Provisions regarding changes of these Terms will apply
                accordingly.
              </p>
              <p className="text-justify f-inter-light">
                Users may not assign or transfer their rights or obligations
                under these Terms in any way, without the written permission of
                the Owner.
              </p>
              <h4 className="color-dark-grey fw-500 text-justify f-inter-semi-bold">Contacts</h4>
              <p className="text-justify f-inter-light">
                All communications relating to the use of this Website must be
                sent using the contact information stated in this document.
              </p>
              <h4 className="color-dark-grey fw-500 text-justify f-inter-semi-bold">
                Severability
              </h4>
              <p className="text-justify f-inter-light">
                Should any provision of these Terms be deemed or become invalid
                or unenforceable under applicable law, the invalidity or
                unenforceability of such provision shall not affect the validity
                of the remaining provisions, which shall remain in full force
                and effect.
              </p>
              <h5 className="fw-500 text-justify f-inter-semi-bold">US Users</h5>
              <p className="text-justify f-inter-light">
                Any such invalid or unenforceable provision will be interpreted,
                construed and reformed to the extent reasonably required to
                render it valid, enforceable and consistent with its original
                intent. These Terms constitute the entire Agreement between
                Users and the Owner with respect to the subject matter hereof,
                and supersede all other communications, including but not
                limited to all prior agreements, between the parties with
                respect to such subject matter. These Terms will be enforced to
                the fullest extent permitted by law.
              </p>
              <h5 className="fw-500 text-justify f-inter-semi-bold">EU Users</h5>

              <p className="text-justify f-inter-light">
                Should any provision of these Terms be or be deemed void,
                invalid or unenforceable, the parties shall do their best to
                find, in an amicable way, an agreement on valid and enforceable
                provisions thereby substituting the void, invalid or
                unenforceable parts.
              </p>
              <p className="text-justify f-inter-light">
                In case of failure to do so, the void, invalid or unenforceable
                provisions shall be replaced by the applicable statutory
                provisions, if so permitted or stated under the applicable law.
              </p>
              <p className="text-justify f-inter-light">
                Without prejudice to the above, the nullity, invalidity or the
                impossibility to enforce a particular provision of these Terms
                shall not nullify the entire Agreement, unless the severed
                provisions are essential to the Agreement, or of such importance
                that the parties would not have entered into the contract if
                they had known that the provision would not be valid, or in
                cases where the remaining provisions would translate into an
                unacceptable hardship on any of the parties.
              </p>

              <h4 className="color-dark-grey fw-500 text-justify f-inter-semi-bold">
                Governing law
              </h4>
              <p className="text-justify f-inter-light">
                Should any provision of these Terms be or be deemed void,
                invalid or unenforceable, the parties shall do their best to
                find, in an amicable way, an agreement on valid and enforceable
                provisions thereby substituting the void, invalid or
                unenforceable parts.
              </p>
              <h5 className="fw-500 text-justify f-inter-semi-bold">
                Exception for European Consumers
              </h5>
              <p className="text-justify f-inter-light">
                However, regardless of the above, if the User qualifies as a
                European Consumer and has their habitual residence in a country
                where the law provides for a higher consumer protection
                standard, such higher standards shall prevail.
              </p>
              <h4 className="color-dark-grey fw-500 text-justify f-inter-semi-bold">
                Venue of jurisdiction
              </h4>
              <p className="text-justify f-inter-light">
                The exclusive competence to decide on any controversy resulting
                from or connected to these Terms lies with the courts of the
                place where the Owner is based, as displayed in the relevant
                section of this document.
              </p>
              <h5 className="fw-500 text-justify f-inter-semi-bold">
                Exception for European Consumers
              </h5>
              <p className="text-justify f-inter-light">
                The above does not apply to any Users that qualify as European
                Consumers, nor to Consumers based in Switzerland, Norway or
                Iceland.
              </p>
              <p className="mt-5 f-inter-light">
                <small>Latest update: February 18, 2022</small>
              </p>
            </div>

            <div className="col-lg-2 col-md-2"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsAndConditions;
