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



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


    // Scroll Animation Observer
    document.addEventListener('DOMContentLoaded', () => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Only animate once
                }
            });
        }, observerOptions);

        document.querySelectorAll('.scroll-animate').forEach(el => observer.observe(el));
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="yWZ2Tbe094Fsjgy9NRnD"></div>

</div></div>

<nav className="fixed bg-[#020617]/80 w-full z-50 border-b top-0 backdrop-blur-md border-white/5">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-3 group cursor-pointer">
<div className="flex shadow-cyan-500/20 bg-gradient-to-tr from-cyan-500 w-8 h-8 rounded-lg relative shadow-lg items-center justify-center to-blue-600">
<svg className="text-white" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v20M2 12h20"></path><circle className="" cx="12" cy="12" r="10"></circle><path d="m4.93 4.93 14.14 14.14"></path><path d="m19.07 4.93-14.14 14.14"></path></svg>
</div>
<span className="text-lg font-semibold tracking-tight group-hover:text-cyan-400 transition-colors text-white">NexOperandi</span>
</div>
<div className="hidden md:flex gap-8 text-sm font-medium text-slate-400 gap-x-8 gap-y-8 items-center">
<a className="transition-colors hover:text-white" href="#">Results</a><a className="transition-colors hover:text-white" href="#">How it works</a><a className="transition-colors hover:text-white" href="#">About Us</a><a className="transition-colors hover:text-white" href="#">Pricing</a>
<a className="transition-colors hover:text-white" href="#">Contact</a>
</div>
<div className="flex items-center gap-6">
<button className="hidden md:flex items-center gap-2 text-sm font-medium transition-colors group/lang text-slate-400 hover:text-white">
<svg className="text-slate-500 group-hover/lang:text-white transition-colors" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="2" x2="22" y1="12" y2="12"></line><path className="" d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
<span className="">EN</span>
</button>
<div className="flex items-center gap-4">
<button className="hidden md:flex gap-2 transition-all hover:border-cyan-500/50 group text-xs font-semibold tracking-wide border rounded-full pt-2.5 pr-5 pb-2.5 pl-5 gap-x-2 gap-y-2 items-center hover:bg-white/10 text-white bg-white/5 border-white/10">
                        Book Strategy Call
                        <svg className="group-hover:translate-x-0.5 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16M14 6l6 6-6 6"></path></svg>
</button>
<button className="md:hidden text-white">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 7h16M4 12h16M4 17h16"></path></svg>
</button>
</div>
</div>
</div>
</nav>

<section className="min-h-screen flex overflow-hidden pt-32 pb-20 relative items-center">

<div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
</div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full hero-glow pointer-events-none"></div>
<div className="grid lg:grid-cols-2 z-10 w-full max-w-7xl mr-auto ml-auto pr-6 pl-6 relative gap-x-16 gap-y-16 items-center">

<div className="order-2 lg:order-1 max-w-2xl space-y-8">
<div className="inline-flex gap-2 uppercase text-xs font-semibold tracking-wider border-cyan-500/20 border rounded-full pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center text-cyan-400 bg-cyan-950/30">Serving clients worldwide<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-cyan-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</span></div>
<h1 className="leading-[1.1] lg:text-6xl text-3xl font-medium text-white tracking-tight">Build. Scale. Dominate. <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">AI automation</span> for ambitious businesses</h1>
<p className="leading-relaxed text-lg font-light text-slate-100 max-w-lg">We construct digital brains that ingest data, process logic, and execute workflows autonomously. A complete cognitive overhaul for your enterprise.</p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<button className="transition-all transform hover:-translate-y-0.5 hover:bg-white text-base font-semibold text-slate-950 tracking-tight bg-slate-50 rounded-full pt-4 pr-8 pb-4 pl-8 shadow-[0_0_20px_rgba(255,255,255,0.3)]">Contact Us</button>
</div>
</div>

<div className="flex lg:justify-end order-1 lg:order-2 w-full h-[600px] relative items-center justify-center">

<div className="flex w-full h-[500px] max-w-[500px] relative items-center justify-center">

<svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewbox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient gradientunits="userSpaceOnUse" id="pipe-grad" x1="250" x2="100" y1="250" y2="100">
<stop offset="0" stop-color="#38bdf8" stop-opacity="0.6"></stop>
<stop offset="1" stop-color="#38bdf8" stop-opacity="0.1"></stop>
</lineargradient>
</defs>

