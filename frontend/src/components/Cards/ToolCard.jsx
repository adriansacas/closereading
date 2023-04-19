// Based on https://gitlab.com/sarthaksirotiya/cs373-idb/-/blob/822cd9f6a70d2084c31439a4aae2fd78fc3a7dd7/front-end/src/components/Cards/ToolCard.jsx
import React from "react";

import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";

const ToolCard = (props) => {
  const { title, image, description, link } = props.toolInfo;
  return (
      <Link to={link} className={"card-button"}>
          <Card border="light" className={"custom-card"}>
              <Card.Img className="p-4" variant="top" src={image} />
              <Card.Body>
                  <Card.Title>{title}</Card.Title>

                  <Card.Text>{description}</Card.Text>
              </Card.Body>
          </Card>
      </Link>
  );
};

export default ToolCard;
