import React from 'react';
import './Hero.css';


function Hero() {
    return (
        <div>
            <div className="hero-container">
                <img src="h3.jpg" alt=""/>
                <div className="hero-content">
                   <h1>Let's reserved with us.</h1>
                    <div className='hero-btns'>
                        <button className="btns" buttonDtyle='byns-outline'
                        buttonSize='btn--large'>Booking</button>
                    </div>
                </div>
            </div>
            {/* <div className="rec">
                <h2>Recommend</h2>
                <div className="line"></div>
             </div> */}
        </div>
    );
}

export default Hero
