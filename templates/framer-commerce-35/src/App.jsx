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



        // Simple script to handle entrance animations on scroll
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animationPlayState = 'running';
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            // If we wanted to trigger animations on scroll, we'd select elements here.
            // Currently using CSS animation-delay for the hero, which runs on load.
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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-blue-100/40 via-white to-white"></div>
<div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-200/20 rounded-full blur-[100px]"></div>
<div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-indigo-200/20 rounded-full blur-[100px]"></div>

<div className="max-w-7xl mx-auto h-full w-full border-x border-slate-200/50 grid grid-cols-4 relative">
<div className="border-r border-slate-200/50 h-full hidden md:block"></div>
<div className="border-r border-slate-200/50 h-full hidden md:block"></div>
<div className="border-r border-slate-200/50 h-full hidden md:block"></div>
<div className="absolute top-4 left-4 text-[10px] font-mono text-slate-400/70 tracking-widest">01 — HERO</div>
<div className="absolute top-4 left-1/4 pl-4 text-[10px] font-mono text-slate-400/70 tracking-widest hidden md:block">02 — PREVIEW</div>
<div className="absolute top-4 left-3/4 pl-4 text-[10px] font-mono text-slate-400/70 tracking-widest hidden md:block">03 — FEATURES</div>
</div>
</div>

<header className="relative z-50 w-full pt-6 pb-4 animate-fade-in">
<div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

<div className="flex items-center gap-2 text-blue-600">
<iconify-icon icon="solar:infinity-bold" width="32"></iconify-icon>
</div>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors" href="#">Features</a>
<a className="text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors" href="#">How it works</a>
<a className="text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors" href="#">Resources</a>
</nav>

<div className="flex items-center gap-6">
<a className="text-sm font-medium text-slate-500 hover:text-blue-600 hidden md:block transition-colors" href="#">Sign in</a>

<button className="relative group overflow-hidden rounded-full bg-blue-600 px-5 py-2.5 text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-700 hover:scale-105 hover:shadow-blue-500/40">
<div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-10"></div>
<div className="relative z-20 flex items-center gap-2 text-sm font-medium">
<span>Get started</span>
<iconify-icon className="text-base" icon="solar:stars-linear"></iconify-icon>
</div>
</button>
</div>
</div>
</header>

<main className="relative z-10 w-full pt-16 md:pt-24 pb-32">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

<div className="flex flex-col gap-8 max-w-2xl">
<div className="animate-fade-in-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                            v2.0 Now Available
                        </div>
<h1 className="text-6xl md:text-7xl font-semibold tracking-tighter leading-[1.05] text-slate-900">
                            Sell on <br/>
<span className="text-blue-600">Framer</span> without <br/>
                            limits.
                        </h1>
</div>
<p className="animate-fade-in-up delay-100 text-lg text-slate-500 leading-relaxed max-w-lg font-normal">
                        The native e-commerce integration built for modern brands. Connect Stripe, customize your checkout, and ship faster.
                    </p>
<div className="animate-fade-in-up delay-200 flex flex-col sm:flex-row gap-4 pt-2">

<button className="group overflow-hidden transition-all hover:bg-blue-700 hover:scale-[1.02] hover:shadow-[0_0_60px_-15px_rgba(37,99,235,0.6)] text-white bg-blue-600 rounded-xl pt-3.5 pr-8 pb-3.5 pl-8 relative shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)]">

<div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-10"></div>

<div className="relative z-20 flex items-center justify-center gap-2 font-medium text-[15px]">
<span className="">Start selling</span>
<iconify-icon className="text-lg" icon="solar:stars-minimalistic-linear"></iconify-icon>
<svg className="" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="m21.4 14.25l-7.15 7.15q-.3.3-.675.45t-.75.15t-.75-.15t-.675-.45l-8.825-8.825q-.275-.275-.425-.637T2 11.175V4q0-.825.588-1.412T4 2h7.175q.4 0 .775.163t.65.437l8.8 8.825q.3.3.438.675t.137.75t-.137.738t-.438.662M12.825 20l7.15-7.15L11.15 4H4v7.15zM6.5 8q.625 0 1.063-.437T8 6.5t-.437-1.062T6.5 5t-1.062.438T5 6.5t.438 1.063T6.5 8m5.5 4" fill="currentColor"></path></svg>
</div>
</button>

<div className="group relative rounded-xl p-[1px] overflow-hidden transition-transform hover:scale-[1.02] active:scale-[0.98]">

<div className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2E8F0_0%,#3B82F6_50%,#E2E8F0_100%)]"></div>

