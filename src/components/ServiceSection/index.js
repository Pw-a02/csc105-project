import React from "react";
import { Link } from "react-router-dom";
import "./ServicesSection.css";
import pic1 from "../../images/stylehotel.jpg";
import pic2 from "../../images/stylehostel.jpg";
import pic3 from "../../images/styleapartment.jpg";
import pic4 from "../../images/styleresort.jpg";

const ServiceSection = () => {
  return (
    <div class="ServicesContainer" id="services">
      <div className="service">
        <h1>Recommend</h1>
        <div class="ServicesWrapper">
          <div class="ServicesCard">
            <h2></h2>
            <img src={pic1} />
            <div className="servicebtn">
              <Link to="/detail">
                <button>see more detail</button>
              </Link>
            </div>
          </div>
          <div class="ServicesCard">
            <h2></h2>
            <img src={pic2} />
            <div className="servicebtn">
              <Link to="/detail">
                <button>see more detail</button>
              </Link>
            </div>
          </div>
          <div class="ServicesCard">
            <h2></h2>
            <img src={pic3} />
            <div className="servicebtn">
              <Link to="/detail">
                <button>see more detail</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="style">
        <h2>Select your style</h2>
        <div className="style-box">
          <div className="style1">
            <a href="#">
              <img src={pic1} />
            </a>
            <p>Hotel</p>
          </div>
          <div className="style2">
            <a href="#">
              <img src={pic2} />
            </a>
            <p>Hostel</p>
          </div>
          <div className="style3">
            <a href="#">
              <img src={pic3} />
            </a>
            <p>Apartment</p>
          </div>
          <div className="style4">
            <a href="#">
              <img src={pic4} />
            </a>
            <p>Resort</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
