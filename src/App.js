import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Pages
import Characters from "./pages/Characters";
import Character from "./pages/Character";

//Components
import Header from "./components/Header";

//Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCircleLeft, faCircleRight } from "@fortawesome/free-solid-svg-icons";
import Comics from "./pages/Comics";
import { useState } from "react";

library.add(faCircleLeft, faCircleRight);

function App() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  return (
    <Router>
      <Header search={search} setSearch={setSearch} setPage={setPage} />
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
    </Router>
  );
}

export default App;
