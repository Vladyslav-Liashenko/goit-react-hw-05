import { fetchPopular } from '../components/Services/Api';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function HomePage() {
    const [populars, setPopulars] = useState([]);
    const location = useLocation();

//   const API_KEY = '8aba4e3419a44727b7eb66f35fce4fa2';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPopular();
        setPopulars(data.results);
      } catch (error) {
        console.error("This didn't work.");
        throw error;
      }
    }
    fetchData();
  }, []);
    
  return (
    <div>
      <h1>Tranding today</h1>
      {populars.length > 0 && (
        <ul>
          {populars.map(popular => (
            <li key={popular.id}>
                  <Link
                      to={`/movies/${popular.id}`}
                      state={{ from: location }}>
                <h2>{popular.title}</h2>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
