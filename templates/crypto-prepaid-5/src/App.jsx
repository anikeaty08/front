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



        // Simple script to update summary based on selection
        const radios = document.querySelectorAll('input[name="amount"]');
        const displayAmount = document.getElementById('display-amount');
        const displayTotal = document.getElementById('display-total');
        
        radios.forEach(radio => {
            radio.addEventListener('change', (e) => {
                const val = parseInt(e.target.value);
                displayAmount.innerText = `$${val.toLocaleString()}.00`;
                displayTotal.innerText = `$${(val + 5).toLocaleString()}.00`;
            });
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
      

<div className="fixed inset-0 pointer-events-none z-0">
<div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] rounded-full blur-[120px] bg-zinc-800/20"></div>
<div className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] rounded-full blur-[120px] bg-zinc-900/30"></div>
<div className="absolute inset-0 bg-noise opacity-30"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b backdrop-blur-md border-white/5 bg-black/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-semibold tracking-tighter flex items-center gap-2 text-white" href="#">
<svg aria-hidden="true" data-icon="lucide:ghost" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M9 10h.01M15 10h.01M12 2a8 8 0 0 0-8 8v12l3-3l2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                GhostX.Cards
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="transition-colors hover:text-white" href="#features">Features</a>
<a className="transition-colors hover:text-white" href="#pricing">Buy Cards</a>
<a className="transition-colors hover:text-white" href="#">Check Balance</a>
</div>
<button className="text-sm font-medium px-4 py-2 rounded-full transition-colors bg-zinc-100 text-black hover:bg-white">
                Connect Wallet
            </button>
</div>
</nav>
<main className="relative z-10 pt-32 pb-20">

<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center mb-32">
<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium border-white/10 bg-white/5 text-zinc-400">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-emerald-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                    Live Inventory Available
                </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] text-white">
                    The Invisible <br/>
<span className="text-zinc-500">Spending Power.</span>
</h1>
<p className="text-lg max-w-md leading-relaxed text-zinc-400">
                    Premium prepaid crypto cards. No KYC. No identity verification. Instant global delivery. Spending limits up to $50,000.
                </p>
<div className="flex flex-wrap gap-4">
<a className="px-8 py-3.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 bg-white text-black hover:bg-zinc-200" href="#pricing">
                        Get Started <svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<button className="px-8 py-3.5 rounded-lg text-sm font-medium border transition-colors border-white/10 hover:bg-white/5 text-zinc-300">
                        How it Works
                    </button>
</div>
<div className="pt-8 flex items-center gap-6 text-xs text-zinc-500 font-medium">
<div className="flex items-center gap-2">
<svg aria-hidden="true" data-icon="lucide:shield-check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg> Secure
                    </div>
<div className="flex items-center gap-2">
<svg aria-hidden="true" data-icon="lucide:zap" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Instant
                    </div>
<div className="flex items-center gap-2">
<svg aria-hidden="true" data-icon="lucide:globe" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20"></path></g></svg> Global
                    </div>
</div>
</div>

<div className="relative group perspective-1000">
<div className="relative w-full aspect-[1.586] rounded-2xl bg-gradient-to-br border shadow-2xl p-8 flex flex-col justify-between overflow-hidden transition-transform duration-500 group-hover:scale-[1.02] group-hover:rotate-1 from-zinc-800 via-zinc-900 to-black border-white/10">

<div className="absolute inset-0 bg-noise opacity-20 pointer-events-none"></div>
<div className="absolute -top-20 -right-20 w-64 h-64 blur-[80px] rounded-full pointer-events-none bg-white/5"></div>
<div className="flex justify-between items-start relative z-10">
<div className="flex items-center gap-2">
<svg aria-hidden="true" data-icon="lucide:ghost" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 10h.01M15 10h.01M12 2a8 8 0 0 0-8 8v12l3-3l2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="font-semibold tracking-tighter text-lg text-white">GhostX</span>
</div>
<span className="text-zinc-500 font-mono text-sm">PREPAID</span>
</div>
<div className="relative z-10">
<div className="flex gap-4 items-center mb-6">

<div className="w-12 h-9 rounded bg-gradient-to-br border relative overflow-hidden flex items-center justify-center from-yellow-200 to-yellow-600 border-yellow-700/50">
<div className="absolute inset-0 border-[0.5px] rounded opacity-50 border-black/20"></div>
<svg className="text-black/40" fill="none" height="24" stroke="currentColor" strokeWidth="0.5" viewbox="0 0 24 24" width="24">
<path d="M4 4h16v16H4z"></path>
<path d="M4 12h16M12 4v16"></path>
</svg>
</div>

<svg aria-hidden="true" data-icon="lucide:wifi" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01M2 8.82a15 15 0 0 1 20 0M5 12.859a10 10 0 0 1 14 0m-10.5 3.57a5 5 0 0 1 7 0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="font-mono text-lg tracking-widest mb-2 text-zinc-400">**** **** **** 8824</div>
<div className="flex justify-between items-end">
<div className="text-xs text-zinc-500 uppercase font-medium tracking-wide">
                                NO KYC REQUIRED
                            </div>

