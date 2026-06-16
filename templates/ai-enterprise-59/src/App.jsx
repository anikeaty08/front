import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Space Grotesk', 'sans-serif'],
},
colors: {
obsidian: '#050505',
charcoal: '#0A0A0A',
primary: '#f97316', // Orange-500
},
animation: {
'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'scan': 'scan 4s linear infinite',
},
keyframes: {
scan: {
'0%': { top: '0%' },
'100%': { top: '100%' },
}
}
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateValues = [0, 6, 12, 45, 90];
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = { transform: `perspective(1000px) rotateX(${value}deg)` };
rotateYUtilities[`.rotate-y-${value}`] = { transform: `perspective(1000px) rotateY(${value}deg)` };
if(value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = { transform: `perspective(1000px) rotateX(-${value}deg)` };
rotateYUtilities[`.-rotate-y-${value}`] = { transform: `perspective(1000px) rotateY(-${value}deg)` };
}
});
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
'.perspective-1000': { perspective: '1000px' },
'.transform-style-3d': { transformStyle: 'preserve-3d' }
});
}
]
};

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none z-0">
<div className="absolute inset-0 grid-pattern opacity-40"></div>

<div className="absolute top-0 left-0 w-full h-[60vh] overflow-hidden opacity-[0.04] pointer-events-none font-mono text-[10px] leading-3 break-all select-none text-orange-200">
            0101INITIALIZING_CORE_SYSTEMS0101011100101ECHELON_ENGINEERING01010100101SCALABLE_ARCHITECTURES01010101INTELLIGENCE_LAYER01010101010101AI_MODEL_TRAINING0101011100101DATA_PIPELINE01010100101OPTIMIZATION010101SECURE01010101GLOBAL_NODES01010101010101ECHELON_SYSTEMS0101011100101VISION_TO_SCALE01010100101FAST010101SECURE01010101ADAPTIVE01010101010101
        </div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-orange-500/5 blur-[120px] rounded-full opacity-20 animate-pulse-slow"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#020204]/80 backdrop-blur-md">
<div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-12">
<a className="group flex items-center gap-2" href="#">
<span className="font-display font-medium text-lg tracking-tight text-white group-hover:text-orange-500 transition-colors">ECHELON</span>
</a>
<div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wide text-slate-500 uppercase">
<a className="hover:text-orange-500 transition-colors" href="#vision">Vision</a>
<a className="hover:text-orange-500 transition-colors" href="#modules">Modules</a>
<a className="hover:text-orange-500 transition-colors" href="#lab">The Lab</a>
</div>
</div>
<div className="flex items-center gap-6">
<a className="flex items-center gap-2 pl-5 pr-4 py-2 border border-white/10 rounded-full hover:border-orange-500/50 hover:bg-orange-950/20 transition-all group bg-[#050505]" href="#contact">
<span className="text-xs font-medium text-slate-300 group-hover:text-orange-500">ACCESS SYSTEM</span>
<iconify-icon className="text-slate-500 group-hover:text-orange-500 transition-colors" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</nav>

<main className="relative z-10 pt-32 pb-20 border-b border-white/5">
<div className="max-w-[1400px] mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

<div className="lg:col-span-7 flex flex-col justify-between min-h-[60vh]">
<div>
<div className="flex items-center gap-3 px-4 py-1.5 w-fit rounded-full border border-orange-900/30 bg-orange-950/10 backdrop-blur-sm mb-8">
<div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"></div>
<span className="text-xs font-mono uppercase tracking-widest text-orange-200/70">AI · ML · GIS · Systems</span>
</div>
<h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[0.95] mb-8 text-white text-glow">
                            Engineering Intelligence<br/>
