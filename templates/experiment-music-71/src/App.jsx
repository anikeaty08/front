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
      
<div className="noise"></div>

<header className="fixed top-0 left-0 w-full z-40 border-b bg-neutral-950 border-neutral-800">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 h-14 md:h-16 divide-x divide-neutral-800">

<div className="col-span-1 md:col-span-1 flex items-center justify-center lg:justify-start lg:pl-6 transition-colors duration-300 group cursor-pointer bg-neutral-950 hover:bg-white hover:text-black">
<h1 className="text-xl md:text-2xl font-semibold tracking-tighter uppercase">Forma</h1>
</div>

<div className="hidden md:flex col-span-2 lg:col-span-4 items-center overflow-hidden relative bg-neutral-950">
<div className="marquee-container w-full">
<div className="marquee-content font-mono text-xs uppercase tracking-widest text-neutral-400">
<span className="mx-4">/// LIVE: STATIC_INTERFERENCE_VOL.4</span>
<span className="mx-4">/// NEXT: DRONE_SESSIONS_BERLIN</span>
<span className="mx-4">/// NEW_ARCHIVE: SIGNAL_LOSS_002</span>
<span className="mx-4">/// EXPERIMENTAL_NOISE_UNIT</span>
<span className="mx-4">/// FORM_FOLLOWS_FUNCTION</span>
<span className="mx-4">/// SYSTEM_OVERLOAD</span>
<span className="mx-4">/// LIVE: STATIC_INTERFERENCE_VOL.4</span>
<span className="mx-4">/// NEXT: DRONE_SESSIONS_BERLIN</span>
<span className="mx-4">/// NEW_ARCHIVE: SIGNAL_LOSS_002</span>
<span className="mx-4">/// EXPERIMENTAL_NOISE_UNIT</span>
</div>
</div>
</div>

<div className="col-span-1 flex items-center justify-center cursor-pointer transition-colors hover:bg-neutral-800">
<span className="font-mono text-xs uppercase tracking-tight">Menu [ + ]</span>
</div>
</div>
</header>

<main className="flex-grow pt-14 md:pt-16 pb-24">

<section className="grid grid-cols-1 lg:grid-cols-2 border-b min-h-[70vh] border-neutral-800">

<div className="relative w-full h-96 lg:h-auto border-b lg:border-b-0 lg:border-r overflow-hidden group border-neutral-800">
<img alt="Noise Performance" className="w-full h-full object-cover filter grayscale contrast-125 opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute top-4 left-4 flex items-center space-x-2">
<div className="w-2 h-2 animate-pulse bg-red-600"></div>
<span className="font-mono text-xs text-red-500 uppercase tracking-widest">Live Signal</span>
</div>

<div className="flex group-hover:opacity-100 transition-opacity duration-300 opacity-0 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<button className="p-6 rounded-full hover:scale-110 transition-transform bg-white text-black">
<svg aria-hidden="true" className="iconify w-8 h-8 iconify--lucide" data-icon="lucide:play" data-inline="false" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>

<div className="flex flex-col justify-between p-6 lg:p-12 relative bg-neutral-950">
<div className="space-y-6">
<div className="flex items-start justify-between">
<span className="font-mono text-xs text-neutral-500 border px-2 py-1 rounded-sm uppercase border-neutral-800">Ssn-092</span>
<span className="font-mono text-xs text-neutral-500 uppercase">14:02:59 UTC</span>
</div>
<h2 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[0.85] text-white">
                        VOID  STRUCT  <span className="text-neutral-700">URES</span>
</h2>
<p className="font-mono text-sm max-w-md leading-relaxed text-neutral-400">
                        An exploration of brutalist soundscapes and industrial decay. Featuring live modular synthesis from the underground bunkers of Kyiv. Distortion as an aesthetic choice.
                    </p>
</div>
<div className="mt-12 pt-12 border-t grid grid-cols-2 gap-8 border-neutral-900">
<div>
<span className="block font-mono text-xs mb-1 uppercase text-neutral-600">Artist</span>
<span className="text-lg tracking-tight hover:underline cursor-pointer">Kajsa Lindgren</span>
</div>
<div>
<span className="block font-mono text-xs mb-1 uppercase text-neutral-600">Genre</span>
<span className="text-lg tracking-tight">Drone / Ambient</span>
</div>
</div>
</div>
</section>

<section className="w-full">
<div className="border-b px-6 py-3 flex justify-between items-center border-neutral-800 bg-neutral-900">
<h3 className="font-mono text-xs uppercase tracking-widest text-neutral-400">Incoming Transmissions</h3>
<svg aria-hidden="true" className="iconify text-neutral-400 iconify--lucide" data-icon="lucide:arrow-down" data-inline="false" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14m7-7l-7 7l-7-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="grid grid-cols-1">

