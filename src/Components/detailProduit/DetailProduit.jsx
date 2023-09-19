import React from "react";
import "./DetailProduit.css";
import Navigation from "../reutilusables/Navigation";
import Information from "../detailAtelier/Information";
import ContactInfo from "../detailAtelier/ContactInfo";
import grandBoubou from "../../Assets/Grand-bou-getzner-blanc.jpg";
import {
  AiOutlineHeart,
  AiOutlineShareAlt,
  AiOutlineMessage,
} from "react-icons/ai";
import Localisation from "../detailAtelier/Localisation";
import Planning from "../detailAtelier/Planning";
import Note from "../detailAtelier/Note";
import ContactForm from "../detailAtelier/ContactForm";
import Testimonials from "../detailAtelier/Testimonials";
import Footer from "../reutilusables/Footer";

const DetailProduit = () => {
  return (
    <div className="container-fluid pt-5 p-0">
      <Navigation />
      <div className="container pt-5">
        <div className="row row-reverse">
          <div className="col-lg-5 col-md-5 col-sm-12">
            <div className="mb-3">
              <Information />
            </div>
            <div className="mb-3">
              <ContactInfo />
            </div>
          </div>
          <div className="col-lg-7 col-md-7 col-sm-12 mb-5">
            <div className="card shadow mb-3">
              <div className="card-body p-0">
                <div>
                  <img
                    src={grandBoubou}
                    alt=""
                    className="img-fluid object-fit-"
                  />
                </div>
                <div className="bg-dark text-light px-2">
                  <p className="text-capitalize fw-bold fs-5">
                    grand boubou femme
                  </p>
                  <p></p>
                </div>
                <div
                  className="d-flex
        justify-content-around align-items-center"
                >
                  <p className="text-danger">
                    <AiOutlineHeart className="me-2" />
                    20K
                  </p>
                  <p className="text-danger">
                    <AiOutlineShareAlt className="me-2" />
                    34
                  </p>
                  <p className="text-danger">
                    <AiOutlineMessage className="me-2" />
                    567
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-5 col-md-5 col-sm-12">
            <div className="mb-3">
              <Localisation />
            </div>
            <div className="mb-3">
              <Planning />
            </div>
          </div>
          <div className="col-lg-7 col-md-7 col-sm-12">
            <div className="mb-5">
              <Note />
            </div>
            <div className="mb-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      <Testimonials />
      <Footer />
    </div>
  );
};

export default DetailProduit;