<div className="flex relative">
<div className="w-8 h-8 rounded-full bg-red-500/90 mix-blend-screen z-10"></div>
<div className="w-8 h-8 rounded-full bg-yellow-500/90 mix-blend-screen -ml-4 z-0"></div>
</div>
</div>
</div>
</div>

<div className="absolute -inset-4 bg-gradient-to-r rounded-2xl blur-2xl -z-10 opacity-20 group-hover:opacity-30 transition-opacity from-zinc-700 to-zinc-900"></div>
</div>
</div>

<div className="max-w-7xl mx-auto px-6" id="pricing">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="text-3xl font-semibold tracking-tight mb-4 text-white">Select Your Balance</h2>
<p className="text-zinc-400">Choose a denomination to load onto your GhostX card instantly.</p>
</div>
<div className="flex gap-2 p-1 rounded-lg border bg-zinc-900 border-white/5">
<button className="px-4 py-1.5 roundedmd text-xs font-medium shadow-sm bg-zinc-800 text-white">USD</button>
<button className="px-4 py-1.5 rounded-md text-xs font-medium text-zinc-500 hover:text-white">EUR</button>
</div>
</div>

<div className="grid lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-x-4 gap-y-4">

<label className="cursor-pointer group relative w-full">
<input checked="" className="peer sr-only" name="amount" type="radio" value="100"/>
<div className="relative w-full aspect-[1.586] rounded-xl overflow-hidden transition-all duration-300 group-hover:scale-[1.03] group-hover:-translate-y-1 group-hover:shadow-2xl ring-offset-2 ring-offset-black peer-checked:ring-2 peer-checked:ring-white bg-gradient-to-br from-blue-600 to-indigo-900 border border-white/10 shadow-lg">

<div className="absolute inset-0 bg-noise opacity-20 pointer-events-none mix-blend-overlay"></div>
<div className="absolute -top-[40%] -right-[40%] w-[80%] h-[80%] rounded-full blur-3xl bg-white/10 pointer-events-none"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>

<div className="relative h-full flex flex-col justify-between p-4 z-10">
<div className="flex justify-between items-start">
<div className="flex items-center gap-1.5 text-white/90">
<svg className="lucide lucide-ghost" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M9 10h.01"></path><path d="M15 10h.01"></path><path d="M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8"></path></svg>
<span className="text-[10px] font-bold tracking-widest uppercase font-mono">GhostX</span>
</div>
<span className="text-white font-bold text-lg tracking-tight drop-shadow-sm font-sans">$100</span>
</div>
<div className="flex items-center gap-2">
<div className="w-8 h-6 rounded-[3px] bg-gradient-to-br from-yellow-200 to-yellow-600 border border-yellow-700/50 relative overflow-hidden flex items-center justify-center shadow-inner">
<svg className="text-black/40 w-full h-full scale-125 opacity-60" fill="none" height="24" stroke="currentColor" strokeWidth="0.5" viewbox="0 0 24 24" width="24">
<path d="M4 4h16v16H4z"></path>
<path d="M4 12h16M12 4v16"></path>
</svg>
</div>
<svg className="lucide lucide-rss text-white/60 rotate-45" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle></svg>
</div>
<div className="flex justify-between items-end">
<div className="space-y-0.5">
<div className="font-mono text-[9px] text-white/70 tracking-widest">**** 8824</div>
<div className="text-[7px] uppercase text-white/50 font-bold tracking-wider">No KYC</div>
</div>
<div className="flex relative">
<div className="w-4 h-4 rounded-full bg-red-500/90 mix-blend-screen shadow-sm"></div>
<div className="w-4 h-4 rounded-full bg-yellow-500/90 mix-blend-screen -ml-2 shadow-sm"></div>
</div>
</div>
</div>
</div>
</label>

