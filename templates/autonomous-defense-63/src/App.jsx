import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
colors: {
mono: {
50: '#f9fafb',
100: '#f3f4f6',
200: '#e5e7eb',
300: '#d1d5db',
400: '#9ca3af',
500: '#6b7280',
600: '#4b5563',
700: '#374151',
800: '#1f2937',
900: '#111827',
950: '#030712',
}
}
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



        !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.34/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
      


            document.addEventListener('DOMContentLoaded', () => {
                lucide.createIcons();
                
                const ctx = document.getElementById('mainChart').getContext('2d');
                // Monochrome Gradient
                const gradient = ctx.createLinearGradient(0, 0, 0, 200);
                gradient.addColorStop(0, 'rgba(255, 255, 255, 0.2)');
                gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

                new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55'],
                        datasets: [{
                            label: 'Requests',
                            data: [45, 52, 49, 62, 58, 65, 75, 68, 72, 85, 80, 92],
                            borderColor: '#ffffff',
                            backgroundColor: gradient,
                            borderWidth: 1.5,
                            tension: 0.2, // Sharper lines for tech feel
                            fill: true,
                            pointRadius: 0,
                            pointHoverRadius: 4,
                            pointHoverBackgroundColor: '#ffffff'
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: { legend: { display: false } },
                        scales: {
                            x: { display: false },
                            y: { display: false }
                        },
                        animation: { duration: 2000 }
                    }
                });
            });
        


      // Initialize Lucide icons
      lucide.createIcons({
          attrs: {
              'stroke-width': 1.5
          }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component top-0 w-full h-screen -z-10 absolute" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="BmkW7Lf1854963eLrBje"></div>

</div>

<div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
<div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[120%] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800/10 via-[#020204]/80 to-transparent blur-[80px]"></div>
</div>

<nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#030508]/80 backdrop-blur-xl">
<div className="flex max-w-7xl mx-auto px-6 py-4 items-center justify-between">
<div className="flex items-center gap-8">
<a className="flex items-center gap-3 group" href="#">

<div className="relative flex items-center justify-center">
<svg className="w-8 h-8 text-white stroke-[1.5]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
</div>
<div className="flex flex-col leading-none justify-center">
<span className="text-base font-bold text-white tracking-widest font-jakarta">ARGUS</span>
<span className="text-[9px] font-bold text-slate-400 tracking-[0.2em] uppercase font-geist">DEFENSE</span>
</div>
</a>
<div className="hidden md:flex items-center gap-6 ml-4">
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors uppercase tracking-wide" href="#capabilities">Capabilities</a>
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors uppercase tracking-wide" href="#systems">Systems</a>
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors uppercase tracking-wide" href="#mission">Mission</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="hidden text-xs font-medium text-slate-300 hover:text-white sm:block" href="#">Log In</a>
<a className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-md bg-white px-5 py-2 text-xs font-bold text-black transition-all hover:bg-zinc-200" href="#">
<span>CONTACT SALES</span>
</a>
</div>
</div>
</nav>
<main className="relative">

<section className="overflow-hidden min-h-[1100px] pt-32 pb-44 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[1100px] z-0 pointer-events-none mask-radar-bottom select-none">

<div className="relative w-full h-full flex items-center justify-center">

<div className="absolute inset-0 w-full h-full rounded-full animate-[radar-scan_8s_linear_infinite]">
<div className="radar-sweep w-full h-full rounded-full opacity-50"></div>

<div className="absolute top-0 left-1/2 w-[1px] h-1/2 bg-gradient-to-b from-white via-white/50 to-transparent origin-bottom -translate-x-1/2 shadow-[0_0_20px_rgba(255,255,255,0.8)]"></div>
</div>

<div className="absolute w-[98%] h-[98%] rounded-full border border-dashed border-white/10 opacity-30 animate-[spin-slow_120s_linear_infinite]"></div>
<div className="absolute w-[80%] h-[80%] rounded-full border border-white/10 opacity-40"></div>

<svg className="absolute w-[80%] h-[80%] animate-[spin-reverse-slow_60s_linear_infinite]" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="49" stroke="rgba(255,255,255,0.1)" stroke-dasharray="20 40" strokeWidth="0.2"></circle>
</svg>

<div className="absolute w-[72%] h-[72%] rounded-full border border-white/5"></div>

<div className="absolute w-full h-full opacity-10">
<div className="absolute top-0 bottom-0 left-1/2 w-px bg-white/30"></div>
<div className="absolute left-0 right-0 top-1/2 h-px bg-white/30"></div>
<div className="absolute top-[14.6%] left-[14.6%] w-[70.8%] h-[70.8%] border border-white/30 rounded-full"></div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] flex items-center justify-center">
<div className="absolute inset-0 bg-white/5 blur-xl rounded-full animate-pulse"></div>
<div className="w-[60%] h-[60%] border border-white/20 rounded-full flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_15px_white]"></div>
</div>
</div>

<div className="absolute top-[20%] left-[75%] w-32 h-8 flex items-center gap-2 text-white/40 text-[10px] font-mono animate-pulse">
<div className="w-1.5 h-1.5 bg-white rounded-full"></div> TARGET_LOCKED
                </div>
<div className="absolute bottom-[40%] left-[25%] w-32 h-8 flex items-center gap-2 text-white/40 text-[10px] font-mono animate-pulse delay-700">
<div className="w-1.5 h-1.5 bg-zinc-500 rounded-full"></div> UAV_ONLINE
                </div>
</div>
</div>

<div className="flex flex-col max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative items-center" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 70%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 70%, transparent)'}}>

<div className="text-center max-w-4xl mx-auto mb-16 pt-10">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.05)]">
<div className="h-1.5 w-1.5 animate-pulse bg-white rounded-full"></div>
<span className="text-[10px] font-bold tracking-[0.15em] uppercase text-slate-200 font-jakarta">
                Argus Defense Systems
              </span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-6 leading-[1.1]">
              Autonomous Intelligence
              <span className="text-gradient-silver relative inline-block">
                 for Modern Defense
                
