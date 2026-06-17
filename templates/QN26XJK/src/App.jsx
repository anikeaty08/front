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
      
(function() {
function disableHashLinks() {
const hashLinks = document.querySelectorAll('a[href="#"], a[href^="#"]:not([href="#"])');
hashLinks.forEach(link => {
link.addEventListener('click', function(e) {
e.preventDefault();
e.stopPropagation();
return false;
});
// Add tooltip to indicate link is disabled but keep pointer cursor
link.title = link.title || 'Link disabled in preview mode';
});
}
// Disable hash links on DOM ready
if (document.readyState === 'loading') {
document.addEventListener('DOMContentLoaded', disableHashLinks);
} else {
disableHashLinks();
}
// Also disable hash links when the window loads (fallback)
window.addEventListener('load', disableHashLinks);
})();



    // Icons
    document.addEventListener('DOMContentLoaded', () => {
      if (window.lucide) window.lucide.createIcons();
    });

    // Header subtle shrink on scroll
    (function() {
      const header = document.getElementById('site-header');
      const navShell = document.getElementById('nav-shell');
      let last = 0;
      window.addEventListener('scroll', () => {
        const y = window.scrollY || 0;
        if (y > 12 && last <= 12) {
          navShell.classList.add('py-2.5');
          navShell.classList.remove('py-3');
        } else if (y <= 12 && last > 12) {
          navShell.classList.add('py-3');
          navShell.classList.remove('py-2.5');
        }
        last = y;
      }, { passive: true });
    })();

    // Mobile menu
    (function(){
      const openBtn = document.getElementById('menu-btn');
      const closeBtn = document.getElementById('close-menu');
      const menu = document.getElementById('mobile-menu');
      const overlay = document.getElementById('sheet-overlay');

      function open() {
        menu.classList.remove('hidden');
        openBtn.setAttribute('aria-expanded','true');
        document.body.style.overflow = 'hidden';
      }
      function close() {
        menu.classList.add('hidden');
        openBtn.setAttribute('aria-expanded','false');
        document.body.style.overflow = '';
      }
      openBtn?.addEventListener('click', open);
      closeBtn?.addEventListener('click', close);
      overlay?.addEventListener('click', close);
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !menu.classList.contains('hidden')) close();
      });
    })();

    // In-view animations
    (function(){
      const els = Array.from(document.querySelectorAll('[data-animate]'));
      if (!('IntersectionObserver' in window)) {
        els.forEach(el => {
          el.style.opacity = 1;
          el.style.transform = 'translateY(0)';
        });
        return;
      }
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 });
      els.forEach(el => io.observe(el));
    })();

    // Hero toggle demo
    (function(){
      const knob = document.getElementById('hero-switch');
      const reply = document.getElementById('hero-chat-reply');
      const badge = document.getElementById('hero-booking-badge');
      let on = true;
      function setState(state){
        on = state;
        if (on) {
          knob.style.left = '0.125rem';
          reply.style.opacity = '1';
          badge.style.opacity = '1';
          badge.style.transform = 'translateY(0)';
        } else {
          knob.style.left = 'calc(100% - 1.375rem)';
          reply.style.opacity = '0.85';
          badge.style.opacity = '0';
          badge.style.transform = 'translateY(0.25rem)';
        }
      }
      setState(true);
      knob?.parentElement?.addEventListener('click', ()=> setState(!on));
    })();

    // Carousel
    (function(){
      const track = document.getElementById('carousel-track');
      const prev = document.getElementById('prev');
      const next = document.getElementById('next');
      const dots = Array.from(document.querySelectorAll('.carousel-dot'));
      const root = document.getElementById('carousel');
      let index = 0;
      const total = 3;

      function update(){
        track.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach((d,i)=> d.style.backgroundColor = i === index ? 'rgba(0,0,0,0.35)' : 'rgba(0,0,0,0.08)');
      }
      prev?.addEventListener('click', ()=> { index = (index - 1 + total) % total; update(); });
      next?.addEventListener('click', ()=> { index = (index + 1) % total; update(); });
      dots.forEach((d,i)=> d.addEventListener('click', ()=> { index = i; update(); }));
      root?.addEventListener('keydown', (e)=> {
        if (e.key === 'ArrowLeft') { index = (index - 1 + total) % total; update(); }
        if (e.key === 'ArrowRight') { index = (index + 1) % total; update(); }
      });
      let id = setInterval(()=> { index = (index + 1) % total; update(); }, 5000);
      ['mouseenter','focusin'].forEach(ev => root?.addEventListener(ev, ()=> clearInterval(id)));
      update();
    })();

    // Pricing toggle
    (function(){
      const toggle = document.getElementById('billing-toggle');
      const knob = document.getElementById('billing-knob');
      const save = document.getElementById('save-badge');
      const prices = Array.from(document.querySelectorAll('.price'));
      let annual = false;
      function apply(){
        prices.forEach(el => {
          el.textContent = annual ? el.getAttribute('data-annual') : el.getAttribute('data-month');
        });
        knob.style.left = annual ? '2.25rem' : '0.25rem';
        toggle?.setAttribute('aria-checked', String(annual));
        save.style.opacity = annual ? '1' : '0';
      }
      toggle?.addEventListener('click', ()=> { annual = !annual; apply(); });
      apply();
    })();

    // Form handling
    (function(){
      const form = document.getElementById('lead-form');
      const btn = document.getElementById('submit-btn');
      const success = document.getElementById('form-success');
      form?.addEventListener('submit', async (e) => {
        e.preventDefault();
        btn.disabled = true;
        btn.style.opacity = '0.8';
        btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg><span>Submitting…</span>';
        // Simulate request
        await new Promise(r => setTimeout(r, 900));
        success.classList.remove('hidden');
        form.querySelectorAll('input, textarea, select').forEach(el => { if (el.type !== 'checkbox') el.value = ''; else el.checked = false; });
        btn.disabled = false;
        btn.style.opacity = '1';
        btn.innerHTML = '<i data-lucide="rocket" class="h-4 w-4"></i><span>Start free</span>';
        if (window.lucide) window.lucide.createIcons();
      });
    })();

    // Footer year
    document.getElementById('year').textContent = new Date().getFullYear();
  
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
      
<div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute -top-24 -right-32 h-80 w-80 rounded-full blur-3xl opacity-70" style={{background: 'radial-gradient(circle at 30% 30%, rgba(76,211,243,.35), transparent 60%)'}}></div>
<div className="absolute top-64 -left-20 h-96 w-96 rounded-full blur-3xl opacity-60" style={{background: 'radial-gradient(circle at 70% 40%, rgba(67,177,255,.45), transparent 60%)'}}></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[500px] w-[900px] blur-[88px] opacity-70" style={{background: 'radial-gradient(ellipse at center, rgba(239,246,255,.9), rgba(67,177,255,.28) 50%, transparent 75%)'}}></div>
</div>
<header className="fixed top-0 left-0 right-0 z-50" id="site-header">
<div className="max-w-7xl mx-auto px-6 md:px-8">
<nav aria-label="Primary" className="mt-3 md:mt-4 transition-all duration-300 ease-out">
<div className="flex items-center justify-between rounded-full px-4 md:px-6 py-3 transition-all duration-300 ease-out shadow-[var(--cura-sh)] border border-[var(--cura-line)] backdrop-blur-2xl" id="nav-shell" style={{background: 'var(--cura-glass-strong)'}}>
<a aria-label="Cura Home" className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60 rounded-full px-2 py-1" href="#" title="Link disabled in preview mode">
<div className="relative h-7 w-7 rounded-md bg-gradient-to-br from-[var(--cura-sky)] via-[var(--cura-blue)] to-[var(--cura-indigo)] flex items-center justify-center ring-1 ring-white/60">
<div className="h-3.5 w-3.5 rounded-sm bg-white/90 mix-blend-overlay"></div>
</div>
<span className="text-slate-900 text-lg md:text-xl tracking-tight" style={{fontFamily: 'Manrope, Inter, ui-sans-serif', fontWeight: '700', letterSpacing: '-0.02em'}}>
              Cura
            </span>