<label className="cursor-pointer group relative w-full">
<input className="peer sr-only" name="amount" type="radio" value="250"/>
<div className="relative w-full aspect-[1.586] rounded-xl overflow-hidden transition-all duration-300 group-hover:scale-[1.03] group-hover:-translate-y-1 group-hover:shadow-2xl ring-offset-2 ring-offset-black peer-checked:ring-2 peer-checked:ring-white bg-gradient-to-br from-emerald-600 to-teal-900 border border-white/10 shadow-lg">
<div className="absolute inset-0 bg-noise opacity-20 pointer-events-none mix-blend-overlay"></div>
<div className="absolute -top-[40%] -right-[40%] w-[80%] h-[80%] rounded-full blur-3xl bg-white/10 pointer-events-none"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
<div className="relative h-full flex flex-col justify-between p-4 z-10">
<div className="flex justify-between items-start">
<div className="flex items-center gap-1.5 text-white/90">
<svg className="lucide lucide-ghost" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M9 10h.01"></path><path d="M15 10h.01"></path><path d="M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8"></path></svg>
<span className="text-[10px] font-bold tracking-widest uppercase font-mono">GhostX</span>
</div>
<span className="text-white font-bold text-lg tracking-tight drop-shadow-sm font-sans">$250</span>
</div>
<div className="flex items-center gap-2">
<div className="w-8 h-6 rounded-[3px] bg-gradient-to-br from-yellow-200 to-yellow-600 border border-yellow-700/50 relative overflow-hidden flex items-center justify-center shadow-inner">
<svg className="text-black/40 w-full h-full scale-125 opacity-60" fill="none" height="24" stroke="currentColor" strokeWidth="0.5" viewbox="0 0 24 24" width="24">
<path d="M4 4h16v16H4z"></path>
<path d="M4 12h16M12 4v16"></path>
</svg>
</div>
<svg className="lucide lucide-rss text-white/60 rotate-45" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle></svg>
</div>
<div className="flex justify-between items-end">
<div className="space-y-0.5">
<div className="font-mono text-[9px] text-white/70 tracking-widest">**** 8824</div>
<div className="text-[7px] uppercase text-white/50 font-bold tracking-wider">No KYC</div>
</div>
<div className="flex relative">
<div className="w-4 h-4 rounded-full bg-red-500/90 mix-blend-screen shadow-sm"></div>
<div className="w-4 h-4 rounded-full bg-yellow-500/90 mix-blend-screen -ml-2 shadow-sm"></div>
</div>
</div>
</div>
</div>
</label>

<label className="cursor-pointer group relative w-full">
<input className="peer sr-only" name="amount" type="radio" value="500"/>
<div className="relative w-full aspect-[1.586] rounded-xl overflow-hidden transition-all duration-300 group-hover:scale-[1.03] group-hover:-translate-y-1 group-hover:shadow-2xl ring-offset-2 ring-offset-black peer-checked:ring-2 peer-checked:ring-white bg-gradient-to-br from-violet-600 to-purple-900 border border-white/10 shadow-lg">
<div className="absolute inset-0 bg-noise opacity-20 pointer-events-none mix-blend-overlay"></div>
<div className="absolute -top-[40%] -right-[40%] w-[80%] h-[80%] rounded-full blur-3xl bg-white/10 pointer-events-none"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
<div className="relative h-full flex flex-col justify-between p-4 z-10">
<div className="flex justify-between items-start">
<div className="flex items-center gap-1.5 text-white/90">
<svg className="lucide lucide-ghost" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M9 10h.01"></path><path d="M15 10h.01"></path><path d="M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8"></path></svg>
<span className="text-[10px] font-bold tracking-widest uppercase font-mono">GhostX</span>
</div>
<span className="text-white font-bold text-lg tracking-tight drop-shadow-sm font-sans">$500</span>
</div>
<div className="flex items-center gap-2">
<div className="w-8 h-6 rounded-[3px] bg-gradient-to-br from-yellow-200 to-yellow-600 border border-yellow-700/50 relative overflow-hidden flex items-center justify-center shadow-inner">
<svg className="text-black/40 w-full h-full scale-125 opacity-60" fill="none" height="24" stroke="currentColor" strokeWidth="0.5" viewbox="0 0 24 24" width="24">
<path d="M4 4h16v16H4z"></path>
<path d="M4 12h16M12 4v16"></path>
</svg>
</div>
<svg className="lucide lucide-rss text-white/60 rotate-45" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle></svg>
</div>
<div className="flex justify-between items-end">
<div className="space-y-0.5">
<div className="font-mono text-[9px] text-white/70 tracking-widest">**** 8824</div>
<div className="text-[7px] uppercase text-white/50 font-bold tracking-wider">No KYC</div>
</div>
<div className="flex relative">
<div className="w-4 h-4 rounded-full bg-red-500/90 mix-blend-screen shadow-sm"></div>
<div className="w-4 h-4 rounded-full bg-yellow-500/90 mix-blend-screen -ml-2 shadow-sm"></div>
</div>
</div>
</div>
</div>
</label>

