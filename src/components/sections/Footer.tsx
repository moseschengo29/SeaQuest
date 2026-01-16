"use client";

import React from "react";
import gsap from "gsap";

export default function Footer({ fontClass, onEnter, onLeave }: { fontClass: string, onEnter: any, onLeave: any }) {
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-sq-secondary text-black py-24 px-6 relative overflow-hidden">
      {/* Background Decor: Technical Grid & Radar Sweep */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent w-1/2 -skew-x-12 animate-[radar_5s_linear_infinite]" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Main CTA Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="text-center lg:text-left">
            <p className="text-[10px] font-bold uppercase tracking-[0.5em] mb-4 opacity-70">Ready for Deployment?</p>
            <h2 className={`text-6xl md:text-7xl font-bold uppercase tracking-tighter leading-[0.9] ${fontClass}`}>
              Exploring Seas<br/><span className="italic">Enhancing Lives</span>
            </h2>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-end">
            {/* Charter Button */}
            <button 
              onMouseEnter={onEnter} onMouseLeave={onLeave}
              className="magnetic-btn border-2 border-black px-8 py-5 text-sm font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all"
            >
              Book Charter
            </button>
            {/* Seafood Button */}
            <button 
              onMouseEnter={onEnter} onMouseLeave={onLeave}
              className="magnetic-btn bg-black text-sq-secondary px-8 py-5 text-sm font-bold uppercase tracking-widest hover:bg-transparent hover:text-black border-2 border-black transition-all"
            >
              Order Fresh Haul
            </button>
          </div>
        </div>

        {/* Footer Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-black/10 pt-16 mb-20">
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest mb-6 opacity-50">The Hunt</h4>
            <ul className="space-y-3 font-bold uppercase text-sm">
              <li><a href="#vessel" className="hover:line-through">The Vessel</a></li>
              <li><a href="#grounds" className="hover:line-through">Fishing Grounds</a></li>
              <li><a href="#catch" className="hover:line-height">Target Species</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest mb-6 opacity-50">The Haul</h4>
            <ul className="space-y-3 font-bold uppercase text-sm">
              <li><a href="#" className="hover:line-through">Live Lobster</a></li>
              <li><a href="#" className="hover:line-through">Deep Sea Crab</a></li>
              <li><a href="#" className="hover:line-through">Wholesale Comms</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest mb-6 opacity-50">Base Comms</h4>
            <ul className="space-y-3 font-bold uppercase text-sm">
              <li>VATAMU: Slip 42</li>
              <li>MALINDI: Pier 09</li>
              <li>VHF: CH 16 / 68</li>
            </ul>
          </div>
          <div className="flex flex-col justify-between items-start md:items-end">
             <button 
                onClick={scrollToTop}
                onMouseEnter={onEnter} onMouseLeave={onLeave}
                className="group flex flex-col items-center md:items-end"
             >
                <span className="text-[10px] font-bold uppercase tracking-widest mb-2 group-hover:-translate-y-2 transition-transform">Back to Surface</span>
                <div className="w-8 h-12 border-2 border-black rounded-full relative overflow-hidden">
                   <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1 h-2 bg-black animate-bounce" />
                </div>
             </button>
          </div>
        </div>

        {/* Bottom Bar: Coordinates & Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-black/10 pt-8 opacity-60">
           <div className="flex gap-8 text-[10px] font-mono font-bold uppercase tracking-widest">
              <span>LOC: 3.3490° S, 40.0152° E</span>
              <span className="hidden sm:block">TEMP: 28°C AUTO-SYNC</span>
           </div>
           
           <div className={`text-xl font-bold tracking-tighter ${fontClass}`}>
              SEAQUEST<span className="text-white">.</span>LIMITED
           </div>

           <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest">
              <a href="#" className="hover:text-white">Instagram</a>
              <a href="#" className="hover:text-white">Facebook</a>
              <a href="#" className="hover:text-white">Privacy</a>
           </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes radar {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
      `}</style>
    </footer>
  );
}