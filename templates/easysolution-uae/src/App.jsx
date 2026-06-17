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



        document.addEventListener('DOMContentLoaded', () => {
            
            // Initialize Lucide Icons
            lucide.createIcons({
                strokeWidth: 1.5
            });

            // GSAP Setup
            gsap.registerPlugin(ScrollTrigger);

            // Navbar Scroll Effect
            const navbar = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar.classList.add('bg-[#0A0A0A]/80', 'backdrop-blur-xl', 'border-white/10');
                    navbar.classList.remove('border-transparent');
                } else {
                    navbar.classList.remove('bg-[#0A0A0A]/80', 'backdrop-blur-xl', 'border-white/10');
                    navbar.classList.add('border-transparent');
                }
            });

            // Hero Animation
            const heroElements = document.querySelectorAll('.hero-elem');
            gsap.fromTo(heroElements, 
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power3.out", delay: 0.1 }
            );

            gsap.to('#hero-img', {
                scale: 1,
                duration: 2.5,
                ease: "power2.out"
            });

            // Bento Grid Reveal
            const bentoCards = document.querySelectorAll('.bento-card');
            ScrollTrigger.batch(bentoCards, {
                interval: 0.1,
                batchMax: 4,
                onEnter: batch => gsap.fromTo(batch, 
                    { y: 40, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", stagger: 0.1, overwrite: true }
                ),
                start: "top 85%"
            });

            // Philosophy Text Reveal
            const splitTexts = document.querySelectorAll('.split-text');
            splitTexts.forEach(el => {
                gsap.fromTo(el,
                    { opacity: 0, y: 20 },
                    { 
                        opacity: 1, y: 0, 
                        duration: 1.2, 
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 80%",
                        }
                    }
                );
            });

            // Protocol Sticky Stacking Archive
            const stickyCards = document.querySelectorAll('.sticky-card > div');
            stickyCards.forEach((card, index) => {
                if(index === stickyCards.length - 1) return;
                
                ScrollTrigger.create({
                    trigger: card,
                    start: "top 12%",
                    endTrigger: stickyCards[index + 1],
                    end: "top 12%",
                    scrub: true,
                    animation: gsap.to(card, {
                        scale: 0.95,
                        opacity: 0.3,
                        filter: "blur(8px)",
                        ease: "none"
                    })
                });
            });

            // Custom Dropdown Logic
            const servicesList = [
                "Civil Infrastructure", "Commercial Build", "Foundation Systems", 
                "Structural Elements", "Utility Networks", "Design-Build Methodology", 
                "Architectural Concrete", "Consulting & Engineering"
            ];
            
            const dropBtn = document.getElementById('dropdown-btn');
            const dropList = document.getElementById('dropdown-list');
            const dropVal = document.getElementById('dropdown-val');
            const hiddenInput = document.getElementById('service-input');
            const dropIcon = document.getElementById('dropdown-icon');

            servicesList.forEach(service => {
                const li = document.createElement('li');
                li.className = "px-4 py-3 text-base text-gray-400 hover:bg-white/10 hover:text-white cursor-pointer transition-colors";
                li.textContent = service;
                li.addEventListener('click', () => {
                    dropVal.textContent = service;
                    dropVal.classList.remove('text-gray-400');
                    dropVal.classList.add('text-white');
                    hiddenInput.value = service;
                    closeDropdown();
                });
                dropList.appendChild(li);
            });

            const toggleDropdown = () => {
                dropList.classList.toggle('open');
                dropIcon.style.transform = dropList.classList.contains('open') ? 'rotate(180deg)' : 'rotate(0)';
            };

            const closeDropdown = () => {
                dropList.classList.remove('open');
                dropIcon.style.transform = 'rotate(0)';
            };

            dropBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                toggleDropdown();
            });

            document.addEventListener('click', (e) => {
                if(!dropBtn.contains(e.target) && !dropList.contains(e.target)) {
                    closeDropdown();
                }
            });

            // Form Handling
            const form = document.getElementById('bid-form');
            const successState = document.getElementById('form-success');

            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const formData = new FormData(form);
                const dataObj = Object.fromEntries(formData.entries());
                console.log("DOCUMENTATION RECEIVED:", JSON.stringify(dataObj, null, 2));

                gsap.to(form, { opacity: 0, y: 10, duration: 0.3, onComplete: () => {
                    form.style.display = 'none';
                    successState.classList.remove('hidden');
                    gsap.fromTo(successState, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.5 });
                }});
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
      

