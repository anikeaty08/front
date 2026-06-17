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
      

<div className="fixed inset-0 pointer-events-none z-0">
<div className="absolute inset-0 ascii-pattern mask-image:linear-gradient(to_bottom,black,transparent)"></div>

<div className="absolute top-0 left-0 w-full h-[60vh] overflow-hidden opacity-[0.03] pointer-events-none font-mono text-[10px] leading-3 break-all select-none">
            01010101xtrix.fun0101011100101linkinbio01010100101fast010101secure01010101aesthetic01010101010101xtrix.fun0101011100101linkinbio01010100101fast010101secure01010101aesthetic01010101010101xtrix.fun0101011100101linkinbio01010100101fast010101secure01010101aesthetic01010101010101xtrix.fun0101011100101linkinbio01010100101fast010101secure01010101aesthetic01010101010101xtrix.fun0101011100101linkinbio01010100101fast010101secure01010101aesthetic01010101010101xtrix.fun0101011100101linkinbio01010100101fast010101secure01010101aesthetic01010101010101xtrix.fun0101011100101linkinbio01010100101fast010101secure01010101aesthetic01010101010101xtrix.fun0101011100101linkinbio01010100101fast010101secure01010101aesthetic01010101010101xtrix.fun0101011100101linkinbio01010100101fast010101secure01010101aesthetic01010101010101xtrix.fun0101011100101linkinbio01010100101fast010101secure01010101aesthetic01010101010101xtrix.fun0101011100101linkinbio01010100101fast010101secure01010101aesthetic01010101010101xtrix.fun0101011100101linkinbio01010100101fast010101secure01010101aesthetic01010101010101
        </div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-[#262626] bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-[1400px] mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-12">
<a className="group flex items-center gap-2" href="#">
<div className="w-5 h-5 bg-white rounded-full flex items-center justify-center group-hover:shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all">
<div className="w-1.5 h-1.5 bg-black rounded-full"></div>
</div>
<span className="font-medium tracking-tight text-sm">xtrix.fun</span>
</a>
<div className="hidden md:flex items-center gap-6 text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
<a className="hover:text-white transition-colors" href="#features">/ Features</a>
<a className="hover:text-white transition-colors" href="#pricing">/ Pricing</a>
<a className="hover:text-white transition-colors" href="#security">/ Security</a>
<a className="hover:text-white transition-colors" href="#about">/ About</a>
</div>
</div>
<div className="flex items-center gap-6">
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="#">LOGIN</a>
<a className="flex items-center gap-2 pl-4 pr-3 py-1.5 border border-neutral-700 rounded-full hover:border-white transition-colors group bg-neutral-900/50" href="#">
<span className="text-xs font-medium">GET STARTED</span>
<i className="w-3 h-3 text-neutral-400 group-hover:text-white transition-colors" data-lucide="arrow-up-right"></i>
</a>
</div>
</div>
</nav>

<main className="relative z-10 pt-32 pb-20 border-b border-[#262626]">
<div className="max-w-[1400px] mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

<div className="lg:col-span-8 flex flex-col justify-between min-h-[60vh]">
<div>
<div className="flex items-center gap-2 text-[10px] font-mono text-neutral-500 mb-6">
<span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                            SYSTEM OPERATIONAL // V.2.0.4
                        </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[0.95] mb-8">
                            UNIFY YOUR <br/>
<span className="text-neutral-500">DIGITAL EXISTENCE</span>
</h1>
<div className="max-w-xl">
<p className="text-neutral-400 text-sm md:text-base font-light leading-relaxed mb-8">
                                // A hyper-optimized link-in-bio platform for creators who value aesthetics and speed. 
                                Zero bloat. Encryption standard. Instant load times.
                            </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center px-6 py-3 bg-white text-black text-xs font-semibold tracking-wide hover:bg-neutral-200 transition-colors" href="#">
                                    CLAIM YOUR URL
                                    <i className="ml-2 w-3.5 h-3.5" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex items-center justify-center px-6 py-3 border border-neutral-700 text-white text-xs font-semibold tracking-wide hover:bg-neutral-900 transition-colors" href="#">
                                    LIVE DEMO
                                </a>
</div>
</div>
</div>
<div className="mt-20">
<div className="flex items-end gap-2 mb-2">
<span className="text-4xl md:text-6xl font-medium tracking-tighter">IN MILLISECONDS</span>
</div>
<div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
                            // Global Edge Network Latency
                         </div>
</div>
</div>

<div className="lg:col-span-4 relative hidden lg:block">
<div className="absolute inset-0 flex items-center justify-center">

<div className="relative w-[400px] h-[400px] rounded-full border border-neutral-800 flex items-center justify-center">
<div className="absolute inset-0 rounded-full border border-neutral-800 scale-75 opacity-50"></div>
<div className="absolute inset-0 rounded-full border border-neutral-800 scale-50 opacity-30"></div>

<div className="w-24 h-24 bg-white rounded-full blur-[80px] opacity-20"></div>
<div className="relative z-10 w-32 h-32 bg-neutral-900 border border-neutral-700 rounded-2xl rotate-45 flex items-center justify-center overflow-hidden group hover:border-white transition-colors duration-500 shadow-[0_0_50px_rgba(255,255,255,0.05)]">
<div className="w-full h-full bg-[url('https://api.dicebear.com/7.x/shapes/svg?seed=xtrix')] opacity-20 -rotate-45"></div>
<div className="absolute inset-0 flex items-center justify-center -rotate-45">
<div className="w-3 h-3 bg-white rounded-full"></div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 animate-[spin_10s_linear_infinite]">
<div className="absolute top-0 left-1/2 w-1.5 h-1.5 bg-neutral-600 rounded-full -translate-x-1/2 -translate-y-1.5"></div>
</div>
<div className="absolute top-1/2 left-1/2 w-[75%] h-[75%] -translate-x-1/2 -translate-y-1/2 animate-[spin_15s_linear_infinite_reverse]">
<div className="absolute bottom-0 left-1/2 w-1.5 h-1.5 bg-neutral-600 rounded-full -translate-x-1/2 translate-y-1.5"></div>
</div>
</div>
</div>

<div className="absolute bottom-0 right-0 p-4 font-mono text-[9px] text-neutral-600 text-right opacity-60">
<div className="mb-1">const user = await xtrix.auth();</div>
<div className="mb-1">const bio = user.getLinks();</div>
<div className="text-emerald-500">console.log(bio.latency); // 12ms</div>
</div>
</div>
</div>
</div>
</main>

<section className="relative z-10 bg-[#050505]" id="features">
<div className="max-w-[1400px] mx-auto">

<div className="px-6 py-6 border-b border-[#262626] flex justify-between items-center">
<span className="text-[10px] font-mono text-neutral-500">[ 01 / 03 ]</span>
<span className="text-[10px] font-mono text-neutral-500 uppercase">System Capabilities</span>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#262626] border-b border-[#262626]">

<div className="group p-8 md:p-12 hover:bg-neutral-900/30 transition-colors duration-300">
<div className="mb-20">
<i className="w-6 h-6 text-white mb-4" data-lucide="zap"></i>
<h3 className="text-sm font-mono text-neutral-400 mb-2">/ 01</h3>
<h4 className="text-lg font-medium tracking-tight">INSTANT SYNC</h4>
</div>
<p className="text-xs text-neutral-500 leading-relaxed max-w-xs">
                        Changes to your bio propagate globally in under 100ms. No caching delays. Direct edge delivery.
                    </p>
</div>

<div className="group p-8 md:p-12 hover:bg-neutral-900/30 transition-colors duration-300">
<div className="mb-20">
<i className="w-6 h-6 text-white mb-4" data-lucide="shield-check"></i>
<h3 className="text-sm font-mono text-neutral-400 mb-2">/ 02</h3>
<h4 className="text-lg font-medium tracking-tight">MILITARY-GRADE SECURITY</h4>
</div>
<p className="text-xs text-neutral-500 leading-relaxed max-w-xs">
                        Your audience data is encrypted at rest. Zero-knowledge architecture ensures your privacy is absolute.
                    </p>
</div>

<div className="group p-8 md:p-12 hover:bg-neutral-900/30 transition-colors duration-300">
<div className="mb-20">
<i className="w-6 h-6 text-white mb-4" data-lucide="share-2"></i>
<h3 className="text-sm font-mono text-neutral-400 mb-2">/ 03</h3>
<h4 className="text-lg font-medium tracking-tight">API-FIRST DESIGN</h4>
</div>
<p className="text-xs text-neutral-500 leading-relaxed max-w-xs">
                        Connect your bio to any stack. Webhooks for every click. Integrate with your CRM or newsletter instantly.
                    </p>
</div>
</div>
</div>
</section>

<section className="relative z-10 border-b border-[#262626]">
<div className="max-w-[1400px] mx-auto">
<div className="px-6 py-4 border-b border-[#262626] flex justify-between items-center bg-[#0a0a0a]">
<span className="text-[10px] font-mono text-neutral-500">[ 02 / 03 ]</span>
<span className="text-[10px] font-mono text-neutral-500 uppercase">Visual Interface</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">

<div className="p-8 md:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-[#262626]">
<div className="mb-12">
<h2 className="text-3xl md:text-4xl font-medium tracking-tighter mb-6">AUTO-GENERATE<br/><span className="text-neutral-500">AESTHETICS</span></h2>
<p className="text-sm text-neutral-400 leading-relaxed max-w-md">
                            Each profile is unique, complex, and tailored to meet specific branding requirements generated in milliseconds.
                        </p>
</div>

<div className="bg-neutral-900/50 border border-neutral-800 p-6 rounded-sm w-full max-w-sm">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center">
<div className="w-4 h-4 bg-white rounded-full"></div>
</div>
<div>
<div className="text-xs font-medium text-white">Theme Engine</div>
<div className="text-[10px] text-neutral-500">v.4.1.0 Active</div>
</div>
</div>
<i className="w-3 h-3 text-neutral-500" data-lucide="refresh-cw"></i>
</div>
<div className="space-y-4">

<div>
<label className="block text-[10px] font-mono text-neutral-500 mb-1">USER HANDLE</label>
<div className="flex items-center justify-between bg-black border border-neutral-800 px-3 py-2 rounded-sm group focus-within:border-white transition-colors">
<span className="text-xs text-neutral-500">xtrix.fun/</span>
<input className="bg-transparent border-none text-xs text-white focus:outline-none w-full text-right font-mono" readonly="" type="text" value="sarah_des"/>
</div>
</div>

<div>
<div className="flex justify-between mb-1">
<label className="text-[10px] font-mono text-neutral-500">MINIMALISM</label>
<span className="text-[10px] font-mono text-white">94%</span>
</div>
<div className="h-0.5 bg-neutral-800 w-full relative">
<div className="absolute left-0 top-0 h-full bg-white w-[94%]"></div>
<div className="absolute right-[6%] top-1/2 -translate-y-1/2 w-2 h-2 bg-black border border-white rounded-full"></div>
</div>
</div>
<button className="w-full py-2 bg-white text-black text-[10px] font-bold tracking-widest uppercase mt-4 hover:bg-neutral-200 transition-colors">
                                Apply Theme
                            </button>
</div>
</div>
</div>

<div className="relative bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] bg-fixed flex items-center justify-center p-8 overflow-hidden">

<div className="absolute inset-0 ascii-pattern opacity-10"></div>

<div className="relative w-full max-w-md perspective-1000">

<div className="relative bg-black/80 backdrop-blur-xl border border-neutral-700 rounded-xl p-6 shadow-2xl transform rotate-y-12 rotate-x-6 hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700 ease-out">

<div className="flex items-center justify-center mb-6 relative">
<div className="w-20 h-20 rounded-full border border-neutral-600 p-1">
<img alt="User" className="w-full h-full rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=200&amp;h=200&amp;q=80"/>
</div>
<div className="absolute -right-2 top-0">
<i className="w-4 h-4 text-white" data-lucide="sparkles"></i>
</div>
</div>
<div className="text-center mb-8">
<h3 className="text-sm font-medium tracking-tight">Sarah Designer</h3>
<p className="text-[10px] text-neutral-500 font-mono mt-1">Digital Artist &amp; Creative Director</p>
</div>

<div className="space-y-3">
<a className="block bg-neutral-900/50 border border-neutral-800 hover:border-white hover:bg-neutral-800 transition-all p-3 rounded-lg flex items-center justify-between group" href="#">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-neutral-400 group-hover:text-white" data-lucide="image"></i>
<span className="text-xs text-neutral-300 group-hover:text-white">Portfolio 2024</span>
</div>
<i className="w-3 h-3 text-neutral-600 group-hover:text-white opacity-0 group-hover:opacity-100 transition-all" data-lucide="arrow-right"></i>
</a>
<a className="block bg-neutral-900/50 border border-neutral-800 hover:border-white hover:bg-neutral-800 transition-all p-3 rounded-lg flex items-center justify-between group" href="#">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-neutral-400 group-hover:text-white" data-lucide="shopping-bag"></i>
<span className="text-xs text-neutral-300 group-hover:text-white">Merch Store</span>
</div>
<i className="w-3 h-3 text-neutral-600 group-hover:text-white opacity-0 group-hover:opacity-100 transition-all" data-lucide="arrow-right"></i>
</a>
<a className="block bg-neutral-900/50 border border-neutral-800 hover:border-white hover:bg-neutral-800 transition-all p-3 rounded-lg flex items-center justify-between group" href="#">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-neutral-400 group-hover:text-white" data-lucide="youtube"></i>
<span className="text-xs text-neutral-300 group-hover:text-white">Latest Tutorial</span>
</div>
<i className="w-3 h-3 text-neutral-600 group-hover:text-white opacity-0 group-hover:opacity-100 transition-all" data-lucide="arrow-right"></i>
</a>
</div>

<div className="mt-6 pt-4 border-t border-neutral-800 flex justify-between items-center">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-neutral-800 border border-black"></div>
<div className="w-6 h-6 rounded-full bg-neutral-700 border border-black"></div>
<div className="w-6 h-6 rounded-full bg-neutral-600 border border-black flex items-center justify-center text-[8px] text-white font-mono">+2k</div>
</div>
<span className="text-[9px] font-mono text-neutral-500 uppercase">Powered by Xtrix</span>
</div>
</div>

<div className="absolute top-10 -right-12 w-24 h-[1px] bg-neutral-700 rotate-45"></div>
<div className="absolute bottom-10 -left-12 w-24 h-[1px] bg-neutral-700 -rotate-45"></div>
<div className="absolute -top-4 right-0 text-[9px] font-mono text-white opacity-50">KEY FEATURES</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 border-b border-[#262626] bg-[#030303]">
<div className="max-w-[1400px] mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12">

<div className="lg:col-span-5 p-8 md:p-16 flex flex-col justify-center border-r border-[#262626]">
<h2 className="text-3xl font-medium tracking-tight mb-6">DATA WITHOUT<br/>COMPROMISE</h2>
<p className="text-xs text-neutral-500 leading-relaxed mb-8">
                        Share login credentials with team members, family, or contractors without ever exposing the actual passwords. Our analytics engine tracks clicks, geography, and device types in real-time.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<span className="text-xs font-mono text-neutral-600">01 /</span>
<span className="text-xs text-neutral-300">View-only vs. edit permissions per shared item</span>
</li>
<li className="flex items-start gap-3">
<span className="text-xs font-mono text-neutral-600">02 /</span>
<span className="text-xs text-neutral-300">Time-limited sharing with automatic expiration</span>
</li>
<li className="flex items-start gap-3">
<span className="text-xs font-mono text-neutral-600">03 /</span>
<span className="text-xs text-neutral-300">Individual item sharing or bulk folder sharing</span>
</li>
</ul>
<div className="mt-10">
<a className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest border border-neutral-700 px-4 py-2 hover:bg-white hover:text-black transition-all" href="#">
                            Explore Analytics
                            <i className="w-3 h-3" data-lucide="arrow-up-right"></i>
</a>
</div>
</div>

<div className="lg:col-span-7 bg-[linear-gradient(45deg,#050505_25%,transparent_25%,transparent_75%,#050505_75%,#050505),linear-gradient(45deg,#050505_25%,transparent_25%,transparent_75%,#050505_75%,#050505)] bg-[length:20px_20px] bg-[position:0_0,10px_10px] relative overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-black/80"></div>

<div className="relative bg-white text-black p-8 rounded-sm shadow-2xl max-w-sm w-full mx-6">
<div className="flex justify-between items-start mb-6">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">
<i className="w-4 h-4" data-lucide="bar-chart-2"></i>
</div>
<div>
<div className="text-xs font-semibold">Share this report</div>
<div className="text-[10px] text-neutral-500">Manage who has access</div>
</div>
</div>
<button className="text-neutral-400 hover:text-black"><i className="w-4 h-4" data-lucide="x"></i></button>
</div>
<div className="space-y-4">
<div className="flex gap-2 text-[10px] font-medium border-b border-neutral-100 pb-1">
<button className="pb-2 border-b-2 border-black">Share</button>
<button className="pb-2 text-neutral-400">Encrypt</button>
<button className="pb-2 text-neutral-400">Export</button>
</div>
<div className="bg-neutral-50 p-3 rounded border border-neutral-100">
<div className="flex justify-between items-center mb-2">
<span className="text-[10px] font-medium">Direct Link</span>
<span className="text-[9px] text-neutral-400 flex items-center gap-1">Can view <i className="w-2 h-2" data-lucide="chevron-down"></i></span>
</div>
<div className="flex items-center gap-2 bg-white border border-neutral-200 p-2 rounded">
<i className="w-3 h-3 text-neutral-400" data-lucide="link"></i>
<span className="text-[10px] text-neutral-600 truncate">xtrix.fun/analytics/7gk3-x9p2-w2lm</span>
</div>
</div>
<div>
<label className="text-[10px] font-medium mb-1 block">Invite with e-mail</label>
<input className="w-full text-xs p-2 border border-neutral-200 rounded focus:outline-none focus:border-black" placeholder="collab@company.com" type="text"/>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-[#262626] bg-[#050505] py-20">
<div className="max-w-[1400px] mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<h3 className="text-sm font-medium text-neutral-400">TRUSTED BY THE <br/> <span className="text-white">NEXT GENERATION</span></h3>
<span className="text-[10px] font-mono text-neutral-600 uppercase">Trust Factor 99.9%</span>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-px bg-[#262626] border border-[#262626]">
<div className="bg-[#050505] p-8 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity">
<i className="w-6 h-6" data-lucide="framer"></i>
</div>
<div className="bg-[#050505] p-8 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity">
<i className="w-6 h-6" data-lucide="figma"></i>
</div>
<div className="bg-[#050505] p-8 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity">
<i className="w-6 h-6" data-lucide="twitch"></i>
</div>
<div className="bg-[#050505] p-8 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity">
<i className="w-6 h-6" data-lucide="chrome"></i>
</div>
<div className="bg-[#050505] p-8 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity">
<i className="w-6 h-6" data-lucide="github"></i>
</div>
<div className="bg-[#050505] p-8 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity">
<i className="w-6 h-6" data-lucide="slack"></i>
</div>
</div>
<p className="mt-8 text-[10px] text-neutral-600 max-w-md">
                Across industries—from tech and art to finance and education—creators trust Xtrix with their most important link.
            </p>
</div>
</section>

<section className="py-20 relative z-10" id="pricing">
<div className="max-w-[1400px] mx-auto px-6">
<div className="flex justify-between items-end mb-12 border-b border-[#262626] pb-6">
<div>
<span className="text-[10px] font-mono text-neutral-500 block mb-2">[ 03 / 03 ]</span>
<h2 className="text-3xl font-medium tracking-tight">CHOOSE THE <span className="text-neutral-500">PERFECT PLAN</span><br/>FOR YOU</h2>
</div>
<div className="flex items-center gap-3">
<span className="text-[10px] text-neutral-400 uppercase">Monthly</span>
<div className="relative inline-block w-8 h-4 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-4 h-4 rounded-full bg-white border-4 border-[#050505] appearance-none cursor-pointer transition-all duration-300 left-0" id="toggle" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-4 rounded-full bg-neutral-800 cursor-pointer" htmlFor="toggle"></label>
</input></div>
<span className="text-[10px] text-white uppercase">Yearly [ Save 20% ]</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="border border-[#262626] p-8 hover:border-neutral-600 transition-colors flex flex-col justify-between min-h-[400px]">
<div>
<div className="text-[10px] font-mono text-neutral-500 uppercase mb-4">[ FREE PLAN ]</div>
<div className="text-4xl font-medium tracking-tighter mb-1">$0.00<span className="text-lg text-neutral-500 font-normal">/mo</span></div>
<div className="text-[10px] text-neutral-500 mb-8">Up to 3 links included</div>
</div>
<div className="space-y-4">
<div className="text-[10px] text-white font-medium mb-4">01 / Store up to 50 passwords</div>
<ul className="text-[10px] text-neutral-500 space-y-2 font-mono">
<li>02 / Single device access</li>
<li>03 / Basic email support</li>
</ul>
<button className="w-full border border-neutral-700 text-white text-[10px] uppercase tracking-widest py-3 mt-6 hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2">
                            Start Free <i className="w-3 h-3" data-lucide="arrow-up-right"></i>
</button>
</div>
</div>

<div className="border border-white p-8 bg-[#0a0a0a] flex flex-col justify-between min-h-[400px] relative">
<div className="absolute top-0 right-0 bg-white text-black text-[9px] font-bold px-2 py-1 uppercase">Recommended</div>
<div>
<div className="text-[10px] font-mono text-neutral-500 uppercase mb-4">[ PREMIUM PLAN ]</div>
<div className="text-4xl font-medium tracking-tighter mb-1">$4.99<span className="text-lg text-neutral-500 font-normal">/mo</span></div>
<div className="text-[10px] text-neutral-500 mb-8">Unlimited links &amp; analytics</div>
</div>
<div className="space-y-4">
<div className="text-[10px] text-white font-medium mb-4">01 / Unlimited password storage</div>
<ul className="text-[10px] text-neutral-500 space-y-2 font-mono">
<li>02 / Unlimited device access</li>
<li>03 / Priority support</li>
<li>04 / Secure sharing</li>
<li>05 / Dark web monitoring</li>
</ul>
<button className="w-full bg-white text-black text-[10px] uppercase tracking-widest py-3 mt-6 hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2">
                            Choose Premium <i className="w-3 h-3" data-lucide="arrow-up-right"></i>
</button>
</div>
</div>

<div className="border border-[#262626] p-8 hover:border-neutral-600 transition-colors flex flex-col justify-between min-h-[400px]">
<div>
<div className="text-[10px] font-mono text-neutral-500 uppercase mb-4">[ BUSINESS PLAN ]</div>
<div className="text-4xl font-medium tracking-tighter mb-1">$8.99<span className="text-lg text-neutral-500 font-normal">/mo</span></div>
<div className="text-[10px] text-neutral-500 mb-8">All premium features with team benefits</div>
</div>
<div className="space-y-4">
<div className="text-[10px] text-white font-medium mb-4">01 / All Premium features</div>
<ul className="text-[10px] text-neutral-500 space-y-2 font-mono">
<li>02 / Admin dashboard</li>
<li>03 / Team management</li>
<li>04 / Advanced reporting</li>
<li>05 / SSO integrations</li>
</ul>
<button className="w-full border border-neutral-700 text-white text-[10px] uppercase tracking-widest py-3 mt-6 hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2">
                            Contact Sales <i className="w-3 h-3" data-lucide="arrow-up-right"></i>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative border-t border-[#262626] overflow-hidden">
<div className="absolute inset-0 flex justify-center items-center pointer-events-none">
<div className="w-[800px] h-[400px] bg-gradient-to-r from-transparent via-white/5 to-transparent blur-3xl transform -rotate-12"></div>
</div>
<div className="max-w-4xl mx-auto text-center px-6 relative z-10">
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-8">
                START PROTECTING YOUR <br/>
                DIGITAL LIFE TODAY
            </h2>
<div className="flex justify-center gap-4">
<button className="bg-white text-black px-8 py-3 text-xs font-semibold tracking-wide hover:bg-neutral-200 transition-colors flex items-center gap-2">
                    GET STARTED <i className="w-3 h-3" data-lucide="arrow-up-right"></i>
</button>
<button className="border border-neutral-700 text-white px-8 py-3 text-xs font-semibold tracking-wide hover:bg-neutral-900 transition-colors">
                    BOOK A DEMO
                </button>
</div>
</div>

<div className="mt-20 relative h-[200px] overflow-hidden mask-image:linear-gradient(to_bottom,transparent,black)">
<div className="absolute left-1/2 -translate-x-1/2 bottom-[-100px] w-[800px] h-[400px] border border-neutral-800 rounded-[100%] opacity-20 flex items-center justify-center">
<div className="w-[600px] h-[300px] border border-neutral-800 rounded-[100%] opacity-40"></div>
<div className="absolute w-[400px] h-[200px] border border-neutral-800 rounded-[100%] opacity-60"></div>
</div>
<div className="absolute left-1/2 bottom-0 -translate-x-1/2 flex flex-col items-center">
<div className="w-16 h-16 bg-white rounded-full blur-[40px]"></div>
<div className="w-10 h-10 bg-white relative z-10 rounded-full flex items-center justify-center mt-[-40px] shadow-[0_0_20px_white]">
<div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-black"></div>
</div>
</div>
</div>
</section>

<footer className="bg-[#050505] pt-16 pb-8 border-t border-[#262626] text-[10px]">
<div className="max-w-[1400px] mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-20">
<div>
<h4 className="font-mono text-white mb-4 uppercase tracking-wider">/ Quick Links</h4>
<ul className="space-y-2 text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Home page</a></li>
<li><a className="hover:text-white transition-colors" href="#">Download</a></li>
<li><a className="hover:text-white transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-white transition-colors" href="#">How it works</a></li>
<li><a className="hover:text-white transition-colors" href="#">Families</a></li>
<li><a className="hover:text-white transition-colors" href="#">Compare Xtrix</a></li>
</ul>
</div>
<div>
<h4 className="font-mono text-white mb-4 uppercase tracking-wider">/ Social Media</h4>
<ul className="space-y-2 text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Telegram</a></li>
<li><a className="hover:text-white transition-colors" href="#">Discord</a></li>
<li><a className="hover:text-white transition-colors" href="#">X (Twitter)</a></li>
<li><a className="hover:text-white transition-colors" href="#">Instagram</a></li>
</ul>
</div>
<div>
<h4 className="font-mono text-white mb-4 uppercase tracking-wider">/ Resources</h4>
<ul className="space-y-2 text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Support center</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Community</a></li>
<li><a className="hover:text-white transition-colors" href="#">My account</a></li>
</ul>
</div>
<div>
<h4 className="font-mono text-white mb-4 uppercase tracking-wider">/ Trust</h4>
<ul className="space-y-2 text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Trust center</a></li>
<li><a className="hover:text-white transition-colors" href="#">Security</a></li>
<li><a className="hover:text-white transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Legal center</a></li>
<li><a className="hover:text-white transition-colors" href="#">Compliance</a></li>
</ul>
</div>
<div>
<h4 className="font-mono text-white mb-4 uppercase tracking-wider">/ Company</h4>
<ul className="space-y-2 text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">About us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Newsroom</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#262626]">
<div className="flex items-center gap-2 mb-4 md:mb-0">
<div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
<div className="w-1 h-1 bg-black rounded-full"></div>
</div>
</div>
<div className="flex gap-8 text-neutral-600 font-mono">
<a className="hover:text-white transition-colors" href="#">Brand Kit</a>
<a className="hover:text-white transition-colors" href="#">Terms of Use</a>
<a className="hover:text-white transition-colors" href="#">Privacy &amp; Policy</a>
</div>
<div className="text-neutral-600 font-mono mt-4 md:mt-0">
                    © 2024 Xtrix Inc.
                </div>
</div>
</div>
</footer>


    </>
  );
}
