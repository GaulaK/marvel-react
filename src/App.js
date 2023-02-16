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
library.add(faCircleLeft, faCircleRight);

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/character/:id" element={<Character />} />
        <Route path="/comics" element={<Comics />} />
      </Routes>
    </Router>
  );
}

export default App;
