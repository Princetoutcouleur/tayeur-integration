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
import Localisation from "./Localisation";
import Planning from "./Planning";
import Comment from "./Comment";
import Note from "./Note";
import ContactForm from "./ContactForm";
import Footer from '../reutilusables/Footer'
import CallToAction from "./CallToAction";
import Testimonials from "./Testimonials";

const DetailAtelier = () => {
  return (
    <div id="DetailAtelier" className="container-fluid p-0">
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
            <div className="row mt-3">
              <div className="col-xl-12 col-lg-12 mb-3">
                {/* map */}
                <Localisation/>
              </div>
              <div className="col-xl-12 col-lg-12">
                {/* planning */}
                <Planning/>
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8">
            <div className="row">
              <div className="col-xl-12 col-lg-12 my-3">
                {/* comment */}
                <Comment/>
              </div>
              <div className="col-xl-12 col-lg-12">
                {/* note */}
                <Note/>
              </div>
              <div className="col-xl-12 col-lg-12">
                {/* contactForm */}
                <ContactForm/>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
            <div className="col-12">
                {/* callToAction */}
                <CallToAction/>
            </div>
        </div>
      </div>
      <div className="container-fluid p-0">
        {/* testimonial */}
        <Testimonials/>
        {/* footer */}
        <Footer/>
      </div>
    </div>
  );
};

export default DetailAtelier;
