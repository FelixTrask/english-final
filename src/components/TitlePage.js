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
    <div
      className="cover-container min-h-screen relative overflow-hidden"
      style={{ perspective: 1500 }}
    >
      {/* Overlay for Table of Contents */}
      <div
        className={`toc-overlay absolute inset-0 transition-opacity duration-500 ease-out pointer-events-auto ${
          finished ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <TableOfContents />
      </div>

      {/* Cover with peel animation */}
      {!finished && (
        <div
          className={`cover absolute inset-0 rounded-lg shadow-lg transform-style-preserve-3d overflow-hidden ${
            peeling ? "peel" : ""
          }`}
          style={{ transformOrigin: "left center" }}
          onAnimationEnd={handleAnimationEnd}
        >
          {/* Background image */}
          <div className="relative w-full h-full flex items-center justify-center px-12 py-16">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-80 z-0"
              style={{
                backgroundImage:
                  "url('https://images.stockcake.com/public/3/a/5/3a515da3-4bf5-4f56-bb81-3623bbafc401_large/ornate-leather-binding-stockcake.jpg')",
              }}
            />

            {/* Title and button */}
            <div className="relative z-10 text-center text-white">
              <h1 className="text-4xl font-bold mb-2 drop-shadow">
                A Journey Through Bits and Bytes
              </h1>
              <h2 className="text-xl text-gray-100 mb-8 drop-shadow">
                By Felix
              </h2>
              <button
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                onClick={handleEnter}
              >
                Enter Book
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}