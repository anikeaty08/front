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
      {

try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

}

{

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

}

{

        // Hero Slideshow
        let currentSlide = 0;
        const slides = document.querySelectorAll('.hero-slide');
        const dots = document.querySelectorAll('.hero-dot');
        const totalSlides = slides.length;

        function updateSlides() {
            slides.forEach((slide, index) => {
                if (index === currentSlide) {
                    slide.classList.replace('opacity-0', 'opacity-100');
                    slide.style.zIndex = '10';
                } else {
                    slide.classList.replace('opacity-100', 'opacity-0');
                    slide.style.zIndex = '0';
                }
            });
            dots.forEach((dot, index) => {
                if (index === currentSlide) {
                    dot.classList.replace('bg-white/50', 'bg-white');
                } else {
                    dot.classList.replace('bg-white', 'bg-white/50');
                }
            });
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateSlides();
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateSlides();
        }

        function goToSlide(index) {
            currentSlide = index;
            updateSlides();
        }

        // Auto slide
        setInterval(nextSlide, 5000);

        // Custom Cursor & Subtle Parallax
        const cursor = document.getElementById('custom-cursor');
        const cursorTrailer = document.getElementById('custom-cursor-trailer');
        const bg = document.querySelector('.aura-background-component');
        
        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let trailerX = mouseX;
        let trailerY = mouseY;

        // Ensure interactions hide custom cursor on links/buttons
        const interactables = document.querySelectorAll('a, button, [role="button"], input, textarea');
        
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            if(cursor) {
                cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
            }

            if(bg) {
                const centerX = window.innerWidth / 2;
                const centerY = window.innerHeight / 2;
                const moveX = (mouseX - centerX) * -0.015;
                const moveY = (mouseY - centerY) * -0.015;
                bg.style.transform = `translate(${moveX}px, ${moveY}px)`;
            }
        });

        function animateTrailer() {
            trailerX += (mouseX - trailerX) * 0.15;
            trailerY += (mouseY - trailerY) * 0.15;
            
            if(cursorTrailer) {
                cursorTrailer.style.transform = `translate(${trailerX}px, ${trailerY}px)`;
            }
            requestAnimationFrame(animateTrailer);
        }
        animateTrailer();

        // Hover states for cursor
        interactables.forEach(el => {
            el.addEventListener('mouseenter', () => {
                if(cursor) cursor.classList.add('scale-150', 'bg-indigo-400');
                if(cursorTrailer) cursorTrailer.classList.add('scale-[2]', 'opacity-0');
            });
            el.addEventListener('mouseleave', () => {
                if(cursor) cursor.classList.remove('scale-150', 'bg-indigo-400');
                if(cursorTrailer) cursorTrailer.classList.remove('scale-[2]', 'opacity-0');
            });
        });

    
}
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
      

<div className="fixed w-1.5 h-1.5 bg-indigo-500 rounded-full pointer-events-none z-[9999] shadow-[0_0_8px_rgba(99,102,241,0.6)] hidden md:block" id="custom-cursor" style={{top: `-10px`, left: `-10px`}}></div>
<div className="fixed w-4 h-4 bg-indigo-500/20 border border-indigo-500/30 rounded-full pointer-events-none z-[9998] hidden md:block transition-transform duration-75" id="custom-cursor-trailer" style={{top: `-20px`, left: `-20px`}}></div>

<div className="aura-background-component fixed top-0 w-full h-screen -z-10 opacity-40 transition-transform duration-300 ease-out" data-alpha-mask="100" style={{maskImage: `linear-gradient(to bottom, transparent, black 0%, black 100%, transparent)`}}><div className="spline-container absolute top-0 left-0 w-full h-full -z-10"><iframe frameborder="0" height="100%" src="https://my.spline.design/crystalball-de222de54d6fc4752fa850b54fb654de/" width="100%"></iframe></div></div>

<div className="fixed inset-0 z-0 pointer-events-none bg-grid"></div>
<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden mix-blend-normal">
<div className="absolute top-[-30%] left-[-20%] w-[70vw] h-[70vw] rounded-full aura-purple blur-[100px]"></div>
<div className="absolute bottom-[-30%] right-[-20%] w-[60vw] h-[60vw] rounded-full aura-blue blur-[120px]"></div>
<div className="absolute top-[40%] left-[60%] w-[50vw] h-[50vw] rounded-full aura-indigo blur-[90px] -translate-x-2"></div>
</div>

<nav className="fixed z-50 supports-[backdrop-filter]:bg-white/60 bg-white/80 w-full border-zinc-200 border-b top-0 left-0 backdrop-blur-xl">
<div className="flex max-w-7xl mr-auto ml-auto pt-4 pr-6 pb-4 pl-6 items-center justify-between">
<a className="flex items-center gap-3 group" href="#">
<div className="w-14 h-20 md:w-14 md:h-20 flex items-center justify-center rounded-sm overflow-hidden">
<img alt="A-MAZE Logo" className="w-full h-full object-contain" src="/assets/bb4f2592-d1c7-4007-8941-5dfc41a72282_320w.png?w=800&q=80" />
</div>
<span className="hidden sm:block text-xl font-black text-zinc-900 tracking-tight font-montserrat">A-MAZE</span>
</a>
<div className="hidden lg:flex items-center gap-10">
<a className="hover:text-zinc-900 transition-colors text-sm text-zinc-500" href="/#team">About us</a><a className="hover:text-zinc-900 transition-colors text-sm text-zinc-500" href="/#mission">Mission</a>
<a className="hover:text-zinc-900 transition-colors text-sm text-zinc-500" href="#services">Services</a>
<a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#case-studies">Case studies</a>
<a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#contact">Contact</a>
</div>
<button className="group flex overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(147,51,234,0.5)] focus:outline-none text-sm font-medium text-white tracking-widest font-geist rounded-full pt-2.5 pr-10 pb-2.5 pl-10 relative items-center justify-center" onClick={(e) => { document.getElementById('contact').scrollIntoView({behavior:'smooth'}) }}>


