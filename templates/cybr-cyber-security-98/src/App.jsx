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
      

<nav className="border-b border-neutral-800/60 bg-[#0a0a0a]/80 backdrop-blur-md sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<div className="font-semibold tracking-tighter text-lg flex items-center gap-2">
<iconify-icon height="24" icon="solar:shield-keyhole-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
                CYBR.
            </div>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors duration-200" href="#">Platform</a>
<a className="hover:text-white transition-colors duration-200" href="#">Intelligence</a>
<a className="hover:text-white transition-colors duration-200" href="#">Developers</a>
<a className="hover:text-white transition-colors duration-200" href="#">Pricing</a>
</div>

<div className="flex items-center gap-5 text-sm">
<a className="hidden md:block font-medium text-neutral-400 hover:text-white transition-colors duration-200" href="#">Log in</a>
<a className="bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-neutral-200 transition-colors duration-200" href="#">
                    Get Started
                </a>
</div>
</div>
</nav>

<main className="flex-grow flex flex-col items-center justify-start relative overflow-hidden pt-20 pb-32">

<div className="absolute inset-0 z-0 pointer-events-none" style={{backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)', backgroundSize: '48px 48px', maskImage: 'linear-gradient(to bottom, white 20%, transparent 80%)', WebkitMaskImage: 'linear-gradient(to bottom, white 20%, transparent 80%)'}}></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-96 bg-indigo-500/15 blur-[120px] rounded-full pointer-events-none z-0"></div>

<div className="max-w-4xl mx-auto px-6 text-center relative z-10 flex flex-col items-center mt-10">

<a className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-800 bg-neutral-900/40 backdrop-blur-sm text-xs font-medium text-neutral-300 mb-8 hover:bg-neutral-800/60 transition-colors cursor-pointer" href="#">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                Active threat intelligence network online
                <iconify-icon className="text-neutral-500" height="14" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
</a>

<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-neutral-500 mb-6 leading-[1.1]">
                Zero-trust security <br className="hidden md:block"/> for the modern edge.
            </h1>

<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto font-medium mb-10 leading-relaxed">
                Protect your infrastructure, endpoints, and applications with enterprise-grade threat detection, real-time analytics, and automated response protocols.
            </p>

<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-500 transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(79,70,229,0.2)] hover:shadow-[0_0_40px_rgba(79,70,229,0.4)]" href="#">
                    Start Free Trial
                </a>
<a className="w-full sm:w-auto px-6 py-3 rounded-lg border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-800 text-neutral-300 font-medium transition-colors duration-200 flex items-center justify-center gap-2 backdrop-blur-sm" href="#">
<iconify-icon height="20" icon="solar:code-square-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
                    Read Documentation
                </a>
</div>
</div>

<div className="w-full max-w-5xl mx-auto mt-20 px-6 relative z-10" style={{perspective: '1200px'}}>
<div className="rounded-xl border border-neutral-800/80 bg-[#0c0c0c]/90 backdrop-blur-xl shadow-2xl overflow-hidden ring-1 ring-white/5 transform-gpu rotate-x-[4deg] scale-95 origin-top transition-all duration-700 hover:rotate-x-0 hover:scale-100">

<div className="h-12 border-b border-neutral-800/80 flex items-center px-4 justify-between bg-neutral-950/50">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-neutral-700"></div>
<div className="w-3 h-3 rounded-full bg-neutral-700"></div>
<div className="w-3 h-3 rounded-full bg-neutral-700"></div>
</div>
<div className="flex items-center gap-2 text-xs text-neutral-500 bg-neutral-900/50 px-3 py-1.5 rounded-md border border-neutral-800/50" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
<iconify-icon height="14" icon="solar:lock-keyhole-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
                        console.cybr.io/metrics
                    </div>
<div className="w-10"></div> 
</div>

<div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="col-span-1 md:col-span-2 border border-neutral-800/50 rounded-lg bg-neutral-900/30 p-5">
<div className="flex items-center justify-between mb-6">
<h3 className="text-sm font-medium text-neutral-200 flex items-center gap-2">
<iconify-icon className="text-indigo-400" height="18" icon="solar:radar-linear" width="18"></iconify-icon>
                                Network Anomalies
                            </h3>
<div className="flex items-center gap-3">
<span className="flex items-center gap-1.5 text-xs font-medium text-neutral-400">
<span className="w-2 h-2 rounded-full bg-indigo-500"></span> Detected
                                </span>
<span className="flex items-center gap-1.5 text-xs font-medium text-neutral-400">
<span className="w-2 h-2 rounded-full bg-neutral-600"></span> Baseline
                                </span>
</div>
</div>

<div className="h-32 flex items-end gap-1.5 pt-4 border-b border-neutral-800/50">

