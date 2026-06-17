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



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



      window.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons();
      });
    
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
      

<div className="fixed inset-0 z-0 w-full h-full pointer-events-none">
<div className="absolute inset-0 w-full h-full opacity-60"></div>
<div className="absolute top-20 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
<div className="absolute top-20 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
<div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-pink-500/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
<div className="absolute inset-0 bg-gradient-to-b from-zinc-950/20 via-zinc-950/70 to-zinc-950/90 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-soft-light"></div>
</div>

<header className="fixed transition-all duration-300 bg-zinc-950/60 w-full z-50 border-white/5 border-b top-0 right-0 left-0 backdrop-blur-2xl">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between relative">

<a className="inline-flex items-center gap-2.5 group relative z-10" href="#">
<div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-zinc-800 to-zinc-900 ring-1 ring-white/10 group-hover:ring-white/20 transition-all shadow-[0_0_20px_-5px_rgba(255,255,255,0.1)]">
<div className="absolute inset-0 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<svg className="h-4 w-4 text-zinc-200 group-hover:rotate-180 transition-transform duration-700 ease-in-out" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20.341 6.484A10 10 0 0 1 10.266 21.85"></path>
<path d="M3.659 17.516A10 10 0 0 1 13.74 2.152"></path>
<circle cx="12" cy="12" r="3"></circle>
<circle cx="19" cy="5" r="2"></circle>
<circle cx="5" cy="19" r="2"></circle>
</svg>
</div>
<span className="text-lg font-semibold tracking-tight text-zinc-100 group-hover:text-white transition-colors">
              Arcflow
            </span>
</a>

<nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center p-1 rounded-full border border-white/5 bg-zinc-900/50 backdrop-blur-3xl shadow-[0_2px_10px_-2px_rgba(0,0,0,0.3)] ring-1 ring-white/5">
<ul className="flex items-center gap-0.5">
<li>
<a className="relative px-3 py-1.5 text-xs font-medium text-zinc-400 hover:text-zinc-100 transition-colors rounded-full hover:bg-white/5 group overflow-hidden" href="#">
<span className="relative z-10">Platform</span>
</a>
</li>
<li>
<a className="relative px-3 py-1.5 text-xs font-medium text-zinc-400 hover:text-zinc-100 transition-colors rounded-full hover:bg-white/5 group overflow-hidden" href="#">
<span className="relative z-10">Solutions</span>
</a>
</li>
<li>
<a className="relative px-3 py-1.5 text-xs font-medium text-zinc-400 hover:text-zinc-100 transition-colors rounded-full hover:bg-white/5 group overflow-hidden" href="#">
<span className="relative z-10">Pricing</span>
</a>
</li>
<li>
<a className="relative px-3 py-1.5 text-xs font-medium text-zinc-400 hover:text-zinc-100 transition-colors rounded-full hover:bg-white/5 group overflow-hidden" href="#">
<span className="relative z-10">Docs</span>
</a>
</li>
<li>
<a className="relative px-3 py-1.5 text-xs font-medium text-zinc-400 hover:text-zinc-100 transition-colors rounded-full hover:bg-white/5 group overflow-hidden" href="#">
<span className="relative z-10">Changelog</span>
</a>
</li>
</ul>
</nav>

<div className="flex items-center gap-4 relative z-10">
<button className="hidden sm:inline-flex text-xs font-medium text-zinc-400 hover:text-white transition-colors px-2">
              Log in
            </button>
<button className="group relative inline-flex h-8 items-center justify-center overflow-hidden rounded-full p-[1px] focus:outline-none ring-offset-2 ring-offset-zinc-950 transition-transform hover:scale-105 active:scale-95">
<span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#18181b_0%,#71717a_50%,#18181b_100%)] opacity-70"></span>
<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-zinc-950 px-4 py-1 text-xs font-medium text-white backdrop-blur-3xl ring-1 ring-white/10 group-hover:bg-zinc-900 transition-colors gap-2">
                Get Started
                <svg className="opacity-70 group-hover:translate-x-0.5 transition-transform" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</button>
</div>
</div>
</div>
</header>

<div className="relative z-10 w-full pt-16">

