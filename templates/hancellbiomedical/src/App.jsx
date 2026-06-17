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



        lucide.createIcons();
    
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
      

<div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">

<div className="absolute top-[-10%] right-[-5%] w-[900px] h-[900px] bg-gradient-to-br from-violet-300/30 via-purple-200/30 to-blue-200/30 rounded-full blur-[100px] mix-blend-multiply animate-pulse-slow"></div>
<div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-gradient-to-tr from-sky-200/40 via-blue-100/40 to-indigo-100/40 rounded-full blur-[80px] mix-blend-multiply animate-float"></div>

<div className="absolute top-[20%] left-[15%] w-64 h-64 bg-violet-400/10 rounded-full blur-[50px] animate-float" style={{animationDelay: '2s'}}></div>
<div className="absolute bottom-[40%] right-[10%] w-48 h-48 bg-fuchsia-300/20 rounded-full blur-[40px] animate-pulse-slow" style={{animationDelay: '1s'}}></div>

<div className="absolute inset-0 bg-cell-pattern opacity-[0.03]"></div>
</div>

<nav className="fixed w-full z-50 top-0 left-0 border-b border-white/40 bg-white/60 backdrop-blur-xl supports-[backdrop-filter]:bg-white/40">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg tracking-tighter font-medium text-slate-800 flex items-center gap-2 relative group" href="#">
<div className="relative flex items-center justify-center">
<div className="absolute inset-0 bg-violet-400 blur-md opacity-20 group-hover:opacity-40 transition-opacity rounded-full"></div>
<i className="text-violet-600 relative z-10 w-6 h-6" data-lucide="dna"></i>
</div>
<span className="font-semibold text-slate-800">HELIX<span className="font-light text-slate-500">LABS</span></span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-violet-600 transition-colors" href="#">Research</a>
<a className="hover:text-violet-600 transition-colors" href="#">Services</a>
<a className="hover:text-violet-600 transition-colors" href="#">Technology</a>
<a className="hover:text-violet-600 transition-colors" href="#">Ethics</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Login</a>
<a className="group flex items-center gap-2 bg-white/50 border border-white/60 text-slate-700 text-xs font-semibold px-4 py-2 rounded-full hover:bg-white hover:shadow-lg hover:shadow-violet-200/50 transition-all backdrop-blur-sm" href="#">
                    Partner Access
                    <i className="w-3 h-3 group-hover:translate-x-0.5 transition-transform text-violet-500" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden z-10">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col items-start max-w-4xl relative">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-200 bg-white/40 text-violet-700 text-xs font-medium mb-8 backdrop-blur-md shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
</span>
                    Breakthrough in iPSC Research
                </div>
<h1 className="text-5xl lg:text-7xl tracking-tighter font-medium text-slate-900 leading-[1.05] mb-8">
                    Engineering the <br/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-fuchsia-500 to-indigo-500 drop-shadow-sm">building blocks</span> of life.
                </h1>
<p className="text-lg text-slate-500 leading-relaxed max-w-2xl mb-10 font-light">
                    We specialize in induced pluripotent stem cell technology and regenerative therapies. Bridging the gap between molecular biology and clinical application with crystalline precision.
                </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<button className="relative group overflow-hidden inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-all shadow-lg shadow-slate-200">
                        Explore Protocols
                        <i className="w-4 h-4 text-violet-300" data-lucide="flask-conical"></i>
</button>
<button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/40 border border-white/60 text-slate-700 text-sm font-medium rounded-lg hover:bg-white hover:shadow-md transition-all backdrop-blur-sm">
                        View Publications
                    </button>
</div>
</div>
</div>

<div className="absolute top-1/2 right-[-10%] -translate-y-1/2 w-[600px] h-[600px] pointer-events-none hidden lg:block opacity-60">
<div className="absolute inset-0 bg-gradient-to-tr from-violet-200/40 to-transparent rounded-full blur-3xl"></div>
<div className="absolute inset-10 border border-white/20 rounded-full animate-pulse-slow"></div>
</div>
</header>

