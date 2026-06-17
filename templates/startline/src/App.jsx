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



        // Intersection Observer for Reveals
        document.addEventListener('DOMContentLoaded', () => {
            
            // 1. Initial Hero Animations (Triggered on Load)
            setTimeout(() => {
                document.querySelector('header').classList.add('loaded');
            }, 100);

            // Trigger Hero Title Text Reveal
            setTimeout(() => {
                const heroTitle = document.getElementById('hero-title');
                if(heroTitle) heroTitle.classList.add('reveal-active');
            }, 500);

            // Trigger Hero Badge & Stats manually so they don't wait for scroll
            setTimeout(() => {
                document.querySelectorAll('.hero-badge, .hero-stat').forEach(el => {
                    el.classList.add('active');
                });
            }, 500);

            // 2. Scroll Observer for the rest of the page
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        // Add reveal-active to children if they exist (for text reveals)
                        const textWrappers = entry.target.querySelectorAll('.text-reveal-wrapper');
                        if(textWrappers.length > 0 || entry.target.classList.contains('text-reveal-wrapper')) {
                            entry.target.classList.add('reveal-active');
                        }
                        // Handle internal text reveal wrappers specifically
                        if(entry.target.tagName === 'H1') { // Catch specific typography section headers
                             entry.target.classList.add('reveal-active');
                        }
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
            // Observe custom text reveal sections
            document.querySelectorAll('h1').forEach(el => {
                if(el.querySelector('.text-reveal-content')) observer.observe(el);
            });

            // 3. Carousel Logic
            const slides = document.querySelectorAll('.carousel-slide');
            let currentSlide = 0;
            
            setInterval(() => {
                slides[currentSlide].classList.remove('active');
                currentSlide = (currentSlide + 1) % slides.length;
                slides[currentSlide].classList.add('active');
            }, 5000);

            // 4. Parallax Logic
            window.addEventListener('scroll', () => {
                const scrolled = window.scrollY;
                document.querySelectorAll('.parallax-img').forEach((el) => {
                    const speed = el.dataset.speed || 0.1;
                    el.style.transform = `translateY(${scrolled * speed}px)`;
                });
                
                document.querySelectorAll('.parallax-element').forEach((el) => {
                    const speed = el.dataset.speed || 0.1;
                    el.style.transform = `translateY(${scrolled * speed}px)`;
                });
            });
        });
    
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
      

<div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a8e5baac-d365-44a6-a7f0-ee8a3e0e4df9_3840w.png")'}}></div>

<div className="max-w-[1400px] mx-auto border-x border-stone-300 relative bg-[#EAEAE5]">

<div className="absolute inset-0 pointer-events-none grid grid-cols-1 md:grid-cols-12 gap-0 z-0 h-full w-full">
<div className="hidden md:block md:col-span-3 border-r border-stone-300/40 h-full"></div>
<div className="hidden md:block md:col-span-6 border-r border-stone-300/40 h-full"></div>
<div className="hidden md:block md:col-span-3 h-full"></div>
</div>

<header className="relative z-50 border-b border-stone-300 sticky top-0 bg-[#EAEAE5] nav-load loaded">
<div className="flex justify-between items-center px-4 md:px-6 py-5">
<div className="flex items-center gap-12">
<a className="text-xs font-medium tracking-widest uppercase hover:text-stone-500 transition-colors" href="#">Portfolio</a>
<a className="text-xs font-medium tracking-widest uppercase hidden md:block hover:text-stone-500 transition-colors" href="#">Process</a>
</div>
<div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 group cursor-pointer">
<a className="flex items-center gap-2" href="#">
<div className="flex h-8 w-8 ring-1 ring-black/5 text-white bg-neutral-900 rounded-full shadow-sm items-center justify-center">
<svg className="w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="diamond" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className="" d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"></path></svg>
</div>
<span className="text-[17px] uppercase font-semibold tracking-tighter font-geist">startline</span>
</a>
</div>
<div className="flex items-center gap-12">
<a className="text-xs font-medium tracking-widest uppercase hidden md:block hover:text-stone-500 transition-colors" href="#">About</a>
<a className="text-xs font-medium tracking-widest uppercase hover:text-stone-500 transition-colors" href="#">Apply</a>
</div>
</div>
</header>

