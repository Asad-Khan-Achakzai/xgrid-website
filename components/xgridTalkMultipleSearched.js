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

// React imports
import React, { useEffect, useState, useCallback, useContext } from 'react';

// Next imports
import Image from 'next/image';

// 3rd party imports
import ModalVideo from 'react-modal-video';

//Components imports
import Separator from './separator';
import LoadingSkeleton from './skeleton';
import Button from './button';

// Constants import
import constants from '../constants/constants';

// API imports
import { fetchYoutubePlaylist } from '../pages/api/api';

// Context Api imports
import { AppContext } from '../context/appContext';

/**
 * Component for displaying multiple videos in component, 3 columns grid and expecting the
 * following props
 * @param {{
 * source: // (All tab | Xgrid talks) from where request to fetch Xgrid talks is made
 * separatorText, // Text for separator
 * separatorAdditionalClasses, // Additional classes for separator
 * maxVideosOnPage, // Max videos on page (First load)
 * ignoreFirstVideo // Prop for ignoring any video from array
 * searchedVideos // Array of videos searched and rendered
 * totalPosts // Total list of videos searched
 * loadMorePosts // Function to load more videos
 * }}
 * @returns component
 */
const XgridTalkMultipleSearched = ({
  source,
  separatorText,
  separatorAdditionalClasses,
  maxVideosOnPage,
  ignoreFirstVideo,
  searchedVideos,
  totalPosts,
  loadMorePosts,
}) => {
  // videos fetching from API
  const [videos, setVideo] = useState([]);
  // Loading state
  const [loading, isLoading] = useState(false);
  // videos per page to display
  const { videosPerPage, setVideosPerPage } = useContext(AppContext);
  // Vido modal state
  const [isOpen, setOpen] = useState(false);
  // Current video ID state
  const [currentVideoId, setCurrentVideoId] = useState();
  // Posts length
  const [postsLength, setPostsLength] = useState();
  // No. of videos on UI
  const [videosCount, setVideosCount] = useState(
    source === constants.resourcePageFilters.all.value
      ? videosPerPage.allTab
      : videosPerPage.xgridTalksTab
  );

  /**
   * Function for getting videoID and setting local state for Video Modal
   * @param {{
   * videoId // Youtube video ID
   * }} videoId
   */
  const setVideoModal = (videoId) => {
    setOpen(true);
    setCurrentVideoId(videoId);
  };

  return (
    <>
      {searchedVideos.length > 0 && (
        <div className={`col-12 ${separatorAdditionalClasses}`}>
          <Separator
            innerContent={separatorText}
            classes='pb-3 border-bottom'
          />
        </div>
      )}

      <ModalVideo
        channel='youtube'
        autoplay
        isOpen={isOpen}
        videoId={currentVideoId}
        onClose={() => setOpen(false)}
      />

      {!loading ? (
        searchedVideos.length > 0 &&
        searchedVideos.slice(ignoreFirstVideo, videosCount).map((res) => {
          return (
            <>
              <div
                className='col-lg-4 mb-5 col-md-6 cursor-pointer'
                onClick={() => setVideoModal(res.id.videoId)}
              >
                <div className='card border-0 h-100 position-relative'>
                  <div className='video-play-icon video-play-icon position-absolute d-flex justify-content-center align-items-center w-100 h-100'>
                    <div className='play-icon'>
                      <Image
                        src={constants.icons.play}
                        alt='Play icon for videos'
                      />
                    </div>
                  </div>
                  <img
                    width='100%'
                    className='card-image-top mb-2 b-r'
                    src={
                      res.snippet.thumbnails.maxres
                        ? res.snippet.thumbnails.maxres.url
                        : res.snippet.thumbnails.medium.url
                    }
                    alt="Video's thumbnail"
                  />
                </div>
              </div>
            </>
          );
        })
      ) : (
        <LoadingSkeleton />
      )}

      {!isLoading && <LoadingSkeleton />}
      {videos.length > 0 && (
        <div className='col-lg-12 text-center xgm-b-5 mt-5'>
          <Button
            label='Xplore More'
            classes='px-5 border py-3 rounded-3 purple-btn text-white f-inter-reg'
            isDisabled={totalPosts >= searchedVideos}
            isIcon={true}
            clickEvent={loadMorePosts}
          />
        </div>
      )}
    </>
  );
};

export default XgridTalkMultipleSearched;
