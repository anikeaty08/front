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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-xl">
<div className="max-w-2xl mx-auto px-6 h-16 flex items-center justify-center relative">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="relative flex items-center justify-center">
<div className="absolute inset-0 bg-rose-500/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<i className="w-5 h-5 text-rose-500 relative z-10" data-lucide="check-circle-2"></i>
</div>
<span className="text-lg font-medium tracking-tight text-white">Tempo.</span>
</div>
</div>
</nav>
<main className="relative pt-32 pb-20">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-rose-900/10 rounded-[100%] blur-[100px] -z-10 pointer-events-none"></div>

<div className="max-w-3xl mx-auto px-6 text-center flex flex-col items-center">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
</span>
<span className="text-sm font-normal text-slate-300 tracking-wide">Public Beta Access</span>
</div>

<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-6 leading-[1.1]">
                What's Your <br className="hidden md:block"/>
<span className="bg-gradient-to-br from-rose-400 to-rose-600 bg-clip-text text-transparent pb-2 inline-block">Tempo?</span>
</h1>

<p className="text-lg md:text-xl text-slate-400 font-normal leading-relaxed max-w-xl mx-auto mb-10">
                Track what you eat, how you sleep, and how you train. Stay accountable with the people who matter.
                <br className="hidden md:block mt-2"/>
<span className="text-slate-200">Track it. Share it. Stay <span className="text-rose-500">locked</span> in.</span>
</p>

<button className="group relative inline-flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-full font-medium text-lg hover:scale-105 transition-all duration-300 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
<i className="w-6 h-6 fill-black" data-lucide="apple"></i>
<div className="flex flex-col items-start leading-none">
<span className="text-[10px] uppercase font-semibold tracking-wider opacity-60">Coming to</span>
<span className="text-base tracking-tight">App Store</span>
</div>
</button>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mt-24">

<div className="group p-6 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-white/10 hover:bg-white/[0.06] transition-all duration-500 flex flex-col items-center">
<div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
<i className="w-6 h-6 text-indigo-400" data-lucide="users"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">Playground</h3>
<p className="text-base text-slate-500 font-normal">Group accountability designed for friends.</p>
</div>

<div className="group p-6 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-white/10 hover:bg-white/[0.06] transition-all duration-500 flex flex-col items-center">
<div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-500/20 to-orange-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
<i className="w-6 h-6 text-rose-400" data-lucide="flame"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">Gamified</h3>
<p className="text-base text-slate-500 font-normal">Streak tracking built-in to keep you going.</p>
</div>

<div className="group p-6 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-white/10 hover:bg-white/[0.06] transition-all duration-500 flex flex-col items-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-rose-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
<i className="w-6 h-6 text-emerald-400" data-lucide="sparkles"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight flex items-center gap-2">
                        TempoAI
                        <span className="text-[10px] bg-rose-500/20 text-rose-300 px-1.5 py-0.5 rounded border border-rose-500/20">NEW</span>
</h3>
<p className="text-base text-slate-500 font-normal">AI trained by you, specifically for you.</p>
</div>
</div>
</div>

<div className="mt-20 relative flex justify-center perspective-[2000px] overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[600px] bg-rose-600/30 blur-[80px] rounded-full"></div>

<div className="relative w-[320px] md:w-[380px] h-[700px] bg-[#0a0a0a] rounded-[50px] border-[8px] border-[#1a1a1a] shadow-2xl flex flex-col overflow-hidden ring-1 ring-white/10 transform rotate-x-6 hover:rotate-x-0 transition-transform duration-700 ease-out">

<div className="absolute top-0 left-1/2 -translate-x-1/2 h-7 w-28 bg-black rounded-b-3xl z-20 flex justify-between items-center px-4 mt-2">
<div className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a]"></div>
</div>

<div className="flex justify-between items-center px-8 py-5 text-xs font-medium text-white z-10 mt-1">
<span>12:08</span>
<div className="flex gap-1.5">
<i className="w-3.5 h-3.5" data-lucide="signal"></i>
<i className="w-3.5 h-3.5" data-lucide="wifi"></i>
<i className="w-3.5 h-3.5" data-lucide="battery"></i>
</div>
</div>

<div className="flex-1 flex flex-col relative px-6 pt-4">

<div className="flex items-center justify-between mb-8">
<div className="flex items-center gap-2 text-rose-500">
<i className="w-5 h-5 fill-rose-500" data-lucide="zap"></i>
<span className="text-lg font-medium text-white tracking-tight">TempoAI</span>
</div>
<span className="px-2 py-1 rounded-lg bg-rose-500/10 border border-rose-500/20 text-[10px] text-rose-400 font-semibold tracking-wide">PRO</span>
</div>

