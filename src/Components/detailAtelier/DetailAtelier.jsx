import React from "react";
import "./DetailAtelier.css";
import Navigation from "../reutilusables/Navigation";
import Banner from "./Banner";
import Contact from "./Contact";
import Description from "./Description";
import Information from "./Information";

const DetailAtelier = () => {
  return (
    <div id="DetailAtelier" className="container-fluid">
      <Navigation />
      {/* banner */}
      <Banner/>
      <div className="container py-5">
        <div className="row">
          <div className="col-xl-4 col-lg-4">
            {/* contact */}
            <Contact/>
            </div>
          <div className="col-xl-8 col-lg-8 ">
            {/* description */}
            <Description/>
            </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-4">
            <div className="row">
              <div className="col-xl-12 col-lg-12">
                {/* information */}
                <Information/>
              </div>
              <div className="col-xl-12 col-lg-12">{/* contactInfo */}</div>
              <div className="col-xl-12 col-lg-12">{/* categories */}</div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8">{/* gallerie */}</div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-4">
            <div className="row">
              <div className="col-xl-12 col-lg-12">{/* map */}</div>
              <div className="col-xl-12 col-lg-12">{/* planning */}</div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8">
            <div className="row">
              <div className="col-xl-12 col-lg-12">{/* comment */}</div>
              <div className="col-xl-12 col-lg-12">{/* note */}</div>
              <div className="col-xl-12 col-lg-12">{/* contactForm */}</div>
            </div>
          </div>
        </div>
        <div className="row">
            <div>
                {/* callToAction */}
            </div>
        </div>
      </div>
      <div className="container-fluid">
        {/* testimonial */}
        {/* footer */}
      </div>
    </div>
  );
};

export default DetailAtelier;
