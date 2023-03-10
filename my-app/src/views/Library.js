import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
// import BookCard from "../components/Cards/BookCard";
// import AuthorCard from "../components/Cards/AuthorCard";
import axios from "axios";


const client = axios.create({
    baseURL: "http://localhost:4000",
});


const Library = () => {
    const { id } = useParams();
    const [library, setLibrary] = useState();
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
            setLoaded(true);
            if (loaded) {console.log('loaded')}
        };
        getLibrary();
    }, [library]);
    return (
        <Container fluid>
            <Row>
                <Col>
                    <h1 className="d-flex justify-content-center p-4 ">{library[0].name}</h1>
                    <div>Location: {library[0].address}, {library[0].zip_code} {library[0].city}, {library[0].state}, {library[0].country}
                    </div>
                    <div>Phone: {library[0].phone}</div>
                    {/*<div>Collection Size: {libraryData[0].collection_size}</div>*/}
                    {/*<div>Facility: {libraryData[0].facility}</div>*/}
                    <div>Rating: {library[0].rating}</div>
                    {/*<h5>Description:</h5>*/}
                    {/*<div>{libraryData[id -1].description}</div>*/}
                    <h5>Books</h5>
                    {/*<Row md={3} className="p-4 g-4 justify-content-center">*/}
                    {/*    {bookData.map((book) => {*/}
                    {/*        return (*/}
                    {/*            <Col>*/}
                    {/*                <BookCard bookData={book} />*/}
                    {/*            </Col>*/}
                    {/*        );*/}
                    {/*    })}*/}
                    {/*</Row>*/}
                    <h5>Authors</h5>
                    {/*<Row md={3} className="p-4 g-4 justify-content-center">*/}
                    {/*    {authorData.map((author) => {*/}
                    {/*        return (*/}
                    {/*            <Col>*/}
                    {/*                <AuthorCard authorData={author} />*/}
                    {/*            </Col>*/}
                    {/*        );*/}
                    {/*    })}*/}
                    {/*</Row>*/}
                </Col>
                <Col>
                    <img src={library[0].image_url} alt="Library entrance." height="500"/>
                </Col>
            </Row>
        </Container>
    );
};

export default Library;
