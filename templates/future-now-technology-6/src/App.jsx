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
      

<div className="noise"></div>

<nav className="fixed top-0 left-0 w-full z-40 border-b border-white/5 bg-black/50 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<span className="iconify text-white" data-icon="lucide:aperture" data-strokeWidth="1.5" data-width="20"></span>
<span className="text-sm font-medium tracking-tight text-white group-hover:text-neutral-300 transition-colors">FUTURE</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="#">Methodology</a>
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="#">Integration</a>
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="#">Changelog</a>
</div>
<div className="flex items-center gap-4">
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors hidden sm:block" href="#">Log in</a>
<button className="bg-white text-black text-xs font-medium px-3 py-1.5 rounded-full hover:bg-neutral-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                    Early Access
                </button>
</div>
</div>
</nav>

<main className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/10 blur-[120px] rounded-full -z-10 pointer-events-none"></div>
<div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/5 blur-[100px] rounded-full -z-10 pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 animate-fade-in-up">
<span className="flex h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_5px_rgba(52,211,153,0.5)]"></span>
<span className="text-xs font-medium text-neutral-300 tracking-wide">VERSION 2.0 IS LIVE</span>
</div>

<h1 className="text-5xl sm:text-7xl font-medium tracking-tight mb-6 leading-[1.1]">
<span className="text-gradient block">The future changes</span>
<span className="text-neutral-500">before you notice.</span>
</h1>
<p className="text-lg sm:text-xl text-neutral-400 max-w-xl mx-auto mb-10 leading-relaxed font-light">
                Orchestrate your entire digital workflow with a unified interface designed for the next generation of builders.
            </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="group relative flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium text-sm transition-all hover:scale-[1.02]">
<span>Start Building</span>
<span className="iconify transition-transform group-hover:translate-x-0.5" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="16"></span>
</button>
<button className="flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium text-sm text-neutral-400 hover:text-white transition-colors border border-transparent hover:border-white/10 hover:bg-white/5">
<span className="iconify" data-icon="lucide:terminal" data-strokeWidth="1.5" data-width="16"></span>
<span>Documentation</span>
</button>
</div>
</div>

<div className="mt-20 max-w-5xl mx-auto px-4 sm:px-6 relative">
<div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent z-10 h-full w-full pointer-events-none"></div>
<div className="glass-panel rounded-xl border-t border-white/10 p-1 shadow-2xl shadow-indigo-500/10 transform rotate-x-12 perspective-1000">
<div className="bg-neutral-900/80 rounded-lg p-4 sm:p-8 border border-white/5 aspect-[16/9] relative overflow-hidden flex flex-col">

<div className="flex items-center justify-between mb-8">
<div className="flex gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="h-1.5 w-32 bg-neutral-800 rounded-full"></div>
</div>

<div className="flex-1 flex gap-6">
<div className="w-1/4 space-y-3">
<div className="h-2 w-12 bg-neutral-800 rounded-full"></div>
<div className="h-8 w-full bg-neutral-800/50 rounded border border-white/5 shimmer"></div>
<div className="h-8 w-full bg-neutral-800/50 rounded border border-white/5"></div>
<div className="h-8 w-full bg-neutral-800/50 rounded border border-white/5"></div>
</div>
<div className="flex-1 bg-neutral-950/50 rounded border border-white/5 p-4 relative">

<div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>

<svg className="absolute bottom-4 left-4 right-4 h-32 w-full overflow-visible" preserveaspectratio="none">
<path d="M0,100 C50,90 100,60 150,70 C200,80 250,40 300,50 C350,60 400,20 450,30 C500,40 550,10 600,20 L600,130 L0,130 Z" fill="url(#gradient)" opacity="0.2"></path>
<path d="M0,100 C50,90 100,60 150,70 C200,80 250,40 300,50 C350,60 400,20 450,30 C500,40 550,10 600,20" fill="none" stroke="#818cf8" strokeWidth="2"></path>
<defs>
<lineargradient id="gradient" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#818cf8', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#818cf8', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>
</svg>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="py-24 px-6 relative">
<div className="max-w-6xl mx-auto">
<div className="mb-12">
<h2 className="text-3xl font-medium tracking-tight mb-4 text-white">Engineered for velocity</h2>
<p className="text-neutral-400 max-w-lg">Advanced tools that adapt to your workflow, not the other way around. Experience the difference of native performance.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 glass-panel rounded-2xl p-8 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-30 transition-opacity">
<span className="iconify w-48 h-48 text-indigo-500" data-icon="lucide:zap" data-strokeWidth="1"></span>
</div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="mb-8">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-white">
<span className="iconify" data-icon="lucide:activity" data-width="20"></span>
</div>
<h3 className="text-xl font-medium text-white mb-2">Real-time Synchronization</h3>
<p className="text-neutral-400 text-sm leading-relaxed max-w-sm">Changes propagate instantly across all connected clients. No latency, no conflicts, just pure speed powered by our edge network.</p>
</div>

