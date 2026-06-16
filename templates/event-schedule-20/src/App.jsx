import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
(function() {
if (window.__auraPreviewPerformanceController) return;
const nativeRequestAnimationFrame = window.requestAnimationFrame
? window.requestAnimationFrame.bind(window)
: function(callback) { return window.setTimeout(function() { callback(Date.now()); }, 16); };
const nativeCancelAnimationFrame = window.cancelAnimationFrame
? window.cancelAnimationFrame.bind(window)
: window.clearTimeout.bind(window);
const nativeSetInterval = window.setInterval.bind(window);
let paused = false;
let nextFrameId = 1;
const frameRecords = new Map();
const pausedFrameCallbacks = new Map();
const style = document.createElement('style');
style.id = 'aura-preview-performance-style';
style.textContent = [
'html[data-aura-preview-paused="true"] *,',
'html[data-aura-preview-paused="true"] *::before,',
'html[data-aura-preview-paused="true"] *::after {',
'  animation-play-state: paused !important;',
'  transition-duration: 0s !important;',
'  scroll-behavior: auto !important;',
'}'
].join('\n');
document.head.appendChild(style);
window.requestAnimationFrame = function(callback) {
const frameId = nextFrameId++;
if (paused) {
pausedFrameCallbacks.set(frameId, callback);
frameRecords.set(frameId, { paused: true });
return frameId;
}
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
return frameId;
};
window.cancelAnimationFrame = function(frameId) {
const record = frameRecords.get(frameId);
pausedFrameCallbacks.delete(frameId);
if (record && typeof record.nativeFrameId !== 'undefined') {
nativeCancelAnimationFrame(record.nativeFrameId);
}
frameRecords.delete(frameId);
};
window.setInterval = function(callback, delay) {
const args = Array.prototype.slice.call(arguments, 2);
return nativeSetInterval(function() {
if (paused) return;
callback.apply(this, args);
}, delay);
};
const flushPausedFrames = function() {
const callbacks = Array.from(pausedFrameCallbacks.entries());
pausedFrameCallbacks.clear();
callbacks.forEach(function(entry) {
const frameId = entry[0];
const callback = entry[1];
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
});
};
const setPaused = function(nextPaused) {
const shouldPause = Boolean(nextPaused);
if (paused === shouldPause) return;
paused = shouldPause;
document.documentElement.toggleAttribute('data-aura-preview-paused', paused);
if (!paused) {
flushPausedFrames();
}
};
window.__auraPreviewPerformanceController = {
setPaused: setPaused,
get paused() {
return paused;
}
};
window.addEventListener('message', function(event) {
if (event.source !== window.parent) return;
if (!event.data || event.data.type !== 'aura-preview-performance-mode') return;
setPaused(event.data.paused);
});
})();



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="w-full max-w-6xl mx-auto flex flex-col items-center">

<h1 className="text-3xl md:text-4xl font-semibold italic text-center mb-24 tracking-tight drop-shadow-sm">
        BloFin World Cup 2026 Activity Schedule
      </h1>

<div className="w-full overflow-x-auto pb-12 [&amp;::-webkit-scrollbar]:hidden" style={{MsOverflowStyle: 'none', scrollbarWidth: 'none'}}>
<div className="min-w-[900px] relative px-4 group/timeline">

<div className="flex justify-between w-full mb-12 relative z-10 border-b border-white/5 pb-6">

<div className="w-0 flex flex-col items-center">
<span className="text-xs text-neutral-500 font-medium tracking-widest mb-1 uppercase">
                Jun
              </span>
<span className="text-2xl md:text-3xl font-semibold italic tracking-tight text-neutral-100">
                11
              </span>
</div>

<div className="w-0 flex flex-col items-center">
<span className="text-xs text-neutral-500 font-medium tracking-widest mb-1 uppercase">
                Jun
              </span>
<span className="text-2xl md:text-3xl font-semibold italic tracking-tight text-neutral-100">
                15
              </span>
</div>

<div className="w-0 flex flex-col items-center">
<span className="text-xs text-neutral-500 font-medium tracking-widest mb-1 uppercase">
                Jun
              </span>
<span className="text-2xl md:text-3xl font-semibold italic tracking-tight text-neutral-100">
                28
              </span>
</div>

<div className="w-0 flex flex-col items-center">
<span className="text-xs text-neutral-500 font-medium tracking-widest mb-1 uppercase">
                Jul
              </span>
