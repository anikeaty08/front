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



        // Custom Cursor
        const cursorCore = document.getElementById('cursor-core');
        const cursorRing = document.getElementById('cursor-ring');
        
        document.addEventListener('mousemove', (e) => {
            cursorCore.style.top = e.clientY + 'px';
            cursorCore.style.left = e.clientX + 'px';
            
            setTimeout(() => {
                cursorRing.style.top = e.clientY + 'px';
                cursorRing.style.left = e.clientX + 'px';
            }, 50);
        });

        // Hover
        const interactables = document.querySelectorAll('.interactable');
        interactables.forEach(el => {
            el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
            el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
        });

        // Scroll Reveal
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal-section').forEach(section => {
            observer.observe(section);
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
      

<div id="cursor-core" style={{top: '85px', left: '853px'}}></div>
<div id="cursor-ring"></div>

<div className="bg-noise"></div>
<div className="fixed inset-0 bg-grid-tactical pointer-events-none z-0"></div>
<div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.05),transparent_70%)] pointer-events-none z-0"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/90 backdrop-blur-md h-20 transition-all duration-300 group">
<div className="absolute bottom-0 left-0 h-[1px] bg-[#DC2626] w-0 group-hover:w-full transition-all duration-700 ease-in-out"></div>
<div className="container mx-auto px-6 md:px-12 flex justify-between items-center h-full">
<div className="flex items-center gap-3 interactable">
<div className="w-1.5 h-6 bg-[#DC2626] skew-container"></div>
<span className="font-display font-bold text-2xl tracking-tight text-white">
                    AURA<span className="text-[#DC2626]">_STUDIO</span>
</span>
</div>
<div className="hidden lg:flex items-center gap-10">
<a className="interactable font-display text-[11px] font-bold tracking-[0.15em] text-gray-400 hover:text-white transition-colors" href="#hero">HOME</a>
<a className="interactable font-display text-[11px] font-bold tracking-[0.15em] text-gray-400 hover:text-white transition-colors" href="#services-instance">SERVICES</a>
<a className="interactable font-display text-[11px] font-bold tracking-[0.15em] text-gray-400 hover:text-white transition-colors" href="#operations-instance">OPERATIONS</a>
<a className="interactable font-display text-[11px] font-bold tracking-[0.15em] text-gray-400 hover:text-white transition-colors" href="#portfolio-instance">PORTFOLIO</a>
<a className="interactable font-display text-[11px] font-bold tracking-[0.15em] text-gray-400 hover:text-white transition-colors" href="#blog-instance">INTEL</a>
<a className="interactable font-display text-[11px] font-bold tracking-[0.15em] text-gray-400 hover:text-white transition-colors" href="#contact-instance">CONTACT</a>
</div>
<button className="hidden md:block interactable group relative">
<div className="skew-container bg-[#DC2626] px-8 py-2.5 relative border border-transparent hover:bg-transparent hover:border-[#DC2626] transition-colors duration-300">
<span className="unskew block font-display font-bold text-black group-hover:text-[#DC2626] text-xs tracking-widest">INITIATE</span>
</div>
</button>
<button className="lg:hidden text-white interactable">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="relative min-h-screen flex items-center pt-20 overflow-hidden border-b border-white/5 reveal-section" id="hero">
<div className="absolute top-0 right-0 w-full md:w-2/3 h-full z-0 opacity-30 mix-blend-screen pointer-events-none">
<img alt="Cyberpunk Interface" className="w-full h-full object-cover grayscale contrast-125 brightness-75" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]"></div>
</div>
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-full bg-[#DC2626] opacity-5 blur-[150px] pointer-events-none"></div>
<div className="container mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2">
<div className="space-y-10">
<div className="flex items-center gap-3">
<div className="h-[1px] w-8 bg-[#DC2626]"></div>
<span className="font-display text-[#DC2626] text-[10px] tracking-[0.3em] uppercase font-bold">Classified System // v.9.0</span>
</div>
<h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.85] tracking-tight text-white drop-shadow-2xl">
                    Engineering <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600">Digital</span> <br/>
<span className="text-[#DC2626]">Dominance</span>
</h1>
<p className="text-lg text-gray-400 font-light max-w-lg leading-relaxed border-l border-[#DC2626] pl-6 py-2">
                    We architect advanced immersive systems for next-gen digital warfare and interactive ecosystems. Precision-engineered solutions for elite entities.
                </p>
<div className="flex flex-col sm:flex-row gap-6 pt-4">
<button className="interactable group relative inline-block">
<div className="skew-container bg-white px-10 py-4 border border-white hover:bg-[#DC2626] hover:border-[#DC2626] transition-all duration-300">
<span className="unskew flex items-center gap-2 font-display font-bold text-black text-sm tracking-widest uppercase">
                                Start Project <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</span>
</div>
</button>
<button className="interactable group relative inline-block">
<div className="skew-container bg-transparent px-10 py-4 border border-white/20 hover:border-[#DC2626] hover:bg-[#DC2626]/5 transition-all duration-300">
<span className="unskew flex items-center gap-2 font-display font-bold text-white text-sm tracking-widest uppercase">View Archive</span>
</div>
</button>
</div>
</div>
</div>
<div className="absolute bottom-12 right-12 hidden md:block text-right">
<div className="font-mono text-[10px] text-[#DC2626]">LAT: 35.6895° N</div>
<div className="font-mono text-[10px] text-gray-600">LON: 139.6917° E</div>
</div>
</header>

<div className="relative py-24 flex items-center justify-center overflow-hidden">
<div className="absolute w-full h-px bg-white/10"></div>
<div className="relative bg-[#050505] px-6 border border-[#DC2626]/30 py-1 skew-container">
<span className="unskew text-[10px] font-mono text-[#DC2626] tracking-[0.3em]">PAGE_INSTANCE // SERVICES</span>
</div>
</div>

<section className="container md:px-12 reveal-section mr-auto ml-auto pr-6 pb-24 pl-6" id="services-instance">
<div className="flex flex-col md:flex-row gap-6 mb-12 items-end justify-between">
<div className="">
<div className="text-[10px] font-mono text-gray-500 mb-2 uppercase tracking-widest">Home / Services</div>
<h1 className="uppercase text-6xl font-black text-white tracking-tight font-display">
                    Service <span className="text-[#DC2626]">Classification</span>
