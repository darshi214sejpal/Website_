import React, {useEffect} from 'react';
import { Col, Row } from 'react-bootstrap';
import "./About.css";
import Image from "assets/img/pooja2.jpeg";

const About = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return(
      <>
      
        <div className='about-container'>
        <Row className='align-items-center'>
            <Col className='col-md-4 col-12 order-1 d-flex md-justify-content-end justify-content-center'>
                <div className='w-100 h-100 d-flex md-justify-content-end justify-content-center mt--2'>                
                <img src={Image} alt="Dr. Pooja Shah" className='img-me ms-md-8 ms-0' />   
                </div>                
            </Col>
            <Col className='col-md-8 col-12 order-2 d-flex justify-content-end'>
                <Row>
                    {/* <h1>Hello</h1> */}
                    <div className='about-me-text-part'>
                    <div className='box arrow-bottom text-nowrap d-inline-flex p-3 mt-md-0 mt-5 ms-lg-0 ms-md-8'>
                    About Me
                    </div>
                    <div className='mt-3 ms-lg-4 ms-md-5'>
                    <p className='about-text'>
                    Dr. Pooja shah, a consulting homeopath and a dietician by profession. She has experience in this field with more than 10years of experience. <br />
                    She has passed out from CMP homeopathic medical college in year 2011 and then after
                    completing her graduate degree as a homeopathic doctor, she still had passion to study
                    further and attain another degree, so did a degree course in the field of nutrition and now
                    successfully practicing as a consulting dietitian. <br />
                    She has 2 centres as her own private clinic - vile parle west and vile parle east <br />
                    She is expert in treating acute and chronic cases through homeopathy and helping out in
                    their weight management through healthy diet and lifestyle modifications.<br />
                    With more years of experience and learning, she then introduced body slimming
                    treatment which gives heat throughout the body in the session and then tightening the
                    skin though another equipment. The various sessions helps in inch loss/ fat loss and
                    helps in body toning and body shaping.<br />
                    So here is all in 1 solution of all your health related problems with Dr. Pooja Shah.
                    </p>
                    </div>
                    </div>
                </Row>
            </Col>

        </Row>
        </div>
      </>
  );
};

export default About;
