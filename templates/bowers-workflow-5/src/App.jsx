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
      

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-zinc-800/20 via-transparent to-transparent blur-3xl -z-10 rounded-[50%] opacity-40 pointer-events-none"></div>
<div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/10 blur-[100px] -z-10 rounded-full pointer-events-none"></div>
<div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-900/10 blur-[100px] -z-10 rounded-full pointer-events-none"></div>

<nav className="fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-6 h-6 bg-zinc-100 rounded-sm flex items-center justify-center text-black font-semibold text-xs tracking-tighter group-hover:bg-zinc-300 transition-colors">
                    B
                </div>
<span className="text-sm font-semibold tracking-tight text-zinc-100">BOWERS</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-xs text-zinc-400 hover:text-white transition-colors" href="#features">Features</a>
<a className="text-xs text-zinc-400 hover:text-white transition-colors" href="#manifesto">Manifesto</a>
<a className="text-xs text-zinc-400 hover:text-white transition-colors" href="#changelog">Changelog</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-xs text-zinc-400 hover:text-white transition-colors" href="#">
                    Log in
                </a>
<a className="group relative px-4 py-1.5 bg-white text-black text-xs font-medium rounded-full overflow-hidden transition-all hover:bg-zinc-200" href="#">
<span className="relative z-10 flex items-center gap-1">
                        Get Started <iconify-icon icon="lucide:arrow-right" strokeWidth="2" width="12"></iconify-icon>
</span>
</a>
<button className="md:hidden text-zinc-400 hover:text-white">
<iconify-icon icon="lucide:menu" width="20"></iconify-icon>
</button>
</div>
</div>
</nav>

<main className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
<div className="max-w-4xl mx-auto text-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm mb-8 animate-float" style={{animationDuration: '4s'}}>
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
<span className="text-xs text-zinc-400 font-medium tracking-wide">BOWERS 2.0 IS NOW LIVE</span>
</div>

<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-6 text-gradient leading-[1.1]">
                Focus on what <br className="hidden md:block"/> matters most.
            </h1>

<p className="text-lg md:text-xl text-zinc-400 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
                Bowers is the intelligent workspace designed for clarity. 
                Manage projects, notes, and tasks in a unified, distraction-free environment.
            </p>

<div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-20">
<button className="w-full md:w-auto px-8 py-3 bg-white text-black text-sm font-medium rounded-full hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.15)]">
<iconify-icon icon="lucide:download" width="16"></iconify-icon> Download for Mac
                </button>
<button className="w-full md:w-auto px-8 py-3 bg-zinc-900 text-zinc-300 border border-zinc-800 text-sm font-medium rounded-full hover:bg-zinc-800 hover:text-white transition-all flex items-center justify-center gap-2">
                    Open in Browser <span className="bg-zinc-800 text-zinc-500 px-1.5 py-0.5 rounded text-[10px] border border-zinc-700">K</span>
</button>
</div>

<div className="relative w-full max-w-5xl mx-auto mt-12 group perspective-1000">

<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-1000"></div>

<div className="relative bg-[#0A0A0A] border border-zinc-800 rounded-xl shadow-2xl overflow-hidden aspect-[16/10] flex flex-col transform md:rotate-x-12 md:group-hover:rotate-x-0 transition-transform duration-700 ease-out origin-bottom">

<div className="h-10 border-b border-zinc-800 flex items-center px-4 justify-between bg-zinc-900/30">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-zinc-700/50"></div>
<div className="w-3 h-3 rounded-full bg-zinc-700/50"></div>
<div className="w-3 h-3 rounded-full bg-zinc-700/50"></div>
</div>
<div className="flex gap-4">
<div className="w-20 h-2 rounded-full bg-zinc-800"></div>
</div>
</div>

<div className="flex-1 flex overflow-hidden">

<div className="w-64 border-r border-zinc-800 bg-zinc-900/20 p-4 hidden md:flex flex-col gap-4">
<div className="flex items-center gap-2 text-zinc-500 text-xs font-medium uppercase tracking-wider mb-2">Workspace</div>
<div className="flex items-center gap-3 text-zinc-300 text-sm bg-zinc-800/50 px-3 py-2 rounded-md">
<iconify-icon className="text-indigo-400" icon="lucide:inbox"></iconify-icon> Inbox
                            </div>
<div className="flex items-center gap-3 text-zinc-500 text-sm px-3 py-2 hover:bg-zinc-800/30 rounded-md transition-colors cursor-pointer">
<iconify-icon icon="lucide:calendar"></iconify-icon> Today
                            </div>
<div className="flex items-center gap-3 text-zinc-500 text-sm px-3 py-2 hover:bg-zinc-800/30 rounded-md transition-colors cursor-pointer">
<iconify-icon icon="lucide:layers"></iconify-icon> Projects
                            </div>
<div className="mt-auto">
<div className="h-px bg-zinc-800 w-full mb-4"></div>
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-gradient-to-tr from-zinc-700 to-zinc-600"></div>
<div className="w-20 h-2 bg-zinc-800 rounded-full"></div>
</div>
</div>
</div>

