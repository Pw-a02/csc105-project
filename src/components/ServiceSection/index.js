import React from "react";
import { Link } from "react-router-dom";
import "./ServicesSection.css";
import pic1 from "../../images/stylehotel.jpg";
import pic2 from "../../images/stylehostel.jpg";
import pic3 from "../../images/styleapartment.jpg";
import pic4 from "../../images/styleresort.jpg";
import pic5 from "../../images/re1.jpg";
import pic6 from "../../images/re2.jpg";
import pic7 from "../../images/re3.jpg";

const ServiceSection = () => {
  return (
    <div class="ServicesContainer" id="services">
      <div className="service">
        <h1>Recommend</h1>
        <div class="ServicesWrapper">
          <div class="ServicesCard">
            <h2></h2>
            <img src={pic5} />
            <div className="servicebtn">
              <Link to="/detail">
                <button>see more detail</button>
              </Link>
            </div>
          </div>
          <div class="ServicesCard">
            <h2></h2>
            <img src={pic6} />
            <div className="servicebtn">
              <Link to="/detail">
                <button>see more detail</button>
              </Link>
            </div>
          </div>
          <div class="ServicesCard">
            <h2></h2>
            <img src={pic7} />
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
            <Link to="/kind">
              <img src={pic1} />
            </Link>
            <p>Hotel</p>
          </div>
          <div className="style2">
            <Link to="/hostel">
              <img src={pic2} />
            </Link>
            <p>Hostel</p>
          </div>
          <div className="style3">
            <Link to="/apartment">
              <img src={pic3} />
            </Link>
            <p>Apartment</p>
          </div>
          <div className="style4">
            <Link to="/resort">
              <img src={pic4} />
            </Link>
            <p>Resort</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
