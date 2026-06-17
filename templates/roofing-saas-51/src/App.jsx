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
      

<nav className="fixed w-full z-50 backdrop-blur-md border-b bg-white/80 border-neutral-100">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-xl font-bold tracking-tighter">fixor.</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-500">
<a className="transition-colors hover:text-neutral-900" href="#features">Features</a>
<a className="transition-colors hover:text-neutral-900" href="#how-it-works">How it Works</a>
<a className="transition-colors hover:text-neutral-900" href="#pricing">Pricing</a>
</div>
<a className="text-xs font-medium px-4 py-2 rounded-full transition-all bg-neutral-900 text-white hover:bg-neutral-800" href="#early-access">
                Request Access
            </a>
</div>
</nav>

<section className="md:pt-48 md:pb-32 overflow-hidden pt-32 pb-20">
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
<div className="z-10 max-w-xl">
<div className="inline-flex gap-2 text-xs font-medium text-neutral-600 bg-neutral-50 border-neutral-200 border rounded-full mb-6 pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center">For roofing companies</div>
<h1 className="text-5xl md:text-6xl font-semibold tracking-tighter leading-[1.1] mb-6 text-neutral-950">
                    See Every Aging Roof <br className="hidden md:block"/>Before Competitors.
                </h1>
<p className="text-lg text-neutral-500 leading-relaxed mb-8 max-w-md">
                    Stop canvassing blind. Fixor visualizes roof-age data across your market on a live map, so you knock on the right doors first.
                </p>
<div className="flex flex-col sm:flex-row gap-3">
<input className="px-4 py-3 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-neutral-200 w-full sm:w-64 transition-all placeholder:text-neutral-400 bg-neutral-50 border-neutral-200" placeholder="Enter work email" type="email"/>
<button className="px-6 py-3 text-sm font-medium rounded-lg transition-all flex items-center justify-center gap-2 bg-neutral-900 text-white hover:bg-neutral-800">
                        Get Early Access <svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
<div className="mt-8 flex items-center gap-4 text-xs font-medium text-neutral-400">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full border-2 bg-neutral-200 border-white"></div>
<div className="w-6 h-6 rounded-full border-2 bg-neutral-300 border-white"></div>
<div className="w-6 h-6 rounded-full border-2 bg-neutral-400 border-white"></div>
</div>
<span>Trusted by data-driven teams</span>
</div>
</div>

<div className="flex w-full h-[400px] relative perspective-1000 items-center justify-center">

<div className="absolute w-96 h-96 rounded-full blur-3xl -top-10 -right-10 pointer-events-none bg-blue-100/50"></div>
<div className="relative w-80 h-80 transform-style-3d rotate-x-60 transition-transform duration-700 hover:rotate-0 group">

<div className="absolute inset-0 border shadow-xl data-grid opacity-80 rounded-lg bg-white border-neutral-200"></div>

<div className="absolute top-10 left-10 w-12 h-12 bg-blue-500/20 border border-blue-500/50 translate-z-10 shadow-lg animate-float"></div>
<div className="absolute top-10 left-10 w-12 h-12 bg-blue-500/10 border border-blue-500/30 transform translate-z-20 translate-y-[-10px]"></div>
<div className="absolute bottom-20 right-20 w-16 h-16 border translate-z-10 shadow-lg animate-float-delayed bg-neutral-900/10 border-neutral-900/30"></div>

<div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent w-full h-full animate-pulse"></div>

<div className="absolute -top-20 -right-10 p-4 rounded-lg shadow-sm border w-48 transform translate-z-50 animate-float bg-white border-neutral-100" style={{transform: 'translateZ(60px) rotateX(-60deg) rotateZ(45deg)'}}>
<div className="flex items-center justify-between mb-2">
<span className="text-[10px] font-semibold text-neutral-400">TARGET ZONE</span>
<span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
</div>
<div className="h-1.5 w-3/4 rounded-full mb-2 bg-neutral-100">
<div className="h-full w-2/3 rounded-full bg-neutral-900"></div>
</div>
<div className="flex justify-between text-[10px] text-neutral-500">
<span>Age: 15-20y</span>
<span>High Priority</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-neutral-100 bg-neutral-50/50">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group">
<div className="h-10 w-10 border rounded-lg flex items-center justify-center mb-4 group-hover:border-neutral-300 transition-colors bg-white border-neutral-200">
<svg aria-hidden="true" data-icon="lucide:map" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0zm.894.211v15M9 3.236v15" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-sm font-semibold mb-2 text-neutral-900">Visualize Urgency</h3>
<p className="text-sm text-neutral-500 leading-relaxed">See heat maps of aging roofs to prioritize territory planning instantly.</p>
</div>