<section className="relative z-10 grid grid-cols-1 md:grid-cols-12 border-b border-stone-300 min-h-[900px]">

<div className="col-span-1 md:col-span-9 border-b md:border-b-0 md:border-r border-stone-300 relative group overflow-hidden bg-stone-200">
<div className="w-full h-full relative" id="hero-carousel">

<div className="carousel-slide">
<img className="w-full h-full object-cover grayscale contrast-125 parallax-img" data-speed="0.05" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c7fa69dd-d7fb-48f2-a866-ef3663e83c92_1600w.webp" style={{transform: 'translateY(0px)'}}/>
</div>

<div className="carousel-slide">
<img className="w-full h-full object-cover grayscale contrast-125 parallax-img" data-speed="0.05" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6c710de5-9712-4c8e-a7db-59ac546e614d_1600w.webp" style={{transform: 'translateY(0px)'}}/>
</div>

<div className="carousel-slide">
<img className="contrast-125 parallax-img w-full h-full object-cover grayscale" data-speed="0.05" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/62cc53b7-3355-4618-b7fa-3283f68050bc_1600w.webp" style={{transform: 'translateY(0px)'}}/>
</div>
</div>
<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-stone-900/40 pointer-events-none"></div>

<div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white mix-blend-difference z-20">
<h1 className="text-6xl md:text-8xl font-semibold tracking-tighter leading-none mb-2 reveal-active" id="hero-title">
<span className="text-reveal-wrapper"><span className="text-reveal-content delay-200">Crypto</span></span>
<span className="text-reveal-wrapper"><span className="text-reveal-content delay-300">Incubator</span></span>
</h1>
<div className="mt-6 flex items-center gap-4 reveal delay-500 hero-badge active">
<span className="px-3 py-1 border border-white/40 rounded-full text-xs font-mono uppercase backdrop-blur-md">Web3</span>
<span className="px-3 py-1 border border-white/40 rounded-full text-xs font-mono uppercase backdrop-blur-md">Venture</span>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-3 grid grid-rows-3 h-full min-h-[400px]">

<div className="row-span-1 border-b border-stone-300 p-8 flex flex-col justify-between reveal delay-500 hero-stat group hover:bg-white transition-colors active">
<iconify-icon className="text-3xl text-stone-400 group-hover:text-stone-800 transition-colors" icon="solar:graph-up-linear"></iconify-icon>
<div>
<h2 className="text-5xl font-medium tracking-tighter">$240M</h2>
<span className="text-xs font-mono text-stone-500 mt-1 block">CAPITAL DEPLOYED</span>
</div>
</div>

<div className="row-span-1 border-b border-stone-300 p-8 flex flex-col justify-between reveal delay-700 hero-stat group hover:bg-white transition-colors active">
<iconify-icon className="text-3xl text-stone-400 group-hover:text-stone-800 transition-colors" icon="solar:notebook-linear"></iconify-icon>
<div>
<h2 className="text-5xl font-medium tracking-tighter">67</h2>
<span className="text-xs font-mono text-stone-500 mt-1 block">PROJECTS LAUNCHED</span>
</div>
</div>

<div className="row-span-1 p-8 flex flex-col justify-between reveal delay-700 hero-stat group hover:bg-white transition-colors relative overflow-hidden active">
<iconify-icon className="text-3xl text-stone-400 group-hover:text-stone-800 transition-colors" icon="solar:buildings-2-linear"></iconify-icon>
<div>
<h2 className="text-5xl font-medium tracking-tighter">23</h2>
<span className="text-xs font-mono text-stone-500 mt-1 block">ACTIVE PORTFOLIO</span>
</div>
<div className="absolute top-4 right-4 animate-spin-slow">
<iconify-icon className="text-stone-200 text-6xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" icon="solar:star-fall-linear"></iconify-icon>
</div>
</div>
</div>
</section>

