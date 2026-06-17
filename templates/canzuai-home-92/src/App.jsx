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
      

<header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 md:pt-6 md:px-6 pointer-events-none">
<nav className="pointer-events-auto glass rounded-full pl-5 pr-2 py-2 flex items-center justify-between gap-4 md:gap-10 shadow-2xl shadow-black/50 w-full max-w-5xl transition-all duration-300">

<a className="group flex items-center gap-2 shrink-0" href="#">
<span className="md:text-2xl group-hover:text-rose-500 transition-colors text-xl font-medium italic text-white tracking-tight font-serif">CanzuAI</span>
</a>

</nav>
</header>
<main className="md:pt-32 md:px-6 max-w-7xl mr-auto ml-auto pt-28 pr-4 pb-24 pl-4">

<section className="relative rounded-[2rem] md:rounded-[2.5rem] p-6 py-12 md:p-12 lg:p-20 border shadow-2xl shadow-black/20 overflow-hidden text-center mb-12 md:mb-16 bg-[#0A0A0A] border-white/5">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:3rem_3rem] md:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-30"></div>
<div className="flex flex-col z-10 max-w-5xl mr-auto ml-auto relative items-center">


<h1 className="animate-fade-up delay-100 sm:text-5xl md:text-7xl lg:text-[5rem] leading-[1.1] md:leading-[0.95] md:mb-8 text-4xl font-medium text-white tracking-tighter font-serif mb-6">We'll build an <span className="bg-clip-text italic text-transparent bg-gradient-to-r from-rose-500 to-orange-400 pr-2">AI-optimized sales system</span> and guarantee <br className="hidden md:block"/> 10 new clients in 90 days or <span className="md:border-b-4 border-rose-500/30 border-b-2">
            You Don't Pay.
          </span> </h1>

<p className="animate-fade-up delay-200 md:text-xl leading-relaxed md:mb-12 text-base font-light text-gray-400 max-w-2xl mb-8 pr-2 pl-2">Custom built AI systems that work 24/7, so you don't have to.</p>

<div className="animate-fade-up delay-300 relative w-full max-w-4xl aspect-video rounded-xl md:rounded-[2rem] border-2 md:border-4 shadow-2xl overflow-hidden mb-8 md:mb-12 group cursor-pointer ring-1 bg-black border-white/10 shadow-black ring-white/5">

<img alt="Process Video" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-all duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&amp;fit=crop&amp;q=80&amp;w=2426"/>

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-14 h-14 md:w-24 md:h-24 backdrop-blur-md rounded-full flex items-center justify-center border shadow-[0_0_40px_rgba(0,0,0,0.5)] transition-all duration-300 group-hover:scale-110 group-hover:bg-white/10 bg-black/40 border-white/10">
<div className="w-10 h-10 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-lg pl-0.5 md:pl-1 bg-white text-black">
<svg className="lucide lucide-play w-4 h-4 md:w-7 md:h-7 fill-black" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>
</svg>
</div>
</div>
</div>

<div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 backdrop-blur-md text-[10px] md:text-xs px-2.5 py-1 md:px-3 md:py-1.5 rounded-full font-montserrat flex items-center gap-2 border bg-black/60 text-white border-white/10">
<div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-rose-500 animate-pulse"></div>
            Watch breakdown
          </div>
</div>

<div className="animate-fade-up delay-500 flex flex-col sm:flex-row gap-3 md:gap-4 items-center justify-center w-full mb-6">
<a className="sm:w-auto md:py-4 hover:shadow-xl hover:shadow-rose-500/20 transition-all duration-300 flex items-center justify-center gap-2 group hover:bg-rose-600 hover:text-white text-sm font-medium text-black font-montserrat bg-white w-full rounded-full pt-3.5 pr-8 pb-3.5 pl-8" href="#contact">Book Your Free Audit Call</a>
</div>

<p className="animate-fade-up delay-500 text-[10px] md:text-xs font-montserrat text-gray-500">
          Book a Free Strategy Session. No credit card required.
        </p>
</div>
</section>


<section className="md:py-20 max-w-6xl mr-auto ml-auto pt-12 pb-12">
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
<h3 className="md:text-xl md:mb-3 text-lg font-semibold text-white font-montserrat mb-2">Inconsistent Revenue</h3>
<p className="text-gray-400 font-light leading-relaxed text-sm">
            You never know where your next client is coming from, creating
            revenue rollercoasters that stall growth.
          </p>
