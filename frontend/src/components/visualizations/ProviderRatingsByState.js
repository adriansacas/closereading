import React, {useEffect, useState} from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import {apiClientProvider} from "../../apiClient";
import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";

const RatingsByState = () => {
    const [data, setData] = useState([]);
    const [avgRatingsByState, setAvgRatingsByState] = useState([]);


    useEffect(() => {
        const getData = async() => {
            await apiClientProvider
                .get(`locations`)
                .then((response) => {
                    setData(response.data);
                })
                .catch((err) => console.log(err));
        };
        getData();
    }, []);


    useEffect(() => {
        const processData = () => {
            const stateRegex = /([A-Z]{2})\s+\d{5}/;
            //     group the locations by state and compute the avg rating
            const groupedData = data.reduce((acc, curr) => {
                const match = curr.address.match(stateRegex);
                const state = match ? match[1] : 'unknown';
                if (!acc[state]) {
                    acc[state] = { totalRating: 0, count: 0 };
                }
                acc[state].totalRating += curr.rating;
                acc[state].count += 1;
                return acc;
            }, {});

            const ratings = Object.keys(groupedData)
                .map(state => {
                    const { totalRating, count } = groupedData[state];
                    const avgRating = totalRating / count;
                    return { state, avg_rating: Math.round(avgRating * 100) / 100 };
                })
                .sort((a, b) => b.avg_rating - a.avg_rating);
            setAvgRatingsByState(ratings);
        }
        processData();
    }, [data]);


    return (
        <Stack className="d-flex justify-content-center p-4">
            <h3 className="d-flex justify-content-center p-4">Average Location Rating by State</h3>
            <Container className="d-flex justify-content-center p-4">
                <BarChart width={800} height={400} data={avgRatingsByState}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="state" interval={0}  />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="avg_rating" name="Average Rating" fill="#006595" />
                </BarChart>
            </Container>
        </Stack>
    );
};

export default RatingsByState;
