import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import BookCard from "../components/Cards/BookCard";
import AuthorCard from "../components/Cards/AuthorCard";
import Spinner from "react-bootstrap/Spinner";
import {getPage} from "../tools"
import {Image} from "react-bootstrap";
import apiClient from '../apiClient';


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
        <Container fluid>
            {loaded ? (
                <Row>
                    <Col md={7} className="p-4">
                        <h1 className="text-center mb-4">{library.name}</h1>
                        <div className="mb-3">
                            <i className="fas fa-map-marker-alt me-2"></i>
                            {library.address}, {library.zip_code} {library.city}, {library.state}, {library.country}
                        </div>
                        <div className="mb-3">
                            <i className="fas fa-phone-alt me-2"></i>
                            {library.phone}
                        </div>
                        {/*<div>Collection Size: {libraryData[0].collection_size}</div>*/}
                        {/*<div>Facility: {libraryData[0].facility}</div>*/}
                        <div className="mb-3">
                            <i className="fas fa-star me-2"></i>
                            Rating: {library.rating}
                        </div>
                        {/*<h5>Description:</h5>*/}
                        {/*<div>{libraryData[0].description}</div>*/}
                        <h5 className="mb-3">Books</h5>
                        <Row md={3} className="p-4 g-4 justify-content-center">
                            {books.map((book) => {
                                return (
                                    <Col key={book.id} className="mb-4">
                                        <BookCard bookData={book} />
                                    </Col>
                                );
                            })}
                        </Row>
                        <h5 className="mb-3">Authors</h5>
                        <Row md={3} className="p-4 g-4 justify-content-center">
                            {authors.map((author) => {
                                return (
                                    <Col key={author.id} className="mb-4">
                                        <AuthorCard authorData={author} />
                                    </Col>
                                );
                            })}
                        </Row>
                    </Col>
                    <Col md={5} className="p-4">
                        <Image fluid src={library.image_url} alt="User submitted picture" className="mb-4" />
                        {/* <h5>Map</h5> */}
                        <iframe
                            height="450"
                            title="Library Google Map"
                            src={library.gmap}
                            allow="fullscreen"
                            className="mb-4"
                        />
                    </Col>
                </Row>
            ) : (
                <Spinner animation="grow" />
            )}
        </Container>
    );  
};

export default Library;
