import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

function StreetsOfDallasPage(props) {
  return (
    <Fragment>
      <Head>
        <title>Streets of Dallas - DALLAS HOME WATCH</title>
        <link
          rel="canonical"
          href="https://www.dallashomewatch.com/blog/streets-of-dallas"
        />
        <meta
          name="description"
          content="View the streets of Dallas as we tour the city looking for unoccupied homes that need Home Watch Services."
        />
        <meta property="keywords" content="dallas streets, streets of dallas" />
        <meta property="fb:app_id" content="8620778781329629" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Dallas Home Watch" />

        <meta
          property="og:url"
          content="https://www.dallashomewatch.com/blog/streets-of-dallas"
        />
        <meta property="og:title" content="Streets-of-Dallas" />
        <meta
          property="og:description"
          content="View the streets of Dallas as we tour the city looking for unoccupied homes that need Home Watch Services."
        />
        <meta
          property="og:image"
          content="https://www.dallashomewatch.com/images/background/dallas-deep-ellum.jpg"
        />
        <meta property="og:image:width" content="1200px" />
        <meta property="og:image:height" content="630px" />
        <meta
          property="og:image:alt"
          content="City of Dallas - Downtown - Deep Ellum"
        />
      </Head>
      {/* Facebook Like JS Code*/}

      {/* insert top banner with Page Title & Breadcrumb*/}
      <section className="page-title bg-Streets">
        <div className="auto-container">
          <h1>Streets-of-Dallas</h1>
          <ul className="page-breadcrumb">
            <li>
              <Link href="/">home</Link>
            </li>
            <li>
              <Link href="/blog">blog</Link>
            </li>
          </ul>
        </div>
      </section>

      {/* insert section component with Welcome*/}
      <section className="welcome-section style-two">
        <div className="auto-container">
          <div className="inner-container">
            <div className="clearfix">
              {/* Content Column */}
              <div className="content-column col-lg-12 col-md-12 col-sm-12">
                <div className="inner-column">
                  {/* Sec Title */}
                  <div className="sec-title">
                    <h2 className="pageTitle">Driving in Dallas</h2>
                    <p className="text"></p>
                    <p>
                      We decided to take some pictures of street signs and other
                      landmarks around Dallas to show you where we go while
                      performing Home Watch in Dallas. We will continue to add
                      to this page so check back often to see the updates.
                    </p>
                    {/* Row 1*/}
                    <div className="image-column col-lg-6 col-md-6 col-sm-6 centered">
                      <Image
                        width={400}
                        height={300}
                        src="/images/blogimg/streets/northaven.jpg"
                        alt="Northaven Street in Dallas, Texas"
                      />
                      <br />
                      Northaven
                    </div>
                    <div className="image-column col-lg-6 col-md-6 col-sm-6 centered">
                      <Image
                        width={400}
                        height={300}
                        src="/images/blogimg/streets/park-street.jpg"
                        alt="Park Street Street in Dallas, Texas"
                      />
                      <br />
                      Park
                    </div>
                    {/* Row 2*/}
                    <p>&nbsp;</p>
                    <div className="image-column col-lg-6 col-md-6 col-sm-6 centered">
                      <Image
                        width={400}
                        height={300}
                        src="/images/blogimg/streets/university-street.jpg"
                        alt="University Street in Dallas, Texas"
                      />
                      <br />
                      University
                    </div>
                    <div className="image-column col-lg-6 col-md-6 col-sm-6 centered">
                      <Image
                        width={400}
                        height={300}
                        src="/images/blogimg/streets/Beverly.jpg"
                        alt="Beverly in Dallas, Texas"
                      />
                      <br />
                      Beverly
                    </div>
                    {/* Row 3*/}
                    <p>&nbsp;</p>
                    <div className="image-column col-lg-6 col-md-6 col-sm-6 centered">
                      <Image
                        width={400}
                        height={300}
                        src="/images/blogimg/streets/Preston.jpg"
                        alt="Preston Road in Dallas, Texas"
                      />
                      <br />
                      Preston
                    </div>
                    <div className="image-column col-lg-6 col-md-6 col-sm-6 centered">
                      <Image
                        width={400}
                        height={300}
                        src="/images/blogimg/streets/Preston-Forest-shopping-center.jpg"
                        alt="Preston Forest in Dallas, Texas"
                      />
                      <br />
                      Preston Forest
                    </div>
                    {/* Row 4*/}
                    <p>&nbsp;</p>
                    <div className="image-column col-lg-6 col-md-6 col-sm-6 centered">
                      <Image
                        width={400}
                        height={300}
                        src="/images/blogimg/streets/Douglas.jpg"
                        alt="Douglas in Oaklawn - Dallas, Texas"
                      />
                      <br />
                      Douglas
                    </div>
                    <div className="image-column col-lg-6 col-md-6 col-sm-6 centered">
                      <Image
                        width={400}
                        height={300}
                        src="/images/blogimg/streets/Bordeaux.jpg"
                        alt="Bordeaux - Dallas, Texas "
                      />
                      <br />
                      Bordeaux
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

export default StreetsOfDallasPage;