<div className="flex flex-col gap-6 relative z-10">

<div className="self-center mb-4 relative">
<div className="w-20 h-20 rounded-full bg-gradient-to-tr from-rose-500 to-orange-600 flex items-center justify-center shadow-[0_0_30px_-5px_rgba(244,63,94,0.6)] animate-pulse">
<i className="w-8 h-8 text-white" data-lucide="sparkles"></i>
</div>
</div>

<div className="text-center mb-6">
<h2 className="text-2xl font-medium text-white tracking-tight">Talk to <span className="text-rose-500">Your</span> Data</h2>
<p className="text-sm text-zinc-500 mt-1">Ask anything, anytime.</p>
</div>

<div className="flex flex-col gap-3">

<div className="self-end bg-zinc-800 text-zinc-200 px-4 py-3 rounded-2xl rounded-tr-sm text-sm max-w-[85%] border border-white/5">
                                How is my sleep trend this week?
                            </div>

<div className="self-start bg-rose-600 text-white px-4 py-3 rounded-2xl rounded-tl-sm text-sm max-w-[85%] shadow-lg shadow-rose-900/20">
<p className="mb-2">Your average sleep is up 12%.</p>

<div className="h-12 w-full flex items-end justify-between gap-1 mt-2 opacity-80">
<div className="w-2 bg-white/30 rounded-t h-[40%]"></div>
<div className="w-2 bg-white/30 rounded-t h-[60%]"></div>
<div className="w-2 bg-white/30 rounded-t h-[50%]"></div>
<div className="w-2 bg-white/30 rounded-t h-[30%]"></div>
<div className="w-2 bg-white rounded-t h-[80%] shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
<div className="w-2 bg-white/30 rounded-t h-[70%]"></div>
<div className="w-2 bg-white/30 rounded-t h-[75%]"></div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-6 left-6 right-6 h-16 bg-[#151515] rounded-3xl border border-white/10 flex items-center justify-around px-2 backdrop-blur-md z-20">
<div className="p-2 rounded-xl text-zinc-500 hover:text-white transition"><i className="w-5 h-5" data-lucide="home"></i></div>
<div className="p-2 rounded-xl bg-rose-500/10 text-rose-500"><i className="w-5 h-5" data-lucide="message-square"></i></div>
<div className="p-2 rounded-xl text-zinc-500 hover:text-white transition"><i className="w-5 h-5" data-lucide="bar-chart-2"></i></div>
<div className="p-2 rounded-xl text-zinc-500 hover:text-white transition"><i className="w-5 h-5" data-lucide="user"></i></div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none z-10"></div>
</div>

<div className="absolute bottom-0 left-1/2 -translate-x-[160%] translate-y-[20%] w-[260px] h-[300px] bg-[#0f0f0f] rounded-3xl border border-white/10 shadow-2xl opacity-60 scale-90 blur-[1px] hidden md:block">
<div className="p-4 border-b border-white/5 flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-rose-500"></div>
<span className="text-xs font-medium text-zinc-400">Playground</span>
</div>
<div className="p-4 space-y-3">
<div className="h-2 w-3/4 bg-zinc-800 rounded"></div>
<div className="h-2 w-1/2 bg-zinc-800 rounded"></div>
<div className="h-2 w-full bg-zinc-800 rounded"></div>
</div>
</div>
<div className="absolute bottom-0 left-1/2 translate-x-[60%] translate-y-[30%] w-[260px] h-[300px] bg-[#0f0f0f] rounded-3xl border border-white/10 shadow-2xl opacity-60 scale-90 blur-[1px] hidden md:block">
<div className="p-4 border-b border-white/5 flex items-center gap-2">
<i className="w-3 h-3 text-yellow-500" data-lucide="trophy"></i>
<span className="text-xs font-medium text-zinc-400">Stats</span>
</div>
<div className="p-4 grid grid-cols-2 gap-2">
<div className="h-16 bg-zinc-800/50 rounded-xl border border-white/5"></div>
<div className="h-16 bg-zinc-800/50 rounded-xl border border-white/5"></div>
</div>
</div>
</div>
</main>
<footer className="border-t border-white/5 py-12 bg-black">
<div className="max-w-2xl mx-auto px-6 text-center">
<div className="flex items-center justify-center gap-2 mb-6 opacity-50">
<i className="w-4 h-4 text-rose-500" data-lucide="check-circle-2"></i>
<span className="text-sm font-medium text-white">Tempo.</span>
</div>
<p className="text-sm text-zinc-600">© 2024 Tempo Inc. All rights reserved.</p>
</div>
</footer>


    </>
  );
}