<button className="transition-colors hover:bg-slate-50 flex gap-2 text-[15px] font-medium text-slate-700 bg-white w-full h-full rounded-xl pt-[13px] pr-[31px] pb-[13px] pl-[31px] relative gap-x-2 gap-y-2 items-center justify-center">
<iconify-icon className="text-xl text-blue-600" icon="solar:play-circle-linear"></iconify-icon>
<span className="">Watch demo</span>
<svg height="32" viewbox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M20 2v12l10-6z" fill="currentColor"></path><path d="M28 14v8H4V6h10V4H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8v4H8v2h16v-2h-4v-4h8a2 2 0 0 0 2-2v-8zM18 28h-4v-4h4z" fill="currentColor"></path></svg>
</button>
</div>
</div>

<div className="animate-fade-in-up delay-300 pt-12 border-t border-slate-200 mt-4">
<p className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-6">Powering next-gen commerce</p>
<div className="flex flex-wrap gap-8 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<iconify-icon className="hover:text-black transition-colors" icon="simple-icons:vercel" width="24"></iconify-icon>
<iconify-icon className="hover:text-[#635BFF] transition-colors" icon="simple-icons:stripe" width="36"></iconify-icon>
<iconify-icon className="hover:text-[#5E6AD2] transition-colors" icon="simple-icons:linear" width="24"></iconify-icon>
<iconify-icon className="hover:text-black transition-colors" icon="simple-icons:notion" width="28"></iconify-icon>
<iconify-icon className="hover:text-black transition-colors" icon="simple-icons:framer" width="24"></iconify-icon>
</div>
</div>
</div>

<div className="animate-fade-in delay-200 relative w-full h-[600px] flex items-center justify-center perspective-1000">

<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-60 mix-blend-multiply animate-pulse"></div>
</div>

<div className="relative z-10 w-full max-w-[460px] animate-float">
<img alt="Blue Puffy Jacket" className="w-full h-auto object-cover drop-shadow-[0_35px_35px_rgba(0,0,0,0.15)] hover:scale-[1.02] transition-transform duration-700 ease-out rounded-2xl" src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="animate-float-delayed absolute top-16 right-0 md:right-8 bg-white/80 backdrop-blur-xl p-2 rounded-full shadow-lg border border-white/60 z-20 flex gap-2">
<button className="w-5 h-5 rounded-full bg-[#3b82f6] ring-2 ring-offset-2 ring-blue-100 cursor-default"></button>
<button className="w-5 h-5 rounded-full bg-[#94a3b8] hover:scale-110 transition-transform cursor-pointer opacity-50 hover:opacity-100"></button>
<button className="w-5 h-5 rounded-full bg-[#0f172a] hover:scale-110 transition-transform cursor-pointer opacity-50 hover:opacity-100"></button>
</div>

<div className="animate-float-delayed absolute bottom-48 left-0 md:left-4 z-20 flex items-center gap-2">
<div className="flex bg-white/70 backdrop-blur-md p-1.5 rounded-full shadow-xl border border-white/50 ring-1 ring-black/5">
<button className="px-3 py-1 bg-blue-600 text-white text-[10px] font-semibold rounded-full shadow-sm">S</button>
<button className="px-3 py-1 text-slate-600 text-[10px] font-semibold hover:bg-white/60 rounded-full transition-colors">M</button>
<button className="px-3 py-1 text-slate-600 text-[10px] font-semibold hover:bg-white/60 rounded-full transition-colors">L</button>
</div>
</div>

<div className="animate-fade-in delay-500 absolute bottom-6 right-0 md:right-0 w-64 bg-white/90 backdrop-blur-xl rounded-2xl shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] p-4 text-slate-900 z-30 border border-white/60 ring-1 ring-black/5">
<div className="flex justify-between items-center mb-3">
<span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Shopping Bag</span>
<div className="relative">
<iconify-icon className="text-slate-900 text-lg" icon="solar:bag-3-linear"></iconify-icon>
<div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full border border-white"></div>
</div>
</div>
<div className="flex gap-3 mb-4">
<div className="w-12 h-12 bg-slate-100 rounded-lg overflow-hidden shrink-0 border border-slate-200/50">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1">
<h4 className="text-xs font-semibold text-slate-800">Frost Puffer</h4>
<p className="text-[10px] text-slate-500 mt-0.5">Blue Horizon / Small</p>
<div className="flex justify-between items-end mt-1.5">
<span className="text-xs font-bold text-slate-900">$189.00</span>
</div>
</div>
</div>
<button className="w-full bg-slate-900 hover:bg-blue-600 text-white text-xs font-medium py-2.5 rounded-lg transition-all shadow-lg shadow-slate-900/10 hover:shadow-blue-600/20 flex justify-center items-center gap-2 group">
                            Checkout
                            <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="mt-32 md:mt-48 relative animate-fade-in delay-300">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
                        Everything you need to <span className="text-blue-600">scale</span>
