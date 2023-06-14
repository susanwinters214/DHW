import Link from "next/link";
import Logo from "./logo";
import classes from "./footer-navigation.module.css";

function FooterNavigation() {
  return (
    <footer className="main-footer">
      <div className="auto-container">
        {/* Widgets Section */}
        <div className="widgets-section">
          {/* Scroll To Top - removed */}

          <div className="row clearfix">
            {/* LOGO in Grid */}
            <div className="big-column col-lg-4 col-md-4 col-sm-12">
              <Logo />
              <br />
              <br />
              <div>
                <p>
                  Home Watch company serving Dallas. <br />
                  <br />
                  Dallas Home Watch LLC <br />
                  13101 Preston Road Suite 110410
                  <br />
                  Dallas, Texas 75240
                  <br />
                  <span>972-982-7050</span>
                  <br />
                </p>
              </div>
            </div>

            {/* social media icons */}
            <div className="footer-column col-lg-4 col-md-4 col-sm-12">
              <div className="footer-widget logo-widget">
                <div className="socialiconsfooter center">
                  {/* Social Nav */}
                  <ul className="social-nav">
                    <li className="linkedin">
                      <Link
                        aria-label="View our Linkedin page"
                        name="linkedin"
                        href="https://www.linkedin.com/company/dallas-home-watch/"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <span className="fa fa-linkedin" />
                      </Link>
                    </li>

                    <li className="facebook">
                      <Link
                        aria-label="View our Facebook page"
                        name="facebook"
                        rel="noreferrer"
                        target="_blank"
                        href="https://www.facebook.com/profile.php?id=100092566267916"
                      >
                        <span className="fa fa-facebook" />
                      </Link>
                    </li>
                    <li className="youtube">
                      <Link
                        aria-label="View our YouTube channel"
                        name="youtube"
                        rel="noreferrer"
                        target="_blank"
                        href="https://www.youtube.com/channel/UCzl3hTaEB3ds_IyRtJCr3kA"
                      >
                        <span className="fa fa-youtube" />
                      </Link>
                    </li>
                    <li className="pinterest">
                      <Link
                        aria-label="View our Pinterest boards"
                        name="pintrest"
                        rel="noreferrer"
                        target="_blank"
                        href="https://www.pinterest.com/dallashomewatch/"
                      >
                        <span className="fa fa-pinterest" />
                      </Link>
                    </li>
                    <li className="twitter">
                      <Link
                        aria-label="View our Twitter account"
                        name="twitter"
                        rel="noreferrer"
                        target="_blank"
                        href="https://www.twitter.com/dallashomewatch"
                      >
                        <span className="fa fa-twitter" />
                      </Link>
                    </li>
                    <li className="instagram">
                      <Link
                        aria-label="View our Instagram photos"
                        name="instagram"
                        rel="noreferrer"
                        target="_blank"
                        href="https://www.instagram.com/dallashomewatch/"
                      >
                        <span className="fa fa-instagram" />
                      </Link>
                    </li>
                  </ul>
                  <br />
                  <div className="clear"></div>
                  <br />
                </div>
                <br />
                <span className="white">
                  Looking for another Certified Home Watch Professional? &nbsp;
                  Verify Creditials Here:{" "}
                </span>
                <Link
                  aria-label="go to website for National Home Watch Association"
                  href="https://www.nationalhomewatchassociation.org/chwp-list/"
                >
                  CHWP
                </Link>
                .
                <br /> <br />
              </div>
            </div>

            <div className="footer-column col-lg-4 col-md-4 col-sm-12">
              <ul className="footer-list">
                <li>
                  <Link href="/about" aria-label="go to About page">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/accreditation"
                    aria-label="go to Accreditation page"
                  >
                    Accreditation
                  </Link>
                </li>
                <li>
                  <Link href="/news" aria-label="go to News page">
                    News
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" aria-label="go to Privacy page">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service" aria-label="go to Terms page">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/sitemap" aria-label="go to Sitemap page">
                    Sitemap
                  </Link>
                </li>
                <li>
                  <Link href="/faqs" aria-label="go to FAQ page">
                    F.A.Q.s
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="auto-container">
          <div className="copyright">
            ©Copyright 2023, Dallas Home Watch LLC. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterNavigation;
