import React from "react";
import { Link } from "react-router-dom";
import "./ServicesSection.css";
import pic1 from "../../images/re1.jpg";
import pic2 from "../../images/re2.jpg";
import pic3 from "../../images/re3.jpg";

const ServiceSection = () => {
  return (
    <div class="ServicesContainer" id="services">
      <h1>Recommend</h1>
      <div class="ServicesWrapper">
        <div class="ServicesCard">
          <h2>Hotel</h2>
          <img src={pic1} />
          <div className="servicebtn">
            <Link to="/booking">
              <button>Booking</button>
            </Link>
          </div>
        </div>
        <div class="ServicesCard">
          <h2>Hostel</h2>
          <img src={pic2} />
          <div className="servicebtn">
            <Link to="/booking">
              <button>Booking</button>
            </Link>
          </div>
        </div>
        <div class="ServicesCard">
          <h2>Resort</h2>
          <img src={pic3} />
          <div className="servicebtn">
            <Link to="/booking">
              <button>Booking</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
