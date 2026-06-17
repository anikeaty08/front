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
      

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[600px] bg-emerald-900/20 blur-[120px] rounded-full pointer-events-none -z-10"></div>

<nav className="fixed top-0 w-full z-50 glass-panel border-b-0 border-x-0 border-t-0 border-white/5">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-emerald-500 glow-point"></div>
<span className="text-white font-medium tracking-tighter text-lg">NEDI</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#">Infrastructure</a>
<a className="hover:text-white transition-colors" href="#">Intelligence</a>
<a className="hover:text-white transition-colors" href="#">EdTech Portal</a>
<a className="hover:text-white transition-colors" href="#">Open Data</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-white hover:text-emerald-400 transition-colors" href="#">Sign In</a>
<button className="px-4 py-2 bg-white text-black text-xs font-medium rounded hover:bg-neutral-200 transition-colors">
                    Access Console
                </button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 px-6 min-h-screen flex items-center z-10">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center w-full">

<div className="flex flex-col gap-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-medium w-fit">
<iconify-icon className="text-sm" icon="solar:pulse-linear"></iconify-icon>
                    System Status: Operational
                </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tighter text-white font-medium leading-[0.9]">
                    Nigeria’s<br/>Education.<br/>
<span className="text-neutral-500">One System.</span><br/>
<span className="text-neutral-500">One Truth.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-md leading-relaxed font-light">
                    Track, analyze, and improve education outcomes across every school, every state, and every learner — in real time.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<button className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium rounded transition-colors flex items-center justify-center gap-2">
                        Explore National Dashboard
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 text-sm font-medium rounded transition-colors flex items-center justify-center gap-2">
                        Access EdTech Portal
                    </button>
</div>
</div>

<div className="relative h-[500px] w-full lg:h-[700px] rounded-2xl border border-white/5 bg-[#050a07] overflow-hidden flex items-center justify-center">

<div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>

<svg className="absolute inset-0 w-full h-full opacity-30" preserveaspectratio="none" viewbox="0 0 100 100">
<path className="data-stream" d="M 10,50 Q 30,20 50,50 T 90,50" fill="none" stroke="#10b981" strokeWidth="0.2"></path>
<path className="data-stream" d="M 20,80 Q 50,90 60,40 T 80,10" fill="none" stroke="#10b981" strokeWidth="0.1" style={{animationDuration: '25s'}}></path>
<path className="data-stream" d="M 0,30 Q 40,40 50,70 T 100,60" fill="none" stroke="#34d399" strokeWidth="0.15" style={{animationDuration: '18s'}}></path>
</svg>

<div className="absolute top-12 left-8 glass-panel p-4 rounded-lg w-48 shadow-2xl transform hover:-translate-y-1 transition-transform">
<div className="text-xs text-neutral-400 mb-1">Live Enrollment</div>
<div className="text-2xl text-white font-medium tracking-tight">47,201,934</div>
<div className="text-xs text-emerald-400 mt-2 flex items-center gap-1">
<iconify-icon icon="solar:trend-up-linear"></iconify-icon>
                        +2.4% vs last year
                    </div>
</div>
<div className="absolute bottom-24 right-12 glass-panel p-4 rounded-lg w-56 shadow-2xl">
<div className="flex items-center justify-between mb-3">
<div className="text-xs text-neutral-400">Node Status</div>
<div className="w-2 h-2 rounded-full bg-emerald-500 glow-point"></div>
</div>
<div className="space-y-2">
<div className="flex justify-between items-center">
<span className="text-xs text-neutral-500">Kano Sync</span>
<span className="text-xs text-white">12ms ago</span>
</div>
<div className="flex justify-between items-center">
<span className="text-xs text-neutral-500">Lagos Sync</span>
<span className="text-xs text-white">4ms ago</span>
</div>
<div className="w-full bg-white/10 h-1 rounded-full overflow-hidden mt-2">
<div className="bg-emerald-500 h-full w-[94%]"></div>
</div>
</div>
</div>

