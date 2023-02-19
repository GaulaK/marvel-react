import "./FavoriteCard.css";
import defaultImage from "../../assets/img/logo-marvel.png";
import isValidImage from "../../util/isValidImage";

const FavoriteCard = ({ element, type }) => {
  const thumbnail = `${element.thumbnail.path}/portrait_uncanny.${element.thumbnail.extension}`;
  return (
    <div className="favorite-card">
      {type === "comics" ? (
        <>
          <h4>{element.title}</h4>
          {isValidImage(thumbnail) ? (
            <div className="favorite-card-image--container">
              <img
                alt={element.title}
                src={thumbnail}
                onError={(event) => {
                  // event.target.style.display = "none";
                  event.target.setAttribute("src", defaultImage);
                  // event.target.addClass("gray-filter");
                }}
              ></img>
            </div>
          ) : (
            <div className="favorite-card-image--container">
              <img alt={element.title} src={defaultImage}></img>
            </div>
          )}
        </>
      ) : (
        <>
          <h4>{element.name}</h4>
          {isValidImage(thumbnail) ? (
            <div className="favorite-card-image--container">
              <img
                alt={element.name}
                src={thumbnail}
                onError={(event) => {
                  // event.target.style.display = "none";
                  event.target.setAttribute("src", defaultImage);
                  // event.target.addClass("gray-filter");
                }}
              ></img>
            </div>
          ) : (
            <div className="favorite-card-image--container">
              <img alt={element.name} src={defaultImage}></img>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default FavoriteCard;
