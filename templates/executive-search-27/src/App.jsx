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
      

<div className="fixed inset-0 pointer-events-none z-50 flex justify-center w-full">
<div className="w-full max-w-[88rem] h-full flex justify-between px-6 lg:px-12">
<div className="w-px h-full bg-[#EAE6DF]"></div>
<div className="w-px h-full bg-[#EAE6DF] hidden md:block"></div>
<div className="w-px h-full bg-[#EAE6DF] hidden lg:block"></div>
<div className="w-px h-full bg-[#EAE6DF]"></div>
</div>
</div>

<nav className="absolute top-0 w-full z-40 py-8 hairline-b bg-[#FFFFFF]/90 backdrop-blur-sm">
<div className="max-w-[88rem] mx-auto px-6 lg:px-12 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<span className="text-2xl leading-[1.2] tracking-tight font-normal text-[#222222]">Crossbridge Executive</span>
</a>
<div className="hidden md:flex items-center gap-10 text-xs leading-[1.4] font-normal text-[#555555] tracking-tight">
<a className="hover:text-[#222222] transition-colors" href="#">Expertise</a>
<a className="hover:text-[#222222] transition-colors" href="#">Approach</a>
<a className="hover:text-[#222222] transition-colors" href="#">Track Record</a>
<a className="hover:text-[#222222] transition-colors" href="#">Insights</a>
</div>
<div className="flex items-center gap-5">
<a className="hidden md:block text-xs leading-[1.4] font-medium overline-style text-[#9B1B1B] hover:text-[#222222] transition-colors" href="#">Engage Firm</a>
<button className="text-[#555555] hover:text-[#222222] transition-colors">
<iconify-icon className="text-2xl md:hidden" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative pt-48 pb-32 min-h-[90vh] flex flex-col justify-center overflow-hidden section-container bg-[#FFFFFF]">
<div className="max-w-[88rem] mx-auto px-6 lg:px-12 w-full relative z-10">
<div className="mb-12">
<span className="text-xs leading-[1.4] font-medium overline-style text-[#9B1B1B]">Institutional Search Partners</span>
</div>
<h1 className="text-6xl md:text-7xl leading-[1.1] font-normal tracking-tighter max-w-5xl mb-12 text-[#222222]">
                Every search completed.<br/>
<span className="text-[#9B1B1B]">2.16:1</span> interview-to-offer ratio.<br/>
                97% offer acceptance.
            </h1>
<div className="w-full flex flex-col md:flex-row justify-between items-start mt-16 text-left gap-12 hairline-t pt-12">
<div className="max-w-xl">
<p className="text-lg leading-[1.6] font-light text-[#555555]">
                        The right person hired in weeks, productive from day one, still there a year later. We bridge the gap between traditional finance and digital assets.
                    </p>
</div>
<div className="flex flex-col items-start md:items-end text-left md:text-right gap-6 shrink-0">
<a className="btn-sharp inline-flex items-center justify-center bg-[#9B1B1B] text-[#FFFFFF] px-8 py-4 text-xs leading-[1.4] font-medium overline-style hover:bg-[#7A1515]" href="#">
                        Initiate a Search
                    </a>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#FFFFFF] hairline-y">
<div className="max-w-[88rem] mx-auto px-6 lg:px-12 text-center max-w-4xl">
<iconify-icon className="text-3xl text-[#9B1B1B]/20 mb-8" icon="solar:quote-left-bold"></iconify-icon>
<h2 className="text-4xl md:text-5xl leading-[1.2] font-normal tracking-tight text-[#222222]">
                The institutional digital assets talent gap is a <span className="text-[#9B1B1B]">translation problem</span>, not a supply problem.
            </h2>
</div>
</section>

<section className="py-32 section-container bg-[#F9F6F0]">
<div className="max-w-[88rem] mx-auto px-6 lg:px-12">
<div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-12">
<div className="max-w-2xl">
<span className="text-xs leading-[1.4] font-medium overline-style text-[#9B1B1B] block mb-6">Our Mandate</span>
<h2 className="text-4xl md:text-5xl leading-[1.2] font-normal tracking-tight text-[#222222]">
                        Disruption in a suit.
                    </h2>
</div>
<div className="max-w-sm mt-8 md:mt-0">
<p className="text-base leading-[1.6] font-light text-[#555555]">
                        Retained executive search exclusively for the institutional side of digital assets. We do not compromise on quality or discretion.
                    </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 hairline-t hairline-l">

<div className="p-10 hairline-r hairline-b bg-[#FFFFFF] hover:shadow-sm transition-shadow duration-500">
<span className="text-2xl leading-[1.2] font-light tracking-tight text-[#9B1B1B] block mb-6">01</span>
<h3 className="text-2xl md:text-3xl leading-[1.2] font-normal tracking-tight mb-4 text-[#222222]">Bilingual Fluency</h3>
<p className="text-base leading-[1.6] font-light text-[#555555]">
                        Finding senior executives ($150K+ base) who speak fluently in the language of traditional finance and the native tongue of digital assets.
                    </p>
</div>

<div className="p-10 hairline-r hairline-b bg-[#FFFFFF] hover:shadow-sm transition-shadow duration-500">
<span className="text-2xl leading-[1.2] font-light tracking-tight text-[#9B1B1B] block mb-6">02</span>
<h3 className="text-2xl md:text-3xl leading-[1.2] font-normal tracking-tight mb-4 text-[#222222]">Partner-Led Execution</h3>
<p className="text-base leading-[1.6] font-light text-[#555555]">
                        The same partner directs your search from the initial briefing to the final offer. Zero hand-offs to junior researchers or associates.
                    </p>
</div>

<div className="p-10 hairline-r hairline-b bg-[#FFFFFF] hover:shadow-sm transition-shadow duration-500">
<span className="text-2xl leading-[1.2] font-light tracking-tight text-[#9B1B1B] block mb-6">03</span>
<h3 className="text-2xl md:text-3xl leading-[1.2] font-normal tracking-tight mb-4 text-[#222222]">Institutional Quality</h3>
<p className="text-base leading-[1.6] font-light text-[#555555]">
                        We apply rigorous, Wall Street-level assessment frameworks to a frontier market, ensuring candidates possess both innovation capacity and risk management pedigree.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#FFFFFF] hairline-b">
<div className="max-w-[88rem] mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

<div className="flex flex-col justify-center">
<span className="text-xs leading-[1.4] font-medium overline-style text-[#9B1B1B] block mb-6">The Methodology</span>
<h2 className="text-4xl md:text-5xl leading-[1.2] font-normal tracking-tight text-[#222222] mb-8">
                        Precision engineering for human capital.
                    </h2>
<p className="text-base leading-[1.6] font-light text-[#555555] mb-12">
                        We don't rely on algorithms or passive databases. Every mandate is a bespoke intelligence operation designed to extract the top 1% of passive talent from tier-one institutions.
                    </p>
<div className="space-y-8 hairline-t pt-8">
<div className="flex gap-6">
<div className="w-1 h-full bg-[#9B1B1B] mt-2"></div>
<div>
<h4 className="text-2xl md:text-3xl leading-[1.2] font-normal tracking-tight text-[#222222] mb-2">Market Mapping</h4>
<p className="text-base leading-[1.6] font-light text-[#555555]">Exhaustive landscape analysis before a single outreach is made.</p>
</div>
</div>
<div className="flex gap-6">
<div className="w-1 h-full bg-[#EAE6DF] mt-2"></div>
<div>
<h4 className="text-2xl md:text-3xl leading-[1.2] font-normal tracking-tight text-[#222222] mb-2">Architectural Fit</h4>
<p className="text-base leading-[1.6] font-light text-[#555555]">Evaluating candidates not just for technical capability, but structural alignment with your firm's DNA.</p>
</div>
</div>
</div>
</div>

<div className="bg-[#F9F6F0] p-12 flex flex-col justify-center items-center text-center hairline-all btn-sharp min-h-[500px]">
<div className="space-y-4">
<div className="text-6xl md:text-7xl leading-[1.1] tracking-tighter font-normal text-[#222222] tabular-nums">97<span className="text-[#9B1B1B]">%</span></div>
<div className="text-xs leading-[1.4] font-medium overline-style text-[#555555]">Offer Acceptance Rate</div>
</div>
<div className="w-full h-px bg-[#EAE6DF] my-12 max-w-xs mx-auto"></div>
<div className="space-y-4">
<div className="text-6xl md:text-7xl leading-[1.1] tracking-tighter font-normal text-[#222222] tabular-nums">100<span className="text-[#9B1B1B]">%</span></div>
<div className="text-xs leading-[1.4] font-medium overline-style text-[#555555]">Search Completion</div>
</div>
</div>
</div>
</div>
</section>

<section className="section-container pt-32 pb-32 bg-[#F9F6F0]">
<div className="max-w-[88rem] mx-auto px-6 lg:px-12 text-center max-w-3xl">
<span className="text-xs leading-[1.4] font-medium overline-style text-[#9B1B1B] block mb-6">Confidential Advisory</span>
<h2 className="text-4xl md:text-5xl leading-[1.2] font-normal tracking-tight text-[#222222] mb-8">
                Ready to secure tier-one leadership?
            </h2>
<p className="text-base leading-[1.6] font-light text-[#555555] mb-12">
                Engage directly with a partner to discuss your organizational architecture and current mandates. Discretion is absolute.
            </p>
<a className="btn-sharp inline-flex items-center justify-center bg-[#9B1B1B] text-[#FFFFFF] px-10 py-5 text-xs leading-[1.4] font-medium overline-style hover:bg-[#7A1515]" href="#">
                Schedule a Briefing
            </a>
</div>
</section>

<footer className="bg-[#FFFFFF] hairline-t pt-24 pb-12">
<div className="max-w-[88rem] mx-auto px-6 lg:px-12">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-12 mb-24">
<div className="col-span-2 lg:col-span-5 flex flex-col items-start pr-12">
<a className="mb-8 block" href="#">
<span className="text-2xl leading-[1.2] tracking-tight font-normal text-[#222222]">Crossbridge Executive</span>
</a>
<p className="text-xs leading-[1.4] text-[#555555] font-light max-w-sm mb-10">
                        Retained executive search for the institutional side of digital assets. Quality institutional logic meets specialized rebellion.
                    </p>
<div className="flex items-center gap-5">
<a className="text-[#222222] hover:text-[#9B1B1B] transition-colors" href="#">
<iconify-icon className="text-xl" icon="ri:linkedin-fill"></iconify-icon>
</a>
<a className="text-[#222222] hover:text-[#9B1B1B] transition-colors" href="#">
<iconify-icon className="text-xl" icon="ri:twitter-x-fill"></iconify-icon>
</a>
</div>
</div>
<div className="col-span-1 lg:col-span-2 space-y-6">
<h4 className="text-xs leading-[1.4] font-medium overline-style text-[#222222] mb-6">Firm</h4>
<ul className="space-y-4 text-xs leading-[1.4] font-light text-[#555555]">
<li><a className="hover:text-[#9B1B1B] transition-colors" href="#">About</a></li>
<li><a className="hover:text-[#9B1B1B] transition-colors" href="#">Partners</a></li>
<li><a className="hover:text-[#9B1B1B] transition-colors" href="#">Track Record</a></li>
</ul>
</div>
<div className="col-span-1 lg:col-span-2 space-y-6">
<h4 className="text-xs leading-[1.4] font-medium overline-style text-[#222222] mb-6">Expertise</h4>
<ul className="space-y-4 text-xs leading-[1.4] font-light text-[#555555]">
<li><a className="hover:text-[#9B1B1B] transition-colors" href="#">Digital Assets</a></li>
<li><a className="hover:text-[#9B1B1B] transition-colors" href="#">Traditional Finance</a></li>
<li><a className="hover:text-[#9B1B1B] transition-colors" href="#">Infrastructure</a></li>
</ul>
</div>
<div className="col-span-2 lg:col-span-3 space-y-6">
<h4 className="text-xs leading-[1.4] font-medium overline-style text-[#222222] mb-6">Contact</h4>
<ul className="space-y-4 text-xs leading-[1.4] font-light text-[#555555]">
<li>New York | London | Dubai</li>
<li><a className="hover:text-[#9B1B1B] transition-colors border-b border-[#EAE6DF] pb-0.5" href="mailto:partners@crossbridge.com">partners@crossbridge.com</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs leading-[1.4] font-medium overline-style text-[#555555] hairline-t pt-10">
<div className="flex items-center gap-8">
<span>© 2024 Crossbridge Executive</span>
</div>
<div className="flex items-center gap-6">
<a className="hover:text-[#222222] transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-[#222222] transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
