import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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
      lucide.createIcons({
        attrs: { 'stroke-width': 1.5 }
      });

      // Header behavior
      const header = document.getElementById('site-header');
      let lastY = 0;
      const onScroll = () => {
        const y = window.scrollY || window.pageYOffset;
        header.style.transform = y > lastY && y > 16 ? 'translateY(-8px)' : 'translateY(0)';
        header.classList.toggle('drop-shadow', y > 2);
        lastY = y;
      };
      window.addEventListener('scroll', onScroll, { passive: true });

      // Mobile menu
      const menuBtn = document.getElementById('menu-btn');
      const mobileMenu = document.querySelector('#mobile-menu > div');
      let menuOpen = false;
      menuBtn?.addEventListener('click', () => {
        menuOpen = !menuOpen;
        mobileMenu.classList.toggle('hidden', !menuOpen);
      });

      // Reveal on scroll
      const revealEls = document.querySelectorAll('[data-animate]');
      const io = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.remove('opacity-0','translate-y-8');
            e.target.classList.add('opacity-100','translate-y-0');
            io.unobserve(e.target);
          }
        });
      }, { threshold: 0.2 });
      revealEls.forEach((el) => {
        el.classList.add('opacity-0','translate-y-8','transition','duration-700');
        io.observe(el);
      });

      // Counters
      const counters = document.querySelectorAll('[data-counter]');
      const format = (n) => n.toLocaleString();
      const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target;
          const target = parseInt(el.getAttribute('data-target'), 10);
          let start = null;
          const duration = 1600;
          const step = (ts) => {
            if (!start) start = ts;
            const p = Math.min((ts - start) / duration, 1);
            const val = Math.floor(target * (0.5 - Math.cos(Math.PI * p) / 2));
            el.textContent = format(val);
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          counterObserver.unobserve(el);
        });
      }, { threshold: 0.6 });
      counters.forEach((c) => counterObserver.observe(c));

      // Language toggle
      const switchLang = (lang) => {
        const enEls = document.querySelectorAll('[data-i18n$="_en"], [data-i18n="download"]');
        const frEls = document.querySelectorAll('[data-i18n$="_fr"]');
        if (lang === 'fr') {
          enEls.forEach((el) => el.classList.add('hidden'));
          frEls.forEach((el) => el.classList.remove('hidden'));
        } else {
          enEls.forEach((el) => el.classList.remove('hidden'));
          frEls.forEach((el) => el.classList.add('hidden'));
        }
      };
      document.getElementById('lang-en')?.addEventListener('click', () => switchLang('en'));
      document.getElementById('lang-fr')?.addEventListener('click', () => switchLang('fr'));
      document.getElementById('m-lang-en')?.addEventListener('click', () => switchLang('en'));
      document.getElementById('m-lang-fr')?.addEventListener('click', () => switchLang('fr'));

      // Tilt effect
      const tilt = document.getElementById('tilt-card');
      tilt?.addEventListener('mousemove', (e) => {
        const rect = tilt.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rx = ((y / rect.height) - 0.5) * -8;
        const ry = ((x / rect.width) - 0.5) * 8;
        tilt.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
      });
      tilt?.addEventListener('mouseleave', () => {
        tilt.style.transform = 'rotate(0deg)';
      });

      // Earnings calculator
      const amountInput = document.getElementById('amountInput');
      const commissionVal = document.getElementById('commissionVal');
      const fxVal = document.getElementById('fxVal');
      const updateEarnings = () => {
        const amt = Math.max(0, parseFloat(amountInput.value || '0'));
        const commission = amt * 0.022;
        const fx = amt * 0.005;
        commissionVal.textContent = commission.toFixed(2);
        fxVal.textContent = fx.toFixed(2);
      };
      amountInput?.addEventListener('input', updateEarnings);
      updateEarnings();

      // Footer year
      document.getElementById('year').textContent = new Date().getFullYear();

      // Chart.js
      const ctx = document.getElementById('transfersChart');
      if (ctx) {
        const styles = getComputedStyle(document.documentElement);
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
            datasets: [{
              label: 'Transfers',
              data: [620, 740, 690, 810, 1200, 1480, 1320],
              fill: true,
              tension: 0.35,
              borderColor: '#34d399',
              backgroundColor: 'rgba(52, 211, 153, 0.08)',
              pointRadius: 0,
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: {
                grid: { color: 'rgba(255,255,255,0.06)' },
                ticks: { color: 'rgba(229,231,235,0.7)', font: { family: 'Inter', weight: 500 } }
              },
              y: {
                grid: { color: 'rgba(255,255,255,0.06)' },
                ticks: { color: 'rgba(229,231,235,0.7)', font: { family: 'Inter', weight: 500 } }
              }
            },
            plugins: {
              legend: { display: false },
              tooltip: {
                backgroundColor: 'rgba(17,24,39,0.9)',
                titleColor: '#e5e7eb',
                bodyColor: '#e5e7eb',
                borderColor: 'rgba(255,255,255,0.08)',
                borderWidth: 1,
                titleFont: { family: 'Inter', weight: 600 },
                bodyFont: { family: 'Inter', weight: 500 }
              }
            }
          }
        });
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 inset-x-0 z-50 transition-all" id="site-header" style={{transform: 'translateY(0px)'}}>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between gap-6 py-4 backdrop-blur-xl bg-neutral-900/40 ring-1 ring-white/10 rounded-xl mt-4">

<div className="pl-4 pr-2 flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-emerald-500/20 ring-1 ring-emerald-400/30 grid place-items-center text-emerald-400 font-semibold tracking-tight">
              A
            </div>
