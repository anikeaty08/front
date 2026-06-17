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



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



      // Icons
      window.addEventListener('DOMContentLoaded', () => {
        if (window.lucide && window.lucide.createIcons) {
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }
      });

      // Scroll progress
      const progressEl = document.getElementById('scroll-progress');
      function setProgress() {
        const h = document.documentElement;
        const st = h.scrollTop || document.body.scrollTop;
        const sh = h.scrollHeight - h.clientHeight;
        progressEl.style.width = (sh ? (st / sh) * 100 : 0) + '%';
      }
      setProgress();
      window.addEventListener('scroll', setProgress, { passive: true });
      window.addEventListener('resize', setProgress);

      // Smooth scroll
      function smoothScrollTo(targetId) {
        const el = document.querySelector(targetId);
        if (!el) return;
        const headerH = header?.offsetHeight || 56;
        const top = el.getBoundingClientRect().top + window.pageYOffset - headerH + 6;
        window.scrollTo({ top, behavior: 'smooth' });
      }
      document.querySelectorAll('a[href^="#"]:not([data-mobile-link])').forEach((a) => {
        a.addEventListener('click', (e) => {
          const href = a.getAttribute('href');
          const target = href && document.querySelector(href);
          if (!href || !target) return;
          e.preventDefault();
          smoothScrollTo(href);
        });
      });

      // Scroll spy
      const sections = ['#overview', '#features', '#product', '#analytics', '#pricing'];
      const navLinks = Array.from(document.querySelectorAll('[data-nav-link]'));
      const mobileLinks = Array.from(document.querySelectorAll('[data-mobile-link]'));
      function setActive(href) {
        [...navLinks, ...mobileLinks].forEach((link) => {
          const isActive = link.getAttribute('href') === href;
          link.classList.toggle('text-white', isActive);
        });
      }
      const spy = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive('#' + entry.target.id);
        });
      }, { rootMargin: '-45% 0px -50% 0px', threshold: 0.01 });
      sections.forEach((id) => {
        const el = document.querySelector(id);
        if (el) spy.observe(el);
      });

      // Mobile panel
      const navToggle = document.getElementById('nav-toggle');
      const mobilePanel = document.getElementById('mobile-panel');
      const overlay = mobilePanel?.querySelector('[data-close-overlay]');
      const menuIcon = navToggle?.querySelector('[data-lucide="menu"]');
      const closeIcon = navToggle?.querySelector('[data-lucide="x"]');

      function setMobileOpen(open) {
        if (!mobilePanel) return;
        navToggle?.setAttribute('aria-expanded', String(open));
        document.body.style.overflow = open ? 'hidden' : '';
        mobilePanel.style.pointerEvents = open ? 'auto' : 'none';
        mobilePanel.style.opacity = open ? '1' : '0';
        const sheet = mobilePanel.querySelector('.absolute.inset-x-0.top-0');
        if (sheet) {
          sheet.style.transform = open ? 'translateY(0)' : 'translateY(-8px)';
          sheet.style.opacity = open ? '1' : '0';
        }
        if (menuIcon && closeIcon) {
          menuIcon.classList.toggle('hidden', open);
          closeIcon.classList.toggle('hidden', !open);
        }
      }
      navToggle?.addEventListener('click', () => {
        const open = navToggle.getAttribute('aria-expanded') !== 'true';
        setMobileOpen(open);
      });
      overlay?.addEventListener('click', () => setMobileOpen(false));
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') setMobileOpen(false);
      });
      document.querySelectorAll('[data-mobile-link]').forEach((a) => {
        a.addEventListener('click', () => setMobileOpen(false));
      });

      // Prompt interactions
      const promptEl = document.getElementById('prompt');
      const runBtn = document.getElementById('run-btn');
      const recentRoot = document.getElementById('recent-list');
      const todayCountEl = document.getElementById('today-count');
      const clearRecent = document.getElementById('clear-recent');
      const micBtn = document.getElementById('mic-btn');
      const listenEl = document.getElementById('listen-indicator');
      let recording = false;
      let todayCount = 0;

      function addRecentRow(text) {
        const row = document.createElement('div');
        row.className = 'flex items-start gap-3 rounded-lg bg-white/5 border border-white/10 px-3 py-2';
        row.innerHTML = `
          <div class="inline-flex h-6 w-6 items-center justify-center rounded-md bg-black/40 border border-white/15">
            <svg data-lucide="sparkles" width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" class="w-3.5 h-3.5"></svg>
          </div>
          <div class="min-w-0">
            <p class="text-sm leading-snug"></p>
            <p class="text-xs text-gray-400">Just now</p>
          </div>
          <button type="button" class="ml-auto text-xs px-2 py-1 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 inline-flex items-center gap-1">
            <svg data-lucide="redo-2" class="w-3.5 h-3.5" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"></svg>
            Run again
          </button>
        `;
        row.querySelector('p.text-sm').textContent = text;
        recentRoot?.prepend(row);
        if (window.lucide && window.lucide.createIcons) {
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }
        row.querySelector('button')?.addEventListener('click', () => {
          simulateRun(text);
        });
      }

      function simulateRun(text) {
        todayCount += 1;
        todayCountEl.textContent = String(todayCount);
        addRecentRow(text);
        // Subtle animation on Run button
        runBtn?.classList.add('scale-[1.02]');
        setTimeout(() => runBtn?.classList.remove('scale-[1.02]'), 140);
        // Update charts with a small delta
        bumpCharts();
      }

      runBtn?.addEventListener('click', () => {
        const v = (promptEl?.value || '').trim();
        if (!v) return;
        simulateRun(v);
        promptEl.value = '';
      });

      document.querySelectorAll('[data-suggest]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const v = btn.getAttribute('data-suggest');
          if (!v) return;
          promptEl.value = v;
          simulateRun(v);
          promptEl.value = '';
        });
      });

      clearRecent?.addEventListener('click', () => {
        recentRoot.innerHTML = '';
      });

      // Mic toggle + spacebar
      function setRecording(on) {
        recording = on;
        micBtn?.setAttribute('aria-pressed', String(on));
        listenEl?.classList.toggle('hidden', !on);
        const micIcon = micBtn?.querySelector('svg');
        if (!micIcon) return;
        micIcon.setAttribute('data-lucide', on ? 'square' : 'mic');
        if (window.lucide && window.lucide.createIcons) lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      }
      micBtn?.addEventListener('click', () => setRecording(!recording));
      let spaceHeld = false;
      window.addEventListener('keydown', (e) => {
        if (e.code === 'Space' && !spaceHeld && (e.target === document.body || e.target === document.documentElement)) {
          e.preventDefault();
          spaceHeld = true;
          setRecording(true);
        }
      });
      window.addEventListener('keyup', (e) => {
        if (e.code === 'Space' && spaceHeld) {
          e.preventDefault();
          spaceHeld = false;
          setRecording(false);
          // Fake transcript to recent when releasing space
          simulateRun('Voice command');
        }
      });

      // Custom toggles
      function styleToggle(el, on) {
        if (!el) return;
        el.setAttribute('aria-pressed', String(on));
        const knob = el.querySelector('span');
        if (on) {
          el.className = 'ml-auto relative inline-flex h-6 w-10 items-center rounded-full bg-blue-400/90 ring-1 ring-blue-300/60 transition';
          if (knob) knob.className = 'absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-black translate-x-4 shadow transition-transform';
        } else {
          el.className = 'ml-auto relative inline-flex h-6 w-10 items-center rounded-full bg-white/10 ring-1 ring-white/10 transition';
          if (knob) knob.className = 'absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform';
        }
      }
      document.querySelectorAll('[data-toggle]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const on = btn.getAttribute('aria-pressed') === 'true';
          styleToggle(btn, !on);
          const label = btn.closest('div.flex.items-center.gap-3')?.querySelector('p.text-sm')?.textContent || 'Toggle';
          simulateRun(`${!on ? 'Enable' : 'Disable'} ${label}`);
        });
      });

      // Charts
      let miniChart, mainChart, sparkChart;
      function initMini() {
        const ctx = document.getElementById('miniChart')?.getContext('2d');
        if (!ctx || typeof Chart === 'undefined') return;
        const gradient = ctx.createLinearGradient(0, 0, 0, 80);
        gradient.addColorStop(0, 'rgba(96,165,250,0.35)');
        gradient.addColorStop(1, 'rgba(96,165,250,0.02)');
        miniChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: Array.from({ length: 10 }, (_, i) => i + 1),
            datasets: [{
              data: [4, 5, 6, 7, 6, 8, 9, 10, 9, 11],
              tension: 0.35,
              fill: true,
              backgroundColor: gradient,
              borderColor: '#60a5fa',
              borderWidth: 1.5,
              pointRadius: 0
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false }, tooltip: { enabled: false } },
            scales: { x: { display: false }, y: { display: false } },
            elements: { line: { borderCapStyle: 'round', borderJoinStyle: 'round' } }
          }
        });
      }
      function initMain() {
        const ctx = document.getElementById('mainChart')?.getContext('2d');
        if (!ctx || typeof Chart === 'undefined') return;
        const grad = ctx.createLinearGradient(0, 0, 0, 300);
        grad.addColorStop(0, 'rgba(16,185,129,0.35)');
        grad.addColorStop(1, 'rgba(16,185,129,0.02)');
        mainChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
              label: 'Actions',
              data: [12, 14, 13, 16, 20, 18, 22],
              tension: 0.35,
              fill: true,
              backgroundColor: grad,
              borderColor: '#34d399',
              borderWidth: 1.5,
              pointRadius: 0
            }]
          },
          options:            {
              responsive: true,
              maintainAspectRatio: false,
              interaction: { mode: 'index', intersect: false },
              plugins: {
                legend: { display: false },
                tooltip: {
                  backgroundColor: 'rgba(17,24,39,0.9)',
                  borderColor: 'rgba(255,255,255,0.12)',
                  borderWidth: 1,
                  padding: 8,
                  displayColors: false,
                  callbacks: {
                    title: (items) => (items?.[0]?.label ?? ''),
                    label: (item) => `Actions: ${item.formattedValue}`
                  }
                }
              },
              scales: {
                x: {
                  grid: { color: 'rgba(255,255,255,0.06)' },
                  ticks: { color: '#9ca3af', font: { size: 11 } }
                },
                y: {
                  beginAtZero: true,
                  grid: { color: 'rgba(255,255,255,0.06)' },
                  ticks: { color: '#9ca3af', font: { size: 11 } }
                }
              },
              elements: {
                line: { borderCapStyle: 'round', borderJoinStyle: 'round' }
              }
            }
          });
        }
        function initSpark() {
          const ctx = document.getElementById('spark')?.getContext('2d');
          if (!ctx || typeof Chart === 'undefined') return;
          const g = ctx.createLinearGradient(0, 0, 0, 80);
          g.addColorStop(0, 'rgba(99,102,241,0.35)');
          g.addColorStop(1, 'rgba(99,102,241,0.02)');
          sparkChart = new Chart(ctx, {
            type: 'line',
            data: {
              labels: Array.from({ length: 16 }, (_, i) => i + 1),
              datasets: [{
                data: [98, 99, 99, 98, 99, 99, 99, 100, 99, 99, 100, 99, 99, 100, 99, 100],
                tension: 0.35,
                fill: true,
                backgroundColor: g,
                borderColor: '#818cf8',
                borderWidth: 1.5,
                pointRadius: 0
              }]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: { legend: { display: false }, tooltip: { enabled: false } },
              scales: { x: { display: false }, y: { display: false } },
              elements: { line: { borderCapStyle: 'round', borderJoinStyle: 'round' } }
            }
          });
        }

        function setYear() {
          const y = document.getElementById('year');
          if (y) y.textContent = String(new Date().getFullYear());
        }

        // Bump charts after actions
        function fmtPercent(n) {
          const sign = n >= 0 ? '+' : '';
          return `${sign}${Math.round(n)}%`;
        }
        function bumpCharts() {
          // Mini chart: shift and push a small bump
          if (miniChart) {
            const ds = miniChart.data.datasets[0];
            const last = Number(ds.data[ds.data.length - 1]) || 8;
            const next = Math.max(1, Math.round(last + (Math.random() > 0.4 ? 1 : -1) * (Math.random() * 1.5 + 0.5)));
            ds.data.push(next);
            if (ds.data.length > 10) ds.data.shift();
            miniChart.update('none');

            const prev = Number(ds.data[ds.data.length - 2]) || last;
            const diff = prev ? ((next - prev) / prev) * 100 : 0;
            const miniDiffEl = document.getElementById('mini-diff');
            if (miniDiffEl) miniDiffEl.textContent = fmtPercent(diff);
          }

          // Main chart: increase last day slightly
          if (mainChart) {
            const ds = mainChart.data.datasets[0];
            const idx = ds.data.length - 1;
            const prev = Number(ds.data[idx]) || 20;
            const inc = Math.random() > 0.3 ? 1 : 0;
            const next = Math.min(32, prev + inc);
            ds.data[idx] = next;
            mainChart.update('none');

            const prevDay = Number(ds.data[idx - 1]) || prev;
            const diff = prevDay ? ((next - prevDay) / prevDay) * 100 : 0;
            const mainDiffEl = document.getElementById('main-diff');
            if (mainDiffEl) mainDiffEl.textContent = fmtPercent(diff);
          }

          // Spark: keep success rate gently fluctuating around 99-100
          if (sparkChart) {
            const ds = sparkChart.data.datasets[0];
            const last = Number(ds.data[ds.data.length - 1]) || 99;
            const delta = Math.random() > 0.8 ? -1 : (Math.random() > 0.5 ? 1 : 0);
            const next = Math.max(97, Math.min(100, last + delta));
            ds.data.push(next);
            if (ds.data.length > 20) ds.data.shift();
            sparkChart.update('none');
          }
        }

        // Keyboard: Cmd/Ctrl+K to focus prompt, Enter to run
        window.addEventListener('keydown', (e) => {
          if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
            e.preventDefault();
            promptEl?.focus();
          }
        });
        promptEl?.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            const v = (promptEl?.value || '').trim();
            if (!v) return;
            simulateRun(v);
            promptEl.value = '';
          }
        });

        // Init everything on load
        window.addEventListener('load', () => {
          setYear();
          initMini();
          initMain();
          initSpark();
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
      <div className="aura-background-component top-0 w-full h-screen -z-10 absolute"><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="Cp839hKFEhq3vBXM2ZqP"></div>
</div>

<div className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-blue-400 to-indigo-400 w-0 z-[60]" id="scroll-progress" style={{width: '0%'}}></div>

<header className="fixed top-0 inset-x-0 z-50 transition-transform duration-300 will-change-transform bg-black/70 border-white/10 border-b backdrop-blur-md">
<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14">
<div className="h-full flex items-center justify-between">

<a className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md" href="#overview">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
<svg className="lucide lucide-shapes w-[18px] h-[18px]" data-icon-replaced="true" data-lucide="shapes" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '18px', height: '18px', color: 'rgb(243, 244, 246)'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"></path><rect height="7" rx="1" width="7" x="3" y="14"></rect><circle cx="17.5" cy="17.5" r="3.5"></circle></svg>
</span>
<span className="text-base font-semibold tracking-tighter">ArcOS</span>
</a>

<div className="hidden md:flex items-center gap-1 rounded-full border border-white/10 px-2">
<a className="px-3 py-1.5 text-sm text-gray-300 hover:text-white transition" data-nav-link="" href="#features">Features</a>
<a className="px-3 py-1.5 text-sm text-gray-300 hover:text-white transition" data-nav-link="" href="#product">Commands</a>
<a className="px-3 py-1.5 text-sm text-gray-300 hover:text-white transition" data-nav-link="" href="#analytics">Analytics</a>
<a className="px-3 py-1.5 text-sm text-gray-300 hover:text-white transition" data-nav-link="" href="#pricing">Pricing</a>
</div>

<div className="flex items-center gap-3">
<div className="inline-flex">
<style>@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');</style>
<button className="group relative inline-flex shadow-[0_8px_16px_-4px_rgba(59,130,246,0.3)] hover:shadow-[0_12px_20px_-6px_rgba(59,130,246,0.4)] transition duration-300 ease-out select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 transform-gpu hover:-translate-y-0.5 text-white rounded-lg pt-[1px] pr-[1px] pb-[1px] pl-[1px] items-center justify-center" style={{background: 'linear-gradient(144deg, rgba(59,130,246,0.8), rgba(59,130,246,0.4) 50%, rgba(59,130,246,0.6))', fontFamily: 'Inter, \'Helvetica Neue\', sans-serif'}} type="button">
<span className="flex items-center justify-center gap-2 text-[15px] leading-none w-full h-full transition-colors duration-300 group-hover:bg-black/30 font-medium bg-black/20 rounded-lg pt-2 pr-4 pb-2 pl-4">
<span className="">Sign Up</span>
</span>
</button>
</div>
<button aria-controls="mobile-panel" aria-expanded="false" className="md:hidden p-2 rounded-md transition-colors hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500" id="nav-toggle">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
<svg className="lucide lucide-x w-5 h-5 hidden" data-lucide="x" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
</div>
</nav>
</header>

<section className="relative overflow-hidden sm:pt-28 pt-24 pb-14" id="overview">
<div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
<div className="flex flex-col gap-10 lg:gap-16 text-center items-center">
<div className="max-w-3xl mx-auto">
<span className="text-xs uppercase tracking-wider text-blue-300/90">New: Hands‑free automations</span>
<h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight" style={{fontWeight: '600'}}>
              Ask. Act. Automate your system.
            </h1>
<p className="mt-5 text-lg text-gray-300 max-w-xl mx-auto">
              A fast, privacy‑minded assistant that controls apps, settings, and files—by voice or text.
            </p>

<div className="mt-8 max-w-2xl mx-auto">
<div className="rounded-2xl border border-white/10 bg-black/60 backdrop-blur p-2 shadow-2xl">
<div className="flex items-center gap-2 p-2 rounded-xl bg-white/5 border border-white/10">
<button aria-label="Toggle voice" aria-pressed="false" className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-black/40 border border-white/15 hover:border-white/25 transition" id="mic-btn" type="button">
<svg className="lucide lucide-mic w-[18px] h-[18px]" data-lucide="mic" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></svg>
</button>
<input className="flex-1 bg-transparent outline-none text-sm placeholder:text-gray-500 px-1" id="prompt" placeholder="Ask ArcOS to do something…" type="text"/>
<div className="hidden sm:flex items-center gap-2">
<span className="text-[10px] text-gray-400 px-1.5 py-1 rounded-md bg-white/5 border border-white/10">⌘</span>
<span className="text-[10px] text-gray-400 px-1.5 py-1 rounded-md bg-white/5 border border-white/10">K</span>
</div>
<button className="inline-flex items-center gap-2 px-3 h-9 rounded-lg bg-blue-400 text-black hover:bg-blue-300 transition" id="run-btn" type="button">
                    Run
                    <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
<div className="px-2 pb-2">
<div className="hidden mt-2 inline-flex items-center gap-2 text-xs text-blue-300 px-2 py-1 rounded-md bg-blue-500/10 border border-blue-500/20" id="listen-indicator">
<span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                    Listening…
                  </div>
<div className="mt-2 flex flex-wrap gap-2">
<button className="text-xs px-2.5 py-1.5 rounded-md bg-white/5 border border-white/10 hover:bg-white/10" data-suggest="Turn on Do Not Disturb until 6 PM" type="button">DND until 6 PM</button>
<button className="text-xs px-2.5 py-1.5 rounded-md bg-white/5 border border-white/10 hover:bg-white/10" data-suggest="Open Figma and Slack side by side" type="button">Arrange: Figma + Slack</button>
<button className="text-xs px-2.5 py-1.5 rounded-md bg-white/5 border border-white/10 hover:bg-white/10" data-suggest="Find PDF invoices from last month" type="button">Find invoices</button>
<button className="text-xs px-2.5 py-1.5 rounded-md bg-white/5 border border-white/10 hover:bg-white/10" data-suggest="Start a 25‑minute focus timer" type="button">Focus 25m</button>
</div>
<p className="mt-2 text-[11px] text-gray-500">Tip: Hold Space to talk</p>
</div>
</div>
</div>

<div className="mt-8 flex items-center gap-6 justify-center">
<div className="flex -space-x-2">
<img alt="" className="w-8 h-8 rounded-full border-2 border-black object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/52f90c3d-9f64-4db9-997b-8765ea3ff941_320w.jpg"/>
<img alt="" className="w-8 h-8 rounded-full border-2 border-black object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/cb2b351a-aabb-4336-a040-dccaed5418b7_320w.jpg"/>
<img alt="" className="w-8 h-8 rounded-full border-2 border-black object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f7f6feef-fd3e-4901-bce6-7271aa74dc87_320w.jpg"/>
<div className="w-8 h-8 rounded-full border-2 border-black bg-blue-400/90 flex items-center justify-center text-black text-[10px]">
                  2k+
                </div>
</div>
<div className="">
<p className="text-sm text-gray-100">2,000+ users automated their day</p>
<p className="text-sm text-gray-400">Private, fast, and reliable</p>
</div>
</div>
</div>

<div className="relative w-full max-w-5xl mx-auto">
<div className="relative overflow-hidden bg-gray-950/70 border border-white/10 rounded-2xl shadow-2xl backdrop-blur">

<div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-black/50">
<div className="flex items-center gap-2">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
<svg className="lucide lucide-sparkles w-4.5 h-4.5" data-lucide="sparkles" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</span>
<p className="text-sm">Assistant</p>
</div>
<div className="inline-flex items-center gap-2 text-xs px-2 py-1 rounded-md bg-white/5 border border-white/10">
<svg className="lucide lucide-shield-check w-3.5 h-3.5 text-emerald-300" data-lucide="shield-check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-emerald-300">Private</span>
</div>
</div>
<div className="grid md:grid-cols-2">

<div className="p-4 border-r border-white/10">
<div className="flex items-center justify-between mb-2">
<p className="text-xs text-gray-400">Suggested actions</p>
<span className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 border border-white/10">6</span>
</div>
<div className="grid grid-cols-2 gap-2">
<button className="group rounded-lg bg-white/5 border border-white/10 p-3 text-left hover:bg-white/10 transition" data-suggest="Turn on Do Not Disturb for 30 minutes">
<div className="flex items-center gap-2">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-black/40 border border-white/10">
<svg className="lucide lucide-moon w-4 h-4 text-gray-300" data-lucide="moon" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"></path></svg>
</span>
<p className="text-sm leading-snug">Enable DND 30m</p>
</div>
<p className="mt-1 text-[11px] text-gray-500">Focus • System</p>
</button>
<button className="group rounded-lg bg-white/5 border border-white/10 p-3 text-left hover:bg-white/10 transition" data-suggest="Open Notes and start a new note titled Daily Standup">
<div className="flex items-center gap-2">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-black/40 border border-white/10">
<svg className="lucide lucide-notebook-text w-4 h-4 text-gray-300" data-lucide="notebook-text" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M2 6h4"></path><path d="M2 10h4"></path><path d="M2 14h4"></path><path d="M2 18h4"></path><rect height="20" rx="2" width="16" x="4" y="2"></rect><path d="M9.5 8h5"></path><path d="M9.5 12H16"></path><path d="M9.5 16H14"></path></svg>
</span>
<p className="text-sm leading-snug">New note: Daily Standup</p>
</div>
<p className="mt-1 text-[11px] text-gray-500">Notes • App</p>
</button>
<button className="group rounded-lg bg-white/5 border border-white/10 p-3 text-left hover:bg-white/10 transition" data-suggest="Connect to Wi‑Fi network Studio-5G">
<div className="flex items-center gap-2">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-black/40 border border-white/10">
<svg className="lucide lucide-wifi w-4 h-4 text-gray-300" data-lucide="wifi" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
</span>
<p className="text-sm leading-snug">Join Wi‑Fi: Studio‑5G</p>
</div>
<p className="mt-1 text-[11px] text-gray-500">Network • System</p>
</button>
<button className="group rounded-lg bg-white/5 border border-white/10 p-3 text-left hover:bg-white/10 transition" data-suggest="Arrange Safari and Mail side by side">
<div className="flex items-center gap-2">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-black/40 border border-white/10">
<svg className="lucide lucide-panels-top-left w-4 h-4 text-gray-300" data-lucide="panels-top-left" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>
</span>
<p className="text-sm leading-snug">Tile Safari + Mail</p>
</div>
<p className="mt-1 text-[11px] text-gray-500">Windows • Layout</p>
</button>
<button className="group rounded-lg bg-white/5 border border-white/10 p-3 text-left hover:bg-white/10 transition" data-suggest="Take a screenshot of the active window">
<div className="flex items-center gap-2">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-black/40 border border-white/10">
<svg className="lucide lucide-camera w-4 h-4 text-gray-300" data-lucide="camera" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path><circle cx="12" cy="13" r="3"></circle></svg>
</span>
<p className="text-sm leading-snug">Screenshot active</p>
</div>
<p className="mt-1 text-[11px] text-gray-500">Capture • System</p>
</button>
<button className="group rounded-lg bg-white/5 border border-white/10 p-3 text-left hover:bg-white/10 transition" data-suggest="Set a reminder for 2 PM today">
<div className="flex items-center gap-2">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-black/40 border border-white/10">
<svg className="lucide lucide-bell w-4 h-4 text-gray-300" data-lucide="bell" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
</span>
<p className="text-sm leading-snug">Reminder: 2 PM</p>
</div>
<p className="mt-1 text-[11px] text-gray-500">Calendar • System</p>
</button>
</div>

</div>

<div className="p-4">
<div className="flex items-center justify-between">
<p className="text-sm">Live controls</p>
<span className="text-xs text-gray-400">Today <span id="today-count">0</span> actions</span>
</div>
<div className="mt-3 space-y-2">

<div className="flex items-center gap-3 rounded-lg bg-white/5 border border-white/10 px-3 py-2">
<div className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-black/40 border border-white/15">
<svg className="lucide lucide-moon w-3.5 h-3.5" data-lucide="moon" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"></path></svg>
</div>
<div className="min-w-0">
<p className="text-sm leading-snug">Do Not Disturb</p>
<p className="text-xs text-gray-400">Silence notifications</p>
</div>
<button aria-pressed="false" className="ml-auto relative inline-flex h-6 w-10 items-center rounded-full bg-white/10 ring-1 ring-white/10 transition" data-toggle="dnd">
<span className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow transform transition-transform"></span>
</button>
</div>

<div className="flex items-center gap-3 rounded-lg bg-white/5 border border-white/10 px-3 py-2">
<div className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-black/40 border border-white/15">
<svg className="lucide lucide-wifi w-3.5 h-3.5" data-lucide="wifi" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
</div>
<div className="min-w-0">
<p className="text-sm leading-snug">Wi‑Fi</p>
<p className="text-xs text-gray-400">Studio‑5G</p>
</div>
<button aria-pressed="true" className="ml-auto relative inline-flex h-6 w-10 items-center rounded-full bg-blue-400/90 ring-1 ring-blue-300/60 transition" data-toggle="wifi">
<span className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-black translate-x-4 shadow transition-transform"></span>
</button>
</div>

<div className="flex items-center gap-3 rounded-lg bg-white/5 border border-white/10 px-3 py-2">
<div className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-black/40 border border-white/15">
<svg className="lucide lucide-timer w-3.5 h-3.5" data-lucide="timer" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><line x1="10" x2="14" y1="2" y2="2"></line><line x1="12" x2="15" y1="14" y2="11"></line><circle cx="12" cy="14" r="8"></circle></svg>
</div>
<div className="min-w-0">
<p className="text-sm leading-snug">Focus 25m</p>
<p className="text-xs text-gray-400">Pomodoro</p>
</div>
<button aria-pressed="false" className="ml-auto relative inline-flex h-6 w-10 items-center rounded-full bg-white/10 ring-1 ring-white/10 transition" data-toggle="focus">
<span className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform"></span>
</button>
</div>
</div>

<div className="mt-4">
<div className="flex items-center justify-between">
<p className="text-sm">Recent commands</p>
<button className="text-xs text-gray-300 hover:text-white px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 inline-flex items-center gap-2" id="clear-recent" type="button">
<svg className="lucide lucide-trash-2 w-4 h-4" data-lucide="trash-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                        Clear
                      </button>
</div>
<div className="mt-2 space-y-2" id="recent-list">

</div>
</div>
</div>
</div>
</div>

</div>
</div>
</div>
</section>

<section className="bg-gray-950 pt-16 pb-16" id="features">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="text-center">
<span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-gray-300">Features</span>
<h2 className="mt-4 text-4xl sm:text-5xl tracking-tight" style={{fontWeight: '600'}}>
        OS‑level control, without the <span className="italic" style={{fontWeight: '500'}}>friction</span>
</h2>
<p className="mt-3 text-gray-300 max-w-3xl mx-auto">
        From quick system toggles to app workflows and secure on‑device handling.
      </p>
</div>

<div className="mt-10 grid md:grid-cols-2 gap-6">

<div className="group relative overflow-hidden rounded-[28px] border border-white/10 p-8 text-center bg-black/40 hover:border-white/15 transition-all">
<div className="absolute inset-0 pointer-events-none -z-10" style="background:
          radial-gradient(180px 140px at 4% 0%, rgba(59,130,246,0.45), transparent 60%),
          radial-gradient(220px 160px at 100% 100%, rgba(147,197,253,0.10), transparent 70%),
          linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.00))"></div>
