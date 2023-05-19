import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

function AboutPage() {
  return (
    <Fragment>
      <Head>
        <title>About Dallas Home Watch</title>
        <link rel="canonical" href="https://www.dallashomewatch.com/about" />
        <meta
          name="description"
          content="Dallas Home Watch, owned by Tina Lawson, contracts with clients to watch 
          their home while they are away."
        />
        <meta name="keywords" content="about dallas home watch, Tina Lawson" />
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
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@dallashomewatch" />
        <meta name="twitter:creator" content="@susanwinters214" />

        <meta name="twitter:title" content="About Dallas Home Watch" />
        <meta
          name="twitter:description"
          content="Dallas Home Watch, owned by Tina Lawson, contracts with clients to watch 
          their home while they are away."
        />
        <meta
          name="twitter:image"
          content="https://www.dallashomewatch.com/images/og/dallas-home-watch-opening-doors.jpg"
        />
      </Head>
      {/* insert top banner with Page Title & Breadcrumb*/}
      <section className="page-title ">
        <Image
          src="/images/background/dallas-skyline.jpg"
          alt="dallas sky line"
          style={{
            zIndex: -99,
          }}
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
                      checking your home while you are away. The homeowner can
                      designate visits once a week or more. We will work
                      together toward a solution should property issues arise.
                    </p>
                    <div className="image centered">
                      <Image
                        src="/images/logos/DWH-onWhite.jpg"
                        alt="Dallas Home Watch logo"
                        width={200}
                        height={100}
                      />
                    </div>
                    <p className="first">
                      Tina Lawson, who managed the corporate offices of HCB
                      Contractors from the mid- '80s to early '90s and later
                      worked on the situation desk at Burlington Northern Santa
                      Fe Railway Co., began an executive limousine business in
                      2001.
                    </p>
                    <p>
                      But after listening to some of her clients' comments, she
                      decided to take her services a step further.
                    </p>
                    <p>
                      "Tina had been driving us to the airport and my husband
                      mentioned that the prior house manager had quit
                      unexpectedly and without notice," said client T.G.M.
                    </p>
                    <p>
                      "Tina asked to be considered for the job. Now, I can't
                      imagine where we would be without her."
                    </p>
                    <p>
                      In 2003, Lawson's company evolved to encompass home
                      management services.
                    </p>
                    <p>
                      Lawson manages several multimillion dollar homes in the
                      Metroplex for clients who often have multiple homes across
                      the nation and rely on Lawson to "hold down the fort"
                      while they are out of town.
                    </p>
                    <p>
                      In 2022, Ms. Lawson rebranded her company from STS
                      (suburban transportation services) to Dallas Home Watch to
                      better reflect the services her company provides.
                    </p>
                    <p>
                      Clients are regular accounts that contract with Dallas
                      Home Watch on a monthly or annual basis. While clients are
                      out of town, they are kept abreast of all household
                      issues.
                    </p>
                    <p>
                      "Dallas Home Watch will keep you informed about your home
                      while you are away." Lawson said.
                    </p>
                    <br />
                    Read article from D Magazine when Lawson was a House
                    Manager:{" "}
                    <Link href="https://www.dmagazine.com/publications/d-home/2006/september-october/house-managers-and-realtor-news/">
                      Dallas Home Watch
                    </Link>
                    <br />
                    Tina Lawson (DHW) receives{" "}
                    <Link href="https://www.dallashomewatch.com/news/dallas-home-watch-receives-accreditation">
                      accreditation from the NHWA.
                    </Link>
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
                        src="/images/tina-lawson-400x400.jpg"
                        alt="Tina Lawson"
                        width={400}
                        height={400}
                      />
                      <br />
                      Photo of{" "}
                      <Link href="https://www.linkedin.com/in/tina-lawson-a57252254/">
                        Tina Lawson
                      </Link>
                      <br />
                      Owner of&nbsp;
                      <Link href="https://www.linkedin.com/company/dallas-home-watch">
                        Dallas Home Watch
                      </Link>
                      <br />
                    </div>
                  </div>

                  <div className="content-column col-lg-12 col-md-12 col-sm-12">
                    <div className="text-box">
                      "I treat all properties the way I would like a person to
                      manage my own home," Lawson says.
                    </div>
                  </div>

                  <p>
                    Home Watch company serving Dallas.
                    <br />
                    <br />
                    Dallas Home Watch LLC
                    <br />
                    13101 Preston Road Suite 110410
                    <br />
                    Dallas, Texas 75240
                    <br />
                    972-982-7050
                    <br />
                  </p>

                  <h4>Dallas Home Watch on Facebook</h4>
                  <Link href="https://www.facebook.com/dallashomewatch">
                    Like & Follow
                  </Link>
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
