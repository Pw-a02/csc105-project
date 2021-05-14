import React from "react";

import { Link } from "react-router-dom";
import "./ServicesSection.css";
import pic5 from "../../images/re1.jpg";
import { Place } from "@material-ui/icons";

const Servicecard = ({ data }) => {
  console.log("servicedata", data);
  return (
    <div class="ServicesCard">
      <h2>{data.Name}</h2>
      <img src={pic5} />
      <div className="servicebtn">
        <Link to={`/detail/${data.Place_ID}`}>
          <button>see more detail</button>
        </Link>
      </div>
    </div>
  );
};

export default Servicecard;