<div className="absolute inset-0 -z-20 rounded-full overflow-hidden p-[1px]">
<div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#9333ea_360deg)]" style={{animation: `beam-spin 3s linear infinite`}}></div>
<div className="absolute inset-[1px] rounded-full bg-black"></div>
</div>

<div className="-z-10 overflow-hidden bg-zinc-950 rounded-full absolute top-[2px] right-[2px] bottom-[2px] left-[2px]">
<div className="bg-gradient-to-b from-zinc-800/60 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="opacity-30 mix-blend-overlay absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: `radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)`, backgroundSize: `12px 12px`, animation: `dots-move 8s linear infinite`}}></div>
<div className="-translate-x-1/2 pointer-events-none transition-colors duration-500 group-hover:bg-purple-500/40 bg-purple-500/20 w-2/3 h-1/2 rounded-full absolute bottom-0 left-1/2 blur-2xl"></div>
</div>

<span className="transition-colors group-hover:text-white flex items-center gap-2 text-white/90 font-montserrat z-10 relative normal-case tracking-normal">
        Initiate Project
        <iconify-icon className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</button>
</div>
</nav>
<main className="md:pt-40 z-10 pt-40 pb-24 relative">

<section className="max-w-7xl mr-auto mb-24 ml-auto pr-6 pl-6 relative">
<div className="w-full aspect-[16/9] md:aspect-[2/1] bg-zinc-900 rounded-xl overflow-hidden relative group shadow-sm">
<div className="hero-slide transition-opacity duration-1000 z-10 absolute top-0 right-0 bottom-0 left-0" id="hero-slide-0" style={{zIndex: `0`}}>
<img alt="Slide 1" className="w-full h-full object-cover opacity-90" src="/assets/a76eb22a-d0ec-4dc5-be1c-cfa36d30c6e9_3840w.jpg" />
</div>
<div className="hero-slide transition-opacity duration-1000 z-0 absolute top-0 right-0 bottom-0 left-0" id="hero-slide-1" style={{zIndex: `0`}}>
<img alt="Slide 2" className="w-full h-full object-cover opacity-90" src="/assets/ad9c6f4f-8653-4984-aa0d-1ba10d74cb26_800w.jpg" />
</div>
<div className="hero-slide transition-opacity duration-1000 absolute top-0 right-0 bottom-0 left-0" id="hero-slide-2" style={{zIndex: `0`}}>
<img alt="Slide 3" className="w-full h-full object-cover opacity-90" src="/assets/b85f88f4-6bf5-4716-b20f-8c30c09f32aa_800w.jpg" />
</div>
<div className="hero-slide transition-opacity duration-1000 absolute top-0 right-0 bottom-0 left-0" id="hero-slide-3" style={{zIndex: `10`}}>
<img alt="Slide 4" className="transition ease-in-out opacity-90 w-full h-full object-cover" src="/assets/0e608d91-80b8-4208-bcb6-0a833e85a3c1_3840w.jpg" />
</div>
<div className="pointer-events-none z-20 bg-gradient-to-t from-[#030305]/60 via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0">
</div>
<button className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/20 hover:scale-105 z-30" onClick={(e) => { prevSlide() }}>
<iconify-icon className="" icon="solar:alt-arrow-left-linear" width="24"></iconify-icon>
</button>
<button className="-translate-y-1/2 flex group-hover:opacity-100 transition-opacity hover:bg-white/20 hover:scale-105 z-30 text-white bg-white/10 opacity-0 w-12 h-12 border-white/20 border rounded-full absolute top-1/2 right-6 backdrop-blur-md items-center justify-center" onClick={(e) => { nextSlide() }}>
<iconify-icon className="" height="24" icon="solar:alt-arrow-right-linear" style={{color: `rgb(255, 255, 255)`}} width="24"></iconify-icon>
</button>
<div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-30">
<button className="hero-dot w-2 h-2 rounded-full transition-all shadow-sm" onClick={(e) => { goToSlide(0) }}></button>
<button className="hero-dot w-2 h-2 rounded-full hover:bg-white/80 transition-all shadow-sm" onClick={(e) => { goToSlide(1) }}></button>
<button className="hero-dot w-2 h-2 rounded-full hover:bg-white/80 transition-all shadow-sm" onClick={(e) => { goToSlide(2) }}></button>
<button className="hero-dot w-2 h-2 rounded-full hover:bg-white/80 transition-all shadow-sm" onClick={(e) => { goToSlide(3) }}></button>
</div>
</div>
</section>

<section className="max-w-7xl mr-auto mb-32 ml-auto pr-6 pl-6 relative" id="about">
<div className="flex items-center gap-3 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
<span className="uppercase text-xs font-medium text-indigo-600 tracking-widest">Mission</span>
</div>
<div className="flex flex-col gap-12 lg:gap-16">
<div className="w-full">
<h2 className="leading-[1.1] md:text-5xl lg:text-6xl text-4xl font-medium text-zinc-900 tracking-tight">Transforming
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600">visionary</span>
          concepts
        </h2>
<h2 className="leading-[1.1] md:text-5xl lg:text-6xl text-4xl font-medium text-zinc-900 tracking-tight"> into
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600">groundbreaking</span>
          realities.
        </h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
<div className="lg:col-span-2 flex flex-col gap-6">
<p className="leading-relaxed md:text-lg text-lg font-light text-zinc-600">
            We specialize in crafting unforgettable live experiences. From the FII to the Red Sea Global Launch, our
            team orchestrates flawless monumental events across the globe.
          </p>