</h1>
</div>
<div className="hidden md:block w-32 h-[2px] bg-white/10 relative">
<div className="absolute right-0 top-0 h-full w-1/3 bg-[#DC2626]"></div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group interactable relative h-72">
<div className="skew-container absolute inset-0 bg-[#0A0A0A] border border-white/10 group-hover:border-[#DC2626] group-hover:shadow-[0_0_20px_rgba(220,38,38,0.2)] transition-all duration-300 overflow-hidden">
<div className="unskew w-[120%] h-[120%] -ml-[10%] -mt-[5%] relative">
<img className="w-full h-full object-cover grayscale mix-blend-luminosity group-hover:grayscale-0 group-hover:mix-blend-normal transition-all duration-700 scale-100 group-hover:scale-110" src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-95"></div>
<div className="absolute inset-0 bg-[#DC2626] mix-blend-overlay opacity-20 group-hover:opacity-0 transition-opacity"></div>
</div>
</div>
<div className="absolute inset-0 pointer-events-none p-6 flex flex-col justify-end z-10 unskew ml-[10px]">
<h3 className="font-display text-2xl font-black text-white uppercase leading-none mb-3 tracking-wide group-hover:text-[#DC2626] transition-colors">AI / ML<br/>Development</h3>
<p className="font-mono text-[11px] text-gray-400 mb-4 border-l-2 border-[#DC2626] pl-2">Neural networks &amp; predictive models.</p>
<span className="text-[#DC2626] text-[10px] font-bold tracking-[0.2em] uppercase flex items-center gap-2 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">Explore <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
<div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#DC2626] z-20 skew-container"></div>
</div>

<div className="group interactable relative h-72">
<div className="skew-container absolute inset-0 bg-[#0A0A0A] border border-white/10 group-hover:border-[#DC2626] group-hover:shadow-[0_0_20px_rgba(220,38,38,0.2)] transition-all duration-300 overflow-hidden">
<div className="unskew w-[120%] h-[120%] -ml-[10%] -mt-[5%] relative">
<img className="w-full h-full object-cover grayscale mix-blend-luminosity group-hover:grayscale-0 group-hover:mix-blend-normal transition-all duration-700 scale-100 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-95"></div>
<div className="absolute inset-0 bg-[#DC2626] mix-blend-overlay opacity-20 group-hover:opacity-0 transition-opacity"></div>
</div>
</div>
<div className="absolute inset-0 pointer-events-none p-6 flex flex-col justify-end z-10 unskew ml-[10px]">
<h3 className="font-display text-2xl font-black text-white uppercase leading-none mb-3 tracking-wide group-hover:text-[#DC2626] transition-colors">AR / VR<br/>Development</h3>
<p className="font-mono text-[11px] text-gray-400 mb-4 border-l-2 border-[#DC2626] pl-2">Immersive mixed reality ecosystems.</p>
<span className="text-[#DC2626] text-[10px] font-bold tracking-[0.2em] uppercase flex items-center gap-2 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">Explore <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
<div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#DC2626] z-20 skew-container"></div>
</div>

<div className="group interactable relative h-72">
<div className="skew-container absolute inset-0 bg-[#0A0A0A] border border-white/10 group-hover:border-[#DC2626] group-hover:shadow-[0_0_20px_rgba(220,38,38,0.2)] transition-all duration-300 overflow-hidden">
<div className="unskew w-[120%] h-[120%] -ml-[10%] -mt-[5%] relative">
<img className="w-full h-full object-cover grayscale mix-blend-luminosity group-hover:grayscale-0 group-hover:mix-blend-normal transition-all duration-700 scale-100 group-hover:scale-110" src="https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-95"></div>
<div className="absolute inset-0 bg-[#DC2626] mix-blend-overlay opacity-20 group-hover:opacity-0 transition-opacity"></div>
</div>
</div>
<div className="absolute inset-0 pointer-events-none p-6 flex flex-col justify-end z-10 unskew ml-[10px]">
<h3 className="font-display text-2xl font-black text-white uppercase leading-none mb-3 tracking-wide group-hover:text-[#DC2626] transition-colors">Game<br/>Development</h3>
<p className="font-mono text-[11px] text-gray-400 mb-4 border-l-2 border-[#DC2626] pl-2">Next-gen interactive entertainment.</p>
<span className="text-[#DC2626] text-[10px] font-bold tracking-[0.2em] uppercase flex items-center gap-2 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">Explore <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
<div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#DC2626] z-20 skew-container"></div>
</div>

<div className="group interactable relative h-72">
<div className="skew-container absolute inset-0 bg-[#0A0A0A] border border-white/10 group-hover:border-[#DC2626] group-hover:shadow-[0_0_20px_rgba(220,38,38,0.2)] transition-all duration-300 overflow-hidden">
<div className="unskew w-[120%] h-[120%] -ml-[10%] -mt-[5%] relative">
<img className="w-full h-full object-cover grayscale mix-blend-luminosity group-hover:grayscale-0 group-hover:mix-blend-normal transition-all duration-700 scale-100 group-hover:scale-110" src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-95"></div>
<div className="absolute inset-0 bg-[#DC2626] mix-blend-overlay opacity-20 group-hover:opacity-0 transition-opacity"></div>
</div>
</div>
<div className="absolute inset-0 pointer-events-none p-6 flex flex-col justify-end z-10 unskew ml-[10px]">
<h3 className="font-display text-2xl font-black text-white uppercase leading-none mb-3 tracking-wide group-hover:text-[#DC2626] transition-colors">Mobile App<br/>Development</h3>
<p className="font-mono text-[11px] text-gray-400 mb-4 border-l-2 border-[#DC2626] pl-2">Cross-platform tactical applications.</p>
<span className="text-[#DC2626] text-[10px] font-bold tracking-[0.2em] uppercase flex items-center gap-2 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">Explore <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
<div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#DC2626] z-20 skew-container"></div>
</div>

<div className="group interactable relative h-72">
<div className="skew-container absolute inset-0 bg-[#0A0A0A] border border-white/10 group-hover:border-[#DC2626] group-hover:shadow-[0_0_20px_rgba(220,38,38,0.2)] transition-all duration-300 overflow-hidden">
<div className="unskew w-[120%] h-[120%] -ml-[10%] -mt-[5%] relative">
<img className="w-full h-full object-cover grayscale mix-blend-luminosity group-hover:grayscale-0 group-hover:mix-blend-normal transition-all duration-700 scale-100 group-hover:scale-110" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-95"></div>
<div className="absolute inset-0 bg-[#DC2626] mix-blend-overlay opacity-20 group-hover:opacity-0 transition-opacity"></div>
</div>
</div>
<div className="absolute inset-0 pointer-events-none p-6 flex flex-col justify-end z-10 unskew ml-[10px]">
<h3 className="font-display text-2xl font-black text-white uppercase leading-none mb-3 tracking-wide group-hover:text-[#DC2626] transition-colors">2D / 3D<br/>Art</h3>
<p className="font-mono text-[11px] text-gray-400 mb-4 border-l-2 border-[#DC2626] pl-2">Visual assets &amp; environment design.</p>
<span className="text-[#DC2626] text-[10px] font-bold tracking-[0.2em] uppercase flex items-center gap-2 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">Explore <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
<div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#DC2626] z-20 skew-container"></div>
</div>

