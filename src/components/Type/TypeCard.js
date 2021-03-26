import React from "react";
import {
  TypeBox,
  TypeButton,
  TypeH2,
  TypeImage,
  TypeText,
} from "./TypeElements";

const TypeCard = ({ img, price, book }) => {
  return (
    <TypeBox>
      <TypeImage src={img} />
      <TypeText>
        <TypeH2>${price}</TypeH2>
        <TypeButton onClick={book}>Booking</TypeButton>
      </TypeText>
    </TypeBox>
  );
};

export default TypeCard;
