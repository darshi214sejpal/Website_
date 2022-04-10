import React from 'react'
import NavbarMain from './Navbar/Navbar'
import NavbarTop from './NavbarTop/NavbarTop'

const Navbar = () => {
  return (
    <>
        <div className="sticky-top">
        <NavbarTop />
        <NavbarMain />
        </div>
    </>
  )
}

export default Navbar