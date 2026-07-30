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
      
      // Initialize icons
      document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) window.lucide.createIcons();
      });

      // Animated gradient text (GSAP-like loop)
      document.addEventListener('DOMContentLoaded', () => {
        const targets = document.querySelectorAll('[data-animated-gradient]');
        targets.forEach(el => {
          gsap.fromTo(el, { backgroundPositionX: '0%' }, { backgroundPositionX: '200%', duration: 6, repeat: -1, ease: 'none' });
        });
      });

      // Reveal on scroll
      const reveal = (els) => {
        const io = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.remove('opacity-0','translate-y-6');
              entry.target.classList.add('opacity-100','translate-y-0');
              io.unobserve(entry.target);
            }
          });
        }, { threshold: 0.12 });
        els.forEach(el => {
          el.classList.add('opacity-0','translate-y-6','transition','duration-700');
          io.observe(el);
        });
      };
      reveal(document.querySelectorAll('section, section *:where(h2,h3,p,div,ul,li,a)'));

      // Current year
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
      

<header className="relative z-20">
<div aria-hidden="true" className="absolute inset-x-0 -top-48 h-72 opacity-40 pointer-events-none">
<div className="mx-auto max-w-7xl h-full blur-3xl" style={{background: `radial-gradient(1200px 300px at 50% 30%, rgba(34,197,94,0.25), transparent 60%)`}}></div>
</div>
<div className="max-w-7xl flex mr-auto ml-auto pt-5 pr-6 pb-5 pl-6 items-center justify-between">
<a className="flex items-center gap-2" href="#">
<div className="h-8 w-8 ring-1 ring-emerald-300/30 shadow-emerald-500/20 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-md shadow-lg"></div>
<span className="text-lg font-semibold tracking-tight">BurkinaShop</span>
</a>
<nav className="hidden sm:flex gap-8 text-sm text-neutral-300 items-center">
<a className="relative group px-3 py-1 rounded-md ring-1 ring-transparent transition duration-300 ease-out hover:bg-emerald-500 hover:text-neutral-950 hover:ring-emerald-400/60 hover:translate-y-[-1px] overflow-hidden" href="#features">
<span className="relative z-10">Features</span>
<span className="pointer-events-none absolute left-2 right-2 bottom-0 h-0.5 bg-emerald-400/70 opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 transition duration-300 ease-out origin-left rounded-full"></span>
</a>
<a className="relative group px-3 py-1 rounded-md ring-1 ring-transparent transition duration-300 ease-out hover:bg-emerald-500 hover:text-neutral-950 hover:ring-emerald-400/60 hover:translate-y-[-1px] overflow-hidden" href="#how">
<span className="relative z-10">How it works</span>
<span className="pointer-events-none absolute left-2 right-2 bottom-0 h-0.5 bg-emerald-400/70 opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 transition duration-300 ease-out origin-left rounded-full"></span>
</a>
<a className="relative group px-3 py-1 rounded-md ring-1 ring-transparent transition duration-300 ease-out hover:bg-emerald-500 hover:text-neutral-950 hover:ring-emerald-400/60 hover:translate-y-[-1px] overflow-hidden" href="#pricing">
<span className="relative z-10">Pricing</span>
<span className="pointer-events-none absolute left-2 right-2 bottom-0 h-0.5 bg-emerald-400/70 opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 transition duration-300 ease-out origin-left rounded-full"></span>
</a>
<a className="relative group px-3 py-1 rounded-md ring-1 ring-transparent transition duration-300 ease-out hover:bg-emerald-500 hover:text-neutral-950 hover:ring-emerald-400/60 hover:translate-y-[-1px] overflow-hidden" href="#support">
<span className="relative z-10">Support</span>
<span className="pointer-events-none absolute left-2 right-2 bottom-0 h-0.5 bg-emerald-400/70 opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 transition duration-300 ease-out origin-left rounded-full"></span>
</a>
</nav>
<div className="flex items-center gap-3">
<a className="text-sm text-neutral-300 hidden sm:inline px-3 py-1 rounded-md ring-1 ring-transparent hover:bg-emerald-500 hover:text-neutral-950 hover:ring-emerald-400/60 transition duration-200 hover:translate-y-[-1px]" href="#cta">See a demo</a>
<a className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-4 py-2 text-sm font-semibold text-neutral-950 ring-1 ring-emerald-400/60 shadow-[0_1px_0_0_rgba(255,255,255,0.08)_inset,0_10px_30px_-10px_rgba(16,185,129,0.8)] transition hover:translate-y-[-1px] hover:shadow-[0_1px_0_0_rgba(255,255,255,0.1)_inset,0_18px_60px_-12px_rgba(16,185,129,0.9)]" href="#cta">
<svg className="lucide lucide-rocket w-4 h-4" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
      Create My Store
    </a>