<div className="border-b border-stone-300 overflow-hidden py-6 bg-stone-100/50">
<div className="marquee-container">
<div className="marquee-content">
<span className="text-sm font-mono uppercase tracking-widest text-stone-500 mx-8">Now accepting applications for Cohort 7</span>
<span className="text-sm font-mono uppercase tracking-widest text-stone-500 mx-8">•</span>
<span className="text-sm font-mono uppercase tracking-widest text-stone-500 mx-8">Global remote-first program</span>
<span className="text-sm font-mono uppercase tracking-widest text-stone-500 mx-8">•</span>
<span className="text-sm font-mono uppercase tracking-widest text-stone-500 mx-8">3-month intensive accelerator</span>
<span className="text-sm font-mono uppercase tracking-widest text-stone-500 mx-8">•</span>
</div>

<div className="marquee-content">
<span className="text-sm font-mono uppercase tracking-widest text-stone-500 mx-8">Now accepting applications for Cohort 7</span>
<span className="text-sm font-mono uppercase tracking-widest text-stone-500 mx-8">•</span>
<span className="text-sm font-mono uppercase tracking-widest text-stone-500 mx-8">Global remote-first program</span>
<span className="text-sm font-mono uppercase tracking-widest text-stone-500 mx-8">•</span>
<span className="text-sm font-mono uppercase tracking-widest text-stone-500 mx-8">3-month intensive accelerator</span>
<span className="text-sm font-mono uppercase tracking-widest text-stone-500 mx-8">•</span>
</div>
</div>
</div>

<section className="relative z-10 py-32 border-b border-stone-300 overflow-hidden">
<div className="flex flex-col items-center gap-2 reveal">
<div className="flex items-center gap-4 md:gap-8">
<h1 className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tighter text-stone-900">
<span className="text-reveal-wrapper"><span className="text-reveal-content text-stone-900">Building</span></span>
</h1>
<div className="w-12 h-12 md:w-20 md:h-20 border border-stone-800 rounded-full flex items-center justify-center mt-2 md:mt-4 bg-transparent hover:bg-stone-900 hover:text-white transition-all duration-500">
<iconify-icon className="text-2xl md:text-4xl" icon="solar:arrow-down-linear"></iconify-icon>
</div>
<h1 className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tighter text-stone-900">
<span className="text-reveal-wrapper"><span className="text-reveal-content delay-100 text-stone-900">The</span></span>
</h1>
</div>
<h1 className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tighter text-stone-400">
<span className="text-reveal-wrapper"><span className="text-reveal-content delay-200">Decentralized Future</span></span>
</h1>
</div>
<div className="absolute top-1/2 left-0 w-full h-px bg-stone-300 -z-10"></div>

<div className="absolute top-10 right-[10%] opacity-20 parallax-element" data-speed="-0.02" style={{transform: 'translateY(0px)'}}>
<iconify-icon className="text-9xl" icon="solar:record-circle-linear"></iconify-icon>
</div>
</section>

<section className="relative z-10 grid grid-cols-1 md:grid-cols-12 border-b border-stone-300">

<div className="col-span-1 md:col-span-4 p-8 md:p-12 flex flex-col justify-between min-h-[400px] border-b md:border-b-0 md:border-r border-stone-300 reveal">
<div className="flex flex-col gap-8">
<iconify-icon className="text-5xl text-stone-800" icon="solar:atom-linear"></iconify-icon>
<div>
<h3 className="text-sm font-bold uppercase tracking-widest text-stone-900 mb-6">What We Offer</h3>
<div className="space-y-4">
<div className="flex items-center justify-between border-b border-stone-300 pb-2">
<span className="text-sm text-stone-600">Seed Funding</span>
<iconify-icon className="text-stone-400 text-lg" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div className="flex items-center justify-between border-b border-stone-300 pb-2">
<span className="text-sm text-stone-600">Technical Support</span>
<iconify-icon className="text-stone-400 text-lg" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div className="flex items-center justify-between border-b border-stone-300 pb-2">
<span className="text-sm text-stone-600">Go-to-Market</span>
<iconify-icon className="text-stone-400 text-lg" icon="solar:check-circle-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-8 p-8 md:p-12 md:pr-24 flex flex-col justify-center reveal delay-100">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight leading-tight text-stone-900 mb-8">
                    We partner with ambitious founders building the next generation of blockchain infrastructure and decentralized applications. 
                    <span className="text-stone-400">From initial concept to mainnet launch, we provide capital, expertise, and network access.</span>
