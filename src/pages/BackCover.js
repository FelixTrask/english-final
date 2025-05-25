import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function BlurbBox({ position }) {
  const blurbs = {
    left: {
      title: `"A personal journey through pages and places."`,
      text:
        "In this reflection on the themes of home and what it means to be at home, Felix Trask writes about his growth and character development through a transformative first year of high school. Through journal entries, essays, elevator pitches, and creative storytelling, the book reveals a growing sense of friendship and belonging throughout the 24-25 school year. Altogether, the book shows a peek into the world of a young student trying to find his place at a new school.",
    },
    right: {
      title: `"A quiet decent into horror."`,
      text:
        "In his debut horror story The Gate at Lanier, Felix Trask blends a creeping sense of dread with vivid imagery to tell the story of a boy named Matthew White who gets shipped off to a Southern boarding school. What begins as simple reprimanding turns into something stranger- and far more unsettling. Drawing inspiration from the famous stories of legendary writer Stephen King, this horror tale aims to mirror the scariest themes of the rest of the collection: leaving home and facing the unknown.",
    },
    center: {
      title: `"A curated selection that exemplifies his journey."`,
      text:
        "Felix’s collection of his works is more than just a portfolio - it’s a highly curated journey from feeling out of place to truly belonging. With sections that highlight the key components and turning points of his story, and a map that ties it all together, this collection captures the powerful transformation of a freshman at Episcopal. ",
    },
  };

  const blurb = blurbs[position];

  return (
    <div className="bg-white/90 rounded-xl shadow-lg backdrop-blur-md w-[400px] max-w-full p-6 text-[15px] text-gray-800 pointer-events-auto leading-relaxed">
      <h2 className="font-semibold text-base mb-2">{blurb.title}</h2>
      <p>{blurb.text}</p>
    </div>
  );
}

function BackCover() {
  const container = useRef();

  useGSAP(() => {
    gsap.fromTo(
      container.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power2.out" }
    );

    gsap.fromTo(
      ".main-title",
      { y: -40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.3, ease: "power3.out" }
    );

    gsap.fromTo(
      ".blurb",
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.6,
        ease: "power3.out",
        stagger: 0.2,
      }
    );
  }, { scope: container });

  return (
    <div className="relative min-h-screen pt-12 overflow-x-hidden" ref={container}>
      <div
        className="absolute inset-0 bg-cover bg-center z-0 brightness-75"
        style={{
          backgroundImage:
            "url('https://wallpapersok.com/images/hd/elegant-old-ornate-border-book-cover-zqd2h31wid1pmbp4.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-blue-100/50 to-transparent z-0" />

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-20 px-8 py-24 text-center pointer-events-none max-w-[1200px] mx-auto">
        {/* Title Row */}
        <div className="pointer-events-auto">
          <h1 className="text-4xl font-bold text-white drop-shadow-lg main-title">Back Cover</h1>
          <hr className="h-px my-4 bg-white/60 border-0 w-48 mx-auto" />
        </div>

        {/* Second Row: Two blurbs side by side */}
        <div className="flex flex-wrap justify-center gap-16 blurb">
          <BlurbBox position="left" />
          <BlurbBox position="right" />
        </div>

        {/* Third Row: Centered blurb */}
        <div className="blurb">
          <BlurbBox position="center" />
        </div>
      </div>
    </div>
  );
}

export default BackCover;