<div className="group grid grid-cols-12 border-b min-h-[4rem] transition-colors cursor-pointer items-center border-neutral-800 hover:bg-neutral-900">
<div className="col-span-3 md:col-span-2 p-4 border-r font-mono text-xs text-neutral-500 group-hover:text-white border-neutral-800">
                        24.10
                    </div>
<div className="col-span-9 md:col-span-7 p-4 flex items-center">
<span className="text-xl md:text-2xl font-medium tracking-tight group-hover:translate-x-2 transition-transform duration-300">White Noise Collective</span>
</div>
<div className="hidden md:flex col-span-2 p-4 border-l font-mono text-xs text-neutral-500 items-center justify-end uppercase border-neutral-800">
                        London, UK
                    </div>
<div className="hidden md:flex col-span-1 p-4 border-l items-center justify-center border-neutral-800">
<svg aria-hidden="true" className="iconify group-hover:text-white text-neutral-600 iconify--lucide" data-icon="lucide:arrow-up-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>

<div className="group grid grid-cols-12 border-b min-h-[4rem] transition-colors cursor-pointer items-center border-neutral-800 hover:bg-neutral-900">
<div className="col-span-3 md:col-span-2 p-4 border-r font-mono text-xs text-neutral-500 group-hover:text-white border-neutral-800">
                        26.10
                    </div>
<div className="col-span-9 md:col-span-7 p-4 flex items-center">
<span className="text-xl md:text-2xl font-medium tracking-tight group-hover:translate-x-2 transition-transform duration-300">Ferrofluid (Live A/V)</span>
</div>
<div className="hidden md:flex col-span-2 p-4 border-l font-mono text-xs text-neutral-500 items-center justify-end uppercase border-neutral-800">
                        Berlin, DE
                    </div>
<div className="hidden md:flex col-span-1 p-4 border-l items-center justify-center border-neutral-800">
<svg aria-hidden="true" className="iconify group-hover:text-white text-neutral-600 iconify--lucide" data-icon="lucide:arrow-up-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>

<div className="group grid grid-cols-12 border-b min-h-[4rem] transition-colors cursor-pointer items-center border-neutral-800 hover:bg-neutral-900">
<div className="col-span-3 md:col-span-2 p-4 border-r font-mono text-xs text-neutral-500 group-hover:text-white border-neutral-800">
                        02.11
                    </div>
<div className="col-span-9 md:col-span-7 p-4 flex items-center">
<span className="text-xl md:text-2xl font-medium tracking-tight group-hover:translate-x-2 transition-transform duration-300">System Error 99</span>
</div>
<div className="hidden md:flex col-span-2 p-4 border-l font-mono text-xs text-neutral-500 items-center justify-end uppercase border-neutral-800">
                        Online
                    </div>
<div className="hidden md:flex col-span-1 p-4 border-l items-center justify-center border-neutral-800">
<svg aria-hidden="true" className="iconify group-hover:text-white text-neutral-600 iconify--lucide" data-icon="lucide:arrow-up-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b border-neutral-800">

<article className="group relative border-b md:border-b-0 border-r aspect-square overflow-hidden cursor-pointer border-neutral-800">
<img className="w-full h-full object-cover filter grayscale contrast-125 opacity-40 group-hover:opacity-100 transition-opacity duration-500" src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&amp;w=2070&amp;auto=format&amp;fit=crop&amp;grayscale"/>
<div className="absolute inset-0 p-6 flex flex-col justify-between">
<span className="font-mono text-xs w-max px-2 py-1 bg-black/80 text-white">ARCHIVE_01</span>
<div>
<h4 className="text-2xl font-medium tracking-tight mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-white">Analog Decay</h4>
<p className="font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity delay-75 duration-300 text-neutral-400">Modular Synthesis</p>
</div>
</div>
</article>

<article className="group relative border-b md:border-b-0 lg:border-r aspect-square overflow-hidden cursor-pointer border-neutral-800">
<img className="w-full h-full object-cover filter grayscale contrast-125 opacity-40 group-hover:opacity-100 transition-opacity duration-500" src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&amp;w=2070&amp;auto=format&amp;fit=crop&amp;grayscale"/>
<div className="absolute inset-0 p-6 flex flex-col justify-between">
<span className="font-mono text-xs w-max px-2 py-1 bg-black/80 text-white">ARCHIVE_02</span>
<div>
<h4 className="text-2xl font-medium tracking-tight mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-white">Static Field</h4>
<p className="font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity delay-75 duration-300 text-neutral-400">Experimental Noise</p>
</div>
</div>
</article>