<section className="relative overflow-hidden pt-14 pb-24 sm:pt-20 sm:pb-32">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-4xl mx-auto text-center">
<div className="inline-flex gap-2 text-xs font-medium tracking-tight text-zinc-300 bg-white/5 border-white/10 border rounded-full py-1 px-3 items-center backdrop-blur-md mb-8 hover:bg-white/10 transition-colors cursor-pointer">
<span>New: Insight Engine 2.0</span>
<svg className="h-3.5 w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</div>
<h1 className="text-5xl sm:text-7xl font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white/95 to-white/60 mb-6 pb-2">
              The system for modern
              
              software planning.
            </h1>
<p className="max-w-2xl mx-auto text-lg text-zinc-400 mb-10 leading-relaxed font-light tracking-tight">
              Streamline issues, projects, and roadmaps in one fast, elegant
              workspace. Stay focused, automate the busywork, and ship work that
              matters.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="group relative inline-flex shadow-[0_0_40px_-10px_rgba(99,102,241,0.5)] hover:shadow-[0_0_60px_-15px_rgba(168,85,247,0.5)] transition duration-300 ease-out cursor-pointer hover:-translate-y-0.5 text-white rounded-xl p-[1px]" type="button">
<div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-100"></div>
<span className="relative flex items-center justify-center gap-2 leading-none w-full sm:w-auto min-w-[160px] transition-colors duration-300 group-hover:bg-zinc-900/90 font-medium bg-zinc-950/90 backdrop-blur-xl rounded-xl py-3 px-6 border border-white/10 group-hover:border-transparent tracking-tight">
<span className="bg-gradient-to-r from-white to-white group-hover:from-indigo-200 group-hover:to-purple-200 bg-clip-text text-transparent group-hover:text-transparent transition-all">
                    Start Building
                  </span>
<svg className="w-4 h-4 text-white group-hover:text-indigo-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</button>
<a className="inline-flex items-center gap-2 ring-1 ring-white/10 hover:bg-white/5 backdrop-blur-md text-sm font-medium tracking-tight text-zinc-300 rounded-xl py-3.5 px-6 transition-all hover:text-white" href="#">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polygon points="5 3 19 12 5 21 5 3"></polygon>
</svg>
<span className="">Watch Demo</span>
</a>
</div>
</div>

<div className="relative mt-20 perspective-none">
<div className="absolute inset-x-0 -bottom-10 mx-auto h-64 max-w-5xl bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent blur-3xl z-0"></div>
<div className="max-w-6xl mx-auto">
<div className="relative ring-1 ring-white/10 shadow-[0_0_100px_-20px_rgba(0,0,0,0.5)] lg:scale-100 md:scale-90 scale-75 origin-top w-full bg-zinc-900/40 border-t border-white/10 rounded-xl backdrop-blur-xl rotate-x-15 rotate-y-0 perspective-distant transform-gpu transition-all hover:rotate-x-0 duration-1000 ease-out">

<div className="flex border-b border-white/5 py-3 px-4 items-center justify-between bg-white/5 rounded-t-xl">
<div className="flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-full bg-red-500/20 ring-1 ring-red-500/50"></span>
<span className="h-2.5 w-2.5 rounded-full bg-yellow-500/20 ring-1 ring-yellow-500/50"></span>
<span className="h-2.5 w-2.5 rounded-full bg-emerald-500/20 ring-1 ring-emerald-500/50"></span>
</div>
<div className="flex items-center gap-2 text-xs text-zinc-500 bg-black/20 px-2 py-1 rounded-md ring-1 ring-white/5">
<svg className="text-zinc-600" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect>
<rect height="3" width="3" x="7" y="7"></rect>
<rect height="3" width="3" x="14" y="7"></rect>
<rect height="3" width="3" x="7" y="14"></rect>
<rect height="3" width="3" x="14" y="14"></rect>
</svg>
<span className="font-mono tracking-tighter">arcflow.app</span>
</div>
</div>
<div className="grid grid-cols-12 h-[600px] overflow-hidden">

<aside className="col-span-3 p-3 border-r border-white/5 bg-zinc-900/20 backdrop-blur-sm hidden md:block">
<div className="mb-4">
<button className="w-full text-left px-3 py-2 text-sm font-medium tracking-tight text-zinc-200 bg-white/5 rounded-lg ring-1 ring-white/10 flex items-center justify-between group">
<span className="flex items-center gap-2">
<span className="w-5 h-5 rounded bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-xs">
                            A
                          </span>
                          Arcflow Inc.
                        </span>
