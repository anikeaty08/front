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
      

<nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="text-xl tracking-tighter font-serif font-medium text-slate-900 flex flex-col leading-none" href="#">
<span className="">CMMC</span>
<span className="text-[10px] font-sans tracking-widest uppercase text-slate-500 mt-1">Chandra Motik Maritime Centre</span>
</a>

<div className="hidden md:flex items-center gap-10 text-xs font-medium uppercase tracking-widest text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">Insights</a>
<a className="hover:text-slate-900 transition-colors" href="#">Expertise</a>
<a className="hover:text-slate-900 transition-colors" href="#">The Firm</a>
<a className="hover:text-slate-900 transition-colors" href="#">Contact</a>
</div>

<button className="text-slate-900 hover:text-slate-600 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="18" data-icon="lucide:search" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m21 21l-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></g></svg>
</button>
</div>
</nav>

<main className="pt-20">

<header className="px-6 py-24 md:py-32 border-b border-slate-200">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
<div className="md:col-span-8">
<span className="block uppercase flex items-center gap-3 text-xs font-medium text-slate-500 tracking-widest mb-8"><span className="w-8 h-[1px] bg-slate-400"></span> Est. 1985 — Jakarta</span>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-normal text-slate-900 leading-[1.05] tracking-tight text-balance mb-12">
                        Defining the maritime<br/>strategic architecture.
                    </h1>
<div className="max-w-xl">
<p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed mb-8">
                            We provide legal counsel, regulatory analysis, and strategic intelligence for the Indo-Pacific's most complex maritime challenges.
                        </p>
<a className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-slate-900 border-b border-slate-900 pb-1 hover:text-slate-600 hover:border-slate-600 transition-all" href="#featured">
                            Read Featured Insight
                            <svg aria-hidden="true" className="iconify iconify--lucide" data-height="14" data-icon="lucide:arrow-down-right" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m7 7l10 10m0-10v10H7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
</div>
</header>

<section className="px-6 py-24 border-b border-slate-200" id="featured">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12">

<div className="md:col-span-3 border-t border-slate-900 pt-4 md:border-none md:pt-0">
<span className="text-xs font-medium uppercase tracking-widest text-slate-900 block mb-2">Featured Analysis</span>
<span className="text-xs text-slate-500 font-serif italic">Curated by the Editorial Board</span>
</div>

<div className="md:col-span-9">
<article className="group">
<div className="flex flex-wrap items-baseline gap-x-6 gap-y-2 text-xs text-slate-500 mb-6 uppercase tracking-widest font-medium">
<span className="text-slate-900">Strategic Insight</span>
<span>—</span>
<span>Infrastructure Finance</span>
<span>—</span>
<span>October 2023</span>
</div>
<h2 className="text-4xl md:text-6xl font-serif font-normal text-slate-900 leading-[1.1] tracking-tight mb-8 group-hover:text-slate-700 transition-colors cursor-pointer">
                                The Malacca Strait Dilemma: Infrastructure Financing and Geopolitical Neutrality
                            </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<p className="text-lg text-slate-600 font-light leading-relaxed">
                                    As global trade volumes through the straits recover to pre-pandemic levels, the pressure for modernization clashes with fiscal austerity. This report analyzes the policy pathways for Indonesia and Singapore in a shifting alliance landscape.
                                </p>
<div className="flex flex-col justify-between">
<p className="text-sm text-slate-500 leading-relaxed mb-6">
                                        Key analysis points include sovereign debt implications, the "dual-use" port infrastructure debate, and the evolving role of private equity in maritime logistics corridors.
                                    </p>
<a className="inline-flex self-start items-center gap-2 text-xs font-medium uppercase tracking-widest text-slate-900 hover:text-slate-600 transition-colors" href="#">
                                        Read Full Report <svg aria-hidden="true" className="iconify iconify--lucide" data-height="14" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
</article>
</div>
</div>
</div>
</section>

<section className="px-6 py-24 bg-slate-50 border-b border-slate-200">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
<div className="md:col-span-3">
<h3 className="text-2xl font-serif text-slate-900">Recent Publications</h3>
</div>
<div className="md:col-span-9">
<p className="text-slate-600 font-light max-w-2xl">
                            Ongoing commentary on regulatory shifts, market dynamics, and legal precedents affecting the maritime sector.
                        </p>
</div>
</div>
<div className="border-t border-slate-300">

