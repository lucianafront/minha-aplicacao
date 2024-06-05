import { Carousel } from 'react-responsive-carousel';
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // 
import './DemoCarousel.css';

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="assets/img1.jpg" alt='Praia calma com barcos' />
                    <p className="legend">Praia calma com barcos</p>
                </div>
                <div>
                    <img src="assets/img2.jpg" alt='Pequenas ilhas no mar azul'/>
                    <p className="legend">Pequenas ilhas no mar azul</p>
                </div>
                <div>
                    <img src="assets/img3.jpg" alt='Pinguins caminhando' />
                    <p className="legend">Pinguins caminhando</p>
                </div>
                <div>
                    <img src="assets/img4.jpg" alt='Um peuqueno roedor em um close' />
                    <p className="legend">Um peuqueno roedor em um close</p>
                </div>
            </Carousel>
        );
    }
};

export default DemoCarousel;