</a>
<div className="hidden lg:flex items-center gap-6">
<a className="text-sm text-slate-600 hover:text-slate-900 transition-colors" href="#product" title="Link disabled in preview mode">Product</a>
<a className="text-sm text-slate-600 hover:text-slate-900 transition-colors" href="#integrations" title="Link disabled in preview mode">Integrations</a>
<a className="text-sm text-slate-600 hover:text-slate-900 transition-colors" href="#solutions" title="Link disabled in preview mode">Solutions</a>
<a className="text-sm text-slate-600 hover:text-slate-900 transition-colors" href="#pricing" title="Link disabled in preview mode">Pricing</a>
<a className="text-sm text-slate-600 hover:text-slate-900 transition-colors" href="#about" title="Link disabled in preview mode">About</a>
<a className="text-sm text-slate-600 hover:text-slate-900 transition-colors" href="#start" title="Link disabled in preview mode">Start Free</a>
</div>
<div className="hidden lg:flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-[var(--cura-sky)] via-[var(--cura-blue)] to-[var(--cura-indigo)] text-white px-4 py-2 text-sm font-medium hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60 transition shadow-[var(--cura-sh)]" href="#demo" title="Link disabled in preview mode">
<i className="h-4 w-4" data-lucide="rocket"></i>
              Start Free Trial
            </a>
<a className="inline-flex items-center gap-2 rounded-full bg-white border border-[var(--cura-line)] hover:bg-[var(--cura-bg-alt)] px-4 py-2 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60 transition" href="#demo" title="Link disabled in preview mode">
<i className="h-4 w-4" data-lucide="headset"></i>
              Talk to Sales
            </a>
</div>
<button aria-controls="mobile-menu" aria-expanded="false" aria-label="Open menu" className="lg:hidden inline-flex items-center justify-center rounded-full border border-[var(--cura-line)] bg-white hover:bg-[var(--cura-bg-alt)] p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60 transition" id="menu-btn">
<svg className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</nav>
</div>
<div aria-hidden="true" aria-label="Mobile Menu" className="fixed inset-0 z-40 hidden" id="mobile-menu" role="dialog">
<div className="absolute inset-0 bg-white/40" id="sheet-overlay"></div>
<div className="absolute right-0 top-0 h-full w-80 max-w-[88vw] bg-white/80 backdrop-blur-2xl border-l border-[var(--cura-line)] shadow-[var(--cura-sh)]">
<div className="flex items-center justify-between px-5 py-4 border-b border-[var(--cura-line)]">
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded bg-gradient-to-br from-[var(--cura-sky)] via-[var(--cura-blue)] to-[var(--cura-indigo)]"></div>
<span className="text-slate-900 text-lg tracking-tight" style={{fontFamily: 'Manrope, Inter, ui-sans-serif', fontWeight: '700'}}>Cura</span>
</div>
<button aria-label="Close menu" className="rounded-full p-2 hover:bg-[var(--cura-bg-alt)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60 transition" id="close-menu">
<svg className="lucide lucide-x h-5 w-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<div className="px-5 py-4 flex flex-col gap-2">
<a className="px-3 py-2 rounded-lg hover:bg-[var(--cura-bg-alt)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60 transition text-slate-700" href="#product" title="Link disabled in preview mode">Product</a>
<a className="px-3 py-2 rounded-lg hover:bg-[var(--cura-bg-alt)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60 transition text-slate-700" href="#integrations" title="Link disabled in preview mode">Integrations</a>
<a className="px-3 py-2 rounded-lg hover:bg-[var(--cura-bg-alt)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60 transition text-slate-700" href="#solutions" title="Link disabled in preview mode">Solutions</a>
<a className="px-3 py-2 rounded-lg hover:bg-[var(--cura-bg-alt)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60 transition text-slate-700" href="#pricing" title="Link disabled in preview mode">Pricing</a>
<a className="px-3 py-2 rounded-lg hover:bg-[var(--cura-bg-alt)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60 transition text-slate-700" href="#about" title="Link disabled in preview mode">About</a>
<a className="px-3 py-2 rounded-lg hover:bg-[var(--cura-bg-alt)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60 transition text-slate-700" href="#start" title="Link disabled in preview mode">Start Free</a>
<div className="h-px bg-[var(--cura-line)] my-2"></div>
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-[var(--cura-sky)] via-[var(--cura-blue)] to-[var(--cura-indigo)] text-white px-4 py-2 text-sm font-medium hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60 transition shadow-[var(--cura-sh)]" href="#demo" title="Link disabled in preview mode">
<i className="h-4 w-4" data-lucide="rocket"></i> Start Free Trial
          </a>
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-white border border-[var(--cura-line)] hover:bg-[var(--cura-bg-alt)] px-4 py-2 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60 transition" href="#demo" title="Link disabled in preview mode">
<i className="h-4 w-4" data-lucide="headset"></i> Talk to Sales
          </a>
</div>
</div>
</div>
</header>
<main className="pt-28 md:pt-32">
<section className="relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
<div className="grid md:grid-cols-2 items-center gap-10 md:gap-12">
<div className="space-y-6" data-animate="" style={{transition: 'opacity 400ms, transform 400ms', opacity: '1', transform: 'translateY(0px)'}}>
<h1 className="md:text-6xl text-4xl text-slate-900 tracking-tighter" style={{fontFamily: 'Manrope, Inter, ui-sans-serif', fontWeight: '800'}}>
              Cura handles your calls, messages, and bookings — so you don’t have to.
            </h1>
<p className="text-base md:text-lg text-slate-600 max-w-xl">
              Your AI receptionist for clinics, therapists, and service providers. Never miss a patient, client, or opportunity again.
            </p>
<div className="flex flex-wrap items-center gap-3 pt-2">
<a className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-[var(--cura-sky)] via-[var(--cura-blue)] to-[var(--cura-indigo)] text-white px-5 py-2.5 text-sm font-medium hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60 transition shadow-[var(--cura-sh)]" href="#start" title="Link disabled in preview mode">
<i className="h-5 w-5" data-lucide="rocket"></i>
                Start Free Trial
              </a>
<a className="inline-flex items-center gap-2 rounded-full bg-white border border-[var(--cura-line)] hover:bg-[var(--cura-bg-alt)] px-5 py-2.5 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60 transition" href="#demo" title="Link disabled in preview mode">
<i className="h-5 w-5 text-sky-700" data-lucide="headset"></i>
                Talk to Sales
              </a>
</div>
<div className="pt-5">
<div className="text-sm text-slate-600">Trusted by providers across healthcare, wellness, retail, and services.</div>
<div className="mt-3 flex items-center gap-3 flex-wrap">
<div className="rounded-full px-3 py-1.5 bg-white border border-[var(--cura-line)] text-xs text-slate-700">Clinics</div>
<div className="rounded-full px-3 py-1.5 bg-white border border-[var(--cura-line)] text-xs text-slate-700">Salons</div>
<div className="rounded-full px-3 py-1.5 bg-white border border-[var(--cura-line)] text-xs text-slate-700">Studios</div>
<div className="rounded-full px-3 py-1.5 bg-white border border-[var(--cura-line)] text-xs text-slate-700">Retail</div>
<div className="rounded-full px-3 py-1.5 bg-white border border-[var(--cura-line)] text-xs text-slate-700">Services</div>
</div>
</div>
</div>
<div className="relative" data-animate="" style={{transition: 'opacity 400ms, transform 400ms', opacity: '1', transform: 'translateY(0px)'}}>
<div className="relative rounded-3xl border border-[var(--cura-line)] p-4 md:p-5 shadow-[var(--cura-sh)] backdrop-blur-2xl" style={{background: 'var(--cura-glass-strong)'}}>
<div className="absolute -inset-0.5 rounded-3xl pointer-events-none opacity-40" style={{background: 'conic-gradient(from 180deg at 50% 50%, rgba(67, 177, 255, 0.15), rgba(79, 103, 255, 0.15), rgba(76, 211, 243, 0.15), rgba(67, 177, 255, 0.15))', filter: 'blur(20px)'}}></div>
<div className="relative z-10 flex items-center justify-between p-3 rounded-2xl border border-[var(--cura-line)] shadow-[var(--cura-sh)] backdrop-blur-xl" style={{background: 'var(--cura-glass)'}}>
<div className="flex items-center gap-2">
<div className="h-2 w-2 rounded-full bg-sky-500"></div>
<span className="text-sm text-slate-700">Cura Live Desk</span>
</div>
<div className="flex items-center gap-2">
<div className="text-xs text-slate-500">Auto</div>
<div className="h-6 w-12 rounded-full bg-white border border-[var(--cura-line)] relative">
<div className="absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-gradient-to-br from-[var(--cura-sky)] to-[var(--cura-indigo)] transition-all duration-300 ease-out" id="hero-switch"></div>
</div>
</div>
</div>
<div className="relative z-10 mt-4 grid gap-3">
<div className="rounded-2xl border border-[var(--cura-line)] p-3 ring-1 ring-sky-200/60 shadow-[var(--cura-sh)] backdrop-blur-xl" id="hero-step-chat" style={{background: 'var(--cura-glass)'}}>
<div className="flex items-center gap-2 text-sm text-slate-700 mb-2">
<i className="h-4 w-4 text-sky-600" data-lucide="message-square"></i>
                    WhatsApp / LINE
                  </div>
