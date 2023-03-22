import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import apiClient from '../apiClient';
import { Col, Container, Row, Spinner, Tab, Tabs } from "react-bootstrap";
import BookCard from "../components/Cards/BookCard";
import AuthorCard from "../components/Cards/AuthorCard";
import LibraryCard from "../components/Cards/LibraryCard";

const ResultsPage = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const searchTerm = searchParams.get('q');
    const [results, setResults] = useState([]);
    const [loaded, setLoaded] = useState(false);
    console.log(`loaded: ${loaded}`);

    useEffect(() => {
        const getResults = async () => {
            // if (!loaded) {
                await apiClient
                    .get('search', {params: {search_term: searchTerm}})
                    .then((response) => {
                        setResults(response.data);
                        setLoaded(true);
                        console.log('api call');
                    })
                    .catch((err) => console.log(err));
            // }
        };
        getResults();
    },[searchTerm]);


    // Tabbed results based off https://gitlab.com/sarthaksirotiya/cs373-idb/-/blob/main/front-end/src/views/Search.jsx
    return (
        <Container>
            <h1>Search Results for "{searchTerm}"</h1>
            <Tabs defaultActiveKey="Books">
                <Tab eventKey="Books" title="Books">
                    <Row xl={5} lg={4} md={3} sm={2} xs={1}>
                        { loaded ? (
                            results["books"].map((bookData) => {
                                return (
                                    <Col key={bookData.id} className="flex-grow-0">
                                        <BookCard bookData={bookData}/>
                                    </Col>
                                )
                            })) : (
                                <Spinner animation="grow"/>
                        )}
                    </Row>
                </Tab>
                <Tab eventKey="Authors" title="Authors">
                    <Row xl={5} lg={4} md={3} sm={2} xs={1}>
                        { loaded ? (
                            results["authors"].map((authorData) => {
                                return (
                                    <Col key={authorData.id} className="flex-grow-0">
                                        <AuthorCard authorData={authorData}/>
                                    </Col>
                                )
                            })) : (
                            <Spinner animation="grow"/>
                        )}
                    </Row>
                </Tab>
                <Tab eventKey="Libraries" title="Libraries">
                    <Row xl={5} lg={4} md={3} sm={2} xs={1}>
                        { loaded ? (
                            results["libraries"].map((libraryData) => {
                                return (
                                    <Col key={libraryData.id} className="flex-grow-0">
                                        <LibraryCard libraryData={libraryData}/>
                                    </Col>
                                )
                            })) : (
                            <Spinner animation="grow"/>
                        )}
                    </Row>
                </Tab>
            </Tabs>
        </Container>
    );
};

export default ResultsPage;