import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Year
      document.getElementById('year').textContent = new Date().getFullYear();

      // Mobile menu toggle
      const mobileMenuBtn = document.getElementById('mobileMenuBtn');
      const mobileMenu = document.getElementById('mobileMenu');
      if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
          mobileMenu.classList.toggle('hidden');
        });
      }

      // Smooth redirect for #how anchors to #solution
      document.addEventListener('click', (e) => {
        const a = e.target.closest('a[href="#how"]');
        if (a) {
          e.preventDefault();
          const el = document.querySelector('#solution');
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });

      // Simple reveal on scroll
      const revealEls = document.querySelectorAll('[data-reveal]');
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('transition', 'duration-500', 'translate-y-0', 'opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-4');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      revealEls.forEach((el) => {
        el.classList.add('opacity-0', 'translate-y-4');
        io.observe(el);
      });

      // Modal handling
      function openModal(modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        const firstInput = modal.querySelector('input, button, [href], select, textarea');
        if (firstInput) firstInput.focus();
      }
      function closeModal(modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
      }
      document.querySelectorAll('[data-open-modal]').forEach(btn => {
        btn.addEventListener('click', () => {
          const sel = btn.getAttribute('data-open-modal');
          const modal = document.querySelector(sel);
          if (modal) openModal(modal);
        });
      });
      document.querySelectorAll('[data-close-modal]').forEach(btn => {
        btn.addEventListener('click', () => {
          const modal = btn.closest('.fixed.inset-0');
          if (modal) closeModal(modal);
        });
      });
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          document.querySelectorAll('.fixed.inset-0.flex').forEach(m => closeModal(m));
        }
      });

      // Sample form (demo only)
      document.getElementById('sampleForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const modal = document.getElementById('sampleModal');
        alert('Thanks! We’ll send your sample shortly.');
        if (modal) closeModal(modal);
      });

      // Impact calculator
      const $ = (id) => document.getElementById(id);
      const inputs = [
        ['calc-webinars', 'calc-webinars-number'],
        ['calc-downloads', 'calc-downloads-number'],
        ['calc-opprate', 'calc-opprate-number'],
        ['calc-acv', 'calc-acv-number'],
      ];
      function formatCurrency(n) {
        return n.toLocaleString(undefined, { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
      }
      function clamp(n, min, max) { return Math.min(Math.max(n, min), max); }
      function recalc() {
        const webinars = Number($(inputs[0][0]).value);
        const downloadsPer = Number($(inputs[1][0]).value);
        const oppRate = Number($(inputs[2][0]).value) / 100;
        const acv = Number($(inputs[3][0]).value);

        const downloads = webinars * downloadsPer;
        const opps = Math.round(downloads * oppRate);
        const pipeline = opps * acv;
        const hoursSaved = webinars * 10; // assume 10 hrs saved per PDF vs in‑house

        $('out-downloads').textContent = downloads.toLocaleString();
        $('out-opps').textContent = opps.toLocaleString();
        $('out-pipeline').textContent = formatCurrency(pipeline);
        $('out-hours').textContent = `${hoursSaved} hrs`;
      }
      inputs.forEach(([rangeId, numberId], idx) => {
        const r = $(rangeId), n = $(numberId);
        if (!r || !n) return;
        const min = Number(r.min), max = Number(r.max), step = Number(r.step) || 1;
        function syncFromRange() { n.value = r.value; recalc(); }
        function syncFromNumber() { n.value = clamp(Number(n.value), min, max); r.value = n.value; recalc(); }
        r.addEventListener('input', syncFromRange);
        n.addEventListener('input', syncFromNumber);
      });
      recalc();

      // Gallery modal
      const galleries = {
        one: [
          'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1400&auto=format&fit=crop',
          '://images.unsplash.com/photo-1529336953121-ad5a0d43d0d2?q=80&w=1400&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=1400&auto=format&fit=crop'
        ],
        two: [
          'https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=1400&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1581291519195-ef11498d1cf5?q=80&w=1400&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=1400&auto=format&fit=crop'
        ],
        three: [
          'https://images.unsplash.com/photo-1529336953121-ad5a0d43d0d2?q=80&w=1400&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1400&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1529694157871-4476e44b9b98?q=80&w=1400&auto=format&fit=crop'
        ]
      };
      let currentSet = [];
      let currentIdx = 0;

      function renderThumbs() {
        const thumbs = document.getElementById('thumbs');
        thumbs.innerHTML = '';
        currentSet.forEach((src, i) => {
          const btn = document.createElement('button');
          btn.className = 'relative overflow-hidden rounded-md border ' + (i === currentIdx ? 'border-indigo-500' : 'border-gray-200');
          btn.innerHTML = '<img src="' + src + '" alt="Page ' + (i+1) + '" class="h-16 w-full object-cover">';
          btn.addEventListener('click', () => {
            currentIdx = i;
            updateMain();
            renderThumbs();
          });
          thumbs.appendChild(btn);
        });
      }
      function updateMain() {
        const img = document.getElementById('galleryMain');
        img.src = currentSet[currentIdx];
      }
      document.querySelectorAll('[data-open-modal="#galleryModal"]').forEach(card => {
        card.addEventListener('click', (e) => {
          const key = card.getAttribute('data-gallery');
          currentSet = galleries[key] || [];
          currentIdx = 0;
          updateMain();
          renderThumbs();
        }, { capture: true });
      });
      document.getElementById('prevBtn').addEventListener('click', () => {
        if (!currentSet.length) return;
        currentIdx = (currentIdx - 1 + currentSet.length) % currentSet.length;
        updateMain();
        renderThumbs();
      });
     .getElementById('nextBtn').addEventListener('click', () => {
        if (!currentSet.length) return;
        currentIdx = (currentIdx + 1) % currentSet.length;
        updateMain();
        renderThumbs();
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<a className="inline-flex items-center gap-2 group" href="#">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-gray-200 bg-white shadow-sm">
<span className="font-semibold tracking-tight text-gray-900">WLL</span>
</span>
<span className="sr-only">WebinarLeadLab</span>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#problem">Problem</a>
<a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#solution">Solution</a>
<a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#roi">ROI</a>
<a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#pricing">Pricing</a>
<a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#samples">Samples</a>
<a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#faq">FAQ</a>
</nav>
<div className="hidden md:flex items-center gap-3">
<button className="inline-flex h-10 items-center rounded-md px-4 text-sm font-medium bg-white border border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-900 transition-colors" data-open-modal="#sampleModal">
            See How It Works
          </button>
<button className="inline-flex h-10 items-center rounded-md px-4 text-sm font-medium text-white shadow-sm transition-all" data-open-modal="#sampleModal" style={{backgroundColor: '#14B8A6'}}>
            Get Your Sample PDF →
          </button>
</div>
<button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 bg-white hover:bg-gray-50" id="mobileMenuBtn">

<svg className="h-5 w-5 text-gray-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<line x1="3" x2="21" y1="6" y2="6"></line>
<line x1="3" x2="21" y1="12" y2="12"></line>
<line x1="3" x2="21" y1="18" y2="18"></line>
</svg>
</button>
</div>

<div className="md:hidden hidden border-t border-gray-200 bg-white" id="mobileMenu">
<div className="px-4 py-3 flex flex-col gap-2">
<a className="py-2 text-sm text-gray-700" href="#problem">Problem</a>
<a className="py-2 text-sm text-gray-700" href="#solution">Solution</a>
<a className="py-2 text-sm text-gray-700" href="#roi">ROI</a>
<a className="py-2 text-sm text-gray-700" href="#pricing">Pricing</a>
<a className="py-2 text-sm text-gray-700" href="#samples">Samples</a>
<a className="py-2 text-sm text-gray-700" href="#faq">FAQ</a>
<div className="pt-2 flex gap-2">
<button className="flex-1 inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium bg-white border border-gray-200 hover:bg-gray-50" data-open-modal="#sampleModal">
              See How
            </button>
<button className="flex-1 inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium text-white" data-open-modal="#sampleModal" style={{backgroundColor: '#14B8A6'}}>
              Sample PDF
            </button>
</div>
</div>
</div>
</header>

<section className="relative">
<div className="sm:px-6 lg:px-8 md:pt-20 md:pb-16 max-w-7xl mr-auto ml-auto pt-14 pr-4 pb-8 pl-4">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
<div className="space-y-6">
<div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-3 py-1 w-auto">

<svg className="h-4 w-4 text-teal-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z"></path>
</svg>
<span className="text-xs font-medium text-teal-700 tracking-tight">48-hour delivery • 100% Guarantee</span>
</div>
<h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">
              Turn Your B2B Webinars Into Professional PDF Lead Magnets
            </h1>
<p className="text-base md:text-lg text-gray-600">
              We convert your webinars into polished PDFs in 48 hours. You distribute them across LinkedIn, email, your website, and sales.
            </p>
<p className="text-sm text-gray-500">“Created by a Lead Software Engineer tired of watching $5,000 webinars die after going live”</p>
<div className="flex flex-col sm:flex-row gap-3">
<button className="inline-flex h-11 items-center justify-center rounded-md px-5 text-sm font-medium text-white shadow-sm transition-all hover:brightness-110 hover:shadow" data-open-modal="#sampleModal" style={{backgroundColor: '#14B8A6'}}>
                Get Your Sample PDF →
              </button>
<a className="inline-flex h-11 items-center justify-center rounded-md px-5 text-sm font-medium bg-white border border-gray-200 hover:bg-gray-50 text-gray-900" href="#how">
                See How It Works
              </a>
</div>
</div>

<div className="relative">
<div className="relative rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
<div className="grid grid-cols-3 items-center gap-6">

<div className="flex flex-col items-center text-center gap-3">
<div className="relative">
<div className="h-16 w-16 rounded-lg border border-gray-200 bg-gray-50 flex items-center justify-center">

<svg className="h-7 w-7 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" width="15" x="3" y="5"></rect>
<polygon points="22 7 16 10 16 14 22 17 22 7"></polygon>
</svg>
</div>
<span className="absolute -top-2 -right-2 inline-flex rounded-full bg-indigo-600 text-white text-xs px-2 py-0.5">Webinar</span>
</div>
<p className="text-sm text-gray-600">60 minutes of expertise</p>
</div>

<div className="flex flex-col items-center gap-3">
<div className="h-10 w-10 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center animate-pulse">

<svg className="h-5 w-5 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5l7 7-7 7"></path>
</svg>
</div>
<div className="h-16 w-16 rounded-lg border border-gray-200 bg-gray-50 flex items-center justify-center relative">

<svg className="h-7 w-7 text-teal-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
<path d="M14 2v6h6"></path>
<line x1="16" x2="8" y1="13" y2="13"></line>
<line x1="16" x2="8" y1="17" y2="17"></line>
<line x1="10" x2="8" y1="9" y2="9"></line>
</svg>
<span className="absolute -top-2 -right-2 inline-flex rounded-full bg-teal-600 text-white text-xs px-2 py-0.5">PDF</span>
</div>
</div>

<div className="relative flex items-center justify-center">
<div className="relative h-24 w-24">

<div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-6 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center animate-bounce">

<svg className="h-3.5 w-3.5 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 21a8 8 0 1 0-16 0"></path>
<circle cx="12" cy="7" r="4"></circle>
</svg>
</div>
<div className="absolute top-1/3 right-0 h-6 w-6 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center animate-ping"></div>
<div className="absolute bottom-0 left-2 h-7 w-7 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center">
<svg className="h-4 w-4 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 21a8 8 0 1 0-16 0"></path>
<circle cx="12" cy="7" r="4"></circle>
</svg>
</div>
<div className="absolute bottom-1/3 left-0 h-5 w-5 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center animate-pulse"></div>
</div>
</div>
</div>
<div className="mt-6 grid grid-cols-3 gap-3 text-center">
<div className="rounded-lg border border-gray-200 bg-white p-3">
<p className="text-xs text-gray-500">Delivery</p>
<p className="text-base font-semibold text-gray-900">48 hrs</p>
</div>
<div className="rounded-lg border border-gray-200 bg-white p-3">
<p className="text-xs text-gray-500">You distribute</p>
<p className="text-base font-semibold text-gray-900">Post anywhere, anytime</p>
</div>
<div className="rounded-lg border border-gray-200 bg-white p-3">
<p className="text-xs text-gray-500">Your Time</p>
<p className="text-base font-semibold text-gray-900">5 minutes</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="md:py-20 border-gray-200 border-t pt-14 pb-14">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-8">Your Webinars Are Dying After Going Live</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="rounded-xl border border-gray-200 bg-white shadow-sm p-6 relative overflow-hidden" data-reveal="">
<div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gray-100"></div>
<div className="flex items-center gap-3">

<svg className="h-6 w-6 text-gray-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M10 6H6a2 2 0 0 0-2 2v8"></path>
<path d="M14 7l5-3v16l-5-3"></path>
<path d="M2 2l20 20"></path>
</svg>
<h3 className="text-lg font-semibold text-gray-900 tracking-tight">Webinar graveyard</h3>
</div>
<ul className="mt-4 space-y-3 text-sm text-gray-600">
<li className="flex items-center gap-2">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-gray-300"></span>
                You spent $5,000 producing that webinar
              </li>
<li className="flex items-center gap-2">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-gray-300"></span>
                200 people attended live
              </li>
<li className="flex items-center gap-2">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-gray-300"></span>
                Now it's sitting unwatched on YouTube with 12 views
              </li>
<li className="flex items-center gap-2">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-gray-300"></span>
                Meanwhile, competitors generate leads 24/7
              </li>
</ul>
</div>

<div className="rounded-xl border border-gray-200 bg-white shadow-sm p-6" data-reveal="">
<div className="flex items-center gap-3">

<svg className="h-6 w-6 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="3"></circle>
<path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 8 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06A2 2 0 1 1 3.3 16.9l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H2a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 3.6 8a1.65 1.65 0 0 0-.33-1.82l-.06-.06A2 2 0 1 1 6.04 3.3l.06.06A1.65 1.65 0 0 0 7.92 3a1.65 1.65 0 0 0 1-1.51V2a2 2 0 1 1 4 0v.09A1.65 1.65 0 0 0 15 3.6a1.65 1.65 0 0 0 1.82-.33l.06-.06A2 2 0 1 1 20.7 6.04l-.06.06A1.65 1.65 0 0 0 21 7.92c0 .6.24 1.17.66 1.58.42.42.98.66 1.58.66H23a2 2 0 1 1 0 4h-.09c-.55 0-1.08.22-1.47.61a2.23 2.23 0 0 0-.61 1.47z"></path>
</svg>
<h3 className="text-lg font-semibold text-gray-900 tracking-tight">Lead generation machine</h3>
</div>
<div className="mt-4 grid grid-cols-2 gap-4">
<div className="rounded-lg border border-gray-200 bg-white p-4">
<p className="text-xs text-gray-500">PDF Lead Magnet</p>
<p className="mt-1 text-base font-semibold text-gray-900">8–12 pages</p>
</div>
<div className="rounded-lg border border-gray-200 bg-white p-4">
<p className="text-xs text-gray-500">You distribute</p>
<p className="mt-1 text-base font-semibold text-gray-900">Post anywhere, anytime</p>
</div>
<div className="rounded-lg border border-gray-200 bg-white p-4">
<p className="text-xs text-gray-500">Time to value</p>
<p className="mt-1 text-base font-semibold text-gray-900">48 hours</p>
</div>
<div className="rounded-lg border border-gray-200 bg-white p-4">
<p className="text-xs text-gray-500">Your Time</p>
<p className="text-base font-semibold text-gray-900 mt-1">5 minutes</p>
</div>
</div>
</div>
</div>
<div className="flex gap-3 text-sm text-gray-600 bg-white/60 border-gray-200 border rounded-md pt-3 pr-3 pb-3 pl-3 items-center mt-6 md:mt-8" id="aura-emfo2g0hj">

<svg className="h-4 w-4 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<line x1="12" x2="12" y1="16" y2="12"></line>
<line x1="12" x2="12.01" y1="8" y2="8"></line>
</svg>
<span className="">60% of B2B companies run monthly webinars. Only 5% turn them into lead magnets. <span className="font-medium text-gray-900">Be the 5%.</span></span>
</div>
</div>
</section>

<section className="py-14 md:py-20 border-t border-gray-200" id="solution">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center gap-3 mb-6">

<svg className="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3l1.5 3 3 1.5-3 1.5L12 12l-1.5-3L7.5 7.5 10.5 6 12 3z"></path>
<path d="M19 13l.75 1.5L21 15.25 19.75 16 19 17.5 18.25 16 17 15.25l1.25-.75L19 13z"></path>
<path d="M6 14l.75 1.5L8 16.25 6.75 17 6 18.5 5.25 17 4 16.25l1.25-.75L6 14z"></path>
</svg>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">We Turn Dead Webinars Into Lead Magnets</h2>
</div>
<div className="relative rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
<ol className="grid grid-cols-1 md:grid-cols-5 gap-6">

<li className="flex flex-col gap-3" data-reveal="">
<div className="flex items-center gap-2">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-gray-200 bg-gray-50 text-sm font-medium text-gray-900">1</span>
<span className="text-sm font-medium text-gray-900">Send recording</span>
</div>
<p className="text-sm text-gray-600">Upload your webinar or paste a link.</p>
<div className="mt-auto">

<svg className="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<polyline points="17 8 12 3 7 8"></polyline>
<line x1="12" x2="12" y1="3" y2="15"></line>
</svg>
</div>
</li>

<li className="flex flex-col gap-3" data-reveal="">
<div className="flex items-center gap-2">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-gray-200 bg-gray-50 text-sm font-medium text-gray-900">2</span>
<span className="text-sm font-medium text-gray-900">Extract insights</span>
</div>
<p className="text-sm text-gray-600">We distill key takeaways and frameworks.</p>
<div className="mt-auto">

<svg className="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 6a3 3 0 0 0-3 3v1a3 3 0 0 0 0 6h1"></path>
<path className="" d="M16 6a3 3 0 0 1 3 3v1a3 3 0 0 1 0 6h-1"></path>
<path d="M12 4v16"></path>
</svg>
</div>
</li>

<li className="flex flex-col gap-3" data-reveal="">
<div className="flex items-center gap-2 &lt;span class=" font-medium="" text-gray-900"="" text-sm="">Outline &amp; draft
              </div>
<p className="text-sm text-gray-600">We build a tight outline, write copy, pull quotes and data, and map a clear flow.</p>
<div className="mt-auto">

<svg className="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 21l3.5-1 11-11a2.1 2.1 0 0 0-3-3l-11 11L3 21z"></path>
<path d="M14.5 6.5l3 3"></path>
</svg>
</div>
</li>

<li className="flex flex-col gap-3" data-reveal="">
<div className="flex items-center gap-2">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-gray-200 bg-gray-50 text-sm font-medium text-gray-900">4</span>
<span className="text-sm font-medium text-gray-900">Design &amp; brand it</span>
</div>
<p className="text-sm text-gray-600">Your fonts, colors, and voice. Pixel‑perfect, accessible, print + screen‑ready PDF.</p>
<div className="mt-auto">

<svg className="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="18" x="3" y="3"></rect>
<path d="M3 9h18M9 21V9"></path>
</svg>
</div>
</li>

<li className="flex flex-col gap-3" data-reveal="">
<div className="flex items-center gap-2">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-gray-200 bg-gray-50 text-sm font-medium text-gray-900">5</span>
<span className="text-sm font-medium text-gray-900">You distribute</span>
</div>
<p className="text-sm text-gray-600">Post the PDF anywhere, anytime: website, email, social, and sales.</p>
<div className="mt-auto">

<svg className="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="18" cy="5" r="3"></circle>
<circle cx="6" cy="12" r="3"></circle>
<circle cx="18" cy="19" r="3"></circle>
<path d="M8.59 13.51l6.83 3.98M15.41 6.51L8.59 10.49"></path>
</svg>
</div>
</li>
</ol>
<div className="mt-6 rounded-lg border border-teal-200 bg-teal-50 p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
<p className="text-sm text-teal-900">
              Delivered in 48 hours. If you’re not happy, you don’t pay. Simple.
            </p>
<button className="inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium text-white shadow-sm hover:brightness-110" data-open-modal="#sampleModal" style={{backgroundColor: '#14B8A6'}}>
              Get your sample →
            </button>
</div>
</div>
</div>
</section>

<section className="scroll-mt-24 py-14 md:py-20 border-t border-gray-200" id="roi">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between gap-4 mb-6">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">Impact Calculator (Estimates)</h2>
<span className="text-xs px-2 py-1 rounded-full border border-gray-200 text-gray-600 bg-white">For planning only</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
<div className="space-y-5">

<div className="">
<div className="flex items-center justify-between mb-2">
<label className="text-sm font-medium text-gray-900" htmlFor="calc-webinars">Webinars per month</label>
<input className="w-20 h-9 rounded-md border border-gray-300 bg-white px-2 text-sm" id="calc-webinars-number" max="4" min="0" step="1" type="number" value="2"/>
</div>
<input className="w-full accent-teal-600" id="calc-webinars" max="4" min="0" step="1" type="range" value="2"/>
<p className="mt-1 text-xs text-gray-500">How many webinar PDFs you’ll convert monthly.</p>
</div>

<div>
<div className="flex items-center justify-between mb-2">
<label className="text-sm font-medium text-gray-900" htmlFor="calc-downloads">Avg downloads per PDF / month</label>
<input className="w-20 h-9 rounded-md border border-gray-300 bg-white px-2 text-sm" id="calc-downloads-number" max="300" min="10" step="10" type="number" value="80"/>
</div>
<input className="w-full accent-teal-600" id="calc-downloads" max="300" min="10" step="10" type="range" value="80"/>
<p className="mt-1 text-xs text-gray-500">Across website, email, social, partners, and sales.</p>
</div>

<div className="">
<div className="flex items-center justify-between mb-2">
<label className="text-sm font-medium text-gray-900" htmlFor="calc-opprate">Opportunity rate from downloads (%)</label>
<input className="w-20 h-9 rounded-md border border-gray-300 bg-white px-2 text-sm" id="calc-opprate-number" max="20" min="2" step="1" type="number" value="8"/>
</div>
<input className="w-full accent-teal-600" id="calc-opprate" max="20" min="2" step="1" type="range" value="8"/>
<p className="mt-1 text-xs text-gray-500">Percent of downloaders that become qualified opportunities.</p>
</div>

<div className="">
<div className="flex items-center justify-between mb-2">
<label className="text-sm font-medium text-gray-900" htmlFor="calc-acv">Average contract value (USD)</label>
<input className="w-28 h-9 rounded-md border border-gray-300 bg-white px-2 text-sm" id="calc-acv-number" max="150000" min="2000" step="1000" type="number" value="25000"/>
</div>
<input className="w-full accent-teal-600" id="calc-acv" max="150000" min="2000" step="1000" type="range" value="25000"/>
<p className="mt-1 text-xs text-gray-500">Use your typical ACV for an opportunity.</p>
</div>
</div>
</div>

<div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
<div className="grid grid-cols-2 gap-4">
<div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
<p className="text-xs text-gray-500">Monthly downloads (est.)</p>
<p className="mt-1 text-2xl font-semibold text-gray-900" id="out-downloads">160</p>
</div>
<div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
<p className="text-xs text-gray-500">Estimated opportunities</p>
<p className="mt-1 text-2xl font-semibold text-gray-900" id="out-opps">13</p>
</div>
<div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
<p className="text-xs text-gray-500">Pipeline added (est.)</p>
<p className="mt-1 text-2xl font-semibold text-gray-900" id="out-pipeline">$325,000</p>
</div>
<div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
<p className="text-xs text-gray-500">Hours saved vs in‑house</p>
<p className="mt-1 text-2xl font-semibold text-gray-900" id="out-hours">20 hrs</p>
</div>
</div>
<p className="mt-4 text-xs text-gray-500">
              Estimates only. Actual results depend on audience size, offer, gating, and channel mix.
            </p>
<div className="mt-4">
<button className="inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium text-white shadow-sm hover:brightness-110" data-open-modal="#sampleModal" style={{backgroundColor: '#14B8A6'}}>
                Get a sample and plan your rollout →
              </button>
</div>
</div>
</div>
</div>
</section>

<section className="scroll-mt-24 py-14 md:py-20 border-t border-gray-200" id="pricing">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between mb-6">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">Simple pricing structure</h2>
<span className="text-xs text-gray-500">48‑hour turnaround guaranteed</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm flex flex-col">
<div className="mb-4">
<h3 className="text-lg font-semibold text-gray-900">Pilot</h3>
<p className="text-sm text-gray-600">Test with one webinar</p>
</div>
<div className="mb-4">
<span className="text-3xl font-semibold text-gray-900">$750</span>
</div>
<ul className="text-sm text-gray-700 space-y-2 mb-6">
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>8–12 page professionally designed PDF</li>
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>48‑hour delivery</li>
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>Two rounds of edits</li>
</ul>
<button className="mt-auto inline-flex h-11 items-center justify-center rounded-md px-5 text-sm font-medium text-white shadow-sm hover:brightness-110" data-open-modal="#sampleModal" style={{backgroundColor: '#14B8A6'}}>
              Start with a sample →
            </button>
</div>

<div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm flex flex-col relative">
<span className="absolute -top-3 right-4 inline-flex items-center rounded-full bg-indigo-600 text-white text-xs px-2 py-1 shadow">Best value</span>
<div className="mb-4">
<h3 className="text-lg font-semibold text-gray-900">Growth</h3>
<p className="text-sm text-gray-600">3 webinars per month</p>
</div>
<div className="mb-4">
<span className="text-3xl font-semibold text-gray-900">$2,500</span>
<span className="text-sm text-gray-500">/ month</span>
</div>
<ul className="text-sm text-gray-700 space-y-2 mb-6">
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-indigo-400"></span>Includes 3 PDFs / month</li>
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-indigo-400"></span>Priority 48‑hour delivery</li>
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-indigo-400"></span>Unlimited stakeholder seats</li>
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-indigo-400"></span>Brand‑aligned design each PDF</li>
</ul>
<button className="mt-auto inline-flex h-11 items-center justify-center rounded-md px-5 text-sm font-medium text-white shadow-sm hover:brightness-110" data-open-modal="#sampleModal" style={{backgroundColor: '#14B8A6'}}>
              Reserve your slot →
            </button>
</div>

<div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm flex flex-col">
<div className="mb-4">
<h3 className="text-lg font-semibold text-gray-900">Scale</h3>
<p className="text-sm text-gray-600">6 webinars per month</p>
</div>
<div className="mb-4">
<span className="text-3xl font-semibold text-gray-900">$4,000</span>
<span className="text-sm text-gray-500">/ month</span>
</div>
<ul className="text-sm text-gray-700 space-y-2 mb-6">
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-indigo-400"></span>Includes 6 PDFs / month</li>
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-indigo-400"></span>Priority 48‑hour delivery</li>
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-indigo-400"></span>Unlimited stakeholder seats</li>
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-indigo-400"></span>Brand‑aligned design each PDF</li>
</ul>
<button className="mt-auto inline-flex h-11 items-center justify-center rounded-md px-5 text-sm font-medium text-white shadow-sm hover:brightness-110" data-open-modal="#sampleModal" style={{backgroundColor: '#14B8A6'}}>
              Reserve your slot →
            </button>
</div>
</div>
<p className="mt-4 text-xs text-gray-500">No long contracts. Pause or cancel anytime. 100% satisfaction guarantee.</p>
</div>
</section>

<section className="scroll-mt-24 py-14 md:py-20 border-t border-gray-200" id="samples">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between mb-6">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">Recent sample layouts</h2>
<button className="hidden md:inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium bg-white border border-gray-200 hover:bg-gray-50" data-open-modal="#sampleModal">
            Request your sample →
          </button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<button className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm" data-gallery="one" data-open-modal="#galleryModal">
<img alt="Sample PDF cover mockup" className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
<div>
<p className="text-white text-sm font-medium">Strategic Framework PDF</p>
<p className="text-white/80 text-xs">12 pages • Clean &amp; modern</p>
</div>
<span className="inline-flex items-center text-xs text-white bg-black/40 rounded px-2 py-0.5">View pages</span>
</div>
</button>

<button className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm" data-gallery="two" data-open-modal="#galleryModal">
<img alt="Case study PDF mockup" className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105" src="https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
<div>
<p className="text-white text-sm font-medium">Case Study                PDF</p>
<p className="text-white/80 text-xs">10 pages • Product-led story</p>
</div>
<span className="inline-flex items-center text-xs text-white bg-black/40 rounded px-2 py-0.5">View pages</span>
</div>
</button>

<button className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm" data-gallery="three" data-open-modal="#galleryModal">
<img alt="Playbook PDF mockup" className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
<div>
<p className="text-white text-sm font-medium">Go-To-Market Playbook</p>
<p className="text-white/80 text-xs">8 pages • Bold &amp; branded</p>
</div>
<span className="inline-flex items-center text-xs text-white bg-black/40 rounded px-2 py-0.5">View pages</span>
</div>
</button>
</div>
<div className="mt-6 md:hidden">
<button className="w-full inline-flex h-11 items-center justify-center rounded-md px-5 text-sm font-medium bg-white border border-gray-200 hover:bg-gray-50" data-open-modal="#sampleModal">
            Request your sample →
          </button>
</div>
</div>
</section>

<section className="scroll-mt-24 py-14 md:py-20 border-t border-gray-200 bg-gray-50" id="faq">
<div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-6">Frequently asked questions</h2>
<div className="space-y-3">
<details className="group rounded-lg border border-gray-200 bg-white p-4">
<summary className="flex cursor-pointer list-none items-center justify-between gap-4">
<span className="text-sm font-medium text-gray-900">What do you need from us to start?</span>
<span className="shrink-0 inline-flex h-6 w-6 items-center justify-center rounded-md border border-gray-200 bg-gray-50 text-gray-700 transition-transform group-open:rotate-45">+</span>
</summary>
<div className="mt-3 text-sm text-gray-600">
              Share your webinar recording link (or upload), any brand guidelines (fonts, colors, logo), and your preferred CTA or gating plan. That’s it.
            </div>
</details>
<details className="group rounded-lg border border-gray-200 bg-white p-4">
<summary className="flex cursor-pointer list-none items-center justify-between gap-4">
<span className="text-sm font-medium text-gray-900">Is distribution included?</span>
<span className="shrink-0 inline-flex h-6 w-6 items-center justify-center rounded-md border border-gray-200 bg-gray-50 text-gray-700 transition-transform group-open:rotate-45">+</span>
</summary>
<div className="mt-3 text-sm text-gray-600">
              You distribute — post anywhere, anytime. We focus on expert writing and brand‑perfect design so you can deploy across website, email, social, partners, and sales.
            </div>
</details>
<details className="group rounded-lg border border-gray-200 bg-white p-4">
<summary className="flex cursor-pointer list-none items-center justify-between gap-4">
<span className="text-sm font-medium text-gray-900">What’s the typical turnaround time?</span>
<span className="shrink-0 inline-flex h-6 w-6 items-center justify-center rounded-md border border-gray-200 bg-gray-50 text-gray-700 transition-transform group-open:rotate-45">+</span>
</summary>
<div className="mt-3 text-sm text-gray-600">
              48 hours from receiving your recording and brand assets. Faster options available for time‑sensitive launches.
            </div>
</details>
<details className="group rounded-lg border border-gray-200 bg-white p-4">
<summary className="flex cursor-pointer list-none items-center justify-between gap-4">
<span className="text-sm font-medium text-gray-900">How many edit rounds are included?</span>
<span className="shrink-0 inline-flex h-6 w-6 items-center justify-center rounded-md border border-gray-200 bg-gray-50 text-gray-700 transition-transform group-open:rotate-45">+</span>
</summary>
<div className="mt-3 text-sm text-gray-600">
              Pilot includes two rounds. Growth and Scale include collaborative feedback with unlimited stakeholder seats.
            </div>
</details>
<details className="group rounded-lg border border-gray-200 bg-white p-4">
<summary className="flex cursor-pointer list-none items-center justify-between gap-4">
<span className="text-sm font-medium text-gray-900">What file formats do we receive?</span>
<span className="shrink-0 inline-flex h-6 w-6 items-center justify-center rounded-md border border-gray-200 bg-gray-50 text-gray-700 transition-transform group-open:rotate-45">+</span>
</summary>
<div className="mt-3 text-sm text-gray-600">
              Print‑ready and screen‑optimized PDF, plus export assets (illustrations, cover image) for social and email previews.
            </div>
</details>
</div>
<div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 rounded-lg border border-teal-200 bg-teal-50 p-4">
<p className="text-sm text-teal-900">Still have questions? We’ll send a sample and walk you through the process.</p>
<button className="inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium text-white shadow-sm hover:brightness-110" data-open-modal="#sampleModal" style={{backgroundColor: '#14B8A6'}}>Request a sample →</button>
</div>
</div>
</section>

<section className="py-14 md:py-20 border-t border-gray-200">
<div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
<div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-r from-teal-50 to-indigo-50 p-8">
<div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
<div className="md:col-span-2">
<h3 className="text-xl md:text-2xl font-semibold tracking-tight text-gray-900">Turn your next webinar into a lead magnet in 48 hours</h3>
<p className="mt-2 text-sm text-gray700">Send us the recording. We’ll handle the writing and design. You distribute — post anywhere, anytime.</p>
</div>
<div className="md:col-span-1 md:justify-self-end">
<button className="w-full md:w-auto inline-flex h-11 items-center justify-center rounded-md px-5 text-sm font-medium text-white shadow-sm hover:brightness-110" data-open-modal="#sampleModal" style={{backgroundColor: '#14B8A6'}}>Get your sample PDF →</button>
</div>
</div>
<div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/60 border border-gray-200"></div>
</div>
</div>
</section>

<footer className="border-t border-gray-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
<div className="flex flex-col md:flex-row items-center justify-between gap-4">
<div className="inline-flex items-center gap-2">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-gray-200 bg-white shadow-sm">
<span className="font-semibold tracking-tight text-gray-900">WLL</span>
</span>
<span className="text-sm text-gray-600">WebinarLeadLab</span>
</div>
<nav className="flex items-center gap-5 text-sm">
<a className="text-gray-600 hover:text-gray-900" href="#problem">Problem</a>
<a className="text-gray-600 hover:text-gray-900" href="#solution">Solution</a>
<a className="text-gray-600 hover:text-gray-900" href="#roi">ROI</a>
<a className="text-gray-600 hover:text-gray-900" href="#pricing">Pricing</a>
<a className="text-gray-600 hover:text-gray-900" href="#samples">Samples</a>
<a className="text-gray-600 hover:text-gray-900" href="#faq">FAQ</a>
</nav>
</div>
<div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-gray-500">
<p>© <span id="year"></span> WebinarLeadLab. All rights reserved.</p>
<p>48‑hour delivery • Satisfaction guaranteed</p>
</div>
</div>
</footer>

<div className="fixed inset-0 z-[60] hidden items-center justify-center p-4" id="sampleModal">
<div aria-hidden="true" className="absolute inset-0 bg-black/50" data-close-modal=""></div>
<div aria-labelledby="sampleModalTitle" aria-modal="true" className="relative w-full max-w-lg rounded-xl border border-gray-200 bg-white shadow-xl" role="dialog">
<div className="flex items-center justify-between p-4 border-b border-gray-200">
<h3 className="text-base font-semibold text-gray-900" id="sampleModalTitle">Get your sample PDF</h3>
<button aria-label="Close" className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-gray-200 bg-white hover:bg-gray-50" data-close-modal="">
<svg className="h-4 w-4 text-gray-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<line x1="18" x2="6" y1="6" y2="18"></line>
<line x1="6" x2="18" y1="6" y2="18"></line>
</svg>
</button>
</div>
<form className="p-4 space-y-4" id="sampleForm">
<div>
<label className="block text-sm font-medium text-gray-900 mb-1" htmlFor="f-name">Name</label>
<input className="w-full h-10 rounded-md border border-gray-300 bg-white px-3 text-sm" id="f-name" name="name" placeholder="Your name" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-900 mb-1" htmlFor="f-email">Work email</label>
<input className="w-full h-10 rounded-md border border-gray-300 bg-white px-3 text-sm" id="f-email" name="email" placeholder="you@company.com" required="" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-900 mb-1" htmlFor="f-company">Company</label>
<input className="w-full h-10 rounded-md border border-gray-300 bg-white px-3 text-sm" id="f-company" name="company" placeholder="Company Inc." type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-900 mb-1" htmlFor="f-link">Webinar link (optional)</label>
<input className="w-full h-10 rounded-md border border-gray-300 bg-white px-3 text-sm" id="f-link" name="link" placeholder="https://..." type="url"/>
</div>
<div className="flex items-center justify-between gap-3 pt-2">
<p className="text-xs text-gray-500">We’ll reply within 1 business day with a tailored sample and next steps.</p>
<button className="inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium text-white shadow-sm hover:brightness-110" style={{backgroundColor: '#14B8A6'}} type="submit">Send →</button>
</div>
</form>
</div>

<div className="fixed inset-0 z-[60] hidden items-center justify-center p-4" id="galleryModal">
<div aria-hidden="true" className="absolute inset-0 bg-black/50" data-close-modal=""></div>
<div aria-labelledby="galleryModalTitle" aria-modal="true" className="relative w-full max-w-5xl rounded-xl border border-gray-200 bg-white shadow-xl" role="dialog">
<div className="flex items-center justify-between p-4 border-b border-gray-200">
<h3 className="text-base font-semibold text-gray-900" id="galleryModalTitle">Sample pages</h3>
<button aria-label="Close" className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-gray-200 bg-white hover:bg-gray-50" data-close-modal="">
<svg className="h-4 w-4 text-gray-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox=" 0 24 24" xmlns="http://www.w3.org/2000/svg">
<line x1="18" x2="6" y1="6" y2="18"></line>
<line x1="6" x2="18" y1="6" y2="18"></line>
</svg>
</button>
</div>
<div className="p-4">
<div className="aspect-[16/10] w-full overflow-hidden rounded-lg border border-gray-200 bg-gray-50 flex items-center justify-center">
<img alt="Sample page preview" className="max-h-full w-auto object-contain" id="galleryMain" src=""/>
</div>
<div className="mt-4 grid grid-cols-3 sm:grid-cols-6 gap-2" id="thumbs"></div>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-2 &lt;button id=" prevbtn"="">Prev
              <button className="inline-flex h-9 items-center justify-center rounded-md px-3 text-sm font-medium bg-white border border-gray-200 hover:bg-gray-50" id="next">Next</button>
</div>
<button className="inline-flex h-9 items-center justify-center rounded-md px-3 text-sm font-medium text-white shadow-sm hover:brightness-110" data-open-modal="#sampleModal" style={{backgroundColor: '#14B8A6'}}>Request similar PDF →</button>
</div>
</div>
</div>
</div>


</div>
    </>
  );
}
