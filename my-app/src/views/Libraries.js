import React, {useEffect, useState} from "react";
import LibraryCard from "../components/Cards/LibraryCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import axios from "axios";
import Pagination from "react-bootstrap/Pagination";
import Spinner from "react-bootstrap/Spinner";


const client = axios.create({
    baseURL: "http://localhost:4000/",
});


const PER_PAGE = 20
const NUM_ITEMS = 80

const Libraries = () => {
    const [libraries, setLibraries] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [activePage, setActivePage] = useState(1);

    function handleClick(num) {
        console.log("clicked page", num)
        setActivePage(num)
        setLoaded(false)
    }

    useEffect(() => {
        const getLibraries = async() => {
            if (!loaded) {
                await client
                    .get(`libraries?page=${activePage}`)
                    .then((response) => {setLibraries(response.data["libraries"])})
                    .catch((err) => console.log(err));
                setLoaded(true);
            }
        };
        getLibraries();
    });

    let numPages = Math.ceil(NUM_ITEMS / PER_PAGE)
    let items = []
    for (let num = activePage - 2; num <= activePage + 2; num++) {
        if (num > 0 && num <= numPages) {
            items.push(
                <Pagination.Item
                    key={num}
                    onClick={() => handleClick(num)}
                    active={num === activePage}>
                    {num}
                </Pagination.Item>
            )
        }
    }



    return (

        <Container className="p-4">
            <h1 className="d-flex justify-content-center p-4">Libraries</h1>
            <Container className="d-flex justify-content-center p-2">Displaying {libraries.length} out of 80</Container>

            {/* Pagination */}
            <Pagination className="justify-content-center">
                {activePage > 3 && (
                    <Pagination.First
                        key={1}
                        onClick={() => handleClick(1)}
                        active={1 === activePage}>
                        1
                    </Pagination.First>
                )}
                {activePage > 4 && <Pagination.Ellipsis/>}
                {items}
                {activePage < numPages - 3 && <Pagination.Ellipsis />}
                {activePage < numPages - 2 && (
                    <Pagination.Last
                        key={numPages}
                        onClick={() => handleClick(numPages)}
                        active={numPages === activePage}>
                        {numPages}
                    </Pagination.Last>
                )}
            </Pagination>

            {/* Card Grid */}

            <Container style={{display: 'flex'}}>
                <Row
                    xl={5}
                    lg={4}
                    md={3}
                    sm={2}
                    xs={1}
                    className="d-flex g-0 p-0 justify-content-center">
                    { loaded ? (
                        libraries.map((library) => {
                            return (
                                <Col key={library.id} className = "d-flex align-self-stretch">
                                    <LibraryCard libraryData={library}/>

                                </Col>
                            )
                        })) : (<Spinner animation="grow"/>)}
                </Row>
            </Container>

            {/* Pagination */}
            <Pagination className="justify-content-center py-3">
                {activePage > 3 && (
                    <Pagination.First
                        key={1}
                        onClick={() => handleClick(1)}
                        active={1 === activePage}>
                        1
                    </Pagination.First>
                )}
                {activePage > 4 && <Pagination.Ellipsis/>}
                {items}
                {activePage < numPages - 3 && <Pagination.Ellipsis />}
                {activePage < numPages - 2 && (
                    <Pagination.Last
                        key={numPages}
                        onClick={() => handleClick(numPages)}
                        active={numPages === activePage}>
                        {numPages}
                    </Pagination.Last>
                )}
            </Pagination>

        </Container>
    );
};

export default Libraries;