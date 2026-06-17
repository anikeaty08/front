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
      

<nav className="fixed top-0 w-full z-50 glass-panel">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="flex items-center gap-2 group" href="#">

<img alt="Wisuno Logo" className="w-auto h-8 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e33a3660-8f2b-422a-80b1-a1991476da22_320w.png"/>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#conditions">Conditions</a>
<a className="hover:text-zinc-900 transition-colors" href="#specs">Specifications</a>
<a className="hover:text-zinc-900 transition-colors" href="#faq">Support</a>
</div>
<div className="flex items-center gap-3">
<a className="hidden md:block text-sm font-medium text-zinc-600 hover:text-zinc-900" href="#">Login</a>
<a className="bg-zinc-900 text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-zinc-800 transition-colors shadow-lg shadow-zinc-900/10" href="#">
                    Get Started
                </a>
</div>
</div>
</nav>

<section className="relative pt-36 pb-24 overflow-hidden">
<div className="absolute inset-0 bg-grid z-0 pointer-events-none"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[800px] hero-glow z-0 pointer-events-none opacity-60"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">

<div className="max-w-xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-[11px] font-semibold uppercase tracking-wide mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
                    Limited Time Offer
                </div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tighter text-zinc-900 leading-[1.05] mb-6">
                    Start trading with <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500">$50 free credit.</span>
</h1>
<p className="text-lg text-zinc-500 leading-relaxed mb-8 max-w-md font-medium">
                    Experience live markets without risking your own capital. Register today and we'll fund your account instantly.
                </p>
<div className="flex flex-col sm:flex-row gap-3">
<button className="flex items-center justify-center gap-2 bg-orange-600 text-white px-8 py-3.5 rounded-xl font-semibold text-sm hover:bg-orange-700 transition-all shadow-xl shadow-orange-600/20 group hover:-translate-y-0.5">
                        Claim $50 Bonus
                        <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
<button className="flex items-center justify-center gap-2 bg-white border border-zinc-200 text-zinc-700 px-8 py-3.5 rounded-xl font-semibold text-sm hover:bg-zinc-50 transition-colors hover:border-zinc-300">
                        View Conditions
                    </button>
</div>
</div>

<div className="perspective-container h-[550px] flex items-center justify-center relative lg:justify-end">

<div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
<div className="absolute bottom-10 left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>

<div className="tilted-card w-full max-w-[400px] bg-white rounded-3xl p-6 relative z-20 ring-1 ring-zinc-900/5">

<div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-50 rounded-3xl pointer-events-none"></div>

<div className="flex items-center justify-between mb-8 border-b border-zinc-100 pb-5">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-zinc-900 flex items-center justify-center text-white shadow-lg shadow-zinc-900/20">
<iconify-icon icon="lucide:wallet" width="18"></iconify-icon>
</div>
<div>
<div className="text-sm font-bold text-zinc-900">Trading Account</div>
<div className="text-[11px] font-medium text-zinc-400">Standard • USD</div>
</div>
</div>
<div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-bold border border-emerald-100">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                            ACTIVE
                        </div>
</div>

<div className="mb-8">
<div className="text-zinc-500 text-xs font-semibold mb-1 uppercase tracking-wide">Total Equity</div>
<div className="flex items-baseline gap-1">
<span className="text-5xl font-bold tracking-tighter text-zinc-900">$50.00</span>
</div>
<div className="flex items-center gap-1.5 mt-3 text-[11px] font-medium text-emerald-700 bg-emerald-50 w-fit px-2.5 py-1 rounded-lg border border-emerald-100/50">
<iconify-icon icon="lucide:plus-circle" width="12"></iconify-icon>
<span>Credit added instantly</span>
</div>
</div>

