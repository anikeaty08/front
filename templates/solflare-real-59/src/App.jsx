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
      

<nav className="z-50 lg:px-12 flex w-full pt-6 pr-6 pb-6 pl-6 absolute top-0 items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-white text-2xl font-script">Solflare</span>
</div>
<button className="flex gap-2 hover:bg-white/20 transition-all duration-300 group bg-white/10 border-white/5 border rounded-full pt-2 pr-4 pb-2 pl-4 backdrop-blur-md gap-x-2 gap-y-2 items-center">
<span className="text-white text-sm font-medium">Menu</span>
<svg className="lucide lucide-menu text-white w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</nav>

<header className="relative w-full h-screen min-h-[800px] flex items-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Luxury Villa" className="opacity-80 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f1c0dbae-e955-4545-a42b-d1ee7c115cc3_3840w.webp"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[#0b0b0c]"></div>
<div className="bg-gradient-to-b from-black/60 via-transparent to-[#0b0b0c] absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="z-10 lg:px-12 w-full max-w-7xl mt-20 mr-auto ml-auto pr-6 pl-6 relative">

<div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 mb-8">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
<span className="uppercase text-xs font-medium text-slate-200 tracking-wide">Available for work</span>
</div>

<h1 className="md:text-7xl lg:text-8xl leading-[1.1] text-5xl font-medium text-white tracking-tight max-w-4xl">Your trusted partner for quality home improvement ,<br/> just a <span className="font-normal font-script text-amber-500">in Dallas</span></h1>

<div className="flex flex-col md:flex-row justify-between items-end mt-12 gap-8">
<div className="flex gap-4">
<button className="transition-colors flex gap-2 hover:bg-amber-200 text-sm font-medium text-[#0b0b0c] bg-amber-500 rounded-full pt-3 pr-6 pb-3 pl-6 gap-x-2 gap-y-2 items-center">Request a Free Estimate</button>
<button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-6 py-3 rounded-full font-medium text-sm transition-colors flex items-center gap-2 backdrop-blur-sm">
                        Contact us
                        <svg className="lucide lucide-arrow-up-right w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>
</div>
<p className="md:text-base hidden md:block leading-relaxed text-sm text-slate-300 text-right max-w-xs">From kitchens and bathrooms to full interior and exterior renovations, we help Dallas homeowners transform their spaces with professionalism, transparency, and guaranteed quality.</p>
</div>
</div>
</header>

<section className="z-20 bg-[#0b0b0c] pt-24 pb-24 relative">
<div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-12 gap-12">
<div className="md:col-span-3">
<div className="inline-flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
<span className="uppercase text-xs font-medium text-slate-200 tracking-wide">About us</span>
</div>
</div>
<div className="md:col-span-9">
<p className="md:text-2xl leading-relaxed text-lg font-light text-slate-500 hover:text-white transition-all duration-700 ease-out cursor-default tracking-tight opacity-0 [animation-timeline:view()] [animation-range:entry_10%_cover_30%] animate-[reveal_1s_ease-out_both]">
<style>@keyframes reveal{from{opacity:0;transform:translateY(30px);filter:blur(4px)}to{opacity:1;transform:translateY(0);filter:blur(0)}}</style>
Matos Homes Improvements was founded with a clear purpose: to build a lasting legacy through honest work, high-quality remodeling, and total respect for every client's investment.

Based in Dallas, TX, we specialize in residential remodeling projects that improve not only homes, but the way people live in them. 

From kitchens and bathrooms to full interior and exterior renovations, every project is handled with clear communication, realistic timelines, and strict attention to detail. We don't cut corners, we don't surprise you with hidden costs, and we don't leave projects unfinished. 

At Matos Homes, your home is treated with the same care and responsibility as our own—because trust is built project by project.</p>
</div>
</div>
</section>

<section className="w-full h-[400px] md:h-[500px] relative overflow-hidden">
<img alt="City Street" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&amp;w=2500&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0c] via-transparent to-transparent"></div>
<div className="bg-gradient-to-b from-[#0b0b0c] via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</section>

<section className="py-24 bg-[#0b0b0c] relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-amber-500/20 blur-[100px] rounded-full pointer-events-none -mt-32 z-0"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

<div className="flex flex-col items-center text-center mb-16">
<div className="inline-flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10 mb-6 backdrop-blur-md">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
<span className="text-slate-200 text-xs font-medium uppercase tracking-wide">Our Services</span>
</div>
<h2 className="text-4xl md:text-6xl text-white font-medium tracking-tight mb-8">
                    Top services you <br/>
