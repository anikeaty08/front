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
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300 py-4 px-6 md:px-12">
<div className="max-w-6xl mx-auto glass-panel rounded-full shadow-sm px-6 py-3 flex justify-between items-center">
<div className="font-medium tracking-tight text-lg flex items-center gap-2">
<div className="w-6 h-6 bg-indigo-600 rounded-md flex items-center justify-center text-white">
<iconify-icon className="" icon="solar:infinity-linear" width="16"></iconify-icon>
</div>
                OpsManager
            </div>
<div className="hidden md:flex gap-8 text-sm text-gray-600 font-medium">
<a className="hover:text-black transition-colors" href="#problem">The Problem</a>
<a className="hover:text-black transition-colors" href="#how-it-works">How it Works</a>
<a className="hover:text-black transition-colors" href="#pricing">Pricing</a>
</div>
<a className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-transform active:scale-95" href="#waitlist">
                Join Waitlist
            </a>
</div>
</nav>

<section className="md:px-12 overflow-hidden pt-40 pr-6 pb-20 pl-6 relative">

<div className="-translate-x-1/2 -z-10 bg-gradient-to-b from-indigo-50/80 to-transparent opacity-60 w-[800px] h-[600px] rounded-full absolute top-0 left-1/2 blur-3xl gap-x-6 gap-y-6">
</div>
<div className="fade-in-up text-center max-w-4xl mr-auto ml-auto">
<div className="inline-flex bg-green-200 z-0 border-slate-50 border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3 shadow-sm space-x-2 items-center">
<span className="flex w-2 h-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="uppercase text-xs font-medium text-green-700 tracking-wide">24/7 AI Ops Manager</span>
</div>
<h1 className="leading-[1.1] md:text-3xl text-5xl font-medium text-gray-900 tracking-tight text-center max-w-lg mr-32 ml-56">AI Ops Manager for
            Shopify, Amazon, Walmart &amp; TikTok Shop Sellers</h1>
<h1 className="md:text-7xl leading-[1.1] text-5xl font-medium text-gray-900 tracking-tight mb-6">
            Operations, handled <br className="hidden md:block"/>
<span className="italic text-indigo-600 font-serif-accent">all day, every day (24/7).</span></h1>
<p className="md:text-xl leading-relaxed text-lg font-light text-gray-600 max-w-2xl mr-auto mb-10 ml-auto">Stop loosing money. Catch inventory issues early. Your AI ops manager watches your store so you don’t have to.</p>
<div className="flex flex-col sm:flex-row mb-16 gap-x-4 gap-y-4 items-center justify-center">
<a className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white rounded-full font-medium text-lg hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 flex items-center justify-center gap-2 group" href="#waitlist">
                Join the waitlist
                <iconify-icon className="group-hover:translate-x-1 transition-transform" height="18" icon="solar:arrow-right-linear" style={{color: 'rgb(255, 255, 255)'}} width="18"></iconify-icon>
</a>
<span className="text-sm font-medium text-gray-500">No credit card required</span></div>

<div className="relative max-w-3xl mx-auto mt-12 perspective-1000 group">
</div>

<div className="mt-20 border-t border-gray-200/60 pt-10">
<p className="uppercase text-sm font-medium text-gray-500 tracking-wider mb-6">Built for growing teams on</p>
<div className="flex flex-wrap justify-center gap-x-8 gap-y-4 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-xl font-bold tracking-tighter font-sans">Shopify</span>
<span className="text-xl font-bold tracking-tighter font-sans">Amazon</span>
<span className="text-xl font-bold tracking-tighter font-sans">TikTok Shop</span>
<span className="text-xl font-bold tracking-tighter font-sans">Walmart</span>
<span className="text-xl font-bold tracking-tighter font-sans">Target</span>
</div>
</div>
</div>
</section>

