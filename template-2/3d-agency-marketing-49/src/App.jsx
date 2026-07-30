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
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
<div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center text-black font-bold text-xs group-hover:rotate-12 transition-transform">3D</div>
<span className="text-white font-medium tracking-tight">AGENCY</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#work">Work</a>
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#process">Process</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium hover:text-white transition-colors" href="#">Log in</a>
<a className="bg-white text-black text-xs font-semibold px-4 py-2 rounded-full hover:bg-neutral-200 transition-colors" href="#">
                    Start Project
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
<div className="absolute inset-0 bg-grid z-0 pointer-events-none"></div>
<div className="relative z-10 mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">

<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                    Accepting new clients for Q4
                </div>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight leading-[1.1] mb-6 glow-text">
                    Marketing in <br />
<span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 via-neutral-400 to-neutral-600">Three Dimensions.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 mb-8 max-w-lg leading-relaxed">
                    We scale brands using data-driven strategies, immersive design, and technical precision. Experience the depth of digital growth.
                </p>
<div className="flex flex-wrap items-center gap-4">
<button className="bg-white text-black font-semibold h-12 px-6 rounded-lg hover:bg-neutral-200 transition-colors flex items-center gap-2">
                        Get Audit
                        <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<button className="h-12 px-6 rounded-lg border border-white/10 hover:bg-white/5 text-white transition-colors font-medium flex items-center gap-2">
<i className="w-4 h-4" data-lucide="play-circle"></i>
                        Showreel
                    </button>
</div>
<div className="mt-12 flex items-center gap-4 text-sm text-neutral-500">
<div className="flex -space-x-3">
<div className="w-8 h-8 rounded-full border border-black bg-neutral-800"></div>
<div className="w-8 h-8 rounded-full border border-black bg-neutral-700"></div>
<div className="w-8 h-8 rounded-full border border-black bg-neutral-600"></div>
</div>
<p>Trusted by 100+ scaling startups.</p>
</div>
</div>

<div className="perspective-1000 hidden lg:flex justify-center items-center h-[500px]">
<div className="relative w-[400px] h-[500px] preserve-3d card-stack cursor-pointer">

<div className="absolute inset-0 bg-neutral-900/90 backdrop-blur-md rounded-2xl border border-white/10 p-6 flex flex-col justify-between shadow-2xl">
<div className="flex justify-between items-center opacity-50">
<div className="h-2 w-16 bg-white/20 rounded-full"></div>
<div className="h-4 w-4 rounded-full border border-white/20"></div>
</div>
<div className="space-y-3 opacity-30">
<div className="h-2 w-full bg-white/10 rounded-full"></div>
<div className="h-2 w-3/4 bg-white/10 rounded-full"></div>
<div className="h-2 w-1/2 bg-white/10 rounded-full"></div>
</div>
</div>

<div className="absolute inset-0 bg-neutral-900 rounded-2xl border border-white/10 p-6 float-layer flex flex-col overflow-hidden">
<div className="flex items-center gap-3 mb-6">
<div className="w-3 h-3 rounded-full bg-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/50"></div>
</div>
<div className="flex-1 flex items-end gap-2 pb-4 border-b border-white/5">
<div className="w-1/5 h-[40%] bg-neutral-800 rounded-t-md"></div>
<div className="w-1/5 h-[60%] bg-neutral-700 rounded-t-md"></div>
<div className="w-1/5 h-[30%] bg-neutral-800 rounded-t-md"></div>
<div className="w-1/5 h-[80%] bg-white rounded-t-md shadow-[0_0_15px_rgba(255,255,255,0.3)]"></div>
<div className="w-1/5 h-[50%] bg-neutral-700 rounded-t-md"></div>
</div>
<div className="mt-4 flex justify-between text-xs font-mono text-neutral-500">
<span>ROI</span>
<span className="text-emerald-400">+124%</span>
</div>
</div>

