import React from "react";
import p1 from "../../Assets/p1.png";
import p2 from "../../Assets/p2.png";
import p3 from "../../Assets/p3.png";
import p4 from "../../Assets/p4.png";
// import p5 from "../../Assets/p5.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import "./AboutPage.css";
import Navigation from "../reutilusables/Navigation";
import Testimonials from "../detailAtelier/Testimonials";
import Footer from "../reutilusables/Footer";

const AboutPage = () => {
  return (
    <div className="aboutPage container-fluid p-0 pt-5">
      <Navigation />
      <div className="row g-0 mt-5">
        <div className="mx-5 mb-5">
          <p className="fs-5">
            À propos de <span className="fw-bold">nous</span>
          </p>
        </div>
        <div className="col-lg-6">
          <img src={p1} alt="" className="img-fluid" />
        </div>
        <div className="col-lg-6 px-5 d-flex justify-content-center align-items-center">
          <div>
          <h1 className="fw-bold">Qui sommes nous ?</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima labore architecto molestiae natus, facilis fuga at dolore totam! Ut delectus aut aspernatur magni quas eos quod a rem, tempora vel.</p>
          <br />
          <p className="text-danger text-wrap">
            <a href="" className="text-decoration-none text-danger fw-bold">En savoir plus <AiOutlineArrowRight /></a>
          </p>
          </div>
        </div>
      </div>
      <div className="row g-0">
       <div className="col-lg-6 px-5 d-flex justify-content-center align-items-center">
          <div>
          <h1 className="fw-bold">Notre vision</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima labore architecto molestiae natus, facilis fuga at dolore totam! Ut delectus aut aspernatur magni quas eos quod a rem, tempora vel.</p>
          <br />
          <p className="text-danger text-wrap">
            <a href="" className="text-decoration-none text-danger fw-bold">En savoir plus <AiOutlineArrowRight /></a>
          </p>
          </div>
        </div>
        <div className="col-lg-6">
          <img src={p2} alt="" className="img-fluid" />
        </div>
      </div>
      <div className="row g-0">
        <div className="col-lg-6">
          <img src={p3} alt="" className="img-fluid" />
        </div>
        <div className="col-lg-6 px-5 d-flex justify-content-center align-items-center">
          <div>
          <h1 className="fw-bold">Notre mission</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima labore architecto molestiae natus, facilis fuga at dolore totam! Ut delectus aut aspernatur magni quas eos quod a rem, tempora vel.</p>
          <br />
          <p className="text-danger text-wrap">
            <a href="" className="text-decoration-none text-danger fw-bold">En savoir plus <AiOutlineArrowRight /></a>
          </p>
          </div>
        </div>
      </div>
      <div className="row g-0">
      <div className="col-lg-6 px-5 d-flex justify-content-center align-items-center">
          <div>
          <h1 className="fw-bold">Notre valeur</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima labore architecto molestiae natus, facilis fuga at dolore totam! Ut delectus aut aspernatur magni quas eos quod a rem, tempora vel.</p>
          <br />
          <p className="text-danger text-wrap">
            <a href="" className="text-decoration-none text-danger fw-bold">En savoir plus <AiOutlineArrowRight /></a>
          </p>
          </div>
        </div>
        <div className="col-lg-6">
          <img src={p4} alt="" className="img-fluid" />
        </div>
      </div>
      <Testimonials/>
      <Footer/>
    </div>
  );
};

export default AboutPage;



// by The Pincetoutcouleur