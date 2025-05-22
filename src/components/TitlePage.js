import React, { useState, useRef } from "react";
import "./Peel.css";
import TableOfContents from "./TableOfContents";
import { Home } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP); // ensures proper registration in React

export default function TitlePage() {
  const [peeling, setPeeling] = useState(false);
  const [finished, setFinished] = useState(false);
  const container = useRef(); // Scope container for GSAP animations

  // GSAP animations scoped to container
  useGSAP(
    () => {
      gsap.fromTo(
        ".home-icon",
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
      gsap.fromTo(
        ".main-title",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: "power3.out" }
      );
      gsap.fromTo(
        ".subtitle",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, delay: 0.6, ease: "power3.out" }
      );
      gsap.fromTo(
        ".enter-button",
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 1, delay: 1, ease: "back.out(1.7)" }
      );
    },
    { scope: container }
  );

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

      {/* Cover Page */}
      {!finished && (
        <div
          className={`cover absolute inset-0 rounded-lg shadow-lg transform-style-preserve-3d overflow-hidden ${
            peeling ? "peel" : ""
          }`}
          style={{ transformOrigin: "left center" }}
          onAnimationEnd={handleAnimationEnd}
        >
          {/* Background image and overlay */}
          <div
            className="relative w-full h-full flex items-center justify-center"
            ref={container}
          >
            <div
              className="absolute inset-0 bg-cover bg-center z-0 brightness-75"
              style={{
                backgroundImage:
                  "url('https://wallpapersok.com/images/hd/elegant-old-ornate-border-book-cover-zqd2h31wid1pmbp4.jpg')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-blue-100/50 to-transparent z-0" />

            {/* Content */}
            <div className="relative z-10 text-center text-gray-800 px-6 max-w-3xl">
              <div className="mb-6 flex justify-center home-icon">
                <Home className="text-6xl text-blue-700 drop-shadow" />
              </div>
              <h1 className="text-5xl font-extrabold mb-3 drop-shadow-sm main-title">
                Episcopal: A New Home
              </h1>
              <h2 className="text-2xl font-medium text-gray-600 mb-8 subtitle">
                By Felix Trask
              </h2>

              {/* Enter Book Button */}
              <div className="flex justify-center items-center">
                <button
                  onClick={handleEnter}
                  className="relative border-2 border-blue-700 hover:border-blue-900 text-white font-bold py-3 px-8 rounded-full bg-blue-700 hover:bg-blue-900 transition-all duration-500 overflow-hidden shadow-md group enter-button"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-sky-500 to-sky-800 opacity-0 group-hover:opacity-20 transition duration-300" />
                  <span className="relative z-10">Flip the page...</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}