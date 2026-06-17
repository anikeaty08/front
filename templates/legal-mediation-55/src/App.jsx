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
      

<div className="relative w-full min-h-[90vh] flex flex-col">

<div className="absolute inset-0 z-0">
<img alt="Cityscape" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&amp;w=2613&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#0A262D]/70 mix-blend-multiply"></div>
<div className="bg-gradient-to-b from-black/40 via-transparent to-[#0A262D]/90 absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<nav className="flex lg:px-12 w-full z-20 border-white/10 border-b pt-6 pr-6 pb-6 pl-6 relative items-center justify-between">
<div className="flex items-center gap-2">
<div className="flex text-[#0A262D] bg-[#4FBFA5] w-8 h-8 rounded-md items-center justify-center">
<span className="text-lg font-semibold">M</span>
</div>
<span className="uppercase text-lg font-semibold text-white tracking-tight">konekte</span>
</div>
<div className="hidden lg:flex items-center gap-8">
<a className="text-white/90 text-xs hover:text-[#4FBFA5] transition-colors" href="#">Home</a>
<a className="text-white/70 text-xs hover:text-white transition-colors" href="#">ADR Services</a>
<a className="text-white/70 text-xs hover:text-white transition-colors" href="#">Our Panel</a>
<a className="text-white/70 text-xs hover:text-white transition-colors" href="#">Practice Areas</a>
<a className="text-white/70 text-xs hover:text-white transition-colors" href="#">Locations</a>
<a className="text-white/70 text-xs hover:text-white transition-colors" href="#">About Us</a>
</div>
<div className="hidden lg:flex items-center gap-6">
<a className="text-white/90 text-xs hover:text-white transition-colors" href="#">Shop</a>
<a className="text-white/90 text-xs hover:text-white transition-colors" href="#">Pay Online</a>
<a className="px-5 py-2 border border-white/30 text-white text-xs rounded-full hover:bg-white/10 transition-colors" href="#">Log In</a>
</div>

<button className="lg:hidden text-white">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</nav>

<div className="z-10 flex flex-col flex-grow text-center mt-10 pr-4 pl-4 relative items-center justify-center">
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-white tracking-tight leading-none mb-6">
                MILES ABOVE<br/>THE REST
            </h1>
<p className="text-lg md:text-xl text-white/80 max-w-2xl font-light leading-relaxed">
                Our diverse legal expertise, consistently high-touch administrative support, and dedication to our clients helps shape the future of ADR.
            </p>
<div className="mt-20 animate-bounce text-white/30">
<div className="w-[1px] h-16 bg-white/20 mx-auto mb-2"></div>
<div className="border border-white/20 rounded-full p-2">
<div className="w-1 h-1 bg-white rounded-full"></div>
</div>
</div>
</div>
</div>

<section className="py-24 px-6 bg-white">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-2">
                MILES MEDIATION
            </h2>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-8">
                &amp; ARBITRATION
            </h2>
<div className="w-16 h-1 bg-[#4FBFA5] mx-auto mb-10"></div>
<p className="text-lg text-slate-600 leading-relaxed mb-10 font-light">
                Miles' neutrals are experienced mediators and arbitrators with expertise in their fields. They are experts in dispute resolution who are helping to shape the future of the ADR field with thought leadership that includes articles, speaking engagements, and CLE classes and training. Learn more about their background and experience here.
            </p>
<button className="bg-[#1a2e35] text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-[#25414b] transition-colors">
                Schedule a mediation
            </button>
</div>
</section>

<section className="pb-24 px-4 md:px-8 max-w-[1600px] mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">

<div className="relative rounded-2xl overflow-hidden group h-[300px] md:h-full">
<img alt="Office" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=2301&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
</div>

<div className="flex flex-col gap-6 h-full">
<div className="relative flex-grow rounded-2xl overflow-hidden group h-[300px] md:h-auto">
<img alt="Skyscrapers" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6">
<h3 className="text-white text-xl font-medium tracking-tight">Modern Facilities</h3>
</div>
</div>
<div className="relative h-[200px] rounded-2xl overflow-hidden group">
<img alt="Meeting" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-slate-900/20"></div>
</div>
</div>

<div className="relative rounded-2xl overflow-hidden group h-[300px] md:h-full">
<img alt="Handshake" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
</div>
</div>
</section>

