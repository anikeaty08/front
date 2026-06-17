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



    // Initialize Icons
    lucide.createIcons();

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    // Mobile Menu Toggle
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const closeBtn = document.getElementById('mobile-close-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    function toggleMenu() {
      const isHidden = mobileMenu.classList.contains('invisible');
      if (isHidden) {
        mobileMenu.classList.remove('invisible', 'opacity-0');
        document.body.style.overflow = 'hidden';
      } else {
        mobileMenu.classList.add('invisible', 'opacity-0');
        document.body.style.overflow = '';
      }
    }

    mobileBtn.addEventListener('click', toggleMenu);
    closeBtn.addEventListener('click', toggleMenu);
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', toggleMenu);
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
      

<div className="fixed top-0 w-full -z-10 h-screen bg-cover bg-center" style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.85)), url(\'https: //images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp'}}></div>

<header className="fixed w-full z-50 transition-all duration-300 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex h-20 items-center justify-between">

<a className="flex items-center gap-3 group" href="/">

<div className="flex bg-blue-700 w-10 h-10 border-white border-2 rounded-full relative shadow-[0_0_15px_rgba(29,78,216,0.5)] items-center justify-center"><img alt="Container background" className="absolute inset-0 w-full h-full object-cover" data-container-bg="true" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/10b60f9a-c1fd-4ddc-831e-3ad411c362c3_3840w.png"/>
</div>
<span className="uppercase group-hover:text-blue-500 transition-colors text-xl font-bold text-white tracking-tight">FitMAP<span className="text-blue-600">Gym</span></span>
</a>

<nav className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-white/70 hover:text-white transition-colors" href="#method">The Method</a>
<a className="text-sm font-medium text-white/70 hover:text-white transition-colors" href="#programs">Programs</a>
<a className="text-sm font-medium text-white/70 hover:text-white transition-colors" href="#success">Success Stories</a>
<a className="text-sm font-medium text-white/70 hover:text-white transition-colors" href="#contact">Contact</a>
<div className="h-6 w-px bg-white/10 mx-2"></div>
<a className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 bg-blue-700 border border-transparent rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 focus:ring-offset-neutral-900 shadow-[0_0_20px_rgba(29,78,216,0.3)] hover:shadow-[0_0_30px_rgba(29,78,216,0.5)]" href="#join">
            Book Assessment
          </a>
</nav>

<button className="lg:hidden p-2 text-white/80 hover:text-white focus:outline-none" id="mobile-menu-btn">
<svg aria-hidden="true" className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>

<div className="lg:hidden fixed inset-0 bg-neutral-950/95 backdrop-blur-xl z-50 opacity-0 invisible transition-all duration-300" id="mobile-menu">
<div className="flex flex-col h-full p-6">
<div className="flex justify-end">
<button className="p-2 text-white/60 hover:text-white" id="mobile-close-btn">
<svg aria-hidden="true" className="lucide lucide-x w-6 h-6" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<nav className="flex-1 flex flex-col justify-center space-y-8 text-center">
<a className="text-2xl font-medium text-white/90 hover:text-blue-500 transition" href="#method">The Method</a>
<a className="text-2xl font-medium text-white/90 hover:text-blue-500 transition" href="#programs">Programs</a>
<a className="text-2xl font-medium text-white/90 hover:text-blue-500 transition" href="#success">Success Stories</a>
<a className="text-2xl font-medium text-white/90 hover:text-blue-500 transition" href="#contact">Contact</a>
<a className="mt-8 px-8 py-4 text-lg font-bold bg-blue-700 rounded-full text-white shadow-lg shadow-blue-900/50" href="#join">Start Now</a>
</nav>
</div>
</div>
</header>

<section className="relative min-h-screen flex items-center pt-20">
<div className="lg:px-8 w-full max-w-7xl mr-auto ml-auto pt-20 pr-6 pb-20 pl-6">
<div className="max-w-4xl">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 backdrop-blur-sm mb-8 animate-on-scroll is-visible" style={{animationDelay: '0.1s'}}>
<span className="flex h-2 w-2 rounded-full bg-blue-500"></span>
<span className="uppercase text-xs font-semibold text-blue-200 tracking-wider">india's Premier Coaching Facility</span>
</div>

<h1 className="sm:text-7xl lg:text-8xl leading-[0.95] animate-on-scroll is-visible text-6xl font-bold text-white tracking-tighter mb-8" style={{animationDelay: '0.2s'}}>FITMAP <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-700">START TRAINING.</span></h1>

