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
import { useState } from "react";

//Next imports
import Image from "next/image";

// Component imports
import Button from "../components/button";

// TODO: will refactor this to become more reusable by adding more props
/**
 * Functional component which adds more rows of data under existing rows in UI on a button click
 * @param {{
 * data: Array,  // Array from where to add more rows to UI on button click
 * imagesPerRow: Number, // Number of rows to show by default on UI
 * }}
 * @returns component
 */
const LoadMoreSection = ({ data, imagesPerRow }) => {
  const [next, setNext] = useState(imagesPerRow);
  const handleMoreImages = () => {
    setNext(next + imagesPerRow);
  };

  return (
    <>
      <div className="row">
        {data?.slice(0, next)?.map((element, index) => (
          <div key={index} className="col-6 mb-5">
            <div className="team-slider-img-wrapper">
              <Image src={element.img} alt={element.name} />
            </div>
            <div className="team-slider-text-wrapper">
              <h4 className="fullname-text fw-500">{element.name}</h4>
              <h6 className="designation-text color-dark-grey fw-400">
                {element.designation}
              </h6>
            </div>
          </div>
        ))}
      </div>
      {next < data?.length && (
        <div className="d-flex justify-content-center">
          <Button
            clickEvent={handleMoreImages}
            label={"Load More"}
            isIcon={true}
            iconColor="white"
            classes="purple-btn text-white border-0 rounded-3 px-5 py-3"
          />
        </div>
      )}
    </>
  );
}

export default LoadMoreSection;
