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



        // Simple mobile menu toggle
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');

        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
            menu.classList.toggle('flex');
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
      

<nav className="border-b border-slate-100 sticky top-0 bg-white/95 backdrop-blur-sm z-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex items-center gap-8">

<a className="flex items-center gap-2 group" href="#">
<div className="text-[#4F46E5] transition-transform duration-300 group-hover:scale-110 flex items-center">
<iconify-icon height="28" icon="solar:atom-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<span className="text-xl font-semibold tracking-tight text-slate-900">The Agent Guide</span>
</a>

<div className="hidden lg:flex items-center relative group">
<div className="absolute left-3 text-slate-400 group-hover:text-[#4F46E5] transition-colors flex items-center">
<iconify-icon height="18" icon="solar:magnifer-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<input className="pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-full text-base focus:outline-none focus:ring-2 focus:ring-[#4F46E5]/20 focus:border-[#4F46E5] w-64 transition-all duration-300 hover:shadow-sm placeholder:text-slate-400 font-normal" placeholder="Search agents..." type="text"/>
</div>
</div>

<div className="hidden lg:flex items-center gap-8">
<div className="flex items-center gap-6 text-base font-normal text-slate-600">
<a className="hover:text-[#4F46E5] transition-colors" href="#">Documentation</a>
<a className="hover:text-[#4F46E5] transition-colors" href="#">Submit Agent</a>
</div>
<button className="flex items-center gap-2 text-base font-normal text-slate-600 hover:text-slate-900 transition-colors">
<iconify-icon height="20" icon="solar:globe-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span>Global</span>
</button>
<a className="px-5 py-2.5 bg-[#EEF2FF] text-[#4F46E5] font-medium rounded-lg hover:bg-[#E0E7FF] transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0" href="#">
                        For Developers
                    </a>
</div>

<button className="lg:hidden p-2 text-slate-600 hover:text-slate-900 flex items-center" id="mobile-menu-btn">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>

<div className="hidden lg:flex gap-8 mt-1">
<a className="pb-3 text-base font-medium text-slate-500 border-b-2 border-transparent hover:text-slate-900 transition-colors" href="#">Browse Capabilities</a>
<a className="pb-3 text-base font-medium text-[#4F46E5] border-b-2 border-[#4F46E5]" href="#">Find Agents</a>
</div>
</div>

<div className="hidden lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl py-4 px-4 flex-col gap-4" id="mobile-menu">
<input className="w-full pl-4 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-base focus:ring-2 focus:ring-[#4F46E5]" placeholder="Search" type="text"/>
<a className="text-lg font-medium text-slate-700 py-2 border-b border-slate-100" href="#">Browse Capabilities</a>
<a className="text-lg font-medium text-[#4F46E5] py-2 border-b border-slate-100" href="#">Find Agents</a>
<a className="text-lg font-medium text-slate-700 py-2" href="#">Documentation</a>
<a className="text-lg font-medium text-slate-700 py-2" href="#">Submit Agent</a>
<a className="text-lg font-medium text-slate-700 py-2" href="#">For Developers</a>
</div>
</nav>

<main className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pt-16 pr-4 pb-20 pl-4">

<div className="max-w-4xl">
<h1 className="text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-[1.15] mb-6">
                Search for AI Agents, autonomous bots, and automated workflows.
            </h1>
<p className="text-xl text-slate-500 font-normal leading-relaxed max-w-2xl mb-10">
                Search through our 5,000+ verified autonomous agents, compare performance benchmarks and find the best AI for your stack.
            </p>
</div>

<div className="flex flex-col lg:flex-row gap-2 transition-shadow duration-300 hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] bg-white border-slate-100 border rounded-xl pt-2 pr-2 pb-2 pl-2 shadow-[0_8px_30px_rgb(0,0,0,0.06)] gap-x-2 gap-y-2">

<div className="flex-1 group relative">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-hover:text-[#4F46E5] transition-colors">
<iconify-icon height="20" icon="solar:magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<input className="block placeholder:text-slate-400 focus:ring-0 focus:bg-slate-50 transition-colors text-lg font-normal text-slate-900 bg-transparent w-full rounded-lg pt-4 pr-4 pb-4 pl-12" placeholder="Task, Capability or Agent Name..." type="text"/>
</div>

<div className="hidden lg:block w-px bg-slate-200 my-3"></div>

<div className="flex-1 relative group">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-hover:text-[#4F46E5] transition-colors">
<iconify-icon height="20" icon="solar:laptop-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<input className="block placeholder:text-slate-400 focus:ring-0 focus:bg-slate-50 transition-colors text-lg font-normal text-slate-900 bg-transparent w-full rounded-lg pt-4 pr-4 pb-4 pl-12" placeholder="Platform (e.g. Slack, Terminal, Web)" type="text"/>
</div>

<button className="w-full lg:w-auto px-8 py-3 bg-[#4F46E5] hover:bg-[#4338ca] text-white text-lg font-medium rounded-lg transition-all duration-200 shadow-sm hover:shadow-md transform active:scale-95 flex items-center justify-center gap-2">
<span className="">Find Agent</span>
</button>
</div>

<div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">

<div className="flex flex-col items-center group cursor-default">
<div className="group-hover:scale-110 transition-transform duration-300 text-[#4F46E5] bg-white rounded-full mb-4 px-3 py-3 shadow-sm border border-slate-100">
<iconify-icon height="32" icon="solar:server-square-linear" strokeWidth="1.25" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">Largest Agent Repository</h3>
<p className="text-base text-slate-500 font-normal leading-relaxed">The Agent Guide maintains the most comprehensive database of autonomous agents and LLM wrappers.</p>
</div>

<div className="flex flex-col items-center group cursor-default">
<div className="group-hover:scale-110 transition-transform duration-300 text-[#4F46E5] bg-white rounded-full mb-4 px-3 py-3 shadow-sm border border-slate-100">
<iconify-icon height="32" icon="solar:verified-check-linear" strokeWidth="1.25" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">Benchmarked Performance</h3>
<p className="text-base text-slate-500 font-normal leading-relaxed">Choose confidently with agents tested against standard benchmarks and reviewed by developers.</p>
</div>

<div className="flex flex-col items-center group cursor-default">
<div className="group-hover:scale-110 transition-transform duration-300 text-[#4F46E5] bg-white rounded-full mb-4 px-3 py-3 shadow-sm border border-slate-100">
<iconify-icon height="32" icon="solar:code-circle-linear" strokeWidth="1.25" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">Easy Integration</h3>
<p className="text-base text-slate-500 font-normal leading-relaxed">Deploy agents directly via API, CLI or <a className="text-[#4F46E5] underline hover:text-indigo-800" href="#">1-click containers</a> to your infrastructure.</p>
</div>
</div>
</main>

<section className="bg-[#4F46E5] py-20 overflow-hidden relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 flex flex-col md:flex-row justify-between items-end gap-6">
<div className="">
<span className="inline-block px-3 py-1 bg-green-400/20 text-green-100 text-sm font-medium rounded-full mb-4 border border-green-400/30">
                    Trending Agents &amp; Bots
                </span>
<h2 className="text-3xl lg:text-4xl font-semibold text-white tracking-tight">The most powerful agents this week</h2>
</div>
<div className="flex gap-3">
<button className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors backdrop-blur-sm">
<iconify-icon height="20" icon="solar:arrow-left-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors backdrop-blur-sm">
<iconify-icon height="20" icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="w-full relative">
<div className="flex w-[200%] animate-scroll hover:pause">

<div className="flex animate-infinite-scroll pl-4 gap-x-6 gap-y-6">

<div className="min-w-[320px] w-[320px] bg-white p-6 rounded-2xl shadow-xl transform transition-transform duration-300 hover:-translate-y-2 cursor-pointer group">
<div className="flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-2xl overflow-hidden mb-4 shadow-inner bg-slate-50 flex items-center justify-center">
<img alt="Agent" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&amp;fit=crop&amp;q=80&amp;w=200&amp;h=200"/>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-1">DevBot Alpha</h3>
<p className="text-sm text-slate-500 font-medium mb-3">Full-stack coding agent</p>
<div className="flex items-center gap-1 mb-6">
<div className="flex text-amber-400">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<span className="text-xs font-semibold text-slate-900 ml-1">1.2k forks</span>
</div>
<div className="w-full pt-4 border-t border-slate-100">
<p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Capabilities</p>
<p className="text-xs text-slate-500 font-normal leading-relaxed line-clamp-3">
                    Refactoring, Unit Tests, Python, React, Documentation generation, Bug fixing.
                </p>
</div>
</div>
</div>

<div className="min-w-[320px] w-[320px] bg-white p-6 rounded-2xl shadow-xl transform transition-transform duration-300 hover:-translate-y-2 cursor-pointer group">
<div className="flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-2xl overflow-hidden mb-4 shadow-inner bg-slate-50 flex items-center justify-center">
<img alt="Agent" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1633412802994-5c058f151b66?auto=format&amp;fit=crop&amp;q=80&amp;w=200&amp;h=200"/>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-1">DataSense</h3>
<p className="text-sm text-slate-500 font-medium mb-3">Analytics &amp; Visualization</p>
<div className="flex items-center gap-1 mb-6">
<div className="flex text-amber-400">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<span className="text-xs font-semibold text-slate-900 ml-1">850 stars</span>
</div>
<div className="w-full pt-4 border-t border-slate-100">
<p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Capabilities</p>
<p className="text-xs text-slate-500 font-normal leading-relaxed line-clamp-3">
                    SQL generation, Pandas dataframe manipulation, Chart.js exports, Anomaly detection.
                </p>
</div>
</div>
</div>

<div className="min-w-[320px] w-[320px] bg-white p-6 rounded-2xl shadow-xl transform transition-transform duration-300 hover:-translate-y-2 cursor-pointer group">
<div className="flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-2xl overflow-hidden mb-4 shadow-inner bg-slate-50 flex items-center justify-center">
<img alt="Agent" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&amp;fit=crop&amp;q=80&amp;w=200&amp;h=200"/>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-1">CopyFlow</h3>
<p className="text-sm text-slate-500 font-medium mb-3">Marketing &amp; Content</p>
<div className="flex items-center gap-1 mb-6">
<div className="flex text-amber-400">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold-duotone" width="16"></iconify-icon>
</div>
<span className="text-xs font-semibold text-slate-900 ml-1">2.1k users</span>
</div>
<div className="w-full pt-4 border-t border-slate-100">
<p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Capabilities</p>
<p className="text-xs text-slate-500 font-normal leading-relaxed line-clamp-3">
                    SEO Writing, Social Media scheduling, Email campaigns, A/B Testing suggestions.
                </p>
</div>
</div>
</div>

<div className="min-w-[320px] w-[320px] bg-white p-6 rounded-2xl shadow-xl transform transition-transform duration-300 hover:-translate-y-2 cursor-pointer group">
<div className="flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-2xl overflow-hidden mb-4 shadow-inner bg-slate-50 flex items-center justify-center">
<img alt="Agent" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&amp;fit=crop&amp;q=80&amp;w=200&amp;h=200" style={{filter: 'hue-rotate(45deg)'}}/>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-1">SupportHero</h3>
<p className="text-sm text-slate-500 font-medium mb-3">Customer Success Agent</p>
<div className="flex items-center gap-1 mb-6">
<div className="flex text-amber-400">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<span className="text-xs font-semibold text-slate-900 ml-1">500+ installs</span>
</div>
<div className="w-full pt-4 border-t border-slate-100">
<p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Capabilities</p>
<p className="text-xs text-slate-500 font-normal leading-relaxed line-clamp-3">
                    Ticket triage, Knowledge base search, Auto-replies, Sentiment analysis, Slack integration.
                </p>
</div>
</div>
</div>

<div className="min-w-[320px] w-[320px] bg-white p-6 rounded-2xl shadow-xl transform transition-transform duration-300 hover:-translate-y-2 cursor-pointer group">
<div className="flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-2xl overflow-hidden mb-4 shadow-inner bg-slate-50 flex items-center justify-center">
<img alt="Agent" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1531297461136-82lw9z2117?auto=format&amp;fit=crop&amp;q=80&amp;w=200&amp;h=200"/>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-1">SecureOps</h3>
<p className="text-sm text-slate-500 font-medium mb-3">Cybersecurity Sentinel</p>
<div className="flex items-center gap-1 mb-6">
<div className="flex text-amber-400">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold-duotone" width="16"></iconify-icon>
</div>
<span className="text-xs font-semibold text-slate-900 ml-1">Enterprise</span>
</div>
<div className="w-full pt-4 border-t border-slate-100">
<p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Capabilities</p>
<p className="text-xs text-slate-500 font-normal leading-relaxed line-clamp-3">
                    Log monitoring, Threat detection, Compliance audits, Automated patching, AWS GuardDuty.
                </p>
</div>
</div>
</div>
</div>

<div aria-hidden="true" className="flex animate-infinite-scroll pl-4 gap-x-6 gap-y-6">

<div className="min-w-[320px] w-[320px] bg-white p-6 rounded-2xl shadow-xl transform transition-transform duration-300 hover:-translate-y-2 cursor-pointer group">
<div className="flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-2xl overflow-hidden mb-4 shadow-inner bg-slate-50 flex items-center justify-center">
<img alt="Agent" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&amp;fit=crop&amp;q=80&amp;w=200&amp;h=200"/>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-1">DevBot Alpha</h3>
<p className="text-sm text-slate-500 font-medium mb-3">Full-stack coding agent</p>
<div className="flex items-center gap-1 mb-6">
<div className="flex text-amber-400">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<span className="text-xs font-semibold text-slate-900 ml-1">1.2k forks</span>
</div>
<div className="w-full pt-4 border-t border-slate-100">
<p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Capabilities</p>
<p className="text-xs text-slate-500 font-normal leading-relaxed line-clamp-3">
                    Refactoring, Unit Tests, Python, React, Documentation generation, Bug fixing.
                </p>
</div>
</div>
</div>

</div>
</div>
</div>
</section><section className="py-24 bg-white relative overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-20">
<h2 className="text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight mb-6">What is The Agent Guide?</h2>
<p className="text-xl text-slate-500 font-normal">Find, compare and deploy autonomous AI workforce</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 border border-slate-200 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300 bg-white group">
<div className="mb-6 text-slate-900 group-hover:scale-110 transition-transform duration-300 origin-left">
<iconify-icon height="32" icon="solar:magnifer-zoom-in-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-4 tracking-tight">Discover Capabilities</h3>
<p className="text-base text-slate-500 leading-relaxed font-normal">
                    Filter agents by capability (e.g. "Python Coding", "Email Management") and platform compatibility.
                </p>
</div>

<div className="p-8 border border-slate-200 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300 bg-white group">
<div className="mb-6 text-slate-900 group-hover:scale-110 transition-transform duration-300 origin-left">
<iconify-icon height="32" icon="solar:chart-square-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-4 tracking-tight">Compare Benchmarks</h3>
<p className="text-base text-slate-500 leading-relaxed font-normal">
                    We run agents through rigorous test suites (SWE-bench, HumanEval) so you know their real-world performance.
                </p>
</div>

<div className="p-8 border border-slate-200 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300 bg-white group">
<div className="mb-6 text-slate-900 group-hover:scale-110 transition-transform duration-300 origin-left">
<iconify-icon height="32" icon="solar:rocket-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-4 tracking-tight">One-Click Deploy</h3>
<p className="text-base text-slate-500 leading-relaxed font-normal">
                    Get Docker containers or API keys instantly. Integrate into your workflow with webhooks and SDKs.
                </p>
</div>
</div>
</div>
</section><section className="py-24 bg-slate-50 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="mb-32">
<div className="max-w-4xl mb-12">
<span className="text-slate-500 font-medium mb-4 block text-base">How it works</span>
<h2 className="text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-[1.1]">
                    Automate your tasks by connecting specialized agents to your existing data streams.
                </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group overflow-hidden bg-slate-900 h-[520px] rounded-3xl relative shadow-lg">
<img alt="Step 1" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80" src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="bg-gradient-to-t from-black/80 via-black/40 to-transparent absolute top-0 right-0 bottom-0 left-0">
</div>
<div className="absolute top-8 left-8">
<span className="text-white font-semibold text-lg border border-white/30 rounded-full px-3 py-1 bg-black/30 backdrop-blur-md">Step 1</span>
</div>
<div className="absolute bottom-10 left-8 right-8">
<h3 className="text-white font-bold text-2xl mb-2">Define the Task</h3>
<p className="text-slate-200 text-lg font-normal leading-relaxed">
            Describe what you need done in natural language. "Monitor my server logs and alert me on Slack if latency spikes."
        </p>
</div>
</div>

<div className="group overflow-hidden bg-slate-900 h-[520px] rounded-3xl relative shadow-lg">
<img alt="Step 2" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80" src="https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="bg-gradient-to-t from-black/80 via-black/40 to-transparent absolute top-0 right-0 bottom-0 left-0">
</div>
<div className="absolute top-8 left-8">
<span className="text-white font-semibold text-lg border border-white/30 rounded-full px-3 py-1 bg-black/30 backdrop-blur-md">Step 2</span>
</div>
<div className="absolute bottom-10 left-8 right-8">
<h3 className="text-white font-bold text-2xl mb-2">Select Agents</h3>
<p className="text-slate-200 text-lg font-normal leading-relaxed">
            Our engine matches you with the best pre-trained agents. Compare them by cost, speed, and accuracy metrics.
        </p>
</div>
</div>

<div className="group relative h-[520px] rounded-3xl overflow-hidden bg-slate-900 shadow-lg">
<img alt="Step 3" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="bg-gradient-to-t from-black/80 via-black/40 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-8 left-8">
<span className="text-white font-semibold text-lg border border-white/30 rounded-full px-3 py-1 bg-black/30 backdrop-blur-md">Step 3</span>
</div>
<div className="absolute bottom-10 left-8 right-8">
<h3 className="text-white font-bold text-2xl mb-2">Auto-Pilot</h3>
<p className="text-slate-200 text-lg font-normal leading-relaxed">
      Connect your API keys. The agent starts working immediately, running autonomously 24/7.
    </p>
</div>
</div>
</div>
</div>

<div className="max-w-5xl">
<div className="mb-16">
<span className="text-slate-500 font-medium mb-4 block text-base">About our service</span>
<h2 className="text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-[1.1]">
                    Open source and verified agents, running in a secure sandboxed environment.
                </h2>
</div>
<div className="space-y-12">

<div className="flex flex-col md:flex-row gap-10 items-start group">
<div className="md:w-56 flex-shrink-0 overflow-hidden w-full h-56 rounded-2xl shadow-sm bg-white p-4 flex items-center justify-center">
<img alt="Free to use" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1639803939107-1f484920215e?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<div className="flex-1 pt-4">
<h3 className="text-2xl font-semibold text-slate-900 mb-3 tracking-tight">Open Marketplace</h3>
<p className="text-xl text-slate-500 leading-relaxed font-normal">
                            Explore thousands of open-source agents. Clone them, modify them, or use them as-is without vendor lock-in.
                        </p>
</div>
</div>

<div className="flex flex-col md:flex-row gap-10 items-start group">
<div className="w-full md:w-56 h-56 flex-shrink-0 rounded-2xl overflow-hidden shadow-sm bg-white p-4 flex items-center justify-center">
<img alt="Verified" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1558494949-efc02570fbc9?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<div className="flex-1 pt-4">
<h3 className="text-2xl font-semibold text-slate-900 mb-3 tracking-tight">Security Audited</h3>
<p className="text-xl text-slate-500 leading-relaxed font-normal">
                            Every agent listed undergoes a static code analysis and security scan to ensure no malicious code execution.
                        </p>
</div>
</div>

<div className="flex flex-col md:flex-row gap-10 items-start group">
<div className="w-full md:w-56 h-56 flex-shrink-0 rounded-2xl overflow-hidden shadow-sm bg-white p-4 flex items-center justify-center">
<img alt="Compare" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<div className="flex-1 pt-4">
<h3 className="text-2xl font-semibold text-slate-900 mb-3 tracking-tight">Standardized Config</h3>
<p className="text-xl text-slate-500 leading-relaxed font-normal">
                            All agents use a standard configuration schema, making it easy to swap between different models and providers.
                        </p>
</div>
</div>
</div>
<div className="mt-16">
<button className="inline-flex items-center gap-2 px-8 py-4 bg-[#4F46E5] hover:bg-[#4338ca] text-white text-lg font-medium rounded-lg transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5">
                    Explore Directory
                    <iconify-icon height="22" icon="solar:arrow-right-linear" width="22"></iconify-icon>
</button>
</div>
</div>
</div>
</section><section className="overflow-hidden bg-gradient-to-br from-[#DCD6FF] via-[#DCEBFF] to-[#D1F2F2] py-24 relative">
<style>
        @keyframes vertical-scroll {
            0% { transform: translateY(0); }
            100% { transform: translateY(-50%); }
        }
        .animate-vertical-scroll {
            animation: vertical-scroll 30s linear infinite;
        }
        /* Pause on hover to allow users to click/read */
        .pause-on-hover:hover .animate-vertical-scroll {
            animation-play-state: paused;
        }
    </style>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row items-center justify-between gap-16">

<div className="w-full lg:w-5/12 z-10">
<span className="text-slate-600 font-medium mb-2 block uppercase tracking-wide text-sm">Leaderboard</span>
<h2 className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
                    Top Rated Autonomous Agents
                </h2>
<p className="text-lg text-slate-600 mb-10 leading-relaxed">
                    Check out the agents with the highest success rates and lowest latency. We rank based on verified task completion on the AgentBench suite.
                </p>
<button className="bg-[#C7D2FE] hover:bg-[#A5B4FC] text-[#4338CA] px-8 py-3.5 rounded-lg font-semibold text-lg flex items-center gap-3 transition-colors duration-200">
                    See Full Rankings
                    <iconify-icon height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>

<div className="w-full lg:w-1/2 h-[600px] overflow-hidden relative pause-on-hover">

<div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#DCEBFF] to-transparent z-10 pointer-events-none opacity-60"></div>
<div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#D1F2F2] to-transparent z-10 pointer-events-none opacity-60"></div>
<div className="animate-vertical-scroll w-full max-w-[420px] mx-auto space-y-6">

<div className="bg-white p-10 rounded-2xl shadow-xl text-center">
<div className="w-32 h-32 rounded-full mx-auto mb-5 p-1 border border-slate-100 shadow-inner overflow-hidden relative flex items-center justify-center bg-blue-50">
<img alt="TechBot" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&amp;fit=crop&amp;q=80&amp;w=200"/>
</div>
<h3 className="text-2xl font-bold text-slate-900 mb-1">CodeMaster V2</h3>
<p className="text-sm text-slate-500 font-medium mb-5">Specialized in React &amp; Tailwind</p>
<div className="flex items-center justify-center gap-2 mb-6">
<div className="flex text-[#10B981]">
<iconify-icon height="24" icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon height="24" icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon height="24" icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon height="24" icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon height="24" icon="solar:star-bold" width="24"></iconify-icon>
</div>
<span className="text-base font-bold text-slate-900">98% Success</span>
</div>
<div className="text-sm text-slate-500 font-normal">
                            Ranked #1 in Coding Category
                        </div>
</div>

<div className="bg-white p-10 rounded-2xl shadow-xl text-center">
<div className="w-32 h-32 rounded-full mx-auto mb-5 p-1 border border-slate-100 shadow-inner overflow-hidden relative flex items-center justify-center bg-purple-50">
<img alt="Bot" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1620825937374-87fc7d6bddc2?auto=format&amp;fit=crop&amp;q=80&amp;w=200"/>
</div>
<h3 className="text-2xl font-bold text-slate-900 mb-1">ResearchAuto</h3>
<p className="text-sm text-slate-500 font-medium mb-5">Web Scraping &amp; Synthesis</p>
<div className="flex items-center justify-center gap-2 mb-6">
<div className="flex text-[#10B981]">
<iconify-icon height="24" icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon height="24" icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon height="24" icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon height="24" icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon height="24" icon="solar:star-bold-duotone" width="24"></iconify-icon>
</div>
<span className="text-base font-bold text-slate-900">2.4k Uses</span>
</div>
<div className="text-sm text-slate-500 font-normal">
                            Ranked #3 in Research
                        </div>
</div>

<div className="bg-white p-10 rounded-2xl shadow-xl text-center">
<div className="w-32 h-32 rounded-full mx-auto mb-5 p-1 border border-slate-100 shadow-inner overflow-hidden relative flex items-center justify-center bg-green-50">
<img alt="Bot" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&amp;fit=crop&amp;q=80&amp;w=200"/>
</div>
<h3 className="text-2xl font-bold text-slate-900 mb-1">FinanceGPT</h3>
<p className="text-sm text-slate-500 font-medium mb-5">Spreadsheet Automation</p>
<div className="flex items-center justify-center gap-2 mb-6">
<div className="flex text-[#10B981]">
<iconify-icon height="24" icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon height="24" icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon height="24" icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon height="24" icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon height="24" icon="solar:star-bold" width="24"></iconify-icon>
</div>
<span className="text-base font-bold text-slate-900">4.9 Rating</span>
</div>
<div className="text-sm text-slate-500 font-normal">
                            Ranked #1 in Finance
                        </div>
</div>

<div className="bg-white p-10 rounded-2xl shadow-xl text-center">
<div className="w-32 h-32 rounded-full mx-auto mb-5 p-1 border border-slate-100 shadow-inner overflow-hidden relative flex items-center justify-center bg-blue-50">
<img alt="TechBot" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&amp;fit=crop&amp;q=80&amp;w=200"/>
</div>
<h3 className="text-2xl font-bold text-slate-900 mb-1">CodeMaster V2</h3>
<p className="text-sm text-slate-500 font-medium mb-5">Specialized in React &amp; Tailwind</p>
<div className="flex items-center justify-center gap-2 mb-6">
<div className="flex text-[#10B981]">
<iconify-icon height="24" icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon height="24" icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon height="24" icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon height="24" icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon height="24" icon="solar:star-bold" width="24"></iconify-icon>
</div>
<span className="text-base font-bold text-slate-900">98% Success</span>
</div>
<div className="text-sm text-slate-500 font-normal">
                            Ranked #1 in Coding Category
                        </div>
</div>
</div>
</div>
</div>
</div>
</section><section className="overflow-hidden bg-slate-50 pt-24 pb-24 relative">
<style className="">
        @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
            animation: scroll-left 60s linear infinite;
            width: max-content;
        }
        .animate-infinite-scroll:hover {
            animation-play-state: paused;
        }
        .marquee-mask {
            mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
            -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
    </style>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
<div className="max-w-2xl">
<h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-tight">Recent activity on the platform</h2>
</div>

<div className="flex gap-3">
<button className="w-12 h-12 rounded-xl bg-[#F3F0FF] hover:bg-[#EBE5FF] flex items-center justify-center text-[#7C3AED] transition-colors duration-200 group">
<iconify-icon className="transform group-hover:-translate-x-0.5 transition-transform" height="24" icon="solar:arrow-left-linear" width="24"></iconify-icon>
</button>
<button className="w-12 h-12 rounded-xl bg-[#F3F0FF] hover:bg-[#EBE5FF] flex items-center justify-center text-[#7C3AED] transition-colors duration-200 group">
<iconify-icon className="transform group-hover:translate-x-0.5 transition-transform" height="24" icon="solar:arrow-right-linear" width="24"></iconify-icon>
</button>
</div>
</div>

<div className="marquee-mask w-full overflow-hidden">
<div className="flex gap-6 animate-infinite-scroll pl-4 gap-x-6 gap-y-6">

<div className="w-[420px] bg-white p-7 rounded-2xl border border-slate-100 shadow-sm flex-shrink-0 hover:shadow-md transition-shadow">
<div className="flex items-start gap-4 mb-5">
<div className="w-14 h-14 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-500">
<iconify-icon height="32" icon="solar:user-circle-linear" width="32"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-bold text-slate-900 leading-snug">Alex Chen</h3>
<p className="text-sm text-slate-500 font-medium">Used "DevBot Alpha"</p>
<p className="text-xs text-slate-400 mt-0.5">Integration: VS Code</p>
</div>
</div>
<div className="flex items-center gap-2 mb-1.5">
<div className="flex text-[#10B981] gap-0.5">
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
</div>
<span className="text-[#10B981] font-semibold text-sm">5.0/5</span>
</div>
<p className="text-xs text-slate-400 mb-4 font-medium">Verified 3 hours ago</p>
<p className="text-slate-700 text-[15px] leading-relaxed">
            “The refactoring capabilities are insane. It cleaned up my legacy Python codebase in minutes.”
        </p>
</div>

<div className="w-[420px] bg-white p-7 rounded-2xl border border-slate-100 shadow-sm flex-shrink-0 hover:shadow-md transition-shadow">
<div className="flex items-start gap-4 mb-5">
<div className="w-14 h-14 rounded-full bg-pink-50 flex items-center justify-center text-pink-500">
<iconify-icon height="32" icon="solar:user-circle-linear" width="32"></iconify-icon>
</div>
<div className="">
<h3 className="text-lg font-bold text-slate-900 leading-snug">Maria Rodriguez</h3>
<p className="text-sm text-slate-500 font-medium">Used "CopyFlow"</p>
<p className="text-xs text-slate-400 mt-0.5">Integration: Web</p>
</div>
</div>
<div className="flex items-center gap-2 mb-1.5">
<div className="flex text-[#10B981] gap-0.5">
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
</div>
<span className="text-[#10B981] font-semibold text-sm">5.0/5</span>
</div>
<p className="text-xs text-slate-400 mb-4 font-medium">Verified 5 hours ago</p>
<p className="text-slate-700 text-[15px] leading-relaxed">
            “Generated a month worth of social media content in 10 minutes. The tone was perfectly matched to our brand.”
        </p>
</div>

<div className="w-[420px] bg-white p-7 rounded-2xl border border-slate-100 shadow-sm flex-shrink-0 hover:shadow-md transition-shadow">
<div className="flex items-start gap-4 mb-5">
<div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
<iconify-icon height="32" icon="solar:user-circle-linear" width="32"></iconify-icon>
</div>
<div className="">
<h3 className="text-lg font-bold text-slate-900 leading-snug">James Smith</h3>
<p className="text-sm text-slate-500 font-medium">Used "DataSense"</p>
<p className="text-xs text-slate-400 mt-0.5">Integration: API</p>
</div>
</div>
<div className="flex items-center gap-2 mb-1.5">
<div className="flex text-[#10B981] gap-0.5">
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold-duotone" width="18"></iconify-icon>
</div>
<span className="text-[#10B981] font-semibold text-sm">4.8/5</span>
</div>
<p className="text-xs text-slate-400 mb-4 font-medium">Verified 1 day ago</p>
<p className="text-slate-700 text-[15px] leading-relaxed">
            “The visualizations are great, but the API latency could be slightly improved. Overall a solid tool for data analysis.”
        </p>
</div>

<div className="w-[420px] bg-white p-7 rounded-2xl border border-slate-100 shadow-sm flex-shrink-0 hover:shadow-md transition-shadow">
<div className="flex items-start gap-4 mb-5">
<div className="w-14 h-14 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-500">
<iconify-icon height="32" icon="solar:user-circle-linear" width="32"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-bold text-slate-900 leading-snug">Alex Chen</h3>
<p className="text-sm text-slate-500 font-medium">Used "DevBot Alpha"</p>
<p className="text-xs text-slate-400 mt-0.5">Integration: VS Code</p>
</div>
</div>
<div className="flex items-center gap-2 mb-1.5">
<div className="flex text-[#10B981] gap-0.5">
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
</div>
<span className="text-[#10B981] font-semibold text-sm">5.0/5</span>
</div>
<p className="text-xs text-slate-400 mb-4 font-medium">Verified 3 hours ago</p>
<p className="text-slate-700 text-[15px] leading-relaxed">
            “The refactoring capabilities are insane. It cleaned up my legacy Python codebase in minutes.”
        </p>
</div>
</div>
</div>
</section><section className="py-24 bg-gradient-to-br from-[#DCD6FF] via-[#E2E8FF] to-[#C9FBEF]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-4xl font-bold text-slate-900 tracking-tight mb-12 text-center">Browse Agents by Function</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<a className="group flex items-center justify-between p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-transparent hover:border-indigo-100" href="#">
<div className="flex items-start gap-5">
<div className="mt-0.5 text-[#6366F1]">
<iconify-icon height="24" icon="solar:code-square-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-bold text-slate-900">Software Development</h3>
<p className="text-sm text-slate-500 mt-1 font-medium">Coding, refactoring, testing, documentation</p>
</div>
</div>
<div className="text-[#6366F1] pl-4">
<iconify-icon className="transform group-hover:translate-x-1 transition-transform" height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
</a>

<a className="group flex items-center justify-between p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-transparent hover:border-indigo-100" href="#">
<div className="flex items-start gap-5">
<div className="mt-0.5 text-[#6366F1]">
<iconify-icon height="24" icon="solar:pen-new-square-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-bold text-slate-900">Content &amp; Copywriting</h3>
<p className="text-sm text-slate-500 mt-1 font-medium">Blogs, emails, social media, ad copy</p>
</div>
</div>
<div className="text-[#6366F1] pl-4">
<iconify-icon className="transform group-hover:translate-x-1 transition-transform" height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
</a>

<a className="group flex items-center justify-between p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-transparent hover:border-indigo-100" href="#">
<div className="flex items-start gap-5">
<div className="mt-0.5 text-[#6366F1]">
<iconify-icon height="24" icon="solar:graph-up-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-bold text-slate-900">Data &amp; Analytics</h3>
<p className="text-sm text-slate-500 mt-1 font-medium">Visualization, scraping, cleaning, insights</p>
</div>
</div>
<div className="text-[#6366F1] pl-4">
<iconify-icon className="transform group-hover:translate-x-1 transition-transform" height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
</a>

<a className="group flex items-center justify-between p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-transparent hover:border-indigo-100" href="#">
<div className="flex items-start gap-5">
<div className="mt-0.5 text-[#6366F1]">
<iconify-icon height="24" icon="solar:chat-round-dots-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-bold text-slate-900">Customer Support</h3>
<p className="text-sm text-slate-500 mt-1 font-medium">Chatbots, ticket triage, knowledge base</p>
</div>
</div>
<div className="text-[#6366F1] pl-4">
<iconify-icon className="transform group-hover:translate-x-1 transition-transform" height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
</a>

<a className="group flex items-center justify-between p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-transparent hover:border-indigo-100" href="#">
<div className="flex items-start gap-5">
<div className="mt-0.5 text-[#6366F1]">
<iconify-icon height="24" icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-bold text-slate-900">Security &amp; IT</h3>
<p className="text-sm text-slate-500 mt-1 font-medium">Penetration testing, log analysis, compliance</p>
</div>
</div>
<div className="text-[#6366F1] pl-4">
<iconify-icon className="transform group-hover:translate-x-1 transition-transform" height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
</a>

<a className="group flex items-center justify-between p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-transparent hover:border-indigo-100" href="#">
<div className="flex items-start gap-5">
<div className="mt-0.5 text-[#6366F1]">
<iconify-icon height="24" icon="solar:cart-large-minimalistic-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-bold text-slate-900">Sales &amp; Marketing</h3>
<p className="text-sm text-slate-500 mt-1 font-medium">Lead gen, outreach, CRM updates</p>
</div>
</div>
<div className="text-[#6366F1] pl-4">
<iconify-icon className="transform group-hover:translate-x-1 transition-transform" height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
</a>
</div>
</div>
</section><section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-12">Popular Integrations</h2>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">

<a className="group block" href="#">
<div className="aspect-[16/10] overflow-hidden rounded-lg mb-4 bg-slate-100 flex items-center justify-center p-8">
<img alt="Slack" className="w-24 h-24 transform group-hover:scale-110 transition-transform duration-500" src="https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg"/>
</div>
<h3 className="text-base font-medium text-slate-500 group-hover:text-[#4F46E5] transition-colors">Agents for Slack
    </h3>
</a>

<a className="group block" href="#">
<div className="aspect-[16/10] overflow-hidden rounded-lg mb-4 bg-slate-100 flex items-center justify-center p-8">
<img alt="Discord" className="w-24 h-24 transform group-hover:scale-110 transition-transform duration-500" src="https://cdn.worldvectorlogo.com/logos/discord-6.svg"/>
</div>
<h3 className="text-base font-medium text-slate-500 group-hover:text-[#4F46E5] transition-colors">Agents for Discord
    </h3>
</a>

<a className="group block" href="#">
<div className="aspect-[16/10] overflow-hidden rounded-lg mb-4 bg-slate-100 flex items-center justify-center p-8">
<img alt="VS Code" className="w-24 h-24 transform group-hover:scale-110 transition-transform duration-500" src="https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg"/>
</div>
<h3 className="text-base font-medium text-slate-500 group-hover:text-[#4F46E5] transition-colors">Agents for VS Code
    </h3>
</a>

<a className="group block" href="#">
<div className="aspect-[16/10] overflow-hidden rounded-lg mb-4 bg-slate-900 flex items-center justify-center p-8">
<iconify-icon className="text-white w-24 h-24 transform group-hover:scale-110 transition-transform duration-500" height="64" icon="solar:terminal-linear" width="64"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-500 group-hover:text-[#4F46E5] transition-colors">CLI Agents
    </h3>
</a>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-8">
<a className="text-slate-500 hover:text-[#4F46E5] transition-colors text-[15px]" href="#">Agents with GPT-4</a>
<a className="text-slate-500 hover:text-[#4F46E5] transition-colors text-[15px]" href="#">Agents with Claude 3</a>
<a className="text-slate-500 hover:text-[#4F46E5] transition-colors text-[15px]" href="#">Agents with Llama 3</a>
<a className="text-slate-500 hover:text-[#4F46E5] transition-colors text-[15px]" href="#">Agents with Mistral</a>
<a className="text-slate-500 hover:text-[#4F46E5] transition-colors text-[15px]" href="#">LangChain Agents</a>
<a className="text-slate-500 hover:text-[#4F46E5] transition-colors text-[15px]" href="#">AutoGPT Forks</a>
<a className="text-slate-500 hover:text-[#4F46E5] transition-colors text-[15px]" href="#">BabyAGI Implementations</a>
<a className="text-slate-500 hover:text-[#4F46E5] transition-colors text-[15px]" href="#">CrewAI Framework</a>
<a className="text-slate-500 hover:text-[#4F46E5] transition-colors text-[15px]" href="#">Python Agents</a>
<a className="text-slate-500 hover:text-[#4F46E5] transition-colors text-[15px]" href="#">Node.js Agents</a>
<a className="text-slate-500 hover:text-[#4F46E5] transition-colors text-[15px]" href="#">Go Agents</a>
<a className="text-slate-500 hover:text-[#4F46E5] transition-colors text-[15px]" href="#">Rust Agents</a>
</div>

<div className="h-px bg-slate-100 my-24"></div>

<h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-16">Explore technical categories</h2>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">

<div className="">
<div className="text-[#6366F1] mb-5">
<iconify-icon height="32" icon="solar:code-scan-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-6">Coding Assistants</h3>
<ul className="space-y-4">
<li><a className="text-slate-500 hover:text-[#4F46E5] transition-colors block" href="#">Code Refactoring</a></li>
<li><a className="text-slate-500 hover:text-[#4F46E5] transition-colors block" href="#">Unit Test Generation</a></li>
<li><a className="text-slate-500 hover:text-[#4F46E5] transition-colors block" href="#">Documentation Writers</a></li>
</ul>
</div>

<div>
<div className="text-[#6366F1] mb-5">
<iconify-icon height="32" icon="solar:document-text-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-6 leading-tight">Research &amp; Analysis</h3>
<ul className="space-y-4">
<li><a className="text-slate-500 hover:text-[#4F46E5] transition-colors block" href="#">Web Scrapers</a></li>
<li><a className="text-slate-500 hover:text-[#4F46E5] transition-colors block" href="#">Paper Summarizers</a></li>
<li><a className="text-slate-500 hover:text-[#4F46E5] transition-colors block" href="#">Trend Analysis</a></li>
</ul>
</div>

<div>
<div className="text-[#6366F1] mb-5">
<iconify-icon height="32" icon="solar:gallery-wide-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-6">Generative Media</h3>
<ul className="space-y-4">
<li><a className="text-slate-500 hover:text-[#4F46E5] transition-colors block" href="#">Image Generation</a></li>
<li><a className="text-slate-500 hover:text-[#4F46E5] transition-colors block" href="#">Video Editing Bots</a></li>
<li><a className="text-slate-500 hover:text-[#4F46E5] transition-colors block" href="#">Asset Pipelines</a></li>
</ul>
</div>

<div className="">
<div className="text-[#6366F1] mb-5">
<iconify-icon height="32" icon="solar:settings-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-6">DevOps</h3>
<ul className="space-y-4">
<li className=""><a className="text-slate-500 hover:text-[#4F46E5] transition-colors block" href="#">CI/CD Automation</a></li>
<li><a className="text-slate-500 hover:text-[#4F46E5] transition-colors block" href="#">Infrastructure as Code</a></li>
<li><a className="text-slate-500 hover:text-[#4F46E5] transition-colors block" href="#">Log Monitoring</a></li>
</ul>
</div>
</div>
</div>
</section><section className="bg-[#4F46E5] overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

<div className="w-full lg:w-1/2 py-20 lg:py-28">
<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#22c55e] text-white mb-6 tracking-wide">
                    AgentGuide for Developers
                </span>
<h2 className="text-4xl lg:text-5xl font-semibold text-white tracking-tight mb-6 leading-[1.15]">
                    Built an AI Agent? Submit it to the directory and reach thousands of users.
                </h2>
<p className="text-indigo-100 text-lg mb-10 font-normal">
                    Free submission. Get verified. Access our developer API.
                </p>
<a className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white transition-all duration-200 bg-[#1e293b] rounded-lg hover:bg-[#0f172a] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 border border-transparent" href="#">
                    Submit Agent
                </a>
</div>

<div className="lg:w-1/2 w-full relative">
<div className="aspect-[4/5] lg:aspect-square lg:max-h-none overflow-hidden lg:rounded-t-none lg:rounded-b-none lg:h-full w-full max-h-[600px] rounded-t-2xl relative">
<img alt="Developer Dashboard" className="lg:scale-110 object-top w-full h-full object-cover" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>
</div>
</div>
</section><footer className="bg-white border-t border-slate-100 pt-20 pb-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-20">

<div className="lg:col-span-1">
<a className="flex items-center gap-2 mb-4 group" href="#">

<iconify-icon className="text-[#4F46E5]" height="32" icon="solar:atom-linear" width="32"></iconify-icon>
<div className="flex flex-col">
<span className="text-xl font-bold text-slate-900 tracking-tight leading-none">AgentGuide</span>
</div>
</a>
<p className="text-xs text-slate-500 font-medium mb-6 pl-1">The #1 Directory for Autonomous Agents</p>
</div>

<div className="">
<h3 className="text-slate-900 font-semibold mb-6 tracking-tight">For Users</h3>
<ul className="space-y-4 text-[15px] text-slate-500 font-medium">
<li><a className="hover:text-[#4F46E5] transition-colors" href="#">Find an Agent</a></li>
<li><a className="hover:text-[#4F46E5] transition-colors" href="#">Compare Benchmarks</a></li>
<li><a className="hover:text-[#4F46E5] transition-colors" href="#">Request a Workflow</a></li>
</ul>
</div>

<div className="">
<h3 className="text-slate-900 font-semibold mb-6 tracking-tight">Resources</h3>
<ul className="space-y-4 text-[15px] text-slate-500 font-medium">
<li><a className="hover:text-[#4F46E5] transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-[#4F46E5] transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-[#4F46E5] transition-colors" href="#">API Status</a></li>
</ul>
</div>

<div>
<h3 className="text-slate-900 font-semibold mb-6 tracking-tight">For Developers</h3>
<ul className="space-y-4 text-[15px] text-slate-500 font-medium">
<li><a className="hover:text-[#4F46E5] transition-colors" href="#">Submit Agent</a></li>
<li><a className="hover:text-[#4F46E5] transition-colors" href="#">Developer Portal</a></li>
<li><a className="hover:text-[#4F46E5] transition-colors" href="#">Verification Badge</a></li>
</ul>
</div>

<div>
<h3 className="text-slate-900 font-semibold mb-6 tracking-tight">Company</h3>
<ul className="space-y-4 text-[15px] text-slate-500 font-medium">
<li><a className="hover:text-[#4F46E5] transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-[#4F46E5] transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-[#4F46E5] transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>

<div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
<div className="text-xs text-slate-400 font-medium leading-relaxed">
<p>© 2024 The Agent Guide Inc.</p>
<p>San Francisco, CA</p>
</div>
<div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-slate-500 font-medium">
<a className="hover:text-slate-900 transition-colors" href="#">Privacy</a>
<a className="hover:text-slate-900 transition-colors" href="#">Terms</a>
<a className="hover:text-slate-900 transition-colors" href="#">Cookies</a>
</div>
<div className="flex items-center gap-6">
<div className="flex gap-4 text-slate-800">
<a className="hover:text-[#4F46E5] transition-colors p-1" href="#">
<iconify-icon height="20" icon="solar:camera-linear" width="20"></iconify-icon>
</a>
<a className="hover:text-[#4F46E5] transition-colors p-1" href="#">
<iconify-icon height="20" icon="solar:brand-x-linear" width="20"></iconify-icon>
</a>
<a className="hover:text-[#4F46E5] transition-colors p-1" href="#">
<iconify-icon height="20" icon="solar:brand-github-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</footer>


    </>
  );
}