<section className="border-y bg-indigo-50 border-indigo-100 pt-12 pb-12">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-2xl md:text-3xl font-serif-accent italic text-indigo-900 leading-tight">
                "Inventory mistakes cost money. We help you prevent them — quietly, continuously, and safely."
            </h2>
</div>
</section>

<section className="md:px-12 bg-white pt-24 pr-6 pb-24 pl-6" id="problem">
<div className="max-w-6xl mx-auto">
<div className="grid md:grid-cols-2 gap-x-16 gap-y-16 items-center">
<div className="">
<div className="inline-block bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide mb-4">The Challenge</div>
<h2 className="text-4xl font-medium tracking-tight mb-6 text-gray-900">Ecommerce gets messy as you grow.</h2>
<p className="text-lg text-gray-600 mb-8 font-light">
            When you sell across channels, things break. You already use good tools, but no one is watching everything together.
        </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-500 shrink-0">
<iconify-icon icon="solar:danger-triangle-linear" width="20"></iconify-icon>
</div>
<div className="">
<h4 className="font-medium text-gray-900">Sync Lag</h4>
<p className="text-sm text-gray-500 mt-1">Inventory doesn’t sync fast enough between Shopify and Amazon.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-500 shrink-0">
<iconify-icon icon="solar:cart-large-2-linear" width="20"></iconify-icon>
</div>
<div className="">
<h4 className="font-medium text-gray-900">Double Selling</h4>
<p className="text-sm text-gray-500 mt-1">The same item sells twice on Amazon, TikTok Shop and your store.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-500 shrink-0">
<iconify-icon icon="solar:presentation-graph-linear" width="20"></iconify-icon>
</div>
<div className="">
<h4 className="font-medium text-gray-900">Wasted Ad Spend</h4>
<p className="text-sm text-gray-500 mt-1">Products run out while Walmart ads keep running.</p>
</div>
</div>
</div>
</div>
<div className="relative bg-gray-50 rounded-2xl p-8 border border-gray-100 overflow-hidden min-h-[520px] flex items-center">

<div className="absolute top-0 right-0 w-80 h-80 bg-red-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-100/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
<div className="grid grid-cols-2 gap-5 w-full relative z-10 perspective-1000">

<div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm transform -rotate-2 hover:rotate-0 hover:z-20 transition-all duration-300 group">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-gray-900 text-white flex items-center justify-center text-[10px] font-bold">A</div>
<span className="text-sm font-semibold text-gray-900" style={{}}>Shopify</span>
</div>
</div>
<div className="aspect-[4/3] rounded-lg bg-gray-100 mb-3 overflow-hidden relative group-hover:scale-[1.02] transition-transform duration-500">
</div>
<div className="flex justify-between items-center border-t border-gray-50 pt-2">
<span className="text-[10px] uppercase tracking-wider text-gray-400 font-medium">SKU-8821</span>
<span className="text-xs font-semibold text-red-600 bg-red-50 px-2 py-0.5 rounded-full">Oversold</span>
</div>
</div>

<div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm transform translate-y-6 rotate-1 hover:rotate-0 hover:z-20 transition-all duration-300">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-black text-white flex items-center justify-center text-[10px] font-bold">T</div>
<span className="text-sm font-semibold text-gray-900" style={{}}>Amazon</span>
</div>
<div className="bg-orange-500 w-2 h-2 rounded-full"></div>
</div>
<div className="aspect-[4/3] rounded-lg bg-gray-100 mb-3 overflow-hidden relative">
<div className="absolute bottom-2 left-2 right-2 bg-white/90 backdrop-blur-md rounded px-2 py-1.5 border border-gray-100 shadow-sm">
<div className="flex justify-between text-xs items-center">
<span className="text-gray-500 font-medium">Pending</span>
<span className="font-bold text-gray-900">12 Orders</span>
</div>
</div>
</div>
<div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden mt-2">
<div className="bg-orange-400 h-full w-2/3 rounded-full"></div>
</div>
</div>

