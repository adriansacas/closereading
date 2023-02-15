import React from "react";
import { useParams } from "react-router-dom";
import bookData from "../Books.json"
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Book = () => {
    const { id } = useParams();
    return (
        <Container fluid>
            <Row>
                <Col>
                    <h1 className="d-flex justify-content-center p-4 ">{bookData[id - 1].name}</h1>
                    <div>Author: {bookData[id - 1].author}</div>
                    <div>Pages: {bookData[id - 1].number_of_pages}</div>
                    <div>Year: {bookData[id - 1].publishing_year}</div>
                    <div>Publisher: {bookData[id - 1].publisher}</div>
                    <div>NYT Best-Seller: {bookData[id - 1].NYT_best_seller}</div>
                    <h5>Description:</h5>
                    <div>{bookData[id -1].description}</div>
                </Col>
                <Col>
                    <img src={bookData[id -1].cover}/>
                </Col>
            </Row>
        </Container>
    );
};

export default Book;
