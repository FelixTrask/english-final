import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const story = [
  `Matthew White had never imagined himself moving to boarding school in the ninth grade. But then again, he also never imagined his mom actually making good on her threats, either.`,
  `He recalled what she had said the previous time they had fought: <em>“One more of your antics,”</em> she growled, with eyes narrowed, <em>“and you’re out of my house!”</em>`,
  `Matt had called her bluff every time, until last week. Something in her had clearly snapped, because she wasn’t backing down.`,
  `Fast forward just seven days and Matthew was packing his treasured belongings into the back of a yellow taxi, and getting a good last look at his townhome just outside New York City. His destination? Lake Lanier, Georgia. Personally, Matt hadn’t even heard of the place.`,
  `The trip down south was long, slow, and hot. Through train, bus, and yet another bus, a brisk New York spring day lazily melted into a sweltering, muggy southern night. Eventually, the bus dropped him off at the last stop, a long mile by foot from the school. Through the obnoxious buzzing of cicadas and the countless bugs crawling through the thick grass, Matt wondered if this was even the right place.`,
  // add more paragraphs as needed
];

export default function StoryScrollPin() {
  const containerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${story.length * 150}vh`,
        scrub: true,
        pin: true,
      },
    });

    story.forEach((_, i) => {
      const item = containerRef.current.querySelectorAll('.story-item')[i];
      const text = item.querySelector('p');

      tl.fromTo(
        text,
        { x: i % 2 === 0 ? -300 : 300, autoAlpha: 0 },
        {
          x: 0,
          autoAlpha: 1,
          duration: 0.8,
          ease: 'power2.out',
        },
        `label${i}`
      )
      .to(
        text,
        { x: i % 2 === 0 ? 300 : -300, autoAlpha: 0, duration: 0.8, ease: 'power2.in' },
        `label${i}+=0.8`
      );
      tl.addLabel(`label${i}`, i * 100);
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
      gsap.globalTimeline.clear();
    };
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white px-6 py-20">
      {story.map((text, idx) => (
        <div key={idx} className="story-item absolute inset-0 flex items-center justify-center">
          <p className="text-2xl max-w-2xl text-center" dangerouslySetInnerHTML={{ __html: text }}></p>
        </div>
      ))}
    </div>
  );
}