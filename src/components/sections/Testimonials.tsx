import React from 'react';
import { REVIEWS } from '@/src/utils/constants';

export default function Testimonials({ fontClass }: { fontClass: string }) {
  return (
    <section id="testimonies" className="py-32 bg-[#051d46] overflow-hidden cursor-grab active:cursor-grabbing">
       <div className="px-6 md:px-20 mb-12">
          <h2 className={`text-4xl font-bold uppercase ${fontClass}`}>Captains Log</h2>
          <p className="text-xs text-gray-500 uppercase tracking-widest mt-2">Drag to explore reviews</p>
       </div>
       
       <div className="review-track flex gap-10 px-6 md:px-20 w-fit">
          {REVIEWS.map((review, i) => (
             <div key={i} className="w-[80vw] md:w-[50vw] lg:w-[30vw] shrink-0 p-10 border border-white/10 bg-white/5 backdrop-blur-sm rounded-xl hover:bg-white/10 transition-colors select-none">
                <div className="text-sq-secondary text-6xl font-serif mb-4">&quot;</div>
                <h3 className={`text-xl md:text-2xl font-medium leading-tight mb-8 ${fontClass}`}>{review.text}</h3>
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
                   <span className="text-sm font-bold uppercase tracking-widest text-gray-400">{review.author}</span>
                </div>
             </div>
          ))}
          <div className="w-[10vw]"></div>
       </div>
    </section>
  );
}