<span className="text-lg md:text-xl font-semibold tracking-tight">Aflo</span>
</div>

<nav className="hidden lg:flex items-center gap-6 text-sm text-neutral-300">
<a className="hover:text-white transition-colors" href="#how" title="Link disabled in preview mode">How It Works</a>
<a className="hover:text-white transition-colors" href="#features" title="Link disabled in preview mode">Features</a>
<a className="hover:text-white transition-colors" href="#pricing" title="Link disabled in preview mode">Pricing</a>
<a className="hover:text-white transition-colors" href="#countries" title="Link disabled in preview mode">Countries</a>
<a className="hover:text-white transition-colors" href="#about" title="Link disabled in preview mode">About</a>
<a className="hover:text-white transition-colors" href="#support" title="Link disabled in preview mode">Support</a>
</nav>

<div className="flex items-center gap-3 pr-4">
<div className="hidden md:flex items-center text-xs rounded-full ring-1 ring-white/10 overflow-hidden">
<button className="px-3 py-1.5 bg-white/5 hover:bg-white/10 transition-colors" id="lang-en">EN</button>
<button className="px-3 py-1.5 hover:bg-white/10 transition-colors" id="lang-fr">FR</button>
</div>
<a className="inline-flex items-center gap-2 rounded-lg bg-emerald-500/90 hover:bg-emerald-400 text-neutral-900 font-medium px-4 py-2 transition-colors ring-1 ring-emerald-300/50" href="#download" title="Link disabled in preview mode">
<svg className="lucide lucide-download w-4 h-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
<span data-i18n="download">Download App</span>
</a>

<button aria-label="Open Menu" className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-md bg-white/5 hover:bg-white/10 ring-1 ring-white/10" id="menu-btn">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</div>
</div>

<div className="lg:hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="mobile-menu">
<div className="hidden mt-2 p-4 rounded-xl bg-neutral-900/70 ring-1 ring-white/10 backdrop-blur-xl">
<nav className="grid gap-2 text-neutral-300">
<a className="px-3 py-2 rounded-md hover:bg-white/5" href="#how" title="Link disabled in preview mode">How It Works</a>
<a className="px-3 py-2 rounded-md hover:bg-white/5" href="#features" title="Link disabled in preview mode">Features</a>
<a className="px-3 py-2 rounded-md hover:bg-white/5" href="#pricing" title="Link disabled in preview mode">Pricing</a>
<a className="px-3 py-2 rounded-md hover:bg-white/5" href="#countries" title="Link disabled in preview mode">Countries</a>
<a className="px-3 py-2 rounded-md hover:bg-white/5" href="#about" title="Link disabled in preview mode">About</a>
<a className="px-3 py-2 rounded-md hover:bg-white/5" href="#support" title="Link disabled in preview mode">Support</a>
<div className="flex items-center gap-2 pt-2">
<span className="text-xs text-neutral-400">Language:</span>
<div className="inline-flex items-center text-xs rounded-full ring-1 ring-white/10 overflow-hidden">
<button className="px-3 py-1.5 bg-white/5 hover:bg-white/10 transition-colors" id="m-lang-en">EN</button>
<button className="px-3 py-1.5 hover:bg-white/10 transition-colors" id="m-lang-fr">FR</button>
</div>
</div>
</nav>
</div>
</div>
</header>
<main className="md:pt-36 pt-28">

<section className="relative overflow-hidden">
<div className="pointer-events-none absolute inset-0">
<div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl"></div>
<div className="absolute top-0 right-0 h-[28rem] w-[28rem] rounded-full bg-sky-400/10 blur-3xl"></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-10 items-center">

<div className="relative z-10 space-y-6">
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] transition-all transition duration-700 opacity-100 translate-y-0" data-animate="" style={{}}>
<span className="" data-i18n="hero_h1_en">Send Money Home, Earn While You Help</span>
<span className="hidden" data-i18n="hero_h1_fr">Envoyez de l'argent au pays, gagnez en aidant</span>
</h1>
<p className="text-base md:text-lg text-neutral-300 transition-all transition duration-700 opacity-100 translate-y-0" data-animate="" style={{}}>
<span className="" data-i18n="hero_sub_en">The revolutionary P2P platform connecting Europe and Africa.</span>
<span className="hidden" data-i18n="hero_sub_fr">La plateforme P2P révolutionnaire reliant l'Europe et l'Afrique.</span>
</p>
<div className="flex flex-col sm:flex-row gap-3 transition-all transition duration-700 opacity-100 translate-y-0" data-animate="" style={{}}>
<a className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-neutral-900 font-medium px-5 py-3 transition-colors ring-1 ring-emerald-300/60" href="#download" title="Link disabled in preview mode">
<svg className="lucide lucide-send w-5 h-5" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
<span data-i18n="cta_send_en">Start Sending Money</span>
<span className="hidden" data-i18n="cta_send_fr">Commencer un envoi</span>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-lg bg-sky-500/90 hover:bg-sky-400 text-neutral-900 font-medium px-5 py-3 transition-colors ring-1 ring-sky-300/60" href="#fulfill" title="Link disabled in preview mode">
<svg className="lucide lucide-briefcase w-5 h-5" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
<span data-i18n="cta_fulfill_en">Become a Fulfiller</span>
<span className="hidden" data-i18n="cta_fulfill_fr">Devenir Fulfiller</span>
</a>
</div>