</div>
</div>
</header>

<section className="relative overflow-hidden transition duration-700 opacity-100 translate-y-0">
<div className="absolute inset-0 -z-10 transition duration-700 opacity-100 translate-y-0">
<div aria-hidden="true" className="absolute inset-x-0 top-[-10%] h-[600px] opacity-50 transition duration-700 opacity-100 translate-y-0" style={{background: `radial-gradient(600px 200px at 20% 20%, rgba(34,197,94,0.18), transparent 60%),
            radial-gradient(700px 250px at 80% 10%, rgba(34,197,94,0.12), transparent 60%)`}}>
</div>
<div className="absolute inset-0 opacity-[0.07] transition duration-700 opacity-100 translate-y-0" style={{backgroundImage: `radial-gradient(circle at 1px 1px, #22c55e 1px, transparent 0)`, backgroundSize: `22px 22px`}}></div>
</div>
<div className="mx-auto max-w-7xl px-6 pt-10 pb-20 md:pt-16 md:pb-28 grid md:grid-cols-2 gap-12 items-center transition duration-700 opacity-100 translate-y-0">
<div className="space-y-6 transition duration-700 opacity-100 translate-y-0">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300 backdrop-blur transition duration-700 opacity-100 translate-y-0">
<svg className="lucide lucide-sparkles h-3.5 w-3.5 text-emerald-400" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
            Built for Burkina Faso
          </div>
<h1 className="sm:text-5xl lg:text-6xl leading-tight text-4xl font-extrabold tracking-tight">
<span className="bg-clip-text text-transparent" data-animated-gradient="" style={{backgroundImage: `linear-gradient(120deg, #22C55E 0%, #86efac 40%, #22C55E 80%)`, backgroundSize: `200% 100%`}}>While your competitors sleep,</span>
            you sell 24/7 in Burkina Faso.
          </h1>
<p className="text-base sm:text-lg text-neutral-300 max-w-xl transition duration-700 opacity-100 translate-y-0">
            Create your online store in minutes. Accept payments via Orange Money, Moov Money, or cash on delivery.
          </p>
<div className="flex flex-col sm:flex-row gap-3 transition duration-700 opacity-100 translate-y-0 opacity-0 translate-y-6">
<a className="group inline-flex items-center justify-center gap-2 rounded-md bg-emerald-500 px-5 py-3 text-sm font-semibold text-neutral-950 ring-1 ring-emerald-400/60 shadow-[0_1px_0_0_rgba(255,255,255,0.08)_inset,0_10px_30px_-10px_rgba(16,185,129,0.8)] transition will-change-transform hover:translate-y-[-1px] hover:shadow-[0_1px_0_0_rgba(255,255,255,0.1)_inset,0_18px_60px_-12px_rgba(16,185,129,0.9)] duration-700 opacity-100 translate-y-0 opacity-0 translate-y-6" href="#pricing" id="cta">
<svg className="lucide lucide-store w-4 h-4" data-lucide="store" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"></path><path d="M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"></path><path d="M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"></path></svg>
              Create My Store for Free
            </a>
