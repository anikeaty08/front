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
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute top-[-10%] left-[-10%] w-[50rem] h-[50rem] bg-rose-600/5 rounded-full blur-[120px]" style={{}}></div>
<div className="absolute top-[20%] right-[-10%] w-[40rem] h-[40rem] bg-blue-600/5 rounded-full blur-[120px]" style={{}}></div>
<div className="absolute bottom-[-10%] left-[20%] w-[40rem] h-[40rem] bg-emerald-600/5 rounded-full blur-[100px]" style={{}}></div>
<div className="absolute inset-0 bg-noise opacity-40 mix-blend-overlay"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-xl" style={{}}>
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-3 group cursor-pointer">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-rose-600 to-orange-600 flex items-center justify-center text-white shadow-lg shadow-rose-500/20 group-hover:scale-105 transition-transform duration-300" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:wind" data-strokeWidth="2" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12.8 19.6A2 2 0 1 0 14 16H2m15.5-8a2.5 2.5 0 1 1 2 4H2m7.8-7.6A2 2 0 1 1 11 8H2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="font-semibold text-lg tracking-tight text-white" style={{}}>Whoosh<span className="text-rose-500" style={{}}>Ai</span></span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400" style={{}}>
<a className="hover:text-white transition-colors" href="#solutions" style={{}}>Solutions</a>
<a className="hover:text-white transition-colors" href="#app" style={{}}>Customer App</a>
<a className="hover:text-white transition-colors" href="#admin" style={{}}>Admin</a>
<a className="hover:text-white transition-colors" href="#pricing" style={{}}>Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium hover:text-white hidden sm:block transition-colors" href="#" style={{}}>Sign in</a>
<a className="group relative inline-flex h-9 items-center justify-center overflow-hidden rounded-full px-4 text-xs font-medium text-white transition-all bg-white/5 hover:bg-white/10 border border-white/10" href="#" style={{}}>
<span className="mr-2">Book Demo</span>
<span className="group-hover:translate-x-0.5 transition-transform duration-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</a>
</div>
</div>
</nav>

<section className="lg:pt-48 lg:pb-32 z-10 pt-32 pb-20 relative">
<div className="max-w-7xl mx-auto px-6 text-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-rose-500/20 bg-rose-500/5 backdrop-blur-sm mb-8 animate-[fadeUp_1s_ease-out]" style={{}}>
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" style={{}}></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500" style={{}}></span>
</span>
<span className="text-xs font-medium text-rose-300 tracking-wide" style={{}}>New: Dedicated Mobile App Included</span>
</div>

<h1 className="mx-auto max-w-5xl text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tighter text-white leading-[1.1] mb-8 drop-shadow-2xl" style={{}}>
                Automate bookings for your <br className="hidden md:block"/> salon in 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-orange-400 to-amber-200" style={{}}>under 60 seconds.</span>
</h1>
<p className="mx-auto max-w-2xl text-lg font-light text-slate-400 leading-relaxed mb-10" style={{}}>
                The AI receptionist that works 24/7. Reduce no-shows by <span className="text-white font-medium" style={{}}>30%</span> with automated reminders and a dedicated customer app.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24">
<button className="h-12 px-8 rounded-full bg-white text-black font-semibold text-sm transition-all hover:bg-slate-200 active:scale-95 flex items-center gap-2 shadow-[0_0_40px_-10px_rgba(255,255,255,0.2)]" style={{}}>
                    Start Free Trial
                    <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:zap" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<button className="h-12 px-8 rounded-full border border-white/10 bg-white/5 text-white font-medium text-sm transition-colors hover:bg-white/10 backdrop-blur-md" style={{}}>
                    View Interactive Demo
                </button>
</div>

<div className="mt-20 lg:mt-32 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start text-left">

<div className="lg:col-span-4 relative mx-auto w-full max-w-[360px] lg:max-w-none transform transition-transform duration-500 hover:scale-[1.02]">

<div className="relative rounded-[3rem] border-8 border-[#1C1C1E] bg-[#000000] shadow-2xl shadow-rose-900/10 overflow-hidden h-[700px] z-20" style={{}}>

<div className="absolute inset-0 bg-[#000000] flex flex-col">

<div className="h-12 px-6 flex items-center justify-between text-white text-[10px] font-medium z-10 select-none" style={{}}>
<span>9:41</span>
<div className="flex gap-1.5">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:signal" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h.01M7 20v-4m5 4v-8m5 8V8m5-4v16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:wifi" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01M2 8.82a15 15 0 0 1 20 0M5 12.859a10 10 0 0 1 14 0m-10.5 3.57a5 5 0 0 1 7 0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:battery" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M22 14v-4"></path><rect height="12" rx="2" width="16" x="2" y="6"></rect></g></svg>
</div>
</div>

<div className="px-5 pb-4 border-b border-white/5 flex items-center justify-between z-10 bg-[#000000]/80 backdrop-blur-md" style={{}}>
<div className="flex items-center gap-3">
<div className="relative">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-400 to-orange-400 p-[1px]" style={{}}>
<img alt="Spa" className="w-full h-full rounded-full bg-black" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Luxe"/>
</div>
</div>
<div>
<div className="text-sm font-semibold text-white" style={{}}>Luxe Aesthetics</div>
<div className="text-[10px] text-rose-400 flex items-center gap-1" style={{}}>
<span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" style={{}}></span>
                                            Online • Replies in 2s
                                         </div>