<span className="text-slate-600">For The Next Decade</span>
</h1>
<div className="max-w-xl">
<p className="text-slate-500 text-sm md:text-lg font-light leading-relaxed mb-8">
                                We design adaptive intelligence, spatial reasoning, and scalable architecture. Systems that don't just process data—they understand the world.
                            </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-black text-xs font-medium tracking-wide hover:bg-orange-50 transition-colors group" href="#vision">
                                    EXPLORE VISION
                                    <iconify-icon className="ml-2 text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center px-8 py-3.5 border border-white/20 text-slate-300 text-xs font-medium tracking-wide hover:border-orange-500/50 hover:text-orange-500 transition-colors" href="#contact">
                                    START CONVERSATION
                                </a>
</div>
</div>
</div>
<div className="mt-20">
<div className="flex items-center gap-2 mb-2 text-white">
<iconify-icon className="text-orange-500" icon="solar:infinity-linear" width="32"></iconify-icon>
<span className="text-3xl md:text-4xl font-display font-medium tracking-tight">Limitless Scale</span>
</div>
<div className="text-[10px] font-mono text-slate-600 uppercase tracking-wider">
                            // Enterprise Grade Infrastructure
                        </div>
</div>
</div>

<div className="lg:col-span-5 relative hidden lg:flex items-center justify-center">
<div className="globe-container relative w-[450px] h-[450px] flex items-center justify-center">

<div className="absolute inset-0 border border-white/5 rounded-full"></div>
<div className="absolute inset-12 border border-dashed border-white/5 rounded-full opacity-50"></div>

<div className="globe-axis w-[320px] h-[320px] relative transform-style-3d">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-orange-600/10 blur-[60px] rounded-full"></div>

<div className="globe-ring inset-0 rotate-y-0"></div>
<div className="globe-ring inset-0 rotate-y-45"></div>
<div className="globe-ring inset-0 rotate-y-90"></div>
<div className="globe-ring inset-0 -rotate-y-45"></div>

<div className="globe-ring w-[300px] h-[300px] top-[10px] left-[10px] border-white/5 rotate-x-90"></div>
<div className="globe-ring w-[240px] h-[240px] top-[40px] left-[40px] border-white/5 rotate-x-90"></div>
<div className="globe-ring w-[160px] h-[160px] top-[80px] left-[80px] border-white/5 rotate-x-90"></div>

<div className="absolute top-0 left-1/2 w-1.5 h-1.5 bg-orange-500 rounded-full shadow-[0_0_10px_orange] translate-z-40"></div>
<div className="absolute bottom-10 right-10 w-1 h-1 bg-white rounded-full translate-z-20"></div>
<div className="absolute top-1/2 left-10 w-1 h-1 bg-orange-400 rounded-full translate-z-30"></div>
</div>

<div className="absolute inset-[65px] rounded-full overflow-hidden pointer-events-none opacity-50 mix-blend-screen">
<div className="absolute left-0 w-full h-[2px] bg-orange-500/80 shadow-[0_0_20px_rgba(249,115,22,0.8)] scan-beam"></div>
</div>

<div className="absolute top-10 right-0 bg-[#0A0A0A]/90 backdrop-blur border border-white/10 p-3 rounded-sm animate-[pulse_4s_infinite]">
<div className="flex items-center gap-2">
<iconify-icon className="text-orange-500" icon="solar:satellite-linear"></iconify-icon>
<span className="text-[9px] font-mono text-white tracking-widest uppercase">Geo_Spatial</span>
</div>
</div>
<div className="absolute bottom-20 left-0 bg-[#0A0A0A]/90 backdrop-blur border border-white/10 p-3 rounded-sm">
<div className="flex items-center gap-2">
<iconify-icon className="text-orange-500" icon="solar:cpu-linear"></iconify-icon>
<span className="text-[9px] font-mono text-white tracking-widest uppercase">Neural_Net</span>
</div>
</div>
</div>

<div className="absolute bottom-0 right-0 p-6 border-l border-t border-white/5 bg-[#050505]/80 backdrop-blur font-mono text-[10px] text-slate-500 text-right">
<div className="mb-1">const geo_cluster = new SpatialNode({</div>
<div className="mb-1 pl-2 text-orange-400">coordinates: [37.77, -122.41],</div>
<div className="mb-1 pl-2">inference: 'realtime'</div>
<div>});</div>
</div>
</div>
</div>
</div>
</main>

