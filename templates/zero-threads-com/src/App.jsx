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



        document.addEventListener('DOMContentLoaded', () => {
            const ctx = document.getElementById('mainChart').getContext('2d');
            const gradient = ctx.createLinearGradient(0, 0, 0, 200);
            gradient.addColorStop(0, 'rgba(34, 211, 238, 0.4)');
            gradient.addColorStop(1, 'rgba(34, 211, 238, 0)');

            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55'],
                    datasets: [{
                        label: 'Requests',
                        data: [45, 52, 49, 62, 58, 65, 75, 68, 72, 85, 80, 92],
                        borderColor: '#22d3ee',
                        backgroundColor: gradient,
                        borderWidth: 2,
                        tension: 0.4,
                        fill: true,
                        pointRadius: 0,
                        pointHoverRadius: 4
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
      

<header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
<nav className="w-full max-w-5xl bg-[#0f172a]/80 backdrop-blur-xl border border-white/5 rounded-full px-2 py-2 flex items-center justify-between shadow-2xl shadow-black/50">

<div className="flex items-center gap-2 pl-4">
<div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/20">
<iconify-icon className="text-white text-xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-white">CyberShield</span>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-300" href="#features">Features</a>
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-300" href="#risk-score">Live Monitor</a>
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-300" href="#pricing">Pricing</a>
</div>

<div className="">
<a className="group flex items-center gap-2 bg-transparent border border-white/10 hover:border-cyan-500/30 hover:bg-cyan-950/30 rounded-full px-5 py-2 transition-all duration-300" href="#">
<span className="text-xs font-semibold tracking-wide uppercase text-slate-200 group-hover:text-cyan-300">Get App</span>
<iconify-icon className="text-slate-400 group-hover:text-cyan-400 transition-colors" icon="solar:smartphone-linear"></iconify-icon>
</a>
</div>
</nav>
</header>

<section className="overflow-hidden min-h-[1100px] pt-32 pb-44 relative" id="home">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[1100px] z-0 pointer-events-none mask-radar-bottom select-none">

<div className="relative w-full h-full flex items-center justify-center">

<div className="absolute inset-0 w-full h-full rounded-full animate-[radar-scan_8s_linear_infinite]">
<div className="radar-sweep w-full h-full rounded-full"></div>
<div className="absolute top-0 left-1/2 w-[2px] h-1/2 bg-gradient-to-b from-cyan-300 via-cyan-500 to-transparent origin-bottom -translate-x-1/2 shadow-[0_0_30px_rgba(34,211,238,1)]"></div>
</div>

<div className="absolute w-[98%] h-[98%] rounded-full border border-dashed border-cyan-500/10 opacity-30 animate-[spin-slow_120s_linear_infinite]"></div>
<div className="absolute w-[80%] h-[80%] rounded-full border border-cyan-500/10 opacity-60"></div>

<svg className="absolute w-[80%] h-[80%] animate-[spin-reverse-slow_60s_linear_infinite]" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="49" stroke="rgba(34,211,238,0.1)" stroke-dasharray="20 40" strokeWidth="0.2"></circle>
</svg>

<div className="absolute w-[72%] h-[72%] rounded-full border border-cyan-500/5"></div>

<div className="absolute w-full h-full opacity-10">
<div className="absolute top-0 bottom-0 left-1/2 w-px bg-cyan-400"></div>
<div className="absolute left-0 right-0 top-1/2 h-px bg-cyan-400"></div>
<div className="absolute top-[14.6%] left-[14.6%] w-[70.8%] h-[70.8%] border border-cyan-400 rounded-full"></div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] flex items-center justify-center">
<div className="absolute inset-0 bg-cyan-500/10 blur-xl rounded-full animate-pulse"></div>
<div className="w-[60%] h-[60%] border border-cyan-400/30 rounded-full flex items-center justify-center">
<div className="w-2 h-2 bg-cyan-300 rounded-full shadow-[0_0_10px_#22d3ee]"></div>
</div>
</div>

<div className="absolute top-[20%] left-[75%] w-32 h-8 flex items-center gap-2 text-cyan-500/50 text-[10px] font-mono animate-pulse">
<div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div> TARGET_LOCKED
                </div>
<div className="absolute bottom-[40%] left-[25%] w-32 h-8 flex items-center gap-2 text-blue-500/50 text-[10px] font-mono animate-pulse delay-700">
<div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> SCANNING...
                </div>
</div>
</div>

<div className="flex flex-col z-10 max-w-7xl mx-auto px-6 relative items-center" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 70%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 70%, transparent)'}}>

<div className="text-center max-w-3xl mx-auto mb-16 pt-10">
<div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-950/30 px-4 py-1.5 mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(34,211,238,0.1)]">
<div className="h-1.5 w-1.5 animate-pulse bg-cyan-400 rounded-full"></div>
<span className="text-[10px] font-semibold tracking-widest uppercase text-cyan-300 font-mono">
                        System Secure
                    </span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-6 leading-[1.1]">
                    Trust-Based <br/>
<span className="text-gradient-cyan relative inline-block">
                        Digital Security
                        <svg className="absolute w-full h-2 bottom-0 left-0 text-cyan-500/30" preserveaspectratio="none" viewbox="0 0 100 10">
<path d="M0 5 Q 50 10 100 5" fill="transparent" stroke="currentColor" strokeWidth="1"></path>
</svg>
</span>
</h1>
<p className="text-lg text-slate-400 font-light max-w-xl mx-auto leading-relaxed">
                    Unified security platform for personal and enterprise defense. Monitor risk scores, audit breaches, and prevent identity theft in real-time.
                </p>
<div className="mt-8 flex items-center justify-center gap-4">
<button className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-semibold rounded-lg shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all">
                        Start Scanning
                    </button>
<button className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium rounded-lg transition-all flex items-center gap-2">
<iconify-icon className="text-lg" icon="solar:play-circle-linear"></iconify-icon>
                        Live Demo
                    </button>
</div>
</div>

<div className="w-full max-w-6xl z-20 -mt-6 relative perspective-1000">

<div className="glass-surface border-x overflow-hidden transition-all duration-500 bg-[#020617]/90 border-white/10 rounded-t-2xl border-b relative backdrop-blur-md">

<div className="glass-top-border"></div>

<div className="z-20 flex bg-black/20 border-white/5 border-b p-4 relative items-center justify-between">
<div className="flex items-center gap-4">

<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-slate-700/50 border border-white/10"></div>
<div className="w-3 h-3 rounded-full bg-slate-700/50 border border-white/10"></div>
<div className="w-3 h-3 rounded-full bg-slate-700/50 border border-white/10"></div>
</div>
<div className="h-4 w-px bg-white/10 mx-2"></div>
<div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon>
<span>CYBER.SHIELD</span>
<span className="text-slate-600">/</span>
<span className="text-slate-300">DEVICE_AUDIT</span>
</div>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20">
<div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></div>
<span className="text-[10px] font-semibold text-cyan-300 tracking-wide">LIVE FEED</span>
</div>
</div>
</div>

<div className="z-20 flex min-h-[500px] relative">

<div className="flex flex-col gap-6 bg-black/10 w-16 border-white/5 border-r py-6 items-center">
<div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
<iconify-icon className="text-xl" icon="solar:graph-up-linear"></iconify-icon>
</div>
<div className="p-2.5 rounded-xl text-slate-500 hover:text-slate-200 hover:bg-white/5 transition-colors">
<iconify-icon className="text-xl" icon="solar:server-linear"></iconify-icon>
</div>
<div className="p-2.5 rounded-xl text-slate-500 hover:text-slate-200 hover:bg-white/5 transition-colors">
<iconify-icon className="text-xl" icon="solar:globe-linear"></iconify-icon>
</div>
<div className="mt-auto p-2.5 rounded-xl text-slate-500 hover:text-slate-200 hover:bg-white/5 transition-colors">
<iconify-icon className="text-xl" icon="solar:settings-linear"></iconify-icon>
</div>
</div>

<div className="flex-1 grid grid-cols-12 gap-6 overflow-hidden p-6">

<div className="col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="rounded-xl border border-white/5 bg-white/[0.03] p-5 flex flex-col justify-between group hover:border-cyan-500/30 transition-all hover:bg-cyan-500/[0.05]">
<div className="flex justify-between items-start">
<div>
<p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1">Threats Blocked</p>
<h3 className="text-2xl font-bold text-white tracking-tight">8,942</h3>
</div>
<div className="text-cyan-400 bg-cyan-500/10 rounded-md p-1.5">
<iconify-icon className="text-base" icon="solar:shield-warning-linear"></iconify-icon>
</div>
</div>
<div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mt-2">
<div className="h-full w-[95%] bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
</div>
</div>

<div className="rounded-xl border border-white/5 bg-white/[0.03] p-5 flex flex-col justify-between group hover:border-cyan-500/30 transition-all hover:bg-cyan-500/[0.05]">
<div className="flex justify-between items-start">
<div>
<p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1">Risk Score</p>
<h3 className="text-2xl font-bold text-white tracking-tight">Low</h3>
</div>
<div className="text-emerald-400 bg-emerald-500/10 rounded-md p-1.5">
<iconify-icon className="text-base" icon="solar:bolt-linear"></iconify-icon>
</div>
</div>
<div className="flex items-center gap-1.5 text-[10px] text-emerald-400 mt-2">
<iconify-icon icon="solar:graph-down-linear"></iconify-icon>
                                        Secure Environment
                                    </div>
</div>

<div className="rounded-xl border border-white/5 bg-white/[0.03] p-5 flex flex-col justify-between group hover:border-cyan-500/30 transition-all hover:bg-cyan-500/[0.05]">
<div className="flex justify-between items-start">
<div>
<p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1">Uptime</p>
<h3 className="text-2xl font-bold text-white tracking-tight">99.9%</h3>
</div>
<div className="text-cyan-400 bg-cyan-500/10 rounded-md p-1.5">
<iconify-icon className="text-base" icon="solar:clock-circle-linear"></iconify-icon>
</div>
</div>
<div className="flex gap-1 mt-2">
<div className="h-1 flex-1 bg-emerald-500 rounded-full shadow-[0_0_5px_#10b981]"></div>
<div className="h-1 flex-1 bg-emerald-500 rounded-full shadow-[0_0_5px_#10b981]"></div>
<div className="h-1 flex-1 bg-emerald-500 rounded-full shadow-[0_0_5px_#10b981]"></div>
</div>
</div>
</div>

<div className="col-span-12 md:col-span-8 bg-white/[0.02] border border-white/5 rounded-xl p-6 relative">
<div className="flex items-center justify-between mb-4">
<h4 className="text-xs font-semibold text-white">Network Activity</h4>
<div className="flex gap-2">
<button className="text-[10px] px-2 py-0.5 rounded bg-white/10 text-white border border-white/10">1H</button>
<button className="text-[10px] px-2 py-0.5 rounded text-slate-500 hover:text-white transition-colors">24H</button>
</div>
</div>
<div className="relative w-full h-[200px]">
<canvas id="mainChart"></canvas>
</div>
</div>

<div className="col-span-12 md:col-span-4 bg-white/[0.02] border border-white/5 rounded-xl flex flex-col">
<div className="p-4 border-b border-white/5 flex justify-between items-center">
<h4 className="text-xs font-semibold text-white">Event Log</h4>
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</span>
</div>
<div className="flex-1 overflow-hidden p-3 space-y-2 font-mono text-[10px]">
<div className="flex gap-2 items-center text-slate-400 p-1.5 hover:bg-white/5 rounded cursor-pointer group">
<span className="text-slate-600">10:42:01</span>
<span className="text-cyan-400">INFO</span>
<span className="group-hover:text-white transition-colors">Backup initialized</span>
</div>
<div className="flex gap-2 items-center text-slate-400 p-1.5 hover:bg-white/5 rounded cursor-pointer group">
<span className="text-slate-600">10:42:05</span>
<span className="text-emerald-400">OK</span>
<span className="group-hover:text-white transition-colors">Node synced</span>
</div>
<div className="flex gap-2 items-center text-slate-400 p-1.5 hover:bg-white/5 rounded cursor-pointer group">
<span className="text-slate-600">10:42:12</span>
<span className="text-yellow-400">WARN</span>
<span className="group-hover:text-white transition-colors">Port 443 spike</span>
</div>
<div className="flex gap-2 items-center text-slate-400 p-1.5 hover:bg-white/5 rounded cursor-pointer group">
<span className="text-slate-600">10:42:18</span>
<span className="text-cyan-400">INFO</span>
<span className="group-hover:text-white transition-colors">Scan complete</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute -bottom-10 left-0 right-0 h-20 bg-cyan-500/10 blur-[50px] pointer-events-none z-0"></div>
</div>
</div>

<div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent via-[#020617]/70 to-[#020617] z-[15]"></div>
</section>

<section className="max-w-7xl mx-auto px-4 py-12 relative z-10 -mt-20" id="features">

<div className="border border-white/5 rounded-3xl bg-[#0b1221] overflow-hidden flex flex-col lg:flex-row shadow-2xl relative">

<div className="w-full lg:w-[45%] border-b lg:border-b-0 lg:border-r border-white/5 relative group bg-gradient-to-b from-[#0f172a] to-[#020617] overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-900/10 blur-[80px] rounded-full"></div>

<div className="h-full flex items-center justify-center p-8 lg:p-12 min-h-[600px]">
<div className="relative w-[300px] h-[600px] bg-[#020617] rounded-[2.5rem] border-[6px] border-[#1e293b] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#1e293b] rounded-b-xl z-20"></div>

<div className="w-full h-full text-white p-6 flex flex-col relative z-10 bg-gradient-to-b from-slate-900 to-slate-950">

<div className="flex justify-between items-center text-[10px] text-slate-500 font-medium mb-8 mt-1 px-1">
<span>10:23</span>
<div className="flex gap-1.5 items-center">
<iconify-icon icon="solar:wi-fi-linear"></iconify-icon>
<iconify-icon icon="solar:battery-charge-linear"></iconify-icon>
</div>
</div>

<div className="flex justify-between items-center mb-8">
<h3 className="text-xl font-semibold tracking-tight">My Device</h3>
<div className="p-2 rounded-full bg-slate-800/50 border border-white/5">
<iconify-icon className="text-slate-400" icon="solar:settings-linear"></iconify-icon>
</div>
</div>

<div className="flex flex-col items-center justify-center mb-8 relative">
<div className="absolute w-40 h-40 bg-cyan-500/10 blur-3xl rounded-full"></div>
<div className="relative w-48 h-48">
<svg className="w-full h-full transform -rotate-90" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="transparent" r="40" stroke="#1e293b" strokeWidth="6"></circle>
<circle className="animate-circle" cx="50" cy="50" fill="transparent" r="40" stroke="#22d3ee" strokeLinecap="round" strokeWidth="6"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-4xl font-bold text-white tracking-tighter">92</span>
<span className="text-xs text-slate-500 uppercase tracking-widest mt-1">Safe</span>
</div>
</div>
</div>

<div className="space-y-3 mt-auto">
<div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
<div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
<iconify-icon className="text-emerald-400 text-xs" icon="solar:shield-check-linear"></iconify-icon>
</div>
<span className="text-xs font-medium text-slate-300">Identity Safe</span>
<span className="ml-auto text-xs text-slate-500">Verified</span>
</div>
<div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
<div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
<iconify-icon className="text-emerald-400 text-xs" icon="solar:smartphone-linear"></iconify-icon>
</div>
<span className="text-xs font-medium text-slate-300">Encryption Active</span>
<span className="ml-auto text-xs text-slate-500">Secure</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="w-full lg:w-[55%] flex flex-col" id="risk-score">

<div className="border-b border-white/5 p-8 md:p-10 flex flex-col gap-8">
<div>
<h2 className="text-3xl font-bold text-white mb-2 tracking-tight">Enterprise Grade. <br/><span className="text-slate-500">Consumer Simple.</span></h2>
</div>
<div className="grid grid-cols-3 gap-4 md:gap-8">
<div className="bg-slate-900/50 p-4 rounded-xl border border-white/5">
<span className="block text-[10px] text-cyan-500 font-bold tracking-wider uppercase mb-1">Latency</span>
<span className="block text-xl md:text-2xl font-semibold text-white">~20ms</span>
</div>
<div className="bg-slate-900/50 p-4 rounded-xl border border-white/5">
<span className="block text-[10px] text-cyan-500 font-bold tracking-wider uppercase mb-1">Encryption</span>
<span className="block text-xl md:text-2xl font-semibold text-white">AES-256</span>
</div>
<div className="bg-slate-900/50 p-4 rounded-xl border border-white/5">
<span className="block text-[10px] text-cyan-500 font-bold tracking-wider uppercase mb-1">Platform</span>
<span className="block text-xl md:text-2xl font-semibold text-white">iOS/Droid</span>
</div>
</div>
</div>

<div className="p-8 md:p-10 flex-1 bg-[#0b1221]">
<div className="flex justify-between items-end mb-6">
<span className="text-cyan-500 font-mono text-xs font-semibold tracking-widest uppercase">Core Modules</span>
</div>
<div className="grid grid-cols-2 gap-4">

<div className="relative h-40 rounded-xl bg-slate-900/40 border border-white/5 overflow-hidden group cursor-pointer hover:border-cyan-500/30 transition-all">
<div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-4xl text-cyan-500" icon="solar:lock-password-linear"></iconify-icon>
</div>
<div className="absolute bottom-0 left-0 p-5">
<h4 className="text-sm font-semibold text-white mb-1">Breach Monitor</h4>
<p className="text-[10px] text-slate-400">Dark web surveillance</p>
</div>
</div>

<div className="relative h-40 rounded-xl bg-slate-900/40 border border-white/5 overflow-hidden group cursor-pointer hover:border-cyan-500/30 transition-all">
<div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-4xl text-cyan-500" icon="solar:qr-code-linear"></iconify-icon>
</div>
<div className="absolute bottom-0 left-0 p-5">
<h4 className="text-sm font-semibold text-white mb-1">Smart Scanner</h4>
<p className="text-[10px] text-slate-400">AI-based QR detection</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 py-24 relative z-10" id="pricing">
<div className="mb-20 text-center max-w-2xl mx-auto">
<span className="text-cyan-500 font-mono text-xs font-semibold tracking-widest uppercase mb-4 block">02. Subscription</span>
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">
                Total <span className="text-cyan-400">Privacy</span>
</h2>
<p className="text-lg text-slate-400 leading-relaxed">
                Choose the level of protection that fits your digital life. No hidden fees. Cancel anytime.
            </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">

<div className="relative p-6 rounded-2xl bg-[#0b1221] border border-white/5 hover:border-white/10 transition-colors group">
<div className="w-12 h-12 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center mb-6">
<iconify-icon className="text-white text-2xl" icon="solar:shield-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Basic</h3>
<p className="text-sm text-slate-400 mb-6">Essential scanning for casual users.</p>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-3xl font-semibold text-white">$0</span>
<span className="text-sm text-slate-500">/forever</span>
</div>
<button className="w-full py-3 rounded-lg border border-white/10 bg-white/[0.03] hover:bg-white/10 text-white text-sm font-medium transition-all mb-8">
                    Get Started
                </button>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-slate-400">
<iconify-icon className="text-slate-600 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span>Manual Scan</span>
</li>
</ul>
</div>

<div className="relative p-6 rounded-2xl bg-[#0b1221] border border-cyan-500/30 hover:border-cyan-500/50 transition-colors group overflow-hidden lg:-mt-6 lg:mb-6 shadow-[0_0_50px_rgba(34,211,238,0.1)]">

<div className="absolute top-0 right-0 m-2 px-3 py-1 bg-cyan-900/30 border border-cyan-500/20 rounded-full backdrop-blur-md">
<span className="text-[10px] font-semibold tracking-wider uppercase text-cyan-300">Recommended</span>
</div>
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-900/40 to-black border border-cyan-500/30 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
<iconify-icon className="text-cyan-300 text-2xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Pro Shield</h3>
<p className="text-sm text-slate-400 mb-6">Real-time monitoring and defense.</p>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-3xl font-semibold text-white">$4.99</span>
<span className="text-sm text-slate-500">/month</span>
</div>
<button className="w-full py-3 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-semibold transition-all mb-8 shadow-lg shadow-cyan-900/20">
                    Start Free Trial
                </button>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-slate-300">
<iconify-icon className="text-cyan-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span>Real-time Threat Detection</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<iconify-icon className="text-cyan-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span>Dark Web Monitoring</span>
</li>
</ul>
</div>

<div className="relative p-6 rounded-2xl bg-[#0b1221] border border-white/5 hover:border-white/10 transition-colors group">
<div className="w-12 h-12 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center mb-6">
<iconify-icon className="text-white text-2xl" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Family</h3>
<p className="text-sm text-slate-400 mb-6">Protection for the household.</p>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-3xl font-semibold text-white">$12.99</span>
<span className="text-sm text-slate-500">/month</span>
</div>
<button className="w-full py-3 rounded-lg border border-white/10 bg-white/[0.03] hover:bg-white/10 text-white text-sm font-medium transition-all mb-8">
                    Contact Sales
                </button>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-slate-400">
<iconify-icon className="text-slate-600 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span>Up to 5 Devices</span>
</li>
</ul>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-black pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-cyan-900 rounded flex items-center justify-center">
<iconify-icon className="text-cyan-100 text-sm" icon="solar:shield-check-linear"></iconify-icon>
</div>
<span className="font-semibold text-lg tracking-tight text-white">CyberShield</span>
</div>
<div className="flex gap-8">
<a className="text-sm text-slate-500 hover:text-white transition-colors" href="#">Privacy</a>
<a className="text-sm text-slate-500 hover:text-white transition-colors" href="#">Terms</a>
<a className="text-sm text-slate-500 hover:text-white transition-colors" href="#">Support</a>
</div>
</div>
<div className="mt-8 text-center text-xs text-slate-700">
                © 2024 CyberShield Security Inc.
            </div>
</div>
</footer>



    </>
  );
}
