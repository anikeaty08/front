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



        // Simple Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass-panel border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 tracking-tight text-lg font-medium">
<iconify-icon className="text-cyan-400 text-xl" icon="solar:wind-linear"></iconify-icon>
<span>AEROCITY<span className="text-cyan-400">.GRID</span></span>
</div>
<div className="hidden md:flex gap-8 text-sm text-slate-400 font-light">
<a className="hover:text-cyan-400 transition-colors" href="#vawt">Technology</a>
<a className="hover:text-cyan-400 transition-colors" href="#integration">Smart Grid</a>
<a className="hover:text-cyan-400 transition-colors" href="#charging">Wireless EV</a>
<a className="hover:text-cyan-400 transition-colors" href="#vision">Vision</a>
</div>
<a className="px-4 py-2 rounded-full border border-cyan-500/30 text-cyan-400 text-xs hover:bg-cyan-500/10 transition-all uppercase tracking-widest" href="#contact">
                Connect
            </a>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] pointer-events-none"></div>

<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] animate-pulse"></div>
<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] animate-pulse delay-1000"></div>
<div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
<div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-300 text-xs tracking-widest uppercase">
<span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                Next Gen Urban Power
            </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-6 text-white leading-tight">
                Future Energy for <br/>
<span className="text-gradient neon-text-cyan">Smart Cities</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
                Vertical Axis Wind Turbines integrated into the urban fabric. Powering the grid, illuminating streets, and wirelessly charging the vehicles of tomorrow.
            </p>
<div className="flex flex-col md:flex-row gap-4 justify-center items-center">
<button className="px-8 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-medium transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center gap-2">
                    Explore Concept <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="px-8 py-3 rounded-full glass-panel hover:bg-white/5 transition-all flex items-center gap-2">
<iconify-icon className="text-xl" icon="solar:play-circle-linear"></iconify-icon> Watch Simulation
                </button>
</div>
</div>

<div className="absolute bottom-0 w-full flex justify-center opacity-30 pointer-events-none">
<svg className="text-cyan-500/20" height="200" viewbox="0 0 400 200" width="400">
<path d="M0,200 Q200,100 400,200" fill="none" stroke="currentColor" strokeWidth="2"></path>
<path d="M50,200 Q200,120 350,200" fill="none" opacity="0.5" stroke="currentColor" strokeWidth="1"></path>
</svg>
</div>
</section>

<section className="min-h-screen py-24 px-6 relative flex items-center" id="vawt">
<div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
<div className="reveal">
<h2 className="text-sm font-medium text-cyan-400 tracking-widest uppercase mb-4">Core Technology</h2>
<h3 className="text-4xl font-medium tracking-tight mb-6">Vertical Axis Wind Turbine</h3>
<p className="text-slate-400 font-light leading-relaxed mb-6">
                    Unlike traditional horizontal turbines, VAWTs catch wind from all directions without needing to reorient. Their omni-directional design and silent operation make them perfect for dense urban environments.
                </p>
<ul className="space-y-4 text-slate-300 font-light">
<li className="flex items-center gap-3">
<iconify-icon className="text-cyan-400 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                        Operates in turbulent city winds
                    </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-cyan-400 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                        Low noise acoustic signature
                    </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-cyan-400 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                        Bird &amp; bat friendly design
                    </li>
</ul>
</div>

<div className="relative h-96 w-full glass-panel rounded-2xl flex items-center justify-center reveal overflow-hidden neon-border-cyan">
<div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent"></div>

<div className="relative w-32 h-64 turbine-spin">

<div className="absolute left-1/2 top-0 bottom-0 w-1 bg-slate-500 -translate-x-1/2"></div>

<div className="absolute top-0 bottom-0 w-16 border-2 border-cyan-400 rounded-l-[100%] left-0 bg-cyan-400/10" style={{transform: 'rotateY(0deg) translateZ(20px)'}}></div>

<div className="absolute top-0 bottom-0 w-16 border-2 border-cyan-400 rounded-l-[100%] left-0 bg-cyan-400/10" style={{transform: 'rotateY(120deg) translateZ(20px)'}}></div>

<div className="absolute top-0 bottom-0 w-16 border-2 border-cyan-400 rounded-l-[100%] left-0 bg-cyan-400/10" style={{transform: 'rotateY(240deg) translateZ(20px)'}}></div>
</div>

