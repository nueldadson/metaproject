import React from 'react';
import { Container, Row } from 'react-bootstrap';
import CustomScroll from './CustomScroll';

const TestimonialsSection = () => {
  return (
    <>
    <section id="testimonials">
      <Container fluid className="testimonialBanner p-0">
        <div>
          <Container className="testimonial">
            <Row>
              <h1 className="testimonialTitle text-center pt-5">
                Testimonials
              </h1>
            </Row>

            <Row>
                <CustomScroll />
            </Row>
          </Container>
        </div>
      </Container>
      </section>
    </>
  );
};

export default TestimonialsSection;
