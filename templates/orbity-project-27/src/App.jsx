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



      // Initialize lucide icons
      lucide.createIcons();

      // Current year
      document.getElementById('year').textContent = new Date().getFullYear();

      // Pricing toggle
      const toggle = document.getElementById('billingToggle');
      const knob = document.getElementById('toggleKnob');
      const prices = document.querySelectorAll('.price');
      let yearly = false;

      function updatePrices() {
        prices.forEach(el => {
          const m = el.getAttribute('data-monthly');
          const y = el.getAttribute('data-yearly');
          el.textContent = yearly ? y : m;
        });
      }
      toggle.addEventListener('click', () => {
        yearly = !yearly;
        knob.style.transform = yearly ? 'translateX(28px)' : 'translateX(0)';
        updatePrices();
      });
      updatePrices();

      // Chart.js demo
      const ctx = document.getElementById('okrChart');
      if (ctx) {
        const gradient = ctx.getContext('2d').createLinearGradient(0, 0, 0, 200);
        gradient.addColorStop(0, 'rgba(99, 102, 241, 0.6)');
        gradient.addColorStop(1, 'rgba(99, 102, 241, 0.05)');
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [{
              label: 'Objective completion',
              data: [12, 19, 15, 22, 28, 34, 42],
              borderColor: 'rgb(129, 140, 248)',
              backgroundColor: gradient,
              fill: true,
              tension: 0.35,
              pointRadius: 0
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false },
              tooltip: {
                backgroundColor: 'rgb(2,6,23)',
                borderColor: 'rgba(255,255,255,0.1)',
                borderWidth: 1,
                titleColor: '#fff',
                bodyColor: '#cbd5e1'
              }
            },
            scales: {
              x: {
                ticks: { color: '#94a3b8' },
                grid: { color: 'rgba(148,163,184,0.1)' }
              },
              y: {
                ticks: { color: '#94a3b8' },
                grid: { color: 'rgba(148,163,184,0.08)' },
                suggestedMin: 0
              }
            }
          }
        });
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
      

<div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
<div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-gradient-to-tr from-indigo-600/30 via-fuchsia-500/20 to-transparent blur-3xl"></div>
<div className="absolute -bottom-24 -right-24 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-violet-700/30 via-indigo-500/20 to-transparent blur-3xl"></div>
<div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-gradient-to-tr from-purple-500/20 via-blue-500/10 to-transparent blur-3xl"></div>
</div>

<header className="bg-center bg-stone-950 relative">
<div className="mx-auto max-w-7xl px-6 py-5">
<div className="flex gap-3 gap-x-3 gap-y-3 items-center justify-between">
<a className="flex items-center gap-2" href="#">
<span className="inline-flex items-center justify-center shadow-purple-700/30 bg-gradient-to-br from-slate-400 to-slate-600 w-8 h-8 rounded-lg shadow-lg">
<svg className="lucide lucide-orbit w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="orbit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.341 6.484A10 10 0 0 1 10.266 21.85"></path><path d="M3.659 17.516A10 10 0 0 1 13.74 2.152"></path><circle cx="12" cy="12" r="3"></circle><circle cx="19" cy="5" r="2"></circle><circle cx="5" cy="19" r="2"></circle></svg>
</span>
<span className="text-xl font-semibold tracking-tight text-white">Orbity</span>
</a>
<nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
<a className="hover:text-white transition" href="#features">Features</a>
<a className="hover:text-white transition" href="#integrations">Integrations</a>
<a className="hover:text-white transition" href="#pricing">Pricing</a>
<a className="hover:text-white transition" href="#testimonials">Stories</a>
<a className="hover:text-white transition" href="#faq">FAQs</a>
</nav>
<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition" href="#">
<svg className="lucide lucide-play h-4 w-4" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
              Watch demo
            </a>
<a className="inline-flex items-center gap-2 text-sm font-medium text-white bg-gradient-to-br from-slate-400 to-slate-600 rounded-lg pt-2 pr-4 pb-2 pl-4" href="#">
              Start free
              <svg className="lucide lucide-arrow-right lucideide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</header>

