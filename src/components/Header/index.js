import "./Header.css";
import { Link } from "react-router-dom";
const logoMarvel = require("../../assets/img/logo-marvel.png");

const Header = () => {
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
