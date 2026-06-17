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



    // Utils
    const $ = (sel, ctx = document) => ctx.querySelector(sel);
    const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

    // Current year
    $('#year').textContent = new Date().getFullYear();

    // Lucide icons
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }

    // Scroll progress
    const progressBar = $('#scroll-progress');
    const onScroll = () => {
      const sTop = window.scrollY || document.documentElement.scrollTop;
      const docH = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const pct = Math.min(100, Math.max(0, (sTop / docH) * 100));
      progressBar.style.width = pct + '%';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Mobile nav
    const navToggle = $('#nav-toggle');
    const mobilePanel = $('#mobile-panel');
    const overlay = mobilePanel.querySelector('[data-close-overlay]');
    const [iconOpen, iconClose] = navToggle.querySelectorAll('svg');
    const setMobile = (open) => {
      navToggle.setAttribute('aria-expanded', open);
      mobilePanel.classList.toggle('pointer-events-none', !open);
      mobilePanel.classList.toggle('opacity-0', !open);
      iconOpen.classList.toggle('hidden', open);
      iconClose.classList.toggle('hidden', !open);
    };
    navToggle.addEventListener('click', () => setMobile(navToggle.getAttribute('aria-expanded') !== 'true'));
    overlay.addEventListener('click', () => setMobile(false));
    $$('[data-mobile-link]').forEach(a => a.addEventListener('click', () => setMobile(false)));

    // Scroll spy for desktop nav
    const sections = ['overview', 'features', 'product', 'analytics', 'pricing', 'try']
      .map(id => document.getElementById(id))
      .filter(Boolean);
    const navLinks = $$('[data-nav-link]');
    const spy = () => {
      const pos = window.scrollY + 100;
      let activeId = sections[0]?.id;
      for (const sec of sections) {
        if (sec.offsetTop <= pos) activeId = sec.id;
      }
      navLinks.forEach(link => {
        const isActive = link.getAttribute('href') === '#' + activeId;
        link.classList.toggle('text-white', isActive);
        link.classList.toggle('text-gray-300', !isActive);
      });
    };
    window.addEventListener('scroll', spy, { passive: true });
    window.addEventListener('resize', spy);
    spy();

    // Checklist interactions
    const list = $('#task-list');
    const counter = $('#task-counter');

    function updateCounter() {
      const items = $$('[data-task]', list);
      const done = items.filter(item => item.querySelector('[data-checkbox]').getAttribute('aria-checked') === 'true').length;
      counter.textContent = done + '/' + items.length + ' done';
    }

    function toggleTask(btn) {
      const checked = btn.getAttribute('aria-checked') === 'true';
      btn.setAttribute('aria-checked', String(!checked));
      const icon = btn.querySelector('svg');
      icon.classList.toggle('opacity-0', checked);
      const row = btn.closest('[data-task]');
      row.classList.toggle('ring-1', !checked);
      row.classList.toggle('ring-emerald-400/30', !checked);
      row.classList.toggle('bg-emerald-400/5', !checked);
      row.classList.toggle('opacity-60', !checked);
      updateCounter();
    }

    list.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-checkbox]');
      if (btn) {
        toggleTask(btn);
      }
    });

    $('#clear-completed').addEventListener('click', () => {
      $$('[data-task]', list).forEach(item => {
        const cb = item.querySelector('[data-checkbox]');
        if (cb.getAttribute('aria-checked') === 'true') item.remove();
      });
      updateCounter();
    });

    $('#add-quick').addEventListener('click', () => {
      const node = document.createElement('div');
      node.className = 'flex items-start gap-3 rounded-lg bg-white/5 border border-white/10 px-3 py-2 will-change-transform';
      node.setAttribute('data-task', '');
      node.innerHTML = `
        <button type="button" class="relative mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-md bg-black/40 border border-white/15 hover:border-white/25 transition" data-checkbox aria-checked="false" aria-label="Toggle task">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-lucide="check" class="lucide lucide-check w-3.5 h-3.5 opacity-0 transition"><path d="M20 6 9 17l-5-5"></path></svg>
        </button>
        <div class="min-w-0">
          <p class="text-sm leading-snug">New quick task</p>
          <p class="text-xs text-gray-400">Added just now</p>
        </div>
      `;
      list.appendChild(node);
      if (window.lucide && typeof window.lucide.createIcons === 'function') window.lucide.createIcons({ icons: { check: window.lucide.icons.check } });
      node.animate([{ transform: 'translateY(6px)', opacity: 0 }, { transform: 'translateY(0)', opacity: 1 }], { duration: 180, easing: 'ease-out' });
      updateCounter();
    });

    updateCounter();

    // Signup form
    const form = $('#signup-form');
    const email = $('#email');
    const success = $('#signup-success');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!email.value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        email.focus();
        email.classList.add('ring-2','ring-amber-400');
        setTimeout(() => email.classList.remove('ring-2','ring-amber-400'), 1200);
        return;
      }
      success.classList.remove('hidden');
      form.reset();
      success.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 200 });
    });

    // Charts
    const makeGradient = (ctx, from, to, alpha = [0.4, 0]) => {
      const g = ctx.createLinearGradient(0, 0, 0, 180);
      g.addColorStop(0, `rgba(${from}, ${alpha[0]})`);
      g.addColorStop(1, `rgba(${to}, ${alpha[1]})`);
      return g;
    };

    const colors = {
      cyan: '56,189,248',
      indigo: '129,140,248',
      fuchsia: '232,121,249',
      emerald: '52,211,153'
    };

    // Sparkline
    const sparkEl = document.getElementById('spark');
    if (sparkEl) {
      const sctx = sparkEl.getContext('2d');
      new Chart(sparkEl, {
        type: 'line',
        data: {
          labels: Array.from({ length: 24 }, (_, i) => i + 1),
          datasets: [{
            data: Array.from({ length: 24 }, () => 250 + Math.round(Math.random() * 160 - 80)),
            borderColor: `rgba(${colors.cyan}, 0.9)`,
            backgroundColor: makeGradient(sctx, colors.cyan, colors.indigo, [0.25, 0]),
            tension: 0.35,
            fill: true,
            pointRadius: 0,
            borderWidth: 1.6
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false }, tooltip: { enabled: false } },
          scales: { x: { display: false }, y: { display: false } },
          elements: { line: { borderCapStyle: 'round' } }
        }
      });
    }

    // Mini chart
    const miniEl = document.getElementById('miniChart');
    if (miniEl) {
      const mctx = miniEl.getContext('2d');
      new Chart(miniEl, {
        type: 'bar',
        data: {
          labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
          datasets: [{
            data: [72, 78, 80, 81, 85, 89, 92],
            borderRadius: 6,
            backgroundColor: (ctx) => {
              const { chartArea } = ctx.chart;
              if (!chartArea) return `rgba(${colors.indigo}, 0.35)`;
              return makeGradient(mctx, colors.indigo, colors.fuchsia, [0.35, 0.05]);
            }
          }]
 },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false }, tooltip: { intersect: false, mode: 'index' } },
          scales: {
            x: { grid: { display: false }, ticks: { color: '#9ca3af', font: { size: 10 } } },
            y: { grid: { color: 'rgba(255,255,255,0.06)' }, ticks: { color: '#9ca3af', font: { size: 10 } }, suggestedMin: 60, suggestedMax: 100 }
          }
        }
      });
    }

    // Main chart
    const mainEl = document.getElementById('mainChart');
    if (mainEl) {
      const ctx = mainEl.getContext('2d');
      const days = Array.from({ length: 14 }, (_, i) => `Day ${i + 1}`);
      const series = Array.from({ length: 14 }, () => 120 + Math.round(Math.random() * 80));
      new Chart(mainEl, {
        type: 'line',
        data: {
          labels: days,
          datasets: [{
            label: 'AI sentences',
            data: series,
            borderColor: `rgba(${colors.cyan}, 0.9)`,
            backgroundColor: makeGradient(ctx, colors.cyan, colors.indigo, [0.2, 0]),
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
              backgroundColor: 'rgba(17,24,39,0.9)',
              titleColor: '#e5e7eb',
              bodyColor: '#d1d5db',
              displayColors: false
            }
          },
          scales: {
            x: { grid: { display: false }, ticks: { color: '#9ca3af' } },
            y: { grid: { color: 'rgba(255,255,255,0.06)' }, ticks: { color: '#9ca3af' } }
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
      <div className="aura-background-component fixed top-0 w-full h-screen -z-10"><div className="spline-container absolute top-0 left-0 w-full h-full -z-10"><iframe frameborder="0" height="100%" src="https://my.spline.design/glowingplanetparticles-nhVHji30IRoa5HBGe8yeDiTs" width="100%"></iframe></div></div>

<div className="fixed top-0 left-0 h-[2px] bg-gradient-to-r w-0 z-[60] from-indigo-400 via-purple-400 to-fuchsia-400" id="scroll-progress" style={{width: '0%'}}></div>

<div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.45),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(168,85,247,0.35),transparent_60%)]"></div>
<div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[length:48px_1px]"></div>
<div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0,rgba(255,255,255,0.04)_1px,transparent_0)] bg-[length:1px_48px]"></div>
</div>

