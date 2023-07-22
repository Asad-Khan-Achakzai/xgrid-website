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

// React import
import React, { createContext, useReducer } from 'react';

// Reducers import
import AppReducer from './appReducer';

// Constants imports
import constants from '../constants/constants';

const initialState = {
  isSearchResult: true,
  blogsPerPage: {
    allTab: 6,
    articlesTab: 10,
    blogPage: 4
  },
  caseStudiesPerPage: {
    allTab: 6,
    caseStudyTab: 10,
    caseStudyPage: 3
  },
  videosPerPage: {
    allTab: 6,
    xgridTalksTab: 10
  },
  activeResourcesTab: constants.resourcePageFilters.all.value
}

export const AppContext = createContext(initialState);

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  /**
  * Sets value of global state 'isSearchResult'
  * @param {boolean} isSearchResult - value is true when search result is not empty
  */
  const setIsSearchResult = (isSearchResult) => {
    dispatch({
      type: constants.contextAPIActions.SET_SEARCH_RESULT,
      payload: isSearchResult,
    })
  }

  /**
  * Sets value of global state 'blogsPerPage'
  * @param {string} source - source (route/ filter tab) form where action triggered
  * @param {number} blogsCount - number of blogs to show in grid
  */
  const setBlogsPerPage = (blogsCount, source) => {
    dispatch({
      type: constants.contextAPIActions.SET_BLOGS_PER_PAGE,
      payload: { blogsCount, source },
    })
  }

  /**
  * Sets value of global state 'caseStudiesPerPage'
  * @param {string} source - source (route/ filter tab) form where action triggered
  * @param {number} caseStudiesCount - number of case studies to show in grid
  */
    const setCaseStudiesPerPage = (caseStudiesCount, source) => {
    dispatch({
      type: constants.contextAPIActions.SET_CASE_STUDIES_PER_PAGE,
      payload: { caseStudiesCount, source },
    })
  }

  /**
  * Sets value of global state 'videosPerPage'
  * @param {string} source - source (route/ filter tab) form where action triggered
  * @param {number} videosPerPage - number of videos to show in grid
  */
  const setVideosPerPage = (videosPerPage, source) => {
    dispatch({
      type: constants.contextAPIActions.SET_VIDEOS_PER_PAGE,
      payload: { videosPerPage, source },
    })
  }

  /**
  * Sets value of global state 'activeResourcesTab'
  * @param {string} tab - tab name
  */
  const setResourcesActiveTab = (tab) => {
    dispatch({
      type: constants.contextAPIActions.SET_RESOURCES_ACTIVE_TAB,
      payload: tab,
    })
  }

  return (
    <AppContext.Provider
      value={{
        isSearchResult: state.isSearchResult,
        blogsPerPage: state.blogsPerPage,
        videosPerPage: state.videosPerPage,
        caseStudiesPerPage: state.caseStudiesPerPage,
        activeResourcesTab: state.activeResourcesTab,
        setIsSearchResult, setBlogsPerPage,
        setVideosPerPage, setResourcesActiveTab,
        setCaseStudiesPerPage
      }}
    >
      {children}
    </AppContext.Provider>
  )
}