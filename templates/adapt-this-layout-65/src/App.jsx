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



      lucide.createIcons();
    


      function toggleChat() {
        const chat = document.getElementById('ai-chat-interface');
        const btn = document.getElementById('ai-chat-toggle');
        const icon = btn.querySelector('[data-lucide]');

        if (chat.classList.contains('scale-0')) {
          chat.classList.remove('scale-0', 'opacity-0', 'pointer-events-none');
          chat.classList.add('scale-100', 'opacity-100', 'pointer-events-auto');
          icon.setAttribute('data-lucide', 'x');
        } else {
          chat.classList.add('scale-0', 'opacity-0', 'pointer-events-none');
          chat.classList.remove('scale-100', 'opacity-100', 'pointer-events-auto');
          icon.setAttribute('data-lucide', 'bot');
        }
        lucide.createIcons();
      }
      // Initialize icons for the inserted chat box
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
      

<nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 glass-panel">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-teal-500 to-cyan-300 flex items-center justify-center">
<i className="text-[#021a1e] w-5 h-5 stroke-[1.5]" data-lucide="activity"></i>
</div>
<span className="text-xl font-medium tracking-tight text-white">
            Growthally
          </span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-slate-400 hover:text-white transition-colors duration-300" href="#about">
            About Us
          </a>
<a className="hover:text-white transition-colors duration-300 text-sm text-slate-400" href="/deals">Marketplace</a>
<a className="hover:text-white transition-colors duration-300 text-sm text-slate-400" href="#news">Newsletter</a>
<a className="hover:text-white transition-colors duration-300 text-sm text-slate-400" href="#contact">Contact us</a>
</div>
<button className="hidden md:flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-sm font-medium px-5 py-2.5 rounded-full border border-white/5 transition-all duration-300 group">
          Start Investing
          <i className="w-4 h-4 group-hover:translate-x-0.5 transition-transform stroke-[1.5]" data-lucide="arrow-right"></i>
</button>
<button className="md:hidden text-white">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="menu"></i>
</button>
</div>
</nav>

<header className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden grid-bg">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-900/20 rounded-full blur-[120px] pointer-events-none"></div>
<div className="grid grid-cols-1 md:grid-cols-12 w-full max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative gap-x-12 gap-y-12 items-center">
<div className="md:col-span-12 text-center md:mb-12">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-300 text-xs tracking-wide uppercase mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"></span>
            IPO Access Now Live
          </div>
<h1 className="text-5xl md:text-8xl font-light tracking-tighter text-white mb-6 leading-[0.9]">
            PHARMA
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-cyan-400 font-normal">
              EQUITY
            </span>
<br/>
            MARKETPLACE
          </h1>
<p className="text-lg md:text-xl text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
            Growthally bridges the gap between private capital and breakthrough
            med-tech. Acquire stake in the next generation of pharmaceutical
            giants before they go public.
          </p>
</div>

<div className="md:col-span-12 h-[400px] relative w-full flex justify-center items-end border-b border-white/10">
<div className="relative w-48 h-64 border border-white/20 rounded-t-full rounded-b-lg backdrop-blur-sm bg-gradient-to-b from-white/5 to-transparent flex items-center justify-center overflow-hidden mx-4 z-20 shadow-2xl shadow-teal-900/50">
<div className="absolute inset-0 bg-gradient-to-tr from-teal-500/10 to-transparent"></div>
<div className="flex flex-col items-center gap-4 opacity-80">
<i className="w-12 h-12 text-teal-300 stroke-[1.5]" data-lucide="dna"></i>
<div className="w-12 h-0.5 bg-teal-500/50"></div>
<span className="text-xs tracking-widest uppercase text-teal-100">
                Series A
              </span>
</div>
</div>
<div className="absolute inset-0 flex justify-center pointer-events-none">
<div className="w-px h-full bg-white/10 mx-24"></div>
<div className="w-px h-full bg-white/10 mx-24"></div>
</div>
<div className="absolute top-1/4 left-1/4 w-24 h-24 rounded-full border border-white/10 flex items-center justify-center animate-[pulse_4s_ease-in-out_infinite]">
<span className="text-xs text-slate-500">Phase III</span>
</div>
<div className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full border border-white/5 flex items-center justify-center">
<span className="text-xs text-slate-500">FDA Appr.</span>
</div>
</div>
<div className="md:col-span-12 flex justify-between items-center py-6 border-t border-white/10 text-xs text-slate-500 uppercase tracking-widest">
<span>Trends</span>
<span>Acquisitions</span>
<span>Valuations</span>
<span>Liquidity</span>
</div>
</div>
</header>

<section className="bg-[#eef2f6] text-slate-900 relative border-t border-slate-200" id="about">
<div className="max-w-7xl mx-auto border-x border-slate-200 grid-bg-light">
<div className="border-b border-slate-200 p-6">
<span className="text-xs font-medium tracking-widest text-slate-500 uppercase">
            Strategy 2025
          </span>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-200 min-h-[600px]">

<div className="group relative p-8 flex flex-col justify-start hover:bg-white transition-colors duration-500">
<span className="text-lg font-light text-slate-400 mb-6 group-hover:text-teal-600 transition-colors">
              /01
            </span>
<h3 className="text-xl font-normal leading-tight mb-4">
              Discovery &amp;
              <br/>
              Vetting
            </h3>
<p className="text-sm text-slate-500 leading-relaxed max-w-[200px]">
              Accelerating the identification of high-potential active
              pharmaceutical ingredients (API) manufacturers.
            </p>
<div className="mt-auto pt-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<i className="w-6 h-6 text-teal-600 stroke-[1.5]" data-lucide="search"></i>
</div>
</div>

