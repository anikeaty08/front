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
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<nav className="fixed left-0 top-0 h-screen w-16 md:w-20 border-r border-[#7E8C77]/30 bg-[#F5F5F0]/90 backdrop-blur-md flex flex-col items-center justify-between py-8 z-50">
<div className="text-xs font-mono-custom tracking-tighter uppercase rotate-180" style={{writingMode: 'vertical-rl'}}>
            CAVENRANCH
        </div>
<div className="flex flex-col gap-12 text-xs font-mono-custom items-center">
<a className="group relative flex items-center justify-center w-8 h-8" href="#">
<iconify-icon className="text-lg text-[#2A4B5D]/60 group-hover:text-[#2A4B5D] transition-colors" icon="solar:ruler-linear"></iconify-icon>
<span className="absolute left-10 opacity-0 group-hover:opacity-100 transition-opacity bg-[#2A4B5D] text-[#F5F5F0] px-2 py-1 pointer-events-none whitespace-nowrap">Architecture</span>
</a>
<a className="group relative flex items-center justify-center w-8 h-8" href="#">
<iconify-icon className="text-lg text-[#2A4B5D]/60 group-hover:text-[#2A4B5D] transition-colors" icon="solar:moon-linear"></iconify-icon>
<span className="absolute left-10 opacity-0 group-hover:opacity-100 transition-opacity bg-[#2A4B5D] text-[#F5F5F0] px-2 py-1 pointer-events-none whitespace-nowrap">Almanac</span>
</a>
<a className="group relative flex items-center justify-center w-8 h-8" href="#">
<iconify-icon className="text-lg text-[#2A4B5D]/60 group-hover:text-[#2A4B5D] transition-colors" icon="solar:map-arrow-up-linear"></iconify-icon>
<span className="absolute left-10 opacity-0 group-hover:opacity-100 transition-opacity bg-[#2A4B5D] text-[#F5F5F0] px-2 py-1 pointer-events-none whitespace-nowrap">Terrain</span>
</a>
</div>
<div className="text-xs font-mono-custom text-[#7E8C77]">01</div>
</nav>

<main className="ml-16 md:ml-20 w-full flex flex-col">

