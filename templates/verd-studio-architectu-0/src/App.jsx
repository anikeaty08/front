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



        // Simple Intersection Observer for reveal animations
        document.addEventListener("DOMContentLoaded", () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            });

            document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
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
      

<nav className="fixed top-4 md:top-6 inset-x-4 md:inset-x-8 z-50 flex justify-center pointer-events-none transition-all duration-300">
<div className="pointer-events-auto w-full max-w-7xl bg-white/75 backdrop-blur-[20px] rounded-full h-[60px] pl-7 pr-3 flex items-center justify-between" style={{boxShadow: '0 4px 24px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.6), 0 0 0 1px rgba(0,0,0,0.04)'}}>
<a className="uppercase text-lg font-semibold text-[#163B52] tracking-widest font-heading" href="#">DAURA</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-semibold text-[#4A5568] uppercase tracking-wider hover:text-[#FFB40F] transition-colors font-sans" href="#philosophy">Philosophy</a>
<a className="text-xs font-semibold text-[#4A5568] uppercase tracking-wider hover:text-[#FFB40F] transition-colors font-sans" href="#services">Services</a>
<a className="text-xs font-semibold text-[#4A5568] uppercase tracking-wider hover:text-[#FFB40F] transition-colors font-sans" href="#projects">Projects</a>
<a className="text-xs font-semibold text-[#4A5568] uppercase tracking-wider hover:text-[#FFB40F] transition-colors font-sans" href="#process">Process</a>
<a className="text-xs font-semibold text-[#4A5568] uppercase tracking-wider hover:text-[#FFB40F] transition-colors font-sans" href="#testimonials">Voices</a>
</div>
<div className="flex items-center gap-2">
<a className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-b from-[#ffcc55] via-[#ffb40f] to-[#d49500] rounded-full hover:-translate-y-px shadow-[0_4px_12px_rgba(196,154,60,0.25)] hover:shadow-[0_6px_16px_rgba(196,154,60,0.35)] transition-all duration-300 font-sans" href="#contact">
                    Start a Project
                </a>

<button aria-label="Menu" className="md:hidden text-[#163B52] w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/5 transition-colors">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-line-duotone" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative min-h-[100svh] flex items-center pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#163B52] to-[#1C2127]" id="hero">

<div className="absolute inset-0 z-0">
<img alt="Modern architecture" className="w-full h-full object-cover opacity-15 mix-blend-overlay filter grayscale" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&amp;q=85&amp;auto=format"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1C2127]/90 via-transparent to-transparent"></div>
</div>
<div className="md:px-12 z-10 w-full max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-xs font-semibold uppercase tracking-wider text-[#FFB40F] border-2 border-[#FFB40F]/30 bg-[#FFB40F]/5 rounded-full reveal visible font-sans">
<iconify-icon className="" icon="solar:buildings-line-duotone" strokeWidth="1.5"></iconify-icon>
                    Award-Winning Architecture
                </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tight text-white leading-tight mb-6 reveal visible font-light font-heading">
                    Designing spaces <br className="hidden md:block"/> that breathe with nature.
                </h1>
<div className="w-12 h-1 bg-[#FFB40F] rounded-full mb-8 reveal visible"></div>
<p className="text-base md:text-lg font-normal text-white/70 leading-relaxed max-w-xl mb-10 reveal visible font-sans">
                    We create architecture that doesn't just exist in the environment — it converses with it. Every structure is a dialogue between human aspiration and ecological responsibility.
                </p>
<div className="flex flex-wrap items-center gap-4 mb-16 reveal visible">
<a className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-white bg-gradient-to-b from-[#ffcc55] via-[#ffb40f] to-[#d49500] rounded-md shadow-[0_4px_16px_rgba(196,154,60,0.3)] hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(196,154,60,0.4)] transition-all duration-300 font-sans" href="#projects">
                        View Our Work
                        <iconify-icon className="text-lg" icon="solar:arrow-right-line-duotone" strokeWidth="1.5"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-white border-2 border-white/80 rounded-md hover:bg-white/10 transition-colors duration-300 font-sans" href="#philosophy">
                        Our Philosophy
                    </a>
</div>
<div className="flex flex-wrap items-center gap-x-12 gap-y-6 pt-8 border-t border-white/10 reveal visible">
<div>
<div className="text-4xl md:text-5xl tracking-tight text-[#FFB40F] mb-2 font-light font-heading">240+</div>
<div className="text-xs font-semibold uppercase tracking-widest text-[#8DA3B3] font-sans">Projects Completed</div>
</div>
<div>
<div className="text-4xl md:text-5xl tracking-tight text-[#FFB40F] mb-2 font-light font-heading">18</div>
<div className="text-xs font-semibold uppercase tracking-widest text-[#8DA3B3] font-sans">Design Awards</div>
</div>
<div>
<div className="text-4xl md:text-5xl tracking-tight text-[#FFB40F] mb-2 font-light font-heading">96%</div>
<div className="text-xs font-semibold uppercase tracking-widest text-[#8DA3B3] font-sans">Client Retention</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#FAF8F5]" id="philosophy">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="relative rounded-lg overflow-hidden aspect-[4/5] shadow-[0_8px_32px_rgba(28,33,39,0.12)] reveal visible">
<img alt="Sustainable building detail" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&amp;q=80"/>
</div>
<div className="reveal visible">
<div className="flex items-center gap-3 mb-4">
<span className="text-xs font-semibold uppercase tracking-widest text-[#FFB40F] font-heading">Our Philosophy</span>
</div>
<h2 className="text-3xl md:text-5xl tracking-tight text-[#1C2127] leading-tight mb-6 font-normal font-heading">
                        Architecture as living dialogue.
                    </h2>
<div className="w-12 h-1 bg-[#FFB40F] rounded-full mb-8"></div>
<p className="text-xl md:text-2xl text-[#1C2127] leading-relaxed mb-8 font-normal font-heading italic">
                        "The best buildings are not monuments to ego, but quiet conversations between place, purpose, and the passage of time."
                    </p>
<p className="text-base font-normal text-[#4A5568] leading-relaxed mb-10 font-sans">
                        At VERD, we believe every structure should give back more than it takes. Our biophilic approach integrates passive heating, natural ventilation, living walls, and locally-sourced materials into designs that feel timeless rather than trendy.
                    </p>
<div className="space-y-8">
<div className="flex gap-4">
<div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-md bg-white border border-[#EEF1F4] text-[#163B52] shadow-sm">
<iconify-icon className="text-2xl" icon="solar:leaf-line-duotone" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-[#1C2127] mb-1 font-sans">Net-Zero Commitment</h4>
<p className="text-sm font-normal text-[#4A5568] leading-relaxed font-sans">Every project targets net-zero carbon over its lifetime through passive design and renewable integration.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-md bg-white border border-[#EEF1F4] text-[#163B52] shadow-sm">
<iconify-icon className="text-2xl" icon="solar:pallete-2-line-duotone" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-[#1C2127] mb-1 font-sans">Material Honesty</h4>
<p className="text-sm font-normal text-[#4A5568] leading-relaxed font-sans">We celebrate raw materials — timber, stone, rammed earth — letting their natural character define the aesthetic.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-md bg-white border border-[#EEF1F4] text-[#163B52] shadow-sm">
<iconify-icon className="text-2xl" icon="solar:compass-big-line-duotone" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-[#1C2127] mb-1 font-sans">Contextual Design</h4>
<p className="text-sm font-normal text-[#4A5568] leading-relaxed font-sans">Every site has a story. We listen to the landscape, climate, and culture before drawing a single line.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#EEF1F4]" id="services">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 reveal visible">
<div>
<div className="flex items-center gap-3 mb-4">
<span className="text-xs font-semibold uppercase tracking-widest text-[#FFB40F] font-heading">What We Do</span>
</div>
<h2 className="text-3xl md:text-5xl tracking-tight text-[#1C2127] leading-tight font-normal font-heading">
                        Comprehensive design services.
                    </h2>
<div className="w-12 h-1 bg-[#FFB40F] rounded-full mt-6"></div>
</div>
<p className="text-base font-normal text-[#4A5568] max-w-sm leading-relaxed pb-2 font-sans">
                    From initial concept to final handover, we guide every project through a meticulous, client-centered process.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative bg-white p-8 rounded-lg border border-white hover:border-[#FFB40F]/30 shadow-[0_4px_12px_rgba(28,33,39,0.04)] hover:shadow-[0_8px_24px_rgba(28,33,39,0.08)] transition-all duration-300 reveal visible">
<div className="absolute top-6 right-8 text-5xl text-[#EEF1F4] transition-colors group-hover:text-[#8DA3B3]/20 font-light font-heading">01</div>
<div className="w-14 h-14 flex items-center justify-center rounded-md bg-[#FAF8F5] text-[#163B52] text-3xl mb-8 group-hover:-translate-y-1 transition-transform duration-300">
<iconify-icon icon="solar:buildings-2-line-duotone" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight text-[#1C2127] mb-3 relative z-10 font-medium font-heading">Architectural Design</h3>
<p className="text-sm font-normal text-[#4A5568] leading-relaxed relative z-10 font-sans">Full-service architecture from concept sketches through construction documents. Residential, commercial, and cultural projects shaped by sustainability.</p>
</div>

<div className="group relative bg-white p-8 rounded-lg border border-white hover:border-[#FFB40F]/30 shadow-[0_4px_12px_rgba(28,33,39,0.04)] hover:shadow-[0_8px_24px_rgba(28,33,39,0.08)] transition-all duration-300 reveal visible">
<div className="absolute top-6 right-8 text-5xl text-[#EEF1F4] transition-colors group-hover:text-[#8DA3B3]/20 font-light font-heading">02</div>
<div className="w-14 h-14 flex items-center justify-center rounded-md bg-[#FAF8F5] text-[#163B52] text-3xl mb-8 group-hover:-translate-y-1 transition-transform duration-300">
<iconify-icon icon="solar:sofa-2-line-duotone" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight text-[#1C2127] mb-3 relative z-10 font-medium font-heading">Interior Architecture</h3>
<p className="text-sm font-normal text-[#4A5568] leading-relaxed relative z-10 font-sans">Spatial design that flows naturally. We curate materials, lighting, and furniture to create interiors that are both functional and emotionally resonant.</p>
</div>

<div className="group relative bg-white p-8 rounded-lg border border-white hover:border-[#FFB40F]/30 shadow-[0_4px_12px_rgba(28,33,39,0.04)] hover:shadow-[0_8px_24px_rgba(28,33,39,0.08)] transition-all duration-300 reveal visible">
<div className="absolute top-6 right-8 text-5xl text-[#EEF1F4] transition-colors group-hover:text-[#8DA3B3]/20 font-light font-heading">03</div>
<div className="w-14 h-14 flex items-center justify-center rounded-md bg-[#FAF8F5] text-[#163B52] text-3xl mb-8 group-hover:-translate-y-1 transition-transform duration-300">
<iconify-icon icon="solar:streets-map-point-line-duotone" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight text-[#1C2127] mb-3 relative z-10 font-medium font-heading">Landscape Integration</h3>
<p className="text-sm font-normal text-[#4A5568] leading-relaxed relative z-10 font-sans">Architecture doesn't stop at the facade. We design landscapes that extend the living experience into gardens, courtyards, and natural terraces.</p>
</div>

<div className="group relative bg-white p-8 rounded-lg border border-white hover:border-[#FFB40F]/30 shadow-[0_4px_12px_rgba(28,33,39,0.04)] hover:shadow-[0_8px_24px_rgba(28,33,39,0.08)] transition-all duration-300 reveal visible">
<div className="absolute top-6 right-8 text-5xl text-[#EEF1F4] transition-colors group-hover:text-[#8DA3B3]/20 font-light font-heading">04</div>
<div className="w-14 h-14 flex items-center justify-center rounded-md bg-[#FAF8F5] text-[#163B52] text-3xl mb-8 group-hover:-translate-y-1 transition-transform duration-300">
<iconify-icon icon="solar:lightbulb-bolt-line-duotone" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight text-[#1C2127] mb-3 relative z-10 font-medium font-heading">Sustainability Consulting</h3>
<p className="text-sm font-normal text-[#4A5568] leading-relaxed relative z-10 font-sans">Expert guidance on LEED, Passive House, and Living Building Challenge certifications. We make green building both achievable and beautiful.</p>
</div>

<div className="group relative bg-white p-8 rounded-lg border border-white hover:border-[#FFB40F]/30 shadow-[0_4px_12px_rgba(28,33,39,0.04)] hover:shadow-[0_8px_24px_rgba(28,33,39,0.08)] transition-all duration-300 reveal visible">
<div className="absolute top-6 right-8 text-5xl text-[#EEF1F4] transition-colors group-hover:text-[#8DA3B3]/20 font-light font-heading">05</div>
<div className="w-14 h-14 flex items-center justify-center rounded-md bg-[#FAF8F5] text-[#163B52] text-3xl mb-8 group-hover:-translate-y-1 transition-transform duration-300">
<iconify-icon icon="solar:ruler-angular-line-duotone" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight text-[#1C2127] mb-3 relative z-10 font-medium font-heading">Renovation &amp; Retrofit</h3>
<p className="text-sm font-normal text-[#4A5568] leading-relaxed relative z-10 font-sans">Breathing new life into existing structures. We transform dated buildings into energy-efficient, modern spaces while preserving their architectural DNA.</p>
</div>

<div className="group relative bg-white p-8 rounded-lg border border-white hover:border-[#FFB40F]/30 shadow-[0_4px_12px_rgba(28,33,39,0.04)] hover:shadow-[0_8px_24px_rgba(28,33,39,0.08)] transition-all duration-300 reveal visible">
<div className="absolute top-6 right-8 text-5xl text-[#EEF1F4] transition-colors group-hover:text-[#8DA3B3]/20 font-light font-heading">06</div>
<div className="w-14 h-14 flex items-center justify-center rounded-md bg-[#FAF8F5] text-[#163B52] text-3xl mb-8 group-hover:-translate-y-1 transition-transform duration-300">
<iconify-icon icon="solar:monitor-line-duotone" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight text-[#1C2127] mb-3 relative z-10 font-medium font-heading">3D Visualization</h3>
<p className="text-sm font-normal text-[#4A5568] leading-relaxed relative z-10 font-sans">Photorealistic renderings and virtual walkthroughs that let you experience your space before a single brick is laid. Decisions made with full clarity.</p>
</div>
</div>
</div>
</section>

<div className="w-full overflow-hidden bg-white border-y border-[#EEF1F4] py-6">
<div className="flex animate-marquee w-max whitespace-nowrap items-center">
<div className="flex items-center gap-12 px-6">
<span className="text-xl tracking-tight text-[#8DA3B3] font-normal font-heading">Residential</span>
<span className="w-2 h-2 rounded-full bg-[#FFB40F]"></span>
<span className="text-xl tracking-tight text-[#8DA3B3] font-normal font-heading">Commercial</span>
<span className="w-2 h-2 rounded-full bg-[#FFB40F]"></span>
<span className="text-xl tracking-tight text-[#8DA3B3] font-normal font-heading">Cultural</span>
<span className="w-2 h-2 rounded-full bg-[#FFB40F]"></span>
<span className="text-xl tracking-tight text-[#8DA3B3] font-normal font-heading">Hospitality</span>
<span className="w-2 h-2 rounded-full bg-[#FFB40F]"></span>
<span className="text-xl tracking-tight text-[#8DA3B3] font-normal font-heading">Education</span>
<span className="w-2 h-2 rounded-full bg-[#FFB40F]"></span>
<span className="text-xl tracking-tight text-[#8DA3B3] font-normal font-heading">Civic</span>
<span className="w-2 h-2 rounded-full bg-[#FFB40F]"></span>
<span className="text-xl tracking-tight text-[#8DA3B3] font-normal font-heading">Mixed-Use</span>
<span className="w-2 h-2 rounded-full bg-[#FFB40F]"></span>
<span className="text-xl tracking-tight text-[#8DA3B3] font-normal font-heading">Wellness</span>
<span className="w-2 h-2 rounded-full bg-[#FFB40F]"></span>
</div>

<div className="flex items-center gap-12 px-6">
<span className="text-xl tracking-tight text-[#8DA3B3] font-normal font-heading">Residential</span>
<span className="w-2 h-2 rounded-full bg-[#FFB40F]"></span>
<span className="text-xl tracking-tight text-[#8DA3B3] font-normal font-heading">Commercial</span>
<span className="w-2 h-2 rounded-full bg-[#FFB40F]"></span>
<span className="text-xl tracking-tight text-[#8DA3B3] font-normal font-heading">Cultural</span>
<span className="w-2 h-2 rounded-full bg-[#FFB40F]"></span>
<span className="text-xl tracking-tight text-[#8DA3B3] font-normal font-heading">Hospitality</span>
<span className="w-2 h-2 rounded-full bg-[#FFB40F]"></span>
<span className="text-xl tracking-tight text-[#8DA3B3] font-normal font-heading">Education</span>
<span className="w-2 h-2 rounded-full bg-[#FFB40F]"></span>
<span className="text-xl tracking-tight text-[#8DA3B3] font-normal font-heading">Civic</span>
<span className="w-2 h-2 rounded-full bg-[#FFB40F]"></span>
<span className="text-xl tracking-tight text-[#8DA3B3] font-normal font-heading">Mixed-Use</span>
<span className="w-2 h-2 rounded-full bg-[#FFB40F]"></span>
<span className="text-xl tracking-tight text-[#8DA3B3] font-normal font-heading">Wellness</span>
<span className="w-2 h-2 rounded-full bg-[#FFB40F]"></span>
</div>
</div>
</div>

<section className="py-24 md:py-32 bg-white" id="projects">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="text-center max-w-2xl mx-auto mb-16 reveal visible">
<div className="flex items-center justify-center gap-3 mb-4">
<span className="text-xs font-semibold uppercase tracking-widest text-[#FFB40F] font-heading">Featured Work</span>
</div>
<h2 className="text-3xl md:text-5xl tracking-tight text-[#1C2127] leading-tight font-normal font-heading">
                    Selected projects.
                </h2>
<div className="w-12 h-1 bg-[#FFB40F] rounded-full mx-auto my-6"></div>
<p className="text-base font-normal text-[#4A5568] leading-relaxed font-sans">
                    A curated selection of our most impactful work — each one a testament to the belief that architecture can heal, inspire, and sustain.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">

<a className="group block md:col-span-2 reveal visible" href="#">
<div className="relative overflow-hidden rounded-lg shadow-sm group-hover:shadow-md transition-all duration-500 mb-6 bg-[#EEF1F4] aspect-[16/9] md:aspect-[2/1]">
<img alt="The Canopy House" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#163B52]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute top-6 right-6 w-12 h-12 bg-[#163B52] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#FFB40F] shadow-md">
<iconify-icon className="text-xl" icon="solar:arrow-right-up-line-duotone" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="flex gap-2 mb-3">
<span className="text-xs font-semibold uppercase tracking-wider text-[#8DA3B3] border border-[#8DA3B3]/40 rounded-full px-3 py-1 font-sans">Residential</span>
<span className="text-xs font-semibold uppercase tracking-wider text-[#8DA3B3] border border-[#8DA3B3]/40 rounded-full px-3 py-1 font-sans">Net-Zero</span>
</div>
<div className="flex justify-between items-start gap-4">
<div>
<h3 className="text-2xl md:text-3xl tracking-tight text-[#1C2127] mb-2 font-medium font-heading">The Canopy House</h3>
<p className="text-base font-normal text-[#4A5568] line-clamp-2 max-w-lg leading-relaxed font-sans">A 4,200 sq ft residence nestled in Pacific Northwest forest. Cross-laminated timber structure with living roof and geothermal heating.</p>
</div>
</div>
</a>

<a className="group block reveal visible" href="#">
<div className="relative overflow-hidden rounded-lg shadow-sm group-hover:shadow-md transition-all duration-500 mb-6 bg-[#EEF1F4] aspect-[4/3]">
<img alt="Earth Pavilion" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#163B52]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute top-6 right-6 w-12 h-12 bg-[#163B52] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#FFB40F] shadow-md">
<iconify-icon className="text-xl" icon="solar:arrow-right-up-line-duotone" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="flex gap-2 mb-3">
<span className="text-xs font-semibold uppercase tracking-wider text-[#8DA3B3] border border-[#8DA3B3]/40 rounded-full px-3 py-1 font-sans">Cultural</span>
<span className="text-xs font-semibold uppercase tracking-wider text-[#8DA3B3] border border-[#8DA3B3]/40 rounded-full px-3 py-1 font-sans">Rammed Earth</span>
</div>
<h3 className="text-2xl tracking-tight text-[#1C2127] mb-2 font-medium font-heading">Earth Pavilion</h3>
<p className="text-base font-normal text-[#4A5568] line-clamp-2 leading-relaxed font-sans">A community arts center built with rammed earth walls sourced from the construction site itself.</p>
</a>

<a className="group block reveal visible" href="#">
<div className="relative overflow-hidden rounded-lg shadow-sm group-hover:shadow-md transition-all duration-500 mb-6 bg-[#EEF1F4] aspect-[4/3]">
<img alt="Verde Tower" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1000&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#163B52]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute top-6 right-6 w-12 h-12 bg-[#163B52] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#FFB40F] shadow-md">
<iconify-icon className="text-xl" icon="solar:arrow-right-up-line-duotone" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="flex gap-2 mb-3">
<span className="text-xs font-semibold uppercase tracking-wider text-[#8DA3B3] border border-[#8DA3B3]/40 rounded-full px-3 py-1 font-sans">Commercial</span>
<span className="text-xs font-semibold uppercase tracking-wider text-[#8DA3B3] border border-[#8DA3B3]/40 rounded-full px-3 py-1 font-sans">LEED Platinum</span>
</div>
<h3 className="text-2xl tracking-tight text-[#1C2127] mb-2 font-medium font-heading">Verde Tower</h3>
<p className="text-base font-normal text-[#4A5568] line-clamp-2 leading-relaxed font-sans">A 12-story office complex achieving LEED Platinum with integrated vertical gardens on every floor.</p>
</a>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#FAF8F5] border-y border-[#EEF1F4]" id="process">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="text-center mb-16 reveal visible">
<div className="flex items-center justify-center gap-3 mb-4">
<span className="text-xs font-semibold uppercase tracking-widest text-[#FFB40F] font-heading">How We Work</span>
</div>
<h2 className="text-3xl md:text-5xl tracking-tight text-[#1C2127] leading-tight font-normal font-heading">
                    Our design process.
                </h2>
<div className="w-12 h-1 bg-[#FFB40F] rounded-full mx-auto mt-6"></div>
</div>
<div className="relative grid grid-cols-1 md:grid-cols-4 gap-12 text-center reveal visible mt-12">

<div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-[2px] bg-[#FFB40F] z-0"></div>
<div className="relative z-10 flex flex-col items-center">
<div className="w-16 h-16 rounded-full bg-white border-2 border-[#FFB40F] shadow-sm flex items-center justify-center text-[#163B52] text-xl mb-6 font-medium font-heading">
                        01
                    </div>
<h4 className="text-xl tracking-tight text-[#1C2127] mb-3 font-medium font-heading">Discover</h4>
<p className="text-sm font-normal text-[#4A5568] leading-relaxed px-4 font-sans">We immerse ourselves in your vision, the site, and the environmental context.</p>
</div>
<div className="relative z-10 flex flex-col items-center">
<div className="w-16 h-16 rounded-full bg-white border-2 border-[#FFB40F] shadow-sm flex items-center justify-center text-[#163B52] text-xl mb-6 font-medium font-heading">
                        02
                    </div>
<h4 className="text-xl tracking-tight text-[#1C2127] mb-3 font-medium font-heading">Envision</h4>
<p className="text-sm font-normal text-[#4A5568] leading-relaxed px-4 font-sans">Through sketches, models, and 3D visualization, we explore bold possibilities.</p>
</div>
<div className="relative z-10 flex flex-col items-center">
<div className="w-16 h-16 rounded-full bg-white border-2 border-[#FFB40F] shadow-sm flex items-center justify-center text-[#163B52] text-xl mb-6 font-medium font-heading">
                        03
                    </div>
<h4 className="text-xl tracking-tight text-[#1C2127] mb-3 font-medium font-heading">Refine</h4>
<p className="text-sm font-normal text-[#4A5568] leading-relaxed px-4 font-sans">Materials are selected. Engineering is resolved. Every detail is scrutinized.</p>
</div>
<div className="relative z-10 flex flex-col items-center">
<div className="w-16 h-16 rounded-full bg-white border-2 border-[#FFB40F] shadow-sm flex items-center justify-center text-[#163B52] text-xl mb-6 font-medium font-heading">
                        04
                    </div>
<h4 className="text-xl tracking-tight text-[#1C2127] mb-3 font-medium font-heading">Realize</h4>
<p className="text-sm font-normal text-[#4A5568] leading-relaxed px-4 font-sans">We oversee construction with care. The result is a space that exceeds expectations.</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-white" id="testimonials">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="mb-16 reveal visible text-center md:text-left">
<div className="flex items-center justify-center md:justify-start gap-3 mb-4">
<span className="text-xs font-semibold uppercase tracking-widest text-[#FFB40F] font-heading">Client Voices</span>
</div>
<h2 className="text-3xl md:text-5xl tracking-tight text-[#1C2127] leading-tight font-normal font-heading">
                    What our clients say.
                </h2>
<div className="w-12 h-1 bg-[#FFB40F] rounded-full mt-6 mx-auto md:mx-0"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-[#FAF8F5] p-8 rounded-lg border border-[#EEF1F4] shadow-sm reveal visible">
<div className="flex gap-1 text-[#FFB40F] mb-8">
<iconify-icon icon="solar:star-bold-duotone" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold-duotone" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold-duotone" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold-duotone" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold-duotone" strokeWidth="1.5"></iconify-icon>
</div>
<p className="font-heading font-normal italic text-[20px] text-[#1C2127] leading-relaxed mb-8">
                        "VERD transformed our outdated office into a living, breathing space. The biophilic design has genuinely improved our team's wellbeing and productivity."
                    </p>
<div className="flex items-center gap-4 pt-6 border-t border-[#EEF1F4]">
<div className="w-12 h-12 rounded-full bg-[#EEF1F4] overflow-hidden flex-shrink-0 border border-white">
<img alt="Avatar" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=100&amp;q=80"/>
</div>
<div>
<h5 className="text-sm font-semibold text-[#1C2127] font-sans">Margaret Reynolds</h5>
<p className="text-xs font-medium uppercase tracking-wider text-[#8DA3B3] mt-0.5 font-sans">CEO, Atria Health</p>
</div>
</div>
</div>

<div className="bg-[#FAF8F5] p-8 rounded-lg border border-[#EEF1F4] shadow-sm reveal visible">
<div className="flex gap-1 text-[#FFB40F] mb-8">
<iconify-icon icon="solar:star-bold-duotone" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold-duotone" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold-duotone" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold-duotone" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold-duotone" strokeWidth="1.5"></iconify-icon>
</div>
<p className="font-heading font-normal italic text-[20px] text-[#1C2127] leading-relaxed mb-8">
                        "The Canopy House isn't just a home — it's an experience. Waking up surrounded by forest, bathed in natural light, with zero energy bills. Truly extraordinary."
                    </p>
<div className="flex items-center gap-4 pt-6 border-t border-[#EEF1F4]">
<div className="w-12 h-12 rounded-full bg-[#EEF1F4] overflow-hidden flex-shrink-0 border border-white">
<img alt="Avatar" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1641288883869-c463bc6c2a58?w=100&amp;q=80"/>
</div>
<div>
<h5 className="text-sm font-semibold text-[#1C2127] font-sans">James Kohara</h5>
<p className="text-xs font-medium uppercase tracking-wider text-[#8DA3B3] mt-0.5 font-sans">Homeowner</p>
</div>
</div>
</div>

<div className="bg-[#FAF8F5] p-8 rounded-lg border border-[#EEF1F4] shadow-sm reveal visible">
<div className="flex gap-1 text-[#FFB40F] mb-8">
<iconify-icon icon="solar:star-bold-duotone" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold-duotone" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold-duotone" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold-duotone" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold-duotone" strokeWidth="1.5"></iconify-icon>
</div>
<p className="font-heading font-normal italic text-[20px] text-[#1C2127] leading-relaxed mb-8">
                        "Their approach to sustainability isn't performative — it's deeply integrated into every decision. The rammed earth walls tell a story that resonates with every visitor."
                    </p>
<div className="flex items-center gap-4 pt-6 border-t border-[#EEF1F4]">
<div className="w-12 h-12 rounded-full bg-[#EEF1F4] overflow-hidden flex-shrink-0 border border-white">
<img alt="Avatar" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1639986162505-c9bcccfc9712?w=100&amp;q=80"/>
</div>
<div>
<h5 className="text-sm font-semibold text-[#1C2127] font-sans">Sofia Lindgren</h5>
<p className="text-xs font-medium uppercase tracking-wider text-[#8DA3B3] mt-0.5 font-sans">Director, Nordic Arts</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-[#EEF1F4] border-t border-white">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 reveal visible">
<div className="flex flex-col items-center gap-3 opacity-70 hover:opacity-100 transition-opacity duration-300">
<iconify-icon className="text-3xl text-[#163B52]" icon="solar:cup-star-line-duotone" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-semibold uppercase tracking-wider text-[#4A5568] font-sans">AIA Gold 2024</span>
</div>
<div className="flex flex-col items-center gap-3 opacity-70 hover:opacity-100 transition-opacity duration-300">
<iconify-icon className="text-3xl text-[#163B52]" icon="solar:medal-ribbons-star-line-duotone" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-semibold uppercase tracking-wider text-[#4A5568] font-sans">Pritzker Nominee</span>
</div>
<div className="flex flex-col items-center gap-3 opacity-70 hover:opacity-100 transition-opacity duration-300">
<iconify-icon className="text-3xl text-[#163B52]" icon="solar:verified-check-line-duotone" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-semibold uppercase tracking-wider text-[#4A5568] font-sans">LEED Platinum x12</span>
</div>
<div className="flex flex-col items-center gap-3 opacity-70 hover:opacity-100 transition-opacity duration-300">
<iconify-icon className="text-3xl text-[#163B52]" icon="solar:earth-line-duotone" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-semibold uppercase tracking-wider text-[#4A5568] font-sans">UN Habitat Award</span>
</div>
<div className="flex flex-col items-center gap-3 opacity-70 hover:opacity-100 transition-opacity duration-300">
<iconify-icon className="text-3xl text-[#163B52]" icon="solar:star-circle-line-duotone" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-semibold uppercase tracking-wider text-[#4A5568] font-sans">Dezeen Studio</span>
</div>
</div>
</div>
</section>

<section className="py-32 bg-gradient-to-br from-[#163B52] to-[#1C2127] border-t border-[#EEF1F4] relative overflow-hidden" id="contact">
<div className="absolute inset-0 z-0">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(22,59,82,0.8)_0%,rgba(28,33,39,1)_100%)]"></div>
</div>
<div className="max-w-3xl mx-auto px-6 text-center relative z-10 reveal visible">
<div className="flex items-center justify-center gap-3 mb-6">
<span className="text-xs font-semibold uppercase tracking-widest text-[#FFB40F] font-heading">Start Your Project</span>
</div>
<h2 className="text-4xl md:text-6xl tracking-tight text-white leading-tight mb-6 font-light font-heading">
                Let's create something <br className="hidden md:block"/> extraordinary.
            </h2>
<div className="w-12 h-1 bg-[#FFB40F] rounded-full mx-auto mb-8"></div>
<p className="text-base md:text-lg font-normal text-white/70 leading-relaxed mb-10 max-w-xl mx-auto font-sans">
                Whether you're envisioning a private residence, a commercial landmark, or a community space — we'd love to explore what's possible together.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-white bg-gradient-to-b from-[#ffcc55] via-[#ffb40f] to-[#d49500] rounded-md shadow-[0_4px_16px_rgba(196,154,60,0.3)] hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(196,154,60,0.4)] transition-all duration-300 font-sans" href="#">
                    Schedule Consultation
                    <iconify-icon className="text-lg" icon="solar:arrow-right-line-duotone" strokeWidth="1.5"></iconify-icon>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-[#FFB40F] border-2 border-[#FFB40F] rounded-md hover:bg-[#FFB40F]/10 shadow-[0_0_8px_rgba(196,154,60,0.12)] hover:shadow-[0_0_14px_rgba(196,154,60,0.25)] transition-all duration-300 font-sans" href="#">
                    hello@verdstudio.com
                    <iconify-icon className="text-lg" icon="solar:letter-line-duotone" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</section>

<footer className="bg-[#1C2127] pt-20 pb-10 relative overflow-hidden">
<div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-[#ffcc55] via-[#ffb40f] to-[#d49500]"></div>
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
<div className="md:col-span-5 lg:col-span-4">
<a className="text-xl tracking-widest text-white block mb-4 font-normal font-heading" href="#">VERD</a>
<p className="text-sm font-normal text-white/70 leading-relaxed max-w-xs mb-8 font-sans">
                        Award-winning sustainable architecture studio creating spaces that harmonize human living with the natural world.
                    </p>
<div className="flex items-center gap-4 text-white/60">
<a className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#FFB40F] hover:border-[#FFB40F] hover:text-white transition-colors" href="#"><iconify-icon icon="solar:gallery-line-duotone" strokeWidth="1.5"></iconify-icon></a>
<a className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#FFB40F] hover:border-[#FFB40F] hover:text-white transition-colors" href="#"><iconify-icon icon="solar:case-round-line-duotone" strokeWidth="1.5"></iconify-icon></a>
<a className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#FFB40F] hover:border-[#FFB40F] hover:text-white transition-colors" href="#"><iconify-icon icon="solar:pin-line-duotone" strokeWidth="1.5"></iconify-icon></a>
</div>
</div>
<div className="md:col-span-3 lg:col-span-2 lg:col-start-7">
<h4 className="text-xs font-semibold uppercase tracking-widest text-[#FFB40F] mb-6 font-heading">Studio</h4>
<ul className="space-y-4">
<li><a className="text-sm font-normal text-white/60 hover:text-white transition-colors font-sans" href="#">About Us</a></li>
<li><a className="text-sm font-normal text-white/60 hover:text-white transition-colors font-sans" href="#">Our Team</a></li>
<li><a className="text-sm font-normal text-white/60 hover:text-white transition-colors font-sans" href="#">Careers</a></li>
<li><a className="text-sm font-normal text-white/60 hover:text-white transition-colors font-sans" href="#">Press</a></li>
</ul>
</div>
<div className="md:col-span-2 lg:col-span-2">
<h4 className="text-xs font-semibold uppercase tracking-widest text-[#FFB40F] mb-6 font-heading">Services</h4>
<ul className="space-y-4">
<li><a className="text-sm font-normal text-white/60 hover:text-white transition-colors font-sans" href="#">Architecture</a></li>
<li><a className="text-sm font-normal text-white/60 hover:text-white transition-colors font-sans" href="#">Interior Design</a></li>
<li><a className="text-sm font-normal text-white/60 hover:text-white transition-colors font-sans" href="#">Landscape</a></li>
<li><a className="text-sm font-normal text-white/60 hover:text-white transition-colors font-sans" href="#">Consulting</a></li>
</ul>
</div>
<div className="md:col-span-2 lg:col-span-2">
<h4 className="text-xs font-semibold uppercase tracking-widest text-[#FFB40F] mb-6 font-heading">Connect</h4>
<ul className="space-y-4">
<li><a className="text-sm font-normal text-white/60 hover:text-white transition-colors font-sans" href="#">Contact</a></li>
<li><a className="text-sm font-normal text-white/60 hover:text-white transition-colors font-sans" href="#">Newsletter</a></li>
<li><a className="text-sm font-normal text-white/60 hover:text-white transition-colors font-sans" href="#">Portland, OR</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/10">
<p className="text-xs font-normal text-white/40 font-sans">© 2026 VERD Studio. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-xs font-normal text-white/40 hover:text-white transition-colors font-sans" href="#">Privacy Policy</a>
<a className="text-xs font-normal text-white/40 hover:text-white transition-colors font-sans" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