<div className="absolute top-1/2 left-1/2 w-[320px] -translate-x-1/2 -translate-y-1/2 h-[180px] bg-gradient-to-br from-neutral-800 to-black rounded-xl border border-white/10 p-6 float-layer-2 flex flex-col justify-between">
<div className="flex justify-between items-start">
<i className="text-white w-6 h-6" data-lucide="activity"></i>
<span className="text-xs font-mono text-neutral-400 border border-white/10 px-2 py-1 rounded">LIVE</span>
</div>
<div>
<div className="text-3xl font-medium text-white tracking-tight">8,492</div>
<div className="text-xs text-neutral-500 mt-1">Active Users</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-y border-white/5 bg-black/20">
<div className="mx-auto max-w-7xl px-6">
<p className="text-center text-xs font-medium text-neutral-600 mb-8 uppercase tracking-widest">Powering Next-Gen Companies</p>
<div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-xl font-semibold tracking-tighter">ACME</span>
<span className="text-xl font-semibold tracking-tighter">STRATA</span>
<span className="text-xl font-semibold tracking-tighter">VERTEX</span>
<span className="text-xl font-semibold tracking-tighter">HYPER</span>
<span className="text-xl font-semibold tracking-tighter">ORBITAL</span>
<span className="text-xl font-semibold tracking-tighter">NEXUS</span>
</div>
</div>
</section>

<section className="py-24 relative" id="services">
<div className="mx-auto max-w-7xl px-6">
<div className="mb-16 md:text-center max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Everything you need to scale.</h2>
<p className="text-neutral-400 text-lg">Our holistic approach integrates three dimensions of growth: Creative, Technical, and Analytical.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group gradient-border rounded-2xl p-8 bg-black hover:bg-white/[0.02] transition-colors md:col-span-2">
<div className="mb-6 inline-flex p-3 rounded-lg bg-white/5 text-white group-hover:bg-white/10 transition-colors">
<i className="w-6 h-6" data-lucide="bar-chart-3"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">Performance Marketing</h3>
<p className="text-sm text-neutral-400 leading-relaxed max-w-md">
                        Data-driven campaigns across Meta, Google, and LinkedIn. We optimize for ROAS using proprietary tracking pixels and attribution modeling.
                    </p>
</div>

<div className="group gradient-border rounded-2xl p-8 bg-black hover:bg-white/[0.02] transition-colors">
<div className="mb-6 inline-flex p-3 rounded-lg bg-white/5 text-white group-hover:bg-white/10 transition-colors">
<i className="w-6 h-6" data-lucide="pen-tool"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">Brand Design</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Visual identities that cut through the noise. From logos to complete design systems.
                    </p>
</div>

<div className="group gradient-border rounded-2xl p-8 bg-black hover:bg-white/[0.02] transition-colors">
<div className="mb-6 inline-flex p-3 rounded-lg bg-white/5 text-white group-hover:bg-white/10 transition-colors">
<i className="w-6 h-6" data-lucide="code-2"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">Web Development</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        High-performance websites built on modern stacks. SEO-optimized and conversion-ready.
                    </p>
</div>

<div className="group gradient-border rounded-2xl p-8 bg-black hover:bg-white/[0.02] transition-colors md:col-span-2">
<div className="flex flex-col md:flex-row md:items-center gap-6">
<div className="flex-1">
<div className="mb-6 inline-flex p-3 rounded-lg bg-white/5 text-white group-hover:bg-white/10 transition-colors">
<i className="w-6 h-6" data-lucide="zap"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">Growth Automation</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                                Streamline your lead nurturing with automated workflows. We connect your CRM, email, and ad platforms into a single ecosystem.
                            </p>
</div>

