import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import BookCard from "../components/Cards/BookCard";
import AuthorCard from "../components/Cards/AuthorCard";
import Spinner from "react-bootstrap/Spinner";
import {getPage} from "../tools"
import {Image, ListGroup} from "react-bootstrap";
import {apiClient} from '../apiClient';


const Library = () => {
    const { id } = useParams();
    const [library, setLibrary] = useState();
    const [books, setBooks] = useState();
    const [authors, setAuthors] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const getLibrary = async () => {
            if (library === undefined) {
                await apiClient
                    .get(`libraries/${id}`)
                    .then((response) => {
                        setLibrary(response.data["data"]);
                    })
                    .catch((err) => console.log(err));
            }
            if (books === undefined) {
                await apiClient
                    .get(`books`, {params: {page: id, perPage: 3}})
                    .then((response) => {
                        setBooks(response.data["books"]);
                    })
                    .catch((err) => console.log(err));
            }
            if (authors === undefined) {
                await apiClient
                    .get(`authors`, {params: {page: getPage(1, 24), perPage: 3}})
                    .then((response) => {
                        setAuthors(response.data["authors"]);
                    })
                    .catch((err) => console.log(err));
            }
            setLoaded(true);
            console.log(getPage(1, 24));
        };
        getLibrary();
    });

    return (
        <Container>
            {loaded ? (
                <Col>
                    <Row className={"p-4"} md={2} sm={1} xs={1}>
                        <Col>
                            <Image src={library.image_url} alt="User submitted picture" className={"instance-img"} />
                        </Col>
                        <Col>
                            <Row>
                                <h1>{library.name}</h1>
                            </Row>
                            <Row>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item>{library.address}, {library.zip_code} {library.city}, {library.state}, {library.country}</ListGroup.Item>
                                    <ListGroup.Item>{library.phone}</ListGroup.Item>
                                    <ListGroup.Item>Rating: {library.rating}</ListGroup.Item>
                                </ListGroup>
                            </Row>
                            <Row className={"pt-2"}>
                                <iframe
                                    height="450"
                                    title="Library Google Map"
                                    src={library.gmap}
                                    allow="fullscreen"
                                />
                            </Row>
                        </Col>
                    </Row>
                    <Row className={"p-4"}>
                        <Col>
                            <Row>
                                <h2>Books</h2>
                            </Row>
                            <Row xl={3} lg={3} md={2} sm={2} xs={1} className="p-4 g-4 justify-content-center">
                                {books.map((book) => {
                                    return (
                                        <Col>
                                            <BookCard bookData={book} />
                                        </Col>
                                    );
                                })}
                            </Row>
                        </Col>
                    </Row>
                    <Row className={"p-4"}>
                        <Col>
                            <Row>
                                <h2>Authors</h2>
                            </Row>
                            <Row xl={3} lg={3} md={2} sm={2} xs={1} className="p-4 g-4 justify-content-center">
                                {authors.map((author) => {
                                    return (
                                        <Col>
                                            <AuthorCard authorData={author} />
                                        </Col>
                                    );
                                })}
                            </Row>
                        </Col>
                    </Row>
                </Col>
            ) : (
                <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                    <Spinner animation="grow" />
                </div>
            )}
        </Container>
    );
};

export default Library;