<div className="group relative p-8 flex flex-col justify-start pt-24 md:pt-32 hover:bg-white transition-colors duration-500 bg-slate-50/50">
<span className="text-lg font-light text-slate-400 mb-6 group-hover:text-teal-600 transition-colors">
              /02
            </span>
<h3 className="text-xl font-normal leading-tight mb-4">
              Equity
              <br/>
              Allocation
            </h3>
<p className="text-sm text-slate-500 leading-relaxed max-w-[200px]">
              Increasing the share of domestic producers in the internal
              portfolio through strategic buy-ins.
            </p>
<div className="mt-auto pt-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<i className="w-6 h-6 text-teal-600 stroke-[1.5]" data-lucide="pie-chart"></i>
</div>
</div>

<div className="group relative p-8 flex flex-col justify-start pt-40 md:pt-64 hover:bg-white transition-colors duration-500">
<span className="text-lg font-light text-slate-400 mb-6 group-hover:text-teal-600 transition-colors">
              /03
            </span>
<h3 className="text-xl font-normal leading-tight mb-4">
              Production
              <br/>
              Scaling
            </h3>
<p className="text-sm text-slate-500 leading-relaxed max-w-[200px]">
              Funding the output increase of essential domestic medicines and
              biotech solutions.
            </p>
<div className="mt-auto pt-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<i className="w-6 h-6 text-teal-600 stroke-[1.5]" data-lucide="trending-up"></i>
</div>
</div>

<div className="group relative p-8 flex flex-col justify-start pt-56 md:pt-96 hover:bg-white transition-colors duration-500 bg-slate-50/50">
<span className="text-lg font-light text-slate-400 mb-6 group-hover:text-teal-600 transition-colors">
              /04
            </span>
<h3 className="text-xl font-normal leading-tight mb-4">
              Global
              <br/>
              Positioning
            </h3>
<p className="text-sm text-slate-500 leading-relaxed max-w-[200px]">
              Strengthening the positions of portfolio companies in the
              international pharmaceutical market.
            </p>
<div className="mt-auto pt-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<i className="w-6 h-6 text-teal-600 stroke-[1.5]" data-lucide="globe"></i>
</div>
</div>
</div>
<div className="border-t border-slate-200 p-8 md:p-16">
<h2 className="text-6xl md:text-9xl font-thin tracking-tighter text-slate-300 uppercase opacity-50 select-none">
            Objectives
          </h2>
</div>
</div>
</section>

<section className="bg-[#F3F5F7] text-slate-900 py-24 relative overflow-hidden" id="deals">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-4xl md:text-5xl font-light tracking-tight text-slate-900 mb-4">
              Active
              <span className="text-teal-600">Opportunities</span>
</h2>
<p className="text-slate-500 max-w-lg leading-relaxed text-lg">
              Curated high-growth rounds in med-tech.
            </p>
</div>
<div className="flex gap-4">
<button className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center hover:bg-white hover:shadow-md transition-all">
<i className="w-4 h-4 text-slate-600" data-lucide="arrow-left"></i>
</button>
<button className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center hover:bg-white hover:shadow-md transition-all">
<i className="w-4 h-4 text-slate-600" data-lucide="arrow-right"></i>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">

<div className="group relative md:col-span-1 h-[500px] md:h-full bg-[#E8EBED] hover:bg-white rounded-[2rem] overflow-hidden transition-all duration-500 shadow-sm hover:shadow-xl hover:-translate-y-1">

<div className="relative h-full p-10 flex flex-col justify-between z-10">
<div>
<p className="text-xs font-semibold tracking-widest text-slate-500 uppercase mb-4">
                  Therapeutics
                </p>
<h3 className="text-4xl font-medium tracking-tighter leading-[1.1] text-slate-900">
                  STRONG &amp; SUCCESSFUL
                  <br/>
<span className="text-teal-700">COLLABORATIONS</span>
</h3>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-12">
<div className="glass-pill w-48 h-20 rounded-full rotate-[-25deg] flex items-center justify-center">
<div className="w-2/3 h-1 bg-white/30 rounded-full blur-[1px]"></div>
</div>
</div>
<div className="flex justify-between items-end">
<div className="flex flex-col">
<span className="text-lg font-bold text-slate-900">Vertex</span>
<span className="text-xs text-slate-500">Pharma Inc.</span>
</div>
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
<i className="w-5 h-5 text-slate-900" data-lucide="plus"></i>
</div>
</div>
</div>

<div className="absolute inset-0 z-20 glass-card-reveal flex flex-col justify-end p-8 transition-all duration-500 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0">
<div className="space-y-6">
<div className="grid grid-cols-2 gap-4 border-b border-slate-900/10 pb-6">
<div>
<span className="block text-[10px] uppercase tracking-wider text-slate-500 mb-1">
                      Valuation
                    </span>
<span className="block text-2xl font-light text-slate-900">
                      $4.2B
                    </span>
</div>
<div>
<span className="block text-[10px] uppercase tracking-wider text-slate-500 mb-1">
                      Round
                    </span>
<span className="block text-2xl font-light text-slate-900">
                      Series C
                    </span>
</div>
</div>
<div className="text-sm text-slate-700 leading-relaxed">
                  Expanding novel non-opioid pain treatment pipeline. Phase 3
                  results pending Q4 2024.
                </div>
<button className="w-full py-4 bg-[#021a1e] text-white rounded-xl text-sm font-medium hover:bg-teal-900 transition-colors flex items-center justify-between px-6">
                  View Deal Room
                  <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>