<div className="mt-4 bg-neutral-900/50 p-4 rounded-xl border border-white/5">
<div className="flex justify-between text-xs text-neutral-500 mb-2 font-mono">
<span>LATENCY</span>
<span className="text-emerald-400">12ms</span>
</div>
<input className="w-full" max="100" min="1" type="range" value="12"/>
</div>
</div>
</div>

<div className="glass-panel rounded-2xl p-8 flex flex-col relative overflow-hidden group">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-white">
<span className="iconify" data-icon="lucide:shield-check" data-width="20"></span>
</div>
<h3 className="text-xl font-medium text-white mb-2">Enterprise Security</h3>
<p className="text-neutral-400 text-sm leading-relaxed mb-8">SOC2 compliant infrastructure with automated auditing.</p>
<div className="mt-auto space-y-3">
<div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
<span className="iconify text-emerald-400" data-icon="lucide:check-circle-2" data-width="16"></span>
<span className="text-xs text-neutral-300">End-to-end Encryption</span>
</div>
<div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
<span className="iconify text-emerald-400" data-icon="lucide:check-circle-2" data-width="16"></span>
<span className="text-xs text-neutral-300">SSO &amp; SAML</span>
</div>
<div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
<span className="iconify text-emerald-400" data-icon="lucide:check-circle-2" data-width="16"></span>
<span className="text-xs text-neutral-300">Audit Logs</span>
</div>
</div>
</div>

<div className="glass-panel rounded-2xl p-8 group">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-white">
<span className="iconify" data-icon="lucide:layers" data-width="20"></span>
</div>
<h3 className="text-xl font-medium text-white mb-2">Modular Architecture</h3>
<p className="text-neutral-400 text-sm leading-relaxed">Compose your infrastructure using pre-built primitives that scale automatically.</p>
</div>

<div className="md:col-span-2 glass-panel rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 group">
<div className="max-w-md">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-white">
<span className="iconify" data-icon="lucide:cpu" data-width="20"></span>
</div>
<h3 className="text-xl font-medium text-white mb-2">Autonomous Scaling</h3>
<p className="text-neutral-400 text-sm leading-relaxed">Resources allocate dynamically based on traffic spikes.</p>
</div>

<div className="bg-neutral-900 rounded-xl p-6 border border-white/5 w-full md:w-auto min-w-[200px]">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-medium text-neutral-400">Autoscale</span>
<div className="relative inline-block w-10 h-6 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-4 h-4 rounded-full bg-white border-4 border-neutral-800 appearance-none cursor-pointer transition-all duration-300 top-1 left-1 checked:bg-white checked:left-5" id="toggle" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-neutral-800 cursor-pointer border border-neutral-700" htmlFor="toggle"></label>
</input></div>
</div>
<div className="space-y-2">
<div className="h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-indigo-500 w-3/4"></div>
</div>
<div className="flex justify-between text-[10px] text-neutral-500 font-mono">
<span>CPU USAGE</span>
<span>78%</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-neutral-900/30">
<div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-8">
<span className="text-sm font-medium text-neutral-500">TRUSTED BY INNOVATORS</span>
<div className="flex gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:hexagon" data-width="24"></span>
<span className="font-bold tracking-tight text-white">ACME</span>
</div>
<div className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:triangle" data-width="24"></span>
<span className="font-bold tracking-tight text-white">VORTEX</span>
</div>
<div className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:circle-dashed" data-width="24"></span>
<span className="font-bold tracking-tight text-white">ORBIT</span>
</div>
<div className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:box" data-width="24"></span>
<span className="font-bold tracking-tight text-white">CUBE</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
<div className="w-full md:w-1/2">
<h2 className="text-3xl font-medium tracking-tight mb-4 text-white">Developers first.</h2>
<p className="text-neutral-400 mb-8 leading-relaxed">
                    Install our CLI and deploy in seconds. No complex configurations, just code. We handle the infrastructure complexities so you can focus on the product.
                </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-white">
