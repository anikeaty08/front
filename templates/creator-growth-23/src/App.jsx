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
      

<header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 md:pt-6 md:px-6 pointer-events-none">
<nav className="pointer-events-auto glass flex gap-4 md:gap-10 shadow-black/50 transition-all duration-300 w-full max-w-5xl rounded-full pt-2 pr-2 pb-2 pl-5 shadow-2xl gap-x-4 gap-y-4 items-center justify-between">

<a className="group flex items-center gap-2 shrink-0" href="#">
<span className="md:text-2xl group-hover:text-rose-500 transition-colors text-xl font-medium italic text-white tracking-tight font-serif">Creator Growth Solutions</span>
</a>

<a className="text-xs px-4 py-2 md:px-5 md:py-2.5 rounded-full transition-all duration-300 flex items-center gap-2 font-montserrat font-medium group shadow-md hover:shadow-lg hover:shadow-rose-500/20 bg-white text-black hover:bg-rose-600 hover:text-white shrink-0" href="#book-call">
        Get Started
        <svg className="lucide lucide-arrow-right w-3 h-3 transition-transform group-hover:translate-x-0.5 hidden sm:block" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</nav>
</header>
<main className="md:pt-12 md:pl-2 md:pr-2 max-w-7xl mr-auto ml-auto pt-28 pr-4 pb-4 pl-4">

<section className="shadow-black/20 overflow-hidden md:rounded-[2.5rem] md:p-12 md:mb-16 lg:pt-10 text-center bg-[#0A0A0A] border-white/5 border rounded-[2rem] mb-12 pt-12 pr-6 pb-12 pl-6 relative shadow-2xl">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:3rem_3rem] md:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-30">
</div>
<div className="z-10 flex flex-col max-w-5xl mr-auto ml-auto relative items-center">

<div className="animate-fade-up text-[10px] uppercase md:mb-8 font-semibold text-rose-400 tracking-widest font-montserrat bg-rose-950/30 w-fit border-rose-900/50 border rounded-full mb-6 pt-1 pr-3 pb-1 pl-3">
          Attention CREATORS &amp; PERSONAL BRANDS:</div>

<h1 className="animate-fade-up delay-100 sm:text-5xl md:text-7xl lg:text-[5rem] leading-[1.1] md:leading-[0.95] md:mb-8 text-4xl font-medium text-white tracking-tighter font-serif mb-6">We'll <span className="bg-clip-text italic text-transparent bg-gradient-to-r from-rose-500 to-orange-400 pr-2">Build You A Trust Funnel That Books 10+ High Ticket Sales Calls</span> in <br className="hidden md:block"/> 90 Days or <span className="md:border-b-4 border-rose-500/30 border-b-2">
                You Don't Pay.
              </span></h1>

<p className="animate-fade-up delay-200 md:text-xl leading-relaxed md:mb-12 text-base font-light text-gray-400 max-w-2xl mb-8 pr-2 pl-2">
          You don't need someone to gamble six figures on ads. You need a system that turns the audience you already have
          into
          consistent, qualified buyers - using your content, your voice, and your trust.</p>

<div className="animate-fade-up delay-300 relative w-full max-w-4xl mx-auto rounded-xl md:rounded-[2rem] border-2 md:border-4 shadow-2xl overflow-hidden mb-8 md:mb-12 ring-1 bg-black border-white/10 shadow-black ring-white/5">
<div style={{position: 'relative', paddingBottom: '56.25%', height: '0'}}>
<iframe allowfullscreen="" frameborder="0" mozallowfullscreen="" src="https://www.loom.com/embed/0a3d018f0214460d91d3800f86d45c35" style={{position: 'absolute', top: '0', left: '0', width: '100%', height: '100%'}} webkitallowfullscreen=""></iframe>
</div>
</div>

<div className="animate-fade-up delay-500 flex flex-col sm:flex-row gap-3 md:gap-4 w-full mb-6 gap-x-3 gap-y-3 items-center justify-center">
<a className="sm:w-auto md:py-4 hover:shadow-xl hover:shadow-rose-500/20 transition-all duration-300 flex items-center justify-center gap-2 group hover:bg-rose-600 hover:text-white text-sm font-medium text-black font-montserrat bg-white w-full rounded-full pt-3.5 pr-8 pb-3.5 pl-8" href="#book-call">Book
            Your Free Strategy Call</a>
