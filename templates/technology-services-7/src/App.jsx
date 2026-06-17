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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide icons
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
      

<div className="fixed inset-0 pointer-events-none z-0">
<div className="absolute top-[20%] left-[10%] w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-teal-500/10 rounded-full blur-[120px]"></div>
<div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[150px]"></div>
</div>

<div className="relative z-50 flex flex-col w-full border-b border-white/[0.05] bg-[#050810]/80 backdrop-blur-xl">

<div className="flex justify-between items-center px-6 lg:px-12 py-3 border-b border-white/[0.02]">
<div className="flex items-center gap-6 text-base text-gray-400 font-medium">
<a className="hover:text-white transition-colors" href="#">Home</a>
<button className="flex items-center gap-1.5 hover:text-white transition-colors group">
                    Stages
                    <i className="w-4 h-4 text-gray-500 group-hover:text-gray-300 transition-colors" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
</div>
<button className="flex items-center gap-2 text-base text-gray-400 font-medium hover:text-white transition-colors group">
<i className="w-4 h-4" data-lucide="user" strokeWidth="1.5"></i>
                sangamp880
                <i className="w-4 h-4 text-gray-500 group-hover:text-gray-300 transition-colors" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
</div>

<nav className="flex overflow-x-auto hide-scrollbar px-6 lg:px-12 py-4 gap-2 lg:gap-4 items-center justify-center lg:justify-start min-w-max w-full">
<a className="flex items-center gap-2 px-4 py-2 rounded-lg text-base text-gray-400 hover:text-gray-200 hover:bg-white/[0.03] transition-all whitespace-nowrap font-medium" href="#">
<i className="w-4 h-4" data-lucide="layout-dashboard" strokeWidth="1.5"></i> Overview
            </a>
<a className="flex items-center gap-2 px-4 py-2 rounded-lg text-base text-teal-300 bg-teal-500/10 border border-teal-500/20 shadow-[0_0_15px_-3px_rgba(20,184,166,0.1)] transition-all whitespace-nowrap font-medium" href="#">
<i className="w-4 h-4" data-lucide="cpu" strokeWidth="1.5"></i> Tech + Touch
            </a>
<a className="flex items-center gap-2 px-4 py-2 rounded-lg text-base text-gray-400 hover:text-gray-200 hover:bg-white/[0.03] transition-all whitespace-nowrap font-medium" href="#">
<i className="w-4 h-4" data-lucide="building" strokeWidth="1.5"></i> Industry Expertise
            </a>
<a className="flex items-center gap-2 px-4 py-2 rounded-lg text-base text-gray-400 hover:text-gray-200 hover:bg-white/[0.03] transition-all whitespace-nowrap font-medium" href="#">
<i className="w-4 h-4" data-lucide="network" strokeWidth="1.5"></i> Service Model
            </a>
<a className="flex items-center gap-2 px-4 py-2 rounded-lg text-base text-gray-400 hover:text-gray-200 hover:bg-white/[0.03] transition-all whitespace-nowrap font-medium" href="#">
<i className="w-4 h-4" data-lucide="search" strokeWidth="1.5"></i> Discovery
            </a>
<a className="flex items-center gap-2 px-4 py-2 rounded-lg text-base text-gray-400 hover:text-gray-200 hover:bg-white/[0.03] transition-all whitespace-nowrap font-medium ml-auto" href="#">
<i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i> Next Steps
            </a>
</nav>
</div>
<main className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12 pt-20 pb-32">

<div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-stretch mb-32">

<div className="hidden lg:block absolute top-1/2 left-[10%] right-[10%] h-px bg-gradient-to-r from-blue-500/0 via-white/10 to-teal-500/0 z-0"></div>

<div className="w-full rounded-3xl bg-gradient-to-br from-[#0d1424] to-[#070b14] border border-blue-500/10 p-8 lg:p-10 relative overflow-hidden group h-full flex flex-col justify-center">

<div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] group-hover:bg-blue-500/10 transition-all duration-700"></div>
<h2 className="text-3xl font-medium tracking-tight text-white mb-10 flex items-center gap-3">
                    Nationals
                </h2>
<div className="space-y-10 relative z-10">
<div>
<div className="flex items-center gap-2 mb-5">
<i className="w-5 h-5 text-blue-400" data-lucide="trending-up" strokeWidth="1.5"></i>
<h3 className="text-lg font-medium text-blue-400 uppercase tracking-wider">Scale Advantages</h3>
</div>
<ul className="space-y-4 ml-1">
<li className="flex items-start gap-4 text-lg text-gray-300">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500/50 mt-2.5 shrink-0"></div>
                                Massive Dev Budget
                            </li>
<li className="flex items-start gap-4 text-lg text-gray-300">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500/50 mt-2.5 shrink-0"></div>
                                World Class Sales &amp; Marketing
                            </li>
