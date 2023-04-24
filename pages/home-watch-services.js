import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

function HomeWatchServicesPage(props) {
  return (
    <Fragment>
      <Head>
        <title>Home Watch Services</title>
        <link rel="canonical" href="https://dallashomewatch.com/home-watch-services" />
        <meta
          name="description"
          content="Home Watch Services: 'What Does A Home Watch Service Do?' Home Watchers inspect the interior and exterior of a residential property looking for obvious issues."
        />
        <meta property="fb:app_id" content="8620778781329629" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Dallas Home Watch" />

        <meta
          property="og:url"
          content="https://dallashomewatch.com/home-watch-services"
        />
        <meta property="og:title" content="Home Watch Services" />
        <meta
          property="og:description"
          content="Home Watch Services: 'What Does A Home Watch Service Do?' Home Watchers inspect the interior and exterior of a residential property looking for obvious issues."
        />
        <meta
          property="og:image"
          content="https://dallashomewatch.com/images/og/dallas-home-watch-opening-doors.jpg"
        />
        <meta property="og:image:width" content="1200px" />
        <meta property="og:image:height" content="630px" />
        <meta
          property="og:image:alt"
          content="Dallas Home Watch Professionals checking Homes."
        />
      </Head>
      {/* insert top banner with Page Title & Breadcrumb*/}
      <section className="page-title pageback-hwservice">
        <div className="auto-container">
          <h1>Home Watch Services</h1>
          <ul className="page-breadcrumb">
            <li>
              <Link href="/">home</Link>
            </li>
            <li>Home Watch Services</li>
          </ul>
        </div>
      </section>

      {/* insert section component with Welcome*/}
      <section className="services-detail-section">
        <div className="auto-container">
          <div className="inner-container">
            <div className="lower-content">
              <h2 className="pageTitle">Home Watch Services</h2>
              <p className="text">
                Home Watch Services are professional services that offer regular
                inspections and monitoring of a home, typically for homeowners
                who are away for extended periods of time. The purpose of these
                services is to ensure the safety, security, and maintenance of
                the property while the homeowners are away. Home Watch Services
                typically inclue a range of services, including regular
                inspections of the home and property, checking for signs of
                damage or wear and tear, ensuring that all doors and windows are
                secure, and checking for signs of pests or other issues that
                could affect the safety and security of the property. In
                addition, many Home Watch Services also offer additional
                services such as mail pickup, plant watering, and other tasks
                that may be necessary while the homeowner is away. Overall, the
                goal of Home Watch Services is to provide homeowners with peace
                of mind, knowing that their property is being monitored and
                cared for in their absence.
              </p>
              <p>
                Dallas Home Watch offers a customizable checklist of services
                designed to cover the important aspects of a client's home. We
                also offer flexibility in scheduling and home evaluations to
                meet the needs of our clients.
              </p>
              <p>
                If a problem is uncovered during a home evaluation, Dallas Home
                Watch will immediately notify the client to discuss options to
                address the concern. We will work with the client to resolve the
                issue and help locate qualified tradespeople to assist the homeowner.
                The client can
                instruct Dallas Home Watch on how they would like to proceed.
              </p>
              <p>
                Dallas Home Watch also adds security to the client's vacant home
                by creating the illusion of occupancy. We remove junk mail,
                flyers, and other debris from the yard to deter potential
                criminals from targeting the home. We may also roll trash cans
                to the curb on trash day to give the illusion of being home.
              </p>
              <p>
                Overall, Dallas Home Watch strives to provide our clients with
                peace of mind through frequent communication and customizable
                services. We are fully insured and bonded, which provides an
                extra layer of protection for their clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr id="WhatDoesHWSdo"></hr>
      <section className="services-page-section centered">
        <div className="auto-container">
          <h2>What Does A Home Watch Service Do?</h2>
          <p>
            A Home Watch Professional will inpect the interior and exterior of
            your home. Below are a few photos taken during a Home Watch
            Inspection.
          </p>
          {/* Security Alarms  - TINA R */}
          <div className="services-block-three">
            <div
              className="inner-box wow fadeInUp"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="row clearfix">
                {/* Content Column */}
                <div className="content-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <h3>Security Alarms</h3>
                    <div className="text">
                      We make sure your alarm system is operational. Dallas Home
                      Watch will turn on the alarm and secure all entries when
                      leaving. You can list us as an emergency contact with your
                      alarm company and we will respond to alarms while you are
                      out of town and unable to meet with the police.
                    </div>
                  </div>
                </div>
                {/* Image Column */}
                <div className="image-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="image">
                      <Image
                        width={530}
                        height={416}
                        src="/images/hw-check/security-alarm-inspection.jpg"
                        alt="home security alarm inspection"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Water Faucets  -   L */}
          <div className="services-block-three style-two">
            <div
              className="inner-box wow fadeInUp"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="row clearfix">
                {/* Image Column */}
                <div className="image-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="image">
                      <Image
                        width={530}
                        height={416}
                        src="/images/hw-check/faucet-sink-inspection.jpg"
                        alt="running water faucet"
                      />
                    </div>
                  </div>
                </div>
                {/* Content Column */}
                <div className="content-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <h3>Water Faucets</h3>
                    <div className="text">
                      <p>
                        Ignoring leaky faucets can be highly detrimental to the
                        house's structural integrity, depending on the location
                        of the leak.
                      </p>
                      <p>
                        We check all water faucets to ensure the water is not
                        dripping once it is turned off. We perform a visual
                        inspection of the pipes under your sinks and will alert
                        you of any problems and if necessary, meet with your
                        plumber for repairs. During freezing weather, we can go
                        by your house and drip the faucets.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Watercop -  R */}
          <div className="services-block-three">
            <div
              className="inner-box wow fadeInUp"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="row clearfix">
                {/* Content Column */}
                <div className="content-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <h3>Water Filtration Devices</h3>
                    <div className="text">
                      <p>
                        Property owners should periodically test sensors with
                        water to ensure proper placement, power supply and
                        communication with the WaterCop valve. We can check your
                        WaterCop System to verify it is on and replace the
                        batteries if necessary.
                      </p>
                      <p>
                        If you do not currently have a WaterCop System, Dallas
                        Home Watch offers{" "}
                        <Link href="/keyholder-services">
                          Home Watch Key Holder
                        </Link>{" "}
                        which enables us to meet with technicians for
                        installations.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Image Column */}
                <div className="image-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="image">
                      <Image
                        width={530}
                        height={416}
                        src="/images/hw-check/watercop-device.jpg"
                        alt="water filter inspection"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Tubs & Toilets -  L */}
          <div className="services-block-three style-two">
            <div
              className="inner-box wow fadeInUp"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="row clearfix">
                {/* Image Column */}
                <div className="image-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="image">
                      <Image
                        width={530}
                        height={416}
                        src="/images/hw-check/toilets-and-tubs.jpg"
                        alt="toilet flushing near tub"
                      />
                    </div>
                  </div>
                </div>
                {/* Content Column */}
                <div className="content-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <h3>Toilets & Tubs</h3>
                    <div className="text">
                      <p>
                        Toilets can collect bacteria, which can cause stains. We
                        flush all of the toilets to make sure they are working
                        and to rinse the bowl of any stains.
                      </p>
                      <p>
                        When we flush a toilet, we do not leave the bathroom
                        until the water is completely finished running water
                        into the tank and the flapper is sealed. We turn the
                        water on and off in the tubs and check the surrounding
                        areas for{" "}
                        <Link href="/blog/water-leaks">water leaks</Link> .
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Refrigerator R */}
          <div className="services-block-three">
            <div
              className="inner-box wow fadeInUp"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="row clearfix">
                {/* Content Column */}
                <div className="content-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <h3>Refrigerators</h3>
                    <div className="text">
                      <p>
                        We check to see if your{" "}
                        <Link href="/blog/refrigerators">
                          refrigerator is running{" "}
                        </Link>{" "}
                        by opening the door to see if the light comes on. If you
                        want us to, we can clean out expired food from your
                        refrigerator.
                      </p>{" "}
                      <p>
                        Our{" "}
                        <Link href="/concierge-services">
                          Concierge Services
                        </Link>{" "}
                        can pick up your grocery and beverage store orders,
                        deliver and stock your refrigerator and pantry prior to
                        your arrival with a 48 hour notice. (Monday deliveries
                        would need to be requested on the prior Friday.){" "}
                      </p>
                    </div>
                  </div>
                </div>
                {/* Image Column */}
                <div className="image-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="image">
                      <Image
                        width={530}
                        height={416}
                        src="/images/hw-check/refrigerator-inspection.jpg"
                        alt="refrigerator inspection"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Water Leaks Bar Sink  - TINA L */}
          <div className="services-block-three style-two">
            <div
              className="inner-box wow fadeInUp"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="row clearfix">
                {/* Image Column */}
                <div className="image-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="image">
                      <Image
                        width={530}
                        height={416}
                        src="/images/hw-check/bar-sink-inspection.jpg"
                        alt="bar sink inspection"
                      />
                    </div>
                  </div>
                </div>
                {/* Content Column */}
                <div className="content-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <h3>Water Leaks</h3>
                    <div className="text">
                      <p>
                        {" "}
                        Our{" "}
                        <Link href="/homewatch-checklist">
                          Home Watch Checklist
                        </Link>{" "}
                        includes inspecting under sinks looking for leaks and
                        mold caused by water damage. We will alert you
                        immediately if we find any problems.
                      </p>
                      <p>
                        Read more about{" "}
                        <Link href="blog/water-leaks">water leaks </Link> and
                        view images of the damages a water leak can have on your
                        home.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Media Closet  - TINA  R */}
          <div className="services-block-three">
            <div
              className="inner-box wow fadeInUp"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="row clearfix">
                {/* Content Column */}
                <div className="content-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <h3>Media Equipment</h3>
                    <div className="text">
                      <p>
                        Your media closet may include compenents to sound
                        systems, television systems, lighting systems or
                        internet/cable systems. We can look inside your media
                        closet and reset any components.{" "}
                      </p>
                      <p>
                        <Link href="/keyholder-services">
                          Home Watch Key Holder
                        </Link>{" "}
                        service enables us to meet with your media equipment
                        company to set up new services or install new equipment.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Image Column */}
                <div className="image-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="image">
                      <Image
                        width={530}
                        height={416}
                        src="/images/hw-check/electronics-closet-inspection.jpg"
                        alt="media equipment inspection"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Router  -  L */}
          <div className="services-block-three style-two">
            <div
              className="inner-box wow fadeInUp"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="row clearfix">
                {/* Image Column */}
                <div className="image-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="image">
                      <Image
                        width={530}
                        height={416}
                        src="/images/hw-check/router-inspection.jpg"
                        alt="troubleshooting home router"
                      />
                    </div>
                  </div>
                </div>
                {/* Content Column */}
                <div className="content-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <h3>Routers</h3>
                    <div className="text">
                      <p>
                        {" "}
                        Because your security system may depend on your internet
                        connection, we make sure your router is working properly
                        and can reboot the router when necessary.{" "}
                      </p>
                      <p>
                        <Link href="/keyholder-services">
                          Home Watch Key Holder
                        </Link>{" "}
                        service enables us to meet with your cable / internet
                        company to set up new service or install new equipment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Air Filter R */}
          <div className="services-block-three">
            <div
              className="inner-box wow fadeInUp"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="row clearfix">
                {/* Content Column */}
                <div className="content-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <h3>Air Filters</h3>
                    <div className="text">
                      <p>
                        Dallas Home Watch will check your{" "}
                        <Link href="/blog/air-filters">air filters</Link> and
                        replace them when necessary. Just let us know where your
                        new filters are, and we can replace them while on site.
                        We write the date on the air filters using a black
                        Sharpie so that you will always know the date of the
                        last time the filter was changed.
                      </p>
                      <p>
                        If you are out of air filters, Dallas Home Watch can
                        pick them up at your local Home Depot or receive your
                        order from Amazon.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Image Column */}
                <div className="image-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="image">
                      <Image
                        width={530}
                        height={416}
                        src="/images/hw-check/air-filter-replacement.jpg"
                        alt="replacing air filters in attic"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Breaker Boxes  -  L */}
          <div className="services-block-three style-two">
            <div
              className="inner-box wow fadeInUp"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="row clearfix">
                {/* Image Column */}
                <div className="image-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="image">
                      <Image
                        width={530}
                        height={416}
                        src="/images/hw-check/breaker-box-inspection.jpg"
                        alt="checking breaker box"
                      />
                    </div>
                  </div>
                </div>
                {/* Content Column */}
                <div className="content-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <h3>Breaker Boxes</h3>
                    <div className="text">
                      We know how important it is not to lose electricity to
                      your household appliances while you are away. We check
                      your breaker box to see if any breakers have tripped, and
                      if so, we will reset them.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AC Units in Attic R */}
          <div className="services-block-three">
            <div
              className="inner-box wow fadeInUp"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="row clearfix">
                {/* Content Column */}
                <div className="content-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <h3>A/C Units</h3>
                    <div className="text">
                      We will perform a visual inspection of your A/C units to
                      ensure no condensation leaks are in the drip pan. (We only
                      enter the attic if it is easily accessible and has been
                      floored for safety.)
                    </div>
                  </div>
                </div>
                {/* Image Column */}
                <div className="image-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="image">
                      <Image
                        width={530}
                        height={416}
                        src="/images/hw-check/attic-ac-inspection.jpg"
                        alt="air conditioner inspection in 
                        attic"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*  Washing Machine TINA L  */}
          <div className="services-block-three style-two">
            <div
              className="inner-box wow fadeInUp"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="row clearfix">
                {/* Image Column */}
                <div className="image-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="image">
                      <Image
                        width={530}
                        height={416}
                        src="/images/hw-check/washing-machine-inspection.jpg"
                        alt="visual inspection of the washing machine"
                      />
                    </div>
                  </div>
                </div>
                {/* Content Column */}
                <div className="content-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <h3>Washing Machines</h3>
                    <div className="text">
                      <p>
                        We will check your washing machine to ensure there is no
                        water leaking and no unusual odors coming from the
                        machine.
                      </p>
                      <p>
                        Dallas Home Watch provides{" "}
                        <Link href="/keyholder-services">
                          Home Watch Key Holder
                        </Link>{" "}
                        service so we can meet with your applicance company for
                        new delivery and installations or repairs and
                        maintenance to your equipment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Garage Door Openers TINA R */}
          <div className="services-block-three">
            <div
              className="inner-box wow fadeInUp"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="row clearfix">
                {/* Content Column */}
                <div className="content-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <h3>Garage Door Openers</h3>
                    <div className="text">
                      <p>
                        Dallas Home Watch will make sure that your garage door
                        openers are working and can replace batteries to
                        wireless keypads and remote controllers when needed. We
                        also have experience programming a variety of garage
                        door remotes and handheld or in-car remotes.
                      </p>

                      <p>
                        Read why we check your{" "}
                        <Link href="/blog/garage-door-openers">
                          garage door openers
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
                {/* Image Column */}
                <div className="image-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="image">
                      <Image
                        width={585}
                        height={460}
                        src="/images/car-care/garage-door-openers.jpg"
                        alt="Tina Lawson checking garage doors and openers"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Swimming Pool -  L */}
          <div className="services-block-three style-two">
            <div
              className="inner-box wow fadeInUp"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="row clearfix">
                {/* Image Column */}
                <div className="image-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="image">
                      <Image
                        width={530}
                        height={416}
                        src="/images/hw-check/swimming-pool.jpg"
                        alt="swimming pools and fountains"
                      />
                    </div>
                  </div>
                </div>
                {/* Content Column */}
                <div className="content-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <h3>Pools & Fountains</h3>
                    <div className="text">
                      <p>
                        We check the pool and fountains around your home and
                        make a note if the pumps were running while we were
                        there. We check for algae growth or debris in and around
                        the pool or fountain. We will make a note of the water
                        level of the pool and include it in your Home Watch
                        Check report.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Securing Doors TINA R */}
          <div className="services-block-three">
            <div
              className="inner-box wow fadeInUp"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="row clearfix">
                {/* Content Column */}
                <div className="content-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <h3>Securing Doors</h3>
                    <div className="text">
                      <p>
                        We check all door entries to make sure every one of them
                        is securely locked.
                      </p>

                      <p>
                        If for any reason you need your house re-keyed, we can
                        provide you with the contact information of our priority
                        vendor and meet with them during the process of
                        re-keying your home.
                      </p>
                      <p>
                        When you hire Dallas Home Watch, you can rest assured
                        that all entries to your home are checked and secured.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                {/* Image Column */}
                <div className="image-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="image">
                      <Image
                        width={530}
                        height={416}
                        src="/images/hw-check/securing-back-doors.jpg"
                        alt="water filter inspection"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Trashcans -  L */}
          <div className="services-block-three style-two">
            <div
              className="inner-box wow fadeInUp"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="row clearfix">
                {/* Image Column */}
                <div className="image-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="image">
                      <Image
                        width={530}
                        height={416}
                        src="/images/hw-check/trash-cans.jpg"
                        alt="trash cans in garage"
                      />
                    </div>
                  </div>
                </div>
                {/* Content Column */}
                <div className="content-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <h3>Trash Cans</h3>
                    <div className="text">
                      Leaving trash cans at the curb past your trash pickup day
                      is a sign of an absentee owner. If you left your trash and
                      recycle bins out at the curb when you left town, we will
                      bring them up to the house and place in the garage so that
                      neighbors do not notice you are not home. We also
                      occasionally pull the trash cans to the curb and back up
                      to the house the next day to give the appearance that
                      someone is home.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Back Gate TINA R */}
          <div className="services-block-three">
            <div
              className="inner-box wow fadeInUp"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="row clearfix">
                {/* Content Column */}
                <div className="content-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <h3>Back Gates</h3>
                    <div className="text">
                      Dallas Home Watch Professionals walk the entire property
                      and make sure that every gate or rear entry is secure. We
                      encourage all clients to have locks on all outside
                      entrances to prevent theft and vandalism.
                    </div>
                  </div>
                </div>
                {/* Image Column */}
                <div className="image-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="image">
                      <Image
                        width={530}
                        height={416}
                        src="/images/hw-check/securing-back-gate.jpg"
                        alt="trash cans in garage"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* HomeWatch Checklist -  L */}
          <div className="services-block-three style-two">
            <div
              className="inner-box wow fadeInUp"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="row clearfix">
                {/* Image Column */}
                <div className="image-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="image">
                      <Image
                        width={530}
                        height={416}
                        src="/images/hw-check/home-watch-checklist.png"
                        alt="home watch checklist"
                      />
                    </div>
                  </div>
                </div>
                {/* Content Column */}
                <div className="content-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <h3>Home Watch Checklist</h3>
                    <div className="text">
                      These are only a few of the things Dallas Home Watch
                      checks in your home while you are away. To see a complete
                      list of items we look for during a Home Watch inspection
                      see our{" "}
                      <Link href="/homewatch-checklist">
                        Home Watch Checklist
                      </Link>{" "}
                      .
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
      </section>
    </Fragment>
  );
}

export default HomeWatchServicesPage;
