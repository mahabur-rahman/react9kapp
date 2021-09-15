import React from "react";
import "./About.scss";
import { Container, Row, Col, Image } from "react-bootstrap";
import rocket from "../../images/rocket.png";
import human from "../../images/human.svg";
import hand from "../../images/hand.svg";

const AboutSection = () => {
  return (
    <>
      <section id="aboutSection">
        <Container>
          <Row>
            <Col xl={10} lg={12} className="mx-auto">
              <Row>
                <Col xl={6} lg={6} md={6} sm={10}>
                  <div className="aboutLeft">
                    <div className="heading">
                      <h2 className="mb-5">About Us</h2>
                    </div>
                    <div className="aboutImg">
                      <Image
                        src={rocket}
                        fluid
                        alt="Rocket"
                        className="animatedRocket"
                      />
                    </div>
                  </div>
                </Col>
                <Col xl={6} lg={6} md={6}>
                  <div className="aboutRight">
                    <div className="humanImg text-end mb-4">
                      <Image src={human} fluid alt="Human" />
                    </div>
                    <p>
                      We help our customers to tell about themselves, to
                      <span className="fw-bold"> grow and stand out</span> in an
                      increasingly competitive digital world.
                    </p>
                    <div className="handImg">
                      <Image
                        src={hand}
                        alt="Hand"
                        fluid
                        className="d-none d-xl-block"
                      />
                    </div>
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

export default AboutSection;