</div>

<p className="animate-fade-up delay-500 text-[10px] md:text-xs font-montserrat text-gray-500">
          Book a Free Strategy Session. No credit card required.
        </p>
</div>
</section>

<section className="py-12 md:py-20 max-w-6xl mx-auto">
<h2 className="text-3xl md:text-5xl text-center mb-10 md:mb-16 tracking-tight font-serif font-medium text-white px-4">
        Are You Currently Struggling With...
      </h2>
<div className="grid md:grid-cols-3 gap-6 md:gap-8">

<div className="md:p-8 md:rounded-3xl hover:shadow-2xl hover:shadow-rose-900/10 transition-all duration-300 bg-gradient-to-br from-[#121212] to-[#0a0a0a] rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 shadow-lg shadow-black" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(244,63,94,0.3), rgba(244,63,94,0.05))', '--border-radius-before': '1.5rem'}}>
<div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-5 md:mb-6 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<svg className="lucide lucide-trending-down w-5 h-5 md:w-6 md:h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 17h6v-6"></path>
<path d="m22 17-8.5-8.5-5 5L2 7"></path>
</svg>
</div>
<h3 className="md:text-xl md:mb-3 text-lg font-semibold text-white font-montserrat mb-2">Feast-or-Famine Revenue</h3>
<p className="text-gray-400 font-light leading-relaxed text-sm">
            You never know where your next client is coming from, creating
            revenue rollercoasters that stall growth.
          </p>
</div>

<div className="md:p-8 md:rounded-3xl hover:shadow-2xl hover:shadow-rose-900/10 transition-all duration-300 bg-gradient-to-br from-[#121212] to-[#0a0a0a] rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 shadow-lg shadow-black" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(244,63,94,0.3), rgba(244,63,94,0.05))', '--border-radius-before': '1.5rem'}}>
<div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-5 md:mb-6 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<svg className="lucide lucide-users w-5 h-5 md:w-6 md:h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<circle cx="9" cy="7" r="4"></circle>
</svg>
</div>
<h3 className="md:text-xl md:mb-3 text-lg font-semibold text-white font-montserrat mb-2">Agencies That Burn Your Money</h3>
<p className="text-gray-400 font-light leading-relaxed text-sm">
            Tired of agencies that promise the world but deliver vague "brand
            awareness" instead of actual ROI.
          </p>
</div>

<div className="md:p-8 md:rounded-3xl hover:shadow-2xl hover:shadow-rose-900/10 transition-all duration-300 bg-gradient-to-br from-[#121212] to-[#0a0a0a] rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 shadow-lg shadow-black" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(244,63,94,0.3), rgba(244,63,94,0.05))', '--border-radius-before': '1.5rem'}}>
<div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-5 md:mb-6 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<svg className="lucide lucide-clock w-5 h-5 md:w-6 md:h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6v6l4 2"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
</div>
<h3 className="md:text-xl md:mb-3 text-lg font-semibold text-white font-montserrat mb-2">No Time to Build the Machine</h3>
<p className="text-gray-400 font-light leading-relaxed text-sm">
            You're too busy running the business to build complex marketing
            funnels or manage ad campaigns.
          </p>
</div>
</div>
</section>

<section className="md:py-20 pt-12 pb-12">
<div className="text-center mb-10 md:mb-16 px-4">
<h2 className="md:text-5xl text-3xl font-medium text-white tracking-tight font-serif mb-4">Why Choose Creator Growth Solutions</h2>
<p className="md:text-base text-sm font-light text-gray-400 max-w-2xl mr-auto ml-auto">We don't throw money at the wall and hope it sticks. We use a Trust Funnel system that turns your existing audience into a predictable revenue engine.</p>
</div>
<div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">

<div className="group md:rounded-3xl md:p-8 overflow-hidden md:h-80 flex flex-col transition-all hover:border-rose-500/30 bg-gradient-to-br from-[#0f0f0f] to-[#050505] h-64 border-white/5 border rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 relative">
<h3 className="md:text-2xl md:mb-4 text-xl font-medium text-white font-montserrat mb-3">The Trust Funnel Method</h3>
<p className="leading-relaxed z-10 text-sm font-light text-gray-400 relative">
            We don't guess. We use proprietary algorithms to identify your
            exact ICP and target them with surgical precision.
          </p>
