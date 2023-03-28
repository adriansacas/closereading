import React, { useState, useEffect } from "react";
import {Link, useParams} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import LibraryCard from "../components/Cards/LibraryCard";
import Spinner from "react-bootstrap/Spinner";
import {getPage} from "../tools"
import {Image} from "react-bootstrap";
import apiClient from '../apiClient';
import Dropdown from 'react-bootstrap/Dropdown';


const Book = () => {
    const { id } = useParams();
    const [book, setBook] = useState();
    const [libraries, setLibraries] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const getBook = async () => {
            if (book === undefined) {
                await apiClient
                    .get(`books/${id}`)
                    .then((response) => {
                        setBook(response.data["data"]);
                    })
                    .catch((err) => console.log(err));
            }
            if (libraries === undefined) {
                await apiClient
                    .get(`libraries`, {params: {page: getPage(1, 26), perPage: 3}})
                    .then((response) => {
                        setLibraries(response.data["libraries"]);
                    })
                    .catch((err) => console.log(err));
            }
            setLoaded(true);
        };
        getBook();
    });

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
                        <Row md={3} className="p-4 g-4 justify-content-center">
                            {libraries.map((library) => {
                                return (
                                    <Col>
                                        <LibraryCard libraryData={library} />
                                    </Col>
                                );
                            })}
                        </Row>
                    </Col>
                    <Col>
                        <Image fluid src={book.image_url} alt="Book cover."></Image>
                    </Col> 
                    <Row>
                    <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Buy Book
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href={`https://www.amazon.com/s?k=${book.title}&ref=nb_sb_noss`}>Amazon</Dropdown.Item>
                        <Dropdown.Item href={`https://www.amazon.com/s?k=${book.title}&i=audible&tag=x_gr_w_bb_audible-20&ref=x_gr_w_bb_audible-20`}>Audible</Dropdown.Item>
                        <Dropdown.Item href={`https://www.barnesandnoble.com/s/${book.title}`}>Barnes and Noble</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
                    </Row>
                </Row>
            ) : (
                <Spinner animation="grow" />
        )}
        </Container>
    );
};

export default Book;
