import React, {useEffect, useState} from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
//import {apiClient} from "../../apiClient";
import Row from 'react-bootstrap/Row';
import Container from "react-bootstrap/Container";

const data = [
    {
    "gender": "female",
    "count": 16
    },
    {
    "gender": "male",
    "count": 50
    }
]

const COLORS = ["#66797A", "#8884d8"];


const AuthorsByGender = () => {

    return (
        <Container fluid="md">
            <Row style={{width: "100%", height: 600}}>
                <h3 className="p-5 text-center">Distribution of Authors by Gender</h3>
                
                    <Container className="d-flex justify-content-center p-4">
                        <PieChart width={600} height={600}>
                            <Pie
                                dataKey="count"
                                nameKey="gender"
                                isAnimationActive={false}
                                data={data}
                                cx="50%"
                                cy="50%"
                            >
                                {data.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={COLORS[index % COLORS.length]}
                                    />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                        
                    </Container>
                
            </Row>
        </Container>
    );

};

export default AuthorsByGender;
