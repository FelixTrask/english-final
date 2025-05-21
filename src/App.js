import './index.css';
import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to My App</h1>
        <p className="text-gray-600 mb-6">
          This is a TailwindCSS + React boilerplate. Get started by editing <code>App.js</code>.
        </p>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
          Click Me
        </button>
      </div>
    </div>
  );
}

export default App;