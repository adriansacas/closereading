// Code pulled from: GeoJobs https://gitlab.com/sarthaksirotiya/cs373-idb/-/blob/main/front-end/src/views/Home.jsx

import React from "react";
import Background from "../assets/home-page.jpeg";
import Container from "react-bootstrap/Container";
import { pageInfo } from "../static/PageInfo";
import PageCard from "../components/Cards/PageCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
  return (
    <div className="main-home" >
      <div
        className="bg d-flex justify-content-center"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
          width: "100%",
          height: "80vh",
        }}
      >
        <h1
          className="bg-text"
          style={{
            color: '#f4f1de',
            justifyContent: "center",
            alignItems: "center",
            // backgroundPositionY: "1500",
            marginTop: "250px",
          }}
        >
         <center>Explore books, research authors, and discover more at your local library. </center> 
        </h1>
      </div>
      <Container className="p-4">
        <h1 className="d-flex justify-content-center p-4">Where to next?</h1>
        <Row>
          {pageInfo.map((page) => {
            return (
              <Col key={page.pageName}>
                <PageCard key={page.pageName} pageInfo={page} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
