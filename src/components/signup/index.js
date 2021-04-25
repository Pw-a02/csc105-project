import React from "react";
import "./signup.css";
import { Link } from "react-router-dom";

const signup = () => {
  return (
    <div className="signup-container">
      <div className="signup-form">
        <h1>Sign Up</h1>
        <p>Please fill in this form to create an account</p>
        <div className="line"></div>
        <div className="formname">
          <div className="first">
            <input
              type="text"
              placeholder="First Name"
              name="first_N"
              required
            />
          </div>
          <div className="last">
            <input type="text" placeholder="Last Name" name="last_N" required />
          </div>
        </div>
        <div className="email">
          <input type="text" placeholder="Enter Email" name="email" required />
        </div>
        <div className="pass">
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />
        </div>
        <div className="confirm pass">
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirm_pass"
            required
          />
        </div>
        <div className="signup-btn">
          <Link to="#">
            <button>Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default signup;
