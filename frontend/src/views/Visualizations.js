import React from 'react';
import Container from "react-bootstrap/Container";
import GenresVisualizationComponent from "../components/visualizations/GenresVisualizationComponent";

const Visualizations = () => {
    return (
        <Container>
            <h1 className="d-flex justify-content-center p-4">Visualizations</h1>
            <GenresVisualizationComponent></GenresVisualizationComponent>
        </Container>
    );
};

export default Visualizations;