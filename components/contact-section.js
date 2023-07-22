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

//Components import
import ContactForm from "./contact-us-form";

const ContactSection = () => {
    return (
        <div className="row justify-content-between">
            <div className="col-lg-6 col-md-12 form-text-wrapper">
                <h1 className="color-white">Ready To <span className="d-block">Get Started?</span></h1>
                <p className="color-white">Describe your project and leave us your contact info, we’ll get back to you within 24 hours.</p>
            </div>
            <div className="col-lg-6 col-md-12 mt-md-5 xgp-l-8">
                <ContactForm />
            </div>
        </div>
    )
}

export default ContactSection;