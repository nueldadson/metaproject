import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import chef from '../assets/chef b.jpg';
import chefs from '../assets/MarioAdrianb.jpg';

const About = () => {
  return (
    <>
      <section id="about">
        <Container fluid className="aboutBanner p-0">
          <div>
          <Container>
              <Row>
                    <Col lg={1}></Col>
                    <Col lg={6} md={6} sm={12}>
                      <article>
                        <h2 className="aboutTitle pt-4">Little Lemon</h2>
                        <p className="aboutSubTitle">Chicago</p>
                        <p className="aboutSubContent">
                        Lorem Ipsum is simply dummy text
                        of the printing and typesetting industry.
                        Lorem Ipsum has been the industry.
                        Lorem Ipsum is simply dummy text
                        of the printing and typesetting industry.
                        Lorem Ipsum has been the industry.</p>
                      </article>
                    </Col>
                    <Col className="imageStack" lg={4} md={4} sm={12}>
                        <img className="aboutImg" src={chef} alt="chefs" />
                        <img className="aboutImg2" src={chefs} alt="chefs" />
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

export default About;
