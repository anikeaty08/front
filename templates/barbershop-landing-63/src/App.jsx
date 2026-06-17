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
      

<div className="fixed inset-0 z-[-1] bg-zinc-950 overflow-hidden pointer-events-none">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900/60 via-zinc-950 to-zinc-950"></div>
<div className="absolute top-0 left-1/4 w-[50vw] h-[50vw] bg-zinc-800/20 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-[pulse_8s_ease-in-out_infinite]"></div>
<div className="absolute bottom-0 right-1/4 w-[40vw] h-[40vw] bg-zinc-700/10 rounded-full blur-[100px] mix-blend-screen opacity-30"></div>
</div>

<nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-900/40 backdrop-blur-md border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-3 group" href="#">

<svg className="w-16 md:w-20 drop-shadow-md group-hover:scale-105 transition-transform duration-500" viewbox="0 0 240 60" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient id="nav-handle-grad" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#022c15"></stop>
<stop offset="25%" stop-color="#059669"></stop>
<stop offset="45%" stop-color="#b45309"></stop>
<stop offset="55%" stop-color="#fbbf24"></stop>
<stop offset="75%" stop-color="#18181b"></stop>
<stop offset="100%" stop-color="#000000"></stop>
</lineargradient>
<lineargradient id="nav-blade-grad" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#ffffff"></stop>
<stop offset="40%" stop-color="#94a3b8"></stop>
<stop offset="48%" stop-color="#0f172a"></stop>
<stop offset="52%" stop-color="#334155"></stop>
<stop offset="70%" stop-color="#cbd5e1"></stop>
<stop offset="100%" stop-color="#ffffff"></stop>
</lineargradient>
<lineargradient id="nav-diamond-glow" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#ffffff" stop-opacity="0.8"></stop>
<stop offset="50%" stop-color="#fbbf24" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#ffffff" stop-opacity="0.8"></stop>
</lineargradient>
</defs>

<g>

<path d="M 125 33 L 20 12 L 15 18 L 115 30 Z" fill="url(#nav-blade-grad)"></path>
<path d="M 20 12 L 15 18 L 115 30" fill="none" opacity="0.8" stroke="#ffffff" strokeWidth="1"></path>

<path d="M 115 30 L 165 55 L 215 30 L 165 18 Z M 145 34 L 165 46 L 185 34 L 165 26 Z" fill="url(#nav-handle-grad)" fill-rule="evenodd"></path>

<path d="M 115 30 L 145 34 M 165 55 L 165 46 M 215 30 L 185 34 M 165 18 L 165 26" opacity="0.6" stroke="url(#nav-diamond-glow)" strokeWidth="0.75"></path>
<path d="M 115 30 L 165 55 L 215 30 L 165 18 Z" fill="none" opacity="0.4" stroke="url(#nav-diamond-glow)" strokeWidth="1"></path>
</g>

<g>

<path d="M 125 27 L 20 48 L 15 42 L 115 30 Z" fill="url(#nav-blade-grad)"></path>
<path d="M 20 48 L 15 42 L 115 30" fill="none" opacity="0.8" stroke="#ffffff" strokeWidth="1"></path>

<path d="M 115 30 L 165 5 L 215 30 L 165 42 Z M 145 26 L 165 14 L 185 26 L 165 34 Z" fill="url(#nav-handle-grad)" fill-rule="evenodd"></path>

<path d="M 115 30 L 145 26 M 165 5 L 165 14 M 215 30 L 185 26 M 165 42 L 165 34" opacity="0.6" stroke="url(#nav-diamond-glow)" strokeWidth="0.75"></path>
<path d="M 115 30 L 165 5 L 215 30 L 165 42 Z" fill="none" opacity="0.4" stroke="url(#nav-diamond-glow)" strokeWidth="1"></path>
</g>

