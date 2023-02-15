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
import Library from "./views/Library";
import Authors from "./views/Authors";
import Author from "./views/Author";

const RouteSwitch = () => {
  return (
    <Router>
        <Routes>
          <Route path = '/' element={<Home/>} />
          <Route path = '/about' element={<About />} />
          <Route path = '/books' element={<Books />} />
          <Route path = '/book/:id' element={<Book />} />
          <Route path = '/libraries' element={<Libraries />} />
          <Route path = '/library/:id' element={<Library />} />
          <Route path = '/authors' element={<Authors />} />
          <Route path = '/author/:id' element={<Author />} />
        </Routes>
      </Router>
  );
};

export default RouteSwitch;
