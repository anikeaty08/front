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
      

<nav className="fixed top-0 w-full z-50 glass-nav border-b transition-all duration-300 border-indigo-200/50" style={{}}>
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="flex group-hover:scale-105 transition-transform duration-300 text-white w-8 h-8 rounded-lg items-center justify-center">
<svg aria-hidden="true" className="iconify iconify--lucide w-[18px] h-[18px]" data-icon="lucide:bar-chart-2" data-icon-replaced="true" data-width="18" height="18" role="img" strokeWidth="2" style={{width: '18px', height: '18px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M5 21v-6m7 6V3m7 18V9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<span className="text-lg font-medium tracking-tight text-indigo-950" style={{maskImage: 'linear-gradient(160deg, transparent, black 0%, black 100%, transparent)'}}>P&amp;PH Digital Growth Solutions</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium transition-colors text-indigo-600 hover:text-indigo-900" href="#about" style={{}}>About</a>
<a className="text-sm font-medium transition-colors text-indigo-600 hover:text-indigo-900" href="#services" style={{}}>Services</a>
<a className="text-sm font-medium transition-colors text-indigo-600 hover:text-indigo-900" href="#process" style={{}}>Process</a>
<a className="text-sm font-medium transition-colors text-indigo-600 hover:text-indigo-900" href="#blogs" style={{}}>Insights</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium bg-clip-text from-[#f68712] to-[#f6901a] to-[#f6011a] to-[#f60d1a] to-[#f68701] to-[#f68712] text-transparent from-[#0282f6]/10 to-white/0 to-orange-400 to-[#fb8b13] from-[#18923c] to-[#d4740c] from-[#f6923c] to-[#a25707] from-[#f60d3c] to-[#ff901a] from-[#f6873c] bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] from-[#f68701] via-[#f68712] hover:text-indigo-600" href="#contact" style={{}}>Log In</a>
<a className="flex items-center gap-2 transition-all hover:shadow-md text-sm font-medium text-white bg-[#f68712] rounded-lg px-4 py-2 shadow-sm hover:bg-indigo-800" href="#book" style={{}}>
<span className="">Book Your Appointment</span>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path className="" d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
</nav>

<section className="md:pt-48 md:pb-32 overflow-hidden subtle-grid pt-32 pb-20 relative">
<div className="text-center max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border shadow-sm mb-8 animate-fade-in-up border-indigo-950" style={{}}>
<span className="flex h-2 w-2 rounded-full bg-cyan-500" style={{}}></span>
<span className="text-xs font-medium uppercase tracking-wide text-indigo-600" style={{}}>Now accepting new clients for Q4</span>
</div>
<h1 className="md:text-7xl leading-[1.1] bg-clip-text text-5xl font-semibold text-transparent tracking-tight from-[#f68712] to-[#f6901a] to-[#f6011a] to-[#f60d1a] to-[#f68701] to-[#f68712] from-[#0282f6]/10 to-white/0 to-orange-400 to-[#fb8b13] from-[#18923c] to-[#d4740c] from-[#f6923c] to-[#a25707] from-[#f60d3c] to-[#ff901a] from-[#f6873c] bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] from-[#f68701] via-[#f68712] mb-6" style={{}}>Stop guessing.<br/> Start growing with
      <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#f68712] to-[#f68712] to-[#f6901a] to-[#f6011a] to-[#f60d1a] to-[#f68701] from-[#0282f6]/10 to-white/0 to-orange-400 to-[#fb8b13] from-[#18923c] to-[#d4740c] from-[#f6923c] to-[#a25707] from-[#f60d3c] to-[#ff901a] from-[#f6873c] bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] from-[#f68701] via-[#f68712]" style={{}}>data-driven strategy.</span>
</h1>
<p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light text-indigo-950" style={{}}>
      We help ambitious businesses scale through measurable digital marketing. No vanity metrics, just revenue-focused
      growth for startups and enterprises.
    </p>
<div className="flex flex-col md:flex-row gap-4 gap-x-4 gap-y-4 items-center justify-center">
<a className="md:w-auto transition-all flex items-center justify-center gap-2 font-medium text-white bg-[#f68712] w-full rounded-lg px-8 py-3.5 shadow-lg hover:bg-indigo-800 shadow-indigo-200" href="#book" style={{}}>
        Book Strategy Call
        <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:calendar" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M8 2v4m8-4v4"></path>
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M3 10h18"></path>
</g>
</svg>
</a>
<a className="md:w-auto transition-all flex items-center justify-center gap-2 bg-clip-text font-medium text-transparent from-[#f68712] to-[#f6901a] to-[#f6011a] to-[#f60d1a] to-[#f68701] to-[#f68712] from-[#0282f6]/10 to-white/0 to-orange-400 to-[#fb8b13] from-[#18923c] to-[#d4740c] from-[#f6923c] to-[#a25707] from-[#f60d3c] to-[#ff901a] from-[#f6873c] bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] from-[#f68701] via-[#f68712] w-full border rounded-lg pt-3.5 pr-8 pb-3.5 pl-8 hover:bg-indigo-50 border-indigo-950" href="#services" style={{}}>Explore Services</a>
</div>

<div className="border-t mt-20 pt-10 border-indigo-200/60" style={{}}>
<p className="text-sm mb-6 font-medium text-indigo-400" style={{}}>TRUSTED BY INNOVATIVE TEAMS</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale">

<span className="text-xl font-semibold tracking-tighter text-indigo-800" style={{}}>ACME<span className="font-light">CORP</span></span>
<span className="text-xl font-bold tracking-tight text-indigo-800" style={{}}>inter<span className="text-indigo-400" style={{}}>sect</span></span>
<span className="text-xl font-medium tracking-tight text-indigo-800" style={{}}>Stratos</span>
<span className="text-xl font-semibold tracking-tighter italic text-indigo-800" style={{}}>VANTAGE</span>
<span className="text-xl font-bold tracking-tight text-indigo-800" style={{}}>Poly<span className="text-indigo-400" style={{}}>math</span></span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-indigo-100" id="about" style={{}}>
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 bg-clip-text from-[#f68712] to-[#f6901a] to-[#f6011a] to-[#f60d1a] to-[#f68701] to-[#f68712] text-transparent from-[#0282f6]/10 to-white/0 to-orange-400 to-[#fb8b13] from-[#18923c] to-[#d4740c] from-[#f6923c] to-[#a25707] from-[#f60d3c] to-[#ff901a] from-[#f6873c] bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] from-[#f68701] via-[#f68712]" style={{}}>
                        Marketing tailored for <br/>measurable ROI.
                    </h2>
<p className="mb-6 leading-relaxed text-indigo-950" style={{}}>
                        We don't believe in "set it and forget it." We are a team of strategists, not just button pushers. Our mission is to bridge the gap between creative marketing and hard data.
                    </p>
<div className="space-y-6 mt-8">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full border flex items-center justify-center flex-shrink-0 bg-indigo-50 border-indigo-100" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide bg-clip-text from-[#f68712] to-[#f6901a] to-[#f6011a] to-[#f60d1a] to-[#f68701] to-[#f68712] text-transparent from-[#0282f6]/10 to-white/0 to-orange-400 to-[#fb8b13] from-[#18923c] to-[#d4740c] from-[#f6923c] to-[#a25707] from-[#f60d3c] to-[#ff901a] from-[#f6873c] bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] from-[#f68701] via-[#f68712]" data-icon="lucide:target" data-width="20" height="20" role="img" style={{}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></g></svg>
</div>
<div>
<h3 className="text-base font-medium mb-1 bg-clip-text from-[#f68712] to-[#f6901a] to-[#f6011a] to-[#f60d1a] to-[#f68701] to-[#f68712] text-transparent from-[#0282f6]/10 to-white/0 to-orange-400 to-[#fb8b13] from-[#18923c] to-[#d4740c] from-[#f6923c] to-[#a25707] from-[#f60d3c] to-[#ff901a] from-[#f6873c] bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] from-[#f68701] via-[#f68712]" style={{}}>Outcome Focused</h3>
<p className="text-sm text-indigo-950" style={{}}>We prioritize leads and revenue over likes and impressions.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full border flex items-center justify-center flex-shrink-0 bg-indigo-50 border-indigo-100" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide bg-clip-text from-[#f68712] to-[#f6901a] to-[#f6011a] to-[#f60d1a] to-[#f68701] to-[#f68712] text-transparent from-[#0282f6]/10 to-white/0 to-orange-400 to-[#fb8b13] from-[#18923c] to-[#d4740c] from-[#f6923c] to-[#a25707] from-[#f60d3c] to-[#ff901a] from-[#f6873c] bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] from-[#f68701] via-[#f68712]" data-icon="lucide:search" data-width="20" height="20" role="img" style={{}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m21 21l-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></g></svg>
</div>
<div>
<h3 className="text-base font-medium mb-1 bg-clip-text from-[#f68712] to-[#f6901a] to-[#f6011a] to-[#f60d1a] to-[#f68701] to-[#f68712] text-transparent from-[#0282f6]/10 to-white/0 to-orange-400 to-[#fb8b13] from-[#18923c] to-[#d4740c] from-[#f6923c] to-[#a25707] from-[#f60d3c] to-[#ff901a] from-[#f6873c] bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] from-[#f68701] via-[#f68712]" style={{}}>Radical Transparency</h3>
<p className="text-sm text-indigo-950" style={{}}>Real-time dashboards. No hidden fees. You own your data.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full border flex items-center justify-center flex-shrink-0 bg-indigo-50 border-indigo-100" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide bg-clip-text from-[#f68712] to-[#f6901a] to-[#f6011a] to-[#f60d1a] to-[#f68701] to-[#f68712] text-transparent from-[#0282f6]/10 to-white/0 to-orange-400 to-[#fb8b13] from-[#18923c] to-[#d4740c] from-[#f6923c] to-[#a25707] from-[#f60d3c] to-[#ff901a] from-[#f6873c] bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] from-[#f68701] via-[#f68712]" data-icon="lucide:zap" data-width="20" height="20" role="img" style={{}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="">
<h3 className="text-base font-medium mb-1 bg-clip-text from-[#f68712] to-[#f6901a] to-[#f6011a] to-[#f60d1a] to-[#f68701] to-[#f68712] text-transparent from-[#0282f6]/10 to-white/0 to-orange-400 to-[#fb8b13] from-[#18923c] to-[#d4740c] from-[#f6923c] to-[#a25707] from-[#f60d3c] to-[#ff901a] from-[#f6873c] bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] from-[#f68701] via-[#f68712]" style={{}}>Agile Execution</h3>
<p className="text-sm text-indigo-950" style={{}}>We test, iterate, and optimize faster than traditional agencies.</p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="aspect-square rounded-2xl border p-8 flex flex-col justify-between shadow-sm bg-indigo-50 border-indigo-950" style={{}}>

<div className="space-y-4">
<div className="flex justify-between items-center pb-4 border-b border-indigo-950" style={{}}>
<span className="text-sm font-medium bg-clip-text from-[#f68712] to-[#f6901a] to-[#f6011a] to-[#f60d1a] to-[#f68701] to-[#f68712] text-transparent from-[#0282f6]/10 to-white/0 to-orange-400 to-[#fb8b13] from-[#18923c] to-[#d4740c] from-[#f6923c] to-[#a25707] from-[#f60d3c] to-[#ff901a] from-[#f6873c] bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] from-[#f68701] via-[#f68712]" style={{}}>Conversion Rate</span>
<span className="text-xs px-2 py-1 rounded-full text-indigo-950 bg-cyan-50" style={{}}>+12.5%</span>
</div>
<div className="h-32 w-full flex items-end gap-2">
<div className="w-full rounded-t-sm h-[40%] bg-indigo-200" style={{}}></div>
<div className="w-full rounded-t-sm h-[60%] bg-indigo-200" style={{}}></div>
<div className="w-full rounded-t-sm h-[50%] bg-indigo-200" style={{}}></div>
<div className="w-full rounded-t-sm h-[75%] bg-indigo-200" style={{}}></div>
<div className="w-full rounded-t-sm h-[90%] shadow-lg bg-indigo-900 shadow-indigo-900/20" style={{}}></div>
</div>
</div>
<div className="bg-white p-4 rounded-xl border shadow-sm border-indigo-100" style={{}}>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-yellow-50 flex items-center justify-center text-yellow-600" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:trending-up" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 7h6v6"></path><path d="m22 7l-8.5 8.5l-5-5L2 17"></path></g></svg>
</div>
<div>
<div className="text-xs text-indigo-950" style={{}}>Total Leads Generated</div>
<div className="text-lg font-semibold tracking-tight bg-clip-text from-[#f68712] to-[#f6901a] to-[#f6011a] to-[#f60d1a] to-[#f68701] to-[#f68712] text-transparent from-[#0282f6]/10 to-white/0 to-orange-400 to-[#fb8b13] from-[#18923c] to-[#d4740c] from-[#f6923c] to-[#a25707] from-[#f60d3c] to-[#ff901a] from-[#f6873c] bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] from-[#f68701] via-[#f68712]" style={{}}>1,248</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="pt-24 pb-24 bg-indigo-50/50" id="services" style={{}}>
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 bg-clip-text from-[#f68712] to-[#f6901a] to-[#f6011a] to-[#f60d1a] to-[#f68701] to-[#f68712] text-transparent from-[#0282f6]/10 to-white/0 to-orange-400 to-[#fb8b13] from-[#18923c] to-[#d4740c] from-[#f6923c] to-[#a25707] from-[#f60d3c] to-[#ff901a] from-[#f6873c] bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] from-[#f68701] via-[#f68712]" style={{}}>Holistic Digital Services</h2>
<p className="text-indigo-950" style={{}}>A unified approach to digital dominance. We don't just run ads; we build ecosystems.</p>
</div>
<a className="text-sm font-medium border-b pb-0.5 transition-colors self-start bg-clip-text from-[#f68712] to-[#f6901a] to-[#f6011a] to-[#f60d1a] to-[#f68701] to-[#f68712] text-transparent from-[#0282f6]/10 to-white/0 to-orange-400 to-[#fb8b13] from-[#18923c] to-[#d4740c] from-[#f6923c] to-[#a25707] from-[#f60d3c] to-[#ff901a] from-[#f6873c] bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] from-[#f68701] via-[#f68712] border-indigo-900 hover:text-indigo-600 hover:border-indigo-600" href="#book" style={{}}>Get a Custom Strategy →</a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-white p-8 rounded-2xl border hover:shadow-xl transition-all duration-300 hover:border-indigo-300 hover:shadow-indigo-200/50 border-indigo-950" style={{}}>
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 group-hover:text-white transition-colors bg-indigo-50 group-hover:bg-indigo-900" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:search" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m21 21l-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></g></svg>
</div>
<h3 className="text-lg font-medium mb-2 bg-clip-text from-[#f68712] to-[#f6901a] to-[#f6011a] to-[#f60d1a] to-[#f68701] to-[#f68712] text-transparent from-[#0282f6]/10 to-white/0 to-orange-400 to-[#fb8b13] from-[#18923c] to-[#d4740c] from-[#f6923c] to-[#a25707] from-[#f60d3c] to-[#ff901a] from-[#f6873c] bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] from-[#f68701] via-[#f68712]" style={{}}>Search Engine Optimization</h3>
<p className="text-sm leading-relaxed mb-6 text-indigo-950" style={{}}>Long-term organic visibility through technical audits, content optimization, and authority building.</p>
<ul className="space-y-2 mb-6">
<li className="text-xs flex items-center gap-2 text-indigo-950" style={{}}><svg aria-hidden="true" className="iconify iconify--lucide text-indigo-950" data-icon="lucide:check" data-width="12" height="12" role="img" style={{}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Technical &amp; On-Page</li>
<li className="text-xs flex items-center gap-2 text-indigo-950" style={{}}><svg aria-hidden="true" className="iconify iconify--lucide text-indigo-950" data-icon="lucide:check" data-width="12" height="12" role="img" style={{}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Content Strategy</li>
</ul>
<a className="text-xs font-medium flex items-center gap-1 group-hover:gap-2 transition-all bg-clip-text from-[#f68712] to-[#f6901a] to-[#f6011a] to-[#f60d1a] to-[#f68701] to-[#f68712] text-transparent from-[#0282f6]/10 to-white/0 to-orange-400 to-[#fb8b13] from-[#18923c] to-[#d4740c] from-[#f6923c] to-[#a25707] from-[#f60d3c] to-[#ff901a] from-[#f6873c] bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] from-[#f68701] via-[#f68712]" href="#" style={{}}>Learn more <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
</div>

<div className="group bg-white p-8 rounded-2xl border hover:shadow-xl transition-all duration-300 hover:border-indigo-300 hover:shadow-indigo-200/50 border-indigo-950" style={{}}>
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 group-hover:text-white transition-colors bg-indigo-50 group-hover:bg-indigo-900" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:mouse-pointer-2" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-medium mb-2 bg-clip-text from-[#f68712] to-[#f6901a] to-[#f6011a] to-[#f60d1a] to-[#f68701] to-[#f68712] text-transparent from-[#0282f6]/10 to-white/0 to-orange-400 to-[#fb8b13] from-[#18923c] to-[#d4740c] from-[#f6923c] to-[#a25707] from-[#f60d3c] to-[#ff901a] from-[#f6873c] bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] from-[#f68701] via-[#f68712]" style={{}}>PPC Advertising</h3>
<p className="text-sm leading-relaxed mb-6 text-indigo-950" style={{}}>High-intent traffic acquisition via Google Ads and Meta Ads. Optimized for CPA and ROAS.</p>
<ul className="space-y-2 mb-6">
<li className="text-xs flex items-center gap-2 text-indigo-950" style={{}}><svg aria-hidden="true" className="iconify iconify--lucide text-indigo-950" data-icon="lucide:check" data-width="12" height="12" role="img" style={{}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Google &amp; Meta Ads</li>
<li className="text-xs flex items-center gap-2 text-indigo-950" style={{}}><svg aria-hidden="true" className="iconify iconify--lucide text-indigo-950" data-icon="lucide:check" data-width="12" height="12" role="img" style={{}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Retargeting Funnels</li>
</ul>
<a className="text-xs font-medium flex items-center gap-1 group-hover:gap-2 transition-all bg-clip-text from-[#f68712] to-[#f6901a] to-[#f6011a] to-[#f60d1a] to-[#f68701] to-[#f68712] text-transparent from-[#0282f6]/10 to-white/0 to-orange-400 to-[#fb8b13] from-[#18923c] to-[#d4740c] from-[#f6923c] to-[#a25707] from-[#f60d3c] to-[#ff901a] from-[#f6873c] bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] from-[#f68701] via-[#f68712]" href="#" style={{}}>Learn more <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
</div>

<div className="group bg-white p-8 rounded-2xl border hover:shadow-xl transition-all duration-300 hover:border-indigo-300 hover:shadow-indigo-200/50 border-indigo-950" style={{}}>
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 group-hover:text-white transition-colors bg-indigo-50 group-hover:bg-indigo-900" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:smartphone" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></g></svg>
</div>
<h3 className="text-lg font-medium mb-2 bg-clip-text from-[#f68712] to-[#f6901a] to-[#f6011a] to-[#f60d1a] to-[#f68701] to-[#f68712] text-transparent from-[#0282f6]/10 to-white/0 to-orange-400 to-[#fb8b13] from-[#18923c] to-[#d4740c] from-[#f6923c] to-[#a25707] from-[#f60d3c] to-[#ff901a] from-[#f6873c] bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] from-[#f68701] via-[#f68712]" style={{}}>Social Media Marketing</h3>
<p className="text-sm leading-relaxed mb-6 text-indigo-950" style={{}}>Brand building and community engagement that turns followers into loyal customers.</p>
<ul className="space-y-2 mb-6">
<li className="text-xs flex items-center gap-2 text-indigo-950" style={{}}><svg aria-hidden="true" className="iconify iconify--lucide text-indigo-950" data-icon="lucide:check" data-width="12" height="12" role="img" style={{}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Strategy &amp; Creation</li>
<li className="text-xs flex items-center gap-2 text-indigo-950" style={{}}><svg aria-hidden="true" className="iconify iconify--lucide text-indigo-950" data-icon="lucide:check" data-width="12" height="12" role="img" style={{}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Community Mgmt</li>
</ul>
<a className="text-xs font-medium flex items-center gap-1 group-hover:gap-2 transition-all bg-clip-text from-[#f68712] to-[#f6901a] to-[#f6011a] to-[#f60d1a] to-[#f68701] to-[#f68712] text-transparent from-[#0282f6]/10 to-white/0 to-orange-400 to-[#fb8b13] from-[#18923c] to-[#d4740c] from-[#f6923c] to-[#a25707] from-[#f60d3c] to-[#ff901a] from-[#f6873c] bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] from-[#f68701] via-[#f68712]" href="#" style={{}}>Learn more <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
</div>

<div className="group bg-white p-8 rounded-2xl border hover:shadow-xl transition-all duration-300 hover:border-indigo-300 hover:shadow-indigo-200/50 border-indigo-950" style={{}}>
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 group-hover:text-white transition-colors bg-indigo-50 group-hover:bg-indigo-900" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:pen-tool" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="m18 13l-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18M2.3 2.3l7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></g></svg>
</div>
<h3 className="text-lg font-medium mb-2 bg-clip-text from-[#f68712] to-[#f6901a] to-[#f6011a] to-[#f60d1a] to-[#f68701] to-[#f68712] text-transparent from-[#0282f6]/10 to-white/0 to-orange-400 to-[#fb8b13] from-[#18923c] to-[#d4740c] from-[#f6923c] to-[#a25707] from-[#f60d3c] to-[#ff901a] from-[#f6873c] bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] from-[#f68701] via-[#f68712]" style={{}}>Content Marketing</h3>
<p className="text-sm leading-relaxed mb-6 text-indigo-950" style={{}}>Authority-building content assets including blogs, whitepapers, and landing page copy.</p>
<ul className="space-y-2 mb-6">
<li className="text-xs flex items-center gap-2 text-indigo-950" style={{}}><svg aria-hidden="true" className="iconify iconify--lucide text-indigo-950" data-icon="lucide:check" data-width="12" height="12" role="img" style={{}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Copywriting</li>
<li className="text-xs flex items-center gap-2 text-indigo-950" style={{}}><svg aria-hidden="true" className="iconify iconify--lucide text-indigo-950" data-icon="lucide:check" data-width="12" height="12" role="img" style={{}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Lead Magnets</li>
</ul>
<a className="text-xs font-medium flex items-center gap-1 group-hover:gap-2 transition-all bg-clip-text from-[#f68712] to-[#f6901a] to-[#f6011a] to-[#f60d1a] to-[#f68701] to-[#f68712] text-transparent from-[#0282f6]/10 to-white/0 to-orange-400 to-[#fb8b13] from-[#18923c] to-[#d4740c] from-[#f6923c] to-[#a25707] from-[#f60d3c] to-[#ff901a] from-[#f6873c] bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] from-[#f68701] via-[#f68712]" href="#" style={{}}>Learn more <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
</div>

<div className="group bg-white p-8 rounded-2xl border hover:shadow-xl transition-all duration-300 hover:border-indigo-300 hover:shadow-indigo-200/50 border-indigo-950" style={{}}>
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 group-hover:text-white transition-colors bg-indigo-50 group-hover:bg-indigo-900" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:mail" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
</div>
<h3 className="text-lg font-medium mb-2 bg-clip-text from-[#f68712] to-[#f6901a] to-[#f6011a] to-[#f60d1a] to-[#f68701] to-[#f68712] text-transparent from-[#0282f6]/10 to-white/0 to-orange-400 to-[#fb8b13] from-[#18923c] to-[#d4740c] from-[#f6923c] to-[#a25707] from-[#f60d3c] to-[#ff901a] from-[#f6873c] bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] from-[#f68701] via-[#f68712]" style={{}}>Email &amp; Automation</h3>
<p className="text-sm leading-relaxed mb-6 text-indigo-950" style={{}}>Nurture leads through the buyer's journey with automated flows and personalized campaigns.</p>
<ul className="space-y-2 mb-6">
<li className="text-xs flex items-center gap-2 text-indigo-950" style={{}}><svg aria-hidden="true" className="iconify iconify--lucide text-indigo-950" data-icon="lucide:check" data-width="12" height="12" role="img" style={{}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> CRM Integration</li>
<li className="text-xs flex items-center gap-2 text-indigo-950" style={{}}><svg aria-hidden="true" className="iconify iconify--lucide text-indigo-950" data-icon="lucide:check" data-width="12" height="12" role="img" style={{}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Drip Campaigns</li>
</ul>
<a className="text-xs font-medium flex items-center gap-1 group-hover:gap-2 transition-all bg-clip-text from-[#f68712] to-[#f6901a] to-[#f6011a] to-[#f60d1a] to-[#f68701] to-[#f68712] text-transparent from-[#0282f6]/10 to-white/0 to-orange-400 to-[#fb8b13] from-[#18923c] to-[#d4740c] from-[#f6923c] to-[#a25707] from-[#f60d3c] to-[#ff901a] from-[#f6873c] bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] from-[#f68701] via-[#f68712]" href="#" style={{}}>Learn more <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
</div>

<div className="group bg-white p-8 rounded-2xl border hover:shadow-xl transition-all duration-300 hover:border-indigo-300 hover:shadow-indigo-200/50 border-indigo-950" style={{}}>
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 group-hover:text-white transition-colors bg-indigo-50 group-hover:bg-indigo-900" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:pie-chart" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></g></svg>
</div>
<h3 className="text-lg font-medium mb-2 bg-clip-text from-[#f68712] to-[#f6901a] to-[#f6011a] to-[#f60d1a] to-[#f68701] to-[#f68712] text-transparent from-[#0282f6]/10 to-white/0 to-orange-400 to-[#fb8b13] from-[#18923c] to-[#d4740c] from-[#f6923c] to-[#a25707] from-[#f60d3c] to-[#ff901a] from-[#f6873c] bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] from-[#f68701] via-[#f68712]" style={{}}>Analytics &amp; Data</h3>
<p className="text-sm leading-relaxed mb-6 text-indigo-950" style={{}}>Turn raw data into actionable business insights. We track every click, conversion, and dollar.</p>
<ul className="space-y-2 mb-6">
<li className="text-xs flex items-center gap-2 text-indigo-950" style={{}}><svg aria-hidden="true" className="iconify iconify--lucide text-indigo-950" data-icon="lucide:check" data-width="12" height="12" role="img" style={{}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Custom Dashboards</li>
<li className="text-xs flex items-center gap-2 text-indigo-950" style={{}}><svg aria-hidden="true" className="iconify iconify--lucide text-indigo-950" data-icon="lucide:check" data-width="12" height="12" role="img" style={{}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Attribution Modeling</li>
</ul>
<a className="text-xs font-medium flex items-center gap-1 group-hover:gap-2 transition-all bg-clip-text from-[#f68712] to-[#f6901a] to-[#f6011a] to-[#f60d1a] to-[#f68701] to-[#f68712] text-transparent from-[#0282f6]/10 to-white/0 to-orange-400 to-[#fb8b13] from-[#18923c] to-[#d4740c] from-[#f6923c] to-[#a25707] from-[#f60d3c] to-[#ff901a] from-[#f6873c] bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] from-[#f68701] via-[#f68712]" href="#" style={{}}>Learn more <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="process" style={{}}>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 bg-clip-text from-[#f68712] to-[#f6901a] to-[#f6011a] to-[#f60d1a] to-[#f68701] to-[#f68712] text-transparent from-[#0282f6]/10 to-white/0 to-orange-400 to-[#fb8b13] from-[#18923c] to-[#d4740c] from-[#f6923c] to-[#a25707] from-[#f60d3c] to-[#ff901a] from-[#f6873c] bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] from-[#f68701] via-[#f68712]" style={{}}>Our Methodology</h2>
<p className="text-indigo-950" style={{}}>A rigorous framework designed to minimize risk and maximize output.</p>
</div>
<div className="relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-px bg-indigo-200" style={{}}></div>
<div className="grid md:grid-cols-4 gap-8">

<div className="relative pt-6">
<div className="absolute -top-3 left-0 md:left-1/2 md:-translate-x-1/2 w-6 h-6 bg-white border-4 rounded-full z-10 border-indigo-900" style={{}}></div>
<div className="text-sm font-semibold mb-2 tracking-wide uppercase text-indigo-400" style={{}}>01</div>
<h3 className="text-lg font-medium mb-2 bg-clip-text from-[#f68712] to-[#f6901a] to-[#f6011a] to-[#f60d1a] to-[#f68701] to-[#f68712] text-transparent from-[#0282f6]/10 to-white/0 to-orange-400 to-[#fb8b13] from-[#18923c] to-[#d4740c] from-[#f6923c] to-[#a25707] from-[#f60d3c] to-[#ff901a] from-[#f6873c] bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] from-[#f68701] via-[#f68712]" style={{}}>Discovery &amp; Audit</h3>
<p className="text-sm text-indigo-950" style={{}}>We analyze your current digital footprint, competitors, and market gaps to establish a baseline.</p>
</div>

<div className="relative pt-6">
<div className="absolute -top-3 left-0 md:left-1/2 md:-translate-x-1/2 w-6 h-6 bg-white border-4 rounded-full z-10 border-indigo-950" style={{}}></div>
<div className="text-sm font-semibold mb-2 tracking-wide uppercase text-indigo-400" style={{}}>02</div>
<h3 className="text-lg font-medium mb-2 bg-clip-text from-[#f68712] to-[#f6901a] to-[#f6011a] to-[#f60d1a] to-[#f68701] to-[#f68712] text-transparent from-[#0282f6]/10 to-white/0 to-orange-400 to-[#fb8b13] from-[#18923c] to-[#d4740c] from-[#f6923c] to-[#a25707] from-[#f60d3c] to-[#ff901a] from-[#f6873c] bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] from-[#f68701] via-[#f68712]" style={{}}>Strategic Roadmap</h3>
<p className="text-sm text-indigo-950" style={{}}>We build a custom 6-12 month growth plan aligned with your specific revenue targets.</p>
</div>

<div className="relative pt-6">
<div className="absolute -top-3 left-0 md:left-1/2 md:-translate-x-1/2 w-6 h-6 bg-white border-4 rounded-full z-10 border-indigo-950" style={{}}></div>
<div className="text-sm font-semibold mb-2 tracking-wide uppercase text-indigo-400" style={{}}>03</div>
<h3 className="text-lg font-medium mb-2 bg-clip-text from-[#f68712] to-[#f6901a] to-[#f6011a] to-[#f60d1a] to-[#f68701] to-[#f68712] text-transparent from-[#0282f6]/10 to-white/0 to-orange-400 to-[#fb8b13] from-[#18923c] to-[#d4740c] from-[#f6923c] to-[#a25707] from-[#f60d3c] to-[#ff901a] from-[#f6873c] bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] from-[#f68701] via-[#f68712]" style={{}}>Execution</h3>
<p className="text-sm text-indigo-950" style={{}}>Our specialists implement campaigns, create content, and deploy technical fixes across channels.</p>
</div>

<div className="relative pt-6">
<div className="absolute -top-3 left-0 md:left-1/2 md:-translate-x-1/2 w-6 h-6 bg-white border-4 rounded-full z-10 border-indigo-950" style={{}}></div>
<div className="text-sm font-semibold mb-2 tracking-wide uppercase text-indigo-400" style={{}}>04</div>
<h3 className="text-lg font-medium mb-2 bg-clip-text from-[#f68712] to-[#f6901a] to-[#f6011a] to-[#f60d1a] to-[#f68701] to-[#f68712] text-transparent from-[#0282f6]/10 to-white/0 to-orange-400 to-[#fb8b13] from-[#18923c] to-[#d4740c] from-[#f6923c] to-[#a25707] from-[#f60d3c] to-[#ff901a] from-[#f6873c] bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] from-[#f68701] via-[#f68712]" style={{}}>Optimization</h3>
<p className="text-sm text-indigo-950" style={{}}>Continuous A/B testing and data analysis to lower acquisition costs and scale results.</p>
</div>
</div>
</div>

<div className="mt-24 pt-10 border-t border-indigo-100" style={{}}>
<p className="text-center text-xs font-medium uppercase tracking-widest mb-8 text-indigo-400" style={{}}>Powering growth with best-in-class tools</p>
<div className="flex flex-wrap justify-center gap-6 md:gap-12 opacity-50 grayscale">
<div className="flex items-center gap-2"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:box" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7l8.7 5l8.7-5M12 22V12"></path></g></svg> Google Analytics</div>
<div className="flex items-center gap-2"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:layers" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></g></svg> SEMRush</div>
<div className="flex items-center gap-2"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:mail" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg> HubSpot</div>
<div className="flex items-center gap-2"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:facebook" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Meta Business</div>
<div className="flex items-center gap-2"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:database" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5v14a9 3 0 0 0 18 0V5"></path><path d="M3 12a9 3 0 0 0 18 0"></path></g></svg> Databox</div>
</div>
</div>
</div>
</section>

<section className="py-24 text-white relative overflow-hidden bg-indigo-900" id="book" style={{}}>

<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l to-transparent opacity-20 pointer-events-none from-indigo-800" style={{}}></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">Ready to scale your revenue?</h2>
<p className="text-lg mb-10 max-w-xl mx-auto text-indigo-400" style={{}}>
                Book a free 30-minute strategy call. We'll audit your current setup and identify 3 immediate growth opportunities. No obligation.
            </p>
<div className="bg-white/5 backdrop-blur-sm p-2 rounded-xl border border-white/10 max-w-md mx-auto flex flex-col sm:flex-row gap-2" style={{}}>
<input className="w-full bg-transparent border-none text-white focus:ring-0 px-4 py-3 text-sm placeholder-indigo-500" placeholder="Enter your work email" style={{}} type="email"/>
<button className="whitespace-nowrap bg-white px-6 py-3 rounded-lg text-sm font-medium transition-colors shadow-lg bg-clip-text from-[#f68712] to-[#f6901a] to-[#f6011a] to-[#f60d1a] to-[#f68701] to-[#f68712] text-transparent from-[#0282f6]/10 to-white/0 to-orange-400 to-[#fb8b13] from-[#18923c] to-[#d4740c] from-[#f6923c] to-[#a25707] from-[#f60d3c] to-[#ff901a] from-[#f6873c] bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] from-[#f68701] via-[#f68712] hover:bg-indigo-100" style={{}}>
                    Book Call
                </button>
</div>
<p className="mt-4 text-xs text-indigo-950" style={{}}>We respect your privacy. Zero spam, ever.</p>
</div>
</section>

<footer className="border-t pt-16 pb-8 bg-indigo-50 border-indigo-950" style={{}}>
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-6 h-6 rounded-md flex items-center justify-center text-white bg-indigo-900" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:bar-chart-2" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6m7 6V3m7 18V9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-base font-medium tracking-tight bg-clip-text from-[#f68712] to-[#f6901a] to-[#f6011a] to-[#f60d1a] to-[#f68701] to-[#f68712] text-transparent from-[#0282f6]/10 to-white/0 to-orange-400 to-[#fb8b13] from-[#18923c] to-[#d4740c] from-[#f6923c] to-[#a25707] from-[#f60d3c] to-[#ff901a] from-[#f6873c] bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] from-[#f68701] via-[#f68712]" style={{}}>GROWTH</span>
</a>
<p className="text-sm mb-6 text-indigo-950" style={{}}>Strategic digital marketing for forward-thinking brands.</p>
<div className="flex gap-4 text-indigo-400" style={{}}>
<a className="transition-colors hover:text-indigo-900" href="#" style={{}}><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:linkedin" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg></a>
<a className="transition-colors hover:text-indigo-900" href="#" style={{}}><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:twitter" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
<a className="transition-colors hover:text-indigo-900" href="#" style={{}}><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:instagram" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg></a>
</div>
</div>
<div>
<h4 className="font-medium mb-4 text-sm bg-clip-text from-[#f68712] to-[#f6901a] to-[#f6011a] to-[#f60d1a] to-[#f68701] to-[#f68712] text-transparent from-[#0282f6]/10 to-white/0 to-orange-400 to-[#fb8b13] from-[#18923c] to-[#d4740c] from-[#f6923c] to-[#a25707] from-[#f60d3c] to-[#ff901a] from-[#f6873c] bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] from-[#f68701] via-[#f68712]" style={{}}>Services</h4>
<ul className="space-y-3 text-sm text-indigo-950" style={{}}>
<li><a className="hover:text-indigo-900" href="#" style={{}}>SEO Strategy</a></li>
<li><a className="hover:text-indigo-900" href="#" style={{}}>PPC Management</a></li>
</ul>
</div>
<div>
<h4 className="font-medium mb-4 text-sm bg-clip-text from-[#f68712] to-[#f6901a] to-[#f6011a] to-[#f60d1a] to-[#f68701] to-[#f68712] text-transparent from-[#0282f6]/10 to-white/0 to-orange-400 to-[#fb8b13] from-[#18923c] to-[#d4740c] from-[#f6923c] to-[#a25707] from-[#f60d3c] to-[#ff901a] from-[#f6873c] bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] from-[#f68701] via-[#f68712]" style={{}}>Company</h4>
<ul className="space-y-3 text-sm text-indigo-950" style={{}}>
<li><a className="hover:text-indigo-900" href="#about" style={{}}>About Us</a></li>
<li><a className="hover:text-indigo-900" href="#case-studies" style={{}}>Case Studies</a></li>
</ul>
</div>
<div>
<h4 className="font-medium mb-4 text-sm bg-clip-text from-[#f68712] to-[#f6901a] to-[#f6011a] to-[#f60d1a] to-[#f68701] to-[#f68712] text-transparent from-[#0282f6]/10 to-white/0 to-orange-400 to-[#fb8b13] from-[#18923c] to-[#d4740c] from-[#f6923c] to-[#a25707] from-[#f60d3c] to-[#ff901a] from-[#f6873c] bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] from-[#f68701] via-[#f68712]" style={{}}>Contact</h4>
<ul className="space-y-3 text-sm text-indigo-950" style={{}}>
<li>hello@growthdigital.com</li>
<li>+1 (555) 123-4567</li>
</ul>
</div>
</div>
<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-indigo-950" style={{}}>
<p className="text-xs text-indigo-400" style={{}}>© 2023 Growth Digital Agency. All rights reserved.</p>
<div className="flex gap-6 text-xs text-indigo-400" style={{}}>
<a className="hover:text-indigo-600" href="#" style={{}}>Privacy Policy</a>
<a className="hover:text-indigo-600" href="#" style={{}}>Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