<svg className="text-zinc-500 group-hover:text-zinc-300" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
</div>
<div className="space-y-0.5 font-medium tracking-tight">
<a className="flex items-center gap-2 px-3 py-2 rounded-md bg-white/5 text-sm text-zinc-100" href="#">
<svg className="text-indigo-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
<path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
</svg>
                        Inbox
                        <span className="ml-auto text-xs text-zinc-500">4</span>
</a>
<a className="flex items-center gap-2 px-3 py-2 rounded-md text-sm text-zinc-400 hover:text-zinc-200 hover:bg-white/5 transition-colors" href="#">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
                        My Issues
                      </a>
<a className="flex items-center gap-2 px-3 py-2 rounded-md text-sm text-zinc-400 hover:text-zinc-200 hover:bg-white/5 transition-colors" href="#">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
<line x1="4" x2="4" y1="22" y2="15"></line>
</svg>
                        Projects
                      </a>
</div>
</aside>

<div className="col-span-12 md:col-span-4 border-r border-white/5 bg-zinc-900/10 backdrop-blur-sm flex flex-col">
<div className="p-3 border-b border-white/5 flex items-center justify-between">
<h3 className="text-sm font-medium tracking-tight text-zinc-200">
                        Engineering
                      </h3>
</div>
<div className="flex-1 overflow-y-auto p-2 space-y-1">
<div className="group p-3 rounded-lg bg-white/5 ring-1 ring-white/10 cursor-pointer">
<div className="flex justify-between items-start mb-1">
<span className="text-xs font-mono tracking-tight text-zinc-500">
                            ENG-249
                          </span>
<span className="h-2 w-2 rounded-full bg-orange-500"></span>
</div>
<p className="text-sm text-zinc-200 font-medium tracking-tight leading-snug">
                          Fix hydration error on dashboard
                        </p>
</div>
<div className="group p-3 rounded-lg hover:bg-white/5 ring-1 ring-transparent hover:ring-white/5 cursor-pointer transition-all">
<div className="flex justify-between items-start mb-1">
<span className="text-xs font-mono tracking-tight text-zinc-500">
                            ENG-248
                          </span>
<span className="h-2 w-2 rounded-full bg-zinc-700"></span>
</div>
<p className="text-sm text-zinc-300 tracking-tight leading-snug">
                          Update dependencies for Q3
                        </p>
</div>
<div className="group p-3 rounded-lg hover:bg-white/5 ring-1 ring-transparent hover:ring-white/5 cursor-pointer transition-all">
<div className="flex justify-between items-start mb-1">
<span className="text-xs font-mono tracking-tight text-zinc-500">
                            ENG-245
                          </span>
<span className="h-2 w-2 rounded-full bg-blue-500"></span>
</div>
<p className="text-sm text-zinc-300 tracking-tight leading-snug">
                          Implement new authentication flow
                        </p>
</div>
</div>
</div>

<div className="col-span-12 md:col-span-5 bg-zinc-900/5 backdrop-blur-md p-6">
<div className="flex items-center gap-3 text-xs text-zinc-500 mb-4 tracking-tight">
<span className="flex items-center gap-1">
<span className="w-2 h-2 rounded-sm bg-purple-500"></span>
                        Engineering
                      </span>
<span>/</span>
<span>ENG-249</span>
</div>
<h2 className="text-lg font-medium tracking-tight text-white mb-4">
                      Fix hydration error on dashboard
                    </h2>
<div className="flex gap-4 mb-6 border-b border-white/5 pb-4">
<div className="flex flex-col gap-1">
<span className="text-[10px] uppercase text-zinc-500 font-medium tracking-wider">
                          Status
                        </span>
<div className="flex items-center gap-1.5 text-xs font-medium tracking-tight text-orange-300 bg-orange-500/10 px-2 py-1 rounded-md ring-1 ring-orange-500/20">
<span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
                          In Progress
                        </div>
</div>
<div className="flex flex-col gap-1">
<span className="text-[10px] uppercase text-zinc-500 font-medium tracking-wider">
                          Priority
                        </span>
