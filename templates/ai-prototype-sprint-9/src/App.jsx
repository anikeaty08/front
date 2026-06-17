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



        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px 0px -50px 0px', // Trigger slightly before element is fully visible
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('reveal-visible');
                        observer.unobserve(entry.target); // Only animate once
                    }
                });
            }, observerOptions);

            const revealElements = document.querySelectorAll('.reveal-on-scroll');
            revealElements.forEach(el => observer.observe(el));
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
      


<section className="md:pt-40 md:pb-24 overflow-visible bg-white pt-32 pb-20 relative">
<div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

<div className="flex flex-col gap-8 items-start">

<div className="flex flex-wrap gap-3 mb-2 reveal-on-scroll reveal-visible">
<div className="inline-flex gap-2 items-center px-3 py-1.5 rounded-full border border-gray-200 bg-white shadow-sm text-xs font-semibold text-gray-700 hover:border-gray-300 transition-colors">
<iconify-icon className="text-base text-orange-500" icon="solar:medal-star-linear"></iconify-icon>
                        Top Experts
                    </div>
<div className="inline-flex gap-2 items-center px-3 py-1.5 rounded-full border border-gray-200 bg-white shadow-sm text-xs font-semibold text-gray-700 hover:border-gray-300 transition-colors">
<iconify-icon className="text-base text-purple-500" icon="solar:tuning-square-2-linear"></iconify-icon>
                        Full Flexible
                    </div>
<div className="inline-flex gap-2 items-center px-3 py-1.5 rounded-full border border-gray-200 bg-white shadow-sm text-xs font-semibold text-gray-700 hover:border-gray-300 transition-colors">
<iconify-icon className="text-base text-blue-500" icon="solar:map-point-linear"></iconify-icon>
                        Local BE &amp; FR
                    </div>
</div>
<div className="space-y-2 reveal-on-scroll delay-100 reveal-visible">
<h1 className="text-5xl md:text-7xl leading-[1.05] tracking-tighter text-gray-900 text-balance font-semibold">
<span className="block">Don’t build one prototype.</span>
<span className="block text-gray-400">We build 10 with AI.</span>
</h1>
</div>
<p className="md:text-xl leading-relaxed text-lg font-normal text-gray-600 max-w-lg reveal-on-scroll delay-200 reveal-visible">
                    Don’t fall in love with your first version. Explore 10x more possibilities and validate with users faster for roughly the cost of one traditional prototype.
                </p>
<div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto reveal-on-scroll delay-300 reveal-visible">
<button className="group hover:bg-gray-800 transition-all transform hover:-translate-y-1 shadow-gray-200/50 flex gap-2 font-medium text-white bg-black border-black border rounded-xl pt-4 pr-8 pb-4 pl-8 shadow-xl gap-x-2 gap-y-2 items-center justify-center cursor-pointer" onclick="window.location.href='https://calendly.com/alicia-26lights/30min?month=2026-02'" role="button">
                        Book a sprint intro
                        <iconify-icon className="text-xl group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="group hover:bg-gray-50 transition-all flex gap-2 font-medium text-gray-900 bg-white border-gray-200 border rounded-xl pt-4 pr-8 pb-4 pl-8 gap-x-2 gap-y-2 items-center justify-center cursor-pointer" onclick="window.location.href='https://wa.me/32492660089'" role="button"><iconify-icon className="text-xl" icon="logos:whatsapp-icon"></iconify-icon>Contact an expert</button>
</div>
</div>

<div className="relative h-full min-h-[550px] w-full flex items-center justify-center perspective-1000 mt-12 lg:mt-0 reveal-on-scroll delay-200 reveal-visible" id="hero-visual">

<div className="absolute inset-0 bg-gradient-to-tr from-blue-200/30 via-purple-200/30 to-transparent blur-3xl rounded-full opacity-60 scale-75"></div>

<div className="relative w-72 h-[520px] preserve-3d">

<div className="absolute top-0 left-0 w-full h-full bg-white/40 border border-gray-200/50 rounded-[2.5rem] transform -translate-x-12 translate-y-8 -rotate-6 scale-90 backdrop-blur-sm shadow-lg z-10 flex flex-col p-4 overflow-hidden">
<div className="w-full h-8 bg-gray-100/50 rounded-full mb-6"></div>
<div className="space-y-3">
<div className="w-full h-24 bg-gray-100/50 rounded-2xl border-2 border-dashed border-gray-200"></div>
<div className="w-full h-24 bg-gray-100/50 rounded-2xl border-2 border-dashed border-gray-200"></div>
</div>
<div className="absolute top-4 right-4 bg-gray-100/80 text-gray-400 text-[10px] font-mono px-2 py-1 rounded">v1.0</div>
</div>

