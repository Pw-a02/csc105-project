import React from "react";
import StyledContent from "./index";
import styled1 from "../../images/styledhotel1.jpg";

const styledsection = () => {
  return (
    <div className="styled-container">
      <StyledContent img1={styled1} name="Hug you hotel" price={999} />
    </div>
  );
};

export default styledsection;