</div>
</div>
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white transition-colors hover:bg-white/20 cursor-pointer" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:store" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5m8.774-10.69a1.12 1.12 0 0 0-1.549 0a2.5 2.5 0 0 1-3.451 0a1.12 1.12 0 0 0-1.548 0a2.5 2.5 0 0 1-3.452 0a1.12 1.12 0 0 0-1.549 0a2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"></path><path d="M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"></path></g></svg>
</div>
</div>

<div className="flex-1 overflow-y-auto p-4 space-y-6 scrollbar-hide">

<div className="text-center">
<span className="text-[10px] font-medium text-white/30" style={{}}>Today 9:41 AM</span>
</div>

<div className="flex gap-3">
<div className="w-6 h-6 rounded-full bg-rose-500/10 text-rose-500 flex items-center justify-center border border-rose-500/20 flex-shrink-0 mt-1" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:sparkles" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>
</div>
<div className="space-y-2 max-w-[85%]">
<div className="bg-[#1C1C1E] text-slate-200 text-xs p-3 rounded-2xl rounded-tl-none border border-white/5 leading-relaxed" style={{}}>
                                            Yes! I have <span className="font-semibold text-white" style={{}}>2:00 PM</span> or <span className="font-semibold text-white" style={{}}>4:30 PM</span> available this Friday.
                                        </div>

<div className="flex gap-2">
<button className="px-3 py-1.5 rounded-full border border-white/20 text-white text-[10px] hover:bg-white/10 transition-colors" style={{}}>2:00 PM</button>
<button className="px-3 py-1.5 rounded-full border border-white/20 text-white text-[10px] hover:bg-white/10 transition-colors" style={{}}>4:30 PM</button>
</div>
</div>
</div>

<div className="flex flex-row-reverse gap-3 animate-[fadeUp_0.5s_ease-out_0.2s_both]">
<div className="bg-rose-600 text-white text-xs p-3 rounded-2xl rounded-tr-none shadow-lg shadow-rose-500/20" style={{}}>
                                        2 PM please.
                                    </div>
</div>

<div className="flex gap-3 pb-4 animate-[fadeUp_0.5s_ease-out_0.6s_both]">
<div className="w-6 h-6 rounded-full bg-rose-500/10 text-rose-500 flex items-center justify-center border border-rose-500/20 flex-shrink-0 mt-1" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:sparkles" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>
</div>
<div className="space-y-2 w-full max-w-[85%]">
<div className="bg-[#1C1C1E] text-slate-200 text-xs p-3 rounded-2xl rounded-tl-none border border-white/5 leading-relaxed" style={{}}>
                                            Perfect. To secure your <span className="font-semibold text-white" style={{}}>HydraFacial</span>, please confirm payment details.
                                        </div>

<div className="bg-[#151517] rounded-2xl p-4 border border-white/10 mt-2 hover:border-rose-500/30 transition-colors cursor-pointer group" style={{}}>
<div className="flex justify-between items-center mb-3">
<span className="text-[10px] text-slate-400 font-medium" style={{}}>Pay with</span>
<span className="text-xs font-semibold text-white" style={{}}>₱2,500.00</span>
</div>
<div className="space-y-2">
<button className="w-full h-9 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-medium transition-colors flex items-center justify-center gap-2" style={{}}>
                                                    GCash
                                                </button>
<button className="w-full h-9 bg-[#2C2C2E] hover:bg-[#3A3A3C] text-white rounded-lg text-xs font-medium transition-colors flex items-center justify-center gap-2" style={{}}>
                                                    PayMaya
                                                </button>
</div>
</div>
</div>
</div>
</div>

<div className="p-4 bg-[#000000] border-t border-white/5" style={{}}>
<div className="relative group">
<input className="w-full h-11 rounded-full bg-[#1C1C1E] border border-white/10 pl-5 pr-12 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-rose-500/50 transition-colors" placeholder="Type a message..." style={{}} type="text"/>
<button className="absolute right-1.5 top-1.5 w-8 h-8 rounded-full bg-rose-600 flex items-center justify-center text-white hover:bg-rose-500 transition-colors" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-up" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m5 12l7-7l7 7m-7 7V5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-8 h-full flex flex-col justify-center pt-10 lg:pt-0">
<div className="rounded-3xl border border-white/10 bg-[#0A0A0A] p-6 lg:p-8 shadow-2xl relative overflow-hidden group" style={{}}>

<div className="absolute top-[-20%] right-[-10%] w-[300px] h-[300px] bg-rose-900/10 rounded-full blur-[80px]" style={{}}></div>

<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 relative z-10 gap-4">
<div>
<h2 className="text-xl font-semibold text-white tracking-tight" style={{}}>Salon Overview</h2>
<div className="flex items-center gap-2 mt-1.5">
<span className="text-[11px] text-slate-500" style={{}}>Real-time sync:</span>
<div className="flex gap-1.5">
<span className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5" style={{}}>Messenger</span>
<span className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5" style={{}}>App</span>
<span className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5" style={{}}>Web</span>
</div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#061810] border border-emerald-500/20 text-emerald-400 text-xs font-medium" style={{}}>
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" style={{}}></span>
                                    Auto-Booking Active
                                </div>
<button className="w-8 h-8 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:text-white transition-colors" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:layout-grid" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></g></svg>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 relative z-10">

