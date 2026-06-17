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
      

<section className="w-full lg:w-[45%] xl:w-[40%] flex flex-col relative z-20 shrink-0 border-r border-white/5" style={{backgroundColor: '#1a1a1f'}}>

<header className="p-8 lg:px-12 lg:py-10 flex items-center justify-between w-full">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.3)]">
<iconify-icon className="text-white text-lg" icon="solar:shop-2-linear"></iconify-icon>
</div>
<span className="tracking-tighter font-semibold text-white text-xl uppercase">MicroPOS</span>
</div>
</header>

<main className="flex-1 flex flex-col justify-center p-8 lg:px-12 pb-24">
<div className="max-w-xl">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
<span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse"></span>
<span className="text-xs font-medium tracking-wide text-neutral-300">POS System 2.0 is live</span>
</div>

<h1 className="text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-white leading-[1.05] mb-6">
                    Run Your<br/>
                    Business <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-200">Smarter</span>
</h1>

<p className="text-base lg:text-lg text-neutral-400 font-normal leading-relaxed mb-10 max-w-md">
                    All-in-one POS, subscriptions, payments &amp; analytics — built for Cambodia. Manage everything from a single beautifully designed platform.
                </p>

<div className="flex flex-col sm:flex-row items-center gap-4">
<button className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-emerald-500 text-neutral-950 font-medium text-sm tracking-wide transition-all duration-300 hover:bg-emerald-400 shadow-[0_0_24px_rgba(16,185,129,0.25)] hover:shadow-[0_0_32px_rgba(16,185,129,0.4)] flex items-center justify-center gap-2">
                        Start Free Trial
                        <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="w-full sm:w-auto px-7 py-3.5 rounded-full border border-neutral-700 bg-transparent text-white font-medium text-sm tracking-wide transition-all duration-300 hover:bg-neutral-800 hover:border-neutral-600 flex items-center justify-center gap-2">
<iconify-icon className="text-lg text-neutral-400" icon="solar:play-circle-linear"></iconify-icon>
                        Watch Demo
                    </button>
</div>

