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



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  
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
      

<div className="aura-background-component top-0 w-full h-screen -z-10 fixed" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="yaha7Bz5f3cRBAa5js9K"></div>

</div></div>

<header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 md:pt-6 md:px-6 pointer-events-none">
<nav className="pointer-events-auto glass rounded-full pl-5 pr-2 py-2 flex items-center justify-between gap-4 md:gap-10 shadow-2xl shadow-black/50 w-full max-w-5xl transition-all duration-300">

<a className="group flex items-center gap-2 shrink-0" href="#">
<span className="font-serif text-xl md:text-2xl tracking-tight italic font-medium group-hover:text-rose-500 transition-colors text-white">
          27Lines.
        </span>
</a>

<a className="md:px-5 md:py-2.5 transition-all duration-300 flex items-center gap-2 group hover:shadow-lg hover:shadow-rose-500/20 hover:bg-rose-600 hover:text-white shrink-0 text-xs font-medium text-black font-montserrat bg-white rounded-full pt-2 pr-4 pb-2 pl-4 shadow-md" href="/#bookcall">
        Get Started
        <iconify-icon className="transition-transform group-hover:translate-x-0.5 hidden sm:block" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</nav>
</header>
<main className="md:pt-32 md:px-6 max-w-7xl mr-auto ml-auto pt-28 pr-4 pb-24 pl-4">

<section className="md:rounded-[2.5rem] md:p-12 lg:p-20 shadow-black/20 overflow-hidden md:mb-16 text-center bg-[#0A0A0A] border-white/5 border rounded-[2rem] mb-12 pt-12 pr-6 pb-12 pl-6 relative shadow-2xl">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:3rem_3rem] md:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-30"></div>
<div className="z-10 flex flex-col max-w-5xl mr-auto ml-auto relative items-center">

<div className="animate-fade-up text-[10px] uppercase md:mb-8 font-semibold text-rose-400 tracking-widest font-montserrat bg-rose-950/30 w-fit border-rose-900/50 border rounded-full mb-6 pt-1 pr-3 pb-1 pl-3">Attention Service providers charging $5000+</div>

<h1 className="animate-fade-up delay-100 sm:text-5xl md:text-7xl lg:text-[5rem] leading-[1.1] md:leading-[0.95] md:mb-8 text-4xl font-medium text-white tracking-tighter font-serif mb-6">We Guarantee<span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 italic pr-2 to-orange-400">
            10-15 Qualified Sales Calls
          </span> in <br className="hidden md:block"/> 30 Days or <span className="border-b-2 md:border-b-4 border-rose-500/30">
            You Don't Pay.
          </span></h1>

<p className="animate-fade-up delay-200 md:text-xl leading-relaxed md:mb-12 text-base font-light text-gray-400 max-w-2xl mb-8 pr-2 pl-2">Our proprietary Qualified Prospect Pipeline System adds 10-15 Qualified Sales Calls to your business without you lifting a finger.</p>

<div className="animate-fade-up delay-300 relative w-full max-w-4xl aspect-video rounded-xl md:rounded-[2rem] border-2 md:border-4 shadow-2xl overflow-hidden mb-8 md:mb-12 group ring-1 bg-black border-white/10 shadow-black ring-white/5">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className="w-full h-full absolute inset-0" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/5GAc6F9Yo5Q?si=_IPdrC4FVrVX073X" title="YouTube video player">
</iframe>
</div>

<div className="animate-fade-up delay-500 flex flex-col sm:flex-row gap-3 md:gap-4 items-center justify-center w-full mb-6">
<a className="sm:w-auto md:py-4 hover:shadow-xl hover:shadow-rose-500/20 transition-all duration-300 flex items-center justify-center gap-2 group hover:bg-rose-600 hover:text-white text-sm font-medium text-black font-montserrat bg-white w-full rounded-full pt-3.5 pr-8 pb-3.5 pl-8" href="/#bookcall">
            Get Started
            <iconify-icon className="transition-transform group-hover:translate-x-1" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<a className="w-full sm:w-auto border px-8 py-3.5 md:py-4 rounded-full text-sm transition-all duration-300 font-montserrat font-medium flex items-center justify-center gap-2 bg-transparent border-white/10 text-white hover:border-white/30 hover:bg-white/5" href="#process">
            Learn More
          </a>
</div>

