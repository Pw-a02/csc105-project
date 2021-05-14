import React from "react";
import DetailContent from "./detail";
import detail1 from "../../images/detailresort1.jpg";
import detail2 from "../../images/detailresort2.jpg";
import detail3 from "../../images/detailresort3.jpg";
import detail4 from "../../images/styledhotel1.jpg";
import { useParams } from "react-router";

const Details = () => {
  return (
    <div className="Detail-container">
      <div className="Detail-container1">
        <DetailContent
          name="Bloom Resort"
          img={detail1}
          img1={detail2}
          img2={detail3}
          price={4999}
          typeroom="resort"
          maxguest="Max 4 guests"
          detailroom="2 Bedroom"
          detail="king bed"
        />
      </div>
    </div>
  );
};

export default Details;
