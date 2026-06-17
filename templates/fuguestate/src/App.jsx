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



                !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
            


        lucide.createIcons();
    
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="NMlvqnkICwYYJ6lYb064"></div>

</div>
</div>

<main className="min-h-screen lg:h-[90vh] flex flex-col lg:max-w-[1400px] lg:rounded-[2.5rem] lg:border lg:border-white/10 lg:shadow-2xl lg:shadow-black bg-black/20 w-full relative backdrop-blur-xl overflow-hidden">

<div className="absolute inset-0 w-full h-full pointer-events-none z-0 flex justify-between px-6 md:px-12 opacity-50 md:opacity-100">
<div className="w-px h-full bg-white/5"></div>
<div className="w-px h-full bg-white/5 hidden sm:block"></div>
<div className="w-px h-full bg-white/5 hidden md:block"></div>
<div className="w-px h-full bg-white/5 hidden lg:block"></div>
<div className="w-px h-full bg-white/5 hidden xl:block"></div>
<div className="w-px h-full bg-white/5"></div>
</div>

<nav className="relative z-50 flex items-center justify-between px-6 py-6 md:px-12 md:py-8">

<div className="flex items-center gap-3">
<div className="flex text-white bg-gradient-to-br from-indigo-500 to-violet-600 w-8 h-8 rounded-full shadow-[0_0_15px_rgba(99,102,241,0.4)] items-center justify-center">
<i className="w-5 h-5 text-white" data-lucide="brain-circuit" strokeWidth="1.5"></i>
</div>
<span className="text-lg font-medium tracking-tight text-white font-serif-custom italic">FugueState.ai</span>
</div>

<div className="hidden sm:flex items-center gap-6">
<span className="text-xs font-normal text-zinc-500 uppercase tracking-widest">Experimental Build v0.9</span>
</div>
</nav>

<div className="flex-1 z-20 flex flex-col md:flex-row h-full relative items-center">

<div className="absolute inset-0 bg-gradient-to-b from-[#09090b]/90 via-[#09090b]/60 to-transparent md:hidden z-10 pointer-events-none"></div>

<div className="w-full md:w-[55%] lg:w-[50%] px-6 md:px-12 z-30 flex flex-col justify-center h-full pb-20 md:pb-0">
<div className="max-w-2xl mx-auto md:mx-0">

<h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light text-white tracking-tight font-serif-custom mb-6 drop-shadow-2xl leading-[0.95]">
                        The machine that 
                        <span className="bg-clip-text italic text-transparent bg-gradient-to-r from-indigo-300 via-purple-300 to-indigo-300 pr-2">dreams your memories.</span>
</h1>

<p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-md font-light leading-relaxed">
                        What do you wish you could remember?
                    </p>

<div className="flex flex-col items-start gap-6 w-full sm:w-auto">

<button className="group inline-flex overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(99,102,241,0.3)] rounded-full pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative items-center justify-center w-full sm:w-auto">
<span className="absolute inset-[-100%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_75%,#818cf8_100%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
<span className="absolute inset-0 rounded-full bg-zinc-900 transition-opacity duration-500 group-hover:opacity-0"></span>
<span className="flex items-center justify-center gap-3 transition-colors duration-500 text-white text-base font-normal bg-gradient-to-b from-zinc-800 to-black w-full h-full rounded-full pt-4 pr-8 pb-4 pl-8 relative shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] group-hover:bg-gradient-to-b group-hover:from-indigo-950 group-hover:to-black">
<span className="relative z-10 tracking-tight">Enter the Fugue</span>
<i className="w-4 h-4 text-indigo-300 relative z-10" data-lucide="sparkles" strokeWidth="1.5"></i>
</span>
</button>

<a className="group flex items-center gap-2 text-sm text-zinc-500 hover:text-indigo-300 transition-colors duration-300 pl-4" href="#">
<span className="border-b border-transparent group-hover:border-indigo-300 pb-0.5">View Demo</span>
<i className="w-3 h-3 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>

