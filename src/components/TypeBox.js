import React from "react";
import {
  TypeBox,
  TypeButton,
  TypeH2,
  TypeImage,
  TypeText,
} from "./Type/TypeElements";

const TypeBoxs = () => {
  return (
    <TypeBox>
      <TypeImage src={Type3} />
      <TypeText>
        <TypeH2>Price</TypeH2>
        <TypeButton>Booking</TypeButton>
      </TypeText>
    </TypeBox>
  );
};

export default TypeBoxs;
