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
      

<div className="tech-grid"></div>
<div className="blob-bg top-0 left-1/2"></div>
<div className="blob-bg bottom-0 right-0 bg-blue-900/10 w-[600px] h-[600px]"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded bg-gradient-to-tr from-indigo-600 to-blue-600 flex items-center justify-center text-white font-bold tracking-tighter text-lg">
                    CM
                </div>
<span className="font-semibold text-white tracking-tight group-hover:text-indigo-300 transition-colors duration-300">CM Agency</span>
</a>
<div className="hidden md:flex items-center gap-1 bg-white/5 rounded-full p-1 border border-white/5 backdrop-blur-xl">
<a className="px-4 py-1.5 text-xs font-medium text-neutral-400 hover:text-white hover:bg-white/5 rounded-full transition-all" href="#process">Process</a>
<a className="px-4 py-1.5 text-xs font-medium text-neutral-400 hover:text-white hover:bg-white/5 rounded-full transition-all" href="#services">Services</a>
<a className="px-4 py-1.5 text-xs font-medium text-neutral-400 hover:text-white hover:bg-white/5 rounded-full transition-all" href="#testimonials">Results</a>
<a className="px-4 py-1.5 text-xs font-medium text-neutral-400 hover:text-white hover:bg-white/5 rounded-full transition-all" href="#faq">FAQ</a>
</div>
<div className="flex items-center gap-4">
<button className="text-xs font-medium text-neutral-400 hover:text-white transition-colors hidden sm:block">Login</button>
<div className="inline-block bg-transparent">
<button className="shiny-cta focus:outline-none text-xs">
<span>Book a call</span>
</button>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 overflow-hidden">
<div className="max-w-5xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-[11px] font-medium text-indigo-300 mb-8 fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-indigo-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                Accepting New Creators for Q4
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-8 fade-in-up delay-100">
                Turn your knowledge <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-white to-blue-400 animate-gradient">into an empire.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed fade-in-up delay-200">
                CM Agency builds, launches, and scales digital products for elite creators. 
                Strategy, Whop setup, and sales—all done for you. 
                <span className="text-white font-medium">Revenue share only.</span>
</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-in-up delay-300">
<div className="inline-block bg-transparent scale-110">
<button className="shiny-cta focus:outline-none">
<span>Book a call</span>
</button>
</div>
<button className="px-6 py-3 rounded-full text-sm font-medium text-neutral-400 hover:text-white transition-colors flex items-center gap-2 group">
                    View Case Studies 
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</button>
</div>
</div>

<div className="mt-20 max-w-6xl mx-auto px-4 perspective-[2000px] fade-in-up delay-300">
<div className="relative rounded-xl bg-[#0f0f11] border border-white/10 shadow-2xl shadow-indigo-500/10 overflow-hidden transform rotate-x-12 hover:rotate-x-0 transition-transform duration-700 ease-out group">

<div className="h-10 border-b border-white/5 bg-white/5 flex items-center px-4 gap-2">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="ml-4 px-3 py-1 bg-black/20 rounded border border-white/5 text-[10px] text-neutral-500 font-mono">cm-agency-dashboard.exe</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 p-6 gap-6">
<div className="col-span-2 space-y-6">

<div className="h-64 rounded-lg bg-gradient-to-b from-indigo-500/5 to-transparent border border-white/5 p-4 relative">
<div className="flex justify-between items-center mb-4">
<div>
<div className="text-xs text-neutral-500 uppercase tracking-wider">Total Revenue</div>
<div className="text-2xl font-semibold text-white mt-1">$124,502.00</div>
</div>
<div className="px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 text-xs border border-emerald-500/20">+32.4%</div>
</div>

<div className="absolute bottom-4 left-4 right-4 h-32 flex items-end justify-between gap-1 opacity-50">
<div className="w-full bg-indigo-500 rounded-t" style={{height: '40%'}}></div>
<div className="w-full bg-indigo-500 rounded-t" style={{height: '60%'}}></div>
<div className="w-full bg-indigo-500 rounded-t" style={{height: '45%'}}></div>
<div className="w-full bg-indigo-500 rounded-t" style={{height: '75%'}}></div>
<div className="w-full bg-indigo-500 rounded-t" style={{height: '50%'}}></div>
<div className="w-full bg-indigo-500 rounded-t" style={{height: '90%'}}></div>
<div className="w-full bg-indigo-500 rounded-t" style={{height: '85%'}}></div>
</div>
</div>
</div>

