import React from "react";
import { useParams } from "react-router-dom";
import libraryData from "../Libraries.json"
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import bookData from "../Books.json";
import BookCard from "../components/Cards/BookCard";
import authorData from "../Authors.json";
import AuthorCard from "../components/Cards/AuthorCard";

const Library = () => {
    const { id } = useParams();
    return (
        <Container fluid>
            <Row>
                <Col>
                    <h1 className="d-flex justify-content-center p-4 ">{libraryData[id - 1].name}</h1>
                    <div>Location: {libraryData[id - 1].location}</div>
                    <div>Collection Size: {libraryData[id - 1].collection_size}</div>
                    <div>Facility: {libraryData[id - 1].facility}</div>
                    <div>Rating: {libraryData[id - 1].rating}</div>
                    {/*<h5>Description:</h5>*/}
                    {/*<div>{libraryData[id -1].description}</div>*/}
                    <h5>Books</h5>
                    <Row md={3} className="p-4 g-4 justify-content-center">
                        {bookData.map((book) => {
                            return (
                                <Col>
                                    <BookCard bookData={book} />
                                </Col>
                            );
                        })}
                    </Row>
                    <h5>Authors</h5>
                    <Row md={3} className="p-4 g-4 justify-content-center">
                        {authorData.map((author) => {
                            return (
                                <Col>
                                    <AuthorCard authorData={author} />
                                </Col>
                            );
                        })}
                    </Row>
                </Col>
                <Col>
                    <img src={libraryData[id - 1].picture} alt="Library entrance." height="500"/>
                </Col>
            </Row>
        </Container>
    );
};

export default Library;
