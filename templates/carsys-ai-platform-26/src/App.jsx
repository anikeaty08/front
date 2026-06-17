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



        // Initialize Icons
        lucide.createIcons();

        // Scroll Animation Observer
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.animate-enter').forEach(el => {
            observer.observe(el);
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
      

<div className="fixed top-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0"></div>
<div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none translate-x-1/3 translate-y-1/3 z-0"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0A0A0C]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-gradient-ai flex items-center justify-center">
<svg className="lucide lucide-sparkles w-3 h-3 text-white" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<span className="text-lg font-semibold tracking-tight text-white">Carsys.ai</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#features">Services</a>
<a className="hover:text-white transition-colors" href="#how-it-works">How it Works</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-6">
<a className="hidden md:block text-base font-medium text-slate-400 hover:text-white transition-colors duration-300" href="#">Log in</a>
<a className="group relative isolate overflow-hidden bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-2.5 rounded-2xl text-sm font-medium text-white shadow-[0_0_20px_-5px_rgba(147,51,234,0.3)] transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(147,51,234,0.6)] hover:scale-[1.03] active:scale-[0.97]" href="#">
<span className="relative z-10">Sign up</span>
<div className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-400 to-purple-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
<div className="absolute inset-0 -z-10 bg-white/20 translate-y-full blur-md transition-transform duration-500 group-hover:translate-y-[-50%] group-hover:rotate-12"></div>
</a>
</div>
</div>
</nav>

<section className="md:pt-48 md:pb-32 overflow-hidden z-10 pt-32 pb-20 relative">
<div className="grid lg:grid-cols-2 gap-12 max-w-7xl mr-auto ml-auto pr-6 pl-6 gap-x-12 gap-y-12 items-center">

<div className="stagger-animate">
<div className="inline-flex gap-2 animate-enter animate-visible text-xs font-medium text-blue-400 bg-white/5 border-white/10 border rounded-full mb-6 pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                    Now available in Barcelona &amp; Madrid
                </div>
<h1 className="md:text-7xl leading-[1.1] animate-enter animate-visible text-5xl font-medium text-white tracking-tighter mb-6" style={{transitionDelay: '100ms'}}>Bureaucracy. <br/> <span className="text-gradient">Solved.</span></h1>
<p className="md:text-xl leading-relaxed animate-enter animate-visible text-lg text-slate-400 max-w-lg mb-8" style={{transitionDelay: '200ms'}}>
                    The AI-driven platform transforming complex vehicle paperwork into a seamless, instant digital experience. Import taxes, ZBE checks, and registration in seconds.
                </p>
<div className="flex flex-col sm:flex-row gap-4 animate-enter animate-visible" style={{transitionDelay: '300ms'}}>
<button className="bg-[#2563EB] hover:bg-blue-600 text-white px-8 py-3.5 rounded-full text-sm font-semibold tracking-tight transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] flex items-center justify-center gap-2 group">
                        Calculate Tax
                        <svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="glass hover:bg-white/10 text-white px-8 py-3.5 rounded-full text-sm font-semibold tracking-tight transition-all flex items-center justify-center gap-2">
<svg className="lucide lucide-play-circle w-4 h-4" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
                        See How It Works
                    </button>
