import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Initialize Lucide icons
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

// Header hide on scroll
const header = document.getElementById('site-header');
let lastY = window.pageYOffset;
window.addEventListener('scroll', () => {
  const y = window.pageYOffset;
  if (y > lastY && y > 80) header.classList.add('-translate-y-full');
  else header.classList.remove('-translate-y-full');
  lastY = y;
}, { passive: true });

// Smooth scroll
function smoothScrollTo(targetId) {
  const el = document.querySelector(targetId);
  if (!el) return;
  const headerH = header?.offsetHeight || 64;
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

const spy = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) setActive('#' + entry.target.id);
    });
  },
  { rootMargin: '-45% 0px -50% 0px', threshold: 0.01 }
);

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

// Mini chart
(function initMini() {
  const ctx = document.getElementById('miniChart')?.getContext('2d');
  if (!ctx || typeof Chart === 'undefined') return;
  const gradient = ctx.createLinearGradient(0, 0, 0, 80);
  gradient.addColorStop(0, 'rgba(59,130,246,0.35)');
  gradient.addColorStop(1, 'rgba(59,130,246,0.02)');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: Array.from({ length: 10 }, (_, i) => i + 1),
      datasets: [{
        data: [2, 3, 4, 3, 5, 6, 5, 7, 8, 9],
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
      scales: { x: { display: false }, y: { display: false } }
    }
  });
})();

// Main chart
(function initMain() {
  const ctx = document.getElementById('mainChart')?.getContext('2d');
  if (!ctx || typeof Chart === 'undefined') return;
  const grad = ctx.createLinearGradient(0, 0, 0, 300);
  grad.addColorStop(0, 'rgba(16,185,129,0.35)');
  grad.addColorStop(1, 'rgba(16,185,129,0.02)');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [{
        label: 'Completed',
        data: [14, 12, 16, 18, 22, 20, 24],
        tension: 0.35,
        fill: true,
        backgroundColor: grad,
        borderColor: '#34d399',
        borderWidth: 1.5,
        pointRadius: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: 'rgba(0,0,0,0.8)',
          borderColor: 'rgba(255,255,255,0.08)',
          borderWidth: 1,
          padding: 10,
          titleColor: '#fff',
          bodyColor: '#d1d5db',
          displayColors: false
        }
      },
      scales: {
        x: {
          grid: { color: 'rgba(255,255,255,0.06)' },
          ticks: { color: '#a3a3a3', font: { size: 11 } }
        },
        y: {
          grid: { color: 'rgba(255,255,255,0.06)' },
          ticks: { color: '#a3a3a3', font: { size: 11 } }
        }
      }
    }
  });
})();

// Sparkline
(function initSpark() {
  const ctx = document.getElementById('spark')?.getContext('2d');
  if (!ctx || typeof Chart === 'undefined') return;
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: Array.from({ length: 20 }, (_, i) => i),
      datasets: [{
        data: [98, 97, 98, 97, 98, 99, 98, 98, 99, 98, 98, 99, 98, 98, 99, 98, 99, 98, 99, 98],
        tension: 0.35,
        fill: false,
        borderColor: '#818cf8',
        borderWidth: 1.5,
        pointRadius: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { enabled: false } },
      scales: { x: { display: false }, y: { display: false } }
    }
  });
})();

// Custom checkboxes
const tasksRoot = document.getElementById('task-list');
const counter = document.getElementById('task-counter');

function updateCounter() {
  const total = tasksRoot?.querySelectorAll('[data-task]').length || 0;
  const done = tasksRoot?.querySelectorAll('[data-checkbox][aria-checked="true"]').length || 0;
  if (counter) counter.textContent = `${done}/${total} done`;
}

function toggleCheckbox(btn) {
  const isOn = btn.getAttribute('aria-checked') === 'true';
  const icon = btn.querySelector('svg');
  const row = btn.closest('[data-task]');
  btn.setAttribute('aria-checked', String(!isOn));
  if (icon) icon.style.opacity = isOn ? '0' : '1';
  if (row) {
    const text = row.querySelector('p.text-sm');
    row.classList.toggle('opacity-60', !isOn);
    if (text) text.classList.toggle('line-through', !isOn);
  }
  updateCounter();
}

tasksRoot?.querySelectorAll('[data-checkbox]').forEach((btn) => {
  btn.addEventListener('click', () => toggleCheckbox(btn));
});

updateCounter();