<div className="absolute top-0 left-0 w-full h-full bg-white/60 border border-gray-200 rounded-[2.5rem] transform translate-x-12 translate-y-4 rotate-6 scale-95 backdrop-blur-md shadow-xl z-20 flex flex-col p-4 overflow-hidden">
<div className="flex justify-between items-center mb-6">
<div className="w-8 h-8 bg-gray-200/60 rounded-full"></div>
<div className="w-24 h-4 bg-gray-200/60 rounded-full"></div>
</div>
<div className="grid grid-cols-2 gap-3 mb-4">
<div className="h-24 bg-blue-50/40 rounded-2xl border border-blue-100/50"></div>
<div className="h-24 bg-blue-50/40 rounded-2xl border border-blue-100/50"></div>
</div>
<div className="absolute top-4 right-4 bg-gray-100/80 text-gray-500 text-[10px] font-mono px-2 py-1 rounded">v5.0</div>
</div>

<div className="absolute top-0 left-0 w-full h-full bg-white border border-gray-200 rounded-[2.5rem] shadow-2xl shadow-gray-200/50 z-30 flex flex-col overflow-hidden animate-float">

<div className="p-6 border-b border-gray-50">
<div className="flex justify-between items-center mb-4">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white">
<iconify-icon className="text-base" icon="solar:leaf-linear"></iconify-icon>
</div>
<span className="text-sm font-semibold tracking-tight">FinFlow</span>
</div>
<iconify-icon className="text-xl text-gray-400" icon="solar:hamburger-menu-linear"></iconify-icon>
</div>
<div className="text-center py-2">
<div className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">Total Balance</div>
<div className="text-3xl font-bold tracking-tight text-gray-900">$24,500.00</div>
<div className="inline-flex items-center gap-1 mt-2 text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
<iconify-icon className="text-sm" icon="solar:trending-up-linear"></iconify-icon> +12%
                                </div>
</div>
</div>

<div className="flex-1 p-4 bg-gray-50/50 space-y-3">
<div className="flex gap-2 mb-4">
<button className="flex-1 py-3 bg-black text-white rounded-xl text-xs font-medium shadow-lg shadow-gray-200 hover:bg-gray-800 transition-colors">Send</button>
<button className="flex-1 py-3 bg-white border border-gray-200 text-gray-900 rounded-xl text-xs font-medium hover:bg-gray-50 transition-colors">Request</button>
</div>
<div className="bg-white rounded-xl p-3 border border-gray-100 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow cursor-default group">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center group-hover:scale-110 transition-transform">
<iconify-icon className="text-xl" icon="solar:bag-linear"></iconify-icon>
</div>
<div className="">
<div className="text-xs font-bold text-gray-900">Apple Store</div>
<div className="text-[10px] text-gray-400">Electronics</div>
</div>
</div>
<span className="text-xs font-bold text-gray-900">-$299</span>
</div>
<div className="bg-white rounded-xl p-3 border border-gray-100 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow cursor-default group">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform">
<iconify-icon className="text-xl" icon="solar:bill-list-linear"></iconify-icon>
</div>
<div>
<div className="text-xs font-bold text-gray-900">Electricity</div>
<div className="text-[10px] text-gray-400">Utilities</div>
</div>
</div>
<span className="text-xs font-bold text-gray-900">-$45</span>
</div>

<div className="mt-4 p-3 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border border-purple-100 relative overflow-hidden group cursor-pointer hover:border-purple-200 transition-colors">
<div className="flex gap-3 items-center relative z-10">
<div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-purple-600 group-hover:rotate-12 transition-transform duration-300">
<iconify-icon className="text-lg" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<div>
<div className="text-[10px] font-bold text-purple-900 uppercase tracking-wide">AI Insight</div>
<div className="text-xs text-purple-700">Optimize spending?</div>
</div>
</div>
</div>
</div>