<circle cx="120" cy="30" fill="#0f172a" r="4.5" stroke="url(#nav-blade-grad)" strokeWidth="1.5"></circle>
<circle cx="120" cy="30" fill="#ffffff" opacity="0.9" r="1.5"></circle>

<path d="M 120 27 L 123 30 L 120 33 L 117 30 Z" fill="#ffffff" opacity="0.8"></path>
</svg>
<span className="text-2xl md:text-3xl font-semibold tracking-tighter uppercase hidden sm:block transition-all" style={{fontFamily: '\'Barlow\', sans-serif', backgroundImage: 'linear-gradient(180deg, #ffffff 0%, #9ca3af 30%, #374151 48%, #000000 50%, #4b5563 52%, #e5e7eb 75%, #ffffff 100%)', WebkitBackgroundClip: 'text', color: 'transparent', WebkitTextStroke: '0.5px rgba(255,255,255,0.2)'}}>
                    BLING CUTS
                </span>
</a>
<div className="hidden md:flex items-center gap-8 text-2xl font-thin text-zinc-400">
<a className="hover:text-zinc-50 transition-colors" href="#services">Services</a>
<a className="hover:text-zinc-50 transition-colors" href="#portfolio">Portfolio</a>
<a className="hover:text-zinc-50 transition-colors" href="#story">The Standard</a>
</div>
<div className="flex items-center gap-6">
<a className="hidden md:flex items-center gap-2 text-zinc-400 hover:text-zinc-50 transition-colors" href="tel:7189245804">
<iconify-icon className="w-6 h-6 text-xl" icon="solar:phone-linear"></iconify-icon>
</a>
<a className="relative group z-10 bg-zinc-100 text-zinc-950 font-medium px-5 py-2.5 rounded-full transition-all hover:scale-105 active:scale-95 text-sm md:text-base overflow-hidden" href="#book" style={{background: 'linear-gradient(110deg, #e4e4e7 25%, #ffffff 50%, #e4e4e7 75%)', backgroundSize: '200% auto', animation: 'shimmer 3s linear infinite'}}>
<div className="absolute inset-[-2px] rounded-full z-[-1] blur-[6px] opacity-70 group-hover:opacity-100 transition-opacity duration-300" style={{background: 'linear-gradient(110deg, transparent, rgba(255,255,255,0.9), transparent)', backgroundSize: '200% auto', animation: 'shimmer 3s linear infinite'}}></div>
<span className="relative z-10">Book Appointment</span>
</a>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden group/hero">
<div className="absolute inset-0 z-0 pointer-events-none overflow-hidden transition-all duration-[2000ms] ease-out">
<div className="absolute inset-0 opacity-[0.02] group-hover/hero:opacity-[0.08] transition-opacity duration-[3000ms] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0i四十IiBoZWlnaHQ9IjQwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0yMCAwIEw0MCAyMCBMMjAgNDAgTDAgMjAgWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3N2Zz4=')] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)] group-hover/hero:scale-105 transition-transform"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-[50vw] h-[50vw] bg-white/5 rounded-full blur-[100px] scale-75 group-hover/hero:scale-110 transition-transform duration-[3000ms] ease-out"></div>
</div>

<div className="absolute inset-0 flex items-center justify-center w-full pointer-events-none">
<div className="absolute top-[25%] left-[15%] w-4 h-4 bg-gradient-to-br from-white to-zinc-500 blur-[1px]" style={{animation: 'twinkle 4s ease-in-out infinite'}}></div>
<div className="absolute bottom-[35%] left-[25%] w-2 h-2 bg-white shadow-[0_0_15px_rgba(255,255,255,0.9)]" style={{animation: 'twinkle 3s ease-in-out infinite 1s'}}></div>
<div className="absolute top-[35%] right-[20%] w-3 h-3 bg-gradient-to-tr from-zinc-200 to-zinc-600 shadow-[0_0_10px_rgba(255,255,255,0.4)]" style={{animation: 'twinkle 5s ease-in-out infinite 2s'}}></div>
<div className="absolute bottom-[25%] right-[30%] w-1.5 h-1.5 bg-zinc-300 blur-[0.5px]" style={{animation: 'twinkle 3.5s ease-in-out infinite 0.5s'}}></div>
</div>
<div className="absolute bottom-0 inset-x-0 h-[30vh] bg-gradient-to-t from-zinc-950 to-transparent"></div>
</div>

