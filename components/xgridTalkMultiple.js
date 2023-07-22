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
import React, {
  useEffect,
  useState,
  useCallback,
  useContext,
  Fragment,
} from 'react';

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
 * fetchVideos // Prop to fetch videos for
 * videos // List of videos
 * postsLength // Length of the total videos
 * videosCount // length of the videos fetched
 * setVideosCount // Function to set videos count
 * }}
 * @returns component
 */
const XgridTalkMultiple = ({
  source,
  separatorText,
  separatorAdditionalClasses,
  maxVideosOnPage,
  ignoreFirstVideo,
  fetchVideos,
  videos,
  postsLength,
  videosCount,
  setVideosCount,
}) => {
  // Loading state
  const [loading, isLoading] = useState(false);
  // videos per page to display
  const { videosPerPage, setVideosPerPage } = useContext(AppContext);
  // Vido modal state
  const [isOpen, setOpen] = useState(false);
  // Current video ID state
  const [currentVideoId, setCurrentVideoId] = useState();
  // Last page state
  const [isLastPage, setLastPage] = useState(false);
  useEffect(() => {
    // set initially 6 for all filter else 10 for specific
    if (source === constants.resourcePageFilters.all.value) {
      setVideosPerPage(6, source);
    } else {
      setVideosPerPage(10, source);
    }
  }, []);

  /**
   * Function for loading more youtube playlist video
   */
  const loadMoreVideos = () => {
    const nextVideosToFetch =
      source === constants.resourcePageFilters.all.value
        ? videosPerPage.allTab + 3
        : videosPerPage.xgridTalksTab + 3;
    isLoading(false);
    setVideosCount(
      nextVideosToFetch > postsLength ? postsLength : nextVideosToFetch
    );
    setVideosPerPage(nextVideosToFetch, source);
  };

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
      {videos.length > 0 && (
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
        videos.length > 0 &&
        videos.slice(ignoreFirstVideo, videosCount).map((res) => {
          return (
            <Fragment key={res.snippet.resourceId.videoId}>
              {res?.snippet?.thumbnails &&
              Object.keys(res?.snippet?.thumbnails).length ? (
                <div
                  className='col-lg-4 mb-5 col-md-6 cursor-pointer'
                  onClick={() => setVideoModal(res.snippet.resourceId.videoId)}
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
                          : res.snippet.thumbnails.high.url
                      }
                      alt="Video's thumbnail"
                    />
                  </div>
                </div>
              ) : null}
            </Fragment>
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
            isDisabled={videosCount >= postsLength}
            isIcon={true}
            clickEvent={loadMoreVideos}
          />
        </div>
      )}
    </>
  );
};

export default XgridTalkMultiple;
