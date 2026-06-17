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
<nav className="glass flex md:gap-10 transition-all duration-300 pointer-events-auto w-full max-w-5xl border-gray-200/60 border rounded-full pt-3 pr-6 pb-3 pl-6 shadow-[0_2px_10px_-2px_rgba(0,0,0,0.05)] items-center justify-between">

<a className="group flex items-center gap-2 shrink-0" href="#">
<img alt="GrowthWrite Partners" className="w-auto h-8 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0a0ba717-3ef1-49c9-9364-d2a421f00de0_320w.png"/>
</a>

<a className="text-xs px-5 py-2.5 rounded-full transition-all duration-300 flex items-center gap-2 font-montserrat font-medium group shadow-md hover:shadow-lg hover:shadow-[#0213f5]/20 bg-gray-900 text-white hover:bg-[#0213f5] shrink-0" href="#book-call">
                Get Started
                <i className="w-3 h-3 transition-transform group-hover:translate-x-0.5 hidden sm:block" data-lucide="arrow-right"></i>
</a>
</nav>
</header>
<main className="md:pt-32 md:px-6 max-w-7xl mr-auto ml-auto pt-28 pr-4 pb-24 pl-4">

<section className="md:rounded-[2.5rem] md:p-12 lg:p-20 overflow-hidden md:mb-16 text-center bg-white border-gray-200/60 border rounded-[2rem] mb-12 py-12 px-6 relative shadow-[0_1px_2px_rgba(0,0,0,0.02)]">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:3rem_3rem] md:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-50"></div>
<div className="flex flex-col z-10 max-w-5xl mr-auto ml-auto relative items-center">

<div className="animate-fade-up text-[13px] uppercase md:mb-8 font-semibold text-[#0213f5] tracking-widest font-montserrat bg-blue-50 w-fit border-blue-100 border rounded-full mb-6 py-1.5 px-4">
        Attention B2B Business Owners
    </div>

<h1 className="animate-fade-up delay-100 sm:text-5xl md:text-7xl lg:text-[5rem] leading-[1.1] md:leading-[0.95] md:mb-8 text-4xl font-medium text-gray-900 tracking-tighter font-serif mb-6">
        We'll
        <span className="italic text-[#0213f5] pr-2">Get You 8-12 Clients</span>
        Without Cold Calling, Networking Events, or Begging for Referrals or You Don't Pay<br className="hidden md:block"/>
</h1>

<p className="animate-fade-up delay-200 md:text-xl leading-relaxed md:mb-12 text-base font-light text-gray-500 max-w-2xl mb-8 px-2">
        Our proprietary "Authority Magnet" system that positions you as the go-to expert in your niche and has prospects
        reaching out to YOU ready to pay premium fees.
    </p>

<div className="animate-fade-up delay-300 md:rounded-[2rem] md:border-4 md:shadow-2xl overflow-hidden md:mb-12 shadow-gray-200 bg-gray-900 w-full max-w-4xl border-white/50 border-2 ring-gray-900/5 ring-1 rounded-xl mb-8 relative shadow-xl z-10">
<div className="w-full relative bg-gray-900">


<div className="wistia_responsive_padding" style={{padding: '56.25% 0 0 0', position: 'relative'}}>
<div className="wistia_responsive_wrapper" style={{height: '100%', left: '0', position: 'absolute', top: '0', width: '100%'}}>
<div className="wistia_embed wistia_async_50omjzjdcp videoFoam=true" id="wistia-50omjzjdcp-1" style={{height: '100%', position: 'relative', width: '100%'}}> </div>
</div>
</div>
</div>
</div>

<div className="animate-fade-up delay-500 flex flex-col sm:flex-row gap-3 md:gap-4 items-center justify-center w-full mb-6">

<a className="sm:w-auto md:py-4 hover:shadow-xl hover:shadow-[#0213f5]/20 transition-all duration-300 flex items-center justify-center gap-2 group hover:bg-[#0213f5] uppercase text-sm font-medium text-white tracking-wide font-montserrat bg-gray-900 w-full rounded-full pt-3.5 pr-8 pb-3.5 pl-8" href="#book-call">
            Book a Strategy Call
        </a>
