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
      
<div className="noise"></div>

<nav className="fixed top-6 left-0 right-0 z-40 flex justify-center px-6">
<div className="glass-panel px-2 py-2 rounded-full flex items-center gap-1 shadow-2xl shadow-black/50">
<a className="px-5 py-2 rounded-full hover:bg-white/5 transition-all text-xs font-medium text-slate-300 hover:text-white tracking-wide" href="#">Products</a>
<a className="px-5 py-2 rounded-full hover:bg-white/5 transition-all text-xs font-medium text-slate-300 hover:text-white tracking-wide" href="#">Logistics</a>
<div className="mx-2 h-4 w-[1px] bg-white/10"></div>
<a className="px-4 py-2 flex items-center gap-2 group" href="#">
<span className="iconify text-white" data-icon="lucide:anchor" data-width="16"></span>
<span className="font-semibold tracking-tighter text-sm">BES</span>
</a>
<div className="mx-2 h-4 w-[1px] bg-white/10"></div>
<a className="px-5 py-2 rounded-full hover:bg-white/5 transition-all text-xs font-medium text-slate-300 hover:text-white tracking-wide" href="#">Company</a>
<a className="px-1 py-1 rounded-full bg-white text-black hover:scale-105 transition-transform flex items-center justify-center w-8 h-8" href="#">
<span className="iconify" data-icon="lucide:arrow-up-right" data-width="16"></span>
</a>
</div>
</nav>

<header className="relative min-h-screen flex flex-col justify-center items-center pt-24 overflow-hidden">

<div className="absolute inset-0 z-0 hero-glow"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full opacity-20 animate-[spin_60s_linear_infinite]"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full opacity-30 animate-[spin_40s_linear_infinite_reverse]"></div>
<div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-widest text-blue-400 mb-8 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span>
                Barcelona Port ZAL
            </div>
<h1 className="text-6xl md:text-8xl lg:text-9xl font-medium tracking-tighter leading-[0.9] mb-8 gradient-text">
                Supply Chain<br/>
                Synchronized.
            </h1>
<p className="text-lg md:text-xl text-slate-400 font-light max-w-2xl mx-auto leading-relaxed mb-12">
                We orchestrate the flow of provisions and technical stores for the world's most demanding fleets. Precision logistics from the Mediterranean hub.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="group h-12 px-8 rounded-full bg-white text-black text-sm font-semibold hover:bg-slate-200 transition-all flex items-center gap-2">
                    Start Provisioning
                    <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:chevron-right" data-width="16"></span>
</button>
<button className="h-12 px-8 rounded-full border border-white/10 text-slate-300 text-sm font-medium hover:bg-white/5 transition-all">
                    View Catalog
                </button>
</div>
</div>

<div className="mt-20 relative w-full max-w-6xl mx-auto perspective-[2000px] px-4">
<div className="relative rounded-t-2xl border border-white/10 bg-[#0A0A0A] shadow-2xl shadow-blue-900/10 overflow-hidden transform rotate-x-12 translate-y-12 opacity-80 grid-mask h-[400px]">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1494412574643-35d324698420?q=80&amp;w=2064&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-40 mix-blend-luminosity"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent"></div>

<div className="absolute top-8 left-8 p-4 glass-panel rounded-xl border border-white/10 w-64">
<div className="flex items-center justify-between mb-4">
<span className="text-xs text-slate-400 uppercase tracking-wider">Vessel Status</span>
<span className="w-2 h-2 bg-green-500 rounded-full"></span>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:ship" data-width="20"></span>
</div>
<div>
<div className="text-sm font-medium text-white">MSC Bellissima</div>
<div className="text-xs text-slate-500">Dock C, Terminal 4</div>
</div>
</div>
</div>
<div className="absolute top-24 right-20 p-4 glass-panel rounded-xl border border-white/10 w-48">
<div className="text-xs text-slate-400 uppercase tracking-wider mb-2">Delivery ETA</div>
<div className="text-2xl font-medium text-white tracking-tight">08:45 AM</div>
<div className="w-full bg-white/10 h-1 rounded-full mt-3 overflow-hidden">
<div className="w-3/4 bg-blue-500 h-full rounded-full"></div>
</div>
</div>
</div>
</div>
</header>

