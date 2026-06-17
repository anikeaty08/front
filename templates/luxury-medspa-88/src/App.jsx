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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-stone-200 transition-all duration-300">
<div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-stone-900 text-white flex items-center justify-center rounded-sm">
<span className="font-serif italic font-bold text-xl">A</span>
</div>
<span className="font-serif text-xl tracking-tight font-semibold text-stone-900">AESTHETICA</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-widest uppercase text-stone-500">
<a className="hover:text-stone-900 transition-colors" href="#vision">Vision</a>
<a className="hover:text-stone-900 transition-colors" href="#portfolio">Portfolio</a>
<a className="hover:text-stone-900 transition-colors" href="#system">System</a>
<a className="hover:text-stone-900 transition-colors" href="#results">Journal</a>
</div>
<button className="hidden md:flex items-center gap-2 px-6 py-2.5 text-xs font-semibold tracking-widest uppercase bg-stone-900 text-white hover:bg-stone-800 transition-all rounded-sm">
                Inquire Now
            </button>
</div>
</nav>

<header className="relative w-full h-screen min-h-[800px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Luxury Spa Atmosphere" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40"></div> 
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
<div className="animate-enter mb-6 flex justify-center">
<span className="px-3 py-1 border border-white/30 rounded-full text-[10px] uppercase tracking-[0.2em] backdrop-blur-sm">
                    Est. 2024 — Global
                </span>
</div>
<h1 className="animate-enter delay-100 font-serif text-6xl md:text-8xl lg:text-9xl leading-[0.9] mb-8">
                The Art of <br/> <span className="italic font-light opacity-90">Attraction.</span>
</h1>
<p className="animate-enter delay-200 text-white/80 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed mb-12">
                We orchestrate digital elegance for the world's most prestigious MedSpas. 
                Replacing chaos with a silent, high-converting digital concierge.
            </p>
<div className="animate-enter delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="px-8 py-4 bg-white text-stone-900 min-w-[180px] text-xs font-bold tracking-widest uppercase hover:bg-stone-200 transition-colors">
                    View Portfolio
                </button>
<button className="px-8 py-4 border border-white/30 text-white min-w-[180px] text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-stone-900 transition-all backdrop-blur-sm">
                    Our Method
                </button>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
<i className="w-5 h-5" data-lucide="arrow-down"></i>
</div>
</header>

<section className="py-10 border-b border-stone-200 bg-white">
<div className="max-w-[1400px] mx-auto px-6">
<p className="text-center text-[10px] uppercase tracking-widest text-stone-400 mb-8">Trusted by industry leaders</p>
<div className="flex flex-wrap justify-center gap-16 md:gap-32 grayscale opacity-60">

<span className="font-serif text-2xl font-semibold text-stone-900">VOGUE<span className="font-sans text-xs align-top ml-1">CLINIC</span></span>
<span className="font-serif text-2xl font-medium italic text-stone-900">SkinCeuticals</span>
<span className="font-serif text-2xl font-semibold text-stone-900">ÉLEVÉ</span>
<span className="font-serif text-2xl font-semibold text-stone-900">AURA</span>
<span className="font-serif text-2xl font-medium italic text-stone-900">Lumière</span>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAFA] overflow-hidden" id="portfolio">
<div className="mb-12 text-center px-6">
<h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-4">Curated Excellence</h2>
<p className="text-stone-500 font-light">A visual study of the brands we've elevated.</p>
</div>

<div className="relative w-full mb-4">
<div className="flex gap-4 w-[200%] animate-scroll hover:pause">

<div className="flex gap-4 min-w-full">
<img alt="Spa" className="h-64 w-48 object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=500&amp;q=80"/>
<img alt="Interior" className="h-64 w-80 object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=500&amp;q=80"/>
<img alt="Treatment" className="h-64 w-64 object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1552693673-1bf958298935?w=500&amp;q=80"/>
<img alt="Product" className="h-64 w-48 object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&amp;q=80"/>
<img alt="Face" className="h-64 w-80 object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=500&amp;q=80"/>
<img alt="Cream" className="h-64 w-56 object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1620331311520-246422fd82f9?w=500&amp;q=80"/>
<img alt="Spa" className="h-64 w-64 object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?w=500&amp;q=80"/>
<img alt="Juice" className="h-64 w-48 object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1603569283847-aa295f0d016a?w=500&amp;q=80"/>