<div className="group relative md:col-span-1 h-[500px] md:h-full bg-[#F5F7F9] hover:bg-white rounded-[2rem] overflow-hidden transition-all duration-500 shadow-sm hover:shadow-xl hover:-translate-y-1">
<div className="relative h-full p-10 flex flex-col z-10">
<div className="flex justify-between items-start mb-12">
<h3 className="text-3xl font-medium tracking-tight leading-tight text-slate-900">
                  LIST OF
                  <br/>
                  EXCLUSIVE
                  <br/>
<span className="text-slate-400">SERVICES</span>
</h3>
<i className="w-6 h-6 text-slate-300" data-lucide="layers"></i>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-[-20px] transition-all duration-700 group-hover:gap-2">
<div className="glass-layer w-32 h-32 rounded-2xl transform rotate-[60deg] skew-x-12 translate-y-8 z-30 group-hover:rotate-[45deg] transition-all duration-700"></div>
<div className="glass-layer w-32 h-32 rounded-2xl transform rotate-[60deg] skew-x-12 translate-y-[-10px] opacity-80 z-20 group-hover:rotate-[45deg] transition-all duration-700 delay-75"></div>
<div className="glass-layer w-32 h-32 rounded-2xl transform rotate-[60deg] skew-x-12 translate-y-[-50px] opacity-60 z-10 group-hover:rotate-[45deg] transition-all duration-700 delay-100"></div>
</div>
<div className="mt-auto">
<div className="flex flex-col">
<span className="text-lg font-bold text-slate-900">Moderna</span>
<span className="text-xs text-slate-500">Infrastructure</span>
</div>
</div>
</div>

<div className="absolute inset-0 z-20 glass-card-reveal flex flex-col justify-end p-8 transition-all duration-500 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0">
<div className="space-y-6">
<ul className="space-y-3 border-b border-slate-900/10 pb-6">
<li className="flex items-center gap-3 text-sm text-slate-700">
<i className="w-4 h-4 text-teal-600" data-lucide="check-circle"></i>
                    Regulatory Approval
                  </li>
<li className="flex items-center gap-3 text-sm text-slate-700">
<i className="w-4 h-4 text-teal-600" data-lucide="check-circle"></i>
                    Manufacturing Scale
                  </li>
<li className="flex items-center gap-3 text-sm text-slate-700">
<i className="w-4 h-4 text-teal-600" data-lucide="check-circle"></i>
                    Global Logistics
                  </li>
</ul>
<button className="w-full py-4 bg-[#021a1e] text-white rounded-xl text-sm font-medium hover:bg-teal-900 transition-colors flex items-center justify-between px-6">
                  Access Service Layer
                  <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>

<div className="group relative md:col-span-1 h-[500px] md:h-full bg-[#E8EBED] hover:bg-white rounded-[2rem] overflow-hidden transition-all duration-500 shadow-sm hover:shadow-xl hover:-translate-y-1">
<div className="relative h-full p-10 flex flex-col justify-between z-10">
<div>
<p className="text-xs font-semibold tracking-widest text-slate-500 uppercase mb-4">
                  Genomics
                </p>
<h3 className="text-4xl font-medium tracking-tighter leading-[1.1] text-slate-900">
                  WHAT'S YOUR
                  <br/>
<span className="text-teal-700">GENETIC DNA?</span>
</h3>
</div>

<div className="absolute bottom-20 right-10 transition-transform duration-700 group-hover:scale-125 group-hover:rotate-180">
<div className="glass-torus w-32 h-32 rounded-full flex items-center justify-center">
<div className="w-16 h-16 bg-[#E8EBED] rounded-full group-hover:bg-white transition-colors"></div>
</div>
</div>
<div className="flex justify-between items-end">
<div className="flex flex-col">
<span className="text-lg font-bold text-slate-900">23andMe</span>
<span className="text-xs text-slate-500">Therapeutics Div.</span>
</div>
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
<i className="w-5 h-5 text-slate-900" data-lucide="dna"></i>
</div>
</div>
</div>

<div className="absolute inset-0 z-20 glass-card-reveal flex flex-col justify-end p-8 transition-all duration-500 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0">
<div className="space-y-6">
<div className="grid grid-cols-2 gap-4 border-b border-slate-900/10 pb-6">
<div>
<span className="block text-[10px] uppercase tracking-wider text-slate-500 mb-1">
                      Database
                    </span>
<span className="block text-2xl font-light text-slate-900">
                      14M+
                    </span>
</div>
<div>
<span className="block text-[10px] uppercase tracking-wider text-slate-500 mb-1">
                      Targets
                    </span>
<span className="block text-2xl font-light text-slate-900">
                      50+
                    </span>
</div>
</div>
<div className="text-sm text-slate-700 leading-relaxed">
                  Leveraging massive genetic database for proprietary drug
                  discovery in oncology.
                </div>