<div className="flex items-center gap-1 text-xs font-medium tracking-tight text-zinc-300">
<svg className="text-orange-500" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M12 20h9"></path>
<path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
</svg>
                          High
                        </div>
</div>
</div>
<div className="prose prose-invert prose-sm">
<p className="text-zinc-400 text-sm leading-relaxed tracking-normal font-light">
                        There's a mismatch between server-rendered HTML and
                        client-side rendering in the main dashboard widget. This
                        is causing a layout shift on load.
                      </p>
<div className="mt-4 rounded-md bg-black/40 border border-white/10 p-3">
<code className="text-xs font-mono tracking-tight text-zinc-300 block">
                          Warning: Prop `className` did not match. Server:
                          "w-full bg-zinc-900" Client: "w-full bg-zinc-800"
                        </code>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-zinc-950/20 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
<p className="text-center text-xs font-medium text-zinc-500 uppercase tracking-widest mb-8">
            Trusted by forward-thinking teams
          </p>
<div className="relative overflow-hidden ticker-mask">
<div className="flex gap-16 items-center whitespace-nowrap animate-[ticker_30s_linear_infinite] hover:[animation-play-state:paused]">

<div className="flex items-center gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-xl font-bold font-bricolage text-white">
                  Acme Corp
                </span>
<span className="text-xl font-medium font-sans tracking-tight text-white flex items-center gap-1">
<div className="w-4 h-4 bg-white rounded-full"></div>
                  Sphere
                </span>
<span className="text-xl font-bold font-serif text-white">
                  NEXUS
                </span>
<span className="text-xl font-medium font-playfair italic text-white">
                  Venture
                </span>
<span className="text-xl font-bold font-mono text-white">
                  BLOCKS
                </span>
<span className="text-xl font-bold font-bricolage text-white">
                  Acme Corp
                </span>
</div>

<div className="flex items-center gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-xl font-bold font-bricolage text-white">
                  Acme Corp
                </span>
<span className="text-xl font-medium font-sans tracking-tight text-white flex items-center gap-1">
<div className="w-4 h-4 bg-white rounded-full"></div>
                  Sphere
                </span>
<span className="text-xl font-bold font-serif text-white">
                  NEXUS
                </span>
<span className="text-xl font-medium font-playfair italic text-white">
                  Venture
                </span>
<span className="text-xl font-bold font-mono text-white">
                  BLOCKS
                </span>
<span className="text-xl font-bold font-bricolage text-white">
                  Acme Corp
                </span>
