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
      

<nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
<div className="w-full px-6 h-16 flex items-center justify-between">

<div className="flex items-center gap-8">

<a className="flex items-center gap-2 group" href="#">
<div className="w-7 h-7 rounded-full bg-[#00FFA3] shadow-[0_0_15px_rgba(0,255,163,0.4)]"></div>
<span className="text-2xl font-semibold tracking-tight text-white">uinex</span>
</a>

<div className="hidden lg:flex items-center gap-6 text-sm font-normal text-gray-400">
<div className="group relative cursor-pointer flex items-center gap-1 hover:text-[#00FFA3] transition-colors">
                        Buy crypto <svg aria-hidden="true" className="lucide lucide-chevron-down w-3 h-3 opacity-50" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
<a className="hover:text-[#00FFA3] transition-colors" href="#markets">Markets</a>
<div className="group relative cursor-pointer flex items-center gap-1 hover:text-[#00FFA3] transition-colors">
                        Trade <svg aria-hidden="true" className="lucide lucide-chevron-down w-3 h-3 opacity-50" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
<div className="group relative cursor-pointer flex items-center gap-1 hover:text-[#00FFA3] transition-colors">
                        Grow <svg aria-hidden="true" className="lucide lucide-chevron-down w-3 h-3 opacity-50" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
<div className="group relative cursor-pointer flex items-center gap-1 hover:text-[#00FFA3] transition-colors">
                        Institutional <svg aria-hidden="true" className="lucide lucide-chevron-down w-3 h-3 opacity-50" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
<div className="group relative cursor-pointer flex items-center gap-1 hover:text-[#00FFA3] transition-colors">
                        Learn <svg aria-hidden="true" className="lucide lucide-chevron-down w-3 h-3 opacity-50" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
</div>

<div className="flex items-center gap-4">
<div className="hidden md:flex items-center bg-[#111] rounded-full px-3 py-1.5 border border-white/5 focus-within:border-[#00FFA3]/50 transition-colors">
<svg aria-hidden="true" className="lucide lucide-search w-4 h-4 text-gray-500 mr-2" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="bg-transparent border-none outline-none text-sm text-white placeholder-gray-600 w-24 lg:w-40" placeholder="Search crypto" type="text"/>
</div>
<button className="text-sm font-medium text-white hover:text-[#00FFA3] transition-colors">Log in</button>
<button className="text-sm font-medium bg-[#00FFA3] text-black px-5 py-1.5 rounded-full hover:bg-[#00FFA3]/90 hover:scale-105 transition-all shadow-[0_0_15px_rgba(0,255,163,0.3)]">
                    Sign up
                </button>
<div className="flex items-center gap-3 border-l border-white/10 pl-4 ml-2">
<button className="text-gray-400 hover:text-white transition-colors"><svg aria-hidden="true" className="lucide lucide-download w-5 h-5 stroke-[1.5]" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg></button>
<button className="text-gray-400 hover:text-white transition-colors"><svg aria-hidden="true" className="lucide lucide-bell w-5 h-5 stroke-[1.5]" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg></button>
<button className="text-gray-400 hover:text-white transition-colors"><svg aria-hidden="true" className="lucide lucide-globe w-5 h-5 stroke-[1.5]" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg></button>
</div>
</div>
</div>
</nav>
<main className="relative pt-24 overflow-hidden">

<section className="max-w-7xl mx-auto px-6 mb-20 relative">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="z-10 pt-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00FFA3]/10 border border-[#00FFA3]/20 mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FFA3] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#00FFA3]"></span>
</span>
<span className="text-xs font-medium text-[#00FFA3] tracking-wide uppercase">Live in UAE</span>
</div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-white mb-8 leading-[1.1] text-balance">
                        The future of crypto trading is <span className="text-[#00FFA3] neon-text-glow">here</span>
</h1>
<p className="text-gray-400 text-lg mb-8 max-w-md leading-relaxed">
                        Fully regulated spot &amp; derivatives crypto exchange. Trade with low fees, deep liquidity and lightning fast execution.
                    </p>
