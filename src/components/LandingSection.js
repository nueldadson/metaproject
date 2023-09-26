import React, {useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import restaurantfood from '../assets/restaurantfood.jpg';

const LandingSection = () => {
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
      <section id="landing-section">
        <Container fluid className="topFixedBanner p-0" id="/">
          <div>
            <Container>
              <Row>
                  <Col lg={1}></Col>
                  <Col lg={6} md={6} sm={12}>
                      <h2 className="topTitle pt-4">Little Lemon</h2>
                      <p className="topSubTitle">Chicago</p>
                      <p className="topSubContent">
                          We are a family owned Mediterranean
                          restaurant, focused on traditional
                          recipes served with a modern twist.</p>
                        {isSmallScreen ? (
                            <Button
                            className="topButton text-center"
                            type="button"
                            variant="warning"
                            style={{
                              position: 'relative',
                              left: '80px',
                              width: '176px',
                              height: '49.37px',
                              color: '#000000',
                              backgroundColor: '#F4CE14',
                              borderRadius: '18px',
                              fontFamily: 'Sans-serif',
                              fontWeight: '600',
                              fontSize: '14px',
                            }}
                          >
                            Reserve a Table
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
                              Reserve a Table
                            </Button>
                          )}
                  </Col>
                  <Col lg={4} md={4} sm={12}>
                      <img className="topImg" src={restaurantfood} alt="logo" />
                  </Col>
                  <Col lg={1}></Col>
              </Row>
            </Container>
          </div>
        </Container>
      </section>
    </>
  );
};

export default LandingSection;
