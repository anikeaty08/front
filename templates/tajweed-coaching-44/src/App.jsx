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



        // Scroll Reveal Logic
        document.addEventListener("DOMContentLoaded", function() {
            const observerOptions = {
                threshold: 0.15,
                rootMargin: "0px 0px -50px 0px"
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal-on-scroll').forEach(el => {
                observer.observe(el);
            });
        });

        // FAQ Toggle
        function toggleFaq(button) {
            const content = button.nextElementSibling;
            const icon = button.querySelector('iconify-icon');
            
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                icon.style.transform = 'rotate(0deg)';
                button.classList.remove('text-emerald-900');
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                icon.style.transform = 'rotate(180deg)';
                button.classList.add('text-emerald-900');
            }
        }

        // SPA Routing Logic
        function routeTo(pageId, preselectService = null) {
            const overlay = document.getElementById('page-transition');
            const home = document.getElementById('home-page');
            const booking = document.getElementById('booking-page');
            const thankYou = document.getElementById('thank-you-page');
            const nav = document.querySelector('nav');
            const mainContent = document.getElementById('main-content');

            overlay.classList.add('active');

            setTimeout(() => {
                home.classList.add('hidden');
                booking.classList.add('hidden');
                thankYou.classList.add('hidden');
                window.scrollTo(0, 0);

                if(pageId === 'booking' && preselectService) {
                   const radios = document.getElementsByName('service');
                   radios.forEach(r => {
                       if(r.value === preselectService) r.checked = true;
                   });
                }

                if (pageId === 'home') {
                    home.classList.remove('hidden');
                    nav.classList.remove('hidden');
                    mainContent.classList.replace('pt-12', 'pt-24');
                } else if (pageId === 'booking') {
                    booking.classList.remove('hidden');
                    nav.classList.add('hidden');
                    mainContent.classList.replace('pt-24', 'pt-12');
                } else if (pageId === 'thank-you') {
                    thankYou.classList.remove('hidden');
                    nav.classList.add('hidden');
                    mainContent.classList.replace('pt-24', 'pt-12');
                }

                setTimeout(() => {
                    overlay.classList.remove('active');
                }, 400);

            }, 600);
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
      

<div className="fixed inset-0 z-[100] bg-emerald-950 flex items-center justify-center" id="page-transition">
<div className="text-emerald-100 flex flex-col items-center gap-4">
<iconify-icon className="animate-pulse" height="48" icon="solar:bismillah-linear" width="48"></iconify-icon>
<span className="text-xs tracking-[0.2em] uppercase opacity-70 font-medium">Loading Studio...</span>
</div>
</div>

<nav className="fixed top-0 w-full z-40 bg-stone-50/80 backdrop-blur-xl border-b border-stone-200/50 transition-all duration-500">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-medium tracking-tight text-emerald-950 flex items-center gap-2 group" href="#" onclick="routeTo('home')">
<iconify-icon className="text-emerald-800 transition-transform group-hover:rotate-12 duration-300" icon="solar:book-linear"></iconify-icon>
<span>HIDAYAH<span className="opacity-50">STUDIO</span></span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-emerald-700 transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-emerald-700 after:transition-all hover:after:w-full" href="#approach">Approach</a>
<a className="hover:text-emerald-700 transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-emerald-700 after:transition-all hover:after:w-full" href="#offerings">Offerings</a>
<a className="hover:text-emerald-700 transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-emerald-700 after:transition-all hover:after:w-full" href="#about">Instructor</a>
</div>
<div className="flex items-center gap-3">
<button className="hidden sm:flex text-zinc-600 hover:text-emerald-900 text-xs font-medium px-3 py-2 transition-colors" onclick="routeTo('booking')">
                    Login
                </button>
<button className="bg-emerald-900 text-white text-xs font-medium px-4 py-2 rounded-full hover:bg-emerald-800 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 shadow-sm shadow-emerald-900/20" onclick="routeTo('booking')">
<span>Book Audit</span>
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</nav>

<main className="pt-24 pb-12" id="main-content">

<div className="" id="home-page">

<section className="md:py-20 flex flex-col overflow-hidden text-center max-w-6xl mr-auto ml-auto pt-12 pr-6 pb-12 pl-6 relative items-center">
<div className="animate-text-blur inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-emerald-100 text-emerald-800 text-xs font-medium mb-8 shadow-sm hover:shadow-md transition-shadow cursor-default z-10">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span>Free Tajweed Audits (Feb 6 - Feb 15)</span>
</div>
<h1 className="animate-text-blur text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-zinc-900 mb-8 max-w-4xl leading-[1.1] z-10" style={{animationDelay: '0.1s'}}>
                    Recite with clarity,<br className="hidden md:block"/> correctness, &amp; confidence.
                </h1>
<p className="animate-text-blur text-lg md:text-xl text-zinc-500 max-w-2xl mb-10 leading-relaxed z-10" style={{animationDelay: '0.2s'}}>
                    Refined online Tajweed coaching for sisters. Improve your recitation through proper guidance and gentle correction.
                </p>

<div className="animate-text-blur flex flex-col sm:flex-row gap-4 w-full sm:w-auto z-10 items-center justify-center mb-16" style={{animationDelay: '0.3s'}}>
<button className="group relative btn-shimmer text-white text-sm font-medium px-8 py-3.5 rounded-full shadow-lg shadow-emerald-900/20 flex items-center justify-center gap-2 transform transition-all active:scale-95 overflow-hidden" onclick="routeTo('booking')">
<span className="relative z-10">Request Free Audit</span>
<iconify-icon className="relative z-10 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<a className="group bg-white/80 backdrop-blur-md border border-stone-200 text-zinc-700 text-sm font-medium px-8 py-3.5 rounded-full hover:bg-white transition-all flex items-center justify-center hover:border-stone-300 hover:shadow-md active:scale-95" href="#offerings">
<iconify-icon className="mr-2 text-zinc-400 group-hover:text-emerald-600 transition-colors" icon="solar:layers-minimalistic-linear"></iconify-icon>
                        View Offerings
                    </a>
</div>

<div className="w-full max-w-4xl mx-auto z-10 animate-text-blur" style={{animationDelay: '0.4s'}}>
<div className="text-center mb-8">
<p className="uppercase text-xs font-semibold text-zinc-400 tracking-widest">Students joining from</p>
</div>
<div className="overflow-hidden relative w-full" style={{maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'}}>

<div className="ticker-track flex gap-16 gap-x-16 items-center">

<div className="flex gap-16 shrink-0 gap-x-16 items-center">
<span className="text-lg font-normal tracking-tight text-zinc-400 hover:text-emerald-800 transition-colors duration-300 cursor-default">United Kingdom</span>
<span className="text-lg font-medium tracking-tight text-zinc-400 hover:text-emerald-800 transition-colors duration-300 cursor-default">United States</span>
<span className="text-lg font-normal tracking-tight text-zinc-400 hover:text-emerald-800 transition-colors duration-300 cursor-default">Canada</span>
<span className="text-lg font-medium tracking-tight text-zinc-400 hover:text-emerald-800 transition-colors duration-300 cursor-default">Australia</span>
<span className="text-lg font-normal tracking-tight text-zinc-400 hover:text-emerald-800 transition-colors duration-300 cursor-default">Singapore</span>
<span className="text-lg font-medium tracking-tight text-zinc-400 hover:text-emerald-800 transition-colors duration-300 cursor-default">Malaysia</span>
<span className="text-lg font-normal tracking-tight text-zinc-400 hover:text-emerald-800 transition-colors duration-300 cursor-default">UAE</span>
</div>

<div className="flex items-center gap-16 shrink-0">
<span className="text-lg font-normal tracking-tight text-zinc-400 hover:text-emerald-800 transition-colors duration-300 cursor-default">United Kingdom</span>
<span className="text-lg font-medium tracking-tight text-zinc-400 hover:text-emerald-800 transition-colors duration-300 cursor-default">United States</span>
<span className="text-lg font-normal tracking-tight text-zinc-400 hover:text-emerald-800 transition-colors duration-300 cursor-default">Canada</span>
<span className="text-lg font-medium tracking-tight text-zinc-400 hover:text-emerald-800 transition-colors duration-300 cursor-default">Australia</span>
<span className="text-lg font-normal tracking-tight text-zinc-400 hover:text-emerald-800 transition-colors duration-300 cursor-default">Singapore</span>
<span className="text-lg font-medium tracking-tight text-zinc-400 hover:text-emerald-800 transition-colors duration-300 cursor-default">Malaysia</span>
<span className="text-lg font-normal tracking-tight text-zinc-400 hover:text-emerald-800 transition-colors duration-300 cursor-default">UAE</span>
</div>
</div>
</div>
</div>
</section>

<section className="gallery-perspective w-full h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden mb-24 relative -mt-6">

<div className="absolute inset-0 z-20 bg-gradient-to-b from-stone-50 via-transparent to-stone-50 pointer-events-none"></div>
<div className="absolute inset-0 z-20 bg-gradient-to-r from-stone-50 via-transparent to-stone-50 pointer-events-none"></div>
<div className="gallery-content flex flex-col gap-6 w-[120%] md:w-[80%] opacity-90 hover:opacity-100 transition-opacity duration-700">

<div className="flex gap-6 -translate-x-24">

<div className="gallery-card w-72 h-48 rounded-2xl bg-white border border-white/40 shadow-xl p-5 flex flex-col justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
<iconify-icon icon="solar:play-circle-linear"></iconify-icon>
</div>
<div>
<div className="h-2 w-24 bg-stone-100 rounded-full mb-1"></div>
<div className="h-2 w-16 bg-stone-100 rounded-full"></div>
</div>
</div>
<div className="flex items-center justify-center gap-1 h-12">
<span className="w-1 h-4 bg-emerald-200 rounded-full"></span>
<span className="w-1 h-8 bg-emerald-400 rounded-full"></span>
<span className="w-1 h-6 bg-emerald-300 rounded-full"></span>
<span className="w-1 h-3 bg-emerald-200 rounded-full"></span>
<span className="w-1 h-7 bg-emerald-500 rounded-full"></span>
<span className="w-1 h-4 bg-emerald-300 rounded-full"></span>
</div>
<div className="text-[10px] text-zinc-400 font-medium">Feedback: Elongate the madd...</div>
</div>

<div className="gallery-card w-72 h-48 rounded-2xl bg-gradient-to-br from-emerald-900 to-emerald-950 shadow-xl p-5 flex flex-col text-white/90">
<div className="flex justify-between items-start mb-4">
<iconify-icon className="text-emerald-400" icon="solar:book-bookmark-linear"></iconify-icon>
<span className="text-[10px] bg-emerald-800/50 px-2 py-1 rounded-full border border-emerald-700">Surah Al-Fatiha</span>
</div>
<div className="space-y-2 opacity-80">
<div className="h-2 w-full bg-emerald-800 rounded-full"></div>
<div className="h-2 w-3/4 bg-emerald-800 rounded-full"></div>
<div className="h-2 w-5/6 bg-emerald-800 rounded-full"></div>
</div>
<button className="mt-auto text-[10px] bg-emerald-800 hover:bg-emerald-700 py-2 rounded-lg transition-colors text-center">Correct Pronunciation</button>
</div>

<div className="gallery-card w-72 h-48 rounded-2xl bg-white border border-white/40 shadow-xl p-5">
<div className="flex justify-between items-center mb-6">
<span className="text-xs font-semibold text-zinc-700">Progress</span>
<iconify-icon className="text-emerald-500" icon="solar:graph-up-linear"></iconify-icon>
</div>
<div className="space-y-4">
<div>
<div className="flex justify-between text-[10px] text-zinc-500 mb-1"><span>Makharij</span> <span>85%</span></div>
<div className="w-full h-1.5 bg-stone-100 rounded-full overflow-hidden">
<div className="w-[85%] h-full bg-emerald-500 rounded-full"></div>
</div>
</div>
<div>
<div className="flex justify-between text-[10px] text-zinc-500 mb-1"><span>Sifat</span> <span>60%</span></div>
<div className="w-full h-1.5 bg-stone-100 rounded-full overflow-hidden">
<div className="w-[60%] h-full bg-emerald-300 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>

<div className="flex gap-6 translate-x-12">

<div className="gallery-card w-72 h-48 rounded-2xl bg-white border border-white/40 shadow-xl p-5 flex flex-col">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-full bg-stone-50 text-zinc-400 flex items-center justify-center">
<iconify-icon icon="solar:calendar-linear"></iconify-icon>
</div>
<div className="text-xs">
<div className="font-medium text-zinc-900">Next Session</div>
<div className="text-zinc-400">Tue, 10:00 AM</div>
</div>
</div>
<div className="flex-grow flex items-center justify-center border-t border-stone-100 pt-2">
<button className="w-full py-2 bg-stone-50 text-xs font-medium text-zinc-600 rounded-lg hover:bg-emerald-50 hover:text-emerald-700 transition-colors">Join Class</button>
</div>
</div>

<div className="gallery-card w-72 h-48 rounded-2xl bg-white border border-white/40 shadow-xl p-5 relative overflow-hidden">
<div className="absolute top-0 right-0 p-3">
<iconify-icon className="text-emerald-100" icon="solar:quote-up-square-linear" width="40"></iconify-icon>
</div>
<p className="text-xs text-zinc-500 leading-relaxed mt-2 relative z-10">"I never understood the rule of Ikhfa until this session. The visual examples made it click instantly."</p>
<div className="mt-4 flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-emerald-100"></div>
<span className="text-[10px] font-medium text-zinc-900">Sarah K.</span>
</div>
</div>

<div className="gallery-card w-72 h-48 rounded-2xl bg-white border border-white/40 shadow-xl p-5 flex flex-col justify-center items-center text-center group">
<div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:bookmark-circle-linear" width="24"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-zinc-900">Tajweed Rules</h4>
<p className="text-[10px] text-zinc-400 mt-1">Access simplified PDF notes</p>
<button className="mt-3 text-[10px] text-emerald-600 font-medium hover:underline">Download</button>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-16">
<div className="reveal-on-scroll mb-12 flex flex-col md:flex-row items-end justify-between gap-6">
<div>
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-zinc-900 mb-2">A Thoughtfully Designed Space</h2>
<p className="text-zinc-500 max-w-lg">Created for sisters who engage with the Qur’an but feel unsure about their recitation.</p>
</div>

<button className="text-sm font-medium text-emerald-800 hover:text-emerald-600 flex items-center gap-1 transition-colors" onclick="routeTo('booking')">
                        Start your journey <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="stagger-wrap reveal-on-scroll grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="stagger-item hover:-translate-y-1 transition-transform duration-300 bg-white p-6 rounded-2xl border border-stone-200 shadow-sm group">
<div className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center text-zinc-400 mb-4 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
<iconify-icon icon="solar:question-circle-linear" width="20"></iconify-icon>
</div>
<h3 className="text-zinc-900 font-medium mb-2">Unsure Application</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Knowing the rules but unsure if you are applying them correctly.</p>
</div>

<div className="stagger-item hover:-translate-y-1 transition-transform duration-300 bg-white p-6 rounded-2xl border border-stone-200 shadow-sm group">
<div className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center text-zinc-400 mb-4 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
<iconify-icon icon="solar:restart-circle-linear" width="20"></iconify-icon>
</div>
<h3 className="text-zinc-900 font-medium mb-2">Repeating Mistakes</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Getting stuck on the same errors without understanding the fix.</p>
</div>

<div className="stagger-item hover:-translate-y-1 transition-transform duration-300 bg-white p-6 rounded-2xl border border-stone-200 shadow-sm group">
<div className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center text-zinc-400 mb-4 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
<iconify-icon icon="solar:muted-linear" width="20"></iconify-icon>
</div>
<h3 className="text-zinc-900 font-medium mb-2">Recitation Anxiety</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Feeling embarrassed to recite aloud due to a lack of feedback.</p>
</div>

<div className="stagger-item hover:-translate-y-1 transition-transform duration-300 bg-white p-6 rounded-2xl border border-stone-200 shadow-sm group">
<div className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center text-zinc-400 mb-4 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
<iconify-icon icon="solar:book-bookmark-linear" width="20"></iconify-icon>
</div>
<h3 className="text-zinc-900 font-medium mb-2">Pausing Rules</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Not sure where to stop and where to continue safely.</p>
</div>
</div>
</section>

<section className="bg-white border-y border-stone-100 py-24 relative overflow-hidden" id="approach">
<div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row gap-16 relative z-10">
<div className="lg:w-1/3 reveal-on-scroll">
<div className="sticky top-24">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-zinc-900 mb-6">Our Approach</h2>
<p className="text-zinc-500 mb-8 leading-relaxed">At Hidayah Tajweed Studio, we prioritize practical implementation over heavy theory.</p>
<div className="flex flex-col gap-4 mb-8">
<div className="flex items-start gap-3 group">
<div className="p-1 rounded-full bg-emerald-50 text-emerald-600 group-hover:scale-110 transition-transform">
<iconify-icon className="shrink-0" icon="solar:check-circle-linear"></iconify-icon>
</div>
<span className="text-sm pt-0.5">Less teaching, more guiding.</span>
</div>
<div className="flex items-start gap-3 group">
<div className="p-1 rounded-full bg-emerald-50 text-emerald-600 group-hover:scale-110 transition-transform">
<iconify-icon className="shrink-0" icon="solar:heart-linear"></iconify-icon>
</div>
<span className="text-sm pt-0.5">Sisters-only non-judgmental zone.</span>
</div>
<div className="flex items-start gap-3 group">
<div className="p-1 rounded-full bg-emerald-50 text-emerald-600 group-hover:scale-110 transition-transform">
<iconify-icon className="shrink-0" icon="solar:global-linear"></iconify-icon>
</div>
<span className="text-sm pt-0.5">International student body.</span>
</div>
</div>
<button className="px-6 py-2.5 rounded-lg border border-stone-200 text-sm font-medium hover:border-emerald-300 hover:text-emerald-800 transition-all bg-white" onclick="routeTo('booking')">
                                Read Testimonials
                            </button>
</div>
</div>
<div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8 stagger-wrap reveal-on-scroll">

<div className="stagger-item bg-stone-50 p-6 rounded-xl border border-transparent hover:border-emerald-100 hover:bg-white transition-all duration-300 group">
<div className="flex justify-between items-start">
<span className="text-emerald-900 text-xs font-semibold uppercase tracking-widest mb-3 block opacity-60">Step 01</span>
<iconify-icon className="text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<h4 className="text-zinc-900 font-medium mb-2">The Audit</h4>
<p className="text-sm text-zinc-500">We assess your current level to identify specific areas for improvement.</p>
</div>
<div className="stagger-item bg-stone-50 p-6 rounded-xl border border-transparent hover:border-emerald-100 hover:bg-white transition-all duration-300 group">
<div className="flex justify-between items-start">
<span className="text-emerald-900 text-xs font-semibold uppercase tracking-widest mb-3 block opacity-60">Step 02</span>
<iconify-icon className="text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<h4 className="text-zinc-900 font-medium mb-2">Root Correction</h4>
<p className="text-sm text-zinc-500">We guide you to correct mistakes at the source, not just the symptom.</p>
</div>
<div className="stagger-item bg-stone-50 p-6 rounded-xl border border-transparent hover:border-emerald-100 hover:bg-white transition-all duration-300 group">
<div className="flex justify-between items-start">
<span className="text-emerald-900 text-xs font-semibold uppercase tracking-widest mb-3 block opacity-60">Step 03</span>
<iconify-icon className="text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<h4 className="text-zinc-900 font-medium mb-2">Natural Application</h4>
<p className="text-sm text-zinc-500">Learn to apply rules naturally during recitation without overthinking.</p>
</div>
<div className="stagger-item bg-stone-50 p-6 rounded-xl border border-transparent hover:border-emerald-100 hover:bg-white transition-all duration-300 group">
<div className="flex justify-between items-start">
<span className="text-emerald-900 text-xs font-semibold uppercase tracking-widest mb-3 block opacity-60">Step 04</span>
<iconify-icon className="text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<h4 className="text-zinc-900 font-medium mb-2">Confidence</h4>
<p className="text-sm text-zinc-500">Achieve clarity and confidence in your connection with the Qur'an.</p>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-24" id="offerings">
<div className="text-center mb-16 reveal-on-scroll">
<h2 className="text-3xl font-medium tracking-tight text-zinc-900 mb-4">Our Offerings</h2>
<p className="text-zinc-500">Choose the path that suits your journey.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="reveal-on-scroll bg-white p-8 rounded-2xl border border-emerald-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
<div className="absolute top-0 right-0 bg-emerald-50 text-emerald-800 text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider animate-pulse">Limited Time</div>
<h3 className="text-lg font-medium text-zinc-900">Tajweed Audit</h3>
<div className="mt-4 mb-6">
<span className="text-4xl font-medium text-zinc-900">Free</span>
<span className="text-sm text-zinc-400 block mt-1">Feb 6 - Feb 15</span>
</div>
<p className="text-sm text-zinc-500 mb-6 flex-grow">A private evaluation session to identify mistakes and clarify strengths. The ideal starting point.</p>
<ul className="space-y-3 mb-8 text-sm text-zinc-600">
<li className="flex gap-2"><iconify-icon className="text-emerald-600" icon="solar:check-read-linear"></iconify-icon> Identify mistakes</li>
<li className="flex gap-2"><iconify-icon className="text-emerald-600" icon="solar:check-read-linear"></iconify-icon> Personalized feedback</li>
</ul>
<button className="w-full py-3 rounded-xl border border-emerald-900 text-emerald-900 text-sm font-medium hover:bg-emerald-900 hover:text-white transition-all shadow-sm" onclick="routeTo('booking', 'audit')">Request Audit</button>
</div>

<div className="reveal-on-scroll bg-emerald-900 p-8 rounded-2xl shadow-xl flex flex-col text-white relative transform md:-translate-y-4 z-10">
<div className="absolute top-0 left-1/2 -translate-x-1/2 bg-emerald-800 text-emerald-100 text-[10px] font-bold px-3 py-1 rounded-b-lg uppercase tracking-wider w-max shadow-lg">Most Popular</div>
<h3 className="text-lg font-medium text-white flex items-center gap-2"><iconify-icon className="text-emerald-300" icon="solar:users-group-rounded-linear"></iconify-icon> Group Session</h3>
<div className="mt-4 mb-6">
<span className="text-4xl font-medium">$100</span>
<span className="text-sm text-emerald-200/70 block mt-1">One-time payment • 6 Weeks</span>
</div>
<p className="text-sm text-emerald-100/70 mb-6 flex-grow">Short Tajweed Course. Focused sisters-only group targeting main rules and common mistakes.</p>
<ul className="space-y-3 mb-8 text-sm text-emerald-100/90">
<li className="flex gap-2"><iconify-icon icon="solar:check-read-linear"></iconify-icon> Practical assignments</li>
<li className="flex gap-2"><iconify-icon icon="solar:check-read-linear"></iconify-icon> Individual feedback</li>
</ul>
<button className="w-full py-3 rounded-xl bg-white text-emerald-900 text-sm font-medium hover:bg-emerald-50 transition-colors shadow-lg hover:shadow-xl hover:scale-105 transform duration-200" onclick="routeTo('booking', 'group')">Join Group</button>
</div>

<div className="reveal-on-scroll bg-white p-8 rounded-2xl border border-stone-200 shadow-sm flex flex-col group hover:-translate-y-2 transition-transform duration-300">
<h3 className="text-lg font-medium text-zinc-900">Personalized</h3>
<div className="mt-4 mb-6">
<span className="text-4xl font-medium">$25</span>
<span className="text-sm text-zinc-400 block mt-1">per hour</span>
</div>
<p className="text-sm text-zinc-500 mb-6 flex-grow">One-on-one mentorship designed for those who value depth and individual attention.</p>
<ul className="space-y-3 mb-8 text-sm text-zinc-600">
<li className="flex gap-2"><iconify-icon className="text-emerald-600" icon="solar:check-read-linear"></iconify-icon> Fully customized</li>
<li className="flex gap-2"><iconify-icon className="text-emerald-600" icon="solar:check-read-linear"></iconify-icon> Flexible scheduling</li>
</ul>
<button className="w-full py-3 rounded-xl border border-stone-200 text-zinc-700 text-sm font-medium hover:bg-stone-100 transition-colors" onclick="routeTo('booking', 'personal')">Book Session</button>
</div>
</div>
</section>

<section className="bg-white border-y border-stone-100 py-20" id="about">
<div className="max-w-4xl mx-auto px-6 text-center reveal-on-scroll">
<div className="w-20 h-20 bg-emerald-50 rounded-full mx-auto flex items-center justify-center text-emerald-800 mb-6 relative">
<div className="absolute inset-0 rounded-full border border-emerald-100 animate-ping opacity-50"></div>
<iconify-icon icon="solar:user-heart-linear" width="32"></iconify-icon>
</div>
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-zinc-900 mb-6">Meet Ustazah Mariyam</h2>
<p className="text-lg text-zinc-500 leading-relaxed mb-8">
                        Created with the intention to help sisters recite the Qur’an correctly and confidently. 
                        With 5+ years of experience guiding students from the UK, USA, Canada, and Australia.
                    </p>
<div className="flex justify-center gap-4">
<button className="px-6 py-2.5 bg-zinc-900 text-white text-sm font-medium rounded-lg hover:bg-zinc-800 transition-colors" onclick="routeTo('booking')">
                            Book a session
                        </button>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto px-6 py-24" id="faq">
<h2 className="text-2xl font-medium tracking-tight text-zinc-900 mb-10 text-center reveal-on-scroll">Frequently Asked Questions</h2>
<div className="space-y-4 stagger-wrap reveal-on-scroll">

<div className="stagger-item border border-stone-200 rounded-xl bg-white overflow-hidden hover:border-emerald-200 transition-colors">
<button className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none group" onclick="toggleFaq(this)">
<span className="text-sm font-medium text-zinc-900 group-hover:text-emerald-800 transition-colors">What is the Tajweed Audit?</span>
<iconify-icon className="text-zinc-400 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="max-h-0 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]">
<div className="px-6 pb-4 text-sm text-zinc-500 leading-relaxed">
                                A private 30-40 minute session where your recitation is carefully assessed, followed by personalized feedback and clear guidance on your next steps.
                            </div>
</div>
</div>

<div className="stagger-item border border-stone-200 rounded-xl bg-white overflow-hidden hover:border-emerald-200 transition-colors">
<button className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none group" onclick="toggleFaq(this)">
<span className="text-sm font-medium text-zinc-900 group-hover:text-emerald-800 transition-colors">Who can join the Tajweed Audit?</span>
<iconify-icon className="text-zinc-400 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="max-h-0 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]">
<div className="px-6 pb-4 text-sm text-zinc-500 leading-relaxed">
                                Any sister who wants clarity about her recitation, struggles with applying Tajweed, or feels unsure about her level.
                            </div>
</div>
</div>

<div className="stagger-item border border-stone-200 rounded-xl bg-white overflow-hidden hover:border-emerald-200 transition-colors">
<button className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none group" onclick="toggleFaq(this)">
<span className="text-sm font-medium text-zinc-900 group-hover:text-emerald-800 transition-colors">I live in the West. Can I join?</span>
<iconify-icon className="text-zinc-400 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="max-h-0 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]">
<div className="px-6 pb-4 text-sm text-zinc-500 leading-relaxed">
                                Yes. All sessions are conducted online and are open to sisters internationally. We have experience with international time zones.
                            </div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-stone-100 py-12">
