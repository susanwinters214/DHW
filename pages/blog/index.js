import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

function BlogPage(props) {
  return (
    <Fragment>
      <Head>
        <title>Dallas Home Watch Services | BLOG</title>
        <meta
          name="description"
          content="Home Watch Blog Articles - Read interesting blogs about the various things that happen in the Home Watch industry including things that go wrong with a house."
        />
        <meta property="fb:app_id" content="8620778781329629" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Dallas Home Watch" />

        <meta
          property="og:url"
          content="https://www.dallashomewatch.com/blog"
        />
        <meta property="og:title" content="Home Watch Blog Articles" />
        <meta
          property="og:description"
          content="Home Watch Blog Articles - Read interesting blogs about the various things that happen in the Home Watch industry including things that go wrong with a house."
        />
        <meta
          property="og:image"
          content="https://www.dallashomewatch.com/images/og/dallas-home-watch-logo-skyline-certified.jpg"
        />
        <meta property="og:image:width" content="1200px" />
        <meta property="og:image:height" content="630px" />
        <meta
          property="og:image:alt"
          content="Dallas Home Watch logo over Dallas Skyline NHWA Certified Home Watch Professional logo"
        />
      </Head>
      {/* top Banner Area */}
      <section className="page-title pageback-homepage">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="services-block col-lg-12 col-md-12 col-sm-12">
              <div className="homepagetopcontent">
                <h1 className="title zindexh1tag hidden-mobile">
                  Home Watch Blog
                </h1>
                <h2 className="mobileh2">
                  Blog Articles for the Home Watch Industry
                </h2>
                <h3>
                  Home Watch inspections provide peace of mind about your
                  property while you are away.
                </h3>

                <div className="bannerbox btns-box centered">
                  <Link
                    href="#blogarticles"
                    className="theme-btn btn-style-two"
                  >
                    <span className="txt">
                      Read Articles <i className="phone" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="clearfix"> </div>
      <a name="blogarticles"></a>
      {/* 4 BLOCKS */}
      <section className="welcome-section">
        <div className="auto-container">
          <div className="inner-container2">
            <div className="row clearfix">
              {/* Services Block HOME WATCH*/}
              <div className="services-block col-lg-6 col-md-12 col-sm-12">
                <div
                  className="inner-box wow fadeInLeft BLUE"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <div className="content">
                    <div className="icon flaticon-file" />
                    <h4>
                      <Link href="/blog/air-filters">Air Filters</Link>
                    </h4>
                    <div className="text">
                      Learn the importance of changing your air filters.
                    </div>
                  </div>
                  <Link
                    href="/blog/air-filters"
                    className="arrow flaticon-right"
                  />
                </div>
              </div>
              {/* Services Block KEY HOLDER*/}
              <div className="services-block col-lg-6 col-md-12 col-sm-12">
                <div
                  className="inner-box wow fadeInRight  BLUE"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <div className="content">
                    <div className="icon flaticon-file" />
                    <h4>
                      <Link href="/blog/water-leaks">Water Leaks</Link>
                    </h4>
                    <div className="text">
                      Catching water leaks can prevent damage to your home.
                    </div>
                  </div>
                  <Link
                    href="/blog/water-leaks"
                    className="arrow flaticon-right"
                  />
                </div>
              </div>
              {/* Services Block CONCIERGE*/}
              <div className="services-block col-lg-6 col-md-12 col-sm-12">
                <div
                  className="inner-box wow fadeInLeft BLUE"
                  data-wow-delay="150ms"
                  data-wow-duration="1500ms"
                >
                  <div className="content">
                    <div className="icon flaticon-file" />
                    <h4>
                      <Link href="/blog/refrigerators">Refrigerators</Link>
                    </h4>
                    <div className="text">
                      Is your refrigertor running? It's no joke!
                    </div>
                  </div>
                  <Link
                    href="/blog/refrigerators"
                    className="arrow flaticon-right"
                  />
                </div>
              </div>
              {/* Services Block VEHICLES*/}
              <div className="services-block col-lg-6 col-md-12 col-sm-12">
                <div
                  className="inner-box wow fadeInRight BLUE"
                  data-wow-delay="150ms"
                  data-wow-duration="1500ms"
                >
                  <div className="content">
                    <div className="icon flaticon-file" />
                    <h4>
                      <Link href="/blog/garage-door-openers">
                        Garage Door Openers
                      </Link>
                    </h4>
                    <div className="text">
                      Wireless keypads, remotes, openers and doors.
                    </div>
                  </div>
                  <Link
                    href="/blog/garage-door-openers"
                    className="arrow flaticon-right"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default BlogPage;
