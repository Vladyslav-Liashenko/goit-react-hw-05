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
          setMovieCastData(data);
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
  console.log(movieCastData);

  if (loading) return <div>Loading cast data...</div>;

  return <div>movieCast</div>;
};