<section className="bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/dfd23999-bc80-4575-a824-913894d4f184_3840w.webp)] bg-cover relative">
<div className="text-center max-w-5xl mr-auto ml-auto pt-8 pr-6 pl-6">
<div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
<span className="inline-flex items-center justify-center bg-gradient-to-br from-slate-400 to-slate-600 w-5 h-5 rounded-full">
<svg className="lucide lucide-sparkles h-3 w-3 text-white" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</span>
<span className="font-medium">Orbity 2.1</span>
<span className="text-slate-400">New: AI summaries + timeline zoom</span>
</div>
<h1 className="sm:text-5xl md:text-6xl text-4xl font-semibold text-white tracking-tight max-w-3xl mr-auto ml-auto" style={{maskImage: 'linear-gradient(180deg, transparent, black 20%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 20%, black 85%, transparent)'}}>
          Manage projects, tasks, and unified team workflows
        </h1>
<p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-slate-300">
          Orbity replaces scattered tools with flexible boards, real‑time docs, and integrated automations—so your team moves fast and stays aligned.
        </p>
<div className="mt-7 flex items-center justify-center gap-3">
<a className="inline-flex items-center gap-2 text-sm font-medium text-white bg-gradient-to-br from-slate-400 to-slate-600 rounded-lg pt-3 pr-5 pb-3 pl-5" href="#">
            Get started free
            <svg className="lucide lucide-arrow-right w-[24px] h-[16px]" data-icon-replaced="true" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10 transition" href="#">
            Book a demo
          </a>
</div>

<div className="mt-10 text-xs text-slate-400">Trusted by 4,000+ teams</div>
<div className="grid grid-cols-3 gap-6 sm:grid-cols-6 opacity-80 mt-4 gap-x-6 gap-y-6" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))'}}>
<div className="flex items-center justify-center rounded-md border border-gray-600 bg-white/5 py-2">
<span className="text-slate-300 font-medium">BuildPro</span>
</div>
<div className="flex items-center justify-center rounded-md border border-gray-600 bg-white/5 py-2">
<span className="text-slate-300 font-medium">Bitwise</span>
</div>
<div className="flex items-center justify-center rounded-md border border-gray-600 bg-white/5 py-2">
<span className="text-slate-300 font-medium">SyncForge</span>
</div>
<div className="hidden sm:flex items-center justify-center rounded-md border border-gray-600 bg-white/5 py-2">
<span className="text-slate-300 font-medium">CoreSage</span>
</div>
<div className="flex items-center justify-center rounded-md border border-gray-600 bg-white/5 py-2">
<span className="text-s-300 font-medium">Northbyte</span>
</div>
</div>

<div className="relative mx-auto mt-10 max-w-5xl">
<div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-tr from-indigo-500/20 via-purple-500/10 to-transparent blur-2xl"></div>
<div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.03] p-2 shadow-2xl shadow-purple-900/30 backdrop-blur">
<img alt="Product preview" className="aspect-[16/9] w-full object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/d7dab73b-a64e-4634-a1c4-23db2c706e19_1600w.jpg"/>
</div>
</div>
</div>
</section>

<section className="mt-24 relative" id="features">
<div className="mx-auto max-w-7xl px-6">
<div className="grid gap-10 md:grid-cols-2">

<div className="space-y-6">
<div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
<div className="flex items-center gap-2">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600/90">
<svg className="lucide lucide-search h-4 w-4 text-white" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</span>
<h3 className="text-xl font-semibold tracking-tight text-white">AI‑powered search</h3>
</div>
<p className="mt-2 text-slate-300">Find tasks, docs, and people instantly with semantic understanding and filters.</p>
<div className="mt-4 rounded-lg border border-white/10 bg-black/30 p-3">
<div className="flex items-center gap-2 text-sm text-slate-300">
<svg className="lucide lucide-wand h-4 w-4 text-indigo-400" data-lucide="wand" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 4V2"></path><path d="M15 16v-2"></path><path d="M8 9h2"></path><path d="M20 9h2"></path><path d="M17.8 11.8 19 13"></path><path d="M15 9h.01"></path><path d="M17.8 6.2 19 5"></path><path d="m3 21 9-9"></path><path d="M12.2 6.2 11 5"></path></svg>
                  Try: “design review next Friday assigned to me”
                </div>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