<div className="space-y-2">
<div className="max-w-[80%] rounded-2xl bg-white border border-[var(--cura-line)] px-3 py-2 text-sm text-slate-700">Hi! Do you have availability tomorrow?</div>
<div className="max-w-[85%] ml-auto rounded-2xl bg-gradient-to-br from-[var(--cura-sky)] via-[var(--cura-blue)] to-[var(--cura-indigo)] text-white px-3 py-2 text-sm transition-all duration-500 ease-out opacity-100" id="hero-chat-reply">
                      Absolutely! I’ve penciled you in at 10:30. Would you like to confirm?
                    </div>
</div>
</div>
<div className="rounded-2xl border border-[var(--cura-line)] p-3 shadow-[var(--cura-sh)] backdrop-blur-xl" id="hero-step-call" style={{background: 'var(--cura-glass)'}}>
<div className="flex items-center gap-2 text-sm text-slate-700 mb-2">
<i className="h-4 w-4 text-indigo-600" data-lucide="phone"></i>
                    Call log → CRM
                  </div>
<div className="flex items-center justify-between rounded-xl bg-white border border-[var(--cura-line)] px-3 py-2">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-white/70 border border-[var(--cura-line)] flex items-center justify-center">
<i className="h-4 w-4 text-slate-700" data-lucide="user"></i>
</div>
<div>
<div className="text-sm text-slate-900">+66 81 234 5678</div>
<div className="text-xs text-slate-600">New lead • 32s</div>
</div>
</div>
<div className="text-xs rounded-full px-2 py-1 bg-sky-50 text-sky-700 border border-sky-200">Logged</div>
</div>
</div>
<div className="rounded-2xl border border-[var(--cura-line)] p-3 shadow-[var(--cura-sh)] backdrop-blur-xl" id="hero-step-calendar" style={{background: 'var(--cura-glass)'}}>
<div className="flex items-center gap-2 text-sm text-slate-700 mb-2">
<i className="h-4 w-4 text-sky-600" data-lucide="calendar-check"></i>
                    Booking
                  </div>
<div className="rounded-xl bg-white border border-[var(--cura-line)] p-3">
<div className="flex items-center justify-between">
<div className="text-sm text-slate-700">Consultation — 30 min</div>
<div className="text-xs rounded-full px-2 py-1 bg-sky-50 text-sky-700 border border-sky-200 opacity-0 translate-y-1 transition-all duration-500 ease-out" id="hero-booking-badge">Confirmed</div>
</div>
<div className="mt-2 text-xs text-slate-600">Fri • 10:30 AM • Dr. Suda</div>
</div>
</div>
</div>
<div className="relative z-10 mt-4 flex items-center justify-between text-xs text-slate-600">
<div className="flex items-center gap-2">
<i className="h-3.5 w-3.5 text-sky-600" data-lucide="activity"></i>
                  Live
                </div>
<div className="flex items-center gap-2">
<i className="h-3.5 w-3.5 text-indigo-600" data-lucide="shield-check"></i>
                  Secure by design
                </div>
</div>
</div>
<p className="mt-3 text-xs text-slate-600 text-center">Client inquiry → AI receptionist → Booking confirmed.</p>
</div>
</div>
</div>
</section>
<section className="py-16 md:py-24" id="product">
<div className="max-w-7xl mx-auto px-6 md:px-8">
<div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
<div className="relative" data-animate="" style={{transition: 'opacity 400ms, transform 400ms', opacity: '0', transform: 'translateY(12px)'}}>
<div className="absolute -inset-6 rounded-3xl opacity-40 blur-2xl pointer-events-none" style={{background: 'radial-gradient(600px 200px at 20% 20%, rgba(67,177,255,.28), transparent 60%), radial-gradient(200px 600px at 80% 60%, rgba(79,103,255,.22), transparent 60%)'}}></div>
<div className="grid grid-cols-3 gap-3">
<div className="rounded-2xl p-4 backdrop-blur-xl shadow-[var(--cura-sh)] border border-[var(--cura-line)]" style={{background: 'var(--cura-glass)'}}>
<i className="h-6 w-6 text-sky-600" data-lucide="phone-off"></i>
<div className="mt-3 text-sm text-slate-700">Missed Calls</div>
</div>
<div className="rounded-2xl p-4 backdrop-blur-xl shadow-[var(--cura-sh)] border border-[var(--cura-line)]" style={{background: 'var(--cura-glass)'}}>
<i className="h-6 w-6 text-slate-700" data-lucide="clock"></i>
<div className="mt-3 text-sm text-slate-700">Delayed Replies</div>
</div>
<div className="rounded-2xl p-4 backdrop-blur-xl shadow-[var(--cura-sh)] border border-[var(--cura-line)]" style={{background: 'var(--cura-glass)'}}>
<i className="h-6 w-6 text-sky-600" data-lucide="message-square-off"></i>
<div className="mt-3 text-sm text-slate-700">Forgotten Chats</div>
</div>
<div className="rounded-2xl p-4 backdrop-blur-xl shadow-[var(--cura-sh)] border border-[var(--cura-line)]" style={{background: 'var(--cura-glass)'}}>
<i className="h-6 w-6 text-slate-700" data-lucide="inbox"></i>
<div className="mt-3 text-sm text-slate-700">Too Many Apps</div>
</div>
<div className="rounded-2xl p-4 backdrop-blur-xl shadow-[var(--cura-sh)] border border-[var(--cura-line)]" style={{background: 'var(--cura-glass)'}}>
<i className="h-6 w-6 text-sky-600" data-lucide="user-x"></i>
<div className="mt-3 text-sm text-slate-700">Leads Lost</div>
</div>
<div className="rounded-2xl p-4 backdrop-blur-xl shadow-[var(--cura-sh)] border border-[var(--cura-line)]" style={{background: 'var(--cura-glass)'}}>
<i className="h-6 w-6 text-slate-700" data-lucide="workflow"></i>
<div className="mt-3 text-sm text-slate-700">No Follow-up</div>
</div>
</div>
</div>
<div data-animate="" style={{transition: 'opacity 400ms, transform 400ms', opacity: '0', transform: 'translateY(12px)'}}>
<h2 className="text-3xl md:text-4xl tracking-tighter text-slate-900" style={{fontFamily: 'Manrope, Inter', fontWeight: '800'}}>
              Still juggling calls, chats, and bookings manually?
            </h2>
<p className="mt-4 text-slate-600">
              Service providers today lose clients to slow replies, missed calls, and scattered inboxes. Hiring staff is expensive. Ignoring patients is worse.
            </p>