<div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-4 text-sm text-neutral-300 transition-all transition duration-700 opacity-100 translate-y-0" data-animate="" style={{}}>
<div className="inline-flex items-center gap-2">
<svg className="lucide lucide-check-circle w-4 h-4 text-emerald-400" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<span>50,000+ Transfers</span>
</div>
<div className="inline-flex items-center gap-2">
<svg className="lucide lucide-shield w-4 h-4 text-emerald-400" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
<span>Licensed &amp; Secure</span>
</div>
<div className="inline-flex items-center gap-2">
<svg className="lucide lucide-gauge w-4 h-4 text-emerald-400" data-lucide="gauge" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 14 4-4"></path><path d="M3.34 19a10 10 0 1 1 17.32 0"></path></svg>
<span>Best Rates</span>
</div>
</div>
</div>

<div className="relative">

<div className="absolute inset-0">
<span className="absolute left-6 top-10 text-emerald-300/80 animate-bounce">€</span>
<span className="absolute right-12 top-16 text-sky-300/80 animate-bounce" style={{animationDelay: '200ms'}}>XAF</span>
<span className="absolute left-12 bottom-10 text-emerald-300/80 animate-bounce" style={{animationDelay: '400ms'}}>XOF</span>
<span className="absolute right-4 bottom-8 text-sky-300/80 animate-bounce" style={{animationDelay: '600ms'}}>CFA</span>
</div>
<div className="relative rounded-2xl bg-white/[0.03] ring-1 ring-white/10 p-5 md:p-6 backdrop-blur-sm overflow-hidden transition-all transition duration-700 opacity-100 translate-y-0" data-animate="" style={{}}>

<div className="relative rounded-xl bg-gradient-to-b from-neutral-900 to-neutral-950 ring-1 ring-white/10 p-4">
<div className="absolute inset-0 -z-0">
<svg aria-hidden="true" className="w-full h-full opacity-50" viewbox="0 0 400 240">
<defs>
</defs>
<circle cx="200" cy="120" fill="url(#rg)" r="110"></circle>
<g fill="none" stroke="#3b82f6" stroke-opacity="0.25">
<ellipse cx="200" cy="120" rx="110" ry="30"></ellipse>
<ellipse cx="200" cy="120" rx="90" ry="25"></ellipse>
<ellipse cx="200" cy="120" rx="70" ry="18"></ellipse>
<ellipse cx="200" cy="120" rx="50" ry="12"></ellipse>
</g>
<g fill="none" stroke="#34d399" stroke-opacity="0.35">
<path d="M95,60 C200,10 200,230 305,180"></path>
<path d="M125,95 C200,70 200,170 275,145"></path>
</g>
<g fill="#34d399">
<circle cx="95" cy="60" r="3"></circle>
<circle cx="305" cy="180" r="3"></circle>
<circle cx="125" cy="95" r="3"></circle>
<circle cx="275" cy="145" r="3"></circle>
</g>
</svg>
</div>

<div className="relative grid grid-cols-2 gap-4 items-end">
<div className="aspect-[9/19] rounded-2xl bg-neutral-950 ring-1 ring-white/10 overflow-hidden translate-y-3 rotate-[-6deg] hover:rotate-[-2deg] transition-transform">
<img alt="App screen - transfer" className="w-full h-full object-cover opacity-90" loading="lazy" src="https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&amp;w=900&amp;auto=format&amp;fit=crop" style={{}}/>
</div>
<div className="aspect-[9/19] rounded-2xl bg-neutral-950 ring-1 ring-white/10 overflow-hidden -translate-y-3 rotate-[6deg] hover:rotate-[2deg] transition-transform will-change-transform" id="tilt-card">
<img alt="App screen - marketplace" className="w-full h-full object-cover opacity-90" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/16875369-691c-48db-ae92-7c57bf541b70_800w.jpg" style={{}}/>
</div>
</div>
</div>

<div className="mt-4 flex items-center justify-between text-xs text-neutral-400">
<div className="inline-flex items-center gap-2">
<svg className="lucide lucide-globe-2 w-4 h-4 text-emerald-400" data-lucide="globe-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path><path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"></path><path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span>Europe ↔ Africa in minutes</span>
</div>
<div className="inline-flex items-center gap-2">
<svg className="lucide lucide-lock w-4 h-4 text-emerald-400" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
<span>Bank-level encryption</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative mt-20 md:mt-28" id="features">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-3 gap-5">

<div className="group rounded-2xl bg-white/[0.03] ring-1 ring-white/10 p-6 hover:bg-white/[0.05] transition-colors transition duration-700 opacity-100 translate-y-0" data-animate="">
<div className="flex items-center justify-between">
<div className="h-10 w-10 rounded-lg bg-emerald-500/10 grid place-items-center ring-1 ring-emerald-400/30">
<svg className="lucide lucide-percent w-5 h-5 text-emerald-400" data-lucide="percent" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="19" x2="5" y1="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle></svg>
</div>
<div className="text-xs text-emerald-300/80">Up to 70% cheaper</div>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight">Lowest Fees</h3>
<p className="mt-2 text-sm text-neutral-300">
                Save more with transparent pricing. No hidden surprises.
              </p>
<div className="mt-4 h-1.5 rounded-full bg-neutral-800 overflow-hidden">
<div className="h-full w-3/4 bg-emerald-400/80 group-hover:w-[85%] transition-all"></div>
</div>
</div>

<div className="group rounded-2xl bg-white/[0.03] ring-1 ring-white/10 p-6 hover:bg-white/[0.05] transition-colors transition duration-700 opacity-100 translate-y-0" data-animate="" style={{}}>
<div className="flex items-center justify-between">
<div className="h-10 w-10 rounded-lg bg-emerald-500/10 grid place-items-center ring-1 ring-emerald-400/30">
<svg className="lucide lucide-zap w-5 h-5 text-emerald-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<div className="text-xs text-sky-300/80">Minutes, not days</div>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight">Instant Transfers</h3>
<p className="mt-2 text-sm text-neutral-300">
                Lightning-fast settlement through our P2P marketplace.
              </p>
