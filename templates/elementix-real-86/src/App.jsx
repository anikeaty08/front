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
      

<nav className="fixed top-0 w-full z-50 border-b border-slate-200/50 glass">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
<i className="w-5 h-5" data-lucide="layers"></i>
</div>
<span className="text-lg font-medium tracking-tight text-slate-900">Elementix</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors" href="#prospecting">Prospecting</a>
<a className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors" href="#risk">Risk Assessment</a>
<a className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors" href="#search">Investor Search</a>
<a className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors" href="#faq">FAQ</a>
</div>
<button className="hidden md:flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-sm">
                Book a Demo
                <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>

<button className="md:hidden text-slate-900">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>

<section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden hero-bg text-white">

<div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-indigo-500/20 blur-[100px]"></div>
<div className="absolute top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-purple-500/20 blur-[100px]"></div>

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-400/20 text-indigo-200 text-xs font-medium mb-8 fade-in-up" style={{animationDelay: '0.1s'}}>
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                Introducing Ownership Intelligence
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tight font-medium mb-8 fade-in-up leading-[1.1]" style={{animationDelay: '0.2s'}}>
                Ownership Intelligence for <br className="hidden md:block"/>Commercial Real Estate
            </h1>
<p className="text-xl md:text-2xl text-indigo-100/80 max-w-3xl mx-auto mb-12 leading-relaxed fade-in-up" style={{animationDelay: '0.3s'}}>
                We connect real estate investors to every entity they operate, every property they own, and every deal they've done. Know who you're really doing business with.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-in-up" style={{animationDelay: '0.4s'}}>
<button className="w-full sm:w-auto px-8 py-4 bg-white text-indigo-950 rounded-xl font-medium hover:bg-indigo-50 transition-all flex items-center justify-center gap-2 shadow-xl shadow-indigo-900/20">
                    Book a Demo
                </button>
<button className="w-full sm:w-auto px-8 py-4 bg-indigo-800/40 text-white border border-indigo-400/30 rounded-xl font-medium hover:bg-indigo-800/60 transition-all backdrop-blur-sm">
                    View Methodology
                </button>
</div>

<div className="mt-20 fade-in-up relative mx-auto max-w-5xl" style={{animationDelay: '0.6s'}}>
<div className="bg-slate-900/80 backdrop-blur-xl border border-indigo-500/30 rounded-2xl p-2 shadow-2xl">
<div className="bg-slate-950 rounded-xl overflow-hidden border border-slate-800 relative h-64 md:h-96 w-full flex items-center justify-center group">

<div className="absolute inset-0 opacity-40">

