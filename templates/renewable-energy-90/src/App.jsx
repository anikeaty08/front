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



        // Initialize Icons
        lucide.createIcons({
            attrs: {
                class: "lucide",
                "stroke-width": 1.5
            }
        });

        // Scroll Reveal Logic
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -40px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target); 
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
        });

        // Hero Carousel Logic
        const slides = document.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.slider-dot');
        const titles = ["Powering the <br>Next Generation.", "Industrial Scale <br>Wind Solutions.", "Smart Grid <br>Connectivity."];
        const tags = ["Sustainable Solar Ecosystems", "Clean Wind Energy", "Future Ready Infrastructure"];
        const descs = [
            "Designing the infrastructure for a cleaner planet. From industrial solar arrays to smart city integration.",
            "Harnessing the power of the air. High-efficiency turbines designed for low-wind capability.",
            "Connecting energy sources with intelligent monitoring systems for optimized consumption."
        ];
        
        let currentSlide = 0;
        let slideInterval;

        function changeSlide(index) {
            // Remove active class from current
            slides[currentSlide].classList.remove('active');
            slides[currentSlide].classList.add('inactive');
            dots[currentSlide].classList.remove('bg-white');
            dots[currentSlide].classList.add('bg-white/30');
            
            currentSlide = index;
            if (currentSlide >= slides.length) currentSlide = 0;

            // Add active class to new
            slides[currentSlide].classList.remove('inactive');
            slides[currentSlide].classList.add('active');
            dots[currentSlide].classList.remove('bg-white/30');
            dots[currentSlide].classList.add('bg-white');

            // Update Text with simple animation
            const titleEl = document.getElementById('slide-title');
            const tagEl = document.getElementById('slide-tag');
            const descEl = document.getElementById('slide-desc');

            titleEl.style.opacity = 0;
            descEl.style.opacity = 0;
            
            setTimeout(() => {
                titleEl.innerHTML = titles[currentSlide];
                tagEl.innerText = tags[currentSlide];
                descEl.innerText = descs[currentSlide];
                titleEl.style.opacity = 1;
                descEl.style.opacity = 1;
            }, 500);

            // Reset Timer
            clearInterval(slideInterval);
            slideInterval = setInterval(() => changeSlide(currentSlide + 1), 5000);
        }

        // Start Auto Slide
        slideInterval = setInterval(() => changeSlide(currentSlide + 1), 5000);

    
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
      

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-green-500/20 group-hover:scale-105 transition-transform duration-300">
<i className="w-4 h-4 fill-current" data-lucide="zap"></i>
</div>
<span className="text-lg font-bold tracking-tight text-neutral-900">PikaG</span>
</a>
<div className="hidden md:flex items-center space-x-10 text-sm font-medium text-neutral-500">
<a className="text-neutral-900 hover:text-green-600 transition-colors" href="#home">Home</a>
<a className="hover:text-green-600 transition-colors" href="#technology">Technology</a>
<a className="hover:text-green-600 transition-colors" href="#products">Products</a>
<a className="hover:text-green-600 transition-colors" href="#about">About</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex px-5 py-2.5 rounded-full bg-neutral-900 text-white text-xs font-semibold hover:bg-green-600 hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 items-center gap-2" href="#contact">
                    Get in touch
                </a>
<button className="md:hidden text-neutral-900">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>
</nav>

<section className="relative w-full h-screen overflow-hidden bg-neutral-900" id="home">

<div className="absolute inset-0 w-full h-full" id="hero-slider">

<div className="slide active absolute inset-0 w-full h-full">
<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-10"></div>
<img alt="Solar Farm" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&amp;w=2672&amp;auto=format&amp;fit=crop"/>
</div>

<div className="slide inactive absolute inset-0 w-full h-full">
<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-10"></div>
<img alt="Industrial Grid" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>

<div className="slide inactive absolute inset-0 w-full h-full">
<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-10"></div>
<img alt="Smart City" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b0?q=80&amp;w=2560&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-6 text-center">
<div className="reveal max-w-4xl mx-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-green-400 text-[10px] font-bold uppercase tracking-widest mb-8 shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
<span id="slide-tag">Sustainable Solar Ecosystems</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.05] mb-8 transition-all duration-500" id="slide-title">
                    Powering the <br/>Next Generation.
                </h1>
