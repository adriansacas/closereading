import React, { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SearchComponent = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        console.log(`Search term: ${searchTerm}`);
        event.preventDefault();
        navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
    };

    return (
        <Form onSubmit={handleSubmit} className="d-flex">
            <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
            />
            <Button type="submit">
                Search
            </Button>
        </Form>
    );
};

export default SearchComponent;