<a className="inline-flex items-center justify-center gap-2 rounded-md bg-white/5 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/10 backdrop-blur transition hover:bg-white/10 duration-700 opacity-100 translate-y-0 opacity-0 translate-y-6" href="#demo">
<svg className="lucide lucide-play w-4 h-4 text-emerald-400" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
              See a Demo Store
            </a>
</div>
<div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-neutral-300 pt-2 transition duration-700 opacity-100 translate-y-0 opacity-0 translate-y-6">
<div className="inline-flex items-center gap-2 transition duration-700 opacity-100 translate-y-0 opacity-0 translate-y-6">
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-emerald-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
              Already 200+ merchants
            </div>
<div className="inline-flex items-center gap-2 transition duration-700 opacity-100 translate-y-0 opacity-0 translate-y-6">
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-emerald-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
              24/7 WhatsApp support
            </div>
<div className="inline-flex items-center gap-2 transition duration-700 opacity-100 translate-y-0 opacity-0 translate-y-6">
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-emerald-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
              Instant payments
            </div>
</div>
</div>

<div className="relative transition duration-700 opacity-100 translate-y-0">
<div className="absolute -inset-6 rounded-3xl blur-3xl opacity-30 transition duration-700 opacity-100 translate-y-0" style={{background: `conic-gradient(from 180deg at 50% 50%, rgba(34,197,94,0.2), transparent, rgba(34,197,94,0.2))`}}></div>
<div className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-neutral-900 to-neutral-950 p-4 shadow-2xl transition duration-700 opacity-100 translate-y-0">
<div className="rounded-xl overflow-hidden border border-white/10 transition duration-700 opacity-100 translate-y-0">
<img alt="BurkinaShop dashboard preview" className="w-full h-64 sm:h-80 object-cover" src="https://images.unsplash.com/photo-1523475472560-d2df97ec485c?q=80&w=1640&auto=format&fit=crop" />
</div>
<div className="mt-4 grid grid-cols-3 gap-3 transition duration-700 opacity-100 translate-y-0 opacity-0 translate-y-6">
<div className="rounded-lg border border-white/10 bg-white/5 p-3 transition duration-700 opacity-100 translate-y-0 opacity-0 translate-y-6">
<div className="text-xs text-neutral-300 transition duration-700 opacity-100 translate-y-0 opacity-0 translate-y-6">Payments</div>
<div className="mt-1 text-sm font-semibold transition duration-700 opacity-100 translate-y-0 opacity-0 translate-y-6">Orange • Moov</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-3 transition duration-700 opacity-100 translate-y-0 opacity-0 translate-y-6">
<div className="text-xs text-neutral-300 transition duration-700 opacity-100 translate-y-0 opacity-0 translate-y-6">Orders</div>
<div className="mt-1 text-sm font-semibold transition duration-700 opacity-100 translate-y-0 opacity-0 translate-y-6">+32 today</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-3 transition duration-700 opacity-100 translate-y-0 opacity-0 translate-y-6">
<div className="text-xs text-neutral-300 transition duration-700 opacity-100 translate-y-0 opacity-0 translate-y-6">Revenue</div>
<div className="mt-1 text-sm font-semibold text-emerald-400 transition duration-700 opacity-100 translate-y-0 opacity-0 translate-y-6">+215k FCFA</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="md:py-24 transition duration-700 pt-16 pb-16 opacity-100 translate-y-0 opacity-0 translate-y-6">
<div className="mx-auto max-w-7xl px-6 transition duration-700 opacity-100 translate-y-0 opacity-0 translate-y-6">
<div className="max-w-2xl transition duration-700 opacity-100 translate-y-0 opacity-0 translate-y-6">
<h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight transition duration-700 opacity-100 translate-y-0 opacity-0 translate-y-6">The e-commerce solution built for Burkinabè merchants.</h2>
<p className="mt-3 text-neutral-300 transition duration-700 opacity-100 translate-y-0 opacity-0 translate-y-6">Focus on selling. We handle payments, storefront, and delivery workflow.</p>
</div>
<div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 transition duration-700 opacity-100 translate-y-0 opacity-0 translate-y-6">
<div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/[0.07] duration-700 opacity-100 translate-y-0 opacity-0 translate-y-6">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/15 ring-1 ring-emerald-400/30 transition duration-700 opacity-100 translate-y-0 opacity-0 translate-y-6">
<svg className="lucide lucide-smartphone w-5 h-5 text-emerald-400" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight transition duration-700 opacity-100 translate-y-0 opacity-0 translate-y-6">100% Mobile</h3>
<p className="mt-1 text-neutral-300 text-sm transition duration-700 opacity-100 translate-y-0 opacity-0 translate-y-6">Manage your store from your phone. Add products, track orders, get paid.</p>
</div>
<div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/[0.07] duration-700 opacity-100 translate-y-0 opacity-0 translate-y-6">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/15 ring-1 ring-emerald-400/30 transition duration-700 opacity-100 translate-y-0 opacity-0 translate-y-6">
<svg className="lucide lucide-wallet w-5 h-5 text-emerald-400" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight transition duration-700 opacity-100 translate-y-0 opacity-0 translate-y-6">Local Payments</h3>
<p className="mt-1 text-neutral-300 text-sm transition duration-700 opacity-100 translate-y-0 opacity-0 translate-y-6">Accept Orange Money, Moov Money, or cash on delivery—instantly.</p>
</div>
<div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/[0.07] duration-700 opacity-100 translate-y-0 opacity-0 translate-y-6">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/15 ring-1 ring-emerald-400/30 transition duration-700 opacity-100 translate-y-0 opacity-0 translate-y-6">
<svg className="lucide lucide-truck w-5 h-5 text-emerald-400" data-lucide="truck" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight transition duration-700 opacity-100 translate-y-0 opacity-0 translate-y-6">Simplified Delivery</h3>
<p className="mt-1 text-neutral-300 text-sm transition duration-700 opacity-100 translate-y-0 opacity-0 translate-y-6">Offer store pickup or local delivery with easy order tracking.</p>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 opacity-0 translate-y-6 transition duration-700" id="how">
<div className="mx-auto max-w-7xl px-6 opacity-0 translate-y-6 transition duration-700">
<div className="max-w-2xl opacity-0 translate-y-6 transition duration-700">
<h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight opacity-0 translate-y-6 transition duration-700">How it works</h2>
<p className="mt-3 text-neutral-300 opacity-0 translate-y-6 transition duration-700">Launch in minutes—no code, no hassle.</p>
</div>
<div className="mt-10 grid gap-6 md:grid-cols-4 opacity-0 translate-y-6 transition duration-700">
<div className="rounded-2xl border border-white/10 bg-white/5 p-6 opacity-0 translate-y-6 transition duration-700">
<div className="flex items-center gap-2 text-emerald-400 text-sm opacity-0 translate-y-6 transition duration-700">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/15 ring-1 ring-emerald-400/30 font-medium">1</span>
<span>Create your account</span>
</div>
<p className="mt-3 text-sm text-neutral-300 opacity-0 translate-y-6 transition duration-700">Sign up with phone number or email to get your store URL.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-6 opacity-0 translate-y-6 transition duration-700">
<div className="flex items-center gap-2 text-emerald-400 text-sm opacity-0 translate-y-6 transition duration-700">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/15 ring-1 ring-emerald-400/30 font-medium">2</span>
<span>Add your products</span>
</div>
<p className="mt-3 text-sm text-neutral-300 opacity-0 translate-y-6 transition duration-700">Upload photos, set CFA prices, and manage stock from your phone.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-6 opacity-0 translate-y-6 transition duration-700">
<div className="flex items-center gap-2 text-emerald-400 text-sm opacity-0 translate-y-6 transition duration-700">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/15 ring-1 ring-emerald-400/30 font-medium">3</span>
<span>Activate payments</span>
</div>
<p className="mt-3 text-sm text-neutral-300 opacity-0 translate-y-6 transition duration-700">Enable Orange Money, Moov Money, or cash on delivery in one tap.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-6 opacity-0 translate-y-6 transition duration-700">
<div className="flex items-center gap-2 text-emerald-400 text-sm opacity-0 translate-y-6 transition duration-700">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/15 ring-1 ring-emerald-400/30 font-medium">4</span>
<span>Share your store</span>
</div>
<p className="mt-3 text-sm text-neutral-300 opacity-0 translate-y-6 transition duration-700">Share via WhatsApp, Facebook, or SMS and start selling instantly.</p>
</div>
</div>
<div className="mt-8 opacity-0 translate-y-6 transition duration-700">
<a className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-5 py-3 text-sm font-semibold text-neutral-950 ring-1 ring-emerald-400/60 shadow-[0_1px_0_0_rgba(255,255,255,0.08)_inset,0_10px_30px_-10px_rgba(16,185,129,0.8)] transition hover:translate-y-[-1px] opacity-0 translate-y-6 duration-700" href="#pricing">
<svg className="lucide lucide-wand-2 w-4 h-4" data-lucide="wand-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path><path d="M11 3H9"></path></svg>
            Start for Free
          </a>