<div className="h-full w-full" style={{backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
</div>

<div className="absolute z-20 flex flex-col items-center">
<div className="w-16 h-16 rounded-full bg-indigo-600 border-4 border-slate-900 shadow-xl flex items-center justify-center text-white mb-2 relative">
<i className="w-8 h-8" data-lucide="user"></i>
<div className="absolute -right-1 -top-1 w-6 h-6 bg-emerald-500 rounded-full border-2 border-slate-900 flex items-center justify-center">
<i className="w-3 h-3 text-white" data-lucide="check"></i>
</div>
</div>
<div className="bg-slate-800 text-slate-200 px-3 py-1 rounded-lg text-sm font-medium border border-slate-700">James Sterling</div>
</div>

<div className="absolute w-64 h-[1px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 opacity-50"></div>
<div className="absolute w-64 h-[1px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45 opacity-50"></div>

<div className="absolute top-1/4 left-1/4 md:left-1/3 flex flex-col items-center opacity-80 scale-90">
<div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 shadow-lg flex items-center justify-center text-indigo-400 mb-2">
<i className="w-5 h-5" data-lucide="building"></i>
</div>
<div className="text-xs text-slate-400">Sterling Holdings LLC</div>
</div>

<div className="absolute bottom-1/4 right-1/4 md:right-1/3 flex flex-col items-center opacity-80 scale-90">
<div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 shadow-lg flex items-center justify-center text-indigo-400 mb-2">
<i className="w-5 h-5" data-lucide="building-2"></i>
</div>
<div className="text-xs text-slate-400">JS Capital Group Inc</div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="border-b border-slate-200 bg-white">
<div className="max-w-7xl mx-auto px-6 py-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-100 md:divide-slate-200/50">
<div>
<div className="text-3xl font-semibold tracking-tight text-slate-900">100M+</div>
<div className="text-sm text-slate-500 mt-1">Documents Analyzed</div>
</div>
<div>
<div className="text-3xl font-semibold tracking-tight text-slate-900">5.6M</div>
<div className="text-sm text-slate-500 mt-1">Investors Tracked</div>
</div>
<div>
<div className="text-3xl font-semibold tracking-tight text-slate-900">5.1M</div>
<div className="text-sm text-slate-500 mt-1">Entities Mapped</div>
</div>
<div className="border-l-0 md:border-l"> 
<div className="text-3xl font-semibold tracking-tight text-slate-900">National</div>
<div className="text-sm text-slate-500 mt-1">Coverage</div>
</div>
</div>
</div>
</div>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-6">
                        The real person behind the deal
                    </h2>
<p className="text-lg text-slate-500 leading-relaxed mb-6">
                        Real estate investors operate through layers of LLCs, corporations, and holding companies. Traditional data tools track these entities in isolation—missing the complete picture.
                    </p>
<p className="text-lg text-slate-500 leading-relaxed mb-8">
                        Elementix maps investors to every operating entity they control. We analyze recorded documents, cross-reference state filings, and deploy automated research to build comprehensive ownership profiles at a scale that manual processes can't match.
                    </p>
<div className="flex items-center gap-4 text-indigo-600 font-medium cursor-pointer group">
                        See how it works 
                        <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</div>
</div>
<div className="relative">

<div className="aspect-square md:aspect-[4/3] bg-slate-50 rounded-2xl border border-slate-100 p-8 relative overflow-hidden flex items-center justify-center">

<svg className="absolute inset-0 w-full h-full text-slate-200 pointer-events-none" style={{zIndex: '0'}}>
<line stroke="currentColor" stroke-dasharray="4 4" strokeWidth="2" x1="50%" x2="20%" y1="50%" y2="20%"></line>
<line stroke="currentColor" stroke-dasharray="4 4" strokeWidth="2" x1="50%" x2="80%" y1="50%" y2="20%"></line>
<line stroke="currentColor" stroke-dasharray="4 4" strokeWidth="2" x1="50%" x2="20%" y1="50%" y2="80%"></line>
<line stroke="currentColor" stroke-dasharray="4 4" strokeWidth="2" x1="50%" x2="80%" y1="50%" y2="80%"></line>
</svg>

<div className="relative z-10 w-20 h-20 bg-white rounded-full shadow-lg shadow-indigo-100 border border-slate-100 flex items-center justify-center">
<i className="w-8 h-8 text-indigo-600" data-lucide="user"></i>
<div className="absolute -bottom-8 whitespace-nowrap text-sm font-medium text-slate-900">Investigator Profile</div>
</div>

<div className="absolute top-[15%] left-[15%] w-14 h-14 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center">
<i className="w-6 h-6 text-slate-400" data-lucide="scroll"></i>
</div>
<div className="absolute top-[15%] right-[15%] w-14 h-14 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center">
<i className="w-6 h-6 text-slate-400" data-lucide="building"></i>
</div>
<div className="absolute bottom-[15%] left-[15%] w-14 h-14 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center">
<i className="w-6 h-6 text-slate-400" data-lucide="landmark"></i>
</div>
<div className="absolute bottom-[15%] right-[15%] w-14 h-14 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center">
<i className="w-6 h-6 text-slate-400" data-lucide="file-check"></i>
</div>
</div>
</div>
</div>

<div className="text-center mb-16">
<span className="text-indigo-600 font-medium tracking-wide uppercase text-xs">Capabilities</span>
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mt-2">Built for how you work</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group bg-slate-50 hover:bg-white rounded-2xl p-8 border border-slate-100 hover:border-slate-200 transition-all hover:shadow-lg hover:shadow-slate-100/50 flex flex-col h-full">
<div className="mb-6 h-40 bg-white rounded-xl border border-slate-100 p-4 overflow-hidden relative">
<div className="absolute inset-x-4 top-4 h-2 bg-slate-100 rounded-full w-2/3"></div>
<div className="absolute inset-x-4 top-8 h-2 bg-slate-50 rounded-full w-1/2"></div>

<div className="mt-8 space-y-2">
<div className="flex items-center gap-2 p-2 bg-slate-50 rounded-lg border border-slate-100/50">
<div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center"><i className="w-3 h-3 text-emerald-600" data-lucide="check"></i></div>
<div className="h-2 bg-slate-200 rounded w-16"></div>
</div>
<div className="flex items-center gap-2 p-2 bg-slate-50 rounded-lg border border-slate-100/50">
<div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center"><i className="w-3 h-3 text-emerald-600" data-lucide="check"></i></div>
<div className="h-2 bg-slate-200 rounded w-20"></div>
</div>
</div>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-2">Prospecting</h3>
<p className="text-slate-500 mb-6 flex-grow">Find the right borrowers, not just more borrowers. Target based on actual track record.</p>
<a className="text-indigo-600 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all" href="#prospecting">Explore Prospecting <i className="w-4 h-4" data-lucide="arrow-right"></i></a>
</div>

<div className="group bg-slate-50 hover:bg-white rounded-2xl p-8 border border-slate-100 hover:border-slate-200 transition-all hover:shadow-lg hover:shadow-slate-100/50 flex flex-col h-full">
<div className="mb-6 h-40 bg-white rounded-xl border border-slate-100 p-4 overflow-hidden relative flex items-center justify-center">
<div className="relative w-24 h-24">
<svg className="w-full h-full transform -rotate-90">
<circle cx="48" cy="48" fill="transparent" r="40" stroke="#f1f5f9" strokeWidth="8"></circle>
<circle cx="48" cy="48" fill="transparent" r="40" stroke="#6366f1" stroke-dasharray="251.2" stroke-dashoffset="60" strokeWidth="8"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-xs text-slate-400">Risk</span>
<span className="text-lg font-semibold text-slate-900">Low</span>
</div>
</div>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-2">Risk Assessment</h3>
<p className="text-slate-500 mb-6 flex-grow">See every deal a borrower has done. Surface hidden foreclosures and liabilities.</p>
<a className="text-indigo-600 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all" href="#risk">Explore Risk Assessment <i className="w-4 h-4" data-lucide="arrow-right"></i></a>
</div>

<div className="group bg-slate-50 hover:bg-white rounded-2xl p-8 border border-slate-100 hover:border-slate-200 transition-all hover:shadow-lg hover:shadow-slate-100/50 flex flex-col h-full">
<div className="mb-6 h-40 bg-white rounded-xl border border-slate-100 p-4 overflow-hidden relative">

<div className="flex items-end justify-between h-full gap-2 px-2 pb-2">
<div className="w-full bg-indigo-100 rounded-t-sm h-[40%]"></div>
<div className="w-full bg-indigo-200 rounded-t-sm h-[60%]"></div>
<div className="w-full bg-indigo-300 rounded-t-sm h-[30%]"></div>
<div className="w-full bg-indigo-500 rounded-t-sm h-[80%]"></div>
<div className="w-full bg-indigo-600 rounded-t-sm h-[90%]"></div>
</div>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-2">Investor Search</h3>
<p className="text-slate-500 mb-6 flex-grow">Track investor portfolios and activity at scale. Monitor signals like expansion.</p>
<a className="text-indigo-600 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all" href="#search">Explore Investor Search <i className="w-4 h-4" data-lucide="arrow-right"></i></a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl mb-16">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-6">How we build ownership intelligence</h2>
<p className="text-lg text-slate-500">We don't resell county records or rely on basic skip-tracing. We've built proprietary systems to understand true ownership at scale.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="flex flex-col gap-4">
<div className="w-12 h-12 rounded-lg bg-white border border-slate-200 flex items-center justify-center shadow-sm text-indigo-600">
<i className="w-6 h-6" data-lucide="pen-tool"></i>
</div>
<h3 className="text-lg font-medium text-slate-900">Signature Analysis</h3>
<p className="text-slate-500 text-sm leading-relaxed">
                        We extract and analyze signatures from over 100 million recorded documents across 250+ counties, linking operating entities to the individuals who actually control them.
                    </p>
</div>
<div className="flex flex-col gap-4">
<div className="w-12 h-12 rounded-lg bg-white border border-slate-200 flex items-center justify-center shadow-sm text-indigo-600">
<i className="w-6 h-6" data-lucide="map"></i>
</div>
<h3 className="text-lg font-medium text-slate-900">State-Level Data</h3>
<p className="text-slate-500 text-sm leading-relaxed">
                        We cross-reference corporate filings, filtering out registered agents and nominees to identify true beneficial owners across the entire United States.
                    </p>
</div>
<div className="flex flex-col gap-4">
<div className="w-12 h-12 rounded-lg bg-white border border-slate-200 flex items-center justify-center shadow-sm text-indigo-600">
<i className="w-6 h-6" data-lucide="cpu"></i>
</div>
<h3 className="text-lg font-medium text-slate-900">Automated Research</h3>
<p className="text-slate-500 text-sm leading-relaxed">
                        Our systems continuously verify and enrich ownership data using the same investigative techniques a human researcher would—just at a scale no team could match manually.
                    </p>
</div>
</div>
</div>
</section>


<section className="py-24 bg-white overflow-hidden" id="prospecting">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row gap-16 items-center">
<div className="lg:w-1/2">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-medium mb-6">
                        Prospecting
                    </div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-6">
                        Find borrowers who actually fit your credit box
                    </h2>
<p className="text-lg text-slate-500 mb-6">
                        Most lenders prospect by finding companies that look active, then skip-tracing to find a person. This leads to bad data and wasted time.
                    </p>
<p className="text-lg text-slate-500 mb-8">
                        Elementix inverts the workflow. Start with the investor's track record—loan history, property types, deal volume—then reach them directly with <strong>80% verified contact accuracy</strong>.
                    </p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-slate-600">
<i className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" data-lucide="check-circle-2"></i>
<span>Target by loan volume &amp; property type</span>
</li>
<li className="flex items-start gap-3 text-slate-600">
<i className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" data-lucide="check-circle-2"></i>
<span>Filter by experience level (New vs Seasoned)</span>
</li>
<li className="flex items-start gap-3 text-slate-600">
<i className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" data-lucide="check-circle-2"></i>
<span>Context-aware contact verification</span>
</li>
</ul>
<button className="text-indigo-600 font-medium flex items-center gap-2 hover:gap-3 transition-all">
                        Learn about Prospecting <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
<div className="lg:w-1/2 w-full">

<div className="bg-white rounded-xl shadow-2xl shadow-slate-200 border border-slate-100 p-6 w-full max-w-md mx-auto transform rotate-1 hover:rotate-0 transition-transform duration-500">
<div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
<h4 className="font-medium text-slate-900">Investor Filter</h4>
<span className="text-xs text-indigo-600 bg-indigo-50 px-2 py-1 rounded">2,405 Matches</span>
</div>
<div className="space-y-4">

<div>
<label className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2 block">Loan Volume (12mo)</label>
<div className="flex items-center gap-2">
<div className="h-2 bg-slate-100 rounded-full flex-grow relative">
<div className="absolute left-1/4 right-1/4 top-0 bottom-0 bg-indigo-500 rounded-full"></div>
<div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-indigo-500 rounded-full shadow cursor-pointer"></div>
<div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-indigo-500 rounded-full shadow cursor-pointer"></div>
</div>
<span className="text-xs text-slate-600 font-medium">$2M - $15M</span>
</div>
</div>

<div>
<label className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-2 block">Property Type</label>
<div className="flex gap-2 flex-wrap">
<span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs rounded-full border border-indigo-100">Multifamily</span>
<span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs rounded-full border border-indigo-100">Mixed Use</span>
<span className="px-3 py-1 bg-white text-slate-500 text-xs rounded-full border border-slate-200">SFR</span>
</div>
</div>

<div className="mt-6 pt-6 border-t border-slate-100">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-medium">JD</div>
<div>
<div className="text-sm font-medium text-slate-900">John Doe</div>
<div className="text-xs text-slate-500">Active Investor • Austin, TX</div>
</div>
<div className="ml-auto">
<button className="p-2 text-indigo-600 hover:bg-indigo-50 rounded"><i className="w-4 h-4" data-lucide="phone"></i></button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200" id="risk">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
<div className="lg:w-1/2">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-medium mb-6">
                        Risk Assessment
                    </div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-6">
                        Verify borrower experience across every entity
                    </h2>
<p className="text-lg text-slate-500 mb-6">
                        Borrowers often operate through dozens of LLCs. Without full visibility, you're underwriting with incomplete information.
                    </p>
<p className="text-lg text-slate-500 mb-8">
                        Elementix surfaces the complete picture: hidden foreclosures, overextended debt, and verified deal history across all connected entities.
                    </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
<h4 className="font-medium text-slate-900 mb-1">Hidden Experience</h4>
<p className="text-sm text-slate-500">Find qualified borrowers who haven't disclosed all their past deals.</p>
</div>
<div className="p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
<h4 className="font-medium text-slate-900 mb-1">Hidden Risk</h4>
<p className="text-sm text-slate-500">Spot defaults and negative remarks under different LLC names.</p>
</div>
</div>
</div>
<div className="lg:w-1/2 w-full">

<div className="bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden max-w-md mx-auto">
<div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
<span className="font-medium text-slate-700">Risk Flag Detected</span>
</div>
<span className="text-xs font-mono text-slate-400">ID: #8821X</span>
</div>
<div className="p-6">
<div className="flex items-start gap-4 mb-6">
<div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-medium text-lg">RP</div>
<div>
<h3 className="font-medium text-slate-900">Robert Peterson</h3>
<p className="text-sm text-slate-500">Linked to 14 Entities</p>
</div>
</div>
<div className="space-y-4">
<div className="p-3 bg-red-50 border border-red-100 rounded-lg flex gap-3">
<i className="w-5 h-5 text-red-600 flex-shrink-0" data-lucide="alert-triangle"></i>
<div>
<p className="text-sm font-medium text-red-900">Foreclosure Found (2023)</p>
<p className="text-xs text-red-700 mt-1">Entity: RP Holdings IV LLC</p>
</div>
</div>
<div className="p-3 bg-slate-50 border border-slate-100 rounded-lg">
<div className="flex justify-between text-sm mb-1">
<span className="text-slate-600">Total Outstanding Debt</span>
<span className="font-medium text-slate-900">$12.4M</span>
</div>
<div className="w-full bg-slate-200 rounded-full h-1.5 mt-2">
<div className="bg-amber-500 h-1.5 rounded-full" style={{width: '75%'}}></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="search">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-medium mb-6">
                    Market Intelligence
                </div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-6">
                    Track real estate investors at scale
                </h2>
<p className="text-lg text-slate-500">
                    Search by portfolio characteristics. Monitor signals like expansion, sell-offs, and geographic shifts across 5.6 million investors.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
<div className="w-10 h-10 bg-white rounded-lg shadow-sm border border-slate-100 flex items-center justify-center text-indigo-600 mb-4">
<i className="w-5 h-5" data-lucide="trending-up"></i>
</div>
<h3 className="font-medium text-slate-900 mb-2">Portfolio Expansion</h3>
<p className="text-sm text-slate-500">Identify investors actively acquiring properties—a signal of growth and potential demand for capital.</p>
</div>

<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
<div className="w-10 h-10 bg-white rounded-lg shadow-sm border border-slate-100 flex items-center justify-center text-indigo-600 mb-4">
<i className="w-5 h-5" data-lucide="map-pin"></i>
</div>
<h3 className="font-medium text-slate-900 mb-2">Geographic Shifts</h3>
<p className="text-sm text-slate-500">Track when investors enter or exit specific markets. Understand migration patterns early.</p>
</div>

<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
<div className="w-10 h-10 bg-white rounded-lg shadow-sm border border-slate-100 flex items-center justify-center text-indigo-600 mb-4">
<i className="w-5 h-5" data-lucide="layers"></i>
</div>
<h3 className="font-medium text-slate-900 mb-2">Portfolio Composition</h3>
<p className="text-sm text-slate-500">Search by property count, total value, asset class mix, and leverage levels.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-200" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-12 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-4 rounded-lg bg-slate-50 cursor-pointer text-slate-900 font-medium group-hover:bg-slate-100 transition-colors">
<span>Who is Elementix built for?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-slate-500" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="p-4 text-slate-500 leading-relaxed text-sm">
                        Elementix is built for private lenders, institutional investors, and businesses that need to understand real estate investor activity. Our primary users originate loans for construction, bridge, and fix-and-flip programs.
                    </div>
</details>
<details className="group [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-4 rounded-lg bg-slate-50 cursor-pointer text-slate-900 font-medium group-hover:bg-slate-100 transition-colors">
<span>How is this different from skip-tracing?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-slate-500" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="p-4 text-slate-500 leading-relaxed text-sm">
                        Traditional skip-tracing finds a person associated with a company. We map the entire ownership structure first—linking all entities, properties, and loans to the investor—before verifying contact info. This gives you context and higher accuracy.
                    </div>
</details>
<details className="group [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-4 rounded-lg bg-slate-50 cursor-pointer text-slate-900 font-medium group-hover:bg-slate-100 transition-colors">
<span>How accurate is the contact information?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-slate-500" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="p-4 text-slate-500 leading-relaxed text-sm">
                        We maintain 80% verified contact accuracy, benchmarked against lender CRM data. We cross-reference business partners, property records, and filings to ensure we reach the decision-maker.
                    </div>
</details>
<details className="group [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-4 rounded-lg bg-slate-50 cursor-pointer text-slate-900 font-medium group-hover:bg-slate-100 transition-colors">
<span>Do you have an API?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-slate-500" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="p-4 text-slate-500 leading-relaxed text-sm">
                        Yes. Our API provides programmatic access to investor profiles, entity mapping, and portfolio data, enabling bulk analysis and seamless integration with your existing systems.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white text-center">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">
                See what ownership intelligence <br/>can do for your business
            </h2>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
<button className="px-8 py-3 bg-white text-slate-900 rounded-lg font-medium hover:bg-slate-100 transition-all">
                    Book a Demo
                </button>
</div>
</div>
</section>

<footer className="py-12 bg-white border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-slate-900 rounded-md flex items-center justify-center text-white">
<i className="w-3 h-3" data-lucide="layers"></i>
</div>
<span className="text-sm font-semibold tracking-tight text-slate-900">Elementix</span>
</div>
<div className="flex gap-8 text-sm text-slate-500">
<a className="hover:text-slate-900" href="#">Prospecting</a>
<a className="hover:text-slate-900" href="#">Risk Assessment</a>
<a className="hover:text-slate-900" href="#">Search</a>
<a className="hover:text-slate-900" href="#">FAQ</a>
</div>
<div className="text-xs text-slate-400">
                © Elementix 2024
            </div>
</div>
</footer>


    </>
  );
}