<span className="font-script text-amber-500">can't miss</span>
</h2>
<div className="bg-white/5 p-1 rounded-full border border-white/10 flex relative backdrop-blur-sm">
<button className="px-6 py-2 rounded-full text-sm font-medium text-[#0b0b0c] bg-amber-500 shadow-lg shadow-amber-500/20 transition-all">Residential</button>
<button className="px-6 py-2 rounded-full text-sm font-medium text-slate-400 hover:text-white transition-all">Commercial</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer border border-white/5">
<img alt="Kitchen" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0c]/90 via-black/20 to-transparent"></div>
<div className="absolute top-4 left-4">
<div className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-xs font-semibold text-black shadow-sm">
                            Most Popular
                        </div>
</div>
<div className="absolute bottom-0 left-0 w-full p-6">
<h3 className="text-white text-xl font-medium mb-2 tracking-tight">Kitchen Remodeling</h3>
<p className="text-slate-400 text-xs font-medium flex items-center gap-2">
<span>Custom Design</span> <span className="w-1 h-1 rounded-full bg-slate-600"></span> <span>Full Install</span>
</p>
</div>
</div>

<div className="group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer border border-white/5">
<img alt="Bathroom" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0c]/90 via-black/20 to-transparent"></div>
<div className="absolute top-4 left-4">
<div className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-xs font-semibold text-black shadow-sm">
                            New Styles
                        </div>
</div>
<div className="absolute bottom-0 left-0 w-full p-6">
<h3 className="text-white text-xl font-medium mb-2 tracking-tight">Luxury Bathrooms</h3>
<p className="text-slate-400 text-xs font-medium flex items-center gap-2">
<span>Spa Features</span> <span className="w-1 h-1 rounded-full bg-slate-600"></span> <span>Modern Tiling</span>
</p>
</div>
</div>

<div className="group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer border border-white/5">
<img alt="Living Room" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0c]/90 via-black/20 to-transparent"></div>
<div className="absolute top-4 left-4">
<div className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-xs font-semibold text-black shadow-sm">
                            Trending
                        </div>
</div>
<div className="absolute bottom-0 left-0 w-full p-6">
<h3 className="text-white text-xl font-medium mb-2 tracking-tight">Living Room Design</h3>
<p className="text-slate-400 text-xs font-medium flex items-center gap-2">
<span>Open Layout</span> <span className="w-1 h-1 rounded-full bg-slate-600"></span> <span>Lighting</span>
</p>
</div>
</div>

<div className="group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer border border-white/5">
<img alt="Bedroom" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0c]/90 via-black/20 to-transparent"></div>
<div className="absolute top-4 left-4">
<div className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-xs font-semibold text-black shadow-sm">
                            Available
                        </div>
</div>
<div className="absolute bottom-0 left-0 w-full p-6">
<h3 className="text-white text-xl font-medium mb-2 tracking-tight">Master Suites</h3>
<p className="text-slate-400 text-xs font-medium flex items-center gap-2">
<span>Walk-in Closets</span> <span className="w-1 h-1 rounded-full bg-slate-600"></span> <span>Ensuite</span>
</p>
</div>
</div>

<div className="group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer border border-white/5">
<img alt="Exterior" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0c]/90 via-black/20 to-transparent"></div>
<div className="absolute top-4 left-4">
<div className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-xs font-semibold text-black shadow-sm">
                            Exterior
                        </div>
</div>
<div className="absolute bottom-0 left-0 w-full p-6">
<h3 className="text-white text-xl font-medium mb-2 tracking-tight">Facade Renovation</h3>
<p className="text-slate-400 text-xs font-medium flex items-center gap-2">
<span>Siding</span> <span className="w-1 h-1 rounded-full bg-slate-600"></span> <span>Windows</span>
</p>
</div>
</div>

<div className="group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer border border-white/5">
<img alt="Pool" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0c]/90 via-black/20 to-transparent"></div>
<div className="absolute top-4 left-4">
<div className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-xs font-semibold text-black shadow-sm">
                            Seasonal
                        </div>
</div>
<div className="absolute bottom-0 left-0 w-full p-6">
<h3 className="text-white text-xl font-medium mb-2 tracking-tight">Pools &amp; Landscape</h3>
<p className="text-slate-400 text-xs font-medium flex items-center gap-2">
<span>Hardscaping</span> <span className="w-1 h-1 rounded-full bg-slate-600"></span> <span>Design</span>
</p>
</div>
</div>

