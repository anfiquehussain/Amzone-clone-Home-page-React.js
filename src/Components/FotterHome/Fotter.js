import React from 'react'
import './Fotter.css'
import { Row, Container, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  AiOutlineGlobal } from 'react-icons/ai';

function Fotter() {
    return (
        <div className='Footer'>
            <Container fluid={true} className='p-0'>
                <Row className='TopFoot'>
                    <Col>
                        <h5 className='SeePer'>See personalized recommendations</h5>
                        <button className='btn_sign' width="50px">Sign in</button>
                        <div class="new-customer">New customer?<a class="sign-in-tooltip-link" > Start here.</a></div>
                    </Col>

                </Row>
                <Row className='CenterFoot'>
                    <Col>
                        <h6 className='back'> Back to top</h6>
                    </Col>
                </Row>
                <Row className='CnterFoot2'>
                    <Col className='Colleft'>
                        <ul className='ColUl'>
                            <li className='Coltitle'>Get to Know Us</li>
                            <li className='li1'>About Us</li>
                            <li className='li1'>Carres</li>
                            <li className='li1'>Press Releases</li>
                            <li className='li1'>Amazon Cares</li>
                            <li className='li1'>Gift a Smile</li>
                        </ul>
                    </Col>

                    <Col className='Colleft2'>
                        <ul className='ColUl'>
                            <li className='Coltitle'>Connect with Us</li>
                            <li className='li1'>Facebook</li>
                            <li className='li1'>Twitter</li>
                            <li className='li1'>Instagram</li>
                        </ul>
                    </Col>

                    <Col className='Colleft3'>
                        <ul className='ColUl'>
                            <li className='Coltitle'>Make Money With Us</li>
                            <li className='li1'>Sell on Amazon</li>
                            <li className='li1'>Sell wunder Amazon Accekerator</li>
                            <li className='li1'>Amazon Global Selling</li>
                            <li className='li1'>Become an Afiiliate</li>
                            <li className='li1'>Flufliment by Amazon</li>
                            <li className='li1'>Advertise Yoyr Products</li>
                            <li className='li1'>Amzon Pay on Merchants</li>
                        </ul>
                    </Col>

                    <Col className='ColRight'>
                        <ul className='ColUl'>
                            <li className='Coltitle'>Let Us Help You</li>
                            <li className='li1'>Covid-19</li>
                            <li className='li1'>Your Account</li>
                            <li className='li1'>Returns Centre</li>
                            <li className='li1'>100% Purchase Protection</li>
                            <li className='li1'>Amazon App Download</li>
                            <li className='li1'>Amazon Assistant Download</li>
                            <li className='li1'>Help</li>
                        </ul>
                    </Col>
                    <hr/>
                </Row>

                <Row className='CenterFoot3'>
                    <Col>
                        <div className="amazon">
                           <img className='ImgAmazon' src="../../../Images/PinClipart.com_barber-clippers-clipart_576184 (2).png" alt="" />
                        </div>
                        <div className="lagSel">
                                   
                                   <AiOutlineGlobal color='white' size={19}/>
                                  <select className='Sel'>
                                      <option value="ENGLISH">English</option>
                                  </select>
                        </div>
                        
                    </Col>
                </Row>
                
                <Row className='CenterFotter4'>
                       <Col>
                       <div className="Container">
                       <ul className="Cname">
                              <li className="cl">Australia</li>
                              <li className="cl">Brazil</li>
                              <li className="cl">Canada</li>
                              <li className="cl">China</li>
                              <li className="cl">France</li>
                              <li className="cl">Germany</li>
                              <li className="cl">Italy</li>
                              <li className="cl">japan</li>
                              <li className="cl">Mexico</li>
                              <li className="cl">Netherland</li>
                              <li className="cl">Poland</li>
                              <li className="cl">Singpore</li>
                              <li className="cl">Spain</li>
                              <li className="cl">Turky</li>
                              <li className="cl">UAE</li>
                              <li className="cl">UK</li>
                              <li className="cl">US</li>
                          </ul>
                       </div>
                       </Col>
                </Row>
                <Row className="FOtterBottom">
                    <div className="cont">
                        <ul className="lastbotoom">
                            <li className="cl2">Conditions of Use & Sale</li>
                            <li className="cl2">Privacy Notice</li>
                            <li className="cl2">Interest-Based Ads</li>
                            <li className="cl2">© 1996-2021, Amazon.com, Inc. or its affiliates</li>
                        </ul>
                    </div>
                </Row>


            </Container>

        </div>
    )
}

export default Fotter
