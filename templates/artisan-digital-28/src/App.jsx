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
serif: ['Playfair Display', 'serif'],
},
colors: {
cream: '#F9F8F4',
charcoal: '#222222',
forest: '#1A3C34',
gold: '#C5A368',
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
      

<nav className="fixed top-0 w-full z-50 mix-blend-difference text-cream px-6 py-6 md:px-12 flex justify-between items-center bg-transparent backdrop-blur-[2px]">
<div className="text-sm tracking-widest uppercase font-medium">DD — 24</div>
<div className="hidden md:flex gap-8 text-sm font-light tracking-wide">
<a className="hover:text-gold transition-colors duration-300" href="#work">Portfolio</a>
<a className="hover:text-gold transition-colors duration-300" href="#services">Expertise</a>
<a className="hover:text-gold transition-colors duration-300" href="#contact">Contact</a>
</div>
<button className="md:hidden">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="24" data-icon="lucide:menu" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</nav>

<header className="min-h-screen flex flex-col overflow-hidden pr-6 pl-6 relative items-center justify-center">

<div className="absolute inset-0 w-full h-full pointer-events-none z-0">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-forest/10 rounded-full blur-[100px] mix-blend-multiply animate-pulse duration-[4000ms]"></div>
<div className="absolute top-1/3 left-1/3 w-[40vw] h-[40vw] bg-gold/20 rounded-full blur-[80px] mix-blend-multiply"></div>
<div className="absolute bottom-1/3 right-1/3 w-[35vw] h-[35vw] bg-forest/15 rounded-full blur-[90px] mix-blend-multiply"></div>
</div>
<div className="relative z-10 text-center max-w-5xl mx-auto">
<h1 className="font-serif text-6xl md:text-8xl lg:text-9xl tracking-tight text-charcoal leading-[0.9] mb-8 opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
                Drafio<br/>Design
            </h1>
<p className="text-sm md:text-lg tracking-[0.2em] uppercase text-charcoal/70 font-light opacity-0 animate-[fadeIn_1s_ease-out_0.5s_forwards]">
                Drafting the Future of Digital
            </p>
</div>
<div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce duration-[2000ms]">
<svg aria-hidden="true" className="iconify text-charcoal/40 iconify--lucide" data-icon="lucide:arrow-down" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14m7-7l-7 7l-7-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</header>

<section className="py-24 px-6 md:px-12 lg:px-24" id="work">
<div className="flex justify-between items-end mb-16 border-b border-charcoal/10 pb-6">
<h2 className="font-serif text-3xl md:text-5xl text-charcoal tracking-tight">Selected Works</h2>
<span className="hidden md:block text-xs uppercase tracking-widest text-charcoal/50">2021 — Present</span>
</div>

<div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">

<div className="group relative block w-full break-inside-avoid cursor-pointer overflow-hidden">
<img alt="Architecture" className="w-full h-auto object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-forest/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center p-6">
<h3 className="font-serif text-2xl md:text-3xl text-gold italic mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">The Stone House</h3>
<p className="text-cream text-xs uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">Web Design / Art Direction</p>
</div>
</div>

<div className="group relative block w-full break-inside-avoid cursor-pointer overflow-hidden">
<img alt="Interior" className="w-full aspect-[3/4] object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-forest/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center p-6">
<h3 className="font-serif text-2xl md:text-3xl text-gold italic mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">Vessel &amp; Void</h3>
<p className="text-cream text-xs uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">E-Commerce / Branding</p>
</div>
</div>

<div className="group relative block w-full break-inside-avoid cursor-pointer overflow-hidden">
<img alt="Abstract" className="w-full aspect-square object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-forest/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center p-6">
<h3 className="font-serif text-2xl md:text-3xl text-gold italic mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">Kinetic Type</h3>
<p className="text-cream text-xs uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">Creative Development</p>
</div>
</div>

<div className="group relative block w-full break-inside-avoid cursor-pointer overflow-hidden">
<img alt="Minimal" className="w-full aspect-[4/5] object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1507646227500-4d389b0012be?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-forest/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center p-6">
<h3 className="font-serif text-2xl md:text-3xl text-gold italic mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">Mono Arch</h3>
<p className="text-cream text-xs uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">Portfolio Design</p>
</div>
</div>

<div className="group relative block w-full break-inside-avoid cursor-pointer overflow-hidden">
<img alt="Texture" className="w-full aspect-[16/9] object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1534349762913-96c2255060b6?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-forest/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center p-6">
<h3 className="font-serif text-2xl md:text-3xl text-gold italic mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">Silk &amp; Stone</h3>
<p className="text-cream text-xs uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">Identity</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 lg:px-48 bg-cream relative" id="services">
<div className="absolute left-0 top-24 w-1 h-24 bg-gold opacity-30"></div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
<div className="lg:col-span-4">
<h2 className="font-serif text-4xl md:text-5xl text-charcoal tracking-tight leading-tight">
                    Artisanal<br/><span className="italic text-gold">Precision.</span>
</h2>
<p className="mt-8 text-charcoal/70 leading-relaxed font-light text-sm md:text-base max-w-xs">
                    We strip away the non-essential to reveal the essence of your brand, building digital environments that feel both timeless and immediate.
                </p>
</div>
<div className="lg:col-span-8 flex flex-col">

<div className="group flex items-center justify-between py-8 border-b border-gold/30 hover:border-gold transition-colors duration-500 cursor-default">
<div className="flex items-center gap-6">
<span className="text-gold opacity-70 group-hover:opacity-100 transition-opacity duration-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:compass" data-width="24" height="24" role="img" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m16.24 7.76l-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
</span>
<h3 className="font-serif text-2xl text-charcoal group-hover:text-forest transition-colors duration-300">Digital Strategy</h3>
</div>
<span className="text-xs text-charcoal/40 font-mono hidden md:block group-hover:text-gold transition-colors">01</span>
</div>

<div className="group flex items-center justify-between py-8 border-b border-gold/30 hover:border-gold transition-colors duration-500 cursor-default">
<div className="flex items-center gap-6">
<span className="text-gold opacity-70 group-hover:opacity-100 transition-opacity duration-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:pen-tool" data-width="24" height="24" role="img" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="m18 13l-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18M2.3 2.3l7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></g></svg>
</span>
<h3 className="font-serif text-2xl text-charcoal group-hover:text-forest transition-colors duration-300">UI/UX Design</h3>
</div>
<span className="text-xs text-charcoal/40 font-mono hidden md:block group-hover:text-gold transition-colors">02</span>
</div>

<div className="group flex items-center justify-between py-8 border-b border-gold/30 hover:border-gold transition-colors duration-500 cursor-default">
<div className="flex items-center gap-6">
<span className="text-gold opacity-70 group-hover:opacity-100 transition-opacity duration-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:code-2" data-width="24" height="24" role="img" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 16l4-4l-4-4M6 8l-4 4l4 4m8.5-12l-5 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
<h3 className="font-serif text-2xl text-charcoal group-hover:text-forest transition-colors duration-300">Web Development</h3>
</div>
<span className="text-xs text-charcoal/40 font-mono hidden md:block group-hover:text-gold transition-colors">03</span>
</div>

<div className="group flex items-center justify-between py-8 border-b border-gold/30 hover:border-gold transition-colors duration-500 cursor-default">
<div className="flex items-center gap-6">
<span className="text-gold opacity-70 group-hover:opacity-100 transition-opacity duration-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:gem" data-width="24" height="24" role="img" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10.5 3L8 9l4 13l4-13l-2.5-6"></path><path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3zM2 9h20"></path></g></svg>
</span>
<h3 className="font-serif text-2xl text-charcoal group-hover:text-forest transition-colors duration-300">Brand Identity</h3>
</div>
<span className="text-xs text-charcoal/40 font-mono hidden md:block group-hover:text-gold transition-colors">04</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 flex justify-center items-center text-center">
<div className="max-w-2xl">
<svg aria-hidden="true" className="iconify text-gold mx-auto mb-6 iconify--lucide" data-icon="lucide:quote" data-width="32" height="32" role="img" strokeWidth="1" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<p className="font-serif text-2xl md:text-3xl italic text-charcoal leading-relaxed">
                "Drafio Design didn't just build a website; they constructed a digital legacy. The balance of warmth and structure is unlike anything else."
            </p>
</div>
</section>

<section className="bg-forest text-cream py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden" id="contact">

<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23FFFFFF\\' fillOpacity=\\'1\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')'}}></div>
<div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="">
<h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-cream tracking-tight mb-8">
                    Let's<br/><span className="italic text-gold">Talk.</span>
