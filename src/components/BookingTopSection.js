import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const BookingTopSection = () => {

  return (
    <>
      <Container fluid className="bookingBanner p-0">
        <div>
          <Container>
            <Row>
                <Col lg={12} md={12} sm={12}>
                    <h2 className="bookingTitle text-center" style={{filter: 'none'}}>Reserve a Table</h2>
                </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </>
  );
};

export default BookingTopSection;