<div className="mt-4 flex items-center gap-1.5">
<span className="h-1.5 w-6 rounded-full bg-emerald-400/90"></span>
<span className="h-1.5 w-4 rounded-full bg-emerald-400/70"></span>
<span className="h-1.5 w-2 rounded-full bg-emerald-400/50"></span>
</div>
</div>

<div className="group rounded-2xl bg-white/[0.03] ring-1 ring-white/10 p-6 hover:bg-white/[0.05] transition-colors transition duration-700 opacity-100 translate-y-0" data-animate="" style={{}}>
<div className="flex items-center justify-between">
<div className="h-10 w-10 rounded-lg bg-emerald-500/10 grid place-items-center ring-1 ring-emerald-400/30">
<svg className="lucide lucide-trophy w-5 h-5 text-emerald-400" data-lucide="trophy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path><path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path><path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path><path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path></svg>
</div>
<div className="text-xs text-amber-300/90">Rewards + XP</div>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight">Earn Rewards</h3>
<p className="mt-2 text-sm text-neutral-300">
                Fulfillers earn commission and level up with XP points.
              </p>
<div className="mt-4">
<div className="inline-flex items-center gap-1 text-emerald-300/90 text-xs">
<svg className="lucide lucide-sparkles w-4 h-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span>Confetti unlocked on completion</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative mt-20 md:mt-28" id="how">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">How It Works</h2>
<p className="mt-2 text-neutral-300">Two paths. One seamless experience.</p>
<div className="mt-10 grid lg:grid-cols-3 gap-8">

<div className="rounded-2xl bg-white/[0.03] ring-1 ring-white/10 p-6 transition duration-700 opacity-100 translate-y-0 opacity-0 translate-y-8" data-animate="">
<div className="inline-flex items-center gap-2 text-emerald-300/90 text-sm">
<svg className="lucide lucide-user-round w-4 h-4" data-lucide="user-round" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="8" r="5"></circle><path d="M20 21a8 8 0 0 0-16 0"></path></svg>
<span>For Senders</span>
</div>
<ol className="mt-4 space-y-4">
<li className="flex gap-3">
<div className="h-6 w-6 rounded-full bg-emerald-500/20 ring-1 ring-emerald-400/40 grid place-items-center text-emerald-300 text-xs">1</div>
<div>
<p className="font-medium">Create Transfer Request</p>
<p className="text-sm text-neutral-400">Set amount, recipient, and corridor.</p>
</div>
</li>
<li className="flex gap-3">
<div className="h-6 w-6 rounded-full bg-emerald-500/20 ring-1 ring-emerald-400/40 grid place-items-center text-emerald-300 text-xs">2</div>
<div>
<p className="font-medium">Pay Securely</p>
<p className="text-sm text-neutral-400">Card, bank, or wallet options.</p>
</div>
</li>
<li className="flex gap-3">
<div className="h-6 w-6 rounded-full bg-emerald-500/20 ring-1 ring-emerald-400/40 grid place-items-center text-emerald-300 text-xs">3</div>
<div>
<p className="font-medium">Matched with Fulfiller</p>
<p className="text-sm text-neutral-400">Smart matching for speed.</p>
</div>
</li>
<li className="flex gap-3">
<div className="h-6 w-6 rounded-full bg-emerald-500/20 ring-1 ring-emerald-400/40 grid place-items-center text-emerald-300 text-xs">4</div>
<div>
<p className="font-medium">Money Delivered</p>
<p className="text-sm text-neutral-400">Track in real-time.</p>
</div>
</li>
</ol>
</div>

<div className="relative">
<div className="absolute inset-0 -z-10">
<div className="h-full w-full rounded-3xl bg-gradient-to-b from-emerald-500/5 via-transparent to-sky-500/5 blur-2xl"></div>
</div>
<div className="rounded-3xl bg-white/[0.03] ring-1 ring-white/10 p-6 h-full flex items-center justify-center transition duration-700 opacity-100 translate-y-0 opacity-0 translate-y-8" data-animate="" style={{}}>
<div className="w-full max-w-[320px]">
<div className="aspect-[9/19] rounded-[2rem] ring-1 ring-white/10 bg-neutral-900 overflow-hidden">
<div className="h-11 bg-neutral-950/60 flex items-center justify-center text-xs text-neutral-400 ring-b-1 ring-white/10">Matching</div>
<div className="p-4 space-y-3">
<div className="flex items-center justify-between text-sm">
<span className="text-neutral-300">EUR → XAF</span>
<span className="text-emerald-400 font-medium">Best rate</span>
</div>
<div className="rounded-lg bg-white/[0.04] ring-1 ring-white/10 p-3">
<div className="text-xs text-neutral-400">Fulfiller found</div>
<div className="mt-1 flex items-center justify-between">
<div className="inline-flex items-center gap-2">
<img alt="Fulfiller" className="h-7 w-7 rounded-full object-cover" src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&amp;w=200&amp;auto=format&amp;fit=crop" style={{}}/>
<span className="text-sm">Amina K.</span>
</div>
<span className="text-xs text-emerald-300">1m ETA</span>
</div>
</div>
<button className="w-full mt-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-neutral-900 text-sm font-medium py-2 transition-colors">Confirm</button>
</div>
</div>
</div>
</div>
</div>

