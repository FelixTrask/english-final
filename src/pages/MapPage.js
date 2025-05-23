// pages/MapPage.js
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function MapPage() {
  const container = useRef();

  useGSAP(
    () => {
      gsap.utils.toArray(".timeline-entry").forEach((entry, i) => {
        gsap.fromTo(
          entry,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: i * 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: entry,
              start: "top 85%",
            },
          }
        );
      });
    },
    { scope: container }
  );

  const rawPoints = [
    "I arrived at EHS with nerves and curiosity, unsure of what the year would bring.",
    "I went on Burch; when I came back, I felt almost at home.",
    "I got to know my roommate, friends, and teachers more.",
    "I stopped feeling homesick, and started hanging out + having lots of fun.",
    "I got onto the climbing team, looking forward to every single practice with my team.",
    "I went on winter break, I was excited to come back to Episcopal.",
    "I had lots of fun on the Ultimate team, making lots of new friends.",
    "I finally felt like I found my place at Episcopal, with the support of everyone around me.",
    "I crafted this final book, looking back with EHS as my new home.",
  ];

  // Use only the first 5 entries
  const points = rawPoints.slice(0, 9);

  return (
    <div
      ref={container}
      className="min-h-screen bg-gradient-to-br from-blue-50 to-white pt-16 pb-40 px-6"
    >
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-16 text-blue-800">
          How Episcopal Became my New Home
        </h1>

        <div className="relative border-l-4 border-blue-300 pl-8 space-y-32">
          {points.map((text, idx) => (
            <div
              key={idx}
              className="timeline-entry relative flex items-start"
            >
              {/* Dot with embedded SVG icon */}
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-500 rounded-full border-4 border-white shadow-md flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 2a8 8 0 018 8 8 8 0 11-8-8z" />
                  </svg>
                </div>
              </div>

              {/* Text bubble */}
              <div className="ml-6 bg-white p-6 rounded-lg shadow-lg flex-1">
                <p className="text-gray-700 leading-relaxed">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}