</h2>
<p className="text-cream/70 font-light text-lg max-w-md mb-12">
                    For inquiries regarding collaborations, commissions, or just to say hello, please get in touch.
                </p>
<a className="group inline-flex items-center gap-4 border border-gold px-8 py-4 text-cream hover:bg-gold hover:text-charcoal transition-all duration-300 rounded-sm" href="mailto:hello@drafiodesign.com">
<span className="uppercase tracking-widest text-sm font-medium">Start a Project</span>
<svg aria-hidden="true" className="iconify group-hover:translate-x-1 transition-transform duration-300 iconify--lucide" data-icon="lucide:arrow-right" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
<div className="hidden lg:flex justify-end relative">

<div className="w-64 h-80 border border-gold/30 rounded-t-full flex items-center justify-center p-8">
<div className="w-full h-full bg-cream/5 rounded-t-full backdrop-blur-sm border border-white/10 flex flex-col justify-center items-center text-center p-6">
<span className="font-serif italic text-2xl text-gold mb-2">Artisan</span>
<div className="w-px h-12 bg-gold/50 my-4"></div>
<span className="font-sans text-xs uppercase tracking-widest text-cream/60">Digital</span>
</div>
</div>
</div>
</div>
<div className="mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs tracking-widest uppercase text-cream/40">
<div>© 2024 Drafio Design. All Rights Reserved.</div>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-gold transition-colors" href="#">Instagram</a>
<a className="hover:text-gold transition-colors" href="#">LinkedIn</a>
<a className="hover:text-gold transition-colors" href="#">Are.na</a>
</div>
</div>
</section>

<style>
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
    </style>

    </>
  );
}
