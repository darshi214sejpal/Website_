import React, {useState, useEffect} from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import "./Contact.css";
const ContactUs = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    
      const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
    
    
      const handleChange = e => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };

      const handleSubmit = e => {
        e.preventDefault();
        var url = 
        "https://wa.me/919819896727/?text="+
        "Name: "+ formData.name +
        "%0a" +
        "Phone number: "+ formData.phone +
        "%0a" +
        "Email: "+ formData.email +
        "%0a" +
        "Service: "+ formData.service +
        "%0a" +
        "Message: "+ formData.message;

        window.open(url, "_blank").focus();
        
        e.target.reset();
    
      };
  return (
    <>
        <div className='container-contact'>
            <Row>   
                <div className='contact-box contact-arrow-bottom text-nowrap g-4 mb-4'>
                    Contact Us
                </div>
            </Row>
            <Row className='ms-4 me-3'>
                <Card.Body className="bg-light">
                        <Form onSubmit={handleSubmit}>
                        <Row className="mb-3 g-3">
                            <Form.Group as={Col} lg={6} className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="" name="name" onChange={handleChange}/>
                            </Form.Group>  
                            <Form.Group as={Col} lg={6} className="mb-3">
                                <Form.Label>Phone number</Form.Label>
                                <Form.Control type="number" placeholder="" name="phone" onChange={handleChange}/>
                            </Form.Group>                        
                        </Row>
                        <Row className="mb-3 g-3">
                            <Form.Group as={Col} lg={6} className="mb-3">
                              <Form.Label>Email</Form.Label>
                              <Form.Control type="email" placeholder="name@example.com" name="email" onChange={handleChange}/>
                            </Form.Group>  
                            <Form.Group as={Col} lg={6} className="mb-3">
                                <Form.Label>Service</Form.Label>
                                  <Form.Select name="service" onChange={handleChange}>
                                    <option value=''>Select your service</option>
                                    <option value="homeopathy">Homeopathy</option>
                                    <option value="diet">Diet</option>
                                    <option value="both">Both</option>
                                  </Form.Select>
                            </Form.Group>                        
                        </Row>
                        <Form.Group as={Col} lg={12} className="mb-3">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={3} name="message" onChange={handleChange}/>
                        </Form.Group>                         
                        <div className='d-flex justify-content-end'>
                        <Button className='btn-resume mt-auto' type="submit">Book an Appointment !</Button>
                        </div>
                        </Form>
                    </Card.Body>
            </Row>
        </div>
    </>
  )
}

export default ContactUs