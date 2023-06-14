import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

function ResourcesPage(props) {
 
   
  return (
    <Fragment>
      <Head>
        <title>Home Watch Resources and Referrals</title>
        <meta name="robots" content="noindex"></meta>
        <Link
          aria-label="go to this page"
          rel="canonical"
          href="https://www.dallashomewatch.com/resources"
        />
        <meta
          name="description"
          content="Dallas Home Watch shares resources and referrals for Home Watch Businesses and Home Watch Clients. This page contains discounts to places in Dallas. Save money by visiting the Dallas Home Watch Resources page often."
        />
        <meta name="keywords" content="home watch resources and referrals" />
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
          content="https://www.dallashomewatch.com/resources"
        />
        <meta
          property="og:title"
          content="Home Watch Resources and Referrals"
        />
        <meta
          property="og:description"
          content="Dallas Home Watch shares resources and referrals for Home Watch Businesses and Home Watch Clients. This page contains discounts to places in Dallas. Save money by visiting the Dallas Home Watch Resources page often."
        />
        <meta
          property="og:image"
          content="https://www.dallashomewatch.com/images/og/dallas-home-watch-opening-doors.jpg"
        />
        <meta property="og:image:width" content="1200px" />
        <meta property="og:image:height" content="630px" />
        <meta
          property="og:image:alt"
          content="home watch professional entering front door of luxury home"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@dallashomewatch" />
        <meta name="twitter:creator" content="@susanwinters214" />

        <meta
          name="twitter:title"
          content="Home Watch Resources and Referrals"
        />
        <meta
          name="twitter:description"
          content="Dallas Home Watch shares resources and referrals for Home Watch Businesses and Home Watch Clients. This page contains discounts to places in Dallas. Save money by visiting the Dallas Home Watch Resources page often."
        />
        <meta
          name="twitter:image"
          content="https://www.dallashomewatch.com/images/og/dallas-home-watch-opening-doors.jpg"
        />
      </Head>
      {/* insert top banner with Page Title & Breadcrumb*/}
      <section className="page-title">
        <Image
          src="/images/background/dallas-texas-skyline.jpg"
          alt="home watch resources"
          style={{
            zIndex: -99,
          }}
          layout="fill"
          objectFit="cover"
        />
        <div className="auto-container">
          <h1>Resources</h1>
          <ul className="page-breadcrumb">
            <li>
              <Link href="/">home</Link>
            </li>
            <li>Resources</li>
          </ul>
        </div>
      </section>

      <section className="case-section">
        <div className="auto-container">
          <div className="inner-container">
            <div className="clearfix">
              {/* Content Column */}
              <div className="content-column col-lg-8 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div className="sec-title first">
                    <h2 className="pushdown25">Home Watch Referrals</h2>
                  </div>
                  <div className="text">
                    <p className="first">
                      Are you looking for a Home Watch Company that is not in
                      Dallas, Texas? <br />
                      We are currently working on building a list of Home Watch
                      Companies that are located in different areas. We will
                      only list Home Watch Companies that are: bonded, insured
                      and have had a background check verfied thru a third party
                      organization.
                    </p>

                    <Link
                      href="https://ourhomewatcher.com/about/"
                      rel="noopener noreferrer"
                    >
                      Our Home Watcher LLC.
                    </Link>
                    <br />
                    <br />
                    <p>
                      If you own a Home Watch company outside of the Dallas,
                      Texas area and you are a Certified Home Watch Professional
                      that would like us to add a link to your website - please
                      send an email to: dallashomewatch@gmail.com.{" "}
                    </p>
                  </div>
                </div>
              </div>
              {/* Image Column */}
              <div className="image-column col-lg-4 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div
                    className="image wow fadeInLeft pushdown50"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="image centered">
                      <Image
                        src="/images/logos/home-watch-certified.jpg"
                        alt="Tina Lawson"
                        width={300}
                        height={300}
                      />
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

  export default ResourcesPage;