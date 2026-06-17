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



        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
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
      
<div className="ambient-mesh"></div>

<nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
<div className="nav-float rounded-full px-2 py-2 flex items-center gap-1">
<a className="px-5 py-2 flex items-center gap-2 group" href="#">
<div className="w-5 h-5 rounded bg-white text-black flex items-center justify-center font-bold text-xs tracking-tighter group-hover:scale-105 transition-transform">C</div>
<span className="text-sm font-medium tracking-tight text-white group-hover:text-gray-300 transition-colors">Chloro</span>
</a>
<div className="hidden md:flex items-center px-2">
<a className="px-4 py-2 text-xs font-medium text-gray-400 hover:text-white transition-colors" href="#editor">Editor</a>
<a className="px-4 py-2 text-xs font-medium text-gray-400 hover:text-white transition-colors" href="#vibes">Vibes</a>
<a className="px-4 py-2 text-xs font-medium text-gray-400 hover:text-white transition-colors" href="#ai">Intelligence</a>
<a className="px-4 py-2 text-xs font-medium text-gray-400 hover:text-white transition-colors" href="#pro">Pro</a>
</div>
<div className="flex items-center gap-2 pl-2">
<a className="px-4 py-2 text-xs font-medium text-white hover:text-gray-300 transition-colors hidden sm:block" href="#">Log in</a>
<a className="bg-emerald-500 text-black text-xs font-semibold px-5 py-2.5 rounded-full hover:bg-emerald-400 transition-all transform hover:scale-[1.02]" href="#">
                    Start Coding
                </a>
</div>
</div>
</nav>

<main className="relative pt-32 pb-24 md:pt-48 md:pb-36 overflow-hidden">

<div className="grid-floor"></div>

<div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

<div className="inline-flex items-center justify-center mb-8">
<span className="relative inline-flex overflow-hidden rounded-full p-[1px]">
<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#064e3b_0%,#10b981_50%,#064e3b_100%)]"></span>
<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#020302] px-4 py-1.5 text-xs font-medium text-emerald-200 backdrop-blur-3xl">
<span className="mr-2 flex h-1.5 w-1.5 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
</span>
                        Chloro Code Beta is Open
                        <svg className="lucide lucide-arrow-right w-3 h-3 ml-2 text-emerald-400" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</span>
</div>

<h1 className="text-6xl md:text-8xl font-semibold tracking-tighter text-white mb-8 leading-[0.95] drop-shadow-2xl">
                Just vibe. <br/>
<span className="text-gradient-brand">We handle the code.</span>
</h1>

<p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed tracking-wide">
                The first web-based vibecoding environment. Describe your dream app, 
                and watch the AI construct it in real-time. Zero config. Pure flow.
            </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-5">
<button className="group relative h-12 px-8 rounded-full bg-white text-black text-sm font-semibold hover:bg-gray-100 transition-all flex items-center gap-2 overflow-hidden">
<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-emerald-100 to-transparent opacity-50 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out z-0"></div>
<span className="relative z-10">Start Vibing</span>
<svg className="lucide lucide-sparkles w-4 h-4 relative z-10 group-hover:translate-x-0.5 transition-transform text-emerald-600" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</button>
<button className="h-12 px-8 rounded-full border border-white/10 text-gray-300 text-sm font-medium hover:bg-white/5 transition-colors flex items-center gap-2 backdrop-blur-sm">
<svg className="lucide lucide-play-circle w-4 h-4 text-gray-500" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
                    Watch Demo
                </button>
</div>
</div>

<div className="mt-20 relative max-w-6xl mx-auto px-6 group">
<div className="absolute -inset-1 bg-gradient-to-r from-emerald-900 to-teal-900 rounded-2xl blur opacity-30 group-hover:opacity-40 transition duration-1000"></div>
<div className="glass-panel rounded-xl overflow-hidden shine-border transform transition-all duration-700 hover:scale-[1.01]">

<div className="h-10 border-b border-white/10 bg-black/40 flex items-center px-4 gap-2">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-gray-700/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-gray-700/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-gray-700/50"></div>
</div>
<div className="mx-auto w-64 h-6 bg-white/5 rounded-md flex items-center justify-center text-[10px] text-gray-500 font-mono border border-white/5">
<svg className="lucide lucide-lock w-2 h-2 mr-1" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                        vibes.chloro.code/new
                    </div>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-[10px] text-gray-400 font-medium">Online</span>
