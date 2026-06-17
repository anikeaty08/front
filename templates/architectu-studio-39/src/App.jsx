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



        // Custom Cursor Logic
        const cursorDot = document.querySelector('.cursor-dot');
        const cursorOutline = document.querySelector('.cursor-outline');
        const hoverTriggers = document.querySelectorAll('.hover-trigger, a, button');

        window.addEventListener('mousemove', function(e) {
            const posX = e.clientX;
            const posY = e.clientY;

            // Animate cursor dot
            cursorDot.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 100, fill: "forwards" });

            // Animate cursor outline with slight delay
            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 500, fill: "forwards" });
        });

        // Hover Effect Expansion
        hoverTriggers.forEach(trigger => {
            trigger.addEventListener('mouseenter', () => {
                cursorOutline.classList.add('hovered');
            });
            trigger.addEventListener('mouseleave', () => {
                cursorOutline.classList.remove('hovered');
            });
        });

        // Reveal Elements on Scroll
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-text').forEach(el => {
            observer.observe(el);
        });

        // Floating Image Logic for Index
        const projectItems = document.querySelectorAll('.project-item');
        const revealImg = document.getElementById('reveal-image');

        projectItems.forEach(item => {
            item.addEventListener('mouseenter', (e) => {
                const imgUrl = item.getAttribute('data-img');
                revealImg.src = imgUrl;
                revealImg.classList.add('active');
            });

            item.addEventListener('mouseleave', () => {
                revealImg.classList.remove('active');
            });

            item.addEventListener('mousemove', (e) => {
                const x = e.clientX;
                const y = e.clientY;
                // Offset the image slightly from the cursor
                revealImg.style.left = `${x}px`;
                revealImg.style.top = `${y}px`;
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
      

<div className="cursor-dot hidden md:block"></div>
<div className="cursor-outline hidden md:block"></div>

<img alt="Project Preview" className="hover-reveal-img hidden md:block" id="reveal-image" src=""/>
<div className="noise-bg"></div>

<nav className="fixed top-0 w-full z-40 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
<div className="max-w-[1800px] mx-auto px-6 py-6 flex justify-between items-center">
<a className="text-xl tracking-tighter text-white font-medium flex items-center gap-2 hover-trigger" href="#">
                A<span className="text-neutral-600">/</span>S
            </a>
<div className="hidden md:flex items-center gap-10 text-xs font-medium tracking-widest uppercase text-neutral-500">
<a className="hover:text-white transition-colors hover-trigger" href="#work">Index</a>
<a className="hover:text-white transition-colors hover-trigger" href="#studio">Studio</a>
<a className="hover:text-white transition-colors hover-trigger" href="#process">Research</a>
<a className="hover:text-white transition-colors hover-trigger" href="#contact">Contact</a>
</div>
<button className="md:hidden text-white hover-trigger">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>
<main className="pt-32 pb-20">

<section className="max-w-[1800px] mx-auto px-6 mb-24 md:mb-40">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12">
<div className="md:col-span-8">
<h1 className="reveal-text text-5xl md:text-7xl lg:text-8xl font-medium text-white leading-[1] tracking-tighter mb-8">
                        Constructing silence<br/>
<span className="text-neutral-600">in a noisy world.</span>
</h1>
</div>
<div className="md:col-span-4 flex items-end">
<p className="reveal-text text-lg text-neutral-400 font-light leading-relaxed max-w-sm">
                        An architectural practice based in Copenhagen &amp; Tokyo. We design spaces that honor material integrity and the human condition.
                    </p>
</div>
</div>
</section>

<section className="w-full px-2 md:px-4 mb-32 reveal-text">
<div className="relative w-full aspect-video md:aspect-[2.4/1] overflow-hidden group">
<img alt="Minimal Architecture" className="w-full h-full object-cover grayscale brightness-75 group-hover:scale-105 group-hover:brightness-100 transition-all duration-[2s] ease-out" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
<div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white border border-white/20">
<span className="text-xs uppercase tracking-widest">View</span>
</div>
</div>
</div>
</section>

<section className="w-full py-8 border-y border-neutral-900 mb-32 bg-neutral-950">
<div className="marquee-container">
<div className="marquee-content text-4xl md:text-6xl font-medium text-neutral-800 tracking-tighter uppercase">
                    Architecture for the void   —   Tactile Minimalism   —   Environmental Symbiosis   —   Radical Simplicity   —   Structure as Ornament   —   Architecture for the void   —   Tactile Minimalism   —  
                </div>
</div>
</section>

<section className="max-w-[1800px] mx-auto px-6 mb-32 md:mb-48" id="studio">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
<div className="reveal-text">
<h3 className="text-2xl text-white font-medium tracking-tight mb-6">
                        Subtract to reveal.
                    </h3>
<div className="space-y-6 text-neutral-400 font-light text-lg md:text-xl leading-relaxed">
<p>Our methodology is rooted in reduction. By stripping away the superfluous, we amplify the essential qualities of light, space, and material.</p>
<p>We do not decorate. We articulate structure.</p>
</div>
<div className="mt-12 grid grid-cols-2 gap-8 border-t border-neutral-800 pt-8">
<div>
<span className="text-4xl font-light text-white block mb-2">14</span>
<span className="text-xs uppercase tracking-widest text-neutral-500">International Awards</span>
</div>
<div>
<span className="text-4xl font-light text-white block mb-2">03</span>
<span className="text-xs uppercase tracking-widest text-neutral-500">Global Studios</span>
</div>
</div>
</div>
<div className="reveal-text delay-200 grid grid-cols-2 gap-4">
<img alt="Studio 1" className="w-full aspect-[3/4] object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1506152983158-b4a74a01c721?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<img alt="Studio 2" className="w-full aspect-[3/4] object-cover grayscale hover:grayscale-0 transition-all duration-700 mt-12" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="max-w-[1800px] mx-auto px-6 mb-32 md:mb-48" id="work">
<div className="border-b border-neutral-800 pb-6 mb-6 flex justify-between items-end">
<h4 className="text-xs uppercase tracking-widest text-neutral-500">Selected Index (2021—2024)</h4>
<iconify-icon className="text-neutral-500 text-xl" icon="solar:sort-vertical-linear"></iconify-icon>
</div>
<div className="flex flex-col" id="project-list">

<div className="project-item group relative py-10 border-b border-neutral-900 flex flex-col md:flex-row md:items-baseline justify-between hover:border-neutral-700 transition-colors duration-300 cursor-pointer hover-trigger" data-img="https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&amp;w=1600&amp;auto=format&amp;fit=crop">
<div className="md:w-5/12 z-10 pointer-events-none">
<h3 className="text-3xl md:text-4xl font-light text-neutral-400 group-hover:text-white transition-colors duration-300 tracking-tight">
                            Aesop Shibuya
                        </h3>
</div>
<div className="md:w-3/12 z-10 mt-2 md:mt-0 pointer-events-none">
<span className="text-sm text-neutral-600 group-hover:text-neutral-400 transition-colors">Retail / Interior</span>
</div>
<div className="md:w-2/12 z-10 mt-1 md:mt-0 pointer-events-none">
<span className="text-sm text-neutral-600 group-hover:text-neutral-400 transition-colors">Tokyo, JP</span>
</div>
<div className="md:w-1/12 text-right z-10 mt-1 md:mt-0 pointer-events-none">
<iconify-icon className="text-white opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>

<div className="project-item group relative py-10 border-b border-neutral-900 flex flex-col md:flex-row md:items-baseline justify-between hover:border-neutral-700 transition-colors duration-300 cursor-pointer hover-trigger" data-img="https://images.unsplash.com/photo-1507646227500-4d389b0012be?q=80&amp;w=1600&amp;auto=format&amp;fit=crop">
<div className="md:w-5/12 z-10 pointer-events-none">
<h3 className="text-3xl md:text-4xl font-light text-neutral-400 group-hover:text-white transition-colors duration-300 tracking-tight">
                            Nordic Heritage Museum
                        </h3>
</div>
<div className="md:w-3/12 z-10 mt-2 md:mt-0 pointer-events-none">
<span className="text-sm text-neutral-600 group-hover:text-neutral-400 transition-colors">Cultural</span>
</div>
<div className="md:w-2/12 z-10 mt-1 md:mt-0 pointer-events-none">
<span className="text-sm text-neutral-600 group-hover:text-neutral-400 transition-colors">Oslo, NO</span>
</div>
<div className="md:w-1/12 text-right z-10 mt-1 md:mt-0 pointer-events-none">
<iconify-icon className="text-white opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>

<div className="project-item group relative py-10 border-b border-neutral-900 flex flex-col md:flex-row md:items-baseline justify-between hover:border-neutral-700 transition-colors duration-300 cursor-pointer hover-trigger" data-img="https://images.unsplash.com/photo-1628135893321-c420235d6481?q=80&amp;w=1600&amp;auto=format&amp;fit=crop">
<div className="md:w-5/12 z-10 pointer-events-none">
<h3 className="text-3xl md:text-4xl font-light text-neutral-400 group-hover:text-white transition-colors duration-300 tracking-tight">
                            Monolith House
                        </h3>
</div>
<div className="md:w-3/12 z-10 mt-2 md:mt-0 pointer-events-none">
<span className="text-sm text-neutral-600 group-hover:text-neutral-400 transition-colors">Residential</span>
</div>
<div className="md:w-2/12 z-10 mt-1 md:mt-0 pointer-events-none">
<span className="text-sm text-neutral-600 group-hover:text-neutral-400 transition-colors">Berlin, DE</span>
</div>
<div className="md:w-1/12 text-right z-10 mt-1 md:mt-0 pointer-events-none">
<iconify-icon className="text-white opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>

<div className="project-item group relative py-10 border-b border-neutral-900 flex flex-col md:flex-row md:items-baseline justify-between hover:border-neutral-700 transition-colors duration-300 cursor-pointer hover-trigger" data-img="https://images.unsplash.com/photo-1594809627728-d89069d25514?q=80&amp;w=1600&amp;auto=format&amp;fit=crop">
<div className="md:w-5/12 z-10 pointer-events-none">
<h3 className="text-3xl md:text-4xl font-light text-neutral-400 group-hover:text-white transition-colors duration-300 tracking-tight">
                            Carbon Lab
                        </h3>
</div>
<div className="md:w-3/12 z-10 mt-2 md:mt-0 pointer-events-none">
<span className="text-sm text-neutral-600 group-hover:text-neutral-400 transition-colors">Research / Commercial</span>
</div>
<div className="md:w-2/12 z-10 mt-1 md:mt-0 pointer-events-none">
<span className="text-sm text-neutral-600 group-hover:text-neutral-400 transition-colors">London, UK</span>
</div>
<div className="md:w-1/12 text-right z-10 mt-1 md:mt-0 pointer-events-none">
<iconify-icon className="text-white opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="max-w-[1800px] mx-auto px-6 mb-32 md:mb-48 reveal-text">
<h2 className="text-3xl md:text-4xl font-medium text-white mb-12 tracking-tight">Expertise</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-900 border border-neutral-900">
<div className="bg-[#050505] p-10 hover:bg-neutral-900/40 transition-colors duration-500">
<iconify-icon className="text-neutral-400 text-3xl mb-6" icon="solar:ruler-pen-linear"></iconify-icon>
<h3 className="text-lg text-white font-medium mb-3">Architectural Design</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Concept to execution. We handle complex zoning, structural integration, and aesthetic direction.</p>
</div>
<div className="bg-[#050505] p-10 hover:bg-neutral-900/40 transition-colors duration-500">
<iconify-icon className="text-neutral-400 text-3xl mb-6" icon="solar:armchair-2-linear"></iconify-icon>
<h3 className="text-lg text-white font-medium mb-3">Interior Architecture</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Curating atmosphere through bespoke joinery, lighting design, and material selection.</p>
</div>
<div className="bg-[#050505] p-10 hover:bg-neutral-900/40 transition-colors duration-500">
<iconify-icon className="text-neutral-400 text-3xl mb-6" icon="solar:earth-linear"></iconify-icon>
<h3 className="text-lg text-white font-medium mb-3">Sustainable Research</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Lifecycle analysis and carbon footprint reduction strategies for modern construction.</p>
</div>
</div>
</section>

<section className="max-w-[1800px] mx-auto px-6 mb-32 md:mb-48">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">

<div className="md:col-span-4 h-full">
<div className="sticky top-32">
<span className="block text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-6">Case Study Focus</span>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tighter mb-8 leading-none">
                            Concrete<br/>Symbiosis
                        </h2>
<div className="space-y-6 text-lg text-neutral-400 mb-10 font-light">
<p>
                                Located on the rugged coastline of Iceland, this project explores the tension between permanence and erosion. The structure acts as a framing device for the volatile North Atlantic weather.
                            </p>
</div>
<div className="grid grid-cols-2 gap-y-8 gap-x-4 border-t border-neutral-800 pt-8 mb-10">
<div>
<span className="block text-xs text-neutral-600 uppercase mb-2">Typology</span>
<span className="text-white text-sm">Private Retreat</span>
</div>
<div>
<span className="block text-xs text-neutral-600 uppercase mb-2">Area</span>
<span className="text-white text-sm">450 m²</span>
</div>
<div>
<span className="block text-xs text-neutral-600 uppercase mb-2">Year</span>
<span className="text-white text-sm">2023</span>
</div>
<div>
<span className="block text-xs text-neutral-600 uppercase mb-2">Materials</span>
<span className="text-white text-sm">Basalt, Glass, Ash</span>
</div>
</div>
<a className="group inline-flex items-center gap-2 text-white hover:text-neutral-400 transition-colors hover-trigger" href="#">
                            View Full Case Study 
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="md:col-span-8 flex flex-col gap-6 md:gap-12">

<div className="w-full aspect-[4/3] bg-neutral-900 overflow-hidden group reveal-text">
<img alt="Concrete Detail" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1518091043644-c1d4457512c6?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 text-xs text-white/50 uppercase tracking-widest bg-black/50 px-2 py-1 backdrop-blur-sm">Fig 01. Aggregate</div>
</div>

<div className="w-full aspect-[16/9] bg-neutral-900 overflow-hidden group reveal-text">
<img alt="Interior Volume" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 text-xs text-white/50 uppercase tracking-widest bg-black/50 px-2 py-1 backdrop-blur-sm">Fig 02. Spatial Volume</div>
</div>
<div className="grid grid-cols-2 gap-6 md:gap-12">

<div className="aspect-[3/4] bg-neutral-900 overflow-hidden group reveal-text">
<img alt="Circulation" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1505577058444-a3dab90d4253?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 text-xs text-white/50 uppercase tracking-widest bg-black/50 px-2 py-1 backdrop-blur-sm">Fig 03. Circulation</div>
</div>

<div className="aspect-[3/4] bg-neutral-900 overflow-hidden group reveal-text">
<img alt="Exterior Joint" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 text-xs text-white/50 uppercase tracking-widest bg-black/50 px-2 py-1 backdrop-blur-sm">Fig 04. Intersection</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full mb-32 md:mb-48 border-t border-neutral-900 pt-20" id="process">
<div className="max-w-[1800px] mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
<div>
<span className="text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-2 block">Methodology</span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white">Process &amp; Research</h2>
</div>
<div className="hidden md:flex gap-2">
<button className="w-12 h-12 rounded-full border border-neutral-800 flex items-center justify-center text-white hover:bg-neutral-800 transition-colors hover-trigger">
<iconify-icon className="text-xl" icon="solar:arrow-left-linear"></iconify-icon>
</button>
<button className="w-12 h-12 rounded-full border border-neutral-800 flex items-center justify-center text-white hover:bg-neutral-800 transition-colors hover-trigger">
<iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="flex overflow-x-auto gap-1 px-6 pb-12 snap-x no-scrollbar">

<div className="min-w-[85vw] md:min-w-[450px] aspect-[4/5] bg-neutral-900 relative group cursor-pointer snap-center border-r border-neutral-800 hover-trigger">
<div className="absolute top-0 left-0 p-8 z-20 w-full bg-gradient-to-b from-black/80 to-transparent">
<span className="text-xs font-mono text-neutral-400 border border-neutral-700 px-2 py-1 rounded-full">01 — MATERIALITY</span>
<h3 className="text-xl text-white font-medium mt-4">Raw Concrete Studies</h3>
</div>
<img alt="Concrete Mix" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:brightness-110 transition-all duration-500 grayscale" src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<iconify-icon className="text-white text-4xl" icon="solar:add-circle-linear"></iconify-icon>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[450px] aspect-[4/5] bg-neutral-900 relative group cursor-pointer snap-center border-r border-neutral-800 hover-trigger">
<div className="absolute top-0 left-0 p-8 z-20 w-full bg-gradient-to-b from-black/80 to-transparent">
<span className="text-xs font-mono text-neutral-400 border border-neutral-700 px-2 py-1 rounded-full">02 — SKETCH</span>
<h3 className="text-xl text-white font-medium mt-4">Form Finding</h3>
</div>
<img alt="Sketching" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:brightness-110 transition-all duration-500 grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>

<div className="min-w-[85vw] md:min-w-[450px] aspect-[4/5] bg-neutral-900 relative group cursor-pointer snap-center border-r border-neutral-800 hover-trigger">
<div className="absolute top-0 left-0 p-8 z-20 w-full bg-gradient-to-b from-black/80 to-transparent">
<span className="text-xs font-mono text-neutral-400 border border-neutral-700 px-2 py-1 rounded-full">03 — LIGHT</span>
<h3 className="text-xl text-white font-medium mt-4">Shadow Analysis</h3>
</div>
<img alt="Light Study" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:brightness-110 transition-all duration-500 grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>

<div className="min-w-[85vw] md:min-w-[450px] aspect-[4/5] bg-neutral-900 relative group cursor-pointer snap-center border-r border-neutral-800 hover-trigger">
<div className="absolute top-0 left-0 p-8 z-20 w-full bg-gradient-to-b from-black/80 to-transparent">
<span className="text-xs font-mono text-neutral-400 border border-neutral-700 px-2 py-1 rounded-full">04 — FABRICATION</span>
<h3 className="text-xl text-white font-medium mt-4">Digital Joinery</h3>
</div>
<img alt="Fabrication" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:brightness-110 transition-all duration-500 grayscale" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<footer className="max-w-[1800px] mx-auto px-6 border-t border-neutral-900 pt-20" id="contact">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
<div className="reveal-text">
<h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-white mb-8">
                        Let's build the future.<br/>Together.
                    </h2>
<a className="text-xl md:text-2xl text-neutral-400 hover:text-white underline decoration-neutral-800 underline-offset-8 hover:decoration-white transition-all duration-300 hover-trigger" href="mailto:hello@archstudio.com">
                        hello@arch-studio.com
                    </a>
</div>
<div className="grid grid-cols-2 gap-8 reveal-text delay-100">
<div>
<h5 className="text-xs font-semibold text-white uppercase tracking-widest mb-6">Offices</h5>
<ul className="space-y-4 text-neutral-400 text-lg font-light">
<li className="hover:text-white transition-colors cursor-pointer hover-trigger">Berlin, DE</li>
<li className="hover:text-white transition-colors cursor-pointer hover-trigger">Copenhagen, DK</li>
<li className="hover:text-white transition-colors cursor-pointer hover-trigger">Tokyo, JP</li>
</ul>
</div>
<div>
<h5 className="text-xs font-semibold text-white uppercase tracking-widest mb-6">Social</h5>
<ul className="space-y-4 text-neutral-400 text-lg font-light">
<li><a className="hover:text-white transition-colors hover-trigger flex items-center gap-2" href="#">Instagram <iconify-icon className="text-sm" icon="solar:arrow-right-up-linear"></iconify-icon></a></li>
<li><a className="hover:text-white transition-colors hover-trigger flex items-center gap-2" href="#">LinkedIn <iconify-icon className="text-sm" icon="solar:arrow-right-up-linear"></iconify-icon></a></li>
<li><a className="hover:text-white transition-colors hover-trigger flex items-center gap-2" href="#">Are.na <iconify-icon className="text-sm" icon="solar:arrow-right-up-linear"></iconify-icon></a></li>
</ul>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center py-8 border-t border-neutral-900 text-sm text-neutral-600">
<p className="font-mono text-xs uppercase">© 2024 Arch Studio. All Rights Reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0 font-mono text-xs uppercase">
<a className="hover:text-neutral-400" href="#">Privacy</a>
<a className="hover:text-neutral-400" href="#">Imprint</a>
</div>
</div>
</footer>
</main>


    </>
  );
}
