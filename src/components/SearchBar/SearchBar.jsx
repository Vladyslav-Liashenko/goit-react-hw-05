import search from '../../assets/search-svgrepo-com.svg';
import styled from './SearchBar.module.css';

export const SearchBar = ({ value, onSearch }) => {
  const handleSubmit = e => {
    e.preventDefault();
    onSearch(e.target.elements.query.value);
    e.target.reset();
  };

  return (
    <div>
      <header>
        <form onSubmit={handleSubmit} className={styled.formsearch}>
          <button type="submit">
            <img src={search} alt="Search Icon" />
          </button>
          <input
            type="text"
            name="query"
            value={value}
            autoComplete="off"
            autoFocus
            placeholder="Search films"
            onChange={e => onSearch(e.target.value)}
          />
        </form>
      </header>
    </div>
  );
};