</div>
<div className="mt-10 flex items-center gap-4 text-xs text-slate-500 animate-enter animate-visible" style={{transitionDelay: '400ms'}}>
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border border-[#0A0A0C] bg-slate-700 flex items-center justify-center overflow-hidden"><img alt="User" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/></div>
<div className="w-8 h-8 rounded-full border border-[#0A0A0C] bg-slate-700 flex items-center justify-center overflow-hidden"><img alt="User" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ana"/></div>
<div className="w-8 h-8 rounded-full border border-[#0A0A0C] bg-slate-700 flex items-center justify-center overflow-hidden"><img alt="User" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Marco"/></div>
</div>
<p>Trusted by 2,000+ drivers in Spain</p>
</div>
</div>

<div className="flex stagger-animate animate-enter animate-visible w-full h-[500px] relative perspective-1000 items-center justify-center" style={{transitionDelay: '200ms'}}>

<div className="absolute top-10 right-10 z-0 opacity-50">
<div className="w-32 h-32 rounded-full bg-blue-500/20 blur-3xl"></div>
</div>

<div className="glass transform hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700 ease-out shadow-blue-900/20 group cursor-default w-[340px] h-[460px] border-white/20 rounded-2xl border-t pt-6 pr-6 pb-6 pl-6 relative shadow-2xl rotate-x-6 rotate-y-12">

<div className="scanner-line group-hover:opacity-100 opacity-50 rounded-full px--10px"></div>

<div className="flex justify-between items-start mb-8">
<div className="">
<div className="h-3 w-12 bg-white/20 rounded mb-2"></div>
<div className="h-2 w-24 bg-white/10 rounded"></div>
</div>
<div className="w-8 h-8 rounded bg-green-500/20 flex items-center justify-center border border-green-500/30">
<svg className="lucide lucide-check w-4 h-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
</div>

<div className="space-y-4">
<div className="p-3 rounded-lg bg-white/5 border border-white/5">
<div className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">VIN Number</div>
<div className="font-mono text-sm text-white tracking-widest">WBA...89X2</div>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="p-3 rounded-lg bg-white/5 border border-white/5">
<div className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">CO2 Emissions</div>
<div className="text-sm text-white">114 g/km</div>
</div>
<div className="p-3 rounded-lg bg-white/5 border border-white/5">
<div className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">Euro Standard</div>
<div className="text-sm text-white">Euro 6d</div>
</div>
</div>

<div className="mt-6 pt-6 border-t border-white/10">
<div className="flex items-center gap-2 mb-3">
<svg className="lucide lucide-sparkles w-3 h-3 text-purple-400" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="text-xs font-semibold text-purple-300">AI Calculation Complete</span>
</div>
<div className="flex justify-between items-end">
<span className="text-sm text-slate-400">Registration Tax</span>
<span className="text-2xl font-bold text-white">€0.00</span>
</div>
<div className="mt-2 text-[10px] text-emerald-400 flex items-center gap-1">
<svg className="lucide lucide-trending-down w-3 h-3" data-lucide="trending-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 17h6v-6"></path><path d="m22 17-8.5-8.5-5 5L2 7"></path></svg>
                                Saved €420 vs Traditional Agency
                            </div>
</div>
</div>

</div>
</div>
</div>
</section>

<section className="z-10 pt-24 pb-24 relative" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 animate-enter stagger-animate">
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-white mb-4">Everything you need to drive.</h2>
<p className="text-slate-400 max-w-2xl mx-auto">From import taxes to emission stickers, our AI handles the boring part of owning a car in Spain.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px] gap-x-6 gap-y-6">

<div className="md:col-span-2 glass glass-hover rounded-3xl p-8 relative overflow-hidden group animate-enter stagger-animate">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
<svg className="lucide lucide-calculator w-32 h-32 text-blue-500" data-lucide="calculator" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" width="16" x="4" y="2"></rect><line x1="8" x2="16" y1="6" y2="6"></line><line x1="16" x2="16" y1="14" y2="18"></line><path d="M16 10h.01"></path><path d="M12 10h.01"></path><path d="M8 10h.01"></path><path d="M12 14h.01"></path><path d="M8 14h.01"></path><path d="M12 18h.01"></path><path d="M8 18h.01"></path></svg>
</div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="">
<div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mb-4 border border-blue-500/30">
<svg className="lucide lucide-zap w-5 h-5 text-blue-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-2xl font-semibold text-white tracking-tight mb-2">Instant Tax Calculator</h3>
<p className="text-sm text-slate-400 max-w-sm">Enter your VIN and get an exact breakdown of your registration tax (Impuesto de Matriculación) instantly.</p>
</div>

<div className="mt-6 bg-[#0A0A0C] border border-white/10 rounded-xl p-4 max-w-md shadow-2xl">
<div className="flex gap-2">
<div className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-slate-300 font-mono">
                                    WBA3392...
                                </div>
<button className="bg-blue-600 hover:bg-blue-500 text-white rounded-lg px-4 py-2 text-xs font-semibold transition-colors">
                                    Calculate
                                </button>
</div>
</div>
</div>
</div>

<div className="glass glass-hover rounded-3xl p-8 relative overflow-hidden group animate-enter stagger-animate">

