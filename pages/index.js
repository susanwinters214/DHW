import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>
          DALLAS HOME WATCH | Home Watch in Dallas by Dallas Home Watch LLC
        </title>
        <meta
          name="description"
          content="Dallas Home Watch Services by Dallas Home Watch LLC. provides Home Watch Services in the Dallas area for homeowners who have a second property located in north Dallas.
          Home watch is a service that performs visual inspections of a home or property looking for obvious issues. "
        />
        <meta property="fb:app_id" content="8620778781329629" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Dallas Home Watch" />

        <meta property="og:url" content="https://www.dallashomewatch.com" />
        <meta property="og:title" content="Dallas Home Watch" />
        <meta
          property="og:description"
          content="Dallas Home Watch Services by Dallas Home Watch LLC. provides Home Watch Services in the Dallas area for homeowners who have a second property located in north Dallas, Highland Park, Preston Hollow, University Park,
          Bluffview and Northwood Hills. We perform a visual inspection of your home while you are away and help you mitigate risks to your residence."
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
                  Dallas Home Watch Services
                </h1>
                <h2 className="mobileh2">
                  Home Watch is a service that performs visual inspections of a
                  home or property, looking for obvious issues.
                </h2>

                <div className="bannerbox btns-box centered">
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

                <br />
                <Link href="/national-homewatch-month">
                  <Image
                    width={250}
                    height={250}
                    src="/images/logos/national-homewatch-month-2023.png"
                    alt="home-watch-professional-checking-doors"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 BLOCKS */}
      <section className="welcome-section MOVEUP">
        <h3 className="centered mb-25 mt-25">
          Home Watch inspections provide peace of mind about your property while
          you are away.
        </h3>
        <div className="auto-container">
          <div className="inner-container2">
            <div className="row clearfix">
              {/* Services Block HOME WATCH*/}
              <div className="services-block col-lg-6 col-md-12 col-sm-12">
                <div
                  className="inner-box wow fadeInLeft BLUE"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <div className="content">
                    <div className="icon flaticon-file" />
                    <h4>
                      <Link href="/homewatch-services">
                        Home Watch Services
                      </Link>
                    </h4>
                    <div className="text">
                      We can provide a visual inspection of your unoccupied
                      property to mitigate risk while you are away.
                    </div>
                  </div>
                  <Link
                    href="homewatch-services"
                    className="arrow flaticon-right"
                  />
                </div>
              </div>
              {/* Services Block KEY HOLDER*/}
              <div className="services-block col-lg-6 col-md-12 col-sm-12">
                <div
                  className="inner-box wow fadeInRight  BLUE"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <div className="content">
                    <div className="icon flaticon-file-1" />
                    <h4>
                      <Link href="/keyholder-services">
                        Key Holder Services
                      </Link>
                    </h4>
                    <div className="text">
                      We can allow vendor and contractor access to your home and
                      stay with them until their job is complete.
                    </div>
                  </div>
                  <Link
                    href="keyholder-services"
                    className="arrow flaticon-right"
                  />
                </div>
              </div>
              {/* Services Block CONCIERGE*/}
              <div className="services-block col-lg-6 col-md-12 col-sm-12">
                <div
                  className="inner-box wow fadeInLeft BLUE"
                  data-wow-delay="150ms"
                  data-wow-duration="1500ms"
                >
                  <div className="content">
                    <div className="icon flaticon-umbrella-1" />
                    <h4>
                      <Link href="/concierge-services">Concierge Services</Link>
                    </h4>
                    <div className="text">
                      We provide professional concierge services so that you can
                      enjoy your freedom of time. (Only for Home Watch clients
                      under contract.)
                    </div>
                  </div>
                  <Link
                    href="/concierge-services"
                    className="arrow flaticon-right"
                  />
                </div>
              </div>
              {/* Services Block VEHICLES*/}
              <div className="services-block col-lg-6 col-md-12 col-sm-12">
                <div
                  className="inner-box wow fadeInRight BLUE"
                  data-wow-delay="150ms"
                  data-wow-duration="1500ms"
                >
                  <div className="content">
                    <div className="icon flaticon-car-1" />
                    <h4>
                      <Link href="/vehicle-care">Vehicle Care</Link>
                    </h4>
                    <div className="text">
                      We alert you of low tires or low batteries and meet with
                      your dealership when necessary. (Only for Home Watch
                      clients under contract.)
                    </div>
                  </div>
                  <Link href="/vehicle-care" className="arrow flaticon-right" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* insert Welcome */}
      <section
        className="welcome-section"
        style={{ backgroundImage: "url(images/background/pattern-1.png)" }}
      >
        <div className="auto-container">
          <div className="inner-container">
            <div className="clearfix">
              {/* Content Column */}
              <div className="content-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column ">
                  {/* Sec Title */}
                  <div className="text">
                    <p>
                      Dallas Home Watch offers exceptional home watch services
                      to the Dallas area and surrounding neighborhoods,
                      including Highland Park, University Park, Preston Hollow,
                      Lakewood, Lake Highlands, Devonshire, Bluffview, Briarwood
                      and Norhwood Hills. Our team of professionals provides
                      visual inspections of both the interior and exterior of
                      homes and properties, looking for obvious issues that may
                      cause potential damage. We keep homeowners informed of any
                      issues and follow the client's instructions regarding a
                      resolution and cure for them. Upon completion of a full
                      Home Watch inspection, we will submit our Home Watch
                      Checklist to our portal where our clients can log in and
                      view the results. For clients without portal access, we
                      will send our write up along with pictures and videos to
                      their email or via text message.
                    </p>
                    <p>
                      Unlike other options like house sitters or property
                      managers, Dallas Home Watch is a fully accredited and
                      bonded company that prioritizes the care and maintenance
                      of your home. We are committed to providing high-quality
                      services, ensuring that homeowners can travel worry-free,
                      knowing that their property is in good hands. Our
                      attention to detail and expertise in home watch services
                      make Dallas Home Watch a top choice for homeowners who
                      value peace of mind.
                    </p>
                    <p>
                      Don't leave the safety and security of your home to
                      chance. Trust Dallas Home Watch to provide exceptional
                      home watch services that exceed your expectations. Give us
                      a call today to learn more about our services and why we
                      are the better choice for your home watch needs.
                    </p>

                    <br />
                  </div>
                </div>
              </div>

              {/* Image Column */}
              <div className="image-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div className="image title" data-tilt="" data-tilt-max={2}>
                    <br />
                    <br />
                    <Image
                      width={585}
                      height={725}
                      src="/images/home-watch-professional-checking-doors.jpg"
                      alt="home-watch-professional-checking-doors"
                    />
                  </div>
                  <div
                    className="case-box wow fadeInLeft"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
                  >
                    <span>
                      20+ Years of <br /> Experience
                    </span>
                  </div>
                </div>

                <br />
                <br />
                <div className="btns-box centered">
                  <a
                    href="homewatch-checklist"
                    className="theme-btn btn-style-three"
                  >
                    <span className="txt">
                      Home Watch Checklist{" "}
                      <i className="arrow flaticon-right" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="clearfix"> </div>

      {/* insert blue area with video */}
      <section className="counter-section">
        <div
          className="image-layer"
          style={{
            backgroundImage: "url(images/background/water-damage-ceiling.jpg)",
          }}
        />
        <div className="auto-container">
          {/* Sec Title */}
          <div className="sec-title light centered">
            <h2 className="blueBkg gold">
              20+ Years Experience in the Home Watch Business
            </h2>
            <div className="text homebluevideoarea">
              Risk mitigation is the process of planning for disasters and
              having a way to lessen the negative impact. Our goal is to
              visually inspect a home or property looking for obvious issues and
              notifying the homeowner - working as a team to give vendors access
              to fix small problems before they become big issues.
            </div>
          </div>
          {/*REMOVE THIS AREA*/}
          <div className="fact-counter">
            <div className="row clearfix"></div>
          </div>
          {/*Video Box*/}
          <div className="video-boxed">
            <figure className="video-image">
              <Image
                src="/images/large-modern-home.jpg"
                alt="large home"
                height={1170}
                width={815}
              />
            </figure>
            <a
              href="https://www.youtube.com/watch?v=kGZKVnd8YqU"
              className="lightbox-image overlay-box"
            >
              {" "}
              <span className="flaticon-play-arrow">
                <i className="ripple" />
              </span>
            </a>
          </div>
        </div>
      </section>
      {/* insert SEO content */}
      <section className="sidebar-page-container">
        <div className="auto-container">
          <div className="row clearfix">
            {/* Content Side */}
            <div className="content-side col-lg-12 col-md-12 col-sm-12">
              {/* Block Detail */}
              <div className="blog-detail">
                <div className="inner-box">
                  <div className="lower-content">
                    <h2>Why Hire a Home Watch Service?</h2>
                    <p>
                      The typical homeowner assumes that a Home Watch service is
                      either a security service or a house-sitting service.
                      Dallas Home Watch is neither of these. Instead, Dallas
                      Home Watch professionals come into your home while you are
                      away and perform a visual inspection of your home, looking
                      for issues that may warrant a call to the homeowner
                      informing them of problems. These might include a leaky
                      faucet, clogged drain, air conditioning or heating issue,
                      pool, or fountain pump problem, and more. The larger the
                      home, the more that can go wrong and, if left unattended,
                      small problems can quickly lead to larger, more costly
                      ones.
                    </p>
                    <p>
                      The longer a house sits vacant, the bigger the potential
                      for unauthorized persons to trespass or intrude on your
                      property. Dallas Home Watch services include bringing in
                      the mail, boxes, or newspapers from the front porch to
                      help keep from signaling that the homeowners are gone.
                    </p>
                    <p>
                      Dallas Home Watch serves the owners of C-suite-level homes
                      and informs homeowners of any problems found, then adheres
                      to their directions for the resolution and treatment of
                      any issues. Because our clients often travel out of state
                      or out of the country for long periods, they can rest
                      assured that Dallas Home Watch will visit their property
                      weekly (or more often if desired) and will be their eyes
                      and ears while they are away.
                    </p>
                    <p>
                      If you plan to leave your home vacant for more than 7
                      consecutive days, more than twice a year, call us to
                      pre-schedule a Home Watch schedule that suits your needs.
                    </p>

                    <blockquote>
                      <span className="quote-icon flaticon-quote-1" />
                      <div className="quote-text">
                        Keep informed about your home while you are away.
                      </div>
                      <div className="quote-author">By Tina Lawson</div>
                    </blockquote>
                    <p>
                      Direct communication with our clients is paramount to
                      keeping homeowners informed about the status of their home
                      and property.
                    </p>
                    <p>
                      We enter all properties with a&nbsp;
                      <Link href="homewatch-checklist">
                        Home Watch Checklist
                      </Link>
                      &nbsp; that includes a list of services customized with
                      the owner. We take photos and/or videos of identified
                      problems or potential problems and send them via our Home
                      Watch software portal, email or text. We ensure the
                      homeowner is aware of any issues and follow their
                      instructions regarding a resolution.
                    </p>
                    <div className="two-column">
                      <div className="row clearfix">
                        {/* Column */}
                        <div className="column col-lg-6 col-md-6 col-sm-12">
                          <div className="image">
                            <Image
                              width={585}
                              height={350}
                              src="/images/home-watch-professional-front-entry.jpg"
                              alt="home-watch-professional-checking-doors"
                            />
                          </div>
                        </div>
                        {/* Column */}
                        <div className="column col-lg-6 col-md-6 col-sm-12">
                          <p>
                            We enter your property according to the agreed upon
                            schedule and perform all agreed upon tasks. In
                            addition, we perform a visual inspection of the
                            property, either inside, outside, or both. We take
                            photos and/or videos of potential identified issues
                            and send them to the homeowner via text or email,
                            depending on the client’s preference.
                          </p>
                          <p>
                            After notifying the homeowner, we will assist with
                            the resolution of the problem according to their
                            instructions. We can meet the homeowners&apos;
                            service companies to allow access, update the
                            homeowner of progress made and secure the home once
                            work is completed.
                          </p>
                          <p>
                            The homeowner will be keep apprised of the situation
                            throughout via regular updates.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
      {/* insert SEO content */}
      <section className="sidebar-page-container">
        <div className="auto-container">
          <div className="row clearfix">
            {/* Content Side */}
            <div className="content-side col-lg-12 col-md-12 col-sm-12">
              {/* Block Detail */}
              <div className="blog-detail">
                <div className="inner-box">
                  <div className="lower-content">
                    <div className="two-column">
                      <div className="row clearfix">
                        {/* Column */}
                        <div className="column col-lg-6 col-md-6 col-sm-12">
                          <h3>National Home Watch Association</h3>
                          <p>
                            Dallas Home Watch is an accredited member of the
                            National Home Watch Association. The National Home
                            Watch Association (NHWA) is a multi-national
                            organization founded in 2009 to bring together
                            business owners in the home watch industry and
                            provide standards by which the members must live and
                            operate their companies.
                          </p>{" "}
                          <p>
                            We operate our business in accordance with the
                            mission statement laid out by the National Home
                            Watch Association. It is the mission and goal of the
                            NHWA to:
                          </p>
                          <details>
                            <summary>
                              <strong>NHWA Mission Statement</strong>
                            </summary>

                            <ul>
                              <li className="bullets">
                                Establish and maintain the highest set of
                                standards and ethics for all Home Watch
                                companies in the United States of America and
                                Canada;
                              </li>
                              <li className="bullets">
                                Establish and maintain trust and confidence
                                between homeowners and Home Watch professionals;
                              </li>
                              <li className="bullets">
                                Protect the public from uninsured, unbonded and
                                unethical individuals who represent themselves
                                as Home Watch professionals;
                              </li>
                              <li className="bullets">
                                Promote public awareness of the Home Watch
                                industry; and Ensure that only companies who
                                represent the highest levels of professionalism
                                are accredited members of the NHWA.
                              </li>
                            </ul>
                          </details>
                          <details>
                            <summary>
                              <strong>Strict Vetting Process</strong>
                            </summary>
                            <p>
                              To become a member of the NHWA, a business owner
                              must undergo a rigorous vetting process that
                              includes the following. This protects you against
                              less-than-principled companies.
                            </p>
                            <ul>
                              <li className="bullets">
                                Criminal background check on all company
                                principals
                              </li>
                              <li className="bullets">
                                Proper insurance coverage (general and
                                professional liability)
                              </li>
                              <li className="bullets">Proper bonding</li>
                              <li className="bullets">
                                Background checks for consumer complaints
                                through Consumer Affairs and the BBB
                              </li>
                              <li className="bullets">
                                Truthful website and advertising content
                              </li>
                              <li className="bullets">
                                Adherence to the NHWA’s Code of Ethics
                              </li>
                              <li className="bullets">
                                Commitment to the NHWA’s Mission Statement
                              </li>
                            </ul>
                          </details>
                        </div>
                        {/* Column */}
                        <div className="column col-lg-6 col-md-6 col-sm-12">
                          <div className="image">
                            <Link
                              href="/accreditation"
                              rel="noreferrer nofollow"
                              target="_blank"
                            >
                              <Image
                                width={300}
                                height={120}
                                src="/images/nhwa-member-logo.jpg"
                                alt="Accredited Home Watch Memeber of National Home Watch Association"
                              />
                            </Link>
                            <br />
                            <p>
                              As a National Home Watch Association member, we
                              are constantly updated with continuing education,
                              hands-on training, conferences, and information
                              sharing through forums. This keeps us abreast of
                              industry and legal requirements, as well as
                              informs us of issues that can affect our clients
                              and teaches us how to avoid or remediate them. Our
                              goal is to protect your property and assets in the
                              best ways possible.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
              {/* Highland Park Gated Community Block */}
              <div className="practice-block col-lg-3 col-md-6 col-sm-12">
                <div className="inner-box gated">
                  <h5>
                    <Link href="service-areas#HighlandPark">
                      <Image
                        height={64}
                        width={64}
                        src="/images/icons/icons8-gate-64-navy.png"
                        alt="Highland Park gated community"
                      />
                      <br />
                      <span className="flaticon-gate">Highland Park</span>
                    </Link>
                  </h5>
                </div>
              </div>
              {/* Lake Forest Block */}
              <div className="practice-block col-lg-3 col-md-6 col-sm-12">
                <div className="inner-box gated">
                  <h5>
                    {" "}
                    <Link href="service-areas#LakeForest">
                      <Image
                        height={64}
                        width={64}
                        src="/images/icons/icons8-gate-64-navy.png"
                        alt="Lake Forest gated community"
                      />
                      <br />
                      <span className="flaticon-gate">Lake Forest</span>
                    </Link>
                  </h5>
                </div>
              </div>
              {/* University Park Community Block */}
              <div className="practice-block col-lg-3 col-md-6 col-sm-12">
                <div className="inner-box gated">
                  <h5>
                    <Link href="service-areas#UniversityPark">
                      <Image
                        height={64}
                        width={64}
                        src="/images/icons/icons8-gate-64-navy.png"
                        alt="University Park gated community"
                      />
                      <br />
                      <span className="flaticon-gate">University Park</span>
                    </Link>
                  </h5>
                </div>
              </div>
              {/* Preston Hollow Gated Community Block */}
              <div className="practice-block col-lg-3 col-md-6 col-sm-12">
                <div className="inner-box gated">
                  <h5>
                    <Link href="service-areas#PrestonHollow">
                      <Image
                        height={64}
                        width={64}
                        src="/images/icons/icons8-gate-64-navy.png"
                        alt="Preston Hollow gated community"
                      />
                      <br />
                      <span className="flaticon-gate">Preston Hollow</span>
                    </Link>
                  </h5>
                </div>
              </div>
              {/* Devonshire Gated Community Block */}
              <div className="practice-block col-lg-3 col-md-6 col-sm-12">
                <div className="inner-box gated">
                  <h5>
                    <Link href="service-areas#Devonshire">
                      <Image
                        height={64}
                        width={64}
                        src="/images/icons/icons8-gate-64-navy.png"
                        alt="Devonshire gated community"
                      />
                      <br />
                      <span className="flaticon-gate">Devonshire</span>
                    </Link>
                  </h5>
                </div>
              </div>
              {/* Bluffview Gated Community Block */}
              <div className="practice-block col-lg-3 col-md-6 col-sm-12">
                <div className="inner-box gated">
                  <h5>
                    <Link href="service-areas#Bluffview">
                      <Image
                        height={64}
                        width={64}
                        src="/images/icons/icons8-gate-64-navy.png"
                        alt="Bluffview gated community"
                      />
                      <br />
                      <span className="flaticon-gate">Bluffview</span>
                    </Link>
                  </h5>
                </div>
              </div>
              {/* Northwood Hills Gated Community Block */}
              <div className="practice-block col-lg-3 col-md-6 col-sm-12">
                <div className="inner-box gated">
                  <h5>
                    <Link href="service-areas#NorthwoodHills">
                      <Image
                        height={64}
                        width={64}
                        src="/images/icons/icons8-gate-64-navy.png"
                        alt="Northwood Hills gated community"
                      />
                      <br />
                      <span className="flaticon-gate">Northwood Hills</span>
                    </Link>
                  </h5>
                </div>
              </div>
              {/* Briarwood Gated Community Block */}
              <div className="practice-block col-lg-3 col-md-6 col-sm-12">
                <div className="inner-box gated">
                  <h5>
                    <Link href="service-areas#Briarwood">
                      <Image
                        height={64}
                        width={64}
                        src="/images/icons/icons8-gate-64-navy.png"
                        alt="Briarwood gated community"
                      />
                      <br />
                      <span className="flaticon-gate">Briarwood</span>
                    </Link>
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

export default HomePage;