</h2>
<p className="mt-4 text-slate-500">Powerful features wrapped in a beautiful interface.</p>
</div>

<div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden ring-4 ring-slate-50/50">
<div className="flex w-full overflow-x-auto border-b border-slate-100">
<button className="flex items-center gap-2 py-4 px-6 text-sm font-medium bg-blue-50/50 text-blue-700 border-r border-slate-100 min-w-[160px] transition-colors relative">
<span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"></span>
<iconify-icon className="text-lg" icon="solar:tuning-square-2-linear"></iconify-icon>
                            Customizable
                        </button>
<button className="flex items-center gap-2 py-4 px-6 text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 border-r border-slate-100 transition-colors min-w-[160px]">
<iconify-icon className="text-lg" icon="solar:t-shirt-linear"></iconify-icon>
                            Variants
                        </button>
<button className="flex items-center gap-2 py-4 px-6 text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 border-r border-slate-100 transition-colors min-w-[160px]">
<iconify-icon className="text-lg" icon="solar:box-linear"></iconify-icon>
                            Inventory
                        </button>
<button className="flex items-center gap-2 py-4 px-6 text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-colors min-w-[160px]">
<iconify-icon className="text-lg" icon="solar:rocket-2-linear"></iconify-icon>
                            Shipping
                        </button>
</div>

<div className="grid md:grid-cols-2 min-h-[400px]">

<div className="p-10 md:p-16 flex flex-col justify-center items-start border-r border-slate-100 bg-white/50">
<div className="flex text-blue-600 bg-blue-100 w-12 h-12 rounded-xl mb-6 items-center justify-center">
<iconify-icon className="text-2xl" icon="solar:magic-stick-3-linear"></iconify-icon>
<svg height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path d="M22.226 17.624L12 23.25L1.774 17.624V6.376L12 .75l10.226 5.625z" fill="#fff"></path><path d="M13.023 12L7.91 15.068V12zM1.774 17.625l2.045-1.534L12 20.692l8.18-4.602l2.046 1.534L12 23.25z" fill="#bbd8ff"></path><path d="M7.91 15.068V8.932L13.023 12z" stroke="#092f63" strokeLinejoin="round" strokeWidth="1"></path><path d="M15.068 8.932v6.136" stroke="#092f63" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path><path d="M1.774 17.624L12 23.25l10.226-5.625V6.376L12 .75L1.774 6.376z" stroke="#092f63" strokeLinejoin="round" strokeWidth="1"></path></g></svg>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-4 text-slate-900">Total design control</h3>
<p className="text-lg text-slate-500 leading-relaxed">
                                Don't fight with iframes. Our components render natively in Framer, giving you pixel-perfect control over padding, typography, and responsive layouts.
                            </p>
<a className="mt-8 text-sm font-semibold text-blue-600 flex items-center gap-1 hover:gap-2 transition-all" href="#">
                                Read documentation 
                                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-slate-50 p-12 relative overflow-hidden flex items-center justify-center group">

<div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

<div className="bg-white w-full max-w-[320px] rounded-2xl p-5 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] relative z-10 transition-transform duration-500 group-hover:-translate-y-2 border border-slate-100">
<div className="flex justify-between items-start mb-4">
<div>
<h4 className="text-lg font-semibold tracking-tight text-slate-900">Frost Puffer</h4>
<p className="text-xs text-slate-400">$189.00 USD</p>
</div>
<button className="text-slate-300 hover:text-red-500 transition-colors">
<iconify-icon className="text-xl" icon="solar:heart-linear"></iconify-icon>
</button>
</div>
<div className="bg-slate-50 rounded-xl mb-4 p-4 flex items-center justify-center">
<img className="h-32 object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105" src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
</div>
<div className="space-y-3">
<div className="flex gap-2">
<div className="h-8 w-8 rounded-full bg-blue-500 ring-2 ring-offset-2 ring-slate-100"></div>
<div className="h-8 w-8 rounded-full bg-slate-200 cursor-pointer hover:bg-slate-300 transition-colors"></div>
<div className="h-8 w-8 rounded-full bg-slate-800 cursor-pointer hover:bg-slate-900 transition-colors"></div>
</div>
<button className="w-full py-2.5 rounded-lg bg-slate-900 text-white text-xs font-medium hover:bg-blue-600 transition-colors">Add to cart</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
