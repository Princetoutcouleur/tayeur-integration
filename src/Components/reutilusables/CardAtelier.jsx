import React from "react";
import { AiFillStar } from "react-icons/ai";
import {
  BsWhatsapp,
  BsTelephoneFill,
  BsFillChatLeftTextFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";

const CardAtelier = (props) => {
  return (
    <Link to='../detailAtelier' className="text-decoration-none">
      <div>
      <div id="CardAtelier" class="card shadow-lg mb-3 ">
        <div className="card-img-top d-flex justify-content-center align-items-center border-bottom">
          <div>
            <img src={props.image} alt="" className="img-fluid rounded-top" />
          </div>
        </div>
        <div class="card-body">
          <p className="text-uppercase fw-bold">{props.title}</p>
          <div>
            <div className="avis d-flex gap-2 align-items-baseline">
              <p className="fs-6">5</p>
              <AiFillStar className="fs-6 text-warning" />
              <AiFillStar className="fs-6 text-warning" />
              <AiFillStar className="fs-6 text-warning" />
              <AiFillStar className="fs-6 text-warning" />
              <AiFillStar className="fs-6 text-warning" />
              <p className="fs-6">1 avis</p>
            </div>
            <div>
              <ul className=" list-unstyled d-flex gap-3">
                <li>
                  <button className="btn btn-success text-light pb-2 rounded-circle">
                    <BsWhatsapp />
                  </button>
                </li>
                <li>
                  <button className="btn btn-danger text-light pb-2 rounded-circle">
                    <BsTelephoneFill />
                  </button>
                </li>
                <li>
                  <button className="btn btn-danger text-light pb-2 rounded-circle">
                    <BsFillChatLeftTextFill />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default CardAtelier;