<div className="relative z-10 w-32 h-32 rounded-full border border-emerald-500/30 flex items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-emerald-500/10 before:animate-ping">
<div className="w-16 h-16 rounded-full bg-emerald-900/50 backdrop-blur-md border border-emerald-500/50 flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.2)]">
<iconify-icon className="text-2xl text-emerald-400" icon="solar:server-square-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 relative z-10 bg-[#020403]">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl tracking-tighter text-white font-medium mb-4">A National Education Intelligence Layer</h2>
<p className="text-neutral-400 max-w-2xl text-sm md:text-base">Connecting fragmented systems into a unified command structure for policy, execution, and outcomes.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="p-8 border border-white/5 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors group cursor-default">
<iconify-icon className="text-2xl text-neutral-500 mb-6 group-hover:text-emerald-400 transition-colors" icon="solar:database-linear"></iconify-icon>
<h3 className="text-white font-medium mb-2 tracking-tight">Data Infrastructure</h3>
<p className="text-xs text-neutral-500 leading-relaxed">Unified national data across students, teachers, and facilities, standardized for interoperability.</p>
</div>

<div className="p-8 border border-white/5 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors group cursor-default">
<iconify-icon className="text-2xl text-neutral-500 mb-6 group-hover:text-emerald-400 transition-colors" icon="solar:chart-square-linear"></iconify-icon>
<h3 className="text-white font-medium mb-2 tracking-tight">Real-Time Monitoring</h3>
<p className="text-xs text-neutral-500 leading-relaxed">Live dashboards tracking attendance, performance, and resource allocation from LGEA to Federal levels.</p>
</div>

<div className="p-8 border border-white/5 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors group cursor-default">
<iconify-icon className="text-2xl text-neutral-500 mb-6 group-hover:text-emerald-400 transition-colors" icon="solar:cpu-bolt-linear"></iconify-icon>
<h3 className="text-white font-medium mb-2 tracking-tight">AI Decision Support</h3>
<p className="text-xs text-neutral-500 leading-relaxed">Simulate policies, forecast outcomes, and ask natural language questions against the national dataset.</p>
</div>

<div className="p-8 border border-white/5 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors group cursor-default">
<iconify-icon className="text-2xl text-neutral-500 mb-6 group-hover:text-emerald-400 transition-colors" icon="solar:link-circle-linear"></iconify-icon>
<h3 className="text-white font-medium mb-2 tracking-tight">System Integration</h3>
<p className="text-xs text-neutral-500 leading-relaxed">Secure APIs connecting WAEC, NECO, UBEC, state ministries, and vetted EdTech providers.</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-black relative overflow-hidden">
<div className="max-w-7xl mx-auto relative z-10">
<div className="text-center mb-20">
<h2 className="text-4xl md:text-5xl tracking-tighter text-white font-medium mb-4">See Where Education Breaks</h2>
<p className="text-neutral-400 text-sm md:text-base max-w-xl mx-auto">Understand where students are lost, where systems fail, and where intervention matters most across the entire lifecycle.</p>
</div>

<div className="relative w-full max-w-5xl mx-auto pt-10 pb-20 overflow-x-auto hide-scrollbar">
<div className="min-w-[800px] flex items-start justify-between relative">

<div className="absolute top-8 left-0 w-full h-px bg-white/10 -z-10"></div>

<div className="flex flex-col items-center group">
<div className="w-32 h-16 border border-emerald-500/40 bg-emerald-900/20 rounded flex items-center justify-center mb-4 backdrop-blur-sm transition-all group-hover:border-emerald-400">
<span className="text-sm font-medium text-white">Population</span>
</div>
<span className="text-xs text-neutral-500">Ages 5-18</span>
<span className="text-lg text-white font-medium tracking-tight mt-1">~52M</span>
</div>
<div className="w-8 h-px bg-emerald-500/50 mt-8"></div>