<p className="leading-relaxed text-lg font-light text-zinc-500">
            Our multidisciplinary approach blends artistic vision with technical precision. We tell compelling stories
            and design multi-sensorial environments that cut through the noise. Innovation is at the heart of everything
            we do.
          </p>
</div>
<div className="lg:col-span-1 lg:pt-2">
<div className="flex flex-col gap-3 border-l-2 border-indigo-500/20 pl-6">
<div className="text-xs text-zinc-400 uppercase tracking-widest font-medium">Global Reach</div>
<div className="text-base font-medium text-zinc-400 tracking-tight">Riyadh • Dubai • Beirut • Doha • Berlin
            </div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto mb-32 px-6" id="services">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
<div className="">
<h2 className="md:text-4xl text-3xl font-medium text-zinc-900 tracking-tight mb-4">Our departments</h2>
<p className="text-lg font-light text-zinc-600 max-w-2xl">A multidisciplinary approach blending artistic vision with
          technical precision. From visual experiences to digital expressions, we design environments that cut through
          the noise.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
<div className="glass-panel group hover:border-indigo-200 hover:bg-zinc-50 transition-all duration-300 rounded-xl p-8">
<div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-indigo-600" icon="solar:pen-new-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-900 tracking-tight mb-3">House of Strategy</h3>
<p className="leading-relaxed text-sm font-light text-zinc-600">Developing unique tailored narratives and strategies
          for monumental, large-scale experiences.</p>
</div>
<div className="glass-panel p-8 rounded-xl group hover:border-purple-200 hover:bg-zinc-50 transition-all duration-300">
<div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-purple-600" icon="solar:masks-outline" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-900 tracking-tight mb-3">House of Scenography</h3>
<p className="leading-relaxed text-sm font-light text-zinc-600">Architecting immersive spatial designs that
          transform standard venues into otherworldly realms.</p>
</div>
<div className="glass-panel p-8 rounded-xl group hover:border-blue-200 hover:bg-zinc-50 transition-all duration-300">
<div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-blue-600" icon="solar:settings-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-900 tracking-tight mb-3">House of Architecture</h3>
<p className="leading-relaxed text-sm font-light text-zinc-600">Flawless execution of complex floor planning,
          modélisation and visualization for clients and production.</p>
</div>
<div className="glass-panel group hover:border-indigo-200 hover:bg-zinc-50 transition-all duration-300 rounded-xl p-8">
<div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-indigo-600" icon="solar:magic-stick-3-outline" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-900 tracking-tight mb-3">House of Art Direction</h3>
<p className="leading-relaxed text-sm font-light text-zinc-600">Developing creative high-touch branding and 2D/3D or
          animated visual content.</p>
</div>
<div className="glass-panel group hover:border-indigo-200 hover:bg-zinc-50 transition-all duration-300 rounded-xl p-8">
<div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-indigo-600" icon="solar:users-group-two-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-900 tracking-tight mb-3">House of Hospitality</h3>
<p className="leading-relaxed text-sm font-light text-zinc-600">Curating seamless cultural and sensorial moments
          from invitation to final departure.</p>
</div>
</div>
</section>

<section className="z-10 max-w-7xl mr-auto mb-32 ml-auto pr-6 pl-6 relative" id="case-studies">
<div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-6">
<div className="">
<h2 className="md:text-4xl text-3xl font-medium text-zinc-900 tracking-tight mb-2">Case studies</h2>
<p className="text-base text-zinc-600 font-light">Selected highlights from our global event footprint.</p>
</div>
<button className="text-sm font-medium border border-zinc-200 bg-white text-zinc-900 px-6 py-2.5 rounded-full hover:bg-zinc-50 transition-all flex items-center gap-2 group shadow-sm shrink-0">
                    View Archive
                    <iconify-icon className="w-4 h-4 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">

<div className="lg:col-span-8">
<a className="group block relative rounded-2xl overflow-hidden bg-zinc-900 h-[300px] lg:h-[600px] w-full shadow-sm border border-black/5" href="#">
<img alt="FII 8th Edition" className="transition-transform duration-700 group-hover:scale-105 opacity-90 w-full h-full object-cover" src="/assets/a76eb22a-d0ec-4dc5-be1c-cfa36d30c6e9_1600w.jpg" />
<div className="bg-gradient-to-t from-black/80 via-black/20 to-transparent absolute top-0 right-0 bottom-0 left-0">
</div>
<div className="absolute bottom-0 left-0 p-8 w-full flex justify-between items-end">
<div className="">
<h3 className="md:text-3xl text-2xl font-medium text-white tracking-tight mb-2">Future of Investment
                Initiative (FII9)</h3>
<p className="text-sm font-light text-zinc-300">Riyadh • Orchestrating monumental gathering of global leaders
                and visionaries in an immersive, cutting-edge environement.</p>
</div>
<div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-4 group-hover:translate-x-0">
<iconify-icon icon="solar:arrow-right-up-linear" width="24"></iconify-icon>
</div>
</div>
</a>
</div>

<div className="lg:col-span-4 flex flex-col gap-6">

<a className="group block relative rounded-2xl overflow-hidden bg-zinc-900 flex-1 min-h-[250px] lg:h-[288px] shadow-sm border border-black/5" href="#">
<img alt="Red Sea Global Launch" className="transition-transform duration-700 group-hover:scale-105 opacity-90 w-full h-full object-cover" src="/assets/ad9c6f4f-8653-4984-aa0d-1ba10d74cb26_800w.jpg" />
<div className="bg-gradient-to-t from-black/80 via-black/20 to-transparent absolute top-0 right-0 bottom-0 left-0">
</div>
<div className="absolute bottom-0 left-0 p-6 w-full flex justify-between items-end">
<div className="">
<h3 className="text-xl font-medium text-white tracking-tight mb-1">Ithra Museum</h3>
<p className="text-xs font-light text-zinc-300">Dubai • Cultural Exhibition</p>
</div>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
</div>
</a>

