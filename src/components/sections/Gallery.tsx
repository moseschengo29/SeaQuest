import React from 'react';
import { GALLERY_IMAGES } from '@/src/utils/constants';

export default function Gallery({ fontClass }: { fontClass: string }) {
  return (
    <section id="gallery" className="py-24 bg-[#03122c] overflow-hidden">
      <div className="mb-12 px-6 md:px-20 flex justify-between items-end">
        <h2 className={`text-4xl md:text-6xl font-bold uppercase ${fontClass}`}>Expedition<br/><span className="text-sq-secondary">Gallery</span></h2>
        <p className="hidden md:block text-right text-gray-500 uppercase tracking-widest text-xs">Follow us @SeaQuestLtd</p>
      </div>

      {/* Row 1 */}
      <div className="flex w-[200%] marquee-row-1 mb-8">
        {[...GALLERY_IMAGES, ...GALLERY_IMAGES].map((img, i) => (
          <div key={i} className="w-[20vw] h-[30vh] shrink-0 px-2">
            <img src={img} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" alt="Gallery" />
          </div>
        ))}
      </div>

      {/* Row 2 (Reverse) */}
      <div className="flex w-[200%] marquee-row-2">
         {[...GALLERY_IMAGES, ...GALLERY_IMAGES].reverse().map((img, i) => (
          <div key={i} className="w-[20vw] h-[30vh] shrink-0 px-2">
            <img src={img} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" alt="Gallery" />
          </div>
        ))}
      </div>
    </section>
  );
}