<div className="absolute inset-0 md:static md:w-[45%] lg:w-[50%] w-full h-full overflow-hidden z-0 md:z-10 opacity-40 md:opacity-100 pointer-events-none mix-blend-screen">
<svg className="w-full h-full" preserveaspectratio="xMidYMid slice" viewbox="0 0 1200 900" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient id="dreamGradient" x1="0%" x2="100%" y1="100%" y2="0%">
<stop offset="0%" style={{stopColor: '#6366f1', stopOpacity: '0.2'}}></stop>
<stop offset="50%" style={{stopColor: '#a855f7', stopOpacity: '0.1'}}></stop>
<stop offset="100%" style={{stopColor: '#000000', stopOpacity: '0.0'}}></stop>
</lineargradient>
</defs>

<path d="M 400 1000 C 600 900, 900 600, 1300 200" fill="none" id="pathMain"></path>

<g className="hidden lg:block">

<rect fill="none" height="400" opacity="0.3" rx="60" stroke="#27272a" strokeWidth="0.5" transform="rotate(-15 640 800)" width="120" x="580" y="600"></rect>
<rect className="animate-beam" fill="none" height="400" opacity="0.3" rx="60" stroke="#818cf8" strokeLinecap="round" strokeWidth="1" transform="rotate(-15 640 800)" width="120" x="580" y="600"></rect>

<rect fill="none" height="450" opacity="0.3" rx="70" stroke="#27272a" strokeWidth="0.5" transform="rotate(-25 950 525)" width="140" x="880" y="300"></rect>
<rect className="animate-beam" fill="none" height="450" opacity="0.2" rx="70" stroke="#a855f7" strokeLinecap="round" strokeWidth="1" style={{animationDelay: '-3s'}} transform="rotate(-25 950 525)" width="140" x="880" y="300"></rect>

<rect fill="none" height="300" opacity="0.3" rx="50" stroke="#27272a" strokeWidth="0.5" transform="rotate(-35 1100 200)" width="100" x="1050" y="50"></rect>
<rect className="animate-beam" fill="none" height="300" opacity="0.3" rx="50" stroke="#6366f1" strokeLinecap="round" strokeWidth="1" style={{animationDelay: '-6s'}} transform="rotate(-35 1100 200)" width="100" x="1050" y="50"></rect>
</g>

<path d="M 600 1000 C 700 900, 800 700, 1300 550" fill="none" opacity="0.3" stroke="#18181b" strokeLinecap="round" strokeWidth="30"></path>
<path d="M 900 1000 C 950 900, 900 700, 1300 450" fill="none" opacity="0.3" stroke="#18181b" strokeLinecap="round" strokeWidth="20"></path>

<path d="M 400 1000 C 600 900, 900 600, 1300 200" fill="none" opacity="0.6" stroke="url(#dreamGradient)" strokeLinecap="butt" strokeWidth="50"></path>
<path d="M 400 1000 C 600 900, 900 600, 1300 200" fill="none" opacity="0.4" stroke="rgba(255,255,255,0.05)" stroke-dasharray="20 40" strokeWidth="1"></path>

<rect fill="#a855f7" filter="drop-shadow(0 0 15px rgba(168,85,247,0.8))" height="4" opacity="0.8" rx="2" width="40" x="-30" y="-15">
<animatemotion calcmode="linear" dur="8s" keypoints="0;1" keytimes="0;1" repeatcount="indefinite" rotate="auto">
<mpath href="#pathMain"></mpath>
</animatemotion>
</rect>
<circle cx="0" cy="0" fill="#fff" filter="drop-shadow(0 0 10px white)" opacity="0.9" r="3">
<animatemotion begin="0.5s" calcmode="linear" dur="8s" keypoints="0;1" keytimes="0;1" repeatcount="indefinite" rotate="auto">
<mpath href="#pathMain"></mpath>
</animatemotion>
</circle>
</svg>
</div>
</div>

<footer className="w-full border-t border-white/5 py-8 md:px-12 px-6 z-20 bg-black/40 backdrop-blur-md mt-auto">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
<div className="text-xs text-zinc-600 font-mono tracking-wide uppercase">
                    FugueState Labs © 2024
                </div>
<p className="text-sm font-light text-zinc-500 font-serif-custom italic tracking-wide text-center md:text-right">
                    An experiment in memory, creativity, and machine dreaming.
                </p>
</div>
</footer>
</main>


    </>
  );
}