<button className="w-full py-4 bg-[#021a1e] text-white rounded-xl text-sm font-medium hover:bg-teal-900 transition-colors flex items-center justify-between px-6">
                  Request Access
                  <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-[#021a1e] border-white/5 border-t pt-24 pb-24 relative" id="news">

<div className="absolute top-0 left-0 w-full h-full grid-bg opacity-30 pointer-events-none"></div>
<div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-teal-900/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">

<div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
<div className="">
<div className="flex items-center gap-2 mb-4">
<span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
<span className="text-xs font-semibold tracking-widest text-teal-500 uppercase">Latest Intelligence</span>
</div>
<h2 className="text-4xl md:text-5xl font-light tracking-tight text-white">
              Market
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-cyan-400 font-normal">
                Insights
              </span>
</h2>
<p className="text-slate-400 mt-4 max-w-xl text-lg font-light">
              Deep dives into the trends shaping the future of medicine, regulatory shifts, and capital allocation strategies.
            </p>
</div>
<button className="text-sm text-slate-400 hover:text-white flex items-center gap-2 group transition-colors">
            View Archive
            <i className="w-4 h-4 group-hover:translate-x-1 transition-transform stroke-[1.5]" data-lucide="arrow-right"></i>
</button>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<article className="group relative bg-white/5 rounded-[2rem] overflow-hidden border border-white/10 hover:border-teal-500/30 transition-all duration-500 hover:-translate-y-1">

<div className="h-64 relative overflow-hidden bg-gradient-to-br from-[#032b30] to-[#011215]">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(20,184,166,0.15),transparent_50%)]"></div>
<div className="absolute right-[-20px] top-[-20px] w-48 h-48 border border-white/5 rounded-full opacity-50"></div>
<div className="absolute right-[20px] top-[20px] w-32 h-32 border border-white/5 rounded-full opacity-30"></div>
<div className="absolute top-6 left-6 z-10">
<span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/10 backdrop-blur-md text-[10px] font-semibold text-white uppercase tracking-wider flex items-center gap-2">
<i className="w-3 h-3" data-lucide="microscope"></i>
                       R&amp;D Trends
                    </span>
</div>

<div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#021a1e] to-transparent z-10"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-80 group-hover:scale-105 transition-transform duration-700">
<div className="relative w-32 h-32">
<div className="absolute inset-0 border border-teal-500/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
<div className="absolute inset-4 border border-cyan-400/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
<i className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 text-teal-400 stroke-[1]" data-lucide="dna"></i>
</div>
</div>
</div>

<div className="p-8 pt-2">
<h3 className="text-2xl font-medium text-white mb-3 tracking-tight group-hover:text-teal-400 transition-colors">Generative Biology Revolution</h3>
<p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2">
                    How large language models are optimizing protein design and reducing Phase 1 failure rates by over 40% in 2024.
                 </p>
<div className="flex items-center gap-3 pt-6 border-t border-white/5">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-slate-700 to-slate-800 flex items-center justify-center text-xs font-bold text-white border border-white/10">SC</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-white">Dr. Sarah Chen</span>
<span className="text-[10px] text-slate-500">Chief Science Officer</span>
</div>
<span className="ml-auto text-xs text-slate-500">Oct 24, 2024</span>
</div>
</div>

<div className="absolute inset-0 z-20 glass-card-dark-reveal flex flex-col justify-center p-12 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
<div className="space-y-4">
<span className="text-teal-400 text-xs font-bold uppercase tracking-widest">Executive Summary</span>
<h4 className="text-xl text-white font-light leading-snug">
                       "Generative biology moves from <span className="text-teal-300 font-normal">discovery</span> to <span className="text-teal-300 font-normal">design</span>."
                    </h4>
<p className="text-sm text-slate-300 leading-relaxed">
                       Our latest analysis covers 15 startups deploying transformer models to predict molecular binding affinity with unprecedented accuracy.
                    </p>
<div className="pt-6">
<button className="flex items-center gap-2 text-white border-b border-teal-500/50 pb-1 hover:border-teal-400 transition-all text-sm">
                          Read Full Report
                          <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</article>

<article className="group relative bg-white/5 rounded-[2rem] overflow-hidden border border-white/10 hover:border-teal-500/30 transition-all duration-500 hover:-translate-y-1">
<div className="h-64 relative overflow-hidden bg-gradient-to-br from-[#1e1b2e] to-[#011215]">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(139,92,246,0.1),transparent_50%)]"></div>
<div className="absolute -left-10 top-10 w-40 h-40 bg-purple-500/5 blur-3xl rounded-full"></div>
<div className="absolute top-6 left-6 z-10">
<span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/10 backdrop-blur-md text-[10px] font-semibold text-white uppercase tracking-wider flex items-center gap-2">
<i className="w-3 h-3" data-lucide="scale"></i>
                       Regulation
                    </span>
</div>

<div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#021a1e] to-transparent z-10"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-80 group-hover:scale-105 transition-transform duration-700">
<div className="relative w-full h-full flex items-center justify-center">
<div className="w-24 h-32 border border-slate-600/30 rounded-lg transform -rotate-6 backdrop-blur-sm bg-white/5 absolute"></div>
<div className="w-24 h-32 border border-slate-500/30 rounded-lg transform rotate-6 backdrop-blur-sm bg-white/5 absolute flex items-center justify-center">
<i className="w-10 h-10 text-slate-400 stroke-[1]" data-lucide="file-text"></i>
</div>
</div>
</div>
</div>
<div className="p-8 pt-2">
<h3 className="text-2xl font-medium text-white mb-3 tracking-tight group-hover:text-teal-400 transition-colors">FDA Digital Health Guidelines</h3>
<p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2">
                    New framework for AI-enabled medical devices creates a faster pathway to approval for software-as-a-medical-device (SaMD).
                 </p>
<div className="flex items-center gap-3 pt-6 border-t border-white/5">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-slate-700 to-slate-800 flex items-center justify-center text-xs font-bold text-white border border-white/10">MJ</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-white">Marcus Jones</span>
<span className="text-[10px] text-slate-500">Legal Analyst</span>
</div>
<span className="ml-auto text-xs text-slate-500">Oct 22, 2024</span>
</div>
</div>

<div className="absolute inset-0 z-20 glass-card-dark-reveal flex flex-col justify-center p-12 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
<div className="space-y-4">
<span className="text-teal-400 text-xs font-bold uppercase tracking-widest">Impact Assessment</span>
<h4 className="text-xl text-white font-light leading-snug">
                       "Time-to-market for AI diagnostics could drop by <span className="text-teal-300 font-normal">18 months</span>."
                    </h4>
