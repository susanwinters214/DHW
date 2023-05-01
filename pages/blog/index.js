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
        <meta property="keywords" content="home watch blog articles" />
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
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="clearfix"> </div>
      <br /> <br />
      {/* 4 BLOCKS */}
      <section className="welcome-section MOVEUPBLOGLIST">
        <div className="auto-container">
          <div className="inner-container2">
            <div className="row clearfix">
              {/* Blog: Why you need Homewatch */}
              <div className="services-block col-lg-6 col-md-12 col-sm-12">
                <div
                  className="inner-box wow fadeInRight BLUE"
                  data-wow-delay="150ms"
                  data-wow-duration="1500ms"
                >
                  <div className="content">
                    <div className="icon flaticon-file" />
                    <h4>
                      <Link href="/blog/dangers-of-leaving-house-unoccupied">
                        Leaving Your Home Unoccupied
                      </Link>
                    </h4>
                    <div className="text">
                      10 Reasons Not To Leave Your Home Alone!
                    </div>
                  </div>
                  <Link
                    href="/blog/dangers-of-leaving-house-unoccupied"
                    className="arrow flaticon-right"
                  />
                </div>
              </div>

              {/* Blog: Why you need Homewatch */}
              <div className="services-block col-lg-6 col-md-12 col-sm-12">
                <div
                  className="inner-box wow fadeInRight BLUE"
                  data-wow-delay="150ms"
                  data-wow-duration="1500ms"
                >
                  <div className="content">
                    <div className="icon flaticon-file" />
                    <h4>
                      <Link href="/blog/why-you-need-homewatch">
                        Why You Need Homewatch
                      </Link>
                    </h4>
                    <div className="text">
                      5 Reasons You Need To Hire A Home Watch Professional
                    </div>
                  </div>
                  <Link
                    href="/blog/why-you-need-homewatch"
                    className="arrow flaticon-right"
                  />
                </div>
              </div>

              {/* Blog: Why you need Homewatch */}
              <div className="services-block col-lg-6 col-md-12 col-sm-12">
                <div
                  className="inner-box wow fadeInRight BLUE"
                  data-wow-delay="150ms"
                  data-wow-duration="1500ms"
                >
                  <div className="content">
                    <div className="icon flaticon-file" />
                    <h4>
                      <Link href="/blog/what-to-look-for-in-homewatch-company">
                        Home Watch Company Differences
                      </Link>
                    </h4>
                    <div className="text">
                      What To Look For in a Home Watch Company
                    </div>
                  </div>
                  <Link
                    href="/blog/what-to-look-for-in-homewatch-company"
                    className="arrow flaticon-right"
                  />
                </div>
              </div>

              {/* Blog: Customize Apple Watch */}
              <div className="services-block col-lg-6 col-md-12 col-sm-12">
                <div
                  className="inner-box wow fadeInRight BLUE"
                  data-wow-delay="150ms"
                  data-wow-duration="1500ms"
                >
                  <div className="content">
                    <div className="icon flaticon-file" />
                    <h4>
                      <Link href="/blog/how-to-customize-your-apple-watch-background">
                        Create Your Own Home Watch
                      </Link>
                    </h4>
                    <div className="text">
                      Customize Your Watch Background To Your Home
                    </div>
                  </div>
                  <Link
                    href="/blog/how-to-customize-your-apple-watch-background"
                    className="arrow flaticon-right"
                  />
                </div>
              </div>

              {/* Blog: Key Holder Benefits */}
              <div className="services-block col-lg-6 col-md-12 col-sm-12">
                <div
                  className="inner-box wow fadeInRight BLUE"
                  data-wow-delay="150ms"
                  data-wow-duration="1500ms"
                >
                  <div className="content">
                    <div className="icon flaticon-file" />
                    <h4>
                      <Link href="/blog/benefits-of-hiring-keyholder-service">
                        Benefits of Hiring A Key Holder Service
                      </Link>
                    </h4>
                    <div className="text">3 Examples of Key Holder Service</div>
                  </div>
                  <Link
                    href="/blog/benefits-of-hiring-keyholder-service"
                    className="arrow flaticon-right"
                  />
                </div>
              </div>

              {/* Blog: Air Filters*/}
              <div className="services-block col-lg-6 col-md-12 col-sm-12">
                <div
                  className="inner-box wow fadeInLeft BLUE"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <div className="content">
                    <div className="icon flaticon-file" />
                    <h4>
                      <Link href="/blog/air-filters">
                        Changing Dirty Air Filters
                      </Link>
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
              {/* Blog: Water Leaks */}
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
              {/* Blog: Refrigerators */}
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
              {/* Blog: Garage Door Openers */}
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
              {/* Blog: Garage Door Openers */}
              <div className="services-block col-lg-6 col-md-12 col-sm-12">
                <div
                  className="inner-box wow fadeInRight BLUE"
                  data-wow-delay="150ms"
                  data-wow-duration="1500ms"
                >
                  <div className="content">
                    <div className="icon flaticon-file" />
                    <h4>
                      <Link href="/blog/gate-operator-repair">Gate Repair</Link>
                    </h4>
                    <div className="text">
                      Home Watch Finds Broken Gate Exposing Property
                    </div>
                  </div>
                  <Link
                    href="/blog/gate-operator-repair"
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