<svg className="noise-overlay" xmlns="http://www.w3.org/2000/svg">
<filter id="noiseFilter">
<feturbulence basefrequency="0.9" numoctaves="3" stitchtiles="stitch" type="fractalNoise"></feturbulence>
</filter>
<rect filter="url(#noiseFilter)" height="100%" width="100%"></rect>
</svg>

<nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50 rounded-full px-6 py-3 flex items-center justify-between transition-all duration-500 border" id="navbar">
<div className="flex items-center gap-3">

<svg className="w-8 h-8 text-white" fill="none" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path d="M12 26L24 18L36 26M12 34L24 26L36 34M12 42L24 34L36 42" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
<path d="M12 26V42" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
<path d="M24 10L12 18M24 10L36 18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
</svg>
<span className="font-medium text-xl tracking-tight text-white hidden sm:block">Easy Solution</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-gray-400">
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#philosophy">Philosophy</a>
<a className="hover:text-white transition-colors" href="#protocol">Protocol</a>
</div>
<a className="flex items-center gap-2 hover:bg-gray-200 transition-colors text-sm font-medium text-black bg-white rounded-full pt-2 pr-5 pb-2 pl-5" href="#contact">
            Request a Bid <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</nav>

<section className="relative h-[100dvh] w-full flex flex-col justify-end p-6 md:p-12 lg:p-24 overflow-hidden border-b border-white/10">

<div className="absolute inset-0 z-0">
<img alt="UAE Architecture" className="w-full h-full object-cover object-center scale-105 opacity-50 grayscale" id="hero-img" src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&amp;w=3270&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
</div>

<div className="relative z-10 max-w-4xl flex flex-col items-start gap-6 pb-16">
<div className="hero-elem font-mono text-xs md:text-sm text-gray-400 tracking-widest uppercase">Premium General Contracting</div>
<div className="flex flex-col gap-2">
<h1 className="hero-elem md:text-8xl lg:text-[7.5rem] leading-[0.9] text-6xl font-medium text-white tracking-tight">Precision built.</h1>
<h2 className="hero-elem font-medium text-4xl md:text-6xl lg:text-[5rem] leading-none text-gray-500 tracking-tight">Engineered for the UAE.</h2>
</div>
<p className="hero-elem text-lg md:text-xl text-gray-400 max-w-2xl mt-4 mb-6 leading-relaxed">Advanced civil infrastructure and structural deployment across the Emirates — executing complex technical designs with uncompromising standards.</p>
<a className="hero-elem bg-transparent text-white rounded-full px-8 py-3.5 text-sm font-medium border border-white/20 hover:border-white transition-colors flex items-center gap-2" href="#contact">
                Initiate Engagement <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>

<div className="absolute bottom-0 left-0 w-full p-6 md:px-12 md:py-8 border-t border-white/5 z-10 flex flex-wrap md:flex-nowrap justify-between gap-4 font-mono text-xs text-gray-500 tracking-widest uppercase">
<div className="hero-elem">ISO 9001 CERTIFIED</div>
<div className="hero-elem hidden sm:block">ENTERPRISE SCALE DELIVERY</div>
<div className="hero-elem">LICENSED CONTRACTOR</div>
<div className="hero-elem text-white">UAE BASED</div>
</div>
</section>

<section className="py-32 px-4 md:px-8 lg:px-12 bg-black relative z-20" id="services">
<div className="max-w-7xl mx-auto">
<div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-12">
<div className="">
<div className="font-mono text-xs text-gray-500 tracking-widest uppercase mb-4">The Catalog</div>
<h2 className="font-medium text-4xl md:text-6xl text-white tracking-tight">Capabilities</h2>
</div>
<p className="text-gray-400 max-w-md text-base md:text-lg leading-relaxed">Engineered for environments where failure is not an option. We manage the critical path to ensure absolute structural integrity.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[minmax(240px,auto)]">

<div className="bento-card md:col-span-2 lg:col-span-2 lg:row-span-2 bg-[#0A0A0A] border border-white/5 text-white rounded-2xl p-10 flex flex-col justify-between hover:border-white/20 transition-colors duration-300">
<i className="w-8 h-8 text-white mb-8 opacity-80" data-lucide="building-2"></i>
<div>
<h3 className="font-medium text-3xl tracking-tight mb-4">Civil Infrastructure</h3>
<p className="text-gray-400 text-base md:text-lg leading-relaxed">End-to-end management of complex structural deployments, ensuring strict adherence to global tolerances and municipal timelines across diverse terrains.</p>
</div>
</div>