<div className="group interactable relative h-72">
<div className="skew-container absolute inset-0 bg-[#0A0A0A] border border-white/10 group-hover:border-[#DC2626] group-hover:shadow-[0_0_20px_rgba(220,38,38,0.2)] transition-all duration-300 overflow-hidden">
<div className="unskew w-[120%] h-[120%] -ml-[10%] -mt-[5%] relative">
<img className="w-full h-full object-cover grayscale mix-blend-luminosity group-hover:grayscale-0 group-hover:mix-blend-normal transition-all duration-700 scale-100 group-hover:scale-110" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-95"></div>
<div className="absolute inset-0 bg-[#DC2626] mix-blend-overlay opacity-20 group-hover:opacity-0 transition-opacity"></div>
</div>
</div>
<div className="absolute inset-0 pointer-events-none p-6 flex flex-col justify-end z-10 unskew ml-[10px]">
<h3 className="font-display text-2xl font-black text-white uppercase leading-none mb-3 tracking-wide group-hover:text-[#DC2626] transition-colors">IT<br/>Consulting</h3>
<p className="font-mono text-[11px] text-gray-400 mb-4 border-l-2 border-[#DC2626] pl-2">Strategic digital infrastructure planning.</p>
<span className="text-[#DC2626] text-[10px] font-bold tracking-[0.2em] uppercase flex items-center gap-2 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">Explore <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
<div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#DC2626] z-20 skew-container"></div>
</div>

<div className="group interactable relative h-72">
<div className="skew-container absolute inset-0 bg-[#0A0A0A] border border-white/10 group-hover:border-[#DC2626] group-hover:shadow-[0_0_20px_rgba(220,38,38,0.2)] transition-all duration-300 overflow-hidden">
<div className="unskew w-[120%] h-[120%] -ml-[10%] -mt-[5%] relative">
<img className="w-full h-full object-cover grayscale mix-blend-luminosity group-hover:grayscale-0 group-hover:mix-blend-normal transition-all duration-700 scale-100 group-hover:scale-110" src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-95"></div>
<div className="absolute inset-0 bg-[#DC2626] mix-blend-overlay opacity-20 group-hover:opacity-0 transition-opacity"></div>
</div>
</div>
<div className="absolute inset-0 pointer-events-none p-6 flex flex-col justify-end z-10 unskew ml-[10px]">
<h3 className="font-display text-2xl font-black text-white uppercase leading-none mb-3 tracking-wide group-hover:text-[#DC2626] transition-colors">UI / UX<br/>Design</h3>
<p className="font-mono text-[11px] text-gray-400 mb-4 border-l-2 border-[#DC2626] pl-2">Human-machine interface optimization.</p>
<span className="text-[#DC2626] text-[10px] font-bold tracking-[0.2em] uppercase flex items-center gap-2 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">Explore <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
<div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#DC2626] z-20 skew-container"></div>
</div>

<div className="group interactable relative h-72">
<div className="skew-container absolute inset-0 bg-[#0A0A0A] border border-white/10 group-hover:border-[#DC2626] group-hover:shadow-[0_0_20px_rgba(220,38,38,0.2)] transition-all duration-300 overflow-hidden">
<div className="unskew w-[120%] h-[120%] -ml-[10%] -mt-[5%] relative">
<img className="w-full h-full object-cover grayscale mix-blend-luminosity group-hover:grayscale-0 group-hover:mix-blend-normal transition-all duration-700 scale-100 group-hover:scale-110" src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-95"></div>
<div className="absolute inset-0 bg-[#DC2626] mix-blend-overlay opacity-20 group-hover:opacity-0 transition-opacity"></div>
</div>
</div>
<div className="absolute inset-0 pointer-events-none p-6 flex flex-col justify-end z-10 unskew ml-[10px]">
<h3 className="font-display text-2xl font-black text-white uppercase leading-none mb-3 tracking-wide group-hover:text-[#DC2626] transition-colors">Cyber<br/>Security</h3>
<p className="font-mono text-[11px] text-gray-400 mb-4 border-l-2 border-[#DC2626] pl-2">Fortified digital defense protocols.</p>
<span className="text-[#DC2626] text-[10px] font-bold tracking-[0.2em] uppercase flex items-center gap-2 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">Explore <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
<div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#DC2626] z-20 skew-container"></div>
</div>
</div>
</section>

<div className="relative py-24 flex items-center justify-center overflow-hidden">
<div className="absolute w-full h-px bg-white/10"></div>
<div className="relative bg-[#050505] px-6 border border-[#DC2626]/30 py-1 skew-container">
<span className="unskew text-[10px] font-mono text-[#DC2626] tracking-[0.3em]">PAGE_INSTANCE // OPERATIONS</span>
</div>
</div>

<section className="container mx-auto px-6 md:px-12 pb-24 reveal-section" id="operations-instance">
<div className="mb-20">
<div className="flex items-center gap-3 mb-2">
<div className="w-2 h-2 bg-[#DC2626]"></div>
<span className="text-[10px] font-mono text-[#DC2626] uppercase tracking-widest">WORKFLOW SEQUENCE INITIALIZED</span>
</div>
<h1 className="font-display text-6xl font-black uppercase tracking-tight text-white">
                Operation <span className="text-[#DC2626]">Protocol</span>
</h1>
</div>
<div className="relative min-h-[400px]">

<div className="hidden lg:block absolute top-[90px] left-0 w-full h-[1px] bg-[#DC2626]/40 z-0"></div>
<div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">

