import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { PieChar, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';

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

const ProviderSymptomsPerRarity = () => {
    return (
        <Container fluid="md">
            <Row style={{width: "100%", height: 600}}>
                <h3 className="p-5 text-center">Number of Symptoms in Each Rarity Level</h3>
                <Col>
                    <ResponsiveContainer width={400} height={400}>
                        <PieChart width={400} height={400}>
                            <Pie
                                dataKey="count"
                                isAnimationActive={false}
                                data={data}
                                cx="50%"
                                cy="50%"
                                outerRadius={200}
                                fill="#8884d8"
                                label
                            />
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </Col>
            </Row>
        </Container>
    );
}

export default ProviderSymptomsPerRarity;
