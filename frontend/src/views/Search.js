import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import apiClient from '../apiClient';
import { Col, Container, Row, Spinner, Tab, Tabs } from "react-bootstrap";
import BookCard from "../components/Cards/BookCard";
import AuthorCard from "../components/Cards/AuthorCard";
import LibraryCard from "../components/Cards/LibraryCard";
import {splitSearchTerms} from "../tools";

const ResultsPage = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const searchTerm = searchParams.get('q');
    const [results, setResults] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [activeTab, setActiveTab] = useState('');

    // TODO: Cache and get on tab switching / pagination
    // When activeTab changes: trigger useEffect
    //     If the search result for the newly active tab haven't been loaded: fetch from api
    //     Need to have a loaded per tab
    // PAGINATION:
    // When activePage changes: trigger useEffect
    //     Always fetch active tab search results from api
    //     Need to have an activePage per tab to remember the page

    useEffect(() => {
        const getResults = async () => {
            await apiClient
                .get('search', {params: {search_term: searchTerm}})
                .then((response) => {
                    setResults(response.data);
                    setLoaded(true);
                    console.log('api call');
                    console.log(response.data);
                })
                .catch((err) => console.log(err));
        };
        getResults();
    },[searchTerm]);

    useEffect(() => {
        // TODO: query API according to the current tab
    }, [activeTab]);

    const handleTabChange = (eventKey) => {
        setActiveTab(eventKey);
        console.log(`Tab: ${eventKey}`);
    };


    // Tabbed results based off https://gitlab.com/sarthaksirotiya/cs373-idb/-/blob/main/front-end/src/views/Search.jsx
    return (
        <Container>
            <h1>Search Results for "{searchTerm}"</h1>
            <Tabs defaultActiveKey="books" onSelect={handleTabChange}>
                <Tab eventKey="books" title="Books">
                    <Row xl={5} lg={4} md={3} sm={2} xs={1}>
                        { loaded ? (
                            results["books_data"]["books"].map((bookData) => {
                                return (
                                    <Col key={bookData.id} className="flex-grow-0">
                                        <BookCard bookData={bookData} searchTerm={splitSearchTerms(searchTerm)} />
                                    </Col>
                                )
                            })) : (
                                <Spinner animation="grow"/>
                        )}
                    </Row>
                </Tab>
                <Tab eventKey="authors" title="Authors">
                    <Row xl={5} lg={4} md={3} sm={2} xs={1}>
                        { loaded ? (
                            results["authors_data"]["authors"].map((authorData) => {
                                return (
                                    <Col key={authorData.id} className="flex-grow-0">
                                        <AuthorCard authorData={authorData} searchTerm={splitSearchTerms(searchTerm)} />
                                    </Col>
                                )
                            })) : (
                            <Spinner animation="grow"/>
                        )}
                    </Row>
                </Tab>
                <Tab eventKey="libraries" title="Libraries">
                    <Row xl={5} lg={4} md={3} sm={2} xs={1}>
                        { loaded ? (
                            results["libraries_data"]["libraries"].map((libraryData) => {
                                return (
                                    <Col key={libraryData.id} className="flex-grow-0">
                                        <LibraryCard libraryData={libraryData} searchTerm={splitSearchTerms(searchTerm)} />
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