import "./SearchBar.css";

// Packages
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar = ({ search, setSearch, type, setPage }) => {
  let placeholderValue;
  if (type === "comics") {
    placeholderValue = "Search Comics...";
  } else {
    placeholderValue = "Search Characters...";
  }
  return (
    <div className="search-bar--container">
      <form
        className="search-bar--form"
        onSubmit={(event) => {
          event.preventDefault();
          setPage(1);
          setSearch(event.target.search.value);
        }}
      >
        <input
          name="search"
          type="text"
          className="search-bar--input"
          placeholder={placeholderValue}
          autoComplete="off"
        />
        <button className="submit-button--form" type="submit">
          <FontAwesomeIcon icon="fa-magnifying-glass" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
