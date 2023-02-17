import "./CharacterCard.css";

import isValidImage from "../../util/isValidImage";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const CharacterCard = ({ id, characterName, description, thumbnail }) => {
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
    </li>
  );
};
export default CharacterCard;