<div className="interactable group">
<div className="skew-container bg-[#0A0A0A] border border-white/10 group-hover:border-[#DC2626] group-hover:shadow-[0_0_15px_rgba(220,38,38,0.15)] transition-all duration-300 h-full p-1">
<div className="unskew p-6 flex flex-col h-full bg-[#050505]">
<div className="text-[9px] font-mono text-gray-600 mb-4 uppercase tracking-widest group-hover:text-[#DC2626]">SYSTEM PHASE</div>
<div className="font-display text-4xl font-bold text-[#DC2626] mb-3 opacity-50 group-hover:opacity-100 transition-opacity">01</div>
<h3 className="font-display text-lg font-bold text-white mb-3 uppercase tracking-wide">Consultation</h3>
<p className="text-xs text-gray-500 leading-relaxed">We discuss goals, requirements, and project scope to clearly understand the client’s needs.</p>
</div>
</div>
</div>

<div className="interactable group lg:mt-24">
<div className="skew-container group-hover:border-[#DC2626] group-hover:shadow-[0_0_15px_rgba(220,38,38,0.15)] transition-all duration-300 bg-[#0A0A0A] h-full border-white/10 border pt-1 pr-1 pb-1 pl-1">
<div className="unskew p-6 flex flex-col h-full bg-[#050505]">
<div className="text-[9px] font-mono text-gray-600 mb-4 uppercase tracking-widest group-hover:text-[#DC2626]">SYSTEM PHASE</div>
<div className="font-display text-4xl font-bold text-[#DC2626] mb-3 opacity-50 group-hover:opacity-100 transition-opacity">02</div>
<h3 className="font-display text-lg font-bold text-white mb-3 uppercase tracking-wide">Research &amp; Plan</h3>
<p className="text-xs text-gray-500 leading-relaxed">We analyze requirements, prepare architecture, and define a structured development plan.</p>
</div>
</div>
</div>

<div className="interactable group">
<div className="skew-container bg-[#0A0A0A] border border-white/10 group-hover:border-[#DC2626] group-hover:shadow-[0_0_15px_rgba(220,38,38,0.15)] transition-all duration-300 h-full p-1">
<div className="unskew p-6 flex flex-col h-full bg-[#050505]">
<div className="text-[9px] font-mono text-gray-600 mb-4 uppercase tracking-widest group-hover:text-[#DC2626]">SYSTEM PHASE</div>
<div className="font-display text-4xl font-bold text-[#DC2626] mb-3 opacity-50 group-hover:opacity-100 transition-opacity">03</div>
<h3 className="font-display text-lg font-bold text-white mb-3 uppercase tracking-wide">Design &amp; Proto</h3>
<p className="text-xs text-gray-500 leading-relaxed">We design interfaces, user flows, and interactive prototypes for validation before development.</p>
</div>
</div>
</div>

<div className="interactable group lg:mt-24">
<div className="skew-container bg-[#0A0A0A] border border-white/10 group-hover:border-[#DC2626] group-hover:shadow-[0_0_15px_rgba(220,38,38,0.15)] transition-all duration-300 h-full p-1">
<div className="unskew p-6 flex flex-col h-full bg-[#050505]">
<div className="text-[9px] font-mono text-gray-600 mb-4 uppercase tracking-widest group-hover:text-[#DC2626]">SYSTEM PHASE</div>
<div className="font-display text-4xl font-bold text-[#DC2626] mb-3 opacity-50 group-hover:opacity-100 transition-opacity">04</div>
<h3 className="font-display text-lg font-bold text-white mb-3 uppercase tracking-wide">Development</h3>
<p className="text-xs text-gray-500 leading-relaxed">We build the product using modern technologies and scalable architecture.</p>
</div>
</div>
</div>

<div className="interactable group">
<div className="skew-container bg-[#0A0A0A] border border-white/10 group-hover:border-[#DC2626] group-hover:shadow-[0_0_15px_rgba(220,38,38,0.15)] transition-all duration-300 h-full p-1">
<div className="unskew p-6 flex flex-col h-full bg-[#050505]">
<div className="text-[9px] font-mono text-gray-600 mb-4 uppercase tracking-widest group-hover:text-[#DC2626]">SYSTEM PHASE</div>
<div className="font-display text-4xl font-bold text-[#DC2626] mb-3 opacity-50 group-hover:opacity-100 transition-opacity">05</div>
<h3 className="font-display text-lg font-bold text-white mb-3 uppercase tracking-wide">Deployment</h3>
<p className="text-xs text-gray-500 leading-relaxed">We test performance, fix issues, deploy the system, and prepare it for real-world usage.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="container mx-auto px-6 md:px-12 pb-32 reveal-section">
<div className="mb-12">
<div className="flex items-center gap-3 mb-2">
<div className="w-2 h-2 bg-[#DC2626]"></div>
<span className="text-[10px] font-mono text-[#DC2626] uppercase tracking-widest">COMPATIBLE SYSTEMS</span>
</div>
<h1 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
                Supported <span className="text-[#DC2626]">Technologies</span>
</h1>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">

<div className="interactable group">
<div className="skew-container bg-[#0A0A0A] border border-white/10 group-hover:border-[#DC2626] group-hover:shadow-[0_0_10px_rgba(220,38,38,0.2)] transition-all duration-300">
<div className="unskew p-4 flex items-center gap-3 group-hover:-translate-y-1 transition-transform">
<iconify-icon className="text-gray-500 group-hover:text-[#DC2626] text-xl" icon="solar:code-circle-linear"></iconify-icon>
<span className="font-display text-sm font-bold text-white tracking-widest uppercase">React</span>
</div>
</div>
</div>
<div className="interactable group">
<div className="skew-container bg-[#0A0A0A] border border-white/10 group-hover:border-[#DC2626] group-hover:shadow-[0_0_10px_rgba(220,38,38,0.2)] transition-all duration-300">
<div className="unskew p-4 flex items-center gap-3 group-hover:-translate-y-1 transition-transform">
<iconify-icon className="text-gray-500 group-hover:text-[#DC2626] text-xl" icon="solar:code-circle-linear"></iconify-icon>
<span className="font-display text-sm font-bold text-white tracking-widest uppercase">Next.js</span>
</div>
</div>
</div>
<div className="interactable group">
<div className="skew-container bg-[#0A0A0A] border border-white/10 group-hover:border-[#DC2626] group-hover:shadow-[0_0_10px_rgba(220,38,38,0.2)] transition-all duration-300">
<div className="unskew p-4 flex items-center gap-3 group-hover:-translate-y-1 transition-transform">
<iconify-icon className="text-gray-500 group-hover:text-[#DC2626] text-xl" icon="solar:box-minimalistic-linear"></iconify-icon>
<span className="font-display text-sm font-bold text-white tracking-widest uppercase">Three.js</span>
</div>
</div>
</div>
<div className="interactable group">
<div className="skew-container bg-[#0A0A0A] border border-white/10 group-hover:border-[#DC2626] group-hover:shadow-[0_0_10px_rgba(220,38,38,0.2)] transition-all duration-300">
<div className="unskew p-4 flex items-center gap-3 group-hover:-translate-y-1 transition-transform">
<iconify-icon className="text-gray-500 group-hover:text-[#DC2626] text-xl" icon="solar:code-linear"></iconify-icon>
<span className="font-display text-sm font-bold text-white tracking-widest uppercase">JS / TS</span>
</div>
</div>
</div>

