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
      

<div bis_size='{"x":0,"y":0,"w":1920,"h":1024,"abs_x":600,"abs_y":274}' className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div bis_size='{"x":192,"y":-102,"w":1536,"h":600,"abs_x":792,"abs_y":172}' className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80vw] h-[600px] bg-orange-600/10 blur-[120px] rounded-full mix-blend-screen"></div>
<div bis_size='{"x":1344,"y":726,"w":768,"h":400,"abs_x":1944,"abs_y":1000}' className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[400px] bg-red-900/10 blur-[100px] rounded-full mix-blend-screen"></div>
</div>

<nav bis_size='{"x":0,"y":0,"w":1920,"h":65,"abs_x":600,"abs_y":274}' className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/50 backdrop-blur-xl">
<div bis_size='{"x":320,"y":0,"w":1280,"h":64,"abs_x":920,"abs_y":274}' className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div bis_size='{"x":352,"y":0,"w":1216,"h":64,"abs_x":952,"abs_y":274}' className="flex items-center justify-between h-16">

<div bis_size='{"x":352,"y":18,"w":117,"h":28,"abs_x":952,"abs_y":292}' className="flex-shrink-0 cursor-pointer group">
<span bis_size='{"x":352,"y":21,"w":117,"h":22,"abs_x":952,"abs_y":295}' className="text-lg font-semibold tracking-tight text-white group-hover:opacity-90 transition-opacity">
                        VOGGS<span bis_size='{"x":414,"y":21,"w":54,"h":22,"abs_x":1014,"abs_y":295}' className="text-orange-500 font-light">MEDIA</span>
</span>
</div>

<div bis_size='{"x":858,"y":22,"w":219,"h":20,"abs_x":1458,"abs_y":296}' className="hidden md:flex items-center gap-8">
<a bis_size='{"x":858,"y":22,"w":39,"h":20,"abs_x":1458,"abs_y":296}' className="text-sm font-medium text-white hover:text-orange-400 transition-colors" href="#">Home</a>
<a bis_size='{"x":930,"y":22,"w":74,"h":20,"abs_x":1530,"abs_y":296}' className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#">Leistungen</a>
<a bis_size='{"x":1036,"y":22,"w":41,"h":20,"abs_x":1636,"abs_y":296}' className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#">Cases</a>
</div>

<div bis_size='{"x":1467,"y":16,"w":100,"h":32,"abs_x":2067,"abs_y":290}' className="flex items-center gap-4">
<button bis_size='{"x":1467,"y":32,"w":0,"h":0,"abs_x":2067,"abs_y":306}' className="text-slate-400 hover:text-white transition-colors flex items-center justify-center">
<iconify-icon bis_size='{"x":1467,"y":32,"w":0,"h":0,"abs_x":2067,"abs_y":306}' height="20" icon="solar:globe-linear" width="20"></iconify-icon>
</button>
<a bis_size='{"x":1483,"y":16,"w":84,"h":32,"abs_x":2083,"abs_y":290}' className="hidden sm:inline-flex items-center justify-center rounded-full bg-white text-slate-950 px-5 py-2 text-xs font-semibold hover:bg-slate-200 transition-all" href="#">
                        Kontakt
                    </a>
</div>
</div>
</div>
</nav>

<main bis_size='{"x":0,"y":0,"w":1920,"h":1291,"abs_x":600,"abs_y":274}' className="sm:pb-24 sm:pt-30 pt-32 pb-16 relative">
<section bis_size='{"x":0,"y":128,"w":1920,"h":1067,"abs_x":600,"abs_y":402}' className="sm:px-6 lg:px-8 sm:pb-20 max-w-full mr-auto ml-auto pt-10 pr-4 pb-16 pl-4">
<div bis_size='{"x":512,"y":168,"w":896,"h":467,"abs_x":1112,"abs_y":442}' className="text-center max-w-4xl mr-auto mb-0 ml-auto">

<div bis_size='{"x":512,"y":168,"w":896,"h":34,"abs_x":1112,"abs_y":442}' className="flex justify-center mb-6 sm:mb-8 fade-in">
<span bis_size='{"x":853,"y":168,"w":212,"h":34,"abs_x":1453,"abs_y":442}' className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-3 sm:px-4 py-1.5 sm:py-2 text-xs font-medium text-orange-400 shadow-[0_0_15px_rgba(249,115,22,0.15)] transition-all hover:bg-orange-500/15 cursor-default">
<span bis_size='{"x":870,"y":181,"w":8,"h":8,"abs_x":1470,"abs_y":455}' className="relative flex h-2 w-2">
<span bis_size='{"x":870,"y":181,"w":8,"h":8,"abs_x":1470,"abs_y":455}' className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span bis_size='{"x":870,"y":181,"w":8,"h":8,"abs_x":1470,"abs_y":455}' className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
                        TikTok Performance Agency
                    </span>
