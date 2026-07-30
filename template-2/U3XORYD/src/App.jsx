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
sans: ["Inter", "ui-sans-serif", "system-ui"],
},
colors: {
brand: {
50: '#f2f8ff',
100: '#e6f1ff',
200: '#bfdbfe',
300: '#93c5fd',
400: '#60a5fa',
500: '#3b82f6',
600: '#2563eb',
700: '#1d4ed8',
800: '#1e40af',
900: '#1e3a8a'
}
},
boxShadow: {
'glow': '0 0 40px 10px rgba(59,130,246,.25)'
},
backgroundImage: {
'grid': 'linear-gradient(to right, rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.05) 1px, transparent 1px)',
}
}
}
}



    // Initialize Lucide icons
    lucide.createIcons();

    // Set current year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Mobile menu toggle
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Header background on scroll
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('glass');
      } else {
        header.classList.remove('glass');
      }
    });

    // Smooth scroll reveal animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el);
    });

    // Close mobile menu when clicking links
    document.querySelectorAll('#mobileMenu a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
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
      <div className="spline-container fixed top-0 w-full h-screen -z-10"><iframe frameborder="0" height="100%" src="https://my.spline.design/worldplanet-inmHh7fVCul1jUFrNRYlotVU" width="100%"></iframe></div>

<div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
<div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-brand-500 opacity-20 blur-3xl"></div>
<div className="absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-fuchsia-500 opacity-20 blur-3xl"></div>
<div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-emerald-500 opacity-20 blur-3xl"></div>
</div>

<header className="fixed top-0 z-50 w-full transition-all glass" id="header">
<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
<a className="flex items-center gap-2 text-lg font-semibold tracking-tight font-sans" href="#"><svg className="lucide lucide-sparkles inline-block h-6 w-6" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>YourProduct</a>
<nav className="hidden items-center gap-8 md:flex">
<a className="hover:opacity-80 transition-opacity font-sans" href="#features">Features</a>
<a className="hover:opacity-80 transition-opacity font-sans" href="#templates">Templates</a>
<a className="hover:opacity-80 transition-opacity font-sans" href="#pricing">Pricing</a>
<a className="hover:opacity-80 transition-opacity font-sans" href="#faq">FAQ</a>
</nav>
<div className="hidden gap-3 md:flex">
<a className="rounded-md px-4 py-2 text-sm font-medium hover:bg-white/10 transition-colors font-sans" href="#">Log in</a>
<a className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-gray-200 transition-colors font-sans" href="#cta">Start free</a>
</div>
<button aria-label="Open menu" className="md:hidden hover:opacity-80" id="menuBtn"><svg className="lucide lucide-menu h-6 w-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg></button>
</div>

<div className="glass absolute inset-x-0 top-full hidden flex-col gap-4 px-6 py-6 md:hidden" id="mobileMenu">
<a className="block hover:opacity-80 font-sans" href="#features">Features</a>
<a className="block hover:opacity-80 font-sans" href="#templates">Templates</a>
<a className="block hover:opacity-80 font-sans" href="#pricing">Pricing</a>
<a className="block hover:opacity-80 font-sans" href="#faq">FAQ</a>
<div className="mt-2 flex gap-3">
<a className="flex-1 rounded-md px-4 py-2 text-center text-sm font-medium hover:bg-white/10 transition-colors font-sans" href="#">Log in</a>
<a className="flex-1 rounded-md bg-white px-4 py-2 text-center text-sm font-semibold text-black hover:bg-gray-200 transition-colors font-sans" href="#cta">Start free</a>
</div>
</div>
</header>

<div className="h-20"></div>

<section className="relative mx-auto max-w-6xl px-6 pt-24 text-center">
<h1 className="reveal text-4xl leading-tight tracking-tight md:text-6xl active font-manrope font-medium">Design & launch stunning sites<br className="hidden md:block" /> in minutes, not weeks</h1>
<p className="reveal mx-auto mt-6 max-w-2xl text-lg text-white/70 md:text-xl active font-sans" style={{animationDelay: `0.1s`}}>Drag, drop, and publish. YourProduct gives makers, teams, and agencies everything needed to ship fast—without compromise.</p>
<div className="reveal mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row active" style={{animationDelay: `0.2s`}}>
<a className="rounded-md bg-white px-6 py-3 text-base font-semibold text-black hover:bg-gray-200 transition-colors font-sans" href="#cta">Try it free</a>
<a className="rounded-md px-6 py-3 text-base font-medium hover:bg-white/10 transition-colors font-sans" href="#demo">Watch demo</a>
</div>

<div className="reveal relative mx-auto mt-20 max-w-5xl overflow-hidden rounded-2xl border border-white/10 shadow-glow active" style={{animationDelay: `0.3s`}}>
<img alt="dashboard" className="h-auto w-full object-cover" src="/assets/63fe2476-0344-437c-8a76-061567c16d68_1600w.jpg" style={{}} />
<div className="absolute inset-0 opacity-10"></div>
</div>
</section>

<section className="reveal mx-auto mt-40 max-w-6xl px-6" id="features">
<h2 className="text-center text-3xl tracking-tight md:text-4xl font-manrope font-medium">Everything you need to build</h2>
<p className="mx-auto mt-4 max-w-2xl text-center text-white/70 font-sans">From responsive blocks to CMS, custom domains and forms—we've packed it all so you can focus on content.</p>
<div className="mt-16 grid gap-8 md:grid-cols-3">

<div className="glass rounded-xl p-8 hover:bg-white/10 transition-colors">
<svg className="lucide lucide-layout mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10" data-lucide="layout" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>
<h3 className="text-lg font-semibold font-sans">Drag & drop editor</h3>
<p className="mt-2 text-sm text-white/70 font-sans">Assemble pages visually with smart snapping, grids and reusable blocks.</p>
</div>
<div className="glass rounded-xl p-8 hover:bg-white/10 transition-colors">
<svg className="lucide lucide-server mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10" data-lucide="server" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>
<h3 className="text-lg font-semibold font-sans">Built‑in CMS</h3>
<p className="mt-2 text-sm text-white/70 font-sans">Manage blog posts, docs, changelogs or portfolios without another tool.</p>
</div>
<div className="glass rounded-xl p-8 hover:bg-white/10 transition-colors">
<svg className="lucide lucide-rocket mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
<h3 className="text-lg font-semibold font-sans">One‑click publish</h3>
<p className="mt-2 text-sm text-white/70 font-sans">Ship to a blazing‑fast global edge with SSL and custom domains baked in.</p>
</div>
<div className="glass rounded-xl p-8 hover:bg-white/10 transition-colors">
<svg className="lucide lucide-code mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10" data-lucide="code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 18 6-6-6-6"></path><path d="m8 6-6 6 6 6"></path></svg>
<h3 className="text-lg font-semibold font-sans">Custom code</h3>
<p className="mt-2 text-sm text-white/70 font-sans">Inject scripts, meta tags or components anywhere for full control.</p>
</div>
<div className="glass rounded-xl p-8 hover:bg-white/10 transition-colors">
<svg className="lucide lucide-file-text mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
<h3 className="text-lg font-semibold font-sans">Forms & automations</h3>
<p className="mt-2 text-sm text-white/70 font-sans">Capture leads, sync to Airtable/Notion and trigger zaps in seconds.</p>
</div>
<div className="glass rounded-xl p-8 hover:bg-white/10 transition-colors">
<svg className="lucide lucide-shield-check mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<h3 className="text-lg font-semibold font-sans">SEO & analytics</h3>
<p className="mt-2 text-sm text-white/70 font-sans">Sitemaps, Open Graph, canonical tags and privacy‑friendly analytics included.</p>
</div>
</div>
</section>

<section className="reveal mx-auto mt-40 max-w-6xl px-6" id="templates">
<div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
<div>
<h2 className="text-3xl tracking-tight md:text-4xl font-manrope font-medium">Start from beautiful templates</h2>
<p className="mt-3 max-w-xl text-white/70 font-sans">Pick a template and make it yours. Swap colors, fonts and sections instantly.</p>
</div>
<a className="rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-black hover:bg-gray-200 transition-colors font-sans" href="#">Browse all templates</a>
</div>
<div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

<article className="group overflow-hidden rounded-2xl border border-white/10 hover:border-white/20 transition-colors">
<img alt="template" className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105" src="/assets/737adeef-7802-4581-a30c-fe2a0ab34814_800w.jpg" />
<div className="glass p-6">
<h3 className="text-lg font-semibold font-sans">SaaS Landing</h3>
<p className="mt-2 text-sm text-white/70 font-sans">Clean hero, features, pricing and FAQs — perfect for your next launch.</p>
</div>
</article>
<article className="group overflow-hidden rounded-2xl border border-white/10 hover:border-white/20 transition-colors">
<img alt="template" className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105" src="/assets/72c0a942-8db1-4109-b875-9ccb3cee3299_800w.jpg" />
<div className="glass p-6">
<h3 className="text-lg font-semibold font-sans">Portfolio</h3>
<p className="mt-2 text-sm text-white/70 font-sans">Showcase your work with case studies, galleries and a contact form.</p>
</div>
</article>
<article className="group overflow-hidden rounded-2xl border border-white/10 hover:border-white/20 transition-colors">
<img alt="template" className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105" src="/assets/7cc19619-6de8-426b-8cd9-87ec88b7df2a_800w.jpg" />
<div className="glass p-6">
<h3 className="text-lg font-semibold font-sans">Documentation</h3>
<p className="mt-2 text-sm text-white/70 font-sans">Organize guides, changelogs and API refs with search and navigation.</p>
</div>
</article>
</div>
</section>

<section className="reveal mx-auto mt-40 max-w-6xl px-6" id="demo">
<h2 className="text-center text-3xl tracking-tight md:text-4xl font-manrope font-medium">How it works</h2>
<p className="mx-auto mt-4 max-w-2xl text-center text-white/70 font-sans">Three steps and you're live.</p>
<div className="mt-16 grid gap-10 md:grid-cols-3">
<div className="text-center">
<div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-xl font-semibold font-sans">1</div>
<h3 className="mt-6 text-lg font-semibold font-sans">Choose a template</h3>
<p className="mt-2 text-sm text-white/70 font-sans">Or start from a blank canvas.</p>
</div>
<div className="text-center">
<div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-xl font-semibold font-sans">2</div>
<h3 className="mt-6 text-lg font-semibold font-sans">Customize visually</h3>
<p className="mt-2 text-sm text-white/70 font-sans">Drag blocks, tweak styles, connect data.</p>
</div>
<div className="text-center">
<div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-xl font-semibold font-sans">3</div>
<h3 className="mt-6 text-lg font-semibold font-sans">Publish instantly</h3>
<p className="mt-2 text-sm text-white/70 font-sans">Connect your domain and go live.</p>
</div>
</div>
</section>

<section className="reveal mx-auto mt-40 max-w-6xl px-6" id="pricing">
<h2 className="text-center text-3xl tracking-tight md:text-4xl font-manrope font-medium">Simple pricing</h2>
<p className="mx-auto mt-4 max-w-2xl text-center text-white/70 font-sans">Start free, upgrade when you need more power.</p>
<div className="mt-16 grid gap-8 md:grid-cols-3">

<div className="glass flex flex-col rounded-2xl p-8 hover:bg-white/10 transition-colors">
<h3 className="text-xl font-semibold font-sans">Free</h3>
<p className="mt-2 text-sm text-white/70 font-sans">Perfect to experiment</p>
<div className="mt-6 flex items-end gap-1">
<span className="text-4xl font-manrope font-medium">$0</span>
<span className="text-white/60 font-sans">/mo</span>
</div>
<ul className="mt-6 flex-1 space-y-3 text-sm text-white/80">
<li className="flex items-start gap-2 font-sans"><svg className="lucide lucide-check mt-0.5 h-4 w-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 1 project</li>
<li className="flex items-start gap-2 font-sans"><svg className="lucide lucide-check mt-0.5 h-4 w-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Built‑in hosting</li>
<li className="flex items-start gap-2 font-sans"><svg className="lucide lucide-check mt-0.5 h-4 w-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Community support</li>
</ul>
<a className="mt-8 rounded-md bg-white px-5 py-2.5 text-center text-sm font-semibold text-black hover:bg-gray-200 transition-colors font-sans" href="#cta">Get started</a>
</div>

<div className="glass relative flex flex-col rounded-2xl p-8 ring-2 ring-white/40 hover:bg-white/10 transition-colors">
<span className="absolute -top-3 right-6 rounded-full bg-white px-3 py-1 text-xs font-semibold text-black font-sans">Popular</span>
<h3 className="text-xl font-semibold font-sans">Pro</h3>
<p className="mt-2 text-sm text-white/70 font-sans">For professionals & teams</p>
<div className="mt-6 flex items-end gap-1">
<span className="text-4xl font-manrope font-medium">$19</span>
<span className="text-white/60 font-sans">/mo</span>
</div>
<ul className="mt-6 flex-1 space-y-3 text-sm text-white/80">
<li className="flex items-start gap-2 font-sans"><svg className="lucide lucide-check mt-0.5 h-4 w-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Unlimited projects</li>
<li className="flex items-start gap-2 font-sans"><svg className="lucide lucide-check mt-0.5 h-4 w-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Custom domains & SSL</li>
<li className="flex items-start gap-2 font-sans"><svg className="lucide lucide-check mt-0.5 h-4 w-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> CMS & forms</li>
<li className="flex items-start gap-2 font-sans"><svg className="lucide lucide-check mt-0.5 h-4 w-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Priority support</li>
</ul>
<a className="mt-8 rounded-md bg-white px-5 py-2.5 text-center text-sm font-semibold text-black hover:bg-gray-200 transition-colors font-sans" href="#cta">Upgrade</a>
</div>

<div className="glass flex flex-col rounded-2xl p-8 hover:bg-white/10 transition-colors">
<h3 className="text-xl font-semibold font-sans">Agency</h3>
<p className="mt-2 text-sm text-white/70 font-sans">For big teams & clients</p>
<div className="mt-6 flex items-end gap-1">
<span className="text-4xl font-manrope font-medium">$79</span>
<span className="text-white/60 font-sans">/mo</span>
</div>
<ul className="mt-6 flex-1 space-y-3 text-sm text-white/80">
<li className="flex items-start gap-2 font-sans"><svg className="lucide lucide-check mt-0.5 h-4 w-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Everything in Pro</li>
<li className="flex items-start gap-2 font-sans"><svg className="lucide lucide-check mt-0.5 h-4 w-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> White‑label editor</li>
<li className="flex items-start gap-2 font-sans"><svg className="lucide lucide-check mt-0.5 h-4 w-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Team permissions</li>
<li className="flex items-start gap-2 font-sans"><svg className="lucide lucide-check mt-0.5 h-4 w-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Dedicated support</li>
</ul>
<a className="mt-8 rounded-md bg-white px-5 py-2.5 text-center text-sm font-semibold text-black hover:bg-gray-200 transition-colors font-sans" href="#cta">Contact sales</a>
</div>
</div>
</section>

<section className="reveal mx-auto mt-40 max-w-6xl px-6">
<h2 className="text-center text-3xl tracking-tight md:text-4xl font-manrope font-medium">Loved by makers</h2>
<p className="mx-auto mt-4 max-w-2xl text-center text-white/70 font-sans">See how others ship faster with YourProduct.</p>
<div className="mt-16 grid gap-8 md:grid-cols-3">
</div>
</section>

<section className="reveal mx-auto mt-40 max-w-3xl px-6" id="faq">
<h2 className="text-center text-3xl tracking-tight md:text-4xl font-manrope font-medium">Frequently asked questions</h2>
<div className="mt-12 divide-y divide-white/10">
<details className="group py-6">
<summary className="flex cursor-pointer list-none items-center justify-between text-lg font-medium hover:opacity-80 transition-opacity font-sans">
          Is there a free plan?
          <svg className="lucide lucide-chevron-down ml-4 h-5 w-5 shrink-0 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-4 text-sm leading-relaxed text-white/70 font-sans">Yes! Start with the Free plan and upgrade when you need more power.</p>
</details>
<details className="group py-6">
<summary className="flex cursor-pointer list-none items-center justify-between text-lg font-medium hover:opacity-80 transition-opacity font-sans">
          Can I use my own domain?
          <svg className="lucide lucide-chevron-down ml-4 h-5 w-5 shrink-0 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-4 text-sm leading-relaxed text-white/70 font-sans">Absolutely. Add custom domains with automatic SSL in a couple of clicks.</p>
</details>
<details className="group py-6">
<summary className="flex cursor-pointer list-none items-center justify-between text-lg font-medium hover:opacity-80 transition-opacity font-sans">
          Do you support custom code?
          <svg className="lucide lucide-chevron-down ml-4 h-5 w-5 shrink-0 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-4 text-sm leading-relaxed text-white/70 font-sans">Paste scripts, meta tags or embed components wherever you need.</p>
</details>
<details className="group py-6">
<summary className="flex cursor-pointer list-none items-center justify-between text-lg font-medium hover:opacity-80 transition-opacity font-sans">
          How do I cancel?
          <svg className="lucide lucide-chevron-down ml-4 h-5 w-5 shrink-0 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-4 text-sm leading-relaxed text-white/70 font-sans">You can cancel anytime from your dashboard. No lock‑in.</p>
</details>
</div>
</section>

<section className="reveal mx-auto mt-40 max-w-6xl px-6" id="cta">
<div className="glass relative overflow-hidden rounded-3xl px-10 py-16 text-center md:px-20">
<h2 className="text-3xl tracking-tight md:text-4xl font-manrope font-medium">Ready to build faster?</h2>
<p className="mx-auto mt-4 max-w-xl text-white/70 font-sans">Join thousands of creators shipping with YourProduct.</p>
<a className="mt-8 inline-block rounded-md bg-white px-8 py-3 text-sm font-semibold text-black hover:bg-gray-200 transition-colors font-sans" href="#">Create your site</a>
<div aria-hidden="true" className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-500 opacity-20 blur-3xl"></div>
</div>
</section>

<footer className="mx-auto mt-32 max-w-6xl px-6 pb-20 pt-16 text-sm text-white/60">
<div className="grid gap-10 md:grid-cols-5">
<div className="md:col-span-2">
<a className="flex items-center gap-2 text-base font-semibold text-white tracking-tight font-sans" href="#"><svg className="lucide lucide-sparkles inline-block h-5 w-5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>YourProduct</a>
<p className="mt-4 max-w-xs font-sans">A fast, friendly way to ship beautiful sites. No code required — unless you want to.</p>
</div>
<div>
<h4 className="font-medium text-white font-sans">Product</h4>
<ul className="mt-4 space-y-2">
<li><a className="hover:opacity-80 transition-opacity font-sans" href="#features">Features</a></li>
<li><a className="hover:opacity-80 transition-opacity font-sans" href="#templates">Templates</a></li>
<li><a className="hover:opacity-80 transition-opacity font-sans" href="#pricing">Pricing</a></li>
<li><a className="hover:opacity-80 transition-opacity font-sans" href="#faq">FAQ</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-white font-sans">Company</h4>
<ul className="mt-4 space-y-2">
<li><a className="hover:opacity-80 transition-opacity font-sans" href="#">About</a></li>
<li><a className="hover:opacity-80 transition-opacity font-sans" href="#">Blog</a></li>
<li><a className="hover:opacity-80 transition-opacity font-sans" href="#">Careers</a></li>
<li><a className="hover:opacity-80 transition-opacity font-sans" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-white font-sans">Legal</h4>
<ul className="mt-4 space-y-2">
<li><a className="hover:opacity-80 transition-opacity font-sans" href="#">Terms</a></li>
<li><a className="hover:opacity-80 transition-opacity font-sans" href="#">Privacy</a></li>
<li><a className="hover:opacity-80 transition-opacity font-sans" href="#">Security</a></li>
</ul>
</div>
</div>
<div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
<p className="font-sans">© <span className="font-sans" id="year">2025</span> YourProduct Inc.</p>
<div className="flex gap-5">
<a aria-label="Twitter" className="hover:opacity-80 transition-opacity" href="#"><svg className="lucide lucide-twitter h-5 w-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a aria-label="GitHub" className="hover:opacity-80 transition-opacity" href="#"><svg className="lucide lucide-github h-5 w-5" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg></a>
<a aria-label="LinkedIn" className="hover:opacity-80 transition-opacity" href="#"><svg className="lucide lucide-linkedin h-5 w-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
</div>
</div>
</footer>


    </>
  );
}