<section className="relative z-10 bg-obsidian" id="modules">
<div className="max-w-[1400px] mx-auto">

<div className="px-6 py-6 border-b border-white/5 flex justify-between items-center">
<span className="text-[10px] font-mono text-slate-600">[ 01 / 03 ]</span>
<span className="text-[10px] font-mono text-slate-600 uppercase">System Modules</span>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/5 border-b border-white/5">

<div className="group p-8 md:p-12 hover:bg-orange-950/[0.03] transition-colors duration-500">
<div className="mb-20 flex justify-between items-start">
<div className="p-3 border border-white/10 rounded-lg bg-white/5 text-slate-300 group-hover:border-orange-500/50 group-hover:text-orange-500 transition-colors">
<iconify-icon icon="solar:brain-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xs font-mono text-slate-600">/ 01</h3>
</div>
<h4 className="font-display text-xl text-white font-medium tracking-tight mb-3">Artificial Intelligence</h4>
<p className="text-xs text-slate-500 leading-relaxed max-w-xs">
                        Predictive models, decision engines, and RAG systems designed to automate complex cognitive tasks at scale.
                    </p>
</div>

<div className="group p-8 md:p-12 hover:bg-orange-950/[0.03] transition-colors duration-500">
<div className="mb-20 flex justify-between items-start">
<div className="p-3 border border-white/10 rounded-lg bg-white/5 text-slate-300 group-hover:border-orange-500/50 group-hover:text-orange-500 transition-colors">
<iconify-icon icon="solar:layers-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xs font-mono text-slate-600">/ 02</h3>
</div>
<h4 className="font-display text-xl text-white font-medium tracking-tight mb-3">Machine Learning</h4>
<p className="text-xs text-slate-500 leading-relaxed max-w-xs">
                        Robust training pipelines and real-time inference engines. We build systems that learn and adapt.
                    </p>
</div>

<div className="group p-8 md:p-12 hover:bg-orange-950/[0.03] transition-colors duration-500">
<div className="mb-20 flex justify-between items-start">
<div className="p-3 border border-white/10 rounded-lg bg-white/5 text-slate-300 group-hover:border-orange-500/50 group-hover:text-orange-500 transition-colors">
<iconify-icon icon="solar:earth-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xs font-mono text-slate-600">/ 03</h3>
</div>
<h4 className="font-display text-xl text-white font-medium tracking-tight mb-3">GIS &amp; Spatial</h4>
<p className="text-xs text-slate-500 leading-relaxed max-w-xs">
                        Advanced mapping systems and geo-analytics. Visualize data in the context of the physical world.
                    </p>
</div>
</div>
</div>
</section>

<section className="relative z-10 border-b border-white/5" id="vision">
<div className="max-w-[1400px] mx-auto">
<div className="px-6 py-4 border-b border-white/5 flex justify-between items-center bg-[#0a0a0a]">
<span className="text-[10px] font-mono text-slate-600">[ 02 / 03 ]</span>
<span className="text-[10px] font-mono text-slate-600 uppercase">Process Architecture</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">

<div className="p-8 md:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/5">
<div className="mb-12">
<h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight mb-6 text-white">
                            From Vision<br/>
<span className="text-slate-600">To Global Scale</span>
</h2>
<p className="text-sm text-slate-500 leading-relaxed max-w-md">
                            Companies don't fail because of ideas. They fail because systems don't scale. We bridge the gap between abstract requirements and concrete, resilient infrastructure.
                        </p>
</div>