<svg className="absolute w-full h-2 bottom-0 left-0 text-white/20" preserveaspectratio="none" viewbox="0 0 100 10">
<path className="" d="M0 5 Q 50 10 100 5" fill="transparent" stroke="currentColor" strokeWidth="1"></path>
</svg>
</span>
</h1>
<p className="text-lg text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
              We provide AI-enabled precision mass and autonomous systems. Software-defined superiority for the modern battlespace.
            </p>
<div className="mt-8 flex items-center justify-center gap-4">
<a className="px-6 py-3 rounded-md bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-white text-sm font-medium transition-all" href="#systems">View Platforms</a>
<a className="px-6 py-3 rounded-md bg-white hover:bg-slate-200 text-black text-sm font-bold transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]" href="#">Contact Sales</a>
</div>
</div>

<div className="w-full max-w-6xl z-20 mt-[-20px] relative perspective-1000">

<div className="glass-surface border-x overflow-hidden transition-all duration-500 animate-enter [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(0)_noise(0.5,1,0)] bg-[#0A0A0B] border-white/10 rounded-t-xl border-b relative backdrop-blur-md">

<div className="glass-top-border"></div>

<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.05] mix-blend-overlay pointer-events-none"></div>

<div className="z-20 flex bg-black/40 border-white/5 border-b pt-3 pr-6 pb-3 pl-6 relative items-center justify-between">
<div className="flex items-center gap-4">

<div className="flex gap-2 opacity-60">
<div className="w-2.5 h-2.5 rounded-sm bg-zinc-500"></div>
<div className="w-2.5 h-2.5 rounded-sm bg-zinc-700"></div>
<div className="w-2.5 h-2.5 rounded-sm bg-zinc-700"></div>
</div>
<div className="h-4 w-px bg-white/10 mx-2"></div>
<div className="flex items-center gap-2 text-xs font-mono text-white/80">
<svg className="lucide lucide-shield" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
<span>ARGUS_OS</span>
<span className="text-zinc-600">/</span>
<span className="text-zinc-400">COMMAND_NODE_ALPHA</span>
</div>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 px-3 py-1 rounded-sm bg-zinc-900/80 border border-white/10">
<div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></div>
<span className="text-[9px] font-bold text-slate-200 tracking-wide uppercase">Secure Uplink</span>
</div>
</div>
</div>

