"use client";

import React, { useEffect, useRef } from "react";
import { Oswald } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";

// Components
import DepthMeter from "@/src/components/ui/DepthMeter";
import Hero from "@/src/components/sections/Hero";
import About from "@/src/components/sections/About";
import FishingMap from "@/src/components/sections/FishingMap";
import Fleet from "@/src/components/sections/Fleet";
import Testimonials from "@/src/components/sections/Testimonials";
import Catch from "@/src/components/sections/Catch";
import Gallery from "@/src/components/sections/Gallery";

import Preloader from "@/src/components/ui/PreLoader";


const oswald = Oswald({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function Page() {
  const container = useRef<HTMLDivElement>(null);

  // Note: Most global animations (Cursor, Navbar) are now in ClientLayout.
  // We only keep PAGE SPECIFIC animations here.
  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // Depth Meter Logic (Page specific scroll calculation)
      ScrollTrigger.create({
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          const depth = Math.floor(self.progress * 4000);
          const depthLabel = document.querySelector(".scroll-depth-label");
          const depthBar = document.querySelector(".scroll-depth-bar");
          if (depthLabel) depthLabel.textContent = `${depth}m`;
          if (depthBar) gsap.to(depthBar, { height: `${self.progress * 100}%`, duration: 0.1 });
        }
      });

      // Horizontal Scroll (Target Species)
      const race = document.querySelector(".race-wrapper");
      if (race) {
        const getScrollAmount = () => -(race.scrollWidth - window.innerWidth);
        gsap.to(race, {
          x: getScrollAmount,
          ease: "none",
          scrollTrigger: {
            trigger: ".race-section",
            start: "top top",
            end: () => `+=${Math.abs(getScrollAmount())}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
      }

      // Fleet Stacking
      const cards = document.querySelectorAll<HTMLElement>(".fleet-card"); 

      cards.forEach((card) => {
        // TypeScript now knows 'card' is an HTMLElement
        ScrollTrigger.create({
          trigger: card,
          start: "top top", 
          pin: true, 
          pinSpacing: false, 
          end: "bottom top",
          scrub: true,
        });
      });

      // Draggable Reviews
      const reviewContainer = document.querySelector(".review-track") as HTMLElement;
      if (reviewContainer) {
        const width = reviewContainer.scrollWidth;
        const winWidth = window.innerWidth;
        Draggable.create(reviewContainer, {
          type: "x",
          bounds: { minX: -width + winWidth, maxX: 0 },
          edgeResistance: 0.65,
        });
      }

      // Marquee
      gsap.to(".marquee-row-1", {
        xPercent: -50,
        repeat: -1,
        duration: 20,
        ease: "linear",
      });
      gsap.to(".marquee-row-2", {
        xPercent: -50,
        repeat: -1,
        duration: 25,
        ease: "linear",
        modifiers: { xPercent: (x) => x }
      });
      gsap.fromTo(".marquee-row-2", { xPercent: -50 }, { xPercent: 0, repeat: -1, duration: 25, ease: "linear" });

    }, container);

    return () => ctx.revert();
  }, []);

  // Use dummy functions for hover since Layout handles the cursor mostly, 
  // or you can implement Context later for perfect hover syncing.
  const dummyHover = () => {};

  return (
    <div ref={container}>
      <Preloader fontClass={oswald.className} />

      
      <DepthMeter />
      
      <Hero fontClass={oswald.className} onEnter={dummyHover} onLeave={dummyHover} />
      
      <About fontClass={oswald.className} />
      
      <FishingMap fontClass={oswald.className} />
      
      <Fleet fontClass={oswald.className} />
      
      <Testimonials fontClass={oswald.className} />
      
      <Catch fontClass={oswald.className} />
      
      <Gallery fontClass={oswald.className} />
      
    </div>
  );
}