<span className="text-2xl md:text-3xl font-semibold italic tracking-tight text-neutral-100">
                04
              </span>
</div>

<div className="w-0 flex flex-col items-center">
<span className="text-xs text-neutral-500 font-medium tracking-widest mb-1 uppercase">
                Jul
              </span>
<span className="text-2xl md:text-3xl font-semibold italic tracking-tight text-neutral-100">
                14
              </span>
</div>

<div className="w-0 flex flex-col items-center">
<span className="text-xs text-neutral-500 font-medium tracking-widest mb-1 uppercase">
                Jul
              </span>
<span className="text-2xl md:text-3xl font-semibold italic tracking-tight text-neutral-100">
                20
              </span>
</div>

<div className="w-0 flex flex-col items-center">
<span className="text-xs text-neutral-500 font-medium tracking-widest mb-1 uppercase">
                Jul
              </span>
<span className="text-2xl md:text-3xl font-semibold italic tracking-tight text-neutral-100">
                27
              </span>
</div>
</div>

<div className="relative w-full flex flex-col gap-y-12">

<div className="relative w-full h-14">
<div className="absolute top-0 left-0 w-[16.666%] h-full group/item cursor-pointer duration-500 ease-out group-hover/timeline:opacity-25 hover:!opacity-100 hover:z-50 transition-all hover:-translate-y-1">
<div className="absolute -top-7 left-6 text-xs md:text-sm font-medium text-orange-400 whitespace-nowrap transition-transform duration-300 ease-out group-hover/item:-translate-y-1">
                  2026.6.11 18:00 ~ 2026.6.15 18:00
                </div>
<div className="absolute inset-0 bg-gradient-to-r from-[#ffd9a3] via-[#ffaa55] to-[#ff7f24] origin-top-left skew-x-[-25deg] transition-all duration-400 ease-out group-hover/item:scale-y-[1.1] group-hover/item:scale-x-[1.03] group-hover/item:brightness-110 group-hover/item:shadow-[0_0_30px_rgba(255,170,85,0.3)] overflow-hidden">
<div className="absolute top-0 left-0 h-full w-0 bg-white/30 transition-all duration-500 ease-out group-hover/item:w-full pointer-events-none"></div>
</div>
<div className="absolute inset-0 flex items-center px-6 z-10">
<span className="text-black font-medium text-sm md:text-base whitespace-nowrap transition-transform duration-300 ease-out group-hover/item:translate-x-2">
                    Warm up for World Cup 2026
                  </span>
<i className="w-5 h-5 text-black/80 ml-auto opacity-0 -translate-x-4 transition-all duration-300 ease-out group-hover/item:opacity-100 group-hover/item:translate-x-0" data-lucide="chevron-right" strokeWidth="1.5"></i>
</div>
</div>
</div>

<div className="relative w-full h-14">
<div className="absolute top-0 left-[16.666%] w-[16.666%] h-full group/item cursor-pointer duration-500 ease-out group-hover/timeline:opacity-25 hover:!opacity-100 hover:z-50 transition-all hover:-translate-y-1">
<div className="absolute -top-7 left-6 text-xs md:text-sm font-medium text-blue-400 whitespace-nowrap transition-transform duration-300 ease-out group-hover/item:-translate-y-1">
                  2026.6.11 18:00 ~ 2026.6.15 18:00
                </div>
<div className="absolute inset-0 bg-gradient-to-r from-[#8c9eff] via-[#6b8cff] to-[#4569ff] origin-top-left skew-x-[-25deg] transition-all duration-400 ease-out group-hover/item:scale-y-[1.1] group-hover/item:scale-x-[1.03] group-hover/item:brightness-110 group-hover/item:shadow-[0_0_30px_rgba(107,140,255,0.3)] overflow-hidden">
<div className="absolute top-0 left-0 h-full w-0 bg-white/30 transition-all duration-500 ease-out group-hover/item:w-full pointer-events-none"></div>
</div>
<div className="absolute inset-0 flex items-center px-6 z-10">
<span className="text-black font-medium text-sm md:text-base whitespace-nowrap transition-transform duration-300 ease-out group-hover/item:translate-x-2">
                    Group Stage
                  </span>
