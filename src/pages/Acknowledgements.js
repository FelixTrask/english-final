import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function Acknowledgements() {
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
    <div
      className="min-h-screen bg-gradient-to-br from-amber-100 to-white pt-12"
      ref={container}
    >
      <div className="bg-white rounded-xl shadow-xl px-10 py-5 max-w-3xl mx-auto text-container text-pretty">
        <h1 className="text-3xl font-bold mb-4 main-title">Acknowledgements</h1>
        <hr className="h-px my-5 bg-gray-300 border-0" />
        <p className="text-gray-700 text">
          example text
        </p>
      </div>
    </div>
  );
}

export default Acknowledgements;