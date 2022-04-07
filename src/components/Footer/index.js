import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Logo from 'components/common/Logo';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle, faInstagram, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import "./Footer-style.css"
const Footer = () => {
  return (
    <>
        <div className='container-footer'>
        <div className='style-footer'>
            <Row className='d-flex justify-content-start mt-md-4 mb-2'>
                <Col className='col-lg-3 col-md-6 col-12 d-flex justify-content-start'>
                    <Row className='align-items-start'>
                        <Col className='d-flex justify-content-start col-12'>
                            <Logo at="navbar-top" width={150} id="topLogo" className="ms-3 topLogo"/>
                        </Col>
                        {/* <Col className='d-flex justify-content-start text-nowrap mt-2 col-6'>
                            <h4>Dr. Pooja Shah</h4>
                        </Col> */}
                        <Col className='col-md-12 col-12 d-flex justify-content-start align-items-start mt-md-0 mt-4'>
                        <p className="text-justify footer-details">Dr. Pooja Shah is consulting homeopath and dieitician with more than 10 years of clinical experience. She is an expert in treating acute and chronic cases, especially for kids and skin diseases. Also an expert in obesity management.</p>
                        </Col>
                        <Col className='col-md-10 col-12 d-flex justify-content-start align-items-start'>
                            <div className='d-flex justify-content-start'>
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
                </Col>
                <Col className='col-lg-2 col-md-6 col-12 d-flex justify-content-start mt-lg-0 mt-3'>
                    <Row className='ms-lg-3'>
                        <Col className='d-flex justify-content-start col-12'>
                            <p className='footer-title'>Know More</p>
                        </Col>
                        <Col className='d-flex justify-content-start col-12 mt-7 mt-md-0'>                    
                            <ul className='footer-list-container'>
                                <li className='footer-list'>About Us</li>
                                <li className='footer-list'>Testimonals</li>
                                <li className='footer-list'>Blog</li>
                                <li className='footer-list'>Contact Us</li>
                            </ul>                    
                        </Col>
                    </Row>
                </Col>
                <Col className='col-lg-3 col-md-6 col-12 d-flex justify-content-start'>
                    <Row>
                        <Col className='d-flex justify-content-start col-12'>
                            <p className='footer-title'>Our Services</p>
                        </Col>
                        <Col className='d-flex justify-content-start col-12 mt-7 mt-md-0'>                    
                            <ul className='footer-list-container'>
                                <li className='footer-list'>Homeopathy</li>
                                <li className='footer-list'>Dietician</li>
                                <li className='footer-list text-nowrap'>Body Tone Slimming Treatment</li>
                                <li className='footer-list'>Online Consultation</li>
                            </ul>                    
                        </Col>
                    </Row>
                </Col>
                <Col className='col-lg-4 col-md-6 col-12 d-flex justify-content-start'>
                    <Row className=''>
                        <Col className='d-flex justify-content-start col-12'>
                            <p className='footer-title'>Contact</p>
                        </Col>
                        <Col className='d-flex justify-content-start col-12 mt-5'>                    
                            <FontAwesomeIcon icon={faMapMarkerAlt} alt="Location"/>
                            <p className="text-justify footer-address">Shrinath Darshan, Ground floor, Near Golden Tobacco, S.V. Road, Vile Parle (West), Mumbai - 400056</p>
                        </Col>
                        <Col className='d-flex justify-content-start col-12'>                    
                            <FontAwesomeIcon icon={faMapMarkerAlt} alt="Location"/>
                            <p className="text-justify footer-address">Tilak Polyclinic, Ram-Mandir Road, Opposite Lokmanya Seva Sangh, Vile Parle (East), Mumbai - 400057</p>
                        </Col>
                        <Col className='d-flex justify-content-start col-12'>                    
                            <FontAwesomeIcon icon={faPhone} alt="Location"/>
                            <p className="text-justify footer-address">+91 9819896727</p>
                        </Col>
                        <Col className='d-flex justify-content-start col-12'>                    
                            <FontAwesomeIcon icon={faEnvelope} alt="Location"/>
                            <p className="text-justify footer-address">dr.pooja_21@yahoo.com</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <hr />
                <p className="footer-site-info">Copyright ©2022 | All rights reserved | Developed by Jeet Shah</p>
            </Row>
        </div>
        </div>
    </>
  )
}

export default Footer