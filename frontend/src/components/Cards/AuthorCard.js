import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { highlightText } from "../../tools"
import {Col, Row} from "react-bootstrap";

const AuthorCard = (props) => {
    const { name, description, id, image_url } = props.authorData;
    const [hovered, setHovered] = React.useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

  return (
      <Card border="light" className={"custom-card"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <Row>
              <Col sm={5}>
                  <Link to={`/authors/${id}`}>
                      <Card.Img variant="top" src={image_url} className={`card-img${hovered ? ' card-img-hovered' : ''}`} />
                  </Link>
              </Col>
              <Col>
                  <Card.Body>
                      <Card.Title>
                          <Link to={`/authors/${id}`} className={"text-link"}>
                              {highlightText(name, props.searchTerm)}
                          </Link>
                      </Card.Title>
                      <Card.Subtitle className="mb-3 text-muted">{description}</Card.Subtitle>
                  </Card.Body>
              </Col>
          </Row>
      </Card>
  );
};

export default AuthorCard;