<div className="space-y-6 relative">
<div className="absolute left-[11px] top-2 bottom-2 w-[1px] bg-white/10"></div>
<div className="relative flex items-center gap-4 group">
<div className="w-6 h-6 rounded-full border border-white/20 bg-[#050505] flex items-center justify-center z-10 group-hover:border-orange-500 group-hover:bg-orange-500 transition-all">
<div className="w-1.5 h-1.5 bg-white rounded-full"></div>
</div>
<div>
<h4 className="text-white group-hover:text-orange-400 text-xs font-medium tracking-wide transition-colors">CLARITY &amp; ARCHITECTURE</h4>
<p className="text-[10px] text-slate-500 font-mono mt-0.5">System design · Data strategy</p>
</div>
</div>
<div className="relative flex items-center gap-4 group">
<div className="w-6 h-6 rounded-full border border-white/20 bg-[#050505] flex items-center justify-center z-10 group-hover:border-orange-500 group-hover:bg-orange-500 transition-all">
<div className="w-1.5 h-1.5 bg-white rounded-full"></div>
</div>
<div>
<h4 className="text-white group-hover:text-orange-400 text-xs font-medium tracking-wide transition-colors">EXECUTION &amp; BUILD</h4>
<p className="text-[10px] text-slate-500 font-mono mt-0.5">Iterative development · Clusters</p>
</div>
</div>
<div className="relative flex items-center gap-4 group">
<div className="w-6 h-6 rounded-full border border-white/20 bg-[#050505] flex items-center justify-center z-10 group-hover:border-orange-500 group-hover:bg-orange-500 transition-all">
<div className="w-1.5 h-1.5 bg-white rounded-full"></div>
</div>
<div>
<h4 className="text-white group-hover:text-orange-400 text-xs font-medium tracking-wide transition-colors">OPTIMIZATION &amp; SCALE</h4>
<p className="text-[10px] text-slate-500 font-mono mt-0.5">Global deployment · Reliability</p>
</div>
</div>
</div>
</div>

<div className="relative bg-obsidian flex items-center justify-center p-8 overflow-hidden group">
<div className="absolute inset-0 grid-pattern opacity-20"></div>

<div className="relative w-full max-w-md perspective-1000">
<div className="relative bg-[#0A0A0A] border border-white/10 rounded-sm p-6 shadow-2xl transform rotate-y-6 rotate-x-6 group-hover:rotate-y-0 group-hover:rotate-x-0 transition-transform duration-700 ease-out">

<div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
<div className="flex items-center gap-3">
<div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
<span className="text-xs font-mono text-white tracking-widest uppercase">System_Status</span>
</div>
<span className="text-[10px] font-mono text-slate-600">v.2.0.4</span>
</div>

<div className="grid grid-cols-2 gap-4 mb-6">
<div className="bg-white/5 p-4 rounded border border-white/5">
<span className="text-[10px] font-mono text-slate-500 block mb-1">LATENCY</span>
<span className="text-xl text-white font-display">12ms</span>
</div>
<div className="bg-white/5 p-4 rounded border border-white/5">
<span className="text-[10px] font-mono text-slate-500 block mb-1">UPTIME</span>
<span className="text-xl text-white font-display">99.99%</span>
</div>
</div>

<div className="h-24 flex items-end justify-between gap-1 mb-6 opacity-80">
<div className="w-full bg-white/10 h-[40%] rounded-sm"></div>
<div className="w-full bg-white/20 h-[70%] rounded-sm"></div>
<div className="w-full bg-orange-500/50 h-[50%] rounded-sm"></div>
<div className="w-full bg-white/40 h-[90%] rounded-sm"></div>
<div className="w-full bg-orange-500/80 h-[65%] rounded-sm"></div>
<div className="w-full bg-orange-500 h-[85%] rounded-sm"></div>
</div>
<div className="pt-4 border-t border-white/5 flex justify-between items-center">
<span className="text-[9px] font-mono text-slate-500 uppercase">Architecture: Federated</span>
<iconify-icon className="text-slate-400" icon="solar:server-square-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 border-b border-white/5 bg-[#030303]" id="contact">
<div className="max-w-[1400px] mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12">

<div className="lg:col-span-5 p-8 md:p-16 flex flex-col justify-center border-r border-white/5">
<h2 className="font-display text-3xl font-medium tracking-tight mb-6 text-white">
                        Project<br/>Intelligence Scanner
                    </h2>
