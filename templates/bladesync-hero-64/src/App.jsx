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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-gradient-to-b from-neutral-800/10 to-transparent rounded-full blur-[120px]"></div>
</div>

<nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-start mix-blend-difference">

<div className="flex flex-col gap-1 animate-clip-text">
<div className="flex items-center gap-3 group cursor-pointer">
<div className="relative w-10 h-10 border border-neutral-700 rounded-full flex items-center justify-center group-hover:border-orange-500 transition-colors duration-300">
<svg aria-hidden="true" className="iconify text-xl iconify--solar" data-icon="solar:tuning-square-2-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></path><path d="M10 14a2 2 0 1 1 0 4a2 2 0 0 1 0-4Z"></path><circle cx="2" cy="2" r="2" transform="matrix(0 -1 -1 0 16 10)"></circle><path d="M14 16h5m-9-8H5m0 8h1m13-8h-1" strokeLinecap="round"></path></g></svg>
<div className="absolute -top-1 -right-1 w-2 h-2 bg-orange-500 rounded-full"></div>
</div>
<div className="hidden md:flex items-center gap-2 bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-full px-3 py-1">
<span className="iconify text-orange-500" data-icon="solar:sword-linear"></span>
<span className="iconify text-orange-500" data-icon="solar:letter-v-linear"></span>
</div>
</div>
</div>

<div className="hidden lg:block text-xs text-neutral-500 tracking-widest uppercase animate-clip-text delay-200">
            V_ 2.0.45 <span className="mx-2">///</span> SYS_READY
        </div>

<div className="flex items-center gap-4 animate-clip-text delay-100">
<button className="w-8 h-8 flex items-center justify-center rounded-full border border-neutral-800 text-neutral-500 hover:text-white hover:border-neutral-600 transition-all">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:info-circle-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"></circle><path d="M12 17v-6" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path><circle cx="1" cy="1" fill="currentColor" r="1" transform="matrix(1 0 0 -1 11 9)"></circle></g></svg>
</button>
<button className="group relative px-5 py-2 rounded-full border border-neutral-700 bg-neutral-900/50 backdrop-blur-sm overflow-hidden hover:border-neutral-500 transition-colors">
<div className="relative z-10 flex items-center gap-2 text-sm font-medium">
<span>Forge Hub</span>
<svg aria-hidden="true" className="iconify group-hover:translate-x-1 transition-transform iconify--solar" data-icon="solar:arrow-right-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16m0 0l-6-6m6 6l-6 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</div>
</button>
<div className="text-xs font-mono text-neutral-600">0%</div>
</div>
</nav>

<main className="flex flex-col lg:px-12 w-full h-full z-10 pt-32 pr-6 pb-6 pl-6 relative justify-between">

<div className="relative z-20 max-w-2xl">
<h1 className="text-6xl md:text-8xl lg:text-9xl leading-[0.85] tracking-tighter text-white font-medium">
<div className="animate-clip-text delay-100">Sharpen</div>
<div className="animate-clip-text delay-200 flex items-center gap-4">
                    Your
                    
<span className="hidden md:inline-flex flex-col items-start justify-center h-full text-xs md:text-sm leading-tight tracking-normal font-normal text-neutral-400 max-w-[120px]">
<span className="text-orange-500">With</span>
<span>BladeSync™</span>
<span>Technology</span>
</span>
</div>
<div className="animate-clip-text delay-300">Craft</div>
</h1>
</div>

<div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none overflow-hidden">
<div className="relative w-full h-full md:w-[120%] md:h-[120%] animate-clip-img delay-300">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] md:w-[1400px] rotate-[-15deg]">
<img alt="Katana Close Up" className="w-full h-auto object-cover opacity-90 mask-image-gradient" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" style={{maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)', filter: 'contrast(1.1) saturate(0) brightness(1.2)'}}/>
<div className="absolute top-[40%] left-[30%] w-32 h-64 bg-red-600/20 mix-blend-overlay blur-3xl rounded-full"></div>
</div>
</div>
</div>