<ul className="mt-6 space-y-3">
<li className="flex items-start gap-3">
<i className="h-5 w-5 text-sky-600 mt-0.5" data-lucide="alert-triangle"></i>
<span className="text-slate-700">30–50% of leads drop when no one answers immediately.</span>
</li>
<li className="flex items-start gap-3">
<i className="h-5 w-5 text-slate-700 mt-0.5" data-lucide="timer"></i>
<span className="text-slate-700">Slow responses cost trust and conversions.</span>
</li>
<li className="flex items-start gap-3">
<i className="h-5 w-5 text-sky-600 mt-0.5" data-lucide="ban"></i>
<span className="text-slate-700">Manual follow-ups don’t scale.</span>
</li>
</ul>
</div>
</div>
</div>
</section>
<section className="py-16 md:py-24" id="solutions">
<div className="max-w-7xl mx-auto px-6 md:px-8">
<div className="grid md:grid-cols-2 gap-10 md:gap-12 items-start">
<div data-animate="" style={{transition: 'opacity 400ms, transform 400ms', opacity: '0', transform: 'translateY(12px)'}}>
<h2 className="text-3xl md:text-4xl tracking-tighter text-slate-900" style={{fontFamily: 'Manrope, Inter', fontWeight: '800'}}>
              Cura is your AI receptionist — available 24/7.
            </h2>
<p className="mt-3 text-slate-600">Cura centralizes WhatsApp, LINE, Instagram, Messenger, SMS, and phone calls into one smart inbox. It responds instantly, books appointments, answers FAQs, and integrates with your existing CRM or EHR.</p>
<div className="mt-6 grid gap-4">
<div className="flex items-start gap-3 rounded-2xl p-4 border border-[var(--cura-line)] shadow-[var(--cura-sh)]" style={{background: 'var(--cura-glass)'}}>
<i className="h-5 w-5 text-indigo-600 mt-0.5" data-lucide="inbox"></i>
<div>
<div className="text-slate-900 font-medium">Omnichannel Inbox</div>
<p className="text-slate-600 text-sm">All conversations in one place.</p>
</div>
</div>
<div className="flex items-start gap-3 rounded-2xl p-4 border border-[var(--cura-line)] shadow-[var(--cura-sh)]" style={{background: 'var(--cura-glass)'}}>
<i className="h-5 w-5 text-sky-600 mt-0.5" data-lucide="headset"></i>
<div>
<div className="text-slate-900 font-medium">AI Receptionist</div>
<p className="text-slate-600 text-sm">Answers calls &amp; messages instantly.</p>
</div>
</div>
<div className="flex items-start gap-3 rounded-2xl p-4 border border-[var(--cura-line)] shadow-[var(--cura-sh)]" style={{background: 'var(--cura-glass)'}}>
<i className="h-5 w-5 text-indigo-600 mt-0.5" data-lucide="calendar"></i>
<div>
<div className="text-slate-900 font-medium">Smart Scheduling</div>
<p className="text-slate-600 text-sm">Syncs directly with calendars.</p>
</div>
</div>
<div className="flex items-start gap-3 rounded-2xl p-4 border border-[var(--cura-line)] shadow-[var(--cura-sh)]" style={{background: 'var(--cura-glass)'}}>
<i className="h-5 w-5 text-sky-600 mt-0.5" data-lucide="languages"></i>
<div>
<div className="text-slate-900 font-medium">Multi-Language Support</div>
<p className="text-slate-600 text-sm">English, Thai, and beyond.</p>
</div>
</div>
<div className="flex items-start gap-3 rounded-2xl p-4 border border-[var(--cura-line)] shadow-[var(--cura-sh)]" style={{background: 'var(--cura-glass)'}}>
<i className="h-5 w-5 text-indigo-600 mt-0.5" data-lucide="bar-chart-3"></i>
<div>
<div className="text-slate-900 font-medium">Analytics Dashboard</div>
<p className="text-slate-600 text-sm">Track performance and ROI.</p>
</div>
</div>
</div>
</div>
<div data-animate="" style={{transition: 'opacity 400ms, transform 400ms', opacity: '0', transform: 'translateY(12px)'}}>
<div className="rounded-3xl border border-[var(--cura-line)] p-5 shadow-[var(--cura-sh)] backdrop-blur-2xl" style={{background: 'var(--cura-glass-strong)'}}>
<div className="grid grid-cols-2 gap-4">
<div className="rounded-2xl border border-[var(--cura-line)] p-4 shadow-[var(--cura-sh)]" style={{background: 'var(--cura-glass)'}}>
<div className="text-sm text-slate-600">Before</div>
<div className="mt-3 flex items-center gap-2 text-slate-700">
<i className="h-4 w-4 text-sky-600" data-lucide="phone-missed"></i>
<span className="text-sm">Missed call (3)</span>
</div>
<div className="mt-2 flex items-center gap-2 text-slate-700">
<i className="h-4 w-4 text-sky-600" data-lucide="message-square-off"></i>
<span className="text-sm">Unanswered chat</span>
</div>
</div>
<div className="rounded-2xl border border-[var(--cura-line)] p-4 shadow-[var(--cura-sh)] bg-gradient-to-br from-[color-mix(in_oklab,var(--cura-sky)_15%,white)] to-[color-mix(in_oklab,var(--cura-indigo)_15%,white)]">
<div className="text-sm text-slate-700">After</div>
<div className="mt-3 flex items-center gap-2 text-slate-900">
<i className="h-4 w-4 text-sky-600" data-lucide="check-circle-2"></i>
<span className="text-sm">Hello 👋, I’ve booked you in.</span>
</div>
<div className="mt-2 flex items-center gap-2 text-slate-900">
<i className="h-4 w-4 text-indigo-600" data-lucide="bot"></i>
<span className="text-sm">Auto-confirmed &amp; logged</span>
</div>
</div>
</div>
<div className="mt-5 text-xs text-slate-600">Reception • Inbox • CRM working together.</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-16 md:py-24">
<div className="max-w-7xl mx-auto px-6 md:px-8">
<div className="text-center" data-animate="" style={{transition: 'opacity 400ms, transform 400ms', opacity: '0', transform: 'translateY(12px)'}}>
<h2 className="text-3xl md:text-4xl tracking-tighter text-slate-900" style={{fontFamily: 'Manrope, Inter', fontWeight: '800'}}>
            More bookings. More revenue. Less stress.
          </h2>
<p className="mt-3 text-slate-600 max-w-2xl mx-auto">Whether you’re solo or scaling, Cura makes every interaction count.</p>
</div>
<div className="mt-10 grid sm:grid-cols-3 gap-4">
<div className="rounded-2xl border border-[var(--cura-line)] p-5 shadow-[var(--cura-sh)] backdrop-blur-xl" data-animate="" style={{background: 'var(--cura-glass)'}}>
<div className="flex items-center gap-2 text-slate-700">
<i className="h-4 w-4 text-sky-600" data-lucide="user"></i>
              Solo providers
            </div>
<p className="mt-2 text-sm text-slate-600">Never miss a client while focusing on your craft.</p>
</div>
<div className="rounded-2xl border border-[var(--cura-line)] p-5 shadow-[var(--cura-sh)] backdrop-blur-xl" data-animate="" style={{background: 'var(--cura-glass)'}}>
<div className="flex items-center gap-2 text-slate-700">
<i className="h-4 w-4 text-indigo-600" data-lucide="users"></i>
              Teams &amp; clinics
            </div>
<p className="mt-2 text-sm text-slate-600">Double conversions with instant follow-ups.</p>
</div>
<div className="rounded-2xl border border-[var(--cura-line)] p-5 shadow-[var(--cura-sh)] backdrop-blur-xl" data-animate="" style={{background: 'var(--cura-glass)'}}>
<div className="flex items-center gap-2 text-slate-700">
<i className="h-4 w-4 text-sky-600" data-lucide="building-2"></i>
              Multi-location groups
            </div>
