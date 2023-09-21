import React from "react";
import Sixpointneuf from "../../Assets/6-point-9.png";
import { AiFillStar } from "react-icons/ai";

const Banner = () => {
  return (
    <div id="bannerDetail" className="container-fluid p-0 vh-100 bg-secondary-subtle">
      <div className="sikaw d-flex justify-content-center align-items-center bg-white">
        <div>
          <img src={Sixpointneuf} alt="" className="img-fluid" />
        </div>
        <hr />
      </div>

      <div className="sisouf row pt-3 ">
        <div className="col-lg-6 col-md-6 col-sm-12 position-relative pe-5">
          <div className="card rounded-circle shadow-lg p-3 position-absolute bottom-50 start-0 ms-5">
            <img
              src={Sixpointneuf}
              alt=""
              className="img-fluid img-cover my-auto"
            />
          </div>
          <div className="float-end pe-5">
            <div>
            <h5 className="text-capitalize">6 point 9</h5>
            <div className="d-flex gap-2">
              <p className="fw-bold fs-6">5</p>
              <ul className="list-unstyled d-flex">
                <li className="fs-6 text-warning">
                  <AiFillStar />
                </li>
                <li className="fs-6 text-warning">
                  <AiFillStar />
                </li>
                <li className="fs-6 text-warning">
                  <AiFillStar />
                </li>
                <li className="fs-6 text-warning">
                  <AiFillStar />
                </li>
                <li className="fs-6 text-warning">
                  <AiFillStar />
                </li>
              </ul>
            </div>
            <p>1 avis</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12  ">
          <div className="d-flex justify-content-evenly pt-5 ">
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
