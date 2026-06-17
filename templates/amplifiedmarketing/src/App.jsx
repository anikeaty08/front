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
<nav className="pointer-events-auto glass flex gap-4 md:gap-10 shadow-black/50 transition-all duration-300 w-full max-w-5xl rounded-full pt-2 pr-2 pb-2 pl-5 shadow-2xl gap-x-4 gap-y-4 items-center justify-between">

<a className="group flex items-center gap-2 shrink-0" href="#">
<span className="md:text-2xl group-hover:text-rose-500 transition-colors text-xl font-medium italic text-white tracking-tight font-serif">
            Amplified Marketing
          </span>
</a>

<a className="text-xs px-4 py-2 md:px-5 md:py-2.5 rounded-full transition-all duration-300 flex items-center gap-2 font-montserrat font-medium group shadow-md hover:shadow-lg hover:shadow-rose-500/20 bg-white text-black hover:bg-rose-600 hover:text-white shrink-0" href="#contact">
          Get Started
          <svg className="lucide lucide-arrow-right w-3 h-3 transition-transform group-hover:translate-x-0.5 hidden sm:block" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</nav>
</header>
<main className="md:pt-32 md:px-6 max-w-7xl mr-auto ml-auto pt-28 pr-4 pb-24 pl-4">

<section className="relative rounded-[2rem] md:rounded-[2.5rem] p-6 py-12 md:p-12 lg:p-20 border shadow-2xl shadow-black/20 overflow-hidden text-center mb-12 md:mb-16 bg-[#0A0A0A] border-white/5">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:3rem_3rem] md:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-30"></div>
<div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">

<div className="animate-fade-up text-[10px] uppercase md:mb-8 font-semibold text-rose-400 tracking-widest font-montserrat bg-rose-950/30 w-fit border-rose-900/50 border rounded-full mb-6 pt-1 pr-3 pb-1 pl-3">
            Attention MORTGAGE PROFESSIONALS
          </div>

<h1 className="animate-fade-up delay-100 sm:text-5xl md:text-7xl lg:text-[5rem] leading-[1.1] md:leading-[0.95] md:mb-8 text-4xl font-medium text-white tracking-tighter font-serif mb-6">
            We'll
            <span className="bg-clip-text italic text-transparent bg-gradient-to-r from-rose-500 to-orange-400 pr-2">
              Add An Extra 8-12 Funded Loans
            </span>
            in
            <br className="hidden md:block"/>
            30 Days or
            <span className="md:border-b-4 border-rose-500/30 border-b-2">
              You Don't Pay.
            </span>
</h1>

<p className="animate-fade-up delay-200 md:text-xl leading-relaxed md:mb-12 text-base font-light text-gray-400 max-w-2xl mb-8 pr-2 pl-2">
            Our proprietary "Mortgage Pipeline Machine" adds an extra 8-12
            funded loans per month to your business without you lifting a
            finger.
          </p>

<div className="animate-fade-up delay-300 relative w-full max-w-4xl aspect-video rounded-xl md:rounded-[2rem] border-2 md:border-4 shadow-2xl overflow-hidden mb-8 md:mb-12 group cursor-pointer ring-1 bg-black border-white/10 shadow-black ring-white/5">

<img alt="Process Video" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-all duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&amp;fit=crop&amp;q=80&amp;w=2426"/>

<div className="flex absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="w-14 h-14 md:w-24 md:h-24 backdrop-blur-md rounded-full flex items-center justify-center border shadow-[0_0_40px_rgba(0,0,0,0.5)] transition-all duration-300 group-hover:scale-110 group-hover:bg-white/10 bg-black/40 border-white/10">
<div className="w-10 h-10 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-lg pl-0.5 md:pl-1 bg-white text-black">
<svg className="lucide lucide-play w-4 h-4 md:w-7 md:h-7 fill-black" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>
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
<a className="w-full sm:w-auto px-8 py-3.5 md:py-4 rounded-full text-sm hover:shadow-xl hover:shadow-rose-500/20 transition-all duration-300 flex items-center justify-center gap-2 font-montserrat font-medium group bg-white text-black hover:bg-rose-600 hover:text-white" href="#contact">
              Get Started
              <svg className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
