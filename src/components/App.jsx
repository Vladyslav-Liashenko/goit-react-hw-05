import { Link, Routes, Route } from 'react-router-dom';
// import { useState } from 'react';
import './App.css';
// import axios from 'axios';

// http://localhost:5173/
// http://localhost:5173/Movies

export const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>

      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/movies" element={<div>Movies</div>} />
        <Route path="*" element={<div>Not found page</div>} />
      </Routes>
    </div>
  );
};
