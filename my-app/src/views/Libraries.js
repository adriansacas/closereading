import React from "react";
import LibraryCard from "../components/Cards/LibraryCard";
import Stack from "react-bootstrap/Stack";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import libraryData from "../Libraries.json"


const Books = () => {
    return (
        <Stack>
            <Container className="p-4">
                <h1 className="d-flex justify-content-center p-4 ">Books</h1>
                <Row md={10} className="p-4 g-4 justify-content-center">
                    {libraryData.map((library) => {
                        return (
                            <Col>
                                <LibraryCard libraryData={library} />
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </Stack>
    );
};

export default Books;