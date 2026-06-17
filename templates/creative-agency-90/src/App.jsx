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



        document.addEventListener('DOMContentLoaded', () => {
            const hero = document.getElementById('hero');
            
            hero.addEventListener('mousemove', (e) => {
                const rect = hero.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                hero.style.setProperty('--x', `${x}px`);
                hero.style.setProperty('--y', `${y}px`);
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/70 backdrop-blur-xl transition-all duration-700 delay-500" style={{animation: 'immersiveEnter 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards', opacity: '0', transform: 'translateY(-10px)'}}>
<div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
<div className="hidden md:flex items-center space-x-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#about">Studio</a>
<a className="hover:text-white transition-colors" href="#services">Expertise</a>
<a className="hover:text-white transition-colors" href="#work">Work</a>
<a className="hover:text-white transition-colors" href="#contact">Contact</a>
</div>
<a className="hidden md:flex group items-center gap-2 px-5 py-2 text-xs font-semibold tracking-wide border border-white/10 rounded-full hover:bg-white/5 transition-all hover:border-[#9AFF00]/30 text-white" href="#contact">
                Start Project
                <svg aria-hidden="true" className="iconify group-hover:translate-x-0.5 transition-transform iconify--lucide" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>

<button className="md:hidden text-white">
<svg aria-hidden="true" className="iconify w-6 h-6 iconify--lucide" data-icon="lucide:menu" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</nav>

<section className="min-h-screen flex overflow-hidden group pt-20 relative items-center justify-center" id="hero" style={{'--x': '308px', '--y': '934.5px'}}>

<div className="absolute inset-0 bg-grid z-0 pointer-events-none opacity-40"></div>

<div className="hero-spotlight absolute inset-0 pointer-events-none transition-opacity duration-300"></div>
<div className="hero-grid-highlight absolute inset-0 pointer-events-none"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-[#9AFF00] rounded-full opacity-[0.02] blur-[120px] pointer-events-none"></div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center pointer-events-none">

<div className="flex stagger-in delay-0 pointer-events-auto justify-center">
<div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-[#9AFF00] animate-pulse"></span>
<span className="text-xs font-medium text-neutral-300 tracking-wide">Accepting new ventures for 2024</span>
</div>
</div>
<h1 className="pointer-events-auto text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[1.1] mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
<span className="block stagger-in delay-100 lg:bg-clip-text lg:text-transparent bg-gradient-to-br from-[#ffffff] to-white/50">We craft digital</span>
<span className="block stagger-in delay-200 lg:bg-clip-text lg:text-transparent bg-gradient-to-br from-[#ffffff] to-white/50">futures for <span className="text-white italic font-serif">visionaries.</span></span>
</h1>
<div className="stagger-in delay-300">
<p className="pointer-events-auto text-base md:text-lg text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Aether is a design and development agency obsessed with quality. We build immersive websites that define brands and drive growth.
                </p>
</div>
<div className="pointer-events-auto flex flex-col md:flex-row items-center justify-center gap-4 stagger-in delay-400">
<a className="w-full md:w-auto px-8 py-4 bg-[#9AFF00] text-black text-sm font-semibold rounded-full hover:bg-[#88e000] transition-colors flex items-center justify-center gap-2" href="#contact">
                    Let's Build It
                    <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-up-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="w-full md:w-auto px-8 py-4 border border-white/20 text-white text-sm font-semibold rounded-full hover:bg-white/5 transition-colors flex items-center justify-center gap-2" href="#work">
                    View Portfolio
                </a>
</div>
</div>
</section>

<div className="w-full border-y border-white/5 bg-black py-8 relative overflow-hidden stagger-in delay-400">
<div className="max-w-7xl mx-auto px-6 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex justify-between items-center gap-8 flex-wrap md:flex-nowrap">
<span className="text-xl font-bold tracking-tight">ACME CORP</span>
<span className="text-xl font-bold tracking-tight">VORTEX</span>
<span className="text-xl font-bold tracking-tight">PULSAR</span>
<span className="text-xl font-bold tracking-tight">HYPERION</span>
<span className="text-xl font-bold tracking-tight">NEBULA</span>
</div>
</div>
</div>









    </>
  );
}