<p className="mt-2 text-sm text-slate-600">Deliver consistent service everywhere.</p>
</div>
</div>
<div className="mt-12">
<div className="rounded-3xl border border-[var(--cura-line)] p-6 md:p-8 relative overflow-hidden shadow-[var(--cura-sh)] backdrop-blur-2xl" style={{background: 'var(--cura-glass-strong)'}}>
<div className="absolute inset-0 pointer-events-none opacity-40" style={{background: 'radial-gradient(600px 200px at 10% 10%, rgba(67,177,255,.28), transparent 60%), radial-gradient(500px 220px at 90% 80%, rgba(79,103,255,.22), transparent 60%)'}}></div>
<div className="relative" id="carousel" tabindex="0">
<div className="flex transition-transform duration-500 ease-out will-change-transform" id="carousel-track" style={{transform: 'translateX(0%)'}}>
<div className="min-w-full flex items-center justify-center">
<div className="text-center">
<div className="text-4xl md:text-5xl tracking-tighter text-slate-900" style={{fontFamily: 'Manrope', fontWeight: '800'}}>2× more bookings</div>
<div className="mt-2 text-sm text-slate-600">With instant responses and reactivation flows.</div>
</div>
</div>
<div className="min-w-full flex items-center justify-center">
<div className="text-center">
<div className="text-4xl md:text-5xl tracking-tighter text-slate-900" style={{fontFamily: 'Manrope', fontWeight: '800'}}>50% faster replies</div>
<div className="mt-2 text-sm text-slate-600">Across calls, chats, and social DMs.</div>
</div>
</div>
<div className="min-w-full flex items-center justify-center">
<div className="text-center">
<div className="text-4xl md:text-5xl tracking-tighter text-slate-900" style={{fontFamily: 'Manrope', fontWeight: '800'}}>+30% retention</div>
<div className="mt-2 text-sm text-slate-600">Automated reminders keep clients coming back.</div>
</div>
</div>
</div>
<div className="mt-6 flex items-center justify-between">
<div className="flex items-center gap-2">
<button aria-label="Previous" className="rounded-full p-2 hover:bg-[var(--cura-bg-alt)] border border-[var(--cura-line)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60 transition" id="prev">
<i className="h-4 w-4" data-lucide="chevron-left"></i>
</button>
<button aria-label="Next" className="rounded-full p-2 hover:bg-[var(--cura-bg-alt)] border border-[var(--cura-line)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60 transition" id="next">
<i className="h-4 w-4" data-lucide="chevron-right"></i>
</button>
</div>
<div aria-label="Carousel pagination" className="flex items-center gap-2">
<button aria-label="Slide 1" className="carousel-dot h-2.5 w-2.5 rounded-full bg-[rgba(0,0,0,0.08)] hover:bg-[rgba(0,0,0,0.16)] transition" style={{backgroundColor: 'rgba(0,0,0,0.35)'}}></button>
<button aria-label="Slide 2" className="carousel-dot h-2.5 w-2.5 rounded-full bg-[rgba(0,0,0,0.08)] hover:bg-[rgba(0,0,0,0.16)] transition" style={{backgroundColor: 'rgba(0,0,0,0.08)'}}></button>
<button aria-label="Slide 3" className="carousel-dot h-2.5 w-2.5 rounded-full bg-[rgba(0,0,0,0.08)] hover:bg-[rgba(0,0,0,0.16)] transition" style={{backgroundColor: 'rgba(0,0,0,0.08)'}}></button>
</div>
</div>
</div>
</div>
</div>
<div className="mt-10 md:mt-12 grid md:grid-cols-[1fr,2fr] gap-6 items-center">
<img alt="Happy business owner" className="w-full h-56 md:h-64 object-cover rounded-2xl border border-[var(--cura-line)]" loading="lazy" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="rounded-2xl border border-[var(--cura-line)] bg-white p-6 shadow-[var(--cura-sh)]">
<p className="text-lg text-slate-900"><span className="italic" style={{fontFamily: '\'Instrument Serif\', Georgia, serif'}}>“Cura saved us from hiring an extra receptionist</span> — and response times are instant.”</p>
<div className="mt-4 flex items-center gap-3">
<div className="h-10 w-10 rounded-full overflow-hidden border border-[var(--cura-line)]">
<img alt="Customer avatar" className="h-full w-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<div className="text-sm text-slate-700">Dental Clinic Owner</div>
<div className="text-xs text-slate-600">Bangkok</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-16 md:py-24">
<div className="max-w-7xl mx-auto px-6 md:px-8">
<div className="text-center" data-animate="" style={{transition: 'opacity 400ms, transform 400ms', opacity: '0', transform: 'translateY(12px)'}}>
<h2 className="text-3xl md:text-4xl tracking-tighter text-slate-900" style={{fontFamily: 'Manrope, Inter', fontWeight: '800'}}>
            How it works
          </h2>
</div>
<div className="mt-10 grid md:grid-cols-3 gap-4">
<div className="group rounded-2xl border border-[var(--cura-line)] p-6 transition-transform will-change-transform hover:-translate-y-1 hover:border-[var(--cura-line)] shadow-[var(--cura-sh)] backdrop-blur-xl" data-animate="" style={{background: 'var(--cura-glass)', transition: 'opacity 400ms, transform 400ms', opacity: '0', transform: 'translateY(12px)'}}>
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-sky-600" data-lucide="merge"></i>
<div className="text-slate-900 font-medium">Unify</div>
</div>
<p className="mt-2 text-sm text-slate-600">Connect WhatsApp, LINE, Instagram, Messenger, SMS, and calls.</p>
</div>
<div className="group rounded-2xl border border-[var(--cura-line)] p-6 transition-transform will-change-transform hover:-translate-y-1 hover:border-[var(--cura-line)] shadow-[var(--cura-sh)] backdrop-blur-xl" data-animate="" style={{background: 'var(--cura-glass)', transition: 'opacity 400ms, transform 400ms', opacity: '0', transform: 'translateY(12px)'}}>
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-indigo-600" data-lucide="bot"></i>
<div className="text-slate-900 font-medium">Automate</div>
</div>
<p className="mt-2 text-sm text-slate-600">Cura answers, books, routes, and follows up — instantly.</p>
</div>
<div className="group rounded-2xl border border-[var(--cura-line)] p-6 transition-transform will-change-transform hover:-translate-y-1 hover:border-[var(--cura-line)] shadow-[var(--cura-sh)] backdrop-blur-xl" data-animate="" style={{background: 'var(--cura-glass)', transition: 'opacity 400ms, transform 400ms', opacity: '0', transform: 'translateY(12px)'}}>
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-sky-600" data-lucide="database"></i>
<div className="text-slate-900 font-medium">Integrate</div>
</div>
<p className="mt-2 text-sm text-slate-600">Data flows into your CRM, EHR, or apps.</p>
</div>
</div>
</div>
</section>
<section className="py-16 md:py-24">
<div className="max-w-7xl mx-auto px-6 md:px-8">
<div className="text-center" data-animate="" style={{transition: 'opacity 400ms, transform 400ms', opacity: '0', transform: 'translateY(12px)'}}>
<h2 className="text-3xl md:text-4xl tracking-tighter text-slate-900" style={{fontFamily: 'Manrope, Inter', fontWeight: '800'}}>
            Built for clinics. Flexible for any provider.
          </h2>
</div>
<div className="mt-8 grid md:grid-cols-2 gap-4">
<div className="rounded-2xl border border-[var(--cura-line)] p-6 shadow-[var(--cura-sh)] backdrop-blur-xl" style={{background: 'var(--cura-glass)'}}>
<div className="flex items-center gap-2 text-slate-900 font-medium">
<i className="h-5 w-5 text-sky-600" data-lucide="tooth"></i>
              Dental Clinics
            </div>
<p className="mt-2 text-sm text-slate-600">Reduce front-desk workload. Handle new patient inquiries, insurance questions, and bookings automatically.</p>
</div>
<div className="rounded-2xl border border-[var(--cura-line)] p-6 shadow-[var(--cura-sh)] backdrop-blur-xl" style={{background: 'var(--cura-glass)'}}>
<div className="flex items-center gap-2 text-slate-900 font-medium">
<i className="h-5 w-5 text-indigo-600" data-lucide="heart"></i>
              IVF Clinics
            </div>
