import React, { useState, useEffect } from "react";
import DetailContent from "./detail";
import detail1 from "../../images/detail1.1.jpg";
import detail2 from "../../images/detail1.2.jpg";
import detail3 from "../../images/detail1.3.jpg";
import { useLocation, useParams } from "react-router-dom";
import detail4 from "../../images/styledhotel1.jpg";
import axios from "axios";

const Details = (props) => {
  const { placeId } = props;
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("id", placeId);
    axios
      .get(`http://localhost:8080/auth/Placepage/${placeId}`)
      .then((response) => {
        console.log("response", response.data);
        setData(response.data.place);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="Detail-container">
      <div className="Detail-container1">
        <DetailContent
          name={data.Name}
          img={detail1}
          img1={detail2}
          img2={detail3}
          price={data.price}
          location={data.location}
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
