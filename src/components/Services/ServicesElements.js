import styled from 'styled-components';

export const ServicesContainer = styled.div `
 height: 600px;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 background: #c6d9dd;
 padding-bottom: 20px;

 @media screen and (max-width: 1024px){
    // margin-top: 80px;
    height: 800px;
}

@media screen and (max-width: 768px){
    height: 1100px;
}

@media screen and (max-width: 480px){
    height: 1300px;
}

`;

export const ServicesWrapper = styled.div `
 max-width: 1000px;
 margin: -10px 10px 0 0;
 display: grid;
 justify-content: space-around;
 grid-template-columns: 1fr 1fr 1fr;
 align-items: center;
 grid-gap: 16px;
 padding: 0 80px;


 @media screen and (max-width: 1000px){
     grid-template-columns: 1fr 1fr;
 }

 @media screen and (max-width: 768px){
     grid-template-columns: 1fr;
     padding: 0 20px;
 }
`;

export const ServicesCard = styled.div `
 background: #ffffff;
 display: flex;
 flex-direction: column;
 justify-content: space-around;
 align-items: center;
 border-radius: 10px;
 width:300px;
 height: 250px;
 padding: 20px 30px;
 margin: 20px;
 box-shadow: 0 1px 3px rgba(0,0,0,0.2);
 transition: all 0.2s ease-in-out;
 transform: scale(1.02);
transition: all 0.2s ease-in-out;
     

`;

export const ServicesImage = styled.img `
 height: 170px;
 width: 270px;
 margin-bottom: 20px;
//  object-fit: contain;
 border-radius: 6px;
`;

export const ServicesH1 = styled.h1 `
font-size: 2.5rem;
color: #fff;
margin-bottom: 64px;


@media screen and (max-width: 480px){
    font-size: 2rem;
    // margin-top: 40px;
}
`;

export const ServicesH2 = styled.h2 `
 font-size: 1rem;
 margin-bottom:10px;
 margin-top: -100px;
`;

export const ServicesButton = styled.button `
font-size: 1rem;
text-align:center;
width: 80px;
height: 40px;
border: none;
background-color: rgb(253, 253, 139);
border-radius: 8px;
margin-bottom: -100px;
`;

