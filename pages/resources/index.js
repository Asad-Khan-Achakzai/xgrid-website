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

//React imports
import React, { useState, useContext, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';

// Next imports
import Head from 'next/head';

// Context Api imports
import { AppContext } from '../../context/appContext';

// Constants
import constants from '../../constants/constants';

// Component imports
import Filters from '../../components/filters';
import XgridTalk from '../../components/xgridTalkSingle';
import FeaturedPost from '../../components/featuredPost';
import XgridTalkMultiple from '../../components/xgridTalkMultiple';
import MultiplePosts from '../../components/multiplePosts';
import MultiplePostsSearched from '../../components/multiplePostsSearched';
import XgridTalkMultipleSearched from '../../components/xgridTalkMultipleSearched';
import SearchResults from '../../components/search-results';
import LoadingSkeleton from '../../components/skeleton';
import SearchNotFound from '../../components/svg-with-message';
import XGInput from '../../components/input';
import MetaTags from '../../components/meta-tags';
import Emitter from '../../components/emitter';

// Api imports
import {
  getAllCaseStudies,
  getAllWordpressBlogPosts,
  searchArticlesOrVideos,
  fetchYoutubePlaylist,
  getAllWhitepaperCaseStudies,
} from '../api/api';

/**
 * Resources page, displaying all the Xgrid resources like:
 * Xgrid Talks, Articles
 * @returns Component
 */
const Resources = () => {
  const router = useRouter();
  const { activeResourcesTab, setResourcesActiveTab, setIsSearchResult } =
    useContext(AppContext);
  // Active button state
  const [activeButton, setActiveButton] = useState(activeResourcesTab);
  // Wordpress searched data
  const [searchedContent, setSearchedContent] = useState([]);

  const [searchedArticles, setSearchedArticles] = useState([]);
  const [searchedXgridTalks, setSearchedXgridTalks] = useState([]);
  const [searchedCasestudies, setSearchedCasestudies] = useState([]);

  const [renderedArticles, setRenderedArticles] = useState([]);
  const [renderedXgridTalks, setRenderedXgridTalks] = useState([]);
  const [renderedCasestudies, setRenderedCasestudies] = useState([]);

  const [isSearchedArticles, setIsSearchedArticles] = useState(false);
  const [isSearchedXgridTalks, setIsSearchedXgridTalks] = useState(false);
  const [isSearchedCasestudies, setIsSearchedCasestudies] = useState(false);

  const [xgridTalksVideos, setXgridTalksVideos] = useState([]);
  // Posts length
  const [postsLength, setPostsLength] = useState();
  // Last page state
  const [isLastPage, setLastPage] = useState(false);
  // Token for videos on next page
  const [nextPageVideosToken, setNextPageVideosToken] = useState('');
  const [nextPageVideosTokenForWebinars, setNextPageVideosTokenForWebinars] =
    useState('');
  const [webinarVideos, setWebinarVideos] = useState([]);

  // Posts length
  const [postsLengthWebinar, setPostsLengthWebinar] = useState();
  const [videosCountWebinar, setVideosCountWebinar] = useState(6);

  const [nextPageVideosTokenForPodcasts, setNextPageVideosTokenForPodcasts] =
    useState('');
  const [podcastVideos, setPodcastVideos] = useState([]);

  // Posts length
  const [postsLengthPodcast, setPostsLengthPodcast] = useState();
  const [videosCountPodcast, setVideosCountPodcast] = useState(6);

  // Timer for delay while typing in search
  const [timer, setTimer] = useState(null);
  // Loading state for loaderSkeleton
  const [loading, isLoading] = useState(false);
  // State for search results, setting true if not found any data
  const [searchNotFound, setSearchNotfound] = useState(false);
  // Search value
  const [inputValue, setInputValue] = useState('');
  const [videosCount, setVideosCount] = useState(6);
  useEffect(() => {
    if (router.query?.filter) {
      filterData(router.query.filter);
    }
  }, []);
  useEffect(() => {
    fetchYoutubePlaylistVideos(
      nextPageVideosToken,
      xgridTalksVideos,
      constants.youtubeApi.fetchXgridTalks,
      setXgridTalksVideos,
      setPostsLength,
      setNextPageVideosToken,
      videosCount
    );
  }, [videosCount]);

  useEffect(() => {
    fetchYoutubePlaylistVideos(
      nextPageVideosTokenForWebinars,
      webinarVideos,
      constants.youtubeApi.webinar.fetchWebinars,
      setWebinarVideos,
      setPostsLengthWebinar,
      setNextPageVideosTokenForWebinars,
      videosCountWebinar
    );
    fetchYoutubePlaylistVideos(
      nextPageVideosTokenForPodcasts,
      podcastVideos,
      constants.youtubeApi.podcast.fetchPodcast,
      setPodcastVideos,
      setPostsLengthPodcast,
      setNextPageVideosTokenForPodcasts,
      videosCountPodcast
    );
  }, [videosCountPodcast]);

  useEffect(() => {
    fetchYoutubePlaylistVideos(
      nextPageVideosTokenForWebinars,
      webinarVideos,
      constants.youtubeApi.webinar.fetchWebinars,
      setWebinarVideos,
      setPostsLengthWebinar,
      setNextPageVideosTokenForWebinars,
      videosCountWebinar
    );
  }, [videosCountWebinar]);
  useEffect(() => {
    // To scroll page back to top
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, []);
  useEffect(() => {
    Emitter.on(constants.filterResourceEvent, resourceEventHandler);
    return () => {
      Emitter.off(constants.filterResourceEvent);
    };
  });

  /**
   * Function to handle event when event is received
   * @param {String} data
   */
  const resourceEventHandler = (data) => {
    filterData(data?.filter);
  };
  useEffect(() => {
    if (
      isSearchedXgridTalks &&
      isSearchedArticles &&
      isSearchedCasestudies &&
      inputValue
    ) {
      if (
        !searchedArticles.length &&
        !searchedCasestudies.length &&
        !searchedXgridTalks.length
      ) {
        setSearchNotfound(true);
        setIsSearchResult(true);
      } else {
        setSearchNotfound(false);
        setIsSearchResult(false);
      }
    } else {
      setIsSearchResult(true);
    }
  }, [isSearchedXgridTalks, isSearchedArticles, isSearchedCasestudies]);
  useEffect(() => {
    if (!inputValue) {
      setSearchedArticles([]);
      setSearchedXgridTalks([]);
      setSearchedCasestudies([]);
    }
  }, [inputValue]);

  /**
   * Function for getting videos from youtube playlist
   * @param {string} nextPageToken - token to fetch videos of next page
   * @param {string} videos - youtube videos
   * @param {string} fetchVideos - videos to be fetched for
   * @param {Function} setVideo - Function to set videos
   * @param {Function} setPostsLength - Function to set total videos length
   * @param {Function} setNextPageVideosToken - Function to set next page token
   * @param {string} videosCount - fetched videos length
   */
  const fetchYoutubePlaylistVideos = async (
    nextPageToken = '',
    videos,
    fetchVideos,
    setVideo,
    setPostsLength,
    setNextPageVideosToken,
    videosCount
  ) => {
    const maxVideos = 50;
    try {
      /**
       * available data will be less than the requested data on next click and
       * complete data is already fetched or
       * when no data is in the list
       */
      if ((videosCount + 3 > videos.length && !isLastPage) || !videos.length) {
        const res = await fetchYoutubePlaylist(
          maxVideos,
          nextPageToken,
          fetchVideos
        );

        // filetering deleted videos.
        let filteredVideos = res.data.items.filter(
          (item) =>
            item.snippet.title !== 'Deleted video' &&
            item.snippet.title !== 'Private video'
        );

        setPostsLength(filteredVideos.length);

        // if current page is not the last page then save token
        if (!res.data?.prevPageToken) {
          setNextPageVideosToken(res.data.nextPageToken);
        } else {
          setLastPage(true);
        }
        setVideo([...videos, ...filteredVideos]);
      }

      isLoading(false);
    } catch (error) {
      isLoading(false);
      // TODO: will replace console with given design element in future such as Alert or something else
      console.error(error);
    }
  };

  /**
   * Function for loading more posts
   */
  const loadMorePosts = (renderedFor) => {
    if (renderedFor === constants.resourcePageFilters.caseStudies.value) {
      setRenderedCasestudies(
        searchedCasestudies.slice(0, renderedCasestudies.length + 3)
      );
    } else if (renderedFor === constants.resourcePageFilters.articles.value) {
      setRenderedArticles(
        searchedArticles.slice(0, renderedArticles.length + 3)
      );
    } else {
      setRenderedXgridTalks(
        searchedXgridTalks.slice(0, renderedXgridTalks.length + 3)
      );
    }
  };

  // TODO: Will update this later
  const filterButtons = [
    {
      filter: constants.resourcePageFilters.all.value,
      type: constants.resourcePageFilters.all.type,
      filterPropsAndStyles: {
        filterBtnText: constants.resourcePageFilters.all.text,
        filterBtnClasses: constants.resourcePageFilters.all.classes,
      },
    },
    {
      filter: constants.resourcePageFilters.xgridTalks.value,
      type: constants.resourcePageFilters.xgridTalks.type,
      filterPropsAndStyles: {
        filterBtnText: constants.resourcePageFilters.xgridTalks.text,
        filterBtnClasses: constants.resourcePageFilters.xgridTalks.classes,
      },
    },
    {
      filter: constants.resourcePageFilters.webinars.value,
      type: constants.resourcePageFilters.webinars.type,
      filterPropsAndStyles: {
        filterBtnText: constants.resourcePageFilters.webinars.text,
        filterBtnClasses: constants.resourcePageFilters.webinars.classes,
      },
    },
    {
      filter: constants.resourcePageFilters.podcast.value,
      type: constants.resourcePageFilters.podcast.type,
      filterPropsAndStyles: {
        filterBtnText: constants.resourcePageFilters.podcast.text,
        filterBtnClasses: constants.resourcePageFilters.podcast.classes,
      },
    },
    {
      filter: constants.resourcePageFilters.caseStudies.value,
      type: constants.resourcePageFilters.caseStudies.type,
      filterPropsAndStyles: {
        filterBtnText: constants.resourcePageFilters.caseStudies.text,
        filterBtnClasses: constants.resourcePageFilters.caseStudies.classes,
      },
    },
    {
      filter: constants.resourcePageFilters.articles.value,
      type: constants.resourcePageFilters.articles.type,
      filterPropsAndStyles: {
        filterBtnText: constants.resourcePageFilters.articles.text,
        filterBtnClasses: constants.resourcePageFilters.articles.classes,
      },
    },
    {
      filter: constants.resourcePageFilters.whitepapers.value,
      type: constants.resourcePageFilters.whitepapers.type,
      filterPropsAndStyles: {
        filterBtnText: constants.resourcePageFilters.whitepapers.text,
        filterBtnClasses: constants.resourcePageFilters.whitepapers.classes,
      },
    },
  ];

  /**
   * Function for getting searched data based on filter and input
   * TODO: Will improve this functionality further later
   * @param {} event
   */
  const searchPostsOrVideosBasedOnQuery = (event, filter) => {
    setSearchNotfound(false);
    setIsSearchResult(false);
    clearTimeout(timer);
    isLoading(true);
    const newTimer = setTimeout(() => {
      if (filter === constants.resourcePageFilters.all.value) {
        setIsSearchedArticles(false);
        setIsSearchedXgridTalks(false);
        setIsSearchedCasestudies(false);

        searchArticlesOrVideos(
          event.target.value,
          constants.resourcePageFilters.articles.value
        )
          .then((res) => {
            let response = res.data.items ? res.data.items : res.data;
            isLoading(false);
            setIsSearchedArticles(true);
            if (event.target.value !== '') {
              setSearchedArticles(response);
              setRenderedArticles(response.slice(0, 6));
            }
          })
          .catch((err) => console.error(err));

        searchArticlesOrVideos(
          event.target.value,
          constants.resourcePageFilters.xgridTalks.value
        )
          .then((res) => {
            setIsSearchedXgridTalks(true);
            let response = res.data.items ? res.data.items : res.data;
            if (event.target.value !== '') {
              setSearchedXgridTalks(response);
              setRenderedXgridTalks(response.slice(0, 6));
            }
          })
          .catch((err) => console.error(err));

        searchArticlesOrVideos(
          event.target.value,
          constants.resourcePageFilters.caseStudies.value
        )
          .then((res) => {
            setIsSearchedCasestudies(true);
            let response = res.data.items ? res.data.items : res.data;
            if (event.target.value !== '') {
              setSearchedCasestudies(response);
              setRenderedCasestudies(response.slice(0, 6));
            }
          })
          .catch((err) => console.error(err));
      } else {
        searchArticlesOrVideos(event.target.value, filter)
          .then((res) => {
            let response = res.data.items ? res.data.items : res.data;
            if (!response.length) {
              setSearchNotfound(true);
              setIsSearchResult(false);
            } else {
              setIsSearchResult(true);
            }
            isLoading(false);
            if (event.target.value !== '') {
              setSearchedContent(response);
            } else {
              setSearchedContent([]);
            }
          })
          .catch((err) => console.error(err));
      }
    }, 500);
    setTimer(newTimer);
  };

  /**
   * Function for filter Posts and Xgrid Talks, expecting
   * @param {string} filter
   */
  const filterData = (filter) => {
    if (filter === constants.resourcePageFilters.all.value) {
      setVideosCount(6);
      setVideosCountWebinar(6);
    } else if (
      filter === constants.resourcePageFilters.xgridTalks.value ||
      constants.resourcePageFilters.webinars.value
    ) {
      setVideosCount(10);
      setVideosCountWebinar(10);
    }
    // setFilter(filter);
    setResourcesActiveTab(filter);
    setActiveButton(filter);
    // Clearing search
    setSearchedContent([]);
    setSearchNotfound(false);
    // Clearing search
    setInputValue('');

    setIsSearchedCasestudies(false);
    setIsSearchedXgridTalks(false);
    setIsSearchedArticles(false);

    setRenderedCasestudies([]);
    setRenderedXgridTalks([]);
    setRenderedArticles([]);

    setSearchedCasestudies([]);
    setSearchedXgridTalks([]);
    setSearchedArticles([]);
  };

  /**
   * Function for searching posts and videos, passing event and adding input value in state
   * TODO: Will improve further with "all" filter
   * @param {Object} event
   */
  const searchResources = (event) => {
    setInputValue(event.target.value);
    searchPostsOrVideosBasedOnQuery(event, activeResourcesTab);
  };

  return (
    <div className='light-grey-bg'>
      <Head>
        <title>Learn, Design, Develop, and Engage with Xgrid</title>
        <meta
          name='description'
          content='The latest trends in cloud, software development, DevOps, Marcom, news updates, reviews, and analyses on IT industry, strategy and consulting.'
        />
        <meta
          property='og:image'
          content={constants.thumbnails.resource}
        />
      </Head>
      <div className='custom-container py-6 mobile-padding-x'>
        <div className='row d-none d-lg-block'>
          <div className='col-lg-12 d-flex'>
            <ul className='links mr-auto ms-0'>
              {filterButtons?.map((res) => {
                return (
                  <Filters
                    filterActionHandler={() => filterData(res.filter)}
                    type={res.type}
                    currentFilter={activeResourcesTab}
                    filterPropsAndStyles={res.filterPropsAndStyles}
                    active={activeButton === res.filter ? true : false}
                  />
                );
              })}
            </ul>
            <XGInput
              classes={
                'search-field border-b-1 rounded rounded-3 flex-nowrap ms-lg-3 f-inter-reg'
              }
              val={inputValue}
              isIcon={true}
              searchHandler={(event) => searchResources(event)}
            />
          </div>
        </div>

        <div className='row d-lg-none'>
          <div className='col-12'>
            {filterButtons?.map((res) => {
              if (res.type === 'input') {
                return (
                  <Filters
                    filterActionHandler={() => filterData(res.filter)}
                    type={res.type}
                    currentFilter={activeResourcesTab}
                    filterPropsAndStyles={res.filterPropsAndStyles}
                    active={activeButton === res.filter ? true : false}
                  />
                );
              }
            })}
            <XGInput
              classes={`search-field border rounded rounded-3 flex-nowrap ms-lg-3`}
              val={inputValue}
              isIcon={true}
              searchHandler={(event) => searchResources(event)}
            />
          </div>
        </div>

        {/* Display on small devices and tablets */}
        <div className='row d-lg-none'>
          <div className='dropdown'>
            <button
              className='purple-btn border-0 rounded dropdown-toggle w-100 p-3 d-flex justify-content-between align-items-center text-capitalize'
              type='button'
              id='dropdownMenuButton1'
              data-bs-toggle='dropdown'
              aria-expanded='false'
            >
              {activeResourcesTab}
            </button>
            <ul
              className='dropdown-menu w-97'
              aria-labelledby='dropdownMenuButton1'
            >
              {filterButtons?.map((res) => {
                if (res.type === 'button') {
                  return (
                    <li className='py-3'>
                      <span
                        className='dropdown-item'
                        onClick={() => filterData(res.filter)}
                      >
                        {res.filterPropsAndStyles.filterBtnText}
                      </span>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        </div>
      </div>
      {(searchedCasestudies || searchedArticles || searchedXgridTalks) &&
      inputValue ? (
        <>
          <div className='custom-container mobile-padding-x'>
            {/* XgridTalks */}
            <div className='row mb-5'>
              <XgridTalkMultipleSearched
                source={constants.resourcePageFilters.all.value}
                separatorAdditionalClasses='mb-5'
                ignoreFirstVideo={0}
                separatorText={
                  <h4 className='mb-0 fw-semibold text-black f-inter-reg'>
                    XgridTalks
                  </h4>
                }
                maxVideosOnPage={6}
                searchedVideos={renderedXgridTalks}
                totalPosts={searchedXgridTalks}
                loadMorePosts={loadMorePosts}
              />
            </div>
            {/* Case Studies */}
            <div className='row mb-5'>
              <MultiplePostsSearched
                separatorAdditionalClasses='mb-5'
                ignorePosts={0}
                showSeparator={true}
                showXploreButton={true}
                separatorText={
                  <h4 className='mb-0 fw-semibold text-black'>
                    Success Stories
                  </h4>
                }
                navigateBaseURL={constants.pageLinks.caseStudies.path}
                renderedFor={constants.resourcePageFilters.caseStudies.value}
                searchedposts={renderedCasestudies}
                totalPosts={searchedCasestudies}
                loadMorePosts={loadMorePosts}
              />
            </div>
            {/* Articles */}
            <div className='row mb-5'>
              <MultiplePostsSearched
                separatorAdditionalClasses='mb-5'
                ignorePosts={0}
                showSeparator={true}
                showXploreButton={true}
                separatorText={
                  <h4 className='mb-0 fw-semibold text-black f-inter-reg'>
                    Articles
                  </h4>
                }
                navigateBaseURL={constants.pageLinks.resources.path}
                renderedFor={constants.resourcePageFilters.articles.value}
                searchedposts={renderedArticles}
                totalPosts={searchedArticles}
                loadMorePosts={loadMorePosts}
              />
            </div>
          </div>
        </>
      ) : null}

      {/* Searched content */}
      {searchedContent && (
        <div className='custom-container'>
          <div className='row mb-4'>
            {!loading ? (
              <SearchResults
                searchedWordpressPosts={
                  activeResourcesTab ===
                  constants.resourcePageFilters.articles.value
                    ? searchedContent
                    : null
                }
                searchedYoutubeVideos={
                  activeResourcesTab ===
                    constants.resourcePageFilters.xgridTalks.value ||
                  activeResourcesTab ===
                    constants.resourcePageFilters.webinars.value
                    ? searchedContent
                    : null
                }
                searchedCaseStudies={
                  activeResourcesTab ===
                  constants.resourcePageFilters.caseStudies.value
                    ? searchedContent
                    : null
                }
              />
            ) : (
              <LoadingSkeleton />
            )}
          </div>
        </div>
      )}

      {/* Not Found from search */}
      {searchNotFound && (
        <div className='custom-container'>
          <div className='row mb-4'>
            <SearchNotFound
              title='Whoops, no matches'
              line1="We couldn't find any search results."
              line2='Give it another try'
              alt='Search not found icon'
              img={constants.images.searchNotFound}
            />
          </div>
        </div>
      )}

      {/* All */}
      {activeResourcesTab === constants.resourcePageFilters.all.value &&
      !searchedCasestudies.length &&
      !searchedArticles.length &&
      !searchedXgridTalks.length &&
      !inputValue ? (
        <>
          <div className='custom-container mobile-padding-x'>
            {/* XgridTalks */}
            <div className='row mb-5'>
              <XgridTalkMultiple
                source={constants.resourcePageFilters.all.value}
                separatorAdditionalClasses='mb-5'
                ignoreFirstVideo={0}
                separatorText={
                  <h4 className='mb-0 fw-semibold text-black f-inter-reg'>
                    XgridTalks
                  </h4>
                }
                maxVideosOnPage={6}
                fetchVideos={constants.youtubeApi.fetchXgridTalks}
                videos={xgridTalksVideos}
                postsLength={postsLength}
                videosCount={videosCount}
                setVideosCount={setVideosCount}
              />
            </div>

            {/* Podcasts */}
            <div className='row mb-5'>
              <XgridTalkMultiple
                source={constants.resourcePageFilters.all.value}
                separatorAdditionalClasses='mb-5'
                ignoreFirstVideo={0}
                separatorText={
                  <h4 className='mb-0 fw-semibold text-black f-inter-reg'>
                    {constants.resourcePageFilters.podcast.text}
                  </h4>
                }
                maxVideosOnPage={6}
                fetchVideos={constants.youtubeApi.podcast.fetchPodcast}
                videos={podcastVideos}
                postsLength={postsLengthPodcast}
                videosCount={videosCountPodcast}
                setVideosCount={setVideosCountPodcast}
              />
            </div>
            {/* Webinars */}
            <div className='row mb-5'>
              <XgridTalkMultiple
                source={constants.resourcePageFilters.all.value}
                separatorAdditionalClasses='mb-5'
                ignoreFirstVideo={0}
                separatorText={
                  <h4 className='mb-0 fw-semibold text-black f-inter-reg'>
                    Webinars
                  </h4>
                }
                maxVideosOnPage={6}
                fetchVideos={constants.youtubeApi.webinar.fetchWebinars}
                videos={webinarVideos}
                postsLength={postsLengthWebinar}
                videosCount={videosCountWebinar}
                setVideosCount={setVideosCountWebinar}
              />
            </div>
            {/* Case Studies */}
            <div className='row mb-5'>
              <MultiplePosts
                source={constants.resourcePageFilters.all.value}
                separatorAdditionalClasses='mb-5'
                postsPerPage={6}
                ignorePosts={0}
                showSeparator={true}
                showXploreButton={true}
                separatorText={
                  <h4 className='mb-0 fw-semibold text-black'>
                    Success Stories
                  </h4>
                }
                dataFetchCallback={getAllCaseStudies}
                navigateBaseURL={constants.pageLinks.caseStudies.path}
                renderedFor={constants.resourcePageFilters.caseStudies.value}
              />
            </div>
            {/*Whitepapers*/}
            <div className='row mb-5'>
              <MultiplePosts
                source={constants.resourcePageFilters.all.value}
                separatorAdditionalClasses='mb-5'
                postsPerPage={6}
                ignorePosts={0}
                showSeparator={true}
                showXploreButton={true}
                separatorText={
                  <h4 className='mb-0 fw-semibold text-black'>Whitepapers</h4>
                }
                dataFetchCallback={getAllWhitepaperCaseStudies}
                navigateBaseURL={constants.pageLinks.caseStudies.path}
                renderedFor={constants.resourcePageFilters.whitepapers.value}
              />
            </div>
            <div className='row'>
              {/* Articles */}
              <MultiplePosts
                source={constants.resourcePageFilters.all.value}
                separatorAdditionalClasses='mb-5'
                postsPerPage={6}
                ignorePosts={0}
                showSeparator={true}
                showXploreButton={true}
                separatorText={
                  <h4 className='mb-0 fw-semibold text-black f-inter-reg'>
                    Articles
                  </h4>
                }
                dataFetchCallback={getAllWordpressBlogPosts}
                navigateBaseURL={constants.pageLinks.resources.path}
                renderedFor={constants.resourcePageFilters.articles.value}
              />
            </div>
          </div>
        </>
      ) : null}

      {/* Xgrid Talks */}
      {activeResourcesTab === constants.resourcePageFilters.xgridTalks.value &&
        !searchedContent.length &&
        !searchNotFound && (
          <div className='custom-container'>
            <div className='row'>
              <XgridTalk
                maxVideosOnPage={1}
                showTitleAuthor={true}
                fetchVideos={constants.youtubeApi.fetchXgridTalks}
              />
            </div>
            <div className='row'>
              <XgridTalkMultiple
                source={constants.resourcePageFilters.xgridTalks.value}
                separatorText={<h5 className='mb-0'>Latest Talks</h5>}
                maxVideosOnPage={10}
                ignoreFirstVideo={1}
                separatorAdditionalClasses='mb-5 xgm-t-5'
                fetchVideos={constants.youtubeApi.fetchXgridTalks}
                videos={xgridTalksVideos}
                postsLength={postsLength}
                videosCount={videosCount}
                setVideosCount={setVideosCount}
              />
            </div>
          </div>
        )}

      {/* Podcast */}
      {activeResourcesTab === constants.resourcePageFilters.podcast.value &&
        !searchedContent.length &&
        !searchNotFound && (
          <div className='custom-container'>
            <div className='row'>
              <XgridTalk
                maxVideosOnPage={1}
                showTitleAuthor={true}
                fetchVideos={constants.youtubeApi.podcast.fetchPodcast}
              />
            </div>
            <div className='row'>
              <XgridTalkMultiple
                source={constants.resourcePageFilters.xgridTalks.value}
                separatorText={
                  <h5 className='mb-0'>
                    {constants.resourcePageFilters.podcast.text}
                  </h5>
                }
                maxVideosOnPage={10}
                ignoreFirstVideo={1}
                separatorAdditionalClasses='mb-5 xgm-t-5'
                fetchVideos={constants.youtubeApi.podcast.fetchPodcast}
                videos={podcastVideos}
                postsLength={postsLengthPodcast}
                videosCount={videosCountPodcast}
                setVideosCount={setVideosCountPodcast}
              />
            </div>
          </div>
        )}
      {/* Webinars */}
      {activeResourcesTab === constants.resourcePageFilters.webinars.value &&
        !searchedContent.length &&
        !searchNotFound && (
          <div className='custom-container'>
            <div className='row'>
              <XgridTalk
                maxVideosOnPage={1}
                showTitleAuthor={true}
                fetchVideos={constants.youtubeApi.webinar.fetchWebinars}
              />
            </div>
            <div className='row'>
              <XgridTalkMultiple
                source={constants.resourcePageFilters.xgridTalks.value}
                separatorText={<h5 className='mb-0'>Webinars</h5>}
                maxVideosOnPage={10}
                ignoreFirstVideo={1}
                separatorAdditionalClasses='mb-5 xgm-t-5'
                fetchVideos={constants.youtubeApi.webinar.fetchWebinars}
                videos={webinarVideos}
                postsLength={postsLengthWebinar}
                videosCount={videosCountWebinar}
                setVideosCount={setVideosCountWebinar}
              />
            </div>
          </div>
        )}
      {/* Articles */}
      {activeResourcesTab === constants.resourcePageFilters.articles.value &&
        !searchedContent.length &&
        !searchNotFound && (
          <div className='custom-container'>
            <FeaturedPost
              postsPerPage={1}
              dataFetchCallback={getAllWordpressBlogPosts}
              navigationBaseURL={constants.pageLinks.resources.path}
            />
            <div className='row'>
              <MultiplePosts
                source={constants.resourcePageFilters.articles.value}
                postsPerPage={10}
                showSeparator={true}
                ignorePosts={1}
                showXploreButton={true}
                separatorText='Latest Posts'
                separatorAdditionalClasses='mb-5 xgm-t-5'
                dataFetchCallback={getAllWordpressBlogPosts}
                navigateBaseURL={constants.pageLinks.resources.path}
                renderedFor={constants.resourcePageFilters.articles.value}
              />
            </div>
          </div>
        )}

      {/* Case Studies */}
      {activeResourcesTab === constants.resourcePageFilters.caseStudies.value &&
        !searchedContent.length &&
        !searchNotFound && (
          <div className='custom-container'>
            <FeaturedPost
              postsPerPage={1}
              dataFetchCallback={getAllCaseStudies}
              navigationBaseURL='/resources/case-studies/'
            />
            <div className='row'>
              <MultiplePosts
                source={constants.resourcePageFilters.caseStudies.value}
                postsPerPage={10}
                showSeparator={true}
                ignorePosts={1}
                showXploreButton={true}
                separatorText='Success Stories'
                separatorAdditionalClasses='mb-5 xgm-t-5'
                dataFetchCallback={getAllCaseStudies}
                navigateBaseURL={constants.pageLinks.caseStudies.path}
                renderedFor={constants.resourcePageFilters.caseStudies.value}
              />
            </div>
          </div>
        )}
      {/*Whitepapers*/}
      {activeResourcesTab === constants.resourcePageFilters.whitepapers.value &&
        !searchedContent.length &&
        !searchNotFound && (
          <div className='custom-container'>
            <FeaturedPost
              postsPerPage={1}
              dataFetchCallback={getAllWhitepaperCaseStudies}
              navigationBaseURL='/resources/case-studies/'
            />
            <div className='row'>
              <MultiplePosts
                source={constants.resourcePageFilters.caseStudies.value}
                postsPerPage={10}
                showSeparator={true}
                ignorePosts={1}
                showXploreButton={true}
                separatorText='Success Stories'
                separatorAdditionalClasses='mb-5 xgm-t-5'
                dataFetchCallback={getAllWhitepaperCaseStudies}
                navigateBaseURL={constants.pageLinks.caseStudies.path}
                renderedFor={constants.resourcePageFilters.whitepapers.value}
              />
            </div>
          </div>
        )}
    </div>
  );
};

export default Resources;