<div className="bento-card bg-[#0A0A0A] border border-white/5 text-white rounded-2xl p-8 flex flex-col justify-end hover:border-white/20 transition-colors duration-300">
<h3 className="font-medium text-xl tracking-tight mb-3">Commercial Build</h3>
<p className="text-gray-400 text-base leading-relaxed">Turnkey construction for high-density retail and corporate environments.</p>
</div>

<div className="bento-card bg-[#0A0A0A] border border-white/5 text-white rounded-2xl p-8 flex flex-col justify-end hover:border-white/20 transition-colors duration-300">
<h3 className="font-medium text-xl tracking-tight mb-3">Foundation Systems</h3>
<p className="text-gray-400 text-base leading-relaxed">Deep foundation engineering and high-load subterranean structures.</p>
</div>

<div className="bento-card lg:row-span-2 bg-[#0A0A0A] border border-white/5 text-white rounded-2xl p-8 flex flex-col justify-between hover:border-white/20 transition-colors duration-300">
<i className="w-6 h-6 text-white mb-8 opacity-80 mt-2" data-lucide="box"></i>
<div>
<h3 className="font-medium text-xl tracking-tight mb-3">Structural Elements</h3>
<p className="text-gray-400 text-base leading-relaxed">Massive load-bearing assemblies, architectural concrete, and monolithic pours requiring precision formwork engineering.</p>
</div>
</div>

<div className="bento-card bg-[#0A0A0A] border border-white/5 text-white rounded-2xl p-8 flex flex-col justify-end hover:border-white/20 transition-colors duration-300">
<h3 className="font-medium text-xl tracking-tight mb-3">Utility Networks</h3>
<p className="text-gray-400 text-base leading-relaxed">Trenchless utility installation and complex subterranean routing.</p>
</div>

<div className="bento-card md:col-span-2 bg-[#111111] border border-white/10 text-white rounded-2xl p-8 lg:p-10 flex flex-col justify-center hover:border-white/30 transition-colors duration-300">
<h3 className="font-medium text-2xl tracking-tight mb-3">Design-Build Methodology</h3>
<p className="text-gray-400 text-base md:text-lg leading-relaxed">Collaborative delivery method compressing schedules by overlapping design and construction phases. We engineer constructability into the plans before mobilization.</p>
</div>
</div>
</div>
</section>

<section className="relative py-40 min-h-[70vh] flex items-center bg-black border-y border-white/10 overflow-hidden" id="philosophy">

<div className="absolute inset-0 z-0 opacity-[0.05]" style={{backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '64px 64px'}}></div>
<div className="flex flex-col z-10 w-full bg-[url(https://images.unsplash.com/photo-1665576005564-0eeaeb59ab44?w=2560&amp;q=80)] max-w-5xl bg-contain mr-auto ml-auto pr-6 pl-6 relative gap-x-32 gap-y-32">

<div className="split-text">
<p className="text-gray-500 text-lg md:text-xl mb-6 font-medium">Industry standard is compromise.</p>
<h2 className="font-medium text-4xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.1] max-w-3xl">
                    We deliver the exact specifications, without deviation.
                </h2>
</div>

<div className="self-end split-text text-right">
<h2 className="md:text-6xl lg:text-7xl leading-[1.1] text-4xl font-medium text-white tracking-tight max-w-3xl">
                    Absolute <span className="text-gray-300">Precision</span> is our only metric.
                </h2><p className="text-gray-500 text-lg md:text-xl mb-6 font-medium">Speed is often sold as a virtue.</p>
</div>
</div>
</section>

<section className="relative bg-black pb-32" id="protocol">
<div className="max-w-6xl mx-auto px-4 sm:px-6 relative">

<div className="sticky-card h-[100vh] sticky top-0 flex items-center justify-center pt-24 pb-12 z-10">
<div className="w-full h-full max-h-[700px] bg-black border border-white/10 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between shadow-2xl relative" style={{filter: 'none'}}>
<div className="relative z-10 w-full md:w-1/2 flex flex-col gap-6">
<div className="font-mono text-xs text-gray-500 uppercase tracking-widest">Phase 01</div>
<h3 className="font-medium text-4xl md:text-6xl text-white tracking-tight leading-[1.1]">Rigorous Scope Analysis</h3>
<p className="text-gray-400 text-lg md:text-xl max-w-md leading-relaxed">We begin every engagement with an exhaustive site evaluation and feasibility protocol, finalizing all variables before ground is broken.</p>
</div>
</div>
</div>