<div className="p-5 rounded-2xl bg-[#111111] border border-white/5 relative group/card overflow-hidden transition-colors hover:border-white/10" style={{}}>
<div className="absolute top-0 left-0 w-1 h-full bg-rose-500 rounded-l-2xl" style={{}}></div>
<div className="flex justify-between items-start mb-3">
<span className="text-xs font-medium text-slate-400" style={{}}>No-Show Rate</span>
<svg aria-hidden="true" className="iconify text-rose-500 iconify--lucide" data-icon="lucide:user-x" data-width="14" height="14" role="img" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="m17 8l5 5m0-5l-5 5"></path></g></svg>
</div>
<div className="text-3xl font-semibold text-white tracking-tight mb-2" style={{}}>2.4%</div>
<div className="text-[10px] text-emerald-400 flex items-center gap-1 font-medium" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:trending-down" data-width="10" height="10" role="img" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 17h6v-6"></path><path d="m22 17l-8.5-8.5l-5 5L2 7"></path></g></svg>
                                    Down from 15%
                                </div>
</div>

<div className="p-5 rounded-2xl bg-[#111111] border border-white/5 transition-colors hover:border-white/10" style={{}}>
<div className="flex justify-between items-start mb-3">
<span className="text-xs font-medium text-slate-400" style={{}}>Auto-Booked</span>
<svg aria-hidden="true" className="iconify text-slate-500 iconify--lucide" data-icon="lucide:bot" data-width="14" height="14" role="img" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2m16 0h2m-7-1v2m-6-2v2"></path></g></svg>
</div>
<div className="text-3xl font-semibold text-white tracking-tight mb-2" style={{}}>94%</div>
<div className="text-[10px] text-slate-500" style={{}}>Zero staff intervention</div>
</div>

<div className="p-5 rounded-2xl bg-[#111111] border border-white/5 transition-colors hover:border-white/10" style={{}}>
<div className="flex justify-between items-start mb-3">
<span className="text-xs font-medium text-slate-400" style={{}}>Revenue (WTD)</span>
<svg aria-hidden="true" className="iconify text-slate-500 iconify--lucide" data-icon="lucide:wallet" data-width="14" height="14" role="img" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></g></svg>
</div>
<div className="text-3xl font-semibold text-white tracking-tight mb-2" style={{}}>₱142k</div>
<div className="text-[10px] text-emerald-400 flex items-center gap-1 font-medium" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:trending-up" data-width="10" height="10" role="img" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 7h6v6"></path><path d="m22 7l-8.5 8.5l-5-5L2 17"></path></g></svg>
                                    +18% vs last week
                                </div>
</div>
</div>

<div className="relative z-10 overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-white/5 text-[10px] uppercase tracking-wider text-slate-500 font-medium" style={{}}>
<th className="pb-3 pl-2 font-medium">Client</th>
<th className="pb-3 font-medium">Service</th>
<th className="pb-3 font-medium">Deposit</th>
<th className="pb-3 font-medium">Time</th>
<th className="pb-3 pr-2 text-right font-medium">Status</th>
</tr>
</thead>
<tbody className="text-xs text-slate-300" style={{}}>

<tr className="group hover:bg-white/[0.02] transition-colors border-b border-white/5" style={{}}>
<td className="py-3 pl-2">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#1F2937] flex items-center justify-center text-[10px] font-medium text-white border border-white/10" style={{}}>JD</div>
<div>
<div className="text-white font-medium" style={{}}>Jane Doe</div>
<div className="text-[10px] text-slate-500" style={{}}>via Mobile App</div>
</div>
</div>
</td>
<td className="py-3">Balayage &amp; Cut</td>
<td className="py-3">
<span className="px-2 py-0.5 rounded bg-[#007DFE]/10 border border-[#007DFE]/20 text-[#007DFE] text-[10px] font-medium">GCash</span>
</td>
<td className="py-3">Today, 2:00 PM</td>
<td className="py-3 pr-2 text-right">
<span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-medium" style={{}}>Paid</span>
</td>
</tr>

<tr className="group hover:bg-white/[0.02] transition-colors border-b border-white/5" style={{}}>
<td className="py-3 pl-2">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#1F2937] flex items-center justify-center text-[10px] font-medium text-white border border-white/10" style={{}}>MS</div>
<div>
<div className="text-white font-medium" style={{}}>Maria Santos</div>
<div className="text-[10px] text-slate-500" style={{}}>via SMS</div>
</div>
</div>
</td>
<td className="py-3">Full Body Massage</td>
<td className="py-3">
<span className="px-2 py-0.5 rounded bg-white/10 border border-white/10 text-slate-300 text-[10px] font-medium" style={{}}>PayMaya</span>
</td>
<td className="py-3">Tmrw, 10:00 AM</td>
<td className="py-3 pr-2 text-right">
<span className="px-2 py-0.5 rounded border border-emerald-500/20 text-emerald-400 text-[10px] font-medium" style={{}}>Confirmed</span>
</td>
</tr>

