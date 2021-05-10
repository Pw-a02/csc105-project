import React from "react";

import "./Hero.css";
import hos1 from "../../images/hostel1.jpg";

function Hero() {
  return (
    <>
      <div class="hero">
        <div class="m2">
          <img src={hos1} />
        </div>
        <div class="contain-text">
          <div>
            <h1>Let's find some place</h1>
          </div>
          <div>
            <h1 class="s">to stay with us!</h1>
          </div>
        </div>
        {/* <div className="hero-btns">
          <Link to="/booking">
            <button
              className="btns"
              buttonDtyle="byns-outline"
              buttonSize="btn--large"
            >
              Booking
            </button>
          </Link>
        </div> */}
      </div>
    </>
  );
}

export default Hero;
