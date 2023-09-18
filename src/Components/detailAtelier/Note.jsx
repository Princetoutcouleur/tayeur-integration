import React from "react";
import { AiFillStar } from "react-icons/ai";

const Note = () => {
  return (
    <div className="card shadow rounded-5">
      <div className="card-body">
        <p className="fw-bold text-uppercase">notez la boutique</p>
        <hr />
        <div className="d-flex justify-content-center align-items-center">
          <div className="py-4">
            <p className="fw-bold text-uppercase">notez la boutique</p>
            <ul className="list-unstyled">
              <li className="d-flex gap-2 mt-2">
                <AiFillStar className="text-secondary fs-3" />
                <AiFillStar className="text-secondary fs-3" />
                <AiFillStar className="text-secondary fs-3" />
                <AiFillStar className="text-secondary fs-3" />
                <AiFillStar className="text-secondary fs-3" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Note;
