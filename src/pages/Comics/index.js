import axios from "axios";
import { useState, useEffect } from "react";

import ComicCard from "../../components/ComicCard";
import Spinner from "../../components/Spinner";
import PageCounter from "../../components/PageCounter";

import "./Comics.css";

const Comics = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `https://site--marvel-backend--22v2k5v8dwyb.code.run/comics?page=${page}`
        );
        setData(response.data.data);
        // console.log(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [page]);

  return (
    <>
      <div className="comics--page">
        <div className="comics-list--container">
          <h2>Comics</h2>
          {isLoading ? (
            <Spinner />
          ) : (
            <>
              <PageCounter page={page} setPage={setPage} count={data.count} />
              {data.results && (
                <ul className="comics-list">
                  {data.results.map((element) => {
                    return (
                      <ComicCard
                        key={element._id}
                        id={element._id}
                        ComicName={element.title}
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

export default Comics;
