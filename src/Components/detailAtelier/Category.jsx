import React from "react";


const Category = () => {
  return (
    <div>
      <div class="card shadow rounded-5">
        <div class="card-body">
          <p className="text-uppercase fw-bold">categories</p>
          <hr />
          <div className="d-flex gap-1 justify-content-start flex-wrap">
              <p className="text-capitalize bg-danger text-light px-2 rounded-pill">
                taille base
              </p>
              <p className="text-capitalize bg-danger text-light px-2 rounded-pill">
                robe
              </p>
              <p className="text-capitalize bg-danger text-light px-2 rounded-pill">
                grand boubou femme
              </p>
              <p className="text-capitalize bg-danger text-light px-2 rounded-pill">
                grand bouou homme
              </p>
              <p className="text-capitalize bg-danger text-light px-2 rounded-pill">
                costume
              </p>
              <p className="text-capitalize bg-danger text-light px-2 rounded-pill">
                costume africain
              </p>
              <p className="text-capitalize bg-danger text-light px-2 rounded-pill">
                baye lahat taille mame
              </p>
              <p className="text-capitalize bg-danger text-light px-2 rounded-pill">
                taille haute
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
