import { Fragment, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

function AboutPage() {
  useEffect(() => {
    // Load MailerLite script on the client-side
    if (typeof window !== "undefined") {
      (function (w, d, e, u, f, l, n) {
        w[f] =
          w[f] ||
          function () {
            (w[f].q = w[f].q || []).push(arguments);
          };
        l = d.createElement(e);
        l.async = true;
        l.src = u;
        n = d.getElementsByTagName(e)[0];
        n.parentNode.insertBefore(l, n);
      })(
        window,
        document,
        "script",
        "https://assets.mailerlite.com/js/universal.js",
        "ml"
      );

      // Initialize MailerLite if the script is loaded
      if (typeof ml !== "undefined") {
        ml("account", "1200936");
      } else {
        console.error("MailerLite script failed to load.");
      }
    }
  }, []);

  return (
    <Fragment>
      <Head>
        <title>About Dallas Home Watch | Tina Lawson, owner of DWH LLC</title>
        <link rel="canonical" href="https://www.dallashomewatch.com/about" />
        <meta name="keywords" content="about dallas home watch, Tina Lawson" />
        <meta
          name="description"
          content="Dallas Home Watch, owned by Tina Lawson, contracts with clients to watch 
          their home while they are away."
        />
        <meta property="fb:app_id" content="8620778781329629" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Dallas Home Watch" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/dallashomewatchllc"
        />
        <meta
          property="og:url"
          content="https://www.dallashomewatch.com/about"
        />
        <meta property="og:title" content="About Dallas Home Watch" />
        <meta
          property="og:description"
          content="Dallas Home Watch, owned by Tina Lawson, contracts with clients to watch 
          their home while they are away."
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
      <section className="page-title">
        <Image
          src="/images/background/dallas-skyline.jpg"
          alt="dallas sky line"
          style={{ zIndex: -99 }}
          layout="fill"
          objectFit="cover"
        />
        <div className="auto-container">
          <h1>About Dallas Home Watch</h1>
          <ul className="page-breadcrumb">
            <li>
              <Link href="/">home</Link>
            </li>
            <li>About</li>
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
                    <h2 className="pushdown25">Dallas Home Watch</h2>
                  </div>
                  <div className="text">
                    <p>
                      Dallas Home Watch provides the service of discreetly
                      checking your home while you are away for extended
                      periods. The homeowner can designate visits once a week or
                      more. We will work together toward a solution should
                      property issues arise.
                    </p>
                    <div className="image centered">
                      <Image
                        src="/images/logos/DWH-onWhite.jpg"
                        alt="Dallas Home Watch logo"
                        width={200}
                        height={100}
                      />
                    </div>
                    <p>
                      "Dallas Home Watch will keep you informed about your home
                      while you are away." Lawson said.
                    </p>
                    <br />
                    <hr />
                    <h3>Contact Us</h3>
                    <p>
                      We work with customers who are gone for a minimum of 3
                      months per year. We check your home at least{" "}
                      <strong>once a week</strong>.
                    </p>
                    <p>
                      <a href="tel:+2146688225">Send a TEXT to 214-668-8225</a> or send an email via the form below:
                    </p>
                    <div className="ml-embedded" data-form="VEDAe2"></div>
                  </div>
                </div>
              </div>
              {/* Image Column */}
              <div className="image-column col-lg-4 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div className="image wow fadeInLeft pushdown50">
                    <div className="image centered">
                      Tina Lawson is the Owner of{" "}
                      <Link
                        href="https://www.linkedin.com/company/dallas-home-watch"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        Dallas Home Watch
                      </Link>
                    </div>
                  </div>
                  <div className="content-column col-lg-12">
                    <div className="text-box">
                      "I treat all properties the way I would like a person to
                      manage my own home," Lawson says.
                    </div>
                  </div>
                  <p>Home Watch company serving Dallas.</p>
                  <h4>Dallas Home Watch on Facebook</h4>
                  <Link
                    href="https://www.facebook.com/dallashomewatchllc"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Like & Follow
                  </Link>
                  <br /> <br />
                  Read article from D Magazine:{" "}
                  <Link
                    href="https://www.dmagazine.com/publications/d-home/2006/september-october/house-managers-and-realtor-news/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Dallas Home Watch
                  </Link>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Script
        type="text/javascript"
        id="hs-script-loader"
        async
        defer
        src="//js-na1.hs-scripts.com/39631200.js"
      ></Script>
    </Fragment>
  );
}

export default AboutPage;