<a className="w-full sm:w-auto border px-8 py-3.5 md:py-4 rounded-full text-sm transition-all duration-300 font-montserrat font-medium flex items-center justify-center gap-2 bg-white border-gray-200 text-gray-900 hover:border-gray-400" href="#process">
            Learn More
        </a>
</div>

<p className="animate-fade-up delay-500 text-[10px] md:text-xs text-gray-400 font-montserrat">
        GET MY AUTHORITY MAGNET BLUEPRINT
    </p>
</div>
</section>

<div className="md:py-12 md:mb-20 text-center w-full border-gray-100 border-b mb-16 py-8">
<h3 className="md:text-2xl text-xl text-gray-900 font-serif mb-2 tracking-tight">Some of the organizations we've supported:</h3>
<p className="text-[10px] md:text-xs uppercase md:mb-10 text-gray-400 tracking-widest font-montserrat mb-8">Join the fastest growing brands working with Growthwrite Partners</p>
<div className="marquee-mask relative overflow-hidden">
<div className="flex w-max animate-infinite-scroll">

<div className="flex items-center gap-10 md:gap-16 px-4 md:px-8 grayscale opacity-60 scale-90 md:scale-100">
<img alt="Client Logo" className="md:h-12 w-auto h-10 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/15eb4c86-a060-4181-bbb1-df893a6f3662_320w.png"/>
<img alt="Client Logo" className="md:h-12 w-auto h-10 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e2b3aa48-3be3-4133-9b93-b5cd936806aa_320w.png"/>
<img alt="Client Logo" className="md:h-12 w-auto h-10 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4d9b7ed3-2ad8-409a-a518-4b4c20da8c0f_320w.png"/><img alt="Client Logo" className="md:h-12 w-auto h-10 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/449b379c-c102-4342-8b53-94ea526201b2_320w.png"/>
<img alt="Client Logo" className="md:h-12 w-auto h-10 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3d2c4e24-44fd-419f-8449-2512600891b5_320w.png"/>
<img alt="Client Logo" className="md:h-12 w-auto h-10 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/08b1222e-da0e-4f09-86f1-f8b9482fae24_320w.png"/>
<img alt="Client Logo" className="md:h-12 w-auto h-10 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/efe2cab0-ab8d-4aa8-8303-d8008240f910_320w.png"/>
</div>

<div className="flex items-center gap-10 md:gap-16 px-4 md:px-8 grayscale opacity-60 scale-90 md:scale-100">
<img alt="Client Logo" className="md:h-12 w-auto h-10 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/15eb4c86-a060-4181-bbb1-df893a6f3662_320w.png"/>
<img alt="Client Logo" className="md:h-12 w-auto h-10 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e2b3aa48-3be3-4133-9b93-b5cd936806aa_320w.png"/>
<img alt="Client Logo" className="md:h-12 w-auto h-10 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4d9b7ed3-2ad8-409a-a518-4b4c20da8c0f_320w.png"/><img alt="Client Logo" className="md:h-12 w-auto h-10 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/449b379c-c102-4342-8b53-94ea526201b2_320w.png"/>
<img alt="Client Logo" className="md:h-12 w-auto h-10 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3d2c4e24-44fd-419f-8449-2512600891b5_320w.png"/>
<img alt="Client Logo" className="md:h-12 w-auto h-10 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/08b1222e-da0e-4f09-86f1-f8b9482fae24_320w.png"/>
<img alt="Client Logo" className="md:h-12 w-auto h-10 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/efe2cab0-ab8d-4aa8-8303-d8008240f910_320w.png"/>
</div>
</div>
</div>
</div>

<section className="md:py-20 max-w-6xl mx-auto py-12">
<h2 className="md:text-5xl md:mb-16 text-3xl font-medium text-gray-900 tracking-tight font-serif text-center mb-10 px-4">
                Are You Currently Struggling With...
            </h2>
<div className="grid md:grid-cols-3 gap-6 md:gap-8">