<div className="z-20 flex h-[500px] relative">

<div className="flex flex-col gap-6 bg-black/30 w-16 border-white/5 border-r pt-6 pb-6 gap-x-6 gap-y-6 items-center">
<div className="p-2.5 rounded bg-white/10 text-white shadow-[0_0_15px_rgba(255,255,255,0.1)]">
<svg className="lucide lucide-radar" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"></path><path d="M4 6h.01"></path><path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"></path><path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"></path><path d="M12 18h.01"></path><path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"></path><circle cx="12" cy="12" r="2"></circle><path d="m13.41 10.59 5.66-5.66"></path></svg>
</div>
<div className="p-2.5 rounded text-zinc-500 hover:text-white hover:bg-white/5 transition-colors">
<svg className="lucide lucide-crosshair" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="22" x2="18" y1="12" y2="12"></line><line x1="6" x2="2" y1="12" y2="12"></line><line x1="12" x2="12" y1="6" y2="2"></line><line x1="12" x2="12" y1="22" y2="18"></line></svg>
</div>
<div className="p-2.5 rounded text-zinc-500 hover:text-white hover:bg-white/5 transition-colors">
<svg className="lucide lucide-globe" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</div>
<div className="mt-auto p-2.5 rounded text-zinc-500 hover:text-white hover:bg-white/5 transition-colors">
<svg className="lucide lucide-settings-2" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 7h-9"></path><path d="M14 17H5"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>
</div>
</div>

<div className="flex-1 grid grid-cols-12 gap-6 overflow-hidden pt-6 pr-6 pb-6 pl-6 gap-x-6 gap-y-6 bg-black/20">

<div className="col-span-12 grid grid-cols-3 gap-6 h-32">

<div className="rounded-lg border border-white/5 bg-zinc-900/50 p-5 flex flex-col justify-between group hover:border-white/20 transition-all hover:bg-zinc-800/50">
<div className="flex justify-between items-start">
<div className="">
<p className="text-[9px] font-bold text-zinc-500 uppercase tracking-wider mb-1">Active Targets</p>
<h3 className="text-2xl font-bold text-white tracking-tight">142</h3>
</div>
<div className="text-white bg-white/5 rounded-sm pt-1.5 pr-1.5 pb-1.5 pl-1.5 border border-white/5">
<svg className="lucide lucide-target" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
</div>
</div>
<div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mt-2">
<div className="h-full w-[70%] bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.3)]"></div>
</div>
</div>

<div className="rounded-lg border border-white/5 bg-zinc-900/50 p-5 flex flex-col justify-between group hover:border-white/20 transition-all hover:bg-zinc-800/50">
<div className="flex justify-between items-start">
<div className="">
<p className="text-[9px] font-bold text-zinc-500 uppercase tracking-wider mb-1">Signal Latency</p>
<h3 className="text-2xl font-bold text-white tracking-tight">4<span className="text-sm font-medium text-zinc-500 ml-1">ms</span></h3>
</div>
<div className="text-white bg-white/5 rounded-sm pt-1.5 pr-1.5 pb-1.5 pl-1.5 border border-white/5">
<svg className="lucide lucide-zap" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
</div>
<div className="flex items-center gap-1.5 text-[10px] text-zinc-400 mt-2">
<div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                                Real-time sync active
                             </div>
</div>

