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



    // Init icons
    document.addEventListener('DOMContentLoaded', () => {
      if (window.lucide && lucide.createIcons) lucide.createIcons();
      document.getElementById('year').textContent = new Date().getFullYear();
    });

    // Mobile menu toggle
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    if (menuBtn) {
      menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    }
    mobileMenu?.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => mobileMenu.classList.add('hidden'));
    });

    // Simple router for hash-based pages and sections
    const pages = {
      home: document.getElementById('page-home'),
      team: document.getElementById('page-team'),
      join: document.getElementById('page-join')
    };

    const navLinks = Array.from(document.querySelectorAll('header nav a, #mobileMenu a'));
    function setActiveNav(hash) {
      const pageKey = getPageFromHash(hash);
      const activeTargets = new Set([
        pageKey === 'home' ? '#home' : `#${pageKey}`,
        // Keep section link active when on that section
        hash
      ]);
      navLinks.forEach(link => {
        const isActive = activeTargets.has(link.getAttribute('href'));
        link.classList.toggle('text-slate-900', isActive);
        link.classList.toggle('font-semibold', isActive);
      });
    }

    function getPageFromHash(hash) {
      const h = (hash || location.hash || '#home').toLowerCase();
      if (h === '#team') return 'team';
      if (h === '#join' || h.startsWith('#join-')) return 'join';
      // All other anchors belong to the Home page
      return 'home';
    }

    function showPage(key) {
      Object.entries(pages).forEach(([k, el]) => {
        if (!el) return;
        if (k === key) el.classList.remove('hidden');
        else el.classList.add('hidden');
      });
    }

    function scrollToSectionIfOnHome(hash) {
      const sectionIds = ['#home', '#services', '#testimonials', '#resources', '#faq', '#contact'];
      if (!hash || !sectionIds.includes(hash)) return;
      // Use offset to account for sticky header
      const target = document.querySelector(`${hash}`);
      if (target) {
        const headerOffset = 72;
        const rect = target.getBoundingClientRect();
        const top = rect.top + window.scrollY - headerOffset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }

    function route(hash) {
      const pageKey = getPageFromHash(hash);
      showPage(pageKey);
      setActiveNav(hash || '#home');
      if (pageKey === 'home') {
        // For in-page sections, smooth scroll
        scrollToSectionIfOnHome(hash);
      } else {
        // Scroll top on virtual pages
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }

    window.addEventListener('hashchange', () => route(location.hash));
    // Initial route
    route(location.hash || '#home');
  
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
      

<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-slate-200/60">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<a className="inline-flex items-center gap-2" href="#home">
<div className="h-8 w-8 rounded-xl bg-teal-600 grid place-items-center text-white shadow-sm">
<i className="h-4 w-4" data-lucide="sparkles"></i>
</div>
<span className="text-xl font-semibold tracking-tight text-slate-900">Solus</span>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-slate-600 hover:text-slate-900 text-sm font-medium" href="#home">Home</a>
<a className="text-slate-600 hover:text-slate-900 text-sm font-medium" href="#services">Services</a>
<a className="text-slate-600 hover:text-slate-900 text-sm font-medium" href="#testimonials">Stories</a>
<a className="text-slate-600 hover:text-slate-900 text-sm font-medium" href="#resources">Resources</a>
<a className="text-slate-600 hover:text-slate-900 text-sm font-medium" href="#team">Our Team</a>
<a className="text-slate-600 hover:text-slate-900 text-sm font-medium" href="#join">Join Us</a>
<a className="text-slate-600 hover:text-slate-900 text-sm font-medium" href="#contact">Contact</a>
</nav>
<div className="hidden md:flex items-center gap-3">
<a className="text-sm font-medium text-slate-700 hover:text-slate-900" href="#">Sign in</a>
<a className="inline-flex items-center gap-2 rounded-full bg-teal-800 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-teal-700 transition" href="#contact">
            Get Started
            <i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
<button className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-full border border-slate-200 text-slate-700 hover:bg-slate-100" id="menuBtn">
<i className="h-5 w-5" data-lucide="menu"></i>
</button>
</div>

<div className="md:hidden hidden pb-4" id="mobileMenu">
<div className="grid gap-1">
<a className="px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-100 text-sm font-medium" href="#home">Home</a>
<a className="px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-100 text-sm font-medium" href="#services">Services</a>
<a className="px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-100 text-sm font-medium" href="#testimonials">Stories</a>
<a className="px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-100 text-sm font-medium" href="#resources">Resources</a>
<a className="px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-100 text-sm font-medium" href="#team">Our Team</a>
<a className="px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-100 text-sm font-medium" href="#join">Join Us</a>
<a className="px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-100 text-sm font-medium" href="#contact">Contact</a>
<div className="px-3 pt-2">
<a className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-teal-800 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-teal-700 transition" href="#contact">
              Get Started
              <i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</div>
</header>

<main id="page-home">

<section className="relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mt-8 md:mt-14 bg-amber-50 rounded-3xl overflow-hidden relative">

<svg aria-hidden="true" className="absolute -top-10 -left-10 h-40 w-40 text-amber-200" fill="currentColor" viewbox="0 0 100 100">
<circle cx="50" cy="50" r="50"></circle>
</svg>
<svg aria-hidden="true" className="absolute -bottom-8 left-6 h-24 w-24 text-emerald-200" fill="currentColor" viewbox="0 0 100 100">
<rect height="100" rx="16" width="100"></rect>
</svg>
<svg aria-hidden="true" className="absolute top-8 right-8 h-10 w-10 text-slate-800" fill="currentColor" viewbox="0 0 24 24">
<circle cx="6" cy="6" r="3"></circle>
<circle cx="18" cy="18" r="3"></circle>
</svg>
<div className="grid md:grid-cols-2 gap-10 items-center p-6 sm:p-10 lg:p-16">
<div>
<div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs font-medium text-slate-700 border border-slate-200/70">
<i className="h-3.5 w-3.5 text-teal-700" data-lucide="leaf"></i>
                Holistic care, evidence‑based
              </div>
<h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
                Support for Your Mental Well‑being
              </h1>
<p className="mt-4 text-base md:text-lg text-slate-700 max-w-xl">
                Connect with licensed therapists, counselors, and wellness coaches who can support your journey with compassion and clarity.
              </p>
<div className="mt-6 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-full bg-teal-800 text-white px-5 py-3 text-sm font-medium shadow-sm hover:bg-teal-700 transition" href="#contact">
                  Get Started
                  <i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex items-center gap-2 rounded-full bg-white text-slate-800 px-5 py-3 text-sm font-medium border border-slate-200 hover:bg-slate-50" href="#services">
                  Explore Services
                  <i className="h-4 w-4" data-lucide="compass"></i>
</a>
</div>
</div>
<div className="relative">
<div className="aspect-[4/3] md:aspect-[5/4] rounded-2xl overflow-hidden shadow-sm ring-1 ring-slate-900/5">
<img alt="Calming abstract 3D render" className="h-full w-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
<div className="absolute -bottom-6 -right-4 hidden md:block bg-white rounded-2xl shadow-lg p-4 ring-1 ring-slate-900/5">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-teal-600/10 grid place-items-center text-teal-700">
<i className="h-5 w-5" data-lucide="heart-handshake"></i>
</div>
<div>
<p className="text-sm font-medium text-slate-900">1:1 Sessions</p>
<p className="text-xs text-slate-600">Book securely in minutes</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-20" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-2 gap-10 items-center">
<div className="space-y-4">
<p className="text-teal-800 font-medium">Care, Clarity</p>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
              We Help You Prioritize Your Mental Health
            </h2>
<p className="text-slate-700">
              Personalized therapy, group sessions, and guided practices led by caring, vetted mental health professionals.
            </p>
<a className="inline-flex items-center gap-2 rounded-full bg-teal-800 text-white px-4 py-2 text-sm font-medium hover:bg-teal-700 transition" href="#contact">
              Find a Therapist
              <i className="h-4 w-4" data-lucide="user-search"></i>
</a>
</div>
<div className="mx-auto w-full max-w-md">
<div className="rounded-3xl bg-teal-900 text-white p-6 md:p-8 relative overflow-hidden">
<div className="absolute -top-10 -right-10 h-32 w-32 bg-teal-700/40 rounded-full"></div>
<div className="aspect-square rounded-2xl bg-white/10 overflow-hidden ring-1 ring-white/10">
<img alt="Gentle abstract circle" className="h-full w-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-4">
<p className="text-sm text-teal-100">A grounded space to reflect and grow</p>
</div>
</div>
</div>
</div>

<div className="mt-10 grid md:grid-cols-2 gap-6">
<div className="bg-white rounded-2xl p-6 ring-1 ring-slate-900/5 shadow-sm">
<div className="flex items-start gap-4">
<div className="h-11 w-11 rounded-xl bg-amber-100 text-amber-700 grid place-items-center">
<i className="h-5 w-5" data-lucide="sun"></i>
</div>
<div className="flex-1">
<h3 className="text-xl font-semibold tracking-tight text-slate-900">Mindfulness &amp; Meditation</h3>
<p className="mt-2 text-slate-700 text-sm">
                  Gentle, accessible practices for presence, stress management, and emotional balance.
                </p>
<div className="mt-4">
<a className="inline-flex items-center gap-2 text-teal-800 font-medium" href="#">
                    Learn More
                    <i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</div>
<div className="bg-white rounded-2xl p-6 ring-1 ring-slate-900/5 shadow-sm">
<div className="flex items-start gap-4">
<div className="h-11 w-11 rounded-xl bg-emerald-100 text-emerald-700 grid place-items-center">
<i className="h-5 w-5" data-lucide="message-square-heart"></i>
</div>
<div className="flex-1">
<h3 className="text-xl font-semibold tracking-tight text-slate-900">One‑on‑One Therapy</h3>
<p className="mt-2 text-slate-700 text-sm">
                  Work 1:1 with licensed therapists through private, secure sessions focused on your goals.
                </p>
<div className="mt-4">
<a className="inline-flex items-center gap-2 text-teal-800 font-medium" href="#">
                    Learn More
                    <i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</div>
</div>

<div className="mt-6">
<div className="bg-white rounded-2xl p-6 md:p-8 ring-1 ring-slate-900/5 shadow-sm flex flex-col md:flex-row items-center gap-6">
<div className="h-16 w-16 rounded-2xl bg-rose-100 text-rose-700 grid place-items-center shrink-0">
<i className="h-6 w-6" data-lucide="dumbbell"></i>
</div>
<div className="flex-1">
<h3 className="text-xl font-semibold tracking-tight text-slate-900">Wellness Coaching</h3>
<p className="mt-1 text-slate-700 text-sm">
                Personalized guidance to build healthier habits, restore balance, and create a life you’re proud of.
              </p>
</div>
<a className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-4 py-2 text-sm font-medium hover:bg-slate-800 transition" href="#">
              Learn More
              <i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-20" id="testimonials">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-3 gap-6 items-start">
<div className="md:col-span-1">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
              What Our Clients Are Saying
            </h2>
<p className="mt-3 text-slate-700">
              Meaningful stories from clients who benefited from therapy and wellness programs.
            </p>
</div>
<div className="md:col-span-2 grid sm:grid-cols-2 gap-6">
<article className="bg-white rounded-2xl p-6 ring-1 ring-slate-900/5 shadow-sm">
<div className="flex items-center gap-3">
<img alt="Client avatar" className="h-10 w-10 rounded-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<div className="flex items-center gap-1 text-amber-500">
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-sm font-medium text-slate-900">Alex R.</p>
</div>
</div>
<p className="mt-3 text-slate-700 text-sm">
                “I finally have the space to reflect and reset. The sessions are gentle, practical, and truly transformative.”
              </p>
</article>
<article className="bg-white rounded-2xl p-6 ring-1 ring-slate-900/5 shadow-sm">
<div className="flex items-center gap-3">
<img alt="Client avatar" className="h-10 w-10 rounded-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<div className="flex items-center gap-1 text-amber-500">
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
<i className="h-4 w-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-sm font-medium text-slate-900">Jamie K.</p>
</div>
</div>
<p className="mt-3 text-slate-700 text-sm">
                “Practical tools and compassionate guidance helped me create momentum and regain balance.”
              </p>
</article>
</div>
</div>

<div className="mt-10">
<div className="bg-white rounded-2xl p-4 ring-1 ring-slate-900/5 shadow-sm">
<div className="flex items-center gap-4 px-2">

<div className="shrink-0 basis-[15%] md:basis-[12%]">
<div className="text-slate-500 text-sm font-medium">Our Partners</div>
</div>

<div className="relative overflow-hidden grow group">

<div className="flex items-center gap-10 w-max [animation-play-state:running] group-hover:[animation-play-state:paused]" style={{animation: 'partner-marquee 38s linear infinite'}}>

<div className="flex items-center gap-10 pr-10">
<img alt="WealthSimple" className="h-8 sm:h-10 w-auto object-contain rounded-md ring-1 ring-slate-200 grayscale hover:grayscale-0 opacity-90 hover:opacity-100 transition" loading="lazy" src="https://dummyimage.com/160x48/f8fafc/0f172a.png&amp;text=WealthSimple"/>
<img alt="Notion" className="h-8 sm:h-10 w-auto object-contain rounded-md ring-1 ring-slate-200 grayscale hover:grayscale-0 opacity-90 hover:opacity-100 transition" loading="lazy" src="https://dummyimage.com/160x48/f8fafc/0f172a.png&amp;text=Notion"/>
<img alt="Medium" className="h-8 sm:h-10 w-auto object-contain rounded-md ring-1 ring-slate-200 grayscale hover:grayscale-0 opacity-90 hover:opacity-100 transition" loading="lazy" src="https://dummyimage.com/160x48/f8fafc/0f172a.png&amp;text=Medium"/>
<img alt="Stripe" className="h-8 sm:h-10 w-auto object-contain rounded-md ring-1 ring-slate-200 grayscale hover:grayscale-0 opacity-90 hover:opacity-100 transition" loading="lazy" src="https://dummyimage.com/160x48/f8fafc/0f172a.png&amp;text=Stripe"/>
<img alt="Sonos" className="h-8 sm:h-10 w-auto object-contain rounded-md ring-1 ring-slate-200 grayscale hover:grayscale-0 opacity-90 hover:opacity-100 transition" loading="lazy" src="https://dummyimage.com/160x48/f8fafc/0f172a.png&amp;text=Sonos"/>
</div>

<div aria-hidden="true" className="flex items-center gap-10 pr-10">
<img alt="" className="h-8 sm:h-10 w-auto object-contain rounded-md ring-1 ring-slate-200 grayscale opacity-90 transition" src="https://dummyimage.com/160x48/f8fafc/0f172a.png&amp;text=WealthSimple"/>
<img alt="" className="h-8 sm:h-10 w-auto object-contain rounded-md ring-1 ring-slate-200 grayscale opacity-90 transition" src="https://dummyimage.com/160x48/f8fafc/0f172a.png&amp;text=Notion"/>
<img alt="" className="h-8 sm:h-10 w-auto object-contain rounded-md ring-1 ring-slate-200 grayscale opacity-90 transition" src="https://dummyimage.com/160x48/f8fafc/0f172a.png&amp;text=Medium"/>
<img alt="" className="h-8 sm:h-10 w-auto object-contain rounded-md ring-1 ring-slate-200 grayscale opacity-90 transition" src="https://dummyimage.com/160x48/f8fafc/0f172a.png&amp;text=Stripe"/>
<img alt="" className="h-8 sm:h-10 w-auto object-contain rounded-md ring-1 ring-slate-200 grayscale opacity-90 transition" src="https://dummyimage.com/160x48/f8fafc/0f172a.png&amp;text=Sonos"/>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-20 bg-slate-100" id="resources">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto">
<p className="text-teal-800 font-medium">Curated Library</p>
<h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
            Resources for Your Well‑being
          </h2>
<p className="mt-3 text-slate-700">
            Evidence‑based guides, meditations, and tools to support your mental health.
          </p>
</div>
<div className="mt-10 grid sm:grid-cols-3 gap-6">
<a className="group bg-white rounded-2xl p-6 ring-1 ring-slate-900/5 shadow-sm hover:shadow transition" href="#">
<div className="h-12 w-12 rounded-xl bg-amber-100 text-amber-700 grid place-items-center">
<i className="h-6 w-6" data-lucide="book-open"></i>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight text-slate-900">Articles &amp; Guides</h3>
<p className="mt-2 text-sm text-slate-700">
              Practical insights to reduce stress, improve sleep, and build resilience.
            </p>
<span className="mt-4 inline-flex items-center gap-2 text-teal-800 font-medium">
              Read
              <i className="h-4 w-4" data-lucide="arrow-right"></i>
</span>
</a>
<a className="group bg-white rounded-2xl p-6 ring-1 ring-slate-900/5 shadow-sm hover:shadow transition" href="#">
<div className="h-12 w-12 rounded-xl bg-emerald-100 text-emerald-700 grid place-items-center">
<i className="h-6 w-6" data-lucide="headphones"></i>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight text-slate-900">Meditation &amp; Relaxation</h3>
<p className="mt-2 text-sm text-slate-700">
              Audio sessions and breathwork designed to calm your mind and body.
            </p>
<span className="mt-4 inline-flex items-center gap-2 text-teal-800 font-medium">
              Explore
              <i className="h-4 w-4" data-lucide="arrow-right"></i>
</span>
</a>
<a className="group bg-white rounded-2xl p-6 ring-1 ring-slate-900/5 shadow-sm hover:shadow transition" href="#">
<div className="h-12 w-12 rounded-xl bg-rose-100 text-rose-700 grid place-items-center">
<i className="h-6 w-6" data-lucide="presentation"></i>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight text-slate-900">Webinars &amp; Workshops</h3>
<p className="mt-2 text-sm text-slate-700">
              Live and recorded sessions with experts on anxiety, burnout, and more.
            </p>
<span className="mt-4 inline-flex items-center gap-2 text-teal-800 font-medium">
              Join
              <i className="h-4 w-4" data-lucide="arrow-right"></i>
</span>
</a>
</div>
</div>
</section>

<section className="py-16 md:py-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-white rounded-3xl p-6 md:p-8 ring-1 ring-slate-900/5 shadow-sm grid md:grid-cols-2 gap-8 items-center">
<div>
<p className="text-teal-800 font-medium">Community</p>
<h3 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
              You’re Not Alone on This Journey
            </h3>
<p className="mt-3 text-slate-700">
              Connect with others, share experiences, and find encouragement in a safe, supportive space.
            </p>
<div className="mt-5">
<a className="inline-flex items-center gap-2 rounded-full bg-teal-800 text-white px-5 py-3 text-sm font-medium shadow-sm hover:bg-teal-700 transition" href="#">
                Join Free Community
                <i className="h-4 w-4" data-lucide="users"></i>
</a>
</div>
</div>
<div className="aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-slate-900/5">
<img alt="Minimal abstract with shapes" className="h-full w-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-20" id="faq">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-2 gap-10">
<div>
<p className="text-teal-800 font-medium">Help &amp; Info</p>
<h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
              Frequently Asked Questions
            </h2>
<p className="mt-3 text-slate-700">
              Answers to common questions about sessions, pricing, and mental well‑being.
            </p>
<div className="mt-8 hidden md:block">
<img alt="Calm illustration" className="rounded-2xl object-cover w-full h-64 ring-1 ring-slate-900/5" loading="lazy" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
</div>
</div>
<div className="grid gap-3">

<details className="group bg-white rounded-2xl p-5 ring-1 ring-slate-900/5 shadow-sm open:shadow">
<summary className="flex cursor-pointer items-center justify-between">
<span className="text-slate-900 font-medium">How soon can I start sessions?</span>
<span className="ml-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 group-open:bg-teal-100 text-slate-700 group-open:text-teal-800">
<i className="h-4 w-4 group-open:hidden" data-lucide="plus"></i>
<i className="h-4 w-4 hidden group-open:block" data-lucide="minus"></i>
</span>
</summary>
<p className="mt-3 text-sm text-slate-700">
                Most clients book within 24–72 hours. You’ll receive a confirmation and secure link immediately after scheduling.
              </p>
</details>
<details className="group bg-white rounded-2xl p-5 ring-1 ring-slate-900/5 shadow-sm">
<summary className="flex cursor-pointer items-center justify-between">
<span className="text-slate-900 font-medium">Do you offer online and in‑person meetings?</span>
<span className="ml-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 group-open:bg-teal-100 text-slate-700 group-open:text-teal-800">
<i className="h-4 w-4 group-open:hidden" data-lucide="plus"></i>
<i className="h-4 w-4 hidden group-open:block" data-lucide="minus"></i>
</span>
</summary>
<p className="mt-3 text-sm text-slate-700">
                Yes. Sessions are available through secure video, phone, or at select clinic locations.
              </p>
</details>
<details className="group bg-white rounded-2xl p-5 ring-1 ring-slate-900/5 shadow-sm">
<summary className="flex cursor-pointer items-center justify-between">
<span className="text-slate-900 font-medium">Can I switch therapists if it’s not the right fit?</span>
<span className="ml-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 group-open:bg-teal-100 text-slate-700 group-open:text-teal-800">
<i className="h-4 w-4 group-open:hidden" data-lucide="plus"></i>
<i className="h-4 w-4 hidden group-open:block" data-lucide="minus"></i>
</span>
</summary>
<p className="mt-3 text-sm text-slate-700">
                Absolutely. Your fit matters. We’ll help you transition seamlessly to another clinician.
              </p>
</details>
<details className="group bg-white rounded-2xl p-5 ring-1 ring-slate-900/5 shadow-sm">
<summary className="flex cursor-pointer items-center justify-between">
<span className="text-slate-900 font-medium">Is any information and session history kept confidential?</span>
<span className="ml-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 group-open:bg-teal-100 text-slate-700 group-open:text-teal-800">
<i className="h-4 w-4 group-open:hidden" data-lucide="plus"></i>
<i className="h-4 w-4 hidden group-open:block" data-lucide="minus"></i>
</span>
</summary>
<p className="mt-3 text-sm text-slate-700">
                Yes. We follow strict privacy standards and encrypt data end‑to‑end to protect your information.
              </p>
</details>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-20">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
          We’re Here to Support You
        </h2>
<p className="mt-3 text-slate-700">
          Whether you have questions or need help getting started, we’re here to listen—reach out anytime.
        </p>
</div>
</section>

<section className="pb-16 md:pb-24" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-2 gap-6">

<div className="bg-white rounded-2xl p-6 ring-1 ring-slate-900/5 shadow-sm">
<h3 className="text-xl font-semibold tracking-tight text-slate-900">Contact Details</h3>
<div className="mt-4 space-y-3 text-sm">
<p className="flex items-center gap-2">
<i className="h-4 w-4 text-teal-800" data-lucide="mail"></i>
                support@solus.com
              </p>
<p className="flex items-center gap-2">
<i className="h-4 w-4 text-teal-800" data-lucide="phone"></i>
                +1 (855) 402‑2900
              </p>
<p className="flex items-center gap-2">
<i className="h-4 w-4 text-teal-800" data-lucide="map-pin"></i>
                455 Market Street, Suite 900, San Francisco, CA
              </p>
<div className="pt-2 flex items-center gap-3">
<a aria-label="Twitter" className="h-9 w-9 rounded-full bg-slate-100 grid place-items-center text-slate-700 hover:text-slate-900" href="#">
<i className="h-4 w-4" data-lucide="twitter"></i>
</a>
<a aria-label="Instagram" className="h-9 w-9 rounded-full bg-slate-100 grid place-items-center text-slate-700 hover:text-slate-900" href="#">
<i className="h-4 w-4" data-lucide="instagram"></i>
</a>
<a aria-label="LinkedIn" className="h-9 w-9 rounded-full bg-slate-100 grid place-items-center text-slate-700 hover:text-slate-900" href="#">
<i className="h-4 w-4" data-lucide="linkedin"></i>
</a>
</div>
</div>
<p className="mt-6 text-xs text-slate-500">
              We typically respond within 24 hours on business days.
            </p>
</div>

<div className="bg-white rounded-2xl p-6 ring-1 ring-slate-900/5 shadow-sm">
<h3 className="text-xl font-semibold tracking-tight text-slate-900">Send Us a Message</h3>
<form className="mt-4 grid gap-4">
<div>
<label className="block text-sm font-medium text-slate-700" htmlFor="email">Email</label>
<input className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-700/20 focus:border-teal-700" id="email" name="email" placeholder="you@example.com" required="" type="email"/>
</div>
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-slate-700" htmlFor="name">Name</label>
<input className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-700/20 focus:border-teal-700" id="name" name="name" placeholder="Your name" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700" htmlFor="topic">Topic</label>
<select className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-700/20 focus:border-teal-700" id="topic" name="topic">
<option>Therapy</option>
<option>Coaching</option>
<option>Billing</option>
<option>Other</option>
</select>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700" htmlFor="message">Message</label>
<textarea className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-700/20 focus:border-teal-700" id="message" name="message" placeholder="How can we help?" rows="5"></textarea>
</div>
<button className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-800 text-white px-5 py-3 text-sm font-medium shadow-sm hover:bg-teal-700 transition" type="submit">
                Send Message
                <i className="h-4 w-4" data-lucide="send"></i>
</button>
</form>
</div>
</div>
</div>
</section>
</main>

<main className="hidden" id="page-team">
<section className="py-12 md:py-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto">
<p className="text-teal-800 font-medium">People Behind the Care</p>
<h1 className="mt-2 text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">Our Team</h1>
<p className="mt-3 text-slate-700">Experienced, compassionate professionals dedicated to your well‑being.</p>
</div>
<div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

<article className="group bg-white rounded-2xl p-5 ring-1 ring-slate-900/5 shadow-sm hover:shadow-md transition">
<div className="relative aspect-[4/3] rounded-xl overflow-hidden ring-1 ring-slate-900/5">
<img alt="Team member" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
<div className="absolute bottom-3 right-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition">
<a aria-label="LinkedIn" className="h-9 w-9 rounded-full bg-white/95 text-slate-800 grid place-items-center hover:bg-slate-100 ring-1 ring-slate-900/10" href="#">
<i className="h-4 w-4" data-lucide="linkedin"></i>
</a>
<a aria-label="Email" className="h-9 w-9 rounded-full bg-white/95 text-slate-800 grid place-items-center hover:bg-slate-100 ring-1 ring-slate-900/10" href="#">
<i className="h-4 w-4" data-lucide="mail"></i>
</a>
</div>
</div>
<div className="mt-4">
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Dr. Maya Chen</h3>
<p className="text-sm text-slate-600">Clinical Psychologist</p>
<div className="mt-3 flex flex-wrap gap-2">
<span className="inline-flex items-center rounded-full bg-slate-100 text-slate-700 px-2.5 py-1 text-xs">CBT</span>
<span className="inline-flex items-center rounded-full bg-slate-100 text-slate-700 px-2.5 py-1 text-xs">Trauma‑informed</span>
</div>
<details className="mt-4 rounded-xl bg-slate-50 p-3 ring-1 ring-slate-200 open:bg-slate-100 transition">
<summary className="flex items-center justify-between cursor-pointer">
<span className="text-sm font-medium text-slate-900">Read bio</span>
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-200 text-slate-700">
<i className="h-4 w-4 open:hidden" data-lucide="plus"></i>
</span>
</summary>
<p className="mt-2 text-sm text-slate-700">Maya supports adults navigating anxiety and life transitions with evidence‑based approaches and a warm, practical style.</p>
</details>
</div>
</article>

<article className="group bg-white rounded-2xl p-5 ring-1 ring-slate-900/5 shadow-sm hover:shadow-md transition">
<div className="relative aspect-[4/3] rounded-xl overflow-hidden ring-1 ring-slate-900/5">
<img alt="Team member" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
<div className="absolute bottom-3 right-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition">
<a aria-label="LinkedIn" className="h-9 w-9 rounded-full bg-white/95 text-slate-800 grid place-items-center hover:bg-slate-100 ring-1 ring-slate-900/10" href="#">
<i className="h-4 w-4" data-lucide="linkedin"></i>
</a>
<a aria-label="Email" className="h-9 w-9 rounded-full bg-white/95 text-slate-800 grid place-items-center hover:bg-slate-100 ring-1 ring-slate-900/10" href="#">
<i className="h-4 w-4" data-lucide="mail"></i>
</a>
</div>
</div>
<div className="mt-4">
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Jordan Patel</h3>
<p className="text-sm text-slate-600">Licensed Therapist</p>
<div className="mt-3 flex flex-wrap gap-2">
<span className="inline-flex items-center rounded-full bg-slate-100 text-slate-700 px-2.5 py-1 text-xs">Anxiety</span>
<span className="inline-flex items-center rounded-full bg-slate-100 text-slate-700 px-2.5 py-1 text-xs">Mindfulness</span>
</div>
<details className="mt-4 rounded-xl bg-slate-50 p-3 ring-1 ring-slate-200 open:bg-slate-100 transition">
<summary className="flex items-center justify-between cursor-pointer">
<span className="text-sm font-medium text-slate-900">Read bio</span>
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-200 text-slate-700">
<i className="h-4 w-4 open:hidden" data-lucide="plus"></i>
</span>
</summary>
<p className="mt-2 text-sm text-slate-700">Jordan blends mindfulness and solution‑focused therapy to help clients build resilience and clarity.</p>
</details>
</div>
</article>

<article className="group bg-white rounded-2xl p-5 ring-1 ring-slate-900/5 shadow-sm hover:shadow-md transition">
<div className="relative aspect-[4/3] rounded-xl overflow-hidden ring-1 ring-slate-900/5">
<img alt="Team member" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
<div className="absolute bottom-3 right-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition">
<a aria-label="LinkedIn" className="h-9 w-9 rounded-full bg-white/95 text-slate-800 grid place-items-center hover:bg-slate-100 ring-1 ring-slate-900/10" href="#">
<i className="h-4 w-4" data-lucide="linkedin"></i>
</a>
<a aria-label="Email" className="h-9 w-9 rounded-full bg-white/95 text-slate-800 grid place-items-center hover:bg-slate-100 ring-1 ring-slate-900/10" href="#">
<i className="h-4 w-4" data-lucide="mail"></i>
</a>
</div>
</div>
<div className="mt-4">
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Evelyn Brooks</h3>
<p className="text-sm text-slate-600">Wellness Coach</p>
<div className="mt-3 flex flex-wrap gap-2">
<span className="inline-flex items-center rounded-full bg-slate-100 text-slate-700 px-2.5 py-1 text-xs">Habits</span>
<span className="inline-flex items-center rounded-full bg-slate-100 text-slate-700 px-2.5 py-1 text-xs">Sleep</span>
</div>
<details className="mt-4 rounded-xl bg-slate-50 p-3 ring-1 ring-slate-200 open:bg-slate-100 transition">
<summary className="flex items-center justify-between cursor-pointer">
<span className="text-sm font-medium text-slate-900">Read bio</span>
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-200 text-slate-700">
<i className="h-4 w-4 open:hidden" data-lucide="plus"></i>
</span>
</summary>
<p className="mt-2 text-sm text-slate-700">Evelyn guides clients to sustainable lifestyle changes with structured, compassionate coaching.</p>
</details>
</div>
</article>

<article className="group bg-white rounded-2xl p-5 ring-1 ring-slate-900/5 shadow-sm hover:shadow-md transition">
<div className="relative aspect-[4/3] rounded-xl overflow-hidden ring-1 ring-slate-900/5">
<img alt="Team member" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
<div className="absolute bottom-3 right-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition">
<a aria-label="LinkedIn" className="h-9 w-9 rounded-full bg-white/95 text-slate-800 grid place-items-center hover:bg-slate-100 ring-1 ring-slate-900/10" href="#">
<i className="h-4 w-4" data-lucide="linkedin"></i>
</a>
<a aria-label="Email" className="h-9 w-9 rounded-full bg-white/95 text-slate-800 grid place-items-center hover:bg-slate-100 ring-1 ring-slate-900/10" href="#">
<i className="h-4 w-4" data-lucide="mail"></i>
</a>
</div>
</div>
<div className="mt-4">
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Luis Fernández</h3>
<p className="text-sm text-slate-600">Couples Therapist</p>
<div className="mt-3 flex flex-wrap gap-2">
<span className="inline-flex items-center rounded-full bg-slate-100 text-slate-700 px-2.5 py-1 text-xs">Relationships</span>
<span className="inline-flex items-center rounded-full bg-slate-100 text-slate-700 px-2.5 py-1 text-xs">Communication</span>
</div>
<details className="mt-4 rounded-xl bg-slate-50 p-3 ring-1 ring-slate-200 open:bg-slate-100 transition">
<summary className="flex items-center justify-between cursor-pointer">
<span className="text-sm font-medium text-slate-900">Read bio</span>
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-200 text-slate-700">
<i className="h-4 w-4 open:hidden" data-lucide="plus"></i>
</span>
</summary>
<p className="mt-2 text-sm text-slate-700">Luis specializes in attachment‑based work and conflict resolution for couples.</p>
</details>
</div>
</article>

<article className="group bg-white rounded-2xl p-5 ring-1 ring-slate-900/5 shadow-sm hover:shadow-md transition">
<div className="relative aspect-[4/3] rounded-xl overflow-hidden ring-1 ring-slate-900/5">
<img alt="Team member" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
<div className="absolute bottom-3 right-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition">
<a aria-label="LinkedIn" className="h-9 w-9 rounded-full bg-white/95 text-slate-800 grid place-items-center hover:bg-slate-100 ring-1 ring-slate-900/10" href="#">
<i className="h-4 w-4" data-lucide="linkedin"></i>
</a>
<a aria-label="Email" className="h-9 w-9 rounded-full bg-white/95 text-slate-800 grid place-items-center hover:bg-slate-100 ring-1 ring-slate-900/10" href="#">
<i className="h-4 w-4" data-lucide="mail"></i>
</a>
</div>
</div>
<div className="mt-4">
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Noah Kim</h3>
<p className="text-sm text-slate-600">Psychiatric Nurse Practitioner</p>
<div className="mt-3 flex flex-wrap gap-2">
<span className="inline-flex items-center rounded-full bg-slate-100 text-slate-700 px-2.5 py-1 text-xs">Medication</span>
<span className="inline-flex items-center rounded-full bg-slate-100 text-slate-700 px-2.5 py-1 text-xs">Sleep</span>
</div>
<details className="mt-4 rounded-xl bg-slate-50 p-3 ring-1 ring-slate-200 open:bg-slate-100 transition">
<summary className="flex items-center justify-between cursor-pointer">
<span className="text-sm font-medium text-slate-900">Read bio</span>
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-200 text-slate-700">
<i className="h-4 w-4 open:hidden" data-lucide="plus"></i>
</span>
</summary>
<p className="mt-2 text-sm text-slate-700">Noah brings a holistic lens to treatment planning, collaborating closely with therapists and clients.</p>
</details>
</div>
</article>

<article className="group bg-white rounded-2xl p-5 ring-1 ring-slate-900/5 shadow-sm hover:shadow-md transition">
<div className="relative aspect-[4/3] rounded-xl overflow-hidden ring-1 ring-slate-900/5">
<img alt="Team member" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
<div className="absolute bottom-3 right-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition">
<a aria-label="LinkedIn" className="h-9 w-9 rounded-full bg-white/95 text-slate-800 grid place-items-center hover:bg-slate-100 ring-1 ring-slate-900/10" href="#">
<i className="h-4 w-4" data-lucide="linkedin"></i>
</a>
<a aria-label="Email" className="h-9 w-9 rounded-full bg-white/95 text-slate-800 grid place-items-center hover:bg-slate-100 ring-1 ring-slate-900/10" href="#">
<i className="h-4 w-4" data-lucide="mail"></i>
</a>
</div>
</div>
<div className="mt-4">
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Priya Singh</h3>
<p className="text-sm text-slate-600">Child &amp; Adolescent Therapist</p>
<div className="mt-3 flex flex-wrap gap-2">
<span className="inline-flex items-center rounded-full bg-slate-100 text-slate-700 px-2.5 py-1 text-xs">Adolescents</span>
<span className="inline-flex items-center rounded-full bg-slate-100 text-slate-700 px-2.5 py-1 text-xs">Family</span>
</div>
<details className="mt-4 rounded-xl bg-slate-50 p-3 ring-1 ring-slate-200 open:bg-slate-100 transition">
<summary className="flex items-center justify-between cursor-pointer">
<span className="text-sm font-medium text-slate-900">Read bio</span>
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-200 text-slate-700">
<i className="h-4 w-4 open:hidden" data-lucide="plus"></i>
</span>
</summary>
<p className="mt-2 text-sm text-slate-700">Priya helps young people and families navigate change through play‑based and strengths‑focused therapy.</p>
</details>
</div>
</article>
</div>
</div>
</section>
</main>

<main className="hidden" id="page-join">
<section className="py-12 md:py-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto">
<p className="text-teal-800 font-medium">Grow with Us</p>
<h1 className="mt-2 text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">Be a Part of our Organization</h1>
<p className="mt-3 text-slate-700">Purpose‑driven clinicians, coaches, and operators building accessible care.</p>
</div>

<div className="mt-10 bg-white rounded-3xl ring-1 ring-slate-900/5 shadow-sm p-6 md:p-8">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">How It Works</h2>
<div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="rounded-2xl border border-slate-200 p-5 hover:border-slate-300 transition">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-xl bg-teal-100 text-teal-700 grid place-items-center">
<i className="h-5 w-5" data-lucide="file-plus"></i>
</div>
<div className="text-sm font-medium text-slate-900">1. Apply</div>
</div>
<p className="mt-2 text-sm text-slate-700">Share your background, interests, and availability.</p>
</div>
<div className="rounded-2xl border border-slate-200 p-5 hover:border-slate-300 transition">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-xl bg-amber-100 text-amber-700 grid place-items-center">
<i className="h-5 w-5" data-lucide="users"></i>
</div>
<div className="text-sm font-medium text-slate-900">2. Meet</div>
</div>
<p className="mt-2 text-sm text-slate-700">Talk with our team to align on mission and care philosophy.</p>
</div>
<div className="rounded-2xl border border-slate-200 p-5 hover:border-slate-300 transition">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-xl bg-rose-100 text-rose-700 grid place-items-center">
<i className="h-5 w-5" data-lucide="badge-check"></i>
</div>
<div className="text-sm font-medium text-slate-900">3. Credentials</div>
</div>
<p className="mt-2 text-sm text-slate-700">Verify licensure, references, and compliance details.</p>
</div>
<div className="rounded-2xl border border-slate-200 p-5 hover:border-slate-300 transition">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-xl bg-emerald-100 text-emerald-700 grid place-items-center">
<i className="h-5 w-5" data-lucide="rocket"></i>
</div>
<div className="text-sm font-medium text-slate-900">4. Onboard</div>
</div>
<p className="mt-2 text-sm text-slate-700">Get set up with tools, support, and your first clients.</p>
</div>
</div>
</div>

<div className="mt-8 grid md:grid-cols-2 gap-6 items-start">

<div className="bg-white rounded-2xl ring-1 ring-slate-900/5 shadow-sm p-6">
<h3 className="text-xl font-semibold tracking-tight text-slate-900">What We’re Looking For</h3>
<ul className="mt-4 space-y-3">
<li className="flex items-start gap-3 text-slate-700">
<i className="h-5 w-5 text-emerald-600 mt-0.5" data-lucide="check-circle-2"></i>
                Licensed clinicians (Psychologists, Therapists, NPs) or certified coaches
              </li>
<li className="flex items-start gap-3 text-slate-700">
<i className="h-5 w-5 text-emerald-600 mt-0.5" data-lucide="check-circle-2"></i>
                Evidence‑based practice with a client‑centered approach
              </li>
<li className="flex items-start gap-3 text-slate-700">
<i className="h-5 w-5 text-emerald-600 mt-0.5" data-lucide="check-circle-2"></i>
                Clear communication and collaborative mindset
              </li>
<li className="flex items-start gap-3 text-slate-700">
<i className="h-5 w-5 text-emerald-600 mt-0.5" data-lucide="check-circle-2"></i>
                Commitment to inclusivity, ethics, and data privacy
              </li>
<li className="flex items-start gap-3 text-slate-700">
<i className="h-5 w-5 text-emerald-600 mt-0.5" data-lucide="check-circle-2"></i>
                Comfort with telehealth tools and documentation
              </li>
</ul>
</div>

<div className="You have reached your daily limit of 5 prompts. Upgrade to Pro for higher limits. bg-white rounded-2xl ring-1 ring-slate-900/5 shadow-sm overflow-hidden">
<div className="relative">
<img alt="Team collaborating in a bright workspace" className="h-72 md:h-[22rem] w-full object-cover" src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-4 bottom-4">
<div className="bg-white/95 backdrop-blur rounded-xl p-4 ring-1 ring-slate-900/10 shadow-sm flex flex-col sm:flex-row sm:items-center gap-3 justify-between">
<div>
<p className="text-sm text-teal-800 font-medium">Now welcoming new clinicians</p>
<h3 className="text-base font-semibold text-slate-900">Make a meaningful impact with Solus</h3>
<p className="text-xs text-slate-600 mt-0.5">Flexible schedules, ethical practice, and a supportive multidisciplinary team.</p>
</div>
<div className="flex items-center gap-2">
<a className="inline-flex items-center gap-2 rounded-full bg-teal-800 text-white px-4 py-2 text-sm font-medium hover:bg-teal-700 transition" href="#contact">
                      Apply Now
                      <i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex items-center gap-2 rounded-full bg-white text-slate-800 px-4 py-2 text-sm font-medium border border-slate-200 hover:bg-slate-50" href="#team">
                      Meet the Team
                      <i className="h-4 w-4" data-lucide="users"></i>
</a>
</div>
</div>
</div>
<div className="absolute -top-8 -left-8 h-24 w-24 rounded-full bg-teal-600/10"></div>
</div>
</div>
</div>

<div className="mt-8 grid sm:grid-cols-3 gap-4">
<div className="rounded-2xl bg-white p-5 ring-1 ring-slate-900/5 shadow-sm">
<div className="flex items-center gap-3">
<span className="h-10 w-10 rounded-xl bg-emerald-100 text-emerald-700 grid place-items-center">
<i className="h-5 w-5" data-lucide="heart"></i>
</span>
<div>
<p className="text-sm font-medium text-slate-900">Client‑first care</p>
<p className="text-xs text-slate-600">Ethical, evidence‑based practice</p>
</div>
</div>
</div>
<div className="rounded-2xl bg-white p-5 ring-1 ring-slate-900/5 shadow-sm">
<div className="flex items-center gap-3">
<span className="h-10 w-10 rounded-xl bg-amber-100 text-amber-700 grid place-items-center">
<i className="h-5 w-5" data-lucide="calendar-clock"></i>
</span>
<div>
<p className="text-sm font-medium text-slate-900">Flexible schedule</p>
<p className="text-xs text-slate-600">Virtual and in‑person options</p>
</div>
</div>
</div>
<div className="rounded-2xl bg-white p-5 ring-1 ring-slate-900/5 shadow-sm">
<div className="flex items-center gap-3">
<span className="h-10 w-10 rounded-xl bg-sky-100 text-sky-700 grid place-items-center">
<i className="h-5 w-5" data-lucide="laptop"></i>
</span>
<div>
<p className="text-sm font-medium text-slate-900">Tools that help</p>
<p className="text-xs text-slate-600">Telehealth and documentation</p>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="mt-10 border-t border-slate-200/70 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
<div className="grid md:grid-cols-4 gap-8">
<div className="md:col-span-2">
<a className="inline-flex items-center gap-2" href="#home">
<div className="h-8 w-8 rounded-xl bg-teal-600 grid place-items-center text-white shadow-sm">
<i className="h-4 w-4" data-lucide="sparkles"></i>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900">Solus</span>
</a>
<p className="mt-3 text-sm text-slate-600 max-w-md">
            Compassionate, evidence‑based support for your mental well‑being.
          </p>
</div>
<div>
<p className="text-sm font-semibold text-slate-900">Navigate</p>
<ul className="mt-3 space-y-2 text-sm">
<li><a className="text-slate-600 hover:text-slate-900" href="#home">Home</a></li>
<li><a className="text-slate-600 hover:text-slate-900" href="#services">Services</a></li>
<li><a className="text-slate-600 hover:text-slate-900" href="#team">Our Team</a></li>
<li><a className="text-slate-600 hover:text-slate-900" href="#join">Join Us</a></li>
<li><a className="text-slate-600 hover:text-slate-900" href="#contact">Contact</a></li>
</ul>
</div>
<div>
<p className="text-sm font-semibold text-slate-900">Get in touch</p>
<ul className="mt-3 space-y-2 text-sm">
<li className="flex items-center gap-2">
<i className="h-4 w-4 text-teal-800" data-lucide="mail"></i>
              support@solus.com
            </li>
<li className="flex items-center gap-2">
<i className="h-4 w-4 text-teal-800" data-lucide="phone"></i>
              +1 (855) 402‑2900
            </li>
</ul>
</div>
</div>
<div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200 pt-6">
<p className="text-xs text-slate-500">© <span id="year"></span> Solus Health. All rights reserved.</p>
<p className="text-[11px] text-slate-500">If you’re in crisis or considering self‑harm, call your local emergency number immediately.</p>
</div>
</div>
</footer>



    </>
  );
}