<div className="space-y-4">
<div className="p-4 rounded-lg bg-white/[0.02] border border-white/5">
<div className="flex items-center gap-3 mb-2">
<div className="p-1.5 rounded bg-indigo-500/20 text-indigo-400"><iconify-icon icon="lucide:users" width="16"></iconify-icon></div>
<span className="text-sm text-neutral-300">New Members</span>
</div>
<div className="text-xl font-medium text-white">1,204</div>
</div>
<div className="p-4 rounded-lg bg-white/[0.02] border border-white/5">
<div className="flex items-center gap-3 mb-2">
<div className="p-1.5 rounded bg-blue-500/20 text-blue-400"><iconify-icon icon="lucide:credit-card" width="16"></iconify-icon></div>
<span className="text-sm text-neutral-300">Active Subscriptions</span>
</div>
<div className="text-xl font-medium text-white">892</div>
</div>
<div className="p-4 rounded-lg bg-gradient-to-br from-indigo-600 to-blue-600 border border-white/10 text-white">
<div className="text-xs font-medium opacity-80 mb-1">Launch Status</div>
<div className="text-lg font-semibold">Live Now</div>
<div className="w-full bg-black/20 h-1 mt-3 rounded-full overflow-hidden">
<div className="bg-white w-[92%] h-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative border-t border-white/5" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:text-center max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Complete infrastructure for creators.</h2>
<p className="text-neutral-400">We handle the tech, the strategy, and the operations. You focus on creating content.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">

<div className="md:col-span-2 lg:col-span-2 row-span-2 rounded-2xl border border-white/10 bg-[#0f0f11] p-8 relative overflow-hidden group hover:border-white/20 transition-colors">
<div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6">
<iconify-icon icon="lucide:box" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Product Strategy &amp; Development</h3>
<p className="text-sm text-neutral-400 leading-relaxed mb-8">
                            We don't just sell; we build. From structuring your curriculum to designing high-value digital downloads, we turn your expertise into a tangible product suite.
                        </p>
<div className="grid grid-cols-2 gap-3">
<div className="flex items-center gap-2 text-xs text-neutral-300 border border-white/5 bg-white/[0.02] px-3 py-2 rounded">
<iconify-icon className="text-indigo-400" icon="lucide:check"></iconify-icon> Course Curriculum
                            </div>
<div className="flex items-center gap-2 text-xs text-neutral-300 border border-white/5 bg-white/[0.02] px-3 py-2 rounded">
<iconify-icon className="text-indigo-400" icon="lucide:check"></iconify-icon> Digital Downloads
                            </div>
<div className="flex items-center gap-2 text-xs text-neutral-300 border border-white/5 bg-white/[0.02] px-3 py-2 rounded">
<iconify-icon className="text-indigo-400" icon="lucide:check"></iconify-icon> Paid Communities
                            </div>
<div className="flex items-center gap-2 text-xs text-neutral-300 border border-white/5 bg-white/[0.02] px-3 py-2 rounded">
<iconify-icon className="text-indigo-400" icon="lucide:check"></iconify-icon> 1:1 Coaching
                            </div>
</div>
</div>
</div>

<div className="md:col-span-1 lg:col-span-1 row-span-2 rounded-2xl border border-white/10 bg-[#0f0f11] p-8 relative overflow-hidden group hover:border-white/20 transition-colors">
<div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div>
<div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
<iconify-icon icon="lucide:layout-template" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Platform Setup</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                                Expert setup on Whop, Skool, or custom implementations. Seamless payments, instant access, and automated member management.
                            </p>
</div>
<div className="mt-8 space-y-2">

<div className="rounded border border-white/10 bg-black/40 p-3 flex items-center gap-3">
<div className="w-8 h-8 rounded bg-neutral-800"></div>
<div className="space-y-1">
<div className="w-16 h-1.5 bg-neutral-700 rounded-full"></div>
<div className="w-10 h-1.5 bg-neutral-800 rounded-full"></div>
</div>
</div>
<div className="rounded border border-indigo-500/30 bg-indigo-900/10 p-3 flex items-center gap-3">
<div className="w-8 h-8 rounded bg-indigo-500/20 flex items-center justify-center text-indigo-400">
<iconify-icon icon="lucide:check-circle" width="14"></iconify-icon>
</div>
<div className="space-y-1">
<div className="text-[10px] text-indigo-200">Payment Connected</div>
<div className="text-[10px] text-indigo-400">Stripe Integration</div>
</div>
</div>
</div>
</div>
</div>

