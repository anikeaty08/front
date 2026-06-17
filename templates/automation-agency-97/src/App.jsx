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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 glass">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white">
<iconify-icon icon="solar:cpu-bolt-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-white font-medium tracking-tighter text-lg group-hover:text-cyan-400 transition-colors">OPTIMUS ORG</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#services">Solutions</a>
<a className="hover:text-white transition-colors" href="#process">Methodology</a>
<a className="hover:text-white transition-colors" href="#results">Results</a>
</div>
<a className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-white text-neutral-950 text-xs font-medium hover:bg-cyan-50 transition-all duration-300" href="#">
                Book a Call
                <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] glow-spot -z-10 pointer-events-none opacity-60"></div>
<div className="max-w-5xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-950/10 text-cyan-400 text-xs font-medium mb-8 animate-pulse">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</span>
                Accepting new clients for Q4
            </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-white tracking-tight mb-6 leading-[1.1]">
                Optimus Org: We build the <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-500 to-blue-500 text-glow">smart robots</span> 
                so you don't have to.
            </h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                Unlock the potential of your business with autonomous workflows. We replace manual drudgery with intelligent, scalable AI agents.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-white text-neutral-950 font-medium hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 text-sm" href="#">
                    Book a Call
                    <iconify-icon icon="solar:calendar-linear" width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 rounded-lg border border-white/10 bg-white/5 text-white font-medium hover:bg-white/10 transition-all flex items-center justify-center gap-2 text-sm backdrop-blur-sm" href="#services">
                    Explore Services
                    <iconify-icon icon="solar:alt-arrow-down-linear" width="18"></iconify-icon>
</a>
</div>
</div>

<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)] -z-20"></div>
</header>

<section className="py-20 border-t border-white/5 bg-neutral-950/50" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Core Intelligence</h2>
<p className="text-neutral-400 max-w-md text-sm leading-relaxed">
                        Our suite of automation services is designed to integrate seamlessly into your existing infrastructure.
                    </p>
</div>
<div className="flex items-center gap-2 text-cyan-500 text-sm font-medium cursor-pointer hover:text-cyan-400 transition-colors">
                    View full capabilities
                    <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative p-8 rounded-2xl border border-white/10 bg-neutral-900/50 hover:bg-neutral-900 transition-all duration-500 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-12 h-12 rounded-lg bg-neutral-800 border border-white/5 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="solar:chat-round-dots-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">AI Chatbots</h3>
<p className="text-sm text-neutral-400 leading-relaxed mb-6">
                        24/7 intelligent customer support agents trained on your specific business knowledge base to handle inquiries instantly.
                    </p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-neutral-500">
<iconify-icon className="text-cyan-500" icon="solar:check-circle-linear"></iconify-icon>
<span>Natural Language Processing</span>
</li>
<li className="flex items-center gap-2 text-xs text-neutral-500">
<iconify-icon className="text-cyan-500" icon="solar:check-circle-linear"></iconify-icon>
<span>Multi-platform Integration</span>
</li>
</ul>
</div>

<div className="group relative p-8 rounded-2xl border border-white/10 bg-neutral-900/50 hover:bg-neutral-900 transition-all duration-500 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-12 h-12 rounded-lg bg-neutral-800 border border-white/5 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="solar:tuning-square-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Workflow Automation</h3>
<p className="text-sm text-neutral-400 leading-relaxed mb-6">
                        Connect your favorite apps to create seamless pipelines. We eliminate repetitive clicking and data entry tasks forever.
                    </p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-neutral-500">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon>
<span>Zapier &amp; Make Scenarios</span>
</li>
<li className="flex items-center gap-2 text-xs text-neutral-500">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon>
<span>Custom API Development</span>
</li>
</ul>
</div>

<div className="group relative p-8 rounded-2xl border border-white/10 bg-neutral-900/50 hover:bg-neutral-900 transition-all duration-500 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-12 h-12 rounded-lg bg-neutral-800 border border-white/5 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="solar:database-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Data Sorting</h3>
<p className="text-sm text-neutral-400 leading-relaxed mb-6">
                        Turn chaotic datasets into actionable insights. Our AI structures unstructured data from emails, PDFs, and spreadsheets.
                    </p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-neutral-500">
<iconify-icon className="text-purple-500" icon="solar:check-circle-linear"></iconify-icon>
<span>Automated Categorization</span>
</li>
<li className="flex items-center gap-2 text-xs text-neutral-500">
<iconify-icon className="text-purple-500" icon="solar:check-circle-linear"></iconify-icon>
<span>Error Detection &amp; Cleaning</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-black">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center md:text-left">
<div className="text-3xl font-medium text-white tracking-tight mb-1">500+</div>
<div className="text-xs text-neutral-500 uppercase tracking-widest">Hours Saved / Wk</div>
</div>
<div className="text-center md:text-left">
<div className="text-3xl font-medium text-white tracking-tight mb-1">99.9%</div>
<div className="text-xs text-neutral-500 uppercase tracking-widest">Accuracy Rate</div>
</div>
<div className="text-center md:text-left">
<div className="text-3xl font-medium text-white tracking-tight mb-1">24/7</div>
<div className="text-xs text-neutral-500 uppercase tracking-widest">System Uptime</div>
</div>
<div className="text-center md:text-left">
<div className="text-3xl font-medium text-white tracking-tight mb-1">10x</div>
<div className="text-xs text-neutral-500 uppercase tracking-widest">ROI Average</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-cyan-900/10 to-transparent pointer-events-none"></div>
<div className="max-w-3xl mx-auto px-6 text-center relative z-10">
<iconify-icon className="text-cyan-500 mb-6 text-4xl" icon="solar:rocket-2-linear"></iconify-icon>
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6">Ready to automate your future?</h2>
<p className="text-neutral-400 mb-8 max-w-xl mx-auto">
                Stop wasting time on manual tasks. Let Optimus Org handle the grunt work while you focus on scaling your business.
            </p>
<button className="px-8 py-4 rounded-lg bg-cyan-500 text-white font-medium hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]">
                Book a Free Discovery Call
            </button>
</div>
</section>

<footer className="border-t border-white/10 bg-neutral-950 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
<div>
<a className="flex items-center gap-2 mb-4" href="#">
<div className="w-6 h-6 rounded bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-xs">
<iconify-icon icon="solar:cpu-bolt-linear"></iconify-icon>
</div>
<span className="text-white font-medium tracking-tight">OPTIMUS ORG</span>
</a>
<p className="text-neutral-500 text-sm max-w-xs">
                    Building the smart robots of tomorrow, today. Your partner in operational excellence.
                </p>
</div>
<div className="flex gap-8 text-sm text-neutral-400">
<a className="hover:text-cyan-400 transition-colors" href="#">Services</a>
<a className="hover:text-cyan-400 transition-colors" href="#">Case Studies</a>
<a className="hover:text-cyan-400 transition-colors" href="#">Privacy</a>
<a className="hover:text-cyan-400 transition-colors" href="#">Terms</a>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 text-center md:text-left border-t border-white/5 pt-8">
<p className="text-xs text-neutral-600">© 2023 Optimus Org. All rights reserved.</p>
</div>
</footer>

    </>
  );
}