<a className="group block relative rounded-2xl overflow-hidden bg-zinc-900 flex-1 min-h-[250px] lg:h-[288px] shadow-sm border border-black/5" href="#">
<img alt="Doha Tech Summit" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90" src="/assets/b85f88f4-6bf5-4716-b20f-8c30c09f32aa_800w.jpg" />
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6 w-full flex justify-between items-end">
<div className="">
<h3 className="text-xl font-medium text-white tracking-tight mb-1">Red Sea Launch Event</h3>
<p className="text-xs font-light text-zinc-300">Sheybara,Shura,Desert Rock,Southern dunes • Destination reveal
              </p>
</div>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
</div>
</a>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 border-purple-500/20 border-t gap-x-0 gap-y-0">
<div className="flex group cursor-pointer first:pt-0 md:first:pt-4 border-purple-500/20 border-b pt-4 pb-4 items-center justify-between md:pr-12">
<div className="flex flex-col gap-1">
<span className="text-zinc-900 font-medium group-hover:text-indigo-600 transition-colors text Murabba</span> <span class=" font-light="" text-xs="">Riyadh · Immersive Live Experience</span>
</div>
<iconify-icon className="text-zinc-400 group-hover:text-indigo-600 transition-colors shrink-0 ml-4" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</div>
<div className="flex items-center justify-between group cursor-pointer border-b border-purple-500/20 pb-4 pt-4 md:px-12">
<div className="flex flex-col gap-1">
<span className="text-zinc-900 font-medium group-hover:text-indigo-600 transition-colors text-sm">NEOM</span>
<span className="text-xs font-light text-zinc-400">Tabuk · Futuristic Tourism Unveiling</span>
</div>
<iconify-icon className="text-zinc-400 group-hover:text-indigo-600 transition-colors shrink-0 ml-4" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</div>
<div className="flex items-center justify-between group cursor-pointer border-b border-purple-500/20 pb-4 pt-4 md:pl-12">
<div className="flex flex-col gap-1">
<span className="group-hover:text-indigo-600 transition-colors text-sm font-medium text-zinc-900">CIC conference</span>
<span className="text-zinc-400 text-xs font-light">Doha · Leadership summit</span>
</div>
<iconify-icon className="text-zinc-400 group-hover:text-indigo-600 transition-colors shrink-0 ml-4" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</div>
<div className="flex items-center justify-between group cursor-pointer border-b border-purple-500/20 pb-4 pt-4 md:pr-12">
<div className="flex flex-col gap-1">
<span className="text-zinc-900 font-medium group-hover:text-indigo-600 transition-colors text-sm">C100 x Qatar Airways</span>
<span className="text-xs font-light text-zinc-400">Doha · Exclusive Brand partnership activation</span>
</div>
<iconify-icon className="text-zinc-400 group-hover:text-indigo-600 transition-colors shrink-0 ml-4" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</div>
<div className="flex items-center justify-between group cursor-pointer border-b border-purple-500/20 pb-4 pt-4 md:px-12">
<div className="flex flex-col gap-1">
<span className="text-zinc-900 font-medium group-hover:text-indigo-600 transition-colors text-sm">Riyadh Metro Launch</span>
<span className="text-zinc-400 text-xs font-light">Riyadh · Public infrastructure reveal</span>
</div>
<iconify-icon className="text-zinc-400 group-hover:text-indigo-600 transition-colors shrink-0 ml-4" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</div>
<div className="flex items-center justify-between group cursor-pointer border-b border-purple-500/20 pb-4 pt-4 md:pl-12">
<div className="flex flex-col gap-1">
<span className="text-zinc-900 font-medium group-hover:text-indigo-600 transition-colors text-sm">Qatar F1</span>
<span className="text-zinc-400 text-xs font-light">Lusail · Motorsport hospitality</span>
</div>
<iconify-icon className="text-zinc-400 group-hover:text-indigo-600 transition-colors shrink-0 ml-4" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</div>
<div className="flex items-center justify-between group cursor-pointer border-b border-purple-500/20 pb-4 pt-4 md:pr-12">
<div className="flex flex-col gap-1">
<span className="text-zinc-900 font-medium group-hover:text-indigo-600 transition-colors text-sm">CEER Launch</span>
<span className="text-zinc-400 text-xs font-light">Riyadh · EV brand debut event</span>
</div>
<iconify-icon className="text-zinc-400 group-hover:text-indigo-600 transition-colors shrink-0 ml-4" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</div>
<div className="flex items-center justify-between group cursor-pointer border-b border-purple-500/20 pb-4 pt-4 md:px-12">
<div className="flex flex-col gap-1">
<span className="text-zinc-900 font-medium group-hover:text-indigo-600 transition-colors text-sm">E-Sports WorldCup</span>
<span className="text-xs font-light text-zinc-400">Riyadh · Global Tournament Arenas</span>
</div>
<iconify-icon className="text-zinc-400 group-hover:text-indigo-600 transition-colors shrink-0 ml-4" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</div>
<div className="flex items-center justify-between group cursor-pointer border-b border-purple-500/20 pb-4 pt-4 md:pl-12">
<div className="flex flex-col gap-1">
<span className="text-zinc-900 font-medium group-hover:text-indigo-600 transition-colors text-sm">Red Sea Film Festival</span>
<span className="text-zinc-400 text-xs font-light">Jeddah · Cinematic arts celebration</span>
</div>
<iconify-icon className="text-zinc-400 group-hover:text-indigo-600 transition-colors shrink-0 ml-4" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32" id="showcase">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="order-2 lg:order-1">
<div className="flex items-center gap-3 mb-6">
<iconify-icon className="text-indigo-600" icon="solar:play-circle-linear" width="24"></iconify-icon>
<span className="text-xs tracking-widest text-indigo-600 uppercase font-medium">Annual Highlight</span>
</div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6 text-zinc-900">2025 Showcase Reel</h2>
<p className="text-base text-zinc-600 leading-relaxed mb-6 font-light">
          A definitive look back at our most ambitious and visually stunning productions of the past year.
          We are immensely grateful for the continuous trust our partners place in us, allowing us to push
          the boundaries of experiential design, architecture, and live scenography globally.
        </p>
