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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Manrope', 'sans-serif'],
serif: ['Cormorant Garamond', 'serif'],
},
colors: {
zinc: {
50: '#fafafa',
100: '#f4f4f5',
200: '#e4e4e7',
300: '#d4d4d8',
400: '#a1a1aa',
500: '#71717a',
600: '#52525b',
700: '#3f3f46',
800: '#27272a',
900: '#18181b',
950: '#09090b',
}
},
animation: {
'slow-zoom': 'zoom 20s infinite alternate',
'fade-in-up': 'fadeInUp 1s ease-out forwards',
},
keyframes: {
zoom: {
'0%': { transform: 'scale(1)' },
'100%': { transform: 'scale(1.1)' },
},
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide Icons
        lucide.createIcons();

        // Gallery Expansion Logic
        const galleryToggleBtn = document.getElementById('gallery-toggle');
        const hiddenGallery = document.getElementById('hidden-gallery');
        const galleryText = document.getElementById('gallery-text');
        const galleryIcon = document.getElementById('gallery-icon');
        let isExpanded = false;

        galleryToggleBtn.addEventListener('click', () => {
            isExpanded = !isExpanded;
            
            if (isExpanded) {
                hiddenGallery.classList.add('expanded');
                galleryText.textContent = "Hide Gallery";
                galleryIcon.classList.add('rotate-45');
                setTimeout(() => {
                    hiddenGallery.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }, 100);
            } else {
                hiddenGallery.classList.remove('expanded');
                galleryText.textContent = "View All Projects";
                galleryIcon.classList.remove('rotate-45');
                document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
            }
        });

        // Intersection Observer for Scroll Reveals
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
        });

        // Navbar Scroll Effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('shadow-2xl', 'bg-zinc-950/95');
                navbar.classList.remove('bg-zinc-950/80');
            } else {
                navbar.classList.remove('shadow-2xl', 'bg-zinc-950/95');
                navbar.classList.add('bg-zinc-950/80');
            }
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
      
<div className="bg-noise"></div>

<nav className="fixed top-0 w-full z-40 transition-all duration-300 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900" id="navbar">
<div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 md:h-24 flex items-center justify-between">
<a className="group flex items-center gap-4" href="#">
<div className="w-10 h-10 border border-zinc-800 rounded-sm flex items-center justify-center bg-zinc-900 group-hover:bg-zinc-100 transition-colors duration-500">
<span className="font-serif text-xl font-medium tracking-tight text-zinc-100 group-hover:text-zinc-900 transition-colors">U</span>
</div>
<div className="flex flex-col">
<span className="font-serif text-xl md:text-2xl font-normal tracking-tight text-zinc-100 uppercase">Urban Glass</span>
<span className="text-xs tracking-[0.2em] uppercase text-zinc-500 group-hover:text-zinc-300 transition-colors">Premium Installations</span>
</div>
</a>
<div className="hidden md:flex items-center gap-8 lg:gap-12">
<a className="text-xs uppercase tracking-widest font-light text-zinc-400 hover:text-zinc-100 transition-colors relative after:content-[''] after:absolute after:w-0 after:h-px after:bg-zinc-100 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300" href="#about">Brand</a>
<a className="text-xs uppercase tracking-widest font-light text-zinc-400 hover:text-zinc-100 transition-colors relative after:content-[''] after:absolute after:w-0 after:h-px after:bg-zinc-100 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300" href="#services">Services</a>
<a className="text-xs uppercase tracking-widest font-light text-zinc-400 hover:text-zinc-100 transition-colors relative after:content-[''] after:absolute after:w-0 after:h-px after:bg-zinc-100 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300" href="#portfolio">Portfolio</a>
<a className="px-6 py-2.5 bg-zinc-100 text-zinc-900 text-xs uppercase tracking-widest hover:bg-zinc-300 transition-all duration-300 rounded-sm font-normal" href="#contact">
                    Get Quote
                </a>
</div>

<button className="md:hidden text-zinc-100">
<i className="w-7 h-7" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</nav>

<header className="relative w-full h-screen min-h-[600px] overflow-hidden flex items-center justify-center border-b border-zinc-900">