<div className="absolute inset-0 bg-[#111] opacity-50" style={{backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-transparent to-transparent"></div>
<div className="relative z-10 h-full flex flex-col justify-end">
<div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center mb-4 border border-green-500/30">
<svg className="lucide lucide-map w-5 h-5 text-green-400" data-lucide="map" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path d="M15 5.764v15"></path><path d="M9 3.236v15"></path></svg>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-2">ZBE Sticker Check</h3>
<p className="text-xs text-slate-400">Verify if your car is allowed in Barcelona &amp; Madrid Low Emission Zones.</p>

<div className="absolute top-6 right-6 rotate-12 group-hover:rotate-0 transition-transform duration-500">
<div className="w-16 h-16 rounded-full bg-yellow-400 border-4 border-white flex items-center justify-center shadow-lg">
<span className="text-black font-bold text-xl">B</span>
</div>
</div>
</div>
</div>


</div>
</div>
</section>

<section className="bg-[#0A0A0C] pt-24 pb-24 relative" id="how-it-works">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 animate-enter stagger-animate">
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-white mb-4">From Paper to Plate in Minutes</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[2px] bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-green-500/20"></div>

<div className="text-center relative animate-enter stagger-animate">
<div className="w-24 h-24 mx-auto glass rounded-2xl flex items-center justify-center mb-6 relative z-10 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
<svg className="lucide lucide-upload-cloud w-10 h-10 text-blue-400" data-lucide="upload-cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 13v8"></path><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="m8 17 4-4 4 4"></path></svg>
</div>
<h3 className="text-lg font-semibold text-white mb-2">1. Upload</h3>
<p className="text-sm text-slate-400 px-6">Upload a photo of your car's technical sheet (Ficha Técnica) or type the VIN.</p>
</div>

<div className="text-center relative animate-enter stagger-animate" style={{transitionDelay: '200ms'}}>
<div className="w-24 h-24 mx-auto bg-gradient-ai rounded-2xl flex items-center justify-center mb-6 relative z-10 shadow-[0_0_30px_rgba(79,70,229,0.4)]">
<svg className="lucide lucide-cpu w-10 h-10 text-white" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</div>
<h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-2">2. AI Analysis</h3>
<p className="text-sm text-slate-400 px-6">Our engine extracts data, calculates taxes based on CO2, and fills the forms.</p>
</div>

<div className="text-center relative animate-enter stagger-animate" style={{transitionDelay: '400ms'}}>
<div className="w-24 h-24 mx-auto glass rounded-2xl flex items-center justify-center mb-6 relative z-10 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
<svg className="lucide lucide-check-circle-2 w-10 h-10 text-emerald-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-lg font-semibold text-white mb-2">3. Get Results</h3>
<p className="text-sm text-slate-400 px-6">Pay the exact tax amount securely. Download your provisional permit instantly.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-white/[0.01]">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-12">

<div className="p-8 rounded-3xl border border-white/5 opacity-60 hover:opacity-100 transition-opacity animate-enter stagger-animate">
<h3 className="text-xl font-medium text-slate-400 mb-8">Traditional Agency ("Gestoría")</h3>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-slate-500">
<svg className="lucide lucide-x w-5 h-5 text-red-900/50" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
<span>Wait time: 2-3 weeks</span>
</li>
<li className="flex items-center gap-3 text-slate-500">
<svg className="lucide lucide-x w-5 h-5 text-red-900/50" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
<span>Cost: €150 - €300 fees</span>
</li>
<li className="flex items-center gap-3 text-slate-500">
<svg className="lucide lucide-x w-5 h-5 text-red-900/50" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
<span>Manual paperwork &amp; errors</span>
</li>
<li className="flex items-center gap-3 text-slate-500">
<svg className="lucide lucide-x w-5 h-5 text-red-900/50" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
<span>Requires physical presence</span>
</li>
</ul>
</div>

<div className="p-8 rounded-3xl glass border-blue-500/30 relative animate-enter stagger-animate">
<div className="absolute -top-3 right-8 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Recommended</div>
<h3 className="text-xl font-medium text-white mb-8">Carsys AI Platform</h3>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-white">
<div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center"><svg className="lucide lucide-check w-3 h-3 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span>Wait time: Instant (Real-time)</span>
</li>
<li className="flex items-center gap-3 text-white">
<div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center"><svg className="lucide lucide-check w-3 h-3 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span>Cost: Flat fee €49</span>
</li>
<li className="flex items-center gap-3 text-white">
<div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center"><svg className="lucide lucide-check w-3 h-3 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span>100% Digital &amp; Error-free</span>
</li>
<li className="flex items-center gap-3 text-white">
<div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center"><svg className="lucide lucide-check w-3 h-3 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span>Do it from your phone</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-medium tracking-tighter text-white mb-12 text-center animate-enter stagger-animate">Trusted by modern drivers</h2>
<div className="grid md:grid-cols-3 gap-6">

<div className="glass rounded-2xl p-6 animate-enter stagger-animate">
<div className="flex items-center gap-1 text-yellow-500 mb-4">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-slate-300 text-sm mb-6 leading-relaxed">"Importing my BMW from Germany was a nightmare until I found this. Calculated the tax in seconds and paid it directly. Incredible."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-700 overflow-hidden"><img alt="" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Javier"/></div>
<div className="text-xs">
<div className="text-white font-semibold">Javier M.</div>
<div className="text-slate-500">Madrid, ES</div>
</div>
</div>
</div>

<div className="glass rounded-2xl p-6 animate-enter stagger-animate" style={{transitionDelay: '100ms'}}>
<div className="flex items-center gap-1 text-yellow-500 mb-4">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-slate-300 text-sm mb-6 leading-relaxed">"The gestoría quoted me €300 just for the service. Carsys did it for €49 and I finished it on a Sunday afternoon."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-700 overflow-hidden"><img alt="" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"/></div>
<div className="text-xs">
<div className="text-white font-semibold">Sarah L.</div>
<div className="text-slate-500">Barcelona, ES</div>
</div>
</div>
</div>

<div className="glass rounded-2xl p-6 animate-enter stagger-animate" style={{transitionDelay: '200ms'}}>
<div className="flex items-center gap-1 text-yellow-500 mb-4">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-slate-300 text-sm mb-6 leading-relaxed">"The AI actually corrected a mistake on my CO2 emissions that saved me into a lower tax bracket. It paid for itself."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-700 overflow-hidden"><img alt="" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Tom"/></div>
<div className="text-xs">
<div className="text-white font-semibold">Thomas W.</div>
<div className="text-slate-500">Malaga, ES</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0A0A0C]">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-medium tracking-tighter text-white mb-12 text-center animate-enter stagger-animate">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group glass rounded-2xl open:bg-white/5 transition-all animate-enter stagger-animate">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none">
<span className="font-medium text-white">Is this valid with the DGT?</span>
<span className="transition group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-5 h-5 text-slate-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed">
                        Yes. Carsys connects directly to the DGT (Dirección General de Tráfico) and AEAT (Tax Agency) APIs. The documents generated are official and legally binding.
                    </div>
</details>
<details className="group glass rounded-2xl open:bg-white/5 transition-all animate-enter stagger-animate">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none">
<span className="font-medium text-white">Which cars can I import?</span>
<span className="transition group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-5 h-5 text-slate-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed">
                        Currently we support all passenger cars (M1) imported from EU countries. We are adding support for motorcycles and non-EU imports later this year.
                    </div>
</details>
<details className="group glass rounded-2xl open:bg-white/5 transition-all animate-enter stagger-animate">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none">
<span className="font-medium text-white">How accurate is the tax calculator?</span>
<span className="transition group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-5 h-5 text-slate-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed">
                        100% accurate. We use the official BOE (Boletín Oficial del Estado) valuation tables and current tax brackets for CO2 emissions for the current year.
                    </div>
</details>
</div>
</div>
</section>

<footer className="border-t border-white/5 pt-16 pb-8 bg-[#0A0A0C]">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded bg-gradient-ai flex items-center justify-center">
<svg className="lucide lucide-sparkles w-3 h-3 text-white" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<span className="text-lg font-semibold tracking-tight text-white">Carsys.ai</span>
</div>
<p className="text-xs text-slate-500 mb-6">Automating bureaucracy for the modern era.</p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-white" href="#"><svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="text-slate-400 hover:text-white" href="#"><svg className="lucide lucide-instagram w-4 h-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="text-slate-400 hover:text-white" href="#"><svg className="lucide lucide-linkedin w-4 h-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
</div>
</div>
<div className="">
<h4 className="text-sm font-semibold text-white mb-4">Product</h4>
<ul className="space-y-2 text-xs text-slate-400">
<li className=""><a className="hover:text-white" href="#">Tax Calculator</a></li>
<li className=""><a className="hover:text-white" href="#">ZBE Checker</a></li>
<li className=""><a className="hover:text-white" href="#">Pricing</a></li>
<li className=""><a className="hover:text-white" href="#">API</a></li>
</ul>
</div>
<div className="">
<h4 className="text-sm font-semibold text-white mb-4">Company</h4>
<ul className="space-y-2 text-xs text-slate-400">
<li className=""><a className="hover:text-white" href="#">About</a></li>
<li className=""><a className="hover:text-white" href="#">Blog</a></li>
<li className=""><a className="hover:text-white" href="#">Careers</a></li>
<li className=""><a className="hover:text-white" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4">Newsletter</h4>
<div className="flex gap-2">
<input className="bg-white/5 border border-white/10 rounded px-3 py-2 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 w-full" placeholder="Enter email" type="email"/>
<button className="bg-white/10 hover:bg-white/20 text-white p-2 rounded transition-colors"><svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></button>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-8 gap-4">
<div className="text-xs text-slate-600">© 2024 Carsys AI Technologies S.L. All rights reserved.</div>
<div className="flex gap-6 text-xs text-slate-600">
<a className="hover:text-slate-400" href="#">Privacy Policy</a>
<a className="hover:text-slate-400" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

<div className="fixed bottom-6 left-6 right-6 z-50 md:hidden">
<button className="w-full bg-[#2563EB] text-white font-semibold py-4 rounded-2xl shadow-2xl shadow-blue-600/40 flex items-center justify-center gap-2">
<svg className="lucide lucide-scan-line w-5 h-5" data-lucide="scan-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><path d="M7 12h10"></path></svg>
            Calculate Tax Now
        </button>
</div>


    </>
  );
}