<button className="text-sm font-medium text-zinc-900 hover:text-indigo-600 transition-colors flex items-center gap-2 group">
                        Explore Full Archive
                        <iconify-icon className="w-4 h-4 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="order-1 lg:order-2 glass-panel rounded-2xl pt-2 pr-2 pb-2 pl-2 shadow-sm">
<div className="rounded-xl overflow-hidden aspect-video relative bg-zinc-900 group">
<div className="" style={{padding: `56.25% 0 0 0`, position: `relative`}}>
<iframe allow="autoplay; fullscreen; picture-in-picture;
        referrerpolicy=" className="" data-ready="true" frameborder="0" src="https://player.vimeo.com/video/1146567370?h=4856f182bb&autopause=0&player_id=0&app_id=58479;title=0&byline=0&portrait=0" style={{position: `absolute`, top: `0`, left: `0`, width: `100%`, height: `100%`}}></iframe>
</div>

</div>
</div>
</div>
</section>

<section className="max-w-7xl mr-auto mb-32 ml-auto pr-6 pl-6" id="metrics">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
<div className="">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 text-zinc-900">Precision at Scale</h2>
<p className="text-base font-light text-zinc-600 max-w-md">Our financial footprint and execution capacity have
          scaled exponentially as we take on the region's most ambitious budgets.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="glass-panel flex flex-col h-[480px] rounded-xl pt-10 pr-10 pb-10 pl-10 relative">
<div className="flex justify-between items-start mb-6">
<div className="">
<span className="text-xs text-zinc-500 uppercase tracking-widest font Volume</span> <h3 class=" font-medium="" text-xl="" text-zinc-900="" tracking-tight="">Completed vs Signed
        </span>
</div>
<div className="flex flex-col gap-1 text-xs items-end">
<span className="flex items-center gap-1 text-zinc-600"><span className="w-2 h-2 rounded-full bg-indigo-500"></span>
            Projects Done</span>
<span className="flex items-center gap-1 text-zinc-600"><span className="w-2 h-2 rounded-full bg-purple-300"></span>
            Projects Signed</span>
</div>
</div>
<div className="flex-1 relative mt-4">
<div className="absolute -left-2 top-0 bottom-8 flex flex-col justify-between text-[10px] text-zinc-400 font-mono z-20">
<span>25</span><span>20</span><span>15</span><span>10</span><span>5</span><span>0</span>
</div>
<div className="absolute left-4 right-0 top-0 bottom-8 flex flex-col justify-between pointer-events-none">
<div className="w-full border-t border-zinc-100 h-0"></div>
<div className="w-full border-t border-zinc-100 h-0"></div>
<div className="w-full border-t border-zinc-100 h-0"></div>
<div className="w-full border-t border-zinc-100 h-0"></div>
<div className="w-full border-t border-zinc-100 h-0"></div>
<div className="w-full border-t border-zinc-300 h-0 z-10"></div>
</div>

<div className="absolute left-8 right-0 top-0 bottom-8 flex justify-around items-end z-10">

<div className="w-full max-w-[56px] h-full flex flex-col justify-end items-center relative group/bar chart-bar">
<div className="w-full flex flex-col justify-end shadow-sm" style={{height: `64%`}}>
<div className="bg-purple-300 w-full rounded-t-sm" style={{height: `25%`}}></div>
<div className="bg-indigo-500 w-full rounded-b-sm" style={{height: `75%`}}></div>
</div>
<span className="absolute -bottom-7 text-xs text-zinc-500 font-mono">2023</span>
</div>

<div className="w-full max-w-[56px] h-full flex flex-col justify-end items-center relative group/bar chart-bar" style={{animationDelay: `100ms`}}>
<div className="w-full flex flex-col justify-end shadow-sm" style={{height: `84%`}}>
<div className="bg-purple-300 w-full rounded-t-sm" style={{height: `28.5%`}}></div>
<div className="bg-indigo-500 w-full rounded-b-sm" style={{height: `71.5%`}}></div>
</div>
<span className="absolute -bottom-7 text-xs text-zinc-700 font-mono">2024</span>
</div>

<div className="w-full max-w-[56px] h-full flex flex-col justify-end items-center relative group/bar chart-bar" style={{animationDelay: `200ms`}}>
<div className="w-full flex flex-col justify-end shadow-sm" style={{height: `92%`}}>
<div className="bg-purple-300 w-full rounded-t-sm" style={{height: `30.4%`}}></div>
<div className="bg-indigo-500 w-full rounded-b-sm" style={{height: `69.6%`}}></div>
</div>
<span className="absolute -bottom-7 text-xs text-zinc-900 font-medium font-mono">2026</span>
</div>
</div>
</div>
</div>