<p className="sm:text-2xl leading-relaxed animate-on-scroll is-visible text-xl text-white/70 max-w-2xl mb-10" style={{animationDelay: '0.3s'}}>FitMap Gym isn't a room full of machines where you're left alone. It's a coached environment built on structure, accountability, and real results.</p>

<div className="flex flex-wrap items-center gap-5 animate-on-scroll is-visible" style={{animationDelay: '0.4s'}}>
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-blue-700 rounded-full hover:bg-blue-600 hover:scale-105 shadow-[0_0_20px_rgba(29,78,216,0.4)]" href="#join">
            Book Free Assessment
            <svg aria-hidden="true" className="lucide lucide-arrow-right w-5 h-5 ml-2" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center gap-2 px-6 py-4 text-base font-medium text-white transition-colors border border-white/20 rounded-full hover:bg-white/10 hover:border-white/40" href="#method">
<svg aria-hidden="true" className="lucide lucide-play-circle w-5 h-5" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
            How We Train
          </a>
</div>

<div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8 animate-on-scroll is-visible" style={{animationDelay: '0.6s'}}>
<div className="">
<p className="text-3xl font-bold text-white tracking-tight">100%</p>
<p className="text-xs text-white/50 uppercase tracking-widest mt-1">Coached Sessions</p>
</div>
<div className="">
<p className="text-3xl font-bold text-white tracking-tight">3k+</p>
<p className="text-xs text-white/50 uppercase tracking-widest mt-1">Transformations</p>
</div>
<div className="">
<p className="text-3xl font-bold text-white tracking-tight">4.9</p>
<p className="text-xs text-white/50 uppercase tracking-widest mt-1">Member Rating</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 relative overflow-hidden" id="method">

<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/5 to-transparent pointer-events-none"></div>
<div className="lg:px-8 max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="animate-on-scroll">
<h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">Most gyms rent you equipment. <span className="text-blue-500">We give you a roadmap.</span></h2>
<p className="text-lg text-white/60 mb-8 leading-relaxed">
            If you've ever felt lost in a commercial gym, wandered from machine to machine without a plan, or quit because you didn't see results — you're not alone.
          </p>
<p className="leading-relaxed text-lg font-medium text-white/80 border-blue-600 border-l-4 mb-8 pl-6">At FitMap Gym, we remove the guesswork. Every workout is structured. Every movement is coached. Every milestone is tracked.</p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div className="mt-1 p-1 rounded bg-blue-900/50 text-blue-400">
<svg aria-hidden="true" className="lucide lucide-clipboard-check w-4 h-4" data-lucide="clipboard-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="m9 14 2 2 4-4"></path></svg>
</div>
<div className="">
<span className="text-sm text-white/60">No random workouts. Follow a proven periodized plan designed for your goals.</span>
</div>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 p-1 rounded bg-blue-900/50 text-blue-400">
<svg aria-hidden="true" className="lucide lucide-users w-4 h-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<div className="">
<span className="text-sm text-white/60">Our coaches are on the floor, correcting form and pushing you, not sitting in an office.</span>
</div>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 p-1 rounded bg-blue-900/50 text-blue-400">
<svg aria-hidden="true" className="lucide lucide-activity w-4 h-4" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<div className="">
<span className="text-sm text-white/60">We track body composition and strength metrics so you know exactly how you're progressing.</span>
</div>
</li>
</ul>
</div>
<div className="relative animate-on-scroll">
<div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
<div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay z-10"></div>
<img alt="Coach helping client with weights" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>

