import React from "react";
import BookCard from "../components/Cards/BookCard";
import Stack from "react-bootstrap/Stack";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import bookData from "../Books.json"


const Books = () => {
    return (
        <Stack>
            <Container className="p-4">
                <h1 className="d-flex justify-content-center p-4 ">Books</h1>
                <Row md={10} className="p-4 g-4 justify-content-center">
                    {bookData.map((book) => {
                        return (
                            <Col>
                                <BookCard bookData={book} />
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </Stack>
    );
};

export default Books;