<div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col items-center text-center" style={{animation: 'float 6s ease-in-out infinite'}}>
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 transition-opacity duration-1000">
<span className="w-2 h-2 rounded-full bg-zinc-300 animate-pulse"></span>
<span className="text-xl text-zinc-300 font-thin tracking-wide uppercase">Queens, New York</span>
</div>

<div className="relative w-full max-w-5xl mx-auto flex flex-col items-center justify-center py-6 z-10 group cursor-default mt-4">
<div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center mix-blend-screen opacity-50 group-hover:opacity-100 transition-opacity duration-1000">
<div className="w-3/4 h-32 bg-gradient-to-r from-transparent via-zinc-100/10 to-transparent blur-[50px]"></div>
</div>

<svg className="w-64 md:w-80 lg:w-96 mb-6 drop-shadow-[0_15px_25px_rgba(0,0,0,0.9)] z-20 transition-transform duration-[2000ms] group-hover:scale-105" viewbox="0 0 240 60" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient id="hero-handle-grad" x1="0%" x2="100%" y1="0%" y2="100%">

<stop offset="0%" stop-color="#022c15"></stop>
<stop offset="25%" stop-color="#059669"></stop>
<stop offset="45%" stop-color="#b45309"></stop>
<stop offset="55%" stop-color="#fbbf24"></stop>
<stop offset="75%" stop-color="#18181b"></stop>
<stop offset="100%" stop-color="#000000"></stop>
</lineargradient>
<lineargradient id="hero-blade-grad" x1="0%" x2="0%" y1="0%" y2="100%">

<stop offset="0%" stop-color="#ffffff"></stop>
<stop offset="40%" stop-color="#94a3b8"></stop>
<stop offset="48%" stop-color="#0f172a"></stop>
<stop offset="52%" stop-color="#334155"></stop>
<stop offset="70%" stop-color="#cbd5e1"></stop>
<stop offset="100%" stop-color="#ffffff"></stop>
</lineargradient>
<lineargradient id="hero-diamond-glow" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#ffffff" stop-opacity="0.8"></stop>
<stop offset="50%" stop-color="#fbbf24" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#ffffff" stop-opacity="0.8"></stop>
</lineargradient>
</defs>

<g>

<path d="M 125 33 L 20 12 L 15 18 L 115 30 Z" fill="url(#hero-blade-grad)"></path>
<path d="M 20 12 L 15 18 L 115 30" fill="none" opacity="0.8" stroke="#ffffff" strokeWidth="1"></path>

<path d="M 115 30 L 165 55 L 215 30 L 165 18 Z M 145 34 L 165 46 L 185 34 L 165 26 Z" fill="url(#hero-handle-grad)" fill-rule="evenodd"></path>

<path d="M 115 30 L 145 34 M 165 55 L 165 46 M 215 30 L 185 34 M 165 18 L 165 26" opacity="0.6" stroke="url(#hero-diamond-glow)" strokeWidth="0.75"></path>
<path d="M 115 30 L 165 55 L 215 30 L 165 18 Z" fill="none" opacity="0.4" stroke="url(#hero-diamond-glow)" strokeWidth="1"></path>
</g>

<g>

<path d="M 125 27 L 20 48 L 15 42 L 115 30 Z" fill="url(#hero-blade-grad)"></path>
<path d="M 20 48 L 15 42 L 115 30" fill="none" opacity="0.8" stroke="#ffffff" strokeWidth="1"></path>

