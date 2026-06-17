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



        lucide.createIcons();

        // Interactive Menu Logic
        const openBtn = document.getElementById('open-menu');
        const closeBtn = document.getElementById('close-menu');
        const menuOverlay = document.getElementById('menu-overlay');

        openBtn.addEventListener('click', () => {
            menuOverlay.classList.remove('translate-x-full');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });

        closeBtn.addEventListener('click', () => {
            menuOverlay.classList.add('translate-x-full');
            document.body.style.overflow = '';
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
      

<div className="fixed inset-0 bg-[#111] z-[100] flex flex-col justify-between p-6 md:p-12 transition-transform duration-700 ease-in-out translate-x-full" id="menu-overlay">
<div className="flex justify-between items-center text-[#f4f3f0]">
<div className="flex items-center gap-4">

<svg fill="currentColor" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 24V11.5L0 0H6.5L12 6.5L17.5 0H24L12 11.5V24Z"></path>
</svg>
<span className="text-sm tracking-[0.2em] font-medium uppercase hidden md:block">Yacht Élite</span>
</div>
<button className="group flex items-center gap-4 text-xs tracking-[0.2em] uppercase font-medium hover:text-white/70 transition-colors" id="close-menu">
                Close
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/50 transition-colors">
<i className="w-4 h-4" data-lucide="x" strokeWidth="1.5"></i>
</div>
</button>
</div>
<div className="flex flex-col gap-4 text-[#f4f3f0]">
<a className="font-['Bebas_Neue'] text-7xl md:text-9xl tracking-tight uppercase hover:text-white/50 transition-colors flex items-center gap-6 group" href="#">
<span className="text-sm font-['JetBrains_Mono'] tracking-widest text-white/30 group-hover:text-white/50 transition-colors">01</span> Yachts
            </a>
<a className="font-['Bebas_Neue'] text-7xl md:text-9xl tracking-tight uppercase hover:text-white/50 transition-colors flex items-center gap-6 group" href="#">
<span className="text-sm font-['JetBrains_Mono'] tracking-widest text-white/30 group-hover:text-white/50 transition-colors">02</span> Sell
            </a>
<a className="font-['Bebas_Neue'] text-7xl md:text-9xl tracking-tight uppercase hover:text-white/50 transition-colors flex items-center gap-6 group" href="#">
<span className="text-sm font-['JetBrains_Mono'] tracking-widest text-white/30 group-hover:text-white/50 transition-colors">03</span> Charter
            </a>
<a className="font-['Bebas_Neue'] text-7xl md:text-9xl tracking-tight uppercase hover:text-white/50 transition-colors flex items-center gap-6 group" href="#">
<span className="text-sm font-['JetBrains_Mono'] tracking-widest text-white/30 group-hover:text-white/50 transition-colors">04</span> Services
            </a>
</div>
<div className="flex justify-between items-end text-[#f4f3f0] border-t border-white/10 pt-8 mt-12">
<div className="text-xs font-['JetBrains_Mono'] tracking-widest text-white/50">HQ: MONACO<br/>PORT HERCULE</div>
<div className="flex gap-6 text-xs tracking-[0.2em] uppercase">
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
</div>
</div>
</div>

<header className="fixed top-0 left-0 w-full z-50 p-6 md:px-12 flex justify-between items-center mix-blend-difference text-[#f4f3f0]">
<div className="flex items-center gap-4">

<svg fill="currentColor" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 24V11.5L0 0H6.5L12 6.5L17.5 0H24L12 11.5V24Z"></path>
</svg>
<span className="text-sm tracking-[0.2em] font-medium uppercase hidden md:block mt-1">Yacht Élite</span>
</div>
<nav className="hidden lg:flex items-center gap-12 text-xs tracking-[0.2em] font-medium uppercase mt-1">
<a className="hover:opacity-70 transition-opacity" href="#">Yachts</a>
<a className="hover:opacity-70 transition-opacity" href="#">Sell</a>
<a className="hover:opacity-70 transition-opacity" href="#">Charter</a>
<a className="hover:opacity-70 transition-opacity" href="#">Services</a>
<a className="hover:opacity-70 transition-opacity" href="#">About</a>
</nav>
<button className="group flex items-center gap-4 text-xs tracking-[0.2em] uppercase font-medium mt-1" id="open-menu">
            Menu
            
<div className="w-10 h-10 rounded-full bg-[#f4f3f0] flex flex-wrap content-center justify-center gap-1 p-2.5 hover:scale-105 transition-transform">
<div className="w-1.5 h-1.5 rounded-full bg-[#111]"></div>
<div className="w-1.5 h-1.5 rounded-full bg-[#111]"></div>
<div className="w-1.5 h-1.5 rounded-full bg-[#111]"></div>
<div className="w-1.5 h-1.5 rounded-full bg-[#111]"></div>
</div>
</button>
</header>

<section className="relative min-h-screen pt-32 pb-0 flex flex-col justify-between">

<div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 -rotate-90 origin-left text-xs font-['JetBrains_Mono'] tracking-widest text-[#111]/60 hidden md:block">43.2807° N</div>
<div className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 rotate-90 origin-right text-xs font-['JetBrains_Mono'] tracking-widest text-[#111]/60 hidden md:block">5.3698° E</div>

<div className="w-full max-w-[1800px] mx-auto px-6 md:px-24 flex-grow grid grid-cols-1 lg:grid-cols-12 gap-8 relative">

<div className="col-span-1 lg:col-span-7 relative z-20 flex flex-col justify-center pt-20 lg:pt-0">

<div className="absolute top-0 lg:-top-12 left-0 lg:left-1/3 bg-[#e8e7e1] p-5 w-48 text-xs font-['Inter'] tracking-[0.1em] uppercase text-[#111]/80 leading-relaxed shadow-sm hidden md:block">
                    Curated yachts for discerning owners.
                    <div className="w-2 h-2 bg-[#111] mt-6"></div>
</div>
<h1 className="font-['Bebas_Neue'] text-8xl md:text-[10rem] lg:text-[13rem] leading-[0.85] tracking-tight text-[#111] uppercase relative z-20 mix-blend-multiply">
                    Beyond<br/>Horizons.
                </h1>
<div className="mt-8 md:mt-12 flex flex-col gap-8">
<p className="font-['JetBrains_Mono'] text-sm tracking-[0.2em] uppercase text-[#111]/80 leading-loose">
                        Exceptional yachts.<br/>Extraordinary lifestyles.
                    </p>
<a className="group inline-flex items-center gap-4 text-xs font-['Inter'] tracking-[0.2em] uppercase font-medium hover:opacity-70 transition-opacity w-fit mt-4" href="#">
<i className="w-4 h-4" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
                        Explore our fleet
                    </a>
</div>
</div>

<div className="col-span-1 lg:col-span-5 relative h-[50vh] lg:h-[80vh] mt-12 lg:mt-0 z-10">

<div className="absolute top-0 right-0 w-full lg:w-[120%] h-[90%] bg-[#e5e4df] -z-10"></div>

<div className="absolute -bottom-12 -right-12 lg:-right-32 w-64 lg:w-96 opacity-30 z-0 pointer-events-none hidden md:block">
<svg fill="none" viewbox="0 0 400 100" xmlns="http://www.w3.org/2000/svg">
<path d="M10,50 C50,20 300,20 380,50 C380,50 390,50 390,50 C380,80 300,80 10,50 Z" stroke="#111" strokeWidth="0.5"></path>
<path d="M50,30 L50,70 M100,25 L100,75 M150,22 L150,78 M200,20 L200,80 M250,22 L250,78 M300,25 L300,75 M350,35 L350,65" stroke="#111" strokeWidth="0.2"></path>
<circle cx="200" cy="50" r="10" stroke="#111" strokeWidth="0.5"></circle>
<circle cx="280" cy="50" r="6" stroke="#111" strokeWidth="0.5"></circle>
</svg>
</div>
<img alt="Luxury Superyacht" className="w-full h-full object-cover grayscale contrast-125 brightness-90 z-10 relative" src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>

<div className="absolute top-1/2 -translate-y-1/2 -right-6 lg:-right-32 bg-[#111] text-[#f4f3f0] p-8 lg:p-12 flex flex-col items-center gap-8 z-30 shadow-2xl">
<div className="font-['Playfair_Display'] text-3xl lg:text-5xl tracking-tight font-light flex items-baseline gap-2">
                        01 <span className="text-[#f4f3f0]/40 text-xl lg:text-2xl font-['Inter'] font-light tracking-widest">/ 03</span>
</div>
<div className="flex gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-[#f4f3f0]"></div>
<div className="w-1.5 h-1.5 rounded-full border border-[#f4f3f0]/40"></div>
<div className="w-1.5 h-1.5 rounded-full border border-[#f4f3f0]/40"></div>
</div>
</div>
</div>
</div>

<div className="relative z-40 bg-[#111] text-[#f4f3f0] w-full mt-12 lg:mt-0">
<div className="max-w-[1800px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-6 lg:grid-cols-7 border-t border-[#f4f3f0]/10 divide-y md:divide-y-0 md:divide-x divide-[#f4f3f0]/10">

<div className="col-span-1 md:col-span-2 lg:col-span-3 py-6 md:py-8 pr-6 flex justify-between items-center group cursor-pointer hover:bg-white/5 transition-colors">
<div>
<div className="text-[10px] font-['JetBrains_Mono'] tracking-[0.2em] text-[#f4f3f0]/50 mb-3">NEW CENTRAL AGENCY</div>
<div className="text-sm font-['Inter'] tracking-[0.1em] uppercase">Sanlorenzo 50Steel</div>
</div>
<i className="w-5 h-5 text-[#f4f3f0]/40 group-hover:text-[#f4f3f0] transition-colors" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>

<div className="col-span-1 py-6 md:py-8 px-6 flex flex-col justify-center items-center md:items-start hover:bg-white/5 transition-colors">
<div className="font-['Playfair_Display'] text-4xl tracking-tight font-light text-[#f4f3f0]">50</div>
<div className="text-[10px] font-['Inter'] tracking-[0.2em] text-[#f4f3f0]/50 uppercase mt-2 font-medium">Steel</div>
</div>
<div className="col-span-1 py-6 md:py-8 px-6 flex flex-col justify-center items-center md:items-start hover:bg-white/5 transition-colors">
<div className="text-xl font-['Inter'] tracking-tight text-[#f4f3f0] font-light">49.9 M</div>
<div className="text-[10px] font-['Inter'] tracking-[0.2em] text-[#f4f3f0]/50 uppercase mt-2 font-medium">Length</div>
</div>
<div className="col-span-1 py-6 md:py-8 px-6 flex flex-col justify-center items-center md:items-start hover:bg-white/5 transition-colors">
<div className="text-xl font-['Inter'] tracking-tight text-[#f4f3f0] font-light">9.25 M</div>
<div className="text-[10px] font-['Inter'] tracking-[0.2em] text-[#f4f3f0]/50 uppercase mt-2 font-medium">Beam</div>
</div>
<div className="col-span-1 py-6 md:py-8 px-6 flex flex-col justify-center items-center md:items-start hover:bg-white/5 transition-colors">
<div className="text-xl font-['Inter'] tracking-tight text-[#f4f3f0] font-light">2024</div>
<div className="text-[10px] font-['Inter'] tracking-[0.2em] text-[#f4f3f0]/50 uppercase mt-2 font-medium">Year</div>
</div>

<div className="col-span-1 md:col-span-6 lg:col-span-1 p-4 lg:p-6 bg-[#111]">
<a className="w-full h-full min-h-[100px] bg-[#f4f3f0] text-[#111] flex flex-col justify-between p-5 group hover:bg-white transition-colors relative overflow-hidden" href="#">
<span className="text-[10px] font-['Inter'] tracking-[0.2em] uppercase font-medium relative z-10">View Yacht</span>
<i className="w-5 h-5 self-end relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 border-t border-[#111]/10 relative">
<div className="flex justify-between items-end mb-16 max-w-[1800px] mx-auto">
<h2 className="font-['Bebas_Neue'] text-6xl md:text-8xl tracking-tight uppercase">Selected Fleet</h2>
<a className="hidden md:flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase border-b border-[#111] pb-1 hover:text-[#111]/60 transition-colors" href="#">View All <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i></a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-[1800px] mx-auto">

<a className="group block relative overflow-hidden" href="#">
<div className="relative h-[60vh] overflow-hidden bg-[#e5e4df]">
<img alt="Yacht" className="w-full h-full object-cover grayscale contrast-125 transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0" src="https://images.unsplash.com/photo-1605281317010-fe5ffe798166?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-[#111] text-[#f4f3f0] text-[10px] tracking-[0.2em] uppercase px-3 py-1 font-medium">For Sale</div>
</div>
<div className="mt-6 flex justify-between items-start border-b border-[#111]/10 pb-6">
<div>
<h3 className="font-['Playfair_Display'] text-3xl tracking-tight mb-2">Project X</h3>
<p className="text-xs font-['JetBrains_Mono'] text-[#111]/60 tracking-widest uppercase">Golden Yachts • 88M • 2022</p>
</div>
<div className="text-right">
<div className="text-sm font-medium tracking-tight mb-1">POA</div>
<i className="w-5 h-5 text-[#111]/40 group-hover:text-[#111] transition-colors ml-auto" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
</div>
</a>

<a className="group block relative overflow-hidden md:mt-24" href="#">
<div className="relative h-[60vh] overflow-hidden bg-[#e5e4df]">
<img alt="Yacht" className="w-full h-full object-cover grayscale contrast-125 transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0" src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-[#f4f3f0] text-[#111] text-[10px] tracking-[0.2em] uppercase px-3 py-1 font-medium">Charter</div>
</div>
<div className="mt-6 flex justify-between items-start border-b border-[#111]/10 pb-6">
<div>
<h3 className="font-['Playfair_Display'] text-3xl tracking-tight mb-2">Luminosity</h3>
<p className="text-xs font-['JetBrains_Mono'] text-[#111]/60 tracking-widest uppercase">Benetti • 107.6M • 2020</p>
</div>
<div className="text-right">
<div className="text-sm font-medium tracking-tight mb-1">From €3M / Wk</div>
<i className="w-5 h-5 text-[#111]/40 group-hover:text-[#111] transition-colors ml-auto" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
</div>
</a>
</div>
</section>

<section className="py-32 px-6 md:px-12 bg-[#111] text-[#f4f3f0]">
<div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
<div className="lg:col-span-5 order-2 lg:order-1">
<div className="text-[10px] font-['JetBrains_Mono'] tracking-[0.2em] uppercase text-[#f4f3f0]/50 mb-8 flex items-center gap-4">
<span className="w-8 h-px bg-[#f4f3f0]/30"></span> The Philosophy
                </div>
<h2 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight font-light mb-12">
                    Redefining the architecture of ocean travel through uncompromising engineering and absolute discretion.
                </h2>
<p className="text-base font-light text-[#f4f3f0]/70 leading-relaxed max-w-md mb-12">
                    We broker vessels that are testaments to human ambition. Each yacht in our portfolio represents the pinnacle of maritime design, selected for owners who demand nothing less than perfection.
                </p>
<a className="inline-flex items-center gap-4 text-xs tracking-[0.2em] uppercase font-medium hover:text-[#f4f3f0]/60 transition-colors border border-[#f4f3f0]/20 px-6 py-4 rounded-full" href="#">
                    About The Agency
                </a>
</div>
<div className="lg:col-span-7 order-1 lg:order-2 h-[50vh] lg:h-[80vh] w-full">
<img alt="Ocean Wake" className="w-full h-full object-cover grayscale contrast-150 brightness-75" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
</section>

<section className="py-32 border-b border-[#111]/10 overflow-hidden">
<div className="px-6 md:px-12 max-w-[1800px] mx-auto mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
<h2 className="font-['Bebas_Neue'] text-6xl md:text-8xl tracking-tight uppercase">Charting<br/>New Waters</h2>
<p className="font-['JetBrains_Mono'] text-xs tracking-widest uppercase text-[#111]/60 max-w-xs leading-loose">Bespoke itineraries crafted for ultimate exploration and privacy.</p>
</div>
<div className="flex gap-6 px-6 md:px-12 overflow-x-auto pb-12 snap-x snap-mandatory">

<div className="min-w-[85vw] md:min-w-[40vw] lg:min-w-[30vw] snap-center group cursor-pointer relative">
<div className="h-[60vh] overflow-hidden bg-[#111] relative">
<img className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#111]/80 to-transparent"></div>
<div className="absolute bottom-8 left-8 text-[#f4f3f0]">
<div className="font-['JetBrains_Mono'] text-[10px] tracking-[0.2em] opacity-60 mb-2">43.7384° N, 7.4246° E</div>
<h3 className="font-['Playfair_Display'] text-3xl tracking-tight">French Riviera</h3>
</div>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[40vw] lg:min-w-[30vw] snap-center group cursor-pointer relative">
<div className="h-[60vh] overflow-hidden bg-[#111] relative">
<img className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1548574505-12caf0050b5b?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#111]/80 to-transparent"></div>
<div className="absolute bottom-8 left-8 text-[#f4f3f0]">
<div className="font-['JetBrains_Mono'] text-[10px] tracking-[0.2em] opacity-60 mb-2">18.0179° N, 63.0433° W</div>
<h3 className="font-['Playfair_Display'] text-3xl tracking-tight">St. Barts &amp; Leewards</h3>
</div>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[40vw] lg:min-w-[30vw] snap-center group cursor-pointer relative">
<div className="h-[60vh] overflow-hidden bg-[#111] relative">
<img className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#111]/80 to-transparent"></div>
<div className="absolute bottom-8 left-8 text-[#f4f3f0]">
<div className="font-['JetBrains_Mono'] text-[10px] tracking-[0.2em] opacity-60 mb-2">64.1466° N, 21.9426° W</div>
<h3 className="font-['Playfair_Display'] text-3xl tracking-tight">Arctic Explorer</h3>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 max-w-[1800px] mx-auto">
<h2 className="font-['Bebas_Neue'] text-6xl md:text-8xl tracking-tight uppercase mb-16">Expertise</h2>
<div className="border-t border-[#111]/20">

<div className="group border-b border-[#111]/20 py-8 md:py-12 cursor-pointer hover:bg-black/5 transition-colors px-4 -mx-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
<div className="flex items-center gap-8 w-full md:w-1/3">
<span className="font-['JetBrains_Mono'] text-sm tracking-widest text-[#111]/40 group-hover:text-[#111] transition-colors">01</span>
<h3 className="font-['Playfair_Display'] text-4xl tracking-tight">Brokerage</h3>
</div>
<p className="font-light text-[#111]/70 max-w-md text-base w-full md:w-1/3">Navigating complex acquisitions and discreet off-market sales with global intelligence.</p>
<div className="w-full md:w-auto flex justify-end">
<i className="w-6 h-6 text-[#111]/40 group-hover:text-[#111] group-hover:rotate-90 transition-all duration-300" data-lucide="plus" strokeWidth="1"></i>
</div>
</div>

<div className="group border-b border-[#111]/20 py-8 md:py-12 cursor-pointer hover:bg-black/5 transition-colors px-4 -mx-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
<div className="flex items-center gap-8 w-full md:w-1/3">
<span className="font-['JetBrains_Mono'] text-sm tracking-widest text-[#111]/40 group-hover:text-[#111] transition-colors">02</span>
<h3 className="font-['Playfair_Display'] text-4xl tracking-tight">Management</h3>
</div>
<p className="font-light text-[#111]/70 max-w-md text-base w-full md:w-1/3">Comprehensive operational, financial, and technical administration of superyachts.</p>
<div className="w-full md:w-auto flex justify-end">
<i className="w-6 h-6 text-[#111]/40 group-hover:text-[#111] group-hover:rotate-90 transition-all duration-300" data-lucide="plus" strokeWidth="1"></i>
</div>
</div>

<div className="group border-b border-[#111]/20 py-8 md:py-12 cursor-pointer hover:bg-black/5 transition-colors px-4 -mx-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
<div className="flex items-center gap-8 w-full md:w-1/3">
<span className="font-['JetBrains_Mono'] text-sm tracking-widest text-[#111]/40 group-hover:text-[#111] transition-colors">03</span>
<h3 className="font-['Playfair_Display'] text-4xl tracking-tight">New Build</h3>
</div>
<p className="font-light text-[#111]/70 max-w-md text-base w-full md:w-1/3">Project management from conceptual naval architecture to final shipyard delivery.</p>
<div className="w-full md:w-auto flex justify-end">
<i className="w-6 h-6 text-[#111]/40 group-hover:text-[#111] group-hover:rotate-90 transition-all duration-300" data-lucide="plus" strokeWidth="1"></i>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#111] text-[#f4f3f0] overflow-hidden border-y border-[#f4f3f0]/10">
<div className="flex whitespace-nowrap gap-16 md:gap-32 items-center animate-[marquee_20s_linear_infinite]">
<span className="font-['Bebas_Neue'] text-5xl tracking-tight text-[#f4f3f0]/30 hover:text-[#f4f3f0] transition-colors cursor-default">LÜRSSEN</span>
<span className="w-2 h-2 rounded-full bg-[#f4f3f0]/30"></span>
<span className="font-['Bebas_Neue'] text-5xl tracking-tight text-[#f4f3f0]/30 hover:text-[#f4f3f0] transition-colors cursor-default">FEADSHIP</span>
<span className="w-2 h-2 rounded-full bg-[#f4f3f0]/30"></span>
<span className="font-['Bebas_Neue'] text-5xl tracking-tight text-[#f4f3f0]/30 hover:text-[#f4f3f0] transition-colors cursor-default">SANLORENZO</span>
<span className="w-2 h-2 rounded-full bg-[#f4f3f0]/30"></span>
<span className="font-['Bebas_Neue'] text-5xl tracking-tight text-[#f4f3f0]/30 hover:text-[#f4f3f0] transition-colors cursor-default">BENETTI</span>
<span className="w-2 h-2 rounded-full bg-[#f4f3f0]/30"></span>
<span className="font-['Bebas_Neue'] text-5xl tracking-tight text-[#f4f3f0]/30 hover:text-[#f4f3f0] transition-colors cursor-default">HEESEN</span>
<span className="w-2 h-2 rounded-full bg-[#f4f3f0]/30"></span>
<span className="font-['Bebas_Neue'] text-5xl tracking-tight text-[#f4f3f0]/30 hover:text-[#f4f3f0] transition-colors cursor-default">OCEANCO</span>
</div>
<style>
            @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        </style>
</section>

<section className="py-32 px-6 md:px-12 max-w-[1800px] mx-auto">
<div className="flex justify-between items-end mb-16">
<h2 className="font-['Bebas_Neue'] text-6xl md:text-8xl tracking-tight uppercase">Intelligence</h2>
<a className="hidden md:flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase border-b border-[#111] pb-1 hover:text-[#111]/60 transition-colors" href="#">Read Journal <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i></a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-[#111]/20 pt-12">

<article className="group cursor-pointer">
<div className="text-[10px] font-['JetBrains_Mono'] tracking-[0.2em] text-[#111]/50 mb-4 border-b border-[#111]/10 pb-4">OCT 12, 2024 / MARKET REPORT</div>
<h3 className="font-['Playfair_Display'] text-2xl tracking-tight mb-4 group-hover:text-[#111]/70 transition-colors">The Rise of Explorer Yachts in Remote Waters</h3>
<p className="font-light text-base text-[#111]/70 mb-6">Analyzing the shift in owner preferences towards go-anywhere capabilities and autonomous systems.</p>
<div className="w-8 h-8 rounded-full border border-[#111]/20 flex items-center justify-center group-hover:bg-[#111] group-hover:text-[#f4f3f0] transition-colors">
<i className="w-4 h-4" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
</article>

<article className="group cursor-pointer">
<div className="text-[10px] font-['JetBrains_Mono'] tracking-[0.2em] text-[#111]/50 mb-4 border-b border-[#111]/10 pb-4">SEP 28, 2024 / INTERVIEW</div>
<h3 className="font-['Playfair_Display'] text-2xl tracking-tight mb-4 group-hover:text-[#111]/70 transition-colors">Conversations with Master Naval Architect Espen Øino</h3>
<p className="font-light text-base text-[#111]/70 mb-6">Discussing the future of exterior styling and sustainable propulsion integration.</p>
<div className="w-8 h-8 rounded-full border border-[#111]/20 flex items-center justify-center group-hover:bg-[#111] group-hover:text-[#f4f3f0] transition-colors">
<i className="w-4 h-4" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
</article>

<article className="group cursor-pointer">
<div className="text-[10px] font-['JetBrains_Mono'] tracking-[0.2em] text-[#111]/50 mb-4 border-b border-[#111]/10 pb-4">SEP 15, 2024 / DESIGN</div>
<h3 className="font-['Playfair_Display'] text-2xl tracking-tight mb-4 group-hover:text-[#111]/70 transition-colors">Minimalism at Sea: The New Interior Standard</h3>
<p className="font-light text-base text-[#111]/70 mb-6">How tactile materials and negative space are replacing traditional opulence.</p>
<div className="w-8 h-8 rounded-full border border-[#111]/20 flex items-center justify-center group-hover:bg-[#111] group-hover:text-[#f4f3f0] transition-colors">
<i className="w-4 h-4" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
</article>
</div>
</section>

<section className="py-40 px-6 bg-[#e8e7e1] flex items-center justify-center text-center">
<div className="max-w-4xl mx-auto">
<svg className="w-12 h-12 mx-auto mb-8 text-[#111]/20" fill="currentColor" viewbox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"></path></svg>
<h2 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-7xl font-light tracking-tight leading-tight mb-8">
                "A yacht is not merely an asset; it is a moving sanctuary, a testament to freedom in its purest form."
            </h2>
<div className="text-xs font-['JetBrains_Mono'] tracking-[0.2em] uppercase text-[#111]/60">Anonymous Owner, 100M+ Project</div>
</div>
</section>

<footer className="bg-[#111] text-[#f4f3f0] pt-32 pb-12 px-6 md:px-12 rounded-t-[2rem] md:rounded-t-[4rem] -mt-12 relative z-10">
<div className="max-w-[1800px] mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 border-b border-white/10 pb-24">

<div>
<h2 className="font-['Bebas_Neue'] text-[6rem] md:text-[10rem] leading-[0.8] tracking-tight uppercase hover:text-white/80 transition-colors cursor-pointer w-fit group">
                        Get In<br/>Touch <i className="inline w-12 h-12 md:w-24 md:h-24 opacity-0 group-hover:opacity-100 group-hover:translate-x-4 group-hover:-translate-y-4 transition-all duration-500" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</h2>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 gap-12 pt-4">
<div className="flex flex-col gap-6">
<div className="text-[10px] font-['JetBrains_Mono'] tracking-[0.2em] text-white/40 mb-2">Offices</div>
<a className="text-sm font-light hover:text-white/60 transition-colors" href="#">Monaco</a>
<a className="text-sm font-light hover:text-white/60 transition-colors" href="#">Miami</a>
<a className="text-sm font-light hover:text-white/60 transition-colors" href="#">Dubai</a>
<a className="text-sm font-light hover:text-white/60 transition-colors" href="#">London</a>
</div>
<div className="flex flex-col gap-6">
<div className="text-[10px] font-['JetBrains_Mono'] tracking-[0.2em] text-white/40 mb-2">Social</div>
<a className="text-sm font-light hover:text-white/60 transition-colors" href="#">Instagram</a>
<a className="text-sm font-light hover:text-white/60 transition-colors" href="#">LinkedIn</a>
<a className="text-sm font-light hover:text-white/60 transition-colors" href="#">Twitter (X)</a>
</div>
<div className="flex flex-col gap-6 col-span-2 md:col-span-1 mt-8 md:mt-0">
<div className="text-[10px] font-['JetBrains_Mono'] tracking-[0.2em] text-white/40 mb-2">Newsletter</div>
<p className="text-sm font-light text-white/70">Receive curated market insights.</p>
<form className="flex border-b border-white/30 pb-2 mt-2 group">
<input className="bg-transparent border-none outline-none text-sm w-full font-light placeholder:text-white/30 text-white" placeholder="Email Address" type="email"/>
<button type="button"><i className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" data-lucide="arrow-right" strokeWidth="1.5"></i></button>
</form>
</div>
</div>
</div>

<div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-['JetBrains_Mono'] tracking-[0.2em] text-white/40 uppercase">
<div className="flex items-center gap-2">
<svg fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M12 24V11.5L0 0H6.5L12 6.5L17.5 0H24L12 11.5V24Z"></path>
</svg>
                    © 2024 Yacht Élite
                </div>
<div className="flex gap-8">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Cookies</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
