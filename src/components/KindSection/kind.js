import React from "react";
import "./kind.css";
import { Link } from "react-router-dom";

const kind = ({ pic, name, price, detail, provide, type }) => {
  return (
    <div className="type-content">
      <div className="type-pic">
        <Link to="/detail">
          <img src={pic} />
        </Link>
      </div>
      <div className="type-text">
        <p>{type}</p>
        <h2>{name}</h2>
        <p>{detail}</p>
        <p>{provide} </p>
        <h3>{price}/night</h3>
      </div>
    </div>
  );
};

export default kind;