<div className="p-4 bg-white border-t border-gray-100 flex justify-between text-gray-300">
<iconify-icon className="text-2xl text-black cursor-pointer hover:scale-110 transition-transform" icon="solar:home-2-linear"></iconify-icon>
<iconify-icon className="text-2xl cursor-pointer hover:text-black transition-colors hover:scale-110" icon="solar:chart-2-linear"></iconify-icon>
<iconify-icon className="text-2xl cursor-pointer hover:text-black transition-colors hover:scale-110" icon="solar:wallet-linear"></iconify-icon>
<iconify-icon className="text-2xl cursor-pointer hover:text-black transition-colors hover:scale-110" icon="solar:user-circle-linear"></iconify-icon>
</div>
</div>

<div className="absolute -right-12 top-1/4 animate-float delay-float-1000 bg-white p-3 rounded-xl shadow-lg border border-gray-100 z-40 hidden md:flex items-center justify-center hover:scale-110 transition-transform cursor-default">
<iconify-icon className="text-2xl text-pink-500" icon="solar:pallete-2-linear"></iconify-icon>
</div>
<div className="absolute -left-8 bottom-1/4 animate-float delay-float-2000 bg-white p-3 rounded-xl shadow-lg border border-gray-100 z-40 hidden md:flex items-center justify-center hover:scale-110 transition-transform cursor-default">
<iconify-icon className="text-2xl text-blue-500" icon="solar:code-circle-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="bg-gray-100 border-gray-200 border-b pt-20 pb-20">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-3xl font-semibold text-gray-900 tracking-wide mb-12 reveal-on-scroll reveal-visible">We use the best tools to deliver 10x more value, faster.</p>
<div className="flex flex-wrap gap-12 items-center justify-center">
<img alt="Logo" className="md:h-10 w-auto h-8 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d8239b7e-e965-450a-9bb2-3c8ac76b24c1_320w.png"/>
<img alt="Logo" className="md:h-10 w-auto h-8 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/80e42a04-a1ac-4405-80d9-94c335bbac94_320w.png"/>
<img alt="Logo" className="md:h-10 w-auto h-8 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0dc3ec8d-53aa-41b4-9c70-63fce5ddf6a2_320w.png"/>
<img alt="Logo" className="md:h-10 w-auto h-8 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/58fff06f-5d8b-4cac-950f-2613126db5ec_800w.png"/>
<img alt="Logo" className="md:h-10 w-auto h-8 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/017cd52f-9c70-4f8b-90f3-4539acf6dfdb_320w.png"/>
<img alt="Logo" className="md:h-10 w-auto h-8 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2bbc1243-4e22-4a41-9366-60224a942433_320w.png"/>
</div>
</div>
</section><section className="border-y bg-white border-gray-100 pt-24 pb-24 relative overflow-hidden">
<div className="z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="uppercase inline-block text-[10px] font-semibold text-gray-600 tracking-widest mb-4 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm reveal-on-scroll reveal-visible">High-Speed Exploration</span>
<h2 className="md:text-5xl text-3xl font-semibold text-gray-900 tracking-tight reveal-on-scroll delay-100 reveal-visible">
<span className="block">Stop Guessing.</span>
<span className="block text-gray-500">Start Testing.</span>
</h2>
<p className="mt-6 text-lg leading-relaxed text-gray-600 reveal-on-scroll delay-200">Why wait weeks for a single version? We leverage Bolt and Lovable to deliver a full product landscape in days.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group p-8 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-gray-100 hover:border-gray-200 transition-all duration-500 hover:-translate-y-2 reveal-on-scroll delay-100">
<div className="w-12 h-12 bg-blue-50 rounded-xl border border-blue-100 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-2xl text-blue-600" icon="solar:layers-minimalistic-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-gray-900 mb-3">10+ App Variations</h3>
<p className="leading-relaxed text-lg text-gray-500">
                        We don't just iterate; we diverge. Explore every angle of your product idea simultaneously.
                    </p>
</div>

<div className="group p-8 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-gray-100 hover:border-gray-200 transition-all duration-500 hover:-translate-y-2 reveal-on-scroll delay-200">
<div className="w-12 h-12 bg-purple-50 rounded-xl border border-purple-100 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-2xl text-purple-600" icon="solar:routing-2-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-gray-900 mb-3">10+ UX Approaches</h3>
<p className="leading-relaxed text-lg text-gray-500">
                        Find the most intuitive flow by testing radically different user journeys side-by-side.
                    </p>
</div>

<div className="group p-8 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-gray-100 hover:border-gray-200 transition-all duration-500 hover:-translate-y-2 reveal-on-scroll delay-300">
<div className="w-12 h-12 bg-green-50 rounded-xl border border-green-100 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-2xl text-green-600" icon="solar:users-group-two-rounded-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-gray-900 mb-3">Test with Early Users</h3>
<p className="leading-relaxed text-lg text-gray-500">
                        Get real data immediately. Don't debate theories; put working models in front of users.
                    </p>