<section className="py-20 bg-[#0A262D] text-white overflow-hidden">
<div className="px-6 md:px-12 mb-10 flex justify-between items-end">
<div>
<p className="text-[#4FBFA5] text-xs font-semibold tracking-wider uppercase mb-2">Our Locations</p>
<h2 className="text-4xl font-semibold tracking-tight">OUR OFFICES</h2>
</div>
<div className="flex gap-3">
<button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
<i className="w-4 h-4" data-lucide="chevron-left"></i>
</button>
<button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
<i className="w-4 h-4" data-lucide="chevron-right"></i>
</button>
</div>
</div>
<div className="flex gap-6 overflow-x-auto no-scrollbar px-6 md:px-12 pb-10">

<div className="min-w-[300px] md:min-w-[400px] aspect-[4/5] relative rounded-2xl overflow-hidden group cursor-pointer">
<img alt="Atlanta" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A262D] via-transparent to-transparent opacity-90"></div>
<h3 className="absolute bottom-8 left-8 text-3xl font-semibold tracking-tight uppercase">Atlanta</h3>
</div>

<div className="min-w-[300px] md:min-w-[400px] aspect-[4/5] relative rounded-2xl overflow-hidden group cursor-pointer">
<img alt="Boston" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A262D] via-transparent to-transparent opacity-90"></div>
<h3 className="absolute bottom-8 left-8 text-3xl font-semibold tracking-tight uppercase">Boston</h3>
</div>

<div className="min-w-[300px] md:min-w-[400px] aspect-[4/5] relative rounded-2xl overflow-hidden group cursor-pointer">
<img alt="Birmingham" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A262D] via-transparent to-transparent opacity-90"></div>
<h3 className="absolute bottom-8 left-8 text-3xl font-semibold tracking-tight uppercase">Birmingham</h3>
</div>

<div className="min-w-[300px] md:min-w-[400px] aspect-[4/5] relative rounded-2xl overflow-hidden group cursor-pointer">
<img alt="Nashville" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A262D] via-transparent to-transparent opacity-90"></div>
<h3 className="absolute bottom-8 left-8 text-3xl font-semibold tracking-tight uppercase">Nashville</h3>
</div>
</div>
</section>

<section className="bg-[#EAF4F4] py-24 px-6 md:px-12">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="absolute -inset-4 bg-white/50 rounded-full blur-2xl"></div>
<img alt="Dashboard on Laptop" className="relative rounded-2xl shadow-2xl z-10 border-4 border-white" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h2 className="text-4xl lg:text-5xl font-semibold text-[#0A262D] tracking-tight mb-2">DASHBOARD</h2>
<h2 className="text-4xl lg:text-5xl font-semibold text-[#4FBFA5] tracking-tight mb-8">EXPERIENCE</h2>
<p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    Miles' neutrals are experienced mediators and arbitrators with expertise in dispute resolution who are helping to shape the future of the ADR.
                </p>
<div className="flex gap-4">
<button className="bg-[#0A262D] text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-[#153e48] transition-colors">Sign Up Now</button>
<button className="bg-transparent border border-[#0A262D] text-[#0A262D] px-8 py-3 rounded-full text-sm font-medium hover:bg-[#0A262D]/5 transition-colors">Log In</button>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-white max-w-7xl mx-auto">
<div className="flex justify-between items-center mb-12">
<h2 className="text-4xl font-semibold tracking-tight text-[#0A262D]">ARTICLES</h2>
<button className="px-6 py-2 border border-slate-200 rounded-full text-sm text-slate-600 hover:bg-slate-50">See more</button>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

<div className="flex flex-col gap-6 group cursor-pointer">
<div className="relative overflow-hidden rounded-2xl aspect-video">
<span className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase z-10">Featured</span>
<img alt="Meeting" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h3 className="text-2xl font-semibold text-[#0A262D] leading-tight mb-3 group-hover:text-[#4FBFA5] transition-colors">
                        The Current State of Non-Competes: How the Recent FTC Rule Affects Missouri Attorneys
                    </h3>
<div className="flex items-center text-[#4FBFA5] text-sm font-medium gap-1">
                        Read Article <i className="w-4 h-4" data-lucide="arrow-right"></i>
</div>
</div>
</div>

<div className="flex flex-col gap-8">

<div className="flex gap-6 items-start group cursor-pointer">
<div className="w-32 h-24 flex-shrink-0 rounded-xl overflow-hidden">
<img alt="Legal" className="w-full h-full object-cover transition-transform group-hover:scale-110" src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Legal Insight</span>
<h4 className="text-lg font-semibold text-[#0A262D] mt-1 leading-snug group-hover:text-[#4FBFA5] transition-colors">
                            Miles Mediation &amp; Arbitration is the fastest-growing ADR provider in the Southeast.
                        </h4>
