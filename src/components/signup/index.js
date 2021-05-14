import React, { useState } from "react";
import "./signup.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const usernameChange = (event) => {
    console.log(event.target.value);
    setUsername(event.target.value);
  };

  const emailChange = (event) => {
    console.log(event.target.value);
    setEmail(event.target.value);
  };

  const passwordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    if (password !== confirmPassword) {
      alert("confirm password must be same as password");
      return;
    }
    axios
      .post("http://localhost:8080/auth/register", {
        username: username,
        email: email,
        password: password,
      })
      .then((response) => {
        if (response.data.isSignup) {
          console.log(response.data);
        } else if (!response.data.isSignup) {
          console.log(response.data);
        } else {
          console.log(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="signup-container">
      <div className="signup-form">
        <h1>Sign Up</h1>
        <p>Please fill in this form to create an account</p>
        <div className="line"></div>
        {/* <div className="formname">
            <div className="first">
              <input
                type="text"
                placeholder="firstname"
                name="first_N"
                required
              />
            </div>
            <div className="first">
              <input
                type="text"
                placeholder="lastname"
                name="first_N"
                required
              />
            </div>
          </div> */}
        <div className="username">
          <input
            type="text"
            placeholder="Enter Username"
            onChange={usernameChange}
            name="username"
            required
          />
        </div>
        <div className="email">
          <input
            type="text"
            placeholder="Enter Email"
            onChange={emailChange}
            name="psw"
            name="email"
            required
          />
        </div>
        <div className="pass">
          <input
            type="password"
            placeholder="Enter Password"
            onChange={passwordChange}
            required
          />
        </div>
        <div className="confirm pass">
          <input
            type="password
            
            "
            value={confirmPassword}
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            name="confirm_pass"
            required
          />
        </div>
        <div className="signup-btn">
          <Link to="#">
            <button type="submit" onClick={handleSubmit}>
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
