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



tailwind.config = {
theme: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
brand: {
500: '#f59e0b', // Amber 500
600: '#d97706', // Amber 600
}
},
backgroundImage: {
'glow-gradient': 'radial-gradient(circle at center, rgba(245, 158, 11, 0.15) 0%, transparent 70%)',
'beam-gradient': 'conic-gradient(from 180deg at 50% 50%, #000000 0deg, rgba(245, 158, 11, 0.1) 180deg, #000000 360deg)',
}
}
}
}



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
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand-500/10 blur-[120px] rounded-full mix-blend-screen"></div>
<div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-indigo-900/10 blur-[120px] rounded-full mix-blend-screen"></div>
</div>

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#030303]/70 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-gradient-to-br from-brand-500 to-orange-600 rounded-md flex items-center justify-center shadow-[0_0_15px_rgba(245,158,11,0.5)]">
<svg aria-hidden="true" className="lucide lucide-sparkles w-3.5 h-3.5 text-white fill-white" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<span className="text-white font-medium tracking-tight text-lg">Fluxer</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#">Showcase</a>
<a className="hover:text-white transition-colors" href="#">Templates</a>
<a className="hover:text-white transition-colors" href="#">Community</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors hidden sm:block" href="#">Log in</a>
<a className="group relative px-4 py-2 bg-white text-black text-sm font-medium rounded-full overflow-hidden transition-all hover:bg-neutral-200" href="#">
<span className="relative z-10">Start for free</span>
</a>
</div>
</div>
</nav>

<section className="lg:pt-48 lg:pb-32 overflow-hidden pt-32 pr-6 pb-20 pl-6 relative">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

<div className="relative z-10 max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-500/20 bg-brand-500/5 text-brand-500 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
</span>
                    Fluxer 2.0 is live
                </div>
<h1 className="md:text-7xl lg:text-[5rem] leading-[1.1] text-5xl font-medium text-white tracking-tight mb-8">
                    The internet is <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 via-orange-400 to-yellow-200">your canvas.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 leading-relaxed mb-10 max-w-lg">
                    Fluxer is where design meets intelligence. Generate, customize, and publish stunning websites in seconds. No code required.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="px-8 py-4 bg-white text-black text-base font-medium rounded-full hover:bg-neutral-200 transition-colors text-center shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)]" href="#">
                        Start for free
                    </a>
<a className="px-8 py-4 border border-white/10 text-white text-base font-medium rounded-full hover:bg-white/5 transition-colors flex items-center justify-center gap-2 group" href="#">
<svg aria-hidden="true" className="lucide lucide-play-circle w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
                        Watch demo
                    </a>
</div>
</div>

<div className="relative z-10 lg:translate-x-12">

<div className="relative w-full aspect-[4/3] bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 shadow-2xl overflow-hidden group">

<div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 blur-[80px] -z-10"></div>
<div className="flex items-center justify-between mb-8">
<div>
<p className="text-xs font-medium text-neutral-500 uppercase tracking-widest mb-1">Optimization</p>
<h3 className="text-xl font-medium text-white tracking-tight">Site Performance</h3>
</div>
<div className="px-3 py-1 bg-brand-500/10 border border-brand-500/20 rounded-md flex items-center gap-2">
<svg aria-hidden="true" className="lucide lucide-zap w-3 h-3 text-brand-500" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="text-xs font-medium text-brand-500">98/100</span>
</div>
</div>

<div className="relative h-40 w-full mt-4">

<div className="absolute inset-0 flex flex-col justify-between opacity-10">
<div className="w-full h-px bg-white"></div>
<div className="w-full h-px bg-white"></div>
<div className="w-full h-px bg-white"></div>
<div className="w-full h-px bg-white"></div>
</div>

