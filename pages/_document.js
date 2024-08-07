import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Google Search Console */}
          <meta
            name="google-site-verification"
            content="YM2JCV00ZJ7zOQKE2CmpnuZCcMsLUhtR4AeB5q2btuw"
          />
        </Head>
        <Script
          src="https://www.dallashomewatch.com/js/jquery.min.js"
          strategy="beforeInteractive"
        ></Script>

        <body className="hidden-bar-wrapper">
          <Main />
          <NextScript />
          <div id="notifications"></div>

          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-7MNME0NRY6`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7MNME0NRY6', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />

          {/* THIS IS THE OLD RECORD
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-8N43XDXPPJ"
            strategy="afterInteractive"
          />
     <Script id="google-analytics" strategy="afterInteractive">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-8N43XDXPPJ');
        `}
          </Script>
          
          
          */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
