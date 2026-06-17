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
      
<header className="fixed top-0 w-full z-50 bg-zinc-950/50 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
<a className="text-xl tracking-tight font-normal text-white flex items-center gap-2" href="#">
                Phat Tint Shop
            </a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-base font-light text-zinc-400 hover:text-white transition-colors tracking-wide uppercase" href="#">Home</a>
<a className="text-base font-light text-zinc-400 hover:text-white transition-colors tracking-wide uppercase" href="#services">Services</a>
<a className="text-base font-light text-zinc-400 hover:text-white transition-colors tracking-wide uppercase" href="#about">About</a>
<a className="text-base font-light text-zinc-400 hover:text-white transition-colors tracking-wide uppercase" href="#faq">FAQ</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden lg:flex items-center gap-2 text-base font-light text-zinc-300 hover:text-white transition-colors" href="tel:+14087750500">
<i className="w-4 h-4" data-lucide="phone" strokeWidth="1.5"></i>
                    +1 408-775-0500
                </a>
<a className="bg-white text-black hover:bg-zinc-200 px-5 py-2.5 rounded-full text-base font-normal tracking-wide transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]" href="#book">
                    BOOK NOW
                </a>
</div>
</div>
</header>
<section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-black">
<div className="absolute inset-0 z-0">
<img alt="Dark Premium Vehicle Profile" className="w-full h-full object-cover object-center opacity-60 mix-blend-lighten" src="https://images.unsplash.com/photo-1614200187524-dc4b892acf16?q=80&amp;w=2074&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-black/50"></div>
</div>
<div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
<div className="animate-fade-up max-w-4xl">
<style>
        @keyframes float-badge {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-4px); }
        }
        .animate-float-badge {
            animation: float-badge 4s ease-in-out infinite;
        }
        @keyframes text-shimmer {
            0% { background-position: 200% center; }
            100% { background-position: -200% center; }
        }
        .animate-text-shimmer {
            background: linear-gradient(to right, #71717a 20%, #e4e4e7 50%, #71717a 80%);
            background-size: 200% auto;
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            color: transparent;
            animation: text-shimmer 4s linear infinite;
        }
        @keyframes slow-spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        .animate-slow-spin {
            animation: slow-spin 8s linear infinite;
        }
    </style>
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-base text-zinc-300 mb-8 tracking-wide backdrop-blur-md animate-float-badge">
<i className="w-4 h-4" data-lucide="star" strokeWidth="1.5"></i>
        5.0 | 46 Reviews • Serving San Jose CA &amp; Surrounding Areas
    </div>
<h1 className="md:text-7xl lg:text-8xl leading-[1.05] text-5xl font-normal text-white tracking-tight mb-6">
        Premium Auto <br/>
<span className="inline-block animate-fade-up delay-300"><span className="animate-text-shimmer">Care Refined.</span></span>
</h1>
<p className="text-xl md:text-3xl text-zinc-400 max-w-2xl font-extralight leading-relaxed mb-10">
        Elevating the way you care for your vehicle. Expert mobile detailing, advanced paint correction, and resilient ceramic coatings delivered straight to your driveway.
    </p>
<div className="flex flex-col sm:flex-row items-center gap-4">
<a className="overflow-hidden sm:mr-4 mb-4 sm:mb-0 sm:w-auto hover:bg-zinc-200 transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-center justify-center gap-2 group text-lg font-normal text-black bg-white w-full rounded-full pt-4 pr-8 pb-4 pl-8 shadow-[0_0_20px_rgba(255,255,255,0.1)]" href="#quote">
            START FREE QUOTE
            <i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<a className="w-full sm:w-auto bg-transparent border border-white/20 hover:border-white/40 hover:bg-white/5 text-white px-8 py-4 rounded-full text-lg font-light transition-all flex items-center justify-center gap-2 backdrop-blur-sm" href="tel:+14087750500">
<i className="w-5 h-5" data-lucide="phone-call" strokeWidth="1.5"></i>
            CALL NOW
        </a>
</div>
</div>
<div className="mt-24 pt-8 border-t border-white/10 flex flex-wrap gap-x-8 gap-y-4 animate-fade-up delay-200">
<span className="flex items-center gap-2 text-base text-zinc-400 tracking-wide uppercase font-light">
<i className="w-5 h-5 text-white" data-lucide="check-circle" strokeWidth="1.5"></i> Luxury Detail
                </span>
<span className="flex items-center gap-2 text-base text-zinc-400 tracking-wide uppercase font-light">
<i className="w-5 h-5 text-white" data-lucide="check-circle" strokeWidth="1.5"></i> Ceramic Coating
                </span>
<span className="flex items-center gap-2 text-base text-zinc-400 tracking-wide uppercase font-light">
<i className="w-5 h-5 text-white" data-lucide="check-circle" strokeWidth="1.5"></i> Paint Correction
                </span>
<span className="flex items-center gap-2 text-base text-zinc-400 tracking-wide uppercase font-light">
<i className="w-5 h-5 text-white" data-lucide="check-circle" strokeWidth="1.5"></i> Fully Mobile
                </span>
</div>
</div>
</section>
<section className="py-24 md:py-32 bg-zinc-950 relative" id="about">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="space-y-8">
<h2 className="text-3xl md:text-5xl font-normal tracking-tight text-white leading-tight">
                        Bring back the shine with professional care.
                    </h2>
<p className="text-lg md:text-xl text-zinc-400 font-extralight leading-relaxed">
                        Looking for reliable mobile car detailing in San Jose CA? <span className="text-zinc-200 font-light">Phat Tint Shop</span> brings the shine straight to your driveway. We proudly serve San Jose CA and nearby communities, with a focus on convenience and quality results. Simply choose a time that works best for you and we'll handle the rest.
                    </p>
<p className="text-lg md:text-xl text-zinc-400 font-extralight leading-relaxed">
                        Our team specializes in complete vehicle care, from deep interior cleaning and thorough exterior washes to advanced paint correction and long-lasting ceramic coatings.
                    </p>
</div>
<div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden border border-white/10 group bg-zinc-900">
<img alt="Professional mobile detailing" className="transition-transform duration-700 group-hover:scale-105 opacity-80 mix-blend-luminosity w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/14fec9c4-846a-4bda-8502-55dd7eca9d91_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-tr from-zinc-950/80 via-transparent to-transparent pointer-events-none"></div>
</div>
</div>
</div>
</section>
<section className="py-24 md:py-32 relative bg-zinc-950 border-y border-white/5" id="services">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<span className="text-zinc-500 text-base font-light tracking-widest uppercase mb-3 block">Expert Solutions</span>
<h2 className="text-3xl md:text-5xl font-normal tracking-tight text-white">Popular Services in San Jose CA</h2>
</div>
<a className="text-base text-zinc-400 border-b border-white/20 pb-1 hover:border-white hover:text-white transition-all inline-flex items-center gap-2 uppercase tracking-wide font-light" href="#all-services">
                    View All Services <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="group bg-zinc-900/40 rounded-2xl p-8 card-hover-border transition-all duration-500 hover:-translate-y-2 flex flex-col h-full relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full blur-2xl transition-all duration-500 group-hover:bg-white/10"></div>
<div className="w-12 h-12 rounded-full bg-zinc-950 border border-white/10 flex items-center justify-center text-zinc-400 mb-8 group-hover:text-white group-hover:border-white/30 transition-all">
<i className="w-6 h-6" data-lucide="armchair" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-normal tracking-tight text-white mb-4">Luxury Detailing</h3>
<p className="text-base md:text-lg text-zinc-400 font-extralight leading-relaxed mb-8 flex-grow">
                        Bring your car back to life inside and out. Each detail is tailored to your needs for a spotless, like-new finish that lasts.
                    </p>
<a className="inline-flex items-center gap-2 text-base text-zinc-500 group-hover:text-white transition-colors uppercase tracking-wide font-light" href="#">
                        Explore Package <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
<div className="group bg-zinc-900/40 rounded-2xl p-8 card-hover-border transition-all duration-500 hover:-translate-y-2 flex flex-col h-full relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full blur-2xl transition-all duration-500 group-hover:bg-white/10"></div>
<div className="w-12 h-12 rounded-full bg-zinc-950 border border-white/10 flex items-center justify-center text-zinc-400 mb-8 group-hover:text-white group-hover:border-white/30 transition-all">
<i className="w-6 h-6" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-normal tracking-tight text-white mb-4">Ceramic Coating</h3>
<p className="text-base md:text-lg text-zinc-400 font-extralight leading-relaxed mb-8 flex-grow">
                        Protect your paint with a deep, high-gloss coating that defends against UV rays, dirt, and oxidation year-round.
                    </p>
<a className="inline-flex items-center gap-2 text-base text-zinc-500 group-hover:text-white transition-colors uppercase tracking-wide font-light" href="#">
                        Explore Package <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
<div className="group bg-zinc-900/40 rounded-2xl p-8 card-hover-border transition-all duration-500 hover:-translate-y-2 flex flex-col h-full relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full blur-2xl transition-all duration-500 group-hover:bg-white/10"></div>
<div className="w-12 h-12 rounded-full bg-zinc-950 border border-white/10 flex items-center justify-center text-zinc-400 mb-8 group-hover:text-white group-hover:border-white/30 transition-all">
<i className="w-6 h-6" data-lucide="droplets" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-normal tracking-tight text-white mb-4">Exterior Detailing</h3>
<p className="text-base md:text-lg text-zinc-400 font-extralight leading-relaxed mb-8 flex-grow">
                        Restore your exterior with a thorough wash and shine that clears dirt, debris, and buildup for a clean, refreshed finish.
                    </p>
<a className="inline-flex items-center gap-2 text-base text-zinc-500 group-hover:text-white transition-colors uppercase tracking-wide font-light" href="#">
                        Explore Package <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
</section>
<section className="py-24 md:py-32 bg-zinc-950">
<div className="max-w-4xl mx-auto px-6 md:px-12">
<div className="text-center mb-16">
<span className="text-zinc-500 text-base font-light tracking-widest uppercase mb-3 block">The Process</span>
<h2 className="text-3xl md:text-5xl font-normal tracking-tight text-white">Getting serviced is simple.</h2>
</div>
<div className="relative">
<div className="absolute left-[15px] md:left-1/2 md:-ml-[1px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-white/20 via-white/5 to-transparent"></div>
<div className="space-y-16">
<div className="relative flex flex-col md:flex-row items-start md:items-center group">
<div className="md:w-1/2 md:pr-16 md:text-right pl-12 md:pl-0 mb-4 md:mb-0 order-2 md:order-1">
<h3 className="text-2xl font-normal tracking-tight text-white mb-3">Schedule &amp; Confirm</h3>
<p className="text-base md:text-lg text-zinc-400 font-extralight leading-relaxed">Schedule your appointment online or by phone and receive an instant confirmation.</p>
</div>
<div className="absolute left-0 md:left-1/2 md:-ml-4 top-0 md:top-auto w-8 h-8 rounded-full bg-zinc-950 border border-white/20 group-hover:border-white group-hover:bg-white flex items-center justify-center transition-all duration-300 z-10 order-1 md:order-2">
<span className="text-base font-normal text-zinc-400 group-hover:text-black">1</span>
</div>
<div className="md:w-1/2 md:pl-16 order-3 hidden md:block"></div>
</div>
<div className="relative flex flex-col md:flex-row items-start md:items-center group">
<div className="md:w-1/2 md:pr-16 order-3 md:order-1 hidden md:block"></div>
<div className="absolute left-0 md:left-1/2 md:-ml-4 top-0 md:top-auto w-8 h-8 rounded-full bg-zinc-950 border border-white/20 group-hover:border-white group-hover:bg-white flex items-center justify-center transition-all duration-300 z-10 order-1 md:order-2">
<span className="text-base font-normal text-zinc-400 group-hover:text-black">2</span>
</div>
<div className="md:w-1/2 md:pl-16 pl-12 md:pl-0 mb-4 md:mb-0 order-2 md:order-3">
<h3 className="text-2xl font-normal tracking-tight text-white mb-3">We Arrive &amp; Detail</h3>
<p className="text-base md:text-lg text-zinc-400 font-extralight leading-relaxed">We arrive at your location and detail your vehicle with trusted products and proven techniques.</p>
</div>
</div>
<div className="relative flex flex-col md:flex-row items-start md:items-center group">
<div className="md:w-1/2 md:pr-16 md:text-right pl-12 md:pl-0 mb-4 md:mb-0 order-2 md:order-1">
<h3 className="text-2xl font-normal tracking-tight text-white mb-3">Review &amp; Approve</h3>
<p className="text-base md:text-lg text-zinc-400 font-extralight leading-relaxed">Review the results, approve the meticulous work, and we seamlessly finalize payment.</p>
</div>
<div className="absolute left-0 md:left-1/2 md:-ml-4 top-0 md:top-auto w-8 h-8 rounded-full bg-zinc-950 border border-white/20 group-hover:border-white group-hover:bg-white flex items-center justify-center transition-all duration-300 z-10 order-1 md:order-2">
<span className="text-base font-normal text-zinc-400 group-hover:text-black">3</span>
</div>
<div className="md:w-1/2 md:pl-16 order-3 hidden md:block"></div>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 md:py-32 bg-zinc-950 border-y border-white/5 relative overflow-hidden">
<img alt="Detailing background" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity pointer-events-none" src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/60 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
<h2 className="text-3xl md:text-5xl font-normal tracking-tight text-white mb-8 max-w-3xl mx-auto leading-tight">
                Discover the <span className="text-zinc-500">Phat Tint Shop Difference</span>
</h2>
<p className="text-lg md:text-xl text-zinc-400 font-extralight leading-relaxed max-w-2xl mx-auto mb-12">
                Your vehicle is more than just a way to get around. At Phat Tint Shop, we give every car the attention it deserves so it not only looks great but also keeps its value over time. Let our team handle the hard work while you enjoy the peace of mind.
            </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="bg-white text-black hover:bg-zinc-200 px-8 py-4 rounded-full text-lg font-light tracking-wide transition-all shadow-lg" href="#book">
                    BOOK APPOINTMENT
                </a>
</div>
<div className="mt-20 pt-10 border-t border-white/5">
<p className="text-base text-zinc-500 tracking-widest uppercase mb-6 font-light">Proudly Serving</p>
<div className="flex flex-wrap justify-center gap-4 md:gap-8 text-lg text-zinc-400 font-light">
<span>San Jose CA</span> <span className="text-zinc-800">•</span>
<span>Santa Clara</span> <span className="text-zinc-800">•</span>
<span>Sunnyvale</span> <span className="text-zinc-800">•</span>
<span>Cupertino</span> <span className="text-zinc-800">•</span>
<span>Milpitas</span> <span className="text-zinc-800">•</span>
<span>Campbell</span>
</div>
</div>
</div>
</section>
<section className="py-24 md:py-32 bg-zinc-950" id="faq">
<div className="max-w-3xl mx-auto px-6 md:px-12">
<div className="mb-16 text-center">
<h2 className="text-3xl md:text-5xl font-normal tracking-tight text-white mb-4">Frequently Asked</h2>
<p className="text-lg text-zinc-400 font-extralight">Answers to the most common questions from San Jose CA drivers.</p>
</div>
<div className="space-y-3">
<details className="group bg-zinc-900/30 rounded-2xl border border-white/5 overflow-hidden transition-all duration-300 open:bg-zinc-900/60 open:border-white/10">
<summary className="flex justify-between items-center cursor-pointer p-6 text-lg md:text-xl font-light text-zinc-200 hover:text-white select-none">
                        What makes Phat Tint Shop different from others?
                        <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 group-open:rotate-180 transition-transform duration-300">
<i className="w-5 h-5 text-zinc-400" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="px-6 pb-6 text-base md:text-lg text-zinc-400 font-extralight leading-relaxed border-t border-white/5 pt-4">
                        We focus on quality over volume. We bring professional-grade tools, safe detailing methods, and hands-on experience directly to your location. Our work is tailored to each vehicle, not rushed or cookie-cutter.
                    </div>
</details>
<details className="group bg-zinc-900/30 rounded-2xl border border-white/5 overflow-hidden transition-all duration-300 open:bg-zinc-900/60 open:border-white/10">
<summary className="flex justify-between items-center cursor-pointer p-6 text-lg md:text-xl font-light text-zinc-200 hover:text-white select-none">
                        Do you offer fully mobile car detailing in San Jose CA?
                        <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 group-open:rotate-180 transition-transform duration-300">
<i className="w-5 h-5 text-zinc-400" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="px-6 pb-6 text-base md:text-lg text-zinc-400 font-extralight leading-relaxed border-t border-white/5 pt-4">
                        Yes. Phat Tint Shop is a 100% mobile auto detailing service in San Jose CA. We come to your home, apartment, or workplace with everything needed.
                    </div>
</details>
<details className="group bg-zinc-900/30 rounded-2xl border border-white/5 overflow-hidden transition-all duration-300 open:bg-zinc-900/60 open:border-white/10">
<summary className="flex justify-between items-center cursor-pointer p-6 text-lg md:text-xl font-light text-zinc-200 hover:text-white select-none">
                        Is ceramic coating worth it for cars in California?
                        <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 group-open:rotate-180 transition-transform duration-300">
<i className="w-5 h-5 text-zinc-400" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="px-6 pb-6 text-base md:text-lg text-zinc-400 font-extralight leading-relaxed border-t border-white/5 pt-4">
                        Absolutely. Ceramic coating provides long-term paint protection against the harsh California sun, oxidation, road grime, and contaminants.
                    </div>
</details>
<details className="group bg-zinc-900/30 rounded-2xl border border-white/5 overflow-hidden transition-all duration-300 open:bg-zinc-900/60 open:border-white/10">
<summary className="flex justify-between items-center cursor-pointer p-6 text-lg md:text-xl font-light text-zinc-200 hover:text-white select-none">
                        Do you offer paint correction for scratches?
                        <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 group-open:rotate-180 transition-transform duration-300">
<i className="w-5 h-5 text-zinc-400" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="px-6 pb-6 text-base md:text-lg text-zinc-400 font-extralight leading-relaxed border-t border-white/5 pt-4">
                        Yes. Our paint correction services are designed to remove swirl marks, light scratches, oxidation, and paint defects to restore a mirror-like finish.
                    </div>
</details>
</div>
</div>
</section>
<section className="py-24 bg-white relative overflow-hidden">
<div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiMwMDAwMDAiLz48L3N2Zz4=')]"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-3xl md:text-5xl font-normal tracking-tight text-black mb-6">
                Ready for the Phat Tint Shop Treatment?
            </h2>
<p className="text-lg md:text-xl text-zinc-600 font-extralight mb-10 max-w-2xl mx-auto">
                View pricing and book any service online 24/7. No credit card required. Experience premium detailing at your convenience.
            </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="bg-black text-white hover:bg-zinc-800 px-8 py-4 rounded-full text-lg font-light transition-all shadow-xl" href="#book">
                    BOOK ONLINE NOW
                </a>
<a className="bg-transparent border border-black/20 hover:bg-black/5 text-black px-8 py-4 rounded-full text-lg font-light transition-all" href="#quote">
                    REQUEST PERSONALIZED QUOTE
                </a>
</div>
</div>
</section>
<footer className="bg-zinc-950 pt-20 pb-10 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-1">
<a className="text-2xl tracking-tight font-normal text-white mb-6 block" href="#">Phat Tint Shop</a>
<p className="text-base text-zinc-500 font-extralight leading-relaxed mb-8">
                        Phat Tint Shop takes care of your car so you can reclaim your time and enjoy peace of mind.
                    </p>
<div className="flex gap-4">
<a className="text-zinc-500 hover:text-white transition-colors" href="mailto:info@phattintshop.com">
<i className="w-6 h-6" data-lucide="mail" strokeWidth="1.5"></i>
</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="tel:+14087750500">
<i className="w-6 h-6" data-lucide="phone" strokeWidth="1.5"></i>
</a>
</div>
</div>
<div>
<h4 className="text-white text-base font-light mb-6 uppercase tracking-widest">Company</h4>
<ul className="space-y-4">
<li><a className="text-base text-zinc-400 hover:text-white transition-colors font-light" href="#">Home</a></li>
<li><a className="text-base text-zinc-400 hover:text-white transition-colors font-light" href="#about">About Us</a></li>
<li><a className="text-base text-zinc-400 hover:text-white transition-colors font-light" href="#faq">FAQ</a></li>
<li><a className="text-base text-zinc-400 hover:text-white transition-colors font-light" href="#reviews">Reviews</a></li>
<li><a className="text-base text-zinc-400 hover:text-white transition-colors font-light" href="#gallery">Gallery</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-base font-light mb-6 uppercase tracking-widest">Services</h4>
<ul className="space-y-4">
<li><a className="text-base text-zinc-400 hover:text-white transition-colors font-light" href="#">Mobile Detailing</a></li>
<li><a className="text-base text-zinc-400 hover:text-white transition-colors font-light" href="#">Ceramic Coating</a></li>
<li><a className="text-base text-zinc-400 hover:text-white transition-colors font-light" href="#">Paint Correction</a></li>
<li><a className="text-base text-zinc-400 hover:text-white transition-colors font-light" href="#">Exterior Detailing</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-base font-light mb-6 uppercase tracking-widest">Hours</h4>
<ul className="space-y-3 text-base text-zinc-400 font-extralight">
<li className="flex justify-between"><span>Mon - Sun:</span> <span>8:00 AM - 8:00 PM</span></li>
</ul>
<div className="mt-8 pt-8 border-t border-white/5">
<a className="text-lg text-white font-light hover:text-zinc-300 transition-colors" href="tel:+14087750500">
                            +1 408-775-0500
                        </a>
</div>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-base text-zinc-600 font-light">
<p>© 2025 Phat Tint Shop. All Rights Reserved.</p>
<p>Designed for Performance.</p>
</div>
</div>
</footer>


    </>
  );
}
