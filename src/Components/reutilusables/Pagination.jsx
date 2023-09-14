import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Pagination = () => {
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center">
        <nav aria-label="Page navigation example">
          <ul class="pagination gap-3">
            <li class="page-item">
              <a class="page-link text-danger" href="#">
                <BsChevronLeft />
              </a>
            </li>
            <li class="page-item">
              <a class="page-link text-danger" href="#">
                1
              </a>
            </li>
            <li class="page-item">
              <a class="page-link text-danger" href="#">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link text-danger" href="#">
                3
              </a>
            </li>
            <li class="page-item">
              <a class="page-link text-danger" href="#">
                <BsChevronRight />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Pagination;
