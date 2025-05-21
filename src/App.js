// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar";
import TitlePage from "./components/TitlePage"; // Includes sidebar
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
      <Sidebar>
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
      </Sidebar>
    </Router>
  );
}

export default App;