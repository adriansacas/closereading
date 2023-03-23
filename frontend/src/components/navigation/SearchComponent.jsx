import React, { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

const SearchComponent = ({ handleSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (event) => {
        console.log(`Search term: ${searchTerm}`);
        event.preventDefault();
        handleSearch(searchTerm);
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
