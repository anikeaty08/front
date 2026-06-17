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
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-100 rounded-full blur-[120px] opacity-60 animate-float"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-slate-200 rounded-full blur-[120px] opacity-60 animate-float" style={{animationDelay: '-3s'}}></div>
</div>

<main className="relative w-full max-w-2xl bg-white/80 backdrop-blur-2xl border border-white/60 shadow-[0_30px_60px_-12px_rgba(0,0,0,0.08),0_10px_20px_-10px_rgba(0,0,0,0.04)] rounded-[32px] overflow-hidden animate-card transform-style-3d">

<div className="flex items-center justify-between px-8 pt-8 animate-content delay-100">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center border border-slate-200 shadow-sm">
<i className="w-4 h-4 text-slate-600" data-lucide="cpu"></i>
</div>
<span className="text-sm font-semibold tracking-tight text-slate-900">AUTO/OS</span>
</div>
<div className="flex items-center gap-3">
<span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/50 px-2.5 py-1 text-xs font-medium text-slate-600 backdrop-blur-sm shadow-sm">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
</span>
                    Enrollment Open
                </span>
</div>
</div>

<div className="px-8 pt-10 pb-8 sm:px-12 sm:pt-14 sm:pb-10">
<div className="space-y-6">
<h1 className="text-4xl sm:text-5xl font-medium tracking-tight text-slate-900 leading-[1.1] animate-content delay-200">
                    Reclaim your time with <br/>
<span className="text-slate-400">intelligent automation.</span>
</h1>
<p className="text-base sm:text-lg text-slate-500 max-w-md leading-relaxed animate-content delay-300">
                    A 4-week intensive sprint designed for operators. Learn to build autonomous agents, connect LLMs to your data, and automate the mundane.
                </p>

<div className="animate-content delay-400 pt-2">
<form className="flex flex-col sm:flex-row gap-3 max-w-md">
<div className="relative flex-grow group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<i className="h-4 w-4 text-slate-400 group-focus-within:text-slate-600 transition-colors" data-lucide="mail"></i>
</div>
<input className="custom-input w-full rounded-xl border border-slate-200 bg-slate-50/50 py-3 pl-10 pr-4 text-sm text-slate-800 placeholder-slate-400 outline-none focus:border-slate-300 focus:bg-white" placeholder="enter your email..." required="" type="email"/>
</div>
<button className="group relative flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-slate-900/10 transition-all hover:bg-slate-800 hover:scale-[1.02] active:scale-[0.98]" type="button">
<span>Join Waitlist</span>
<i className="w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</button>
</form>
<p className="mt-3 text-xs text-slate-400">Join 2,400+ engineers and founders.</p>
</div>
</div>
</div>

<div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent animate-content delay-400"></div>

<div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 bg-slate-50/30 animate-content delay-500">

<div className="p-6 sm:p-8 hover:bg-white/60 transition-colors duration-300 group cursor-default">
<div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white shadow-sm group-hover:scale-110 transition-transform duration-300 ease-out">
<i className="h-4.5 w-4.5 text-slate-600" data-lucide="blocks"></i>
</div>
<h3 className="text-sm font-semibold text-slate-900">Foundations</h3>
<p className="mt-1 text-xs text-slate-500 leading-relaxed">
                    API design, webhooks, and modern data structures.
                </p>
</div>

<div className="p-6 sm:p-8 hover:bg-white/60 transition-colors duration-300 group cursor-default">
<div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white shadow-sm group-hover:scale-110 transition-transform duration-300 ease-out">
<i className="h-4.5 w-4.5 text-slate-600" data-lucide="bot"></i>
</div>
<h3 className="text-sm font-semibold text-slate-900">AI Agents</h3>
<p className="mt-1 text-xs text-slate-500 leading-relaxed">
                    Building context-aware agents with LangChain &amp; OpenAI.
                </p>
</div>

<div className="p-6 sm:p-8 hover:bg-white/60 transition-colors duration-300 group cursor-default">
<div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white shadow-sm group-hover:scale-110 transition-transform duration-300 ease-out">
<i className="h-4.5 w-4.5 text-slate-600" data-lucide="workflow"></i>
</div>
<h3 className="text-sm font-semibold text-slate-900">Workflows</h3>
<p className="mt-1 text-xs text-slate-500 leading-relaxed">
                    End-to-end automation pipelines using n8n and Python.
                </p>
</div>
</div>

<div className="border-t border-slate-100 bg-white px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 animate-content delay-500">
<div className="flex -space-x-2 overflow-hidden">
<img alt="" className="inline-block h-6 w-6 rounded-full ring-2 ring-white grayscale opacity-80" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="" className="inline-block h-6 w-6 rounded-full ring-2 ring-white grayscale opacity-80" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="" className="inline-block h-6 w-6 rounded-full ring-2 ring-white grayscale opacity-80" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 ring-2 ring-white">
<span className="text-[9px] font-medium text-slate-500">+400</span>
</div>
</div>
<div className="flex items-center gap-4">
<p className="text-xs font-medium text-slate-400 tracking-tight">POWERED BY</p>
<div className="flex gap-3 opacity-40 grayscale">
<i className="h-4 w-4" data-lucide="zap"></i>
<i className="h-4 w-4" data-lucide="code-2"></i>
<i className="h-4 w-4" data-lucide="database"></i>
</div>
</div>
</div>
</main>


    </>
  );
}
