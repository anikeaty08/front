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
      

<nav className="fixed top-0 w-full z-50 border-b glass-nav transition-all duration-300 border-black/5">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<span className="font-semibold tracking-tighter text-lg group-hover:opacity-80 transition-opacity text-black">
                    GROWFRAME
                </span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="transition-colors hover:text-black text-sm font-medium text-orange-600" href="#services">Solutions</a>
<a className="text-sm font-medium transition-colors text-orange-600 hover:text-black" href="#process">Methodology</a>
<a className="text-sm font-medium transition-colors text-orange-600 hover:text-black" href="#results">Results</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:flex items-center gap-2 transition-all hover:bg-black/15 text-sm font-medium text-black bg-black/10 border-black/10 border rounded-full pt-2 pr-4 pb-2 pl-4" href="#contact">
                    Start Scaling
                    <svg className="" data-icon-set="lucide" data-lucide="arrow-right" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<button className="md:hidden text-black">
<svg className="" data-icon-set="lucide" data-lucide="menu" height="24" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</nav>

<main className="lg:pt-48 lg:pb-32 overflow-hidden pt-32 pb-20 relative">

<div className="glow-blob w-96 h-96 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-screen bg-amber-400"></div>
<div className="glow-blob w-[500px] h-[500px] top-20 right-0 translate-x-1/3 rounded-full opacity-20 bg-yellow-400"></div>
<div className="z-10 text-center max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="inline-flex animate-fade-in-up text-xs font-medium text-amber-700 bg-amber-500/10 border-amber-500/30 border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center">ALL DIGI-SOLUTIONS UNDER ONE COMMAND</div><div className="flex gap-2 -mt-5 animate-fade-in-up mb-8 gap-x-2 gap-y-2 items-center justify-center">
<svg className="text-orange-600" data-icon-set="lucide" data-lucide="layout-grid" height="15" style={{}} viewbox="0 0 24 24" width="15" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></g></svg>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter mb-8 leading-[1.1] text-black">
                Scale revenue with <br/>
<span className="gradient-text text-amber-500">DIGITAL marketing.</span>
</h1>
<p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light text-orange-600">
                GrowFrame helps ambitious brands navigate the digital landscape. We combine creative strategy with rigorous data analysis to unlock sustainable growth.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 font-medium rounded-full transition-colors flex items-center justify-center gap-2 bg-black text-orange-50 hover:bg-orange-800" href="#contact">
                    Book a Strategy Call
                </a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-transparent border font-medium rounded-full transition-colors flex items-center justify-center gap-2 border-orange-300 text-black hover:bg-orange-100" href="#work">
                    View Case Studies
                </a>
</div>

<div className="mt-24 border-t pt-12 border-black/5">
<p className="text-xs text-orange-500 uppercase tracking-widest mb-8 font-medium">Trusted by forward-thinking companies</p>
<div className="flex flex-wrap hover:grayscale-0 transition-all duration-500 opacity-50 grayscale gap-x-12 gap-y-8 items-center justify-center">

<span className="text-xl font-semibold text-black tracking-tight">SILVERSTONE
ESTATES</span>
<span className="text-xl font-semibold text-black tracking-tight">UNIQUE MAKEOVER'S</span>
<span className="text-xl font-semibold text-black tracking-tight"></span>
</div>
</div>
</div>
</main>

<section className="bg-orange-50 border-black/5 border-t pt-24 pb-24 relative" id="services">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="mb-16 md:flex md:items-end md:justify-between">
<div className="max-w-xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-black">Comprehensive Solutions</h2>
<p className="font-light text-lg text-orange-600">We don't just run ads. We build ecosystems that convert traffic into loyal customers.</p>
</div>
<a className="hidden md:flex items-center gap-2 md:mt-0 hover:text-amber-700 text-sm font-medium text-amber-600 mt-6" href="#">
                    View all services
                    <svg className="" data-icon-set="lucide" data-lucide="arrow-right" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl border transition-all duration-300 relative overflow-hidden bg-orange-100/40 border-black/5 hover:border-black/10 hover:bg-orange-100/60">
<div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
<svg className="text-orange-500" data-icon-set="lucide" data-lucide="arrow-up-right" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center mb-6 text-amber-600">
<svg className="" data-icon-set="lucide" data-lucide="bar-chart-2" height="24" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6m7 6V3m7 18V9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-xl font-medium mb-3 tracking-tight text-black">Performance Marketing</h3>
<p className="text-sm leading-relaxed text-orange-600">Paid social and search campaigns engineered for maximum ROAS using proprietary bidding strategies.</p>
</div>

<div className="group p-8 rounded-2xl border transition-all duration-300 relative overflow-hidden bg-orange-100/40 border-black/5 hover:border-black/10 hover:bg-orange-100/60">
<div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-6 text-green-600">
<svg className="" data-icon-set="lucide" data-lucide="search" height="24" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m21 21l-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></g></svg>
</div>
<h3 className="text-xl font-medium text-black tracking-tight mb-3">VIDEO SHOOTING</h3>
<p className="leading-relaxed text-sm text-orange-600">WE OFFERS AN PROFFESSIONAL SHOOT FROM BUDGET AS LOW AS AN MOVIE TICKET</p>
</div>

