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
import React from "react";

// Component imports
import Button from "./button";

const NewsLetter = () => {
  return (
    <>
      <div className="col-lg-6 col-md-12 ps-lg-0 mb-sm-4">
        <div className="ps-lg-5">
          <h2>
            Subscribe to our
            <span className="d-block color-purple">newsletter</span>
          </h2>
        </div>
      </div>
      <div className="col-lg-6 col-md-12 d-lg-flex d-md-flex align-items-center newsletter-small-devices">
        <input
          placeholder="Email address"
          className="form-control me-2 p-2"
        />
        <Button
          label="Subscribe"
          classes="m-0 border-0 rounded-3 p-2 purple-btn text-white px-4"
        />
      </div>
    </>
  );
};

export default NewsLetter;