<div className="rounded-2xl bg-white/[0.03] ring-1 ring-white/10 p-6 transition duration-700 opacity-100 translate-y-0 opacity-0 translate-y-8" data-animate="" style={{}}>
<div className="inline-flex items-center gap-2 text-sky-300/90 text-sm">
<svg className="lucide lucide-users w-4 h-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span>For Fulfillers</span>
</div>
<ol className="mt-4 space-y-4">
<li className="flex gap-3">
<div className="h-6 w-6 rounded-full bg-sky-500/20 ring-1 ring-sky-400/40 grid place-items-center text-sky-300 text-xs">1</div>
<div>
<p className="font-medium">Browse Requests</p>
<p className="text-sm text-neutral-400">Real-time marketplace feed.</p>
</div>
</li>
<li className="flex gap-3">
<div className="h-6 w-6 rounded-full bg-sky-500/20 ring-1 ring-sky-400/40 grid place-items-center text-sky-300 text-xs">2</div>
<div>
<p className="font-medium">Commit to Fulfill</p>
<p className="text-sm text-neutral-400">Choose by corridor and fee.</p>
</div>
</li>
<li className="flex gap-3">
<div className="h-6 w-6 rounded-full bg-sky-500/20 ring-1 ring-sky-400/40 grid place-items-center text-sky-300 text-xs">3</div>
<div>
<p className="font-medium">Load Local Funds</p>
<p className="text-sm text-neutral-400">MTN, bank, wallet.</p>
</div>
</li>
<li className="flex gap-3">
<div className="h-6 w-6 rounded-full bg-sky-500/20 ring-1 ring-sky-400/40 grid place-items-center text-sky-300 text-xs">4</div>
<div>
<p className="font-medium">Earn Instantly</p>
<p className="text-sm text-neutral-400">Commission + FX position.</p>
</div>
</li>
</ol>
</div>
</div>
</div>
</section>

<section className="relative mt-20 md:mt-28">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="rounded-3xl bg-white/[0.03] ring-1 ring-white/10 p-6 md:p-8">
<div className="grid md:grid-cols-4 gap-6">
<div className="rounded-xl bg-neutral-900/60 ring-1 ring-white/10 p-4">
<div className="text-xs text-neutral-400">Total Transfers Today</div>
<div className="mt-1 text-2xl font-semibold tracking-tight">
<span data-counter="" data-target="1342">1,342</span>
</div>
</div>
<div className="rounded-xl bg-neutral-900/60 ring-1 ring-white/10 p-4">
<div className="text-xs text-neutral-400">Active Users</div>
<div className="mt-1 text-2xl font-semibold tracking-tight">
<span data-counter="" data-target="18873">18,873</span>
</div>
</div>
<div className="rounded-xl bg-neutral-900/60 ring-1 ring-white/10 p-4">
<div className="text-xs text-neutral-400">Countries Connected</div>
<div className="mt-1 text-2xl font-semibold tracking-tight">
<span data-counter="" data-target="22">22</span>
</div>
</div>
<div className="rounded-xl bg-neutral-900/60 ring-1 ring-white/10 p-4">
<div className="text-xs text-neutral-400">Money Saved by Users</div>
<div className="mt-1 text-2xl font-semibold tracking-tight">
                  €<span data-counter="" data-target="486230">486,230</span>
</div>
</div>
</div>

<div className="mt-6">
<h3 className="text-sm text-neutral-300">Transfers (last 7 days)</h3>
<div className="mt-2 rounded-xl bg-neutral-900/60 ring-1 ring-white/10 p-3">
<div className="relative">
<div className="h-48">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-48">
<div className="h-full w-full">
<div className="relative h-48">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">

<div className="relative h-48">
<canvas className="absolute inset-0" height="192" id="transfersChart" style={{display: 'block', boxSizing: 'border-box', height: '192px', width: '1128px'}} width="1128"></canvas>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<p className="mt-3 text-xs text-neutral-400">Peaks align with weekends and salary cycles.</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative mt-20 md:mt-28">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Loved by our community</h2>
<p className="mt-2 text-neutral-300">Real stories from senders and fulfillers.</p>
</div>
<div className="hidden md:flex gap-2 text-xs text-neutral-400">
<span>Swipe</span>
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
<div className="mt-8 overflow-x-auto snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none]" style={{WebkitOverflowScrolling: 'touch'}}>
<div className="flex gap-6 min-w-max pr-8">

<article className="snap-start shrink-0 w-80 rounded-2xl bg-white/[0.03] ring-1 ring-white/10 p-6 hover:bg-white/[0.05] transition-colors">
<div className="flex items-center gap-3">
<img alt="User" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80" style={{}}/>
<div>
<div className="flex items-center gap-2">
<p className="font-medium">Nadia</p>
<span className="text-xs px-1.5 py-0.5 rounded bg-white/5 ring-1 ring-white/10">FR</span>
</div>
<div className="text-xs text-neutral-400">Paris → Dakar</div>
</div>
</div>
<div className="mt-4 text-sm text-neutral-300">
                  “Sent money in under 5 minutes. Fees were way lower than my bank. Je recommande !”
                </div>
<div className="mt-4 flex">
<svg className="lucide lucide-star w-4 h-4 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star-half w-4 h-4 text-amber-400" data-lucide="star-half" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2"></path></svg>
</div>
</article>
<article className="snap-start shrink-0 w-80 rounded-2xl bg-white/[0.03] ring-1 ring-white/10 p-6 hover:bg-white/[0.05] transition-colors">
<div className="flex items-center gap-3">
<img alt="User" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=200&amp;auto=format&amp;fit=crop" style={{}}/>
<div>
<div className="flex items-center gap-2">
<p className="font-medium">Samuel</p>
<span className="text-xs px-1.5 py-0.5 rounded bg-white/5 ring-1 ring-white/10">NG</span>
</div>
<div className="text-xs text-neutral-400">Berlin → Lagos</div>
</div>
</div>
<div className="mt-4 text-sm text-neutral-300">
                  “As a fulfiller, I earn fair commissions and keep my FX balanced. Super smooth.”
                </div>
