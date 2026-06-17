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
      

<nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 bg-slate-900 text-white flex items-center justify-center rounded-sm">
<span className="font-serif text-xl">Y</span>
</div>
<div className="flex flex-col">
<span className="text-slate-900 font-serif text-lg tracking-tight leading-none group-hover:opacity-80 transition-opacity">YUANTA</span>
<span className="text-[0.65rem] uppercase tracking-[0.2em] text-slate-500 leading-none mt-1">Wealth</span>
</div>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#planning">Wealth Planning</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#insights">CIO Insights</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#portfolios">Model Portfolios</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#why-yuanta">Why Yuanta</a>
</div>

<div className="hidden md:flex items-center gap-4">
<a className="text-sm font-medium text-slate-900 hover:text-amber-700 transition-colors" href="#">Consult Advisor</a>
<a className="bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium px-5 py-2.5 rounded-sm transition-colors shadow-sm" href="#">Start Your Plan</a>
</div>

<button className="md:hidden text-slate-900">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<main className="pt-20">

<section className="relative min-h-[90vh] flex items-center bg-slate-50 overflow-hidden">

<div className="absolute right-0 top-0 h-full w-1/3 bg-slate-200/30 skew-x-12 translate-x-20 z-0"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10 grid lg:grid-cols-2 gap-12 items-center">
<div className="max-w-2xl fade-in-up" style={{animationDelay: '0.1s'}}>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-8">
<span className="w-2 h-2 rounded-full bg-emerald-600"></span>
<span className="text-xs font-medium text-slate-600 uppercase tracking-wide">Monthly CIO Outlook Updated</span>
</div>
<h1 className="text-5xl lg:text-7xl font-serif text-slate-900 leading-[1.1] tracking-tight mb-6">
                        CIO-Led Wealth <br/>
<span className="text-slate-500 italic">Planning</span> for Every <br/>
                        Life Stage.
                    </h1>
<p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-lg font-light">
                        Institutional-grade investment discipline meets personalized goal-based planning. We build resilient, multi-asset portfolios designed for generations.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center px-8 py-3 bg-slate-900 text-white text-sm font-medium rounded-sm hover:bg-slate-800 transition-all shadow-md group" href="#">
                            Start Your Wealth Plan
                            <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center px-8 py-3 bg-white border border-slate-200 text-slate-900 text-sm font-medium rounded-sm hover:bg-slate-50 transition-all shadow-sm" href="#">
                            View Model Portfolios
                        </a>
</div>
<div className="mt-12 flex items-center gap-8 border-t border-slate-200 pt-8">
<div>
<p className="text-3xl font-serif text-slate-900">45+</p>
<p className="text-xs text-slate-500 uppercase tracking-wider mt-1">Years Experience</p>
</div>
<div>
<p className="text-3xl font-serif text-slate-900">Global</p>
<p className="text-xs text-slate-500 uppercase tracking-wider mt-1">Multi-Asset Reach</p>
</div>
<div>
<p className="text-3xl font-serif text-slate-900">CIO</p>
<p className="text-xs text-slate-500 uppercase tracking-wider mt-1">Investment Committee</p>
</div>
</div>
</div>

<div className="relative h-[600px] w-full hidden lg:block fade-in-up" style={{animationDelay: '0.3s'}}>
<div className="absolute inset-0 bg-slate-900 rounded-sm overflow-hidden shadow-2xl">

<img alt="Architecture" className="w-full h-full object-cover opacity-80 mix-blend-overlay" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-slate-900 to-transparent">
<div className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-sm">
<div className="flex items-center gap-3 mb-2">
<iconify-icon className="text-amber-400" icon="lucide:trending-up" width="20"></iconify-icon>
<span className="text-white text-sm font-medium tracking-wide">Market View • Q3 2024</span>
</div>
<p className="text-white font-serif text-xl italic">"Volatility is the price of admission for long-term growth. Stay disciplined."</p>
<p className="text-slate-300 text-xs mt-3 uppercase tracking-widest">— Chief Investment Officer</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-100" id="why-yuanta">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-xs font-semibold text-amber-700 uppercase tracking-[0.2em] mb-3 block">Our Philosophy</span>
<h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6 tracking-tight">Institutional Discipline for Private Wealth</h2>
<p className="text-slate-500 font-light text-lg">We move beyond retail trading, applying the rigorous framework of institutional endowments to manage your family's wealth.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 lg:gap-12">

