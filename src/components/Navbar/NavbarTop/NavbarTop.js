import React from 'react'
import { faFacebook, faGoogle, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row } from 'react-bootstrap';
import "./NavbarTop.css"
const NavbarTop = () => {
  return (
    <>
        <Row className="align-items-center nav-style">
          <Col className='col-6 d-flex justify-content-center'> 
            <span className='nav-name'>Dr. Pooja Shah</span> </Col>
          <Col className='col-6'> 
            <div className='d-flex justify-content-center'>
               <a href="https://wa.me/919819896727/?text=Hello, I want to make an enquiry for" target="_blank" rel="noreferrer noopener" title="LinkedIn" className="socials-item fs-1">
                <FontAwesomeIcon icon={faWhatsapp} alt="Whatsapp" title='Whatsapp' className='Whatsapp'/>
              </a>
              <a href="https://www.facebook.com/nutrikure" target="_blank" rel="noreferrer noopener" title="Instagram" className="socials-item fs-1">
                <FontAwesomeIcon icon={faFacebook} alt="Facebook" title='Facebook' className='Facebook'/>
              </a>
              <a href="mailto: dr.pooja_21@yahoo.com" target="_blank" rel="noreferrer noopener" title="LinkedIn" className="socials-item fs-0">
                <FontAwesomeIcon icon={faGoogle} alt="Google" title='Google' className='Google'/>
              </a>
              <a href="https://www.instagram.com/nutri_kure/?utm_medium=copy_link" target="_blank" rel="noreferrer noopener" title="Instagram" className="socials-item fs-1">
                <FontAwesomeIcon icon={faInstagram} alt="Instagram" title='Instagram' className='instagram'/>
              </a>
            </div>
          </Col>
        </Row>
    </>
  )
}

export default NavbarTop;