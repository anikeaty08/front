import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}


!function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();


      // Helpers
      const $ = (s, ctx = document) => ctx.querySelector(s);
      const $$ = (s, ctx = document) => Array.from(ctx.querySelectorAll(s));

      // Current year
      $('#year').textContent = new Date().getFullYear();

      // Smooth scroll for internal links (accounts for fixed header)
      function smoothScrollTo(id) {
        const el = document.querySelector(id);
        if (!el) return;
        const headerOffset = $('#site-header').offset + 8;
        const rect = el.getBoundingRect();
        const offsetTop = window.pageYOffset + rect.top - headerOffset        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
      $$('a[href^="#"]').forEach(a => {
        a.addEventListener('click', (e) => {
          const hash = a.getAttribute('href');
          if (!hash || hash === '#') return;
          if (document.querySelector(hash)) {
            e.preventDefault();
            smoothScrollTo(hash);
          }
        });
      });

      // Mobile menu
      const navToggle = $('#nav-toggle');
      const mobilePanel = $('#mobile-panel');
      const sheet = $('#mobile-panel > div:nth-child(2)');
      function openMobile() {
        mobilePanel.classList.remove('pointer-events-none');
        mobilePanel.classList.remove('opacity-0');
        mobilePanel.classList.add('opacity-100');
        sheet.style.transform = 'translateY(0)';
        sheet.style.opacity = '1';
        navToggle.setAttribute('aria-expanded', 'true');
        // icon swap
        const [menuIcon, closeIcon] = navToggle.querySelectorAll('svg');
        menuIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      }
      function closeMobile() {
        mobilePanel.classList.add('opacity-0');
        mobilePanel.classList.remove('opacity-100');
        mobilePanel.classList.add('pointer-events-none');
        sheet.style.transform = 'translateY(-8px)';
 sheet.style.opacity = '0';
        navToggle.setAttribute('aria-expanded', 'false');
        const [menuIcon, closeIcon] = navToggle.querySelectorAll('svg');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
        document.body.style.overflow = '';
      }
      navToggle?.addEventListener('click', () => {
        const expanded = navToggle.getAttribute('aria-expanded') === 'true';
        expanded ? closeMobile() : openMobile();
      });
      $$('[data-close-overlay]').forEach(btn => btn.addEventListener('click', closeMobile));
      $$('[data-mobile-link]').forEach(link => link.addEventListener('click', () => {
        closeMobile();
        // delay to allow close animation before scrolling
        const href = link.getAttribute('href');
        setTimeout(() => smoothScrollTo(href), 10);
      }));

      // Scroll progress
      const progress = $('#scroll-progress');
      function updateProgress() {
        const h = document.documentElement;
        const scrolled = h.scrollTop || document.body.scrollTop;
        const height = h.scrollHeight - h.clientHeight;
        const pct = height ? (scrolled / height) * 100 : 0;
        progress.style.width = pct + '%';
      }
      document.addEventListener('scroll', updateProgress, { passive: true });
      updateProgress();

      // Header hide on scroll
      let lastY = window.scrollY;
      const header = $('#site-header');
      function onScrollDir() {
        const y = window.scrollY;
        const down = y > lastY;
        const beyond = y > 80;
        if (down && beyond) header.classList.add('-translate-y-full');
        else header.classList.remove('-translate-y-full');
        lastY = y;
      }
      document.addEventListener('scroll', onScrollDir, { passive: true });

      // Scroll spy
      const sections = ['#features', '#product', '#analytics', '#pricing'].map(id => document.querySelector(id)).filter(Boolean);
      const navLinks = $$('[data-nav-link]');
      const spy = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          const id = '#' + entry.target.id;
          if (entry.isIntersecting) {
            navLinks.forEach(a => {
              a.classList.remove('text-white');
              a.classList.add('text-gray-300');
              if (a.getAttribute('href') === id) {
                a.classList.add('text-white');
                a.classList.remove('text-gray-300');
              }
            });
          }
        });
      }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });
      sections.forEach(sec => spy.observe(sec));

      // Task interactions
      const taskList = $('#task-list');
      const counter = $('#task-counter');

      function updateCounter() {
        const tasks = $$('[data-task]', taskList);
        const done = tasks.filter(t => t.querySelector('[data-checkbox]').getAttribute('aria-checked') === 'true').length;
        counter.textContent = `${done}/${tasks.length} done`;
      }

      function toggleTask(btn) {
        const isChecked = btn.getAttribute('aria-checked') === 'true';
        btn.setAttribute('aria-checked', String(!isChecked));
        const icon = btn.querySelector('svg');
        icon.style.opacity = isChecked ? '0' : '1';
        btn.classList.toggle('bg-gradient-to-br', !isChecked);
        btn.classList.toggle('from-emerald-500/20', !isChecked);
        btn.classList.toggle('to-emerald-400/20', !isChecked);
        btn.classList.toggle('border-emerald-400/30', !isChecked);

        const task = btn.closest('[data-task]');
        const textEls = task.querySelectorAll('p.text-sm, p.text-xs');
        textEls.forEach(el => {
          if (el.classList.contains('text-xs')) {
            el.classList.toggle('text-gray-500', !isChecked);
          } else {
            el.classList.toggle('line-through', !isChecked);
            el.classList.toggle('text-gray-500', !isChecked);
          }
        });
        updateCounter();
      }

      taskList?.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-checkbox]');
        if (btn) toggleTask(btn);
      });

      $('#clear-completed')?.addEventListener('click', () => {
        $$('[data-task]', taskList).forEach(task => {
          const btn = task.querySelector('[data-checkbox]');
          if (btn.getAttribute('aria-checked') === 'true') task.remove();
        });
        updateCounter();
      });

      $('#add-quick')?.addEventListener('click', () => {
        const node = document.createElement('div');
        node.className = 'flex items-start gap-3 rounded-lg bg-white/5 border border-white/10 px-3 py-2';
        node.setAttribute('data-task', '');
        node.innerHTML = `
          <button type="button" class="relative mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-md bg-black/40 border border-white/15 hover:border-white/25 transition" data-checkbox aria-checked="false" aria-label="Toggle task">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-lucide="check" class="lucide lucide-check w-3.5 h-3.5 opacity-0 transition"><path d="M20 6 9 17l-5-5"></path></svg>
          </button>
          <div class="min-w-0">
            <p class="text-sm leading-snug">New quick task</p>
            <p class="text-xs text-gray-400">Inbox · Today</p>
          </div>
        `;
        taskList.prepend(node);
        updateCounter();
      });

      // Initialize counter at load
      updateCounter();

      // Charts
      function makeGradient(ctx, colorFrom, colorTo) {
        const g = ctx.createLinearGradient(0, 0, 0, 160);
        g.addColorStop(0, colorFrom);
        g.addColorStop(1, colorTo);
        return g;
      }

      // Main chart
      const mainCtx = $('#mainChart')?.getContext('2d');
      if (mainCtx) {
        const grad = makeGradient(mainCtx, 'rgba(59,130,246,0.35)', 'rgba(59,130,246,0)');
        new Chart(mainCtx, {
          type: 'line',
          data: {
            labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
            datasets: [{
              label: 'Tasks',
              data: [12, 15, 10, 18, 22, 17, 24],
              borderColor: '#60A5FA',
              backgroundColor: grad,
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
              tooltip: {
                enabled: true,
                mode: 'index',
                intersect: false,
                displayColors: false
              }
            },
            scales: {
              x: {
                grid: { display: false },
                ticks: { color: '#9CA3AF', font: { size: 11 } }
              },
              y: {
                grid: { color: 'rgba(255,255,255,0.06)' },
                ticks: { color: '#9CA3AF', font: { size: 11 }, stepSize: 5 }
              }
            }
          }
        });
      }

      // Mini chart
      const miniCtx = $('#miniChart')?.getContext('2d');
      if (miniCtx) {
        new Chart(miniCtx, {
          type: 'bar',
          data: {
            labels: ['M','T','W','T','F','S','S'],
            datasets: [{
              data: [3, 2, 5, 4, 6, 3, 7],
              backgroundColor: '#34D399',
              borderRadius: 4,
              maxBarThickness: 10
            }]
          },
          options: {
            plugins: { legend: { display: false }, tooltip: { enabled: false } },
            scales: { x: { display: false }, y: { display: false } }
          }
        });
      }

      // Spark chart
      const sparkCtx = $('#spark')?.getContext('2d');
      if (sparkCtx) {
        const grad = makeGradient(sparkCtx, 'rgba(16,185,129,0.35)', 'rgba(16,185,129,0)');
        new Chart(sparkCtx, {
          type: 'line',
          data: {
            labels: Array.from({ length: 20 }, (_, i) => i + 1),
            datasets: [{
              data: [96, 97, 95, 98, 99, 98, 97, 98, 99, 98, 97, 96, 97, 98, 98, 99, 98, 97, 98, 99],
              borderColor: '#34D399',
              backgroundColor: grad,
              tension: 0.35,
              fill: true,
              pointRadius: 0,
              borderWidth: 2
            }]
          },
          options: {
            plugins: { legend: { display: false }, tooltip: { enabled: false } },
            scales: { x: { display: false }, y: { display: false } }
          }
        });
      }

      // Try form demo
      $('#try-submit')?.addEventListener('click', () => {
        const input = $('#email');
        if (!input.checkValidity()) {
          input.focus();
          input.reportValidity?.();
          return;
        }
        $('#try-success').classList.remove('hidden');
        $('#try-help').classList.add('hidden');
      });

      // Icons
      try { lucide.createIcons(); } catch (e) {}
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-blue-400 to-purple-400 w-0 z-[60]" id="scroll-progress" style={{width: '0%'}}></div>

<header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md border-b bg-black/70 border-white/5 transition-transform duration-300 will-change-transform" id="site-header">
<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16">
<div className="h-full flex items-center justify-between">

<a className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md" href="#overview">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-[inset_0_0_0_2px_rgba(255,255,255,0.06)]">
<svg aria-hidden="true" className="w-[18px] h-[18px]" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12h18"></path>
<path d="M3 6h18"></path>
<path d="M3 18h18"></path>
</svg>
</span>
<span className="text-lg tracking-tight" style={{fontFamily: '\'SF Pro Display\', -apple-system, BlinkMacSystemFont, \'SF Pro Text\', Segoe UI, Roboto, Helvetica, Arial, sans-serif'}}>Clarity</span>
</a>

<div className="hidden md:flex items-center gap-1 rounded-full border border-white/10 px-2">
<a className="px-3 py-2 text-sm text-gray-300 hover:text-white transition" data-nav-link="" href="#features">Features</a>
<a className="px-3 py-2 text-sm text-gray-300 hover:text-white transition" data-nav-link="" href="#product">Product</a>
<a className="px-3 py-2 text-sm text-gray-300 hover:text-white transition" data-nav-link="" href="#analytics">Analytics</a>
<a className="px-3 py-2 text-sm text-gray-300 hover:text-white transition" data-nav-link="" href="#pricing">Pricing</a>
</div>

<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm bg-gray-100 text-black hover:bg-gray-200 transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500" href="#try">
              Sign in
            </a>
<button aria-controls="mobile-panel" aria-expanded="false" aria-label="Toggle menu" className="md:hidden p-2 rounded-md transition-colors hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500" id="nav-toggle">
<svg aria-hidden="true" className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
<svg aria-hidden="true" className="lucide lucide-x w-5 h-5 hidden" data-lucide="x" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
</div>
</nav>
</header>

<div className="fixed inset-0 z-50 opacity-0 pointer-events-none transition-opacity duration-200" id="mobile-panel">
<div className="absolute inset-0 bg-black/60 backdrop-blur-sm" data-close-overlay=""></div>
<div className="absolute inset-x-0 top-0 p-3 sm:p-4" style={{transform: 'translateY(-8px)', opacity: '0'}}>
<div className="rounded-2xl border border-white/10 bg-black/90 shadow-xl">
<div className="px-4 py-3 border-b border-white/10 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
<svg className="w-[18px] h-[18px]" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M3 12h18"></path><path d="M3 6h18"></path><path d="M3 18h18"></path></svg>
</span>
<span className="text-base tracking-tight" style={{fontFamily: '\'SF Pro Display\', -apple-system, BlinkMacSystemFont, \'SF Pro Text\', Segoe UI, Roboto, Helvetica, Arial, sans-serif'}}>Clarity</span>
</div>
<button aria-label="Close menu" className="p-2 rounded-md hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-blue-500" data-close-overlay="">
<svg className="w-5 h-5" data-lucide="x" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<div className="p-2">
<a className="block px-3 py-2 rounded-lg text-sm text-gray-200 hover:bg-white/5" data-mobile-link="" href="#features">Features</a>
<a className="block px-3 py-2 rounded-lg text-sm text-gray-200 hover:bg-white/5" data-mobile-link="" href="#product">Product</a>
<a className="block px-3 py-2 rounded-lg text-sm text-gray-200 hover:bg-white/5" data-mobile-link="" href="#analytics">Analytics</a>
<a className="block px-3 py-2 rounded-lg text-sm text-gray-200 hover:bg-white/5" data-mobile-link="" href="#pricing">Pricing</a>
<div className="h-px my-2 bg-white/10"></div>
<a className="block px-3 py-2 rounded-lg text-sm bg-blue-400 text-black hover:bg-blue-300 text-center" data-mobile-link="" href="#try">Try free</a>
</div>
</div>
</div>
</div>

<section className="relative overflow-hidden sm:pt-28 pt-24 pb-14" id="overview">
<div className="absolute top-0 left-0 w-full h-full -z-10" data-us-project="ju5gjGnrRr5Ud4fAt7eh"></div>


<div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pl-4">
<div className="flex flex-col gap-10 lg:gap-16 text-center items-center">
<div className="max-w-3xl mx-auto">
<span className="text-xs uppercase tracking-wider text-blue-300/90">New: Smart sprints</span>
<h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight" style={{fontFamily: '\'SF Pro Display\', -apple-system, BlinkMacSystemFont, \'SF Pro Text\', Segoe UI, Roboto, Helvetica, Arial, sans-serif', fontWeight: '600'}}>
              Plan less. Ship more.
            </h1>
<p className="mt-6 text-lg text-gray-300 max-w-xl mx-auto">
              Clarity keeps teams aligned with fast capture, focused boards, and progress you can trust.
            </p>
<div className="flex flex-col sm:flex-row gap-3 mt-8 justify-center">
<a className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm bg-blue-400 text-black hover:bg-blue-300 transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500" href="#try">
                Try free
                <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center gap-2 hover:bg-white/10 transition-all text-gray-100 bg-white/5 border-white/10 border rounded-full px-5 py-3 backdrop-blur-lg" href="#product">
                Watch demo
                <svg className="lucide lucide-play w-4 h-4" data-lucide="play" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1.003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</a>
</div>
<div className="mt-8 flex items-center gap-6 justify-center">
<div className="flex -space-x-2">
<img alt="" className="w-9 h-9 rounded-full border-2 border-black object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=160&amp;q=80"/>
<img alt="" className="w-9 h-9 rounded-full border-2 border-black object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=160&amp;q=80"/>
<img alt="" className="w-9 h-9 rounded-full border-2 border-black object-cover" src="https://images.unsplash.com/photo-1500649297466-74794c70acfc?w=160&amp;q=80"/>
<div className="w-9 h-9 rounded-full border-2 border-black bg-blue-400 flex items-center justify-center text-black text-xs">2k+</div>
</div>
<div>
<p className="text-sm text-gray-100">2,000+ teams on Clarity</p>
<p className="text-sm text-gray-400">From startups to enterprise</p>
</div>
</div>
</div>

<div className="relative w-full max-w-4xl mx-auto mt-6">
<div className="relative overflow-hidden bg-gray-900/50 border-white/10 border rounded-2xl shadow-2xl backdrop-blur-lg">

<div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-black/40">
<div className="flex items-center gap-2">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
<svg className="lucide lucide-layout-dashboard w-5 h-5" data-lucide="layout-dashboard" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
</span>
<p className="text-sm">Sprint Nova</p>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-400/10 px-2 py-1 text-xs text-emerald-300 ring-1 ring-emerald-400/20">
<svg className="lucide lucide-check-circle-2 w-4 h-4" data-lucide="check-circle-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
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
<div className="rounded-lg bg-white/5 border border-white/10 p-3 hover:bg-white/10 transition">
<p className="text-sm">Auth error states</p>
</div>
<div className="rounded-lg bg-white/5 border border-white/10 p-3 hover:bg-white/10 transition">
<p className="text-sm">Refactor task card</p>
</div>
<div className="rounded-lg bg-white/5 border border-white/10 p-3 hover:bg-white/10 transition">
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
<div className="rounded-lg bg-white/5 border border-white/10 p-3 hover:bg-white/10 transition">
<p className="text-sm">New sprint template</p>
</div>
<div className="rounded-lg bg-white/5 border border-white/10 p-3 hover:bg-white/10 transition">
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
<div className="rounded-lg bg-white/5 border border-white/10 p-3 hover:bg-white/10 transition">
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
<p className="text-sm">Today</p>
<span className="text-xs text-gray-400" id="task-counter">0/4 done</span>
</div>
<div className="mt-3 space-y-2" id="task-list">

<div className="flex items-start gap-3 rounded-lg bg-white/5 border border-white/10 px-3 py-2" data-task="">
<button aria-checked="false" aria-label="Toggle task" className="relative mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-md bg-black/40 border border-white/15 hover:border-white/25 transition" data-checkbox="" type="button">
<svg className="lucide lucide-check w-3.5 h-3.5 opacity-0 transition" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</button>
<div className="min-w-0">
<p className="text-sm leading-snug">Review PR #248</p>
<p className="text-xs text-gray-400">Core UI · Today</p>
</div>
<span className="ml-auto text-[10px] px-2 py-0.5 rounded bg-amber-400/10 text-amber-300 ring-1 ring-amber-400/20">P2</span>
</div>
<div className="flex items-start gap-3 rounded-lg bg-white/5 border border-white/10 px-3 py-2" data-task="">
<button aria-checked="false" aria-label="Toggle task" className="relative mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-md bg-black/40 border border-white/15 hover:border-white/25 transition" data-checkbox="" type="button">
<svg className="lucide lucide-check w-3.5 h-3.5 opacity-0 transition" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</button>
<div className="min-w-0">
<p className="text-sm leading-snug">Draft weekly release notes</p>
<p className="text-xs text-gray-400">Marketing · Today</p>
</div>
</div>
<div className="flex items-start gap-3 rounded-lg bg-white/5 border border-white/10 px-3 py-2" data-task="">
<button aria-checked="false" aria-label="Toggle task" className="relative mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-md bg-black/40 border border-white/15 hover:border-white/25 transition" data-checkbox="" type="button">
<svg className="lucide lucide-check w-3.5 h-3.5 opacity-0 transition" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</button>
<div className="min-w-0">
<p className="text-sm leading-snug">Sync with QA on test plan</p>
<p className="text-xs text-gray-400">QA · 2:00 PM</p>
</div>
<span className="ml-auto text-[10px] px-2 py-0.5 rounded bg-emerald-400/10 text-emerald-300 ring-1 ring-emerald-400/20">Ready</span>
</div>
<div className="flex items-start gap-3 rounded-lg bg-white/5 border border-white/10 px-3 py-2" data-task="">
<button aria-checked="false" aria-label="Toggle task" className="relative mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-md bg-black/40 border border-white/15 hover:border-white/25 transition" data-checkbox="" type="button">
<svg className="lucide lucide-check w-3.5 h-3.5 opacity-0 transition" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</button>
<div className="min-w-0">
<p className="text-sm leading-snug">Prepare operations runbook</p>
<p className="text-xs text-gray-400">Ops · Tomorrow</p>
</div>
<span className="ml-auto text-[10px] px-2 py-0.5 rounded bg-fuchsia-400/10 text-fuchsia-300 ring-1 ring-fuchsia-400/20">Doc</span>
</div>
</div>

<div className="mt-4 flex items-center justify-between">
<button className="text-xs text-gray-300 hover:text-white px-3 py-2 rounded-lg bg-white/5 border border-white/10 inline-flex items-center gap-2" id="clear-completed" type="button">
<svg className="lucide lucide-check-check w-4 h-4" data-lucide="check-check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 7 17l-5-5"></path><path d="m22 10-7.5 7.5L13 16"></path></svg>
                      Clear completed
                    </button>
<button className="text-xs text-blue-300 hover:text-blue-200 inline-flex items-center gap-2" id="add-quick" type="button">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
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
<p className="text-sm uppercase tracking-wider text-blue-300/90">Features</p>
<h2 className="mt-2 text-3xl lg:text-4xl tracking-tight text-white" style={{fontFamily: '\'SF Pro Display\', -apple-system, BlinkMacSystemFont, \'SF Pro Text\', Segoe UI, Roboto, Helvetica, Arial, sans-serif', fontWeight: '600'}}>
              Built for momentum.
            </h2>
</div>
<a className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm bg-white/5 text-gray-100 hover:bg-white/10 border border-white/10 transition-all hover:scale-[1.02]" href="#product">
            Explore product
            <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="group rounded-xl border border-white/10 bg-black/40 p-5 hover:bg-black/50 transition-colors">
<div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center">
<svg className="lucide lucide-columns-3 w-5 h-5 text-gray-300" data-lucide="columns-3" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M9 3v18"></path><path d="M15 3v18"></path></svg>
</div>
<h3 className="mt-4 text-lg tracking-tight">Boards &amp; lists</h3>
<p className="mt-2 text-sm text-gray-400">Switch views to match your focus, instantly.</p>
</div>
<div className="group rounded-xl border border-white/10 bg-black/40 p-5 hover:bg-black/50 transition-colors">
<div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center">
<svg className="lucide lucide-calendar w-5 h-5 text-gray-300" data-lucide="calendar" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</div>
<h3 className="mt-4 text-lg tracking-tight">Calendar</h3>
<p className="mt-2 text-sm text-gray-400">Deadlines you won’t miss. Reminders built‑in.</p>
</div>
<div className="group rounded-xl border border-white/10 bg-black/40 p-5 hover:bg-black/50 transition-colors">
<div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center">
<svg className="lucide lucide-bolt w-5 h-5 text-gray-300" data-lucide="bolt" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><circle cx="12" cy="12" r="4"></circle></svg>
</div>
<h3 className="mt-4 text-lg tracking-tight">Automation</h3>
<p className="mt-2 text-sm text-gray-400">Cut busywork with rules that do the work for you.</p>
</div>
<div className="group rounded-xl border border-white/10 bg-black/40 p-5 hover:bg-black/50 transition-colors">
<div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center">
<svg className="lucide lucide-plug w-5 h-5 text-gray-300" data-lucide="plug" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 22v-5"></path><path d="M9 8V2"></path><path d="M15 8V2"></path><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"></path></svg>
</div>
<h3 className="mt-4 text-lg tracking-tight">Integrations</h3>
<p className="mt-2 text-sm text-gray-400">Connect the tools you already rely on.</p>
</div>
</div>
</div>
</section>

<section className="py-16" id="product">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-12 gap-6 items-start">
<div className="lg:col-span-5">
<h2 className="text-3xl lg:text-4xl tracking-tight" style={{fontFamily: '\'SF Pro Display\', -apple-system, BlinkMacSystemFont, \'SF Pro Text\', Segoe UI, Roboto, Helvetica, Arial, sans-serif', fontWeight: '600'}}>Designed for focus</h2>
<p className="mt-3 text-gray-300">A calm interface that puts your work first—so the team knows what matters now.</p>
<ul className="mt-6 space-y-3 text-sm text-gray-300">
<li className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-md bg-white/5 border border-white/10">
<svg className="lucide lucide-check w-4 h-4 text-teal-300" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
                Capture anything with the keyboard.
              </li>
<li className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-md bg-white/5 border border-white/10">
<svg className="lucide lucide-check w-4 h-4 text-teal-300" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
                Flexible fields for assignees, labels, and dates.
              </li>
<li className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-md bg-white/5 border border-white/10">
<svg className="lucide lucide-check w-4 h-4 text-teal-300" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
                Smart filters for sprints, teams, and goals.
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
<div className="rounded-lg bg-white/5 border border-white/10 p-3 hover:bg-white/10 transition">
<p className="text-sm">Batch actions on tasks</p>
</div>
<div className="rounded-lg bg-white/5 border border-white/10 p-3 hover:bg-white/10 transition">
<p className="text-sm">Refine “My Day” suggestions</p>
</div>
<div className="rounded-lg bg-white/5 border border-white/10 p-3 hover:bg-white/10 transition">
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
<div className="rounded-lg bg-white/5 border border-white/10 p-3 hover:bg-white/10 transition">
<p className="text-sm">Dependencies v1</p>
</div>
<div className="rounded-lg bg-white/5 border border-white/10 p-3 hover:bg-white/10 transition">
<p className="text-sm">Notifications center</p>
</div>
<div className="rounded-lg bg-white/5 border border-white/10 p-3 hover:bg-white/10 transition">
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
<div className="rounded-lg bg-white/5 border border-white/10 p-3 hover:bg-white/10 transition">
<p className="text-sm">Mobile onboarding</p>
</div>
</div>
<div className="h-px bg-white/10 my-4"></div>
<div className="flex items-center justify-between">
<p className="text-xs text-gray-300">SLA</p>
<p className="text-xs"><span className="text-gray-100">98%</span> last 30d</p>
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
<svg className="lucide lucide-wand-2 w-5 h-5" data-lucide="wand-2" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path><path d="M11 3H9"></path></svg>
</span>
<div>
<p className="text-sm">Automation suggestion</p>
<p className="text-xs text-gray-400">Auto‑assign tasks with “bug” label to QA.</p>
</div>
<button className="ml-auto text-xs px-3 py-1.5 rounded-md bg-white/5 border border-white/10 hover:bg-white/10" type="button">Apply</button>
</div>
</div>
</div>
</div>

</div>
</div>
</section>

<section className="bg-gray-950 py-16" id="analytics">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-12 gap-6 items-start">
<div className="lg:col-span-5">
<p className="text-sm uppercase tracking-wider text-blue-300/90">Analytics</p>
<h2 className="mt-2 text-3xl lg:text-4xl tracking-tight" style={{fontFamily: '\'SF Pro Display\', -apple-system, BlinkMacSystemFont, \'SF Pro Text\', Segoe UI, Roboto, Helvetica, Arial, sans-serif', fontWeight: '600'}}>Insight at a glance</h2>
<p className="mt-3 text-gray-300">Throughput, cycle time, and forecasts—live, accurate, and effortless.</p>
</div>
<div className="lg:col-span-7 rounded-2xl border border-white/10 bg-gradient-to-b from-gray-950 to-black p-5">
<div className="flex items-center justify-between">
<div>
<p className="text-sm">Throughput</p>
<p className="text-xs text-gray-400">Tasks completed per day</p>
</div>
<div className="inline-flex items-center gap-2 text-xs px-2 py-1 rounded-md bg-white/5 border border-white/10">
<svg className="lucide lucide-trending-up w-4 h-4 text-emerald-300" data-lucide="trending-up" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<span className="text-emerald-300">+12%</span>
</div>
</div>
<div className="mt-3">

<div className="rounded-lg border border-white/10 bg-white/5 p-3">
<div className="relative w-full h-64">
<div className="w-full h-full">
<canvas id="mainChart"></canvas>
</div>
</div>
</div>
</div>
<div className="mt-4 grid grid-cols-2 gap-3">
<div className="rounded-lg border border-white/10 bg-white/5 p-3">
<p className="text-xs text-gray-400">Median cycle time</p>
<p className="text-lg mt-1">1.9 days</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-3">
<p className="text-xs text-gray-400">On‑time delivery</p>
<p className="text-lg mt-1">96%</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16" id="pricing">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between gap-6">
<div>
<p className="text-sm uppercase tracking-wider text-blue-300/90">Pricing</p>
<h2 className="mt-2 text-3xl lg:text-4xl tracking-tight" style={{fontFamily: '\'SF Pro Display\', -apple-system, BlinkMacSystemFont, \'SF Pro Text\', Segoe UI, Roboto, Helvetica, Arial, sans-serif', fontWeight: '600'}}>Simple. Fair.</h2>
</div>
</div>
<div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="rounded-2xl border border-white/10 bg-gradient-to-b from-gray-950 to-black p-6">
<div className="flex items-center justify-between">
<h3 className="text-lg tracking-tight">Starter</h3>
<span className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10">For individuals</span>
</div>
<p className="mt-1 text-sm text-gray-400">Tasks, boards, calendar</p>
<div className="mt-5 flex items-baseline gap-1">
<span className="text-3xl">$0</span><span className="text-sm text-gray-400">forever</span>
</div>
<ul className="mt-5 space-y-2 text-sm text-gray-300">
<li className="flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4 text-teal-300" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Unlimited tasks
              </li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4 text-teal-300" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                2 boards
              </li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm bg-white/5 text-gray-100 hover:bg-white/10 border border-white/10 transition-all" href="#try">Get started</a>
</div>

<div className="rounded-2xl border border-blue-400/30 bg-gradient-to-b from-gray-900/80 to-black p-6 relative">
<div className="absolute -top-3 right-4 px-2 py-1 rounded-full text-xs bg-blue-400 text-black">Best value</div>
<div className="flex items-center justify-between">
<h3 className="text-lg tracking-tight">Pro</h3>
<span className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10">For teams</span>
</div>
<p className="mt-1 text-sm text-gray-300">Everything in Starter plus advanced reports and automations.</p>
<div className="mt-5 flex items-baseline gap-1">
<span className="text-3xl">$12</span><span className="text-sm text-gray-400">/user/mo</span>
</div>
<ul className="mt-5 space-y-2 text-sm text-gray-300">
<li className="flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4 text-teal-300" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Unlimited boards
              </li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4 text-teal-300" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Advanced analytics
              </li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4 text-teal-300" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Automations
              </li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm bg-blue-400 text-black hover:bg-blue-300 transition-all" href="#try">Try Pro</a>
</div>

<div className="rounded-2xl border border-white/10 bg-gradient-to-b from-gray-950 to-black p-6">
<div className="flex items-center justify-between">
<h3 className="text-lg tracking-tight">Enterprise</h3>
<span className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10">Security &amp; SSO</span>
</div>
<p className="mt-1 text-sm text-gray-400">Scale confidently with controls, SSO, and priority support.</p>
<div className="mt-5 flex items-baseline gap-1">
<span className="text-3xl">Custom</span>
</div>
<ul className="mt-5 space-y-2 text-sm text-gray-300">
<li className="flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4 text-teal-300" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                SSO, SCIM
              </li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4 text-teal-300" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Data export &amp; DLP
              </li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4 text-teal-300" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Audit logs &amp; retention
              </li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4 text-teal-300" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Priority support
              </li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm bg-white/5 text-gray-100 hover:bg-white/10 border border-white/10 transition-all" href="#try">Contact sales</a>
</div>
</div>
</div>
</section>

<section className="py-20 bg-gradient-to-b from-gray-950 to" id="try">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300">
<svg className="lucide lucide-sparkles w-3.5 h-3.5" data-lucide="sparkles" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v3"></path><path d="M12 18v3"></path><path d="M3 12h3"></path><path d="M18 12h3"></path><path d="M16.24 7.76 14.12 9.88"></path><path d="M9.88 14.12 7.76 16.24"></path><path d="M16.24 16.24 14.12 14.12"></path><path d="M9.88 9.88 7.76 7.76"></path></svg>
          Free 14‑day trial · No card needed
        </span>
<h2 className="mt-4 text-3xl sm:text-4xl tracking-tight" style={{fontFamily: '\'SF Pro Display\', -apple-system, BlinkMacSystemFont, \'SF Pro Text\', Segoe UI, Roboto, Helvetica, Arial, sans-serif', fontWeight: '600'}}>Get started with Clarity</h2>
<p className="mt-3 text-gray-300">Create your workspace in minutes. Invite your team when you’re ready.</p>
<form aria-label="Start free form" className="mt-8 max-w-xl mx-auto" onsubmit="return false">
<div className="flex flex-col sm:flex-row gap-3">
<label className="sr-only" htmlFor="email">Work email</label>
<input className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500" id="email" placeholder="you@company.com" required="" type="email"/>
<button className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-400 px-5 py-3 text-sm font-medium text-black transition hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500" id="try-submit" type="submit">
              Try free
              <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
<p className="mt-3 text-xs text-gray-500" id="try-help">By continuing, you agree to our <a className="underline hover:text-gray-300" href="#">Terms</a> and <a className="underline hover:text-gray-300" href="#">Privacy</a>.</p>
<p className="mt-3 hidden text-sm text-emerald-300" id="try-success">Thanks! Check your inbox for a verification link.</p>
</form>
<div className="mt-8 flex items-center justify-center gap-6 opacity-75">
<img alt="Apple" className="h-5 w-5 invert opacity-70" src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/apple.svg"/>
<img alt="iCloud" className="h-5 w-5 invert opacity-70" src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/icloud.svg"/>
<img alt="Safari" className="h-5 w-5 invert opacity-70" src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/safari.svg"/>
<img alt="App Store" className="h-5 w-5 invert opacity-70" src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/appstore.svg"/>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-black">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
<a className="inline-flex items-center gap-2" href="#overview">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-[inset_0_0_0_2px_rgba(255,255,255,0.06)]">
<svg aria-hidden="true" className="w-[18px] h-[18px]" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12h18"></path>
<path d="M3 6h18"></path>
<path d="M3 18h18"></path>
</svg>
</span>
<span className="text-lg tracking-tight" style={{fontFamily: '\'SF Pro Display\', -apple-system, BlinkMacSystemFont, \'SF Pro Text\', Segoe UI, Roboto, Helvetica, Arial, sans-serif'}}>Clarity</span>
</a>
<nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-400">
<a className="hover:text-gray-200" href="#features">Features</a>
<a className="hover:text-gray-200" href="#product">Product</a>
<a className="hover:text-gray-200" href="#analytics">Analytics</a>
<a className="hover:text-gray-200" href="#pricing">Pricing</a>
<a className="hover:text-gray-200" href="#try">Try free</a>
</nav>
</div>
<div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-gray-500">
<p>© <span id="year"></span> Clarity, Inc. All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="hover:text-gray-300" href="#">Privacy</a>
<a className="hover:text-gray-300" href="#">Terms</a>
<a className="hover:text-gray-300" href="#">Status</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