<div className="group">
<div className="h-10 w-10 border rounded-lg flex items-center justify-center mb-4 group-hover:border-neutral-300 transition-colors bg-white border-neutral-200">
<svg aria-hidden="true" data-icon="lucide:map-pin" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
</div>
<h3 className="text-sm font-semibold mb-2 text-neutral-900">Prioritize Neighborhoods</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Focus teams on high-opportunity areas backed by proprietary data.</p>
</div>

<div className="group">
<div className="h-10 w-10 border rounded-lg flex items-center justify-center mb-4 group-hover:border-neutral-300 transition-colors bg-white border-neutral-200">
<svg aria-hidden="true" data-icon="lucide:crosshair" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M22 12h-4M6 12H2m10-6V2m0 20v-4"></path></g></svg>
</div>
<h3 className="text-sm font-semibold mb-2 text-neutral-900">Built for Roofers</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Not generic lists. Purpose-built logic for roofing workflows.</p>
</div>

<div className="group">
<div className="h-10 w-10 border rounded-lg flex items-center justify-center mb-4 group-hover:border-neutral-300 transition-colors bg-white border-neutral-200">
<svg aria-hidden="true" data-icon="lucide:zap" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-sm font-semibold mb-2 text-neutral-900">Stop Wasting Time</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Target qualified prospects who actually need replacement now.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Tired of Guessing Which Street to Knock?</h2>
<p className="text-neutral-500">Most roofers rely on the same old playbook. You're not short on hustle, you're short on data.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="p-6 rounded-2xl border bg-neutral-50 border-neutral-100">
<svg aria-hidden="true" data-icon="lucide:car" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><path d="M9 17h6"></path><circle cx="17" cy="17" r="2"></circle></g></svg>
<h3 className="font-medium mb-2 text-neutral-900">Driving Aimlessly</h3>
<p className="text-sm text-neutral-500">Hoping to spot aging shingles from the street leads to idle crews and wasted fuel.</p>
</div>
<div className="p-6 rounded-2xl border bg-neutral-50 border-neutral-100">
<svg aria-hidden="true" data-icon="lucide:door-open" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20H2m9-15.438v16.157a1 1 0 0 0 1.242.97L19 20V5.562a2 2 0 0 0-1.515-1.94l-4-1A2 2 0 0 0 11 4.561zM11 4H8a2 2 0 0 0-2 2v14m8-8h.01M22 20h-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<h3 className="font-medium mb-2 text-neutral-900">Blind Door Knocking</h3>
<p className="text-sm text-neutral-500">Reps burn out knocking on doors of homes with brand new roofs.</p>
</div>
<div className="p-6 rounded-2xl border bg-neutral-50 border-neutral-100">
<svg aria-hidden="true" data-icon="lucide:banknote" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="12" rx="2" width="20" x="2" y="6"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></g></svg>
<h3 className="font-medium mb-2 text-neutral-900">Expensive Shared Leads</h3>
<p className="text-sm text-neutral-500">Buying lists everyone else has means fighting for low-intent prospects.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-neutral-900 text-white">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-6xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
<div className="">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">What If You Could See the Best Opportunities on a Map?</h2>
<div className="space-y-8">
<div className="flex gap-4">
<div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30 text-xs font-mono text-blue-400">1</div>
<div>
<h4 className="font-medium text-lg mb-1">Target The Right Neighborhoods</h4>
<p className="text-sm leading-relaxed text-neutral-400">Focus your door-knocking and mailers on areas packed with older stock.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30 text-xs font-mono text-blue-400">2</div>
<div className="">
<h4 className="font-medium text-lg mb-1">Fill Pipeline With Intent</h4>
<p className="text-sm leading-relaxed text-neutral-400">You’re not begging them to think about a roof—data says they need one.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30 text-xs font-mono text-blue-400">3</div>
<div>
<h4 className="font-medium text-lg mb-1">Dominance Strategy</h4>
<p className="text-sm leading-relaxed text-neutral-400">See where the aging stock is now, and predict where it’s coming next.</p>
</div>
</div>
</div>
</div>