<img alt="Spa" className="h-64 w-48 object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=500&amp;q=80"/>
<img alt="Interior" className="h-64 w-80 object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=500&amp;q=80"/>
<img alt="Treatment" className="h-64 w-64 object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1552693673-1bf958298935?w=500&amp;q=80"/>
<img alt="Product" className="h-64 w-48 object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&amp;q=80"/>
<img alt="Face" className="h-64 w-80 object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=500&amp;q=80"/>
<img alt="Cream" className="h-64 w-56 object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1620331311520-246422fd82f9?w=500&amp;q=80"/>
</div>
</div>
</div>

<div className="relative w-full">
<div className="flex gap-4 w-[200%] animate-scroll-reverse hover:pause">
<div className="flex gap-4 min-w-full">
<img alt="Texture" className="h-64 w-56 object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1519415943484-9fa1873496d4?w=500&amp;q=80"/>
<img alt="Light" className="h-64 w-80 object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=500&amp;q=80"/>
<img alt="Massage" className="h-64 w-48 object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?w=500&amp;q=80"/>
<img alt="Stone" className="h-64 w-64 object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=500&amp;q=80"/>
<img alt="White" className="h-64 w-48 object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1554057009-6798cb3d4a04?w=500&amp;q=80"/>
<img alt="Abstract" className="h-64 w-80 object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500&amp;q=80"/>
<img alt="Clean" className="h-64 w-64 object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1555820585-c5ae44394b79?w=500&amp;q=80"/>

<img alt="Texture" className="h-64 w-56 object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1519415943484-9fa1873496d4?w=500&amp;q=80"/>
<img alt="Light" className="h-64 w-80 object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=500&amp;q=80"/>
<img alt="Massage" className="h-64 w-48 object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?w=500&amp;q=80"/>
<img alt="Stone" className="h-64 w-64 object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=500&amp;q=80"/>
<img alt="White" className="h-64 w-48 object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1554057009-6798cb3d4a04?w=500&amp;q=80"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="vision">
<div className="max-w-[1400px] mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
<div>
<span className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-6 block">The Vision</span>
<h2 className="font-serif text-5xl lg:text-7xl text-stone-900 mb-8 leading-[0.9]">
                        Beauty deserves <br/>
<span className="italic text-stone-400">better systems.</span>
</h2>
<div className="space-y-6 text-stone-600 font-light text-lg">
<p>
                            The modern patient is discerning. They expect their digital interaction to match the elegance of your physical clinic. Yet, most MedSpas rely on outdated forms and slow responses.
                        </p>
<p>
                            We build the bridge. A seamless, automated infrastructure that nurtures leads, collects deposits, and fills your calendar while you focus on the artistry of treatment.
                        </p>
</div>
<div className="mt-10 flex gap-12">
<div>
<p className="font-serif text-4xl text-stone-900">2.5x</p>
<p className="text-xs uppercase tracking-widest text-stone-500 mt-2">Revenue Growth</p>
</div>
<div>
<p className="font-serif text-4xl text-stone-900">0%</p>
<p className="text-xs uppercase tracking-widest text-stone-500 mt-2">Response Delay</p>
</div>
<div>
<p className="font-serif text-4xl text-stone-900">40+</p>
<p className="text-xs uppercase tracking-widest text-stone-500 mt-2">Elite Partners</p>
</div>
</div>
</div>
<div className="relative group">
<div className="absolute inset-0 bg-stone-900/5 translate-x-4 translate-y-4 rounded-sm transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
<div className="relative overflow-hidden rounded-sm">
<img alt="Architectural Beauty" className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10"></div>
<div className="absolute bottom-8 left-8 text-white">
<p className="font-serif italic text-2xl">Refined Workflow</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAFA]" id="system">
<div className="max-w-[1400px] mx-auto px-6">
<div className="flex justify-between items-end mb-16">
<div>
<h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-2">The Ecosystem</h2>
<p className="text-stone-500 font-light">Comprehensive infrastructure for the modern clinic.</p>
</div>
<button className="hidden md:block text-xs font-bold uppercase tracking-widest border-b border-stone-900 pb-1">Explore All Features</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 h-auto md:h-[600px]">