<div className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
<svg className="lucide lucide-settings-2 w-[18px] h-[18px] text-gray-300" data-lucide="settings-2" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M14 17H5"></path><path d="M19 7h-9"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>
</div>
<h3 className="mt-4 text-2xl sm:text-3xl tracking-tight" style={{fontWeight: '600'}}>System controls</h3>
<p className="mt-3 text-sm text-gray-300 max-w-md mx-auto">
          Toggle Wi‑Fi, Bluetooth, Focus, audio, and more—hands‑free.
        </p>
</div>

<div className="group relative overflow-hidden rounded-[28px] border border-white/10 p-8 text-center bg-black/40 hover:border-white/15 transition-all">
<div className="absolute inset-0 pointer-events-none -z-10" style="background:
          radial-gradient(220px 160px at 100% 0%, rgba(251,146,60,0.45), transparent 60%),
          radial-gradient(220px 160px at 0% 100%, rgba(244,63,94,0.10), transparent 70%),
          linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.00))"></div>
<div className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
<svg className="lucide lucide-app-window w-[18px] h-[18px] text-gray-300" data-lucide="app-window" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="M10 4v4"></path><path d="M2 8h20"></path><path d="M6 4v4"></path></svg>
</div>
<h3 className="mt-4 text-2xl sm:text-3xl tracking-tight" style={{fontWeight: '600'}}>App automation</h3>
<p className="mt-3 text-sm text-gray-300 max-w-md mx-auto">
          Launch, arrange, and script your favorite apps.
        </p>