<path d="M 115 30 L 165 5 L 215 30 L 165 42 Z M 145 26 L 165 14 L 185 26 L 165 34 Z" fill="url(#hero-handle-grad)" fill-rule="evenodd"></path>

<path d="M 115 30 L 145 26 M 165 5 L 165 14 M 215 30 L 185 26 M 165 42 L 165 34" opacity="0.6" stroke="url(#hero-diamond-glow)" strokeWidth="0.75"></path>
<path d="M 115 30 L 165 5 L 215 30 L 165 42 Z" fill="none" opacity="0.4" stroke="url(#hero-diamond-glow)" strokeWidth="1"></path>
</g>

<circle cx="120" cy="30" fill="#0f172a" r="4.5" stroke="url(#hero-blade-grad)" strokeWidth="1.5"></circle>
<circle cx="120" cy="30" fill="#ffffff" opacity="0.9" r="1.5"></circle>

<path d="M 120 27 L 123 30 L 120 33 L 117 30 Z" fill="#ffffff" opacity="0.8"></path>
</svg>
<div className="relative z-10 flex items-center justify-center">

<h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold tracking-tighter uppercase whitespace-nowrap px-4 py-4 transition-all duration-700" style="font-family: 'Barlow', sans-serif; 
                               background-image: linear-gradient(
                                   180deg,
                                   #ffffff 0%,
                                   #9ca3af 30%,
                                   #374151 48%,
                                   #000000 50%,
                                   #4b5563 52%,
                                   #e5e7eb 75%,
                                   #ffffff 100%
                               );
                               -webkit-background-clip: text;
                               color: transparent;
                               -webkit-text-stroke: 1px rgba(255,255,255,0.2);
                               filter: drop-shadow(0px 15px 20px rgba(0,0,0,0.9)) drop-shadow(0px 0px 30px rgba(255,255,255,0.1));">
                        BLING CUTS
                    </h1>
<div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20 overflow-hidden mix-blend-overlay">
<div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent rotate-[-3deg] scale-x-0 group-hover:scale-x-100 transition-transform duration-[1500ms] ease-out opacity-70"></div>
<div className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-zinc-200 to-transparent rotate-[-3deg] scale-x-0 group-hover:scale-x-100 transition-transform duration-[1500ms] ease-out opacity-30 blur-[2px] delay-75"></div>
</div>
</div>
</div>
<h2 className="text-3xl md:text-4xl font-thin tracking-tight transition-opacity duration-1000 mt-6 text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 via-white to-zinc-400">
                More Than a Cut. It's a Standard.
            </h2>
<p className="mt-8 text-4xl md:text-5xl text-zinc-400 font-thin max-w-3xl transition-opacity duration-1000 leading-relaxed tracking-tight">
                A premium barbershop experience rooted in culture, precision, and community. Elevate your presence with world-class grooming.
            </p>
<div className="mt-12 flex flex-col sm:flex-row items-center gap-6 transition-opacity duration-1000 w-full sm:w-auto">
<a className="relative group z-10 w-full sm:w-auto bg-zinc-100 text-zinc-950 font-medium px-8 py-3.5 rounded-full transition-all hover:scale-105 active:scale-95 text-base md:text-lg overflow-hidden" href="#book" style={{background: 'linear-gradient(110deg, #e4e4e7 25%, #ffffff 50%, #e4e4e7 75%)', backgroundSize: '200% auto', animation: 'shimmer 3s linear infinite'}}>
<div className="absolute inset-[-2px] rounded-full z-[-1] blur-[8px] opacity-70 group-hover:opacity-100 transition-opacity duration-300" style={{background: 'linear-gradient(110deg, transparent, rgba(255,255,255,0.9), transparent)', backgroundSize: '200% auto', animation: 'shimmer 3s linear infinite'}}></div>
<span className="relative z-10 flex items-center justify-center gap-2">
                        Book Your Session
                        <iconify-icon className="w-5 h-5 group-hover:translate-x-1 transition-transform text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</a>