<div className="md:col-span-1 lg:col-span-1 rounded-2xl border border-white/10 bg-[#0f0f11] p-8 relative overflow-hidden group hover:border-white/20 transition-colors">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
<iconify-icon icon="lucide:rocket" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-1">Launch Support</h3>
<p className="text-xs text-neutral-400">High-converting landing pages and email sequences.</p>
</div>

<div className="md:col-span-3 lg:col-span-1 rounded-2xl border border-white/10 bg-[#0f0f11] p-8 relative overflow-hidden group hover:border-white/20 transition-colors">
<div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-4">
<iconify-icon icon="lucide:pie-chart" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-1">Rev-Share Model</h3>
<p className="text-xs text-neutral-400">We only make money when you do. True partnership.</p>
</div>
</div>
</div>
</section>

<section className="py-32 relative bg-[#050505] overflow-hidden" id="process">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-24 max-w-2xl mx-auto">
<span className="text-indigo-400 font-medium text-sm tracking-wide uppercase">The Roadmap</span>
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mt-2 mb-6">From application to income.</h2>
<p className="text-lg text-neutral-400">Our proven 4-week sprint methodology to get your digital product live, optimized, and generating consistent revenue.</p>
</div>

<div className="hidden md:block absolute left-1/2 top-48 bottom-32 w-px bg-white/5 -translate-x-1/2 z-0">
<div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-indigo-500 to-transparent opacity-30"></div>
</div>
<div className="space-y-24 relative z-10">

<div className="group relative grid md:grid-cols-2 gap-12 items-center">
<div className="md:text-right order-2 md:order-1">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-neutral-900 border border-white/10 text-white font-mono text-lg mb-6 shadow-lg shadow-indigo-500/5 group-hover:border-indigo-500/50 group-hover:text-indigo-400 transition-all duration-300">01</div>
<h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-indigo-300 transition-colors">Discovery &amp; Audit</h3>
<p className="text-neutral-400 leading-relaxed">We deep-dive into your analytics and audience data. We identify the highest-leverage product opportunity that fits your niche perfectly, ensuring demand before we write a single line of code.</p>
<ul className="mt-6 flex flex-col md:items-end gap-2 text-sm text-neutral-500">
<li className="flex items-center gap-2"><iconify-icon className="text-indigo-500" icon="lucide:check-circle-2"></iconify-icon> Audience Analysis</li>
<li className="flex items-center gap-2"><iconify-icon className="text-indigo-500" icon="lucide:check-circle-2"></iconify-icon> Competitor Research</li>
</ul>
</div>
<div className="relative order-1 md:order-2">
<div className="aspect-video rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 group-hover:shadow-2xl group-hover:shadow-indigo-500/20 transition-all duration-500">
<img alt="Data Analysis" className="w-full h-full object-cover card-zoom-image opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
<div className="px-3 py-1 rounded-full bg-white/10 backdrop-blur border border-white/10 text-xs text-white">Market Fit: 98%</div>
</div>
</div>

<div className="hidden md:block absolute top-1/2 -left-6 w-3 h-3 rounded-full bg-[#050505] border-2 border-indigo-500 -translate-x-1/2 z-20"></div>
</div>
</div>

<div className="group relative grid md:grid-cols-2 gap-12 items-center">
<div className="relative order-1">
<div className="aspect-video rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 group-hover:shadow-2xl group-hover:shadow-indigo-500/20 transition-all duration-500">
<img alt="Strategy Building" className="w-full h-full object-cover card-zoom-image opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<div className="absolute bottom-4 left-4">
<div className="flex gap-2">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-xs text-white font-mono">Building Infrastructure...</span>
</div>
</div>
</div>

