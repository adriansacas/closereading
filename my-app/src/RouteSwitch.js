import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import React from "react";
import Home from "./views/Home";
import About from "./views/About";
import Books from "./views/Books";
import Book from "./views/Book";
import Libraries from "./views/Libraries";
import Authors from "./views/Authors";

const RouteSwitch = () => {
  return (
    <Router>
        <Routes>
          <Route path = '/' element={<Home/>} />
          <Route path = '/about' element={<About />} />
          <Route path = '/books' element={<Books />} />
          <Route path = '/book/:id' element={<Book />} />
          <Route path = '/libraries' element={<Libraries />} />
          <Route path = '/authors' element={<Authors />} />
        </Routes>
      </Router>
  );
};

export default RouteSwitch;
