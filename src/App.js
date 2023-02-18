import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";

//Pages
import Characters from "./pages/Characters";
import Character from "./pages/Character";

//Components
import Header from "./components/Header";
import Modal from "./components/Modal";

//Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCircleLeft,
  faCircleRight,
  faMagnifyingGlass,
  faXmark,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Comics from "./pages/Comics";
import { useState } from "react";

library.add(faCircleLeft, faCircleRight, faMagnifyingGlass, faXmark, faUser);

function App() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [modalContent, setModalContent] = useState(false);
  const [token, setToken] = useState(Cookies.get("token") || null);

  const updateToken = (token) => {
    if (token) {
      setToken(token);
      Cookies.set("token", token);
    } else {
      Cookies.remove("token");
      setToken(null);
    }
  };
  return (
    <Router>
      <Header
        search={search}
        setSearch={setSearch}
        setPage={setPage}
        setModalContent={setModalContent}
        token={token}
        setToken={setToken}
      />
      <Routes>
        <Route
          path="/"
          element={<Characters search={search} page={page} setPage={setPage} />}
        />
        <Route path="/character/:id" element={<Character />} />
        <Route
          path="/comics"
          element={<Comics search={search} page={page} setPage={setPage} />}
        />
      </Routes>
      {modalContent && (
        <Modal
          modalContent={modalContent}
          setModalContent={setModalContent}
          updateToken={updateToken}
        />
      )}
    </Router>
  );
}

export default App;
