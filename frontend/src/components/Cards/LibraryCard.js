import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const LibraryCard = (props) => {
  const { name, address, zip_code, city, state, country, rating, id } = props.libraryData;
  return (
      <Card border="dark">
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{address}, {zip_code} {city}, {state}, {country}</Card.Text>
          {/*<Card.Text>Collection Size: {collection_size}</Card.Text>*/}
          <Card.Text>Rating: {rating}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          <li>
            <Link to={`/libraries/`+id}>More info</Link>
          </li>
        </Card.Footer>
      </Card>
  );
};

export default LibraryCard;
