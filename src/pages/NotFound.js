import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Interior from '../components/Interior';
import About from '../components/About';
import Footer from '../components/Footer';
import notFound from '../assets/not-found.avif';
  
const NotFound = () => {
  return (
    <>
      <Header />
        <Container fluid className="notFoundBanner p-0">
            <div>
              <Container>
                  <Row> 
                    <Col lg={6} md={6} sm={12}>
                      <img className="notFoundImg text-center" src={notFound} alt="notfound" />
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                      <h4 className="notFoundTitle text-center">The Page does not exist! <Link to="/" style={{color: '#F4CE14', textDecoration: 'none'}}>Go Home.</Link></h4>
                    </Col>
                  </Row>
              </Container>
            </div>
          </Container>
      <About />
      <Interior />
      <Footer />
    </>
  );
};

export default NotFound;