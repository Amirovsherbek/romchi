import React from "react";

import logo from "../../assets/Aiwork-logo.svg";
import doorImg from "../../assets/door.svg";
import details from "../../assets/details.png";
import { Link } from "react-router-dom";


const Detail = () => {
  return (
    <div className="container-wrap shadow px-4">
      <img src={logo} alt="Ai work logo" />

      <div className="py-5">
        <div className="text-center">
          <img src={doorImg} alt="" />
        </div>

        <div className="d-flex mt-5 align-items-center justify-content-between">
          <span className="col-1 text-center">
            <i className="fa-solid fa-chevron-left fs-2"></i>
          </span>
          <div className="col-10 d-flex gap-2 justify-content-center">
            <img src={details} alt="" />
            <img src={details} alt="" />
            <img src={details} alt="" />
          </div>
          <span className="col-1 text-center">
            <i className="fa-solid fa-chevron-right fs-2"></i>
          </span>
        </div>
        <div className="d-flex justify-content-end my-5">
          <Link
            to={"/detail"}
            className="next-page d-flex justify-content-center align-items-center fs-2 text-white text-end"
          >
            <i class="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Detail