import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const BookCard = (props) => {
  const { name, author, number_of_pages, publishing_year, publisher, NYT_best_seller, id } = props.bookData;
  return (
      <Card border="dark">
        <Card.Body>
          <Card.Title>Title: {name}</Card.Title>
          <Card.Text>Author: {author}</Card.Text>
          <Card.Text>Pages: {number_of_pages}</Card.Text>
          <Card.Text>Year: {publishing_year}</Card.Text>
          <Card.Text>Publisher: {publisher}</Card.Text>
          <Card.Text>NYT Best-Seller: {NYT_best_seller}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          <li>
            <Link to={`/book/`+id}>More info</Link>
          </li>
        </Card.Footer>
      </Card>
  );
};

export default BookCard;