<a className="w-full sm:w-auto border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 bg-transparent text-base md:text-lg font-medium px-8 py-3.5 rounded-full transition-all flex items-center justify-center gap-2" href="tel:7189245804">
                    Call (718) 924-5804
                </a>
</div>
</div>
</section>

<section className="py-32 relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:flex justify-between items-end">
<div>
<h2 className="text-4xl md:text-6xl font-thin tracking-tight mb-4">Grooming Services</h2>
<p className="text-3xl text-zinc-400 font-thin tracking-tight">Executed with absolute precision.</p>
</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="bg-zinc-900/40 backdrop-blur-md border border-white/5 p-10 rounded-2xl transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(245,158,11,0.15)] hover:border-amber-500/20 group relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon className="w-32 h-32 text-9xl" icon="solar:scissors-linear"></iconify-icon>
</div>
<div className="relative z-10">
<iconify-icon className="w-8 h-8 text-zinc-300 mb-6 text-3xl" icon="solar:scissors-linear"></iconify-icon>
<h3 className="text-3xl font-thin tracking-tight mb-3">Signature Haircut</h3>
<p className="text-3xl text-zinc-400 font-thin mb-8 tracking-tight">Tailored styling, precise length control, and structural balance for your specific head shape.</p>
<div className="text-base font-medium text-zinc-100 flex items-center justify-between">
<span>Book Session</span>
<iconify-icon className="w-5 h-5 group-hover:translate-x-1 transition-transform text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
<div className="bg-zinc-900/40 backdrop-blur-md border border-white/5 p-10 rounded-2xl transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(245,158,11,0.15)] hover:border-amber-500/20 group relative overflow-hidden">
<div className="relative z-10">
<iconify-icon className="w-8 h-8 text-zinc-300 mb-6 text-3xl" icon="solar:magic-stick-3-linear"></iconify-icon>
<h3 className="text-3xl font-thin tracking-tight mb-3">Precision Fade</h3>
<p className="text-3xl text-zinc-400 font-thin mb-8 tracking-tight">Seamless transitions and immaculate blending. Skin, shadow, or taper—executed flawlessly.</p>
<div className="text-base font-medium text-zinc-100 flex items-center justify-between">
<span>Book Session</span>
<iconify-icon className="w-5 h-5 group-hover:translate-x-1 transition-transform text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
<div className="bg-zinc-900/40 backdrop-blur-md border border-white/5 p-10 rounded-2xl transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(245,158,11,0.15)] hover:border-amber-500/20 group relative overflow-hidden">
<div className="relative z-10">
<iconify-icon className="w-8 h-8 text-zinc-300 mb-6 text-3xl" icon="solar:user-linear"></iconify-icon>
<h3 className="text-3xl font-thin tracking-tight mb-3">Beard Sculpting</h3>
<p className="text-3xl text-zinc-400 font-thin mb-8 tracking-tight">Hot towel preparation, straight razor outlining, and density management for a commanding look.</p>
<div className="text-base font-medium text-zinc-100 flex items-center justify-between">
<span>Book Session</span>
<iconify-icon className="w-5 h-5 group-hover:translate-x-1 transition-transform text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
<div className="bg-zinc-900/40 backdrop-blur-md border border-white/5 p-10 rounded-2xl transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(245,158,11,0.15)] hover:border-amber-500/20 group relative overflow-hidden">
<div className="relative z-10">
<iconify-icon className="w-8 h-8 text-zinc-300 mb-6 text-3xl" icon="solar:ruler-linear"></iconify-icon>
<h3 className="text-3xl font-thin tracking-tight mb-3">Crisp Shape-Up</h3>
<p className="text-3xl text-zinc-400 font-thin mb-8 tracking-tight">Sharp, geometric lines that frame the face and restore order to your appearance instantly.</p>
<div className="text-base font-medium text-zinc-100 flex items-center justify-between">
<span>Book Session</span>
<iconify-icon className="w-5 h-5 group-hover:translate-x-1 transition-transform text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
<div className="bg-zinc-900/40 backdrop-blur-md p-10 rounded-2xl transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(245,158,11,0.15)] hover:border-amber-500/20 group relative overflow-hidden md:col-span-2 lg:col-span-2 flex flex-col justify-center items-center text-center border border-dashed border-zinc-700">
<h3 className="text-3xl font-thin tracking-tight mb-3">Kids Cuts &amp; Enhancements</h3>
<p className="text-3xl text-zinc-400 font-thin mb-8 max-w-2xl tracking-tight">The same high-level standard applied to the next generation, plus optional enhancements for a flawless finish.</p>
<a className="text-base font-medium text-zinc-100 border-b border-zinc-700 hover:border-zinc-100 pb-1 transition-colors" href="#book">View full service menu</a>
</div>
</div>
</div>
</section>