<header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md border-b transition-transform duration-300 will-change-transform bg-black/70 border-white/5" id="site-header">
<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16">
<div className="h-full flex items-center justify-between">

<a className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md" href="#overview">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 shadow-[inset_0_0_0_2px_rgba(255,255,255,0.06)] to-purple-600">
<svg aria-hidden="true" className="w-[18px] h-[18px]" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12c4-8 14-8 18 0"></path><path d="M3 12c4 8 14 8 18 0"></path>
</svg>
</span>
<span className="text-lg tracking-tight font-manrope" style={{fontFamily: '"Plus Jakarta Sans", Inter, sans-serif'}}>Thetawave</span>
</a>

<div className="hidden md:flex gap-1 border rounded-full pr-2 pl-2 items-center border-white/10">
<a className="px-3 py-2 text-sm transition font-manrope hover:text-white text-neutral-300 text-gray-300" data-nav-link="" href="#features" style={{}}>Features</a>
<a className="px-3 py-2 text-sm transition font-manrope text-neutral-300 hover:text-white text-gray-300" data-nav-link="" href="#product" style={{}}>Studio</a>
<a className="px-3 py-2 text-sm transition font-manrope text-neutral-300 hover:text-white text-gray-300" data-nav-link="" href="#analytics" style={{}}>Analytics</a>
<a className="px-3 py-2 text-sm transition font-manrope text-neutral-300 hover:text-white text-gray-300" data-nav-link="" href="#pricing" style={{}}>Pricing</a>
</div>

<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm font-manrope rounded-full pt-2 pr-4 pb-2 pl-4 hover:bg-neutral-200 text-black bg-neutral-100" href="#try" style={{}}>
            Sign in
          </a>
