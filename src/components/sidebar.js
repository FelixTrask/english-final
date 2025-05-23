// src/components/Sidebar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, BookOpen, Map, Info, Home, Pencil } from "lucide-react";

export default function Sidebar({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Sidebar Button and Menu */}
      <div className="fixed top-4 left-4 z-50">
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-gray-800 text-white p-2 rounded-xl shadow-md hover:bg-gray-700 transition"
            aria-label="Toggle sidebar"
          >
            <Menu className="w-6 h-6" />
          </button>

          {isOpen && (
            <div className="absolute top-12 left-0 bg-white rounded-xl shadow-lg w-56 p-3 flex flex-col gap-2 text-gray-800 animate-fade-in animate-fade-out">
              <SidebarLink to="/" icon={<Home className="w-5 h-5" />} label="Home" />
              <SidebarLink to="/contents" icon={<BookOpen className="w-5 h-5" />} label="Table of Contents" />
              <SidebarLink to="/chapters" icon={<Pencil className="w-5 h-5" />} label="Chapters" />
              <SidebarLink to="/map" icon={<Map className="w-5 h-5" />} label="Map" />
              <SidebarLink to="/acknowledgements" icon={<Info className="w-5 h-5" />} label="Acknowledgements" />
            </div>
          )}
        </div>
      </div>

      {children}
    </>
  );
}

function SidebarLink({ to, icon, label }) {
  return (
    <Link
      to={to}
      className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100 transition"
    >
      {icon}
      <span className="text-sm">{label}</span>
    </Link>
  );
}