<div className="flex-1 p-6 md:p-8 bg-[#0A0A0A]">
<div className="max-w-2xl mx-auto">
<div className="h-8 w-3/4 bg-zinc-800/50 rounded mb-6"></div>
<div className="h-4 w-1/2 bg-zinc-900 rounded mb-12"></div>
<div className="space-y-3">

<div className="flex items-center gap-3 p-3 border border-zinc-800 rounded-lg group/item hover:border-zinc-700 transition-colors">
<div className="w-4 h-4 rounded border border-zinc-600 group-hover/item:border-indigo-500 transition-colors"></div>
<div className="h-2 w-32 bg-zinc-800 rounded"></div>
<div className="ml-auto w-16 h-2 bg-zinc-900 rounded"></div>
</div>

<div className="flex items-center gap-3 p-3 border border-zinc-800 rounded-lg group/item hover:border-zinc-700 transition-colors">
<div className="w-4 h-4 rounded border border-zinc-600 group-hover/item:border-indigo-500 transition-colors"></div>
<div className="h-2 w-48 bg-zinc-800 rounded"></div>
<div className="ml-auto w-12 h-2 bg-zinc-900 rounded"></div>
</div>

<div className="flex items-center gap-3 p-3 border border-zinc-800 rounded-lg group/item hover:border-zinc-700 transition-colors bg-zinc-900/20">
<div className="w-4 h-4 rounded border border-zinc-600 group-hover/item:border-indigo-500 transition-colors flex items-center justify-center">
<iconify-icon className="text-indigo-400" icon="lucide:check" width="10"></iconify-icon>
</div>
<div className="h-2 w-40 bg-zinc-800/50 rounded opacity-50"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="border-y border-zinc-900 bg-zinc-950 py-10 overflow-hidden">
<div className="max-w-6xl mx-auto px-6 text-center">
<p className="text-xs text-zinc-500 font-medium tracking-widest uppercase mb-8">Trusted by builders at</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-40 grayscale mix-blend-screen">

<div className="text-lg font-bold tracking-tighter text-white font-sans flex items-center gap-1"><iconify-icon className="rotate-180" icon="lucide:triangle"></iconify-icon> VERCEL</div>
<div className="text-lg font-bold tracking-tighter text-white font-sans flex items-center gap-1"><iconify-icon icon="lucide:box"></iconify-icon> LOOM</div>
<div className="text-lg font-bold tracking-tighter text-white font-sans flex items-center gap-1"><iconify-icon icon="lucide:zap"></iconify-icon> LINEAR</div>
<div className="text-lg font-bold tracking-tighter text-white font-sans flex items-center gap-1"><iconify-icon icon="lucide:globe"></iconify-icon> STRIPE</div>
<div className="text-lg font-bold tracking-tighter text-white font-sans flex items-center gap-1"><iconify-icon icon="lucide:figma"></iconify-icon> FIGMA</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 bg-black relative" id="features">
<div className="max-w-6xl mx-auto">
<div className="mb-20">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">Designed for flow state.</h2>
<p className="text-zinc-400 text-lg max-w-xl">Every interaction in Bowers is crafted to reduce friction. Experience speed and precision like never before.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">

<div className="md:col-span-2 relative group overflow-hidden rounded-2xl bg-zinc-900/20 border border-zinc-800 hover:border-zinc-600 transition-colors duration-500">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="p-8 h-full flex flex-col justify-between relative z-10">
<div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-4 text-white">
<iconify-icon icon="lucide:command" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">Keyboard First</h3>
<p className="text-zinc-400 text-sm leading-relaxed max-w-sm">Navigate your entire workspace without touching the mouse. Command K to access everything instantly.</p>
</div>
</div>

<div className="absolute top-8 right-8 w-64 h-full bg-zinc-900 border-l border-t border-zinc-800 rounded-tl-xl p-4 opacity-50 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500">
<div className="flex gap-2 mb-3">
<span className="px-2 py-1 bg-zinc-800 rounded text-[10px] text-zinc-400 border border-zinc-700">Cmd</span>
<span className="px-2 py-1 bg-zinc-800 rounded text-[10px] text-zinc-400 border border-zinc-700">K</span>
</div>
<div className="h-2 w-32 bg-zinc-800 rounded mb-2"></div>
<div className="h-2 w-20 bg-zinc-800 rounded"></div>
</div>
</div>

<div className="md:col-span-1 relative group overflow-hidden rounded-2xl bg-zinc-900/20 border border-zinc-800 hover:border-zinc-600 transition-colors duration-500">
<div className="p-8 h-full flex flex-col relative z-10">
<div className="flex-1 flex items-center justify-center mb-4">
<div className="relative w-32 h-32">
<div className="absolute inset-0 border border-zinc-700 rounded-full animate-[spin_10s_linear_infinite]"></div>
<div className="absolute inset-4 border border-zinc-800 rounded-full animate-[spin_8s_linear_infinite_reverse]"></div>
<div className="absolute inset-0 flex items-center justify-center">
<iconify-icon className="text-yellow-500" icon="lucide:zap" width="24"></iconify-icon>
</div>
</div>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">Real-time Sync</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Changes propagate instantly across all your devices.</p>
</div>
</div>
</div>

