import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./WhatDo.scss";
import Common from "../WhatDoCommon/WhatDoCommon";
import whatDoCommonImg from "../../images/whatDoCommon.svg";
import { NavLink } from "react-router-dom";

const WhatDoCommon = ({ subTitle, title, text, imgSrc }) => {
  return (
    <>
      <section id="whatDo">
        <Container>
          <Row>
            <Col xl={12}>
              <div className="whatDoHeading text-center pb-5 my-5">
                <h2>What We Do</h2>
                <div className="underline"></div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col
              xl={6}
              lg={6}
              md={12}
              className="align-self-center mx-auto order-2 order-lg-1 mt-5 pt-5 mt-lg-0 pt-lg-0"
            >
              <div className="whatLeft">
                <span className="heroSubTitle fw-bold text-uppercase">
                  <NavLink to="/services" variant="light">
                    {subTitle}
                  </NavLink>
                </span>
                <div className="content">
                  <h2>{title}</h2>
                  <p>{text}</p>
                </div>
              </div>
            </Col>
            <Col
              xl={6}
              lg={6}
              md={8}
              className="align-self-center mx-auto order-1 order-lg-2"
            >
              <div className="whatRight">
                <Image src={imgSrc} fluid alt={subTitle} className="focusImg" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Common
        imgSrc={whatDoCommonImg}
        subTitle={"Developed Web Application"}
        title={"We Developed high quality web & application"}
        text={
          "Search Fulfilment Services Usa, Top Results From Trusted Resources. Search Fulfilment Services Usa, Get Expert Advice and Curated Content on Searchley."
        }
      />
    </>
  );
};

export default WhatDoCommon;
