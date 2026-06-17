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
      

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[50vh] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none z-0 opacity-50"></div>
<div className="fixed bottom-0 right-0 w-[40vw] h-[40vw] bg-purple-600/10 blur-[100px] rounded-full pointer-events-none z-0"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
<span className="iconify text-white" data-icon="lucide:sparkles" data-strokeWidth="1.5"></span>
</div>
<span className="text-white font-medium tracking-tight text-lg">Bubble</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#dashboard">Agents</a>
<a className="hover:text-white transition-colors" href="#3d-services">3D Services</a>
<a className="hover:text-white transition-colors" href="#contact">Contact</a>
</div>
<a className="group relative px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 text-white text-xs font-medium transition-all flex items-center gap-2" href="#contact">
<span>Start Building</span>
<span className="iconify group-hover:translate-x-0.5 transition-transform" data-icon="lucide:arrow-right" data-strokeWidth="1.5"></span>
</a>
</div>
</nav>

<main className="relative z-10 pt-32 pb-20 px-6">
<div className="max-w-4xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                Accepting new orders under $50
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-6 leading-[1.1]">
                Intelligent Agents.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-white">High-End 3D.</span>
</h1>
<p className="text-lg text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed">
                Bubble crafts bespoke AI agents and immersive 3D web experiences. Premium quality development starting at an accessible price point.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3 rounded-lg bg-white text-black font-medium hover:bg-slate-200 transition-colors flex items-center justify-center gap-2" href="#dashboard">
                    Browse Agents
                </a>
<a className="w-full sm:w-auto px-8 py-3 rounded-lg border border-white/10 hover:bg-white/5 text-white font-medium transition-colors flex items-center justify-center gap-2" href="#contact">
                    Custom Order
                </a>
</div>
</div>

<div className="mt-20 max-w-5xl mx-auto h-64 md:h-96 relative perspective-1000 group">
<div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-purple-500/10 rounded-2xl border border-white/5 backdrop-blur-sm flex items-center justify-center overflow-hidden transform transition-transform duration-700 group-hover:rotate-x-2">

<div className="relative w-32 h-32 md:w-48 md:h-48 transform-style-3d animate-[spin_10s_linear_infinite]">
<div className="absolute inset-0 border border-indigo-400/30 rounded-full transform rotate-x-45 rotate-y-45"></div>
<div className="absolute inset-0 border border-purple-400/30 rounded-full transform rotate-x-90 rotate-y-12"></div>
<div className="absolute inset-0 border border-pink-400/30 rounded-full transform rotate-y-90 rotate-x-12"></div>
<div className="absolute inset-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full blur-xl opacity-40 animate-pulse"></div>
</div>
<div className="absolute bottom-6 left-6 text-xs font-mono text-white/40">
                    RENDER_ENGINE: CSS_3D_V2<br/>
                    COST_ESTIMATE: &lt; $50.00
                </div>
</div>
</div>
</main>

<section className="py-24 relative z-10 border-t border-white/5" id="dashboard">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-end justify-between mb-12">
<div>
<h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-2">Agent Dashboard</h2>
<p className="text-sm text-slate-400">Deploy intelligent assistants for your workflow.</p>
</div>
<div className="hidden md:flex gap-2">
<button className="p-2 rounded hover:bg-white/5 text-white/60 hover:text-white transition"><span className="iconify" data-icon="lucide:layout-grid" data-strokeWidth="1.5"></span></button>
<button className="p-2 rounded hover:bg-white/5 text-white/60 hover:text-white transition"><span className="iconify" data-icon="lucide:list" data-strokeWidth="1.5"></span></button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative bg-white/5 border border-white/10 rounded-xl p-6 hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
<div className="shine-effect"></div>
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 text-indigo-400">
<span className="iconify" data-icon="lucide:message-square" data-strokeWidth="1.5"></span>
</div>
<span className="px-2 py-1 rounded text-[10px] font-medium bg-green-500/10 text-green-400 border border-green-500/20">ACTIVE</span>
</div>
<h3 className="text-lg font-medium text-white mb-1">Customer Support Bot</h3>
<p className="text-xs text-slate-400 mb-6 h-10">24/7 AI agent that handles queries, bookings, and FAQs automatically.</p>
<div className="flex items-center justify-between mt-auto border-t border-white/5 pt-4">
<span className="text-lg font-medium text-white">$45 <span className="text-xs text-slate-500 font-normal">/ build</span></span>
<a className="text-xs bg-white text-black px-3 py-1.5 rounded font-medium hover:bg-slate-200 transition" href="#contact">Order Now</a>
</div>
</div>

