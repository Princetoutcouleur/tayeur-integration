import React from "react";
import Filtre from "../../Components/reutilusables/Filtre";
import CardListAtelier from "../reutilusables/CardListAtelier";
import Pagination from "../reutilusables/Pagination";

const Content = () => {
  return (
    <div className="container p-5">
      <p className="text-secondary">Tous les items</p>
      <p className="text-secondary">
        Nos ateliers de <strong className="text-dark">Couture</strong>
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
  );
};

export default Content;