<div className="mt-auto self-end group-hover:text-rose-500 transition-colors duration-500 transform group-hover:scale-110 text-white/5">
<svg className="lucide lucide-crosshair w-16 h-16 md:w-24 md:h-24 stroke-[1px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<line x1="22" x2="18" y1="12" y2="12"></line>
<line x1="6" x2="2" y1="12" y2="12"></line>
<line x1="12" x2="12" y1="6" y2="2"></line>
<line x1="12" x2="12" y1="22" y2="18"></line>
</svg>
</div>
</div>

<div className="group md:rounded-3xl md:p-8 overflow-hidden md:h-80 flex flex-col transition-all hover:border-rose-500/30 bg-gradient-to-br from-[#0f0f0f] to-[#050505] h-64 border border-white/5 rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 relative">
<h3 className="md:text-2xl md:mb-4 text-xl font-medium text-white font-montserrat mb-3">Full Transparency, Always</h3>
<p className="text-gray-400 font-light text-sm leading-relaxed z-10 relative">
            Live dashboards. 24/7 access. You see every dollar spent and every
            lead generated in real-time.
          </p>
<div className="mt-auto self-end group-hover:text-rose-500 transition-colors duration-500 transform group-hover:scale-110 text-white/5">
<svg className="lucide lucide-monitor w-16 h-16 md:w-24 md:h-24 stroke-[1px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect className="" height="14" rx="2" width="20" x="2" y="3"></rect>
<line x1="8" x2="16" y1="21" y2="21"></line>
<line x1="12" x2="12" y1="17" y2="21"></line>
</svg>
</div>
</div>

<div className="group md:rounded-3xl md:p-8 overflow-hidden md:h-80 flex flex-col transition-all hover:border-rose-500/30 bg-gradient-to-br from-[#0f0f0f] to-[#050505] h-64 border border-white/5 rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 relative">
<h3 className="md:text-2xl md:mb-4 text-xl font-medium text-white font-montserrat mb-3">We Only Win When You Win</h3>
<p className="text-gray-400 font-light text-sm leading-relaxed z-10 relative">
            We are so confident in our system that we put our own money on the
            line. If we don't hit KPIs, we work for free.
          </p>
<div className="mt-auto self-end group-hover:text-rose-500 transition-colors duration-500 transform group-hover:scale-110 text-white/5">
<svg className="lucide lucide-shield-check w-16 h-16 md:w-24 md:h-24 stroke-[1px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
</div>
</div>
<div className="flex justify-center">
<a className="sm:w-auto justify-center transition-all duration-300 flex items-center gap-2 hover:bg-rose-600 hover:text-white text-sm font-medium text-black font-montserrat bg-white w-full rounded-full pt-3.5 pr-8 pb-3.5 pl-8" href="#book-call">
          Book a Call
          <svg className="lucide lucide-phone w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
</svg>
</a>
</div>
</section>

<section className="md:py-24 pt-16 pb-16">
<div className="text-center mb-12 md:mb-16">
<span className="text-[10px] md:text-xs uppercase block font-bold text-rose-500 tracking-widest font-montserrat mb-3">HOW IT WORKS</span>
<h2 className="md:text-5xl text-3xl font-medium text-white font-serif">From Idea to Booked Calendar in 3 Steps</h2>
</div>
<div className="grid md:grid-cols-3 gap-10 md:gap-8 relative max-w-6xl mx-auto">

<div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent to-transparent -z-10 via-white/10"></div>

<div className="flex flex-col items-center text-center group">
<div className="w-20 h-20 md:w-24 md:h-24 border rounded-full flex items-center justify-center text-xl md:text-2xl font-serif mb-5 md:mb-6 shadow-sm group-hover:border-rose-500 group-hover:text-rose-500 transition-colors bg-[#0a0a0a] border-white/10 text-gray-600">
            1
          </div>