<div className="md:col-span-2 md:row-span-2 bg-white p-8 md:p-12 rounded-sm border border-stone-100 group hover:shadow-xl transition-all duration-500 relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-stone-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10 flex flex-col justify-between h-full">
<div>
<div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center mb-6">
<i className="w-5 h-5 text-stone-700" data-lucide="message-square"></i>
</div>
<h3 className="font-serif text-3xl text-stone-900 mb-4">Concierge AI</h3>
<p className="text-stone-500 font-light leading-relaxed max-w-md">
                                Your front desk sleeps. Our AI doesn't. We handle inquiries, qualify budgets, answer FAQs, and book appointments 24/7/365. It's indistinguishable from a human, but faster.
                            </p>
</div>

<div className="mt-8 space-y-3 opacity-60 group-hover:opacity-100 transition-opacity">
<div className="bg-stone-50 p-3 rounded-tr-xl rounded-bl-xl rounded-br-xl w-fit max-w-[80%] text-xs text-stone-600 border border-stone-100">
                                Do you have availability for microneedling this Friday?
                            </div>
<div className="bg-stone-900 p-3 rounded-tl-xl rounded-bl-xl rounded-br-xl w-fit max-w-[80%] ml-auto text-xs text-white">
                                Yes, Sarah. We have a 2:00 PM opening. Should I secure that for you with a deposit?
                            </div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-sm border border-stone-100 hover:shadow-lg transition-all duration-300">
<i className="w-6 h-6 text-stone-900 mb-4" data-lucide="credit-card"></i>
<h3 className="font-serif text-xl text-stone-900 mb-2">Auto-Deposits</h3>
<p className="text-xs text-stone-500 leading-relaxed">Eliminate no-shows. We automatically collect deposits during the booking conversation.</p>
</div>

<div className="bg-white p-8 rounded-sm border border-stone-100 hover:shadow-lg transition-all duration-300">
<i className="w-6 h-6 text-stone-900 mb-4" data-lucide="bar-chart-2"></i>
<h3 className="font-serif text-xl text-stone-900 mb-2">Revenue Dashboard</h3>
<p className="text-xs text-stone-500 leading-relaxed">Crystal clear analytics. Know exactly how much revenue your digital channels are generating.</p>
</div>
</div>
</div>
</section>

<section className="relative h-[80vh] w-full overflow-hidden bg-fixed bg-center bg-cover flex items-center justify-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&amp'}}>
<div className="absolute inset-0 bg-black/50"></div>
<div className="relative z-10 text-center px-6">
<h2 className="font-serif text-5xl md:text-7xl text-white mb-6 italic tracking-tight">"Details create the big picture."</h2>
<p className="text-white/80 text-sm uppercase tracking-widest font-medium">Sanford I. Weill</p>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-[1400px] mx-auto px-6">
<div className="flex flex-col md:flex-row gap-16">
<div className="md:w-1/3">
<h2 className="font-serif text-4xl text-stone-900 mb-6">The Protocol</h2>
<p className="text-stone-500 font-light text-sm leading-loose">
                        We don't just run ads. We install a complete client acquisition infrastructure. It is a three-stage process designed for rapid implementation and long-term sustainability.
                    </p>
