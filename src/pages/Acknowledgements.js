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
      className="min-h-screen bg-gradient-to-br from-purple-100 to-white pt-12"
      ref={container}
    >
      <div className="bg-white rounded-xl shadow-xl px-10 py-5 max-w-3xl mx-auto text-container text-pretty">
        <h1 className="text-3xl font-bold mb-4 main-title">Acknowledgements</h1>
        <hr className="h-px my-5 bg-gray-300 border-0" />
        <p className="text-gray-700 text">
          I would like to thank a few people that helped me make this FLC final project possible. First off, my parents, for allowing me the amazing opportunity to go to Episcopal, which has been one of the best experiences and decisions of my life, and also for supporting me while I’m here through lots of calls, plenty of encouraging messages, and thoughtful (tasty too!) care packages. Second, all my teachers -especially my advisor Mr. Blair-May- for being incredibly supportive and encouraging, and always ready to answer any questions I had, even when I was stressed or confused. Third, I’d also like to thank all of my friends and classmates, whether it was studying together in the library right before a math quiz, swapping physics tips right before the midterm, or just having fun at climbing practice, they always made everything more fun and created lasting memories. Next, I’d like to thank the two people who taught me how to code websites: Ray and Geo. Although they were just two random high school seniors I met at a hackathon in greater NoVA, they started a passion for web development by allowing me to join their team and create a cool project. Without them, this website wouldn’t be a website. And last but most certainly not least, I would like to thank my little brother Gus for always being super excited to have fun and play together whenever I get home from school, and being such a cool and inspiring little brother.
        </p>
      </div>
    </div>
  );
}

export default Acknowledgements;