<section className="py-32 relative border-t border-white/5 bg-zinc-950/80" id="portfolio">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-4xl md:text-6xl font-thin tracking-tight mb-4">The Portfolio</h2>
<p className="text-3xl text-zinc-400 font-thin tracking-tight">Our craft in focus.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
<div className="relative aspect-[4/5] rounded-2xl overflow-hidden group cursor-pointer bg-zinc-900 border border-white/5">
<img alt="A kid's haircut with line designs on the side" className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4185b2b1-ede0-4927-8e53-c207da842753_800w.png"/>
</div>
<div className="relative aspect-[4/5] rounded-2xl overflow-hidden group cursor-pointer bg-zinc-900 border border-white/5">
<img alt="A star pattern design shaved into the back of someone's head" className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fe691125-ed5f-4748-8dfb-656f787284ff_800w.png"/>
</div>
<div className="relative aspect-[4/5] rounded-2xl overflow-hidden group cursor-pointer bg-zinc-900 border border-white/5">
<img alt="A man's profile showing a clean beard lineup" className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ec1e2b57-7d9d-44e0-913f-246ed08c5604_800w.png"/>
</div>
<div className="relative aspect-[4/5] rounded-2xl overflow-hidden group cursor-pointer bg-zinc-900 border border-white/5">
<img alt="A close-up of braids/cornrows" className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5cc23293-f7ba-4a16-87da-f7d938379ec9_800w.png"/>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center gap-2 text-2xl text-zinc-400 hover:text-white transition-colors" href="#">
<iconify-icon className="w-5 h-5 text-xl" icon="solar:music-notes-linear"></iconify-icon>
                    Follow us on Instagram for daily cuts
                </a>
</div>
</div>
</section>

<section className="py-32 relative border-t border-white/5 bg-zinc-950/50" id="story">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-4xl md:text-6xl font-thin tracking-tight mb-8">Precision engineered.<br/>Culturally rooted.</h2>
<div className="space-y-6 text-3xl text-zinc-400 font-thin leading-relaxed tracking-tight">
<p>
                        Bling Cuts wasn't built to be just another location on the map. It was established as a standard-bearer for grooming in Queens. We treat every appointment as a defining moment in our clients' professional and personal lives.
                    </p>
<p>
                        Consistency isn't a buzzword here; it's the foundation. From the geometry of a fade to the atmosphere of the shop, every variable is controlled to deliver an uncompromising level of service.
                    </p>
