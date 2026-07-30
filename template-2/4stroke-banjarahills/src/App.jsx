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



        document.addEventListener("DOMContentLoaded", (event) => {
            gsap.registerPlugin(ScrollTrigger);

            // Header Shrink on Scroll
            const navbar = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar.classList.add('py-2');
                    navbar.classList.remove('py-4');
                    navbar.classList.add('bg-[#0A0A0A]/95');
                } else {
                    navbar.classList.add('py-4');
                    navbar.classList.remove('py-2');
                    navbar.classList.remove('bg-[#0A0A0A]/95');
                }
            });

            // Hero Animation
            const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
            
            heroTl.from(".gsap-hero-el", {
                y: 30,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                delay: 0.2
            })
            .fromTo(".gsap-hero-img-wrap > div:first-child", 
                { scale: 1.1, opacity: 0 },
                { scale: 1, opacity: 0.8, duration: 1.5, ease: "power2.out" },
                "-=0.8"
            );

            // Scroll Reveal Staggers
            const fadeUpSections = document.querySelectorAll('section');
            fadeUpSections.forEach(section => {
                const elements = section.querySelectorAll('.gsap-fade-up');
                if(elements.length > 0) {
                    gsap.from(elements, {
                        scrollTrigger: {
                            trigger: section,
                            start: "top 85%",
                        },
                        y: 40,
                        opacity: 0,
                        duration: 0.8,
                        stagger: 0.1,
                        ease: "power2.out"
                    });
                }
            });

            // Infinite Marquee
            gsap.to(".gsap-marquee", {
                xPercent: -50,
                ease: "none",
                duration: 20,
                repeat: -1
            });

            // Parallax Effect
            gsap.to(".gsap-parallax-bg", {
                scrollTrigger: {
                    trigger: ".gsap-parallax-trigger",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                },
                yPercent: 20,
                ease: "none"
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
      

<header className="fixed top-0 left-0 w-full z-50 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-white/5 transition-all duration-300 py-4" id="navbar">
<div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

<a className="font-['Montserrat',sans-serif] font-semibold text-2xl tracking-tighter text-white uppercase flex items-center gap-1" href="#">
                4STROKE
            </a>

<div className="hidden md:flex items-center bg-[#1A1A1A] rounded-full px-5 py-2.5 border border-white/5 focus-within:border-[#1F4E79] transition-colors w-96">
<iconify-icon className="text-gray-400 text-lg mr-3" icon="solar:magnifer-linear"></iconify-icon>
<input className="bg-transparent text-sm text-white font-light focus:outline-none w-full placeholder:text-gray-600" placeholder="Search parts, categories, brands..." type="text" />
</div>

<div className="flex items-center gap-6">
<a className="text-gray-400 hover:text-white transition-colors relative group" href="#">
<iconify-icon className="text-xl" icon="solar:user-linear"></iconify-icon>
</a>
<a className="text-gray-400 hover:text-white transition-colors relative group hidden sm:block" href="#">
<iconify-icon className="text-xl" icon="solar:heart-linear"></iconify-icon>
<span className="absolute -top-1.5 -right-1.5 bg-[#E10600] text-white text-xs flex items-center justify-center w-4 h-4 rounded-full font-medium">2</span>
</a>
<a className="text-gray-400 hover:text-white transition-colors relative group flex items-center gap-2" href="#">
<iconify-icon className="text-xl" icon="solar:cart-large-minimalistic-linear"></iconify-icon>
<span className="hidden sm:block text-sm font-medium text-white">$450.00</span>
</a>
</div>
</div>
</header>

<section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-br from-[#0B1F3A]/30 via-[#0A0A0A] to-[#0A0A0A] z-0"></div>
<div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
<div className="max-w-xl">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 gsap-hero-el">
<span className="w-2 h-2 rounded-full bg-[#E10600] animate-pulse"></span>
<span className="text-xs font-medium text-gray-300 uppercase tracking-widest">New Arrivals</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter font-['Montserrat',sans-serif] text-white leading-[1.05] mb-6 gsap-hero-el">
                    Engineered for <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Performance</span>
</h1>
<p className="text-lg text-gray-400 font-light mb-10 leading-relaxed gsap-hero-el max-w-md">
                    Precision OEM, OES & Aftermarket Parts for high-performance European and exotic vehicles.
                </p>
<div className="flex flex-wrap items-center gap-4 gsap-hero-el">
<a className="bg-[#E10600] hover:bg-red-700 text-white px-8 py-3.5 rounded-md text-sm font-medium transition-all hover:shadow-[0_0_20px_rgba(225,6,0,0.3)] hover:-translate-y-0.5 inline-flex items-center gap-2 group" href="#">
                        Shop Now
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="bg-transparent border border-white/20 hover:border-white text-white px-8 py-3.5 rounded-md text-sm font-medium transition-colors" href="#">
                        Explore Range
                    </a>
</div>
</div>
<div className="relative h-[500px] md:h-[700px] w-full gsap-hero-img-wrap">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620912197171-7004d493e8ea?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center rounded-2xl opacity-80 mix-blend-lighten mask-image-linear-gradient"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#1F4E79]/20 blur-[100px] rounded-full"></div>
</div>
</div>
</section>

<div className="border-y border-white/5 bg-[#0A0A0A] py-8 overflow-hidden flex relative">
<div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10"></div>
<div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10"></div>
<div className="flex items-center gap-24 whitespace-nowrap gsap-marquee opacity-60">

<span className="text-2xl font-semibold tracking-tighter font-['Montserrat',sans-serif] text-gray-400">BOSCH</span>
<span className="text-2xl font-semibold tracking-tighter font-['Montserrat',sans-serif] text-gray-400">BREMBO</span>
<span className="text-2xl font-semibold tracking-tighter font-['Montserrat',sans-serif] text-gray-400">MICHELIN</span>
<span className="text-2xl font-semibold tracking-tighter font-['Montserrat',sans-serif] text-gray-400">MOTUL</span>
<span className="text-2xl font-semibold tracking-tighter font-['Montserrat',sans-serif] text-gray-400">NGK</span>
<span className="text-2xl font-semibold tracking-tighter font-['Montserrat',sans-serif] text-gray-400">BILSTEIN</span>

<span className="text-2xl font-semibold tracking-tighter font-['Montserrat',sans-serif] text-gray-400">BOSCH</span>
<span className="text-2xl font-semibold tracking-tighter font-['Montserrat',sans-serif] text-gray-400">BREMBO</span>
<span className="text-2xl font-semibold tracking-tighter font-['Montserrat',sans-serif] text-gray-400">MICHELIN</span>
<span className="text-2xl font-semibold tracking-tighter font-['Montserrat',sans-serif] text-gray-400">MOTUL</span>
<span className="text-2xl font-semibold tracking-tighter font-['Montserrat',sans-serif] text-gray-400">NGK</span>
<span className="text-2xl font-semibold tracking-tighter font-['Montserrat',sans-serif] text-gray-400">BILSTEIN</span>
</div>
</div>

<section className="max-w-7xl mx-auto px-6 py-32">
<div className="flex items-end justify-between mb-12 gsap-fade-up">
<div>
<h2 className="text-3xl font-semibold tracking-tight font-['Montserrat',sans-serif] mb-2">Shop by System</h2>
<p className="text-sm text-gray-400 font-light">Precision parts for every aspect of your vehicle.</p>
</div>
<a className="hidden sm:flex items-center gap-1 text-sm font-medium hover:text-[#E10600] transition-colors" href="#">
                View All Categories <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">

<a className="group relative bg-[#1A1A1A] p-8 rounded-xl border border-white/5 hover:border-[#1F4E79]/50 transition-all duration-300 overflow-hidden flex flex-col items-center justify-center gap-4 min-h-[200px] gsap-fade-up hover:-translate-y-1" href="#">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1F4E79]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<iconify-icon className="text-4xl text-gray-500 group-hover:text-white group-hover:scale-110 transition-all duration-300 z-10" icon="solar:engine-linear"></iconify-icon>
<span className="text-base font-medium font-['Montserrat',sans-serif] z-10">Engine Components</span>
</a>

<a className="group relative bg-[#1A1A1A] p-8 rounded-xl border border-white/5 hover:border-[#1F4E79]/50 transition-all duration-300 overflow-hidden flex flex-col items-center justify-center gap-4 min-h-[200px] gsap-fade-up hover:-translate-y-1" href="#" style={{transitionDelay: `100ms`}}>
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1F4E79]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<iconify-icon className="text-4xl text-gray-500 group-hover:text-white group-hover:scale-110 transition-all duration-300 z-10" icon="solar:wheel-linear"></iconify-icon>
<span className="text-base font-medium font-['Montserrat',sans-serif] z-10">Brakes & Suspension</span>
</a>

<a className="group relative bg-[#1A1A1A] p-8 rounded-xl border border-white/5 hover:border-[#1F4E79]/50 transition-all duration-300 overflow-hidden flex flex-col items-center justify-center gap-4 min-h-[200px] gsap-fade-up hover:-translate-y-1" href="#" style={{transitionDelay: `200ms`}}>
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1F4E79]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<iconify-icon className="text-4xl text-gray-500 group-hover:text-white group-hover:scale-110 transition-all duration-300 z-10" icon="solar:tuning-square-2-linear"></iconify-icon>
<span className="text-base font-medium font-['Montserrat',sans-serif] z-10">Exhaust Systems</span>
</a>

