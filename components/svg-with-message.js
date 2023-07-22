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
import Head from "next/head";

// React imports
import React from "react";

// Next imports
import Image from "next/image";

// Constants imports
import constants from "../constants/constants";

/**
 * Component for displaying SVG and message for user in-case of nothing found or thank you message
 * @returns component
 */
const SvgWithMessage = ({
  title=constants.props.components.notFound.title,
  line1=constants.props.components.notFound.line1,
  line2=constants.props.components.notFound.line2,
  alt=constants.props.components.notFound.alt,
  img=constants.images.error
}) => {
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          type="image/x-icon"
          sizes="16*16"
          href="/images/Favicon16px.ico"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
          crossOrigin="anonymous"
        />
      </Head>
      <div className="col-12 text-center">
        <div className="my-4">
          <Image
            src={img}
            alt={alt}
          />
        </div>
        <h3 className="fw-bold">{title}</h3>
        <p className="m-0">{line1}</p>
        <p>{line2}</p>
      </div>
    </>
  );
};

export default SvgWithMessage;