<div className="absolute top-1/2 left-6 md:left-24 -translate-y-1/2 z-30 animate-clip-text delay-500">
<div className="relative w-48 bg-neutral-900/60 backdrop-blur-xl border border-neutral-800 rounded-xl p-3 shadow-2xl overflow-hidden group hover:border-neutral-600 transition-colors">
<div className="flex justify-between items-center mb-2">
<span className="text-xs text-neutral-400">Skill Hub</span>
<div className="flex gap-1">
<div className="w-1 h-3 bg-orange-500 rounded-full"></div>
<div className="w-1 h-3 bg-neutral-700 rounded-full"></div>
</div>
</div>
<div className="relative aspect-video bg-neutral-800 rounded-lg overflow-hidden mb-2">
<img alt="Preview" className="w-full h-full object-cover opacity-60 grayscale group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur flex items-center justify-center">
<svg aria-hidden="true" className="iconify text-white iconify--solar" data-icon="solar:play-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20.409 9.353a2.998 2.998 0 0 1 0 5.294L7.597 21.614C5.534 22.737 3 21.277 3 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z" fill="none" stroke="currentColor" strokeWidth="1.5"></path></svg>
</div>
</div>
</div>
<div className="space-y-0.5">
<div className="text-sm text-white font-medium">Mind Forge</div>
<div className="text-xs text-neutral-500">Syncing...</div>
</div>
</div>
</div>

<div className="absolute right-0 top-0 bottom-0 w-[400px] h-full z-0 flex items-center justify-end pointer-events-none animate-clip-text delay-500">
<div className="relative w-full h-[600px]">

<svg className="absolute inset-0 w-full h-full" fill="none" viewbox="0 0 400 600" xmlns="http://www.w3.org/2000/svg">

<defs>

<path d="M0 150 C 150 150, 200 300, 320 300" id="path1"></path>

<path d="M0 300 C 100 300, 200 300, 320 300" id="path2"></path>

<path d="M0 450 C 150 450, 200 300, 320 300" id="path3"></path>
</defs>

<use href="#path1" stroke="#262626" strokeWidth="1.5"></use>
<use href="#path2" stroke="#262626" strokeWidth="1.5"></use>
<use href="#path3" stroke="#262626" strokeWidth="1.5"></use>


<use className="animate-beam delay-100" href="#path1" stroke="url(#gradientBeam)" strokeLinecap="round" strokeWidth="2"></use>

<use className="animate-beam delay-500" href="#path2" stroke="url(#gradientBeam)" strokeLinecap="round" strokeWidth="2"></use>

<use className="animate-beam delay-1000" href="#path3" stroke="url(#gradientBeam)" strokeLinecap="round" strokeWidth="2"></use>

<defs>
<lineargradient id="gradientBeam" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#f97316" stop-opacity="0"></stop>
<stop offset="50%" stop-color="#f97316"></stop>
<stop offset="100%" stop-color="#f97316" stop-opacity="0"></stop>
</lineargradient>
</defs>
</svg>

<div className="absolute right-[65px] top-1/2 -translate-y-1/2 translate-x-1/2">
<div className="relative w-16 h-16 flex items-center justify-center">

<div className="absolute inset-0 bg-orange-500/10 rounded-full animate-ping opacity-20 duration-[3s]"></div>
<div className="absolute inset-0 border border-neutral-800 bg-neutral-900 rounded-full shadow-2xl z-10"></div>

<div className="relative z-20 text-neutral-400">
<svg aria-hidden="true" className="iconify w-6 h-6 iconify--lucide" data-icon="lucide:cpu" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 20v2m0-20v2m5 16v2m0-20v2M2 12h2m-2 5h2M2 7h2m16 5h2m-2 5h2M20 7h2M7 20v2M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></g></svg>
</div>

<div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-neutral-950 border border-neutral-700 rounded-full z-20"></div>
</div>

<div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 text-[10px] tracking-widest text-neutral-600 font-mono uppercase whitespace-nowrap">
                        Core_Link
                    </div>
</div>
</div>
</div>

<div className="relative z-20 w-full flex flex-col justify-end h-full pointer-events-none">

<div className="w-full flex justify-between items-end pb-4 text-xs font-mono text-neutral-500 animate-clip-text delay-500">
<div className="max-w-[200px] flex flex-col gap-2">
<p>FOR FLUID</p>
<p>PRECISION AND CORE</p>
<p>WEB MASTERY</p>
</div>
<div className="flex items-center gap-4">
<span>CSS-FIRST</span>
<span className="w-1 h-1 bg-neutral-600 rounded-full"></span>
<span>JS-LIGHT</span>
</div>
</div>

<div className="relative w-full select-none">
<h2 className="text-[13vw] leading-[0.75] font-medium tracking-tight text-center text-transparent bg-clip-text bg-gradient-to-b from-neutral-700 to-neutral-900/20 w-full animate-clip-text delay-300 relative">
                    BladeSync
                    <span className="absolute top-[10%] right-[5%] text-[2vw] text-neutral-800 border-2 border-neutral-800 rounded-full w-[4vw] h-[4vw] flex items-center justify-center">C</span>
</h2>
</div>
</div>
</main>

<div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>

    </>
  );
}