<p className="animate-fade-up delay-500 text-[10px] md:text-xs text-gray-500 font-montserrat" onclick="window.location.href='/#bookcall'" role="button">
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
<iconify-icon height="24" icon="solar:graph-down-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg md:text-xl font-montserrat font-semibold mb-2 md:mb-3 text-white">
            Unpredictable Pipeline
          </h3>
<p className="text-gray-400 font-light leading-relaxed text-sm">
            You never know where your next client is coming from, creating
            revenue rollercoasters that stall growth.
          </p>
</div>

<div className="md:p-8 md:rounded-3xl hover:shadow-2xl hover:shadow-rose-900/10 transition-all duration-300 bg-gradient-to-br from-[#121212] to-[#0a0a0a] rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 shadow-lg shadow-black" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(244,63,94,0.3), rgba(244,63,94,0.05))', '--border-radius-before': '1.5rem'}}>
<div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-5 md:mb-6 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<iconify-icon className="" height="24" icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg md:text-xl font-montserrat font-semibold mb-2 md:mb-3 text-white">
            Empty Promises
          </h3>
<p className="text-gray-400 font-light leading-relaxed text-sm">
            Tired of agencies that promise the world but deliver vague "brand
            awareness" instead of actual ROI and qualified calls.
          </p>
</div>

<div className="md:p-8 md:rounded-3xl hover:shadow-2xl hover:shadow-rose-900/10 transition-all duration-300 bg-gradient-to-br from-[#121212] to-[#0a0a0a] rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 shadow-lg shadow-black" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(244,63,94,0.3), rgba(244,63,94,0.05))', '--border-radius-before': '1.5rem'}}>
<div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-5 md:mb-6 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<iconify-icon height="24" icon="solar:clock-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg md:text-xl font-montserrat font-semibold mb-2 md:mb-3 text-white">
            No Time To Build
          </h3>
<p className="text-gray-400 font-light leading-relaxed text-sm">
            You're too busy running the business to build complex marketing
            funnels or manage ad campaigns yourself.
          </p>
</div>
</div>
</section>

<section className="py-12 md:py-20">
<div className="text-center mb-10 md:mb-16 px-4">
<h2 className="md:text-5xl text-3xl font-medium text-white tracking-tight font-serif mb-4">
          Why Choose 27Lines
        </h2>
<p className="text-gray-400 max-w-2xl mx-auto font-light text-sm md:text-base">
          We use a unique Qualified Prospect Pipeline System that others simply can't
          replicate.
        </p>
</div>
<div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">

<div className="group md:rounded-3xl md:p-8 overflow-hidden md:h-80 flex flex-col transition-all hover:border-rose-500/30 bg-gradient-to-br from-[#0f0f0f] to-[#050505] h-64 border border-white/5 rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 relative">
<h3 className="md:text-2xl md:mb-4 text-xl font-medium text-white font-montserrat mb-3">
            Surgical Targeting
          </h3>
<p className="text-gray-400 font-light text-sm leading-relaxed z-10 relative">
            We don't guess. We use proprietary algorithms to identify your
            exact ICP and target them with surgical precision.
          </p>
<div className="mt-auto self-end group-hover:text-rose-500 transition-colors duration-500 transform group-hover:scale-110 text-white/5">
<iconify-icon className="" height="96" icon="solar:target-linear" width="96"></iconify-icon>
</div>
</div>

<div className="group md:rounded-3xl md:p-8 overflow-hidden md:h-80 flex flex-col transition-all hover:border-rose-500/30 bg-gradient-to-br from-[#0f0f0f] to-[#050505] h-64 border border-white/5 rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 relative">
<h3 className="md:text-2xl md:mb-4 text-xl font-medium text-white font-montserrat mb-3">Strategic Messaging</h3>
<p className="leading-relaxed z-10 text-sm font-light text-gray-400 relative">Every campain is built around positioning and relevance - not templates copied from the internet.</p>
<div className="mt-auto self-end group-hover:text-rose-500 transition-colors duration-500 transform group-hover:scale-110 text-white/5">
<iconify-icon className="" height="96" icon="solar:monitor-linear" width="96"></iconify-icon>
</div>
</div>

<div className="group md:rounded-3xl md:p-8 overflow-hidden md:h-80 flex flex-col transition-all hover:border-rose-500/30 bg-gradient-to-br from-[#0f0f0f] to-[#050505] h-64 border border-white/5 rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 relative">
<h3 className="text-xl md:text-2xl font-montserrat font-medium mb-3 md:mb-4 text-white">
            Performance Guarantee
          </h3>
