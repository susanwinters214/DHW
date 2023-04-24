import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

function WaterLeaksPage(props) {
  return (
    <Fragment>
      <Head>
        <title>Dallas Home Watch Checks Your Home For Water Leaks</title>
        <link
          rel="canonical"
          href="https://dallashomewatch.com/blog/water-leaks"
        />
        <meta
          name="description"
          content="Water leaks can cause a lot of damage! Home Watch Service includes checking all of your water sources to make sure there are no water leaks. "
        />
        <meta property="fb:app_id" content="8620778781329629" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Dallas Home Watch" />

        <meta
          property="og:url"
          content="https://dallashomewatch.com/blog/water-leaks"
        />
        <meta property="og:title" content="Water Leaks" />
        <meta
          property="og:description"
          content="Water leaks can cause a lot of damage! Home Watch Service includes checking all of your water sources to make sure there are no water leaks. "
        />
        <meta
          property="og:image"
          content="https://dallashomewatch.com/images/blogimg/og-water-leak-damage.jpg"
        />
        <meta property="og:image:width" content="1200px" />
        <meta property="og:image:height" content="630px" />
        <meta
          property="og:image:alt"
          content="Dallas Home Watch Professionals find water leaks and repair when possible or calls a plumber onto the property to fix it after the client has given authorization."
        />
      </Head>
      {/* Facebook Like JS Code*/}
      <div id="fb-root"></div>
      <script
        async
        defer
        crossorigin="anonymous"
        src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v16.0&appId=8620778781329629&autoLogAppEvents=1"
        nonce="YgyAkD1n"
      ></script>
      {/* insert top banner with Page Title & Breadcrumb*/}
      <section className="page-title bg-waterleaks">
        <div className="auto-container">
          <h1>Water Leaks</h1>
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
                    <h2 className="pageTitle">Water Damage Caused By Leaks</h2>
                    <p className="text">
                      Water leaks can be a major problem in homes, causing
                      damage to walls, flooring, and other materials, as well as
                      creating the perfect environment for mold growth. This is
                      why it is important to check for water leaks regularly,
                      especially under sinks where they are most common. By
                      hiring a Home Watch Business to inspect your house while
                      you are away, you can ensure that any water leaks are
                      caught early and addressed quickly, preventing costly
                      damage and potential health problems.
                    </p>
                    <p>
                      Water leaks can occur after a freeze that damages the
                      pipes. Loose connections or corroded valves may also be
                      the cause of a water leak. Dallas Home Watch will check
                      under sinks and toilets looking for water leaks. If water
                      leaks go undetected, they can cause significant damage
                      over time.
                    </p>

                    <div className="image-column col-lg-6 col-md-12 col-sm-12">
                      <div className="inner-column">
                        <div className="image">
                          <Image
                            width={400}
                            height={485}
                            src="/images/blogimg/water-damage-cleanup.jpg"
                            alt="water damage cleanup"
                          />
                        </div>
                      </div>
                    </div>

                    <p>
                      One of the main reasons it is important to check for water
                      leaks under sinks is the potential for mold growth. Mold
                      thrives in damp, dark environments, and a slow water leak
                      under a sink can create the perfect conditions for mold to
                      grow. Mold can be harmful to human health, causing
                      respiratory problems, allergic reactions, and other health
                      issues. It can also be expensive to remediate, requiring a
                      restoration company to come in and repair damaged
                      sheetrock, wood flooring, and other materials.
                    </p>
                    <p>
                      By hiring a Home Watch Business to inspect your house
                      while you are away, you can ensure that any water leaks
                      are caught early and addressed quickly, before they have a
                      chance to cause serious damage. A Home Watch Business can
                      check for signs of water damage, such as wet spots,
                      discoloration, or a musty smell, and take action to
                      prevent further damage.
                    </p>

                    <p>
                      In addition to checking for water leaks under sinks, a
                      Home Watch Business can provide a wide range of other
                      services to help maintain your home while you are away.
                      They can check for signs of roof leaks, ensure that your
                      HVAC system is functioning properly, and even arrange for
                      lawn care or pool maintenance.
                    </p>

                    <p>
                      Overall, water leaks under sinks can be a serious problem,
                      causing damage to your home and creating the perfect
                      environment for mold growth. By hiring a Home Watch
                      Business to inspect your house while you are away, you can
                      ensure that any water leaks are caught early and addressed
                      quickly, helping to prevent costly damage and potential
                      health problems. A Home Watch Business can provide you
                      with peace of mind, knowing that your home is being taken
                      care of while you are away.
                    </p>
                    <h3>Photos of Water Damage</h3>
                    <br />
                    <div className="row clearfix">
                      <div className="image-column col-lg-6 col-md-12 col-sm-12">
                        <div className="image">
                          <Image
                            width={400}
                            height={400}
                            src="/images/blogimg/_waterLEAKS/water-damage-16.jpg"
                            alt="water damage cleanup"
                          />
                          <br />
                        </div>
                      </div>
                      <div className="image-column col-lg-6 col-md-12 col-sm-12">
                        <div className="image">
                          <Image
                            width={400}
                            height={400}
                            src="/images/blogimg/_waterLEAKS/water-damage-02.jpg"
                            alt="water damage cleanup"
                          />
                          <br />
                        </div>
                      </div>
                    </div>
                    <br />

                    <div className="row clearfix">
                      <div className="image-column col-lg-6 col-md-12 col-sm-12">
                        <div className="image">
                          <Image
                            width={400}
                            height={400}
                            src="/images/blogimg/_waterLEAKS/water-damage-03.jpg"
                            alt="water damage cleanup"
                          />
                          <br />
                        </div>
                      </div>
                      <div className="image-column col-lg-6 col-md-12 col-sm-12">
                        <div className="image">
                          <Image
                            width={400}
                            height={400}
                            src="/images/blogimg/_waterLEAKS/water-damage-04.jpg"
                            alt="water damage cleanup"
                          />
                          <br />
                        </div>
                      </div>
                    </div>

                    <br />
                    <div className="row clearfix">
                      <div className="image-column col-lg-6 col-md-12 col-sm-12">
                        <div className="image">
                          <Image
                            width={400}
                            height={400}
                            src="/images/blogimg/_waterLEAKS/water-damage-05.jpg"
                            alt="water damage cleanup"
                          />
                          <br />
                        </div>
                      </div>
                      <div className="image-column col-lg-6 col-md-12 col-sm-12">
                        <div className="image">
                          <Image
                            width={400}
                            height={400}
                            src="/images/blogimg/_waterLEAKS/water-damage-06.jpg"
                            alt="water damage cleanup"
                          />
                          <br />
                        </div>
                      </div>
                    </div>
                    <br />
                    <div className="row clearfix">
                      <div className="image-column col-lg-6 col-md-12 col-sm-12">
                        <div className="image">
                          <Image
                            width={400}
                            height={400}
                            src="/images/blogimg/_waterLEAKS/water-damage-07.jpg"
                            alt="water damage cleanup"
                          />
                          <br />
                        </div>
                      </div>
                      <div className="image-column col-lg-6 col-md-12 col-sm-12">
                        <div className="image">
                          <Image
                            width={400}
                            height={400}
                            src="/images/blogimg/_waterLEAKS/water-damage-08.jpg"
                            alt="water damage cleanup"
                          />
                          <br />
                        </div>
                      </div>
                    </div>
                    <br />
                    <div className="row clearfix">
                      <div className="image-column col-lg-6 col-md-12 col-sm-12">
                        <div className="image">
                          <Image
                            width={400}
                            height={400}
                            src="/images/blogimg/_waterLEAKS/water-damage-09.jpg"
                            alt="water damage cleanup"
                          />
                          <br />
                        </div>
                      </div>
                      <div className="image-column col-lg-6 col-md-12 col-sm-12">
                        <div className="image">
                          <Image
                            width={400}
                            height={400}
                            src="/images/blogimg/_waterLEAKS/water-damage-10.jpg"
                            alt="water damage cleanup"
                          />
                          <br />
                        </div>
                      </div>
                    </div>
                    <br />
                    <div className="row clearfix">
                      <div className="image-column col-lg-6 col-md-12 col-sm-12">
                        <div className="image">
                          <Image
                            width={400}
                            height={400}
                            src="/images/blogimg/_waterLEAKS/water-damage-11.jpg"
                            alt="water damage cleanup"
                          />
                          <br />
                        </div>
                      </div>
                      <div className="image-column col-lg-6 col-md-12 col-sm-12">
                        <div className="image">
                          <Image
                            width={400}
                            height={400}
                            src="/images/blogimg/_waterLEAKS/water-damage-12.jpg"
                            alt="water damage cleanup"
                          />
                          <br />
                        </div>
                      </div>
                    </div>
                    <br />
                    <div className="row clearfix">
                      <div className="image-column col-lg-6 col-md-12 col-sm-14">
                        <div className="image">
                          <Image
                            width={400}
                            height={400}
                            src="/images/blogimg/_waterLEAKS/water-damage-14.jpg"
                            alt="water damage cleanup"
                          />
                          <br />
                        </div>
                      </div>
                      <div className="image-column col-lg-6 col-md-12 col-sm-12">
                        <div className="image">
                          <Image
                            width={400}
                            height={400}
                            src="/images/blogimg/_waterLEAKS/water-damage-15.jpg"
                            alt="water damage cleanup"
                          />
                          <br />
                        </div>
                      </div>
                    </div>
                    <br />
                    <div className="row clearfix">
                      <div className="image-column col-lg-6 col-md-12 col-sm-14">
                        <div className="image">
                          <Image
                            width={400}
                            height={400}
                            src="/images/blogimg/_waterLEAKS/water-damage-01.jpg"
                            alt="water damage cleanup"
                          />
                          <br />
                        </div>
                      </div>
                      <div className="image-column col-lg-6 col-md-12 col-sm-12">
                        <div className="image">
                          <Image
                            width={400}
                            height={400}
                            src="/images/blogimg/_waterLEAKS/water-damage-17.jpg"
                            alt="water damage cleanup"
                          />
                          <br />
                        </div>
                      </div>
                    </div>
                    <br />

                    <br />
                    <div className="row clearfix">
                      <div className="image-column col-lg-6 col-md-12 col-sm-14">
                        <div className="image">
                          <Image
                            width={400}
                            height={400}
                            src="/images/blogimg/_waterLEAKS/water-damage-18.jpg"
                            alt="water damage cleanup"
                          />
                          <br />
                        </div>
                      </div>
                      <div className="image-column col-lg-6 col-md-12 col-sm-12">
                        <div className="image">
                          <Image
                            width={400}
                            height={400}
                            src="/images/blogimg/_waterLEAKS/water-damage-19.jpg"
                            alt="water damage cleanup"
                          />
                          <br />
                        </div>
                      </div>
                    </div>
                    <br />
                    <h3 className="mb-10">Video of Water Damage</h3>
                    <p>
                      Dallas Home Watch looks for water damage in unoccupied
                      homes. Watch the video below of a recent Home Watch
                      Inspection that led to finding mold in a brand new shower.
                    </p>
                    <div id="picTovideo" className="centered">
                      <Link
                        href="https://www.youtube.com/watch?v=1dubkQx47Gk"
                        target="_blank"
                      >
                        <Image
                          src="/images/blogimg/mold-discovered-during-home-watch-inspection.jpg"
                          alt="mold found in shower"
                          width={600}
                          height={600}
                        />
                      </Link>
                    </div>
                    <br />

                    <section className="services-page-section centered">
                      <div className="column col-lg-12 col-md-6 col-sm-6">
                        <h3>Ready To Hire A Home Watch Service Business?</h3>
                        <br />

                        <a
                          href="tel:972-982-7050"
                          className="theme-btn btn-style-two"
                        >
                          <span className="txt">
                            CALL DALLAS HOME WATCH
                            <i className="phone" />
                          </span>
                        </a>
                      </div>
                    </section>

                    <div
                      class="fb-share-button  centered"
                      data-href="https://www.dallashomewatch.com/blog/water-leaks"
                      data-layout=""
                      data-size=""
                    >
                      <Link
                        target="_blank"
                        href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.dallashomewatch.com%2Fblog%2Fwater-leaks&amp;src=sdkpreparse"
                        class="fb-xfbml-parse-ignore"
                      >
                        Share on Facebook
                      </Link>
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

export default WaterLeaksPage;
