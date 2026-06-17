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



        const mobileMenu = document.getElementById('mobile-menu');
        const openMenuBtn = document.getElementById('open-menu');
        const closeMenuBtn = document.getElementById('close-menu');

        openMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('-translate-y-full');
            document.body.style.overflow = 'hidden'; 
        });

        closeMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('-translate-y-full');
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
      

<div className="fixed inset-0 bg-[#111111] z-50 transform -translate-y-full transition-transform duration-500 ease-in-out flex flex-col" id="mobile-menu">
<div className="h-20 border-b border-white/10 flex items-center justify-between px-6 lg:px-8">
<div className="text-white">
<div className="text-xl font-medium tracking-tighter uppercase leading-none">WILD ORIGINS</div>
</div>
<button className="text-white p-2 hover:bg-white/5 rounded-full transition-colors flex items-center justify-center" id="close-menu">
<iconify-icon className="text-2xl" icon="solar:close-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
<div className="flex-1 flex flex-col justify-center px-8 lg:px-24 gap-8">
<a className="text-white text-5xl lg:text-7xl font-medium tracking-tighter uppercase hover:text-[#B55D34] transition-colors w-fit" href="#">Destinations</a>
<a className="text-white text-5xl lg:text-7xl font-medium tracking-tighter uppercase hover:text-[#B55D34] transition-colors w-fit" href="#">Experiences</a>
<a className="text-white text-5xl lg:text-7xl font-medium tracking-tighter uppercase hover:text-[#B55D34] transition-colors w-fit" href="#">Journeys</a>
<a className="text-white text-5xl lg:text-7xl font-medium tracking-tighter uppercase hover:text-[#B55D34] transition-colors w-fit" href="#">About Us</a>
</div>
</div>

<div className="min-h-screen flex flex-col relative border-b border-[#111111]/15">

<header className="grid grid-cols-12 h-20 border-b border-[#111111]/15 relative z-40 bg-[#E8E3D7]">
<div className="col-span-8 lg:col-span-3 flex items-center px-6 lg:px-8 border-r border-[#111111]/15">
<a className="block group" href="#">
<div className="text-xl font-medium tracking-tighter uppercase leading-none group-hover:opacity-70 transition-opacity">WILD ORIGINS</div>
<div className="text-[0.65rem] tracking-[0.2em] uppercase mt-1.5 text-[#111111]/60">Safari Travels</div>
</a>
</div>
<div className="col-span-4 lg:hidden flex items-center justify-end px-6 border-l border-[#111111]/15">
<button className="flex items-center gap-2 text-xs tracking-widest uppercase font-normal" id="open-menu">
                    Menu <iconify-icon className="text-base" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