<div className="rounded-lg border border-white/5 bg-zinc-900/50 p-5 flex flex-col justify-between group hover:border-white/20 transition-all hover:bg-zinc-800/50">
<div className="flex justify-between items-start">
<div className="">
<p className="text-[9px] font-bold text-zinc-500 uppercase tracking-wider mb-1">Swarm Health</p>
<h3 className="text-2xl font-bold text-white tracking-tight">100%</h3>
</div>
<div className="text-white bg-white/5 rounded-sm pt-1.5 pr-1.5 pb-1.5 pl-1.5 border border-white/5">
<svg className="lucide lucide-activity" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
</div>
<div className="flex gap-1 mt-2">
<div className="h-1 flex-1 bg-white/80 rounded-full opacity-100 shadow-[0_0_5px_rgba(255,255,255,0.3)]"></div>
<div className="h-1 flex-1 bg-white/80 rounded-full opacity-100 shadow-[0_0_5px_rgba(255,255,255,0.3)]"></div>
<div className="h-1 flex-1 bg-white/80 rounded-full opacity-100 shadow-[0_0_5px_rgba(255,255,255,0.3)]"></div>
<div className="h-1 flex-1 bg-white/80 rounded-full opacity-100 shadow-[0_0_5px_rgba(255,255,255,0.3)]"></div>
</div>
</div>
</div>

<div className="col-span-8 bg-zinc-900/30 border border-white/5 rounded-lg p-6 relative">
<div className="flex items-center justify-between mb-4">
<h4 className="text-[10px] font-bold text-white uppercase tracking-wider">Autonomous Response</h4>
<div className="flex gap-2">
<button className="text-[9px] font-bold px-2 py-0.5 rounded bg-white/10 text-white border border-white/10">LIVE</button>
<button className="text-[9px] font-bold px-2 py-0.5 rounded text-zinc-500 hover:text-white transition-colors">LOG</button>
</div>
</div>
<div className="relative w-full h-[200px]">
<canvas className="" height="400" id="mainChart" style={{display: 'block', boxSizing: 'border-box', height: '200px', width: '634px'}} width="1268"></canvas>
</div>
</div>

<div className="col-span-4 bg-zinc-900/30 border border-white/5 rounded-lg flex flex-col">
<div className="p-4 border-b border-white/5 flex justify-between items-center">
<h4 className="text-[10px] font-bold text-white uppercase tracking-wider">Tactical Log</h4>
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
</span>
</div>
<div className="flex-1 overflow-y-hidden p-3 space-y-2 font-mono text-[10px]">
<div className="flex gap-2 items-center text-zinc-400 p-1.5 hover:bg-white/5 rounded cursor-pointer group">
<span className="text-zinc-600">10:42:01</span>
<span className="text-white font-bold">INFO</span>
<span className="group-hover:text-white transition-colors">Pattern matched</span>
</div>
<div className="flex gap-2 items-center text-zinc-400 p-1.5 hover:bg-white/5 rounded cursor-pointer group">
<span className="text-zinc-600">10:42:05</span>
<span className="text-emerald-500 font-bold">SAFE</span>
<span className="group-hover:text-white transition-colors">Sector 4 clear</span>
</div>
<div className="flex gap-2 items-center text-zinc-400 p-1.5 hover:bg-white/5 rounded cursor-pointer group">
<span className="text-zinc-600">10:42:12</span>
<span className="text-white font-bold">ALRT</span>
<span className="group-hover:text-white transition-colors">Anomaly detected</span>
</div>
<div className="flex gap-2 items-center text-zinc-400 p-1.5 hover:bg-white/5 rounded cursor-pointer group">
<span className="text-zinc-600">10:42:18</span>
<span className="text-white font-bold">INFO</span>
<span className="group-hover:text-white transition-colors">Re-routing swarm</span>
</div>
<div className="flex gap-2 items-center text-zinc-400 p-1.5 hover:bg-white/5 rounded cursor-pointer group opacity-50">
<span className="text-zinc-600">10:42:22</span>
<span className="text-white font-bold">INFO</span>
<span className="group-hover:text-white transition-colors">Protocol engaged</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute -bottom-10 left-0 right-0 h-20 bg-white/5 blur-[50px] pointer-events-none z-0"></div>
</div>
</div>

