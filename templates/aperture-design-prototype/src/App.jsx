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



        // --- Custom Cursor Logic ---
        const cursorDot = document.getElementById('cursor-dot');
        const cursorRing = document.getElementById('cursor-ring');
        const cursorLinks = document.querySelectorAll('.cursor-link');
        
        // Use matchMedia to check if device has a fine pointer (mouse)
        if (window.matchMedia("(pointer: fine)").matches) {
            let mouseX = window.innerWidth / 2;
            let mouseY = window.innerHeight / 2;
            let ringX = mouseX;
            let ringY = mouseY;
            
            window.addEventListener('mousemove', (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;
                // Instant dot update
                cursorDot.style.transform = `translate(calc(${mouseX}px - 50%), calc(${mouseY}px - 50%))`;
            });

            // Smooth animation loop for the lagging ring
            function renderCursor() {
                // Interpolate
                ringX += (mouseX - ringX) * 0.15;
                ringY += (mouseY - ringY) * 0.15;
                
                cursorRing.style.transform = `translate(calc(${ringX}px - 50%), calc(${ringY}px - 50%))`;
                requestAnimationFrame(renderCursor);
            }
            requestAnimationFrame(renderCursor);

            // Hover states
            cursorLinks.forEach(link => {
                link.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
                link.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
            });
        }

        // --- Scroll Reveal Animation ---
        const revealElements = document.querySelectorAll('.reveal-up');
        
        const revealOptions = {
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        };

        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Only animate once
            });
        }, revealOptions);

        revealElements.forEach(el => {
            revealObserver.observe(el);
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
      

<div className="cursor-dot hidden md:block" id="cursor-dot"></div>
<div className="cursor-ring hidden md:block" id="cursor-ring"></div>

<nav className="fixed top-0 w-full z-50 mix-blend-difference px-6 py-8 md:px-12 flex justify-between items-center pointer-events-none">
<a className="font-sans-cond text-sm md:text-base tracking-widest uppercase font-medium text-white hover:text-[#b5533c] transition-colors pointer-events-auto cursor-link" href="#">
            Aperture
        </a>
<div className="hidden md:flex gap-12 pointer-events-auto">
<a className="uppercase hover:text-[#b5533c] transition-colors cursor-link text-sm text-white tracking-widest font-sans-cond" href="#portfolio">Portfolio</a>
<a className="uppercase hover:text-[#b5533c] transition-colors cursor-link text-sm text-white tracking-widest font-sans-cond" href="#about">Firm</a>
<a className="uppercase hover:text-[#b5533c] transition-colors cursor-link text-sm text-white tracking-widest font-sans-cond" href="#contact">Contact</a>
</div>
<button className="md:hidden pointer-events-auto text-white cursor-link flex flex-col gap-[6px] group">
<span className="w-8 h-[1px] bg-white group-hover:bg-[#b5533c] transition-colors"></span>
<span className="w-6 h-[1px] bg-white group-hover:bg-[#b5533c] transition-colors self-end"></span>
</button>
</nav>

<header className="relative w-full h-screen overflow-hidden bg-[#111111]">
<div className="absolute inset-0 z-0">
<img alt="Desert Modern Architecture" className="w-full h-full object-cover opacity-60 animate-ken-burns" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent"></div>
<div className="absolute inset-0 bg-[#111111]/20"></div>
</div>
<div className="flex flex-col z-10 text-center h-full pr-4 pl-4 relative items-center justify-center">
<h1 className="md:text-8xl lg:text-[9rem] leading-none reveal-up text-6xl italic text-[#e6dcd3] tracking-tight font-serif">
                Aperture Design
            </h1>
<p className="mt-8 font-sans-cond text-xs md:text-sm tracking-[0.3em] uppercase text-[#d4c5b9] reveal-up delay-100 flex items-center gap-4">
<span className="w-8 h-[1px] bg-[#b5533c]"></span>
                Phoenix, Arizona
                <span className="w-8 h-[1px] bg-[#b5533c]"></span>
</p>
</div>

<div className="absolute bottom-12 right-6 md:right-12 flex flex-col items-center gap-4 z-20 reveal-up delay-300">
<span className="font-sans-cond text-xs tracking-widest uppercase text-[#888888] [writing-mode:vertical-lr] rotate-180">Scroll</span>
<div className="w-[1px] h-16 bg-[#333333] relative overflow-hidden">
<div className="absolute top-0 left-0 w-full bg-[#b5533c] scroll-line-anim"></div>
</div>
</div>
</header>

<div className="w-full bg-[#111111] border-y border-[#2a2a2a] py-5 overflow-hidden flex whitespace-nowrap relative z-10">
<div className="marquee-content font-sans-cond text-lg md:text-xl tracking-[0.2em] uppercase text-[#888888] font-medium flex gap-12 items-center px-6">
<span className="">Custom Residential</span>
<span className="w-1.5 h-1.5 rounded-full bg-[#b5533c]"></span>
<span className="">LEED Certified</span>
<span className="w-1.5 h-1.5 rounded-full bg-[#b5533c]"></span>
<span className="">Frank Lloyd Wright School</span>
<span className="w-1.5 h-1.5 rounded-full bg-[#b5533c]"></span>
<span>Construction Management</span>
<span className="w-1.5 h-1.5 rounded-full bg-[#b5533c]"></span>
<span>Interior Architecture</span>
<span className="w-1.5 h-1.5 rounded-full bg-[#b5533c]"></span>
<span>Custom Residential</span>
<span className="w-1.5 h-1.5 rounded-full bg-[#b5533c]"></span>
<span>LEED Certified</span>
<span className="w-1.5 h-1.5 rounded-full bg-[#b5533c]"></span>
<span>Frank Lloyd Wright School</span>
<span className="w-1.5 h-1.5 rounded-full bg-[#b5533c]"></span>
<span>Construction Management</span>
<span className="w-1.5 h-1.5 rounded-full bg-[#b5533c]"></span>
<span>Interior Architecture</span>
</div>
</div>

<section className="md:py-40 md:px-12 max-w-[1600px] mr-auto ml-auto pt-24 pr-6 pb-24 pl-6" id="portfolio">
<div className="flex flex-col md:flex-row reveal-up mb-16 gap-x-8 gap-y-8 items-end justify-between">
<div className="">
<h2 className="font-serif text-4xl md:text-6xl tracking-tight text-[#e6dcd3]">Selected Works</h2>
<p className="font-sans-cond text-sm uppercase tracking-widest text-[#888888] mt-4">A curation of desert modernism</p>
</div>
<a className="group flex items-center gap-3 uppercase hover:text-[#b5533c] transition-colors hover:border-[#b5533c] cursor-link text-sm text-[#d4c5b9] tracking-widest font-sans-cond border-[#2a2a2a] border-b pb-2" href="#">
                View All Projects
                <iconify-icon className="text-xl transition-transform group-hover:translate-x-1 icon-stroke" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">

<a className="col-span-1 md:col-span-8 aspect-[4/3] md:aspect-[16/9] group relative overflow-hidden block cursor-link reveal-up" href="#">
<img alt="Camelback Residence" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&amp;w=2075&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
<div className="group-hover:opacity-100 transition-opacity duration-500 flex flex-col md:p-12 bg-gradient-to-t from-[#111111]/90 via-[#111111]/20 to-transparent opacity-0 pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-end">
<h3 className="font-serif text-3xl md:text-4xl tracking-tight text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Camelback Residence</h3>
<p className="font-sans-cond text-xs uppercase tracking-widest text-[#d4c5b9] mt-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">Scottsdale, AZ</p>
</div>
</a>

<a className="col-span-1 md:col-span-4 aspect-[4/3] md:aspect-auto md:h-full group relative overflow-hidden block cursor-link reveal-up delay-100" href="#">
<img alt="Canyon Retreat" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#111111]/90 via-[#111111]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 md:p-12">
<h3 className="font-serif text-2xl md:text-3xl tracking-tight text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Canyon Retreat</h3>
<p className="font-sans-cond text-xs uppercase tracking-widest text-[#d4c5b9] mt-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">Sedona, AZ</p>
</div>
</a>

<a className="col-span-1 md:col-span-5 aspect-[4/3] md:aspect-square group relative overflow-hidden block cursor-link reveal-up" href="#">
<img alt="Arcadia Gallery" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&amp;w=2053&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#111111]/90 via-[#111111]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 md:p-12">
<h3 className="font-serif text-2xl md:text-3xl tracking-tight text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Arcadia Gallery</h3>
<p className="font-sans-cond text-xs uppercase tracking-widest text-[#d4c5b9] mt-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">Phoenix, AZ</p>
</div>
</a>

<a className="col-span-1 md:col-span-7 aspect-[4/3] md:aspect-[21/9] group relative overflow-hidden block cursor-link reveal-up delay-100" href="#">
<img alt="Desert Courtyard" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#111111]/90 via-[#111111]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 md:p-12">
<h3 className="font-serif text-3xl md:text-4xl tracking-tight text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Desert Courtyard</h3>
<p className="font-sans-cond text-xs uppercase tracking-widest text-[#d4c5b9] mt-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">Paradise Valley, AZ</p>
</div>
</a>
</div>
</section>

<section className="border-y border-[#2a2a2a] bg-[#161616]">
<div className="max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#2a2a2a]">
<div className="py-16 md:py-20 flex flex-col items-center justify-center text-center reveal-up">
<span className="font-serif text-5xl md:text-7xl tracking-tight text-[#d4c5b9]">10+</span>
<span className="font-sans-cond text-xs md:text-sm uppercase tracking-[0.2em] text-[#888888] mt-4">Years Experience</span>
</div>
<div className="py-16 md:py-20 flex flex-col items-center justify-center text-center reveal-up delay-100">
<span className="font-serif text-5xl md:text-7xl tracking-tight text-[#d4c5b9]">30+</span>
<span className="font-sans-cond text-xs md:text-sm uppercase tracking-[0.2em] text-[#888888] mt-4">Completed Projects</span>
</div>
<div className="py-16 md:py-20 flex flex-col items-center justify-center text-center reveal-up delay-200">
<span className="font-serif text-5xl md:text-7xl tracking-tight text-[#d4c5b9]">12+</span>
<span className="font-sans-cond text-xs md:text-sm uppercase tracking-[0.2em] text-[#888888] mt-4">Project Typologies</span>
</div>
</div>
</section>

<section className="py-24 md:py-40 px-6 md:px-12 max-w-[1400px] mx-auto overflow-hidden" id="about">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

<div className="lg:col-span-5 relative reveal-up">

<div className="absolute inset-0 border border-[#b5533c] translate-x-4 translate-y-4 md:translate-x-6 md:translate-y-6 z-0"></div>

<div className="relative z-10 aspect-[3/4] overflow-hidden bg-[#1a1a1a]">
<img alt="Jason Steele Portrait" className="w-full h-full object-cover grayscale mix-blend-luminosity opacity-90" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="lg:col-span-7 flex flex-col justify-center reveal-up delay-100">
<p className="font-sans-cond text-sm uppercase tracking-[0.2em] text-[#b5533c] mb-6 flex items-center gap-4">
<span className="w-8 h-[1px] bg-[#b5533c]"></span>
                    The Architect
                </p>
<h2 className="font-serif text-4xl md:text-6xl tracking-tight text-[#e6dcd3] mb-8">Jason Steele</h2>
<div className="space-y-6 font-serif text-lg md:text-xl text-[#aaaaaa] leading-relaxed max-w-2xl">
<p className="">Rooted in the dramatic landscapes of the Arizona desert, Aperture Design is an architecture practice that balances raw organic forms with refined modernist precision. Founded by Jason Steele, the firm approaches every project with a quiet confidence—avoiding fleeting trends in favor of intentional, site-specific solutions.</p>
<p className="">
                        With training from the Frank Lloyd Wright School of Architecture, the firm's ethos is deeply connected to material honesty, natural light, and the seamless integration of indoor and outdoor environments.
                    </p>
</div>
<ul className="mt-12 space-y-4 flex flex-col">
<li className="flex items-center gap-4">
<span className="w-4 h-[1px] bg-[#b5533c]"></span>
<span className="font-sans-cond text-sm uppercase tracking-widest text-[#d4c5b9]">Registered Architect, Arizona</span>
</li>
<li className="flex items-center gap-4">
<span className="w-4 h-[1px] bg-[#b5533c]"></span>
<span className="font-sans-cond text-sm uppercase tracking-widest text-[#d4c5b9]">LEED AP Certification</span>
</li>
<li className="flex items-center gap-4">
<span className="w-4 h-[1px] bg-[#b5533c]"></span>
<span className="font-sans-cond text-sm uppercase tracking-widest text-[#d4c5b9]">Taliesin Apprentice Alumnus</span>
</li>
</ul>
</div>
</div>
</section>

<section className="py-24 md:py-40 px-6 md:px-12 bg-[#161616] border-t border-[#2a2a2a]">
<div className="max-w-[1600px] mx-auto">
<h2 className="font-serif text-4xl md:text-6xl tracking-tight text-[#e6dcd3] mb-16 text-center reveal-up">Expertise</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#2a2a2a] border border-[#2a2a2a]">

<div className="bg-[#161616] p-10 md:p-14 relative group overflow-hidden cursor-link reveal-up">
<div className="absolute -bottom-8 -right-4 font-sans-cond text-[8rem] leading-none font-semibold text-white opacity-[0.02] group-hover:opacity-[0.05] group-hover:-translate-y-4 transition-all duration-500 pointer-events-none select-none">01</div>
<iconify-icon className="text-3xl text-[#b5533c] mb-8 icon-stroke" icon="solar:home-angle-linear"></iconify-icon>
<h3 className="font-serif text-2xl md:text-3xl tracking-tight text-[#e6dcd3] mb-4 relative z-10">Custom Residential</h3>
<p className="font-serif text-base text-[#888888] leading-relaxed relative z-10">Bespoke home designs that respond intimately to topography, climate, and the client's way of living.</p>
</div>

<div className="bg-[#161616] p-10 md:p-14 relative group overflow-hidden cursor-link reveal-up delay-100">
<div className="absolute -bottom-8 -right-4 font-sans-cond text-[8rem] leading-none font-semibold text-white opacity-[0.02] group-hover:opacity-[0.05] group-hover:-translate-y-4 transition-all duration-500 pointer-events-none select-none">02</div>
<iconify-icon className="text-3xl text-[#b5533c] mb-8 icon-stroke" icon="solar:city-linear"></iconify-icon>
<h3 className="font-serif text-2xl md:text-3xl tracking-tight text-[#e6dcd3] mb-4 relative z-10">Multi-Family</h3>
<p className="font-serif text-base text-[#888888] leading-relaxed relative z-10">Scaleable residential communities that prioritize spatial quality, sustainability, and urban integration.</p>
</div>

<div className="bg-[#161616] p-10 md:p-14 relative group overflow-hidden cursor-link reveal-up delay-200">
<div className="absolute -bottom-8 -right-4 font-sans-cond text-[8rem] leading-none font-semibold text-white opacity-[0.02] group-hover:opacity-[0.05] group-hover:-translate-y-4 transition-all duration-500 pointer-events-none select-none">03</div>
<iconify-icon className="text-3xl text-[#b5533c] mb-8 icon-stroke" icon="solar:armchair-linear"></iconify-icon>
<h3 className="font-serif text-2xl md:text-3xl tracking-tight text-[#e6dcd3] mb-4 relative z-10">Interior &amp; Landscape</h3>
<p className="font-serif text-base text-[#888888] leading-relaxed relative z-10">Holistic design that blurs the boundaries between the built envelope, interior detailing, and external environment.</p>
</div>

<div className="bg-[#161616] p-10 md:p-14 relative group overflow-hidden cursor-link reveal-up">
<div className="absolute -bottom-8 -right-4 font-sans-cond text-[8rem] leading-none font-semibold text-white opacity-[0.02] group-hover:opacity-[0.05] group-hover:-translate-y-4 transition-all duration-500 pointer-events-none select-none">04</div>
<iconify-icon className="text-3xl text-[#b5533c] mb-8 icon-stroke" icon="solar:buildings-linear"></iconify-icon>
<h3 className="font-serif text-2xl md:text-3xl tracking-tight text-[#e6dcd3] mb-4 relative z-10">Commercial</h3>
<p className="font-serif text-base text-[#888888] leading-relaxed relative z-10">Hospitality and institutional spaces crafted to elevate the human experience and brand presence.</p>
</div>

<div className="bg-[#161616] p-10 md:p-14 relative group overflow-hidden cursor-link reveal-up delay-100">
<div className="absolute -bottom-8 -right-4 font-sans-cond text-[8rem] leading-none font-semibold text-white opacity-[0.02] group-hover:opacity-[0.05] group-hover:-translate-y-4 transition-all duration-500 pointer-events-none select-none">05</div>
<iconify-icon className="text-3xl text-[#b5533c] mb-8 icon-stroke" icon="solar:leaf-linear"></iconify-icon>
<h3 className="font-serif text-2xl md:text-3xl tracking-tight text-[#e6dcd3] mb-4 relative z-10">Sustainable Design</h3>
<p className="font-serif text-base text-[#888888] leading-relaxed relative z-10">Passive strategies, material efficiency, and LEED-guided processes intrinsic to the architectural conception.</p>
</div>

<div className="bg-[#161616] p-10 md:p-14 relative group overflow-hidden cursor-link reveal-up delay-200">
<div className="absolute -bottom-8 -right-4 font-sans-cond text-[8rem] leading-none font-semibold text-white opacity-[0.02] group-hover:opacity-[0.05] group-hover:-translate-y-4 transition-all duration-500 pointer-events-none select-none">06</div>
<iconify-icon className="text-3xl text-[#b5533c] mb-8 icon-stroke" icon="solar:ruler-cross-pen-linear"></iconify-icon>
<h3 className="font-serif text-2xl md:text-3xl tracking-tight text-[#e6dcd3] mb-4 relative z-10">Construction Mgmt</h3>
<p className="font-serif text-base text-[#888888] leading-relaxed relative z-10">Rigorous oversight to ensure the design vision is executed with uncompromising craftsmanship.</p>
</div>
</div>
</div>
</section>

<footer className="relative pt-32 md:pt-48 pb-10 overflow-hidden bg-[#111111] border-t border-[#2a2a2a]" id="contact">

<div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 font-sans-cond uppercase tracking-tight whitespace-nowrap opacity-10 pointer-events-none select-none z-0 ghost-text text-[20vw] font-semibold">
            APERTURE
        </div>
<div className="relative z-10 flex flex-col items-center text-center px-6 reveal-up mb-24 md:mb-32">
<h2 className="font-serif text-4xl md:text-6xl lg:text-7xl tracking-tight text-[#e6dcd3] mb-12">Let's build something enduring.</h2>
<a className="group flex items-center gap-4 border-b border-[#b5533c] pb-3 cursor-link" href="mailto:info@aperturedesignaz.com">
<span className="font-sans-cond text-sm md:text-base uppercase tracking-widest text-[#d4c5b9] group-hover:text-white transition-colors">Start a Conversation</span>
<iconify-icon className="text-xl text-[#b5533c] transition-transform group-hover:translate-x-2 icon-stroke" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12">

<div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16 reveal-up delay-100 border-t border-[#2a2a2a] pt-16">

<div className="flex flex-col gap-6">
<h3 className="font-sans-cond text-xs uppercase tracking-widest text-[#888888]">Studio</h3>
<address className="font-serif text-lg text-[#d4c5b9] not-italic leading-relaxed">
                        4700 North 12th Street<br/>
                        Suite 201<br/>
                        Phoenix, AZ 85014
                    </address>
</div>

<div className="flex flex-col gap-6">
<h3 className="font-sans-cond text-xs uppercase tracking-widest text-[#888888]">Contact</h3>
<div className="font-serif text-lg text-[#d4c5b9] flex flex-col gap-2">
<a className="hover:text-[#b5533c] transition-colors cursor-link inline-block w-fit" href="mailto:info@aperturedesignaz.com">info@aperturedesignaz.com</a>
<a className="hover:text-[#b5533c] transition-colors cursor-link inline-block w-fit" href="tel:6024923116">602.492.3116</a>
</div>
</div>

<div className="flex flex-col gap-6 md:items-end text-left md:text-right">
<h3 className="font-sans-cond text-xs uppercase tracking-widest text-[#888888]">Follow</h3>
<div className="flex flex-col gap-2 font-serif text-lg text-[#d4c5b9]">
<a className="hover:text-[#b5533c] transition-colors cursor-link inline-block w-fit md:ml-auto" href="#">Instagram</a>
<a className="hover:text-[#b5533c] transition-colors cursor-link inline-block w-fit md:ml-auto" href="#">LinkedIn</a>
<a className="hover:text-[#b5533c] transition-colors cursor-link inline-block w-fit md:ml-auto" href="#">ArchDaily</a>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row justify-between items-center gap-4 font-sans-cond text-xs uppercase tracking-widest text-[#555555]">
<p>© 2024 Aperture Design. All rights reserved.</p>
<p>Phoenix, Arizona</p>
</div>
</div>
</footer>


    </>
  );
}
