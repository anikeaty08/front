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
      

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-900/20 blur-[120px] rounded-full pointer-events-none z-0"></div>
<div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-blue-900/10 blur-[100px] rounded-full pointer-events-none z-0"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#08090A]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-white font-medium tracking-tight text-lg flex items-center gap-2" href="#">
<span className="iconify text-indigo-500" data-icon="lucide:box" data-width="20"></span>
                    DIMENSION
                </a>
<div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors duration-200" href="#features">Features</a>
<a className="hover:text-white transition-colors duration-200" href="#demo">Engine</a>
<a className="hover:text-white transition-colors duration-200" href="#pricing">Enterprise</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors hidden sm:block" href="#">Log in</a>
<a className="text-xs font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-slate-200 transition-colors" href="#">Get Started</a>
</div>
</div>
</nav>

<main className="relative z-10 pt-32 pb-20">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-indigo-300 mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                    Now supporting WebGL export
                </div>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight leading-[1.1] mb-6">
                    Static PDFs turned <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-white">Spatial Experiences.</span>
</h1>
<p className="text-lg text-slate-400 mb-8 font-light leading-relaxed max-w-lg">
                    Transform flat documents into interactive 3D models. Analyze architectural plans, CAD exports, and product manuals in a fully immersive web environment.
                </p>
<div className="flex flex-wrap items-center gap-4">
<button className="h-10 px-6 rounded-full bg-white text-[#08090A] text-sm font-medium hover:bg-slate-200 transition-all flex items-center gap-2">
                        Start Converting
                        <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
<button className="h-10 px-6 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-all flex items-center gap-2">
<span className="iconify" data-icon="lucide:play-circle" data-width="16"></span>
                        View Demo
                    </button>
</div>
<div className="mt-12 flex items-center gap-6 text-slate-500">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-slate-800 border border-[#08090A] flex items-center justify-center text-xs text-white">JD</div>
<div className="w-8 h-8 rounded-full bg-slate-700 border border-[#08090A] flex items-center justify-center text-xs text-white">AS</div>
<div className="w-8 h-8 rounded-full bg-slate-600 border border-[#08090A] flex items-center justify-center text-xs text-white">MK</div>
</div>
<p className="text-xs font-medium">Used by 4,000+ engineers</p>
</div>
</div>

<div className="relative perspective-1000 group select-none hidden lg:block">

<div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-transparent blur-3xl -z-10"></div>

<div className="rotate-x-12 transition-transform duration-700 ease-out group-hover:rotate-x-0 transform-style-3d">

<div className="w-full aspect-[4/3] bg-[#0F1012] border border-white/10 rounded-xl shadow-2xl overflow-hidden flex flex-col relative">

<div className="h-10 border-b border-white/5 flex items-center justify-between px-4 bg-[#141517]">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="text-[10px] text-slate-500 font-mono">blueprint_v2.pdf</div>
</div>

<div className="flex-1 flex relative">

<div className="w-16 border-r border-white/5 flex flex-col items-center py-4 gap-4">
<button className="p-2 rounded hover:bg-white/5 text-indigo-400"><span className="iconify" data-icon="lucide:layers" data-width="18"></span></button>
<button className="p-2 rounded hover:bg-white/5 text-slate-500"><span className="iconify" data-icon="lucide:box-select" data-width="18"></span></button>
<button className="p-2 rounded hover:bg-white/5 text-slate-500"><span className="iconify" data-icon="lucide:ruler" data-width="18"></span></button>
</div>

<div className="flex-1 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-opacity-5 relative flex items-center justify-center">

<div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '20px 20px'}}></div>

<div className="relative w-40 h-40 border border-indigo-500/30 bg-indigo-500/5 rounded-lg flex items-center justify-center backdrop-blur-sm shadow-[0_0_30px_rgba(99,102,241,0.1)]">
<div className="absolute -top-4 -right-4 bg-[#141517] border border-white/10 px-2 py-1 rounded text-[10px] text-indigo-300 flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                                        Z: 14.2mm
                                    </div>
