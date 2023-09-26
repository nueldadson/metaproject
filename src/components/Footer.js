import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../assets/logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Footer = () => {

  return (
    <>
     <section id="footer">
      <Container fluid className="footerFixedBanner p-0">
        <div>
          <Container>
            <Row>
                <Col lg={1}></Col>
                <Col lg={2} md={3} sm={6}>
                  <img className="footerImg mt-5" src={logo} alt="restaurant logo"
                  />
                </Col>
                <Col lg={1}></Col>
                <Col lg={2} md={3} sm={6}>
                    <h2 className="footerTitle mt-5">Menu</h2>
                    <ul className="footerLinks">
                      <li>Home</li>
                      <li>About</li>
                      <li>Menu</li>
                      <li>Reservations</li>
                      <li>Order Online</li>
                      <li>Login</li>
                    </ul>
                </Col>
                <Col lg={2} md={3} sm={6}>
                <h2 className="footerTitle mt-5">Contact</h2>
                    <ul className="footerLinks">
                      <li>Chicago, Illinois</li>
                      <li>Phone: 815-582-5830</li>
                      <li>contact@littlelemon.com</li>
                    </ul>
                </Col>
                <Col lg={2} md={3} sm={6}>
                <h2 className="footerTitle mt-5">Social Media</h2>
                    <ul className="footerLinks">
                      <li>Facebook</li>
                      <li>Twitter</li>
                      <li>Instagram</li>
                      <li>Pinterest</li>
                      <li>Youtube</li>
                    </ul>
                </Col>
                <Col lg={1}></Col>
            </Row>
            <Row className=" fontIcon text-center pt-5">
              <Col lg={12} md={12} sm={12}>
                  <HStack spacing={16} justifyContent="center">
                  {socials.map(({ icon, url }) => (
                  <a 
                    key={url}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon 
                      key={url}
                      icon={icon}
                      size="2x"
                    />
                  </a>
                  ))}
                  </HStack>
              </Col>
            </Row>
            <Row className="text-center pt-5">
              <Col lg={12} md={12} sm={12}>
                <p className="copyright">Copyright. Little Lemon Website. 2023</p>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
      </section>
    </>
  );
};

export default Footer;