<tr className="group hover:bg-white/[0.02] transition-colors">
<td className="py-3 pl-2">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#1F2937] flex items-center justify-center text-[10px] font-medium text-white border border-white/10" style={{}}>AL</div>
<div>
<div className="text-white font-medium" style={{}}>Alex Lee</div>
<div className="text-[10px] text-slate-500" style={{}}>via Web</div>
</div>
</div>
</td>
<td className="py-3">Laser Hair Removal</td>
<td className="py-3 text-slate-600" style={{}}>-</td>
<td className="py-3">Sep 25, 11:30 AM</td>
<td className="py-3 pr-2 text-right">
<span className="px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/10 text-[10px] font-medium" style={{}}>Pending</span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-y border-white/5 bg-white/[0.01]" style={{}}>
<div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-blue-500 iconify--lucide" data-icon="lucide:wallet" data-width="20" height="20" role="img" style={{}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></g></svg>
<span className="text-sm font-semibold text-white tracking-tight" style={{}}>GCash</span>
</div>
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-green-500 iconify--lucide" data-icon="lucide:qr-code" data-width="20" height="20" role="img" style={{}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="5" rx="1" width="5" x="3" y="3"></rect><rect height="5" rx="1" width="5" x="16" y="3"></rect><rect height="5" rx="1" width="5" x="3" y="16"></rect><path d="M21 16h-3a2 2 0 0 0-2 2v3m5 0v.01M12 7v3a2 2 0 0 1-2 2H7m-4 0h.01M12 3h.01M12 16v.01M16 12h1m4 0v.01M12 21v-1"></path></g></svg>
<span className="text-sm font-semibold text-white tracking-tight" style={{}}>PayMaya</span>
</div>
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-purple-500 iconify--lucide" data-icon="lucide:credit-card" data-width="20" height="20" role="img" style={{}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="14" rx="2" width="20" x="2" y="5"></rect><path d="M2 10h20"></path></g></svg>
<span className="text-sm font-semibold text-white tracking-tight" style={{}}>Visa/Mastercard</span>
</div>
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-rose-500 iconify--lucide" data-icon="lucide:instagram" data-width="20" height="20" role="img" style={{}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg>
<span className="text-sm font-semibold text-white tracking-tight" style={{}}>Messenger</span>
</div>
</div>
</section>

