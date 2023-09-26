import React from 'react';
import { Container, Row, Col  } from 'react-bootstrap';
import Header from '../components/Header';
import Interior from '../components/Interior';
import About from '../components/About';
import Footer from '../components/Footer';
  
const ConfirmedBookingPage = () => {
  return (
    <>
        <Header />
          <Container fluid className="notFoundBanner p-0">
              <div>
                <Container>
                    <Row> 
                      <Col lg={12} md={12} sm={12}>
                        <h4 className="notFoundTitle text-center">Your booking has been successfully confirmed!</h4>
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

export default ConfirmedBookingPage;