</div>
</div>

<div className="flex h-[500px] bg-[#020302]/90">

<div className="w-64 border-r border-white/5 hidden md:flex flex-col p-4 space-y-4">
<div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Project Files</div>
<div className="space-y-1">
<div className="flex items-center gap-2 px-2 py-1.5 rounded bg-emerald-500/10 text-emerald-300 text-xs font-mono">
<svg className="lucide lucide-file-code w-3 h-3" data-lucide="file-code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 12.5 8 15l2 2.5"></path><path d="m14 12.5 2 2.5-2 2.5"></path></svg> page.tsx
                            </div>
<div className="flex items-center gap-2 px-2 py-1.5 rounded text-gray-400 text-xs font-mono hover:bg-white/5 transition-colors">
<svg className="lucide lucide-file-code w-3 h-3" data-lucide="file-code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 12.5 8 15l2 2.5"></path><path d="m14 12.5 2 2.5-2 2.5"></path></svg> global.css
                            </div>
<div className="flex items-center gap-2 px-2 py-1.5 rounded text-gray-400 text-xs font-mono hover:bg-white/5 transition-colors">
<svg className="lucide lucide-box w-3 h-3" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg> components
                            </div>
</div>
<div className="mt-auto pt-4 border-t border-white/5">
<div className="flex items-center gap-2 text-xs text-gray-400">
<svg className="lucide lucide-cpu w-3 h-3" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg> AI Usage: 12%
                            </div>
</div>
</div>

<div className="flex-1 flex flex-col relative">

<div className="absolute bottom-6 left-6 right-6 z-20">
<div className="glass-panel rounded-xl p-1 flex items-center gap-2 bg-[#0a0a0a]/90 border-emerald-500/20 shadow-2xl shadow-emerald-900/10">
<div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
<svg className="lucide lucide-sparkles w-4 h-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<input className="flex-1 bg-transparent border-none text-sm text-white focus:outline-none h-10 px-2" readonly="" type="text" value="Add a glassmorphic card with a chart..."/>
<div className="px-3 py-1.5 bg-emerald-500 rounded-lg text-[10px] font-bold text-black tracking-tight">VIBE</div>
</div>
</div>

<div className="flex-1 p-6 font-mono text-xs md:text-sm text-gray-300 overflow-hidden relative">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-20"></div>
<div className="space-y-1">
<div className="flex"><span className="w-6 text-gray-700 select-none">1</span><span className="token-kw">export</span> <span className="token-kw">default</span> <span className="token-kw">function</span> <span className="token-func">Dashboard</span>() {</div>
<div className="flex"><span className="w-6 text-gray-700 select-none">2</span>  <span className="token-kw">return</span> (</div>
<div className="flex"><span className="w-6 text-gray-700 select-none">3</span>    &lt;<span className="token-kw">div</span> <span className="token-func">className</span>=<span className="token-str">"min-h-screen bg-black"</span>&gt;</div>
<div className="flex"><span className="w-6 text-gray-700 select-none">4</span>      &lt;<span className="token-kw">Header</span> /&gt;</div>
<div className="flex bg-emerald-500/10 border-l-2 border-emerald-500"><span className="w-6 text-emerald-700 select-none">5</span>      &lt;<span className="token-kw">GlassCard</span> <span className="token-func">title</span>=<span className="token-str">"Revenue"</span>&gt;</div>
<div className="flex bg-emerald-500/10 border-l-2 border-emerald-500"><span className="w-6 text-emerald-700 select-none">6</span>        &lt;<span className="token-kw">Chart</span> <span className="token-func">data</span>={data} <span className="token-func">variant</span>=<span className="token-str">"gradient"</span> /&gt;</div>
<div className="flex bg-emerald-500/10 border-l-2 border-emerald-500"><span className="w-6 text-emerald-700 select-none">7</span>      &lt;/<span className="token-kw">GlassCard</span>&gt;</div>
<div className="flex"><span className="w-6 text-gray-700 select-none">8</span>    &lt;/<span className="token-kw">div</span>&gt;</div>
<div className="flex"><span className="w-6 text-gray-700 select-none">9</span>  );</div>
<div className="flex"><span className="w-6 text-gray-700 select-none">10</span>}<span className="cursor-blink w-2 h-4 bg-emerald-500 inline-block align-middle ml-1"></span></div>
</div>
</div>
</div>

