import React from "react";
import Sixpointneuf from "../../Assets/6-point-9.png";
import { AiFillStar } from 'react-icons/ai'

const Banner = () => {
  return (
    <div id="bannerDetail" className="container-fluid vh-100">
      <div className="sikaw d-flex justify-content-center align-items-center">
        <div>
          <img src={Sixpointneuf} alt="" className="img-fluid" />
        </div>
        <hr />
      </div>

      <div className="sisouf d-flex justify-content-between align-items-baseline pt-3">
        <div className="d-flex gap-5">
          <div className="card rounded-circle shadow-lg p-3">
            <img src={Sixpointneuf} alt="" className="img-fluid img-cover my-auto" />
          </div>
          <div>
            <h5 className="text-capitalize">6 point 9</h5>
            <div className="d-flex gap-2">
              <p className="fw-bold fs-6">5</p>
              <ul className="list-unstyled d-flex">
                <li className="fs-6 text-warning"><AiFillStar/></li>
                <li className="fs-6 text-warning"><AiFillStar/></li>
                <li className="fs-6 text-warning"><AiFillStar/></li>
                <li className="fs-6 text-warning"><AiFillStar/></li>
                <li className="fs-6 text-warning"><AiFillStar/></li>
              </ul>
            </div>
            <p>1 avis</p>
          </div>
        </div>
        <div>
        <div class="d-flex gap-4">
              <button class="btn btn-danger text-uppercase rounded-pill">
                prenez un rendez-vous
              </button>
              <button class="btn btn-outline-danger text-uppercase rounded-pill">
                passez une commande
              </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
