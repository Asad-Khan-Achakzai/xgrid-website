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
 * Skeleton component for displaying while open positions script is not loaded
 * @returns Skeleton component
 */

const OpenPositionsSkeleton = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2">
                            <Skeleton className="mb-4" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <Skeleton height={40} className="mb-4" />
                        </div>
                        <div className="col-lg-4">
                            <Skeleton height={40} className="mb-4" />
                        </div>
                        <div className="col-lg-4">
                            <Skeleton height={40} className="mb-4" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <Skeleton height={40} className="mb-4" />
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="row">
                            <div className="col-lg-1">
                                <Skeleton className="mb-4" />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <Skeleton height={100} className="mb-4" />
                        </div>
                        <div className="col-lg-12">
                            <Skeleton height={100} className="mb-4" />
                        </div>
                        <div className="col-lg-12">
                            <Skeleton height={100} className="mb-4" />
                        </div>
                        <div className="col-lg-12">
                            <Skeleton height={100} className="mb-4" />
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="row">
                            <div className="col-lg-1">
                                <Skeleton className="mb-4" />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <Skeleton height={100} className="mb-4" />
                        </div>
                        <div className="col-lg-12">
                            <Skeleton height={100} className="mb-4" />
                        </div>
                        <div className="col-lg-12">
                            <Skeleton height={100} className="mb-4" />
                        </div>
                        <div className="col-lg-12">
                            <Skeleton height={100} className="mb-4" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OpenPositionsSkeleton;