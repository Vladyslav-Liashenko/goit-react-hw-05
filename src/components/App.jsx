import { Routes, Route } from 'react-router-dom';
import { NavBar } from './NavBar/NavBar';
import MoviesPage from '../pages/MoviesPage';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';
import MoviesIdPage from '../pages/MoviesIdPage';
import { MovieCast } from './MovieCast/MovieCast';
import { MovieReviews } from './MovieReviews/MovieReviews';

export const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MoviesIdPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};
