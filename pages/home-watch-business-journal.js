import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

function HomeWatchBusinessJournalPage(props) {
  return (
    <Fragment>
      <Head>
        <title>Home Watch Business Journal</title>
        <link
          rel="canonical"
          href="https://www.dallashomewatch.com/home-watch-business-journal"
        ></link>
        <meta
          name="description"
          content="Home Watch Business Journal was created for Home Watch Business Owners"
        />
        <meta property="fb:app_id" content="8620778781329629" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Home Watch Business Journal" />

        <meta
          property="og:url"
          content="https://www.dallashomewatch.com/home-watch-business-journal"
        />
        <meta property="og:title" content="Home Watch Business Journal" />
        <meta
          property="og:description"
          content="The Home Watch Business Journal was created for owners of a Home Watch Business. The journal gives you a place for your handwritten notes about your Home Watch company."
        />
        <meta
          property="og:image"
          content="https://www.dallashomewatch.com/images/logos/home-watch-business-journal.jpg"
        />
        <meta property="og:image:width" content="1200px" />
        <meta property="og:image:height" content="630px" />
        <meta
          property="og:image:alt"
          content="National Home Watch Month Banner"
        />
      </Head>
      {/* Facebook Like JS Code*/}

      {/* insert top banner with Page Title & Breadcrumb*/}
      <section className="page-title bg-hwbj">
        <div className="auto-container">
          <h1>Home Watch Business Journal</h1>
          <ul className="page-breadcrumb">
            <li>
              <Link href="/">home</Link>
            </li>
            <li>Home Watch Business Journal</li>
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
                    <h2 className="pageTitle">Home Watch Business Journal</h2>
                    <h3 className="centered">Sold on Amazon</h3>
                    <p className="text">
                      The <strong>Home Watch Business Journal</strong> is a
                      paperback journal designed for small business owners
                      running a Home Watch business. This journal offers a
                      dedicated space for entrepreneurs to reflect on their
                      daily tasks, record their thoughts, and document their
                      progress in growing their Home Watch Business. The journal
                      includes prompts to encourage the recording of important
                      information such as the top three tasks to complete for
                      the day, the main focus, potential customers, marketing
                      and social media ideas, and a place for notes to record
                      while watching a webinar or attending a meeting.
                    </p>
                    <div className="image centered">
                      <Image
                        src="/images/logos/home-watch-business-journal-BOOK-COVER.jpg"
                        alt="Home Watch Business-Journal"
                        width={300}
                        height={447}
                      />
                    </div>
                    <br /> <br />
                    <p>
                      With 170 pages, the Home Watch Business Journal is the
                      perfect tool for business owners to organize their
                      thoughts and track their progress in a practical and
                      efficient way. Whether you're just starting out or are a
                      seasoned professional, this journal provides a platform
                      for reflecting on your successes and challenges, and for
                      brainstorming ideas to take your business to the next
                      level.
                    </p>
                    <p classNotes="centered">
                      <strong>
                        Each page in the Home Watch Business Journal features
                        prompts for:{" "}
                      </strong>
                      <br />

                      <ul className="dots">
                        <li>Daily Tasks</li>
                        <li>Main Focus</li>
                        <li>Home Visits</li>
                        <li>Marketing Ideas</li>
                        <li>Contacts </li>
                        <li>Notes</li>
                      </ul>
                    </p>
                    <p>
                      With its sleek and simple design, the Home Watch Business
                      Journal is an ideal companion for any Home Watch business
                      owner who wants to stay organized, motivated, and on top
                      of their game.
                      <Link
                        href="https://www.amazon.com/Home-Watch-Business-Journal-Marketing/dp/B0BW32LXGG/"
                        target="_blank"
                      >
                        {" "}
                        Buy on Amazon
                      </Link>
                      <br />
                      <br />
                    </p>
                    <h2>Home Watch Business Journal Stats on Amazon</h2>
                    <p>
                      As of today (3/06/2023) The Home Watch Business Journal
                      <br /> Ranks #688 in Home-Based Businesses and #863 in
                      Home Cleaning, Caretaking & Relocating.
                    </p>
                    <h2>Do You Own a Home Watch Business?</h2>
                    <p>
                      This book was created for those that own a Home Watch
                      Business. Yes, you most likely keep most of your data in
                      software. The Home Watch Business Journal is a book you
                      can leave on your nightstand to jot down ideas as they pop
                      up. Or keep it in your car or truck and always have it
                      handy in case you need to record a thought or idea. Write
                      it down then make it happen. Check out the{" "}
                      <Link
                        href="https://www.amazon.com/Home-Watch-Business-Journal-Marketing/dp/B0BW32LXGG/"
                        target="_blank"
                      >
                        Home Watch Business Journal on Amazon!
                      </Link>
                      <br />
                      <br />
                      <div className="image centered">
                        <Image
                          src="/images/logos/QRCode-HomeWatch-Business-Journal.png"
                          alt="Home Watch Business-Journal"
                          width={328}
                          height={328}
                        />
                      </div>
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

export default HomeWatchBusinessJournalPage;