</div>
</div>
</div>
</div>
<style>
          @keyframes ticker { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        </style>
</section>

<section className="py-32 relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-20">
<h2 className="text-4xl sm:text-5xl font-medium tracking-tighter text-white mb-6">
              Everything you need to ship.
            </h2>
<p className="text-lg text-zinc-400 font-light tracking-tight leading-relaxed">
              Powerful tools that adapt to your workflow, wrapped in a beautiful
              interface.
            </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 relative group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/20 backdrop-blur-xl hover:bg-zinc-900/30 transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="p-8 relative z-10">
<div className="mb-8 relative h-64 rounded-xl border border-white/10 bg-zinc-950/50 backdrop-blur-md overflow-hidden shadow-2xl">

<div className="absolute inset-0 p-4">
<div className="flex items-end gap-2 h-full pb-4 px-2">
<div className="w-full bg-zinc-800/50 rounded-t-sm h-[40%] relative group-hover:h-[60%] transition-all duration-700 delay-75">
<div className="absolute top-0 w-full h-1 bg-indigo-500/50 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
</div>
<div className="w-full bg-zinc-800/50 rounded-t-sm h-[70%] relative group-hover:h-[50%] transition-all duration-700 delay-100">
<div className="absolute top-0 w-full h-1 bg-indigo-500/50 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
</div>
<div className="w-full bg-zinc-800/50 rounded-t-sm h-[50%] relative group-hover:h-[80%] transition-all duration-700 delay-150">
<div className="absolute top-0 w-full h-1 bg-indigo-500/50 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
</div>
<div className="w-full bg-zinc-800/50 rounded-t-sm h-[60%] relative group-hover:h-[90%] transition-all duration-700 delay-300">
<div className="absolute top-0 w-full h-1 bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.8)]"></div>
</div>
</div>
</div>
</div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-3">
                  Insight Engine
                </h3>
<p className="text-zinc-400 font-light leading-relaxed tracking-tight">
                  Real-time analytics that don't just show data, but explain it.
                  Understand velocity, bottlenecks, and team health at a glance.
                </p>
</div>
</div>

<div className="relative group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/20 backdrop-blur-xl hover:bg-zinc-900/30 transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-bl from-purple-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="p-8 relative z-10 h-full flex flex-col">
<div className="mb-auto">
<div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-purple-400 shadow-[0_0_30px_-10px_rgba(168,85,247,0.3)]">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
</svg>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">
                    AI Automation
                  </h3>
<p className="text-zinc-400 text-sm font-light leading-relaxed tracking-tight">
                    Let Arcflow handle the busywork. Auto-labeling, triage, and
                    duplicate detection powered by LLMs.
                  </p>
</div>
</div>
</div>

<div className="relative group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/20 backdrop-blur-xl hover:bg-zinc-900/30 transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="p-8 relative z-10 h-full flex flex-col">
<div className="mb-auto">
<div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-emerald-400 shadow-[0_0_30px_-10px_rgba(16,185,129,0.3)]">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect>
<line x1="3" x2="21" y1="9" y2="9"></line>
<path d="m9 16 3-3 3 3"></path>
</svg>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">
                    Keyboard First
                  </h3>
<p className="text-zinc-400 text-sm font-light leading-relaxed tracking-tight">
                    Navigate, create, and update without touching your mouse.
                    Command palette for power users.
                  </p>
</div>
</div>
</div>

<div className="lg:col-span-2 relative group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/20 backdrop-blur-xl hover:bg-zinc-900/30 transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-bl from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="p-8 relative z-10 flex flex-col md:flex-row gap-8 items-center">
<div className="flex-1">
<h3 className="text-2xl font-medium tracking-tight text-white mb-3">
                    Cycles &amp; Roadmaps
                  </h3>
<p className="text-zinc-400 font-light leading-relaxed mb-6 tracking-tight">
                    Plan your quarter or sprint with flexible views. Visualize
                    progress with linear burn-up charts that actually make
                    sense.
                  </p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-sm font-medium tracking-tight text-zinc-300">
<svg className="text-blue-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                      Automated cycle rollovers
                    </li>
<li className="flex items-center gap-2 text-sm font-medium tracking-tight text-zinc-300">
<svg className="text-blue-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                      Cross-project dependencies
                    </li>
</ul>
</div>
<div className="flex-1 w-full relative">
<div className="aspect-video bg-zinc-950/50 border border-white/10 rounded-lg backdrop-blur-md overflow-hidden p-4 relative">

<div className="space-y-3 pt-2">
<div className="flex items-center gap-3">
<div className="w-20 h-2 bg-zinc-800 rounded"></div>
<div className="flex-1 h-6 bg-blue-500/20 border border-blue-500/30 rounded flex items-center px-2">
<div className="w-1/2 h-1.5 bg-blue-500 rounded"></div>
</div>
</div>
<div className="flex items-center gap-3 pl-8">
<div className="w-16 h-2 bg-zinc-800 rounded"></div>
<div className="w-2/3 h-6 bg-purple-500/20 border border-purple-500/30 rounded ml-4"></div>
</div>
<div className="flex items-center gap-3">
<div className="w-24 h-2 bg-zinc-800 rounded"></div>
<div className="flex-1 h-6 bg-zinc-800/50 border border-white/5 rounded ml-12"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-4xl font-medium tracking-tighter text-white mb-4">
              Pricing that scales
            </h2>
<p className="text-zinc-400 font-light tracking-tight">
              Start for free, upgrade when you need power.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="rounded-2xl border border-white/10 bg-zinc-900/20 backdrop-blur-xl p-8 hover:bg-zinc-900/30 transition-colors">
<h3 className="text-lg font-medium tracking-tight text-white mb-2">
                Starter
              </h3>
<div className="text-3xl font-semibold tracking-tight text-white mb-6">
                $0
                <span className="text-sm font-normal text-zinc-500 font-sans">
                  /mo
                </span>
</div>
<ul className="space-y-3 mb-8 text-sm text-zinc-300 font-light tracking-tight">
<li className="flex gap-2">
<svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                  Up to 5 users
                </li>
<li className="flex gap-2">
<svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                  Unlimited issues
                </li>
</ul>
<button className="w-full py-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-white text-sm font-medium tracking-tight transition-colors">
                Start Free
              </button>
</div>

<div className="rounded-2xl border border-indigo-500/50 bg-zinc-900/40 backdrop-blur-xl p-8 relative shadow-[0_0_50px_-20px_rgba(99,102,241,0.3)]">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-indigo-500 text-white text-[10px] font-bold uppercase tracking-wider rounded-full">
                Popular
              </div>
<h3 className="text-lg font-medium tracking-tight text-white mb-2">
                Pro
              </h3>
<div className="text-3xl font-semibold tracking-tight text-white mb-6">
                $12
                <span className="text-sm font-normal text-zinc-500 font-sans">
                  /user/mo
                </span>
</div>
<ul className="space-y-3 mb-8 text-sm text-zinc-300 font-light tracking-tight">
<li className="flex gap-2">
<svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                  Unlimited users
                </li>
<li className="flex gap-2">
<svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                  Advanced insights
                </li>
</ul>
<button className="w-full py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium tracking-tight transition-colors shadow-lg shadow-indigo-500/20">
                Get Started
              </button>
</div>

<div className="rounded-2xl border border-white/10 bg-zinc-900/20 backdrop-blur-xl p-8 hover:bg-zinc-900/30 transition-colors">
<h3 className="text-lg font-medium tracking-tight text-white mb-2">
                Enterprise
              </h3>
<div className="text-3xl font-semibold tracking-tight text-white mb-6">
                Custom
              </div>
<ul className="space-y-3 mb-8 text-sm text-zinc-300 font-light tracking-tight">
<li className="flex gap-2">
<svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                  SAML / SSO
                </li>
<li className="flex gap-2">
<svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                  Dedicated support
                </li>
</ul>
<button className="w-full py-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-white text-sm font-medium tracking-tight transition-colors">
                Contact Sales
              </button>
</div>
</div>
</div>
</section>

<section className="py-24 relative">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-medium tracking-tight text-center mb-12 text-white">
            Frequently asked questions
          </h2>
<div className="space-y-4">
<div className="group rounded-xl border border-white/10 bg-zinc-900/20 backdrop-blur-md overflow-hidden transition-all hover:bg-zinc-900/30">
<button className="w-full flex items-center justify-between p-6 text-left" onclick="this.nextElementSibling.classList.toggle('hidden'); this.querySelector('svg').classList.toggle('rotate-180')">
<span className="text-zinc-200 font-medium tracking-tight">
                  Is Arcflow compatible with Jira?
                </span>
<svg className="w-5 h-5 text-zinc-500 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<polyline points="6 9 12 15 18 9"></polyline>
</svg>
</button>
<div className="hidden px-6 pb-6 text-zinc-400 text-sm font-light leading-relaxed tracking-tight">
                Yes, we offer a one-click migration tool that imports all your
                issues, epics, and comments. You can also run both in parallel
                during your transition period.
              </div>
</div>
<div className="group rounded-xl border border-white/10 bg-zinc-900/20 backdrop-blur-md overflow-hidden transition-all hover:bg-zinc-900/30">
<button className="w-full flex items-center justify-between p-6 text-left" onclick="this.nextElementSibling.classList.toggle('hidden'); this.querySelector('svg').classList.toggle('rotate-180')">
<span className="text-zinc-200 font-medium tracking-tight">
                  Do you offer on-premise hosting?
                </span>
<svg className="w-5 h-5 text-zinc-500 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<polyline points="6 9 12 15 18 9"></polyline>
</svg>
</button>
<div className="hidden px-6 pb-6 text-zinc-400 text-sm font-light leading-relaxed tracking-tight">
                Currently we are cloud-only (SOC2 Compliant). However, our
                Enterprise plan offers dedicated instances in your region of
                choice for data residency compliance.
              </div>
</div>
<div className="group rounded-xl border border-white/10 bg-zinc-900/20 backdrop-blur-md overflow-hidden transition-all hover:bg-zinc-900/30">
<button className="w-full flex items-center justify-between p-6 text-left" onclick="this.nextElementSibling.classList.toggle('hidden'); this.querySelector('svg').classList.toggle('rotate-180')">
<span className="text-zinc-200 font-medium tracking-tight">
                  Can I use Arcflow for non-software teams?
                </span>
<svg className="w-5 h-5 text-zinc-500 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<polyline points="6 9 12 15 18 9"></polyline>
</svg>
</button>
<div className="hidden px-6 pb-6 text-zinc-400 text-sm font-light leading-relaxed tracking-tight">
                Absolutely. While optimized for engineering cycles, many
                marketing and design teams use our flexible custom workflows to
                manage their tasks.
              </div>
</div>
</div>
</div>
</section>

<footer className="relative overflow-hidden border-t border-white/5 bg-zinc-950 pt-20 pb-10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8 mb-16">
<div className="lg:col-span-2 pr-8">
<a className="inline-flex items-center gap-2.5 mb-6 group" href="#">
<div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 ring-1 ring-white/20 shadow-[0_0_15px_rgba(99,102,241,0.5)] group-hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] transition-all duration-500">
<svg className="h-4 w-4 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20.341 6.484A10 10 0 0 1 10.266 21.85"></path>
<path d="M3.659 17.516A10 10 0 0 1 13.74 2.152"></path>
<circle cx="12" cy="12" r="3"></circle>
<circle cx="19" cy="5" r="2"></circle>
<circle cx="5" cy="19" r="2"></circle>
</svg>
</div>
<span className="text-xl font-semibold tracking-tight text-white">
                  Arcflow
                </span>
