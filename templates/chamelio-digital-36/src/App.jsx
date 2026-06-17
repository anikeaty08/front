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



        lucide.createIcons();

        // Mobile Menu
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenuClose = document.getElementById('mobile-menu-close');
        const mobileMenu = document.getElementById('mobile-menu');

        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('open');
            document.body.style.overflow = 'hidden';
        });

        mobileMenuClose.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
            document.body.style.overflow = '';
        });

        // Close menu when clicking links
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('open');
                document.body.style.overflow = '';
            });
        });

        // Navbar Logic
        let lastScroll = 0;
        const navbar = document.getElementById('navbar');

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll <= 10) {
                navbar.classList.remove('nav-hidden');
                navbar.classList.remove('nav-scrolled');
            } else if (currentScroll > lastScroll && currentScroll > 100) {
                navbar.classList.add('nav-hidden');
                navbar.classList.remove('nav-scrolled');
            } else {
                navbar.classList.remove('nav-hidden');
                navbar.classList.add('nav-scrolled');
            }
            lastScroll = currentScroll;
        });

        // Intersection Observer for Reveal
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const revealElements = entry.target.querySelectorAll('.reveal-element');
                    revealElements.forEach(el => el.classList.add('active'));
                }
            });
        }, observerOptions);

        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
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
      

<nav className="fixed top-0 left-0 w-full z-[100] px-4 sm:px-6 md:px-12 py-4 md:py-6 flex justify-between items-center transition-all duration-300" id="navbar">
<div className="flex items-center gap-2">
<span className="font-serif text-xl md:text-2xl font-medium tracking-tight text-brown-900 font-bricolage">Chamelio</span>
</div>
<div className="hidden lg:flex items-center gap-8 text-sm font-medium text-stone-600">
<div className="flex gap-6">
<a className="hover:text-black transition-colors font-roboto" href="#problem-section">The Diagnosis</a>
<a className="hover:text-black transition-colors font-roboto" href="#cost-section">The Cost</a>
<a className="hover:text-black transition-colors font-roboto" href="#story-section">The Story</a>
<a className="hover:text-black transition-colors font-roboto" href="#vision-section">The Transformation</a>
</div>
</div>
<div className="flex items-center gap-3">
<a className="hidden sm:flex bg-stone-900 hover:bg-stone-700 text-white text-xs md:text-sm px-4 md:px-6 py-2 md:py-2.5 rounded-full transition-all items-center gap-2 font-medium shadow-sm hover:shadow-md font-roboto" href="#">
                Audit My Leaks
            </a>

<button className="lg:hidden p-2 text-stone-700 hover:text-stone-900" id="mobile-menu-btn">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="3" x2="21" y1="6" y2="6"></line><line x1="3" x2="21" y1="12" y2="12"></line><line x1="3" x2="21" y1="18" y2="18"></line></svg>
</button>
</div>
</nav>

<div className="mobile-menu fixed inset-0 z-[150] bg-[#f6f3eb]" id="mobile-menu">
<div className="flex flex-col h-full p-6">
<div className="flex justify-between items-center mb-12">
<span className="font-serif text-xl font-medium tracking-tight text-brown-900 font-bricolage">Chamelio</span>
<button className="p-2 text-stone-700 hover:text-stone-900" id="mobile-menu-close">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="18" x2="6" y1="6" y2="18"></line><line x1="6" x2="18" y1="6" y2="18"></line></svg>
</button>
</div>
<div className="flex flex-col gap-6 text-2xl font-medium text-stone-800">
<a className="hover:text-stone-600 transition-colors font-roboto py-2 border-b border-stone-200" href="#problem-section">The Diagnosis</a>
<a className="hover:text-stone-600 transition-colors font-roboto py-2 border-b border-stone-200" href="#cost-section">The Cost</a>
<a className="hover:text-stone-600 transition-colors font-roboto py-2 border-b border-stone-200" href="#story-section">The Story</a>
<a className="hover:text-stone-600 transition-colors font-roboto py-2 border-b border-stone-200" href="#vision-section">The Transformation</a>
</div>
<div className="mt-auto">
<a className="w-full block text-center bg-stone-900 hover:bg-stone-700 text-white text-base px-6 py-4 rounded-full transition-all font-medium shadow-sm hover:shadow-md font-roboto" href="#">
                    Audit My Leaks
                </a>
</div>
</div>
</div>

<header className="min-h-[100vh] flex flex-col overflow-hidden sticky sm:px-6 md:pb-20 z-0 pr-4 pb-12 pl-4 relative top-0 items-center justify-center">
<style className="">
            @keyframes marquee-right {
                0% { transform: translateX(-50%); }
                100% { transform: translateX(0%); }
            }
            .animate-marquee-right {
                animation: marquee-right 60s linear infinite;
            }
            .animate-marquee-right:hover {
                animation-play-state: paused;
            }
        </style>

