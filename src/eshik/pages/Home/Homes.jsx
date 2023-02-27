import React from "react";
import { Link } from "react-router-dom";

//image
import logo from "../../assets/Aiwork-logo.svg";
import doorImg from "../../assets/door.svg";
import arrowHeight from "../../assets/arrow-height.svg";
import arrowWidth from "../../assets/arrow-width.svg";

import "./home.scss";

const Homes = () => {
  return (
    <div className="container-wrap shadow px-4">
      <img src={logo} alt="Ai work logo" />
      <div className="home__wrap py-5">
        <h2 className="home__title text-center ">O'lchamlarni kiriting</h2>

        <div className="d-flex align-items-center justify-content-end gap-3 mt-5">
          <div className="d-flex flex-column">
            <label className="label text-primary text-end">Balanligi</label>
            <input
              className="inp"
              type="number"
              name="height"
              placeholder="sm"
            />
          </div>
          <div className="d-flex flex-column">
            <div className="d-flex">
              <img className="me-2" src={arrowHeight} alt="" />
              <img src={doorImg} alt="the door" />
            </div>
            <img className="mt-2 ms-3" src={arrowWidth} width={180} alt="" />
            <div className=" d-flex flex-column justify-content-center align-items-center">
              <label className="label text-primary ms-5">Uzunligi</label>
              <input
                className="inp"
                type="number"
                name="width"
                placeholder="sm"
              />
            </div>
          </div>
        </div>
        <button className="home__btn mt-3">Alumin</button>
        <div className="d-flex justify-content-end mt-3">
          <Link to={"/color"} className="next-page d-flex justify-content-center align-items-center fs-2 text-white text-end">
            <i class="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homes;
