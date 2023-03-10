import React from "react";
import BookCard from "../components/Cards/BookCard";
import Stack from "react-bootstrap/Stack";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
// import bookData from "../Books.json"
import Pagination from "react-bootstrap/Pagination";
import axios from "axios"
import { useState, useEffect } from "react"
import Spinner from "react-bootstrap/Spinner";

const client = axios.create({
    baseURL: "http://localhost:4000/",
  });
  
  const PER_PAGE = 20
  const NUM_BOOKS = 304
    

const Books = () => {
    const [books, setBooks] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [activePage, setActivePage] = useState(1);

    function handleClick(num) {
        console.log("clicked page", num)
        setActivePage(num)
        setLoaded(false)
    }

      useEffect(() => {
        const fetchBooks = async() => {
            if (!loaded) {
                await client
                  .get(`books?page=${activePage}`)
                  .then((response) => {setBooks(response.data["data"])})
                  .catch((err) => console.log(err));
                setLoaded(true);
            }
        };
        fetchBooks();
    }, [books, loaded]);

    let numPages = Math.ceil(NUM_BOOKS / PER_PAGE)
    let items = []
    for (let num = activePage - 2; num <= activePage + 2; num++) {
        if (num > 0 && num <= numPages) {
            items.push(
                <Pagination.Item
                    key={num}
                    onClick={() => handleClick(num)}
                    active={num === activePage}>
                        {num}
                </Pagination.Item>
            )
        }
    }

    

    return (

        <Container className="p-4">
            <h1 className="d-flex justify-content-center p-4 ">Books</h1>

            {/* Pagination */}
            <Pagination className="justify-content-center">
                {activePage > 3 && (
                <Pagination.First
                    key={1}
                    onClick={() => handleClick(1)}
                    active={1 === activePage}>
                    1
                </Pagination.First>
                )}
                {activePage > 4 && <Pagination.Ellipsis/>}
                {items}
                {activePage < numPages - 3 && <Pagination.Ellipsis />}
                {activePage < numPages - 2 && (
                <Pagination.Last
                    key={numPages}
                    onClick={() => handleClick(numPages)}
                    active={numPages === activePage}>
                    {numPages}
                </Pagination.Last>
                )}
            </Pagination>

            {/* Card Grid */}
            {/* <p>Showing {books.length} out of 282 instances</p> */}

            <Container style={{display: 'flex'}}>
                <Row
                xl={5}
                lg={4}
                md={3}
                sm={2}
                xs={1}
                className="d-flex g-0 p-0 justify-content-center">
                    { loaded ? (
                        books["data"].map((bookData) => {
                            return ( 
                                <Col key={bookData.id} className = "d-flex align-self-stretch">
                                    <BookCard bookData={bookData}/>
                                       
                                </Col>
                            )
                        })) : (<Spinner animation="grow"/>)}
                </Row>
            </Container>

            {/* Pagination */}
            <Pagination className="justify-content-center py-3">
                {activePage > 3 && (
                <Pagination.First
                    key={1}
                    onClick={() => handleClick(1)}
                    active={1 === activePage}>
                    1
                </Pagination.First>
                )}
                {activePage > 4 && <Pagination.Ellipsis/>}
                {items}
                {activePage < numPages - 3 && <Pagination.Ellipsis />}
                {activePage < numPages - 2 && (
                <Pagination.Last
                    key={numPages}
                    onClick={() => handleClick(numPages)}
                    active={numPages === activePage}>
                    {numPages}
                </Pagination.Last>
                )}
            </Pagination>
            
    </Container>


// id = {book.id}
// name = {book.title} 
// author = {book.author_id}
// number_of_pages = {book.page_count}
// publishing_year = {book.pub_year} 
// genre = {book.genre}/>

        // // <Stack>
        //     <Container className="p-4">
        //         <h1 className="d-flex justify-content-center p-4 ">Books</h1>


        //         {/* Pagination */}
        //         <Pagination className="justify-content-center">
        //             {activePage > 3 && (
        //             <Pagination.First
        //                 key={1}
        //                 onClick={() => handleClick(1)}
        //                 active={1 === activePage}>
        //                 1
        //             </Pagination.First>
        //             )}
        //             {activePage > 4 && <Pagination.Ellipsis/>}
        //             {items}
        //             {activePage < numPages - 3 && <Pagination.Ellipsis />}
        //             {activePage < numPages - 2 && (
        //             <Pagination.Last
        //                 key={numPages}
        //                 onClick={() => handleClick(numPages)}
        //                 active={numPages === activePage}>
        //                 {numPages}
        //             </Pagination.Last>
        //             )}
        //         </Pagination>





        //         <Row md={10} className="p-4 g-4 justify-content-center">
        //             {books.map((data) => {
        //                 return (
        //                     <Col>
        //                         <BookCard books={book} />
        //                     </Col>
        //                 );
        //             })}
        //         </Row>
        //     </Container>
        // // </Stack>
    );
};

export default Books;