<div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
<div className="absolute top-[-10%] left-[5%] md:left-[10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#e8d5b5] rounded-full mix-blend-multiply filter blur-[60px] md:blur-[80px] opacity-70 blob"></div>
<div className="absolute top-[-10%] right-[5%] md:right-[10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#f2e6d6] rounded-full mix-blend-multiply filter blur-[60px] md:blur-[80px] opacity-70 blob delay-1"></div>
<div className="absolute top-[20%] left-[20%] md:left-[30%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#f9e9cf] rounded-full mix-blend-multiply filter blur-[80px] md:blur-[100px] opacity-60 blob delay-2"></div>
</div>

<div className="hidden xl:block absolute top-[58%] left-[10%] bg-white p-4 rounded-xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] border border-stone-100 rotate-[-3deg] hover:rotate-0 transition-transform duration-500 z-20 max-w-[220px] widget-float-1">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-700">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<span className="text-xs font-bold text-stone-500 uppercase tracking-wider font-roboto">Time Reclaimed</span>
</div>
<p className="text-3xl text-stone-800 font-serif font-bricolage">5+ Hours</p>
<div className="mt-2 text-[10px] text-stone-400 font-medium flex items-center gap-1 font-roboto">
<svg className="w-3 h-3 text-green-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg> Per week, every week
            </div>
</div>
<div className="hidden xl:block bg-white max-w-[240px] border-stone-100 border rounded-xl p-4 absolute top-[55%] right-[10%] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] rotate-[3deg] hover:rotate-0 transition-transform duration-500 z-20 widget-float-2">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-700">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<span className="text-xs font-bold text-stone-500 uppercase tracking-wider font-roboto">Trust Signal</span>
</div>
<p className="text-3xl text-stone-800 font-serif font-bricolage">High Vibe</p>
<div className="mt-2 flex justify-between items-center bg-stone-50 rounded p-1.5">
<span className="text-[10px] text-stone-500 font-roboto">Booking Flow</span>
<span className="text-[10px] font-bold bg-yellow-accent px-1.5 py-0.5 rounded text-stone-900 font-roboto">Aligned</span>
</div>
</div>
<div className="z-20 text-center max-w-5xl mt-20 md:mt-12 mx-auto relative px-2">
<h1 className="sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-brown-900 leading-[1.1] md:leading-[1.05] md:mb-8 text-3xl font-normal tracking-tight font-serif mb-6">You Transform Lives. <span className="italic text-sky-600 font-bricolage">We Transform Your Digital Flow.</span></h1>
<p className="sm:text-lg md:text-xl leading-relaxed md:mb-12 text-base font-normal text-stone-700 font-roboto max-w-3xl mr-auto mb-8 ml-auto">Stop losing bookings to the Trust Leak and energy to the Time Leak. We build the "Digital Flow" that matches your vibration and automates your logistics—so you can get back to holding space.</p>

<div className="flex xl:hidden justify-center gap-3 sm:gap-4 mb-8 md:mb-12">
<div className="bg-white/90 backdrop-blur-sm px-4 py-3 sm:px-5 sm:py-4 rounded-xl shadow-md border border-stone-100 flex-1 max-w-[160px] sm:max-w-[180px]">
<div className="flex items-center gap-2 mb-1">
<div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-100 rounded-full flex items-center justify-center text-green-700">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<span className="text-[9px] sm:text-[10px] font-bold text-stone-500 uppercase tracking-wider font-roboto">Time</span>
</div>
<p className="text-xl sm:text-2xl text-stone-800 font-serif font-bricolage">Saved</p>
<p className="text-[9px] sm:text-[10px] text-stone-400 font-roboto">Automated Logistics</p>
</div>
<div className="bg-white/90 backdrop-blur-sm px-4 py-3 sm:px-5 sm:py-4 rounded-xl shadow-md border border-stone-100 flex-1 max-w-[160px] sm:max-w-[180px]">
<div className="flex items-center gap-2 mb-1">
<div className="w-5 h-5 sm:w-6 sm:h-6 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-700">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<span className="text-[9px] sm:text-[10px] font-bold text-stone-500 uppercase tracking-wider font-roboto">Trust</span>
</div>
<p className="text-xl sm:text-2xl text-stone-800 font-serif font-bricolage">Built</p>
<p className="text-[9px] sm:text-[10px] text-stone-400 font-roboto">Aligned Bookings</p>
</div>
</div>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mb-12 md:mb-16">
<a className="w-full sm:w-auto hover:bg-[#eebb2d] transition-all hover:shadow-lg flex items-center justify-center gap-2 text-sm md:text-base font-medium text-zinc-50 bg-slate-950 rounded-full py-3.5 px-6 md:px-8 shadow-md font-roboto" href="#">Audit My Leaks &amp; Fix the Flow</a>
<a className="text-stone-900 font-medium hover:text-stone-600 border-b border-stone-900/30 hover:border-stone-600 transition-colors pb-0.5 font-roboto text-sm md:text-base" href="#problem-section">
                    See how it works
                </a>
</div>
</div>

<div className="w-full max-w-[1400px] z-20 border-stone-200/40 border-t mt-6 md:mt-10 pt-6 md:pt-10 relative">
<div className="text-center mb-6 md:mb-8 opacity-60">
<p className="text-[9px] md:text-[10px] font-semibold uppercase tracking-widest text-stone-500 font-roboto">Trusted By Visionary Hosts</p>
</div>

