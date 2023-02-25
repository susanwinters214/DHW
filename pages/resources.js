import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

function ResourcesPage(props) {
 
   
  return (
    <Fragment>
      <Head>
        <title>Dallas Home Watch Resources</title>
        <meta name="robots" content="noindex"></meta>
        <meta
          name="description"
          content="Dallas Home Watch shares resources for Home Watch Businesses and Home Watch Clients. This page contains discounts to places in Dallas. Save money by visiting the Dallas Home Watch Resources page often."
        />
        <meta property="fb:app_id" content="8620778781329629" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Dallas Home Watch" />

        <meta
          property="og:url"
          content="https://www.dallashomewatch.com/resources"
        />
        <meta property="og:title" content="Dallas Home Watch Resources" />
        <meta
          property="og:description"
          content="Dallas Home Watch shares resources for Home Watch Businesses and Home Watch Clients. This page contains discounts to places in Dallas. Save money by visiting the Dallas Home Watch Resources page often."
        />
        <meta
          property="og:image"
          content="https://www.dallashomewatch.com/images/og/dallas-home-watch-opening-doors.jpg"
        />
        <meta property="og:image:width" content="1200px" />
        <meta property="og:image:height" content="630px" />
        <meta
          property="og:image:alt"
          content="home watch professional entering front door of luxury home"
        />

       
      </Head>
      {/* insert top banner with Page Title & Breadcrumb*/}
      <section className="page-title pageback-about">
        <div className="auto-container">
          <h1>Resources</h1>
          <ul className="page-breadcrumb">
            <li>
              <Link href="/">home</Link>
            </li>
            <li>Resources</li>
          </ul>
        </div>
      </section>

      <section className="case-section">
        <div className="auto-container">
          <div className="inner-container">
            <div className="clearfix">
              {/* Content Column */}
              <div className="content-column col-lg-8 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div className="sec-title first">
                    <h2 className="pushdown25">Dallas Home Watch Resources</h2>
                  
                  </div>
<div className="text">
                                  
                    <p className="first">
                       Sign up with Uber for Business and get a $50 voucher for Uber rides and eats. Use for personal rides, meal orders, and deliveries through Uber and Uber Eats.
                                  You can use Uber Business for       
                                          <ul>
                                              <li><strong>Employee Travel & Commute:  </strong>Offer rides through the app and manage your commute program with 24/7 support for you and your team while handling all aspects of your company’s business travel from a centralized platform.  </li>
                                              <li><strong>Corporate Meals:  </strong>  Keep your employees engaged with meals ordered through the app. You can request that food be left at the doorstep without contact, and company policies, budgets, and rules can be handled from a unified dashboard.</li>
                                              <li><strong>Courtesy Rides:  </strong>  Order rides for your guests, clients, and customers with no additional fees. It’s a great way to enhance your customers’ experience and set your business apart from others.</li>
                                               <li><strong>Create Vouchers:  </strong>  Vouchers let you cover the cost of rides and meals for your customers and clients—and can help generate customer satisfaction and repeat business.</li>
                                          </ul>
                                                        
                    </p>
                   
                  </div>
                </div>
              </div>
              {/* Image Column */}
              <div className="image-column col-lg-4 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div
                    className="image wow fadeInLeft pushdown50"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="image centered">
                      <Image
                        src="/images/tina-lawson-400x400.jpg"
                        alt="Tina Lawson"
                        width={400}
                        height={400}
                      />
                      <br />
                      Photo of{" "}
                      <a href="https://www.linkedin.com/in/tina-lawson-a57252254/">
                        Tina Lawson
                      </a>
                  
                 
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

  export default ResourcesPage;