<div className="interactable group">
<div className="skew-container bg-[#0A0A0A] border border-white/10 group-hover:border-[#DC2626] group-hover:shadow-[0_0_10px_rgba(220,38,38,0.2)] transition-all duration-300">
<div className="unskew p-4 flex items-center gap-3 group-hover:-translate-y-1 transition-transform">
<iconify-icon className="text-gray-500 group-hover:text-[#DC2626] text-xl" icon="solar:gamepad-linear"></iconify-icon>
<span className="font-display text-sm font-bold text-white tracking-widest uppercase">Unity</span>
</div>
</div>
</div>
<div className="interactable group">
<div className="skew-container bg-[#0A0A0A] border border-white/10 group-hover:border-[#DC2626] group-hover:shadow-[0_0_10px_rgba(220,38,38,0.2)] transition-all duration-300">
<div className="unskew p-4 flex items-center gap-3 group-hover:-translate-y-1 transition-transform">
<iconify-icon className="text-gray-500 group-hover:text-[#DC2626] text-xl" icon="solar:gamepad-charge-linear"></iconify-icon>
<span className="font-display text-sm font-bold text-white tracking-widest uppercase">Unreal 5</span>
</div>
</div>
</div>
<div className="interactable group">
<div className="skew-container bg-[#0A0A0A] border border-white/10 group-hover:border-[#DC2626] group-hover:shadow-[0_0_10px_rgba(220,38,38,0.2)] transition-all duration-300">
<div className="unskew p-4 flex items-center gap-3 group-hover:-translate-y-1 transition-transform">
<iconify-icon className="text-gray-500 group-hover:text-[#DC2626] text-xl" icon="solar:glasses-linear"></iconify-icon>
<span className="font-display text-sm font-bold text-white tracking-widest uppercase">WebXR</span>
</div>
</div>
</div>

<div className="interactable group">
<div className="skew-container bg-[#0A0A0A] border border-white/10 group-hover:border-[#DC2626] group-hover:shadow-[0_0_10px_rgba(220,38,38,0.2)] transition-all duration-300">
<div className="unskew p-4 flex items-center gap-3 group-hover:-translate-y-1 transition-transform">
<iconify-icon className="text-gray-500 group-hover:text-[#DC2626] text-xl" icon="solar:server-square-linear"></iconify-icon>
<span className="font-display text-sm font-bold text-white tracking-widest uppercase">Node.js</span>
</div>
</div>
</div>
<div className="interactable group">
<div className="skew-container bg-[#0A0A0A] border border-white/10 group-hover:border-[#DC2626] group-hover:shadow-[0_0_10px_rgba(220,38,38,0.2)] transition-all duration-300">
<div className="unskew p-4 flex items-center gap-3 group-hover:-translate-y-1 transition-transform">
<iconify-icon className="text-gray-500 group-hover:text-[#DC2626] text-xl" icon="solar:transmission-square-linear"></iconify-icon>
<span className="font-display text-sm font-bold text-white tracking-widest uppercase">REST API</span>
</div>
</div>
</div>

<div className="interactable group">
<div className="skew-container bg-[#0A0A0A] border border-white/10 group-hover:border-[#DC2626] group-hover:shadow-[0_0_10px_rgba(220,38,38,0.2)] transition-all duration-300">
<div className="unskew p-4 flex items-center gap-3 group-hover:-translate-y-1 transition-transform">
<iconify-icon className="text-gray-500 group-hover:text-[#DC2626] text-xl" icon="solar:pen-new-square-linear"></iconify-icon>
<span className="font-display text-sm font-bold text-white tracking-widest uppercase">Figma</span>
</div>
</div>
</div>
<div className="interactable group">
<div className="skew-container bg-[#0A0A0A] border border-white/10 group-hover:border-[#DC2626] group-hover:shadow-[0_0_10px_rgba(220,38,38,0.2)] transition-all duration-300">
<div className="unskew p-4 flex items-center gap-3 group-hover:-translate-y-1 transition-transform">
<iconify-icon className="text-gray-500 group-hover:text-[#DC2626] text-xl" icon="solar:box-linear"></iconify-icon>
<span className="font-display text-sm font-bold text-white tracking-widest uppercase">Blender</span>
</div>
</div>
</div>
<div className="interactable group">
<div className="skew-container bg-[#0A0A0A] border border-white/10 group-hover:border-[#DC2626] group-hover:shadow-[0_0_10px_rgba(220,38,38,0.2)] transition-all duration-300">
<div className="unskew p-4 flex items-center gap-3 group-hover:-translate-y-1 transition-transform">
<iconify-icon className="text-gray-500 group-hover:text-[#DC2626] text-xl" icon="solar:camera-linear"></iconify-icon>
<span className="font-display text-sm font-bold text-white tracking-widest uppercase">Photoshop</span>
</div>
</div>
</div>
<div className="interactable group">
<div className="skew-container bg-[#0A0A0A] border border-white/10 group-hover:border-[#DC2626] group-hover:shadow-[0_0_10px_rgba(220,38,38,0.2)] transition-all duration-300">
<div className="unskew p-4 flex items-center gap-3 group-hover:-translate-y-1 transition-transform">
<iconify-icon className="text-gray-500 group-hover:text-[#DC2626] text-xl" icon="solar:brain-linear"></iconify-icon>
<span className="font-display text-sm font-bold text-white tracking-widest uppercase">TensorFlow</span>
</div>
</div>
</div>
<div className="interactable group">
<div className="skew-container bg-[#0A0A0A] border border-white/10 group-hover:border-[#DC2626] group-hover:shadow-[0_0_10px_rgba(220,38,38,0.2)] transition-all duration-300">
<div className="unskew p-4 flex items-center gap-3 group-hover:-translate-y-1 transition-transform">
<iconify-icon className="text-gray-500 group-hover:text-[#DC2626] text-xl" icon="solar:code-scan-linear"></iconify-icon>
<span className="font-display text-sm font-bold text-white tracking-widest uppercase">Python</span>
</div>
</div>
</div>
</div>
</section>

