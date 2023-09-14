import React from "react";
import logo from "../../Assets/logo-footer.png";
import { BsInstagram, BsDribbble, BsTwitter, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="container-fluid text-light p-5 bg-danger">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-3">
            <img src={logo} alt="" className="mb-4" />
            <ul className="list-unstyled mb-4">
              <li>
                <a href="" className="text-decoration-none text-light">
                  A porpos de nous
                </a>
              </li>
              <li>
                <a href="" className="text-decoration-none text-light">
                  Contact
                </a>
              </li>
            </ul>
            <ul className="list-unstyled d-flex gap-3 mb-5">
              <li className="pb-1 px-2 rounded-circle bg-light">
                <a href="">
                  <BsInstagram className="text-danger" />
                </a>
              </li>
              <li className="pb-1 px-2 rounded-circle bg-light">
                <a href="">
                  <BsDribbble className="text-danger" />
                </a>
              </li>
              <li className="pb-1 px-2 rounded-circle bg-light">
                <a href="">
                  <BsTwitter className="text-danger" />
                </a>
              </li>
              <li className="pb-1 px-2 rounded-circle bg-light">
                <a href="">
                  <BsYoutube className="text-danger" />
                </a>
              </li>
            </ul>
            <p>&copy; Tayeur Gestion 2023</p>
          </div>
          <div className="col-xl-3 col-lg-3">
            <p className="fw-bold">Info</p>
            <ul className="list-unstyled lh-lg">
              <li>
                <a href="" className="text-decoration-none text-light">
                  Accueil
                </a>
              </li>
              <li>
                <a href="" className="text-decoration-none text-light">
                  Ateliers
                </a>
              </li>
              <li>
                <a href="" className="text-decoration-none text-light">
                  Produits
                </a>
              </li>
              <li>
                <a href="" className="text-decoration-none text-light">
                  À propos de nous
                </a>
              </li>
              <li>
                <a href="" className="text-decoration-none text-light">
                  Contact
                </a>
              </li>
              <li>
                <a href="" className="text-decoration-none text-light">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="" className="text-decoration-none text-light">
                  Tems&Conditions
                </a>
              </li>
            </ul>
          </div>
          <div className="col-xl-3 col-lg-3">
            <p className="fw-bold">Adresse</p>
            <ul className="list-unstyled lh-lg">
              <li>HML Grand Yoff</li>
              <li>Dakar</li>
              <li>Sénégal</li>
            </ul>
          </div>
          <div className="col-xl-3 col-lg-3">
            <p className="fw-bold">Aide</p>
            <ul className="list-unstyled lh-lg">
              <li>Email:
                <a href="" className="text-decoration-none text-light">
                    tayeurgestion@gmail.com
                </a>
              </li>
              <li>Client Support: 
                <a href="" className="text-decoration-none text-light">
                    Support@lenslove.com
                </a>
              </li>
              <li>
                +221 77 777 77 77
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
