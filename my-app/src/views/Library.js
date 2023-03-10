import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import BookCard from "../components/Cards/BookCard";
import AuthorCard from "../components/Cards/AuthorCard";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import {getPage} from "../tools"


const client = axios.create({
    baseURL: "http://localhost:4000",
});


const Library = () => {
    const { id } = useParams();
    const [library, setLibrary] = useState();
    const [books, setBooks] = useState();
    const [authors, setAuthors] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const getLibrary = async () => {
            if (library === undefined) {
                await client
                    .get(`libraries/${id}`)
                    .then((response) => {
                        setLibrary(response.data["data"]);
                    })
                    .catch((err) => console.log(err));
            }
            if (books === undefined) {
                await client
                    .get(`books`, {params: {page: id, perPage: 3}})
                    .then((response) => {
                        setBooks(response.data["books"]);
                    })
                    .catch((err) => console.log(err));
            }
            if (authors === undefined) {
                await client
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
                    <Col>
                        <h1 className="d-flex justify-content-center p-4 ">{library.name}</h1>
                        <div>Location: {library.address}, {library.zip_code} {library.city}, {library.state}, {library.country}
                        </div>
                        <div>Phone: {library.phone}</div>
                        {/*<div>Collection Size: {libraryData[0].collection_size}</div>*/}
                        {/*<div>Facility: {libraryData[0].facility}</div>*/}
                        <div>Rating: {library.rating}</div>
                        {/*<h5>Description:</h5>*/}
                        {/*<div>{libraryData[0].description}</div>*/}
                        <h5>Books</h5>
                        <Row md={3} className="p-4 g-4 justify-content-center">
                            {books.map((book) => {
                                return (
                                    <Col>
                                        <BookCard bookData={book} />
                                    </Col>
                                );
                            })}
                        </Row>
                        <h5>Authors</h5>
                        <Row md={3} className="p-4 g-4 justify-content-center">
                            {authors.map((author) => {
                                return (
                                    <Col>
                                        <AuthorCard authorData={author} />
                                    </Col>
                                );
                            })}
                        </Row>
                    </Col>
                    <Col>
                        <img src={library.image_url} alt="Library entrance." height="500"/>
                    </Col>
                </Row>
            ) : (
                <Spinner animation="grow" />
            )}
        </Container>
    );
};

export default Library;