<p className="text-lg md:text-xl text-neutral-300 font-light leading-relaxed mb-10 max-w-2xl mx-auto transition-all duration-500" id="slide-desc">
                    Designing the infrastructure for a cleaner planet. From industrial solar arrays to smart city integration.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="px-8 py-4 bg-white text-neutral-900 rounded-full text-sm font-bold hover:bg-green-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-xl shadow-white/5" href="#products">
                        Explore Solutions
                        <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
<a className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full text-sm font-bold hover:bg-white/20 transition-all duration-300" href="#contact">
                        Speak to Sales
                    </a>
</div>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
<button className="w-12 h-1 rounded-full bg-white transition-all duration-300 hover:bg-green-500 slider-dot" onclick="changeSlide(0)"></button>
<button className="w-12 h-1 rounded-full bg-white/30 transition-all duration-300 hover:bg-green-500 slider-dot" onclick="changeSlide(1)"></button>
<button className="w-12 h-1 rounded-full bg-white/30 transition-all duration-300 hover:bg-green-500 slider-dot" onclick="changeSlide(2)"></button>
</div>
</section>

<section className="py-12 bg-white border-b border-neutral-100">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
<p className="text-xs font-bold text-neutral-400 uppercase tracking-widest whitespace-nowrap">Trusted by industry leaders</p>
<div className="flex flex-wrap justify-center md:justify-end items-center gap-8 md:gap-16 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500 w-full">
<h3 className="text-xl font-bold text-neutral-800 tracking-tight">NOVA</h3>
<h3 className="text-xl font-bold text-neutral-800 tracking-tight">PWD</h3>
<div className="flex flex-col items-center">
<span className="text-lg font-bold text-neutral-800 leading-none">RDA</span>
</div>
<div className="flex items-center gap-2">
<i className="w-6 h-6 text-neutral-800" data-lucide="train-track"></i>
<span className="text-lg font-bold text-neutral-800">Indian Railways</span>
</div>
<h3 className="text-xl font-bold text-neutral-800 tracking-tight">CREDA</h3>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50" id="technology">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 reveal">
<span className="text-green-600 font-bold tracking-widest text-xs uppercase mb-2 block">Core Architecture</span>
<h2 className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight">Engineered for Efficiency.</h2>
<p className="text-neutral-500 mt-4 max-w-2xl text-lg font-light">Our proprietary technology stack integrates hardware and software to deliver maximum yield.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="reveal md:col-span-2 bg-white p-8 rounded-3xl border border-neutral-200 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group">
<div className="absolute right-0 top-0 w-64 h-64 bg-green-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-green-100 transition-colors"></div>
<div className="relative z-10">
<div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6">
<i className="w-6 h-6" data-lucide="cpu"></i>
</div>
<h3 className="text-2xl font-bold text-neutral-900 mb-3">Intelligent Load Balancing</h3>
<p className="text-neutral-500 leading-relaxed max-w-md">Our AI-driven PCB units automatically distribute power loads across the grid, preventing surges and optimizing battery life by up to 40% compared to traditional inverters.</p>
<div className="mt-8 flex items-center gap-4 text-sm font-medium text-neutral-900">
<div className="flex items-center gap-2"><i className="w-4 h-4 text-green-500" data-lucide="check-circle-2"></i> 99.9% Uptime</div>
<div className="flex items-center gap-2"><i className="w-4 h-4 text-green-500" data-lucide="check-circle-2"></i> Real-time Analytics</div>
</div>
</div>
</div>

<div className="reveal md:row-span-2 bg-neutral-900 p-8 rounded-3xl border border-neutral-800 text-white relative overflow-hidden group">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
<div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-green-900/40 to-transparent"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div>
<div className="w-12 h-12 bg-white/10 text-white rounded-xl flex items-center justify-center mb-6 border border-white/10">
<i className="w-6 h-6" data-lucide="shield-check"></i>
</div>
<h3 className="text-2xl font-bold mb-3">Military Grade Durability</h3>
<p className="text-neutral-400 leading-relaxed text-sm">Hardware designed to withstand extreme weather conditions, from desert heat to coastal storms.</p>
</div>
<div className="mt-8">
<div className="text-5xl font-bold tracking-tight text-green-400 mb-1">25<span className="text-2xl text-white">yr</span></div>
<p className="text-neutral-400 text-xs uppercase tracking-wider">Warranty Guarantee</p>
</div>
</div>
</div>