</div>

<div className="group relative overflow-hidden rounded-[28px] border border-white/10 p-8 text-center bg-black/40 hover:border-white/15 transition-all">
<div className="absolute inset-0 pointer-events-none -z-10" style="background:
          radial-gradient(200px 160px at 0% 100%, rgba(139,92,246,0.40), transparent 60%),
          radial-gradient(220px 160px at 100% 0%, rgba(99,102,241,0.10), transparent 70%),
          linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.00))"></div>
<div className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
<svg className="lucide lucide-file-search w-[18px] h-[18px] text-gray-300" data-lucide="file-search" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"></path><path d="m9 18-1.5-1.5"></path><circle cx="5" cy="14" r="3"></circle></svg>
</div>
<h3 className="mt-4 text-2xl sm:text-3xl tracking-tight" style={{fontWeight: '600'}}>Find anything</h3>
<p className="mt-3 text-sm text-gray-300 max-w-md mx-auto">
          Search local files and the web with context awareness.
        </p>
</div>

<div className="group relative overflow-hidden rounded-[28px] border border-white/10 p-8 text-center bg-black/40 hover:border-white/15 transition-all">
<div className="absolute inset-0 pointer-events-none -z-10" style="background:
          radial-gradient(200px 160px at 100% 100%, rgba(45,212,191,0.40), transparent 60%),
          radial-gradient(220px 160px at 0% 0%, rgba(34,197,94,0.10), transparent 70%),
          linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.00))"></div>