<div className="flex items-center gap-2">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-violet-600/90">
<svg className="lucide lucide-layout-dashboard h-4 w-4 text-white" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
</span>
<h3 className="text-xl font-semibold tracking-tight text-white">Project templates</h3>
</div>
<p className="mt-2 text-slate-300">Spin up sprints, launches, or onboarding in seconds with configurable templates.</p>
<div className="mt-4 grid grid-cols-3 gap-3">
<div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center text-sm text-slate-300">Sprint</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center text-sm text-slate-300">Launch</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center text-sm text-slate-300">CRM</div>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
<div className="flex items-center gap-2">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-fuchsia-600/90">
<svg className="lucide lucide-shield h-4 w-4 text-white" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</span>
<h3 className="text-xl font-semibold tracking-tight text-white">Advanced permissions</h3>
</div>
<p className="mt-2 text-slate-300">Granular roles and audit logs keep your data compliant and secure.</p>
<div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
<svg className="lucide lucide-lock h-4 w-4" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                SSO, SCIM, and enterprise-grade controls
              </div>
</div>
</div>

<div className="space-y-6">
<div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
<div className="flex items-center gap-2">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600/90">
<svg className="lucide lucide-bar-chart-big h-4 w-4 text-white" data-lucide="bar-chart-big" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><rect height="12" rx="1" width="4" x="15" y="5"></rect><rect height="9" rx="1" width="4" x="7" y="8"></rect></svg>
</span>
<h3 className="text-xl font-semibold tracking-tight text-white">Goals &amp; OKRs</h3>
</div>
<p className="mt-2 text-slate-300">Track progress with live metrics tied to projects.</p>
<div className="mt-4">
<div className="rounded-xl border border-white/10 bg-black/30 p-4">
<div className="h-56">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<canvas className="" height="448" id="okrChart" style={{display: 'block', boxSizing: 'border-box', height: '224px', width: '512px'}} width="1024"></canvas>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
<div className="flex items-center gap-2">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-violet-600/90">
<svg className="lucide lucide-layers h-4 w-4 text-white" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</span>
<h3 className="text-xl font-semibold tracking-tight text-white">Unified workspace</h3>
</div>
<p className="mt-2 text-slate-300">Tasks, docs, and discussions—together with blazing‑fast search.</p>
<div className="mt-4 grid grid-cols-3 gap-3">
<img alt="Workspace 3D" className="w-full h-24 object-cover rounded-lg" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b61319b7-c658-4dbe-9cd8-4954d0ceaaa4_800w.webp"/>
<img alt="Minimal render" className="w-full h-24 object-cover rounded-lg" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/73f96f94-2d9d-4dab-aa8f-8a5a0362392c_800w.webp"/>
<img alt="Mountains" className="w-full h-24 object-cover rounded-lg" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/bbf57660-89ac-43f7-b438-c8a34177cdbe_800w.webp"/>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative mt-24">
<div className="mx-auto max-w-7xl px-6">
<div className="grid gap-6 md:grid-cols-3">
<div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
<div className="flex items-center gap-2">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600/90">
<svg className="lucide lucide-bolt h-4 w-4 text-white" data-lucide="bolt" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><circle cx="12" cy="12" r="4"></circle></svg>
</span>
<h3 className="text-lg font-semibold tracking-tight text-white">Real‑time collaboration</h3>
</div>
<p className="mt-2 text-slate-300">Comment on tasks, co‑edit docs, and resolve feedback in one place.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
<div className="flex items-center gap-2">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-violet-600/90">
<svg className="lucide lucide-git-branch h-4 w-4 text-white" data-lucide="git-branch" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="6" x2="6" y1="3" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>
</span>
<h3 className="text-lg font-semibold tracking-tight text-white">Flexible views</h3>
</div>
<p className="mt-2 text-slate-300">Switch between Board, Timeline, and Table to match your workflow.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
<div className="flex items-center gap-2">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-fuchsia-600/90">
<svg className="lucide lucide-file-text h-4 w-4 text-white" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
</span>
<h3 className="text-lg font-semibold tracking-tight text-white">Structured docs</h3>
</div>
<p className="mt-2 text-slate-300">Keep specs, notes, and decisions close to the work that matters.</p>
</div>
</div>
</div>
</section>

