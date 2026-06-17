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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
    
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
      

<div className="fixed top-0 left-0 -z-10 w-full h-full" data-us-project="ojBMr9PbDiBpKIrmzIHh"></div>

<header className="flex w-full z-50 pt-6 pr-6 pb-6 pl-6 relative justify-center">
<div className="flex w-full max-w-6xl items-center justify-between">

<a className="flex items-center gap-2" href="#">
<iconify-icon className="text-2xl text-black" height="24" icon="solar:star-fall-linear" style={{color: 'rgb(248, 250, 252)'}} width="24"></iconify-icon>
<span className="text-xl font-medium text-slate-50 tracking-tight font-heading">NovaBot</span>
</a>

<nav className="hidden md:flex gap-8 text-slate-50 gap-x-8 gap-y-8 items-center">
<a className="hover:text-black transition-colors text-sm font-medium text-slate-50" href="#">API Docs</a>
<a className="hover:text-black transition-colors text-sm font-medium text-slate-50" href="#">Models</a>
<a className="hover:text-black transition-colors text-sm font-medium text-slate-50" href="#">Changelog</a>
<a className="hover:text-black transition-colors text-sm font-medium text-slate-50" href="#">Case Studies</a>
<a className="hover:text-black transition-colors text-sm font-medium text-slate-50" href="#">Blog</a>
<a className="hover:text-black transition-colors text-sm font-medium text-slate-50" href="#">Support</a>
</nav>

<a className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors flex items-center gap-2" href="#">
                Get NovaBot 
                <div className="w-4 h-4 bg-white/20 rounded-sm flex items-center justify-center p-0.5">
<iconify-icon className="text-white text-xs" icon="solar:monitor-linear"></iconify-icon>
</div>
</a>
</div>
</header>

<main className="flex-1 flex flex-col md:mt-24 w-full z-10 mt-16 pr-6 pl-6 relative items-center">

<section className="max-w-4xl mx-auto flex flex-col items-center text-center w-full">
<h2 className="md:text-5xl text-4xl font-medium text-slate-50 tracking-tight font-heading mb-1">
                Your Smart Assistant for
            </h2>
<h1 className="md:text-6xl lg:text-7xl leading-[1.1] text-5xl font-medium text-slate-50 tracking-tight font-heading mb-6">Automated Workflows.</h1>
<p className="leading-relaxed md:text-xl text-lg text-slate-50 max-w-2xl mb-8">
                NovaBot handles complex processes that scale, sync, and perform — saving your team over 15 hours a week.
            </p>
<a className="bg-black text-white px-6 py-3.5 rounded-full text-base font-medium hover:bg-gray-800 transition-colors flex items-center gap-2 shadow-sm" href="#">
                Get NovaBot 
                <div className="w-4 h-4 bg-white/20 rounded-sm flex items-center justify-center p-0.5">
<iconify-icon className="text-white text-sm" icon="solar:monitor-linear"></iconify-icon>
</div>
</a>
</section>

<section className="w-full flex justify-center mt-20 md:mt-28 relative perspective-[2000px] mb-20">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/50 rounded-full blur-3xl -z-10"></div>

<div className="relative w-full max-w-[340px] h-[720px] bg-black rounded-[56px] border-[14px] border-black shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col group">

<div className="absolute top-2 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-full z-50 flex items-center justify-end px-3">
<div className="w-2.5 h-2.5 rounded-full bg-[#0a0a0a] border border-white/5"></div>
</div>

<div className="flex-1 bg-gradient-to-b from-[#0a0f18] via-[#111a26] to-[#1e3246] relative flex flex-col overflow-hidden">

<div className="pt-20 px-6 flex-1 flex flex-col">

<div className="mb-auto">
<h3 className="font-heading font-medium tracking-tight text-white text-2xl leading-snug">
                                Meet NovaBot,<br/>
<span className="text-gray-400">Your Smart Assistant for</span> <br/>
<span className="text-white">24/7 Team Productivity.</span>
</h3>
</div>

<div className="mt-8 mb-6 relative z-10">
<div className="grid grid-cols-2 gap-3">

<div className="bg-white/[0.06] hover:bg-white/[0.09] transition-colors border border-white/[0.08] backdrop-blur-md rounded-2xl p-4 flex flex-col justify-between aspect-[1.1/1] cursor-pointer">
<iconify-icon className="text-xl text-gray-300" icon="solar:chart-square-linear"></iconify-icon>
<div>
<div className="text-sm font-medium text-white tracking-tight mb-0.5">Process Data</div>
<div className="text-xs text-gray-400">/ Real-time metrics</div>
</div>
</div>

<div className="bg-white/[0.06] hover:bg-white/[0.09] transition-colors border border-white/[0.08] backdrop-blur-md rounded-2xl p-4 flex flex-col justify-between aspect-[1.1/1] cursor-pointer">
<iconify-icon className="text-xl text-gray-300" icon="solar:document-text-linear"></iconify-icon>
<div>
<div className="text-sm font-medium text-white tracking-tight mb-0.5">Compliance</div>
<div className="text-xs text-gray-400">&amp; Reporting</div>
</div>
</div>

<div className="bg-white/[0.06] hover:bg-white/[0.09] transition-colors border border-white/[0.08] backdrop-blur-md rounded-2xl p-4 flex flex-col justify-between aspect-[1.1/1] cursor-pointer">
<iconify-icon className="text-xl text-gray-300" icon="solar:calendar-linear"></iconify-icon>
<div>
<div className="text-sm font-medium text-white tracking-tight mb-0.5">Organizing</div>
<div className="text-xs text-gray-400">Calendars</div>
</div>
</div>

<div className="bg-white/[0.06] hover:bg-white/[0.09] transition-colors border border-white/[0.08] backdrop-blur-md rounded-2xl p-4 flex flex-col justify-between aspect-[1.1/1] cursor-pointer">
<iconify-icon className="text-xl text-gray-300" icon="solar:settings-linear"></iconify-icon>
<div>
<div className="text-sm font-medium text-white tracking-tight mb-0.5">Advanced</div>
<div className="text-xs text-gray-400">Workflows</div>
</div>
</div>
</div>
</div>
</div>

<div className="px-5 pb-8 relative z-20">
<div className="w-full bg-[#0f1923]/80 backdrop-blur-xl border border-white/10 rounded-full py-2.5 pl-4 pr-2.5 flex items-center gap-3">
<button className="text-gray-400 hover:text-white transition-colors flex-shrink-0">
<iconify-icon className="text-xl" icon="solar:add-circle-linear"></iconify-icon>
</button>
<div className="w-px h-5 bg-white/20 flex-shrink-0"></div>
<input className="bg-transparent border-none outline-none text-sm font-medium text-white placeholder:text-gray-500 flex-1 w-full" placeholder="Enter a command..." readonly="" type="text"/>
<button className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-white text-base ml-0.5 mt-0.5" icon="solar:plain-2-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>
</main>





    </>
  );
}
