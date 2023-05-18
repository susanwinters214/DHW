import Head from "next/head";
import "../styles/globals.css";
import "../styles/bootstrap.css";
import "../styles/style.css";
import "../styles/responsive.css";
import "../styles/susan.css";
import Layout from "../components/layout/layout";
import Script from "next/script";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { NextSeo } from 'next-seo';
import { BreadcrumbJsonLd } from 'next-seo';

import * as ga from "./lib/ga";

function MyApp({ Component, pageProps }) {

  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);




  return (
    <Layout>
      <Head>
        {/* BING 
        <meta name="msvalidate.01" content="4DE9FB569233D165857C1F739B5D3CC1" />
        */}

        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="author" content="Susan Winters" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          href="https://www.dallashomewatch.com/images/favicon.ico"
          type="image/x-icon"
        ></link>
        {/* meta tag for pinterest */}
        <meta
          name="p:domain_verify"
          content="9d804dee0d1569f3434f8563d1767c9d"
        />

           <NextSeo
          useAppDir={true}
          facebook={{ appId: '100092566267916' }}
          themeColor="#00204c"
          titleTemplate="%s | Next SEO"
        />

      <BreadcrumbJsonLd
      itemListElements={[
        {
          position: 1,
          name: 'Home Watch Services',
          item: 'https://www.dallashomewatch.com/home-watch-services',
        },
        {
          position: 2,
          name: 'Key Holder Services',
          item: 'https://www.dallashomewatch.com/keyholder-services',
        },
        {
          position: 3,
          name: 'Concierge Services',
          item: 'https://www.dallashomewatch.com/concierge-services',
        },
        {
          position: 4,
          name: 'FAQs',
          item: 'https://www.dallashomewatch.com/faqs',
        },
      ]}
    />   

      </Head>

 <Script src="js/jquery.min.js" strategy="afterInteractive"></Script>
      <Script
        src="https://www.dallashomewatch.com/js/popper.min.js"
        strategy="afterInteractive"
      ></Script>
      <Script
        src="https://www.dallashomewatch.com/js/jquery.fancybox.js"
        strategy="afterInteractive"
      ></Script>
      <Script src="js/appear.js" strategy="afterInteractive"></Script>
      <Script
        src="https://www.dallashomewatch.com/js/parallax.min.js"
        strategy="afterInteractive"
      ></Script>
      <Script src="js/tilt.jquery.min.js" strategy="afterInteractive"></Script>
      <Script
        src="js/jquery.paroller.min.js"
        strategy="afterInteractive"
      ></Script>
      <Script src="js/owl.js" strategy="afterInteractive"></Script>
      <Script src="js/wow.js" strategy="afterInteractive"></Script>
      <Script src="js/nav-tool.js" strategy="afterInteractive"></Script>
      {/* 
      <Script src="js/jquery-ui.js" strategy="afterInteractive"></Script>
  */}

      <Script src="js/script.js" strategy="afterInteractive"></Script>

      <div className="page-wrapper">
        <Component {...pageProps} />
      </div>
    </Layout>
  );
}

export default MyApp;
