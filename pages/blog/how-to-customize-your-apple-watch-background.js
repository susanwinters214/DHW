import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

function HowToCustomizeAppleWatchBkgrndPage(props) {
  return (
    <Fragment>
      <Head>
        <title>Create Your Own Home Watch</title>
        <Link
          aria-label="go to this page"
          rel="canonical"
          href="https://www.dallashomewatch.com/blog/how-to-customize-your-apple-watch-background"
        ></Link>
        <meta
          name="description"
          content="How To Customize Apple Watch Background to display your Home Watch logo or a photo of your house."
        />
        <meta
          name="keywords"
          content="home watch background, watch background homewatch logo"
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
          content="https://www.dallashomewatch.com/blog/how-to-customize-your-apple-watch-background"
        />
        <meta property="og:title" content="Create Your Own Home Watch" />
        <meta
          property="og:description"
          content="How To Customize Apple Watch Background to display your Home Watch logo or a photo of your house."
        />
        <meta
          property="og:image"
          content="https://www.dallashomewatch.com/images/og/home-watch-apple.jpg"
        />
        <meta property="og:image:width" content="1200px" />
        <meta property="og:image:height" content="630px" />
        <meta property="og:image:alt" content="watch with home as photo" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@dallashomewatch" />
        <meta name="twitter:creator" content="@susanwinters214" />
        <meta name="twitter:title" content="Create Your Own Home Watch" />
        <meta
          name="twitter:description"
          content="How To Customize Apple Watch Background to display your Home Watch logo or a photo of your house."
        />
        <meta
          name="twitter:image"
          content="https://www.dallashomewatch.com/images/og/home-watch-apple.jpg"
        />
      </Head>

      {/* insert top banner with Page Title & Breadcrumb*/}
      <section className="page-title">
        <Image
          src="/images/og/home-watch-apple.jpg"
          layout="fill"
          objectFit="cover"
          alt="apple watch with photo of house"
          style={{
            zIndex: -99,
          }}
        />
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
                      How To Change Your Watch's Background Photo
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
                      <h3 id="step1watch">Step 1</h3>
                      Start by selecting the photo you want to use as your
                      background. If you want to use a photo of your home, make
                      sure it's saved on your iPhone's camera roll or in your
                      iCloud Photos library. If you want to use a photo of your
                      Home Watch logo, make sure you have it saved on your
                      iPhone. [
                      <a href="#uploadLOGO">How To Upload Company Logo</a>]
                      <br />
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
                                className="border"
                                src="/images/logos/PRACTICE-LOGO.jpg"
                                alt="burlar breaking into house through the door"
                                width={200}
                                height={200}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3>Step 2</h3>Open the Watch app on your iPhone.
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
                      <h3>Step 3</h3>You will be on the My Faces page and by
                      default you will be on the "My Watch" tab.
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
                      <h3>Step 4</h3>Scroll to the left or right under "My
                      Faces" until you find "Portraits" and click on it.
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
                      <h3>Step 5</h3>Clicking on the Face Gallery tab will get
                      you to this screen. Now scroll down and click on Choose
                      Photos... Then click a photo from your library and click
                      the Add button in the top right corner of the screen.
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
                      <h3>Step 6</h3>After your photo is added and you are
                      returned to the Face Gallery, now click the ADD button
                      under the word Portraits to add the Portraits box to your
                      available sections in the Face Gallery. Do not forget to
                      click this ADD button. If you do, this will not work.
                      NOTE: The reason we are placing the 1 photo into the
                      Portraits section instead of the Photos section is so that
                      the background will stay the same and not change.
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
                      <h3>Step 7</h3>Now that Portraits has been added to your
                      Face Gallery, go back to the first screen by clicking the
                      My Watch tab at the bottom of the screen. Next, click on
                      the Portraits box. Scroll down to the bottom of this
                      screen and click on "Set as current Watch Face". You can
                      then exit out of the app. Then click Done. Then click
                      Back. <br />
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
                      <h3>Step 8</h3>Your Apple Watch should now display the
                      photo you selected as your background. You can change it
                      at any time by repeating these steps and selecting a new
                      photo.
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
                    <br />
                    <div>
                      <div>
                        <h3 id="uploadLOGO">
                          How To Add Your Logo To Your Watch
                        </h3>
                        <br />
                        <p>
                          Not sure how to get your Home Watch LOGO on to your
                          watch? Have your Web Developer or Graphic Designer
                          email a copy of your logo as an attachment. The image
                          should be sized 300x300.jpg and the bottom two-thirds
                          of the image needs to be a dark solid color so that
                          the clock numbers are readable. Be sure to have
                          him/her send you the logo to an email that you can
                          check from your phone.
                        </p>
                        <p>
                          Then from your phone, open the email and download the
                          photo to your photo library. Now{" "}
                          <a href="#step1watch">
                            go back up to the top of this page
                          </a>{" "}
                          and re-read the instructions. Since your logo is the
                          last photo added to your photo library, it should be
                          easy to find when you are ready to select it.
                        </p>
                        <p>
                          If you would like to download a copy of the house or
                          the logo used in this article, for the purpose of
                          practicing, you may do so by right clicking on either
                          of the images at the top of this page and save to your
                          desktop. Then (just as your Graphic Designer would
                          do), email it (to yourself) as an attachment. Send the
                          email from your desktop and answer the email from your
                          phone.
                        </p>
                        <h4>Success!</h4>
                        <h5>Dallas Home Watch Logo Added To Watch</h5>
                        <p></p>
                        <div className="image centered">
                          <Image
                            src="/images/blogimg/apple/dallas-home-watch-logo-apple-watch.jpg"
                            alt="Set as current Watch Face"
                            width={275}
                            height={294}
                          />
                          <br /> <br />
                          <div className="row">
                            <div className="services-block col-lg-6 col-md-12 col-sm-12 centered">
                              <div
                                className="inner-box wow fadeInRight BLUE"
                                data-wow-delay="150ms"
                                data-wow-duration="1500ms"
                              >
                                <div className="content">
                                  <div className="icon flaticon-file" />
                                  <h4>
                                    <Link href="/blog/what-to-look-for-in-homewatch-company">
                                      Home Watch Company Differences
                                    </Link>
                                  </h4>
                                  <div className="text">
                                    What To Look For in a Home Watch Company
                                  </div>
                                </div>
                                <Link
                                  href="/blog/what-to-look-for-in-homewatch-company"
                                  className="arrow flaticon-right"
                                />
                              </div>
                            </div>
                            <div className="services-block col-lg-6 col-md-12 col-sm-12 centered">
                              <div
                                className="inner-box wow fadeInRight BLUE"
                                data-wow-delay="150ms"
                                data-wow-duration="1500ms"
                              >
                                <div className="content">
                                  <div className="icon flaticon-file" />
                                  <h4>
                                    <Link href="/home-watch-services">
                                      Home Watch Services
                                    </Link>
                                  </h4>
                                  <div className="text">
                                    Home Watch Inspections on Unoccupied Homes
                                  </div>
                                </div>
                                <Link
                                  href="/home-watch-services"
                                  className="arrow flaticon-right"
                                />
                              </div>
                            </div>
                          </div>
                        </div>{" "}
                      </div>
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

export default HowToCustomizeAppleWatchBkgrndPage;