<div className="group relative bg-white/5 border border-white/10 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
<div className="shine-effect"></div>
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center border border-purple-500/20 text-purple-400">
<span className="iconify" data-icon="lucide:bar-chart-3" data-strokeWidth="1.5"></span>
</div>
<span className="px-2 py-1 rounded text-[10px] font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">NEW</span>
</div>
<h3 className="text-lg font-medium text-white mb-1">Data Analyst Agent</h3>
<p className="text-xs text-slate-400 mb-6 h-10">Processes CSVs and generates visual reports instantly.</p>
<div className="flex items-center justify-between mt-auto border-t border-white/5 pt-4">
<span className="text-lg font-medium text-white">$49 <span className="text-xs text-slate-500 font-normal">/ build</span></span>
<a className="text-xs bg-white text-black px-3 py-1.5 rounded font-medium hover:bg-slate-200 transition" href="#contact">Order Now</a>
</div>
</div>

<div className="group relative bg-gradient-to-b from-white/10 to-white/5 border border-white/10 rounded-xl p-6 hover:border-pink-500/30 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
<div className="shine-effect"></div>
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center border border-pink-500/20 text-pink-400">
<span className="iconify" data-icon="lucide:box" data-strokeWidth="1.5"></span>
</div>
<span className="px-2 py-1 rounded text-[10px] font-medium bg-pink-500/10 text-pink-400 border border-pink-500/20">POPULAR</span>
</div>
<h3 className="text-lg font-medium text-white mb-1">3D Web Element</h3>
<p className="text-xs text-slate-400 mb-6 h-10">Interactive 3D objects integrated directly into your website code.</p>
<div className="flex items-center justify-between mt-auto border-t border-white/5 pt-4">
<span className="text-lg font-medium text-white">$40 <span className="text-xs text-slate-500 font-normal">/ asset</span></span>
<a className="text-xs bg-white text-black px-3 py-1.5 rounded font-medium hover:bg-slate-200 transition" href="#contact">Order Now</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10 bg-white/[0.02]" id="3d-services">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-6">High-Fidelity 3D <br/>Without the lag.</h2>
<div className="space-y-6">
<div className="flex gap-4">
<div className="mt-1">
<span className="iconify text-indigo-400" data-icon="lucide:zap" data-strokeWidth="1.5"></span>
</div>
<div>
<h4 className="text-white font-medium text-sm">Optimized Performance</h4>
<p className="text-sm text-slate-400 mt-1">Lightweight assets designed for the web. We build under 50$ budget constraints without sacrificing quality.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1">
<span className="iconify text-purple-400" data-icon="lucide:layers" data-strokeWidth="1.5"></span>
</div>
<div>
<h4 className="text-white font-medium text-sm">Seamless Integration</h4>
<p className="text-sm text-slate-400 mt-1">Copy-paste code for HTML/Tailwind projects. Works instantly.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1">
<span className="iconify text-pink-400" data-icon="lucide:palette" data-strokeWidth="1.5"></span>
</div>
<div>
<h4 className="text-white font-medium text-sm">Custom Aesthetics</h4>
<p className="text-sm text-slate-400 mt-1">Designed to match your brand's look and feel perfectly.</p>
</div>
</div>
</div>
</div>

<div className="relative h-80 w-full bg-black rounded-xl border border-white/10 shadow-2xl flex items-center justify-center overflow-hidden">

<div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>

<div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-indigo-500 to-purple-800 shadow-[0_0_50px_rgba(99,102,241,0.5)] floating-bubble flex items-center justify-center z-10">
<span className="text-white font-bold text-xl tracking-tight">3D</span>
</div>

<div className="absolute w-56 h-56 border border-white/10 rounded-full animate-[spin_8s_linear_infinite]">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_white]"></div>
</div>
<div className="absolute w-40 h-40 border border-white/5 rounded-full animate-[spin_12s_linear_infinite_reverse]">
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-indigo-400 rounded-full"></div>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10" id="contact">
<div className="max-w-2xl mx-auto px-6 text-center">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Ready to Order?</h2>
<p className="text-slate-400 mb-10">Reach out directly to commission your AI agent or 3D project. Fast responses guaranteed.</p>
<div className="grid gap-4 w-full">

