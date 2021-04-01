import React from "react";
import {
  TypeBox,
  TypeButton,
  TypeH2,
  TypeImage,
  TypeText,
} from "./TypeElements";
import { Link } from "react-router-dom";

const TypeCard = ({ img, price, book }) => {
  return (
    <TypeBox>
      <TypeImage src={img} />
      <TypeText>
        <TypeH2>{price}/night</TypeH2>
        <Link to="/detail">
          <TypeButton onClick={book}>see more detail</TypeButton>
        </Link>
      </TypeText>
    </TypeBox>
  );
};

export default TypeCard;