<section className="border-y border-white/50 bg-white/20 backdrop-blur-md relative z-10">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="relative group">
<div className="relative">
<div className="text-4xl font-medium tracking-tighter text-slate-900 mb-1">99.9<span className="text-violet-500 text-2xl align-top">%</span></div>
<div className="text-xs font-semibold uppercase tracking-wide text-slate-400">Culture Purity</div>
</div>
</div>
<div>
<div className="text-4xl font-medium tracking-tighter text-slate-900 mb-1">50<span className="text-violet-500 text-2xl align-top">+</span></div>
<div className="text-xs font-semibold uppercase tracking-wide text-slate-400">Active Patents</div>
</div>
<div>
<div className="text-4xl font-medium tracking-tighter text-slate-900 mb-1">12<span className="text-violet-500 text-2xl align-top">Yr</span></div>
<div className="text-xs font-semibold uppercase tracking-wide text-slate-400">Clinical Data</div>
</div>
<div>
<div className="text-4xl font-medium tracking-tighter text-slate-900 mb-1">ISO</div>
<div className="text-xs font-semibold uppercase tracking-wide text-slate-400">Certified Labs</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-3xl tracking-tighter font-medium text-slate-900 mb-4">Core Capabilities</h2>
<p className="text-slate-500 text-sm max-w-md leading-relaxed font-light">Advanced cellular manufacturing and analysis infrastructure designed for reproducibility and scale.</p>
</div>
<a className="text-sm font-medium text-violet-600 hover:text-violet-500 flex items-center gap-1 group" href="#">
                    View full capabilities
                    <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group bg-white/40 p-8 rounded-2xl border border-white/60 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(139,92,246,0.1)] hover:bg-white/60 transition-all duration-300 backdrop-blur-xl relative overflow-hidden">
<div className="absolute -right-10 -top-10 w-40 h-40 bg-violet-200/30 rounded-full blur-2xl group-hover:bg-violet-200/50 transition-all"></div>
<div className="h-12 w-12 rounded-xl bg-white border border-violet-100 text-violet-500 flex items-center justify-center mb-6 shadow-sm">
<i className="w-6 h-6" data-lucide="snowflake"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-800 mb-3">Cryopreservation</h3>
<p className="text-sm text-slate-500 leading-relaxed font-light">Automated bio-banking with liquid nitrogen storage systems maintaining -196°C integrity for long-term viability.</p>
</div>

<div className="group bg-white/40 p-8 rounded-2xl border border-white/60 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(99,102,241,0.1)] hover:bg-white/60 transition-all duration-300 backdrop-blur-xl relative overflow-hidden">
<div className="absolute -right-10 -top-10 w-40 h-40 bg-indigo-200/30 rounded-full blur-2xl group-hover:bg-indigo-200/50 transition-all"></div>
<div className="h-12 w-12 rounded-xl bg-white border border-indigo-100 text-indigo-500 flex items-center justify-center mb-6 shadow-sm">
<i className="w-6 h-6" data-lucide="filter"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-800 mb-3">Cell Sorting</h3>
<p className="text-sm text-slate-500 leading-relaxed font-light">High-throughput FACS sorting for isolating specific stem cell markers with precision up to 99.9% purity.</p>
</div>

<div className="group bg-white/40 p-8 rounded-2xl border border-white/60 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(244,63,94,0.1)] hover:bg-white/60 transition-all duration-300 backdrop-blur-xl relative overflow-hidden">
<div className="absolute -right-10 -top-10 w-40 h-40 bg-rose-200/30 rounded-full blur-2xl group-hover:bg-rose-200/50 transition-all"></div>
<div className="h-12 w-12 rounded-xl bg-white border border-rose-100 text-rose-500 flex items-center justify-center mb-6 shadow-sm">
<i className="w-6 h-6" data-lucide="activity"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-800 mb-3">Quality Control</h3>
<p className="text-sm text-slate-500 leading-relaxed font-light">Rigorous sterility testing, mycoplasma detection, and karyotype analysis ensuring clinical-grade standards.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
<div className="order-2 lg:order-1 relative">

<div className="absolute inset-0 bg-violet-300/20 blur-3xl -z-10 rounded-full transform scale-90"></div>

<div className="relative bg-white/80 rounded-2xl p-2 shadow-2xl shadow-violet-900/5 border border-white backdrop-blur-xl">
<div className="bg-slate-50/50 rounded-xl overflow-hidden border border-slate-100">

