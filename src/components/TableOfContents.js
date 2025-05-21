// components/TableOfContents.js
import { Link } from "react-router-dom";

const tocItems = [
  { title: "Introduction", path: "/intro" },
  { title: "Map", path: "/map" },
  { title: "Chapters", path: "/chapters" },
  { title: "Creative Piece", path: "/creative" },
  { title: "Acknowledgements", path: "/acknowledgements" },
  { title: "Back Cover", path: "/back-cover" },
];

function TableOfContents() {
  return (
    <div className="min-h-screen p-8 bg-white text-center">
      <h1 className="text-3xl font-bold mb-6">Table of Contents</h1>
      <ul className="space-y-4">
        {tocItems.map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              className="text-blue-600 hover:underline text-xl"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TableOfContents;