<div className="w-80 border-l border-white/5 hidden lg:block bg-black p-4">
<div className="w-full h-full rounded border border-white/10 relative overflow-hidden flex items-center justify-center bg-gray-900">

<div className="w-56 p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md">
<div className="text-xs text-gray-400 mb-2">Revenue</div>
<div className="flex items-end gap-1 h-20">
<div className="w-full bg-emerald-500/50 h-[40%] rounded-t-sm"></div>
<div className="w-full bg-emerald-500/80 h-[70%] rounded-t-sm"></div>
<div className="w-full bg-emerald-500/40 h-[50%] rounded-t-sm"></div>
<div className="w-full bg-emerald-400 h-[90%] rounded-t-sm shadow-[0_0_10px_rgba(52,211,153,0.5)]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="border-y border-white/5 bg-black/40 py-10 overflow-hidden relative">
<div className="marquee-container w-full max-w-7xl mx-auto flex overflow-hidden">
<div className="marquee-content flex gap-16 min-w-full items-center px-4">

<span className="text-lg font-bold text-gray-600 tracking-tight flex items-center gap-2"><div className="w-5 h-5 bg-gray-700 rounded-sm"></div> VOXEL</span>
<span className="text-lg font-bold text-gray-600 tracking-tight flex items-center gap-2"><div className="w-5 h-5 border-2 border-gray-700 rounded-full"></div> SYNTH</span>
<span className="text-lg font-bold text-gray-600 tracking-tight flex items-center gap-2"><div className="w-5 h-5 bg-gray-700 rotate-45"></div> NEURAL</span>
<span className="text-lg font-bold text-gray-600 tracking-tight flex items-center gap-2"><div className="w-5 h-5 bg-gray-700 rounded-full"></div> FLUID</span>
<span className="text-lg font-bold text-gray-600 tracking-tight flex items-center gap-2"><div className="w-5 h-5 border border-gray-700 rounded-sm"></div> PRISM</span>
<span className="text-lg font-bold text-gray-600 tracking-tight flex items-center gap-2"><div className="w-5 h-5 bg-gray-700 rounded-sm"></div> QUANTUM</span>

<span className="text-lg font-bold text-gray-600 tracking-tight flex items-center gap-2"><div className="w-5 h-5 bg-gray-700 rounded-sm"></div> VOXEL</span>
<span className="text-lg font-bold text-gray-600 tracking-tight flex items-center gap-2"><div className="w-5 h-5 border-2 border-gray-700 rounded-full"></div> SYNTH</span>
<span className="text-lg font-bold text-gray-600 tracking-tight flex items-center gap-2"><div className="w-5 h-5 bg-gray-700 rotate-45"></div> NEURAL</span>
<span className="text-lg font-bold text-gray-600 tracking-tight flex items-center gap-2"><div className="w-5 h-5 bg-gray-700 rounded-full"></div> FLUID</span>
</div>
</div>
</section>

<section className="max-w-7xl mr-auto ml-auto pt-32 pr-6 pb-32 pl-6">
<div className="mb-20 max-w-2xl">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-6">Code at the
      <br/><span className="text-gray-500">speed of thought.</span></h2>
<p className="text-gray-400 text-lg leading-relaxed">
      Chloro eliminates the friction between idea and deployment.
      Our web-based environment is tuned for pure flow state.
    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-6 grid-rows-2 gap-4 h-auto md:h-[600px]">

<div className="md:col-span-4 md:row-span-2 glass-panel rounded-3xl p-8 md:p-12 relative overflow-hidden group">
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="">
<div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-8 border border-white/10 text-white">
<svg className="lucide lucide-zap w-6 h-6" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-3xl font-medium tracking-tight text-white mb-4">Web-Native Environment</h3>
<p className="text-gray-400 max-w-sm leading-relaxed">
            No local setup. No environment variables hell. Open a URL and you're in a fully configured container with
            Node, Python, or Go ready to ship.
          </p>
