import { useEffect, useState } from 'react';
import { fetchMovieId } from '../components/Services/api';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { BackToLink } from '../components/BackToLink/BackToLink';
import { Loader } from '../components/Loader/Loader';
import { ErrorMassage } from '../components/ErrorMassage/ErrorMassage';
import styled from './MoviesIdPage.module.css';

export default function MoviesIdPage() {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchMovieId(movieId);
        setMovieData(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [movieId]);

  return (
    <div>
      <BackToLink to={backLinkHref} query={location.state?.query || ''}>GO BACK</BackToLink>
      {loading && <Loader />}
      {error && <ErrorMassage />}

      {movieData && (
        <div>
          <div className={styled.movied}>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`}
                alt={movieData.title}
              />
            </div>
            <div>
              <h1>{movieData.title}</h1>
              <h2>
                User Score:
                <p>{movieData.vote_average}</p>
              </h2>

              <h2>Overview:</h2>
              <p>{movieData.overview}</p>

              <h2>Genres:</h2>
              {movieData.genres && (
                <p>{movieData.genres.map(genre => genre.name).join(', ')}</p>
              )}
            </div>
          </div>
          <div>
            <h3>Additional information</h3>
            <ul className={styled.moviedinfo}>
              <li>
                <Link to={`cast`}>Cast</Link>
              </li>
              <li>
                <Link to={`reviews`}>Reviews</Link>
              </li>
            </ul>
          </div>
          <Outlet />
        </div>
      )}
    </div>
  );
}
