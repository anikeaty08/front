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
sans: ['Inter', 'sans-serif'],
display: ['Manrope', 'sans-serif'],
},
colors: {
background: '#050505',
surface: '#0F0F0F',
card: '#161616',
border: '#222222',
primary: '#EAEAEA',
secondary: '#888888',
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
},
transitionTimingFunction: {
'expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
}
}
}
}



        document.addEventListener('DOMContentLoaded', () => {
            const preloader = document.getElementById('preloader');
            const loaderBar = document.getElementById('loader-bar');
            const loaderText = document.getElementById('loader-text');
            const navbar = document.getElementById('navbar');

            // 1. Preloader Animation
            let width = 0;
            const interval = setInterval(() => {
                width += Math.floor(Math.random() * 5) + 2;
                if (width > 100) width = 100;
                
                loaderBar.style.width = width + '%';
                loaderText.innerText = width + '%';

                if (width === 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        preloader.classList.add('hide');
                        document.body.style.overflow = 'auto'; // Enable scrolling
                        
                        // Show navbar after loader
                        setTimeout(() => {
                            navbar.classList.remove('-translate-y-full');
                        }, 500);
                        
                        // Trigger hero animations explicitly if needed, or let Observer handle it
                    }, 500);
                }
            }, 30);

            // 2. Intersection Observer for Scroll Animations
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const revealElements = document.querySelectorAll('.reveal-trigger');
            revealElements.forEach(el => observer.observe(el));
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
      <div className="fixed top-0 w-full h-screen -z-10 bg-cover bg-center" data-alpha-mask="80" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/44d9eae6-4c9f-4d3c-95e4-34d371c087d8_3840w.png?w=800&amp', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>


<div className="fixed flex flex-col md:p-12 transition-transform duration-[1.5s] ease-expo bg-black z-[100] pt-6 pr-6 pb-6 pl-6 top-0 right-0 bottom-0 left-0 justify-between" id="preloader">
<div className="flex text-[10px] text-secondary uppercase tracking-widest font-mono w-full justify-between">
<span className="">Portfolio 2024</span>
</div>
<div className="flex flex-col items-center">
<h1 className="md:text-9xl text-7xl font-bold text-zinc-50 tracking-tighter font-nunito">PRIT</h1>
<div className="mt-8 w-32 h-[1px] bg-white/10 overflow-hidden">
<div className="h-full bg-white w-0 transition-all duration-300 ease-out" id="loader-bar"></div>
</div>
<div className="mt-2 font-mono text-[10px] text-secondary" id="loader-text">0%</div>
</div>
<div className="flex justify-between w-full text-[10px] font-mono text-secondary uppercase tracking-widest">
<span>New York</span>
<span>Tokyo</span>
</div>
</div>

<nav className="fixed z-50 transition-transform duration-700 -translate-y-full w-full pt-6 pr-6 pb-6 pl-6 top-0 left-0" id="navbar">
<div className="flex max-w-7xl mr-auto ml-auto items-center justify-between">
<a className="flex items-center gap-2 z-50 mix-blend-difference" href="#">
<div className="w-2.5 h-2.5 bg-white rounded-sm rotate-45"></div>
<span className="font-display font-bold text-lg tracking-tighter text-white">AURA</span>
</a>

<div className="hidden md:flex items-center gap-1 bg-surface/50 backdrop-blur-md border border-white/5 rounded-full px-2 py-1.5 shadow-xl">
<a className="px-5 py-2 text-xs font-medium text-secondary hover:text-white hover:bg-white/10 rounded-full transition-all" href="#work">Work</a>
<a className="px-5 py-2 text-xs font-medium text-secondary hover:text-white hover:bg-white/10 rounded-full transition-all" href="#studio">Studio</a>
<a className="px-5 py-2 text-xs font-medium text-secondary hover:text-white hover:bg-white/10 rounded-full transition-all" href="#news">Journal</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider bg-white text-black px-5 py-2.5 rounded-full hover:bg-primary transition-colors" href="#contact">
                    Start Project
                </a>