<div className="hidden md:block absolute top-1/2 -right-6 w-3 h-3 rounded-full bg-[#050505] border-2 border-indigo-500 translate-x-1/2 z-20"></div>
</div>
<div className="order-2">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-neutral-900 border border-white/10 text-white font-mono text-lg mb-6 shadow-lg shadow-indigo-500/5 group-hover:border-indigo-500/50 group-hover:text-indigo-400 transition-all duration-300">02</div>
<h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-indigo-300 transition-colors">Strategy &amp; Build</h3>
<p className="text-neutral-400 leading-relaxed">This is where the magic happens. We design the curriculum, setup the Whop/Skool community, integrate payments, and build the high-converting funnel. You just record the content.</p>
<ul className="mt-6 flex flex-col gap-2 text-sm text-neutral-500">
<li className="flex items-center gap-2"><iconify-icon className="text-indigo-500" icon="lucide:check-circle-2"></iconify-icon> Platform Development</li>
<li className="flex items-center gap-2"><iconify-icon className="text-indigo-500" icon="lucide:check-circle-2"></iconify-icon> Funnel Design</li>
</ul>
</div>
</div>

<div className="group relative grid md:grid-cols-2 gap-12 items-center">
<div className="md:text-right order-2 md:order-1">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-neutral-900 border border-white/10 text-white font-mono text-lg mb-6 shadow-lg shadow-indigo-500/5 group-hover:border-indigo-500/50 group-hover:text-indigo-400 transition-all duration-300">03</div>
<h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-indigo-300 transition-colors">Launch Execution</h3>
<p className="text-neutral-400 leading-relaxed">We execute a precision marketing campaign using your socials and email list. We handle the copywriting, the timing, and the scarcity tactics to maximize day-one revenue.</p>
<ul className="mt-6 flex flex-col md:items-end gap-2 text-sm text-neutral-500">
<li className="flex items-center gap-2"><iconify-icon className="text-indigo-500" icon="lucide:check-circle-2"></iconify-icon> Email Sequence</li>
<li className="flex items-center gap-2"><iconify-icon className="text-indigo-500" icon="lucide:check-circle-2"></iconify-icon> Social Strategy</li>
</ul>
</div>
<div className="relative order-1 md:order-2">
<div className="aspect-video rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 group-hover:shadow-2xl group-hover:shadow-indigo-500/20 transition-all duration-500">
<img alt="Launch Analytics" className="w-full h-full object-cover card-zoom-image opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
<iconify-icon className="text-white drop-shadow-[0_0_15px_rgba(99,102,241,0.5)]" icon="lucide:rocket" width="40"></iconify-icon>
</div>
</div>

<div className="hidden md:block absolute top-1/2 -left-6 w-3 h-3 rounded-full bg-[#050505] border-2 border-indigo-500 -translate-x-1/2 z-20"></div>
</div>
</div>

<div className="group relative grid md:grid-cols-2 gap-12 items-center">
<div className="relative order-1">
<div className="aspect-video rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 group-hover:shadow-2xl group-hover:shadow-indigo-500/20 transition-all duration-500">
<img alt="Scale and Profit" className="w-full h-full object-cover card-zoom-image opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<div className="flex justify-between text-white text-sm font-medium border-b border-white/20 pb-2 mb-2">
<span>Monthly Recurring Revenue</span>
<span>$42k</span>
</div>
<div className="flex justify-between text-white text-sm font-medium">
<span>Retention Rate</span>
<span className="text-emerald-400">94%</span>
</div>
</div>
</div>

<div className="hidden md:block absolute top-1/2 -right-6 w-3 h-3 rounded-full bg-[#050505] border-2 border-indigo-500 translate-x-1/2 z-20"></div>
</div>
<div className="order-2">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-neutral-900 border border-white/10 text-white font-mono text-lg mb-6 shadow-lg shadow-indigo-500/5 group-hover:border-indigo-500/50 group-hover:text-indigo-400 transition-all duration-300">04</div>
<h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-indigo-300 transition-colors">Scale &amp; Share</h3>
<p className="text-neutral-400 leading-relaxed">Once live, we monitor retention and engagement. We optimize the product to increase LTV. We only make money when you do, aligning us for long-term growth.</p>
<ul className="mt-6 flex flex-col gap-2 text-sm text-neutral-500">
<li className="flex items-center gap-2"><iconify-icon className="text-indigo-500" icon="lucide:check-circle-2"></iconify-icon> 50/50 Rev Share</li>
<li className="flex items-center gap-2"><iconify-icon className="text-indigo-500" icon="lucide:check-circle-2"></iconify-icon> Ongoing Optimization</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 overflow-hidden" id="testimonials">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="mb-12 text-center">
<span className="text-sm font-medium text-indigo-400">Success Stories</span>
<h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white">
                Trusted by many loyal clients.
              </h2>