</div>

<div className="md:p-8 md:rounded-3xl hover:shadow-2xl hover:shadow-rose-900/10 transition-all duration-300 bg-gradient-to-br from-[#121212] to-[#0a0a0a] rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 shadow-lg" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(244, 63, 94, 0.3), rgba(244, 63, 94, 0.05))', '--border-radius-before': '1.5rem'}}>
<div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-5 md:mb-6 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<svg className="lucide lucide-users w-5 h-5 md:w-6 md:h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<circle className="" cx="9" cy="7" r="4"></circle>
</svg>
</div>
<h3 className="md:text-xl md:mb-3 text-lg font-semibold text-white font-montserrat mb-2">Losing Good Leads</h3>
<p className="leading-relaxed text-sm font-light text-gray-400">Losing potential clients to slow follow-ups or simply having promising leads fall through the cracks.</p>
</div>

<div className="md:p-8 md:rounded-3xl hover:shadow-2xl hover:shadow-rose-900/10 transition-all duration-300 bg-gradient-to-br from-[#121212] to-[#0a0a0a] rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 shadow-lg" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(244, 63, 94, 0.3), rgba(244, 63, 94, 0.05))', '--border-radius-before': '1.5rem'}}>
<div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-5 md:mb-6 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<svg className="lucide lucide-clock w-5 h-5 md:w-6 md:h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6v6l4 2"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
</div>
<h3 className="md:text-xl md:mb-3 text-lg font-semibold text-white font-montserrat mb-2">Drowning in Admin Work</h3>
<p className="leading-relaxed text-sm font-light text-gray-400">You're too busy with day to day admin work for your existing clients to take on more.</p>
</div>
</div>
</section>

<section className="pt-12 pb-12 md:pb-0">
<div className="text-center mb-10 md:mb-16 px-4">
<h2 className="md:text-5xl text-3xl font-medium text-white tracking-tight font-serif mb-4">Why Choose CanzuAI?</h2>
<p className="md:text-base text-sm font-light text-gray-400 max-w-2xl mr-auto ml-auto">We implement a modular process-first workflow that assesses your needs and implements only the tools and automations that will address your specific problems.</p>
</div>
<div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">

<div className="group md:rounded-3xl md:p-8 overflow-hidden md:h-80 flex flex-col transition-all hover:border-rose-500/30 bg-gradient-to-br from-[#0f0f0f] to-[#050505] h-64 border border-white/5 rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 relative">
<h3 className="md:text-2xl md:mb-4 text-xl font-medium text-white font-montserrat mb-3">Customized to you</h3>
<p className="leading-relaxed z-10 text-sm font-light text-gray-400 relative">We don't guess. We first audit your processes to determine the best solutions to implement and only implement those.</p>
<div className="mt-auto self-end group-hover:text-rose-500 transition-colors duration-500 transform group-hover:scale-110 text-white/5">
<svg className="lucide lucide-crosshair w-16 h-16 md:w-24 md:h-24 stroke-[1px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle className="" cx="12" cy="12" r="10"></circle>
<line x1="22" x2="18" y1="12" y2="12"></line>
<line x1="6" x2="2" y1="12" y2="12"></line>
<line x1="12" x2="12" y1="6" y2="2"></line>
<line x1="12" x2="12" y1="22" y2="18"></line>
</svg>
</div>
</div>

<div className="group md:rounded-3xl md:p-8 overflow-hidden md:h-80 flex flex-col transition-all hover:border-rose-500/30 bg-gradient-to-br from-[#0f0f0f] to-[#050505] h-64 border border-white/5 rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 relative">
<h3 className="md:text-2xl md:mb-4 text-xl font-medium text-white font-montserrat mb-3">Easy Analytics</h3>
<p className="text-gray-400 font-light text-sm leading-relaxed z-10 relative">
            Live dashboards. 24/7 access. You see every dollar spent and every
            lead generated in real-time.
          </p>
<div className="mt-auto self-end group-hover:text-rose-500 transition-colors duration-500 transform group-hover:scale-110 text-white/5">
<svg className="lucide lucide-monitor w-16 h-16 md:w-24 md:h-24 stroke-[1px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" width="20" x="2" y="3"></rect>
<line x1="8" x2="16" y1="21" y2="21"></line>
<line x1="12" x2="12" y1="17" y2="21"></line>
</svg>
</div>
</div>

