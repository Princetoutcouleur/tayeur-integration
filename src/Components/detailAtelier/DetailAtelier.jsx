import React from "react";
import "./DetailAtelier.css";
import Navigation from "../reutilusables/Navigation";
import Banner from "./Banner";
import Contact from "./Contact";
import Description from "./Description";
import Information from "./Information";
import ContactInfo from "./ContactInfo";
import Category from "./Category";
import Gallery from "./Gallery";

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
          <div className="col-xl-8 col-lg-8 mb-3">
            {/* description */}
            <Description/>
            </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-4">
            <div className="row">
              <div className="col-xl-12 col-lg-12 mb-3">
                {/* information */}
                <Information/>
              </div>
              <div className="col-xl-12 col-lg-12 mb-3 ">
                {/* contactInfo */}
                <ContactInfo/>
              </div>
              <div className="col-xl-12 col-lg-12">
                {/* categories */}
                <Category/>
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8">
            {/* gallerie */}
            <Gallery/>
          </div>
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
