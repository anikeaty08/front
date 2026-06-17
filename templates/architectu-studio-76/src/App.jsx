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
display: ['"Instrument Serif"', 'serif'],
sans: ['"Manrope"', 'sans-serif'],
mono: ['"Space Mono"', 'monospace'],
},
colors: {
base: '#F5F5F0',      // Warm Alabaster
panel: '#FFFFFF',     // Pure White
surface: '#EAEAE5',   // Stone
line: '#D1D1CB',      // Warm Grey Line
txt: {
primary: '#1A1918', // Soft Charcoal
secondary: '#5C5855', // Taupe
muted: '#9CA3AF',
},
accent: {
DEFAULT: '#6B5D52', // Architectural Bronze/Taupe
dim: 'rgba(107, 93, 82, 0.1)',
}
},
animation: {
'float-slow': 'float 8s ease-in-out infinite',
'float-delayed': 'float 8s ease-in-out 4s infinite',
'spin-slow': 'spin 20s linear infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0) rotateX(0deg)' },
'50%': { transform: 'translateY(-20px) rotateX(2deg)' },
}
}
}
}
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
      

<div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03]" style={{backgroundImage: 'url(&quot', data: 'image/svg+xml, %3Csvg viewBox=\'0 0 400 400\' xmlns=\'http: //www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E&quot'}}></div>

<div className="fixed inset-0 pointer-events-none z-0 flex justify-between px-6 md:px-24 opacity-30">
<div className="w-px h-full bg-line"></div>
<div className="w-px h-full bg-line hidden md:block"></div>
<div className="w-px h-full bg-line hidden md:block"></div>
<div className="w-px h-full bg-line"></div>
</div>

<nav className="fixed top-0 w-full z-40 bg-base/80 backdrop-blur-md border-b border-line h-20 flex items-center justify-between px-6 md:px-24 transition-all duration-500">
<div className="flex items-center gap-4">
<a className="text-txt-primary hover:opacity-70 transition-opacity text-2xl italic tracking-tighter font-display" href="#">Design.Studio</a>
</div>
<div className="flex items-center gap-8 md:gap-16 font-mono text-[10px] tracking-widest uppercase">
<a className="text-txt-secondary hover:text-accent transition-colors" href="#philosophy">Philosophy</a>
<a className="text-txt-secondary hover:text-accent transition-colors" href="#spaces">Spaces</a>
<a className="hidden md:block px-4 py-2 border border-txt-primary hover:bg-txt-primary hover:text-white transition-all duration-300" href="#contact">
          Inquire
        </a>
</div>
</nav>

<header className="relative pt-32 pb-20 px-6 md:px-24 min-h-screen flex flex-col justify-center overflow-hidden">
<div className="max-w-[1600px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">

<div className="order-2 lg:order-1 space-y-8">
<div className="font-mono text-xs text-accent flex items-center gap-3">
<span className="w-8 h-px bg-accent"></span>
             INTERIOR / SPATIAL / FORM
          </div>
<h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.9] text-txt-primary tracking-tight">
            Design <br/>
<span className="italic font-light text-txt-secondary">Beyond</span> <br/>
            Decoration.
          </h1>
<p className="text-lg md:text-xl text-txt-secondary font-light max-w-md leading-relaxed">
            We curate spatial experiences through subtractive architecture and material honesty. Your environment shapes your consciousness.
          </p>
<div className="pt-8 flex flex-col md:flex-row items-start md:items-center gap-8">
<div className="flex items-center gap-4 group cursor-pointer">
<div className="w-12 h-12 rounded-full border border-line flex items-center justify-center group-hover:bg-txt-primary group-hover:text-white transition-all duration-300">
<iconify-icon className="text-xl" icon="solar:arrow-right-down-linear"></iconify-icon>
</div>
<span className="font-mono text-xs uppercase tracking-widest">Explore Portfolio</span>
</div>
</div>
</div>

<div className="order-1 lg:order-2 perspective-container h-[50vh] md:h-[600px] w-full flex items-center justify-center relative">

<div className="relative w-64 md:w-80 h-80 md:h-96 preserve-3d animate-float-slow">

<div className="absolute inset-0 bg-white shadow-xl transform translate-z-[-50px] rotate-y-12 border border-line p-2 opacity-90 transition-transform duration-700 hover:translate-z-[-80px]">
<div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&amp;w=2000&amp;auto=format&amp;fit=crop')] bg-cover bg-center grayscale opacity-80"></div>
</div>