<div className="group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer border border-white/5">
<img alt="Roofing" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0c]/90 via-black/20 to-transparent"></div>
<div className="absolute top-4 left-4">
<div className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-xs font-semibold text-black shadow-sm">
                            Essential
                        </div>
</div>
<div className="absolute bottom-0 left-0 w-full p-6">
<h3 className="text-white text-xl font-medium mb-2 tracking-tight">Roofing Solutions</h3>
<p className="text-slate-400 text-xs font-medium flex items-center gap-2">
<span>Repair</span> <span className="w-1 h-1 rounded-full bg-slate-600"></span> <span>Installation</span>
</p>
</div>
</div>

<div className="group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer border border-white/5">
<img alt="Office" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0c]/90 via-black/20 to-transparent"></div>
<div className="absolute top-4 left-4">
<div className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-xs font-semibold text-black shadow-sm">
                            Work &amp; Play
                        </div>
</div>
<div className="absolute bottom-0 left-0 w-full p-6">
<h3 className="text-white text-xl font-medium mb-2 tracking-tight">Home Offices</h3>
<p className="text-slate-400 text-xs font-medium flex items-center gap-2">
<span>Ergonomic</span> <span className="w-1 h-1 rounded-full bg-slate-600"></span> <span>Soundproof</span>
</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#0b0b0c] pt-24 pb-24">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="text-center mb-20">
<div className="inline-flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10 mb-6">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
<span className="text-slate-200 text-xs font-medium uppercase tracking-wide">Our vision</span>
</div>
<h2 className="text-4xl md:text-5xl text-white font-medium tracking-tight">
                    The qualities behind
                    <span className="font-script text-5xl md:text-6xl text-amber-500">every perfect move</span>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-[#121212] border border-white/5 p-8 rounded-2xl hover:border-white/10 transition-colors group">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors bg-amber-500/10 group-hover:bg-amber-500/20">
<svg className="lucide lucide-map-pin w-6 h-6 text-amber-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<h3 className="text-white text-lg font-medium mb-3">Local market expertise</h3>
<p className="text-slate-400 text-base leading-relaxed">
                        We provide in-depth knowledge of neighborhoods and market trends, helping clients make informed property decisions.
                    </p>
</div>

<div className="bg-[#121212] border border-white/5 p-8 rounded-2xl hover:border-white/10 transition-colors group">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors bg-amber-500/10 group-hover:bg-amber-500/20">
<svg className="lucide lucide-user w-6 h-6 text-amber-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
<h3 className="text-white text-lg font-medium mb-3">Personalized service</h3>
<p className="text-slate-400 text-base leading-relaxed">
                        Our team tailors every step of the buying or selling process to meet your unique needs and preferences.
                    </p>
</div>

<div className="bg-[#121212] border border-white/5 p-8 rounded-2xl hover:border-white/10 transition-colors group">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors bg-amber-500/10 group-hover:bg-amber-500/20">
<svg className="lucide lucide-trending-up w-6 h-6 text-amber-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<h3 className="text-white text-lg font-medium mb-3">Proven track record</h3>
<p className="text-slate-400 text-base leading-relaxed">
                        With years of successful transactions, we consistently deliver results that exceed our clients' expectations.
                    </p>
</div>

<div className="bg-[#121212] border border-white/5 p-8 rounded-2xl hover:border-white/10 transition-colors group">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors bg-amber-500/10 group-hover:bg-amber-500/20">
<svg className="lucide lucide-heart-handshake w-6 h-6 text-amber-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762"></path></svg>
</div>
<h3 className="text-white text-lg font-medium mb-3">Always in the know</h3>
<p className="text-slate-400 text-base leading-relaxed">
                        We keep clients informed at every stage, ensuring clarity, trust, and confidence throughout the process.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0b0b0c]">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<h2 className="text-4xl md:text-5xl text-white font-medium tracking-tight">
                    Your guide to smarter
                    <span className="font-script text-amber-500">property decisions</span>
</h2>
<button className="bg-[#1a1a1a] hover:bg-[#222] text-white border border-white/10 px-5 py-2.5 rounded-full font-medium text-xs transition-colors flex items-center gap-2">
                    Explore More
                    <svg className="lucide lucide-arrow-up-right w-3 h-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group cursor-pointer">
<div className="overflow-hidden rounded-2xl mb-6 relative aspect-video">
<img alt="City" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-white text-xl font-medium mb-2 transition-colors group-hover:text-amber-300">Understanding modern real estate market trends and what they mean for you</h3>
<p className="text-slate-500 text-sm">5 min read</p>
</div>