<span className="iconify text-indigo-500/50" data-icon="lucide:cuboid" data-width="64"></span>
</div>
</div>

<div className="w-48 bg-[#0F1012] border-l border-white/5 p-4 flex flex-col gap-4">
<div className="space-y-2">
<div className="text-[10px] uppercase tracking-wider text-slate-600 font-semibold">Render Settings</div>
<div className="flex items-center justify-between">
<span className="text-xs text-slate-400">Wireframe</span>

<div className="relative inline-block w-8 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-4 h-4 rounded-full bg-white border-4 appearance-none cursor-pointer border-[#222] left-0 top-0 transition-all duration-200 ease-in-out" id="toggle" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-4 rounded-full bg-[#222] cursor-pointer border border-white/5" htmlFor="toggle"></label>
</div>
</div>
<div className="flex items-center justify-between">
<span className="text-xs text-slate-400">Ambient</span>
<div className="w-8 h-1 bg-[#222] rounded-full overflow-hidden">
<div className="w-2/3 h-full bg-indigo-500"></div>
</div>
</div>
</div>
<div className="space-y-2 pt-2 border-t border-white/5">
<div className="text-[10px] uppercase tracking-wider text-slate-600 font-semibold">Layers</div>
<div className="flex items-center gap-2 text-xs text-slate-300 bg-white/5 p-1.5 rounded border border-white/5">
<span className="iconify" data-icon="lucide:eye" data-width="12"></span>
                                        Base Structure
                                    </div>
<div className="flex items-center gap-2 text-xs text-slate-500 p-1.5">
<span className="iconify" data-icon="lucide:eye-off" data-width="12"></span>
                                        Plumbing
                                    </div>
</div>
</div>
</div>
</div>

<div className="absolute -right-6 top-10 glass px-4 py-2 rounded-lg flex items-center gap-3 shadow-xl translate-z-10">
<div className="bg-green-500/10 p-1.5 rounded text-green-400">
<span className="iconify" data-icon="lucide:check" data-width="14"></span>
</div>
<div>
<div className="text-xs font-medium text-white">Mesh Generated</div>
<div className="text-[10px] text-slate-400">1.2s processing time</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="py-24 border-t border-white/5 bg-[#08090A]" id="demo">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight mb-4">Upload your Document</h2>
<p className="text-sm text-slate-400 mb-10">Supports PDF, DWG, and DXF files up to 50MB.</p>
<div className="relative group">
<div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl opacity-20 group-hover:opacity-40 transition duration-500 blur"></div>
<div className="relative bg-[#0B0C0E] border border-dashed border-slate-700 rounded-xl p-16 flex flex-col items-center justify-center transition-all duration-300 group-hover:border-indigo-500/50">
<div className="w-16 h-16 rounded-2xl bg-[#141517] flex items-center justify-center mb-6 shadow-inner border border-white/5 group-hover:scale-110 transition-transform duration-300">
<span className="iconify text-slate-400 group-hover:text-indigo-400 transition-colors" data-icon="lucide:upload-cloud" data-width="32"></span>
</div>
<p className="text-white font-medium mb-2">Click to upload or drag and drop</p>
<p className="text-xs text-slate-500 mb-6">PDF (Standard or layered)</p>
<button className="text-xs bg-white/5 hover:bg-white/10 border border-white/10 text-white px-4 py-2 rounded-md transition-colors">
                        Select File
                    </button>
</div>
</div>
<div className="grid grid-cols-3 gap-4 mt-8 text-left">
<div className="glass p-4 rounded-lg">
<span className="iconify text-indigo-400 mb-2" data-icon="lucide:zap" data-width="20"></span>
<h3 className="text-sm font-medium text-white">Instant Render</h3>
<p className="text-xs text-slate-500 mt-1">Client-side WebAssembly parsing.</p>
</div>
<div className="glass p-4 rounded-lg">
<span className="iconify text-purple-400 mb-2" data-icon="lucide:shield-check" data-width="20"></span>
<h3 className="text-sm font-medium text-white">Secure</h3>
<p className="text-xs text-slate-500 mt-1">Files never leave your browser.</p>
</div>
<div className="glass p-4 rounded-lg">
<span className="iconify text-blue-400 mb-2" data-icon="lucide:share-2" data-width="20"></span>
<h3 className="text-sm font-medium text-white">Collaborate</h3>
<p className="text-xs text-slate-500 mt-1">Share view-only links easily.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto" id="features">
<div className="mb-12">
<h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight">The engine under the hood.</h2>
<p className="text-sm text-slate-400 mt-2">Built for precision and performance.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[200px]">

<div className="glass-hover glass rounded-xl p-6 md:col-span-2 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
<span className="iconify text-white" data-icon="lucide:cpu" data-width="64"></span>
</div>
<div className="relative z-10 h-full flex flex-col justify-end">
<h3 className="text-lg font-medium text-white mb-2">Ray-Tracing Capable</h3>
<p className="text-sm text-slate-400 max-w-sm">Utilizing WebGPU for real-time ray tracing on supported devices, delivering photorealistic shadows and reflections on your PDF models.</p>
</div>
</div>

<div className="glass-hover glass rounded-xl p-6 relative group">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#08090A]/80 z-0"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
<span className="iconify text-indigo-400" data-icon="lucide:glasses" data-width="20"></span>
</div>
<div>
<h3 className="text-lg font-medium text-white mb-1">VR Ready</h3>
<p className="text-xs text-slate-400">WebXR standard compliant.</p>
</div>
</div>
</div>

<div className="glass-hover glass rounded-xl p-6 relative overflow-hidden">
<div className="absolute -right-4 -bottom-4 w-24 h-24 bg-purple-500/20 blur-2xl rounded-full"></div>
<div className="h-full flex flex-col justify-between relative z-10">
<div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
<span className="iconify text-purple-400" data-icon="lucide:component" data-width="20"></span>
</div>
<div>
<h3 className="text-lg font-medium text-white mb-1">Component Extraction</h3>
<p className="text-xs text-slate-400">Isolate layers automatically.</p>
</div>
</div>
</div>

<div className="glass-hover glass rounded-xl p-6 md:col-span-2 relative overflow-hidden">

<div className="absolute top-6 right-6 w-1/2 h-full bg-[#141517] border border-white/5 rounded-tl-lg p-3 opacity-50">
<div className="space-y-2">
<div className="h-2 w-1/2 bg-white/10 rounded"></div>
<div className="h-2 w-3/4 bg-white/5 rounded"></div>
<div className="h-2 w-1/4 bg-white/5 rounded"></div>
</div>
</div>
<div className="relative z-10 h-full flex flex-col justify-end">
<h3 className="text-lg font-medium text-white mb-2">Metadata Parsing</h3>
<p className="text-sm text-slate-400 max-w-sm">Automatically extract dimensions, materials, and annotations from the PDF binary data and map them to 3D coordinates.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5" id="pricing">
<div className="max-w-5xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-12">
<div>
<h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight">Scale with Dimension</h2>
<p className="text-sm text-slate-400 mt-2">Simple pricing for complex geometry.</p>
</div>

<div className="bg-[#141517] p-1 rounded-lg border border-white/5 flex text-xs font-medium">
<button className="px-4 py-1.5 bg-white text-black rounded shadow-sm">Monthly</button>
<button className="px-4 py-1.5 text-slate-400 hover:text-white transition-colors">Yearly</button>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="p-6 rounded-xl border border-white/5 bg-[#0B0C0E] flex flex-col">
<div className="mb-4">
<span className="text-sm font-medium text-slate-400">Starter</span>
<div className="mt-2 flex items-baseline gap-1">
<span className="text-3xl font-medium text-white">$0</span>
<span className="text-xs text-slate-500">/mo</span>
</div>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="text-xs text-slate-300 flex items-center gap-2"><span className="iconify text-slate-500" data-icon="lucide:check"></span> 3 Uploads / month</li>
<li className="text-xs text-slate-300 flex items-center gap-2"><span className="iconify text-slate-500" data-icon="lucide:check"></span> Standard Rendering</li>
<li className="text-xs text-slate-300 flex items-center gap-2"><span className="iconify text-slate-500" data-icon="lucide:check"></span> Web Viewer</li>
</ul>
<button className="w-full py-2 rounded-lg border border-white/10 text-white text-xs font-medium hover:bg-white/5 transition-colors">Get Started</button>
</div>

<div className="p-6 rounded-xl border border-indigo-500/30 bg-[#0B0C0E] relative overflow-hidden flex flex-col">
<div className="absolute top-0 inset-x-0 h-1 bg-indigo-500"></div>
<div className="mb-4">
<span className="text-sm font-medium text-indigo-400">Professional</span>
<div className="mt-2 flex items-baseline gap-1">
<span className="text-3xl font-medium text-white">$29</span>
<span className="text-xs text-slate-500">/mo</span>
</div>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="text-xs text-white flex items-center gap-2"><span className="iconify text-indigo-400" data-icon="lucide:check"></span> Unlimited Uploads</li>
<li className="text-xs text-white flex items-center gap-2"><span className="iconify text-indigo-400" data-icon="lucide:check"></span> High-Poly Mesh Export</li>
<li className="text-xs text-white flex items-center gap-2"><span className="iconify text-indigo-400" data-icon="lucide:check"></span> Collaboration Tools</li>
<li className="text-xs text-white flex items-center gap-2"><span className="iconify text-indigo-400" data-icon="lucide:check"></span> API Access</li>
</ul>
<button className="w-full py-2 rounded-lg bg-indigo-600 text-white text-xs font-medium hover:bg-indigo-500 transition-colors shadow-[0_0_20px_rgba(79,70,229,0.3)]">Upgrade Now</button>
</div>

<div className="p-6 rounded-xl border border-white/5 bg-[#0B0C0E] flex flex-col">
<div className="mb-4">
<span className="text-sm font-medium text-slate-400">Enterprise</span>
<div className="mt-2 flex items-baseline gap-1">
<span className="text-3xl font-medium text-white">Custom</span>
</div>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="text-xs text-slate-300 flex items-center gap-2"><span className="iconify text-slate-500" data-icon="lucide:check"></span> On-premise Deployment</li>
<li className="text-xs text-slate-300 flex items-center gap-2"><span className="iconify text-slate-500" data-icon="lucide:check"></span> SSO / SAML</li>
<li className="text-xs text-slate-300 flex items-center gap-2"><span className="iconify text-slate-500" data-icon="lucide:check"></span> Dedicated Support</li>
</ul>
<button className="w-full py-2 rounded-lg border border-white/10 text-white text-xs font-medium hover:bg-white/5 transition-colors">Contact Sales</button>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#050607] pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<a className="text-white font-medium tracking-tight flex items-center gap-2 mb-4" href="#">
<span className="iconify text-indigo-500" data-icon="lucide:box" data-width="18"></span>
                        DIMENSION
                    </a>
<p className="text-xs text-slate-500 leading-relaxed">
                        Redefining how we interact with portable document formats through spatial computing.
                    </p>
</div>
<div>
<h4 className="text-xs font-medium text-white mb-4">Product</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-slate-300" href="#">Engine</a></li>
<li><a className="hover:text-slate-300" href="#">API</a></li>
<li><a className="hover:text-slate-300" href="#">Pricing</a></li>
<li><a className="hover:text-slate-300" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-white mb-4">Resources</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-slate-300" href="#">Documentation</a></li>
<li><a className="hover:text-slate-300" href="#">Community</a></li>
<li><a className="hover:text-slate-300" href="#">Help Center</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-white mb-4">Legal</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-slate-300" href="#">Privacy</a></li>
<li><a className="hover:text-slate-300" href="#">Terms</a></li>
<li><a className="hover:text-slate-300" href="#">Security</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-slate-600">© 2024 Dimension Inc. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-slate-600 hover:text-white" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="14"></span></a>
<a className="text-slate-600 hover:text-white" href="#"><span className="iconify" data-icon="lucide:github" data-width="14"></span></a>
<a className="text-slate-600 hover:text-white" href="#"><span className="iconify" data-icon="lucide:linkedin" data-width="14"></span></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