<p className="text-sm text-slate-300 leading-relaxed">
                       We analyze the Pre-Cert Pilot Program results and identify 3 key requirements for startups targeting Q1 2025 submission.
                    </p>
<div className="pt-6">
<button className="flex items-center gap-2 text-white border-b border-teal-500/50 pb-1 hover:border-teal-400 transition-all text-sm">
                          Read Full Report
                          <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</article>

<article className="group relative bg-white/5 rounded-[2rem] overflow-hidden border border-white/10 hover:border-teal-500/30 transition-all duration-500 hover:-translate-y-1">
<div className="h-64 relative overflow-hidden bg-gradient-to-br from-[#064e3b] to-[#011215]">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(52,211,153,0.1),transparent_50%)]"></div>
<div className="absolute top-6 left-6 z-10">
<span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/10 backdrop-blur-md text-[10px] font-semibold text-white uppercase tracking-wider flex items-center gap-2">
<i className="w-3 h-3" data-lucide="bar-chart-2"></i>
                       Market Data
                    </span>
</div>

<div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#021a1e] to-transparent z-10"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-80 group-hover:scale-105 transition-transform duration-700">
<div className="flex items-end gap-2 h-24">
<div className="w-4 h-12 bg-teal-800/50 rounded-t-sm"></div>
<div className="w-4 h-16 bg-teal-700/50 rounded-t-sm"></div>
<div className="w-4 h-10 bg-teal-600/50 rounded-t-sm"></div>
<div className="w-4 h-20 bg-teal-500/50 rounded-t-sm"></div>
<div className="w-4 h-24 bg-teal-400/80 rounded-t-sm shadow-[0_0_15px_rgba(45,212,191,0.5)]"></div>
</div>
</div>
</div>
<div className="p-8 pt-2">
<h3 className="text-2xl font-medium text-white mb-3 tracking-tight group-hover:text-teal-400 transition-colors">Q3 2024 Private Equity Report</h3>
<p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2">
                    Investment inflows into late-stage biotech have recovered to 2021 levels, driven by non-traditional lenders and strategic corporate VC.
                 </p>
<div className="flex items-center gap-3 pt-6 border-t border-white/5">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-slate-700 to-slate-800 flex items-center justify-center text-xs font-bold text-white border border-white/10">EL</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-white">Elena Li</span>
<span className="text-[10px] text-slate-500">Head of Capital</span>
</div>
<span className="ml-auto text-xs text-slate-500">Oct 18, 2024</span>
</div>
</div>

<div className="absolute inset-0 z-20 glass-card-dark-reveal flex flex-col justify-center p-12 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
<div className="space-y-4">
<span className="text-teal-400 text-xs font-bold uppercase tracking-widest">Market Shift</span>
<h4 className="text-xl text-white font-light leading-snug">
                       "Dry powder is finally deploying into <span className="text-teal-300 font-normal">clinical-stage</span> assets."
                    </h4>
<p className="text-sm text-slate-300 leading-relaxed">
                       Valuations remain attractive despite the capital influx. We breakdown the top 5 sectors receiving the bulk of the $12B deployed this quarter.
                    </p>
<div className="pt-6">
<button className="flex items-center gap-2 text-white border-b border-teal-500/50 pb-1 hover:border-teal-400 transition-all text-sm">
                          Download PDF
                          <i className="w-4 h-4" data-lucide="download"></i>
</button>
</div>
</div>
</div>
</article>

<article className="group relative bg-white/5 rounded-[2rem] overflow-hidden border border-white/10 hover:border-teal-500/30 transition-all duration-500 hover:-translate-y-1">
<div className="h-64 relative overflow-hidden bg-gradient-to-br from-[#0c4a6e] to-[#011215]">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(14,165,233,0.15),transparent_50%)]"></div>
<div className="absolute top-6 left-6 z-10">
<span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/10 backdrop-blur-md text-[10px] font-semibold text-white uppercase tracking-wider flex items-center gap-2">
<i className="w-3 h-3" data-lucide="wifi"></i>
                       Infrastructure
                    </span>
</div>

<div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#021a1e] to-transparent z-10"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-80 group-hover:scale-105 transition-transform duration-700">
<div className="relative w-full h-full">
<div className="absolute top-1/2 left-1/4 w-32 h-[1px] bg-sky-500/30 rotate-45"></div>
<div className="absolute top-1/2 right-1/4 w-32 h-[1px] bg-sky-500/30 -rotate-45"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
<i className="w-12 h-12 text-sky-400 stroke-[1]" data-lucide="radio-tower"></i>
</div>
<div className="absolute top-1/3 left-1/2 w-2 h-2 bg-sky-400 rounded-full blur-[2px]"></div>
<div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-sky-400 rounded-full blur-[1px]"></div>
</div>
</div>
</div>
<div className="p-8 pt-2">
<h3 className="text-2xl font-medium text-white mb-3 tracking-tight group-hover:text-teal-400 transition-colors">Telemedicine Infrastructure 2.0</h3>
<p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2">
                    The shift from basic video calls to integrated diagnostic peripherals is creating a new hardware boom in remote care.
                 </p>
<div className="flex items-center gap-3 pt-6 border-t border-white/5">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-slate-700 to-slate-800 flex items-center justify-center text-xs font-bold text-white border border-white/10">DK</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-white">David Kim</span>
<span className="text-[10px] text-slate-500">Tech Lead</span>
</div>
<span className="ml-auto text-xs text-slate-500">Oct 15, 2024</span>
</div>
</div>

<div className="absolute inset-0 z-20 glass-card-dark-reveal flex flex-col justify-center p-12 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
<div className="space-y-4">
<span className="text-teal-400 text-xs font-bold uppercase tracking-widest">Tech Stack</span>
<h4 className="text-xl text-white font-light leading-snug">
                       "Hardware is the new <span className="text-teal-300 font-normal">software</span> for remote care."
                    </h4>
