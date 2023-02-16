import axios from "axios";
import { useState, useEffect } from "react";

import CharacterCard from "../../components/CharacterCard";
import Spinner from "../../components/Spinner";
import PageCounter from "../../components/PageCounter";

import "./Characters.css";

const Characters = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `https://site--marvel-backend--22v2k5v8dwyb.code.run/characters?page=${page}`
        );
        setData(response.data.data);

        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [page]);

  return (
    <>
      <div className="characters--page">
        <div className="characters-list--container">
          <h2>Characters</h2>
          {isLoading ? (
            <Spinner />
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