<div className="absolute w-full h-full pointer-events-none">
<div className="absolute top-1/4 left-0 w-10 h-0.5 bg-white/20 animate-pulse" style={{animationDuration: '1s'}}></div>
<div className="absolute top-2/4 right-10 w-16 h-0.5 bg-white/20 animate-pulse" style={{animationDuration: '1.5s'}}></div>
<div className="absolute bottom-1/4 left-20 w-8 h-0.5 bg-white/20 animate-pulse" style={{animationDuration: '2s'}}></div>
</div>
</div>
</div>
</section>

<section className="min-h-screen py-24 px-6 bg-neutral-900/50" id="integration">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4">Integrated Urban Grid</h2>
<p className="text-slate-400 font-light max-w-2xl mx-auto">Energy harvested from street-level VAWTs flows directly into the localized smart grid.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-2xl hover:border-cyan-500/50 transition-colors reveal group">
<div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-cyan-400 text-2xl" icon="solar:smart-home-angle-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3">Smart Buildings</h3>
<p className="text-slate-500 font-light text-sm">Direct power supply to IoT sensors, HVAC automation, and localized battery storage systems.</p>
<div className="mt-4 h-0.5 w-full bg-slate-800 overflow-hidden">
<div className="h-full w-1/2 bg-cyan-500/50 animate-[dash_2s_linear_infinite]"></div>
</div>
</div>

<div className="glass-panel p-8 rounded-2xl hover:border-cyan-500/50 transition-colors reveal group delay-100">
<div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-cyan-400 text-2xl" icon="solar:traffic-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3">Adaptive Infrastructure</h3>
<p className="text-slate-500 font-light text-sm">Powering AI-driven traffic lights and autonomous surveillance drones for city safety.</p>
</div>

<div className="glass-panel p-8 rounded-2xl hover:border-cyan-500/50 transition-colors reveal group delay-200">
<div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-cyan-400 text-2xl" icon="solar:lightbulb-bolt-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3">Street Illumination</h3>
<p className="text-slate-500 font-light text-sm">Self-sustaining LED arrays that dim when streets are empty to conserve harvested energy.</p>
</div>
</div>
</div>
</section>

<section className="min-h-screen py-24 px-6 relative overflow-hidden flex items-center" id="charging">

<div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/10 to-transparent"></div>
<div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">

<div className="relative h-[400px] flex items-center justify-center reveal">

<div className="absolute bottom-10 w-64 h-24 bg-slate-800 rounded-[100%] border border-cyan-500/30 charging-pulse flex items-center justify-center transform rotate-x-60">
<div className="w-full h-full absolute inset-0 rounded-[100%] bg-cyan-500/10 blur-xl"></div>
</div>

<div className="absolute bottom-20 w-32 h-40 overflow-hidden flex justify-center">
<div className="w-20 h-2 bg-cyan-400/50 rounded-full energy-wave absolute bottom-0 blur-md"></div>
<div className="w-16 h-2 bg-cyan-400/80 rounded-full energy-wave absolute bottom-0 blur-md" style={{animationDelay: '0.5s'}}></div>
<div className="w-24 h-2 bg-cyan-400/30 rounded-full energy-wave absolute bottom-0 blur-md" style={{animationDelay: '1s'}}></div>
</div>

<div className="absolute bottom-24 floating">
<svg className="text-slate-200 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]" height="100" viewbox="0 0 280 100" width="280">

<path d="M10,70 L40,70 L55,40 L190,35 L230,50 L270,60 L270,70 L260,85 L20,85 Z" fill="#1e293b" stroke="#475569" strokeWidth="1.5"></path>

<path d="M60,42 L120,42 L120,65 L50,65 Z" fill="#0f172a" stroke="none"></path>
<path d="M130,42 L185,38 L220,52 L220,65 L130,65 Z" fill="#0f172a" stroke="none"></path>

<circle cx="60" cy="85" fill="#0f172a" r="14" stroke="#334155" strokeWidth="2"></circle>
<circle cx="230" cy="85" fill="#0f172a" r="14" stroke="#334155" strokeWidth="2"></circle>

