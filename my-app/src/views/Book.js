import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";
// import book from "../Books.json"
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
// import libraryData from "../Libraries.json";
// import LibraryCard from "../components/Cards/LibraryCard";
import Spinner from "react-bootstrap/Spinner";


const client = axios.create({
    baseURL: "http://localhost:4000",
});


const Book = () => {
    const { id } = useParams();
    const [book, setBook] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const getBook = async () => {
            if (book === undefined) {
                await client
                    .get(`books/${id}`)
                    .then((response) => {
                        setBook(response.data["data"]);
                    })
                    .catch((err) => console.log(err));
            }
            setLoaded(true);
            console.log(book);
        };
        getBook();
    }, [book]);

    return (
        <Container fluid>
        {loaded ? (
                <Row>
                    <Col>
                        <h1 className="d-flex justify-content-center p-4 ">{book.title}</h1>
                        <div>Author: <Link to={`/authors/`+ book.author.id}>{book.author.name}</Link></div>
                        <div>Pages: {book.page_count}</div>
                        <div>Year: {book.pub_year}</div>
                        <div>Genre: {book.genre}</div>
                        {/*<div>Publisher: {book.publisher}</div>*/}
                        {/*<div>NYT Best-Seller: {book[id - 1].NYT_best_seller}</div>*/}
                        <h5>Description:</h5>
                        <div>{book.description}</div>
                        <h5>Libraries</h5>
                        {/*<Row md={3} className="p-4 g-4 justify-content-center">*/}
                        {/*    {libraryData.map((library) => {*/}
                        {/*        return (*/}
                        {/*            <Col>*/}
                        {/*                <LibraryCard libraryData={library} />*/}
                        {/*            </Col>*/}
                        {/*        );*/}
                        {/*    })}*/}
                        {/*</Row>*/}
                    </Col>
                    <Col>
                        <img src={book.image_url} alt="Book cover."/>
                    </Col>
                </Row>
            ) : (
                <Spinner animation="grow" />
        )}
        </Container>
    );
};

export default Book;
