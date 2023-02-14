import React from "react";

import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <br />
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/books">Books</Link>
                </li>
                <li>
                    <Link to="/libraries">Libraries</Link>
                </li>
                <li>
                    <Link to="/authors">Authors</Link>
                </li>
            </ul>
        </div>
    );
};

export default Home;