<section className="py-24 relative" id="solutions">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 rounded-3xl border border-white/10 bg-[#0F1116] p-10 relative overflow-hidden group" style={{}}>
<div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-duration-500" style={{}}></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center border border-blue-500/20 mb-6" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:zap" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-2xl font-semibold text-white mb-3 tracking-tight" style={{}}>Instant Responses</h3>
<p className="text-slate-400 text-sm leading-relaxed max-w-md" style={{}}>
                            Whoosh responds instantly on Messenger and SMS, reducing friction. Customers go from inquiry to deposit in seconds.
                        </p>

<div className="mt-12 space-y-0 relative">
<div className="absolute left-[4.5rem] top-2 bottom-6 w-px bg-white/10"></div>
<div className="flex items-center gap-6 group/item">
<div className="w-12 text-right text-[10px] font-mono text-slate-500" style={{}}>00.0s</div>
<div className="w-2 h-2 rounded-full bg-slate-600 ring-4 ring-[#0F1116]" style={{}}></div>
<div className="bg-white/5 border border-white/5 rounded px-3 py-1.5 text-xs text-slate-300" style={{}}>Client: "Price for haircut?"</div>
</div>
<div className="flex items-center gap-6 mt-6 group/item">
<div className="w-12 text-right text-[10px] font-mono text-blue-400" style={{}}>00.2s</div>
<div className="w-2 h-2 rounded-full bg-blue-500 ring-4 ring-[#0F1116] shadow-[0_0_10px_rgba(59,130,246,0.5)]" style={{}}></div>
<div className="bg-blue-500/10 border border-blue-500/20 rounded px-3 py-1.5 text-xs text-white" style={{}}>AI: "₱350. Slot at 2PM?"</div>
</div>
<div className="flex items-center gap-6 mt-6 group/item">
<div className="w-12 text-right text-[10px] font-mono text-emerald-400" style={{}}>00.9s</div>
<div className="w-2 h-2 rounded-full bg-emerald-500 ring-4 ring-[#0F1116]" style={{}}></div>
<div className="bg-emerald-500/10 border border-emerald-500/20 rounded px-3 py-1.5 text-xs text-emerald-100 flex items-center gap-2" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check" data-width="10" height="10" role="img" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Booked &amp; Paid
                                </div>
</div>
</div>
</div>
</div>

<div className="rounded-3xl border border-white/10 bg-[#0F1116] p-10 relative overflow-hidden group flex flex-col" style={{}}>
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-rose-900/10 opacity-0 group-hover:opacity-100 transition-opacity" style={{}}></div>
<div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center border border-rose-500/20 mb-6" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:bell-ring" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0M22 8c0-2.3-.8-4.3-2-6M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326M4 2C2.8 3.7 2 5.7 2 8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-2xl font-semibold text-white mb-3 tracking-tight" style={{}}>Zero No-Shows</h3>
<p className="text-slate-400 text-sm leading-relaxed mb-8" style={{}}>
                        Automated SMS &amp; Messenger reminders sent 24h and 1h before appointment.
                    </p>
<div className="mt-auto space-y-3 relative">
<div className="flex flex-row-reverse gap-2">
<div className="bg-blue-600 rounded-2xl rounded-tr-none p-3 text-[11px] text-white shadow-lg max-w-[80%]" style={{}}>
                                Reminder: Your appointment at Luxe Spa is in 1 hour. See you!
                            </div>
</div>
<div className="flex gap-2">
<div className="w-6 h-6 rounded-full bg-slate-700 flex-shrink-0" style={{}}></div>
<div className="bg-white/10 text-slate-200 rounded-2xl rounded-tl-none p-3 text-[11px] max-w-[80%]" style={{}}>
                                On my way! 🚗
                            </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-[#08080A] relative overflow-hidden" id="app" style={{}}>
<div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-rose-900/5 to-transparent pointer-events-none" style={{}}></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="relative flex justify-center lg:justify-end order-2 lg:order-1 group">

<div className="relative w-[300px] h-[600px] bg-black rounded-[2.5rem] border-[6px] border-[#1C1C1E] shadow-2xl overflow-hidden z-20 transform transition-transform duration-700 group-hover:rotate-1" style={{}}>

<div className="flex flex-col h-full bg-[#111111]">

<div className="p-6 pb-2">
<div className="flex justify-between items-center mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-800 bg-[url('https://api.dicebear.com/7.x/avataaars/svg?seed=Felix')] bg-cover" style={{}}></div>
<div>
<div className="text-[10px] text-slate-400" style={{}}>Welcome back</div>
<div className="text-sm font-semibold text-white" style={{}}>Felix</div>
</div>
</div>
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:bell" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0m-10.47-5.674A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<div className="relative">
<svg aria-hidden="true" className="absolute left-3 top-2.5 text-slate-500 iconify iconify--lucide" data-icon="lucide:search" data-width="14" height="14" role="img" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m21 21l-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></g></svg>
<input className="w-full bg-[#1C1C1E] rounded-xl py-2 pl-9 pr-4 text-xs text-white focus:outline-none focus:ring-1 focus:ring-rose-500/50" placeholder="Find a service..." style={{}} type="text"/>
</div>
</div>

<div className="px-6 py-2">
<div className="bg-gradient-to-r from-rose-600 to-orange-600 rounded-2xl p-4 text-white shadow-lg shadow-rose-900/20" style={{}}>
<div className="text-[10px] font-medium opacity-90 mb-1">Loyalty Rewards</div>
<div className="text-lg font-bold tracking-tight mb-2">20% OFF</div>
<div className="text-[10px] opacity-80 mb-3">Your next haircut is on us! Claim your voucher now.</div>
<button className="bg-white text-rose-600 text-[10px] font-bold px-3 py-1.5 rounded-lg shadow-sm" style={{}}>Claim Now</button>
</div>
</div>

<div className="px-6 py-4">
<div className="flex justify-between items-center mb-3">
<span className="text-xs font-semibold text-white" style={{}}>Services</span>
<span className="text-[10px] text-rose-500" style={{}}>See all</span>
</div>
<div className="space-y-3">
<div className="flex items-center gap-3 p-3 rounded-xl bg-[#1C1C1E] border border-white/5" style={{}}>
<div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:scissors" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="6" cy="6" r="3"></circle><path d="M8.12 8.12L12 12m8-8L8.12 15.88"></path><circle cx="6" cy="18" r="3"></circle><path d="M14.8 14.8L20 20"></path></g></svg>
</div>
<div className="flex-1">
<div className="text-xs font-medium text-white" style={{}}>Haircut &amp; Style</div>
<div className="text-[10px] text-slate-500" style={{}}>45 mins • ₱450</div>
</div>
<button className="px-3 py-1.5 rounded-lg bg-white/10 text-white text-[10px] font-medium hover:bg-white/20 transition-colors" style={{}}>Book</button>
</div>
<div className="flex items-center gap-3 p-3 rounded-xl bg-[#1C1C1E] border border-white/5" style={{}}>
<div className="w-10 h-10 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:sparkles" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>
</div>
<div className="flex-1">
<div className="text-xs font-medium text-white" style={{}}>Manicure</div>
<div className="text-[10px] text-slate-500" style={{}}>30 mins • ₱300</div>
</div>
<button className="px-3 py-1.5 rounded-lg bg-white/10 text-white text-[10px] font-medium hover:bg-white/20 transition-colors" style={{}}>Book</button>
</div>
</div>
</div>

<div className="mt-auto border-t border-white/5 p-4 flex justify-between items-center px-8 bg-[#0F0F0F]" style={{}}>
<div className="flex flex-col items-center gap-1 text-rose-500" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:home" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></g></svg>
<span className="text-[9px] font-medium">Home</span>
</div>
<div className="flex flex-col items-center gap-1 text-slate-500" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:calendar" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M8 2v4m8-4v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></g></svg>
<span className="text-[9px] font-medium">Bookings</span>
</div>
<div className="flex flex-col items-center gap-1 text-slate-500" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:user" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></g></svg>
<span className="text-[9px] font-medium">Profile</span>
</div>
</div>
</div>
</div>

<div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-rose-500/10 blur-[80px] rounded-full" style={{}}></div>
</div>

<div className="order-1 lg:order-2">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 backdrop-blur-sm mb-6" style={{}}>
<span className="text-xs font-medium text-blue-300 tracking-wide" style={{}}>Included with all plans</span>
</div>
<h2 className="text-3xl sm:text-4xl text-white font-semibold mb-6 tracking-tight leading-tight" style={{}}>
                        Your Salon in <br/>
<span className="text-slate-500" style={{}}>Their Pocket.</span>
</h2>
<p className="text-slate-400 text-lg leading-relaxed mb-8" style={{}}>
                        Beyond chat, offer your loyal customers a dedicated mobile app experience. Let them browse services, track rewards, and rebook in seconds.
                    </p>
<div className="grid gap-6">
<div className="flex gap-4 group">
<div className="mt-1 w-10 h-10 rounded-lg bg-[#1C1C1E] border border-white/10 flex items-center justify-center text-white group-hover:border-rose-500/50 group-hover:text-rose-400 transition-colors" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:smartphone" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></g></svg>
</div>
<div>
<h4 className="text-white font-medium mb-1" style={{}}>Seamless Booking Experience</h4>
<p className="text-sm text-slate-500 leading-relaxed" style={{}}>A visual menu of your services. Customers can pick their favorite stylist and time slot instantly.</p>
</div>
</div>
<div className="flex gap-4 group">
<div className="mt-1 w-10 h-10 rounded-lg bg-[#1C1C1E] border border-white/10 flex items-center justify-center text-white group-hover:border-rose-500/50 group-hover:text-rose-400 transition-colors" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:award" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m15.477 12.89l1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></g></svg>
</div>
<div>
<h4 className="text-white font-medium mb-1" style={{}}>Built-in Loyalty Program</h4>
<p className="text-sm text-slate-500 leading-relaxed" style={{}}>Automatically track points and offer rewards to keep them coming back.</p>
</div>
</div>
<div className="flex gap-4 group">
<div className="mt-1 w-10 h-10 rounded-lg bg-[#1C1C1E] border border-white/10 flex items-center justify-center text-white group-hover:border-rose-500/50 group-hover:text-rose-400 transition-colors" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:bell" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0m-10.47-5.674A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<h4 className="text-white font-medium mb-1" style={{}}>Push Notifications</h4>
<p className="text-sm text-slate-500 leading-relaxed" style={{}}>Fill empty slots by sending flash deals directly to your customers' lock screens.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0D0F14]" id="admin">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

<div className="order-2 lg:order-1">
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-8" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:layout-dashboard" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></g></svg>
</div>
<h2 className="text-3xl sm:text-4xl text-white font-semibold mb-6 tracking-tight leading-tight" style={{}}>
                        Your Command Center. <br/>
<span className="text-slate-500" style={{}}>Complete Control.</span>
</h2>
<p className="text-slate-400 text-lg leading-relaxed mb-10" style={{}}>
                        While AI handles the chats and the App handles bookings, you stay in control via the Merchant Admin Panel. Bird's-eye view of your operations, staff, and revenue.
                    </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="mt-1 w-8 h-8 rounded bg-blue-500/10 text-blue-400 flex items-center justify-center border border-blue-500/20 flex-shrink-0" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:sliders" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M10 8h4m-2 13v-9m0-4V3m5 13h4m-2-4V3m0 18v-5M3 14h4m-2-4V3m0 18v-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<h4 className="text-white font-medium text-sm" style={{}}>Custom Rules</h4>
<p className="text-slate-500 text-xs mt-1 leading-relaxed" style={{}}>Set operating hours, service durations, and required deposit amounts.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 w-8 h-8 rounded bg-purple-500/10 text-purple-400 flex items-center justify-center border border-purple-500/20 flex-shrink-0" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:users" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></g></svg>
</div>
<div>
<h4 className="text-white font-medium text-sm" style={{}}>Staff Management</h4>
<p className="text-slate-500 text-xs mt-1 leading-relaxed" style={{}}>AI knows which stylist is available and when, preventing double bookings.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 w-8 h-8 rounded bg-rose-500/10 text-rose-400 flex items-center justify-center border border-rose-500/20 flex-shrink-0" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:megaphone" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path><path d="M6 14a12 12 0 0 0 2.4 7.2a2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14M8 6v8"></path></g></svg>
</div>
<div>
<h4 className="text-white font-medium text-sm" style={{}}>Marketing Broadcasts</h4>
<p className="text-slate-500 text-xs mt-1 leading-relaxed" style={{}}>Re-engage past customers with promos via SMS/Messenger in one click.</p>
</div>
</div>
</div>
</div>

<div className="order-1 lg:order-2 relative group perspective-1000">
<div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-700" style={{}}></div>
<div className="relative rounded-xl border border-white/10 bg-[#11131A] shadow-2xl overflow-hidden transform transition-transform duration-500 hover:scale-[1.02] hover:-rotate-1" style={{}}>

<div className="h-9 bg-[#161922] border-b border-white/5 flex items-center px-4 gap-2" style={{}}>
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50" style={{}}></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50" style={{}}></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50" style={{}}></div>
</div>
</div>
<div className="flex h-[380px]">

<div className="w-16 sm:w-40 border-r border-white/5 bg-[#14161D] flex flex-col p-3 gap-1" style={{}}>
<div className="p-2 mb-4">
<div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/30" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:command" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-blue-500/10 text-blue-400 text-xs font-medium" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:calendar" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M8 2v4m8-4v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></g></svg>
<span className="hidden sm:block">Calendar</span>
</div>
<div className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-500 hover:bg-white/5 text-xs font-medium transition-colors" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:users" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></g></svg>
<span className="hidden sm:block">Clients</span>
</div>
<div className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-500 hover:bg-white/5 text-xs font-medium transition-colors" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:settings" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0a2.34 2.34 0 0 0 3.319 1.915a2.34 2.34 0 0 1 2.33 4.033a2.34 2.34 0 0 0 0 3.831a2.34 2.34 0 0 1-2.33 4.033a2.34 2.34 0 0 0-3.319 1.915a2.34 2.34 0 0 1-4.659 0a2.34 2.34 0 0 0-3.32-1.915a2.34 2.34 0 0 1-2.33-4.033a2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></g></svg>
<span className="hidden sm:block">Settings</span>
</div>
</div>

<div className="flex-1 p-5 bg-[#11131A] relative" style={{}}>
<div className="flex justify-between items-center mb-6">
<div>
<h4 className="text-white font-medium text-sm" style={{}}>Schedule</h4>
<div className="text-[10px] text-slate-500 font-mono mt-0.5" style={{}}>Oct 24, 2023</div>
</div>
<button className="bg-white text-black text-[10px] font-bold px-2.5 py-1 rounded flex items-center gap-1 hover:bg-slate-200" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:plus" data-width="10" height="10" role="img" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Add
                                    </button>
</div>

<div className="relative space-y-4">
<div className="absolute left-[3rem] top-0 bottom-0 w-px bg-white/5 border-l border-dashed border-white/10 z-0" style={{}}></div>

<div className="flex items-start gap-3 relative z-10 group/block">
<span className="text-[10px] text-slate-500 w-9 pt-2 text-right font-mono" style={{}}>10:00</span>
<div className="flex-1 p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20 border-l-2 border-l-blue-500 hover:bg-blue-500/15 transition-colors cursor-pointer" style={{}}>
<div className="flex justify-between items-start">
<div>
<div className="text-[11px] font-medium text-white" style={{}}>Full Balayage</div>
<div className="text-[9px] text-blue-300" style={{}}>Maria • 2h 30m</div>
</div>
<svg aria-hidden="true" className="iconify text-blue-400 iconify--lucide" data-icon="lucide:check-circle" data-width="12" height="12" role="img" style={{}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg>
</div>
</div>
</div>

<div className="flex items-start gap-3 relative z-10 group/block">
<span className="text-[10px] text-slate-500 w-9 pt-2 text-right font-mono" style={{}}>13:00</span>
<div className="flex-1 p-2.5 rounded-lg bg-purple-500/10 border border-purple-500/20 border-l-2 border-l-purple-500 hover:bg-purple-500/15 transition-colors cursor-pointer" style={{}}>
<div className="flex justify-between items-start">
<div>
<div className="text-[11px] font-medium text-white" style={{}}>Manicure + Pedicure</div>
<div className="text-[9px] text-purple-300" style={{}}>Jen • 1h</div>
</div>
<svg aria-hidden="true" className="iconify text-purple-400 iconify--lucide" data-icon="lucide:check-circle" data-width="12" height="12" role="img" style={{}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg>
</div>
</div>
</div>

<div className="flex items-center gap-3 relative z-10 opacity-50 hover:opacity-100 transition-opacity">
<span className="text-[10px] text-slate-500 w-9 text-right font-mono" style={{}}>14:30</span>
<div className="flex-1 h-12 rounded-lg border border-dashed border-white/10 flex items-center justify-center text-[10px] text-slate-600 hover:bg-white/5 cursor-pointer" style={{}}>
                                            Available Slot
                                        </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-2xl text-white font-semibold mb-3 tracking-tight" style={{}}>Tailored for Beauty &amp; Wellness</h2>
<p className="text-slate-400 text-sm max-w-xl mx-auto" style={{}}>
                    Whoosh Ai understands industry-specific nuances like "trim", "retouch", or "full set".
                </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">

<div className="group p-5 rounded-xl bg-[#0F1116] border border-white/5 hover:border-blue-500/30 transition-all hover:-translate-y-1" style={{}}>
<div className="w-10 h-10 mx-auto rounded-full bg-white/5 flex items-center justify-center text-white mb-3 group-hover:bg-blue-500 group-hover:text-white transition-colors" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:scissors" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="6" cy="6" r="3"></circle><path d="M8.12 8.12L12 12m8-8L8.12 15.88"></path><circle cx="6" cy="18" r="3"></circle><path d="M14.8 14.8L20 20"></path></g></svg>
</div>
<h3 className="text-xs font-semibold text-white text-center" style={{}}>Hair Salons</h3>
</div>

<div className="group p-5 rounded-xl bg-[#0F1116] border border-white/5 hover:border-pink-500/30 transition-all hover:-translate-y-1" style={{}}>
<div className="w-10 h-10 mx-auto rounded-full bg-white/5 flex items-center justify-center text-white mb-3 group-hover:bg-pink-500 group-hover:text-white transition-colors" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:sparkles" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>
</div>
<h3 className="text-xs font-semibold text-white text-center" style={{}}>Nail Spas</h3>
</div>

<div className="group p-5 rounded-xl bg-[#0F1116] border border-white/5 hover:border-purple-500/30 transition-all hover:-translate-y-1" style={{}}>
<div className="w-10 h-10 mx-auto rounded-full bg-white/5 flex items-center justify-center text-white mb-3 group-hover:bg-purple-500 group-hover:text-white transition-colors" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:user" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></g></svg>
</div>
<h3 className="text-xs font-semibold text-white text-center" style={{}}>Barbers</h3>
</div>

<div className="group p-5 rounded-xl bg-[#0F1116] border border-white/5 hover:border-teal-500/30 transition-all hover:-translate-y-1" style={{}}>
<div className="w-10 h-10 mx-auto rounded-full bg-white/5 flex items-center justify-center text-white mb-3 group-hover:bg-teal-500 group-hover:text-white transition-colors" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:stethoscope" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11 2v2M5 2v2m0-1H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"></path><path d="M8 15a6 6 0 0 0 12 0v-3"></path><circle cx="20" cy="10" r="2"></circle></g></svg>
</div>
<h3 className="text-xs font-semibold text-white text-center" style={{}}>Aesthetics</h3>
</div>

<div className="group p-5 rounded-xl bg-[#0F1116] border border-white/5 hover:border-orange-500/30 transition-all hover:-translate-y-1" style={{}}>
<div className="w-10 h-10 mx-auto rounded-full bg-white/5 flex items-center justify-center text-white mb-3 group-hover:bg-orange-500 group-hover:text-white transition-colors" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:flower-2" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1"></path><circle cx="12" cy="8" r="2"></circle><path d="M12 10v12m0 0c4.2 0 7-1.667 7-5c-4.2 0-7 1.667-7 5m0 0c-4.2 0-7-1.667-7-5c4.2 0 7 1.667 7 5"></path></g></svg>
</div>
<h3 className="text-xs font-semibold text-white text-center" style={{}}>Massage</h3>
</div>

<div className="group p-5 rounded-xl bg-[#0F1116] border border-white/5 hover:border-indigo-500/30 transition-all hover:-translate-y-1" style={{}}>
<div className="w-10 h-10 mx-auto rounded-full bg-white/5 flex items-center justify-center text-white mb-3 group-hover:bg-indigo-500 group-hover:text-white transition-colors" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:eye" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M2.062 12.348a1 1 0 0 1 0-.696a10.75 10.75 0 0 1 19.876 0a1 1 0 0 1 0 .696a10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></g></svg>
</div>
<h3 className="text-xs font-semibold text-white text-center" style={{}}>Lash &amp; Brow</h3>
</div>
</div>
</div>
</section>

<section className="py-16 border-t border-white/5 bg-white/[0.01]" style={{}}>
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/5" style={{}}>
<div className="px-4 py-4">
<div className="text-4xl text-white mb-2 font-semibold tracking-tighter" style={{}}>24/7</div>
<div className="text-sm font-medium text-blue-400 mb-2" style={{}}>Availability</div>
<p className="text-xs text-slate-500" style={{}}>Capture bookings while you sleep.</p>
</div>
<div className="px-4 py-4">
<div className="text-4xl text-white mb-2 font-semibold tracking-tighter" style={{}}>100%</div>
<div className="text-sm font-medium text-blue-400 mb-2" style={{}}>Data Ownership</div>
<p className="text-xs text-slate-500" style={{}}>Your clients, your data. Export anytime.</p>
</div>
<div className="px-4 py-4">
<div className="text-4xl text-white mb-2 font-semibold tracking-tighter" style={{}}>0</div>
<div className="text-sm font-medium text-blue-400 mb-2" style={{}}>Tech Skills</div>
<p className="text-xs text-slate-500" style={{}}>Setup in minutes. No coding required.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-[#0B0C10] to-rose-950/20 pointer-events-none" style={{}}></div>
<div className="max-w-2xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl text-white mb-6 font-semibold tracking-tighter" style={{}}>Ready to clear your front desk?</h2>
<p className="text-slate-400 mb-10 text-lg" style={{}}>Join 500+ salons and spas automating their growth with Whoosh Ai.</p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-8">
<input className="flex-1 h-12 rounded-full px-6 bg-white/5 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-rose-500 focus:bg-white/10 transition-all text-sm" placeholder="enter@email.com" style={{}} type="email"/>
<button className="h-12 px-8 rounded-full bg-white text-black font-medium hover:bg-slate-200 transition-colors whitespace-nowrap text-sm" style={{}}>
                    Get Started
                </button>
</form>
<div className="flex items-center justify-center gap-6 text-xs text-slate-500" style={{}}>
<span className="flex items-center gap-1.5"><svg aria-hidden="true" className="iconify text-rose-500 iconify--lucide" data-icon="lucide:check" data-width="12" height="12" role="img" style={{}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> 14-day free trial</span>
<span className="flex items-center gap-1.5"><svg aria-hidden="true" className="iconify text-rose-500 iconify--lucide" data-icon="lucide:check" data-width="12" height="12" role="img" style={{}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> No credit card required</span>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-12 bg-[#0B0C10]" style={{}}>
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
<div className="w-6 h-6 rounded bg-gradient-to-br from-rose-600 to-orange-600 flex items-center justify-center text-white text-xs" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:wind" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M12.8 19.6A2 2 0 1 0 14 16H2m15.5-8a2.5 2.5 0 1 1 2 4H2m7.8-7.6A2 2 0 1 1 11 8H2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="font-bold text-base text-white tracking-tight" style={{}}>Whoosh<span className="text-rose-500" style={{}}>Ai</span></span>
</div>
<div className="text-slate-600 text-xs" style={{}}>
                © 2023 Whoosh Ai Inc. All rights reserved.
            </div>
<div className="flex gap-6 text-slate-600" style={{}}>
<a className="hover:text-white transition-colors" href="#" style={{}}><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:twitter" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
<a className="hover:text-white transition-colors" href="#" style={{}}><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:github" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5c.08-1.25-.27-2.48-1-3.5c.28-1.15.28-2.35 0-3.5c0 0-1 0-3 1.5c-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5c-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></g></svg></a>
<a className="hover:text-white transition-colors" href="#" style={{}}><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:instagram" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg></a>
</div>
</div>
</footer>

    </>
  );
}