<div className="absolute inset-0 z-0 bg-zinc-950">
<img alt="Luxury Glass Interior" className="w-full h-full object-cover opacity-40 animate-slow-zoom grayscale-[10%] mix-blend-luminosity" src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&amp;w=2600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent"></div>
</div>
<div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
<div className="overflow-hidden mb-6">
<span className="inline-block text-zinc-300 text-xs uppercase tracking-[0.3em] font-light border border-zinc-700/50 px-4 py-1.5 rounded-full backdrop-blur-sm animate-fade-in-up bg-zinc-900/30" style={{animationDelay: '0.1s'}}>
                    Gurgaon • Premium Quality
                </span>
</div>
<h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-zinc-50 leading-[0.95] tracking-tight mb-8 animate-fade-in-up font-normal" style={{animationDelay: '0.3s'}}>
                Clarity &amp; Elegance <br/>
<span className="italic font-extralight text-zinc-400">Redefined.</span>
</h1>
<p className="text-zinc-400 font-extralight text-xl md:text-2xl max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.5s'}}>
                Exquisite glass and smart LED mirror installations crafted for high-end homes, luxury vanity spaces, and modern architecture.
            </p>
<div className="flex flex-col sm:flex-row gap-5 animate-fade-in-up" style={{animationDelay: '0.7s'}}>
<a className="group relative px-8 py-4 bg-zinc-100 text-zinc-900 overflow-hidden rounded-sm transition-all hover:scale-[1.02]" href="#contact">
<div className="absolute inset-0 w-0 bg-zinc-300 transition-all duration-[250ms] ease-out group-hover:w-full opacity-50"></div>
<span className="relative text-xs uppercase tracking-widest font-normal">Request Consultation</span>
</a>
<a className="group flex items-center justify-center gap-3 px-8 py-4 border border-zinc-700 text-zinc-100 rounded-sm hover:bg-zinc-900 hover:border-zinc-500 transition-all backdrop-blur-sm" href="https://wa.me/910000000000" target="_blank">
<i className="w-4 h-4" data-lucide="phone-call" strokeWidth="1.5"></i>
<span className="text-xs uppercase tracking-widest font-light">WhatsApp Us</span>
</a>
</div>
</div>
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 animate-bounce">
<span className="text-xs uppercase tracking-widest text-zinc-100">Scroll</span>
<div className="w-px h-12 bg-gradient-to-b from-zinc-100 to-transparent"></div>
</div>
</header>

<section className="py-24 md:py-32 relative bg-zinc-950 border-b border-zinc-900" id="about">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="relative reveal">
<div className="absolute -top-4 -left-4 w-2/3 h-2/3 border border-zinc-800 z-0"></div>
<div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 bg-zinc-900 z-0"></div>
<img alt="Premium Dark Bathroom Vanity" className="relative z-10 w-full aspect-[4/5] object-cover shadow-2xl shadow-black/50 opacity-90" src="https://images.unsplash.com/photo-1604709177227-3977c3302005?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-8 left-0 lg:-left-8 z-20 bg-zinc-900 text-zinc-50 p-6 md:p-8 max-w-xs shadow-2xl border border-zinc-800">
<i className="w-8 h-8 text-zinc-500 mb-4" data-lucide="quote" strokeWidth="1.5"></i>
<p className="font-serif text-2xl tracking-tight italic leading-relaxed font-light">
                            "True luxury is found in the flawless execution of minimal details and ambient warmth."
                        </p>
</div>
</div>

<div className="reveal">
<span className="text-zinc-500 text-xs font-medium tracking-[0.2em] uppercase block mb-4">About Urban Glass</span>
<h2 className="font-serif text-4xl md:text-5xl text-zinc-100 mb-8 leading-tight tracking-tight font-normal">
                        Elevating Gurgaon's finest spaces with crystal precision.
                    </h2>
<div className="prose prose-zinc prose-xl text-zinc-400 font-extralight">
<p className="mb-6">
                            Based in the heart of Gurgaon, Urban Glass is the premier destination for custom architectural glass and bespoke backlit mirror installations. We partner with elite homeowners, visionary architects, and leading interior designers.
                        </p>
<p className="mb-8">
                            From intelligent LED mirrors that redefine modern luxury vanities to structural glass that transforms environments, our commitment to uncompromising quality and millimeter-perfect finishing sets us apart.
                        </p>
