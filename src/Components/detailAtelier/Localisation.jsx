import React from "react";
import Showroom from '../../Assets/showroom 6.9.png'
import {AiFillStar} from 'react-icons/ai'

const Localisation = () => {
  return (
    <div className="card rounded-5 shadow p-0">
      <div className="card-body">
        <div>
          <p className="text-uppercase fw-bold">map</p>
          <hr />
        </div>
        <div className="d-flex justify-content-center localisation">
        <iframe id="catre" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61741.332543505705!2d-17.506936759429312!3d14.722015827469534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec10d48e31010a7%3A0x7807ca15a30d5c17!2s6POINT9%20Scatt%20Urbam!5e0!3m2!1sfr!2ssn!4v1694984249506!5m2!1sfr!2ssn"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="position-relative">
            <div className="position-absolute top-0 start-50 translate-middle d-flex justify-content-center">
            <img src={Showroom} alt="" className="img-fluid rounded-3 mb-5"/>
            </div>
        </div>
        <div className="mt-5 position-relative">
            <p className="text-capitalize">6 point 9</p>
            <p className="text-capitalize">showroom scat urban</p>
            </div>
            <div className="d-flex justify-content-between">
                <p className="fw-bold text-capitalize">1 avis</p>
                <p className="fw-bold"><AiFillStar className="text-warning me-1"/>4,65</p>
            </div>
      </div>
    </div>
  );
};

export default Localisation;
