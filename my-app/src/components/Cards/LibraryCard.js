import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const LibraryCard = (props) => {
  const { name, location, collection_size, facility, rating, id } = props.libraryData;
  return (
      <Card border="dark">
        <Card.Body>
          <Card.Title>Title: {name}</Card.Title>
          <Card.Text>Location: {location}</Card.Text>
          <Card.Text>Collection Size: {collection_size}</Card.Text>
          <Card.Text>Facility: {facility}</Card.Text>
          <Card.Text>Rating: {rating}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          <li>
            <Link to={`/library/`+id}>More info</Link>
          </li>
        </Card.Footer>
      </Card>
  );
};

export default LibraryCard;
