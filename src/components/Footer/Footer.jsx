import React from "react";
import "./Footer.scss";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebookF,
  FaTwitter,
  FaDribbble,
  FaLinkedinIn,
  FaArrowAltCircleUp,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

// data
import footerData from "../Data/FooterData";

const Footer = () => {
  const name = " Mahabur Rahman";
  const date = new Date().getFullYear();

  return (
    <>
      <footer id="footer">
        <Container>
          <Row>
            <Col xl={12}>
              <div className="footerContent d-flex justify-content-between align-self-center">
                <div className="footerLeft">
                  <p>
                    &copy; copyright and all rights reserved {date}. Developed
                    by
                    <NavLink to="/contact"> {name}</NavLink>
                  </p>
                </div>
                <div className="footerRight mt-3 mt-lg-0">
                  <p>Reach out to me via 🙂</p>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xl={8} className="mx-auto text-center mt-5 align-self-center">
              <div className="footerSocialIcons">
                <ul className="list-inline">
                  {footerData.map((data) => (
                    <li className="list-inline-item" key={data.id}>
                      <a href={data.url} target={data.target} className="mx-3">
                        {data.socialIcon}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
        {/* up arrow */}
        <div className="arrow">
          <a href="#header">
            <FaArrowAltCircleUp />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
