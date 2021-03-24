import React from 'react'
import Book1 from '../../images/book1.jpg';
import {CompareContainer, CompareContainer1, CompareContainer2, CompareLeftSide, CompareLeft1, CompareH2, CompareImage, CompareLeft2, 
    CompareMapH2, CompareMap, CompareRightSide, CompareRight1, CompareBox1, CompareBox2, CompareButton, 
    CompareRight2, CompareNearH2, CompareNear} from './CompareElements';

const Compare = () => {
    return (
        <CompareContainer>
          <CompareContainer1 id="booking">
            <CompareLeftSide>
                <CompareLeft1>
                    <CompareH2>Hotel Name</CompareH2>
                    <CompareImage src={Book1} />
                </CompareLeft1>
                <CompareLeft2>
                    <CompareBox1 />
                    <CompareBox2 />
                    <CompareButton>Book</CompareButton>
                </CompareLeft2>
            </CompareLeftSide>
            <CompareRightSide>
                <CompareRight1>
                    <CompareMapH2>How to get here.</CompareMapH2>
                    <CompareMap />
                </CompareRight1>
                <CompareRight2>
                    <CompareNearH2>Nearby</CompareNearH2>
                    <CompareNear />
                </CompareRight2>
            </CompareRightSide>
        </CompareContainer1>
        <CompareContainer2 id="booking">
            <CompareLeftSide>
                <CompareLeft1>
                    <CompareH2>Hotel Name</CompareH2>
                    <CompareImage src={Book1} />
                </CompareLeft1>
                <CompareLeft2>
                    <CompareBox1 />
                    <CompareBox2 />
                    <CompareButton>Book</CompareButton>
                </CompareLeft2>
            </CompareLeftSide>
            <CompareRightSide>
                <CompareRight1>
                    <CompareMapH2>How to get here.</CompareMapH2>
                    <CompareMap />
                </CompareRight1>
                <CompareRight2>
                    <CompareNearH2>Nearby</CompareNearH2>
                    <CompareNear />
                </CompareRight2>
            </CompareRightSide>
        </CompareContainer2>    
        </CompareContainer>
    )
}

export default Compare