<div className="group p-8 bg-slate-50 rounded-sm hover:bg-slate-900 hover:text-white transition-all duration-500 cursor-default border border-slate-100 hover:border-slate-900">
<div className="w-12 h-12 flex items-center justify-center bg-white border border-slate-200 rounded-sm mb-6 text-slate-900 group-hover:bg-slate-800 group-hover:border-slate-700 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:shield-check" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-serif mb-3 tracking-tight">Risk First, Return Second</h3>
<p className="text-sm leading-relaxed opacity-80">We prioritize capital preservation through dynamic asset allocation, ensuring your portfolio withstands market cycles.</p>
</div>

<div className="group p-8 bg-slate-50 rounded-sm hover:bg-slate-900 hover:text-white transition-all duration-500 cursor-default border border-slate-100 hover:border-slate-900">
<div className="w-12 h-12 flex items-center justify-center bg-white border border-slate-200 rounded-sm mb-6 text-slate-900 group-hover:bg-slate-800 group-hover:border-slate-700 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:users" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-serif mb-3 tracking-tight">CIO-Driven Consensus</h3>
<p className="text-sm leading-relaxed opacity-80">No single advisor makes the call. Every strategy is vetted by our Investment Committee and backed by global macro research.</p>
</div>

<div className="group p-8 bg-slate-50 rounded-sm hover:bg-slate-900 hover:text-white transition-all duration-500 cursor-default border border-slate-100 hover:border-slate-900">
<div className="w-12 h-12 flex items-center justify-center bg-white border border-slate-200 rounded-sm mb-6 text-slate-900 group-hover:bg-slate-800 group-hover:border-slate-700 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:compass" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-serif mb-3 tracking-tight">Goal-Based Architecture</h3>
<p className="text-sm leading-relaxed opacity-80">We don't sell products. We construct plans around your life's milestones: education, retirement, and legacy transfer.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="planning">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-xl">
<h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-4 tracking-tight">Planning for Life's Milestones</h2>
<p className="text-slate-600 font-light">Select a wealth goal to explore our strategic approach and recommended allocation models.</p>
</div>
<a className="text-slate-900 font-medium text-sm flex items-center hover:text-amber-700 transition-colors" href="#">
                        Explore all planning services <iconify-icon className="ml-1" icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<article className="bg-white p-6 rounded-sm border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
<div className="h-48 bg-slate-100 rounded-sm mb-6 overflow-hidden relative">
<img alt="Retirement" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="flex items-center gap-2 mb-3">
<iconify-icon className="text-amber-700" icon="lucide:armchair" width="18"></iconify-icon>
<span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Preservation</span>
</div>
<h3 className="text-xl font-serif text-slate-900 mb-2 group-hover:text-amber-700 transition-colors">Retirement &amp; Income</h3>
<p className="text-sm text-slate-500 mb-6 line-clamp-2">Structuring reliable cash flow streams while preserving purchasing power against inflation.</p>
<span className="text-xs font-medium text-slate-900 border-b border-slate-300 pb-0.5 group-hover:border-amber-700">View Strategy</span>
</article>

<article className="bg-white p-6 rounded-sm border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
<div className="h-48 bg-slate-100 rounded-sm mb-6 overflow-hidden relative">
<img alt="Education" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-center gap-2 mb-3">
<iconify-icon className="text-emerald-700" icon="lucide:graduation-cap" width="18"></iconify-icon>
<span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Growth</span>
</div>
<h3 className="text-xl font-serif text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">Education Planning</h3>
<p className="text-sm text-slate-500 mb-6 line-clamp-2">Target-date strategies to secure next-generation opportunities through disciplined accumulation.</p>
<span className="text-xs font-medium text-slate-900 border-b border-slate-300 pb-0.5 group-hover:border-emerald-700">View Strategy</span>
</article>