<p className="mt-2 text-sm text-slate-600">Respond empathetically to sensitive inquiries, guide patients through intake, and secure consultations.</p>
</div>
</div>
</div>
</section>
<section className="py-16 md:py-24" id="integrations">
<div className="max-w-7xl mx-auto px-6 md:px-8">
<div className="text-center" data-animate="" style={{transition: 'opacity 400ms, transform 400ms', opacity: '0', transform: 'translateY(12px)'}}>
<h2 className="text-3xl md:text-4xl tracking-tighter text-slate-900" style={{fontFamily: 'Manrope, Inter', fontWeight: '800'}}>
            Connect Cura to your existing tools.
          </h2>
<p className="mt-3 text-slate-600 max-w-2xl mx-auto">Cura plugs into your practice management software, CRMs, and calendars — so your workflow stays seamless.</p>
</div>
<div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
<div className="group relative rounded-2xl border border-[var(--cura-line)] p-4 text-center hover:bg-[var(--cura-bg-alt)] hover:border-[var(--cura-line)] transition shadow-[var(--cura-sh)]" style={{background: 'var(--cura-glass)'}}>
<div className="mx-auto h-9 w-9 rounded-md bg-white/70 flex items-center justify-center border border-[var(--cura-line)]">
<span className="text-slate-700 text-sm tracking-tight" style={{fontWeight: '600'}}>DX</span>
</div>
<div className="mt-2 text-xs text-slate-600">Dentrix</div>
<div className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition">
<div className="rounded-full px-2 py-1 text-[11px] bg-sky-50 text-sky-700 border border-sky-200">Dentrix</div>
</div>
</div>
<div className="group relative rounded-2xl border border-[var(--cura-line)] p-4 text-center hover:bg-[var(--cura-bg-alt)] hover:border-[var(--cura-line)] transition shadow-[var(--cura-sh)]" style={{background: 'var(--cura-glass)'}}>
<div className="mx-auto h-9 w-9 rounded-md bg-white/70 flex items-center justify-center border border-[var(--cura-line)]">
<span className="text-slate-700 text-sm tracking-tight" style={{fontWeight: '600'}}>OD</span>
</div>
<div className="mt-2 text-xs text-slate-600">OpenDental</div>
<div className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition">
<div className="rounded-full px-2 py-1 text-[11px] bg-sky-50 text-sky-700 border border-sky-200">OpenDental</div>
</div>
</div>
<div className="group relative rounded-2xl border border-[var(--cura-line)] p-4 text-center hover:bg-[var(--cura-bg-alt)] hover:border-[var(--cura-line)] transition shadow-[var(--cura-sh)]" style={{background: 'var(--cura-glass)'}}>
<div className="mx-auto h-9 w-9 rounded-md bg-white/70 flex items-center justify-center border border-[var(--cura-line)]">
<span className="text-slate-700 text-sm tracking-tight" style={{fontWeight: '600'}}>CD</span>
</div>
<div className="mt-2 text-xs text-slate-600">Curve Dental</div>
<div className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition">
<div className="rounded-full px-2 py-1 text-[11px] bg-sky-50 text-sky-700 border border-sky-200">Curve Dental</div>
</div>
</div>
<div className="group relative rounded-2xl border border-[var(--cura-line)] p-4 text-center hover:bg-[var(--cura-bg-alt)] hover:border-[var(--cura-line)] transition shadow-[var(--cura-sh)]" style={{background: 'var(--cura-glass)'}}>
<div className="mx-auto h-9 w-9 rounded-md bg-white/70 flex items-center justify-center border border-[var(--cura-line)]">
<span className="text-slate-700 text-sm tracking-tight" style={{fontWeight: '600'}}>HS</span>
</div>
<div className="mt-2 text-xs text-slate-600">HubSpot</div>
<div className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition">
<div className="rounded-full px-2 py-1 text-[11px] bg-sky-50 text-sky-700 border border-sky-200">HubSpot</div>
</div>
</div>
<div className="group relative rounded-2xl border border-[var(--cura-line)] p-4 text-center hover:bg-[var(--cura-bg-alt)] hover:border-[var(--cura-line)] transition shadow-[var(--cura-sh)]" style={{background: 'var(--cura-glass)'}}>
<div className="mx-auto h-9 w-9 rounded-md bg-white/70 flex items-center justify-center border border-[var(--cura-line)]">
<span className="text-slate-700 text-sm tracking-tight" style={{fontWeight: '600'}}>SF</span>
</div>
<div className="mt-2 text-xs text-slate-600">Salesforce</div>
<div className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition">
<div className="rounded-full px-2 py-1 text-[11px] bg-sky-50 text-sky-700 border border-sky-200">Salesforce</div>
</div>
</div>
<div className="group relative rounded-2xl border border-[var(--cura-line)] p-4 text-center hover:bg-[var(--cura-bg-alt)] hover:border-[var(--cura-line)] transition shadow-[var(--cura-sh)]" style={{background: 'var(--cura-glass)'}}>
<div className="mx-auto h-9 w-9 rounded-md bg-white/70 flex items-center justify-center border border-[var(--cura-line)]">
<span className="text-slate-700 text-sm tracking-tight" style={{fontWeight: '600'}}>WA</span>
</div>
<div className="mt-2 text-xs text-slate-600">WhatsApp</div>
<div className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition">
<div className="rounded-full px-2 py-1 text-[11px] bg-indigo-50 text-indigo-700 border border-indigo-200">WhatsApp</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-16 md:py-24" id="resources">
<div className="max-w-7xl mx-auto px-6 md:px-8">
<div className="text-center" data-animate="" style={{transition: 'opacity 400ms, transform 400ms', opacity: '0', transform: 'translateY(12px)'}}>
<h2 className="text-3xl md:text-4xl tracking-tighter text-slate-900" style={{fontFamily: 'Manrope, Inter', fontWeight: '800'}}>
            Trusted by clinics and providers.
          </h2>
</div>
<div className="mt-8 grid md:grid-cols-3 gap-4 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none">
<article className="snap-center rounded-2xl border border-[var(--cura-line)] overflow-hidden shadow-[var(--cura-sh)]" style={{background: 'var(--cura-glass)'}}>
<img alt="Clinic front desk" className="h-40 w-full object-cover border-b border-[var(--cura-line)]" loading="lazy" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="p-5">
<div className="text-sm text-slate-700">Dental Clinic Owner</div>
<p className="mt-1 text-sm text-slate-600">“Cura saved us from hiring an extra receptionist.”</p>
</div>
</article>
<article className="snap-center rounded-2xl border border-[var(--cura-line)] overflow-hidden shadow-[var(--cura-sh)]" style={{background: 'var(--cura-glass)'}}>
<img alt="Clinic interior" className="h-40 w-full object-cover border-b border-[var(--cura-line)]" loading="lazy" src="https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="p-5">
<div className="text-sm text-slate-700">IVF Clinic Director</div>
<p className="mt-1 text-sm text-slate-600">“Patients get replies instantly — bookings doubled.”</p>
</div>
</article>
<article className="snap-center rounded-2xl border border-[var(--cura-line)] overflow-hidden shadow-[var(--cura-sh)]" style={{background: 'var(--cura-glass)'}}>
<img alt="Therapy practice" className="h-40 w-full object-cover border-b border-[var(--cura-line)]" loading="lazy" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="p-5">
<div className="text-sm text-slate-700">Therapy Practice</div>
<p className="mt-1 text-sm text-slate-600">Consistent, warm responses across every channel.</p>
</div>
</article>
</div>
</div>
</section>
<section className="py-16 md:py-24" id="pricing">
<div className="max-w-7xl mx-auto px-6 md:px-8">
<div className="flex flex-col items-center text-center" data-animate="" style={{transition: 'opacity 400ms, transform 400ms', opacity: '0', transform: 'translateY(12px)'}}>
<h2 className="text-3xl md:text-4xl tracking-tighter text-slate-900" style={{fontFamily: 'Manrope, Inter', fontWeight: '800'}}>
            Simple pricing that scales with you.
          </h2>
