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
      

<header className="w-full py-8 md:py-12 px-6 md:px-12 fixed top-0 left-0 z-50 mix-blend-multiply bg-[#F9F8F6]/90 backdrop-blur-sm border-b border-[#1e293b]/5">
<div className="max-w-6xl mx-auto flex justify-between items-center">

<a className="text-sm font-medium tracking-[0.2em] uppercase text-[#0F172A]" href="#">
                Mueller
            </a>

<nav className="hidden md:flex space-x-8">
<a className="text-xs uppercase tracking-widest text-[#475569] hover:text-[#0F172A] transition-colors duration-300" href="#about">About</a>
<a className="text-xs uppercase tracking-widest text-[#475569] hover:text-[#0F172A] transition-colors duration-300" href="#philosophy">Philosophy</a>
<a className="text-xs uppercase tracking-widest text-[#475569] hover:text-[#0F172A] transition-colors duration-300" href="#how-we-work">How We Work</a>
<a className="text-xs uppercase tracking-widest text-[#475569] hover:text-[#0F172A] transition-colors duration-300" href="#contact">Contact</a>
</nav>

<button className="md:hidden text-[#0F172A]">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</header>

<main className="flex-grow pt-32 md:pt-48 px-6 md:px-12">

<section className="max-w-4xl mx-auto mb-32 md:mb-48 fade-in">
<h1 className="text-5xl md:text-7xl lg:text-8xl font-normal tracking-tight text-[#0F172A] leading-[1.1] mb-12">
                Proven Marketing Excellence
            </h1>
<div className="w-16 h-[1px] bg-[#C5A065] mb-12"></div> 
<div className="max-w-xl">
<p className="font-serif text-xl md:text-2xl text-[#334155] leading-relaxed mb-10 font-light">
                    We bring discipline, structure, and founded authority to performance marketing. 
                </p>
<a className="inline-flex items-center text-sm uppercase tracking-widest text-[#0F172A] border-b border-[#0F172A]/30 pb-1 hover:border-[#C5A065] transition-colors duration-300 group" href="mailto:adam@muellerholdings.ca">
                    adam@muellerholdings.ca
                </a>
</div>
</section>

<section className="max-w-3xl mx-auto mb-32 md:mb-48" id="about">
<span className="block text-[10px] uppercase tracking-[0.2em] text-[#94a3b8] mb-8">About</span>
<div className="prose prose-lg prose-slate font-serif text-[#334155]">
<p className="text-lg md:text-xl leading-loose font-light mb-8">
                    Mueller is a Canadian performance marketing firm founded by Adam Mueller. We function as a founder-led credibility platform for serious, established partners who require experience at scale.
                </p>
<p className="text-lg md:text-xl leading-loose font-light mb-8">
                    Our track record is defined by rigorous acquisition strategies and high-volume management. We currently oversee approximately $4M/month in managed spend, executing with a level of precision that comes only from deep licensing history and market maturity.
                </p>
<p className="text-lg md:text-xl leading-loose font-light">
                    We do not chase trends. We apply earned credibility to drive sustainable, scalable outcomes for institutional-grade brands.
                </p>
</div>
</section>

<section className="max-w-6xl mx-auto mb-32 md:mb-48 border-t border-[#1e293b]/10 pt-24" id="philosophy">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12">
<div className="md:col-span-4">
<span className="block text-[10px] uppercase tracking-[0.2em] text-[#94a3b8]">Philosophy</span>
</div>
<div className="md:col-span-8">
<h2 className="text-3xl md:text-4xl font-normal tracking-tight text-[#0F172A] mb-12">
                        Restraint &amp; Authority
                    </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<div>
<h3 className="text-base font-medium text-[#0F172A] mb-4">Institutional Focus</h3>
<p className="text-sm leading-relaxed text-[#475569] font-light">
                                We operate with the calm confidence of a partner that understands the stakes. Our approach is quiet, calculated, and devoid of unnecessary noise.
                            </p>
</div>
<div>
<h3 className="text-base font-medium text-[#0F172A] mb-4">Precision at Scale</h3>
<p className="text-sm leading-relaxed text-[#475569] font-light">
                                Managing significant monthly spend requires more than tactics; it requires architectural discipline and a steady hand.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto mb-32 md:mb-48">
<div className="border-t border-[#1e293b]/10 pt-16">
<h3 className="text-center font-serif text-2xl md:text-3xl text-[#0F172A] mb-16 tracking-tight">
                    Brands Adam Has Partnered With (Past &amp; Present)
                </h3>

<div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-24 items-center justify-items-center opacity-60 grayscale">


