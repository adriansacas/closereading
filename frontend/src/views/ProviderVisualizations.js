import React from 'react';
import Container from "react-bootstrap/Container";
import ProviderRatingsByState from "../components/visualizations/ProviderRatingsByState";
import ProviderMedicationsVsRoute from "../components/visualizations/MedicationsVsRoute";

const Visualizations = () => {
    return (
        <Container>
            <h1 className="d-flex justify-content-center p-4">Provider Visualizations</h1>
            <ProviderRatingsByState></ProviderRatingsByState>
            <ProviderMedicationsVsRoute></ProviderMedicationsVsRoute>
        </Container>
    );
};

export default Visualizations;