<section className="relative mt-24" id="integrations">
<div className="mx-auto max-w-7xl px-6">
<div className="mx-auto max-w-3xl text-center">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Integrate with tools you already use</h2>
<p className="mt-3 text-slate-300">Two‑way sync for issues, messages, calendars, storage, and more.</p>
</div>
<div className="mx-auto mt-8 grid max-w-4xl grid-cols-4 gap-4 sm:grid-cols-8">
<div className="flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-4">
<svg className="lucide lucide-message-circle h-6 w-6 text-indigo-400" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
</div>
<div className="flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-4">
<svg className="lucide lucide-git-branch h-6 w-6 text-indigo-400" data-lucide="git-branch" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="6" x2="6" y1="3" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>
</div>
<div className="flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-4">
<svg className="lucide lucide-calendar h-6 w-6 text-indigo-400" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</div>
<div className="flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-4">
<svg className="lucide lucide-database h-6 w-6 text-indigo-400" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
</div>
<div className="hidden sm:flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-4">
<svg className="lucide lucide-cloud h-6 w-6 text-indigo-400" data-lucide="cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>
</div>
<div className="hidden sm:flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-4">
<svg className="lucide lucide-bell h-6 w-6 text-indigo-400" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
</div>
<div className="hidden sm:flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-4">
<svg className="lucide lucide-puzzle h-6 w-6 text-indigo-400" data-lucide="puzzle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z"></path></svg>
</div>
<div className="hidden sm:flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-4">
<svg className="lucide lucide-server h-6 w-6 text-indigo-400" data-lucide="server" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>
</div>
</div>
</div>
</section>

<section className="relative mt-24" id="testimonials">
<div className="mx-auto max-w-5xl px-6">
<div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-10">
<div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
<img alt="Customer" className="h-16 w-16 rounded-full object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=640&amp;auto=format&amp;fit=crop"/>
<div className="space-y-2">
<p className="text-lg text-slate-200">“The best upgrade we made this year. Our roadmap, specs, and releases finally live together.”</p>
<div className="text-sm text-slate-400">Product Lead, Simbase</div>
</div>
<div className="mt-4 sm:ml-auto sm:mt-0">
<div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200">
<svg className="lucide lucide-star h-4 w-4 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                4.9/5 satisfaction
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="relative mt-24" id="pricing">
<div className="mx-auto max-w-6xl px-6">
<div className="mx-auto max-w-3xl text-center">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Choose a plan that scales with you</h2>
<p className="mt-3 text-slate-300">Simple, transparent pricing. No hidden fees.</p>

<div className="mt-6 flex items-center justify-center gap-3">
<span className="text-sm text-slate-400">Monthly</span>
<button className="relative inline-flex h-7 w-14 items-center rounded-full bg-white/10 p-1 transition" id="billingToggle">
<span className="inline-block h-5 w-5 translate-x-0 rounded-full bg-white shadow transition" id="toggleKnob"></span>
</button>
<div className="flex items-center gap-2 text-sm text-slate-400">
              Yearly
              <span className="rounded-md bg-green-500/20 px-1.5 py-0.5 text-xs text-green-300">Save 20%</span>
</div>
</div>
</div>
<div className="mt-10 grid gap-6 md:grid-cols-3">