<div className="mt-4 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 border-white/10 bg-white/5">
<span className="inline-flex items-center -space-x-2">
<img alt="Reviewer 1" className="h-6 w-6 rounded-full ring-2 object-cover ring-neutral-900" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<img alt="Reviewer 2" className="h-6 w-6 rounded-full ring-2 object-cover ring-neutral-900" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<img alt="Reviewer 3" className="h-6 w-6 rounded-full ring-2 object-cover ring-neutral-900" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</span>
<span className="ml-2 inline-flex items-center gap-1 text-sm text-neutral-300">
<iconify-icon className="text-amber-300" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="text-amber-300" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="text-amber-300" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="text-amber-300" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="text-amber-300" icon="lucide:star" width="14"></iconify-icon>
<span className="ml-1 font-medium">100+ Launches</span>
</span>
</div>
</div>
<div className="grid grid-cols-1 overflow-hidden md:grid-cols-3 py-12 gap-x-6 gap-y-6 h-[600px]" style={{maskImage: 'linear-gradient(180deg, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 15%, black 85%, transparent)'}}>

<div className="overflow-hidden h-full relative">
<div className="space-y-6 absolute w-full" data-scroll-column="1">
<article className="rounded-2xl border p-6 border-white/10 bg-neutral-900/70 hover:border-indigo-500/30 transition-colors duration-300">
<blockquote className="text-[15px] leading-relaxed text-neutral-300">
                      "I had the audience but no product. CM Agency built my entire academy in 3 weeks. We hit $50k on launch day."
                    </blockquote>
<div className="mt-5 flex items-center gap-3">
<img alt="Creator" className="h-10 w-10 rounded-full object-cover ring-2 ring-white/10" src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium text-white">Sarah Jenkins</div>
<div className="text-xs text-neutral-500">Design Educator</div>
</div>
</div>
</article>
<article className="rounded-2xl border p-6 border-white/10 bg-neutral-900/70 hover:border-indigo-500/30 transition-colors duration-300">
<blockquote className="text-[15px] leading-relaxed text-neutral-300">
                      "Zero upfront cost was the game changer. They took the risk with me, and the results speak for themselves."
                    </blockquote>
<div className="mt-5 flex items-center gap-3">
<img alt="Creator" className="h-10 w-10 rounded-full object-cover ring-2 ring-white/10" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium text-white">Davide Rossi</div>
<div className="text-xs text-neutral-500">Fitness Coach</div>
</div>
</div>
</article>
<article className="rounded-2xl border p-6 border-white/10 bg-neutral-900/70 hover:border-indigo-500/30 transition-colors duration-300">
<blockquote className="text-[15px] leading-relaxed text-neutral-300">
                       "The community setup on Whop is flawless. My retention rate doubled after they restructured my tiers."
                    </blockquote>
<div className="mt-5 flex items-center gap-3">
<img alt="Creator" className="h-10 w-10 rounded-full object-cover ring-2 ring-white/10" src="https://images.unsplash.com/photo-1546456073-6712f79251bb?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium text-white">Marcus Chen</div>
<div className="text-xs text-neutral-500">Crypto Analyst</div>
</div>
</div>
</article>

<article className="rounded-2xl border p-6 border-white/10 bg-neutral-900/70 hover:border-indigo-500/30 transition-colors duration-300">
<blockquote className="text-[15px] leading-relaxed text-neutral-300">
                      "I had the audience but no product. CM Agency built my entire academy in 3 weeks. We hit $50k on launch day."
                    </blockquote>
<div className="mt-5 flex items-center gap-3">
<img alt="Creator" className="h-10 w-10 rounded-full object-cover ring-2 ring-white/10" src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium text-white">Sarah Jenkins</div>
<div className="text-xs text-neutral-500">Design Educator</div>
</div>
</div>
</article>
</div>
</div>

