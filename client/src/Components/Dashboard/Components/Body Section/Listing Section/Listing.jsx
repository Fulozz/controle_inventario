import React from "react";
import "./listing.css";

// imported icons
import { BsArrowRightShort } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
//imported image
import computer from "../../../Assets/computer.png";

const Listing = () => {
  return (
    <div className="listingSection">
      <div className="heading flex">
        <h1>Ultimas inclusões - Limitar em 6 para telas menores</h1>
        <button className="btn flex">
          Ver todos <BsArrowRightShort className="icon" />
        </button>
      </div>

      <div className="secContainer flex">
        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={computer} alt="Image Name" />
          <Link to="/:patrimonio">
            <h3>0165</h3>
          </Link>
        </div>

        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={computer} alt="Image Name" />
          <Link to="/:patrimonio">
            <h3>0166</h3>
          </Link>
        </div>

        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={computer} alt="Image Name" />
          <Link to="/:patrimonio">
            <h3>0167</h3>
          </Link>
        </div>
        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={computer} alt="Image Name" />
          <Link to="/:patrimonio">
            <h3>0168</h3>
          </Link>
        </div>

        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={computer} alt="Image Name" />
          <Link to="/:patrimonio">
            <h3>0169</h3>
          </Link>
        </div>

        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={computer} alt="Image Name" />
          <Link to="/:patrimonio">
            <h3>0170</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Listing;