<div className="reveal reveal-delay-1 bg-white p-8 rounded-3xl border border-neutral-200 shadow-sm hover:shadow-md transition-all duration-300">
<i className="w-10 h-10 text-neutral-900 mb-4" data-lucide="zap"></i>
<h3 className="text-lg font-bold text-neutral-900 mb-2">High Voltage Tech</h3>
<p className="text-sm text-neutral-500">Advanced 1500V systems reducing BOS costs significantly.</p>
</div>

<div className="reveal reveal-delay-2 bg-white p-8 rounded-3xl border border-neutral-200 shadow-sm hover:shadow-md transition-all duration-300">
<i className="w-10 h-10 text-neutral-900 mb-4" data-lucide="signal"></i>
<h3 className="text-lg font-bold text-neutral-900 mb-2">IoT Connectivity</h3>
<p className="text-sm text-neutral-500">Monitor your entire grid from a single smartphone dashboard.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="products">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 reveal">
<div>
<span className="text-green-600 font-bold tracking-widest text-xs uppercase mb-2 block">Our Services</span>
<h2 className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight">Premium Industry Solutions</h2>
<p className="text-neutral-500 mt-4 max-w-xl font-light">Delivering world-class technological solutions from renowned manufacturers.</p>
</div>
<a className="px-6 py-3 rounded-full border border-neutral-200 hover:bg-neutral-900 hover:text-white transition-all duration-300 text-sm font-semibold" href="#contact">
                    Get Custom Quote
                </a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="reveal group relative p-8 rounded-3xl bg-neutral-50 border border-neutral-100 hover:border-green-200 hover:shadow-lg hover:shadow-green-500/5 transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-green-600 mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="factory"></i>
</div>
<h3 className="text-xl font-bold mb-3 text-neutral-900">Industrial Machinery</h3>
<p className="text-neutral-500 text-sm leading-relaxed mb-6">High-performance industrial equipment from leading manufacturers, optimized for efficiency and reliability.</p>
<a className="text-green-600 text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all" href="#">Learn more <i className="w-4 h-4" data-lucide="arrow-right"></i></a>
</div>

<div className="reveal reveal-delay-1 group relative p-8 rounded-3xl bg-neutral-50 border border-neutral-100 hover:border-green-200 hover:shadow-lg hover:shadow-green-500/5 transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-green-600 mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="bot"></i>
</div>
<h3 className="text-xl font-bold mb-3 text-neutral-900">Robotics &amp; Automation</h3>
<p className="text-neutral-500 text-sm leading-relaxed mb-6">Cutting-edge robotics solutions to streamline operations, increase productivity, and reduce operational costs.</p>
<a className="text-green-600 text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all" href="#">Learn more <i className="w-4 h-4" data-lucide="arrow-right"></i></a>
</div>

<div className="reveal reveal-delay-2 group relative p-8 rounded-3xl bg-neutral-50 border border-neutral-100 hover:border-green-200 hover:shadow-lg hover:shadow-green-500/5 transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-green-600 mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="sun"></i>
</div>
<h3 className="text-xl font-bold mb-3 text-neutral-900">Solar Solutions</h3>
<p className="text-neutral-500 text-sm leading-relaxed mb-6">Industry-leading solar panel systems that deliver sustainable energy and significant cost savings.</p>
<a className="text-green-600 text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all" href="#">Learn more <i className="w-4 h-4" data-lucide="arrow-right"></i></a>
</div>

<div className="reveal group relative p-8 rounded-3xl bg-neutral-50 border border-neutral-100 hover:border-green-200 hover:shadow-lg hover:shadow-green-500/5 transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-green-600 mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="activity"></i>
</div>
<h3 className="text-xl font-bold mb-3 text-neutral-900">Drives &amp; Controls</h3>
<p className="text-neutral-500 text-sm leading-relaxed mb-6">Precision motor drives for complex industrial applications requiring exact torque and speed management.</p>
<a className="text-green-600 text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all" href="#">Learn more <i className="w-4 h-4" data-lucide="arrow-right"></i></a>
</div>

