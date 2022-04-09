import React, {useEffect} from 'react';
import { Col, Row } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import "./Services.css"
import { ServicesData } from './ServicesData';
const Services = () => {
    let navigate = useNavigate(); 

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  
  return (
      <>
        <div className='container-service'>
            <Row>   
                <div className='service-box service-arrow-bottom text-nowrap g-4 mb-3'>
                    Know More About
                  </div>
            </Row>
            <Row>
                <p className='service-title ms-sm-3 ms-0'>Services We Provide</p>
                <p className='ms-sm-3 ms-0 service-title-text'>We provide quality service and support.</p>
            </Row>
            <Row xs={1} sm={2} lg={3} className="g-4">
                {ServicesData.map((service) => (
                <Col>
                <div class="card">
                    <div class="imgBox">
                    <img src={service.image} className="mouse" />
                    </div>

                    <div class="contentBox">
                    <h3>{service.name}</h3>
                    <button className='read' onClick={() => {navigate(`/service/${service.link}`)}}>Read More</button>
                    </div>
                </div>                
                </Col>
                ))}
            </Row>
        </div>
      </>
  );
};

export default Services;
