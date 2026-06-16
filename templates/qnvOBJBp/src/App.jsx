import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-950">
<div className="relative w-[400px] h-[240px] rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-800">
<svg className="absolute top-0 left-0 w-full h-full animate-pulse" fill="none" viewbox="0 0 400 240" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient gradientunits="userSpaceOnUse" id="waveGradient1" x1="0" x2="400" y1="0" y2="240">
<stop stop-color="#A7F3D0" stop-opacity="0.04"></stop>
<stop offset="1" stop-color="#38BDF8" stop-opacity="0.08"></stop>
</lineargradient>
<lineargradient gradientunits="userSpaceOnUse" id="waveGradient2" x1="0" x2="400" y1="240" y2="0">
<stop stop-color="#F472B6" stop-opacity="0.10"></stop>
<stop offset="1" stop-color="#38BDF8" stop-opacity="0.04"></stop>
</lineargradient>
</defs>
<path d="M0,80 Q100,140 200,80 T400,80" fill="none" id="wave1" stroke="url(#waveGradient1)" strokeWidth="2.5">
<animate attributename="d" dur="5s" repeatcount="indefinite" values="
          M0,80 Q100,140 200,80 T400,80;
          M0,100 Q100,60 200,100 T400,100;
          M0,80 Q100,140 200,80 T400,80
          "></animate>
</path>
<path d="M0,130 Q100,190 200,130 T400,130" fill="none" id="wave2" opacity="0.6" stroke="url(#waveGradient2)" strokeWidth="2">
<animate attributename="d" dur="6s" repeatcount="indefinite" values="
          M0,130 Q100,190 200,130 T400,130;
          M0,150 Q100,110 200,150 T400,150;
          M0,130 Q100,190 200,130 T400,130
          "></animate>
</path>
<path d="M0,180 Q100,220 200,180 T400,180" fill="none" id="wave3" opacity="0.4" stroke="url(#waveGradient1)" strokeWidth="1.5">
<animate attributename="d" dur="7s" repeatcount="indefinite" values="
          M0,180 Q100,220 200,180 T400,180;
          M0,170 Q100,150 200,170 T400,170;
          M0,180 Q100,220 200,180 T400,180
          "></animate>
</path>
</svg>
<div className="relative z-10 flex flex-col items-start justify-center h-full p-8 space-y-2">
<span className="text-sm font-semibold text-cyan-400 uppercase tracking-[0.13em]">Linear Card</span>
<h2 className="text-3xl font-bold text-white mb-2">Minimal Wave Animation</h2>
<p className="text-gray-400 text-base">Clean, subtle waves with a modern gradient for your next UI inspiration.</p>
</div>
<div className="absolute inset-0 bg-black opacity-20 pointer-events-none"></div>
</div>
</div>

    </>
  );
}
