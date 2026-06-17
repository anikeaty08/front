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



        // Initialize Lenis Smooth Scroll
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false,
        });

        // Integrate Lenis with GSAP ScrollTrigger
        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);

        // Navbar blur on scroll
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('bg-[#0D0D0D]/90');
                navbar.classList.remove('bg-[#0D0D0D]/70');
            } else {
                navbar.classList.add('bg-[#0D0D0D]/70');
                navbar.classList.remove('bg-[#0D0D0D]/90');
            }
        });

        // GSAP Animations
        document.addEventListener("DOMContentLoaded", (event) => {
            gsap.registerPlugin(ScrollTrigger);

            // Hero Animation
            const heroTl = gsap.timeline();
            
            // Set initial state
            gsap.set(".hero-text", { y: 100, opacity: 0, visibility: "visible" });
            
            heroTl.to(".hero-text", {
                y: 0,
                opacity: 1,
                duration: 1.2,
                stagger: 0.15,
                ease: "power4.out",
                delay: 0.2
            })
            .to("#hero-img", {
                scale: 1,
                duration: 2,
                ease: "power2.out"
            }, "-=1.2");

            // Hero Image Parallax
            gsap.to("#hero-img", {
                yPercent: 30,
                ease: "none",
                scrollTrigger: {
                    trigger: "section",
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                } 
            });

            // Fade Up Elements on Scroll
            const fadeUpElements = gsap.utils.toArray('.gsap-fade-up');
            fadeUpElements.forEach(elem => {
                gsap.set(elem, { visibility: "visible" }); // Make visible before animation starts
                gsap.from(elem, {
                    scrollTrigger: {
                        trigger: elem,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    },
                    y: 40,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out"
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
      

<nav className="fixed top-0 w-full z-50 bg-[#0D0D0D]/70 backdrop-blur-xl border-b border-[#2A2E34] transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="font-['Montserrat'] font-semibold tracking-tighter text-2xl uppercase tracking-[0.2em] flex items-center gap-2" href="#">
                Spare<span className="text-[#FF3C3C]">Orbit</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#B0B0B0]">
<a className="hover:text-[#FFFFFF] transition-colors" href="#models">Find Model</a>
<a className="hover:text-[#FFFFFF] transition-colors" href="#about">The Orbit Standard</a>
<a className="hover:text-[#FFFFFF] transition-colors" href="#catalog">Catalog</a>
</div>
<div className="flex items-center gap-4">
<button className="text-[#FFFFFF] hover:text-[#FF3C3C] transition-colors">
<iconify-icon className="text-2xl" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="text-[#FFFFFF] hover:text-[#FF3C3C] transition-colors relative">
<iconify-icon className="text-2xl" icon="solar:bag-2-linear" strokeWidth="1.5"></iconify-icon>
<span className="absolute -top-1 -right-1 bg-[#FF3C3C] text-xs w-4 h-4 flex items-center justify-center rounded-full font-medium">0</span>
</button>
</div>
</div>
</nav>

<section className="relative h-screen flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/60 via-transparent to-[#0D0D0D] z-10"></div>

<img alt="Premium Car Side Mirror" className="w-full h-full object-cover scale-110 opacity-60" id="hero-img" src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative z-10 text-center max-w-4xl px-6 flex flex-col items-center">
<div className="overflow-hidden mb-4">
<h1 className="text-5xl md:text-7xl font-['Montserrat'] font-semibold tracking-tight leading-tight hero-text gsap-reveal">
                    Precision Mirrors.
                </h1>
</div>
<div className="overflow-hidden mb-6">
<h1 className="text-5xl md:text-7xl font-['Montserrat'] font-semibold tracking-tight leading-tight text-[#B0B0B0] hero-text gsap-reveal">
                    Perfect Vision.
                </h1>
</div>
<div className="overflow-hidden mb-10">
<p className="text-base md:text-lg text-[#B0B0B0] max-w-xl mx-auto font-light hero-text gsap-reveal">
                    OEM &amp; Renewed Outside Rear View Mirrors for the uncompromising smart car owner. Find your perfect fit.
                </p>
</div>
<div className="hero-text gsap-reveal">
<a className="inline-flex items-center justify-center px-8 py-4 bg-[#FF3C3C] text-[#FFFFFF] font-medium text-sm rounded-none hover:bg-[#C62828] transition-all duration-300 group" href="#catalog">
                    Find Your ORVM
                    <iconify-icon className="ml-2 text-xl group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center opacity-50 hero-text gsap-reveal">
<span className="text-xs tracking-widest uppercase mb-2">Scroll to explore</span>
<div className="w-[1px] h-12 bg-gradient-to-b from-[#FFFFFF] to-transparent overflow-hidden">
<div className="w-full h-1/2 bg-[#FF3C3C] animate-[slideDown_2s_ease-in-out_infinite]"></div>
</div>
</div>
</section>

<section className="py-32 bg-[#0D0D0D] relative z-20" id="about">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1 relative group rounded-2xl overflow-hidden gsap-fade-up">
<div className="absolute inset-0 bg-[#FF3C3C]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
<img alt="ORVM Engineering" className="w-full h-[600px] object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="order-1 md:order-2 flex flex-col justify-center">
<span className="text-[#FF3C3C] text-sm font-medium tracking-widest uppercase mb-4 block gsap-fade-up">The Orbit Standard</span>
<h2 className="text-4xl md:text-5xl font-['Montserrat'] font-semibold tracking-tight mb-8 leading-tight gsap-fade-up">Engineered for flawless integration.</h2>
<div className="space-y-8">
<div className="flex gap-4 gsap-fade-up">
<div className="mt-1 flex-shrink-0 w-10 h-10 rounded-full bg-[#1A1D21] border border-[#2A2E34] flex items-center justify-center text-[#FFFFFF]">
<iconify-icon className="text-xl" icon="solar:eye-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-['Montserrat'] font-medium mb-2 tracking-tight">Built for Clarity</h3>
<p className="text-sm text-[#B0B0B0] font-light leading-relaxed">High-definition automotive glass tailored to eliminate blind spots and ensure pristine rearward visibility in all conditions.</p>
</div>
</div>
<div className="flex gap-4 gsap-fade-up">
<div className="mt-1 flex-shrink-0 w-10 h-10 rounded-full bg-[#1A1D21] border border-[#2A2E34] flex items-center justify-center text-[#FFFFFF]">
<iconify-icon className="text-xl" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-['Montserrat'] font-medium mb-2 tracking-tight">Designed for Safety</h3>
<p className="text-sm text-[#B0B0B0] font-light leading-relaxed">Integrated heating elements and precise motorized adjustments restore your vehicle's factory safety features instantly.</p>
</div>
</div>
<div className="flex gap-4 gsap-fade-up">
<div className="mt-1 flex-shrink-0 w-10 h-10 rounded-full bg-[#1A1D21] border border-[#2A2E34] flex items-center justify-center text-[#FFFFFF]">
<iconify-icon className="text-xl" icon="solar:screencast-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-['Montserrat'] font-medium mb-2 tracking-tight">Engineered for Fit</h3>
<p className="text-sm text-[#B0B0B0] font-light leading-relaxed">Direct OEM fitment guarantees a seamless installation. No modifications, no panel gaps. Just perfect alignment.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#1A1D21] relative border-y border-[#2A2E34]">
<div className="max-w-7xl mx-auto px-6 text-center gsap-fade-up">
<h2 className="text-3xl md:text-4xl font-['Montserrat'] font-semibold tracking-tight mb-4">Stop Overpaying for Mirror Replacement.</h2>
<p className="text-base text-[#B0B0B0] max-w-2xl mx-auto mb-16 font-light">Dealerships mark up ORVMs drastically. Spare Orbit cuts the middleman, providing you verified OEM and expertly renewed units at a fraction of the cost.</p>
</div>
<div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="bg-[#0D0D0D] border border-[#2A2E34] p-8 rounded-2xl flex flex-col items-center text-center gsap-fade-up">
<div className="w-16 h-16 rounded-full bg-red-950/30 text-[#FF3C3C] flex items-center justify-center mb-6">
<iconify-icon className="text-3xl" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-['Montserrat'] font-medium mb-2 tracking-tight">Dealership Route</h3>
<p className="text-sm text-[#B0B0B0] mb-6">Exorbitant costs, long waiting periods for part arrivals, and hidden labor charges.</p>
<div className="text-[#FF3C3C] font-semibold text-lg line-through opacity-70">₹12,000 - ₹45,000+</div>
</div>

<div className="bg-gradient-to-br from-[#1A1D21] to-[#0D0D0D] border border-[#FF3C3C]/30 p-8 rounded-2xl flex flex-col items-center text-center shadow-[0_0_30px_rgba(255,60,60,0.05)] relative overflow-hidden gsap-fade-up">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF3C3C] to-transparent"></div>
<div className="w-16 h-16 rounded-full bg-emerald-950/30 text-emerald-500 flex items-center justify-center mb-6">
<iconify-icon className="text-3xl" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-['Montserrat'] font-medium mb-2 tracking-tight">Spare Orbit Route</h3>
<p className="text-sm text-[#B0B0B0] mb-6">Direct OEM supply or rigorously tested renewed ORVMs delivered to your door.</p>
<div className="text-[#FFFFFF] font-semibold text-xl">Up to 60% Savings</div>
</div>
</div>
</section>

<section className="py-32 bg-[#0D0D0D]" id="catalog">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-16 gsap-fade-up">
<div>
<span className="text-[#FF3C3C] text-sm font-medium tracking-widest uppercase mb-2 block">Catalog</span>
<h2 className="text-4xl md:text-5xl font-['Montserrat'] font-semibold tracking-tight">Select your vehicle.</h2>
</div>
<a className="hidden md:flex items-center text-sm text-[#B0B0B0] hover:text-[#FFFFFF] transition-colors pb-2 border-b border-transparent hover:border-[#FFFFFF]" href="#">
                    View all models <iconify-icon className="ml-1" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group bg-[#1A1D21] border border-[#2A2E34] hover:border-[#4A4E54] rounded-2xl p-4 transition-all duration-300 flex flex-col gsap-fade-up cursor-pointer">
<div className="bg-[#0D0D0D] rounded-xl aspect-[4/3] mb-4 flex items-center justify-center overflow-hidden relative">
<span className="absolute top-3 left-3 bg-[#0D0D0D]/80 backdrop-blur text-xs px-2 py-1 border border-[#2A2E34] rounded text-[#B0B0B0] z-10">Renewed</span>
<img alt="Honda City ORVM" className="w-3/4 h-3/4 object-contain opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500 filter grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="mt-auto">
<div className="text-xs text-[#B0B0B0] mb-1 font-['Montserrat']">Honda</div>
<h3 className="text-base font-medium mb-2 truncate">City (2017-2020) Right ORVM</h3>
<div className="flex items-center justify-between mt-4">
<span className="text-lg font-semibold tracking-tight">₹4,200</span>
<button className="w-8 h-8 rounded-full bg-[#2A2E34] flex items-center justify-center group-hover:bg-[#FFFFFF] group-hover:text-[#0D0D0D] transition-colors">
<iconify-icon icon="solar:cart-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group bg-[#1A1D21] border border-[#2A2E34] hover:border-[#4A4E54] rounded-2xl p-4 transition-all duration-300 flex flex-col gsap-fade-up cursor-pointer" style={{transitionDelay: '100ms'}}>
<div className="bg-[#0D0D0D] rounded-xl aspect-[4/3] mb-4 flex items-center justify-center overflow-hidden relative">
<span className="absolute top-3 left-3 bg-[#FF3C3C]/10 text-[#FF3C3C] text-xs px-2 py-1 border border-[#FF3C3C]/20 rounded z-10">OEM New</span>
<img alt="BMW 3 Series ORVM" className="w-3/4 h-3/4 object-contain opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500 filter grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="mt-auto">
<div className="text-xs text-[#B0B0B0] mb-1 font-['Montserrat']">BMW</div>
<h3 className="text-base font-medium mb-2 truncate">3 Series (F30) Left ORVM</h3>
<div className="flex items-center justify-between mt-4">
<span className="text-lg font-semibold tracking-tight">₹14,500</span>
<button className="w-8 h-8 rounded-full bg-[#2A2E34] flex items-center justify-center group-hover:bg-[#FFFFFF] group-hover:text-[#0D0D0D] transition-colors">
<iconify-icon icon="solar:cart-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group bg-[#1A1D21] border border-[#2A2E34] hover:border-[#4A4E54] rounded-2xl p-4 transition-all duration-300 flex flex-col gsap-fade-up cursor-pointer" style={{transitionDelay: '200ms'}}>
<div className="bg-[#0D0D0D] rounded-xl aspect-[4/3] mb-4 flex items-center justify-center overflow-hidden relative">
<span className="absolute top-3 left-3 bg-[#0D0D0D]/80 backdrop-blur text-xs px-2 py-1 border border-[#2A2E34] rounded text-[#B0B0B0] z-10">Renewed</span>
<img alt="Hyundai Creta ORVM" className="w-3/4 h-3/4 object-contain opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500 filter grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="mt-auto">
<div className="text-xs text-[#B0B0B0] mb-1 font-['Montserrat']">Hyundai</div>
<h3 className="text-base font-medium mb-2 truncate">Creta (2020+) Right ORVM Auto-fold</h3>
<div className="flex items-center justify-between mt-4">
<span className="text-lg font-semibold tracking-tight">₹5,800</span>
<button className="w-8 h-8 rounded-full bg-[#2A2E34] flex items-center justify-center group-hover:bg-[#FFFFFF] group-hover:text-[#0D0D0D] transition-colors">
<iconify-icon icon="solar:cart-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group bg-[#1A1D21] border border-[#2A2E34] hover:border-[#4A4E54] rounded-2xl p-4 transition-all duration-300 flex flex-col gsap-fade-up cursor-pointer" style={{transitionDelay: '300ms'}}>
<div className="bg-[#0D0D0D] rounded-xl aspect-[4/3] mb-4 flex items-center justify-center overflow-hidden relative">
<span className="absolute top-3 left-3 bg-[#0D0D0D]/80 backdrop-blur text-xs px-2 py-1 border border-[#2A2E34] rounded text-[#B0B0B0] z-10">Renewed</span>
<img alt="Maruti Swift ORVM" className="w-3/4 h-3/4 object-contain opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500 filter grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="mt-auto">
<div className="text-xs text-[#B0B0B0] mb-1 font-['Montserrat']">Maruti Suzuki</div>
<h3 className="text-base font-medium mb-2 truncate">Swift (2018+) Left ORVM</h3>
<div className="flex items-center justify-between mt-4">
<span className="text-lg font-semibold tracking-tight">₹2,400</span>
<button className="w-8 h-8 rounded-full bg-[#2A2E34] flex items-center justify-center group-hover:bg-[#FFFFFF] group-hover:text-[#0D0D0D] transition-colors">
<iconify-icon icon="solar:cart-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-[#0D0D0D] border-t border-[#2A2E34]">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-[#2A2E34]">
<div className="flex flex-col items-center text-center px-4 gsap-fade-up">
<iconify-icon className="text-4xl text-[#FFFFFF] mb-4" icon="solar:verified-check-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="text-sm font-['Montserrat'] font-medium mb-1">OEM Quality</h4>
<p className="text-xs text-[#B0B0B0] font-light">Guaranteed factory specs.</p>
</div>
<div className="flex flex-col items-center text-center px-4 gsap-fade-up" style={{transitionDelay: '100ms'}}>
<iconify-icon className="text-4xl text-[#FFFFFF] mb-4" icon="solar:settings-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="text-sm font-['Montserrat'] font-medium mb-1">Renewed &amp; Tested</h4>
<p className="text-xs text-[#B0B0B0] font-light">Motors &amp; heaters verified.</p>
</div>
<div className="flex flex-col items-center text-center px-4 gsap-fade-up" style={{transitionDelay: '200ms'}}>
<iconify-icon className="text-4xl text-[#FFFFFF] mb-4" icon="solar:box-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="text-sm font-['Montserrat'] font-medium mb-1">Secure Packaging</h4>
<p className="text-xs text-[#B0B0B0] font-light">Damage-free transit.</p>
</div>
<div className="flex flex-col items-center text-center px-4 gsap-fade-up" style={{transitionDelay: '300ms'}}>
<iconify-icon className="text-4xl text-[#FFFFFF] mb-4" icon="solar:routing-2-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="text-sm font-['Montserrat'] font-medium mb-1">Pan India Delivery</h4>
<p className="text-xs text-[#B0B0B0] font-light">Fast dispatch nationwide.</p>
</div>
</div>
</section>

<section className="py-32 bg-[#1A1D21] relative overflow-hidden">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF3C3C] rounded-full blur-[150px] opacity-[0.03] pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FFFFFF] rounded-full blur-[150px] opacity-[0.02] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<h2 className="text-4xl md:text-5xl font-['Montserrat'] font-semibold tracking-tight text-center mb-20 gsap-fade-up">Procurement. Simplified.</h2>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6">

<div className="bg-[#0D0D0D]/50 backdrop-blur border border-[#2A2E34] p-8 rounded-2xl relative gsap-fade-up">
<div className="absolute -top-4 -left-4 w-10 h-10 bg-[#FF3C3C] text-[#FFFFFF] font-['Montserrat'] font-semibold flex items-center justify-center rounded-lg shadow-lg">01</div>
<iconify-icon className="text-3xl text-[#B0B0B0] mb-6" icon="solar:car-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-lg font-medium mb-2 font-['Montserrat']">Select Vehicle</h3>
<p className="text-sm text-[#B0B0B0] font-light">Choose your exact make, model, and year to ensure 100% compatibility.</p>
</div>

<div className="bg-[#0D0D0D]/50 backdrop-blur border border-[#2A2E34] p-8 rounded-2xl relative gsap-fade-up" style={{transitionDelay: '100ms'}}>
<div className="absolute -top-4 -left-4 w-10 h-10 bg-[#2A2E34] text-[#FFFFFF] font-['Montserrat'] font-semibold flex items-center justify-center rounded-lg shadow-lg">02</div>
<iconify-icon className="text-3xl text-[#B0B0B0] mb-6" icon="solar:mirror-left-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-lg font-medium mb-2 font-['Montserrat']">Choose ORVM</h3>
<p className="text-sm text-[#B0B0B0] font-light">Select left or right side, and specify features like auto-fold or heating.</p>
</div>

<div className="bg-[#0D0D0D]/50 backdrop-blur border border-[#2A2E34] p-8 rounded-2xl relative gsap-fade-up" style={{transitionDelay: '200ms'}}>
<div className="absolute -top-4 -left-4 w-10 h-10 bg-[#2A2E34] text-[#FFFFFF] font-['Montserrat'] font-semibold flex items-center justify-center rounded-lg shadow-lg">03</div>
<iconify-icon className="text-3xl text-[#B0B0B0] mb-6" icon="solar:test-tube-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-lg font-medium mb-2 font-['Montserrat']">We Verify</h3>
<p className="text-sm text-[#B0B0B0] font-light">Our technicians test motors, indicators, and glass clarity before packing.</p>
</div>

<div className="bg-[#0D0D0D]/50 backdrop-blur border border-[#2A2E34] p-8 rounded-2xl relative gsap-fade-up" style={{transitionDelay: '300ms'}}>
<div className="absolute -top-4 -left-4 w-10 h-10 bg-[#2A2E34] text-[#FFFFFF] font-['Montserrat'] font-semibold flex items-center justify-center rounded-lg shadow-lg">04</div>
<iconify-icon className="text-3xl text-[#B0B0B0] mb-6" icon="solar:box-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-lg font-medium mb-2 font-['Montserrat']">Delivered</h3>
<p className="text-sm text-[#B0B0B0] font-light">Securely packaged and shipped directly to your mechanic or home.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0D0D0D] overflow-hidden">
<div className="max-w-7xl mx-auto px-6 mb-12 text-center gsap-fade-up">
<h2 className="text-3xl md:text-4xl font-['Montserrat'] font-semibold tracking-tight">Trusted by Enthusiasts.</h2>
</div>

<div className="relative flex overflow-x-hidden w-full gsap-fade-up">
<div className="animate-marquee whitespace-nowrap flex gap-6 px-3">

<div className="w-[350px] inline-flex flex-col bg-[#1A1D21] border border-[#2A2E34] p-6 rounded-2xl whitespace-normal">
<div className="flex text-[#FF3C3C] mb-4">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-[#B0B0B0] mb-6 font-light leading-relaxed">"Skeptical about buying a renewed mirror for my Vento, but the quality is indistinguishable from the factory. Auto-fold works perfectly."</p>
<div className="mt-auto">
<p className="text-sm font-medium">Rahul M.</p>
<p className="text-xs text-[#B0B0B0]">VW Vento Owner</p>
</div>
</div>

<div className="w-[350px] inline-flex flex-col bg-[#1A1D21] border border-[#2A2E34] p-6 rounded-2xl whitespace-normal">
<div className="flex text-[#FF3C3C] mb-4">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-[#B0B0B0] mb-6 font-light leading-relaxed">"Saved over ₹15k compared to the Audi dealership quote. The ORVM arrived in pristine condition with secure packaging."</p>
<div className="mt-auto">
<p className="text-sm font-medium">Karan S.</p>
<p className="text-xs text-[#B0B0B0]">Audi A4 Owner</p>
</div>
</div>

<div className="w-[350px] inline-flex flex-col bg-[#1A1D21] border border-[#2A2E34] p-6 rounded-2xl whitespace-normal">
<div className="flex text-[#FF3C3C] mb-4">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-[#B0B0B0] mb-6 font-light leading-relaxed">"The indicator strip on my old mirror was broken. Ordered a replacement here, exact color match and easy plug-and-play."</p>
<div className="mt-auto">
<p className="text-sm font-medium">Priya D.</p>
<p className="text-xs text-[#B0B0B0]">Hyundai i20 Owner</p>
</div>
</div>

<div className="w-[350px] inline-flex flex-col bg-[#1A1D21] border border-[#2A2E34] p-6 rounded-2xl whitespace-normal">
<div className="flex text-[#FF3C3C] mb-4">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-[#B0B0B0] mb-6 font-light leading-relaxed">"Skeptical about buying a renewed mirror for my Vento, but the quality is indistinguishable from the factory. Auto-fold works perfectly."</p>
<div className="mt-auto">
<p className="text-sm font-medium">Rahul M.</p>
<p className="text-xs text-[#B0B0B0]">VW Vento Owner</p>
</div>
</div>
</div>
</div>
<style>
            @keyframes marquee {
                0% { transform: translateX(0%); }
                100% { transform: translateX(-50%); }
            }
            .animate-marquee {
                animation: marquee 20s linear infinite;
            }
            .animate-marquee:hover {
                animation-play-state: paused;
            }
            @keyframes slideDown {
                0% { transform: translateY(-100%); }
                50% { transform: translateY(100%); }
                100% { transform: translateY(100%); }
            }
        </style>
</section>

<section className="py-32 bg-[#1A1D21] relative border-t border-[#2A2E34] overflow-hidden">
<div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#FF3C3C]/30 to-transparent blur-[100px] rounded-full"></div>
</div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10 gsap-fade-up">
<h2 className="text-5xl md:text-7xl font-['Montserrat'] font-semibold tracking-tight mb-6">Find the Right ORVM Today.</h2>
<p className="text-lg text-[#B0B0B0] mb-10 font-light max-w-2xl mx-auto">Restore your vehicle's aesthetic and safety standards. Don't compromise on rearward vision.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 bg-[#FFFFFF] text-[#0D0D0D] font-medium text-sm hover:bg-[#B0B0B0] transition-colors duration-300" href="#catalog">
                    Get Your Mirror Now
                </a>
<a className="w-full sm:w-auto px-8 py-4 bg-transparent border border-[#2A2E34] text-[#FFFFFF] font-medium text-sm hover:border-[#FFFFFF] transition-colors duration-300 flex items-center justify-center gap-2" href="#">
<iconify-icon className="text-lg" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
                    Contact Support
                </a>
</div>
</div>
</section>

<footer className="bg-[#0D0D0D] border-t border-[#2A2E34] pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<a className="font-['Montserrat'] font-semibold tracking-tighter text-2xl uppercase tracking-[0.2em] mb-4 block" href="#">
                    Spare<span className="text-[#FF3C3C]">Orbit</span>
</a>
<p className="text-xs text-[#B0B0B0] font-light leading-relaxed max-w-xs">The premium destination for automotive Outside Rear View Mirrors. Specializing in OEM and tested renewed components.</p>
</div>
<div>
<h4 className="text-sm font-['Montserrat'] font-medium mb-6 uppercase tracking-wider">Explore</h4>
<ul className="space-y-3 text-sm text-[#B0B0B0] font-light">
<li><a className="hover:text-[#FFFFFF] transition-colors" href="#">Catalog</a></li>
<li><a className="hover:text-[#FFFFFF] transition-colors" href="#">Find by Brand</a></li>
<li><a className="hover:text-[#FFFFFF] transition-colors" href="#">Renewed vs OEM</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-['Montserrat'] font-medium mb-6 uppercase tracking-wider">Support</h4>
<ul className="space-y-3 text-sm text-[#B0B0B0] font-light">
<li><a className="hover:text-[#FFFFFF] transition-colors" href="#">Track Order</a></li>
<li><a className="hover:text-[#FFFFFF] transition-colors" href="#">Return Policy</a></li>
<li><a className="hover:text-[#FFFFFF] transition-colors" href="#">Installation Guide</a></li>
<li><a className="hover:text-[#FFFFFF] transition-colors" href="#">Contact Us</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-['Montserrat'] font-medium mb-6 uppercase tracking-wider">Legal</h4>
<ul className="space-y-3 text-sm text-[#B0B0B0] font-light">
<li><a className="hover:text-[#FFFFFF] transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-[#FFFFFF] transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-[#FFFFFF] transition-colors" href="#">Warranty Info</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 pt-8 border-t border-[#2A2E34] flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-[#B0B0B0] font-light">© 2023 Spare Orbit. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-[#B0B0B0] hover:text-[#FFFFFF] transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon></a>
<a className="text-[#B0B0B0] hover:text-[#FFFFFF] transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:camera-linear" strokeWidth="1.5"></iconify-icon></a>
</div>
</div>
</footer>

<a className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_0_20px_rgba(37,211,102,0.3)] flex items-center justify-center hover:scale-110 transition-transform duration-300 group" href="#">
<iconify-icon className="text-2xl group-hover:animate-pulse" icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>
</a>



    </>
  );
}