</h2>
<div className="flex gap-6 items-center">
<button className="px-6 py-3 bg-stone-900 text-white rounded-md text-sm font-medium hover:bg-stone-700 transition-all flex items-center gap-2 group">
                        Apply Now
                        <iconify-icon className="text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<a className="text-sm font-medium text-stone-600 hover:text-stone-900 border-b border-stone-400 hover:border-stone-900 pb-0.5 transition-colors" href="#portfolio">View Portfolio</a>
</div>
</div>
</section>

<section className="relative z-10 py-12" id="portfolio">
<div className="px-4 md:px-6 mb-12 flex justify-between items-end reveal">
<div>
<span className="text-xs font-mono uppercase text-stone-500 mb-2 block">01 / Portfolio Companies</span>
<h3 className="text-4xl font-medium tracking-tight">Featured Projects</h3>
</div>
<iconify-icon className="text-3xl text-stone-400" icon="solar:arrow-right-down-linear"></iconify-icon>
</div>

<div className="group border-y border-stone-300 bg-[#EAEAE5] hover:bg-white transition-colors duration-500 cursor-pointer overflow-hidden">
<div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 min-h-[250px]">
<div className="col-span-1 md:col-span-5 p-8 md:p-12 border-r border-stone-300/0 md:border-stone-300 reveal flex flex-col justify-center">
<div className="flex items-center gap-3 mb-4">
<span className="text-xs font-mono text-stone-500">01</span>
<div className="h-px w-8 bg-stone-300"></div>
<span className="text-xs font-bold uppercase tracking-wider text-stone-900">DeFi Protocol</span>
</div>
<h4 className="text-4xl md:text-5xl font-medium tracking-tight mb-4 group-hover:translate-x-2 transition-transform duration-500">ChainVault</h4>
<p className="text-stone-500 text-sm leading-relaxed max-w-sm">Cross-chain yield aggregator with $850M TVL. Built on Ethereum and Layer 2 solutions for optimized returns.</p>
</div>
<div className="col-span-7 hidden md:block relative overflow-hidden">
<div className="absolute inset-0 bg-stone-100 flex items-center justify-center p-8">
<img className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4b7d31e6-5b45-47eb-9853-96bbb9ac7116_1600w.webp"/>
</div>
</div>
</div>
</div>

<div className="group border-b border-stone-300 bg-[#EAEAE5] hover:bg-white transition-colors duration-500 cursor-pointer overflow-hidden">
<div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 min-h-[250px]">
<div className="col-span-1 md:col-span-5 p-8 md:p-12 border-r border-stone-300/0 md:border-stone-300 reveal flex flex-col justify-center">
<div className="flex items-center gap-3 mb-4">
<span className="text-xs font-mono text-stone-500">02</span>
<div className="h-px w-8 bg-stone-300"></div>
<span className="text-xs font-bold uppercase tracking-wider text-stone-900">NFT Marketplace</span>
</div>
<h4 className="text-4xl md:text-5xl font-medium tracking-tight mb-4 group-hover:translate-x-2 transition-transform duration-500">MintSpace</h4>
<p className="text-stone-500 text-sm leading-relaxed max-w-sm">Creator-first marketplace enabling gas-free minting and decentralized royalty management across multiple chains.</p>
</div>
<div className="col-span-7 hidden md:block relative overflow-hidden">
<div className="absolute inset-0 bg-stone-100 flex items-center justify-center p-8">
<img className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5ea5c0e9-3047-467a-9eaf-e49f651ce3c1_1600w.webp"/>
</div>
</div>
</div>
</div>

<div className="group border-b border-stone-300 bg-[#EAEAE5] hover:bg-white transition-colors duration-500 cursor-pointer overflow-hidden">
<div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 min-h-[250px]">
<div className="col-span-1 md:col-span-5 p-8 md:p-12 border-r border-stone-300/0 md:border-stone-300 reveal flex flex-col justify-center">
<div className="flex items-center gap-3 mb-4">
<span className="text-xs font-mono text-stone-500">03</span>
<div className="h-px w-8 bg-stone-300"></div>
<span className="text-xs font-bold uppercase tracking-wider text-stone-900">Infrastructure</span>
</div>
<h4 className="text-4xl md:text-5xl font-medium tracking-tight mb-4 group-hover:translate-x-2 transition-transform duration-500">NodeLink</h4>
<p className="text-stone-500 text-sm leading-relaxed max-w-sm">Distributed oracle network providing real-world data feeds to smart contracts with sub-second latency.</p>
</div>
<div className="col-span-7 hidden md:block relative overflow-hidden">
<div className="absolute inset-0 bg-stone-100 flex items-center justify-center p-8">
<img className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ddab06d9-9060-42a5-9052-32121aebd5c5_1600w.webp"/>
</div>
</div>
</div>
</div>
<div className="flex justify-center mt-12 reveal">
<a className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest border border-stone-900 rounded-full px-8 py-3 hover:bg-stone-900 hover:text-white transition-all" href="#">
                    View Full Portfolio
                    <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</section>