<div className="glass-panel px-10 pt-10 pb-10 rounded-xl flex flex-col h-[480px] relative">
<div className="flex justify-between items-start mb-4">
<div className="">
<span className="text-xs text-zinc-500 uppercase tracking-widest font-medium">Capabilities</span>
<h3 className="text-xl font-medium tracking-tight text-zinc-900 mt-1">Our Agency vs Industry</h3>
</div>
<div className="flex flex-col gap-1 text-xs items-end">
<span className="flex items-center gap-1 text-zinc-600"><span className="w-2 h-2 rounded-full bg-indigo-500"></span>
            Us</span>
<span className="flex items-center gap-1 text-zinc-600"><span className="w-2 h-2 rounded-full bg-zinc-300"></span>
            Average</span>
</div>
</div>
<div className="flex-1 w-full h-full flex justify-center items-center py-4">
<svg className="w-full h-full max-w-[340px] overflow-visible" viewBox="-40 -40 280 280">

<line className="stroke-zinc-200" strokeWidth="1"></line>
<line className="stroke-zinc-200" strokeWidth="1"></line>
<line className="stroke-zinc-200" strokeWidth="1"></line>
<line className="stroke-zinc-200" strokeWidth="1"></line>
<line className="stroke-zinc-200" strokeWidth="1"></line>
<line className="stroke-zinc-200" strokeWidth="1"></line>

<polygon className="stroke-zinc-200" fill="none" points="100,20 169.3,60 169.3,140 100,180 30.7,140 30.7,60" strokeWidth="1"></polygon>
<polygon className="stroke-zinc-200" fill="none" points="100,40 152,70 152,130 100,160 48,130 48,70" strokeWidth="1"></polygon>
<polygon className="stroke-zinc-200" fill="none" points="100,60 134.6,80 134.6,120 100,140 65.4,120 65.4,80" strokeWidth="1"></polygon>
<polygon className="stroke-zinc-200" fill="none" points="100,80 117.3,90 117.3,110 100,120 82.7,110 82.7,90" strokeWidth="1"></polygon>

<polygon className="text-zinc-300/40 stroke-zinc-400" fill="currentColor" points="100,60 130.3,82.5 139,122.5 100,140 69.7,117.5 65.4,80" strokeLinejoin="round" strokeWidth="1"></polygon>

<polygon className="text-indigo-500/20 stroke-indigo-500" fill="currentColor" points="100,24 162.3,64 165.8,138 100,168 41.1,134 37.6,64" strokeLinejoin="round" strokeWidth="2"></polygon>

<text className="text-[10px] fill-zinc-600 font-medium" text-anchor="middle">Creativity</text>
<text className="text-[10px] fill-zinc-600 font-medium" text-anchor="start">Skills</text>
<text className="text-[10px] fill-zinc-600 font-medium" text-anchor="start">Performance</text>
<text className="text-[10px] fill-zinc-600 font-medium" text-anchor="middle">Effectiveness</text>
<text className="text-[10px] fill-zinc-600 font-medium" text-anchor="end">Contribution</text>
<text className="text-[10px] fill-zinc-600 font-medium" text-anchor="end">Sales</text>
</svg>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-16" id="team">
<h2 className="md:text-4xl text-3xl font-medium text-zinc-900 tracking-tight mb-12">Minds behind the magic</h2>
<p className="text-base font-light text-zinc-600 max-w-5xl mt-8 mb-8">Led by a core group of worldwide industry talented
      seniors, uniting decades of global experience in high-end live events.</p>

