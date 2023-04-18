import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { highlightText } from "../../tools"
import {Col, Row} from "react-bootstrap";

const LibraryCard = (props) => {
    const { name, address, zip_code, city, state, country, rating, id, image_url } = props.libraryData;
    const [hovered, setHovered] = React.useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };
    return (
        <Card border="light" className={"custom-card"} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Row>
                <Col sm={5}>
                    <Link to={`/libraries/${id}`}>
                        <Card.Img variant="top" src={image_url} className={`card-img${hovered ? ' card-img-hovered' : ''}`} />
                    </Link>
                </Col>
                <Col>
                    <Card.Body>
                        <Card.Title>
                            <Link to={`/libraries/${id}`} className={"text-link"}>
                                {highlightText(name, props.searchTerm)}
                            </Link>
                        </Card.Title>
                        <Card.Text className={"mb-0"}>
                            {highlightText(address, props.searchTerm)}
                        </Card.Text>
                        <Card.Text>
                            {highlightText(city, props.searchTerm)}, {' '}
                            {highlightText(state, props.searchTerm)} {' '}
                            {highlightText(zip_code, props.searchTerm)} {' '}
                            {highlightText(country, props.searchTerm)}
                        </Card.Text>
                        <Card.Text>Rating: {rating}</Card.Text>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    );
};

export default LibraryCard;
