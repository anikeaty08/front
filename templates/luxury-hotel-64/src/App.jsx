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



        document.addEventListener("DOMContentLoaded", () => {
            // Scroll Reveal Animation
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal-up').forEach((el) => {
                observer.observe(el);
            });

            // Navbar Background on Scroll
            const navbar = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar.classList.add('bg-neutral-950/80', 'border-white/10');
                    navbar.classList.remove('bg-neutral-950/50', 'border-white/5');
                } else {
                    navbar.classList.add('bg-neutral-950/50', 'border-white/5');
                    navbar.classList.remove('bg-neutral-950/80', 'border-white/10');
                }
            });

            // Parallax effect for Hero Image
            const heroBg = document.getElementById('hero-bg');
            window.addEventListener('scroll', () => {
                const scrolled = window.scrollY;
                if(scrolled < window.innerHeight) {
                    heroBg.style.transform = `translateY(${scrolled * 0.4}px) scale(1.05)`;
                }
            });

            // Custom Cursor Logic
            const cursor = document.getElementById('custom-cursor');
            const cursorDot = document.getElementById('custom-cursor-dot');
            
            // Only enable on non-touch devices
            if (window.matchMedia("(pointer: fine)").matches) {
                document.addEventListener('mousemove', (e) => {
                    // Slight delay for outer ring
                    setTimeout(() => {
                        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
                    }, 50);
                    // Immediate for dot
                    cursorDot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
                });

                // Hover effects for cursor
                const interactables = document.querySelectorAll('a, button, input, select, .group');
                interactables.forEach(el => {
                    el.addEventListener('mouseenter', () => {
                        cursor.classList.add('scale-150', 'bg-amber-500/10', 'border-amber-500');
                        cursor.classList.remove('border-amber-500/50', 'mix-blend-difference');
                    });
                    el.addEventListener('mouseleave', () => {
                        cursor.classList.remove('scale-150', 'bg-amber-500/10', 'border-amber-500');
                        cursor.classList.add('border-amber-500/50', 'mix-blend-difference');
                    });
                });
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
      

<div className="fixed top-0 left-0 w-4 h-4 border rounded-full pointer-events-none z-[100] transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2 hidden md:block" id="custom-cursor"></div>
<div className="fixed top-0 left-0 w-1 h-1 bg-amber-500 rounded-full pointer-events-none z-[100] transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2 hidden md:block" id="custom-cursor-dot"></div>

<nav className="fixed w-full top-0 z-50 transition-all duration-500 backdrop-blur-xl border-b" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="font-serif text-xl tracking-tighter text-white font-medium" href="#">AURELIA</a>
<div className="hidden md:flex items-center gap-6">
<a className="text-xs tracking-wider text-neutral-400 hover:text-white transition-colors duration-300 uppercase" href="#suites">Suites</a>
<a className="text-xs tracking-wider text-neutral-400 hover:text-white transition-colors duration-300 uppercase" href="#dining">Dining</a>
<a className="text-xs tracking-wider text-neutral-400 hover:text-white transition-colors duration-300 uppercase" href="#wellness">Wellness</a>
</div>
</div>
<div className="flex items-center gap-6">
<button className="hidden md:flex items-center gap-2 text-xs text-neutral-400 hover:text-white transition-colors duration-300 group">
<iconify-icon className="text-lg group-hover:text-amber-500 transition-colors" icon="solar:user-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Sign In</span>
</button>
<button className="bg-white text-neutral-950 px-5 py-2.5 rounded-full text-xs font-medium tracking-wide hover:bg-neutral-200 transition-all duration-300 hover:scale-105 active:scale-95">
                    RESERVE
                </button>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">

<div className="absolute inset-0 z-0">
<div className="bg-gradient-to-b from-neutral-950/60 via-neutral-950/40 to-neutral-950 z-10 absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Luxury Hotel Exterior" className="w-full h-full object-cover object-center scale-105" id="hero-bg" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-16 md:mt-0 flex flex-col items-center">
<span className="text-amber-500/80 text-xs tracking-[0.2em] uppercase mb-6 block reveal-up" style={{transitionDelay: '100ms'}}>Welcome to the extraordinary</span>
<h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-medium tracking-tight leading-[1.1] mb-8 reveal-up" style={{transitionDelay: '200ms'}}>
                Redefining the art<br/>of sanctuary.
            </h1>
<p className="text-sm md:text-base text-neutral-300 max-w-2xl mx-auto font-light leading-relaxed mb-16 reveal-up" style={{transitionDelay: '300ms'}}>
                Experience an enclave of quiet luxury where architectural brilliance meets intuitive service, designed for those who seek the exceptional.
            </p>

<div className="w-full max-w-4xl bg-neutral-950/60 backdrop-blur-2xl border border-white/10 rounded-2xl p-2 md:p-3 flex flex-col md:flex-row items-center gap-2 md:gap-4 reveal-up shadow-2xl shadow-black/50" style={{transitionDelay: '400ms'}}>
<div className="flex-1 w-full flex items-center gap-4 bg-white/5 hover:bg-white/10 transition-colors rounded-xl px-4 py-3 border border-white/5 relative group">
<iconify-icon className="text-neutral-400 group-focus-within:text-amber-500 transition-colors" icon="solar:calendar-linear"></iconify-icon>
<div className="flex flex-col w-full relative">
<label className="text-[0.65rem] text-neutral-500 uppercase tracking-wider mb-0.5">Check In</label>
<input className="bg-transparent text-sm text-white focus:outline-none w-full appearance-none font-medium" type="date" value="2023-11-15"/>
</div>
</div>
<div className="hidden md:block w-px h-8 bg-white/10"></div>
<div className="flex-1 w-full flex items-center gap-4 bg-white/5 hover:bg-white/10 transition-colors rounded-xl px-4 py-3 border border-white/5 relative group">
<iconify-icon className="text-neutral-400 group-focus-within:text-amber-500 transition-colors" icon="solar:calendar-linear"></iconify-icon>
<div className="flex flex-col w-full relative">
<label className="text-[0.65rem] text-neutral-500 uppercase tracking-wider mb-0.5">Check Out</label>
<input className="bg-transparent text-sm text-white focus:outline-none w-full appearance-none font-medium" type="date" value="2023-11-20"/>
</div>
</div>
<div className="hidden md:block w-px h-8 bg-white/10"></div>
<div className="flex-1 w-full flex items-center gap-4 bg-white/5 hover:bg-white/10 transition-colors rounded-xl px-4 py-3 border border-white/5 relative group">
<iconify-icon className="text-neutral-400 group-focus-within:text-amber-500 transition-colors" icon="solar:users-group-rounded-linear"></iconify-icon>
<div className="flex flex-col w-full">
<label className="text-[0.65rem] text-neutral-500 uppercase tracking-wider mb-0.5">Guests</label>
<select className="bg-transparent text-sm text-white focus:outline-none w-full appearance-none font-medium cursor-none">
<option className="bg-neutral-900" value="1">1 Guest</option>
<option className="bg-neutral-900" selected="" value="2">2 Guests</option>
<option className="bg-neutral-900" value="3">3 Guests</option>
<option className="bg-neutral-900" value="4">4 Guests</option>
</select>
</div>
<iconify-icon className="text-neutral-500 text-xs absolute right-4 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<button className="w-full md:w-auto bg-amber-600 hover:bg-amber-500 text-white px-8 py-4 rounded-xl text-sm font-medium tracking-wide transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-amber-900/20">
<span>Check Availability</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 reveal-up" style={{transitionDelay: '500ms'}}>
<span className="text-[0.65rem] uppercase tracking-widest">Scroll</span>
<div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
</div>
</section>

<section className="py-32 px-6 max-w-7xl mx-auto relative">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
<div className="reveal-up">
<div className="flex items-center gap-4 mb-8">
<div className="w-12 h-px bg-amber-500/50"></div>
<span className="text-amber-500 text-xs tracking-widest uppercase font-medium">The Experience</span>
</div>
<h2 className="font-serif text-4xl md:text-5xl text-white font-medium tracking-tight mb-8 leading-tight">
                    Where time slows down, and luxury takes over.
                </h2>
<p className="text-neutral-400 text-sm md:text-base font-light leading-relaxed mb-6">
                    Nestled between sheer cliffs and the azure sea, Aurelia offers an escape from the ordinary. Every detail, from the bespoke furnishings to the curated art pieces, is thoughtfully designed to harmonize with the natural surroundings.
                </p>
<p className="text-neutral-400 text-sm md:text-base font-light leading-relaxed mb-10">
                    Our commitment is to provide discrete, intuitive service, ensuring that your stay is not just memorable, but truly transformative.
                </p>
<a className="inline-flex items-center gap-3 text-sm text-white font-medium group pb-2 border-b border-white/20 hover:border-amber-500 transition-colors" href="#">
                    Discover Our Story
                    <iconify-icon className="text-neutral-400 group-hover:text-amber-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
<div className="relative grid grid-cols-2 gap-4 lg:gap-6 reveal-up">
<img alt="Interior Details" className="rounded-2xl w-full h-64 md:h-80 object-cover mt-12 md:mt-24 shadow-2xl shadow-black/50" src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<img alt="Spa Experience" className="rounded-2xl w-full h-80 md:h-96 object-cover shadow-2xl shadow-black/50" src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-tr from-amber-500/5 to-transparent rounded-2xl pointer-events-none mix-blend-overlay"></div>
</div>
</div>
</section>

<section className="border-y overflow-hidden bg-neutral-900 border-white/5 pt-32 pb-32 relative" id="suites">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-900/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 reveal-up">
<div>
<span className="text-amber-500 text-xs tracking-widest uppercase font-medium mb-4 block">Accommodations</span>
<h2 className="font-serif text-4xl md:text-5xl text-white font-medium tracking-tight">Curated Sanctuaries</h2>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/30 transition-all group">
<iconify-icon className="group-hover:-translate-x-0.5 transition-transform" icon="solar:alt-arrow-left-linear"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/30 transition-all group">
<iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

<div className="group relative bg-neutral-950 rounded-2xl overflow-hidden border border-white/5 hover:border-amber-500/30 transition-colors duration-500 reveal-up">
<div className="relative h-64 md:h-72 overflow-hidden">
<img alt="Ocean View Suite" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent"></div>
</div>
<div className="p-6 md:p-8 relative">
<div className="flex justify-between items-start mb-4">
<h3 className="font-serif text-xl text-white font-medium tracking-tight">Ocean View Suite</h3>
<span className="text-sm font-medium text-white">$1,200<span className="text-xs text-neutral-500 font-light">/night</span></span>
</div>
<p className="text-sm text-neutral-400 font-light mb-6 line-clamp-2">Expansive views of the horizon combined with deep soaking tubs and a private terrace.</p>
<div className="flex items-center gap-4 border-t border-white/5 pt-4">
<div className="flex items-center gap-1.5 text-xs text-neutral-400">
<iconify-icon icon="solar:ruler-linear"></iconify-icon> 850 sq ft
                            </div>
<div className="w-px h-3 bg-white/10"></div>
<div className="flex items-center gap-1.5 text-xs text-neutral-400">
<iconify-icon icon="solar:bed-linear"></iconify-icon> King Bed
                            </div>
</div>

<div className="absolute inset-x-0 bottom-0 p-6 md:p-8 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-neutral-950/95 backdrop-blur-sm flex items-center justify-between border-t border-amber-500/20">
<span className="text-sm text-white font-medium">Explore Suite</span>
<iconify-icon className="text-amber-500" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>

<div className="group relative bg-neutral-950 rounded-2xl overflow-hidden border border-white/5 hover:border-amber-500/30 transition-colors duration-500 reveal-up" style={{transitionDelay: '100ms'}}>
<div className="relative h-64 md:h-72 overflow-hidden">
<img alt="The Penthouse" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent"></div>
</div>
<div className="p-6 md:p-8 relative">
<div className="flex justify-between items-start mb-4">
<h3 className="font-serif text-xl text-white font-medium tracking-tight">The Penthouse</h3>
<span className="text-sm font-medium text-white">$4,500<span className="text-xs text-neutral-500 font-light">/night</span></span>
</div>
<p className="text-sm text-neutral-400 font-light mb-6 line-clamp-2">The pinnacle of luxury featuring a private infinity pool, dedicated butler, and panoramic vistas.</p>
<div className="flex items-center gap-4 border-t border-white/5 pt-4">
<div className="flex items-center gap-1.5 text-xs text-neutral-400">
<iconify-icon icon="solar:ruler-linear"></iconify-icon> 2,400 sq ft
                            </div>
<div className="w-px h-3 bg-white/10"></div>
<div className="flex items-center gap-1.5 text-xs text-neutral-400">
<iconify-icon icon="solar:bed-linear"></iconify-icon> 2 King Beds
                            </div>
</div>
<div className="absolute inset-x-0 bottom-0 p-6 md:p-8 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-neutral-950/95 backdrop-blur-sm flex items-center justify-between border-t border-amber-500/20">
<span className="text-sm text-white font-medium">Explore Suite</span>
<iconify-icon className="text-amber-500" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>

<div className="group relative bg-neutral-950 rounded-2xl overflow-hidden border border-white/5 hover:border-amber-500/30 transition-colors duration-500 reveal-up" style={{transitionDelay: '200ms'}}>
<div className="relative h-64 md:h-72 overflow-hidden">
<img alt="Garden Pavilion" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent"></div>
</div>
<div className="p-6 md:p-8 relative">
<div className="flex justify-between items-start mb-4">
<h3 className="font-serif text-xl text-white font-medium tracking-tight">Garden Pavilion</h3>
<span className="text-sm font-medium text-white">$850<span className="text-xs text-neutral-500 font-light">/night</span></span>
</div>
<p className="text-sm text-neutral-400 font-light mb-6 line-clamp-2">Immersed in lush flora, offering complete privacy with an outdoor rain shower and fire pit.</p>
<div className="flex items-center gap-4 border-t border-white/5 pt-4">
<div className="flex items-center gap-1.5 text-xs text-neutral-400">
<iconify-icon icon="solar:ruler-linear"></iconify-icon> 650 sq ft
                            </div>
<div className="w-px h-3 bg-white/10"></div>
<div className="flex items-center gap-1.5 text-xs text-neutral-400">
<iconify-icon icon="solar:bed-linear"></iconify-icon> Queen Bed
                            </div>
</div>
<div className="absolute inset-x-0 bottom-0 p-6 md:p-8 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-neutral-950/95 backdrop-blur-sm flex items-center justify-between border-t border-amber-500/20">
<span className="text-sm text-white font-medium">Explore Suite</span>
<iconify-icon className="text-amber-500" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="mt-16 text-center reveal-up">
<button className="inline-flex items-center justify-center border border-white/20 hover:border-amber-500 hover:bg-amber-500/5 text-white px-8 py-3.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300">
                    VIEW ALL ACCOMMODATIONS
                </button>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-2 min-h-screen border-b border-white/5" id="dining">

<div className="relative group overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Fine Dining" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-neutral-950/70 group-hover:bg-neutral-950/50 transition-colors duration-700"></div>
</div>
<div className="relative z-10 h-full flex flex-col justify-center items-center text-center p-12 md:p-24 reveal-up">
<span className="text-amber-500 text-xs tracking-widest uppercase font-medium mb-4">Gastronomy</span>
<h2 className="font-serif text-4xl md:text-5xl text-white font-medium tracking-tight mb-6">Culinary Excellence</h2>
<p className="text-neutral-300 text-sm font-light max-w-md mx-auto mb-10">Michelin-starred techniques meet locally sourced ingredients to create unforgettable dining experiences under the stars.</p>
<a className="inline-flex items-center gap-2 text-xs text-white uppercase tracking-wider font-medium group-hover:text-amber-500 transition-colors border-b border-transparent group-hover:border-amber-500 pb-1" href="#">
                    Explore Dining <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="relative group overflow-hidden" id="wellness">
<div className="absolute inset-0 z-0">
<img alt="Spa Wellness" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-neutral-950/70 group-hover:bg-neutral-950/50 transition-colors duration-700"></div>
</div>
<div className="relative z-10 h-full flex flex-col justify-center items-center text-center p-12 md:p-24 reveal-up" style={{transitionDelay: '200ms'}}>
<span className="text-amber-500 text-xs tracking-widest uppercase font-medium mb-4">Rejuvenation</span>
<h2 className="font-serif text-4xl md:text-5xl text-white font-medium tracking-tight mb-6">The Sanctuary Spa</h2>
<p className="text-neutral-300 text-sm font-light max-w-md mx-auto mb-10">Ancient healing traditions combined with modern wellness practices in an environment of absolute tranquility.</p>
<a className="inline-flex items-center gap-2 text-xs text-white uppercase tracking-wider font-medium group-hover:text-amber-500 transition-colors border-b border-transparent group-hover:border-amber-500 pb-1" href="#">
                    View Treatments <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<footer className="bg-neutral-950 pt-24 pb-12 px-6 border-t border-white/5 relative overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[20vw] text-white/[0.02] font-medium tracking-tighter whitespace-nowrap pointer-events-none select-none">AURELIA</div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
<div className="lg:col-span-1">
<a className="font-serif text-2xl tracking-tighter text-white font-medium block mb-6" href="#">AURELIA</a>
<p className="text-neutral-500 text-xs font-light leading-relaxed max-w-xs">
                        A premium sanctuary redefining luxury hospitality through design, privacy, and impeccable service.
                    </p>
</div>
<div className="">
<h4 className="text-white text-sm font-medium tracking-wide mb-6">Resort</h4>
<ul className="space-y-4">
<li><a className="text-neutral-500 text-sm hover:text-amber-500 transition-colors" href="#">Accommodations</a></li>
<li className=""><a className="text-neutral-500 text-sm hover:text-amber-500 transition-colors" href="#">Dining &amp; Bars</a></li>
<li><a className="text-neutral-500 text-sm hover:text-amber-500 transition-colors" href="#">Spa &amp; Wellness</a></li>
<li><a className="text-neutral-500 text-sm hover:text-amber-500 transition-colors" href="#">Experiences</a></li>
</ul>
</div>
<div className="">
<h4 className="text-white text-sm font-medium tracking-wide mb-6">Support</h4>
<ul className="space-y-4">
<li className=""><a className="text-neutral-500 text-sm hover:text-amber-500 transition-colors" href="#">Contact Us</a></li>
<li className=""><a className="text-neutral-500 text-sm hover:text-amber-500 transition-colors" href="#">FAQ</a></li>
<li className=""><a className="text-neutral-500 text-sm hover:text-amber-500 transition-colors" href="#">Location &amp; Transport</a></li>
<li className=""><a className="text-neutral-500 text-sm hover:text-amber-500 transition-colors" href="#">Guest Portal</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium tracking-wide mb-6">Newsletter</h4>
<p className="text-neutral-500 text-xs font-light mb-4">Subscribe for exclusive offers and stories.</p>
<div className="relative">
<input className="w-full bg-transparent border-b border-white/20 pb-2 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors placeholder:text-neutral-600" placeholder="Email Address" type="email"/>
<button className="absolute right-0 top-0 text-neutral-400 hover:text-amber-500 transition-colors">
<iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 gap-4">
<p className="text-neutral-600 text-xs font-light">© 2023 Aurelia Hotels &amp; Resorts. All rights reserved.</p>
<div className="flex items-center gap-6">
<a className="text-neutral-600 text-xs hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="text-neutral-600 text-xs hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
