import React from "react";
import "./ServicesSection.scss";
// data
import servicesSectionData from "../Data/ServicesSectionData";
import { Container, Row, Col } from "react-bootstrap";
import MainCard from "./Card";

const ServicesSection = () => {
  return (
    <>
      <section id="servicesSection">
        <Container>
          <Row className="text-center">
            <Col xl={12} className="mx-auto">
              <div className="servicesTitle">
                <h2>Our Services</h2>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xl={10} className="mx-auto">
              <Row className="gy-4">
                {servicesSectionData.map((card) => (
                  <Col
                    xl={4}
                    lg={6}
                    md={6}
                    sm={10}
                    key={card.id}
                    className="mx-auto"
                  >
                    <MainCard {...card} />
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ServicesSection;