<div className="overflow-hidden h-full relative">
<div className="space-y-6 absolute w-full" data-scroll-column="2">
<article className="rounded-2xl border p-6 border-white/10 bg-neutral-900/70 hover:border-indigo-500/30 transition-colors duration-300">
<blockquote className="text-[15px] leading-relaxed text-neutral-300">
                      "I was stuck selling $20 ebooks. They helped me launch a $997 masterclass that sells on autopilot."
                    </blockquote>
<div className="mt-5 flex items-center gap-3">
<img alt="Creator" className="h-10 w-10 rounded-full object-cover ring-2 ring-white/10" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium text-white">Mike T.</div>
<div className="text-xs text-neutral-500">Software Developer</div>
</div>
</div>
</article>
<article className="rounded-2xl border p-6 border-white/10 bg-neutral-900/70 hover:border-indigo-500/30 transition-colors duration-300">
<blockquote className="text-[15px] leading-relaxed text-neutral-300">
                      "Their team handles all the tech headaches. I just show up and record. Exactly what I needed."
                    </blockquote>
<div className="mt-5 flex items-center gap-3">
<img alt="Creator" className="h-10 w-10 rounded-full object-cover ring-2 ring-white/10" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium text-white">Jessica L.</div>
<div className="text-xs text-neutral-500">Lifestyle Vlogger</div>
</div>
</div>
</article>
<article className="rounded-2xl border p-6 border-white/10 bg-neutral-900/70 hover:border-indigo-500/30 transition-colors duration-300">
<blockquote className="text-[15px] leading-relaxed text-neutral-300">
                      "Professional, fast, and aligned incentives. The revenue share model proves they believe in your success."
                    </blockquote>
<div className="mt-5 flex items-center gap-3">
<img alt="Creator" className="h-10 w-10 rounded-full object-cover ring-2 ring-white/10" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium text-white">David K.</div>
<div className="text-xs text-neutral-500">Finance YouTuber</div>
</div>
</div>
</article>

<article className="rounded-2xl border p-6 border-white/10 bg-neutral-900/70 hover:border-indigo-500/30 transition-colors duration-300">
<blockquote className="text-[15px] leading-relaxed text-neutral-300">
                      "I was stuck selling $20 ebooks. They helped me launch a $997 masterclass that sells on autopilot."
                    </blockquote>
<div className="mt-5 flex items-center gap-3">
<img alt="Creator" className="h-10 w-10 rounded-full object-cover ring-2 ring-white/10" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium text-white">Mike T.</div>
<div className="text-xs text-neutral-500">Software Developer</div>
</div>
</div>
</article>
</div>
</div>

<div className="overflow-hidden h-full relative">
<div className="space-y-6 absolute w-full" data-scroll-column="3">
<article className="rounded-2xl border p-6 border-white/10 bg-neutral-900/70 hover:border-indigo-500/30 transition-colors duration-300">
<blockquote className="text-[15px] leading-relaxed text-neutral-300">
                      "From a small Discord to a fully automated membership site earning $15k MRR. Incredible journey."
                    </blockquote>
<div className="mt-5 flex items-center gap-3">
<img alt="Creator" className="h-10 w-10 rounded-full object-cover ring-2 ring-white/10" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium text-white">Carlos Rivera</div>
<div className="text-xs text-neutral-500">Trading Mentor</div>
</div>
</div>
</article>
<article className="rounded-2xl border p-6 border-white/10 bg-neutral-900/70 hover:border-indigo-500/30 transition-colors duration-300">
<blockquote className="text-[15px] leading-relaxed text-neutral-300">
                       "Best agency experience I've had. Clear communication and they actually understand the creator economy."
                    </blockquote>
<div className="mt-5 flex items-center gap-3">
<img alt="Creator" className="h-10 w-10 rounded-full object-cover ring-2 ring-white/10" src="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium text-white">Sofia M.</div>
<div className="text-xs text-neutral-500">Beauty Influencer</div>
</div>
</div>
</article>
<article className="rounded-2xl border p-6 border-white/10 bg-neutral-900/70 hover:border-indigo-500/30 transition-colors duration-300">
<blockquote className="text-[15px] leading-relaxed text-neutral-300">
                       "They optimized my funnel and conversion rate increased by 40%. Highly recommended."
                    </blockquote>
