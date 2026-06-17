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



tailwind.config = {
theme: {
extend: {
colors: {
highlight: '#2563eb',
highlightHover: '#1d4ed8',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        const modal = document.getElementById('articleModal');
        const body = document.body;

        function openArticle() {
            modal.classList.remove('hidden');
            setTimeout(() => {
                modal.classList.remove('opacity-0');
                modal.classList.add('opacity-100');
                body.classList.add('overflow-hidden-body');
            }, 10);
        }

        function closeArticle() {
            modal.classList.remove('opacity-100');
            modal.classList.add('opacity-0');
            body.classList.remove('overflow-hidden-body');
            
            setTimeout(() => {
                modal.classList.add('hidden');
            }, 300);
        }

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
                closeArticle();
            }
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
      

<header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">

<a className="font-serif text-xl tracking-tighter font-medium text-slate-900 flex items-center gap-2" href="#">
<span className="w-8 h-8 bg-slate-900 text-white rounded flex items-center justify-center text-sm">1F</span>
<span>Finance</span>
</a>

<nav className="hidden md:flex gap-6 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">Advisory</a>
<a className="hover:text-slate-900 transition-colors" href="#">Planning</a>
<a className="text-slate-900 transition-colors" href="#">Spotlight</a>
</nav>
</div>
<div className="flex items-center gap-4">
<button className="hidden sm:flex items-center justify-center text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
                    Log In
                </button>
<button className="bg-highlight hover:bg-highlightHover text-white text-xs sm:text-sm font-medium px-4 py-2 rounded-full transition-all flex items-center gap-2">
                    Talk to an Advisor
                    <iconify-icon height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</div>
</header>
<main className="w-full">

<section className="relative pt-24 pb-16 md:pt-32 md:pb-24 px-6 overflow-hidden flex flex-col items-center text-center">
<div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="relative z-10 max-w-3xl mx-auto">
<span className="text-xs font-semibold tracking-widest uppercase text-highlight mb-4 block">The Newsroom</span>
<h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight text-slate-900 font-medium leading-tight mb-6">
                    Insights That Shape Financial Thinking
                </h1>
<p className="text-base md:text-lg text-slate-500 font-light max-w-xl mx-auto">
                    Perspectives, strategies, and deeply researched analysis from our internal advisors, analysts, and subject matter experts.
                </p>
</div>
</section>

<div className="sticky top-16 z-30 w-full bg-[#fcfcfc]/90 backdrop-blur-xl border-y border-slate-200/50 py-3 px-6">
<div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-1 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-hide">
<button className="whitespace-nowrap px-4 py-1.5 rounded-full bg-slate-800 text-white text-xs font-medium transition-all">All</button>
<button className="whitespace-nowrap px-4 py-1.5 rounded-full text-slate-500 hover:text-slate-800 hover:bg-slate-100 text-xs font-medium transition-all">Tax</button>
<button className="whitespace-nowrap px-4 py-1.5 rounded-full text-slate-500 hover:text-slate-800 hover:bg-slate-100 text-xs font-medium transition-all">Investments</button>
<button className="whitespace-nowrap px-4 py-1.5 rounded-full text-slate-500 hover:text-slate-800 hover:bg-slate-100 text-xs font-medium transition-all">Wealth Strategy</button>
<button className="whitespace-nowrap px-4 py-1.5 rounded-full text-slate-500 hover:text-slate-800 hover:bg-slate-100 text-xs font-medium transition-all">Insurance</button>
</div>
<div className="relative w-full sm:w-64">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" height="16" icon="solar:magnifer-linear" strokeWidth="1.5" width="16"></iconify-icon>
<input className="w-full bg-slate-100/50 border border-slate-200 rounded-full py-1.5 pl-9 pr-4 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-300 focus:bg-white transition-all" placeholder="Search insights..." type="text"/>
</div>
</div>
</div>

<section className="py-20 px-6 max-w-5xl mx-auto relative">

<div className="absolute left-6 md:left-1/2 top-20 bottom-24 w-[1px] bg-slate-200 md:-translate-x-1/2 z-0"></div>

<div className="relative mb-20 md:mb-24">

<div className="relative flex items-center mb-10 md:mb-12 md:justify-center z-10">
<div className="absolute left-0 w-3 h-3 bg-slate-200 rounded-full md:hidden border-2 border-white shadow-[0_0_0_4px_rgba(252,252,252,1)] top-1/2 -translate-y-1/2"></div>
<div className="ml-10 md:ml-0 bg-white border border-slate-200 text-slate-500 text-[10px] sm:text-xs font-semibold px-4 py-1.5 rounded-full tracking-widest uppercase shadow-sm">
                        October 2023
                    </div>
</div>
<div className="flex flex-col gap-16 md:gap-8">

<div className="relative flex flex-col md:flex-row w-full md:justify-start items-start md:items-center group pl-10 md:pl-0">

<div className="absolute left-0 top-1 w-3 h-3 bg-highlight rounded-full md:hidden border-2 border-white shadow-[0_0_0_4px_rgba(252,252,252,1)]"></div>
<div className="w-full md:w-1/2 md:pr-16 text-left md:text-right flex flex-col md:items-end">

<div className="w-full max-w-md bg-white border border-slate-100 rounded-2xl p-6 text-left cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-200" onclick="openArticle()">
<div className="flex items-center gap-2 mb-3">
<span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">Wealth Strategy</span>
<span className="text-xs text-slate-400 flex items-center gap-1"><iconify-icon icon="solar:clock-circle-linear" width="14"></iconify-icon> 8 min read</span>
</div>
<h3 className="font-serif text-xl md:text-2xl tracking-tight text-slate-900 font-medium mb-3 leading-snug group-hover:text-highlight transition-colors">
                                    Rethinking Asset Allocation in a High-Interest Rate Environment
                                </h3>
<p className="text-sm text-slate-500 line-clamp-2 mb-4">
                                    As central banks maintain elevated rates, traditional 60/40 portfolios face structural headwinds. Here is how modern wealth strategy adapts.
                                </p>
<div className="flex items-center gap-3 mt-auto">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-medium text-slate-600">AR</div>
<div>
<p className="text-xs font-medium text-slate-900">Aditya Rao</p>
<p className="text-[10px] text-slate-500">Head of Investment Strategy</p>
</div>
</div>
</div>
</div>

<div className="hidden md:block absolute left-1/2 top-1/2 w-2.5 h-2.5 bg-highlight rounded-full -translate-x-1/2 -translate-y-1/2 ring-4 ring-[#fcfcfc] transition-transform duration-300 group-hover:scale-150 group-hover:bg-highlightHover"></div>
</div>
</div>
</div>

<div className="relative mb-20 md:mb-24">

<div className="relative flex items-center mb-10 md:mb-12 md:justify-center z-10">
<div className="absolute left-0 w-3 h-3 bg-slate-200 rounded-full md:hidden border-2 border-white shadow-[0_0_0_4px_rgba(252,252,252,1)] top-1/2 -translate-y-1/2"></div>
<div className="ml-10 md:ml-0 bg-white border border-slate-200 text-slate-500 text-[10px] sm:text-xs font-semibold px-4 py-1.5 rounded-full tracking-widest uppercase shadow-sm">
                        September 2023
                    </div>
</div>
<div className="flex flex-col gap-16 md:gap-8">

<div className="relative flex flex-col md:flex-row w-full md:justify-end items-start md:items-center group pl-10 md:pl-0">
<div className="absolute left-0 top-1 w-3 h-3 bg-slate-300 rounded-full md:hidden border-2 border-white shadow-[0_0_0_4px_rgba(252,252,252,1)]"></div>
<div className="hidden md:block absolute left-1/2 top-1/2 w-2.5 h-2.5 bg-slate-300 rounded-full -translate-x-1/2 -translate-y-1/2 ring-4 ring-[#fcfcfc] transition-all duration-300 group-hover:scale-150 group-hover:bg-slate-400"></div>
<div className="w-full md:w-1/2 md:pl-16 text-left">

<div className="w-full max-w-md bg-white border border-slate-100 rounded-2xl p-6 text-left cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-200" onclick="openArticle()">
<div className="flex items-center gap-2 mb-3">
<span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">Tax</span>
<span className="text-xs text-slate-400 flex items-center gap-1"><iconify-icon icon="solar:clock-circle-linear" width="14"></iconify-icon> 5 min read</span>
</div>
<h3 className="font-serif text-xl md:text-2xl tracking-tight text-slate-900 font-medium mb-3 leading-snug group-hover:text-highlight transition-colors">
                                    Capital Gains Tax Optimisation Before Year-End
                                </h3>
<p className="text-sm text-slate-500 line-clamp-2 mb-4">
                                    Strategic tax harvesting can significantly improve your net returns. A practical guide to minimizing your tax burden legally.
                                </p>
<div className="flex items-center gap-3 mt-auto">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-medium text-slate-600">MS</div>
<div>
<p className="text-xs font-medium text-slate-900">Meera Sharma</p>
<p className="text-[10px] text-slate-500">Senior Tax Advisor</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="relative">

<div className="relative flex items-center mb-10 md:mb-12 md:justify-center z-10">
<div className="absolute left-0 w-3 h-3 bg-slate-200 rounded-full md:hidden border-2 border-white shadow-[0_0_0_4px_rgba(252,252,252,1)] top-1/2 -translate-y-1/2"></div>
<div className="ml-10 md:ml-0 bg-white border border-slate-200 text-slate-500 text-[10px] sm:text-xs font-semibold px-4 py-1.5 rounded-full tracking-widest uppercase shadow-sm">
                        August 2023
                    </div>
</div>
<div className="flex flex-col gap-16 md:gap-8">

<div className="relative flex flex-col md:flex-row w-full md:justify-start items-start md:items-center group pl-10 md:pl-0">
<div className="absolute left-0 top-1 w-3 h-3 bg-slate-300 rounded-full md:hidden border-2 border-white shadow-[0_0_0_4px_rgba(252,252,252,1)]"></div>
<div className="w-full md:w-1/2 md:pr-16 text-left md:text-right flex flex-col md:items-end">

<div className="w-full max-w-md bg-white border border-slate-100 rounded-2xl p-6 text-left cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-200" onclick="openArticle()">
<div className="flex items-center gap-2 mb-3">
<span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">Insurance</span>
<span className="text-xs text-slate-400 flex items-center gap-1"><iconify-icon icon="solar:clock-circle-linear" width="14"></iconify-icon> 6 min read</span>
</div>
<h3 className="font-serif text-xl md:text-2xl tracking-tight text-slate-900 font-medium mb-3 leading-snug group-hover:text-highlight transition-colors">
                                    Beyond Term Life: Structuring Insurance as an Asset
                                </h3>
<p className="text-sm text-slate-500 line-clamp-2 mb-4">
                                    Moving past basic protection coverage. How high-net-worth individuals use specific policies to bypass probate and manage estate liquidity.
                                </p>
<div className="flex items-center gap-3 mt-auto">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-medium text-slate-600">KV</div>
<div>
<p className="text-xs font-medium text-slate-900">Karan Verma</p>
<p className="text-[10px] text-slate-500">Risk Management Specialist</p>
</div>
</div>
</div>
</div>
<div className="hidden md:block absolute left-1/2 top-1/2 w-2.5 h-2.5 bg-slate-300 rounded-full -translate-x-1/2 -translate-y-1/2 ring-4 ring-[#fcfcfc] transition-all duration-300 group-hover:scale-150 group-hover:bg-slate-400"></div>
</div>
</div>
</div>

<div className="mt-24 flex justify-center relative z-10">
<button className="text-sm font-medium text-slate-500 hover:text-slate-900 px-6 py-2 rounded-full border border-slate-200 hover:border-slate-300 bg-white transition-all shadow-sm">
                    Load Older Insights
                </button>
</div>
</section>

<section className="py-16 border-t border-slate-200/60 bg-white">
<div className="max-w-5xl mx-auto px-6 text-center">
<h3 className="text-xs font-medium tracking-widest uppercase text-slate-400 mb-8">Featured Insights Mentioned In</h3>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
<div className="font-serif text-2xl font-medium tracking-tight">The Economic Times</div>
<div className="font-sans text-xl font-bold tracking-tighter uppercase">MINT</div>
<div className="font-serif text-2xl font-medium italic">Financial Express</div>
<div className="font-sans text-xl font-semibold tracking-wide">Forbes</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-900 text-center relative overflow-hidden">
<div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
<div className="relative z-10 max-w-2xl mx-auto">
<h2 className="font-serif text-3xl md:text-4xl tracking-tight text-white font-medium mb-4">
                    Ready to operationalize these insights?
                </h2>
<p className="text-sm md:text-base text-slate-400 font-light mb-8">
                    Connect with our advisors to see how these strategies apply specifically to your financial landscape.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto bg-highlight hover:bg-highlightHover text-white text-sm font-medium px-6 py-3 rounded-full transition-all flex items-center justify-center gap-2">
                        Speak to a Financial Advisor
                        <iconify-icon height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<button className="w-full sm:w-auto bg-transparent border border-slate-700 hover:border-slate-500 text-white text-sm font-medium px-6 py-3 rounded-full transition-all">
                        Explore Financial Planning
                    </button>
</div>
</div>
</section>

<footer className="bg-white pt-16 pb-8 px-6 border-t border-slate-200">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 mb-12">
<div className="max-w-xs">
<a className="font-serif text-xl tracking-tighter font-medium text-slate-900 flex items-center gap-2 mb-4" href="#">
<span className="w-6 h-6 bg-slate-900 text-white rounded flex items-center justify-center text-xs">1F</span>
<span>Finance</span>
</a>
<p className="text-xs text-slate-500 leading-relaxed">
                        Unbiased, research-backed financial planning and advisory. Building long-term wealth through structured, rational strategies.
                    </p>
</div>
<div className="flex gap-12 sm:gap-24">
<div>
<h4 className="text-xs font-semibold text-slate-900 mb-4 uppercase tracking-wider">Popular Topics</h4>
<ul className="flex flex-col gap-2 text-sm text-slate-500">
<li><a className="hover:text-slate-900 transition-colors" href="#">Tax Harvesting</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Estate Planning</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Retirement Modeling</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Alternative Assets</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-slate-900 mb-4 uppercase tracking-wider">Company</h4>
<ul className="flex flex-col gap-2 text-sm text-slate-500">
<li><a className="hover:text-slate-900 transition-colors" href="#">Our Approach</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Advisors</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-slate-100 text-xs text-slate-400">
<p>© 2023 1 Finance. All rights reserved.</p>
<div className="flex gap-4">
<a className="hover:text-slate-600 transition-colors" href="#">Privacy</a>
<a className="hover:text-slate-600 transition-colors" href="#">Terms</a>
<a className="hover:text-slate-600 transition-colors" href="#">Disclosures</a>
</div>
</div>
</footer>
</main>

<div className="fixed inset-0 z-50 bg-white overflow-y-auto hidden opacity-0 transition-opacity duration-300" id="articleModal">
<div className="sticky top-0 z-10 bg-white/90 backdrop-blur-md border-b border-slate-100 px-6 py-4 flex items-center justify-between">
<button className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors group" onclick="closeArticle()">
<iconify-icon className="group-hover:-translate-x-1 transition-transform" height="18" icon="solar:arrow-left-linear" strokeWidth="1.5" width="18"></iconify-icon>
                Back to Spotlight
            </button>
<div className="flex items-center gap-3">
<button className="text-slate-400 hover:text-slate-600 transition-colors p-2 rounded-full hover:bg-slate-50">
<iconify-icon height="20" icon="solar:share-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="text-slate-400 hover:text-slate-600 transition-colors p-2 rounded-full hover:bg-slate-50">
<iconify-icon height="20" icon="solar:bookmark-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="max-w-3xl mx-auto px-6 py-12 md:py-20">
<div className="mb-12">
<div className="flex items-center gap-3 mb-6">
<span className="text-xs font-semibold tracking-wider uppercase px-2.5 py-1 rounded bg-slate-100 text-slate-700">Wealth Strategy</span>
<span className="text-xs text-slate-400">•</span>
<span className="text-xs text-slate-500">October 12, 2023</span>
<span className="text-xs text-slate-400">•</span>
<span className="text-xs text-slate-500 flex items-center gap-1"><iconify-icon icon="solar:clock-circle-linear" width="14"></iconify-icon> 8 min read</span>
</div>
<h1 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight text-slate-900 font-medium leading-tight mb-8">
                    Rethinking Asset Allocation in a High-Interest Rate Environment
                </h1>
<div className="flex items-center gap-4 py-6 border-y border-slate-100">
<div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-sm font-medium text-slate-600">AR</div>
<div>
<p className="text-sm font-medium text-slate-900">Aditya Rao</p>
<p className="text-xs text-slate-500">Head of Investment Strategy</p>
</div>
</div>
</div>
<div className="article-body">
<p className="text-lg text-slate-600 leading-relaxed mb-8">
                    For the better part of the last decade, the traditional 60/40 portfolio (60% equities, 40% bonds) served investors well in a predominantly low-interest-rate, low-inflation world. However, as central banks globally maintain elevated rates to combat persistent inflation, the structural logic behind this allocation model requires a fundamental reassessment.
                </p>
<div className="my-10 p-6 bg-slate-50 border-l-4 border-highlight rounded-r-xl">
<h4 className="text-xs font-bold uppercase tracking-widest text-highlight mb-2 flex items-center gap-2">
<iconify-icon icon="solar:lightbulb-bolt-linear" width="16"></iconify-icon> Key Insight
                    </h4>
<p className="text-sm text-slate-700 font-medium m-0 leading-relaxed">
                        Bonds are no longer just a shock absorber; they are generating real yield. However, the correlation between equities and fixed income has turned positive, meaning they often fall together, eroding the diversification benefit.
                    </p>
</div>
<h2>The Breakdown of Traditional Correlation</h2>
<p>
                    Historically, when equities dropped due to economic fears, central banks would cut rates, causing bond prices to rise. This negative correlation smoothed out portfolio returns. Today, inflation is the primary concern. When inflation data surprises on the upside, central banks hike rates (or hold them higher for longer), causing both bond prices and equity valuations to decline simultaneously.
                </p>
<div className="my-12 p-8 border border-slate-200 rounded-2xl bg-white shadow-sm">
<h4 className="text-sm font-medium text-slate-900 mb-6">Asset Class Performance Shifts (Illustrative)</h4>
<div className="flex flex-col gap-4">
<div>
<div className="flex justify-between text-xs text-slate-500 mb-1">
<span>Short-Term Treasuries</span>
<span>Yielding 5.2%</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-1.5"><div className="bg-slate-400 h-1.5 rounded-full" style={{width: '80%'}}></div></div>
</div>
<div>
<div className="flex justify-between text-xs text-slate-500 mb-1">
<span>Core Equities (S&amp;P/Nifty)</span>
<span>High Volatility</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-1.5"><div className="bg-highlight h-1.5 rounded-full" style={{width: '60%'}}></div></div>
</div>
<div>
<div className="flex justify-between text-xs text-slate-500 mb-1">
<span>Private Credit</span>
<span>Yielding 8-10%</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-1.5"><div className="bg-slate-800 h-1.5 rounded-full" style={{width: '95%'}}></div></div>
</div>
</div>
</div>
<h2>Strategic Adjustments for the New Regime</h2>
<p>
                    So, how should investors adapt? The answer lies in moving beyond simple public market allocations.
                </p>
<ul>
<li><strong>Embrace Short Duration:</strong> Cash and short-term debt instruments are providing equity-like returns with near-zero duration risk.</li>
<li><strong>Look to Alternatives:</strong> Private credit and real assets (like infrastructure) offer yields that are less correlated to public equity sentiment.</li>
<li><strong>Focus on Quality Equities:</strong> In a higher cost-of-capital environment, companies with strong balance sheets, pricing power, and high free-cash-flow yield will outperform highly leveraged growth stocks.</li>
</ul>
<div className="my-10 p-6 bg-slate-900 text-white rounded-xl">
<h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">What This Means For You</h4>
<p className="text-sm text-slate-200 m-0 leading-relaxed">
                        If your portfolio hasn't been structurally rebalanced since 2021, you may be carrying unintended risks. Passive "set and forget" index strategies are likely to underperform in this decade compared to active, tactical asset allocation.
                    </p>
</div>
</div>
<div className="mt-16 pt-12 border-t border-slate-200">
<div className="bg-slate-50 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-100">
<div>
<h4 className="font-serif text-xl font-medium text-slate-900 mb-2">Discuss your portfolio strategy</h4>
<p className="text-sm text-slate-500">Schedule a 30-minute consultation with our investment advisory team.</p>
</div>
<button className="shrink-0 bg-highlight hover:bg-highlightHover text-white text-sm font-medium px-6 py-3 rounded-full transition-all flex items-center gap-2">
                        Talk to an Advisor
                        <iconify-icon height="16" icon="solar:calendar-linear" width="16"></iconify-icon>
</button>
</div>
</div>
<div className="h-24"></div>
</div>
</div>


    </>
  );
}
