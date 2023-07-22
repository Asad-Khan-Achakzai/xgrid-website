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

// Next import
import { useRouter } from "next/router";

// Constants import
import constants from "../constants/constants";

/**
 * Checks if string is valid by verifying if string is empty, null, undefined, "null" or "undefined"
 * @param {string} str - string which has to be validated
 * @returns {boolean} - true or false in case of valid or invalid string respectively
 */
export const isValidString = (str) => {
    if(!str || str === "null" || str === "undefined"){
        return false;
    }
    return true;
}

/**
 * Returns domain url based on environment
 * @returns {string} - url
 */
export const getUrl = () => {
    return process.env.NEXT_PUBLIC_ENVIRONMENT === "development" ? constants.url.staging : constants.url.production;
}

/**
 * Returns wordpress api endpoint based on environment
 * @returns {string} - url
 */
 export const getWordpressEndpoint = () => {
    return process.env.NEXT_PUBLIC_ENVIRONMENT === "development" ? constants.wordpressEndpoints.staging : constants.wordpressEndpoints.production;
}

/**
 * Returns hubSpot form Id based on environment
 * @returns {string} - formId
 */
 export const getHubSpotFormId = (caseStudyNum=0) => {
    if (!caseStudyNum) {
        return process.env.NEXT_PUBLIC_ENVIRONMENT === "development" ? constants.hubSpot.stagingFormId : constants.hubSpot.productionFormId;
    } else {
        return process.env.NEXT_PUBLIC_ENVIRONMENT === "development" ? constants.hubSpot[`caseStudy${caseStudyNum}`].stagingFormId : constants.hubSpot[`caseStudy${caseStudyNum}`].productionFormId;
    }
}

/**
 * returns url of page without query parameters
 * @returns {string} - url
 */
export const getCanonicalUrl = () => {
    const router = useRouter();
    return (`${getUrl()}` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];
}