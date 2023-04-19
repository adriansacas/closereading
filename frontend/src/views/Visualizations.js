import React from 'react';
import Container from "react-bootstrap/Container";
import AuthorsByInitial from '../components/visualizations/AuthorsByInitial';
import GenresCount from "../components/visualizations/GenresCount";

const Visualizations = () => {
    return (
        <Container>
            <h1 className="d-flex justify-content-center p-4">Visualizations</h1>
            <GenresCount></GenresCount>
            <AuthorsByInitial></AuthorsByInitial>
        </Container>
    );
};

export default Visualizations;