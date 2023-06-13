import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";

function SitemapPage(props) {
  return (
    <Fragment>
      <Head>
        <title>Dallas Home Watch Sitemap</title>
        <link rel="canonical" href="https://www.dallashomewatch.com/sitemap" />
        <meta
          name="description"
          content="Sitemap for Dallas Home Watch website. If you have trouble finding anything our website, reach out to our website developer."
        />
        <meta name="keywords" content="home watch sitemap" />
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
          content="https://www.dallashomewatch.com/sitemap"
        />
        <meta property="og:title" content="Dallas Home Watch Sitemap" />
        <meta
          property="og:description"
          content="Dallas Home Watch News from social media sites, press releases, and more. Dallas Home Watch sitemap shows the pages on our website so that you can quickly find them like a table of contents. "
        />
        <meta
          property="og:image"
          content="https://www.dallashomewatch.com/images/og/home-watch-news.jpg"
        />
        <meta property="og:image:width" content="1200px" />
        <meta property="og:image:height" content="630px" />
        <meta property="og:image:alt" content="Home Watch Sitemap" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@dallashomewatch" />
        <meta name="twitter:creator" content="@susanwinters214" />

        <meta name="twitter:title" content="Dallas Home Watch Sitemap" />
        <meta
          name="twitter:description"
          content="Sitemap for Dallas Home Watch website. If you have trouble finding anything our website, reach out to our website developer."
        />
        <meta
          name="twitter:image"
          content="https://www.dallashomewatch.com/images/og/home-watch-news.jpg"
        />
      </Head>
      {/* insert top banner with Page Title & Breadcrumb*/}
      <section className="page-title pageback-news style-two ">
        <div className="auto-container">
          <h1>Home Watch Sitemap</h1>
          <ul className="page-breadcrumb">
            <li>
              <Link href="/">home</Link>
            </li>
            <li>News</li>
          </ul>
        </div>
      </section>

      <section className="project-style-two">
        <div className="auto-container" style={{ marginTop: "-100px" }}>
          <div className="row clearfix">
            <div className="project-block-one col-lg-12 col-md-6 col-sm-12">
              <div className="inner-box">
                <section id="contentBlock">
                  <h2 className="pageTitle">Dallas Home Watch Sitemap</h2>
                  <p>
                    Listed below are links to all of the pages on our website.
                  </p>
                  <h3>Main</h3>
                  <h4>
                    <Link href="/home-watch-services">Home Watch Services</Link>
                  </h4>
                  <h4>
                    <Link href="/homewatch-checklist">
                      &nbsp;&nbsp;&nbsp;Home Watch Services Checklist
                    </Link>
                  </h4>
                  <h4>
                    <Link href="/keyholder-services">Key Holder Services</Link>
                  </h4>
                  <hr />
                  <h3>News</h3>
                  <h4>
                    <Link href="/national-homewatch-month">
                      National Home Watch Month
                    </Link>
                  </h4>{" "}
                  <h4>
                    <Link href="/news/dallas-home-watch-receives-accreditation">
                      Dallas Home Watch receives Accreditation from NHWA
                    </Link>
                  </h4>
               
                  <h4>
                    <Link href="/vehicle-care">Dallas Vehicle Care</Link>
                  </h4>
                  <h4>
                    <Link href="/concierge-services">
                      Dallas Concierge Services
                    </Link>
                  </h4>
                  <hr />
                  <h3>Blog</h3>
                  <h4>
                    <Link href="/blog/dangers-of-leaving-house-unoccupied">
                      10 Dangers of Leaving Your Home Unoccupied
                    </Link>
                  </h4>
                  <h4>
                    <Link href="/blog/why-you-need-homewatch">
                      Why You Need Home Watch
                    </Link>
                  </h4>
                  <h4>
                    <Link href="/blog/what-to-look-for-in-homewatch-company">
                      What To Look For In a Home Watch Company
                    </Link>
                  </h4>
                  <h4>
                    <Link href="/blog/how-to-customize-your-apple-watch-background">
                      Create Your Own Home Watch Background
                    </Link>
                  </h4>
                  <h4>
                    <Link href="/blog/benefits-of-hiring-keyholder-service">
                      Benefits Of Hiring A Key Holder Service
                    </Link>
                  </h4>
                  <h4>
                    <Link href="/blog/tree-damage-after-storms">
                      Tree Damage After Storms In Texas
                    </Link>
                  </h4>
                  <h4>
                    <Link href="/blog/air-filters">Air Filters</Link>
                  </h4>
                  <h4>
                    <Link href="/blog/water-leaks">Water Leaks</Link>
                  </h4>
                  <h4>
                    <Link href="/blog/refrigerators">Refrigerators</Link>
                  </h4>
                  <h4>
                    <Link href="/blog/garage-door-openers">
                      Garage Door Openers
                    </Link>
                  </h4>
                  <h4>
                    <Link href="/blog/gate-operator-repair">Gate Repair</Link>
                  </h4>
                  <hr />
                  <h3>Our Home Watch Service Area</h3>
                  <h4>
                    <Link href="/service-areas">
                      Neighborhood Service Areas
                    </Link>{" "}
                  </h4>
                  <h4>
                    <Link href="/home-watch-highland-park-texas">
                      Highland Park Home Watch Services
                    </Link>{" "}
                  </h4>
                  <h4>
                    <Link href="/home-watch-university-park-texas">
                      University Park Home Watch Services
                    </Link>{" "}
                  </h4>
                  <hr />
                  <h3>Extra</h3>
                  <h4>
                    <Link href="/faqs">Frequently Asked Questions</Link>
                  </h4>
                  <h4>
                    <Link href="/accreditation">Accreditation</Link>
                  </h4>
                  <h4>
                    <Link href="/news">Home Watch News</Link>
                  </h4>
                  <h4>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                  </h4>
                  <h4>
                    <Link href="/terms-of-service">Terms of Service</Link>
                  </h4>
                  <h4>
                    <Link href="/where-to-find-dallas-home-watch">
                      Where To Find Us
                    </Link>
                  </h4>
                  <h4>
                    <Link href="/blog/streets-of-dallas">
                      Streets of Dallas
                    </Link>
                  </h4>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default SitemapPage;