<div className="group md:rounded-3xl md:p-8 overflow-hidden md:h-80 flex flex-col transition-all hover:border-rose-500/30 bg-gradient-to-br from-[#0f0f0f] to-[#050505] h-64 border border-white/5 rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 relative">
<h3 className="md:text-2xl md:mb-4 text-xl font-medium text-white font-montserrat mb-3">Zero Risk</h3>
<p className="text-gray-400 font-light text-sm leading-relaxed z-10 relative">
            We are so confident in our system that we put our own money on the
            line. If we don't hit KPIs, we work for free.
          </p>
<div className="mt-auto self-end group-hover:text-rose-500 transition-colors duration-500 transform group-hover:scale-110 text-white/5">
<svg className="lucide lucide-shield-check w-16 h-16 md:w-24 md:h-24 stroke-[1px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
</div>
</div>
<div className="flex justify-center">
</div>
</section>


<section className="pt-16 pb-16 md:pb-0" id="process">
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
<h3 className="md:text-xl md:mb-3 text-lg font-bold text-white font-montserrat mb-2">We Build The Automations</h3>
<p className="leading-relaxed md:px-0 text-sm font-light text-gray-400 max-w-xs pr-4 pl-4">We deploy custom AI systems that address your specific concerns.</p>
</div>

<div className="flex flex-col group text-center items-center">
<div className="w-20 h-20 md:w-24 md:h-24 border rounded-full flex items-center justify-center text-xl md:text-2xl font-serif mb-5 md:mb-6 shadow-sm group-hover:border-rose-500 group-hover:text-rose-500 transition-colors bg-[#0a0a0a] border-white/10 text-gray-600">
            3
          </div>
<h3 className="md:text-xl md:mb-3 text-lg font-bold text-white font-montserrat mb-2">Continuously Improve</h3>
<p className="leading-relaxed md:px-0 text-sm font-light text-gray-400 max-w-xs pr-4 pl-4">We monitor and adjust the systems, optimizing them for maximum effectiveness.</p>
</div>
</div>
<div className="flex justify-center mt-12 md:mt-16">
</div>
</section>

<section className="mb-16 md:mb-24 px-0 md:px-6">
</section>






<section className="md:py-24 md:px-6 max-w-7xl mr-auto ml-auto pt-16 pr-4 pb-16 pl-4" id="book-call">
<div className="text-center mb-10 md:mb-16">
<h2 className="text-3xl md:text-5xl font-serif font-medium text-white mb-6 tracking-tight">
          Book a Call
        </h2>
<p className="md:text-lg text-base font-light text-gray-400 max-w-2xl mr-auto ml-auto">Book a no-commitment discovery call to discuss how we can improve your workflows.</p>
</div>
<div className="w-full bg-[#0a0a0a] rounded-[2rem] border border-white/5 shadow-sm overflow-hidden">

<div className="calendly-inline-widget w-full" data-processed="true" data-url="https://calendly.com/zunaeda-canzuai/30min" style={{position: 'relative', minWidth: '320px', height: '1000px', width: '100%'}}><div className="calendly-spinner"><div className="calendly-bounce1"></div><div className="calendly-bounce2"></div><div className="calendly-bounce3"></div></div><iframe className="" frameborder="0" height="100%" src="https://calendly.com/zunaeda-canzuai/30min" title="Select a Date &amp; Time - Calendly" width="100%"></iframe></div>


</div>
</section>
</main>

<footer className="md:pt-16 md:pb-10 md:px-6 bg-[#050505] border-white/5 border-t pt-12 pr-4 pb-8 pl-4">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-10">

<div className="text-center md:text-left">
<a className="text-2xl font-medium italic text-white tracking-tight font-serif" href="#">CanzuAI</a>
<p className="md:mx-0 text-xs font-light text-gray-500 max-w-xs mt-3 mr-auto ml-auto"></p>
</div>

<div className="flex flex-col gap-3 text-center md:text-right">
</div>
</div>
<div className="max-w-7xl mx-auto mt-12 md:mt-16 pt-8 border-t text-center text-[10px] md:text-xs font-montserrat border-white/5 text-gray-600">
<p className=""></p>
</div>
</footer>


    </>
  );
}
