import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const AuthorCard = () => {
  return (
    <div>
      <Row md={10} className="p-4 g-4 justify-content-center">
        <Col>
          <Card border="dark">
            <Card.Body>
              <Card.Title>Name: AUTHOR 1</Card.Title>
              <Card.Text>Age: 1</Card.Text>
              <Card.Text>Gender: Male</Card.Text>
              <Card.Text>Ethnicity: ASDF</Card.Text>
              <Card.Text>Number of Publication: 1</Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
              <li>
                <Link to={`/author/1`}>More info</Link>
              </li>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card border="dark">
            <Card.Body>
              <Card.Title>Name: AUTHOR 2</Card.Title>
              <Card.Text>Age: 1</Card.Text>
              <Card.Text>Gender: Male</Card.Text>
              <Card.Text>Ethnicity: ASDF</Card.Text>
              <Card.Text>Number of Publication: 1</Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
              <li>
                <Link to="/author/2">More Info</Link>
              </li>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card border="dark">
            <Card.Body>
              <Card.Title>Name: AUTHOR 3</Card.Title>
              <Card.Text>Age: 1</Card.Text>
              <Card.Text>Gender: Male</Card.Text>
              <Card.Text>Ethnicity: ASDF</Card.Text>
              <Card.Text>Number of Publication: 1</Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
              <li>
                <Link to="/author/3">More Info</Link>
              </li>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default AuthorCard;
