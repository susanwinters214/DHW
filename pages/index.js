import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Reviews from "../components/home-page/reviews";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Dallas Home Watch LLC.| Home Watch Dallas </title>
        <meta
          name="description"
          content="Dallas Home Watch is a local, woman owned business that provides visual inspections both inside and outside of a home or property looking for obvious issues."
        />
        <meta
          property="keywords"
          content="home watch, home watch dallas, dallas home watch"
        />
        <link rel="canonical" href="https://www.dallashomewatch.com"></link>

        <meta property="fb:app_id" content="8620778781329629" />
        <meta property="og:type" content="website" />
        <meta
          property="og:site_name"
          content="Dallas Home Watch LLC | Home Watch in Dallas"
        />

        <meta property="og:url" content="https://www.dallashomewatch.com" />
        <meta property="og:title" content="Dallas Home Watch" />
        <meta
          property="og:description"
          content="Dallas Home Watch is a local, woman owned business that provides visual inspections both inside and outside of a home or property looking for obvious issues."
        />
        <meta
          property="og:image"
          content="https://www.dallashomewatch.com/images/og/dallas-home-watch-logo-skyline-certified.jpg"
        />
        <meta property="og:image:width" content="1200px" />
        <meta property="og:image:height" content="630px" />
        <meta
          property="og:image:alt"
          content="Dallas Home Watch logo over Dallas Skyline"
        />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/dallashomewatch/"
        ></meta>
      </Head>
      {/* top Banner Area */}

      <section className="page-title" style={{}}>
        <Image
          src="/images/background/dallas-texas-skyline.jpg"
          layout="fill"
          objectFit="cover"
          alt="dallas skyline"
          style={{
            zIndex: -99,
          }}
        />

        <div className="auto-container">
          <div className="row clearfix">
            <div className="services-block col-lg-12 col-md-12 col-sm-12">
              <div className="homepagetopcontent">
                <h1 className="title zindexh1tag h1homepage">
                  Dallas Home Watch LLC.
                </h1>
                <h2 className="h2homepage">Home Watch Services in Dallas </h2>
                <div className="bannerbox btns-box centered">
                  <Link
                    href="/home-watch-services"
                    className="theme-btn btn-style-two"
                  >
                    <span className="txt">
                      CALL FOR APPOINTMENT
                      <i className="phone" />
                    </span>
                  </Link>
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 BLOCKS */}

      <section className="welcome-section MOVEUP">{/* 4 blocks */}</section>
      {/* insert Welcome */}
      <section
        className="welcome-section moveupHeader"
        style={{ backgroundImage: "url(images/background/pattern-1.gif)" }}
      >
        <div className="auto-container moveupHeader">
          <div className="inner-container  ">
            <div className="clearfix">
              {/* Content Column */}
              <div className="content-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column ">
                  {/* Sec Title */}
                  <div className="text">
                    <h2>Home Watch in Dallas</h2>
                    <p>
                      'Home Watch' is a visual inspection of a home or property,
                      looking for obvious issues. Home Watch Services are
                      scheduled inspections of unoccupied or vacant properties
                      while the owner is away (because the homeowners are either
                      staying at another property for awhile or are away on an
                      extended vacation).
                      <br />
                    </p>
                    <p>
                      <strong>Dallas Home Watch LLC.</strong> offers
                      professional{" "}
                      <Link href="/home-watch-services">
                        Home Watch Services
                      </Link>{" "}
                      in the Dallas, Texas area. We service several
                      neighborhoods in North Dallas, mid-cities and downtown
                      Dallas. We provide visual inspections of both the interior
                      and exterior of homes and properties, looking for obvious
                      issues that may cause potential damage. We keep homeowners
                      informed of any issues and follow the client's
                      instructions regarding a resolution with them.
                    </p>
                    <br />
                    <h3>Not House Sitter or Property Manager</h3>
                    <br />
                    <p>
                      Unlike other options like{" "}
                      <Link
                        href="national-homewatch-month#HouseSitter"
                        name="linkToHouseSitter"
                        aria-label="House Sitter information"
                      ></Link>{" "}
                      House Sitters or Property Managers, Dallas Home Watch is a
                      fully accredited and bonded company that prioritizes the
                      care and <strong>maintenance of your home</strong>. We are
                      committed to providing high-quality home watch services,
                      ensuring that homeowners can travel worry-free, knowing
                      that their property is in good hands. Our attention to
                      detail and expertise in Home Watch Services make Dallas
                      Home Watch a top choice for homeowners who value peace of
                      mind.
                    </p>
                    <p>
                      Don't leave the safety and security of your home to
                      chance. Trust Dallas Home Watch to provide exceptional{" "}
                      <strong>Home Watch Services</strong> that exceed your
                      expectations.
                    </p>
                  </div>
                </div>
              </div>

              {/* Image Column */}
              <div className="image-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div className="image title" data-tilt="" data-tilt-max={2}>
                    <br />
                    <Image
                      width={300}
                      height={200}
                      src="/images/logos/dallas-home-watch-logo-585x300.jpg"
                      alt="dallas Home Watch logo"
                    />
                    <br />
                    <Image
                      width={585}
                      height={725}
                      src="/images/open-front-door-585w.jpg"
                      alt="homewatch professionals entering front door to perform Home Watch Services"
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
                    href="home-watch-services"
                    className="theme-btn btn-style-three"
                  >
                    <span className="txt">
                      Home Watch Services <i className="arrow flaticon-right" />
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
        <div className="image-layer" />
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

          {/*Video Box*/}
          <div className="video-boxed">
            <Link
              aria-label="What is Homewatch video"
              name="gotoyoutubevideo"
              className="lightbox-image2"
              href="https://youtu.be/feTvuoxzt4c"
              target="_blank"
            >
              <video
                width="100%"
                height="400"
                poster="/images/large-modern-home-765.jpg"
              >
                <source src="https://youtu.be/feTvuoxzt4c" type="video/mp4" />
              </video>
            </Link>
            <br />
            <h3 className="gold centered">
              What is Home Watch? - Watch the video above
            </h3>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <p id="whyhireHWS">&nbsp;</p>
      {/* WalkingInSection */}
      <section className="sidebar-page-container">
        <div className="auto-container">
          <div className="row clearfix">
            {/* Content Side */}
            <div className="content-side col-lg-12 col-md-12 col-sm-12 ">
              {/* Block Detail */}
              <div className="blog-detail">
                <div className="inner-box">
                  <div className="lower-content">
                    <br />
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
                      Dallas Home Watch serves homeowners who either have more
                      than one residential property or who travels for long
                      periods of time leaving their home or condo unoccupied.
                      Because our clients often travel out of state or out of
                      the country for long periods, they can rest assured that
                      Dallas Home Watch will visit their property weekly (or
                      more often if desired) and will be their eyes and ears
                      while they are away.
                    </p>

                    <blockquote>
                      <span className="quote-icon flaticon-quote-1" />
                      <div className="quote-text">
                        Keep informed about your home while you are away.
                      </div>
                      <div className="quote-author">By Tina Lawson</div>
                    </blockquote>

                    <div className="two-column  ">
                      <div className="row clearfix">
                        {/* Column */}
                        <div className="column col-lg-6 col-md-6 col-sm-12">
                          <div className="image">
                            <Image
                              width={585}
                              height={350}
                              title="HomeWatch performing Home Watch Services"
                              src="/images/home-watch-professional-front-entry.jpg"
                              alt="homewatch professional going in door to perform home watch services"
                            />
                          </div>
                        </div>
                        {/* Column */}
                        <div className="column col-lg-6 col-md-6 col-sm-12">
                          <br />{" "}
                          <p>
                            Direct communication with our clients is paramount
                            to keeping homeowners informed about the status of
                            their home and property.
                          </p>
                          <p>
                            We enter your property according to the agreed upon
                            schedule and perform all agreed upon tasks. We take
                            photos and/or videos of identified problems or
                            potential problems and send them via our software
                            portal, email or text. We ensure the homeowner is
                            aware of any issues and follow their instructions
                            regarding a resolution.
                          </p>
                          <p>
                            The homeowner will be kept apprised of the situation
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
      {/* National Home Watch Association info */}
      <section className="NHWAsection auto-container">
        {/* Content Side */}
        <div className="content-side col-lg-12 col-md-12 col-sm-12">
          {/* Block Detail */}
          <div className="two-column">
            <div className="row clearfix">
              {/* Column */}
              <div className="column col-lg-6 col-md-6 col-sm-12">
                <h3 className="mb-10">National Home Watch Association</h3>
                <p>
                  Dallas Home Watch LLC. is an accredited member of the National
                  Home Watch Association. The National Home Watch Association
                  (NHWA) is a multi-national organization founded in 2009 to
                  bring together business owners in the home watch industry and
                  provide standards by which the members must live and operate
                  their companies.
                </p>{" "}
                <p>
                  We operate our business in accordance with the mission
                  statement laid out by the National Home Watch Association.
                </p>
                <Link href="/accreditation" target="_blank">
                  <Image
                    width={300}
                    height={120}
                    src="/images/nhwa-member-logo.jpg"
                    alt="Accredited Member of the National Home Watch Association"
                  />
                </Link>
                <br />
                <br />
                <p className="mb-10">
                  As a National Home Watch Association member, we are constantly
                  updated with continuing education, hands-on training,
                  conferences, and information sharing through forums. This
                  keeps us abreast of industry and legal requirements, as well
                  as informs us of issues that can affect our clients and
                  teaches us how to avoid or remediate them. Our goal is to
                  protect your property and assets in the best ways possible.
                </p>
                <p>
                  Dallas Home Watch LLC is a local, woman-owned business that
                  provides Home Watch Services. Tina Lawson, owner of Dallas
                  Home Watch, is a Certified Home Watch Professional.
                  Certification #05220241
                </p>
              </div>
              {/* Column */}
              <div className="column col-lg-6 col-md-6 col-sm-12">
                <h4 className="mb-10">NHWA Mission Statement</h4>
                <ul>
                  <li className="bullets">
                    Establish and maintain the highest set of standards and
                    ethics for all Home Watch companies in the United States of
                    America and Canada;
                  </li>
                  <li className="bullets">
                    Establish and maintain trust and confidence between
                    homeowners and Home Watch professionals;
                  </li>
                  <li className="bullets">
                    Protect the public from uninsured, unbonded and unethical
                    individuals who represent themselves as Home Watch
                    professionals;
                  </li>
                  <li className="bullets">
                    Promote public awareness of the Home Watch industry; and
                    Ensure that only companies who represent the highest levels
                    of professionalism are accredited members of the NHWA.
                  </li>
                </ul>
                <br />
                <h4 className="mb-10">Strict Vetting Process</h4>
                <p>
                  To become a member of the NHWA, a business owner must undergo
                  a rigorous vetting process that includes the following. This
                  protects you against less-than-principled companies.
                </p>
                <ul>
                  <li className="bullets">
                    Criminal background check on all company principals
                  </li>
                  <li className="bullets">
                    Proper insurance coverage (general and professional
                    liability)
                  </li>
                  <li className="bullets">Proper bonding</li>
                  <li className="bullets">
                    Background checks for consumer complaints through Consumer
                    Affairs and the BBB
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
                <br />
              </div>
            </div>{" "}
            {/* end of clearfix */}
          </div>{" "}
          {/* end of two column */}
        </div>
      </section>

      <div className="auto-container">
        {/* Sec Title */}

        <h2 className="centered">Our Service Areas</h2>
        <p>
          Dallas Home Watch LLC services the cities of Highland Park and
          University Park as well as several other affluent neighborhoods in
          Dallas.
        </p>
        <div className="inner-column">
          <div className="row SAB">
            {/* Highland Park Gated Community Block */}
            <div className="inner-block col-lg-3 col-md-6 col-sm-12  SAB">
              <Link
                href="/home-watch-highland-park-texas"
                className="service-area-block"
              >
                <Image
                  src="/images/highland-park-street-sign.png"
                  alt="Highland Park street sign"
                  width={265}
                  height={174}
                />
                <br />
                <span className="streetblock2">Highland Park</span>
              </Link>
              <br />
            </div>
            <br />
            {/* University Park Community Block */}
            <div className="inner-block col-lg-3 col-md-6 col-sm-12  SAB">
              <Link
                href="/home-watch-university-park-texas"
                className="service-area-block"
              >
                <Image
                  src="/images/university-park-bridge.png"
                  alt="University Park street sign"
                  width={265}
                  height={174}
                />
                <br />

                <span className="streetblock2">University Park</span>
              </Link>
            </div>

            {/* Lake Forest Block */}
            <div className="inner-block col-lg-3 col-md-6 col-sm-12 SAB">
              <Link
                href="service-areas#LakeForest"
                className="service-area-block"
              >
                <Image
                  src="/images/estates-of-lake-forest2.jpg"
                  alt="Estates of Lake Forest"
                  width={265}
                  height={174}
                />
                <br />
                <span className="streetblock2">Lake Forest</span>
              </Link>
            </div>

            {/* Northwood Hills Gated Community Block*/}
            <div className="inner-block col-lg-3 col-md-6 col-sm-12 SAB">
              <Link
                href="service-areas#NorthwoodHills"
                className="service-area-block"
              >
                <Image
                  src="/images/northwood-hills-neighborhood.png"
                  alt="Estates of Lake Forest"
                  width={265}
                  height={174}
                />
                <br />
                <span className="streetblock2">Northwood Hills</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <br />
      <p className="centered">Downtown Dallas Luxury Condos </p>
      <div className="sec-title centered">
        <Image
          decoding="async"
          width="800"
          height="375"
          src="/images/background/dallas-skyline-serving-dallas-1170x375.jpg"
          alt="Dallas skyline painting - Dallas, Texas"
          title="Dallas area"
        />
        <br /> <br />
      </div>
      <br />

      <div className="clear:both;"></div>

      <section className="testimonial-section">
        <div className="auto-container">
          <div className="sec-title centered">
            <h2>Testimonials</h2>

            <div className="row">
              <div id="testimonial1" className="col-lg-4 col-md-6 col-sm-12">
                <div className="testimonial-block">
                  <div className="inner-box">
                    <div className="author-image"></div>
                    <span className="quote-icon flaticon-quote-1"></span>
                    <div className="text">
                      DHW is the quintessential exception. We have always been
                      extremely pleased by their exemplary concierge-like
                      service, exuberant attitude, poise, bearing and demeanor,
                      and especially their professionalism.
                    </div>
                    <div className="name">Ron C.</div>
                  </div>
                </div>
              </div>
              <div id="testimonial1" className="col-lg-4 col-md-6 col-sm-12">
                <div className="testimonial-block">
                  <div className="inner-box">
                    <div className="author-image"></div>
                    <span className="quote-icon flaticon-quote-1"></span>
                    <div className="text">
                      We had another great summer in CO and I can’t thank you
                      enough for all you have done! Your notes, phone calls,
                      videos and pictures assure us that our home is in good
                      hands! That waterfall was a real pain but you stayed after
                      it until we hopefully now have a solution.
                    </div>
                    <div className="name">Ric S.</div>
                  </div>
                </div>
              </div>
              <div id="testimonial1" className="col-lg-4 col-md-6 col-sm-12">
                <div className="testimonial-block">
                  <div className="inner-box">
                    <div className="author-image"></div>
                    <span className="quote-icon flaticon-quote-1"></span>
                    <div className="text">
                      {" "}
                      A professional who is in charge of checking the house and
                      making sure everything works can often spot things that
                      the resident might not, especially if they are traveling
                      often. I can't imagine where we would be without Tina.{" "}
                    </div>
                    <div className="name">Tamara M.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />

      <div className="column col-lg-12 col-md-6 col-sm-6 centered">
        <h3>Ready To Hire Home Watch Service?</h3>
        <br />

        <Link href="tel:972-982-7050" className="theme-btn btn-style-two">
          <span className="txt">
            CALL DALLAS HOME WATCH
            <i className="phone" />
          </span>
        </Link>
      </div>
      <br />
      <br />
    </Fragment>
  );
}

export default HomePage;
