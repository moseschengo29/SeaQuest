"use client";

import React from 'react';
import Image from 'next/image';
import { MASANG_VIEWS } from '@/src/utils/constants';

export default function Fleet({ fontClass }: { fontClass: string }) {
  return (
    <section id="vessel" className="bg-[#03122c] pb-20">
       {/* Section Header */}
       <div className="px-6 md:px-20 py-10 border-t border-white/10 flex justify-between items-end">
         <h3 className="text-sq-secondary font-bold tracking-widest uppercase text-sm">Fleet Command</h3>
         <span className="hidden md:block text-[10px] font-mono text-gray-500 uppercase tracking-[0.3em]">
            Registry: Watamu / F.V. MASANG
         </span>
       </div>

       {/* Stacking Cards */}
       {MASANG_VIEWS.map((view, i) => (
         <div 
           key={i} 
           className="fleet-card sticky top-0 h-screen w-full bg-[#03122c] flex items-center overflow-hidden border-t border-white/10"
         >
            {/* Background Image Container */}
            <div className="absolute right-0 top-0 w-full md:w-[60%] h-full opacity-60 mix-blend-lighten grayscale hover:grayscale-0 transition-all duration-1000">
               <Image 
                  src={view.img} 
                  alt={view.title} 
                  fill 
                  className="object-cover"
                  priority={i === 0}
               />
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 px-6 md:px-20 w-full md:w-1/2 pointer-events-none">
               {/* Fixed the Numbering as requested */}
               <span className="text-8xl md:text-[12rem] font-bold opacity-10 absolute -top-20 left-0 leading-none">
                  0{i + 1}
               </span>
               
               <h2 className={`text-6xl md:text-8xl font-bold uppercase leading-none mb-6 ${fontClass}`}>
                  {view.title}
               </h2>
               
               <p className="text-xl text-sq-secondary tracking-widest uppercase mb-4">
                  FV MASANG &bull; {view.title}
               </p>
               
               <p className="text-gray-400 max-w-sm text-sm leading-relaxed mb-8">
                  {view.desc}
               </p>

               {/* Technical Specs Small Print */}
               <div className="flex gap-10 opacity-30">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold tracking-widest">Sector</span>
                    <span className="text-xs font-mono uppercase">North Kenya Banks</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold tracking-widest">Payload</span>
                    <span className="text-xs font-mono uppercase">Lobster / Crab / Billfish</span>
                  </div>
               </div>
            </div>
         </div>
       ))}
    </section>
  );
}