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
          content="https://www.dallashomewatch.com/blog/how-to-customize-your-apple-watch-background"
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
          content="https://www.dallashomewatch.com/images/blogimg/Home-Watch-Logo-Watch.jpg"
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
      <section className="page-title bg-appleWatch">
        <div className="auto-container">
          <h1>Create Your Own Home Watch</h1>
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
                      Customizing the background of your watch with a photo of
                      your home or your Home Watch logo is a great way to
                      personalize your device and showcase your unique style.
                      It's a simple process that can be done in just a few
                      minutes, and it's a great way to make your watch feel more
                      like your own.
                      <br />
                      <br />
                    </p>
                    <div>
                      1. Start by selecting the photo you want to use as your
                      background. If you want to use a photo of your home, make
                      sure it's saved on your iPhone's camera roll or in your
                      iCloud Photos library. If you want to use a photo of your
                      Home Watch logo, make sure you have it saved on your
                      iPhone. <br />
                      <div className="row clearfix">
                        {/* Content Column */}
                        <div className="content-column col-lg-6 col-md-12 col-sm-12">
                          <div className="inner-column">
                            {" "}
                            EXAMPLE OF A HOUSE PHOTO:
                            <div className="image centered">
                              <Image
                                src="/images/blogimg/apple/my-house.jpg"
                                alt="burlar breaking into house through the door"
                                width={425}
                                height={250}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="content-column col-lg-6 col-md-12 col-sm-12">
                          <div className="inner-column">
                            {" "}
                            EXAMPLE OF HOME WATCH LOGO:
                            <div className="image centered">
                              <br />
                              <Image
                                src="/images/blogimg/apple/home-watch-business-logo.jpg"
                                alt="burlar breaking into house through the door"
                                width={150}
                                height={150}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      2. Open the Watch app on your iPhone.
                      <br />
                      <div className="image centered">
                        <Image
                          src="/images/blogimg/apple/select-watch-app-to-start.jpg"
                          alt="burlar breaking into house through the door"
                          width={425}
                          height={250}
                        />
                      </div>
                      <br />
                    </div>
                    <div>
                      3. You will be on the My Faces page and by default you
                      will be on the "My Watch" tab.
                    </div>
                    <br />
                    <div className="image centered">
                      <Image
                        src="/images/blogimg/apple/click-on-my-watch.jpg"
                        alt="on your watch select the photo of your house"
                        width={425}
                        height={250}
                      />
                    </div>
                    <br />
                    <p>
                      4. Scroll to the left or right under "My Faces" until you
                      find "Portraits" and click on it.
                      <br />
                      If you do not see "Portraits" under "My Faces", click on
                      the Face Gallery tab on the bottom of the screen.
                      <br /> <br />
                      <div className="image centered">
                        <Image
                          src="/images/blogimg/apple/my-faces.jpg"
                          alt="on your watch select the photo of your house"
                          width={425}
                          height={250}
                        />{" "}
                        <br />
                        <br />
                      </div>
                      <br />
                    </p>
                    <div>
                      5. Clicking on the Face Gallery tab will get you to this
                      screen. Now scroll down and click on Choose Photos... Then
                      click a photo from your library and click the Add button
                      in the top right corner of the screen.
                      <br />
                      <br />
                      <div className="image centered">
                        <Image
                          src="/images/blogimg/apple/faces-gallery.jpg"
                          alt="gallery of photos on your watch"
                          width={425}
                          height={250}
                        />
                        <br />
                        <br />
                      </div>
                    </div>
                    <div>
                      {" "}
                      6. After your photo is added and you are returned to the
                      Face Gallery, now click the ADD button under the word
                      Portraits to add the Portraits box to your available
                      sections in the Face Gallery.
                      <br /> <br />
                      <div className="image centered">
                        <Image
                          src="/images/blogimg/apple/select-photo-of-house.jpg"
                          alt="gallery of photos on your watch"
                          width={425}
                          height={250}
                        />{" "}
                        <br />
                        <br />
                      </div>
                    </div>
                    <div>
                      7. Now that Portraits has been added to your Face Gallery,
                      go back to the first screen by clicking the My Watch tab
                      at the bottom of the screen. Next, click on the Portraits
                      box. Scroll down to the bottom of this screen and click on
                      "Set as current Watch Face". You can then exit out of the
                      app. Then click Done. Then click Back. <br />
                      <br />
                      <div className="image centered">
                        <Image
                          src="/images/blogimg/apple/Save-House.jpg"
                          alt="Set as current Watch Face"
                          width={400}
                          height={360}
                        />
                        <br />
                        <br />
                      </div>{" "}
                    </div>
                    <p>
                      8. Your Apple Watch should now display the photo you
                      selected as your background. You can change it at any time
                      by repeating these steps and selecting a new photo.
                    </p>
                    <div className="image centered">
                      <Image
                        src="/images/blogimg/apple/house-on-watch.jpg"
                        alt="peach of mind"
                        width={400}
                        height={400}
                      />
                    </div>{" "}
                    <br />
                    <p>
                      Now that you know how to change the background of your
                      watch face to display any photo in your photo library,
                      share with others so that they can change their watch face
                      too.
                    </p>
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