<button className="md:hidden text-white mix-blend-difference">
<iconify-icon height="24" icon="lucide:menu" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="relative min-h-screen flex flex-col justify-end pb-20 px-6 overflow-hidden border-b border-border" style={{}}>
<div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" style={{}}></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background pointer-events-none"></div>
<div className="max-w-[1600px] w-full mx-auto relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
<div className="lg:col-span-9 reveal-trigger">
<div className="fade-up mb-8 inline-flex items-center gap-3 border border-white/10 bg-white/5 backdrop-blur-sm rounded-full px-4 py-1.5">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-[10px] font-mono uppercase tracking-widest text-white/80">Available for Commissions</span>
</div>
<h1 className="font-display font-semibold text-[13vw] leading-[0.85] tracking-tighter text-white mix-blend-difference">
<div className="reveal-wrapper">
<span className="text-reveal delay-100">SCULPTING</span>
</div>
<div className="reveal-wrapper">
<span className="text-reveal delay-200 text-secondary">THE VOID.</span>
</div>
</h1>
</div>
<div className="lg:col-span-3 reveal-trigger lg:pb-4">
<div className="fade-up delay-300">
<p className="text-secondary text-sm leading-relaxed text-balance max-w-xs lg:text-right ml-auto">
                            A global architecture practice defining the intersection of light, material, and human experience.
                        </p>
<div className="mt-8 flex justify-start lg:justify-end">
<button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group">
<iconify-icon className="group-hover:translate-y-1 transition-transform" height="20" icon="lucide:arrow-down" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="bg-surface" id="work">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

<article className="group relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] border-r border-b border-border overflow-hidden cursor-pointer reveal-trigger">
<div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-black/0 transition-colors duration-500"></div>
<img alt="Project" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-expo" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2700&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-0 left-0 w-full p-8 flex justify-between items-start z-20">
<span className="font-mono text-xs text-white border border-white/20 px-2 py-1 rounded backdrop-blur-md">01</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 -translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-expo">
<iconify-icon height="18" icon="lucide:arrow-up-right" width="18"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-8 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-expo delay-100">
<h3 className="font-display font-semibold text-2xl tracking-tight text-white">Kyoto Silent House</h3>
<p className="text-xs text-white/70 mt-1">Residential — Japan</p>
</div>
</article>

<article className="group relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] border-r border-b border-border overflow-hidden cursor-pointer reveal-trigger">
<div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-black/0 transition-colors duration-500"></div>
<img alt="Project" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-expo" src="https://images.unsplash.com/photo-1574958269340-fa927503f3dd?q=80&amp;w=2548&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-0 left-0 w-full p-8 flex justify-between items-start z-20">
<span className="font-mono text-xs text-white border border-white/20 px-2 py-1 rounded backdrop-blur-md">02</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 -translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-expo">
<iconify-icon height="18" icon="lucide:arrow-up-right" width="18"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-8 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-expo delay-100">
<h3 className="font-display font-semibold text-2xl tracking-tight text-white">Mono Museum</h3>
<p className="text-xs text-white/70 mt-1">Cultural — Berlin</p>
</div>
</article>

<article className="group relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] border-b border-border overflow-hidden cursor-pointer reveal-trigger">
<div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-black/0 transition-colors duration-500"></div>
<img alt="Project" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-expo" src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-0 left-0 w-full p-8 flex justify-between items-start z-20">
<span className="font-mono text-xs text-white border border-white/20 px-2 py-1 rounded backdrop-blur-md">03</span>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 -translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-expo">
<iconify-icon height="18" icon="lucide:arrow-up-right" width="18"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-8 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-expo delay-100">
<h3 className="font-display font-semibold text-2xl tracking-tight text-white">Azure Tower</h3>
<p className="text-xs text-white/70 mt-1">Commercial — Dubai</p>
</div>
</article>
</div>
</section>

