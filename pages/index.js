import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Reviews from "../components/home-page/reviews";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Dallas Home Watch Services | Home Watch Dallas</title>
        <meta
          name="keywords"
          content="home watch, home watch dallas, dallas home watch"
        />
        <meta
          name="description"
          content="Dallas Home Watch is a local, woman owned business that provides visual inspections both inside and outside of a home or property looking for obvious issues."
        />
        <link rel="canonical" href="https://www.dallashomewatch.com"></link>
        <meta property="fb:app_id" content="8620778781329629" />
        <meta property="og:type" content="website" />
        <meta
          property="og:site_name"
          content="Dallas Home Watch LLC | Home Watch in Dallas"
        />
        <meta property="og:type" content="article" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/profile.php?id=100092566267916"
        ></meta>
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
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@dallashomewatch" />
        <meta name="twitter:creator" content="@susanwinters214" />
        <meta
          name="twitter:title"
          content="Dallas Home Watch LLC.| Home Watch Dallas"
        />
        <meta
          name="twitter:description"
          content="Dallas Home Watch is a local, woman owned business that provides visual inspections both inside and outside of a home or property looking for obvious issues."
        />
        <meta
          name="twitter:image"
          content="https://www.dallashomewatch.com/images/og/dallas-home-watch-logo-skyline-certified.jpg"
        />
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

                <br />
                <div className="btns-box centered">
                  <a
                    href="#OurServiceAreas"
                    className="theme-btn btn-style-two"
                  >
                    <span className="txt">View Our Service Areas</span>
                  </a>
                </div>
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
                    <h2>What is Home Watch?</h2>
                    <p>
                      <strong>
                        {" "}
                        Home Watch is a visual inspection of a home or property,
                        looking for obvious issues.
                      </strong>{" "}
                      Home Watch Services are scheduled inspections of
                      unoccupied or vacant properties while the owner is away
                      (because the homeowners are either staying at another
                      property for awhile or are away on an extended vacation).
                      <br />
                    </p>
                    <p>
                      <strong>Dallas Home Watch LLC.</strong> offers
                      professional{" "}
                      <Link href="/home-watch-services" className="bold">
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
                      fully accredited and bonded company that prioritizes reporting of potential needed <strong>maintenance of your home</strong>. We are
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
                    <br /> <br />
                    <div className="frontpagetinylogobox">
                      <Image
                        width={300}
                        height={100}
                        src="/images/logos/dallas-home-watch-logo-300x100.jpg"
                        alt="dallas Home Watch logo"
                      />
                    </div>
                    <br />
                  
                    <Image
                      width={585}
                      height={725}
                      src="/images/tina-lawson-opens-residential-door.jpg"
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

                <div className="certifiedHWP">
                  Tina Lawson is a{" "} Certified Home Watch Professional.                
                 
                  <br />
                  <Image
                    src="/images/logos/home-watch-professional-nhwa-certified.jpg"
                    alt="designer column"
                    height={170}
                    width={170}
                    className="icon"
                    id="nhwa_circle"
                  />
                  <br />
                  #05220241 <br />
                  <br />
                  <a
                    href="home-watch-services"
                    className="theme-btn btn-style-three"
                  >
                    <span className="txt">
                      Home Watch Services <i className="arrow flaticon-right" />
                    </span>
                  </a>
                </div>

                <br />

                <br />
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
     
      <div className="auto-container" id="OurServiceAreas">
        {/* Sec Title */}
      
        <h2 className="centered">Our Service Areas</h2>
        <p>
          Dallas Home Watch LLC services the cities of Highland Park and
          University Park as well as several other affluent neighborhoods in
          Dallas. See <Link href="service-areas">Service Areas</Link>.
        </p>
        <div className="inner-column">
          <div className="row SAB">
            {/* Highland Park Gated Community Block */}
            <div className="inner-block col-lg-4 col-md-6 col-sm-12  SAB">
              <Link
                href="/home-watch-highland-park-texas"
                className="service-area-block"
              >
                <Image
                  src="/images/highland-park-street-sign.png"
                  alt="Home Watch in Highland Park"
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
            <div className="inner-block col-lg-4 col-md-6 col-sm-12  SAB">
              <Link
                href="/home-watch-university-park-texas"
                className="service-area-block"
              >
                <Image
                  src="/images/university-park-bridge.png"
                  alt="Home Watch in University Park"
                  width={265}
                  height={174}
                />
                <br />

                <span className="streetblock2">University Park</span>
              </Link>{" "}
              <br />
            </div>
            <br />
            {/* Irving Valley Ranch Block */}
            <div className="inner-block col-lg-4 col-md-6 col-sm-12 SAB">
              <Image
                src="/images/irving-texas-valley-ranch.jpg"
                alt="Home Watch for Irving"
                width={265}
                height={174}
              />
              <br />

              <span className="streetblock2 serviceAreaBox">Irving</span>
            </div>
            <br />
            {/* North Dallas Block*/}
            <div className="inner-block col-lg-4 col-md-6 col-sm-12 SAB">
              <Image
                src="/images/north-dallas.jpg"
                alt="Home Watch in North Dallas"
                width={265}
                height={174}
              />
              <br />
              <span className="streetblock2 serviceAreaBox">North Dallas</span>

              <br />
            </div>
            <br />
            {/* DALLAS Block */}
            <div className="inner-block col-lg-4 col-md-6 col-sm-12  SAB">
              <Image
                src="/images/dallas-area-homes.jpg"
                alt="Home Watch in Dallas"
                width={265}
                height={174}
              />
              <br />
              <span className="streetblock2 serviceAreaBox">Dallas</span>

              <br />
            </div>
            <br />
            {/* Irving Block */}
            <div className="inner-block col-lg-4 col-md-6 col-sm-12  SAB">
              <Link
                href="service-areas#NorthwoodHills"
                className="service-area-block"
              >
                <Image
                  src="/images/farmers-branch.jpg"
                  alt="Home Watch in Farmers Branch"
                  width={265}
                  height={174}
                />
                <br />
                <span className="streetblock2">Farmers Branch</span>
              </Link>{" "}
              <br />
            </div>
            <br />
            {/* Northwood Hills Gated Community Block*/}
            <div className="inner-block col-lg-3 col-md-6 col-sm-12 SAB">
              <br />
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
      <h3 className="centered">Neighborhoods </h3>
      <br />
      <div className="row SAB neighborhoodList">
        {/* Neighbordhoods   */}

        <div className="inner-block col-lg-3 col-md-6 col-sm-12  SAB"></div>
        <br />
        {/* Column LEFT */}
        <div className="inner-block col-lg-3 col-md-6 col-sm-12  SAB">
          <ul>
            <li>
              {" "}
              <Link href="service-areas#PrestonHollow" className="">
                Preston Hollow
              </Link>
            </li>
            <li>Valley Ranch</li>
            <li>Love Field Area</li>
            <li>
              {" "}
              <Link href="service-areas#Bluffview" className="">
                Bluffview
              </Link>
            </li>
            <li>
              {" "}
              <Link href="service-areas#NorthwoodHills" className="">
                Northwood Hills
              </Link>
            </li>
            <li>Melshire Estates</li>
          </ul>
          <br />
        </div>

        {/* Column RIGHT */}
        <div className="inner-block col-lg-3 col-md-6 col-sm-12 SAB">
          <ul>
            <li>Design District</li>
            <li>Arts District</li>
            <li>Victory Park</li>
            <li>Oak Lawn</li>
            <li>Greenway Parks</li>
            <li>Russwood Acres</li>
          </ul>
          <br />
        </div>

        {/* Empty Block*/}
        <div className="inner-block col-lg-3 col-md-6 col-sm-12 SAB">
          <br />
        </div>
      </div>

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
                      Everything in the house, garage and yard were in wonderful
                      shape. It was amazing! Thank you for taking care of it all
                      during those hot summer months. Our grass and plants look
                      by far the best on our block!{" "}
                    </div>
                    <div className="name">Chris & Sally P.</div>
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