</div>
</div>

<div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center reveal-on-scroll delay-400">
<button className="group hover:bg-gray-800 transition-all transform hover:-translate-y-1 shadow-gray-200/50 flex gap-2 font-medium text-white bg-black border-black border rounded-xl pt-4 pr-8 pb-4 pl-8 shadow-xl gap-x-2 gap-y-2 items-center justify-center cursor-pointer" onclick="window.location.href='https://calendly.com/alicia-26lights/30min?month=2026-02'" role="button">
                    Book a sprint intro
                    <iconify-icon className="text-xl group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="group hover:bg-gray-50 transition-all flex gap-2 font-medium text-gray-900 bg-white border-gray-200 border rounded-xl pt-4 pr-8 pb-4 pl-8 gap-x-2 gap-y-2 items-center justify-center cursor-pointer" onclick="window.location.href='https://wa.me/32492660089'" role="button">
<iconify-icon className="text-xl" icon="logos:whatsapp-icon"></iconify-icon>
                    Contact an expert
                </button>
</div>
</div>
</section>

<section className="border-y bg-white w-full border-gray-100 pt-24 pb-24 relative overflow-hidden">

<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/80 rounded-full blur-[100px] pointer-events-none mix-blend-multiply opacity-60"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-50/80 rounded-full blur-[100px] pointer-events-none mix-blend-multiply opacity-60"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 gap-x-20 gap-y-16 items-center">

<div className="order-2 lg:order-2">
<div className="space-y-4">

<div className="flex items-start gap-5 p-5 rounded-2xl hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-all group cursor-default reveal-on-scroll delay-100">
<div className="flex flex-shrink-0 text-blue-600 bg-blue-50 w-12 h-12 border-blue-100 border rounded-xl mt-1 shadow-sm items-center justify-center group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-2xl" icon="solar:telescope-linear"></iconify-icon>
</div>
<div className="">
<h4 className="group-hover:text-blue-600 transition-colors text-xl font-semibold text-gray-900 tracking-tight">Broader product exploration</h4>
<p className="leading-relaxed text-base text-gray-500 mt-2">See the full potential of your idea.</p>
</div>
</div>
<div className="flex items-start gap-5 p-5 rounded-2xl hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-all group cursor-default reveal-on-scroll delay-200">
<div className="mt-1 w-12 h-12 rounded-xl bg-green-50 text-green-600 border border-green-100 flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-2xl" icon="solar:stopwatch-play-linear"></iconify-icon>
</div>
<div className="">
<h4 className="group-hover:text-green-600 transition-colors text-xl font-semibold text-gray-900 tracking-tight">Faster decision cycles</h4>
<p className="leading-relaxed text-base text-gray-500 mt-2">Compare working models, don't debate theories.</p>
</div>
</div>
<div className="flex items-start gap-5 p-5 rounded-2xl hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-all group cursor-default reveal-on-scroll delay-300">
<div className="mt-1 w-12 h-12 rounded-xl bg-pink-50 text-pink-600 border border-pink-100 flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-2xl" icon="solar:user-check-linear"></iconify-icon>
</div>
<div className="">
<h4 className="group-hover:text-pink-600 transition-colors text-xl font-semibold text-gray-900 tracking-tight">Better early validation</h4>
<p className="leading-relaxed text-base text-gray-500 mt-2">Know what users want before the big build.</p>
</div>
</div>
<div className="flex items-start gap-5 p-5 rounded-2xl hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-all group cursor-default reveal-on-scroll delay-400">
<div className="mt-1 w-12 h-12 rounded-xl bg-purple-50 text-purple-600 border border-purple-100 flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-2xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<div className="">
<h4 className="group-hover:text-purple-600 transition-colors text-xl font-semibold text-gray-900 tracking-tight">Lower product risk</h4>
<p className="leading-relaxed text-base text-gray-500 mt-2">Avoid building the wrong thing.</p>
</div>
</div>
</div>
</div>

<div className="order-1 lg:order-1 flex flex-col h-full justify-center">
<h2 className="md:text-5xl text-4xl font-semibold text-gray-900 tracking-tight mb-6 reveal-on-scroll">
                        Why explore 10 versions instead of one?
                    </h2>
