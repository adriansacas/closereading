import React, { useState, useEffect } from "react";
import BookCard from "../components/Cards/BookCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import FilterDropdown from "../components/navigation/FilterDropdown";
import {apiClient} from '../apiClient';
import { splitSearchTerms } from '../tools';
import PaginationComponent from '../components/navigation/PaginationComponent';
import SearchComponent from "../components/navigation/SearchComponent";
import { useLocation } from 'react-router-dom';
import Sorter from "./sort/Sort";
import { BookEndpointName, BookSortOptions } from './sort/BookOptions';

const Books = () => {
    const location = useLocation()
    const [books, setBooks] = useState([])
    const [pagination, setPagination] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [activePage, setActivePage] = useState(1);
    const [searchTerm, setSearchTerm] = useState(location.state?.searchTerm || '');
    const [sort, setSort] = useState("");
    const [ascending, setAscending] = useState(true);
    const [genre, setGenre] = useState("");
    const [numpages, setNumpages] = useState("");
    const [alpha, setAlpha] = useState("");
    const [genres, setGenres] = useState([]);
    const [initials, setInitials] = useState([]);


    function handleClick(num) {
        setActivePage(num);
        setLoaded(false);
    }

    function handleGenreFilter(value) {
        value = value === 'Genre' ? '' : value;
        setGenre(value);
    }

    function handleNumpagesFilter(value) {
        value = value === 'Numer of Pages' ? '' : value;
        setNumpages(value);
    }

    function handleAlphaFilter(value) {
        value = value === 'Title' ? '' : value;
        setAlpha(value);
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
        const getBooks = async() => {
            await apiClient
                .get(`books`, {params: {page: activePage, search_term: searchTerm, sortBy: sort, asc: ascending, genre_filter_term: genre, numpages_filter_term: numpages, alpha_filter_term: alpha}})
                .then((response) => {
                    setBooks(response.data["books"]);
                    setPagination(response.data["pagination"]);
                    setGenres(response.data['filters']['genres']);
                    setInitials(response.data['filters']['initials']);
                })
                .catch((err) => console.log(err));
            setLoaded(true);
        };
        getBooks();
    }, [searchTerm, activePage, sort, ascending, genre, numpages, alpha]);

    return (
        <Container className="p-4">
            <h1 className="d-flex justify-content-center p-4">Books</h1>

            {/* Search and filtering */}
            <Container className="d-flex justify-content-center p-4">
                <SearchComponent handleSearch={handleSearch} /></Container>
            <Sorter api_name={BookEndpointName} sortOptions={BookSortOptions} handleSort={handleSort} handleAscending={handleAscending}/>
            <Container className="d-flex justify-content-center p-4">
                <Row>
                    <Col>
                    <FilterDropdown
                    title="Genre"
                    items={genres}
                    onChange={handleGenreFilter}/></Col>

                    <Col>
                    <FilterDropdown
                    title="Number of Pages"
                    items={["< 100 pg", "100 - 199 pg", "200 - 299 pg", "300 - 399 pg", "400 > pg"]}
                    onChange={handleNumpagesFilter}/></Col>

                    <Col>
                    <FilterDropdown
                    title="Title"
                    items={initials}
                    onChange={handleAlphaFilter}/></Col>
                </Row>
            </Container>


            <Container className="d-flex justify-content-center p-2">Displaying {books.length} out of {pagination.total_items}</Container>

            {/* Pagination */}
            <PaginationComponent activePage={activePage} pageCount={pagination.total_pages} onPageChange={handleClick} />

            {/* Card Grid */}
            <Container fluid>
                <Row xl={3} lg={3} md={2} sm={2} xs={1}>
                    { loaded ? (
                        books.map((bookData) => {
                            return ( 
                                <Col key={bookData.id} className="d-flex align-self-stretch">
                                    <BookCard bookData={bookData} searchTerm={splitSearchTerms(searchTerm)} />
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

export default Books;