</div>
<div className="flex flex-col gap-6 mt-8 border-t border-zinc-800 pt-8">
<div className="flex items-start gap-4">
<div className="p-3 bg-zinc-900 border border-zinc-800 rounded-sm text-zinc-300 shrink-0">
<i className="w-5 h-5" data-lucide="ruler" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="font-serif text-2xl text-zinc-100 mb-1 tracking-tight font-normal">Custom Engineered</h4>
<p className="text-base text-zinc-500 font-light">Tailored dimensions and bespoke designs to seamlessly integrate with your unique architectural vision.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-3 bg-zinc-900 border border-zinc-800 rounded-sm text-zinc-300 shrink-0">
<i className="w-5 h-5" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="font-serif text-2xl text-zinc-100 mb-1 tracking-tight font-normal">Impeccable Standards</h4>
<p className="text-base text-zinc-500 font-light">Using only high-grade toughened glass and premium hardware, backed by flawless professional installation.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950 relative overflow-hidden" id="services">
<div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
<div className="text-center max-w-2xl mx-auto mb-16 reveal">
<span className="text-zinc-500 text-xs font-medium tracking-[0.2em] uppercase block mb-3">Our Expertise</span>
<h2 className="font-serif text-4xl md:text-5xl text-zinc-100 tracking-tight font-normal">Premium Services</h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-zinc-900 p-8 md:p-10 hover:-translate-y-1 transition-transform duration-500 border border-zinc-800 shadow-sm hover:shadow-2xl hover:shadow-zinc-900/50 rounded-sm reveal">
<div className="mb-6 inline-flex items-center justify-center w-14 h-14 bg-zinc-950 border border-zinc-800 text-zinc-300 rounded-sm group-hover:bg-zinc-800 group-hover:text-zinc-100 transition-colors duration-300">
<i className="w-6 h-6" data-lucide="lightbulb" strokeWidth="1.5"></i>
</div>
<h3 className="font-serif text-3xl text-zinc-100 mb-4 tracking-tight font-normal">Smart LED Mirrors</h3>
<p className="text-zinc-400 text-base leading-relaxed mb-6 font-extralight">
                        State-of-the-art custom backlit mirrors featuring touch sensors, defoggers, and adjustable warm ambient lighting. Perfect for luxury vanities.
                    </p>
<ul className="space-y-2 border-t border-zinc-800 pt-4">
<li className="flex items-center gap-2 text-xs text-zinc-500 uppercase tracking-wide font-light">
<span className="w-1.5 h-1.5 bg-zinc-600 rounded-full"></span> Custom Shapes &amp; Sizes
                        </li>
</ul>
</div>

<div className="group bg-zinc-900 p-8 md:p-10 hover:-translate-y-1 transition-transform duration-500 border border-zinc-800 shadow-sm hover:shadow-2xl hover:shadow-zinc-900/50 rounded-sm reveal" style={{transitionDelay: '100ms'}}>
<div className="mb-6 inline-flex items-center justify-center w-14 h-14 bg-zinc-950 border border-zinc-800 text-zinc-300 rounded-sm group-hover:bg-zinc-800 group-hover:text-zinc-100 transition-colors duration-300">
<i className="w-6 h-6" data-lucide="bath" strokeWidth="1.5"></i>
</div>
<h3 className="font-serif text-3xl text-zinc-100 mb-4 tracking-tight font-normal">Shower Partitions</h3>
<p className="text-zinc-400 text-base leading-relaxed mb-6 font-extralight">
                        Frameless, ultra-clear toughened glass enclosures that create an illusion of space while keeping your bathroom immaculate and sophisticated.
                    </p>
<ul className="space-y-2 border-t border-zinc-800 pt-4">
<li className="flex items-center gap-2 text-xs text-zinc-500 uppercase tracking-wide font-light">
<span className="w-1.5 h-1.5 bg-zinc-600 rounded-full"></span> Premium Dark Hardware
                        </li>
</ul>
</div>

