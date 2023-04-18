import React, {useEffect, useState} from 'react';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import {apiClientProvider} from "../../apiClient";
import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";

const MedicationsVsRoute = () => {
    const [data, setData] = useState([]);
    const [routeCounts, setRouteCounts] = useState([]);

    function processData() {
        // const stateRegex = /([A-Z]{2})\s+\d{5}/;

        const groupedData = data.reduce((acc, curr) => {
            // const match = curr.address.match(stateRegex);
            const t_route = curr.route;
            if (!acc[t_route]) {
                acc[t_route] = { count: 0 };
            }
            // acc[t_route].totalRating += curr.rating;
            acc[t_route].count += 1;
            // console.log(acc);
            return acc;
        }, {});


        const ratings = Object.keys(groupedData)
            .map(t_route => {
                const { count } = groupedData[t_route];
                // const avgRating = totalRating / count;
                // console.log({t_route, count});
                return { t_route, count };
            });
        //     // .sort((a, b) => b.avg_rating - a.avg_rating);
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

    console.log(routeCounts);
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ name, percent }) => {
        // const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        // const x = cx + radius * Math.cos(-midAngle * RADIAN);
        // const y = cy + radius * Math.sin(-midAngle * RADIAN);
        const value = `${(percent * 100).toFixed(0)}%`
        const med_name = name;

        return ({value}, {med_name});
      };


    return (
        <Stack className="d-flex justify-content-center p-4">
            <h3 className="d-flex justify-content-center p-4">Counts of Treatment Application Route</h3>
            <Container className="d-flex justify-content-center p-4">
                <PieChart width={800} height={400}>
                    <Pie
                        dataKey="count"
                        nameKey="t_route"
                        isAnimationActive={false}
                        data={routeCounts}
                        labelLine={false}
                        // cx="50%"
                        // cy="50%"
                        // outerRadius={80}
                        // fill="#8884d8"
                        // label={renderCustomizedLabel}
                    />
                    <Tooltip />
                </PieChart>

                {/* <BarChart width={800} height={400} data={routeCounts}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="state" interval={0}  />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="avg_rating" name="Average Rating" fill="#66797A" />
                </BarChart> */}
            </Container>
        </Stack>
    );
};

export default MedicationsVsRoute;
