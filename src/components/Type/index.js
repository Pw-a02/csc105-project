import React from 'react'
import Type1 from '../../images/typeh1.jpg';
import Type2 from '../../images/typeh2.jpg';
import Type3 from '../../images/typeh4.jpg';
import Type4 from '../../images/typehos1.jpg';
import Type5 from '../../images/typehos2.jpg';
import Type6 from '../../images/typehos3.jpg';
import Type7 from '../../images/typere1.jpg';
import Type8 from '../../images/typere2.jpg';
import Type9 from '../../images/typere3.jpg';
import {TypeContainer, TypeContainer2, TypeContainer3, TypeH1, TypeWrapper, TypeBox, TypeImage, TypeText, TypeH2, TypeButton} from './TypeElements';


const Type = () => {
    return (
        <>
        <TypeContainer id="type">
            <TypeH1>Hotel</TypeH1>
            <TypeWrapper>
                <TypeBox>
                    <TypeImage src={Type1} />
                    <TypeText>
                        <TypeH2>Price</TypeH2>
                        <TypeButton>Booking</TypeButton>
                    </TypeText>
                </TypeBox>
                <TypeBox>
                    <TypeImage src={Type2} />
                    <TypeText>
                        <TypeH2>Price</TypeH2>
                        <TypeButton>Booking</TypeButton>
                    </TypeText>
                </TypeBox>
                <TypeBox>
                    <TypeImage src={Type3} />
                    <TypeText>
                        <TypeH2>Price</TypeH2>
                        <TypeButton>Booking</TypeButton>
                    </TypeText>
                </TypeBox>
            </TypeWrapper>
        </TypeContainer>
        <TypeContainer2 id="type">
            <TypeH1>Hostel</TypeH1>
            <TypeWrapper>
                <TypeBox>
                    <TypeImage src={Type4} />
                    <TypeText>
                        <TypeH2>Price</TypeH2>
                        <TypeButton>Booking</TypeButton>
                    </TypeText>
                </TypeBox>
                <TypeBox>
                    <TypeImage src={Type5} />
                    <TypeText>
                        <TypeH2>Price</TypeH2>
                        <TypeButton>Booking</TypeButton>
                    </TypeText>
                </TypeBox>
                <TypeBox>
                    <TypeImage src={Type6} />
                    <TypeText>
                        <TypeH2>Price</TypeH2>
                        <TypeButton>Booking</TypeButton>
                    </TypeText>
                </TypeBox>
            </TypeWrapper>
        </TypeContainer2>
        <TypeContainer3 id="type">
            <TypeH1>Resort</TypeH1>
            <TypeWrapper>
                <TypeBox>
                    <TypeImage src={Type7} />
                    <TypeText>
                        <TypeH2>Price</TypeH2>
                        <TypeButton>Booking</TypeButton>
                    </TypeText>
                </TypeBox>
                <TypeBox>
                    <TypeImage src={Type8} />
                    <TypeText>
                        <TypeH2>Price</TypeH2>
                        <TypeButton>Booking</TypeButton>
                    </TypeText>
                </TypeBox>
                <TypeBox>
                    <TypeImage src={Type9} />
                    <TypeText>
                        <TypeH2>Price</TypeH2>
                        <TypeButton>Booking</TypeButton>
                    </TypeText>
                </TypeBox>
            </TypeWrapper>
        </TypeContainer3>
        </>
    )
}

export default Type