<i className="w-5 h-5 text-black/80 ml-auto opacity-0 -translate-x-4 transition-all duration-300 ease-out group-hover/item:opacity-100 group-hover/item:translate-x-0" data-lucide="chevron-right" strokeWidth="1.5"></i>
</div>
</div>
</div>

<div className="relative w-full h-14">
<div className="absolute top-0 left-[33.333%] w-[50%] h-full group/item cursor-pointer duration-500 ease-out group-hover/timeline:opacity-25 hover:!opacity-100 hover:z-50 transition-all hover:-translate-y-1">
<div className="absolute -top-7 left-6 text-xs md:text-sm font-medium text-cyan-400 whitespace-nowrap transition-transform duration-300 ease-out group-hover/item:-translate-y-1">
                  2026.6.11 18:00 ~ 2026.6.15 18:00
                </div>
<div className="absolute inset-0 bg-gradient-to-r from-[#a8ffea] via-[#73f5d5] to-[#20e3b2] origin-top-left skew-x-[-25deg] transition-all duration-400 ease-out group-hover/item:scale-y-[1.1] group-hover/item:scale-x-[1.01] group-hover/item:brightness-110 group-hover/item:shadow-[0_0_30px_rgba(115,245,213,0.3)] overflow-hidden">
<div className="absolute top-0 left-0 h-full w-0 bg-white/30 transition-all duration-500 ease-out group-hover/item:w-full pointer-events-none"></div>
</div>
<div className="absolute inset-0 flex items-center px-6 z-10">
<span className="text-black font-medium text-sm md:text-base whitespace-nowrap transition-transform duration-300 ease-out group-hover/item:translate-x-2">
                    Knocked Out - Final Stage
                  </span>
<i className="w-5 h-5 text-black/80 ml-auto opacity-0 -translate-x-4 transition-all duration-300 ease-out group-hover/item:opacity-100 group-hover/item:translate-x-0" data-lucide="chevron-right" strokeWidth="1.5"></i>
</div>
</div>
</div>

<div className="relative w-full h-14">
<div className="absolute top-0 left-[33.333%] w-[33.333%] h-full group/item cursor-pointer duration-500 ease-out group-hover/timeline:opacity-25 hover:!opacity-100 hover:z-50 transition-all hover:-translate-y-1">
<div className="absolute -top-7 left-6 text-xs md:text-sm font-medium text-lime-400 whitespace-nowrap transition-transform duration-300 ease-out group-hover/item:-translate-y-1">
                  2026.6.11 18:00 ~ 2026.6.15 18:00
                </div>
<div className="absolute inset-0 bg-gradient-to-r from-[#eaff8f] via-[#cfff40] to-[#b7ff00] origin-top-left skew-x-[-25deg] transition-all duration-400 ease-out group-hover/item:scale-y-[1.1] group-hover/item:scale-x-[1.02] group-hover/item:brightness-110 group-hover/item:shadow-[0_0_30px_rgba(207,255,64,0.3)] overflow-hidden">
<div className="absolute top-0 left-0 h-full w-0 bg-white/30 transition-all duration-500 ease-out group-hover/item:w-full pointer-events-none"></div>
</div>
<div className="absolute inset-0 flex items-center px-6 z-10">
<span className="text-black font-medium text-sm md:text-base whitespace-nowrap transition-transform duration-300 ease-out group-hover/item:translate-x-2">
                    Champion Prediction
                  </span>
<i className="w-5 h-5 text-black/80 ml-auto opacity-0 -translate-x-4 transition-all duration-300 ease-out group-hover/item:opacity-100 group-hover/item:translate-x-0" data-lucide="chevron-right" strokeWidth="1.5"></i>
</div>
</div>
</div>

<div className="relative w-full h-14">
<div className="absolute top-0 left-[50%] w-[33.333%] h-full group/item cursor-pointer duration-500 ease-out group-hover/timeline:opacity-25 hover:!opacity-100 hover:z-50 transition-all hover:-translate-y-1">
<div className="absolute -top-7 left-6 text-xs md:text-sm font-medium text-orange-500 whitespace-nowrap transition-transform duration-300 ease-out group-hover/item:-translate-y-1">
                  2026.6.11 18:00 ~ 2026.6.15 18:00
                </div>
