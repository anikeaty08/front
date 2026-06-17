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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-xl border-b border-white/5 transition-all duration-500">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-xl font-semibold tracking-tighter text-white">NEX</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs text-neutral-400 hover:text-white transition-colors duration-300" href="#pro">Models</a>
<a className="text-xs text-neutral-400 hover:text-white transition-colors duration-300" href="#features">Architecture</a>
<a className="text-xs text-neutral-400 hover:text-white transition-colors duration-300" href="#achu">Achu AI</a>
</div>
<div className="flex items-center gap-4">
<button className="text-neutral-400 hover:text-white transition-colors">
<iconify-icon icon="solar:bag-3-linear" style={{strokeWidth: '1.5', fontSize: '1.25rem'}}></iconify-icon>
</button>
<button className="text-xs font-medium bg-white text-black px-4 py-1.5 rounded-full hover:bg-neutral-200 transition-colors">
                    Pre-order
                </button>
</div>
</div>
</nav>

<section className="relative min-h-[100svh] flex flex-col items-center justify-center pt-20 overflow-hidden perspective-1000">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,_rgba(255,255,255,0.08),_transparent_60%)]"></div>
<div className="z-10 text-center flex flex-col items-center group cursor-default mb-10">
<h1 className="text-6xl md:text-8xl lg:text-[10rem] font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-black drop-shadow-2xl transition-transform duration-1000 group-hover:scale-105">
                NEX PRO
            </h1>
<p className="text-base md:text-xl text-neutral-400 tracking-tight mt-2 opacity-0 animate-[fadeIn_1s_ease-out_0.5s_forwards] max-w-lg mx-auto">
                Forged in titanium. Powered by intelligence.
            </p>
<style>@keyframes fadeIn { to { opacity: 1; } }</style>
</div>

<div className="relative z-20 w-[280px] h-[580px] md:w-[320px] md:h-[650px] transform-style-3d animate-float transition-all duration-700 ease-out hover:scale-110">

<div className="absolute inset-0 rounded-[3.5rem] bg-gradient-to-tr from-neutral-800 via-neutral-900 to-black border-[3px] border-neutral-700 shadow-[0_0_80px_rgba(255,255,255,0.05)_inset,0_30px_60px_rgba(0,0,0,0.8)] p-2 backdrop-blur-sm overflow-hidden flex flex-col relative group">

<div className="flex-1 rounded-[2.8rem] bg-black border border-white/5 relative overflow-hidden group-hover:border-white/10 transition-colors duration-500">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-60 mix-blend-screen scale-110 transition-transform duration-1000 group-hover:scale-100"></div>

<div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full border border-white/10 flex items-center justify-between px-2 z-10">
<div className="w-2 h-2 rounded-full bg-blue-500/50"></div>
<div className="w-3 h-3 rounded-full bg-white/10"></div>
</div>

<div className="absolute bottom-10 left-0 right-0 flex justify-center gap-4 px-6 z-10">
<div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/5 flex items-center justify-center text-white/80 hover:bg-white/20 transition cursor-pointer">
<iconify-icon icon="solar:phone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/5 flex items-center justify-center text-white/80 hover:bg-white/20 transition cursor-pointer">
<iconify-icon icon="solar:camera-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/5 flex items-center justify-center text-white/80 hover:bg-white/20 transition cursor-pointer">
<iconify-icon icon="solar:chat-round-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>

<div className="absolute -left-1 top-20 bottom-20 w-1 bg-gradient-to-b from-transparent via-white/20 to-transparent blur-[1px]"></div>
<div className="absolute -right-1 top-32 bottom-32 w-1 bg-gradient-to-b from-transparent via-white/10 to-transparent blur-[1px]"></div>
</div>
</div>
</section>