</div>
<div className="mt-12 grid grid-cols-2 gap-6 pt-10 border-t border-white/5">
<div>
<div className="text-3xl font-thin tracking-tight text-zinc-100 mb-2">4.7<span className="text-zinc-500 text-2xl ml-1">★</span></div>
<div className="text-xl text-zinc-500 font-thin uppercase tracking-wide">Google Rating</div>
</div>
<div>
<div className="text-3xl font-thin tracking-tight text-zinc-100 mb-2">100%</div>
<div className="text-xl text-zinc-500 font-thin uppercase tracking-wide">Commitment</div>
</div>
</div>
</div>
<div className="relative h-[600px] rounded-3xl overflow-hidden bg-zinc-900 border border-white/10 group">
<img alt="Inside Bling Cuts" className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-[1500ms] z-0" src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent z-10"></div>
<div className="absolute bottom-8 left-8 right-8 bg-zinc-900/60 backdrop-blur-md border border-white/10 p-8 rounded-2xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500 z-20">
<iconify-icon className="w-9 h-9 text-zinc-300 mb-4 text-4xl" icon="solar:shield-check-linear"></iconify-icon>
<h3 className="text-2xl font-thin tracking-tight mb-3">The Architecture of a Cut</h3>
<p className="text-2xl text-zinc-400 font-thin">Meticulous attention to detail, symmetry, and form. Your image is an asset; we protect it.</p>
</div>
</div>
</div>
</section>

<section className="py-32 relative border-t border-white/5" id="culture" style={{background: 'radial-gradient(circle at top right, rgba(6, 78, 59, 0.08), transparent 50%)'}}>
<div className="max-w-7xl mx-auto px-6 text-center">
<iconify-icon className="w-12 h-12 text-zinc-500 mb-8 mx-auto text-5xl" icon="solar:music-notes-linear"></iconify-icon>
<h2 className="text-4xl md:text-6xl font-thin tracking-tight mb-8">The Energy. The Culture.</h2>
<p className="max-w-3xl mx-auto text-4xl text-zinc-400 font-thin leading-relaxed tracking-tight mb-12">
                Bling Cuts is a frequency. Influenced by the vibrant pulse of Jamaican heritage and the unrelenting drive of New York City. It’s where style meets substance, soundtracked by curated music and fueled by community ambition.
            </p>
<div className="flex flex-wrap justify-center gap-4">
<span className="px-6 py-3 rounded-full bg-zinc-900/40 backdrop-blur-md border border-green-500/30 text-green-400/90 text-2xl font-thin">Community First</span>
<span className="px-6 py-3 rounded-full bg-zinc-900/40 backdrop-blur-md border border-yellow-500/30 text-yellow-400/90 text-2xl font-thin">Cultural Roots</span>
<span className="px-6 py-3 rounded-full bg-zinc-900/40 backdrop-blur-md border border-red-500/30 text-red-400/90 text-2xl font-thin">Lifestyle Grooming</span>
</div>
</div>
</section>

<section className="py-32 relative border-t border-white/5 bg-zinc-950/80" id="founder">
<div className="absolute top-1/2 left-0 w-[40vw] h-[40vw] bg-zinc-800/10 rounded-full blur-[150px] -translate-y-1/2 pointer-events-none mix-blend-screen"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="relative h-[600px] lg:h-[800px] rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 group shadow-2xl block">
<img alt="Andre Omiuno - Visionary" className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-[1500ms] group-hover:scale-105 z-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d9fb7aaa-ae7c-4ce4-88d2-d1dc25fe4417_800w.jpg"/>
<div className="absolute bottom-6 left-6 z-20">
<div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-zinc-800 bg-black/90">
<span className="w-1.5 h-1.5 rounded-full bg-white"></span>
<span className="text-sm text-zinc-300 font-light tracking-widest uppercase mt-[1px]">Visionary</span>
</div>
</div>
</div>
<div className="relative z-10">
<h2 className="text-5xl md:text-6xl lg:text-7xl font-thin tracking-tight mb-4 text-zinc-100">Andre Omiuno</h2>
<h3 className="text-2xl md:text-3xl font-thin tracking-tight text-zinc-500 mb-10">Owner &amp; Entrepreneur</h3>
<div className="space-y-8 text-4xl text-zinc-400 font-thin leading-relaxed tracking-tight">
<p>
                        As the driving force behind Bling Cuts, Andre Omiuno has elevated the standard of grooming, transforming a simple haircut into a premium lifestyle experience. His vision was to build a space where uncompromised culture meets relentless precision.
                    </p>
