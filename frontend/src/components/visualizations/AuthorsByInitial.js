import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import Row from 'react-bootstrap/Row';
import Container from "react-bootstrap/Container";

const data = [
    {
    "letter": "A",
    "count": 5,
    },
    {
    "letter": "B",
    "count": 1,
    },
    {
    "letter": "C",
    "count": 4,
    },
    {
    "letter": "D",
    "count": 5,
    },
    {
    "letter": "E",
    "count": 3,
    },
    {
    "letter": "F",
    "count": 1,
    },
    {
    "letter": "G",
    "count": 0,
    },
    {
    "letter": "H",
    "count": 5,
    },
    {
    "letter": "I",
    "count": 0,
    },
    {
    "letter": "J",
    "count": 5,
    },
    {
    "letter": "K",
    "count": 3,
    },
    {
    "letter": "L",
    "count": 3,
    },
    {
    "letter": "M",
    "count": 4,
    },
    {
    "letter": "N",
    "count": 1,
    },
    {
    "letter": "O",
    "count": 0,
    },
    {
    "letter": "P",
    "count": 1,
    },
    {
    "letter": "Q",
    "count": 0,
    },
    {
    "letter": "R",
    "count": 5,
    },
    {
    "letter": "S",
    "count": 6,
    },
    {
    "letter": "T",
    "count": 6,
    },
    {
    "letter": "U",
    "count": 0,
    },
    {
    "letter": "V",
    "count": 1,
    },
    {
    "letter": "W",
    "count": 3,
    },
    {
    "letter": "X",
    "count": 0,
    },
    {
    "letter": "Y",
    "count": 0,
    },
    {
    "letter": "Z",
    "count": 1,
    }
]

const COLORS = ['#840032', '#006595', '#E59500', '#48A9A6', '#D88C9A'];


const AuthorsByInitial = () => {
    return (
        <Container fluid="md">
            <Row style={{width: "100%", height: 600}}>
                <h3 className="p-5 text-center">Distribution of Authors' First Initials</h3>
                
                    <Container className="d-flex justify-content-center">
                        <PieChart width={600} height={600}>
                            <Pie
                                dataKey="count"
                                nameKey="letter"
                                data={data}
                                outerRadius={200}
                                label={(entry) => entry.name}
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

export default AuthorsByInitial;