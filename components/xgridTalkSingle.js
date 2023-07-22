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
import React, { useEffect, useState, Fragment } from 'react';
import ModalVideo from 'react-modal-video';

// Next imports
import Image from 'next/image';

//Constants imports
import constants from '../constants/constants';

// API imports
import { fetchYoutubePlaylist } from '../pages/api/api';

/**
 * Component for displaying single youtube video on top of the component, expecting following
 * props. Displaying Title and Author info
 * @param {{
 * maxVideosOnPage // Videos per page
 * fetchVideos // fetch videos for
 * }} param0
 * @returns
 */
const XgridTalk = ({ maxVideosOnPage, fetchVideos }) => {
  // Videos
  const [videos, setVideo] = useState([]);
  // Video modal
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    fetchYoutubePlaylistVideos(maxVideosOnPage);
  }, []);

  /**
   * Function for getting videos from youtube playlist
   * @param {*} perPage
   */
  const fetchYoutubePlaylistVideos = (perPage) => {
    fetchYoutubePlaylist(perPage, null, fetchVideos).then((res) => {
      try {
        setVideo(res.data.items);
      } catch (err) {
        console.err(err);
      }
    });
  };

  return (
    <>
      {videos?.map((res) => {
        return (
          <Fragment key={res.snippet.resourceId.videoId}>
            <ModalVideo
              channel='youtube'
              autoplay
              isOpen={isOpen}
              videoId={res.snippet.resourceId.videoId}
              onClose={() => setOpen(false)}
            />
            <div
              className='col-lg-8 mb-lg-5 cursor-pointer position-relative'
              onClick={() => setOpen(true)}
            >
              <div className='video-play-icon position-absolute d-flex justify-content-center align-items-center w-94 h-100'>
                <div className='play-icon'>
                  <Image
                    src={constants.icons.play}
                    alt='Play icon for videos'
                  />
                </div>
              </div>
              <img
                className='b-r'
                width='100%'
                src={res.snippet.thumbnails.maxres.url}
                alt="Video's thumbnail"
              />
            </div>
            <div className='col-lg-4 responsive-styles'>
              {/* Title */}
              <div className='mb-5'>
                <h3 className='fw-semibold text-dark mb-3 f-inter-reg'>
                  {res?.snippet.title}
                </h3>
              </div>
              {/* Author info */}
              <div className='d-flex'>
                <div>
                  <h4 className='fw-semibold text-dark mb-0 f-inter-reg'>
                    {res.snippet.channelTitle}
                  </h4>
                </div>
              </div>
            </div>
          </Fragment>
        );
      })}
    </>
  );
};

export default XgridTalk;
