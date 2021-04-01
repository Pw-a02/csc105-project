import React from "react";
import Map from "../Compare/api";
import { Link } from "react-router-dom";
import "./detail.css";
import WifiIcon from "@material-ui/icons/Wifi";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import LocalParkingIcon from "@material-ui/icons/LocalParking";
import PoolIcon from "@material-ui/icons/Pool";
import FreeBreakfastIcon from "@material-ui/icons/FreeBreakfast";
import KingBedIcon from "@material-ui/icons/KingBed";
import SelectDate from "./date";
import SelectGuest from "./guest";
import Tools from "./tools";

const DetailContent = ({
  name,
  img,
  img1,
  img2,
  price,
  typeroom,
  maxguest,
  detailroom,
  detail,
}) => {
  return (
    <div className="Detail-content">
      <h2>{name}</h2>
      <div className="pic">
        <div className="pic-left">
          <img src={img} />
        </div>
        <div className="pic-right">
          <img src={img1} />
          <img src={img2} />
        </div>
      </div>
      <div className="icon">
        <div className="icon1">
          <WifiIcon />
          <p>Free Wi-Fi</p>
        </div>
        <div className="icon2">
          <AcUnitIcon />
          <p>Air conditioning</p>
        </div>
        <div className="icon3">
          <LocalParkingIcon />
          <p>Car park</p>
        </div>
        <div className="icon4">
          <PoolIcon />
          <p>Pool</p>
        </div>
        <div className="icon5">
          <FreeBreakfastIcon />
          <p>Free Breakfast</p>
        </div>
      </div>
      <div className="detail-box">
        <div className="box-1">
          <div className="space">
            <h2>Space arrangements</h2>
            <div className="cut">
              <p>{typeroom}</p>
              <p> {maxguest}</p>
            </div>
            <div className="box-space1">
              <h3>{detailroom}</h3>
              <p>{detail}</p>
              <KingBedIcon fontSize="large" />
            </div>
          </div>
          <div className="mapp">
            <h3>Location</h3>
            <Map />
          </div>
        </div>
        <div className="box-2">
          <h3>{price}/night</h3>
          <SelectDate />
          <SelectGuest />
          <div className="btn-tools">
            <div className="Detail-btn">
              <Link to="#">
                <button>Reserve</button>
              </Link>
            </div>
            <Tools />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailContent;