<div className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
<svg className="lucide lucide-lock w-[18px] h-[18px] text-gray-300" data-lucide="lock" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</div>
<h3 className="mt-4 text-2xl sm:text-3xl tracking-tight" style={{fontWeight: '600'}}>Privacy‑first</h3>
<p className="mt-3 text-sm text-gray-300 max-w-md mx-auto">
          On‑device processing for sensitive requests.
        </p>
</div>
</div>
</div>
</section>

<section className="bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/31cad904-f00d-40ae-ba05-a23e01be6ada_3840w.jpg)] bg-cover pt-16 pb-16" id="product">
<div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pl-4">
<div className="text-center">
<span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-gray-300">Customer stories</span>
<h2 className="sm:text-5xl text-4xl tracking-tight mt-4" style={{fontWeight: '600'}}>
        Discover how <span className="italic" style={{fontWeight: '500'}}>real teams</span> automate their workflow.
      </h2>
<p className="mt-3 text-gray-300 max-w-3xl mx-auto">
        Unscripted clips from people automating their day-to-day. New workflows, less context switching, happier teams.
      </p>
</div>
<div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative overflow-hidden hover:border-white/15 transition-all bg-black/40 border-white/10 border rounded-2xl pt-4 pr-4 pb-4 pl-4 backdrop-blur-lg">
<div className="relative aspect-video rounded-xl overflow-hidden border border-white/10">
<img alt="Customer video thumbnail" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6a8399dc-9cc9-4f4f-a393-c5dc669e58ae_800w.jpg" style={{}}/>
<button className="absolute inset-0 grid place-items-center" type="button">
<span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-black ring-1 ring-white/10 shadow">
<svg className="lucide lucide-play w-5 h-5" data-lucide="play" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</span>
</button>
<div className="absolute inset-x-0 bottom-0 p-2">
<div className="flex items-center justify-between text-[11px] text-white">
<span>00:00</span>
<div className="flex items-center gap-2">
<svg className="lucide lucide-volume-2 w-3.5 h-3.5" data-lucide="volume-2" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path><path d="M16 9a5 5 0 0 1 0 6"></path><path d="M19.364 18.364a9 9 0 0 0 0-12.728"></path></svg>
<svg className="lucide lucide-settings w-3.5 h-3.5" data-lucide="settings" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
<svg className="lucide lucide-expand w-3.5 h-3.5" data-lucide="expand" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m15 15 6 6"></path><path d="m15 9 6-6"></path><path d="M21 16v5h-5"></path><path d="M21 8V3h-5"></path><path d="M3 16v5h5"></path><path d="m3 21 6-6"></path><path d="M3 8V3h5"></path><path d="M9 9 3 3"></path></svg>
</div>
</div>
<div className="mt-1 h-1.5 rounded bg-white/10 overflow-hidden">
<div className="h-1.5 rounded bg-blue-500" style={{width: '22%'}}></div>
</div>
</div>
</div>
<div className="mt-4">
<p className="text-lg italic" style={{fontWeight: '500'}}>lumen</p>
<p className="mt-2 text-sm text-gray-300">“We consolidated three tools and shaved minutes off every task. Setup took under 10 minutes.”</p>
<p className="mt-4 text-xs text-gray-500">Jamal Ortiz • Ops Lead, Lumen Studio</p>
</div>
</div>