<rect className="blur-[1px]" fill="#ef4444" height="6" width="2" x="268" y="62"></rect>
<rect className="blur-[2px]" fill="#22d3ee" height="6" width="4" x="10" y="72"></rect>
</svg>

<div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur px-3 py-1 rounded border border-cyan-500/30 flex items-center gap-2">
<iconify-icon className="text-cyan-400" icon="solar:bolt-linear"></iconify-icon>
<span className="text-xs font-mono text-cyan-400">CHARGING... 87%</span>
</div>
</div>
</div>

<div className="reveal">
<h2 className="text-4xl font-medium tracking-tight mb-6">Inductive Wireless Charging</h2>
<p className="text-slate-400 font-light mb-8 leading-relaxed">
                    Park and power up. Our smart road infrastructure embeds magnetic resonance coils directly into parking bays. Energy harvested by local VAWTs is transferred wirelessly to EV batteries with 94% efficiency.
                </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center border border-slate-700">
<iconify-icon className="text-cyan-400 text-xl" icon="solar:magnet-linear"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium">Magnetic Resonance</h4>
<p className="text-xs text-slate-500 mt-1">Safe, high-speed energy transfer across air gaps.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center border border-slate-700">
<iconify-icon className="text-cyan-400 text-xl" icon="solar:smartphone-linear"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium">App Integration</h4>
<p className="text-xs text-slate-500 mt-1">Monitor charge levels and payment via city app.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-black">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-20 reveal">
<h2 className="text-3xl font-medium tracking-tight">The Ecosystem Flow</h2>
<p className="text-slate-500 font-light mt-2">From wind capture to vehicle propulsion</p>
</div>
<div className="relative">

<div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-800 -translate-y-1/2 z-0"></div>
<div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 -translate-y-1/2 z-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50 animate-pulse"></div>
<div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">

<div className="flex flex-col items-center text-center reveal delay-75">
<div className="w-16 h-16 rounded-full bg-neutral-900 border border-cyan-500/50 flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.2)] mb-4">
<iconify-icon className="text-2xl text-white" icon="solar:wind-linear"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-cyan-400">Wind</h4>
<p className="text-xs text-slate-500 mt-1">Kinetic Energy</p>
</div>

<div className="flex flex-col items-center text-center reveal delay-150">
<div className="w-16 h-16 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center mb-4">
<iconify-icon className="text-2xl text-slate-300" icon="solar:settings-linear"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-white">Turbine</h4>
<p className="text-xs text-slate-500 mt-1">Generator Rotation</p>
</div>

<div className="flex flex-col items-center text-center reveal delay-300">
<div className="w-16 h-16 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center mb-4">
<iconify-icon className="text-2xl text-slate-300" icon="solar:server-square-linear"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-white">Smart Grid</h4>
<p className="text-xs text-slate-500 mt-1">Distribution &amp; Storage</p>
</div>

<div className="flex flex-col items-center text-center reveal delay-500">
<div className="w-16 h-16 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center mb-4">
<iconify-icon className="text-2xl text-slate-300" icon="solar:city-linear"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-white">City Hub</h4>
<p className="text-xs text-slate-500 mt-1">Infrastructure Power</p>
</div>

<div className="flex flex-col items-center text-center reveal delay-700">
<div className="w-16 h-16 rounded-full bg-neutral-900 border border-cyan-500/50 flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.2)] mb-4">
<iconify-icon className="text-2xl text-cyan-400" icon="solar:electric-refueling-linear"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-cyan-400">Wireless EV</h4>
<p className="text-xs text-slate-500 mt-1">Inductive Charging</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative">
<div className="max-w-7xl mx-auto">
<div className="mb-12 reveal">
<h2 className="text-4xl font-medium tracking-tight mb-4">System Advantages</h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="glass-panel p-6 rounded-xl hover:bg-white/5 transition-all cursor-default reveal">
<iconify-icon className="text-emerald-400 text-3xl mb-4" icon="solar:leaf-linear"></iconify-icon>
<h3 className="text-lg font-medium text-white mb-2">Zero Emissions</h3>
<p className="text-xs text-slate-400 font-light leading-relaxed">100% renewable energy source reducing the city's carbon footprint significantly.</p>
</div>

