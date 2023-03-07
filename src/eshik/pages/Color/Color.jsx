import React from "react";

//images
import logo from "../../../image/logo.svg";
import doorImg from "../../assets/door.svg";
import white from "../../../image/oq.png";
import zalatoyDub from "../../../image/malla.png";
import dubMokko from "../../../image/mokko.png";
import mokeyAsfalt from "../../../image/temir.png";

import "./color.scss";
import { Link } from "react-router-dom";

const Color = () => {
  return (
    <div className="container-wrap shadow px-4">
      <img src={logo} alt="Ai work logo" />

      <div className="py-4">
        <div className="text-center">
          <img className="" src={doorImg} alt="" />
        </div>
        <div className="d-flex flex-column align-items-center just mt-3">
          <strong className="color-title">Eshikni rangini tanlang</strong>
          <div className="d-flex justify-content-between gap-3">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <img src={white} width={70} height={70} alt="s" style={{borderRadius:'8px'}} />
              {/* <span className="white bg-white"></span> */}
              <p className="color-text">Oq</p>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <img src={zalatoyDub} width={70} height={70} alt="s" style={{borderRadius:'8px'}}/>
              <p className="color-text">Zalatoy Dub</p>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <img src={dubMokko} width={70} height={70} alt="s" style={{borderRadius:'8px'}}/>
              <p className="color-text">Dub Mokko</p>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <img src={mokeyAsfalt} width={70} height={70} alt="s" 
                style={{borderRadius:'8px'}}/>
              <p className="color-text">Mokry asfalt</p>
            </div>
          </div>

          <strong className="color-title">oyna rangini tanlang</strong>
          <div className="d-flex justify-content-between gap-3">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <img src="" width={70} height={70} alt="s" style={{borderRadius:'8px'}}/>
              <p className="color-text">Oq shafof</p>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <img src="" width={70} height={70} alt="s" style={{borderRadius:'8px'}}/>
              <p className="color-text">Oq matviy</p>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <img src="" width={70} height={70} alt="s" style={{borderRadius:'8px'}} />
              <p className="color-text">Yod shafof</p>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <img src="" width={70} height={70} alt="s" style={{borderRadius:'8px'}}/>
              <p className="color-text">Yod matvy</p>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-end mt-3">
          <Link
            to={"/category"}
            className="next-page d-flex justify-content-center align-items-center fs-2 text-white text-end"
          >
            <i class="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Color;
