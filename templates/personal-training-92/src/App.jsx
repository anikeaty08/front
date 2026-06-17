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



        // Initialize Lucide Icons
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
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center opacity-[0.04]">
<i className="w-[120vw] h-[120vw] text-white" data-lucide="settings" strokeWidth="1"></i>
</div>

<nav className="fixed top-0 w-full z-50 bg-[#0D0D0D]/95 backdrop-blur-md border-b border-[#1E1E1E]">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 relative z-10 group" href="#">
<i className="text-[#C8341A] w-6 h-6 group-hover:rotate-90 transition-transform duration-500" data-lucide="settings" strokeWidth="2"></i>
<span className="font-['Bebas_Neue'] text-2xl text-white tracking-widest mt-1">PERFECT F.I.T.T.E.</span>
</a>

<div className="hidden md:flex items-center gap-10">
<a className="text-[#F0F0F0] text-sm hover:text-[#C8341A] transition-colors" href="#">Programs</a>
<a className="text-[#F0F0F0] text-sm hover:text-[#C8341A] transition-colors" href="#">Philosophy</a>
<a className="text-[#F0F0F0] text-sm hover:text-[#C8341A] transition-colors" href="#">Coaches</a>
<a className="text-[#F0F0F0] text-sm hover:text-[#C8341A] transition-colors" href="#">Workshops</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden lg:block text-[#F0F0F0] text-sm hover:text-[#C8341A] transition-colors mr-2" href="#">Login</a>
<a className="bg-[#C8341A] hover:bg-[#A02914] text-white text-sm font-medium px-6 py-2.5 rounded-full transition-colors flex items-center gap-2" href="#">
                    Contact Us
                </a>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#0A0A0A]">

<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-[#0A0A0A]/80 z-10 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent z-10"></div>
<img alt="Gym Background" className="w-full h-full object-cover object-center grayscale opacity-60" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=2070"/>
</div>
<div className="max-w-7xl mx-auto px-6 w-full relative z-20 flex flex-col lg:flex-row justify-between items-center mt-12">

<div className="max-w-2xl w-full pt-10">
<span className="inline-block bg-[#C8341A] text-white px-4 py-1.5 rounded-full text-xs font-medium tracking-[0.15em] uppercase mb-8 shadow-[0_0_20px_rgba(200,52,26,0.4)]">
                    Perfect FITTE Personal Training
                </span>
<h1 className="font-bebas text-[5rem] md:text-[7rem] leading-[0.85] text-white tracking-tight mb-8 drop-shadow-2xl">
                    PUSH LIMITS,<br/>EMBRACE CHANGE
                </h1>
<p className="text-lg md:text-[1.125rem] text-[#888888] max-w-lg mb-10 leading-relaxed">
                    Hong Kong's Premier Personal Training Expert. Precision coaching for lasting transformation.
                </p>
<div className="flex flex-wrap gap-4">
<a className="bg-[#C8341A] hover:bg-[#A02914] text-white text-lg font-medium px-8 py-4 rounded-full transition-colors inline-flex items-center justify-center" href="#">
                        Get Started
                    </a>
<a className="bg-transparent border-2 border-[#1E1E1E] hover:border-[#F0F0F0] text-[#F0F0F0] text-lg font-medium px-8 py-4 rounded-full transition-colors inline-flex items-center gap-2 justify-center group" href="#">
                        Learn More <i className="w-5 h-5 group-hover:translate-y-1 transition-transform" data-lucide="arrow-down" strokeWidth="1.5"></i>
</a>
</div>
</div>

<div className="hidden lg:block w-[380px] bg-[#1A1A1A] p-8 rounded-[16px] border border-[#1E1E1E] shadow-2xl relative translate-y-[-40px]">
<div className="absolute -top-3 -right-3 w-6 h-6 bg-[#C8341A] rounded-full animate-pulse"></div>
<div className="flex justify-between items-end mb-6 pb-6 border-b border-[#1E1E1E]">
<div>
<div className="font-bebas text-5xl text-[#D4A017] leading-none mb-1">245</div>
<div className="text-[#888888] text-sm uppercase tracking-widest">Clients</div>
</div>
<div className="text-right">
<div className="font-bebas text-5xl text-[#D4A017] leading-none mb-1">102</div>
<div className="text-[#888888] text-sm uppercase tracking-widest">Sessions</div>
</div>
</div>
<div className="mb-6">
<div className="text-[#C8341A] text-xs font-medium tracking-widest uppercase mb-2">Initial Consult → Signed</div>
<div className="flex items-baseline gap-3">
<span className="font-bebas text-6xl text-[#F0F0F0] leading-none">99<span className="text-3xl text-[#888888]">%</span></span>
<span className="text-sm text-[#888888] pb-1 uppercase tracking-widest">Conversion Rate</span>
</div>
</div>

<div className="flex gap-1.5 items-end h-12">
<div className="w-full bg-[#C8341A] h-full rounded-sm opacity-100"></div>
<div className="w-full bg-[#C8341A] h-full rounded-sm opacity-90"></div>
<div className="w-full bg-[#C8341A] h-[90%] rounded-sm opacity-80"></div>
<div className="w-full bg-[#C8341A] h-[95%] rounded-sm opacity-70"></div>
<div className="w-full bg-[#C8341A] h-[85%] rounded-sm opacity-60"></div>
<div className="w-full bg-[#C8341A] h-full rounded-sm opacity-50"></div>
<div className="w-full bg-[#C8341A] h-[90%] rounded-sm opacity-40"></div>
<div className="w-full bg-[#C8341A] h-[80%] rounded-sm opacity-30"></div>
<div className="w-full bg-[#C8341A] h-[95%] rounded-sm opacity-20"></div>
<div className="w-full bg-[#C8341A] h-[70%] rounded-sm opacity-10"></div>
<div className="w-full bg-[#1E1E1E] h-[40%] rounded-sm"></div>
<div className="w-full bg-[#1E1E1E] h-[30%] rounded-sm"></div>
</div>
</div>
</div>
</section>

<section className="bg-[#0F0F0F] py-[120px] relative z-20 border-t border-[#1E1E1E]">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 items-center">

<div className="flex flex-col gap-6">
<span className="text-[#C8341A] text-sm font-medium tracking-[0.15em] uppercase">Why Perfect FITTE</span>
<p className="text-lg text-[#888888] leading-relaxed">
                        Our data-driven approach tracks your performance quarterly using DEXA scans and performance benchmarks — so your results are always measurable.
                    </p>
</div>

<div className="bg-[#1A1A1A] rounded-[24px] p-6 border-t-[3px] border-[#C8341A] border-x border-b border-x-[#1E1E1E] border-b-[#1E1E1E] shadow-2xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
<div className="flex justify-between items-center mb-8">
<span className="text-xs font-medium text-[#F0F0F0] tracking-[0.1em] uppercase">My Fitness</span>
<i className="text-[#888888]" data-lucide="more-horizontal" strokeWidth="1.5"></i>
</div>
<div className="mb-8">
<div className="text-[#888888] text-xs uppercase tracking-widest mb-2">Results</div>
<div className="flex items-center justify-between">
<span className="font-bebas text-6xl text-[#F0F0F0] leading-none">88<span className="text-3xl text-[#888888]">%</span></span>
<div className="flex gap-2">
<i className="text-[#C8341A] w-5 h-5" data-lucide="flame" strokeWidth="1.5"></i>
<i className="text-[#D4A017] w-5 h-5" data-lucide="zap" strokeWidth="1.5"></i>
</div>
</div>
</div>
<div className="h-2 w-full bg-[#1E1E1E] rounded-full mb-8 overflow-hidden flex">
<div className="h-full bg-[#C8341A] w-[88%] rounded-full relative">
<div className="absolute inset-0 bg-white/20 w-1/2 rounded-full"></div>
</div>
</div>
<div className="flex justify-between text-[#888888] text-xs uppercase tracking-widest mb-8 pb-4 border-b border-[#1E1E1E]">
<span className="hover:text-white cursor-pointer transition-colors">Daily</span>
<span className="text-[#C8341A] cursor-pointer">Weekly</span>
<span className="hover:text-white cursor-pointer transition-colors">Progress</span>
</div>
<div className="bg-[#141414] rounded-xl h-40 w-full relative overflow-hidden flex items-center justify-center border border-[#1E1E1E]">
<img alt="Trainer" className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale" src="https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent"></div>
<i className="w-12 h-12 text-white relative z-10 opacity-70" data-lucide="play-circle" strokeWidth="1.5"></i>
</div>
</div>

<div className="flex flex-col gap-6">
<div className="mb-2">
<h3 className="font-bebas text-[5rem] text-[#D4A017] leading-none mb-2">1200+</h3>
<p className="text-lg text-[#F0F0F0]">Training sessions delivered across Hong Kong</p>
</div>
<p className="text-lg text-[#888888] leading-relaxed">
                        Track your strength, body composition, and endurance with personalized insights and real-time coaching feedback to help you become a better human.
                    </p>
</div>
</div>
</div>
</section>

<section className="bg-[#0A0A0A] py-[120px] relative z-20">
<div className="max-w-7xl mx-auto px-6">

<div className="text-center flex flex-col items-center mb-16">
<span className="text-[#C8341A] text-sm font-medium tracking-[0.15em] uppercase mb-4">Our Coach</span>
<h2 className="font-barlow font-medium text-5xl md:text-6xl text-white tracking-tight mb-6 max-w-2xl leading-[1.1]">
                    Train with the Best in Hong Kong
                </h2>
<p className="text-lg text-[#888888] max-w-2xl mb-10">
                    Work directly with Dong Inlong — 30+ years of precision personal training experience.
                </p>
<a className="bg-transparent border border-[#C8341A] text-[#C8341A] hover:bg-[#C8341A] hover:text-white text-lg font-medium px-8 py-3 rounded-full transition-colors" href="#">
                    See All Programs
                </a>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">

<div className="relative rounded-[16px] overflow-hidden bg-[#1A1A1A] group h-[400px] border-t-2 border-transparent hover:border-[#C8341A] transition-all duration-300">
<img alt="PT" className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-end">
<h4 className="font-barlow font-medium text-3xl text-white tracking-tight mb-1">Personal Training</h4>
<p className="text-[#888888] text-sm">1-on-1 &amp; Semi-Private sessions</p>
</div>
</div>

<div className="relative rounded-[16px] overflow-hidden bg-[#141414] group h-[500px] border-t-[3px] border-[#C8341A] shadow-[0_0_30px_rgba(200,52,26,0.1)] transition-all duration-300">
<img alt="Dong Inlong" className="absolute inset-0 w-full h-full object-cover grayscale opacity-70 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/20 to-transparent"></div>
<div className="absolute top-6 left-6 bg-[#C8341A] text-white text-xs px-3 py-1 uppercase tracking-widest rounded-full">Head Coach</div>
<div className="absolute inset-0 p-8 flex flex-col justify-end">
<h4 className="font-barlow font-medium text-4xl text-white tracking-tight mb-1">DONG INLONG</h4>
<p className="text-[#D4A017] text-sm tracking-widest uppercase">Founder &amp; Head Coach</p>
</div>
</div>

<div className="relative rounded-[16px] overflow-hidden bg-[#1A1A1A] group h-[400px] border-t-2 border-transparent hover:border-[#C8341A] transition-all duration-300">
<img alt="Online" className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-end">
<h4 className="font-barlow font-medium text-3xl text-white tracking-tight mb-1">Online Coaching</h4>
<p className="text-[#888888] text-sm">100% remote, worldwide</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#0F0F0F] py-[120px] relative z-20 border-y border-[#1E1E1E]">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row gap-6">

<div className="flex-1 bg-[#141414] rounded-[24px] p-12 lg:p-16 flex flex-col justify-center items-start border border-[#1E1E1E] group hover:border-[#C8341A]/50 transition-colors relative overflow-hidden">
<div className="absolute -right-20 -top-20 w-64 h-64 bg-[#C8341A]/5 rounded-full blur-3xl"></div>
<h2 className="font-barlow font-medium text-5xl md:text-6xl text-white tracking-tight mb-6 leading-[1.1] relative z-10">
                        Track Your<br/>Progress Precisely
                    </h2>
<p className="text-lg text-[#888888] mb-10 leading-relaxed max-w-md relative z-10">
                        Quarterly evaluations for new clients, bi-annual for long-term clients. DEXA scan body composition analysis + performance benchmarking.
                    </p>
<a className="bg-transparent border border-[#F0F0F0] text-[#F0F0F0] hover:bg-white hover:text-[#0A0A0A] text-sm font-medium px-8 py-3 rounded-full transition-colors relative z-10" href="#">
                        Discover
                    </a>
</div>

<div className="flex-1 relative rounded-[24px] overflow-hidden min-h-[500px] group border border-[#1E1E1E]">
<img alt="Gym" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1584466977773-e625c37cdd50?q=80&amp;w=1000"/>
<div className="absolute inset-0 bg-[#0A0A0A]/60 mix-blend-multiply"></div>

<div className="absolute bottom-6 right-6 lg:bottom-10 lg:right-10 bg-[#1A1A1A]/95 backdrop-blur-md p-6 rounded-[16px] border-t-[3px] border-[#C8341A] border-x border-b border-x-[#1E1E1E] border-b-[#1E1E1E] shadow-2xl w-72">
<div className="text-[#F0F0F0] text-sm font-medium tracking-widest uppercase mb-4">Perfect FITTE</div>
<div className="flex justify-between items-baseline mb-2">
<span className="text-[#888888] text-xs uppercase tracking-widest">Client Retention</span>
<span className="font-bebas text-3xl text-white">88%</span>
</div>

<div className="h-1.5 w-full bg-[#1E1E1E] rounded-full mb-6">
<div className="h-full bg-[#C8341A] w-[88%] rounded-full"></div>
</div>
<div className="text-[#C8341A] text-xs font-medium tracking-widest uppercase mb-4">Track Your Results</div>
<div className="flex justify-between items-center bg-[#141414] p-3 rounded-lg border border-[#1E1E1E]">
<div className="flex flex-col">
<span className="font-bebas text-2xl text-white leading-none">14 yrs</span>
<div className="flex gap-0.5 mt-1">
<i className="w-3 h-3 text-[#D4A017] fill-[#D4A017]" data-lucide="star" strokeWidth="1"></i>
<i className="w-3 h-3 text-[#D4A017] fill-[#D4A017]" data-lucide="star" strokeWidth="1"></i>
<i className="w-3 h-3 text-[#D4A017] fill-[#D4A017]" data-lucide="star" strokeWidth="1"></i>
<i className="w-3 h-3 text-[#D4A017] fill-[#D4A017]" data-lucide="star" strokeWidth="1"></i>
<i className="w-3 h-3 text-[#D4A017] fill-[#D4A017]" data-lucide="star" strokeWidth="1"></i>
</div>
</div>

<div className="grid grid-cols-4 gap-1">
<div className="w-2 h-2 rounded-full bg-[#C8341A]"></div>
<div className="w-2 h-2 rounded-full bg-[#C8341A]"></div>
<div className="w-2 h-2 rounded-full bg-[#1E1E1E]"></div>
<div className="w-2 h-2 rounded-full bg-[#C8341A]"></div>
<div className="w-2 h-2 rounded-full bg-[#C8341A]"></div>
<div className="w-2 h-2 rounded-full bg-[#1E1E1E]"></div>
<div className="w-2 h-2 rounded-full bg-[#C8341A]"></div>
<div className="w-2 h-2 rounded-full bg-[#1E1E1E]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#0A0A0A] py-[120px] relative z-20">
<div className="max-w-7xl mx-auto px-6">

<div className="text-center flex flex-col items-center mb-16">
<span className="text-[#C8341A] text-sm font-medium tracking-[0.15em] uppercase mb-4">Our Programs</span>
<h2 className="font-barlow font-medium text-5xl md:text-6xl text-white tracking-tight mb-6 max-w-3xl leading-[1.1]">
                    Take on Your Ultimate<br/>Fitness Transformation
                </h2>
<p className="text-lg text-[#888888] max-w-2xl mb-2">
                    Achieve your peak performance with personalized precision training programs.
                </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-auto lg:h-[600px]">

<div className="relative rounded-[24px] overflow-hidden bg-[#141414] group border-t-2 border-transparent hover:border-[#C8341A] transition-all duration-300 h-[400px] lg:h-full">
<img alt="Training" className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&amp;w=1000"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent"></div>
<div className="absolute bottom-10 left-10 right-10">
<h3 className="font-barlow font-medium text-3xl md:text-4xl text-white tracking-tight leading-tight">
                            Living well today leads the way to a brighter, healthier tomorrow.
                        </h3>
</div>
</div>

<div className="flex flex-col gap-6 h-full">

<div className="bg-[#C8341A] rounded-[24px] p-10 flex items-center flex-1 relative overflow-hidden group">
<div className="absolute -right-10 -bottom-10 opacity-10 group-hover:rotate-45 transition-transform duration-700">
<i className="w-64 h-64 text-white" data-lucide="zap" strokeWidth="1"></i>
</div>
<h3 className="font-barlow font-medium text-4xl text-white tracking-tight leading-tight relative z-10">
                            Designed for results-driven individuals in Hong Kong
                        </h3>
</div>

<div className="relative rounded-[24px] overflow-hidden bg-[#141414] group flex-1 border-t-2 border-transparent hover:border-[#C8341A] transition-all duration-300">
<img alt="Gym" className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=1000"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent"></div>
<div className="absolute bottom-8 right-8 left-8 bg-[#1A1A1A]/90 backdrop-blur border border-[#1E1E1E] p-6 rounded-2xl flex items-center justify-between">
<div>
<div className="font-bebas text-4xl text-[#D4A017] leading-none mb-1">99%</div>
<div className="text-[#F0F0F0] text-sm uppercase tracking-widest font-medium">Retention Rate</div>
</div>
<p className="text-[#888888] text-xs max-w-[120px] text-right">Clients stay for an average of 5 years</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#0F0F0F] py-[120px] relative z-20 border-t border-[#1E1E1E]">
<div className="max-w-7xl mx-auto px-6">
<h2 className="font-barlow font-medium text-4xl text-white tracking-tight mb-12 text-center uppercase">What We Offer</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-[#1A1A1A] border-t-[3px] border-[#1E1E1E] hover:border-[#C8341A] p-10 rounded-[16px] group transition-all duration-300 flex flex-col h-full shadow-lg">
<i className="w-10 h-10 text-[#C8341A] mb-6" data-lucide="user" strokeWidth="1.5"></i>
<h3 className="font-barlow font-medium text-3xl text-white tracking-tight mb-4">ONE-TO-ONE PT</h3>
<p className="text-lg text-[#888888] mb-2 flex-grow">60-min precision sessions</p>
<p className="text-sm text-[#F0F0F0] mb-8 py-2 border-y border-[#1E1E1E]">Packages: 10 or 15 sessions</p>
<a className="text-[#C8341A] font-medium text-sm tracking-widest uppercase flex items-center gap-2 group-hover:gap-4 transition-all mt-auto" href="#">
                        Enquire Now <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="2"></i>
</a>
</div>

<div className="bg-[#1A1A1A] border-t-[3px] border-[#1E1E1E] hover:border-[#C8341A] p-10 rounded-[16px] group transition-all duration-300 flex flex-col h-full shadow-lg">
<i className="w-10 h-10 text-[#C8341A] mb-6" data-lucide="users" strokeWidth="1.5"></i>
<h3 className="font-barlow font-medium text-3xl text-white tracking-tight mb-4">SEMI-PRIVATE PT</h3>
<p className="text-lg text-[#888888] mb-2 flex-grow">75-min, 2–4 clients</p>
<p className="text-sm text-[#F0F0F0] mb-8 py-2 border-y border-[#1E1E1E]">Packages: 5 or 10 sessions</p>
<a className="text-[#C8341A] font-medium text-sm tracking-widest uppercase flex items-center gap-2 group-hover:gap-4 transition-all mt-auto" href="#">
                        Enquire Now <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="2"></i>
</a>
</div>

<div className="bg-[#1A1A1A] border-t-[3px] border-[#1E1E1E] hover:border-[#C8341A] p-10 rounded-[16px] group transition-all duration-300 flex flex-col h-full shadow-lg">
<i className="w-10 h-10 text-[#C8341A] mb-6" data-lucide="globe" strokeWidth="1.5"></i>
<h3 className="font-barlow font-medium text-3xl text-white tracking-tight mb-4">ONLINE COACHING</h3>
<p className="text-lg text-[#888888] mb-2 flex-grow">100% remote, worldwide</p>
<p className="text-sm text-[#F0F0F0] mb-8 py-2 border-y border-[#1E1E1E]">3-month or 6-month packages</p>
<a className="text-[#C8341A] font-medium text-sm tracking-widest uppercase flex items-center gap-2 group-hover:gap-4 transition-all mt-auto" href="#">
                        Enquire Now <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="2"></i>
</a>
</div>
</div>
</div>
</section>

<section className="bg-[#0A0A0A] py-[120px] relative z-20">
<div className="max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
<h2 className="font-barlow font-medium text-4xl text-white tracking-tight mb-12 uppercase">What We Fix</h2>
<div className="flex flex-wrap justify-center gap-4">
<div className="bg-[#1A1A1A] border-l-2 border-[#C8341A] rounded-full px-6 py-3 text-lg text-white shadow-md hover:bg-[#1E1E1E] transition-colors cursor-default">Weight &amp; Fat Loss</div>
<div className="bg-[#1A1A1A] border-l-2 border-[#C8341A] rounded-full px-6 py-3 text-lg text-white shadow-md hover:bg-[#1E1E1E] transition-colors cursor-default">Body Recomposition</div>
<div className="bg-[#1A1A1A] border-l-2 border-[#C8341A] rounded-full px-6 py-3 text-lg text-white shadow-md hover:bg-[#1E1E1E] transition-colors cursor-default">Strength &amp; Conditioning</div>
<div className="bg-[#1A1A1A] border-l-2 border-[#C8341A] rounded-full px-6 py-3 text-lg text-white shadow-md hover:bg-[#1E1E1E] transition-colors cursor-default">Sports-Specific Training</div>
<div className="bg-[#1A1A1A] border-l-2 border-[#C8341A] rounded-full px-6 py-3 text-lg text-white shadow-md hover:bg-[#1E1E1E] transition-colors cursor-default">Pre-habilitation</div>
<div className="bg-[#1A1A1A] border-l-2 border-[#C8341A] rounded-full px-6 py-3 text-lg text-white shadow-md hover:bg-[#1E1E1E] transition-colors cursor-default">Rehabilitation</div>
<div className="bg-[#1A1A1A] border-l-2 border-[#C8341A] rounded-full px-6 py-3 text-lg text-white shadow-md hover:bg-[#1E1E1E] transition-colors cursor-default">Nutrition Counseling</div>
</div>
</div>
</section>

<section className="bg-[#0F0F0F] py-[120px] relative z-20 border-y border-[#1E1E1E]">
<div className="max-w-7xl mx-auto px-6">
<h2 className="font-barlow font-medium text-4xl text-white tracking-tight mb-12 text-center uppercase">Workshops &amp; Education</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bg-[#141414] border-t-[3px] border-[#C8341A] rounded-[16px] p-10 md:p-12 shadow-xl hover:bg-[#1A1A1A] transition-colors">
<i className="w-8 h-8 text-[#C8341A] mb-6" data-lucide="briefcase" strokeWidth="1.5"></i>
<h3 className="font-barlow font-medium text-3xl text-white tracking-tight mb-4">CORPORATE WORKSHOPS</h3>
<p className="text-lg text-[#888888] leading-relaxed">
                        Health, Fitness, Nutrition &amp; Well-being for corporate teams in Hong Kong. Elevate workplace performance through structured education.
                    </p>
</div>

<div className="bg-[#141414] border-t-[3px] border-[#C8341A] rounded-[16px] p-10 md:p-12 shadow-xl hover:bg-[#1A1A1A] transition-colors">
<i className="w-8 h-8 text-[#C8341A] mb-6" data-lucide="graduation-cap" strokeWidth="1.5"></i>
<h3 className="font-barlow font-medium text-3xl text-white tracking-tight mb-4">PERSONAL TRAINER WORKSHOPS</h3>
<p className="text-lg text-[#888888] leading-relaxed">
                        Precision PT, Professional Coaching, Sales &amp; Exercise Programming. Advanced education for fitness professionals.
                    </p>
</div>
</div>
</div>
</section>

<section className="bg-[#0A0A0A] py-[120px] relative z-20">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-[#C8341A] text-sm font-medium tracking-[0.15em] uppercase mb-4 block">Our Training Methodology</span>
<h2 className="font-barlow font-medium text-5xl md:text-6xl text-white tracking-tight">THE F.I.T.T.E. SYSTEM</h2>
</div>
<div className="flex flex-col gap-4">

<div className="bg-[#141414] p-8 md:p-10 rounded-[16px] flex gap-6 md:gap-10 items-start border-l-4 border-transparent hover:border-[#C8341A] hover:bg-[#1A1A1A] transition-all group cursor-default">
<span className="font-bebas text-6xl text-[#1E1E1E] group-hover:text-[#C8341A] transition-colors leading-none mt-1">F</span>
<div>
<h3 className="font-barlow font-medium text-3xl text-white mb-3 tracking-tight">Functionality</h3>
<p className="text-lg text-[#888888] leading-relaxed">Training movements that directly translate to improving your daily life and athletic performance.</p>
</div>
</div>

<div className="bg-[#141414] p-8 md:p-10 rounded-[16px] flex gap-6 md:gap-10 items-start border-l-4 border-transparent hover:border-[#C8341A] hover:bg-[#1A1A1A] transition-all group cursor-default">
<span className="font-bebas text-6xl text-[#1E1E1E] group-hover:text-[#C8341A] transition-colors leading-none mt-1">I</span>
<div>
<h3 className="font-barlow font-medium text-3xl text-white mb-3 tracking-tight">Individualized</h3>
<p className="text-lg text-[#888888] leading-relaxed">Programs precisely tailored to your unique biomechanics, history, and specific goals.</p>
</div>
</div>

<div className="bg-[#141414] p-8 md:p-10 rounded-[16px] flex gap-6 md:gap-10 items-start border-l-4 border-transparent hover:border-[#C8341A] hover:bg-[#1A1A1A] transition-all group cursor-default">
<span className="font-bebas text-6xl text-[#1E1E1E] group-hover:text-[#C8341A] transition-colors leading-none mt-1">T</span>
<div>
<h3 className="font-barlow font-medium text-3xl text-white mb-3 tracking-tight">Technique</h3>
<p className="text-lg text-[#888888] leading-relaxed">Uncompromising focus on flawless execution to maximize results and eliminate injury risk.</p>
</div>
</div>

<div className="bg-[#141414] p-8 md:p-10 rounded-[16px] flex gap-6 md:gap-10 items-start border-l-4 border-transparent hover:border-[#C8341A] hover:bg-[#1A1A1A] transition-all group cursor-default">
<span className="font-bebas text-6xl text-[#1E1E1E] group-hover:text-[#C8341A] transition-colors leading-none mt-1">T</span>
<div>
<h3 className="font-barlow font-medium text-3xl text-white mb-3 tracking-tight">Type</h3>
<p className="text-lg text-[#888888] leading-relaxed">Selecting the optimal modality—strength, hypertrophy, or endurance—based on data-driven assessments.</p>
</div>
</div>

<div className="bg-[#141414] p-8 md:p-10 rounded-[16px] flex gap-6 md:gap-10 items-start border-l-4 border-transparent hover:border-[#C8341A] hover:bg-[#1A1A1A] transition-all group cursor-default">
<span className="font-bebas text-6xl text-[#1E1E1E] group-hover:text-[#C8341A] transition-colors leading-none mt-1">E</span>
<div>
<h3 className="font-barlow font-medium text-3xl text-white mb-3 tracking-tight">Enjoyment</h3>
<p className="text-lg text-[#888888] leading-relaxed">Cultivating an environment where hard work meets psychological reward for long-term adherence.</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#0F0F0F] py-[120px] relative z-20 border-t border-[#1E1E1E]">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="font-barlow font-medium text-5xl text-white tracking-tight mb-4">CLIENT RESULTS SPEAK</h2>
<p className="text-lg text-[#888888] max-w-2xl mx-auto">
                    Average 5-year client relationship. Longest: 14 years and still going.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-[#1A1A1A] p-8 rounded-[16px] border border-[#1E1E1E] hover:border-[#C8341A] transition-colors">
<div className="flex gap-1 mb-6">
<i className="w-5 h-5 text-[#D4A017] fill-[#D4A017]" data-lucide="star" strokeWidth="1"></i>
<i className="w-5 h-5 text-[#D4A017] fill-[#D4A017]" data-lucide="star" strokeWidth="1"></i>
<i className="w-5 h-5 text-[#D4A017] fill-[#D4A017]" data-lucide="star" strokeWidth="1"></i>
<i className="w-5 h-5 text-[#D4A017] fill-[#D4A017]" data-lucide="star" strokeWidth="1"></i>
<i className="w-5 h-5 text-[#D4A017] fill-[#D4A017]" data-lucide="star" strokeWidth="1"></i>
</div>
<p className="text-lg text-[#F0F0F0] mb-8 leading-relaxed italic">"Dong's precision and attention to biomechanics completely changed how I train. The results are measurable and undeniable."</p>
<div>
<div className="font-medium text-white tracking-wide">Marcus T.</div>
<div className="text-[#888888] text-sm">Trained for 5 years</div>
</div>
</div>

<div className="bg-[#1A1A1A] p-8 rounded-[16px] border border-[#1E1E1E] hover:border-[#C8341A] transition-colors">
<div className="flex gap-1 mb-6">
<i className="w-5 h-5 text-[#D4A017] fill-[#D4A017]" data-lucide="star" strokeWidth="1"></i>
<i className="w-5 h-5 text-[#D4A017] fill-[#D4A017]" data-lucide="star" strokeWidth="1"></i>
<i className="w-5 h-5 text-[#D4A017] fill-[#D4A017]" data-lucide="star" strokeWidth="1"></i>
<i className="w-5 h-5 text-[#D4A017] fill-[#D4A017]" data-lucide="star" strokeWidth="1"></i>
<i className="w-5 h-5 text-[#D4A017] fill-[#D4A017]" data-lucide="star" strokeWidth="1"></i>
</div>
<p className="text-lg text-[#F0F0F0] mb-8 leading-relaxed italic">"The F.I.T.T.E. system isn't just a workout; it's an education. I've never felt stronger or more capable."</p>
<div>
<div className="font-medium text-white tracking-wide">Sarah L.</div>
<div className="text-[#888888] text-sm">Trained for 8 years</div>
</div>
</div>

<div className="bg-[#1A1A1A] p-8 rounded-[16px] border border-[#1E1E1E] hover:border-[#C8341A] transition-colors">
<div className="flex gap-1 mb-6">
<i className="w-5 h-5 text-[#D4A017] fill-[#D4A017]" data-lucide="star" strokeWidth="1"></i>
<i className="w-5 h-5 text-[#D4A017] fill-[#D4A017]" data-lucide="star" strokeWidth="1"></i>
<i className="w-5 h-5 text-[#D4A017] fill-[#D4A017]" data-lucide="star" strokeWidth="1"></i>
<i className="w-5 h-5 text-[#D4A017] fill-[#D4A017]" data-lucide="star" strokeWidth="1"></i>
<i className="w-5 h-5 text-[#D4A017] fill-[#D4A017]" data-lucide="star" strokeWidth="1"></i>
</div>
<p className="text-lg text-[#F0F0F0] mb-8 leading-relaxed italic">"Recovering from injury was daunting until I started here. The pre-hab focus gave me my active life back."</p>
<div>
<div className="font-medium text-white tracking-wide">David C.</div>
<div className="text-[#888888] text-sm">Trained for 3 years</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#111111] py-32 relative z-20 border-t border-[#1E1E1E]">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="font-barlow font-medium text-4xl md:text-5xl text-white tracking-tight leading-[1.2] mb-12">
                Join the Journey Today — Achieve Your Goals, <br className="hidden md:block"/>
                Transform Your Life, and Become a <br className="hidden md:block"/>
<span className="text-[#C8341A]">Better Human</span> with Perfect FITTE
            </h2>
<a className="bg-[#F0F0F0] hover:bg-white text-[#0A0A0A] text-lg font-medium px-10 py-4 rounded-full transition-colors inline-flex items-center gap-3" href="#">
                Get Started <i className="w-5 h-5" data-lucide="arrow-down" strokeWidth="2"></i>
</a>
</div>
</section>

<footer className="bg-[#080808] border-t border-[#C8341A] pt-20 pb-10 relative z-20">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div>
<a className="flex items-center gap-2 mb-6" href="#">
<i className="text-[#C8341A] w-6 h-6" data-lucide="settings" strokeWidth="2"></i>
<span className="font-bebas text-2xl text-white tracking-widest mt-1">PERFECT F.I.T.T.E.</span>
</a>
<p className="text-[#888888] text-sm mb-6 max-w-xs">
                        Helping People Become Better Humans
                    </p>
<p className="text-[#888888] text-sm">
                        Hong Kong SAR
                    </p>
</div>

<div>
<h4 className="text-white font-medium mb-6 uppercase tracking-widest text-sm">Resources</h4>
<ul className="flex flex-col gap-4">
<li><a className="text-[#888888] hover:text-[#C8341A] transition-colors text-sm" href="#">Programs</a></li>
<li><a className="text-[#888888] hover:text-[#C8341A] transition-colors text-sm" href="#">Online Coaching</a></li>
<li><a className="text-[#888888] hover:text-[#C8341A] transition-colors text-sm" href="#">Workshops</a></li>
<li><a className="text-[#888888] hover:text-[#C8341A] transition-colors text-sm" href="#">Exercise Library</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-6 uppercase tracking-widest text-sm">Connect</h4>
<ul className="flex flex-col gap-4">
<li><a className="text-[#888888] hover:text-[#C8341A] transition-colors text-sm" href="#">Instagram</a></li>
<li><a className="text-[#888888] hover:text-[#C8341A] transition-colors text-sm" href="#">Facebook</a></li>
<li><a className="text-[#888888] hover:text-[#C8341A] transition-colors text-sm" href="#">LinkedIn</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-6 uppercase tracking-widest text-sm">About Us</h4>
<ul className="flex flex-col gap-4">
<li><a className="text-[#888888] hover:text-[#C8341A] transition-colors text-sm" href="#">Our Philosophy</a></li>
<li><a className="text-[#888888] hover:text-[#C8341A] transition-colors text-sm" href="#">F.I.T.T.E. System</a></li>
<li><a className="text-[#888888] hover:text-[#C8341A] transition-colors text-sm" href="#">Certifications</a></li>
<li><a className="text-[#888888] hover:text-[#C8341A] transition-colors text-sm" href="#">Contact</a></li>
</ul>
</div>
</div>

<div className="pt-8 border-t border-[#1E1E1E] flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[#888888] text-sm">
                    © 2025 Perfect FITTE Personal Training · All rights reserved
                </p>
<div className="flex items-center gap-6">
<a className="text-[#888888] hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="linkedin" strokeWidth="1.5"></i>
</a>
<a className="text-[#888888] hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="twitter" strokeWidth="1.5"></i>
</a>
<a className="text-[#888888] hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
