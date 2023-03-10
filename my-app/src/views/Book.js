import React from "react";
import {Link, useParams} from "react-router-dom";
import bookData from "../Books.json"
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import libraryData from "../Libraries.json";
import LibraryCard from "../components/Cards/LibraryCard";

const Book = () => {
    const { id } = useParams();
    return (
        <Container fluid>
            <Row>
                <Col>
                    <h1 className="d-flex justify-content-center p-4 ">{bookData[id - 1].name}</h1>
                    <div>Author: <Link to={`/authors/`+id}>{bookData[id - 1].author}</Link></div>
                    <div>Pages: {bookData[id - 1].number_of_pages}</div>
                    <div>Year: {bookData[id - 1].publishing_year}</div>
                    <div>Publisher: {bookData[id - 1].publisher}</div>
                    <div>NYT Best-Seller: {bookData[id - 1].NYT_best_seller}</div>
                    <h5>Description:</h5>
                    <div>{bookData[id -1].description}</div>
                    <h5>Libraries</h5>
                    <Row md={3} className="p-4 g-4 justify-content-center">
                        {libraryData.map((library) => {
                            return (
                                <Col>
                                    <LibraryCard libraryData={library} />
                                </Col>
                            );
                        })}
                    </Row>
                </Col>
                <Col>
                    <img src={bookData[id -1].cover} alt="Book cover."/>
                </Col>
            </Row>
        </Container>
    );
};

export default Book;
