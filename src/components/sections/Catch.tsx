import React from 'react';
import Image from 'next/image';
import { TARGET_SPECIES } from '@/src/utils/constants'

export default function Catch({ fontClass }: { fontClass: string }) {
  return (
    <section id="catch" className="race-section h-screen w-full relative overflow-hidden bg-[#051d46]">
      <div className="race-wrapper flex h-full items-center pl-20 pr-20 gap-20 w-fit">
        <div className="w-[40vw] shrink-0">
          <h2 className={`text-7xl font-bold uppercase ${fontClass}`}>Target<br/>Species</h2>
          <p className="mt-4 text-gray-400 max-w-sm">The Indian Ocean big five. Seasonal availability applies.</p>
        </div>
        {TARGET_SPECIES.map((fish, i) => (
          <div key={i} className="relative w-[70vw] md:w-[35vw] h-[55vh] shrink-0 group overflow-hidden border border-white/10">
             <div className="absolute inset-0 bg-gray-800 animate-pulse" /> 
             
             <Image 
               src={fish.img} 
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" 
               alt={fish.name} 
               width={800}
               height={600}
             />

             <div className="absolute top-0 right-0 bg-sq-secondary text-black font-bold p-4 text-2xl uppercase opacity-0 group-hover:opacity-100 transition-opacity">
               {fish.name}
             </div>
             <div className="absolute bottom-0 left-0 p-6">
               <h3 className={`text-5xl uppercase font-bold stroke-text ${fontClass}`}>{fish.name}</h3>
             </div>
          </div>
        ))}
      </div>
    </section>
  );
}