import React from 'react'
import "./chooseUs.css"
import { Col, Row } from 'react-bootstrap';
import img from 'assets/img/choose/rupees.png'
import { ChooseUsData } from './ChooseUsData';
const ChooseUS = () => {
  return (
    <>
            <div className='container-choose'>
            <Row>   
                <div className='service-box service-arrow-bottom text-nowrap g-4'>
                    Why Choose Us?
                  </div>
            </Row>
            <Row xs={2} md={3} className="g-4 mt-2 d-flex justify-content-center ms-2 ms-md-4 me-2 me-md-4">
            {ChooseUsData.map((data) => (
                <Col>   
                    <div className={`card-choose ${data.color}`}>
                        <div className="overlay"></div>
                            <div className="circle">
                                <img src={data.image} alt="" className='icon-image'/>
                            </div>
                            <p className='choose-title'>{data.title}</p>
                            <p className='choose-details'>{data.details}</p>
                    </div>
                </Col>
            ))}
            </Row>
        </div>
    </>
  )
}

export default ChooseUS