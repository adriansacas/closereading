import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from "react-bootstrap/Container";
import AuthorsByGender from '../components/visualizations/AuthorsByGender';
import AuthorsByInitial from '../components/visualizations/AuthorsByInitial';
import GenresCount from "../components/visualizations/GenresCount";
import { Col } from 'react-bootstrap';

const Visualizations = () => {
    return (
        <Container>
            <h1 className="d-flex justify-content-center p-4">Visualizations</h1>
            <GenresCount></GenresCount>
            <Row>
                <Col>
                <AuthorsByGender></AuthorsByGender>
                </Col>
                <Col>
                <AuthorsByInitial></AuthorsByInitial>
                </Col>
            </Row>
        
        </Container>
    );
};

export default Visualizations;