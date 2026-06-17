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
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
<div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-orange-100/40 blur-[100px] mix-blend-multiply animate-float" style={{}}></div>
<div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-stone-200/40 blur-[100px] mix-blend-multiply" style={{animationDelay: '2s'}}></div>
</div>

<nav className="fixed top-0 w-full z-50 organic-glass border-b border-stone-200/50" style={{}}>
<div className="flex h-16 max-w-6xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-8">
<a className="flex items-center gap-2 group" href="#">

<div className="w-8 h-8 bg-stone-800 rounded-full flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-500" style={{}}>
<span className="font-serif text-stone-100 italic font-semibold text-lg pb-1 pr-0.5 font-sans" style={{}}>W</span>
</div>
<span className="font-serif font-semibold tracking-tight text-lg text-stone-800 font-sans" style={{}}>Wayan</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium tracking-wide transition-colors text-stone-500 hover:text-stone-800 font-sans" href="#" style={{}}>Philosophy</a>
<a className="text-xs font-medium tracking-wide transition-colors text-stone-500 hover:text-stone-800 font-sans" href="#" style={{}}>Craft</a>
<a className="text-xs font-medium tracking-wide transition-colors text-stone-500 hover:text-stone-800 font-sans" href="#" style={{}}>Stories</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="text-xs font-medium tracking-wide transition-colors hidden sm:block text-stone-600 hover:text-stone-900 font-sans" href="#" style={{}}>Sign in</a>
<a className="text-xs font-medium px-5 py-2 rounded-full transition-all flex items-center gap-2 bg-stone-800 hover:bg-stone-700 text-[#faf9f6] shadow-lg shadow-stone-800/10 hover:shadow-stone-800/20" href="#" style={{}}>
<span className="font-sans">Begin Journey</span>
</a>
</div>
</div>
</nav>

<main className="z-10 pt-36 pr-6 pb-24 pl-6 relative">
<div className="max-w-4xl mx-auto text-center mb-20">

<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-8 border-stone-200 bg-white/50 backdrop-blur-sm shadow-sm" style={{}}>
<span className="w-2 h-2 rounded-full bg-orange-400" style={{}}></span>
<span className="text-xs font-medium tracking-wide text-stone-600 uppercase font-sans" style={{}}>Season 1: Reflection</span>
</div>
<h1 className="md:text-7xl text-5xl text-stone-900 tracking-tight leading-[1.15] mb-8 font-manrope font-medium" style={{}}>
                Stop losing decisions <br className="hidden md:block"/> to <span className="text-stone-500 font-manrope font-medium" style={{}}>the noise.</span>
</h1>
<p className="text-lg md:text-xl font-light max-w-xl mx-auto mb-12 leading-relaxed text-stone-600 font-sans" style={{}}>
                Wayan is a calm workspace for heavy choices. Capture the context, trace the ownership, and cultivate a history of <span className="font-medium text-stone-800 font-sans" style={{}}>why</span>.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="h-12 px-8 text-sm font-medium rounded-full transition-all shadow-xl shadow-stone-900/10 flex items-center gap-2 bg-stone-800 hover:bg-stone-700 hover:scale-105 duration-300 text-[#faf9f6] font-sans" style={{}}>
                    Create Workspace
                    <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<button className="h-12 px-8 text-sm font-medium rounded-full transition-all border border-stone-200 hover:border-stone-300 bg-white/50 hover:bg-white text-stone-700 font-sans" style={{}}>
                    Read the Manifesto
                </button>
</div>
</div>

<div className="max-w-5xl mx-auto relative group perspective-[2000px]">

<div className="absolute -inset-4 bg-gradient-to-b from-stone-200/50 to-orange-100/50 rounded-[2rem] blur-2xl opacity-60" style={{}}></div>

<div className="relative rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col md:flex-row h-[650px] bg-[#faf9f6] border border-white/60 ring-1 ring-stone-900/5" style={{}}>

