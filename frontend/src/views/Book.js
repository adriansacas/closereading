import React, { useState, useEffect } from "react";
import {Link, useParams} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import LibraryCard from "../components/Cards/LibraryCard";
import Spinner from "react-bootstrap/Spinner";
import {getPage} from "../tools"
import {Image, ListGroup} from "react-bootstrap";
import {apiClient} from '../apiClient';
import { YouTubeEmbed } from 'react-social-media-embed'
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
        <Container>
            {loaded ? (
                <Col>
                    <Row className={"p-4"}>
                        <Col sm={3}>
                            <Image src={book.image_url} alt="Book cover." className={"instance-img"} />
                        </Col>
                        <Col>
                            <Row>
                                <Col>
                                    <h1>{book.title}</h1>
                                </Col>
                                <Col>
                                    <Dropdown>
                                        <Dropdown.Toggle id="dropdown-basic">Buy Book</Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href={`https://www.amazon.com/s?k=${book.title}&ref=nb_sb_noss`}>Amazon</Dropdown.Item>
                                            <Dropdown.Item href={`https://www.amazon.com/s?k=${book.title}&i=audible&tag=x_gr_w_bb_audible-20&ref=x_gr_w_bb_audible-20`}>Audible</Dropdown.Item>
                                            <Dropdown.Item href={`https://www.barnesandnoble.com/s/${book.title}`}>Barnes and Noble</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Col>
                            </Row>
                            <Row>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item>By <Link to={`/authors/${book.author.id}`} className={"text-link"}>{book.author.name}</Link></ListGroup.Item>
                                    <ListGroup.Item>Year: {book.pub_year}</ListGroup.Item>
                                    <ListGroup.Item>Pages: {book.page_count}</ListGroup.Item>
                                    <ListGroup.Item>Genre: {book.genre}</ListGroup.Item>
                                    <ListGroup.Item>
                                        <h5>Description:</h5>
                                        {book.description}
                                    </ListGroup.Item>
                                </ListGroup>
                            </Row>
                        </Col>
                    </Row>
                    <Row className={"justify-content-center align-items-center"}>
                        <YouTubeEmbed url={book.yt_review} width={"60%"} />
                    </Row>
                    <Row className={"p-4"}>
                        <Col>
                            <Row>
                                <h2>Libraries</h2>
                            </Row>
                            <Row xl={3} lg={3} md={2} sm={2} xs={1} className="p-4 g-4 justify-content-center">
                                {libraries.map((library) => {
                                    return (
                                        <Col>
                                            <LibraryCard libraryData={library} />
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

export default Book;