<label className="cursor-pointer group relative w-full">
<input className="peer sr-only" name="amount" type="radio" value="1000"/>
<div className="relative w-full aspect-[1.586] rounded-xl overflow-hidden transition-all duration-300 group-hover:scale-[1.03] group-hover:-translate-y-1 group-hover:shadow-2xl ring-offset-2 ring-offset-black peer-checked:ring-2 peer-checked:ring-white bg-gradient-to-br from-rose-600 to-pink-900 border border-white/10 shadow-lg">
<div className="absolute inset-0 bg-noise opacity-20 pointer-events-none mix-blend-overlay"></div>
<div className="absolute -top-[40%] -right-[40%] w-[80%] h-[80%] rounded-full blur-3xl bg-white/10 pointer-events-none"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
<div className="relative h-full flex flex-col justify-between p-4 z-10">
<div className="flex justify-between items-start">
<div className="flex items-center gap-1.5 text-white/90">
<svg className="lucide lucide-ghost" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M9 10h.01"></path><path d="M15 10h.01"></path><path d="M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8"></path></svg>
<span className="text-[10px] font-bold tracking-widest uppercase font-mono">GhostX</span>
</div>
<span className="text-white font-bold text-lg tracking-tight drop-shadow-sm font-sans">$1,000</span>
</div>
<div className="flex items-center gap-2">
<div className="w-8 h-6 rounded-[3px] bg-gradient-to-br from-yellow-200 to-yellow-600 border border-yellow-700/50 relative overflow-hidden flex items-center justify-center shadow-inner">
<svg className="text-black/40 w-full h-full scale-125 opacity-60" fill="none" height="24" stroke="currentColor" strokeWidth="0.5" viewbox="0 0 24 24" width="24">
<path d="M4 4h16v16H4z"></path>
<path d="M4 12h16M12 4v16"></path>
</svg>
</div>
<svg className="lucide lucide-rss text-white/60 rotate-45" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle></svg>
</div>
<div className="flex justify-between items-end">
<div className="space-y-0.5">
<div className="font-mono text-[9px] text-white/70 tracking-widest">**** 8824</div>
<div className="text-[7px] uppercase text-white/50 font-bold tracking-wider">No KYC</div>
</div>
<div className="flex relative">
<div className="w-4 h-4 rounded-full bg-red-500/90 mix-blend-screen shadow-sm"></div>
<div className="w-4 h-4 rounded-full bg-yellow-500/90 mix-blend-screen -ml-2 shadow-sm"></div>
</div>
</div>
</div>
</div>
</label>

<label className="cursor-pointer group relative w-full">
<input className="peer sr-only" name="amount" type="radio" value="1500"/>
<div className="relative w-full aspect-[1.586] rounded-xl overflow-hidden transition-all duration-300 group-hover:scale-[1.03] group-hover:-translate-y-1 group-hover:shadow-2xl ring-offset-2 ring-offset-black peer-checked:ring-2 peer-checked:ring-white bg-gradient-to-br from-orange-500 to-red-800 border border-white/10 shadow-lg">
<div className="absolute inset-0 bg-noise opacity-20 pointer-events-none mix-blend-overlay"></div>
<div className="absolute -top-[40%] -right-[40%] w-[80%] h-[80%] rounded-full blur-3xl bg-white/10 pointer-events-none"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
<div className="relative h-full flex flex-col justify-between p-4 z-10">
<div className="flex justify-between items-start">
<div className="flex items-center gap-1.5 text-white/90">
<svg className="lucide lucide-ghost" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M9 10h.01"></path><path d="M15 10h.01"></path><path d="M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8"></path></svg>
<span className="text-[10px] font-bold tracking-widest uppercase font-mono">GhostX</span>
</div>
<span className="text-white font-bold text-lg tracking-tight drop-shadow-sm font-sans">$1,500</span>
</div>
<div className="flex items-center gap-2">
<div className="w-8 h-6 rounded-[3px] bg-gradient-to-br from-yellow-200 to-yellow-600 border border-yellow-700/50 relative overflow-hidden flex items-center justify-center shadow-inner">
<svg className="text-black/40 w-full h-full scale-125 opacity-60" fill="none" height="24" stroke="currentColor" strokeWidth="0.5" viewbox="0 0 24 24" width="24">
<path d="M4 4h16v16H4z"></path>
<path d="M4 12h16M12 4v16"></path>
</svg>
</div>
<svg className="lucide lucide-rss text-white/60 rotate-45" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle></svg>
</div>
<div className="flex justify-between items-end">
<div className="space-y-0.5">
<div className="font-mono text-[9px] text-white/70 tracking-widest">**** 8824</div>
<div className="text-[7px] uppercase text-white/50 font-bold tracking-wider">No KYC</div>
</div>
<div className="flex relative">
<div className="w-4 h-4 rounded-full bg-red-500/90 mix-blend-screen shadow-sm"></div>
<div className="w-4 h-4 rounded-full bg-yellow-500/90 mix-blend-screen -ml-2 shadow-sm"></div>
</div>
</div>
</div>
</div>
</label>

