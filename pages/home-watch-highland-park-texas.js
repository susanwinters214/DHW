import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

function SAhighlandparkPage(props) {
  return (
    <Fragment>
      <Head>
        <title>Home Watch Highland Park</title>
        <link
          rel="canonical"
          href="https://www.dallashomewatch.com/home-watch-highland-park-texas"
        />
        <meta
          name="description"
          content="Home Watch in Highland Park by Dallas Home Watch LLC."
        />
        <meta
          property="keywords"
          content="home watch highland park, highland park home watch"
        />
        <meta property="fb:app_id" content="8620778781329629" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Dallas Home Watch" />

        <meta
          property="og:url"
          content="https://www.dallashomewatch.com/home-watch-highland-park-texas"
        />
        <meta property="og:title" content="Home Watch Highland Park" />
        <meta
          property="og:description"
          content="Home Watch in Highland Park by Dallas Home Watch LLC."
        />
        <meta
          property="og:image"
          content="https://www.dallashomewatch.com/images/og/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        />
        <meta property="og:image:width" content="1200px" />
        <meta property="og:image:height" content="630px" />
        <meta property="og:image:alt" content="Highland Park" />
      </Head>
      {/* insert top banner with Page Title & Breadcrumb*/}
      <section className="page-title pageback-serviceareas">
        <div className="auto-container">
          <h1>Home Watch Highland Park</h1>
          <ul className="page-breadcrumb">
            <li>
              <Link href="/">home</Link>
            </li>
            <li>Home Watch in Highland Park, TX</li>
          </ul>
        </div>
      </section>

      {/* insert top photo section*/}
      <section className="services-detail-section">
        <div className="auto-container">
          <div className="inner-container">
            <div className="lower-content">
              <h2 className="pageTitle">
                Home Watch Services for Highland Park, Texas
              </h2>
              <div className="row">
                <div className="content-column col-lg-6 col-md-12 col-sm-12">
                  <p>
                    Higland Park offers a service called "House Watch" where the
                    Highland Park Department of Public Safety will perform{" "}
                    <strong>house checks</strong> for residents that will be out
                    of town for 3 days or longer. They also refer to this
                    service as "Vacation House Watches". To be clear, a "house
                    check" performed by the Department of Public Safety does not
                    include entering your home. The House Watch Service that is
                    provided with the Highland Park Department of Safety
                    includes walking around the exterior of your home checking
                    for vandalism, theft or damage to windows, doors and gates.
                  </p>
                  <p>
                    If you are only concerned about the exterior of your house
                    while on vacation, you can request a{" "}
                    <strong>Vacation House Watch</strong> by logging into
                    hpcrimewatch.org
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
                    disasters like <Link href="/blog/water-leaks">water leaks</Link> and more.
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
                  <br />

                  <Image
                    width={400}
                    height={665}
                    src="/images/highland-park-sign.jpg"
                    alt="Highland Park street sign"
                  />
                  <br />
                  <span className="tiny">Highland Park street sign</span>
                  <br />
                  <br />
                  <div className="column col-lg-12 col-md-6 col-sm-6 centered">
                    <h4>Ready To Hire Home Watch in Highland Park?</h4>
                    <br />

                    <Link
                      href="tel:972-982-7050"
                      className="theme-btn btn-style-two"
                    >
                      <span className="txt">
                        CALL DALLAS HOME WATCH
                        <i className="phone" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr />

      <section className="services-page-section2">
        <div className="auto-container">
          {/* Highland Park */}

          <h3 className="centered neighborhood-name">
            About Highland Park, Texas
          </h3>

          <div className="row clearfix">
            {/* Content Column */}
            <div className="content-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="text">
                  <p>
                    Highland Park is located between the Dallas North Tollway
                    and U.S. Route 75 (North Central Expressway), 4 miles (6 km)
                    north of downtown Dallas.
                  </p>
                  <p>
                    Highland Park is an exclusive neighborhood located in the
                    heart of Dallas, Texas, known for its stunning homes,
                    picturesque streets, and world-class amenities. Some of the
                    most notable streets in the area include Preston Road,
                    Armstrong Avenue, and Lakeside Drive. Zip codes in Highland
                    Park include 75205, 75209, 75219, 75283, 75284 and 75391.
                  </p>
                  <p>
                    The neighborhood boasts an average home price of around $2.8
                    million, making it one of the most expensive neighborhoods
                    in Dallas. Its exquisite homes, many of which are historic
                    or custom-built, feature a range of architectural styles,
                    from Spanish Colonial to Georgian. The area is also home to
                    several parks, including the popular Lakeside Park and
                    Turtle Creek Greenbelt, as well as high-end shopping and
                    dining options. Its excellent schools and strong sense of
                    community make it an ideal place to call home for those
                    seeking luxury, exclusivity, and convenience.
                  </p>
                  <p>
                    Reference:{" "}
                    <Link href="https://en.wikipedia.org/">Wikipedia</Link>
                  </p>
                </div>
              </div>
            </div>
            {/* Image Column */}
            <div className="image-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="image centered">
                  <Link
                    href="https://www.google.com/maps/place/Highland+Park,+TX/@32.8322581,-96.8047418,15z/data=!4m10!1m2!2m1!1sHighland+Park!3m6!1s0x864e9ee65ef7fbc7:0xc12f5951b95215f9!8m2!3d32.8334607!4d-96.7919454!15sCg1IaWdobGFuZCBQYXJrkgEIbG9jYWxpdHngAQA!16zL20vMF9fdnk"
                    target="_blank"
                  >
                    <Image
                      width={860}
                      height={665}
                      src="/images/locations/map-of-Highland-Park-860x840.jpg"
                      alt="Highland Park gated community"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* movies */}
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 centered">
              <div className="inner-column">
                <iframe
                  width="400"
                  height="315"
                  src="https://www.youtube.com/embed/R4VVTgnffsE?clip=UgkxYw2M41SGFYuj1q14LmF4IAd92RCrgDFU&amp;clipt=EAAY1OQC"
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
                  width="400"
                  height="315"
                  src="https://www.youtube.com/embed/FWNn3xPSf_Q"
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

export default SAhighlandparkPage;
