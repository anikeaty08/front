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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-white font-semibold tracking-tighter text-lg">HERA.</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-light hover:text-white transition-colors duration-300" href="#">Product</a>
<a className="text-sm font-light hover:text-white transition-colors duration-300" href="#">Solutions</a>
<a className="text-sm font-light hover:text-white transition-colors duration-300" href="#">Pricing</a>
<a className="text-sm font-light hover:text-white transition-colors duration-300" href="#">Company</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-light hover:text-white transition-colors" href="#">Log in</a>
<a className="group relative px-4 py-2 text-sm text-white bg-white/10 rounded-full overflow-hidden transition-all hover:bg-white/20" href="#">
<span className="relative z-10 font-medium">Get Access</span>
<div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 bg-gradient-to-r from-indigo-500/20 to-purple-500/20"></div>
</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute inset-0 bg-grid-motion z-0 mask-image-gradient pointer-events-none"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/80 to-[#030303] z-0"></div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-900/20 rounded-full blur-[120px] -z-10 pointer-events-none animate-blob"></div>
<div className="absolute top-20 left-1/3 -translate-x-1/2 w-[800px] h-[300px] bg-purple-900/10 rounded-full blur-[100px] -z-10 pointer-events-none animate-blob-delayed"></div>
<div className="max-w-7xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
<span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse"></span>
<span className="text-xs font-medium tracking-wide text-indigo-300 uppercase">Hera 2.0 is live</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight mb-6 leading-[1.1]">
                Video infrastructure <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40">for the autonomous era.</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
                Transform raw meeting data into actionable intelligence. Hera uses advanced neural networks to record, transcribe, and synthesize video content instantly.
            </p>

<div className="w-full max-w-lg mx-auto mb-12 relative group">
<div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
<div className="relative flex items-center bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl p-1.5 focus-within:border-indigo-500/50 transition-colors shadow-2xl">
<span className="pl-3 pr-2 text-indigo-400">
<span className="iconify animate-pulse" data-icon="lucide:sparkles" data-strokeWidth="1.5" data-width="18"></span>
</span>
<input className="w-full bg-transparent text-white text-sm px-2 py-3 focus:outline-none placeholder:text-slate-600 font-light" placeholder="Generate a highlight reel from last week's all-hands..." type="text"/>
<button className="bg-white/10 hover:bg-white text-white hover:text-black p-2.5 rounded-lg transition-all duration-300 flex-shrink-0 border border-white/5">
<span className="iconify" data-icon="lucide:arrow-right" data-strokeWidth="2" data-width="16"></span>
</button>
</div>
<div className="absolute -bottom-6 left-0 w-full text-center">
<p className="text-[10px] text-slate-600 font-mono tracking-tight">AI model v2.1 • Press Enter to generate</p>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<button className="w-full md:w-auto px-6 py-3 bg-white/5 text-slate-300 border border-white/10 rounded-full text-sm font-medium hover:bg-white/10 hover:text-white transition-colors flex items-center justify-center gap-2">
<span className="iconify" data-icon="lucide:play-circle" data-strokeWidth="1.5" data-width="16"></span>
                    Watch demo
                </button>
</div>

<div className="mt-20 relative mx-auto max-w-5xl perspective-[2000px] group">
<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
<div className="relative bg-black rounded-xl border border-white/10 overflow-hidden shadow-2xl transform rotate-x-12 transition-transform duration-700 hover:rotate-x-0">

<div className="h-10 border-b border-white/5 bg-white/5 flex items-center px-4 gap-2">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-white/10"></div>
<div className="w-3 h-3 rounded-full bg-white/10"></div>
<div className="w-3 h-3 rounded-full bg-white/10"></div>
</div>
<div className="ml-4 w-64 h-4 bg-white/5 rounded-full"></div>
</div>

<div className="p-6 grid grid-cols-12 gap-6 h-[400px]">

<div className="col-span-3 border-r border-white/5 pr-4 flex flex-col gap-3">
<div className="h-8 bg-indigo-500/10 border border-indigo-500/20 rounded-md w-full mb-4"></div>
<div className="h-4 bg-white/5 rounded w-3/4"></div>
<div className="h-4 bg-white/5 rounded w-1/2"></div>
<div className="h-4 bg-white/5 rounded w-5/6"></div>
<div className="mt-auto h-20 bg-gradient-to-t from-indigo-900/10 to-transparent rounded-lg border border-white/5"></div>
</div>

<div className="col-span-9 flex flex-col gap-4">
<div className="flex justify-between items-center mb-2">
<div className="h-6 w-1/3 bg-white/10 rounded"></div>
<div className="flex gap-2">
<div className="h-6 w-6 bg-white/5 rounded"></div>
<div className="h-6 w-6 bg-white/5 rounded"></div>
</div>
</div>

<div className="flex-1 bg-slate-900/50 rounded-lg border border-white/5 relative overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-black to-black"></div>
<span className="iconify text-white/20" data-icon="lucide:activity" data-strokeWidth="1" data-width="48"></span>

