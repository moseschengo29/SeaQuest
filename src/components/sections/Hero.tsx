import React from 'react';

export default function Hero({ fontClass, onEnter, onLeave }: { fontClass: string, onEnter: any, onLeave: any }) {
  return (
    <header className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <video 
          autoPlay loop muted playsInline 
          className="w-full h-full object-cover opacity-70"
          src="/assets/blue.mp4" 
        />
      </div>

      <div className="hero-content relative z-20 text-center w-full px-4 flex flex-col items-center">
        <p className="hero-sub text-sq-primary tracking-[0.5em] text-xs uppercase mb-6 font-bold opacity-0 translate-y-4">
            Kenyan Coast &bull; Est. 2012
        </p>
        
        {/* --- 1. DEEP SEA --- */}
        {/* FIX: Added 'px-2' (horizontal padding) so the right edge isn't cut off */}
        <div className="overflow-hidden py-4 -my-4 px-2">
            <h1 className={`text-[13vw] leading-[0.85] font-bold uppercase tracking-tighter ${fontClass} mix-blend-overlay`}>
            {"DEEP SEA".split("").map((char, i) => (
                <span key={i} className="hero-char inline-block translate-y-[120%] will-change-transform">
                    {char === " " ? "\u00A0" : char}
                </span>
            ))}
            </h1>
        </div>

        {/* --- 2. HUNTERS --- */}
        {/* FIX: Added 'px-2' here as well */}
        <div className="overflow-hidden py-4 -my-4 px-2">
            <h1 className={`text-[13vw] leading-[0.85] font-bold uppercase tracking-tighter text-transparent stroke-text ${fontClass}`}>
            {"HUNTERS".split("").map((char, i) => (
                <span key={i} className="hero-char inline-block translate-y-[120%] will-change-transform">
                    {char === " " ? "\u00A0" : char}
                </span>
            ))}
            </h1>
        </div>
        
        <div className="mt-16 flex items-center gap-6 hero-sub opacity-0 translate-y-4">
          <a href='tel:254115824803' onMouseEnter={onEnter} onMouseLeave={onLeave} className="magnetic-btn px-8 py-4 bg-sq-secondary text-black font-bold uppercase tracking-widest text-sm hover:bg-white transition-colors">
            Give us a call
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 w-full bg-[#03122bf5] backdrop-blur-md border-t border-white/10 py-3 overflow-hidden z-20">
        <div className="flex gap-12 animate-marquee whitespace-nowrap text-xs font-mono text-gray-400 uppercase tracking-widest">
          {[...Array(4)].map((_, i) => (
            <React.Fragment key={i}>
              <span><span className="text-sq-secondary">●</span> Live Conditions: Watamu Banks</span>
              <span>Wind: 12kts SE</span>
              <span>Swell: 1.2m</span>
              <span>Water Temp: 28°C</span>
              <span>Moon: Waning Gibbous</span>
              <span>Recent Catch: 80kg Yellowfin</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </header>
  );
}