<span className="text-[10px] font-mono">1</span>
</div>
<div>
<p className="text-sm font-medium text-white">Global Edge Network</p>
<p className="text-xs text-neutral-500 mt-1">Deploy to 35+ regions instantly.</p>
</div>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-white">
<span className="text-[10px] font-mono">2</span>
</div>
<div>
<p className="text-sm font-medium text-white">Zero-config builds</p>
<p className="text-xs text-neutral-500 mt-1">Automatic framework detection.</p>
</div>
</li>
</ul>
</div>
<div className="w-full md:w-1/2">
<div className="bg-[#0A0A0A] rounded-xl border border-white/10 p-4 font-mono text-sm shadow-2xl relative">
<div className="flex gap-2 mb-4 px-2">
<div className="w-3 h-3 rounded-full bg-neutral-700"></div>
<div className="w-3 h-3 rounded-full bg-neutral-700"></div>
<div className="w-3 h-3 rounded-full bg-neutral-700"></div>
</div>
<div className="px-2 space-y-2">
<div className="flex gap-2">
<span className="text-pink-500">➜</span>
<span className="text-neutral-400">~</span>
<span className="text-white">npm install -g future-cli</span>
</div>
<div className="text-neutral-500 pb-2">
                            added 1 package in 2s
                        </div>
<div className="flex gap-2">
<span className="text-pink-500">➜</span>
<span className="text-neutral-400">~</span>
<span className="text-white">future init</span>
</div>
<div className="text-emerald-400">
                            ✓ Project initialized successfully
                        </div>
<div className="flex gap-2">
<span className="text-pink-500">➜</span>
<span className="text-neutral-400">~</span>
<span className="text-white typing-effect">future deploy_</span>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 pt-16 pb-12 px-6 bg-black">
<div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<span className="iconify text-white" data-icon="lucide:aperture" data-width="20"></span>
<span className="text-sm font-semibold tracking-tight text-white">FUTURE</span>
</div>
<p className="text-xs text-neutral-500 leading-relaxed max-w-xs">
                    Design and code the future of the internet. We provide the primitives for the next generation.
                </p>
</div>
<div>
<h4 className="text-xs font-semibold text-white mb-4 uppercase tracking-wider">Product</h4>
<ul className="space-y-3">
<li><a className="text-xs text-neutral-400 hover:text-white transition-colors" href="#">Infrastructure</a></li>
<li><a className="text-xs text-neutral-400 hover:text-white transition-colors" href="#">Previews</a></li>
<li><a className="text-xs text-neutral-400 hover:text-white transition-colors" href="#">Edge Functions</a></li>
<li><a className="text-xs text-neutral-400 hover:text-white transition-colors" href="#">Analytics</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white mb-4 uppercase tracking-wider">Resources</h4>
<ul className="space-y-3">
<li><a className="text-xs text-neutral-400 hover:text-white transition-colors" href="#">Documentation</a></li>
<li><a className="text-xs text-neutral-400 hover:text-white transition-colors" href="#">Guides</a></li>
<li><a className="text-xs text-neutral-400 hover:text-white transition-colors" href="#">Help Center</a></li>
<li><a className="text-xs text-neutral-400 hover:text-white transition-colors" href="#">API Reference</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white mb-4 uppercase tracking-wider">Legal</h4>
<ul className="space-y-3">
<li><a className="text-xs text-neutral-400 hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-xs text-neutral-400 hover:text-white transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-600">
<p>© 2024 Future Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-neutral-400 transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="16"></span></a>
<a className="hover:text-neutral-400 transition-colors" href="#"><span className="iconify" data-icon="lucide:github" data-width="16"></span></a>
<a className="hover:text-neutral-400 transition-colors" href="#"><span className="iconify" data-icon="lucide:linkedin" data-width="16"></span></a>
</div>
</div>
</footer>

    </>
  );
}
