import CustomerReview from 'components/Home/CustomerReview'
import SuccessStories from 'components/Home/SuccessStories'
import React from 'react'
import BackTop from 'components/common/BackTop';

const TestimonalsMain = () => {
  return (
    <>
        <BackTop />
        <div className='mt-6'></div>
        <SuccessStories />
        <div className='mt-5'></div>
        <CustomerReview />
    </>
  )
}

export default TestimonalsMain