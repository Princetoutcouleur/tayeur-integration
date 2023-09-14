import React from "react";
import "./AtelierPage.css";
import Navigation from "../reutilusables/Navigation";
import Filtre from "../reutilusables/Filtre";
import CardListAtelier from "../reutilusables/CardListAtelier";
import Pagination from "../reutilusables/Pagination";
import Footer from "../reutilusables/Footer";

const AtelierPage = () => {
  return (
    <div id="AtelierPage" className="container-fluid">
      <Navigation />
      <div className="container">
        <p className="fw-bold">Tous les items</p>
        <p className="fs-5">
          Nos ateliers de <strong>Couture</strong>
        </p>
        <div className="row">
          <div className="col-xl-3 col-lg-3">
            <Filtre />
          </div>
          <div className="col-xl-9 col-lg-9">
            <CardListAtelier />
            <Pagination />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AtelierPage;
