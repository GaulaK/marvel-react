import "./CharacterCard.css";

import isValidImage from "../../util/isValidImage";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const includesID = (favorites, target) => {
  for (let index = 0; index < favorites.length; index++) {
    if (favorites[index]["_id"] === target) {
      return true;
    }
  }
  return false;
};
const CharacterCard = ({
  id,
  characterName,
  description,
  thumbnail,
  addFavorite,
  removeFavorite,
  favorites,
  isLoadingFavorites,
  character,
}) => {
  const navigate = useNavigate();
  const thumnailCharacter = `${thumbnail.path}/standard_medium.${thumbnail.extension}`;
  return (
    <li className="character-card">
      <Link style={{ textDecoration: "none" }} to={`/character/${id}`}>
        <div
          className="character-card--container"
          onClick={() => {
            // console.log(id);
            navigate(`/character/${id}`);
          }}
        >
          <h3>{characterName}</h3>
          {isValidImage(thumnailCharacter) && (
            <div className="character-card-image--container">
              <img alt={characterName} src={thumnailCharacter}></img>
            </div>
          )}
        </div>
      </Link>
      <div className="fav-icon--container">
        {/* {console.log("oui", favorites ? favorites : "not yet")} */}
        {favorites ? (
          includesID(favorites["characters"], id) ? (
            <FontAwesomeIcon
              onClick={() => removeFavorite("characters", character)}
              className="favorite"
              icon="fa-star"
            />
          ) : (
            <FontAwesomeIcon
              onClick={() => addFavorite("characters", character)}
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