<h3 className="md:text-xl md:mb-3 text-lg font-bold text-white font-montserrat mb-2">Book a Call</h3>
<p className="leading-relaxed md:px-0 text-sm font-light text-gray-400 max-w-xs pr-4 pl-4">
            We analyze your current situation and determine if our system is a
            fit for your specific growth goals.
          </p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-20 h-20 md:w-24 md:h-24 border rounded-full flex items-center justify-center text-xl md:text-2xl font-serif mb-5 md:mb-6 shadow-sm group-hover:border-rose-500 group-hover:text-rose-500 transition-colors bg-[#0a0a0a] border-white/10 text-gray-600">
            2
          </div>
<h3 className="text-lg md:text-xl font-bold font-montserrat mb-2 md:mb-3 text-white">
            We Build The Engine
          </h3>
<p className="leading-relaxed md:px-0 text-sm font-light text-gray-400 max-w-xs pr-4 pl-4">Our team deploys the custom infrastructure, creative assets, and tracking systems in under 15 days.</p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-20 h-20 md:w-24 md:h-24 border rounded-full flex items-center justify-center text-xl md:text-2xl font-serif mb-5 md:mb-6 shadow-sm group-hover:border-rose-500 group-hover:text-rose-500 transition-colors bg-[#0a0a0a] border-white/10 text-gray-600">
            3
          </div>
<h3 className="text-lg md:text-xl font-bold font-montserrat mb-2 md:mb-3 text-white">
            You Get Scale
          </h3>
<p className="text-sm text-gray-400 font-light leading-relaxed max-w-xs px-4 md:px-0">
            Leads start flowing automatically. You focus on closing deals and
            servicing clients while we handle growth.
          </p>
</div>
</div>
<div className="flex md:mt-16 mt-12 justify-center">
<a className="sm:w-auto justify-center transition-all duration-300 flex items-center gap-2 shadow-black/50 hover:shadow-rose-500/20 hover:bg-rose-600 hover:text-white text-sm font-medium text-black font-montserrat bg-white w-full rounded-full pt-4 pr-10 pb-4 pl-10 shadow-lg" href="#book-call">Book Your Strategy Call</a>
</div>
</section>

<section className="md:mb-24 md:px-6 mb-16 pr-0 pl-0">
<div className="shadow-black/20 overflow-hidden text-center bg-[#0a0a0a] border-white/5 border rounded-[2rem] pt-10 pr-6 pb-10 pl-6 relative shadow-2xl md:rounded-[2.5rem] md:pb-00">
<div className="z-10 relative">
<h2 className="md:text-5xl md:mb-6 text-2xl font-medium text-white tracking-tight font-serif mb-4">Exactly How Trust Funnels Generate Sales Calls Without Six-Figure Ad Budgets</h2>
<p className="md:text-lg md:mb-12 leading-relaxed text-sm font-light text-gray-400 max-w-2xl mr-auto mb-8 ml-auto">
            Watch the video below to learn the exact process we follow to
            scale revenue.
          </p>
<div className="relative w-full max-w-4xl mx-auto rounded-xl md:rounded-[2rem] border-2 md:border-4 shadow-2xl overflow-hidden mb-8 md:mb-12 ring-1 bg-black border-white/10 ring-white/5">
<div style={{position: 'relative', paddingBottom: '56.25%', height: '0'}}>
<iframe allowfullscreen="" frameborder="0" mozallowfullscreen="" src="https://www.loom.com/embed/f830e6ce61914ec7a783d246fd10358f" style={{position: 'absolute', top: '0', left: '0', width: '100%', height: '100%'}} webkitallowfullscreen=""></iframe>
</div>
</div>
<div className="flex justify-center">
<a className="sm:w-auto justify-center transition-all duration-300 flex items-center gap-2 shadow-black/50 hover:shadow-rose-500/20 hover:bg-rose-600 hover:text-white text-sm font-medium text-black font-montserrat bg-white w-full rounded-full pt-4 pr-10 pb-4 pl-10 shadow-lg" href="#roi-calculator">Let Me See My Numbers</a>
</div>
</div>
</div>
</section>

<section className="md:pt-10 md:pb-20 -mx-4 md:-mx-6 md:px-6 md:rounded-[3rem] border-y bg-[#0a0a0a] border-white/5 rounded-[2.5rem] pt-8 pr-4 pb-16 pl-4">
<div className="max-w-7xl mx-auto">
<h2 className="md:text-5xl md:mb-16 text-3xl font-medium text-white tracking-tight font-serif text-center mb-10">
          What's Included
        </h2>
<div className="md:rounded-[2.5rem] md:p-16 overflow-hidden bg-[#111] border-white/5 border rounded-[2rem] pt-6 pr-6 pb-6 pl-6 relative shadow-2xl">
<div className="absolute top-0 right-0 w-[20rem] h-[20rem] md:w-[40rem] md:h-[40rem] bg-gradient-to-b to-transparent rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none from-rose-900/10"></div>
<div className="flex flex-col z-10 relative items-center">
<div className="text-center mb-8 md:mb-12 max-w-3xl">
<span className="font-bold tracking-widest uppercase text-[10px] md:text-xs font-montserrat mb-4 block text-rose-500">
                The Ecosystem
              </span>
<h3 className="text-2xl md:text-4xl font-serif mb-4 md:mb-6 text-white">
                All-In-One Growth Infrastructure
              </h3>
<p className="md:text-lg text-base font-light text-gray-400">We don't hand you a playbook and wish you luck. We build, launch, and optimize the entire system so you can focus on what you do best: creating and providing value.</p>
</div>
<div className="grid md:grid-cols-2 gap-y-4 gap-x-20 md:gap-y-6 w-full max-w-4xl mb-12 md:mb-16">
<ul className="space-y-4 md:space-y-6">
<li className="flex gap-3 md:gap-4 gap-x-3 gap-y-3 items-center">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<svg className="lucide lucide-check w-3.5 h-3.5 md:w-5 md:h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="md:text-lg text-sm font-medium text-gray-300 font-montserrat">Your Offer, Built For You</span>
</li>
<li className="flex gap-3 md:gap-4 gap-x-3 gap-y-3 items-center">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<svg className="lucide lucide-check w-3.5 h-3.5 md:w-5 md:h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="md:text-lg text-sm font-medium text-gray-300 font-montserrat">Full Sales Funnel Build &amp; Deployment</span>
</li>
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<svg className="lucide lucide-check w-3.5 h-3.5 md:w-5 md:h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="md:text-lg text-sm font-medium text-gray-300 font-montserrat">Ads That Bring Buyers, Not Just Clicks</span>
</li>
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<svg className="lucide lucide-check w-3.5 h-3.5 md:w-5 md:h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="md:text-lg text-sm font-medium text-gray-300 font-montserrat">Email &amp; Follow-Up That Sells While You Sleep</span>
</li>
</ul>
<ul className="md:space-y-6 space-y-4">
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<svg className="lucide lucide-check w-3.5 h-3.5 md:w-5 md:h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="md:text-lg text-sm font-medium text-gray-300 font-montserrat">A Roadmap From Where You Are to 7 Figures</span>
</li>
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<svg className="lucide lucide-check w-3.5 h-3.5 md:w-5 md:h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="md:text-lg text-sm font-medium text-gray-300 font-montserrat">Your Own Sales Team (Without Hiring One Yourself)</span>
</li>
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<svg className="lucide lucide-check w-3.5 h-3.5 md:w-5 md:h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="font-medium font-montserrat text-sm md:text-lg text-gray-300">
                    24/7 Live Reporting
                  </span>
</li>
<li className="flex gap-3 md:gap-4 gap-x-3 gap-y-3 items-center">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<svg className="lucide lucide-check w-3.5 h-3.5 md:w-5 md:h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="md:text-lg text-sm font-bold text-white font-montserrat border-rose-500/40 border-b-2">FULL Money Back Guarantee</span>
</li>
</ul>
</div>
<div className="flex flex-col items-center w-full">
<a className="w-full md:w-auto text-base md:text-lg px-8 md:px-12 py-4 md:py-5 rounded-full transition-all duration-300 shadow-xl font-montserrat font-medium flex items-center justify-center gap-3 group bg-white text-black hover:bg-rose-600 hover:text-white shadow-black/50" href="#book-call">
                Let's talk
                <svg className="lucide lucide-arrow-right w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="md:py-24 grid lg:grid-cols-2 gap-10 md:gap-16 pt-16 pb-16 gap-x-10 gap-y-10 items-center">
<div className="order-2 lg:order-1">
<h2 className="md:text-5xl md:mb-8 text-3xl font-medium text-white tracking-tight font-serif mb-6">Hey, I'm Diego. </h2>
<div className="space-y-4 md:space-y-6 text-sm md:text-base text-gray-400 font-light leading-relaxed">
<p className="">I'm one of the co-founders of Creator Growth Solutions. We got tired of watching creators get overcharged by agencies that vanish after cashing the check... So we built something where we only eat if you eat.</p>
<p className="">Our goal isn't to “run your marketing.” It's to build something together that helps your audience get real results, scales beyond what either of us could do alone, and keeps growing for years... not months. The creators we work with aren't clients. They're partners. And the businesses we build together are ours.</p>
</div>
<button className="mt-6 md:mt-8 font-semibold border-b pb-0.5 transition-all text-rose-400 border-rose-900 hover:border-rose-400">
          Let's Talk!
        </button>
</div>
<div className="relative order-1 lg:order-2 h-64 md:h-[500px] w-full rounded-[2rem] overflow-hidden bg-neutral-900">
<img alt="Founder" className="hover:grayscale-0 transition-all duration-700 hover:opacity-100 object-[center_30%] opacity-80 w-full h-full object-cover bg-center rounded-sm grayscale scale-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a4c4dba6-6b92-4dfa-af43-26d2ffcccf26_1600w.jpg"/>
</div>
</section>

<section className="max-w-3xl mr-auto mb-16 ml-auto pt-8 pr-2 pb-8 pl-2 md:py-10 md:px-6 md:mb-10">
<h2 className="md:text-3xl md:mb-12 text-2xl font-medium text-white tracking-tight font-serif text-center mb-10">FAQs — Everything You Need to Know</h2>
<div className="space-y-4">

<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-[#0a0a0a] border-white/5">
<summary className="flex md:p-6 cursor-pointer select-none md:text-base text-sm font-medium text-white font-montserrat pt-5 pr-5 pb-5 pl-5 items-center justify-between">
            I don't have 1M followers. Can I still work with you?
            <svg className="lucide lucide-chevron-down md:w-5 md:h-5 transition-transform group-open:rotate-180 w-[16px] h-[16px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(107, 114, 128)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-gray-400 leading-relaxed font-light border-t pt-4 border-white/5">
            Yes. You don't need millions of followers to make this work. What matters is that people trust you and care about what you have to say. We've helped creators with small but engaged audiences generate $10K+ in just a few days. If your audience listens to you, there's money being left on the table — and we know how to capture it.
          </div>
</details>

<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-[#0a0a0a] border-white/5">
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-medium font-montserrat select-none text-white text-sm md:text-base">
            I'm making $20–30K/month already but I feel stuck. Can you actually help me scale past this?
            <svg className="lucide lucide-chevron-down w-4 h-4 md:w-5 md:h-5 transition-transform group-open:rotate-180 text-gray-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-gray-400 leading-relaxed font-light border-t pt-4 border-white/5">
            This is exactly the stage where most creators plateau — because the tactics that got you to $20K won't get you to $100K. You need better offers, better systems, and a growth partner who's done it before. We come in, audit everything, and build the infrastructure to break through that ceiling — new products, new funnels, paid traffic, backend optimization. All of it.
          </div>
</details>

<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-[#0a0a0a] border-white/5">
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-medium font-montserrat select-none text-white text-sm md:text-base">
            What if I don't have a product or course yet?
            <svg className="lucide lucide-chevron-down w-4 h-4 md:w-5 md:h-5 transition-transform group-open:rotate-180 text-gray-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-gray-400 leading-relaxed font-light border-t pt-4 border-white/5">
            That's completely fine — and honestly, it's one of our favorite starting points. We'll sit down with you, pull out your best ideas, stories, and expertise, and develop a digital product your audience will actually want to buy. You don't need to have anything built. You just need to know something worth sharing.
          </div>
</details>

<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-[#0a0a0a] border-white/5">
<summary className="flex md:p-6 cursor-pointer select-none md:text-base text-sm font-medium text-white font-montserrat pt-5 pr-5 pb-5 pl-5 items-center justify-between">
            I already have a course/program. Will you just resell what I already have?
            <svg className="lucide lucide-chevron-down md:w-5 md:h-5 transition-transform group-open:rotate-180 w-[16px] h-[16px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(107, 114, 128)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-gray-400 leading-relaxed font-light border-t pt-4 border-white/5">
            Not exactly. We'll audit your current offer and figure out if it needs repositioning, repackaging, a new price point, or a totally different angle. Sometimes small tweaks double conversions. Other times we'll recommend building a new front-end offer that feeds into your existing program. Either way, we make what you have work harder.
          </div>
</details>

<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-[#0a0a0a] border-white/5">
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-medium font-montserrat select-none text-white text-sm md:text-base">
            How is this different from hiring a marketing agency?
            <svg className="lucide lucide-chevron-down w-4 h-4 md:w-5 md:h-5 transition-transform group-open:rotate-180 text-gray-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-gray-400 leading-relaxed font-light border-t pt-4 border-white/5">
            Most agencies charge you $3K–$10K/month whether or not anything happens. They send you reports full of impressions and click-through rates and call it a win. We don't do that. We build the entire system, run it, and only get paid from the revenue we generate together. If it doesn't work, you owe us nothing. Our incentives are 100% aligned with yours.
          </div>
</details>


<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-[#0a0a0a] border-white/5">
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-medium font-montserrat select-none text-white text-sm md:text-base">
            How much of my time does this take? I'm already stretched thin.
            <svg className="lucide lucide-chevron-down w-4 h-4 md:w-5 md:h-5 transition-transform group-open:rotate-180 text-gray-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-gray-400 leading-relaxed font-light border-t pt-4 border-white/5">
            Very little. We need a few hours upfront to get inside your head — your voice, your story, what makes you different. After that, we handle everything: the strategy, the copy, the tech, the ads, the emails, the funnels. Your job is to keep creating content and show up for the sales opportunities we put in front of you.
          </div>
</details>

<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-[#0a0a0a] border-white/5">
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-medium font-montserrat select-none text-white text-sm md:text-base">
            How fast will I see results?
            <svg className="lucide lucide-chevron-down w-4 h-4 md:w-5 md:h-5 transition-transform group-open:rotate-180 text-gray-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-gray-400 leading-relaxed font-light border-t pt-4 border-white/5">
            It depends on your starting point. If you already have an audience and an offer, we've generated revenue within the first week. For creators starting from scratch on the product side, we typically have something launched within 30 days and generating sales shortly after. Full optimization and aggressive scaling usually kicks in around month 2–3.
          </div>
</details>

<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-[#0a0a0a] border-white/5">
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-medium font-montserrat select-none text-white text-sm md:text-base">
            What if it doesn't work?
            <svg className="lucide lucide-chevron-down w-4 h-4 md:w-5 md:h-5 transition-transform group-open:rotate-180 text-gray-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-gray-400 leading-relaxed font-light border-t pt-4 border-white/5">
            Then you don't pay. That's the whole point of the performance model. We don't believe in charging for failed projects. If we can't generate results for you, we eat the cost — not you. We're building long-term partnerships, not collecting retainer checks.
          </div>
</details>

<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-[#0a0a0a] border-white/5">
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-medium font-montserrat select-none text-white text-sm md:text-base">
            Do I need to be a big influencer or celebrity for this to work?
            <svg className="lucide lucide-chevron-down w-4 h-4 md:w-5 md:h-5 transition-transform group-open:rotate-180 text-gray-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-gray-400 leading-relaxed font-light border-t pt-4 border-white/5">
            Not at all. We work with creators at all levels — from 10K followers to millions. What matters isn't the size of your audience, it's whether you have expertise people value and an audience that trusts you. Some of our best results have come from creators most people have never heard of.
          </div>
</details>

<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-[#0a0a0a] border-white/5">
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-medium font-montserrat select-none text-white text-sm md:text-base">
            What kinds of creators do you work with?
            <svg className="lucide lucide-chevron-down w-4 h-4 md:w-5 md:h-5 transition-transform group-open:rotate-180 text-gray-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-gray-400 leading-relaxed font-light border-t pt-4 border-white/5">
            We specialize in personal brands, online educators, coaches, and content creators who monetize (or want to monetize) their expertise. Fitness, business, music, lifestyle, trades, hobbies — the niche matters less than the trust you've built with your audience. If people look to you for guidance, we can turn that into revenue.
          </div>
</details>

<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-[#0a0a0a] border-white/5">
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-medium font-montserrat select-none text-white text-sm md:text-base">
            I've been burned by someone like this before. Why should I trust you?
            <svg className="lucide lucide-chevron-down w-4 h-4 md:w-5 md:h-5 transition-transform group-open:rotate-180 text-gray-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-gray-400 leading-relaxed font-light border-t pt-4 border-white/5">
            Fair question. Here's the difference: we don't get paid unless you get paid. That means we can't afford to overpromise and underdeliver — our entire business model depends on actually generating results. We'll share real case studies, real numbers, and real timelines on the strategy call so you can see exactly what we've done for other creators in your position.
          </div>
</details>

<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-[#0a0a0a] border-white/5">
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-medium font-montserrat select-none text-white text-sm md:text-base">
            What happens after the first launch? Do you disappear?
            <svg className="lucide lucide-chevron-down w-4 h-4 md:w-5 md:h-5 transition-transform group-open:rotate-180 text-gray-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-gray-400 leading-relaxed font-light border-t pt-4 border-white/5">
            No. The first launch is just the beginning. After we prove the concept and generate initial sales, we move into refinement — better offers, stronger copy, higher conversions. Then we scale with paid ads, affiliate partners, and cold traffic. This is a long-term growth partnership, not a one-and-done project.
          </div>
</details>

<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-[#0a0a0a] border-white/5">
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-medium font-montserrat select-none text-white text-sm md:text-base">
            How do I get started?
            <svg className="lucide lucide-chevron-down w-4 h-4 md:w-5 md:h-5 transition-transform group-open:rotate-180 text-gray-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-gray-400 leading-relaxed font-light border-t pt-4 border-white/5">
            Book a free strategy call below. We'll walk through your current situation — what you're selling (or want to sell), who your audience is, and where the biggest revenue opportunity is hiding. No pressure, no commitment. Just a clear picture of what's possible.
          </div>
</details>
</div>
<p className="text-sm text-gray-500 text-center mt-8">
        Don't see what you're looking for?
        <a className="underline transition-all text-rose-400 decoration-rose-900 hover:decoration-rose-400" href="#book-call">
          Get in touch
        </a>
        .
      </p>
</section>

<section className="max-w-7xl mx-auto pt-0 pr-6 pb-0 pl-6 md:px-6 md:pt-2" id="book-call">
<div className="md:mb-16 text-center mb-10">
<h2 className="text-3xl md:text-5xl font-serif font-medium text-white mb-6 tracking-tight">
          Book a Call
        </h2>
<p className="text-base md:text-lg text-gray-400 font-light max-w-2xl mx-auto">
          Book a no-commitment discovery call to discuss how we can help you
          grow.
        </p>
</div>
<div className="w-full bg-[#0a0a0a] rounded-[2rem] border border-white/5 shadow-sm overflow-hidden">

<div className="calendly-inline-widget" data-url="https://calendly.com/diego-creatorgrowthsolutions/30min?hide_event_type_details=1&amp;hide_gdpr_banner=1&amp;background_color=000000&amp;text_color=ffffff&amp;primary_color=f43f5d" style={{minWidth: '320px', height: '700px'}}></div>

</div>
</section>

<section className="max-w-7xl mx-auto pt-16 px-6 md:pt-24 md:pb-12" id="roi-calculator">
<div className="md:mb-12 text-center mb-8">
<h2 className="text-3xl md:text-5xl font-serif font-medium text-white mb-4 tracking-tight">
          Play With The Math Yourself
        </h2>
<p className="text-base md:text-lg text-gray-400 font-light max-w-2xl mx-auto">
          Plug in your numbers to see what a Trust Funnel could generate for your business.
        </p>
</div>
<div className="w-full bg-[#0a0a0a] rounded-[2rem] border border-white/5 shadow-2xl overflow-hidden shadow-black/50 p-2 md:p-4">
<iframe allow="clipboard-write" allowfullscreen="" className="w-full bg-transparent rounded-[1.5rem] border border-white/5" frameborder="0" height="600" src="https://claude.site/public/artifacts/1f875ee1-1c6b-4114-9401-14ed2fb56fa8/embed" title="Claude Artifact" width="100%"></iframe>
</div>
</section>
</main>

<footer className="border-t pt-8 md:pt-12 px-4 md:px-6 bg-[#050505] border-white/5">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-10">

<div className="text-center md:text-left">
<a className="text-2xl font-medium italic text-white tracking-tight font-serif" href="#">Creator Growth Solutions</a>
<p className="text-xs mt-3 max-w-xs font-light text-gray-500 mx-auto md:mx-0">
          Scaling revenue for ambitious brands through intelligent ecosystems.
        </p>
</div>
</div>
<div className="max-w-7xl mx-auto mt-8 md:mt-10 pt-8 pb-6 border-t text-center text-[10px] md:text-xs font-montserrat border-white/5 text-gray-600">
<p className="">© 2026 Creator Growth Solutions. All rights reserved.</p>
</div>
</footer>


    </>
  );
}