<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 100 100">
<defs>
<lineargradient id="gradientPath" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#f59e0b" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#f59e0b" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M0,90 C20,85 30,70 50,50 S 80,20 100,10" fill="none" stroke="#f59e0b" strokeWidth="2" vector-effect="non-scaling-stroke"></path>
<path d="M0,90 C20,85 30,70 50,50 S 80,20 100,10 V 100 H 0 Z" fill="url(#gradientPath)" style={{opacity: '0.5'}}></path>

<circle className="animate-pulse" cx="100" cy="10" fill="#000" r="3" stroke="#f59e0b" strokeWidth="2"></circle>
</svg>
</div>

<div className="grid grid-cols-2 gap-4 mt-8">
<div className="p-4 bg-white/5 rounded-lg border border-white/5 backdrop-blur-sm">
<div className="flex items-center gap-2 mb-2">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="text-xs text-neutral-400">Lighthouse Score</span>
</div>
<p className="text-lg font-medium text-white">100</p>
</div>
<div className="p-4 bg-white/5 rounded-lg border border-white/5 backdrop-blur-sm">
<div className="flex items-center gap-2 mb-2">
<div className="w-2 h-2 rounded-full bg-blue-500"></div>
<span className="text-xs text-neutral-400">First Contentful Paint</span>
</div>
<p className="text-lg font-medium text-white">0.3s</p>
</div>
</div>
</div>

<div className="absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-xl rounded-2xl border border-white/10 flex items-center justify-center -z-10 animate-[bounce_5s_infinite]">
<i className="w-8 h-8 text-neutral-500" data-lucide="cubes"></i>
</div>
</div>
</div>

<div className="mt-24 max-w-7xl mx-auto border-t border-white/5 pt-12">
<p className="text-center text-sm text-neutral-500 mb-8">Trusted by world-class teams</p>
<div className="flex flex-wrap justify-center gap-12 lg:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">

<svg className="h-6 w-auto" fill="currentColor" viewbox="0 0 100 30"><path d="M10,15 L20,5 L30,15 L20,25 Z M40,5 H50 V25 H40 Z M60,5 H80 V10 H65 V12 H75 V17 H65 V25 H60 Z"></path></svg>
<svg className="h-6 w-auto" fill="currentColor" viewbox="0 0 100 30"><circle cx="15" cy="15" r="10"></circle><rect height="20" width="20" x="35" y="5"></rect><path d="M70,25 L80,5 L90,25"></path></svg>
<svg className="h-6 w-auto" fill="currentColor" viewbox="0 0 100 30"><rect height="10" width="10" x="10" y="10"></rect><rect height="20" width="10" x="25" y="5"></rect><rect height="10" width="40" x="40" y="10"></rect></svg>
<svg className="h-6 w-auto" fill="currentColor" viewbox="0 0 100 30"><path d="M10,5 Q20,25 30,5 T50,5 T70,5"></path><circle cx="85" cy="15" r="5"></circle></svg>
</div>
</div>
</section>

<section className="py-24 px-6 relative">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-4xl lg:text-5xl font-medium text-white tracking-tight mb-4">The browser that  works for you</h2>
<p className="text-lg text-neutral-400">Design, iterate, and ship without leaving the interface.</p>
</div>

<div className="relative w-full bg-[#050505] rounded-xl border border-white/10 shadow-2xl overflow-hidden ring-1 ring-white/5">

<div className="h-12 border-b border-white/5 bg-[#0A0A0A] flex items-center px-4 justify-between">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="flex items-center gap-2 px-3 py-1 bg-black/50 border border-white/5 rounded text-xs text-neutral-500 font-mono">
<svg aria-hidden="true" className="lucide lucide-lock w-3 h-3" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                        fluxer.ai/editor/project-alpha
                    </div>
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-gradient-to-tr from-brand-500 to-orange-500 flex items-center justify-center text-[10px] text-white font-bold">JD</div>
<button className="bg-brand-600 hover:bg-brand-500 text-white text-xs px-3 py-1.5 rounded-md font-medium transition-colors">Publish</button>
</div>
</div>

<div className="h-[600px] flex">