<section className="py-32 px-6 border-b border-border bg-background" id="studio">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
<div className="md:col-span-3 reveal-trigger">
<div className="fade-up sticky top-32">
<h2 className="font-mono text-[10px] uppercase tracking-widest text-secondary mb-4">The Studio</h2>
<div className="w-12 h-[1px] bg-secondary/30"></div>
</div>
</div>
<div className="md:col-span-9">
<div className="reveal-trigger mb-24">
<p className="font-display font-medium text-3xl md:text-5xl lg:text-6xl tracking-tighter leading-[1.1] text-white">
<span className="reveal-wrapper block"><span className="text-reveal delay-100">Architecture is not just</span></span>
<span className="reveal-wrapper block"><span className="text-reveal delay-200">about building. It is the</span></span>
<span className="reveal-wrapper block"><span className="text-reveal delay-300">thoughtful <span className="text-secondary italic font-serif">manipulation</span> of</span></span>
<span className="reveal-wrapper block"><span className="text-reveal delay-400">light, space, and time.</span></span>
</p>
</div>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-border reveal-trigger">
<div className="fade-up delay-100">
<span className="block font-display font-bold text-4xl tracking-tighter mb-2">90+</span>
<span className="text-xs text-secondary font-mono uppercase tracking-wider">Awards Won</span>
</div>
<div className="fade-up delay-200">
<span className="block font-display font-bold text-4xl tracking-tighter mb-2">15</span>
<span className="text-xs text-secondary font-mono uppercase tracking-wider">Global Offices</span>
</div>
<div className="fade-up delay-300">
<span className="block font-display font-bold text-4xl tracking-tighter mb-2">300</span>
<span className="text-xs text-secondary font-mono uppercase tracking-wider">Projects</span>
</div>
<div className="fade-up delay-400">
<span className="block font-display font-bold text-4xl tracking-tighter mb-2">24</span>
<span className="text-xs text-secondary font-mono uppercase tracking-wider">Years Active</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-b border-border bg-surface relative overflow-hidden">
<div className="max-w-7xl mx-auto relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal-trigger">
<div className="fade-up">
<h2 className="font-display font-semibold text-4xl tracking-tight mb-4">Capabilities</h2>
<p className="text-secondary text-sm max-w-md">Multidisciplinary approach blending technical precision with artistic intuition.</p>
</div>
<a className="hidden md:flex fade-up delay-100 items-center gap-2 text-xs font-bold uppercase tracking-wider hover:text-white transition-colors" href="#">
                    All Services <iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal-trigger">

<div className="fade-up delay-100 p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-white/10 transition-all duration-500 group">
<div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6 text-white border border-white/10">
<iconify-icon icon="lucide:box" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-display font-medium text-xl text-white mb-3">Architectural Design</h3>
<p className="text-sm text-secondary leading-relaxed mb-6">From initial concept sketches to full-scale construction documents for residential and commercial.</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-secondary group-hover:text-white transition-colors">
<div className="w-1 h-1 bg-white rounded-full"></div> Concept Development
                        </li>
<li className="flex items-center gap-2 text-xs text-secondary group-hover:text-white transition-colors">
<div className="w-1 h-1 bg-white rounded-full"></div> 3D Visualization
                        </li>
</ul>
</div>

<div className="fade-up delay-200 p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-white/10 transition-all duration-500 group">
<div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6 text-white border border-white/10">
<iconify-icon icon="lucide:layers" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-display font-medium text-xl text-white mb-3">Interior &amp; Spatial</h3>
<p className="text-sm text-secondary leading-relaxed mb-6">Designing the inner void. Bespoke furniture, material selection, and lighting design.</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-secondary group-hover:text-white transition-colors">
<div className="w-1 h-1 bg-white rounded-full"></div> Material Research
                        </li>
<li className="flex items-center gap-2 text-xs text-secondary group-hover:text-white transition-colors">
<div className="w-1 h-1 bg-white rounded-full"></div> Custom Furniture
                        </li>
</ul>
</div>

<div className="fade-up delay-300 p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-white/10 transition-all duration-500 group">
<div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6 text-white border border-white/10">
<iconify-icon icon="lucide:tree-deciduous" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-display font-medium text-xl text-white mb-3">Urban Planning</h3>
<p className="text-sm text-secondary leading-relaxed mb-6">Large scale masterplanning with a focus on sustainability and community integration.</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-secondary group-hover:text-white transition-colors">
<div className="w-1 h-1 bg-white rounded-full"></div> Landscape Integration
                        </li>