</a>
<p className="text-zinc-400 text-sm font-light leading-relaxed mb-6 tracking-tight">
                The operating system for modern software teams. Plan, build, and
                ship better products with AI-driven insights.
              </p>
<div className="flex items-center gap-3">
<div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-medium tracking-tight text-emerald-400">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                  All systems operational
                </div>
</div>
</div>
<div className="lg:col-span-1">
<h4 className="text-white font-medium mb-6 tracking-tight">Product</h4>
<ul className="space-y-4 text-sm text-zinc-500 font-medium tracking-tight">
<li>
<a className="hover:text-indigo-400 transition-colors flex items-center gap-2 group" href="#">
                    Features
                  </a>
</li>
<li>
<a className="hover:text-indigo-400 transition-colors flex items-center gap-2 group" href="#">
                    Integrations
                  </a>
</li>
</ul>
</div>
<div className="lg:col-span-1">
<h4 className="text-white font-medium mb-6 tracking-tight">Resources</h4>
<ul className="space-y-4 text-sm text-zinc-500 font-medium tracking-tight">
<li>
<a className="hover:text-purple-400 transition-colors flex items-center gap-2 group" href="#">
                    Documentation
                  </a>
</li>
<li>
<a className="hover:text-purple-400 transition-colors flex items-center gap-2 group" href="#">
                    API Reference
                  </a>
