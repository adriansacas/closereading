import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import BookCard from "../components/Cards/BookCard";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import {getPage} from "../tools";
import LibraryCard from "../components/Cards/LibraryCard";


const client = axios.create({
    baseURL: "http://localhost:4000",
});


const Author = () => {
    const { id } = useParams();
    const [author, setAuthor] = useState();
    const [libraries, setLibraries] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const getAuthor = async () => {
            if (author === undefined) {
                await client
                    .get(`authors/${id}`)
                    .then((response) => {
                        setAuthor(response.data["data"]);
                    })
                    .catch((err) => console.log(err));
            }
            if (libraries === undefined) {
                await client
                    .get(`libraries`, {params: {page: getPage(1, 26), perPage: 3}})
                    .then((response) => {
                        setLibraries(response.data["libraries"]);
                    })
                    .catch((err) => console.log(err));
            }
            setLoaded(true);
        };
        getAuthor();
    }, [author]);

    return (
        <Container fluid>
            {loaded ? (
                <Row>
                    <Col>
                        <img src={author.image_url} alt="Author's portrait"/>
                    </Col>
                    <Col>
                        <h1 className="d-flex justify-content-center p-4 ">{author.name}</h1>
                        {/*<div>Age: {author.age}</div>*/}
                        {/*<div>Nationality: {author.nationality}</div>*/}
                        {/*<div>Gender: {author.gender}</div>*/}
                        {/*<div>Number of publications: {author.number_of_publications}</div>*/}
                        <h5>Biography:</h5>
                        <div>{author.bio}</div>
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
                    </Col>
                </Row>
            ) : (
                <Spinner animation="grow" />
            )}
        </Container>
    );
};

export default Author;
