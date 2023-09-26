import React, { useEffect, useState }  from "react";
import { Button, Col, Container, Row } from 'react-bootstrap';
import greeksalad from '../assets/greek salad.jpg';
import Bruschetta from '../assets/bruchetta.svg';
import pasta from '../assets/pasta.jpeg';
import icon from '../assets/icon.png';

const specials = [
  {
      "image": greeksalad,
      "name": "Greek Salad",
      "price": 12.99,
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      "subtitle": "Order a delivery",
      "icon": icon
  },
  {
      "image": Bruschetta,
      "name": "Bruchetta",
      "price": 8.99,
      "description": "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
      "subtitle": "Order a delivery",
      "icon": icon
  },
  {
      "image": pasta,
      "name": "Pasta",
      "price": 15.99,
      "subtitle": "Order a delivery",
      "description": "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      "icon": icon
  }
]

const SpecialsSection = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 575.98);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 575.98);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
        <section id="menu">
            <Container id="menu">
                <Row>
                    <Col lg={12} md={12} sm={12}>
                        <div className="section-title">
                            <div className="intro-area-inner">
                              <Container className="mt-5">
                                <Row>
                                  <Col lg={8} md={6} sm={8}>
                                    <h2 className="maintitle">
                                        This weeks specials!
                                    </h2>
                                  </Col>
                                  <Col lg={4} md={6} sm={4} style={{textAlign:'right'}}>
                                    {isSmallScreen ? (
                                        <Button
                                        className="topButton"
                                        type="button"
                                        variant="warning"
                                        style={{
                                          width: '126px',
                                          height: '49.37px',
                                          color: '#000000',
                                          backgroundColor: '#F4CE14',
                                          borderRadius: '16px',
                                          fontFamily: 'Sans-serif',
                                          fontWeight: '600',
                                          fontSize: '14px',
                                          marginTop: '-5em'
                                        }}
                                      >
                                        Online Menu
                                      </Button>
                                      ) : (
                                        <Button
                                          className="topButton"
                                          type="button"
                                          variant="warning"
                                          style={{
                                            width: '246px',
                                            height: '62.37px',
                                            color: '#000000',
                                            backgroundColor: '#F4CE14',
                                            borderRadius: '18px',
                                            fontFamily: 'Sans-serif',
                                            fontWeight: '700',
                                            fontSize: '20px',
                                          }}
                                        >
                                          Online Menu
                                        </Button>
                                      )}
                                  </Col>
                                </Row>
                              </Container>

                              <Container className="mt-2">
                                    <Row>
                                    {specials.map(({ image, name, price, description, subtitle, icon }) => (
                                        <Col lg={4} md={6} sm={12} key={name}>
                                            <img className="specialsImg" src={image} alt=""/>
                                            <Container className="specialsContent">
                                              <Row>
                                                <Col lg={8} md={8} sm={8}><h1 className="specialsName">{name}</h1></Col>
                                                <Col lg={4} md={4} sm={4}><p className="specialsPrice">${price.toFixed(2)}</p></Col>
                                              </Row>
                                              <Row>
                                                <Col lg={12}>
                                                  <p className="specialsDescription">{description}</p>
                                                </Col>
                                              </Row>
                                              <Row>
                                                <Col lg={8} md={8} sm={8}><h1 className="specialsSubtitle">{subtitle}</h1></Col>
                                                <Col lg={4} md={4} sm={4}><img className="specialsIcon" src={icon} alt="logo" /></Col>
                                              </Row>
                                            </Container>
                                        </Col>
                                    ))}
                                    </Row>
                              </Container>
                          </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  );
};
export default SpecialsSection;