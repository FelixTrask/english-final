import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Introduction() {
  const container = useRef();

  useEffect(() => {
    const paragraphs = container.current.querySelectorAll("p");

    gsap.fromTo(
      paragraphs,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out", stagger: 0.3 }
    );

    // Cleanup function to kill triggers on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-blue-100 to-white pt-12"
      ref={container}
    >
      <div className="bg-white rounded-xl shadow-xl px-10 py-5 max-w-3xl mx-auto text-container text-pretty">
        <h1 className="text-3xl font-bold mb-6 main-title">Preface</h1>
        <hr className="h-px my-5 bg-gray-300 border-0" />
        
        {/* Split into separate paragraphs */}
        <p className="text-gray-700">
          My time at <span className="highlight-word">Episcopal High School</span> was truly one to remember. From playing spikeball with friends from the <span className="highlight-word">Ultimate Frisbee</span> team to meeting up with my partners for <span className="highlight-word">Science Olympiad</span> late at night, I’ve truly never been a part of a school that has such a <span className="highlight-word">welcoming</span> and <span className="highlight-word">kind community</span>. At previous boarding schools, I was always reluctant to call my dorm <span className="highlight-word">"home"</span> because I felt like it didn’t really fit. When my friends asked me if I wanted to go back <span className="highlight-word">home</span>, it never felt quite right. I still considered home as not the place that I lived in, but instead the place that my <span className="highlight-word">family</span> was.
        </p>

        <br />

        <p className="text-gray-700">
          My very first day at Episcopal, while I was signing in at the registration desk in the gym, I was <span className="highlight-word">scared</span> and I thought that I would never find my place here at Episcopal. But not even two seconds later, two upperclassmen came up to me and asked me what my name was, where I was from, and <span className="highlight-word">welcomed</span> me to Episcopal. Sadly, I don’t remember who was there to greet me that day. However, although I don’t remember their names, even such a simple interaction such as that completely turned my whole day around. I realized how <span className="highlight-word">friendly</span> and <span className="highlight-word">welcoming</span> people were at Episcopal, and all of my fear of not being accepted or not fitting in completely melted away.
        </p>

        <br />

        <p className="text-gray-700">
          As I started the first week of school, and eventually my classes, I realized how great all my <span className="highlight-word">teachers</span> were and how <span className="highlight-word">supportive</span> everyone was. When I went on <span className="highlight-word">Burch</span>, I bonded with my group super well and unlike my previous experiences, I did catch myself calling Episcopal <span className="highlight-word">home</span> at least twice.
        </p>

        <br />

        <p className="text-gray-700">
          As I got onto the <span className="highlight-word">climbing team</span>, it was an entirely different experience that I had never had before. Everyone was super <span className="highlight-word">supportive</span> and really wanted to see everyone else push themselves and climb at their highest level. It was the same on the <span className="highlight-word">Ultimate Frisbee</span> team as well.
        </p>

        <br />

        <p className="text-gray-700">
          Cut to now, and I’ve grown from a <span className="highlight-word">scared</span> kid in a new place to having lots of <span className="highlight-word">friends</span>, amazing <span className="highlight-word">mentors</span>, and the <span className="highlight-word">confidence</span> to be myself. Ultimately, I chose to pick entries that talked about my time at Episcopal and the <span className="highlight-word">transition</span> between being a new freshman to feeling good about calling Episcopal my new <span className="highlight-word">home</span>, at least for the school year. I think that some pieces that highlight that specifically are the first one, where I talk about gaining confidence from the <span className="highlight-word">crew team</span>, and both of the essays, which talk about what <span className="highlight-word">home</span> means.
        </p>

        <br />

        <p className="text-gray-700">
          In conclusion, Episcopal has truly <span className="highlight-word">changed</span> me not just by giving me a <span className="highlight-word">supportive backbone</span> that encourages me to be and express myself, but also by handing me the <span className="highlight-word">tools</span> to change my life for the better.
        </p>
      </div>
      <div className="py-5" />
    </div>
  );
}

export default Introduction;