<label className="cursor-pointer group relative w-full">
<input className="peer sr-only" name="amount" type="radio" value="2000"/>
<div className="relative w-full aspect-[1.586] rounded-xl overflow-hidden transition-all duration-300 group-hover:scale-[1.03] group-hover:-translate-y-1 group-hover:shadow-2xl ring-offset-2 ring-offset-black peer-checked:ring-2 peer-checked:ring-white bg-gradient-to-br from-cyan-500 to-blue-800 border border-white/10 shadow-lg">
<div className="absolute inset-0 bg-noise opacity-20 pointer-events-none mix-blend-overlay"></div>
<div className="absolute -top-[40%] -right-[40%] w-[80%] h-[80%] rounded-full blur-3xl bg-white/10 pointer-events-none"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
<div className="relative h-full flex flex-col justify-between p-4 z-10">
<div className="flex justify-between items-start">
<div className="flex items-center gap-1.5 text-white/90">
<svg className="lucide lucide-ghost" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M9 10h.01"></path><path d="M15 10h.01"></path><path d="M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8"></path></svg>
<span className="text-[10px] font-bold tracking-widest uppercase font-mono">GhostX</span>
</div>
<span className="text-white font-bold text-lg tracking-tight drop-shadow-sm font-sans">$2,000</span>
</div>
<div className="flex items-center gap-2">
<div className="w-8 h-6 rounded-[3px] bg-gradient-to-br from-yellow-200 to-yellow-600 border border-yellow-700/50 relative overflow-hidden flex items-center justify-center shadow-inner">
<svg className="text-black/40 w-full h-full scale-125 opacity-60" fill="none" height="24" stroke="currentColor" strokeWidth="0.5" viewbox="0 0 24 24" width="24">
<path d="M4 4h16v16H4z"></path>
<path d="M4 12h16M12 4v16"></path>
</svg>
</div>
<svg className="lucide lucide-rss text-white/60 rotate-45" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle></svg>
</div>
<div className="flex justify-between items-end">
<div className="space-y-0.5">
<div className="font-mono text-[9px] text-white/70 tracking-widest">**** 8824</div>
<div className="text-[7px] uppercase text-white/50 font-bold tracking-wider">No KYC</div>
</div>
<div className="flex relative">
<div className="w-4 h-4 rounded-full bg-red-500/90 mix-blend-screen shadow-sm"></div>
<div className="w-4 h-4 rounded-full bg-yellow-500/90 mix-blend-screen -ml-2 shadow-sm"></div>
</div>
</div>
</div>
</div>
</label>

<label className="cursor-pointer group relative w-full">
<input className="peer sr-only" name="amount" type="radio" value="3000"/>
<div className="relative w-full aspect-[1.586] rounded-xl overflow-hidden transition-all duration-300 group-hover:scale-[1.03] group-hover:-translate-y-1 group-hover:shadow-2xl ring-offset-2 ring-offset-black peer-checked:ring-2 peer-checked:ring-white bg-gradient-to-br from-fuchsia-600 to-purple-900 border border-white/10 shadow-lg">
<div className="absolute inset-0 bg-noise opacity-20 pointer-events-none mix-blend-overlay"></div>
<div className="absolute -top-[40%] -right-[40%] w-[80%] h-[80%] rounded-full blur-3xl bg-white/10 pointer-events-none"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
<div className="relative h-full flex flex-col justify-between p-4 z-10">
<div className="flex justify-between items-start">
<div className="flex items-center gap-1.5 text-white/90">
<svg className="lucide lucide-ghost" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M9 10h.01"></path><path d="M15 10h.01"></path><path d="M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8"></path></svg>
<span className="text-[10px] font-bold tracking-widest uppercase font-mono">GhostX</span>
</div>
<span className="text-white font-bold text-lg tracking-tight drop-shadow-sm font-sans">$3,000</span>
</div>
<div className="flex items-center gap-2">
<div className="w-8 h-6 rounded-[3px] bg-gradient-to-br from-yellow-200 to-yellow-600 border border-yellow-700/50 relative overflow-hidden flex items-center justify-center shadow-inner">
<svg className="text-black/40 w-full h-full scale-125 opacity-60" fill="none" height="24" stroke="currentColor" strokeWidth="0.5" viewbox="0 0 24 24" width="24">
<path d="M4 4h16v16H4z"></path>
<path d="M4 12h16M12 4v16"></path>
</svg>
</div>
<svg className="lucide lucide-rss text-white/60 rotate-45" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle></svg>
</div>
<div className="flex justify-between items-end">
<div className="space-y-0.5">
<div className="font-mono text-[9px] text-white/70 tracking-widest">**** 8824</div>
<div className="text-[7px] uppercase text-white/50 font-bold tracking-wider">No KYC</div>
</div>
<div className="flex relative">
<div className="w-4 h-4 rounded-full bg-red-500/90 mix-blend-screen shadow-sm"></div>
<div className="w-4 h-4 rounded-full bg-yellow-500/90 mix-blend-screen -ml-2 shadow-sm"></div>
</div>
</div>
</div>
</div>
</label>