<div className="mt-4 flex">
<svg className="lucide lucide-star w-4 h-4 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</article>
<article className="snap-start shrink-0 w-80 rounded-2xl bg-white/[0.03] ring-1 ring-white/10 p-6 hover:bg-white/[0.05] transition-colors">
<div className="flex items-center gap-3">
<img alt="User" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1542596768-5d1d21f1cf98?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<div className="flex items-center gap-2">
<p className="font-medium">Awa</p>
<span className="text-xs px-1.5 py-0.5 rounded bg-white/5 ring-1 ring-white/10">CI</span>
</div>
<div className="text-xs text-neutral-400">Madrid → Abidjan</div>
</div>
</div>
<div className="mt-4 text-sm text-neutral-300">
                  “Service client réactif et parcours clair. Je me sens en confiance.”
                </div>
<div className="mt-4 flex">
<svg className="lucide lucide-star w-4 h-4 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</article>
</div>
</div>
</div>
</section>

<section className="relative mt-20 md:mt-28" id="download">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-2 gap-10 items-center">
<div className="order-2 md:order-1">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">A powerful app, made simple</h2>
<p className="mt-2 text-neutral-300">
                Send, track, fulfill, and get rewarded — all in one intuitive experience.
              </p>
<ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
<li className="inline-flex items-center gap-2">
<svg className="lucide lucide-wallet-cards w-4 h-4 text-emerald-400" data-lucide="wallet-cards" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2"></path><path d="M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21"></path></svg>
                  Multi-currency wallets
                </li>
<li className="inline-flex items-center gap-2">
<svg className="lucide lucide-bell w-4 h-4 text-emerald-400" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
                  Instant notifications
                </li>
<li className="inline-flex items-center gap-2">
<svg className="lucide lucide-trophy w-4 h-4 text-emerald-400" data-lucide="trophy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path><path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path><path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path><path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path></svg>
                  Gamified rewards
                </li>
<li className="inline-flex items-center gap-2">
<svg className="lucide lucide-shield-check w-4 h-4 text-emerald-400" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
                  Secure transactions
                </li>
</ul>
<div className="mt-6 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-lg bg-white text-neutral-900 font-medium px-4 py-2 hover:bg-neutral-100 transition-colors ring-1 ring-white/60" href="#" title="Link disabled in preview mode">
<svg className="lucide lucide-apple w-4 h-4" data-lucide="apple" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6.528V3a1 1 0 0 1 1-1h0"></path><path d="M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21"></path></svg>
                  App Store
                </a>
<a className="inline-flex items-center gap-2 rounded-lg bg-white text-neutral-900 font-medium px-4 py-2 hover:bg-neutral-100 transition-colors ring-1 ring-white/60" href="#" title="Link disabled in preview mode">
<svg className="lucide lucide-store w-4 h-4" data-lucide="store" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"></path><path d="M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"></path><path d="M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"></path></svg>
                  Play Store
                </a>
</div>
</div>
<div className="order-1 md:order-2">
<div className="rounded-3xl bg-white/[0.03] ring-1 ring-white/10 p-6">
<div className="grid grid-cols-2 gap-4">
<div className="aspect-[9/19] rounded-[2rem] bg-neutral-900 ring-1 ring-white/10 overflow-hidden">
<img alt="Wallet management" className="w-full h-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
</div>
<div className="aspect-[9/19] rounded-[2rem] bg-neutral-900 ring-1 ring-white/10 overflow-hidden">
<img alt="Marketplace browsing" className="w-full h-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&amp;w=900&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="mt-4 text-xs text-neutral-400">Preview screens. UI subject to change.</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative mt-20 md:mt-28">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="rounded-3xl bg-white/[0.03] ring-1 ring-white/10 p-6 md:p-8">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Security &amp; Trust</h2>
<div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="rounded-xl bg-neutral-900/60 ring-1 ring-white/10 p-4">
<div className="inline-flex items-center gap-2 text-emerald-300/90 text-sm">
<svg className="lucide lucide-badge-check w-4 h-4" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
                  KYC Verified Users
                </div>
</div>
<div className="rounded-xl bg-neutral-900/60 ring-1 ring-white/10 p-4">
<div className="inline-flex items-center gap-2 text-emerald-300/90 text-sm">
<svg className="lucide lucide-lock w-4 h-4" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                  Bank-Level Encryption
                </div>
</div>
<div className="rounded-xl bg-neutral-900/60 ring-1 ring-white/10 p-4">
<div className="inline-flex items-center gap-2 text-emerald-300/90 text-sm">
<svg className="lucide lucide-scroll-text w-4 h-4" data-lucide="scroll-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 12h-5"></path><path d="M15 8h-5"></path><path d="M19 17V5a2 2 0 0 0-2-2H4"></path><path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"></path></svg>
                  Licensed Financial Service
                </div>
</div>
<div className="rounded-xl bg-neutral-900/60 ring-1 ring-white/10 p-4">
<div className="inline-flex items-center gap-2 text-emerald-300/90 text-sm">
<svg className="lucide lucide-life-buoy w-4 h-4" data-lucide="life-buoy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m4.93 4.93 4.24 4.24"></path><path d="m14.83 9.17 4.24-4.24"></path><path d="m14.83 14.83 4.24 4.24"></path><path d="m9.17 14.83-4.24 4.24"></path><circle cx="12" cy="12" r="4"></circle></svg>
                  24/7 Support
                </div>
