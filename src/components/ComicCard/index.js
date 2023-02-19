import "./ComicCard.css";

// Packages
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Default Image
import defaultImage from "../../assets/img/logo-marvel.png";

// Utils
import isValidImage from "../../util/isValidImage";
import setDescriptionInHTML from "../../util/setDescriptionInHTML";

const includesID = (favorites, target) => {
  for (let index = 0; index < favorites.length; index++) {
    if (favorites[index]["_id"] === target) {
      return true;
    }
  }
  return false;
};
const ComicCard = ({
  addFavorite,
  removeFavorite,
  favorites,
  comic,
  setModalContent,
  token,
}) => {
  const thumnailComic = `${comic.thumbnail.path}/portrait_fantastic.${comic.thumbnail.extension}`;
  return (
    <li className="comic-card">
      <div className="comic-card--container">
        {isValidImage(thumnailComic) ? (
          <div className="comic-card-image--container">
            <img
              alt={comic.title}
              src={thumnailComic}
              onError={(event) => {
                event.target.setAttribute("src", defaultImage);
              }}
            ></img>
          </div>
        ) : (
          <div className="comic-card-image--container">
            <img alt={comic.title} src={defaultImage}></img>
          </div>
        )}
        <h3>{comic.title}</h3>
        <div className="comic-card-description--container">
          {comic.description ? setDescriptionInHTML(comic.description) : null}
        </div>
        <div className="fav-icon--container">
          {favorites ? (
            includesID(favorites["comics"], comic._id) ? (
              <FontAwesomeIcon
                onClick={() => {
                  if (token) {
                    removeFavorite("comics", comic);
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
                    addFavorite("comics", comic);
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
      </div>
    </li>
  );
};
export default ComicCard;