<p className="text-gray-400 font-light text-sm leading-relaxed z-10 relative">
            We are so confident in our system that we put our own money on the
            line. If we don't hit KPIs, we work for free.
          </p>
<div className="mt-auto self-end group-hover:text-rose-500 transition-colors duration-500 transform group-hover:scale-110 text-white/5">
<iconify-icon height="96" icon="solar:shield-check-linear" width="96"></iconify-icon>
</div>
</div>
</div>
<div className="flex justify-center">
<a className="sm:w-auto justify-center transition-all duration-300 flex items-center gap-2 hover:bg-rose-600 hover:text-white text-sm font-medium text-black font-montserrat bg-white w-full rounded-full pt-3.5 pr-8 pb-3.5 pl-8" href="/#bookcall">
          Book a Call
          <iconify-icon className="" height="16" icon="solar:phone-calling-linear" width="16"></iconify-icon>
</a>
</div>
</section>

<section className="py-16 md:py-24" id="process">
<div className="text-center mb-12 md:mb-16">
<span className="text-[10px] md:text-xs font-montserrat font-bold tracking-widest uppercase mb-3 block text-rose-500">
          Transformation
        </span>
<h2 className="text-3xl md:text-5xl font-serif font-medium text-white">
          Get Consistent Results
        </h2>
</div>
<div className="grid md:grid-cols-3 gap-10 md:gap-8 relative max-w-6xl mx-auto">

<div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent to-transparent -z-10 via-white/10"></div>

<div className="flex flex-col items-center text-center group">
<div className="w-20 h-20 md:w-24 md:h-24 border rounded-full flex items-center justify-center text-xl md:text-2xl font-serif mb-5 md:mb-6 shadow-sm group-hover:border-rose-500 group-hover:text-rose-500 transition-colors bg-[#0a0a0a] border-white/10 text-gray-600">
            1
          </div>
<h3 className="text-lg md:text-xl font-bold font-montserrat mb-2 md:mb-3 text-white">
            Book a Call
          </h3>
