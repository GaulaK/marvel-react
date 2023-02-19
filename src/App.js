import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

//Pages
import Characters from "./pages/Characters";
import Character from "./pages/Character";
import Comics from "./pages/Comics";
import Favorites from "./pages/Favorites";

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
  faRightFromBracket,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import { useState, useEffect } from "react";

library.add(
  faCircleLeft,
  faCircleRight,
  faMagnifyingGlass,
  faXmark,
  faUser,
  faRightFromBracket,
  faStar,
  farStar
);

function App() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [modalContent, setModalContent] = useState(false);
  const [token, setToken] = useState(Cookies.get("token") || null);
  const [favorites, setFavorites] = useState(null);
  const [isLoadingFavorites, setIsLoadingFavorites] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!token) {
          setFavorites({ characters: [], comics: [] });
        } else {
          const response = await axios.get(
            `https://site--marvel-backend--22v2k5v8dwyb.code.run/user/favorites/get`,

            { headers: { Authorization: "Bearer " + token } }
          );

          // console.log(response.data);
          setFavorites(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    setIsLoadingFavorites(true);
    fetchData();
    setIsLoadingFavorites(false);
  }, [token]);

  const updateToken = (token) => {
    if (token) {
      setToken(token);
      Cookies.set("token", token);
    } else {
      Cookies.remove("token");
      setToken(null);
    }
  };

  const addFavorite = async (type, newFavorite) => {
    console.log(type, newFavorite, token);
    if (token) {
      if (type === "characters" || type === "comics") {
        const data = {};
        data[type] = newFavorite;
        try {
          const response = await axios.post(
            `https://site--marvel-backend--22v2k5v8dwyb.code.run/user/favorites/add`,
            data,
            { headers: { Authorization: "Bearer " + token } }
          );
          const newFavorites = response.data.favorites;
          console.log(newFavorites);
          setFavorites(newFavorites);
        } catch (error) {
          console.log(error);
        }
      }
    }
  };

  const removeFavorite = async (type, favoriteToDelete) => {
    if (token) {
      if (type === "characters" || type === "comics") {
        const data = {};
        data[type] = favoriteToDelete;
        try {
          const response = await axios.post(
            `https://site--marvel-backend--22v2k5v8dwyb.code.run/user/favorites/remove`,
            data,
            { headers: { Authorization: "Bearer " + token } }
          );

          const newFavorites = response.data.favorites;
          console.log(newFavorites);
          setFavorites(newFavorites);
        } catch (error) {
          console.log(error);
        }
      }
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
        updateToken={updateToken}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Characters
              search={search}
              page={page}
              setPage={setPage}
              addFavorite={addFavorite}
              removeFavorite={removeFavorite}
              favorites={favorites}
              isLoadingFavorites={isLoadingFavorites}
            />
          }
        />
        <Route path="/character/:id" element={<Character />} />
        <Route
          path="/comics"
          element={
            <Comics
              search={search}
              page={page}
              setPage={setPage}
              addFavorite={addFavorite}
              removeFavorite={removeFavorite}
              favorites={favorites}
              isLoadingFavorites={isLoadingFavorites}
            />
          }
        />
        <Route path="/favorites" element={<Favorites token={token} />} />
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