<div className="group cursor-pointer">
<div className="overflow-hidden rounded-2xl mb-6 relative aspect-video">
<img alt="Family Home" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<h3 className="text-white text-xl font-medium mb-2 transition-colors group-hover:text-amber-300">How to stage your home to sell faster and maximize its value</h3>
<p className="text-slate-500 text-sm">6 min read</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0b0b0c] overflow-hidden">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10 w-fit mb-6">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
<span className="text-slate-200 text-xs font-medium uppercase tracking-wide">Testimonials</span>
</div>
<div className="flex justify-between items-end mb-12">
<h2 className="text-4xl md:text-5xl text-white font-medium tracking-tight">
                    What our <span className="font-script text-amber-500">clients say</span>
</h2>
<div className="flex gap-3">
<button className="w-10 h-10 rounded-full border border-white/10 bg-[#1a1a1a] flex items-center justify-center hover:text-black transition-all text-amber-500 hover:bg-amber-500">
<svg className="lucide lucide-arrow-left w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<button className="w-10 h-10 rounded-full border border-white/10 bg-[#1a1a1a] flex items-center justify-center hover:text-black transition-all text-amber-500 hover:bg-amber-500">
<svg className="lucide lucide-arrow-right w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-[#121212] rounded-2xl overflow-hidden border border-white/5 p-6 pb-8">
<div className="relative w-full h-48 mb-6 overflow-hidden rounded-tl-2xl rounded-br-[80px]">
<img alt="Client" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<p className="text-white text-lg italic font-serif leading-relaxed mb-6">"Solflare guided us through the buying process with patience and expertise, making everything smooth from start to finish."</p>
<div>
<p className="text-sm font-medium text-amber-500">Noa and John</p>
<p className="text-slate-500 text-xs mt-1">Homebuyers, Encinitas, CA</p>
</div>
</div>

<div className="bg-[#121212] rounded-2xl overflow-hidden border border-white/5 p-6 pb-8">
<div className="relative w-full h-48 mb-6 overflow-hidden rounded-tl-2xl rounded-br-[80px]">
<img alt="Client" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<p className="text-white text-lg italic font-serif leading-relaxed mb-6">"We were impressed by their honesty and transparency, which made us feel secure in our decision."</p>
<div>
<p className="text-sm font-medium text-amber-500">Emma and Carlos</p>
<p className="text-slate-500 text-xs mt-1">First-Time Homebuyers</p>
</div>
</div>

<div className="bg-[#121212] rounded-2xl overflow-hidden border border-white/5 p-6 pb-8">
<div className="relative w-full h-48 mb-6 overflow-hidden rounded-tl-2xl rounded-br-[80px]">
<img alt="Client" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1542596594-649edbc13630?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<p className="text-white text-lg italic font-serif leading-relaxed mb-6">"The Solflare team was always available to answer questions and made us feel confident every step of the way."</p>
<div>
<p className="text-sm font-medium text-amber-500">Sarah and Daniel</p>
<p className="text-slate-500 text-xs mt-1">First-time buyers, San Marcos, CA</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0b0b0c] relative">

<div className="absolute bottom-0 left-0 w-1/3 h-[500px] rounded-full blur-[120px] pointer-events-none bg-amber-500/5"></div>
<div className="max-w-3xl mx-auto px-6 lg:px-12 relative z-10">
<div className="text-center mb-16">
<div className="inline-flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10 mb-6">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
<span className="text-slate-200 text-xs font-medium uppercase tracking-wide">FAQ</span>
</div>
<h2 className="text-4xl md:text-5xl text-white font-medium tracking-tight">
                    Clear answers to
                    <span className="font-script text-amber-500">common questions</span>
