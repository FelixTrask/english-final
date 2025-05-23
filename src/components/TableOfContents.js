// components/TableOfContents.js
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function TableOfContents() {
  const container = useRef();

  useGSAP(() => {
    gsap.fromTo(
      ".toc-bg",
      { scale: 1.05, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: "power2.out" }
    );

    gsap.fromTo(
      ".main-title",
      { y: -40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.3, ease: "power3.out" }
    );

    gsap.fromTo(
      ".subtitle",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.6, ease: "power3.out" }
    );

    gsap.fromTo(
      ".toc-link",
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      }
    );
  }, { scope: container });

  return (
    <div
      ref={container}
      className="min-h-screen p-12 bg-gradient-to-br from-blue-50 to-white text-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/book-cover.png')] opacity-10 pointer-events-none toc-bg" />
      <div className="bg-white rounded-xl shadow-xl max-w-3xl mx-auto px-10 py-12 z-10 relative">
        <h1 className="text-4xl font-bold text-blue-800 mb-3 main-title">
          Table of Contents
        </h1>
        <p className="text-gray-600 text-lg mb-8 subtitle">
          Explore each part of my journey
        </p>

        <ul className="space-y-4 text-left text-lg font-medium">
          <li>
            <Link
              to="/intro"
              className="toc-link text-blue-700 hover:underline hover:text-xl hover:text-blue-900 transition duration-300"
            >
              ➤ Preface
            </Link>
          </li>
          <li>
            <Link
              to="/map"
              className="toc-link text-blue-700 hover:underline hover:text-xl hover:text-blue-900 transition duration-300"
            >
              ➤ Map
            </Link>
          </li>
          <li>
            <Link
              to="/chapters"
              className="toc-link text-blue-700 hover:underline hover:text-xl hover:text-blue-900 transition duration-300"
            >
              ➤ Chapters
            </Link>
          </li>
          <li>
            <Link
              to="/creative"
              className="toc-link text-blue-700 hover:underline hover:text-xl hover:text-blue-900 transition duration-300"
            >
              ➤ Creative Piece
            </Link>
          </li>
          <li>
            <Link
              to="/acknowledgements"
              className="toc-link text-blue-700 hover:underline hover:text-xl hover:text-blue-900 transition duration-300"
            >
              ➤ Acknowledgements
            </Link>
          </li>
          <li>
            <Link
              to="/back-cover"
              className="toc-link text-blue-700 hover:underline hover:text-xl hover:text-blue-900 transition duration-300"
            >
              ➤ Back Cover
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TableOfContents;