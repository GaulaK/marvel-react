import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

import ComicsList from "../../components/ComicsList";

import "./Character.css";
import isValidImage from "../../util/isValidImage";
import Spinner from "../../components/Spinner";

const Character = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--marvel-backend--22v2k5v8dwyb.code.run/comics/${id}`
          //character/${characterId}
        );
        setData(response.data.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  // console.log(data);
  // console.log(data?.thumbnail);

  return isLoading ? (
    <div className="character--page">
      <Spinner />
    </div>
  ) : (
    <div className="character--page">
      <div className="character--container">
        <h2>{data.name}</h2>
        <div className="character--details">
          {isValidImage(
            `${data.thumbnail.path}/portrait_fantastic.${data.thumbnail.extension}`
          ) && (
            <div className="image--container">
              <img
                alt={`${data.name}`}
                src={`${data.thumbnail.path}/portrait_fantastic.${data.thumbnail.extension}`}
              />
            </div>
          )}
          {data.description && (
            <p className="character--description">{data.description}</p>
          )}
        </div>
        <div className="character-category--separator"></div>
        <ComicsList data={data.comics} />
      </div>
    </div>
  );
};

export default Character;
