import React from 'react';
import { Container, Row } from 'react-bootstrap';

const Interior = () => {
  return (
    <>
    <section id="interior">
      <Container fluid className="interiorBanner p-0">
      <div>
          <Container>
            <Row>
              <h1 className="interiorTitle">
                indoor/outdoor
              </h1>
            </Row>
          </Container>
        </div>
      </Container>
      </section>
    </>
  );
};

export default Interior;
