import Link from "next/link";
import Image from "next/image";
import Logo from "./logo";
import classes from "./main-navigation.module.css";

function MainNavigation() {
  return (
    <header className="main-header header-style-one">
      {/*Header-Upper*/}
      <div className="header-upper">
        <div className="auto-container clearfix">
          <Logo />

          <div className="nav-outer clearfix">
            {/*Mobile Navigation Toggler*/}
            <div className="mobile-nav-toggler">
              <span className="icon flaticon-menu"></span>
            </div>

            {/* Main Menu */}
            <nav className="main-menu navbar-expand-md">
              <div className="navbar-header">
                {/* Toggle Button */}
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent1"
                  aria-controls="navbarSupportedContent2"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
              </div>
              {/* DropDown Menu of main pages */}
              <div
                className="navbar-collapse collapse clearfix"
                id="navbarSupportedContent"
              >
                <ul className="navigation clearfix">
                  <li>
                    <Link href="/home-watch-services">Home Watch</Link>
                  </li>
                  <li>
                    <Link href="/concierge-services">Concierge</Link>
                  </li>
                  <li>
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link href="/about">Contact</Link>
                  </li>
                </ul>
              </div>
            </nav>
            {/* Main Menu End*/}
            <div className="outer-box clearfix">
              {/* Phone Box */}
              <div className="phone-box">
                <div className="box-inner">
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*End Header Upper*/}

      {/* Sticky Header */}

      <div className="sticky-header">
        <div className="auto-container clearfix">
          {/* LOGO */}
          <div className="logo pull-left">
            <Logo />
          </div>

          {/* Right Col */}
          <div className="pull-right">
            {/* Main Menu */}
            <nav className="main-menu">
              {/* --Keep This Empty / Menu will come through Javascript*/}
            </nav>
            {/* Main Menu End */}
            <div className="outer-box clearfix">
              {/* Btn Box */}
            

              {/* Mobile Navigation Toggler  */}
              <div className="mobile-nav-toggler">
                <span className="icon flaticon-menu"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Sticky Menu  */}

      {/* Mobile Menu  */}
      <div className="mobile-menu">
        <div className="menu-backdrop"></div>
        <div className="close-btn">
          <span className="icon flaticon-multiply" />
        </div>

        <nav className="menu-box">
          <div className="nav-logo">
            <Link href="/">
              <Image
                src="/images/Dallas-Home-Watch-Logo.png"
                alt="Dallas Home Watch logo"
                title="Dallas Home Watch logo"
                width={40}
                height={40}
              />
            </Link>
            <span style={{ fontWeight: "bold" }}>Dallas Home Watch</span>
            <br />
          </div>

          <div className="menu-outer"></div>
        </nav>
      </div>
      {/* End Mobile Menu */}
    </header>
  );
}

export default MainNavigation;

