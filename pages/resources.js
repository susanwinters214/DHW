import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

function ResourcesPage(props) {
 
   
  return (
    <Fragment>
      <Head>
        <title>Dallas Home Watch Resources</title>
        <meta name="robots" content="noindex"></meta>
        <meta
          name="description"
          content="Dallas Home Watch shares resources for Home Watch Businesses and Home Watch Clients. This page contains discounts to places in Dallas. Save money by visiting the Dallas Home Watch Resources page often."
        />
        <meta property="fb:app_id" content="8620778781329629" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Dallas Home Watch" />

        <meta
          property="og:url"
          content="https://www.dallashomewatch.com/resources"
        />
        <meta property="og:title" content="Dallas Home Watch Resources" />
        <meta
          property="og:description"
          content="Dallas Home Watch shares resources for Home Watch Businesses and Home Watch Clients. This page contains discounts to places in Dallas. Save money by visiting the Dallas Home Watch Resources page often."
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
      </Head>
      {/* insert top banner with Page Title & Breadcrumb*/}
      <section className="page-title pageback-about">
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
                    <h2 className="pushdown25">Dallas Home Watch Resources</h2>
                  </div>
                  <div className="text">
                    <p className="first">
                      Are you looking for a Home Watch Company that is not in
                      Dallas, Texas? <br />
                      Here is a list of Home Watch Companies that are located in
                      different areas:
                    </p>
                    <h3>Michigan Home Watch Businesses</h3>
                    <Link href="https://ourhomewatcher.com/"  rel="noopener noreferrer">
                      Our Home Watcher LLC.
                    </Link>
<br /><br /><br />
                    <p>If you own a Home Watch company outside of the Dallas, Texas area and you are a Certified Home Watch Professional that would like us to add a link to your website - please send an email to: dallashomewatch@gmail.com. </p>
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