<div className="md:col-span-1 relative group overflow-hidden rounded-2xl bg-zinc-900/20 border border-zinc-800 hover:border-zinc-600 transition-colors duration-500">
<div className="p-8 h-full flex flex-col justify-end relative z-10">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
<iconify-icon icon="lucide:shield" width="120"></iconify-icon>
</div>
<div>
<div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-4 text-white">
<iconify-icon icon="lucide:lock" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">End-to-End Encrypted</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Your data is yours alone. We can't see it even if we wanted to.</p>
</div>
</div>
</div>

<div className="md:col-span-2 relative group overflow-hidden rounded-2xl bg-zinc-900/20 border border-zinc-800 hover:border-zinc-600 transition-colors duration-500">
<div className="absolute inset-0 bg-gradient-to-bl from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="p-8 h-full flex flex-col md:flex-row items-end md:items-center justify-between relative z-10 gap-8">
<div className="max-w-xs">
<div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-4 text-white">
<iconify-icon icon="lucide:puzzle" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">Extensible API</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Build custom workflows and integrations with our robust Typescript API.</p>
</div>

<div className="w-full md:w-auto bg-[#0F0F0F] border border-zinc-800 rounded-lg p-4 font-mono text-[10px] text-zinc-400 leading-relaxed min-w-[300px] shadow-xl group-hover:scale-[1.02] transition-transform">
<div className="flex gap-1.5 mb-3">
<div className="w-2 h-2 rounded-full bg-red-500/50"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
<div className="w-2 h-2 rounded-full bg-green-500/50"></div>
</div>
<p><span className="text-purple-400">import</span> { Bowers } <span className="text-purple-400">from</span> <span className="text-green-400">'@bowers/sdk'</span>;</p>
<p className="mt-2"><span className="text-blue-400">const</span> client = <span className="text-purple-400">new</span> Bowers({</p>
<p className="pl-4">apiKey: process.env.KEY</p>
<p>});</p>
<p className="mt-2"><span className="text-blue-400">await</span> client.tasks.create({</p>
<p className="pl-4">title: <span className="text-green-400">'Design System'</span>,</p>
<p className="pl-4">priority: <span className="text-orange-400">'high'</span></p>
<p>});</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black z-0"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 blur-[120px] rounded-full z-0"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-8 text-white">Ready to rebuild your workflow?</h2>
<p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto">Join thousands of developers and designers who have switched to Bowers for a cleaner, faster workspace.</p>
<form className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
<input className="bg-zinc-900/50 border border-zinc-800 text-white px-5 py-3 rounded-full outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-zinc-600 text-sm flex-1 backdrop-blur-sm" placeholder="Enter your email" type="email"/>
<button className="bg-white text-black px-6 py-3 rounded-full font-medium text-sm hover:bg-zinc-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)] whitespace-nowrap" type="button">
                    Get Early Access
                </button>
</form>
<p className="mt-4 text-xs text-zinc-600">Free for personal use. No credit card required.</p>
</div>
</section>

<footer className="border-t border-zinc-900 bg-black pt-16 pb-12 px-6">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
<div className="col-span-2 lg:col-span-2">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center text-black font-semibold text-[10px]">B</div>
<span className="text-sm font-semibold tracking-tight text-white">BOWERS</span>
</a>
<p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
                        Designing the future of work tools. Minimal, fast, and powerful. built for the modern creator.
                    </p>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Product</h4>
<ul className="space-y-3">
<li><a className="text-zinc-500 hover:text-white text-sm transition-colors" href="#">Features</a></li>
<li><a className="text-zinc-500 hover:text-white text-sm transition-colors" href="#">Integrations</a></li>
<li><a className="text-zinc-500 hover:text-white text-sm transition-colors" href="#">Changelog</a></li>
<li><a className="text-zinc-500 hover:text-white text-sm transition-colors" href="#">Download</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Company</h4>
<ul className="space-y-3">
<li><a className="text-zinc-500 hover:text-white text-sm transition-colors" href="#">About</a></li>
<li><a className="text-zinc-500 hover:text-white text-sm transition-colors" href="#">Blog</a></li>
<li><a className="text-zinc-500 hover:text-white text-sm transition-colors" href="#">Careers</a></li>
<li><a className="text-zinc-500 hover:text-white text-sm transition-colors" href="#">Manifesto</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Legal</h4>
<ul className="space-y-3">
<li><a className="text-zinc-500 hover:text-white text-sm transition-colors" href="#">Privacy</a></li>
<li><a className="text-zinc-500 hover:text-white text-sm transition-colors" href="#">Terms</a></li>
<li><a className="text-zinc-500 hover:text-white text-sm transition-colors" href="#">Security</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-zinc-900 gap-4">
<p className="text-zinc-600 text-xs">© 2024 Bowers Inc. All rights reserved.</p>
<div className="flex items-center gap-6">
<a className="text-zinc-600 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="16"></iconify-icon></a>
<a className="text-zinc-600 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:github" width="16"></iconify-icon></a>
<a className="text-zinc-600 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:discord" width="16"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
