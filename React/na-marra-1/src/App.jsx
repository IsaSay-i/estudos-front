import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home/index.jsx";
import About from "./pages/About/about.jsx";
// import "./styles/index.css";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />

      <div class="afastaNav">
        <Routes className="afastaNav">
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