<article className="bg-white p-6 rounded-sm border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
<div className="h-48 bg-slate-100 rounded-sm mb-6 overflow-hidden relative">
<img alt="Wealth Growth" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&amp;w=2015&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-center gap-2 mb-3">
<iconify-icon className="text-blue-700" icon="lucide:bar-chart-2" width="18"></iconify-icon>
<span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Aggressive</span>
</div>
<h3 className="text-xl font-serif text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">Capital Accumulation</h3>
<p className="text-sm text-slate-500 mb-6 line-clamp-2">Maximizing long-term appreciation through diversified exposure to global equities and alternatives.</p>
<span className="text-xs font-medium text-slate-900 border-b border-slate-300 pb-0.5 group-hover:border-blue-700">View Strategy</span>
</article>

<article className="bg-white p-6 rounded-sm border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
<div className="h-48 bg-slate-100 rounded-sm mb-6 overflow-hidden relative">
<img alt="Legacy" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-center gap-2 mb-3">
<iconify-icon className="text-purple-700" icon="lucide:landmark" width="18"></iconify-icon>
<span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Legacy</span>
</div>
<h3 className="text-xl font-serif text-slate-900 mb-2 group-hover:text-purple-700 transition-colors">Estate &amp; Legacy</h3>
<p className="text-sm text-slate-500 mb-6 line-clamp-2">Efficient wealth transfer structures to ensure your values and assets endure across generations.</p>
<span className="text-xs font-medium text-slate-900 border-b border-slate-300 pb-0.5 group-hover:border-purple-700">View Strategy</span>
</article>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white relative overflow-hidden" id="insights">

<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-slate-800 via-amber-700 to-slate-800"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="flex flex-col lg:flex-row gap-16">

<div className="lg:w-2/3">
<div className="flex items-center gap-4 mb-6">
<span className="px-3 py-1 bg-amber-900/30 text-amber-400 border border-amber-800/50 text-xs font-medium rounded-sm">Monthly Outlook</span>
<span className="text-slate-400 text-sm">October 2023</span>
</div>
<h2 className="text-4xl md:text-5xl font-serif leading-tight mb-8">Navigating the Pivot: Why Bond Yields Matter More Than Ever</h2>
<div className="prose prose-invert prose-lg text-slate-300 font-light mb-8 max-w-none">
<p className="mb-4">
                                As central banks signal a "higher for longer" regime, the traditional 60/40 portfolio is finding renewed relevance. 
                                Our Investment Committee analyzes the shift from equity risk premium to credit opportunities in the emerging Asian landscape.
                            </p>
</div>

<div className="bg-slate-800/50 border-l-2 border-amber-600 p-6 mb-8 rounded-r-sm">
<p className="font-serif text-xl italic text-white mb-4">"Investors should focus on quality duration. The era of free money is over; cash flow is king."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-xs font-serif">CIO</div>
<div>
<p className="text-sm font-medium text-white">Dr. Suthichai P.</p>
<p className="text-xs text-slate-400">Chief Investment Officer, Yuanta Wealth</p>
</div>
</div>
</div>
<div className="flex flex-wrap gap-4">
<button className="flex items-center gap-2 px-6 py-3 bg-white text-slate-900 text-sm font-medium rounded-sm hover:bg-slate-200 transition-colors">
<iconify-icon icon="lucide:file-text" width="18"></iconify-icon>
                                Read Full Report
                            </button>
<button className="flex items-center gap-2 px-6 py-3 border border-slate-700 text-white text-sm font-medium rounded-sm hover:bg-slate-800 transition-colors">
<iconify-icon icon="lucide:mail" width="18"></iconify-icon>
                                Subscribe to Brief
                            </button>
</div>
</div>