<label className="cursor-pointer group relative w-full">
<input className="peer sr-only" name="amount" type="radio" value="5000"/>
<div className="relative w-full aspect-[1.586] rounded-xl overflow-hidden transition-all duration-300 group-hover:scale-[1.03] group-hover:-translate-y-1 group-hover:shadow-2xl ring-offset-2 ring-offset-black peer-checked:ring-2 peer-checked:ring-white bg-gradient-to-br from-indigo-500 to-blue-900 border border-white/10 shadow-lg">
<div className="absolute inset-0 bg-noise opacity-20 pointer-events-none mix-blend-overlay"></div>
<div className="absolute -top-[40%] -right-[40%] w-[80%] h-[80%] rounded-full blur-3xl bg-white/10 pointer-events-none"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
<div className="relative h-full flex flex-col justify-between p-4 z-10">
<div className="flex justify-between items-start">
<div className="flex items-center gap-1.5 text-white/90">
<svg className="lucide lucide-ghost" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M9 10h.01"></path><path d="M15 10h.01"></path><path d="M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8"></path></svg>
<span className="text-[10px] font-bold tracking-widest uppercase font-mono">GhostX</span>
</div>
<span className="text-white font-bold text-lg tracking-tight drop-shadow-sm font-sans">$5,000</span>
</div>
<div className="flex items-center gap-2">
<div className="w-8 h-6 rounded-[3px] bg-gradient-to-br from-yellow-200 to-yellow-600 border border-yellow-700/50 relative overflow-hidden flex items-center justify-center shadow-inner">
<svg className="text-black/40 w-full h-full scale-125 opacity-60" fill="none" height="24" stroke="currentColor" strokeWidth="0.5" viewbox="0 0 24 24" width="24">
<path d="M4 4h16v16H4z"></path>
<path d="M4 12h16M12 4v16"></path>
</svg>
</div>
<svg className="lucide lucide-rss text-white/60 rotate-45" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle></svg>
</div>
<div className="flex justify-between items-end">
<div className="space-y-0.5">
<div className="font-mono text-[9px] text-white/70 tracking-widest">**** 8824</div>
<div className="text-[7px] uppercase text-white/50 font-bold tracking-wider">No KYC</div>
</div>
<div className="flex relative">
<div className="w-4 h-4 rounded-full bg-red-500/90 mix-blend-screen shadow-sm"></div>
<div className="w-4 h-4 rounded-full bg-yellow-500/90 mix-blend-screen -ml-2 shadow-sm"></div>
</div>
</div>
</div>
</div>
</label>

<label className="cursor-pointer group relative w-full">
<input className="peer sr-only" name="amount" type="radio" value="10000"/>
<div className="relative w-full aspect-[1.586] rounded-xl overflow-hidden transition-all duration-300 group-hover:scale-[1.03] group-hover:-translate-y-1 group-hover:shadow-2xl ring-offset-2 ring-offset-black peer-checked:ring-2 peer-checked:ring-white bg-gradient-to-br from-amber-400 to-yellow-700 border border-white/20 shadow-lg">
<div className="absolute inset-0 bg-noise opacity-20 pointer-events-none mix-blend-overlay"></div>
<div className="absolute -top-[40%] -right-[40%] w-[80%] h-[80%] rounded-full blur-3xl bg-white/20 pointer-events-none"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
<div className="relative h-full flex flex-col justify-between p-4 z-10">
<div className="flex justify-between items-start">
<div className="flex items-center gap-1.5 text-black/80">
<svg className="lucide lucide-ghost" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M9 10h.01"></path><path d="M15 10h.01"></path><path d="M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8"></path></svg>
<span className="text-[10px] font-bold tracking-widest uppercase font-mono">GhostX</span>
</div>
<span className="text-black/80 font-bold text-lg tracking-tight drop-shadow-none font-sans">$10k</span>
</div>
<div className="flex items-center gap-2">
<div className="w-8 h-6 rounded-[3px] bg-gradient-to-br from-neutral-200 to-neutral-400 border border-neutral-500/30 relative overflow-hidden flex items-center justify-center shadow-inner">
<svg className="text-black/50 w-full h-full scale-125 opacity-60" fill="none" height="24" stroke="currentColor" strokeWidth="0.5" viewbox="0 0 24 24" width="24">
<path d="M4 4h16v16H4z"></path>
<path d="M4 12h16M12 4v16"></path>
</svg>
</div>
<svg className="lucide lucide-rss text-black/50 rotate-45" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle></svg>
</div>
<div className="flex justify-between items-end">
<div className="space-y-0.5">
<div className="font-mono text-[9px] text-black/60 tracking-widest">**** 8824</div>
<div className="text-[7px] uppercase text-black/40 font-bold tracking-wider">No KYC</div>
</div>
<div className="flex relative">
<div className="w-4 h-4 rounded-full bg-red-600/90 mix-blend-multiply shadow-sm"></div>
<div className="w-4 h-4 rounded-full bg-yellow-600/90 mix-blend-multiply -ml-2 shadow-sm"></div>
</div>
</div>
</div>
</div>
</label>