</div>
</div>

<div className="flex gap-6 items-start group cursor-pointer">
<div className="w-32 h-24 flex-shrink-0 rounded-xl overflow-hidden">
<img alt="Discussion" className="w-full h-full object-cover transition-transform group-hover:scale-110" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Legal Insight</span>
<h4 className="text-lg font-semibold text-[#0A262D] mt-1 leading-snug group-hover:text-[#4FBFA5] transition-colors">
                            Miles Mediation &amp; Arbitration is the fastest-growing ADR provider in the Southeast.
                        </h4>
</div>
</div>

<div className="flex gap-6 items-start group cursor-pointer">
<div className="w-32 h-24 flex-shrink-0 rounded-xl overflow-hidden">
<img alt="Gavel" className="w-full h-full object-cover transition-transform group-hover:scale-110" src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Legal Insight</span>
<h4 className="text-lg font-semibold text-[#0A262D] mt-1 leading-snug group-hover:text-[#4FBFA5] transition-colors">
                            Miles Mediation &amp; Arbitration is the fastest-growing ADR provider in the Southeast.
                        </h4>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#0A262D] py-24 overflow-hidden relative">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
<div className="max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
<div className="pr-0 lg:pr-12">
<h2 className="text-4xl lg:text-5xl font-semibold text-white tracking-tight mb-6">OUR PANEL</h2>
<p className="text-lg text-white/70 leading-relaxed mb-10">
                    Meet our larger panel of neutrals and arbitrators. Our professionals bring decades of experience and specialized knowledge to help resolve your most complex disputes efficiently.
                </p>
<button className="bg-white text-[#0A262D] px-8 py-3.5 rounded-full text-sm font-medium hover:bg-slate-100 transition-colors">
                    Schedule a mediation
                </button>
</div>
<div className="relative">

<div className="rounded-tl-[100px] rounded-br-[100px] rounded-tr-[40px] rounded-bl-[40px] overflow-hidden h-[400px] lg:h-[500px] w-full relative border-4 border-white/5">
<img alt="Panel Discussion" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-white max-w-[1600px] mx-auto">
<h2 className="text-3xl font-semibold text-center text-[#0A262D] mb-12 tracking-tight">OUR VIDEOS</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

<div className="relative aspect-[3/4] rounded-2xl overflow-hidden group cursor-pointer">
<img alt="Atlanta Video" className="w-full h-full object-cover brightness-75 transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-14 h-14 rounded-full border border-white/50 flex items-center justify-center bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-all">
<i className="w-5 h-5 text-white fill-white ml-1" data-lucide="play"></i>
</div>
</div>
<div className="absolute bottom-6 left-6 text-white">
<p className="text-[10px] uppercase tracking-wider opacity-80 mb-1">Tour</p>
<p className="text-xl font-semibold uppercase">Atlanta</p>
</div>
</div>

<div className="relative aspect-[3/4] rounded-2xl overflow-hidden group cursor-pointer">
<img alt="Boston Video" className="w-full h-full object-cover brightness-75 transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&amp;w=2669&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-14 h-14 rounded-full border border-white/50 flex items-center justify-center bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-all">
<i className="w-5 h-5 text-white fill-white ml-1" data-lucide="play"></i>
</div>
</div>
<div className="absolute bottom-6 left-6 text-white">
<p className="text-[10px] uppercase tracking-wider opacity-80 mb-1">Tour</p>
<p className="text-xl font-semibold uppercase">Boston</p>
</div>
</div>

<div className="relative aspect-[3/4] rounded-2xl overflow-hidden group cursor-pointer">
<img alt="Seattle Video" className="w-full h-full object-cover brightness-75 transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&amp;w=2669&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-14 h-14 rounded-full border border-white/50 flex items-center justify-center bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-all">
<i className="w-5 h-5 text-white fill-white ml-1" data-lucide="play"></i>
</div>
</div>
<div className="absolute bottom-6 left-6 text-white">
<p className="text-[10px] uppercase tracking-wider opacity-80 mb-1">Tour</p>
<p className="text-xl font-semibold uppercase">Seattle</p>
</div>
</div>

