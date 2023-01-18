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

<script async src="https://www.googletagmanager.com/gtag/js?id=G-8N43XDXPPJ"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date());

  gtag('config', 'G-8N43XDXPPJ');
</script>
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
