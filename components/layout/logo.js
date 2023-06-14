import { Fragment } from "react";
import classes from "./logo.module.css";
import Link from "next/link";
import Image from "next/image";

function Logo() {
  return (
    <Fragment>
      <div className="pull-left logo-box">
        <div className="logo">
          <Link href="/" aria-label="go to Home page">
            <Image
              src="/images/Dallas-Home-Watch-Logo.png"
              alt="Dallas Home Watch"
              title="Dallas Home Watch"
              width={40}
              height={40}
            />
          </Link>
          <div
            style={{
              float: "right",
              marginTop: 8,
              marginRight: 75,
              paddingLeft: 5,
              color: "white",
              fontSize: "1.7em",
              fontWeight: "500",
              fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
            }}
          >
            Dallas Home Watch <br />
          </div>
        </div>
        <span className="tiny10">
          Service Area: Dallas - (Highland Park, University Park, Lake Forest,
          and Northwood Hills).
        </span>
        <br />
        <br />
      </div>
    </Fragment>
  );
}

export default Logo;
