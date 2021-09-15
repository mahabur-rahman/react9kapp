import React from "react";
import "./WhatDoCommon.scss";
import { Container, Row, Col, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Common = ({ imgSrc, subTitle, title, text }) => {
  return (
    <>
      <section id="whatDoCommon">
        <Container>
          <Row>
            <Col xl={6} lg={6} className="align-self-center d-none d-lg-block">
              <div className="whatDoCommonRight p-5">
                <Image src={imgSrc} fluid alt={subTitle} className="pt-5" />
              </div>
            </Col>
            <Col xl={6} lg={6} className="align-self-center">
              <div className="whatDoCommonLeft">
                <span className="heroSubTitle fw-bold text-uppercase">
                  <NavLink to="/services" variant="light">
                    {subTitle}
                  </NavLink>
                </span>
                <div className="content">
                  <h2>{title}</h2>
                  <p className="mt-4 mt-lg-0">{text}</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Common;
