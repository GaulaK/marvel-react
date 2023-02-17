import "./SearchBar.css";

const SearchBar = ({ search, setSearch, type, setPage }) => {
  let placeholderValue;
  if (type === "comics") {
    placeholderValue = "Search Comics...";
  } else {
    placeholderValue = "Search Characters...";
  }
  return (
    <div className="search-bar--container">
      <input
        value={search}
        type="text"
        className="search-bar--input"
        placeholder={placeholderValue}
        onChange={(event) => {
          setSearch(event.target.value);
          setPage(1);
        }}
      />
    </div>
  );
};

export default SearchBar;
