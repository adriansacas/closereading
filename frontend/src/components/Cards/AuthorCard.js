import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const AuthorCard = (props) => {
  const { name, description, id } = props.authorData;
  return (
      <Card border="dark">
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          {/*<Card.Text>Nationality: {nationality}</Card.Text>*/}
          {/*<Card.Text>Gender: {gender}</Card.Text>*/}
          {/*<Card.Text>Publications: {number_of_publications}</Card.Text>*/}
        </Card.Body>
        <Card.Footer className="text-muted">
          <li>
            <Link to={`/authors/`+id}>More info</Link>
          </li>
        </Card.Footer>
      </Card>
  );
};

export default AuthorCard;
