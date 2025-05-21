// components/TitlePage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function TitlePage() {
  const [title, setTitle] = useState("Reading Journal Final Project");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-100 to-white text-center p-8">
      <h1 className="text-4xl font-bold mb-2">{title}</h1>
      <input
        type="text"
        className="border p-2 rounded mb-4 w-full max-w-md"
        placeholder="Enter a creative title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <h2 className="text-xl text-gray-700 mb-8">By Felix</h2>
      <button
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        onClick={() => navigate("/contents")}
      >
        Enter Book
      </button>
    </div>
  );
}

export default TitlePage;