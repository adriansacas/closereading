import React from "react";
import { useParams } from "react-router-dom";
import authorData from "../Authors.json"
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Author = () => {
    const { id } = useParams();
    return (
        <Container fluid>
            <Row>
                <Col>
                    <img src={authorData[id -1].portrait}/>
                </Col>
                <Col>
                    <h1 className="d-flex justify-content-center p-4 ">{authorData[id - 1].name}</h1>
                    <div>Age: {authorData[id - 1].age}</div>
                    <div>Nationality: {authorData[id - 1].nationality}</div>
                    <div>Gender: {authorData[id - 1].gender}</div>
                    <div>Number of publications: {authorData[id - 1].number_of_publications}</div>
                    <h5>Biography:</h5>
                    <div>{authorData[id -1].biography}</div>
                </Col>
            </Row>
        </Container>
    );
};

export default Author;
