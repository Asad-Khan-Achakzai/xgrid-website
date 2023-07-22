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

// Third party
import axios from "axios";

// Constants
import constants from "../../constants/constants";

// Case study data import
import { caseStudies } from "../../data/caseStudiesData";

// Helpers import
import { isValidString, getWordpressEndpoint } from "../../helpers/string";

/**
 * Function for getting all wordpress posts
 * @param {*} postsPerPage
 * @returns posts
 */
export const getAllWordpressBlogPosts = (postsPerPage) => {
  return axios.get(
    `${getWordpressEndpoint()}${constants.wordpressEndpoints.fetchAllPosts}?_embed`,
    { params: { per_page: postsPerPage } }
  );
};

/**
 * Function for getting all wordpress posts by slug
 * @param {*} slug
 * @returns posts
 */
export const getAllWordpressBlogPostsBySlug = (slug) => {
  return axios.get(
    `${getWordpressEndpoint()}${constants.wordpressEndpoints.fetchAllPosts}?_embed`,
    { params: { slug } }
  );
};

/**
 *
 * @param {*} searchKeyword
 * @param {*} filter
 * @returns Wordpress articles || Youtube Videos || Case Studies
 */
export const searchArticlesOrVideos = (searchKeyword, filter) => {
  if (filter === constants.resourcePageFilters.articles.value) {
    try {
      return axios.get(
        `${getWordpressEndpoint()}${
          constants.wordpressEndpoints.fetchAllPosts
        }?_embed`,
        { params: { search: searchKeyword } }
      );
    } catch (error) {
      // TOD: Will add a toast once it gets approved from the design
    }
  } else if (
    filter === constants.resourcePageFilters.xgridTalks.value ||
    filter === constants.resourcePageFilters.webinars.value
  ) {
    try {
      return axios.get(
        `${constants.youtubeApi.baseUrl}${constants.youtubeApi.search}&type=video&playlistId=${constants.youtubeApi.playlistId}&channelId=${constants.youtubeApi.channelId}&q=${searchKeyword}`
      );
    } catch (error) {
      // TOD: Will add a toast once it gets approved from the design
    }
  }
  return searchCaseStudyByKeyword(searchKeyword);
};

/**
 * Function for fetching Xgrid playlist videos from youtube
 * @param {number} maxResults - number of videos to fetch
 * @param {string} nextPageToken - token for next page
 * @param {string} fetchVideos - fetch videos for
 * @returns {array} videos - array of objects containing videos data
 */
export const fetchYoutubePlaylist = (maxResults, nextPageToken = null, fetchVideos) => {
  let fetchVideosType;
  if (fetchVideos === constants.youtubeApi.fetchXgridTalks) {
    fetchVideosType = constants.youtubeApi.playlistId;
  } else if (fetchVideos === constants.youtubeApi.webinar.fetchWebinars) {
    fetchVideosType = constants.youtubeApi.webinar.playlistId;
  } else {
    fetchVideosType = constants.youtubeApi.podcast.playlistId;
  }
  const params = {
    part: constants.youtubeApi.part,
    playlistId: fetchVideosType,
    key: constants.youtubeApi.key,
    maxResults,
  };
  isValidString(nextPageToken) ? (params.pageToken = nextPageToken) : params;
  return axios.get(
    `${constants.youtubeApi.baseUrl}${constants.youtubeApi.fetchPlaylist}`,
    { params }
  );
};

/**
 * Function for getting all case studies
 * @param {number} caseStudiesPerPage
 * @returns {array} caseStudies
 */
export const getAllCaseStudies = (caseStudiesPerPage=0) => {
  let filteredCasestudies = caseStudies.filter((caseStudy) => {
    // Remove caseStudy if it is Whitepaper
    if (caseStudy?.isWhitepaper) {
      return false;
    }
    // Remove caseStudy if it has type ungated and environment is production
    if (process.env.NEXT_PUBLIC_ENVIRONMENT === 'production' && caseStudy.type === 'ungated') {
      return false;
    }
    return true;
  });
  filteredCasestudies = filteredCasestudies.reverse();
  const data = caseStudiesPerPage ?
    filteredCasestudies.slice(0, caseStudiesPerPage) : filteredCasestudies;
  return Promise.resolve({ data });
};

/**
 * Function for getting all whitepaper case studies
 * @param {number} caseStudiesPerPage
 * @returns {array} caseStudies
 */
export const getAllWhitepaperCaseStudies = (caseStudiesPerPage=0) => {
  const filteredCasestudies = caseStudies.filter((caseStudy) => caseStudy?.isWhitepaper);
   const data = caseStudiesPerPage ?
     filteredCasestudies.slice(0, caseStudiesPerPage) : filteredCasestudies;
  return Promise.resolve({ data });
};

/**
 * Function for getting case study by slug
 * @param {string} slug
 * @returns {object} caseStudy
 */
 export const getCaseStudyBySlug = (slug) => {
  return caseStudies.find(caseStudy => caseStudy.slug === slug)
};

/**
 * Function for searching case study by keyword
 * @param {string} keyword
 * @returns {object} caseStudy
 */
export const searchCaseStudyByKeyword = (keyword) => {
  const filteredCasestudies = caseStudies.filter((caseStudy) => {
    // Remove caseStudy if it has type ungated and environment is production
    if (process.env.NEXT_PUBLIC_ENVIRONMENT === 'production' && caseStudy.type === 'ungated') {
      return false;
    }
    return true;
  });
  return Promise.resolve({
    data: filteredCasestudies.filter(caseStudy => caseStudy.heroSection.heroText.text.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()))
  });
};