<div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm transform -translate-y-4 rotate-1 hover:rotate-0 hover:z-20 transition-all duration-300">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold">W</div>
<span className="text-sm font-semibold text-gray-900">Walmart</span>
</div>
<iconify-icon className="text-blue-500" icon="solar:graph-up-bold"></iconify-icon>
</div>
<div className="aspect-[4/3] rounded-lg bg-gray-100 mb-3 overflow-hidden grayscale-[50%]">
</div>
<div className="flex justify-between items-center bg-gray-50 p-2 rounded-lg">
<span className="text-xs text-green-600 font-medium flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div> Ads Active</span>
<span className="text-[10px] font-bold text-red-500 border border-red-100 bg-white px-1.5 py-0.5 rounded">NO STOCK</span>
</div>
</div>

<div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm transform -rotate-3 hover:rotate-0 hover:z-20 transition-all duration-300">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-red-600 text-white flex items-center justify-center text-[10px] font-bold">T</div>
<span className="text-sm font-semibold text-gray-900">Tiktok</span>
</div>
<iconify-icon className="text-gray-300" icon="solar:refresh-circle-bold"></iconify-icon>
</div>
<div className="flex flex-col gap-2.5 mb-4 px-1 py-2">
<div className="h-2 w-3/4 bg-gray-100 rounded-full animate-pulse"></div>
<div className="h-2 w-1/2 bg-gray-100 rounded-full animate-pulse delay-75"></div>
<div className="h-2 w-2/3 bg-gray-100 rounded-full animate-pulse delay-150"></div>
</div>
<div className="flex items-center gap-2 text-xs text-gray-500 bg-gray-50 px-2 py-1.5 rounded border border-gray-100/50">
<iconify-icon className="text-red-400" icon="solar:close-circle-bold"></iconify-icon>
                    Sync failed 2m ago
                </div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur border border-red-100 shadow-xl rounded-full py-2.5 px-5 flex items-center gap-2.5 z-30 animate-none hover:scale-105 transition-transform cursor-default">
<div className="w-2 h-2 bg-red-500 rounded-full animate-ping absolute top-3 left-6 opacity-75"></div>
<iconify-icon className="text-red-500 relative z-10" icon="solar:bell-bing-bold"></iconify-icon>
<span className="text-sm font-bold text-gray-900 tracking-tight">4 Critical Conflicts</span>
</div>
</div>
</div>
</div>
</section>

<section className="md:px-12 md:mx-8 overflow-hidden text-white bg-gray-900 rounded-[3rem] mr-4 mb-8 ml-4 pt-24 pr-6 pb-24 pl-6 relative shadow-2xl">
<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-900/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<div className="max-w-6xl mx-auto relative z-10">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">Meet your 24/7 <br/><span className="text-indigo-400 font-serif-accent italic">AI Ops Manager</span></h2>
<p className="text-lg text-gray-300 font-light">
                    Think of it as an extra operations teammate. No dashboards to babysit. No constant checking.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
<div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center text-indigo-400 mb-6">
<iconify-icon className="" icon="solar:eye-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3">Always-on Monitoring</h3>
<p className="text-gray-400 font-light leading-relaxed">
                        We continuously watch inventory across Shopify, Amazon, TikTok Shop, Walmart, and Target to catch issues early.
                    </p>
</div>

<div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
<div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center text-purple-400 mb-6">
<iconify-icon icon="solar:bell-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3">Clear, Actionable Alerts</h3>
<p className="text-gray-400 font-light leading-relaxed">
                        When something matters, you’ll know — with a simple explanation and clear next steps. No noise.
                    </p>
</div>

<div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
<div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center text-green-400 mb-6">
<iconify-icon icon="solar:shield-check-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3">You Stay in Control</h3>
<p className="text-gray-400 font-light leading-relaxed">
                        Nothing changes without your approval. We spot the risks, you give the green light to fix them.
                    </p>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors" href="#waitlist">
                    Get Early Access
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>



    </>
  );
}
