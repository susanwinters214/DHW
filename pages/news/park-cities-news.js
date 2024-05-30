import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
//import Font from "next/font";

function ParkCitiesNewsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>Park Cities News 2024</title>
        <link
          rel="canonical"
          href="https://www.dallashomewatch.com/news/park-cities-news"
        />
        <meta name="keywords" content="park cities news" />
        <meta
          name="description"
          content="Tina Lawson, owner of Dallas Home Watch, was recently featured in the Real Talk section of the Park Cities News"
        />

        <meta property="fb:app_id" content="8620778781329629" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Dallas Home Watch" />
        <meta property="og:type" content="article" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/profile.php?id=100092566267916"
        ></meta>
        <meta
          property="og:url"
          content="https://www.dallashomewatch.com/news/park-cities-news"
        />
        <meta property="og:title" content="Park Cities News 2024" />
        <meta
          property="og:description"
          content="Park Cities News recently interviewed Tina Lawson, owner of Dallas Home Watch, for the Real Talk section of their newspaper.
"
        />
        <meta
          property="og:image"
          content="https://www.dallashomewatch.com/images/og/park-cities-news-coverage.jpg"
        />
        <meta property="og:image:width" content="1200px" />
        <meta property="og:image:height" content="630px" />
        <meta property="og:image:alt" content="Park Cities People Newspaper" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@dallashomewatch" />
        <meta name="twitter:creator" content="@susanwinters214" />

        <meta
          name="twitter:title"
          content="Park Cities News features Dallas Home Watch owner, Tina Lawson"
        />
        <meta
          name="twitter:description"
          content="Tina Lawson, owner of Dallas Home Watch, was recently featured in the Real Talk section of the Park Cities News"
        />
        <meta
          name="twitter:image"
          content="https://www.dallashomewatch.com/images/park-cities-news-coverage.jpg"
        />
      </Head>
      {/* Facebook Like JS Code*/}
      <div id="fb-root"></div>
      <script
        async
        defer
        crossOrigin="anonymous"
        src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v16.0&appId=8620778781329629&autoLogAppEvents=1"
        nonce="P6S6t9vu"
      ></script>

      {/* insert top banner with Page Title & Breadcrumb*/}
      <section className="page-title">
        <Image
          src="/images/park-cities-news-coverage.jpg"
          alt="Park Cities News"
          style={{
            zIndex: -99,
          }}
          layout="fill"
          objectFit="cover"
        />
        <div className="auto-container">
          <h1>Park Cities News</h1>
          <ul className="page-breadcrumb">
            <li>
              <Link href="/">home</Link>
            </li>
            <li>Park Cities People Newspaper</li>
          </ul>
        </div>
      </section>

      {/* insert section component with Welcome*/}
      <section className="welcome-section style-two">
        <div className="auto-container">
          <div className="inner-container">
            <div className="clearfix">
              {/* Content Column */}
              <div className="content-column col-lg-12 col-md-12 col-sm-12">
                <div className="inner-column">
                  {/* Sec Title */}
                  <div className="sec-title">
                    <h2 className="pageTitle">Park Cities People News</h2>
                    <h3 className="centered">
                      Park Cities Newspaper features Tina Lawson
                    </h3>
                    <p className="text">
                      Park Cities People newspaper recently featured Tina Lawson
                      in their Real Talk section. The image below is a snapshot
                      of the news article compiled by William Taylor.
                    </p>
                 <p>Homeowners designate how frequently Dallas Home Watch discreetly checks on their properties. Lawson notifies them about any issues that might arise and works with them to solve any problems.</p>
                    <br />
                    <div className="image centered">
                      <Image
                        src="/images/preston-hollow-newspaper-tina-lawson.jpg"
                        alt="Tina Lawson featured in Preson Hollow Newspaper June 2024 issue"
                        width={600}
                        height={450}
                      />{" "}
                      <br /> <br />
                    </div>{" "}
                    <div className="row">
                      <div className="column col-lg-6 col-md-6 col-sm-12"><br />
                        <h2 className="smallh2">
                          Dallas Home Watch looks after unoccupied homes in the Park Cites area.
                          Home checks are performed weekly. Photos are taken during the home inspection and sent with the report to the homeowner.
                         
                        </h2>
                        <h3>Ready To Hire A Home Watch Service Business?</h3>
                        <br />

                        <a
                          href="tel:972-982-7050"
                          className="theme-btn btn-style-two"
                        >
                          <span className="txt">
                            CALL DALLAS HOME WATCH
                            <i className="phone" />
                          </span>

                          <br />
                        </a>
                      </div>
                      <div className="column col-lg-6 col-md-6 col-sm-12">
                        {" "}
                        <div className="image centered">
                          <Image
                            src="/images/packages-at-the-door.jpg"
                            alt="packages left on the front porch"
                            width={600}
                            height={450}
                          />
                        </div>{" "}
                        <br />
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-page-section centered">
        <div className="column col-lg-12 col-md-6 col-sm-6"></div>
      </section>
    </Fragment>
  );
}

export default ParkCitiesNewsPage;
