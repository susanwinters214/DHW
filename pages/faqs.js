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
          Home Watch FAQs - Dallas Home Watch Frequently Asked Questions
        </title>
        <link
          rel="canonical"
          href="https://dallashomewatch.com/faqs"
        />
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
          content="https://www.dallashomewatch.com/images/background/questions.jpg"
        />
        <meta property="og:image:width" content="1200px" />
        <meta property="og:image:height" content="630px" />
        <meta
          property="og:image:alt"
          content="question marks for frequently asked questions"
        />
      </Head>
      {/* insert top banner with Page Title & Breadcrumb*/}
      <section className="page-title bg-FAQ">
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
              <h2 className="pageTitle">Answers to Questions we get Asked</h2>
              <br />
              <h3>Where is Dallas Home Watch located?</h3>
              <p>
                Dallas Home Watch is located at 13101 Preston Road Suite 110410,
                Dallas, Texas 75240
              </p>
              <h3 className="pt-25">
                Does Dallas Home Watch have a Facebook page?
              </h3>
              <p>
                Yes, you can find the Facebook page of Dallas Home Watch here:{" "}
                <Link
                  href="https://www.facebook.com/dallashomewatch"
                  target="_blank"
                >
                  Dallas Home Watch Facebook Page
                </Link>
              </p>
              <h3 className="pt-25">What is Home Watch? (video)</h3>
              <p>
                The National Home Watch Association defines Home Watch as “A
                visual inspection of a home or property, looking for obvious
                issues.” Watch our video to see photos of what can happen when
                you don't hire a Home Watch company to keep an eye on your
                unoccupied home.{" "}
                <Link href="https://youtu.be/kGZKVnd8YqU" target="_blank">
                  Video: What is Home Watch?
                </Link>
              </p>
              <h3 className="pt-25">
                Is "Home Watch" just another name for a House Sitter?
              </h3>
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
              <h3 className="pt-25">
                Is "Home Watch" just another name for a Home Inspector?
              </h3>
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
              <h3 className="pt-25">Why Hire a Home Watch Service?</h3>
              <p>
                You hire Home Watch Services when you plan to leave your home
                unoccupied for two weeks or longer and need someone to check on
                your home to make sure things are running smoothly.{" "}
                <Link href="/#whyhireHWS">
                  Learn more why you hire a home watch service
                </Link>
              </p>
              <h3 className="pt-25">What Does A Home Watch Service Do?</h3>
              <p>
                A Home Watch Service includes an inspection of your property.{" "}
                <Link href="/homewatch-services/#WhatDoesHWSdo">
                  See Photos Taken During A Home Watch Inspection
                </Link>
              </p>
              <h3 className="pt-25">
                When Should I Hire A Home Watch Company?
              </h3>
              <p>
                You should schedule to meet with a Home Watch Professional
                several weeks before you leave town. The Home Watch Professional
                will get all the necessary information about your home and do a
                complete walk thru with you to discuss the items that you want
                added or removed from the{" "}
                <Link href="/homewatch-checklist">Home Watch Checklist</Link>.
              </p>
              <h3 className="pt-25">What is a Key Holder Service?</h3>
              <p>
                Key Holder Service is when a bonded and insured company holds
                the keys to your home and has the homeowner's authorization to
                enter the home, perform a task, then lock the door and leave.{" "}
                Read more about our{" "}
                <Link href="/keyholder-services/#WIKeyHolder">
                  Key Holder Services
                </Link>
                .
              </p>
              <h3 className="pt-25">Why Would I Need a Key Holder Service?</h3>
              <p>
                You hire a company for Key Holder Services when you need to meet
                someone at your house but you are not in town. The Key Holder
                holds your keys so that they can meet people at your house and
                let them in. Whether you need to let a guest in or allow vendor
                access to fix items in your home - a Key Holder Service could be
                the answer. Read more about{" "}
                <Link href="/keyholder-services/#WRKeyHolder">
                  Key Holder Services
                </Link>
                .
              </p>
              <h3 className="pt-25">What are Concierge Services?</h3>
              <p>
                Concierge services have been historically offered by hotels –
                where there is a concierge desk in the hotel lobby where
                customers can make their requests. Personal Concierge Services
                is hiring a company to do things for you in reguards to your
                home. This can include grocery shopping, dropping off and
                picking up dry cleaning, stocking your refrigerators with drinks
                and an array of other things. Concierge Service Companies
                specialize in different requests. You just need to ask. Learn
                more about{" "}
                <Link href="/concierge-services">Conceirge Services</Link>.
              </p>
              <br />
              <h3>Why Would I Need Vehicle Care While Out Of Town?</h3>
              <p>
                When you leave home, you are probably leaving your car behind in
                the garage. Dallas Home Watch not only checks your house but we
                can also care for your stored vehicles. Learn more about{" "}
                <Link href="/vehicle-care">Vehicle Care</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="services-detail-section-silver">
        <div className="auto-container">
          <h2>Don't Leave Home Without Calling Your Home Watch Company</h2>
          <p>
            If you plan to leave town for two weeks or longer, make sure you
            notify your Home Watch company! Leave your keys with us and we'll
            take care of keeping an eye on your property while you are away.
          </p>
          <br />
        </div>
        <div className="centered">
          <Image
            width={1000}
            height={415}
            src="/images/dont-leave-home-without-homewatch-service.jpg"
            alt="rearview mirror looking at home leaving"
          />
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
