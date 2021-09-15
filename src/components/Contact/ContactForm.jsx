import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./ContactForm.scss";
import { Form, Button } from "react-bootstrap";
// data
import contactFormData from "../Data/ContactFormData";

const ContactForm = () => {
  const [userInfo, setUserInfo] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
    message: "",
  });

  // After form submitted 👍
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setShowText(false);
    }, 7000);
  }, []);

  const eventChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `fName : ${userInfo.fName} lName : ${userInfo.lName} email : ${userInfo.email} password : ${userInfo.password} message : ${userInfo.message}`
    );
    // form submitted hide text 👍
    setShowText(true);
  };

  return (
    <>
      <section id="contactForm">
        <Container>
          <Row className="text-center">
            <Col xl={12}>
              <div className="contactHeading mb-5 pb-4">
                <h2>Get In Touch</h2>
              </div>
              <div className="socialIcons">
                <ul>
                  {contactFormData.map((data) => (
                    <li key={data.id}>
                      <a href={data.url} target={data.target}>
                        {data.icon}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xl={8} lg={8} md={9} sm={9} xs={9} className="mx-auto">
              <Form onSubmit={formSubmit}>
                <Row className="mb-3">
                  <Form.Group as={Col} xl={6} className="mb-4">
                    <Form.Control
                      type="text"
                      placeholder="First name"
                      name="fName"
                      value={userInfo.fName}
                      onChange={eventChange}
                    />
                  </Form.Group>

                  <Form.Group as={Col} xl={6} className="mb-4">
                    <Form.Control
                      type="text"
                      placeholder="Last name"
                      name="lName"
                      value={userInfo.lName}
                      onChange={eventChange}
                    />
                  </Form.Group>

                  <Form.Group as={Col} xl={12} className="mb-4">
                    <Form.Control
                      type="email"
                      placeholder="abc@gmail.com"
                      name="email"
                      value={userInfo.email}
                      onChange={eventChange}
                    />
                  </Form.Group>

                  <Form.Group as={Col} xl={12} className="mb-4">
                    <Form.Control
                      type="password"
                      placeholder="******"
                      name="password"
                      value={userInfo.password}
                      onChange={eventChange}
                    />
                  </Form.Group>

                  <Form.Group as={Col} xl={12}>
                    <Form.Control
                      name="message"
                      value={userInfo.message}
                      onChange={eventChange}
                      as="textarea"
                      placeholder=" Message "
                      style={{ height: "120px" }}
                    />
                  </Form.Group>
                </Row>
                {/* submit button */}
                <div className="mt-5 text-center">
                  <Button className="btn" type="submit">
                    Submit
                  </Button>
                </div>
                <div className="text-center mt-4">
                  <span>
                    {showText ? (
                      <strong className="text-success">
                        Form is submitted 👍
                      </strong>
                    ) : (
                      ""
                    )}
                  </span>
                </div>
              </Form>
            </Col>
            <Col xl={6}></Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ContactForm;
