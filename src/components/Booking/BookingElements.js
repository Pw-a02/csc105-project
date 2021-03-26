import styled from "styled-components";

export const BookingContainer = styled.div`
  min-height: calc(100vh - 80px);
  width: 100%;
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const BookingLeftSide = styled.div`
  flex: 1;
  display: flex;
  justify-content: left;
  align-items: center;
  margin-top: 60px;
`;

export const BookingLeft1 = styled.div`
  width: 420px;
  height: 360px;
  //  border: 1px solid black;
  background: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 20px 30px;
  margin: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transform: scale(1.02);
  transition: all 0.2s ease-in-out;
`;

export const BookingLeft2 = styled.div`
  width: 420px;
  height: 360px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 20px 30px;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transform: scale(1.02);
  transition: all 0.2s ease-in-out;
`;

export const BookingH2 = styled.h2`
  font-size: 16px;
  margin-bottom: 280px;
`;

export const BookingImage = styled.img`
  height: 220px;
  width: 320px;
  border-radius: 6px;
`;

export const BookingMapH2 = styled.h2`
  font-size: 16px;
  margin-bottom: 10px;
`;

export const BookingMap = styled.div`
  width: 360px;
  height: 220px;
  //  border: 1px solid black;
  border-radius: 4px;
  background: rgb(253, 253, 139);
`;

export const BookingRightSide = styled.div`
  flex: 1;
  display: flex;
  justify-content: left;
  align-items: center;
  margin-top: 60px;
`;

export const BookingRight1 = styled.div`
  width: 420px;
  height: 360px;
  // border: 1px solid black;
  border-radius: 10px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 20px 30px;
  margin: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transform: scale(1.02);
  transition: all 0.2s ease-in-out;
`;

export const BookingRight2 = styled.div`
  width: 420px;
  height: 360px;
  // border: 1px solid black;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 20px 30px;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transform: scale(1.02);
  transition: all 0.2s ease-in-out;
`;

export const BookingBox1 = styled.div`
  width: 200px;
  height: 30px;
  border: 2px solid black;
  border-radius: 4px;
`;

export const BookingBox2 = styled.div`
  width: 200px;
  height: 30px;
  border: 2px solid black;
  border-radius: 4px;
`;

export const BookingButton = styled.button`
  font-size: 1rem;
  text-align: center;
  width: 80px;
  height: 40px;
  border: none;
  background-color: rgb(253, 253, 139);
  border-radius: 8px;
`;

export const BookingNearH2 = styled.h2`
  font-size: 16px;
  margin-bottom: 10px;
`;

export const BookingNear = styled.div`
  width: 360px;
  height: 220px;
  // border: 1px solid black;
  border-radius: 4px;
  background: rgb(253, 253, 139);
`;
