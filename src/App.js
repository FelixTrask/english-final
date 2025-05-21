// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TitlePage from "./components/TitlePage";
import TableOfContents from "./components/TableOfContents";
import Introduction from "./pages/Introduction";
import MapPage from "./pages/MapPage";
import Chapters from "./pages/Chapters";
import Acknowledgements from "./pages/Acknowledgements";
import CreativePiece from "./pages/CreativePiece";
import BackCover from "./pages/BackCover";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TitlePage />} />
        <Route path="/contents" element={<TableOfContents />} />
        <Route path="/intro" element={<Introduction />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/chapters" element={<Chapters />} />
        <Route path="/creative" element={<CreativePiece />} />
        <Route path="/acknowledgements" element={<Acknowledgements />} />
        <Route path="/back-cover" element={<BackCover />} />
      </Routes>
    </Router>
  );
}

export default App;