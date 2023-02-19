import "./PageCounter.css";

// Packages
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PageCounter = ({ page, setPage, count }) => {
  return (
    <div className="page-counter">
      <div className="page-counter--container">
        {page > 1 && (
          <FontAwesomeIcon
            onClick={() => {
              setPage(() => page - 1);
            }}
            className="arrow-icon"
            icon="fa-circle-left"
          />
        )}
      </div>

      <div className="page-counter--container">
        <p>{`${page} / ${Math.ceil(count / 100)}`}</p>
      </div>
      <div className="page-counter--container">
        {page < count / 100 && (
          <FontAwesomeIcon
            onClick={() => {
              setPage(() => page + 1);
            }}
            className="arrow-icon"
            icon="fa-circle-right"
          />
        )}
      </div>
    </div>
  );
};

export default PageCounter;
