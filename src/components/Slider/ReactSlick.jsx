import React from "react";

import "./Slider.scss";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import sliderData from "../Data/SliderData";
// React Slick 👍
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ReactSlick = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

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
            <Col
              xl={8}
              lg={9}
              md={11}
              sm={11}
              xs={11}
              className="mx-auto mt-5 pt-4"
            >
              <Slider className="testSlider" {...settings}>
                {sliderData.map((item) => (
                  <div className="testImg" key={item.id}>
                    <Card className="text-center">
                      <Image src={item.imgSrc} alt={item.name} fluid />
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
                ))}
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ReactSlick;
