import { fetchSearch } from '../components/Services/api';
import { useState, useEffect } from 'react';
import { SearchBar } from '../components/SearchBar/SearchBar';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { ErrorMassage } from '../components/ErrorMassage/ErrorMassage';
import { Loader } from '../components/Loader/Loader';
import styled from './MoviesPage.module.css';

export default function MoviesPage() {
  const [query, setQuery] = useState('');
  const [searchs, setSearchs] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchSearch(query);
        setSearchs(data.results);
        const nextParams = query !== '' ? { query } : {};
        setSearchParams(nextParams);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [query, setSearchParams]);

  const searchFilms = async query => {
    setQuery(query);
  };
  console.log(query);

  return (
    <div>
      <SearchBar value={movieName} onSearch={searchFilms} />
      {loading && <Loader />}
      {error && <ErrorMassage />}
      {searchs.length > 0 && (
        <ul>
          {searchs.map(search => (
            <li key={search.id} className={styled.li}>
              <Link
                to={`${search.id}`}
                state={{ from: location, query: searchParams.get('query') }}
              >
                <h2>{search.title}</h2>
              </Link>
              <p>Popularity: {search.popularity}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
