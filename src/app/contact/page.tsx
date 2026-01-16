"use client";

import React, { useEffect, useRef } from "react";
import { Oswald } from "next/font/google";
import gsap from "gsap";

const oswald = Oswald({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(".contact-title-char", {
        yPercent: 100,
        stagger: 0.03,
        duration: 1,
        ease: "power4.out",
      })
      .from(".contact-fade", {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.5");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen pt-40 pb-20 px-6 bg-[#041739] selection:bg-sq-secondary selection:text-black">
      {/* Background Sonar Pulse */}
      <div className="fixed top-0 right-0 w-[60vw] h-[60vw] bg-[#03122c] rounded-full blur-[120px] pointer-events-none animate-pulse" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
        
        {/* LEFT: Dispatch Info */}
        <div className="flex flex-col justify-center">
          <div className="overflow-hidden mb-6">
            <h1 className={`${oswald.className} text-7xl md:text-9xl font-bold uppercase leading-none tracking-tighter`}>
              {"SECURE".split("").map((char, i) => (
                <span key={i} className="contact-title-char inline-block">{char === " " ? "\u00A0" : char}</span>
              ))}
              <br />
              <span className="text-sq-secondary stroke-text">
                {"DISPATCH".split("").map((char, i) => (
                  <span key={i} className="contact-title-char inline-block">{char === " " ? "\u00A0" : char}</span>
                ))}
              </span>
            </h1>
          </div>

          <div className="contact-fade mt-4 space-y-10">
            <p className="text-gray-400 text-xl max-w-md leading-relaxed">
              Whether you&apos;re looking to book a deep-sea hunt or secure a fresh haul of premium lobster and crab, our comms are open.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <p className="text-sq-secondary text-[10px] font-bold uppercase tracking-[0.3em] mb-2">Main Base</p>
                  <p className="text-lg font-bold uppercase">Post Bank, Moi Avenue<br/>Mombasa, Kenya.</p>
                </div>
                <div>
                  <p className="text-sq-secondary text-[10px] font-bold uppercase tracking-[0.3em] mb-2">VHF Channel</p>
                  <p className="text-lg font-bold uppercase">+254 742 363 472</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-sq-secondary text-[10px] font-bold uppercase tracking-[0.3em] mb-2">Seafood Dispatch</p>
                  <p className="text-lg font-bold uppercase underline">info@seaquestreasources.com</p>
                </div>
                <div>
                  <p className="text-sq-secondary text-[10px] font-bold uppercase tracking-[0.3em] mb-2">Operating Hours</p>
                  <p className="text-lg font-bold uppercase">04:00 — 22:00 EAT</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Logistics Form */}
        <div className="contact-fade bg-[#020d1f] border border-white/10 p-8 md:p-12 rounded-2xl shadow-2xl relative overflow-hidden group">
          {/* Subtle Grid overlay for the form */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          
          <form className="relative z-10 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold">Signal Source (Name)</label>
                <input 
                  type="text" 
                  placeholder="IDENTIFY..." 
                  className="bg-transparent border-b border-white/10 py-3 focus:outline-none font-bold text-lg focus:border-sq-secondary transition-all placeholder:text-gray-800"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold">Comms Line (Email)</label>
                <input 
                  type="email" 
                  placeholder="ADDRESS..." 
                  className="bg-transparent border-b border-white/10 py-3 focus:outline-none font-bold text-lg focus:border-sq-secondary transition-all placeholder:text-gray-800"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold">Request Type</label>
              <select className="bg-transparent border-b border-white/10 py-3 focus:outline-none font-bold text-lg appearance-none cursor-pointer">
                <option className="bg-[#050505]">CHARTER: LOBSTERS & CRABS HUNT</option>
                <option className="bg-[#050505]">SUPPLY: LIVE LOBSTER (WHOLESALE)</option>
                <option className="bg-[#050505]">SUPPLY: DEEP SEA CRAB (WHOLESALE)</option>
                <option className="bg-[#050505]">GENERAL LOGISTICS INQUIRY</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold">Haul Details / Message</label>
              <textarea 
                rows={4}
                placeholder="DESCRIBE YOUR REQUEST..." 
                className="bg-transparent border-b border-white/10 py-3 focus:outline-none font-bold text-lg focus:border-sq-secondary transition-all placeholder:text-gray-800 resize-none"
              />
            </div>

            <button 
              className="magnetic-btn w-full py-6 bg-sq-secondary text-black font-bold uppercase tracking-[0.5em] text-sm hover:bg-white transition-all flex items-center justify-center gap-4 group"
            >
              <span>Transmit Signal</span>
              <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
            </button>
          </form>

          {/* Form Footer Status */}
          <div className="mt-10 flex justify-between items-center text-[9px] font-mono text-gray-600 uppercase tracking-widest border-t border-white/5 pt-6">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              <span>Transmitter Ready</span>
            </div>
            <span>SeaQuest Logistics v2.6</span>
          </div>
        </div>

      </div>
    </div>
  );
}