</div>
</div>
</section>

<section className="py-16 md:py-24 opacity-0 translate-y-6 transition duration-700" id="pricing">
<div className="mx-auto max-w-7xl px-6 opacity-0 translate-y-6 transition duration-700">
<div className="text-center max-w-2xl mx-auto opacity-0 translate-y-6 transition duration-700">
<h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight opacity-0 translate-y-6 transition duration-700">An online store accessible to everyone.</h2>
<p className="mt-3 text-neutral-300 opacity-0 translate-y-6 transition duration-700">Simple, transparent pricing with local payment support.</p>
</div>
<div className="mt-10 grid gap-6 md:grid-cols-3 opacity-0 translate-y-6 transition duration-700">

<div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 opacity-0 translate-y-6 transition duration-700">
<div className="flex items-center justify-between opacity-0 translate-y-6 transition duration-700">
<h3 className="text-lg font-semibold tracking-tight opacity-0 translate-y-6 transition duration-700">Freemium</h3>
<span className="text-xs text-neutral-300">Start now</span>
</div>
<div className="mt-4 opacity-0 translate-y-6 transition duration-700">
<div className="text-3xl font-extrabold tracking-tight opacity-0 translate-y-6 transition duration-700">0 <span className="text-base font-medium text-neutral-300">XOF</span></div>
</div>
<ul className="mt-4 space-y-2 text-sm text-neutral-300 opacity-0 translate-y-6 transition duration-700">
<li className="flex gap-2 opacity-0 translate-y-6 transition duration-700"><svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Up to 5 products</li>
<li className="flex gap-2 opacity-0 translate-y-6 transition duration-700"><svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>WhatsApp direct link</li>
<li className="flex gap-2 opacity-0 translate-y-6 transition duration-700"><svg className="lucide lucide-minus w-4 h-4 text-neutral-500" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>Basic features</li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-white/5 px-4 py-2.5 text-sm font-semibold text-white ring-1 ring-white/10 transition hover:bg-white/10 opacity-0 translate-y-6 duration-700" href="#cta">
              Get started
            </a>