<div className="group bg-zinc-900 p-8 md:p-10 hover:-translate-y-1 transition-transform duration-500 border border-zinc-800 shadow-sm hover:shadow-2xl hover:shadow-zinc-900/50 rounded-sm reveal" style={{transitionDelay: '200ms'}}>
<div className="mb-6 inline-flex items-center justify-center w-14 h-14 bg-zinc-950 border border-zinc-800 text-zinc-300 rounded-sm group-hover:bg-zinc-800 group-hover:text-zinc-100 transition-colors duration-300">
<i className="w-6 h-6" data-lucide="layers" strokeWidth="1.5"></i>
</div>
<h3 className="font-serif text-3xl text-zinc-100 mb-4 tracking-tight font-normal">Toughened Glass</h3>
<p className="text-zinc-400 text-base leading-relaxed mb-6 font-extralight">
                        High-strength architectural glass engineered for safety and aesthetic brilliance. Ideal for facades, doors, tabletops, and heavy-duty structural use.
                    </p>
<ul className="space-y-2 border-t border-zinc-800 pt-4">
<li className="flex items-center gap-2 text-xs text-zinc-500 uppercase tracking-wide font-light">
<span className="w-1.5 h-1.5 bg-zinc-600 rounded-full"></span> Impact &amp; Heat Resistant
                        </li>
</ul>
</div>

<div className="group bg-zinc-900 p-8 md:p-10 hover:-translate-y-1 transition-transform duration-500 border border-zinc-800 shadow-sm hover:shadow-2xl hover:shadow-zinc-900/50 rounded-sm reveal">
<div className="mb-6 inline-flex items-center justify-center w-14 h-14 bg-zinc-950 border border-zinc-800 text-zinc-300 rounded-sm group-hover:bg-zinc-800 group-hover:text-zinc-100 transition-colors duration-300">
<i className="w-6 h-6" data-lucide="sparkles" strokeWidth="1.5"></i>
</div>
<h3 className="font-serif text-3xl text-zinc-100 mb-4 tracking-tight font-normal">Decorative Mirrors</h3>
<p className="text-zinc-400 text-base leading-relaxed mb-6 font-extralight">
                        Elevate interiors with our bespoke decorative collection. Featuring tinted glass, fluted textures, and antique finishes tailored for feature walls.
                    </p>
<ul className="space-y-2 border-t border-zinc-800 pt-4">
<li className="flex items-center gap-2 text-xs text-zinc-500 uppercase tracking-wide font-light">
<span className="w-1.5 h-1.5 bg-zinc-600 rounded-full"></span> Architectural Textures
                        </li>
</ul>
</div>

<div className="group bg-zinc-900 p-8 md:p-10 hover:-translate-y-1 transition-transform duration-500 border border-zinc-800 shadow-sm hover:shadow-2xl hover:shadow-zinc-900/50 rounded-sm reveal" style={{transitionDelay: '100ms'}}>
<div className="mb-6 inline-flex items-center justify-center w-14 h-14 bg-zinc-950 border border-zinc-800 text-zinc-300 rounded-sm group-hover:bg-zinc-800 group-hover:text-zinc-100 transition-colors duration-300">
<i className="w-6 h-6" data-lucide="arrow-up-to-line" strokeWidth="1.5"></i>
</div>
<h3 className="font-serif text-3xl text-zinc-100 mb-4 tracking-tight font-normal">Glass Railings</h3>
<p className="text-zinc-400 text-base leading-relaxed mb-6 font-extralight">
                        Minimalist and robust balcony and staircase railings. Offering seamless, unobstructed views while adhering to the highest safety standards.
                    </p>
<ul className="space-y-2 border-t border-zinc-800 pt-4">
<li className="flex items-center gap-2 text-xs text-zinc-500 uppercase tracking-wide font-light">
<span className="w-1.5 h-1.5 bg-zinc-600 rounded-full"></span> Frameless Systems
                        </li>
</ul>
</div>

