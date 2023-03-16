import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

function FAQsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>
          Home Watch FAQs - Frequently Asked Questions for Dallas Home Watch
        </title>
        <meta
          name="description"
          content="Frequently Asked Questions for Dallas Home Watch. Get answers to questions about Home Watch and the services we provide."
        />

        <meta property="fb:app_id" content="8620778781329629" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Dallas Home Watch" />

        <meta
          property="og:url"
          content="https://www.dallashomewatch.com/faqs"
        />
        <meta
          property="og:title"
          content=" Home Watch FAQs - Frequently Asked Questions for Dallas Home Watch"
        />
        <meta
          property="og:description"
          content="Frequently Asked Questions for Dallas Home Watch. Get answers to questions about Home Watch and the services we provide."
        />
        <meta
          property="og:image"
          content="https://www.dallashomewatch.com/images/og/xxxxxxxxxxxxxxxxxxxx.jpg"
        />
        <meta property="og:image:width" content="1200px" />
        <meta property="og:image:height" content="630px" />
        <meta
          property="og:image:alt"
          content="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        />
      </Head>
      {/* insert top banner with Page Title & Breadcrumb*/}
      <section className="page-title pageback-con">
        <div className="auto-container">
          <h1>Home Watch FAQs</h1>
          <ul className="page-breadcrumb">
            <li>
              <Link href="/">home</Link>
            </li>
            <li>FAQs</li>
          </ul>
        </div>
      </section>
      {/* insert top photo section*/}
      <section className="services-detail-section">
        <div className="auto-container">
          <div className="inner-container">
            <div className="lower-content">
              <h2 className="pageTitle">
                Here are answers to questions we get asked
              </h2>
              <br />

              <h3>Where is Dallas Home Watch located?</h3>
              <p>
                Dallas Home Watch is located at 13101 Preston Road Suite 110410,
                Dallas, Texas 75240
              </p>

              <h3>Does Dallas Home Watch have a Facebook page?</h3>
              <p>
                Yes, you can find the Facebook page of Dallas Home Watch here:{" "}
                <Link href="https://www.facebook.com/dallashomewatch">
                  Dallas Home Watch Facebook Page
                </Link>
              </p>
              <h3>Is "Home Watch" just another name for a House Sitter?</h3>
              <p>
                No. You hire a House Sitter to come stay at your house for the
                entire duration of your absence. A House Sitter will sleep, eat
                and lounge in your house. A House Sitter does not perform
                inspections and provide detailed reports of potential problems
                at your property. Because "Home Watch" is not a known CATEGORY
                of business, yet we are asked to choose a category on directory
                sites and social media sites, sometimes Home Watch companies
                have no choice but to select "House Sitter" as the category that
                best describes their business. The NHWA is working to get "Home
                Watch" listed as a business category, but until then, you might
                find that Home Watch companies are categorized as a House
                Sitter.{" "}
                <Link href="/national-homewatch-month">
                  Learn more about what Home Watch is
                </Link>
                .
              </p>

              <h3>Is "Home Watch" just another name for a Home Inspector?</h3>
              <p>
                Home Watch is a service that performs visual inspections of a
                home or property, looking for obvious issues. Yes, we do perform
                inspections but no, we are not Home Inspectors that inspects
                homes before they are bought or sold. Because "Home Watch" is
                not a known CATEGORY of business, yet we are asked to choose a
                category on directory sites and social media sites, sometimes
                Home Watch companies have no choice but to select "Home
                Inspections" as the category that best describes their business.
                The NHWA is working to get "Home Watch" listed as a business
                category, but until then, you might find that Home Watch
                companies are categorized as a House Inspector.{" "}
                <Link href="/national-homewatch-month">
                  Learn more about what Home Watch is
                </Link>
              </p>
              <h3>When Should I Hire A Home Watch Company?</h3>
              <p>
                You should schedule to meet with a Home Watch Professional
                several weeks before you leave town. The Home Watch Professional
                will get all the necessary information about your home and do a
                complete walk thru with you to discuss the items that you want
                added or removed from the{" "}
                <Link href="/homewatch-checklist">Home Watch Checklist</Link>.
              </p>
              <br />
              <h2>Don't Leave Home Without Calling Your Home Watch Company</h2>
              <p>If you plan to leave town for two weeks or longer, make sure you notify your Home Watch company!  Leave your keys with us and we'll take care of keeping an eye on your property while you are away.  </p>
              <br />
            </div>
            <div className="centered">
              <Image
                width={1000}
                height={415}
                src="/images/dont-leave-home-without-homewatch-service.jpg"
                alt="concierge stocking the refrigerator"
              />
            </div>
          </div>
        </div>
      </section>

      {/* insert section component CTA*/}

      <section className="services-page-section centered">
        <div className="column col-lg-12 col-md-6 col-sm-6">
          <h3>Ready To Hire A Home Watch Service Business?</h3>
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

export default FAQsPage;
