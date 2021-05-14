import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useParams } from "react-router";

const Fav = () => {
  // const useStyles = makeStyles((theme) => ({
  //   fab: {
  //     margin: theme.spacing(2),
  //   },
  //   absolute: {
  //     position: "absolute",
  //     bottom: theme.spacing(2),
  //     right: theme.spacing(3),
  //   },
  // }));

  // export default function SimpleTooltips() {
  //   const classes = useStyles();

  return (
    <div>
      <Tooltip title="save">
        <IconButton type="button" aria-label="delete">
          <FavoriteBorderIcon />
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default Fav;
