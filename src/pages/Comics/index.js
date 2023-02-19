import "./Comics.css";

// Packages
import axios from "axios";
import { useState, useEffect } from "react";

// Components
import ComicCard from "../../components/ComicCard";
import Spinner from "../../components/Spinner";
import PageCounter from "../../components/PageCounter";

const Comics = ({
  search,
  page,
  setPage,
  addFavorite,
  removeFavorite,
  favorites,
  setModalContent,
  token,
}) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `https://site--marvel-backend--22v2k5v8dwyb.code.run/comics?page=${page}&search=${search}`
        );
        setData(response.data.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [page, search]);

  return (
    <>
      <div className="comics--page">
        <div className="comics-list--container">
          <h2>Comics</h2>
          {isLoading ? (
            <Spinner />
          ) : data.count <= 0 ? (
            <p className="no-data-found-text">
              Do you really know a comic with this name? Not us anyway...
            </p>
          ) : (
            <>
              <PageCounter page={page} setPage={setPage} count={data.count} />
              {data.results && (
                <ul className="comics-list">
                  {data.results.map((element) => {
                    return (
                      <ComicCard
                        key={element._id}
                        comic={element}
                        addFavorite={addFavorite}
                        removeFavorite={removeFavorite}
                        favorites={favorites}
                        setModalContent={setModalContent}
                        token={token}
                      />
                    );
                  })}
                </ul>
              )}
              <PageCounter page={page} setPage={setPage} count={data.count} />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Comics;