<a className="group relative bg-[#1A1A1A] p-8 rounded-xl border border-white/5 hover:border-[#1F4E79]/50 transition-all duration-300 overflow-hidden flex flex-col items-center justify-center gap-4 min-h-[200px] gsap-fade-up hover:-translate-y-1" href="#" style={{transitionDelay: `300ms`}}>
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1F4E79]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<iconify-icon className="text-4xl text-gray-500 group-hover:text-white group-hover:scale-110 transition-all duration-300 z-10" icon="solar:drop-linear"></iconify-icon>
<span className="text-base font-medium font-['Montserrat',sans-serif] z-10">Fluids & Filters</span>
</a>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 pb-32">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 gsap-fade-up">
<div>
<h2 className="text-3xl font-semibold tracking-tight font-['Montserrat',sans-serif] mb-2">Performance Parts</h2>
<p className="text-sm text-gray-400 font-light">Top-tier upgrades for track and street.</p>
</div>

<div className="flex items-center gap-6 border-b border-white/10 pb-1">
<button className="text-sm font-medium text-white pb-2 border-b-2 border-[#E10600]">Best Sellers</button>
<button className="text-sm font-light text-gray-400 hover:text-white pb-2 border-b-2 border-transparent transition-colors">New Arrivals</button>
<button className="text-sm font-light text-gray-400 hover:text-white pb-2 border-b-2 border-transparent transition-colors">On Sale</button>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group bg-[#1A1A1A] rounded-xl p-4 border border-white/5 hover:border-white/10 transition-colors gsap-fade-up flex flex-col">
<div className="relative aspect-square rounded-lg bg-[#0A0A0A] mb-4 overflow-hidden flex items-center justify-center">
<span className="absolute top-3 left-3 bg-[#1F4E79] text-white text-[10px] uppercase font-semibold px-2 py-1 rounded tracking-wider z-10">OES Part</span>

<div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1598155523122-3842334d6c1f?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"></div>

<div className="absolute bottom-3 left-3 right-3 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10">
<button className="w-full bg-[#E10600] text-white text-sm py-2.5 rounded-md font-medium hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:cart-plus-linear"></iconify-icon> Add to Cart
                        </button>
</div>
</div>
<div className="flex-1 flex flex-col">
<span className="text-xs text-gray-500 mb-1 uppercase tracking-wider font-medium">Brembo</span>
<h3 className="text-base font-medium font-['Montserrat',sans-serif] text-gray-200 group-hover:text-white transition-colors leading-tight mb-2">High Carbon Brake Rotor Front</h3>
<div className="mt-auto flex items-center justify-between">
<span className="text-lg font-semibold text-white">$145.00</span>
<div className="flex items-center text-[#E10600] text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="group bg-[#1A1A1A] rounded-xl p-4 border border-white/5 hover:border-white/10 transition-colors gsap-fade-up flex flex-col" style={{transitionDelay: `100ms`}}>
<div className="relative aspect-square rounded-lg bg-[#0A0A0A] mb-4 overflow-hidden flex items-center justify-center">
<div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1610996884635-7798da7dbb48?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0"></div>
<div className="absolute bottom-3 left-3 right-3 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10">
<button className="w-full bg-[#E10600] text-white text-sm py-2.5 rounded-md font-medium hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:cart-plus-linear"></iconify-icon> Add to Cart
                        </button>
</div>
</div>
<div className="flex-1 flex flex-col">
<span className="text-xs text-gray-500 mb-1 uppercase tracking-wider font-medium">Motul</span>
<h3 className="text-base font-medium font-['Montserrat',sans-serif] text-gray-200 group-hover:text-white transition-colors leading-tight mb-2">8100 X-cess 5W-40 Synthetic Engine Oil</h3>
<div className="mt-auto flex items-center justify-between">
<span className="text-lg font-semibold text-white">$42.99</span>
<div className="flex items-center text-[#E10600] text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-linear"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="group bg-[#1A1A1A] rounded-xl p-4 border border-white/5 hover:border-white/10 transition-colors gsap-fade-up flex flex-col" style={{transitionDelay: `200ms`}}>
<div className="relative aspect-square rounded-lg bg-[#0A0A0A] mb-4 overflow-hidden flex items-center justify-center">
<div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"></div>
<div className="absolute bottom-3 left-3 right-3 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10">
<button className="w-full bg-[#E10600] text-white text-sm py-2.5 rounded-md font-medium hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:cart-plus-linear"></iconify-icon> Add to Cart
                        </button>
</div>
</div>
<div className="flex-1 flex flex-col">
<span className="text-xs text-gray-500 mb-1 uppercase tracking-wider font-medium">Bilstein</span>
<h3 className="text-base font-medium font-['Montserrat',sans-serif] text-gray-200 group-hover:text-white transition-colors leading-tight mb-2">B6 Performance Shock Absorber</h3>
<div className="mt-auto flex items-center justify-between">
<span className="text-lg font-semibold text-white">$189.00</span>
<div className="flex items-center text-[#E10600] text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="group bg-[#1A1A1A] rounded-xl p-4 border border-white/5 hover:border-white/10 transition-colors gsap-fade-up flex flex-col" style={{transitionDelay: `300ms`}}>
<div className="relative aspect-square rounded-lg bg-[#0A0A0A] mb-4 overflow-hidden flex items-center justify-center">
<div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1600705351859-9f790c5c37fb?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0"></div>
<div className="absolute bottom-3 left-3 right-3 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10">
<button className="w-full bg-[#E10600] text-white text-sm py-2.5 rounded-md font-medium hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:cart-plus-linear"></iconify-icon> Add to Cart
                        </button>
</div>
</div>
<div className="flex-1 flex flex-col">
<span className="text-xs text-gray-500 mb-1 uppercase tracking-wider font-medium">Bosch</span>
<h3 className="text-base font-medium font-['Montserrat',sans-serif] text-gray-200 group-hover:text-white transition-colors leading-tight mb-2">Double Iridium Spark Plug Set</h3>
<div className="mt-auto flex items-center justify-between">
<span className="text-lg font-semibold text-white">$54.00</span>
<div className="flex items-center text-[#E10600] text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 pb-32">
<div className="grid md:grid-cols-2 gap-6 h-[400px]">
<a className="relative rounded-2xl overflow-hidden group gsap-fade-up block" href="#">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<span className="text-xs font-medium uppercase tracking-widest text-gray-300 mb-2 block">Collection</span>
<h3 className="text-3xl font-semibold font-['Montserrat',sans-serif] text-white mb-2">Track Ready</h3>
<p className="text-sm text-gray-400 font-light flex items-center gap-2 group-hover:text-white transition-colors">Shop High-Performance <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon></p>
</div>
</a>
<a className="relative rounded-2xl overflow-hidden group gsap-fade-up block" href="#" style={{transitionDelay: `100ms`}}>
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700 grayscale"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity mix-blend-multiply"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<span className="text-xs font-medium uppercase tracking-widest text-gray-300 mb-2 block">Essentials</span>
<h3 className="text-3xl font-semibold font-['Montserrat',sans-serif] text-white mb-2">OEM Maintenance</h3>
<p className="text-sm text-gray-400 font-light flex items-center gap-2 group-hover:text-white transition-colors">Keep it Factory <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon></p>
</div>
</a>
</div>
</section>

<section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden gsap-parallax-trigger">
<div className="absolute top-[-20%] left-0 w-full h-[140%] bg-[url('https://images.unsplash.com/photo-1611016186353-9af58c69a533?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center gsap-parallax-bg z-0 grayscale"></div>
<div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-[#E10600]/20 z-0 mix-blend-multiply"></div>
<div className="relative z-10 text-center max-w-3xl px-6">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight font-['Montserrat',sans-serif] text-white mb-6">Unleash True Potential</h2>
<p className="text-base text-gray-300 font-light mb-8 max-w-xl mx-auto leading-relaxed">
                Experience uncompromising quality with our curated selection of motorsport-grade components. Engineered to exceed factory specifications.
            </p>
<a className="inline-flex items-center gap-2 bg-white text-black px-8 py-3.5 rounded-md text-sm font-semibold hover:bg-gray-200 transition-colors" href="#">
                View Performance Catalog
            </a>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-32">
<div className="flex items-end justify-between mb-12 gsap-fade-up">
<div>
<h2 className="text-3xl font-semibold tracking-tight font-['Montserrat',sans-serif] mb-2">The Garage</h2>
<p className="text-sm text-gray-400 font-light">Technical guides, builds, and engineering insights.</p>
</div>
<a className="hidden sm:flex items-center gap-1 text-sm font-medium hover:text-[#E10600] transition-colors" href="#">
                Read Journal <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<a className="lg:col-span-2 group gsap-fade-up block" href="#">
<div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden mb-6">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700"></div>
</div>
<div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
<span className="text-[#E10600] font-medium uppercase tracking-wider">Tech Guide</span>
<span>•</span>
<span>10 Min Read</span>
</div>
<h3 className="text-2xl font-semibold font-['Montserrat',sans-serif] text-white mb-3 group-hover:text-gray-300 transition-colors">Understanding Carbon Ceramic vs. Steel Brake Systems</h3>
<p className="text-sm text-gray-400 font-light line-clamp-2">A deep dive into the thermal dynamics, wear characteristics, and practical applications for street and track use.</p>
</a>

<div className="flex flex-col gap-8">
<a className="group gsap-fade-up block" href="#" style={{transitionDelay: `100ms`}}>
<div className="relative h-48 rounded-xl overflow-hidden mb-4">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503375833446-24baea1539bb?q=80&w=600&auto=format&fit=crop')] bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700"></div>
</div>
<span className="text-[#1F4E79] text-xs font-medium uppercase tracking-wider mb-2 block">Builds</span>
<h3 className="text-base font-semibold font-['Montserrat',sans-serif] text-white group-hover:text-gray-300 transition-colors leading-snug">Project 911 GT3: Suspension Overhaul</h3>
</a>
<a className="group gsap-fade-up block" href="#" style={{transitionDelay: `200ms`}}>
<div className="relative h-48 rounded-xl overflow-hidden mb-4">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1632223214479-79a022d4f29d?q=80&w=600&auto=format&fit=crop')] bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700 grayscale"></div>
</div>
<span className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-2 block">News</span>
<h3 className="text-base font-semibold font-['Montserrat',sans-serif] text-white group-hover:text-gray-300 transition-colors leading-snug">New OES Partnerships Announced for Q3</h3>
</a>
</div>
</div>
</section>

<footer className="bg-black border-t border-white/5 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div>
<a className="font-['Montserrat',sans-serif] font-semibold text-2xl tracking-tighter text-white uppercase mb-6 block" href="#">
                        4STROKE
                    </a>
<p className="text-sm text-gray-500 font-light leading-relaxed mb-6">
                        Engineered precision. We source and supply only the highest tier OEM, OES, and aftermarket performance components.
                    </p>
<div className="flex gap-4">
<a className="text-gray-400 hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:global-linear"></iconify-icon></a>
<a className="text-gray-400 hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon></a>
</div>
</div>

<div>
<h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6 font-['Montserrat',sans-serif]">Categories</h4>
<ul className="space-y-3 text-sm text-gray-400 font-light">
<li><a className="hover:text-[#E10600] transition-colors" href="#">Brakes & Rotors</a></li>
<li><a className="hover:text-[#E10600] transition-colors" href="#">Suspension Systems</a></li>
<li><a className="hover:text-[#E10600] transition-colors" href="#">Engine Components</a></li>
<li><a className="hover:text-[#E10600] transition-colors" href="#">Exhaust & Airflow</a></li>
<li><a className="hover:text-[#E10600] transition-colors" href="#">Fluids & Maintenance</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6 font-['Montserrat',sans-serif]">Support</h4>
<ul className="space-y-3 text-sm text-gray-400 font-light">
<li><a className="hover:text-white transition-colors" href="#">Fitment Guarantee</a></li>
<li><a className="hover:text-white transition-colors" href="#">Shipping & Returns</a></li>
<li><a className="hover:text-white transition-colors" href="#">Track Order</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Wholesale</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6 font-['Montserrat',sans-serif]">Newsletter</h4>
<p className="text-xs text-gray-500 font-light mb-4">Subscribe for exclusive offers, technical guides, and new product releases.</p>
<form className="flex border border-white/10 rounded-md overflow-hidden focus-within:border-[#1F4E79] transition-colors">
<input className="w-full bg-[#1A1A1A] text-sm text-white px-4 py-2 focus:outline-none font-light" placeholder="Email address" type="email" />
<button className="bg-white text-black px-4 py-2 text-sm font-medium hover:bg-gray-200 transition-colors" type="submit">Join</button>
</form>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-gray-600 font-light">© 2023 4Stroke Motoren. All rights reserved.</p>
<div className="flex items-center gap-4 text-xs text-gray-600 font-light">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
