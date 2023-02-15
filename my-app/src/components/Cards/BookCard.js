import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const BookCard = () => {
  return (
    <div>
      <Row md={10} className="p-4 g-4 justify-content-center">
        <Col>
          <Card border="dark">
            <Card.Body>
              <Card.Title>Title: BOOK 1</Card.Title>
              <Card.Text>Author: ASDF</Card.Text>
              <Card.Text>Number of Pages: 1</Card.Text>
              <Card.Text>Publisher: ASDF</Card.Text>
              <Card.Text>NYT Best-Seller: YES</Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
              <li>
                <Link to={`/book/1`}>More info</Link>
              </li>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card border="dark">
            <Card.Body>
              <Card.Title>Title: BOOK 2</Card.Title>
              <Card.Text>Author: ASDF</Card.Text>
              <Card.Text>Number of Pages: 1</Card.Text>
              <Card.Text>Publisher: ASDF</Card.Text>
              <Card.Text>NYT Best-Seller: YES</Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
              <li>
                <Link to="/book/2">More Info</Link>
              </li>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card border="dark">
            <Card.Body>
              <Card.Title>Title: BOOK 3</Card.Title>
              <Card.Text>Author: ASDF</Card.Text>
              <Card.Text>Number of Pages: 1</Card.Text>
              <Card.Text>Publisher: ASDF</Card.Text>
              <Card.Text>NYT Best-Seller: YES</Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
              <li>
                <Link to="/book/3">More Info</Link>
              </li>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default BookCard;