<div className="flex flex-col items-center relative group">
<div className="w-28 h-14 border border-white/20 bg-white/5 rounded flex items-center justify-center mb-4 transition-all group-hover:border-white/50">
<span className="text-xs font-medium text-white">Enrollment</span>
</div>
<span className="text-lg text-white font-medium tracking-tight mt-1">47M</span>

<div className="absolute top-14 left-1/2 w-px h-16 bg-red-500/30"></div>
<div className="absolute top-32 left-1/2 -translate-x-1/2 text-xs text-red-400/70 whitespace-nowrap">
                            Out of School (-5M)
                        </div>
</div>
<div className="w-8 h-px bg-white/20 mt-8"></div>

<div className="flex flex-col items-center relative group">
<div className="w-24 h-12 border border-white/20 bg-white/5 rounded flex items-center justify-center mb-4 transition-all group-hover:border-white/50">
<span className="text-xs font-medium text-white">Primary</span>
</div>
<span className="text-lg text-white font-medium tracking-tight mt-1">32M</span>

<div className="absolute top-12 left-1/2 w-px h-24 bg-red-500/30"></div>
<div className="absolute top-36 left-1/2 -translate-x-1/2 text-xs text-red-400/70 whitespace-nowrap">
                            Dropout (-15M)
                        </div>
</div>
<div className="w-8 h-px bg-white/20 mt-8"></div>

<div className="flex flex-col items-center relative group">
<div className="w-20 h-10 border border-white/20 bg-white/5 rounded flex items-center justify-center mb-4 transition-all group-hover:border-white/50">
<span className="text-xs font-medium text-white">Secondary</span>
</div>
<span className="text-lg text-white font-medium tracking-tight mt-1">11M</span>

<div className="absolute top-10 left-1/2 w-px h-32 bg-red-500/30"></div>
<div className="absolute top-[170px] left-1/2 -translate-x-1/2 text-xs text-red-400/70 whitespace-nowrap">
                            Transition Fail (-21M)
                        </div>
</div>
<div className="w-8 h-px bg-white/20 mt-8"></div>

