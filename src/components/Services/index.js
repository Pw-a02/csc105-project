import React from "react";
import Icon1 from "../../images/re1.jpg";
import Icon2 from "../../images/re2.jpg";
import Icon3 from "../../images/re3.jpg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesImage,
  ServicesH2,
  ServicesButton,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Recommend</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesH2>Hotel</ServicesH2>
          <ServicesImage src={Icon1} />
          <ServicesButton>Booking</ServicesButton>
        </ServicesCard>
        <ServicesCard>
          <ServicesH2>Hostel</ServicesH2>
          <ServicesImage src={Icon2} />
          <ServicesButton>Booking</ServicesButton>
        </ServicesCard>
        <ServicesCard>
          <ServicesH2>Resort</ServicesH2>
          <ServicesImage src={Icon3} />
          <ServicesButton>Booking</ServicesButton>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
