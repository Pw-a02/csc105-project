import React from "react";
import com1 from "../../images/comparehotel.jpg";
import com2 from "../../images/comparehotel1.jpg";
import { Link } from "react-router-dom";
import "./compare.css";
import Map from "./api";
import CompareContent from "./compare";

const Compare = () => {
  return (
    <div className="Compare-container">
      <div className="Compare-container1">
        <CompareContent
          name="Novotel"
          img={com1}
          price={999}
          detail="available"
          option="include breakfast"
        />
      </div>
      <div className="Compare-container2">
        <CompareContent
          name="Novotel"
          img={com2}
          price={999}
          detail="available"
          option="include breakfast"
        />
      </div>
    </div>
  );
};

export default Compare;