<a className="w-full sm:w-auto border px-8 py-3.5 md:py-4 rounded-full text-sm transition-all duration-300 font-montserrat font-medium flex items-center justify-center gap-2 bg-transparent border-white/10 text-white hover:border-white/30 hover:bg-white/5" href="#process">
              Learn More
            </a>
</div>

<p className="animate-fade-up delay-500 text-[10px] md:text-xs font-montserrat text-gray-500">
            Book a Free Strategy Session. No credit card required.
          </p>
</div>
</section>

<div className="md:py-12 md:mb-20 text-center w-full border-white/5 border-b mb-16 pt-8 pb-8">
<h3 className="md:text-2xl text-xl text-white font-serif mb-2">
    Trusted by 50+ Mortgage Companies
  </h3>
<p className="text-[10px] md:text-xs uppercase md:mb-10 text-gray-500 tracking-widest font-montserrat mb-8">
    Join the fastest-growing mortgage professionals working with Amplified
    Marketing
  </p>
<div className="marquee-mask relative overflow-hidden">
<div className="flex animate-infinite-scroll w-max gap-x-10 gap-y-10">
<div className="flex gap-10 md:gap-16 md:px-8 md:scale-100 opacity-50 pr-4 pl-4 grayscale invert scale-90 items-center">
<div className="flex items-center gap-2">
<img alt="The Mortgage Centre" className="h-8 md:h-10 w-auto" src="https://storage.googleapis.com/msgsndr/doN09zfxOw1ZI3Ik4OBe/media/697cd0078b2c077998bd7af7.jpg"/>
<span className="font-bold text-base md:text-lg">The Mortgage Centre</span>
</div>
<div className="flex items-center gap-2">
<img alt="Dominion Lending Centres" className="h-8 md:h-10 w-auto" src="https://storage.googleapis.com/msgsndr/doN09zfxOw1ZI3Ik4OBe/media/697cd0071f68d103644c55f9.jpeg"/>
<span className="font-bold text-base md:text-lg">Dominion Lending Centres</span>
</div>
<div className="flex items-center gap-2">
<img alt="Centum Financial" className="h-8 md:h-10 w-auto" src="https://storage.googleapis.com/msgsndr/doN09zfxOw1ZI3Ik4OBe/media/697cd007a413e8fe96e33132.webp"/>
<span className="font-bold text-base md:text-lg">Centum Financial</span>
</div>
<div className="flex items-center gap-2">
<img alt="Freedom Mortgage" className="h-8 md:h-10 w-auto" src="https://storage.googleapis.com/msgsndr/doN09zfxOw1ZI3Ik4OBe/media/697cd00766e7ca619e2c959c.jpg"/>
<span className="font-bold text-base md:text-lg">Freedom Mortgage</span>
</div>
<div className="flex items-center gap-2">
<img alt="Loan Factory" className="h-8 md:h-10 w-auto" src="https://storage.googleapis.com/msgsndr/doN09zfxOw1ZI3Ik4OBe/media/697cd0071f68d132934c55f8.jpg"/>
<span className="font-bold text-base md:text-lg">Loan Factory</span>
</div>
<div className="flex items-center gap-2">
<img alt="The Mortgage Group" className="h-8 md:h-10 w-auto" src="https://storage.googleapis.com/msgsndr/doN09zfxOw1ZI3Ik4OBe/media/697cd0075accfa41c122f8fa.jpg"/>
<span className="font-bold text-base md:text-lg">The Mortgage Group</span>
</div>
<div className="flex items-center gap-2">
<img alt="Mortgage Alliance" className="h-8 md:h-10 w-auto" src="https://storage.googleapis.com/msgsndr/doN09zfxOw1ZI3Ik4OBe/media/697cd00750158b2b1abf0957.jpg"/>
<span className="font-bold text-base md:text-lg">Mortgage Alliance</span>
</div>
<div className="flex items-center gap-2">
<img alt="Real Mortgage Associates" className="h-8 md:h-10 w-auto" src="https://storage.googleapis.com/msgsndr/doN09zfxOw1ZI3Ik4OBe/media/697cd0075accfa2e7622f8fb.png"/>
<span className="font-bold text-base md:text-lg">Real Mortgage Associates</span>
</div>
<div className="flex items-center gap-2">
<img alt="Cardinal Financial" className="h-8 md:h-10 w-auto" src="https://storage.googleapis.com/msgsndr/doN09zfxOw1ZI3Ik4OBe/media/697cd00766e7ca9d9f2c959b.jpg"/>
<span className="font-bold text-base md:text-lg">Cardinal Financial</span>
</div>
<div className="flex items-center gap-2">
<img alt="Simplify Home Loans" className="h-8 md:h-10 w-auto" src="https://storage.googleapis.com/msgsndr/doN09zfxOw1ZI3Ik4OBe/media/697cd0071311f6d035ee854b.png"/>
<span className="font-bold text-base md:text-lg">Simplify Home Loans</span>
</div>
</div>
<div className="flex gap-10 md:gap-16 md:px-8 md:scale-100 opacity-50 pr-4 pl-4 grayscale invert scale-90 items-center">
<div className="flex items-center gap-2">
<img alt="Invis" className="h-8 md:h-10 w-auto" src="https://storage.googleapis.com/msgsndr/doN09zfxOw1ZI3Ik4OBe/media/697cd0071fd8272627eb3c13.png"/>
<span className="font-bold text-base md:text-lg">Invis</span>
</div>
<div className="flex items-center gap-2">
<img alt="Mortgage Architects" className="h-8 md:h-10 w-auto" src="https://storage.googleapis.com/msgsndr/doN09zfxOw1ZI3Ik4OBe/media/697cd007a413e81340e33131.png"/>
<span className="font-bold text-base md:text-lg">Mortgage Architects</span>
</div>
<div className="flex items-center gap-2">
<img alt="Kingdom Mortgage" className="h-8 md:h-10 w-auto" src="https://storage.googleapis.com/msgsndr/doN09zfxOw1ZI3Ik4OBe/media/697cd00750158bfd27bf0956.png"/>
<span className="font-bold text-base md:text-lg">Kingdom Mortgage</span>
</div>
<div className="flex items-center gap-2">
<img alt="Loan Depot" className="h-8 md:h-10 w-auto" src="https://storage.googleapis.com/msgsndr/doN09zfxOw1ZI3Ik4OBe/media/697cd0071f68d1cc8d4c55fa.jpg"/>
<span className="font-bold text-base md:text-lg">Loan Depot</span>
</div>
<div className="flex items-center gap-2">
<img alt="Rocket Mortgage" className="h-8 md:h-10 w-auto" src="https://storage.googleapis.com/msgsndr/doN09zfxOw1ZI3Ik4OBe/media/697cd007d6f4974f4e0f7b9a.jpg"/>
<span className="font-bold text-base md:text-lg">Rocket Mortgage</span>
</div>
<div className="flex items-center gap-2">
<img alt="NEXA Mortgage" className="h-8 md:h-10 w-auto" src="https://storage.googleapis.com/msgsndr/doN09zfxOw1ZI3Ik4OBe/media/697cd0071f68d156184c55fb.png"/>
<span className="font-bold text-base md:text-lg">NEXA Mortgage</span>
</div>
<div className="flex items-center gap-2">
<img alt="Mortgage Alliance" className="h-8 md:h-10 w-auto" src="https://storage.googleapis.com/msgsndr/doN09zfxOw1ZI3Ik4OBe/media/697cd007d6f4975b340f7b99.svg"/>
<span className="font-bold text-base md:text-lg">Mortgage Alliance</span>
</div>
<div className="flex items-center gap-2">
<img alt="Real Mortgage Associates" className="h-8 md:h-10 w-auto" src="https://storage.googleapis.com/msgsndr/doN09zfxOw1ZI3Ik4OBe/media/697cd007f7a877709b78e8cd.svg"/>
<span className="font-bold text-base md:text-lg">Real Mortgage Associates</span>
</div>
</div>
</div>
</div>
</div>

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
<h3 className="text-lg md:text-xl font-montserrat font-semibold mb-2 md:mb-3 text-white">
              Referral Dependency
            </h3>
