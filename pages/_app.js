import Head from "next/head";
import "../styles/globals.css";
import "../styles/bootstrap.css";
import "../styles/style.css";
import "../styles/responsive.css";
import "../styles/susan.css";
import Layout from "../components/layout/layout";
import Script from "next/script";


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="googlebot" content="noindex"></meta>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="author" content="Susan Winters" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <link rel="icon" href="images/favicon.ico" type="image/x-icon"></link>
      </Head>

      <Script src="js/jquery.min.js" strategy="afterInteractive"></Script>
      <Script src="js/popper.min.js" strategy="afterInteractive"></Script>
      <Script src="js/jquery.fancybox.js" strategy="afterInteractive"></Script>
      <Script src="js/appear.js" strategy="afterInteractive"></Script>
      <Script src="js/parallax.min.js" strategy="afterInteractive"></Script>
      <Script src="js/tilt.jquery.min.js" strategy="afterInteractive"></Script>
      <Script
        src="js/jquery.paroller.min.js"
        strategy="afterInteractive"
      ></Script>
      <Script src="js/owl.js" strategy="afterInteractive"></Script>
      <Script src="js/wow.js" strategy="afterInteractive"></Script>
      <Script src="js/nav-tool.js" strategy="afterInteractive"></Script>
      <Script src="js/jquery-ui.js" strategy="afterInteractive"></Script>
      <Script src="js/bootstrap.min.js" strategy="afterInteractive"></Script>
      <Script src="js/script.js" strategy="afterInteractive"></Script>
      <div className="page-wrapper">
        <Component {...pageProps} />
      </div>
    </Layout>
  );
}

export default MyApp;