<label className="cursor-pointer group relative w-full">
<input className="peer sr-only" name="amount" type="radio" value="50000"/>
<div className="relative w-full aspect-[1.586] rounded-xl overflow-hidden transition-all duration-300 group-hover:scale-[1.03] group-hover:-translate-y-1 group-hover:shadow-2xl ring-offset-2 ring-offset-black peer-checked:ring-2 peer-checked:ring-white bg-gradient-to-br from-zinc-800 to-black border border-white/20 shadow-lg">
<div className="absolute inset-0 bg-noise opacity-20 pointer-events-none mix-blend-overlay"></div>
<div className="absolute -top-[40%] -right-[40%] w-[80%] h-[80%] rounded-full blur-3xl bg-white/5 pointer-events-none"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black to-transparent pointer-events-none opacity-80"></div>
<div className="relative h-full flex flex-col justify-between p-4 z-10">
<div className="flex justify-between items-start">
<div className="flex items-center gap-1.5 text-white">
<svg className="lucide lucide-ghost" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M9 10h.01"></path><path d="M15 10h.01"></path><path d="M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8"></path></svg>
<span className="text-[10px] font-bold tracking-widest uppercase font-mono">GhostX</span>
</div>
<span className="text-white font-bold text-lg tracking-tight drop-shadow-sm font-sans">$50k</span>
</div>
<div className="flex items-center gap-2">
<div className="w-8 h-6 rounded-[3px] bg-gradient-to-br from-zinc-200 to-zinc-500 border border-white/20 relative overflow-hidden flex items-center justify-center shadow-inner">
<svg className="text-black/50 w-full h-full scale-125 opacity-60" fill="none" height="24" stroke="currentColor" strokeWidth="0.5" viewbox="0 0 24 24" width="24">
<path d="M4 4h16v16H4z"></path>
<path d="M4 12h16M12 4v16"></path>
</svg>
</div>
<svg className="lucide lucide-rss text-white/50 rotate-45" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle></svg>
</div>
<div className="flex justify-between items-end">
<div className="space-y-0.5">
<div className="font-mono text-[9px] text-zinc-400 tracking-widest">**** 8824</div>
<div className="text-[7px] uppercase text-zinc-600 font-bold tracking-wider">No KYC</div>
</div>
<div className="flex relative">
<div className="w-4 h-4 rounded-full bg-red-500/90 mix-blend-lighten shadow-sm"></div>
<div className="w-4 h-4 rounded-full bg-yellow-500/90 mix-blend-lighten -ml-2 shadow-sm"></div>
</div>
</div>
</div>
</div>
</label>
</div>

<div className="lg:col-span-1">
<div className="glass-panel rounded-2xl p-6 sticky top-24">
<h3 className="text-lg font-medium mb-6 text-white">Order Summary</h3>
<div className="space-y-4 mb-8">
<div className="flex justify-between text-sm">
<span className="text-zinc-400">Card Value</span>
<span className="font-medium text-white" id="display-amount">$100.00</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-zinc-400">Activation Fee</span>
<span className="font-medium text-white">$5.00</span>
</div>
<div className="h-px my-2 bg-white/10"></div>
<div className="flex justify-between items-center">
<span className="text-zinc-400">Total</span>
<span className="text-xl font-semibold tracking-tight text-white" id="display-total">$105.00</span>
</div>
</div>
<div className="space-y-4">
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-500 uppercase">Payment Method</label>
<div className="grid grid-cols-4 gap-2">
<button className="flex items-center justify-center p-3 rounded-lg border transition-colors focus:ring-2 ring-offset-2 border-white/10 bg-zinc-900 hover:bg-zinc-800 ring-white/20 ring-offset-black">
<svg aria-hidden="true" data-icon="lucide:bitcoin" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042l-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893l-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042l.348-1.97M7.48 20.364l3.126-17.727" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<button className="flex items-center justify-center p-3 rounded-lg border transition-colors focus:ring-2 ring-offset-2 border-white/10 bg-zinc-900 hover:bg-zinc-800 ring-white/20 ring-offset-black">

<svg aria-hidden="true" data-icon="mdi:ethereum" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m12 1.75l-6.25 10.5L12 16l6.25-3.75zM5.75 13.5L12 22.25l6.25-8.75L12 17.25z" fill="currentColor"></path></svg>
</button>
<button className="flex items-center justify-center p-3 rounded-lg border transition-colors focus:ring-2 ring-offset-2 border-white/10 bg-zinc-900 hover:bg-zinc-800 ring-white/20 ring-offset-black">

<span className="text-xs font-bold text-green-500">USDT</span>
</button>
<button className="flex items-center justify-center p-3 rounded-lg border transition-colors focus:ring-2 ring-offset-2 border-white/10 bg-zinc-900 hover:bg-zinc-800 ring-white/20 ring-offset-black">