<div className="w-full md:w-1/3 bg-neutral-900/50 rounded-lg border border-white/5 p-4 flex flex-col gap-2">
<div className="flex items-center justify-between text-[10px] text-neutral-500 font-mono">
<span>TRIGGER</span>
<span className="text-emerald-500">ACTIVE</span>
</div>
<div className="h-2 w-full bg-white/10 rounded-full"></div>
<div className="h-8 w-full bg-neutral-800 rounded border border-white/5 flex items-center px-2">
<div className="w-2 h-2 rounded-full bg-blue-500"></div>
</div>
<div className="h-4 border-l border-dashed border-white/10 ml-4"></div>
<div className="h-8 w-full bg-neutral-800 rounded border border-white/5 flex items-center px-2">
<div className="w-2 h-2 rounded-full bg-purple-500"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-b from-transparent to-neutral-900/50 border-t border-white/5">
<div className="mx-auto max-w-xl px-6">
<h2 className="text-3xl font-medium text-white tracking-tight mb-2 text-center">Estimate your project</h2>
<p className="text-neutral-500 text-center mb-12 text-sm">Configure your needs to get an instant range.</p>
<div className="bg-black border border-white/10 rounded-2xl p-8 shadow-2xl">

<div className="mb-8">
<label className="block text-xs font-medium text-white mb-4 flex justify-between">
<span>Monthly Ad Spend</span>
<span className="text-neutral-400" id="spend-value">$10k - $50k</span>
</label>
<div className="relative h-2 bg-neutral-800 rounded-full">
<div className="absolute top-0 left-0 h-full bg-white rounded-full w-1/3"></div>
<div className="absolute top-1/2 left-1/3 w-4 h-4 bg-white border-2 border-black rounded-full -translate-y-1/2 -translate-x-1/2 shadow cursor-pointer hover:scale-110 transition-transform"></div>
</div>
<div className="flex justify-between text-[10px] text-neutral-600 mt-2 font-mono">
<span>$1k</span>
<span>$100k+</span>
</div>
</div>

<div className="space-y-4 mb-8">
<label className="block text-xs font-medium text-white mb-2">Services Needed</label>
<label className="flex items-center gap-3 p-3 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] cursor-pointer transition-colors group">
<div className="relative w-4 h-4 rounded border border-neutral-600 group-hover:border-white transition-colors flex items-center justify-center">
<input className="peer appearance-none w-full h-full absolute inset-0 cursor-pointer" type="checkbox" />
<i className="w-3 h-3 text-black opacity-0 peer-checked:opacity-100 bg-white absolute inset-0 rounded-sm" data-lucide="check"></i>
</div>
<span className="text-sm text-neutral-300">Paid Media Management</span>
</label>
<label className="flex items-center gap-3 p-3 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] cursor-pointer transition-colors group">
<div className="relative w-4 h-4 rounded border border-neutral-600 group-hover:border-white transition-colors flex items-center justify-center">
<input className="peer appearance-none w-full h-full absolute inset-0 cursor-pointer" type="checkbox" />
<i className="w-3 h-3 text-black opacity-0 peer-checked:opacity-100 bg-white absolute inset-0 rounded-sm" data-lucide="check"></i>
</div>
<span className="text-sm text-neutral-300">SEO & Content Strategy</span>
</label>
</div>
<button className="w-full bg-white text-black font-semibold h-10 rounded-lg hover:bg-neutral-200 transition-colors text-sm">
                    Calculate Estimate
                </button>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05),transparent_70%)] pointer-events-none"></div>
<div className="mx-auto max-w-4xl px-6 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-6">Ready to add depth to your brand?</h2>
<p className="text-neutral-400 mb-10 text-lg">Join the agencies and startups redefining their market position.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<input className="bg-white/5 border border-white/10 rounded-lg h-12 px-4 w-full sm:w-80 text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/30 transition-colors" placeholder="Enter your email" type="email" />
<button className="bg-white text-black font-semibold h-12 px-8 rounded-lg hover:bg-neutral-200 transition-colors w-full sm:w-auto">
                    Start Now
                </button>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-black py-12">
<div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center text-black font-bold text-[10px]">3D</div>
<span className="text-white font-medium text-sm tracking-tight">AGENCY</span>
</div>
<div className="flex gap-8 text-sm text-neutral-500">
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="hover:text-white transition-colors" href="#">Instagram</a>
</div>
<div className="text-xs text-neutral-600">
                © 2024 3D Agency Inc. All rights reserved.
            </div>
</div>
</footer>


    </>
  );
}