<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
<div className="group cursor-pointer">
<div className="aspect-[3/4] rounded-xl overflow-hidden bg-zinc-100 mb-4 shadow-sm border border-black/5 relative">
<img alt="Executive Director" className="group-hover:grayscale-0 transition-all duration-500 w-full h-full object-cover grayscale" src="/assets/f8ed1436-2945-43b6-ad61-6db6451870d9_800w.jpg?w=800&q=80" />
</div>
<h4 className="text-sm font-medium text-zinc-900 tracking-tight">Robert Chouchani</h4>
<p className="text-xs text-zinc-500">CEO</p>
</div>
<div className="group cursor-pointer">
<div className="aspect-[3/4] rounded-xl overflow-hidden bg-zinc-100 mb-4 shadow-sm border border-black/5 relative">
<img alt="Lead Scenographer" className="group-hover:grayscale-0 transition-all duration-500 w-full h-full object-cover grayscale" src="/assets/17fe7386-8c1d-416d-9998-48202c6ad714_800w.jpg?w=800&q=80" />
</div>
<h4 className="text-sm font-medium text-zinc-900 tracking-tight">Dominique Chouchani</h4>
<p className="text-xs text-zinc-500">Founder & Managing Director</p>
</div>
<div className="group cursor-pointer">
<div className="aspect-[3/4] rounded-xl overflow-hidden bg-zinc-100 mb-4 shadow-sm border border-black/5 relative">
<img alt="Head of Strategy" className="group-hover:grayscale-0 transition-all duration-500 w-full h-full object-cover grayscale" src="/assets/41524233-fab6-482f-b80f-06690aabfd2f_800w.png?w=800&q=80" />
</div>
<h4 className="text-sm font-medium text-zinc-900 tracking-tight">Eva Neem</h4>
<p className="text-xs text-zinc-500">Head of Projects Management</p>
</div>
<div className="group cursor-pointer">
<div className="aspect-[3/4] rounded-xl overflow-hidden bg-zinc-100 mb-4 shadow-sm border border-black/5 relative">
<img alt="Technical Director" className="group-hover:grayscale-0 transition-all duration-500 w-full h-full object-cover grayscale" src="/assets/de90f17a-7e49-44d9-9c7a-9bbb36b5872e_800w.jpg" />
</div>
<h4 className="text-sm font-medium text-zinc-900 tracking-tight">Nicolas André</h4>
<p className="text-xs text-zinc-500">Head of Scenography</p>
</div>
<div className="group cursor-pointer">
<div className="aspect-[3/4] rounded-xl overflow-hidden bg-zinc-100 mb-4 shadow-sm border border-black/5 relative">
<img alt="Art Director" className="group-hover:grayscale-0 transition-all duration-500 w-full h-full object-cover grayscale" src="/assets/6ef5a611-be9b-43db-b854-87e86cd837aa_800w.jpg?w=800&q=80" />
</div>
<h4 className="text-sm font-medium text-zinc-900 tracking-tight">Diane Zouein</h4>
<p className="text-xs text-zinc-500">Head of Art Direction</p>
</div>
<div className="group cursor-pointer">
<div className="aspect-[3/4] rounded-xl overflow-hidden bg-zinc-100 mb-4 shadow-sm border border-black/5 relative">
<img alt="Production Lead" className="group-hover:grayscale-0 transition-all duration-500 w-full h-full object-cover grayscale" src="/assets/5a78fd5e-f225-4b49-8759-4bdd0e99db6a_800w.jpg" />
</div>
<h4 className="text-sm font-medium text-zinc-900 tracking-tight">Mo Fayad</h4>
<p className="text-xs text-zinc-500">Senior Scriptwriter and Researcher</p>
</div>
<div className="group cursor-pointer">
<div className="aspect-[3/4] rounded-xl overflow-hidden bg-zinc-100 mb-4 shadow-sm border border-black/5 relative">
<img alt="Experience Designer" className="group-hover:grayscale-0 transition-all duration-500 w-full h-full object-cover grayscale" src="/assets/8450ef0c-32f3-4fda-aee8-a18c27fcaa52_800w.png" />
</div>
<h4 className="text-sm font-medium text-zinc-900 tracking-tight">Wendoly Monteiro Da Costa</h4>
<p className="text-xs text-zinc-500">Management & Business accounts</p>
</div>
<div className="group cursor-pointer">
<div className="aspect-[3/4] rounded-xl overflow-hidden bg-zinc-100 mb-4 shadow-sm border border-black/5 relative">
<img alt="Head of Architecture" className="group-hover:grayscale-0 transition-all duration-500 w-full h-full object-cover grayscale" src="/assets/e9032ca2-f409-4d73-a3c5-b8eac12a6e4b_800w.jpg" />
</div>
<h4 className="text-sm font-medium text-zinc-900 tracking-tight">Ramzi Sfeir</h4>
<p className="text-xs text-zinc-500">Head of Architecture</p>
</div>
</div>

<div className="border-zinc-100 border-t pt-8">
<div className="flex items-center gap-3 mb-8">
<span className="text-xs tracking-widest text-zinc-400 uppercase font-medium">Collaborators & Partners</span>
</div>
<div className="grid grid-cols-4 md:grid-cols-8 gap-x-4 gap-y-4">
<div className="group relative aspect-[3/4] rounded-lg overflow-hidden cursor-pointer shadow-sm border border-black/5">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-purple-800"></div>
<img alt="Collaborator" className="transition-opacity duration-300 group-hover:opacity-0 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0 grayscale" src="/assets/ed9db8f1-6111-41c8-85a2-e981b7b1a7c3_320w.jpg" />
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-2">
<span className="text-xs font-medium text-white tracking-tight block">Emilia T.</span>
</div>
</div>
<div className="group relative aspect-[3/4] rounded-lg overflow-hidden cursor-pointer shadow-sm border border-black/5">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-purple-800"></div>
<img alt="Collaborator" className="transition-opacity duration-300 group-hover:opacity-0 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0 grayscale" src="/assets/8e73a3ab-2eff-4d27-bee8-65f8dea70c24_320w.jpg?w=800&q=80" />
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-2">
<span className="text-xs font-medium text-white tracking-tight block">Maria S.</span>
</div>
</div>
<div className="group relative aspect-[3/4] rounded-lg overflow-hidden cursor-pointer shadow-sm border border-black/5">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-purple-800"></div>
<img alt="Collaborator" className="transition-opacity duration-300 group-hover:opacity-0 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0 grayscale" src="/assets/b9186a42-bafb-4981-b6e8-208312a3f98f_320w.jpg" />
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-2">
<span className="text-xs font-medium text-white tracking-tight block">Pierre-Yves</span>
</div>
</div>
<div className="group relative aspect-[3/4] rounded-lg overflow-hidden cursor-pointer shadow-sm border border-black/5">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-purple-800"></div>
<img alt="Collaborator" className="transition-opacity duration-300 group-hover:opacity-0 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0 grayscale" src="/assets/90580801-b9eb-4acd-b6c5-00c9b190fede_320w.jpg?w=800&q=80" />
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-2">
<span className="text-xs font-medium text-white tracking-tight block">Carl F.</span>
</div>
</div>
<div className="group relative aspect-[3/4] rounded-lg overflow-hidden cursor-pointer shadow-sm border border-black/5">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-purple-800"></div>
<img alt="Collaborator" className="transition-opacity duration-300 group-hover:opacity-0 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0 grayscale" src="/assets/419ecd99-2e8b-4fae-ba1e-6b8a5ac99112_320w.jpg" />
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-2">
<span className="text-xs font-medium text-white tracking-tight block">Vincent. D</span>
</div>
</div>
<div className="group relative aspect-[3/4] rounded-lg overflow-hidden cursor-pointer shadow-sm border border-black/5">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-purple-800"></div>
<img alt="Collaborator" className="transition-opacity duration-300 group-hover:opacity-0 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0 grayscale" src="/assets/486df25d-882d-4d1f-95a9-5b8528511cd6_320w.jpg" />
<div className="bg-gradient-to-t from-black/60 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 right-0 p-2">
<span className="text-xs font-medium text-white tracking-tight block">Alland B.</span>
</div>
</div>
<div className="group relative aspect-[3/4] rounded-lg overflow-hidden cursor-pointer shadow-sm border border-black/5">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-purple-800"></div>
<img alt="Collaborator" className="transition-opacity duration-300 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0 grayscale" src="/assets/b2a1aa51-3069-4686-ac56-207179c18d11_320w.jpg" />
<div className="bg-gradient-to-t from-black/60 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 right-0 p-2">
<span className="text-white font-medium text-xs tracking-tight block">Cedric B.</span>
</div>
</div>
<div className="group relative aspect-[3/4] rounded-lg overflow-hidden cursor-pointer shadow-sm border border-black/5">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-purple-800"></div>
<img alt="Collaborator" className="transition-opacity duration-300 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0 grayscale" src="/assets/6c1acc9f-a5c7-4b2e-b0da-0ae2f549a75b_320w.jpg" />
<div className="bg-gradient-to-t from-black/60 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 right-0 p-2">
<span className="block text-xs font-medium text-white tracking-tight">Till</span>
</div>
</div>
</div>
</div>
</section>

