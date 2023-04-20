import Container from "react-bootstrap/Container";
import {PieChart, Pie, Tooltip, Cell} from 'recharts';
import Stack from "react-bootstrap/Stack";
import React from "react";

const data = [
    {
        name: "Rarity Level 1",
        count: 12
    },
    {
        name: "Rarity Level 2",
        count: 37
    },
    {
        name: "Rarity Level 3",
        count: 64
    },
    {
        name: "Rarity Level 4",
        count: 9
    }
];

const COLORS = ['#840032', '#006595', '#E59500', '#48A9A6', '#D88C9A'];

const ProviderSymptomsPerRarity = () => {
    return (
        <Stack className="d-flex justify-content-center p-4">
            <h3 className="p-5 text-center">Number of Symptoms in Each Rarity Level</h3>
            <Container className="d-flex justify-content-center p-4">
                <PieChart width={800} height={500}>
                    <Pie
                        dataKey="count"
                        data={data}
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
}

export default ProviderSymptomsPerRarity;
