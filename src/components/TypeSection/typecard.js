import React from "react";
import "./type.css";

import { Link } from "react-router-dom";

const typecard = ({ pic, type }) => {
  return (
    <div className="style2">
      <Link to="/hostel">
        <img src={pic} />
      </Link>
      <p>{type}</p>
    </div>
  );
};

export default typecard;
