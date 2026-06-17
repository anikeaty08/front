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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<div className="bg-[#16140d] text-[#fcf9f5] text-xs font-normal py-3 text-center tracking-[0.2em] uppercase px-4">
<span>Accepting select new clients for Q4 — Book a Discovery Call</span>
</div>

<nav className="sticky top-0 z-50 w-full px-6 md:px-16 py-6 flex justify-between items-center bg-[#fcf9f5]/90 backdrop-blur-xl border-b border-[#16140d]/10 transition-all duration-300">
<a className="font-serif text-lg md:text-xl font-normal tracking-[0.12em] text-[#16140d] uppercase" href="#">
            CREATIVES <span className="italic font-light normal-case text-base">by GO</span>
</a>
<div className="hidden lg:flex items-center space-x-10 text-xs font-normal tracking-[0.18em] text-[#16140d] uppercase">
<a className="hover:opacity-60 transition-opacity relative group pb-1" href="#">
                HOME
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#172535] transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="hover:opacity-60 transition-opacity relative group pb-1" href="#services">
                SERVICES
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#172535] transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="hover:opacity-60 transition-opacity relative group pb-1" href="#portfolio">
                PORTFOLIO
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#172535] transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="hover:opacity-60 transition-opacity relative group pb-1" href="#about">
                ABOUT
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#172535] transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="hover:opacity-60 transition-opacity relative group pb-1" href="#contact">
                CONTACT
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#172535] transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="ml-4 px-8 py-4 bg-[#16140d] text-[#fcf9f5] border border-[#16140d] hover:bg-transparent hover:text-[#16140d] transition-all duration-300" href="#contact">
                WORK WITH US
            </a>
</div>
<button className="lg:hidden text-[#16140d] flex items-center justify-center">
<iconify-icon height="28" icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</nav>

<header className="relative w-full min-h-[90vh] flex flex-col justify-center px-6 md:px-16 py-20 overflow-hidden bg-[#fcf9f5]">

<div className="absolute top-0 right-[-10%] w-[60%] h-[120%] bg-[#d8d2c5]/35 rounded-bl-[60%] -z-10 pointer-events-none"></div>
<div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="space-y-10 z-10">
<p className="text-xs font-normal tracking-[0.28em] uppercase text-[#172535]">
                    Social Media &amp; Content Marketing Agency
                </p>
<h1 className="font-serif text-6xl md:text-8xl lg:text-[6rem] text-[#16140d] leading-[0.95] tracking-tight font-light">
                    Content that<br/>
<span className="italic text-[#172535]">moves</span><br/>
                    people.
                </h1>
<p className="max-w-md text-sm md:text-base text-[#16140d]/70 font-light leading-loose">
                    Strategy-led creative for brands that are ready to grow. We build the systems, write the stories, and manage the moments that make your audience stay.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<button className="px-9 py-5 bg-[#16140d] text-[#fcf9f5] text-xs font-normal tracking-[0.2em] uppercase border border-[#16140d] hover:bg-transparent hover:text-[#16140d] transition-all duration-300 w-full sm:w-auto text-center">
                        Work With Us
                    </button>
<button className="px-9 py-5 bg-transparent text-[#16140d] text-xs font-normal tracking-[0.2em] uppercase border border-[#16140d] hover:bg-[#16140d] hover:text-[#fcf9f5] transition-all duration-300 w-full sm:w-auto text-center">
                        See Our Work
                    </button>
</div>
</div>

<div className="z-10 flex justify-center lg:justify-end mt-12 lg:mt-0">
<div className="w-full max-w-sm aspect-[4/5] bg-[#172535] relative overflow-hidden flex flex-col items-center justify-center border border-[#16140d]/10 p-8 shadow-2xl shadow-[#172535]/10">
<div className="absolute inset-0 bg-gradient-to-br from-[#ced7e0]/10 to-transparent"></div>
<div className="font-serif text-7xl font-light text-[#fcf9f5] leading-none text-center relative z-10 tracking-tight">
<span className="italic block mb-2">C</span>
<span className="block text-4xl font-normal tracking-[0.15em] uppercase mt-2">by GO</span>
</div>
<p className="font-sans text-[0.65rem] tracking-[0.32em] uppercase text-[#ced7e0] mt-10 relative z-10 text-center">
                        Creatives by GO — Est. South Bay, CA
                    </p>
</div>
</div>
</div>
</header>