<div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 bg-white/80">
<div className="flex gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
</div>
<div className="text-[10px] text-slate-400 font-mono tracking-widest uppercase">Live_Culture_Feed_04</div>
</div>

<div className="p-6 relative min-h-[300px] flex items-end gap-3">

<div className="absolute inset-0 p-6 flex flex-col justify-between pointer-events-none opacity-30">
<div className="w-full h-px border-t border-dashed border-slate-300"></div>
<div className="w-full h-px border-t border-dashed border-slate-300"></div>
<div className="w-full h-px border-t border-dashed border-slate-300"></div>
<div className="w-full h-px border-t border-dashed border-slate-300"></div>
<div className="w-full h-px border-t border-dashed border-slate-300"></div>
</div>

<div className="w-1/6 bg-white rounded-t-lg h-[40%] relative group border border-slate-100 overflow-hidden shadow-sm">
<div className="absolute bottom-0 w-full bg-gradient-to-t from-violet-200 to-indigo-50 h-[60%] rounded-t-lg transition-all duration-1000 group-hover:h-[80%]"></div>
</div>
<div className="w-1/6 bg-white rounded-t-lg h-[60%] relative group border border-slate-100 overflow-hidden shadow-sm">
<div className="absolute bottom-0 w-full bg-gradient-to-t from-violet-200 to-indigo-50 h-[45%] rounded-t-lg transition-all duration-1000 group-hover:h-[55%]"></div>
</div>
<div className="w-1/6 bg-white rounded-t-lg h-[30%] relative group border border-slate-100 overflow-hidden shadow-sm">
<div className="absolute bottom-0 w-full bg-gradient-to-t from-violet-200 to-indigo-50 h-[80%] rounded-t-lg transition-all duration-1000 group-hover:h-[90%]"></div>
</div>
<div className="w-1/6 bg-white rounded-t-lg h-[75%] relative group border border-slate-100 overflow-hidden shadow-sm">
<div className="absolute bottom-0 w-full bg-gradient-to-t from-violet-200 to-indigo-50 h-[70%] rounded-t-lg transition-all duration-1000 group-hover:h-[85%]"></div>
</div>
<div className="w-1/6 bg-white rounded-t-lg h-[50%] relative group border border-slate-100 overflow-hidden shadow-sm">
<div className="absolute bottom-0 w-full bg-gradient-to-t from-violet-200 to-indigo-50 h-[50%] rounded-t-lg transition-all duration-1000 group-hover:h-[60%]"></div>
</div>
<div className="w-1/6 bg-white rounded-t-lg h-[85%] relative group border border-slate-100 overflow-hidden shadow-sm">
<div className="absolute bottom-0 w-full bg-gradient-to-t from-violet-200 to-indigo-50 h-[90%] rounded-t-lg transition-all duration-1000 group-hover:h-[95%]"></div>
</div>
</div>

<div className="absolute top-20 right-8 bg-white/90 backdrop-blur border border-white/50 p-4 rounded-xl shadow-lg shadow-indigo-100/50">
<div className="flex items-center gap-2 mb-1">
<div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
<span className="text-[10px] text-slate-400 font-semibold uppercase">Growth Rate</span>
</div>
<div className="text-xl font-mono text-slate-800 tracking-tight">+12.4%</div>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<h2 className="text-3xl lg:text-4xl tracking-tighter font-medium text-slate-900 mb-6">Real-time monitoring of <span className="text-violet-600">cellular development</span>.</h2>
<p className="text-slate-500 text-lg leading-relaxed mb-8 font-light">
                        Our proprietary LIMS integrates directly with incubation units, providing granular data on pH levels, temperature stability, and confluence rates instantly.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3 group">
<i className="text-violet-500 mt-1 w-5 h-5 flex-shrink-0" data-lucide="check-circle-2"></i>
<span className="text-slate-600 text-sm group-hover:text-slate-900 transition-colors">Automated alerts for environmental deviations</span>
</li>
<li className="flex items-start gap-3 group">
<i className="text-violet-500 mt-1 w-5 h-5 flex-shrink-0" data-lucide="check-circle-2"></i>
<span className="text-slate-600 text-sm group-hover:text-slate-900 transition-colors">Visual tracking of lineage differentiation</span>
</li>
<li className="flex items-start gap-3 group">
<i className="text-violet-500 mt-1 w-5 h-5 flex-shrink-0" data-lucide="check-circle-2"></i>
<span className="text-slate-600 text-sm group-hover:text-slate-900 transition-colors">Secure, encrypted genomic data storage</span>
</li>
</ul>
<div className="mt-10 pt-8 border-t border-slate-200/60">
<p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Trusted By Researchers At</p>
<div className="flex gap-6 opacity-40 hover:opacity-100 transition-all duration-500">

