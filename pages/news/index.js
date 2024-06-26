import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";

function NewsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>Dallas Home Watch News | Home Watch News in Dallas</title>
        <link rel="canonical" href="https://www.dallashomewatch.com/news" />
        <meta
          name="description"
          content="Dallas Home Watch News from social media sites and press releases. Dallas Home Watch is a member of the NHWA and shares industry news about Home Watch."
        />
        <meta name="keywords" content="home watch news" />
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
          content="https://www.dallashomewatch.com/news"
        />
        <meta
          property="og:title"
          content="Dallas Home Watch News | Home Watch News in Dallas"
        />
        <meta
          property="og:description"
          content="Dallas Home Watch News from social media sites, press releases, and more. Dallas Home Watch is a member of NHWA and shares industry news about the Home Watch Industry."
        />
        <meta
          property="og:image"
          content="https://www.dallashomewatch.com/images/og/home-watch-news.jpg"
        />
        <meta property="og:image:width" content="1200px" />
        <meta property="og:image:height" content="630px" />
        <meta property="og:image:alt" content="Home Watch News" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@dallashomewatch" />
        <meta name="twitter:creator" content="@susanwinters214" />

        <meta
          name="twitter:title"
          content="Dallas Home Watch News | Home Watch News in Dallas"
        />
        <meta
          name="twitter:description"
          content="Dallas Home Watch News from social media sites and press releases. Dallas Home Watch is a member of the NHWA and shares industry news about Home Watch."
        />
        <meta
          name="twitter:image"
          content="https://www.dallashomewatch.com/images/og/home-watch-news.jpg"
        />
      </Head>
      {/* insert top banner with Page Title & Breadcrumb*/}
      <section className="page-title pageback-news style-two ">
        <div className="auto-container">
          <h1>Home Watch News</h1>
          <ul className="page-breadcrumb">
            <li>
              <Link href="/">home</Link>
            </li>
            <li>News</li>
          </ul>
        </div>
      </section>

      <section className="project-style-two">
        <div className="auto-container" style={{ marginTop: "-100px" }}>
          <div className="row clearfix">
            <div className="project-block-one col-lg-12 col-md-6 col-sm-12">
              <div className="inner-box">
                <section id="contentBlock">
                  <h2 className="pageTitle">Dallas Home Watch News</h2>

                  <p>
                    Welcome to Home Watch News, your go-to resource for all
                    things related to our Dallas Home Watch business! Our team
                    of experts is dedicated to providing you with valuable
                    information, helpful guides, and the latest news of what is
                    happening at Dallas Home Watch LLC. Explore the articles
                    below to stay informed
                  </p>
                  <p>
                    Dive into the world of home watch and discover valuable
                    insights to safeguard your property and make informed
                    decisions. Stay tuned for frequent updates and new articles.
                  </p>
                  <p>
                    <strong>June 2023</strong> - Dallas Home Watch adds Key
                    Holder Services for existing clients <strong>Read:</strong>{" "}
                    <Link href="/keyholder-services">Key Holder Services</Link>
                  </p>
                  <p>
                    <strong>May 2023</strong> - Dallas Home Watch adds Concierge
                    Services for existing clients <strong>Read:</strong>{" "}
                    <Link href="/concierge-services">Concierge Services</Link>
                  </p>
                  <p>
                    <strong>April 2023</strong> - Dallas Home Watch adds Vehicle
                    Care Services for existing clients <strong>Read:</strong>
                    &nbsp;
                    <Link href="/vehicle-care">Vehicle Care Services </Link>
                  </p>
                  <p>
                    <strong>March 2023</strong> - NHWA announces 1st annual{" "}
                    <Link href="/national-homewatch-month">
                      National Home Watch Month{" "}
                    </Link>
                  </p>
                  <p>
                    <strong>February 2023</strong> - Dallas Home Watch of
                    Dallas, TX, earns&nbsp;
                    <Link href="/news/dallas-home-watch-receives-accreditation">
                      accreditation from the NHWA!{" "}
                    </Link>
                  </p>
                  <p>
                    <strong>August 2022</strong> - Dallas Home Watch joined the
                    NHWA.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default NewsPage;
