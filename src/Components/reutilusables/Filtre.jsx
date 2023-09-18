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
          <div className="d-flex justify-content-between mb-3">
            <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label text-capitalize fs-6" for="flexCheckDefault">
                taille basse
                </label>
            </div>
            <div className="">
              <span className="fw-bold">155</span>
            </div>
          </div>
          <div className="d-flex justify-content-between mb-3">
            <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label text-capitalize fs-6" for="flexCheckDefault">
                robe
                </label>
            </div>
            <div className="">
              <span className="fw-bold">70</span>
            </div>
          </div>
          <div className="d-flex justify-content-between mb-3">
            <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label text-capitalize fs-6" for="flexCheckDefault">
                grand boubou femme
                </label>
            </div>
            <div className="">
              <span className="fw-bold">486</span>
            </div>
          </div>
          <div className="d-flex justify-content-between mb-3">
            <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label text-capitalize fs-6" for="flexCheckDefault">
                grand boubou homme
                </label>
            </div>
            <div className="">
              <span className="fw-bold">75</span>
            </div>
          </div>
          <div className="d-flex justify-content-between mb-3">
            <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label text-capitalize fs-6" for="flexCheckDefault">
                costume africain
                </label>
            </div>
            <div className="">
              <span className="fw-bold">195</span>
            </div>
          </div>
          <div className="d-flex justify-content-between mb-3">
            <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label text-capitalize fs-6" for="flexCheckDefault">
                taille basse
                </label>
            </div>
            <div className="">
              <span className="fw-bold">155</span>
            </div>
          </div>
        </div>
        <hr />
        <div className="Categories mb-3">
          <p className="text-secondary">Ateliers</p>
          <div className="d-flex justify-content-between mb-3">
            <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label text-capitalize fs-6" for="flexCheckDefault">
                6 point 9
                </label>
            </div>
            <div className="">
              <span className="fw-bold">27</span>
            </div>
          </div>
          <div className="d-flex justify-content-between mb-3">
            <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label text-capitalize fs-6" for="flexCheckDefault">
                fallou galass couture
                </label>
            </div>
            <div className="">
              <span className="fw-bold">36</span>
            </div>
          </div>
          <div className="d-flex justify-content-between mb-3">
            <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label text-capitalize fs-6" for="flexCheckDefault">
                djiby couture
                </label>
            </div>
            <div className="">
              <span className="fw-bold">78</span>
            </div>
          </div>
          <div className="d-flex justify-content-between mb-3">
            <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label text-capitalize fs-6" for="flexCheckDefault">
                heritage couture
                </label>
            </div>
            <div className="">
              <span className="fw-bold">103</span>
            </div>
          </div>
          <div className="d-flex justify-content-between mb-3">
            <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label text-capitalize fs-6" for="flexCheckDefault">
                djolof art
                </label>
            </div>
            <div className="">
              <span className="fw-bold">84</span>
            </div>
          </div>
          <div className="d-flex justify-content-between mb-3">
            <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label text-capitalize fs-6" for="flexCheckDefault">
                bamba couture
                </label>
            </div>
            <div className="">
              <span className="fw-bold">62</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filtre;