</div>

<div className="relative rounded-2xl border border-emerald-400/30 bg-gradient-to-b from-emerald-500/10 to-transparent p-6 ring-1 ring-emerald-300/30 shadow-[0_0_0_1px_rgba(16,185,129,0.15)_inset,0_30px_80px_-20px_rgba(16,185,129,0.35)] opacity-0 translate-y-6 transition duration-700">
<div className="absolute -top-3 right-4 px-2 py-1 rounded-full bg-emerald-500 text-neutral-950 text-xs font-semibold opacity-0 translate-y-6 transition duration-700">Most Popular</div>
<div className="flex items-center justify-between opacity-0 translate-y-6 transition duration-700">
<h3 className="text-lg font-semibold tracking-tight opacity-0 translate-y-6 transition duration-700">Pro</h3>
<span className="text-xs text-neutral-300">Scale fast</span>
</div>
<div className="mt-4 opacity-0 translate-y-6 transition duration-700">
<div className="text-3xl font-extrabold tracking-tight opacity-0 translate-y-6 transition duration-700">20,000 <span className="text-base font-medium text-neutral-300">XOF / month</span></div>
</div>
<ul className="mt-4 space-y-2 text-sm text-neutral-300 opacity-0 translate-y-6 transition duration-700">
<li className="flex gap-2 opacity-0 translate-y-6 transition duration-700"><svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Unlimited products</li>
<li className="flex gap-2 opacity-0 translate-y-6 transition duration-700"><svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Custom domain</li>
<li className="flex gap-2 opacity-0 translate-y-6 transition duration-700"><svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Order tracking</li>
<li className="flex gap-2 opacity-0 translate-y-6 transition duration-700"><svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>VIP support</li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-neutral-950 ring-1 ring-emerald-400/60 transition hover:translate-y-[-1px] opacity-0 translate-y-6 duration-700" href="#cta">
              Choose Pro
            </a>
