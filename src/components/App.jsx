import { Routes, Route } from 'react-router-dom';
import { NavBar } from './NavBar/NavBar';
import MoviesPage from '../pages/MoviesPage';
import HomePage from '../pages/HomePage';

// import { useState } from 'react';
// import axios from 'axios';


export const App = () => {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<div><HomePage/></div>} />
        <Route path="/movies" element={<div><MoviesPage/></div>} />
        <Route path="*" element={<div>Not found page</div>} />
      </Routes>
    </div>
  );
};