<div className="relative aspect-[3/4] rounded-2xl overflow-hidden group cursor-pointer">
<img alt="Georgia Video" className="w-full h-full object-cover brightness-75 transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1431576901776-e539bd916ba2?q=80&amp;w=2671&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-14 h-14 rounded-full border border-white/50 flex items-center justify-center bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-all">
<i className="w-5 h-5 text-white fill-white ml-1" data-lucide="play"></i>
</div>
</div>
<div className="absolute bottom-6 left-6 text-white">
<p className="text-[10px] uppercase tracking-wider opacity-80 mb-1">Tour</p>
<p className="text-xl font-semibold uppercase">Georgia</p>
</div>
</div>
</div>
<div className="text-center">
<button className="bg-[#0A262D] text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-[#153e48] transition-colors">See more</button>
</div>
</section>

<section className="relative h-[600px] flex items-center justify-center px-6">
<div className="absolute inset-0">
<img alt="City Street" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#06181C]/80"></div>
</div>
<div className="relative z-10 w-full max-w-2xl bg-[#0F2A31]/80 backdrop-blur-md rounded-2xl p-12 text-center border border-white/10 shadow-2xl">
<h2 className="text-4xl font-semibold text-white tracking-tight mb-4">CONTACT US</h2>
<p className="text-lg text-white/70 mb-8 font-light">
                Miles neutrals are experienced mediators and arbitrators with expertise in their fields.
            </p>
<button className="bg-white text-[#0A262D] px-10 py-3.5 rounded-full text-sm font-medium hover:bg-slate-100 transition-colors">
                See more
            </button>
</div>
</section>

<footer className="bg-[#051316] text-slate-400 py-16 px-6 md:px-12 text-sm">
<div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

<div className="lg:col-span-1">
<div className="flex items-center gap-2 mb-6 text-white">
<div className="flex items-center justify-center w-6 h-6 bg-[#4FBFA5] rounded-md text-[#0A262D]">
<span className="font-bold text-xs">M</span>
</div>
<span className="font-bold tracking-tight uppercase text-sm">Miles</span>
</div>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="linkedin"></i>
</a>
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="twitter"></i>
</a>
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="facebook"></i>
</a>
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="instagram"></i>
</a>
</div>
</div>

<div>
<h4 className="text-white font-medium mb-6">Locations</h4>
<ul className="space-y-3 font-light">
<li><a className="hover:text-white transition-colors" href="#">Atlanta</a></li>
<li><a className="hover:text-white transition-colors" href="#">Savannah</a></li>
<li><a className="hover:text-white transition-colors" href="#">Charlotte</a></li>
<li><a className="hover:text-white transition-colors" href="#">Nashville</a></li>
<li><a className="hover:text-white transition-colors" href="#">Jacksonville</a></li>
<li><a className="hover:text-white transition-colors" href="#">Columbia</a></li>
<li><a className="hover:text-white transition-colors" href="#">Tampa</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-6">Contact Us</h4>
<div className="space-y-6 font-light">
<div>
<p className="text-white mb-1 text-xs uppercase font-semibold">Address</p>
<p>115 Perimeter Center Place<br/>Suite 1100<br/>Atlanta, GA 30346</p>
</div>
<div>
<p className="text-white mb-1 text-xs uppercase font-semibold">Phone Number</p>
<p>888-305-3553</p>
</div>
</div>
</div>

<div>
<h4 className="text-white font-medium mb-6">Practice Areas</h4>
<ul className="space-y-3 font-light">
<li><a className="hover:text-white transition-colors" href="#">Appellate Mediation</a></li>
<li><a className="hover:text-white transition-colors" href="#">General Civil Mediation Training</a></li>
<li><a className="hover:text-white transition-colors" href="#">Civil Litigation</a></li>
<li><a className="hover:text-white transition-colors" href="#">Energy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Legal Malpractice</a></li>
<li><a className="hover:text-white transition-colors" href="#">Medical Malpractice</a></li>
<li><a className="hover:text-white transition-colors" href="#">Technology</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-6">Education</h4>
<ul className="space-y-3 font-light">
<li><a className="hover:text-white transition-colors" href="#">Seminars</a></li>
<li><a className="hover:text-white transition-colors" href="#">General Civil Mediation</a></li>
<li><a className="hover:text-white transition-colors" href="#">Civil Litigation</a></li>
<li><a className="hover:text-white transition-colors" href="#">Energy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Legal Malpractice</a></li>
<li><a className="hover:text-white transition-colors" href="#">Medical Malpractice</a></li>
<li><a className="hover:text-white transition-colors" href="#">Technology</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 text-center text-xs text-slate-600 font-light">
<p>© 2026 Miles Mediation &amp; Arbitration, LLC - All Rights Reserved | Disclaimer | Policies</p>
</div>
</footer>


    </>
  );
}
