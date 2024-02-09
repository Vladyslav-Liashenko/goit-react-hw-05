import { fetchSearch } from '../components/Services/api';
import { useState, useEffect } from 'react';
import { SearchBar } from '../components/SearchBar/SearchBar';
import { Link, useLocation } from 'react-router-dom';

export default function MoviesPage() {
  const [query, setQuery] = useState([]);
  const [searchs, setSearchs] = useState([]);
  const location = useLocation();
  location;

  const searchFilms = async query => {
    setQuery(query.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchSearch(query);
        setSearchs(data.results);
      } catch (error) {
        console.error("This didn't work.");
        throw error;
      }
    };
    fetchData();
  }, [query]);

  return (
    <div>
      <SearchBar onSearch={searchFilms} />
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