<span className="text-xs font-bold text-orange-600">XMR</span>
</button>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-500 uppercase">Email (For delivery)</label>
<input className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-zinc-500 transition-colors placeholder:text-zinc-600 bg-zinc-900 border-white/10 text-white" placeholder="you@proton.me" type="email"/>
</div>
<button className="w-full font-medium py-3.5 rounded-lg transition-colors flex items-center justify-center gap-2 mt-4 group bg-white text-black hover:bg-zinc-200">
                                Purchase Card <svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<p className="text-[10px] text-center leading-tight mt-2 text-zinc-600">
                                By clicking Purchase, you agree to our Terms. Delivery is automated and usually takes less than 2 minutes.
                            </p>
</div>
</div>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 mt-32" id="features">
<div className="grid md:grid-cols-3 gap-8">
<div className="space-y-4">
<div className="w-10 h-10 rounded-lg border flex items-center justify-center bg-zinc-900 border-white/10">
<svg aria-hidden="true" data-icon="lucide:venetian-mask" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M18 11c-1.5 0-2.5.5-3 2"></path><path d="M4 6a2 2 0 0 0-2 2v4a5 5 0 0 0 5 5a8 8 0 0 1 5 2a8 8 0 0 1 5-2a5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3a8 8 0 0 0-5 2a8 8 0 0 0-5-2z"></path><path d="M6 11c1.5 0 2.5.5 3 2"></path></g></svg>
</div>
<h3 className="text-lg font-medium text-white">100% Anonymous</h3>
<p className="text-sm leading-relaxed text-zinc-400">
                        No ID verification required. We don't collect names, addresses, or phone numbers. Your privacy is the priority.
                    </p>
</div>
<div className="space-y-4">
<div className="w-10 h-10 rounded-lg border flex items-center justify-center bg-zinc-900 border-white/10">
<svg aria-hidden="true" data-icon="lucide:credit-card" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="14" rx="2" width="20" x="2" y="5"></rect><path d="M2 10h20"></path></g></svg>
</div>
<h3 className="text-lg font-medium text-white">Global Mastercard</h3>
<p className="text-sm leading-relaxed text-zinc-400">
                        Accepted worldwide anywhere Mastercard is supported. Online shopping, subscriptions, and travel bookings.
                    </p>
</div>
<div className="space-y-4">
<div className="w-10 h-10 rounded-lg border flex items-center justify-center bg-zinc-900 border-white/10">
<svg aria-hidden="true" data-icon="lucide:wallet" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></g></svg>
</div>
<h3 className="text-lg font-medium text-white">Crypto Friendly</h3>
<p className="text-sm leading-relaxed text-zinc-400">
                        Top up with Bitcoin, Ethereum, USDT, Monero and more. Instant conversion to USD liquidity.
                    </p>
</div>
</div>
</div>

<div className="max-w-3xl mx-auto px-6 mt-32 pb-20 border-t pt-20 border-white/5">
<h2 className="text-2xl font-semibold tracking-tight mb-8 text-white">Frequently Asked Questions</h2>
<div className="space-y-6">
<details className="group cursor-pointer">
<summary className="flex justify-between items-center font-medium list-none text-zinc-300">
                        Do I need to provide ID?
                        <svg aria-hidden="true" data-icon="lucide:chevron-down" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</summary>
<p className="text-sm text-zinc-500 mt-2 leading-relaxed">
                        No. GhostX.Cards are completely non-KYC. We simply deliver the card details to your provided email address.
                    </p>
</details>
<div className="h-px bg-white/5"></div>
<details className="group cursor-pointer">
<summary className="flex justify-between items-center font-medium list-none text-zinc-300">
                        How long does delivery take?
                        <svg aria-hidden="true" data-icon="lucide:chevron-down" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</summary>
<p className="text-sm text-zinc-500 mt-2 leading-relaxed">
                        Cards are issued automatically after 1 blockchain confirmation. Typically this takes 5-10 minutes depending on the network.
                    </p>
</details>
<div className="h-px bg-white/5"></div>
<details className="group cursor-pointer">
<summary className="flex justify-between items-center font-medium list-none text-zinc-300">
                        Is this reloadable?
                        <svg aria-hidden="true" data-icon="lucide:chevron-down" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</summary>
<p className="text-sm text-zinc-500 mt-2 leading-relaxed">
                        These are disposable prepaid cards. For security, once the balance is used, you simply buy a new one. This ensures maximum privacy.
                    </p>
</details>
</div>
</div>
</main>
<footer className="border-t py-12 border-white/10 bg-black">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<svg aria-hidden="true" data-icon="lucide:ghost" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M9 10h.01M15 10h.01M12 2a8 8 0 0 0-8 8v12l3-3l2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-sm font-semibold tracking-tight text-zinc-400">GhostX.Cards</span>
</div>
<div className="flex gap-6 text-xs text-zinc-600">
<a className="hover:text-zinc-400" href="#">Terms</a>
<a className="hover:text-zinc-400" href="#">Privacy</a>
<a className="hover:text-zinc-400" href="#">Support</a>
</div>
<div className="text-xs text-zinc-700">
                © 2023 GhostX. All rights reserved.
            </div>
</div>
</footer>


    </>
  );
}