<div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent via-[#020204]/80 to-[#020204] z-[15]"></div>


</section>

<section className="overflow-visible max-w-7xl mr-auto ml-auto pt-10 pb-20 px-6 relative border-b border-white/5">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div className="group">
<div className="text-4xl font-bold text-white mb-2 group-hover:text-zinc-300 transition-colors">100%</div>
<div className="text-xs font-bold uppercase tracking-wider text-zinc-600">Open Architecture</div>
</div>
<div className="group">
<div className="text-4xl font-bold text-white mb-2 group-hover:text-zinc-300 transition-colors">5+</div>
<div className="text-xs font-bold uppercase tracking-wider text-zinc-600">Nations Supported</div>
</div>
<div className="group">
<div className="text-4xl font-bold text-white mb-2 group-hover:text-zinc-300 transition-colors">24/7</div>
<div className="text-xs font-bold uppercase tracking-wider text-zinc-600">Autonomous Ops</div>
</div>
<div className="group">
<div className="text-4xl font-bold text-white mb-2 group-hover:text-zinc-300 transition-colors">∞</div>
<div className="text-xs font-bold uppercase tracking-wider text-zinc-600">Scalability</div>
</div>
</div>
</section>

<section className="relative py-32 overflow-hidden" id="capabilities">

<div className="absolute inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6">

<div className="text-center mb-32">
<div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 shadow-lg">
<span className="text-xs font-bold tracking-wider text-slate-200 uppercase">
                Mission &amp; Values
              </span>
</div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
              Our Capabilities
            </h2>
<p className="text-slate-400 text-lg max-w-xl mx-auto font-light">
              Software-defined superiority for sovereign defense.
            </p>
</div>

<div className="relative max-w-5xl mx-auto">

<div className="absolute top-1/2 left-[-50%] right-[-50%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2"></div>
<div className="absolute left-1/2 top-[-50%] bottom-[-50%] w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2"></div>

<div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
<div className="relative w-[260px] h-[260px]">

<div className="absolute inset-0 flex items-center justify-center">
<div className="center-circle center-circle--3 w-56 h-56 rounded-full bg-white/5"></div>
</div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="center-circle center-circle--2 w-40 h-40 rounded-full bg-white/10"></div>
</div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="center-circle w-24 h-24 rounded-full bg-white/20"></div>
</div>

<div className="absolute inset-0 flex items-center justify-center">
<div className="center-ray-horizontal center-ray-left bg-gradient-to-l from-white/40 via-white/20 to-transparent w-14 gap-x-32 gap-y-32"></div>
</div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="center-ray-horizontal center-ray-right w-14 bg-gradient-to-r from-white/40 via-white/20 to-transparent"></div>
</div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="center-ray-vertical center-ray-top h-14 bg-gradient-to-t from-white/40 via-white/20 to-transparent"></div>
</div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="center-ray-vertical center-ray-bottom h-14 bg-gradient-to-b from-white/40 via-white/20 to-transparent"></div>
</div>

<div className="absolute inset-0 flex items-center justify-center">
<div className="flex bg-zinc-100 w-16 h-16 rounded-full ring-[#020204] ring-8 relative shadow-[0_0_40px_rgba(255,255,255,0.2)] gap-x-32 gap-y-32 items-center justify-center">

<svg className="text-black" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-32 gap-y-32">
<style>
                @keyframes centerCirclePulse {
                  0% { opacity: 0; transform: scale(0.6); }
                  15% { opacity: 0.9; }
                  100% { opacity: 0; transform: scale(2.2); }
                }
                .center-circle {
                  animation: centerCirclePulse 5s linear infinite !important;
                  animation-delay: 0s !important;
                }
                .center-circle--2 { animation-delay: -1.6s !important; }
                .center-circle--3 { animation-delay: -3.3s !important; }
              </style>

<div className="flex flex-col items-center text-center group">
<div className="w-16 h-16 rounded-2xl bg-[#0B0C10] border border-white/10 flex items-center justify-center mb-6 group-hover:border-white/40 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300">
<svg className="text-zinc-500 group-hover:text-white transition-colors" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" ry="2" width="16" x="4" y="4"></rect><rect height="6" width="6" x="9" y="9"></rect><line x1="9" x2="9" y1="1" y2="4"></line><line x1="15" x2="15" y1="1" y2="4"></line><line x1="9" x2="9" y1="20" y2="23"></line><line x1="15" x2="15" y1="20" y2="23"></line><line x1="20" x2="23" y1="9" y2="9"></line><line x1="20" x2="23" y1="14" y2="14"></line><line x1="1" x2="4" y1="9" y2="9"></line><line x1="1" x2="4" y1="14" y2="14"></line>
</svg>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Software-Defined</h3>
<p className="text-sm text-slate-400 max-w-[240px]">
                  Hardware is a commodity. Intelligence is the differentiator. We retrofit existing platforms with state-of-the-art AI.
                </p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-16 h-16 rounded-2xl bg-[#0B0C10] border border-white/10 flex items-center justify-center mb-6 group-hover:border-white/40 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300">
<svg className="text-zinc-500 group-hover:text-white transition-colors" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle>
</svg>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Information Superiority</h3>
<p className="text-sm text-slate-400 max-w-[240px]">
                  Data is the weapon. Our systems process sensor data on-device, delivering real-time situational awareness.
                </p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-16 h-16 rounded-2xl bg-[#0B0C10] border border-white/10 flex items-center justify-center mb-6 group-hover:border-white/40 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300">
<svg className="text-zinc-500 group-hover:text-white transition-colors" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Sovereign &amp; Secure</h3>
<p className="text-sm text-slate-400 max-w-[240px]">
                  Built on open standards. We ensure critical defense infrastructure remains under sovereign control.
                </p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-16 h-16 rounded-2xl bg-[#0B0C10] border border-white/10 flex items-center justify-center mb-6 group-hover:border-white/40 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300">
<svg className="text-zinc-500 group-hover:text-white transition-colors" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2v20"></path><path d="M2 12h20"></path><path d="m4.93 4.93 14.14 14.14"></path><path d="m19.07 4.93-14.14 14.14"></path>
</svg>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Mass Scalability</h3>
<p className="text-sm text-slate-400 max-w-[240px]">
                  Deploying autonomous swarms cost-effectively at scale to achieve asymmetric advantage.
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 pt-24 pr-24 pb-24 pl-24" id="systems">
<div className="border-gradient-mask group relative overflow-hidden rounded-[2.5rem] bg-zinc-900/20 backdrop-blur-md">

<div className="absolute -bottom-24 -left-24 w-96 h-96 bg-zinc-600/10 blur-[100px] rounded-full pointer-events-none group-hover:bg-zinc-600/20 transition-colors duration-700"></div>
<div className="grid lg:grid-cols-2 z-10 gap-x-0 gap-y-0" style={{position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))'}}>

<div className="md:p-16 flex flex-col z-10 pt-12 pr-12 pb-12 pl-12 justify-center">
<div className="mb-6 h-12 w-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 shadow-inner">
<svg className="lucide lucide-crosshair h-6 w-6 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="22" x2="18" y1="12" y2="12"></line><line x1="6" x2="2" y1="12" y2="12"></line><line x1="12" x2="12" y1="6" y2="2"></line><line x1="12" x2="12" y1="22" y2="18"></line></svg>
</div>
<h2 className="text-3xl tracking-tight text-white sm:text-4xl font-medium">
                Autonomous Systems.
                <span className="block text-zinc-500">
                  Multi-Domain Operations.
                </span>
</h2>
<div className="space-y-6 text-lg text-zinc-400 font-normal leading-relaxed">
<p className="mt-6 text-lg text-slate-400 leading-relaxed">
                  We bridge the gap between legacy platforms and next-generation autonomy.
                </p>
<div className="mt-8">
<h3 className="text-white font-semibold mb-2 flex items-center gap-2">
<svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2 18h20"></path><path d="M12 2v16"></path><path d="m19 9-7-7-7 7"></path></svg>
                        Air Superiority
                    </h3>
<p className="text-sm text-slate-400 mb-6">
                        AI-enabled air dominance. Our software stack transforms legacy airframes and next-gen drones into cognitive assets capable of autonomous decision-making in GPS-denied environments.
                    </p>
<h3 className="text-white font-semibold mb-2 flex items-center gap-2">
<svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2 12h20"></path><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg>
                        Maritime Intelligence
                    </h3>
<p className="text-sm text-slate-400">
                        Deploying neural networks at the edge to secure sovereign waters. From autonomous surface vessels to deep-sea monitoring, ensuring continuous situational awareness.
                    </p>
</div>
</div>
</div>

<div className="min-h-[500px] lg:border-t-0 lg:border-l font-geist bg-black/40 border-white/5 border-t relative overflow-hidden">

<div className="-translate-x-1/2 -translate-y-1/2 z-20 w-[85%] max-w-md absolute top-1/2 left-1/2">
<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/90 p-4 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:scale-[1.02] hover:border-white/30">

<div className="flex items-center justify-between mb-3 pb-3 border-b border-white/5">
<div className="flex items-center gap-2">
<div className="h-2 w-2 rounded-full bg-white animate-pulse"></div>
<span className="text-xs font-medium text-white">Argus Sentinel Core</span>
</div>
<span className="text-[10px] text-zinc-600">v4.0.1 Stable</span>
</div>

<div className="flex gap-3 mb-4">
<div className="h-6 w-6 rounded-full bg-zinc-800 flex items-center justify-center shrink-0 border border-white/5">
<svg className="lucide lucide-terminal h-3 w-3 text-zinc-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" x2="20" y1="19" y2="19"></line></svg>
</div>
<div className="text-sm text-zinc-300 font-normal leading-relaxed">
                      Initialize swarm protocol. Sector 4 surveillance. Authorized autonomous engagement on confirmed hostile signatures.
                    </div>
</div>

<div className="flex gap-3">
<div className="h-6 w-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
<svg className="lucide lucide-cpu h-3 w-3 text-white" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="6" width="6" x="9" y="9"></rect><path d="M15 2v2"></path><path d="M15 20v2"></path><path d="M2 15h2"></path><path d="M2 9h2"></path><path d="M20 15h2"></path><path d="M20 9h2"></path><path d="M9 2v2"></path><path d="M9 20v2"></path></svg>
</div>
<div className="w-full space-y-2">
<div className="h-2 w-3/4 bg-zinc-800 rounded animate-pulse"></div>
<div className="h-2 w-1/2 bg-zinc-800 rounded animate-pulse delay-75"></div>

<div className="mt-4 rounded-lg border border-zinc-700/50 bg-[#0B0C10] p-4 font-mono text-[10px] md:text-xs leading-relaxed overflow-hidden relative group">

<div className="absolute top-2 right-2 text-[8px] text-zinc-500 border border-zinc-800 px-1.5 rounded bg-zinc-900/50">
                          CPP
                        </div>
<div className="text-zinc-400">
<span className="text-purple-400">class</span>
<span className="text-yellow-200">SwarmController</span>
<span className="text-purple-400">extends</span>
                          BaseUnit {
                        </div>
<div className="pl-4 text-zinc-400">
<span className="text-blue-400">void</span> executeMission() {
                        </div>
<div className="pl-8 text-zinc-400">
                          scanSector(<span className="text-green-400">SECTOR_04</span>);
                        </div>
<div className="pl-8 text-zinc-400">
<span className="text-purple-400">if</span> (target.confirmed()) {
                        </div>
<div className="pl-12 text-zinc-400">
                          engage(<span className="text-blue-400">Protocol::AUTONOMOUS</span>);
                        </div>
<div className="pl-8 text-zinc-400">}</div>
<div className="pl-4 text-zinc-400">}</div>
<div className="text-zinc-400">};</div>

<div className="absolute bottom-4 left-10 w-1.5 h-3 bg-white/50 animate-pulse"></div>
</div>
</div>
</div>
</div>
</div>

<style>
                @keyframes scrollUp {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(-50%); }
                }
              </style>
<div className="absolute inset-0 p-8 opacity-20 pointer-events-none select-none overflow-hidden">
<div className="absolute inset-0 w-full h-full" style={{maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'}}>
<div className="w-full" style={{animation: 'scrollUp 30s linear infinite'}}>

<div className="text-xs text-zinc-600 space-y-1 pb-16">
<p><span className="text-purple-400">import</span> <span className="text-yellow-200">TargetingSystem</span>;</p>
<p><span className="text-purple-400">import</span> <span className="text-yellow-200">NeuralNet</span>;</p>
<br/>
<p><span className="text-blue-400">void</span> main() {</p>
<p className="pl-4">System.init(Mode.DEFENSE);</p>
<p className="pl-4">while(active) {</p>
<p className="pl-8">scan();</p>
<p className="pl-8">analyze_telemetry();</p>
<p className="pl-4">}</p>
<p>}</p>
</div>

<div className="text-xs text-zinc-600 space-y-1 pb-16">
<p><span className="text-purple-400">import</span> <span className="text-yellow-200">TargetingSystem</span>;</p>
<p><span className="text-purple-400">import</span> <span className="text-yellow-200">NeuralNet</span>;</p>
<br/>
<p><span className="text-blue-400">void</span> main() {</p>
<p className="pl-4">System.init(Mode.DEFENSE);</p>
<p className="pl-4">while(active) {</p>
<p className="pl-8">scan();</p>
<p className="pl-8">analyze_telemetry();</p>
<p className="pl-4">}</p>
<p>}</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="pt-24 pb-32 relative" id="mission">
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-white/5 border border-white/10 mb-8">
<svg className="lucide lucide-flag text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" x2="4" y1="22" y2="15"></line></svg>
</div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
            Join the Mission
          </h2>
<p className="text-slate-400 text-lg mb-10 leading-relaxed">
            We are looking for engineers and operators who share our conviction that democratic values are worth protecting.
          </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="px-8 py-4 rounded-md bg-white text-black font-bold hover:bg-slate-200 transition-all hover:scale-105" href="#">View Open Roles</a>
<a className="px-8 py-4 rounded-md border border-white/20 text-white font-medium hover:bg-white/5 transition-all" href="#">Contact Sales</a>
</div>
</div>
</section>
</main>
<footer className="border-t border-white/10 bg-[#010203] pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 mb-16">
<div className="col-span-2 lg:col-span-2">
<a className="flex items-center gap-3 mb-6" href="#">
<svg className="w-6 h-6 text-white stroke-[1.5]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
<div className="flex flex-col leading-none justify-center">
<span className="text-lg font-bold text-white tracking-widest font-jakarta">ARGUS</span>
</div>
</a>
<p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-8">
              Artificial intelligence to protect our democracies. We build software-defined defense systems that ensure information superiority in the modern battlespace.
            </p>
</div>
<div>
<h4 className="font-bold text-white mb-4 uppercase text-xs tracking-wider">Platform</h4>
<ul className="space-y-3 text-sm">
<li><a className="text-slate-400 hover:text-white transition-colors" href="#">Air Superiority</a></li>
<li><a className="text-slate-400 hover:text-white transition-colors" href="#">Maritime</a></li>
<li><a className="text-slate-400 hover:text-white transition-colors" href="#">Command OS</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-white mb-4 uppercase text-xs tracking-wider">Company</h4>
<ul className="space-y-3 text-sm">
<li><a className="text-slate-400 hover:text-white transition-colors" href="#">Mission</a></li>
<li><a className="text-slate-400 hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="text-slate-400 hover:text-white transition-colors" href="#">Press</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-white mb-4 uppercase text-xs tracking-wider">Legal</h4>
<ul className="space-y-3 text-sm">
<li><a className="text-slate-400 hover:text-white transition-colors" href="#">Privacy</a></li>
<li><a className="text-slate-400 hover:text-white transition-colors" href="#">Terms</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-500">
            © 2024 Argus Defense. All rights reserved.
          </p>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-xs text-slate-400 font-mono">
              System Operational
            </span>
</div>
</div>
</div>
</footer>


    </>
  );
}
