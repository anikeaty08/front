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



      // Init icons with 1.5 stroke width
      document.addEventListener('DOMContentLoaded', function () {
        if (window.lucide) {
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }

        // Mobile menu
        const mobileBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        const openModal = document.getElementById('openModal');
        const openModalMobile = document.getElementById('openModalMobile');
        const openModalHero = document.getElementById('openModalHero');
        const openModalCTA = document.getElementById('openModalCTA');
        const modal = document.getElementById('modal');
        const closeModal = document.getElementById('closeModal');

        if (mobileBtn && mobileMenu) {
          mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
          });
        }

        function showModal() {
          modal.classList.remove('hidden');
          // Refresh icons inside modal if needed
          if (window.lucide) lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }
        function hideModal() {
          modal.classList.add('hidden');
        }

        [openModal, openModalMobile, openModalHero, openModalCTA].forEach(btn => {
          if (btn) btn.addEventListener('click', showModal);
        });
        if (closeModal) closeModal.addEventListener('click', hideModal);
        if (modal) modal.addEventListener('click', (e) => {
          if (e.target === modal) hideModal();
        });

        // Year
        const yearEl = document.getElementById('year');
        if (yearEl) yearEl.textContent = new Date().getFullYear();

        // Chart.js Hero chart
        const ctx = document.getElementById('heroChart');
        if (ctx) {
          const gradient = ctx.getContext('2d').createLinearGradient(0, 0, 0, 180);
          gradient.addColorStop(0, 'rgba(37, 99, 235, 0.25)');   // blue-600
          gradient.addColorStop(1, 'rgba(37, 99, 235, 0.02)');
          new Chart(ctx, {
            type: 'line',
            data: {
              labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              datasets: [{
                label: 'Signups',
                data: [120, 160, 140, 200, 240, 260, 300],
                borderColor: '#4f46e5', // indigo-600
                backgroundColor: gradient,
                tension: 0.35,
                fill: true,
                pointRadius: 0,
                borderWidth: 2
              }]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: { display: false },
                tooltip: { intersect: false, mode: 'index', displayColors: false }
              },
              scales: {
                x: {
                  display: true,
                  grid: { display: false },
                  ticks: { color: '#64748b', font: { size: 11 } } // slate-500
                },
                y: {
                  display: true,
                  grid: { color: 'rgba(148,163,184,0.2)', drawBorder: false },
                  ticks: { color: '#64748b', font: { size: 11 }, stepSize: 50 }
                }
              }
            }
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
      

<header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200">
<div className="mx-auto max-w-7xl px-6">
<div className="flex items-center justify-between h-16">
<a className="inline-flex items-center gap-2" href="#">
<div className="h-8 w-8 rounded-md bg-gradient-to-tr from-blue-600 via-cyan-500 to-violet-600 text-white grid place-items-center text-sm font-semibold tracking-tight">LA</div>
<span className="text-slate-900 text-base font-medium tracking-tight">Launch Agency</span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
<a className="hover:text-slate-900 transition-colors" href="#services">Services</a>
<a className="hover:text-slate-900 transition-colors" href="#process">Process</a>
<a className="hover:text-slate-900 transition-colors" href="#work">Work</a>
<a className="hover:text-slate-900 transition-colors" href="#tech">Technologies</a>
<a className="hover:text-slate-900 transition-colors" href="#why">Why Us</a>
</nav>
<div className="flex items-center gap-3">
<a className="hidden md:inline-flex items-center px-3.5 py-2 rounded-md border border-slate-300 text-slate-800 text-sm font-medium hover:bg-slate-50 hover:border-slate-400 transition-colors" href="#work">View Projects</a>
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-white text-sm font-medium bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-700 hover:via-indigo-700 hover:to-violet-700 shadow-sm focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 transition" id="openModal">
<i className="w-4 h-4" data-lucide="phone-call"></i>
              Book a Free Call
            </button>
<button aria-label="Open menu" className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md border border-slate-300 hover:bg-slate-50 transition" id="mobileMenuBtn">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>
</div>

<div className="md:hidden hidden pb-4" id="mobileMenu">
<div className="pt-2 grid gap-2 text-sm text-slate-700">
<a className="px-3 py-2 rounded-md hover:bg-slate-50" href="#services">Services</a>
<a className="px-3 py-2 rounded-md hover:bg-slate-50" href="#process">Process</a>
<a className="px-3 py-2 rounded-md hover:bg-slate-50" href="#work">Work</a>
<a className="px-3 py-2 rounded-md hover:bg-slate-50" href="#tech">Technologies</a>
<a className="px-3 py-2 rounded-md hover:bg-slate-50" href="#why">Why Us</a>
<a className="px-3 py-2 rounded-md border border-slate-300 text-slate-800" href="#cta">View Projects</a>
<button className="px-3 py-2 rounded-md text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600" id="openModalMobile">Book a Free Call</button>
</div>
</div>
</div>
</header>

<section className="relative overflow-hidden">
<div className="mx-auto max-w-7xl px-6 pt-16 pb-10 lg:pt-24">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
<div>
<div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 shadow-sm">
<i className="w-3.5 h-3.5 text-blue-600" data-lucide="zap"></i>
              Fast execution, scalable foundations
            </div>
<h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl tracking-tight font-semibold text-slate-900">
              Launch your MVP or delegate your next project—fast, clean, and scalable
            </h1>
<p className="mt-5 text-base md:text-lg text-slate-600 max-w-xl">
              Webflow, Framer, and AI-powered development for startups, businesses, and agencies. We take care of execution so you can focus on growth.
            </p>
<div className="mt-8 flex flex-col sm:flex-row gap-3">
<button className="inline-flex items-center gap-2 px-5 py-3 rounded-md text-white text-sm font-medium bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-700 hover:via-indigo-700 hover:to-violet-700 shadow-sm focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 transition" id="openModalHero">
<i className="w-4.5 h-4.5" data-lucide="calendar"></i>
                Book a Free Call
              </button>
<a className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-slate-300 text-slate-800 text-sm font-medium hover:bg-slate-50 hover:border-slate-400 transition" href="#work">
<i className="w-4.5 h-4.5" data-lucide="folder-open"></i>
                View Projects
              </a>
</div>
<div className="mt-8 flex items-center gap-6 text-xs text-slate-500">
<div className="flex -space-x-2">
<img alt="Client 1" className="h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=80&amp;auto=format&amp;fit=crop"/>
<img alt="Client 2" className="h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&amp;w=80&amp;auto=format&amp;fit=crop"/>
<img alt="Client 3" className="h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&amp;w=80&amp;auto=format&amp;fit=crop"/>
</div>
<div>Trusted by founders, agencies, and growing teams</div>
</div>
</div>

<div className="relative">
<div aria-hidden="true" className="absolute inset-0 -z-10 blur-3xl opacity-30">
<div className="w-[36rem] h-[36rem] bg-gradient-to-br from-blue-500/30 via-cyan-400/30 to-violet-500/30 rounded-full mx-auto"></div>
</div>
<div className="rounded-2xl border border-slate-200 bg-white/90 shadow-lg shadow-slate-200/50 overflow-hidden">
<div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 bg-slate-50">
<div className="flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-full bg-red-400"></span>
<span className="h-2.5 w-2.5 rounded-full bg-amber-400"></span>
<span className="h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
</div>
<div className="text-xs text-slate-500">MVP Dashboard</div>
<div className="flex items-center gap-2 text-slate-500">
<i className="w-4 h-4" data-lucide="sliders-horizontal"></i>
</div>
</div>
<div className="p-4 md:p-6">
<div className="grid md:grid-cols-3 gap-4">
<div className="md:col-span-2 border border-slate-200 rounded-lg p-4">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-slate-800">Acquisition</div>
<div className="text-xs text-emerald-600 inline-flex items-center gap-1">
<i className="w-3.5 h-3.5" data-lucide="trending-up"></i>
                        +24%
                      </div>
</div>
<div className="mt-3">
<div className="relative w-full h-44">
<div className="w-full h-full">
<div className="h-full"><canvas id="heroChart"></canvas></div>
</div>
</div>
</div>
</div>
<div className="space-y-4">
<div className="border border-slate-200 rounded-lg p-4">
<div className="text-xs text-slate-500">Signups (7d)</div>
<div className="mt-1 text-2xl font-semibold tracking-tight text-slate-900">1,284</div>
<div className="mt-2 text-xs text-emerald-600 inline-flex items-center gap-1">
<i className="w-3.5 h-3.5" data-lucide="arrow-up-right"></i>
                        +12%
                      </div>
</div>
<div className="border border-slate-200 rounded-lg p-4">
<div className="flex items-center justify-between">
<div>
<div className="text-xs text-slate-500">Conversion</div>
<div className="mt-1 text-2xl font-semibold tracking-tight text-slate-900">3.1%</div>
</div>
<div className="text-xs text-blue-700 bg-blue-50 border border-blue-200 px-2 py-1 rounded">A/B v2</div>
</div>
</div>
</div>
</div>
<div className="mt-4 grid sm:grid-cols-3 gap-3">
<div className="border border-slate-200 rounded-lg p-3">
<div className="text-xs text-slate-500">Tasks</div>
<div className="mt-1 flex items-center gap-2 text-sm text-slate-700">
<i className="w-4 h-4 text-emerald-600" data-lucide="check-circle"></i> 18 completed
                    </div>
</div>
<div className="border border-slate-200 rounded-lg p-3">
<div className="text-xs text-slate-500">Deploys</div>
<div className="mt-1 flex items-center gap-2 text-sm text-slate-700">
<i className="w-4 h-4 text-indigo-600" data-lucide="server"></i> 5 this week
                    </div>
</div>
<div className="border border-slate-200 rounded-lg p-3">
<div className="text-xs text-slate-500">Satisfaction</div>
<div className="mt-1 flex items-center gap-2 text-sm text-slate-700">
<i className="w-4 h-4 text-amber-600" data-lucide="smile"></i> 4.9 / 5
                    </div>
</div>
</div>
<div className="mt-4 border border-slate-200 rounded-lg p-3">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-slate-800">Sprint Board</div>
<div className="text-xs text-slate-500">Week 34</div>
</div>
<div className="mt-3 grid grid-cols-3 gap-3 text-xs">
<div className="bg-slate-50 border border-slate-200 rounded p-2">
<div className="text-slate-600">Backlog</div>
<div className="mt-2 space-y-2">
<div className="bg-white border border-slate-200 rounded p-2">Auth + billing</div>
<div className="bg-white border border-slate-200 rounded p-2">User settings</div>
</div>
</div>
<div className="bg-slate-50 border border-slate-200 rounded p-2">
<div className="text-slate-600">In Progress</div>
<div className="mt-2 space-y-2">
<div className="bg-white border border-slate-200 rounded p-2">Landing v1</div>
<div className="bg-white border border-slate-200 rounded p-2">AI prompts</div>
</div>
</div>
<div className="bg-slate-50 border border-slate-200 rounded p-2">
<div className="text-slate-600">Done</div>
<div className="mt-2 space-y-2">
<div className="bg-white border border-slate-200 rounded p-2">Design system</div>
<div className="bg-white border border-slate-200 rounded p-2">CMS setup</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
<i className="w-4 h-4" data-lucide="shield-check"></i>
              Secure, scalable, production-ready
            </div>
</div>
</div>
</div>
</section>

<section className="relative">
<div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
<div className="grid lg:grid-cols-2 gap-12 items-stretch">

<div className="relative rounded-2xl overflow-hidden border border-slate-200">
<img alt="Overwhelmed agency owner" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 p-6">
<h3 className="text-white text-2xl tracking-tight font-semibold">The problem</h3>
<p className="mt-2 text-slate-200 text-sm max-w-md">
                Startups waste time building alone. Agencies and business owners lose momentum juggling too many tasks.
              </p>
<div className="mt-4 grid gap-2 text-sm">
<div className="inline-flex items-center gap-2 text-slate-100">
<i className="w-4 h-4 text-amber-300" data-lucide="timer"></i> Delays and context switching
                </div>
<div className="inline-flex items-center gap-2 text-slate-100">
<i className="w-4 h-4 text-rose-300" data-lucide="circle-x"></i> Inconsistent design and quality
                </div>
<div className="inline-flex items-center gap-2 text-slate-100">
<i className="w-4 h-4 text-blue-300" data-lucide="package-open"></i> Hard to scale features
                </div>
</div>
</div>
</div>

<div className="relative rounded-2xl border border-slate-200 bg-white p-6">
<h3 className="text-slate-900 text-2xl tracking-tight font-semibold">The solution</h3>
<p className="mt-2 text-slate-600 text-sm max-w-xl">
              We solve both: fast execution, authentic design, and scalable tech.
            </p>
<div className="mt-6 grid sm:grid-cols-3 gap-4">
<div className="rounded-lg border border-slate-200 p-4">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-blue-50 text-blue-700 grid place-items-center border border-blue-100">
<i className="w-4 h-4" data-lucide="rocket"></i>
</div>
<div className="text-sm font-medium text-slate-800">Rapid MVP</div>
</div>
<p className="mt-2 text-xs text-slate-600">Validate in days, not months.</p>
</div>
<div className="rounded-lg border border-slate-200 p-4">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-indigo-50 text-indigo-700 grid place-items-center border border-indigo-100">
<i className="w-4 h-4" data-lucide="layout-dashboard"></i>
</div>
<div className="text-sm font-medium text-slate-800">Clean UX</div>
</div>
<p className="mt-2 text-xs text-slate-600">Conversion-focused design.</p>
</div>
<div className="rounded-lg border border-slate-200 p-4">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-violet-50 text-violet-700 grid place-items-center border border-violet-100">
<i className="w-4 h-4" data-lucide="workflow"></i>
</div>
<div className="text-sm font-medium text-slate-800">Automation</div>
</div>
<p className="mt-2 text-xs text-slate-600">AI + ops that scale.</p>
</div>
</div>

<div className="mt-6">
<div className="flex items-center gap-3">
<div className="flex-1 h-0.5 bg-gradient-to-r from-blue-200 via-indigo-200 to-violet-200"></div>
<i className="w-5 h-5 text-slate-400" data-lucide="chevrons-right"></i>
<div className="flex-1 h-0.5 bg-gradient-to-r from-blue-200 via-indigo-200 to-violet-200"></div>
</div>
<div className="mt-4 grid sm:grid-cols-3 gap-3 text-xs">
<div className="border border-slate-200 rounded-md p-3 bg-white">
<div className="text-slate-500">Brief</div>
<div className="mt-1 text-slate-800">Goals &amp; scope</div>
</div>
<div className="border border-slate-200 rounded-md p-3 bg-white">
<div className="text-slate-500">Prototype</div>
<div className="mt-1 text-slate-800">Clickable in 48h</div>
</div>
<div className="border border-slate-200 rounded-md p-3 bg-white">
<div className="text-slate-500">Ship</div>
<div className="mt-1 text-slate-800">Deploy &amp; iterate</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="services">
<div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
<div className="flex items-end justify-between">
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold text-slate-900">Services</h2>
<div className="hidden md:flex items-center gap-2 text-xs text-slate-500">
<i className="w-4 h-4" data-lucide="shield"></i>
            Fixed scopes or ongoing partnership
          </div>
</div>
<div className="mt-8 grid md:grid-cols-2 gap-6">

<div className="group rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-sm transition bg-white p-6">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md bg-blue-50 text-blue-700 grid place-items-center border border-blue-100">
<i className="w-5 h-5" data-lucide="cpu"></i>
</div>
<div>
<div className="text-lg font-semibold tracking-tight text-slate-900">AI-Powered MVP Development</div>
<div className="text-sm text-slate-600">Validate your idea in days.</div>
</div>
</div>
<i className="w-5 h-5 text-slate-400 group-hover:text-slate-600 transition" data-lucide="arrow-right"></i>
</div>
<ul className="mt-4 text-sm text-slate-600 space-y-2">
<li className="inline-flex items-center gap-2"><i className="w-4 h-4 text-indigo-600" data-lucide="wand-2"></i> Rapid prototyping</li>
<li className="inline-flex items-center gap-2"><i className="w-4 h-4 text-violet-600" data-lucide="message-square"></i> AI features and chat</li>
<li className="inline-flex items-center gap-2"><i className="w-4 h-4 text-cyan-600" data-lucide="server-cog"></i> Scalable infra</li>
</ul>
</div>

<div className="group rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-sm transition bg-white p-6">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md bg-indigo-50 text-indigo-700 grid place-items-center border border-indigo-100">
<i className="w-5 h-5" data-lucide="globe"></i>
</div>
<div>
<div className="text-lg font-semibold tracking-tight text-slate-900">Webflow &amp; Framer Websites</div>
<div className="text-sm text-slate-600">Modern sites ready to scale.</div>
</div>
</div>
<i className="w-5 h-5 text-slate-400 group-hover:text-slate-600 transition" data-lucide="arrow-right"></i>
</div>
<ul className="mt-4 text-sm text-slate-600 space-y-2">
<li className="inline-flex items-center gap-2"><i className="w-4 h-4 text-rose-600" data-lucide="palette"></i> Premium aesthetic</li>
<li className="inline-flex items-center gap-2"><i className="w-4 h-4 text-blue-600" data-lucide="type"></i> CMS &amp; SEO foundations</li>
<li className="inline-flex items-center gap-2"><i className="w-4 h-4 text-emerald-600" data-lucide="rocket"></i> Lightning-fast delivery</li>
</ul>
</div>

<div className="group rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-sm transition bg-white p-6">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md bg-violet-50 text-violet-700 grid place-items-center border border-violet-100">
<i className="w-5 h-5" data-lucide="pen-tool"></i>
</div>
<div>
<div className="text-lg font-semibold tracking-tight text-slate-900">UI/UX Design</div>
<div className="text-sm text-slate-600">Conversion-driven, crafted in Figma.</div>
</div>
</div>
<i className="w-5 h-5 text-slate-400 group-hover:text-slate-600 transition" data-lucide="arrow-right"></i>
</div>
<ul className="mt-4 text-sm text-slate-600 space-y-2">
<li className="inline-flex items-center gap-2"><i className="w-4 h-4 text-amber-600" data-lucide="mouse-pointer"></i> Clear, intuitive flows</li>
<li className="inline-flex items-center gap-2"><i className="w-4 h-4 text-indigo-600" data-lucide="frame"></i> Design systems</li>
<li className="inline-flex items-center gap-2"><i className="w-4 h-4 text-violet-600" data-lucide="sparkles"></i> Polished micro-details</li>
</ul>
</div>

<div className="group rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-sm transition bg-white p-6">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md bg-cyan-50 text-cyan-700 grid place-items-center border border-cyan-100">
<i className="w-5 h-5" data-lucide="users"></i>
</div>
<div>
<div className="text-lg font-semibold tracking-tight text-slate-900">Agency &amp; Business Delegation</div>
<div className="text-sm text-slate-600">Your remote product team, end-to-end.</div>
</div>
</div>
<i className="w-5 h-5 text-slate-400 group-hover:text-slate-600 transition" data-lucide="arrow-right"></i>
</div>
<ul className="mt-4 text-sm text-slate-600 space-y-2">
<li className="inline-flex items-center gap-2"><i className="w-4 h-4 text-emerald-600" data-lucide="handshake"></i> Seamless collaboration</li>
<li className="inline-flex items-center gap-2"><i className="w-4 h-4 text-blue-600" data-lucide="repeat"></i> Iterative sprints</li>
<li className="inline-flex items-center gap-2"><i className="w-4 h-4 text-slate-700" data-lucide="shield-check"></i> Reliable delivery</li>
</ul>
</div>
</div>
</div>
</section>

<section className="relative" id="process">
<div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold text-slate-900">Process</h2>
<p className="mt-2 text-slate-600 max-w-2xl">A simple, outcome-focused timeline that fits startups, agencies, and operators.</p>
<div className="mt-10 relative">

<div className="hidden md:block absolute left-0 right-0 top-7 h-0.5 bg-gradient-to-r from-blue-200 via-indigo-200 to-violet-200"></div>
<div className="grid md:grid-cols-4 gap-6">

<div className="relative">
<div className="hidden md:block absolute left-1/2 -translate-x-1/2 -top-1">
<span className="h-3 w-3 rounded-full bg-white border border-blue-400 ring-4 ring-blue-100 inline-block"></span>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-5">
<div className="flex items-center gap-2">
<div className="h-9 w-9 rounded-md bg-blue-50 text-blue-700 grid place-items-center border border-blue-100">
<i className="w-4 h-4" data-lucide="phone"></i>
</div>
<div className="text-base font-medium text-slate-900">Quick Discovery Call</div>
</div>
<p className="mt-2 text-sm text-slate-600">15 minutes to align on goals, scope, and outcomes.</p>
</div>
</div>

<div className="relative">
<div className="hidden md:block absolute left-1/2 -translate-x-1/2 -top-1">
<span className="h-3 w-3 rounded-full bg-white border border-indigo-400 ring-4 ring-indigo-100 inline-block"></span>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-5">
<div className="flex items-center gap-2">
<div className="h-9 w-9 rounded-md bg-indigo-50 text-indigo-700 grid place-items-center border border-indigo-100">
<i className="w-4 h-4" data-lucide="bolt"></i>
</div>
<div className="text-base font-medium text-slate-900">First Prototype in 48h</div>
</div>
<p className="mt-2 text-sm text-slate-600">Clickable flows or live preview to validate fast.</p>
</div>
</div>

<div className="relative">
<div className="hidden md:block absolute left-1/2 -translate-x-1/2 -top-1">
<span className="h-3 w-3 rounded-full bg-white border border-violet-400 ring-4 ring-violet-100 inline-block"></span>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-5">
<div className="flex items-center gap-2">
<div className="h-9 w-9 rounded-md bg-violet-50 text-violet-700 grid place-items-center border border-violet-100">
<i className="w-4 h-4" data-lucide="refresh-ccw"></i>
</div>
<div className="text-base font-medium text-slate-900">Agile Iterations</div>
</div>
<p className="mt-2 text-sm text-slate-600">Tight feedback loops, measurable improvements.</p>
</div>
</div>

<div className="relative">
<div className="hidden md:block absolute left-1/2 -translate-x-1/2 -top-1">
<span className="h-3 w-3 rounded-full bg-white border border-cyan-400 ring-4 ring-cyan-100 inline-block"></span>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-5">
<div className="flex items-center gap-2">
<div className="h-9 w-9 rounded-md bg-cyan-50 text-cyan-700 grid place-items-center border border-cyan-100">
<i className="w-4 h-4" data-lucide="send"></i>
</div>
<div className="text-base font-medium text-slate-900">Delivery + Optimization</div>
</div>
<p className="mt-2 text-sm text-slate-600">Ship with confidence, keep improving over time.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative bg-slate-50" id="work">
<div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
<div className="flex items-end justify-between">
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold text-slate-900">Case Studies &amp; Results</h2>
<a className="hidden md:inline-flex items-center gap-2 text-sm text-slate-700 hover:text-slate-900" href="#cta">
<i className="w-4 h-4" data-lucide="arrow-down-right"></i>
            Book a call to see more
          </a>
</div>
<div className="mt-8 grid md:grid-cols-3 gap-6">

<div className="rounded-2xl border border-slate-200 bg-white overflow-hidden hover:shadow-md transition">
<img alt="SaaS dashboard" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="p-6">
<div className="text-xs text-blue-700 bg-blue-50 border border-blue-200 inline-flex items-center gap-1 px-2 py-1 rounded">SaaS MVP</div>
<h3 className="mt-3 text-lg font-semibold tracking-tight text-slate-900">+200% user acquisition</h3>
<p className="mt-2 text-sm text-slate-600">From idea to live MVP with AI onboarding and growth loops.</p>
<div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
<i className="w-4 h-4" data-lucide="clock"></i> 3 weeks to launch
              </div>
</div>
</div>

<div className="rounded-2xl border border-slate-200 bg-white overflow-hidden hover:shadow-md transition">
<img alt="App redesign" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="p-6">
<div className="text-xs text-violet-700 bg-violet-50 border border-violet-200 inline-flex items-center gap-1 px-2 py-1 rounded">App Redesign</div>
<h3 className="mt-3 text-lg font-semibold tracking-tight text-slate-900">3x conversion increase</h3>
<p className="mt-2 text-sm text-slate-600">UX refactor, pricing clarity, and performance bumps.</p>
<div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
<i className="w-4 h-4" data-lucide="sparkle"></i> Design system rollout
              </div>
</div>
</div>

<div className="rounded-2xl border border-slate-200 bg-white overflow-hidden hover:shadow-md transition">
<img alt="Agency dashboard" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="p-6">
<div className="text-xs text-cyan-700 bg-cyan-50 border border-cyan-200 inline-flex items-center gap-1 px-2 py-1 rounded">Agency Ops</div>
<h3 className="mt-3 text-lg font-semibold tracking-tight text-slate-900">+45% efficiency</h3>
<p className="mt-2 text-sm text-slate-600">Internal dashboard with automations and reporting.</p>
<div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
<i className="w-4 h-4" data-lucide="gauge"></i> SLA met 99.9%
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="tech">
<div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
<div className="flex items-end justify-between">
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold text-slate-900">Technologies</h2>
<div className="text-xs text-slate-500">Modern stack, flexible integrations</div>
</div>
<div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
<div className="px-3 py-2 rounded-md border border-slate-200 text-slate-700 bg-white text-sm text-center hover:border-slate-300 transition">Webflow</div>
<div className="px-3 py-2 rounded-md border border-slate-200 text-slate-700 bg-white text-sm text-center hover:border-slate-300 transition">Framer</div>
<div className="px-3 py-2 rounded-md border border-slate-200 text-slate-700 bg-white text-sm text-center hover:border-slate-300 transition">Next.js</div>
<div className="px-3 py-2 rounded-md border border-slate-200 text-slate-700 bg-white text-sm text-center hover:border-slate-300 transition">Figma</div>
<div className="px-3 py-2 rounded-md border border-slate-200 text-slate-700 bg-white text-sm text-center hover:border-slate-300 transition">Blender</div>
<div className="px-3 py-2 rounded-md border border-slate-200 text-slate-700 bg-white text-sm text-center hover:border-slate-300 transition">AI (OpenAI, automations)</div>
</div>
</div>
</section>

<section className="relative bg-slate-50" id="why">
<div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold text-slate-900">Why Work With Us</h2>
<div className="mt-8 grid md:grid-cols-3 gap-6">
<div className="rounded-2xl border border-slate-200 bg-white p-6">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md bg-blue-50 text-blue-700 grid place-items-center border border-blue-100">
<i className="w-5 h-5" data-lucide="rocket"></i>
</div>
<div className="text-lg font-semibold tracking-tight text-slate-900">For startups</div>
</div>
<p className="mt-3 text-sm text-slate-600">Launch and validate faster. Ship a polished MVP to test the market and iterate with real feedback.</p>
</div>
<div className="rounded-2xl border border-slate-200 bg-white p-6">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md bg-indigo-50 text-indigo-700 grid place-items-center border border-indigo-100">
<i className="w-5 h-5" data-lucide="briefcase"></i>
</div>
<div className="text-lg font-semibold tracking-tight text-slate-900">For agencies</div>
</div>
<p className="mt-3 text-sm text-slate-600">Delegate with confidence. Scale capacity without hiring, while maintaining quality and speed.</p>
</div>
<div className="rounded-2xl border border-slate-200 bg-white p-6">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md bg-cyan-50 text-cyan-700 grid place-items-center border border-cyan-100">
<i className="w-5 h-5" data-lucide="user-check"></i>
</div>
<div className="text-lg font-semibold tracking-tight text-slate-900">For business owners</div>
</div>
<p className="mt-3 text-sm text-slate-600">Focus on clients while we handle design &amp; dev execution end-to-end with transparent communication.</p>
</div>
</div>
</div>
</section>

<section className="relative" id="cta">
<div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
<div className="relative overflow-hidden rounded-2xl border border-slate-200">
<div className="absolute inset-0 -z-10 opacity-20">
<div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-blue-500 via-cyan-400 to-violet-500 rounded-full blur-3xl"></div>
<div className="absolute -bottom-24 -right-24 w-96 h-96 bg-gradient-to-tr from-blue-500 via-indigo-500 to-violet-500 rounded-full blur-3xl"></div>
</div>
<div className="relative grid md:grid-cols-2 gap-6 items-center p-8 md:p-12 bg-white">
<div>
<h3 className="text-3xl md:text-4xl tracking-tight font-semibold text-slate-900">Ready to delegate and move faster?</h3>
<p className="mt-3 text-slate-600 max-w-xl">Book your free consultation. We’ll map the fastest path to a clean MVP or a production-ready site/app.</p>
<div className="mt-6 flex flex-col sm:flex-row gap-3">
<button className="inline-flex items-center gap-2 px-5 py-3 rounded-md text-white text-sm font-medium bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-700 hover:via-indigo-700 hover:to-violet-700 shadow-sm focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 transition" id="openModalCTA">
<i className="w-4.5 h-4.5" data-lucide="calendar-check"></i>
                  Book Your Free Consultation
                </button>
<a className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-slate-300 text-slate-800 text-sm font-medium hover:bg-slate-50 hover:border-slate-400 transition" href="#work">
<i className="w-4.5 h-4.5" data-lucide="play-circle"></i>
                  See recent results
                </a>
</div>
</div>
<div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
<div className="text-sm text-slate-700 font-medium">What you'll get</div>
<ul className="mt-3 grid sm:grid-cols-2 gap-3 text-sm text-slate-600">
<li className="inline-flex items-center gap-2"><i className="w-4 h-4 text-emerald-600" data-lucide="check"></i> 15-min strategy call</li>
<li className="inline-flex items-center gap-2"><i className="w-4 h-4 text-emerald-600" data-lucide="check"></i> Clear scope &amp; timeline</li>
<li className="inline-flex items-center gap-2"><i className="w-4 h-4 text-emerald-600" data-lucide="check"></i> Option for 48h prototype</li>
<li className="inline-flex items-center gap-2"><i className="w-4 h-4 text-emerald-600" data-lucide="check"></i> Budget alignment</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-slate-200">
<div className="mx-auto max-w-7xl px-6 py-10">
<div className="grid md:grid-cols-4 gap-8">
<div className="md:col-span-2">
<div className="inline-flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-gradient-to-tr from-blue-600 via-cyan-500 to-violet-600 text-white grid place-items-center text-sm font-semibold tracking-tight">LA</div>
<span className="text-slate-900 text-base font-medium tracking-tight">Launch Agency</span>
</div>
<p className="mt-3 text-sm text-slate-600 max-w-md">We build MVPs, websites, and apps with speed and polish—so you can focus on what matters.</p>
<div className="mt-4 flex items-center gap-4 text-sm text-slate-600">
<a className="inline-flex items-center gap-2 hover:text-slate-900 transition" href="mailto:hello@example.com"><i className="w-4 h-4" data-lucide="mail"></i> hello@example.com</a>
<a className="inline-flex items-center gap-2 hover:text-slate-900 transition" href="#"><i className="w-4 h-4" data-lucide="map-pin"></i> Remote-first</a>
</div>
</div>
<div>
<div className="text-sm font-medium text-slate-900">Explore</div>
<ul className="mt-3 text-sm text-slate-600 space-y-2">
<li><a className="hover:text-slate-900 transition" href="#services">Services</a></li>
<li><a className="hover:text-slate-900 transition" href="#process">Process</a></li>
<li><a className="hover:text-slate-900 transition" href="#work">Work</a></li>
<li><a className="hover:text-slate-900 transition" href="#tech">Technologies</a></li>
</ul>
</div>
<div>
<div className="text-sm font-medium text-slate-900">For</div>
<ul className="mt-3 text-sm text-slate-600 space-y-2">
<li className="inline-flex items-center gap-2"><i className="w-4 h-4 text-blue-600" data-lucide="rocket"></i> Startup founders</li>
<li className="inline-flex items-center gap-2"><i className="w-4 h-4 text-indigo-600" data-lucide="briefcase"></i> Agencies</li>
<li className="inline-flex items-center gap-2"><i className="w-4 h-4 text-violet-600" data-lucide="user"></i> Business owners</li>
</ul>
</div>
</div>
<div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
<div>© <span id="year"></span> Launch Agency. All rights reserved.</div>
<div className="flex items-center gap-4">
<a className="hover:text-slate-700 transition" href="#">Privacy</a>
<a className="hover:text-slate-700 transition" href="#">Terms</a>
</div>
</div>
</div>
</footer>

<div className="fixed inset-0 z-50 hidden" id="modal">
<div className="absolute inset-0 bg-black/50"></div>
<div className="relative mx-auto max-w-xl mt-24 p-6">
<div className="rounded-2xl border border-slate-200 bg-white shadow-xl">
<div className="flex items-center justify-between px-5 py-4 border-b border-slate-200">
<div className="text-base font-medium text-slate-900">Book a Free Consultation</div>
<button aria-label="Close" className="h-9 w-9 rounded-md border border-slate-300 grid place-items-center hover:bg-slate-50 transition" id="closeModal">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
</div>
<div className="p-5 grid md:grid-cols-2 gap-4">
<div className="rounded-lg border border-slate-200 p-4">
<div className="text-sm font-medium text-slate-900">Schedule a time</div>
<p className="mt-1 text-sm text-slate-600">Pick a slot that works for you. We’ll confirm instantly.</p>
<a className="mt-3 inline-flex items-center gap-2 px-3 py-2 rounded-md text-white text-sm font-medium bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-700 hover:via-indigo-700 hover:to-violet-700 transition" href="https://calendly.com/" rel="noopener" target="_blank">
<i className="w-4 h-4" data-lucide="calendar"></i>
                Open scheduling
              </a>
</div>
<div className="rounded-lg border border-slate-200 p-4">
<div className="text-sm font-medium text-slate-900">Or send details</div>
<form className="mt-2 grid gap-3">
<div className="grid gap-1.5">
<label className="text-xs text-slate-600">Email</label>
<input className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="you@company.com" type="email"/>
</div>
<div className="grid gap-1.5">
<label className="text-xs text-slate-600">What do you need?</label>
<textarea className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="MVP, website, redesign, automation..." rows="3"></textarea>
</div>
<button className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md border border-slate-300 text-slate-800 text-sm font-medium hover:bg-slate-50" type="button">
<i className="w-4 h-4" data-lucide="send"></i>
                  Send
                </button>
</form>
</div>
</div>
<div className="px-5 pb-5 text-xs text-slate-500">We reply within 24 hours.</div>
</div>
</div>
</div>


    </>
  );
}