<svg className="h-8 w-auto text-[#475569]" fill="currentColor" viewbox="0 0 100 30">
<rect height="20" rx="2" width="20" x="0" y="5"></rect>
<rect height="6" width="60" x="25" y="12"></rect>
</svg>
<svg className="h-8 w-auto text-[#475569]" fill="currentColor" viewbox="0 0 100 30">
<circle cx="15" cy="15" r="10"></circle>
<rect height="6" width="50" x="35" y="12"></rect>
</svg>
<svg className="h-6 w-auto text-[#475569]" fill="currentColor" viewbox="0 0 100 30">
<path d="M0,15 L10,5 L20,15 L10,25 Z"></path>
<rect height="6" width="60" x="25" y="12"></rect>
</svg>
<svg className="h-7 w-auto text-[#475569]" fill="currentColor" viewbox="0 0 100 30">
<rect height="20" width="6" x="0" y="5"></rect>
<rect height="20" width="6" x="10" y="5"></rect>
<rect height="6" width="60" x="25" y="12"></rect>
</svg>
<svg className="h-8 w-auto text-[#475569]" fill="currentColor" viewbox="0 0 100 30">
<rect height="6" width="80" x="0" y="12"></rect>
<circle cx="90" cy="15" r="5"></circle>
</svg>
<svg className="h-8 w-auto text-[#475569]" fill="currentColor" viewbox="0 0 100 30">
<path d="M10,5 L20,25 L0,25 Z"></path>
<rect height="6" width="50" x="25" y="12"></rect>
</svg>
<svg className="h-7 w-auto text-[#475569]" fill="currentColor" viewbox="0 0 100 30">
<circle cx="10" cy="15" fill="none" r="8" stroke="currentColor" strokeWidth="2"></circle>
<rect height="6" width="50" x="25" y="12"></rect>
</svg>
<svg className="h-6 w-auto text-[#475569]" fill="currentColor" viewbox="0 0 100 30">
<rect height="10" transform="rotate(45 5 15)" width="10" x="0" y="10"></rect>
<rect height="6" width="60" x="25" y="12"></rect>
</svg>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto mb-32 md:mb-48 border-t border-[#1e293b]/10 pt-24" id="how-we-work">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12">
<div className="md:col-span-4">
<span className="block text-[10px] uppercase tracking-[0.2em] text-[#94a3b8]">How We Work</span>
</div>
<div className="md:col-span-8">
<div className="space-y-16">
<div className="group">
<span className="text-xs text-[#C5A065] block mb-2">01</span>
<h3 className="text-xl font-normal text-[#0F172A] mb-3">Assessment</h3>
<p className="text-sm text-[#475569] font-light max-w-md leading-relaxed">
                                We begin with a forensic audit of current acquisition channels. We identify inefficiencies before proposing scale.
                            </p>
</div>
<div className="group">
<span className="text-xs text-[#C5A065] block mb-2">02</span>
<h3 className="text-xl font-normal text-[#0F172A] mb-3">Implementation</h3>
<p className="text-sm text-[#475569] font-light max-w-md leading-relaxed">
                                Deployment of proven frameworks. We leverage our $4M/month spend data to optimize bids, creative, and placement immediately.
                            </p>
</div>
<div className="group">
<span className="text-xs text-[#C5A065] block mb-2">03</span>
<h3 className="text-xl font-normal text-[#0F172A] mb-3">Refinement</h3>
<p className="text-sm text-[#475569] font-light max-w-md leading-relaxed">
                                Continuous calibration. Our licensing history ensures compliance and longevity in competitive markets.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto mb-32 text-center" id="contact">
<div className="py-24 border-y border-[#1e293b]/10">
<p className="font-serif text-2xl md:text-3xl text-[#0F172A] mb-8 tracking-tight">
                    All inquiries are reviewed personally.
                </p>
<a className="text-base md:text-lg text-[#475569] hover:text-[#0F172A] transition-colors duration-300 border-b border-[#C5A065]/50 pb-1" href="mailto:adam@muellerholdings.ca">
                    adam@muellerholdings.ca
                </a>
</div>
</section>
</main>

<footer className="w-full py-12 px-6 md:px-12 bg-[#F9F8F6] border-t border-[#1e293b]/5">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
<div className="mb-8 md:mb-0">
<span className="text-xs font-medium tracking-[0.2em] uppercase text-[#0F172A]">Mueller</span>
<p className="text-[10px] text-[#94a3b8] mt-2 uppercase tracking-widest">© 2024 Mueller Holdings.</p>
</div>
<div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12">
<a className="text-[11px] uppercase tracking-widest text-[#64748b] hover:text-[#0F172A] transition-colors" href="#">Legal</a>
<a className="text-[11px] uppercase tracking-widest text-[#64748b] hover:text-[#0F172A] transition-colors" href="#">Privacy</a>
</div>
</div>
</footer>

    </>
  );
}