<p className="leading-relaxed text-lg text-gray-600 mb-8 reveal-on-scroll delay-100">
                        Traditional development forces you to commit too early. Our AI-driven process allows for radical divergence at the start, ensuring you converge on the absolute best solution, not just the first one.
                    </p>
<div className="pl-6 border-l-2 border-gray-200 mb-10 reveal-on-scroll delay-200">
<p className="text-gray-500 italic text-lg">
                            "The best way to have a good idea is to have a lot of ideas."
                        </p>
</div>

<div className="relative rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 group mt-auto h-[400px] flex items-center justify-center perspective-normal reveal-on-scroll delay-300">

<div className="absolute inset-0 bg-[linear-gradient(#e5e7eb_1px,transparent_1px),linear-gradient(90deg,#e5e7eb_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)] opacity-50"></div>

<div className="relative w-64 h-80 preserve-3d transition-transform duration-700 ease-out group-hover:rotate-x-6 group-hover:rotate-y-12">

<div className="absolute top-0 left-0 w-full h-full bg-white rounded-xl border border-gray-200 shadow-xl transform -translate-x-12 -translate-y-4 -rotate-z-6 scale-90 origin-bottom-left transition-all duration-500 group-hover:-translate-x-16 group-hover:rotate-z-[-10deg] flex flex-col overflow-hidden opacity-60">
<div className="h-8 bg-gray-50 border-b border-gray-100"></div>
<div className="p-4 space-y-2">
<div className="w-full h-20 bg-gray-100 rounded"></div>
<div className="w-full h-2 bg-gray-100 rounded"></div>
<div className="w-2/3 h-2 bg-gray-100 rounded"></div>
</div>
</div>

<div className="absolute top-0 left-0 w-full h-full bg-white rounded-xl border border-gray-200 shadow-xl transform translate-x-12 -translate-y-8 rotate-z-6 scale-90 origin-bottom-right transition-all duration-500 group-hover:translate-x-16 group-hover:rotate-z-[10deg] flex flex-col overflow-hidden opacity-60">
<div className="h-8 bg-gray-50 border-b border-gray-100"></div>
<div className="p-4 grid grid-cols-2 gap-2">
<div className="h-16 bg-blue-50 rounded border border-blue-100"></div>
<div className="h-16 bg-gray-50 rounded"></div>
</div>
</div>

<div className="absolute inset-0 bg-white rounded-xl border border-gray-200 shadow-2xl flex flex-col overflow-hidden transform transition-all duration-500 group-hover:-translate-y-2 z-10">
<div className="h-12 border-b border-gray-100 flex items-center justify-between px-4 bg-white/80 backdrop-blur-sm">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-md bg-black text-white flex items-center justify-center">
<iconify-icon className="text-sm" icon="solar:bolt-linear"></iconify-icon>
</div>
<span className="font-semibold text-sm tracking-tight text-gray-900">Iterate.ai</span>
</div>
<div className="flex gap-1">
<div className="w-2 h-2 rounded-full bg-red-400"></div>
<div className="w-2 h-2 rounded-full bg-yellow-400"></div>
<div className="w-2 h-2 rounded-full bg-green-400"></div>
</div>
</div>
<div className="p-4 flex flex-col h-full bg-gray-50/50">

<div className="flex items-center justify-between mb-4">
<div className="text-xl font-bold text-gray-900">Projects</div>
<div className="px-2 py-1 rounded bg-white border border-gray-200 text-[10px] font-medium text-gray-500 shadow-sm">Filter</div>
</div>
<div className="space-y-2">
<div className="bg-white p-2 rounded-lg border border-gray-100 shadow-sm flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
<iconify-icon className="text-base" icon="solar:figma-file-linear"></iconify-icon>
</div>
<div className="flex-1">
<div className="text-xs font-semibold text-gray-900">Mobile Redesign</div>
<div className="text-[10px] text-gray-400">v10.2 • Just now</div>
</div>
</div>
<div className="bg-white p-2 rounded-lg border border-gray-100 shadow-sm flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
<iconify-icon className="text-base" icon="solar:code-file-linear"></iconify-icon>
</div>
<div className="flex-1">
<div className="text-xs font-semibold text-gray-900">React Components</div>
<div className="text-[10px] text-gray-400">v8.4 • 2h ago</div>
</div>
</div>
</div>

<div className="mt-auto bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg p-3 text-white shadow-lg relative overflow-hidden group/card cursor-pointer">
<div className="relative z-10 flex items-center justify-between">
<div className="text-xs font-medium">Generate V11</div>
<iconify-icon className="text-sm group-hover/card:rotate-12 transition-transform" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover/card:translate-x-[100%] transition-transform duration-1000"></div>
</div>
</div>
</div>

