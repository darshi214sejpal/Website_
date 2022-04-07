import React from 'react'
import { Col, Row } from 'react-bootstrap';
import "./CustomerReview.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { CustomerReviewData } from './CustomerReviewData';
import OpenQuotes from 'assets/img/open_quotes.png';
import CloseQuotes from 'assets/img/close_quotes.png';
const CustomerReview = () => {

  return (
    <>
        <div className='container-review'>
            <Row>
                <Col className='col-md-1 col-0'>
                
                </Col>
                <Col className='col-xl-4 col-lg-5 col-md-8 col-10 d-flex justify-content-center'>
                    <Row>
                    <p className='review-title'>Our Satisfied Patients</p>
                    <p className='review-subtitle'>Some of our great clients and their reviews.</p>
                    <div className='review-swipe'>
                    <Carousel showArrows={false} showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay={true}>
                    {CustomerReviewData.map((data) => (
                        <div data-interval={3000} className='carousel-review'>
                            <img src={OpenQuotes} alt='open-quotes' className='quotes-image-open'/>
                            {data.description.map((desc) => (
                                <p className='review-text'>{desc}</p>
                            ))}
                            <img src={CloseQuotes} alt='close-quotes' className='quotes-image-close'/>
                            <br />
                            {/* <p className='review-by'>~ {data.written_by} </p> */}
                        </div>
                    ))}
                        
                    </Carousel>
                    </div>
                    </Row>
                </Col>
                <Col className='col-md-3'>
                </Col>
            </Row>
        </div>
    </>
  )
}

export default CustomerReview;