<div className="sticky-card h-[100vh] sticky top-0 flex items-center justify-center pt-24 pb-12 z-20">
<div className="w-full h-full max-h-[700px] bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between shadow-2xl relative" style={{filter: 'none'}}>
<div className="relative z-10 w-full md:w-1/2 flex flex-col gap-6">
<div className="font-mono text-xs text-gray-500 uppercase tracking-widest">Phase 02</div>
<h3 className="font-medium text-4xl md:text-6xl text-white tracking-tight leading-[1.1]">Surgical Field Execution</h3>
<p className="text-gray-400 text-lg md:text-xl max-w-md leading-relaxed">Our teams deploy with strict scheduling and real-time operational coordination. No surprises, no delays, no excuses.</p>
</div>
</div>
</div>

<div className="sticky-card h-[100vh] sticky top-0 flex items-center justify-center pt-24 pb-12 z-30">
<div className="w-full h-full max-h-[700px] bg-[#111111] border border-white/10 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between shadow-2xl relative">
<div className="relative z-10 w-full md:w-1/2 flex flex-col gap-6">
<div className="font-mono text-xs text-gray-500 uppercase tracking-widest">Phase 03</div>
<h3 className="font-medium text-4xl md:text-6xl text-white tracking-tight leading-[1.1]">Verified Delivery Handover</h3>
<p className="text-gray-400 text-lg md:text-xl max-w-md leading-relaxed">Every project concludes with comprehensive documentation, punch-list sign-off, and strict adherence to initial blueprint tolerances.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-black relative border-t border-white/10" id="contact">
<div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

<div className="flex flex-col gap-6 sticky top-32">
<h2 className="font-medium text-5xl md:text-7xl text-white tracking-tight leading-[1]">Initiate a Project.</h2>
<p className="text-gray-400 text-lg md:text-xl max-w-sm leading-relaxed mt-4">Provide your technical specifications. Our engineering team responds within 24 hours.</p>
<div className="hidden lg:block mt-16 font-mono text-xs text-gray-600 uppercase tracking-widest leading-loose">
                    Easy Solution L.L.C.<br/>
                    United Arab Emirates
                </div>
</div>

<div className="bg-black relative">

<div className="hidden absolute inset-0 bg-black z-20 flex flex-col items-start justify-center" id="form-success">
<i className="w-10 h-10 text-white mb-6" data-lucide="check-circle"></i>
<h3 className="font-medium text-3xl text-white mb-4 tracking-tight">Data Received.</h3>
<p className="text-gray-400 text-lg">Your specifications have been securely logged into our system. An engineer will contact you shortly.</p>
</div>
<form className="flex flex-col gap-10 relative z-10" id="bid-form">
<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
<div className="relative group">
<input className="w-full bg-transparent border-b border-white/20 py-3 text-white text-base focus:border-white transition-colors peer placeholder-transparent" id="name" name="name" placeholder="Full Name" required="" type="text"/>
<label className="absolute left-0 top-3 font-mono text-xs text-gray-500 uppercase tracking-widest transition-all peer-focus:-top-5 peer-focus:text-white peer-valid:-top-5 peer-valid:text-gray-500" htmlFor="name">Full Name</label>
</div>
<div className="relative group">
<input className="w-full bg-transparent border-b border-white/20 py-3 text-white text-base focus:border-white transition-colors peer placeholder-transparent" id="company" name="company" placeholder="Company Name" required="" type="text"/>
<label className="absolute left-0 top-3 font-mono text-xs text-gray-500 uppercase tracking-widest transition-all peer-focus:-top-5 peer-focus:text-white peer-valid:-top-5 peer-valid:text-gray-500" htmlFor="company">Company</label>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
<div className="relative group">
<input className="w-full bg-transparent border-b border-white/20 py-3 text-white text-base focus:border-white transition-colors peer placeholder-transparent" id="phone" name="phone" placeholder="Phone Number" required="" type="tel"/>
<label className="absolute left-0 top-3 font-mono text-xs text-gray-500 uppercase tracking-widest transition-all peer-focus:-top-5 peer-focus:text-white peer-valid:-top-5 peer-valid:text-gray-500" htmlFor="phone">Phone</label>
</div>
<div className="relative group">
<input className="w-full bg-transparent border-b border-white/20 py-3 text-white text-base focus:border-white transition-colors peer placeholder-transparent" id="email" name="email" placeholder="Email Address" required="" type="email"/>
<label className="absolute left-0 top-3 font-mono text-xs text-gray-500 uppercase tracking-widest transition-all peer-focus:-top-5 peer-focus:text-white peer-valid:-top-5 peer-valid:text-gray-500" htmlFor="email">Email</label>
</div>
</div>

