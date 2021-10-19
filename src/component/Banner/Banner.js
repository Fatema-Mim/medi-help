import React from 'react';
import './Banner.css';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../images/banner/banner1.png';
import banner2 from '../../images/banner/banner2.png'; 
import banner3 from '../../images/banner/banner3.png' ;


const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <p className="banner-text">We are <span className="banner-word">here</span> for you</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <p className="banner-text">Best <span className="banner-word">treatment</span> for you</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <p className="banner-text">Best <span className="banner-word">medical services</span> for you</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            
        </>
    );
};

export default Banner;