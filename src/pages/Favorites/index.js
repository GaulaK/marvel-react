import { Navigate } from "react-router-dom";
import "./Favorites.css";

const Favorites = ({ token }) => {
  return !token ? (
    <Navigate to="/" />
  ) : (
    <div className="favorites--page">
      <div className="favorites-list--container">
        <h2>Your Favorites</h2>
      </div>
    </div>
  );
};

export default Favorites;
