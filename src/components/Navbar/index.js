import React, { useState } from "react";
import "./Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";
import SearchIcon from "@material-ui/icons/Search";

function Navbar() {
  const [showLink, setShowLink] = useState(false);
  return (
    <div className="Navbar">
      <div className="leftside">
        <div className="link" id={showLink ? "hidden" : ""}>
          <a href="/">Home</a>
          {/* <a href="/type">Type</a>
          <a href="/booking">Booking</a> */}
          <a href="/compare">Compare</a>
          <div class="dropdown">
            <a class="dropbtn">Account</a>
            <div class="dropdown-content">
              <a href="/account">Signin</a>
              <a href="/signup">Sign up</a>
              <a href="#">account</a>
            </div>
          </div>
        </div>
        <button onClick={() => setShowLink(!showLink)}>
          <ReorderIcon />
        </button>
      </div>
      <div className="rightside">
        <input type="text" placeholder="location..." />
        <button>
          <SearchIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
