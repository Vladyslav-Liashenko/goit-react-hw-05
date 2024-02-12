import { getCast } from '../Services/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import { ErrorMassage } from '../ErrorMassage/ErrorMassage';

const MovieCast = () => {
  const { movieId } = useParams();
  const [movieCastData, setMovieCastData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCast(movieId);
        if (data && data.cast) {
          setLoading(true);
          setMovieCastData(data.cast);
        } else {
          setMovieCastData([]);
        }
        setLoading(false);
      } catch (error) {
        setError(true);
        throw error;
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [movieId]);
console.log(movieCastData);
  return (
    <div>
      {loading && <Loader />}
      {error && <ErrorMassage />}
      {movieCastData && (
        <div>
          <ul>
            {movieCastData.map(actor => (
              <li key={actor.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                  alt={actor.name}
                />
                <h4>{actor.name}</h4>
                <p>Character: {actor.character}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
export default MovieCast;