<div className="mt-12 flex items-center gap-4 text-xs text-neutral-500 font-normal">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border-2 border-[#1a1a1f] bg-neutral-800 flex items-center justify-center"><iconify-icon className="text-neutral-400" icon="solar:user-linear"></iconify-icon></div>
<div className="w-8 h-8 rounded-full border-2 border-[#1a1a1f] bg-neutral-700 flex items-center justify-center"><iconify-icon className="text-neutral-300" icon="solar:user-linear"></iconify-icon></div>
<div className="w-8 h-8 rounded-full border-2 border-[#1a1a1f] bg-neutral-600 flex items-center justify-center"><iconify-icon className="text-neutral-200" icon="solar:user-linear"></iconify-icon></div>
</div>
<span>Trusted by 2,000+ local businesses</span>
</div>
</div>
</main>
</section>

<section className="w-full lg:w-[55%] xl:w-[60%] min-h-[60vh] lg:min-h-screen relative overflow-hidden flex items-center justify-center perspective-container bg-grid" style={{backgroundColor: '#111114'}}>


<div className="absolute top-1/4 -left-32 w-96 h-96 bg-amber-600/10 rounded-full blur-[120px] pointer-events-none"></div>

<div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none"></div>


<div className="relative w-full max-w-2xl preserve-3d transition-transform duration-1000 ease-out hover:rotate-y-[-2deg] hover:rotate-x-[2deg]" style={{transform: 'rotateX(8deg) rotateY(-12deg) rotateZ(1deg)'}}>

<div className="metal-bezel p-[2px] rounded-[32px] w-full aspect-[4/3] max-w-[600px] mx-auto relative z-10">

<div className="matte-surface rounded-[30px] w-full h-full relative overflow-hidden flex flex-col z-20">

<div className="absolute top-0 left-0 w-[150%] h-[150%] bg-gradient-to-br from-white/5 via-transparent to-transparent -rotate-45 -translate-y-1/4 pointer-events-none z-50"></div>

<div className="h-14 border-b border-white/5 flex items-center px-6 justify-between bg-white/[0.02] shrink-0 relative z-30">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-neutral-700 shadow-inner"></div>
<div className="w-3 h-3 rounded-full bg-neutral-700 shadow-inner"></div>
<div className="w-3 h-3 rounded-full bg-neutral-700 shadow-inner"></div>
</div>
<div className="text-xs font-medium text-neutral-500 tracking-wider uppercase">Dashboard</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-neutral-400 text-lg" icon="solar:bell-linear"></iconify-icon>
<div className="w-6 h-6 rounded-full bg-neutral-800 border border-neutral-700"></div>
</div>
</div>

<div className="flex-1 p-6 grid grid-cols-12 gap-6 overflow-y-auto hide-scrollbar relative z-30">

<div className="col-span-12 grid grid-cols-2 gap-4">

<div className="bg-neutral-900/50 border border-white/5 rounded-2xl p-4 flex flex-col justify-between shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]">
<div className="flex justify-between items-start mb-4">
<div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
<iconify-icon className="text-lg" icon="solar:wallet-money-linear"></iconify-icon>
</div>
<span className="text-xs font-medium text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md">+14.5%</span>
</div>
<div>
<p className="text-xs text-neutral-500 font-medium mb-1">Total Revenue</p>
<h3 className="text-2xl font-semibold tracking-tight text-white">$124,500<span className="text-neutral-500 text-lg">.00</span></h3>
</div>
</div>

<div className="bg-neutral-900/50 border border-white/5 rounded-2xl p-4 flex flex-col justify-between shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]">
<div className="flex justify-between items-start mb-4">
<div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center">
<iconify-icon className="text-lg" icon="solar:cart-large-minimalistic-linear"></iconify-icon>
</div>
<span className="text-xs font-medium text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-md">+8.2%</span>
</div>
<div>
<p className="text-xs text-neutral-500 font-medium mb-1">Transactions</p>
<h3 className="text-2xl font-semibold tracking-tight text-white">8,432</h3>
</div>
</div>
</div>

<div className="col-span-12 lg:col-span-7 bg-neutral-900/50 border border-white/5 rounded-2xl p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)] flex flex-col">
<div className="flex justify-between items-center mb-6">
<p className="text-xs font-medium text-neutral-400">Weekly Performance</p>
<iconify-icon className="text-neutral-600" icon="solar:menu-dots-bold"></iconify-icon>
</div>

<div className="flex-1 flex items-end justify-between gap-2 h-32 mt-auto">
<div className="w-full bg-neutral-800 rounded-t-sm h-[30%] relative group"><div className="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/20 transition-colors"></div></div>
<div className="w-full bg-neutral-800 rounded-t-sm h-[45%] relative group"><div className="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/20 transition-colors"></div></div>
<div className="w-full bg-neutral-800 rounded-t-sm h-[25%] relative group"><div className="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/20 transition-colors"></div></div>
<div className="w-full bg-gradient-to-t from-emerald-900/50 to-emerald-400 rounded-t-sm h-[80%] relative shadow-[0_0_15px_rgba(16,185,129,0.2)]"></div>
<div className="w-full bg-neutral-800 rounded-t-sm h-[60%] relative group"><div className="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/20 transition-colors"></div></div>
<div className="w-full bg-neutral-800 rounded-t-sm h-[40%] relative group"><div className="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/20 transition-colors"></div></div>
<div className="w-full bg-neutral-800 rounded-t-sm h-[70%] relative group"><div className="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/20 transition-colors"></div></div>
</div>
<div className="flex justify-between mt-3 text-[10px] text-neutral-600 font-medium">
<span>Mon</span><span>Tue</span><span>Wed</span><span className="text-emerald-500">Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
</div>
</div>

<div className="col-span-12 lg:col-span-5 bg-neutral-900/50 border border-white/5 rounded-2xl p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)] flex flex-col items-center justify-center relative overflow-hidden">

<div className="absolute -top-10 -right-10 w-32 h-32 bg-red-500/10 blur-2xl rounded-full"></div>
<p className="text-xs font-medium text-neutral-400 mb-4 w-full text-center">Scan to Pay</p>

<div className="w-28 h-28 bg-white p-2 rounded-xl shadow-lg relative flex items-center justify-center">

<div className="absolute top-2 left-2 w-6 h-6 border-4 border-black rounded-sm"></div>
<div className="absolute top-2 right-2 w-6 h-6 border-4 border-black rounded-sm"></div>
<div className="absolute bottom-2 left-2 w-6 h-6 border-4 border-black rounded-sm"></div>

<div className="w-6 h-6 bg-red-600 rounded-full z-10 flex items-center justify-center shadow-sm">
<div className="w-2 h-2 bg-white rounded-full"></div>
</div>

<div className="absolute inset-2 grid grid-cols-5 gap-1 opacity-20 pointer-events-none">
<div className="bg-black col-start-2"></div><div className="bg-black"></div><div className="bg-black col-start-2 row-start-2"></div><div className="bg-black col-start-4 row-start-3"></div><div className="bg-black col-start-2 row-start-4"></div><div className="bg-black col-start-4 row-start-4"></div><div className="bg-black col-start-3 row-start-5"></div>
</div>
</div>
<div className="mt-4 flex items-center gap-1">
<span className="text-xs font-semibold tracking-tighter text-white">KH</span><span className="text-xs font-semibold tracking-tighter text-red-500">QR</span>
</div>
</div>
</div>
</div>
</div>


<div className="absolute -right-12 lg:-right-24 top-12 z-40 animate-float-1 preserve-3d" style={{transform: 'translateZ(60px)'}}>
<div className="frosted-glass rounded-2xl p-4 pr-6 flex items-center gap-4 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
<div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
<iconify-icon className="text-xl" icon="solar:check-circle-bold"></iconify-icon>
</div>
<div>
<p className="text-xs text-neutral-400 font-medium mb-0.5">Payment Received</p>
<p className="text-sm font-semibold text-white tracking-tight">+$45.00 via ABA</p>
</div>
</div>
</div>

<div className="absolute -left-8 lg:-left-20 bottom-24 z-40 animate-float-2 preserve-3d" style={{transform: 'translateZ(90px) rotate(-5deg)'}}>
<div className="metal-bezel p-[1px] rounded-full shadow-2xl">
<div className="bg-neutral-900 rounded-full p-2.5 flex items-center gap-4 border border-white/5 pr-6">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center border border-neutral-700">
<iconify-icon className="text-amber-400 text-sm" icon="solar:crown-star-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-[10px] text-neutral-500 font-medium uppercase tracking-widest">Pro Plan</span>
<span className="text-xs font-medium text-white">Active</span>
</div>

<div className="ml-2 w-10 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/30 relative shadow-inner cursor-pointer">
<div className="absolute top-[2px] right-[2px] w-4 h-4 rounded-full bg-gradient-to-br from-neutral-200 to-neutral-400 shadow-md"></div>
</div>
</div>
</div>
</div>

<div className="absolute -right-8 lg:-right-16 bottom-12 z-40 animate-float-3 preserve-3d" style={{transform: 'translateZ(120px) rotate(8deg)'}}>
<div className="frosted-glass rounded-3xl p-5 flex flex-col items-center justify-center shadow-2xl border-t border-l border-white/10">
<p className="text-[10px] text-neutral-400 font-medium uppercase tracking-widest mb-3">Customer Type</p>

<div className="w-20 h-20 rounded-full relative flex items-center justify-center shadow-[0_5px_15px_rgba(0,0,0,0.5)]" style={{background: 'conic-gradient(from 180deg, #10b981 0% 65%, #3b82f6 65% 85%, #8b5cf6 85% 100%)'}}>

<div className="w-14 h-14 bg-neutral-900 rounded-full absolute shadow-[inset_0_3px_6px_rgba(0,0,0,0.4)] flex items-center justify-center">
<span className="text-xs font-semibold text-white tracking-tighter">65%</span>
</div>
</div>
<div className="flex gap-2 mt-4">
<div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-emerald-500"></div><span className="text-[9px] text-neutral-500">New</span></div>
<div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-blue-500"></div><span className="text-[9px] text-neutral-500">Return</span></div>
</div>
</div>
</div>
</div>
</section>

    </>
  );
}