<section className="z-10 bg-white/30 border-zinc-100/50 border-t border-b mb-24 pt-12 pb-12 relative backdrop-blur-md">
<div className="marquee-text-container">
<div className="marquee-text-content text-2xl md:text-3xl font-medium text-zinc-300 tracking-tight flex gap-12 items-center">
<span className="hover:text-zinc-600 transition-colors cursor-default">Richard Attias & Associates</span><span>•</span>
<span className="hover:text-zinc-600 transition-colors cursor-default">Auditoire</span><span className="">•</span>
<span className="hover:text-zinc-600 transition-colors cursor-default">HQWS</span><span className="">•</span>
<span className="hover:text-zinc-600 transition-colors cursor-default">Ithra Museum</span><span className="">•</span>
<span className="hover:text-zinc-600 transition-colors cursor-default">Royal Commission for AlUla</span><span>•</span>
<span className="hover:text-zinc-600 transition-colors cursor-default">Diriyah Gate</span><span>•</span>

<span className="hover:text-zinc-600 transition-colors cursor-default">Richard Attias & Associates</span><span>•</span>
<span className="hover:text-zinc-600 transition-colors cursor-default">Auditoire</span><span>•</span>
<span className="hover:text-zinc-600 transition-colors cursor-default">HQWS</span><span>•</span>
<span className="hover:text-zinc-600 transition-colors cursor-default">Ithra Museum</span><span>•</span>
<span className="hover:text-zinc-600 transition-colors cursor-default">Royal Commission for AlUla</span><span>•</span>
<span className="hover:text-zinc-600 transition-colors cursor-default">Diriyah Gate</span><span>•</span>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32 relative" id="contact">
<div className="glass-panel rounded-2xl p-8 md:p-16 text-center max-w-4xl mx-auto">
<h2 className="md:text-4xl text-3xl font-medium text-zinc-900 tracking-tight mb-6">Ready to work with us ?</h2>
<p className="text-zinc-600 mb-10 font-light leading-relaxed max-w-2xl mx-auto">
        Whether you are looking to craft a monumental live experience or join our team of visionaries, we want to hear
        from you.
      </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="text-sm font-medium border border-transparent bg-zinc-900 text-white px-8 py-3.5 rounded-full hover:bg-zinc-800 transition-all flex items-center justify-center gap-2 group shadow-sm">
                        Submit a Project
                        <iconify-icon className="w-4 h-4 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="text-sm font-medium border border-zinc-200 bg-white text-zinc-900 px-8 py-3.5 rounded-full hover:bg-zinc-50 transition-all flex items-center justify-center gap-2 group shadow-sm">
                        Join Us
                        <iconify-icon className="w-4 h-4" icon="solar:users-group-rounded-linear"></iconify-icon>
</button>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-zinc-200 pt-20 pb-10 z-10 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-2">
<a className="flex items-center gap-3 mb-6" href="#">
<div className="w-14 h-30 flex items-center justify-center rounded-sm">
<img alt="A-MAZE Logo" className="w-full h-full object-cover" src="/assets/bb4f2592-d1c7-4007-8941-5dfc41a72282_800w.png" />
</div>
<span className="text-xl font-black tracking-tight font-montserrat text-zinc-900">A-MAZE</span>
</a>
<p className="leading-relaxed text-sm font-light text-zinc-600 max-w-lg">
  Crafting unforgettable live experiences and transforming visionary concepts into groundbreaking realities globally.
</p>
</div>
<div className="">
<h4 className="font-medium mb-4 text-sm text-zinc-900">Navigation</h4>
<ul className="space-y-3 text-sm text-zinc-500 font-light">
<li className=""><a className="hover:text-zinc-900 transition-colors" href="#about">About Us</a></li>
<li className=""><a className="hover:text-zinc-900 transition-colors" href="/#mission">Mission</a></li>
<li className=""><a className="hover:text-zinc-900 transition-colors" href="/#services">Services</a></li>
<li className=""><a className="hover:text-zinc-900 transition-colors" href="#case-studies">Case Studies</a></li>
</ul>
</div>
<div>
<h4 className="font-medium mb-4 text-sm text-zinc-900">Social</h4>
<ul className="space-y-3 text-sm text-zinc-500 font-light">
<li><a className="hover:text-zinc-900 transition-colors" href="#">Instagram</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">LinkedIn</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Vimeo</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Twitter</a></li>
</ul>
</div>
</div>
<div className="border-t border-zinc-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500 font-light">
<p>© 2025 Amaze Experiences. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-zinc-900 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
