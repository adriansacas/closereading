import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const AuthorCard = (props) => {
  const { name, age, nationality, gender, number_of_publications, id } = props.authorData;
  return (
      <Card border="dark">
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>Age: {age}</Card.Text>
          <Card.Text>Nationality: {nationality}</Card.Text>
          <Card.Text>Gender: {gender}</Card.Text>
          <Card.Text>Publications: {number_of_publications}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          <li>
            <Link to={`/author/`+id}>More info</Link>
          </li>
        </Card.Footer>
      </Card>
  );
};

export default AuthorCard;
