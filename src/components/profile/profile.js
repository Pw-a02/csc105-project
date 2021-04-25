import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
import "./profile.css";

const profile = ({
  ProfileName,
  savepic1,
  savepic2,
  savepic3,
  savename1,
  savename2,
  savename3,
}) => {
  return (
    <div className="profile-content">
      <div className="profile-pic">
        <Avatar />
      </div>
      <div className="profile-name">
        <h2>{ProfileName}</h2>
      </div>
      <div className="header">
        <h2>Your save place</h2>
      </div>
      <div className="save-item">
        <div className="save1">
          <Link to="/detail">
            <img src={savepic1} />
          </Link>
          <p>{savename1}</p>
        </div>
        <div className="save2">
          <Link to="/detail">
            <img src={savepic2} />
          </Link>
          <p>{savename2}</p>
        </div>
        <div className="save3">
          <Link to="/detail">
            <img src={savepic3} />
          </Link>
          <p>{savename3}</p>
        </div>
      </div>
    </div>
  );
};

export default profile;