<div className="absolute inset-0 bg-white shadow-2xl transform translate-x-8 translate-y-8 translate-z-[20px] rotate-y-[-5deg] overflow-hidden border-4 border-white transition-transform duration-700 hover:rotate-y-0 hover:scale-105">
<div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&amp;w=1974&amp;auto=format&amp;fit=crop')] bg-cover bg-center"></div>

<div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-500"></div>
</div>

<div className="absolute -bottom-12 -left-12 w-40 h-48 bg-white shadow-lg transform translate-z-[60px] rotate-x-[10deg] p-4 flex flex-col justify-between animate-float-delayed">
<div className="font-mono text-[10px] text-txt-muted uppercase">Materiality</div>
<div className="w-full h-24 bg-[url('https://images.unsplash.com/photo-1518365657018-93a0273a5a82?q=80&amp;w=2000&amp;auto=format&amp;fit=crop')] bg-cover"></div>
<div className="flex justify-between items-end border-t border-line pt-2">
<span className="font-display italic text-lg">Stone</span>
<span className="font-mono text-[8px]">001</span>
</div>
</div>

<div className="absolute -top-20 -right-20 w-64 h-64 border border-accent/20 rounded-full transform translate-z-[-100px] animate-spin-slow pointer-events-none"></div>
</div>
</div>
</div>
</header>

<section className="py-32 px-6 md:px-24 bg-panel border-y border-line" id="philosophy">
<div className="max-w-[1600px] mx-auto">
<div className="grid grid-cols-1 md:grid-cols-12 gap-16">
<div className="md:col-span-4 sticky top-32 h-fit">
<div className="flex items-center gap-2 mb-6">
<iconify-icon className="text-accent text-2xl" icon="solar:ruler-pen-linear"></iconify-icon>
<h2 className="font-mono text-xs text-accent tracking-widest uppercase">The Design Audit</h2>
</div>
<p className="font-display text-4xl text-txt-primary leading-none">
               Why open plans <br/> fail to perform.
             </p>
</div>
<div className="md:col-span-8 space-y-12">

<div className="group border-b border-line pb-12 hover:pl-4 transition-all duration-500">
<div className="flex justify-between items-start mb-4">
<h3 className="font-display text-2xl italic text-txt-primary">Acoustic Negligence</h3>
<span className="font-mono text-xs text-txt-muted">01</span>
</div>
<p className="text-txt-secondary font-light leading-relaxed max-w-2xl">
                 Most modern interiors prioritize visual vastness over sonic intimacy. We re-introduce acoustic tectonics—textiles, angled planes, and baffles—to allow conversation to exist alongside life.
               </p>
</div>

<div className="group border-b border-line pb-12 hover:pl-4 transition-all duration-500">
<div className="flex justify-between items-start mb-4">
<h3 className="font-display text-2xl italic text-txt-primary">Lighting Flatness</h3>
<span className="font-mono text-xs text-txt-muted">02</span>
</div>
<p className="text-txt-secondary font-light leading-relaxed max-w-2xl">
                 Over-reliance on recessed grid lighting creates a sterile, clinic-like atmosphere. Our approach uses layered lumens: low-level ambient, task-specific focus, and sculptural glow to sculpt depth.
               </p>
</div>

<div className="group border-b border-line pb-12 hover:pl-4 transition-all duration-500">
<div className="flex justify-between items-start mb-4">
<h3 className="font-display text-2xl italic text-txt-primary">Material Dishonesty</h3>
<span className="font-mono text-xs text-txt-muted">03</span>
</div>
<p className="text-txt-secondary font-light leading-relaxed max-w-2xl">
                 We reject faux finishes. Wood should be wood; stone should be stone. We advocate for materials that patina with age, telling the story of the home's occupants rather than its manufacturer.
               </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-base overflow-hidden" id="spaces">
<div className="px-6 md:px-24 mb-16 flex flex-col md:flex-row justify-between items-end">
<h2 className="font-display text-6xl text-txt-primary tracking-tight">Selected <span className="italic text-accent">Works</span></h2>
<div className="flex items-center gap-2 font-mono text-xs text-txt-muted uppercase mt-4 md:mt-0">
<iconify-icon className="text-lg" icon="solar:mouse-circle-linear"></iconify-icon>
           Scroll Horizontal
         </div>
</div>

<div className="flex overflow-x-auto gap-8 px-6 md:px-24 pb-12 snap-x snap-mandatory scrollbar-hide w-full" style={{scrollBehavior: 'smooth'}}>

<div className="snap-center shrink-0 w-[85vw] md:w-[600px] h-[70vh] relative group overflow-hidden cursor-none">
<img alt="Minimalist Living Room" className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&amp;w=2053&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>

