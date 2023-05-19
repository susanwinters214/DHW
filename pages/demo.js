import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

function DemoPage(props) {
  return (
    <Fragment>
      <Head>
        <title>
          Home Watch FAQs - Dallas Home Watch Frequently Asked Questions
        </title>
        <link rel="canonical" href="https://www.dallashomewatch.com/demo" />
        <meta name="description" content="Home Watch demo page for homeowner" />

        <meta property="fb:app_id" content="8620778781329629" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Dallas Home Watch" />
        <meta property="og:type" content="article" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/profile.php?id=100092566267916"
        ></meta>
        <meta name="keywords" content="home watch demo" />
        <meta
          property="og:url"
          content="https://www.dallashomewatch.com/demo"
        />
        <meta property="og:title" content="Home Watch demo" />
        <meta
          property="og:description"
          content="Home Watch demo page for homeowner"
        />
        <meta
          property="og:image"
          content="https://www.dallashomewatch.com/images/background/questions.jpg"
        />
        <meta property="og:image:width" content="1200px" />
        <meta property="og:image:height" content="630px" />
        <meta
          property="og:image:alt"
          content="question marks for frequently asked questions"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@dallashomewatch" />
        <meta name="twitter:creator" content="@susanwinters214" />

        <meta
          name="twitter:title"
          content="Home Watch demo"
        />
        <meta
          name="twitter:description"
          content="Home Watch FAQs - Dallas Home Watch Frequently Asked Questions. Get answers to frequently asked questions about Home Watch and the services we provide."
        />
        <meta
          name="twitter:image"
          content="https://www.dallashomewatch.com/images/background/questions.jpg"
        />
      </Head>
      {/* insert top banner with Page Title & Breadcrumb*/}
      <section className="page-title">
        <Image
          src="/images/background/questions.jpg"
          alt="frequently asked questions about home watch"
          style={{
            zIndex: -99,
          }}
          layout="fill"
          objectFit="cover"
        />
        <div className="auto-container">
          <h1>Home Watch Demo</h1>
          <ul className="page-breadcrumb">
            <li>
              <Link href="/">home</Link>
            </li>
            <li>demo</li>
          </ul>
        </div>
      </section>
      {/* insert top photo section*/}
      <section className="services-detail-section">
        <div className="auto-container">
          <div className="inner-container">
            <div className="lower-content">
              <h2 className="pageTitle">this is a demo page</h2>
              <br />
              <h3>Page used for testing purposes only</h3>
              <p>
                Dallas Home Watch is located at 13101 Preston Road Suite 110410,
                Dallas, Texas 75240
              </p>
              <h3 className="pt-25">
                Does Dallas Home Watch have a Facebook page?
              </h3>
              <p>
                Yes, you can find the Facebook page of Dallas Home Watch here:{" "}
                <Link
                  href="https://www.facebook.com/profile.php?id=100092566267916"
                  target="_blank"
                >
                  Dallas Home Watch Facebook Page
                </Link>
              </p>
             
             
            </div>
          </div>
        </div>
      </section>

 

      {/* insert section component CTA*/}

   
    </Fragment>
  );
}

export default DemoPage;
