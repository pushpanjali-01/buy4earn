import React from 'react'
import { Col, Container, Navbar, Row } from 'react-bootstrap'
import "./style.css"
import hompage_banner from "../../asserts/images/homepage_banner_image.svg"
import grozep_logo from "../../asserts/images/grozep_logo.svg"
import grozep_logo_dark from "../../asserts/images/grozep_logo_dark.svg"
import wero_logo from "../../asserts/images/wero_logo.svg"
import line_vector from "../../asserts/images/line_vector.svg"
import dot1 from "../../asserts/images/dot1.svg"
import dot2 from "../../asserts/images/dot2.svg"
import dot3 from "../../asserts/images/dot3.svg"
import dot4 from "../../asserts/images/dot3.svg"
import dot5 from "../../asserts/images/dot5.svg"
import dot6 from "../../asserts/images/dot6.svg"
import dot7 from "../../asserts/images/dot7.svg"
import dot8 from "../../asserts/images/dot8.svg"
import Footer from '../../components/footer'
import Header from '../../components/header'
import axios from 'axios'
export default function Homepage
    () {
    const getuesers = () => {
        axios.post("https://devapi.grozep.com/v1/login/phone")
            .then((res) => res.json())
            .then(
                (result) => {
                    console.log(result.data);
                },
                (error) => {
                    console.log(error);
                }
            );
    };
    getuesers()
    return (
        <main>
            {/* <Header /> */}
            <section className='homepage-banner'>
                <Navbar />
                <Container>
                    <Row>
                        <Col md={6} className="homepage-banner-left-setion">
                            <Row>
                                <div className='dot1'>
                                    <img src={dot1} alt="" />
                                </div>
                                <div className='dot2'>
                                    <img src={dot2} alt="" />
                                </div>
                                <div className='dot3'>
                                    <img src={dot3} alt="" />
                                </div>
                                <div className='dot4'>
                                    <img src={dot4} alt="" />
                                </div>
                                <div className='dot5'>
                                    <img src={dot5} alt="" />
                                </div>
                                <div className='dot6'>
                                    <img src={dot6} alt="" />
                                </div>
                                <div className='dot7'>
                                    <img src={dot7} alt="" />
                                </div>
                                <div className='dot8'>
                                    <img src={dot8} alt="" />
                                </div>
                                <div className="homepage-banner-heading">
                                    <p>Get your groceries within 30 minutes</p>
                                </div>

                            </Row>
                            <Row>
                                <div className='homepage-banner-sub-heading'>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                                    </p>
                                </div>
                            </Row>
                            <Row>
                                <div className='dark-button'>
                                    <button>DOWNLOAD NOW</button>
                                </div>
                            </Row>
                        </Col>
                        <Col md={6} className='homepage-banner-image'>
                            <div>
                                <img src={hompage_banner} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='hompage-section'>
                <Container>
                    <div className='section-heading'>
                        <p>
                            Our Brands
                        </p>
                    </div>
                    <Row className="homepage-section-row">
                        <Col md={5}>
                            <div className='logo_img'>
                                <img src={grozep_logo} alt="" />
                            </div>
                            <div className='section-sub-heading-logo'>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                                </p>
                            </div>
                        </Col>
                        <Col md={2}>
                            <div>
                                <img src={line_vector} alt="" />
                            </div>
                        </Col>
                        <Col md={5}>
                            <div className='logo_img'>
                                <img src={wero_logo} alt="" />
                            </div>
                            <div className='section-sub-heading-logo'>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='hompage-section'>
                <Container>
                    <div className='section-heading'>
                        <p>
                            Benefits of grozep
                        </p>
                    </div>
                    <Row>
                        <Col md={9}>
                            <div className='section-sub-heading'>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                                </p>
                            </div>
                        </Col>
                        <Col md={3} className="left-section">
                            <div className='grozep-logo-dark'>
                                <img src={grozep_logo_dark} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='hompage-section'>
                <Container>
                    <div className='section-heading'>
                        <p>
                            Benefits of Xwero
                        </p>
                    </div>
                    <Row>
                        <Col md={3} className="left-section">
                            <div className='grozep-logo-dark'>
                                <img src={wero_logo} alt="" />
                            </div>
                        </Col>
                        <Col md={9}>
                            <div className='section-sub-heading'>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Footer />
            </section>
        </main>
    )
}