<div className="absolute bottom-0 left-0 top-10 w-12 md:w-40 bg-gradient-to-r from-[#f6f3eb] to-transparent z-20 pointer-events-none"></div>
<div className="absolute bottom-0 right-0 top-10 w-12 md:w-40 bg-gradient-to-l from-[#f6f3eb] to-transparent z-20 pointer-events-none"></div>

<div className="overflow-hidden flex w-full">
<div className="flex gap-8 md:gap-16 lg:gap-32 items-center whitespace-nowrap animate-marquee-right min-w-full px-4 md:px-16">

<div className="flex items-center gap-2 md:gap-3 opacity-40 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300">
<div className="w-6 h-6 md:w-8 md:h-8 rounded bg-stone-800 flex items-center justify-center text-white">
<svg className="md:w-4 md:h-4" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<span className="font-bold text-base md:text-xl text-stone-800 font-bricolage tracking-tight">Inlumine</span>
</div>
<div className="flex items-center gap-2 md:gap-3 opacity-40 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-stone-800 flex items-center justify-center text-stone-800">
<span className="font-serif font-bold italic text-sm md:text-base">k</span>
</div>
<span className="font-bold text-base md:text-xl text-stone-800 font-bricolage tracking-tight">kalart</span>
</div>
<div className="flex items-center gap-2 md:gap-3 opacity-40 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300">
<div className="w-6 h-6 md:w-8 md:h-8 rounded bg-stone-800 flex items-center justify-center text-white">
<svg className="md:w-4 md:h-4" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 1 0 0-8c-2 0-4 1.33-6 4Z"></path></svg>
</div>
<span className="font-bold text-base md:text-xl text-stone-800 font-bricolage tracking-tight">Anima Vinctum</span>
</div>
<div className="flex items-center gap-2 md:gap-3 opacity-40 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-stone-300 flex items-center justify-center text-stone-800">
<svg className="md:w-4 md:h-4" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M13.73 4a2 2 0 0 0-3.46 0l-8 15.2A2 2 0 0 0 4 22h16a2 2 0 0 0 1.73-2.8Z"></path></svg>
</div>
<span className="font-bold text-base md:text-xl text-stone-800 font-bricolage tracking-tight">Vertex Space</span>
</div>

<div className="flex items-center gap-2 md:gap-3 opacity-40 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300">
<div className="w-6 h-6 md:w-8 md:h-8 rounded bg-stone-800 flex items-center justify-center text-white">
<svg className="md:w-4 md:h-4" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<span className="font-bold text-base md:text-xl text-stone-800 font-bricolage tracking-tight">Inlumine</span>
</div>
<div className="flex items-center gap-2 md:gap-3 opacity-40 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-stone-800 flex items-center justify-center text-stone-800">
<span className="font-serif font-bold italic text-sm md:text-base">k</span>
</div>
<span className="font-bold text-base md:text-xl text-stone-800 font-bricolage tracking-tight">kalart</span>
</div>
</div>
</div>
</div>
</header>

<section className="min-h-[80vh] md:min-h-[90vh] flex flex-col overflow-hidden py-20 md:py-32 w-full px-4 sm:px-6 relative items-center justify-center rounded-t-[2rem] md:rounded-t-[3rem] -mt-8 z-10 shadow-[0_-20px_50px_rgba(0,0,0,0.2)]" id="problem-section">

<div className="z-0 bg-gradient-to-br from-[#2b2620] via-[#3a3228] to-[#1a1816] absolute inset-0"></div>
<div className="opacity-10 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/noise.png')] absolute top-0 right-0 bottom-0 left-0"></div>
<div className="z-20 md:px-6 w-full max-w-7xl mr-auto ml-auto pr-2 pl-2">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-24 gap-x-12 gap-y-12 items-center">

<div className="order-2 lg:order-1 relative">
<div className="reveal-element active">
<div className="inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6 md:mb-8 shadow-lg">
<div className="w-1.5 h-1.5 rounded-full bg-red-400 mr-2 shadow-[0_0_10px_rgba(248,113,113,0.5)]"></div>
<span className="text-[9px] md:text-[10px] uppercase font-bold tracking-widest text-red-100/90 font-roboto">The Diagnosis</span>
</div>
</div>
<h2 className="reveal-element reveal-stagger-1 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] active text-[#f6f3eb] tracking-tight font-serif mb-6 drop-shadow-2xl font-bricolage text-left">
                        Is Your "Digital Container" <span className="italic text-white/50 font-bricolage">Leaking?</span>
</h2>
<p className="reveal-element reveal-stagger-2 text-base md:text-lg text-stone-300/80 leading-relaxed font-light drop-shadow-md mb-8 active font-roboto text-left">
                        You didn’t start this business to become a glorified admin assistant. You started it to facilitate transformation. Yet, there is a painful gap between the magic you deliver in person and the chaos you manage behind the scenes.
                    </p>
</div>

<div className="order-1 lg:order-2 relative reveal-element reveal-stagger-3 active">
<div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 group">

