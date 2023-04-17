import React, {useEffect, useState} from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, PieChart } from 'recharts';
import apiClient from "../../apiClient";
import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";
import PagesVsYear from "./PagesVsYear";

const GenresVisualizationComponent = () => {
    const [genres, setGenres] = useState(1);

    useEffect(() => {
        const getBooks = async() => {
            await apiClient
                .get(`visualizations`, {params: {kind: 'genres'}})
                .then((response) => {
                    setGenres(response.data["genres"]);
                })
                .catch((err) => console.log(err));
        };
        getBooks();
    }, []);

    return (
        <Stack className="d-flex justify-content-center p-4">
            <h3 className="d-flex justify-content-center p-4">Top 10 Book Genres</h3>
            <Container className="d-flex justify-content-center p-4">
                <BarChart width={800} height={400} data={genres} margin={{bottom: 150}}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" angle={-45} textAnchor="end" interval={0}  />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#66797A" />
                </BarChart>
            </Container>
            <PagesVsYear></PagesVsYear>
        </Stack>
    );
};

export default GenresVisualizationComponent;
