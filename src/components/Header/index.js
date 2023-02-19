import "./Header.css";

// Packages
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Components
import SearchBar from "../SearchBar";

// Logo
const logoMarvel = require("../../assets/img/logo-marvel.png");

const Header = ({
  search,
  setSearch,
  setPage,
  setModalContent,
  token,
  updateToken,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <header>
      <div className="header--container">
        <div className="header-left--container">
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
        </div>
        <div className="header-right--container">
          <nav className="navigation-bar">
            <div className="category--navigation-bar">
              <Link
                to="/"
                className={`category--navigation-button ${
                  location.pathname === "/" ? "selected" : "not-selected"
                }`}
                onClick={() => {
                  setSearch("");
                  setPage(1);
                }}
              >
                Characters
              </Link>
              <Link
                to="/comics"
                className={`category--navigation-button ${
                  location.pathname === "/comics" ? "selected" : "not-selected"
                }`}
                onClick={() => {
                  setSearch("");
                  setPage(1);
                }}
              >
                Comics
              </Link>
              {token && (
                <Link
                  className={`category--navigation-button ${
                    location.pathname === "/favorites"
                      ? "selected"
                      : "not-selected"
                  }`}
                  to="/favorites"
                >
                  Favorites
                </Link>
              )}
            </div>
          </nav>
          <div className="account-buttons--container">
            {token ? (
              <button
                className="login-button"
                onClick={() => {
                  updateToken(null);
                }}
              >
                <FontAwesomeIcon icon="fa-right-from-bracket" />
              </button>
            ) : (
              <button
                className="login-button"
                onClick={() => {
                  setModalContent("login");
                  document.body.style.overflow = "hidden";
                }}
              >
                <FontAwesomeIcon icon="fa-user" />
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
