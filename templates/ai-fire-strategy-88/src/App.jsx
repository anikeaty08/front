import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
slate: {
850: '#151b2b',
900: '#0f172a',
950: '#020617',
},
orange: {
500: '#f97316',
600: '#ea580c',
}
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'scan': 'scan 3s linear infinite',
},
keyframes: {
scan: {
'0%': { top: '0%' },
'100%': { top: '100%' },
}
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 rounded bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center text-white font-medium tracking-tighter">S</div>
<span className="text-sm font-medium text-white tracking-tight group-hover:text-white/80 transition-colors">Stratum</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm hover:text-white transition-colors" href="#features">Features</a>
<a className="text-sm hover:text-white transition-colors" href="#compliance">Compliance</a>
<a className="text-sm hover:text-white transition-colors" href="#demo">Safety Logic</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Sign In</a>
<a className="text-sm bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-slate-200 transition-colors" href="#">Get Started</a>
</div>
</div>
</nav>

<main className="relative pt-32 pb-20 overflow-hidden">
<div className="absolute inset-0 grid-bg -z-10"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-orange-600/20 blur-[120px] rounded-full -z-10"></div>
<div className="max-w-7xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
<span className="text-xs font-medium text-orange-200">Updated for BS 9999:2017 Compliance</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-6 text-white">
                Intelligent fire strategy <br/>
<span className="text-slate-500">automated for safety.</span>
</h1>
<p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                Generate comprehensive fire strategy plans, optimize evacuation routes, and position safety equipment instantly using UK-compliant AI models.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="h-12 px-8 rounded-full bg-orange-600 hover:bg-orange-500 text-white font-medium transition-all shadow-[0_0_20px_-5px_rgba(234,88,12,0.5)] flex items-center gap-2 group">
                    Start Strategy
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="h-12 px-8 rounded-full border border-slate-700 hover:bg-white/5 text-white font-medium transition-all flex items-center gap-2">
<iconify-icon className="text-xl" icon="solar:play-circle-linear"></iconify-icon>
                    Watch Demo
                </button>
</div>
</div>

<div className="max-w-6xl mx-auto px-6 mt-20">
<div className="relative rounded-xl border border-white/10 bg-slate-900/50 backdrop-blur-sm shadow-2xl overflow-hidden group">

<div className="h-12 border-b border-white/5 flex items-center px-4 gap-4 bg-slate-900">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-slate-700"></div>
<div className="w-3 h-3 rounded-full bg-slate-700"></div>
<div className="w-3 h-3 rounded-full bg-slate-700"></div>
</div>
<div className="h-6 w-px bg-white/10 mx-2"></div>
<div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
<iconify-icon icon="solar:folder-linear"></iconify-icon>
                        project-alpha-warehouse.dwg
                    </div>
<div className="ml-auto flex items-center gap-3">
<span className="text-xs text-emerald-400 flex items-center gap-1">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon>
                            Compliant
                         </span>
</div>
</div>

<div className="flex h-[500px] relative">

<div className="w-64 border-r border-white/5 p-4 flex flex-col gap-4 bg-slate-900/50">
<div className="text-xs font-medium text-slate-500 uppercase tracking-widest mb-2">Analysis</div>
<div className="p-3 rounded border border-orange-500/20 bg-orange-500/10 flex items-start gap-3">
<iconify-icon className="text-orange-500 mt-0.5 text-lg" icon="solar:danger-circle-linear"></iconify-icon>
<div>
<div className="text-sm text-white font-medium">Risk Detected</div>
<div className="text-xs text-slate-400 mt-1">Travel distance exceeds 45m in Zone B.</div>
</div>
</div>
<div className="p-3 rounded hover:bg-white/5 flex items-center gap-3 cursor-pointer transition-colors">
<iconify-icon className="text-slate-400 text-lg" icon="solar:routing-2-linear"></iconify-icon>
<div className="text-sm text-slate-300">Evacuation Routes</div>
</div>
<div className="p-3 rounded hover:bg-white/5 flex items-center gap-3 cursor-pointer transition-colors">
<iconify-icon className="text-slate-400 text-lg" icon="solar:fire-extinguisher-linear"></iconify-icon>
<div className="text-sm text-slate-300">Equipment Setup</div>
</div>
<div className="mt-auto pt-4 border-t border-white/5">
<div className="text-xs text-slate-500 mb-2">AI Confidence</div>
<div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 w-[98%]"></div>
</div>
</div>
</div>

<div className="flex-1 relative bg-[#0b0f17] overflow-hidden flex items-center justify-center">

<div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(#1e293b 1px, transparent 1px)', backgroundSize: '20px 20px', opacity: '0.2'}}></div>

<div className="relative w-3/4 h-3/4 border-2 border-slate-700/50 rounded-lg p-8">

<div className="absolute top-0 left-0 w-full h-1/3 border-b-2 border-slate-700/50"></div>
<div className="absolute top-0 left-1/3 w-px h-full bg-slate-700/50"></div>
<div className="absolute top-1/3 right-1/3 w-px h-2/3 bg-slate-700/50"></div>

<div className="absolute inset-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent animate-scan z-20"></div>

<div className="absolute top-[15%] left-[15%] w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center animate-pulse">
<iconify-icon className="text-emerald-500 text-xs" icon="solar:exit-linear"></iconify-icon>
</div>
<div className="absolute bottom-[15%] right-[15%] w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center">
<iconify-icon className="text-emerald-500 text-xs" icon="solar:exit-linear"></iconify-icon>
</div>

<svg className="absolute inset-0 w-full h-full pointer-events-none">
<path className="opacity-60" d="M 120 100 L 120 200 L 300 200" fill="none" stroke="#f97316" stroke-dasharray="4 4" strokeWidth="2"></path>
<circle cx="300" cy="200" fill="#f97316" r="3"></circle>
</svg>
<div className="absolute top-[40%] left-[50%] bg-slate-900 border border-white/10 p-2 rounded text-[10px] text-slate-300 shadow-xl z-30 flex gap-2 items-center">
<iconify-icon className="text-orange-500" icon="solar:fire-extinguisher-linear"></iconify-icon>
<span>Add CO2 Extinguisher</span>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="py-24 relative" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium tracking-tight mb-4">Complete Safety Automation</h2>
<p className="text-slate-400 font-light max-w-xl mx-auto">From raw floor plans to approved strategy documents. Stratum handles the complexity of UK fire regulations.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all">
<div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-6 text-orange-500">
<iconify-icon height="24" icon="solar:shield-warning-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Automated Risk Assessment</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                        Identify hazards instantly. Our vision models detect potential fire sources and calculate risk levels based on occupancy type and building materials.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all">
<div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-6 text-emerald-500">
<iconify-icon height="24" icon="solar:routing-3-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Intelligent Evacuation</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                        Calculate optimal escape routes. The system validates travel distances against BS 9999 limits and suggests route improvements automatically.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all">
<div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6 text-blue-500">
<iconify-icon height="24" icon="solar:box-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Equipment Placement</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                        Precision placement for extinguishers, call points, and signage. Ensure full coverage without redundancy, saving costs while maintaining compliance.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-slate-900/30" id="demo">
<div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
<div className="lg:w-1/2">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 mb-6">
<span className="text-xs font-medium text-orange-400">UK Regulatory Standards</span>
</div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">Built on the foundation of <span className="text-white">The Regulatory Reform Order.</span></h2>
<p className="text-slate-400 font-light mb-8 leading-relaxed">
                    Stratum isn't just a drawing tool; it's a compliance engine. Every line drawn and icon placed is cross-referenced against the British Standards database in real-time.
                </p>
<ul className="space-y-4">
<li className="flex items-center gap-3">
<iconify-icon className="text-orange-500" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-slate-300">Compliant with BS 9999:2017 &amp; BS 5839</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-orange-500" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-slate-300">Auto-generation of Fire Strategy Reports (PDF)</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-orange-500" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-slate-300">Real-time occupancy calculation</span>
</li>
</ul>
<div className="mt-10 pt-10 border-t border-white/5 flex gap-8">
<div>
<div className="text-3xl font-medium text-white">85%</div>
<div className="text-xs text-slate-500 mt-1 uppercase tracking-wide">Time Saved</div>
</div>
<div>
<div className="text-3xl font-medium text-white">0</div>
<div className="text-xs text-slate-500 mt-1 uppercase tracking-wide">Compliance Errors</div>
</div>
</div>
</div>
<div className="lg:w-1/2 w-full">

<div className="relative w-full aspect-square md:aspect-video rounded-xl bg-slate-950 border border-white/10 p-6 shadow-2xl overflow-hidden flex flex-col gap-2 font-mono text-xs">

<div className="flex gap-4 text-slate-500 border-b border-white/5 pb-2 mb-2">
<span>logic.ts</span>
<span>regulations.json</span>
</div>
<div className="space-y-1">
<div className="flex gap-4">
<span className="text-slate-600 w-4 text-right">1</span>
<span className="text-purple-400">const</span> <span className="text-blue-400">analyzeZone</span> = (<span className="text-orange-300">floorPlan</span>) =&gt; {
                        </div>
<div className="flex gap-4">
<span className="text-slate-600 w-4 text-right">2</span>
<span className="pl-4 text-slate-400">// Detect exits and calculate distance</span>
</div>
<div className="flex gap-4">
<span className="text-slate-600 w-4 text-right">3</span>
<span className="pl-4 text-purple-400">if</span> (<span className="text-orange-300">travelDist</span> &gt; <span className="text-emerald-400">45</span>) {
                        </div>
<div className="flex gap-4">
<span className="text-slate-600 w-4 text-right">4</span>
<span className="pl-8 text-blue-400">suggest</span>(<span className="text-green-300">'additional_exit'</span>);
                        </div>
<div className="flex gap-4">
<span className="text-slate-600 w-4 text-right">5</span>
<span className="pl-8 text-blue-400">flagRisk</span>(<span className="text-green-300">'BS9999_VIOLATION'</span>);
                        </div>
<div className="flex gap-4">
<span className="text-slate-600 w-4 text-right">6</span>
<span className="pl-4">}</span>
</div>
<div className="flex gap-4">
<span className="text-slate-600 w-4 text-right">7</span>
<span className="pl-4 text-purple-400">return</span> <span className="text-orange-300">compliantStrategy</span>;
                        </div>
<div className="flex gap-4">
<span className="text-slate-600 w-4 text-right">8</span>
<span>}</span>
</div>
</div>

<div className="absolute bottom-6 right-6 bg-slate-900 border border-emerald-500/30 p-4 rounded-lg shadow-xl flex items-center gap-3 animate-pulse-slow">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
<div className="text-slate-300">Optimization Complete</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900 -z-10"></div>
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 text-white">Ready to modernize your fire strategies?</h2>
<p className="text-lg text-slate-400 mb-10 font-light">Join forward-thinking fire engineers and building managers using Stratum to ensure safety and compliance.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="h-12 px-8 rounded-full bg-white text-slate-950 font-medium hover:bg-slate-200 transition-colors w-full sm:w-auto">
                    Get Started for Free
                </button>
<button className="h-12 px-8 rounded-full border border-white/10 hover:bg-white/5 text-white font-medium transition-colors w-full sm:w-auto">
                    Contact Sales
                </button>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-12 bg-slate-950">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center text-white text-xs font-medium tracking-tighter">S</div>
<span className="text-sm text-slate-400">Stratum AI © 2023</span>
</div>
<div className="flex gap-8">
<a className="text-xs text-slate-500 hover:text-white transition-colors" href="#">Privacy</a>
<a className="text-xs text-slate-500 hover:text-white transition-colors" href="#">Terms</a>
<a className="text-xs text-slate-500 hover:text-white transition-colors" href="#">Regulations</a>
</div>
</div>
</footer>

    </>
  );
}
