import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import BookCard from "../components/Cards/BookCard";
import Spinner from "react-bootstrap/Spinner";
import {getPage} from "../tools";
import LibraryCard from "../components/Cards/LibraryCard";
import {Image} from "react-bootstrap";
import apiClient from '../apiClient';
import {Hashtag} from 'react-twitter-widgets'


const Author = () => {
    const { id } = useParams();
    const [author, setAuthor] = useState();
    const [libraries, setLibraries] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const getAuthor = async () => {
            if (author === undefined) {
                await apiClient
                    .get(`authors/${id}`)
                    .then((response) => {
                        setAuthor(response.data["data"]);
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
        getAuthor();
    });

    return (
        <Container fluid>
            {loaded ? (
                <Col>
                    <Row>
                        <Col>
                            <Image fluid src={author.image_url} alt="Author's portrait"></Image>
                        </Col>
                        <Col>
                            <h1 className="d-flex justify-content-center p-4 ">{author.name}</h1>
                            {/*<div>Age: {author.age}</div>*/}
                            {/*<div>Nationality: {author.nationality}</div>*/}
                            {/*<div>Gender: {author.gender}</div>*/}
                            {/*<div>Number of publications: {author.number_of_publications}</div>*/}
                            <h5>Biography:</h5>
                            <div>{author.bio}</div>
                        </Col>
                        <Col className='py-3' xl={{ order: 'first'}}>
                            <Timeline
                                dataSource={{ sourceType: "url", url: "https://twitter.com/search?q=%23" + author.name.str.replace(/ /g, '') + "&src=recent_search_click" }}
                                renderError={_err =>""}
                                options={{ height: "650" }}/>
                        </Col>

                    </Row>
                    <Row>
                        <h5>Books</h5>
                            <Row md={2} className="p-4 g-4 justify-content-center">
                                {author.books.map((book) => {
                                        return (
                                            <Col>
                                                <BookCard bookData={book}/>
                                            </Col>
                                        );
                                })}
                            </Row>
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
                    </Row>
                </Col>
            ) : (
                <Spinner animation="grow" />
            )}
        </Container>
    );
};

export default Author;
