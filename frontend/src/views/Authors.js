import React, {useEffect, useState} from "react";
import AuthorCard from "../components/Cards/AuthorCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import apiClient from '../apiClient';
import PaginationComponent from "../components/navigation/PaginationComponent";


const PER_PAGE = 20
const NUM_ITEMS = 69

const Authors = () => {
    const [authors, setAuthors] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [activePage, setActivePage] = useState(1);

    function handleClick(num) {
        setActivePage(num)
        setLoaded(false)
    }

    useEffect(() => {
        const getAuthors = async() => {
            if (!loaded) {
                await apiClient
                    .get(`authors`, {params: {page: activePage}})
                    .then((response) => {setAuthors(response.data["authors"])})
                    .catch((err) => console.log(err));
                setLoaded(true);
            }
        };
        getAuthors();
    });

    let pageCount = Math.ceil(NUM_ITEMS / PER_PAGE)

    return (
        <Container className="p-4">
            <h1 className="d-flex justify-content-center p-4">Authors</h1>
            <Container className="d-flex justify-content-center p-2">Displaying {authors.length} out of {NUM_ITEMS}</Container>

            {/* Pagination */}
            <PaginationComponent activePage={activePage} pageCount={pageCount} onPageChange={handleClick} />

            {/* Card Grid */}
            <Container fluid>
                <Row xl={5} lg={4} md={3} sm={2} xs={1}>
                    { loaded ? (
                        authors.map((authorData) => {
                            return (
                                <Col key={authorData.id} className="flex-grow-0">
                                    <AuthorCard authorData={authorData}/>
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

export default Authors;