import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import BookCard from "../components/Cards/BookCard";
import Spinner from "react-bootstrap/Spinner";
import {getPage} from "../tools";
import LibraryCard from "../components/Cards/LibraryCard";
import {Image, ListGroup} from "react-bootstrap";
import {apiClient} from '../apiClient';
import {Timeline, Tweet} from 'react-twitter-widgets'


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
        <Container>
            {loaded ? (
                <Col>
                    <Row className={"p-4"}>
                        <Col sm={3}>
                            <Image src={author.image_url} alt="Author's portrait" className={"instance-img"} />
                        </Col>
                        <Col>
                            <Row>
                                <h1>{author.name}</h1>
                            </Row>
                            <Row>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item>Country: {author.country}</ListGroup.Item>
                                    <ListGroup.Item>Born: {author.birth_year}</ListGroup.Item>
                                    {author.death_year && (<ListGroup.Item>Died: {author.death_year}</ListGroup.Item>)}
                                    <ListGroup.Item>Age: {author.age}</ListGroup.Item>
                                    <ListGroup.Item>Gender: {author.gender}</ListGroup.Item>
                                    <ListGroup.Item>
                                        <h5>Biography:</h5>
                                        {author.bio}
                                    </ListGroup.Item>
                                </ListGroup>
                            </Row>
                        </Col>
                        <Col>
                            {`${author.twitter}`.match(/^\d/) ? (
                                <Tweet tweetId={author.twitter} />
                            ) : (
                                <Timeline
                                    dataSource={{
                                        sourceType: "url",
                                        url: `https://twitter.com/${author.twitter}`,
                                    }}
                                    renderError={(_err) => ""}
                                    options={{ height: "650" }}
                                />
                            )}
                        </Col>
                    </Row>
                    <Row className={"p-4"}>
                        <Col>
                            <Row>
                                <h2>Books</h2>
                            </Row>
                            <Row xl={3} lg={3} md={2} sm={2} xs={1} className="p-4 g-4 justify-content-center">
                                {author.books.map((book) => {
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

export default Author;