<div className="group relative overflow-hidden hover:border-white/15 transition-all bg-black/40 border-white/10 border rounded-2xl pt-4 pr-4 pb-4 pl-4 backdrop-blur-lg">
<div className="relative aspect-video rounded-xl overflow-hidden border border-white/10">
<img alt="Customer video thumbnail" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/09af58f4-5734-4602-a993-9208786f9267_800w.jpg"/>
<button className="absolute inset-0 grid place-items-center" type="button">
<span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-black ring-1 ring-white/10 shadow">
<svg className="lucide lucide-play w-5 h-5" data-lucide="play" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</span>
</button>
<div className="absolute inset-x-0 bottom-0 p-2">
<div className="flex items-center justify-between text-[11px] text-white">
<span>00:00</span>
<div className="flex items-center gap-2">
<svg className="lucide lucide-volume-2 w-3.5 h-3.5" data-lucide="volume-2" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path><path d="M16 9a5 5 0 0 1 0 6"></path><path d="M19.364 18.364a9 9 0 0 0 0-12.728"></path></svg>
<svg className="lucide lucide-settings w-3.5 h-3.5" data-lucide="settings" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
<svg className="lucide lucide-expand w-3.5 h-3.5" data-lucide="expand" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m15 15 6 6"></path><path d="m15 9 6-6"></path><path d="M21 16v5h-5"></path><path d="M21 8V3h-5"></path><path d="M3 16v5h5"></path><path d="m3 21 6-6"></path><path d="M3 8V3h5"></path><path d="M9 9 3 3"></path></svg>
</div>
</div>
<div className="mt-1 h-1.5 rounded bg-white/10 overflow-hidden">
<div className="h-1.5 rounded bg-blue-500" style={{width: '35%'}}></div>
</div>
</div>
</div>
<div className="mt-4">
<div className="flex items-center gap-2">
<svg className="lucide lucide-toggle-left w-4 h-4 text-gray-300" data-lucide="toggle-left" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="12" r="3"></circle><rect height="14" rx="7" width="20" x="2" y="5"></rect></svg>
<p className="text-xl tracking-tight" style={{fontWeight: '600'}}>Northwind</p>
</div>
<p className="mt-2 text-sm text-gray-300">“Week one, results were obvious. Voice triggers cut our context switching to almost zero.”</p>
<p className="mt-4 text-xs text-gray-500">Riya Sen • Founder, Northwind</p>
</div>
</div>

