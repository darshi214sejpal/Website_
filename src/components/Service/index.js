import React, {useEffect} from 'react'
import "./NavService.css"
import { Button, Col, Row } from 'react-bootstrap';
import { ServiceData } from './ServiceData';
import { useNavigate } from "react-router-dom";
import BackTop from 'components/common/BackTop';

const NavService = ({id}) => {

  let navigate = useNavigate(); 

  const projectId=id-1;

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>    
    <BackTop />
    <div className='nav-service-container mt-4 mb-4'>
    <Row className='align-items-top'>
        <Col className='col-lg-3 col-md-4 col-12 order-1 d-flex justify-content-start'>
            <div className='w-100 h-100 d-flex justify-content-start'>                
            <img src={ServiceData[projectId].image} alt="Online Consult" className='img-service' />   
            </div>                
        </Col>
        <Col className='col-lg-9 col-md-8 col-12 order-2 d-flex justify-content-start '>
            <div className='ms-lg-4 ms-md-5'>
                <p className='service-head mt-md-0 mt-4'>{ServiceData[projectId].name}</p>
                {ServiceData[projectId].details.map((detail,index)=>(
                  <p className='service-text text-break'>
                  {detail}
                  </p>
                ))}
                {ServiceData[projectId].subtitle ? 
                <>
                  {ServiceData[projectId].subtitle.map((subtitle,index)=>(
                    <>
                      <p className='service-subhead mt-4'>{subtitle.subtitle}</p>
                      {subtitle.details.map((detail,index)=>(
                        <p className='service-list-text text-break'>{detail}</p>
                      ))}
                    </>
                  ))}
                </> : null}
                <Button className='btn-resume mt-3 mb-3' onClick={() => {navigate(`/contact`)}}>Book an Appointment !</Button>
                </div>
        </Col>
    </Row>
    {ServiceData[projectId].services ?
    <>
      <Row>
      <p className='service-head mt-5'>{ServiceData[projectId].name} Services</p>
      </Row>
      <Row xs={1} sm={2} lg={3} className="gx-4">
      {ServiceData[projectId].services.map((service) => (
        <Col>
        <div class="card">
            <div class="imgBox">
            <img src={service.image} className="mouse mt-2" />
            </div>

            <div class="contentBox mt-2 mb-2">
            <h3>{service.name}</h3>
            </div>
        </div>                
        </Col>
    ))} 
      </Row>
    </> : null}
    </div>
    </>
  )
}

export default NavService