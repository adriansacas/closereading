import React from "react";
import { useParams } from "react-router-dom";
import authorData from "../Authors.json"
import bookData from "../Books.json"
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import BookCard from "../components/Cards/BookCard";

const Author = () => {
    const { id } = useParams();
    return (
        <Container fluid>
            <Row>
                <Col>
                    <img src={authorData[id -1].portrait} alt="Author's portrait"/>
                </Col>
                <Col>
                    <h1 className="d-flex justify-content-center p-4 ">{authorData[id - 1].name}</h1>
                    <div>Age: {authorData[id - 1].age}</div>
                    <div>Nationality: {authorData[id - 1].nationality}</div>
                    <div>Gender: {authorData[id - 1].gender}</div>
                    <div>Number of publications: {authorData[id - 1].number_of_publications}</div>
                    <h5>Biography:</h5>
                    <div>{authorData[id -1].biography}</div>
                    <h5>Books</h5>
                    <Row md={2} className="p-4 g-4 justify-content-center">
                        {bookData.map((book) => {
                            if (book.id === authorData[id - 1].books[0]) {
                                return (
                                    <Col>
                                        <BookCard bookData={book}/>
                                    </Col>
                                );
                            }
                            return null;
                        })}
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Author;
