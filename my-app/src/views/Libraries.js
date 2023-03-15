import React, {useEffect, useState} from "react";
import LibraryCard from "../components/Cards/LibraryCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import apiClient from '../apiClient';
import PaginationComponent from "../components/navigation/PaginationComponent";


const PER_PAGE = 20
const NUM_ITEMS = 80

const Libraries = () => {
    const [libraries, setLibraries] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [activePage, setActivePage] = useState(1);

    function handleClick(num) {
        setActivePage(num)
        setLoaded(false)
    }

    useEffect(() => {
        const getLibraries = async() => {
            if (!loaded) {
                await apiClient
                    .get(`libraries`, {params: {page: activePage}})
                    .then((response) => {setLibraries(response.data["libraries"])})
                    .catch((err) => console.log(err));
                setLoaded(true);
            }
        };
        getLibraries();
    });

    let pageCount = Math.ceil(NUM_ITEMS / PER_PAGE)



    return (
        <Container className="p-4">
            <h1 className="d-flex justify-content-center p-4">Libraries</h1>
            <Container className="d-flex justify-content-center p-2">Displaying {libraries.length} out of {NUM_ITEMS}</Container>

            {/* Pagination */}
            <PaginationComponent activePage={activePage} pageCount={pageCount} onPageChange={handleClick} />

            {/* Card Grid */}
            <Container fluid>
                <Row xl={5} lg={4} md={3} sm={2} xs={1}>
                    { loaded ? (
                        libraries.map((libraryData) => {
                            return (
                                <Col key={libraryData.id} className="flex-grow-0">
                                    <LibraryCard libraryData={libraryData}/>
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

export default Libraries;