<path className="animate-radiate" d="M250,250 L80,110" stroke="url(#pipe-grad)" strokeWidth="1" style={{animationDuration: '4s'}}></path>
<path className="animate-radiate" d="M250,250 L420,80" stroke="url(#pipe-grad)" strokeWidth="1" style={{animationDelay: '-1s', animationDuration: '5s'}}></path>
<path className="animate-radiate" d="M250,250 L440,320" stroke="url(#pipe-grad)" strokeWidth="1" style={{animationDelay: '-0.5s', animationDuration: '3s'}}></path>
<path className="animate-radiate" d="M250,250 L100,400" stroke="url(#pipe-grad)" strokeWidth="1" style={{animationDelay: '-2s', animationDuration: '4.5s'}}></path>
</svg>

<div className="relative z-30 w-52 h-52 brain-container rounded-3xl flex items-center justify-center group transform transition-transform duration-700 hover:scale-105 border border-cyan-500/20">

<div className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t-2 border-l-2 rounded-tl-xl border-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
<div className="absolute -top-[1px] -right-[1px] w-4 h-4 border-t-2 border-r-2 rounded-tr-xl border-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
<div className="absolute -bottom-[1px] -left-[1px] w-4 h-4 border-b-2 border-l-2 rounded-bl-xl border-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
<div className="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b-2 border-r-2 rounded-br-xl border-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>

<div className="absolute inset-0 overflow-hidden rounded-3xl z-30 opacity-40 pointer-events-none">
<div className="brain-scan-line"></div>
</div>

<div className="relative w-[88%] h-[88%] rounded-2xl overflow-hidden bg-[#020617] flex items-center justify-center border border-white/5">
<div className="absolute inset-0 mix-blend-overlay z-10 bg-cyan-900/30"></div>
<img alt="Digital Brain" className="contrast-125 saturate-0 opacity-90 w-full h-full object-cover z-20 scale-125" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ac42a84a-34b5-4e2b-b355-d1db2c063633_800w.png"/>
<div className="z-20 opacity-20 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-40">
<div className="bg-[#020617] border border-cyan-500/30 px-3 py-1 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.3)] flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></div>
<span className="text-[10px] font-mono font-bold text-cyan-400 tracking-[0.1em] uppercase whitespace-nowrap">System Core</span>
</div>
</div>
</div>


<div className="absolute top-[8%] left-[0%] sm:-left-[5%] animate-float-delayed z-20">
<div className="glass-card flex gap-3 w-40 rounded-xl p-3 items-center border-l-2 border-l-blue-500">
<div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20 shrink-0">
<svg className="text-blue-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
</div>
<div className="flex flex-col min-w-0">
<span className="text-[9px] text-blue-400 uppercase font-bold tracking-wider">Input</span>
<span className="text-[12px] font-medium text-slate-200 truncate">Raw Data</span>
</div>
</div>
</div>

