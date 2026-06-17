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
      

<div className="fixed inset-0 z-0 pointer-events-none">

<div className="absolute inset-0 bg-grid [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]"></div>

<div className="absolute top-[-10%] left-[20%] w-[40rem] h-[40rem] bg-emerald-600/20 rounded-full blur-[120px] aurora-blob"></div>
<div className="absolute bottom-[-10%] right-[10%] w-[30rem] h-[30rem] bg-teal-800/20 rounded-full blur-[100px] aurora-blob" style={{animationDelay: '-5s'}}></div>
<div className="absolute top-[40%] left-[-10%] w-[25rem] h-[25rem] bg-emerald-900/30 rounded-full blur-[90px] aurora-blob" style={{animationDelay: '-2s'}}></div>
</div>

<nav className="relative z-50 w-full px-6 py-6 flex justify-between items-center max-w-7xl mx-auto">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-700 flex items-center justify-center text-black shadow-[0_0_15px_rgba(52,211,153,0.3)] group-hover:shadow-[0_0_25px_rgba(52,211,153,0.5)] transition-all duration-300">
<span className="iconify" data-icon="lucide:scan-line" data-strokeWidth="2" data-width="18"></span>
</div>
<span className="text-lg font-medium tracking-tight text-white/90 group-hover:text-white transition-colors">SEOSCALE</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-emerald-400 transition-colors" href="#">Features</a>
<a className="hover:text-emerald-400 transition-colors" href="#">Pricing</a>
<a className="hover:text-emerald-400 transition-colors" href="#">Resources</a>
</div>
<button className="hidden md:flex items-center gap-2 px-4 py-2 text-xs font-medium bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all text-white">
<span>Sign In</span>
</button>

<button className="md:hidden text-slate-300">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</nav>

<main className="relative z-10 flex-grow flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-20">
<div className="max-w-4xl mx-auto text-center space-y-8">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.1)] mb-4">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs font-medium text-emerald-300 tracking-wide uppercase">AI Engine v2.0 Live</span>
</div>

<h1 className="text-5xl sm:text-7xl font-medium tracking-tight text-white leading-[1.1]">
                Invisible details.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-200 to-emerald-400 animate-pulse">Visible Growth.</span>
</h1>

<p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
                Scan your website architecture with our aurora-engine. We uncover hidden technical debt and SEO opportunities in milliseconds.
            </p>

<div className="w-full max-w-xl mx-auto mt-12 relative group">

<div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
<form className="relative flex items-center bg-[#050a07] border border-white/10 rounded-2xl p-2 shadow-2xl overflow-hidden focus-within:border-emerald-500/50 transition-colors">
<div className="pl-4 pr-3 text-slate-500">
<span className="iconify" data-icon="lucide:globe" data-strokeWidth="1.5" data-width="20"></span>
</div>
<input className="flex-1 bg-transparent border-none outline-none text-white placeholder-slate-600 h-12 text-sm sm:text-base font-normal w-full" placeholder="Enter your website URL..." required="" type="url"/>
<button className="ml-2 px-6 py-3 bg-gradient-to-b from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-black font-medium rounded-xl text-sm transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] flex items-center gap-2 group/btn" type="submit">
<span>Analyze</span>
<span className="iconify group-hover/btn:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-strokeWidth="2" data-width="16"></span>
</button>
</form>

<div className="absolute -right-16 top-0 hidden lg:flex flex-col gap-2 opacity-60">
<div className="bg-[#0A120E] border border-white/5 p-2 rounded-lg backdrop-blur-md shadow-lg transform rotate-6 translate-y-4">
<div className="flex items-center gap-2">
<span className="iconify text-emerald-400" data-icon="lucide:zap" data-width="14"></span>
<span className="text-[10px] font-mono text-emerald-100">LCP: 0.8s</span>
</div>
</div>
</div>
<div className="absolute -left-16 bottom-0 hidden lg:flex flex-col gap-2 opacity-60">
<div className="bg-[#0A120E] border border-white/5 p-2 rounded-lg backdrop-blur-md shadow-lg transform -rotate-3 -translate-y-4">
<div className="flex items-center gap-2">
<span className="iconify text-emerald-400" data-icon="lucide:shield-check" data-width="14"></span>
<span className="text-[10px] font-mono text-emerald-100">HTTPS: Valid</span>
</div>
</div>
</div>
</div>

<div className="pt-16 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2">
<span className="iconify text-emerald-500" data-icon="lucide:check-circle" data-strokeWidth="1.5" data-width="18"></span>
<span className="text-xs tracking-wide text-slate-400">Core Web Vitals</span>
</div>
<div className="flex items-center gap-2">
<span className="iconify text-emerald-500" data-icon="lucide:bar-chart-3" data-strokeWidth="1.5" data-width="18"></span>
<span className="text-xs tracking-wide text-slate-400">Backlink Analysis</span>
</div>
<div className="flex items-center gap-2">
<span className="iconify text-emerald-500" data-icon="lucide:smartphone" data-strokeWidth="1.5" data-width="18"></span>
<span className="text-xs tracking-wide text-slate-400">Mobile Usability</span>
</div>
</div>
</div>
</main>

<section className="relative z-10 w-full max-w-6xl mx-auto px-6 pb-20">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-emerald-500/20 transition-all duration-300">
<div className="w-10 h-10 rounded-full bg-emerald-900/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<span className="iconify text-emerald-400" data-icon="lucide:layers" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="text-white font-medium mb-2 tracking-tight">Deep Architecture</h3>
<p className="text-sm text-slate-400 leading-relaxed">Visualize your internal linking structure and identify orphan pages instantly.</p>
</div>

<div className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-emerald-500/20 transition-all duration-300">
<div className="w-10 h-10 rounded-full bg-emerald-900/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<span className="iconify text-emerald-400" data-icon="lucide:cpu" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="text-white font-medium mb-2 tracking-tight">AI-Powered Audit</h3>
<p className="text-sm text-slate-400 leading-relaxed">Our models predict ranking opportunities based on SERP volatility.</p>
</div>

<div className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-emerald-500/20 transition-all duration-300">
<div className="w-10 h-10 rounded-full bg-emerald-900/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<span className="iconify text-emerald-400" data-icon="lucide:file-code" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="text-white font-medium mb-2 tracking-tight">Code Optimization</h3>
<p className="text-sm text-slate-400 leading-relaxed">Minify JS/CSS and optimize assets automatically with suggested code snippets.</p>
</div>
</div>
</section>

    </>
  );
}
