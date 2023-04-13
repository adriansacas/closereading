import React, {useEffect, useState} from "react";
import AuthorCard from "../components/Cards/AuthorCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import FilterDropdown from "../components/navigation/FilterDropdown";
import apiClient from '../apiClient';
import { splitSearchTerms } from '../tools';
import PaginationComponent from "../components/navigation/PaginationComponent";
import SearchComponent from "../components/navigation/SearchComponent";
import { useLocation } from 'react-router-dom'
import Sorter from "./sort/Sort";
import { AuthorEndpointName, AuthorSortOptions } from './sort/AuthorOptions';

const Authors = () => {
    const location = useLocation()
    const [authors, setAuthors] = useState([])
    const [pagination, setPagination] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [activePage, setActivePage] = useState(1);
    const [searchTerm, setSearchTerm] = useState(location.state?.searchTerm || '');
    const [sort, setSort] = useState("");
    const [ascending, setAscending] = useState(true);
    const [initial, setInitial] = useState("");
    const [initials, setInitials] = useState([]);
    const [countries, setCountries] = useState([])
    const [country, setCountry] = useState("");
    const [gender, setGender] = useState("");
    const [genders, setGenders] = useState([]);

    function handleClick(num) {
        setActivePage(num);
        setLoaded(false);
    }

    function handleInitialFilter(value) {
        value = value === 'Initial' ? '' : value;
        setInitial(value);
    }

    function handleCountryFilter(value) {
        value = value === 'Country' ? '' : value;
        setCountry(value);
    }

    function handleGenderFilter(value) {
        value = value === 'Gender' ? '' : value;
        setGender(value);
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
        const getAuthors = async() => {
            await apiClient
                .get(`authors`, {params: {page: activePage, search_term: searchTerm, sortBy: sort, asc: ascending, initial_filter_term: initial, country_filter_term: country, gender_filter_term: gender}})
                .then((response) => {
                    setAuthors(response.data["authors"]);
                    setPagination(response.data['pagination']);
                    setCountries(response.data['filters']['countries']);
                    setGenders(response.data['filters']['genders']);
                    setInitials(response.data['filters']['initials']);
                })
                .catch((err) => console.log(err));
            setLoaded(true);
        };
        getAuthors();
    }, [searchTerm, activePage, initial, country, gender, sort, ascending]);

    return (
        <Container className="p-4">
            <h1 className="d-flex justify-content-center p-4">Authors</h1>

            {/* Search and filtering */}
            <Container className="d-flex justify-content-center p-4">
                <SearchComponent handleSearch={handleSearch} />
            </Container>
            <Sorter api_name={AuthorEndpointName} sortOptions={AuthorSortOptions} handleSort={handleSort} handleAscending={handleAscending} />

            <Container className="d-flex justify-content-center">
                <Row>
                    <Col>
                        <FilterDropdown
                            title="First Initial"
                            items={initials}
                            onChange={handleInitialFilter}/>
                    </Col>
                    <Col>
                        <FilterDropdown
                            title="Country"
                            items={countries}
                            onChange={handleCountryFilter}/>
                    </Col>
                    <Col>
                        <FilterDropdown
                            title="Gender"
                            items={genders}
                            onChange={handleGenderFilter}/>
                    </Col>
                </Row>
            </Container>

            <Container className="d-flex justify-content-center p-2">Displaying {authors.length} out of {pagination.total_items}</Container>

            {/* Pagination */}
            <PaginationComponent activePage={activePage} pageCount={pagination.total_pages} onPageChange={handleClick} />

            {/* Card Grid */}
            <Container fluid>
                <Row xl={5} lg={4} md={3} sm={2} xs={1}>
                    { loaded ? (
                        authors.map((authorData) => {
                            return (
                                <Col key={authorData.id} className="flex-grow-0">
                                    <AuthorCard authorData={authorData} searchTerm={splitSearchTerms(searchTerm)} />
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

export default Authors;