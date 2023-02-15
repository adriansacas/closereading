import React from "react";

import Card from "react-bootstrap/Card";

const APICard = (props) => {
  const { title, image, description, link } = props.apiInfo;

  return (
    <Card>
      <Card.Img className="p-4" variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>

        <Card.Text>{description}</Card.Text>
        <Card.Link href={link}>{link}</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default APICard;