<div className="w-full md:w-64 flex flex-col hidden md:flex bg-[#f5f5f4] border-r border-stone-200/60" style={{}}>
<div className="p-6 pb-2">
<div className="flex items-center gap-2 mb-6 opacity-70">
<div className="w-3 h-3 rounded-full bg-stone-300" style={{}}></div>
<div className="w-3 h-3 rounded-full bg-stone-300" style={{}}></div>
</div>
<div className="space-y-1">
<div className="px-3 py-2 flex items-center gap-3 rounded-xl bg-white shadow-sm border border-stone-100 text-stone-800" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide text-stone-400" data-icon="lucide:inbox" data-width="16" height="16" role="img" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M22 12h-6l-2 3h-4l-2-3H2"></path><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11"></path></g></svg>
<span className="text-sm font-medium font-sans">Inbox</span>
<span className="ml-auto text-xs bg-stone-200 text-stone-600 px-1.5 py-0.5 rounded-full font-sans" style={{}}>3</span>
</div>
<div className="px-3 py-2 flex items-center gap-3 rounded-xl text-stone-500 transition-colors cursor-pointer hover:bg-stone-200/50 hover:text-stone-700" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide opacity-70" data-icon="lucide:book-open" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zm20 0h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-sm font-sans">Library</span>
</div>
<div className="px-3 py-2 flex items-center gap-3 rounded-xl text-stone-500 transition-colors cursor-pointer hover:bg-stone-200/50 hover:text-stone-700" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide opacity-70" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m12 2l3.09 6.26L22 9.27l-5 4.87l1.18 6.88L12 17.77l-6.18 3.25L7 14.14L2 9.27l6.91-1.01z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-sm font-sans">Favorites</span>
</div>
</div>
</div>
<div className="mt-4 px-6">
<span className="text-[11px] font-semibold uppercase tracking-widest text-stone-400 font-sans" style={{}}>Streams</span>
</div>
<div className="px-4 py-2 space-y-1">
<div className="px-3 py-2 flex items-center gap-3 rounded-xl cursor-pointer hover:bg-stone-200/50 text-stone-600" style={{}}>
<span className="w-2 h-2 rounded-full bg-orange-300" style={{}}></span>
<span className="text-sm font-sans">Product Vision</span>
</div>
<div className="px-3 py-2 flex items-center gap-3 rounded-xl cursor-pointer hover:bg-stone-200/50 text-stone-600" style={{}}>
<span className="w-2 h-2 rounded-full bg-stone-400" style={{}}></span>
<span className="text-sm font-sans">Core Infra</span>
</div>
</div>
<div className="mt-auto p-6 border-t border-stone-200/60" style={{}}>
<div className="flex items-center gap-3">
<img alt="User" className="w-8 h-8 rounded-full border border-white shadow-sm" src="https://i.pravatar.cc/100?img=33"/>
<div className="flex flex-col">
<span className="text-xs font-medium text-stone-800 font-sans" style={{}}>Sarah J.</span>
<span className="text-[10px] text-stone-500 font-sans" style={{}}>Pro Plan</span>
</div>
</div>
</div>
</div>

<div className="flex-1 flex flex-col bg-white">

<div className="h-16 flex items-center justify-between px-8 border-b border-stone-100" style={{}}>
<div className="flex items-center gap-2 text-stone-400 text-xs tracking-wide" style={{}}>
<span className="hover:text-stone-600 cursor-pointer font-sans" style={{}}>Engineering</span>
<span className="opacity-50 font-sans">/</span>
<span className="hover:text-stone-600 cursor-pointer font-sans" style={{}}>Infrastructure</span>
<span className="opacity-50 font-sans">/</span>
<span className="text-stone-800 font-medium font-sans" style={{}}>DEC-1024</span>
</div>
<div className="flex items-center gap-4">
<button className="text-stone-400 hover:text-stone-600 transition-colors" style={{}}><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:share" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v13m4-9l-4-4l-4 4m-4 6v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></button>
<button className="text-stone-400 hover:text-stone-600 transition-colors" style={{}}><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:more-horizontal" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></g></svg></button>
</div>
</div>