<section className="relative z-10 grid grid-cols-1 md:grid-cols-12 border-t border-stone-300 mt-24">

<div className="col-span-1 md:col-span-4 p-8 md:p-12 border-b md:border-b-0 md:border-r border-stone-300 flex flex-col justify-between min-h-[300px] reveal bg-stone-200">
<div>
<span className="text-xs font-mono uppercase text-stone-500 mb-2 block">02 / Insights</span>
<h2 className="text-5xl font-medium tracking-tight">Research</h2>
</div>
<div className="flex items-end justify-between">
<iconify-icon className="text-5xl text-stone-800" icon="solar:lightbulb-bolt-linear"></iconify-icon>
<span className="text-xs font-mono text-stone-500">[BLOG]</span>
</div>
</div>

<div className="col-span-1 md:col-span-8 grid grid-cols-1 md:grid-cols-2">
<div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-stone-300 flex items-center reveal delay-100">
<p className="text-lg leading-relaxed text-stone-800">
                        Deep dives into blockchain technology, market analysis, and insights from our portfolio companies shaping the Web3 ecosystem.
                    </p>
</div>
<div className="p-8 md:p-12 flex flex-col justify-center gap-6 reveal delay-200 bg-white">
<a className="group flex items-start justify-between border-b border-stone-200 pb-4" href="#">
<div>
<span className="text-xs text-stone-400 mb-1 block">Nov 15, 2024</span>
<h4 className="text-lg font-medium group-hover:text-stone-600 transition-colors">The State of Layer 2 Scaling</h4>
</div>
<iconify-icon className="text-stone-300 text-xl group-hover:text-stone-900 transition-all" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
<a className="group flex items-start justify-between border-b border-stone-200 pb-4" href="#">
<div>
<span className="text-xs text-stone-400 mb-1 block">Nov 2, 2024</span>
<h4 className="text-lg font-medium group-hover:text-stone-600 transition-colors">Zero-Knowledge Proofs Explained</h4>
</div>
<iconify-icon className="text-stone-300 text-xl group-hover:text-stone-900 transition-all" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="relative z-10 grid grid-cols-2 md:grid-cols-4 border-b border-stone-300 h-[300px] overflow-hidden">
<img className="w-full h-[120%] object-cover grayscale opacity-80 border-r border-stone-300 parallax-img" data-speed="0.05" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ede50f82-0ad0-4579-a4ae-3a942856d03b_800w.jpg" style={{transform: 'translateY(0px)'}}/>
<img className="w-full h-[120%] object-cover grayscale opacity-80 border-r border-stone-300 parallax-img" data-speed="0.08" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e9d001f3-ebe3-45c2-b556-b53a55616e12_800w.jpg" style={{transform: 'translateY(0px)'}}/>
<img className="w-full h-[120%] object-cover grayscale opacity-80 border-r border-stone-300 parallax-img" data-speed="0.03" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/87e5e02b-a5b6-43ff-b9a4-5e299f989036_800w.jpg" style={{transform: 'translateY(0px)'}}/>
<img className="w-full h-[120%] object-cover grayscale opacity-80 parallax-img" data-speed="0.1" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2700a02e-2471-497e-8ca2-3196fc405c3c_800w.webp" style={{transform: 'translateY(0px)'}}/>
</section>

