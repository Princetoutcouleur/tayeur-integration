import React from "react";

const Banner = () => {
  return (
    <div id="Banner">
      <div className="Top-banner vh-100">
        <div className="Top-banner-content vh-100 text-center text-light position-relative">
          <div className="mt-5 position-absolute top-50 start-50 translate-middle">
            <h3>Découvrez votre prochaine session de créativité.</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <div className="d-flex justify-content-center align-items-center">
              <div>
                <select class="form-select rounded-0" aria-label="Default select example">
                  <option selected>Categories</option>
                  <option value="1">Taille basse</option>
                  <option value="2">Robe</option>
                  <option value="3">Grand boubou femme</option>
                  <option value="4">Grand boubou homme</option>
                  <option value="5">Costume africain</option>
                  <option value="6">Costume</option>
                </select>
              </div>
              <div>
              <button class="btn btn-danger rounded-0 px-5">Recherche</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Bottom-banner text-light">
        <div className=" Bottom-banner-content">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 p-5">
              <h1>Vous êtes à la recherche des meilleurs couturiers ?</h1>
              <h6>Passez à la vitesse supérieure avec Tayeur Gestion</h6>
              <p>Découvrez comment nous pouvons vous aider à trouver les meilleurs tailleurs sur la plateforme.</p>
              <div className="d-block px-5">
                <button type="button" class="btn btn-danger text-uppercase w-100 rounded-pill">en savoir plus</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