<div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
<div className="flex items-center justify-between">
<h3 className="text-xl font-semibold tracking-tight text-white">Starter</h3>
<i className="h-5 w-5 text-indigo-400" data-lucide="seedling"></i>
</div>
<p className="mt-1 text-sm text-slate-400">For individuals and side projects.</p>
<div className="mt-5">
<div className="flex items-end gap-1">
<span className="text-4xl font-semibold tracking-tight text-white">
<span className="price" data-monthly="0" data-yearly="0">0</span>
</span>
<span className="mb-1 text-slate-400">/mo</span>
</div>
</div>
<ul className="mt-5 space-y-3 text-sm">
<li className="flex items-center gap-2 text-slate-300">
<svg className="lucide lucide-check h-4 w-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 3 projects
              </li>
<li className="flex items-center gap-2 text-slate-300">
<svg className="lucide lucide-check h-4 w-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Unlimited tasks
              </li>
<li className="flex items-center gap-2 text-slate-300">
<svg className="lucide lucide-check h-4 w-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Real‑time docs
              </li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition" href="#">Get started</a>
</div>

<div className="relative rounded-2xl border border-indigo-500/40 bg-gradient-to-b from-white/10 to-white/[0.03] p-6 shadow-lg shadow-indigo-900/30">
<div className="absolute -top-3 left-6 rounded-full border border-indigo-400/30 bg-indigo-500/20 px-2 py-0.5 text-xs text-indigo-200">Most popular</div>
<div className="flex items-center justify-between">
<h3 className="text-xl font-semibold tracking-tight text-white">Team</h3>
<svg className="lucide lucide-users h-5 w-5 text-indigo-400" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<p className="mt-1 text-sm text-slate-400">Best for growing teams shipping weekly.</p>
<div className="mt-5">
<div className="flex items-end gap-1">
<span className="text-4xl font-semibold tracking-tight text-white">
                  $<span className="price" data-monthly="12" data-yearly="9">12</span>
</span>
<span className="mb-1 text-slate-400">/user/mo</span>
</div>
</div>
<ul className="mt-5 space-y-3 text-sm">
<li className="flex items-center gap-2 text-slate-300"><svg className="lucide lucide-check h-4 w-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Unlimited projects</li>
<li className="flex items-center gap-2 text-slate-300"><svg className="lucide lucide-check h-4 w-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Timeline &amp; Gantt</li>
<li className="flex items-center gap-2 text-slate-300"><svg className="lucide lucide-check h-4 w-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Goals &amp; dashboards</li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-600 to-violet-600 px-4 py-2 text-sm font-medium text-white shadow-md shadow-indigo-800/30" href="#">Start 14‑day trial</a>
</div>

<div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
<div className="flex items-center justify-between">
<h3 className="text-xl font-semibold tracking-tight text-white">Enterprise</h3>
<svg className="lucide lucide-building-2 h-5 w-5 text-indigo-400" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 12h4"></path><path d="M10 8h4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></svg>
</div>
<p className="mt-1 text-sm text-slate-400">Security, scale, and premium support.</p>
<div className="mt-5">
<div className="flex items-end gap-1">
<span className="text-4xl font-semibold tracking-tight text-white">
<span className="price" data-monthly="24" data-yearly="19">24</span>
</span>
<span className="mb-1 text-slate-400">/user/mo</span>
</div>
</div>
<ul className="mt-5 space-y-3 text-sm">
<li className="flex items-center gap-2 text-slate-300"><svg className="lucide lucide-check h-4 w-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> SSO &amp; SCIM</li>
<li className="flex items-center gap-2 text-slate-300"><svg className="lucide lucide-check h-4 w-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Audit logs</li>
<li className="flex items-center gap-2 text-slate-300"><svg className="lucide lucide-check h-4 w-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Dedicated support</li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition" href="#">Contact sales</a>
</div>
</div>
</div>
</section>

