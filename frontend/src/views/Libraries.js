import React, {useEffect, useState} from "react";
import LibraryCard from "../components/Cards/LibraryCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import FilterDropdown from "../components/navigation/FilterDropdown";
import apiClient from '../apiClient';
import { splitSearchTerms } from '../tools';
import PaginationComponent from "../components/navigation/PaginationComponent";
import SearchComponent from "../components/navigation/SearchComponent";
import { useLocation } from 'react-router-dom'
import Sorter from "./sort/Sort";
import { LibraryEndpointName, LibrarySortOptions } from './sort/LibraryOptions';


const Libraries = () => {
    const location = useLocation()
    const [libraries, setLibraries] = useState([]);
    const [pagination, setPagination] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [activePage, setActivePage] = useState(1);
    const [searchTerm, setSearchTerm] = useState(location.state?.searchTerm || '');
    const [sort, setSort] = useState("");
    const [ascending, setAscending] = useState(true);
    const [city, setCity] = useState("");
    const [alpha, setAlpha] = useState("");
    const [rating, setRating] = useState("");
    const [cities, setCities] = useState([]);

    function handleClick(num) {
        setActivePage(num);
        setLoaded(false);
    }

    function handleCityFilter(value) {
        value = value === 'City' ? '' : value;
        setCity(value);
    }

    function handleAlphaFilter(value) {
        value = value === 'Name Begins With' ? '' : value;
        setAlpha(value);
    }

    function handleRatingFilter(value) {
        value = value === 'Rating' ? '' : value;
        setRating(value);
    }

    const handleSearch = (searchTerm) => {
        setSearchTerm(searchTerm);
    };

    const handleSort = (sortBy) => {
        setSort(sortBy);
    };

    const handleAscending = (ascending) => {
        setAscending(ascending);
    };

    useEffect(() => {
        const getLibraries = async() => {
                await apiClient
                    .get(`libraries`, {params: {page: activePage, search_term: searchTerm, sortBy: sort, asc: ascending, city_filter_term: city, alpha_filter_term: alpha, rating_filter_term: rating}})
                    .then((response) => {
                        setLibraries(response.data["libraries"]);
                        setPagination(response.data["pagination"]);
                        setCities(response.data['cities']);
                    })
                    .catch((err) => console.log(err));
                setLoaded(true);
        };
        getLibraries();
    }, [searchTerm, activePage, city, alpha, rating, sort, ascending]);

    return (
        <Container className="p-4">
            <h1 className="d-flex justify-content-center p-4">Libraries</h1>

            {/* Search and filtering */}
            <Container className="d-flex justify-content-center p-4">
                <SearchComponent handleSearch={handleSearch} />
            </Container>
            <Sorter api_name={LibraryEndpointName} sortOptions={LibrarySortOptions} handleSort={handleSort} handleAscending={handleAscending}/>

            <Container className="d-flex justify-content-center">
            <Row>
                <Col>
                    <FilterDropdown
                    title="City"
                    items={cities}
                    onChange={handleCityFilter}/>
                </Col>

                <Col>
                <FilterDropdown
                title="Name Begins With"
                items={["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P",
                "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]}
                onChange={handleAlphaFilter}/></Col>

                <Col>
                <FilterDropdown
                title="Rating"
                items={["< 1 star", "1 - 2 stars", "2 - 3 stars", "3 - 4 stars", "4 - 5 stars"]}
                onChange={handleRatingFilter}/></Col>

            </Row></Container>


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