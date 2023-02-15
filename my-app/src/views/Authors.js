import React from "react";
import AuthorCard from "../components/Cards/AuthorCard";
import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import authorData from "../Authors.json";
import Col from "react-bootstrap/Col";


const Authors = () => {
    return (
        <Stack>
            <Container className="p-4">
                <h1 className="d-flex justify-content-center p-4 ">Authors</h1>
                <Row md={10} className="p-4 g-4 justify-content-center">
                    {authorData.map((author) => {
                        return (
                            <Col>
                                <AuthorCard authorData={author} />
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </Stack>
    );
};

export default Authors;