<section className="py-12 border-y border-white/5 bg-white/[0.01]">
<div className="marquee-container overflow-hidden whitespace-nowrap py-4 max-w-7xl mx-auto">
<div className="inline-flex gap-24 items-center animate-[marquee_30s_linear_infinite]">
<span className="text-xl font-medium tracking-tighter text-white/30 uppercase">Royal Caribbean</span>
<span className="text-xl font-medium tracking-tighter text-white/30 uppercase">Maersk Line</span>
<span className="text-xl font-medium tracking-tighter text-white/30 uppercase">MSC Cruises</span>
<span className="text-xl font-medium tracking-tighter text-white/30 uppercase">Carnival</span>
<span className="text-xl font-medium tracking-tighter text-white/30 uppercase">Hapag-Lloyd</span>
<span className="text-xl font-medium tracking-tighter text-white/30 uppercase">CMA CGM</span>

<span className="text-xl font-medium tracking-tighter text-white/30 uppercase">Royal Caribbean</span>
<span className="text-xl font-medium tracking-tighter text-white/30 uppercase">Maersk Line</span>
<span className="text-xl font-medium tracking-tighter text-white/30 uppercase">MSC Cruises</span>
<span className="text-xl font-medium tracking-tighter text-white/30 uppercase">Carnival</span>
<span className="text-xl font-medium tracking-tighter text-white/30 uppercase">Hapag-Lloyd</span>
</div>
</div>
</section>

<section className="py-32 px-6">
<div className="max-w-7xl mx-auto">
<div className="mb-20">
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-4 text-white">Capabilities</h2>
<p className="text-slate-400 max-w-lg">Comprehensive maritime solutions designed for speed, compliance, and quality assurance.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">

<div className="md:col-span-2 row-span-2 rounded-3xl overflow-hidden relative group border border-white/10 bg-[#080808]">
<img alt="Fresh Provisions" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0" src="https://images.unsplash.com/photo-1628876495697-38e947d48d08?q=80&amp;w=2068&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent p-10 flex flex-col justify-end">
<span className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md mb-6 bg-white/5 text-white">
<span className="iconify" data-icon="lucide:utensils" data-width="24"></span>
</span>
<h3 className="text-3xl font-medium text-white mb-2 tracking-tight">Provisions &amp; Bonded Stores</h3>
<p className="text-slate-300 text-sm max-w-md">Sourcing premium F&amp;B products globally. From fresh local produce to bonded liquors and tobacco, managed in our temperature-controlled ZAL facility.</p>
</div>
</div>

<div className="rounded-3xl p-8 border border-white/10 bg-[#080808] hover:border-white/20 transition-colors relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-[50px] group-hover:bg-blue-600/20 transition-all"></div>
<span className="iconify text-slate-400 mb-6 group-hover:text-blue-400 transition-colors" data-icon="lucide:wrench" data-width="32"></span>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">Technical &amp; Deck</h3>
<p className="text-slate-400 text-sm leading-relaxed">IMPA/ISSA catalog compliance. Engine parts, nautical charts, and safety equipment delivered alongside provisions.</p>
</div>

<div className="rounded-3xl p-8 border border-white/10 bg-[#080808] hover:border-white/20 transition-colors relative overflow-hidden group">
<div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-600/10 rounded-full blur-[50px] group-hover:bg-purple-600/20 transition-all"></div>
<span className="iconify text-slate-400 mb-6 group-hover:text-purple-400 transition-colors" data-icon="lucide:container" data-width="32"></span>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">Logistics Hub</h3>
<p className="text-slate-400 text-sm leading-relaxed">12,000m² facility in Barcelona's ZAL Port. Strategic storage for owner's goods and spare parts consolidation.</p>
</div>

<div className="md:col-span-3 rounded-3xl border border-white/10 bg-[#080808] relative overflow-hidden flex flex-col md:flex-row items-center">
<div className="p-10 md:w-1/2 z-10">
<div className="flex items-center gap-2 mb-4">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-xs font-semibold tracking-wider text-green-500 uppercase">Live Operations</span>
</div>
<h3 className="text-3xl font-medium text-white mb-4 tracking-tight">Last Mile Precision</h3>
<p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-8">
                            Our fleet of refrigerated trucks operates 24/7 within the port terminals. Real-time tracking ensures sync with tight vessel schedules.
                        </p>
<a className="text-sm font-medium text-white border-b border-white/30 pb-0.5 hover:border-white transition-colors inline-flex items-center gap-2" href="#">
                            View Fleet Details <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>
<div className="md:w-1/2 h-full min-h-[200px] w-full relative">

<div className="absolute inset-0 bg-[#0F0F11]">
<svg className="w-full h-full opacity-20" viewbox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
<path className="text-blue-500" d="M0,150 Q100,100 200,150 T400,150" fill="none" stroke="currentColor" strokeWidth="0.5"></path>
<path className="text-blue-500" d="M0,160 Q100,110 200,160 T400,160" fill="none" stroke="currentColor" strokeWidth="0.5"></path>
<path className="text-blue-500" d="M0,170 Q100,120 200,170 T400,170" fill="none" stroke="currentColor" strokeWidth="0.5"></path>