<div className="group relative overflow-hidden hover:border-white/15 transition-all bg-black/40 border-white/10 border rounded-2xl pt-4 pr-4 pb-4 pl-4 backdrop-blur-lg">
<div className="relative aspect-video rounded-xl overflow-hidden border border-white/10">
<img alt="Customer video thumbnail" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/90c7269b-467c-4ab1-b003-073d48f6ce28_800w.jpg"/>
<button className="absolute inset-0 grid place-items-center" type="button">
<span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-black ring-1 ring-white/10 shadow">
<svg className="lucide lucide-play w-5 h-5" data-lucide="play" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</span>
</button>
<div className="absolute inset-x-0 bottom-0 p-2">
<div className="flex items-center justify-between text-[11px] text-white">
<span>00:00</span>
<div className="flex items-center gap-2">
<svg className="lucide lucide-volume-2 w-3.5 h-3.5" data-lucide="volume-2" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path><path d="M16 9a5 5 0 0 1 0 6"></path><path d="M19.364 18.364a9 9 0 0 0 0-12.728"></path></svg>
<svg className="lucide lucide-settings w-3.5 h-3.5" data-lucide="settings" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
<svg className="lucide lucide-expand w-3.5 h-3.5" data-lucide="expand" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m15 15 6 6"></path><path d="m15 9 6-6"></path><path d="M21 16v5h-5"></path><path d="M21 8V3h-5"></path><path d="M3 16v5h5"></path><path d="m3 21 6-6"></path><path d="M3 8V3h5"></path><path d="M9 9 3 3"></path></svg>
</div>
</div>
<div className="mt-1 h-1.5 rounded bg-white/10 overflow-hidden">
<div className="h-1.5 rounded bg-blue-500" style={{width: '48%'}}></div>
</div>
</div>
<div className="absolute inset-y-0 right-0 w-1/3 pointer-events-none bg-gradient-to-l from-black/60 to-transparent hidden lg:block"></div>
<span className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-black shadow">
<svg className="lucide lucide-chevron-right w-3.5 h-3.5" data-lucide="chevron-right" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</span>
</div>
<div className="mt-4">
<p className="text-xl tracking-tight uppercase" style={{fontWeight: '600'}}>Oak &amp; Pine</p>
<p className="mt-2 text-sm text-gray-300">“Automated follow‑ups and window layouts boosted conversions and kept our team in flow.”</p>
<p className="mt-4 text-xs text-gray-500">Naomi Park • CEO, Oak &amp; Pine</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-gray-950 pt-16 pb-16" id="analytics">
<div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pl-4">
<div className="text-center mb-10">
<span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-gray-300">Analytics</span>
<h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl tracking-tight" style={{fontWeight: '600'}}>
      Intelligent insights for <span className="italic" style={{fontWeight: '500'}}>smarter</span> workflows
    </h2>
<p className="mt-3 text-gray-300 max-w-3xl mx-auto">
      From brand verification to enterprise automation and data-driven growth strategies.
    </p>
</div>
<div className="grid gap-6 lg:grid-cols-2">

<div className="relative overflow-hidden bg-black/40 border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6">
<div className="absolute inset-0 pointer-events-none" style="background:
      radial-gradient(220px 160px at 10% 0%, rgba(59,130,246,0.25), transparent 60%),
      radial-gradient(280px 200px at 100% 100%, rgba(147,197,253,0.08), transparent 70%),
      linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.00))"></div>
<div className="flex items-start justify-between mb-4">
<div className="">
<h3 className="text-xl sm:text-2xl lg:text-3xl tracking-tight" style={{fontWeight: '600'}}>Distinguish yourself</h3>
<p className="mt-2 text-sm sm:text-base text-gray-300">Elevate your brand with a golden tick and connect with top‑tier associates.</p>
</div>
<div className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-yellow-300/10 border border-yellow-300/20">
<svg className="lucide lucide-crown w-3 h-3 text-yellow-300" data-lucide="crown" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path><path d="M5 21h14"></path></svg>
<span className="text-xs font-medium text-yellow-300">Premium</span>
</div>
</div>
<div className="mt-4 rounded-lg bg-white/5 border border-white/10 p-3">
<div className="flex items-center justify-between mb-3">
<p className="text-sm font-medium">Verified Partners</p>
<span className="text-xs px-2 py-1 rounded-md bg-blue-500/10 border border-blue-400/20 text-blue-300">8 Active</span>
</div>
<div className="space-y-3">
<div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-blue-500/20 ring-1 ring-white/10 flex-shrink-0">
<svg className="lucide lucide-layers w-3.5 h-3.5" data-lucide="layers" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</span>
<div className="flex-1 min-w-0">
<span className="text-sm font-medium">LanderX</span>
<p className="text-xs text-gray-400">Design Systems • 2.4k followers</p>
</div>
<div className="flex items-center gap-1">
<svg className="lucide lucide-badge-check w-3.5 h-3.5 text-yellow-300 flex-shrink-0" data-lucide="badge-check" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-xs text-yellow-300 font-medium">Gold</span>
</div>
</div>
<div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10">
<img alt="Avatar" className="w-7 h-7 rounded-md object-cover ring-1 ring-white/10 flex-shrink-0" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&amp;w=80&amp;auto=format&amp;fit=crop"/>
<div className="flex-1 min-w-0">
<span className="text-sm font-medium">Robinson jr</span>
<p className="text-xs text-gray-400">Product Manager • 1.8k connections</p>
</div>
<div className="flex items-center gap-1">
<svg className="lucide lucide-badge-check w-3.5 h-3.5 text-blue-400 flex-shrink-0" data-lucide="badge-check" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-xs text-blue-400 font-medium">Pro</span>
</div>
</div>
</div>
</div>
<div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
<div className="rounded-lg bg-white/5 border border-white/10 p-3">
<div className="flex items-center gap-2 mb-2">
<svg className="lucide lucide-trending-up w-3.5 h-3.5 text-emerald-400" data-lucide="trending-up" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<span className="text-xs font-medium">Network Growth</span>
</div>
<p className="text-lg font-semibold text-emerald-400">+127%</p>
<p className="text-xs text-gray-400">vs last month</p>
</div>
<div className="rounded-lg bg-white/5 border border-white/10 p-3">
<div className="flex items-center gap-2 mb-2">
<svg className="lucide lucide-users w-3.5 h-3.5 text-blue-400" data-lucide="users" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="text-xs font-medium">Active Partners</span>
</div>
<p className="text-lg font-semibold text-blue-400">24</p>
<p className="text-xs text-gray-400">verified connections</p>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-6">
<div className="absolute inset-0 pointer-events-none" style="background:
          radial-gradient(220px 160px at 100% 0%, rgba(251,146,60,0.25), transparent 60%),
          radial-gradient(260px 180px at 0% 100%, rgba(34,197,94,0.10), transparent 70%),
          linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.00))"></div>
