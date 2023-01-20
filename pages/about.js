import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

function AboutPage() {
  return (
    <Fragment>
      <Head>
        <title>About Dallas Home Watch</title>
        <meta
          name="description"
          content="About Dallas Home Watch. Tina Lawson is the owner of Dallas Home Watch and services the homes of clients while they are away. Tina Lawson has been in the Home Watch Industry for over 20 years."
        />
      </Head>
      {/* insert top banner with Page Title & Breadcrumb*/}
      <section className="page-title pageback-about">
        <div className="auto-container">
          <h1>About Us</h1>
          <ul className="page-breadcrumb">
            <li>
              <Link href="/">home</Link>
            </li>
            <li>About</li>
          </ul>
        </div>
      </section>

      <section className="case-section">
        <div className="auto-container">
          <div className="inner-container">
            <div className="clearfix">
              {/* Content Column */}
              <div className="content-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div className="sec-title first">
                    <h2 className="pushdown25">Dallas Home Watch</h2>
                    <h3>Owned By: Tina Lawson</h3>
                  </div>
                  <div className="text">
                    <p className="first">
                      Tina Lawson, who managed the corporate offices of HCB
                      Contractors from the mid- '80s to early '90s and later
                      worked on the situation desk at Burlington Northern Santa
                      Fe Railway Co., began an executive limousine business in
                      2001.
                    </p>
                    <p>
                      But after listening to some of her clients' comments, she
                      decided to take her services a step further.
                    </p>
                    <p>
                      "Tina had been driving us to the airport and my husband
                      mentioned that the prior house manager had quit
                      unexpectedly and without notice," said client T.G.M.
                    </p>
                    <p>
                      "Tina asked to be considered for the job. Now, I can't
                      imagine where we would be without her."
                    </p>
                    <p>
                      In 2003, Lawson's company evolved to encompass home
                      management services.
                    </p>
                    <p>
                      Lawson manages several multimillion dollar homes in the
                      Metroplex for clients who often have multiple homes across
                      the nation and rely on Lawson to "hold down the fort"
                      while they are out of town.
                    </p>
                    <p>
                      In 2022, Ms. Lawson rebranded her company from STS
                      (suburban transportation services) to Dallas Home Watch to
                      better reflect the services she provides.
                    </p>
                    <p>
                      Clients are regular accounts that contract with Dallas
                      Home Watch on a monthly or annual basis. While clients are
                      out of town, they are kept abreast of all household issues
                      by e-mail.
                    </p>
                    <p>
                      "Dallas Home Watch allows clients to have a better quality
                      of life by freeing up their time to do what they want to
                      do. We allow them more time to enjoy their life with
                      family, friends, golfing etc.," Lawson said.
                    </p>
                  </div>
                </div>
              </div>
              {/* Image Column */}
              <div className="image-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div
                    className="image wow fadeInLeft pushdown50"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
                  >
                    <center>
                      <Image
                        src="/images/tina-lawson.jpg"
                        alt="Tina Lawson"
                        width={300}
                        height={300}
                      />
                      <br />
                      Photo of{" "}
                      <a href="https://www.linkedin.com/in/tina-lawson-a57252254/">
                        Tina Lawson
                      </a>
                      , Owner of&nbsp;
                      <a href="https://www.linkedin.com/company/dallas-home-watch">
                        Dallas Home Watch
                      </a>
                      <br />
                      <br />
                      <p className="about">
                        Dallas Home Watch provides the service of discreetly
                        checking your home while you are away. The homeowner can
                        designate the preferred frequency of visits and we work
                        together toward any solution should property issues
                        arise.
                      </p>
                    </center>
                  </div>

                  <div className="content-column col-lg-12 col-md-12 col-sm-12">
                    <div className="text-box">
                      "I treat all properties the way I would like a person to
                      manage my own home," Lawson says.
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

export default AboutPage;
