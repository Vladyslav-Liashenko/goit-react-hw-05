import { fetchPopular } from '../../components/Services/api';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Loader } from '../../components/Loader/Loader';
import { ErrorMassage } from '../../components/ErrorMassage/ErrorMassage';
import styled from './HomePage.module.css';

export default function HomePage() {
  const [populars, setPopulars] = useState([]);
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPopular();
        setLoading(true);
        setPopulars(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {loading && <Loader />}
      {error && <ErrorMassage />}
      <h1 className={styled.h1}>Tranding today</h1>
      {populars.length > 0 && (
        <ul>
          {populars.map(popular => (
            <li key={popular.id} className={styled.li}>
              <Link to={`/movies/${popular.id}`} state={{ from: location }}>
                <h2>{popular.title} - </h2>
              </Link>
              <p>Popularity: {popular.popularity}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