<button aria-controls="mobile-panel" aria-expanded="false" className="md:hidden p-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:bg-neutral-900" id="nav-toggle">
<svg aria-hidden="true" className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
<svg aria-hidden="true" className="lucide lucide-x w-5 h-5 hidden" data-lucide="x" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
</div>
</nav>

<div className="fixed inset-0 z-40 opacity-0 pointer-events-none" id="mobile-panel">
<div className="absolute inset-0 bg-black/60" data-close-overlay=""></div>
<div className="absolute inset-x-0 top-0 mx-4 mt-20 rounded-2xl border backdrop-blur-xl p-4 shadow-2xl border-white/10 bg-black/90">
<div className="flex flex-col">
<a className="px-3 py-2 rounded-md text-sm font-manrope text-neutral-200 hover:bg-white/5" data-mobile-link="" href="#features" style={{}}>Features</a>
<a className="px-3 py-2 rounded-md text-sm font-manrope text-neutral-200 hover:bg-white/5" data-mobile-link="" href="#product" style={{}}>Studio</a>
<a className="px-3 py-2 rounded-md text-sm font-manrope text-neutral-200 hover:bg-white/5" data-mobile-link="" href="#analytics" style={{}}>Analytics</a>
<a className="px-3 py-2 rounded-md text-sm font-manrope text-neutral-200 hover:bg-white/5" data-mobile-link="" href="#pricing" style={{}}>Pricing</a>
</div>
</div>
</div>
</header>

<section className="relative overflow-hidden sm:pt-28 pt-24 pb-14" id="overview">
<div className="relative-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pl-4">
<div className="flex flex-col gap-10 lg:gap-16 text-center items-center">

<div className="max-w-3xl mr-auto ml-auto">
<span className="text-xs uppercase tracking-wider font-manrope text-indigo-300/90">New: Live citations &amp; memory</span>
<h1 className="sm:text-5xl lg:text-6xl leading-tight text-4xl tracking-tight mt-3 font-montserrat font-medium" style={{fontFamily: '"Plus Jakarta Sans", Inter, sans-serif', fontWeight: '600'}}>
            Write with your AI core.
          </h1>
<p className="mt-6 text-lg max-w-xl mx-auto font-manrope text-neutral-300">
            Thetawave synthesizes research, cites sources, and evolves documents with you—fast, accurate, and verifiable.
          </p>