<div className="group p-8 rounded-2xl border transition-all duration-300 relative overflow-hidden bg-orange-100/40 border-black/5 hover:border-black/10 hover:bg-orange-100/60">
<div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center mb-6 text-yellow-600">
<svg className="" data-icon-set="lucide" data-lucide="layers" height="24" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></g></svg>
</div>
<h3 className="text-xl font-medium mb-3 tracking-tight text-black">Brand Strategy</h3>
<p className="text-sm leading-relaxed text-orange-600">Positioning, messaging, and visual identity refinement to resonate with your ideal customer profile.</p>
</div>

<div className="group p-8 rounded-2xl border transition-all duration-300 relative overflow-hidden bg-orange-100/40 border-black/5 hover:border-black/10 hover:bg-orange-100/60">
<div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6 text-purple-600">
<svg className="" data-icon-set="lucide" data-lucide="mail" height="24" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
</div>
<h3 className="text-xl font-medium text-black tracking-tight mb-3">VIDEO EDITING</h3>
<p className="leading-relaxed text-sm text-orange-600">WE NOT JUST EDIT BUT ALSO FRAMES AN STORY , WITH GREAT EFFECTS AND QUALITIES </p>
</div>

<div className="group p-8 rounded-2xl border transition-all duration-300 relative overflow-hidden bg-orange-100/40 border-black/5 hover:border-black/10 hover:bg-orange-100/60">
<div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-6 text-orange-600">
<svg className="" data-icon-set="lucide" data-lucide="database" height="24" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5v14a9 3 0 0 0 18 0V5"></path><path d="M3 12a9 3 0 0 0 18 0"></path></g></svg>
</div>
<h3 className="text-xl font-medium text-black tracking-tight mb-3">Analytics &amp; Attribution</h3>
<p className="text-sm leading-relaxed text-orange-600">Crystal clear reporting dashboards that show you exactly where every dollar is going and returning.</p>
</div>

<div className="group p-8 rounded-2xl border transition-all duration-300 relative overflow-hidden bg-orange-100/40 border-black/5 hover:border-black/10 hover:bg-orange-100/60">
<div className="w-12 h-12 bg-pink-500/10 rounded-lg flex items-center justify-center mb-6 text-pink-600">
<svg className="" data-icon-set="lucide" data-lucide="zap" height="24" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-xl font-medium text-black tracking-tight mb-3">PAGE DEVELOPING</h3>
<p className="leading-relaxed text-sm text-orange-600">WE ALSO DEVELOPS PAGE FOR BRANDS , WHERE WE CARE OF EXCLUSIVE CONTENT WITH PERSONAL TOUCH</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-y relative bg-orange-100/20 border-black/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-black/5">
<div className="px-4 py-4">
<div className="text-sm text-orange-500 font-medium">Revenue Generated for Clients</div>
</div>
<div className="px-4 py-4">
<div className="text-sm font-medium text-orange-500">CALL NOW :9537311136</div>
</div>
<div className="px-4 py-4">
<div className="text-4xl md:text-5xl font-semibold tracking-tighter mb-2 text-black">24/7</div>
<div className="text-sm text-orange-500 font-medium">Real-time Dashboard Access</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-black">The Growth Framework</h2>
<p className="max-w-2xl mx-auto text-orange-600">Our four-step methodology ensures consistent, scalable results without the guesswork.</p>
</div>
<div className="grid md:grid-cols-4 gap-8 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent to-transparent z-0 via-black/10"></div>

<div className="relative z-10">
<div className="w-24 h-24 border rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-amber-500/5 bg-orange-50 border-black/10">
<span className="text-2xl font-semibold text-black">01</span>
</div>
<h3 className="text-lg font-medium text-center mb-2 text-black">Audit &amp; Strategy</h3>
<p className="text-sm text-orange-500 text-center leading-relaxed">Deep dive into current performance, competitor landscape, and market gaps.</p>
</div>

<div className="relative z-10">
<div className="w-24 h-24 border rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-amber-500/5 bg-orange-50 border-black/10">
<span className="text-2xl font-semibold text-black">02</span>
</div>
<h3 className="text-lg font-medium text-center mb-2 text-black">Execution</h3>
<p className="text-sm text-orange-500 text-center leading-relaxed">Launching campaigns, creating content assets, and setting up tracking.</p>
</div>

<div className="relative z-10">
<div className="w-24 h-24 border rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-amber-500/5 bg-orange-50 border-black/10">
<span className="text-2xl font-semibold text-black">03</span>
</div>
<h3 className="text-lg font-medium text-center mb-2 text-black">Optimization</h3>
<p className="text-sm text-orange-500 text-center leading-relaxed">Continuous A/B testing and budget reallocation to high-performing channels.</p>
</div>

