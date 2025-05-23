import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger, MotionPathPlugin } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const GsapShowcase = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Define the timeline with a scroll trigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        start: 'top top',
        end: '+=2000', // long scroll
        scrub: 1,
        snap: {
          snapTo: 'labels',
          duration: { min: 0.2, max: 1.5 },
          delay: 0.2,
          ease: 'power1.inOut'
        },
      },
    });

    // SECTION 1: Initial box reveal
    tl.addLabel('start')
      .from('.box p', {
        scale: 0,
        autoAlpha: 0,
        rotation: 45,
        duration: 1,
        ease: 'back.out(1.7)'
      })
      .from('.box', {
        backgroundColor: '#28a92b',
        duration: 1
      });

    // SECTION 2: Spin and scale
    tl.addLabel('spin')
      .to('.box', {
        rotation: 360,
        scale: 1.5,
        duration: 1,
        ease: 'power2.inOut'
      });

    // SECTION 3: Move across the screen with a motion path
    tl.addLabel('motion')
      .to('.box', {
        motionPath: {
          path: [
            { x: 0, y: 0 },
            { x: 80, y: -50 },
            { x: 160, y: 0 },
            { x: 240, y: 50 },
            { x: 320, y: 0 }
          ],
          autoRotate: true,
        },
        duration: 2,
        ease: 'power1.inOut'
      });

    // SECTION 4: Add multiple elements and stagger
    tl.addLabel('stagger')
      .from('.dots div', {
        y: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 0.5,
        ease: 'back.out(1.7)'
      });

    // SECTION 5: Shrink and fade
    tl.addLabel('fadeout')
      .to('.box', {
        scale: 0.5,
        autoAlpha: 0,
        duration: 1,
        ease: 'expo.inOut'
      });

    // Cleanup
    return () => {
      ScrollTrigger.refresh(); 
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      tl.kill();
    };
  }, []);

  return (
    <div ref={containerRef} className="container min-h-screen bg-gray-100 text-center py-20">
      <h1 className="text-3xl font-bold mb-12 text-gray-800">GSAP Scroll Showcase</h1>

      {/* Main animated box */}
      <div className="box w-32 h-32 mx-auto mb-20 bg-blue-500 rounded-lg flex items-center justify-center text-white text-xl shadow-lg">
        <p>GSAP!</p>
      </div>

      {/* Dots for stagger animation */}
      <div className="dots flex justify-center gap-4 mt-40">
        <div className="w-10 h-10 bg-red-400 rounded-full"></div>
        <div className="w-10 h-10 bg-green-400 rounded-full"></div>
        <div className="w-10 h-10 bg-yellow-400 rounded-full"></div>
        <div className="w-10 h-10 bg-blue-400 rounded-full"></div>
        <div className="w-10 h-10 bg-purple-400 rounded-full"></div>
      </div>

      <p className="mt-60 text-gray-500">Keep scrolling to experience all animations!</p>
    </div>
  );
};

export default GsapShowcase;