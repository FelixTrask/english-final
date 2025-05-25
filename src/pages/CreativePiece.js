import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Typewriter.css";
import { ArrowDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const story = [
  `Matthew White had never imagined himself moving to boarding school in the ninth grade. But then again, he also never imagined his mom actually making good on her threats, either.`,
  `He recalled what she had said the previous time they had fought: <em>“One more of your antics,”</em> she growled, with eyes narrowed, <em>“and you’re out of my house!”</em>`,
  `Matt had called her bluff every time, until last week. Something in her had clearly snapped, because she wasn’t backing down.`,
  `Fast forward just seven days and Matthew was packing his treasured belongings into the back of a yellow taxi, and getting a good last look at his townhome just outside New York City. His destination? Lake Lanier, Georgia. Personally, Matt hadn’t even heard of the place.`,
  `The trip down south was long, slow, and hot. Through train, bus, and yet another bus, a brisk New York spring day lazily melted into a sweltering, muggy southern night. Eventually, the bus dropped him off at the last stop, a long mile by foot from the school. Through the obnoxious buzzing of cicadas and the countless bugs crawling through the thick grass, Matt wondered if this was even the right place.`,
  `Among the knobbly, gnarled cypress trees, their thick roots warped with drapes of moss, the sky burned a deep, blood red. That’s when Matt felt it— a slight twinge of unease, like a prick in his skin. Surely his pranks hadn’t been that bad. His mother would realize how terrible of an idea this was and cave after a day or two, when he cried over the phone.`,
  `He reached the gate much faster than he expected. It loomed tall and black, wrought iron bars rising like spears. The decrepit, decaying stone on either side of the metal gate framed a gravel path, leading up a hill. The gate loudly creaked open.`,
  `​Tentatively, he​ stepped through. Gravel crunched beneath his sneakers as he walked along the winding path. Behind him, the gate swung shut, slow and deliberate. No sound. Not even one creak.`,
  `At the top of the hill, Matt finally got his first glimpse of the school: a battered, old stone manor that looked like it had seen better days. A single figure stood by the entrance, just tall enough to look unnatural.`,
  `<em>“Welcome to the Lanier Correctional School for Teenagers.”</em> His voice was thin, almost papery. <em>“You must be Matthew White, then?”</em>`,
  `Without waiting for a response, the mysterious figure continued on. <em>“I’m Headmaster Williams. This way, please.”</em>`,
  `The inside smelled like damp stone and was decorated straight out of the 19th century—candles flickered in ancient sconces and ancient tapestries lined the walls, but Matt couldn’t quite make out the scenes they depicted.`,
  `<em>“Generator powers the whole place,”</em> explained Williams. <em>“Even the pumps that get you your water.”</em> They must have passed over 100 doors—Matt lost count after 70.`,
  `<em>“Here we are.”</em> the headmaster said, sliding an old, rusty iron skeleton key into a rotting wooden door. Matt stepped inside and saw a metal cot with one pillow, along with a narrow window letting a sliver of moonlight into the room.`,
  `Matt stepped inside. The door slammed shut. The lock clicked.`,
  `<em>“Welcome home,”</em> the headmaster said from the other side. Matt stood, frozen.`,
  `So much for just one or two days.`,
];

export default function StoryScrollPin() {
  const containerRef = useRef(null);
  const progressBarRef = useRef(null);

  useEffect(() => {

    const items = containerRef.current.querySelectorAll(".story-item");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${story.length * 300}vh`,
        scrub: true,
        pin: true,
        onUpdate: (self) => {
          if (progressBarRef.current) {
            progressBarRef.current.style.height = `${self.progress * 100}%`;
          }
        },
      },
    });

    items.forEach((item, i) => {
      const text = item.querySelector("p");

      tl.fromTo(
        text,
        {
          x: i % 2 === 0 ? -300 : 300,
          autoAlpha: 0,
          rotation: i % 2 === 0 ? -5 : 5,
        },
        {
          x: 0,
          autoAlpha: 1,
          rotation: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        `label${i}`
      ).to(
        text,
        {
          x: i % 2 === 0 ? 300 : -300,
          autoAlpha: 0,
          rotation: i % 2 === 0 ? 5 : -5,
          duration: 0.8,
          ease: "power2.in",
        },
        `label${i}+=1`
      );

      tl.addLabel(`label${i}`, i * 100);
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.globalTimeline.clear();
      tl.scrollTrigger?.kill();
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>

      {/* Title */}
      <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-32 font-lucidia">
        <h1 className="text-5xl font-extrabold glow-text mb-4 typewriter">
          The Gate at Lanier
        </h1>
        <h2 className="text-2xl italic text-gray-300">By Felix Trask</h2>
        <br />
        <p className="font-serif flex items-center gap-2">
          <ArrowDown className="w-5 h-5" />
          Keep Scrolling!
        </p>
      </section>

      {/* Spacer */}
      <div className="h-[25vh] bg-black" />

      {/* Story Scroll */}
      <div
        ref={containerRef}
        className="min-h-screen bg-black text-white px-6 py-20 font-serif relative"
      >
        {/* Progress Bar */}
        <div className="fixed right-4 top-1/2 transform -translate-y-1/2 h-64 w-1 bg-gray-700 z-50">
          <div
            ref={progressBarRef}
            className="bg-red-600 w-full transition-all duration-300 ease-out"
            style={{ height: "0%" }}
          />
        </div>

        {/* Story Paragraphs */}
        {story.map((text, idx) => (
          <div
            key={idx}
            className="story-item absolute inset-0 flex items-center justify-center"
          >
            <p
              className="text-2xl max-w-2xl text-center"
              dangerouslySetInnerHTML={{ __html: text }}
            />
          </div>
        ))}
      </div>

      {/* Spacer */}
      <div className="h-[25vh] bg-black" />

      {/* Reflection */}
      <div className="bg-black text-white py-32 px-6 flex flex-col items-center justify-center">
        <h1 className="text-3xl">Explanation:</h1>
        <p className="text-2xl max-w-4xl text-center mt-6">
          In my story, The Gate at Lanier, I aimed to capture the slow-building suspense that Stephen King uses in his writing, as opposed to using abrupt scary events. I tried to create a subtle build-up in the story by focusing on small environmental details, like the blood-red sky, the buzzing cicadas, and the decaying gate. I’ve noticed that King also uses seemingly ordinary characters thrown into out-of-the-ordinary settings, so that’s what I did with Matt by placing an ordinary, slightly misbehaving teenager into a strange new school. I also tried to add some of King’s pacing into the story, by starting it off completely normal and slowly adding elements of horror until the twist at the end. The style that King uses subtly builds tension, which I found to be much more effective then random jumpscares or fast-paced horror.
        </p>
      </div>

      <div className="h-[20vh] bg-black" />
    </>
  );
}