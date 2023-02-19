import "./ComicsList.css";

// Utils
import isValidImage from "../../util/isValidImage";
import setDescriptionInHTML from "../../util/setDescriptionInHTML";

const ComicsList = ({ data }) => {
  return !data.length ? (
    <div className="no-comics-found">
      <p>It seems that we don't have any comics with this character...</p>
    </div>
  ) : (
    <ul className="comics-character--list">
      {data.map((comic) => {
        const comicImage = `${comic.thumbnail.path}/portrait_fantastic.${comic.thumbnail.extension}`;
        return (
          <li key={comic._id} className="comic-character--container">
            {isValidImage(comicImage)}
            <div className="image--container">
              <img alt={`${comic.title} cover`} src={comicImage}></img>
            </div>
            <div className="comic-character--details">
              <h3>{comic.title}</h3>
              {comic.description && (
                <div>{setDescriptionInHTML(comic.description)}</div>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ComicsList;
