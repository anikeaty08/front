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



        !(function () {
          if (!window.UnicornStudio) {
            window.UnicornStudio = { isInitialized: !1 };
            var i = document.createElement("script");
            i.src =
              "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js";
            i.onload = function () {
              window.UnicornStudio.isInitialized ||
                (UnicornStudio.init(), (window.UnicornStudio.isInitialized = !0));
            };
            (document.head || document.body).appendChild(i);
          }
        })();
      


      // Year
      document.getElementById('year').textContent = new Date().getFullYear();

      // Scroll progress
      const progressBar = document.getElementById('scroll-progress');
      const header = document.getElementById('site-header');
      let lastY = window.scrollY;
      const updateProgress = () => {
        const doc = document.documentElement;
        const scrollTop = doc.scrollTop || document.body.scrollTop;
        const scrollHeight = doc.scrollHeight - doc.clientHeight;
        const progress = (scrollTop / scrollHeight) * 100;
        progressBar.style.width = progress + '%';

        // Header show/hide on scroll direction
        const y = window.scrollY;
        const down = y > lastY && y > 80;
        header.style.transform = down ? 'translateY(-100%)' : 'translateY(0)';
        lastY = y;
      };
      document.addEventListener('scroll', updateProgress, { passive: true });
      updateProgress();

      // Mobile panel
      const mobilePanel = document.getElementById('mobile-panel');
      const navToggle = document.getElementById('nav-toggle');
      const openIcon = navToggle.querySelector('[data-lucide="menu"]');
      const closeIcon = navToggle.querySelector('[data-lucide="x"]');
      const animatePanel = (open) => {
        mobilePanel.classList.toggle('opacity-100', open);
        mobilePanel.classList.toggle('pointer-events-auto', open);
        const sheet = mobilePanel.querySelector('div.absolute.inset-x-0.top-0');
        sheet.classList.toggle('translate-y-0', open);
        sheet.classList.toggle('opacity-100', open);
        openIcon.classList.toggle('hidden', open);
        closeIcon.classList.toggle('hidden', !open);
        navToggle.setAttribute('aria-expanded', String(open));
      };
      navToggle.addEventListener('click', () => {
        const open = navToggle.getAttribute('aria-expanded') !== 'true';
        animatePanel(open);
      });
      document.querySelectorAll('[data-close-overlay]').forEach((el) => {
        el.addEventListener('click', () => animatePanel(false));
      });
      document.querySelectorAll('[data-mobile-link]').forEach((el) => {
        el.addEventListener('click', () => animatePanel(false));
      });

      // Smooth scroll for anchor links
      function smoothScrollTo(hash) {
        const el = document.querySelector(hash);
        if (!el) return;
        const y = el.getBoundingClientRect().top + window.pageYOffset - 68;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
      document.querySelectorAll('a[href^="#"]').forEach((a) => {
        a.addEventListener('click', (e) => {
          const href = a.getAttribute('href');
          if (href && href.length > 1) {
            e.preventDefault();
            smoothScrollTo(href);
          }
        });
      });

      // Active nav link highlight
      const sections = ['#overview', '#features', '#product', '#analytics', '#pricing', '#try']
        .map((s) => document.querySelector(s))
        .filter(Boolean);
      const navLinks = document.querySelectorAll('[data-nav-link]');
      const setActive = (id) => {
        navLinks.forEach((link) => {
          const on = link.getAttribute('href') === '#' + id;
          link.classList.toggle('text-white', on);
          link.classList.toggle('text-indigo-300', on);
        });
      };
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActive(entry.target.id);
          });
        },
        { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
      );
      sections.forEach((sec) => io.observe(sec));

      // Tasks interactions
      const taskList = document.getElementById('task-list');
      const counter = document.getElementById('task-counter');
      counter.setAttribute('aria-live', 'polite');

      function updateCounter() {
        const tasks = [...taskList.querySelectorAll('[data-task]')];
        const done = tasks.filter((t) => t.classList.contains('is-done')).length;
        counter.textContent = `${done}/${tasks.length} done`;
      }

      function toggleTask(el) {
        const btn = el.querySelector('[data-checkbox]');
        const icon = btn.querySelector('svg');
        const title = el.querySelector('p.text-sm');
        el.classList.toggle('is-done');
        const checked = el.classList.contains('is-done');
        btn.setAttribute('aria-checked', String(checked));
        btn.classList.toggle('bg-indigo-500/20', checked);
        btn.classList.toggle('border-indigo-400/40', checked);
        icon.classList.toggle('opacity-100', checked);
        title.classList.toggle('line-through', checked);
        title.classList.toggle('text-gray-400', checked);
        updateCounter();
      }

      taskList.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-checkbox]');
        if (btn) {
          const item = btn.closest('[data-task]');
          toggleTask(item);
        }
      });

      document.getElementById('clear-completed').addEventListener('click', () => {
        taskList.querySelectorAll('.is-done').forEach((node) => node.remove());
        updateCounter();
      });

      document.getElementById('add-quick').addEventListener('click', () => {
        const node = document.createElement('div');
        node.className =
          'flex items-start gap-3 rounded-lg bg-white/5 border border-white/10 px-3 py-2';
        node.setAttribute('data-task', '');
        node.innerHTML = `
          <button type="button" class="relative mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-md bg-black/40 border border-white/15 hover:border-white/25 transition" data-checkbox aria-checked="false" aria-label="Toggle task">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-3.5 h-3.5 opacity-0 transition"><path d="M20 6 9 17l-5-5"></path></svg>
          </button>
          <div class="min-w-0">
            <p class="text-sm leading-snug">New quick task</p>
            <p class="text-xs text-gray-400">Unassigned · Today</p>
          </div>
        `;
        taskList.appendChild(node);
        updateCounter();
        // Scroll into view if needed
        node.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      });

      // Automation card buttons (demo)
      document.getElementById('enable-automation').addEventListener('click', (e) => {
        const btn = e.currentTarget;
        btn.textContent = 'Enabled';
        btn.classList.add('bg-emerald-400', 'text-black');
        btn.classList.remove('bg-white/5', 'text-gray-200');
      });
      document.getElementById('dismiss-automation').addEventListener('click', (e) => {
        const card = e.currentTarget.closest('.rounded-xl.border.border-white\\/10.bg-black\\/40.p-4');
        if (card) card.remove();
      });

      // Charts theme
      Chart.defaults.color = '#d1d5db';
      Chart.defaults.font.family = 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial';
      const gridColor = 'rgba(148, 163, 184, 0.15)';
      const indigo = '#818cf8';
      const indigoTrans = 'rgba(129, 140, 248, .25)';

      // Mini chart
      const miniCtx = document.getElementById('miniChart');
      if (miniCtx) {
        new Chart(miniCtx, {
          type: 'line',
          data: {
            labels: Array.from({ length: 7 }, (_, i) => i + 1),
            datasets: [
              {
                data: [4, 6, 5, 7, 9, 10, 12],
                borderColor: indigo,
                backgroundColor: indigoTrans,
                fill: true,
                tension: 0.35,
                pointRadius: 0,
                borderWidth: 2
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false }, tooltip: { enabled: true } },
            scales: {
              x: { display: false, grid: { display: false } },
              y: { display: false, grid: { display: false } }
            }
          }
        });
      }

      // Spark chart
      const sparkCtx = document.getElementById('spark');
      if (sparkCtx) {
        new Chart(sparkCtx, {
          type: 'line',
          data: {
            labels: Array.from({ length: 24 }, (_, i) => i + 1),
            datasets: [
              {
                data: [96, 97, 98, 96, 99, 98, 98, 97, 98, 98, 99, 99, 98, 97, 98, 98, 99, 98, 98, 98, 99, 98, 99, 98],
                borderColor: '#34d399',
                backgroundColor: 'rgba(52, 211, 153, .2)',
                fill: true,
                tension: 0.35,
                pointRadius: 0,
                borderWidth: 2
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false }, tooltip: { enabled: false } },
            scales: { x: { display: false }, y: { display: false } }
          }
        });
      }

      // Analytics - Velocity
      const velCtx = document.getElementById('velocityChart');
      if (velCtx) {
        new Chart(velCtx, {
          type: 'bar',
          data: {
            labels: ['W1','W2','W3','W4','W5','W6','W7','W8','W9','W10','W11','W12'],
            datasets: [
              {
                label: 'Completed',
                data: [28, 31, 29, 34, 36, 30, 38, 42, 39, 44, 46, 49],
                backgroundColor: indigoTrans,
                borderColor: indigo,
                borderWidth: 2,
                borderRadius: 6
              },
              {
                type: 'line',
                label: 'Trend',
                data: [26, 28, 29, 30, 31, 32, 34, 36, 37, 39, 41, 42],
                borderColor: '#a78bfa',
                tension: 0.35,
                pointRadius: 0,
                fill: false
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
              x: {
                grid: { color: gridColor },
                ticks: { color: '#9aa4b2' }
              },
              y: {
                grid: { color: gridColor },
                ticks: { color: '#9aa4b2' },
                suggestedMax: 55,
                beginAtZero: true
              }
            }
          }
        });
      }

      // Analytics - Cycle spark
      const cycleCtx = document.getElementById('cycleSpark');
      if (cycleCtx) {
        new Chart(cycleCtx, {
          type: 'line',
          data: {
            labels: Array.from({ length: 20 }, (_, i) => i + 1),
            datasets: [
              {
                data: [3.2, 3.1, 3.4, 3.0, 2.9, 2.8, 2.7, 3.1, 2.8, 2.6, 2.7, 2.5, 2.8, 2.9, 2.7, 2.6, 2.5, 2.4, 2.6, 2.7],
                borderColor: '#34d399',
                backgroundColor: 'rgba(52, 211, 153, .18)',
                fill: true,
                tension: 0.35,
                pointRadius: 0,
                borderWidth: 2
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false }, tooltip: { enabled: false } },
            scales: { x: { display: false }, y: { display: false } }
          }
        });
      }

      // CTA form (demo)
      document.getElementById('cta-submit').addEventListener('click', () => {
        const input = document.getElementById('email');
        if (input.checkValidity()) {
          input.value = '';
          input.placeholder = 'Check your inbox for a magic link ✨';
        } else {
          input.focus();
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
      

<div className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-indigo-400 to-purple-400 w-0 z-[60]" id="scroll-progress" style={{width: '0%'}}></div>

<header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md border-b bg-black/70 border-white/5 transition-transform duration-300 will-change-transform" id="site-header">
<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16">
<div className="h-full flex items-center justify-between">

<a className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md" href="#overview">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 shadow-[inset_0_0_0_2px_rgba(255,255,255,0.06)]">
<svg aria-hidden="true" className="w-[18px] h-[18px]" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12h18"></path>
<path d="M3 6h18"></path>
<path d="M3 18h18"></path>
</svg>
</span>
<span className="text-lg tracking-tight" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, sans-serif'}}>HubTask</span>
</a>

<div className="hidden md:flex items-center gap-1 rounded-full border border-white/10 px-2">
<a className="px-3 py-2 text-sm text-gray-300 hover:text-white transition" data-nav-link="" href="#features">Features</a>
<a className="px-3 py-2 text-sm text-gray-300 hover:text-white transition" data-nav-link="" href="#product">Product</a>
<a className="px-3 py-2 text-sm text-gray-300 hover:text-white transition" data-nav-link="" href="#analytics">Analytics</a>
<a className="px-3 py-2 text-sm text-gray-300 hover:text-white transition" data-nav-link="" href="#pricing">Pricing</a>
</div>

<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm bg-gray-100 text-black hover:bg-gray-200 transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-indigo-500" href="#try">
              Sign in
            </a>
<button aria-controls="mobile-panel" aria-expanded="false" className="md:hidden p-2 rounded-md transition-colors hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500" id="nav-toggle">
<svg aria-hidden="true" className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<path d="M4 12h16"></path>
<path d="M4 18h16"></path>
<path d="M4 6h16"></path>
</svg>
<svg aria-hidden="true" className="lucide lucide-x w-5 h-5 hidden" data-lucide="x" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</button>
</div>
</div>
</nav>
</header>

<div aria-hidden="true" className="fixed inset-0 z-[55] transition-opacity duration-200 opacity-0 pointer-events-none" id="mobile-panel">
<button aria-label="Close menu" className="absolute inset-0 bg-black/60" data-close-overlay=""></button>
<div className="absolute inset-x-0 top-0 mx-3 mt-3 rounded-2xl border border-white/10 bg-black/90 backdrop-blur-xl overflow-hidden transition-all duration-200 translate-y-[-8px] opacity-0">
<div className="px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-indigo-600 shadow-[inset_0_0_0_2px_rgba(255,255,255,0.06)]">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12h18"></path>
<path d="M3 6h18"></path>
<path d="M3 18h18"></path>
</svg>
</span>
<span className="text-base tracking-tight" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, sans-serif'}}>HubTask</span>
</div>
<button aria-label="Close" className="p-2 rounded-md hover:bg-white/5 border border-white/10" data-close-overlay="">
<svg className="lucide lucide-x w-4.5 h-4.5" data-lucide="x" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</button>
</div>
<div className="px-3 pb-3">
<div className="grid gap-1">
<a className="px-3 py-2 rounded-lg text-sm hover:bg-white/5" data-mobile-link="" href="#features">Features</a>
<a className="px-3 py-2 rounded-lg text-sm hover:bg-white/5" data-mobile-link="" href="#product">Product</a>
<a className="px-3 py-2 rounded-lg text-sm hover:bg-white/5" data-mobile-link="" href="#analytics">Analytics</a>
<a className="px-3 py-2 rounded-lg text-sm hover:bg-white/5" data-mobile-link="" href="#pricing">Pricing</a>
<div className="h-px bg-white/10 my-1"></div>
<a className="px-3 py-2 rounded-lg text-sm bg-gray-100 text-black text-center" data-mobile-link="" href="#try">Start free</a>
</div>
</div>
</div>
</div>

<section className="relative overflow-hidden sm:pt-28 pt-24 pb-14" id="overview">
<div className="absolute top-0 left-0 w-full h-full -z-10" data-us-project="ju5gjGnrRr5Ud4fAt7eh"></div>


<div className="relative-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pl-4">
<div className="flex flex-col gap-10 lg:gap-16 text-center items-center">
<div className="max-w-3xl mx-auto">
<span className="text-xs uppercase tracking-wider text-indigo-300/90">New: Sprint templates</span>
<h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, sans-serif', fontWeight: '600'}}>
              Plan. Prioritize. Ship without friction.
            </h1>
<p className="mt-6 text-lg text-gray-300 max-w-xl mx-auto">
              HubTask keeps teams aligned with clean boards, fast capture, and
              clear progress—so work actually ships.
            </p>
<div className="flex flex-col sm:flex-row gap-3 mt-8 justify-center">
<a className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm bg-indigo-400 text-black hover:bg-indigo-300 transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-indigo-500" href="#try">
                Start free
                <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
<a className="inline-flex items-center gap-2 hover:bg-white/10 transition-all text-gray-100 bg-white/5 border-white/10 border rounded-full px-5 py-3 backdrop-blur-lg" href="#product">
                See product
                <svg className="lucide lucide-play w-4 h-4" data-lucide="play" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>
</svg>
</a>
</div>
<div className="mt-8 flex items-center gap-6 justify-center">
<div className="flex -space-x-2">
<img alt="" className="w-9 h-9 rounded-full border-2 border-black object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=160&amp;q=80"/>
<img alt="" className="w-9 h-9 rounded-full border-2 border-black object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=160&amp;q=80"/>
<img alt="" className="w-9 h-9 rounded-full border-2 border-black object-cover" src="https://images.unsplash.com/photo-1500649297466-74794c70acfc?w=160&amp;q=80"/>
<div className="w-9 h-9 rounded-full border-2 border-black bg-indigo-400 flex items-center justify-center text-black text-xs">
                  2k+
                </div>
</div>
<div>
<p className="text-sm text-gray-100">2,000+ teams onboarded</p>
<p className="text-sm text-gray-400">From startups to enterprise</p>
</div>
</div>
</div>

<div className="relative w-full max-w-4xl mx-auto mt-6">
<div className="relative overflow-hidden bg-gray-900/50 border-white/10 border rounded-2xl shadow-2xl backdrop-blur-lg">

<div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-black/40">
<div className="flex items-center gap-2">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
<svg className="lucide lucide-layout-dashboard w-4.5 h-4.5" data-lucide="layout-dashboard" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<rect height="9" rx="1" width="7" x="3" y="3"></rect>
<rect height="5" rx="1" width="7" x="14" y="3"></rect>
<rect height="9" rx="1" width="7" x="14" y="12"></rect>
<rect height="5" rx="1" width="7" x="3" y="16"></rect>
</svg>
</span>
<p className="text-sm">Sprint Alpha</p>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-400/10 px-2 py-1 text-xs text-emerald-300 ring-1 ring-emerald-400/20">
<svg className="lucide lucide-check-circle2 w-3.5 h-3.5" data-lucide="check-circle2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
                    On‑track
                  </span>
</div>
</div>

<div className="grid md:grid-cols-2 gap-0">

<div className="border-white/10 border-r pt-4 pr-4 pb-4 pl-4">
<div className="grid grid-cols-3 gap-3">

<div>
<div className="flex items-center justify-between mb-2">
<p className="text-xs text-gray-400">Backlog</p>
<span className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 border border-white/10">3</span>
</div>
<div aria-label="Backlog column preview" className="space-y-2">
<div className="rounded-lg bg-white/5 border border-white/10 p-3">
<p className="text-sm">Auth error states</p>
</div>
<div className="rounded-lg bg-white/5 border border-white/10 p-3">
<p className="text-sm">Refactor task card</p>
</div>
<div className="rounded-lg bg-white/5 border border-white/10 p-3">
<p className="text-sm">Webhooks retry logic</p>
</div>
</div>
</div>

<div>
<div className="flex items-center justify-between mb-2">
<p className="text-xs text-gray-400">Doing</p>
<span className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 border border-white/10">2</span>
</div>
<div className="space-y-2">
<div className="rounded-lg bg-white/5 border border-white/10 p-3">
<p className="text-sm">New sprint template</p>
</div>
<div className="rounded-lg bg-white/5 border border-white/10 p-3">
<p className="text-sm">Email digest</p>
</div>
</div>
</div>

<div>
<div className="flex items-center justify-between mb-2">
<p className="text-xs text-gray-400">Review</p>
<span className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 border border-white/10">1</span>
</div>
<div className="space-y-2">
<div className="rounded-lg bg-white/5 border border-white/10 p-3">
<p className="text-sm">API docs</p>
</div>
</div>
</div>
</div>

<div className="mt-4 rounded-lg border border-white/10 p-3">
<div className="flex items-center justify-between">
<p className="text-xs text-gray-300">7‑day completion</p>
<span className="text-xs text-gray-400"><span className="text-gray-100">+18%</span> week</span>
</div>
<div className="mt-2 h-16 w-full">
<div className="w-full h-full">
<canvas id="miniChart"></canvas>
</div>
</div>
</div>
</div>

<div className="p-4">
<div className="flex items-center justify-between">
<p className="text-sm">My day</p>
<span className="text-xs text-gray-400" id="task-counter">0/4 done</span>
</div>
<div className="mt-3 space-y-2" id="task-list">

<div className="flex items-start gap-3 rounded-lg bg-white/5 border border-white/10 px-3 py-2" data-task="">
<button aria-checked="false" aria-label="Toggle task" className="relative mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-md bg-black/40 border border-white/15 hover:border-white/25 transition" data-checkbox="" type="button">
<svg className="lucide lucide-check w-3.5 h-3.5 opacity-0 transition" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</button>
<div className="min-w-0">
<p className="text-sm leading-snug">Review PR #248</p>
<p className="text-xs text-gray-400">Core UI · Today</p>
</div>
<span className="ml-auto text-[10px] px-2 py-0.5 rounded bg-amber-400/10 text-amber-300 ring-1 ring-amber-400/20">P2</span>
</div>
<div className="flex items-start gap-3 rounded-lg bg-white/5 border border-white/10 px-3 py-2" data-task="">
<button aria-checked="false" aria-label="Toggle task" className="relative mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-md bg-black/40 border border-white/15 hover:border-white/25 transition" data-checkbox="" type="button">
<svg className="lucide lucide-check w-3.5 h-3.5 opacity-0 transition" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</button>
<div className="min-w-0">
<p className="text-sm leading-snug">
                          Draft weekly release notes
                        </p>
<p className="text-xs text-gray-400">Marketing · Today</p>
</div>
</div>
<div className="flex items-start gap-3 rounded-lg bg-white/5 border border-white/10 px-3 py-2" data-task="">
<button aria-checked="false" aria-label="Toggle task" className="relative mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-md bg-black/40 border border-white/15 hover:border-white/25 transition" data-checkbox="" type="button">
<svg className="lucide lucide-check w-3.5 h-3.5 opacity-0 transition" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</button>
<div className="min-w-0">
<p className="text-sm leading-snug">
                          Sync with QA on test plan
                        </p>
<p className="text-xs text-gray-400">QA · 2:00 PM</p>
</div>
<span className="ml-auto text-[10px] px-2 py-0.5 rounded bg-emerald-400/10 text-emerald-300 ring-1 ring-emerald-400/20">Ready</span>
</div>
<div className="flex items-start gap-3 rounded-lg bg-white/5 border border-white/10 px-3 py-2" data-task="">
<button aria-checked="false" aria-label="Toggle task" className="relative mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-md bg-black/40 border border-white/15 hover:border-white/25 transition" data-checkbox="" type="button">
<svg className="lucide lucide-check w-3.5 h-3.5 opacity-0 transition" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</button>
<div className="min-w-0">
<p className="text-sm leading-snug">
                          Prepare operations runbook
                        </p>
<p className="text-xs text-gray-400">Ops · Tomorrow</p>
</div>
<span className="ml-auto text-[10px] px-2 py-0.5 rounded bg-fuchsia-400/10 text-fuchsia-300 ring-1 ring-fuchsia-400/20">Doc</span>
</div>
</div>

<div className="mt-4 flex items-center justify-between">
<button className="text-xs text-gray-300 hover:text-white px-3 py-2 rounded-lg bg-white/5 border border-white/10 inline-flex items-center gap-2" id="clear-completed" type="button">
<svg className="lucide lucide-check-check w-4 h-4" data-lucide="check-check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 7 17l-5-5"></path>
<path d="m22 10-7.5 7.5L13 16"></path>
</svg>
                      Clear completed
                    </button>
<button className="text-xs text-indigo-300 hover:text-indigo-200 inline-flex items-center gap-2" id="add-quick" type="button">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5v14"></path>
</svg>
                      Quick add
                    </button>
</div>
</div>
</div>
</div>

</div>
</div>
</div>
</section>

<section className="py-16 bg-gray-950" id="features">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between gap-6">
<div>
<p className="text-sm uppercase tracking-wider text-indigo-300/90">
              Features
            </p>
<h2 className="mt-2 text-3xl lg:text-4xl tracking-tight text-white" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, sans-serif', fontWeight: '600'}}>
              Everything you need to move work forward
            </h2>
</div>
<a className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm bg-white/5 text-gray-100 hover:bg-white/10 border border-white/10 transition-all hover:scale-[1.02]" href="#product">
            Explore product
            <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
<div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="group rounded-xl border border-white/10 bg-black/40 p-5 hover:bg-black/50 transition-colors">
<div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center">
<svg className="lucide lucide-columns-3 w-5 h-5 text-gray-300" data-lucide="columns-3" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="18" x="3" y="3"></rect>
<path d="M9 3v18"></path>
<path d="M15 3v18"></path>
</svg>
</div>
<h3 className="mt-4 text-lg tracking-tight">Boards &amp; lists</h3>
<p className="mt-2 text-sm text-gray-400">
              Switch seamlessly between Kanban and list to match your focus.
            </p>
</div>
<div className="group rounded-xl border border-white/10 bg-black/40 p-5 hover:bg-black/50 transition-colors">
<div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center">
<svg className="lucide lucide-calendar w-5 h-5 text-gray-300" data-lucide="calendar" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2v4"></path>
<path d="M16 2v4"></path>
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M3 10h18"></path>
</svg>
</div>
<h3 className="mt-4 text-lg tracking-tight">Calendar</h3>
<p className="mt-2 text-sm text-gray-400">
              Deadlines you can trust, with automatic reminders.
            </p>
</div>
<div className="group rounded-xl border border-white/10 bg-black/40 p-5 hover:bg-black/50 transition-colors">
<div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center">
<svg className="lucide lucide-bolt w-5 h-5 text-gray-300" data-lucide="bolt" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
<circle cx="12" cy="12" r="4"></circle>
</svg>
</div>
<h3 className="mt-4 text-lg tracking-tight">Automation</h3>
<p className="mt-2 text-sm text-gray-400">
              Reduce busywork with rules and templates that scale.
            </p>
</div>
<div className="group rounded-xl border border-white/10 bg-black/40 p-5 hover:bg-black/50 transition-colors">
<div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center">
<svg className="lucide lucide-plug w-5 h-5 text-gray-300" data-lucide="plug" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22v-5"></path>
<path d="M9 8V2"></path>
<path d="M15 8V2"></path>
<path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"></path>
</svg>
</div>
<h3 className="mt-4 text-lg tracking-tight">Integrations</h3>
<p className="mt-2 text-sm text-gray-400">
              Connect tools you already use: Git, Slack, Docs, and more.
            </p>
</div>
</div>
</div>
</section>

<section className="py-16" id="product">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-12 gap-6 items-start">
<div className="lg:col-span-5">
<h2 className="text-3xl lg:text-4xl tracking-tight" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, sans-serif', fontWeight: '600'}}>
              Focused by design
            </h2>
<p className="mt-3 text-gray-300">
              Create clarity with a clean, minimal interface. Less noise, more
              signal—so your team knows what matters now.
            </p>
<ul className="mt-6 space-y-3 text-sm text-gray-300">
<li className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-md bg-white/5 border border-white/10">
<svg className="lucide lucide-check w-4 h-4 text-teal-300" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
                Quick capture with keyboard everywhere.
              </li>
<li className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-md bg-white/5 border border-white/10">
<svg className="lucide lucide-check w-4 h-4 text-teal-300" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
                Flexible fields: assignees, labels, dates.
              </li>
<li className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-md bg-white/5 border border-white/10">
<svg className="lucide lucide-check w-4 h-4 text-teal-300" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
                Smart filters for sprints, teams, or goals.
              </li>
</ul>
</div>
<div className="lg:col-span-7 rounded-2xl border border-white/10 bg-gradient-to-b from-gray-950 to-black overflow-hidden">
<div className="p-5 grid md:grid-cols-3 gap-4">

<div>
<div className="flex items-center justify-between mb-3">
<p className="text-sm">Backlog</p>
<span className="text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/10">6</span>
</div>
<div className="space-y-2">
<div className="rounded-lg bg-white/5 border border-white/10 p-3">
<p className="text-sm">Batch actions on tasks</p>
</div>
<div className="rounded-lg bg-white/5 border border-white/10 p-3">
<p className="text-sm">Refine “My Day” suggestions</p>
</div>
<div className="rounded-lg bg-white/5 border border-white/10 p-3">
<p className="text-sm">Timeline view</p>
</div>
</div>
</div>
<div>
<div className="flex items-center justify-between mb-3">
<p className="text-sm">In Progress</p>
<span className="text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/10">3</span>
</div>
<div className="space-y-2">
<div className="rounded-lg bg-white/5 border border-white/10 p-3">
<p className="text-sm">Dependencies v1</p>
</div>
<div className="rounded-lg bg-white/5 border border-white/10 p-3">
<p className="text-sm">Notifications center</p>
</div>
<div className="rounded-lg bg-white/5 border border-white/10 p-3">
<p className="text-sm">Slack actions</p>
</div>
</div>
</div>
<div>
<div className="flex items-center justify-between mb-3">
<p className="text-sm">Review</p>
<span className="text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/10">1</span>
</div>
<div className="space-y-2">
<div className="rounded-lg bg-white/5 border border-white/10 p-3">
<p className="text-sm">Mobile onboarding</p>
</div>
</div>
<div className="h-px bg-white/10 my-4"></div>
<div className="flex items-center justify-between">
<p className="text-xs text-gray-300">SLA</p>
<p className="text-xs">
<span className="text-gray-100">98%</span> last 30d
                  </p>
</div>
<div className="mt-2 h-16 w-full">
<div className="w-full h-full">
<canvas id="spark"></canvas>
</div>
</div>
</div>
</div>
<div className="px-5 pb-5">
<div className="rounded-xl border border-white/10 bg-black/40 p-4">
<div className="flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
<svg className="lucide lucide-wand-2 w-4.5 h-4.5" data-lucide="wand-2" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path>
<path d="m14 7 3 3"></path>
<path d="M5 6v4"></path>
<path d="M19 14v4"></path>
<path d="M10 2v2"></path>
<path d="M7 8H3"></path>
<path d="M21 16h-4"></path>
<path d="M11 3H9"></path>
</svg>
</span>
<div>
<p className="text-sm">Automation suggestion</p>
<p className="text-xs text-gray-400">
                      Auto‑assign tasks with “bug” label to QA.
                    </p>
</div>
<button className="ml-auto text-xs px-3 py-1.5 rounded-md bg-white/5 border border-white/10 hover :bg-white/10 text-gray-200 transition focus:outline-none focus:ring-2 focus:ring-indigo-500" id="enable-automation" type="button">
                    Enable
                  </button>
<button className="ml-2 text-xs text-gray-400 hover:text-gray-200 transition" id="dismiss-automation" type="button">
                    Dismiss
                  </button>
</div>
</div>
</div>
</div>

</div>
</div>
</section>

<section className="py-16 bg-gray-950/60" id="analytics">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
<div>
<p className="text-sm uppercase tracking-wider text-indigo-300/90">Analytics</p>
<h2 className="mt-2 text-3xl lg:text-4xl tracking-tight text-white" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, sans-serif', fontWeight: '600'}}>
              Clarity on velocity and outcomes
            </h2>
<p className="mt-3 text-gray-300 max-w-2xl">
              Track progress with real-time velocity, flow, and completion trends.
              Share the signal that keeps teams aligned.
            </p>
</div>
<a className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm bg-indigo-400 text-black hover:bg-indigo-300 transition-all hover:scale-[1.02]" href="#try">
            Try HubTask analytics
            <svg className="w-4 h-4" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
<div className="mt-8 grid lg:grid-cols-12 gap-6">
<div className="lg:col-span-8">
<div className="rounded-2xl border border-white/10 bg-black/40 p-4">
<div className="flex items-center justify-between">
<p className="text-sm">Team velocity (last 12 weeks)</p>
<span className="text-xs text-gray-400">
<span className="text-gray-100">+12%</span> vs prev.
                </span>
</div>
<div className="mt-3 h-64 w-full">
<canvas id="velocityChart"></canvas>
</div>
</div>
</div>
<div className="lg:col-span-4 grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
<div className="rounded-2xl border border-white/10 bg-black/40 p-4">
<div className="flex items-center justify-between">
<p className="text-sm">Cycle time</p>
<span className="text-xs text-emerald-300">-8%</span>
</div>
<p className="mt-3 text-3xl font-semibold tracking-tight">2.7d</p>
<p className="text-xs text-gray-400 mt-1">Median last 30 days</p>
<div className="mt-3 h-16">
<canvas id="cycleSpark"></canvas>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-black/40 p-4">
<div className="flex items-center justify-between">
<p className="text-sm">Throughput</p>
<span className="text-xs text-indigo-300">42/wk</span>
</div>
<p className="mt-3 text-3xl font-semibold tracking-tight">168</p>
<p className="text-xs text-gray-400 mt-1">Completed last 4 weeks</p>
<div className="mt-3 grid grid-cols-6 gap-1">
<span className="h-8 rounded bg-indigo-400/20 border border-indigo-400/30"></span>
<span className="h-6 rounded bg-indigo-400/20 border border-indigo-400/30"></span>
<span className="h-10 rounded bg-indigo-400/20 border border-indigo-400/30"></span>
<span className="h-7 rounded bg-indigo-400/20 border border-indigo-400/30"></span>
<span className="h-9 rounded bg-indigo-400/20 border border-indigo-400/30"></span>
<span className="h-8 rounded bg-indigo-400/20 border border-indigo-400/30"></span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16" id="pricing">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto">
<p className="text-sm uppercase tracking-wider text-indigo-300/90">Pricing</p>
<h2 className="mt-2 text-3xl lg:text-4xl tracking-tight" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, sans-serif', fontWeight: '600'}}>
            Simple plans that scale with you
          </h2>
<p className="mt-3 text-gray-300">
            Start free. Upgrade when you need advanced features and governance.
          </p>
</div>
<div className="mt-10 grid md:grid-cols-3 gap-6">

<div className="rounded-2xl border border-white/10 bg-black/40 p-6">
<h3 className="text-lg tracking-tight">Free</h3>
<p className="mt-2 text-sm text-gray-400">For individuals and starters</p>
<p className="mt-4 text-4xl font-semibold">$0</p>
<p className="text-xs text-gray-400">forever</p>
<ul className="mt-6 space-y-3 text-sm text-gray-300">
<li className="flex items-center gap-2">
<span className="h-5 w-5 inline-flex items-center justify-center rounded bg-white/5 border border-white/10">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
                Unlimited tasks &amp; projects
              </li>
<li className="flex items-center gap-2">
<span className="h-5 w-5 inline-flex items-center justify-center rounded bg-white/5 border border-white/10">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
                Boards, lists, calendar
              </li>
<li className="flex items-center gap-2">
<span className="h-5 w-5 inline-flex items-center justify-center rounded bg-white/5 border border-white/10">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
                Basic automation
              </li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm bg-white/5 text-gray-100 hover:bg-white/10 border border-white/10 transition-all" href="#try">
              Get started
            </a>
</div>

<div className="relative rounded-2xl border border-indigo-400/30 bg-gradient-to-b from-indigo-500/10 to-black p-6">
<span className="absolute -top-3 right-4 text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-indigo-400 text-black">
              Popular
            </span>
<h3 className="text-lg tracking-tight">Pro</h3>
<p className="mt-2 text-sm text-gray-300">For growing teams</p>
<p className="mt-4 text-4xl font-semibold">$9</p>
<p className="text-xs text-gray-400">per user / month</p>
<ul className="mt-6 space-y-3 text-sm text-gray-300">
<li className="flex items-center gap-2">
<span className="h-5 w-5 inline-flex items-center justify-center rounded bg-indigo-400/20 border border-indigo-400/30">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
                Advanced fields &amp; views
              </li>
<li className="flex items-center gap-2">
<span className="h-5 w-5 inline-flex items-center justify-center rounded bg-indigo-400/20 border border-indigo-400/30">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
                Powerful automations
              </li>
<li className="flex items-center gap-2">
<span className="h-5 w-5 inline-flex items-center justify-center rounded bg-indigo-400/20 border border-indigo-400/30">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
                Integrations: Slack, Git, Docs
              </li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm bg-indigo-400 text-black hover:bg-indigo-300 transition-all" href="#try">
              Start Pro trial
            </a>
</div>

<div className="rounded-2xl border border-white/10 bg-black/40 p-6">
<h3 className="text-lg tracking-tight">Business</h3>
<p className="mt-2 text-sm text-gray-400">For security &amp; scale</p>
<p className="mt-4 text-4xl font-semibold">$19</p>
<p className="text-xs text-gray-400">per user / month</p>
<ul className="mt-6 space-y-3 text-sm text-gray-300">
<li className="flex items-center gap-2">
<span className="h-5 w-5 inline-flex items-center justify-center rounded bg-white/5 border border-white/10">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
                SSO, SCIM, audit logs
              </li>
<li className="flex items-center gap-2">
<span className="h-5 w-5 inline-flex items-center justify-center rounded bg-white/5 border border-white/10">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
                Advanced analytics
              </li>
<li className="flex items-center gap-2">
<span className="h-5 w-5 inline-flex items-center justify-center rounded bg-white/5 border border-white/10">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
                Priority support
              </li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm bg-white/5 text-gray-100 hover:bg-white/10 border border-white/10 transition-all" href="#try">
              Contact sales
            </a>
</div>
</div>
</div>
</section>

<section className="py-16" id="try">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-indigo-500/10 via-indigo-400/10 to-purple-500/10">
<div aria-hidden="true" className="absolute inset-0 pointer-events-none opacity-60">
<svg className="absolute -top-10 -right-10 w-[400px] h-[400px] blur-3xl" viewbox="0 0 200 200">
<defs>
<radialgradient cx="50%" cy="50%" id="g" r="50%">
<stop offset="0%" stop-color="#818cf8"></stop>
<stop offset="100%" stop-color="#000000" stop-opacity="0"></stop>
</radialgradient>
</defs>
<circle cx="100" cy="100" fill="url(#g)" r="100"></circle>
</svg>
</div>
<div className="p-8 md:p-12 relative">
<div className="max-w-2xl">
<h3 className="text-2xl md:text-3xl tracking-tight" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, sans-serif', fontWeight: '600'}}>
                Ship faster with HubTask
              </h3>
<p className="mt-3 text-gray-300">
                Start free in minutes. No credit card required.
              </p>
<form className="mt-6 grid sm:grid-cols-[1fr_auto] gap-3" onsubmit="return false;">
<label className="sr-only" htmlFor="email">Email</label>
<input className="w-full rounded-xl bg-black/60 border border-white/10 px-4 py-3 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500" id="email" placeholder="you@company.com" required="" type="email"/>
<button className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm bg-indigo-400 text-black hover:bg-indigo-300 transition-all" id="cta-submit" type="submit">
                  Create account
                </button>
</form>
<p className="mt-3 text-xs text-gray-400">
                By creating an account you agree to our
                <a className="text-indigo-300 hover:text-indigo-200 underline underline-offset-2" href="#">Terms</a>
                and
                <a className="text-indigo-300 hover:text-indigo-200 underline underline-offset-2" href="#">Privacy</a>.
              </p>
</div>
</div>
</div>
</div>
</section>

<footer className="pt-12 pb-8 border-t border-white/10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-4 gap-8">
<div>
<div className="flex items-center gap-2">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12h18"></path>
<path d="M3 6h18"></path>
<path d="M3 18h18"></path>
</svg>
</span>
<span className="text-lg" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, sans-serif'}}>HubTask</span>
</div>
<p className="mt-3 text-sm text-gray-400">
              Plan, prioritize, and ship work without friction.
            </p>
</div>
<div>
<p className="text-sm text-gray-400">Product</p>
<ul className="mt-3 space-y-2 text-sm">
<li><a className="text-gray-300 hover:text-white" href="#features">Features</a></li>
<li><a className="text-gray-300 hover:text-white" href="#product">Product</a></li>
<li><a className="text-gray-300 hover:text-white" href="#analytics">Analytics</a></li>
<li><a className="text-gray-300 hover:text-white" href="#pricing">Pricing</a></li>
</ul>
</div>
<div>
<p className="text-sm text-gray-400">Company</p>
<ul className="mt-3 space-y-2 text-sm">
<li><a className="text-gray-300 hover:text-white" href="#">About</a></li>
<li><a className="text-gray-300 hover:text-white" href="#">Blog</a></li>
<li><a className="text-gray-300 hover:text-white" href="#">Careers</a></li>
<li><a className="text-gray-300 hover:text-white" href="#">Contact</a></li>
</ul>
</div>
<div>
<p className="text-sm text-gray-400">Resources</p>
<ul className="mt-3 space-y-2 text-sm">
<li><a className="text-gray-300 hover:text-white" href="#">Help Center</a></li>
<li><a className="text-gray-300 hover:text-white" href="#">Guides</a></li>
<li><a className="text-gray-300 hover:text-white" href="#">Security</a></li>
<li><a className="text-gray-300 hover:text-white" href="#">Status</a></li>
</ul>
</div>
</div>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-xs text-gray-500">© <span id="year"></span> HubTask. All rights reserved.</p>
<div className="flex items-center gap-4 text-xs text-gray-400">
<a className="hover:text-white" href="#">Terms</a>
<span className="text-gray-700">•</span>
<a className="hover:text-white" href="#">Privacy</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
