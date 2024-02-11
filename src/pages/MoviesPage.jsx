import { fetchSearch } from '../components/Services/api';
import { useState, useEffect } from 'react';
import { SearchBar } from '../components/SearchBar/SearchBar';
import { Link, useLocation } from 'react-router-dom';
import { ErrorMassage } from '../components/ErrorMassage/ErrorMassage';
import { Loader } from '../components/Loader/Loader';

export default function MoviesPage() {
  const [query, setQuery] = useState([]);
  const [searchs, setSearchs] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  const searchFilms = async query => {
    setQuery(query.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchSearch(query);
        setSearchs(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [query]);

  return (
    <div>
      <SearchBar onSearch={searchFilms} />
      {loading && <Loader />}
      {error && <ErrorMassage />}
      {searchs.length > 0 && (
        <ul>
          {searchs.map(search => (
            <li key={search.id}>
              <Link to={`/movies/${search.id}`} state={{ from: location }}>
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
