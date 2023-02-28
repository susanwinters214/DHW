import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

function AirFiltersPage(props) {
  return (
    <Fragment>
      <Head>
        <title>Air Filters</title>
        <meta name="robots" content="noindex"></meta>
        <meta
          name="description"
          content="Home Watch Service includes checking all of your air filters to make sure they are clean and if not, replace them."
        />
        <meta property="fb:app_id" content="8620778781329629" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Dallas Home Watch" />

        <meta
          property="og:url"
          content="https://www.dallashomewatch.com/blog/air-filters"
        />
        <meta property="og:title" content="Dirty Air Filters" />
        <meta
          property="og:description"
          content="Home Watch Service includes checking all of your air filters to make sure they are clean and if not, replace them."
        />
        <meta
          property="og:image"
          content="https://www.dallashomewatch.com/images/og-air-filter-replacement.jpg"
        />
        <meta property="og:image:width" content="1200px" />
        <meta property="og:image:height" content="630px" />
        <meta
          property="og:image:alt"
          content="Dallas Home Watch Professionals finds dirty air filter and replaces."
        />
      </Head>
      {/* Facebook Like JS Code*/}
      <div id="fb-root"></div>
      <script
        async
        defer
        crossorigin="anonymous"
        src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v16.0&appId=8620778781329629&autoLogAppEvents=1"
        nonce="uggxp9bv"
      ></script>

      {/* insert top banner with Page Title & Breadcrumb*/}
      <section className="page-title bg-airfilters">
        <div className="auto-container">
          <h1>Air Filters</h1>
          <ul className="page-breadcrumb">
            <li>
              <Link href="/">home</Link>
            </li>
            <li>
              <Link href="/blog">blog</Link>
            </li>
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
                    <h2 className="pageTitle">Changing Air Filters</h2>
                    <p className="text">
                      Air filters play an important role in maintaining indoor
                      air quality, which is critical for human health. Over
                      time, air filters can become clogged with dirt, dust, and
                      other particles, reducing their effectiveness and
                      increasing the risk of respiratory problems. This is why
                      it is important to change your air filters regularly.
                    </p>
                    <p>
                      Air filters work by trapping airborne particles and
                      preventing them from circulating in your home's air.
                      Without an air filter, these particles can cause a variety
                      of health problems, especially for people with respiratory
                      issues such as allergies or asthma. Some common airborne
                      particles that air filters can remove include pet dander,
                      pollen, dust mites, and mold spores.
                    </p>

                    <div className="image-column col-lg-6 col-md-12 col-sm-12">
                      <div className="inner-column">
                        <div className="image">
                          <Image
                            width={400}
                            height={500}
                            src="/images/blogimg/air-filter.jpg"
                            alt="dirty air filter"
                          />
                        </div>
                      </div>
                    </div>

                    <p>
                      When air filters become clogged, they can no longer trap
                      these particles effectively, and they can even begin to
                      release them back into the air. This can lead to increased
                      allergy symptoms, respiratory problems, and other health
                      issues. In addition, dirty air filters can reduce the
                      efficiency of your HVAC system, leading to higher energy
                      bills and potentially costly repairs.
                    </p>
                    <p>
                      The frequency with which you should change your air
                      filters depends on several factors, including the type of
                      filter you have, the level of air pollution in your area,
                      and the number of people and pets in your home. As a
                      general rule, it is recommended that you change your air
                      filters every three months. However, if you have pets or
                      live in an area with high levels of air pollution, you may
                      need to change them more frequently.
                    </p>

                    <p>
                      Hiring a Home Watch Business to inspect your house while
                      you are away is a great way to ensure that your air
                      filters will always stay clean. A Home Watch Business is a
                      professional service that provides regular checks on your
                      home while you are away, ensuring that everything is in
                      order and that any problems are addressed quickly.
                    </p>

                    <p>
                      A Home Watch Business can check your air filters during
                      their regular inspections and change them if necessary.
                      This can help you avoid the hassle and expense of hiring
                      an HVAC professional to come out and change your filters,
                      especially if you are away from home for an extended
                      period of time.
                    </p>
                    <p>
                      In addition to checking and changing your air filters, a
                      Home Watch Business can provide a wide range of other
                      services to help maintain your home while you are away.
                      For example, they can check for signs of water damage or
                      leaks, ensure that your security system is functioning
                      properly, and even arrange for lawn care or pool
                      maintenance.
                    </p>
                    <p>
                      Overall, air filters are an important part of maintaining
                      good indoor air quality, and changing them regularly is
                      essential for protecting your health. By hiring a Home
                      Watch Business to inspect your home while you are away,
                      you can ensure that your air filters are always clean and
                      functioning properly, giving you peace of mind and helping
                      you avoid potential health problems down the line.
                    </p>
                    <br />
                    <br />
                    <div
                      class="fb-share-button centered"
                      data-href="https://www.dallashomewatch.com/blog/air-filters"
                      data-layout=""
                      data-size=""
                    >
                      <Link
                        target="_blank"
                        href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.dallashomewatch.com%2Fblog%2Fair-filters&amp;src=sdkpreparse"
                        class="fb-xfbml-parse-ignore"
                      >
                        Share on Facebook
                      </Link>
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

export default AirFiltersPage;