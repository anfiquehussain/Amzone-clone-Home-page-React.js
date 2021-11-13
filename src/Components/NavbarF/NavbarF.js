import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavbarF.css'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { MdSearch } from 'react-icons/md'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { Row, Container, Col } from 'react-bootstrap';


function Nav() {
    return (
        <Container fluid={true} className='p-0'>
            <Row>
                <Col>
                    <div className='MainNav'>
                        <div className='NavDiv1'>
                            <img className='logo' src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/amazon-symbol-png-logo-vector-9.png" width="200" alt="amazon" />
                        </div>
                        <div className='NavDiv2'>
                            <div className='gps'>
                                <HiOutlineLocationMarker size={20} color='white' className='gpsIcon' />
                                <div className="selectgps">
                                    <h3>
                                        <h6 className='hallo'>Hallo</h6>
                                        <h2 className='loc'>Select your address</h2>
                                    </h3>


                                </div>
                            </div>
                        </div>
                        <div className='NavDiv3'>
                            <select className='sel'>
                                <option>All Categories</option>
                                <option>Alexa Skills</option>
                                <option>Amazon Devices</option>
                                <option>Amazon Fashion</option>
                                <option>Amazon Pantry</option>
                                <option>Appliances</option>
                                <option>Apps &amp; Games</option>
                                <option>Baby</option>
                                <option>Beauty</option>
                                <option >Books</option>
                            </select>
                            <input type="text" className='Seachbar'></input>
                            <button className='SeachIcon'><MdSearch size={35} /></button>
                        </div>

                        <div className='NavDiv4'>
                            <img className='indiaFlag' src="https://www.freepnglogos.com/uploads/indian-flag-png/indian-flag-flag-paint-face-photo-editing-0.png" width="200" alt="indian flag" />


                        </div>
                        <div className='NavDiv5'>
                            <h4 className='helloSing'>Hello,Sign in</h4>
                            <select className='AccountSel'>
                                <option>Account & List</option>
                                <option className='Sin'>Sign In</option>
                            </select>
                        </div>
                        <div className='NavDiv6'>
                            <h5>
                                <span class="nav-line-1">Returns</span><br></br>
                                <span class="nav-line-3">&</span>
                                <span class="nav-line-2">Orders</span>
                            </h5>
                        </div>
                        <div className='NavDiv7'>
                            <div>
                            <AiOutlineShoppingCart className='CartLogo'/>
                            <h6 className='cartText'>Cart</h6>
                            </div>                           
                        </div>


                    </div>
                </Col>
            </Row>
        </Container>


    )
}

export default Nav
