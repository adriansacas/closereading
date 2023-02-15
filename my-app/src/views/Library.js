import React from "react";
import { useParams } from "react-router-dom";
import libraryData from "../Libraries.json"
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

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
                </Col>
                <Col>
                    <img src={libraryData[id -1].picture} height="500"/>
                </Col>
            </Row>
        </Container>
    );
};

export default Library;
