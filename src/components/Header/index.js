import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import SearchBar from "../SearchBar";
const logoMarvel = require("../../assets/img/logo-marvel.png");

const Header = ({ search, setSearch, setPage }) => {
  const location = useLocation();
  return (
    <header>
      <div className="header--container">
        <div className="logo--container">
          <Link to="/">
            <img
              className="logo"
              alt="Logo of Marvel write in white on a red background"
              src={logoMarvel}
            />
          </Link>
        </div>
        {location.pathname === "/" && (
          <SearchBar
            search={search}
            setSearch={setSearch}
            type={"characters"}
            setPage={setPage}
          />
        )}
        {location.pathname === "/comics" && (
          <SearchBar
            search={search}
            setSearch={setSearch}
            type={"comics"}
            setPage={setPage}
          />
        )}

        <nav className="navigation-bar">
          <Link className="navigation-button" to="/">
            Characters
          </Link>
          <Link className="navigation-button" to="/comics">
            Comics
          </Link>
          <Link className="navigation-button" to="/">
            Favorites
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