<div className="w-64 border-r border-white/5 bg-[#080808] hidden md:flex flex-col">
<div className="p-4">
<p className="text-xs font-semibold text-neutral-500 mb-4 tracking-wider">LAYERS</p>
<div className="space-y-1">
<div className="flex items-center gap-2 px-2 py-1.5 bg-white/5 rounded text-sm text-white">
<svg aria-hidden="true" className="lucide lucide-layout w-3.5 h-3.5 text-brand-500" data-lucide="layout" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>
                                    Desktop
                                </div>
<div className="flex items-center gap-2 px-2 py-1.5 rounded text-sm text-neutral-400 hover:text-white hover:bg-white/5 transition">
<svg aria-hidden="true" className="lucide lucide-square w-3.5 h-3.5" data-lucide="square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect></svg>
                                    Header
                                </div>
<div className="flex items-center gap-2 px-2 py-1.5 rounded text-sm text-neutral-400 hover:text-white hover:bg-white/5 transition">
<svg aria-hidden="true" className="lucide lucide-image w-3.5 h-3.5" data-lucide="image" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
                                    Hero Image
                                </div>
<div className="flex items-center gap-2 px-2 py-1.5 rounded text-sm text-neutral-400 hover:text-white hover:bg-white/5 transition">
<svg aria-hidden="true" className="lucide lucide-type w-3.5 h-3.5" data-lucide="type" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 4v16"></path><path d="M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2"></path><path d="M9 20h6"></path></svg>
                                    Heading H1
                                </div>
</div>
</div>
<div className="mt-auto p-4 border-t border-white/5">
<div className="flex items-center gap-2 text-xs text-neutral-500">
<svg aria-hidden="true" className="lucide lucide-database w-3.5 h-3.5" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
                                Assets
                            </div>
</div>
</div>

<div className="flex-1 bg-[#030303] relative p-8 flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>

<div className="relative w-full max-w-2xl border border-brand-500/50 rounded-lg p-8 group">

<div className="absolute -top-1 -left-1 w-2 h-2 bg-brand-500 border border-white rounded-sm"></div>
<div className="absolute -top-1 -right-1 w-2 h-2 bg-brand-500 border border-white rounded-sm"></div>
<div className="absolute -bottom-1 -left-1 w-2 h-2 bg-brand-500 border border-white rounded-sm"></div>
<div className="absolute -bottom-1 -right-1 w-2 h-2 bg-brand-500 border border-white rounded-sm"></div>

<div className="absolute -top-6 left-0 bg-brand-500 text-black text-[10px] font-bold px-1.5 py-0.5 rounded-sm">H1 Heading</div>
<h1 className="text-5xl font-semibold text-white tracking-tight leading-tight">
                                Ship with 
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-500">unmatched speed.</span>
</h1>
</div>
</div>

<div className="w-72 border-l border-white/5 bg-[#080808] hidden lg:block p-4">
<p className="text-xs font-semibold text-neutral-500 mb-4 tracking-wider">PROPERTIES</p>
<div className="space-y-6">

<div className="grid grid-cols-2 gap-3">
<div>
<label className="text-[10px] text-neutral-500 uppercase block mb-1">Width</label>
<div className="bg-[#111] border border-white/10 rounded px-2 py-1.5 text-sm text-white flex justify-between items-center group hover:border-white/20 transition">
<span>Fill</span>
<svg aria-hidden="true" className="lucide lucide-chevron-down w-3 h-3 text-neutral-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
<div>
<label className="text-[10px] text-neutral-500 uppercase block mb-1">Height</label>
<div className="bg-[#111] border border-white/10 rounded px-2 py-1.5 text-sm text-white flex justify-between items-center">
<span>Auto</span>
<span className="text-xs text-neutral-500"> Hug</span>
</div>
</div>
</div>