<div className="flex-1 p-8 md:p-10 overflow-y-auto custom-scroll">
<div className="max-w-2xl mx-auto">
<div className="mb-10">
<div className="flex flex-wrap items-center gap-4 mb-4">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-stone-200 bg-stone-50 text-[11px] font-semibold uppercase tracking-wider text-stone-600 font-sans" style={{}}>
<div className="w-1.5 h-1.5 rounded-full bg-green-600"></div>
                                        Decided
                                    </span>
<span className="text-stone-400 text-sm font-serif italic font-sans" style={{}}>October 12, 2023</span>
</div>
<h2 className="text-3xl md:text-4xl tracking-tight leading-tight mb-6 text-stone-900 font-manrope font-medium" style={{}}>
                                    Migrate primary database  to Postgres
                                </h2>
<div className="flex items-center gap-3 text-sm text-stone-500 border-b border-stone-100 pb-8" style={{}}>
<img alt="User" className="w-6 h-6 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/100?img=33"/>
<span className="font-sans">Written by <span className="text-stone-800 font-medium font-sans" style={{}}>Sarah Jenkins</span></span>
</div>
</div>

<div className="space-y-10">

<section>
<h3 className="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-4 font-sans" style={{}}>The Context</h3>
<p className="text-[15px] leading-7 text-stone-600 mb-6 font-sans" style={{}}>
                                        Our current NoSQL implementation is causing data consistency issues for the billing service. We need <span className="bg-yellow-100/50 px-1 rounded text-stone-800 font-sans" style={{}}>ACID compliance</span> to ensure financial accuracy as we scale to the enterprise tier.
                                    </p>
<div className="grid grid-cols-1 gap-3">
<div className="flex items-center gap-4 p-4 rounded-xl border border-stone-100 bg-[#faf9f6] hover:border-stone-200 transition-colors group cursor-pointer" style={{}}>
<div className="w-10 h-10 rounded-full bg-white border border-stone-100 flex items-center justify-center text-stone-600 shadow-sm group-hover:scale-105 transition-transform" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:slack" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="8" rx="1.5" width="3" x="13" y="2"></rect><path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5"></path><rect height="8" rx="1.5" width="3" x="8" y="14"></rect><path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5"></path><rect height="3" rx="1.5" width="8" x="14" y="13"></rect><path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"></path><rect height="3" rx="1.5" width="8" x="2" y="8"></rect><path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5"></path></g></svg>
</div>
<div className="flex-1 min-w-0">
<div className="text-sm font-medium text-stone-800 font-serif italic font-sans" style={{}}>#eng-architecture discussion</div>
<div className="text-xs text-stone-500 mt-0.5 font-sans" style={{}}>Slack • 42 replies</div>
</div>
</div>
</div>
</section>

<section>
<h3 className="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-4 font-sans" style={{}}>The Decision</h3>
<div className="p-6 bg-[#f5f5f4] rounded-2xl border border-stone-200/50" style={{}}>
<p className="text-[15px] leading-7 text-stone-800 font-sans" style={{}}>
                                            We will migrate the <code className="px-1.5 py-0.5 rounded text-xs bg-white border border-stone-200 text-stone-600 font-sans" style={{}}>billing-service</code> to PostgreSQL 15 managed on RDS. The migration will happen in Q4 using dual-write strategies to minimize downtime.
                                        </p>
</div>
</section>

