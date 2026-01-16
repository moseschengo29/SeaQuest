import React from 'react';

export default function preloader({ fontClass }: { fontClass: string }) {
  return (
    <div className="preloader fixed inset-0 z-[60] bg-[#03122c] flex flex-col justify-center items-center overflow-hidden">
      {/* Background Radar Rings */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
        <div className="w-[40vw] h-[40vw] border border-cyan-500/30 rounded-full absolute animate-ping duration-[3s]"></div>
        <div className="w-[30vw] h-[30vw] border border-cyan-500/20 rounded-full absolute"></div>
        <div className="w-[20vw] h-[20vw] border border-cyan-500/40 rounded-full absolute animate-pulse"></div>
        <div className="h-full w-[1px] bg-cyan-500/20 absolute"></div>
        <div className="w-full h-[1px] bg-cyan-500/20 absolute"></div>
      </div>

      {/* Center Content */}
      <div className="preloader-content relative z-10 flex flex-col items-center">
        <div className={`flex items-baseline gap-2 ${fontClass} text-white overflow-hidden`}>
          <span className="depth-counter text-8xl md:text-9xl font-bold tracking-tighter tabular-nums leading-none">0</span>
          <span className="text-xl md:text-2xl text-sq-secondary font-bold tracking-widest mb-4">M DEPTH</span>
        </div>

        <div className="flex flex-col items-center mt-6 gap-2">
          <div className="h-[2px] w-24 bg-gray-800 rounded-full overflow-hidden">
             <div className="h-full bg-sq-secondary w-full animate-[loading_2s_ease-in-out_infinite]"></div>
          </div>
          <p className="text-[10px] font-mono text-cyan-400/80 uppercase tracking-[0.4em] animate-pulse">
            Calibrating Sonar
          </p>
        </div>
      </div>
    </div>
  );
}