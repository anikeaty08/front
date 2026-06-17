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



        // Custom Cursor Logic
        const cursorDot = document.getElementById('cursor-dot');
        const cursorOutline = document.getElementById('cursor-outline');
        const hoverTargets = document.querySelectorAll('.cursor-hover, a, button, input, select, textarea');

        window.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            // Dot follows instantly
            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;

            // Outline follows with slight delay
            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 500, fill: "forwards" });
        });

        // Hover effects for cursor
        hoverTargets.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorOutline.classList.add('hovered');
            });
            el.addEventListener('mouseleave', () => {
                cursorOutline.classList.remove('hovered');
            });
        });

        // Navbar Scroll Effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('glass-nav', 'py-4');
                navbar.classList.remove('py-6');
            } else {
                navbar.classList.remove('glass-nav', 'py-4');
                navbar.classList.add('py-6');
            }
        });

        // Animations on Scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in-up').forEach(el => {
            observer.observe(el);
        });

        // Immediate reveal for initial viewport content to prevent flicker/hidden elements
        window.addEventListener('DOMContentLoaded', () => {
            setTimeout(() => {
                document.querySelectorAll('header .fade-in-up').forEach(el => {
                    el.classList.add('visible');
                });
            }, 100);
        });

        // Horizontal Scroll Buttons
        const scrollContainer = document.getElementById('projectContainer');
        document.getElementById('scrollLeft').addEventListener('click', () => {
            scrollContainer.scrollBy({ left: -600, behavior: 'smooth' });
        });
        document.getElementById('scrollRight').addEventListener('click', () => {
            scrollContainer.scrollBy({ left: 600, behavior: 'smooth' });
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
      

<div className="hidden md:block" id="cursor-dot"></div>
<div className="hidden md:block" id="cursor-outline"></div>

<nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300 py-6" id="navbar">
<div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
<a className="cursor-hover group relative z-50" href="#">
<span className="font-serif text-2xl tracking-tighter text-white font-medium">CB<span className="text-[#D4AF37]">.</span></span>
</a>
<div className="hidden md:flex items-center space-x-12">
<a className="cursor-hover text-sm tracking-widest uppercase text-gray-400 hover:text-white transition-colors duration-300" href="#services">Expertise</a>
<a className="cursor-hover text-sm tracking-widest uppercase text-gray-400 hover:text-white transition-colors duration-300" href="#projects">Portfolio</a>
<a className="cursor-hover text-sm tracking-widest uppercase text-gray-400 hover:text-white transition-colors duration-300" href="#process">Process</a>
</div>
<a className="cursor-hover hidden md:inline-flex items-center justify-center px-6 py-2 border border-white/20 text-xs uppercase tracking-widest hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-[#1a1a1a] transition-all duration-300 backdrop-blur-sm" href="#contact">
                Inquire
            </a>

<button className="md:hidden text-white cursor-hover">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:menu" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</nav>

<header className="relative w-full h-screen flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0 bg-fixed bg-center bg-cover bg-no-repeat opacity-60 scale-105" style={{backgroundImage: 'url(\'https://primary.jwwb.nl/public/m/r/m/temp-gbgrpznqebpsussomdsk/img_6825-high.jpg?enable-io=true&amp'}}>
</div>
<div className="bg-gradient-to-b from-[#1a1a1a]/40 via-[#1a1a1a]/60 to-[#1a1a1a] z-10 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-16 md:mt-0">
<p className="fade-in-up text-[#D4AF37] uppercase tracking-[0.2em] text-xs md:text-sm mb-6 font-medium">Integrity in every nail</p>

<h1 className="fade-in-up delay-100 text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.1] tracking-tight mb-8 drop-shadow-lg">
                Crafting Homes That <br/> <span className="italic text-gray-300">Evolve With Your Story</span>
</h1>
<div className="fade-in-up delay-200 flex flex-col md:flex-row items-center justify-center gap-6 mt-12">
<a className="cursor-hover group flex items-center gap-3 text-white border-b border-[#D4AF37] pb-1 hover:text-[#D4AF37] transition-colors" href="#projects">
<span className="text-sm tracking-widest uppercase">View Portfolio</span>
<svg aria-hidden="true" className="iconify group-hover:translate-x-1 transition-transform iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-bounce opacity-50">
<span className="text-[10px] uppercase tracking-widest text-white/70">Scroll</span>
<svg aria-hidden="true" className="iconify text-white/70 iconify--lucide" data-icon="lucide:chevron-down" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</header>

<section className="py-24 md:py-32 px-6 bg-[#1a1a1a] relative overflow-hidden">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="fade-in-up">
<h2 className="font-serif text-3xl md:text-5xl text-white mb-8 leading-tight tracking-tight">
                    Beyond construction.<br/><span className="text-gray-500 italic">Curating lifestyle.</span>
</h2>
<div className="w-12 h-[1px] bg-[#D4AF37] mb-8"></div>
<p className="text-gray-400 font-light text-lg leading-relaxed mb-6">
                    At Craftman Builders, we don't just assemble materials; we interpret dreams. Based in the heart of Louisiana, our firm bridges the gap between southern architectural heritage and modern luxury living.
                </p>
<p className="text-gray-400 font-light text-lg leading-relaxed">
                    Every beam placed and every line drawn is a deliberate choice to enhance the way you live, creating spaces that offer solace, inspiration, and enduring beauty.
                </p>
</div>
<div className="grid grid-cols-2 gap-4 fade-in-up delay-200">
<div className="space-y-4 mt-12">
<div className="glass-panel p-6 md:p-8 text-center rounded-sm hover:border-[#D4AF37]/30 transition-colors">
<span className="block font-serif text-4xl text-white mb-2">15+</span>
<span className="text-xs uppercase tracking-widest text-gray-500">Years Experience</span>
</div>
<div className="relative overflow-hidden aspect-[3/4] rounded-sm">
<img alt="Detail" className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700" src="https://res.cloudinary.com/dbv03trpv/image/upload/v1764967327/520528760_18072714254003173_8768070010532647132_n_dvrurl.jpg"/>
</div>
</div>
<div className="space-y-4">
<div className="relative overflow-hidden aspect-[3/4] rounded-sm">
<img alt="Detail" className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700" src="https://res.cloudinary.com/dbv03trpv/image/upload/v1764967327/499142486_18072348875003173_8948699702784220361_n_qfjlnw.jpg"/>
</div>
<div className="glass-panel p-6 md:p-8 text-center rounded-sm hover:border-[#D4AF37]/30 transition-colors">
<span className="block font-serif text-4xl text-white mb-2">80+</span>
<span className="text-xs uppercase tracking-widest text-gray-500">Bespoke Projects</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#1a1a1a] relative" id="services">
<div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#1f1f1f] to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-20 fade-in-up">
<div>
<span className="text-[#D4AF37] text-xs uppercase tracking-widest mb-4 block">Our Expertise</span>
<h2 className="font-serif text-4xl md:text-5xl text-white tracking-tight">Architectural Mastery</h2>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mt-4 md:mt-0 text-sm tracking-widest uppercase cursor-hover" href="#contact">
                    Start a Project <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-up-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="cursor-hover group relative overflow-hidden h-[500px] border border-white/5 bg-[#1f1f1f] fade-in-up delay-0">
<img alt="Design" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 image-hover-zoom transition-all duration-700" src="https://res.cloudinary.com/dbv03trpv/image/upload/v1764967328/527553906_18074464439003173_5086631581873646512_n_lgett5.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div className="w-10 h-10 mb-6 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-[#D4AF37]">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:pencil-ruler" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M13 7L8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13m1-7l2-2m8 12l2-2m-3-3l4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497zM15 5l4 4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="font-serif text-2xl text-white mb-3">Custom Design</h3>
<p className="text-gray-400 font-light text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 h-0 group-hover:h-auto overflow-hidden">
                            From initial sketches to 3D architectural rendering, we conceptualize spaces that reflect your unique narrative.
                        </p>
</div>
</div>

<div className="cursor-hover group relative overflow-hidden h-[500px] border border-white/5 bg-[#1f1f1f] fade-in-up delay-100">
<img alt="Build" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 image-hover-zoom transition-all duration-700" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div className="w-10 h-10 mb-6 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-[#D4AF37]">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:hammer" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m15 12l-9.373 9.373a1 1 0 0 1-3.001-3L12 9m6 6l4-4"></path><path d="m21.5 11.5l-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"></path></g></svg>
</div>
<h3 className="font-serif text-2xl text-white mb-3">Precision Build</h3>
<p className="text-gray-400 font-light text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 h-0 group-hover:h-auto overflow-hidden">
                            Executing complex structures with exacting standards. We use premium materials for longevity and aesthetic purity.
                        </p>
</div>
</div>

<div className="cursor-hover group relative overflow-hidden h-[500px] border border-white/5 bg-[#1f1f1f] fade-in-up delay-200">
<img alt="Interiors" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 image-hover-zoom transition-all duration-700" src="https://res.cloudinary.com/dbv03trpv/image/upload/v1764967328/538389528_18076253324003173_2287461633209316673_n_hgxizk.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div className="w-10 h-10 mb-6 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-[#D4AF37]">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:sofa" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3"></path><path d="M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0zm2 2v2m16-2v2M12 4v9"></path></g></svg>
</div>
<h3 className="font-serif text-2xl text-white mb-3">Interior Direction</h3>
<p className="text-gray-400 font-light text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 h-0 group-hover:h-auto overflow-hidden">
                            Curating finishes, lighting, and textures that harmonize with the architecture for a cohesive luxury experience.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#1a1a1a] border-y border-white/5" id="projects">
<div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end fade-in-up">
<h2 className="font-serif text-4xl md:text-6xl text-white tracking-tight">Selected Works</h2>
<div className="hidden md:flex gap-4">
<button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all cursor-hover" id="scrollLeft">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-left" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m12 19l-7-7l7-7m7 7H5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all cursor-hover" id="scrollRight">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
<div className="flex overflow-x-auto no-scrollbar gap-8 px-6 md:px-[max(24px,calc((100vw-80rem)/2))] pb-12 snap-x snap-mandatory" id="projectContainer">

<div className="min-w-[85vw] md:min-w-[600px] snap-center cursor-hover group fade-in-up">
<div className="relative overflow-hidden aspect-[16/9] mb-6">
<img alt="The Obsidian Residence" className="w-full h-full object-cover image-hover-zoom filter brightness-90 group-hover:brightness-100" src="https://primary.jwwb.nl/public/m/r/m/temp-gbgrpznqebpsussomdsk/img_6574-high.jpg?enable-io=true&amp;crop=1.5%3A1&amp;width=1252"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
<span className="bg-white/10 backdrop-blur-md px-6 py-3 text-white text-xs uppercase tracking-widest border border-white/20 rounded-full">View Project</span>
</div>
</div>
<h3 className="font-serif text-2xl text-white">The Obsidian Residence</h3>
<p className="text-gray-500 text-sm mt-2">Baton Rouge, LA — 2023</p>
</div>

<div className="min-w-[85vw] md:min-w-[600px] snap-center cursor-hover group fade-in-up delay-100">
<div className="relative overflow-hidden aspect-[16/9] mb-6">
<img alt="Lakefront Modern" className="w-full h-full object-cover image-hover-zoom filter brightness-90 group-hover:brightness-100" src="https://primary.jwwb.nl/public/m/r/m/temp-gbgrpznqebpsussomdsk/img_6593-high.jpg?enable-io=true&amp;crop=1.5%3A1&amp;width=1252"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
<span className="bg-white/10 backdrop-blur-md px-6 py-3 text-white text-xs uppercase tracking-widest border border-white/20 rounded-full">View Project</span>
</div>
</div>
<h3 className="font-serif text-2xl text-white">Lakefront Modern</h3>
<p className="text-gray-500 text-sm mt-2">Mandeville, LA — 2022</p>
</div>

<div className="min-w-[85vw] md:min-w-[600px] snap-center cursor-hover group fade-in-up delay-200">
<div className="relative overflow-hidden aspect-[16/9] mb-6">
<img alt="Estate No. 5" className="w-full h-full object-cover image-hover-zoom filter brightness-90 group-hover:brightness-100" src="https://primary.jwwb.nl/public/m/r/m/temp-gbgrpznqebpsussomdsk/img_6591-high.jpg?enable-io=true&amp;crop=1.4977%3A1&amp;width=1252"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
<span className="bg-white/10 backdrop-blur-md px-6 py-3 text-white text-xs uppercase tracking-widest border border-white/20 rounded-full">View Project</span>
</div>
</div>
<h3 className="font-serif text-2xl text-white">Estate No. 5</h3>
<p className="text-gray-500 text-sm mt-2">New Orleans, LA — 2023</p>
</div>
</div>
</section>

<section className="py-32 bg-[#1a1a1a] relative" id="process">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-24 fade-in-up">
<span className="text-[#D4AF37] text-xs uppercase tracking-widest">How we work</span>
<h2 className="font-serif text-4xl md:text-5xl text-white mt-4">The Creation Arc</h2>
</div>
<div className="relative border-l border-white/10 ml-4 md:ml-0 space-y-16">

<div className="relative pl-12 md:pl-20 fade-in-up">
<span className="absolute -left-[5px] top-2 w-[9px] h-[9px] rounded-full bg-[#D4AF37] shadow-[0_0_10px_#D4AF37]"></span>
<span className="absolute -left-10 top-0 text-white/20 font-serif text-4xl hidden md:block">01</span>
<h3 className="text-2xl font-serif text-white mb-3">Discovery &amp; Vision</h3>
<p className="text-gray-400 font-light leading-relaxed max-w-lg">
                        We begin with deep listening. Understanding your lifestyle, your aesthetic preferences, and the specific characteristics of your land to form a cohesive vision.
                    </p>
</div>

<div className="relative pl-12 md:pl-20 fade-in-up delay-100">
<span className="absolute -left-[5px] top-2 w-[9px] h-[9px] rounded-full bg-gray-600 group-hover:bg-[#D4AF37] transition-colors"></span>
<span className="absolute -left-10 top-0 text-white/20 font-serif text-4xl hidden md:block">02</span>
<h3 className="text-2xl font-serif text-white mb-3">Architectural Drafting</h3>
<p className="text-gray-400 font-light leading-relaxed max-w-lg">
                        Our architects transform concepts into detailed blueprints. Every sightline, material transition, and light source is calculated for maximum impact.
                    </p>
</div>

<div className="relative pl-12 md:pl-20 fade-in-up delay-200">
<span className="absolute -left-[5px] top-2 w-[9px] h-[9px] rounded-full bg-gray-600"></span>
<span className="absolute -left-10 top-0 text-white/20 font-serif text-4xl hidden md:block">03</span>
<h3 className="text-2xl font-serif text-white mb-3">Materialization</h3>
<p className="text-gray-400 font-light leading-relaxed max-w-lg">
                        Construction begins. We maintain a pristine site and rigorous schedule, providing you with transparent updates as your legacy takes shape.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#171717]">
<div className="max-w-5xl mx-auto px-6 text-center fade-in-up">
<svg aria-hidden="true" className="iconify text-[#D4AF37] mx-auto mb-8 iconify--lucide" data-icon="lucide:quote" data-width="40" height="40" role="img" viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<blockquote className="font-serif text-3xl md:text-5xl text-white leading-tight mb-10">
                "Craftman Builders didn't just build a house; they curated an environment. The attention to detail is something I've only seen in high-end European firms."
            </blockquote>
</div>
</section>

<section className="py-32 bg-[#1a1a1a] relative overflow-hidden" id="contact">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4AF37] opacity-5 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-2xl mx-auto px-6 relative z-10">
<div className="text-center mb-16 fade-in-up">
<h2 className="font-serif text-4xl md:text-5xl text-white mb-4">Begin Your Journey</h2>
<p className="text-gray-400 font-light">We take on a limited number of commissions annually to ensure absolute dedication to craft.</p>
</div>
<form className="space-y-8 fade-in-up delay-100">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="group relative">
<input className="cursor-hover block w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-[#D4AF37] transition-colors peer placeholder-transparent" id="name" placeholder="Name" required="" type="text"/>
<label className="absolute left-0 top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#D4AF37] peer-valid:-top-2 peer-valid:text-xs peer-valid:text-gray-500 pointer-events-none" htmlFor="name">Name</label>
</div>
<div className="group relative">
<input className="cursor-hover block w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-[#D4AF37] transition-colors peer placeholder-transparent" id="email" placeholder="Email" required="" type="email"/>
<label className="absolute left-0 top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#D4AF37] peer-valid:-top-2 peer-valid:text-xs peer-valid:text-gray-500 pointer-events-none" htmlFor="email">Email</label>
</div>
</div>
<div className="group relative">
<select className="cursor-hover block w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-[#D4AF37] transition-colors appearance-none" id="budget">
<option className="bg-[#1a1a1a] text-gray-500" disabled="" selected="" value="">Project Budget Range</option>
<option className="bg-[#1a1a1a]" value="1">$500k - $1M</option>
<option className="bg-[#1a1a1a]" value="2">$1M - $3M</option>
<option className="bg-[#1a1a1a]" value="3">$3M+</option>
</select>
<svg aria-hidden="true" className="iconify absolute right-0 top-4 text-gray-500 pointer-events-none iconify--lucide" data-icon="lucide:chevron-down" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="group relative">
<textarea className="cursor-hover block w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-[#D4AF37] transition-colors peer placeholder-transparent resize-none" id="message" placeholder="Message" required="" rows="1"></textarea>
<label className="absolute left-0 top-4 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#D4AF37] peer-valid:-top-2 peer-valid:text-xs peer-valid:text-gray-500 pointer-events-none" htmlFor="message">Tell us about your vision</label>
</div>
<div className="pt-8 text-center">
<button className="cursor-hover relative overflow-hidden group bg-white text-[#1a1a1a] px-10 py-4 text-xs uppercase tracking-widest font-medium hover:bg-[#D4AF37] transition-colors duration-500" type="submit">
<span className="relative z-10">Send Inquiry</span>
</button>
</div>
</form>
</div>
</section>

<footer className="bg-[#111] pt-24 pb-12 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
<div className="col-span-1 md:col-span-1">
<span className="font-serif text-2xl text-white tracking-tighter block mb-6">CB<span className="text-[#D4AF37]">.</span></span>
<p className="text-gray-500 text-sm leading-relaxed">
                        Redefining luxury living in Louisiana through architectural excellence and meticulous craftsmanship.
                    </p>
</div>
<div>
<h4 className="text-white text-xs uppercase tracking-widest mb-6">Contact</h4>
<ul className="space-y-4 text-sm text-gray-500">
<li>info@craftmanbuilders.com</li>
<li>+1 (504) 555-0123</li>
<li>Baton Rouge, LA</li>
</ul>
</div>
<div>
<h4 className="text-white text-xs uppercase tracking-widest mb-6">Sitemap</h4>
<ul className="space-y-4 text-sm text-gray-500">
<li><a className="hover:text-white transition-colors cursor-hover" href="#services">Expertise</a></li>
<li><a className="hover:text-white transition-colors cursor-hover" href="#projects">Portfolio</a></li>
<li><a className="hover:text-white transition-colors cursor-hover" href="#process">Process</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-xs uppercase tracking-widest mb-6">Social</h4>
<div className="flex space-x-4">
<a className="cursor-hover w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:instagram" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg>
</a>
<a className="cursor-hover w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:linkedin" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg>
</a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-[10px] text-gray-600 uppercase tracking-wider">
<p>© 2024 Craftman Builders L.L.C. All rights reserved.</p>
<div className="flex space-x-6 mt-4 md:mt-0">
<a className="hover:text-gray-400 cursor-hover" href="#">Privacy Policy</a>
<a className="hover:text-gray-400 cursor-hover" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