<p>
                        Beyond the barber chair, Andre is a highly accomplished entrepreneur with a proven track record of scaling businesses. His strategic foresight has led to successful, high-yield ventures across the <strong className="font-thin text-zinc-200">Fintech</strong> and <strong className="font-thin text-zinc-200">ATM industries</strong>. 
                    </p>
<p>
                        Never one to remain static, he is currently pioneering new initiatives within the rapidly evolving <strong className="font-thin text-zinc-200">AI space</strong>, engineering solutions that bridge complex technology with everyday utility.
                    </p>
</div>
<div className="mt-14 flex flex-col sm:flex-row items-center gap-6">
<a className="w-full sm:w-auto bg-zinc-100 text-zinc-950 font-medium px-8 py-3.5 rounded-full transition-all flex items-center justify-center gap-3 text-base md:text-lg hover:bg-white" href="#meet-andre">
                        Meet Andre
                        <iconify-icon className="w-5 h-5 text-xl" icon="solar:calendar-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden border-t border-white/5" id="book">
<div className="absolute inset-0 bg-zinc-100"></div>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-200 via-zinc-100 to-zinc-100"></div>
<div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
<iconify-icon className="w-16 h-16 text-zinc-950 mb-10 mx-auto text-6xl" icon="solar:calendar-date-linear"></iconify-icon>
<h2 className="text-5xl md:text-7xl font-thin tracking-tight text-zinc-950 mb-8">Ready for your next clean cut?</h2>
<p className="text-4xl text-zinc-600 font-thin tracking-tight mb-12 max-w-2xl mx-auto">
                Secure your slot. Experience precision at a higher level. Walk-ins respected, appointments prioritized.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6">
<a className="relative group z-10 w-full sm:w-auto bg-zinc-900 text-white px-8 py-4 rounded-full transition-all text-lg md:text-xl overflow-hidden" href="#book" style={{background: 'linear-gradient(110deg, #18181b 25%, #3f3f46 50%, #18181b 75%)', backgroundSize: '200% auto', animation: 'shimmer 3s linear infinite'}}>
<div className="absolute inset-0 rounded-full z-[-1] blur-[8px] opacity-70 group-hover:opacity-100 transition-opacity duration-300" style={{background: 'linear-gradient(110deg, transparent, rgba(255,255,255,0.4), transparent)', backgroundSize: '200% auto', animation: 'shimmer 3s linear infinite'}}></div>
<span className="relative z-10 flex items-center justify-center gap-3 font-medium">
                        Book Appointment Now
                        <iconify-icon className="w-6 h-6 text-2xl" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</a>
<a className="w-full sm:w-auto bg-transparent border border-zinc-400 text-zinc-950 font-medium px-8 py-4 rounded-full hover:bg-zinc-200 transition-colors text-lg md:text-xl" href="tel:7189245804">
                    Call to Book
                </a>
</div>
</div>
</section>

<footer className="py-16 border-t border-white/5 bg-zinc-950">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
<div className="flex flex-col gap-1 text-zinc-100">
<div className="text-2xl font-semibold tracking-tighter" style={{fontFamily: '\'Barlow\', sans-serif'}}>BLING CUTS</div>
<div className="text-sm text-zinc-600 font-thin">The Standard.</div>
</div>
<div className="flex gap-8 text-2xl text-zinc-500 font-thin">
<a className="hover:text-zinc-300 transition-colors" href="#">Instagram</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Book</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Contact</a>
</div>
<div className="flex flex-col items-center md:items-end text-xl text-zinc-600 font-thin">
<p>© 2023 Bling Cuts LLC. All rights reserved.</p>
<p className="mt-2 flex items-center gap-2 opacity-50">
<iconify-icon className="w-4 h-4 text-base" icon="solar:bolt-linear"></iconify-icon> Powered by discipline.
                </p>
</div>
</div>
</footer>

    </>
  );
}