<div className="h-28 w-full relative mb-6">
<svg className="w-full h-full stroke-orange-500 fill-none stroke-[2]" preserveaspectratio="none" viewbox="0 0 100 40">
<defs>
<lineargradient id="grad" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: 'rgb(249, 115, 22)', stopOpacity: '0.15'}}></stop>
<stop offset="100%" style={{stopColor: 'white', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>
<path className="" d="M0 35 Q 15 35, 25 25 T 45 20 T 65 25 T 85 10 L 100 5 V 40 H 0 Z" fill="url(#grad)" stroke="none"></path>
<path d="M0 35 Q 15 35, 25 25 T 45 20 T 65 25 T 85 10 L 100 5" vector-effect="non-scaling-stroke"></path>
</svg>

<div className="absolute top-0 right-8 bg-zinc-900 text-white text-[10px] font-bold px-2 py-1 rounded-md shadow-xl transform translate-y-2 flex flex-col items-center">
<span>+100%</span>
<div className="w-2 h-2 bg-zinc-900 rotate-45 -mt-1 absolute -bottom-1"></div>
</div>
</div>

<div className="grid grid-cols-2 gap-3">
<button className="h-10 rounded-xl bg-zinc-50 border border-zinc-200/60 flex items-center justify-center text-xs font-semibold text-zinc-400 cursor-not-allowed">Withdraw</button>
<button className="h-10 rounded-xl bg-orange-600 flex items-center justify-center text-xs font-semibold text-white shadow-lg shadow-orange-600/25 hover:bg-orange-700 transition-colors">Trade Now</button>
</div>
</div>


<div className="absolute top-10 left-0 lg:-left-4 z-30 animate-float coin-3d" style={{'--r': '-15deg', animationDelay: '0s'}}>
<div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#ffd7ba] to-[#d97736] shadow-2xl border-2 border-white/20 flex items-center justify-center relative overflow-hidden backdrop-blur-sm">
<div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/40"></div>
<span className="text-[#85390c] font-bold text-2xl tracking-tighter mix-blend-overlay">$50</span>
</div>
</div>

<div className="absolute bottom-20 -right-4 lg:right-0 z-30 animate-float coin-3d" style={{'--r': '10deg', animationDelay: '2s'}}>
<div className="w-16 h-16 rounded-full bg-gradient-to-br from-zinc-100 to-zinc-300 shadow-xl border-2 border-white/50 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/50"></div>
<span className="text-zinc-500 font-bold text-lg tracking-tighter opacity-80">$</span>
</div>
</div>

<div className="absolute -right-8 bottom-32 bg-white/90 backdrop-blur-md p-3.5 rounded-2xl shadow-xl shadow-zinc-200 border border-white/50 flex items-center gap-3 animate-float z-40" style={{animationDelay: '1.5s'}}>
<div className="w-9 h-9 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
<iconify-icon icon="lucide:gift" width="18"></iconify-icon>
</div>
<div className="">
<div className="text-xs font-bold text-zinc-900">Bonus Unlocked</div>
<div className="text-[10px] font-medium text-zinc-500">Ready to trade</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-zinc-100 bg-white py-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-zinc-100">
<div className="text-center px-4">
<div className="text-3xl font-bold tracking-tight text-zinc-900 mb-1">$50</div>
<div className="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest">Credit</div>
</div>
<div className="text-center px-4">
<div className="text-3xl font-bold tracking-tight text-zinc-900 mb-1">0.0s</div>
<div className="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest">Execution</div>
</div>
<div className="text-center px-4">
<div className="text-3xl font-bold text-zinc-900 tracking-tight mb-1">2000:1</div>
<div className="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest">Leverage</div>
</div>
<div className="text-center px-4">
<div className="text-3xl font-bold text-zinc-900 tracking-tight mb-1">24/5</div>
<div className="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest">Support</div>
</div>
</div>
</div>
</section>

<section className="bg-zinc-50/50 pt-32 pb-32 relative">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-24">
<h2 className="text-3xl md:text-5xl font-semibold text-zinc-900 mb-6 tracking-tight">How to claim your $50</h2>
<p className="text-zinc-500 text-lg font-medium max-w-lg mx-auto">Get started in minutes. No deposit required to receive your initial trading capital.</p>
</div>
<div className="relative">

<div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-orange-300 to-zinc-200 -translate-x-1/2 md:translate-x-0 rounded-full"></div>

<div className="relative flex flex-col md:flex-row items-center mb-20 group">
<div className="hidden md:block w-1/2 pr-16 text-right order-1">
<div className="inline-block text-xs font-bold text-orange-600 mb-2 uppercase tracking-widest bg-orange-50 px-2 py-1 rounded border border-orange-100">Step 01</div>
<h3 className="text-xl font-semibold text-zinc-900 mb-2">Create Account</h3>
<p className="text-zinc-500 font-medium text-sm leading-relaxed">Register on WisUno. It takes less than 60 seconds.</p>
</div>
<div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-16 h-16 rounded-full bg-white border-4 border-zinc-50 shadow-xl shadow-zinc-200 z-10 order-2 group-hover:scale-110 transition-transform duration-300">
<div className="w-full h-full rounded-full flex items-center justify-center bg-orange-600 text-white">
<iconify-icon icon="lucide:user-plus" strokeWidth="2" width="24"></iconify-icon>
</div>
</div>
<div className="pl-24 md:pl-16 w-full md:w-1/2 order-3 text-left md:hidden">
<div className="inline-block text-[10px] font-bold text-orange-600 mb-1 uppercase tracking-widest">Step 01</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-1">Create Account</h3>
<p className="text-zinc-500 text-sm">Register on WisUno. It takes less than 60 seconds.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center mb-20 group">
<div className="hidden md:block w-1/2 pr-16 text-right order-1 md:order-1"></div> 
<div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-16 h-16 rounded-full bg-white border-4 border-zinc-50 shadow-xl shadow-zinc-200 z-10 order-2 group-hover:scale-110 transition-transform duration-300">
<div className="w-full h-full rounded-full flex items-center justify-center bg-white border-2 border-orange-200 text-orange-600">
<iconify-icon icon="lucide:shield-check" strokeWidth="2" width="24"></iconify-icon>
</div>
</div>
<div className="pl-24 md:pl-16 w-full md:w-1/2 order-3 text-left">
<div className="inline-block text-xs font-bold text-zinc-400 mb-2 uppercase tracking-widest bg-zinc-100 px-2 py-1 rounded">Step 02</div>
<h3 className="text-xl font-semibold text-zinc-900 mb-2">Verify Profile</h3>
<p className="text-zinc-500 font-medium text-sm leading-relaxed">Submit your ID to verify your identity and protect your account.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center mb-20 group">
<div className="hidden md:block w-1/2 pr-16 text-right order-1">
<div className="inline-block text-xs font-bold text-zinc-400 mb-2 uppercase tracking-widest bg-zinc-100 px-2 py-1 rounded">Step 03</div>
<h3 className="text-xl font-semibold text-zinc-900 mb-2">Get $50 Instantly</h3>
<p className="text-zinc-500 font-medium text-sm leading-relaxed">The credit is automatically added to your balance.</p>
</div>
<div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-16 h-16 rounded-full bg-white border-4 border-zinc-50 shadow-xl shadow-orange-500/20 z-10 order-2 group-hover:scale-110 transition-transform duration-300">
<div className="w-full h-full rounded-full flex items-center justify-center bg-white border-2 border-orange-200 text-orange-600 relative overflow-hidden">

<div className="absolute inset-0 bg-orange-50 animate-pulse"></div>
<iconify-icon className="relative z-10" icon="lucide:coins" strokeWidth="2" width="24"></iconify-icon>
</div>
</div>
<div className="pl-24 md:pl-16 w-full md:w-1/2 order-3 text-left md:hidden">
<h3 className="text-lg font-semibold text-zinc-900 mb-1">Get $50 Instantly</h3>
<p className="text-zinc-500 text-sm">The credit is automatically added to your balance.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center group">
<div className="hidden md:block w-1/2 pr-16 text-right order-1 md:order-1"></div> 
<div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-16 h-16 rounded-full bg-white border-4 border-zinc-50 shadow-xl shadow-zinc-200 z-10 order-2 group-hover:scale-110 transition-transform duration-300">
<div className="w-full h-full rounded-full flex items-center justify-center bg-zinc-900 text-white">
<iconify-icon icon="lucide:arrow-up-right" strokeWidth="2" width="24"></iconify-icon>
</div>
</div>
<div className="pl-24 md:pl-16 w-full md:w-1/2 order-3 text-left">
<div className="inline-block text-xs font-bold text-zinc-400 mb-2 uppercase tracking-widest bg-zinc-100 px-2 py-1 rounded">Step 04</div>
<h3 className="text-xl font-semibold text-zinc-900 mb-2">Trade Live</h3>
<p className="text-zinc-500 font-medium text-sm leading-relaxed">Profit made using the bonus is withdrawable.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-zinc-50">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">

<div className="col-span-1">
<div className="flex items-center gap-2 mb-4">

<img alt="Wisuno Logo" className="w-auto h-6 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2103690e-dd5c-4bbc-bd45-31924b15bd3c_320w.png"/>
</div>
<h2 className="md:text-5xl leading-tight text-4xl font-semibold text-zinc-900 tracking-tight">Who can claim this bonus?</h2>
</div>

<div className="col-span-1 lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center mb-6 text-orange-600">
<iconify-icon icon="lucide:user" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-zinc-900 mb-2">New Wisuno clients</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-medium">Only first-time users who register and verify their account.</p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center mb-6 text-orange-600">
<iconify-icon icon="lucide:user-check" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-zinc-900 mb-2">One bonus per client</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-medium">Each verified account receives a single $50 credit.</p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center mb-6 text-orange-600">
<iconify-icon icon="lucide:candlestick-chart" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-zinc-900 mb-2">For trading use only</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-medium">The $50 bonus cannot be withdrawn.</p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center mb-6 text-orange-600">
<iconify-icon icon="lucide:wallet" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-zinc-900 mb-2">Profit withdrawals allowed</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-medium">Any profits earned can be withdrawn once requirements are met.</p>
</div>

<div className="md:col-span-2 bg-white p-8 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center mb-6 text-orange-600">
<iconify-icon icon="lucide:clock" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-zinc-900 mb-2">Limited-time promotion</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-medium">Valid from <span className="text-orange-600 font-bold">1 December 2025 to 31 December 2025</span>.</p>
</div>
</div>
</div>
</section>

<section className="bg-white border-zinc-100 border-t pt-24 pr-6 pb-24 pl-6">
<div className="max-w-7xl mr-auto ml-auto">
<h2 className="md:text-5xl text-3xl font-semibold text-zinc-900 tracking-tight text-center mb-20">What you can do with your $50?</h2>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

<div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">

<div className="group p-6 rounded-2xl border border-zinc-200 bg-zinc-50 hover:bg-white hover:border-orange-200 hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-300 hover:-translate-y-1">
<div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white border border-zinc-200 text-zinc-400 group-hover:bg-orange-600 group-hover:text-white group-hover:border-orange-500 transition-colors mb-4 shadow-sm">
<iconify-icon icon="lucide:shield-check" strokeWidth="2" width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-zinc-900 mb-2">Start With Zero Risk</h3>
<p className="text-sm text-zinc-500 font-medium leading-relaxed">You trade live markets. We provide the capital. No personal loss.</p>
</div>

<div className="group p-6 rounded-2xl border border-zinc-200 bg-zinc-50 hover:bg-white hover:border-orange-200 hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-300 hover:-translate-y-1">
<div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white border border-zinc-200 text-zinc-400 group-hover:bg-orange-600 group-hover:text-white group-hover:border-orange-500 transition-colors mb-4 shadow-sm">
<iconify-icon icon="lucide:trending-up" strokeWidth="2" width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-zinc-900 mb-2">Trade Real Markets</h3>
<p className="text-sm text-zinc-500 font-medium leading-relaxed">Access global assets including Forex, Gold, and Indices instantly.</p>
</div>

<div className="group p-6 rounded-2xl border border-zinc-200 bg-zinc-50 hover:bg-white hover:border-orange-200 hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-300 hover:-translate-y-1">
<div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white border border-zinc-200 text-zinc-400 group-hover:bg-orange-600 group-hover:text-white group-hover:border-orange-500 transition-colors mb-4 shadow-sm">
<iconify-icon icon="lucide:zap" strokeWidth="2" width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-zinc-900 mb-2">Fast Execution</h3>
<p className="text-sm text-zinc-500 font-medium leading-relaxed">Experience our ultra-low latency servers built for precision.</p>
</div>

<div className="group p-6 rounded-2xl border border-zinc-200 bg-zinc-50 hover:bg-white hover:border-orange-200 hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-300 hover:-translate-y-1">
<div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white border border-zinc-200 text-zinc-400 group-hover:bg-orange-600 group-hover:text-white group-hover:border-orange-500 transition-colors mb-4 shadow-sm">
<iconify-icon icon="lucide:wallet" strokeWidth="2" width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-zinc-900 mb-2">Keep the Profits</h3>
<p className="text-sm text-zinc-500 font-medium leading-relaxed">Any gains you make above the bonus amount are yours to keep.</p>
</div>

<div className="group p-6 rounded-2xl border border-zinc-200 bg-zinc-50 hover:bg-white hover:border-orange-200 hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-300 hover:-translate-y-1">
<div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white border border-zinc-200 text-zinc-400 group-hover:bg-orange-600 group-hover:text-white group-hover:border-orange-500 transition-colors mb-4 shadow-sm">
<iconify-icon icon="lucide:headphones" strokeWidth="2" width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-zinc-900 mb-2">24/7 Support</h3>
<p className="text-sm text-zinc-500 font-medium leading-relaxed">Get help anytime via live chat or email from our expert team.</p>
</div>

<div className="group p-6 rounded-2xl border border-zinc-200 bg-zinc-50 hover:bg-white hover:border-orange-200 hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-300 hover:-translate-y-1">
<div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white border border-zinc-200 text-zinc-400 group-hover:bg-orange-600 group-hover:text-white group-hover:border-orange-500 transition-colors mb-4 shadow-sm">
<iconify-icon icon="lucide:graduation-cap" strokeWidth="2" width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-zinc-900 mb-2">Learn &amp; Grow</h3>
<p className="text-sm text-zinc-500 font-medium leading-relaxed">Perfect environment to test strategies before depositing.</p>
</div>
</div>

<div className="lg:col-span-5 h-full min-h-[500px] relative">
<div className="sticky top-24">
<div className="overflow-hidden shadow-zinc-900/40 flex flex-col aspect-[4/5] sm:aspect-auto sm:h-[600px] group bg-zinc-900 w-full border-zinc-800 border rounded-3xl pt-6 pr-6 pb-6 pl-6 relative shadow-2xl justify-between">

<div className="absolute inset-0 bg-gradient-to-b from-zinc-800/50 to-zinc-900/90 pointer-events-none"></div>
<div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 rounded-full blur-[80px]"></div>

<div className="relative z-10 flex justify-between items-start mb-6">
<div className="">
<div className="flex items-center gap-2 mb-1">
<h3 className="text-2xl font-bold text-white tracking-tight">XAUUSD</h3>
<span className="bg-zinc-800 text-zinc-400 text-[10px] font-bold px-1.5 py-0.5 rounded border border-zinc-700">GOLD</span>
</div>
<div className="text-emerald-400 text-sm font-mono font-medium flex items-center gap-1">
<iconify-icon className="" icon="lucide:trending-up" width="14"></iconify-icon> +0.45%
            </div>
</div>
<div className="flex items-center gap-2">
<div className="px-2 py-1 rounded-md bg-zinc-800 border border-zinc-700 text-zinc-400 text-xs font-medium">1H</div>
<div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
</div>
</div>

<div className="relative z-10 flex-1 w-full mb-6 rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-800/50 shadow-2xl shadow-zinc-950/50 group/img">
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-zinc-900/10 z-10 pointer-events-none"></div>
<img alt="Market Analysis" className="transition-transform duration-700 ease-out group-hover/img:scale-105 opacity-90 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eefd6e0b-eff0-43f5-9135-f9fd81d68dbe_1600w.png"/>

<div className="absolute top-4 left-4 z-20">
<div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-zinc-900/60 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold tracking-wide shadow-lg">
<div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></div>
                LIVE FEED
             </div>
</div>
</div>

<div className="relative z-10 bg-zinc-800/50 rounded-2xl p-4 border border-zinc-700/50 backdrop-blur-sm">
<div className="flex justify-between items-center mb-4 text-xs font-medium text-zinc-400">
<span>Volume: 0.10</span>
<span>Margin: $20.00</span>
</div>
<div className="grid grid-cols-2 gap-3">
<button className="bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-500 py-3 rounded-xl font-bold text-sm transition-colors flex flex-col items-center leading-none gap-1">
<span>SELL</span>
<span className="text-[10px] opacity-80">1954.20</span>
</button>
<button className="bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-500 py-3 rounded-xl font-bold text-sm transition-colors flex flex-col items-center leading-none gap-1 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
<span>BUY</span>
<span className="text-[10px] opacity-80">1954.50</span>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-zinc-50" id="faq">
<div className="max-w-4xl mx-auto">
<h2 className="text-3xl font-semibold text-center text-zinc-900 mb-12 tracking-tight">Frequently asked questions.</h2>
<div className="space-y-3">
<details className="group bg-white rounded-xl border border-zinc-200 overflow-hidden shadow-sm hover:shadow-md transition-all">
<summary className="flex cursor-pointer hover:bg-zinc-50 transition-colors pt-5 pr-5 pb-5 pl-5 items-center justify-between">
<span className="text-sm font-semibold text-zinc-900">When do I get the $50 bonus?</span>
<span className="text-zinc-400 group-open:rotate-180 transition-transform">
<iconify-icon icon="lucide:plus" width="16"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 text-zinc-500 text-sm leading-relaxed font-medium">
                        Right after your verification is approved.
                    </div>
</details>
<details className="group bg-white rounded-xl border border-zinc-200 overflow-hidden shadow-sm hover:shadow-md transition-all">
<summary className="flex justify-between items-center p-5 cursor-pointer hover:bg-zinc-50 transition-colors">
<span className="text-sm font-semibold text-zinc-900">Do I need to deposit anything?</span>
<span className="text-zinc-400 group-open:rotate-180 transition-transform">
<iconify-icon icon="lucide:plus" width="16"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 text-zinc-500 text-sm leading-relaxed font-medium">
                        No, this is a no-deposit bonus. You can start trading without using your own money.
                    </div>
</details>
<details className="group bg-white rounded-xl border border-zinc-200 overflow-hidden shadow-sm hover:shadow-md transition-all">
<summary className="flex justify-between items-center p-5 cursor-pointer hover:bg-zinc-50 transition-colors">
<span className="text-sm font-semibold text-zinc-900">Can I withdraw the $50?</span>
<span className="text-zinc-400 group-open:rotate-180 transition-transform">
<iconify-icon icon="lucide:plus" width="16"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 text-zinc-500 text-sm leading-relaxed font-medium">
                        The $50 bonus itself is trading credit and cannot be withdrawn, but profits generated from it can be.
                    </div>
</details>
<details className="group bg-white rounded-xl border border-zinc-200 overflow-hidden shadow-sm hover:shadow-md transition-all">
<summary className="flex justify-between items-center p-5 cursor-pointer hover:bg-zinc-50 transition-colors">
<span className="text-sm font-semibold text-zinc-900">Can I withdraw the profits I make?</span>
<span className="text-zinc-400 group-open:rotate-180 transition-transform">
<iconify-icon icon="lucide:plus" width="16"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 text-zinc-500 text-sm leading-relaxed font-medium">
                        Yes, profits are withdrawable once specific trading volume requirements are met.
                    </div>
</details>
<details className="group bg-white rounded-xl border border-zinc-200 overflow-hidden shadow-sm hover:shadow-md transition-all">
<summary className="flex justify-between items-center p-5 cursor-pointer hover:bg-zinc-50 transition-colors">
<span className="text-sm font-semibold text-zinc-900">Who is eligible for the bonus?</span>
<span className="text-zinc-400 group-open:rotate-180 transition-transform">
<iconify-icon icon="lucide:plus" width="16"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 text-zinc-500 text-sm leading-relaxed font-medium">
                        New clients who have not previously opened an account with Wisuno.
                    </div>
</details>
<details className="group bg-white rounded-xl border border-zinc-200 overflow-hidden shadow-sm hover:shadow-md transition-all">
<summary className="flex justify-between items-center p-5 cursor-pointer hover:bg-zinc-50 transition-colors">
<span className="text-sm font-semibold text-zinc-900">What can I trade with the $50?</span>
<span className="text-zinc-400 group-open:rotate-180 transition-transform">
<iconify-icon icon="lucide:plus" width="16"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 text-zinc-500 text-sm leading-relaxed font-medium">
                        You can trade Forex, Metals, Indices, and specific Stocks available on our platform.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-12 px-6 bg-white">
<div className="max-w-7xl mx-auto rounded-3xl bg-zinc-900 relative overflow-hidden text-center py-20 px-6 shadow-2xl shadow-zinc-900/20">

<div className="absolute inset-0 bg-gradient-to-r from-orange-900/20 to-zinc-900/40 opacity-50"></div>
<div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl mix-blend-screen"></div>
<div className="relative z-10 max-w-2xl mx-auto">
<h2 className="text-4xl md:text-5xl font-semibold text-white mb-4 tracking-tight">Ready to get your $50?</h2>
<p className="text-zinc-400 text-sm mb-10 max-w-lg mx-auto font-medium leading-relaxed">Create your account, verify once, and your $50 is added instantly.</p>
<button className="bg-orange-600 text-white text-sm font-semibold px-8 py-3.5 rounded-full hover:bg-orange-700 transition-colors shadow-lg shadow-orange-600/30 flex items-center justify-center gap-2 mx-auto group">
                    Claim My $50 Bonus 
                    <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="lucide:arrow-right" strokeWidth="2" width="16"></iconify-icon>
</button>
</div>
</div>
</section>

<footer className="pt-12 pb-16 px-6 bg-zinc-50 border-t border-zinc-200">
<div className="max-w-7xl mx-auto">
<div className="flex items-center gap-2 mb-6">

<img alt="Wisuno Logo" className="h-7 w-auto object-contain" src="https://placehold.co/120x32/transparent/ea580c?text=Wisuno"/>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
<div className="">
<h2 className="text-3xl font-semibold text-zinc-900 mb-4 tracking-tight">Trade <span className="text-orange-600">Anytime, Anywhere</span></h2>
<p className="text-zinc-500 text-sm leading-relaxed max-w-xl mb-8 font-medium">
                        One of the world's leading CFD brokers with over 15 years of market experience, Wisuno provides traders with access to 1,000+ CFD products, including forex, indices, commodities, shares, ETFs, and even bonds.
                        
                        Trade CFDs online with ease on desktop or mobile using our variety of advanced trading tools and features.
                    </p>
<div className="flex gap-2 mb-8">
<button className="px-4 py-2 bg-zinc-900 text-white rounded-full text-xs font-semibold">MetaTrader 4</button>
<button className="px-4 py-2 bg-zinc-200 text-zinc-600 rounded-full text-xs font-semibold hover:bg-zinc-300 transition-colors">MetaTrader 5</button>
</div>
<p className="text-xs font-bold text-zinc-900 mb-3 uppercase tracking-wide">Available on Desktop, iOS and Android</p>
<div className="flex flex-wrap gap-2">

<button className="flex items-center gap-2 px-3 py-2 bg-zinc-200 rounded text-zinc-900 hover:bg-zinc-300 transition-colors">
<iconify-icon icon="lucide:monitor" width="16"></iconify-icon>
<div className="flex flex-col items-start leading-none">
<span className="text-[8px] uppercase font-bold text-zinc-500">Launch on</span>
<span className="text-[10px] font-bold">WINDOWS</span>
</div>
</button>

<button className="flex items-center gap-2 px-3 py-2 bg-zinc-200 rounded text-zinc-900 hover:bg-zinc-300 transition-colors">
<iconify-icon icon="logos:google-play-icon" width="14"></iconify-icon>
<div className="flex flex-col items-start leading-none">
<span className="text-[8px] uppercase font-bold text-zinc-500">GET IT ON</span>
<span className="text-[10px] font-bold">GOOGLE PLAY</span>
</div>
</button>

<button className="flex items-center gap-2 px-3 py-2 bg-zinc-200 rounded text-zinc-900 hover:bg-zinc-300 transition-colors">
<iconify-icon icon="lucide:apple" width="16"></iconify-icon>
<div className="flex flex-col items-start leading-none">
<span className="text-[8px] uppercase font-bold text-zinc-500">Download on</span>
<span className="text-[10px] font-bold">APP STORE</span>
</div>
</button>

<button className="flex items-center gap-2 px-3 py-2 bg-zinc-200 rounded text-zinc-900 hover:bg-zinc-300 transition-colors">
<iconify-icon icon="lucide:laptop" width="16"></iconify-icon>
<div className="flex flex-col items-start leading-none">
<span className="text-[8px] uppercase font-bold text-zinc-500">Download</span>
<span className="text-[10px] font-bold">MACOS APP</span>
</div>
</button>

<button className="flex items-center gap-2 px-3 py-2 bg-zinc-200 rounded text-zinc-900 hover:bg-zinc-300 transition-colors">
<iconify-icon icon="lucide:globe" width="16"></iconify-icon>
<div className="flex flex-col items-start leading-none">
<span className="text-[8px] uppercase font-bold text-zinc-500">Launch</span>
<span className="text-[10px] font-bold">WEB TRADER</span>
</div>
</button>
</div>
</div>
</div>

<div className="pt-8 border-t border-zinc-200">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
<p className="text-[10px] text-zinc-500 font-bold">© Wisuno Ltd 2025</p>
<div className="flex gap-4">
<a className="w-6 h-6 bg-zinc-200 rounded flex items-center justify-center text-zinc-600 hover:bg-zinc-300 transition-colors" href="#">
<iconify-icon icon="lucide:facebook" width="12"></iconify-icon>
</a>
<a className="w-6 h-6 bg-zinc-200 rounded flex items-center justify-center text-zinc-600 hover:bg-zinc-300 transition-colors" href="#">
<iconify-icon icon="lucide:twitter" width="12"></iconify-icon>
</a>
<a className="w-6 h-6 bg-zinc-200 rounded flex items-center justify-center text-zinc-600 hover:bg-zinc-300 transition-colors" href="#">
<iconify-icon icon="lucide:instagram" width="12"></iconify-icon>
</a>
</div>
</div>
<div className="space-y-3 text-[10px] text-zinc-400 leading-normal text-justify font-medium">
<p>Wisuno is the trading name of WISUNO LIMITED. WISUNO LIMITED is part of a group of affiliated companies operating in multiple jurisdictions.</p>
<p>WISUNO LIMITED is regulated by the Financial Services Authority of Seychelles ("FSA") under the License Number SD178. The registered office address of WISUNO LIMITED is Office 12, 3rd Floor, IMAD Complex, Ile Du Port, Mahe, Republic of Seychelles.</p>
<p>WISUNO LIMITED is the seller of the financial products described or available on this website. This website is exclusively operated by WISUNO LIMITED.</p>
<p>WSN Capital Ltd licensed and regulated by the Cyprus Securities and Exchange Commission (CySEC) under the License CIF 450/24. The registered office address is Archiepiskopou Makariou III, 82, Amaranton Court, first floor, Mesa Geitonia, 4003, Limassol, Cyprus.</p>
<p>WISUNO CAPITAL LIMITED is licensed and regulated by the Financial Services Commission of Mauritius ("FSC") under the license GB23201735. The registered office address is Rue De La Democratie Office 306, 3rd Floor, Ebene Junction Ebene 72201, Mauritius.</p>
<p>Risk Warning: Trading in forex, securities and other leveraged products carries a high level of risk and may not be suitable for all investors. The value of your investments may fluctuate, and you may lose all of your invested capital, particularly when trading with leverage. Price fluctuations may render securities valueless, and engaging in the buying and selling of securities may result in losses exceeding potential profits. In some cases, you may incur unlimited losses that exceed your initial deposit.</p>
<p>CFDs are complex financial instruments that require a thorough understanding before trading. You should carefully assess your investment objectives, level of experience, and risk tolerance before deciding to trade, especially when using. It is your responsibility to ensure that you fully understand the risks involved and seek independent advice if necessary.</p>
<p>You are strongly advised to obtain independent financial, legal and tax advice before proceeding with any trading activity. Nothing on this site should be read or construed as financial advice from Wisuno or any of its affiliates, directors, officers or employees. Clients must be at least 18 years old to use Wisuno's services.</p>
<p>Residence: WISUNO LIMITED does not offer its services to residents of the United States, Canada, North Korea, Iran, Belgium or any particular country and is not intended for distribution to, or use by, any person in any country or jurisdiction where such distribution or use would be contrary to local law or regulation.</p>
<div className="flex gap-4 pt-2 font-bold text-zinc-500">
<a className="hover:text-orange-600 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-orange-600 transition-colors" href="#">Cookies Policy</a>
</div>
</div>
</div>
</div>
</footer>

    </>
  );
}
