import React, { useState } from "react";
import "./Hero.scss";
import heroMain from "../../images/heroMain.svg";
import { Container, Row, Col, Spinner, Image } from "react-bootstrap";
import { FaAngleRight, FaChevronRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Hero = () => {
  const [hover, setHover] = useState(true);
  const toggle = () => {
    setHover(!hover);
  };

  return (
    <>
      <section id="heroSection">
        <Container>
          <Row>
            <Col xl={10} lg={12} className="mx-auto">
              <Row>
                <Col
                  xl={6}
                  lg={6}
                  md={12}
                  className="align-self-center mx-auto order-2 order-lg-1 mt-5 mt-lg-0"
                >
                  <div className="heroLeft">
                    <div variant="primary">
                      <Spinner as="span" animation="grow" size="sm" />
                      <span className="heroSubTitle">We build web</span>
                    </div>
                    <div className="content">
                      <h2>Transforming your digital presence</h2>
                      <p>
                        We help fast growing companies build award winning
                        websites
                      </p>

                      <div className="mt-5">
                        <NavLink
                          to="/contact"
                          onMouseEnter={toggle}
                          onMouseLeave={toggle}
                        >
                          Get In Touch
                          <span className="mx-1">
                            {hover ? <FaAngleRight /> : <FaChevronRight />}
                          </span>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col
                  className="align-self-center mx-auto order-1 order-lg-2"
                  xl={6}
                  lg={6}
                  md={8}
                >
                  <div className="heroRight">
                    <Image
                      src={heroMain}
                      fluid
                      alt="Hero Image"
                      className="animatedHeroImg"
                    />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Hero;
