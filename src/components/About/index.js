import About from 'components/Home/About/About'
import ChooseUS from 'components/Home/ChooseUS'
import React from 'react'
import BackTop from 'components/common/BackTop';

const AboutMain = () => {
  return (
    <>
        <BackTop />    
        <div className='mt-8'></div>
        <About />
        <div className='mt-6'></div>
        <ChooseUS />
        <div className='mb-5'></div>
    </>
  )
}

export default AboutMain