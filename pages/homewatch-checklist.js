import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

function HomeWatchChecklistPage(props) {
  return (
    <Fragment>
      <Head>
        <title>Home Watch Checklist</title>
        <link
          rel="canonical"
          href="https://www.dallashomewatch.com/homewatch-checklist"
        />
        <meta
          name="description"
          content="Our Home Watch Checklist includes checking household appliances 
          and equipment which are often the source of a problem. "
        />
        <meta property="fb:app_id" content="8620778781329629" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Dallas Home Watch" />

        <meta
          property="og:url"
          content="https://www.dallashomewatch.com/homewatch-checklist"
        />
        <meta property="og:title" content="Home Watch Inspection Checklist" />
        <meta
          property="og:description"
          content="Customize your Home Watch Inspection Checklist. We have a list of household items that we check when we come into your home. The items we check are the ones that could possibly be the source of issues."
        />
        <meta
          property="og:image"
          content="https://www.dallashomewatch.com/images/og/home-watch-checklist.jpg"
        />
        <meta property="og:image:width" content="1200px" />
        <meta property="og:image:height" content="630px" />
        <meta
          property="og:image:alt"
          content="Dallas Home Watch Professional entering front door of home watch client."
        />
      </Head>
      {/* insert top banner with breadcrumb*/}
      <section className="page-title pageback-hwchk">
        <div className="auto-container">
          <h1>Home Watch Check List</h1>
          <ul className="page-breadcrumb">
            <li>
              <Link href="/">home</Link>
            </li>
            <li>Home Watch Check List</li>
          </ul>
        </div>
      </section>

      {/* insert top photo section*/}
      <section className="services-detail-section">
        <div className="auto-container">
          <div className="inner-container">
            <div className="lower-content">
              <h2 className="pageTitle">Home Watch Inspections</h2>
              <br />
              <p>
                All Certified Home Watch Professionals create a{" "}
                <strong>Home Watch Checklist</strong> of items that need to be
                checked in your home while you are away. You can customize your
                Home Watch Checklist to include items you may have in your home
                that are different than the average homeowner. Our Home Watch
                Professionals will document all issues and provide you with a
                report so that you can make any necessary decisions on actions
                to be taken for any problems discovered.
              </p>
              <div className="row">
                <div className="column col-lg-6 col-md-6 col-sm-6">
                  <div className="image">
                    <Image
                      width={530}
                      height={350}
                      src="/images/hw-check/home-watch-checklist.png"
                      alt="home watch checklist"
                    />
                  </div>
                </div>
                <div className="column col-lg-6 col-md-6 col-sm-6">
                  <p>
                    Dallas Home Watch knows how important it is that you feel
                    your home is safe from vandalism. We will start by examining
                    your property for any forced entry or broken windows. We use
                    our Home Watch Checklist as we walk thru your home looking
                    for any signs of potential damage to your property. We will
                    check screens and porch enclosures for any sign of damage,
                    remove newspapers, flyers, packages, and debris from your
                    front porch to avoid signs of an empty home.
                  </p>
                  <p>
                    Our comprehensive menu of services takes the worry out of
                    home ownership whether you are away on business,
                    vacationing, relocating or simply in possession of a
                    property that is not your residence.
                  </p>
                  <p>
                    Home Watch Checklists are customized for each client to suit
                    their needs and priorities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* insert section component with content - SEO*/}
      <section className="services-page-section">
        <div className="auto-container">
          <h2>What Does A Home Watch Service Do?</h2>
          <p>
            A Home Watch Professional will meet with you to discuss your home's
            interior and exterior needs while you are away. The longer you leave
            your house unoccupied the greater the risk of vandalism and{" "}
            <strong>emergency repairs from weather conditions</strong>. This is
            why it is important to hire a local Home Watch buiness to take care
            of your unoccupied home. When you hire Dallas Home Watch we will
            have a Professional Home Watch Team Member walk your property inside
            and out checking for obvious issues and send you a report after each
            visit.
          </p>
          <div className="column col-lg-12 col-md-6 col-sm-6">
            <h3 className="mb-10">
              Home Watch Checklist for Interior Inspection of Home
            </h3>
            <p>
              An extended leave may mean that the homeowner has disabled certain
              aspects of the property like water or Internet. Our indoor
              inspection will cover those items that should be functional
              including working interior lights, functioning alarm system,
              security of windows and doors, access by animals or birds;
              functioning of appliances, air conditioning and heating, no water
              leaks in bathrooms or kitchens; no leaks on ceilings or windows;
              no alarms, beeping or other noises; toilets flushing; no unusual
              odors; technical systems online; and garage door operational. Any
              problems with these or other interior areas will be reported to
              the homeowner and handled according to their instructions.
            </p>
            <br />
            <div className="row clearfix">
              <div className="column col-lg-6 col-md-6 col-sm-6">
                <ul className="list-style-one">
                  <li>Home Security Alarms </li>
                  <li>Water Leaks</li>
                  <li>Electrical Closets</li>
                  <li>Routers </li>
                  <li>Air Filters </li>
                  <li>A/C Units </li>
                  <li>Thermostats </li>
                  <li>Refrigerators </li>
                  <li>Washing Machine </li>
                  <li>Freezers </li>
                  <li>Ice Makers </li>
                  <li>Garbage Disposals </li>
                </ul>
              </div>

              <div className="column col-lg-6 col-md-6 col-sm-6">
                <ul className="list-style-one">
                  <li>Flush Toilets </li>
                  <li>Check Windows </li> <li> </li>
                  <li>Run Water from Faucets </li>
                  <li>Ceilings </li>
                  <li>Water Heaters </li>
                  <li>Water Softener System </li>
                  <li>Water Filters for leaks and verify salt level </li>
                  <li>Turn on lights and fans throughout the house</li>
                  <li>Investigate any noises, alarms, beeps, or odors.</li>
                  <li>Check elevators</li>
                  <li>Wine Cellar</li>
                  <li>Check for mold</li>
                </ul>
              </div>
            </div>
          </div>
          <p>&nbsp;</p>
          <div className="column col-lg-12 col-md-6 col-sm-6">
            <h3 className="mb-10">
              Home Watch Checklist for Exterior Inspection of Home
            </h3>
            <p>
              The outside inspection of your home may include removal of mail,
              boxes, and packages; damage to front doorway and entrances;
              maintenance of landscapes and pools; functioning of pool and other
              equipment; pre- and post-freeze preparation; security of windows
              and other points of entry; functioning of exterior lighting; and
              access by animals or birds. Any problems discovered will be
              reported to the homeowner and handled according to their
              instructions.
            </p>
            <br />
            <div className="row clearfix">
              <div className="column col-lg-6 col-md-6 col-sm-6">
                <ul className="list-style-one">
                  <li>Breaker Boxes </li>
                  <li>Swimming pool or outdoor fountain </li>
                  <li>
                    Outdoor faucets for leakage or covered in cold weather
                  </li>
                  <li>Check for damage caused by fallen trees or limbs </li>
                  <li>Verify landscaping has been performed </li>
                </ul>
              </div>

              <div className="column col-lg-6 col-md-6 col-sm-6">
                <ul className="list-style-one">
                  <li>
                    Operate garage door opener to check drive chain mechanism
                  </li>
                  <li>
                    Irrigation Controller is functioning - inside garage only
                  </li>
                  <li>Check property for erosion or drainage problems, </li>
                  <li>Bring in trashcans </li>
                  <li>Ensure all yard access is secure </li>
                </ul>
              </div>
            </div>
          </div>
          <br /> <br />
          <a href="home-watch-services" className="theme-btn btn-style-three">
            <span className="txt">
              Home Watch Services <i className="arrow flaticon-right" />
            </span>
          </a>
        </div>
      </section>
    </Fragment>
  );
}

export default HomeWatchChecklistPage;
