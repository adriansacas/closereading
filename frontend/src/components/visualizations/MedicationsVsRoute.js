import React, {useEffect, useState} from 'react';
import {PieChart, Pie, Tooltip, Cell} from 'recharts';
import {apiClientProvider} from "../../apiClient";
import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";

const COLORS = ['#840032', '#006595', '#E59500', '#48A9A6', '#D88C9A'];

const MedicationsVsRoute = () => {
    const [data, setData] = useState([]);
    const [routeCounts, setRouteCounts] = useState([]);

    function processData() {
        const groupedData = data.reduce((acc, curr) => {
            const t_route = curr.route;
            if (!acc[t_route]) {
                acc[t_route] = { count: 0 };
            }
            acc[t_route].count += 1;
            return acc;
        }, {});


        const ratings = Object.keys(groupedData)
            .map(t_route => {
                const { count } = groupedData[t_route];
                return { t_route, count };
            });
        setRouteCounts(ratings);
    }


    useEffect(() => {
        const getData = async() => {
            await apiClientProvider
                .get(`treatments`)
                .then((response) => {
                    setData(response.data);
                })
                .catch((err) => console.log(err));
        };
        getData();
    }, []);


    useEffect(() => {
        processData();
    }, [data]);


    return (
        <Stack className="d-flex justify-content-center p-4">
            <h3 className="d-flex justify-content-center p-4">Counts of Treatment Application Route</h3>
            <Container className="d-flex justify-content-center p-4">
                <PieChart width={900} height={400}>
                    <Pie
                        dataKey="count"
                        nameKey="t_route"
                        data={routeCounts}
                        outerRadius={200}
                        label={(entry) => entry.name}
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </Container>
        </Stack>
    );
};

export default MedicationsVsRoute;
