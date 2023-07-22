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

// React Imports
import React, { useEffect, useState } from "react";

// Next Imports
import Head from "next/head";

// NPM Imports
import loadjs from "loadjs";

// Components import
import OpenPositionsSkeleton from "../components/open-positions-skeleton";
import NotFound from "../components/svg-with-message";

// Constants import
import constants from "../constants/constants";

/**
 * Loads FreshTeam script and renders data on page
 * @returns page
 */
function FreshTeam() {
  const [loading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [scriptInjected, setScriptInjected] = useState(false);

  useEffect(() => {
    const scriptExists = document.querySelector("#freshteam-careers");
    if (!scriptExists) {
      loadjs(constants.freshTeam.src, {
        success: () => {
          handleScriptLoad();
        },
        error: () => {
          setError(true);
          setLoading(false);
        },
        numRetries: 3,
        async: true
      })
    }
  }, [])

  useEffect(() => {
    /*
      When freshteam script is injected and its dom content is visible on screen,
      We listen for mutations/changes on DOM tree using MutationObserver API
      if div with id "job-desc-tmpl" is added to dom then we check if browsers's
      back button is pressed, if true then we remove  content of div "job-desc-tmpl"
      and display div with id "freshteam-careers"
      */
    if (scriptInjected) {
      const target = document.getElementById("job-desc-tmpl");
      const mutationObservable = () => {
        const observable = new MutationObserver(mutations => {

          // if content od "job-desc-tmpl" is removed from DOM
          if (mutations[0].target.id === "job-desc-tmpl") {
            const jobListElement = document.getElementById("freshteam-careers");
            window.onpopstate = () => {
              if((window.location.pathname === `${constants.pageLinks.openPositions.path}/`) && jobListElement){
                target.innerHTML = '';
                jobListElement.style.display = "block";
              }
            }
          }
        });

        observable.observe(target, { subtree: true, childList: true });
      }
      mutationObservable();
    }

  }, [scriptInjected])

  /**
   * Checks if dom element containing open positions is loaded, if not loaded then
   * retries after 1.5 seconds recursively for max 5 times
   */
  const handleScriptLoad = (retries = 0) => {
    retries = retries + 1;
    const jobsElem = document.querySelector("#freshteam-careers");
    if (jobsElem) {
      setLoading(false);
      setScriptInjected(true);
    }
    if (!jobsElem && retries < constants.openPositionsMaxRetryCounts) {
      setTimeout(function () { handleScriptLoad(retries) }, constants.openPositionsRetryInterval)
    }
  }

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://assets1.freshteam.com/assets/job_widget.css"
        ></link>
      </Head>
      <div id="freshteam-widget"></div>
      {
        loading && <OpenPositionsSkeleton />
      }
      {
        isError && <NotFound />
      }
    </>
  );
}

export default FreshTeam;