<div className="absolute inset-0 bg-gradient-to-r from-[#ffb3a3] via-[#ff7a59] to-[#ff3b00] origin-top-left skew-x-[-25deg] transition-all duration-400 ease-out group-hover/item:scale-y-[1.1] group-hover/item:scale-x-[1.02] group-hover/item:brightness-110 group-hover/item:shadow-[0_0_30px_rgba(255,122,89,0.3)] overflow-hidden">
<div className="absolute top-0 left-0 h-full w-0 bg-white/30 transition-all duration-500 ease-out group-hover/item:w-full pointer-events-none"></div>
</div>
<div className="absolute inset-0 flex items-center px-6 z-10">
<span className="text-black font-medium text-sm md:text-base whitespace-nowrap transition-transform duration-300 ease-out group-hover/item:translate-x-2">
                    Golden Boot Prediction
                  </span>
<i className="w-5 h-5 text-black/80 ml-auto opacity-0 -translate-x-4 transition-all duration-300 ease-out group-hover/item:opacity-100 group-hover/item:translate-x-0" data-lucide="chevron-right" strokeWidth="1.5"></i>
</div>
</div>
</div>

<div className="relative w-full h-14">
<div className="absolute top-0 left-0 w-[83.333%] h-full group/item cursor-pointer duration-500 ease-out group-hover/timeline:opacity-25 hover:!opacity-100 hover:z-50 transition-all hover:-translate-y-1">
<div className="absolute -top-7 left-6 text-xs md:text-sm font-medium text-purple-400 whitespace-nowrap transition-transform duration-300 ease-out group-hover/item:-translate-y-1">
                  2026.6.11 18:00 ~ 2026.6.15 18:00
                </div>
<div className="absolute inset-0 bg-gradient-to-r from-[#e1c4ff] via-[#c88dff] to-[#a259ff] origin-top-left skew-x-[-25deg] transition-all duration-400 ease-out group-hover/item:scale-y-[1.1] group-hover/item:scale-x-[1.01] group-hover/item:brightness-110 group-hover/item:shadow-[0_0_30px_rgba(200,141,255,0.3)] overflow-hidden">
<div className="absolute top-0 left-0 h-full w-0 bg-white/30 transition-all duration-500 ease-out group-hover/item:w-full pointer-events-none"></div>
</div>
<div className="absolute inset-0 flex items-center px-6 z-10">
<span className="text-black font-medium text-sm md:text-base whitespace-nowrap transition-transform duration-300 ease-out group-hover/item:translate-x-2">
                    World Cup 2026 Activity Phase
                  </span>
<i className="w-5 h-5 text-black/80 ml-auto opacity-0 -translate-x-4 transition-all duration-300 ease-out group-hover/item:opacity-100 group-hover/item:translate-x-0" data-lucide="chevron-right" strokeWidth="1.5"></i>
</div>
</div>
</div>

<div className="relative w-full h-14">
<div className="absolute top-0 left-[16.666%] w-[83.333%] h-full group/item cursor-pointer duration-500 ease-out group-hover/timeline:opacity-25 hover:!opacity-100 hover:z-50 transition-all hover:-translate-y-1">
<div className="absolute -top-7 left-6 text-xs md:text-sm font-medium text-neutral-400 whitespace-nowrap transition-transform duration-300 ease-out group-hover/item:-translate-y-1">
                  2026.6.11 18:00 ~ 2026.6.15 18:00
                </div>
<div className="absolute inset-0 bg-gradient-to-r from-[#ffffff] via-[#dcdde1] to-[#7f8fa6] origin-top-left skew-x-[-25deg] transition-all duration-400 ease-out group-hover/item:scale-y-[1.1] group-hover/item:scale-x-[1.01] group-hover/item:brightness-110 group-hover/item:shadow-[0_0_30px_rgba(220,221,225,0.3)] overflow-hidden">
<div className="absolute top-0 left-0 h-full w-0 bg-white/30 transition-all duration-500 ease-out group-hover/item:w-full pointer-events-none"></div>
</div>
<div className="absolute inset-0 flex items-center px-6 z-10">
<span className="text-black font-medium text-sm md:text-base whitespace-nowrap transition-transform duration-300 ease-out group-hover/item:translate-x-2">
                    Reward Store to Redeem Grand Prizes
                  </span>
<i className="w-5 h-5 text-black/80 ml-auto opacity-0 -translate-x-4 transition-all duration-300 ease-out group-hover/item:opacity-100 group-hover/item:translate-x-0" data-lucide="chevron-right" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
