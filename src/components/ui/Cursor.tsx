import React, { forwardRef, useEffect, useRef } from 'react';
import gsap from 'gsap';

const Cursor = forwardRef<HTMLDivElement>((props, ref) => {
  const boatRef = useRef<HTMLDivElement>(null);
  const prevPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const ctx = gsap.context(() => {
      const moveBoat = (e: MouseEvent) => {
        const dx = e.clientX - prevPos.current.x;
        const dy = e.clientY - prevPos.current.y;
        
        if (Math.abs(dx) > 0.5 || Math.abs(dy) > 0.5) {
          const angle = (Math.atan2(dy, dx) * 180 / Math.PI) + 90;
          gsap.to(boatRef.current, {
            rotation: angle,
            duration: 0.35,
            ease: "power2.out",
            overwrite: "auto"
          });
        }
        prevPos.current = { x: e.clientX, y: e.clientY };
      };

      window.addEventListener("mousemove", moveBoat);
    });

    return () => {
      ctx.revert();
      window.removeEventListener("mousemove", moveBoat);
    };
  }, []);

  return (
    <div 
      ref={ref} 
      className="fixed top-0 left-0 w-12 h-12 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
    >
      <div ref={boatRef} className="w-full h-full origin-center flex items-center justify-center">
        
        <svg 
          viewBox="0 0 100 140" 
          className="w-full h-full drop-shadow-[0_0_12px_rgba(6,182,212,0.8)]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Gradient for the hull to give it that metallic deep-sea look */}
            <linearGradient id="hullGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4b5563" /> {/* Slate-600 */}
              <stop offset="50%" stopColor="#1f2937" /> {/* Slate-800 */}
              <stop offset="100%" stopColor="#111827" /> {/* Slate-900 */}
            </linearGradient>
            
            {/* Neon Glow effect for the outline */}
            <filter id="neon">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* 1. MAIN HULL (Asymmetric split color) */}
          <path 
            d="M50 5 C 50 5 10 35 10 90 L 20 125 L 50 115 L 80 125 L 90 90 C 90 35 50 5 50 5 Z" 
            fill="url(#hullGradient)"
            stroke="#22d3ee" 
            strokeWidth="1.5"
          />

          {/* 2. INNER DETAILS (Horizontal Lines & Gauges) */}
          <line x1="25" y1="85" x2="75" y2="85" stroke="#22d3ee" strokeWidth="0.5" opacity="0.6" />
          <line x1="25" y1="100" x2="75" y2="100" stroke="#22d3ee" strokeWidth="0.5" opacity="0.6" />
          
          <text x="50" y="78" fill="#22d3ee" fontSize="5" fontFamily="monospace" textAnchor="middle" opacity="0.8">M M</text>
          <text x="35" y="94" fill="#22d3ee" fontSize="4" fontFamily="monospace" textAnchor="middle" opacity="0.5">0.3</text>
          <text x="65" y="94" fill="#22d3ee" fontSize="4" fontFamily="monospace" textAnchor="middle" opacity="0.5">0.7</text>

          {/* 3. CENTER BRIDGE / CABIN (The bright square) */}
          <rect x="35" y="45" width="30" height="25" rx="2" fill="#1f2937" stroke="#22d3ee" strokeWidth="1" />
          <rect x="40" y="50" width="20" height="8" rx="1" fill="#22d3ee" opacity="0.2" />
          <rect x="42" y="62" width="16" height="6" rx="0.5" fill="#22d3ee" />

          {/* 4. CIRCULAR PORTS (Bioluminescent Glow) */}
          <circle cx="35" cy="115" r="3" fill="#22d3ee" filter="url(#neon)" />
          <circle cx="65" cy="115" r="3" fill="#22d3ee" filter="url(#neon)" />
          <circle cx="43" cy="25" r="2" fill="#22d3ee" opacity="0.8" />
          <circle cx="57" cy="28" r="1.5" fill="#22d3ee" opacity="0.6" />

          {/* 5. DYNAMIC WAKE (The diagonal neon bars) */}
          <g filter="url(#neon)">
            <line x1="20" y1="130" x2="5" y2="160" stroke="#22d3ee" strokeWidth="3" strokeLinecap="round" />
            <line x1="80" y1="130" x2="95" y2="160" stroke="#22d3ee" strokeWidth="3" strokeLinecap="round" />
          </g>
        </svg>

      </div>
    </div>
  );
});

Cursor.displayName = "Cursor";
export default Cursor;