<section className="relative z-10 border-b border-stone-300 py-24 bg-stone-100">
<div className="text-center mb-12">
<span className="text-xs font-mono uppercase text-stone-400 tracking-widest">Backed by leading funds</span>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-20 px-8 justify-items-center items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
<div className="reveal">
<iconify-icon className="text-stone-900" height="36" icon="simple-icons:ethereum"></iconify-icon>
</div>
<div className="reveal delay-100">
<iconify-icon className="text-stone-900" height="36" icon="simple-icons:binance"></iconify-icon>
</div>
<div className="reveal delay-200">
<iconify-icon className="text-stone-900" height="36" icon="simple-icons:coinbase"></iconify-icon>
</div>
<div className="reveal delay-300">
<iconify-icon className="text-stone-900" height="36" icon="simple-icons:polygon"></iconify-icon>
</div>
</div>
</section>

<footer className="relative z-10 bg-stone-900 text-stone-200 pt-24 pb-12">

<div className="px-6 md:px-12 mb-24 text-center">
<div className="reveal">
<h2 className="text-5xl md:text-7xl font-medium tracking-tighter mb-8 text-white">Ready to build the<br/>next unicorn?</h2>
<a className="inline-block border border-stone-700 rounded-full px-8 py-4 text-lg hover:bg-white hover:text-stone-900 transition-all duration-300" href="mailto:apply@startline.io">
                        Submit Application
                    </a>
</div>
</div>
<div className="border-t border-stone-800 w-full mb-12"></div>

<div className="grid grid-cols-1 md:grid-cols-12 px-6 md:px-12 gap-12 md:gap-0">

<div className="col-span-1 md:col-span-3">
<div className="flex items-center gap-2 mb-6">
<iconify-icon className="text-xl" icon="solar:rocket-2-linear"></iconify-icon>
<span className="font-bold tracking-tight text-lg">STARTLINE</span>
</div>
<p className="text-stone-500 text-sm leading-relaxed max-w-[200px]">
                        Accelerating the next generation of blockchain innovation through capital and expertise.
                    </p>
</div>

<div className="col-span-1 md:col-span-3">
<h4 className="text-xs font-mono uppercase text-stone-500 mb-6">Navigate</h4>
<ul className="space-y-3 text-sm font-medium">
<li><a className="hover:text-white transition-colors" href="#">Portfolio</a></li>
<li><a className="hover:text-white transition-colors" href="#">Program</a></li>
<li><a className="hover:text-white transition-colors" href="#">Team</a></li>
<li><a className="hover:text-white transition-colors" href="#">Research</a></li>
</ul>
</div>

<div className="col-span-1 md:col-span-3">
<h4 className="text-xs font-mono uppercase text-stone-500 mb-6">Connect</h4>
<ul className="space-y-3 text-sm font-medium">
<li><a className="hover:text-white transition-colors flex items-center gap-2" href="#">Twitter <iconify-icon className="text-xs text-stone-600" icon="solar:arrow-right-up-linear"></iconify-icon></a></li>
<li><a className="hover:text-white transition-colors flex items-center gap-2" href="#">Discord <iconify-icon className="text-xs text-stone-600" icon="solar:arrow-right-up-linear"></iconify-icon></a></li>
<li><a className="hover:text-white transition-colors flex items-center gap-2" href="#">Telegram <iconify-icon className="text-xs text-stone-600" icon="solar:arrow-right-up-linear"></iconify-icon></a></li>
<li><a className="hover:text-white transition-colors flex items-center gap-2" href="#">Medium <iconify-icon className="text-xs text-stone-600" icon="solar:arrow-right-up-linear"></iconify-icon></a></li>
</ul>
</div>

<div className="col-span-1 md:col-span-3 flex flex-col justify-between h-full">
<div className="text-right hidden md:block">
<iconify-icon className="text-4xl text-stone-800" icon="solar:planet-linear"></iconify-icon>
</div>
<div className="text-left md:text-right mt-4 md:mt-0">
<span className="text-xs text-stone-600">© 2024 Startline Ventures</span>
<span className="text-xs text-stone-600">All Rights Reserved.</span>
</div>
</div>
</div>

<div className="mt-24 text-center opacity-10 pointer-events-none select-none overflow-hidden">
<span className="text-[12rem] md:text-[20rem] font-bold leading-none tracking-tighter whitespace-nowrap">STARTLINE</span>
</div>
</footer>
</div>


    </>
  );
}