<div className="reveal reveal-delay-1 group relative p-8 rounded-3xl bg-neutral-50 border border-neutral-100 hover:border-green-200 hover:shadow-lg hover:shadow-green-500/5 transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-green-600 mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="wifi"></i>
</div>
<h3 className="text-xl font-bold mb-3 text-neutral-900">Smart IoT Modules</h3>
<p className="text-neutral-500 text-sm leading-relaxed mb-6">Connected sensors and communication gateways for smart city and industrial internet of things (IIoT).</p>
<a className="text-green-600 text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all" href="#">Learn more <i className="w-4 h-4" data-lucide="arrow-right"></i></a>
</div>

<div className="reveal reveal-delay-2 group relative p-8 rounded-3xl bg-neutral-50 border border-neutral-100 hover:border-green-200 hover:shadow-lg hover:shadow-green-500/5 transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-green-600 mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="battery-charging"></i>
</div>
<h3 className="text-xl font-bold mb-3 text-neutral-900">Energy Storage</h3>
<p className="text-neutral-500 text-sm leading-relaxed mb-6">Lithium-ion commercial storage banks to ensure power availability during grid outages and peak times.</p>
<a className="text-green-600 text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all" href="#">Learn more <i className="w-4 h-4" data-lucide="arrow-right"></i></a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900 text-white relative overflow-hidden">

<div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
<div className="reveal">
<span className="text-green-400 font-bold tracking-widest text-xs uppercase mb-2 block">Global Impact</span>
<h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Powering communities across the map.</h2>
<p className="text-neutral-400 text-lg leading-relaxed mb-8">
                    Our reach extends beyond borders. With projects implemented in diverse climates and regulatory environments, PikaG Energy is setting the standard for universal renewable adoption.
                </p>
<div className="grid grid-cols-2 gap-8 mb-8">
<div>
<div className="text-3xl font-bold text-white mb-1">45+</div>
<div className="text-sm text-neutral-500">Cities Electrified</div>
</div>
<div>
<div className="text-3xl font-bold text-white mb-1">12GW</div>
<div className="text-sm text-neutral-500">Power Generated</div>
</div>
</div>
<a className="inline-flex items-center text-green-400 font-bold hover:text-green-300 transition-colors" href="#about">
                    View Project Map <i className="ml-2 w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="reveal reveal-delay-2 relative">
<div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-neutral-800">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-300"></div>
<div className="p-8">
<div className="flex items-center gap-4 mb-6">
<div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
<i className="w-5 h-5" data-lucide="globe-2"></i>
</div>
<div>
<h4 className="font-bold text-lg">Case Study: Smart Grid Alpha</h4>
<p className="text-xs text-neutral-400">Deployed: March 2023</p>
</div>
</div>
<p className="text-neutral-300 text-sm mb-6 leading-relaxed">
                            Complete solar integration for a 500-unit industrial complex. Achieved 100% off-grid capability during daylight hours and reduced carbon footprint by 8,000 tons annually.
                        </p>
<div className="w-full bg-neutral-700 h-2 rounded-full mb-2 overflow-hidden">
<div className="bg-green-500 h-full w-[92%]"></div>
</div>
<div className="flex justify-between text-xs text-neutral-400">
<span>Efficiency Target</span>
<span className="text-white">92% Achieved</span>
</div>
</div>
</div>

<div className="absolute -bottom-6 -right-6 w-24 h-24 bg-green-600 rounded-full blur-3xl opacity-20"></div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-start">
<div className="reveal sticky top-32">
<span className="text-green-600 font-bold tracking-widest text-xs uppercase mb-2 block">Our History</span>
<h2 className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight mb-6">Milestones that define our legacy.</h2>
<p className="text-neutral-500 leading-relaxed mb-8">
                        From a greenfield market to an industrial powerhouse, our path has been defined by innovation and a relentless pursuit of sustainable energy solutions.
                    </p>
