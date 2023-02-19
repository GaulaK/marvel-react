import "./Favorites.css";

// Packages
import { Navigate } from "react-router-dom";

// Components
import FavoriteCard from "../../components/FavoriteCard";
import Spinner from "../../components/Spinner";

const Favorites = ({ token, favorites }) => {
  return !token ? (
    <Navigate to="/" />
  ) : (
    <div className="favorites--page">
      <div className="favorites-list--container">
        <h2>Your Favorites</h2>
        <h2 className="favorites-characters--title">Your Characters...</h2>
        {favorites ? (
          favorites["characters"]?.length === 0 ? (
            <p className="no-favorites-text">
              You don't have any favorites characters ?! 😔
            </p>
          ) : (
            <div className="favorites-card--container">
              {favorites["characters"].map((element) => {
                return (
                  <FavoriteCard
                    key={element._id}
                    type="characters"
                    element={element}
                  />
                );
              })}
            </div>
          )
        ) : (
          <Spinner />
        )}

        <h2 className="favorites-comics--title">...and your Comics </h2>
        {favorites ? (
          favorites["comics"]?.length === 0 ? (
            <p className="no-favorites-text">
              You don't have any favorites comics ?! 😔
            </p>
          ) : (
            <div className="favorites-card--container">
              {favorites["comics"].map((element) => {
                return (
                  <FavoriteCard
                    key={element._id}
                    type="comics"
                    element={element}
                  />
                );
              })}
            </div>
          )
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};

export default Favorites;
