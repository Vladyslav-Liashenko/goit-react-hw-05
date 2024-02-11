import { useEffect, useState } from 'react';
import { fetchMovieId } from '../components/Services/api';
import { useParams, Link, Outlet } from 'react-router-dom';
import { Loader } from '../components/Loader/Loader';

export default function MoviesIdPage() {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchMovieId(movieId);
        setMovieData(data);
      } catch (error) {
        console.error("This didn't work.");
        throw error;
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [movieId]);

  return (
    <div>
      {loading && <Loader />}
      {movieData && (
        <div>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`}
              alt={movieData.title}
            />
          </div>
          <div>
            <h2>{movieData.title}</h2>

            <h3>User Score:</h3>
            <p>{movieData.vote_average}</p>

            <h3>Overview:</h3>
            <p>{movieData.overview}</p>

            <h3>Genres:</h3>
            {movieData.genres && (
              <p>{movieData.genres.map(genre => genre.name).join(', ')}</p>
            )}
          </div>
          <div>
            <h3>Additional information</h3>
            <ul>
              <li>
                <Link to={`cast`} state={{ from: location }}>
                  Cast
                </Link>
              </li>
              <li>
                <Link to={`reviews`} state={{ from: location }}>
                  Reviews
                </Link>
              </li>
            </ul>
          </div>
          <Outlet/>
        </div>
      )}
    </div>
  );
}
