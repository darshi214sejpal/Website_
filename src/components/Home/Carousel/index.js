import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from "assets/img/swipe/img1_1.png";
import img2 from "assets/img/swipe/img2.jpg";
import img3 from "assets/img/swipe/img3.jpg";
import img4 from "assets/img/swipe/img4.jpeg";
import { Col, Row } from 'react-bootstrap';
import "./Carousel.css"
const CarouselMain = () => {
  return (
    <>
      <div className='container-fluid carousel-container'>
      <Carousel showArrows={true} showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay={true}>
        <div data-interval={8000} className='carousel'>
        <img src={img1} />
        </div>
        <div data-interval={3000} className='carousel'>
        <img src={img2} />
        </div>
        <div data-interval={3000} className='carousel'>
            <img src={img3} />
        </div>
        <div data-interval={3000} className='carousel'>
        <img src={img4} className='carousel-img4'/>
        </div>
      </Carousel>
      </div>
    </>
  )
}

export default CarouselMain