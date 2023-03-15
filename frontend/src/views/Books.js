import React, { useState, useEffect } from "react";
import BookCard from "../components/Cards/BookCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import apiClient from '../apiClient';
import PaginationComponent from '../components/navigation/PaginationComponent';


const PER_PAGE = 20
const NUM_ITEMS = 304
    

const Books = () => {
    const [books, setBooks] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [activePage, setActivePage] = useState(1);

    function handleClick(num) {
        setActivePage(num)
        setLoaded(false)
    }

      useEffect(() => {
        const getBooks = async() => {
            if (!loaded) {
                await apiClient
                  .get(`books`, {params: {page: activePage}})
                  .then((response) => {setBooks(response.data["books"])})
                  .catch((err) => console.log(err));
                setLoaded(true);
            }
        };
        getBooks();
    });

    let pageCount = Math.ceil(NUM_ITEMS / PER_PAGE)

    return (

        <Container className="p-4">
            <h1 className="d-flex justify-content-center p-4">Books</h1>
            <Container className="d-flex justify-content-center p-2">Displaying {books.length} out of {NUM_ITEMS}</Container>

            {/* Pagination */}
            <PaginationComponent activePage={activePage} pageCount={pageCount} onPageChange={handleClick} />

            {/* Card Grid */}
            <Container fluid>
                <Row xl={5} lg={4} md={3} sm={2} xs={1}>
                    { loaded ? (
                        books.map((bookData) => {
                            return ( 
                                <Col key={bookData.id} className="flex-grow-0">
                                    <BookCard bookData={bookData}/>
                                </Col>
                            )
                        })) : (<Spinner animation="grow"/>)}
                </Row>
            </Container>

            {/* Pagination */}
            <PaginationComponent activePage={activePage} pageCount={pageCount} onPageChange={handleClick} />
        </Container>
    );
};

export default Books;