// Clear completed
document.getElementById('clear-completed')?.addEventListener('click', () => {
  tasksRoot?.querySelectorAll('[data-checkbox][aria-checked="true"]').forEach((btn) => {
    const row = btn.closest('[data-task]');
    row?.parentNode?.removeChild(row);
  });
  updateCounter();
});

// Quick add
document.getElementById('add-quick')?.addEventListener('click', () => {
  const title = prompt('New task');
  if (!title) return;
  const node = document.createElement('div');
  node.className = 'flex items-start gap-3 rounded-lg bg-white/5 border border-white/10 px-3 py-2 transition-all hover:bg-white/[0.07]';
  node.setAttribute('data-task', '');
  node.innerHTML = `
    <button type="button" class="relative mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-md bg-black/40 border border-white/15 hover:border-white/25 transition" data-checkbox aria-checked="false" aria-label="Toggle task">
      <svg data-lucide="check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-3.5 h-3.5 opacity-0 transition"><path d="M20 6 9 17l-5-5"></path></svg>
    </button>
    <div class="min-w-0 flex-1">
      <p class="text-sm leading-snug"></p>
      <p class="text-xs text-gray-400">Added just now</p>
    </div>
  `;
  node.querySelector('p.text-sm').textContent = title;
  tasksRoot?.appendChild(node);
  if (window.lucide && window.lucide.createIcons) {
    lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
  }
  const btn = node.querySelector('[data-checkbox]');
  btn?.addEventListener('click', () => toggleCheckbox(btn));
  updateCounter();
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear().toString();

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-blue-400 to-purple-400 z-[60] transition-all duration-300" id="scroll-progress" style={{width: '0%'}}></div>

<header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md border-b bg-black/70 border-white/5 transition-transform duration-300" id="site-header">
<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16">
<div className="h-full flex items-center justify-between">

<a className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md" href="#overview">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-[inset_0_0_0_2px_rgba(255,255,255,0.06)]">
<svg aria-hidden="true" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12h18"></path>
<path d="M3 6h18"></path>
<path d="M3 18h18"></path>
</svg>
</span>
<span className="text-lg tracking-tight" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, sans-serif'}}>ArcTask</span>
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
<button aria-controls="mobile-panel" aria-expanded="false" className="md:hidden p-2 rounded-md transition-colors hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500" id="nav-toggle">
<svg aria-hidden="true" className="w-5 h-5" data-lucide="menu"></svg>
<svg aria-hidden="true" className="w-5 h-5 hidden" data-lucide="x"></svg>
</button>
</div>
</div>
</nav>

<div className="fixed inset-0 z-40 md:hidden pointer-events-none opacity-0 transition-opacity duration-300" id="mobile-panel">
<div className="absolute inset-0 bg-black/60 backdrop-blur-sm" data-close-overlay=""></div>
<div className="absolute inset-x-0 top-0 bg-gray-950/95 backdrop-blur-lg border-b border-white/10 shadow-2xl transition-all duration-300" style={{transform: 'translateY(-8px)'}}>
<div className="px-4 pt-20 pb-6 space-y-1">
<a className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition" data-mobile-link="" href="#features">Features</a>
<a className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition" data-mobile-link="" href="#product">Product</a>
<a className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition" data-mobile-link="" href="#analytics">Analytics</a>
<a className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition" data-mobile-link="" href="#pricing">Pricing</a>
<div className="pt-4">
<a className="block w-full text-center px-4 py-2.5 rounded-full text-sm bg-blue-400 text-black hover:bg-blue-300 transition" href="#try">
            Start free
          </a>
</div>
</div>
</div>
</div>
</header>

<section className="relative overflow-hidden pt-28 pb-14" id="overview">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col gap-10 lg:gap-16 text-center items-center">
<div className="max-w-3xl mx-auto">
<span className="text-xs uppercase tracking-wider text-blue-300/90">New: Sprint templates</span>
<h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, sans-serif', fontWeight: '600'}}>
          Plan. Prioritize. Ship without friction.
        </h1>
<p className="mt-6 text-lg text-gray-300 max-w-xl mx-auto">
          ArcTask keeps teams aligned with clean boards, fast capture, and clear progress—so work actually ships.
        </p>
<div className="flex flex-col sm:flex-row gap-3 mt-8 justify-center">
<a className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm bg-blue-400 text-black hover:bg-blue-300 transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500" href="#try">
            Start free
            <svg className="w-4 h-4" data-lucide="arrow-right"></svg>
</a>
<a className="inline-flex items-center gap-2 hover:bg-white/10 transition-all text-gray-100 bg-white/5 border-white/10 border rounded-full px-5 py-3 backdrop-blur-lg" href="#product">
            See product
            <svg className="w-4 h-4" data-lucide="play"></svg>
</a>
</div>
<div className="mt-8 flex items-center gap-6 justify-center flex-wrap">
<div className="flex -space-x-2">
<img alt="" className="w-9 h-9 rounded-full border-2 border-black object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=160&amp;q=80"/>
<img alt="" className="w-9 h-9 rounded-full border-2 border-black object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=160&amp;q=80"/>
<img alt="" className="w-9 h-9 rounded-full border-2 border-black object-cover" src="https://images.unsplash.com/photo-1500649297466-74794c70acfc?w=160&amp;q=80"/>
<div className="w-9 h-9 rounded-full border-2 border-black bg-blue-400 flex items-center justify-center text-black text-xs">
              2k+
            </div>
</div>
<div className="text-left">
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
<svg className="w-4.5 h-4.5" data-lucide="layout-dashboard"></svg>
</span>
<p className="text-sm">Sprint Alpha</p>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-400/10 px-2 py-1 text-xs text-emerald-300 ring-1 ring-emerald-400/20">
<svg className="w-3.5 h-3.5" data-lucide="check-circle-2"></svg>
                On‑track
              </span>
</div>
</div>

<div className="grid md:grid-cols-2 gap-0">

<div className="border-white/10 md:border-r p-4">
<div className="grid grid-cols-3 gap-3">

<div>
<div className="flex items-center justify-between mb-2">
<p className="text-xs text-gray-400">Backlog</p>
<span className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 border border-white/10">3</span>
</div>
<div className="space-y-2">
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
<canvas id="miniChart"></canvas>
</div>
</div>
</div>

<div className="p-4 border-t md:border-t-0 border-white/10">
<div className="flex items-center justify-between">
<p className="text-sm">My day</p>
<span className="text-xs text-gray-400" id="task-counter">0/4 done</span>
</div>
<div className="mt-3 space-y-2" id="task-list">

<div className="flex items-start gap-3 rounded-lg bg-white/5 border border-white/10 px-3 py-2 transition-all hover:bg-white/[0.07]" data-task="">
<button aria-checked="false" aria-label="Toggle task" className="relative mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-md bg-black/40 border border-white/15 hover:border-white/25 transition" data-checkbox="" type="button">
<svg className="w-3.5 h-3.5 opacity-0 transition" data-lucide="check"></svg>
</button>
<div className="min-w-0 flex-1">
<p className="text-sm leading-snug">Review PR #248</p>
<p className="text-xs text-gray-400">Core UI · Today</p>
</div>
<span className="text-[10px] px-2 py-0.5 rounded bg-amber-400/10 text-amber-300 ring-1 ring-amber-400/20">P2</span>
</div>
<div className="flex items-start gap-3 rounded-lg bg-white/5 border border-white/10 px-3 py-2 transition-all hover:bg-white/[0.07]" data-task="">
<button aria-checked="false" aria-label="Toggle task" className="relative mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-md bg-black/40 border border-white/15 hover:border-white/25 transition" data-checkbox="" type="button">
<svg className="w-3.5 h-3.5 opacity-0 transition" data-lucide="check"></svg>
</button>
<div className="min-w-0 flex-1">
<p className="text-sm leading-snug">Draft weekly release notes</p>
<p className="text-xs text-gray-400">Marketing · Today</p>
</div>
</div>
<div className="flex items-start gap-3 rounded-lg bg-white/5 border border-white/10 px-3 py-2 transition-all hover:bg-white/[0.07]" data-task="">
<button aria-checked="false" aria-label="Toggle task" className="relative mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-md bg-black/40 border border-white/15 hover:border-white/25 transition" data-checkbox="" type="button">
<svg className="w-3.5 h-3.5 opacity-0 transition" data-lucide="check"></svg>
</button>
<div className="min-w-0 flex-1">
<p className="text-sm leading-snug">Sync with QA on test plan</p>
<p className="text-xs text-gray-400">QA · 2:00 PM</p>
</div>
<span className="text-[10px] px-2 py-0.5 rounded bg-emerald-400/10 text-emerald-300 ring-1 ring-emerald-400/20">Ready</span>
</div>
<div className="flex items-start gap-3 rounded-lg bg-white/5 border border-white/10 px-3 py-2 transition-all hover:bg-white/[0.07]" data-task="">
<button aria-checked="false" aria-label="Toggle task" className="relative mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-md bg-black/40 border border-white/15 hover:border-white/25 transition" data-checkbox="" type="button">
<svg className="w-3.5 h-3.5 opacity-0 transition" data-lucide="check"></svg>
</button>
<div className="min-w-0 flex-1">
<p className="text-sm leading-snug">Prepare operations runbook</p>
<p className="text-xs text-gray-400">Ops · Tomorrow</p>
</div>
<span className="text-[10px] px-2 py-0.5 rounded bg-fuchsia-400/10 text-fuchsia-300 ring-1 ring-fuchsia-400/20">Doc</span>
</div>
</div>

<div className="mt-4 flex items-center justify-between gap-2">
<button className="text-xs text-gray-300 hover:text-white px-3 py-2 rounded-lg bg-white/5 border border-white/10 inline-flex items-center gap-2 transition-colors hover:bg-white/10" id="clear-completed" type="button">
<svg className="w-4 h-4" data-lucide="check-check"></svg>
                  Clear completed
                </button>
<button className="text-xs text-blue-300 hover:text-blue-200 inline-flex items-center gap-2 transition-colors" id="add-quick" type="button">
<svg className="w-4 h-4" data-lucide="plus"></svg>
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
<div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
<div>
<p className="text-sm uppercase tracking-wider text-blue-300/90">Features</p>
<h2 className="mt-2 text-3xl lg:text-4xl tracking-tight text-white" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, sans-serif', fontWeight: '600'}}>
          Everything you need to move work forward
        </h2>
</div>
<a className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm bg-white/5 text-gray-100 hover:bg-white/10 border border-white/10 transition-all hover:scale-[1.02]" href="#product">
        Explore product
        <svg className="w-4 h-4" data-lucide="arrow-right"></svg>
</a>
</div>
<div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="group rounded-xl border border-white/10 bg-black/40 p-5 hover:bg-black/50 transition-all hover:border-white/20">
<div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center group-hover:bg-gray-700 transition-colors">
<svg className="w-5 h-5 text-gray-300" data-lucide="columns-3"></svg>
</div>
<h3 className="mt-4 text-lg tracking-tight">Boards &amp; lists</h3>
<p className="mt-2 text-sm text-gray-400">
          Switch seamlessly between Kanban and list to match your focus.
        </p>
</div>
<div className="group rounded-xl border border-white/10 bg-black/40 p-5 hover:bg-black/50 transition-all hover:border-white/20">
<div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center group-hover:bg-gray-700 transition-colors">
<svg className="w-5 h-5 text-gray-300" data-lucide="calendar"></svg>
</div>
<h3 className="mt-4 text-lg tracking-tight">Calendar</h3>
<p className="mt-2 text-sm text-gray-400">
          Deadlines you can trust, with automatic reminders.
        </p>
</div>
<div className="group rounded-xl border border-white/10 bg-black/40 p-5 hover:bg-black/50 transition-all hover:border-white/20">
<div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center group-hover:bg-gray-700 transition-colors">
<svg className="w-5 h-5 text-gray-300" data-lucide="zap"></svg>
</div>
<h3 className="mt-4 text-lg tracking-tight">Automation</h3>
<p className="mt-2 text-sm text-gray-400">
          Reduce busywork with rules and templates that scale.
        </p>
</div>
<div className="group rounded-xl border border-white/10 bg-black/40 p-5 hover:bg-black/50 transition-all hover:border-white/20">
<div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center group-hover:bg-gray-700 transition-colors">
<svg className="w-5 h-5 text-gray-300" data-lucide="plug"></svg>
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
<div className="grid lg:grid-cols-12 gap-8 items-start">
<div className="lg:col-span-5">
<h2 className="text-3xl lg:text-4xl tracking-tight" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, sans-serif', fontWeight: '600'}}>
          Focused by design
        </h2>
<p className="mt-3 text-gray-300">
          Create clarity with a clean, minimal interface. Less noise, more signal—so your team knows what matters now.
        </p>
<ul className="mt-6 space-y-3 text-sm text-gray-300">
<li className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-md bg-white/5 border border-white/10">
<svg className="w-4 h-4 text-teal-300" data-lucide="check"></svg>
</span>
            Quick capture with keyboard everywhere.
          </li>
<li className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-md bg-white/5 border border-white/10">
<svg className="w-4 h-4 text-teal-300" data-lucide="check"></svg>
</span>
            Flexible fields: assignees, labels, dates.
          </li>
<li className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-md bg-white/5 border border-white/10">
<svg className="w-4 h-4 text-teal-300" data-lucide="check"></svg>
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
<div className="rounded-lg bg-white/5 border border-white/10 p-3 hover:bg-white/[0.07] transition-colors">
<p className="text-sm">Batch actions on tasks</p>
</div>
<div className="rounded-lg bg-white/5 border border-white/10 p-3 hover:bg-white/[0.07] transition-colors">
<p className="text-sm">Refine "My Day" suggestions</p>
</div>
<div className="rounded-lg bg-white/5 border border-white/10 p-3 hover:bg-white/[0.07] transition-colors">
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
<div className="rounded-lg bg-white/5 border border-white/10 p-3 hover:bg-white/[0.07] transition-colors">
<p className="text-sm">Dependencies v1</p>
</div>
<div className="rounded-lg bg-white/5 border border-white/10 p-3 hover:bg-white/[0.07] transition-colors">
<p className="text-sm">Notifications center</p>
</div>
<div className="rounded-lg bg-white/5 border border-white/10 p-3 hover:bg-white/[0.07] transition-colors">
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
<div className="rounded-lg bg-white/5 border border-white/10 p-3 hover:bg-white/[0.07] transition-colors">
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
<canvas id="spark"></canvas>
</div>
</div>
</div>
<div className="px-5 pb-5">
<div className="rounded-xl border border-white/10 bg-black/40 p-4 hover:border-white/20 transition-colors">
<div className="flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
<svg className="w-4.5 h-4.5" data-lucide="wand-2"></svg>
</span>
<div className="flex-1 min-w-0">
<p className="text-sm">Automation suggestion</p>
<p className="text-xs text-gray-400">
                  Auto‑assign tasks with "bug" label to QA.
                </p>
</div>
<button className="ml-auto text-xs px-3 py-1.5 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition-colors" type="button">
                Apply
              </button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-gray-950 py-16" id="analytics">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-12 gap-8 items-start">
<div className="lg:col-span-5">
<p className="text-sm uppercase tracking-wider text-blue-300/90">Analytics</p>
<h2 className="mt-2 text-3xl lg:text-4xl tracking-tight" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, sans-serif', fontWeight: '600'}}>
          Progress you can trust
        </h2>
<p className="mt-3 text-gray-300">
          Real‑time insight into throughput, cycle time, and forecast—no spreadsheets required.
        </p>
</div>
<div className="lg:col-span-7 rounded-2xl border border-white/10 bg-gradient-to-b from-gray-950 to-black p-5">
<div className="flex items-center justify-between">
<div>
<p className="text-sm">Throughput</p>
<p className="text-xs text-gray-400">Tasks completed per day</p>
</div>
<div className="inline-flex items-center gap-2 text-xs px-2 py-1 rounded-md bg-white/5 border border-white/10">
<svg className="w-4 h-4 text-emerald-300" data-lucide="trending-up"></svg>
<span className="text-emerald-300">+12%</span>
</div>
</div>
<div className="mt-3">
<div className="rounded-lg border border-white/10 bg-white/5 p-3">
<div className="relative w-full h-64">
<canvas id="mainChart"></canvas>
</div>
</div>
</div>
<div className="mt-4 grid grid-cols-2 gap-3">
<div className="rounded-lg border border-white/10 bg-white/5 p-3 hover:bg-white/[0.07] transition-colors">
<p className="text-xs text-gray-400">Median cycle time</p>
<p className="text-lg mt-1">1.9 days</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-3 hover:bg-white/[0.07] transition-colors">
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
<div className="mb-8">
<p className="text-sm uppercase tracking-wider text-blue-300/90">Pricing</p>
<h2 className="mt-2 text-3xl lg:text-4xl tracking-tight" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, sans-serif', fontWeight: '600'}}>
        Simple plans, no surprises
      </h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="rounded-2xl border border-white/10 bg-gradient-to-b from-gray-950 to-black p-6 hover:border-white/20 transition-all">
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
<svg className="w-4 h-4 text-teal-300" data-lucide="check"></svg>
            Unlimited tasks
          </li>
<li className="flex items-center gap-2">
<svg className="w-4 h-4 text-teal-300" data-lucide="check"></svg>
            2 boards
          </li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm bg-white/5 text-gray-100 hover:bg-white/10 border border-white/10 transition-all hover:scale-[1.02]" href="#try">
          Get started
        </a>
</div>

<div className="rounded-2xl border border-blue-400/30 bg-gradient-to-b from-gray-900/80 to-black p-6 relative hover:border-blue-400/50 transition-all">
<div className="absolute -top-3 right-4 px-2 py-1 rounded-full text-xs bg-blue-400 text-black">
          Best value
        </div>
<div className="flex items-center justify-between">
<h3 className="text-lg tracking-tight">Pro</h3>
<span className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10">For teams</span>
</div>
<p className="mt-1 text-sm text-gray-300">
          Everything in Starter plus advanced reports and automations.
        </p>
<div className="mt-5 flex items-baseline gap-1">
<span className="text-3xl">$12</span><span className="text-sm text-gray-400">/user/mo</span>
</div>
<ul className="mt-5 space-y-2 text-sm text-gray-300">
<li className="flex items-center gap-2">
<svg className="w-4 h-4 text-teal-300" data-lucide="check"></svg>
            Unlimited boards
          </li>
<li className="flex items-center gap-2">
<svg className="w-4 h-4 text-teal-300" data-lucide="check"></svg>
            Advanced analytics
          </li>
<li className="flex items-center gap-2">
<svg className="w-4 h-4 text-teal-300" data-lucide="check"></svg>
            Automations
          </li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm bg-blue-400 text-black hover:bg-blue-300 transition-all hover:scale-[1.02]" href="#try">
          Try Pro
        </a>
</div>

<div className="rounded-2xl border border-white/10 bg-gradient-to-b from-gray-950 to-black p-6 hover:border-white/20 transition-all">
<div className="flex items-center justify-between">
<h3 className="text-lg tracking-tight">Enterprise</h3>
<span className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10">Security &amp; SSO</span>
</div>
<p className="mt-1 text-sm text-gray-400">
          Scale confidently with controls, SSO, and priority support.
        </p>
<div className="mt-5 flex items-baseline gap-1">
<span className="text-3xl">Custom</span>
</div>
<ul className="mt-5 space-y-2 text-sm text-gray-300">
<li className="flex items-center gap-2">
<svg className="w-4 h-4 text-teal-300" data-lucide="check"></svg>
            SSO, SCIM
          </li>
<li className="flex items-center gap-2">
<svg className="w-4 h-4 text-teal-300" data-lucide="check"></svg>
            Data export &amp; DLP
          </li>
<li className="flex items-center gap-2">
<svg className="w-4 h-4 text-teal-300" data-lucide="check"></svg>
            Priority support
          </li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm bg-white/5 text-gray-100 hover:bg-white/10 border border-white/10 transition-all hover:scale-[1.02]" href="#try">
          Contact sales
        </a>
</div>
</div>
</div>
</section>

<footer className="bg-black border-t border-white/10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="grid md:grid-cols-4 gap-8">
<div className="md:col-span-2">
<a className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md" href="#overview">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-[inset_0_0_0_2px_rgba(255,255,255,0.06)]">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12h18"></path>
<path d="M3 6h18"></path>
<path d="M3 18h18"></path>
</svg>
</span>
<span className="text-lg tracking-tight" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, sans-serif'}}>ArcTask</span>
</a>
<p className="mt-3 text-sm text-gray-400 max-w-md">
          A clean, fast way to plan, prioritize, and ship—together.
        </p>
</div>
<div>
<h4 className="text-sm">Product</h4>
<ul className="mt-3 space-y-2 text-sm text-gray-400">
<li><a className="hover:text-gray-200 transition-colors" href="#features">Features</a></li>
<li><a className="hover:text-gray-200 transition-colors" href="#product">Product</a></li>
<li><a className="hover:text-gray-200 transition-colors" href="#analytics">Analytics</a></li>
</ul>
</div>
<div>
<h4 className="text-sm">Company</h4>
<ul className="mt-3 space-y-2 text-sm text-gray-400">
<li><a className="hover:text-gray-200 transition-colors" href="#pricing">Pricing</a></li>
<li><a className="hover:text-gray-200 transition-colors" href="#overview">Status</a></li>
</ul>
</div>
</div>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
<p className="text-xs text-gray-500">
        © <span id="year">2025</span> ArcTask. All rights reserved.
      </p>
<div className="flex items-center gap-4 text-xs text-gray-500">
<a className="hover:text-gray-300 transition-colors" href="#">Terms</a>
<a className="hover:text-gray-300 transition-colors" href="#">Privacy</a>
<a className="inline-flex items-center gap-1 hover:text-gray-300 transition-colors" href="#overview">
          Back to top
          <svg className="w-3.5 h-3.5" data-lucide="arrow-up"></svg>
</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
