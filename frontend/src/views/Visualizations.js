import React, {useEffect, useState} from 'react';
import Container from "react-bootstrap/Container";
import BarChartComponent from "../components/visualizations/BarChart";
import apiClient from "../apiClient";

const Visualizations = () => {
    const [genres, setGenres] = useState(1);

    useEffect(() => {
        const getBooks = async() => {
            await apiClient
                .get(`visualizations`, {params: {kind: 'genre'}})
                .then((response) => {
                    setGenres(response.data["genre"]);
                })
                .catch((err) => console.log(err));
        };
        getBooks();
    }, []);

    return (
        <Container>
            <h1 className="d-flex justify-content-center p-4">Visualizations</h1>
            <h2 className="d-flex justify-content-center p-4">Top 10 Book Genres</h2>
            <Container className="d-flex justify-content-center p-4">
                <BarChartComponent data={genres} width={800} height={400}></BarChartComponent>
            </Container>
        </Container>
    );
};

export default Visualizations;