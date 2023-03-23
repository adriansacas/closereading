import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { highlightText } from "../../tools"

const LibraryCard = (props) => {
  const { name, address, zip_code, city, state, country, rating, id } = props.libraryData;
  return (
      <Card border="dark">
        <Card.Body>
          <Card.Title>{highlightText(name, props.searchTerm)}</Card.Title>
          <Card.Text>
              {highlightText(address, props.searchTerm)},
              {highlightText(zip_code, props.searchTerm)}
              {highlightText(city, props.searchTerm)},
              {highlightText(state, props.searchTerm)},
              {highlightText(country, props.searchTerm)}</Card.Text>
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