<div className="h-6 w-20 bg-slate-800 rounded-md"></div>
<div className="h-6 w-20 bg-slate-800 rounded-md"></div>
<div className="h-6 w-20 bg-slate-800 rounded-md"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-3xl lg:text-4xl tracking-tighter font-medium mb-4 text-slate-900">Start Your Research Journey</h2>
<p className="text-slate-500 mb-10 font-light text-lg">Access our catalog or request a consultation for custom cell line development.</p>
<form className="max-w-md mx-auto space-y-4 text-left p-8 rounded-2xl bg-white/50 backdrop-blur-lg border border-white/60 shadow-xl shadow-indigo-100">
<div>
<label className="block text-xs font-semibold text-slate-500 mb-1.5 ml-1">Work Email</label>
<input className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 transition-all hover:bg-slate-50" placeholder="dr.smith@institute.edu" type="email"/>
</div>

<div className="flex items-start gap-3">
<div className="relative flex items-center">
<input className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-slate-300 bg-white transition-all checked:border-violet-500 checked:bg-violet-500 hover:border-violet-300" id="terms" type="checkbox"/>
<i className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 transition-opacity peer-checked:opacity-100 w-3 h-3" data-lucide="check"></i>
</div>
<label className="text-xs text-slate-500 cursor-pointer select-none hover:text-violet-600" htmlFor="terms">
                        I agree to the processing of my data for research validation purposes.
                    </label>
</div>
<button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm py-3 rounded-lg transition-all shadow-lg shadow-slate-300 mt-2 flex items-center justify-center gap-2" type="submit">
                    Request Access
                    <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</form>
</div>
</section>

<footer className="border-t border-slate-200 bg-white/40 pt-16 pb-8 relative z-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2">
<a className="text-base tracking-tighter font-medium text-slate-900 flex items-center gap-2 mb-4" href="#">
<i className="text-violet-600 w-5 h-5" data-lucide="dna"></i>
                        HELIX LABS
                    </a>
<p className="text-sm text-slate-500 max-w-xs font-light">
                        Advancing the frontiers of human health through precision cellular engineering and ethical stem cell research.
                    </p>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wide">Platform</h4>
<a className="text-sm text-slate-500 hover:text-violet-600 transition-colors" href="#">Cell Lines</a>
<a className="text-sm text-slate-500 hover:text-violet-600 transition-colors" href="#">Media &amp; Reagents</a>
<a className="text-sm text-slate-500 hover:text-violet-600 transition-colors" href="#">Characterization</a>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wide">Company</h4>
<a className="text-sm text-slate-500 hover:text-violet-600 transition-colors" href="#">About Us</a>
<a className="text-sm text-slate-500 hover:text-violet-600 transition-colors" href="#">Careers</a>
<a className="text-sm text-slate-500 hover:text-violet-600 transition-colors" href="#">Press</a>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wide">Resources</h4>
<a className="text-sm text-slate-500 hover:text-violet-600 transition-colors" href="#">Documentation</a>
<a className="text-sm text-slate-500 hover:text-violet-600 transition-colors" href="#">Publications</a>
<a className="text-sm text-slate-500 hover:text-violet-600 transition-colors" href="#">Compliance</a>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wide">Legal</h4>
<a className="text-sm text-slate-500 hover:text-violet-600 transition-colors" href="#">Privacy</a>
<a className="text-sm text-slate-500 hover:text-violet-600 transition-colors" href="#">Terms</a>
<a className="text-sm text-slate-500 hover:text-violet-600 transition-colors" href="#">Bioethics</a>
</div>
</div>
<div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2023 Helix Cellular Laboratories. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-violet-600 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="bell"></i>
</a>
<a className="text-slate-400 hover:text-violet-600 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="message-circle"></i>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
