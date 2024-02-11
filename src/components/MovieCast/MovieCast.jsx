import { getCast } from '../Services/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const MovieCast = () => {
  const { movieId } = useParams();
  const [movieCastData, setMovieCastData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCast(movieId);
        if (data && data.cast) {
          setMovieCastData(data.cast);
        } else {
          setMovieCastData([]);
        }
        setLoading(false);
      } catch (error) {
        console.error("This didn't work.");
        throw error;
      }
    };
    fetchData();
  }, [movieId]);

  if (loading) return <div>Loading cast data...</div>;

  return (
    <div>
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
      ;
    </div>
  );
};