<header className="w-full border-b border-[#7E8C77]/30 bg-[#F5F5F0]/80 backdrop-blur-sm sticky top-0 z-40">
<div className="flex flex-col md:flex-row justify-between items-center px-6 py-4 font-mono-custom text-xs uppercase tracking-widest text-[#2A4B5D]/80">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-[#7E8C77] rounded-full animate-pulse"></span>
                    SITE: 30°16'26.8"N 98°24'40.0"W
                </div>
<div className="hidden md:block border-l border-[#7E8C77]/30 h-4 mx-4"></div>
<div className="font-medium text-[#2A4B5D] mt-2 md:mt-0">The Bluff Cabin / Sector 4</div>
<div className="hidden md:block border-l border-[#7E8C77]/30 h-4 mx-4"></div>
<div className="mt-2 md:mt-0 opacity-70">TEMP: 74°F / WIND: 4MPH SSW</div>
</div>
</header>

<section className="relative w-full min-h-[70vh] flex flex-col items-center justify-center overflow-hidden border-b border-[#7E8C77]/30">
<div className="model-container relative w-64 h-64 flex items-center justify-center mb-12 z-10 cursor-crosshair group">
<div className="massing-model w-32 h-32 relative">
<div className="face face-top w-32 h-32"></div>
<div className="face face-front w-32"></div>
<div className="face face-right h-32"></div>
<div className="face face-top w-16 h-24 bg-white transform translate-z-[5rem] translate-x-[2rem] translate-y-[-1rem]"></div>
</div>
<svg className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-[-1]" viewbox="0 0 256 256">
<line stroke="#7E8C77" stroke-dasharray="4" strokeWidth="0.5" x1="128" x2="10" y1="128" y2="40"></line>
<line stroke="#7E8C77" stroke-dasharray="4" strokeWidth="0.5" x1="128" x2="240" y1="128" y2="20"></line>
<line stroke="#7E8C77" stroke-dasharray="4" strokeWidth="0.5" x1="128" x2="200" y1="128" y2="240"></line>
</svg>
</div>
<button className="relative z-20 font-mono-custom text-xs uppercase tracking-widest border border-[#2A4B5D] text-[#2A4B5D] bg-[#F5F5F0] px-8 py-3 hover:bg-[#2A4B5D] hover:text-[#F5F5F0] transition-all duration-300 flex items-center gap-3">
<iconify-icon className="text-sm" icon="solar:eye-linear"></iconify-icon>
                Explore Sightlines
            </button>
<p className="mt-4 font-mono-custom text-xs text-[#7E8C77] uppercase tracking-widest text-center max-w-sm opacity-80">
                Every window placed algorithmically to capture specific topographic events.
            </p>
</section>

<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full border-b border-[#7E8C77]/30 bg-[#F5F5F0]">
<article className="aspect-square border-b lg:border-b-0 lg:border-r border-[#7E8C77]/30 p-6 flex flex-col justify-between riso-texture bg-white/40">
<header className="flex justify-between items-start font-mono-custom text-xs">
<span className="text-[#2A4B5D]">TILE.01</span>
<span className="text-[#7E8C77]">LUNAR</span>
</header>
<div className="flex-grow flex items-center justify-center">
<div className="w-24 h-24 rounded-full bg-[#F5F5F0] border border-[#7E8C77]/40 relative overflow-hidden flex items-center justify-center shadow-sm">
<div className="absolute inset-0 rounded-full" style={{boxShadow: 'inset 18px 0 0 rgba(126, 140, 119, 0.8)'}}></div>
<span className="relative z-10 font-mono-custom text-xs text-[#7E8C77] tracking-widest scale-90">WAXING</span>
</div>
</div>
<footer className="text-sm text-[#2A4B5D] leading-relaxed">
                    Illumination at 34%. Optimal conditions for nocturnal observation of the eastern ridge.
                </footer>
</article>
<article className="aspect-square border-b lg:border-b-0 lg:border-r border-[#7E8C77]/30 p-6 flex flex-col justify-between group relative bg-[#F5F5F0]">
<header className="flex justify-between items-start font-mono-custom text-xs z-10">
<span className="text-[#2A4B5D]">TILE.02</span>
<span className="text-[#7E8C77]">PLAN</span>
</header>
<div className="flex-grow flex items-center justify-center relative w-full h-full p-4">
<div className="w-full h-full border border-[#7E8C77]/50 relative flex">
<div className="w-2/3 h-full border-r border-[#7E8C77]/50 bg-white/50 hover:bg-[#2A4B5D]/5 transition-colors cursor-crosshair"></div>
<div className="w-1/3 h-1/2 border-b border-[#7E8C77]/50 bg-white/30"></div>
<div className="absolute inset-0 m-auto w-4/5 h-fit opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm border border-[#2A4B5D] p-4 shadow-sm pointer-events-none z-20">
<p className="font-mono-custom text-xs text-[#2A4B5D] uppercase leading-relaxed">
<span className="block mb-2 font-medium border-b border-[#2A4B5D]/20 pb-2">Primary Quarters</span>
                                Orientation: 220° SW.<br/>Optimized for 6:15 PM Golden Hour halation.
                            </p>
</div>
</div>
</div>
<footer className="font-mono-custom text-xs text-[#7E8C77] uppercase tracking-widest text-right opacity-80">
                    Scale 1:100 / Metric
                </footer>
</article>
<article className="aspect-square border-b md:border-b-0 md:border-r border-[#7E8C77]/30 p-6 flex flex-col justify-between bg-white/40 riso-texture">
<header className="flex justify-between items-start font-mono-custom text-xs">
<span className="text-[#2A4B5D]">TILE.03</span>
<span className="text-[#7E8C77]">FLORA</span>
</header>
<div className="flex-grow flex items-center gap-6 py-4">
<div className="h-full w-4 bg-gradient-to-t from-[#2A4B5D] via-[#7E8C77] to-[#8C4A42] rounded-full relative border border-[#F5F5F0]">
<div className="absolute top-[40%] -left-2 w-8 h-[1px] bg-[#2A4B5D] z-10"></div>
<div className="absolute top-[40%] -right-10 font-mono-custom text-xs text-[#2A4B5D] translate-y-[-50%]">NOW</div>
</div>
<div className="flex flex-col justify-between h-full py-2">
<span className="font-mono-custom text-xs text-[#8C4A42] uppercase">Indian Paintbrush</span>
<span className="font-mono-custom text-xs text-[#7E8C77] uppercase">Coreopsis</span>
<span className="font-mono-custom text-xs text-[#2A4B5D] uppercase">Bluebonnet</span>
</div>
</div>
<footer className="text-sm text-[#2A4B5D] leading-relaxed">
                    Current soil temperature accelerating Lupinus texensis bloom by 4 days compared to baseline.
                </footer>
</article>
<article className="aspect-square p-6 flex flex-col justify-between bg-[#F5F5F0]">
<header className="flex justify-between items-start font-mono-custom text-xs">
<span className="text-[#2A4B5D]">TILE.04</span>
<span className="text-[#7E8C77]">ARCHIVE</span>
</header>
<div className="flex-grow flex flex-col justify-center items-center py-4 text-center gap-4">
<div className="w-12 h-12 border border-[#2A4B5D] rounded-full flex items-center justify-center opacity-80">
<iconify-icon className="text-xl text-[#2A4B5D]" icon="solar:user-linear"></iconify-icon>
</div>
<blockquote className="font-mono-custom text-xs text-[#2A4B5D] leading-relaxed uppercase tracking-wider text-left border-l-2 border-[#7E8C77] pl-3">
                        "1870: Ralph enters Mexico.<br/><br/>
                        2026: You enter the silence."
                    </blockquote>
</div>
<footer className="font-mono-custom text-xs text-[#7E8C77] uppercase tracking-widest border-t border-[#7E8C77]/30 pt-3 opacity-80">
                    Ref: CR-HIST-09
                </footer>
</article>
</section>

<footer className="w-full py-8 px-6 flex flex-col md:flex-row justify-between items-center font-mono-custom text-xs text-[#2A4B5D]/60 uppercase tracking-widest bg-[#F5F5F0]">
<div>© 2026 Caven Ranch Botanical &amp; Architectural Preserve</div>
<div className="mt-4 md:mt-0 flex gap-6">
<a className="hover:text-[#2A4B5D] transition-colors" href="#">Coordinates</a>
<a className="hover:text-[#2A4B5D] transition-colors" href="#">Manifesto</a>
</div>
</footer>
</main>

    </>
  );
}