<p className="text-xs text-slate-500 leading-relaxed mb-8">
                        Initiate a system-level analysis. Tell us about your architecture bottleneck or intelligence gap. We deliver insight within 48 hours.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<span className="text-xs font-mono text-orange-500">01 /</span>
<span className="text-xs text-slate-300">Healthcare Data Silos</span>
</li>
<li className="flex items-start gap-3">
<span className="text-xs font-mono text-orange-500">02 /</span>
<span className="text-xs text-slate-300">Fintech Fraud Detection</span>
</li>
<li className="flex items-start gap-3">
<span className="text-xs font-mono text-orange-500">03 /</span>
<span className="text-xs text-slate-300">Logistics Optimization</span>
</li>
</ul>
</div>

<div className="lg:col-span-7 bg-[#050505] relative overflow-hidden flex items-center justify-center p-8 md:p-16">
<div className="absolute inset-0 grid-pattern opacity-10"></div>

<div className="relative bg-charcoal text-slate-200 border border-white/10 rounded-sm shadow-2xl max-w-md w-full">

<div className="bg-[#0f0f0f] px-4 py-3 border-b border-white/5 flex justify-between items-center">
<div className="flex gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest">Input Sequence</span>
</div>

<div className="p-6 space-y-5 relative">

<div className="absolute top-0 left-0 w-full h-[1px] bg-orange-400/50 shadow-[0_0_10px_rgba(249,115,22,0.5)] z-0 animate-scan pointer-events-none"></div>
<div className="space-y-1">
<label className="text-[9px] font-mono text-slate-500 uppercase">Target Industry</label>
<div className="flex items-center gap-2 bg-[#050505] border border-white/10 p-2.5 rounded hover:border-orange-500/40 transition-colors">
<iconify-icon className="text-slate-500" icon="solar:buildings-linear"></iconify-icon>
<input className="bg-transparent border-none text-xs text-white focus:outline-none w-full placeholder:text-slate-700" placeholder="e.g. Healthcare, Fintech..." type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-[9px] font-mono text-slate-500 uppercase">Problem Parameters</label>
<div className="flex items-start gap-2 bg-[#050505] border border-white/10 p-2.5 rounded hover:border-orange-500/40 transition-colors h-20">
<iconify-icon className="text-slate-500 mt-0.5" icon="solar:code-file-linear"></iconify-icon>
<textarea className="bg-transparent border-none text-xs text-white focus:outline-none w-full h-full resize-none placeholder:text-slate-700" placeholder="Describe system load or logic gap..."></textarea>
</div>
</div>
<div className="space-y-1">
<label className="text-[9px] font-mono text-slate-500 uppercase">Contact Node</label>
<div className="flex items-center gap-2 bg-[#050505] border border-white/10 p-2.5 rounded hover:border-orange-500/40 transition-colors">
<iconify-icon className="text-slate-500" icon="solar:letter-linear"></iconify-icon>
<input className="bg-transparent border-none text-xs text-white focus:outline-none w-full placeholder:text-slate-700" placeholder="user@enterprise.com" type="email"/>
</div>
</div>
<button className="w-full bg-white text-black text-[10px] font-bold tracking-widest uppercase py-3 hover:bg-orange-500 hover:text-white transition-colors flex items-center justify-center gap-2">
                                Run Analysis
                                <iconify-icon icon="solar:round-arrow-right-linear" width="14"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-white/5 bg-obsidian py-16">
