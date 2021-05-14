import React, { useState, useEffect } from "react";
import Map from "../Compare/api";
import { Link, useLocation, useParams } from "react-router-dom";
import "./detail.css";
import WifiIcon from "@material-ui/icons/Wifi";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import LocalParkingIcon from "@material-ui/icons/LocalParking";
import PoolIcon from "@material-ui/icons/Pool";
import FreeBreakfastIcon from "@material-ui/icons/FreeBreakfast";
import KingBedIcon from "@material-ui/icons/KingBed";
import SelectDate from "./date";
import SelectGuest from "./guest";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import axios from "../../axios";
import pica from "../../images/detailhostel1.jpg";
import picb from "../../images/detailhostel2.jpg";
import picc from "../../images/detailhostel3.jpg";

const DetailContent = ({ name, location, price }) => {
  console.log("detail", name, location, price);

  const { placeId } = useParams();
  console.log("id", placeId);

  const handleFav = () => {
    axios
      .post("/auth/favourite", {
        placeId: placeId,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleReserve = () => {
    axios
      .post("/auth/reserve", {
        placeId: placeId,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="Detail-content">
      <h2>{name}</h2>
      <div className="pic">
        <div className="pic-left">
          <img src={pica} />
        </div>
        <div className="pic-right">
          <img src={picb} />
          <img src={picc} />
        </div>
      </div>
      {/* <div className="icon">
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
      </div> */}
      <div className="detail-box">
        <div className="box-1">
          {/* <div className="space">
            <h2>Space arrangements</h2>
            <div className="cut">
              <p>{typeroom}</p>
              <p> {maxguest}</p>
            </div>
            <div className="box-space1">
              <h3>{detailroom}</h3>
              <p>{detail}</p>
              <KingBedIcon fontSize="large" />
            </div> */}
        </div>
        <div className="mapp">
          <h2>
            Location: <h3>{location}</h3>
          </h2>
        </div>
      </div>
      <div className="box-2">
        <div className="price">
          <h2>{price}/night</h2>
        </div>

        <div className="date">
          <SelectDate />
          <SelectGuest />
        </div>

        <div className="btn-tools">
          <div className="Detail-btn">
            <Link to="#">
              <button onClick={handleReserve}>Reserve</button>
            </Link>
          </div>
          <div>
            <Tooltip title="save">
              <IconButton type="button" aria-label="delete" onClick={handleFav}>
                <FavoriteBorderIcon />
              </IconButton>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailContent;