<div className="absolute bottom-4 left-4 right-4 h-12 bg-black/60 backdrop-blur rounded-lg border border-white/10 flex items-center px-4 justify-between">
<div className="flex gap-3 text-white/50">
<span className="iconify" data-icon="lucide:mic" data-width="16"></span>
<span className="iconify" data-icon="lucide:video" data-width="16"></span>
</div>
<div className="w-24 h-1 bg-white/20 rounded-full">
<div className="w-1/2 h-full bg-indigo-500 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-white/[0.02]">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium text-slate-500 uppercase tracking-widest mb-8">Trusted by visionary teams</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">

<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-white rounded-sm transform rotate-45"></div>
<span className="font-semibold text-white tracking-tight">ACME</span>
</div>
<div className="flex items-center gap-2">
<div className="w-5 h-5 border-2 border-white rounded-full"></div>
<span className="font-semibold text-white tracking-tight">Orbit</span>
</div>
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-white clip-path-polygon"></div>
<span className="font-semibold text-white tracking-tight">Kinesis</span>
</div>
<div className="flex items-center gap-2">
<div className="flex gap-0.5">
<div className="w-1.5 h-5 bg-white rounded-full"></div>
<div className="w-1.5 h-5 bg-white rounded-full"></div>
</div>
<span className="font-semibold text-white tracking-tight">Dual</span>
</div>
<div className="flex items-center gap-2">
<div className="w-5 h-5 border border-white rounded flex items-center justify-center"><div className="w-2 h-2 bg-white"></div></div>
<span className="font-semibold text-white tracking-tight">Boxed</span>
</div>
</div>
</div>
</section>

<section className="py-32 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4">Everything you need <br/> <span className="text-slate-500">to scale video production.</span></h2>
<p className="text-slate-400 max-w-xl text-lg font-light">Stop manually editing meetings and webinars. Let Hera's engine handle the heavy lifting with precision.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 bg-slate-900/40 border border-white/5 rounded-3xl p-8 hover:border-white/10 transition duration-500 group overflow-hidden relative">
<div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px]"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="mb-8">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 border border-white/5">
<span className="iconify text-white" data-icon="lucide:wand-2" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="text-xl text-white font-medium mb-2">Generative Edits</h3>
<p className="text-slate-400 text-sm leading-relaxed max-w-sm">Automatically remove silences, filler words, and awkward pauses. Hera understands context to keep your message intact.</p>
</div>

<div className="w-full h-32 bg-black/40 rounded-xl border border-white/5 flex items-center justify-center relative overflow-hidden">

<div className="flex items-center gap-1 h-12">
<div className="w-1 h-4 bg-indigo-500 rounded-full animate-pulse"></div>
<div className="w-1 h-8 bg-indigo-500 rounded-full animate-pulse delay-75"></div>
<div className="w-1 h-6 bg-indigo-500 rounded-full animate-pulse delay-100"></div>
<div className="w-1 h-3 bg-slate-700/50 rounded-full"></div> 
<div className="w-1 h-3 bg-slate-700/50 rounded-full"></div> 
<div className="w-1 h-10 bg-indigo-500 rounded-full animate-pulse delay-150"></div>
<div className="w-1 h-5 bg-indigo-500 rounded-full animate-pulse delay-200"></div>
</div>
<div className="absolute bottom-2 text-[10px] text-indigo-400 font-mono">PROCESSING...</div>
</div>
</div>
</div>

<div className="md:row-span-2 bg-slate-900/40 border border-white/5 rounded-3xl p-8 hover:border-white/10 transition duration-500 relative group overflow-hidden">
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-20 grayscale group-hover:grayscale-0 transition duration-700"></div>
<div className="relative z-20 h-full flex flex-col">
<div className="w-10 h-10 rounded-lg bg-black/50 backdrop-blur flex items-center justify-center mb-6 border border-white/10">
<span className="iconify text-white" data-icon="lucide:globe" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="text-xl text-white font-medium mb-2">Global Translation</h3>
<p className="text-slate-400 text-sm leading-relaxed mb-8">Dub videos into 30+ languages with voice cloning technology that preserves the speaker's original tone.</p>
<div className="mt-auto space-y-3">
<div className="flex items-center gap-3 p-3 rounded-lg bg-black/60 backdrop-blur border border-white/5">
<span className="text-xs font-bold text-white bg-indigo-600 px-1.5 py-0.5 rounded">EN</span>
<div className="h-1.5 w-24 bg-white/20 rounded-full overflow-hidden">
<div className="h-full w-full bg-white rounded-full"></div>
</div>
</div>
<div className="flex items-center gap-3 p-3 rounded-lg bg-black/60 backdrop-blur border border-white/5 translate-x-4">
<span className="text-xs font-bold text-white bg-purple-600 px-1.5 py-0.5 rounded">ES</span>
<div className="h-1.5 w-24 bg-white/20 rounded-full overflow-hidden">
<div className="h-full w-2/3 bg-purple-500 rounded-full"></div>
</div>
</div>
<div className="flex items-center gap-3 p-3 rounded-lg bg-black/60 backdrop-blur border border-white/5 translate-x-8">
<span className="text-xs font-bold text-white bg-pink-600 px-1.5 py-0.5 rounded">JP</span>
<div className="h-1.5 w-24 bg-white/20 rounded-full overflow-hidden">
<div className="h-full w-1/3 bg-pink-500 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-slate-900/40 border border-white/5 rounded-3xl p-8 hover:border-white/10 transition duration-500 flex flex-col justify-between">
<div>
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 border border-white/5">
<span className="iconify text-white" data-icon="lucide:search" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="text-xl text-white font-medium mb-2">Deep Search</h3>
<p className="text-slate-400 text-sm leading-relaxed">Find any moment spoken in any video across your library instantly.</p>
</div>
</div>