<div className="absolute top-[0%] right-[0%] sm:-right-[5%] animate-float z-20">
<div className="glass-card p-3 rounded-xl border-l-2 border-l-cyan-500 flex items-center gap-3 w-44 shadow-lg shadow-cyan-900/20">
<div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 shrink-0">
<svg className="text-cyan-400 animate-spin-slow" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{animationDuration: '3s'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="2" y2="6"></line><line x1="12" x2="12" y1="18" y2="22"></line><line x1="4.93" x2="7.76" y1="4.93" y2="7.76"></line><line x1="16.24" x2="19.07" y1="16.24" y2="19.07"></line><line x1="2" x2="6" y1="12" y2="12"></line><line x1="18" x2="22" y1="12" y2="12"></line><line x1="4.93" x2="7.76" y1="19.07" y2="16.24"></line><line x1="16.24" x2="19.07" y1="7.76" y2="4.93"></line></svg>
</div>
<div className="flex flex-col min-w-0">
<span className="text-[9px] text-cyan-400 uppercase font-bold tracking-wider">Logic</span>
<span className="text-[12px] font-medium text-slate-200 truncate">AI Agent</span>
</div>
</div>
</div>

<div className="animate-float-delayed absolute bottom-[15%] right-[0%] sm:-right-[8%] z-20">
<div className="glass-card p-3 rounded-xl border-l-2 border-l-indigo-500 flex items-center gap-3 w-40">
<div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 shrink-0">
<svg className="text-indigo-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12l5 5 9-9"></path><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
</div>
<div className="flex flex-col min-w-0">
<span className="text-[9px] text-indigo-400 uppercase font-bold tracking-wider">Output</span>
<span className="text-[12px] font-medium text-slate-200 truncate">Execution</span>
</div>
</div>
</div>

<div className="absolute bottom-[5%] left-[0%] sm:-left-[5%] animate-float z-20">
<div className="glass-card p-3 rounded-xl border-l-2 border-l-emerald-500 flex items-center gap-3 w-44">
<div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 shrink-0">
<svg className="text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" x2="12" y1="3" y2="15"></line></svg>
</div>
<div className="flex flex-col min-w-0">
<span className="text-[9px] text-emerald-400 uppercase font-bold tracking-wider">Sync</span>
<span className="text-[12px] font-medium text-slate-200 truncate">Cloud Db</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#020617] border-y border-slate-900/50 relative overflow-hidden">
<div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-900/10 to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8">
<div className="inline-flex items-center gap-2 text-cyan-400 font-medium text-sm tracking-wide uppercase">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
                        Programmable Intelligence
                    </div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white leading-[1.2]">
                        We engineer the logic.
                        <span className="text-slate-500">You reap the results.</span>
</h2>
<p className="text-lg text-slate-400 leading-relaxed font-light">
                        Our methodology involves deeply understanding your business logic and encoding it into sophisticated system prompts. We don't just "use AI"; we architect custom cognitive layers that sit on top of your existing stack.
                    </p>
<div className="space-y-6 pt-4">
<div className="flex gap-4">
<div className="w-12 h-12 rounded-xl bg-slate-800/50 border border-slate-700 flex items-center justify-center shrink-0">
<svg className="text-cyan-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path></svg>
</div>
<div className="">
<h4 className="text-white font-semibold text-base mb-1">Prompt Engineering</h4>
<p className="text-sm text-slate-400 leading-relaxed">Advanced chain-of-thought prompting to ensure high-fidelity outputs and strict adherence to brand guidelines.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 rounded-xl bg-slate-800/50 border border-slate-700 flex items-center justify-center shrink-0">
<svg className="text-blue-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" x2="12" y1="22.08" y2="12"></line></svg>
</div>
<div>
<h4 className="text-white font-semibold text-base mb-1">Modular Integration</h4>
<p className="text-sm text-slate-400 leading-relaxed">Connects seamlessly with CRM, Database, and API endpoints without disrupting your current workflow.</p>
</div>
</div>
</div>
</div>

<div className="relative group">

<div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
<div className="relative bg-[#0F1117] rounded-xl border border-slate-800 overflow-hidden shadow-2xl">

<div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-slate-800">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/80"></div>
<div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
<div className="w-3 h-3 rounded-full bg-green-500/80"></div>
</div>
<div className="flex gap-4 text-[11px] font-mono text-slate-500">
<div className="flex items-center gap-1.5 text-slate-300 bg-[#0F1117] px-3 py-1 rounded-t border-t border-l border-r border-slate-800 -mb-3.5 relative z-10">
<svg className="text-blue-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path></svg>
                                    system_prompt.md
                                </div>
<div className="flex items-center gap-1.5 hover:text-slate-300 cursor-pointer transition-colors">
<svg className="text-yellow-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M16.5 9.4 7.55 4.24"></path><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><line x1="12" x2="12" y1="22" y2="12"></line></svg>
                                    agent_config.py
                                </div>
</div>
<div className="opacity-0 sm:opacity-100 text-[10px] text-slate-600 font-mono">
                                UTF-8
                            </div>
</div>

<div className="p-6 font-geist-mono text-xs md:text-sm leading-7 overflow-x-auto">

<div className="flex">
<span className="w-8 text-slate-700 select-none text-right pr-3">1</span>
<span className="syntax-keyword">### ROLE DEFINITION</span>
</div>

<div className="flex">
<span className="w-8 text-slate-700 select-none text-right pr-3">2</span>
<span className="">You are <span className="syntax-string">"NexAgent"</span>, an autonomous specialist.</span>
</div>

<div className="flex">
<span className="w-8 text-slate-700 select-none text-right pr-3">3</span>
<span>Your goal is to <span className="syntax-func">analyze_inbound_leads()</span> and score them.</span>
</div>

<div className="flex">
<span className="w-8 text-slate-700 select-none text-right pr-3">4</span>
<span className="text-transparent">.</span>
</div>

<div className="flex">
<span className="w-8 text-slate-700 select-none text-right pr-3">5</span>
<span className="syntax-keyword">### CONSTRAINTS</span>
</div>

<div className="flex">
<span className="w-8 text-slate-700 select-none text-right pr-3">6</span>
<span className="">- Maintain a professional, empathetic tone.</span>
</div>

<div className="flex">
<span className="w-8 text-slate-700 select-none text-right pr-3">7</span>
<span>- If Budget &lt; 5000: <span className="syntax-func">route_to_email_nurture()</span></span>
</div>

<div className="flex">
<span className="w-8 text-slate-700 select-none text-right pr-3">8</span>
<span>- If Budget &gt; 5000: <span className="syntax-func">schedule_meeting(priority="HIGH")</span></span>
</div>

<div className="flex">
<span className="w-8 text-slate-700 select-none text-right pr-3">9</span>
<span className="text-transparent">.</span>
</div>

<div className="flex">
<span className="w-8 text-slate-700 select-none text-right pr-3">10</span>
<span className="syntax-keyword">### CONTEXT INJECTION</span>
</div>

<div className="flex">
<span className="w-8 text-slate-700 select-none text-right pr-3">11</span>
<span className="syntax-comment">// Loading recent company case studies...</span>
</div>

<div className="flex">
<span className="w-8 text-slate-700 select-none text-right pr-3">12</span>
<span>Use knowledge_base <span className="typing-cursor"></span></span>
</div>
</div>

<div className="bg-[#161b22] py-1 px-3 flex justify-between items-center border-t border-slate-800">
<div className="flex gap-3">
<span className="text-[10px] text-cyan-400 flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div> Connected</span>
<span className="text-[10px] text-slate-500">Ln 12, Col 24</span>
</div>
<div className="text-[10px] text-slate-500 font-mono">JavaScript / Python</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-[#020617] pt-32 pb-32 relative">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent to-transparent opacity-50 via-slate-800"></div>
<div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>
<div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none bg-blue-600/5"></div>
<div className="max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative">
<div className="text-center max-w-3xl mx-auto mb-20">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 text-white">
                    Real Impact. <span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-500 from-cyan-400">Measurable Scale.</span>
</h2>
<p className="text-xl font-light text-slate-400">We don't just optimize. We transform operations.</p>
</div>
<div className="grid lg:grid-cols-3 relative shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] perspective-distant gap-x-6 gap-y-6">

<div className="group relative flex flex-col h-full rounded-3xl border backdrop-blur-[40px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] transition-all duration-500 hover:border-blue-500/30 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(59,130,246,0.1)] overflow-hidden border-slate-800 bg-slate-900/40">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
<div className="flex flex-col z-10 h-full p-8 relative">
<div className="mb-6">
<div className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider shadow-[0_0_15px_-5px_rgba(59,130,246,0.5)] text-blue-300">
<span className="relative flex h-1.5 w-1.5 mr-1">
<span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 bg-blue-400"></span>
<span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-blue-400"></span>
</span>
                                Customer Success
                            </div>
</div>
<div className="mb-6">
<h3 className="group-hover:text-blue-200 transition-colors text-2xl font-semibold tracking-tight mb-2 text-white">-30–60% support cost</h3>
<p className="text-sm font-medium text-blue-200/80">Faster onboarding &amp; shorter response times</p>
</div>
<p className="text-sm font-light leading-relaxed mb-8 border-l-2 border-blue-500/20 pl-4 group-hover:border-blue-500/40 transition-colors text-slate-400">
                            AI assistant guides new customers step by step from day one and handles first-line support. It answers simple questions, organizes tickets, collects data needed to launch the service, and escalates complex issues to the right people on your team.
                        </p>
<div className="mt-auto space-y-6 pt-6 border-t border-white/5">
<div className="">
<h4 className="text-[10px] font-semibold uppercase tracking-widest text-slate-500 mb-1 group-hover:text-blue-400/80 transition-colors">Time to Results</h4>
<p className="text-sm font-bold text-blue-400">2–4 weeks</p>
</div>
</div>
</div>
</div>

<div className="group relative flex flex-col h-full rounded-3xl border backdrop-blur-[40px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] transition-all duration-500 hover:border-amber-500/30 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(245,158,11,0.1)] overflow-hidden border-slate-800 bg-slate-900/40">
<div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
<div className="flex flex-col z-10 h-full p-8 relative">
<div className="mb-6">
<div className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/20 bg-amber-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider shadow-[0_0_15px_-5px_rgba(245,158,11,0.5)] text-amber-300">
<span className="relative flex h-1.5 w-1.5 mr-1">
<span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 bg-amber-400"></span>
<span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-amber-400"></span>
</span>
                                Sales • Global
                            </div>
</div>
<div className="mb-6">
<h3 className="group-hover:text-amber-200 transition-colors text-2xl font-semibold tracking-tight mb-2 text-white">+25–40% sales opportunities</h3>
<p className="text-sm font-medium text-amber-200/80">Higher conversion rates &amp; 24/7 lead engagement</p>
</div>
<p className="leading-relaxed group-hover:border-amber-500/40 transition-colors text-sm font-light border-amber-500/20 border-l-2 mb-8 pl-4 text-slate-400">The AI assistant engages inbound leads instantly 24/7, conducting natural language conversations to qualify intent and budget. It automatically enriches contact profiles with external data.</p>
<div className="mt-auto space-y-6 pt-6 border-t border-white/5">
<div className="">
<h4 className="text-[10px] font-semibold uppercase tracking-widest text-slate-500 mb-1 group-hover:text-amber-400/80 transition-colors">Time to Results</h4>
<p className="text-sm font-bold text-amber-400">3–5 weeks</p>
</div>
</div>
</div>
</div>

<div className="group relative flex flex-col h-full rounded-3xl border backdrop-blur-[40px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] transition-all duration-500 hover:border-fuchsia-500/30 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(217,70,239,0.1)] overflow-hidden border-slate-800 bg-slate-900/40">
<div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
<div className="flex flex-col z-10 h-full p-8 relative">
<div className="mb-6">
<div className="inline-flex items-center gap-1.5 rounded-full border border-fuchsia-500/20 bg-fuchsia-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider shadow-[0_0_15px_-5px_rgba(217,70,239,0.5)] text-fuchsia-300">
<span className="relative flex h-1.5 w-1.5 mr-1">
<span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 bg-fuchsia-400"></span>
<span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-fuchsia-400"></span>
</span>
                                Marketing &amp; Content
                            </div>
</div>
<div className="mb-6">
<h3 className="text-2xl font-semibold tracking-tight mb-2 group-hover:text-fuchsia-200 transition-colors text-white">+50% content velocity</h3>
<p className="text-sm font-medium text-fuchsia-200/80">Consistent brand voice &amp; automated distribution</p>
</div>
<p className="text-sm font-light leading-relaxed mb-8 border-l-2 border-fuchsia-500/20 pl-4 group-hover:border-fuchsia-500/40 transition-colors text-slate-400">
                            AI assistant creates LinkedIn, Instagram, X/Twitter posts and newsletters tailored to your brand and audience. It helps B2B companies and creators alike – from research and topic ideas to drafts.
                        </p>
<div className="mt-auto space-y-6 pt-6 border-t border-white/5">
<div className="">
<h4 className="text-[10px] font-semibold uppercase tracking-widest text-slate-500 mb-1 group-hover:text-fuchsia-400/80 transition-colors">Time to Results</h4>
<p className="text-sm font-bold text-fuchsia-400">2–4 weeks</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#020617] border-t border-slate-900/50 relative overflow-hidden">

<div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="absolute right-0 bottom-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="space-y-8">
<h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white leading-[1.1]">
                        Engineering Precision.
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-amber-400">Designer Soul.</span>
</h2>
<p className="text-lg md:text-xl font-light text-slate-400 leading-relaxed max-w-lg">
                        We are a collective of obsessed developers, creative designers, and strategic thinkers. We don't just write code—we craft experiences. While our engineers ensure military-grade stability, our designers ensure your automation feels human, intuitive, and flawless. We build systems that work beautifully.
                    </p>
<div className="pt-8 border-t border-slate-800/60">
<h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500 mb-6">Our Workspace</h4>
<div className="flex flex-wrap gap-4">

<div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-800 bg-slate-900/50 text-slate-300 text-xs font-mono">
<svg className="text-blue-400" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                                VS Code
                            </div>

<div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-800 bg-slate-900/50 text-slate-300 text-xs font-mono">
<svg className="text-fuchsia-400" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="m2 2 7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>
                                Figma
                            </div>

<div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-800 bg-slate-900/50 text-slate-300 text-xs font-mono">
<svg className="text-amber-400" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                                Strategy NB
                            </div>
</div>
</div>
</div>

<div className="space-y-6">

<div className="p-6 rounded-2xl border border-slate-800 bg-[#0A0F1E] hover:border-cyan-500/30 transition-colors group">
<div className="flex items-start gap-5">
<div className="w-12 h-12 rounded-xl bg-cyan-950/30 border border-cyan-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
<svg className="text-cyan-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M9 14l2 2 4-4"></path></svg>
</div>
<div className="">
<h3 className="text-lg font-medium text-white mb-2">Engineering Core</h3>
<p className="text-sm text-slate-400 leading-relaxed">Military-grade stability. We build self-healing systems prepared for massive scale.</p>
</div>
</div>
</div>

<div className="p-6 rounded-2xl border border-slate-800 bg-[#0A0F1E] hover:border-fuchsia-500/30 transition-colors group relative overflow-hidden">
<div className="absolute inset-0 bg-fuchsia-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex items-start gap-5 relative z-10">
<div className="w-12 h-12 rounded-xl bg-fuchsia-950/30 border border-fuchsia-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
<svg className="text-fuchsia-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="m2 2 7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>
</div>
<div>
<h3 className="text-lg font-medium text-white mb-2">Creative Studio</h3>
<p className="text-sm text-slate-400 leading-relaxed">Obsessing over every interaction. Automation shouldn't feel robotic—it should feel magical.</p>
</div>
</div>
</div>

<div className="p-6 rounded-2xl border border-slate-800 bg-[#0A0F1E] hover:border-amber-500/30 transition-colors group">
<div className="flex items-start gap-5">
<div className="w-12 h-12 rounded-xl bg-amber-950/30 border border-amber-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
<svg className="text-amber-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="20" y2="10"></line><line x1="18" x2="18" y1="20" y2="4"></line><line x1="6" x2="6" y1="20" y2="16"></line></svg>
</div>
<div>
<h3 className="text-lg font-medium text-white mb-2">Strategy Lab</h3>
<p className="text-sm text-slate-400 leading-relaxed">Aligning tech with revenue. We ensure ROI from Day 1.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#020617] border-slate-900/50 border-t pt-32 pb-32 relative">
<div className="max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 text-white">Choose your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Scale</span></h2>
<p className="text-xl font-light text-slate-400 max-w-2xl mr-auto ml-auto">Flexible structures designed to grow with your ambition.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

<div className="scroll-animate group relative flex flex-col h-full rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm p-8 hover:scale-105 transition-transform duration-300 hover:shadow-[0_20px_40px_-10px_rgba(59,130,246,0.1)] hover:border-blue-500/30">
<div className="mb-6 space-y-2">
<h3 className="text-2xl font-semibold text-white tracking-tight">The Conversion Core</h3>
<p className="text-sm font-medium text-blue-400 uppercase tracking-wider">For Operations &amp; Support</p>
</div>
<p className="text-slate-400 text-sm leading-relaxed mb-8">Turn your traffic into revenue. We automate the boring stuff so you never miss a lead again.</p>

<div className="mb-8">
<div className="flex items-baseline gap-1">
<span className="text-4xl font-bold text-white tracking-tight">$147</span>
<span className="text-base font-medium text-slate-500">/ mo</span>
</div>
<p className="text-xs font-medium text-slate-500 mt-2">+ One-time Setup Fee</p>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-slate-300 text-sm">
<svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                            24/7 AI Receptionist
                        </li>
<li className="flex items-center gap-3 text-slate-300 text-sm">
<svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                            Instant Lead Qualification
                        </li>
<li className="flex items-center gap-3 text-slate-300 text-sm">
<svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                            CRM Sync
                        </li>
<li className="flex items-center gap-3 text-slate-300 text-sm">
<svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                            Review Automation
                        </li>
</ul>
<button className="w-full py-3 rounded-lg border border-slate-700 text-slate-300 font-semibold text-sm hover:bg-slate-800 transition-colors">Automate Operations</button>
</div>

<div className="scroll-animate group relative flex flex-col h-full rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm p-8 hover:scale-105 transition-transform duration-300 hover:shadow-[0_20px_40px_-10px_rgba(217,70,239,0.1)] hover:border-fuchsia-500/30" style={{transitionDelay: '100ms'}}>
<div className="mb-6 space-y-2">
<h3 className="text-2xl font-semibold text-white tracking-tight">The Visibility Engine</h3>
<p className="text-sm font-medium text-fuchsia-400 uppercase tracking-wider">For Content &amp; Outreach</p>
</div>
<p className="text-slate-400 text-sm leading-relaxed mb-8">Be everywhere, all at once. An automated content machine that keeps your brand top-of-mind.</p>

<div className="mb-8">
<div className="flex items-baseline gap-1">
<span className="text-4xl font-bold text-white tracking-tight">$497</span>
<span className="text-base font-medium text-slate-500">/ mo</span>
</div>
<p className="text-xs font-medium text-slate-500 mt-2">No Setup Fee • Cancel anytime</p>
</div>
<ul className="flex-1 mb-8 space-y-4">
<li className="flex text-sm text-slate-300 gap-x-3 gap-y-3 items-center">
<svg className="flex-shrink-0 w-[20px] h-[20px]" fill="none" stroke="currentColor" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(217, 70, 239)'}} viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
        SEO Blog Autopilot
    </li>
<li className="flex gap-3 text-sm text-slate-300 gap-x-3 gap-y-3 items-center">
<svg className="w-5 h-5 text-fuchsia-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
        Newsletter System
    </li>
<li className="flex gap-3 text-sm text-slate-300 gap-x-3 gap-y-3 items-center">
<svg className="w-5 h-5 text-fuchsia-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
        Video-to-Text Workflow
    </li>
<li className="flex gap-3 text-sm text-slate-300 gap-x-3 gap-y-3 items-center">
<svg className="w-5 h-5 text-fuchsia-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
        Multiplatform context generation
    </li>
</ul>
<button className="w-full py-3 rounded-lg border border-slate-700 text-slate-300 font-semibold text-sm hover:bg-slate-800 transition-colors">Automate Marketing</button>
</div>

<div className="scroll-animate group relative flex flex-col h-full rounded-2xl border border-cyan-500/40 bg-slate-900/60 backdrop-blur-sm p-8 hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_-5px_rgba(6,182,212,0.15)] ring-1 ring-cyan-500/20" style={{transitionDelay: '200ms'}}>
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                        Best Value
                    </div>
<div className="mb-6 space-y-2">
<h3 className="text-2xl font-semibold text-white tracking-tight">The Growth Ecosystem</h3>
<p className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 uppercase tracking-wider">Operations + Marketing</p>
</div>
<p className="text-slate-300 text-sm leading-relaxed mb-8">The complete Business-in-a-Box solution. Scale your traffic and handle the influx of leads.</p>

<div className="mb-8">
<div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-2">
<div className="flex items-baseline gap-1">
<span className="text-4xl font-bold text-white tracking-tight">$697</span>
<span className="text-base font-medium text-blue-200/60">/ mo</span>
</div>
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 tracking-wide uppercase">
                                Save $800 on Setup
                             </span>
</div>
<p className="text-xs font-medium text-blue-200/80">All-inclusive Pilot Rate</p>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-white text-sm">
<div className="bg-cyan-500/20 p-0.5 rounded-full"><svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg></div>
                            Everything in Conversion Core
                        </li>
<li className="flex items-center gap-3 text-white text-sm">
<div className="bg-cyan-500/20 p-0.5 rounded-full"><svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg></div>
                            Everything in Visibility Engine
                        </li>
<li className="flex items-center gap-3 text-white text-sm">
<div className="bg-cyan-500/20 p-0.5 rounded-full"><svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg></div>
                            Priority Support
                        </li>
<li className="flex items-center gap-3 text-white text-sm">
<div className="bg-cyan-500/20 p-0.5 rounded-full"><svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg></div>
                            Unified Dashboard
                        </li>
</ul>
<button className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold text-sm hover:shadow-lg hover:shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5">Get The Full System</button>
</div>
</div>

<div className="scroll-animate mt-20 rounded-2xl bg-gradient-to-r from-[#0B1120] to-[#0f172a] border border-slate-800 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group">

<div className="absolute -right-20 -top-20 w-64 h-64 bg-slate-700/20 rounded-full blur-3xl group-hover:bg-slate-600/20 transition-colors"></div>
<div className="relative z-10 max-w-xl text-center md:text-left">
<h3 className="text-2xl md:text-3xl font-semibold text-white mb-3">Needs are more complex? Let’s build Custom.</h3>
<p className="text-slate-400 text-sm md:text-base leading-relaxed">We build custom AI architectures for enterprise workflows, internal training bots, and proprietary data security.</p>
</div>
<div className="relative z-10 flex-shrink-0">
<button className="px-8 py-4 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold border border-slate-700 transition-all hover:border-slate-500">Book Architecture Audit</button>
</div>
</div>
</div>
</section>

<section className="bg-[#020617] border-t pt-24 pb-24 relative border-slate-900">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="md:p-12 bg-gradient-to-b max-w-6xl border rounded-2xl mr-auto ml-auto pt-8 pr-8 pb-8 pl-8 from-slate-900 to-slate-950 border-slate-800">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">Work With Us</h2>
</div>
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start text-left">
<div className="space-y-10 lg:pt-4">
<div>
<h3 className="text-xl font-bold mb-4 text-white">Have Questions?</h3>
<p className="leading-relaxed max-w-md text-slate-400 text-lg font-light">Not ready for a call yet? Send us a message and we'll get back to you within 24 hours.</p>
</div>
<div className="space-y-6">
<div className="flex items-center gap-4 group">
<div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded bg-blue-500/10 text-blue-500">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
</div>
<span className="text-base text-slate-300">contact@nexoperandi.cloud</span>
</div>
<div className="flex items-center gap-4 group">
<div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded bg-blue-500/10 text-blue-500">
<svg className="lucide lucide-clock" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
</div>
<span className="text-base text-slate-300">Response time: &lt; 24 hours</span>
</div>
</div>
</div>
<div className="border rounded-2xl p-6 md:p-10 backdrop-blur-sm shadow-xl bg-slate-900/40 border-slate-800 shadow-black/20">
<form className="space-y-6">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="block text-sm font-medium text-slate-200">What is your name? <span className="text-red-500">*</span></label>
<input className="w-full border rounded-lg px-4 py-3 placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm bg-slate-950 border-slate-800 text-slate-200" placeholder="Your full name" type="text"/>
</div>
<div className="space-y-2">
<label className="block text-sm font-medium text-slate-200">What is your email? <span className="text-red-500">*</span></label>
<input className="w-full border rounded-lg px-4 py-3 placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm bg-slate-950 border-slate-800 text-slate-200" placeholder="your@email.com" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="block text-sm font-medium text-slate-200">What is your company website?</label>
<input className="w-full border rounded-lg px-4 py-3 placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm bg-slate-950 border-slate-800 text-slate-200" placeholder="e.g. https://nexoperandi.com" type="text"/>
</div>
<div className="space-y-2">
<label className="block text-sm font-medium text-slate-200">What can we help you with? <span className="text-red-500">*</span></label>
<textarea className="w-full border rounded-lg px-4 py-3 placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm bg-slate-950 border-slate-800 text-slate-200 resize-none" placeholder="Tell us about your project, goals, or how we can help you..." rows="4"></textarea>
</div>
<button className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-bold text-sm transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transform hover:-translate-y-0.5" type="button">
                                Send Message
                            </button>
<div className="pt-2 text-center">
<p className="text-sm text-slate-400">Prefer to talk?</p>
<a className="inline-flex items-center gap-1 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors mt-1" href="#">
                                    Book a free 20-min call
                                    <svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</form>
</div>
</div>
</div>
<div className="mt-20 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-6 border-slate-900/50">
<p className="text-xs text-slate-600">© 2024 NexOperandi Inc.</p>
<div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest text-slate-600">
<a className="transition-colors hover:text-slate-400" href="#">Twitter</a>
<a className="transition-colors hover:text-slate-400" href="#">LinkedIn</a>
</div>
</div>
</div>
</section>


    </>
  );
}
