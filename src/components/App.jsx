import { Routes, Route } from 'react-router-dom';
import { NavBar } from './NavBar/NavBar';

// import { useState } from 'react';
// import axios from 'axios';


export const App = () => {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/movies" element={<div>Movies</div>} />
        <Route path="*" element={<div>Not found page</div>} />
      </Routes>
    </div>
  );
};
