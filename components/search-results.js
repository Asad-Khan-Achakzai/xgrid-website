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

// Next imports
import { useRouter } from "next/router";
import Image from "next/image";

// React imports
import React, { useState } from "react";
import ModalVideo from "react-modal-video";

// Component imports
import SinglePost from "./singlePost";

// Constants import
import constants from "../constants/constants";

/**
 * Component to show search results of one resource at a time.
 * Resources are Wordpress, Youtube videos and Case Studies
 * @param {
 * searchedWordpressPosts: search data for wordpress
 * searchedYoutubeVideos: search data for youtube
 * searchedCaseStudies: search data for case studies
 * }
 * @returns component
 */
const SearchResults = ({ searchedWordpressPosts, searchedYoutubeVideos, searchedCaseStudies }) => {
  // Router
  const router = useRouter();
  // Video modal state
  const [isOpen, setOpen] = useState(false);
  // Current video ID state
  const [currentVideoId, setCurrentVideoId] = useState();

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
      { searchedWordpressPosts?.map(content =>
        <SinglePost content={content} navigateBaseURL={constants.pageLinks.resources.path} />)
      }
      { searchedCaseStudies?.map(content => (
        <SinglePost content={content} navigateBaseURL={constants.pageLinks.caseStudies.path} />))
      }

      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId={currentVideoId}
        onClose={() => setOpen(false)}
      />

      {searchedYoutubeVideos?.map((res) => {
        return (
          <div
            className="col-lg-4 mb-5 col-md-6 cursor-pointer"
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
                width="100%"
                className="card-image-top mb-2 b-r"
                src={
                  res.snippet.thumbnails.maxres
                    ? res.snippet.thumbnails.maxres.url
                    : res.snippet.thumbnails.medium.url
                }
              />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default SearchResults;
