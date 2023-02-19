import "./Modal.css";

// Packages
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Components
import LoginForm from "../LoginForm";
import SignupForm from "../SignupForm";

const Modal = ({ modalContent, setModalContent, updateToken }) => {
  return (
    modalContent && (
      <div
        className="modal--root"
        onClick={() => {
          document.body.style.overflow = "unset";
          setModalContent(false);
        }}
      >
        <div className="modal" onClick={(event) => event.stopPropagation()}>
          <button
            className="close-modal--button"
            onClick={() => {
              document.body.style.overflow = "unset";
              setModalContent(false);
            }}
          >
            <FontAwesomeIcon icon="fa-xmark" />
          </button>
          {modalContent &&
            (modalContent === "login" ? (
              <LoginForm
                setModalContent={setModalContent}
                updateToken={updateToken}
              />
            ) : (
              <SignupForm
                setModalContent={setModalContent}
                updateToken={updateToken}
              />
            ))}
        </div>
      </div>
    )
  );
};

export default Modal;
