import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

function VehicleCarePage(props) {
  return (
    <Fragment>
      <Head>
        <title>
          Vehicle Care for Luxury Vehicles in Storage - Dallas Home Watch
        </title>
        <link
          rel="canonical"
          href="https://www.dallashomewatch.com/vehicle-care"
        />
        <meta
          name="keywords"
          content="stored vehicles, leaving car in garage, vacation without your car"
        />
        <meta
          name="description"
          content="Dallas Home Watch offers Vehicle Care for existing Home Watch clients. Dallas Home Watch can watch your car for you when you are going to be away from home."
        />
        <meta property="fb:app_id" content="8620778781329629" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Dallas Home Watch" />
        <meta property="og:type" content="article" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/profile.php?id=100092566267916"
        ></meta>

        <meta
          property="og:url"
          content="https://www.dallashomewatch.com/vehicle-care"
        />
        <meta
          property="og:title"
          content="Car Care for Luxury Vehicles in Storage - Dallas Home Watch"
        />
        <meta
          property="og:description"
          content="Dallas Home Watch offers Vehicle Care for existing Home Watch clients. Dallas Home Watch can watch your car for you when you are going to be away from home."
        />
        <meta
          property="og:image"
          content="https://www.dallashomewatch.com/images/og/luxury-car-care.jpg"
        />
        <meta property="og:image:width" content="1200px" />
        <meta property="og:image:height" content="630px" />
        <meta
          property="og:image:alt"
          content="line of luxury vehicles in storage"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@dallashomewatch" />
        <meta name="twitter:creator" content="@susanwinters214" />

        <meta
          name="twitter:title"
          content="Vehicle Care for Luxury Vehicles in Storage - Dallas Home Watch"
        />
        <meta
          name="twitter:description"
          content="Dallas Home Watch offers Vehicle Care for existing Home Watch clients. Dallas Home Watch can watch your car for you when you are going to be away from home."
        />
        <meta
          name="twitter:image"
          content="https://www.dallashomewatch.com/images/og/luxury-car-care.jpg"
        />
      </Head>

      {/* insert top banner with Page Title & Breadcrumb*/}
      <section className="page-title pageback-vehcare">
        <Image
          src="/images/og/luxury-car-care.jpg"
          layout="fill"
          objectFit="cover"
          alt="luxury cars"
          style={{
            zIndex: -99,
          }}
        />

        <div className="auto-container">
          <h1>Vehicle Care</h1>
          <ul className="page-breadcrumb">
            <li>
              <Link href="/">home</Link>
            </li>
            <li>Vehicle Care</li>
          </ul>
        </div>
      </section>

      {/* insert section component with Welcome*/}
      <section className="services-detail-section">
        <div className="auto-container">
          <div className="inner-container">
            <div className="lower-content ">
              <h2 className="pageTitle">
                DALLAS VEHICLE SERVICES FOR HOME WATCH CLIENTS
              </h2>
              {/* Content Column */}
              <div className="content-column col-lg-12 col-md-12 col-sm-12">
                <div className="inner-column">
                  {/* Sec Title */}
                  <div className="sec-title">
                    <p className="text">
                      Dallas Home Watch offers vehicle care. We define vehicle
                      care as a visual inspection of your stored vehicles
                      looking for obvious issues including low tires. We also
                      verify that your trickle charger / battery maintainer
                      shows a full battery. We are not auto mechanics. We can
                      start your car and check for flat tires. If your car needs
                      additional care, we can meet with your mechanic or car
                      dealship for at home or pickup service.
                      <br />
                      <br />
                    </p>
                    <div className="image-centered" id="">
                      <Image
                        src="/images/og/luxury-car-care.jpg"
                        alt="luxury cars stored in garage"
                        width={800}
                        height={150}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* insert section component with Photos & Keywords - Car Batteries  */}
      <section className="services-page-section centered">
        <div className="auto-container">
          {/* Services Car Batteries */}

          <div className="services-block-three">
            <div
              className="inner-box wow fadeInUp"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="row clearfix">
                {/* Content Column */}
                <div className="content-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <h3>Car Batteries</h3>
                    <div className="text">
                      We will check your car chargers to make sure they are
                      working and reset them if necessary.
                    </div>
                  </div>
                </div>
                {/* Image Column */}
                <div className="image-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="image">
                      <Image
                        width={585}
                        height={460}
                        src="/images/car-care/car-battery-bentley.jpg"
                        alt="Bentley Battery"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services Car Service */}
          <div className="services-block-three style-two">
            <div
              className="inner-box wow fadeInUp"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="row clearfix">
                {/* Image Column */}
                <div className="image-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="image">
                      <Image
                        width={585}
                        height={460}
                        src="/images/car-care/car-tire-mercedes.jpg"
                        alt="Mercedes Tire"
                      />
                    </div>
                  </div>
                </div>
                {/* Content Column */}
                <div className="content-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <h3>Auto Service</h3>
                    <div className="text">
                      We will keep an eye on the vehicles you have in your
                      garage and inform you if any tires are low on air. If you
                      select to have your dealership come to your home, we can
                      be there to greet them and stay while they service your
                      car or sign off for them to take your car to their
                      location.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services Garage Door Entries */}
          <div className="services-block-three style-two">
            <div
              className="inner-box wow fadeInUp"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="row clearfix">
                <div className="content-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <h3>Garage Door Entries</h3>

                    <div className="text">
                      Dallas Home Watch will check your external wireless keypad
                      to ensure it is working and also verify the outside motion
                      sensor lighting around your garage works.
                    </div>
                  </div>
                </div>
                {/* Image Column */}
                <div className="image-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="image">
                      <Image
                        width={585}
                        height={460}
                        src="/images/car-care/garage-door-wireless-keypad-check.jpg"
                        alt="inspector checking the garage door wireless keypad"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* insert section component with SEO Content */}
      <section className="services-page-section silver  moveupHeader">
        <div className="auto-container">
          {/* Block Detail */}
          <div className="blog-detail" style={{ marginTop: "-50px" }}>
            <h2>Why Would I Need Vehicle Care While Out Of Town?</h2>

            <div className="inner-box">
              <div className="lower-content">
                <p>
                  Unless you are taking all your vehicles on a road trip,
                  overseas vacation or to the coast for the summer, you are
                  probably leaving one or more cars in the garage. Left for
                  weeks or months, tires, batteries, and finishes (especially if
                  not in a garage) will deteriorate. Your expensive investments
                  deserve attention.
                </p>

                <p>
                  Dallas Home Watch will provide routine maintenance for your
                  cars while you are away. We will drive them as often as you
                  specify, watching for any indication that maintenance or
                  repairs are needed.
                </p>
                <p>
                  We will take cars to your preferred service department to have
                  oil changes; tire rotations, alignments, or changes; washes
                  and detailing; fueling; battery checks; yearly inspections,
                  and electric car charging.{" "}
                </p>
                <p>
                  If a serious problem arises, we will alert you immediately and
                  follow your instructions on any service needed.{" "}
                </p>
                <p>
                  When you return home, your car will be at its best and ready
                  to go.{" "}
                </p>
              </div>
              <br />
              <div className="column col-lg-12 col-md-6 col-sm-6 centered">
                <h3>Ready To Hire Vehicle Care?</h3>
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
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default VehicleCarePage;