<li className="flex items-center gap-2 text-xs text-secondary group-hover:text-white transition-colors">
<div className="w-1 h-1 bg-white rounded-full"></div> Sustainability Analysis
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="h-[60vh] md:h-[80vh] w-full relative group overflow-hidden border-b border-border reveal-trigger">
<div className="absolute inset-0 bg-black">
<img className="w-full h-full object-cover opacity-50 grayscale transition-transform duration-[2s] ease-expo group-hover:scale-105" src="https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&amp;w=2600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 flex items-center justify-center p-6">
<div className="fade-up delay-100 backdrop-blur-md bg-black/30 border border-white/10 p-10 md:p-14 rounded-3xl max-w-xl w-full text-center">
<span className="text-[10px] font-mono text-white/70 uppercase tracking-widest mb-4 block">Research Study</span>
<h3 className="font-display font-semibold text-3xl md:text-4xl tracking-tight text-white mb-4">Concrete &amp; Nature</h3>
<p className="text-sm text-white/80 leading-relaxed mb-8">
                    An exploration into how brutalist structures can coexist and support vertical vegetation in dense urban environments.
                </p>
<button className="bg-white text-black px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-neutral-200 transition-colors">
                    Read The Paper
                </button>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 border-b border-border" id="news">
<div className="flex items-center justify-between mb-16 reveal-trigger">
<h2 className="fade-up font-display font-semibold text-3xl tracking-tight">Latest Journal</h2>
<a className="fade-up text-xs font-medium text-secondary hover:text-white transition-colors" href="#">View All</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal-trigger">
<article className="group cursor-pointer fade-up delay-100">
<div className="aspect-[16/10] mb-6 overflow-hidden rounded-lg bg-card border border-white/5 relative">
<img className="w-full h-full object-cover opacity-70 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&amp;w=1200"/>
</div>
<div className="flex items-center gap-3 text-[10px] font-mono text-secondary mb-3 uppercase tracking-wide">
<span>Oct 24, 2023</span>
<span className="w-px h-3 bg-white/20"></span>
<span>Theory</span>
</div>
<h3 className="font-display font-medium text-xl leading-snug text-white group-hover:text-secondary transition-colors">
                    The return of monolithic structures in digital spaces.
                </h3>
</article>
<article className="group cursor-pointer fade-up delay-200">
<div className="aspect-[16/10] mb-6 overflow-hidden rounded-lg bg-card border border-white/5 relative">
<img className="w-full h-full object-cover opacity-70 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&amp;w=1200"/>
</div>
<div className="flex items-center gap-3 text-[10px] font-mono text-secondary mb-3 uppercase tracking-wide">
<span>Sep 12, 2023</span>
<span className="w-px h-3 bg-white/20"></span>
<span>Awards</span>
</div>
<h3 className="font-display font-medium text-xl leading-snug text-white group-hover:text-secondary transition-colors">
                    Aura recognized for sustainable innovation in Oslo.
                </h3>
</article>
<article className="group cursor-pointer fade-up delay-300">
<div className="aspect-[16/10] mb-6 overflow-hidden rounded-lg bg-card border border-white/5 relative">
<img className="w-full h-full object-cover opacity-70 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1506152983158-b4a74a01c721?q=80&amp;w=1200"/>
</div>
<div className="flex items-center gap-3 text-[10px] font-mono text-secondary mb-3 uppercase tracking-wide">
<span>Aug 04, 2023</span>
<span className="w-px h-3 bg-white/20"></span>
<span>Materials</span>
</div>
<h3 className="font-display font-medium text-xl leading-snug text-white group-hover:text-secondary transition-colors">
                    Light as a primary building material: A study.
                </h3>
</article>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 md:py-32" id="contact">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
<div className="reveal-trigger">
<h2 className="font-display font-semibold text-5xl md:text-7xl tracking-tighter mb-8 leading-none text-white">
<span className="reveal-wrapper block"><span className="text-reveal delay-100">BUILD THE</span></span>
<span className="reveal-wrapper block"><span className="text-reveal delay-200">FUTURE.</span></span>
</h2>
<p className="fade-up delay-300 text-secondary text-lg font-light mb-12 max-w-md text-balance">
                    We are selectively accepting new commissions for late 2024. Let's discuss your vision.
                </p>