<div className="lg:w-1/3 space-y-8">
<div className="p-6 bg-slate-800 rounded-sm border border-slate-700">
<h3 className="text-sm font-medium text-slate-400 uppercase tracking-widest mb-6 border-b border-slate-700 pb-2">Asset Allocation View</h3>
<div className="space-y-5">
<div>
<div className="flex justify-between text-sm mb-1">
<span className="text-white">Global Equities</span>
<span className="text-amber-400 font-medium">Neutral</span>
</div>
<div className="h-1.5 w-full bg-slate-700 rounded-full">
<div className="h-1.5 bg-slate-400 w-1/2 rounded-full"></div>
</div>
</div>
<div>
<div className="flex justify-between text-sm mb-1">
<span className="text-white">Fixed Income</span>
<span className="text-emerald-400 font-medium">Overweight</span>
</div>
<div className="h-1.5 w-full bg-slate-700 rounded-full">
<div className="h-1.5 bg-emerald-500 w-3/4 rounded-full"></div>
</div>
</div>
<div>
<div className="flex justify-between text-sm mb-1">
<span className="text-white">Alternatives/Gold</span>
<span className="text-amber-400 font-medium">Neutral</span>
</div>
<div className="h-1.5 w-full bg-slate-700 rounded-full">
<div className="h-1.5 bg-slate-400 w-1/2 rounded-full"></div>
</div>
</div>
</div>
</div>
<div className="p-6 bg-slate-800 rounded-sm border border-slate-700">
<h3 className="text-sm font-medium text-slate-400 uppercase tracking-widest mb-4">Past Reports</h3>
<ul className="space-y-3">
<li>
<a className="block group" href="#">
<span className="text-xs text-slate-500">Sep 2023</span>
<p className="text-sm text-slate-300 group-hover:text-amber-400 transition-colors">Emerging Market Resilience</p>
</a>
</li>
<li>
<a className="block group" href="#">
<span className="text-xs text-slate-500">Aug 2023</span>
<p className="text-sm text-slate-300 group-hover:text-amber-400 transition-colors">Tech Valuations &amp; AI Hype</p>
</a>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="portfolios">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-xs font-semibold text-slate-500 uppercase tracking-[0.2em] mb-3 block">Curated Strategies</span>
<h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6 tracking-tight">Institutional Model Portfolios</h2>
<p className="text-slate-500 font-light">Pre-constructed, multi-asset strategies managed by our Investment Committee to align with your risk tolerance.</p>
</div>

<div className="flex justify-center mb-12">
<div className="inline-flex bg-slate-100 p-1 rounded-sm">
<button className="px-6 py-2 text-sm font-medium text-slate-900 bg-white shadow-sm rounded-sm">Balanced</button>
<button className="px-6 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">Growth</button>
<button className="px-6 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">Defensive</button>
</div>
</div>

<div className="bg-slate-50 border border-slate-200 rounded-sm overflow-hidden flex flex-col lg:flex-row">

<div className="p-8 lg:p-12 lg:w-2/3">
<div className="flex items-start justify-between mb-6">
<div>
<h3 className="text-2xl font-serif text-slate-900 mb-1">Global Balanced Core</h3>
<p className="text-slate-500 text-sm">Code: YWT-BL-01</p>
</div>
<div className="flex items-center gap-1 bg-white border border-slate-200 px-3 py-1 rounded-full">
<div className="w-2 h-2 rounded-full bg-amber-500"></div>
<span className="text-xs font-medium text-slate-700">Moderate Risk</span>
</div>
</div>
<p className="text-slate-600 mb-8 leading-relaxed">
                            A diversified strategy seeking capital appreciation with moderate volatility. The portfolio maintains a strategic 60/40 tilt but utilizes dynamic tactical asset allocation to navigate short-term market dislocations. Ideal for medium-term horizons (5-7 years).
                        </p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 border-t border-slate-200 pt-8">
<div>
<p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Exp. Return</p>
<p className="text-lg font-serif text-slate-900">6.0 - 8.0%</p>
</div>
<div>
<p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Volatility</p>
<p className="text-lg font-serif text-slate-900">Medium</p>
</div>
<div>
<p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Yield</p>
<p className="text-lg font-serif text-slate-900">2.5%</p>
</div>
<div>
<p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Min. Inv.</p>
<p className="text-lg font-serif text-slate-900">฿10M</p>
</div>
</div>
<div className="flex gap-4">
<a className="px-6 py-3 bg-slate-900 text-white text-sm font-medium rounded-sm hover:bg-slate-800 transition-colors" href="#">Download Factsheet</a>
<a className="px-6 py-3 border border-slate-300 text-slate-900 text-sm font-medium rounded-sm hover:bg-white hover:border-slate-400 transition-colors" href="#">Consult Advisor</a>
</div>
</div>

