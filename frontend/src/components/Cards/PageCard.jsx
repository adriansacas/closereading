// Code pulled from: GeoJobs https://gitlab.com/sarthaksirotiya/cs373-idb/-/blob/main/front-end/src/components/Cards/PageCard.jsx
import React from "react";
import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";

const PageCard = (props) => {
  const {
    pageName,
    pageImage,
    pageDescription,
    pageLink
  } = props.pageInfo;
  return (
      <Link to={`${pageLink}`} className={"card-button"}>
          <Card className={"custom-card"}
              style= {{marginRight:30,
              }} >
              <Card.Img variant="top" src={pageImage} />
              <Card.Body>
                  <Card.Title>{pageName}</Card.Title>
                  <Card.Text>{pageDescription}</Card.Text>
              </Card.Body>
          </Card>
      </Link>
  );
};

export default PageCard;
