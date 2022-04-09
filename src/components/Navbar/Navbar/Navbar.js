import React from 'react'
import { Container, Nav, NavDropdown } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import classNames from 'classnames';
import Logo from 'components/common/Logo';
import "./Navbar.css"
import TopNavRightSideNavItem from './TopNavRightSideNavItem';
import { NavLink } from 'react-router-dom'
const NavbarMain = () => {
  return (
    (
        <>
            <Navbar className={classNames('fs--1 navbar-top sticky-kit navMenu')} 
                collapseOnSelect expand="lg">
                <Container className='mt-md-0 mt-1'>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className='fs-0 ms-2'/>
                <Logo at="navbar-top" width={150} id="topLogo" className="ms-3"/>
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav className="me-auto">
                    <Nav.Link eventKey="1" as={NavLink} exact to="/" activeClassName="active">Home</Nav.Link>
                    <Nav.Link eventKey="2" as={NavLink} exact to="/about" activeClassName="active">About Us</Nav.Link>    
                    <NavDropdown title="Services" id="collasible-nav-dropdown">
                        <NavDropdown.Item eventKey="3" as={NavLink} exact to="/service/homoepathy" className='navdrop'>Homeopathy</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4" as={NavLink} exact to="/service/dietician" className='navdrop'>Dietician</NavDropdown.Item>
                        <NavDropdown.Item eventKey="5" as={NavLink} exact to="/service/body-tone" className='navdrop'>Body Tone Slimming Treatment</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item eventKey="6" as={NavLink} exact to="/service/online-consult" className='navdrop'>Online Consultation</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link eventKey="7" as={NavLink} exact to="/testimonials" activeClassName="active">Testimonials</Nav.Link>
                    <Nav.Link eventKey="8" as={NavLink} exact to="/info" activeClassName="active">Info</Nav.Link>
                    <Nav.Link eventKey="9" as={NavLink} exact to="/contact" activeClassName="active">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <TopNavRightSideNavItem />
                </Container>
                </Navbar>
        </>
    )
  )
}

export default NavbarMain;