import styled from "styled-components";

export const TypeContainer = styled.div`
  height: 550px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding-bottom: 20px;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const TypeWrapper = styled.div`
  max-width: 1000px;
  margin: -10px 10px 0 0;
  display: grid;
  justify-content: space-around;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 80px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const TypeBox = styled.div`
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  width: 310px;
  height: 280px;
  padding: 20px 30px;
  margin: 20px;
  box-shadow: 0 1px 3px rgb(187, 187, 187);
  transition: all 0.2s ease-in-out;
  transform: scale(1.02);
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 768px) {
    margin-top: 10px;
  }
`;

export const TypeText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  border-radius: 10px;
  width: 150px;
  height: 60px;
  padding: 10px;
  margin-bottom: 80px;
`;

export const TypeImage = styled.img`
  height: 170px;
  width: 270px;
  position: relative;
  margin-top: 2px;
  border-radius: 6px;
  //  object-fit: contain;
`;

export const TypeH1 = styled.h1`
  font-size: 2.5rem;
  color: #303f9f;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
    // margin-top: 40px;
  }
`;

export const TypeH1a = styled.h1`
  font-size: 2.5rem;
  color: #303f9f;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
    // margin-top: 40px;
  }
`;

export const TypeH1b = styled.h1`
  font-size: 2.5rem;
  color: #303f9f;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
    // margin-top: 40px;
  }
`;

export const TypeH2 = styled.h2`
  font-size: 14px;
  margin-bottom: 8px;
`;

export const TypeButton = styled.button`
  font-size: 1rem;
  text-align: center;
  width: 80px;
  height: 40px;
  border: none;
  background-color: white;
  box-shadow: 0 1px 3px rgb(187, 187, 187);
  border-radius: 8px;
  margin-bottom: -90px;

  &:hover {
    background-color: #ff9a10;
    color: white;
  }
`;

export const TypeContainer2 = styled.div`
  background: #fff;
  height: 650px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const TypeContainer3 = styled.div`
  background: #fff;
  height: 650px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;
