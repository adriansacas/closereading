import React from 'react';
import { useLocation } from 'react-router-dom';
import Container from "react-bootstrap/Container";

const ResultsPage = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const searchTerm = searchParams.get('q');

    // Call an API to get the results
    // const results = ...

    return (
        <Container>
            <h1>Search Results for "{searchTerm}"</h1>
            {/* Display the search results */}
        </Container>
    );
};

export default ResultsPage;