import React, { useState } from 'react';
import { FISHING_SPOTS } from '@/src/utils/constants';

interface FishingSpot {
    id: string | number;
    name: string;
    depth: string; // Changed from number to string to match your data
    x: number;     // Added to match your data
    y: number;     // Added to match your data
    desc: string;
    fish: string;  // Changed from string[] to string to match your data
}

export default function FishingMap({ fontClass }: { fontClass: string }) {
    const [activeSpot, setActiveSpot] = useState<FishingSpot | null>(null);

  return (
    <section id="grounds" className="py-32 bg-[#03122c] relative overflow-hidden">
       <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
             <h2 className={`text-4xl md:text-6xl font-bold uppercase ${fontClass}`}>The <span className="text-sq-secondary">Grounds</span></h2>
             <p className="text-gray-400 max-w-sm text-right mt-4 md:mt-0">Interactive sonar chart of our primary hunting grounds. Hover to scan sector.</p>
          </div>
          
          <div className="relative w-full aspect-[16/9] md:aspect-[2/1] bg-[#020a16] border border-cyan-900/30 rounded-xl overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.1)] group">
             
             {/* Grid Background */}
             <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(6,182,212,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
             
             {/* Radar Sweep Animation */}
             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sq-secondary/10 to-transparent w-[50%] animate-[radar_4s_linear_infinite] pointer-events-none"></div>

             {/* Abstract Coastline (SVG) */}
             <svg className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-50" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 0 L30 0 L40 20 L35 40 L45 60 L30 100 L0 100 Z" fill="#082f49" fillOpacity="0.4" stroke="#0ea5e9" strokeWidth="0.2" />
                <text x="10" y="50" className="text-[3px] fill-cyan-700 font-mono uppercase tracking-widest -rotate-90">Kenyan Coastline</text>
             </svg>

             {/* Map Hotspots */}
             {FISHING_SPOTS.map((spot) => (
               <div 
                  key={spot.id}
                  className="absolute cursor-pointer group/spot"
                  style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                  onMouseEnter={() => setActiveSpot(spot)}
                  onMouseLeave={() => setActiveSpot(null)}
               >
                  <div className="relative flex items-center justify-center">
                     <div className="w-4 h-4 bg-sq-secondary rounded-full shadow-[0_0_15px_#06b6d4]"></div>
                     <div className="absolute w-full h-full bg-sq-secondary rounded-full animate-ping opacity-75"></div>
                     <div className="absolute w-32 h-32 border border-sq-secondary/30 rounded-full opacity-0 group-hover/spot:opacity-100 transition-all scale-0 group-hover/spot:scale-100 duration-500"></div>
                  </div>
                  <span className="absolute left-6 top-1/2 -translate-y-1/2 text-xs font-bold text-cyan-400 uppercase tracking-widest whitespace-nowrap opacity-60 group-hover/spot:opacity-100">{spot.name}</span>
               </div>
             ))}

             {/* Tooltip Info Panel */}
             <div className={`absolute top-6 right-6 w-64 bg-black/80 backdrop-blur-md border border-sq-secondary/30 p-6 transition-all duration-300 ${activeSpot ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                {activeSpot && (
                   <>
                      <h3 className="text-xl font-bold text-white mb-1 uppercase">{activeSpot.name}</h3>
                      <div className="h-[1px] w-full bg-sq-secondary/50 mb-3"></div>
                      <div className="space-y-2 text-xs font-mono text-cyan-300">
                         <p><span className="text-gray-500">DEPTH:</span> {activeSpot.depth}</p>
                         <p><span className="text-gray-500">TARGET:</span> {activeSpot.fish}</p>
                         <p className="text-gray-400 mt-2 leading-relaxed italic border-l-2 border-cyan-800 pl-2">&quot;{activeSpot.desc}&quot;</p>
                      </div>
                   </>
                )}
                {!activeSpot && <p className="text-xs font-mono text-sq-secondary animate-pulse">SCANNING SECTOR...</p>}
             </div>
          </div>
       </div>
    </section>
  );
}