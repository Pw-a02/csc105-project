import React from "react";
import DetailContent from "./detail";
import detail1 from "../../images/detailhostel1.jpg";
import detail2 from "../../images/detailhostel2.jpg";
import detail3 from "../../images/detailhostel3.jpg";
import detail4 from "../../images/styledhotel1.jpg";
import { useParams } from "react-router";

const Details = () => {
  return (
    <div className="Detail-container">
      <div className="Detail-container1">
        <DetailContent
          name="Loft hostel"
          img={detail1}
          img1={detail2}
          img2={detail3}
          price={543}
          typeroom="hostel"
          maxguest="Max 1 guests"
          detailroom="Bedroom"
          detail="1 bed"
        />
      </div>
    </div>
  );
};

export default Details;