<div className="group bg-zinc-900 p-8 md:p-10 hover:-translate-y-1 transition-transform duration-500 border border-zinc-800 shadow-sm hover:shadow-2xl hover:shadow-zinc-900/50 rounded-sm reveal" style={{transitionDelay: '200ms'}}>
<div className="mb-6 inline-flex items-center justify-center w-14 h-14 bg-zinc-950 border border-zinc-800 text-zinc-300 rounded-sm group-hover:bg-zinc-800 group-hover:text-zinc-100 transition-colors duration-300">
<i className="w-6 h-6" data-lucide="building-2" strokeWidth="1.5"></i>
</div>
<h3 className="font-serif text-3xl text-zinc-100 mb-4 tracking-tight font-normal">Office Partitions</h3>
<p className="text-zinc-400 text-base leading-relaxed mb-6 font-extralight">
                        Modernize workspaces with sleek glass partitions. Enhance natural light flow while providing acoustic privacy for meeting rooms and executive cabins.
                    </p>
<ul className="space-y-2 border-t border-zinc-800 pt-4">
<li className="flex items-center gap-2 text-xs text-zinc-500 uppercase tracking-wide font-light">
<span className="w-1.5 h-1.5 bg-zinc-600 rounded-full"></span> Acoustic &amp; Double-Glazed
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 border-y border-zinc-800">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="text-center max-w-2xl mx-auto mb-16 reveal">
<span className="text-zinc-400 text-xs font-medium tracking-[0.2em] uppercase block mb-3">Workflow</span>
<h2 className="font-serif text-4xl md:text-5xl text-zinc-100 tracking-tight font-normal">Our Precision Process</h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center reveal">
<div className="flex flex-col items-center">
<div className="w-16 h-16 rounded-sm border border-zinc-700 flex items-center justify-center text-zinc-100 mb-4 bg-zinc-950 shadow-inner">
<span className="text-2xl font-serif tracking-tight">1</span>
</div>
<h4 className="text-sm uppercase tracking-widest font-normal mb-2 text-zinc-100">Consultation</h4>
<p className="text-sm text-zinc-500 font-extralight">Discussing your vision</p>
</div>
<div className="flex flex-col items-center relative after:hidden md:after:block after:absolute after:w-full after:h-px after:bg-zinc-800 after:top-8 after:left-1/2 after:-z-10">
<div className="w-16 h-16 rounded-sm border border-zinc-700 flex items-center justify-center text-zinc-100 mb-4 bg-zinc-950 shadow-inner">
<span className="text-2xl font-serif tracking-tight">2</span>
</div>
<h4 className="text-sm uppercase tracking-widest font-normal mb-2 text-zinc-100">Measurement</h4>
<p className="text-sm text-zinc-500 font-extralight">Millimeter accuracy</p>
</div>
<div className="flex flex-col items-center relative after:hidden md:after:block after:absolute after:w-full after:h-px after:bg-zinc-800 after:top-8 after:left-1/2 after:-z-10">
<div className="w-16 h-16 rounded-sm border border-zinc-700 flex items-center justify-center text-zinc-100 mb-4 bg-zinc-950 shadow-inner">
<span className="text-2xl font-serif tracking-tight">3</span>
</div>
<h4 className="text-sm uppercase tracking-widest font-normal mb-2 text-zinc-100">Design</h4>
<p className="text-sm text-zinc-500 font-extralight">Material &amp; finishing</p>
</div>
<div className="flex flex-col items-center relative after:hidden md:after:block after:absolute after:w-full after:h-px after:bg-zinc-800 after:top-8 after:left-1/2 after:-z-10">
<div className="w-16 h-16 rounded-sm border border-zinc-700 flex items-center justify-center text-zinc-100 mb-4 bg-zinc-950 shadow-inner">
<span className="text-2xl font-serif tracking-tight">4</span>
</div>
<h4 className="text-sm uppercase tracking-widest font-normal mb-2 text-zinc-100">Installation</h4>
<p className="text-sm text-zinc-500 font-extralight">Professional execution</p>
</div>
<div className="flex flex-col items-center">
<div className="w-16 h-16 rounded-sm border border-zinc-700 flex items-center justify-center text-zinc-100 mb-4 bg-zinc-950 shadow-inner">
<i className="w-6 h-6" data-lucide="check-circle-2" strokeWidth="1.5"></i>
</div>
<h4 className="text-sm uppercase tracking-widest font-normal mb-2 text-zinc-100">Quality Check</h4>
<p className="text-sm text-zinc-500 font-extralight">Flawless handover</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950 relative" id="portfolio">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 reveal">
<div>
<span className="text-zinc-500 text-xs font-medium tracking-[0.2em] uppercase block mb-3">Portfolio</span>
<h2 className="font-serif text-4xl md:text-5xl text-zinc-100 tracking-tight font-normal">Featured Projects</h2>
</div>
<p className="text-zinc-400 font-extralight text-base max-w-sm text-right md:text-left">
                    Explore our recent installations across Gurgaon's premium residential and architectural spaces.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 reveal">

