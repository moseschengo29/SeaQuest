import React from 'react';

export default function DepthMeter() {
  return (
    <div className="fixed top-1/2 -translate-y-1/2 right-0 md:right-6 z-[40] flex flex-col items-center gap-2 h-[50vh] w-10">
      <span className="text-[10px] text-sq-secondary font-mono tracking-widest writing-vertical-rl transform rotate-180">SURFACE</span>
      <div className="w-[1px] h-full bg-gray-700 relative rounded-full overflow-hidden">
        <div className="scroll-depth-bar w-full bg-sq-secondary absolute top-0 left-0"></div>
      </div>
      <div className="scroll-depth-label text-xs font-mono text-sq-secondary font-bold tabular-nums writing-vertical-rl transform rotate-180 mt-2">
        0m
      </div>
    </div>
  );
}