</div>

<h1 bis_size='{"x":512,"y":234,"w":896,"h":144,"abs_x":1112,"abs_y":508}' className="sm:text-5xl lg:text-7xl text-4xl font-medium text-white tracking-tighter font-geist drop-shadow-sm">
                    Verkaufen auf TikTok geht –<br bis_size='{"x":1381,"y":223,"w":0,"h":93,"abs_x":1981,"abs_y":497}' className="hidden sm:block"/>
<span bis_size='{"x":564,"y":295,"w":791,"h":93,"abs_x":1164,"abs_y":569}' className="bg-clip-text font-medium text-transparent font-geist bg-gradient-to-br from-orange-200 via-orange-400 to-red-500">aber anders als du denkst.</span>
</h1>

<p bis_size='{"x":624,"y":402,"w":672,"h":84,"abs_x":1224,"abs_y":676}' className="sm:text-lg leading-relaxed text-base font-normal text-[#969696] max-w-5xl mt-6 mr-2rem ml-2rem">Wir skalieren moderne Marken mit Content, der performt – simpel, klar, wachstumsorientiert.</p>

<div bis_size='{"x":512,"y":526,"w":896,"h":44,"abs_x":1112,"abs_y":800}' className="sm:mt-10 flex flex-col sm:flex-row gap-4 mt-8 gap-x-4 gap-y-4 items-center justify-center">
<a bis_size='{"x":701,"y":526,"w":258,"h":44,"abs_x":1301,"abs_y":800}' className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-orange-500 to-orange-600 px-6 sm:px-8 py-3 text-sm font-semibold text-white shadow-[0_0_20px_-5px_rgba(234,88,12,0.5)] hover:shadow-[0_0_25px_-5px_rgba(234,88,12,0.6)] hover:brightness-110 transition-all duration-300" href="#">
                        Jetzt Kontakt aufnehmen
                        <iconify-icon bis_size='{"x":911,"y":540,"w":16,"h":16,"abs_x":1511,"abs_y":814}' className="transition-transform group-hover:translate-x-1" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<a bis_size='{"x":975,"y":530,"w":242,"h":36,"abs_x":1575,"abs_y":804}' className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors px-4 py-2" href="#">
                        Unsere Ergebnisse ansehen
                        <iconify-icon bis_size='{"x":1186,"y":540,"w":16,"h":16,"abs_x":1786,"abs_y":814}' className="text-slate-500" height="16" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</a>
</div>

<div bis_size='{"x":512,"y":610,"w":896,"h":25,"abs_x":1112,"abs_y":884}' className="w-full border-white/5 border-t mt-8 sm:mt-10 pt-0">
<div bis_size='{"x":512,"y":611,"w":896,"h":24,"abs_x":1112,"abs_y":885}' className="flex flex-wrap hover:opacity-60 transition-opacity duration-500 opacity-40 gap-x-12 gap-y-8 items-center justify-center">

<svg bis_size='{"x":581,"y":613,"w":133,"h":20,"abs_x":1181,"abs_y":887}' className="h-4 sm:h-5 w-auto text-white fill-current" viewbox="0 0 160 24" xmlns="http://www.w3.org/2000/svg">
<g bis_size='{"x":582,"y":614,"w":109,"h":16,"abs_x":1182,"abs_y":888}' opacity="0.9">
<circle bis_size='{"x":582,"y":614,"w":16,"h":16,"abs_x":1182,"abs_y":888}' cx="12" cy="12" fill="none" r="10" stroke="currentColor" strokeWidth="1.5"></circle>
<path bis_size='{"x":586,"y":621,"w":8,"h":8,"abs_x":1186,"abs_y":895}' d="M7 10h10M12 10v10" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
<text bis_size='{"x":607,"y":616,"w":84,"h":13,"abs_x":1207,"abs_y":890}' fill="currentColor" fontFamily="sans-serif" fontSize="14" font-weight="600" letter-spacing="1.5" x="32" y="17">TOM TAILOR</text>
</g>
</svg>