<div className="absolute -right-6 top-12 bg-white px-3 py-1.5 rounded-full shadow-lg border border-gray-100 flex items-center gap-1.5 animate-float delay-700 z-20">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="text-[10px] font-bold text-gray-700">98% Score</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>



<section className="bg-white w-full border-gray-100 border-b pt-24 pb-24">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 gap-x-16 gap-y-16 items-start">

<div className="lg:col-span-4 sticky top-24">
<div className="inline-block text-[10px] uppercase font-semibold text-gray-600 tracking-widest border-gray-200 border bg-white rounded-full px-3 py-1 mb-4 reveal-on-scroll">
                The Architects
                </div>
<h2 className="text-5xl font-semibold text-gray-900 tracking-tight mb-6 reveal-on-scroll delay-100">The Squad Behind the Machines.</h2>
<p className="reveal-on-scroll delay-200 text-lg text-gray-600 mb-6">
                Forget one-man shows. We provide a senior, multi-disciplinary trio with 14 years of experience and 200+ startups
                supported.
                </p>
<div className="flex items-center gap-2 text-sm font-medium text-gray-900 bg-green-50 w-fit px-3 py-1 rounded-full border border-green-100 reveal-on-scroll delay-300">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
                Available for sprints now
                </div>
<a className="inline-flex items-center gap-2 hover:bg-gray-50 hover:border-gray-300 transition-all group reveal-on-scroll delay-400 text-sm font-medium text-gray-900 bg-white w-fit border-gray-200 border rounded-xl mt-6 pt-2.5 pr-5 pb-2.5 pl-5 shadow-sm" href="https://wa.me/32492660089">
<iconify-icon className="text-xl group-hover:scale-110 transition-transform duration-300" icon="logos:whatsapp-icon"></iconify-icon>
                    Chat on WhatsApp
                </a>
</div>

<div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6 gap-x-6 gap-y-6">

<div className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 reveal-on-scroll delay-100">
<div className="w-[120px] h-[120px] rounded-full bg-gray-100 mb-4 overflow-hidden border border-gray-100 group">
<img alt="Arik" className="group-hover:scale-110 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/60e9792b-6a93-4b45-89d9-52962fd3a36d_320w.png"/>
</div>
<h3 className="text-lg font-semibold text-gray-900">Arik</h3>
<p className="text-xs text-gray-400 uppercase font-semibold tracking-wider mb-3">Business &amp; Product
                    Vision</p>
<p className="text-base text-gray-600">The architect of the "Why." Arik ensures your prototypes are commercially viable and aligned with your growth objectives.</p>
</div>

<div className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 reveal-on-scroll delay-200">
<div className="w-[120px] h-[120px] rounded-full bg-gray-100 mb-4 overflow-hidden border border-gray-100 group">
<img alt="Céline" className="group-hover:scale-110 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9a0d0486-a8f6-4bef-9bae-8e93635aa7cc_320w.png"/>
</div>
<h3 className="text-lg font-semibold text-gray-900">Céline</h3>
<p className="text-xs text-gray-400 uppercase font-semibold tracking-wider mb-3">Product Mapping &amp; UX Strategy</p>
<p className="text-base text-gray-600">
                    Our ex-Sortlist expert. She transforms raw vision into structured "product maps" to guarantee every feature serves the user.
                </p>
</div>

<div className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 reveal-on-scroll delay-300">
<div className="w-[120px] h-[120px] rounded-full bg-gray-100 mb-4 overflow-hidden border border-gray-100 group">
<img alt="Laurent" className="group-hover:scale-110 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fafa9551-95e3-4bec-a6eb-d7e8bead9843_320w.png"/>
</div>
<h3 className="text-lg font-semibold text-gray-900">Laurent</h3>
<p className="text-xs text-gray-400 uppercase font-semibold tracking-wider mb-3">Branding &amp; UI Design
                </p>
<p className="text-base text-gray-700">
                    The guardian of visual excellence. Laurent ensures AI speed never compromises your brand identity, delivering world-class UI.
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="text-white bg-gray-900 pt-24 pb-24">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 gap-x-16 gap-y-16 items-center">
<div className="">
<div className="inline-block text-xs font-medium border rounded-full mb-6 pt-1 pr-3 pb-1 pl-3 font-sans reveal-on-scroll text-gray-300 bg-white/10 border-white/10">
                    Trusted by Visionaries
                </div>