<div className="mt-8">
<img alt="Process" className="w-full h-64 object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1596178065248-132d2941ee44?w=800&amp;q=80"/>
</div>
</div>
<div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
<div className="group">
<span className="text-5xl font-serif text-stone-200 group-hover:text-stone-300 transition-colors">01</span>
<h3 className="text-lg font-medium text-stone-900 mt-4 mb-2">Audit &amp; Calibration</h3>
<p className="text-sm text-stone-500 leading-relaxed">We analyze your current patient flow, identifying leaks in the funnel. We then calibrate our AI to match your clinic's specific tone of voice and pricing structure.</p>
</div>
<div className="group">
<span className="text-5xl font-serif text-stone-200 group-hover:text-stone-300 transition-colors">02</span>
<h3 className="text-lg font-medium text-stone-900 mt-4 mb-2">Infrastructure Deployment</h3>
<p className="text-sm text-stone-500 leading-relaxed">Within 7 days, we launch the new system. Your ads, landing pages, and AI concierge go live simultaneously, creating an immediate influx of qualified leads.</p>
</div>
<div className="group">
<span className="text-5xl font-serif text-stone-200 group-hover:text-stone-300 transition-colors">03</span>
<h3 className="text-lg font-medium text-stone-900 mt-4 mb-2">Nurture &amp; Retain</h3>
<p className="text-sm text-stone-500 leading-relaxed">The system automatically follows up with leads who didn't book, nurtures existing clients for repeat treatments, and requests reviews post-appointment.</p>
</div>
<div className="group">
<span className="text-5xl font-serif text-stone-200 group-hover:text-stone-300 transition-colors">04</span>
<h3 className="text-lg font-medium text-stone-900 mt-4 mb-2">Scale &amp; Optimize</h3>
<p className="text-sm text-stone-500 leading-relaxed">We meet bi-weekly to review revenue data. We optimize ad spend and AI scripts based on real-world conversion data to lower your cost per acquisition.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAFA]" id="results">
<div className="max-w-[1400px] mx-auto px-6">
<h2 className="font-serif text-4xl text-stone-900 mb-12 text-center">Aesthetic Journal</h2>
<div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">

<div className="break-inside-avoid group relative overflow-hidden rounded-sm cursor-pointer">
<div className="img-zoom-container">
<img alt="Gallery" className="w-full object-cover img-zoom" src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<p className="text-white font-serif italic text-xl">Laser Treatment</p>
</div>
</div>

<div className="break-inside-avoid group relative overflow-hidden rounded-sm cursor-pointer">
<div className="img-zoom-container">
<img alt="Gallery" className="w-full object-cover img-zoom" src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="break-inside-avoid bg-white p-8 border border-stone-200 text-center flex flex-col items-center justify-center min-h-[300px]">
<i className="w-8 h-8 text-stone-300 mb-4" data-lucide="quote"></i>
<p className="font-serif text-xl text-stone-800 italic mb-4">"Aesthetica transformed our front desk. We doubled our bookings in month one."</p>
<p className="text-xs font-bold uppercase tracking-widest text-stone-400">Dr. Sarah V. — NYC</p>
</div>

<div className="break-inside-avoid group relative overflow-hidden rounded-sm cursor-pointer">
<div className="img-zoom-container">
<img alt="Gallery" className="w-full object-cover img-zoom" src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="break-inside-avoid group relative overflow-hidden rounded-sm cursor-pointer">
<div className="img-zoom-container">
<img alt="Gallery" className="w-full object-cover img-zoom" src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="break-inside-avoid group relative overflow-hidden rounded-sm cursor-pointer">
<div className="img-zoom-container">
<img alt="Gallery" className="w-full object-cover img-zoom" src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#111] text-white pt-32 pb-12">
<div className="max-w-[1400px] mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 border-b border-white/10 pb-24">
<div>
<h2 className="font-serif text-6xl md:text-7xl mb-8 leading-none text-white">
                        Ready to <br/> <span className="text-stone-500 italic">Ascend?</span>
</h2>
<p className="text-stone-400 font-light text-lg max-w-md mb-8">
                        We accept a limited number of partners per quarter to maintain our standard of excellence.
                    </p>
<button className="bg-white text-black px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-stone-200 transition-colors">
                        Book Strategy Call
                    </button>
</div>
<div className="flex flex-col justify-end items-start lg:items-end">
<div className="grid grid-cols-2 gap-12 text-sm text-stone-400">
<div>
<h4 className="text-white uppercase tracking-widest text-xs font-bold mb-4">Contact</h4>
<p className="mb-2">hello@aesthetica.ai</p>
<p>+1 (555) 000-0000</p>
</div>
<div>
<h4 className="text-white uppercase tracking-widest text-xs font-bold mb-4">Locations</h4>
<p className="mb-2">New York</p>
<p className="mb-2">London</p>
<p>Los Angeles</p>
</div>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="font-serif font-bold text-xl">A</span>
<span className="text-xs text-stone-500">© 2024 Aesthetica Systems</span>
</div>
<div className="flex gap-6 text-[10px] uppercase tracking-widest text-stone-500">
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
