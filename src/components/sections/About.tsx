import React from 'react';

export default function About({ fontClass }: { fontClass: string }) {
  return (
    <section id="about" className="py-32 px-6 md:px-20 bg-[#051d46]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className={`reveal-text text-5xl md:text-7xl font-bold uppercase leading-none ${fontClass} mb-8`}>
            From <span className="text-sq-secondary">The Deep.</span><br/> Delivered with Precision.
          </h2>
        </div>
        <div>
          <p className="reveal-text text-xl text-gray-400 leading-relaxed font-light mb-8">
          Operating along the rich waters of the Kenyan coastline, SeaQuest specializes in the sustainable harvest of deep-sea lobsters and crabs. Our crews navigate offshore depths with precision, combining local expertise and modern deep-sea techniques to deliver premium seafood while respecting the ocean that sustains us.
          </p>
          <div className="grid grid-cols-2 gap-8 border-t border-gray-800 pt-8">
            <div className="reveal-text">
              <h3 className={`text-4xl font-bold ${fontClass}`}>300+</h3>
              <p className="text-sm text-gray-500 uppercase tracking-widest">Fish Tagged</p>
            </div>
            <div className="reveal-text">
              <h3 className={`text-4xl font-bold ${fontClass}`}>100%</h3>
              <p className="text-sm text-gray-500 uppercase tracking-widest">Safety Record</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}