<p className="text-sm text-slate-300 leading-relaxed">
                       Reviewing the 3 market leaders in haptic sensors and remote blood analysis tools that are redefining the home clinic.
                    </p>
<div className="pt-6">
<button className="flex items-center gap-2 text-white border-b border-teal-500/50 pb-1 hover:border-teal-400 transition-all text-sm">
                          Read Full Report
                          <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="bg-[#F8FAFC] text-slate-900 relative overflow-hidden py-24" id="market">
<div className="max-w-7xl mx-auto px-6 relative z-10">

<div className="flex justify-between items-end mb-12">
<div>
<span className="text-xs font-semibold tracking-widest text-teal-600 uppercase mb-2 block">Live Ecosystem</span>
<h2 className="text-4xl font-light tracking-tight text-slate-900">
              Portfolio
              <span className="text-slate-400">News</span>
</h2>
</div>
<div className="flex items-center gap-4">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200"></div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-slate-300"></div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-slate-400 flex items-center justify-center text-[10px] text-white font-medium">+4</div>
</div>
<button className="p-2 rounded-full hover:bg-slate-200 transition-colors">
<i className="w-5 h-5 text-slate-500" data-lucide="chevron-down"></i>
</button>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-4 gap-6">


<div className="bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative group hover:-translate-y-1 transition-transform duration-300">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-12 bg-teal-500 rounded-l-lg"></div>
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="activity"></i>
</div>
<div className="relative w-8 h-8">
<svg className="w-full h-full transform -rotate-90">
<circle cx="16" cy="16" fill="none" r="14" stroke="#e2e8f0" strokeWidth="2"></circle>
<circle cx="16" cy="16" fill="none" r="14" stroke="#14b8a6" stroke-dasharray="88" stroke-dashoffset="22" strokeWidth="2"></circle>
</svg>
<span className="absolute inset-0 flex items-center justify-center text-[8px] font-bold text-slate-400">+75%</span>
</div>
</div>
<span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">Vertex Pharma</span>
<div className="flex items-end gap-2">
<span className="text-2xl font-semibold tracking-tight text-slate-900">42%</span>
<span className="text-xs font-medium text-teal-600 mb-1">+12.4%</span>
</div>
<p className="text-[10px] text-slate-400 mt-2">Stake increased this week</p>
</div>

<div className="bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative group hover:-translate-y-1 transition-transform duration-300">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-12 bg-cyan-500 rounded-l-lg"></div>
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="zap"></i>
</div>
<div className="relative w-8 h-8">
<svg className="w-full h-full transform -rotate-90">
<circle cx="16" cy="16" fill="none" r="14" stroke="#e2e8f0" strokeWidth="2"></circle>
<circle cx="16" cy="16" fill="none" r="14" stroke="#06b6d4" stroke-dasharray="88" stroke-dashoffset="45" strokeWidth="2"></circle>
</svg>
<span className="absolute inset-0 flex items-center justify-center text-[8px] font-bold text-slate-400">+48%</span>
</div>
</div>
<span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">Regeneron</span>
<div className="flex items-end gap-2">
<span className="text-2xl font-semibold tracking-tight text-slate-900">18%</span>
<span className="text-xs font-medium text-cyan-600 mb-1">+8.2%</span>
</div>
<p className="text-[10px] text-slate-400 mt-2">New buy order pending</p>
</div>

<div className="bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative group hover:-translate-y-1 transition-transform duration-300">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-12 bg-rose-400 rounded-l-lg"></div>
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="trending-down"></i>
</div>
<div className="relative w-8 h-8">
<svg className="w-full h-full transform -rotate-90">
<circle cx="16" cy="16" fill="none" r="14" stroke="#e2e8f0" strokeWidth="2"></circle>
<circle cx="16" cy="16" fill="none" r="14" stroke="#fb7185" stroke-dasharray="88" stroke-dashoffset="80" strokeWidth="2"></circle>
</svg>
<span className="absolute inset-0 flex items-center justify-center text-[8px] font-bold text-slate-400">-5%</span>
</div>
</div>
<span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">Moderna Inc</span>
<div className="flex items-end gap-2">
<span className="text-2xl font-semibold tracking-tight text-slate-900">5</span>
<span className="text-xs font-medium text-rose-500 mb-1">Declined</span>
</div>
<p className="text-[10px] text-slate-400 mt-2">Waitlist position held</p>
</div>

<div className="bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative group hover:-translate-y-1 transition-transform duration-300">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-12 bg-indigo-500 rounded-l-lg"></div>
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-500 flex items-center justify-center">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="calendar"></i>
</div>
<div className="relative w-8 h-8">
<svg className="w-full h-full transform -rotate-90">
<circle cx="16" cy="16" fill="none" r="14" stroke="#e2e8f0" strokeWidth="2"></circle>
<circle cx="16" cy="16" fill="none" r="14" stroke="#6366f1" stroke-dasharray="88" stroke-dashoffset="60" strokeWidth="2"></circle>
</svg>
<span className="absolute inset-0 flex items-center justify-center text-[8px] font-bold text-slate-400">+5%</span>
</div>
</div>
<span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">BioNTech</span>
<div className="flex items-end gap-2">
<span className="text-2xl font-semibold tracking-tight text-slate-900">13</span>
<span className="text-xs font-medium text-slate-400 mb-1">- 17</span>
</div>
<p className="text-[10px] text-slate-400 mt-2">Requested this week</p>
</div>


<div className="lg:col-span-1 bg-gradient-to-br from-[#0d9488] to-[#0f172a] rounded-[2rem] p-6 text-white shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[400px]">

