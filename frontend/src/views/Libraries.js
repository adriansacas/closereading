import React, {useEffect, useState} from "react";
import LibraryCard from "../components/Cards/LibraryCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import apiClient from '../apiClient';
import { splitSearchTerms } from '../tools';
import PaginationComponent from "../components/navigation/PaginationComponent";
import SearchComponent from "../components/navigation/SearchComponent";


const Libraries = () => {
    const [libraries, setLibraries] = useState([])
    const [pagination, setPagination] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [activePage, setActivePage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');

    function handleClick(num) {
        setActivePage(num);
        setLoaded(false);
    }

    useEffect(() => {
        const getLibraries = async() => {
                await apiClient
                    .get(`libraries`, {params: {page: activePage, search_term: searchTerm}})
                    .then((response) => {
                        setLibraries(response.data["libraries"]);
                        setPagination(response.data["pagination"]);
                    })
                    .catch((err) => console.log(err));
                setLoaded(true);
        };
        getLibraries();
    }, [searchTerm, activePage]);

    const handleSearch = (searchTerm) => {
        setSearchTerm(searchTerm);
    };

    return (
        <Container className="p-4">
            <h1 className="d-flex justify-content-center p-4">Libraries</h1>

            {/* Search and filtering */}
            <Container className="d-flex justify-content-center">
                <SearchComponent handleSearch={handleSearch} />
            </Container>

            <Container className="d-flex justify-content-center p-2">Displaying {libraries.length} out of {pagination.total_items}</Container>

            {/* Pagination */}
            <PaginationComponent activePage={activePage} pageCount={pagination.total_pages} onPageChange={handleClick} />

            {/* Card Grid */}
            <Container fluid>
                <Row xl={5} lg={4} md={3} sm={2} xs={1}>
                    { loaded ? (
                        libraries.map((libraryData) => {
                            return (
                                <Col key={libraryData.id} className="flex-grow-0">
                                    <LibraryCard libraryData={libraryData} searchTerm={splitSearchTerms(searchTerm)} />
                                </Col>
                            )
                        })) : (<Spinner animation="grow"/>)}
                </Row>
            </Container>

            {/* Pagination */}
            <PaginationComponent activePage={activePage} pageCount={pagination.total_pages} onPageChange={handleClick} />
        </Container>
    );
};

export default Libraries;