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

//Xgrid Talks Component

//TO DO: Replace lorem ipsum text when the content is finalized.

//React imports
import { useEffect, useState, useCallback } from 'react';
import ModalVideo from 'react-modal-video';

//Next imports
import Image from 'next/image';

//Components imports
import Button from '../components/button';

//Constants imports
import constants from '../constants/constants';

// API imports
import { fetchYoutubePlaylist } from '../pages/api/api';

function XgridTalks() {
  const [isOpen, setOpen] = useState(false);
  const [currentVideoId, setVideoId] = useState(false);
  // videos fetching from API
  const [videos, setVideo] = useState([]);

  useEffect(() => {
    fetchYoutubePlaylistVideos('');
  }, []);

  /**
   * Fetch youtube videos
   */
  const fetchYoutubePlaylistVideos = useCallback(
    async (nextPageToken = '') => {
      const maxVideos = 3;
      try {
        const response = await fetchYoutubePlaylist(
          maxVideos,
          nextPageToken,
          constants.youtubeApi.fetchXgridTalks
        );
        const videoItems = response.data.items ? response.data.items : [];
        setVideo([...videos, ...videoItems]);
      } catch (error) {
        // TODO: will replace console with given design element in future such as Alert or something else
        console.error(error);
      }
    },
    [videos]
  );
  return (
    <>
      <div className='row justify-content-center'>
        <div className='col-md-6 col-12 text-center'>
          <div className='h1-replica XgridTalks-title f-lato-bold'>
            <h1> XgridTalks </h1>
          </div>
        </div>
      </div>
      {videos && videos.length > 2 ? (
        <div className='row mb-5 mt-5 align-items-center'>
          <div className='col-12 p-md-4 col-md-8'>
            {typeof window !== 'undefined' && (
              <ModalVideo
                channel='youtube'
                autoplay
                isOpen={isOpen}
                videoId={currentVideoId}
                onClose={() => setOpen(false)}
              />
            )}
            <div className='d-flex-col position-relative'>
              <div
                className='xgrid-talks-play-icon'
                onClick={() => {
                  setOpen(true);
                  setVideoId(videos[0].snippet.resourceId.videoId);
                }}
              >
                <Image
                  src={constants.icons.play}
                  alt='Play icon for videos'
                />
              </div>
              <div>
                <img
                  width='100%'
                  className='card-image-top mb-2 b-r'
                  src={
                    videos[0]?.snippet?.thumbnails.maxres
                      ? videos[0]?.snippet.thumbnails.maxres.url
                      : videos[0]?.snippet.thumbnails.high.url
                  }
                  alt="Video's thumbnail"
                />
              </div>
            </div>
          </div>
          <div className='col-12 talks-right-col p-md-4 col-md-4'>
            <div className='pb-md-3 col-12 pt-3 pt-md-0'>
              <div className='xgrid-talks-right-section'>
                <div className='position-relative d-flex-col'>
                  <div
                    className='xgrid-talks-play-icon'
                    onClick={() => {
                      setOpen(true);
                      setVideoId(videos[1].snippet.resourceId.videoId);
                    }}
                  >
                    <Image
                      src={constants.icons.play}
                      alt='Play icon for videos'
                    />
                  </div>
                  <img
                    width='100%'
                    className='card-image-top mb-2 b-r'
                    src={
                      videos[1]?.snippet?.thumbnails.maxres
                        ? videos[1]?.snippet.thumbnails.maxres.url
                        : videos[1]?.snippet.thumbnails.high.url
                    }
                    alt="Video's thumbnail"
                  />
                </div>
              </div>
            </div>
            <div className='pt-3 pt-md-2'>
              <div className='text-end'>
                <div
                  className='position-relative d-flex-col'
                  onClick={() => {
                    setOpen(true);
                    setVideoId(videos[2].snippet.resourceId.videoId);
                  }}
                >
                  <div className='xgrid-talks-play-icon'>
                    <Image
                      src={constants.icons.play}
                      alt='Play icon for videos'
                    />
                  </div>
                  <img
                    width='100%'
                    className='card-image-top mb-2 b-r'
                    src={
                      videos[2]?.snippet?.thumbnails.maxres
                        ? videos[2]?.snippet.thumbnails.maxres.url
                        : videos[2]?.snippet.thumbnails.high.url
                    }
                    alt="Video's thumbnail"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <div className='row text-center'>
        <div className='col-12'>
          <Button
            label={'Xplore More'}
            hrefLink={constants.pageLinks.resources.path}
            isIcon={true}
            iconColor='white'
            classes='purple-btn text-white border-0 rounded-3 px-5 py-3'
          />
        </div>
      </div>
    </>
  );
}
export default XgridTalks;
