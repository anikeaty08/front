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



        // Smooth Reveal on Scroll Script
        const revealElements = document.querySelectorAll('.reveal');
        
        const revealOnScroll = () => {
            const windowHeight = window.innerHeight;
            const elementVisible = 150;
            
            revealElements.forEach((reveal) => {
                const elementTop = reveal.getBoundingClientRect().top;
                if (elementTop < windowHeight - elementVisible) {
                    reveal.classList.add('active');
                }
            });
        };

        window.addEventListener('scroll', revealOnScroll);
        // Trigger once on load
        revealOnScroll();

        // Simple Parallax Effect for Backgrounds
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            const parallaxElements = document.querySelectorAll('.parallax-bg');
            parallaxElements.forEach(el => {
                el.style.transform = `translateY(${scrolled * 0.3}px)`;
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
      
<div className="noise-overlay"></div>

<nav className="fixed top-0 w-full z-40 px-6 py-6 md:px-12 flex justify-between items-center mix-blend-difference text-stone-200 transition-all duration-500" id="navbar">
<div className="flex items-center gap-2 group cursor-pointer">
<iconify-icon className="text-amber-200/80 group-hover:rotate-180 transition-transform duration-1000" icon="solar:sun-2-linear" width="24"></iconify-icon>
<span className="serif tracking-[0.2em] text-sm md:text-base font-semibold">LUMIÈRE &amp; CO.</span>
</div>
<div className="hidden md:flex gap-10 text-xs tracking-widest uppercase text-stone-400 font-light">
<a className="nav-link hover:text-amber-100 transition-colors duration-300" href="#about">Heritage</a>
<a className="nav-link hover:text-amber-100 transition-colors duration-300" href="#collections">Archive</a>
<a className="nav-link hover:text-amber-100 transition-colors duration-300" href="#spaces">Spaces</a>
<a className="nav-link hover:text-amber-100 transition-colors duration-300" href="#bespoke">Bespoke</a>
</div>
<button className="hidden md:flex items-center gap-3 border border-stone-700/50 rounded-full px-5 py-2 hover:border-amber-700/50 hover:bg-amber-900/10 transition-all duration-500 group">
<span className="text-xs uppercase tracking-widest text-stone-300 group-hover:text-amber-100">Consultation</span>
<iconify-icon className="text-stone-400 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>

<button className="md:hidden text-stone-200">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</nav>

<header className="relative w-full h-screen overflow-hidden flex items-center justify-center">

<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black z-10"></div>
<div className="absolute inset-0 bg-radial-gradient from-amber-900/10 to-transparent z-10 opacity-50"></div>

<img alt="Parisian Townhouse Interior" className="w-full h-full object-cover scale-110 animate-[subtle-rotate_60s_linear_infinite] opacity-60" src="https://images.unsplash.com/photo-1551516594-56cb78394645?q=80&amp;w=2530&amp;auto=format&amp;fit=crop"/>
</div>

<div className="relative z-20 text-center flex flex-col items-center max-w-4xl px-4">
<div className="mb-8 opacity-0 animate-[float_4s_ease-in-out_infinite] reveal active" style={{transitionDelay: '200ms'}}>

<div className="w-1 h-24 bg-gradient-to-b from-transparent to-amber-200/50 mx-auto mb-2"></div>
<div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full border border-white/5 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-[2px] flex items-center justify-center lantern-glow">
<div className="absolute inset-0 rounded-full border border-amber-500/10 animate-[spin_30s_linear_infinite]"></div>
<div className="absolute inset-4 rounded-full border border-white/5 animate-[spin_20s_linear_infinite_reverse]"></div>

<div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-200/20 via-transparent to-transparent opacity-80"></div>
</div>
</div>
<h1 className="text-4xl md:text-7xl font-light text-amber-50/90 leading-tight tracking-tighter mix-blend-overlay reveal active mb-6" style={{transitionDelay: '400ms'}}>
                A House <br/> <span className="serif italic text-amber-200/80">Defined by Light</span>
</h1>
<p className="text-sm md:text-base text-stone-400 tracking-wide font-light max-w-lg mx-auto mb-12 reveal active" style={{transitionDelay: '600ms'}}>
                Lumière &amp; Co. — Blending classic European craftsmanship with the intimacy of modern illumination.
            </p>
<div className="flex flex-col md:flex-row gap-6 reveal active" style={{transitionDelay: '800ms'}}>
<button className="px-8 py-4 border border-stone-600/50 text-stone-200 text-xs uppercase tracking-[0.2em] hover:bg-amber-50 hover:text-black transition-all duration-700 ease-out">
                    Discover Collection
                </button>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 animate-bounce duration-[3000ms]">
<span className="text-[10px] uppercase tracking-widest text-stone-500">Explore</span>
<div className="w-[1px] h-12 bg-gradient-to-b from-stone-500 to-transparent"></div>
</div>
</header>

<section className="relative py-32 md:py-48 px-6 md:px-20 overflow-hidden" id="about">
<div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-stone-900/50 to-transparent z-0 pointer-events-none"></div>
<div className="grid md:grid-cols-2 gap-20 items-center relative z-10">
<div className="space-y-10 reveal">
<span className="text-amber-500/80 text-xs tracking-[0.25em] uppercase border-l border-amber-500/30 pl-4">Our Heritage</span>
<h2 className="text-3xl md:text-5xl font-light leading-snug tracking-tight text-stone-200">
                    Crafting intimacy through <br/> <span className="serif text-amber-100/70">sculptural illumination.</span>
</h2>
<p className="text-stone-400 font-light leading-relaxed max-w-md">
                    Born in a small atelier in Le Marais, our process respects the slow, deliberate nature of traditional metalworking. Each fixture is an assembly of raw brass, alabaster stone, and smoked glass, polished by hand to capture the warmth of a candle's flicker.
                </p>
<div className="flex gap-12 pt-8 border-t border-stone-800">
<div>
<p className="text-2xl font-serif text-amber-200/80">1892</p>
<p className="text-[10px] uppercase tracking-widest text-stone-500 mt-1">Established</p>
</div>
<div>
<p className="text-2xl font-serif text-amber-200/80">140+</p>
<p className="text-[10px] uppercase tracking-widest text-stone-500 mt-1">Artisans</p>
</div>
<div>
<p className="text-2xl font-serif text-amber-200/80">Infinite</p>
<p className="text-[10px] uppercase tracking-widest text-stone-500 mt-1">Reflections</p>
</div>
</div>
</div>
<div className="relative h-[600px] reveal delay-200 group">

<div className="absolute top-10 right-10 w-64 h-80 bg-stone-900 overflow-hidden shadow-2xl z-20 border border-stone-800 transform group-hover:-translate-y-4 transition-transform duration-1000">
<img alt="Raw Brass Detail" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-700" src="https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute bottom-10 left-10 w-72 h-96 bg-stone-800 overflow-hidden shadow-2xl z-10 border border-stone-700 transform group-hover:translate-y-4 transition-transform duration-1000">
<img alt="Artisan Workshop" className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity duration-700" src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-amber-900/20 mix-blend-soft-light pointer-events-none"></div>
</div>
</div>
</section>

<section className="py-32 bg-[#080808] border-y border-stone-900 relative" id="collections">
<div className="container mx-auto px-6 md:px-12">
<div className="flex justify-between items-end mb-20 reveal">
<div>
<h3 className="text-3xl font-light text-stone-100 mb-2">The Lumière Archive</h3>
<p className="text-stone-500 text-sm font-light">Timeless fixtures for the discerning eye.</p>
</div>
<div className="flex gap-4">
<button className="w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center text-stone-400 hover:border-amber-700 hover:text-amber-200 transition-all">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center text-stone-400 hover:border-amber-700 hover:text-amber-200 transition-all">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group relative cursor-pointer reveal delay-100">
<div className="aspect-[4/5] bg-stone-900/30 border border-stone-800/50 relative overflow-hidden flex items-center justify-center transition-all duration-700 hover:border-amber-900/30">
<div className="absolute inset-0 bg-radial-gradient from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
<img alt="Sconce" className="w-2/3 object-contain drop-shadow-2xl float-slow filter grayscale group-hover:grayscale-0 transition-all duration-700 brightness-90 group-hover:brightness-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute bottom-6 left-6 flex flex-col gap-1 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
<span className="text-xs text-amber-200 tracking-widest uppercase">Wall Sconce</span>
<span className="serif text-xl text-white">The Orsay No. 4</span>
</div>
</div>
</div>

<div className="group relative cursor-pointer reveal delay-200">
<div className="aspect-[4/5] bg-stone-900/30 border border-stone-800/50 relative overflow-hidden flex items-center justify-center transition-all duration-700 hover:border-amber-900/30">
<div className="absolute inset-0 bg-radial-gradient from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
<img alt="Chandelier" className="w-3/4 object-contain drop-shadow-2xl float-slow filter grayscale group-hover:grayscale-0 transition-all duration-700 brightness-90 group-hover:brightness-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-6 left-6 flex flex-col gap-1 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
<span className="text-xs text-amber-200 tracking-widest uppercase">Chandelier</span>
<span className="serif text-xl text-white">Versailles Drop</span>
</div>
</div>
</div>

<div className="group relative cursor-pointer reveal delay-300">
<div className="aspect-[4/5] bg-stone-900/30 border border-stone-800/50 relative overflow-hidden flex items-center justify-center transition-all duration-700 hover:border-amber-900/30">
<div className="absolute inset-0 bg-radial-gradient from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
<img alt="Table Lamp" className="w-2/3 object-contain drop-shadow-2xl float-slow filter grayscale group-hover:grayscale-0 transition-all duration-700 brightness-90 group-hover:brightness-110" src="https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 flex flex-col gap-1 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
<span className="text-xs text-amber-200 tracking-widest uppercase">Table Lamp</span>
<span className="serif text-xl text-white">The Bastille Globe</span>
</div>
</div>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-stone-500 hover:text-amber-100 transition-colors border-b border-transparent hover:border-amber-100 pb-1" href="#">
                    View Full Archive
                </a>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-0" id="spaces">
<div className="flex flex-col items-center mb-16 reveal">
<span className="text-amber-500/80 text-xs tracking-[0.25em] uppercase mb-4">Interiors</span>
<h3 className="text-3xl md:text-5xl serif text-center text-stone-200 font-light">Lighting the Home</h3>
</div>

<div className="space-y-32">

<div className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden reveal">
<img className="absolute inset-0 w-full h-full object-cover brightness-[0.4] hover:brightness-[0.5] transition-all duration-[2000ms] scale-105 hover:scale-100" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&amp;w=2600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40"></div>
<div className="absolute bottom-10 left-6 md:left-20 max-w-sm glass-panel p-8 rounded-sm">
<h4 className="text-2xl serif text-stone-100 mb-2">The Grand Salon</h4>
<p className="text-stone-300 text-sm font-light leading-relaxed mb-6">
                        Soft evening ambiance created by our brass floor lamps and concealed cove lighting.
                    </p>
<button className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-amber-200">
                        Shop This Room <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</button>
</div>
</div>

<div className="grid md:grid-cols-2 gap-0 h-auto md:h-[80vh] reveal">
<div className="relative h-[50vh] md:h-full bg-stone-900 overflow-hidden group">
<img className="w-full h-full object-cover brightness-[0.6] group-hover:scale-105 transition-transform duration-[2000ms]" src="https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&amp;w=1800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="bg-[#0f0f0f] flex items-center justify-center p-12 md:p-24 relative">
<div className="absolute top-10 left-10">
<iconify-icon className="text-stone-600" icon="solar:bed-linear" width="30"></iconify-icon>
</div>
<div className="max-w-md">
<span className="text-xs text-amber-600 tracking-widest uppercase block mb-4">Private Quarters</span>
<h4 className="text-3xl serif text-stone-100 mb-6 leading-tight">Intimate Warmth for Rest</h4>
<p className="text-stone-400 font-light leading-7 mb-8">
                            Our bedside collection focuses on downward-casting light to preserve the sanctity of darkness while offering just enough illumination for evening reading. 
                        </p>
<div className="flex gap-4">
<div className="w-12 h-12 rounded-full border border-stone-700 bg-[#1a1a1a]"></div>
<div className="w-12 h-12 rounded-full border border-stone-700 bg-[#4a3b2a]"></div> 
<div className="w-12 h-12 rounded-full border border-stone-700 bg-[#e0e0e0]"></div> 
</div>
<p className="text-[10px] text-stone-500 mt-2 uppercase tracking-wide">Available Finishes</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative bg-stone-950 overflow-hidden" id="bespoke">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-900/5 rounded-full blur-3xl pointer-events-none"></div>
<div className="container mx-auto px-6 md:px-20 grid md:grid-cols-2 gap-16 items-center relative z-10">
<div className="reveal">
<h2 className="text-4xl md:text-6xl serif text-stone-100 mb-6">Designed for You</h2>
<p className="text-stone-400 font-light leading-relaxed text-lg mb-10 max-w-lg">
                    Every space dictates its own light. Our bespoke service allows you to customize dimensions, materials, and luminosity to perfectly suit your architecture.
                </p>
<ul className="space-y-6 text-stone-300 font-light">
<li className="flex items-center gap-4">
<iconify-icon className="text-amber-500" icon="solar:ruler-pen-linear"></iconify-icon>
                        Custom Dimensions &amp; Drop Lengths
                    </li>
<li className="flex items-center gap-4">
<iconify-icon className="text-amber-500" icon="solar:palette-linear"></iconify-icon>
                        Rare Material Sourcing (Marble, Aged Brass)
                    </li>
<li className="flex items-center gap-4">
<iconify-icon className="text-amber-500" icon="solar:lightbulb-linear"></iconify-icon>
                        Smart Home Integration Engineering
                    </li>
</ul>
</div>
<div className="bg-stone-900/40 p-10 border border-stone-800 rounded-sm backdrop-blur-sm reveal delay-200 shadow-2xl">
<div className="flex items-center justify-between mb-8">
<h3 className="text-xl serif text-stone-200">Consultation Request</h3>
<iconify-icon className="text-stone-500" icon="solar:pen-new-square-linear" width="24"></iconify-icon>
</div>
<form className="space-y-6">
<div className="space-y-1">
<label className="text-[10px] uppercase tracking-widest text-stone-500">Full Name</label>
<input className="w-full bg-transparent border-b border-stone-700 py-2 text-stone-200 focus:outline-none focus:border-amber-500/50 transition-colors font-light placeholder-stone-700" placeholder="e.g. Jean Dupont" type="text"/>
</div>
<div className="space-y-1">
<label className="text-[10px] uppercase tracking-widest text-stone-500">Email Address</label>
<input className="w-full bg-transparent border-b border-stone-700 py-2 text-stone-200 focus:outline-none focus:border-amber-500/50 transition-colors font-light placeholder-stone-700" placeholder="jean@example.com" type="email"/>
</div>
<div className="space-y-1">
<label className="text-[10px] uppercase tracking-widest text-stone-500">Interest</label>
<div className="grid grid-cols-2 gap-4 pt-2">
<label className="flex items-center gap-2 cursor-pointer group">
<div className="w-4 h-4 border border-stone-600 rounded-full group-hover:border-amber-500 flex items-center justify-center">
<div className="w-2 h-2 bg-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<span className="text-sm text-stone-400 font-light">Residential</span>
</label>
<label className="flex items-center gap-2 cursor-pointer group">
<div className="w-4 h-4 border border-stone-600 rounded-full group-hover:border-amber-500 flex items-center justify-center"></div>
<span className="text-sm text-stone-400 font-light">Commercial</span>
</label>
</div>
</div>
<button className="w-full mt-8 py-4 bg-stone-100 text-stone-900 uppercase tracking-widest text-xs hover:bg-amber-50 transition-colors duration-500">
                        Begin Conversation
                    </button>
</form>
</div>
</div>
</section>

<footer className="bg-black pt-24 pb-12 px-6 md:px-12 border-t border-stone-900">
<div className="container mx-auto">
<div className="grid md:grid-cols-4 gap-12 mb-20">
<div className="md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<iconify-icon className="text-amber-700" icon="solar:sun-2-linear" width="20"></iconify-icon>
<span className="serif tracking-[0.2em] text-sm text-stone-300">LUMIÈRE &amp; CO.</span>
</div>
<p className="text-stone-600 text-sm font-light leading-relaxed">
                        Parisian heritage lighting designed for the modern sanctuary. <br/>Est. 1892.
                    </p>
</div>
<div className="space-y-4">
<h5 className="text-stone-200 text-xs uppercase tracking-widest mb-4">Collection</h5>
<a className="block text-stone-500 text-sm font-light hover:text-amber-200 transition-colors" href="#">Ceiling</a>
<a className="block text-stone-500 text-sm font-light hover:text-amber-200 transition-colors" href="#">Wall</a>
<a className="block text-stone-500 text-sm font-light hover:text-amber-200 transition-colors" href="#">Table &amp; Floor</a>
<a className="block text-stone-500 text-sm font-light hover:text-amber-200 transition-colors" href="#">Outdoor</a>
</div>
<div className="space-y-4">
<h5 className="text-stone-200 text-xs uppercase tracking-widest mb-4">Maison</h5>
<a className="block text-stone-500 text-sm font-light hover:text-amber-200 transition-colors" href="#">Our Story</a>
<a className="block text-stone-500 text-sm font-light hover:text-amber-200 transition-colors" href="#">Artisans</a>
<a className="block text-stone-500 text-sm font-light hover:text-amber-200 transition-colors" href="#">Showroom</a>
<a className="block text-stone-500 text-sm font-light hover:text-amber-200 transition-colors" href="#">Contact</a>
</div>
<div className="space-y-4">
<h5 className="text-stone-200 text-xs uppercase tracking-widest mb-4">Newsletter</h5>
<div className="relative border-b border-stone-800 pb-2">
<input className="bg-transparent w-full text-stone-300 text-sm font-light focus:outline-none" placeholder="Email Address" type="email"/>
<button className="absolute right-0 top-0 text-stone-500 hover:text-amber-200">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-stone-900">
<p className="text-stone-700 text-[10px] tracking-widest uppercase mb-4 md:mb-0">© 2024 Lumière &amp; Co. Paris.</p>
<div className="flex gap-6">
<a className="text-stone-600 hover:text-amber-200 transition-colors" href="#"><iconify-icon icon="solar:camera-linear"></iconify-icon></a> 
<a className="text-stone-600 hover:text-amber-200 transition-colors" href="#"><iconify-icon icon="solar:letter-linear"></iconify-icon></a> 
</div>
</div>
<div className="mt-12 text-center">
<p className="serif italic text-stone-800 text-2xl md:text-4xl opacity-30 select-none">"Where Light Becomes Legacy."</p>
</div>
</div>
</footer>


    </>
  );
}