<div className="fade-up delay-400 space-y-6">
<div className="flex items-center gap-4 group cursor-pointer">
<div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
<iconify-icon height="18" icon="lucide:map-pin" width="18"></iconify-icon>
</div>
<span className="text-sm font-medium">1200 Architecture Ave, NY</span>
</div>
<div className="flex items-center gap-4 group cursor-pointer">
<div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
<iconify-icon height="18" icon="lucide:mail" width="18"></iconify-icon>
</div>
<span className="text-sm font-medium">hello@aura-arch.com</span>
</div>
</div>
</div>
<div className="reveal-trigger">
<div className="fade-up delay-200 bg-card/30 backdrop-blur-sm p-8 md:p-10 rounded-3xl border border-white/5 shadow-2xl">
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-[10px] font-bold text-secondary uppercase tracking-widest">Name</label>
<input className="w-full bg-background/50 border border-white/10 rounded-xl p-3 text-sm focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all placeholder:text-neutral-700" placeholder="Jane Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-[10px] font-bold text-secondary uppercase tracking-widest">Email</label>
<input className="w-full bg-background/50 border border-white/10 rounded-xl p-3 text-sm focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all placeholder:text-neutral-700" placeholder="jane@example.com" type="email"/>
</div>
</div>
<div className="space-y-3">
<label className="text-[10px] font-bold text-secondary uppercase tracking-widest">Project Type</label>
<div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
<label className="cursor-pointer shrink-0">
<input checked="" className="peer sr-only" name="type" type="radio"/>
<div className="px-6 py-2 rounded-full border border-white/10 text-xs font-medium text-secondary peer-checked:bg-white peer-checked:text-black peer-checked:border-white transition-all hover:bg-white/5">
                                        Residential
                                    </div>
</label>
<label className="cursor-pointer shrink-0">
<input className="peer sr-only" name="type" type="radio"/>
<div className="px-6 py-2 rounded-full border border-white/10 text-xs font-medium text-secondary peer-checked:bg-white peer-checked:text-black peer-checked:border-white transition-all hover:bg-white/5">
                                        Commercial
                                    </div>
</label>
<label className="cursor-pointer shrink-0">
<input className="peer sr-only" name="type" type="radio"/>
<div className="px-6 py-2 rounded-full border border-white/10 text-xs font-medium text-secondary peer-checked:bg-white peer-checked:text-black peer-checked:border-white transition-all hover:bg-white/5">
                                        Cultural
                                    </div>
</label>
</div>
</div>
<div className="space-y-2">
<label className="text-[10px] font-bold text-secondary uppercase tracking-widest">Message</label>
<textarea className="w-full bg-background/50 border border-white/10 rounded-xl p-3 text-sm focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all resize-none placeholder:text-neutral-700" placeholder="Tell us about your project..." rows="4"></textarea>
</div>
<button className="w-full bg-white text-black font-bold py-4 rounded-xl text-sm hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 group" type="button">
                            Send Inquiry
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" height="16" icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="border-t border-border bg-background pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-16">
<div>
<a className="font-display font-bold text-2xl tracking-tighter uppercase mb-2 block text-white" href="#">
                        AURA
                    </a>
<p className="text-secondary text-sm max-w-xs">Designing the void between spaces. A global architecture studio.</p>
</div>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center hover:bg-white hover:text-black transition-all" href="#">
<iconify-icon height="18" icon="lucide:instagram" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center hover:bg-white hover:text-black transition-all" href="#">
<iconify-icon height="18" icon="lucide:twitter" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center hover:bg-white hover:text-black transition-all" href="#">
<iconify-icon height="18" icon="lucide:linkedin" width="18"></iconify-icon>
</a>
</div>
</div>
<div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono uppercase tracking-widest text-secondary gap-4">
<p>© 2024 Aura Studio. All rights reserved.</p>
<div className="flex gap-8">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Sitemap</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
