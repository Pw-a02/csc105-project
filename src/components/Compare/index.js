import React from "react";
import com1 from "../../images/comparehotel.jpg";
import com2 from "../../images/comparehotel1.jpg";
import { Link } from "react-router-dom";
import "./compare.css";
import Map from "./api";

const Compare = () => {
  return (
    <div className="Compare-container">
      <div className="Compare-container1">
        <div className="Compare-content">
          <h2>Hotel name</h2>
          <img src={com1} />
          <div className="Compare-form">
            <label for="price">Price: </label>
            <div></div>
            <label for="detail">Detail: </label>
            <div></div>
            <label for="option">Option: </label>
          </div>
          <div className="mapp">
            <Map />
          </div>
          <div className="compare-btn">
            <Link to="/booking">
              <button>Booking</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="Compare-container2">
        <div className="Compare-content">
          <h2>Hotel name</h2>
          <img src={com2} />
          <div className="Compare-form">
            <label for="price">Price: </label>
            <div></div>
            <label for="detail">Detail: </label>
            <div></div>
            <label for="option">Option: </label>
          </div>
          <div className="mapp">
            <Map />
          </div>
          <div className="compare-btn">
            <Link to="/booking">
              <button>Booking</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compare;
