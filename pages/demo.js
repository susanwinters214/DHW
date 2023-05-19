import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

function DemoPage(props) {
  return (
    <Fragment>
      <Head>
        <title>Home Watch DEMO</title>
        <meta name="keywords" content="home watch demo" />
        <meta name="description" content="Home Watch demo page for homeowner" />

        {/* IS GA HOOKED UP OR NOT???? */}
      </Head>
      {/* insert top banner with Page Title & Breadcrumb*/}
      <section className="page-title">
      
      
        <div className="auto-container">
          <h1>Home Watch Demo</h1>
          <ul className="page-breadcrumb">
            <li>
              <Link href="/">home</Link>
            </li>
            <li>demo</li>
          </ul>
        </div>
      </section>
      {/* insert top photo section*/}
      <section className="services-detail-section">
        <div className="auto-container">
          <div className="inner-container">
            <div className="lower-content">
              <h2 className="pageTitle">this is a demo page</h2>
              <br />
              <h3>Page used for testing purposes only</h3>
              <p>
           &nbsp;
              </p>
             
              <p>
                Yes, you can find the Facebook page of Dallas Home Watch here:{" "}
                <Link
                  href="https://www.facebook.com/profile.php?id=100092566267916"
                  target="_blank"
                >
                  Dallas Home Watch Facebook Page
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* insert section component CTA*/}
    </Fragment>
  );
}

export default DemoPage;
