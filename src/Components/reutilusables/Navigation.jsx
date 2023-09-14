import React from "react";
import logo from "../../Assets/logo.png"

const Navigation = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
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
          <div class="collapse navbar-collapse gap-5" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
              <li class="nav-item fs-5">
                <a class="nav-link active" aria-current="page" href="#">
                  Accueil
                </a>
              </li>
              <li class="nav-item fs-5">
                <a class="nav-link" href="#">
                  Ateliers
                </a>
              </li>
              <li class="nav-item fs-5">
                <a class="nav-link " aria-current="page" href="#">
                  Produits
                </a>
              </li>
              <li class="nav-item fs-5">
                <a class="nav-link" href="#">
                  À propos de nous
                </a>
              </li>
              <li class="nav-item fs-5">
                <a class="nav-link" href="#">
                  Contact
                </a>
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