<div className="absolute -bottom-6 -left-6 bg-neutral-900 border border-white/10 p-6 rounded-xl shadow-xl z-20 max-w-xs">
<div className="flex items-center gap-4 mb-3">
<div className="p-2 bg-blue-600 rounded-lg text-white">
<svg aria-hidden="true" className="lucide lucide-dumbbell w-6 h-6" data-lucide="dumbbell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z"></path><path d="m2.5 21.5 1.4-1.4"></path><path d="m20.1 3.9 1.4-1.4"></path><path d="M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z"></path><path d="m9.6 14.4 4.8-4.8"></path></svg>
</div>
<div className="">
<p className="font-bold text-white">No Intimidation</p>
<p className="text-xs text-white/50">Beginner Friendly</p>
</div>
</div>
<p className="text-xs text-white/70">"I was scared to lift weights until I joined FitMap Now it's the best part of my day."</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900 border-y border-white/5" id="programs">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
<h2 className="text-4xl font-bold text-white mb-4">Training Built for <span className="text-blue-500">Real People</span></h2>
<p className="text-white/60 text-lg">Whether you want to lose fat, build muscle, or just move better, we have a structured pathway for you.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group relative bg-neutral-950 border border-white/10 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 animate-on-scroll">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="mb-6 inline-flex p-3 bg-neutral-900 rounded-xl text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<svg aria-hidden="true" className="lucide lucide-zap w-8 h-8" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-2xl font-bold text-white mb-3">Fast Track Shape-Up</h3>
<p className="text-white/60 mb-6 text-sm leading-relaxed">Our signature program for rapid, sustainable fat loss. Perfect for beginners or those returning to fitness.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center text-sm text-white/80"><svg aria-hidden="true" className="lucide lucide-check w-4 h-4 text-blue-500 mr-2" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Nutritional Guidance</li>
<li className="flex items-center text-sm text-white/80"><svg aria-hidden="true" className="lucide lucide-check w-4 h-4 text-blue-500 mr-2" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> High Energy Workouts</li>
<li className="flex items-center text-sm text-white/80"><svg aria-hidden="true" className="lucide lucide-check w-4 h-4 text-blue-500 mr-2" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Weekly Check-ins</li>
</ul>
<a className="block w-full py-3 text-center text-sm font-semibold text-white bg-white/5 border border-white/10 rounded-lg hover:bg-blue-600 hover:border-blue-600 transition-colors" href="#join">Get Started</a>
</div>

<div className="group relative bg-neutral-950 border border-white/10 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 animate-on-scroll" style={{animationDelay: '0.1s'}}>
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="mb-6 inline-flex p-3 bg-neutral-900 rounded-xl text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<svg aria-hidden="true" className="lucide lucide-biceps-flexed w-8 h-8" data-lucide="biceps-flexed" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.409 13.017A5 5 0 0 1 22 15c0 3.866-4 7-9 7-4.077 0-8.153-.82-10.371-2.462-.426-.316-.631-.832-.62-1.362C2.118 12.723 2.627 2 10 2a3 3 0 0 1 3 3 2 2 0 0 1-2 2c-1.105 0-1.64-.444-2-1"></path><path d="M15 14a5 5 0 0 0-7.584 2"></path><path d="M9.964 6.825C8.019 7.977 9.5 13 8 15"></path></svg>
</div>
<h3 className="text-2xl font-bold text-white mb-3">Strength &amp; Muscle</h3>
<p className="text-white/60 mb-6 text-sm leading-relaxed">Hypertrophy and strength focused programming for those looking to build a physique.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center text-sm text-white/80"><svg aria-hidden="true" className="lucide lucide-check w-4 h-4 text-blue-500 mr-2" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Progressive Overload</li>
<li className="flex items-center text-sm text-white/80"><svg aria-hidden="true" className="lucide lucide-check w-4 h-4 text-blue-500 mr-2" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Form Correction</li>
<li className="flex items-center text-sm text-white/80"><svg aria-hidden="true" className="lucide lucide-check w-4 h-4 text-blue-500 mr-2" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Strength Benchmarks</li>
</ul>
<a className="block w-full py-3 text-center text-sm font-semibold text-white bg-white/5 border border-white/10 rounded-lg hover:bg-blue-600 hover:border-blue-600 transition-colors" href="#join">Get Started</a>
</div>

<div className="group relative bg-neutral-950 border border-white/10 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 animate-on-scroll" style={{animationDelay: '0.2s'}}>
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="mb-6 inline-flex p-3 bg-neutral-900 rounded-xl text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<svg aria-hidden="true" className="lucide lucide-heart-pulse w-8 h-8" data-lucide="heart-pulse" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path><path d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"></path></svg>
</div>
<h3 className="text-2xl font-bold text-white mb-3">Health &amp; Longevity</h3>
<p className="text-white/60 mb-6 text-sm leading-relaxed">Functional fitness designed to improve movement, stamina, and overall health markers.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center text-sm text-white/80"><svg aria-hidden="true" className="lucide lucide-check w-4 h-4 text-blue-500 mr-2" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Cardiovascular Health</li>
<li className="flex items-center text-sm text-white/80"><svg aria-hidden="true" className="lucide lucide-check w-4 h-4 text-blue-500 mr-2" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Mobility Work</li>
<li className="flex items-center text-sm text-white/80"><svg aria-hidden="true" className="lucide lucide-check w-4 h-4 text-blue-500 mr-2" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Injury Prevention</li>
</ul>
<a className="block w-full py-3 text-center text-sm font-semibold text-white bg-white/5 border border-white/10 rounded-lg hover:bg-blue-600 hover:border-blue-600 transition-colors" href="#join">Get Started</a>
</div>
</div>
</div>
</section>

<section className="relative py-24 overflow-hidden" id="success">

