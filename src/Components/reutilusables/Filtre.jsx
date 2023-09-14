import React from "react";
import { BsChevronLeft } from "react-icons/bs";

const Filtre = () => {
  return (
    <div class="card rounded-0 shadow-sm mb-3">
      <div class="card-body">
        <div className="d-flex justify-content-between align-items-baseline mb-3">
          <p>Filtres</p>
          <BsChevronLeft />
        </div>
        <p className="mb-3">Affiner par</p>
        <div className="Categories mb-3">
          <p className="text-secondary">Categories</p>
          <div className="d-flex">
            <div>
              <div class="form-check">
                <input
                  class="form-check-input p-2"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
              </div>
            </div>
            <div className="d-flex gap-5">
              <p className="text-capitalize fs-6">taille basse</p>
              <p className="fw-bold">155</p>
            </div>
          </div>
          <div className="d-flex">
            <div>
              <div class="form-check">
                <input
                  class="form-check-input p-2"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
              </div>
            </div>
            <div className="d-flex gap-5">
              <p className="text-capitalize fs-6">robe</p>
              <p className="fw-bold">70</p>
            </div>
          </div>
          <div className="d-flex">
            <div>
              <div class="form-check">
                <input
                  class="form-check-input p-2"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
              </div>
            </div>
            <div className="d-flex gap-5">
              <p className="text-capitalize fs-6">grand boubou femme</p>
              <p className="fw-bold">405</p>
            </div>
          </div>
          <div className="d-flex">
            <div>
              <div class="form-check">
                <input
                  class="form-check-input p-2"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
              </div>
            </div>
            <div className="d-flex gap-5">
              <p className="text-capitalize fs-6">grand boubou homme</p>
              <p className="fw-bold">75</p>
            </div>
          </div>
          <div className="d-flex">
            <div>
              <div class="form-check">
                <input
                  class="form-check-input p-2"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
              </div>
            </div>
            <div className="d-flex gap-5">
              <p className="text-capitalize fs-6">costume africain</p>
              <p className="fw-bold">195</p>
            </div>
          </div>
          <div className="d-flex">
            <div>
              <div class="form-check">
                <input
                  class="form-check-input p-2"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
              </div>
            </div>
            <div className="d-flex gap-5">
              <p className="text-capitalize fs-6">costume</p>
              <p className="fw-bold">200</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="Categories mb-3">
          <p className="text-secondary">Ateliers</p>
          <div className="d-flex">
            <div>
              <div class="form-check">
                <input
                  class="form-check-input p-2"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
              </div>
            </div>
            <div className="d-flex gap-5">
              <p className="text-capitalize">6 point 9</p>
              <p className="fw-bold">27</p>
            </div>
          </div>
          <div className="d-flex">
            <div>
              <div class="form-check">
                <input
                  class="form-check-input p-2"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
              </div>
            </div>
            <div className="d-flex gap-5">
              <p className="text-capitalize">fallou gallas couture</p>
              <p className="fw-bold">36</p>
            </div>
          </div>
          <div className="d-flex">
            <div>
              <div class="form-check">
                <input
                  class="form-check-input p-2"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
              </div>
            </div>
            <div className="d-flex gap-5">
              <p className="text-capitalize">djiby couture</p>
              <p className="fw-bold">78</p>
            </div>
          </div>
          <div className="d-flex">
            <div>
              <div class="form-check">
                <input
                  class="form-check-input p-2"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
              </div>
            </div>
            <div className="d-flex gap-5">
              <p className="text-capitalize">heritage couture</p>
              <p className="fw-bold">103</p>
            </div>
          </div>
          <div className="d-flex">
            <div>
              <div class="form-check">
                <input
                  class="form-check-input p-2"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
              </div>
            </div>
            <div className="d-flex gap-5">
              <p className="text-capitalize">djolof art</p>
              <p className="fw-bold">84</p>
            </div>
          </div>
          <div className="d-flex">
            <div>
              <div class="form-check">
                <input
                  class="form-check-input p-2"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
              </div>
            </div>
            <div className="d-flex gap-5">
              <p className="text-capitalize">bamba couture</p>
              <p className="fw-bold">62</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filtre;