</div>

<div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 opacity-0 translate-y-6 transition duration-700">
<div className="flex items-center justify-between opacity-0 translate-y-6 transition duration-700">
<h3 className="text-lg font-semibold tracking-tight opacity-0 translate-y-6 transition duration-700">Standard</h3>
<span className="text-xs text-neutral-300">For growing stores</span>
</div>
<div className="mt-4 opacity-0 translate-y-6 transition duration-700">
<div className="text-3xl font-extrabold tracking-tight opacity-0 translate-y-6 transition duration-700">5,500 <span className="text-base font-medium text-neutral-300">XOF / month</span></div>
</div>
<ul className="mt-4 space-y-2 text-sm text-neutral-300 opacity-0 translate-y-6 transition duration-700">
<li className="flex gap-2 opacity-0 translate-y-6 transition duration-700"><svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Up to 50 products</li>
<li className="flex gap-2 opacity-0 translate-y-6 transition duration-700"><svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Basic analytics</li>
<li className="flex gap-2 opacity-0 translate-y-6 transition duration-700"><svg className="lucide lucide-check w-4 h-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Priority support</li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-white/5 px-4 py-2.5 text-sm font-semibold text-white ring-1 ring-white/10 transition hover:bg-white/10 opacity-0 translate-y-6 duration-700" href="#cta">
              Choose Standard
            </a>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 opacity-0 translate-y-6 transition duration-700" id="testimonials">
