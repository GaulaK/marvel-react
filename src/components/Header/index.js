import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import SearchBar from "../SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const logoMarvel = require("../../assets/img/logo-marvel.png");

const Header = ({ search, setSearch, setPage, setModalContent, token }) => {
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
          <div className="category--navigation-bar">
            <Link
              className={`category--navigation-button ${
                location.pathname === "/" ? "selected" : "not-selected"
              }`}
              to="/"
            >
              Characters
            </Link>
            <Link
              className={`category--navigation-button ${
                location.pathname === "/comics" ? "selected" : "not-selected"
              }`}
              to="/comics"
            >
              Comics
            </Link>
          </div>
        </nav>
        <div className="account-buttons--container">
          {token ? (
            <Link className="account-button" to="/">
              Favorites
            </Link>
          ) : (
            <button
              className="login-button"
              onClick={() => {
                setModalContent("login");
                document.body.style.overflow = "hidden";
              }}
            >
              <FontAwesomeIcon icon="fa-solid fa-user" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
