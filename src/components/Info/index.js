import React, { useState } from 'react'
import "./Info.css"
import { Col, Row } from 'react-bootstrap';
import { InfoData } from './InfoData';
import BackTop from 'components/common/BackTop';

const Info = () => {

    const [items, setItems] = useState(InfoData);

    const filterItem = (categItem) => {
        const updatedItems = InfoData.filter((curElem) => {
            return curElem.category === categItem;
        })
        setItems(updatedItems);
    }

    const allItems = () => {
        setItems(InfoData);
    }
  return (
    <>
        <BackTop />
        <div className='container-info mt-md-4'>
            <Row>   
                <div className='info-box info-arrow-bottom text-nowrap g-4 mb-4 ms-lg-5'>
                    More Information
                  </div>
            </Row>
            {/* <Row className='container ms-lg-5 me-lg-5 ms-md-3 me-md-3 ms-xs-0 me-xs-0 d-flex justify-content-start'> */}
            <Row xs={2} md={3} lg={4} className="g-4 mt-2 d-flex justify-content-start ms-2 ms-md-4 me-2 me-md-4">
                <Col className=''>
                    <button className='btn btn-warning' onClick={allItems}><p className='category-style'>All</p></button>
                </Col>
                <Col className=''>
                    <button className='btn btn-warning text-nowrap'
                    onClick={() => filterItem('homeopathy')}><p className='category-style'>Homeopathy</p></button>
                </Col>
                <Col className=''>
                    <button className='btn btn-warning text-nowrap'
                    onClick={() => filterItem('diet')}><p className='category-style'>Diet Tips</p></button>
                </Col>
                <Col className=''>
                        <button className='btn btn-warning text-nowrap'
                        onClick={() => filterItem('myths_facts')}><p className='category-style'>Myths & Facts</p></button>
                    </Col>
                    <Col className=''>
                        <button className='btn btn-warning text-nowrap'
                        onClick={() => filterItem('health')}><p className='category-style'>Health</p></button>
                    </Col>
            </Row>
            <Row xs={2} md={3} className="g-4 mt-2 d-flex justify-content-center ms-2 ms-md-4 me-2 me-md-4">
            {[...items].reverse().map((data) => (
                <Col lg={4} md={6} xs={12} className="d-flex justify-content-center">   
                    <figure class="snip1295">
                        <img src={data.image} alt="" className='info-image'/>
                        <div class="border one">
                            <div></div>
                        </div>
                        <div class="border two">
                            <div></div>
                        </div>
                    </figure>
                </Col>
            ))}
            </Row>
        </div>
        <div className='mb-5'></div>
    </>
  )
}

export default Info