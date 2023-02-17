import axios from "axios";
import { useState, useEffect } from "react";

import CharacterCard from "../../components/CharacterCard";
import Spinner from "../../components/Spinner";
import PageCounter from "../../components/PageCounter";

import "./Characters.css";

const Characters = ({ search, page, setPage }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `https://site--marvel-backend--22v2k5v8dwyb.code.run/characters?page=${page}&search=${search}`
        );
        setData(response.data.data);

        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [page, search]);
  console.log(data);

  return (
    <>
      <div className="characters--page">
        <div className="characters-list--container">
          <h2>Characters</h2>
          {isLoading ? (
            <Spinner />
          ) : data.count <= 0 ? (
            <p className="no-data-found-text">
              Do you really know a character with this name? Not us anyway...
            </p>
          ) : (
            <>
              <PageCounter page={page} setPage={setPage} count={data.count} />
              {data.results && (
                <ul className="characters-list">
                  {data.results.map((element) => {
                    return (
                      <CharacterCard
                        key={element._id}
                        id={element._id}
                        characterName={element.name}
                        description={element.description}
                        thumbnail={element.thumbnail}
                      />
                    );
                  })}
                </ul>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Characters;