<a className="text-neutral-900 font-semibold border-b border-neutral-300 hover:border-green-600 pb-1 inline-flex items-center gap-2 transition-all" href="#contact">
                        Start your journey with us <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="relative pl-8 border-l border-neutral-200 space-y-16">

<div className="reveal relative group">
<span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-white border-4 border-neutral-200 group-hover:border-green-500 transition-colors"></span>
<div className="bg-neutral-50 p-8 rounded-2xl border border-neutral-100 group-hover:shadow-xl transition-all duration-300">
<span className="text-6xl font-bold text-neutral-200 absolute top-4 right-4 select-none opacity-50">01</span>
<h3 className="text-xl font-bold text-neutral-900 mb-2 relative z-10">Chapter 1</h3>
<p className="text-green-600 font-medium text-sm mb-3">Inception</p>
<p className="text-neutral-500 text-sm">India, a greenfield market. Identifying the gap in sustainable infrastructure and laying the foundation for clean energy adoption.</p>
</div>
</div>

<div className="reveal relative group">
<span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-white border-4 border-neutral-200 group-hover:border-green-500 transition-colors"></span>
<div className="bg-neutral-50 p-8 rounded-2xl border border-neutral-100 group-hover:shadow-xl transition-all duration-300">
<span className="text-6xl font-bold text-neutral-200 absolute top-4 right-4 select-none opacity-50">02</span>
<h3 className="text-xl font-bold text-neutral-900 mb-2 relative z-10">Chapter 2</h3>
<p className="text-green-600 font-medium text-sm mb-3">Expansion</p>
<p className="text-neutral-500 text-sm">Driven by Demand. Scaling operations to meet the surging requirement for industrial-grade renewable components.</p>
</div>
</div>

<div className="reveal relative group">
<span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-white border-4 border-neutral-200 group-hover:border-green-500 transition-colors"></span>
<div className="bg-neutral-50 p-8 rounded-2xl border border-neutral-100 group-hover:shadow-xl transition-all duration-300">
<span className="text-6xl font-bold text-neutral-200 absolute top-4 right-4 select-none opacity-50">03</span>
<h3 className="text-xl font-bold text-neutral-900 mb-2 relative z-10">Chapter 3</h3>
<p className="text-green-600 font-medium text-sm mb-3">Future Tech</p>
<p className="text-neutral-500 text-sm">Build your Telecom Empire. Integrating IoT and advanced PCB solutions for next-gen telecommunication networks.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50 border-t border-neutral-200">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-bold text-neutral-900 mb-2 text-center reveal">F.A.Q</h2>
<p className="text-neutral-500 text-center mb-12 text-sm reveal">Common questions regarding our industrial solutions.</p>
<div className="space-y-4">
<details className="reveal group bg-white p-5 rounded-xl border border-neutral-200 cursor-pointer shadow-sm">
<summary className="flex justify-between items-center font-medium text-neutral-900 select-none">
                        What renewable energy solutions does PikaG Energy offer?
                        <span className="transition group-open:rotate-45 text-green-600">
<i className="w-4 h-4" data-lucide="plus"></i>
</span>
</summary>
<div className="text-neutral-500 text-sm mt-4 leading-relaxed pl-1">
                        We offer a comprehensive range of solutions including Photovoltaic Solar Arrays, Industrial Wind Turbines, LED lighting systems, and custom Grid Storage solutions tailored for both commercial and industrial applications.
                    </div>
</details>
<details className="reveal reveal-delay-1 group bg-white p-5 rounded-xl border border-neutral-200 cursor-pointer shadow-sm">
<summary className="flex justify-between items-center font-medium text-neutral-900 select-none">
                        How can I get a quote for a solar installation?
                        <span className="transition group-open:rotate-45 text-green-600">
<i className="w-4 h-4" data-lucide="plus"></i>
</span>
</summary>
<div className="text-neutral-500 text-sm mt-4 leading-relaxed pl-1">
                        Simply click the "Get Custom Quote" button or visit our Contact section. One of our engineers will assess your site requirements and energy consumption history to provide a detailed proposal.
                    </div>