<div className="mx-auto max-w-7xl px-6 opacity-0 translate-y-6 transition duration-700">
<div className="text-center max-w-2xl mx-auto opacity-0 translate-y-6 transition duration-700">
<h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight opacity-0 translate-y-6 transition duration-700">Loved by local merchants</h2>
<p className="mt-3 text-neutral-300 opacity-0 translate-y-6 transition duration-700">Real stories from Burkina Faso.</p>
</div>
<div className="mt-10 grid gap-6 md:grid-cols-3 opacity-0 translate-y-6 transition duration-700">
<div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur opacity-0 translate-y-6 transition duration-700">
<div className="flex items-center gap-3 opacity-0 translate-y-6 transition duration-700">
<img alt="Mariam avatar" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop" />
<div className="opacity-0 translate-y-6 transition duration-700">
<div className="text-sm font-semibold tracking-tight opacity-0 translate-y-6 transition duration-700">Mariam</div>
<div className="text-xs text-neutral-400 opacity-0 translate-y-6 transition duration-700">Seller in Ouaga</div>
</div>
</div>
<p className="mt-4 text-sm text-neutral-300 opacity-0 translate-y-6 transition duration-700">“I launched in one evening and started receiving Orange Money payments the next day. Simple and reliable.”</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur opacity-0 translate-y-6 transition duration-700">
<div className="flex items-center gap-3 opacity-0 translate-y-6 transition duration-700">
<img alt="Ibrahim avatar" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=400&auto=format&fit=crop" />
<div className="opacity-0 translate-y-6 transition duration-700">
<div className="text-sm font-semibold tracking-tight opacity-0 translate-y-6 transition duration-700">Ibrahim</div>
<div className="text-xs text-neutral-400 opacity-0 translate-y-6 transition duration-700">Spare parts shop in Bobo</div>
</div>
</div>
<p className="mt-4 text-sm text-neutral-300 opacity-0 translate-y-6 transition duration-700">“Order tracking helps my delivery guy a lot. Customers pay on delivery or via Moov—perfect for us.”</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur opacity-0 translate-y-6 transition duration-700">
<div className="flex items-center gap-3 opacity-0 translate-y-6 transition duration-700">
<img alt="Awa avatar" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=400&auto=format&fit=crop" />
<div className="opacity-0 translate-y-6 transition duration-700">
<div className="text-sm font-semibold tracking-tight opacity-0 translate-y-6 transition duration-700">Awa</div>
<div className="text-xs text-neutral-400 opacity-0 translate-y-6 transition duration-700">Merchant in Koudougou</div>
</div>
</div>
<p className="mt-4 text-sm text-neutral-300 opacity-0 translate-y-6 transition duration-700">“The mobile dashboard is clean. I manage products and prices from my phone between sales.”</p>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 opacity-0 translate-y-6 transition duration-700">
<div className="mx-auto max-w-3xl px-6 text-center opacity-0 translate-y-6 transition duration-700">
<h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight opacity-0 translate-y-6 transition duration-700">More than 200 merchants already sell online with BurkinaShop. Why not you?</h3>
<a className="mt-6 inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 text-sm font-semibold text-neutral-950 ring-1 ring-emerald-400/60 shadow-[0_1px_0_0_rgba(255,255,255,0.08)_inset,0_10px_30px_-10px_rgba(16,185,129,0.8)] transition hover:translate-y-[-1px] opacity-0 translate-y-6 duration-700" href="#pricing">
<svg className="lucide lucide-rocket w-4 h-4" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
          Create My Store for Free
        </a>
</div>
</section>

<footer className="border-t border-white/10 py-12" id="support">
<div className="mx-auto max-w-7xl px-6">
<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-gradient-to-br from-emerald-400 to-emerald-600 ring-1 ring-emerald-300/30"></div>
<span className="text-lg font-semibold tracking-tight">BurkinaShop</span>
</div>
<nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-neutral-300">
<a className="hover:text-white transition" href="#features">Features</a>
<a className="hover:text-white transition" href="#pricing">Pricing</a>
<a className="inline-flex items-center gap-1 hover:text-white transition" href="https://wa.me/22600000000" rel="noopener" target="_blank">
<svg className="lucide lucide-message-circle w-4 h-4 text-emerald-400" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
              WhatsApp Support
            </a>
<a className="hover:text-white transition" href="#">Privacy Policy</a>
</nav>
</div>
<p className="mt-6 text-xs text-neutral-400">“BurkinaShop is a SaaS solution built for merchants in Burkina Faso.”</p>
<p className="mt-2 text-xs text-neutral-500">© <span id="year">2025</span> BurkinaShop. All rights reserved.</p>
</div>
</footer>

<div className="sr-only" id="demo">Demo</div>


    </>
  );
}
