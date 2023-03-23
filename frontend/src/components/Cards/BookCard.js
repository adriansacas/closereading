import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { highlightText } from "../../tools"

const BookCard = (props) => {
    const { title, author, page_count, pub_year, genre, id } = props.bookData;

    return (
        <Card border="dark">
            <Card.Body>
                <Card.Title>{highlightText(title, props.searchTerm)}</Card.Title>
                {/* Render author only when there is an author. Useful for displaying the books an
                author has written since displaying the author within the author page is redundant. */}
                {author && (<Card.Text>Author: {highlightText(author.name, props.searchTerm)}</Card.Text>)}
                <Card.Text>Pages: {page_count}</Card.Text>
                <Card.Text>Year: {pub_year}</Card.Text>
                <Card.Text>Genre: {genre}</Card.Text>
                {/*<Card.Text>Publisher: {publisher}</Card.Text>*/}
                {/*<Card.Text>NYT Best-Seller: {NYT_best_seller}</Card.Text>*/}
            </Card.Body>
            <Card.Footer className="text-muted">
                <li>
                    <Link to={`/books/`+id}>More info</Link>
                </li>
            </Card.Footer>
        </Card>
    );
};

export default BookCard;