<div className="relative py-24 flex items-center justify-center overflow-hidden">
<div className="absolute w-full h-px bg-white/10"></div>
<div className="relative bg-[#050505] px-6 border border-[#DC2626]/30 py-1 skew-container">
<span className="unskew text-[10px] font-mono text-[#DC2626] tracking-[0.3em]">PORTFOLIO_PAGE_INSTANCE</span>
</div>
</div>

<section className="container mx-auto px-6 md:px-12 pb-24 reveal-section" id="portfolio-instance">
<div className="mb-12">
<div className="text-[10px] font-mono text-gray-500 mb-2 uppercase tracking-widest">Home / Portfolio</div>
<h1 className="font-display text-6xl font-black uppercase tracking-tight text-white">
                Project <span className="text-[#DC2626]">Archive</span>
</h1>
</div>

<div className="w-full skew-container bg-[#0A0A0A] border border-white/10 relative group overflow-hidden mb-16 interactable">
<div className="unskew grid grid-cols-1 lg:grid-cols-2">
<div className="relative h-[400px] lg:h-[500px] overflow-hidden border-r border-white/5">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700 scale-110" src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#DC2626] mix-blend-overlay opacity-20"></div>
</div>
<div className="p-8 lg:p-12 flex flex-col justify-between bg-[#050505]">
<div>
<div className="flex items-center justify-between mb-4">
<span className="text-[#DC2626] font-mono text-[10px] tracking-[0.2em]">CLASSIFIED // 2024</span>
<span className="text-white/40 font-mono text-[10px] tracking-widest">INDUSTRY: DEFENSE SIM</span>
</div>
<h2 className="text-4xl lg:text-5xl font-display font-black text-white mb-6 uppercase tracking-tighter leading-[0.9]">Project: <br/>Obsidian Core</h2>
<p className="text-gray-400 text-sm leading-relaxed mb-8 border-l border-[#DC2626] pl-4">A hyper-realistic tactical simulation environment developed for next-generation combat training. Features real-time raytracing and neural network enemy AI.</p>
</div>
<div className="flex flex-wrap gap-2">
<span className="border border-white/20 px-3 py-1 text-[10px] font-bold text-white tracking-widest uppercase">Unreal 5.3</span>
<span className="border border-white/20 px-3 py-1 text-[10px] font-bold text-white tracking-widest uppercase">C++</span>
<span className="border border-white/20 px-3 py-1 text-[10px] font-bold text-white tracking-widest uppercase">TensorFlow</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
<div className="skew-container aspect-[3/4] bg-[#0A0A0A] border border-white/10 hover:border-[#DC2626] transition-all group interactable relative overflow-hidden">
<div className="unskew absolute inset-0 scale-110">
<img className="w-full h-full object-cover grayscale mix-blend-multiply opacity-50 group-hover:opacity-100 group-hover:grayscale-0 group-hover:mix-blend-normal transition-all duration-500" src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-[#DC2626]/20 mix-blend-overlay group-hover:bg-transparent transition-all"></div>
</div>
<div className="unskew absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent">
<div className="text-[9px] font-bold tracking-widest text-[#DC2626] mb-1">SHOOTER</div>
<div className="text-xs font-bold text-white uppercase">Neon Strike</div>
</div>
</div>
<div className="skew-container aspect-[3/4] bg-[#0A0A0A] border border-white/10 hover:border-[#DC2626] transition-all group interactable relative overflow-hidden">
<div className="unskew absolute inset-0 scale-110">
<img className="w-full h-full object-cover grayscale mix-blend-multiply opacity-50 group-hover:opacity-100 group-hover:grayscale-0 group-hover:mix-blend-normal transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-[#DC2626]/20 mix-blend-overlay group-hover:bg-transparent transition-all"></div>
</div>
<div className="unskew absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent">
<div className="text-[9px] font-bold tracking-widest text-[#DC2626] mb-1">RPG</div>
<div className="text-xs font-bold text-white uppercase">Shadow Ops</div>
</div>
</div>
</div>
</section>

<div className="relative py-24 flex items-center justify-center overflow-hidden">
<div className="absolute w-full h-px bg-white/10"></div>
<div className="relative bg-[#050505] px-6 border border-[#DC2626]/30 py-1 skew-container">
<span className="unskew text-[10px] font-mono text-[#DC2626] tracking-[0.3em]">BLOG_PAGE_INSTANCE</span>
</div>
</div>

<section className="container mx-auto px-6 md:px-12 pb-24 reveal-section" id="blog-instance">
<div className="mb-12">
<div className="text-[10px] font-mono text-gray-500 mb-2 uppercase tracking-widest">Home / Blog</div>
<h1 className="font-display text-6xl font-black uppercase tracking-tight text-white mb-8">
                Intelligence <span className="text-[#DC2626]">Archive</span>
</h1>
<div className="flex flex-wrap gap-8 border-b border-white/10 pb-4">
<button className="text-[#DC2626] text-[10px] font-bold uppercase tracking-widest interactable">All_Intel</button>
<button className="text-gray-500 hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors interactable">AI_Systems</button>
<button className="text-gray-500 hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors interactable">XR_Tech</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<article className="group interactable cursor-none">
<div className="skew-container h-64 w-full overflow-hidden mb-6 border border-white/5 group-hover:border-[#DC2626] group-hover:-translate-y-2 transition-all duration-300 relative bg-[#0A0A0A]">
<div className="unskew h-full w-full scale-110">
<img className="w-full h-full object-cover grayscale mix-blend-luminosity group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-[#DC2626] mix-blend-overlay opacity-0 group-hover:opacity-20 transition-all"></div>
</div>
</div>
<div className="px-2">
<span className="text-[#DC2626] font-bold text-[10px] tracking-widest mb-2 block">AI SYSTEMS</span>
<h3 className="font-display text-xl font-bold text-white mb-3 leading-tight group-hover:text-[#DC2626] transition-colors">Neural Net Architecture in 2077</h3>
<p className="text-sm text-gray-500 mb-4 line-clamp-2 leading-relaxed">Analyzing the shift from static behavior trees to fully dynamic neural networks in combat simulations.</p>
<span className="text-white text-[10px] font-bold uppercase tracking-widest group-hover:text-[#DC2626] flex items-center gap-2 transition-colors">Read Protocol <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
</article>
<article className="group interactable cursor-none">
<div className="skew-container h-64 w-full overflow-hidden mb-6 border border-white/5 group-hover:border-[#DC2626] group-hover:-translate-y-2 transition-all duration-300 relative bg-[#0A0A0A]">
<div className="unskew h-full w-full scale-110">
<img className="w-full h-full object-cover grayscale mix-blend-luminosity group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-[#DC2626] mix-blend-overlay opacity-0 group-hover:opacity-20 transition-all"></div>
</div>
</div>
<div className="px-2">
<span className="text-[#DC2626] font-bold text-[10px] tracking-widest mb-2 block">DESIGN</span>
<h3 className="font-display text-xl font-bold text-white mb-3 leading-tight group-hover:text-[#DC2626] transition-colors">Spatial UI for AR Combat</h3>
<p className="text-sm text-gray-500 mb-4 line-clamp-2 leading-relaxed">Designing heads-up displays that provide critical intel without obstructing the operator's field of view.</p>
<span className="text-white text-[10px] font-bold uppercase tracking-widest group-hover:text-[#DC2626] flex items-center gap-2 transition-colors">Read Protocol <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
</article>
<article className="group interactable cursor-none">
<div className="skew-container h-64 w-full overflow-hidden mb-6 border border-white/5 group-hover:border-[#DC2626] group-hover:-translate-y-2 transition-all duration-300 relative bg-[#0A0A0A]">
<div className="unskew h-full w-full scale-110">
<img className="w-full h-full object-cover grayscale mix-blend-luminosity group-hover:grayscale-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-[#DC2626] mix-blend-overlay opacity-0 group-hover:opacity-20 transition-all"></div>
</div>
</div>
<div className="px-2">
<span className="text-[#DC2626] font-bold text-[10px] tracking-widest mb-2 block">TECH</span>
<h3 className="font-display text-xl font-bold text-white mb-3 leading-tight group-hover:text-[#DC2626] transition-colors">Quantum Encryption Standards</h3>
<p className="text-sm text-gray-500 mb-4 line-clamp-2 leading-relaxed">Preparing digital infrastructure for the post-quantum era with lattice-based cryptography.</p>
<span className="text-white text-[10px] font-bold uppercase tracking-widest group-hover:text-[#DC2626] flex items-center gap-2 transition-colors">Read Protocol <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
</article>
</div>
</section>

<div className="relative py-24 flex items-center justify-center overflow-hidden">
<div className="absolute w-full h-px bg-white/10"></div>
<div className="relative bg-[#050505] px-6 border border-[#DC2626]/30 py-1 skew-container">
<span className="unskew text-[10px] font-mono text-[#DC2626] tracking-[0.3em]">CONTACT_PAGE_INSTANCE</span>
</div>
</div>

<section className="container mx-auto px-6 md:px-12 pb-32 reveal-section" id="contact-instance">
<div className="mb-12">
<div className="text-[10px] font-mono text-gray-500 mb-2 uppercase tracking-widest">Home / Contact</div>
<h1 className="font-display text-6xl font-black uppercase tracking-tight text-white">
                Contact <span className="text-[#DC2626]">Us</span>
</h1>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div className="">
<div className="space-y-12">
<div className="">
<div className="flex items-center gap-3 mb-6">
<div className="w-1.5 h-6 bg-[#DC2626] skew-container"></div>
<span className="font-display font-bold text-2xl tracking-tight text-white">
                                AURA<span className="text-gray-600">_STUDIO</span>
</span>
</div>
<p className="text-gray-400 leading-relaxed border-l border-[#DC2626] pl-6">
                            We operate in the shadows to bring your vision to light. Secure communication channels are open for prospective alliances.
                        </p>
</div>
<div className="space-y-6">
<div className="group interactable">
<h3 className="font-display text-sm font-bold text-white mb-1 uppercase tracking-wider">Base of Operations</h3>
<p className="text-gray-500 text-sm">Sector 7, Industrial Zone 404</p>
<p className="text-[#DC2626] font-mono text-xs mt-1">35.6762° N, 139.6503° E</p>
</div>
<div className="group interactable">
<h3 className="font-display text-sm font-bold text-white mb-1 uppercase tracking-wider">Secure Uplink</h3>
<p className="text-gray-500 text-sm">secure@aura.studio</p>
</div>
</div>
</div>
</div>

<div className="skew-container bg-[#0A0A0A] border border-white/10 p-1 relative">
<div className="scan-line"></div>
<form className="unskew bg-[#050505] p-8 md:p-12 border border-white/5 space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Operative Name</label>
<input className="w-full bg-white/5 border border-white/10 p-3 text-white focus:border-[#DC2626] focus:outline-none transition-colors placeholder-gray-700 text-sm" placeholder="ENTER IDENTIFIER" type="text"/>
</div>
<div className="space-y-2">
<label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Comm Frequency</label>
<input className="w-full bg-white/5 border border-white/10 p-3 text-white focus:border-[#DC2626] focus:outline-none transition-colors placeholder-gray-700 text-sm" placeholder="ENTER EMAIL" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Mission Data</label>
<textarea className="w-full bg-white/5 border border-white/10 p-3 text-white focus:border-[#DC2626] focus:outline-none transition-colors placeholder-gray-700 text-sm" placeholder="ENCRYPTED MESSAGE..." rows="5"></textarea>
</div>
<button className="w-full group interactable">
<div className="skew-container bg-[#DC2626] py-4 border border-[#DC2626] hover:bg-[#B91C1C] transition-all shadow-[0_0_15px_rgba(220,38,38,0.3)]">
<span className="unskew block font-display font-bold text-black text-sm tracking-widest uppercase flex items-center justify-center gap-2">
<iconify-icon icon="solar:transmission-circle-linear"></iconify-icon> Transmit Message
                            </span>
</div>
</button>
</form>
</div>
</div>
</section>

<footer className="bg-black border-t border-[#DC2626] relative z-20 overflow-hidden">
<div className="fixed inset-0 bg-grid-tactical pointer-events-none opacity-20 z-0"></div>
<div className="container mx-auto px-6 py-16 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-4 gap-12">

<div className="space-y-6">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#DC2626] text-3xl" icon="solar:shield-star-bold"></iconify-icon>
<div className="flex flex-col leading-none">
<span className="font-display font-black text-xl text-white tracking-tight">INTERACTIVE</span>
<span className="font-display font-bold text-xl text-white tracking-widest">WARRIORS</span>
</div>
</div>
<p className="text-gray-500 text-xs leading-relaxed max-w-xs">
                        A creative technology studio crafting intelligent and immersive digital experiences.
                    </p>
<div className="flex gap-4 pt-2">
<a className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#DC2626] hover:text-[#DC2626] hover:shadow-[0_0_10px_#DC2626] transition-all interactable" href="#">
<iconify-icon icon="fa6-brands:behance"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#DC2626] hover:text-[#DC2626] hover:shadow-[0_0_10px_#DC2626] transition-all interactable" href="#">
<iconify-icon icon="fa6-brands:youtube"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#DC2626] hover:text-[#DC2626] hover:shadow-[0_0_10px_#DC2626] transition-all interactable" href="#">
<iconify-icon icon="fa6-brands:linkedin-in"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#DC2626] hover:text-[#DC2626] hover:shadow-[0_0_10px_#DC2626] transition-all interactable" href="#">
<iconify-icon icon="fa6-brands:instagram"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#DC2626] hover:text-[#DC2626] hover:shadow-[0_0_10px_#DC2626] transition-all interactable" href="#">
<iconify-icon icon="fa6-brands:facebook-f"></iconify-icon>
</a>
</div>
</div>

<div className="space-y-6">
<h3 className="font-display text-white font-bold uppercase tracking-wider text-sm border-l-2 border-[#DC2626] pl-3">Contact Information</h3>
<div className="space-y-4">
<div className="flex items-start gap-3 group interactable">
<iconify-icon className="text-[#DC2626] mt-0.5 group-hover:drop-shadow-[0_0_5px_#DC2626] transition-all" icon="solar:letter-linear"></iconify-icon>
<span className="text-xs text-gray-400 hover:text-white transition-colors">interactivewarriors@gmail.com</span>
</div>
<div className="flex items-start gap-3 group interactable">
<iconify-icon className="text-[#DC2626] mt-0.5 group-hover:drop-shadow-[0_0_5px_#DC2626] transition-all" icon="solar:phone-calling-linear"></iconify-icon>
<span className="text-xs text-gray-400 hover:text-white transition-colors">(+91) 787 434 8171</span>
</div>
<div className="flex items-start gap-3 group interactable">
<iconify-icon className="text-[#DC2626] mt-0.5 group-hover:drop-shadow-[0_0_5px_#DC2626] transition-all" icon="solar:map-point-linear"></iconify-icon>
<span className="text-xs text-gray-400 hover:text-white transition-colors">Ahmedabad, Gujarat-380015, India</span>
</div>
</div>
</div>

<div className="space-y-6">
<h3 className="font-display text-white font-bold uppercase tracking-wider text-sm border-l-2 border-[#DC2626] pl-3">Quick Links</h3>
<div className="grid grid-cols-1 gap-2">
<a className="text-xs text-gray-500 hover:text-[#DC2626] transition-all flex items-center gap-2 group interactable" href="#">
<span className="w-0 h-[1px] bg-[#DC2626] group-hover:w-3 transition-all"></span> Products
                        </a>
<a className="text-xs text-gray-500 hover:text-[#DC2626] transition-all flex items-center gap-2 group interactable" href="#">
<span className="w-0 h-[1px] bg-[#DC2626] group-hover:w-3 transition-all"></span> Services
                        </a>
<a className="text-xs text-gray-500 hover:text-[#DC2626] transition-all flex items-center gap-2 group interactable" href="#">
<span className="w-0 h-[1px] bg-[#DC2626] group-hover:w-3 transition-all"></span> Our Portfolio
                        </a>
<a className="text-xs text-gray-500 hover:text-[#DC2626] transition-all flex items-center gap-2 group interactable" href="#">
<span className="w-0 h-[1px] bg-[#DC2626] group-hover:w-3 transition-all"></span> Blog
                        </a>
<a className="text-xs text-gray-500 hover:text-[#DC2626] transition-all flex items-center gap-2 group interactable" href="#">
<span className="w-0 h-[1px] bg-[#DC2626] group-hover:w-3 transition-all"></span> About Us
                        </a>
<a className="text-xs text-gray-500 hover:text-[#DC2626] transition-all flex items-center gap-2 group interactable" href="#">
<span className="w-0 h-[1px] bg-[#DC2626] group-hover:w-3 transition-all"></span> Privacy Policy
                        </a>
<a className="text-xs text-gray-500 hover:text-[#DC2626] transition-all flex items-center gap-2 group interactable" href="#">
<span className="w-0 h-[1px] bg-[#DC2626] group-hover:w-3 transition-all"></span> Terms and Conditions
                        </a>
<a className="text-xs text-gray-500 hover:text-[#DC2626] transition-all flex items-center gap-2 group interactable" href="#">
<span className="w-0 h-[1px] bg-[#DC2626] group-hover:w-3 transition-all"></span> Cancellation and Refund Policy
                        </a>
</div>
</div>

<div className="space-y-6">
<h3 className="font-display text-white font-bold uppercase tracking-wider text-sm border-l-2 border-[#DC2626] pl-3">Talk to our Experts</h3>
<form className="space-y-3">
<input className="w-full bg-white/5 border border-white/10 px-4 py-2 text-xs text-white focus:outline-none focus:border-[#DC2626] transition-colors" placeholder="Name" type="text"/>
<input className="w-full bg-white/5 border border-white/10 px-4 py-2 text-xs text-white focus:outline-none focus:border-[#DC2626] transition-colors" placeholder="Email" type="email"/>
<input className="w-full bg-white/5 border border-white/10 px-4 py-2 text-xs text-white focus:outline-none focus:border-[#DC2626] transition-colors" placeholder="Phone Number" type="text"/>
<textarea className="w-full bg-white/5 border border-white/10 px-4 py-2 text-xs text-white focus:outline-none focus:border-[#DC2626] transition-colors" placeholder="Write your message" rows="2"></textarea>
<button className="interactable w-full mt-2 group">
<div className="skew-container bg-[#DC2626] py-2.5 shadow-[0_0_10px_rgba(220,38,38,0.3)] hover:bg-white hover:shadow-white transition-all duration-300">
<span className="unskew block text-center font-display font-bold text-black text-xs tracking-widest uppercase">SEND TRANSMISSION</span>
</div>
</button>
</form>
</div>
</div>
</div>

<div className="border-t border-white/10 bg-[#020202] py-4 relative z-10">
<div className="container mx-auto px-6 text-center">
<p className="text-[10px] text-gray-600 font-mono tracking-widest uppercase opacity-70">
                    © Copyright 2025. All Rights Reserved. INTERACTIVE WARRIORS STUDIO PRIVATE LIMITED
                </p>
</div>
</div>
</footer>


    </>
  );
}
