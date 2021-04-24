import React from "react";
import "./compare.css";
import Map from "./api";
import { Link } from "react-router-dom";

const Compare = ({ name, img, price, detail, option }) => {
  return (
    <div className="Compare-content">
      <h2>{name}</h2>
      <img src={img} />
      <div className="Compare-form">
        <label>Price: {price}/night</label>
        <label>detail: {detail}</label>
        <label>option: {option}</label>
      </div>
      <div className="mapp">
        <Map />
      </div>
      <div className="compare-btn">
        <Link to="#">
          <button>Reserve</button>
        </Link>
      </div>
    </div>
  );
};

export default Compare;