<h3 className="text-xl sm:text-2xl lg:text-3xl tracking-tight" style={{fontWeight: '600'}}>Enterprise Insights</h3>
<p className="mt-2 text-sm sm:text-base text-gray-300">Automate everything from workflow optimization to real‑time sentiment analysis and market monitoring.</p>
<div className="mt-5 rounded-xl bg-white/5 border border-white/10 p-4">
<div className="flex flex-wrap items-center gap-2 mb-3">
<div className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-md bg-black/40 border border-white/10">
<span className="inline-flex h-6 w-6 items-center justify-center rounded bg-orange-500/20 ring-1 ring-white/10 flex-shrink-0">
<svg className="lucide lucide-flame w-3.5 h-3.5" data-lucide="flame" fill="none" height="13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="13" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>
</span>
<span className="text-xs font-medium">Your Brand</span>
<svg className="lucide lucide-badge-check w-3.5 h-3.5 text-yellow-300 flex-shrink-0" data-lucide="badge-check" fill="none" height="13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="13" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-md bg-black/40 border border-white/10">
<img alt="Avatar" className="w-6 h-6 rounded ring-1 ring-white/10 flex-shrink-0" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&amp;w=80&amp;auto=format&amp;fit=crop"/>
<span className="text-xs font-medium">Robinson jr</span>
</div>
</div>
<div className="mt-3 rounded-lg bg-gradient-to-b from-gray-900/60 to-transparent h-24 border border-white/10 overflow-hidden">
<svg className="w-full h-full" viewbox="0 0 400 96">
<defs>
</defs>
<path d="M0 70 C60 30, 120 85, 180 48 S300 70, 400 40" fill="url(#aiGrad)" stroke="#818cf8" strokeWidth="2"></path>
</svg>
</div>
</div>
<div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
<div className="flex items-center justify-between px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-xs">
<span>Web Business</span>
<svg className="lucide lucide-trending-up w-3.5 h-3.5 text-blue-300 flex-shrink-0" data-lucide="trending-up" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<div className="flex items-center justify-between px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-xs">
<span>E‑commerce Brands</span>
<svg className="lucide lucide-trending-up w-3.5 h-3.5 text-blue-300 flex-shrink-0" data-lucide="trending-up" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<div className="flex items-center justify-between px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-xs">
<span>SAAS Startup's</span>
<svg className="lucide lucide-trending-up w-3.5 h-3.5 text-blue-300 flex-shrink-0" data-lucide="trending-up" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<div className="flex items-center justify-between px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-xs">
<span>Tech Innovators</span>
<svg className="lucide lucide-trending-up w-3.5 h-3.5 text-blue-300 flex-shrink-0" data-lucide="trending-up" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<div className="flex items-center justify-between px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-xs">
<span className="">Marketing Agencies</span>
<svg className="lucide lucide-trending-up w-3.5 h-3.5 text-blue-300 flex-shrink-0" data-lucide="trending-up" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<div className="flex items-center justify-between px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-xs">
<span className="">Creative Studios</span>
<svg className="lucide lucide-trending-up w-3.5 h-3.5 text-blue-300 flex-shrink-0" data-lucide="trending-up" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-6">
<div className="absolute inset-0 pointer-events-none" style="background:
          radial-gradient(220px 160px at 8% 100%, rgba(139,92,246,0.25), transparent 60%),
          radial-gradient(260px 180px at 100% 0%, rgba(59,130,246,0.10), transparent 70%),
          linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.00))"></div>
<h3 className="text-xl sm:text-2xl lg:text-3xl tracking-tight" style={{fontWeight: '600'}}>Business Data Solutions</h3>
<p className="mt-2 text-sm sm:text-base text-gray-300">Your data‑driven guide to making informed business decisions.</p>
<div className="mt-6 relative">
<div className="rounded-xl bg-white/5 border border-white/10 p-4">
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
<p className="text-sm font-medium">See Growth</p>
<div className="flex items-center gap-2">
<span className="text-[11px] px-2 py-1 rounded bg-black/40 border border-white/10">Monthly Visits</span>
<span className="text-[11px] px-2 py-1 rounded bg-black/40 border border-white/10">Last 24hrs</span>
</div>
</div>
<div className="mt-3 h-28 rounded-lg bg-gradient-to-b from-gray-900/60 to-transparent border border-white/10 overflow-hidden">
<svg className="w-full h-full" viewbox="0 0 400 112">
<defs>
</defs>
<path d="M0 90 C70 40, 140 100, 200 55 S330 90, 400 65" fill="url(#growthGrad)" stroke="#34d399" strokeWidth="2"></path>
</svg>
</div>
<div className="mt-3 inline-flex items-center gap-2 px-2.5 py-1.5 rounded-md bg-black/40 border border-white/10">
<span className="inline-flex h-6 w-6 items-center justify-center rounded bg-blue-500/20 ring-1 ring-white/10 flex-shrink-0">
<svg className="lucide lucide-layers w-3.5 h-3.5" data-lucide="layers" fill="none" height="13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="13" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</span>
<span className="text-xs font-medium">LanderX</span>
<svg className="lucide lucide-badge-check w-3.5 h-3.5 text-yellow-300 flex-shrink-0" data-lucide="badge-check" fill="none" height="13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="13" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
</div>

<div className="mt-6 lg:absolute lg:right-0 lg:bottom-0 lg:translate-x-0 lg:translate-y-6 lg:mt-0 rounded-xl bg-black/60 backdrop-blur border border-white/10 p-4 w-full lg:w-80">
<div className="flex items-center justify-between mb-3">
<p className="text-sm font-medium">See Growth</p>
<svg className="lucide lucide-chevron-down w-4 h-4 text-gray-400 flex-shrink-0" data-lucide="chevron-down" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
<ul className="space-y-2 text-sm text-gray-300">
<li className="flex items-center gap-2">
<span className="inline-flex h-4 w-4 items-center justify-center rounded-[4px] bg-blue-500/20 border border-blue-300/40 flex-shrink-0">
<svg className="lucide lucide-check w-2.5 h-2.5 text-blue-300" data-lucide="check" fill="none" height="11" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="11" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
              100% score anytime
            </li>
<li className="flex items-center gap-2">
<span className="inline-flex h-4 w-4 items-center justify-center rounded-[4px] bg-blue-500/20 border border-blue-300/40 flex-shrink-0">
<svg className="lucide lucide-check w-2.5 h-2.5 text-blue-300" data-lucide="check" fill="none" height="11" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="11" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
              Watch Stats &amp; Growth like master
            </li>
<li className="flex items-center gap-2">
<span className="inline-flex h-4 w-4 items-center justify-center rounded-[4px] bg-blue-500/20 border border-blue-300/40 flex-shrink-0">
<svg className="lucide lucide-check w-2.5 h-2.5 text-blue-300" data-lucide="check" fill="none" height="11" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="11" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
              Start Growing Now
            </li>
</ul>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-6">
<div className="absolute inset-0 pointer-events-none" style="background:
          radial-gradient(220px 160px at 100% 100%, rgba(45,212,191,0.25), transparent 60%),
          radial-gradient(260px 180px at 0% 0%, rgba(56,189,248,0.08), transparent 70%),
          linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.00))"></div>
<h3 className="text-xl sm:text-2xl lg:text-3xl tracking-tight" style={{fontWeight: '600'}}>Boost Sales</h3>
<p className="mt-2 text-sm sm:text-base text-gray-300">Convert more leads with targeted strategies and smarter tools.</p>
<div className="mt-5 rounded-xl bg-white/5 border border-white/10 p-4">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs mb-4">
<div className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-black/40 border border-white/10">
<svg className="lucide lucide-chart-bar w-3.5 h-3.5 text-gray-300 flex-shrink-0" data-lucide="chart-bar" fill="none" height="13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="13" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M7 16h8"></path><path d="M7 11h12"></path><path d="M7 6h3"></path></svg>
            Monthly Visits
          </div>
