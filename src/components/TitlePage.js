// src/components/TitlePage.js
import React, { useState } from "react";
import "./Peel.css";
import TableOfContents from "./TableOfContents";

export default function TitlePage() {
  const [peeling, setPeeling] = useState(false);
  const [finished, setFinished] = useState(false);

  const handleEnter = () => {
    setPeeling(true);
  };

  const handleAnimationEnd = () => {
    setFinished(true);
  };

  return (
    <div className="cover-container min-h-screen relative overflow-hidden" style={{ perspective: 1500 }}>
      <div
        className={`toc-overlay absolute inset-0 transition-opacity duration-500 ease-out pointer-events-auto ${
          finished ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <TableOfContents />
      </div>

      {!finished && (
        <div
          className={`cover absolute inset-0 rounded-lg shadow-lg transform-style-preserve-3d overflow-hidden
          ${peeling ? "peel" : ""}`}
          style={{ transformOrigin: "left center" }}
          onAnimationEnd={handleAnimationEnd}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-gray-500" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-12 py-16">
            <h1 className="text-4xl font-bold mb-2 text-center">
              A Journey Through Bits and Bytes
            </h1>
            <h2 className="text-xl text-gray-700 mb-8 text-center">By Felix</h2>
            <button
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
              onClick={handleEnter}
            >
              Enter Book
            </button>
          </div>
        </div>
      )}
    </div>
  );
}