<div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div className="flex justify-between items-end border-t border-white/30 pt-6">
<div>
<span className="block font-mono text-[10px] text-white/80 uppercase mb-2">Kyoto, Japan</span>
<h3 className="font-display text-3xl text-white italic">The Silent House</h3>
</div>
<iconify-icon className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-[85vw] md:w-[600px] h-[70vh] relative group overflow-hidden cursor-none">
<img alt="Modern Bathroom" className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0" src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&amp;w=2074&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
<div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div className="flex justify-between items-end border-t border-white/30 pt-6">
<div>
<span className="block font-mono text-[10px] text-white/80 uppercase mb-2">Copenhagen, DK</span>
<h3 className="font-display text-3xl text-white italic">Nordic Loft</h3>
</div>
<iconify-icon className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-[85vw] md:w-[600px] h-[70vh] relative group overflow-hidden cursor-none">
<img alt="Dark Interior" className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0" src="https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
<div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div className="flex justify-between items-end border-t border-white/30 pt-6">
<div>
<span className="block font-mono text-[10px] text-white/80 uppercase mb-2">Berlin, DE</span>
<h3 className="font-display text-3xl text-white italic">Concrete Atelier</h3>
</div>
<iconify-icon className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-[85vw] md:w-[600px] h-[70vh] relative group overflow-hidden cursor-none bg-accent">
<div className="absolute inset-0 flex items-center justify-center">
<span className="font-display text-9xl text-white opacity-20 italic">More</span>
</div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<div className="bg-white text-txt-primary px-6 py-3 rounded-full font-mono text-xs uppercase tracking-widest">
                View Archive
              </div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-24 border-t border-line bg-panel">
<div className="max-w-[1600px] mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<div>
<h2 className="font-display text-4xl text-txt-primary mb-8">Service Protocols</h2>
<div className="flex flex-col gap-4">
<div className="flex items-center gap-4 py-4 border-b border-line group hover:pl-2 transition-all cursor-default">
<iconify-icon className="text-xl text-txt-muted group-hover:text-accent" icon="solar:sofa-2-linear"></iconify-icon>
<span className="font-sans font-medium text-lg">Residential Curation</span>
</div>
<div className="flex items-center gap-4 py-4 border-b border-line group hover:pl-2 transition-all cursor-default">
<iconify-icon className="text-xl text-txt-muted group-hover:text-accent" icon="solar:buildings-2-linear"></iconify-icon>
<span className="font-sans font-medium text-lg">Commercial Spatial Branding</span>
</div>
<div className="flex items-center gap-4 py-4 border-b border-line group hover:pl-2 transition-all cursor-default">
<iconify-icon className="text-xl text-txt-muted group-hover:text-accent" icon="solar:chair-2-linear"></iconify-icon>
<span className="font-sans font-medium text-lg">Bespoke Furniture Design</span>
</div>
</div>
</div>
<div className="flex items-center justify-center bg-base p-12">
<div className="text-center space-y-4">
<iconify-icon className="text-4xl text-accent" icon="solar:calendar-add-linear"></iconify-icon>
<p className="font-display text-2xl italic">"God is in the details."</p>
<p className="font-mono text-xs uppercase text-txt-muted">— Mies van der Rohe</p>
</div>
</div>
</div>
</div>
</section>

<footer className="py-20 px-6 md:px-24 bg-txt-primary text-base relative overflow-hidden" id="contact">
<div className="max-w-[1600px] mx-auto relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
<div className="space-y-6">
<h2 className="font-display text-5xl md:text-7xl text-white tracking-tight">
            Start the <br/> <span className="italic text-white/50">Dialogue.</span>
</h2>
<div className="flex flex-col md:flex-row gap-8 pt-4">
<div className="space-y-1">
<p className="font-mono text-xs text-white/40 uppercase">Inquiries</p>
<a className="font-sans text-xl text-white hover:text-accent transition-colors" href="mailto:studio@hamza.design">studio@hamza.design</a>
</div>
<div className="space-y-1">
<p className="font-mono text-xs text-white/40 uppercase">Studio</p>
<p className="font-sans text-xl text-white">London, UK</p>
</div>
</div>
</div>
<div className="text-right">
<div className="flex gap-4 justify-end mb-8">
<a className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all" href="#">
<iconify-icon icon="solar:camera-linear"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all" href="#">
<iconify-icon icon="solar:link-circle-linear"></iconify-icon>
</a>
</div>
<p className="font-mono text-[10px] text-white/30 uppercase tracking-widest">
             © 2024 Hamza Spatial Studio <br/>
             Designed for impact.
           </p>
</div>
</div>
</footer>

    </>
  );
}
