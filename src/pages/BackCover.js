import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function BlurbBox({ position }) {
  const blurbs = {
    left: "This is the first blurb. It represents one of the major themes explored in the project—how we reflect on our journeys and what we discover along the way.",
    right: "The second blurb dives into the emotional and intellectual challenges faced throughout the reading and writing process, and how they shaped the final product.",
    center: "Lastly, the third blurb ties everything together, emphasizing personal growth, new insights, and a deepened sense of empathy and understanding.",
  };

  return (
    <div className="bg-white/90 rounded-xl shadow-lg backdrop-blur-md w-72 p-4 text-sm text-gray-800 pointer-events-auto">
      <p>{blurbs[position]}</p>
    </div>
  );
}

function BackCover() {
  const container = useRef();

  useGSAP(() => {
    // Fade in the whole background container
    gsap.fromTo(
      container.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power2.out" }
    );

    // Animate text
    gsap.fromTo(
      ".main-title",
      { y: -40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.3, ease: "power3.out" }
    );

    gsap.fromTo(
      ".text",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.6, ease: "power3.out" }
    );
  }, { scope: container });

  return (
  <div className="relative min-h-screen pt-12 overflow-hidden" ref={container}>
    <div
      className="absolute inset-0 bg-cover bg-center z-0 brightness-75"
      style={{
        backgroundImage:
          "url('https://wallpapersok.com/images/hd/elegant-old-ornate-border-book-cover-zqd2h31wid1pmbp4.jpg')",
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-blue-100/50 to-transparent z-0" />

    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-20 px-8 py-24 text-center pointer-events-none">
      <div className="pointer-events-auto">
        <h1 className="text-4xl font-bold text-white drop-shadow-lg main-title">Back Cover</h1>
        <hr className="h-px my-4 bg-white/60 border-0 w-48 mx-auto" />
      </div>

      <div className="flex flex-wrap justify-center gap-16">
        <BlurbBox position="left" />
        <BlurbBox position="right" />
      </div>

      <div>
        <BlurbBox position="center" />
      </div>
    </div>
  </div>
  );
}

export default BackCover;