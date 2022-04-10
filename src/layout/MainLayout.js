import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavbarTop from 'components/Navbar/NavbarTop/NavbarTop';
import NavbarMain from 'components/Navbar/Navbar/Navbar';
import Home from 'components/Home';
import "./MainLayout.css";
import Footer from 'components/Footer';
import ContactMain from 'components/Contact';
import AboutMain from 'components/About';
import TestimonalsMain from 'components/Testimonals';
import Info from 'components/Info';
import { ServiceData } from 'components/Service/ServiceData';
import NavService from 'components/Service';
import Navbar from 'components/Navbar';

const MainLayout = () => {

  return (
    <>
      <NavbarTop />
      <NavbarMain />
      {/* <Navbar /> */}
      <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/contact" exact element={<ContactMain />} />
            <Route path="/about" exact element={<AboutMain />} />
            <Route path="/testimonials" exact element={<TestimonalsMain />} />
            <Route path="/info" exact element={<Info />} />
            {ServiceData.map(service => (
                <Route path={`/service/${service.link_name}`} exact element={<NavService id={service.id} />} />
            ))}
      </Routes>
      <Footer />
    </>
    );
};

export default MainLayout;
