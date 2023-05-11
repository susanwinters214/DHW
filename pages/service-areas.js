import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

function ServiceAreaPage(props) {
  return (
    <Fragment>
      <Head>
        <title>Home Watch Services in Dallas Area</title>
        <link
          rel="canonical"
          href="https://www.dallashomewatch.com/service-areas"
        />
        <meta
          name="description"
          content="Home Watch Services in Dallas Area include Highland Park, University Park, Preston Hollow, Lake Forest, Bluffview, 
          Northwood Hills and downtown Dallas."
        />
        <meta
          property="keywords"
          content="home watch service area, dallas home watch"
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
          content="https://www.dallashomewatch.com/service-areas"
        />
        <meta
          property="og:title"
          content="Home Watch Services in Dallas Area"
        />
        <meta
          property="og:description"
          content="Home Watch Services in Dallas Area include Highland Park, University Park, Preston Hollow, Lake Forest, Bluffview, 
          Northwood Hills and downtown Dallas."
        />
        <meta
          property="og:image"
          content="https://www.dallashomewatch.com/images/og/dallas-skyline-service-areas.jpg"
        />
        <meta property="og:image:width" content="1200px" />
        <meta property="og:image:height" content="630px" />
        <meta property="og:image:alt" content="Dallas skyline" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@dallashomewatch" />
        <meta name="twitter:creator" content="@susanwinters214" />

        <meta
          name="twitter:title"
          content="Home Watch Services in Dallas Area"
        />
        <meta
          name="twitter:description"
          content="Home Watch Services in Dallas Area include Highland Park, University Park, Preston Hollow, Lake Forest, Bluffview, Northwood Hills and downtown Dallas."
        />
        <meta
          name="twitter:image"
          content="https://www.dallashomewatch.com/images/og/dallas-skyline-service-areas.jpg"
        />
      </Head>
      {/* insert top banner with Page Title & Breadcrumb*/}
      <section className="page-title">
        <Image
          src="/images/background/dallas-texas-skyline.jpg"
          alt="national home watch month"
          style={{
            zIndex: -99,
          }}
          layout="fill"
          objectFit="cover"
        />
        <div className="auto-container">
          <h1>Service Areas</h1>
          <ul className="page-breadcrumb">
            <li>
              <Link href="/">home</Link>
            </li>
            <li>Home Watch Services in Dallas Area</li>
          </ul>
        </div>
      </section>

      <section className="services-detail-section">
        <div className="auto-container">
          <div className="inner-container">
            <br />
            <h2 className="pageTitle  mb-10">Home Watch Service Area</h2>

            <p>
              Dallas Home Watch LLC provides home watch services in Highland
              Park, University Park, Lake Forest, Preston Hollow, Devonshire,
              Bluffview, Northwood Hills and Briarwood.
            </p>
            <hr />
            <h3>Park Cities:</h3>
            {/* Highland Park */}
            <a name="HighlandPark"></a>
            <Link href="/home-watch-highland-park-texas" className="centered">
              <h4>Highland Park Home Watch</h4>
            </Link>
            <br />

            {/* University Park */}
            <a name="UniversityPark"></a>
            <Link href="/home-watch-university-park-texas" className="centered">
              {" "}
              <h4>University Park Home Watch</h4>
            </Link>

            <hr />
            <h3>Neighborhoods:</h3>

            {/* Lake Forest */}
            <a name="LakeForest"></a>
            <h3 className="centered neighborhood-name">
              Lake Forest Home Watch
            </h3>
            <div className="row clearfix">
              {/* Content Column */}
              <div className="content-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <p>
                    Lake Forest is an upscale neighborhood located in North
                    Dallas, Texas, known for its luxurious homes, stunning
                    views, and proximity to the beautiful White Rock Lake. Some
                    of the most notable streets in the area include Lake Forest
                    Drive, Forest Lane, and Royal Lane. Zip code for this area
                    is 75230.
                  </p>
                  <p>
                    The neighborhood boasts an average home price of around $1.7
                    million, making it one of the most expensive neighborhoods
                    in Dallas. Its exquisite homes, many of which are
                    custom-built, feature a range of architectural styles, from
                    traditional to contemporary. The area is also home to
                    several parks, walking trails, and golf courses, offering
                    plenty of opportunities to enjoy the outdoors. Its
                    convenient location, just a short drive from downtown
                    Dallas, makes it an ideal place to call home for those who
                    value luxury, comfort, and convenience.{" "}
                  </p>
                </div>
              </div>
              {/* Image Column */}
              <div className="image-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div className="image centered">
                    <Link
                      href="https://www.google.com/maps/search/Lake+Forest/@32.9184239,-96.7914741,15.25z"
                      target="_blank"
                    >
                      <Image
                        width={840}
                        height={585}
                        src="/images/locations/map-of-Lake-Forest-860x840.jpg"
                        alt="Lake Forest gated community"
                      />
                    </Link>
                  </div>
                </div>
              </div>{" "}
            </div>

            {/* Preston Hollow */}
            <a name="PrestonHollow"></a>
            <h3 className="centered neighborhood-name">
              Preston Hollow Home Watch
            </h3>
            <div className="row clearfix">
              {/* Content Column */}
              <div className="content-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <p>
                    Preston Hollow is a neighborhood in north Dallas, Texas,
                    USA. It is bordered on the south by the city of University
                    Park, Texas.
                  </p>
                  <p>
                    Preston Hollow is an affluent neighborhood located in the
                    middle of Dallas, Texas. The neighborhood is known for its
                    luxurious amenities, including high-end shopping and dining
                    options, and a wide range of entertainment options. Its
                    convenient location, just a short drive from downtown
                    Dallas, makes it an ideal place to call home for those who
                    value both convenience and luxury. The average home price in
                    the Preson Hollow neighborhood is around $1.5 million and it
                    is considered one of the most sought-after neighborhoods in
                    the city. In this neighborhood, you will find stunning
                    homes, beautiful parks, and excellent schools. Some of the
                    most popular streets in Preston Hollow include Preston Road,
                    Royal Lane, and Walnut Hill Lane. Zip codes in the Preston
                    Hollow area include: 75220, 75225, and 75229.
                  </p>

                  <div>
                    <iframe
                      width="400"
                      height="315"
                      src="https://www.youtube.com/embed/xHqK2egJKMk?clip=Ugkxzw6jdyXeX9gskVdaCLJtTwAiyZ7KL5DE&amp;clipt=EPeXERjX7BQ"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>{" "}
                  </div>
                </div>
              </div>
              {/* Image Column */}
              <div className="image-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div className="image centered">
                    <Link
                      href="https://www.google.com/maps/place/Preston+Hollow,+Dallas,+TX/@32.8792072,-96.8214209,15z/data=!3m1!4b1!4m6!3m5!1s0x864e9df59b0c5141:0x48e1c61c689529d0!8m2!3d32.8800899!4d-96.8138651!16zL20vMDczNnJ3"
                      target="_blank"
                    >
                      <Image
                        width={840}
                        height={630}
                        src="/images/locations/map-of-Preston-Hollow-860x840.jpg"
                        alt="Preston Hollow gated community"
                      />
                    </Link>
                  </div>
                </div>
              </div>{" "}
            </div>

            {/* Bluffview */}
            <a name="Bluffview"></a>
            <h3 className="centered neighborhood-name">Bluffview Home Watch</h3>
            <div className="row clearfix">
              {/* Content Column */}
              <div className="content-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <p>
                    Bluffview is a neighborhood in North Dallas, Texas (USA). It
                    is bounded by Northwest Highway (Loop 12) and the Preston
                    Hollow neighborhood on the north, Inwood Road and the
                    Devonshire neighborhood on the east, Lovers Lane and the Elm
                    Thicket/North Park neighborhood on the south, and Midway
                    Road, Bluebonnett Road, Bluff View Blvd., and the Shorecrest
                    and Cochran's Chapel neighborhoods on the west.
                  </p>
                  <p>
                    Bluffview is a picturesque neighborhood located in the heart
                    of Dallas, Texas, known for its beautiful homes, stunning
                    scenery, and elegant charm. Some of the most notable streets
                    in the area include Inwood Road, Lovers Lane, and Northwest
                    Highway. Zip codes include 75209, 75220 and 75235.
                  </p>
                  <p>
                    The neighborhood boasts an average home price of around $1.2
                    million, making it a highly desirable place to live. Its
                    serene surroundings and lovely landscapes, including its
                    namesake bluffs, provide a tranquil oasis amidst the hustle
                    and bustle of the city. The area is also home to several
                    parks, gardens, and walking trails, offering plenty of
                    opportunities to enjoy the outdoors. Its proximity to
                    high-end shopping and dining options, along with its
                    excellent schools, make it a popular choice for families and
                    those seeking a luxurious lifestyle.
                  </p>

                  <div>
                    <iframe
                      width="400"
                      height="315"
                      src="https://www.youtube.com/embed/7H6rSovz604"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </div>
              {/* Image Column */}
              <div className="image-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div className="image centered">
                    <Link
                      href="https://www.google.com/maps/place/Bluffview,+Dallas,+TX/@32.8589372,-96.8309274,16z/data=!4m6!3m5!1s0x864e9e77f9d89d05:0x825b62b5717ea6a8!8m2!3d32.8584384!4d-96.829506!16s%2Fm%2F027f3g_"
                      target="_blank"
                    >
                      <Image
                        height={860}
                        width={840}
                        src="/images/locations/map-of-Bluffview-860x840.jpg"
                        alt="Bluffview gated community"
                      />
                    </Link>
                  </div>
                </div>
              </div>{" "}
            </div>

            {/* Devonshire */}
            <a name="Devonshire"></a>
            <h3 className="centered neighborhood-name">
              Devonshire Home Watch
            </h3>
            <div className="row clearfix">
              {/* Content Column */}
              <div className="content-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <p>
                    Devonshire is a neighborhood in north Dallas, Texas (USA),
                    bounded by Northwest Highway (Loop 12) and Preston Hollow on
                    the north, the Dallas North Tollway, Preston Center and
                    University Park on the east, Lovers Lane and Inwood Village
                    on the south, and Inwood Road and the Bluffview neighborhood
                    on the west.
                  </p>
                  <p>
                    Devonshire is a charming neighborhood located in North
                    Dallas, Texas, known for its lovely homes, tree-lined
                    streets, and excellent schools. Some of the most notable
                    streets in the area include Lovers Lane, Devonshire Drive,
                    and Amherst Avenue, with zip codes ranging from 75209 to
                    75220.
                  </p>
                  <p>
                    The neighborhood boasts an average home price of around $1.2
                    million, making it a highly desirable place to live. Its
                    exquisite homes, many of which are renovated or
                    custom-built, feature a range of architectural styles, from
                    traditional to modern. The area is also home to several
                    parks, including the popular Inwood Village Park, and is
                    located just a short drive from high-end shopping and dining
                    options. Its convenient location and strong sense of
                    community make it an ideal place to call home for families
                    and those seeking a welcoming and friendly neighborhood.
                  </p>
                </div>
              </div>
              {/* Image Column */}
              <div className="image-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div className="image centered">
                    <Link
                      href="https://www.google.com/maps/place/Devonshire+Dr,+Dallas,+TX+75209/@32.8587181,-96.8180004,16z/data=!4m6!3m5!1s0x864e9e67ca336827:0xbec162dbc40cf36e!8m2!3d32.8574546!4d-96.8152825!16s%2Fg%2F1td9f4tw"
                      target="_blank"
                    >
                      <Image
                        width={840}
                        height={800}
                        src="/images/locations/map-of-Devonshire-860x840.jpg"
                        alt="Devonshire gated community"
                      />
                    </Link>
                  </div>
                </div>
              </div>{" "}
            </div>

            {/* Briarwood */}
            <a name="Briarwood"></a>
            <h3 className="centered neighborhood-name">Briarwood Home Watch</h3>
            <div className="row clearfix">
              {/* Content Column */}
              <div className="content-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <p>
                    Briarwood is a picturesque and highly sought-after
                    neighborhood located in the heart of Dallas, Texas. This
                    charming community is known for its tree-lined streets, lush
                    landscaping, and attractive homes, making it a popular
                    choice for families, professionals, and retirees alike. The
                    area is situated within the 75209 zip code and is bounded by
                    Inwood Road to the east, Lovers Lane to the north, and the
                    Southwestern Medical District to the west.
                  </p>
                  <p>
                    The average home price in Briarwood is approximately
                    $900,000, with many properties featuring impressive
                    architecture, spacious interiors, and luxurious amenities.
                    Notable streets in the neighborhood include Stanford Avenue,
                    Amherst Circle, and Purdue Avenue. Briarwood is also
                    conveniently located near popular shopping destinations such
                    as Inwood Village and Highland Park Village, as well as
                    numerous restaurants, coffee shops, and entertainment
                    venues.
                  </p>
                  <p>
                    In addition to its beautiful homes and convenient location,
                    Briarwood is home to several parks and outdoor recreational
                    areas, including Williams Park and Bachman Creek Greenbelt.
                    The area also offers easy access to major highways and
                    public transportation options, making it an ideal choice for
                    those who commute to other parts of Dallas.
                  </p>
                </div>
              </div>
              {/* Image Column */}
              <div className="image-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div className="image centered">
                    <Link
                      href="https://www.google.com/maps/search/Briarwood/@32.8555495,-96.8297416,15.5z"
                      target="_blank"
                    >
                      <Image
                        width={840}
                        height={820}
                        src="/images/locations/map-of-Briarwood-860x840.jpg"
                        alt="Briarwood gated community"
                      />
                    </Link>
                  </div>
                </div>
              </div>{" "}
            </div>

            {/* Northwood Hills */}
            <a name="NorthwoodHills"></a>
            <h3 className="centered neighborhood-name">
              Northwood Hills Home Watch
            </h3>
            <div className="row clearfix">
              {/* Content Column */}
              <div className="content-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <p>
                    Northwood Hills is a lovely neighborhood located in the
                    northern part of Dallas, Texas. The community is known for
                    its sprawling lawns, large trees, and serene atmosphere,
                    making it a popular destination for families and
                    professionals. The neighborhood is located within the 75240
                    zip code and is bounded by Coit Road to the west, Hillcrest
                    Road to the east, and LBJ Freeway to the south.
                  </p>
                  <p>
                    The average home price in Northwood Hills is around
                    $500,000, with many homes featuring spacious layouts and
                    updated features. Some of the notable streets in the
                    neighborhood include Meandering Way, Spring Valley Road, and
                    Meadowcreek Drive. The area is also home to several parks,
                    including the Northwood Hills Park and the Sparkman Club
                    Estates Park. Northwood Hills is conveniently located near
                    popular shopping destinations like the Galleria Dallas and
                    the Shops at Willow Bend, as well as plenty of dining
                    options. Overall, Northwood Hills is a beautiful and
                    peaceful neighborhood that offers an excellent quality of
                    life to its residents.
                  </p>
                </div>
              </div>
              {/* Image Column */}
              <div className="image-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div className="image centered">
                    <Link
                      href="https://www.google.com/maps/search/Northwood+Hills/@32.9471369,-96.7917504,15z"
                      target="_blank"
                    >
                      <Image
                        height={600}
                        width={840}
                        src="/images/locations/map-of-Northwood-Hills-860x600.jpg"
                        alt="Northwood-Hills gated community"
                      />
                    </Link>
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>
          <p>&nbsp;</p>
          <hr />

          <p>
            Reference: <Link href="https://en.wikipedia.org/">Wikipedia</Link>
          </p>
          <p>
            Interested in Dallas Crime Reports from the Dallas Police
            Department?{" "}
            <Link href="https://www.dallasopendata.com/Public-Safety/Dallas-Police-Active-Calls/9fxf-t2tr/data">
              Crime Reports
            </Link>
          </p>
        </div>
      </section>
    </Fragment>
  );
}

export default ServiceAreaPage;
