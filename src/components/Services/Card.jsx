import React from "react";
import { Card } from "react-bootstrap";

const MainCard = ({ imgSrc, title, text }) => {
  return (
    <>
      <Card className="shadow p-2">
        <Card.Img variant="top" src={imgSrc} fluid />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default MainCard;
