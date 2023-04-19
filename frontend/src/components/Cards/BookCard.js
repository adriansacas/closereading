import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { highlightText } from "../../tools"
import {Col, Row} from "react-bootstrap";

const BookCard = (props) => {
    const { title, author, page_count, pub_year, genre, id, image_url } = props.bookData;
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
                    <Link to={`/books/${id}`}>
                        <Card.Img variant="top" src={image_url} className={`card-img${hovered ? ' card-img-hovered' : ''}`} />
                    </Link>
                </Col>
                <Col>
                    <Card.Body>
                        <Card.Title>
                            <Link to={`/books/${id}`} className={"text-link"}>
                                {highlightText(title, props.searchTerm)}
                            </Link>
                        </Card.Title>
                        {/* Render author only when there is an author. Useful for displaying the books an
                author has written since displaying the author within the author page is redundant. */}
                        {author && (<Card.Subtitle className="mb-3 text-muted">by {highlightText(author.name, props.searchTerm)}</Card.Subtitle>)}
                        <Card.Text className={"mb-1"}>{pub_year}</Card.Text>
                        <Card.Text className={"mb-1"}>{genre}</Card.Text>
                        <Card.Text className={"mb-1"}>{page_count} pages</Card.Text>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    );
};

export default BookCard;