<div className="bg-white lg:w-1/3 p-8 border-l border-slate-200 flex flex-col justify-center">
<h4 className="text-sm font-semibold text-slate-900 mb-6">Target Allocation</h4>

<div className="space-y-4">
<div>
<div className="flex justify-between text-xs mb-1">
<span className="text-slate-600">Global Equities</span>
<span className="font-medium text-slate-900">45%</span>
</div>
<div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-slate-800 w-[45%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs mb-1">
<span className="text-slate-600">Thai Equities</span>
<span className="font-medium text-slate-900">15%</span>
</div>
<div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-slate-600 w-[15%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs mb-1">
<span className="text-slate-600">Global Fixed Income</span>
<span className="font-medium text-slate-900">30%</span>
</div>
<div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-amber-700 w-[30%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs mb-1">
<span className="text-slate-600">Cash / Alternatives</span>
<span className="font-medium text-slate-900">10%</span>
</div>
<div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-slate-400 w-[10%]"></div>
</div>
</div>
</div>
<div className="mt-8 bg-slate-50 p-4 rounded-sm border border-slate-100">
<div className="flex gap-2">
<iconify-icon className="text-amber-700/50" icon="lucide:quote" width="20"></iconify-icon>
<p className="text-xs text-slate-600 italic leading-relaxed">
                                    "We are currently overweighting investment-grade bonds to lock in yields, while maintaining quality equity exposure."
                                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200">
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-6">Experience Wealth Management, Refined.</h2>
<p className="text-slate-600 mb-8 font-light text-lg">
                    Schedule a private consultation with a Yuanta Investment Advisor to discuss your family's financial architecture.
                </p>
<form className="max-w-md mx-auto space-y-4 text-left">
<div>
<label className="sr-only" htmlFor="email">Email Address</label>
<input className="w-full px-4 py-3 bg-white border border-slate-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900 text-slate-900 placeholder-slate-400" id="email" placeholder="Enter your email address" type="email"/>
</div>
<button className="w-full py-3 bg-slate-900 text-white font-medium rounded-sm hover:bg-slate-800 transition-colors shadow-md" type="button">
                        Request Consultation
                    </button>
<p className="text-center text-xs text-slate-400 mt-4">
                        By submitting, you agree to our privacy policy. An advisor will contact you within 24 hours.
                    </p>
</form>
</div>
</section>
</main>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 bg-slate-900 text-white flex items-center justify-center rounded-sm">
<span className="font-serif text-sm">Y</span>
</div>
<span className="text-slate-900 font-serif tracking-tight">YUANTA WEALTH</span>
</div>
<p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                        Thailand's premier CIO-led wealth management partner. We combine institutional discipline with personalized planning for the mass affluent and high-net-worth.
                    </p>
</div>
<div>
<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4">Planning</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 hover:text-slate-900" href="#">Retirement</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900" href="#">Education</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900" href="#">Legacy &amp; Tax</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4">Insights</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 hover:text-slate-900" href="#">Monthly Outlook</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900" href="#">Market View</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900" href="#">Webinars</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4">Contact</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 hover:text-slate-900" href="#">Find an Advisor</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900" href="#">Locations</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900" href="#">+66 2 123 4567</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2024 Yuanta Securities (Thailand). All rights reserved.</p>
<div className="flex gap-6">
<a className="text-xs text-slate-400 hover:text-slate-900" href="#">Privacy Policy</a>
<a className="text-xs text-slate-400 hover:text-slate-900" href="#">Terms of Service</a>
<a className="text-xs text-slate-400 hover:text-slate-900" href="#">Disclaimer</a>
</div>
</div>
<div className="mt-8 text-[10px] text-slate-300 leading-normal max-w-4xl">
                Investment involves risk. Past performance is not a guarantee of future results. The value of investments and the income from them can go down as well as up. Investors may not get back the amount originally invested. The content of this website is for informational purposes only and does not constitute financial advice or an offer to sell any product.
            </div>
</div>
</footer>

    </>
  );
}