<div className="glass-panel p-6 rounded-xl hover:bg-white/5 transition-all cursor-default reveal delay-100">
<iconify-icon className="text-blue-400 text-3xl mb-4" icon="solar:maximize-square-linear"></iconify-icon>
<h3 className="text-lg font-medium text-white mb-2">Space Efficient</h3>
<p className="text-xs text-slate-400 font-light leading-relaxed">Vertical design occupies minimal ground footprint, allowing installation on medians and rooftops.</p>
</div>

<div className="glass-panel p-6 rounded-xl hover:bg-white/5 transition-all cursor-default reveal delay-200">
<iconify-icon className="text-purple-400 text-3xl mb-4" icon="solar:wifi-router-linear"></iconify-icon>
<h3 className="text-lg font-medium text-white mb-2">IoT Connected</h3>
<p className="text-xs text-slate-400 font-light leading-relaxed">Real-time data transmission for predictive maintenance and load balancing.</p>
</div>

<div className="glass-panel p-6 rounded-xl hover:bg-white/5 transition-all cursor-default reveal delay-300">
<iconify-icon className="text-amber-400 text-3xl mb-4" icon="solar:wallet-linear"></iconify-icon>
<h3 className="text-lg font-medium text-white mb-2">Cost Effective</h3>
<p className="text-xs text-slate-400 font-light leading-relaxed">Lower maintenance costs than horizontal turbines and generates revenue via EV charging.</p>
</div>
</div>
</div>
</section>

<section className="min-h-screen py-24 px-6 flex items-center relative overflow-hidden" id="vision">

<div className="absolute bottom-0 left-0 right-0 h-1/2 opacity-20 pointer-events-none">
<div className="w-20 h-40 bg-slate-800 absolute bottom-0 left-10 rounded-t-lg"></div>
<div className="w-32 h-64 bg-slate-700 absolute bottom-0 left-36 rounded-t-lg"></div>
<div className="w-24 h-52 bg-slate-800 absolute bottom-0 left-72 rounded-t-lg"></div>
<div className="w-40 h-80 bg-slate-700 absolute bottom-0 right-20 rounded-t-lg"></div>
<div className="w-20 h-40 bg-slate-800 absolute bottom-0 right-64 rounded-t-lg"></div>
</div>
<div className="max-w-4xl mx-auto text-center relative z-10 reveal">
<div className="inline-block mb-6">
<iconify-icon className="text-4xl text-cyan-400 floating" icon="solar:rocket-linear"></iconify-icon>
</div>
<h2 className="text-5xl md:text-7xl font-medium tracking-tight mb-8">The 2050 Vision</h2>
<p className="text-xl text-slate-400 font-light mb-12 max-w-2xl mx-auto">
                A fully autonomous ecosystem where energy is abundant, clean, and shared wirelessly. Drones patrol the skies, EVs charge while driving, and the city breathes through wind.
            </p>

<div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-12">
<div>
<div className="text-3xl font-mono text-white mb-1">100%</div>
<div className="text-xs text-cyan-400 uppercase tracking-widest">Renewable</div>
</div>
<div>
<div className="text-3xl font-mono text-white mb-1">0g</div>
<div className="text-xs text-cyan-400 uppercase tracking-widest">Carbon Output</div>
</div>
<div>
<div className="text-3xl font-mono text-white mb-1">∞</div>
<div className="text-xs text-cyan-400 uppercase tracking-widest">Possibility</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-gradient-to-t from-cyan-900/20 to-black text-center border-t border-white/5">
<div className="max-w-3xl mx-auto reveal">
<h2 className="text-3xl font-medium tracking-tight mb-6">Engineered for Tomorrow</h2>
<p className="text-slate-400 font-light mb-10">
                This project represents not just a power plant, but a philosophy of sustainable engineering. Built by creative minds for a cleaner planet.
            </p>
<div className="flex justify-center gap-6 mb-16">
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition-all" href="#">
<iconify-icon className="text-xl" icon="solar:brand-github-linear"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition-all" href="#">
<iconify-icon className="text-xl" icon="solar:brand-instagram-linear"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition-all" href="#">
<iconify-icon className="text-xl" icon="solar:link-linear"></iconify-icon>
</a>
</div>
<footer className="text-xs text-slate-600 uppercase tracking-widest">
                © 2023 AeroCity Project. Designed by Engineering Students.
            </footer>
</div>
</section>


    </>
  );
}