<p className="text-sm text-gray-400 font-light leading-relaxed max-w-xs px-4 md:px-0">
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
<p className="leading-relaxed md:px-0 text-sm font-light text-gray-400 max-w-xs pr-4 pl-4">Our team deploys the custom infrastructure, creative assets, and tracking systems in under 30 days.</p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-20 h-20 md:w-24 md:h-24 border rounded-full flex items-center justify-center text-xl md:text-2xl font-serif mb-5 md:mb-6 shadow-sm group-hover:border-rose-500 group-hover:text-rose-500 transition-colors bg-[#0a0a0a] border-white/10 text-gray-600">
            3
          </div>
<h3 className="text-lg md:text-xl font-bold font-montserrat mb-2 md:mb-3 text-white">
            You Get Scale
          </h3>
<p className="text-sm text-gray-400 font-light leading-relaxed max-w-xs px-4 md:px-0">
            Qualified sales calls start flowing automatically. You focus on closing deals and
            servicing clients while we handle growth.
          </p>
</div>
</div>
<div className="flex justify-center mt-12 md:mt-16">
<a className="sm:w-auto justify-center transition-all duration-300 flex items-center gap-2 shadow-black/50 hover:shadow-rose-500/20 hover:bg-rose-600 hover:text-white text-sm font-medium text-black font-montserrat bg-white w-full rounded-full pt-4 pr-10 pb-4 pl-10 shadow-lg" href="/#bookcall">
          Book Your Transformation
          <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</section>

<section className="md:py-20 -mx-4 md:-mx-6 md:px-6 md:rounded-[3rem] border-y bg-[#0a0a0a] border-white/5 rounded-[2.5rem] pt-16 pr-4 pb-16 pl-4">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl md:text-5xl text-center mb-10 md:mb-16 tracking-tight font-serif font-medium text-white">
          What's Included
        </h2>
<div className="rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-16 border shadow-2xl shadow-black relative overflow-hidden bg-[#111] border-white/5">
<div className="absolute top-0 right-0 w-[20rem] h-[20rem] md:w-[40rem] md:h-[40rem] bg-gradient-to-b to-transparent rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none from-rose-900/10"></div>
<div className="flex flex-col z-10 relative items-center">
<div className="text-center mb-8 md:mb-12 max-w-3xl">
<span className="font-bold tracking-widest uppercase text-[10px] md:text-xs font-montserrat mb-4 block text-rose-500">
                The Ecosystem
              </span>
<h3 className="text-2xl md:text-4xl font-serif mb-4 md:mb-6 text-white">
                All-In-One Growth Infrastructure
              </h3>
<p className="text-gray-400 font-light text-base md:text-lg">
                We've consolidated our entire suite of growth tools into one
                powerful partnership designed for maximum impact.
              </p>
</div>
<div className="grid md:grid-cols-2 gap-y-4 gap-x-20 md:gap-y-6 w-full max-w-4xl mb-12 md:mb-16">
<ul className="space-y-4 md:space-y-6">
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<iconify-icon className="" height="16" icon="solar:check-read-linear" width="16"></iconify-icon>
</div>
<span className="font-medium font-montserrat text-sm md:text-lg text-gray-300">
                    Qualified Prospect Pipeline System
                  </span>
</li>
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<iconify-icon height="16" icon="solar:check-read-linear" width="16"></iconify-icon>
</div>
<span className="md:text-lg text-sm font-medium text-gray-300 font-montserrat">Strategic Cold Email Campaign</span>
</li>
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<iconify-icon className="" height="16" icon="solar:check-read-linear" width="16"></iconify-icon>
</div>
<span className="md:text-lg text-sm font-medium text-gray-300 font-montserrat">Campaign Performance Reporting</span>
</li>
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<iconify-icon height="16" icon="solar:check-read-linear" width="16"></iconify-icon>
</div>
<span className="md:text-lg text-sm font-medium text-gray-300 font-montserrat">Personalized Onboarding &amp; Strategy Session</span>
</li>
</ul>
<ul className="md:space-y-6 space-y-4">
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<iconify-icon height="16" icon="solar:check-read-linear" width="16"></iconify-icon>
</div>
<span className="md:text-lg text-sm font-medium text-gray-300 font-montserrat">Smart Follow Up System</span>
</li>
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<iconify-icon height="16" icon="solar:check-read-linear" width="16"></iconify-icon>
</div>
<span className="md:text-lg text-sm font-medium text-gray-300 font-montserrat">Continuous Optimization</span>
</li>
<li className="flex md:gap-4 text-lg font-medium text-gray-300 font-montserrat gap-x-3 gap-y-3 items-center"></li>
</ul>
</div>
<div className="flex flex-col items-center w-full">
<a className="md:w-auto md:text-lg md:px-12 md:py-5 transition-all duration-300 flex items-center justify-center gap-3 group hover:bg-rose-600 hover:text-white shadow-black/50 text-base font-medium text-black font-montserrat bg-white w-full rounded-full pt-4 pr-8 pb-4 pl-8 shadow-xl" href="/#bookcall">
                Secure Your Growth Partner
                <iconify-icon className="transition-transform group-hover:translate-x-1" height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<p className="mt-4 md:mt-6 text-xs md:text-sm font-montserrat text-gray-500">
                No long-term contracts. Cancel anytime.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="md:py-10 md:mb-24 md:px-6 max-w-3xl mr-auto mb-16 ml-auto pt-8 pr-2 pb-8 pl-2">
<h2 className="md:text-3xl md:mb-12 text-2xl font-medium text-white tracking-tight font-serif text-center mb-10">
        FAQs — Everything you need to know.
      </h2>
<div className="space-y-4">

<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-[#0a0a0a] border-white/5">
<summary className="flex md:p-6 cursor-pointer select-none md:text-base text-sm font-medium text-white font-montserrat pt-5 pr-5 pb-5 pl-5 items-center justify-between">How fast can we expect results?<iconify-icon className="transition-transform group-open:rotate-180 text-gray-500" height="20" icon="solar:alt-arrow-down-linear" style={{color: 'rgb(107, 114, 128)'}} width="20"></iconify-icon></summary>
<div className="px-5 md:px-6 pb-6 text-sm text-gray-400 leading-relaxed font-light border-t pt-4 border-white/5">
            Most clients see initial lead flow within 30 days of launch.
          </div>
</details>

<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-[#0a0a0a] border-white/5">
<summary className="flex md:p-6 cursor-pointer select-none md:text-base text-sm font-medium text-white font-montserrat pt-5 pr-5 pb-5 pl-5 items-center justify-between">
            Do you work with any industry?
            <iconify-icon className="transition-transform group-open:rotate-180 text-gray-500" height="20" icon="solar:alt-arrow-down-linear" style={{color: 'rgb(107, 114, 128)'}} width="20"></iconify-icon>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-gray-400 leading-relaxed font-light border-t pt-4 border-white/5">
            We partner with businesses across a wide range of industries. While we don't limit ourselves to a specific niche, we specialize in working with service-based businesses and agencies that offer high-value services (typically $5,000+). This allows us to focus on clients who are ready to invest in strategies that deliver meaningful results.
          </div>
</details>

<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-[#0a0a0a] border-white/5">
<summary className="flex md:p-6 cursor-pointer select-none md:text-base text-sm font-medium text-white font-montserrat pt-5 pr-5 pb-5 pl-5 items-center justify-between">
            What is the guarantee exactly?
            <svg className="transition-transform group-open:rotate-180 w-[20px] h-[20px]" data-icon-replaced="true" data-icon-set="solar" data-solar="alt-arrow-down-linear" height="20" strokeWidth="2" style={{color: 'rgb(107, 114, 128)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m19 9l-7 6l-7-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-gray-400 leading-relaxed font-light border-t pt-4 border-white/5">
            If we don't hit the agreed-upon KPI (10-15 Qualified Sales Calls) within 30 days, we work for free until we do. It's written in the contract.
          </div>
</details>

<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-[#0a0a0a] border-white/5">
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-medium font-montserrat select-none text-white text-sm md:text-base">
            How much of my time is required?
            <iconify-icon className="transition-transform group-open:rotate-180 text-gray-500" height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-gray-400 leading-relaxed font-light border-t pt-4 border-white/5">
            Very little. We need about 30 minutes for onboarding. After that, we just need you to handle the qualified calls we generate.
          </div>
</details>
</div>
<p className="text-center text-sm mt-8 text-gray-500">
        Don't see what you're looking for?
        <a className="underline transition-all decoration-rose-900 hover:decoration-rose-400 text-rose-400" href="/#bookcall">
          Get in touch
        </a>
        .
      </p>
</section>

<section className="md:py-24 md:px-6 max-w-7xl mr-auto ml-auto pt-16 pr-4 pb-16 pl-4" id="bookcall">
<div className="text-center mb-10 md:mb-16">
<p className="md:text-lg text-base font-light text-gray-400 max-w-2xl mr-auto ml-auto" onclick="window.location.href='/#bookcall'" role="button">
          Book a no-commitment discovery call to discuss how we can help you
          grow.
        </p>
</div>
<div className="w-full bg-[#0a0a0a] rounded-[2rem] border border-white/5 shadow-sm overflow-hidden">

<div className="calendly-inline-widget" data-processed="true" data-url="https://calendly.com/ahmed-27lines/30min?hide_gdpr_banner=1&amp;background_color=0a0a0a&amp;text_color=ffffff&amp;primary_color=f43f5e" style={{position: 'relative', minWidth: '320px', height: '700px'}}><div className="calendly-spinner"><div className="calendly-bounce1"></div><div className="calendly-bounce2"></div><div className="calendly-bounce3"></div></div><iframe className="" frameborder="0" height="100%" src="https://calendly.com/ahmed-27lines/30min?embed_domain=&amp;embed_type=Inline&amp;hide_gdpr_banner=1&amp;background_color=0a0a0a&amp;text_color=ffffff&amp;primary_color=f43f5e" title="Select a Date &amp; Time - Calendly" width="100%"></iframe></div>


</div>
</section>
</main>

<footer className="border-t pt-12 md:pt-16 pb-8 md:pb-10 px-4 md:px-6 bg-[#050505] border-white/5">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-10">

<div className="text-center md:text-left">
<a className="font-serif text-2xl tracking-tight italic font-medium text-white" href="#">
          27Lines.
        </a>
<p className="text-xs mt-3 max-w-xs font-light text-gray-500 mx-auto md:mx-0">
          Scaling revenue for ambitious brands through intelligent ecosystems.
        </p>
</div>

<div className="flex flex-col gap-3 text-center md:text-right">
<a className="text-sm transition-colors font-medium text-gray-400 hover:text-rose-400" href="#">
          Services
        </a>
<a className="text-sm transition-colors font-medium text-gray-400 hover:text-rose-400" href="#">
          Case Studies
        </a>
<a className="text-sm transition-colors font-medium text-gray-400 hover:text-rose-400" href="#">
          About
        </a>
<a className="text-sm transition-colors font-medium text-gray-400 hover:text-rose-400" href="#">
          Contact
        </a>
</div>
</div>
<div className="max-w-7xl mx-auto mt-12 md:mt-16 pt-8 border-t text-center text-[10px] md:text-xs font-montserrat border-white/5 text-gray-600">
<p>© 2024 27Lines. All rights reserved.</p>
</div>
</footer>

    </>
  );
}