<div className="bg-slate-900/40 border border-white/5 rounded-3xl p-8 hover:border-white/10 transition duration-500 flex flex-col justify-between">
<div>
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 border border-white/5">
<span className="iconify text-white" data-icon="lucide:share-2" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="text-xl text-white font-medium mb-2">Viral Clips</h3>
<p className="text-slate-400 text-sm leading-relaxed">AI identifies the most engaging moments and crops them for social.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-y border-white/5 bg-gradient-to-b from-black to-slate-900/50">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-2xl font-semibold text-white mb-12">Fine-tune your output</h2>
<div className="bg-black border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">

<div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_rgba(99,102,241,0.1),_transparent_50%)]"></div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

<div className="space-y-8 text-left">

<div>
<div className="flex justify-between mb-3">
<label className="text-sm font-medium text-white">Edit Aggressiveness</label>
<span className="text-xs text-indigo-400 font-mono">HIGH</span>
</div>
<input className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer" max="100" min="1" type="range" value="75"/>
</div>

<div className="flex items-center justify-between p-4 rounded-lg border border-white/5 bg-white/5">
<span className="text-sm text-slate-300">Remove Filler Words</span>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-slate-700 checked:border-indigo-500 transition-all duration-300 left-0 checked:left-auto checked:right-0" id="toggle" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-slate-700 cursor-pointer" htmlFor="toggle"></label>
</input></div>
</div>

<div className="space-y-3">
<label className="flex items-center space-x-3 cursor-pointer group">
<div className="w-5 h-5 border border-slate-600 rounded flex items-center justify-center group-hover:border-indigo-500 transition-colors bg-black">
<span className="iconify text-indigo-500 opacity-100" data-icon="lucide:check" data-width="14"></span>
</div>
<span className="text-sm text-slate-400 group-hover:text-white transition-colors">Enhance Audio Clarity</span>
</label>
<label className="flex items-center space-x-3 cursor-pointer group">
<div className="w-5 h-5 border border-slate-600 rounded flex items-center justify-center group-hover:border-indigo-500 transition-colors bg-black">
<span className="iconify text-indigo-500 opacity-0 group-hover:opacity-50" data-icon="lucide:check" data-width="14"></span>
</div>
<span className="text-sm text-slate-400 group-hover:text-white transition-colors">Auto-generate Chapters</span>
</label>
</div>
</div>

<div className="relative">
<div className="bg-slate-900 border border-white/10 rounded-xl p-6 relative z-10">
<div className="flex items-center gap-3 mb-4">
<div className="h-8 w-8 rounded-full bg-indigo-500 flex items-center justify-center text-white text-xs font-bold">AI</div>
<div className="text-left">
<div className="h-2 w-20 bg-white/20 rounded mb-1"></div>
<div className="h-2 w-12 bg-white/10 rounded"></div>
</div>
</div>
<div className="space-y-2">
<div className="h-2 w-full bg-white/5 rounded"></div>
<div className="h-2 w-5/6 bg-white/5 rounded"></div>
<div className="h-2 w-4/6 bg-white/5 rounded"></div>
</div>
<div className="mt-4 flex gap-2">
<div className="px-2 py-1 rounded bg-indigo-500/20 text-indigo-300 text-[10px] border border-indigo-500/20">#Summary</div>
<div className="px-2 py-1 rounded bg-green-500/20 text-green-300 text-[10px] border border-green-500/20">#ActionItems</div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-indigo-500/30 rounded-full blur-3xl -z-0"></div>
</div>
</div>
</div>
</div>
</section>

<footer className="pt-20 pb-10 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-6 gap-10 mb-20">
<div className="col-span-2">
<span className="text-white font-semibold tracking-tighter text-lg block mb-6">HERA.</span>
<p className="text-slate-500 text-sm mb-6 max-w-xs">
                    Pioneering the next generation of video intelligence infrastructure for modern teams.
                </p>
<div className="flex gap-4">
<a className="text-slate-500 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="18"></span></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:github" data-width="18"></span></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:linkedin" data-width="18"></span></a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Product</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-indigo-400 transition-colors" href="#">Features</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Company</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-indigo-400 transition-colors" href="#">About</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Legal</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-indigo-400 transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Terms</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5">
<p className="text-slate-600 text-xs">© 2024 Hera Inc. All rights reserved.</p>
<div className="flex items-center gap-2 text-slate-600 text-xs">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
                System Operational
            </div>
</div>
</footer>

    </>
  );
}