<div className="relative z-10">
<div className="w-24 h-24 border rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-amber-500/5 bg-orange-50 border-black/10">
<span className="text-2xl font-semibold text-black">04</span>
</div>
<h3 className="text-lg font-medium text-center mb-2 text-black">Scale</h3>
<p className="text-sm text-orange-500 text-center leading-relaxed">Expanding into new markets and channels once profitability is stabilized.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-black/5 bg-orange-100/10">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="mb-8">
<svg className="text-orange-400" data-icon-set="lucide" data-lucide="quote" height="32" style={{}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<blockquote className="text-2xl md:text-3xl font-medium tracking-tight leading-normal mb-8 text-black">
                "GrowFrame completely transformed our acquisition strategy. Within 3 months, our CPA dropped by 40% while volume doubled. They aren't just an agency; they're partners."
            </blockquote>
<div className="flex flex-col items-center">
</div>
</div>
</section>

<section className="overflow-hidden pt-24 pb-24 relative" id="contact">
<div className="max-w-3xl mx-auto px-6 relative z-10">
<div className="bg-gradient-to-b border rounded-3xl p-8 md:p-12 text-center shadow-2xl from-orange-100 to-orange-50 border-black/10">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-black">Ready to accelerate growth?</h2>
<p className="mb-8 max-w-lg mx-auto text-orange-600">Get a free digital audit of your current setup. No commitment, just actionable insights.</p>
<form className="space-y-4 max-w-md mx-auto text-left">
<div className="">
<label className="block text-xs font-medium text-orange-500 mb-1.5 ml-1">Work Email</label>
<input className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-all placeholder:text-orange-700 bg-orange-50 border-orange-200 text-black" placeholder="name@company.com" type="email"/>
</div>
<div className="">
<label className="block text-xs font-medium text-orange-500 mb-1.5 ml-1">Company Website</label>
<input className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-all placeholder:text-orange-700 bg-orange-50 border-orange-200 text-black" placeholder="company.com" type="text"/>
</div>
<div className="pt-2">
<label className="flex items-start gap-3 cursor-pointer group">
<div className="relative flex items-center">
<input className="peer h-4 w-4 appearance-none rounded border checked:bg-amber-600 checked:border-amber-600 focus:outline-none transition-all border-orange-300 bg-orange-100" type="checkbox"/>
<svg className="absolute left-0.5 top-0.5 opacity-0 peer-checked:opacity-100 pointer-events-none text-black" data-icon-set="lucide" data-lucide="check" height="12" style={{}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-xs text-orange-500 select-none group-hover:text-orange-400 transition-colors">I agree to receive communications from GrowFrame Solutions.</span>
</label>
</div>
<button className="w-full font-medium rounded-lg py-3 transition-colors mt-4 flex items-center justify-center gap-2 bg-black text-orange-50 hover:bg-orange-800" type="button">
                        Get Your Free Audit
                    </button>
</form>
</div>
</div>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[600px] h-[400px] blur-[100px] rounded-full pointer-events-none bg-amber-400/10"></div>
</section>

<footer className="border-t py-12 text-sm border-black/5 bg-orange-50">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<a className="font-semibold tracking-tighter text-lg mb-4 block text-black" href="#">GROWFRAME</a>
<p className="text-orange-500 text-xs leading-relaxed max-w-xs">
                        Empowering brands with data-driven marketing strategies for the modern web.
                    </p>
</div>
<div className="">
<h4 className="font-medium mb-4 text-black">Services</h4>
<ul className="space-y-2 text-orange-500">
<li><a className="transition-colors hover:text-orange-700" href="#">Paid Search</a></li>
<li><a className="transition-colors hover:text-orange-700" href="#">Social Media</a></li>
<li className=""><a className="transition-colors hover:text-orange-700" href="#">SEO</a></li>
<li><a className="transition-colors hover:text-orange-700" href="#">Analytics</a></li>
</ul>
</div>
<div className="">
<h4 className="font-medium mb-4 text-black">Company</h4>
<ul className="space-y-2 text-orange-500">
<li className=""><a className="transition-colors hover:text-orange-700" href="#">About</a></li>
<li className=""><a className="transition-colors hover:text-orange-700" href="#">Careers</a></li>
<li className=""><a className="transition-colors hover:text-orange-700" href="#">Blog</a></li>
<li className=""><a className="transition-colors hover:text-orange-700" href="#">Contact</a></li>
</ul>
</div>
<div className="">
<h4 className="font-medium mb-4 text-black">Social</h4>
<div className="flex gap-x-4 gap-y-4">@growframesolutions@gmail.com
contact:9537311136</div>
</div>
</div>
<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-black/5">
<p className="text-xs text-orange-400">© 2025 GrowFrame Solutions. All rights reserved.</p>
<div className="flex gap-6 text-xs text-orange-400">
<a className="hover:text-orange-600" href="#">Privacy Policy</a>
<a className="hover:text-orange-600" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
