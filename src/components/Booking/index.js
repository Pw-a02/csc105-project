import React from "react";
import Book1 from "../../images/book1.jpg";
import {
  BookingContainer,
  BookingLeftSide,
  BookingLeft1,
  BookingH2,
  BookingImage,
  BookingLeft2,
  BookingMapH2,
  BookingMap,
  BookingRightSide,
  BookingRight1,
  BookingBox1,
  BookingBox2,
  BookingButton,
  BookingRight2,
  BookingNearH2,
  BookingNear,
} from "./BookingElements";

const Booking = () => {
  return (
    <>
      <BookingContainer id="booking">
        <BookingLeftSide>
          <BookingLeft1>
            <BookingH2>Hotel Name</BookingH2>
            <BookingImage src={Book1} />
          </BookingLeft1>
          <BookingLeft2>
            <BookingBox1 />
            <BookingBox2 />
            <BookingButton>Book</BookingButton>
          </BookingLeft2>
        </BookingLeftSide>
        <BookingRightSide>
          <BookingRight1>
            <BookingMapH2>How to get here.</BookingMapH2>
            <BookingMap />
          </BookingRight1>
          <BookingRight2>
            <BookingNearH2>Nearby</BookingNearH2>
            <BookingNear />
          </BookingRight2>
        </BookingRightSide>
      </BookingContainer>
    </>
  );
};

export default Booking;