<div className="mt-5 flex items-center gap-3">
<img alt="Creator" className="h-10 w-10 rounded-full object-cover ring-2 ring-white/10" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium text-white">Noah B.</div>
<div className="text-xs text-neutral-500">Marketing Consultant</div>
</div>
</div>
</article>

<article className="rounded-2xl border p-6 border-white/10 bg-neutral-900/70 hover:border-indigo-500/30 transition-colors duration-300">
<blockquote className="text-[15px] leading-relaxed text-neutral-300">
                      "From a small Discord to a fully automated membership site earning $15k MRR. Incredible journey."
                    </blockquote>
<div className="mt-5 flex items-center gap-3">
<img alt="Creator" className="h-10 w-10 rounded-full object-cover ring-2 ring-white/10" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium text-white">Carlos Rivera</div>
<div className="text-xs text-neutral-500">Trading Mentor</div>
</div>
</div>
</article>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-[#050505]" id="faq">
<div className="max-w-2xl mx-auto px-6">
<h2 className="text-3xl font-medium text-white text-center mb-12">Common Questions</h2>
<div className="space-y-4">
<details className="group rounded-lg bg-neutral-900/30 border border-white/5 open:bg-neutral-900/50 transition-all">
<summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-neutral-300 hover:text-white">
<span>Is there really zero upfront cost?</span>
<span className="transition-transform group-open:rotate-180">
<iconify-icon icon="lucide:chevron-down"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-neutral-500 leading-relaxed">
                        Yes. We invest our time, resources, and team into your launch. We only get paid when your product generates revenue. This aligns our incentives completely with your success.
                    </div>
</details>
<details className="group rounded-lg bg-neutral-900/30 border border-white/5 open:bg-neutral-900/50 transition-all">
<summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-neutral-300 hover:text-white">
<span>What is the revenue share percentage?</span>
<span className="transition-transform group-open:rotate-180">
<iconify-icon icon="lucide:chevron-down"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-neutral-500 leading-relaxed">
                        Typically, we operate on a 50/50 split on net revenue for the products we build and manage. You retain full ownership of your audience and brand.
                    </div>
</details>
<details className="group rounded-lg bg-neutral-900/30 border border-white/5 open:bg-neutral-900/50 transition-all">
<summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-neutral-300 hover:text-white">
<span>What kind of creators do you work with?</span>
<span className="transition-transform group-open:rotate-180">
<iconify-icon icon="lucide:chevron-down"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-neutral-500 leading-relaxed">
                        We work with creators who have an established engaged audience (typically 50k+ followers) in educational, lifestyle, or niche markets, looking to monetize through digital products.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative overflow-hidden">
<div className="absolute inset-0 bg-indigo-600/5"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">Ready to monetize your audience?</h2>
<p className="text-neutral-400 mb-10 text-lg">Stop leaving money on the table. Let us build your digital empire while you create content.</p>
<div className="inline-block bg-transparent scale-110">
<button className="shiny-cta focus:outline-none">
<span>Book a call</span>
</button>
</div>
<p className="mt-6 text-xs text-neutral-500">Limited spots available for Q4 2024.</p>
</div>
</section>

<footer className="border-t border-white/5 bg-[#050505] pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<a className="flex items-center gap-2 mb-4" href="#">
<div className="w-6 h-6 rounded bg-gradient-to-tr from-indigo-600 to-blue-600 flex items-center justify-center text-white font-bold text-xs">CM</div>
<span className="font-semibold text-white tracking-tight text-sm">CM Agency</span>
</a>
<p className="text-xs text-neutral-500 leading-relaxed">
                        The premier done-for-you monetization agency for elite content creators.
                    </p>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Platform</h4>
<ul className="space-y-2 text-xs text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Services</a></li>
<li><a className="hover:text-white transition-colors" href="#">Process</a></li>
<li><a className="hover:text-white transition-colors" href="#">Case Studies</a></li>
<li><a className="hover:text-white transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Company</h4>
<ul className="space-y-2 text-xs text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Legal</h4>
<ul className="space-y-2 text-xs text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-xs text-neutral-600">
                    © 2024 CM Agency. All rights reserved.
                </div>
<div className="flex gap-4">
<a className="text-neutral-600 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="16"></iconify-icon></a>
<a className="text-neutral-600 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:instagram" width="16"></iconify-icon></a>
<a className="text-neutral-600 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:linkedin" width="16"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