<div className="flex flex-col items-center group">
<div className="w-16 h-8 border border-white/20 bg-white/5 rounded flex items-center justify-center mb-4 transition-all group-hover:border-white/50">
<span className="text-[10px] font-medium text-white">Tertiary</span>
</div>
<span className="text-lg text-white font-medium tracking-tight mt-1">2.1M</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-[#030604]">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl md:text-4xl tracking-tighter text-white font-medium mb-12">Built for Every Stakeholder</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">

<div className="group relative p-6 border border-white/5 rounded-xl bg-white/[0.01] hover:bg-neutral-900 transition-all overflow-hidden cursor-pointer h-64 flex flex-col justify-end">
<div className="absolute top-0 left-0 w-full h-full p-6 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col gap-2 -translate-y-4 group-hover:translate-y-0 duration-300">

<div className="w-full h-4 bg-white/5 rounded"></div>
<div className="w-3/4 h-4 bg-white/5 rounded"></div>
<div className="w-full h-12 bg-emerald-500/10 border border-emerald-500/20 rounded mt-auto"></div>
</div>
<div className="relative z-10 transition-transform duration-300 group-hover:-translate-y-2">
<iconify-icon className="text-xl text-neutral-500 mb-3" icon="solar:buildings-linear"></iconify-icon>
<h3 className="text-white text-sm font-medium mb-1">Government</h3>
<p className="text-[10px] text-neutral-500">National oversight &amp; policy</p>
</div>
</div>

<div className="group relative p-6 border border-white/5 rounded-xl bg-white/[0.01] hover:bg-neutral-900 transition-all overflow-hidden cursor-pointer h-64 flex flex-col justify-end">
<div className="absolute top-0 left-0 w-full h-full p-6 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col gap-2 -translate-y-4 group-hover:translate-y-0 duration-300">
<div className="grid grid-cols-2 gap-2 mb-2">
<div className="h-8 bg-white/5 rounded"></div>
<div className="h-8 bg-white/5 rounded"></div>
</div>
<div className="w-full h-16 bg-white/5 rounded mt-auto flex items-end p-2 gap-1">
<div className="w-full h-full bg-emerald-500/20 rounded-sm"></div>
<div className="w-full h-[60%] bg-emerald-500/20 rounded-sm"></div>
<div className="w-full h-[80%] bg-emerald-500/20 rounded-sm"></div>
</div>
</div>
<div className="relative z-10 transition-transform duration-300 group-hover:-translate-y-2">
<iconify-icon className="text-xl text-neutral-500 mb-3" icon="solar:wallet-money-linear"></iconify-icon>
<h3 className="text-white text-sm font-medium mb-1">Donors</h3>
<p className="text-[10px] text-neutral-500">Track funding impact</p>
</div>
</div>

<div className="group relative p-6 border border-white/5 rounded-xl bg-white/[0.01] hover:bg-neutral-900 transition-all overflow-hidden cursor-pointer h-64 flex flex-col justify-end">
<div className="absolute top-0 left-0 w-full h-full p-6 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col gap-2 -translate-y-4 group-hover:translate-y-0 duration-300">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded-full bg-white/10"></div>
<div className="w-16 h-2 bg-white/10 rounded"></div>
</div>
<div className="space-y-1 mt-auto">
<div className="w-full h-3 bg-white/5 rounded"></div>
<div className="w-full h-3 bg-white/5 rounded"></div>
<div className="w-4/5 h-3 bg-white/5 rounded"></div>
</div>
</div>
<div className="relative z-10 transition-transform duration-300 group-hover:-translate-y-2">
<iconify-icon className="text-xl text-neutral-500 mb-3" icon="solar:users-group-rounded-linear"></iconify-icon>
<h3 className="text-white text-sm font-medium mb-1">Administrators</h3>
<p className="text-[10px] text-neutral-500">Submit &amp; monitor data</p>
</div>
</div>

<div className="group relative p-6 border border-white/5 rounded-xl bg-white/[0.01] hover:bg-neutral-900 transition-all overflow-hidden cursor-pointer h-64 flex flex-col justify-end">
<div className="absolute top-0 left-0 w-full h-full p-6 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col gap-2 -translate-y-4 group-hover:translate-y-0 duration-300">
<div className="w-full h-24 border border-dashed border-white/10 rounded flex items-center justify-center">
<iconify-icon className="text-white/20" icon="solar:check-circle-linear"></iconify-icon>
</div>
</div>
<div className="relative z-10 transition-transform duration-300 group-hover:-translate-y-2">
<iconify-icon className="text-xl text-neutral-500 mb-3" icon="solar:laptop-linear"></iconify-icon>
<h3 className="text-white text-sm font-medium mb-1">EdTech Providers</h3>
<p className="text-[10px] text-neutral-500">Accreditation &amp; scale</p>
</div>
</div>

<div className="group relative p-6 border border-white/5 rounded-xl bg-white/[0.01] hover:bg-neutral-900 transition-all overflow-hidden cursor-pointer h-64 flex flex-col justify-end">
<div className="absolute top-0 left-0 w-full h-full p-6 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col gap-2 -translate-y-4 group-hover:translate-y-0 duration-300">
<div className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:8px_8px] rounded border border-white/5"></div>
</div>
<div className="relative z-10 transition-transform duration-300 group-hover:-translate-y-2">
<iconify-icon className="text-xl text-neutral-500 mb-3" icon="solar:document-text-linear"></iconify-icon>
<h3 className="text-white text-sm font-medium mb-1">Researchers</h3>
<p className="text-[10px] text-neutral-500">Access structured datasets</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
<div>
<div className="text-xs font-medium text-emerald-500 tracking-widest uppercase mb-4">Subsystem</div>
<h2 className="text-4xl md:text-5xl tracking-tighter text-white font-medium mb-6">The EdTech Execution Engine</h2>
<p className="text-neutral-400 text-sm md:text-base mb-10 leading-relaxed">
                    Where innovation meets government. The EdTech Portal is a standardized marketplace where solutions are vetted, piloted, and scaled across national infrastructure.
                </p>