<nav className="hidden lg:flex col-span-5 xl:col-span-6 items-center justify-center gap-10 xl:gap-16 text-xs uppercase tracking-[0.15em] font-normal border-r border-[#111111]/15">
<a className="hover:text-[#B55D34] transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-[#B55D34] hover:after:w-full after:transition-all" href="#">Destinations</a>
<a className="hover:text-[#B55D34] transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-[#B55D34] hover:after:w-full after:transition-all" href="#">Experiences</a>
<a className="hover:text-[#B55D34] transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-[#B55D34] hover:after:w-full after:transition-all" href="#">Journeys</a>
<a className="hover:text-[#B55D34] transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-[#B55D34] hover:after:w-full after:transition-all" href="#">About Us</a>
</nav>
<div className="hidden lg:flex col-span-4 xl:col-span-3">
<div className="w-1/3 xl:w-1/4 flex items-center justify-center bg-[#111111] text-[#E8E3D7] text-xs uppercase tracking-widest cursor-pointer hover:bg-[#222] transition-colors relative group border-r border-white/20">
                    EN <iconify-icon className="ml-2 group-hover:rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="absolute top-full left-0 w-full bg-[#111111] border-t border-white/10 hidden group-hover:block">
<div className="p-4 text-center hover:bg-white/10 transition-colors">FR</div>
<div className="p-4 text-center hover:bg-white/10 transition-colors">DE</div>
</div>
</div>
<a className="w-2/3 xl:w-3/4 bg-[#111111] text-[#E8E3D7] flex items-center justify-between px-6 xl:px-8 text-xs uppercase tracking-widest hover:bg-[#222] transition-colors group" href="#">
                    Plan your safari <iconify-icon className="text-base group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</header>

<main className="flex-grow flex flex-col lg:grid lg:grid-cols-12 relative">
<div className="col-span-5 xl:col-span-5 p-8 lg:p-12 xl:p-16 flex flex-col justify-center relative border-b lg:border-b-0 lg:border-r border-[#111111]/15 z-10 bg-[#E8E3D7]">
<div className="text-xs tracking-widest uppercase mb-12 lg:mb-16 text-[#111111]/60 font-normal">
                    // Beyond Ordinary
                </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-medium tracking-tighter uppercase leading-[0.85] mb-8 lg:mb-12 flex flex-col">
<span>Safaris</span>
<span>Designed For</span>
<span>The Curious</span>
</h1>
<div className="absolute right-12 top-1/2 -translate-y-1/2 max-w-[14rem] hidden xl:block">
<p className="text-base text-[#111111]/80 leading-relaxed font-normal">
                        Curated journeys.<br/>Wild places.<br/>Meaningful encounters.<br/>This is travel,<br/>reimagined.
                    </p>
</div>
<p className="text-sm md:text-base text-[#111111]/80 leading-relaxed font-normal mb-12 lg:mb-16 xl:hidden max-w-sm">
                    Curated journeys. Wild places. Meaningful encounters. This is travel, reimagined.
                </p>
<div className="mt-auto pt-8 lg:pt-16">
<a className="inline-flex items-center text-xs tracking-widest uppercase font-normal border-b border-[#111111] pb-1 hover:text-[#B55D34] hover:border-[#B55D34] transition-colors group" href="#">
                        Explore Journeys <iconify-icon className="ml-2 text-base group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>

<div className="col-span-7 xl:col-span-5 relative min-h-[50vh] lg:min-h-0 bg-[#E8E3D7] z-0 overflow-hidden lg:overflow-visible">
<div className="absolute inset-0 lg:-left-20 lg:right-0 top-0 bottom-0 lg:hero-curve overflow-hidden">
<img alt="Giraffe in African savannah" className="w-full h-full object-cover object-[60%_center] lg:object-center transform scale-105 hover:scale-100 transition-transform duration-1000" src="https://images.unsplash.com/photo-1547471080-7fc2caa6f17f?auto=format&amp;fit=crop&amp;w=2000&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-r from-black/5 to-transparent"></div>
</div>
</div>

<div className="hidden xl:flex col-span-2 flex-col border-l border-[#111111]/15 bg-[#E8E3D7] z-10">
<a className="flex-1 border-b border-[#111111]/15 p-8 flex flex-col justify-center group hover:bg-black/5 transition-colors" href="#">
<div className="text-xs mb-3 text-[#111111]/50 font-normal">01</div>
<div className="text-sm tracking-widest uppercase font-normal leading-relaxed group-hover:translate-x-2 transition-transform">Bespoke<br/>Itineraries</div>
</a>
<a className="flex-1 border-b border-[#111111]/15 p-8 flex flex-col justify-center group hover:bg-black/5 transition-colors" href="#">
<div className="text-xs mb-3 text-[#111111]/50 font-normal">02</div>
<div className="text-sm tracking-widest uppercase font-normal leading-relaxed group-hover:translate-x-2 transition-transform">Expert<br/>Guides</div>
</a>
<a className="flex-1 border-b border-[#111111]/15 p-8 flex flex-col justify-center group hover:bg-black/5 transition-colors" href="#">
<div className="text-xs mb-3 text-[#111111]/50 font-normal">03</div>
<div className="text-sm tracking-widest uppercase font-normal leading-relaxed group-hover:translate-x-2 transition-transform">Conservation<br/>Focused</div>
</a>
<a className="flex-1 p-8 flex flex-col justify-end group hover:bg-black/5 transition-colors relative overflow-hidden" href="#">
<div className="text-xs mb-3 text-[#111111]/50 font-normal">+</div>
<div className="text-sm tracking-widest uppercase font-normal leading-relaxed">Our<br/>Commitment</div>
<div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-xl" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</a>
</div>
</main>

<div className="grid grid-cols-12 border-t border-[#111111]/15 bg-[#E8E3D7]">
<div className="col-span-12 md:col-span-6 lg:col-span-3 bg-[#111111] text-[#E8E3D7] p-8 flex flex-col justify-between h-48 lg:h-auto border-b md:border-b-0 border-[#111111]/15 relative overflow-hidden group">
<img alt="Earth Texture" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1610886420556-c774696238b7?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="relative z-10">
<div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center mb-8">
<iconify-icon className="text-xl" icon="solar:compass-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="text-xs tracking-widest font-normal text-white/70 mb-8">
                        1.2921° S,<br/>36.8219° E
                    </div>
</div>
<a className="relative z-10 flex items-center text-[0.65rem] tracking-[0.2em] uppercase font-normal hover:text-white transition-colors" href="#">
                    Discover More <iconify-icon className="ml-2 text-sm" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
<div className="col-span-12 md:col-span-6 lg:col-span-3 bg-[#B55D34] text-[#111111] p-8 flex items-end relative overflow-hidden h-48 lg:h-auto border-b lg:border-b-0 lg:border-r border-[#111111]/15 group cursor-pointer">
<div className="absolute top-1/4 right-1/4 w-1.5 h-1.5 bg-[#111111] rounded-full"></div>
<div className="absolute top-1/4 right-1/4 w-[150%] h-[1px] bg-[#111111]/30 transform origin-top-left rotate-45"></div>
<div className="text-[0.65rem] tracking-[0.2em] uppercase font-normal flex items-end gap-2 group-hover:-translate-y-1 transition-transform">
                    Scroll<br/>To Explore
                    <iconify-icon className="mb-1 animate-bounce text-sm" icon="solar:arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div className="col-span-12 lg:col-span-4 p-8 flex items-center gap-6 lg:gap-8 lg:border-r border-[#111111]/15 bg-[#E8E3D7] group cursor-pointer hover:bg-black/5 transition-colors">
<div className="text-6xl lg:text-7xl xl:text-8xl font-medium tracking-tighter leading-none text-[#111111]/90">01</div>
<div>
<div className="text-xl lg:text-2xl font-medium tracking-tight uppercase mb-2">Kenya</div>
<div className="text-sm md:text-base text-[#111111]/70 mb-4 font-normal">Iconic landscapes. Rich wildlife.<br/>Timeless experiences.</div>
<div className="flex items-center text-[0.65rem] tracking-[0.2em] uppercase font-normal border-b border-[#111111] pb-0.5 w-fit group-hover:border-[#B55D34] group-hover:text-[#B55D34] transition-colors">
                        Explore <iconify-icon className="ml-2 text-sm" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>
<div className="hidden lg:flex col-span-2">
<button className="flex-1 flex items-center justify-center border-r border-[#111111]/15 hover:bg-[#111111]/5 transition-colors group">
<iconify-icon className="text-2xl group-hover:-translate-x-1 transition-transform" icon="solar:arrow-left-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="flex-1 flex items-center justify-center bg-[#111111] text-white hover:bg-[#222] transition-colors group">
<iconify-icon className="text-2xl group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</div>

<section className="border-b border-[#111111]/15 py-20 lg:py-40 px-6 lg:px-12 relative overflow-hidden">
<div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#111111]/10 hidden lg:block"></div>
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
<div className="lg:col-span-5 flex flex-col justify-between">
<div className="text-xs tracking-widest uppercase text-[#111111]/60 font-normal mb-8">
                    // Our Philosophy
                </div>
<h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tighter uppercase leading-[0.9]">
                    Rewilding<br/>The Human<br/>Spirit.
                </h2>
</div>
<div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-end pt-8 lg:pt-0">
<p className="text-xl md:text-2xl lg:text-3xl tracking-tight leading-snug mb-12 font-normal">
                    We believe in traveling slowly, treading lightly, and immersing fully. Our journeys are not just about seeing wildlife; they are about understanding ecosystems, supporting local communities, and reconnecting with the wild origins within ourselves.
                </p>
<div className="grid grid-cols-2 gap-8 border-t border-[#111111]/15 pt-8">
<div>
<div className="text-3xl md:text-4xl font-medium tracking-tighter mb-2">15+</div>
<div className="text-xs tracking-widest uppercase text-[#111111]/60 font-normal">Years Experience</div>
</div>
<div>
<div className="text-3xl md:text-4xl font-medium tracking-tighter mb-2">100%</div>
<div className="text-xs tracking-widest uppercase text-[#111111]/60 font-normal">Carbon Neutral</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-[#111111]/15 flex flex-col">
<div className="flex items-center justify-between px-6 lg:px-12 py-8 border-b border-[#111111]/15">
<h3 className="text-xl lg:text-2xl font-medium tracking-tight uppercase">Featured Regions</h3>
<a className="text-xs tracking-widest uppercase font-normal flex items-center hover:text-[#B55D34] transition-colors" href="#">
                View All <iconify-icon className="ml-2 text-base" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

<a className="group border-b md:border-b-0 lg:border-r border-[#111111]/15 relative overflow-hidden aspect-[4/5] flex flex-col" href="#">
<img alt="Elephants in Tanzania" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="relative z-10 p-8 flex-1 flex flex-col justify-between text-white">
<div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm">
<iconify-icon className="text-sm" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<div className="text-xs tracking-widest uppercase font-normal mb-2 opacity-80">East Africa</div>
<h4 className="text-2xl md:text-3xl font-medium tracking-tight uppercase">Tanzania</h4>
</div>
</div>
</a>

<a className="group border-b lg:border-b-0 md:border-r border-[#111111]/15 relative overflow-hidden aspect-[4/5] flex flex-col" href="#">
<img alt="Leopard in Botswana" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1580556948068-15c2ec332560?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="relative z-10 p-8 flex-1 flex flex-col justify-between text-white">
<div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm">
<iconify-icon className="text-sm" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<div className="text-xs tracking-widest uppercase font-normal mb-2 opacity-80">Southern Africa</div>
<h4 className="text-2xl md:text-3xl font-medium tracking-tight uppercase">Botswana</h4>
</div>
</div>
</a>

<a className="group border-b md:border-b-0 lg:border-r border-[#111111]/15 relative overflow-hidden aspect-[4/5] flex flex-col" href="#">
<img alt="Gorilla in Rwanda" className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1544605985-05565bb4e3d3?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="relative z-10 p-8 flex-1 flex flex-col justify-between text-white">
<div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm">
<iconify-icon className="text-sm" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<div className="text-xs tracking-widest uppercase font-normal mb-2 opacity-80">Central Africa</div>
<h4 className="text-2xl md:text-3xl font-medium tracking-tight uppercase">Rwanda</h4>
</div>
</div>
</a>

<div className="bg-[#111111] text-[#E8E3D7] p-8 md:p-12 flex flex-col justify-center items-start aspect-[4/5] relative overflow-hidden group">
<svg className="absolute -bottom-20 -right-20 w-full h-full text-white/5 opacity-50 group-hover:scale-110 transition-transform duration-1000" viewbox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
<path d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.5,90,-16.2,88.5,-0.8C86.9,14.6,81.3,29.2,72.7,41.4C64.1,53.6,52.5,63.4,39.3,70.5C26.1,77.6,11.3,82,-3.4,87.8C-18.1,93.6,-36.2,100.8,-49.6,94.2C-63,87.6,-71.7,67.2,-78.9,50.3C-86.1,33.4,-91.8,20,-91.3,7.5C-90.8,-5,-84.1,-16.5,-75.7,-25.9C-67.3,-35.3,-57.2,-42.6,-46.8,-51.1C-36.4,-59.6,-25.7,-69.3,-12.3,-74.6C1.1,-79.9,14.5,-80.8,30.6,-83.6L44.7,-76.4Z" fill="currentColor" transform="translate(100 100)"></path>
</svg>
<div className="relative z-10">
<div className="text-xs tracking-widest uppercase font-normal mb-6 text-white/50">Can't Decide?</div>
<h4 className="text-3xl lg:text-4xl font-medium tracking-tight uppercase mb-8 leading-tight">Let us design<br/>your perfect<br/>itinerary.</h4>
<a className="inline-flex items-center text-xs tracking-widest uppercase font-normal bg-white text-[#111111] px-6 py-3 hover:bg-[#B55D34] hover:text-white transition-colors" href="#">
                        Get in touch
                    </a>
</div>
</div>
</div>
</section>

<section className="border-b border-[#111111]/15 bg-[#111111] text-[#E8E3D7]">
<div className="grid grid-cols-1 lg:grid-cols-2">
<div className="p-8 md:p-12 lg:p-24 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/15 lg:sticky lg:top-0 lg:h-screen">
<div className="text-xs tracking-widest uppercase text-white/50 font-normal mb-8">
                    // The Experience
                </div>
<h2 className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tighter uppercase leading-[0.9] mb-8">
                    Moments<br/>That Define<br/>The Journey.
                </h2>
<p className="text-base lg:text-lg text-white/70 font-normal max-w-md mb-12">
                    From dawn game drives to sleeping under a canopy of stars, every detail is orchestrated to awaken your senses.
                </p>
<div className="flex gap-4">
<button className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-[#111111] transition-colors">
<iconify-icon className="text-xl" icon="solar:arrow-left-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-[#111111] transition-colors">
<iconify-icon className="text-xl" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
<div className="flex flex-col">
<div className="aspect-square lg:aspect-auto lg:h-[70vh] border-b border-white/15 relative overflow-hidden group">
<img alt="Safari Drive" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute bottom-0 left-0 p-8 lg:p-12 bg-gradient-to-t from-black/80 to-transparent w-full">
<div className="text-xs tracking-widest uppercase font-normal mb-2 text-[#B55D34]">Activity</div>
<h3 className="text-2xl lg:text-3xl font-medium tracking-tight uppercase">Private Game Drives</h3>
</div>
</div>
<div className="aspect-square lg:aspect-auto lg:h-[70vh] relative overflow-hidden group">
<img alt="Luxury Wilderness Camp" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1506501139174-099022df5260?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute bottom-0 left-0 p-8 lg:p-12 bg-gradient-to-t from-black/80 to-transparent w-full">
<div className="text-xs tracking-widest uppercase font-normal mb-2 text-[#B55D34]">Accommodation</div>
<h3 className="text-2xl lg:text-3xl font-medium tracking-tight uppercase">Wilderness Camps</h3>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-[#111111]/15 py-20 lg:py-32 bg-[#E8E3D7]">
<div className="px-6 lg:px-12 mb-12 lg:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
<div>
<div className="text-xs tracking-widest uppercase text-[#111111]/60 font-normal mb-4">
                    // The People
                </div>
<h2 className="text-4xl lg:text-6xl font-medium tracking-tighter uppercase leading-none">
                    Led By Locals.
                </h2>
</div>
<p className="text-sm md:text-base text-[#111111]/70 font-normal max-w-sm">
                Our guides are the soul of the safari. Born and raised in the regions they explore, their knowledge is unmatched.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 border-t border-[#111111]/15">
<div className="border-b md:border-b-0 md:border-r border-[#111111]/15 p-8 lg:p-12 group">
<div className="aspect-[3/4] mb-8 overflow-hidden bg-[#111111]/5 grayscale group-hover:grayscale-0 transition-all duration-500">
<img alt="Local Guide" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<h4 className="text-xl lg:text-2xl font-medium tracking-tight uppercase mb-2">Jackson Ole</h4>
<div className="text-xs tracking-widest uppercase text-[#B55D34] font-normal mb-4">Maasai Mara Specialist</div>
<p className="text-sm md:text-base text-[#111111]/70 font-normal">Over 20 years tracking big cats and interpreting the intricate signs of the bush.</p>
</div>
<div className="border-b md:border-b-0 md:border-r border-[#111111]/15 p-8 lg:p-12 group">
<div className="aspect-[3/4] mb-8 overflow-hidden bg-[#111111]/5 grayscale group-hover:grayscale-0 transition-all duration-500">
<img alt="Local Guide" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<h4 className="text-xl lg:text-2xl font-medium tracking-tight uppercase mb-2">David Mwangi</h4>
<div className="text-xs tracking-widest uppercase text-[#B55D34] font-normal mb-4">Ornithologist</div>
<p className="text-sm md:text-base text-[#111111]/70 font-normal">A walking encyclopedia of birdlife, turning a simple drive into a masterclass in biodiversity.</p>
</div>
<div className="p-8 lg:p-12 flex flex-col justify-center bg-[#B55D34] text-[#111111] group cursor-pointer hover:bg-[#a35230] transition-colors">
<iconify-icon className="text-5xl mb-8 opacity-50 group-hover:scale-110 transition-transform" icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h4 className="text-3xl lg:text-4xl font-medium tracking-tight uppercase mb-4 leading-none">Meet The<br/>Full Team</h4>
<div className="text-xs tracking-widest uppercase font-normal flex items-center mt-auto border-b border-[#111111] pb-1 w-fit">
                    Read Bios <iconify-icon className="ml-2 text-sm" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>
</section>

<section className="border-b border-[#111111]/15 py-20 lg:py-32">
<div className="px-6 lg:px-12 mb-12 flex justify-between items-end">
<h2 className="text-4xl lg:text-6xl font-medium tracking-tighter uppercase leading-none">
                Field Notes.
            </h2>
<a className="hidden md:flex items-center text-xs tracking-widest uppercase font-normal border-b border-[#111111] pb-1 hover:text-[#B55D34] hover:border-[#B55D34] transition-colors" href="#">
                View All Entries <iconify-icon className="ml-2 text-sm" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
<div className="flex flex-col border-t border-[#111111]/15">

<a className="grid grid-cols-1 md:grid-cols-12 border-b border-[#111111]/15 group hover:bg-[#111111]/5 transition-colors" href="#">
<div className="md:col-span-3 lg:col-span-2 p-6 lg:p-8 flex items-center border-b md:border-b-0 md:border-r border-[#111111]/15 text-xs tracking-widest uppercase text-[#111111]/60 font-normal">
                    Oct 12, 2023
                </div>
<div className="md:col-span-7 lg:col-span-8 p-6 lg:p-8 flex flex-col justify-center border-b md:border-b-0 md:border-r border-[#111111]/15">
<div className="text-xs tracking-widest uppercase text-[#B55D34] font-normal mb-2 lg:mb-3">Conservation</div>
<h3 className="text-xl lg:text-3xl font-medium tracking-tight uppercase group-hover:translate-x-2 transition-transform">The Return of the Rhinos to Lewa</h3>
</div>
<div className="md:col-span-2 p-6 lg:p-8 hidden md:flex items-center justify-end">
<div className="w-10 h-10 rounded-full border border-[#111111]/30 flex items-center justify-center group-hover:bg-[#111111] group-hover:text-white transition-colors">
<iconify-icon className="text-sm" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</a>

<a className="grid grid-cols-1 md:grid-cols-12 border-b border-[#111111]/15 group hover:bg-[#111111]/5 transition-colors" href="#">
<div className="md:col-span-3 lg:col-span-2 p-6 lg:p-8 flex items-center border-b md:border-b-0 md:border-r border-[#111111]/15 text-xs tracking-widest uppercase text-[#111111]/60 font-normal">
                    Sep 28, 2023
                </div>
<div className="md:col-span-7 lg:col-span-8 p-6 lg:p-8 flex flex-col justify-center border-b md:border-b-0 md:border-r border-[#111111]/15">
<div className="text-xs tracking-widest uppercase text-[#B55D34] font-normal mb-2 lg:mb-3">Guide Stories</div>
<h3 className="text-xl lg:text-3xl font-medium tracking-tight uppercase group-hover:translate-x-2 transition-transform">Tracking Lions on Foot in South Luangwa</h3>
</div>
<div className="md:col-span-2 p-6 lg:p-8 hidden md:flex items-center justify-end">
<div className="w-10 h-10 rounded-full border border-[#111111]/30 flex items-center justify-center group-hover:bg-[#111111] group-hover:text-white transition-colors">
<iconify-icon className="text-sm" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</a>

<a className="grid grid-cols-1 md:grid-cols-12 group hover:bg-[#111111]/5 transition-colors" href="#">
<div className="md:col-span-3 lg:col-span-2 p-6 lg:p-8 flex items-center border-b md:border-b-0 md:border-r border-[#111111]/15 text-xs tracking-widest uppercase text-[#111111]/60 font-normal">
                    Aug 05, 2023
                </div>
<div className="md:col-span-7 lg:col-span-8 p-6 lg:p-8 flex flex-col justify-center border-b md:border-b-0 md:border-r border-[#111111]/15">
<div className="text-xs tracking-widest uppercase text-[#B55D34] font-normal mb-2 lg:mb-3">Photography</div>
<h3 className="text-xl lg:text-3xl font-medium tracking-tight uppercase group-hover:translate-x-2 transition-transform">Mastering Golden Hour in the Savannah</h3>
</div>
<div className="md:col-span-2 p-6 lg:p-8 hidden md:flex items-center justify-end">
<div className="w-10 h-10 rounded-full border border-[#111111]/30 flex items-center justify-center group-hover:bg-[#111111] group-hover:text-white transition-colors">
<iconify-icon className="text-sm" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</a>
<div className="p-6 md:hidden flex justify-center border-t border-[#111111]/15">
<a className="flex items-center text-xs tracking-widest uppercase font-normal border-b border-[#111111] pb-1 hover:text-[#B55D34] hover:border-[#B55D34] transition-colors" href="#">
                    View All Entries <iconify-icon className="ml-2 text-sm" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</section>

<section className="border-b border-[#111111]/15 py-20 lg:py-32 px-6 lg:px-12 flex flex-col lg:flex-row gap-12 lg:gap-16">
<div className="lg:w-1/3">
<h2 className="text-4xl lg:text-5xl font-medium tracking-tighter uppercase mb-6 leading-none">Safari<br/>Essentials.</h2>
<p className="text-sm md:text-base text-[#111111]/70 font-normal mb-8">Everything you need to know before embarking on your wild journey.</p>
<a className="text-xs tracking-widest uppercase font-normal border-b border-[#111111] pb-1 hover:text-[#B55D34] hover:border-[#B55D34] transition-colors inline-flex items-center" href="#">
                Full FAQ <iconify-icon className="ml-2 text-sm" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
<div className="lg:w-2/3 border-t border-[#111111]/15">
<div className="border-b border-[#111111]/15">
<button className="w-full py-6 md:py-8 flex items-center justify-between text-left group" onclick="this.nextElementSibling.classList.toggle('hidden'); this.querySelector('iconify-icon').classList.toggle('rotate-45')">
<span className="text-lg md:text-xl lg:text-2xl font-medium tracking-tight uppercase group-hover:text-[#B55D34] transition-colors pr-4">When is the best time to go?</span>
<iconify-icon className="text-2xl transition-transform duration-300 flex-shrink-0" icon="solar:add-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<div className="hidden pb-8 text-sm md:text-base text-[#111111]/70 font-normal max-w-2xl pr-8">
                    It depends largely on what you want to see. The dry season (June to October) is generally best for game viewing as animals congregate around water sources. The green season offers lush landscapes and is perfect for birding.
                </div>
</div>
<div className="border-b border-[#111111]/15">
<button className="w-full py-6 md:py-8 flex items-center justify-between text-left group" onclick="this.nextElementSibling.classList.toggle('hidden'); this.querySelector('iconify-icon').classList.toggle('rotate-45')">
<span className="text-lg md:text-xl lg:text-2xl font-medium tracking-tight uppercase group-hover:text-[#B55D34] transition-colors pr-4">Is it safe for children?</span>
<iconify-icon className="text-2xl transition-transform duration-300 flex-shrink-0" icon="solar:add-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<div className="hidden pb-8 text-sm md:text-base text-[#111111]/70 font-normal max-w-2xl pr-8">
                    Absolutely. We offer tailored family safaris with specialized guides and accommodations that cater specifically to young explorers, ensuring a safe and educational experience.
                </div>
</div>
<div className="border-b border-[#111111]/15">
<button className="w-full py-6 md:py-8 flex items-center justify-between text-left group" onclick="this.nextElementSibling.classList.toggle('hidden'); this.querySelector('iconify-icon').classList.toggle('rotate-45')">
<span className="text-lg md:text-xl lg:text-2xl font-medium tracking-tight uppercase group-hover:text-[#B55D34] transition-colors pr-4">What should I pack?</span>
<iconify-icon className="text-2xl transition-transform duration-300 flex-shrink-0" icon="solar:add-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<div className="hidden pb-8 text-sm md:text-base text-[#111111]/70 font-normal max-w-2xl pr-8">
                    Pack light, breathable clothing in neutral colors (khaki, olive, brown). Layers are essential for chilly early mornings and evenings. A comprehensive packing list is provided upon booking.
                </div>
</div>
</div>
</section>

<section className="bg-[#111111] text-[#E8E3D7] border-b border-white/15">
<div className="grid grid-cols-1 lg:grid-cols-2">
<div className="p-8 md:p-12 lg:p-24 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/15">
<iconify-icon className="text-3xl mb-8 text-[#B55D34]" icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter uppercase leading-[0.9] mb-6">
                    Join The<br/>Expedition.
                </h2>
<p className="text-sm md:text-base text-white/60 font-normal mb-12 max-w-sm">
                    Subscribe to our dispatch for exclusive itineraries, wildlife stories, and conservation updates.
                </p>
<form className="flex border-b border-white/30 focus-within:border-white transition-colors pb-2">
<input className="bg-transparent border-none outline-none flex-1 text-xs tracking-widest uppercase placeholder:text-white/30 text-white font-normal" placeholder="YOUR EMAIL ADDRESS" required="" type="email"/>
<button className="text-xs tracking-widest uppercase font-normal hover:text-[#B55D34] transition-colors ml-4" type="submit">
                        Subscribe
                    </button>
</form>
</div>
<div className="bg-[#B55D34] p-12 lg:p-24 flex flex-col justify-center items-start relative overflow-hidden group cursor-pointer text-[#111111]">
<div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full border border-[#111111]/20 group-hover:scale-110 transition-transform duration-1000 pointer-events-none"></div>
<div className="text-xs tracking-widest uppercase font-normal mb-6">Ready to go?</div>
<h2 className="text-5xl md:text-6xl lg:text-8xl font-medium tracking-tighter uppercase leading-[0.85] mb-12 relative z-10 group-hover:-translate-y-2 transition-transform duration-500">
                    Plan<br/>Your<br/>Safari.
                </h2>
<div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#111111] text-white flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform">
<iconify-icon className="text-xl md:text-2xl" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>
</section>

<footer className="bg-[#111111] text-[#E8E3D7] pt-20 lg:pt-24 pb-12 px-6 lg:px-12 flex flex-col">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20 lg:mb-24">
<div className="lg:col-span-4 flex flex-col justify-between">
<div>
<div className="text-2xl md:text-3xl font-medium tracking-tighter uppercase leading-none mb-2">WILD ORIGINS</div>
<div className="text-[0.65rem] tracking-[0.2em] uppercase text-white/50">Safari Travels</div>
</div>
<div className="mt-8 lg:mt-0 text-sm font-normal text-white/50 max-w-xs leading-relaxed">
                    Curated journeys into the heart of the wild. Sustainable, authentic, unforgettable.
                </div>
</div>
<div className="lg:col-span-2 lg:col-start-7 flex flex-col gap-4">
<div className="text-[0.65rem] tracking-[0.2em] uppercase text-[#B55D34] font-normal mb-2 lg:mb-4">Explore</div>
<a className="text-xs md:text-sm font-normal uppercase tracking-wider hover:text-white transition-colors text-white/70" href="#">Destinations</a>
<a className="text-xs md:text-sm font-normal uppercase tracking-wider hover:text-white transition-colors text-white/70" href="#">Experiences</a>
<a className="text-xs md:text-sm font-normal uppercase tracking-wider hover:text-white transition-colors text-white/70" href="#">Journeys</a>
<a className="text-xs md:text-sm font-normal uppercase tracking-wider hover:text-white transition-colors text-white/70" href="#">Journal</a>
</div>
<div className="lg:col-span-2 flex flex-col gap-4">
<div className="text-[0.65rem] tracking-[0.2em] uppercase text-[#B55D34] font-normal mb-2 lg:mb-4">Company</div>
<a className="text-xs md:text-sm font-normal uppercase tracking-wider hover:text-white transition-colors text-white/70" href="#">About Us</a>
<a className="text-xs md:text-sm font-normal uppercase tracking-wider hover:text-white transition-colors text-white/70" href="#">Our Team</a>
<a className="text-xs md:text-sm font-normal uppercase tracking-wider hover:text-white transition-colors text-white/70" href="#">Conservation</a>
<a className="text-xs md:text-sm font-normal uppercase tracking-wider hover:text-white transition-colors text-white/70" href="#">Contact</a>
</div>
<div className="lg:col-span-2 flex flex-col gap-4">
<div className="text-[0.65rem] tracking-[0.2em] uppercase text-[#B55D34] font-normal mb-2 lg:mb-4">Connect</div>
<a className="text-xs md:text-sm font-normal hover:text-white transition-colors text-white/70" href="mailto:hello@wildorigins.com">hello@wildorigins.com</a>
<a className="text-xs md:text-sm font-normal hover:text-white transition-colors text-white/70" href="tel:+1234567890">+1 (234) 567-890</a>
<div className="flex gap-4 mt-4">
<a className="text-white/50 hover:text-white transition-colors text-xs font-normal tracking-widest uppercase" href="#">IG</a>
<a className="text-white/50 hover:text-white transition-colors text-xs font-normal tracking-widest uppercase" href="#">TW</a>
</div>
</div>
</div>
<div className="border-t border-white/15 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-[0.65rem] tracking-widest uppercase font-normal text-white/40">
<div>© 2023 WILD ORIGINS. ALL RIGHTS RESERVED.</div>
<div className="flex gap-6 md:gap-8 flex-wrap">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</footer>


    </>
  );
}
