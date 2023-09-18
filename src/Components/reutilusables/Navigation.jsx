import React from "react";
import logo from "../../Assets/logo.png";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top shadow">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src={logo} alt="Logo tayeur" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse gap-5"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
              <li class="nav-item fs-5">
                <Link to="/" className="text-decoration-none">
                  <a class="nav-link" aria-current="page" >
                    Accueil
                  </a>
                </Link>
              </li>
              <li class="nav-item fs-5">
                <Link className="text-decoration-none" to="/atelier">
                  <a class="nav-link" >
                    Ateliers
                  </a>
                </Link>
              </li>
              <li class="nav-item fs-5">
                <Link className="text-decoration-none" to="/produit">
                  <a class="nav-link "  >
                    Produits
                  </a>
                </Link>
              </li>
              <li class="nav-item fs-5">
                <Link className="text-decoration-none" to="/about">
                  <a class="nav-link" >
                    À propos de nous
                  </a>
                </Link>
              </li>
              <li class="nav-item fs-5">
                <Link className="text-decoration-none" to="/contact">
                  <a class="nav-link" >
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
            <div class="d-flex gap-4">
              <button class="btn btn-danger text-uppercase rounded-pill">
                devenir partenaire
              </button>
              <button class="btn btn-outline-danger text-uppercase rounded-pill">
                s'identifier
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
