import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
// import BookCard from "../components/Cards/BookCard";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";


const client = axios.create({
    baseURL: "http://localhost:4000",
});


const Author = () => {
    const { id } = useParams();
    const [author, setAuthor] = useState();
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
            setLoaded(true);
        };
        getAuthor();
    }, [author]);

    return (
        <Container fluid>
            {loaded ? (
                <Row>
                    <Col>
                        <img src={author[0].image_url} alt="Author's portrait"/>
                    </Col>
                    <Col>
                        <h1 className="d-flex justify-content-center p-4 ">{author[0].name}</h1>
                        {/*<div>Age: {author[0].age}</div>*/}
                        {/*<div>Nationality: {author[0].nationality}</div>*/}
                        {/*<div>Gender: {author[0].gender}</div>*/}
                        {/*<div>Number of publications: {author[0].number_of_publications}</div>*/}
                        <h5>Biography:</h5>
                        <div>{author[0].bio}</div>
                        <h5>Books</h5>
                        {/*<Row md={2} className="p-4 g-4 justify-content-center">*/}
                        {/*    {bookData.map((book) => {*/}
                        {/*        if (book.id === author[0].books[0]) {*/}
                        {/*            return (*/}
                        {/*                <Col>*/}
                        {/*                    <BookCard bookData={book}/>*/}
                        {/*                </Col>*/}
                        {/*            );*/}
                        {/*        }*/}
                        {/*        return null;*/}
                        {/*    })}*/}
                        {/*</Row>*/}
                    </Col>
                </Row>
            ) : (
                <Spinner animation="grow" />
            )}
        </Container>
    );
};

export default Author;