<section className="relative mt-24">
<div className="mx-auto max-w-6xl px-6">
<div className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-tr from-indigo-700/30 to-violet-600/20 p-8 sm:p-12">
<div className="grid items-center gap-8 md:grid-cols-2">
<div>
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Unify your workflow. Amplify your output.</h3>
<p className="mt-3 text-slate-200">Set up in minutes. No credit card required.</p>
<div className="mt-6 flex flex-wrap gap-3">
<a className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-medium text-slate-900" href="#">
                  Create free account
                  <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-5 py-3 text-sm font-medium text-white hover:bg-white/20 transition" href="#">
                  Schedule a walkthrough
                </a>
</div>
</div>
<div className="relative">
<div className="absolute -inset-8 -z-10 rounded-xl bg-indigo-500/20 blur-2xl"></div>
<img alt="App preview" className="object-cover border-white/10 border rounded-xl" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6fd253c9-179a-4d42-afc9-6a8afe2dbd6f_1600w.webp"/>
</div>
</div>
</div>
</div>
</section>

<section className="relative mt-24" id="faq">
<div className="mx-auto max-w-4xl px-6">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white text-center">FAQs</h2>
<div className="mt-8 space-y-4">
<details className="group rounded-xl border border-white/10 bg-white/[0.04] p-5">
<summary className="flex cursor-pointer list-none items-center justify-between text-base font-medium text-white">
              Do you offer discounts for non‑profits?
              <svg className="lucide lucide-chevron-down h-5 w-5 transition group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-3 text-sm text-slate-300">Yes—contact us and we’ll set up a custom plan with a reduced rate.</p>
</details>
<details className="group rounded-xl border border-white/10 bg-white/[0.04] p-5">
<summary className="flex cursor-pointer list-none items-center justify-between text-base font-medium text-white">
              Can I import from other tools?
              <svg className="lucide lucide-chevron-down h-5 w-5 transition group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-3 text-sm text-slate-300">Import issues, tasks, and docs with our guided importer or API.</p>
</details>
<details className="group rounded-xl border border-white/10 bg-white/[0.04] p-5">
<summary className="flex cursor-pointer list-none items-center justify-between text-base font-medium text-white">
              Is there a free trial?
              <svg className="lucide lucide-chevron-down h-5 w-5 transition group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-3 text-sm text-slate-300">The Team plan includes a 14‑day trial with all features enabled.</p>
</details>
</div>
</div>
</section>

<footer className="relative mt-24">
<div className="mx-auto max-w-7xl px-6">
<div className="rounded-3xl border border-white/10 bg-white/[0.04] p-10">
<div className="text-[64px] sm:text-[96px] md:text-[128px] font-semibold tracking-tight bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent leading-none">
            Orbity
          </div>
<div className="mt-6 grid gap-6 sm:grid-cols-3">
<div className="text-sm text-slate-300">
<div className="mb-2 font-medium text-white">Product</div>
<ul className="space-y-1">
<li><a className="hover:text-white" href="#features">Features</a></li>
<li><a className="hover:text-white" href="#integrations">Integrations</a></li>
<li><a className="hover:text-white" href="#pricing">Pricing</a></li>
</ul>
</div>
<div className="text-sm text-slate-300">
<div className="mb-2 font-medium text-white">Company</div>
<ul className="space-y-1">
<li><a className="hover:text-white" href="#">About</a></li>
<li><a className="hover:text-white" href="#">Careers</a></li>
<li><a className="hover:text-white" href="#">Press</a></li>
</ul>
</div>
<div className="text-sm text-slate-300">
<div className="mb-2 font-medium text-white">Resources</div>
<ul className="space-y-1">
<li><a className="hover:text-white" href="#">Guides</a></li>
<li><a className="hover:text-white" href="#">Status</a></li>
<li><a className="hover:text-white" href="#">Support</a></li>
</ul>
</div>
</div>
<div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
<div className="text-xs text-slate-400">© <span id="year">2025</span> Orbity, Inc. All rights reserved.</div>
<div className="flex items-center gap-4 text-xs text-slate-400">
<a className="hover:text-white" href="#">Privacy</a>
<a className="hover:text-white" href="#">Terms</a>
<a className="hover:text-white" href="#">Security</a>
</div>
</div>
</div>
</div>
</footer>


    </>
  );
}
