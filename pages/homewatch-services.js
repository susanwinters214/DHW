import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

function HomeWatchServicesPage(props) {
  return (
    <Fragment>
      <Head>
        <title>Home Watch Services Photo Gallery</title>
        <meta
          name="description"
          content="Home Watch Services Photo Gallery answers the question 'What Does A Home Watch Service Do?' "
        />
        <meta property="fb:app_id" content="8620778781329629" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Dallas Home Watch" />

        <meta
          property="og:url"
          content="https://www.dallashomewatch.com/homewatch-services"
        />
        <meta property="og:title" content="Home Watch Services" />
        <meta
          property="og:description"
          content="Home Watch Services Photo Gallery answers the question
         'What Does A Home Watch Service Do?' Home Watch Professionals look for water leaks, mold, 
         roken items and answer alarms."
        />
        <meta property="og:image:url" content="httpg" />
        <meta property="og:image:width" content="1200px" />
        <meta property="og:image:height" content="630px" />
        <meta
          property="og:image:alt"
          content="Dallas Home Watch Professionals checking Homes."
        />
      </Head>
      {/* insert top banner with Page Title & Breadcrumb*/}
      <section className="page-title pageback-con">
        <div className="auto-container">
          <h1>Home Watch Services Photo Gallery</h1>
          <ul className="page-breadcrumb">
            <li>
              <Link href="/">home</Link>
            </li>
            <li>Home Watch Services</li>
          </ul>
        </div>
      </section>

      <section className="services-page-section centered">
        <div className="auto-container">
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
                      We check all waterfaucets to ensure the water is not
                      dripping once it is turned off.
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
                      We can look inside your media closet and reset any
                      components.{" "}
                      <Link href="/keyholder-services">
                        Home Watch Key Holder
                      </Link>{" "}
                      service enables us to meet with your media equipment
                      company to set up new services or install new equipment.
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
                      We check the refrigerator to make sure the light comes on.
                      If you want us to, we can clean out expired food from your
                      refrigerator. Our{" "}
                      <Link href="/concierge-services">Concierge Services</Link>{" "}
                      can pick up your grocery and beverage store orders,
                      deliver and stock your refrigerator and pantry prior to
                      your arrival with a 48 hour notice. (Monday deliveries
                      would need to be requested on the prior Friday.)
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
          {/* Router Sink  -  L */}
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
                      Because your security system may depend on your internet
                      connection, we make sure your router is working properly
                      and can reboot the router when necessary.{" "}
                      <Link href="/keyholder-services">
                        Home Watch Key Holder
                      </Link>{" "}
                      service enables us to meet with your cable / internet
                      company to set up new service or install new equipment.
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
                      Dallas Home Watch will check your air filters and replace
                      them when necessary. Just let us know where your new
                      filters are, and we can replace them while on site. We
                      write the date on the air filters using a black Sharpie so
                      that you will always know the date of the last time the
                      filter was changed.
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
          {/* Router Sink  -  L */}
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
                      Because your security system may depend on your internet
                      connection, we make sure your router is working properly
                      and can reboot the router when necessary.{" "}
                      <Link href="/keyholder-services">
                        Home Watch Key Holder
                      </Link>{" "}
                      service enables us to meet with your cable / internet
                      company to set up new service or install new equipment.
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
                      We flush all of the toilets to make sure they are working.
                      We turn the water on and off in the tubs.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Breaker Box in Attic R */}
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
                    <h3>Breaker Boxes</h3>
                    <div className="text">
                      We know how important it is not to lose electricity to
                      your household appliances while you are away. We check
                      your breaker box to see if any breakers have tripped, and
                      if so, we will reset them.
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
                        src="/images/hw-check/breaker-box-inspection.jpg"
                        alt="checking breaker box"
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
                      We check the pool and fountains around the house and make
                      a note if the pumps were running while we were there. We
                      check for algae growth or debris in and around the pool or
                      fountain. We will make a note of the water level of the
                      pool.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Washing MAchine TINA R */}
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
                    <h3>Washing Machines</h3>
                    <div className="text">
                      We will check your washing machine to ensure there is no
                      water leaking and no unusual odors coming from the
                      machine.
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
                        src="/images/hw-check/washing-machine-inspection.jpg"
                        alt="visual inspection of the washing machine"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Watercop -  L */}
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
                        src="/images/hw-check/watercop-device.jpg"
                        alt="water filter inspection"
                      />
                    </div>
                  </div>
                </div>
                {/* Content Column */}
                <div className="content-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <h3>Water Filtration Devices</h3>
                    <div className="text">
                      We can check your WaterCop System to verify it is on.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Washing MAchine TINA R */}
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
                      We check all door entries to make sure every one of them
                      is securely locked. If for any reason you need your house
                      re-keyed, we can provide you with the contact information
                      of our priority vendor and meet with them during the
                      process of re-keying your home.
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

export default HomeWatchServicesPage;