<div className="mt-5 flex items-center gap-3">
<span className="text-sm text-slate-600">Monthly</span>
<button aria-checked="false" aria-label="Toggle annual billing" className="relative h-7 w-14 rounded-full bg-white border border-[var(--cura-line)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60" id="billing-toggle" role="switch">
<span className="absolute left-1 top-1 h-5 w-5 rounded-full bg-gradient-to-br from-[var(--cura-sky)] to-[var(--cura-indigo)] transition-all" id="billing-knob" style={{left: '0.25rem'}}></span>
</button>
<span className="text-sm text-slate-600">Annual</span>
<span className="text-xs rounded-full px-2 py-1 bg-sky-50 text-sky-700 border border-sky-200 opacity-0 transition-opacity" id="save-badge" style={{opacity: '0'}}>Save 20%</span>
</div>
</div>
<div className="mt-10 grid md:grid-cols-3 gap-4">
<div className="rounded-2xl border border-[var(--cura-line)] p-6 flex flex-col shadow-[var(--cura-sh)] backdrop-blur-xl" data-animate="" style={{background: 'var(--cura-glass)', transition: 'opacity 400ms, transform 400ms', opacity: '0', transform: 'translateY(12px)'}}>
<div className="text-slate-900 font-medium">Starter</div>
<div className="mt-1 text-sm text-slate-600">Solo providers</div>
<div className="mt-4">
<div className="text-3xl tracking-tighter price" data-annual="$39" data-month="$49" style={{fontFamily: 'Manrope', fontWeight: '800'}}>$49</div>
<div className="text-xs text-slate-600">per seat / mo</div>
</div>
<ul className="mt-4 space-y-2 text-sm text-slate-700">
<li className="flex gap-2"><i className="h-4 w-4 text-sky-600 mt-0.5" data-lucide="check"></i> Omnichannel inbox</li>
<li className="flex gap-2"><i className="h-4 w-4 text-sky-600 mt-0.5" data-lucide="check"></i> Smart replies</li>
<li className="flex gap-2"><i className="h-4 w-4 text-sky-600 mt-0.5" data-lucide="check"></i> Booking links</li>
<li className="flex gap-2"><i className="h-4 w-4 text-sky-600 mt-0.5" data-lucide="check"></i> Basic automations</li>
</ul>
<a className="mt-6 inline-flex items-center justify-center rounded-full bg-white border border-[var(--cura-line)] hover:bg-[var(--cura-bg-alt)] px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60 transition" href="#start" title="Link disabled in preview mode">Choose Starter</a>
</div>
<div className="relative rounded-2xl border border-[var(--cura-line)] p-6 flex flex-col shadow-[var(--cura-sh)] bg-gradient-to-br from-[color-mix(in_oklab,var(--cura-sky)_10%,white)] to-[color-mix(in_oklab,var(--cura-indigo)_10%,white)]" data-animate="" style={{transition: 'opacity 400ms, transform 400ms', opacity: '0', transform: 'translateY(12px)'}}>
<div className="absolute -top-3 right-4 rounded-full px-2 py-1 text-[11px] bg-indigo-50 text-indigo-700 border border-indigo-200">Most Popular</div>
<div className="text-slate-900 font-medium">Pro</div>
<div className="mt-1 text-sm text-slate-600">Small clinics</div>
<div className="mt-4">
<div className="text-3xl tracking-tighter price" data-annual="$159" data-month="$199" style={{fontFamily: 'Manrope', fontWeight: '800'}}>$199</div>
<div className="text-xs text-slate-600">per seat / mo</div>
</div>
<ul className="mt-4 space-y-2 text-sm text-slate-700">
<li className="flex gap-2"><i className="h-4 w-4 text-sky-600 mt-0.5" data-lucide="check"></i> AI reception &amp; call logging</li>
<li className="flex gap-2"><i className="h-4 w-4 text-sky-600 mt-0.5" data-lucide="check"></i> Advanced automations</li>
<li className="flex gap-2"><i className="h-4 w-4 text-sky-600 mt-0.5" data-lucide="check"></i> Team routing &amp; SLAs</li>
<li className="flex gap-2"><i className="h-4 w-4 text-sky-600 mt-0.5" data-lucide="check"></i> Analytics &amp; reactivation</li>
</ul>
<a className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-[var(--cura-sky)] via-[var(--cura-blue)] to-[var(--cura-indigo)] text-white px-4 py-2 text-sm font-medium hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60 transition shadow-[var(--cura-sh)]" href="#start" title="Link disabled in preview mode">Choose Pro</a>
</div>
<div className="rounded-2xl border border-[var(--cura-line)] p-6 flex flex-col shadow-[var(--cura-sh)] backdrop-blur-xl" data-animate="" style={{background: 'var(--cura-glass)', transition: 'opacity 400ms, transform 400ms', opacity: '0', transform: 'translateY(12px)'}}>
<div className="text-slate-900 font-medium">Business</div>
<div className="mt-1 text-sm text-slate-600">Large practices</div>
<div className="mt-4">
<div className="text-3xl tracking-tighter" style={{fontFamily: 'Manrope', fontWeight: '800'}}>Custom</div>
<div className="text-xs text-slate-600">tailored pricing</div>
</div>
<ul className="mt-4 space-y-2 text-sm text-slate-700">
<li className="flex gap-2"><i className="h-4 w-4 text-sky-600 mt-0.5" data-lucide="check"></i> SSO &amp; SAML</li>
<li className="flex gap-2"><i className="h-4 w-4 text-sky-600 mt-0.5" data-lucide="check"></i> Custom integrations</li>
<li className="flex gap-2"><i className="h-4 w-4 text-sky-600 mt-0.5" data-lucide="check"></i> Dedicated success</li>
<li className="flex gap-2"><i className="h-4 w-4 text-sky-600 mt-0.5" data-lucide="check"></i> SLA &amp; security reviews</li>
</ul>
<a className="mt-6 inline-flex items-center justify-center rounded-full bg-white border border-[var(--cura-line)] hover:bg-[var(--cura-bg-alt)] px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60 transition" href="#demo" title="Link disabled in preview mode">Talk to Sales</a>
</div>
</div>
<p className="mt-6 text-xs text-slate-600 text-center">Transparent, per-seat / per-inbox. No hidden costs.</p>
</div>
</section>
<section className="py-16 md:py-24 relative overflow-hidden" id="start">
<div aria-hidden="true" className="absolute inset-0 pointer-events-none opacity-60" style={{background: 'radial-gradient(800px 220px at 20% 0%, rgba(67,177,255,.18), transparent 60%), radial-gradient(800px 220px at 80% 100%, rgba(79,103,255,.16), transparent 60%)'}}></div>
<div className="max-w-7xl mx-auto px-6 md:px-8">
<div className="rounded-3xl border border-[var(--cura-line)] p-6 md:p-8 shadow-[var(--cura-sh)] backdrop-blur-2xl relative overflow-hidden" style={{background: 'var(--cura-glass-strong)'}}>
<div className="absolute -inset-12 opacity-50 pointer-events-none" style={{background: 'conic-gradient(from 180deg at 50% 50%, rgba(67, 177, 255, .12), rgba(79, 103, 255, .12), rgba(76, 211, 243, .12), rgba(67, 177, 255, .12))', filter: 'blur(40px)'}}></div>
<div className="relative z-10 grid md:grid-cols-[1.2fr,1fr] gap-8 items-center">
<div data-animate="" style={{transition: 'opacity 400ms, transform 400ms', opacity: '0', transform: 'translateY(12px)'}}>
<h2 className="text-3xl md:text-4xl tracking-tight text-slate-900" style={{fontFamily: 'Manrope, Inter', fontWeight: '800'}}>Stop missing calls. Start delighting clients.</h2>
<p className="mt-2 text-slate-600">Start free in minutes. No credit card needed.</p>
<ul className="mt-4 space-y-2 text-sm text-slate-700">
<li className="flex items-center gap-2"><i className="h-4 w-4 text-sky-600" data-lucide="bolt"></i> Instant setup</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-indigo-600" data-lucide="lock"></i> Privacy-first</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-sky-600" data-lucide="headphones"></i> Live support</li>
</ul>
</div>
<form aria-label="Start free form" className="relative z-10 rounded-2xl border border-[var(--cura-line)] bg-white p-5 shadow-[var(--cura-sh)]" id="lead-form">
<div className="grid gap-3">
<label className="text-sm text-slate-700" htmlFor="name">Name</label>
<input className="rounded-xl border border-[var(--cura-line)] px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-300/60" id="name" name="name" placeholder="Alex Lee" required="" type="text"/>
<label className="text-sm text-slate-700 mt-2" htmlFor="email">Work email</label>
                &lt;<input autocomplete="email" className="rounded-xl border border-[var(--cura-line)] px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-300/60" id="email" name="email" placeholder="you@company.com" required="" type="email"/>