</h2>
</div>
<div className="space-y-4">
<div className="bg-[#141414] hover:bg-[#1a1a1a] rounded-lg border border-white/5 p-5 flex justify-between items-center cursor-pointer transition-colors group">
<span className="text-slate-200 font-medium text-base">How do I start buying a home?</span>
<svg className="lucide lucide-plus text-slate-500 w-5 h-5 transition-colors group-hover:text-amber-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
<div className="bg-[#141414] hover:bg-[#1a1a1a] rounded-lg border border-white/5 p-5 flex justify-between items-center cursor-pointer transition-colors group">
<span className="text-slate-200 font-medium text-base">How much do I need for a down payment?</span>
<svg className="lucide lucide-plus text-slate-500 w-5 h-5 transition-colors group-hover:text-amber-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
<div className="bg-[#141414] hover:bg-[#1a1a1a] rounded-lg border border-white/5 p-5 flex justify-between items-center cursor-pointer transition-colors group">
<span className="text-slate-200 font-medium text-base">What is the home selling process?</span>
<svg className="lucide lucide-plus text-slate-500 w-5 h-5 transition-colors group-hover:text-amber-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
<div className="bg-[#141414] hover:bg-[#1a1a1a] rounded-lg border border-white/5 p-5 flex justify-between items-center cursor-pointer transition-colors group">
<span className="text-slate-200 font-medium text-base">Do I need a real estate agent?</span>
<svg className="lucide lucide-plus text-slate-500 w-5 h-5 transition-colors group-hover:text-amber-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
<div className="bg-[#141414] hover:bg-[#1a1a1a] rounded-lg border border-white/5 p-5 flex justify-between items-center cursor-pointer transition-colors group">
<span className="text-slate-200 font-medium text-base">What costs should I expect besides the listing price?</span>
<svg className="lucide lucide-plus text-slate-500 w-5 h-5 transition-colors group-hover:text-amber-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
</div>
</div>
</section>

<footer className="bg-[#0b0b0c] border-t border-white/5 pt-24 pb-12 relative z-10">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 mb-20">

<div>
<h2 className="text-4xl md:text-5xl text-white font-medium tracking-tight mb-8">
                        Start your next<br/>
<span className="font-script text-amber-500">real estate journey</span>
</h2>
<p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-md">
                        Have questions about buying, selling, or investing? Fill out the form below and our Solflare team will get back to you promptly with the guidance you need.
                    </p>
<div className="flex gap-4 mb-10">
<a className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-300 transition-colors" href="#">
<svg className="lucide lucide-facebook w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-300 transition-colors" href="#">
<svg className="lucide lucide-instagram w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-300 transition-colors" href="#">
<svg className="lucide lucide-twitter w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-300 transition-colors" href="#">
<svg className="lucide lucide-linkedin w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</div>
<div className="space-y-6 text-sm text-slate-300">
<div>
<p className="text-white font-medium mb-1">Open Hours</p>
<p className="text-slate-500">Monday-Friday: 11:00AM-8:00PM</p>
</div>
<div>
<p className="text-white font-medium mb-1">Address</p>
<p className="text-slate-500">1000 Van Ness Ave, San Francisco, CA 94109</p>
<p className="text-slate-500">(415) 823-7641</p>
<p className="text-slate-500">solflare.estate@gmail.com</p>
</div>
</div>
</div>

<div className="bg-[#141414] p-8 rounded-2xl border border-white/5">
<form action="https://jwjsolutions.app.n8n.cloud/webhook-test/ghl-lead-capture" className="space-y-5" id="contactForm" method="post">
<div className="grid grid-cols-2 gap-5">
<div className="space-y-2">
<label className="text-xs font-medium text-slate-300 ml-1">Name</label>
<input className="w-full bg-[#1e1e1e] border border-white/5 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-1 transition-all focus:ring-amber-300/50" name="name" placeholder="Your name" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-300 ml-1">Surname</label>
<input className="w-full bg-[#1e1e1e] border border-white/5 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-1 transition-all focus:ring-amber-300/50" name="surname" placeholder="Your surname" required="" type="text"/>
</div>
</div>
<div className="grid grid-cols-2 gap-5">
<div className="space-y-2">
<label className="text-xs font-medium text-slate-300 ml-1">Mail</label>
<input className="w-full bg-[#1e1e1e] border border-white/5 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-1 transition-all focus:ring-amber-300/50" name="email" placeholder="Your email address" required="" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-300 ml-1">Phone</label>
<input className="w-full bg-[#1e1e1e] border border-white/5 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-1 transition-all focus:ring-amber-300/50" name="phone" placeholder="Your phone number" required="" type="tel"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-300 ml-1">Message</label>
<textarea className="w-full bg-[#1e1e1e] border border-white/5 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-1 transition-all resize-none focus:ring-amber-300/50" name="message" placeholder="How can we help you" required="" rows="4"></textarea>
</div>
<button className="w-full bg-amber-500 hover:bg-amber-400 text-[#0b0b0c] font-medium py-3 rounded-full transition-colors text-sm" type="submit">
                            Send Message
                        </button>
</form>
</div>
</div>

<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<span className="text-white text-2xl font-script">Solflare</span>
<p className="text-slate-500 text-xs">© 2024 Solflare Real Estate. All rights reserved.</p>
</div>
</div>
</footer>


    </>
  );
}
