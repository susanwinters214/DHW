import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

function NationalHomeWatchMonthPage(props) {
  return (
    <Fragment>
      <Head>
        <title>National Home Watch Month 2023</title>
        <meta name="robots" content="noindex"></meta>
        <meta
          name="description"
          content="March 2023 is the first 'National Home Watch Month' created to bring awareness of the definition of 'Home Watch' as a Professional Service offered to Home Owners."
        />
        <meta property="fb:app_id" content="8620778781329629" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Dallas Home Watch" />

        <meta
          property="og:url"
          content="https://www.dallashomewatch.com/national-homewatch-month"
        />
        <meta property="og:title" content="National Home Watch Month 2023" />
        <meta
          property="og:description"
          content="March 2023 is the first 'National Home Watch Month' created to bring awareness of 
          the definition of 'Home Watch' as a Professional Service offered to Home Owners."
        />
        <meta
          property="og:image"
          content="https://www.dallashomewatch.com/images/og/dallas-home-watch-opening-doors.jpg"
        />
        <meta property="og:image:width" content="1200px" />
        <meta property="og:image:height" content="630px" />
        <meta
          property="og:image:alt"
          content="National Home Watch Month Banner"
        />
      </Head>
      {/* insert top banner with Page Title & Breadcrumb*/}
      <section className="page-title pageback-hwservice">
        <div className="auto-container">
          <h1>National Home Watch Month</h1>
          <ul className="page-breadcrumb">
            <li>
              <Link href="/">home</Link>
            </li>
            <li>National Home Watch Month</li>
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
                    <h2 className="pageTitle">March 2023 | NHWM</h2>
                    <p className="text">
                      'Home Watch' is not a familiar term known to the general
                      public. Those of us in the Home Watch Business want to
                      make 'Home Watch' a 'household name'. In order to do that,
                      we need to educate the general public. So March has been
                      declared as "National Home Watch Month". During this
                      month, all of the Home Watch Companies that are accredited
                      with the NHWA will help educate the general public about
                      the Home Watch Industry. Follow our social media accounts
                      to learn more about what is being discussed.
                    </p>
                    <p>
                      Here are some additional{" "}
                      <Link
                        href="https://crestline.com/c/calendar-of-events"
                        target="_blank"
                      >
                        National Holidays
                      </Link>{" "}
                      celebrated:
                    </p>
                    <br />
                    <br />
                    <h2>Home Watch Social Media</h2> <br />
                    <p>
                      Dallas Home Watch on{" "}
                      <Link href="https://www.facebook.com/dallashomewatch">
                        Facebook
                      </Link>
                    </p>
                    <p>
                      Dallas Home Watch on{" "}
                      <Link href="https://www.yelp.com/biz/dallas-home-watch-farmers-branch-2">
                        Yelp
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-page-section centered">
        <div className="auto-container">
          <h2>What Does A Home Watch Service Do?</h2>
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
          {/* Water Leaks  -   L */}
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
                        plumber for repairs.
                      </p>
                      <p>
                        During freezing weather, we can go by your house and
                        drip the faucets to help prevent pipes from busting.
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
                        Property owners or installers should periodically test
                        sensors with water to ensure proper placement, power
                        supply and communication with the WaterCop valve. We can
                        check your WaterCop System to verify it is on and
                        replace the batteries if necessary.
                      </p>
                      <p>
                        If you do not currently have a WaterCop System and would
                        like one installed, Dallas Home Watch offers{" "}
                        <Link href="/keyholder-services">
                          Home Watch Key Holder
                        </Link>{" "}
                        which enables us to meet with the technician and install
                        the WaterCop system while you gone
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
                        and to rinse the bowl of any stains. We may pour a half
                        cup of bleach into the bowl if necessary.{" "}
                      </p>
                      <p>
                        When we flush a toilet, we do not leave the bathroom
                        until the water is completely finished running water
                        into the tank and the flapper is sealed.
                      </p>
                      <p>
                        {" "}
                        We turn the water on and off in the tubs and check the
                        surrounding areas for water leaks.{" "}
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
                        We check the refrigerator to make sure the light comes
                        on. If you want us to, we can clean out expired food
                        from your refrigerator.
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
          {/* Bar Sink  - TINA L */}
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
                      Our{" "}
                      <Link href="/homewatch-checklist">
                        Home Watch Checklist
                      </Link>{" "}
                      includes inspecting under sinks looking for leaks and mold
                      caused by water damage. We will alert you immediately if
                      we find any problems.
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
                        Dallas Home Watch will check your air filters and
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
                        We can meet with your garage door technician while they
                        complete the annual maintenance of your garage door
                        system or during the installation of new garage doors.
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
        </div>
      </section>

      <section className="services-page-section centered">
        <div className="column col-lg-12 col-md-6 col-sm-6">
          <h3>Ready To Hire A Home Watch Service Business?</h3>
          <br />

          <a href="tel:972-982-7050" className="theme-btn btn-style-two">
            <span className="txt">
              CALL DALLAS HOME WATCH
              <i className="phone" />
            </span>
          </a>
        </div>
      </section>
    </Fragment>
  );
}

export default NationalHomeWatchMonthPage;
