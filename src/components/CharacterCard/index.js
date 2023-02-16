import "./CharacterCard.css";

import isValidImage from "../../util/isValidImage";
import { useNavigate } from "react-router-dom";

const CharacterCard = ({ id, characterName, description, thumbnail }) => {
  const navigate = useNavigate();
  const thumnailCharacter = `${thumbnail.path}/standard_medium.${thumbnail.extension}`;
  return (
    <li className="character-card">
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
      {/* <div>
        <img
          alt={characterName}
          src={`${thumbnail.path}/standard_large.${thumbnail.extension}`}
        ></img>
      </div>
      <div>
        <h3>{characterName}</h3>
        <p>{description}</p>
      </div> */}
    </li>
  );
};
export default CharacterCard;