<div className="flex flex-col sm:flex-row items-center gap-3 max-w-md mb-12">
<div className="relative w-full">
<input className="w-full h-12 bg-white/5 border border-white/10 rounded-lg px-4 text-white placeholder-gray-500 focus:border-[#00FFA3] focus:ring-1 focus:ring-[#00FFA3] outline-none transition-all" placeholder="Enter email address" type="email"/>
</div>
<button className="w-full sm:w-auto h-12 px-8 rounded-lg bg-white hover:bg-gray-100 text-black font-semibold transition-all whitespace-nowrap">
                            Get Started
                        </button>
</div>

<div className="flex items-center gap-6 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-sm font-semibold tracking-widest text-white">PARTNERS</span>
<div className="h-4 w-px bg-white/20"></div>
<div className="flex items-center gap-6">
<span className="text-lg font-serif font-bold">TRIBECA</span>
<span className="text-lg font-bold italic tracking-wider">McLAREN</span>
</div>
</div>
</div>

<div className="relative flex justify-center lg:justify-end">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[600px] bg-[#00FFA3]/20 blur-[120px] rounded-full pointer-events-none"></div>
<div className="relative w-[320px] h-[640px] bg-[#000] border border-white/10 rounded-[3rem] p-3 shadow-2xl overflow-hidden rotate-[-2deg] hover:rotate-0 transition-transform duration-700">
<div className="w-full h-full bg-[#050505] rounded-[2.5rem] overflow-hidden relative flex flex-col">

<div className="p-6 flex justify-between items-center bg-gradient-to-b from-[#111] to-transparent">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[10px]">BTC</div>
<div>
<div className="text-sm font-medium">Bitcoin</div>
<div className="text-[10px] text-gray-400">BTC/USDT</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-medium text-white">$64,230.50</div>
<div className="text-[10px] text-[#00FFA3]">+2.45%</div>
</div>
</div>

<div className="flex-1 relative px-2">
<svg className="w-full h-full opacity-80" preserveaspectratio="none" viewbox="0 0 100 80">
<path d="M0,50 Q20,45 40,60 T80,30 T100,20" fill="none" stroke="#00FFA3" strokeWidth="0.5"></path>
<path d="M0,50 L10,52 L20,40 L30,45 L40,60 L50,55 L60,45 L70,30 L80,30 L90,25 L100,20 V100 H0 Z" fill="url(#grad)" opacity="0.2"></path>
<defs>
<lineargradient id="grad" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#00FFA3" stop-opacity="0.5"></stop>
<stop offset="100%" stop-color="#00FFA3" stop-opacity="0"></stop>
</lineargradient>
</defs>

<rect fill="#EF4444" height="10" rx="1" width="3" x="25" y="38"></rect>
<rect fill="#00FFA3" height="15" rx="1" width="3" x="35" y="42"></rect>
<rect fill="#EF4444" height="8" rx="1" width="3" x="45" y="50"></rect>
<rect fill="#00FFA3" height="18" rx="1" width="3" x="55" y="40"></rect>
<rect fill="#00FFA3" height="22" rx="1" width="3" x="65" y="28"></rect>
</svg>
</div>

<div className="absolute bottom-6 left-6 right-6">
<button className="w-full bg-[#00FFA3] text-black font-semibold py-3 rounded-xl shadow-[0_0_20px_rgba(0,255,163,0.4)]">Trade Now</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative w-full overflow-hidden bg-black border-y border-white/5 py-24 mb-32">

<div className="absolute inset-0 z-0 opacity-20">
<svg className="w-full h-full" preserveaspectratio="none">
<defs>
<pattern height="40" id="grid" patternunits="userSpaceOnUse" width="40">
<path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1a1a1a" strokeWidth="1"></path>
</pattern>
</defs>
<rect fill="url(#grid)" height="100%" width="100%"></rect>

<rect fill="#00FFA3" height="60" opacity="0.3" width="10" x="10%" y="40%"></rect>
<line opacity="0.3" stroke="#00FFA3" strokeWidth="1" x1="10.5%" x2="10.5%" y1="30%" y2="80%"></line>
<rect fill="#EF4444" height="40" opacity="0.3" width="10" x="15%" y="30%"></rect>
<line opacity="0.3" stroke="#EF4444" strokeWidth="1" x1="15.5%" x2="15.5%" y1="20%" y2="60%"></line>
<rect fill="#00FFA3" height="80" opacity="0.3" width="10" x="80%" y="20%"></rect>
<line opacity="0.3" stroke="#00FFA3" strokeWidth="1" x1="80.5%" x2="80.5%" y1="10%" y2="90%"></line>
</svg>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
<div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>
</div>
<div className="z-10 flex flex-col text-center max-w-7xl mr-auto ml-auto pr-6 pl-6 relative items-center justify-center">

<div className="relative w-full max-w-5xl z-30 group perspective-midrange">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#00FFA3]/20 blur-[100px] rounded-full"></div>

<div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-[#050505] transform transition-transform duration-700 hover:scale-[1.01]">

<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent z-10"></div>
<img alt="Ouinex in Forbes" className="w-full h-auto min-h-[400px] object-cover transition-all duration-700" src="Forbes_x_Ouinex_bdee1fd461.webp"/>

<div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-20 flex flex-col md:flex-row justify-between items-end gap-6">
<div className="text-left max-w-xl">
<div className="flex items-center gap-3 mb-4">
<span className="px-3 py-1 rounded-full bg-[#00FFA3] text-black text-xs font-bold uppercase tracking-wider">Featured Story</span>
<span className="text-gray-300 text-sm">Oct 24, 2024</span>
</div>
<h3 className="md:text-3xl leading-tight text-2xl font-medium text-white mb-2">"The Race Toward the All-in-One Financial App Is On"</h3>
<div className="flex items-center gap-2 text-[#00FFA3] text-sm font-medium hover:text-white transition-colors cursor-pointer w-fit group/link">
                        Read the full article 
                        <svg className="lucide lucide-arrow-right transition-transform group-hover/link:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-[1440px] mr-auto mb-32 ml-auto pr-6 pl-6" id="markets">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white mb-4">Professional Grade Platform</h2>
<p className="text-gray-400 text-lg max-w-2xl mx-auto">Engineered for speed, reliability and precision. Experience the power of OuiNex.</p>
</div>

<div className="rounded-xl border border-white/10 bg-[#050505] shadow-2xl overflow-hidden group">

<div className="h-11 bg-[#0A0A0A] border-b border-white/5 flex items-center px-4 gap-2">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
<div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
<div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
</div>
<div className="mx-auto w-1/3 h-6 bg-[#1A1A1A] rounded text-[10px] flex items-center justify-center text-gray-500 font-mono">
                        ouinex.com/trade/BTC-USDT
                    </div>
</div>

<div className="grid grid-cols-12 h-[600px] bg-[#050505] text-xs font-mono text-gray-400">

<div className="col-span-2 border-r border-white/5 p-0 hidden lg:flex flex-col">
<div className="p-3 border-b border-white/5">
<input className="w-full bg-[#111] border border-white/10 rounded px-2 py-1 text-white text-xs outline-none focus:border-[#00FFA3]/50" placeholder="Search" type="text"/>
</div>
<div className="flex-1 overflow-y-auto">
<div className="flex justify-between p-3 hover:bg-white/5 cursor-pointer border-l-2 border-[#00FFA3] bg-white/5">
<div>
<span className="text-white block font-medium">BTC</span>
<span className="text-[10px] text-gray-500">Vol 2.4B</span>
</div>
<div className="text-right">
<span className="text-white block">64,230</span>
<span className="text-[#00FFA3]">+2.4%</span>
</div>
</div>

<div className="flex justify-between p-3 hover:bg-white/5 cursor-pointer border-l-2 border-transparent">
<div><span className="text-white block">ETH</span></div>
<div className="text-right"><span className="text-white block">3,450</span><span className="text-red-500">-1.2%</span></div>
</div>
<div className="flex justify-between p-3 hover:bg-white/5 cursor-pointer border-l-2 border-transparent">
<div><span className="text-white block">SOL</span></div>
<div className="text-right"><span className="text-white block">145.2</span><span className="text-[#00FFA3]">+5.6%</span></div>
</div>
</div>
</div>

<div className="col-span-12 lg:col-span-7 border-r border-white/5 flex flex-col bg-[#050505] relative overflow-hidden">

<div className="h-12 border-b border-white/5 flex items-center px-4 gap-6 text-white/60">
<span className="text-white font-medium">BTC/USDT</span>
<span className="text-[#00FFA3]">64,230.50</span>
<div className="h-4 w-px bg-white/10"></div>
<span className="text-white hover:text-[#00FFA3] cursor-pointer">15m</span>
<span className="hover:text-[#00FFA3] cursor-pointer">1H</span>
<span className="hover:text-[#00FFA3] cursor-pointer">4H</span>
<span className="hover:text-[#00FFA3] cursor-pointer">1D</span>
<span className="ml-auto flex items-center gap-2"><svg aria-hidden="true" className="lucide lucide-bar-chart-2 w-4 h-4" data-lucide="bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V3"></path><path d="M19 21V9"></path></svg> Indicators</span>
</div>

<div className="flex-1 relative p-4 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgwVjB6IiBmaWxsPSIjMDUwNTA1Ii8+PHBhdGggZD0iTTAgNDBoNDBWMHoiIGZpbGw9IiMwNTA1MDUiLz48cGF0aCBkPSJNMCAzOWg0MHYxSDBWMzl6IiBmaWxsPSIjMTExIi8+PC9zdmc+')]">

<svg className="w-full h-full" preserveaspectratio="none">
<defs>
<lineargradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#00FFA3" stop-opacity="0.1"></stop>
<stop offset="100%" stop-color="#00FFA3" stop-opacity="0"></stop>
</lineargradient>
</defs>

<line stroke="#333" stroke-dasharray="2 2" strokeWidth="0.5" x1="0" x2="100%" y1="20%" y2="20%"></line>
<line stroke="#333" stroke-dasharray="2 2" strokeWidth="0.5" x1="0" x2="100%" y1="40%" y2="40%"></line>
<line stroke="#333" stroke-dasharray="2 2" strokeWidth="0.5" x1="0" x2="100%" y1="60%" y2="60%"></line>
<line stroke="#333" stroke-dasharray="2 2" strokeWidth="0.5" x1="0" x2="100%" y1="80%" y2="80%"></line>

<path d="M50 350 L60 320 L70 340 L80 300 L90 310 L100 280 L110 290 L120 250 L130 260 L140 220 L150 230" fill="none" opacity="0.2" stroke="#333" strokeWidth="1"></path>

<path className="" d="M0,350 Q100,320 200,300 T400,250 T600,200 T800,100" fill="url(#chartGradient)" stroke="#00FFA3" strokeWidth="1.5"></path>

<line stroke="#00FFA3" stroke-dasharray="4 2" strokeWidth="0.5" x1="0" x2="100%" y1="100" y2="100"></line>
<rect fill="#00FFA3" height="20" width="8%" x="92%" y="90"></rect>
<text fill="black" fontSize="10" font-weight="bold" x="94%" y="104">64,230</text>
</svg>
</div>
</div>

<div className="col-span-12 lg:col-span-3 p-4 flex flex-col gap-4 bg-[#080808]">
<div className="flex bg-[#111] rounded p-0.5">
<button className="flex-1 bg-[#00FFA3] text-black font-semibold py-1.5 rounded shadow-sm">Buy</button>
<button className="flex-1 py-1.5 rounded hover:text-white transition-colors">Sell</button>
</div>

<div className="space-y-0.5 my-2 font-mono text-[10px]">
<div className="flex justify-between text-red-500 opacity-60"><span className="text-gray-500">64,234.0</span><span>0.1245</span></div>
<div className="flex justify-between text-red-500 opacity-80"><span className="text-gray-500">64,233.0</span><span>0.5520</span></div>
<div className="flex justify-between text-red-500"><span className="text-gray-500">64,232.0</span><span>1.2005</span></div>
<div className="flex justify-between text-white py-1 border-y border-white/5 my-1 text-sm font-medium">
<span className="text-[#00FFA3]">64,230.50</span>
<span>$64,230.50</span>
</div>
<div className="flex justify-between text-[#00FFA3]"><span className="text-gray-500">64,229.0</span><span>2.1240</span></div>
<div className="flex justify-between text-[#00FFA3] opacity-80"><span className="text-gray-500">64,228.0</span><span>0.3301</span></div>
<div className="flex justify-between text-[#00FFA3] opacity-60"><span className="text-gray-500">64,227.0</span><span>5.2000</span></div>
</div>
<div className="space-y-3 mt-auto">
<div className="">
<label className="block text-[9px] uppercase tracking-wider text-gray-500 mb-1">Price (USDT)</label>
<div className="bg-[#111] border border-white/10 rounded px-3 py-2 text-white flex justify-between group-focus-within:border-[#00FFA3]">
<span>64,230.50</span>
</div>
</div>
<div className="">
<label className="block text-[9px] uppercase tracking-wider text-gray-500 mb-1">Amount (BTC)</label>
<div className="bg-[#111] border border-white/10 rounded px-3 py-2 text-white flex justify-between">
<span className="text-gray-500">0.00</span>
</div>
</div>

<div className="relative h-1 bg-gray-800 rounded mt-2">
<div className="absolute left-0 top-0 h-full w-1/2 bg-[#00FFA3]"></div>
<div className="absolute left-1/2 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow cursor-pointer"></div>
</div>
<button className="hover:bg-[#00E090] transition-colors font-bold text-black bg-[#00FFA3] w-full rounded mt-2 pt-3 pb-3">Buy BTC</button>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-[#0A0A0A] border border-white/5 p-6 rounded-2xl hover:border-[#00FFA3]/30 transition-all group">
<div className="w-10 h-10 bg-[#00FFA3]/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#00FFA3] transition-colors">
<svg aria-hidden="true" className="lucide lucide-shield w-5 h-5 text-[#00FFA3] group-hover:text-black" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">Fully Regulated</h3>
<p className="text-sm text-gray-400">Licensed by VARA in Dubai. Trade with confidence on a compliant platform.</p>
</div>

<div className="bg-[#0A0A0A] border border-white/5 p-6 rounded-2xl hover:border-[#00FFA3]/30 transition-all group">
<div className="w-10 h-10 bg-[#00FFA3]/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#00FFA3] transition-colors">
<svg aria-hidden="true" className="lucide lucide-zap w-5 h-5 text-[#00FFA3] group-hover:text-black" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">Low Latency</h3>
<p className="text-sm text-gray-400">Institutional-grade execution speed for professional traders.</p>
</div>

<div className="bg-[#0A0A0A] border border-white/5 p-6 rounded-2xl hover:border-[#00FFA3]/30 transition-all group">
<div className="w-10 h-10 bg-[#00FFA3]/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#00FFA3] transition-colors">
<svg aria-hidden="true" className="lucide lucide-globe w-5 h-5 text-[#00FFA3] group-hover:text-black" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">Global Access</h3>
<p className="text-sm text-gray-400">Seamless fiat on-ramps and off-ramps in multiple currencies.</p>
</div>

<div className="bg-[#0A0A0A] border border-white/5 p-6 rounded-2xl hover:border-[#00FFA3]/30 transition-all group">
<div className="w-10 h-10 bg-[#00FFA3]/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#00FFA3] transition-colors">
<svg aria-hidden="true" className="lucide lucide-wallet w-5 h-5 text-[#00FFA3] group-hover:text-black" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">Secure Storage</h3>
<p className="text-sm text-gray-400">Industry-leading custody solutions to keep your assets safe.</p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32">
<h2 className="text-2xl font-medium text-white mb-8">Featured Insights</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="relative aspect-video bg-gray-900 rounded-xl overflow-hidden group cursor-pointer border border-white/5 hover:border-[#00FFA3]/50 transition-colors">
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10"></div>
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552069777-6286df2782d4?q=80&amp;w=800')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-60"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#00FFA3]/90 rounded-full flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity scale-50 group-hover:scale-100">
<svg aria-hidden="true" className="lucide lucide-play w-5 h-5 text-black fill-black ml-1" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
<div className="absolute bottom-4 left-4 z-20">
<p className="text-xs font-semibold text-[#00FFA3] mb-1 uppercase tracking-wider">Strategy</p>
<h3 className="text-white font-medium text-sm">Market Analysis: Q4 Outlook</h3>
</div>
</div>

<div className="relative aspect-video bg-gray-900 rounded-xl overflow-hidden group cursor-pointer border border-white/5 hover:border-[#00FFA3]/50 transition-colors">
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10"></div>
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1621504450168-b8c43f9a7428?q=80&amp;w=800')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-60"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#00FFA3]/90 rounded-full flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity scale-50 group-hover:scale-100">
<svg aria-hidden="true" className="lucide lucide-play w-5 h-5 text-black fill-black ml-1" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
<div className="absolute bottom-4 left-4 z-20">
<p className="text-xs font-semibold text-[#00FFA3] mb-1 uppercase tracking-wider">Education</p>
<h3 className="text-white font-medium text-sm">Crypto Derivatives Explained</h3>
</div>
</div>

<div className="relative aspect-video bg-gray-900 rounded-xl overflow-hidden group cursor-pointer border border-white/5 hover:border-[#00FFA3]/50 transition-colors">
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10"></div>
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516245834210-c4c14278733f?q=80&amp;w=800')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-60"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#00FFA3]/90 rounded-full flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity scale-50 group-hover:scale-100">
<svg aria-hidden="true" className="lucide lucide-play w-5 h-5 text-black fill-black ml-1" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
<div className="absolute bottom-4 left-4 z-20">
<p className="text-xs font-semibold text-[#00FFA3] mb-1 uppercase tracking-wider">Partners</p>
<h3 className="text-white font-medium text-sm">OuiNex x McLaren Partnership</h3>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32">
<h2 className="text-3xl font-semibold text-center text-white mb-16 tracking-tight">Frequently Asked Questions</h2>
<div className="max-w-3xl mx-auto border-t border-white/10">

<div className="group border-b border-white/10 py-5 cursor-pointer hover:bg-white/5 px-4 transition-colors">
<div className="flex justify-between items-center">
<h3 className="text-base font-medium text-white">Is OuiNex regulated in the UAE?</h3>
<svg aria-hidden="true" className="lucide lucide-plus text-gray-400 group-hover:text-[#00FFA3] w-5 h-5 transition-colors" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
</div>

<div className="group border-b border-white/10 py-5 cursor-pointer hover:bg-white/5 px-4 transition-colors">
<div className="flex justify-between items-center">
<h3 className="text-base font-medium text-white">What are the trading fees?</h3>
<svg aria-hidden="true" className="lucide lucide-plus text-gray-400 group-hover:text-[#00FFA3] w-5 h-5 transition-colors" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
</div>

<div className="group border-b border-white/10 py-5 cursor-pointer hover:bg-white/5 px-4 transition-colors">
<div className="flex justify-between items-center">
<h3 className="text-base font-medium text-white">How do I deposit funds?</h3>
<svg aria-hidden="true" className="lucide lucide-plus text-gray-400 group-hover:text-[#00FFA3] w-5 h-5 transition-colors" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/10 bg-[#050505] pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row justify-between gap-12 mb-20">

<div className="lg:w-1/4">
<div className="flex items-center gap-2 mb-6">
<div className="w-7 h-7 rounded-full bg-[#00FFA3]"></div>
<span className="text-2xl font-semibold tracking-tight text-white">uinex</span>
</div>
<p className="text-xs text-gray-500 mb-6 leading-relaxed">
                        The world's leading regulated crypto exchange. Buy, sell and trade digital assets with confidence.
                    </p>
<button className="flex items-center gap-2 px-4 py-2 border border-white/10 rounded-lg text-xs text-white hover:bg-white/5 transition-colors">
<svg aria-hidden="true" className="lucide lucide-globe w-3 h-3 text-[#00FFA3]" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg> English (US) <svg aria-hidden="true" className="lucide lucide-chevron-down w-3 h-3 text-gray-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
</div>

<div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-8">
<div>
<h4 className="text-white font-medium text-sm mb-4">Platform</h4>
<ul className="space-y-3 text-xs text-gray-500">
<li><a className="hover:text-[#00FFA3] transition-colors" href="#">Markets</a></li>
<li><a className="hover:text-[#00FFA3] transition-colors" href="#">Spot Trading</a></li>
<li><a className="hover:text-[#00FFA3] transition-colors" href="#">Derivatives</a></li>
<li><a className="hover:text-[#00FFA3] transition-colors" href="#">Earn</a></li>
</ul>
</div>
<div className="">
<h4 className="text-white font-medium text-sm mb-4">Company</h4>
<ul className="space-y-3 text-xs text-gray-500">
<li className=""><a className="hover:text-[#00FFA3] transition-colors" href="#">About</a></li>
<li><a className="hover:text-[#00FFA3] transition-colors" href="#">Careers</a></li>
<li className=""><a className="hover:text-[#00FFA3] transition-colors" href="#">Press</a></li>
<li className=""><a className="hover:text-[#00FFA3] transition-colors" href="#">Legal</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Support</h4>
<ul className="space-y-3 text-xs text-gray-500">
<li><a className="hover:text-[#00FFA3] transition-colors" href="#">Help Center</a></li>
<li><a className="hover:text-[#00FFA3] transition-colors" href="#">API Documentation</a></li>
<li><a className="hover:text-[#00FFA3] transition-colors" href="#">Fees</a></li>
<li><a className="hover:text-[#00FFA3] transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>

<div className="lg:w-1/6">
<h4 className="text-white font-medium text-sm mb-4">Download App</h4>
<div className="bg-white p-2 rounded-lg w-fit">
<div className="w-24 h-24 bg-black flex items-center justify-center rounded">
<svg aria-hidden="true" className="lucide lucide-qr-code w-16 h-16 text-white" data-lucide="qr-code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="5" rx="1" width="5" x="3" y="3"></rect><rect height="5" rx="1" width="5" x="16" y="3"></rect><rect height="5" rx="1" width="5" x="3" y="16"></rect><path d="M21 16h-3a2 2 0 0 0-2 2v3"></path><path d="M21 21v.01"></path><path d="M12 7v3a2 2 0 0 1-2 2H7"></path><path d="M3 12h.01"></path><path d="M12 3h.01"></path><path d="M12 16v.01"></path><path d="M16 12h1"></path><path d="M21 12v.01"></path><path d="M12 21v-1"></path></svg>
</div>
</div>
</div>
</div>

<div className="border-t border-white/10 pt-8 mt-8">
<div className="flex items-start gap-3 bg-[#111] p-4 rounded-lg border border-white/5">
<svg aria-hidden="true" className="lucide lucide-shield-check w-4 h-4 text-[#00FFA3] mt-0.5 shrink-0" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<p className="text-[10px] text-gray-500 leading-relaxed">
                        OuiNex Middle East Fintech FZE is licensed by the Dubai Virtual Asset Regulatory Authority (VARA) under VASP Reference: VL/23/12/003 to provide (i) VA Exchange Services, (ii) VA Lending and Borrowing Services, (iii) VA Management and Investment Services, and (iv) VA Broker-Dealer Services. One Central, Dubai, UAE.
                    </p>
</div>
</div>

<div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-8 text-[10px] text-gray-600">
<p>© 2024 OuiNex. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-[#00FFA3] transition-colors" href="#"><svg aria-hidden="true" className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="hover:text-[#00FFA3] transition-colors" href="#"><svg aria-hidden="true" className="lucide lucide-linkedin w-4 h-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
<a className="hover:text-[#00FFA3] transition-colors" href="#"><svg aria-hidden="true" className="lucide lucide-instagram w-4 h-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