<circle className="animate-pulse" cx="200" cy="150" fill="#3B82F6" r="3"></circle>
<circle cx="300" cy="180" fill="white" opacity="0.5" r="2"></circle>
<circle cx="100" cy="120" fill="white" opacity="0.5" r="2"></circle>
</svg>
</div>
<div className="absolute inset-0 bg-gradient-to-l from-[#080808] to-transparent"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left">
<div>
<div className="text-4xl md:text-5xl font-semibold text-white tracking-tighter mb-2">35+</div>
<div className="text-xs text-slate-500 uppercase tracking-widest font-medium">Years Experience</div>
</div>
<div>
<div className="text-4xl md:text-5xl font-semibold text-white tracking-tighter mb-2">ISO</div>
<div className="text-xs text-slate-500 uppercase tracking-widest font-medium">9001 • 14001 • 22000</div>
</div>
<div>
<div className="text-4xl md:text-5xl font-semibold text-white tracking-tighter mb-2">24/7</div>
<div className="text-xs text-slate-500 uppercase tracking-widest font-medium">Port Operation</div>
</div>
<div>
<div className="text-4xl md:text-5xl font-semibold text-white tracking-tighter mb-2">12k</div>
<div className="text-xs text-slate-500 uppercase tracking-widest font-medium">SQM Storage</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 text-center relative overflow-hidden">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="relative z-10 max-w-2xl mx-auto">
<h2 className="text-5xl md:text-6xl font-medium tracking-tighter text-white mb-8">Ready to dock?</h2>
<p className="text-slate-400 text-lg mb-10 font-light">Experience the efficiency of Barcelona Europe Supply. Contact us for quotes or port information.</p>
<form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
<input className="flex-1 bg-white/5 border border-white/10 rounded-full px-6 h-12 text-white placeholder:text-slate-600 focus:outline-none focus:border-white/30 transition-colors text-sm" placeholder="Enter your work email" type="email"/>
<button className="h-12 px-8 rounded-full bg-white text-black text-sm font-semibold hover:bg-slate-200 transition-colors whitespace-nowrap" type="submit">
                    Get in touch
                </button>
</form>
</div>
</section>

<footer className="border-t border-white/10 bg-black pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
<div className="space-y-6">
<a className="flex items-center gap-2 group" href="#">
<span className="iconify text-white" data-icon="lucide:anchor" data-width="20"></span>
<span className="text-lg font-bold tracking-tighter text-white">BES</span>
</a>
<p className="text-sm text-slate-500 leading-relaxed">
                        Barcelona Europe Supply S.L.<br/>
                        Carrer de l'Atlàntic, 112-120<br/>
                        ZAL Port (Prat), 08820<br/>
                        Barcelona, Spain
                    </p>
</div>
<div>
<h4 className="text-white font-medium mb-6 text-sm">Services</h4>
<ul className="space-y-4 text-sm text-slate-500">
<li><a className="hover:text-white transition-colors" href="#">Cruise Supply</a></li>
<li><a className="hover:text-white transition-colors" href="#">Cargo &amp; Merchant</a></li>
<li><a className="hover:text-white transition-colors" href="#">Bonded Stores</a></li>
<li><a className="hover:text-white transition-colors" href="#">Logistics</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6 text-sm">Company</h4>
<ul className="space-y-4 text-sm text-slate-500">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Sustainability</a></li>
<li><a className="hover:text-white transition-colors" href="#">Quality Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6 text-sm">Connect</h4>
<ul className="space-y-4 text-sm text-slate-500">
<li><a className="hover:text-white transition-colors" href="#">LinkedIn</a></li>
<li><a className="hover:text-white transition-colors" href="#">Instagram</a></li>
<li><a className="hover:text-white transition-colors" href="#">Port Community</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 gap-4">
<div className="text-xs text-slate-600">
                    © 2023 Barcelona Europe Supply. All rights reserved.
                </div>
<div className="flex items-center gap-6">
<a className="text-xs text-slate-600 hover:text-white transition-colors" href="#">Privacy</a>
<a className="text-xs text-slate-600 hover:text-white transition-colors" href="#">Terms</a>
<a className="text-xs text-slate-600 hover:text-white transition-colors" href="#">Cookies</a>
</div>
</div>
</div>
</footer>

<style>
        @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
    </style>

    </>
  );
}
