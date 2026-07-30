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
      
// Tailwind base color variables (used in inline styles if needed)



                      // Static rendering of days for visual only (no dates)
                      document.addEventListener('DOMContentLoaded', () => {
                        const container = document.currentScript.previousElementSibling;
                        const frag = document.createDocumentFragment();
                        for (let i=1;i<=28;i++){ const d=document.createElement('div'); d.className='h-8 rounded-md bg-slate-50 dark:bg-slate-800 flex items-center justify-center'; d.textContent=i; frag.appendChild(d); }
                        container.replaceWith(frag);
                      });
                    


      // Initialize icons
      document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) { window.lucide.createIcons(); }
        const y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();
      });

      // Intersection Observer for animations
      const io = new IntersectionObserver((entries) => {
        entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in-view'); io.unobserve(e.target); } });
      }, { threshold: 0.1 });
      document.querySelectorAll('.will-animate').forEach(el => io.observe(el));

      // Theme: respect system, persist in localStorage
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
      const root = document.documentElement;
      const applyTheme = (dark) => {
        root.classList.toggle('dark', dark);
        document.querySelectorAll('#theme-toggle, #theme-toggle-m, #theme-toggle-footer').forEach(btn => {
          if (btn) btn.setAttribute('aria-pressed', dark ? 'true' : 'false');
        });
      };
      const saved = localStorage.getItem('theme');
      applyTheme(saved ? saved === 'dark' : prefersDark.matches);
      const toggleTheme = () => {
        const next = !root.classList.contains('dark');
        applyTheme(next);
        localStorage.setItem('theme', next ? 'dark' : 'light');
      };
      ['theme-toggle','theme-toggle-m','theme-toggle-footer'].forEach(id => {
        const b = document.getElementById(id); if (b) b.addEventListener('click', toggleTheme);
      });
      prefersDark.addEventListener && prefersDark.addEventListener('change', (e) => {
        const saved = localStorage.getItem('theme');
        if (!saved) applyTheme(e.matches);
      });

      // Mobile menu
      const menuBtn = document.getElementById('menu-btn');
      const mobileMenu = document.getElementById('mobile-menu');
      if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
          const open = mobileMenu.classList.toggle('hidden') ? 'false' : 'true';
          menuBtn.setAttribute('aria-expanded', open);
        });
        mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
          mobileMenu.classList.add('hidden'); menuBtn.setAttribute('aria-expanded','false');
        }));
      }

      // Modal controls
      const openers = document.querySelectorAll('[data-open-modal]');
      const modal = document.getElementById('demo-modal');
      const closeModal = () => { modal && modal.classList.add('hidden'); document.body.classList.remove('overflow-hidden'); };
      const openModal = () => { modal && modal.classList.remove('hidden'); document.body.classList.add('overflow-hidden'); setTimeout(() => { const first = modal.querySelector('input,textarea,button'); first && first.focus(); }, 50); };
      openers.forEach(btn => btn.addEventListener('click', openModal));
      modal?.addEventListener('click', (e) => { if (e.target === modal || e.target.hasAttribute('data-close-modal')) closeModal(); });
      document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal(); });

      // Simple tilt effect for mock devices
      document.querySelectorAll('[data-tilt]').forEach(card => {
        let rect;
        const onMove = (e) => {
          rect = rect || card.getBoundingClientRect();
          const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
          const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
          card.style.transform = `rotateX(${(-y * 4).toFixed(2)}deg) rotateY(${(x * 4).toFixed(2)}deg) translateZ(0)`;
        };
        const reset = () => { card.style.transform = ''; rect = null; };
        card.addEventListener('mousemove', onMove);
        card.addEventListener('mouseleave', reset);
        card.addEventListener('touchstart', () => {}, { passive: true });
      });

      // Button ripple
      document.querySelectorAll('.btn-ripple, .btn-primary, .btn-outline').forEach(btn => {
        btn.style.overflow = 'hidden'; btn.style.position = 'relative';
        btn.addEventListener('click', function(e) {
          const circle = document.createElement('span');
          const d = Math.max(this.clientWidth, this.clientHeight);
          circle.style.width = circle.style.height = d + 'px';
          circle.style.position = 'absolute';
          circle.style.left = e.offsetX - d/2 + 'px';
          circle.style.top = e.offsetY - d/2 + 'px';
          circle.style.background = 'rgba(99,102,241,0.2)';
          circle.style.borderRadius = '50%';
          circle.style.transform = 'scale(0)';
          circle.style.transition = 'transform 400ms ease, opacity 600ms ease';
          this.appendChild(circle);
          requestAnimationFrame(() => { circle.style.transform = 'scale(1)'; circle.style.opacity = '0'; });
          setTimeout(() => circle.remove(), 600);
        });
      });

      // Chart
      const ctx = document.getElementById('growthChart');
      if (ctx && window.Chart) {
        const style = getComputedStyle(document.documentElement);
        const text = getComputedStyle(document.body).color;
        const grid = style.getPropertyValue('--bg-muted') || '#E2E8F0';
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['W1','W2','W3','W4','W5','W6','W7','W8'],
            datasets: [
              { label: 'Conversations', data: [50, 80, 120, 140, 180, 230, 280, 340], borderColor: '#6366F1', backgroundColor: 'rgba(99,102,241,0.15)', tension: 0.35, fill: true },
              { label: 'Bookings', data: [12, 22, 34, 41, 55, 72, 95, 120], borderColor: '#8B5CF6', backgroundColor: 'rgba(139,92,246,0.15)', tension: 0.35, fill: true }
            ]
          },
          options: {
            responsive: true,
            plugins: { legend: { labels: { color: text }}, tooltip: { mode: 'index', intersect: false } },
            interaction: { mode: 'index', intersect: false },
            scales: {
              x: { ticks: { color: text }, grid: { color: 'rgba(148,163,184,0.2)' } },
              y: { ticks: { color: text }, grid: { color: 'rgba(148,163,184,0.2)' } }
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
      

<a className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-white focus:text-slate-900 dark:focus:bg-slate-800 dark:focus:text-white px-3 py-2 rounded-md shadow" href="#hero">Skip to content</a>

<header className="fixed inset-x-0 top-0 z-50 transition-all" id="site-header">
<nav className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="flex items-center justify-between py-4">

<a aria-label="Cura Home" className="flex items-center gap-2 group" href="#hero">
<span aria-hidden="true" className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-md floating">
<i className="h-5 w-5" data-lucide="sparkles"></i>
</span>
<span className="text-xl font-semibold tracking-tight">Cura</span>
</a>

<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md px-1 py-1" href="#solution">Product</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md px-1 py-1" href="#platform">Solutions</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md px-1 py-1" href="#pricing">Pricing</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md px-1 py-1" href="#testimonials">Case Studies</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md px-1 py-1" href="#cta">Contact</a>
</div>

<div className="hidden lg:flex items-center gap-3">
<button aria-label="Toggle dark mode" aria-pressed="false" className="btn-outline ring-focus inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm bg-white/70 dark:bg-slate-900/70 hover:bg-white dark:hover:bg-slate-800 transition-colors" id="theme-toggle">
<i className="h-4 w-4" data-lucide="moon"></i><span className="hidden xl:inline">Theme</span>
</button>
<a className="btn-outline ring-focus rounded-xl px-4 py-2 text-sm font-semibold text-slate-900 dark:text-slate-200 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors" href="#hero">Book a Demo</a>
<a className="btn-primary ring-focus rounded-xl px-4 py-2 text-sm font-semibold text-white shadow hover:shadow-md transition-all" href="#pricing">Start Free</a>
</div>

<button aria-controls="mobile-menu" aria-expanded="false" className="lg:hidden inline-flex items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500" id="menu-btn">
<i className="h-6 w-6" data-lucide="menu"></i><span className="sr-only">Open menu</span>
</button>
</div>
</nav>

<div className="lg:hidden hidden border-t border-slate-200/70 dark:border-slate-700/50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md" id="mobile-menu">
<div className="mx-auto max-w-7xl px-6 py-4 flex flex-col gap-3">
<a className="text-sm font-medium py-2" href="#solution">Product</a>
<a className="text-sm font-medium py-2" href="#platform">Solutions</a>
<a className="text-sm font-medium py-2" href="#pricing">Pricing</a>
<a className="text-sm font-medium py-2" href="#testimonials">Case Studies</a>
<a className="text-sm font-medium py-2" href="#cta">Contact</a>
<div className="flex items-center gap-3 pt-2">
<button className="btn-outline ring-focus inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm bg-white/70 dark:bg-slate-900/70" id="theme-toggle-m">
<i className="h-4 w-4" data-lucide="moon"></i>Theme
            </button>
<a className="btn-outline ring-focus rounded-xl px-4 py-2 text-sm font-semibold" href="#hero">Book a Demo</a>
<a className="btn-primary ring-focus rounded-xl px-4 py-2 text-sm font-semibold text-white" href="#pricing">Start Free</a>
</div>
</div>
</div>
</header>
<main id="content">

<section className="relative overflow-hidden gradient-bg-soft pt-28 sm:pt-32" id="hero">
<div aria-hidden="true" className="pointer-events-none absolute -top-24 right-1/3 h-72 w-72 rounded-full gradient-glow"></div>
<div aria-hidden="true" className="pointer-events-none absolute -bottom-24 left-1/4 h-80 w-80 rounded-full gradient-glow"></div>
<div className="container mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
<div className="will-animate">
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
                One Inbox. Every Channel. Powered by AI.
              </h1>
<p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                Stop juggling WhatsApp, LINE, Instagram, and phone calls. Cura brings every conversation into one AI-powered inbox—so you never miss a patient, lead, or booking.
              </p>
<div className="mt-8 flex flex-col sm:flex-row gap-3">
<a className="btn-primary btn-ripple ring-focus inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white shadow hover:shadow-lg transition-all" href="#pricing">
<i className="h-4 w-4 mr-2" data-lucide="rocket"></i>Start Free
                </a>
<button className="btn-outline btn-ripple ring-focus inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-slate-900 dark:text-slate-200 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all" data-open-modal="demo-modal">
<i className="h-4 w-4 mr-2" data-lucide="calendar"></i>Book a Demo
                </button>
</div>
<p className="mt-3 text-sm text-slate-500 dark:text-slate-400">No credit card required • HIPAA/PDPA compliant</p>

<div className="mt-10 grid grid-cols-3 sm:grid-cols-6 gap-6 opacity-80">
<img alt="Clinic partner logo placeholder" className="h-8 w-full object-cover rounded-md" src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=400&auto=format&fit=crop" />
<img alt="Healthcare group logo placeholder" className="h-8 w-full object-cover rounded-md" src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=400&auto=format&fit=crop" />
<img alt="Partner logo placeholder" className="h-8 w-full object-cover rounded-md" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
<img alt="Partner logo placeholder" className="h-8 w-full object-cover rounded-md" src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=400&auto=format&fit=crop" />
<img alt="Partner logo placeholder" className="h-8 w-full object-cover rounded-md" src="https://images.unsplash.com/photo-1549923746-c502d488b3ea?q=80&w=400&auto=format&fit=crop" />
<img alt="Partner logo placeholder" className="h-8 w-full object-cover rounded-md" src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=400&auto=format&fit=crop" />
</div>
</div>

<div className="relative will-animate">
<div aria-hidden="true" className="absolute -inset-8 hidden lg:block rounded-3xl bg-gradient-to-br from-indigo-500/10 to-violet-500/10 blur-2xl"></div>
<div className="relative grid place-items-center gap-6">

<div className="browser-frame device-tilt bg-white dark:bg-slate-900 w-full max-w-xl mx-auto hover:-rotate-1" data-tilt="">
<div className="browser-chrome flex items-center gap-2 px-3">
<span className="h-3 w-3 rounded-full bg-red-400/80"></span>
<span className="h-3 w-3 rounded-full bg-amber-400/80"></span>
<span className="h-3 w-3 rounded-full bg-emerald-400/80"></span>
<div className="ml-3 flex-1 rounded-md bg-slate-100 dark:bg-slate-800 h-6"></div>
</div>
<div className="p-4">
<div className="flex items-center gap-2 mb-3">
<span className="px-2 py-1 text-xs rounded-full border border-slate-200 dark:border-slate-700">All</span>
<span className="px-2 py-1 text-xs rounded-full bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-500/20">WhatsApp</span>
<span className="px-2 py-1 text-xs rounded-full border border-slate-200 dark:border-slate-700">LINE</span>
<span className="px-2 py-1 text-xs rounded-full border border-slate-200 dark:border-slate-700">Instagram</span>
</div>
<div className="grid grid-cols-3 gap-3">
<aside className="col-span-1 border-r border-slate-200 dark:border-slate-700 pr-3">
<div className="space-y-2">
<div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800/60">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-6 w-6 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 flex items-center justify-center text-[10px] font-semibold">WA</span>
<p className="text-xs font-medium">Maria</p>
</div>
<span className="text-[10px] text-slate-400">1m</span>
</div>
<p className="text-[11px] text-slate-500 truncate mt-1">Can I book at 3pm today?</p>
</div>
<div className="p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/60 transition">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-6 w-6 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 flex items-center justify-center text-[10px] font-semibold">LI</span>
<p className="text-xs font-medium">Kenji</p>
</div>
<span className="text-[10px] text-slate-400">6m</span>
</div>
<p className="text-[11px] text-slate-500 truncate mt-1">Do you have weekend slots?</p>
</div>
<div className="p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/60 transition">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-6 w-6 rounded-full bg-pink-500/10 text-pink-600 dark:text-pink-300 flex items-center justify-center text-[10px] font-semibold">IG</span>
<p className="text-xs font-medium">Emily</p>
</div>
<span className="text-[10px] text-slate-400">10m</span>
</div>
<p className="text-[11px] text-slate-500 truncate mt-1">How much is initial consult?</p>
</div>
</div>
</aside>
<div className="col-span-2">
<div className="h-56 rounded-lg border border-slate-200 dark:border-slate-700 p-3 overflow-hidden">
<div className="space-y-3 text-[13px]">
<div className="flex gap-2 items-start">
<span className="h-6 w-6 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 flex items-center justify-center text-[10px] font-semibold">AI</span>
<div className="bg-slate-50 dark:bg-slate-800/60 px-3 py-2 rounded-lg max-w-xs">Hi Maria! I can help you book an appointment. Are you available today at 3pm or 5pm?</div>
</div>
<div className="flex gap-2 items-start justify-end">
<div className="bg-indigo-600 text-white px-3 py-2 rounded-lg max-w-xs">3pm works. Thank you!</div>
<span className="h-6 w-6 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 flex items-center justify-center text-[10px] font-semibold">WA</span>
</div>
<div className="flex gap-2 items-start">
<span className="h-6 w-6 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 flex items-center justify-center text-[10px] font-semibold">AI</span>
<div className="bg-slate-50 dark:bg-slate-800/60 px-3 py-2 rounded-lg max-w-xs">Great—booking you for 3pm today. You’ll receive a confirmation shortly.</div>
</div>
</div>
<div className="mt-3 border-t border-slate-200 dark:border-slate-700 pt-2 flex items-center justify-between">
<div className="text-[11px] text-slate-500">AI Assist: “Offer same-day options” • “Send confirmation”</div>
<button className="text-xs text-indigo-600 hover:underline flex items-center gap-1"><i className="h-3.5 w-3.5" data-lucide="sparkle"></i>Auto-reply</button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="iphone-frame device-tilt hover:rotate-1 mx-auto" data-tilt="">
<div className="iphone-screen">
<div className="h-6 bg-slate-100 dark:bg-slate-800"></div>
<div className="px-3 py-2 flex items-center gap-2 border-b border-slate-200 dark:border-slate-700">
<span className="h-7 w-7 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs">AI</span>
<div>
<p className="text-[13px] font-medium">Cura AI Receptionist</p>
<p className="text-[11px] text-emerald-600">online</p>
</div>
</div>
<div className="p-3 space-y-2 text-[13px]">
<div className="max-w-[70%] bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-2xl rounded-bl-sm">Hello! This is Cura AI Receptionist. Are you confirming your 3pm today?</div>
<div className="max-w-[70%] ml-auto bg-indigo-600 text-white px-3 py-2 rounded-2xl rounded-br-sm">Yes, please confirm.</div>
<div className="max-w-[70%] bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-2xl rounded-bl-sm">All set. See you at 3pm! Reply 1 to reschedule.</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20 lg:py-28 bg-[#F8FAFC] dark:bg-[#0F172A]" id="problem">
<div className="container mx-auto max-w-7xl px-6 lg:px-8">
<div className="max-w-3xl will-animate">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Every missed customer is missed revenue.</h2>
<p className="mt-4 text-slate-600 dark:text-slate-300">Staff shortages cost clinics and providers millions every year. Missed calls, unanswered chats, lost bookings — Cura solves this instantly.</p>
</div>
<div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="will-animate rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-5 shadow-sm">
<p className="text-3xl font-semibold tracking-tight">40%</p>
<p className="text-sm text-slate-600 dark:text-slate-400 mt-1">— of calls go unanswered</p>
</div>
<div className="will-animate rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-5 shadow-sm">
<p className="text-3xl font-semibold tracking-tight">2+ hours</p>
<p className="text-sm text-slate-600 dark:text-slate-400 mt-1">— average response time</p>
</div>
<div className="will-animate rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-5 shadow-sm">
<p className="text-3xl font-semibold tracking-tight">$50K+</p>
<p className="text-sm text-slate-600 dark:text-slate-400 mt-1">— annual revenue lost per clinic</p>
</div>
<div className="will-animate rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-5 shadow-sm">
<p className="text-3xl font-semibold tracking-tight">3x</p>
<p className="text-sm text-slate-600 dark:text-slate-400 mt-1">— higher customer acquisition costs</p>
</div>
</div>
<div className="mt-10 grid gap-4 sm:grid-cols-2">
<div className="will-animate flex items-start gap-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-4">
<i className="h-5 w-5 text-slate-500" data-lucide="phone-off"></i>
<div>
<p className="font-medium">Missed Calls</p>
<p className="text-sm text-slate-600 dark:text-slate-400">Every unanswered call is a potential customer lost forever</p>
</div>
</div>
<div className="will-animate flex items-start gap-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-4">
<i className="h-5 w-5 text-slate-500" data-lucide="hourglass"></i>
<div>
<p className="font-medium">Long Response Times</p>
<p className="text-sm text-slate-600 dark:text-slate-400">Customers expect instant responses, not hours of waiting</p>
</div>
</div>
<div className="will-animate flex items-start gap-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-4">
<i className="h-5 w-5 text-slate-500" data-lucide="user-x"></i>
<div>
<p className="font-medium">Staff Shortage</p>
<p className="text-sm text-slate-600 dark:text-slate-400">Hiring + training reception is expensive and slow</p>
</div>
</div>
<div className="will-animate flex items-start gap-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-4">
<i className="h-5 w-5 text-slate-500" data-lucide="calendar-x"></i>
<div>
<p className="font-medium">Lost Bookings</p>
<p className="text-sm text-slate-600 dark:text-slate-400">Unanswered inquiries = missed appointments</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20 lg:py-28" id="solution">
<div className="container mx-auto max-w-7xl px-6 lg:px-8">
<div className="max-w-3xl will-animate">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">One inbox. Infinite staff power.</h2>
<p className="mt-4 text-slate-600 dark:text-slate-300">All your channels — WhatsApp, LINE, Instagram, Messenger, phone, web chat — in one AI-powered inbox that never sleeps.</p>
</div>
<div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="will-animate rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-md transition hover:-translate-y-0.5">
<i className="h-6 w-6 text-indigo-600 mb-3 floating" data-lucide="zap"></i>
<h3 className="font-medium">Instant Response</h3>
<p className="text-sm text-slate-600 dark:text-slate-400 mt-1">AI replies in seconds</p>
</div>
<div className="will-animate rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-md transition hover:-translate-y-0.5">
<i className="h-6 w-6 text-indigo-600 mb-3 floating" data-lucide="clock"></i>
<h3 className="font-medium">24/7 Availability</h3>
<p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Never miss a moment</p>
</div>
<div className="will-animate rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-md transition hover:-translate-y-0.5">
<i className="h-6 w-6 text-indigo-600 mb-3 floating" data-lucide="shield-check"></i>
<h3 className="font-medium">HIPAA/PDPA Compliant</h3>
<p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Trust by design</p>
</div>
<div className="will-animate rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-md transition hover:-translate-y-0.5">
<i className="h-6 w-6 text-indigo-600 mb-3 floating" data-lucide="calendar-check-2"></i>
<h3 className="font-medium">Smart Scheduling</h3>
<p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Bookings on autopilot</p>
</div>
<div className="will-animate rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-md transition hover:-translate-y-0.5">
<i className="h-6 w-6 text-indigo-600 mb-3 floating" data-lucide="users"></i>
<h3 className="font-medium">Scalable Team</h3>
<p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Unlimited conversations</p>
</div>
<div className="will-animate rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-md transition hover:-translate-y-0.5">
<i className="h-6 w-6 text-indigo-600 mb-3 floating" data-lucide="trending-up"></i>
<h3 className="font-medium">Revenue Growth</h3>
<p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Turn chats into bookings</p>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20 lg:py-28 bg-[#F8FAFC] dark:bg-[#0F172A]" id="feature-ai">
<div className="container mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-10 items-center">

<div className="will-animate flex justify-center">
<div className="iphone-frame device-tilt hover:-rotate-1" data-tilt="">
<div className="iphone-screen">
<div className="h-16 bg-gradient-to-r from-indigo-600 to-violet-600 text-white flex items-center justify-center gap-2">
<i className="h-5 w-5" data-lucide="phone"></i><span className="text-sm">Cura AI Receptionist — Active</span>
</div>
<div className="p-5 space-y-4">
<div className="h-28 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
<svg aria-hidden="true" height="48" viewBox="0 0 160 48" width="160">
<defs>
<lineargradient id="g" x1="0" x2="1">
<stop offset="0" stop-color="#6366F1"></stop>
<stop offset="1" stop-color="#8B5CF6"></stop>
</lineargradient>
</defs>
<path d="M0 24 Q20 2 40 24 T80 24 T120 24 T160 24" fill="none" stroke="url(#g)" strokeWidth="2.5">
<animate attributename="d" dur="3s" repeatcount="indefinite" values="M0 24 Q20 2 40 24 T80 24 T120 24 T160 24;
                                    M0 24 Q20 46 40 24 T80 24 T120 24 T160 24;
                                    M0 24 Q20 2 40 24 T80 24 T120 24 T160 24"></animate>
</path>
</svg>
</div>
<div className="rounded-lg border border-slate-200 dark:border-slate-700 p-3">
<p className="text-xs text-slate-600 dark:text-slate-300">Transcribing...</p>
<p className="text-sm mt-1">“Hi, I’d like to book a dental cleaning next Tuesday morning.”</p>
</div>
<div className="flex gap-2">
<button className="btn-primary btn-ripple ring-focus flex-1 rounded-xl px-4 py-2 text-sm text-white">Answer</button>
<button className="btn-outline btn-ripple ring-focus flex-1 rounded-xl px-4 py-2 text-sm">Voicemail</button>
</div>
</div>
</div>
</div>
</div>

<div className="will-animate">
<h3 className="text-3xl sm:text-4xl font-semibold tracking-tight">AI Receptionist for Voice & Messaging</h3>
<p className="mt-4 text-slate-600 dark:text-slate-300">Cura answers calls in natural voice, handles FAQs, books appointments, and routes complex cases to your team — across every channel.</p>
<ul className="mt-6 space-y-3">
<li className="flex items-start gap-3"><i className="h-5 w-5 text-emerald-500 mt-0.5" data-lucide="check-circle"></i><span>Natural conversations in multiple languages</span></li>
<li className="flex items-start gap-3"><i className="h-5 w-5 text-emerald-500 mt-0.5" data-lucide="check-circle"></i><span>Answers FAQs instantly</span></li>
<li className="flex items-start gap-3"><i className="h-5 w-5 text-emerald-500 mt-0.5" data-lucide="check-circle"></i><span>Books and confirms appointments</span></li>
<li className="flex items-start gap-3"><i className="h-5 w-5 text-emerald-500 mt-0.5" data-lucide="check-circle"></i><span>Transfers to human staff seamlessly</span></li>
</ul>
<div className="mt-6 flex flex-wrap items-center gap-2 text-xs">
<span className="rounded-full px-3 py-1 border border-slate-200 dark:border-slate-700">HIPAA</span>
<span className="rounded-full px-3 py-1 border border-slate-200 dark:border-slate-700">PDPA</span>
<span className="rounded-full px-3 py-1 border border-slate-200 dark:border-slate-700">Enterprise-grade security</span>
</div>
<div className="mt-8 flex gap-3">
<button className="btn-primary btn-ripple ring-focus rounded-xl px-4 py-2 text-sm text-white">Try the Voice Demo</button>
<button className="btn-outline btn-ripple ring-focus rounded-xl px-4 py-2 text-sm">See Messaging Flow</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20 lg:py-28" id="feature-inbox">
<div className="container mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-10 items-center">
<div className="will-animate">
<h3 className="text-3xl sm:text-4xl font-semibold tracking-tight">Unified Inbox for WhatsApp, LINE, Instagram & more</h3>
<p className="mt-4 text-slate-600 dark:text-slate-300">A shared, AI-assisted inbox that captures every conversation from every channel — with history, context, and smart routing.</p>
<ul className="mt-6 space-y-3">
<li className="flex items-start gap-3"><i className="h-5 w-5 text-indigo-600 mt-0.5" data-lucide="inbox"></i><span>Channel unification & context</span></li>
<li className="flex items-start gap-3"><i className="h-5 w-5 text-indigo-600 mt-0.5" data-lucide="git-branch"></i><span>Smart routing & priorities</span></li>
<li className="flex items-start gap-3"><i className="h-5 w-5 text-indigo-600 mt-0.5" data-lucide="users-2"></i><span>Shared inbox for teams</span></li>
</ul>
<div className="mt-8">
<button className="group text-indigo-600 hover:text-indigo-700 dark:text-indigo-300 dark:hover:text-indigo-200 font-medium inline-flex items-center gap-1 ring-focus rounded-md" data-open-modal="demo-modal">
                  See the Inbox →
                </button>
</div>
</div>
<div className="will-animate">
<div className="browser-frame bg-white dark:bg-slate-900 p-4 device-tilt hover:rotate-1" data-tilt="">
<div className="browser-chrome flex items-center gap-2 px-3">
<span className="h-3 w-3 rounded-full bg-red-400/80"></span>
<span className="h-3 w-3 rounded-full bg-amber-400/80"></span>
<span className="h-3 w-3 rounded-full bg-emerald-400/80"></span>
<div className="ml-3 flex-1 rounded-md bg-slate-100 dark:bg-slate-800 h-6"></div>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="px-2 py-1 text-xs rounded-full bg-slate-100 dark:bg-slate-800">All</span>
<span className="px-2 py-1 text-xs rounded-full bg-slate-100 dark:bg-slate-800">WhatsApp</span>
<span className="px-2 py-1 text-xs rounded-full bg-slate-100 dark:bg-slate-800">LINE</span>
<span className="px-2 py-1 text-xs rounded-full bg-slate-100 dark:bg-slate-800">SMS</span>
</div>
<div className="flex items-center gap-2">
<span className="text-[11px] text-slate-500">AI Assist</span>
<i className="h-4 w-4 text-indigo-600" data-lucide="bot"></i>
</div>
</div>
<div className="mt-4 grid md:grid-cols-2 gap-4">
<div className="rounded-lg border border-slate-200 dark:border-slate-700 p-3">
<p className="text-xs font-medium">Queue</p>
<div className="mt-2 space-y-2">
<div className="flex items-center justify-between rounded-md p-2 bg-slate-50 dark:bg-slate-800/60">
<div className="flex items-center gap-2">
<span className="h-6 w-6 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 text-[10px] font-semibold flex items-center justify-center">WA</span>
<div>
<p className="text-xs font-medium">James</p>
<p className="text-[11px] text-slate-500">Needs whitening info</p>
</div>
</div>
<span className="text-[10px] text-slate-400">New</span>
</div>
<div className="flex items-center justify-between rounded-md p-2 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition">
<div className="flex items-center gap-2">
<span className="h-6 w-6 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 text-[10px] font-semibold flex items-center justify-center">LI</span>
<div>
<p className="text-xs font-medium">Aiko</p>
<p className="text-[11px] text-slate-500">Checkup schedule?</p>
</div>
</div>
<span className="text-[10px] text-slate-400">2m</span>
</div>
</div>
</div>
<div className="rounded-lg border border-slate-200 dark:border-slate-700 p-3">
<p className="text-xs font-medium">AI Suggestions</p>
<div className="mt-2 space-y-2 text-[12px]">
<div className="p-2 rounded-md bg-indigo-50 text-indigo-800 dark:bg-indigo-500/10 dark:text-indigo-200 flex items-start gap-2">
<i className="h-4 w-4" data-lucide="message-square"></i>
                          “Send insurance coverage details”
                        </div>
<div className="p-2 rounded-md bg-indigo-50 text-indigo-800 dark:bg-indigo-500/10 dark:text-indigo-200 flex items-start gap-2">
<i className="h-4 w-4" data-lucide="calendar-plus"></i>
                          “Offer next available slot on Friday”
                        </div>
<div className="p-2 rounded-md bg-indigo-50 text-indigo-800 dark:bg-indigo-500/10 dark:text-indigo-200 flex items-start gap-2">
<i className="h-4 w-4" data-lucide="ticket"></i>
                          “Apply new patient promo”
                        </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20 lg:py-28 bg-[#F8FAFC] dark:bg-[#0F172A]" id="feature-scheduling">
<div className="container mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-10 items-center">
<div className="will-animate">
<h3 className="text-3xl sm:text-4xl font-semibold tracking-tight">Bookings that book themselves</h3>
<p className="mt-4 text-slate-600 dark:text-slate-300">Cura automates appointment booking, reminders, and follow-ups to reduce no-shows and increase revenue — without lifting a finger.</p>
<ul className="mt-6 space-y-3">
<li className="flex items-start gap-3"><i className="h-5 w-5 text-indigo-600 mt-0.5" data-lucide="calendar-check"></i><span>Automated appointment booking</span></li>
<li className="flex items-start gap-3"><i className="h-5 w-5 text-indigo-600 mt-0.5" data-lucide="bell-ring"></i><span>Integrated reminders & confirmations</span></li>
<li className="flex items-start gap-3"><i className="h-5 w-5 text-indigo-600 mt-0.5" data-lucide="send"></i><span>Follow-ups that actually convert</span></li>
</ul>
<div className="mt-6 rounded-xl border border-slate-200 dark:border-slate-700 p-4 bg-white dark:bg-slate-900">
<p className="text-sm"><span className="font-medium">Clinics report 30% more bookings and 60% fewer no-shows.</span></p>
</div>
</div>
<div className="will-animate">
<div className="grid gap-4 md:grid-cols-2">
<div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-4">
<div className="flex items-center justify-between">
<p className="text-sm font-medium">Calendar</p>
<i className="h-4 w-4 text-indigo-600" data-lucide="calendar"></i>
</div>
<div className="mt-3 grid grid-cols-7 gap-1 text-center text-xs">

<template id="days-template"></template>

</div>
</div>
<div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-4">
<p className="text-sm font-medium">Reminder SMS</p>
<div aria-hidden="true" className="mt-3 iphone-frame mx-auto">
<div className="iphone-screen">
<div className="p-3 space-y-2 text-[12px]">
<div className="bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-2xl rounded-bl-sm">Reminder: Your appointment is tomorrow at 3pm. Reply 1 to confirm or 2 to reschedule.</div>
<div className="ml-auto bg-indigo-600 text-white px-3 py-2 rounded-2xl rounded-br-sm w-fit">1</div>
<div className="bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-2xl rounded-bl-sm">Thanks! Confirmation sent.</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20 lg:py-28" id="platform">
<div className="container mx-auto max-w-7xl px-6 lg:px-8">
<div className="max-w-3xl will-animate">
<h3 className="text-3xl sm:text-4xl font-semibold tracking-tight">Connects to every channel. Fits your stack.</h3>
<p className="mt-4 text-slate-600 dark:text-slate-300">WhatsApp, LINE, Messenger, Instagram, TikTok, SMS, phone, web chat — plus calendar, CRM, email, and Slack. Cura is your business communications layer.</p>
</div>
<div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="will-animate rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-5">
<p className="text-sm font-medium mb-3">Channels</p>
<div className="grid grid-cols-2 gap-3">
<div className="flex items-center gap-2 rounded-lg border border-slate-200 dark:border-slate-700 p-2 hover:-translate-y-0.5 transition">
<span className="h-7 w-7 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 text-[10px] font-semibold flex items-center justify-center">WA</span> WhatsApp
                </div>
<div className="flex items-center gap-2 rounded-lg border border-slate-200 dark:border-slate-700 p-2 hover:-translate-y-0.5 transition">
<span className="h-7 w-7 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 text-[10px] font-semibold flex items-center justify-center">LI</span> LINE
                </div>
<div className="flex items-center gap-2 rounded-lg border border-slate-200 dark:border-slate-700 p-2 hover:-translate-y-0.5 transition">
<i className="h-5 w-5" data-lucide="instagram"></i> Instagram
                </div>
<div className="flex items-center gap-2 rounded-lg border border-slate-200 dark:border-slate-700 p-2 hover:-translate-y-0.5 transition">
<i className="h-5 w-5" data-lucide="facebook"></i> Messenger
                </div>
<div className="flex items-center gap-2 rounded-lg border border-slate-200 dark:border-slate-700 p-2 hover:-translate-y-0.5 transition">
<i className="h-5 w-5" data-lucide="music"></i> TikTok
                </div>
<div className="flex items-center gap-2 rounded-lg border border-slate-200 dark:border-slate-700 p-2 hover:-translate-y-0.5 transition">
<i className="h-5 w-5" data-lucide="message-circle"></i> SMS
                </div>
<div className="flex items-center gap-2 rounded-lg border border-slate-200 dark:border-slate-700 p-2 hover:-translate-y-0.5 transition">
<i className="h-5 w-5" data-lucide="phone"></i> Phone
                </div>
<div className="flex items-center gap-2 rounded-lg border border-slate-200 dark:border-slate-700 p-2 hover:-translate-y-0.5 transition">
<i className="h-5 w-5" data-lucide="globe"></i> Web Chat
                </div>
</div>
</div>

<div className="will-animate rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-5">
<p className="text-sm font-medium mb-3">Business Tools</p>
<div className="grid grid-cols-2 gap-3">
<div className="flex items-center gap-2 rounded-lg border border-slate-200 dark:border-slate-700 p-2"><i className="h-5 w-5" data-lucide="calendar"></i> Calendar</div>
<div className="flex items-center gap-2 rounded-lg border border-slate-200 dark:border-slate-700 p-2"><i className="h-5 w-5" data-lucide="database"></i> CRM</div>
<div className="flex items-center gap-2 rounded-lg border border-slate-200 dark:border-slate-700 p-2"><i className="h-5 w-5" data-lucide="mail"></i> Email</div>
<div className="flex items-center gap-2 rounded-lg border border-slate-200 dark:border-slate-700 p-2"><i className="h-5 w-5" data-lucide="slack"></i> Slack</div>
</div>
</div>

<div className="will-animate rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-5">
<p className="text-sm font-medium mb-3">Features</p>
<ul className="space-y-2 text-sm">
<li className="flex items-start gap-2"><i className="h-5 w-5 text-indigo-600" data-lucide="refresh-ccw"></i>Real-time sync & routing</li>
<li className="flex items-start gap-2"><i className="h-5 w-5 text-indigo-600" data-lucide="history"></i>Unified conversation history</li>
<li className="flex items-start gap-2"><i className="h-5 w-5 text-indigo-600" data-lucide="bar-chart-3"></i>Cross-platform analytics</li>
<li className="flex items-start gap-2"><i className="h-5 w-5 text-indigo-600" data-lucide="workflow"></i>Workflow automation triggers</li>
<li className="flex items-start gap-2"><i className="h-5 w-5 text-indigo-600" data-lucide="code-2"></i>APIs for custom integrations</li>
</ul>
</div>

<div className="will-animate rounded-xl border border-slate-200 dark:border-slate-700 bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-indigo-950/30 dark:to-violet-950/30 p-5">
<p className="text-sm font-medium">Omnichannel Flow</p>
<div className="mt-4 grid grid-cols-3 gap-3 text-xs">
<div className="rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-3">
<p className="font-medium">Channels</p>
<p className="mt-1 text-slate-600 dark:text-slate-400">Messages in</p>
</div>
<div className="rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-3">
<p className="font-medium">Inbox</p>
<p className="mt-1 text-slate-600 dark:text-slate-400">AI routes</p>
</div>
<div className="rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-3">
<p className="font-medium">Booking</p>
<p className="mt-1 text-slate-600 dark:text-slate-400">Calendar sync</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 lg:py-16" id="clg">
<div className="container mx-auto max-w-7xl px-6 lg:px-8">
<div className="max-w-3xl will-animate">
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">Conversation-Led Growth</h3>
<p className="mt-3 text-slate-600 dark:text-slate-300">Turn every conversation into revenue. From first touch to booking confirmation, Cura powers consistent, reliable growth.</p>
</div>
<div className="mt-8 grid md:grid-cols-4 gap-6">
<div className="rounded-xl border border-slate-200 dark:border-slate-700 p-5 bg-white dark:bg-slate-900 will-animate">
<p className="text-3xl font-semibold tracking-tight">300%</p>
<p className="text-sm text-slate-600 dark:text-slate-400 mt-1">— Increase in customer engagement</p>
</div>
<div className="rounded-xl border border-slate-200 dark:border-slate-700 p-5 bg-white dark:bg-slate-900 will-animate">
<p className="text-3xl font-semibold tracking-tight">2.5x</p>
<p className="text-sm text-slate-600 dark:text-slate-400 mt-1">— Higher conversion rates</p>
</div>
<div className="rounded-xl border border-slate-200 dark:border-slate-700 p-5 bg-white dark:bg-slate-900 will-animate">
<p className="text-3xl font-semibold tracking-tight">40%</p>
<p className="text-sm text-slate-600 dark:text-slate-400 mt-1">— More customer touchpoints</p>
</div>
<div className="rounded-xl border border-slate-200 dark:border-slate-700 p-5 bg-white dark:bg-slate-900 will-animate">
<p className="text-3xl font-semibold tracking-tight">60%</p>
<p className="text-sm text-slate-600 dark:text-slate-400 mt-1">— Faster response times</p>
</div>
</div>
<div className="mt-8 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-5 will-animate">
<div className="grid md:grid-cols-2 gap-4 items-center">
<div>
<p className="text-sm font-medium mb-1">Conversations → Bookings</p>
<p className="text-xs text-slate-600 dark:text-slate-400">Illustrative weekly growth trend</p>
</div>
<div className="chart-wrap">
<div><canvas aria-label="Growth chart" id="growthChart" role="img"></canvas></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20 lg:py-28 bg-[#F8FAFC] dark:bg-[#0F172A]" id="testimonials">
<div className="container mx-auto max-w-7xl px-6 lg:px-8">
<div className="max-w-3xl will-animate">
<h3 className="text-3xl sm:text-4xl font-semibold tracking-tight">More bookings. More revenue. Less stress.</h3>
</div>
<div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="rounded-xl border border-slate-200 dark:border-slate-700 p-5 bg-white dark:bg-slate-900 will-animate">
<p className="text-3xl font-semibold tracking-tight">30%</p>
<p className="text-sm text-slate-600 dark:text-slate-400 mt-1">— More Bookings</p>
</div>
<div className="rounded-xl border border-slate-200 dark:border-slate-700 p-5 bg-white dark:bg-slate-900 will-animate">
<p className="text-3xl font-semibold tracking-tight">50%</p>
<p className="text-sm text-slate-600 dark:text-slate-400 mt-1">— Less Admin Time</p>
</div>
<div className="rounded-xl border border-slate-200 dark:border-slate-700 p-5 bg-white dark:bg-slate-900 will-animate">
<p className="text-3xl font-semibold tracking-tight">2x</p>
<p className="text-sm text-slate-600 dark:text-slate-400 mt-1">— ROI in 3 Months</p>
</div>
<div className="rounded-xl border border-slate-200 dark:border-slate-700 p-5 bg-white dark:bg-slate-900 will-animate">
<p className="text-3xl font-semibold tracking-tight">95%</p>
<p className="text-sm text-slate-600 dark:text-slate-400 mt-1">— Customer Satisfaction</p>
</div>
</div>
<div className="mt-10 grid md:grid-cols-3 gap-6">
<figure className="will-animate rounded-xl border border-slate-200 dark:border-slate-700 p-6 bg-white dark:bg-slate-900 shadow-sm">
<blockquote className="text-slate-700 dark:text-slate-300">“Cura transformed our patient communication. We’re booking 30% more appointments without hiring additional staff.”</blockquote>
<figcaption className="mt-4 text-sm text-slate-600 dark:text-slate-400">— Dr. Sarah Chen</figcaption>
</figure>
<figure className="will-animate rounded-xl border border-slate-200 dark:border-slate-700 p-6 bg-white dark:bg-slate-900 shadow-sm">
<blockquote className="text-slate-700 dark:text-slate-300">“The ROI was incredible. We saw results within the first month and our admin team is 50% more efficient.”</blockquote>
<figcaption className="mt-4 text-sm text-slate-600 dark:text-slate-400">— Dr. Michael Rodriguez</figcaption>
</figure>
<figure className="will-animate rounded-xl border border-slate-200 dark:border-slate-700 p-6 bg-white dark:bg-slate-900 shadow-sm">
<blockquote className="text-slate-700 dark:text-slate-300">“Patients love the instant responses.’s like having a receptionist who never sleeps.”</blockquote>
<figcaption className="mt-4 text-sm text-slate-600 dark:text-slate-400">— Dr. Emily Watson</figcaption>
</figure>
</div>

<div className="mt-10 grid grid-cols-3 sm:grid-cols-6 gap-6 opacity-80">
<img alt="Clinic logo placeholder" className="h-8 w-full object-cover rounded-md" src="https://images.unsplash.com/photo-1549923746-c502d488b3ea?q=80&w=400&auto=format&fit=crop" />
<img alt="Clinic logo placeholder" className="h-8 w-full object-cover rounded-md" src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=400&auto=format&fit=crop" />
<img alt="Clinic logo placeholder" className="h-8 w-full object-cover rounded-md" src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=400&auto=format&fit=crop" />
<img alt="Clinic logo placeholder" className="h-8 w-full object-cover rounded-md" src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=400&auto=format&fit=crop" />
<img alt="Clinic logo placeholder" className="h-8 w-full object-cover rounded-md" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
<img alt="Clinic logo placeholder" className="h-8 w-full object-cover rounded-md" src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=400&auto=format&fit=crop" />
</div>
</div>
</section>

<section className="py-16 sm:py-20 lg:py-28" id="pricing">
<div className="container mx-auto max-w-7xl px-6 lg:px-8">
<div className="max-w-3xl will-animate">
<h3 className="text-3xl sm:text-4xl font-semibold tracking-tight">Flexible plans that grow with you.</h3>
<p className="mt-4 text-slate-600 dark:text-slate-300">Start free and scale as you grow. No long-term contracts, no hidden fees.</p>
</div>
<div className="mt-10 grid md:grid-cols-3 gap-6">

<div className="will-animate rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 shadow-sm">
<p className="text-sm font-medium">Starter</p>
<p className="mt-2 text-3xl font-semibold tracking-tight">$99<span className="text-base font-normal text-slate-500">/month</span></p>
<ul className="mt-4 space-y-2 text-sm">
<li className="flex items-start gap-2"><i className="h-4 w-4 text-emerald-500 mt-0.5" data-lucide="check"></i>Up to 500 conversations/month</li>
<li className="flex items-start gap-2"><i className="h-4 w-4 text-emerald-500 mt-0.5" data-lucide="check"></i>Basic integrations</li>
<li className="flex items-start gap-2"><i className="h-4 w-4 text-emerald -500 mt-0.5" data-lucide="check"></i>Email support</li>
<li className="flex items-start gap-2"><i className="h-4 w-4 text-emerald-500 mt-0.5" data-lucide="check"></i>1 connected channel</li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold btn-primary text-white ring-focus hover:shadow-md transition" href="#cta">Start Free</a>
<p className="mt-3 text-xs text-slate-500 dark:text-slate-400">No credit card required</p>
</div>

<div className="will-animate relative rounded-2xl border border-indigo-200/70 dark:border-indigo-500/30 bg-white dark:bg-slate-900 p-6 shadow-md ring-1 ring-indigo-500/10">
<div className="absolute -top-3 right-4 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-3 py-1 text-[11px] font-semibold text-white shadow">Most popular</div>
<p className="text-sm font-medium">Growth</p>
<p className="mt-2 text-3xl font-semibold tracking-tight">$299<span className="text-base font-normal text-slate-500">/month</span></p>
<ul className="mt-4 space-y-2 text-sm">
<li className="flex items-start gap-2"><i className="h4 w-4 text-emerald-500 mt-0.5" data-lucide="check"></i>Up to 3,000 conversations/month</li>
<li className="flex items-start gap-2"><i className="h-4 w-4 text-emerald-500 mt-0.5" data-lucide="check"></i>Unified inbox (all channels)</li>
<li className="flex items-start gap-2"><i className="h-4 w-4 text-emerald-500 mt-0.5" data-lucide="check"></i>AI receptionist (messaging + voice)</li>
<li className="flex items-start gap-2"><i className="h-4 w-4 text-emerald-500 mt-0.5" data-lucide="check"></i>Team seats included (up to 10)</li>
<li className="flex items-start gap-2"><i className="h-4 w-4 text-emerald-500 mt-0.5" data-lucide="check"></i>Priority support</li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold btn-primary text-white ring-focus hover:shadow-lg transition" href="#cta">Start Growth</a>
<p className="mt-3 text-xs text-slate-500 dark:text-slate-400">Everything you need to scale</p>
</div>

<div className="will-animate rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 shadow-sm">
<p className="text-sm font-medium">Enterprise</p>
<p className="mt-2 text-3xl font-semibold tracking-tight">Custom</p>
<ul className="mt-4 space-y-2 text-sm">
<li className="flex items-start gap-2"><i className="h-4 w-4 text-emerald-500 mt-0.5" data-lucide="check"></i>Unlimited conversations & channels</li>
<li className="flex items-start gap-2"><i className="h-4 w-4 text-emerald-500 mt-0.5" data-lucide="check"></i>SLA, SSO, audit logs</li>
<li className="flex items-start gap-2"><i className="h-4 w-4 text-emerald-500 mt-0.5" data-lucide="check"></i>Custom integrations & onboarding</li>
<li className="flex items-start gap-2"><i className="h-4 w-4 text-emerald-500 mt-0.5" data-lucide="check"></i>Dedicated success manager</li>
</ul>
<button className="mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold btn-outline ring-focus hover:bg-white/70 dark:hover:bg-slate-800/70 transition" data-open-modal="demo-modal">Talk to Sales</button>
<p className="mt-3 text-xs text-slate-500 dark:text-slate-400">Security-first for large teams</p>
</div>
</div>
<p className="mt-6 text-xs text-slate-500 dark:text-slate-400">All plans include HIPAA/PDPA compliance, encryption in transit & at rest, and GDPR-ready data processing terms.</p>
</div>
</section>

<section className="py-12 sm:py-16 bg-[#F8FAFC] dark:bg-[#0F172A]" id="faq">
<div className="container mx-auto max-w-5xl px-6 lg:px-8">
<div className="max-w-3xl will-animate">
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">Frequently asked questions</h3>
<p className="mt-3 text-slate-600 dark:text-slate-300">Everything you need to know about getting started with Cura.</p>
</div>
<div className="mt-8 grid gap-3">
<details className="will-animate group rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-4 open:shadow-sm">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="font-medium">How long does setup take?</span>
<i className="h-5 w-5 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Most clinics launch in under a day. Connect your channels, choose scheduling rules, and you’re live.</p>
</details>
<details className="will-animate group rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-4">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="font-medium">Is Cura safe for PHI and patient data?</span>
<i className="h-5 w-5 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Yes. We’re HIPAA and PDPA compliant with strict access controls, audit logs, and encryption everywhere.</p>
</details>
<details className="will-animate group rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-4">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="font-medium">Can I use Cura with my existing calendar and CRM?</span>
<i className="h-5 w-5 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Absolutely. We integrate with popular calendars, EMRs, and CRMs, plus offer APIs for custom workflows.</p>
</details>
<details className="will-animate group rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-4">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="font-medium">What languages are supported?</span>
<i className="h-5 w-5 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Cura supports multilingual conversations across voice and messaging. Contact us for your specific locale.</p>
</details>
</div>
</div>
</section>

<section className="relative py-16 sm:py-20" id="cta">
<div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-violet-500/10"></div>
<div className="container relative mx-auto max-w-7xl px-6 lg:px-8">
<div className="will-animate rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-8 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
<div>
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">Ready to turn conversations into bookings?</h3>
<p className="mt-2 text-slate-600 dark:text-slate-300">Start free in minutes, or book a 15‑minute walkthrough with our team.</p>
</div>
<div className="flex w-full sm:w-auto flex-col sm:flex-row gap-3">
<a className="btn-primary ring-focus inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white shadow hover:shadow-lg transition-all" href="#pricing"><i className="h-4 w-4 mr-2" data-lucide="rocket"></i>Start Free</a>
<button className="btn-outline ring-focus inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold" data-open-modal="demo-modal"><i className="h-4 w-4 mr-2" data-lucide="calendar"></i>Book a Demo</button>
</div>
</div>
</div>
</section>
</main>

<div className="fixed inset-0 z-[60] hidden" id="demo-modal">
<div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"></div>
<div className="relative mx-auto mt-24 w-[92%] max-w-lg rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-xl">
<div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-700 p-4">
<h4 className="text-base font-semibold">Book a demo</h4>
<button aria-label="Close modal" className="rounded-lg p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 ring-focus" data-close-modal="">
<i className="h-5 w-5" data-lucide="x"></i>
</button>
</div>
<form className="p-5 space-y-3">
<div className="grid sm:grid-cols-2 gap-3">
<label className="text-sm">
<span className="mb-1 block text-slate-700 dark:text-slate-300">Name</span>
<input className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" required type="text" />
</label>
<label className="text-sm">
<span className="mb-1 block text-slate-700 dark:text-slate-300">Email</span>
<input className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" required type="email" />
</label>
</div>
<label className="text-sm block">
<span className="mb-1 block text-slate-700 dark:text-slate-300">Company</span>
<input className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" type="text" />
</label>
<label className="text-sm block">
<span className="mb-1 block text-slate-700 dark:text-slate-300">What would you like to achieve?</span>
<textarea className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="e.g., Reduce missed calls, automate bookings" rows="3"></textarea>
</label>
<div className="flex items-center justify-end gap-2 pt-2">
<button className="btn-outline rounded-xl px-4 py-2 text-sm ring-focus" data-close-modal="" type="button">Cancel</button>
<button className="btn-primary rounded-xl px-4 py-2 text-sm font-semibold text-white ring-focus" type="submit">Request demo</button>
</div>
</form>
</div>
</div>

<footer className="border-t border-slate-200 dark:border-slate-800">
<div className="container mx-auto max-w-7xl px-6 lg:px-8 py-10">
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
<div>
<a className="inline-flex items-center gap-2" href="#hero">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-md">
<i className="h-4 w-4" data-lucide="sparkles"></i>
</span>
<span className="text-lg font-semibold">Cura</span>
</a>
<p className="mt-3 text-sm text-slate-600 dark:text-slate-400">One inbox for every channel — powered by AI.</p>
</div>
<div>
<p className="text-sm font-semibold">Product</p>
<ul className="mt-3 space-y-2 text-sm">
<li><a className="hover:underline" href="#solution">Overview</a></li>
<li><a className="hover:underline" href="#feature-inbox">Unified Inbox</a></li>
<li><a className="hover:underline" href="#feature-ai">AI Receptionist</a></li>
<li><a className="hover:underline" href="#feature-scheduling">Scheduling</a></li>
</ul>
</div>
<div>
<p className="text-sm font-semibold">Company</p>
<ul className="mt-3 space-y-2 text-sm">
<li><a className="hover:underline" href="#testimonials">Case Studies</a></li>
<li><a className="hover:underline" href="#pricing">Pricing</a></li>
<li><a className="hover:underline" href="#faq">FAQ</a></li>
<li><a className="hover:underline" href="#cta">Contact</a></li>
</ul>
</div>
<div>
<p className="text-sm font-semibold">Legal</p>
<ul className="mt-3 space-y-2 text-sm">
<li><a className="hover:underline" href="#">Privacy</a></li>
<li><a className="hover:underline" href="#">Terms</a></li>
<li><a className="hover:underline" href="#">Security</a></li>
</ul>
<button className="mt-4 btn-outline ring-focus inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm" id="theme-toggle-footer">
<i className="h-4 w-4" data-lucide="moon"></i> Toggle theme
            </button>
</div>
</div>
<div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<p className="text-xs text-slate-500 dark:text-slate-400">© <span id="year"></span> Cura, Inc. All rights reserved.</p>
<div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
<span className="inline-flex items-center gap-1"><i className="h-3.5 w-3.5" data-lucide="shield"></i> HIPAA / PDPA</span>
<span className="inline-flex items-center gap-1"><i className="h-3.5 w-3.5" data-lucide="lock"></i> Encryption at rest</span>
<span className="inline-flex items-center gap-1"><i className="h-3.5 w-3.5" data-lucide="globe"></i> Global</span>
</div>
</div>
</div>
</footer>






    </>
  );
}
