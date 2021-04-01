import React from "react";
import Type1 from "../../images/typeh1.jpg";
import Type2 from "../../images/typeh2.jpg";
import Type3 from "../../images/typeh4.jpg";
import Type4 from "../../images/typehos1.jpg";
import Type5 from "../../images/typehos2.jpg";
import Type6 from "../../images/typehos3.jpg";
import Type7 from "../../images/typere1.jpg";
import Type8 from "../../images/typere2.jpg";
import Type9 from "../../images/typere3.jpg";
import TypeCard from "./TypeCard";
import {
  TypeContainer,
  TypeContainer2,
  TypeContainer3,
  TypeH1,
  TypeWrapper,
  TypeH1a,
  TypeH1b,
  TypeBox,
  TypeImage,
  TypeText,
  TypeH2,
  TypeButton,
} from "./TypeElements";

const Type = () => {
  return (
    <>
      <TypeContainer id="type">
        <TypeH1>Hotel</TypeH1>
        <TypeWrapper>
          <TypeCard img={Type1} price={999} book={() => {}} />
          <TypeCard img={Type2} price={999} book={() => {}} />
          <TypeCard img={Type3} price={999} book={() => {}} />
        </TypeWrapper>
      </TypeContainer>
      <TypeContainer2 id="type">
        <TypeH1a>Hostel</TypeH1a>
        <TypeWrapper>
          <TypeCard img={Type4} price={999} book={() => {}} />
          <TypeCard img={Type5} price={999} book={() => {}} />
          <TypeCard img={Type6} price={999} book={() => {}} />
        </TypeWrapper>
      </TypeContainer2>
      <TypeContainer3 id="type">
        <TypeH1b>Resort</TypeH1b>
        <TypeWrapper>
          <TypeCard img={Type7} price={999} book={() => {}} />
          <TypeCard img={Type8} price={999} book={() => {}} />
          <TypeCard img={Type9} price={999} book={() => {}} />
        </TypeWrapper>
      </TypeContainer3>
    </>
  );
};

export default Type;
