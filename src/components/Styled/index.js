import React from "react";
import "./styled.css";
import { Link } from "react-router-dom";

const Styled = ({ img1, price, name }) => {
  return (
    <div className="type-content">
      <div className="type-pic">
        <Link to="/detail">
          <img src={img1} />
        </Link>
      </div>
      <div className="type-text">
        <p>Entire Hotel</p>
        <h2>{name}</h2>
        <p>3 guests. 1bedroom. 1bed. 1bath</p>
        <p>Wifi. Air conditioning. Car park. Pool. Breakfast </p>
        <h3>
          {price}
          <p>/night</p>
        </h3>
      </div>
    </div>
  );
};

export default Styled;
