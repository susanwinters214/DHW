import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from "next/script";


class MyDocument extends Document {


  render() {
    return (
      <Html lang="en">
        <Head>
          <script
            type="text/javascript"
            src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"
            defer
          ></script>
        </Head>
        <Script src="js/jquery.min.js" strategy="beforeInteractive"></Script>

        <body className="hidden-bar-wrapper">
          <Main />
          <NextScript />
          <div id="notifications"></div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
