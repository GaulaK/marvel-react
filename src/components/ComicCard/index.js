import "./ComicCard.css";
import defaultImage from "../../assets/img/logo-marvel.png";

import isValidImage from "../../util/isValidImage";
import setDescriptionInHTML from "../../util/setDescriptionInHTML";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const includesID = (favorites, target) => {
  for (let index = 0; index < favorites.length; index++) {
    if (favorites[index]["_id"] === target) {
      return true;
    }
  }
  return false;
};
const ComicCard = ({
  id,
  ComicName,
  description,
  thumbnail,
  addFavorite,
  removeFavorite,
  favorites,
  isLoadingFavorites,
  comic,
}) => {
  const thumnailComic = `${thumbnail.path}/portrait_fantastic.${thumbnail.extension}`;
  return (
    <li className="comic-card">
      <div className="comic-card--container">
        {isValidImage(thumnailComic) ? (
          <div className="comic-card-image--container">
            <img
              alt={ComicName}
              src={thumnailComic}
              onError={(event) => {
                // event.target.style.display = "none";
                event.target.setAttribute("src", defaultImage);
                // event.target.addClass("gray-filter");
              }}
            ></img>
          </div>
        ) : (
          <div className="comic-card-image--container">
            <img alt={ComicName} src={defaultImage}></img>
          </div>
        )}
        <h3>{ComicName}</h3>
        <div className="comic-card-description--container">
          {description ? setDescriptionInHTML(description) : null}
        </div>
        <div className="fav-icon--container">
          {/* {console.log("oui", favorites ? favorites : "not yet")} */}
          {favorites ? (
            includesID(favorites["comics"], id) ? (
              <FontAwesomeIcon
                onClick={() => removeFavorite("comics", comic)}
                className="favorite"
                icon="fa-star"
              />
            ) : (
              <FontAwesomeIcon
                onClick={() => addFavorite("comics", comic)}
                className="not-favorite"
                icon="fa-regular fa-star"
              />
            )
          ) : null}
        </div>
      </div>
    </li>
  );
};
export default ComicCard;