<section className="relative py-32 bg-black border-t border-white/5" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter">Masterful engineering.</h2>
<p className="text-lg text-neutral-400 mt-4 max-w-xl">Every micron considered. A seamless blend of aerospace-grade titanium and algorithmic glass.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="group relative h-96 rounded-3xl bg-neutral-900/50 border border-white/5 overflow-hidden flex flex-col justify-end p-8 hover:bg-neutral-900 transition-colors duration-500">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.05),_transparent_50%)] transition-opacity duration-500 opacity-0 group-hover:opacity-100"></div>
<div className="absolute top-8 left-8 text-neutral-500 group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:cpu-linear" style={{fontSize: '2rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
<h3 className="text-2xl font-semibold tracking-tight text-white mb-2">A19 Neural Core</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Unprecedented processing power capable of trillions of operations, rendering reality in real-time.</p>
</div>
</div>

<div className="group relative h-96 rounded-3xl bg-neutral-900/50 border border-white/5 overflow-hidden flex flex-col justify-end p-8 hover:bg-neutral-900 transition-colors duration-500">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(255,255,255,0.05),_transparent_50%)] transition-opacity duration-500 opacity-0 group-hover:opacity-100"></div>
<div className="absolute top-8 left-8 text-neutral-500 group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:camera-minimalistic-linear" style={{fontSize: '2rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
<h3 className="text-2xl font-semibold tracking-tight text-white mb-2">Photonic Array</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Capture the unseen. 100MP quad-sensor system with dynamic light synthesis and deep shadow recovery.</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 bg-neutral-950 overflow-hidden border-y border-white/5" id="achu">

<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">
<div className="flex-1">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium mb-6">
<iconify-icon icon="solar:stars-linear"></iconify-icon>
                    Introducing Achu
                </div>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter mb-6">Intelligence that anticipates.</h2>
<p className="text-base md:text-lg text-neutral-400 max-w-xl mb-8">
                    Not just an assistant, but a co-pilot for your digital life. Achu analyzes context, adapts to your environment, and controls hardware features seamlessly. Ask anything.
                </p>
<div className="flex gap-4">
<button className="px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-colors">
                        See Achu in action
                    </button>
<button className="px-6 py-3 rounded-full border border-white/10 text-white text-sm font-medium hover:bg-white/5 transition-colors">
                        Read architecture
                    </button>
</div>
</div>

<div className="flex-1 w-full max-w-md perspective-1000">
<div className="bg-black/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-2xl transform-style-3d rotate-y-[-5deg] rotate-x-[5deg] hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700">

<div className="flex items-center gap-4 mb-6 pb-4 border-b border-white/5">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 to-blue-600 flex items-center justify-center ai-orb">
<iconify-icon className="text-white" icon="solar:moon-stars-linear"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold tracking-tight text-white">Achu</h3>
<p className="text-xs text-green-400">Online • Context aware</p>
</div>
</div>

<div className="space-y-4 mb-6">
<div className="flex justify-end">
<div className="bg-neutral-800 text-white text-xs px-4 py-2 rounded-2xl rounded-tr-sm max-w-[85%] border border-white/5">
                                Can you show me the camera capabilities in low light?
                            </div>
</div>
<div className="flex justify-start">
<div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 text-neutral-200 text-xs px-4 py-3 rounded-2xl rounded-tl-sm max-w-[90%] border border-white/5 shadow-inner leading-relaxed">
                                Executing Photonic Array demo. <br/><br/>
                                Notice how the A19 core simultaneously captures 14 exposures, merging them to eliminate noise while preserving edge detail in the shadows. <br/><br/>
<span className="inline-flex items-center gap-1 mt-2 text-purple-300 bg-purple-500/10 px-2 py-1 rounded cursor-pointer hover:bg-purple-500/20 transition">
<iconify-icon icon="solar:play-circle-linear"></iconify-icon> View 3D Render
                                </span>
</div>
</div>
</div>

<div className="relative">
<input className="w-full bg-neutral-900 border border-white/10 rounded-full py-3 pl-4 pr-12 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all" placeholder="Ask Achu about NEX Pro..." type="text"/>
<button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-neutral-200 transition-colors">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-black text-center">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter mb-4">Precision, refined.</h2>
<p className="text-sm md:text-base text-neutral-400 max-w-2xl mx-auto mb-16">Interact with the physical toggle to experience haptic feedback simulation.</p>

<div className="flex justify-center items-center gap-12">

<label className="group relative flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-14 h-8 bg-neutral-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-7 after:w-7 after:transition-all peer-checked:bg-white border border-white/10 shadow-inner group-hover:border-white/30 transition-all duration-300"></div>
<span className="ml-3 text-sm font-medium text-neutral-400 group-hover:text-white transition-colors">Adaptive 120Hz</span>

<style>
                    input:checked + div { background-color: #ededed; }
                    input:checked + div:after { background-color: #050505; border-color: #050505; }
                </style>
</label>

<div className="flex flex-col items-start gap-2 w-48">
<div className="flex justify-between w-full text-xs text-neutral-400 font-medium">
<span>Acoustics</span>
<span className="text-white">Max</span>
</div>
<input className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer focus:outline-none [&amp;::-webkit-slider-thumb]:appearance-none [&amp;::-webkit-slider-thumb]:w-4 [&amp;::-webkit-slider-thumb]:h-4 [&amp;::-webkit-slider-thumb]:bg-white [&amp;::-webkit-slider-thumb]:rounded-full [&amp;::-webkit-slider-thumb]:shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all" max="100" min="1" type="range" value="80"/>
</div>
</div>
</section>

<footer className="bg-black border-t border-white/5 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="text-lg font-semibold tracking-tighter text-neutral-500">NEX</span>
</div>
<div className="flex gap-6 text-xs font-medium text-neutral-500">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Environment</a>
</div>
<p className="text-xs text-neutral-600">© 2024 NEX Technologies. All rights reserved.</p>
</div>
</footer>

<div className="fixed bottom-6 right-6 z-50 group">
<button className="w-12 h-12 rounded-full bg-neutral-900/80 backdrop-blur-md border border-white/10 shadow-2xl flex items-center justify-center text-white hover:scale-110 hover:bg-neutral-800 transition-all duration-300">
<iconify-icon icon="solar:magic-stick-3-linear" style={{fontSize: '1.5rem'}}></iconify-icon>
</button>

<div className="absolute right-14 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-black border border-white/10 rounded-lg text-xs font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-xl">
            Ask Achu
        </div>
</div>

    </>
  );
}
