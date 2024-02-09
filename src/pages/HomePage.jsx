import { fetchPopular } from '../components/Services/api';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function HomePage() {
  const [populars, setPopulars] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPopular();
        setPopulars(data.results);
      } catch (error) {
        console.error("This didn't work.");
        throw error;
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Tranding today</h1>
      {populars.length > 0 && (
        <ul>
          {populars.map(popular => (
            <li key={popular.id}>
              <Link to={`/movies/${popular.id}`} state={{ from: location }}>
                <h2>{popular.title}</h2>
              </Link>
              <p>Popularity: {popular.popularity}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
