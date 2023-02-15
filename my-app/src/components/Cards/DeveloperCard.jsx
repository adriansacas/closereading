import React from "react";

import Card from "react-bootstrap/Card";

const DeveloperCard = (props) => {
    const {
        name,
        image,
        gitlab_username,
        role,
        bio,
        commits,
        issues,
        unit_tests,
    } = props.devInfo;
    return (
        <Card>
            <Card.Img variant="top" src={image} alt="Developer's portrait."/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle>@{gitlab_username}</Card.Subtitle>
                <Card.Text>Role: {role}</Card.Text>
                <Card.Text>{bio}</Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
                Commits: {commits} <br />
                Issues: {issues} <br />
                Unit Tests: {unit_tests}
            </Card.Footer>
        </Card>
    );
};

export default DeveloperCard;
