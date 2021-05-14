import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ServicesSection.css";
import pic1 from "../../images/stylehotel.jpg";
import pic2 from "../../images/stylehostel.jpg";
import pic3 from "../../images/styleapartment.jpg";
import pic4 from "../../images/styleresort.jpg";
import pic5 from "../../images/re1.jpg";
import pic6 from "../../images/re2.jpg";
import pic7 from "../../images/re3.jpg";
import axios from "axios";
import Serviceitem from "./Servicecard";

const ServiceSection = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/auth/places`)
      .then((response) => {
        console.log(response.data);
        setData(response.data.places);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div class="ServicesContainer" id="services">
      <div className="service">
        <h1>Recommend</h1>
        <div class="ServicesWrapper">
          {data.map((data) => {
            return <Serviceitem data={data} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