<div className="rounded-xl border p-2 shadow-2xl bg-neutral-800 border-neutral-700">
<div className="rounded-lg p-6 border aspect-square flex flex-col relative overflow-hidden bg-neutral-900 border-neutral-800">
<div className="flex justify-between items-center mb-6 border-b pb-4 border-neutral-800">
<div className="w-24 h-2 rounded bg-neutral-800"></div>
<div className="flex gap-2">
<div className="w-2 h-2 rounded-full bg-red-500"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500"></div>
<div className="w-2 h-2 rounded-full bg-green-500"></div>
</div>
</div>

<div className="flex-1 relative">

<div className="absolute inset-0 opacity-20 border rounded border-neutral-700" style={{backgroundImage: 'linear-gradient(to right, #444 1px, transparent 1px), linear-gradient(to bottom, #444 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>

<div className="absolute top-1/4 left-1/4 w-24 h-24 bg-blue-500/30 rounded-full blur-xl"></div>
<div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-indigo-500/20 rounded-full blur-xl"></div>

<div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
<svg aria-hidden="true" data-icon="lucide:map-pin" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
</div>
<div className="absolute top-1/3 left-1/3 transform">
<div className="text-[10px] px-2 py-1 rounded border shadow-lg bg-neutral-800 text-white border-neutral-700">
                                Age: 18y  <span className="text-green-400">High Priority</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="features">
<div className="max-w-6xl mr-auto ml-auto pr-6 pl-6">
<div className="mb-12">
<h2 className="text-3xl font-semibold tracking-tight mb-4">Not Another Lead List.<br/>A Roof-Age Intelligence Engine.</h2>
<p className="text-neutral-500 max-w-2xl">Instead of a CSV full of random names, you get visual intelligence ranked by opportunity.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">

<div className="md:col-span-2 rounded-2xl border p-8 relative overflow-hidden group bg-neutral-50 border-neutral-100">
<div className="relative z-10">
<div className="h-10 w-10 border rounded-lg flex items-center justify-center mb-4 shadow-sm bg-white border-neutral-200">
<svg aria-hidden="true" className="" data-icon="lucide:check-circle-2" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
</div>
<h3 className="text-lg font-semibold text-neutral-900">High-Intent Areas</h3>
<p className="text-sm text-neutral-500 mt-2 max-w-sm">Areas where older roofs are concentrated ranked by opportunity. Decisions based on data, not hunches.</p>
</div>
<div className="absolute right-0 bottom-0 w-1/2 h-full bg-gradient-to-l to-transparent from-white/50"></div>

<div className="absolute bottom-6 right-6 flex items-end gap-2 h-32 opacity-50">
<div className="w-8 rounded-t-sm h-12 group-hover:h-20 transition-all duration-500 bg-neutral-200"></div>
<div className="w-8 rounded-t-sm h-24 group-hover:h-28 transition-all duration-500 delay-75 bg-neutral-300"></div>
<div className="w-8 rounded-t-sm h-16 group-hover:h-32 transition-all duration-500 delay-100 bg-neutral-900"></div>
</div>
</div>

<div className="flex flex-col group bg-neutral-50 border-neutral-100 border rounded-2xl pt-8 pr-8 pb-8 pl-8 justify-between">
<div className="">
<svg aria-hidden="true" className="" data-icon="lucide:brain-circuit" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 5a3 3 0 1 0-5.997.125a4 4 0 0 0-2.526 5.77a4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4M6.003 5.125A3 3 0 0 0 6.401 6.5m-2.924 4.396a4 4 0 0 1 .585-.396M6 18a4 4 0 0 1-1.967-.516M12 13h4m-4 5h6a2 2 0 0 1 2 2v1M12 8h8m-4 0V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></g></svg>
<h3 className="text-lg font-semibold text-neutral-900">Proprietary AI</h3>
<p className="text-sm text-neutral-500 mt-2">Modeled data, not just public records.</p>
</div>
<div className="h-1 w-full rounded-full overflow-hidden bg-neutral-200">
<div className="h-full w-2/3 group-hover:w-full transition-all duration-1000 bg-neutral-900"></div>
</div>
</div>

<div className="rounded-2xl border p-8 flex flex-col justify-between bg-neutral-50 border-neutral-100">
<div className="">
<svg aria-hidden="true" data-icon="lucide:target" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></g></svg>
<h3 className="text-lg font-semibold text-neutral-900">Precision</h3>
<p className="text-sm text-neutral-500 mt-2">Drill down to specific property ages.</p>
</div>
<div className="flex -space-x-2">
<div className="h-8 w-8 rounded-full border border-white bg-neutral-200"></div>
<div className="h-8 w-8 rounded-full border border-white bg-neutral-300"></div>
</div>
</div>

<div className="md:col-span-2 rounded-2xl border p-8 relative overflow-hidden bg-neutral-50 border-neutral-100">
<div className="relative z-10">
<div className="h-10 w-10 border rounded-lg flex items-center justify-center mb-4 shadow-sm bg-white border-neutral-200">
<svg aria-hidden="true" data-icon="lucide:bar-chart-3" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18m-3-4V9m-5 8V5M8 17v-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-semibold text-neutral-900">Bigger Average Tickets</h3>
<p className="text-sm text-neutral-500 mt-2 max-w-sm">Use rep's time where it pays off. Same number of conversations, better quality roofs.</p>
</div>

<svg className="absolute bottom-0 right-0 w-2/3 h-32 text-neutral-200" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 100 40">
<path d="M0 35 L20 30 L40 32 L60 15 L80 20 L100 5" vector-effect="non-scaling-stroke"></path>
<path className="text-neutral-100" d="M0 40 L20 38 L40 40 L60 30 L80 35 L100 25"></path>
</svg>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="how-it-works">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight">From Map to Jobs in 3 Steps</h2>
<p className="text-neutral-500 mt-4">Territory selection to door-knocking ready in minutes.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-px -z-10 bg-neutral-100"></div>
<div className="bg-white">
<div className="flex bg-neutral-50 w-24 h-24 z-10 border-neutral-100 border rounded-full mr-auto mb-6 ml-auto relative items-center justify-center">
<span className="font-mono text-xl font-bold text-neutral-900">01</span>
</div>
<h3 className="text-lg font-medium text-center mb-2">Choose Territory</h3>
<p className="text-sm text-neutral-500 text-center px-4">Select your state or counties. Instantly see a map highlighting high concentrations.</p>
</div>
<div className="bg-white">
<div className="w-24 h-24 rounded-full border flex items-center justify-center mx-auto mb-6 relative z-10 bg-neutral-50 border-neutral-100">
<span className="font-mono text-xl font-bold text-neutral-900">02</span>
</div>
<h3 className="text-lg font-medium text-center mb-2">Zoom &amp; Filter</h3>
<p className="text-sm text-neutral-500 text-center px-4">Drill down by estimated roof age (e.g. 15+ years) to see where reps should spend time.</p>
</div>
<div className="bg-white">
<div className="w-24 h-24 rounded-full border flex items-center justify-center mx-auto mb-6 relative z-10 bg-neutral-50 border-neutral-100">
<span className="font-mono text-xl font-bold text-neutral-900">03</span>
</div>
<h3 className="text-lg font-medium text-center mb-2">Take Action</h3>
<p className="text-sm text-neutral-500 text-center px-4">Export target properties to your sales tools or canvassing apps instantly.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-y bg-neutral-50 border-neutral-200">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-12">
<h2 className="text-3xl font-semibold tracking-tight">Built for Roofers Who Want "Moneyball"</h2>
<p className="text-neutral-500 mt-2">Purpose-built features designed specifically for roofing teams.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
<div>
<h4 className="font-medium flex items-center gap-2 mb-2 text-neutral-900">
<svg aria-hidden="true" data-icon="lucide:layers" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></g></svg> Roof-Age Heat Maps
                    </h4>
<p className="text-sm text-neutral-500">Instantly see where aging roofs cluster in your state so you can own those pockets.</p>
</div>
<div>
<h4 className="font-medium flex items-center gap-2 mb-2 text-neutral-900">
<svg aria-hidden="true" data-icon="lucide:home" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></g></svg> Property-Level Insights
                    </h4>
<p className="text-sm text-neutral-500">Click into an area to see individual properties with estimated roof age ranges.</p>
</div>
<div>
<h4 className="font-medium flex items-center gap-2 mb-2 text-neutral-900">
<svg aria-hidden="true" data-icon="lucide:filter" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 3H2l8 9.46V19l4 2v-8.54z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Smart Filtering
                    </h4>
<p className="text-sm text-neutral-500">Filter by roof age bands, city, zip, or custom regions to match your crews and goals.</p>
</div>
<div>
<h4 className="font-medium flex items-center gap-2 mb-2 text-neutral-900">
<svg aria-hidden="true" data-icon="lucide:users" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></g></svg> Territory Planning
                    </h4>
<p className="text-sm text-neutral-500">Assign reps to territories based on real opportunity—even out workload.</p>
</div>
<div>
<h4 className="font-medium flex items-center gap-2 mb-2 text-neutral-900">
<svg aria-hidden="true" data-icon="lucide:share" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v13m4-9l-4-4l-4 4m-4 6v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Export &amp; Integrate
                    </h4>
<p className="text-sm text-neutral-500">Export selected areas to your CRM, dialing tools, or canvassing workflows.</p>
</div>
<div>
<h4 className="font-medium flex items-center gap-2 mb-2 text-neutral-900">
<svg aria-hidden="true" data-icon="lucide:refresh-cw" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M3 12a9 9 0 0 1 9-9a9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5m5 4a9 9 0 0 1-9 9a9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></g></svg> Real-time Data
                    </h4>
<p className="text-sm text-neutral-500">Always know the latest roof aging data so you stay ahead of your competition.</p>
</div>
</div>
</div>
</section>


<section className="py-24 bg-neutral-900 text-white" id="early-access">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium mb-6 bg-neutral-800 border-neutral-700 text-neutral-300">
<svg aria-hidden="true" data-icon="lucide:sparkles" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg> Founding Customer Pricing
            </div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-6">Early Access for Roofers<br/>Who Want a Head Start.</h2>
<p className="max-w-lg mx-auto mb-10 text-lg text-neutral-400">
                We’re rolling out state by state. Secure your territory and lock in founding pricing before the general public release.
            </p>
<form className="max-w-sm mx-auto space-y-4">
<div className="flex flex-col gap-2 text-left">
<label className="text-xs text-neutral-500 font-medium ml-1">Email Address</label>
<input className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-neutral-500 transition-colors placeholder:text-neutral-600 bg-neutral-800 border-neutral-700" placeholder="name@company.com" type="email"/>
</div>
<div className="flex flex-col gap-2 text-left">
<label className="text-xs text-neutral-500 font-medium ml-1">Primary Market/State</label>
<input className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-neutral-500 transition-colors placeholder:text-neutral-600 bg-neutral-800 border-neutral-700" placeholder="e.g. Texas, Florida" type="text"/>
</div>
<button className="w-full font-medium rounded-lg px-4 py-3 transition-colors mt-2 bg-white text-neutral-900 hover:bg-neutral-100" type="submit">
                    Apply for Early Access
                </button>
</form>
<p className="text-xs mt-6 text-neutral-600">No commitment required. Limited spots available per market.</p>
</div>
</section>

<section className="bg-white pt-24 pb-24" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-2xl font-semibold tracking-tight mb-12">Questions Roofers Ask Us</h2>
<div className="space-y-4">
<details className="group [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer bg-neutral-50 rounded-xl pt-4 pr-4 pb-4 pl-4">
<summary className="flex items-center justify-between font-medium text-neutral-900">
                        How accurate is your roof age estimation?
                        <svg aria-hidden="true" data-icon="lucide:chevron-down" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</summary>
<p className="text-sm text-neutral-500 mt-3 leading-relaxed">
                        We use a proprietary model combining multiple data signals to estimate roof age ranges at scale. It’s not meant to replace on-site inspection—but it’s a powerful way to prioritize where you knock, mail, and market.
                    </p>
</details>
<details className="group rounded-xl p-4 [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer bg-neutral-50">
<summary className="flex items-center justify-between font-medium text-neutral-900">
                        Is this a lead service?
                        <svg aria-hidden="true" data-icon="lucide:chevron-down" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</summary>
<p className="text-sm text-neutral-500 mt-3 leading-relaxed">
                        No. We’re not selling shared leads. We provide intelligence—a map of where roofs are likely aging out—so your team can generate your own high-quality leads more efficiently.
                    </p>
</details>
<details className="group rounded-xl p-4 [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer bg-neutral-50">
<summary className="flex items-center justify-between font-medium text-neutral-900">
                        What areas do you cover?
                        <svg aria-hidden="true" data-icon="lucide:chevron-down" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</summary>
<p className="text-sm text-neutral-500 mt-3 leading-relaxed">
                        We’re rolling out state by state, starting with major roofing markets. Tell us your main market when you request early access, and we’ll confirm availability and timeline.
                    </p>
</details>
<details className="group rounded-xl p-4 [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer bg-neutral-50">
<summary className="flex items-center justify-between font-medium text-neutral-900">
                        Do I have to change my sales process?
                        <svg aria-hidden="true" data-icon="lucide:chevron-down" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</summary>
<p className="text-sm text-neutral-500 mt-3 leading-relaxed">
                        No. RoofMap plugs into the way you already get customers—door knocking, mailers, telemarketing, online campaigns—by giving you better data on where to focus.
                    </p>
</details>
</div>
</div>
</section>

<section className="py-24 border-t border-neutral-100 bg-white">
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

<div className="">
<h2 className="text-3xl font-semibold tracking-tight mb-6">Be the Roofer Who Knows Where the Next Jobs Are.</h2>
<p className="text-neutral-500 leading-relaxed mb-8">
                    Most roofers wait for storms, pray for referrals, or fight over the same lead lists. RoofMap gives you a data advantage—so you know which neighborhoods and roofs are most likely ready for replacement before everyone else shows up.
                </p>
<div className="grid grid-cols-2 gap-4">
<div className="flex items-center gap-3 p-3 rounded-lg border bg-neutral-50 border-neutral-100">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-sm font-medium">Minnesota</span>
</div>
<div className="flex items-center gap-3 p-3 rounded-lg border bg-neutral-50 border-neutral-100">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-sm font-medium">Miami</span>
</div>
<div className="flex items-center gap-3 p-3 rounded-lg border bg-neutral-50 border-neutral-100">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-sm font-medium">Orlando</span>
</div>
<div className="flex items-center gap-3 p-3 rounded-lg border bg-neutral-50 border-neutral-100">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-sm font-medium">West Palm Beach</span>
</div>
</div>
</div>

<div className="relative">
<div className="aspect-[4/3] rounded-2xl border border-neutral-200 bg-neutral-50 p-6 relative overflow-hidden flex items-center justify-center">

<div className="absolute inset-0 opacity-[0.4]" style={{backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>

<svg className="filter w-[430px] h-[360px] drop-shadow-sm" data-icon-replaced="true" strokeWidth="2" style={{color: 'rgb(23, 23, 23)', width: '430px', height: '360px'}} viewbox="0 0 800 500">

<path className="hover:stroke-neutral-300 transition-colors duration-500" d="M110,60 L280,60 L320,80 L400,80 L500,40 L650,40 L720,100 L700,200 L760,250 L750,300 L680,300 L650,450 L740,490 L750,460 L780,450 L720,300 L650,320 L550,300 L500,350 L400,330 L350,380 L250,350 L200,400 L150,380 L100,300 L50,250 L40,150 L110,60 Z M650,450 L720,490" fill="#ffffff" stroke="#e5e5e5" strokeWidth="2"></path>

<g className="group cursor-pointer">
<circle className="animate-ping opacity-75" cx="480" cy="90" fill="rgba(34, 197, 94, 0.1)" r="24" style={{animationDuration: '3s'}}></circle>
<circle cx="480" cy="90" fill="#22c55e" r="6" stroke="white" strokeWidth="2"></circle>

<g className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" transform="translate(480, 60)">
<rect fill="#171717" height="24" opacity="0.9" rx="4" width="80" x="-40" y="-30"></rect>
<text fill="white" fontFamily="sans-serif" fontSize="10" font-weight="600" text-anchor="middle" x="0" y="-14">Minnesota</text>
</g>
</g>

<g className="group cursor-pointer">
<circle className="animate-ping opacity-75" cx="700" cy="400" fill="rgba(34, 197, 94, 0.1)" r="24" style={{animationDuration: '3s', animationDelay: '0.5s'}}></circle>
<circle cx="700" cy="400" fill="#22c55e" r="6" stroke="white" strokeWidth="2"></circle>

<g className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" transform="translate(650, 400)">
<rect fill="#171717" height="24" opacity="0.9" rx="4" width="60" x="-45" y="-12"></rect>
<text fill="white" fontFamily="sans-serif" fontSize="10" font-weight="600" text-anchor="middle" x="-15" y="4">Orlando</text>
</g>
</g>

<g className="group cursor-pointer">
<circle className="animate-ping opacity-75" cx="725" cy="430" fill="rgba(34, 197, 94, 0.1)" r="24" style={{animationDuration: '3s', animationDelay: '1s'}}></circle>
<circle cx="725" cy="430" fill="#22c55e" r="6" stroke="white" strokeWidth="2"></circle>

<g className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" transform="translate(780, 430)">
<rect fill="#171717" height="24" opacity="0.9" rx="4" width="50" x="-5" y="-12"></rect>
<text fill="white" fontFamily="sans-serif" fontSize="10" font-weight="600" text-anchor="middle" x="20" y="4">WPB</text>
</g>
</g>

<g className="group cursor-pointer">
<circle className="animate-ping opacity-75" cx="720" cy="460" fill="rgba(34, 197, 94, 0.1)" r="24" style={{animationDuration: '3s', animationDelay: '1.5s'}}></circle>
<circle cx="720" cy="460" fill="#22c55e" r="6" stroke="white" strokeWidth="2"></circle>

<g className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" transform="translate(770, 470)">
<rect fill="#171717" height="24" opacity="0.9" rx="4" width="50" x="-5" y="-12"></rect>
<text fill="white" fontFamily="sans-serif" fontSize="10" font-weight="600" text-anchor="middle" x="20" y="4">Miami</text>
</g>
</g>
</svg>

<div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur border border-neutral-200 rounded-lg p-2 text-[10px] font-medium text-neutral-500 shadow-sm">
<div className="flex items-center gap-2 mb-1">
<span className="w-2 h-2 rounded-full bg-green-500"></span> Live Coverage
                        </div>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-neutral-200"></span> Coming Soon
                        </div>
</div>
</div>
</div>
</div>
</section>

<footer className="py-12 border-t border-neutral-100 bg-white">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="text-lg font-bold tracking-tighter">fixor.</span>
<span className="text-xs ml-2 text-neutral-400">© 2024 Fixor Intelligence Inc.</span>
</div>
<div className="flex gap-6 text-xs font-medium text-neutral-500">
<a className="hover:text-neutral-900" href="#">Privacy</a>
<a className="hover:text-neutral-900" href="#">Terms</a>
<a className="hover:text-neutral-900" href="#">Support</a>
</div>
<div className="text-xs text-neutral-400">
                Operating in Select US Markets
            </div>
</div>
</footer>

    </>
  );
}
