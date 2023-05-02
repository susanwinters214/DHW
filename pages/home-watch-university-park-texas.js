import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

function SAuniversityparkPage(props) {
  return (
    <Fragment>
      <Head>
        <title>Home Watch University Park</title>
        <link
          rel="canonical"
          href="https://www.dallashomewatch.com/home-watch-university-park-texas"
        />
        <meta
          name="description"
          content="Home Watch in University Park by Dallas Home Watch LLC."
        />
        <meta
          property="keywords"
          content="home watch University park, University park home watch"
        />
        <meta property="fb:app_id" content="8620778781329629" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Dallas Home Watch" />

        <meta
          property="og:url"
          content="https://www.dallashomewatch.com/home-watch-university-park-texas"
        />
        <meta property="og:title" content="Home Watch University Park" />
        <meta
          property="og:description"
          content="Home Watch in University Park by Dallas Home Watch LLC."
        />
        <meta
          property="og:image"
          content="https://www.dallashomewatch.com/images/background/university-park-fountain.jpg"
        />
        <meta property="og:image:width" content="1200px" />
        <meta property="og:image:height" content="630px" />
        <meta property="og:image:alt" content="University Park" />
      </Head>
      {/* insert top banner with Page Title & Breadcrumb*/}
      <section className="page-title">
        <Image
          src="/images/background/university-park-texas-bridge.jpg"
          alt="home watch university park"
          style={{
            zIndex: -99,
          }}
          layout="fill"
          objectFit="cover"
        />
        <div className="auto-container">
          <h1>Home Watch University Park</h1>
          <ul className="page-breadcrumb">
            <li>
              <Link href="/">home</Link>
            </li>
            <li>Home Watch in University Park, TX</li>
          </ul>
        </div>
      </section>

      {/* insert top photo section*/}
      <section className="services-detail-section">
        <div className="auto-container">
          <div className="inner-container">
            <div className="lower-content">
              <h2 className="pageTitle">
                Home Watch Services for University Park, Texas
              </h2>
              <div className="row">
                <div className="content-column col-lg-6 col-md-12 col-sm-12">
                  <p>
                    University Park offers a service called "House Watch" where
                    the University Park Police Department will perform{" "}
                    <strong>house checks</strong> for residents that will be out
                    of town for an extended period of time. To be clear, a
                    "house check" performed by the University Park Police
                    Department does not include entering your home. The House
                    Watch Service that is provided with the University Park
                    Police Department includes walking around the exterior of
                    your home checking for break-ins, squatters, theft or damage
                    to windows, doors and gates.
                  </p>
                  <p>
                    If you are only concerned about the{" "}
                    <strong>exterior of your house</strong> while on vacation,
                    you can request a House Watch by logging into
                    https://uptexas.org/
                  </p>
                  <p>
                    <strong>Dallas Home Watch LLC</strong> provides{" "}
                    <Link href="home-watch-services">
                      <strong>Home Watch Services</strong>
                    </Link>{" "}
                    that include not only checking the exterior of your home for
                    vandalism and break-ins but also includes entering your home
                    and performing a Home Watch Inspection of all of your
                    appliances, water sources, attics and more. Home Watch
                    visits are for homeowners who will be away from their home
                    for long periods of time, leaving their home vunerable to
                    disasters like water leaks and more.
                  </p>
                  <p>
                    Clients of Home Watch Services are people who own multiple
                    residential homes and travel between them, leaving one
                    unoccupied. Other home watch clients include adult children
                    that care of their elderly parents and ask that we routinely
                    check their home for any maintenance issues. If either of
                    these scenarios describe you, give us a call today.
                  </p>
                </div>
                <div className="content-column col-lg-6 col-md-12 col-sm-12 centered">
                  <Image
                    width={665}
                    height={665}
                    src="/images/university-park-fountain.jpg"
                    alt="University Park water fountain"
                  />
                  <br />
                  <span className="tiny">Fountain at University Park</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="column col-lg-12 col-md-6 col-sm-6 centered">
        <h4>Ready To Hire Home Watch in University Park?</h4>
        <br />

        <Link href="tel:972-982-7050" className="theme-btn btn-style-two">
          <span className="txt">
            CALL DALLAS HOME WATCH
            <i className="phone" />
          </span>
        </Link>
      </div>
      <hr />

      <section className="services-page-section2">
        <div className="auto-container">
          <h3 className="centered neighborhood-name">
            About University Park, Texas
          </h3>

          <div className="row clearfix">
            {/* Content Column */}
            <div className="content-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <p>
                  University Park is bordered on the north, east and west by
                  Dallas and on the south by the town of Highland Park.
                </p>
                <p>
                  University Park is an affluent neighborhood located in the
                  heart of Dallas, Texas, known for its gorgeous homes,
                  tree-lined streets, and proximity to Southern Methodist
                  University. Some of the most notable streets in the area
                  include Hillcrest Avenue, Lovers Lane, and Preston Road. Zip
                  codes in Highland Park include 75205, 75225 and 75275.
                </p>
                <p>
                  The neighborhood boasts an average home price of around $2.2
                  million, making it one of the most exclusive neighborhoods in
                  Dallas. Its exquisite homes, many of which are custom-built or
                  renovated, feature a range of architectural styles, from
                  traditional to modern. The area is also home to several parks,
                  including Burleson Park and Goar Park, and is located just a
                  short drive from high-end shopping and dining options. Its
                  excellent schools and close-knit community make it an ideal
                  place to call home for families and those seeking luxury and
                  convenience.{" "}
                </p>
              </div>
            </div>
            <div className="content-column col-lg-6 col-md-12 col-sm-12 centered">
              <Link
                href="https://www.google.com/maps/place/University+Park,+TX/@32.8511057,-96.8014146,15z/data=!4m6!3m5!1s0x864e9e554791f793:0xdf9e1fcf5943961d!8m2!3d32.8550377!4d-96.797592!16zL20vMF9feHA"
                target="_blank"
              >
                <Image
                  width={840}
                  height={760}
                  src="/images/locations/map-of-University-Park-860x840.jpg"
                  alt="University Park gated community"
                />
              </Link>
            </div>
          </div>
          <br />
          {/* movies */}
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 centered">
              <div className="inner-column">
                <iframe
                  width="400"
                  height="315"
                  src="https://www.youtube.com/embed/ZabEp-BMhyc?clip=UgkxPyhWW5yjFCE8QhHUDnc5BCkFPubS6kgK&amp;clipt=EAAY0d0B"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 centered">
              <div className="inner-column">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/uOYb3rjr2Vc"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <br />
      </section>
    </Fragment>
  );
}

export default SAuniversityparkPage;