</div>

<div className="overflow-hidden transform transition-transform group-hover:-translate-y-2 text-xs font-mono bg-[#0a0a0a] border-white/5 border rounded-xl mt-8 pt-4 pr-4 pb-4 pl-4 shadow-2xl">
<div className="flex gap-1.5 mb-3 opacity-50">
<div className="w-2.5 h-2.5 rounded-full bg-gray-600"></div>
<div className="w-2.5 h-2.5 rounded-full bg-gray-600"></div>
</div>
<div className="leading-relaxed">
<span className="text-gray-500">// terminal</span>
<span className="text-green-500">➜</span> <span className="text-white">chloro dev</span>
<span className="text-gray-400">Ready in 23ms</span>
<span className="text-gray-400">➜  Local:</span>
<span className="text-emerald-400 underline">http://localhost:3000</span>
<span className="text-gray-400">➜  Network:</span>
<span className="text-emerald-400 underline">https://vibes.chloro.app</span>
</div>
</div>
</div>

<div className="absolute right-0 top-0 w-2/3 h-full bg-gradient-to-l from-emerald-900/20 to-transparent pointer-events-none">
</div>
</div>

<div className="md:col-span-2 glass-panel rounded-3xl p-8 relative overflow-hidden group hover:border-white/20 transition-colors">
<div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
<svg className="lucide lucide-brain-circuit w-24 h-24 text-white" data-lucide="brain-circuit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M12 13h4"></path><path d="M12 18h6a2 2 0 0 1 2 2v1"></path><path d="M12 8h8"></path><path d="M16 8V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></svg>
</div>
<div className="relative z-10">
<h4 className="text-xl font-medium text-white mb-2">Generative UI</h4>
<p className="text-sm text-gray-400 leading-relaxed">
          Describe a component and our LLM streams the React code instantly.
        </p>
</div>
</div>

<div className="md:col-span-2 glass-panel rounded-3xl p-8 relative overflow-hidden group hover:border-white/20 transition-colors">
<div className="absolute bottom-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-colors">
</div>
<div className="relative z-10 h-full flex flex-col justify-end">
<svg className="lucide lucide-headphones w-8 h-8 text-white mb-4" data-lucide="headphones" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path></svg>
<h4 className="text-xl font-medium text-white mb-2">Flow State Audio</h4>
<p className="text-sm text-gray-400 leading-relaxed">
          Built-in binaural beats and lo-fi streams to keep you in the zone.
        </p>
</div>
</div>
</div>
</section>

<section className="py-24 relative">
<div className="absolute inset-0 bg-white/[0.02] -skew-y-2 transform origin-top-left z-0"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

<div className="perspective-container flex justify-center lg:justify-end order-2 lg:order-1">
<div className="code-3d bg-[#050505] border border-white/10 rounded-xl p-6 w-full max-w-lg relative">
<div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl blur opacity-20"></div>
<div className="relative">
<div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
<span className="text-xs font-mono text-gray-500">chloro.config.ts</span>
<div className="flex gap-2 text-[10px] font-mono text-gray-600">
<span>TypeScript</span>
<span>1.2 KB</span>
</div>
</div>
<pre className="font-mono text-xs md:text-sm leading-7"><span className="token-kw">import</span> { <span className="token-func">defineConfig</span> } <span className="token-kw">from</span> <span className="token-str">'chloro/sdk'</span>;

<span className="token-kw">export default</span> <span className="token-func">defineConfig</span>({
  <span className="token-comment">// AI Pair Programmer Settings</span>
  ai: {
    model: <span className="token-str">'chloro-v2-turbo'</span>,
    autofix: <span className="token-kw">true</span>,
    creativity: <span className="token-num">0.8</span>
  },
  
  <span className="token-comment">// Workspace Configuration</span>
  environment: {
    preset: <span className="token-str">'nextjs-app'</span>,
    hotReload: <span className="token-kw">true</span>
  },

  <span className="token-comment">// Sync to Git</span>
  sync: <span className="token-kw">true</span>
});
</pre>
</div>
</div>
</div>

