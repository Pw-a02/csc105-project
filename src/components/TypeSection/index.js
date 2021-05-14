import React from "react";
import Typeitem from "./typecard";
import pic1 from "../../images/stylehotel.jpg";
import pic2 from "../../images/stylehostel.jpg";
import pic3 from "../../images/styleapartment.jpg";
import pic4 from "../../images/styleresort.jpg";

const index = () => {
  return (
    <div className="style">
      <h2>Select your style</h2>
      <div className="style-box">
        <Typeitem pic={pic1} type="็Hotel" />
        <Typeitem pic={pic2} type="Hostel" />
        <Typeitem pic={pic3} type="Apartment" />
        <Typeitem pic={pic4} type="Resort" />
      </div>
    </div>
  );
};

export default index;