<div className="w-full bg-neutral-800 rounded-t-sm h-[20%] relative"><div className="absolute bottom-0 w-full bg-indigo-500/40 h-[40%] rounded-t-sm"></div></div>
<div className="w-full bg-neutral-800 rounded-t-sm h-[35%] relative"><div className="absolute bottom-0 w-full bg-indigo-500/60 h-[60%] rounded-t-sm"></div></div>
<div className="w-full bg-neutral-800 rounded-t-sm h-[25%] relative"><div className="absolute bottom-0 w-full bg-indigo-500/30 h-[20%] rounded-t-sm"></div></div>
<div className="w-full bg-neutral-800 rounded-t-sm h-[40%] relative"><div className="absolute bottom-0 w-full bg-indigo-500/50 h-[45%] rounded-t-sm"></div></div>
<div className="w-full bg-neutral-800 rounded-t-sm h-[85%] relative"><div className="absolute bottom-0 w-full bg-indigo-500 h-[90%] rounded-t-sm shadow-[0_0_10px_rgba(79,70,229,0.5)]"></div></div>
<div className="w-full bg-neutral-800 rounded-t-sm h-[45%] relative"><div className="absolute bottom-0 w-full bg-indigo-500/40 h-[30%] rounded-t-sm"></div></div>
<div className="w-full bg-neutral-800 rounded-t-sm h-[30%] relative"><div className="absolute bottom-0 w-full bg-indigo-500/20 h-[15%] rounded-t-sm"></div></div>
<div className="w-full bg-neutral-800 rounded-t-sm h-[20%] relative"><div className="absolute bottom-0 w-full bg-indigo-500/30 h-[25%] rounded-t-sm"></div></div>
</div>
<div className="flex justify-between mt-3 text-xs text-neutral-500" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
<span>14:00</span>
<span>14:30</span>
<span>15:00</span>
<span>Now</span>
</div>
</div>

<div className="col-span-1 border border-neutral-800/50 rounded-lg bg-neutral-900/30 p-5 flex flex-col">
<h3 className="text-sm font-medium text-neutral-200 flex items-center gap-2 mb-4">
<iconify-icon className="text-amber-400" height="18" icon="solar:shield-warning-linear" width="18"></iconify-icon>
                            Blocked Requests
                        </h3>
<div className="flex-grow flex flex-col justify-center">
<div className="text-5xl font-semibold tracking-tighter text-white mb-2">24.8k</div>
<div className="text-sm text-emerald-400 flex items-center gap-1.5 font-medium bg-emerald-400/10 w-max px-2 py-1 rounded-md">
<iconify-icon height="16" icon="solar:chart-down-linear" width="16"></iconify-icon>
                                12.5% vs last hour
                            </div>
</div>
</div>

<div className="col-span-1 md:col-span-3 border border-neutral-800/50 rounded-lg bg-[#050505] p-4 text-xs overflow-hidden relative" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
<div className="absolute right-4 top-4 flex items-center gap-2">
<span className="flex h-1.5 w-1.5 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
</span>
<span className="text-neutral-500 text-[10px] uppercase tracking-widest">Live Stream</span>
</div>
<div className="text-neutral-600 mb-2"># Edge node routing logs</div>
<div className="space-y-1.5">
<div className="flex gap-4 text-neutral-400">
<span className="text-neutral-600 shrink-0">15:42:01.092</span>
<span className="text-indigo-400 shrink-0">[AUTH]</span>
<span className="truncate">Validating JWT signature for user_id: req_8f72k9x...</span>
</div>
<div className="flex gap-4 text-neutral-400">
<span className="text-neutral-600 shrink-0">15:42:01.104</span>
<span className="text-emerald-400 shrink-0">[PASS]</span>
<span className="truncate text-neutral-300">Signature valid. Applying policy 'strict_cors'.</span>
</div>
<div className="flex gap-4 text-neutral-400">
<span className="text-neutral-600 shrink-0">15:42:05.411</span>
<span className="text-amber-400 shrink-0">[WARN]</span>
<span className="truncate">Rate limit threshold approaching for ip: 192.168.1.1</span>
</div>
<div className="flex gap-4 text-neutral-400">
<span className="text-neutral-600 shrink-0">15:42:05.450</span>
<span className="text-rose-400 shrink-0">[DROP]</span>
<span className="truncate text-rose-200/70">Malicious payload detected in POST body. Connection terminated.</span>
</div>
<div className="flex gap-4 text-neutral-400 animate-pulse mt-2">
<span className="text-neutral-600 shrink-0">15:42:08.---</span>
<span className="text-neutral-500 shrink-0">[_]</span>
<span className="text-neutral-500">Awaiting incoming connections...</span>
</div>
</div>
</div>
</div>

<div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0c0c0c] to-transparent pointer-events-none"></div>
</div>
</div>
</main>

    </>
  );
}
