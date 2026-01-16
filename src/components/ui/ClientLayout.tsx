"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";

// Components
import Navbar from "@/src/components/ui/Navbar";
import Cursor from "@/src/components/ui/Cursor";
import WhatsAppWidget from "@/src/components/ui/WhatsappWidget";
import Footer from "@/src/components/sections/Footer";

// Register Plugins Globally
gsap.registerPlugin(ScrollTrigger, Draggable);

export default function ClientLayout({ 
  children, 
  fontClass 
}: { 
  children: React.ReactNode, 
  fontClass: string 
}) {
  const container = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname(); // Helpful if you want to reset scroll on route change
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // --- GLOBAL ANIMATIONS (Cursor, Scroll State, Preloader) ---
  useEffect(() => {
    // 1. Move Cursor Logic
    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.6,
        ease: "power3.out",
      });
    };
    window.addEventListener("mousemove", moveCursor);

    // 2. GSAP Context
    const ctx = gsap.context(() => {
      
      // PRELOADER
      const tl = gsap.timeline({
        onComplete: () => {
            ScrollTrigger.refresh();
            setIsLoading(false);
        }
      });

      const depthObj = { value: 0 };
      
      tl.to(depthObj, {
        value: 3450,
        duration: 2.5,
        ease: "expo.inOut",
        onUpdate: () => {
          const counter = document.querySelector(".depth-counter");
          if (counter) counter.textContent = Math.floor(depthObj.value).toString();
        }
      })
      .to(".preloader-content", { opacity: 0, y: -50, duration: 0.5 }, "-=0.5")
      .to(".preloader", { yPercent: -100, duration: 1, ease: "power4.inOut" });

      // NAVBAR SCROLL STATE
      ScrollTrigger.create({
        start: "top -50",
        onUpdate: (self) => setIsScrolled(self.direction === 1 || self.scroll() > 50),
      });

      // GLOBAL MAGNETIC BUTTONS
      // We attach this to document so it works for buttons in children pages too
      const buttons = document.querySelectorAll(".magnetic-btn");
      buttons.forEach((btn) => {
        btn.addEventListener("mousemove", (e: any) => {
          const rect = btn.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          gsap.to(btn, { x: x * 0.3, y: y * 0.3, duration: 0.3 });
        });
        btn.addEventListener("mouseleave", () => {
          gsap.to(btn, { x: 0, y: 0, duration: 0.3 });
        });
      });

    }, container);

    return () => {
      ctx.revert();
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [pathname]); // Re-run if route changes

  // Global Hover Helpers
  const onHoverEnter = () => {
    gsap.to(cursorRef.current, {
      scale: 1,
      borderWidth: 0,
      mixBlendMode: "difference",
      filter: "blur(0px)",
      duration: 0.35,
      ease: "power3.out",
    });
  };
  
  const onHoverLeave = () => {
    gsap.to(cursorRef.current, {
      scale: 1,
      borderWidth: 0,
      mixBlendMode: "normal",
      filter: "blur(0px)",
      duration: 0.35,
      ease: "power3.out",
    });
  };
  

  return (
    <div ref={container} className="bg-[#050505] text-white selection:bg-sq-secondary selection:text-black min-h-screen">
      
      {/* Global Noise Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.04] z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      <Cursor ref={cursorRef} />

      <Navbar 
        ref={navRef}
        isScrolled={isScrolled} 
        fontClass={fontClass} 
        onEnter={onHoverEnter} 
        onLeave={onHoverLeave} 
      />

      <WhatsAppWidget onEnter={onHoverEnter} onLeave={onHoverLeave} />

      {/* RENDER THE PAGE CONTENT HERE */}
      <main>
        {children}
      </main>

      <Footer fontClass={fontClass} onEnter={onHoverEnter} onLeave={onHoverLeave} />
    </div>
  );
}