</ul>
</div>
<div>
<div className="flex items-center gap-2 mb-5">
<i className="w-5 h-5 text-gray-500" data-lucide="alert-triangle" strokeWidth="1.5"></i>
<h3 className="text-lg font-medium text-gray-500 uppercase tracking-wider">Structural Limitations</h3>
</div>
<ul className="space-y-4 ml-1">
<li className="flex items-start gap-4 text-lg text-gray-400">
<div className="w-1.5 h-1.5 rounded-full bg-gray-600 mt-2.5 shrink-0"></div>
                                Generalists by Nature
                            </li>
<li className="flex items-start gap-4 text-lg text-gray-400">
<div className="w-1.5 h-1.5 rounded-full bg-gray-600 mt-2.5 shrink-0"></div>
                                Service capped at scale
                            </li>
<li className="flex items-start gap-4 text-lg text-gray-400">
<div className="w-1.5 h-1.5 rounded-full bg-gray-600 mt-2.5 shrink-0"></div>
                                Beholden to Investors
                            </li>
</ul>
</div>
</div>
</div>

<div className="relative z-30 w-full mx-auto flex flex-col justify-center h-full my-4 lg:my-0">

<div className="relative group cursor-default w-full max-w-[360px] mx-auto">

<div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-[32px] blur-lg opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
<div className="absolute inset-0 bg-gradient-to-b from-orange-400/20 to-transparent rounded-[28px] opacity-0 group-hover:opacity-100 transition duration-500"></div>

<div className="relative bg-[#0c101a]/90 backdrop-blur-xl border-t border-l border-white/10 border-b border-r border-orange-500/20 rounded-[28px] p-8 lg:p-10 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] transform transition-transform duration-500 hover:scale-[1.02] flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500/20 to-orange-600/5 border border-orange-500/30 flex items-center justify-center mb-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
<i className="w-8 h-8 text-orange-400" data-lucide="layers" strokeWidth="1.5"></i>
</div>
<h1 className="text-4xl font-semibold tracking-tight text-white mb-4">
                            ProLiant
                        </h1>
<div className="h-px w-12 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent mb-5"></div>
<p className="text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r from-orange-200 to-orange-400">
                            Proprietary Tech +<br/> Personal Service
                        </p>
</div>
</div>
</div>

<div className="w-full rounded-3xl bg-gradient-to-bl from-[#0a1818] to-[#070b14] border border-teal-500/10 p-8 lg:p-10 relative overflow-hidden group h-full flex flex-col justify-center">

<div className="absolute -top-24 -right-24 w-64 h-64 bg-teal-500/5 rounded-full blur-[80px] group-hover:bg-teal-500/10 transition-all duration-700"></div>
<h2 className="text-3xl font-medium tracking-tight text-white mb-10 flex items-center gap-3">
                    Regionals
                </h2>
<div className="space-y-10 relative z-10">
<div>
<div className="flex items-center gap-2 mb-5">
<i className="w-5 h-5 text-teal-400" data-lucide="heart-handshake" strokeWidth="1.5"></i>
<h3 className="text-lg font-medium text-teal-400 uppercase tracking-wider">Service Strengths</h3>
</div>
<ul className="space-y-4 ml-1">
<li className="flex items-start gap-4 text-lg text-gray-300">
<div className="w-1.5 h-1.5 rounded-full bg-teal-500/50 mt-2.5 shrink-0"></div>
                                High Service
                            </li>
<li className="flex items-start gap-4 text-lg text-gray-300">
<div className="w-1.5 h-1.5 rounded-full bg-teal-500/50 mt-2.5 shrink-0"></div>
                                Industry Specialists
                            </li>
</ul>
</div>
<div>
<div className="flex items-center gap-2 mb-5">
<i className="w-5 h-5 text-gray-500" data-lucide="server-crash" strokeWidth="1.5"></i>
<h3 className="text-lg font-medium text-gray-500 uppercase tracking-wider">Platform Limitations</h3>
</div>
<ul className="space-y-4 ml-1">
<li className="flex items-start gap-4 text-lg text-gray-400">
<div className="w-1.5 h-1.5 rounded-full bg-gray-600 mt-2.5 shrink-0"></div>
                                Limited Tech
                            </li>
<li className="flex items-start gap-4 text-lg text-gray-400">
<div className="w-1.5 h-1.5 rounded-full bg-gray-600 mt-2.5 shrink-0"></div>
                                No Control as Reseller
                            </li>
<li className="flex items-start gap-4 text-lg text-gray-400">
<div className="w-1.5 h-1.5 rounded-full bg-gray-600 mt-2.5 shrink-0"></div>
                                Gets Acquired
                            </li>
</ul>
</div>
</div>
</div>
</div>

<div className="flex flex-col items-center justify-center mb-20">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-white mb-6 text-center">
                Bridging the gap between scale and service.
            </h2>
<div className="w-24 h-1 rounded-full bg-gradient-to-r from-blue-500/50 via-indigo-500/50 to-teal-500/50"></div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20">

<div className="group relative bg-[#0a0f1c] rounded-3xl p-8 border border-white/[0.05] hover:border-white/[0.1] transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col h-full">
<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-8 shrink-0">
<i className="w-7 h-7 text-blue-400" data-lucide="cpu" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-4">Technology-First Approach</h3>
<p className="text-lg text-gray-400 leading-relaxed mt-auto">
                    Proprietary software built in-house, giving us complete control over features, updates, and innovation.
                </p>
