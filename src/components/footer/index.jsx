import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import hompage_banner from "../../asserts/images/homepage_banner_image.svg"
import "./style.css"
export default function Footer() {
    return (
        <section className='footer-section'>
            <Container>
                <Row>
                    <Col md={4} className="footer-col1">
                        <div className='footer-logo'>
                            <img src={hompage_banner} alt="" />
                        </div>
                    </Col>
                    <Col md={4} className="footer-col2">
                        <div>
                            <div className='footer-heading'>
                                <p>GARHWA</p>
                            </div>
                            <div className='footer-sub-heading'>
                                <p>Sukbana, Near Railway Crossing, Garhwa, Jharkhand - 822114</p>
                            </div>
                            <div className='footer-heading'>
                                <p>+91 8448444943</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={4} className="footer-col3">
                        <div className='footer'>
                            <div className='footer-heading-company'>
                                <p>
                                    COMPANY
                                </p>
                            </div>
                            <div className="footer-list">
                                <ul>
                                    <li>
                                        <a href="homepage">Home</a>
                                    </li>
                                    <li>
                                        <a href="aboutuspage">About Us</a>
                                    </li>
                                    <li>
                                        <a href="/careerspage">Careers</a>
                                    </li>
                                    <li>
                                        <a href="/contactuspage">Contact Us</a>
                                    </li>
                                    <li>
                                        <a href="/privacyandpolicy">Privacy Policies</a>
                                    </li>
                                    <li>
                                        <a href="/termsandconditions">Terms & Conditions</a>
                                    </li>
                                    <li>
                                        <a href="/faqs">FAQs</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <div className="divider">
                    </div>
                </Row>
                <div className='footer-down-section'>
                    <Row>
                        <Col md={12} className="footer-column">
                            <Row>
                                <div className="footer-copy-right">
                                    <p>Copyright © 2023 Grozep Inc. All rights reserved</p>
                                </div>
                            </Row>
                            <Row>
                                <div className='footer-country'>
                                    <p>India</p>
                                </div>
                            </Row>
                        </Col>

                    </Row>
                </div>
            </Container>
        </section>

    )
}