<div className="space-y-8">
<div className="flex gap-4">
<div className="mt-1"><iconify-icon className="text-xl text-white" icon="solar:shield-check-linear"></iconify-icon></div>
<div>
<h4 className="text-white text-sm font-medium mb-1">Accreditation System</h4>
<p className="text-xs text-neutral-500">Verify pedagogical quality, data security, and curriculum alignment to rank providers.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1"><iconify-icon className="text-xl text-white" icon="solar:test-tube-linear"></iconify-icon></div>
<div>
<h4 className="text-white text-sm font-medium mb-1">Pilot Management</h4>
<p className="text-xs text-neutral-500">Run controlled evaluations in selected schools and measure efficacy through NEDI data.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1"><iconify-icon className="text-xl text-white" icon="solar:shop-linear"></iconify-icon></div>
<div>
<h4 className="text-white text-sm font-medium mb-1">Marketplace</h4>
<p className="text-xs text-neutral-500">A central registry for states and schools to discover and procure trusted solutions.</p>
</div>
</div>
</div>
</div>

<div className="relative h-[500px] w-full bg-[#050806] border border-white/10 rounded-2xl overflow-hidden p-6 shadow-2xl flex flex-col">

<div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
<div className="flex items-center gap-2">
<iconify-icon className="text-neutral-500" icon="solar:magnifer-linear"></iconify-icon>
<span className="text-xs text-neutral-600">Search providers, categories...</span>
</div>
<div className="flex gap-2">
<div className="px-2 py-1 rounded bg-white/5 text-[10px] text-white flex items-center gap-1 cursor-pointer">
                            Filter <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>

<div className="flex-1 overflow-hidden flex flex-col gap-4">
<div className="text-xs text-white font-medium">Top Accredited Providers</div>

<div className="bg-white/[0.02] border border-white/5 rounded-lg p-3 flex items-center justify-between group hover:bg-white/[0.04] transition-colors cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-emerald-900/30 flex items-center justify-center text-emerald-400 font-medium text-xs">U</div>
<div>
<div className="text-xs text-white font-medium">uLesson</div>
<div className="text-[10px] text-neutral-500">STEM Curriculum</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="text-right">
<div className="text-[10px] text-neutral-500">Tier</div>
<div className="text-xs text-emerald-400 flex items-center gap-1"><iconify-icon icon="solar:star-fall-linear"></iconify-icon> National</div>
</div>

<div className="w-8 h-4 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center px-0.5">
<div className="w-3 h-3 rounded-full bg-emerald-400 translate-x-3.5"></div>
</div>
</div>
</div>

<div className="bg-white/[0.02] border border-white/5 rounded-lg p-3 flex items-center justify-between group hover:bg-white/[0.04] transition-colors cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-blue-900/30 flex items-center justify-center text-blue-400 font-medium text-xs">A</div>
<div>
<div className="text-xs text-white font-medium">AltSchool</div>
<div className="text-[10px] text-neutral-500">Tech Skills</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="text-right">
<div className="text-[10px] text-neutral-500">Tier</div>
<div className="text-xs text-white">State</div>
</div>
<div className="w-8 h-4 rounded-full bg-neutral-800 border border-neutral-700 flex items-center px-0.5">
<div className="w-3 h-3 rounded-full bg-neutral-500"></div>
</div>
</div>
</div>

<div className="absolute bottom-6 right-6 w-64 glass-panel rounded-lg p-4 shadow-xl border border-emerald-500/20">
<div className="flex items-center justify-between mb-3">
<div className="text-[10px] text-emerald-400 font-medium flex items-center gap-1">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div> Active Pilot
                            </div>