<p className="text-gray-400 font-light leading-relaxed text-sm">
              You're tired of relying on realtors who only send business when
              they feel like it.
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
<h3 className="text-lg md:text-xl font-montserrat font-semibold mb-2 md:mb-3 text-white">
              Time Poverty
            </h3>
<p className="text-gray-400 font-light leading-relaxed text-sm">
              You spend all day processing current loans, leaving zero time to
              generate new business.
            </p>
</div>

<div className="md:p-8 md:rounded-3xl hover:shadow-2xl hover:shadow-rose-900/10 transition-all duration-300 bg-gradient-to-br from-[#121212] to-[#0a0a0a] rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 shadow-lg shadow-black" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(244,63,94,0.3), rgba(244,63,94,0.05))', '--border-radius-before': '1.5rem'}}>
<div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-5 md:mb-6 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<svg className="lucide lucide-clock w-5 h-5 md:w-6 md:h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6v6l4 2"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
</div>
<h3 className="text-lg md:text-xl font-montserrat font-semibold mb-2 md:mb-3 text-white">
              Revenue Rollercoaster
            </h3>
<p className="text-gray-400 font-light leading-relaxed text-sm">
              Feast or famine cycles make it impossible to hire staff or plan
              for future growth.
            </p>
</div>
</div>
</section>

