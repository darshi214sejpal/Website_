import About from 'components/Home/About/About';
import React,{useEffect} from 'react';
import { Col, Row } from 'react-bootstrap';
import CarouselMain from './Carousel';
import Services from 'components/Home/Services/Services';
import ChooseUS from './ChooseUS';
import SuccessStories from './SuccessStories';
import CustomerReview from './CustomerReview';
import ContactUs from './Contact';
import BackTop from 'components/common/BackTop';
const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    
  return (
    <>
      <BackTop />
        <Row className="g-3 mb-6">
          <Col>
            <CarouselMain />
          </Col>
        </Row>
        <Row className="g-3 mb-7">
          <Col>
            <About />
          </Col>
        </Row>
        <Row className="g-3 mb-7">
          <Col>
            <Services />
          </Col>
        </Row>
        <Row className="g-3 mb-7">
          <Col>
            <ChooseUS />
          </Col>
        </Row>
        <Row className="g-3 mb-7">
          <Col>
            <SuccessStories />
          </Col>
        </Row>
        <Row className="g-3 mb-7">
          <Col>
            <CustomerReview />
          </Col>
        </Row>
        <Row className="g-3 mb-7">
          <Col>
            <ContactUs />
          </Col>
        </Row>
    </>
  )
}

export default Home