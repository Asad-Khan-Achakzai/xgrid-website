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

// Constants imports
import constants from "../constants/constants";

export default (state, action) => {
  switch (action.type) {
    case constants.contextAPIActions.SET_SEARCH_RESULT:
      return {
        ...state,
        isSearchResult: action.payload,
      };

    case constants.contextAPIActions.SET_BLOGS_PER_PAGE:
      const updatedBlogsData = {};
      if (action.payload.source === constants.resourcePageFilters.articles.value) {
        updatedBlogsData.articlesTab = action.payload.blogsCount
      } else {
        updatedBlogsData.allTab = action.payload.blogsCount
      }
      return {
        ...state,
        blogsPerPage: {
          ...state.blogsPerPage,
          ...updatedBlogsData,
        },
      }

    case constants.contextAPIActions.SET_CASE_STUDIES_PER_PAGE:
      const updatedCaseStudiesData = {};
      if (action.payload.source === constants.resourcePageFilters.caseStudies.value) {
        updatedCaseStudiesData.caseStudyTab = action.payload.caseStudiesCount
      } else {
        updatedCaseStudiesData.allTab = action.payload.caseStudiesCount
      }
      return {
        ...state,
        caseStudiesPerPage: {
          ...state.caseStudiesPerPage,
          ...updatedCaseStudiesData,
        },
      }

    case constants.contextAPIActions.SET_VIDEOS_PER_PAGE:
      const updatedVideosData = {};
      if (action.payload.source === constants.resourcePageFilters.xgridTalks.value) {
        updatedVideosData.xgridTalksTab = action.payload.videosPerPage
      } else {
        updatedVideosData.allTab = action.payload.videosPerPage
      }
      return {
        ...state,
        videosPerPage: {
          ...state.videosPerPage,
          ...updatedVideosData,
        },
      };
    case constants.contextAPIActions.SET_RESOURCES_ACTIVE_TAB:
      return {
        ...state,
        activeResourcesTab: action.payload
      };
    default:
      return state;
  }
}