<div className="max-w-[1400px] mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<h3 className="text-sm font-medium text-slate-400">TRUSTED INFRASTRUCTURE <br/> <span className="text-white">GLOBAL DEPLOYMENT</span></h3>
<span className="text-[10px] font-mono text-slate-600 uppercase">System Integrity 100%</span>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 border border-white/5">
<div className="bg-[#050505] p-8 flex flex-col items-center justify-center text-center group">
<span className="block text-2xl md:text-3xl font-display text-white mb-2 group-hover:text-orange-500 group-hover:text-glow transition-all">99.99%</span>
<span className="text-[10px] text-slate-500 font-mono uppercase">Uptime Guarantee</span>
</div>
<div className="bg-[#050505] p-8 flex flex-col items-center justify-center text-center group">
<span className="block text-2xl md:text-3xl font-display text-white mb-2 group-hover:text-orange-500 group-hover:text-glow transition-all">50TB+</span>
<span className="text-[10px] text-slate-500 font-mono uppercase">Daily Throughput</span>
</div>
<div className="bg-[#050505] p-8 flex flex-col items-center justify-center text-center group">
<span className="block text-2xl md:text-3xl font-display text-white mb-2 group-hover:text-orange-500 group-hover:text-glow transition-all">Global</span>
<span className="text-[10px] text-slate-500 font-mono uppercase">Node Network</span>
</div>
<div className="bg-[#050505] p-8 flex flex-col items-center justify-center text-center group">
<span className="block text-2xl md:text-3xl font-display text-white mb-2 group-hover:text-orange-500 group-hover:text-glow transition-all">24/7</span>
<span className="text-[10px] text-slate-500 font-mono uppercase">System Monitoring</span>
</div>
</div>
</div>
</section>

<section className="py-20 relative z-10" id="lab">
<div className="max-w-[1400px] mx-auto px-6">
<div className="flex justify-between items-end mb-12 border-b border-white/5 pb-6">
<div>
<span className="text-[10px] font-mono text-slate-500 block mb-2">[ 03 / 03 ]</span>
<h2 className="font-display text-3xl font-medium tracking-tight text-white">CASE INTELLIGENCE</h2>
</div>
<div className="flex items-center gap-3">
<span className="text-[10px] text-slate-400 uppercase">Active</span>
<div className="relative inline-block w-8 h-4 align-middle select-none">
<input checked="" className="toggle-checkbox absolute block w-4 h-4 rounded-full bg-white border-4 border-[#050505] appearance-none cursor-pointer left-0" type="checkbox" />
<label className="toggle-label block overflow-hidden h-4 rounded-full bg-white/20 cursor-pointer"></label>
</input></div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="border border-white/5 p-8 hover:border-orange-500/30 transition-colors flex flex-col justify-between min-h-[350px] bg-charcoal group">
<div>
<div className="text-[10px] font-mono text-orange-500/80 uppercase mb-4">[ LOGISTICS ]</div>
<div className="text-xl font-display font-medium text-white mb-2">Routing Lag</div>
<div className="text-[10px] text-slate-500 mb-8">Supply chain inefficiency</div>
</div>
<div className="space-y-4">
<div className="text-[10px] text-white font-medium mb-4 flex items-center gap-2">
<iconify-icon className="text-orange-500" icon="solar:map-arrow-right-linear"></iconify-icon> 
                             GIS + ML Optimization
                        </div>
<ul className="text-[10px] text-slate-500 space-y-2 font-mono">
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-slate-500 rounded-full"></div> 28% Cost Reduction</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-slate-500 rounded-full"></div> Real-time tracking</li>
</ul>
<a className="w-full border border-white/10 text-slate-300 text-[10px] uppercase tracking-widest py-3 mt-6 hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-colors flex items-center justify-center gap-2" href="#">
                            View Case
                            <iconify-icon className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" icon="solar:arrow-up-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="border border-white/20 p-8 bg-[#0f0f0f] flex flex-col justify-between min-h-[350px] relative shadow-2xl group">
<div className="absolute top-0 right-0 bg-orange-500 text-white text-[9px] font-bold px-2 py-1 uppercase">High Impact</div>
<div>
<div className="text-[10px] font-mono text-orange-400 uppercase mb-4">[ FINTECH ]</div>
<div className="text-xl font-display font-medium text-white mb-2">Fraud Detection</div>
<div className="text-[10px] text-slate-500 mb-8">Transaction security gaps</div>
</div>
<div className="space-y-4">
<div className="text-[10px] text-white font-medium mb-4 flex items-center gap-2">
<iconify-icon className="text-orange-400" icon="solar:shield-check-linear"></iconify-icon> 
                             Predictive Engine
                        </div>
