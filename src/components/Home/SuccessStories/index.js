import React from 'react'
import { Row } from 'react-bootstrap';
import "./SuccessStories.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { successStoriesData } from './SuccessStoriesData';
const SuccessStories = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  return (
    <>
        <div className='container-success'>
            <Row>   
                <div className='success-box success-arrow-bottom text-nowrap g-4 mb-4'>
                    Success Stories
                </div>
            </Row>
            <Row className='ms-xl-6 me-xl-6 ms-0 md-0'>
              <Slider {...settings}>
              {successStoriesData.map((success) => (
                <div className='slider-design d-flex justify-content-center'>
                <img src={success.image} alt="" className='img-before-after'/>
                <h3>{success.title}</h3>
              </div>
              ))}
              </Slider>
            </Row>
        </div>

    </>
  )
}

export default SuccessStories