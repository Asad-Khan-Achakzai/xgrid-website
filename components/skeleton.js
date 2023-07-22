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

// Third party
import Skeleton from "react-loading-skeleton";

/**
 * Skeleton component for displaying while fetching data from API
 * TODO: Make it more generic
 * @returns Skeleton component
 */
const LoadingSkeleton = () => {
  return (
    <>
      <div className="col-lg-4">
        <Skeleton height={100} className="mb-4" />
        <Skeleton count={5} />
      </div>
      <div className="col-lg-4">
        <Skeleton height={100} className="mb-4" />
        <Skeleton count={5} />
      </div>
      <div className="col-lg-4">
        <Skeleton height={100} className="mb-4" />
        <Skeleton count={5} />
      </div>
    </>
  );
};

export default LoadingSkeleton;