<div className="flex flex-col sm:flex-row gap-3 mt-8 justify-center">
<div className="inline-block">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&amp;display=swap" rel="stylesheet"/>
<style>
    .codepen-button{display:block;cursor:pointer;color:#fff;position:relative;text-decoration:none;font-weight:600;border-radius:100px;overflow:hidden;padding:2px;isolation:isolate}.codepen-button::before{content:"";position:absolute;inset:0;width:400%;height:100%;background:linear-gradient(115deg,#d1d1d1,#02367b,#a7bfde);background-size:25% 100%;animation:border-shift .75s linear infinite}@keyframes border-shift{to{transform:translateX(-25%)}}.codepen-button span{position:relative;display:block;padding:1rem 1.5rem;font-size:1.1rem;background:#02367b;border-radius:100px;height:100%}
  </style>
<a className="codepen-button" href="#">
<span className="">Request Access</span>
</a>
</div>
<a className="inline-flex items-center gap-2 transition-all border rounded-full px-5 py-3 backdrop-blur-lg font-manrope hover:bg-white/10 text-neutral-100 bg-white/5 border-white/10" href="#product">
              Watch demo
              <svg className="lucide lucide-play w-4 h-4" data-lucide="play" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</a>
</div>
<div className="mt-8 flex items-center gap-6 justify-center">
<div className="flex -space-x-2">
<img alt="" className="w-9 h-9 rounded-full border-2 object-cover border-black" src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?w=160&amp;q=80" style={{}}/>
<img alt="" className="w-9 h-9 rounded-full border-2 object-cover border-black" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ae6c02d5-9dcf-450a-b6e9-29b347a53873_320w.jpg" style={{}}/>
<img alt="" className="w-9 h-9 object-cover border-black border-2 rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b6453140-0e66-40b1-89b8-06321fdcdc09_320w.jpg" style={{outline: 'rgb(245, 158, 11) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}/>
<div className="w-9 h-9 rounded-full border-2 flex items-center justify-center text-xs font-manrope border-black bg-indigo-400 text-black">
                10k+
              </div>
</div>
<div className="">
<p className="text-sm font-manrope text-neutral-100" style={{}}>10,000+ documents synthesized</p>
<p className="text-sm font-manrope text-neutral-400" style={{}}>Across research, product, and policy</p>
</div>
</div>
</div><div className="relative w-full max-w-4xl mx-auto mt-6">
<div className="relative overflow-hidden border rounded-2xl shadow-2xl backdrop-blur-lg bg-neutral-900/50 border-white/10">

<div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-black/40">
<div className="flex items-center gap-2">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-lg ring-1 bg-white/5 ring-white/10">
<svg className="lucide lucide-file-text w-4.5 h-4.5" data-lucide="file-text" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
</span>
<p className="text-sm font-manrope" style={{}}>Quantum Research Brief</p>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs ring-1 font-manrope bg-blue-400/10 text-blue-300 ring-blue-400/20">
<svg className="lucide lucide-shield-check w-3.5 h-3.5" data-lucide="shield-check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
                  Cited
                </span>
</div>
</div>

<div className="grid md:grid-cols-2 gap-0">

<div className="border-r pt-4 pr-4 pb-4 pl-4 border-white/10">
<div className="grid grid-cols-3 gap-3">

<div className="">
<div className="flex items-center justify-between mb-2">
<p className="text-xs font-manrope text-neutral-400">Outline</p>
<span className="text-[10px] px-1.5 py-0.5 rounded border font-manrope bg-white/5 border-white/10">5</span>
</div>
<div aria-label="Outline preview" className="space-y-2">
<div className="rounded-lg border p-3 bg-white/5 border-white/10">
<p className="text-sm font-manrope" style={{}}>Abstract</p>
</div>
<div className="rounded-lg border p-3 bg-white/5 border-white/10">
<p className="text-sm font-manrope" style={{}}>Background</p>
</div>
<div className="rounded-lg border p-3 bg-white/5 border-white/10">
<p className="text-sm font-manrope" style={{}}>Method</p>
</div>
<div className="rounded-lg border p-3 bg-white/5 border-white/10">
<p className="text-sm font-manrope" style={{}}>Findings</p>
</div>
<div className="rounded-lg border p-3 bg-white/5 border-white/10">
<p className="text-sm font-manrope" style={{}}>References</p>
</div>
</div>
</div>

<div className="col-span-2">
<div className="flex items-center justify-between mb-2">
<p className="text-xs font-manrope text-neutral-400">Document</p>
<span className="text-[10px] px-1.5 py-0.5 rounded border font-manrope bg-white/5 border-white/10">Draft</span>
</div>
<div className="rounded-lg border p-3 space-y-2 bg-white/5 border-white/10">
<p className="text-sm font-manrope" style={{}}>
                        We propose a <span className="px-1 rounded ring-1 font-manrope bg-indigo-400/10 text-indigo-300 ring-indigo-400/20" style={{}}>retrieval‑augmented</span> approach that reduces hallucination by grounding claims in peer‑reviewed sources.
                      </p>
<p className="text-sm font-manrope" style={{}}>
                        The system <span className="px-1 rounded ring-1 font-manrope bg-fuchsia-400/10 text-fuchsia-300 ring-fuchsia-400/20" style={{}}>adapts prompts</span> to domain context and tracks provenance for every sentence via live citations.
                      </p>
<div className="text-xs pt-2 border-t text-neutral-400 border-white/10">
<span className="inline-flex items-center gap-1 font-manrope">
<svg className="lucide lucide-link w-3.5 h-3.5" data-lucide="link" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                          Citations: arXiv:2308.XXXX · DOI:10.1145/XXXX
                        </span>
</div>
</div>
</div>
</div>

<div className="mt-4 rounded-lg border p-3 border-white/10">
<div className="flex items-center justify-between">
<p className="text-xs font-manrope text-neutral-300">7‑day citation coverage</p>
<span className="text-xs font-manrope text-neutral-400"><span className="font-manrope text-neutral-100">+12%</span> week</span>
</div>
<div className="mt-2 h-16 w-full">
<div className="w-full h-full">
<canvas className="" height="128" id="miniChart" style={{display: 'block', boxSizing: 'border-box', height: '64px', width: '388px'}} width="776"></canvas>
</div>
</div>
</div>
</div>

<div className="p-4">
<div className="flex items-center justify-between">
<p className="text-sm font-manrope" style={{}}>AI Copilot</p>
<span className="text-xs inline-flex items-center gap-1 font-manrope text-neutral-400">
<svg className="lucide lucide-cpu w-3.5 h-3.5" data-lucide="cpu" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
                    Model: v3.1
                  </span>
</div>
<div className="mt-3 rounded-lg border p-3 bg-white/5 border-white/10">
<div className="flex items-start gap-2">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-md ring-1 bg-white/5 ring-white/10">
<svg className="lucide lucide-bot w-4 h-4 text-cyan-300" data-lucide="bot" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</span>
<div className="min-w-0">
<p className="text-sm font-manrope" style={{}}>Added 3 citations and condensed Background by 18%.</p>
<p className="text-xs mt-1 font-manrope text-neutral-400">Ctrl ⌘ K to refine section</p>
</div>
</div>
<div className="mt-3 flex gap-2">
<button className="text-xs px-3 py-1.5 rounded-md font-manrope bg-indigo-400 text-black hover:bg-indigo-300" type="button">Apply</button>
<button className="text-xs px-3 py-1.5 rounded-md border font-manrope bg-white/5 border-white/10 hover:bg-white/10" type="button">View diffs</button>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<p className="text-sm font-manrope" style={{}}>Review checklist</p>
<span className="text-xs font-manrope text-neutral-400" id="task-counter">0/4 done</span>
</div>
<div className="mt-3 space-y-2" id="task-list">
<div className="flex items-start gap-3 rounded-lg border px-3 py-2 bg-white/5 border-white/10" data-task="">
<button aria-checked="false" aria-label="Toggle task" className="relative mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-md border transition bg-black/40 border-white/15 hover:border-white/25" data-checkbox="" type="button">
<svg className="lucide lucide-check w-3.5 h-3.5 opacity-0 transition" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</button>
<div className="min-w-0">
<p className="text-sm leading-snug font-manrope" style={{}}>Verify citations resolve (200 OK)</p>
<p className="text-xs font-manrope text-neutral-400">References · Today</p>
</div>
<span className="ml-auto text-[10px] px-2 py-0.5 rounded ring-1 font-manrope bg-indigo-400/10 text-indigo-300 ring-indigo-400/20">P2</span>
</div>
<div className="flex items-start gap-3 rounded-lg border px-3 py-2 bg-white/5 border-white/10" data-task="">
<button aria-checked="false" aria-label="Toggle task" className="relative mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-md border transition bg-black/40 border-white/15 hover:border-white/25" data-checkbox="" type="button">
<svg className="lucide lucide-check w-3.5 h-3.5 opacity-0 transition" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</button>
<div className="min-w-0">
<p className="text-sm leading-snug font-manrope" style={{}}>Resolve ambiguous claims</p>
<p className="text-xs font-manrope text-neutral-400">Editing · Today</p>
</div>
</div>
<div className="flex items-start gap-3 rounded-lg border px-3 py-2 bg-white/5 border-white/10" data-task="">
<button aria-checked="false" aria-label="Toggle task" className="relative mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-md border transition bg-black/40 border-white/15 hover:border-white/25" data-checkbox="" type="button">
<svg className="lucide lucide-check w-3.5 h-3.5 opacity-0 transition" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</button>
<div className="min-w-0">
<p className="text-sm leading-snug font-manrope" style={{}}>Run fact‑match on Findings</p>
<p className="text-xs font-manrope text-neutral-400">Guardrails · 2:00 PM</p>
</div>
<span className="ml-auto text-[10px] px-2 py-0.5 rounded ring-1 font-manrope bg-blue-400/10 text-blue-300 ring-blue-400/20">Ready</span>
</div>
<div className="flex items-start gap-3 rounded-lg border px-3 py-2 bg-white/5 border-white/10" data-task="">
<button aria-checked="false" aria-label="Toggle task" className="relative mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-md border transition bg-black/40 border-white/15 hover:border-white/25" data-checkbox="" type="button">
<svg className="lucide lucide-check w-3.5 h-3.5 opacity-0 transition" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</button>
<div className="min-w-0">
<p className="text-sm leading-snug font-manrope" style={{}}>Generate executive abstract</p>
<p className="text-xs font-manrope text-neutral-400">Export · Tomorrow</p>
</div>
<span className="ml-auto text-[10px] px-2 py-0.5 rounded ring-1 font-manrope bg-fuchsia-400/10 text-fuchsia-300 ring-fuchsia-400/20">Gen</span>
</div>
</div>

</div>
</div>
</div>

</div>
</div>
</div>
</section>

<section className="py-16 bg-neutral-950" id="features">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between gap-6">
<div className="">
<p className="text-sm uppercase tracking-wider font-manrope text-indigo-300/90">Features</p>
<h2 className="mt-2 text-3xl lg:text-4xl tracking-tight font-montserrat font-medium text-white" style={{fontFamily: '"Plus Jakarta Sans", Inter, sans-serif', fontWeight: '600'}}>
            Everything you need to author with confidence
          </h2>
</div>
<a className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm border transition-all hover:scale-[1.02] font-manrope bg-white/5 text-neutral-100 hover:bg-white/10 border-white/10" href="#product" style={{}}>
          Explore studio
          <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="group rounded-xl border p-5 transition-colors border-white/10 bg-black/40 hover:bg-black/50">
<div className="w-10 h-10 rounded-lg flex items-center justify-center bg-neutral-800">
<svg className="lucide lucide-scan-text w-5 h-5 text-gray-300" data-lucide="scan-text" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><path d="M7 8h8"></path><path d="M7 12h10"></path><path d="M7 16h6"></path></svg>
</div>
<h3 className="mt-4 text-lg tracking-tight font-manrope">Live citations</h3>
<p className="mt-2 text-sm font-manrope text-neutral-400" style={{}}>
            Ground every claim with verifiable references and auto‑linking.
          </p>
</div>
<div className="group rounded-xl border p-5 transition-colors border-white/10 bg-black/40 hover:bg-black/50">
<div className="w-10 h-10 rounded-lg flex items-center justify-center bg-neutral-800">
<svg className="lucide lucide-brain-circuit w-5 h-5 text-gray-300" data-lucide="brain-circuit" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M12 13h4"></path><path d="M12 18h6a2 2 0 0 1 2 2v1"></path><path d="M12 8h8"></path><path d="M16 8V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></svg>
</div>
<h3 className="mt-4 text-lg tracking-tight font-manrope">Adaptive memory</h3>
<p className="mt-2 text-sm font-manrope text-neutral-400" style={{}}>
            Retrieval tuned to your corpus, keeping context coherent.
          </p>
</div>
<div className="group rounded-xl border p-5 transition-colors border-white/10 bg-black/40 hover:bg-black/50">
<div className="w-10 h-10 rounded-lg flex items-center justify-center bg-neutral-800">
<svg className="lucide lucide-wand-2 w-5 h-5 text-gray-300" data-lucide="wand-2" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path><path d="M11 3H9"></path></svg>
</div>
<h3 className="mt-4 text-lg tracking-tight font-manrope">Structured generation</h3>
<p className="mt-2 text-sm font-manrope text-neutral-400" style={{}}>
            Templates that output consistent sections, summaries, and abstracts.
          </p>
</div>
<div className="group rounded-xl border p-5 transition-colors border-white/10 bg-black/40 hover:bg-black/50">
<div className="w-10 h-10 rounded-lg flex items-center justify-center bg-neutral-800">
<svg className="lucide lucide-git-branch w-5 h-5 text-gray-300" data-lucide="git-branch" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><line x1="6" x2="6" y1="3" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>
</div>
<h3 className="mt-4 text-lg tracking-tight font-manrope">Version graph</h3>
<p className="mt-2 text-sm font-manrope text-neutral-400" style={{}}>
            Compare branches, view diffs, and merge edits safely.
          </p>
</div>
</div>
</div>
</section>

<section className="py-16" id="product">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-12 gap-6 items-start">
<div className="lg:col-span-5">
<h2 className="text-3xl lg:text-4xl tracking-tight font-montserrat font-medium" style={{fontFamily: '"Plus Jakarta Sans", Inter, sans-serif', fontWeight: '600'}}>
            Write at lightspeed
          </h2>
<p className="mt-3 font-manrope text-neutral-300">
            A focused editor, an AI copilot that cites, and controls that keep your voice. Minimal noise—maximum signal.
          </p>
<ul className="mt-6 space-y-3 text-sm text-neutral-300">
<li className="flex items-start gap-3 font-manrope" style={{}}>
<span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-md border bg-white/5 border-white/10">
<svg className="lucide lucide-check w-4 h-4 text-cyan-300" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
              Keyboard‑first capture and inline refine.
            </li>
<li className="flex items-start gap-3 font-manrope" style={{}}>
<span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-md border bg-white/5 border-white/10">
<svg className="lucide lucide-check w-4 h-4 text-cyan-300" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
              Flexible metadata: authors, labels, sections.
            </li>
<li className="flex items-start gap-3 font-manrope" style={{}}>
<span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-md border bg-white/5 border-white/10">
<svg className="lucide lucide-check w-4 h-4 text-cyan-300" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
              Smart filters for drafts, reviews, and exports.
            </li>
</ul>
</div>
<div className="lg:col-span-7 rounded-2xl border bg-gradient-to-b overflow-hidden border-white/10 from-neutral-950 to-black">
<div className="p-5 grid md:grid-cols-3 gap-4">

<div className="">
<div className="flex items-center justify-between mb-3">
<p className="text-sm font-manrope" style={{}}>Library</p>
<span className="text-[10px] px-2 py-0.5 rounded border font-manrope bg-white/5 border-white/10">6</span>
</div>
<div className="space-y-2">
<div className="rounded-lg border p-3 bg-white/5 border-white/10">
<p className="text-sm font-manrope" style={{}}>Neural Interfaces</p>
</div>
<div className="rounded-lg border p-3 bg-white/5 border-white/10">
<p className="text-sm font-manrope" style={{}}>Quantum Memo</p>
</div>
<div className="rounded-lg border p-3 bg-white/5 border-white/10">
<p className="text-sm font-manrope" style={{}}>Ethics Brief</p>
</div>
</div>
</div>
<div>
<div className="flex items-center justify-between mb-3">
<p className="text-sm font-manrope" style={{}}>Editor</p>
<span className="text-[10px] px-2 py-0.5 rounded border font-manrope bg-white/5 border-white/10">Active</span>
</div>
<div className="space-y-2">
<div className="rounded-lg border p-3 bg-white/5 border-white/10">
<p className="text-sm font-manrope" style={{}}>“Summarize the last section with sources.”</p>
</div>
<div className="rounded-lg border p-3 bg-white/5 border-white/10">
<p className="text-sm font-manrope" style={{}}>“Rewrite in a neutral tone.”</p>
</div>
<div className="rounded-lg border p-3 bg-white/5 border-white/10">
<p className="text-sm font-manrope" style={{}}>“Add a practical implications paragraph.”</p>
</div>
</div>
</div>
<div>
<div className="flex items-center justify-between mb-3">
<p className="text-sm font-manrope" style={{}}>Signals</p>
<span className="text-[10px] px-2 py-0.5 rounded border font-manrope bg-white/5 border-white/10">Live</span>
</div>
<div className="space-y-2">
<div className="rounded-lg border p-3 bg-white/5 border-white/10">
<p className="text-sm font-manrope" style={{}}>Hallucination guard: OK</p>
</div>
<div className="rounded-lg border p-3 bg-white/5 border-white/10">
<p className="text-sm font-manrope" style={{}}>Citations: 92% coverage</p>
</div>
<div className="rounded-lg border p-3 bg-white/5 border-white/10">
<p className="text-sm font-manrope" style={{}}>Style: Consistent</p>
</div>
</div>
<div className="h-px my-4 bg-white/10"></div>
<div className="flex items-center justify-between">
<p className="text-xs font-manrope text-neutral-300">Latency</p>
<p className="text-xs font-manrope"><span className="font-manrope text-neutral-100">310ms</span> median</p>
</div>
<div className="mt-2 h-16 w-full">
<div className="w-full h-full">
<canvas height="128" id="spark" style={{display: 'block', boxSizing: 'border-box', height: '64px', width: '190px'}} width="380"></canvas>
</div>
</div>
</div>
</div>
<div className="px-5 pb-5">
<div className="rounded-xl border p-4 border-white/10 bg-black/40">
<div className="flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg ring-1 bg-white/5 ring-white/10">
<svg className="lucide lucide-sparkle w-4.5 h-4.5" data-lucide="sparkle" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path></svg>
</span>
<div>
<p className="text-sm font-manrope" style={{}}>Guardrail suggestion</p>
<p className="text-xs font-manrope text-neutral-400">Flagging 1 sentence with weak evidence—suggest rewrite with source.</p>
</div>
<button className="ml-auto text-xs px-3 py-1.5 rounded-md border font-manrope bg-white/5 border-white/10 hover:bg-white/10" type="button">
                  Review
                </button>
</div>
</div>
</div>
</div>

</div>
</div>
</section>

<section className="py-16 bg-neutral-950" id="analytics">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-12 gap-6 items-start">
<div className="lg:col-span-5">
<p className="text-sm uppercase tracking-wider font-manrope text-indigo-300/90">Analytics</p>
<h2 className="mt-2 text-3xl lg:text-4xl tracking-tight font-montserrat font-medium" style={{fontFamily: '"Plus Jakarta Sans", Inter, sans-serif', fontWeight: '600'}}>
            Signal you can trust
          </h2>
<p className="mt-3 font-manrope text-neutral-300">
            Real‑time insight into AI contribution, latency, and citation coverage—without spreadsheets.
          </p>
</div>
<div className="lg:col-span-7 rounded-2xl border bg-gradient-to-b p-5 border-white/10 from-neutral-950 to-black">
<div className="flex items-center justify-between">
<div>
<p className="text-sm font-manrope" style={{}}>AI contribution</p>
<p className="text-xs font-manrope text-neutral-400">Sentences drafted per day</p>
</div>
<div className="inline-flex items-center gap-2 text-xs px-2 py-1 rounded-md border bg-white/5 border-white/10">
<svg className="lucide lucide-trending-up w-4 h-4 text-emerald-300" data-lucide="trending-up" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<span className="font-manrope text-blue-300">+15%</span>
</div>
</div>
<div className="mt-3">
<div className="rounded-lg border p-3 border-white/10 bg-white/5">
<div className="relative w-full h-64">
<div className="w-full h-full">
<canvas height="512" id="mainChart" style={{display: 'block', boxSizing: 'border-box', height: '256px', width: '576px'}} width="1153"></canvas>
</div>
</div>
</div>
</div>
<div className="mt-4 grid grid-cols-2 gap-3">
<div className="rounded-lg border p-3 border-white/10 bg-white/5">
<p className="text-xs font-manrope text-neutral-400">Median latency</p>
<p className="text-lg mt-1 font-manrope">310 ms</p>
</div>
<div className="rounded-lg border p-3 border-white/10 bg-white/5">
<p className="text-xs font-manrope text-neutral-400">Citation coverage</p>
<p className="text-lg mt-1 font-manrope">92%</p>
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
<p className="text-sm uppercase tracking-wider font-manrope text-indigo-300/90">Pricing</p>
<h2 className="mt-2 text-3xl lg:text-4xl tracking-tight font-montserrat font-medium" style={{fontFamily: '"Plus Jakarta Sans", Inter, sans-serif', fontWeight: '600'}}>
            Simple plans, future‑proof
          </h2>
</div>
</div>
<div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="rounded-2xl border bg-gradient-to-b p-6 border-white/10 from-neutral-950 to-black">
<div className="flex items-center justify-between">
<h3 className="text-lg tracking-tight font-manrope">Starter</h3>
<span className="text-xs px-2 py-1 rounded-full border font-manrope bg-white/5 border-white/10">For individuals</span>
</div>
<p className="mt-1 text-sm font-manrope text-neutral-400" style={{}}>Editor, citations, exports</p>
<div className="mt-5 flex items-baseline gap-1">
<span className="text-3xl font-montserrat font-medium" style={{}}>$0</span><span className="text-sm font-manrope text-neutral-400" style={{}}>forever</span>
</div>
<ul className="mt-5 space-y-2 text-sm text-neutral-300">
<li className="flex items-center gap-2 font-manrope" style={{}}>
<svg className="lucide lucide-check w-4 h-4 text-cyan-300" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Unlimited docs
            </li>
<li className="flex items-center gap-2 font-manrope" style={{}}>
<svg className="lucide lucide-check w-4 h-4 text-cyan-300" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Basic citations
            </li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm border transition-all font-manrope bg-white/5 text-neutral-100 hover:bg-white/10 border-white/10" href="#try" style={{}}>Get started</a>
</div>

<div className="rounded-2xl border bg-gradient-to-b p-6 relative border-indigo-400/30 from-neutral-900/80 to-black">
<div className="absolute -top-3 right-4 px-2 py-1 rounded-full text-xs font-manrope bg-indigo-400 text-black">Best value</div>
<div className="flex items-center justify-between">
<h3 className="text-lg tracking-tight font-manrope">Pro</h3>
<span className="text-xs px-2 py-1 rounded-full border font-manrope bg-white/5 border-white/10">For teams</span>
</div>
<p className="mt-1 text-sm font-manrope text-neutral-300" style={{}}>Everything in Starter plus guardrails, memory, and analytics.</p>
<div className="mt-5 flex items-baseline gap-1">
<span className="text-3xl font-montserrat font-medium" style={{}}>$16</span><span className="text-sm font-manrope text-neutral-400" style={{}}>/user/mo</span>
</div>
<ul className="mt-5 space-y-2 text-sm text-neutral-300">
<li className="flex items-center gap-2 font-manrope" style={{}}>
<svg className="lucide lucide-check w-4 h-4 text-cyan-300" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Advanced citations &amp; guardrails
            </li>
<li className="flex items-center gap-2 font-manrope" style={{}}>
<svg className="lucide lucide-check w-4 h-4 text-cyan-300" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Memory &amp; retrieval
            </li>
<li className="flex items-center gap-2 font-manrope" style={{}}>
<svg className="lucide lucide-check w-4 h-4 text-cyan-300" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Team analytics
            </li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm transition-all font-manrope bg-indigo-400 text-black hover:bg-indigo-300" href="#try" style={{}}>Try Pro</a>
</div>

<div className="rounded-2xl border bg-gradient-to-b p-6 border-white/10 from-neutral-950 to-black">
<div className="flex items-center justify-between">
<h3 className="text-lg tracking-tight font-manrope">Enterprise</h3>
<span className="text-xs px-2 py-1 rounded-full border font-manrope bg-white/5 border-white/10">Security &amp; SSO</span>
</div>
<p className="mt-1 text-sm font-manrope text-neutral-400" style={{}}>Scale with controls, SSO, private networking, and priority support.</p>
<div className="mt-5 flex items-baseline gap-1">
<span className="text-3xl font-montserrat font-medium" style={{}}>Custom</span>
</div>
<ul className="mt-5 space-y-2 text-sm text-neutral-300">
<li className="flex items-center gap-2 font-manrope" style={{}}>
<svg className="lucide lucide-check w-4 h-4 text-cyan-300" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              SSO, SCIM, DLP
            </li>
<li className="flex items-center gap-2 font-manrope" style={{}}>
<svg className="lucide lucide-check w-4 h-4 text-cyan-300" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Private deployments
            </li>
<li className="flex items-center gap-2 font-manrope" style={{}}>
<svg className="lucide lucide-check w-4 h-4text-cyan-300" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Priority support &amp; SLA
            </li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm border transition-all font-manrope bg-white/5 text-neutral-100 hover:bg-white/10 border-white/10" href="#try" style={{}}>Contact sales</a>
</div>
</div>
</div>
</section>

<section className="py-16 bg-neutral-950" id="try">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs border font-manrope bg-white/5 border-white/10 text-indigo-300">
<span className="inline-flex h-5 w-5 items-center justify-center rounded border bg-white/5 border-white/10">
<svg className="lucide lucide-sparkles w-3 h-3" data-lucide="sparkles" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</span>
        Start free — no card required
      </div>
<h3 className="mt-3 text-3xl tracking-tight font-montserrat font-medium" style={{fontFamily: '"Plus Jakarta Sans", Inter, sans-serif', fontWeight: '600'}}>
        Compose faster. Document better.
      </h3>
<p className="mt-2 font-manrope text-neutral-300">Create your account and ship your next brief with live citations and an AI copilot.</p>
<form className="mt-6 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3 max-w-xl mx-auto" id="signup-form" novalidate="">
<label className="sr-only font-manrope" htmlFor="email">Email address</label>
<input className="w-full rounded-xl border px-4 py-3 text-sm placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-black/60 border-white/10" id="email" name="email" placeholder="you@company.com" required="" type="email"/>
<button className="rounded-xl px-5 py-3 text-sm transition-all hover:scale-[1.02] font-manrope bg-indigo-400 text-black hover:bg-indigo-300" style={{}} type="submit">
          Create account
        </button>
</form>
<p className="mt-3 text-sm hidden font-manrope text-blue-300" id="signup-success" style={{}}>Success! Check your inbox to verify.</p>
<div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
<div className="rounded-lg border p-4 bg-black/40 border-white/10">
<p className="text-sm font-manrope text-neutral-400" style={{}}>Security</p>
<p className="text-sm mt-1 font-manrope" style={{}}>Data stays private. SSO/SCIM available on Enterprise.</p>
</div>
<div className="rounded-lg border p-4 bg-black/40 border-white/10">
<p className="text-sm font-manrope text-neutral-400" style={{}}>Backed by sources</p>
<p className="text-sm mt-1 font-manrope" style={{}}>Every claim traceable with live links.</p>
</div>
<div className="rounded-lg border p-4 bg-black/40 border-white/10">
<p className="text-sm font-manrope text-neutral-400" style={{}}>Portable</p>
<p className="text-sm mt-1 font-manrope" style={{}}>Export to PDF, DOCX, and Markdown.</p>
</div>
</div>
</div>
</section>

<footer className="border-t py-10 border-white/10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
<div className="flex items-center gap-3">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 shadow-[inset_0_0_0_2px_rgba(255,255,255,0.06)] to-purple-600">
<svg aria-hidden="true" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M3 12c4-8 14-8 18 0"></path><path d="M3 12c4 8 14 8 18 0"></path></svg>
</span>
<div>
<p className="text-sm font-medium font-manrope">Thetawave</p>
<p className="text-xs font-manrope text-neutral-400">Compose with an AI core</p>
</div>
</div>
<nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
<a className="font-manrope text-neutral-400 hover:text-white" href="#features" style={{}}>Features</a>
<a className="font-manrope text-neutral-400 hover:text-white" href="#product" style={{}}>Studio</a>
<a className="font-manrope text-neutral-400 hover:text-white" href="#analytics" style={{}}>Analytics</a>
<a className="font-manrope text-neutral-400 hover:text-white" href="#pricing" style={{}}>Pricing</a>
<a className="font-manrope text-neutral-400 hover:text-white" href="#try" style={{}}>Start</a>
</nav>
</div>
<div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<p className="text-xs text-neutral-500 font-manrope">© <span className="font-manrope" id="year">2025</span> Thetawave. All rights reserved.</p>
<div className="flex items-center gap-4 text-xs text-neutral-500">
<a className="font-manrope hover:text-neutral-300" href="#">Privacy</a>
<a className="font-manrope hover:text-neutral-300" href="#">Terms</a>
<a className="font-manrope hover:text-neutral-300" href="#">Security</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
