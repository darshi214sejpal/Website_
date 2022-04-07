import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './BackTop.css';
import { faArrowAltCircleUp } from '@fortawesome/free-regular-svg-icons';


const ScrollTopArrow = () =>{

  const [showScroll, setShowScroll] = useState(false)

  useEffect(()=>{
    window.addEventListener('scroll', checkScrollTop)
    return function cleanup() {
      window.removeEventListener('scroll', checkScrollTop)
    }
  })

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 300){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 300){
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  return (
            <FontAwesomeIcon icon={faArrowAltCircleUp} className="scrollTop" onClick={scrollTop} 
            style={{ display: showScroll ? 'flex' : 'none'}}/>
  );
}
// height: 40, 
export default ScrollTopArrow;