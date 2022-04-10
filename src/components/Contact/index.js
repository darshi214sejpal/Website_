import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ContactUs from 'components/Home/Contact'
import "./contactMain.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CenterData } from './CenterData';
import BackTop from 'components/common/BackTop';

const ContactMain = () => {
  const icons = require("@fortawesome/free-solid-svg-icons");
  return (
    <>
        <BackTop />
        <div className='container-contact mb-md-6 mt-6'>
            <Row>   
                <div className='contact-box contact-arrow-bottom text-nowrap g-4 mb-4'>
                    Our Centers
                </div>
            </Row>
            <Row className='d-flex justify-content-center'>
                {CenterData.map(center => (
                    <>
                    <Col md={5} className="center-container ms-md-3 me-md-3 mb-md-0 mb-5">
                    <Row>
                        {center.center.map(data => (
                            <>
                                <Col sm={5} xs={6} className="mb-md-4 mb-3">
                                    <FontAwesomeIcon icon={icons[data.icon]} alt="Phone" className='center-name'/>
                                    <p className='center-name'>{data.title}</p>    
                                </Col>
                                <Col sm={7} xs={6} className="d-flex justify-content-start mb-md-4 mb-3">
                                    <Row className='g-0'>
                                    {data.content.map(details => (
                                        <p className='center-subtitle text-justify'>{details}</p>
                                    ))}
                                    </Row>
                                </Col>
                            </>
                        ))}
                    </Row>
                </Col>   
                </>         
                ))}
            </Row>

        </div>
        <ContactUs />
        <div className='mb-5'></div>
    </>
  )
}

export default ContactMain