<svg bis_size='{"x":762,"y":613,"w":102,"h":20,"abs_x":1362,"abs_y":887}' className="sm:h-6 fill-current w-[102px] h-[20px]" data-icon-replaced="true" strokeWidth="2" style={{width: '102px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 120 28" xmlns="http://www.w3.org/2000/svg">
<text bis_size='{"x":770,"y":614,"w":55,"h":16,"abs_x":1370,"abs_y":888}' className="" fill="currentColor" fontFamily="sans-serif" fontSize="20" font-weight="700" letter-spacing="-0.5" x="0" y="20">Magenta</text>
<text bis_size='{"x":829,"y":615,"w":4,"h":8,"abs_x":1429,"abs_y":889}' className="" fill="currentColor" fontFamily="sans-serif" fontSize="10" opacity="0.8" x="82" y="12">T</text>
<circle bis_size='{"x":827,"y":615,"w":8,"h":8,"abs_x":1427,"abs_y":889}' className="" cx="85" cy="9" fill="none" opacity="0.8" r="6" stroke="currentColor" strokeWidth="0.8"></circle>
</svg>

<svg bis_size='{"x":912,"y":611,"w":77,"h":24,"abs_x":1512,"abs_y":885}' className="h-5 sm:h-6 w-auto text-white fill-current" viewbox="0 0 90 28" xmlns="http://www.w3.org/2000/svg">
<text bis_size='{"x":912,"y":612,"w":57,"h":22,"abs_x":1512,"abs_y":886}' className="" fill="currentColor" fontFamily="sans-serif" fontSize="22" font-weight="800" letter-spacing="-0.2" x="0" y="22">YFood</text>
</svg>

<svg bis_size='{"x":1037,"y":611,"w":120,"h":24,"abs_x":1637,"abs_y":885}' className="h-5 sm:h-6 w-auto text-white fill-current" viewbox="0 0 140 28" xmlns="http://www.w3.org/2000/svg">
<g bis_size='{"x":1041,"y":618,"w":8,"h":8,"abs_x":1641,"abs_y":892}' transform="translate(0, 4)">
<path bis_size='{"x":1041,"y":618,"w":8,"h":8,"abs_x":1641,"abs_y":892}' d="M5 10a5 5 0 1 0 10 0 5 5 0 1 0-10 0" fill="none" stroke="currentColor" strokeWidth="1.5"></path>
<path bis_size='{"x":1047,"y":624,"w":2,"h":2,"abs_x":1647,"abs_y":898}' d="M12 12l3 3" stroke="currentColor" strokeWidth="1.5"></path>
</g>
<text bis_size='{"x":1058,"y":613,"w":85,"h":18,"abs_x":1658,"abs_y":887}' className="" fill="currentColor" fontFamily="sans-serif" fontSize="18" font-weight="800" letter-spacing="-0.5" x="25" y="20">urlaubsguru</text>
</svg>

<svg bis_size='{"x":1205,"y":613,"w":133,"h":20,"abs_x":1805,"abs_y":887}' className="h-4 sm:h-5 w-auto text-white fill-current" viewbox="0 0 160 24" xmlns="http://www.w3.org/2000/svg">
<path bis_size='{"x":1209,"y":618,"w":6,"h":9,"abs_x":1809,"abs_y":892}' d="M5 18l4-12l4 12" fill="none" opacity="0.7" stroke="currentColor" strokeWidth="1"></path>
<text bis_size='{"x":1222,"y":617,"w":76,"h":13,"abs_x":1822,"abs_y":891}' fill="currentColor" fontFamily="serif" fontSize="14" font-weight="500" letter-spacing="2" x="20" y="17">WESTWING</text>
<text bis_size='{"x":1222,"y":629,"w":42,"h":4,"abs_x":1822,"abs_y":903}' fill="currentColor" fontFamily="sans-serif" fontSize="4" letter-spacing="1" opacity="0.6" x="20" y="23">HOME AND LIVING</text>
</svg>
</div>
</div>
</div>

<div bis_size='{"x":32,"y":731,"w":1856,"h":384,"abs_x":632,"abs_y":1005}' className="relative mt-20 sm:mt-24">
<div bis_size='{"x":32,"y":731,"w":1856,"h":384,"abs_x":632,"abs_y":1005}' className="mx-auto max-w-full overflow-hidden marquee-mask">
<div bis_size='{"x":32,"y":731,"w":3072,"h":384,"abs_x":632,"abs_y":1005}' className="flex w-max animate-marquee hover:[animation-play-state:paused] will-change-transform">

<div bis_size='{"x":32,"y":731,"w":1536,"h":384,"abs_x":632,"abs_y":1005}' className="grid grid-flow-col auto-cols-[10rem] sm:auto-cols-[14rem] sm:gap-8 flex-shrink-0 sm:pr-8 w-[80vw] pr-4 gap-x-4 gap-y-4">

<div bis_size='{"x":32,"y":731,"w":224,"h":384,"abs_x":632,"abs_y":1005}' className="rounded-2xl overflow-hidden ring-1 ring-white/5 bg-slate-900 group relative transform transition-transform hover:scale-[1.02] duration-300 h-64 sm:h-80 lg:h-96 w-40 sm:w-56">
<div bis_size='{"x":32,"y":987,"w":224,"h":128,"abs_x":632,"abs_y":1261}' className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/80 to-transparent z-10 pointer-events-none"></div>
<video autoplay="" bis_size='{"x":32,"y":731,"w":224,"h":384,"abs_x":632,"abs_y":1005}' className="h-full w-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500" loop="" muted="" playsinline="">
<source bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":600,"abs_y":274}' src="https://framerusercontent.com/assets/PFpAkYSTdHYkiMrklcvxeaQkU.mp4" type="video/mp4"/>
</video>
</div>

<div bis_size='{"x":288,"y":731,"w":224,"h":384,"abs_x":888,"abs_y":1005}' className="rounded-2xl overflow-hidden ring-1 ring-orange-500/50 bg-slate-900 group relative transform transition-transform hover:scale-[1.02] duration-300 shadow-[0_0_30px_-10px_rgba(234,88,12,0.3)] h-64 sm:h-80 lg:h-96 w-40 sm:w-56">
<div bis_size='{"x":452,"y":743,"w":48,"h":19,"abs_x":1052,"abs_y":1017}' className="absolute top-3 right-3 z-20 bg-orange-500 text-[9px] sm:text-[10px] text-white px-2 py-0.5 rounded-full font-bold uppercase tracking-wider shadow-sm">Viral</div>
<div bis_size='{"x":288,"y":987,"w":224,"h":128,"abs_x":888,"abs_y":1261}' className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/80 to-transparent z-10 pointer-events-none"></div>
<video autoplay="" bis_size='{"x":288,"y":731,"w":224,"h":384,"abs_x":888,"abs_y":1005}' className="h-full w-full object-cover transition-opacity duration-500" loop="" muted="" playsinline="">
<source bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":600,"abs_y":274}' src="https://framerusercontent.com/assets/0ZCaP03fVSpcgmwBLa0kncbCI.mp4" type="video/mp4"/>
</video>
</div>

<div bis_size='{"x":544,"y":731,"w":224,"h":384,"abs_x":1144,"abs_y":1005}' className="rounded-2xl overflow-hidden ring-1 ring-white/5 bg-slate-900 group relative transform transition-transform hover:scale-[1.02] duration-300 h-64 sm:h-80 lg:h-96 w-40 sm:w-56">
<div bis_size='{"x":544,"y":987,"w":224,"h":128,"abs_x":1144,"abs_y":1261}' className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/80 to-transparent z-10 pointer-events-none"></div>
<video autoplay="" bis_size='{"x":544,"y":731,"w":224,"h":384,"abs_x":1144,"abs_y":1005}' className="h-full w-full object-cover opacity-75 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all duration-500" loop="" muted="" playsinline="">
<source bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":600,"abs_y":274}' src="https://framerusercontent.com/assets/fE0WK2Pi3i3JoANuSxZte36iHY.mp4" type="video/mp4"/>
</video>
</div>

<div bis_size='{"x":800,"y":731,"w":224,"h":384,"abs_x":1400,"abs_y":1005}' className="rounded-2xl overflow-hidden ring-1 ring-white/5 bg-slate-900 group relative transform transition-transform hover:scale-[1.02] duration-300 h-64 sm:h-80 lg:h-96 w-40 sm:w-56">
<div bis_size='{"x":800,"y":987,"w":224,"h":128,"abs_x":1400,"abs_y":1261}' className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/80 to-transparent z-10 pointer-events-none"></div>
<video autoplay="" bis_size='{"x":800,"y":731,"w":224,"h":384,"abs_x":1400,"abs_y":1005}' className="h-full w-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500" loop="" muted="" playsinline="">
<source bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":600,"abs_y":274}' src="https://framerusercontent.com/assets/6frT9FLiLZ1iSoh3BcotYH9yDjw.mp4" type="video/mp4"/>
</video>
</div>

<div bis_size='{"x":1056,"y":731,"w":224,"h":384,"abs_x":1656,"abs_y":1005}' className="rounded-2xl overflow-hidden ring-1 ring-white/5 bg-slate-900 group relative transform transition-transform hover:scale-[1.02] duration-300 h-64 sm:h-80 lg:h-96 w-40 sm:w-56">
<div bis_size='{"x":1056,"y":987,"w":224,"h":128,"abs_x":1656,"abs_y":1261}' className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/80 to-transparent z-10 pointer-events-none"></div>
<video autoplay="" bis_size='{"x":1056,"y":731,"w":224,"h":384,"abs_x":1656,"abs_y":1005}' className="h-full w-full object-cover opacity-75 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all duration-500" loop="" muted="" playsinline="">
<source bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":600,"abs_y":274}' src="https://framerusercontent.com/assets/59C6ncD4xwabBCynO4EN5mOI0k8.mp4" type="video/mp4"/>
</video>
</div>

<div bis_size='{"x":1312,"y":731,"w":224,"h":384,"abs_x":1912,"abs_y":1005}' className="rounded-2xl overflow-hidden ring-1 ring-white/5 bg-slate-900 group relative transform transition-transform hover:scale-[1.02] duration-300 h-64 sm:h-80 lg:h-96 w-40 sm:w-56">
<div bis_size='{"x":1312,"y":987,"w":224,"h":128,"abs_x":1912,"abs_y":1261}' className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/80 to-transparent z-10 pointer-events-none"></div>
<video autoplay="" bis_size='{"x":1312,"y":731,"w":224,"h":384,"abs_x":1912,"abs_y":1005}' className="h-full w-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500" loop="" muted="" playsinline="">
<source bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":600,"abs_y":274}' src="https://framerusercontent.com/assets/3sjwDrT3ROa5ok1jZiNnSAQbH8.mp4" type="video/mp4"/>
</video>
</div>
</div>

<div bis_size='{"x":1568,"y":731,"w":1536,"h":384,"abs_x":2168,"abs_y":1005}' className="grid grid-flow-col auto-cols-[10rem] sm:auto-cols-[14rem] gap-4 sm:gap-8 flex-shrink-0 pr-4 sm:pr-8">

<div bis_size='{"x":1568,"y":731,"w":224,"h":384,"abs_x":2168,"abs_y":1005}' className="rounded-2xl overflow-hidden ring-1 ring-white/5 bg-slate-900 group relative transform transition-transform hover:scale-[1.02] duration-300 h-64 sm:h-80 lg:h-96 w-40 sm:w-56">
<div bis_size='{"x":1568,"y":987,"w":224,"h":128,"abs_x":2168,"abs_y":1261}' className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/80 to-transparent z-10 pointer-events-none"></div>
<video autoplay="" bis_size='{"x":1568,"y":731,"w":224,"h":384,"abs_x":2168,"abs_y":1005}' className="h-full w-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500" loop="" muted="" playsinline="">
<source bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":600,"abs_y":274}' src="https://framerusercontent.com/assets/PFpAkYSTdHYkiMrklcvxeaQkU.mp4" type="video/mp4"/>
</video>
</div>

<div bis_size='{"x":1824,"y":731,"w":224,"h":384,"abs_x":2424,"abs_y":1005}' className="rounded-2xl overflow-hidden ring-1 ring-orange-500/50 bg-slate-900 group relative transform transition-transform hover:scale-[1.02] duration-300 shadow-[0_0_30px_-10px_rgba(234,88,12,0.3)] h-64 sm:h-80 lg:h-96 w-40 sm:w-56">
<div bis_size='{"x":1988,"y":743,"w":48,"h":19,"abs_x":2588,"abs_y":1017}' className="absolute top-3 right-3 z-20 bg-orange-500 text-[9px] sm:text-[10px] text-white px-2 py-0.5 rounded-full font-bold uppercase tracking-wider shadow-sm">Viral</div>
<div bis_size='{"x":1824,"y":987,"w":224,"h":128,"abs_x":2424,"abs_y":1261}' className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/80 to-transparent z-10 pointer-events-none"></div>
<video autoplay="" bis_size='{"x":1824,"y":731,"w":224,"h":384,"abs_x":2424,"abs_y":1005}' className="h-full w-full object-cover transition-opacity duration-500" loop="" muted="" playsinline="">
<source bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":600,"abs_y":274}' src="https://framerusercontent.com/assets/0ZCaP03fVSpcgmwBLa0kncbCI.mp4" type="video/mp4"/>
</video>
</div>

<div bis_size='{"x":2080,"y":731,"w":224,"h":384,"abs_x":2680,"abs_y":1005}' className="rounded-2xl overflow-hidden ring-1 ring-white/5 bg-slate-900 group relative transform transition-transform hover:scale-[1.02] duration-300 h-64 sm:h-80 lg:h-96 w-40 sm:w-56">
<div bis_size='{"x":2080,"y":987,"w":224,"h":128,"abs_x":2680,"abs_y":1261}' className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/80 to-transparent z-10 pointer-events-none"></div>
<video autoplay="" bis_size='{"x":2080,"y":731,"w":224,"h":384,"abs_x":2680,"abs_y":1005}' className="h-full w-full object-cover opacity-75 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all duration-500" loop="" muted="" playsinline="">
<source bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":600,"abs_y":274}' src="https://framerusercontent.com/assets/fE0WK2Pi3i3JoANuSxZte36iHY.mp4" type="video/mp4"/>
</video>
</div>

<div bis_size='{"x":2336,"y":731,"w":224,"h":384,"abs_x":2936,"abs_y":1005}' className="rounded-2xl overflow-hidden ring-1 ring-white/5 bg-slate-900 group relative transform transition-transform hover:scale-[1.02] duration-300 h-64 sm:h-80 lg:h-96 w-40 sm:w-56">
<div bis_size='{"x":2336,"y":987,"w":224,"h":128,"abs_x":2936,"abs_y":1261}' className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/80 to-transparent z-10 pointer-events-none"></div>
<video autoplay="" bis_size='{"x":2336,"y":731,"w":224,"h":384,"abs_x":2936,"abs_y":1005}' className="h-full w-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500" loop="" muted="" playsinline="">
<source bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":600,"abs_y":274}' src="https://framerusercontent.com/assets/6frT9FLiLZ1iSoh3BcotYH9yDjw.mp4" type="video/mp4"/>
</video>
</div>

<div bis_size='{"x":2592,"y":731,"w":224,"h":384,"abs_x":3192,"abs_y":1005}' className="rounded-2xl overflow-hidden ring-1 ring-white/5 bg-slate-900 group relative transform transition-transform hover:scale-[1.02] duration-300 h-64 sm:h-80 lg:h-96 w-40 sm:w-56">
<div bis_size='{"x":2592,"y":987,"w":224,"h":128,"abs_x":3192,"abs_y":1261}' className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/80 to-transparent z-10 pointer-events-none"></div>
<video autoplay="" bis_size='{"x":2592,"y":731,"w":224,"h":384,"abs_x":3192,"abs_y":1005}' className="h-full w-full object-cover opacity-75 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all duration-500" loop="" muted="" playsinline="">
<source bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":600,"abs_y":274}' src="https://framerusercontent.com/assets/59C6ncD4xwabBCynO4EN5mOI0k8.mp4" type="video/mp4"/>
</video>
</div>

<div bis_size='{"x":2848,"y":731,"w":224,"h":384,"abs_x":3448,"abs_y":1005}' className="rounded-2xl overflow-hidden ring-1 ring-white/5 bg-slate-900 group relative transform transition-transform hover:scale-[1.02] duration-300 h-64 sm:h-80 lg:h-96 w-40 sm:w-56">
<div bis_size='{"x":2848,"y":987,"w":224,"h":128,"abs_x":3448,"abs_y":1261}' className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/80 to-transparent z-10 pointer-events-none"></div>
<video autoplay="" bis_size='{"x":2848,"y":731,"w":224,"h":384,"abs_x":3448,"abs_y":1005}' className="h-full w-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500" loop="" muted="" playsinline="">
<source bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":600,"abs_y":274}' src="https://framerusercontent.com/assets/3sjwDrT3ROa5ok1jZiNnSAQbH8.mp4" type="video/mp4"/>
</video>
</div>
</div>
</div>
</div>

<div bis_size='{"x":32,"y":1051,"w":1856,"h":64,"abs_x":632,"abs_y":1325}' className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none"></div>
</div>
</section>
</main>

    </>
  );
}