<div className="text-[10px] text-neutral-500">Oyo State</div>
</div>
<div className="text-xs text-white mb-2">Math Proficiency Intervention</div>
<div className="w-full bg-black/50 h-1.5 rounded-full overflow-hidden">
<div className="bg-emerald-500 h-full w-[65%]"></div>
</div>
<div className="flex justify-between mt-1">
<span className="text-[9px] text-neutral-500">Week 4 of 8</span>
<span className="text-[9px] text-white">65%</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-[#020302]">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl tracking-tighter text-white font-medium mb-4">Ask Questions. Get Answers.</h2>
<p className="text-neutral-400 text-sm">Interact with the national dataset using natural language.</p>
</div>

<div className="bg-[#050806] border border-white/10 rounded-2xl p-4 md:p-8 shadow-2xl flex flex-col gap-8">

<div className="flex justify-end">
<div className="bg-white/5 border border-white/10 rounded-2xl rounded-tr-sm p-4 max-w-lg text-sm text-white">
                        Show trends in female secondary completion in the North-West over the last 3 years.
                    </div>
</div>

<div className="flex justify-start">
<div className="bg-emerald-900/10 border border-emerald-500/20 rounded-2xl rounded-tl-sm p-5 max-w-2xl w-full">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-emerald-400" icon="solar:magic-stick-3-linear"></iconify-icon>
<span className="text-xs text-emerald-400 font-medium">NEDI Intelligence</span>
</div>
<p className="text-sm text-neutral-300 mb-6 leading-relaxed">
                            Female secondary completion in the North-West region has shown a steady increase, rising from <span className="text-white font-medium">42.1% in 2021</span> to <span className="text-white font-medium">48.7% in 2023</span>. Kano state led the improvement metric following the recent girl-child education initiative.
                        </p>

<div className="h-32 border-b border-l border-white/10 flex items-end gap-8 px-4 pb-2 pt-4 relative">

<div className="absolute left-[-24px] top-0 h-full flex flex-col justify-between text-[9px] text-neutral-600 pb-2">
<span>50%</span>
<span>40%</span>
</div>

<div className="w-full flex-1 flex flex-col justify-end items-center group">
<div className="w-12 bg-white/10 hover:bg-white/20 transition-colors rounded-t h-[20%] relative">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity">42.1%</div>
</div>
<div className="text-[10px] text-neutral-500 mt-2">2021</div>
</div>
<div className="w-full flex-1 flex flex-col justify-end items-center group">
<div className="w-12 bg-white/20 hover:bg-white/30 transition-colors rounded-t h-[50%] relative">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity">45.3%</div>
</div>
<div className="text-[10px] text-neutral-500 mt-2">2022</div>
</div>
<div className="w-full flex-1 flex flex-col justify-end items-center group">
<div className="w-12 bg-emerald-500/60 hover:bg-emerald-500/80 transition-colors rounded-t h-[85%] relative shadow-[0_0_15px_rgba(16,185,129,0.3)]">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity">48.7%</div>
</div>
<div className="text-[10px] text-white font-medium mt-2">2023</div>
</div>
</div>
<div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4">
<div className="flex items-center gap-4 text-[10px] text-neutral-500">
<span>Confidence: <span className="text-emerald-400">High (98%)</span></span>
<span>Sources: UBEC, State Ministries</span>
</div>
<div className="flex gap-2">
<button className="p-1.5 hover:bg-white/5 rounded text-neutral-400"><iconify-icon icon="solar:copy-linear"></iconify-icon></button>
<button className="p-1.5 hover:bg-white/5 rounded text-neutral-400"><iconify-icon icon="solar:download-square-linear"></iconify-icon></button>
</div>
</div>
</div>
</div>

<div className="mt-4 relative">
<input className="w-full bg-white/5 border border-white/10 rounded-lg py-3 pl-4 pr-12 text-sm text-white focus:outline-none focus:border-emerald-500/50 transition-colors placeholder:text-neutral-600" placeholder="Ask another question..." type="text"/>
<button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-white/10 hover:bg-white/20 rounded text-white transition-colors">
<iconify-icon icon="solar:plain-2-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
<div className="lg:w-1/3">
<h2 className="text-3xl md:text-4xl tracking-tighter text-white font-medium mb-4">Built on Verified Data</h2>
<p className="text-neutral-400 text-sm mb-8">NEDI ensures absolute data provenance through institutional integrations and cryptographic audit trails.</p>
</div>
<div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-xl overflow-hidden">
<div className="bg-[#030604] p-8">
<iconify-icon className="text-2xl text-white mb-4" icon="solar:fingerprint-linear"></iconify-icon>
<h4 className="text-white text-sm font-medium mb-2">NIN Integration</h4>
<p className="text-xs text-neutral-500">Direct sync with NIMC for unique student and teacher identification, eliminating ghost records.</p>
</div>
<div className="bg-[#030604] p-8">
<iconify-icon className="text-2xl text-white mb-4" icon="solar:diploma-verified-linear"></iconify-icon>
<h4 className="text-white text-sm font-medium mb-2">NERD Verification</h4>
<p className="text-xs text-neutral-500">Automated certificate validation for teachers ensuring qualified personnel in every classroom.</p>
</div>
<div className="bg-[#030604] p-8">
<iconify-icon className="text-2xl text-white mb-4" icon="solar:history-linear"></iconify-icon>
<h4 className="text-white text-sm font-medium mb-2">Immutable Audit Trails</h4>
<p className="text-xs text-neutral-500">Every data entry, edit, and access request is logged and traceable to a verified user entity.</p>
</div>
<div className="bg-[#030604] p-8">
<iconify-icon className="text-2xl text-white mb-4" icon="solar:lock-keyhole-linear"></iconify-icon>
<h4 className="text-white text-sm font-medium mb-2">Role-Based Access</h4>
<p className="text-xs text-neutral-500">Granular permissions ensuring sensitive PII is only visible to authorized national personnel.</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-emerald-950/20 border-t border-emerald-900/30">
<div className="max-w-7xl mx-auto text-center">
<h2 className="text-sm font-medium text-emerald-500 tracking-widest uppercase mb-16">A System Designed for Scale</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16 divide-y md:divide-y-0 md:divide-x divide-white/10">
<div className="flex flex-col items-center pt-8 md:pt-0">
<div className="text-6xl md:text-8xl tracking-tighter text-white font-medium mb-2">47M+</div>
<div className="text-sm text-neutral-400">Tracked Learners</div>
</div>
<div className="flex flex-col items-center pt-8 md:pt-0">
<div className="text-6xl md:text-8xl tracking-tighter text-white font-medium mb-2">1M+</div>
<div className="text-sm text-neutral-400">Verified Teachers</div>
</div>
<div className="flex flex-col items-center pt-8 md:pt-0">
<div className="text-6xl md:text-8xl tracking-tighter text-white font-medium mb-2">90K+</div>
<div className="text-sm text-neutral-400">Connected Schools</div>
</div>
</div>
<p className="text-lg text-white font-medium">Every data point contributes to national progress.</p>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden">

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[300px] bg-emerald-900/20 blur-[100px] rounded-full pointer-events-none -z-10"></div>
<div className="max-w-3xl mx-auto text-center relative z-10">
<h2 className="text-4xl md:text-6xl tracking-tighter text-white font-medium mb-6">Start Exploring Nigeria’s Education System</h2>
<p className="text-neutral-400 mb-10 text-sm md:text-base">Access the intelligence layer powering the future of learning.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="px-8 py-4 bg-white hover:bg-neutral-200 text-black text-sm font-medium rounded transition-colors">
                    Enter Dashboard
                </button>
<button className="px-8 py-4 bg-[#050806] hover:bg-neutral-900 text-white border border-white/20 text-sm font-medium rounded transition-colors">
                    Explore EdTech Portal
                </button>
</div>
</div>
</section>

<footer className="py-8 px-6 border-t border-white/5 text-center flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
<div className="text-xs text-neutral-500 font-medium tracking-tight mb-4 md:mb-0">NEDI © 2024</div>
<div className="flex gap-6 text-[10px] text-neutral-600">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
<a className="hover:text-white transition-colors" href="#">API Documentation</a>
</div>
</footer>

    </>
  );
}