<div className="max-w-6xl mx-auto px-6 text-center reveal-on-scroll">
<p className="text-lg font-medium text-emerald-900 mb-2">Begin your journey with intention.</p>
<p className="text-zinc-400 text-sm mb-8">Your Qur’an recitation deserves thoughtfulness and confidence.</p>
<button className="btn-shimmer text-white text-sm font-medium px-6 py-3 rounded-full hover:shadow-lg transition-all flex items-center justify-center gap-2 mx-auto" onclick="routeTo('booking')">
                        Start Today <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
<div className="mt-12 text-xs text-zinc-300 flex justify-center gap-4">
<span>© 2024 Hidayah Tajweed Studio</span>
</div>
</div>
</footer>
</div>

<div className="hidden min-h-screen flex items-center justify-center px-6 py-12" id="booking-page">
<div className="max-w-lg w-full bg-white rounded-2xl shadow-2xl shadow-emerald-900/10 border border-stone-100 p-8 animate-text-blur">
<button className="mb-6 text-zinc-400 hover:text-emerald-700 transition-colors flex items-center gap-2 text-sm group" onclick="routeTo('home')">
<iconify-icon className="group-hover:-translate-x-1 transition-transform" icon="solar:arrow-left-linear"></iconify-icon> Back
                </button>