<article className="group relative border-b md:border-b-0 border-r aspect-square overflow-hidden cursor-pointer border-neutral-800">
<img className="w-full h-full object-cover filter grayscale contrast-125 opacity-40 group-hover:opacity-100 transition-opacity duration-500" src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&amp;w=2070&amp;auto=format&amp;fit=crop&amp;grayscale"/>
<div className="absolute inset-0 p-6 flex flex-col justify-between">
<span className="font-mono text-xs w-max px-2 py-1 bg-black/80 text-white">ARCHIVE_03</span>
<div>
<h4 className="text-2xl font-medium tracking-tight mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-white">Concrete</h4>
<p className="font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity delay-75 duration-300 text-neutral-400">Industrial / EBM</p>
</div>
</div>
</article>

<div className="aspect-square p-6 md:p-8 flex flex-col justify-center border-b md:border-b-0 bg-neutral-950 border-neutral-800">
<h4 className="text-2xl font-medium tracking-tight mb-6">Stay Underground</h4>
<form className="space-y-6">
<div className="relative group">
<input className="w-full bg-transparent border-b py-3 text-lg font-mono placeholder-neutral-600 focus:outline-none focus:border-white transition-colors border-neutral-700 text-white" placeholder="ENTER EMAIL" type="email"/>
</div>
<button className="w-full py-3 border transition-all duration-300 flex items-center justify-between px-4 group border-neutral-700 hover:bg-white hover:text-black hover:border-white" type="button">
<span className="font-mono text-xs uppercase tracking-widest">Subscribe</span>
<svg aria-hidden="true" className="iconify group-hover:translate-x-1 transition-transform iconify--lucide" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</form>
</div>
</section>

<section className="py-24 px-6 md:px-12 border-b border-neutral-800">
<div className="max-w-4xl mx-auto text-center">
<p className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight transition-colors duration-700 cursor-default text-neutral-800 hover:text-neutral-200">
                    FORMA IS A SPACE FOR THE ATONAL, THE ROUGH, AND THE EXPERIMENTAL. WE DOCUMENT THE SOUNDS THAT EXIST IN THE SHADOWS.
                </p>
</div>
</section>
</main>

<footer className="fixed bottom-0 left-0 w-full z-50 border-t h-20 md:h-24 bg-neutral-950 border-neutral-800">
<div className="h-full grid grid-cols-12 divide-x divide-neutral-800">

<div className="col-span-3 md:col-span-2 flex items-center justify-center space-x-6 bg-neutral-950">
<button className="hover:opacity-50 transition-opacity">
<svg aria-hidden="true" className="iconify w-5 h-5 text-white iconify--lucide" data-icon="lucide:skip-back" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432zM3 20V4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<button className="w-10 h-10 border flex items-center justify-center transition-colors border-white hover:bg-white hover:text-black">
<svg aria-hidden="true" className="iconify w-5 h-5 ml-0.5 iconify--lucide" data-icon="lucide:play" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<button className="hover:opacity-50 transition-opacity">
<svg aria-hidden="true" className="iconify w-5 h-5 text-white iconify--lucide" data-icon="lucide:skip-forward" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 4v16M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>

<div className="col-span-6 md:col-span-7 flex flex-col justify-center px-6 overflow-hidden">
<div className="flex items-center space-x-3 mb-1">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
<span className="font-mono text-xs text-neutral-500 uppercase">Live Now</span>
</div>
<div className="overflow-hidden whitespace-nowrap">
<span className="text-sm md:text-base font-medium tracking-tight">Kajsa Lindgren — Void Structures (Live from Kyiv)</span>
</div>
</div>

<div className="hidden md:flex col-span-3 flex-col justify-center px-6">
<div className="flex items-center space-x-4">
<svg aria-hidden="true" className="iconify text-neutral-500 w-4 h-4 iconify--lucide" data-icon="lucide:volume-2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298zM16 9a5 5 0 0 1 0 6m3.364 3.364a9 9 0 0 0 0-12.728" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<input className="w-full h-2 appearance-none bg-neutral-800" max="100" min="0" type="range" value="70"/>
</div>
</div>

<div className="col-span-3 md:hidden flex items-center justify-center bg-white text-black">
<svg aria-hidden="true" className="iconify w-6 h-6 iconify--lucide" data-icon="lucide:list-music" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 5H3m8 7H3m8 7H3m18-3V5"></path><circle cx="18" cy="16" r="3"></circle></g></svg>
</div>
</div>
</footer>

    </>
  );
}