<section className="border-y border-[#16140d]/10 bg-[#fcf9f5]">
<div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-[#16140d]/10">
<div className="py-12 px-6 text-center hover:bg-[#f4eedc] transition-colors duration-300">
<span className="font-serif text-5xl md:text-6xl text-[#172535] font-light leading-none block">300%</span>
<span className="text-xs uppercase tracking-[0.22em] text-[#16140d]/60 mt-4 block">Avg. Engagement Growth</span>
</div>
<div className="py-12 px-6 text-center hover:bg-[#f4eedc] transition-colors duration-300">
<span className="font-serif text-5xl md:text-6xl text-[#172535] font-light leading-none block">25+</span>
<span className="text-xs uppercase tracking-[0.22em] text-[#16140d]/60 mt-4 block">Brands Managed</span>
</div>
<div className="py-12 px-6 text-center hover:bg-[#f4eedc] transition-colors duration-300">
<span className="font-serif text-5xl md:text-6xl text-[#172535] font-light leading-none block">100k+</span>
<span className="text-xs uppercase tracking-[0.22em] text-[#16140d]/60 mt-4 block">Followers Gained</span>
</div>
<div className="py-12 px-6 text-center hover:bg-[#f4eedc] transition-colors duration-300">
<span className="font-serif text-5xl md:text-6xl text-[#172535] font-light leading-none block">10+</span>
<span className="text-xs uppercase tracking-[0.22em] text-[#16140d]/60 mt-4 block">Years in Industry</span>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-16 bg-[#fcf9f5]" id="services">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<p className="text-xs uppercase tracking-[0.3em] text-[#172535] mb-6">What We Do</p>
<h2 className="font-serif text-4xl md:text-5xl font-light text-[#16140d] leading-[1.1] max-w-2xl tracking-tight">
                    Full-service creative, <em className="italic text-[#172535]">without the agency overhead.</em>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[#16140d]/10 border border-[#16140d]/10">

<div className="group bg-[#fcf9f5] p-12 hover:-translate-y-1 hover:bg-[#172535] transition-all duration-300 cursor-pointer flex flex-col h-full">
<span className="font-serif text-lg text-[#d8d2c5] group-hover:text-[#fcf9f5] transition-colors mb-8 block">01</span>
<h3 className="font-serif text-2xl text-[#16140d] group-hover:text-[#fcf9f5] transition-colors mb-4 font-normal">Social Media Management</h3>
<p className="text-sm text-[#16140d]/60 group-hover:text-[#fcf9f5]/80 leading-loose transition-colors font-light flex-grow">
                        End-to-end management across Instagram, LinkedIn, Facebook, and more. Strategy, content, scheduling, and community — all handled.
                    </p>
</div>

<div className="group bg-[#fcf9f5] p-12 hover:-translate-y-1 hover:bg-[#172535] transition-all duration-300 cursor-pointer flex flex-col h-full">
<span className="font-serif text-lg text-[#d8d2c5] group-hover:text-[#fcf9f5] transition-colors mb-8 block">02</span>
<h3 className="font-serif text-2xl text-[#16140d] group-hover:text-[#fcf9f5] transition-colors mb-4 font-normal">Paid Social Ads</h3>
<p className="text-sm text-[#16140d]/60 group-hover:text-[#fcf9f5]/80 leading-loose transition-colors font-light flex-grow">
                        Performance-driven ad campaigns that convert. From creative to targeting to reporting — we manage the full funnel.
                    </p>
</div>

<div className="group bg-[#fcf9f5] p-12 hover:-translate-y-1 hover:bg-[#172535] transition-all duration-300 cursor-pointer flex flex-col h-full">
<span className="font-serif text-lg text-[#d8d2c5] group-hover:text-[#fcf9f5] transition-colors mb-8 block">03</span>
<h3 className="font-serif text-2xl text-[#16140d] group-hover:text-[#fcf9f5] transition-colors mb-4 font-normal">Email Marketing</h3>
<p className="text-sm text-[#16140d]/60 group-hover:text-[#fcf9f5]/80 leading-loose transition-colors font-light flex-grow">
                        Sequences, campaigns, and newsletters that actually get opened. We build your list and keep it engaged.
                    </p>
</div>

<div className="group bg-[#fcf9f5] p-12 hover:-translate-y-1 hover:bg-[#172535] transition-all duration-300 cursor-pointer flex flex-col h-full">
<span className="font-serif text-lg text-[#d8d2c5] group-hover:text-[#fcf9f5] transition-colors mb-8 block">04</span>
<h3 className="font-serif text-2xl text-[#16140d] group-hover:text-[#fcf9f5] transition-colors mb-4 font-normal">Content Creation</h3>
<p className="text-sm text-[#16140d]/60 group-hover:text-[#fcf9f5]/80 leading-loose transition-colors font-light flex-grow">
                        Carousels, reels, graphics, copy — production-ready content built to your brand voice and optimized for each platform.
                    </p>
</div>

<div className="group bg-[#fcf9f5] p-12 hover:-translate-y-1 hover:bg-[#172535] transition-all duration-300 cursor-pointer flex flex-col h-full">
<span className="font-serif text-lg text-[#d8d2c5] group-hover:text-[#fcf9f5] transition-colors mb-8 block">05</span>
<h3 className="font-serif text-2xl text-[#16140d] group-hover:text-[#fcf9f5] transition-colors mb-4 font-normal">Event + Brand Partnerships</h3>
<p className="text-sm text-[#16140d]/60 group-hover:text-[#fcf9f5]/80 leading-loose transition-colors font-light flex-grow">
                        From concept to execution. We produce brand experiences, activations, and partnerships that create real-world buzz.
                    </p>
</div>

<div className="group bg-[#f4eedc] p-12 hover:-translate-y-1 hover:bg-[#16140d] transition-all duration-300 cursor-pointer flex flex-col h-full">
<span className="font-sans text-xl text-[#16140d] group-hover:text-[#fcf9f5] transition-colors mb-8 block leading-none">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
<h3 className="font-serif text-2xl text-[#16140d] group-hover:text-[#fcf9f5] transition-colors mb-4 font-normal">Ready to get started?</h3>
<p className="text-sm text-[#16140d]/60 group-hover:text-[#fcf9f5]/80 leading-loose transition-colors font-light flex-grow">
                        Let's talk about your brand, your goals, and how we can build something that actually works.
                    </p>
</div>
</div>
</div>
</section>

<section className="bg-[#172535] py-24 px-6 md:px-16">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<p className="text-xs uppercase tracking-[0.3em] text-[#ced7e0] mb-6">Client Love</p>
<h2 className="font-serif text-4xl md:text-5xl font-light text-[#fcf9f5] leading-[1.1] tracking-tight">
                    What our <em className="italic">clients say.</em>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="border border-white/10 bg-white/5 p-10 hover:bg-white/10 transition-colors duration-300 flex flex-col">
<div className="font-serif text-5xl text-[#ced7e0] opacity-50 leading-none mb-6">"</div>
<p className="font-serif text-lg font-light italic text-[#fcf9f5] leading-relaxed opacity-90 mb-8 flex-grow">
                        Energy, drive, incredible positivity, and work ethic! I can't say enough about how grateful I am for the work Creatives by GO has done for me. It's taken a huge load off my busy schedule.
                    </p>
<div className="mt-auto">
<p className="text-[0.65rem] uppercase tracking-[0.2em] text-[#ced7e0]">Christine Grace</p>
<p className="text-[0.6rem] uppercase tracking-widest text-[#fcf9f5]/40 mt-1">Christine Grace Healing</p>
</div>
</div>

<div className="border border-white/10 bg-white/5 p-10 hover:bg-white/10 transition-colors duration-300 flex flex-col">
<div className="font-serif text-5xl text-[#ced7e0] opacity-50 leading-none mb-6">"</div>
<p className="font-serif text-lg font-light italic text-[#fcf9f5] leading-relaxed opacity-90 mb-8 flex-grow">
                        In my 15 years in this industry, you are hands-down one of the most professional and grounded creatives I've ever worked with. The level you operate at is rare. You have such a calm, steady presence.
                    </p>
<div className="mt-auto">
<p className="text-[0.65rem] uppercase tracking-[0.2em] text-[#ced7e0]">Linette</p>
<p className="text-[0.6rem] uppercase tracking-widest text-[#fcf9f5]/40 mt-1">BattagliaStile</p>
</div>
</div>

<div className="border border-white/10 bg-white/5 p-10 hover:bg-white/10 transition-colors duration-300 flex flex-col">
<div className="font-serif text-5xl text-[#ced7e0] opacity-50 leading-none mb-6">"</div>
<p className="font-serif text-lg font-light italic text-[#fcf9f5] leading-relaxed opacity-90 mb-8 flex-grow">
                        Gaby is very organized, intuitive, innovative and passionate about her work making the entire process seamless and enjoyable. I highly recommend her services to elevate your brand.
                    </p>
<div className="mt-auto">
<p className="text-[0.65rem] uppercase tracking-[0.2em] text-[#ced7e0]">AnnG Kenney</p>
<p className="text-[0.6rem] uppercase tracking-widest text-[#fcf9f5]/40 mt-1">Owner, MindFit</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-16 border-t border-[#16140d]/10 bg-[#fcf9f5]" id="portfolio">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
<div className="lg:w-1/3 lg:sticky lg:top-32 space-y-8">
<p className="text-xs uppercase tracking-[0.3em] text-[#172535]">Selected Work</p>
<h2 className="font-serif text-4xl md:text-5xl font-light text-[#16140d] leading-[1.1] tracking-tight">
<em className="italic text-[#172535]">Work</em> that speaks for itself.
                </h2>
<p className="text-sm text-[#16140d]/60 font-light leading-loose">
                    Explore our recent on-location content shoots, brand strategies, and campaign rollouts. We handle the full creative direction, capturing the essence of immersive experiences to drive real brand authority.
                </p>
<button className="px-9 py-5 bg-[#16140d] text-[#fcf9f5] text-xs font-normal tracking-[0.2em] uppercase border border-[#16140d] hover:bg-transparent hover:text-[#16140d] transition-all duration-300 w-full sm:w-auto text-center mt-6">
                    View Full Portfolio
                </button>
</div>
<div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-px bg-[#16140d]/10 border border-[#16140d]/10">

<div className="group bg-[#fcf9f5] cursor-pointer">
<div className="aspect-[4/3] bg-gradient-to-br from-[#172535] to-[#0d1a26] flex flex-col items-center justify-center p-8 relative overflow-hidden">
<div className="font-serif italic text-lg text-[#fcf9f5]/80 tracking-widest text-center transition-transform duration-700 group-hover:scale-105">
                            Christine Grace Healing
                            <span className="block font-sans text-[0.6rem] uppercase tracking-[0.3em] text-white/40 mt-4 not-italic">Instagram · Email</span>
</div>
</div>
<div className="p-8 border-t border-[#16140d]/10">
<p className="text-[0.6rem] uppercase tracking-[0.25em] text-[#172535] mb-3">Social Media · Campaigns</p>
<h3 className="font-serif text-2xl font-normal text-[#16140d] mb-4">Alchemy Sessions</h3>
<p className="text-sm text-[#16140d]/50 font-light leading-loose">Full social media management and retreat campaign rollout, including brand creative direction and teaser strategy.</p>
</div>
</div>

<div className="group bg-[#fcf9f5] cursor-pointer">
<div className="aspect-[4/3] bg-gradient-to-br from-[#d8d2c5] to-[#c2bba8] flex flex-col items-center justify-center p-8 relative overflow-hidden">
<div className="font-serif italic text-lg text-[#16140d]/60 tracking-widest text-center transition-transform duration-700 group-hover:scale-105">
                            BattagliaStile
                            <span className="block font-sans text-[0.6rem] uppercase tracking-[0.3em] text-[#16140d]/40 mt-4 not-italic">Instagram · LinkedIn</span>
</div>
</div>
<div className="p-8 border-t border-[#16140d]/10">
<p className="text-[0.6rem] uppercase tracking-[0.25em] text-[#172535] mb-3">Brand Strategy · Content</p>
<h3 className="font-serif text-2xl font-normal text-[#16140d] mb-4">Luxury Showroom</h3>
<p className="text-sm text-[#16140d]/50 font-light leading-loose">Developed audience segment analysis, rigorous 30-day content calendars, and full editorial copywriting.</p>
</div>
</div>

<div className="group bg-[#fcf9f5] cursor-pointer md:col-span-2">
<div className="aspect-video md:aspect-[21/9] bg-gradient-to-br from-[#1a2c2a] to-[#0d1615] flex flex-col items-center justify-center p-8 relative overflow-hidden">
<div className="font-serif italic text-2xl text-[#fcf9f5]/80 tracking-widest text-center transition-transform duration-700 group-hover:scale-105">
                            Costa Rica Retreat
                            <span className="block font-sans text-[0.65rem] uppercase tracking-[0.3em] text-white/40 mt-4 not-italic">Event Production</span>
</div>
</div>
<div className="p-10 border-t border-[#16140d]/10 flex flex-col md:flex-row md:items-start md:justify-between gap-8">
<div className="max-w-xl">
<p className="text-[0.6rem] uppercase tracking-[0.25em] text-[#172535] mb-3">Event Production · Content Creation</p>
<h3 className="font-serif text-3xl font-normal text-[#16140d] mb-4">Immersive Wellness Experience</h3>
<p className="text-sm text-[#16140d]/50 font-light leading-loose">End-to-end content and production support. On-the-ground coverage, real-time social content, and a full post-event asset library that extended the experience.</p>
</div>
<div className="flex gap-4 md:flex-col">
<div className="bg-[#f4eedc] p-6 text-center border border-[#16140d]/10">
<span className="font-serif text-2xl font-light text-[#172535] block">30+</span>
<span className="text-[0.55rem] uppercase tracking-[0.18em] text-[#16140d]/50 mt-2 block">Assets Created</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#16140d] pt-24 pb-10 px-6 md:px-16 text-[#fcf9f5]">
<div className="max-w-7xl mx-auto border-b border-white/10 pb-16 mb-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

<div className="lg:col-span-5 space-y-6">
<a className="font-serif text-xl md:text-2xl font-normal tracking-[0.12em] text-[#fcf9f5] uppercase block" href="#">
                        CREATIVES <span className="italic font-light normal-case text-lg">by GO</span>
</a>
<p className="text-sm text-[#fcf9f5]/50 font-light leading-loose max-w-sm">
                        Strategy-led social media and content marketing for brands ready to grow. Based in the South Bay, working everywhere.
                    </p>
<div className="pt-6">
<a className="inline-block px-9 py-5 bg-[#fcf9f5] text-[#16140d] text-xs font-normal tracking-[0.2em] uppercase border border-[#fcf9f5] hover:bg-transparent hover:text-[#fcf9f5] transition-all duration-300" href="#contact">
                            Start the Conversation
                        </a>
</div>
</div>

<div className="lg:col-span-3 lg:col-start-7">
<h4 className="text-[0.65rem] uppercase tracking-[0.25em] text-[#ced7e0] mb-8">Navigation</h4>
<ul className="space-y-4 text-sm font-light">
<li><a className="text-[#fcf9f5]/50 hover:text-[#fcf9f5] transition-colors" href="#">Home</a></li>
<li><a className="text-[#fcf9f5]/50 hover:text-[#fcf9f5] transition-colors" href="#services">Services</a></li>
<li><a className="text-[#fcf9f5]/50 hover:text-[#fcf9f5] transition-colors" href="#portfolio">Portfolio</a></li>
<li><a className="text-[#fcf9f5]/50 hover:text-[#fcf9f5] transition-colors" href="#about">About</a></li>
<li><a className="text-[#fcf9f5]/50 hover:text-[#fcf9f5] transition-colors" href="#contact">Contact</a></li>
</ul>
</div>

<div className="lg:col-span-3">
<h4 className="text-[0.65rem] uppercase tracking-[0.25em] text-[#ced7e0] mb-8">Services</h4>
<ul className="space-y-4 text-sm font-light">
<li><a className="text-[#fcf9f5]/50 hover:text-[#fcf9f5] transition-colors" href="#">Social Media Management</a></li>
<li><a className="text-[#fcf9f5]/50 hover:text-[#fcf9f5] transition-colors" href="#">Paid Social Ads</a></li>
<li><a className="text-[#fcf9f5]/50 hover:text-[#fcf9f5] transition-colors" href="#">Email Marketing</a></li>
<li><a className="text-[#fcf9f5]/50 hover:text-[#fcf9f5] transition-colors" href="#">Content Creation</a></li>
<li><a className="text-[#fcf9f5]/50 hover:text-[#fcf9f5] transition-colors" href="#">Events + Partnerships</a></li>
</ul>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<p className="text-xs text-[#fcf9f5]/30 tracking-wide font-light">
                © 2024 Creatives by GO. All rights reserved.
            </p>
<div className="flex space-x-8">
<a className="text-[0.65rem] uppercase tracking-[0.18em] text-[#fcf9f5]/40 hover:text-[#fcf9f5] transition-colors" href="#">Instagram</a>
<a className="text-[0.65rem] uppercase tracking-[0.18em] text-[#fcf9f5]/40 hover:text-[#fcf9f5] transition-colors" href="#">LinkedIn</a>
</div>
</div>
</footer>

    </>
  );
}