<h2 className="text-2xl font-medium text-zinc-900 mb-2">Reserve Your Space</h2>
<p className="text-sm text-zinc-500 mb-8">Please select a program and fill in your details.</p>
<form onsubmit="event.preventDefault(); routeTo('thank-you');">
<div className="space-y-4 mb-6">

<label className="block relative cursor-pointer group">
<input checked="" className="custom-radio sr-only" name="service" type="radio" value="audit"/>
<div className="p-4 rounded-xl border border-stone-200 transition-all hover:border-emerald-300 hover:shadow-sm flex items-center justify-between">
<div>
<span className="block text-sm font-medium text-zinc-900">Tajweed Audit</span>
<span className="block text-xs text-zinc-500">Free (Feb 6 - 15)</span>
</div>
<div className="radio-circle w-5 h-5 rounded-full border border-zinc-300 transition-colors"></div>
</div>
</label>
<label className="block relative cursor-pointer group">
<input className="custom-radio sr-only" name="service" type="radio" value="group"/>
<div className="p-4 rounded-xl border border-stone-200 transition-all hover:border-emerald-300 hover:shadow-sm flex items-center justify-between">
<div>
<span className="block text-sm font-medium text-zinc-900">6-Week Group Course</span>
<span className="block text-xs text-zinc-500">$100 One-time</span>
</div>
<div className="radio-circle w-5 h-5 rounded-full border border-zinc-300 transition-colors"></div>
</div>
</label>
<label className="block relative cursor-pointer group">
<input className="custom-radio sr-only" name="service" type="radio" value="personal"/>
<div className="p-4 rounded-xl border border-stone-200 transition-all hover:border-emerald-300 hover:shadow-sm flex items-center justify-between">
<div>
<span className="block text-sm font-medium text-zinc-900">1-on-1 Mentorship</span>
<span className="block text-xs text-zinc-500">$25 / Hour</span>
</div>
<div className="radio-circle w-5 h-5 rounded-full border border-zinc-300 transition-colors"></div>
</div>
</label>
</div>
<div className="space-y-4 mb-8">
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1">Full Name</label>
<input className="w-full px-4 py-2.5 rounded-lg bg-stone-50 border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all focus:bg-white" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1">Email Address</label>
<input className="w-full px-4 py-2.5 rounded-lg bg-stone-50 border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all focus:bg-white" required="" type="email"/>
</div>
</div>
<button className="w-full btn-shimmer text-white text-sm font-medium py-3 rounded-lg hover:shadow-lg transition-all transform active:scale-[0.98]" type="submit">
                        Confirm Booking
                    </button>
</form>
</div>
</div>

<div className="hidden min-h-screen flex items-center justify-center px-6" id="thank-you-page">
<div className="text-center animate-text-blur max-w-md">
<div className="w-24 h-24 bg-emerald-50 rounded-full mx-auto flex items-center justify-center text-emerald-600 mb-6 animate-float">
<iconify-icon icon="solar:check-circle-bold" width="48"></iconify-icon>
</div>
<h2 className="text-3xl font-medium text-zinc-900 mb-4 tracking-tight">Jazakillahu Khairan</h2>
<p className="text-zinc-500 mb-8 leading-relaxed">Your request has been received. We will be in touch shortly via email to confirm your slot.</p>
<button className="text-emerald-700 text-sm font-medium hover:underline hover:text-emerald-800 transition-colors" onclick="routeTo('home')">
                    Return to Home
                </button>
</div>
</div>
</main>


    </>
  );
}