<ul className="text-[10px] text-slate-500 space-y-2 font-mono">
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-white rounded-full"></div> 99.9% Accuracy</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-white rounded-full"></div> &lt; 10ms Latency</li>
</ul>
<a className="w-full bg-white text-black text-[10px] uppercase tracking-widest py-3 mt-6 hover:bg-orange-500 hover:text-white transition-colors flex items-center justify-center gap-2" href="#">
                            View Case
                             <iconify-icon className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" icon="solar:arrow-up-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="border border-white/5 p-8 hover:border-orange-500/30 transition-colors flex flex-col justify-between min-h-[350px] bg-charcoal group">
<div>
<div className="text-[10px] font-mono text-orange-500/80 uppercase mb-4">[ HEALTHCARE ]</div>
<div className="text-xl font-display font-medium text-white mb-2">Data Silos</div>
<div className="text-[10px] text-slate-500 mb-8">Patient record fragmentation</div>
</div>
<div className="space-y-4">
<div className="text-[10px] text-white font-medium mb-4 flex items-center gap-2">
<iconify-icon className="text-orange-500" icon="solar:database-linear"></iconify-icon> 
                             Federated Data
                        </div>
<ul className="text-[10px] text-slate-500 space-y-2 font-mono">
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-slate-500 rounded-full"></div> Unified Insight</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-slate-500 rounded-full"></div> HIPAA Compliant</li>
</ul>
<a className="w-full border border-white/10 text-slate-300 text-[10px] uppercase tracking-widest py-3 mt-6 hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-colors flex items-center justify-center gap-2" href="#">
                            View Case
                            <iconify-icon className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" icon="solar:arrow-up-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-obsidian pt-16 pb-8 border-t border-white/5 text-[10px]">
<div className="max-w-[1400px] mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-20">
<div>
<h4 className="font-mono text-white mb-4 uppercase tracking-wider">/ Exploration</h4>
<ul className="space-y-2 text-slate-500">
<li><a className="hover:text-orange-500 transition-colors" href="#">Vision</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Modules</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">The Lab</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Case Studies</a></li>
</ul>
</div>
<div>
<h4 className="font-mono text-white mb-4 uppercase tracking-wider">/ Social</h4>
<ul className="space-y-2 text-slate-500">
<li><a className="hover:text-orange-500 transition-colors" href="#">LinkedIn</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">X (Twitter)</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">GitHub</a></li>
</ul>
</div>
<div>
<h4 className="font-mono text-white mb-4 uppercase tracking-wider">/ Intelligence</h4>
<ul className="space-y-2 text-slate-500">
<li><a className="hover:text-orange-500 transition-colors" href="#">Research Papers</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">API Documentation</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">System Status</a></li>
</ul>
</div>
<div>
<h4 className="font-mono text-white mb-4 uppercase tracking-wider">/ Legal</h4>
<ul className="space-y-2 text-slate-500">
<li><a className="hover:text-orange-500 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Security</a></li>
</ul>
</div>
<div>
<h4 className="font-mono text-white mb-4 uppercase tracking-wider">/ Company</h4>
<ul className="space-y-2 text-slate-500">
<li><a className="hover:text-orange-500 transition-colors" href="#">About</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
<div className="flex items-center gap-2 mb-4 md:mb-0">
<div className="w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center">
<div className="w-1 h-1 bg-black rounded-full"></div>
</div>
</div>
<div className="flex gap-8 text-slate-600 font-mono">
<span className="hover:text-white transition-colors cursor-pointer">San Francisco</span>
<span className="hover:text-white transition-colors cursor-pointer">London</span>
<span className="hover:text-white transition-colors cursor-pointer">Tokyo</span>
</div>
<div className="text-slate-600 font-mono mt-4 md:mt-0">
                    © 2024 Echelon Intelligence Engineering.
                </div>
</div>
</div>
</footer>

    </>
  );
}