<h2 className="md:text-5xl reveal-on-scroll delay-100 text-4xl font-semibold tracking-tight font-sans mb-6">14 Years. 200+ Clients.</h2>
<p className="text-lg leading-relaxed max-w-md font-sans reveal-on-scroll delay-200 text-gray-400">
                    We aren't just developers; we are Growth Architects who have been scaling businesses since 2012.
                </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-4 gap-x-4 gap-y-4 reveal-on-scroll delay-200">

<div className="flex transition-colors group h-24 border rounded-lg pt-6 pr-6 pb-6 pl-6 items-center justify-center hover:bg-white/10 bg-white/5 border-white/10">
<img alt="Logo Placeholder" className="group-hover:opacity-100 transition-opacity duration-300 filter opacity-50 mix-blend-screen w-auto h-6 object-cover bg-center grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b818f586-aad4-4401-93bf-769a001c3c4c_320w.png"/>
</div>

<div className="flex items-center justify-center p-6 rounded-lg border transition-colors group h-24 bg-white/5 border-white/10 hover:bg-white/10">
<img alt="Logo Placeholder" className="group-hover:opacity-100 transition-opacity duration-300 filter opacity-50 mix-blend-screen w-auto h-6 object-cover bg-center grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b7b83f3c-7515-403c-99a4-e864772ec98d_320w.png"/>
</div>

<div className="flex transition-colors group h-24 border rounded-lg pt-6 pr-6 pb-6 pl-6 items-center justify-center hover:bg-white/10 bg-white/5 border-white/10">
<img alt="Logo Placeholder" className="group-hover:opacity-100 transition-opacity duration-300 filter opacity-50 mix-blend-screen w-auto h-6 object-cover bg-center grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f8cebf7b-7fa1-49c7-9af8-e2fcc429a32f_320w.png"/>
</div>

<div className="flex items-center justify-center p-6 rounded-lg border transition-colors group h-24 bg-white/5 border-white/10 hover:bg-white/10">
<img alt="Logo Placeholder" className="group-hover:opacity-100 transition-opacity duration-300 filter opacity-50 mix-blend-screen w-auto h-6 object-cover bg-center grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/74278589-b58b-4123-be61-9c0b7fdbc381_320w.png"/>
</div>

<div className="flex items-center justify-center p-6 rounded-lg border transition-colors group h-24 bg-white/5 border-white/10 hover:bg-white/10">
<img alt="Logo Placeholder" className="group-hover:opacity-100 transition-opacity duration-300 filter bg-center opacity-50 mix-blend-screen w-auto h-8 object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/df9dfe9d-f433-4192-ad9e-50b40ddecc24_320w.png"/>
</div>

<div className="flex items-center justify-center p-6 rounded-lg border transition-colors group h-24 bg-white/5 border-white/10 hover:bg-white/10">
<img alt="Logo Placeholder" className="group-hover:opacity-100 transition-opacity duration-300 filter bg-center opacity-50 mix-blend-screen w-auto h-10 object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5705746e-a63d-43db-97f1-a27b4c500024_320w.png"/>
</div>
</div>
</div>
</section>
<section className="bg-white z-20 pt-24 pb-24 relative" id="packages">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl text-gray-900 mb-4 font-semibold reveal-on-scroll">Packages</h2>
<p className="text-gray-500 reveal-on-scroll delay-100">Transparent pricing to validate your ideas.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

<div className="p-8 rounded-2xl border border-gray-200 bg-white text-gray-900 hover:border-gray-300 transition-colors reveal-on-scroll delay-100">
<h3 className="text-lg font-bold mb-2">Audit Your Prototype</h3>
<p className="text-lg text-gray-500 mb-6">A deep review of your current version.</p>
<div className="text-3xl mb-6 font-semibold">€500</div>
<ul className="space-y-3 mb-8 text-sm text-gray-600">
<li className="flex gap-2"><iconify-icon className="text-green-500 text-xl" icon="solar:check-circle-linear"></iconify-icon> UX Flow Review</li>
<li className="flex gap-2"><iconify-icon className="text-green-500 text-xl" icon="solar:check-circle-linear"></iconify-icon> Tech Feasibility Check</li>
<li className="flex gap-2"><iconify-icon className="text-green-500 text-xl" icon="solar:check-circle-linear"></iconify-icon> Actionable Report</li>
</ul>
<button className="hover:bg-gray-50 transition-colors text-sm font-medium w-full border-gray-200 border rounded-lg pt-3 pb-3">Book Audit</button>
</div>