<div className="order-1 lg:order-2">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-300 text-xs font-medium mb-6">
<svg className="lucide lucide-code-2 w-3 h-3" data-lucide="code-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg> 10x Developer Speed
                </div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-6">
                    Your new favorite  
                    <span className="text-gradient-gold">pair programmer.</span>
</h2>
<p className="text-gray-400 text-lg leading-relaxed mb-8">
                    Stop fighting with configurations. Chloro understands your intent and handles the boilerplate, 
                    imports, and type definitions automatically.
                </p>
<div className="space-y-4">
<div className="flex items-start gap-4 group">
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center mt-1 group-hover:bg-white/10 transition-colors">
<span className="text-xs font-mono text-emerald-400">01</span>
</div>
<div className="">
<h4 className="text-white font-medium mb-1">Open Browser</h4>
<p className="text-sm text-gray-500">Navigate to chloro.new to spin up an instant environment.</p>
</div>
</div>
<div className="flex items-start gap-4 group">
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center mt-1 group-hover:bg-white/10 transition-colors">
<span className="text-xs font-mono text-emerald-400">02</span>
</div>
<div className="">
<h4 className="text-white font-medium mb-1">Prompt</h4>
<p className="text-sm text-gray-500">"Build a landing page for a coffee shop using Tailwind."</p>
</div>
</div>
<div className="flex items-start gap-4 group">
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center mt-1 group-hover:bg-white/10 transition-colors">
<span className="text-xs font-mono text-emerald-400">03</span>
</div>
<div className="">
<h4 className="text-white font-medium mb-1">Refine &amp; Deploy</h4>
<p className="text-sm text-gray-500">Tweak the generated code and ship with one click.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-emerald-600/10 rounded-[100%] blur-[100px] pointer-events-none"></div>
<div className="max-w-4xl mx-auto glass-panel rounded-3xl p-12 md:p-16 text-center relative z-10 border border-emerald-500/20">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-6">Join the Beta.</h2>
<p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
                Experience the future of web development. Limited spots available for the vibecoding preview.
            </p>
<form className="max-w-md mx-auto relative mb-8">
<input className="w-full h-14 pl-6 pr-36 rounded-full bg-black/50 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all text-sm" placeholder="enter@email.com" type="email"/>
<button className="absolute right-1.5 top-1.5 h-11 px-6 rounded-full bg-white text-black text-sm font-semibold hover:bg-emerald-50 transition-colors" type="submit">
                    Request Access
                </button>
</form>
<p className="text-xs text-gray-600">
                No credit card required. Pure vibes.
            </p>
</div>
</section>

<footer className="border-t border-white/5 bg-black pt-20 pb-10 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-24 mb-16">
<div className="col-span-2 lg:col-span-1">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-6 h-6 rounded bg-white text-black flex items-center justify-center font-bold text-xs tracking-tighter">C</div>
<span className="text-lg font-bold tracking-tight text-white">Chloro</span>
</a>
<p className="text-sm text-gray-500 leading-relaxed">
                        The web-based IDE designed for the AI era. Code faster, ship simpler, vibe harder.
                    </p>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-6">Platform</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li><a className="hover:text-white transition-colors" href="#">Editor</a></li>
<li><a className="hover:text-white transition-colors" href="#">AI Models</a></li>
<li><a className="hover:text-white transition-colors" href="#">Vibes</a></li>
<li><a className="hover:text-white transition-colors" href="#">Showcase</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-6">Company</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li><a className="hover:text-white transition-colors" href="#">Manifesto</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a> <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-1.5 py-0.5 rounded ml-1">Hiring</span></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-6">Legal</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li><a className="hover:text-white transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-white transition-colors" href="#">Cookies</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 gap-6">
<p className="text-xs text-gray-600">© 2024 Chloro Code Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-gray-600 hover:text-white transition-colors" href="#"><svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="text-gray-600 hover:text-white transition-colors" href="#"><svg className="lucide lucide-github w-4 h-4" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg></a>
<a className="text-gray-600 hover:text-white transition-colors" href="#"><svg className="lucide lucide-youtube w-4 h-4" data-lucide="youtube" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