<div className="group relative overflow-hidden h-[400px] cursor-zoom-in rounded-sm border border-zinc-900">
<img alt="Dark Bathroom Mirror" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
<div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<p className="text-zinc-100 font-serif text-2xl tracking-tight font-normal mb-1">Textured Vanity Mirrors</p>
<p className="text-zinc-400 text-sm font-light uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">DLF Phase 5</p>
</div>
</div>

<div className="group relative overflow-hidden h-[400px] cursor-zoom-in lg:col-span-2 rounded-sm border border-zinc-900">
<img alt="Luxury Backlit Mirror" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
<div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<p className="text-zinc-100 font-serif text-3xl tracking-tight font-normal mb-1">Custom LED Backlighting</p>
<p className="text-zinc-400 text-sm font-light uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">Golf Course Road</p>
</div>
</div>

<div className="group relative overflow-hidden h-[400px] cursor-zoom-in rounded-sm border border-zinc-900">
<img alt="Glass Partitions" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
<div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<p className="text-zinc-100 font-serif text-2xl tracking-tight font-normal mb-1">Frameless Enclosures</p>
</div>
</div>

<div className="group relative overflow-hidden h-[400px] cursor-zoom-in rounded-sm border border-zinc-900">
<img alt="Decorative Mirror Feature" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
<div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<p className="text-zinc-100 font-serif text-2xl tracking-tight font-normal mb-1">Bronze Tinted Glass</p>
</div>
</div>

<div className="group relative overflow-hidden h-[400px] cursor-zoom-in rounded-sm border border-zinc-900">
<img alt="Shower Enclosure" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
<div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<p className="text-zinc-100 font-serif text-2xl tracking-tight font-normal mb-1">Toughened Partitions</p>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4" id="hidden-gallery">
<div className="h-64 bg-zinc-900 overflow-hidden relative group rounded-sm border border-zinc-800"><img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 hover:opacity-100" src="https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800"/></div>
<div className="h-64 bg-zinc-900 overflow-hidden relative group rounded-sm border border-zinc-800"><img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 hover:opacity-100" src="https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800"/></div>
<div className="h-64 bg-zinc-900 overflow-hidden relative group rounded-sm border border-zinc-800"><img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 hover:opacity-100" src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800"/></div>
<div className="h-64 bg-zinc-900 overflow-hidden relative group rounded-sm border border-zinc-800"><img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 hover:opacity-100" src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800"/></div>
</div>

<div className="text-center mt-12">
<button className="inline-flex flex-col items-center gap-3 group outline-none" id="gallery-toggle">
<span className="text-xs font-normal uppercase tracking-[0.2em] text-zinc-400 group-hover:text-zinc-100 transition-colors" id="gallery-text">View All Projects</span>
<div className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center group-hover:bg-zinc-800 group-hover:border-zinc-500 transition-all duration-300">
<i className="w-5 h-5 text-zinc-400 group-hover:text-zinc-100 transition-all duration-300" data-lucide="plus-circle" id="gallery-icon" strokeWidth="1.5"></i>
</div>
</button>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 border-t border-zinc-800">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<h2 className="font-serif text-4xl md:text-5xl text-zinc-100 text-center mb-16 tracking-tight reveal font-normal">Client Experiences</h2>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-zinc-950 p-8 rounded-sm shadow-sm border border-zinc-800 border-t-2 border-t-zinc-600 reveal">
<div className="flex gap-1 mb-6">
<i className="w-4 h-4 fill-zinc-500 text-zinc-500" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-zinc-500 text-zinc-500" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-zinc-500 text-zinc-500" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-zinc-500 text-zinc-500" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-zinc-500 text-zinc-500" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-zinc-400 text-base leading-relaxed mb-8 italic font-extralight">
                        "Urban Glass installed a custom LED backlit mirror and frameless shower enclosure in our dark-themed master bath. The finishing is incredibly premium, perfectly matching our fluted wood vanity."
                    </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-sm bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-300 font-normal text-xs uppercase">AS</div>
