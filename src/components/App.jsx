import { Routes, Route } from 'react-router-dom';
import { NavBar } from './NavBar/NavBar';
import MoviesPage from '../pages/MoviesPage';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';

// import { useState } from 'react';
// import axios from 'axios';

export const App = () => {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};
