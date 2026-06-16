import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    // Mobile menu
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    if (menuBtn && mobileMenu) {
      menuBtn.addEventListener('click', () => {
        const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
        menuBtn.setAttribute('aria-expanded', String(!expanded));
        mobileMenu.classList.toggle('hidden');
      });
    }

    // Accordion
    const accBtns = document.querySelectorAll('.acc-btn');
    accBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', String(!expanded));
        const panelId = btn.getAttribute('aria-controls');
        const panel = document.getElementById(panelId);
        const icon = btn.querySelector('[data-lucide="chevron-down"]');
        if (panel) panel.hidden = expanded;
        if (icon) icon.classList.toggle('rotate-180', !expanded);
      });
    });

    // Pricing toggle
    const billingToggle = document.getElementById('billingToggle');
    const saveBadge = document.getElementById('saveBadge');
    function setBilling(annual) {
      if (!billingToggle) return;
      if (annual) {
        billingToggle.setAttribute('aria-checked', 'true');
        billingToggle.classList.remove('bg-gray-200');
        billingToggle.classList.add('bg-indigo-600');
        const k = billingToggle.querySelector('.knob');
        if (k) k.style.transform = 'translateX(20px)';
        if (saveBadge) saveBadge.classList.remove('hidden');
      } else {
        billingToggle.setAttribute('aria-checked', 'false');
        billingToggle.classList.add('bg-gray-200');
        billingToggle.classList.remove('bg-indigo-600');
        const k = billingToggle.querySelector('.knob');
        if (k) k.style.transform = 'translateX(0px)';
        if (saveBadge) saveBadge.classList.add('hidden');
      }
      document.querySelectorAll('[data-billing="monthly"]').forEach(el => {
        if (annual) el.classList.add('hidden'); else el.classList.remove('hidden');
      });
      document.querySelectorAll('[data-billing="annual"]').forEach(el => {
        if (annual) el.classList.remove('hidden'); else el.classList.add('hidden');
      });
    }
    if (billingToggle) {
      let annual = false;
      setBilling(annual);
      billingToggle.addEventListener('click', () => {
        annual = !annual;
        setBilling(annual);
      });
      billingToggle.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          annual = !annual;
          setBilling(annual);
        }
      });
    }

    // Initialize lucide icons
    document.addEventListener('DOMContentLoaded', () => {
      if (window.lucide && lucide.createIcons) {
        lucide.createIcons();
      }
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
<nav className="mx-auto max-w-7xl px-6 md:px-8">
<div className="flex h-16 items-center justify-between">
<a className="flex items-center" href="#">
<span className="relative inline-flex h-8 w-8 items-center justify-center">
<span className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 opacity-90"></span>
<span className="relative inline-flex h-8 w-8 items-center justify-center text-white">
<svg className="lucide lucide-circle w-4 h-4" data-lucide="circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle></svg>
</span>
</span>
<span className="text-lg font-medium tracking-tight ml-3">contxt</span>
</a>
<div className="hidden md:flex items-center gap-9 text-sm">
<a className="text-gray-600 hover:text-gray-900 transition-colors" href="#">Features</a>
<a className="text-gray-600 hover:text-gray-900 transition-colors" href="#">Solutions</a>
<a className="text-gray-600 hover:text-gray-900 transition-colors" href="#">Resources</a>
<a className="text-gray-600 hover:text-gray-900 transition-colors" href="#">Pricing</a>
</div>
<div className="hidden md:flex items-center gap-3.5">
<a className="text-sm text-gray-700 hover:text-gray-900 transition-colors" href="#">Sign in</a>
<a className="inline-flex items-center rounded-md bg-[#0246CE] px-3.5 py-2.5 text-sm text-white hover:bg-[#115FFD] transition-colors" href="#">
            Get started
          </a>
</div>
<button aria-expanded="false" aria-label="Toggle menu" className="md:hidden inline-flex items-center justify-center rounded-md border border-gray-200 px-3 py-2.5 hover:bg-gray-50 active:bg-gray-100 transition-colors" id="menuBtn">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>

<div className="md:hidden hidden border-t border-gray-100" id="mobileMenu">
<div className="py-4 space-y-1.5">
<a className="block px-3 py-2.5 text-gray-700 hover:bg-gray-50 rounded-md" href="#">Features</a>
<a className="block px-3 py-2.5 text-gray-700 hover:bg-gray-50 rounded-md" href="#">Solutions</a>
<a className="block px-3 py-2.5 text-gray-700 hover:bg-gray-50 rounded-md" href="#">Resources</a>
<a className="block px-3 py-2.5 text-gray-700 hover:bg-gray-50 rounded-md" href="#">Pricing</a>
<div className="pt-3 flex items-center gap-2.5">
<a className="px-3 py-2.5 text-gray-700 hover:text-gray-900" href="#">Sign in</a>
<a className="inline-flex items-center rounded-md bg-[#0246CE] px-3.5 py-2.5 text-sm text-white hover:bg-[#115FFD] transition-colors" href="#">
              Get started
            </a>
</div>
</div>
</div>
</nav>
</header>

<section className="relative">
<div className="max-w-7xl md:px-8 mr-auto ml-auto pr-6 pl-6">
<div className="grid lg:grid-cols-12 gap-10 lg:gap-16 md:pt-28 pt-20 items-center">
<div className="lg:col-span-8 lg:col-start-3 text-center">
<div className="inline-flex gap-2 text-xs text-gray-600 border-gray-200 border rounded-full mr-auto mb-6 ml-auto pt-1 pr-3 pb-1 pl-3 items-center">Now with collaboration tools<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span></div>
<h1 className="md:text-6xl leading-tight text-5xl font-bold text-gray-900 tracking-tight">Start every hire with people you <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">trust</span></h1>
<p className="md:text-xl max-w-2xl text-lg text-gray-600 mt-6 mr-auto ml-auto">Contxt is the network-first hiring platform that helps managers start every hire with trusted people their team already knows and would rehire.
</p>
<div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center" id="ctaRow">
<a className="inline-flex items-center justify-center rounded-md bg-[#0246CE] px-5 py-3.5 text-white text-sm hover:bg-[#115FFD] transition-colors" href="#">
              Get started
            </a>
<a className="inline-flex items-center justify-center gap-2 rounded-md px-5 py-3.5 text-sm text-gray-800 hover:text-gray-900 hover:bg-gray-50 border border-gray-200 transition-colors" href="#">
              Learn more
              <svg className="lucide lucide-arrow-right w-4.5 h-4.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="mt-24 sm:mt-28 border border-gray-200 rounded-xl p-6 sm:p-7 text-center">
<dl className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="">
<dt className="text-sm text-gray-600">User satisfaction</dt>
<dd className="mt-1.5 text-3xl font-light tracking-tight">95%</dd>
</div>
<div className="">
<dt className="text-sm text-gray-600">Active users</dt>
<dd className="mt-1.5 text-3xl font-light tracking-tight">15k+</dd>
</div>
<div className="">
<dt className="text-sm text-gray-600">Support available</dt>
<dd className="mt-1.5 text-3xl font-light tracking-tight">24/7</dd>
</div>
<div className="">
<dt className="text-sm text-gray-600">Cloud-based</dt>
<dd className="mt-1.5 text-3xl font-light tracking-tight">100%</dd>
</div>
</dl>
</div>
</div>

</div>

</div>
</section>

<section className="mt-28 md:mt-32 border-t border-gray-100">
<div className="mx-auto max-w-7xl px-6 md:px-8 py-12">
<div className="flex items-center justify-between">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">What people are saying</h2>
</div>
<div className="relative mt-6">
<div className="overflow-hidden" id="tViewport">
<div className="flex items-stretch gap-5 md:gap-6 will-change-transform" id="tTrack">

<div className="shrink-0 w-[280px] sm:w-[340px] md:w-[380px] border border-gray-200 rounded-xl bg-white/80 backdrop-blur p-5 flex flex-col">
<div className="flex items-center justify-between">
<div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-50 border border-gray-200 text-gray-700">
<svg className="lucide lucide-quote w-4.5 h-4.5" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
</div>
<span className="text-xs text-gray-500">5.0</span>
</div>
<p className="mt-4 text-gray-700 text-sm md:text-base leading-relaxed flex-1">This completely changed how we start searches. Faster cycles and better fits from people our team already trusts.</p>
<div className="mt-5 flex items-center gap-3">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white text-sm">PS</span>
<div>
<div className="text-sm font-medium text-gray-900">Priya Singh</div>
<div className="text-xs text-gray-500">Head of Talent</div>
</div>
</div>
</div>

<div className="shrink-0 w-[280px] sm:w-[340px] md:w-[380px] border border-gray-200 rounded-xl bg-white/80 backdrop-blur p-5 flex flex-col">
<div className="flex items-center justify-between">
<div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-50 border border-gray-200 text-gray-700">
<svg className="lucide lucide-quote w-4.5 h-4.5" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
</div>
<span className="text-xs text-gray-500">4.9</span>
</div>
<p className="mt-4 text-gray-700 text-sm md:text-base leading-relaxed flex-1">We filled two critical roles from trusted intros in a week. The signal quality is night and day.</p>
<div className="mt-5 flex items-center gap-3">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 text-white text-sm">DK</span>
<div>
<div className="text-sm font-medium text-gray-900">David Kim</div>
<div className="text-xs text-gray-500">Engineering Manager</div>
</div>
</div>
</div>

<div className="shrink-0 w-[280px] sm:w-[340px] md:w-[380px] border border-gray-200 rounded-xl bg-white/80 backdrop-blur p-5 flex flex-col">
<div className="flex items-center justify-between">
<div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-50 border border-gray-200 text-gray-700">
<svg className="lucide lucide-quote w-4.5 h-4.5" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
</div>
<span className="text-xs text-gray-500">4.9</span>
</div>
<p className="mt-4 text-gray-700 text-sm md:text-base leading-relaxed flex-1">The easiest way to start with people we’d rehire. Our interview-to-offer rate improved immediately.</p>
<div className="mt-5 flex items-center gap-3">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gray-900 text-white text-sm">AL</span>
<div>
<div className="text-sm font-medium text-gray-900">Amelia Lopez</div>
<div className="text-xs text-gray-500">People Operations</div>
</div>
</div>
</div>

<div className="shrink-0 w-[280px] sm:w-[340px] md:w-[380px] border border-gray-200 rounded-xl bg-white/80 backdrop-blur p-5 flex flex-col">
<div className="flex items-center justify-between">
<div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-50 border border-gray-200 text-gray-700">
<svg className="lucide lucide-quote w-4.5 h-4.5" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
</div>
<span className="text-xs text-gray-500">5.0</span>
</div>
<p className="mt-4 text-gray-700 text-sm md:text-base leading-relaxed flex-1">Great UX, minimal noise, and the team features make collaboration effortless.</p>
<div className="mt-5 flex items-center gap-3">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 text-white text-sm">RJ</span>
<div>
<div className="text-sm font-medium text-gray-900">Riley Johnson</div>
<div className="text-xs text-gray-500">Recruiting Lead</div>
</div>
</div>
</div>

<div className="shrink-0 w-[280px] sm:w-[340px] md:w-[380px] border border-gray-200 rounded-xl bg-white/80 backdrop-blur p-5 flex flex-col">
<div className="flex items-center justify-between">
<div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-50 border border-gray-200 text-gray-700">
<svg className="lucide lucide-quote w-4.5 h-4.5" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
</div>
<span className="text-xs text-gray-500">4.8</span>
</div>
<p className="mt-4 text-gray-700 text-sm md:text-base leading-relaxed flex-1">We start every search here first. It’s the fastest path to strong shortlists.</p>
<div className="mt-5 flex items-center gap-3">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gray-700 text-white text-sm">SS</span>
<div>
<div className="text-sm font-medium text-gray-900">Sofia Santos</div>
<div className="text-xs text-gray-500">Hiring Manager</div>
</div>
</div>
</div>

<div className="shrink-0 w-[280px] sm:w-[340px] md:w-[380px] border border-gray-200 rounded-xl bg-white/80 backdrop-blur p-5 flex flex-col">
<div className="flex items-center justify-between">
<div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-50 border border-gray-200 text-gray-700">
<svg className="lucide lucide-quote w-4.5 h-4.5" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
</div>
<span className="text-xs text-gray-500">5.0</span>
</div>
<p className="mt-4 text-gray-700 text-sm md:text-base leading-relaxed flex-1">High-signal referrals from our network. It’s become part of our hiring playbook.</p>
<div className="mt-5 flex items-center gap-3">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 text-white text-sm">MT</span>
<div>
<div className="text-sm font-medium text-gray-900">Marcus Tan</div>
<div className="text-xs text-gray-500">VP, Product</div>
</div>
</div>
</div>
</div>
</div>

<div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white"></div>
<div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white"></div>
</div>
</div>
</section>

<section className="mt-28 md:mt-32 border-t border-gray-100" id="benefits">
<div className="mx-auto max-w-3xl px-6 md:px-8 py-12">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">Benefits</h2>
<div className="mt-6 border border-gray-200 rounded-xl divide-y divide-gray-200 bg-white/70 backdrop-blur">

<div className="group">
<button aria-controls="b1-c" aria-expanded="false" className="acc-btn w-full flex items-center justify-between gap-6 px-5 sm:px-6 py-4 text-left" id="b1-h" type="button">
<span className="text-sm sm:text-base text-gray-900">Faster shortlists</span>
<svg className="lucide lucide-chevron-down w-5 h-5 text-gray-500 transition-transform duration-200" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div aria-labelledby="b1-h" className="px-5 sm:px-6 pb-5 text-sm text-gray-600" hidden="" id="b1-c" role="region">
<p>Kick off every search with warm, trusted intros so you reach strong candidates in days, not weeks.</p>
</div>
</div>

<div className="group">
<button aria-controls="b2-c" aria-expanded="false" className="acc-btn w-full flex items-center justify-between gap-6 px-5 sm:px-6 py-4 text-left" id="b2-h" type="button">
<span className="text-sm sm:text-base text-gray-900">Higher signal</span>
<svg className="lucide lucide-chevron-down w-5 h-5 text-gray-500 transition-transform duration-200" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div aria-labelledby="b2-h" className="px-5 sm:px-6 pb-5 text-sm text-gray-600" hidden="" id="b2-c" role="region">
<p>Move beyond cold outreach. Every profile comes with context from people your team would rehire.</p>
</div>
</div>

<div className="group">
<button aria-controls="b3-c          &lt;button type=" aria-expanded="false" button"="" className="acc-btn w-full flex items-center justify-between gap-6 px-5 sm:px-6 py-4 text-left" id="b3-h" type="button">
<span className="text-sm sm:text-base text-gray-900">Seamless collaboration</span>
<svg className="lucide lucide-chevron-down w-5 h-5 text-gray-500 transition-transform duration-200" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div aria-labelledby="b3-h" className="px-5 sm:px-6 pb-5 text-sm text-gray-600" hidden="" id="b3-c" role="region">
<p>Work with hiring managers and interviewers in one place. Share notes, signal strength, and context without the back-and-forth.</p>
</div>
</div>

<div className="group">
<button aria-controls="b4-c" aria-expanded="false" className="acc-btn w-full flex items-center justify-between gap-6 px-5 sm:px-6 py-4 text-left" id="b4-h" type="button">
<span className="text-sm sm:text-base text-gray-900">Lower cost per hire</span>
<svg className="lucide lucide-chevron-down w-5 h-5 text-gray-500 transition-transform duration-200" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div aria-labelledby="b4-h" className="px-5 sm:px-6 pb-5 text-sm text-gray-600" hidden="" id="b4-c" role="region">
<p>Shorten cycles and reduce agency spend with warm pipelines, so you make better hires with fewer interviews.</p>
</div>
</div>
</div>
</div>
</section>

<section className="mt-28 md:mt-32 border-t border-gray-100" id="pricing">
</section>

<footer className="mt-28 md:mt-32 border-t border-gray-100 bg-white relative">
<div className="mx-auto max-w-7xl px-6 md:px-8 py-12">
<div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

<div className="relative">
<h2 className="mb-4 text-2xl md:text-3xl font-semibold tracking-tight">Stay connected</h2>
<p className="mb-6 text-sm text-gray-600">Join our newsletter for the latest updates and insights.</p>
<form className="relative">
<label className="sr-only" htmlFor="footer-email">Email address</label>
<input className="w-full rounded-md border border-gray-200 bg-white/80 backdrop-blur-sm px-3 py-2 pr-12 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0246CE]/40" id="footer-email" placeholder="Enter your email" type="email"/>
<button aria-label="Subscribe" className="absolute right-1 top-1 h-8 w-8 rounded-full bg-[#0246CE] text-white flex items-center justify-center transition-transform hover:scale-105 hover:bg-[#115FFD]" type="submit">
<svg className="lucide lucide-send w-4 h-4" data-lucide="send" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"></svg>
</button>
</form>
<div className="pointer-events-none absolute -right-4 top-0 h-24 w-24 rounded-full bg-indigo-500/10 blur-2xl"></div>
</div>


<div>
<h3 className="mb-4 text-lg font-semibold">Contact</h3>
<address className="space-y-2 text-sm not-italic text-gray-600">
<p>789 Sample Avenue</p>
<p>Placeholder City, ZZ 98765</p>
<p>Phone: (555) 432-1987</p>
<p>Email: contact@placeholder.net</p>
</address>
</div>

<div className="relative">
<h3 className="mb-4 text-lg font-semibold">Follow us</h3>
<div className="mb-6 flex space-x-3.5">
<a aria-label="Facebook" className="rounded-full bg-gray-50 border border-gray-200 hover:bg-[#0246CE] hover:text-white transition flex items-center justify-center w-9 h-9" href="#">
<svg className="lucide lucide-facebook w-4 h-4" data-lucide="facebook" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"></svg>
</a>
<a aria-label="Twitter" className="rounded-full bg-gray-50 border border-gray-200 hover:bg-[#0246CE] hover:text-white transition flex items-center justify-center w-9 h-9" href="#">
<svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"></svg>
</a>
<a aria-label="Instagram" className="rounded-full bg-gray-50 border border-gray-200 hover:bg-[#0246CE] hover:text-white transition flex items-center justify-center w-9 h-9" href="#">
<svg className="lucide lucide-instagram w-4 h-4" data-lucide="instagram" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"></svg>
</a>
<a aria-label="LinkedIn" className="rounded-full bg-gray-50 border border-gray-200 hover:bg-[#0246CE] hover:text-white transition flex items-center justify-center w-9 h-9" href="#">
<svg className="lucide lucide-linkedin w-4 h-4" data-lucide="linkedin" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"></svg>
</a>
</div>

</div>
</div>
<div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-8 text-center md:flex-row">
<p className="text-sm text-gray-500">© 2024 Contxt. All rights reserved.</p>
<nav className="flex gap-4 text-sm">
<a className="transition-colors hover:text-[#0246CE]" href="#">Privacy Policy</a>
<a className="transition-colors hover:text-[#0246CE]" href="#">Terms of Service</a>
<a className="transition-colors hover:text-[#0246CE]" href="#">Cookie Settings</a>
</nav>
</div>
</div>
</footer>

<a aria-label="Get started" className="fixed bottom-6 right-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#0246CE] text-white shadow-lg hover:bg-[#115FFD] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0246CE]/40" href="#" title="Get started">
<svg className="lucide lucide-rocket w-5 h-5" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"></svg>
</a>


    </>
  );
}
