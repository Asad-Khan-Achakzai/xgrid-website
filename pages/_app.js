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

//Importing styles
import "../styles/global.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-modal-video/scss/modal-video.scss";

//Next imports
import Head from "next/head";

//Components imports
import Layout from "../components/layout";

// Helpers import
import { getCanonicalUrl } from "../helpers/string";

// Context Api imports
import { AppProvider } from "../context/appContext";

function MyApp({ Component, pageProps }) {
  const canonicalUrl = getCanonicalUrl();

  return (
    <AppProvider>
      <Layout>
        <Head>
          <title>Xgrid - Cloud Services & Custom Application Development</title>
          <link
            rel="shortcut icon"
            type="image/x-icon"
            sizes="16*16"
            href="/images/Favicon16px.ico"
          />
          <link rel="canonical" href={canonicalUrl} />
          <meta
            name="description"
            content="Cloud Services & Custom Application Development"
          />
          {/* Google Tag Manager (noscript) */}
          <script id="google-tag-manager" strategy="afterInteractive">
            {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KKX4WF8')
          `}
          </script>
          {/* Meta tag for SEO */}
          <meta name="robots" content="noindex, nofollow" />
        </Head>
        {/* Bootstrap 5 */}
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
          crossOrigin="anonymous"
        />
        <Component {...pageProps} />
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KKX4WF8"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
      </Layout>
    </AppProvider>
  );
}

export default MyApp;