</div>
</div>

<div className="mt-6 flex flex-wrap items-center gap-4 text-neutral-400 text-sm">
<div className="px-2 py-1 rounded md:rounded-lg bg-white/5 ring-1 ring-white/10 tracking-tight">S</div>
<div className="px-2 py-1 rounded md:rounded-lg bg-white/5 ring-1 ring-white/10 tracking-tight">C</div>
<div className="px-2 py-1 rounded md:rounded-lg bg-white/5 ring-1 ring-white/10 tracking-tight">M</div>
<div className="px-2 py-1 rounded md:rounded-lg bg-white/5 ring-1 ring-white/10 tracking-tight">V</div>
</div>
</div>
</div>
</section>

<section className="relative mt-20 md:mt-28" id="pricing">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-6">

<div className="rounded-3xl bg-white/[0.03] ring-1 ring-white/10 p-6 md:p-8">
<h3 className="text-2xl font-semibold tracking-tight">Ready to Send Money?</h3>
<p className="mt-2 text-neutral-300">Join the waitlist to get notified about new countries and features.</p>
<form className="mt-4 grid sm:grid-cols-[1fr_auto] gap-2">
<input className="w-full rounded-lg bg-neutral-900/60 ring-1 ring-white/10 px-4 py-2.5 text-sm placeholder:text-neutral-500 focus:outline-none focus:ring-emerald-400/40 focus:bg-neutral-900" placeholder="you@example.com" required="" type="email"/>
<button className="rounded-lg bg-emerald-500 hover:bg-emerald-400 text-neutral-900 font-medium px-4 py-2.5 ring-1 ring-emerald-300/60">
                  Join Waitlist
                </button>
</form>
<div className="mt-6">
<div className="text-xs text-neutral-400">Or download now</div>
<div className="mt-2 flex gap-2">
<a aria-label="Download on App Store" className="inline-flex items-center gap-2 rounded-md bg-white text-neutral-900 text-sm font-medium px-3 py-2 hover:bg-neutral-100 ring-1 ring-white/60" href="#" title="Link disabled in preview mode">
<svg className="lucide lucide-apple w-4 h-4" data-lucide="apple" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6.528V3a1 1 0 0 1 1-1h0"></path><path d="M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21"></path></svg> App Store
                  </a>
<a aria-label="Get it on Play Store" className="inline-flex items-center gap-2 rounded-md bg-white text-neutral-900 text-sm font-medium px-3 py-2 hover:bg-neutral-100 ring-1 ring-white/60" href="#" title="Link disabled in preview mode">
<svg className="lucide lucide-store w-4 h-4" data-lucide="store" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"></path><path d="M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"></path><path d="M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"></path></svg> Play Store
                  </a>
</div>
</div>
</div>

<div className="rounded-3xl bg-white/[0.03] ring-1 ring-white/10 p-6 md:p-8" id="fulfill">
<h3 className="text-2xl font-semibold tracking-tight">Want to Earn?</h3>
<p className="mt-2 text-neutral-300">Estimate your earnings as a fulfiller.</p>
<div className="mt-4 grid gap-3">
<label className="text-sm text-neutral-300">Amount to fulfill (EUR)</label>
<input className="w-full rounded-lg bg-neutral-900/60 ring-1 ring-white/10 px-4 py-2.5 text-sm placeholder:text-neutral-500 focus:outline-none focus:ring-sky-400/40 focus:bg-neutral-900" id="amountInput" min="50" step="10" type="number" value="250"/>
<div className="grid sm:grid-cols-2 gap-3">
<div className="rounded-xl bg-neutral-900/60 ring-1 ring-white/10 p-4">
<div className="text-xs text-neutral-400">Commission (2.2%)</div>
<div className="text-xl font-semibold tracking-tight">€<span id="commissionVal">5.50</span></div>
</div>
<div className="rounded-xl bg-neutral-900/60 ring-1 ring-white/10 p-4">
<div className="text-xs text-neutral-400">FX Gain est.</div>
<div className="text-xl font-semibold tracking-tight">€<span id="fxVal">1.25</span></div>
</div>
</div>
<a className="mt-2 inline-flex items-center gap-2 rounded-lg bg-sky-500/90 hover:bg-sky-400 text-neutral-900 font-medium px-4 py-2.5 ring-1 ring-sky-300/60" href="#" title="Link disabled in preview mode">
<svg className="lucide lucide-briefcase w-4 h-4" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
                  Become a Fulfiller
                </a>
<p className="text-xs text-neutral-500">Estimates for illustration only. Actual earnings vary by corridor and market.</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative mt-20 md:mt-28" id="countries">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="rounded-3xl bg-white/[0.03] ring-1 ring-white/10 p-6 md:p-8">
<div className="flex items-end justify-between">
<div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Countries</h2>
<p className="mt-2 text-neutral-300">Popular corridors and methods.</p>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-white" href="#" title="Link disabled in preview mode">
                Explore coverage
                <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