</details>
<details className="reveal reveal-delay-2 group bg-white p-5 rounded-xl border border-neutral-200 cursor-pointer shadow-sm">
<summary className="flex justify-between items-center font-medium text-neutral-900 select-none">
                        What are the benefits of switching to renewable energy?
                        <span className="transition group-open:rotate-45 text-green-600">
<i className="w-4 h-4" data-lucide="plus"></i>
</span>
</summary>
<div className="text-neutral-500 text-sm mt-4 leading-relaxed pl-1">
                        Switching to renewables significantly reduces operational costs, lowers your carbon footprint, ensures energy independence from grid fluctuations, and increases the property value of your infrastructure.
                    </div>
</details>
</div>
</div>
</section>

<footer className="bg-neutral-900 pt-24 pb-12 text-white border-t border-white/10" id="contact">
<div className="max-w-7xl mx-auto px-6">

<div className="grid md:grid-cols-2 gap-12 mb-24 items-center border-b border-white/10 pb-24">
<div className="reveal">
<h2 className="text-4xl font-bold mb-4">Ready to get started?</h2>
<p className="text-neutral-400">Contact us today for a free consultation and take the first step towards a sustainable future.</p>
</div>
<div className="reveal reveal-delay-1 flex flex-col sm:flex-row gap-4 justify-end">
<button className="bg-green-600 text-white px-8 py-4 rounded-full font-bold hover:bg-green-500 transition-colors shadow-lg shadow-green-900/20">
                        Get in touch
                    </button>
<button className="bg-white/10 backdrop-blur-sm border border-white/10 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-colors">
                        View Portfolio
                    </button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="lg:col-span-1 space-y-6">
<a className="flex items-center gap-2" href="#">
<div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center text-white">
<i className="w-4 h-4 fill-current" data-lucide="zap"></i>
</div>
<span className="text-xl font-bold tracking-tight text-white">PikaG</span>
</a>
<div className="bg-white/5 p-6 rounded-2xl border border-white/10">
<p className="text-xs text-neutral-400 font-bold uppercase tracking-widest mb-4">Newsletter</p>
<p className="text-sm text-neutral-300 mb-4">Keep up to date with our quarterly newsletter, "You've got mail."</p>
<form className="flex flex-col gap-2">
<input className="bg-black/50 border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-green-500 transition-colors" placeholder="Enter email address..." type="email"/>
<button className="bg-white text-black text-sm font-bold rounded-lg px-4 py-2 hover:bg-neutral-200 transition-colors" type="submit">Subscribe</button>
</form>
</div>
</div>

<div>
<h4 className="font-bold text-white mb-6">See More</h4>
<ul className="space-y-4 text-sm text-neutral-400 font-medium">
<li><a className="hover:text-green-400 transition-colors" href="#home">Home</a></li>
<li><a className="hover:text-green-400 transition-colors" href="#technology">Technology</a></li>
<li><a className="hover:text-green-400 transition-colors" href="#products">Products</a></li>
<li><a className="hover:text-green-400 transition-colors" href="#about">About</a></li>
</ul>
</div>

<div>
<h4 className="font-bold text-white mb-6">Follow Us</h4>
<ul className="space-y-4 text-sm text-neutral-400 font-medium">
<li><a className="hover:text-green-400 transition-colors flex items-center gap-2" href="#"><i className="w-4 h-4" data-lucide="instagram"></i> Instagram</a></li>
<li><a className="hover:text-green-400 transition-colors flex items-center gap-2" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i> LinkedIn</a></li>
<li><a className="hover:text-green-400 transition-colors flex items-center gap-2" href="#"><i className="w-4 h-4" data-lucide="twitter"></i> Twitter</a></li>
</ul>
</div>

<div>
<h4 className="font-bold text-white mb-6">Headquarters</h4>
<p className="text-sm text-neutral-400 leading-relaxed mb-4">
                        123 Renewable Drive,<br/>
                        Tech Park, Silicon Valley,<br/>
                        California, 94025
                    </p>
<p className="text-sm text-neutral-400">hello@pikag.com</p>
<p className="text-sm text-neutral-400">+1 (555) 123-4567</p>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-xs text-neutral-500 font-medium">
<p>© 2023 PikaG Energy. All Rights Reserved.</p>
<div className="flex space-x-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Sitemap</a>
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
