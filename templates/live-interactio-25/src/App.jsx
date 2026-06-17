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



      // Initialize lucide icons with 1.5 stroke width
      window.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) {
          window.lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }

        const useCaseInput = document.getElementById('useCaseInput');
        const useCaseLabel = document.getElementById('useCaseLabel');
        const pills = Array.from(document.querySelectorAll('[data-usecase-pill]'));
        const cards = Array.from(document.querySelectorAll('[data-usecase-card]'));
        const form = document.getElementById('signup-form');
        const toast = document.getElementById('toast');
        const year = document.getElementById('year');
        const togglePasswordBtn = document.querySelector('[data-toggle-password]');
        const passwordInput = document.getElementById('password');

        year.textContent = new Date().getFullYear();

        function setSelectedUseCase(value) {
          useCaseInput.value = value;
          useCaseLabel.textContent = value;

          pills.forEach(p => {
            const active = p.getAttribute('data-usecase-pill') === value;
            p.classList.toggle('bg-white', active);
            p.classList.toggle('text-neutral-950', active);
            p.classList.toggle('border-white/10', !active);
            p.classList.toggle('bg-white/5', !active);
            p.classList.toggle('hover:bg-white/10', !active);
            p.classList.toggle('hover:border-white/20', !active);
          });
        }

        // Default selection
        setSelectedUseCase(useCaseInput.value || 'Creators');

        // Card clicks -> select and scroll to form
        cards.forEach(card => {
          card.addEventListener('click', () => {
            const value = card.getAttribute('data-usecase-card');
            setSelectedUseCase(value);
            document.getElementById('signup').scrollIntoView({ behavior: 'smooth', block: 'start' });
          });
        });

        // Pill clicks -> select
        pills.forEach(p => {
          p.addEventListener('click', () => setSelectedUseCase(p.getAttribute('data-usecase-pill')));
        });

        // Password visibility toggle
        if (togglePasswordBtn && passwordInput) {
          togglePasswordBtn.addEventListener('click', () => {
            const isPassword = passwordInput.getAttribute('type') === 'password';
            passwordInput.setAttribute('type', isPassword ? 'text' : 'password');
            // swap icon
            togglePasswordBtn.innerHTML = isPassword
              ? '<svg xmlns="http://www.w3.org/2000/svg" class="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 3l18 18"/><path d="M10.6 10.6a4 4 0 0 0 5.657 5.657"/><path d="M9.88 4.24A10.94 10.94 0 0 1 12 4c7 0 10 8 10 8a13.32 13.32 0 0 1-4.21 5.69"/><path d="M6.61 6.61A13.32 13.32 0 0 0 2 12s3 8 10 8a10.94 10.94 0 0 0 3.76-.64"/></svg>'
              : '<i data-lucide="eye" class="w-4.5 h-4.5"></i>';
            if (window.lucide) window.lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
          });
        }

        // Demo submit (no backend)
        form.addEventListener('submit', (e) => {
          e.preventDefault();
          // Very light validation
          const data = new FormData(form);
          const name = data.get('name');
          const email = data.get('email');
          if (!name || !email) return;

          // Show toast
          toast.classList.remove('hidden');
          setTimeout(() => toast.classList.add('hidden'), 2800);

          // Clear password only
          document.getElementById('password').value = '';
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
      

<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 bg-neutral-950/80 border-b border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6">
<div className="h-16 flex items-center justify-between">

<a className="inline-flex items-center font-semibold tracking-tight text-white text-xl sm:text-2xl" href="#">
<span className="sr-only">Forti</span>
<span aria-hidden="true" className="uppercase">FORTI</span>
</a>
<nav className="hidden md:flex items-center gap-6 text-sm">
<a className="text-neutral-300 hover:text-white transition-colors" href="#use-cases">Use cases</a>
<a className="text-neutral-300 hover:text-white transition-colors" href="#signup">Sign up</a>
<a className="inline-flex items-center gap-2 text-neutral-300 hover:text-white transition-colors" href="#contact">
<svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
              Contact
            </a>
</nav>
<div className="md:hidden">
<a className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white hover:bg-white/10 hover:border-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 transition" href="#signup">
<svg className="lucide lucide-user-plus w-4 h-4" data-lucide="user-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg>
              Sign up
            </a>
</div>
</div>
</div>
</header>
<main className="">

<section className="relative overflow-hidden">
<div className="mx-auto max-w-7xl px-4 sm:px-6 pt-14 sm:pt-20">
<div className="mx-auto max-w-3xl text-center">
<p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-neutral-400">
<span className="inline-flex size-1.5 rounded-full bg-emerald-400/80 shadow-[0_0_12px_rgba(16,185,129,0.65)]"></span>
              Live interaction platform
            </p>
<h1 className="mt-4 text-4xl sm:text-6xl md:text-7xl tracking-tight font-semibold text-white">
              YOU SHAPE THE SHOW
            </h1>
<p className="mt-4 sm:mt-6 text-base sm:text-lg text-neutral-400">
              The stream is not the product, the interaction is.
            </p>
<p className="mt-2 text-sm sm:text-base text-neutral-400">
              Pick a use case to explore—or sign up and start hosting in minutes.
            </p>
<div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
<a className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-5 py-2.5 text-sm font-medium text-neutral-950 hover:bg-orange-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/40 transition" href="#signup">
<svg className="lucide lucide-rocket w-4.5 h-4.5" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
                Start Hosting
              </a>
<a className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/10 hover:border-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 transition" href="#use-cases">
<svg className="lucide lucide-grid w-4.5 h-4.5" data-lucide="grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M3 15h18"></path><path d="M9 3v18"></path><path d="M15 3v18"></path></svg>
                Explore Use Cases
              </a>
</div>
</div>

<div className="mt-12 sm:mt-16 border-t border-white/10"></div>
</div>

<div className="pointer-events-none absolute inset-x-0 -top-20 blur-3xl opacity-30">
<div className="mx-auto h-40 w-[36rem] bg-gradient-to-r from-emerald-500/30 via-sky-500/30 to-fuchsia-500/30 rounded-full"></div>
</div>
</section>

<section className="relative" id="use-cases">
<div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-14">
<div className="flex items-end justify-between gap-4">
<div className="">
<h2 className="text-2xl sm:text-3xl tracking-tight font-semibold text-white">Choose your use case</h2>
<p className="mt-1 text-sm text-neutral-400">Select one to prefill sign up—switch anytime.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-white transition-colors" href="#signup">
<svg className="lucide lucide-arrow-right w-4.5 h-4.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              Skip to sign up
            </a>
</div>
<div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">

<button className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20" data-usecase-card="Education">
<img alt="Interactive class session" className="h-64 w-full object-cover opacity-90 transition duration-300 group-hover:opacity-100" src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
<div className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between">
<div className="">
<div className="flex items-center gap-2">
<svg className="lucide lucide-graduation-cap w-5 h-5 text-white/95" data-lucide="graduation-cap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
<h3 className="text-xl tracking-tight font-semibold text-white">Education</h3>
</div>
<p className="line-clamp-2 text-sm text-neutral-300 mt-1" data-element-id="aura-emgffh0ik2uv4fu2" data-element-locator="html &gt; body:nth-of-type(1) &gt; main:nth-of-type(1) &gt; section:nth-of-type(2) &gt; div:nth-of-type(1) &gt; div:nth-of-type(2) &gt; button:nth-of-type(1) &gt; div:nth-of-type(2) &gt; div:nth-of-type(1) &gt; p:nth-of-type(1)" style={{}}>Students review classes, debate, and build critical thinking through live interaction.</p>
</div>
<div className="opacity-90 group-hover:opacity-100 transition">
<span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-1 text-xs text-white">
                    Select
                    <svg className="lucide lucide-chevron-right w-3.5 h-3.5" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</span>
</div>
</div>
</button>
<button className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20" data-usecase-card="Corporate">
<img alt="Corporate all‑hands with Q&amp;A" className="h-64 w-full object-cover opacity-90 transition duration-300 group-hover:opacity-100" src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
<div className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between">
<div className="">
<div className="flex items-center gap-2">
<svg className="lucide lucide-briefcase w-5 h-5 text-white/95" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
<h3 className="text-xl tracking-tight font-semibold text-white">Corporate</h3>
</div>
<p className="mt-1 text-sm text-neutral-300 line-clamp-2">Run interactive all‑hands, AMAs, and workshops that keep teams engaged.</p>
</div>
<div className="opacity-90 group-hover:opacity-100 transition">
<span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-1 text-xs text-white">
                    Select
                    <svg className="lucide lucide-chevron-right w-3.5 h-3.5" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</span>
</div>
</div>
</button>
<button className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20" data-usecase-card="Creators">
<img alt="Creator hosting interactive show" className="h-64 w-full object-cover opacity-90 transition duration-300 group-hover:opacity-100" src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
<div className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between">
<div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-mic-2 w-5 h-5 text-white/95" data-lucide="mic-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12"></path><path d="M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5"></path><circle cx="16" cy="7" r="5"></circle></svg>
<h3 className="text-xl tracking-tight font-semibold text-white">Creators</h3>
</div>
<p className="mt-1 text-sm text-neutral-300 line-clamp-2">Bring fans on stage, run live polls, and monetize moments—no OBS, no setup.</p>
</div>
<div className="opacity-90 group-hover:opacity-100 transition">
<span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-1 text-xs text-white">
                    Select
                    <svg className="lucide lucide-chevron-right w-3.5 h-3.5" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</span>
</div>
</div>
</button>
<button className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20" data-usecase-card="Friends">
<img alt="Friends playing live interactive games" className="h-64 w-full object-cover opacity-90 transition duration-300 group-hover:opacity-100" src="https://images.unsplash.com/photo-1521334884684-d80222895322?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
<div className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between">
<div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-users w-5 h-5 text-white/95" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<h3 className="text-xl tracking-tight font-semibold text-white">Friends</h3>
</div>
<p className="mt-1 text-sm text-neutral-300 line-clamp-2">Host game nights, debates, and competitions—everyone gets a voice.</p>
</div>
<div className="opacity-90 group-hover:opacity-100 transition">
<span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-1 text-xs text-white">
                    Select
                    <svg className="lucide lucide-chevron-right w-3.5 h-3.5" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</span>
</div>
</div>
</button>
</div>
</div>
</section>

<section className="relative" id="signup">
<div className="mx-auto max-w-7xl px-4 sm:px-6 pb-16">
<div className="rounded-2xl border border-white/10 bg-neutral-900/40 p-5 sm:p-8">
<div className="flex flex-col md:flex-row md:items-start gap-8">
<div className="md:w-1/2">
<h3 className="text-2xl tracking-tight font-semibold text-white">Start hosting now</h3>
<p className="mt-1 text-sm text-neutral-400">We’ll tailor your setup to your use case. Change anytime.</p>

<div aria-label="Select use case" className="mt-4 flex flex-wrap gap-2" role="group">
<button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white hover:bg-white/10 hover:border-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 transition" data-usecase-pill="Education" type="button">
<svg className="lucide lucide-graduation-cap w-4 h-4" data-lucide="graduation-cap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
                    Education
                  </button>
<button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white hover:bg-white/10 hover:border-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 transition" data-usecase-pill="Corporate" type="button">
<svg className="lucide lucide-briefcase w-4 h-4" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
                    Corporate
                  </button>
<button className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 transition bg-white text-neutral-950" data-usecase-pill="Creators" type="button">
<svg className="lucide lucide-mic-2 w-4 h-4" data-lucide="mic-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12"></path><path d="M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5"></path><circle cx="16" cy="7" r="5"></circle></svg>
                    Creators
                  </button>
<button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white hover:bg-white/10 hover:border-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 transition" data-usecase-pill="Friends" type="button">
<svg className="lucide lucide-users w-4 h-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
                    Friends
                  </button>
</div>
<ul className="mt-6 space-y-2 text-sm text-neutral-400">
<li className="flex items-start gap-2"><svg className="lucide lucide-check-circle w-4.5 h-4.5 mt-0.5 text-emerald-400" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span>No OBS. No setup. Just turn up.</span></li>
<li className="flex items-start gap-2"><svg className="lucide lucide-check-circle w-4.5 h-4.5 mt-0.5 text-emerald-400" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span>Bring people on stage, run polls, take votes.</span></li>
<li className="flex items-start gap-2"><svg className="lucide lucide-check-circle w-4.5 h-4.5 mt-0.5 text-emerald-400" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg><span>Monetize interactions, not just views.</span></li>
</ul>
</div>
<div className="md:w-1/2">
<form className="rounded-xl border border-white/10 bg-neutral-950/60 p-5 sm:p-6" id="signup-form">
<input id="useCaseInput" name="useCase" type="hidden" value="Creators"/>
<div className="grid grid-cols-1 gap-4">
<div>
<label className="block text-xs text-neutral-400 mb-1" htmlFor="name">Full name</label>
<input className="w-full rounded-md border border-white/10 bg-neutral-900/60 px-3 py-2 text-sm text-white placeholder:text-neutral-500 outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20" id="name" name="name" placeholder="Jane Doe" required="" type="text"/>
</div>
<div>
<label className="block text-xs text-neutral-400 mb-1" htmlFor="email">Email</label>
<input className="w-full rounded-md border border-white/10 bg-neutral-900/60 px-3 py-2 text-sm text-white placeholder:text-neutral-500 outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20" id="email" name="email" placeholder="jane@company.com" required="" type="email"/>
</div>
<div>
<label className="block text-xs text-neutral-400 mb-1" htmlFor="password">Password</label>
<div className="relative">
<input className="w-full rounded-md border border-white/10 bg-neutral-900/60 px-3 py-2 pr-10 text-sm text-white placeholder:text-neutral-500 outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20" id="password" name="password" placeholder="Create a password" required="" type="password"/>
<button aria-label="Show password" className="absolute inset-y-0 right-0 px-3 text-neutral-400 hover:text-white outline-none" data-toggle-password="" type="button">
<svg className="lucide lucide-eye w-4.5 h-4.5" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
</div>
</div>
<div className="flex items-center justify-between">
<div className="text-xs text-neutral-400">
                        Selected: <span className="font-medium text-white" id="useCaseLabel">Creators</span>
</div>
<button className="inline-flex items-center gap-2 rounded-md bg-orange-500 px-4 py-2 text-sm font-medium text-neutral-950 hover:bg-orange-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/40 transition" type="submit">
<svg className="lucide lucide-user-plus w-4.5 h-4.5" data-lucide="user-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg>
                        Create account
                      </button>
</div>
</div>
<p className="mt-3 text-[11px] text-neutral-500">By signing up, you agree to our Terms and Privacy Policy.</p>
</form>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10" id="contact">
<div className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
<div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">
<div className="text-center sm:text-left">
<div className="font-semibold tracking-tight text-white text-xl uppercase">FORTI</div>
<p className="mt-2 text-sm text-neutral-400">Live interaction for creators, teams, educators, and friends.</p>
</div>
<div className="flex items-center gap-6 text-sm">
<a className="text-neutral-300 hover:text-white transition-colors" href="#use-cases">Use cases</a>
<a className="text-neutral-300 hover:text-white transition-colors" href="#signup">Sign up</a>
<a className="inline-flex items-center gap-2 text-neutral-300 hover:text-white transition-colors" href="mailto:hello@forti.app">
<svg className="lucide lucide-mail w-4.5 h-4.5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
                hello@forti.app
              </a>
</div>
</div>
<div className="mt-8 pt-6 border-t border-white/10 text-xs text-neutral-500 flex items-center justify-between">
<span>© <span id="year">2025</span> Forti</span>
<div className="flex items-center gap-4">
<a className="hover:text-neutral-300" href="#">Terms</a>
<a className="hover:text-neutral-300" href="#">Privacy</a>
</div>
</div>
</div>
</footer>
</main>

<div className="fixed top-3 right-3 z-50 hidden" id="toast">
<div className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-neutral-900/90 px-3 py-2 text-sm text-white shadow-lg">
<svg className="lucide lucide-check-circle-2 w-4.5 h-4.5 text-emerald-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span>Account created. Check your email to verify.</span>
</div>
</div>




    </>
  );
}
