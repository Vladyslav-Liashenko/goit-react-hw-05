import search from '../../assets/search-svgrepo-com.svg';

export const SearchBar = ({ onSearch }) => {
  const handleSubmit = e => {
    e.preventDefault();
    onSearch(e.target.elements.query);
    e.target.reset();
  };

  return (
    <div>
      <header>
        <form onSubmit={handleSubmit}>
          <button type="submit">
            <img src={search} alt="Search Icon" />
          </button>
          <input
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search films"
          />
        </form>
      </header>
    </div>
  );
};
