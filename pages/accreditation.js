import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import Hero from "../components/home-page/hero";
import Image from "next/image";

function AccreditationPage(props) {
  return (
    <Fragment>
      <Head>
        <title>Accredited Member of NHWA - Dallas Home Watch</title>
        <meta name="keywords" content="home watch accreditation" />
        <link
          rel="canonical"
          href="https://www.dallashomewatch.com/accreditation"
        />
        <meta
          name="description"
          content="Dallas Home Watch received Accreditation from the National Home Watch Association. You must pass exams, and background checks, have insurance, and be bonded."
        />

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
          content="https://www.dallashomewatch.com/accreditation"
        />
        <meta
          property="og:title"
          content="Accredited Member of NHWA - Dallas Home Watch"
        />
        <meta
          property="og:description"
          content="Dallas Home Watch received Accreditation from the National Home Watch Association. You must pass exams, and background checks, have insurance, and be bonded."
        />
        <meta
          property="og:image"
          content="https://www.dallashomewatch.com/images/og/accredited-home-watch-professional.jpg"
        />
        <meta property="og:image:width" content="1200px" />
        <meta property="og:image:height" content="630px" />
        <meta property="og:image:alt" content="Acceptance of Award" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@dallashomewatch" />
        <meta name="twitter:creator" content="@susanwinters214" />

        <meta
          name="twitter:title"
          content="Accredited Member of NHWA - Dallas Home Watch"
        />
        <meta
          name="twitter:description"
          content="Dallas Home Watch received Accreditation from the National Home Watch Association. You must pass exams, and background checks, have insurance, and be bonded."
        />
        <meta
          name="twitter:image"
          content="https://www.dallashomewatch.com/images/og/accredited-home-watch-professional.jpg"
        />
      </Head>
      {/* insert top banner with Page Title & Breadcrumb*/}
      <section className="page-title">
        <Image
          src="/images/background/certification.jpg"
          alt="certification"
          style={{
            zIndex: -99,
          }}
          layout="fill"
          objectFit="cover"
        />
        <div className="auto-container">
          <h1>Accreditation</h1>
          <ul className="page-breadcrumb">
            <li>
              <Link href="/">home</Link>
            </li>
            <li>NHWA Accredited Member</li>
          </ul>
        </div>
      </section>
      {/* insert section component with Tina's photo and message*/}
      <section className="case-section">
        <div className="auto-container">
          <div className="inner-container">
            <div className="clearfix">
              {/* Image Column */}
              <div className="image-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column centered">
                  <div
                    className="image wow fadeInLeft"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
                  >
                    <Image
                      width={300}
                      height={320}
                      src="/images/site/tina-lawson-dallas-nhwa.png"
                      alt="National Home Watch Association Member"
                    />
                  </div>
                </div>
              </div>
              {/* Content Column */}
              <div className="content-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  {/* Sec Title */}
                  <div className="sec-title centered">
                    <h2 className="pageTitle">
                      Accredited Home Watch Business
                    </h2>
                    <div className="text">
                      Accredited members of the NHWA must pass a strict vetting
                      process for consumer complaints or issues. They must carry
                      the proper insurance (which is always available for
                      review). They must agree to uphold the highest ethics in
                      the Home Watch industry. Accredited members of the
                      National Home Watch Association will always look out for
                      the best interests of the Homeowner.
                    </div>
                  </div>
                  <div className="text-box">
                    <Image
                      width={500}
                      height={120}
                      src="/images/nhwa-member-logo.jpg"
                      alt="Accredited Home Watch Memeber of National Home Watch Association"
                    />
                    <a
                      rel="noreferrer"
                      href="https://www.nationalhomewatchassociation.org/find-an-accredited-nhwa-member/"
                      target="_blank"
                      className="arrow flaticon-right"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* insert section component with Accreditation Benefits*/}
      <section className="services-section-two style-two">
        <div className="auto-container">
          {/* Sec Title */}
          <div className="sec-title centered">
            <h2>Accredited Home Watch Business Benefits</h2>
          </div>
          <div className="row clearfix">
            {/* Services Block Two */}
            <div className="services-block-two col-lg-12 col-md-12 col-sm-12">
              <div
                className="inner-box wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <Image
                  src="/images/logos/home-watch-professional-nhwa-certified.jpg"
                  alt="designer column"
                  height={170}
                  width={170}
                  className="icon"
                  id="nhwa_circle"
                />
                <br />
                <span className="memberNumber">#05220241</span>
                <br />
                <h3 className="sec-title blue">Accreditation</h3>
                <div className="text">
                  <ul style={{ paddingLeft: "10%", paddingRight: "10%" }}>
                    <li className="accred">
                      An Accredited Home Watch service’s regular visits to your
                      property may prevent or lessen property damage.
                    </li>
                    <li className="accred">
                      An Accredited Home Watch service will create a presence in
                      your home which may deter squatters and other intruders.
                    </li>
                    <li className="accred">
                      Accredited Home Watch inspectors will look for leaks,
                      insect infestations, mold and other potential threats.
                    </li>
                    <li className="accred">
                      An Accredited Home Watch service will deliver consistent
                      addition accurate information to you during your absence.
                    </li>
                    <li className="accred">
                      An Accredited Home Watch service can meet with contractors
                      for work to be done in your absence, leaving you to do
                      what you wish once you return.
                    </li>
                    <li className="accred">
                      An Accredited Home Watch service can act as your liaison
                      between contractors, associations, Realtors and virtually
                      anyone that you authorize them to.
                    </li>
                    <li className="accred">
                      An Accredited Home Watch service will implement your storm
                      plan.
                    </li>
                    <li className="accred">
                      An Accredited Home Watch service will answer alarm calls.
                    </li>
                    <li className="accred">
                      Homes controlled by an HOA/POA have bylaws that dictate
                      how their exterior and ground are to be maintained. An
                      Accredited Home Watch service will make itself aware of
                      these rules and make sure that your home is kept within
                      guidelines. They will address any problems with
                      landscapers and lawn services.
                    </li>
                    <li className="accred">
                      For condo owners, while an HOA/POA is responsible for
                      common grounds and common areas, you are responsible for
                      everything from the “studs in”. Problems in an upstairs
                      unit can create major damage to the unit below. Common
                      pipes in common walls are also notorious for causing
                      problems to multiple units. An Accredited Home Watch
                      service can discover issues prior to your return.
                    </li>
                    <li className="accred">
                      An Accredited Home Watch service will give you peace of
                      mind, knowing that your home is being looked after by
                      professionals who have your best interests in mind.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* insert section component with Tina closing gate - Why Choose Us */}
      <section className="fluid-section-two">
        <div className="side-icon">
          <Image
            src="/images/icons/fluid-icon-1.png"
            alt="designer column"
            height={100}
            width={100}
          />
        </div>
        <div className="outer-container clearfix">
          {/* Content Column */}
          <div className="content-column">
            <div className="inner-column">
              {/* Sec Title */}
              <div className="sec-title light">
                <h2>Why Choose Us</h2>
                <div className="text">
                  Formally known as STS, Dallas Home Watch has over 20 years of
                  experience in Property Management and Home Watch Services.
                </div>
              </div>
              {/* Counter Boxed */}
              <div className="counter-boxed">
                <div className="fact-counter style-two">
                  <div className="row clearfix">
                    {/* Column */}
                    <div className="column counter-column col-lg-6 col-md-6 col-sm-12">
                      <div
                        className="inner wow fadeInLeft"
                        data-wow-delay="0ms"
                        data-wow-duration="1500ms"
                      >
                        <div className="content">
                          <div className="icon flaticon-briefcase" />
                          <div className="count-outer count-box"></div>
                          <div className="counter-title">
                            Registered Business
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Column */}
                    <div className="column counter-column col-lg-6 col-md-6 col-sm-12">
                      <div
                        className="inner wow fadeInUp"
                        data-wow-delay="0ms"
                        data-wow-duration="1500ms"
                      >
                        <div className="content">
                          <div className="icon flaticon-balance" />
                          <div className="count-outer count-box"></div>
                          <div className="counter-title">Bonded</div>
                        </div>
                      </div>
                    </div>
                    {/* Column */}
                    <div className="column counter-column col-lg-6 col-md-6 col-sm-12">
                      <div
                        className="inner wow fadeInUp"
                        data-wow-delay="0ms"
                        data-wow-duration="1500ms"
                      >
                        <div className="content">
                          <div className="icon flaticon-piggy-bank" />
                          <div className="count-outer count-box"></div>
                          <div className="counter-title">Insured</div>
                        </div>
                      </div>
                    </div>
                    {/* Column */}
                    <div className="column counter-column col-lg-6 col-md-6 col-sm-12">
                      <div
                        className="inner wow fadeInRight"
                        data-wow-delay="0ms"
                        data-wow-duration="1500ms"
                      >
                        <div className="content">
                          <div className="icon flaticon-trophy-2" />
                          <div className="count-outer count-box"></div>
                          <div className="counter-title">Accredited:</div>
                          <p>By National Home Watch Association</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Image Column */}
          <div
            className="image-column"
            style={{ backgroundImage: "url(images/securing-gate.jpg)" }}
          ></div>
        </div>
      </section>

      {/* insert section component with Accreditation Benefits*/}
      <section
        className="clients-section style-two"
        style={{ marginTop: 50, marginBottom: 10 }}
      >
        <div className="auto-container">
          {/* Sec Title */}
          <div className="sec-title centered">
            <h2>Associations and Affiliations</h2>
            <div className="text">
              Dallas Home Watch is a woman owned business and a member of
              National Home Watch Association.
            </div>
          </div>
          <div className="inner-container">
            <div className="sponsors-outer">
              {/*Sponsors Carousel*/}

              <ul className="sliderLogos">
                <li className="sliderLogos">
                  <figure className="image-box">
                    <Image
                      width={250}
                      height={100}
                      src="/images/logos/Dallas-Chamber-of-Commerce.jpg"
                      alt="Dallas Chamber of Commerce"
                    />
                  </figure>
                </li>
                <li className="sliderLogos">
                  <figure className="image-box">
                    <Image
                      width={250}
                      height={100}
                      src="/images/logos/nhwa-header-logo-250x100.jpg"
                      alt="National Home Watch Association"
                    />
                  </figure>
                </li>
                <li className="sliderLogos">
                  <figure className="image-box">
                    <Image
                      width={250}
                      height={100}
                      src="/images/logos/certified-woman-owned-business.jpg"
                      alt="Woman Owned Business"
                    />
                  </figure>
                </li>
                <li className="sliderLogos">
                  <figure className="image-box">
                    <Image
                      width={250}
                      height={100}
                      src="/images/logos/NHWA-Certified-Logo-250x100.png"
                      alt="National Home Watch Certified Member"
                    />
                  </figure>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default AccreditationPage;
