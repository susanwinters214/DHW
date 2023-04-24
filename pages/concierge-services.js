import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

function ConciergePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Personal Conceirge Service | DALLAS HOME WATCH</title>
        <link
          rel="canonical"
          href="https://dallashomewatch.com/concierge-services"
        />
        <meta
          name="description"
          content="Concierge Services helps busy executives by performing tasks and running errands so they have the freedom to live their life without chores."
        />

        <meta property="fb:app_id" content="8620778781329629" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Dallas Home Watch" />

        <meta
          property="og:url"
          content="https://dallashomewatch.com/concierge-services"
        />
        <meta
          property="og:title"
          content="Concierge Services by Dallas Home Watch"
        />
        <meta
          property="og:description"
          content="Dallas Concierge Services are special services performed by a professional. Busy executives hire professionals to perform concierge services 
          so that they gain back time in their lives to do the things they enjoy."
        />
        <meta
          property="og:image"
          content="https://dallashomewatch.com/images/og/concierge-services.jpg"
        />
        <meta property="og:image:width" content="1200px" />
        <meta property="og:image:height" content="630px" />
        <meta
          property="og:image:alt"
          content="concierge inventoring refrigerator before filling with groceries and bottled water"
        />
      </Head>
      {/* insert top banner with Page Title & Breadcrumb*/}
      <section className="page-title pageback-con">
        <div className="auto-container">
          <h1>Concierge Services</h1>
          <ul className="page-breadcrumb">
            <li>
              <Link href="/">home</Link>
            </li>
            <li>Concierge Services</li>
          </ul>
        </div>
      </section>
      {/* insert top photo section*/}
      <section className="services-detail-section">
        <div className="auto-container">
          <div className="inner-container">
            <div className="lower-content">
              <h2 className="pageTitle">
                Dallas Concierge Services for Home Watch Clients
              </h2>
              <br />
              <div className="row clearfix">
                <div className="column col-lg-6 col-md-6 col-sm-6">
                  <h3 className="blue">What are Conceirge Services?</h3>
                  <p>
                    Personal concierge services may include personal errands
                    like picking up dry cleaning, purchasing gifts, packing up
                    items for storage, unpacking decorations for holidays,
                    performing specialized tasks, returning an item to a store,
                    or shipping a box via UPS.
                  </p>
                  <p>
                    Think of Dallas Home Watch as your Personal Concierge while
                    you are away. To get ready for your return, we can set the
                    temperature, stock the fridge with drinks and perform other
                    small tasks to prepare your home for your arrival into
                    Dallas.
                  </p>
                  <Link
                    href="tel:972-982-7050"
                    className="theme-btn btn-style-two"
                  >
                    <span className="txt">
                      CALL FOR CONCIERGE SERVICES
                      <i className="phone" />
                    </span>
                  </Link>
                  <br /> <br />
                </div>
                <div className="column col-lg-6 col-md-6 col-sm-6">
                  <div className="image">
                    <Image
                      width={500}
                      height={300}
                      src="/images/concierge-services/wine-cellar.jpg"
                      alt="wine bottles on shelves in a wine cellar"
                    />
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>{" "}
        </div>
      </section>

      <section className="services-detail-section silver">
        <div className="auto-container">
          <p>
            <strong>
              Concierge Services are only available for Dallas Home Watch
              Clients under contract for Home Watch Services.
            </strong>
          </p>
          <p>
            Hiring a personal concierge provides you with your own personal
            assistant who can assist you with various aspects of your life. With
            today's fast-paced lifestyles, juggling work, family, household
            tasks, and other responsibilities can be overwhelming, and the
            resulting stress can negatively impact your health. While it's easy
            to say that you should exercise more or practice mindfulness to
            reduce stress, finding the time to do so can be difficult. This is
            where a personal concierge can help. By outsourcing your lengthy
            to-do list to a personal concierge, you can free up your time and
            focus on yourself. When you hire Dallas Home Watch as your Personal
            Concierge, you can come back into town and attend a yoga class, take
            a walk, or spend quality time with your loved ones, and ultimately
            prioritize your health and wellbeing. In short, a personal concierge
            can simplify your life and allow you to enjoy the little things in
            life. Imagine coming back to your Dallas property knowing that your
            household chores are done and you can simply relax and enjoy your
            home.
          </p>
          <br />

          <div className="row">
            <div className="column col-lg-6 col-md-6 col-sm-6">
              <div className="image">
                <Image
                  width={530}
                  height={480}
                  src="/images/concierge-services/yoga-relaxing.jpg"
                  alt="girl doing yoga to relax"
                />
              </div>
            </div>
            <div className="column col-lg-6 col-md-6 col-sm-6">
              <div className="image">
                <Image
                  width={530}
                  height={300}
                  src="/images/concierge-services/couple-relaxing-on-couch-reading.jpg"
                  alt="wine bottles on shelves in a wine cellar"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-detail-section">
        <div className="auto-container">
          <p>
            <br />
            Dallas Home Watch offers personal concierge services while you are
            away so that you can come home and rest assured that your home is
            ready to enjoy. Some of the services we provide include but are not
            limited to the following:
          </p>
          <div className="row clearfix">
            <div className="column col-lg-6 col-md-6 col-sm-6">
              <ul className="list-style-one">
                <li>Pick up items from Home Depot</li>
                <li>Return packages to Amazon locker locations</li>
                <li>Pick Up packages from your front porch and bring inside</li>
                <li>Stock your refrigerator with food and drinks</li>
              </ul>
            </div>

            <div className="column col-lg-6 col-md-6 col-sm-6">
              <ul className="list-style-one">
                <li>
                  Notify you of debris in your yard after storms and tornados
                </li>
                <li>Open and close home for visiting family or friends</li>
                <li>Drop Off / Pick Up Dry Cleaning</li>
                <li>Specialized: Personal complicated tasks.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* insert section component CTA*/}

      <section className="services-detail-section-silver">
        <div className="auto-container">
          <div className="lower-content ">
            <p>
              When hiring a personal concierge, it's crucial to take references
              into account. It's essential to find someone with high ethical
              standards who can be entrusted with sensitive information and
              access to your home. Therefore, it's imperative to conduct a
              thorough reference check to ensure you're making the right
              decision. Starting with smaller tasks can be a good way to assess
              the competency and reliability of your personal concierge before
              entrusting them with bigger responsibilities. Once you're
              satisfied with their performance, you'll be amazed at how much of
              a positive impact a great personal concierge can have on your
              life.
            </p>
          </div>
        </div>
      </section>

      <section className="services-detail-section">
        <div className="auto-container">
          <div className="sec-title">
            <br />
            <h2>Benefits of Concierge Services</h2>

            <p>
              <br />
              Concierge services make your life easier and help you get jobs
              done faster because you are not doing it all on your own.
              Concierge Services are only offered for premier Dallas Home Watch
              clients.
            </p>

            <div className="row clearfix">
              <div className="column col-lg-6 col-md-6 col-sm-6">
                <ul>
                  <li>
                    <strong>Saves Time</strong>
                    <br />
                    The ability to have more time and energy to focus on what
                    really matters is one of the most evident advantages of
                    using a concierge service. You can set goals, connect with
                    family, and improve your quality of life while the concierge
                    takes care of regular tasks.
                    <br />
                    <br />
                  </li>
                  <li>
                    <strong>Reliability</strong>
                    <br />
                    You cannot be in two places at the same time, so call Dallas
                    Home Watch to help you get things done.
                    <br />
                    <br />
                  </li>
                  <li>
                    <strong>Emergency assistance</strong>
                    <br />
                    Through emergency concierge help, you have someone to call
                    that can assist with your specific issues. <br /> <br />
                  </li>
                </ul>
                <br />

                <h3>Ready To Hire A Personal Concierge?</h3>
                <br />

                <Link
                  href="tel:972-982-7050"
                  className="theme-btn btn-style-two"
                >
                  <span className="txt">
                    CALL DALLAS HOME WATCH
                    <i className="phone" />
                  </span>
                </Link>
              </div>
              <div className="column col-lg-6 col-md-6 col-sm-6">
                <div className="image-centered" id="">
                  <Image
                    src="/images/concierge-services/concierge-500x275.jpg"
                    alt="personal concierge stocking refrigerator"
                    width={400}
                    height={150}
                  />
                </div>
                <br />
                <div className="image-centered" id="">
                  <Image
                    src="/images/concierge-services/pickup-dry-cleaning.jpg"
                    alt="dry cleaners"
                    width={400}
                    height={150}
                    id="WRKeyHolder"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default ConciergePage;