<img alt="The Leak Anatomy" className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700 mix-blend-overlay" src="https://images.unsplash.com/photo-1518385012351-b85559dc0d51?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="bg-center bg-gradient-to-t from-[#1a1816] via-[#1a1816]/30 to-transparent bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1b6479ac-2141-4abb-8f26-747150f27c1a_1600w.jpg)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>

</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-40 lg:py-48 px-4 sm:px-6 md:px-12 overflow-hidden -mt-8 bg-[#e8e6e1] z-20 rounded-t-[2rem] md:rounded-t-[3rem] relative shadow-[0_-20px_50px_rgba(0,0,0,0.1)]" id="cost-section">
<div className="reveal-on-scroll max-w-7xl z-10 mx-auto relative">
<div className="text-center mb-16 md:mb-24">
<h2 className="text-3xl sm:text-4xl md:text-5xl text-brown-900 leading-tight tracking-tight font-serif mb-4 md:mb-6 font-bricolage">
                    Why "Pouring More Water" Won't Work
                </h2>
<p className="text-base md:text-lg font-light text-stone-600 max-w-3xl mx-auto font-roboto">Most founders try to fix these leaks by pouring more water (Marketing &amp; Traffic) into the bowl. But as the illustration shows, you cannot fill a broken vessel.</p>
</div>
<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto">
<div className="bg-[#f6f3eb] p-6 md:p-8 rounded-xl md:rounded-2xl border border-stone-200/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
<div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-orange-100/50 flex items-center justify-center mb-4 md:mb-6 text-orange-700">
<svg className="md:w-6 md:h-6" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="2" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
</div>
<h3 className="text-brown-900 font-serif text-xl md:text-2xl mb-2 md:mb-3 font-medium font-bricolage">Financial Cost</h3>
<p className="leading-relaxed text-sm font-light text-stone-600 font-roboto">More traffic just means more water splashing out the "Trust Crack."</p>
</div>
<div className="bg-[#f6f3eb] p-6 md:p-8 rounded-xl md:rounded-2xl border border-stone-200/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
<div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-red-100/50 flex items-center justify-center mb-4 md:mb-6 text-red-800">
<svg className="md:w-6 md:h-6" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" x2="12" y1="2" y2="12"></line></svg>
</div>
<h3 className="text-brown-900 font-serif text-xl md:text-2xl mb-2 md:mb-3 font-medium font-bricolage">Energetic Cost</h3>
<p className="leading-relaxed text-sm font-light text-stone-600 font-roboto">More inquiries just increase the pressure on your "Straining Hands."</p>
</div>
<div className="bg-[#f6f3eb] p-6 md:p-8 rounded-xl md:rounded-2xl border border-stone-200/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 sm:col-span-2 md:col-span-1">
<div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-stone-200/50 flex items-center justify-center mb-4 md:mb-6 text-stone-600">
<svg className="md:w-6 md:h-6" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2h4"></path><path d="M12 14v-4"></path><path d="M4 13a8 8 0 0 1 8-7 8 8 0 1 1-4.5 2.1"></path></svg>
</div>
<h3 className="text-brown-900 font-serif text-xl md:text-2xl mb-2 md:mb-3 font-medium font-bricolage">The Truth</h3>
<p className="leading-relaxed text-sm font-light text-stone-600 font-roboto">You cannot scale your impact if your operational bucket has holes. You don't need more leads; you need a new container.</p>
</div>
</div>
</div>
</section>

<section className="-mt-8 px-4 sm:px-6 md:px-12 pt-28 md:pt-40 lg:pt-48 text-[#f6f3eb] bg-[#26231d] z-40 rounded-t-[2rem] md:rounded-t-[3rem] pb-20 md:pb-40 relative shadow-[0_-20px_50px_rgba(0,0,0,0.1)]" id="story-section">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 md:mb-28 max-w-4xl mx-auto">
<div className="inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6 md:mb-8 shadow-sm">
<span className="text-[9px] md:text-[10px] uppercase font-bold tracking-widest text-[#dcae4f] font-roboto">Proven Results</span>
</div>
<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#f6f3eb] leading-none tracking-tight font-serif mb-4 md:mb-6 font-bricolage">
                    The Tale of the Overwhelmed Host
                </h2>
<p className="leading-relaxed text-base md:text-lg font-light text-stone-400 font-roboto">From administrative avalanches to streamlined sanctuaries. Here is the evidence.</p>
</div>
<div className="flex flex-col gap-10 md:gap-20">

<div className="bg-[#f6f3eb] text-brown-900 rounded-2xl md:rounded-[2rem] p-4 md:p-6 border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 group">
<div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-stretch">

<div className="h-[250px] md:h-auto w-full rounded-xl md:rounded-2xl overflow-hidden relative border border-stone-200/60 bg-white flex">

<div className="w-1/2 bg-stone-50 relative p-4 md:p-6 border-r border-stone-200/80 group-hover:bg-red-50/10 transition-colors duration-700">
<div className="absolute top-3 md:top-4 left-3 md:left-4 text-[8px] md:text-[10px] font-semibold text-stone-400 uppercase tracking-widest font-roboto">Duct Tape Backend</div>
<div className="mt-6 md:mt-8 flex flex-col gap-2 opacity-60 scale-[0.8] md:scale-90 origin-top-left">
<div className="flex gap-1">
<div className="h-2 w-4 bg-stone-300 rounded-sm"></div>
<div className="h-2 w-12 md:w-16 bg-stone-300 rounded-sm"></div>
<div className="h-2 w-6 md:w-8 bg-stone-300 rounded-sm"></div>
</div>
<div className="h-px w-full bg-stone-200 my-1"></div>
<div className="flex gap-1 items-center">
<div className="h-2 w-3 bg-red-200 rounded-sm"></div>
<div className="h-2 w-10 md:w-12 bg-stone-200 rounded-sm"></div>
<div className="h-2 w-4 md:w-6 bg-stone-200 rounded-sm"></div>
</div>
<div className="h-px w-full bg-stone-200 my-1"></div>
<div className="flex gap-1 items-center">
<div className="h-2 w-4 bg-stone-300 rounded-sm"></div>
<div className="h-2 w-8 md:w-10 bg-stone-200 rounded-sm"></div>
<div className="h-3 md:h-4 w-10 md:w-12 bg-red-100 border border-red-200 rounded-sm flex items-center justify-center text-[5px] md:text-[6px] text-red-500 font-mono tracking-tighter">MANUAL</div>
</div>
</div>
</div>

<div className="w-1/2 bg-[#fcfbe8] relative p-4 md:p-6 flex flex-col items-center justify-center">
<div className="absolute top-3 md:top-4 right-3 md:right-4 text-[8px] md:text-[10px] font-semibold text-green-600 uppercase tracking-widest font-roboto">Invisible Host</div>
<div className="w-full bg-white rounded-lg md:rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-green-100 p-3 md:p-4 transform transition-transform duration-700 group-hover:scale-105 group-hover:shadow-md">
<div className="flex items-center justify-between mb-2 md:mb-3">
<div className="flex items-center gap-2">
<div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
<svg className="md:w-3 md:h-3" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="h-2 w-12 md:w-16 bg-stone-100 rounded-full"></div>
</div>
</div>
<div className="space-y-1.5 md:space-y-2">
<div className="h-1 md:h-1.5 w-full bg-stone-50 rounded-full"></div>
<div className="h-1 md:h-1.5 w-3/4 bg-stone-50 rounded-full"></div>
</div>
<div className="mt-3 md:mt-4 flex gap-2">
<div className="h-5 md:h-6 w-full bg-green-500 rounded-md opacity-90"></div>
</div>
</div>
</div>
<div className="absolute inset-y-0 left-1/2 w-px bg-stone-200"></div>
</div>

<div className="px-2 md:pr-8 py-2 md:py-4 flex flex-col justify-center">
<div className="flex items-center gap-3 mb-4 md:mb-6">
<span className="px-2 md:px-3 py-1 bg-stone-200 text-stone-700 text-[9px] md:text-[10px] uppercase font-semibold tracking-widest rounded-full font-roboto">Retreat Center</span>
<span className="h-px w-6 md:w-8 bg-stone-300"></span>
</div>
<h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-brown-900 mb-4 md:mb-8 font-medium font-bricolage tracking-tight">The Transformation</h3>
<div className="space-y-4 md:space-y-6 font-roboto">
<div className="">
<p className="text-[9px] md:text-[10px] font-semibold text-stone-400 uppercase tracking-widest mb-1 font-roboto">The Complication (Pain)</p>
<p className="text-stone-700 font-light text-sm md:text-base font-roboto">A leading retreat center had a high reputation but a "duct-taped" backend. The founder spent evenings manually checking transfers. No energy left for curriculum.</p>
</div>
<div className="bg-[#e8d5b5]/30 -mx-2 md:-mx-4 px-3 md:px-4 py-3 md:py-4 rounded-lg md:rounded-xl border border-[#e8d5b5]">
<p className="text-[9px] md:text-[10px] font-semibold text-brown-900 uppercase tracking-widest mb-1 flex items-center gap-2 font-roboto">
                                        The Resolution <svg className="md:w-3 md:h-3" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</p>
<p className="text-stone-900 font-medium text-base md:text-lg font-roboto">We installed the Chamelio Experience Engine, replacing the duct tape with the "Invisible Host" automation. She reclaimed 50% of her admin time and filters for aligned clients automatically.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative w-full min-h-[70vh] md:min-h-[90vh] flex flex-col items-center justify-center overflow-hidden py-24 md:py-32 lg:py-48 z-50 rounded-t-[2rem] md:rounded-t-[3rem] -mt-8 shadow-[0_-20px_50px_rgba(0,0,0,0.1)]" id="vision-section">

<div className="bg-gradient-to-br from-[#fffdf5] via-[#fcf8e3] to-[#f4e4bc] z-0 absolute inset-0"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#fcf8e3_120%)] z-0 pointer-events-none"></div>
<div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 w-full">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

<div className="order-1 relative reveal-element reveal-stagger-1 active">
<div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border border-stone-200/50 group">

<img alt="The Supported Sanctuary" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1522008629173-e111291816eb?q=80&amp;w=2066&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-white/20 backdrop-blur-[1px]"></div>

<div className="absolute top-[18%] left-[10%] bg-white/90 backdrop-blur-md border border-[#dcae4f]/20 text-stone-800 px-4 py-2.5 rounded-full shadow-[0_10px_30px_-10px_rgba(220,174,79,0.2)] animate-[widget-float_8s_ease-in-out_infinite]">
<div className="flex items-center gap-3">
<div className="bg-green-100 p-1.5 rounded-full text-green-700">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<span className="text-xs font-bold tracking-wide font-roboto">Seal the Top (Trust)</span>
</div>
</div>
<div className="absolute bottom-[20%] left-[15%] bg-white/90 backdrop-blur-md border border-[#dcae4f]/20 text-stone-800 px-4 py-2.5 rounded-full shadow-[0_10px_30px_-10px_rgba(220,174,79,0.2)] animate-[widget-float_7s_ease-in-out_infinite] delay-2">
<div className="flex items-center gap-3">
<div className="bg-blue-100 p-1.5 rounded-full text-blue-600">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
</div>
<span className="text-xs font-bold tracking-wide font-roboto">Support the Bottom (Ops)</span>
</div>
</div>
<div className="absolute top-[40%] right-[5%] bg-white/90 backdrop-blur-md border border-[#dcae4f]/20 text-stone-800 px-4 py-2.5 rounded-full shadow-[0_10px_30px_-10px_rgba(220,174,79,0.2)] animate-[widget-float_9s_ease-in-out_infinite] delay-1">
<div className="flex items-center gap-3">
<div className="bg-purple-100 p-1.5 rounded-full text-purple-600">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" x2="2" y1="8" y2="22"></line><line x1="17.5" x2="9" y1="15" y2="15"></line></svg>
</div>
<span className="text-xs font-bold tracking-wide font-roboto">Freedom to Hold Space</span>
</div>
</div>
</div>
</div>

<div className="order-2 text-left">
<div className="reveal-element active">
<div className="inline-flex items-center px-3 py-1 rounded-full border border-stone-200 bg-white/50 backdrop-blur-sm mb-6 md:mb-8 shadow-sm">
<div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2 shadow-[0_0_10px_rgba(34,197,94,0.3)]"></div>
<span className="text-[9px] md:text-[10px] uppercase font-bold tracking-widest text-stone-600 font-roboto">The Transformation</span>
</div>
</div>
<h2 className="reveal-element reveal-stagger-1 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-brown-900 mb-6 leading-[1.1] tracking-tight active font-bricolage">
                        From Chaos to <br/> <span className="italic text-stone-500 font-bricolage">"Coherence and Capacity"</span>
</h2>
<p className="reveal-element reveal-stagger-2 text-base md:text-lg text-stone-600 leading-relaxed font-light mb-8 active font-roboto">
                        We don’t just "build websites." We install a digital operating system that seals the vessel and supports the weight of your business.
                    </p>
<div className="space-y-4">
<div className="flex gap-4 items-start">
<div className="mt-1 w-6 h-6 rounded-full bg-[#fccf4d] flex items-center justify-center text-xs font-bold shrink-0">1</div>
<div>
<h4 className="font-bold text-brown-900 font-roboto">We Seal the Top: The Digital Flow</h4>
<p className="text-sm text-stone-600 font-light mt-1 font-roboto">We design a trust-based website that signals authority. High-value clients feel safe, and the water (revenue) stays in the bowl.</p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="mt-1 w-6 h-6 rounded-full bg-[#fccf4d] flex items-center justify-center text-xs font-bold shrink-0">2</div>
<div>
<h4 className="font-bold text-brown-900 font-roboto">We Support the Bottom: The Invisible Host</h4>
<p className="text-sm text-stone-600 font-light mt-1 font-roboto">A custom automation engine handles the heavy lifting. The "Golden Stand" runs quietly in the background.</p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="mt-1 w-6 h-6 rounded-full bg-[#fccf4d] flex items-center justify-center text-xs font-bold shrink-0">3</div>
<div className="">
<h4 className="font-bold text-brown-900 font-roboto">The Outcome: Freedom</h4>
<p className="text-sm text-stone-600 font-light mt-1 font-roboto">You reclaim 5-10 hours a week. You stop being the glue holding the business together and return to being the visionary.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="px-4 sm:px-6 md:px-12 z-[55] -mt-8 bg-[#dfdcd6] border-white/20 rounded-t-[2rem] md:rounded-t-[3rem] border-t py-24 md:py-40 lg:py-48 relative shadow-[0_-20px_60px_rgba(0,0,0,0.1)]" id="offer-section">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
<div className="space-y-10 md:space-y-12">
<div>
<span className="text-[10px] md:text-xs font-semibold text-stone-500 uppercase tracking-widest mb-2 block font-roboto">The Offer</span>
<h2 className="text-3xl sm:text-4xl md:text-5xl text-brown-900 leading-tight tracking-tight font-serif font-bricolage">
                        We Do Not Use Templates. We Install a Flow.
                    </h2>
<p className="text-stone-600 font-light mt-4 text-base md:text-lg font-roboto">We focus only on the systems that plug the two fatal leaks.</p>
</div>
<div className="space-y-6 md:space-y-8">

<div className="group flex gap-4 md:gap-5 items-start">
<div className="mt-0.5 md:mt-1 w-7 h-7 md:w-8 md:h-8 rounded-full bg-white/50 flex items-center justify-center text-stone-600 group-hover:bg-white group-hover:text-stone-900 transition-colors shrink-0">
<span className="font-serif italic text-sm md:text-base font-roboto">1</span>
</div>
<div>
<h4 className="text-brown-900 text-base md:text-lg font-semibold font-roboto">Digital Flow Design (Trust Build)</h4>
<p className="text-stone-600 font-light mt-1 text-sm md:text-base font-roboto">A bespoke website that signals safety to €3k+ buyers.</p>
</div>
</div>

<div className="group flex gap-4 md:gap-5 items-start">
<div className="mt-0.5 md:mt-1 w-7 h-7 md:w-8 md:h-8 rounded-full bg-white/50 flex items-center justify-center text-stone-600 group-hover:bg-white group-hover:text-stone-900 transition-colors shrink-0">
<span className="font-serif italic text-sm md:text-base font-roboto">2</span>
</div>
<div>
<h4 className="font-semibold text-brown-900 text-base md:text-lg font-roboto">Experience Mapping (Trust Build)</h4>
<p className="text-stone-600 font-light mt-1 text-sm md:text-base font-roboto">We ensure the digital path feels as sacred as the retreat itself.</p>
</div>
</div>

<div className="group flex gap-4 md:gap-5 items-start">
<div className="mt-0.5 md:mt-1 w-7 h-7 md:w-8 md:h-8 rounded-full bg-white/50 flex items-center justify-center text-stone-600 group-hover:bg-white group-hover:text-stone-900 transition-colors shrink-0">
<span className="font-serif italic text-sm md:text-base font-roboto">3</span>
</div>
<div className="">
<h4 className="font-semibold text-brown-900 text-base md:text-lg font-roboto">The Automated Gatekeeper (Time Engine)</h4>
<p className="text-stone-600 font-light mt-1 text-sm md:text-base font-roboto">Logic-based forms that filter applicants for alignment (so you don't have to).</p>
</div>
</div>

<div className="group flex gap-4 md:gap-5 items-start">
<div className="mt-0.5 md:mt-1 w-7 h-7 md:w-8 md:h-8 rounded-full bg-white/50 flex items-center justify-center text-stone-600 group-hover:bg-white group-hover:text-stone-900 transition-colors shrink-0">
<span className="font-serif italic text-sm md:text-base font-roboto">4</span>
</div>
<div className="">
<h4 className="font-semibold text-brown-900 text-base md:text-lg font-roboto">The Invisible Host (Time Engine)</h4>
<p className="text-stone-600 font-light mt-1 text-sm md:text-base font-roboto">Automated payment chasing and warm onboarding sequences.</p>
</div>
</div>
</div>
</div>

<div className="relative">
<div className="absolute inset-0 bg-[#c9c5bc] transform rotate-3 rounded-2xl md:rounded-[2rem] shadow-none"></div>
<div className="p-6 md:p-8 lg:p-12 bg-[#f6f3eb] border-white/50 border rounded-2xl md:rounded-[2rem] relative shadow-2xl">
<div className="flex justify-between items-start mb-8 md:mb-10">
<div className="">
<span className="text-[9px] md:text-[10px] font-semibold text-stone-400 uppercase tracking-[0.2em] font-roboto">Investment</span>
<h3 className="font-serif text-2xl md:text-3xl text-brown-900 mt-2 font-bricolage">Digital Sanctuary</h3>
</div>
<div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-stone-200 flex items-center justify-center text-stone-400">
<svg className="md:w-5 md:h-5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v12"></path><path d="M17.196 9 6.804 15"></path><path d="m6.804 9 10.392 6"></path></svg>
</div>
</div>
<div className="space-y-4 md:space-y-6 mb-8 md:mb-10">
<div className="flex justify-between items-baseline border-b border-stone-200 border-dashed pb-3 md:pb-4">
<span className="text-stone-600 font-medium text-sm md:text-base font-roboto">The Build</span>
<span className="font-serif text-xl md:text-2xl text-brown-900 font-bricolage">€2,950</span>
</div>
<div className="flex justify-between items-baseline border-b border-stone-200 border-dashed pb-3 md:pb-4">
<span className="text-stone-600 font-medium text-sm md:text-base font-roboto">Flow Care Plan</span>
<span className="font-serif text-lg md:text-xl text-brown-900 font-roboto">€395<span className="text-xs md:text-sm text-stone-400 font-normal ml-1 font-roboto">/mo</span></span>
</div>
<div className="flex justify-between items-baseline pb-2">
<span className="text-stone-600 font-medium text-sm md:text-base font-roboto">Operations Fee</span>
<span className="font-serif text-lg md:text-xl text-brown-900 font-roboto">€35<span className="text-xs md:text-sm text-stone-400 font-normal ml-1 font-roboto">/pp</span></span>
</div>
</div>
<div className="bg-white/60 rounded-lg md:rounded-xl p-4 md:p-5 border border-stone-100 flex gap-3 md:gap-4 mb-6 md:mb-8">
<div className="mt-0.5 md:mt-1 min-w-[14px] md:min-w-[16px] text-[#dcae4f]">
<svg className="md:w-4 md:h-4" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<div className="">
<p className="font-semibold text-[10px] md:text-xs uppercase tracking-wide text-stone-800 mb-1 font-roboto">True Colors Guarantee</p>
<p className="leading-relaxed text-[10px] md:text-xs text-stone-500 font-roboto">If your system is not reducing admin load by +5 hours a week and improving booking flow by 20%, we refine it with you until it does.</p>
</div>
</div>
<a className="w-full block text-center bg-stone-900 hover:bg-stone-700 text-[#f6f3eb] text-sm md:text-base py-3.5 md:py-4 rounded-lg md:rounded-xl transition-all shadow-md hover:shadow-lg font-medium tracking-wide font-roboto" href="#">
                        Apply for a Build Slot
                    </a>
</div>
</div>
</div>
<div className="mt-16 md:mt-32 lg:mt-40 text-center max-w-2xl mx-auto px-4">
<p className="text-lg md:text-xl lg:text-2xl text-brown-900 leading-relaxed font-medium italic tracking-tight font-serif mb-4 md:mb-6 font-bricolage">"It feels like having a team of digital minions keeping everything in sync."</p>
<div className="flex items-center justify-center gap-3 opacity-80">
<div className="h-px w-6 md:w-8 bg-stone-400"></div>
<span className="uppercase text-[10px] md:text-xs font-semibold text-stone-600 tracking-widest font-roboto">Dave, Anima Vinctum</span>
<div className="h-px w-6 md:w-8 bg-stone-400"></div>
</div>
</div>
</section>

<footer className="px-4 sm:px-6 md:px-12 -mt-8 bg-[#f6f3eb] z-[60] rounded-t-[2rem] md:rounded-t-[3rem] pt-28 md:pt-40 lg:pt-48 pb-8 md:pb-12 relative shadow-[0_-20px_60px_rgba(0,0,0,0.1)]">
<div className="max-w-[1400px] mx-auto">
<div className="flex flex-col lg:flex-row mb-16 md:mb-20 gap-10 md:gap-16 items-start justify-between">
<div className="max-w-lg">
<h3 className="text-brown-900 text-2xl md:text-3xl font-serif mb-3 md:mb-4 font-bricolage">Stop Holding the Bowl.<br/>Start Holding Space.</h3>
<p className="text-stone-600 mb-6 md:mb-8 font-light text-sm md:text-base font-roboto">Your hands are meant for healing, not for holding your business together with duct tape. Let us build the stand that supports you.</p>
<div className="flex flex-col gap-3">
<a className="w-full sm:w-fit text-center bg-stone-900 text-white text-sm px-6 md:px-8 py-3 md:py-3.5 rounded-lg hover:bg-stone-800 transition-colors font-medium font-roboto" href="#">Audit My Leaks &amp; Fix the Flow</a>
</div>
</div>
<div className="grid grid-cols-2 gap-8 md:gap-12 text-sm text-stone-600 w-full sm:w-auto">
<div className="space-y-2 md:space-y-3">
<h4 className="font-bold text-stone-900 mb-2 font-roboto">Flow</h4>
<a className="block hover:text-stone-900 font-roboto" href="#problem-section">The Diagnosis</a>
<a className="block hover:text-stone-900 font-roboto" href="#cost-section">The Cost</a>
<a className="block hover:text-stone-900 font-roboto" href="#story-section">Case Study</a>
</div>
<div className="space-y-2 md:space-y-3">
<h4 className="font-bold text-stone-900 mb-2 font-roboto">Company</h4>
<a className="block hover:text-stone-900 font-roboto" href="#">About Us</a>
<a className="block hover:text-stone-900 font-roboto" href="#">Contact</a>
<a className="block hover:text-stone-900 font-roboto" href="#">Sign In</a>
</div>
</div>
</div>

<div className="relative overflow-hidden pt-6 md:pt-8 border-t border-stone-200">
<h1 className="font-serif text-[15vw] md:text-[12vw] leading-none text-[#e8e4db] text-center select-none tracking-tighter mix-blend-multiply font-bricolage">
                    Chamelio
                </h1>
<div className="flex flex-col gap-4 md:flex-row text-[9px] md:text-[10px] uppercase text-stone-400 tracking-widest mt-6 md:mt-8 items-center justify-center">
<div className="flex flex-wrap gap-4 md:gap-6 justify-center">
<a className="hover:text-stone-600 font-roboto" href="#">Privacy Policy</a>
<a className="hover:text-stone-600 font-roboto" href="#">Terms of Service</a>
<span className="font-roboto">© Chamelio Systems</span>
</div>
</div>
</div>
</div>
</footer>


    </>
  );
}