<div className="relative mt-2" id="custom-select">
<span className="absolute left-0 -top-5 font-mono text-xs text-gray-500 uppercase tracking-widest">Requirement Type</span>
<button className="w-full bg-transparent border-b border-white/20 py-3 text-left text-white text-base flex justify-between items-center group focus:border-white transition-colors" id="dropdown-btn" type="button">
<span className="text-gray-400" id="dropdown-val">Select Primary Domain</span>
<i className="w-4 h-4 text-gray-500 group-focus:text-white transition-transform duration-300" data-lucide="chevron-down" id="dropdown-icon"></i>
</button>
<input id="service-input" name="service" required="" type="hidden"/>
<ul className="dropdown-menu absolute top-full left-0 w-full mt-2 bg-[#111111] border border-white/10 rounded-xl z-50 max-h-60 overflow-y-auto py-2 shadow-2xl" id="dropdown-list">

<li className="px-4 py-3 text-base text-gray-400 hover:bg-white/10 hover:text-white cursor-pointer transition-colors">Civil Infrastructure</li><li className="px-4 py-3 text-base text-gray-400 hover:bg-white/10 hover:text-white cursor-pointer transition-colors">Commercial Build</li><li className="px-4 py-3 text-base text-gray-400 hover:bg-white/10 hover:text-white cursor-pointer transition-colors">Foundation Systems</li><li className="px-4 py-3 text-base text-gray-400 hover:bg-white/10 hover:text-white cursor-pointer transition-colors">Structural Elements</li><li className="px-4 py-3 text-base text-gray-400 hover:bg-white/10 hover:text-white cursor-pointer transition-colors">Utility Networks</li><li className="px-4 py-3 text-base text-gray-400 hover:bg-white/10 hover:text-white cursor-pointer transition-colors">Design-Build Methodology</li><li className="px-4 py-3 text-base text-gray-400 hover:bg-white/10 hover:text-white cursor-pointer transition-colors">Architectural Concrete</li><li className="px-4 py-3 text-base text-gray-400 hover:bg-white/10 hover:text-white cursor-pointer transition-colors">Consulting &amp; Engineering</li></ul>
</div>
<div className="relative group mt-4">
<textarea className="w-full bg-transparent border-b border-white/20 py-3 text-white text-base focus:border-white transition-colors resize-none peer placeholder-transparent" id="description" name="description" placeholder="Technical Specifications" required="" rows="3"></textarea>
<label className="absolute left-0 top-3 font-mono text-xs text-gray-500 uppercase tracking-widest transition-all peer-focus:-top-5 peer-focus:text-white peer-valid:-top-5 peer-valid:text-gray-500" htmlFor="description">Specifications</label>
</div>
<button className="bg-white text-black w-full rounded-full py-4 text-sm font-medium hover:bg-gray-200 transition-colors flex justify-center items-center mt-6 gap-2" type="submit">
                        Submit Documentation <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</form>
</div>
</div>
</section>

<footer className="bg-black pt-20 pb-10 px-6 md:px-12 border-t border-white/10 mt-auto">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-16 border-b border-white/10 pb-16">

<div className="flex flex-col items-start gap-6">
<svg className="w-10 h-10 text-white" fill="none" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path d="M12 26L24 18L36 26M12 34L24 26L36 34M12 42L24 34L36 42" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
<path d="M12 26V42" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
<path d="M24 10L12 18M24 10L36 18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
</svg>
<div>
<div className="text-xl font-medium text-white tracking-tight mb-2">Easy Solution</div>
<p className="text-gray-500 text-sm">Premium Contracting based in UAE.</p>
</div>
</div>

<div className="flex flex-col gap-4 text-sm font-medium text-gray-400">
<a className="hover:text-white transition-colors w-fit" href="#services">Services</a>
<a className="hover:text-white transition-colors w-fit" href="#philosophy">Philosophy</a>
<a className="hover:text-white transition-colors w-fit" href="#protocol">Protocol</a>
<a className="hover:text-white transition-colors w-fit" href="#contact">Contact</a>
</div>

<div className="flex flex-col justify-end gap-6 md:items-end text-sm text-gray-500">
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
<div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="font-mono text-xs text-gray-600 uppercase tracking-widest">
                    © 2024 Easy Solution. All Rights Reserved.
                </div>
<div className="flex items-center gap-3 font-mono text-xs text-gray-400 tracking-widest uppercase bg-[#0A0A0A] px-4 py-2 rounded-full border border-white/10">
<div className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-40"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
</div>
                    Systems Nominal
                </div>
</div>
</div>
</footer>



    </>
  );
}