<label className="text-sm text-slate-700 mt-2" htmlFor="phone">Phone</label>
<input autocomplete="tel" className="rounded-xl border border-[var(--cura-line)] px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-300/60" id="phone" inputmode="tel" name="phone" placeholder="+66 81 234 5678" type="tel"/>
<label className="text-sm text-slate-700 mt-2" htmlFor="company">Company</label>
<input className="rounded-xl border border-[var(--cura-line)] px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-300/60" id="company" name="company" placeholder="Clinic / Business name" type="text"/>
<label className="text-sm text-slate-700 mt-2" htmlFor="industry">Industry</label>
<select className="rounded-xl border border-[var(--cura-line)] px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-300/60 bg-white" id="industry" name="industry">
<option selected="" value="">Choose one</option>
<option>Dental clinic</option>
<option>IVF/Fertility</option>
<option>Therapy / Wellness</option>
<option>Salon / Studio</option>
<option>Retail / Services</option>
<option>Other</option>
</select>
<label className="text-sm text-slate-700 mt-2" htmlFor="notes">What are you looking to improve? (optional)</label>
<textarea className="rounded-xl border border-[var(--cura-line)] px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-300/60 resize-y" id="notes" name="notes" placeholder="e.g., Reduce missed calls, automate WhatsApp, integrate with our CRM" rows="3"></textarea>
<div className="mt-2 flex items-start gap-3">
<input className="mt-1 h-4 w-4 rounded border-[var(--cura-line)] text-sky-600 focus:ring-sky-300/60" id="consent" name="consent" required="" type="checkbox"/>
<label className="text-xs text-slate-600" htmlFor="consent">I agree to the Terms and Privacy Policy.</label>
</div>
<button className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-[var(--cura-sky)] via-[var(--cura-blue)] to-[var(--cura-indigo)] text-white px-4 py-2 text-sm font-medium hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60 transition shadow-[var(--cura-sh)]" id="submit-btn" type="submit">
<i className="h-4 w-4" data-lucide="rocket"></i>
                  Start free
                </button>
<p className="text-[11px] text-slate-500 mt-2">No credit card required. We’ll reach out to help you get set up.</p>
</div>
<div className="hidden rounded-xl border border-green-200 bg-green-50 text-green-700 text-sm px-3 py-2 mt-4" id="form-success">
<div className="flex items-center gap-2">
<i className="h-4 w-4" data-lucide="check-circle-2"></i>
                  Thanks! We’ve received your request. A specialist will reach out shortly.
                </div>
</div>
</form>
</div>
<div className="relative z-10 mt-6 md:mt-8 flex flex-wrap items-center gap-3">
<div className="inline-flex items-center gap-2 rounded-full border border-[var(--cura-line)] bg-white px-3 py-1.5 text-xs text-slate-700 shadow-sm">
<i className="h-4 w-4 text-indigo-600" data-lucide="shield-check"></i>
              HIPAA-ready
            </div>
<div className="inline-flex items-center gap-2 rounded-full border border-[var(--cura-line)] bg-white px-3 py-1.5 text-xs text-slate-700 shadow-sm">
<i className="h-4 w-4 text-sky-600" data-lucide="file-lock-2"></i>
              GDPR compliant
            </div>
<div className="inline-flex items-center gap-2 rounded-full border border-[var(--cura-line)] bg-white px-3 py-1.5 text-xs text-slate-700 shadow-sm">
<i className="h-4 w-4 text-indigo-600" data-lucide="badge-check"></i>
              SOC 2 Type II
            </div>
<div className="inline-flex items-center gap-2 rounded-full border border-[var(--cura-line)] bg-white px-3 py-1.5 text-xs text-slate-700 shadow-sm">
<i className="h-4 w-4 text-sky-600" data-lucide="lock"></i>
              End-to-end encryption
            </div>
</div>
</div>
</div>
</section>
</main>
<footer className="border-t border-[var(--cura-line)] bg-white/70 backdrop-blur-xl" id="about">
<div className="max-w-7xl mx-auto px-6 md:px-8 py-12">
<div className="grid md:grid-cols-4 gap-8">
<div>
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-md bg-gradient-to-br from-[var(--cura-sky)] via-[var(--cura-blue)] to-[var(--cura-indigo)]"></div>
<span className="text-slate-900 text-lg tracking-tight" style={{fontFamily: 'Manrope', fontWeight: '800'}}>Cura</span>
</div>
<p className="mt-3 text-sm text-slate-600 max-w-sm">The AI staff layer for modern providers. Answer every call and message, book more appointments, and keep your data secure.</p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="inline-flex items-center gap-2 rounded-full border border-[var(--cura-line)] bg-white px-2.5 py-1 text-[11px] text-slate-700">
<i className="h-3.5 w-3.5 text-indigo-600" data-lucide="shield-check"></i> HIPAA-ready
            </span>
<span className="inline-flex items-center gap-2 rounded-full border border-[var(--cura-line)] bg-white px-2.5 py-1 text-[11px] text-slate-700">
<i className="h-3.5 w-3.5 text-sky-600" data-lucide="file-lock-2"></i> GDPR
            </span>
<span className="inline-flex items-center gap-2 rounded-full border border-[var(--cura-line)] bg-white px-2.5 py-1 text-[11px] text-slate-700">
<i className="h-3.5 w-3.5 text-indigo-600" data-lucide="badge-check"></i> SOC 2
            </span>
</div>
</div>
<div>
<div className="text-sm font-semibold text-slate-900">Product</div>
<ul className="mt-3 space-y-2 text-sm text-slate-600">
<li><a className="hover:text-slate-900 transition" href="#product">Overview</a></li>
<li><a className="hover:text-slate-900 transition" href="#solutions">AI Receptionist</a></li>
<li><a className="hover:text-slate-900 transition" href="#integrations">Integrations</a></li>
<li><a className="hover:text-slate-900 transition" href="#pricing">Pricing</a></li>
</ul>
</div>
<div>
<div className="text-sm font-semibold text-slate-900">Company</div>
<ul className="mt-3 space-y-2 text-sm text-slate-600">
<li><a className="hover:text-slate-900 transition" href="#resources">Customers</a></li>
<li><a className="hover:text-slate-900 transition" href="#about">About</a></li>
<li><a className="hover:text-slate-900 transition" href="#start">Contact</a></li>
</ul>
</div>
<div>
<div className="text-sm font-semibold text-slate-900">Compliance</div>
<ul className="mt-3 space-y-2 text-sm text-slate-600">
<li><a className="hover:text-slate-900 transition" href="#" title="Link disabled in preview mode">Security</a></li>
<li><a className="hover:text-slate-900 transition" href="#" title="Link disabled in preview mode">Privacy</a></li>
<li><a className="hover:text-slate-900 transition" href="#" title="Link disabled in preview mode">Terms</a></li>
<li><a className="hover:text-slate-900 transition" href="#" title="Link disabled in preview mode">Status</a></li>
</ul>
</div>
</div>
<div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-slate-500">© <span id="year"></span> Cura Labs. All rights reserved.</p>
<div className="flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-full bg-white border border-[var(--cura-line)] hover:bg-[var(--cura-bg-alt)] px-3 py-1.5 text-xs transition" href="#start">
<i className="h-4 w-4" data-lucide="mail"></i> Contact
          </a>
<a className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-[var(--cura-sky)] via-[var(--cura-blue)] to-[var(--cura-indigo)] text-white px-3 py-1.5 text-xs font-medium hover:opacity-95 transition shadow-[var(--cura-sh)]" href="#start">
<i className="h-4 w-4" data-lucide="rocket"></i> Start Free
          </a>
</div>
</div>
</div>
</footer>


    </>
  );
}
