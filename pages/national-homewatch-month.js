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
          content="https://www.dallashomewatch.com/images/blogimg/og-NHWMonth.jpg"
        />
        <meta property="og:image:width" content="1200px" />
        <meta property="og:image:height" content="630px" />
        <meta
          property="og:image:alt"
          content="National Home Watch Month Banner"
        />
      </Head>
      {/* Facebook Like JS Code*/}
      <div id="fb-root"></div>
      <script
        async
        defer
        crossorigin="anonymous"
        src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v16.0&appId=8620778781329629&autoLogAppEvents=1"
        nonce="P6S6t9vu"
      ></script>

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
                      <strong> 'Home Watch' </strong>is not a term known to the
                      general public. Those in the Home Watch industry want to
                      make 'Home Watch' a household name. To do that, we need to
                      educate the general public. So March has been declared
                      National Home Watch Month. During this time, all Home
                      Watch Companies associated with the NHWA have been
                      encouraged to help educate the general public about the
                      Home Watch Industry.
                    </p>
                    <div className="image centered">
                      <Image
                        src="/images/logos/National-Home-Watch-Month-Logo.jpg"
                        alt="National Home Watch Month Logo"
                        width={526}
                        height={526}
                      />
                    </div>
                    <br /> <br />
                    <h2>What Does A Home Watch Service Do?</h2>
                    <p>
                      Home Watch is a service that performs visual inspections
                      of a home or property, looking for obvious issues. When
                      looking for a Home Watch company, make sure they have a
                      business license, are bonded and insured. You also want to
                      make sure the Home Watch company that you hire has been
                      professionally trained in the Home Watch industry and has
                      the education, knowledge and experience to examine your
                      home, document their findings and provide reports through
                      a secured software portal.
                    </p>
                    <p>
                      The National Home Watch Association (NHWA) was founded in
                      2009 to establish insurance requirements, best practices,
                      policies and procedures, as well as ethics for this new
                      service industry not yet officially recognized by any
                      federal, provincial, or municipal government in the US or
                      Canada. All Accredited Members have background checks and
                      are vetted for business practices. You can find a list of
                      accredited members of the National Home Watch Association
                      on their
                      <Link
                        href="https://www.nationalhomewatchassociation.org/find-an-accredited-nhwa-member/"
                        target="_blank"
                      >
                        {" "}
                        website.
                      </Link>
                      <br />
                      <br />
                    </p>
                    <h2>Who Uses A Home Watch Company?</h2>
                    <p>
                      Clients of Home Watch are those who take long extended
                      vacations or own multiple residential properties. While
                      clients are residing in one of their homes, they need a
                      Home Watch company to make regular visits and inspections
                      of the home they are not currently staying. <br />
                      <br />
                    </p>
                    <h2>Why Are Home Watch Visits Necessary? </h2>
                    <p>
                      A lot can happen inside an unoccupied home. Water leak
                      damage is one of the most expensive catastrophes that can
                      happen to a home. If not caught quickly, floors,
                      baseboards, counters, and furniture could all become
                      ruined from water damage. Home Watch visits include
                      looking for water damage and if found, will immediately
                      take action and notify the homeowner.{" "}
                    </p>
                    <p>
                      Tripped breakers can also cause problems. Imagine coming
                      home to find out that you had a breaker trip which caused
                      your refrigerator to stop working. Now all your food is
                      spoiled and you have a big mess to clean up. Coming home
                      to a defrosted freezer would also not be a pleasant thing.
                      A Home Watch inspection would have caught these problems,
                      fixed them if possible or notified you to help resolve
                      together before you returned home.{" "}
                    </p>
                    <p>
                      Thermostats can also malfunction and cause your home to
                      become too hot or too cold. If the batteries in your
                      thermostat go out, you will be unable to control your HVAC
                      system. When you hire a Home Watch Service Provider, you
                      can rest assured knowing that checking your thermostats is
                      one of the items that will be done.{" "}
                    </p>
                    <div className="row">
                      <div className="column col-lg-4 col-md-4 col-sm-12">
                        {" "}
                        <div className="image centered">
                          <Image
                            src="/images/blogimg/frozen-pool-240x320.jpg"
                            alt="frozen pipes frozen pool"
                            width={240}
                            height={320}
                          />{" "}
                          <br />
                          <br />
                        </div>
                      </div>
                      <div className="column col-lg-4 col-md-4 col-sm-12">
                        {" "}
                        <div className="image centered">
                          <Image
                            src="/images/blogimg/water-damage-240x320.jpg"
                            alt="water damage from water leak"
                            width={240}
                            height={320}
                          />
                          <br />
                          <br />
                        </div>
                      </div>
                      <div className="column col-lg-4 col-md-4 col-sm-12">
                        {" "}
                        <div className="image centered">
                          <Image
                            src="/images/blogimg/big-trees-240x320.jpg"
                            alt="big trees down after Texas storm"
                            width={240}
                            height={320}
                          />
                        </div>{" "}
                        <br />
                        <br />
                      </div>
                    </div>
                    <p>
                      A Home Watch Service can also check your wifi speed to
                      ensure it's working for all your remote access devices. If
                      needed, we can also reboot your router and even meet with
                      your internet service provider if they need to come in to
                      make a repair while you are away.{" "}
                    </p>
                    <p>
                      Inclement weather can also cause damage to your home.
                      Imagine a cold front comes through and freezes your pipes,
                      they burst and now your pool system is ruined. Another
                      potential problem is trees coming down and landing on your
                      house after a large Texas thunderstorm. If you have a Home
                      Watch company looking after your home while you are away,
                      they can check the exterior of your home after bad weather
                      and notify you of any damage done to your property.
                    </p>
                    <p>
                      A Home Watch Service provides homeowners with the
                      assurance that their property is being regularly checked
                      and monitored, giving them peace of mind while they are
                      away. A home watch service can identify potential problems
                      before they become major issues, saving homeowners time
                      and money in the long run. <br />
                      <br />
                    </p>
                    <h2>How is Home Watch different from House Watch? </h2>
                    <p>
                      House Watch is a term often used by HOAs that offer
                      volunteer service of driving by an unoccupied home,
                      walking the exterior premises checking for signs of a
                      break-in or vandalism. Home Watch also performs these
                      actions but goes a step further by doing things to make
                      the home look as though someone is there. We will pick up
                      any mail, flyers or packages from your front door and
                      sweep away any debries or collection of dead bugs. We will
                      also occassionally move your trash cans to the curb on
                      trash day and roll them back into the garage the next day.
                      Upon your requests, we can also change the lighting in
                      your home to make it appear someone is in various parts of
                      the home when you are not there. House Watch programs
                      often use off duty police officers and arrive to your home
                      in their police vehicle which draws attention to your
                      house. Dallas Home Watch will arrive at your house in a
                      discreet, unmarked vehicle in order to not draw attention
                      to the fact that your house is empty and being monitored.
                      Home Watch companies also go above and beyond a House
                      Watch program because Home Watch professionals enter your
                      home and check all of your appliances to make sure
                      everything is working. They also check your attic for
                      leaks after heavy rain. <br />
                      <br />
                    </p>
                    <h2>How is Home Watch different from House Sitting?</h2>
                    <p>
                      When you hire a House Sitter, that person will come in and
                      stay in your home overnight for the duration of your
                      absence. A House Sitter will sleep, eat, watch tv and
                      possibly entertain guests while you are away. Hiring a
                      House Sitter to detour squatters and possible break-ins
                      may be all you want. Home Watch professionals do not stay
                      at your house overnight. They are professionally trained
                      to perform inspections on your home looking for things
                      like water leaks, mold, mildew and more. Home Watch
                      professionals document their findings and notify the
                      homeowner of any potential problems and then work with the
                      client to resolve any issues. A House Sitter will sit in
                      your house. A Home Watch professional will help mitigate
                      risks by performing inspections on your property. <br />
                      <br />
                    </p>
                    <div className="image centered">
                      <Image
                        src="/images/logos/national-home-watch-month-logo.png"
                        alt="National Home Watch Month Logo"
                        width={526}
                        height={526}
                      />
                    </div>
                    <br />
                    <br />
                    <p>
                      In summary, House Watch programs will check the exerior of
                      your home looking for vandalism. House Sitters will sit in
                      your home with the intent to detour squatters or
                      break-ins. And A Home Watch company will provide
                      inspections of the interior and exterior of your home to
                      provide peace of mind about your property while you are
                      away.
                      <br />
                      <br />
                    </p>
                    <div className="content-column col-lg-12 col-md-12 col-sm-12">
                      <div className="text-box">
                        <h3>
                          {" "}
                          <Link
                            target="_blank"
                            href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.dallashomewatch.com%2Fnational-homewatch-month&amp;src=sdkpreparse"
                            class="fb-xfbml-parse-ignore"
                          >
                            Share the News about National Home Watch Month on
                            Facebook.
                          </Link>
                        </h3>
                      </div>
                    </div>
                    <div
                      class="fb-share-button centered"
                      data-href="https://www.dallashomewatch.com/national-homewatch-month"
                      data-layout=""
                      data-size=""
                    >
                      <Link
                        target="_blank"
                        href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.dallashomewatch.com%2Fnational-homewatch-month&amp;src=sdkpreparse"
                        class="fb-xfbml-parse-ignore"
                      >
                        <Image
                          src="/images/blogimg/Facebook-Share-200x100.jpg"
                          alt="Facebook share"
                          width={200}
                          height={100}
                        />
                        <br />
                        Share on Facebook
                      </Link>
                    </div>
                    <br />
                    <br />
                    <h3>National Home Watch Month In The News</h3> <br />
                    <p>
                      Read article on:{" "}
                      <Link href="https://gsabizwire.com/the-national-home-watch-association-announces-the-inaugural-national-home-watch-month/">
                        GSA BizWire
                      </Link>
                    </p>
                    <p>
                      Read article on:{" "}
                      <Link href="https://konklife.com/the-national-home-watch-association-announces-the-inaugural-national-home-watch-month-according-to-the-us-census-bureau-in-their-2021-annual-community-survey-there-are-well-over-2-64-million/">
                        Knoklife
                      </Link>
                    </p>
                    <p>
                      Dallas Home Watch on{" "}
                      <Link href="https://www.facebook.com/dallashomewatch">
                        Facebook
                      </Link>
                    </p>{" "}
                    <br />
                    <p>
                      Interested in other National Days? View the list of{" "}
                      <Link
                        href="https://crestline.com/c/calendar-of-events"
                        target="_blank"
                      >
                        National Holidays
                      </Link>{" "}
                      celebrated.
                    </p>{" "}
                    <br />
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-page-section centered">
        <div className="column col-lg-12 col-md-6 col-sm-6"></div>
      </section>
    </Fragment>
  );
}

export default NationalHomeWatchMonthPage;
