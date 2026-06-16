import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide Icons
        lucide.createIcons();

        // Mobile Menu Toggle
        const openBtn = document.getElementById('open-menu');
        const closeBtn = document.getElementById('close-menu');
        const menu = document.getElementById('mobile-menu');

        openBtn.addEventListener('click', () => {
            menu.classList.remove('translate-x-full');
        });

        closeBtn.addEventListener('click', () => {
            menu.classList.add('translate-x-full');
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 bg-[#ebdcd0] z-50 flex flex-col p-8 transition-transform duration-500 translate-x-full lg:hidden" id="mobile-menu">
<div className="flex justify-between items-center mb-12 border-b border-[#2c2826]/20 pb-4">
<svg fill="none" height="40" viewbox="0 0 40 40" width="40" xmlns="http://www.w3.org/2000/svg">
<path d="M10 10H20C25.5228 10 30 14.4772 30 20C30 25.5228 25.5228 30 20 30H10V10Z" fill="#2c2826"></path>
<circle cx="15" cy="15" fill="#ebdcd0" r="3"></circle>
</svg>
<button className="text-[#2c2826]" id="close-menu"><i className="w-8 h-8" data-lucide="x" strokeWidth="1.5"></i></button>
</div>
<nav className="flex flex-col gap-6 text-2xl font-display uppercase tracking-tight">
<a className="hover:text-[#b86847]" href="#">Shop <span className="text-[#bc4f39]">●</span></a>
<a className="hover:text-[#b86847]" href="#">Collections</a>
<a className="hover:text-[#b86847]" href="#">About</a>
<a className="hover:text-[#b86847]" href="#">Journal</a>
<a className="hover:text-[#b86847]" href="#">Gifting</a>
</nav>
</div>

<div className="flex flex-col lg:flex-row min-h-screen border-b border-[#2c2826]/20 relative">

<aside className="hidden lg:flex w-[18%] bg-[#b86847] flex-col justify-between p-8 border-r border-[#2c2826]/20 relative z-10">
<div>

<svg className="mb-8" fill="none" height="48" viewbox="0 0 40 40" width="48" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0H16C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32H0V0Z" fill="#2c2826"></path>
<circle cx="12" cy="12" fill="#b86847" r="4"></circle>
<path d="M0 38H12V32H0V38Z" fill="#2c2826"></path>
</svg>
<div className="text-xs uppercase tracking-widest leading-relaxed text-[#2c2826] font-medium opacity-80">
                    Premium<br/>Baby<br/>Accessories
                </div>
</div>
<div className="flex flex-col gap-32">
<div className="relative">
<div className="text-[#2c2826] text-sm font-medium">01</div>
<div className="w-4 h-[1px] bg-[#2c2826]/40 mt-2"></div>
</div>

<div className="relative w-24 h-24 self-center animate-[spin_20s_linear_infinite]">
<svg viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<path d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" id="circlePath"></path>
<text className="text-[10px] uppercase tracking-widest font-medium" fill="#2c2826">
<textpath href="#circlePath">
                                DESIGNED FOR MODERN FAMILIES •
                            </textpath>
</text>
</svg>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-2 h-2 rounded-full bg-[#2c2826]"></div>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col w-full lg:w-[82%] relative z-0">

<header className="flex justify-between items-center p-6 lg:px-12 lg:py-8 border-b border-[#2c2826]/20 bg-[#ebdcd0] relative z-20">
<button className="lg:hidden text-[#2c2826]" id="open-menu"><i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i></button>
<nav className="hidden lg:flex gap-12 text-[11px] uppercase tracking-[0.15em] font-medium text-[#2c2826]/80">
<a className="hover:text-[#2c2826] transition-colors relative" href="#">Shop <span className="text-[#bc4f39] absolute -right-3 top-0">●</span></a>
<a className="hover:text-[#2c2826] transition-colors" href="#">Collections</a>
<a className="hover:text-[#2c2826] transition-colors" href="#">About</a>
<a className="hover:text-[#2c2826] transition-colors" href="#">Journal</a>
<a className="hover:text-[#2c2826] transition-colors" href="#">Gifting</a>
</nav>
<nav className="hidden lg:flex gap-12 text-[11px] uppercase tracking-[0.15em] font-medium text-[#2c2826]/80 items-center">
<a className="hover:text-[#2c2826] transition-colors flex items-center gap-2" href="#">Search <i className="w-3.5 h-3.5" data-lucide="search" strokeWidth="1.5"></i></a>
<a className="hover:text-[#2c2826] transition-colors" href="#">Account</a>
<a className="hover:text-[#2c2826] transition-colors relative" href="#">Cart (0) <span className="text-[#bc4f39] absolute -right-3 top-0">●</span></a>
</nav>
</header>

<div className="flex-1 flex flex-col lg:flex-row relative">

<div className="w-full lg:w-[55%] p-8 lg:p-16 xl:p-24 flex flex-col justify-center relative bg-[#ebdcd0]">

<div className="hidden lg:flex flex-col items-center absolute top-12 right-12 text-[10px] uppercase tracking-widest text-[#2c2826]/60 text-right leading-relaxed z-10">
<span>CURATED PIECES.</span>
<span>TIMELESS QUALITY.</span>
<span>MODERN LIFE.</span>
<div className="w-[1px] h-32 bg-[#2c2826]/30 mt-4"></div>
<div className="w-1 h-1 rounded-full bg-[#2c2826] mt-1"></div>
</div>
<h1 className="font-display text-hero uppercase text-[#2c2826] mb-12">
                        Essentials<br/>
                        For Their<br/>
<span className="text-[#b86847]">First World.</span>
</h1>
<p className="text-[11px] uppercase tracking-widest text-[#2c2826]/70 leading-relaxed max-w-[280px] mb-16 font-medium">
                        Thoughtfully designed accessories<br/>
                        for baby's comfort, care and<br/>
                        every beautiful moment in between.
                    </p>
<button className="bg-[#b86847] hover:bg-[#a65d3f] text-[#2c2826] uppercase tracking-[0.15em] text-[11px] font-medium py-5 px-8 flex items-center justify-between w-full max-w-[320px] transition-colors group">
                        Explore Collection
                        <i className="w-4 h-4 transform group-hover:rotate-90 transition-transform duration-300" data-lucide="plus" strokeWidth="1.5"></i>
</button>
</div>

<div className="w-full lg:w-[45%] min-h-[50vh] lg:min-h-0 relative bg-[#e2d5c7] overflow-hidden">
<img alt="Baby accessories on concrete plinth" className="absolute inset-0 w-full h-full object-cover object-center scale-105 hover:scale-100 transition-transform duration-1000" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute inset-0 bg-gradient-to-l from-black/10 to-transparent"></div>

<div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 vertical-text rotate-180 text-[10px] uppercase tracking-[0.2em] text-[#2c2826]/70 font-medium">
                        Baby Accessories<br/>Made to Last.
                    </div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-[#2c2826]/20 bg-[#b86847]">

<div className="p-8 border-b md:border-b-0 md:border-r border-[#2c2826]/20 flex flex-col justify-between min-h-[200px]">
<div className="text-[#2c2826] text-xl font-display mb-8">01</div>
<div className="flex items-end justify-between">
<div>
<h3 className="text-[11px] uppercase tracking-widest text-[#2c2826] font-medium mb-2">Safe By Design</h3>
<p className="text-[10px] uppercase tracking-wider text-[#2c2826]/70 leading-relaxed">Non-toxic, baby-safe<br/>materials only.</p>
</div>

<div className="w-8 h-10 flex flex-col justify-between items-center opacity-80">
<div className="w-4 h-4 rounded-full bg-[#2c2826]"></div>
<div className="w-6 h-4 rounded-t-full bg-[#2c2826]"></div>
</div>
</div>
</div>

<div className="p-8 border-b md:border-b-0 lg:border-r border-[#2c2826]/20 flex flex-col justify-between min-h-[200px] bg-[#b86847]">
<div className="text-[#2c2826] text-xl font-display mb-8">02</div>
<div className="flex items-end justify-between">
<div>
<h3 className="text-[11px] uppercase tracking-widest text-[#2c2826] font-medium mb-2">Beautiful &amp; Functional</h3>
<p className="text-[10px] uppercase tracking-wider text-[#2c2826]/70 leading-relaxed">Minimal design meets<br/>everyday function.</p>
</div>

<div className="w-8 h-8 opacity-80 flex flex-col justify-end">
<div className="w-8 h-4 rounded-b-full bg-[#2c2826]"></div>
<div className="w-8 h-[2px] bg-[#2c2826] mt-1"></div>
</div>
</div>
</div>

<div className="p-8 border-b lg:border-b-0 lg:border-r border-[#2c2826]/20 flex flex-col justify-between min-h-[200px] bg-[#b86847]">
<div className="text-[#2c2826] text-xl font-display mb-8">03</div>
<div className="flex items-end justify-between">
<div>
<h3 className="text-[11px] uppercase tracking-widest text-[#2c2826] font-medium mb-2">Made To Last</h3>
<p className="text-[10px] uppercase tracking-wider text-[#2c2826]/70 leading-relaxed">Quality pieces for today,<br/>tomorrow &amp; beyond.</p>
</div>

<div className="w-8 h-8 grid grid-cols-2 gap-1 opacity-80 rotate-45">
<div className="bg-[#2c2826] rounded-tl-full"></div>
<div className="bg-[#2c2826] rounded-tr-full"></div>
<div className="bg-[#2c2826] rounded-bl-full"></div>
<div className="bg-[#2c2826] rounded-br-full"></div>
</div>
</div>
</div>

<div className="p-8 bg-[#2c2826] text-[#ebdcd0] flex flex-col justify-between min-h-[200px]">
<div className="flex items-start justify-between mb-8">
<div className="w-full h-full relative overflow-hidden h-24 rounded-sm">
<img alt="Detail shot" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity" src="https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div>
<h3 className="text-[11px] uppercase tracking-widest font-medium mb-2 text-white">Join Our World</h3>
<p className="text-[10px] tracking-wider text-white/60 leading-relaxed mb-4">Get 10% off your first order<br/>and be the first to know<br/>about new arrivals.</p>
<button className="text-white hover:text-[#b86847] transition-colors"><i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i></button>
</div>
</div>
</div>
</main>
</div>

<div className="border-b border-[#2c2826]/20 py-4 bg-[#ebdcd0] overflow-hidden flex items-center">
<div className="ticker-wrap">
<div className="ticker text-sm uppercase tracking-[0.3em] font-medium text-[#2c2826]/70">
<span>CONSCIOUSLY CRAFTED • NON-TOXIC MATERIALS • DESIGNED FOR MODERN LIVING • WORLDWIDE SHIPPING • SECURE CHECKOUT • </span>
<span>CONSCIOUSLY CRAFTED • NON-TOXIC MATERIALS • DESIGNED FOR MODERN LIVING • WORLDWIDE SHIPPING • SECURE CHECKOUT • </span>
</div>
</div>
</div>

<section className="py-24 lg:py-32 px-6 lg:px-12 bg-[#ebdcd0]">
<div className="max-w-[1600px] mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
<h2 className="font-display text-5xl md:text-7xl uppercase tracking-tighter text-[#2c2826] leading-none">Curated<br/>Collections</h2>
<a className="text-[11px] uppercase tracking-widest font-medium border-b border-[#2c2826] pb-1 hover:text-[#b86847] hover:border-[#b86847] transition-colors" href="#">Shop All Categories</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12">

<a className="group block relative cursor-pointer" href="#">
<div className="aspect-[3/4] overflow-hidden bg-[#e2d5c7] mb-6 relative">
<img alt="Feeding" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
</div>
<h3 className="text-2xl font-display uppercase tracking-tight mb-2">Feeding</h3>
<p className="text-[11px] uppercase tracking-widest text-[#2c2826]/60">Silicone bibs, bowls &amp; cutlery</p>
</a>

<a className="group block relative cursor-pointer md:-translate-y-12" href="#">
<div className="aspect-[3/4] overflow-hidden bg-[#e2d5c7] mb-6 relative">
<img alt="Play" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
</div>
<h3 className="text-2xl font-display uppercase tracking-tight mb-2">Play</h3>
<p className="text-[11px] uppercase tracking-widest text-[#2c2826]/60">Wooden toys &amp; teethers</p>
</a>

<a className="group block relative cursor-pointer" href="#">
<div className="aspect-[3/4] overflow-hidden bg-[#e2d5c7] mb-6 relative">
<img alt="Sleep" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1522771930-78848d9293e8?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
</div>
<h3 className="text-2xl font-display uppercase tracking-tight mb-2">Comfort</h3>
<p className="text-[11px] uppercase tracking-widest text-[#2c2826]/60">Organic cotton muslins &amp; pacifiers</p>
</a>
</div>
</div>
</section>

<section className="border-t border-b border-[#2c2826]/20 flex flex-col lg:flex-row bg-[#ebdcd0]">
<div className="w-full lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-[#2c2826]/20">
<div className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#b86847] mb-8">Our Philosophy</div>
<h2 className="font-display text-4xl lg:text-6xl uppercase tracking-tighter mb-8 leading-[1.1]">Less, but<br/>better.</h2>
<p className="text-base text-[#2c2826]/80 leading-relaxed max-w-md mb-12">
                We believe in surrounding children with objects that are not only safe and functional, but inherently beautiful. By choosing durable materials and timeless forms, we create pieces that withstand the test of time and trends.
            </p>
<a className="inline-flex items-center gap-4 text-[11px] uppercase tracking-widest font-medium hover:text-[#b86847] transition-colors group w-max" href="#">
                Read Our Story 
                <span className="w-8 h-[1px] bg-[#2c2826] group-hover:w-12 group-hover:bg-[#b86847] transition-all duration-300"></span>
</a>
</div>
<div className="w-full lg:w-1/2 min-h-[60vh] relative">
<img alt="Detailed texture" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
</section>

<section className="py-24 bg-[#ebdcd0] border-b border-[#2c2826]/20 overflow-hidden">
<div className="px-6 lg:px-12 mb-16 flex justify-between items-end">
<h2 className="font-display text-5xl uppercase tracking-tighter">New Arrivals</h2>
<div className="hidden md:flex gap-4">
<button className="w-12 h-12 border border-[#2c2826]/20 flex items-center justify-center hover:bg-[#b86847] hover:text-[#ebdcd0] transition-colors"><i data-lucide="chevron-left" strokeWidth="1.5"></i></button>
<button className="w-12 h-12 border border-[#2c2826]/20 flex items-center justify-center hover:bg-[#b86847] hover:text-[#ebdcd0] transition-colors"><i data-lucide="chevron-right" strokeWidth="1.5"></i></button>
</div>
</div>
<div className="flex overflow-x-auto hide-scrollbar px-6 lg:px-12 gap-8 pb-8 snap-x">

<div className="min-w-[80vw] md:min-w-[40vw] lg:min-w-[25vw] snap-start group cursor-pointer">
<div className="aspect-square bg-[#e2d5c7] mb-6 relative overflow-hidden">
<img alt="Product" className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-[#b86847] text-[#ebdcd0] text-[9px] uppercase tracking-widest px-3 py-1">New</div>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="text-base uppercase font-display tracking-tight mb-1">Stacking Tower</h4>
<p className="text-[11px] uppercase tracking-widest text-[#2c2826]/60">Terracotta</p>
</div>
<span className="text-sm font-medium">$34.00</span>
</div>
</div>

<div className="min-w-[80vw] md:min-w-[40vw] lg:min-w-[25vw] snap-start group cursor-pointer">
<div className="aspect-square bg-[#e2d5c7] mb-6 relative overflow-hidden">
<img alt="Product" className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1590736969955-71cc94801759?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="text-base uppercase font-display tracking-tight mb-1">Organic Muslin</h4>
<p className="text-[11px] uppercase tracking-widest text-[#2c2826]/60">Oatmeal</p>
</div>
<span className="text-sm font-medium">$22.00</span>
</div>
</div>

<div className="min-w-[80vw] md:min-w-[40vw] lg:min-w-[25vw] snap-start group cursor-pointer">
<div className="aspect-square bg-[#e2d5c7] mb-6 relative overflow-hidden">
<img alt="Product" className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1540479859555-17af45c78602?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="text-base uppercase font-display tracking-tight mb-1">Silicone Bib</h4>
<p className="text-[11px] uppercase tracking-widest text-[#2c2826]/60">Sage</p>
</div>
<span className="text-sm font-medium">$18.00</span>
</div>
</div>

<div className="min-w-[80vw] md:min-w-[40vw] lg:min-w-[25vw] snap-start group cursor-pointer">
<div className="aspect-square bg-[#e2d5c7] mb-6 relative overflow-hidden">
<img alt="Product" className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="text-base uppercase font-display tracking-tight mb-1">Pacifier Clip</h4>
<p className="text-[11px] uppercase tracking-widest text-[#2c2826]/60">Wood &amp; Leather</p>
</div>
<span className="text-sm font-medium">$15.00</span>
</div>
</div>
</div>
</section>

<section className="relative py-32 lg:py-48 flex items-center justify-center bg-[#b86847] text-[#ebdcd0] overflow-hidden text-center px-6">
<div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="relative z-10 max-w-4xl">
<svg className="mx-auto mb-12 opacity-80" fill="none" height="48" viewbox="0 0 40 40" width="48" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0H16C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32H0V0Z" fill="#ebdcd0"></path>
</svg>
<h2 className="font-display text-5xl md:text-7xl lg:text-8xl uppercase tracking-tighter leading-[0.9] mb-8">
                Designed For<br/>Modern Families.
            </h2>
<p className="text-base md:text-lg text-[#ebdcd0]/80 max-w-xl mx-auto font-medium">
                Creating an environment of calm and aesthetic pleasure for both baby and parent.
            </p>
</div>
</section>

<section className="py-24 lg:py-32 px-6 lg:px-12 bg-[#ebdcd0] border-b border-[#2c2826]/20">
<div className="max-w-[1600px] mx-auto">
<div className="flex justify-between items-end mb-16">
<h2 className="font-display text-4xl lg:text-5xl uppercase tracking-tighter text-[#2c2826]">The Journal</h2>
<a className="hidden md:block text-[11px] uppercase tracking-widest font-medium hover:text-[#b86847] transition-colors" href="#">Read All</a>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

<article className="group cursor-pointer">
<div className="overflow-hidden mb-8 aspect-[16/9]">
<img alt="Journal" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1522771930-78848d9293e8?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex gap-8">
<div className="text-[#2c2826]/40 font-display text-2xl uppercase w-16">01</div>
<div>
<div className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#b86847] mb-3">Guide</div>
<h3 className="text-2xl font-display uppercase tracking-tight mb-4 group-hover:text-[#b86847] transition-colors">Building a Minimal Nursery</h3>
<p className="text-sm text-[#2c2826]/70 leading-relaxed max-w-md">How to create a calming, clutter-free space that promotes rest and creativity for your little one, focusing on essential pieces.</p>
</div>
</div>
</article>

<article className="group cursor-pointer">
<div className="overflow-hidden mb-8 aspect-[16/9]">
<img alt="Journal" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex gap-8">
<div className="text-[#2c2826]/40 font-display text-2xl uppercase w-16">02</div>
<div>
<div className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#b86847] mb-3">Materials</div>
<h3 className="text-2xl font-display uppercase tracking-tight mb-4 group-hover:text-[#b86847] transition-colors">Why Silicone?</h3>
<p className="text-sm text-[#2c2826]/70 leading-relaxed max-w-md">Exploring the benefits of food-grade silicone for feeding accessories: durability, safety, and ease of cleaning for modern parents.</p>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="py-24 bg-[#ebdcd0]">
<div className="text-center mb-16">
<h2 className="font-display text-3xl uppercase tracking-tighter mb-4">@PremiumBaby</h2>
<p className="text-[11px] uppercase tracking-widest text-[#2c2826]/60">Follow our journey</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 w-full">
<a className="aspect-square relative group overflow-hidden bg-[#e2d5c7]" href="#">
<img className="w-full h-full object-cover mix-blend-multiply group-hover:scale-110 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white"><i data-lucide="instagram" strokeWidth="1.5"></i></div>
</a>
<a className="aspect-square relative group overflow-hidden bg-[#e2d5c7]" href="#">
<img className="w-full h-full object-cover mix-blend-multiply group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1590736969955-71cc94801759?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white"><i data-lucide="instagram" strokeWidth="1.5"></i></div>
</a>
<a className="aspect-square relative group overflow-hidden bg-[#e2d5c7]" href="#">
<img className="w-full h-full object-cover mix-blend-multiply group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1522771930-78848d9293e8?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white"><i data-lucide="instagram" strokeWidth="1.5"></i></div>
</a>
<a className="aspect-square relative group overflow-hidden bg-[#e2d5c7]" href="#">
<img className="w-full h-full object-cover mix-blend-multiply group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1540479859555-17af45c78602?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white"><i data-lucide="instagram" strokeWidth="1.5"></i></div>
</a>
</div>
</section>

<footer className="bg-[#2c2826] text-[#ebdcd0] pt-24 pb-12 px-6 lg:px-12 border-t border-[#ebdcd0]/10">
<div className="max-w-[1600px] mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">

<div className="lg:col-span-1">
<svg className="mb-8" fill="none" height="40" viewbox="0 0 40 40" width="40" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0H16C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32H0V0Z" fill="#ebdcd0"></path>
<circle cx="12" cy="12" fill="#b86847" r="4"></circle>
<path d="M0 38H12V32H0V38Z" fill="#ebdcd0"></path>
</svg>
<p className="text-[11px] uppercase tracking-widest text-[#ebdcd0]/60 leading-relaxed mb-8">
                        Premium baby accessories<br/>designed for modern life.
                    </p>
</div>

<div>
<h4 className="text-[11px] uppercase tracking-widest font-medium mb-6 text-white">Shop</h4>
<ul className="flex flex-col gap-4 text-sm text-[#ebdcd0]/70">
<li><a className="hover:text-white transition-colors" href="#">All Products</a></li>
<li><a className="hover:text-white transition-colors" href="#">Feeding</a></li>
<li><a className="hover:text-white transition-colors" href="#">Play</a></li>
<li><a className="hover:text-white transition-colors" href="#">Comfort</a></li>
<li><a className="hover:text-white transition-colors" href="#">Bundles</a></li>
</ul>
</div>

<div>
<h4 className="text-[11px] uppercase tracking-widest font-medium mb-6 text-white">Information</h4>
<ul className="flex flex-col gap-4 text-sm text-[#ebdcd0]/70">
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Materials</a></li>
<li><a className="hover:text-white transition-colors" href="#">Journal</a></li>
<li><a className="hover:text-white transition-colors" href="#">FAQ</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>

<div>
<h4 className="text-[11px] uppercase tracking-widest font-medium mb-6 text-white">Newsletter</h4>
<p className="text-sm text-[#ebdcd0]/70 mb-6">Subscribe to receive updates, access to exclusive deals, and more.</p>
<form className="flex border-b border-[#ebdcd0]/30 pb-2 focus-within:border-white transition-colors">
<input className="bg-transparent w-full outline-none text-sm placeholder:text-[#ebdcd0]/40 text-white" placeholder="Enter your email address" type="email"/>
<button className="text-[#ebdcd0]/60 hover:text-white transition-colors" type="submit"><i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i></button>
</form>
</div>
</div>

<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#ebdcd0]/10 text-[10px] uppercase tracking-widest text-[#ebdcd0]/40 gap-4">
<p>© 2024 Premium Baby Accessories.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
