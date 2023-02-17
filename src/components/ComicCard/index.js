import "./ComicCard.css";
import defaultImage from "../../assets/img/logo-marvel.png";

import isValidImage from "../../util/isValidImage";
import setDescriptionInHTML from "../../util/setDescriptionInHTML";

const ComicCard = ({ id, ComicName, description, thumbnail }) => {
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
      </div>
    </li>
  );
};
export default ComicCard;
