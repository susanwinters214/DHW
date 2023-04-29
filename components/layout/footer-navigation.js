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
                        name="gotolinkedin"
                        href="https://www.linkedin.com/company/dallas-home-watch/"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <span className="fa fa-linkedin" />
                      </Link>
                    </li>

                    <li className="facebook">
                      <Link
                        name="gotofacebook"
                        rel="noreferrer"
                        target="_blank"
                        href="https://www.facebook.com/profile.php?id=100083133612372"
                      >
                        <span className="fa fa-facebook" />
                      </Link>
                    </li>
                    <li className="google">
                      <Link
                        name="gotoyoutube"
                        rel="noreferrer"
                        target="_blank"
                        href="https://www.youtube.com/channel/UCzl3hTaEB3ds_IyRtJCr3kA"
                      >
                        <span className="fa fa-youtube" />
                      </Link>
                    </li>
                    <li className="pinterest">
                      <Link
                        name="gotopintrest"
                        rel="noreferrer"
                        target="_blank"
                        href="https://www.pinterest.com/dallashomewatch/"
                      >
                        <span className="fa fa-pinterest" />
                      </Link>
                    </li>
                    <li className="pinterest">
                      <Link
                        name="gotopintrest"
                        rel="noreferrer"
                        target="_blank"
                        href="https://www.twitter.com/dallashomewatch"
                      >
                        <span className="fa fa-twitter" />
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
                <Link href="https://www.nationalhomewatchassociation.org/chwp-list/">
                  CHWP
                </Link>
                .
                <br /> <br />
              
              </div>
            </div>

            <div className="footer-column col-lg-4 col-md-4 col-sm-12">
              <ul className="footer-list">
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/accreditation">Accreditation</Link>
                </li>
                <li>
                  <Link href="/news">News</Link>
                </li>
                <li>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/terms-of-service">Terms of Service</Link>
                </li>
                <li>
                  <Link href="/sitemap">Sitemap</Link>
                </li>
                <li>
                  <Link href="/faqs">F.A.Q.s</Link>
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