<div className="md:p-8 md:rounded-3xl hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-blue-50 to-white rounded-[1.5rem] p-6 shadow-sm" style={{position: 'relative', '--border-gradient': 'linear-gradient(135deg, #60a5fa, #0213f5)', '--border-radius-before': '1.5rem'}}>
<div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-5 md:mb-6 bg-[#0213f5]/5 text-[#0213f5]">
<i className="w-5 h-5 md:w-6 md:h-6" data-lucide="trending-down"></i>
</div>
<h3 className="md:text-xl md:mb-3 text-lg font-medium text-gray-900 font-montserrat text-center mb-2">You're Stuck In The "Feast Or Famine" Cycle</h3>
<p className="leading-relaxed text-sm font-light text-gray-500 text-center">Most business owners are trapped in an exhausting cycle. You spend more time hunting for business than actually doing the work you love.</p>
</div>

<div className="md:p-8 md:rounded-3xl hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-blue-50 to-white rounded-[1.5rem] p-6 shadow-sm border border-gray-100">
<div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-5 md:mb-6 bg-[#0213f5]/5 text-[#0213f5]">
<i className="w-5 h-5 md:w-6 md:h-6" data-lucide="users"></i>
</div>
<h3 className="md:text-xl md:mb-3 text-lg font-medium text-gray-900 font-montserrat text-center mb-2">You're Invisible To The People Who Need You Most</h3>
<p className="leading-relaxed text-sm font-light text-gray-500 text-center">You've got the skills, experience, and results to prove it. But your ideal clients don't know you exist.</p>
</div>

<div className="md:p-8 md:rounded-3xl hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-blue-50 to-white rounded-[1.5rem] p-6 shadow-sm" style={{position: 'relative', '--border-gradient': 'linear-gradient(135deg, #60a5fa, #0213f5)', '--border-radius-before': '1.5rem'}}>
<div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-5 md:mb-6 bg-[#0213f5]/5 text-[#0213f5]">
<i className="w-5 h-5 md:w-6 md:h-6" data-lucide="clock"></i>
</div>
<h3 className="md:text-xl md:mb-3 text-lg font-medium text-gray-900 font-montserrat text-center mb-2">You're Trading Time For Money Instead Of Building A Real Business</h3>
<p className="leading-relaxed text-sm font-light text-gray-500 text-center">Every month starts at zero. You can't take a vacation without your income stopping. You're essentially running an expensive hobby, not a scalable business.</p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 md:px-6 mb-24">
<div className="rounded-[2.5rem] bg-[#050A18] border border-gray-800 relative overflow-hidden py-16 px-6 md:px-20 md:py-24 shadow-2xl">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0213f5]/10 rounded-full blur-[128px] -mr-20 -mt-20 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0213f5]/5 rounded-full blur-[96px] -ml-20 -mb-20 pointer-events-none"></div>
<div className="relative z-10 max-w-6xl mx-auto">
<div className="text-center mb-20 md:mb-28">
<span className="text-[#3b82f6] font-semibold tracking-widest uppercase text-[10px] md:text-xs font-montserrat mb-5 block">
                            The Solution
                        </span>
<h2 className="text-4xl md:text-6xl text-white font-serif mb-6 tracking-tight">
                            The Authority Magnet <span className="text-[#4e6bff]">Blueprint</span>
</h2>
<p className="text-gray-400 font-light text-base md:text-xl max-w-2xl mx-auto leading-relaxed">
                            We replace chaos with a predictable client acquisition engine installed directly into your business in 90 days.
                        </p>
</div>
<div className="grid md:grid-cols-3 gap-12 md:gap-16">

<div className="relative group">
<div className="border-b border-gray-800/60 pb-8 mb-6 relative">
<span className="text-7xl md:text-8xl font-serif text-[#0213f5] opacity-20 absolute -top-10 -left-2 select-none group-hover:opacity-30 transition-opacity duration-500">01</span>
<h3 className="text-2xl font-medium text-white font-montserrat relative pt-8 z-10">Positioning &amp; Offer</h3>
</div>
<p className="text-gray-400 text-sm md:text-base leading-relaxed font-light">
                                We distill your expertise into a "Category of One" offer that separates you from generalists and commands premium pricing immediately.
                            </p>
</div>

<div className="relative group">
<div className="border-b border-gray-800/60 pb-8 mb-6 relative">
<span className="text-7xl md:text-8xl font-serif text-[#0213f5] opacity-20 absolute -top-10 -left-2 select-none group-hover:opacity-30 transition-opacity duration-500">02</span>
<h3 className="text-2xl font-medium text-white font-montserrat relative pt-8 z-10">Authority Content Assets</h3>
</div>
<p className="md:text-base leading-relaxed text-sm font-light text-gray-400">We build your automated sales assets -that nurture strangers into raving fans while you sleep.</p>
</div>

<div className="relative group">
<div className="border-b border-gray-800/60 pb-8 mb-6 relative">
<span className="text-7xl md:text-8xl font-serif text-[#0213f5] opacity-20 absolute -top-10 -left-2 select-none group-hover:opacity-30 transition-opacity duration-500">03</span>
<h3 className="text-2xl font-medium text-white font-montserrat relative pt-8 z-10">Inbound Launch</h3>
</div>
<p className="text-gray-400 text-sm md:text-base leading-relaxed font-light">
                                We launch targeted campaigns that put your message in front of your ideal clients, filling your calendar with qualified sales calls.
                            </p>
</div>
</div>
</div>
</div>
</section>
<section className="md:py-20 py-12">
<div className="md:mb-16 text-center mb-10 px-4">
<h2 className="md:text-5xl text-3xl font-medium text-gray-900 tracking-tight font-serif mb-4">How It Works:</h2>
</div>
<div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">

<div className="group md:rounded-3xl md:p-8 overflow-hidden md:h-80 flex flex-col transition-colors hover:border-[#0213f5]/30 bg-gradient-to-br from-white to-gray-50 h-64 border border-gray-200 rounded-[1.5rem] p-6 relative">
<h3 className="md:text-2xl md:mb-4 text-xl font-medium text-gray-900 font-montserrat text-center mb-3">Authority Foundation</h3>
<p className="leading-relaxed z-10 text-sm font-light text-gray-500 text-center relative">We analyze your expertise and create a content strategy that positions you as the go-to expert in your specific niche. Every piece of content is designed to attract your ideal clients while building long-term credibility.</p>
<div className="mt-auto self-end group-hover:text-[#0213f5] transition-colors duration-500 transform group-hover:scale-110 text-blue-100">
<i className="w-16 h-16 md:w-24 md:h-24 stroke-1" data-lucide="crosshair"></i>
</div>
</div>

<div className="group md:rounded-3xl md:p-8 overflow-hidden md:h-80 flex flex-col transition-colors hover:border-[#0213f5]/30 bg-gradient-to-br from-white to-gray-50 h-64 border border-gray-200 rounded-[1.5rem] p-6 relative">
<h3 className="md:text-2xl md:mb-4 text-xl font-medium text-gray-900 font-montserrat text-center mb-3">Pipeline Activation</h3>
<p className="leading-relaxed z-10 text-sm font-light text-gray-500 text-center relative">While building your authority, we simultaneously launch targeted outbound campaigns to decision-makers who need your expertise right now. These aren't spray-and-pray emails - they're personalized approaches.</p>
<div className="mt-auto self-end group-hover:text-[#0213f5] transition-colors duration-500 transform group-hover:scale-110 text-blue-100">
<i className="w-16 h-16 md:w-24 md:h-24 stroke-1" data-lucide="monitor"></i>
</div>
</div>

<div className="group md:rounded-3xl md:p-8 overflow-hidden md:h-80 flex flex-col transition-colors hover:border-[#0213f5]/30 bg-gradient-to-br from-white to-gray-50 h-64 border border-gray-200 rounded-[1.5rem] p-6 relative">
<h3 className="md:text-2xl md:mb-4 text-xl font-medium text-gray-900 font-montserrat text-center mb-3">Conversion Optimization</h3>
<p className="leading-relaxed z-10 text-sm font-light text-gray-500 text-center relative">We optimize every touchpoint in your client acquisition process, from initial contact to signed contracts.</p>
<div className="mt-auto self-end group-hover:text-[#0213f5] transition-colors duration-500 transform group-hover:scale-110 text-blue-100">
<i className="w-16 h-16 md:w-24 md:h-24 stroke-1" data-lucide="shield-check"></i>
</div>
</div>
</div>
<div className="flex justify-center">

<a className="sm:w-auto justify-center transition-all duration-300 flex items-center gap-2 hover:bg-[#0213f5] text-sm font-medium text-white font-montserrat bg-gray-900 w-full rounded-full py-3.5 px-8" href="#book-call">Book Your Strategy Call</a>
</div>
</section>

<section className="md:py-24 py-16" id="process">
<div className="text-center mb-12 md:mb-16">
<span className="text-[10px] md:text-xs font-montserrat font-bold tracking-widest uppercase mb-3 block text-[#0213f5]">
                    Transformation
                </span>
<h2 className="text-3xl md:text-5xl font-serif font-medium text-gray-900">
                    Get Consistent Results
                </h2>
</div>
<div className="grid md:grid-cols-3 gap-10 md:gap-8 max-w-6xl mx-auto relative gap-x-10 gap-y-10">

<div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-200 to-transparent -z-10"></div>

<div className="flex flex-col group text-center items-center">
<div className="w-20 h-20 md:w-24 md:h-24 border rounded-full flex items-center justify-center text-xl md:text-2xl font-serif mb-5 md:mb-6 shadow-sm group-hover:border-[#0213f5] group-hover:text-[#0213f5] transition-colors bg-white border-gray-200 text-gray-400">
                        1
                    </div>
<h3 className="text-lg md:text-xl font-semibold font-montserrat mb-2 md:mb-3 text-gray-900">
                        Book a Call
                    </h3>
<p className="leading-relaxed md:px-0 text-sm font-light text-gray-500 max-w-xs px-4">We analyze your current situation, identify your unique market position &amp; expertise, and determine if our system is a fit for your specific growth goals.</p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-20 h-20 md:w-24 md:h-24 border rounded-full flex items-center justify-center text-xl md:text-2xl font-serif mb-5 md:mb-6 shadow-sm group-hover:border-[#0213f5] group-hover:text-[#0213f5] transition-colors bg-white border-gray-200 text-gray-400">
                        2
                    </div>
<h3 className="md:text-xl md:mb-3 text-lg font-semibold text-gray-900 font-montserrat mb-2">We Build Your Engine</h3>
<p className="leading-relaxed md:px-0 text-sm font-light text-gray-500 max-w-xs px-4">Our team builds your content strategy &amp; calendar, that establish your expertise, and builds the outbound machine to get consistent qualified leads booked into your calendar.</p>
</div>

<div className="flex flex-col group text-center items-center">
<div className="w-20 h-20 md:w-24 md:h-24 border rounded-full flex items-center justify-center text-xl md:text-2xl font-serif mb-5 md:mb-6 shadow-sm group-hover:border-[#0213f5] group-hover:text-[#0213f5] transition-colors bg-white border-gray-200 text-gray-400">
                        3
                    </div>
<h3 className="text-lg md:text-xl font-semibold font-montserrat mb-2 md:mb-3 text-gray-900">
                        You Get Scale
                    </h3>
<p className="leading-relaxed md:px-0 text-sm font-light text-gray-500 max-w-xs px-4">Leads start flowing automatically. You focus on closing deals and servicing clients while we handle growth.</p>
</div>
</div>
<div className="flex justify-center mt-12 md:mt-16">

<a className="w-full sm:w-auto justify-center px-10 py-4 rounded-full text-sm transition-all duration-300 font-montserrat font-medium flex items-center gap-2 shadow-lg hover:shadow-xl hover:shadow-[#0213f5]/20 bg-gray-900 text-white hover:bg-[#0213f5]" href="#book-call">
                    Book Your Transformation
                    <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</section>

<section className="py-16 md:py-20 -mx-4 md:-mx-6 px-4 md:px-6 rounded-[2.5rem] md:rounded-[3rem] bg-gray-50">
<div className="max-w-7xl mx-auto">
<h2 className="md:text-5xl md:mb-16 text-3xl font-medium text-gray-900 tracking-tight font-serif text-center mb-10">What You Get With the Authority Magnet System:</h2>
<div className="rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-16 border shadow-sm relative overflow-hidden bg-white border-gray-200">
<div className="absolute top-0 right-0 w-[20rem] h-[20rem] md:w-[40rem] md:h-[40rem] bg-gradient-to-b from-blue-50/50 to-transparent rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
<div className="flex flex-col z-10 relative items-center">
<div className="text-center mb-8 md:mb-12 max-w-3xl">
<span className="font-semibold tracking-widest uppercase text-[10px] md:text-xs font-montserrat mb-4 block text-[#0213f5]">
                                The Ecosystem
                            </span>
<h3 className="md:text-4xl md:mb-6 text-2xl text-gray-900 font-serif mb-4">Full Authority and Client Acquisition System</h3>
<p className="md:text-lg text-base font-light text-gray-500">The Authority Magnet System has everything you need to build a consistent pipeline of qualified prospects who see you as the expert and are ready to pay premium fees.</p>
</div>
<div className="grid md:grid-cols-2 gap-y-4 gap-x-20 md:gap-y-6 w-full max-w-4xl mb-12 md:mb-16">
<ul className="space-y-4 md:space-y-6">
<li className="flex gap-3 md:gap-4 items-center">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-[#0213f5]/5 text-[#0213f5]">
<i className="w-3.5 h-3.5 md:w-5 md:h-5" data-lucide="check"></i>
</div>
<span className="md:text-lg text-sm font-medium text-gray-700 font-montserrat">Your Unique Authority Position</span>
</li>
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-[#0213f5]/5 text-[#0213f5]">
<i className="w-3.5 h-3.5 md:w-5 md:h-5" data-lucide="check"></i>
</div>
<span className="md:text-lg text-sm font-medium text-gray-700 font-montserrat">Content Creation Framework</span>
</li>
<li className="flex gap-3 md:gap-4 items-center">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-[#0213f5]/5 text-[#0213f5]">
<i className="w-3.5 h-3.5 md:w-5 md:h-5" data-lucide="check"></i>
</div>
<span className="md:text-lg text-sm font-medium text-gray-700 font-montserrat">Go-to-Market Strategy</span>
</li>
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-[#0213f5]/5 text-[#0213f5]">
<i className="w-3.5 h-3.5 md:w-5 md:h-5" data-lucide="check"></i>
</div>
<span className="md:text-lg text-sm font-medium text-gray-700 font-montserrat">Customized Outbound Engine</span>
</li>
</ul>
<ul className="space-y-4 md:space-y-6">
<li className="flex gap-3 md:gap-4 items-center">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-[#0213f5]/5 text-[#0213f5]">
<i className="w-3.5 h-3.5 md:w-5 md:h-5" data-lucide="check"></i>
</div>
<span className="md:text-lg text-sm font-medium text-gray-700 font-montserrat">Discovery Call Scripts</span>
</li>
<li className="flex gap-3 md:gap-4 items-center">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-[#0213f5]/5 text-[#0213f5]">
<i className="w-3.5 h-3.5 md:w-5 md:h-5" data-lucide="check"></i>
</div>
<span className="md:text-lg text-sm font-medium text-gray-700 font-montserrat">Social Proof Augmentation</span>
</li>
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-[#0213f5]/5 text-[#0213f5]">
<i className="w-3.5 h-3.5 md:w-5 md:h-5" data-lucide="check"></i>
</div>
<span className="md:text-lg text-sm font-medium text-gray-700 font-montserrat">Sales Development Rep</span>
</li>
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-[#0213f5]/5 text-[#0213f5]">
<i className="w-3.5 h-3.5 md:w-5 md:h-5" data-lucide="check"></i>
</div>
<span className="md:text-lg text-sm font-semibold text-gray-900 font-montserrat border-[#0213f5]/30 border-b-2">Sign 8 new clients or you don't pay</span>
</li>
</ul>
</div>
<div className="flex flex-col w-full items-center">

<a className="md:w-auto md:text-lg md:px-12 md:py-5 transition-all duration-300 flex items-center justify-center gap-3 group hover:bg-[#0213f5] shadow-blue-900/10 text-base font-medium text-white font-montserrat bg-gray-900 w-full rounded-full pt-4 pr-8 pb-4 pl-8 shadow-xl" href="#book-call">
                                Ready to Get Started?
                            </a>
<p className="md:mt-6 md:text-sm text-xs text-gray-400 font-montserrat mt-4">Claim Your Authority Magnet System. Schedule Your Strategy Session.</p>
</div>
</div>
</div>
</div>
</section>

<section className="md:py-24 grid lg:grid-cols-2 md:gap-16 border-gray-100 border-t pt-16 pb-16 gap-x-10 gap-y-10 items-center">
<div className="order-2 lg:order-1">
<h2 className="md:text-5xl md:mb-8 text-3xl font-medium text-gray-900 tracking-tight font-serif mb-6">Hi, I'm Oscar.
    </h2>
<div className="space-y-4 md:space-y-6 text-sm md:text-base text-gray-500 font-light leading-relaxed">
<p className="">I founded <span className="font-medium text-gray-900">GrowthWrite Partners</span> with one mission: to
        eliminate the guesswork in digital growth.</p>
<p className="">After founding a business, scaling it to seven figures, and exiting, I realized most agencies are
        broken. In 18+ years of B2B business development, I have watched too many teams optimize for noise instead of
        revenue.</p>
<p className="">We built GrowthWrite to install the missing system: clear positioning, consistent outbound across
        email and LinkedIn, and simple automation that turns attention into qualified conversations and clients.</p>
</div>
</div>
<div className="relative order-1 lg:order-2 h-64 md:h-[500px] w-full rounded-[2rem] overflow-hidden bg-gray-100">
<img alt="Oscar - Founder" className="hover:grayscale-0 transition-all duration-700 w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/304c65f8-59c1-4791-9ad4-083b1d2c6148_1600w.png"/>
</div>
</section>

<section className="md:py-10 md:mb-24 md:px-6 max-w-3xl mx-auto py-8 px-2">
<h2 className="md:text-3xl md:mb-12 text-2xl font-medium text-gray-900 tracking-tight font-serif text-center mb-10">FAQs - Everything you need to know.</h2>
<div className="space-y-4">

<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-white border-gray-200">
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-medium font-montserrat select-none text-gray-900 text-sm md:text-base">
                        How fast can we expect results?
                        <i className="w-4 h-4 md:w-5 md:h-5 transition-transform group-open:rotate-180 text-gray-400" data-lucide="chevron-down"></i>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-gray-500 leading-relaxed font-light border-t pt-4 border-gray-100">
                        Most business owners start seeing increased inquiries within 30-45 days of implementing the system. The key is consistency in execution.
                    </div>
</details>

<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-white border-gray-200">
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-medium font-montserrat select-none text-gray-900 text-sm md:text-base">
                        Will this work in my specific industry?
                        <i className="w-4 h-4 md:w-5 md:h-5 transition-transform group-open:rotate-180 text-gray-400" data-lucide="chevron-down"></i>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-gray-500 leading-relaxed font-light border-t pt-4 border-gray-100">
                        The Authority Magnet System works across most industries because it's based on fundamental principles of positioning and attraction marketing, not industry-specific tactics.
                    </div>
</details>

<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-white border-gray-200">
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-medium font-montserrat select-none text-gray-900 text-sm md:text-base">
                        Do I need technical skills to implement this?
                        <i className="w-4 h-4 md:w-5 md:h-5 transition-transform group-open:rotate-180 text-gray-400" data-lucide="chevron-down"></i>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-gray-500 leading-relaxed font-light border-t pt-4 border-gray-100">
                        No technical expertise required. The system uses simple tools and platforms that anyone can master with basic computer skills.
                    </div>
</details>

<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-white border-gray-200">
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-medium font-montserrat select-none text-gray-900 text-sm md:text-base">
                        How much of my time is required?
                        <i className="w-4 h-4 md:w-5 md:h-5 transition-transform group-open:rotate-180 text-gray-400" data-lucide="chevron-down"></i>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-gray-500 leading-relaxed font-light border-t pt-4 border-gray-100">
                        Very little. We need about 3-5 hours for onboarding. After that, maintenance requires 1-2 hours weekly + handling the leads we generate.
                    </div>
</details>

<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-white border-gray-200">
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-medium font-montserrat select-none text-gray-900 text-sm md:text-base">
                        What if I'm not good at writing or creating content?
                        <i className="w-4 h-4 md:w-5 md:h-5 transition-transform group-open:rotate-180 text-gray-400" data-lucide="chevron-down"></i>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-gray-500 leading-relaxed font-light border-t pt-4 border-gray-100">
                        You don't need to be. I personally write all the content for you (or collaborate with you if you prefer). You get professional-grade copy without the learning curve or time investment.
                    </div>
</details>
</div>
<p className="text-sm text-gray-400 text-center mt-8">
                Don't see what you're looking for?
                <a className="underline transition-all text-[#0213f5] decoration-[#0213f5]/30 hover:decoration-[#0213f5]" href="#book-call">
                    Get in touch.
                </a>
</p>
</section>

<section className="md:py-24 md:px-6 max-w-7xl mr-auto ml-auto pt-16 pr-4 pb-16 pl-4" id="book-call">
<div className="md:mb-16 text-center mb-10">
<h2 className="text-3xl md:text-5xl font-serif font-medium text-gray-900 mb-6 tracking-tight">
                    Book a Call
                </h2>
<p className="text-base md:text-lg text-gray-500 font-light max-w-2xl mx-auto">
                    Book a no-commitment discovery call to discuss how we can help you grow.
                </p>
</div>
<div className="w-full bg-gray-100 rounded-[2rem] border border-gray-200 shadow-sm overflow-hidden h-[800px] md:h-[1000px] flex justify-center items-center">

<div className="calendly-inline-widget w-full h-full" data-processed="true" data-url="https://calendly.com/growthwritepartners/growth-assessment-call?hide_gdpr_banner=1&amp;primary_color=0213f5" style={{position: 'relative', position: 'relative', minWidth: '320px', height: '100%', width: '100%'}}>
<div className="calendly-spinner">
<div className="calendly-bounce1"></div>
<div className="calendly-bounce2"></div>
<div className="calendly-bounce3"></div>
</div>
<iframe className="" frameborder="0" height="100%" src="https://calendly.com/growthwritepartners/growth-assessment-call?embed_domain=&amp;embed_type=Inline&amp;hide_gdpr_banner=1&amp;primary_color=0213f5" title="Select a Date &amp; Time - Calendly" width="100%"></iframe>
<div className="calendly-spinner"><div className="calendly-bounce1"></div><div className="calendly-bounce2"></div><div className="calendly-bounce3"></div></div><iframe className="" frameborder="0" height="100%" src="https://calendly.com/growthwritepartners/growth-assessment-call?embed_domain=&amp;embed_type=Inline&amp;hide_gdpr_banner=1&amp;primary_color=0213f5" title="Select a Date &amp; Time - Calendly" width="100%"></iframe></div>


</div>
</section>
</main><style className="wistia_injected_style" id="wistia_22_style" type="text/css">
@font-face {
font-family: 'WistiaPlayerInterNumbersSemiBold';
font-feature-settings: 'tnum' 1;
src: url(data:application/x-font-woff;charset=utf-8;base64,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);
}
</style><style className="wistia_injected_style" id="wistia_22_style" type="text/css">
@font-face {
font-family: 'WistiaPlayerInterNumbersSemiBold';
font-feature-settings: 'tnum' 1;
src: url(data:application/x-font-woff;charset=utf-8;base64,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);
}
</style>

<footer className="border-t pt-12 md:pt-16 pb-8 md:pb-10 px-4 md:px-6 bg-white border-gray-200">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-10">

<div className="text-center md:text-left">
<a className="text-2xl font-medium italic text-gray-900 tracking-tight font-serif" href="#">GrowthWrite Partners</a>
<p className="text-xs mt-3 max-w-xs font-light text-gray-400 mx-auto md:mx-0">
                    Scaling revenue for ambitious brands through intelligent ecosystems.
                </p>
</div>

<div className="flex flex-col gap-3 md:text-right text-center gap-x-3 gap-y-3">
<a className="transition-colors hover:text-[#0213f5] text-sm font-medium text-gray-600" href="/#process">How it Works</a>
<a className="transition-colors hover:text-[#0213f5] text-sm font-medium text-gray-600" href="/#book-call">Book Your Call</a>
</div>
</div>
<div className="max-w-7xl mx-auto mt-12 md:mt-16 pt-8 border-t text-center text-[10px] md:text-xs font-montserrat border-gray-100 text-gray-400">
<p>© 2024 GrowthWrite Partners. All rights reserved.</p>
</div>
</footer>

<style className="wistia_injected_style" id="wistia_22_style" type="text/css">
@font-face {
font-family: 'WistiaPlayerInterNumbersSemiBold';
font-feature-settings: 'tnum' 1;
src: url(data:application/x-font-woff;charset=utf-8;base64,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);
}
</style>
    </>
  );
}