<a className="group flex items-center justify-between p-4 rounded-lg border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-pink-500/30 transition-all" href="https://instagram.com/__bubble__1290" target="_blank">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-600 flex items-center justify-center text-white shadow-lg">
<span className="iconify" data-icon="lucide:instagram" data-strokeWidth="1.5"></span>
</div>
<div className="text-left">
<div className="text-white font-medium text-sm">Instagram DM</div>
<div className="text-slate-500 text-xs font-mono">@__bubble__1290</div>
</div>
</div>
<span className="iconify text-slate-500 group-hover:text-white transition-colors" data-icon="lucide:arrow-up-right" data-strokeWidth="1.5"></span>
</a>

<a className="group flex items-center justify-between p-4 rounded-lg border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-green-500/30 transition-all" href="https://wa.me/8801736070570" target="_blank">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white shadow-lg shadow-green-500/20">
<span className="iconify" data-icon="lucide:phone" data-strokeWidth="1.5"></span>
</div>
<div className="text-left">
<div className="text-white font-medium text-sm">WhatsApp</div>
<div className="text-slate-500 text-xs font-mono">+880 173 607 0570</div>
</div>
</div>
<span className="iconify text-slate-500 group-hover:text-white transition-colors" data-icon="lucide:arrow-up-right" data-strokeWidth="1.5"></span>
</a>

<a className="group flex items-center justify-between p-4 rounded-lg border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-indigo-500/30 transition-all" href="mailto:sm4558424@gmail.com">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white border border-white/10">
<span className="iconify" data-icon="lucide:mail" data-strokeWidth="1.5"></span>
</div>
<div className="text-left">
<div className="text-white font-medium text-sm">Email</div>
<div className="text-slate-500 text-xs font-mono">sm4558424@gmail.com</div>
</div>
</div>
<span className="iconify text-slate-500 group-hover:text-white transition-colors" data-icon="lucide:arrow-up-right" data-strokeWidth="1.5"></span>
</a>
</div>

<div className="mt-12 pt-12 border-t border-white/10 text-left">
<h3 className="text-white font-medium text-sm mb-6">Quick Inquiry</h3>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs text-slate-500 ml-1">Name</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-all placeholder:text-slate-600" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs text-slate-500 ml-1">Budget</label>
<div className="relative">
<span className="absolute left-4 top-2.5 text-slate-500 text-sm">$</span>
<input className="w-full bg-white/5 border border-white/10 rounded-lg pl-8 pr-4 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-all placeholder:text-slate-600" max="50" placeholder="50" type="number"/>
</div>
</div>
</div>
<div className="space-y-2 pt-2">
<label className="flex items-center gap-2 cursor-pointer group">
<div className="relative flex items-center">
<input className="peer h-4 w-4 appearance-none rounded border border-white/20 bg-white/5 checked:bg-indigo-500 checked:border-indigo-500 transition-colors" type="checkbox"/>
<span className="iconify absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none left-0.5" data-icon="lucide:check" data-strokeWidth="3" data-width="12"></span>
</div>
<span className="text-xs text-slate-400 group-hover:text-slate-300">I need a 3D element included</span>
</label>
<label className="flex items-center gap-2 cursor-pointer group">
<div className="relative flex items-center">
<input className="peer h-4 w-4 appearance-none rounded border border-white/20 bg-white/5 checked:bg-indigo-500 checked:border-indigo-500 transition-colors" type="checkbox"/>
<span className="iconify absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none left-0.5" data-icon="lucide:check" data-strokeWidth="3" data-width="12"></span>
</div>
<span className="text-xs text-slate-400 group-hover:text-slate-300">I need an AI Agent included</span>
</label>
</div>
<button className="w-full bg-white text-black font-medium text-sm py-2.5 rounded-lg hover:bg-slate-200 transition-colors mt-2" type="button">
                        Send Inquiry
                    </button>
</form>
</div>
</div>
</section>

<footer className="py-8 border-t border-white/5 relative z-10 bg-black">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500"></div>
<span className="text-slate-300 text-sm font-medium tracking-tight">Bubble</span>
</div>
<div className="text-xs text-slate-600">
                © 2023 Bubble AI Services. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}