</div>

<div className="group relative bg-[#0a0f1c] rounded-3xl p-8 border border-white/[0.05] hover:border-white/[0.1] transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col h-full">
<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-8 shrink-0">
<i className="w-7 h-7 text-indigo-400" data-lucide="scale" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-4">The Perfect Balance</h3>
<p className="text-lg text-gray-400 leading-relaxed mt-auto">
                    Combining enterprise-grade technology with personalized, hands-on support that scales with your business.
                </p>
</div>

<div className="group relative bg-[#0a0f1c] rounded-3xl p-8 border border-white/[0.05] hover:border-white/[0.1] transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col h-full">
<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="w-14 h-14 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-8 shrink-0">
<i className="w-7 h-7 text-teal-400" data-lucide="users" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-4">Service-Centric Culture</h3>
<p className="text-lg text-gray-400 leading-relaxed mt-auto">
                    Dedicated support teams who know your business and provide personalized assistance every step of the way.
                </p>
</div>
</div>

<div className="flex flex-wrap items-center justify-center gap-4 mb-20">
<div className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] transition-colors cursor-default">
<i className="w-4 h-4 text-blue-400" data-lucide="user-circle" strokeWidth="1.5"></i>
<span className="text-base font-medium text-gray-300">Primary AM (direct line)</span>
</div>
<div className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] transition-colors cursor-default">
<i className="w-4 h-4 text-indigo-400" data-lucide="plug-2" strokeWidth="1.5"></i>
<span className="text-base font-medium text-gray-300">Integrations SME</span>
</div>
<div className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] transition-colors cursor-default">
<i className="w-4 h-4 text-purple-400" data-lucide="clock" strokeWidth="1.5"></i>
<span className="text-base font-medium text-gray-300">Time &amp; Labor SME</span>
</div>
<div className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] transition-colors cursor-default">
<i className="w-4 h-4 text-pink-400" data-lucide="calculator" strokeWidth="1.5"></i>
<span className="text-base font-medium text-gray-300">Payroll &amp; Tax SME</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 relative z-10">

<div className="relative bg-[#070b14] rounded-3xl p-10 lg:p-12 overflow-hidden border border-white/[0.03] group">

<i className="absolute -bottom-10 -right-10 w-64 h-64 text-blue-500/5 group-hover:text-blue-500/10 transition-colors duration-700 pointer-events-none" data-lucide="building-2" strokeWidth="0.5"></i>
<h3 className="text-2xl lg:text-3xl font-medium tracking-tight text-white mb-8">Built Like a National</h3>
<ul className="space-y-6 relative z-10">
<li className="flex items-center gap-4 text-lg text-gray-300">
<div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 shrink-0">
<i className="w-4 h-4 text-blue-400" data-lucide="check" strokeWidth="2"></i>
</div>
                        Proprietary Platform
                    </li>
<li className="flex items-center gap-4 text-lg text-gray-300">
<div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 shrink-0">
<i className="w-4 h-4 text-blue-400" data-lucide="check" strokeWidth="2"></i>
</div>
                        Scalable Technology
                    </li>
<li className="flex items-center gap-4 text-lg text-gray-300">
<div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 shrink-0">
<i className="w-4 h-4 text-blue-400" data-lucide="check" strokeWidth="2"></i>
</div>
                        Deep Integrations
                    </li>
</ul>
</div>

<div className="relative bg-[#070b14] rounded-3xl p-10 lg:p-12 overflow-hidden border border-white/[0.03] group">

<i className="absolute -bottom-10 -right-10 w-64 h-64 text-fuchsia-500/5 group-hover:text-fuchsia-500/10 transition-colors duration-700 pointer-events-none" data-lucide="store" strokeWidth="0.5"></i>
<h3 className="text-2xl lg:text-3xl font-medium tracking-tight text-white mb-8">Served Like a Boutique</h3>
<ul className="space-y-6 relative z-10">
<li className="flex items-center gap-4 text-lg text-gray-300">
<div className="flex items-center justify-center w-8 h-8 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 shrink-0">
<i className="w-4 h-4 text-fuchsia-400" data-lucide="check" strokeWidth="2"></i>
</div>
                        1:1 Account Management
                    </li>
<li className="flex items-center gap-4 text-lg text-gray-300">
<div className="flex items-center justify-center w-8 h-8 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 shrink-0">
<i className="w-4 h-4 text-fuchsia-400" data-lucide="check" strokeWidth="2"></i>
</div>
                        SME Support Team
                    </li>
<li className="flex items-center gap-4 text-lg text-gray-300">
<div className="flex items-center justify-center w-8 h-8 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 shrink-0">
<i className="w-4 h-4 text-fuchsia-400" data-lucide="check" strokeWidth="2"></i>
</div>
                        Personal Service
                    </li>
</ul>
</div>
</div>
</main>


    </>
  );
}