</li>
</ul>
</div>
<div className="lg:col-span-2">
<h4 className="text-white font-medium mb-4 tracking-tight">
                Stay updated
              </h4>
<p className="text-zinc-500 text-sm mb-4 font-light tracking-tight">
                Get the latest changelog and updates directly to your inbox.
              </p>
<form className="flex gap-2 mb-4">
<input className="bg-zinc-900/50 border border-white/10 rounded-lg px-3 py-2 text-sm text-white w-full focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all placeholder:text-zinc-700 font-light" placeholder="email@example.com" type="email"/>
<button className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-medium tracking-tight transition-all shadow-[0_0_15px_-5px_rgba(99,102,241,0.5)] hover:shadow-[0_0_20px_-5px_rgba(99,102,241,0.7)]" type="submit">
                  Subscribe
                </button>
</form>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-sm text-zinc-600 font-light tracking-tight">© 2025 Arcflow Inc.</div>
<div className="flex gap-6">
<a className="text-zinc-500 hover:text-white transition-all transform hover:-translate-y-1 hover:shadow-lg" href="#">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
</svg>
</a>
<a className="text-zinc-500 hover:text-white transition-all transform hover:-translate-y-1 hover:shadow-lg" href="#">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
<path d="M9 18c-4.51 2-5-2-7-2"></path>
</svg>
</a>
</div>
</div>
</div>
</footer>
</div>


    </>
  );
}