<div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
<div className="flex justify-between items-start">
<i className="w-5 h-5 opacity-50 hover:opacity-100 cursor-pointer" data-lucide="more-vertical"></i>
</div>

<div className="relative w-full aspect-square max-w-[200px] mx-auto mt-4">
<svg className="w-full h-full overflow-visible" viewbox="0 0 100 60">

<path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="rgba(255,255,255,0.2)" strokeLinecap="round" strokeWidth="8"></path>

<path d="M 10 50 A 40 40 0 0 1 75 22" fill="none" stroke="url(#gaugeGradient)" strokeLinecap="round" strokeWidth="8"></path>
<defs>
<lineargradient id="gaugeGradient" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#2dd4bf"></stop>
<stop offset="100%" stop-color="#a5f3fc"></stop>
</lineargradient>
</defs>
</svg>
<div className="absolute top-12 left-1/2 -translate-x-1/2 text-center">
<span className="text-3xl font-bold tracking-tight">45%</span>
<p className="text-[10px] text-teal-100 opacity-80 uppercase tracking-widest mt-1">Allocation</p>
</div>
</div>
<div className="mt-auto">
<div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center mb-4 backdrop-blur-sm">
<i className="w-5 h-5 text-teal-200" data-lucide="wallet"></i>
</div>
<span className="text-xs text-teal-200 font-medium block mb-1">Total Net Asset Value</span>
<h3 className="text-3xl font-semibold tracking-tight mb-1">$933,879<span className="text-lg text-teal-200/70">.45</span></h3>
<span className="text-xs text-teal-300 bg-teal-900/30 px-2 py-1 rounded-md inline-block">+$126,783.89 (YTD)</span>
</div>
</div>

<div className="lg:col-span-1 flex flex-col gap-6">

<div className="bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative flex-1 flex flex-col justify-center">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-12 bg-slate-800 rounded-l-lg"></div>
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="banknote"></i>
</div>
<div className="relative w-8 h-8">
<svg className="w-full h-full transform -rotate-90">
<circle cx="16" cy="16" fill="none" r="14" stroke="#e2e8f0" strokeWidth="2"></circle>
<circle cx="16" cy="16" fill="none" r="14" stroke="#334155" stroke-dasharray="88" stroke-dashoffset="75" strokeWidth="2"></circle>
</svg>
<span className="absolute inset-0 flex items-center justify-center text-[8px] font-bold text-slate-900">+5%</span>
</div>
</div>
<span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">Realized Gains</span>
<h3 className="text-2xl font-bold tracking-tight text-slate-900">$9,034<span className="text-slate-400 text-lg">.49</span></h3>
<p className="text-[10px] text-slate-400 mt-1">Current Financial Year</p>
</div>

<div className="bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative flex-1 flex flex-col justify-center">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-12 bg-purple-500 rounded-l-lg"></div>
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="radio"></i>
</div>
<div className="relative w-8 h-8">
<svg className="w-full h-full transform -rotate-90">
<circle cx="16" cy="16" fill="none" r="14" stroke="#e2e8f0" strokeWidth="2"></circle>
<circle cx="16" cy="16" fill="none" r="14" stroke="#a855f7" stroke-dasharray="88" stroke-dashoffset="15" strokeWidth="2"></circle>
</svg>
<span className="absolute inset-0 flex items-center justify-center text-[8px] font-bold text-slate-900">85%</span>
</div>
</div>
<span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">Active Buy Orders</span>
<h3 className="text-2xl font-bold tracking-tight text-slate-900">$23,718<span className="text-slate-400 text-lg">.32</span></h3>
<p className="text-[10px] text-slate-400 mt-1">Pending Execution</p>
</div>
</div>

<div className="lg:col-span-2 bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative flex flex-col justify-end min-h-[300px]">
<div className="absolute top-8 left-8">
<div className="px-3 py-1 bg-white shadow-md rounded-lg text-xs font-semibold text-slate-800 border border-slate-100 flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                    Performance Q3
                 </div>
</div>
<div className="absolute top-8 right-8">
<i className="w-5 h-5 text-slate-400 hover:text-slate-600 cursor-pointer" data-lucide="more-vertical"></i>
</div>

<div className="flex justify-between items-end gap-2 sm:gap-4 h-48 w-full mt-12">

<div className="w-8 bg-indigo-200 rounded-t-lg h-[40%] hover:bg-indigo-300 transition-colors cursor-pointer relative group"></div>

<div className="w-8 bg-indigo-300 rounded-t-lg h-[65%] hover:bg-indigo-400 transition-colors cursor-pointer relative group"></div>

<div className="w-8 bg-indigo-400 rounded-t-lg h-[45%] hover:bg-indigo-500 transition-colors cursor-pointer relative group"></div>

<div className="w-8 bg-indigo-500 rounded-t-lg h-[80%] hover:bg-indigo-600 transition-colors cursor-pointer relative group">

<div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                       $12.4M Growth
                       <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45"></div>
</div>
</div>

<div className="w-8 bg-indigo-400 rounded-t-lg h-[90%] hover:bg-indigo-500 transition-colors cursor-pointer relative group"></div>

<div className="w-8 bg-indigo-300 rounded-t-lg h-[55%] hover:bg-indigo-400 transition-colors cursor-pointer relative group"></div>

<div className="w-8 bg-indigo-200 rounded-t-lg h-[35%] hover:bg-indigo-300 transition-colors cursor-pointer relative group"></div>