<article className="group grid grid-cols-1 md:grid-cols-12 gap-6 py-8 border-b border-slate-200 items-baseline hover:bg-slate-100/50 transition-colors">
<div className="md:col-span-3">
<span className="text-xs font-medium uppercase tracking-widest text-slate-500">Regulation</span>
</div>
<div className="md:col-span-7">
<h4 className="text-xl font-serif text-slate-900 mb-2 leading-tight">
<a className="hover-line" href="#">Cabotage Law Revision 2024: Implications for Foreign Hulls</a>
</h4>
<p className="text-sm text-slate-600 font-light line-clamp-2 max-w-2xl">
                                An in-depth look at the proposed amendments to the shipping law and the potential impact on offshore oil and gas operations in the Java Sea.
                            </p>
</div>
<div className="md:col-span-2 text-right">
<span className="text-xs text-slate-400 font-mono">22 OCT</span>
</div>
</article>

<article className="group grid grid-cols-1 md:grid-cols-12 gap-6 py-8 border-b border-slate-200 items-baseline hover:bg-slate-100/50 transition-colors">
<div className="md:col-span-3">
<span className="text-xs font-medium uppercase tracking-widest text-slate-500">Markets</span>
</div>
<div className="md:col-span-7">
<h4 className="text-xl font-serif text-slate-900 mb-2 leading-tight">
<a className="hover-line" href="#">Dry Bulk Outlook Q4: The Coal Export Trajectory</a>
</h4>
<p className="text-sm text-slate-600 font-light line-clamp-2 max-w-2xl">
                                Analyzing the correlation between recent energy policy shifts in East Asia and the demand for supramax vessels in Indonesian waters.
                            </p>
</div>
<div className="md:col-span-2 text-right">
<span className="text-xs text-slate-400 font-mono">19 OCT</span>
</div>
</article>

<article className="group grid grid-cols-1 md:grid-cols-12 gap-6 py-8 border-b border-slate-200 items-baseline hover:bg-slate-100/50 transition-colors">
<div className="md:col-span-3">
<span className="text-xs font-medium uppercase tracking-widest text-slate-500">Decarbonization</span>
</div>
<div className="md:col-span-7">
<h4 className="text-xl font-serif text-slate-900 mb-2 leading-tight">
<a className="hover-line" href="#">Green Corridors: Feasibility of Ammonia Bunkering</a>
</h4>
<p className="text-sm text-slate-600 font-light line-clamp-2 max-w-2xl">
                                Assessing port readiness and investment gaps for alternative fuel infrastructure across major container terminals.
                            </p>
</div>
<div className="md:col-span-2 text-right">
<span className="text-xs text-slate-400 font-mono">15 OCT</span>
</div>
</article>
</div>
<div className="mt-12">
<a className="inline-block text-xs font-medium uppercase tracking-widest text-slate-900 border border-slate-300 px-6 py-3 hover:bg-slate-900 hover:text-white transition-colors" href="#">
                        View Archive
                    </a>
</div>
</div>
</section>

<section className="px-6 py-24 border-b border-slate-200">
<div className="max-w-7xl mx-auto">
<div className="mb-16 border-b border-slate-900 pb-4 flex justify-between items-end">
<h3 className="text-sm font-sans font-medium uppercase tracking-widest text-slate-900">Domains of Expertise</h3>
<span className="hidden md:block text-xs text-slate-500 font-serif italic">Comprehensive maritime advisory</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">

<div className="group">
<h4 className="text-xl font-serif text-slate-900 mb-3 group-hover:text-slate-600 transition-colors">Shipping &amp; Operations</h4>
<div className="w-8 h-[1px] bg-slate-300 mb-4 group-hover:w-full transition-all duration-500"></div>
<p className="text-sm text-slate-600 font-light leading-relaxed">
                            Fleet dynamics, international crewing standards compliance, and operational efficiency analysis for commercial fleets.
                        </p>
</div>

<div className="group">
<h4 className="text-xl font-serif text-slate-900 mb-3 group-hover:text-slate-600 transition-colors">Ports &amp; Infrastructure</h4>
<div className="w-8 h-[1px] bg-slate-300 mb-4 group-hover:w-full transition-all duration-500"></div>
<p className="text-sm text-slate-600 font-light leading-relaxed">
                            Development consultancy, intermodal connectivity studies, and supply chain optimization for terminal operators.
                        </p>
</div>

<div className="group">
<h4 className="text-xl font-serif text-slate-900 mb-3 group-hover:text-slate-600 transition-colors">Maritime Law</h4>
<div className="w-8 h-[1px] bg-slate-300 mb-4 group-hover:w-full transition-all duration-500"></div>
<p className="text-sm text-slate-600 font-light leading-relaxed">
                            Advisory on IMO compliance, cabotage laws, arbitration policy, and regulatory frameworks in the ASEAN region.
                        </p>
</div>

