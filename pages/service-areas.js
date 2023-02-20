import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

function ServiceAreaPage(props) {
  return (
    <Fragment>
      <Head>
        <title>Dallas Home Watch Service Areas</title>
        <meta
          name="description"
          content="Dallas Home Watch service areas include the following communities: 
          Highland Park, University Park, Preston Hollow, Lake Forest, Devonshire, Bluffview, 
          Northwood Hills and Briarwood."
        />
        <meta property="fb:app_id" content="8620778781329629" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Dallas Home Watch" />

        <meta
          property="og:url"
          content="https://www.dallashomewatch.com/service-areas"
        />
        <meta
          property="og:title"
          content="Home Watch Service Areas for Dallas Home Watch"
        />
        <meta
          property="og:description"
          content="Dallas Home Watch service areas include the following communities: 
          Highland Park, University Park, Preston Hollow, Lake Forest, Devonshire, Bluffview, 
          Northwood Hills and Briarwood."
        />
        <meta
          property="og:image:url"
          content="https://www.dallashomewatch.com/images/og/dallas-skyline-service-areas.jpg"
        />
        <meta property="og:image:width" content="1200px" />
        <meta property="og:image:height" content="630px" />
        <meta property="og:image:alt" content="Dallas skyline" />
      </Head>
      {/* insert top banner with Page Title & Breadcrumb*/}
      <section className="page-title pageback-serviceareas">
        <div className="auto-container">
          <h1>Service Areas</h1>
          <ul className="page-breadcrumb">
            <li>
              <Link href="/">home</Link>
            </li>
            <li>Service Areas</li>
          </ul>
        </div>
      </section>

      {/* insert top photo section*/}
      <section className="services-detail-section">
        <div className="auto-container">
          <div className="inner-container">
            <div className="lower-content">
              <h2 className="pageTitle">Dallas Home Watch Service Area</h2>
              <br />
              <p>
                Dallas Home Watch provides services in Highland Park, University
                Park, Lake Forest, Preston Hollow, Devonshire, Bluffview,
                Northwood Hills and Briarwood.
              </p>
              {/* insert MAP */}
              <center>
                <iframe
                  src="https://www.google.com/maps/d/u/0/embed?mid=1gcOoWpJUvETULXddbApq2vYdbukiaOM&ehbc=2E312F"
                  width="640"
                  height="480"
                ></iframe>
              </center>
              <br />
            </div>{" "}
          </div>{" "}
        </div>
      </section>

      <section className="services-page-section">
        <div className="auto-container">
          <h3 className="centered">NEIGHBORHOODS</h3>
          <br />
          <h4>HIGHLAND PARK</h4>
          <p>
            Located between the Dallas North Tollway and U.S. Route 75 (North
            Central Expressway), 4 miles (6 km) north of downtown Dallas.
          </p>
          <h4>UNIVERSITY PARK</h4>
          <p>
            University Park is bordered on the north, east and west by Dallas
            and on the south by the town of Highland Park.
          </p>
          <h4>DEVONSHIRE</h4>
          <p>
            Devonshire is a neighborhood in north Dallas, Texas (USA), bounded
            by Northwest Highway (Loop 12) and Preston Hollow on the north, the
            Dallas North Tollway, Preston Center and University Park on the
            east, Lovers Lane and Inwood Village on the south, and Inwood Road
            and the Bluffview neighborhood on the west.
          </p>
          <h4>LAKE FOREST</h4>
          <p>Lake Forest is a gated community located near Medical City.</p>
          <h4>BLUFFVIEW</h4>
          <p>
            Bluffview is a neighborhood in North Dallas, Texas (USA). It is
            bounded by Northwest Highway (Loop 12) and the Preston Hollow
            neighborhood on the north, Inwood Road and the Devonshire
            neighborhood on the east, Lovers Lane and the Elm Thicket/North Park
            neighborhood on the south, and Midway Road, Bluebonnett Road, Bluff
            View Blvd., and the Shorecrest and Cochran's Chapel neighborhoods on
            the west.
          </p>
          <h4>PRESTON HOLLOW</h4>
          <p>
            Preston Hollow is a neighborhood in north Dallas, Texas, USA. It is
            bordered on the south by the city of University Park, Texas.
          </p>
          <br />
          <p>
            Reference: <Link href="https://en.wikipedia.org/">Wikipedia</Link>
          </p>
        </div>
      </section>

      {/* insert Gated Communities */}
      <section
        className="practice-section shade"
        style={{ backgroundImage: "url(images/background/pattern-2.png)" }}
      >
        <div className="auto-container">
          {/* Sec Title */}
          <div className="sec-title centered">
            <h3 className="serviceAreas">Our Home Watch Service Areas</h3>
            <h4>Gated Communities</h4>
          </div>
          <div className="inner-container">
            <div className="clearfix">
              {/* Gated Community Block */}
              <div className="practice-block col-lg-3 col-md-6 col-sm-12">
                <div className="inner-box gated">
                  <h5>
                    <Image
                      height={64}
                      width={64}
                      src="/images/icons/icons8-gate-64-navy.png"
                      alt="Lake Forest gated community"
                    />
                    <br />
                    <span className="flaticon-gate">Highland Park</span>
                  </h5>
                </div>
              </div>
              {/* Gated Community Block */}
              <div className="practice-block col-lg-3 col-md-6 col-sm-12">
                <div className="inner-box gated">
                  <h5>
                    <Image
                      height={64}
                      width={64}
                      src="/images/icons/icons8-gate-64-navy.png"
                      alt="Lake Forest gated community"
                    />
                    <br />
                    <span className="flaticon-gate">Lake Forest</span>
                  </h5>
                </div>
              </div>
              {/* Gated Community Block */}
              <div className="practice-block col-lg-3 col-md-6 col-sm-12">
                <div className="inner-box gated">
                  <h5>
                    <Image
                      height={64}
                      width={64}
                      src="/images/icons/icons8-gate-64-navy.png"
                      alt="University Park gated community"
                    />
                    <br />
                    <span className="flaticon-gate">University Park</span>
                  </h5>
                </div>
              </div>
              {/* Gated Community Block */}
              <div className="practice-block col-lg-3 col-md-6 col-sm-12">
                <div className="inner-box gated">
                  <h5>
                    <Image
                      height={64}
                      width={64}
                      src="/images/icons/icons8-gate-64-navy.png"
                      alt="Preston Hollow gated community"
                    />
                    <br />
                    <span className="flaticon-gate">Preston Hollow</span>
                  </h5>
                </div>
              </div>
              {/* Gated Community Block */}
              <div className="practice-block col-lg-3 col-md-6 col-sm-12">
                <div className="inner-box gated">
                  <h5>
                    <Image
                      height={64}
                      width={64}
                      src="/images/icons/icons8-gate-64-navy.png"
                      alt="Devonshire gated community"
                    />
                    <br />
                    <span className="flaticon-gate">Devonshire</span>
                  </h5>
                </div>
              </div>
              {/* Gated Community Block */}
              <div className="practice-block col-lg-3 col-md-6 col-sm-12">
                <div className="inner-box gated">
                  <h5>
                    <Image
                      height={64}
                      width={64}
                      src="/images/icons/icons8-gate-64-navy.png"
                      alt="Bluffview gated community"
                    />
                    <br />
                    <span className="flaticon-gate">Bluffview</span>
                  </h5>
                </div>
              </div>
              {/* Gated Community Block */}
              <div className="practice-block col-lg-3 col-md-6 col-sm-12">
                <div className="inner-box gated">
                  <h5>
                    <Image
                      height={64}
                      width={64}
                      src="/images/icons/icons8-gate-64-navy.png"
                      alt="Northwood Hills gated community"
                    />
                    <br />
                    <span className="flaticon-gate">Northwood Hills</span>
                  </h5>
                </div>
              </div>
              {/* Gated Community Block */}
              <div className="practice-block col-lg-3 col-md-6 col-sm-12">
                <div className="inner-box gated">
                  <h5>
                    <Image
                      height={64}
                      width={64}
                      src="/images/icons/icons8-gate-64-navy.png"
                      alt="Briarwood gated community"
                    />
                    <br />
                    <span className="flaticon-gate">Briarwood</span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
      </section>
    </Fragment>
  );
}

export default ServiceAreaPage;
