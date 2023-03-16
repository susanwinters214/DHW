import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

function HowToCustomizeAppleWatchBkgrndPage(props) {
  return (
    <Fragment>
      <Head>
        <title>How To Customize Apple Watch Background</title>

        <meta
          name="description"
          content="Learn How To Customize Your Apple Watch Background to a photo of your Home or your Logo."
        />
        <meta property="fb:app_id" content="8620778781329629" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Dallas Home Watch" />

        <meta
          property="og:url"
          content="https://www.dallashomewatch.com/blog/why-you-need-homewatch"
        />
        <meta
          property="og:title"
          content="How To Customize Apple Watch Background"
        />
        <meta
          property="og:description"
          content="How To Customize Apple Watch Background"
        />
        <meta
          property="og:image"
          content="https://www.dallashomewatch.com/images/blogimg/xxxxxxxxxxxxxx.jpg"
        />
        <meta property="og:image:width" content="1200px" />
        <meta property="og:image:height" content="630px" />
        <meta property="og:image:alt" content="photo" />
      </Head>
      {/* Facebook Like JS Code*/}
      <div id="fb-root"></div>
      <Script
        async
        defer
        crossOrigin="anonymous"
        src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v16.0&appId=8620778781329629&autoLogAppEvents=1"
        nonce="Fn5Aadju"
      ></Script>
      {/* insert top banner with Page Title & Breadcrumb*/}
      <section className="page-title bg-wynhs">
        <div className="auto-container">
          <h1>Customize Your Apple Watch Background</h1>
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
                    <h2 className="pageTitle">
                      Why Change Your Watch's Background Photo?
                    </h2>
                    <p className="text">
                      Customizing your Apple Watch background with a photo of
                      your home or your Home Watch logo is a great way to
                      personalize your device and showcase your unique style.
                      It's a simple process that can be done in just a few
                      minutes, and it's a great way to make your Apple Watch
                      feel more like your own.
                      <br />
                      <br />
                    </p>
                    <p>
                      1. Start by selecting the photo you want to use as your
                      background. If you want to use a photo of your home, make
                      sure it's saved on your iPhone's camera roll or in your
                      iCloud Photos library. If you want to use a photo of your
                      Home Watch logo, make sure you have it saved on your
                      iPhone. <br />
                      <br />
                    </p>
                    <p>
                      2. Open the Watch app on your iPhone.
                      <br />
                      <br />
                    </p>
                    <p>
                      3. Tap on the "My Watch" tab at the bottom of the screen.
                    </p>
                    <br />
                    <br />
                    <p>
                      4. Scroll down to the "Face Gallery" section and tap on
                      "Photos."
                      <br /> <br />
                      <div className="image centered">
                        <Image
                          src="/images/blogimg/home-breaking-in-door.jpg"
                          alt="burlar breaking into house through the door"
                          width={400}
                          height={250}
                        />
                      </div>
                      <br />
                    </p>
                    <p>
                      5. Select "Add Photos" and choose the photo you want to
                      use as your background. <br /> <br />
                      <div className="image centered">
                        <Image
                          src="/images/blogimg/mold-mildew-damage.jpg"
                          alt="mold and mildew damage"
                          width={400}
                          height={250}
                        />
                      </div>{" "}
                      <br />
                    </p>
                    <p>
                      6. Use the "Customize" feature to adjust the layout of the
                      photo on the watch face. You can choose to have the photo
                      fill the entire watch face or select a specific section of
                      the photo to display.
                      <div className="image centered">
                        <Image
                          src="/images/blogimg/moisture-meter.jpg"
                          alt="mold and mildew damage"
                          width={400}
                          height={350}
                        />
                      </div>{" "}
                      <br />
                    </p>
                    <p>
                      7. Once you're satisfied with the layout, tap "Set as
                      Watch Face" to save your customized background. <br />
                      <br />
                      <div className="image centered">
                        <Image
                          src="/images/blogimg/cleaning-the-oven.jpg"
                          alt="cleaning-the-oven"
                          width={400}
                          height={350}
                        />
                      </div>{" "}
                      <br />
                    </p>
                    <p>
                      8. Your Apple Watch should now display the photo you
                      selected as your background. You can change it at any time
                      by repeating these steps and selecting a new photo.
                    </p>
                    <div className="image centered">
                      <Image
                        src="/images/blogimg/couple-peace-of-mind.jpg"
                        alt="peach of mind"
                        width={400}
                        height={400}
                      />
                    </div>{" "}
                    <br />
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

export default HowToCustomizeAppleWatchBkgrndPage;