<div>
<span className="text-zinc-100 font-normal text-base block">Aanya Sharma</span>
<span className="text-zinc-500 text-xs font-light">DLF Phase 5</span>
</div>
</div>
</div>

<div className="bg-zinc-950 p-8 rounded-sm shadow-sm border border-zinc-800 border-t-2 border-t-zinc-600 reveal" style={{transitionDelay: '100ms'}}>
<div className="flex gap-1 mb-6">
<i className="w-4 h-4 fill-zinc-500 text-zinc-500" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-zinc-500 text-zinc-500" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-zinc-500 text-zinc-500" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-zinc-500 text-zinc-500" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-zinc-500 text-zinc-500" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-zinc-400 text-base leading-relaxed mb-8 italic font-extralight">
                        "We hired them for full architectural glass installations. Their understanding of luxury ambient lighting integrated with mirrors is unmatched in Gurgaon. Delivered exactly on schedule."
                    </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-sm bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-300 font-normal text-xs uppercase">RM</div>
<div>
<span className="text-zinc-100 font-normal text-base block">Rahul Mehta</span>
<span className="text-zinc-500 text-xs font-light">Interior Architect</span>
</div>
</div>
</div>

<div className="bg-zinc-950 p-8 rounded-sm shadow-sm border border-zinc-800 border-t-2 border-t-zinc-600 reveal" style={{transitionDelay: '200ms'}}>
<div className="flex gap-1 mb-6">
<i className="w-4 h-4 fill-zinc-500 text-zinc-500" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-zinc-500 text-zinc-500" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-zinc-500 text-zinc-500" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-zinc-500 text-zinc-500" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-zinc-500 text-zinc-500" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-zinc-400 text-base leading-relaxed mb-8 italic font-extralight">
                        "The decorative bronze-tinted mirrors they designed for our living space completely transformed the mood. You can tell they use top-tier materials. The clarity and edge polishing is flawless."
                    </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-sm bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-300 font-normal text-xs uppercase">PK</div>
<div>
<span className="text-zinc-100 font-normal text-base block">Priya Kapoor</span>
<span className="text-zinc-500 text-xs font-light">Golf Course Road</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950 text-zinc-100 relative border-t border-zinc-900" id="contact">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

<div className="reveal">
<span className="text-zinc-500 text-xs font-medium tracking-[0.2em] uppercase block mb-3">Get in Touch</span>
<h2 className="font-serif text-4xl md:text-5xl text-white tracking-tight mb-8 font-normal">Let's discuss your project</h2>
<p className="text-zinc-400 font-extralight mb-12 text-xl max-w-md leading-relaxed">
                        Ready to elevate your space with premium custom glass installations? Contact us for a precise quote and expert design consultation.
                    </p>
<div className="space-y-8">
<div className="flex items-start gap-5 group">
<div className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-sm flex items-center justify-center text-zinc-400 group-hover:bg-zinc-800 group-hover:text-zinc-100 transition-colors">
<i className="w-5 h-5" data-lucide="map-pin" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-white text-2xl font-serif mb-1 tracking-tight font-normal">Studio &amp; Office</h4>
<p className="text-zinc-400 text-base leading-relaxed font-light">
                                    Sector 54, Golf Course Road<br/>
                                    Gurugram, Haryana 122011
                                </p>
</div>
</div>
<div className="flex items-start gap-5 group">
<div className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-sm flex items-center justify-center text-zinc-400 group-hover:bg-zinc-800 group-hover:text-zinc-100 transition-colors">
<i className="w-5 h-5" data-lucide="phone" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-white text-2xl font-serif mb-1 tracking-tight font-normal">Direct Line</h4>
<a className="text-zinc-400 text-base hover:text-white transition-colors font-light" href="tel:+919876543210">+91 98765 43210</a>
</div>
</div>
<div className="flex items-start gap-5 group">
<div className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-sm flex items-center justify-center text-zinc-400 group-hover:bg-zinc-800 group-hover:text-zinc-100 transition-colors">
<i className="w-5 h-5" data-lucide="mail" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-white text-2xl font-serif mb-1 tracking-tight font-normal">Email</h4>
<a className="text-zinc-400 text-base hover:text-white transition-colors font-light" href="mailto:contact@urbanglass.in">contact@urbanglass.in</a>
</div>
</div>
</div>
</div>

