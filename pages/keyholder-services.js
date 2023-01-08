import { Fragment } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from "next/image";
import Script from "next/script";

function KeyHolderPage(props) {
  return (
    <Fragment>
      <Head>
        <title>Key Holder Services | Dallas Home Watch </title>
        <meta
          name="description"
          content="Dallas Home Watch offers Key Holder Services for existing Home Watch clients. A Key Holder is a professional Home Watch professional that holds the keys to your home to allow access to contractors and vendors to come into the home to perform a service. 
          The Key Holder will supervise the contractor and confirm with the home owner that the work is done, then lock up the house and leave."
        />
      </Head>
      <Script src="js/jquery.min.js"></Script>
      {/* insert top banner with Page Title & Breadcrumb*/}
      <section className="page-title pageback-keyh">
        <div className="auto-container">
          <h1>Key Holder Service</h1>
          <ul className="page-breadcrumb">
            <li>
              <Link href="/">home</Link>
            </li>
            <li>Key Holder Service</li>
          </ul>
        </div>
      </section>

      {/* insert section component with photo and message*/}
      <section className="services-detail-section">
        <div className="auto-container">
          <div className="inner-container">
            <div className="image">
              <Image
                width={1120}
                height={460}
                src="/images/key-holder/key-holder.jpg"
                alt="handing over the keys from one person to another"
              />
            </div>
            <div className="lower-content">
              <h2>Leave Your Keys In Trusting Hands</h2>
              <p>
                When you own a large home there are a lot of things you need to
                manage. Dallas Home Watch can hold your keys and be your
                authorized on-site dedicated person to meet with vendors and
                contractors while you are away, to keep your home operating
                efficiently.
              </p>
              <p>
                Dallas Home Watch can help you and your family get access back
                into your home when you have lost your keys. Do not risk the
                security of your home by leaving keys under a doormat or under a
                flowerpot. Instead leave your keys with a licensed and bonded
                company that you can trust.
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
              premises and ensures the business is secure from any hassle when
              you are not there. If there is an out-of-hours intrusion or in
              case an alarm goes off, the keyholders are the ones who first
              respond for you.
            </div>
          </div>
          <div className="image-centered">
            <Image
              src="/images/icons/house-keys.png"
              alt="house keys"
              width={300}
              height={150}
            />
          </div>
        </div>
      </section>

      {/* insert section component with SEO Content */}
      <section className="services-page-section shade">
        <div className="auto-container">
          {/* Block Detail */}
          <div
            className="blog-detail"
            style={{ marginTop: "-75px", marginBottom: 100 }}
          >
            <h2>Why Would I Need a Key Holder Service?</h2>

            <div className="inner-box">
              <div className="lower-content">
                <h3>Meeting Vendors & Contract Workers</h3>
                <p>
                  Your time is incredibly valuable and finding time to meet
                  vendors at your home is nearly impossible. That is where you
                  can rely on Dallas Home Watch Key Holder Service. We can be
                  there to meet deliveries, trades people or repairmen.
                </p>
                <p>
                  You do not want deliveries, like wine, gifts, or furniture,
                  left outside to be damaged by weather or become a target for
                  thieves. We will bring them safely indoors. If deliveries need
                  to be brought in and unpacked, assembled, or put in a specific
                  place, we are there to greet them and supervise the process.
                </p>
                <p>
                  For our contracted Home Watch clients, you do not need to wait
                  the four-hour window. We will assure that we are there to meet
                  repairmen and supervise the work through completion.
                </p>
                <p>
                  That goes for services like landscaping, pool maintenance and
                  housekeeping, too. We will be there when they are, acting on
                  your behalf. And when the work is done, we will see that your
                  property is secure.
                </p>

                <h3>Emergency Services</h3>
                <p>
                  Emergencies can happen when you are away from your home for an
                  extended period or even when you are at an office downtown.
                  You need someone you trust, who is bonded and insured, to
                  respond in a timely fashion. Dallas Home Watch is that
                  service. With over 20-years-experience in the North Texas
                  area, we know how to handle virtually any situation with calm
                  professionalism.
                </p>
                <p>
                  Although we are not an alarm company, we can be a first
                  responder when you are away, working with the alarm company,
                  police and fire departments, or other emergency entities on
                  your behalf. We will contact you immediately and stay in
                  contact with you until the situation is resolved, whether you
                  are across town or across the globe.{" "}
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
        </div>
      </section>
    </Fragment>
  );
}



export default KeyHolderPage;
