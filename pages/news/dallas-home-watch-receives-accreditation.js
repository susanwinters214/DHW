import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

function DHWreceivesAccredPage(props) {
  return (
    <Fragment>
      <Head>
        <title>Dallas Home Watch receives accreditation from NHWA</title>
        <link
          rel="canonical"
          href="https://dallashomewatch.com/news/dallas-home-watch-receives-accreditation"
        />
        <meta
          name="description"
          content="Dallas Home Watch receives accreditation from NHWA - National Home Watch Association. Tina Lawson has passed background checks, credit checks, ethical working history checks and taken the NHWA Home Watch Bootcamp."
        />
        <meta property="fb:app_id" content="8620778781329629" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Dallas Home Watch" />

        <meta
          property="og:url"
          content="https://www.dallashomewatch.com/news/dallas-home-watch-receives-accreditation"
        />
        <meta
          property="og:title"
          content="Dallas Home Watch receives accreditation from NHWA"
        />
        <meta
          property="og:description"
          content="Dallas Home Watch receives accreditation from NHWA - National Home Watch Association"
        />
        <meta
          property="og:image"
          content="https://www.dallashomewatch.com/images/blogimg/NHWA-received-accreditation.jpg"
        />
        <meta property="og:image:width" content="1200px" />
        <meta property="og:image:height" content="630px" />
        <meta
          property="og:image:alt"
          content="Dallas Home Watch (Tina Lawson) receives accreditation from NHWA - National Home Watch Association."
        />
      </Head>
      {/* Facebook Like JS Code*/}

      {/* insert top banner with Page Title & Breadcrumb*/}
      <section className="page-title bg-refrigerators bg-dhwra">
        <div className="auto-container">
          <h1>Dallas Home Watch receives accreditation from NHWA</h1>
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
                    <h2 className="pageTitle">
                      From National HomeWatch Association
                    </h2>
                    <div className="row">
                      <div className="col-lg-8 col-md-12 col-sm-12">
                        <p className="text">
                          Dallas Home Watch of Dallas, Texas, has earned
                          Accredited Member status from the NHWA - National Home
                          Watch Association.
                        </p>
                        <p>
                          Tina is a graduate of the NHWA’s Home Watch Boot Camp
                          and has earned the designation of Certified Home Watch
                          Professional, which puts her into the category of
                          elite Home Watch providers in the industry. The CHWP
                          designation and Boot Camp training exemplify Tina’s
                          commitment to Home Watch excellence.
                        </p>
                      </div>
                      <div className="col-lg-4 col-md-12 col-sm-12">
                        <Image
                          width={200}
                          height={100}
                          src="/images/site/tina-lawson-dallas-nhwa.png"
                          alt="Tina Lawson with NHWA"
                        />
                      </div>
                    </div>
                    <div className="image-column col-lg-4 col-md-12 col-sm-12">
                      <div className="inner-column">
                        <div className="image">
                          <Image
                            width={200}
                            height={100}
                            src="/images/logos/NHWA-Boot-Camp-Logo.jpg"
                            alt="Home Watch Boot Camp"
                          />
                        </div>
                      </div>
                    </div>
                    <p>
                      Dallas Home Watch serves Dallas and the surrounding area;
                      specializing in Highland Park, North Dallas, University
                      Park, Preston Hollow, Devonshire, Bluffview, Northwood
                      Hills, and Briarwood.
                    </p>
                    <p>
                      The NHWA Accredited Members have passed a strict vetting
                      process that includes:{" "}
                    </p>
                    <div className="ML25">
                      <ul className="dots">
                        <li>
                          {" "}
                          Criminal background checks on all company principals{" "}
                        </li>
                        <li>
                          Proper insurance coverage—both general and
                          professional liability{" "}
                        </li>
                        <li>Proper bonding Consumer complaint checks </li>
                        <li>Truthful website and advertising content </li>
                        <li>Adherence to the NHWA’s Code of Ethics </li>
                        <li>Commitment to the NHWA’s Mission Statement </li>
                      </ul>
                    </div>
                    <br />
                    <Link
                      href="https://www.nationalhomewatchassociation.org/dallas-home-watch-of-dallas-tx-earns-accreditation-from-the-nhwa"
                      target="_blank"
                    >
                      Read announcement on the NHWA website.
                    </Link>
                    <br />
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

export default DHWreceivesAccredPage;
