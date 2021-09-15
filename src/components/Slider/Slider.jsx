import React from "react";

import "./Slider.scss";
import test1 from "../../images/test1.svg";
import test2 from "../../images/test2.svg";
import test3 from "../../images/test3.svg";
import { Container, Row, Col, Card, Image, Carousel } from "react-bootstrap";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import sliderData from "../Data/SliderData";

const Slider = () => {
  return (
    <>
      <section id="testimonial">
        <Container>
          <Row className="text-center">
            <Col>
              <div className="testHeading">
                <h2>Client Says</h2>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xl={8} className="mx-auto mt-5 pt-4">
              <Carousel fade>
                {sliderData.map((item) => (
                  <Carousel.Item interval={item.interval} key={item.id}>
                    <div className="testSlider">
                      <div className="testImg">
                        <Card className="text-center">
                          <Image src={item.imgSrc} fluid alt={item.name} />
                          <Card.Body>
                            <Card.Text>
                              <span className="quote">
                                <FaQuoteLeft />
                              </span>
                              {item.text}
                              <span className="quote">
                                <FaQuoteRight />
                              </span>
                            </Card.Text>
                            <Card.Title>{item.name}</Card.Title>
                          </Card.Body>
                        </Card>
                      </div>
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Slider;
