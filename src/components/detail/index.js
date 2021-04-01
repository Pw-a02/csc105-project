import React from "react";
import DetailContent from "./detail";
import detail1 from "../../images/detail1.1.jpg";
import detail2 from "../../images/detail1.2.jpg";
import detail3 from "../../images/detail1.3.jpg";

const Details = () => {
  return (
    <div className="Detail-container">
      <div className="Detail-container1">
        <DetailContent
          name="Novotel"
          img={detail1}
          img1={detail2}
          img2={detail3}
          price={999}
          typeroom="Hotel"
          maxguest="Max 4 guests"
          detailroom="Bedroom"
          detail="1 king bed"
        />
      </div>
    </div>
  );
};

export default Details;