<div className="rounded-2xl bg-neutral-900/60 ring-1 ring-white/10 p-4">
<div className="flex items-center justify-between text-sm">
<span>France → Senegal</span>
<span className="text-neutral-400">EUR→XOF</span>
</div>
<div className="mt-2 text-xs text-neutral-400">Cards, Bank, Wallet</div>
</div>
<div className="rounded-2xl bg-neutral-900/60 ring-1 ring-white/10 p-4">
<div className="flex items-center justify-between text-sm">
<span>Germany → Nigeria</span>
<span className="text-neutral-400">EUR→NGN</span>
</div>
<div className="mt-2 text-xs text-neutral-400">SEPA, Wallet</div>
</div>
<div className="rounded-2xl bg-neutral-900/60 ring-1 ring-white/10 p-4">
<div className="flex items-center justify-between text-sm">
<span>Italy → Cameroon</span>
<span className="text-neutral-400">EUR→XAF</span>
</div>
<div className="mt-2 text-xs text-neutral-400">Card, MTN, Bank</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative mt-20 md:mt-28" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-2 gap-6">
<div className="rounded-3xl bg-white/[0.03] ring-1 ring-white/10 p-6 md:p-8">
<h3 className="text-2xl font-semibold tracking-tight">Our Story</h3>
<p className="mt-2 text-neutral-300">
                Built by a global team connecting families and opportunities across continents.
              </p>
<div className="mt-4 space-y-3 text-sm">
<div className="flex items-center gap-2">
<svg className="lucide lucide-calendar w-4 h-4 text-emerald-400" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
                  Founded 2024
                </div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-trending-up w-4 h-4 text-emerald-400" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
                  50k+ transfers processed
                </div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-rocket w-4 h-4 text-emerald-400" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
                  Vision: A borderless, fair money movement
                </div>
</div>
</div>
<div className="rounded-3xl bg-white/[0.03] ring-1 ring-white/10 p-6 md:p-8" id="support">
<h3 className="text-2xl font-semibold tracking-tight">Support</h3>
<p className="mt-2 text-neutral-300">We’re here to help, anytime.</p>
<div className="mt-4 grid sm:grid-cols-3 gap-3 text-sm">
<a className="rounded-xl bg-neutral-900/60 ring-1 ring-white/10 p-4 hover:bg-neutral-900 transition-colors" href="#" title="Link disabled in preview mode">
<div className="inline-flex items-center gap-2 text-emerald-300/90">
<svg className="lucide lucide-circle-help w-4 h-4" data-lucide="circle-help" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg> FAQ
                  </div>
</a>
<a className="rounded-xl bg-neutral-900/60 ring-1 ring-white/10 p-4 hover:bg-neutral-900 transition-colors" href="#" title="Link disabled in preview mode">
<div className="inline-flex items-center gap-2 text-emerald-300/90">
<svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg> Contact
                  </div>
</a>
<a className="rounded-xl bg-neutral-900/60 ring-1 ring-white/10 p-4 hover:bg-neutral-900 transition-colors" href="#" title="Link disabled in preview mode">
<div className="inline-flex items-center gap-2 text-emerald-300/90">
<svg className="lucide lucide-book-open w-4 h-4" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg> Help Center
                  </div>
</a>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="relative mt-20 md:mt-28">
<div className="border-t border-white/10"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
<div className="grid md:grid-cols-4 gap-6 text-sm">
<div className="space-y-3">
<div className="inline-flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-emerald-500/20 ring-1 ring-emerald-400/30 grid place-items-center text-emerald-400 font-semibold tracking-tight">
                A
              </div>
<span className="font-medium">Aflo</span>
</div>
<p className="text-neutral-400">P2P money movement between Europe and Africa.</p>
<div className="flex items-center gap-3 text-neutral-300">
<a aria-label="Twitter" className="p-2 rounded-md bg-white/5 ring-1 ring-white/10 hover:bg-white/10" href="#" title="Link disabled in preview mode">
<svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a aria-label="LinkedIn" className="p-2 rounded-md bg-white/5 ring-1 ring-white/10 hover:bg-white/10" href="#" title="Link disabled in preview mode">
<svg className="lucide lucide-linkedin w-4 h-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a aria-label="YouTube" className="p-2 rounded-md bg-white/5 ring-1 ring-white/10 hover:bg-white/10" href="#" title="Link disabled in preview mode">
<svg className="lucide lucide-youtube w-4 h-4" data-lucide="youtube" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
</a>
</div>
</div>
<div>
<h4 className="font-medium mb-3">Product</h4>
<ul className="space-y-2 text-neutral-400">
<li><a className="hover:text-white" href="#how" title="Link disabled in preview mode">How It Works</a></li>
<li><a className="hover:text-white" href="#features" title="Link disabled in preview mode">Features</a></li>
<li><a className="hover:text-white" href="#pricing" title="Link disabled in preview mode">Pricing</a></li>
<li><a className="hover:text-white" href="#countries" title="Link disabled in preview mode">Countries</a></li>
</ul>
</div>
<div>
<h4 className="font-medium mb-3">Company</h4>
<ul className="space-y-2 text-neutral-400">
<li><a className="hover:text-white" href="#about" title="Link disabled in preview mode">About</a></li>
<li><a className="hover:text-white" href="#" title="Link disabled in preview mode">Team</a></li>
<li><a className="hover:text-white" href="#" title="Link disabled in preview mode">Press</a></li>
<li><a className="hover:text-white" href="#support" title="Link disabled in preview mode">Support</a></li>
</ul>
</div>
<div>
<h4 className="font-medium mb-3">Legal</h4>
<ul className="space-y-2 text-neutral-400">
<li><a className="hover:text-white" href="#" title="Link disabled in preview mode">Privacy</a></li>
<li><a className="hover:text-white" href="#" title="Link disabled in preview mode">Terms</a></li>
<li><a className="hover:text-white" href="#" title="Link disabled in preview mode">Licenses</a></li>
<li><a className="hover:text-white" href="#" title="Link disabled in preview mode">Security</a></li>
</ul>
</div>
</div>
<div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
<span>© <span id="year">2025</span> Aflo. All rights reserved.</span>
<div className="inline-flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
<span>PCI DSS | SOC 2 | GDPR</span>
</div>
</div>
</div>
</footer>



    </>
  );
}