<section className="py-12 md:py-20">
<div className="text-center mb-10 md:mb-16 px-4">
<h2 className="md:text-5xl text-3xl font-medium text-white tracking-tight font-serif mb-4">
            Why Choose Amplified Marketing
          </h2>
<p className="text-gray-400 max-w-2xl mx-auto font-light text-sm md:text-base">
            We use a unique Mortgage Pipeline Machine that others simply can't
            replicate.
          </p>
</div>
<div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">

<div className="group md:rounded-3xl md:p-8 overflow-hidden md:h-80 flex flex-col transition-all hover:border-rose-500/30 bg-gradient-to-br from-[#0f0f0f] to-[#050505] h-64 border border-white/5 rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 relative">
<h3 className="md:text-2xl md:mb-4 text-xl font-medium text-white font-montserrat mb-3">
              Geographic Exclusivity
            </h3>
<p className="text-gray-400 font-light text-sm leading-relaxed z-10 relative">
              We only work with ONE client per defined geographic territory. You
              own your market.
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
<h3 className="text-xl md:text-2xl font-montserrat font-medium mb-3 md:mb-4 text-white">
              You Own Everything
            </h3>
<p className="text-gray-400 font-light text-sm leading-relaxed z-10 relative">
              No leasing. You own the leads, the system, and the data. Forever.
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
<h3 className="text-xl md:text-2xl font-montserrat font-medium mb-3 md:mb-4 text-white">
              Guaranteed Results
            </h3>
<p className="text-gray-400 font-light text-sm leading-relaxed z-10 relative">
              96 qualified appointments in 90 days or we refund your retainer.
              No questions asked.
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
<a className="w-full sm:w-auto justify-center px-8 py-3.5 rounded-full text-sm transition-all duration-300 font-montserrat font-medium flex items-center gap-2 bg-white text-black hover:bg-rose-600 hover:text-white" href="#contact">
            Book a Call
            <svg className="lucide lucide-phone w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
</svg>
</a>
</div>
</section>

<section className="py-16 md:py-24 px-4 md:px-6 rounded-[2rem] md:rounded-[2.5rem] border shadow-2xl shadow-black/40 text-center bg-[#0a0a0a] border-white/5">
<div className="max-w-3xl mx-auto">
<div className="inline-flex justify-center mb-6 md:mb-8 text-rose-500">
<svg className="lucide lucide-quote w-8 h-8 md:w-12 md:h-12 fill-current opacity-20" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
<path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
</svg>
</div>
<h3 className="text-2xl md:text-4xl lg:text-5xl font-serif leading-tight mb-8 md:mb-10 italic text-white px-2">
            "We added 8 funded loans within just 45 days of working with
            Amplified Marketing. Their systems are unlike anything we've seen
            before."
          </h3>
