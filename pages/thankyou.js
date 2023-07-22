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

// Components import
import ThankYouUI from "../components/svg-with-message";
import constants from "../constants/constants";

const ThankYou = () => {
  return (
    <>
      <ThankYouUI
        alt="Thank you icon"
        img={constants.images.thankyou}
        title="Thank you for contacting us!"
        line1="We are pleased to know that you are interested in our company, and we will be happy"
        line2="to help you. One of our specialists will reach out to you shortly."
      />
    </>
  )
}

export default ThankYou;