<div className="transform md:-translate-y-4 hover:shadow-2xl transition-shadow text-white bg-gray-900 border-black border rounded-2xl px-8 py-8 relative shadow-xl reveal-on-scroll delay-200">
<div className="text-[10px] uppercase font-bold text-black tracking-wider bg-white rounded-bl-lg pt-1 pr-3 pb-1 pl-3 absolute top-0 right-0">
                Most Popular</div>
<h3 className="text-lg font-bold mb-2">2-Day AI Sprint</h3>
<p className="text-lg text-gray-400 mb-6">We build 10+ AI prototypes together.</p>
<div className="text-3xl mb-6 font-semibold">€2,500</div>
<ul className="space-y-3 mb-8 text-sm text-gray-300">
<li className="flex gap-2"><iconify-icon className="text-white text-xl" icon="solar:check-circle-linear"></iconify-icon> 2 Days Dedicated Work</li>
<li className="flex gap-2"><iconify-icon className="text-white text-xl" icon="solar:check-circle-linear"></iconify-icon> 10+ Prototype Variations</li>
<li className="flex gap-2"><iconify-icon className="text-white text-xl" icon="solar:check-circle-linear"></iconify-icon> User Testing Setup</li>
</ul>
<button className="w-full py-3 rounded-lg bg-white text-black hover:bg-gray-200 font-medium text-sm transition-colors transform hover:scale-105 duration-200">Start Sprint</button>
</div>

<div className="hover:border-gray-300 transition-colors reveal-on-scroll delay-300 text-gray-900 bg-white border-gray-200 border rounded-2xl pt-8 pr-8 pb-8 pl-8">
<img alt="Profile" className="w-[120px] h-[120px] object-cover border-gray-100 border rounded-full mb-6 shadow-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3126296e-981b-4239-9323-ace4001939d9_320w.png"/>
<div className="text-3xl font-medium tracking-tight mb-6">Let's Talk</div><h3 className="text-lg font-semibold mb-2">Custom Roadmap</h3>
<p className="text-lg text-gray-500 mb-6">For complex or long-term needs.</p>
<ul className="space-y-3 mb-8 text-sm text-gray-600">
<li className="flex gap-2"><iconify-icon className="text-green-500 text-xl" icon="solar:check-circle-linear"></iconify-icon> Tailored Scope</li>
<li className="flex gap-2"><iconify-icon className="text-green-500 text-xl" icon="solar:check-circle-linear"></iconify-icon> Fractional Team</li>
<li className="flex gap-2"><iconify-icon className="text-green-500 text-xl" icon="solar:check-circle-linear"></iconify-icon> Ongoing Iteration</li>
</ul>
<button className="hover:bg-gray-50 transition-colors flex gap-2 group text-sm font-normal w-full border-gray-200 border rounded-lg pt-3 pb-3 gap-x-2 gap-y-2 items-center justify-center cursor-pointer" onclick="window.location.href='https://wa.me/32492660089'" role="button">
<iconify-icon className="text-xl text-green-600 group-hover:scale-110 transition-transform" icon="solar:chat-round-dots-linear"></iconify-icon> Chat on WhatsApp
    </button>
</div>
</div>
</div>
</section>
<footer className="bg-gray-50 border-gray-200 border-t pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
<div className="">
<h2 className="reveal-on-scroll text-5xl font-semibold text-gray-900 tracking-tight font-sans mb-4">Ready to turn your vision into reality?</h2>
<div className="flex gap-4 reveal-on-scroll delay-100 text-gray-500 gap-x-4 gap-y-4 items-center">
<a className="transition-colors hover:text-black font-sans" href="mailto:alicia@26lights.com">alicia@26lights.com</a>
<span className="w-1 h-1 rounded-full bg-gray-300"></span>
<a className="transition-colors hover:text-black font-sans" href="/tel:+32492660089">+32 492 66 00 89</a>
<span className="w-1 h-1 rounded-full bg-gray-300"></span>
<span className="font-sans">Brussels / Paris</span>
</div>
</div>
<div className="flex flex-col md:items-end justify-center reveal-on-scroll delay-200">
<a className="inline-flex items-center gap-2 hover:gap-3 transition-all font-medium text-gray-900 font-sans" href="https://calendly.com/alicia-26lights/30min?month=2026-02">Book a Call with an expert</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
