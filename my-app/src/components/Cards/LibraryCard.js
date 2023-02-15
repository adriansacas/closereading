import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const LibraryCard = () => {
  return (
    <div>
      <Row md={10} className="p-4 g-4 justify-content-center">
        <Col>
          <Card border="dark">
            <Card.Body>
              <Card.Title>Library Name:LIBRARY 1</Card.Title>
              <Card.Text>Location: ASDF</Card.Text>
              <Card.Text>Size of Collection: 1</Card.Text>
              <Card.Text>Rating: 1</Card.Text>
              <Card.Text>University Library: NO</Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
              <li>
                <Link to={`/library/1`}>More info</Link>
              </li>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card border="dark">
            <Card.Body>
              <Card.Title>Library Name:LIBRARY 2</Card.Title>
              <Card.Text>Location: ASDF</Card.Text>
              <Card.Text>Size of Collection: 1</Card.Text>
              <Card.Text>Rating: 1</Card.Text>
              <Card.Text>University Library: NO</Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
              <li>
                <Link to="/library/2">More Info</Link>
              </li>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card border="dark">
            <Card.Body>
              <Card.Title>Library Name:LIBRARY 3</Card.Title>
              <Card.Text>Location: ASDF</Card.Text>
              <Card.Text>Size of Collection: 1</Card.Text>
              <Card.Text>Rating: 1</Card.Text>
              <Card.Text>University Library: NO</Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
              <li>
                <Link to="/library/3">More Info</Link>
              </li>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default LibraryCard;
