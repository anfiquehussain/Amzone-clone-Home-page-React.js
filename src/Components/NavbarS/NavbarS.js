import React from 'react'
import './NavbarS.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Container } from 'react-bootstrap'
import { FaBars } from 'react-icons/fa'


function NavbarS() {
    return (
        <div className='MainDiv'>
            <Container fluid={true} className='p-1'>
                <Row>
                    <Col>
                        <div className='Div1'>
                            <FaBars color='white' className='alllogo'></FaBars>
                            <h6 className='alltext'>All</h6>
                        </div>
                        <div className='Div2'>
                            <h6  className='NavList1'>Mobile</h6>
                            <h6  className='NavList1'>Best Sellers</h6>
                            <h6  className='NavList1'>Electronics</h6>
                            <h6  className='NavList1'>Fashion</h6>
                            <h6  className='NavList1'>Customer Service</h6>
                            <h6  className='NavList1'>Prime</h6>
                            <h6  className='NavList1'>Home & Kitchen</h6>
                            <h6  className='NavList1'>Amazon Pay</h6>
                            <h6  className='NavList1'>Camputer</h6>

                        </div>
                        <div className='Div3'>
                            <img className='NavImg' src="https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2021/img/Mobile_Traffic_/XCM_Manual_1321458_1651511_IN_3781247_400x39_en_IN._CB655944656_.jpg" alt="Amazon App" />
                        </div>
                    </Col>
                </Row>

            </Container>

        </div>
    )
}

export default NavbarS