<div className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-black/40 border border-white/10">
<svg className="lucide lucide-clock w-3.5 h-3.5 text-gray-300 flex-shrink-0" data-lucide="clock" fill="none" height="13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="13" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
            Last 24hrs
          </div>
<div className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-black/40 border border-white/10">
<svg className="lucide lucide-repeat w-3.5 h-3.5 text-gray-300 flex-shrink-0" data-lucide="repeat" fill="none" height="13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="13" xmlns="http://www.w3.org/2000/svg"><path d="m17 2 4 4-4 4"></path><path d="M3 11v-1a4 4 0 0 1 4-4h14"></path><path d="m7 22-4-4 4-4"></path><path d="M21 13v1a4 4 0 0 1-4 4H3"></path></svg>
            Retention
          </div>
<div className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-black/40 border border-white/10">
<svg className="lucide lucide-users w-3.5 h-3.5 text-gray-300 flex-shrink-0" data-lucide="users" fill="none" height="13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="13" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
            Top Referrals
          </div>
<div className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-black/40 border border-white/10">
<svg className="lucide lucide-percent w-3.5 h-3.5 text-gray-300 flex-shrink-0" data-lucide="percent" fill="none" height="13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="13" xmlns="http://www.w3.org/2000/svg"><line x1="19" x2="5" y1="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle></svg>
            % Conversion
          </div>
<div className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-black/40 border border-white/10">
<svg className="lucide lucide-trending-up w-3.5 h-3.5 text-gray-300 flex-shrink-0" data-lucide="trending-up" fill="none" height="13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="13" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
            Grow Income
          </div>
</div>
<div className="flex flex-wrap items-center gap-2">
<div className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-md bg-black/40 border border-white/10">
<span className="inline-flex h-6 w-6 items-center justify-center rounded bg-blue-500/20 ring-1 ring-white/10 flex-shrink-0">
<svg className="lucide lucide-layers w-3 h-3" data-lucide="layers" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</span>
<span className="text-[11px] font-medium">LanderX</span>
<svg className="lucide lucide-badge-check w-3 h-3 text-yellow-300 flex-shrink-0" data-lucide="badge-check" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-md bg-black/40 border border-white/10">
<span className="inline-flex h-6 w-6 items-center justify-center rounded bg-pink-500/20 ring-1 ring-white/10 flex-shrink-0">
<svg className="lucide lucide-gem w-3 h-3" data-lucide="gem" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 3 8 9l4 13 4-13-2.5-6"></path><path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z"></path><path d="M2 9h20"></path></svg>
</span>
<span className="text-[11px] font-medium">Crystal</span>
<svg className="lucide lucide-badge-check w-3 h-3 text-yellow-300 flex-shrink-0" data-lucide="badge-check" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/9d7e01ff-667f-45be-8590-d67a8d2fdeae_3840w.jpg)] bg-cover pt-16 pb-16" id="pricing">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between gap-6">
<div>
<p className="text-sm uppercase tracking-wider text-blue-300/90">Pricing</p>
<h2 className="mt-2 text-3xl lg:text-4xl tracking-tight" style={{fontWeight: '600'}}>Simple plans, no lock‑in</h2>
</div>
</div>
<div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="rounded-2xl border border-white/10 bg-gradient-to-b from-gray-950 to-black p-6">
<div className="flex items-center justify-between">
<h3 className="text-lg tracking-tight" style={{fontWeight: '600'}}>Starter</h3>
<span className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10">Personal</span>
</div>
<p className="mt-1 text-sm text-gray-400">Voice + core commands</p>
<div className="mt-5 flex items-baseline gap-1">
<span className="text-3xl">$0</span><span className="text-sm text-gray-400">forever</span>
</div>
<ul className="mt-5 space-y-2 text-sm text-gray-300">
<li className="flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4 text-teal-300" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                50 actions/day
              </li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4 text-teal-300" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                On‑device mode
              </li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm bg-white/5 text-gray-100 hover:bg-white/10 border border-white/10 transition-all" href="#try">Get started</a>
</div>

<div className="rounded-2xl border border-blue-400/30 bg-gradient-to-b from-gray-900/80 to-black p-6 relative">
<div className="absolute -top-3 right-4 px-2 py-1 rounded-full text-xs bg-blue-400 text-black">Best value</div>
<div className="flex items-center justify-between">
<h3 className="text-lg tracking-tight" style={{fontWeight: '600'}}>Pro</h3>
<span className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10">For power users</span>
</div>
<p className="mt-1 text-sm text-gray-300">Unlimited commands, routines, analytics.</p>
<div className="mt-5 flex items-baseline gap-1">
<span className="text-3xl">$12</span><span className="text-sm text-gray-400">/mo</span>
</div>
<ul className="mt-5 space-y-2 text-sm text-gray-300">
<li className="flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4 text-teal-300" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Unlimited actions
              </li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4 text-teal-300" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Routine builder
              </li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4 text-teal-300" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Detailed analytics
              </li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm bg-blue-400 text-black hover:bg-blue-300 transition-all" href="#try">Try Pro</a>
</div>

<div className="rounded-2xl border border-white/10 bg-gradient-to-b from-gray-950 to-black p-6">
<div className="flex items-center justify-between">
<h3 className="text-lg tracking-tight" style={{fontWeight: '600'}}>Enterprise</h3>
<span className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10">Security &amp; SSO</span>
</div>
<p className="mt-1 text-sm text-gray-400">Policy controls, SSO, priority support.</p>
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
                Audit logs, DLP
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

<footer className="bg-black border-t border-white/10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
<div className="grid md:grid-cols-4 gap-8">
<div className="md:col-span-2">
<a className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md" href="#overview">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
<svg className="w-[18px] h-[18px]" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12h18"></path>
<path d="M3 6h18"></path>
<path d="M3 18h18"></path>
</svg>
</span>
<span className="text-base tracking-tight">ArcOS</span>
</a>
<p className="mt-3 text-sm text-gray-400 max-w-md">
              A minimal, fast assistant that makes your computer feel effortless.
            </p>
</div>
<div>
<h4 className="text-sm" style={{fontWeight: '600'}}>Product</h4>
<ul className="mt-3 space-y-2 text-sm text-gray-400">
<li><a className="hover:text-gray-200" href="#features">Features</a></li>
<li><a className="hover:text-gray-200" href="#product">Commands</a></li>
<li><a className="hover:text-gray-200" href="#analytics">Analytics</a></li>
</ul>
</div>
<div>
<h4 className="text-sm" style={{fontWeight: '600'}}>Company</h4>
<ul className="mt-3 space-y-2 text-sm text-gray-400">
<li><a className="hover:text-gray-200" href="#pricing">Pricing</a></li>
<li><a className="hover:text-gray-200" href="#overview">Status</a></li>
</ul>
</div>
</div>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-xs text-gray-500">© <span id="year">2025</span> ArcOS. All rights reserved.</p>
<div className="flex items-center gap-4 text-xs text-gray-500">
<a className="hover:text-gray-300" href="#">Terms</a>
<a className="hover:text-gray-300" href="#">Privacy</a>
<a className="inline-flex items-center gap-1 hover:text-gray-300" href="#overview">
              Back to top
              <svg className="lucide lucide-arrow-up w-3.5 h-3.5" data-lucide="arrow-up" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg>
</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
