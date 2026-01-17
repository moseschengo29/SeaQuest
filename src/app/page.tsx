"use client";

import React, { useEffect, useRef, useState } from "react";
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

export default function Home() {
  const container = useRef<HTMLDivElement>(null);

  // Note: Most global animations (Cursor, Navbar) are now in ClientLayout.
  // We only keep PAGE SPECIFIC animations here.
  const [isFirstVisit, setIsFirstVisit] = useState(true);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("seaquest_visited");
    if (hasVisited) {
      setIsFirstVisit(false);
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => ScrollTrigger.refresh()
      });

      if (!hasVisited) {
        // --- 1. PRELOADER SEQUENCE ---
        const depthObj = { value: 0 };
        
        tl.to(depthObj, {
          value: 3450,
          duration: 3, // Slightly longer for a smoother count
          ease: "expo.inOut",
          onUpdate: () => {
            // Use a direct query here to ensure we find the element
            const counter = document.querySelector(".depth-counter");
            if (counter) {
              counter.textContent = Math.floor(depthObj.value).toString();
            }
          }
        })
        .to(".preloader-content", { 
          opacity: 0, 
          y: -50, 
          duration: 0.5 
        }, "-=0.5")
        .to(".preloader", {
          yPercent: -100,
          duration: 1.2,
          ease: "power4.inOut",
          onComplete: () => {
            sessionStorage.setItem("seaquest_visited", "true");
          }
        });
      } else {
        // --- 2. SKIP PRELOADER ---
        tl.set(".preloader", { yPercent: -100, visibility: "hidden" });
      }

      // --- 3. HERO REVEAL (CLEANED UP - REMOVED DUPLICATE) ---
      tl.to(".hero-char", {
        y: 0,
        stagger: 0.05,
        duration: 1,
        ease: "power4.out"
      }, ">-0.5") // Starts slightly before the preloader finishes sliding up
      .to(".hero-sub", {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out"
      }, "-=0.8");
      
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
      // 1. Tell querySelectorAll to return a list of HTMLElements
        const cards = document.querySelectorAll<HTMLElement>(".fleet-card"); 

        cards.forEach((card) => {
          // TypeScript now knows 'card' is an HTMLElement, no 'any' needed
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