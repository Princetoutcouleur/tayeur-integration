import React from "react";
import activePhoto from "../../Assets/active-photo.png";
import imgItem1 from "../../Assets/984PHEl6NF.jpeg (1).png";
import imgItem2 from "../../Assets/984PHEl6NF.jpeg (2).png";
import imgItem3 from "../../Assets/984PHEl6NF.jpeg (3).png";


const Gallery = () => {
  return (
    <div className="card shadow rounded-5">
      <div className="card-body">
        <h4>Galerie | Nos réalisations</h4>
        <div className="mb-3 d-flex justify-content-center">
          <img src={activePhoto} alt="" className="img-fluid" />
        </div>
        <div className="d-flex gap-5 justify-content-between align-items-center">
        <div className="">
          <img src={imgItem1} alt="" className="img-fluid" />
        </div>
        <div className="">
          <img src={imgItem2} alt="" className="img-fluid" />
        </div>
        <div className="">
          <img src={imgItem3} alt="" className="img-fluid" />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
