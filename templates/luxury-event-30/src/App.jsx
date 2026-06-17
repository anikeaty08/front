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
      

<div className="fixed inset-0 z-0 pointer-events-none flex justify-center items-center">
<div className="w-[50vw] h-[50vw] bg-indigo-900/10 rounded-full blur-[120px] opacity-50 mix-blend-screen" style={{transform: 'translate3d(0,0,0)'}}></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b bg-[#050505]/70 backdrop-blur-xl supports-[backdrop-filter]:bg-[#050505]/40 transition-all duration-300 border-slate-900">
<div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6 lg:px-8">
<a className="flex items-center gap-2 group" href="#">
<span className="font-serif text-xl tracking-tighter text-indigo-100/90 font-medium uppercase group-hover:text-indigo-200 transition-colors">TGM</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm tracking-wide">
<a className="text-blue-400 hover:text-indigo-100 transition-colors" href="#spaces">Spaces</a>
<a className="text-blue-400 hover:text-indigo-100 transition-colors" href="#experiences">Experiences</a>
<a className="text-blue-400 hover:text-indigo-100 transition-colors" href="#gallery">Gallery</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm text-blue-400 hover:text-indigo-100 transition-colors" href="#">Sign In</a>
<a className="relative inline-flex h-10 items-center justify-center overflow-hidden rounded-full bg-indigo-200/10 px-6 font-medium text-indigo-200/90 border border-indigo-200/20 hover:bg-indigo-200/20 transition-all duration-300 hover:shadow-[0_0_20px_-5px_rgba(253,230,138,0.3)] text-xs uppercase tracking-widest" href="#">
<span>Reserve</span>
</a>
</div>
</div>
</nav>
<main className="relative z-10 flex flex-col items-center w-full">

<section className="min-h-screen flex overflow-hidden w-full pt-20 pr-6 pl-6 relative items-center justify-center" style={{perspective: '1000px'}}>
<div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-40">
<div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-950/30 via-[#050505] to-[#050505]"></div>
</div>

<div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto" onmouseleave="this.style.transform = 'rotateX(2deg) rotateY(0deg) translateZ(0px)';" onmousemove="
                    const rect = this.getBoundingClientRect();
                    const x = event.clientX - rect.left;
                    const y = event.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = ((y - centerY) / centerY) * -5;
                    const rotateY = ((x - centerX) / centerX) * 5;
                    this.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
                 " style={{transform: 'rotateX(2deg) rotateY(0deg) translateZ(0px)', transition: 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'}}>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 shadow-2xl">
<iconify-icon className="text-indigo-300/70 text-sm" icon="solar:stars-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xs text-blue-400 tracking-wide uppercase">A New Era of Elegance</span>
</div>
<h1 className="font-serif text-5xl sm:text-7xl lg:text-[7rem] leading-[1.1] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-indigo-50 via-indigo-100/90 to-indigo-900/50 font-medium mb-6 drop-shadow-sm">
                    The Guardian <br/> <i className="font-light text-indigo-200/80">Marquee</i>
</h1>
<p className="text-base sm:text-lg text-blue-400 max-w-2xl mx-auto font-light leading-relaxed mb-10 tracking-wide">
                    Step into a world where architectural grandeur meets bespoke costuming. A canvas for your most profound celebrations, designed with immersive depth and unparalleled luxury.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4">
<a className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-indigo-100 px-8 font-medium text-blue-950 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(253,230,138,0.5)] text-sm" href="#explore">
<span className="relative z-10 flex items-center gap-2">
                            Begin the Journey
                            <iconify-icon className="text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
</a>
</div>
</div>

<div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#050505] to-transparent z-20 pointer-events-none"></div>
</section>

<section className="lg:px-8 w-full z-20 pt-32 pr-6 pb-32 pl-6 relative bg-slate-900" id="experiences">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col items-center text-center mb-20">
<h2 className="font-serif text-3xl md:text-5xl tracking-tighter text-indigo-50 font-medium mb-4">Curated Atmospheres</h2>
<p className="text-sm text-blue-400 max-w-xl font-light">Beyond a venue. We construct intricate, themed environments tailored precisely to the narrative of your event.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group border-white/[0.03] hover:bg-white/[0.02] hover:border-white/[0.08] transition-all duration-500 overflow-hidden border rounded-3xl pt-8 pr-8 pb-8 pl-8 relative" onmouseout="this.style.transform = 'translateY(0) scale(1)';" onmouseover="this.style.transform = 'translateY(-8px) scale(1.02)';" style={{transform: 'translateZ(0)', transition: 'transform 0.4s ease, border-color 0.4s ease'}}>
<div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-indigo-500/10 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<iconify-icon className="text-3xl text-indigo-200/70 mb-6" icon="solar:magic-stick-3-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="font-serif text-xl text-indigo-50 tracking-tight font-medium mb-3">Immersive Decor</h3>
<p className="leading-relaxed text-sm font-light text-blue-700">Theatrical lighting, custom drapery, and architectural accents that transform spaces into living scenes.</p>
</div>

<div className="group relative p-8 rounded-3xl bg-white/[0.01] border border-white/[0.03] hover:bg-white/[0.02] hover:border-white/[0.08] transition-all duration-500 overflow-hidden" onmouseout="this.style.transform = 'translateY(0) scale(1)';" onmouseover="this.style.transform = 'translateY(-8px) scale(1.02)';" style={{transform: 'translateZ(0)', transition: 'transform 0.4s ease, border-color 0.4s ease'}}>
<div className="-mt-4 -mr-4 blur-[40px] group-hover:opacity-100 transition-opacity duration-500 bg-indigo-500/10 opacity-0 w-32 h-32 rounded-full absolute top-0 right-0"></div>
<iconify-icon className="text-3xl text-indigo-200/70 mb-6" icon="solar:crown-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="font-serif text-xl text-indigo-50 tracking-tight font-medium mb-3">Regal Costuming</h3>
<p className="text-sm font-light leading-relaxed text-blue-700">Staff attired to match your theme, from classic tuxedo elegance to elaborate historical masquerade.</p>
</div>

<div className="group relative p-8 rounded-3xl bg-white/[0.01] border border-white/[0.03] hover:bg-white/[0.02] hover:border-white/[0.08] transition-all duration-500 overflow-hidden" onmouseout="this.style.transform = 'translateY(0) scale(1)';" onmouseover="this.style.transform = 'translateY(-8px) scale(1.02)';" style={{transform: 'translateZ(0)', transition: 'transform 0.4s ease, border-color 0.4s ease'}}>
<div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-indigo-500/10 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<iconify-icon className="text-3xl text-indigo-200/70 mb-6" icon="solar:cup-star-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="font-serif text-xl text-indigo-50 tracking-tight font-medium mb-3">Culinary Artistry</h3>
<p className="text-sm font-light leading-relaxed text-blue-700">Menus designed as acts in a play. Visual masterpieces crafted by master chefs, served with precision.</p>
</div>
</div>
</div>
</section>

<section className="w-full py-32 px-6 lg:px-8 relative overflow-hidden border-y border-white/[0.02] bg-slate-900" id="spaces">
<div className="max-w-7xl mx-auto relative z-10">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="font-serif text-3xl md:text-5xl tracking-tighter text-indigo-50 font-medium mb-4">The Grand Halls</h2>
<p className="text-sm text-blue-400 max-w-md font-light">Explore venues designed with forced perspective and volumetric lighting to create an illusion of infinite space.</p>
</div>
<button className="inline-flex items-center gap-2 text-sm text-indigo-200/80 hover:text-indigo-100 transition-colors group pb-2">
                        View Floorplans
                        <iconify-icon className="text-lg group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8" style={{perspective: '1200px'}}>

<div className="group relative rounded-3xl overflow-hidden aspect-[4/3] bg-blue-900 border border-white/[0.05]" onmouseout="this.style.transform = 'rotateY(2deg) scale(1) translateZ(0)';" onmouseover="this.style.transform = 'rotateY(0deg) scale(1.02) translateZ(20px)';" style={{transform: 'rotateY(2deg)', transition: 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)'}}>

<div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-blue-900 to-[#050505] opacity-80 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="absolute inset-0 opacity-30 mix-blend-overlay bg-[url(default)]"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent">
<h3 className="font-serif text-2xl text-indigo-50 tracking-tight font-medium mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-80 group-hover:opacity-100">The Obsidian Atrium</h3>
<div className="flex items-center gap-4 text-xs text-blue-400 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75 opacity-0 group-hover:opacity-100">
<span className="flex items-center gap-1"><iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon> Up to 1,200</span>
<span className="w-1 h-1 rounded-full bg-blue-600"></span>
<span>Grand Staircase</span>
</div>
</div>
</div>

<div className="group relative rounded-3xl overflow-hidden aspect-[4/3] bg-blue-900 border border-white/[0.05]" onmouseout="this.style.transform = 'rotateY(-2deg) scale(1) translateZ(0)';" onmouseover="this.style.transform = 'rotateY(0deg) scale(1.02) translateZ(20px)';" style={{transform: 'rotateY(-2deg)', transition: 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)'}}>
<div className="absolute inset-0 bg-gradient-to-bl from-indigo-950/40 via-blue-900 to-[#050505] opacity-80 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgMGw0MCA0ME00MCAwTDAgNDAiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+Cjwvc3ZnPg==')] opacity-30 mix-blend-overlay"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent">
<h3 className="font-serif text-2xl text-indigo-50 tracking-tight font-medium mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-80 group-hover:opacity-100">The Ivory Pavilion</h3>
<div className="flex items-center gap-4 text-xs text-blue-400 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75 opacity-0 group-hover:opacity-100">
<span className="flex items-center gap-1"><iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon> Up to 500</span>
<span className="w-1 h-1 rounded-full bg-blue-600"></span>
<span>Botanical Canopy</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full py-32 px-6 lg:px-8 relative flex justify-center text-center">
<div className="max-w-2xl relative z-10">
<iconify-icon className="text-4xl text-indigo-200/50 mb-6" icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h2 className="font-serif text-4xl md:text-5xl tracking-tighter text-indigo-50 font-medium mb-6">Commission Your Event</h2>
<p className="text-sm text-blue-400 font-light mb-10 leading-relaxed">
                    Consult with our scenographers to draft the blueprint for your occasion. Every detail, from structural aesthetics to staff costuming, is yours to define.
                </p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto relative group" onsubmit="event.preventDefault();">
<div className="absolute inset-0 bg-indigo-500/10 blur-xl rounded-full opacity-0 group-focus-within:opacity-100 transition-opacity duration-500"></div>
<input className="w-full h-12 bg-white/[0.03] border border-white/[0.08] rounded-full px-6 text-sm text-blue-200 placeholder:text-blue-600 focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.05] transition-all relative z-10" placeholder="Your email address" type="email"/>
<button className="h-12 px-8 rounded-full bg-indigo-100 text-blue-950 font-medium text-sm hover:bg-white transition-colors flex-shrink-0 relative z-10" type="submit">
                        Inquire
                    </button>
</form>
</div>
</section>
</main>

<footer className="w-full border-t bg-[#020202] pt-16 pb-8 px-6 lg:px-8 border-slate-900">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
<div className="max-w-xs">
<span className="font-serif text-2xl tracking-tighter text-indigo-100/90 font-medium block mb-4">TGM</span>
<p className="text-xs leading-relaxed font-light text-blue-700">
                    The Guardian Marquee.<br/>
                    A sanctuary of celebration, engineered for unforgettable moments.
                </p>
</div>
<div className="flex gap-16">
<div className="flex flex-col gap-4">
<span className="text-xs font-medium text-blue-200 uppercase tracking-widest">Venue</span>
<a className="text-xs hover:text-indigo-100 transition-colors text-blue-700" href="#">The Obsidian</a>
<a className="text-xs hover:text-indigo-100 transition-colors text-blue-700" href="#">The Ivory</a>
<a className="text-xs hover:text-indigo-100 transition-colors text-blue-700" href="#">Floorplans</a>
</div>
<div className="flex flex-col gap-4">
<span className="text-xs font-medium text-blue-200 uppercase tracking-widest">Design</span>
<a className="text-xs hover:text-indigo-100 transition-colors text-blue-700" href="#">Costuming</a>
<a className="text-xs hover:text-indigo-100 transition-colors text-blue-700" href="#">Lighting</a>
<a className="text-xs hover:text-indigo-100 transition-colors text-blue-700" href="#">Culinary</a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-900">
<span className="text-[10px] text-blue-600 tracking-wider">© 2024 THE GUARDIAN MARQUEE. ALL RIGHTS RESERVED.</span>
<div className="flex items-center gap-4 mt-4 md:mt-0">
<a className="text-blue-600 hover:text-indigo-200 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:map-point-linear"></iconify-icon>
</a>
<a className="text-blue-600 hover:text-indigo-200 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:phone-linear"></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}
