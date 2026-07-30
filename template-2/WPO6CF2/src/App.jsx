import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}

    try {
      
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<div className="pointer-events-none fixed inset-0 z-0">

<div className="absolute w-2 h-2 bg-[#00C4F6] pixelate star-anim" style={{left: `5vw`, top: `90vh`, animationDuration: `7s`}}></div>
<div className="absolute w-2 h-2 bg-[#FFD930] pixelate star-anim" style={{left: `40vw`, top: `98vh`, animationDuration: `10s`}}></div>
<div className="absolute w-3 h-3 bg-[#FF19ED] pixelate star-anim" style={{left: `70vw`, top: `85vh`, animationDuration: `6.5s`}}></div>
<div className="absolute w-2 h-2 bg-[#ECF0F3] pixelate star-anim" style={{left: `60vw`, top: `97vh`, animationDuration: `8s`}}></div>
<div className="absolute w-3 h-3 bg-[#00C4F6] pixelate star-anim" style={{left: `20vw`, top: `95vh`, animationDuration: `6.7s`}}></div>
<div className="absolute w-2 h-2 bg-[#FFD930] pixelate star-anim" style={{left: `80vw`, top: `98vh`, animationDuration: `10s`}}></div>
<div className="absolute w-2 h-2 bg-[#FF19ED] pixelate star-anim" style={{left: `50vw`, top: `75vh`, animationDuration: `7.2s`}}></div>
<div className="absolute w-3 h-3 bg-[#ECF0F3] pixelate star-anim" style={{left: `12vw`, top: `88vh`, animationDuration: `9s`}}></div>
<div className="absolute w-2 h-2 bg-[#ECF0F3] pixelate star-anim" style={{left: `85vw`, top: `93vh`, animationDuration: `8.5s`}}></div>
<div className="absolute w-2 h-2 bg-[#FF19ED] pixelate star-anim" style={{left: `44vw`, top: `99vh`, animationDuration: `6.3s`}}></div>
<div className="absolute w-3 h-3 bg-[#FFD930] pixelate star-anim" style={{left: `28vw`, top: `96vh`, animationDuration: `10.5s`}}></div>
<div className="absolute w-3 h-3 bg-[#00C4F6] pixelate star-anim" style={{left: `56vw`, top: `91vh`, animationDuration: `7.8s`}}></div>
<div className="absolute w-2 h-2 bg-[#ECF0F3] pixelate star-anim" style={{left: `67vw`, top: `92vh`, animationDuration: `8.1s`}}></div>
<div className="absolute w-2 h-2 bg-[#FF19ED] pixelate star-anim" style={{left: `23vw`, top: `85vh`, animationDuration: `5.7s`}}></div>
<div className="absolute w-3 h-3 bg-[#FFD930] pixelate star-anim" style={{left: `78vw`, top: `94vh`, animationDuration: `9.6s`}}></div>
</div>

<div className="pointer-events-none fixed inset-0 z-10">
<div className="absolute coin-anim" style={{left: `7vw`, top: `50vh`, animationDelay: `0.12s`}}>
<div className="w-8 h-8 bg-[#FFD930] border-4 border-[#ECF0F3] pixelate"></div>
<div className="absolute left-2 top-1 w-2 h-2 bg-white pixelate"></div>
</div>
<div className="absolute coin-anim" style={{left: `92vw`, top: `70vh`, animationDelay: `0.32s`}}>
<div className="w-7 h-7 bg-[#FF19ED] border-4 border-[#ECF0F3] pixelate"></div>
<div className="absolute left-2 top-2 w-2 h-2 bg-white pixelate"></div>
</div>
<div className="absolute coin-anim" style={{left: `80vw`, top: `20vh`, animationDelay: `0.5s`}}>
<div className="w-8 h-8 bg-[#00C4F6] border-4 border-[#ECF0F3] pixelate"></div>
<div className="absolute left-2 top-2 w-2 h-2 bg-white pixelate"></div>
</div>
<div className="absolute coin-anim" style={{left: `50vw`, top: `10vh`, animationDelay: `0.8s`}}>
<div className="w-7 h-7 bg-[#FFD930] border-4 border-[#ECF0F3] pixelate"></div>
<div className="absolute left-1 top-1 w-2 h-2 bg-white pixelate"></div>
</div>
</div>

<main className="relative z-30 px-5 py-7 md:px-10 w-full max-w-lg frame-8bit flex flex-col items-center border-8 border-[#ECF0F3] bg-[#130D41]">
<div className="w-full flex flex-col items-center mb-3">
<span className="inline-block px-3 py-2 text-2xl md:text-3xl font-bold text-[#FFD930] bg-[#0C0261] border-4 border-[#00C4F6] pixelate flicker mb-2" style={{fontFamily: `'Pixel Operator', monospace`}}>
        TASK ARCADE
      </span>
<span className="inline-block px-3 py-1 text-lg md:text-xl font-bold text-[#ECF0F3] bg-[#221990] border-4 border-[#FFD930] pixelate" style={{fontFamily: `'Pixel Operator SC', monospace`}}>
        Gamified Task Management
      </span>
</div>
<p className="text-center text-base md:text-lg text-[#ECF0F3] font-normal mb-6 mt-4 pixelate" style={{fontFamily: `'Pixel Operator', monospace`}}>
      Create, edit, and delete quests.<br />
      Choose your character and equip items.<br />
      Collect XP. Level up. Unlock rewards.<br />
<span className="text-[#FFD930] font-bold">Retro 8-bit. True Arcade. Real Productivity.</span>
</p>
<div className="flex flex-wrap gap-4 w-full justify-center mt-2">
<a className="pixel-btn pixel-btn-primary text-lg font-bold px-7 py-2" href="#" style={{fontFamily: `'Pixel Operator', monospace`}}>
        Start Quest
      </a>
<a className="pixel-btn pixel-btn-secondary text-lg font-bold px-7 py-2" href="#" style={{fontFamily: `'Pixel Operator', monospace`}}>
        Learn More
      </a>
</div>

<div className="absolute left-0 top-0 w-6 h-6 bg-[#FFD930] pixelate"></div>
<div className="absolute right-0 top-0 w-6 h-6 bg-[#00C4F6] pixelate"></div>
<div className="absolute left-0 bottom-0 w-6 h-6 bg-[#FF19ED] pixelate"></div>
<div className="absolute right-0 bottom-0 w-6 h-6 bg-[#221990] pixelate"></div>
</main>
<div className="pointer-events-none fixed bottom-4 left-1/2 -translate-x-1/2 z-40 select-none">
<span className="flicker text-2xl text-[#FFD930] bg-[#0C0261] border-4 border-[#00C4F6] px-4 py-2 pixelate" style={{fontFamily: `'Pixel Operator', monospace`}}>
      [PRESS START!]
    </span>
</div>

    </>
  );
}