<div className="w-8 bg-indigo-300 rounded-t-lg h-[50%] hover:bg-indigo-400 transition-colors cursor-pointer relative group"></div>
</div>
<div className="flex justify-between text-xs text-slate-400 font-medium mt-4 px-1">
<span>Feb</span>
<span>Mar</span>
<span>Apr</span>
<span>May</span>
<span>Jun</span>
<span>Jul</span>
<span>Aug</span>
<span>Sep</span>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#011215] border-t border-white/10 pt-20 pb-10" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
<div className="col-span-1 md:col-span-2">
<h2 className="text-3xl font-light text-white mb-6 tracking-tight">
              Ready to invest in the future of healthcare?
            </h2>
<form className="flex gap-2 max-w-md border-b border-white/20 pb-2">
<input className="bg-transparent border-none outline-none text-white placeholder-slate-600 flex-1 py-2" placeholder="Enter your email address" type="email"/>
<button className="text-teal-500 hover:text-teal-400 font-medium text-sm">
                Join Waitlist
              </button>
</form>
</div>
<div className="">
<h4 className="text-xs uppercase tracking-widest text-slate-500 mb-6">
              Platform
            </h4>
<ul className="space-y-4 text-sm text-slate-400">
<li>
<a className="hover:text-white transition-colors" href="#">
                  Startups
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Secondary Market
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Portfolio
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-xs uppercase tracking-widest text-slate-500 mb-6">
              Company
            </h4>
<ul className="space-y-4 text-sm text-slate-400">
<li>
<a className="hover:text-white transition-colors" href="#">About</a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Manifesto
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Careers
                </a>
</li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-slate-600">
<p>© 2024 Growthally Inc. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-slate-400" href="#">Privacy Policy</a>
<a className="hover:text-slate-400" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>
<div className="fixed bottom-28 right-8 w-[calc(100vw-2rem)] md:w-[380px] h-[550px] max-h-[70vh] bg-[#021a1e]/95 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl flex flex-col z-40 transition-all duration-300 origin-bottom-right scale-0 opacity-0 pointer-events-none overflow-hidden" id="ai-chat-interface">

<div className="p-5 border-b border-white/10 flex items-center gap-4 bg-white/5">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-teal-500 to-cyan-300 flex items-center justify-center shadow-lg shadow-teal-500/20">
<i className="text-[#021a1e] w-6 h-6 stroke-[1.5]" data-lucide="bot"></i>
</div>
<div>
<h3 className="text-base font-semibold tracking-tight text-white">
            Growthally AI
          </h3>
<p className="text-xs text-teal-400 font-medium">
            Investment Intelligence
          </p>
</div>
<button className="ml-auto text-slate-400 hover:text-white transition-colors" onclick="toggleChat()">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="minimize-2"></i>
</button>
</div>

<div className="flex-1 p-5 overflow-y-auto space-y-6 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">

<div className="flex flex-col gap-3">
<div className="flex gap-3">
<div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex-shrink-0 flex items-center justify-center">
<i className="w-4 h-4 text-teal-400 stroke-[1.5]" data-lucide="sparkles"></i>
</div>
<div className="space-y-2 max-w-[85%]">
<div className="bg-white/5 p-4 rounded-2xl rounded-tl-none border border-white/10 text-sm text-slate-200 font-light leading-relaxed shadow-sm">
                Hello! I can help you evaluate our med-tech portfolio. Ask me
                about:
              </div>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 rounded-lg border border-teal-500/20 bg-teal-500/5 text-xs text-teal-300">
                  Recent Trends
                </span>
<span className="px-3 py-1.5 rounded-lg border border-teal-500/20 bg-teal-500/5 text-xs text-teal-300">
                  Equity Stakes
                </span>
<span className="px-3 py-1.5 rounded-lg border border-teal-500/20 bg-teal-500/5 text-xs text-teal-300">
                  Profitability
                </span>
</div>
</div>
</div>

<div className="flex gap-3">
<div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex-shrink-0 flex items-center justify-center">
<i className="w-4 h-4 text-teal-400 stroke-[1.5]" data-lucide="bar-chart-3"></i>
</div>
<div className="bg-white/5 p-4 rounded-2xl rounded-tl-none border border-white/10 text-sm text-slate-200 font-light leading-relaxed shadow-sm max-w-[85%]">
              Analyzing current valuations... Vertex Pharma is showing a 15%
              increase in stake value this quarter.
            </div>
</div>
</div>
</div>

<div className="p-4 bg-white/5 border-t border-white/10">
<form className="relative flex items-center" onsubmit="event.preventDefault();">
<input className="w-full bg-[#011215] border border-white/10 rounded-xl pl-4 pr-12 py-3.5 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/20 transition-all shadow-inner" placeholder="Ask about company numbers..." type="text"/>
<button className="absolute right-2 p-2 bg-teal-500 hover:bg-teal-400 text-[#021a1e] rounded-lg transition-colors shadow-lg shadow-teal-500/20" type="submit">
<i className="w-4 h-4 stroke-[2]" data-lucide="send-horizontal"></i>
</button>
</form>
</div>
</div>
<button className="fixed bottom-8 right-8 z-50 group w-16 h-16 rounded-full bg-gradient-to-tr from-teal-500 to-cyan-300 shadow-[0_10px_40px_-10px_rgba(45,212,191,0.5)] flex items-center justify-center text-[#021a1e] transition-all duration-500 hover:scale-110 hover:shadow-[0_20px_40px_-10px_rgba(45,212,191,0.6)] border border-white/20" id="ai-chat-toggle" onclick="toggleChat()">
<span className="absolute inset-0 rounded-full bg-teal-400/50 animate-[ping_3s_ease-in-out_infinite] opacity-20"></span>
<i className="w-8 h-8 stroke-[1.5] relative z-10 transition-transform duration-300 group-hover:rotate-12" data-lucide="bot"></i>
</button>



    </>
  );
}