<div className="flex flex-col items-center">
<div className="w-12 h-12 md:w-16 md:h-16 rounded-full mb-4 overflow-hidden border-2 shadow-md bg-neutral-800 border-white/10">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div className="font-montserrat font-semibold text-white">
              Sarah Martinez
            </div>
<div className="text-xs md:text-sm font-light text-gray-500">
              Loan Officer, First National Bank
            </div>
</div>
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
              Our team deploys the custom infrastructure, 47 automations, and
              tracking systems in under 14 days.
            </p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-20 h-20 md:w-24 md:h-24 border rounded-full flex items-center justify-center text-xl md:text-2xl font-serif mb-5 md:mb-6 shadow-sm group-hover:border-rose-500 group-hover:text-rose-500 transition-colors bg-[#0a0a0a] border-white/10 text-gray-600">
              2
            </div>
<h3 className="text-lg md:text-xl font-bold font-montserrat mb-2 md:mb-3 text-white">
              We Build The Engine
            </h3>
<p className="text-sm text-gray-400 font-light leading-relaxed max-w-xs px-4 md:px-0">
              Leads book directly into your calendar. You focus on closing
              funded loans.
            </p>
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
<div className="flex justify-center mt-12 md:mt-16">
<a className="w-full sm:w-auto justify-center px-10 py-4 rounded-full text-sm transition-all duration-300 font-montserrat font-medium flex items-center gap-2 shadow-lg shadow-black/50 hover:shadow-rose-500/20 bg-white text-black hover:bg-rose-600 hover:text-white" href="#contact">
            Book Your Transformation
            <svg className="lucide lucide-arrow-right w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</section>

<section className="mb-16 md:mb-24 px-0 md:px-6">
<div className="rounded-[2rem] md:rounded-[2.5rem] p-6 py-10 md:p-20 border shadow-2xl shadow-black/20 text-center relative overflow-hidden bg-[#0a0a0a] border-white/5">
<div className="relative z-10">
<h2 className="text-2xl md:text-5xl font-serif font-medium mb-4 md:mb-6 tracking-tight text-white">
              Exactly How We Scale Funded Loans
            </h2>
<p className="text-sm md:text-lg text-gray-400 font-light mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
              Watch the video below to learn the exact process we follow to
              scale revenue.
            </p>
<div className="relative w-full max-w-4xl mx-auto aspect-video rounded-xl md:rounded-[2rem] border-2 md:border-4 shadow-2xl overflow-hidden mb-8 md:mb-12 group cursor-pointer ring-1 bg-black border-white/10 ring-white/5">
<img alt="Process Deep Dive" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-all duration-700" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 md:w-24 md:h-24 backdrop-blur-md rounded-full flex items-center justify-center border shadow-xl transition-all duration-300 group-hover:scale-110 bg-white/10 border-white/20">
<div className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-sm pl-1 bg-white text-black">
<svg className="lucide lucide-play w-5 h-5 md:w-7 md:h-7 fill-current" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>
</svg>
</div>
</div>
</div>
</div>
<div className="flex justify-center">
<a className="w-full sm:w-auto justify-center px-10 py-4 rounded-full text-sm transition-all duration-300 font-montserrat font-medium flex items-center gap-2 shadow-lg shadow-black/50 hover:shadow-rose-500/20 bg-white text-black hover:bg-rose-600 hover:text-white" href="#contact">
                Apply Now
                <svg className="lucide lucide-arrow-right w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-20 -mx-4 md:-mx-6 px-4 md:px-6 rounded-[2.5rem] md:rounded-[3rem] bg-[#0a0a0a] border-y border-white/5">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl md:text-5xl text-center mb-10 md:mb-16 tracking-tight font-serif font-medium text-white">
            What's Included
          </h2>
<div className="rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-16 border shadow-2xl shadow-black relative overflow-hidden bg-[#111] border-white/5">
<div className="absolute top-0 right-0 w-[20rem] h-[20rem] md:w-[40rem] md:h-[40rem] bg-gradient-to-b to-transparent rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none from-rose-900/10"></div>
<div className="relative z-10 flex flex-col items-center">
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
<svg className="lucide lucide-check w-3.5 h-3.5 md:w-5 md:h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="font-medium font-montserrat text-sm md:text-lg text-gray-300">
                      Custom CRM Setup
                    </span>
</li>
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<svg className="lucide lucide-check w-3.5 h-3.5 md:w-5 md:h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="font-medium font-montserrat text-sm md:text-lg text-gray-300">
                      47 Pre-built Automations
                    </span>
</li>
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<svg className="lucide lucide-check w-3.5 h-3.5 md:w-5 md:h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="font-medium font-montserrat text-sm md:text-lg text-gray-300">
                      Speed-to-Lead Under 60s
                    </span>
</li>
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<svg className="lucide lucide-check w-3.5 h-3.5 md:w-5 md:h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="font-medium font-montserrat text-sm md:text-lg text-gray-300">
                      Show-up Maximization Sequences
                    </span>
</li>
</ul>
<ul className="space-y-4 md:space-y-6">
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<svg className="lucide lucide-check w-3.5 h-3.5 md:w-5 md:h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="font-medium font-montserrat text-sm md:text-lg text-gray-300">
                      Geographic Exclusivity
                    </span>
</li>
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<svg className="lucide lucide-check w-3.5 h-3.5 md:w-5 md:h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="font-medium font-montserrat text-sm md:text-lg text-gray-300">
                      Campaign Optimization
                    </span>
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
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<svg className="lucide lucide-check w-3.5 h-3.5 md:w-5 md:h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="font-bold font-montserrat text-sm md:text-lg border-b-2 text-white border-rose-500/40">
                      96 Appointments in 90 Days
                    </span>
</li>
</ul>
</div>
<div className="flex flex-col items-center w-full">
<a className="w-full md:w-auto text-base md:text-lg px-8 md:px-12 py-4 md:py-5 rounded-full transition-all duration-300 shadow-xl font-montserrat font-medium flex items-center justify-center gap-3 group bg-white text-black hover:bg-rose-600 hover:text-white shadow-black/50" href="#contact">
                  Secure Your Growth Partner
                  <svg className="lucide lucide-arrow-right w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
<p className="mt-4 md:mt-6 text-xs md:text-sm font-montserrat text-gray-500">
                  No long-term contracts. Cancel anytime.
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24">
<h2 className="text-3xl md:text-5xl text-center mb-10 md:mb-16 tracking-tight font-serif font-medium text-white">
          What People Are Saying
        </h2>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-6 rounded-2xl border shadow-sm bg-[#0a0a0a] border-white/5">
<p className="text-gray-400 text-sm leading-relaxed italic mb-6">
              "Honestly, I was skeptical at first. But the numbers don't lie.
              Our calendar is completely full for the next 3 weeks."
            </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-800"></div>
<div>
<div className="text-sm font-bold text-white">Michael Chen</div>
<div className="text-xs text-gray-500">
                  Branch Manager, Wells Fargo
                </div>
</div>
</div>
</div>

<div className="p-6 rounded-2xl border shadow-sm bg-[#0a0a0a] border-white/5">
<p className="text-gray-400 text-sm leading-relaxed italic mb-6">
              "The best investment we made this year. The ROI tracking is
              phenomenal, we know exactly where every cent goes."
            </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-800"></div>
<div>
<div className="text-sm font-bold text-white">Jennifer Walsh</div>
<div className="text-xs text-gray-500">
                  Mortgage Broker, Independent
                </div>
</div>
</div>
</div>

<div className="p-6 rounded-2xl border shadow-sm bg-[#0a0a0a] border-white/5">
<p className="text-gray-400 text-sm leading-relaxed italic mb-6">
              "Amplified Marketing team are wizards. They completely revamped
              our acquisition channel and lowered CAC by 40%."
            </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-800"></div>
<div>
<div className="text-sm font-bold text-white">David Rodriguez</div>
<div className="text-xs text-gray-500">
                  Senior Loan Officer, Rocket Mortgage
                </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 grid lg:grid-cols-2 gap-10 md:gap-16 items-center border-t border-white/5">
<div className="order-2 lg:order-1">
<h2 className="md:text-5xl md:mb-8 text-3xl font-medium text-white tracking-tight font-serif mb-6">
            Hi, I'm Hezekiah
          </h2>
<div className="space-y-4 md:space-y-6 text-sm md:text-base text-gray-400 font-light leading-relaxed">
<p className="">
              I founded Amplified Marketing with one mission: to eliminate feast
              or famine cycles for mortgage professionals.
            </p>
<p className="">
              After managing millions in ad spend across financial services, I
              realized most agencies are broken. They focus on vanity metrics
              like "brand awareness" instead of funded loans. We built the
              Mortgage Pipeline Machine to change that.
            </p>
</div>
<button className="mt-6 md:mt-8 font-semibold border-b pb-0.5 transition-all text-rose-400 border-rose-900 hover:border-rose-400">
            Let's Talk!
          </button>
</div>
<div className="relative order-1 lg:order-2 h-64 md:h-[500px] w-full rounded-[2rem] overflow-hidden bg-neutral-900">
<img alt="Founder" className="hover:grayscale-0 transition-all duration-700 hover:opacity-100 opacity-80 w-full h-full object-contain grayscale" src="https://storage.googleapis.com/msgsndr/doN09zfxOw1ZI3Ik4OBe/media/697b9cf204b05bc553570787.jpeg"/>
</div>
</section>

<section className="py-16 md:py-20 mb-16 md:mb-20 rounded-[2rem] md:rounded-[2.5rem] text-center px-4 md:px-6 relative overflow-hidden bg-[#0a0a0a] border border-white/5" id="contact">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-rose-950/40 via-transparent to-transparent"></div>
<div className="relative z-10 max-w-2xl mx-auto">
<h2 className="text-3xl md:text-5xl mb-4 md:mb-6 tracking-tight font-serif font-medium text-white">
            Get Your Free Audit
          </h2>
<p className="text-base md:text-lg mb-8 md:mb-10 font-light text-gray-400">
            We'll analyze your current funnel and show you exactly where you're
            leaving money on the table. No obligation.
          </p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
<input className="flex-1 border rounded-full px-6 py-3.5 md:py-4 placeholder-gray-600 focus:outline-none focus:border-rose-500 transition-colors backdrop-blur-sm bg-white/5 border-white/10 text-white" placeholder="Enter your email" type="email"/>
<button className="md:py-4 hover:bg-rose-500 transition-colors shadow-lg shadow-black/30 font-bold text-black hover:text-white bg-white rounded-full pt-3.5 pr-8 pb-3.5 pl-8" type="button">
              Get Audit
            </button>
</form>
</div>
</section>

<section className="max-w-3xl mx-auto py-8 md:py-10 mb-16 md:mb-24 px-2 md:px-6">
<h2 className="text-2xl md:text-3xl text-center mb-10 md:mb-12 tracking-tight font-serif font-medium text-white">
          FAQs — Everything you need to know.
        </h2>
<div className="space-y-4">

<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-[#0a0a0a] border-white/5">
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-medium font-montserrat select-none text-white text-sm md:text-base">
              How fast can we expect results?
              <svg className="lucide lucide-chevron-down w-4 h-4 md:w-5 md:h-5 transition-transform group-open:rotate-180 text-gray-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-gray-400 leading-relaxed font-light border-t pt-4 border-white/5">
              Most clients see initial lead flow within the first week of
              launch. Full optimization usually occurs by month 2, scaling
              aggressively in month 3.
            </div>
</details>

<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-[#0a0a0a] border-white/5">
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-medium font-montserrat select-none text-white text-sm md:text-base">
              Do you work with any loan officer?
              <svg className="lucide lucide-chevron-down w-4 h-4 md:w-5 md:h-5 transition-transform group-open:rotate-180 text-gray-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-gray-400 leading-relaxed font-light border-t pt-4 border-white/5">
              We specialize exclusively in Mortgage Professionals. This allows
              us to maintain our high success rate and revenue guarantees.
            </div>
</details>

<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-[#0a0a0a] border-white/5">
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-medium font-montserrat select-none text-white text-sm md:text-base">
              What is the guarantee exactly?
              <svg className="lucide lucide-chevron-down w-4 h-4 md:w-5 md:h-5 transition-transform group-open:rotate-180 text-gray-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-gray-400 leading-relaxed font-light border-t pt-4 border-white/5">
              If we don't hit the agreed-upon KPI (96 qualified appointments)
              within 90 days, we refund your retainer payments. It's written in
              the contract.
            </div>
</details>

<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-[#0a0a0a] border-white/5">
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-medium font-montserrat select-none text-white text-sm md:text-base">
              How much of my time is required?
              <svg className="lucide lucide-chevron-down w-4 h-4 md:w-5 md:h-5 transition-transform group-open:rotate-180 text-gray-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-gray-400 leading-relaxed font-light border-t pt-4 border-white/5">
              Very little. We need about 60 minutes for onboarding. After that,
              we just need you to handle the leads we generate.
            </div>
</details>
</div>
<p className="text-center text-sm mt-8 text-gray-500">
          Don't see what you're looking for?
          <a className="underline transition-all text-rose-400 decoration-rose-900 hover:decoration-rose-400" href="#">
            Get in touch
          </a>
          .
        </p>
</section>

<section className="mx-auto py-16 md:py-24 px-4 md:px-6 max-w-7xl" id="book-call">
<div className="text-center mb-10 md:mb-16">
<h2 className="text-3xl md:text-5xl font-serif font-medium text-white mb-6 tracking-tight">
            Book a Call
          </h2>
<p className="text-base md:text-lg text-gray-400 font-light max-w-2xl mx-auto">
            Book a no-commitment discovery call to discuss how we can help you
            grow.
          </p>
</div>
<div className="w-full bg-[#0a0a0a] rounded-[2rem] border border-white/5 shadow-sm overflow-hidden">

<div className="calendly-inline-widget w-full" data-processed="true" data-url="https://calendly.com/lucas-clientascension/test?hide_gdpr_banner=1&amp;primary_color=e11d48&amp;background_color=0a0a0a&amp;text_color=ffffff" style={{position: 'relative', minWidth: '320px', height: '1000px', width: '100%'}}>
<div className="calendly-spinner">
<div className="calendly-bounce1"></div>
<div className="calendly-bounce2"></div>
<div className="calendly-bounce3"></div>
</div>
<iframe className="" frameborder="0" height="100%" src="https://calendly.com/lucas-clientascension/test?embed_domain=&amp;embed_type=Inline&amp;hide_gdpr_banner=1&amp;primary_color=e11d48&amp;background_color=0a0a0a&amp;text_color=ffffff" title="Select a Date &amp; Time - Calendly" width="100%"></iframe>
</div>


</div>
</section>
</main>

<footer className="border-t pt-12 md:pt-16 pb-8 md:pb-10 px-4 md:px-6 bg-[#050505] border-white/5">
<div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-10 max-w-7xl mr-auto ml-auto gap-x-8 gap-y-8 items-center justify-between">

<div className="md:text-left text-center">
<a className="text-2xl font-medium italic text-white tracking-tight font-serif" href="#">
            Amplified Marketing
          </a>
<p className="md:mx-0 text-xs font-light text-gray-500 max-w-xs mt-3 mr-auto ml-auto">
            Installing predictable revenue systems for mortgage professionals
            who refuse to accept feast or famine.
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
<div className="md:mt-16 text-[10px] md:text-xs text-gray-600 font-montserrat text-center max-w-7xl border-white/5 border-t mt-12 mr-auto ml-auto pt-8">
<p className="">© 2026 Amplified Marketing Inc. All rights reserved.</p>
</div>
</footer>


    </>
  );
}
