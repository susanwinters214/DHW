import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

function KeyHolderPage(props) {
  return (
    <Fragment>
      <Head>
        <title>Key Holder Services | DALLAS HOME WATCH</title>
        <link
          rel="canonical"
          href="https://www.dallashomewatch.com/keyholder-services"
        />
        <meta
          name="description"
          content="Key Holder Services holds the keys to your home to allow access to contractors and vendors to come into the home to perform a service. "
        />
        <meta property="fb:app_id" content="8620778781329629" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Dallas Home Watch" />

        <meta
          property="og:url"
          content="https://www.dallashomewatch.com/keyholder-services"
        />
        <meta
          property="og:title"
          content="Key Holder Services | Dallas Home Watch"
        />
        <meta
          property="og:description"
          content="A Key Holder is a professional Home Watch professional that holds the keys to your home to allow access to contractors and vendors to come into the home to perform a service."
        />
        <meta
          property="og:image"
          content="https://www.dallashomewatch.com/images/og/key-holder-services.jpg"
        />
        <meta property="og:image:width" content="1200px" />
        <meta property="og:image:height" content="630px" />
        <meta
          property="og:image:alt"
          content="home owner handing over keys to a Certified Home Watch Professional"
        />
      </Head>
      <Script src="js/jquery.min.js"></Script>
      {/* insert top banner with Page Title & Breadcrumb*/}
      <section className="page-title pageback-keyh">
        <div className="auto-container">
          <h1>Key Holder Services</h1>
          <ul className="page-breadcrumb">
            <li>
              <Link href="/">home</Link>
            </li>
            <li>Key Holder Services</li>
          </ul>
        </div>
      </section>

      {/* insert section component with photo and message*/}
      <section className="services-detail-section">
        <div className="auto-container">
          <div className="inner-container">
            <div className="lower-content">
              <h2 className="pageTitle">Dallas Key Holder Services</h2>
              <p>
                <br />
                When you own a large home there are a lot of things you need to
                manage. Dallas Home Watch can hold your keys and be your
                authorized on-site dedicated person to meet with vendors and
                contractors while you are away, to keep your home operating
                efficiently.
              </p>
              <p>
                Dallas Home Watch can help you and your family get access back
                into your home when you have lost your keys. Do not risk the
                security of your home by leaving keys under a doormat or
                flowerpot. Leave your keys with Dallas Home Watch, your trusted
                key holder.
              </p>
              <p>
                Below is a list of the many reasons you may want to use Dallas
                Home Watch as your dedicated Key Holder.
              </p>
              <div className="row clearfix">
                <div className="column col-lg-3 col-md-6 col-sm-6">
                  <ul className="list-style-one">
                    <li>Wine Deliveries</li>
                    <li>Art Deliveries</li>
                  </ul>
                </div>
                <div className="column col-lg-3 col-md-6 col-sm-6">
                  <ul className="list-style-one">
                    <li>Furniture Deliveries</li>
                    <li>Cable / Internet Installers</li>
                  </ul>
                </div>
                <div className="column col-lg-3 col-md-6 col-sm-6">
                  <ul className="list-style-one">
                    <li>Maid Service</li>
                    <li>Handyman Services</li>
                  </ul>
                </div>
                <div className="column col-lg-3 col-md-6 col-sm-6">
                  <ul className="list-style-one">
                    <li>Contractor / Vendor Services</li>
                    <li>Utility Company Appointments</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr id="WIKeyHolder"></hr>
      <section
        className="clienst-section style-two"
        style={{ marginTop: 100, marginBottom: 100 }}
      >
        <div className="auto-container">
          {/* Sec Title */}
          <div className="sec-title centered">
            <h2>What is a Key Holder Service?</h2>
            <div className="text" style={{ fontSize: "1.5em" }}>
              Keyholding is a service where someone holds the keys to your
              premises and ensures the home is secure from any hassle when you
              are not there. If there is an out-of-hours intrusion or in case an
              alarm goes off, the keyholders are the ones who first respond for
              you.
            </div>
          </div>
          <div className="image-centered" id="">
            <Image
              src="/images/icons/house-keys.png"
              alt="house keys"
              width={300}
              height={150}
              id="WRKeyHolder"
            />
          </div>
        </div>
      </section>

      {/* insert section component with SEO Content */}
      <section className="services-page-section shade">
        <div className="auto-container">
          {/* Block Detail */}
          <div className="blog-detail" style={{ marginTop: "-75px" }}>
            <h2>Why Would I Need a Key Holder Service?</h2>

            <div className="inner-box">
              <div className="lower-content">
                <h3>Meeting Vendors & Contract Workers</h3>
                <p>
                  Your time is incredibly valuable and finding time to meet
                  vendors at your home is nearly impossible. That is where you
                  can rely on Dallas Home Watch Key Holder Service. We can be
                  there to meet delivery companies, tradespeople, or repairmen.
                </p>

                <p>
                  You do not want deliveries, like wine, gifts, or furniture
                  left outside to be damaged by weather or become a target for
                  thieves. We will bring them safely indoors. If deliveries need
                  to be brought in and unpacked, assembled, or put in a specific
                  place, we are there to greet them and supervise the process.
                </p>
                <p>
                  For our contracted Home Watch clients, you do not need to wait
                  for the four-hour window. We will assure that we are there to
                  meet repairmen and supervise the work through completion.
                </p>
                <p>
                  That goes for services like landscaping, pool maintenance, and
                  housekeeping, too. We will be there when they are, acting on
                  your behalf. And when the work is done, we will see that your
                  property is secure.{" "}
                </p>
                <br />

                <div className="row clearfix">
                  <div className="column col-lg-6 col-md-6 col-sm-6">
                    <iframe
                      width="500"
                      height="725"
                      src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fdallashomewatch%2Fposts%2Fpfbid033J2bdGcPmbFbq5wUhtXgXxAeBdSy7yX9cGbanJW61YBozn7oCwRZmkFPKyLeFpVQl&show_text=true&width=500"
                      scrolling="no"
                      frameborder="0"
                      allowfullscreen="true"
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    ></iframe>
                  </div>

                  <div className="column col-lg-6 col-md-6 col-sm-6">
                    <h4>Removed Dormers From Roof</h4>
                    <div>
                      These photos were taken during a Key Holder Service that
                      lasted 3 days. We met with the roofers and stayed until
                      the job was complete.
                      <br />
                      <Image
                        src="/images/key-holder/house-with-dormers-on-roof.jpg"
                        alt="house with four car garage with dormers on the roof"
                        width={400}
                        height={300}
                        id="houseBEFOREroof"
                      />
                      <br />
                      <br />
                      <Image
                        src="/images/key-holder/house-with-dormers-on-roof-removed.jpg"
                        alt="house keys"
                        width={400}
                        height={300}
                        id="house with four car garage with no dormers on the roof"
                      />
                    </div>
                  </div>

                  <br />
                </div>

                <br />

                <h3>Emergency Services</h3>
                <p>
                  Emergencies can happen when you are away from your home. You
                  need someone you trust, who is bonded and insured, to respond
                  in a timely fashion. Dallas Home Watch is that service. With
                  over 20-years-experience in the North Texas area, we know how
                  to handle virtually any situation with calm professionalism.
                </p>
                <p>
                  Although we are not an alarm company, we can be a first
                  responder when you are away, working with the alarm company,
                  police and fire departments, or other emergency entities on
                  your behalf. We will contact you immediately and stay in
                  contact with you until the situation is resolved.
                </p>
                <p>
                  If necessary, we can handle the aftermath of property
                  invasions or fire, dealing with repairs and cleanup so you
                  return home worry-free. We can check your home after large
                  storms if requested, and once it is safe to do so. We will do
                  a Home Watch visit and notify you of any issues.
                </p>
              </div>
            </div>
          </div>
          <br />
          <div className="column col-lg-12 col-md-6 col-sm-6 centered">
            <h3>Ready To Hire A Key Holder?</h3>
            <br />

            <Link href="tel:972-982-7050" className="theme-btn btn-style-two">
              <span className="txt">
                CALL DALLAS HOME WATCH
                <i className="phone" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default KeyHolderPage;