<div className="group">
<h4 className="text-xl font-serif text-slate-900 mb-3 group-hover:text-slate-600 transition-colors">Energy &amp; Offshore</h4>
<div className="w-8 h-[1px] bg-slate-300 mb-4 group-hover:w-full transition-all duration-500"></div>
<p className="text-sm text-slate-600 font-light leading-relaxed">
                            Strategic support for offshore exploration, oil &amp; gas logistics, and navigating the energy transition landscape.
                        </p>
</div>

<div className="group">
<h4 className="text-xl font-serif text-slate-900 mb-3 group-hover:text-slate-600 transition-colors">Asset Finance</h4>
<div className="w-8 h-[1px] bg-slate-300 mb-4 group-hover:w-full transition-all duration-500"></div>
<p className="text-sm text-slate-600 font-light leading-relaxed">
                            Structuring for vessel acquisition, insurance market analysis, and investment risk assessment for financial institutions.
                        </p>
</div>

<div className="group">
<h4 className="text-xl font-serif text-slate-900 mb-3 group-hover:text-slate-600 transition-colors">Commodities Trade</h4>
<div className="w-8 h-[1px] bg-slate-300 mb-4 group-hover:w-full transition-all duration-500"></div>
<p className="text-sm text-slate-600 font-light leading-relaxed">
                            Trade flow analysis for coal, palm oil, nickel, and bulk goods, focusing on volume forecasting and route economics.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-slate-900 text-slate-200">
<div className="max-w-4xl mx-auto text-center">
<span className="block text-xs font-medium uppercase tracking-widest text-slate-500 mb-8">The Institution</span>
<p className="md:text-4xl leading-tight text-2xl font-light text-slate-50 font-serif mb-10">"Chandra Motik Maritime Centre is a maritime law and finance institution providing legal counsel, regulatory analysis, and strategic advisory services. We work across shipping, ports, offshore, and maritime finance, with a focus on complex matters involving Indonesian and cross-border operations.""</p>
<div className="h-[1px] w-24 bg-slate-700 mx-auto mb-8"></div>
<p className="text-sm font-sans tracking-widest uppercase text-slate-400">Chandra Motik Maritime Centre</p>
</div>
</section>
</main>

<footer className="bg-white pt-24 pb-12 px-6 border-t border-slate-200">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
<div className="md:col-span-1 pr-8">
<a className="text-lg tracking-tighter font-serif font-medium text-slate-900 block mb-6" href="#">CMMC</a>
<p className="text-xs text-slate-500 leading-relaxed max-w-xs">
                        An independent institution providing strategic intelligence and legal counsel for the maritime decision maker.
                    </p>
</div>
<div>
<h6 className="text-xs font-medium uppercase tracking-widest text-slate-900 mb-6">Intelligence</h6>
<ul className="space-y-4 text-sm text-slate-600">
<li><a className="hover:text-slate-900 hover:underline decoration-1 underline-offset-4" href="#">Strategic Insights</a></li>
<li><a className="hover:text-slate-900 hover:underline decoration-1 underline-offset-4" href="#">Regulatory Monitor</a></li>
<li><a className="hover:text-slate-900 hover:underline decoration-1 underline-offset-4" href="#">Market Reports</a></li>
</ul>
</div>
<div className="">
<h6 className="text-xs font-medium uppercase tracking-widest text-slate-900 mb-6">The Firm</h6>
<ul className="space-y-4 text-sm text-slate-600">
<li className=""><a className="hover:text-slate-900 hover:underline decoration-1 underline-offset-4" href="#">About CMMC</a></li>
<li className=""><a className="hover:text-slate-900 hover:underline decoration-1 underline-offset-4" href="#">Leadership</a></li>
<li className=""><a className="hover:text-slate-900 hover:underline decoration-1 underline-offset-4" href="#">Careers</a></li>
</ul>
</div>
<div className="">
<h6 className="text-xs font-medium uppercase tracking-widest text-slate-900 mb-6">Contact</h6>
<div className="text-sm text-slate-600 space-y-4">
<p className="">JL KH Samanhudi 20 RT: 001 RW: 02 Pasar Baru Jakarta Pusat</p>
<p className=""><a className="hover:text-slate-900" href="mailto:info@cmmc.org">yudi.motik@cmylaw.id</a></p>
</div>
</div>
</div>
<div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-slate-400">
<p>© 2024 Chandra Motik Maritime Centre</p>
<div className="flex gap-8">
<a className="hover:text-slate-900" href="#">Privacy Policy</a>
<a className="hover:text-slate-900" href="#">Terms of Engagement</a>
<a className="hover:text-slate-900" href="#">Sitemap</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
