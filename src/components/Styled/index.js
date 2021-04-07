import React from "react";
import "./styled.css";

const Styled = ({ img1, price }) => {
  return (
    <div className="type-container">
      <div className="type-content">
        <div className="type-pic">
          <img src={img1} />
        </div>
        <div className="type-content">
          <label>Entire Hotel</label>
          <h2>Hug you Hotel</h2>
          <label>3 guests. 1bedroom. 1bed. 1bath</label>
          <label>Wifi. Air conditioning. Car park. Pool. Breakfast </label>
          <h3>
            {price}
            <p>/night</p>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Styled;
