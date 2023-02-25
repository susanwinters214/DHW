import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";

function NewsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>Dallas Home Watch News</title>

        <meta
          name="description"
          content="Dallas Home Watch News from social media sites, press releases, and more. Dallas Home Watch is a member of NHWA and shares industry news about the Home Watch Industry."
        />

        <meta property="fb:app_id" content="8620778781329629" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Dallas Home Watch" />

        <meta
          property="og:url"
          content="https://www.dallashomewatch.com/news"
        />
        <meta property="og:title" content="Dallas Home Watch News" />
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
                  <p>August 2022 - Dallas Home Watch joined the NHWA.</p>
                  <p>
                    January 2023 - Dallas Home Watch posted first video on
                    YouTube.
                    <br />
                    <Link href="https://www.youtube.com/watch?v=kGZKVnd8YqU">
                      What is Home Watch?
                    </Link>
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