<div className="pt-4 border-t border-white/5">
<label className="text-[10px] text-neutral-500 uppercase block mb-2">Typography</label>
<div className="bg-[#111] border border-white/10 rounded px-2 py-1.5 text-sm text-white flex justify-between items-center mb-2">
<span>Inter</span>
<svg aria-hidden="true" className="lucide lucide-chevron-down w-3 h-3 text-neutral-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
<div className="grid grid-cols-3 gap-2">
<div className="bg-[#111] border border-white/10 rounded flex items-center justify-center py-1.5 hover:bg-white/5 cursor-pointer">
<svg aria-hidden="true" className="lucide lucide-align-left w-3.5 h-3.5 text-white" data-lucide="align-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 5H3"></path><path d="M15 12H3"></path><path d="M17 19H3"></path></svg>
</div>
<div className="bg-[#111] border border-white/10 rounded flex items-center justify-center py-1.5 hover:bg-white/5 cursor-pointer">
<svg aria-hidden="true" className="lucide lucide-align-center w-3.5 h-3.5 text-neutral-500" data-lucide="align-center" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 5H3"></path><path d="M17 12H7"></path><path d="M19 19H5"></path></svg>
</div>
<div className="bg-[#111] border border-white/10 rounded flex items-center justify-center py-1.5 hover:bg-white/5 cursor-pointer">
<svg aria-hidden="true" className="lucide lucide-align-right w-3.5 h-3.5 text-neutral-500" data-lucide="align-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 5H3"></path><path d="M21 12H9"></path><path d="M21 19H7"></path></svg>
</div>
</div>
</div>

<div className="pt-4 border-t border-white/5">
<label className="text-[10px] text-neutral-500 uppercase block mb-2">Color</label>
<div className="flex gap-2">
<div className="w-8 h-8 rounded border border-white/10 bg-white"></div>
<div className="flex-1 bg-[#111] border border-white/10 rounded px-2 flex items-center text-sm text-white">
                                        #FFFFFF
                                    </div>
<div className="w-8 h-8 rounded border border-white/10 bg-[#111] flex items-center justify-center text-xs text-neutral-500">
                                        100%
                                    </div>
</div>
</div>

