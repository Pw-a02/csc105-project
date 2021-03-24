import styled from 'styled-components';

export const TypeContainer = styled.div `
 height: 650px;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 background: #c6d9dd;
 padding-bottom: 20px;

@media screen and (max-width: 768px){
    height: 1100px;
}

@media screen and (max-width: 480px){
    height: 1300px;
}

`;

export const TypeWrapper = styled.div `
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

export const TypeBox = styled.div `
 background: #ffffff;
 display: flex;
 flex-direction: column;
 justify-content: space-around;
 align-items: center;
 border-radius: 10px;
 width:310px;
 height: 260px;
 padding: 20px 30px;
 margin: 20px;
 box-shadow: 0 1px 3px rgba(0,0,0,0.2);
 transition: all 0.2s ease-in-out;
 transform: scale(1.02);
transition: all 0.2s ease-in-out;
`;

export const TypeText = styled.div `
 display: flex;
 flex-direction: column;
 justify-content:flex-end;
 align-items: center;
 border-radius: 10px;
 width: 150px;
 height: 60px;
 padding: 10px;
 margin-top: 20px;
`

export const TypeImage = styled.img `
 height: 170px;
 width: 270px;
 margin-bottom: 60px;
 border-radius: 6px;
//  object-fit: contain;
`;

export const TypeH1 = styled.h1 `
font-size: 2.5rem;
color: #fff;
margin-bottom: 64px;


@media screen and (max-width: 480px){
    font-size: 2rem;
    // margin-top: 40px;
}
`;

export const TypeH2 = styled.h2 `
 font-size: 14px;
 margin-bottom: 8px;

`;

export const TypeButton = styled.button `
font-size: 1rem;
text-align:center;
width: 80px;
height: 40px;
border: none;
background-color: rgb(253, 253, 139);
border-radius: 8px;
margin-bottom: -90px;
`;

export const TypeContainer2 = styled.div `
 background: #e6e6e6;
 height: 650px;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 padding-bottom: 20px;

@media screen and (max-width: 768px){
    height: 1100px;
}

@media screen and (max-width: 480px){
    height: 1300px;
}
`

export const TypeContainer3 = styled.div `
 background: #c6d9dd;
 height: 650px;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 padding-bottom: 20px;

@media screen and (max-width: 768px){
    height: 1100px;
}

@media screen and (max-width: 480px){
    height: 1300px;
}
`