<section>
<h3 className="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-4 font-sans" style={{}}>Next Steps</h3>
<div className="space-y-3">
<label className="flex items-center gap-4 group cursor-pointer p-2 -ml-2 rounded-lg hover:bg-stone-50 transition-colors" style={{}}>
<div className="relative flex items-center justify-center w-5 h-5">
<input checked="" className="peer appearance-none w-5 h-5 border-2 border-stone-300 rounded-full checked:bg-stone-800 checked:border-stone-800 transition-colors" style={{}} type="checkbox"/>
<svg aria-hidden="true" className="iconify absolute opacity-0 peer-checked:opacity-100 text-white iconify--lucide" data-icon="lucide:check" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-[15px] line-through text-stone-400 font-sans" style={{}}>Provision RDS instance</span>
</label>
<label className="flex items-center gap-4 group cursor-pointer p-2 -ml-2 rounded-lg hover:bg-stone-50 transition-colors" style={{}}>
<div className="relative flex items-center justify-center w-5 h-5">
<input className="peer appearance-none w-5 h-5 border-2 border-stone-300 rounded-full checked:bg-stone-800 checked:border-stone-800 transition-colors" style={{}} type="checkbox"/>
<svg aria-hidden="true" className="iconify absolute opacity-0 peer-checked:opacity-100 text-white iconify--lucide" data-icon="lucide:check" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-[15px] text-stone-700 group-hover:text-stone-900 transition-colors font-sans" style={{}}>Implement dual-write on billing service</span>
</label>
</div>
</section>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="border-y border-stone-200/60 py-16 bg-white/40 backdrop-blur-sm" style={{}}>
<div className="max-w-6xl mx-auto px-6">
<p className="text-center text-xs font-medium text-stone-400 mb-10 uppercase tracking-[0.2em] font-sans" style={{}}>Cultivating clarity at</p>
<div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 opacity-30 mix-blend-multiply">
<div className="flex items-center gap-2 grayscale">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:triangle" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" fill="currentColor" stroke="none"></path></svg>
<span className="font-bold tracking-tighter text-xl font-serif font-sans">ACME</span>
</div>
<div className="flex items-center gap-2 grayscale">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:circle" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" fill="currentColor" r="10" stroke="none"></circle></svg>
<span className="font-bold tracking-tighter text-xl font-serif font-sans">Orbit</span>
</div>
<div className="flex items-center gap-2 grayscale">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:square" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect fill="currentColor" height="18" rx="2" stroke="none" width="18" x="3" y="3"></rect></svg>
<span className="font-bold tracking-tighter text-xl font-serif font-sans">Focus</span>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden">
<div className="max-w-6xl mx-auto relative z-10">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 rounded-[2rem] bg-white border border-stone-100 shadow-[0_2px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-1" style={{}}>
<div className="w-12 h-12 rounded-2xl bg-[#faf9f6] border border-stone-100 flex items-center justify-center mb-6 text-stone-700" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:git-pull-request-draft" data-width="22" height="22" role="img" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M18 6V5m0 6v-1M6 9v12"></path></g></svg>
</div>
<h3 className="text-xl font-medium mb-3 tracking-tight text-stone-900 font-serif font-sans" style={{}}>Capture the "Why"</h3>
<p className="text-[15px] text-stone-500 leading-relaxed font-sans" style={{}}>
                        Don't let rationale get buried in temporary threads. Wayan links the conversation directly to the outcome.
                    </p>
</div>

<div className="p-8 rounded-[2rem] bg-white border border-stone-100 shadow-[0_2px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-1" style={{}}>
<div className="w-12 h-12 rounded-2xl bg-[#faf9f6] border border-stone-100 flex items-center justify-center mb-6 text-stone-700" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:feather" data-width="22" height="22" role="img" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5zM16 8L2 22M17.5 15H9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-xl font-medium mb-3 tracking-tight text-stone-900 font-serif font-sans" style={{}}>Centralized Truth</h3>
<p className="text-[15px] text-stone-500 leading-relaxed font-sans" style={{}}>
                        A single source of truth for every architectural, product, and strategy decision. Clear as day.
                    </p>
</div>

<div className="p-8 rounded-[2rem] bg-white border border-stone-100 shadow-[0_2px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-1" style={{}}>
<div className="w-12 h-12 rounded-2xl bg-[#faf9f6] border border-stone-100 flex items-center justify-center mb-6 text-stone-700" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:sprout" data-width="22" height="22" role="img" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M7 20h10M10 20c5.5-2.5.8-6.4 3-10M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7m-5-6.8c.9-1.2 1.5-2.5 1.5-3.2c0-1.5-1.5-2-2-1c-2.4 4.5-5.5 5-7.5 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-xl font-medium mb-3 tracking-tight text-stone-900 font-serif font-sans" style={{}}>Organic Growth</h3>
<p className="text-[15px] text-stone-500 leading-relaxed font-sans" style={{}}>
                        Let new hires retrace the roots of your product. Understand how you got here without tapping shoulders.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 border-t border-stone-200/60 bg-[#f5f5f4]/50" style={{}}>
<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-20">
<div className="flex-1 space-y-10">
<h2 className="text-3xl md:text-5xl tracking-tight text-stone-900 leading-tight font-manrope font-medium" style={{}}>
                    From <span className="text-stone-500 font-manrope font-medium" style={{}}>thought</span> to  reality.
                </h2>
<div className="space-y-8 relative">

<div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-stone-200" style={{}}></div>
<div className="flex gap-8 relative">
<div className="flex-shrink-0">
<div className="w-10 h-10 rounded-full border-2 border-[#faf9f6] shadow-sm flex items-center justify-center text-sm font-medium bg-white text-stone-600 relative z-10 font-sans" style={{}}>1</div>
</div>
<div className="pt-1">
<h4 className="text-lg font-medium mb-2 text-stone-800 font-serif font-sans" style={{}}>Plant a Seed</h4>
<p className="text-sm text-stone-500 leading-relaxed max-w-sm font-sans" style={{}}>Start a decision record. It's like a journal entry, but structured for the team.</p>
</div>
</div>
<div className="flex gap-8 relative">
<div className="flex-shrink-0">
<div className="w-10 h-10 rounded-full border-2 border-[#faf9f6] shadow-sm flex items-center justify-center text-sm font-medium bg-white text-stone-600 relative z-10 font-sans" style={{}}>2</div>
</div>
<div className="pt-1">
<h4 className="text-lg font-medium mb-2 text-stone-800 font-serif font-sans" style={{}}>Nurture Consensus</h4>
<p className="text-sm text-stone-500 leading-relaxed max-w-sm font-sans" style={{}}>Discussion happens freely. Comments are threaded. The outcome grows organically.</p>
</div>
</div>
<div className="flex gap-8 relative">
<div className="flex-shrink-0">
<div className="w-10 h-10 rounded-full border-2 border-orange-100 shadow-sm flex items-center justify-center text-sm font-medium bg-orange-200 text-stone-900 relative z-10 font-sans" style={{}}>3</div>
</div>
<div className="pt-1">
<h4 className="text-lg font-medium mb-2 text-stone-900 font-serif font-sans" style={{}}>Harvest &amp; Execute</h4>
<p className="text-sm text-stone-500 leading-relaxed max-w-sm font-sans" style={{}}>Mark as decided. Assign tasks. Wayan integrates with Linear to push tasks to your backlog.</p>
</div>
</div>
</div>
</div>
<div className="flex-1 w-full">
<div className="relative rounded-3xl p-8 shadow-2xl shadow-stone-200 bg-white border border-white/50 ring-1 ring-stone-900/5 rotate-1 hover:rotate-0 transition-transform duration-700 ease-out" style={{}}>
<div className="flex items-center justify-between mb-8 border-b border-stone-100 pb-4" style={{}}>
<span className="text-xs font-semibold text-stone-400 uppercase tracking-widest font-sans" style={{}}>Workflow</span>
<div className="flex -space-x-3">
<img className="w-8 h-8 rounded-full border-2 border-white grayscale opacity-80" src="https://i.pravatar.cc/100?img=8"/>
<img className="w-8 h-8 rounded-full border-2 border-white grayscale opacity-80" src="https://i.pravatar.cc/100?img=9"/>
</div>
</div>
<div className="space-y-4">
<div className="flex items-center gap-4 p-4 rounded-2xl border border-stone-100 bg-[#faf9f6] text-stone-400" style={{}}>
<div className="w-2.5 h-2.5 rounded-full bg-stone-300" style={{}}></div>
<span className="text-sm line-through font-sans">Architecture Review</span>
</div>
<div className="flex items-center gap-4 p-4 rounded-2xl bg-orange-50/50 border border-orange-100 relative overflow-hidden" style={{}}>
<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-orange-300" style={{}}></div>
<div className="w-2.5 h-2.5 rounded-full bg-orange-400 shadow-[0_0_10px_rgba(251,146,60,0.6)]" style={{}}></div>
<span className="text-sm font-medium text-stone-800 font-sans" style={{}}>Security Approval</span>
<span className="ml-auto text-xs font-serif italic text-orange-800 font-sans" style={{}}>Pending</span>
</div>
<div className="flex items-center gap-4 p-4 rounded-2xl border border-stone-100 bg-white text-stone-400" style={{}}>
<div className="w-2.5 h-2.5 rounded-full border border-stone-300" style={{}}></div>
<span className="text-sm font-sans">Final Sign-off</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 text-center relative">
<div className="max-w-2xl mx-auto relative z-10">
<h2 className="text-4xl md:text-5xl tracking-tight mb-6 text-stone-900 font-manrope font-medium" style={{}}>Build a better <span className="text-stone-500 font-manrope font-medium" style={{}}>team brain.</span></h2>
<p className="mb-12 text-lg font-light text-stone-600 font-sans" style={{}}>Join the thoughtful teams using Wayan to move faster with clarity.</p>
<form className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto p-1.5 bg-white border border-stone-200 rounded-full shadow-lg shadow-stone-200/50" style={{}}>
<input className="flex-1 bg-transparent px-6 py-3 text-sm placeholder:text-stone-400 focus:outline-none text-stone-800 rounded-full" placeholder="work@email.com" style={{}} type="email"/>
<button className="hover:bg-stone-700 text-sm font-medium px-8 py-3 rounded-full transition-all bg-stone-800 text-[#faf9f6] font-sans" style={{}}>
                    Join
                </button>
</form>
<p className="text-xs mt-8 text-stone-400 uppercase tracking-widest font-sans" style={{}}>No credit card required • Cancel anytime</p>
</div>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-t from-stone-100/50 to-transparent blur-3xl -z-10 pointer-events-none" style={{}}></div>
</section>

<footer className="border-t border-stone-200/60 py-12 px-6 bg-white/50 backdrop-blur-md" style={{}}>
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-stone-800 flex items-center justify-center text-stone-100 font-serif italic text-xs font-bold pt-0.5 font-sans" style={{}}>W</div>
<span className="text-sm font-medium tracking-tight text-stone-600 font-serif font-sans" style={{}}>Wayan Inc.</span>
</div>
<div className="flex gap-8 text-xs font-medium text-stone-500 tracking-wide uppercase" style={{}}>
<a className="transition-colors hover:text-stone-800 font-sans" href="#" style={{}}>Privacy</a>
<a className="transition-colors hover:text-stone-800 font-sans" href="#" style={{}}>Terms</a>
<a className="transition-colors hover:text-stone-800 font-sans" href="#" style={{}}>Twitter</a>
<a className="transition-colors hover:text-stone-800 font-sans" href="#" style={{}}>GitHub</a>
</div>
</div>
</footer>
<grammarly-desktop-integration data-grammarly-shadow-root="true"></grammarly-desktop-integration>
    </>
  );
}