<div className="mt-6 p-3 bg-brand-500/10 border border-brand-500/20 rounded-lg">
<div className="flex items-center gap-2 mb-2">
<svg aria-hidden="true" className="lucide lucide-sparkles w-3.5 h-3.5 text-brand-500" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="text-xs font-medium text-brand-500">Fluxer AI</span>
</div>
<p className="text-xs text-neutral-400 mb-3 leading-relaxed">AI suggests changing tracking to -2% for better readability.</p>
<button className="w-full py-1.5 bg-brand-600 hover:bg-brand-500 text-white text-xs font-medium rounded transition-colors">Apply Change</button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-neutral-900/30">
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-xl bg-[#080808] border border-white/5 hover:border-brand-500/30 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(245,158,11,0.15)] relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<svg aria-hidden="true" className="lucide lucide-arrow-up-right w-5 h-5 text-brand-500" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
<div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-500/10 transition-colors">
<svg aria-hidden="true" className="lucide lucide-layers w-6 h-6 text-neutral-400 group-hover:text-brand-500 transition-colors" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Layout &amp; Effects</h3>
<p className="text-neutral-400 leading-relaxed text-base">Drag-and-drop powered by physics. Add scroll transforms and appear animations visually without writing a single line of CSS.</p>
</div>

<div className="group p-8 rounded-xl bg-[#080808] border border-white/5 hover:border-brand-500/30 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(245,158,11,0.15)] relative overflow-hidden">
<div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-500/10 transition-colors">
<svg aria-hidden="true" className="lucide lucide-database w-6 h-6 text-neutral-400 group-hover:text-brand-500 transition-colors" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3">CMS &amp; Content</h3>
<p className="text-neutral-400 leading-relaxed text-base">Manage content for your blog, portfolio, or changelog with a flexible CMS that scales with your data needs.</p>
</div>

<div className="group p-8 rounded-xl bg-[#080808] border border-white/5 hover:border-brand-500/30 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(245,158,11,0.15)] relative overflow-hidden">
<div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-500/10 transition-colors">
<svg aria-hidden="true" className="lucide lucide-globe w-6 h-6 text-neutral-400 group-hover:text-brand-500 transition-colors" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Global Localization</h3>
<p className="text-neutral-400 leading-relaxed text-base">Customize your site for every region, language, and culture. Automatic translation and asset serving.</p>
</div>

<div className="md:col-span-2 lg:col-span-3 group p-8 rounded-xl bg-[#080808] border border-white/5 hover:border-brand-500/30 transition-all duration-300 relative overflow-hidden flex flex-col md:flex-row gap-8 items-center">
<div className="flex-1">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-500 text-xs font-medium mb-4 border border-brand-500/20">
<svg aria-hidden="true" className="lucide lucide-sparkles w-3 h-3" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg> AI Powered
                        </div>
<h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">Fluxer Intelligence</h3>
<p className="text-neutral-400 leading-relaxed text-base mb-6">Generate new pages, translate content, and rewrite copy with advanced AI tools integrated directly into your workflow.</p>
<a className="text-white text-sm font-medium border-b border-white/20 pb-0.5 hover:border-white transition-colors inline-block" href="#">Explore AI features</a>
</div>
<div className="flex-1 w-full bg-[#030303] border border-white/10 rounded-lg p-4 relative">

<div className="space-y-3">
<div className="flex gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-xs">You</div>
<div className="bg-neutral-800 text-sm text-neutral-300 p-3 rounded-lg rounded-tl-none max-w-[80%]">
                                    Create a pricing section with 3 tiers.
                                </div>
</div>
<div className="flex gap-3 flex-row-reverse">
<div className="w-8 h-8 rounded-full bg-brand-600 flex items-center justify-center text-xs"><svg aria-hidden="true" className="lucide lucide-bot w-4 h-4 text-white" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg></div>
<div className="bg-brand-900/20 border border-brand-500/20 text-sm text-neutral-300 p-3 rounded-lg rounded-tr-none max-w-[80%]">
<p className="mb-2">Done. I've added a pricing section with Free, Pro, and Enterprise tiers.</p>
<div className="h-16 bg-black/50 rounded border border-white/5 flex items-center justify-center gap-2">
<div className="w-8 h-10 border border-white/10 rounded bg-white/5"></div>
<div className="w-8 h-10 border border-brand-500/50 rounded bg-brand-500/10 scale-110 shadow-lg"></div>
<div className="w-8 h-10 border border-white/10 rounded bg-white/5"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-4xl font-medium text-white tracking-tight mb-4">Choose your plan</h2>
<p className="text-lg text-neutral-400">Pick a plan that fits your workflow. Upgrade or downgrade anytime.</p>

<div className="mt-8 inline-flex bg-neutral-900 p-1 rounded-full border border-white/5 relative">
<button className="px-6 py-2 rounded-full bg-white text-black text-sm font-medium shadow-sm z-10">Monthly</button>
<button className="px-6 py-2 rounded-full text-neutral-400 text-sm font-medium hover:text-white transition z-10">Yearly <span className="text-brand-500 text-[10px] ml-1">-20%</span></button>
</div>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="p-8 rounded-2xl bg-[#080808] border border-white/5 flex flex-col">
<div className="mb-8">
<h3 className="text-lg font-medium text-white mb-2">Personal</h3>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-bold text-white tracking-tight">$0</span>
<span className="text-neutral-500">/mo</span>
</div>
<p className="text-sm text-neutral-500 mt-4">Perfect for hobby projects.</p>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-neutral-300"><svg aria-hidden="true" className="lucide lucide-check w-4 h-4 text-neutral-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 1 Project</li>
<li className="flex items-center gap-3 text-sm text-neutral-300"><svg aria-hidden="true" className="lucide lucide-check w-4 h-4 text-neutral-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Fluxer subdomain</li>
<li className="flex items-center gap-3 text-sm text-neutral-300"><svg aria-hidden="true" className="lucide lucide-check w-4 h-4 text-neutral-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Community Support</li>
</ul>
<button className="w-full py-3 rounded-lg border border-white/10 text-white font-medium hover:bg-white/5 transition">Get Started</button>
</div>

<div className="p-8 rounded-2xl bg-[#0A0A0A] border border-brand-500/50 flex flex-col relative shadow-[0_0_40px_-10px_rgba(245,158,11,0.1)]">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-500 text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Most Popular</div>
<div className="mb-8">
<h3 className="text-lg font-medium text-white mb-2">Professional</h3>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-bold text-white tracking-tight">$29</span>
<span className="text-neutral-500">/mo</span>
</div>
<p className="text-sm text-neutral-500 mt-4">For freelancers and creators.</p>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-white"><svg aria-hidden="true" className="lucide lucide-check w-4 h-4 text-brand-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Unlimited Projects</li>
<li className="flex items-center gap-3 text-sm text-white"><svg aria-hidden="true" className="lucide lucide-check w-4 h-4 text-brand-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Custom Domains</li>
<li className="flex items-center gap-3 text-sm text-white"><svg aria-hidden="true" className="lucide lucide-check w-4 h-4 text-brand-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Advanced SEO Tools</li>
</ul>
<button className="w-full py-3 rounded-lg bg-white text-black font-medium hover:bg-neutral-200 transition shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]">Start Free Trial</button>
</div>

<div className="p-8 rounded-2xl bg-[#080808] border border-white/5 flex flex-col">
<div className="mb-8">
<h3 className="text-lg font-medium text-white mb-2">Business</h3>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-bold text-white tracking-tight">$99</span>
<span className="text-neutral-500">/mo</span>
</div>
<p className="text-sm text-neutral-500 mt-4">For scaling agencies and teams.</p>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-neutral-300"><svg aria-hidden="true" className="lucide lucide-check w-4 h-4 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Team Collaboration</li>
<li className="flex items-center gap-3 text-sm text-neutral-300"><svg aria-hidden="true" className="lucide lucide-check w-4 h-4 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Priority Support</li>
<li className="flex items-center gap-3 text-sm text-neutral-300"><svg aria-hidden="true" className="lucide lucide-check w-4 h-4 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Shared Component Library</li>
</ul>
<button className="w-full py-3 rounded-lg border border-white/10 text-white font-medium hover:bg-white/5 transition">Contact Sales</button>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-black py-16 px-6">
<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-5 h-5 bg-brand-500 rounded flex items-center justify-center">
<svg aria-hidden="true" className="lucide lucide-sparkles w-3 h-3 text-black fill-black" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<span className="text-white font-medium tracking-tight">Fluxer</span>
</div>
<p className="text-sm text-neutral-500 leading-relaxed max-w-xs">
                    The AI-powered platform for building the next generation of the web.
                </p>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Product</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-brand-500 transition-colors" href="#">Features</a></li>
<li><a className="hover:text-brand-500 transition-colors" href="#">Templates</a></li>
<li><a className="hover:text-brand-500 transition-colors" href="#">Integrations</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Resources</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-brand-500 transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-brand-500 transition-colors" href="#">Community</a></li>
<li><a className="hover:text-brand-500 transition-colors" href="#">Help Center</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Company</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-brand-500 transition-colors" href="#">About</a></li>
<li><a className="hover:text-brand-500 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-brand-500 transition-colors" href="#">Careers</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 gap-4">
<p className="text-xs text-neutral-600">© 2024 Fluxer Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><svg aria-hidden="true" className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><svg aria-hidden="true" className="lucide lucide-github w-4 h-4" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><svg aria-hidden="true" className="lucide lucide-linkedin w-4 h-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
</div>
</div>
</footer>


    </>
  );
}
