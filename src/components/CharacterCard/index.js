import "./CharacterCard.css";

// Packages
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Utils
import isValidImage from "../../util/isValidImage";

const includesID = (favorites, target) => {
  for (let index = 0; index < favorites.length; index++) {
    if (favorites[index]["_id"] === target) {
      return true;
    }
  }
  return false;
};
const CharacterCard = ({
  addFavorite,
  removeFavorite,
  favorites,
  character,
  token,
  setModalContent,
}) => {
  const navigate = useNavigate();
  const thumnailCharacter = `${character.thumbnail.path}/standard_medium.${character.thumbnail.extension}`;
  return (
    <li className="character-card">
      <Link
        style={{ textDecoration: "none" }}
        to={`/character/${character._id}`}
      >
        <div
          className="character-card--container"
          onClick={() => {
            navigate(`/character/${character._id}`);
          }}
        >
          <h3>{character.name}</h3>
          {isValidImage(thumnailCharacter) && (
            <div className="character-card-image--container">
              <img alt={character.name} src={thumnailCharacter}></img>
            </div>
          )}
        </div>
      </Link>
      <div className="fav-icon--container">
        {favorites ? (
          includesID(favorites["characters"], character._id) ? (
            <FontAwesomeIcon
              onClick={() => {
                if (token) {
                  removeFavorite("characters", character);
                } else {
                  setModalContent("login");
                }
              }}
              className="favorite"
              icon="fa-star"
            />
          ) : (
            <FontAwesomeIcon
              onClick={() => {
                if (token) {
                  addFavorite("characters", character);
                } else {
                  setModalContent("login");
                }
              }}
              className="not-favorite"
              icon="fa-regular fa-star"
            />
          )
        ) : null}
      </div>
    </li>
  );
};
export default CharacterCard;