<div className="absolute inset-0 bg-neutral-900">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&amp;w=2874&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-20 mix-blend-luminosity"></div>
<div className="bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="animate-on-scroll">
<div className="inline-block px-3 py-1 mb-6 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-widest">Success Stories</div>
<h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Real People.<br/>Real Results.</h2>
<p className="text-xl text-white/70 mb-8 max-w-md">
            We don't sell memberships. We sell the result of hard work and good guidance. Join a community of people dedicated to bettering themselves.
          </p>
<div className="flex gap-4">
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-blue-700 rounded-full hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-900/50" href="#join">
              Start Your Transformation
            </a>
</div>
</div>
<div className="animate-on-scroll relative">

<div className="bg-neutral-900/80 backdrop-blur-md border border-white/10 p-8 rounded-2xl relative">
<svg aria-hidden="true" className="lucide lucide-quote absolute top-6 right-6 text-blue-700/20 w-16 h-16" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<div className="flex items-center gap-4 mb-6">
<div className="w-14 h-14 rounded-full bg-neutral-800 overflow-hidden border-2 border-blue-600">
<img alt="Member" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="">
<p className="text-white font-bold text-lg">David M.</p>
<p className="text-blue-400 text-sm">Lost 12kg in 4 months</p>
</div>
</div>
<p className="leading-relaxed text-lg italic text-white/80">"I wasted years at commercial gyms doing random exercises. The structure at FITMAP changed everything. The coaches actually care if you show up and do the work properly."</p>
<div className="mt-6 flex items-center gap-1 text-yellow-500">
<svg aria-hidden="true" className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-white/10 bg-neutral-950" id="join">
<div className="max-w-4xl mx-auto px-6 text-center animate-on-scroll">
<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to stop spinning your wheels?</h2>
<p className="text-lg text-white/60 mb-10 max-w-2xl mx-auto">
        Book a free assessment with one of our coaches. We'll discuss your goals, check your movement, and map out a plan for you. No pressure, just clarity.
      </p>
<form className="max-w-md mx-auto space-y-4">
<div className="grid grid-cols-2 gap-4">
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" placeholder="Name" type="text"/>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" placeholder="Phone" type="tel"/>
</div>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" placeholder="Email Address" type="email"/>
<button className="w-full bg-blue-700 hover:bg-blue-600 text-white font-bold py-4 rounded-lg transition-all shadow-lg hover:shadow-blue-900/40" type="button">
          Book My Free Assessment
        </button>
<p className="text-xs text-white/40 mt-4">By booking, you agree to our terms. We respect your privacy.</p>
</form>
</div>
</section>

<footer className="bg-black border-t border-white/10 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2">
<a className="flex items-center gap-3 mb-6" href="/">
<div className="flex bg-blue-700 w-8 h-8 border-white border rounded-full relative items-center justify-center"><img alt="Container background" className="absolute inset-0 w-full h-full object-cover" data-container-bg="true" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/10b60f9a-c1fd-4ddc-831e-3ad411c362c3_3840w.png"/>
</div>
<span className="uppercase text-xl font-bold text-white">BEATS<span className="text-blue-600">Gym</span></span>
</a>
<p className="text-sm text-white/50 max-w-sm mb-6">INDIA's premier results-based training facility. We bridge the gap between personal training and commercial gyms with structured coaching and accountability.</p>
<div className="flex gap-4">
<a className="text-white/40 hover:text-white transition-colors" href="#"><svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect className="" height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="text-white/40 hover:text-white transition-colors" href="#"><svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
<a className="text-white/40 hover:text-white transition-colors" href="#"><svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
</div>
</div>
<div>
<h4 className="text-white font-semibold mb-4">Programs</h4>
<ul className="space-y-2 text-sm text-white/60">
<li><a className="hover:text-blue-500 transition-colors" href="#">Fast Track Shape-Up</a></li>
<li><a className="hover:text-blue-500 transition-colors" href="#">Strength &amp; Conditioning</a></li>
<li><a className="hover:text-blue-500 transition-colors" href="#">Functional Fitness</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-4">Company</h4>
<ul className="space-y-2 text-sm text-white/60">
<li><a className="hover:text-blue-500 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-blue-500 transition-colors" href="#">Contact</a></li>
<li><a className="hover:text-blue-500 transition-colors" href="#">Careers</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-white/30">© 2024 Slater Health &amp; Fitness Club. All rights reserved.</p>
<p className="text-xs text-white/30 flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Open today: 05:00 - 21:00
        </p>
</div>
</div>
</footer>


    </>
  );
}
