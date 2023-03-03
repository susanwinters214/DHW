import Link from 'next/link';
import Logo from './logo';
import classes from './footer-navigation.module.css';

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
              <div itemscope itemtype="https://schema.org/LocalBusiness">
                <p className="LocalBusinessSchema">
                  <span itemprop="description">
                    {" "}
                    Home Watch company serving Dallas.
                  </span>
                  <br />
                  <br />

                  <span itemprop="name">Dallas Home Watch LLC</span>
                  <br />

                  <div
                    itemprop="address"
                    itemscope
                    itemtype="https://schema.org/PostalAddress"
                  >
                    <span itemprop="streetAddress">
                      13101 Preston Road Suite 110410
                    </span>
                    <br />
                    <span itemprop="addressLocality">Dallas</span>,{" "}
                    <span itemprop="addressRegion">Texas</span> 75240
                  </div>

                  <span itemprop="telephone">972-982-7050</span>
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
                      <a href="https://www.linkedin.com/company/dallas-home-watch/">
                        <span className="fa fa-linkedin" />
                      </a>
                    </li>
                    <li className="google">
                      <a href="https://www.google.com/search?q=Dallas%20Home%20Watch&rlz=1C1VDKB_enUS951US953&oq=da&aqs=chrome.0.69i59j69i57j69i59l2j0i271l3j69i59.2276j0j15&sourceid=chrome&ie=UTF-8&tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=AJOqlzVsZ5d596pOdSYH7H4uNZ6uSCrOBg:1677427713597&rflfq=1&num=10&rldimm=8696726493134451577&lqi=ChFEYWxsYXMgSG9tZSBXYXRjaFoZIhFkYWxsYXMgaG9tZSB3YXRjaCoECAIQAZIBG2Fzc29jaWF0aW9uX29yX29yZ2FuaXphdGlvbuABAA&ved=2ahUKEwiEgIWYybP9AhXBnGoFHYK4BeEQvS56BAgKEAE&sa=X&rlst=f#rlfi=hd:;si:8696726493134451577,l,ChFEYWxsYXMgSG9tZSBXYXRjaFoZIhFkYWxsYXMgaG9tZSB3YXRjaCoECAIQAZIBG2Fzc29jaWF0aW9uX29yX29yZ2FuaXphdGlvbuABAA;mv:[[32.9433033,-96.7289352],[32.8606816,-96.8841491]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!2m1!1e3!3sIAE,lf:1,lf_ui:2">
                        <span className="fa fa-google" />
                      </a>
                    </li>
                    <li className="facebook">
                      <a href="https://www.facebook.com/profile.php?id=100083133612372">
                        <span className="fa fa-facebook" />
                      </a>
                    </li>
                    <li className="google">
                      <a href="https://www.youtube.com/channel/UCzl3hTaEB3ds_IyRtJCr3kA">
                        <span className="fa fa-youtube" />
                      </a>
                    </li>
                  </ul>
                </div>
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