<div className="bg-zinc-900 p-8 md:p-10 border border-zinc-800 rounded-sm reveal shadow-2xl">
<h3 className="font-serif text-3xl text-white mb-8 tracking-tight font-normal">Request a Quote</h3>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="group">
<label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2 group-focus-within:text-zinc-300 transition-colors font-light">Full Name</label>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-sm py-3 px-4 text-white font-light focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all placeholder:text-zinc-700" placeholder="e.g. Kabir Singh" type="text"/>
</div>
<div className="group">
<label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2 group-focus-within:text-zinc-300 transition-colors font-light">Phone Number</label>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-sm py-3 px-4 text-white font-light focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all placeholder:text-zinc-700" placeholder="+91 ..." type="tel"/>
</div>
</div>
<div className="group">
<label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2 group-focus-within:text-zinc-300 transition-colors font-light">Email Address</label>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-sm py-3 px-4 text-white font-light focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all placeholder:text-zinc-700" placeholder="you@example.com" type="email"/>
</div>
<div className="group">
<label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2 group-focus-within:text-zinc-300 transition-colors font-light">Project Details</label>
<textarea className="w-full bg-zinc-950 border border-zinc-800 rounded-sm py-3 px-4 text-white font-light focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all resize-none placeholder:text-zinc-700" placeholder="Describe your requirement (e.g. Backlit LED mirror for dark vanity)" rows="4"></textarea>
</div>
<div className="flex flex-col sm:flex-row gap-4 mt-8 pt-4">
<button className="w-full py-4 bg-zinc-100 hover:bg-zinc-300 text-zinc-900 font-normal uppercase tracking-widest text-xs transition-colors text-center rounded-sm" type="submit">
                                Submit Enquiry
                            </button>
<a className="w-full py-4 border border-zinc-700 hover:border-zinc-400 hover:bg-zinc-900 text-white font-normal uppercase tracking-widest text-xs transition-colors text-center flex items-center justify-center gap-2 rounded-sm" href="https://wa.me/910000000000">
<i className="w-4 h-4" data-lucide="phone-call" strokeWidth="1.5"></i>
                                WhatsApp
                            </a>
</div>
</form>
</div>
</div>
</div>
</section>

<section className="w-full h-[400px] bg-zinc-950 relative overflow-hidden border-t border-zinc-900">
<iframe allowfullscreen="" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.83441551606!2d77.0911!3d28.4239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI1JzI2LjAiTiA3N8KwMDUnMjguMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" style={{border: '0', filter: 'invert(90%) hue-rotate(180deg) brightness(80%) contrast(85%) grayscale(20%)'}} width="100%">
</iframe>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none bg-zinc-950/90 backdrop-blur-md px-6 py-3 rounded-full text-xs uppercase tracking-widest font-normal text-zinc-100 shadow-2xl border border-zinc-800">
            Gurgaon Studio
        </div>
</section>

<footer className="bg-black text-zinc-500 border-t border-zinc-900">
<div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<h5 className="text-zinc-100 font-serif text-2xl mb-1 tracking-tight font-normal">URBAN GLASS</h5>
<p className="text-xs font-light">Premium Custom Glass &amp; Mirrors</p>
</div>
<div className="flex flex-wrap justify-center gap-8">
<a className="text-xs uppercase tracking-widest hover:text-zinc-100 transition-colors font-light" href="#about">Brand</a>
<a className="text-xs uppercase tracking-widest hover:text-zinc-100 transition-colors font-light" href="#services">Services</a>
<a className="text-xs uppercase tracking-widest hover:text-zinc-100 transition-colors font-light" href="#portfolio">Portfolio</a>
<a className="text-xs uppercase tracking-widest hover:text-zinc-100 transition-colors font-light" href="#contact">Contact</a>
</div>
<div className="text-xs font-light">
                    © 2024 Urban Glass. Built for precision.
                </div>
</div>
</div>
</footer>



    </>
  );
}
