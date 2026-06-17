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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date()); gtag('config', 'G-XXXXXXX');



      // Icons
      document.addEventListener('DOMContentLoaded', function () {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      });

      // Mobile menu
      const menuBtn = document.getElementById('menuBtn');
      const mobileNav = document.getElementById('mobileNav');
      if (menuBtn) {
        menuBtn.addEventListener('click', () => {
          mobileNav.classList.toggle('hidden');
        });
      }

      // Video modal controls
      const videoModal = document.getElementById('videoModal');
      const video = document.getElementById('explainerVideo');
      const openVideoButtons = ['openVideo', 'openVideoMobile', 'openVideoHero', 'openVideoCard'].map(id => document.getElementById(id));
      const closeVideo = document.getElementById('closeVideo');

      function openVideoModal() {
        videoModal.classList.remove('hidden');
        video && video.play && video.play().catch(() => {});
      }
      function closeVideoModal() {
        videoModal.classList.add('hidden');
        video && video.pause && video.pause();
      }
      openVideoButtons.forEach(btn => btn && btn.addEventListener('click', openVideoModal));
      closeVideo && closeVideo.addEventListener('click', closeVideoModal);
      videoModal && videoModal.addEventListener('click', (e) => {
        if (e.target === videoModal) closeVideoModal();
      });

      // Demo form submission (mock)
      const demoForm = document.getElementById('demoForm');
      const newsletterForm = document.getElementById('newsletterForm');
      const toast = document.getElementById('toast');
      const toastClose = document.getElementById('toastClose');

      function showToast(msg) {
        if (!toast) return;
        toast.querySelector('div div.text-sm').textContent = msg;
        toast.classList.remove('hidden');
        setTimeout(() => toast.classList.add('hidden'), 4000);
      }
      toastClose && toastClose.addEventListener('click', () => toast.classList.add('hidden'));

      function mockPost(data) {
        return new Promise((resolve) => setTimeout(() => resolve({ ok: true }), 800));
      }

      demoForm && demoForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = Object.fromEntries(new FormData(demoForm));
        const btn = demoForm.querySelector('button[type="submit"]');
        btn.disabled = true; btn.classList.add('opacity-60', 'cursor-not-allowed');
        const res = await mockPost(formData);
        btn.disabled = false; btn.classList.remove('opacity-60', 'cursor-not-allowed');
        if (res.ok) { demoForm.reset(); showToast('Demo request received. We’ll contact you soon.'); gtag && gtag('event', 'demo_request'); }
      });

      newsletterForm && newsletterForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;
        const res = await mockPost({ email });
        if (res.ok) { newsletterForm.reset(); showToast('Subscribed! Check your inbox.'); gtag && gtag('event', 'newsletter_subscribe'); }
      });

      // Chart
      const ctx = document.getElementById('txChart');
      if (ctx) {
        const gradient = ctx.getContext('2d').createLinearGradient(0, 0, 0, 240);
        gradient.addColorStop(0, 'rgba(124,58,237,0.6)');
        gradient.addColorStop(1, 'rgba(124,58,237,0.05)');
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
            datasets: [{
              label: 'Txns',
              data: [820, 950, 1040, 1200, 1310, 1450, 1600, 1740, 1680, 1820, 1900, 2100],
              fill: true,
              backgroundColor: gradient,
              borderColor: 'rgba(124,58,237,0.9)',
              tension: 0.35,
              pointRadius: 0,
              borderWidth: 2
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false }, tooltip: { mode: 'index', intersect: false } },
            scales: {
              x: { grid: { color: 'rgba(255,255,255,0.06)' }, ticks: { color: 'rgba(200,200,200,0.7)', font: { size: 11 } } },
              y: { grid: { color: 'rgba(255,255,255,0.06)' }, ticks: { color: 'rgba(200,200,200,0.7)', font: { size: 11 } } }
            }
          }
        });
      }

      // Footer year
      const y = document.getElementById('year');
      if (y) y.textContent = new Date().getFullYear();
    
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
<div className="absolute inset-x-0 top-[-40%] mx-auto h-[50rem] w-[60rem] rounded-full blur-3xl opacity-20" style={{background: 'radial-gradient(60% 60% at 50% 50%, rgba(124,58,237,0.6), rgba(34,197,94,0.35) 60%, transparent 70%)'}}></div>
</div>

<div className="fixed top-4 right-4 z-50 hidden" id="toast">
<div className="flex items-center gap-3 rounded-xl border border-neutral-800 bg-neutral-900/90 px-4 py-3 shadow-lg backdrop-blur">
<svg className="lucide lucide-check-circle-2 text-emerald-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<div className="text-sm">Thank you! We’ll reach out shortly.</div>
<button className="ml-2 rounded-lg p-1.5 hover:bg-neutral-800/70 outline-none focus-visible:ring-2 focus-visible:ring-violet-500/50" id="toastClose">
<svg className="lucide lucide-x" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
</div>

<header className="sticky top-0 z-40 border-b border-neutral-900/80 bg-neutral-950/70 backdrop-blur">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<a className="group inline-flex items-center gap-3" href="#">
<div className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900 text-violet-400 transition-colors group-hover:text-violet-300">
<span className="text-[0.85rem] font-semibold tracking-tighter">TP</span>
</div>
<span className="text-sm sm:text-base font-semibold tracking-tight text-neutral-100">TownshipPay</span>
</a>
<nav className="hidden md:flex items-center gap-7">
<a className="text-sm text-neutral-300 hover:text-neutral-100 hover:underline underline-offset-4" href="#product">Product</a>
<a className="hover:text-neutral-100 hover:underline underline-offset-4 text-sm text-neutral-300" href="#about">About</a>
<a className="text-sm text-neutral-300 hover:text-neutral-100 hover:underline underline-offset-4" href="#projects">Projects</a>
<a className="text-sm text-neutral-300 hover:text-neutral-100 hover:underline underline-offset-4" href="#insights">Insights</a>
<a className="text-sm text-neutral-300 hover:text-neutral-100 hover:underline underline-offset-4" href="#testimonials">Testimonials</a>
<a className="text-sm text-neutral-300 hover:text-neutral-100 hover:underline underline-offset-4" href="#contact">Contact</a>
</nav>
<div className="hidden md:flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900 px-3.5 py-2 text-sm text-neutral-200 hover:bg-neutral-800 hover:text-white outline-none focus-visible:ring-2 focus-visible:ring-violet-500/50" href="#demo">
<svg className="lucide lucide-sparkles text-violet-400" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>Request demo
            </a>
<button className="inline-flex items-center gap-2 rounded-lg bg-violet-600/90 px-3.5 py-2 text-sm font-medium tracking-tight text-white hover:bg-violet-600 outline-none focus-visible:ring-2 focus-visible:ring-violet-500/50" id="openVideo">
<svg className="lucide lucide-play-circle" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg> Watch video
            </button>
</div>
<button className="md:hidden inline-flex items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900 p-2 hover:bg-neutral-800 outline-none focus-visible:ring-2 focus-visible:ring-violet-500/50" id="menuBtn">
<svg className="lucide lucide-menu" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
<div className="md:hidden hidden border-t border-neutral-900/80" id="mobileNav">
<div className="flex flex-col gap-1 py-3">
<a className="px-2 py-2 rounded-lg hover:bg-neutral-900 text-sm" href="#product">Product</a>
<a className="px-2 py-2 rounded-lg hover:bg-neutral-900 text-sm" href="#about">About</a>
<a className="px-2 py-2 rounded-lg hover:bg-neutral-900 text-sm" href="#projects">Projects</a>
<a className="px-2 py-2 rounded-lg hover:bg-neutral-900 text-sm" href="#insights">Insights</a>
<a className="px-2 py-2 rounded-lg hover:bg-neutral-900 text-sm" href="#testimonials">Testimonials</a>
<a className="px-2 py-2 rounded-lg hover:bg-neutral-900 text-sm" href="#contact">Contact</a>
<div className="flex gap-2 px-2 pt-2">
<a className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm hover:bg-neutral-800" href="#demo">
<svg className="lucide lucide-sparkles text-violet-400" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>Demo
              </a>
<button className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-violet-600/90 px-3 py-2 text-sm text-white hover:bg-violet-600" id="openVideoMobile">
<svg className="lucide lucide-play-circle" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>Video
              </button>
</div>
</div>
</div>
</div>
</header>

<section className="relative overflow-hidden">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
<div className="grid lg:grid-cols-12 gap-10 items-center">
<div className="lg:col-span-7">
<div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900 px-3 py-1 text-xs text-neutral-300">
<svg className="lucide lucide-map-pin text-emerald-400" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> Letlhabile, South Africa
            </div>
<h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              Powering township payments and finance
            </h1>
<p className="mt-5 text-base sm:text-lg text-neutral-300 max-w-2xl">
              Accept card, QR and wallet payments. Settle fast. Unlock working capital—with tools built for spaza shops, salons, street vendors and taxi-rank traders.
            </p>
<div className="mt-7 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600/90 px-5 py-3 text-sm font-medium tracking-tight text-white hover:bg-violet-600 outline-none focus-visible:ring-2 focus-visible:ring-violet-500/50" href="#demo">
<svg className="lucide lucide-flashlight" data-lucide="flashlight" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12z"></path><line x1="6" x2="18" y1="6" y2="6"></line><line x1="12" x2="12" y1="12" y2="12"></line></svg> Get started
              </a>
<button className="inline-flex items-center justify-center gap-2 rounded-xl border border-neutral-800 bg-neutral-900 px-5 py-3 text-sm text-neutral-200 hover:bg-neutral-800 outline-none focus-visible:ring-2 focus-visible:ring-violet-500/50" id="openVideoHero">
<svg className="lucide lucide-play" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg> Watch explainer
              </button>
</div>
<div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
<div className="rounded-lg border border-neutral-800 bg-neutral-900 p-3">
<div className="text-xs text-neutral-400">Avg merchant fee</div>
<div className="mt-1 text-lg font-semibold">from 0.9%</div>
</div>
<div className="rounded-lg border border-neutral-800 bg-neutral-900 p-3">
<div className="text-xs text-neutral-400">Settlement</div>
<div className="mt-1 text-lg font-semibold">Same-day</div>
</div>
<div className="rounded-lg border border-neutral-800 bg-neutral-900 p-3">
<div className="text-xs text-neutral-400">Availability</div>
<div className="mt-1 text-lg font-semibold">99.95%</div>
</div>
<div className="rounded-lg border border-neutral-800 bg-neutral-900 p-3">
<div className="text-xs text-neutral-400">Support</div>
<div className="mt-1 text-lg font-semibold">7 days</div>
</div>
</div>
</div>
<div className="lg:col-span-5">
<div className="relative rounded-2xl border border-neutral-800 bg-neutral-900 p-5 shadow-2xl">
<div className="absolute inset-0 pointer-events-none rounded-2xl" style={{background: 'radial-gradient(60% 60% at 100% 0%, rgba(124,58,237,0.15), transparent 60%)'}}></div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="lucide lucide-smartphone text-violet-400" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
<span className="text-sm text-neutral-300">Tap-to-Phone</span>
</div>
<div className="text-xs text-neutral-400">Live</div>
</div>
<div className="mt-4 rounded-xl border border-neutral-800 bg-neutral-950 p-4">
<div className="flex items-center justify-between">
<span className="text-sm text-neutral-300">R120.00 • Card</span>
<span className="text-xs text-emerald-400 inline-flex items-center gap-1"><svg className="lucide lucide-shield-check" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg> Approved</span>
</div>
<div className="mt-3 h-2 w-full rounded-full bg-neutral-900">
<div className="h-2 rounded-full bg-violet-600" style={{width: '80%'}}></div>
</div>
</div>
<div className="mt-4 grid grid-cols-3 gap-3">
<div className="rounded-xl border border-neutral-800 bg-neutral-950 p-3">
<div className="text-xs text-neutral-400">Today</div>
<div className="text-lg font-semibold mt-1">R2,430</div>
</div>
<div className="rounded-xl border border-neutral-800 bg-neutral-950 p-3">
<div className="text-xs text-neutral-400">Txns</div>
<div className="text-lg font-semibold mt-1">54</div>
</div>
<div className="rounded-xl border border-neutral-800 bg-neutral-950 p-3">
<div className="text-xs text-neutral-400">Avg</div>
<div className="text-lg font-semibold mt-1">R45</div>
</div>
</div>
<button className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-xl border border-neutral-800 bg-neutral-900 px-4 py-2.5 text-sm hover:bg-neutral-800" id="openVideoCard">
<svg className="lucide lucide-film" data-lucide="film" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M7 3v18"></path><path d="M3 7.5h4"></path><path d="M3 12h18"></path><path d="M3 16.5h4"></path><path d="M17 3v18"></path><path d="M17 7.5h4"></path><path d="M17 16.5h4"></path></svg> Watch the 90s explainer
              </button>
</div>
<p className="mt-3 text-xs text-neutral-500">UI preview — not real merchant data</p>
</div>
</div>
</div>
</section>

<section className="border-t border-neutral-900/80" id="product">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
<div className="max-w-3xl">
<h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Product that meets you on the street</h2>
<p className="mt-3 text-neutral-300">A mobile-first payment stack designed for township realities: low data, spotty signal, and cashflow needs.</p>
</div>
<div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
<div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5 hover:border-violet-700/50 transition-colors">
<div className="flex items-center gap-3">
<div className="rounded-lg border border-neutral-800 bg-neutral-950 p-2"><svg className="lucide lucide-smartphone text-violet-400" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg></div>
<h3 className="text-lg font-semibold tracking-tight text-white">Tap-to-Phone</h3>
</div>
<p className="mt-2 text-sm text-neutral-300">Accept contactless cards and phones on Android—no extra hardware. Works offline-first and syncs later.</p>
</div>
<div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5 hover:border-violet-700/50 transition-colors">
<div className="flex items-center gap-3">
<div className="rounded-lg border border-neutral-800 bg-neutral-950 p-2"><svg className="lucide lucide-qr-code text-violet-400" data-lucide="qr-code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="5" rx="1" width="5" x="3" y="3"></rect><rect height="5" rx="1" width="5" x="16" y="3"></rect><rect height="5" rx="1" width="5" x="3" y="16"></rect><path d="M21 16h-3a2 2 0 0 0-2 2v3"></path><path d="M21 21v.01"></path><path d="M12 7v3a2 2 0 0 1-2 2H7"></path><path d="M3 12h.01"></path><path d="M12 3h.01"></path><path d="M12 16v.01"></path><path d="M16 12h1"></path><path d="M21 12v.01"></path><path d="M12 21v-1"></path></svg></div>
<h3 className="text-lg font-semibold tracking-tight text-white">QR &amp; Wallets</h3>
</div>
<p className="mt-2 text-sm text-neutral-300">Generate Scan to Pay QR, accept local wallets, and settle straight to your bank.</p>
</div>
<div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5 hover:border-violet-700/50 transition-colors">
<div className="flex items-center gap-3">
<div className="rounded-lg border border-neutral-800 bg-neutral-950 p-2"><svg className="lucide lucide-badge-check text-violet-400" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg></div>
<h3 className="text-lg font-semibold tracking-tight text-white">Instant settlement</h3>
</div>
<p className="mt-2 text-sm text-neutral-300">Same-day settlement to keep stock moving. Clear, fair pricing with no lock-in.</p>
</div>
<div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5 hover:border-violet-700/50 transition-colors">
<div className="flex items-center gap-3">
<div className="rounded-lg border border-neutral-800 bg-neutral-950 p-2"><svg className="lucide lucide-wifi-off text-violet-400" data-lucide="wifi-off" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path><path d="M5 12.859a10 10 0 0 1 5.17-2.69"></path><path d="M19 12.859a10 10 0 0 0-2.007-1.523"></path><path d="M2 8.82a15 15 0 0 1 4.177-2.643"></path><path d="M22 8.82a15 15 0 0 0-11.288-3.764"></path><path d="m2 2 20 20"></path></svg></div>
<h3 className="text-lg font-semibold tracking-tight text-white">Offline-first</h3>
</div>
<p className="mt-2 text-sm text-neutral-300">Queue transactions when signal drops; auto-retry with smart risk controls.</p>
</div>
<div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5 hover:border-violet-700/50 transition-colors">
<div className="flex items-center gap-3">
<div className="rounded-lg border border-neutral-800 bg-neutral-950 p-2"><svg className="lucide lucide-bar-chart-3 text-violet-400" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg></div>
<h3 className="text-lg font-semibold tracking-tight text-white">Merchant insights</h3>
</div>
<p className="mt-2 text-sm text-neutral-300">Daily dashboards for sales, top items and repeat customers to make better decisions.</p>
</div>
<div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5 hover:border-violet-700/50 transition-colors">
<div className="flex items-center gap-3">
<div className="rounded-lg border border-neutral-800 bg-neutral-950 p-2"><svg className="lucide lucide-banknote text-violet-400" data-lucide="banknote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="12" rx="2" width="20" x="2" y="6"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></svg></div>
<h3 className="text-lg font-semibold tracking-tight text-white">Microloans access</h3>
</div>
<p className="mt-2 text-sm text-neutral-300">Opt-in working capital offers based on sales history and responsible risk scores.</p>
</div>
</div>
<div className="mt-12 grid lg:grid-cols-2 gap-8">
<div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
<h4 className="text-xl font-semibold tracking-tight text-white">How it works</h4>
<ol className="mt-4 space-y-4">
<li className="flex items-start gap-3">
<div className="mt-0.5 rounded-lg border border-neutral-800 bg-neutral-950 p-1.5"><svg className="lucide lucide-download text-emerald-400" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg></div>
<div>
<div className="text-sm text-neutral-200">1. Sign up and verify your business</div>
<div className="text-xs text-neutral-400">Takes under 10 minutes with your ID and bank details.</div>
</div>
</li>
<li className="flex items-start gap-3">
<div className="mt-0.5 rounded-lg border border-neutral-800 bg-neutral-950 p-1.5"><i className="text-emerald-400" data-lucide="contactless-payment"></i></div>
<div>
<div className="text-sm text-neutral-200">2. Start accepting payments</div>
<div className="text-xs text-neutral-400">Tap-to-Phone or QR—no extra hardware.</div>
</div>
</li>
<li className="flex items-start gap-3">
<div className="mt-0.5 rounded-lg border border-neutral-800 bg-neutral-950 p-1.5"><svg className="lucide lucide-wallet text-emerald-400" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg></div>
<div className="">
<div className="text-sm text-neutral-200">3. Settle and grow</div>
<div className="text-xs text-neutral-400">Same-day settlement and tailored offers when you need stock.</div>
</div>
</li>
</ol>
</div>
<div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
<h4 className="text-xl font-semibold tracking-tight text-white">Security &amp; compliance</h4>
<div className="mt-4 space-y-3 text-sm text-neutral-300">
<div className="flex items-center gap-2"><svg className="lucide lucide-shield text-emerald-400" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg> PCI-compliant payment processing</div>
<div className="flex items-center gap-2"><svg className="lucide lucide-lock text-emerald-400" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg> Encryption in transit and at rest</div>
<div className="flex items-center gap-2"><svg className="lucide lucide-fingerprint text-emerald-400" data-lucide="fingerprint" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"></path><path d="M14 13.12c0 2.38 0 6.38-1 8.88"></path><path d="M17.29 21.02c.12-.6.43-2.3.5-3.02"></path><path d="M2 12a10 10 0 0 1 18-6"></path><path d="M2 16h.01"></path><path d="M21.8 16c.2-2 .131-5.354 0-6"></path><path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"></path><path d="M8.65 22c.21-.66.45-1.32.57-2"></path><path d="M9 6.8a6 6 0 0 1 9 5.2v2"></path></svg> Strong customer authentication where required</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-neutral-900/80" id="about">
<div className="sm:px-6 lg:px-8 sm:py-24 max-w-7xl mr-auto ml-auto pt-16 pr-4 pb-16 pl-4">
<div className="grid lg:grid-cols-2 gap-10 items-start">
<div className="">
<h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Our story</h2>
<p className="mt-4 text-neutral-300">
              TownshipPay was founded in 2022 by Lerato Nkosi, a Letlhabile-born product leader who saw first-hand how cash slows down township businesses. After years working in payments analytics, Lerato came home with a simple idea: give every spaza shop, salon and street vendor the same fast, secure tools as big retailers—without the paperwork and hardware.
            </p>
<p className="mt-4 text-neutral-300">
              Our mission is to unlock economic mobility in South Africa’s townships by digitising transactions, building reliable cashflow data, and opening doors to responsible credit. We partner with community organisations and local banks to build trust and deliver value from day one.
            </p>
<div className="mt-6 flex items-center gap-4">
<img alt="Founder portrait" className="h-14 w-14 rounded-full object-cover ring-2 ring-neutral-800" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/2d1ca131-4178-4c77-a442-3b6f546736e5_800w.webp?w=800&amp;q=80" style={{}}/>
<div>
<div className="text-sm font-semibold tracking-tight text-white">Lerato Nkosi</div>
<div className="text-xs text-neutral-400">Founder &amp; CEO</div>
</div>
</div>
</div>
<div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
<div className="grid sm:grid-cols-3 gap-4">
<figure className="col-span-2 overflow-hidden rounded-xl border border-neutral-800">
<img alt="Township market" className="hover:opacity-95 transition w-full h-48 object-cover" src="https://images.unsplash.com/photo-1662534263409-c7d8a58d7744?w=800&amp;q=80" style={{}}/>
<figcaption className="px-3 py-2 text-[11px] text-neutral-400 border-t border-neutral-800">Photo by Jaromír Kavan on Unsplash</figcaption>
</figure>
<figure className="overflow-hidden rounded-xl border border-neutral-800">
<img alt="Local shop" className="h-48 w-full object-cover hover:opacity-95 transition" src="https://images.unsplash.com/photo-1721011793681-abf40cebff04?w=800&amp;q=80" style={{}}/>
<figcaption className="px-3 py-2 text-[11px] text-neutral-400 border-t border-neutral-800">Photo by Fancycrave on Unsplash</figcaption>
</figure>
</div>
<div className="mt-5 text-sm text-neutral-300">
              We’re building with and for the community—pilots started in Letlhabile and Mabopane, expanding across North West and Gauteng.
            </div>
</div>
</div>
</div>
</section>

<section className="border-t border-neutral-900/80" id="projects">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
<div className="flex gap-6 gap-x-6 gap-y-6 items-end justify-between">
<div className="">
<h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Projects &amp; case studies</h2>
<p className="mt-3 text-neutral-300">Real-world inspired stories of digitisation and growth. Names and partnerships are illustrative.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900 px-3.5 py-2 text-sm hover:bg-neutral-800" href="#contact">
<svg className="lucide lucide-mail" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg> Partner with us
          </a>
</div>
<div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<article className="group rounded-2xl border border-neutral-800 bg-neutral-900 overflow-hidden hover:border-violet-700/50 transition-colors">
<figure className="relative">
<img alt="Spaza shop in township" className="group-hover:opacity-95 transition w-full h-48 object-cover" src="https://images.unsplash.com/photo-1741550162000-799044d98254?w=800&amp;q=80" style={{}}/>
<figcaption className="absolute left-3 bottom-3 rounded bg-neutral-950/70 px-2 py-1 text-[11px] text-neutral-200 border border-neutral-800">Photo by Patrick Tomasso on Unsplash</figcaption>
</figure>
<div className="p-5">
<h3 className="text-lg font-semibold tracking-tight text-white">Digitised payments for Spaza Shop Owners in Mabopane</h3>
<p className="mt-2 text-sm text-neutral-300">Introduced Tap-to-Phone and QR, improving checkout speed and sales visibility for 120+ shops.</p>
<div className="mt-4 grid grid-cols-3 gap-3">
<div className="rounded-lg border border-neutral-800 bg-neutral-950 p-3">
<div className="text-[11px] text-neutral-400">Tx volume</div>
<div className="text-sm font-semibold">+38%</div>
</div>
<div className="rounded-lg border border-neutral-800 bg-neutral-950 p-3">
<div className="text-[11px] text-neutral-400">Card share</div>
<div className="text-sm font-semibold">70%</div>
</div>
<div className="rounded-lg border border-neutral-800 bg-neutral-950 p-3">
<div className="text-[11px] text-neutral-400">Cash errors</div>
<div className="text-sm font-semibold">-55%</div>
</div>
</div>
</div>
</article>

<article className="group rounded-2xl border border-neutral-800 bg-neutral-900 overflow-hidden hover:border-violet-700/50 transition-colors">
<figure className="relative">
<img alt="Bank collaboration" className="group-hover:opacity-95 transition w-full h-48 object-cover" src="https://images.unsplash.com/photo-1682322764710-0ceeb9324d6d?w=800&amp;q=80"/>
<figcaption className="absolute left-3 bottom-3 rounded bg-neutral-950/70 px-2 py-1 text-[11px] text-neutral-200 border border-neutral-800">Photo by Dylan Gillis on Unsplash</figcaption>
</figure>
<div className="p-5">
<h3 className="text-lg font-semibold text-white tracking-tight">Partnered with local financial businesses for microloans pilot</h3>
<p className="text-sm text-neutral-300 mt-2">A concept pilot scoped with a microloan-like model to test responsible working capital for merchants using sales data.</p>
<div className="mt-4 grid grid-cols-3 gap-3">
<div className="rounded-lg border border-neutral-800 bg-neutral-950 p-3">
<div className="text-[11px] text-neutral-400">Approval time</div>
<div className="text-sm font-semibold">6 hrs</div>
</div>
<div className="rounded-lg border border-neutral-800 bg-neutral-950 p-3">
<div className="text-[11px] text-neutral-400">Repayment</div>
<div className="text-sm font-semibold">% of sales</div>
</div>
<div className="rounded-lg border border-neutral-800 bg-neutral-950 p-3">
<div className="text-[11px] text-neutral-400">NPS</div>
<div className="text-sm font-semibold">+58</div>
</div>
</div>
</div>
</article>

<article className="group rounded-2xl border border-neutral-800 bg-neutral-900 overflow-hidden hover:border-violet-700/50 transition-colors">
<figure className="relative">
<img alt="Street vendors at taxi rank" className="h-48 w-full object-cover group-hover:opacity-95 transition" src="https://images.unsplash.com/photo-1663867974006-d164d7ee52bd?w=800&amp;q=80" style={{}}/>
<figcaption className="absolute left-3 bottom-3 rounded bg-neutral-950/70 px-2 py-1 text-[11px] text-neutral-200 border border-neutral-800">Photo by Ashim D’Silva on Unsplash</figcaption>
</figure>
<div className="p-5">
<h3 className="text-lg font-semibold tracking-tight text-white">Letlhabile Taxi Rank — QR for fast-moving vendors</h3>
<p className="mt-2 text-sm text-neutral-300">QR-only lanes and tip prompts helped vendors serve commuters faster during peak hours.</p>
<div className="mt-4 grid grid-cols-3 gap-3">
<div className="rounded-lg border border-neutral-800 bg-neutral-950 p-3">
<div className="text-[11px] text-neutral-400">Queue time</div>
<div className="text-sm font-semibold">-30%</div>
</div>
<div className="rounded-lg border border-neutral-800 bg-neutral-950 p-3">
<div className="text-[11px] text-neutral-400">Avg basket</div>
<div className="text-sm font-semibold">+12%</div>
</div>
<div className="rounded-lg border border-neutral-800 bg-neutral-950 p-3">
<div className="text-[11px] text-neutral-400">Repeat buyers</div>
<div className="text-sm font-semibold">+22%</div>
</div>
</div>
</div>
</article>
</div>
<p className="mt-6 text-[11px] text-neutral-500">These case studies are illustrative to reflect realistic outcomes in similar contexts; any named partnerships are fictional for demonstration.</p>
</div>
</section>

<section className="border-t border-neutral-900/80" id="insights">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
<div className="max-w-3xl">
<h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Financial insights for SA SMEs</h2>
<p className="mt-3 text-neutral-300">Data-driven context, trends and practical tips for township operators.</p>
</div>
<div className="mt-8 grid lg:grid-cols-3 gap-6">
<div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
<div className="flex items-center gap-2 text-emerald-400"><svg className="lucide lucide-info" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg><span className="text-sm font-medium">Stats</span></div>
<ul className="mt-3 space-y-2 text-sm text-neutral-300">
<li>SA township businesses process R100bn+ annually — Source: FinMark Trust, 2023</li>
<li>SMEs are major contributors to jobs and GDP in SA — Source: IFC, 2018</li>
<li>Card and QR acceptance among informal merchants has been rising — Source: FinMark Trust, 2022</li>
</ul>
</div>
<div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
<div className="flex items-center gap-2 text-emerald-400"><svg className="lucide lucide-trending-up" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg><span className="text-sm font-medium">Trends</span></div>
<ul className="mt-3 space-y-2 text-sm text-neutral-300">
<li>Mobile, hardware-free acceptance (Tap-to-Phone) lowers setup barriers.</li>
<li>Data-backed lending improves access to responsible working capital.</li>
<li>QR and wallet rails expand choice for commuters and youth segments.</li>
</ul>
</div>
<div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
<div className="flex items-center gap-2 text-emerald-400"><svg className="lucide lucide-lightbulb" data-lucide="lightbulb" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg><span className="text-sm font-medium">Tips</span></div>
<ul className="mt-3 space-y-2 text-sm text-neutral-300">
<li>Start with Tap-to-Phone to avoid hardware costs.</li>
<li>Reconcile daily: separate stock float from personal spend.</li>
<li>Use instant settlement to restock faster before weekends.</li>
<li>Track your top items and peak hours—adjust staffing and stock.</li>
</ul>
</div>
</div>
<div className="mt-10 grid lg:grid-cols-5 gap-6">
<div className="lg:col-span-3 rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
<h3 className="text-lg font-semibold tracking-tight text-white">Pilot merchant transactions (Letlhabile)</h3>
<p className="mt-1 text-sm text-neutral-400">Monthly digital transactions across 50 pilot merchants.</p>
<div className="mt-4 rounded-xl border border-neutral-800 bg-neutral-950 p-3">
<div className="relative h-64">
<div className="h-full"><canvas height="256" id="txChart" style={{display: 'block', boxSizing: 'border-box', height: '256px', width: '652px'}} width="652"></canvas></div>
</div>
</div>
</div>
<div className="lg:col-span-2 rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
<h3 className="text-lg font-semibold tracking-tight text-white">What this means</h3>
<ul className="mt-3 space-y-3 text-sm text-neutral-300">
<li className="flex gap-2"><svg className="lucide lucide-check text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Weekends drive 40–50% of weekly sales—settlement speed matters.</li>
<li className="flex gap-2"><svg className="lucide lucide-check text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Low-ticket QR shines at taxi ranks; Tap-to-Phone boosts baskets in shops.</li>
<li className="flex gap-2"><svg className="lucide lucide-check text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Consistent volumes help unlock fair, data-backed credit.</li>
</ul>
<a className="mt-5 inline-flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-950 px-3.5 py-2 text-sm hover:bg-neutral-800" href="#demo">
<svg className="lucide lucide-line-chart" data-lucide="line-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="m19 9-5 5-4-4-3 3"></path></svg> Get a free benchmark
            </a>
</div>
</div>
<p className="mt-6 text-[11px] text-neutral-500">Sources: FinMark Trust (2022–2023), International Finance Corporation (2018). Figures are contextual summaries; use alongside your own data.</p>
</div>
</section>

<section className="border-t border-neutral-900/80" id="testimonials">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
<div className="max-w-2xl">
<h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">What our customers say</h2>
<p className="mt-3 text-neutral-300">Local voices from Letlhabile, Mabopane and surrounds.</p>
</div>
<div className="mt-10 grid md:grid-cols-3 gap-6">
<div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
<div className="flex items-center gap-3">
<img alt="Client" className="h-10 w-10 rounded-full object-cover ring-2 ring-neutral-800" src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=320&amp;q=80" style={{}}/>
<div>
<div className="text-sm font-semibold tracking-tight text-white">Sipho</div>
<div className="text-xs text-neutral-400">Spaza Owner, Mabopane</div>
</div>
</div>
<p className="mt-4 text-sm text-neutral-300">“TownshipPay helped me grow my business — now commuters pay fast and I restock the same day.”</p>
</div>
<div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
<div className="flex items-center gap-3">
<img alt="Client" className="h-10 w-10 rounded-full object-cover ring-2 ring-neutral-800" src="https://images.unsplash.com/photo-1570704615544-e09f37d495aa?w=320&amp;q=80"/>
<div>
<div className="text-sm font-semibold tracking-tight text-white">Thandi</div>
<div className="text-xs text-neutral-400">Food Vendor, Letlhabile Taxi Rank</div>
</div>
</div>
<p className="mt-4 text-sm text-neutral-300">“QR payments are quick and safe. End of day totals match—no more cash errors.”</p>
</div>
<div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
<div className="flex items-center gap-3">
<img alt="Partner" className="h-10 w-10 rounded-full object-cover ring-2 ring-neutral-800" src="https://images.unsplash.com/photo-1616805384781-fdcdf0328348?w=320&amp;q=80"/>
<div>
<div className="text-sm font-semibold tracking-tight text-white">Banele</div>
<div className="text-xs text-neutral-400">Community Finance Partner</div>
</div>
</div>
<p className="mt-4 text-sm text-neutral-300">“The sales data stream supports fair microloan decisions and healthy repayments.”</p>
</div>
</div>
</div>
</section>

<section className="border-t border-neutral-900/80" id="demo">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
<div className="grid lg:grid-cols-2 gap-10">
<div>
<h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">See TownshipPay in action</h2>
<p className="mt-3 text-neutral-300">Tell us about your business and we’ll set up a personalised walk-through. Limited pilot slots are available in Letlhabile, Mabopane and Ga-Rankuwa.</p>
<ul className="mt-6 space-y-2 text-sm text-neutral-300">
<li className="flex gap-2"><svg className="lucide lucide-check text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> No hardware cost to start</li>
<li className="flex gap-2"><svg className="lucide lucide-check text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Clear pricing from 0.9%</li>
<li className="flex gap-2"><svg className="lucide lucide-check text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Same-day settlement</li>
</ul>
</div>
<div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
<form className="space-y-4" id="demoForm">
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="text-xs text-neutral-400">Full name</label>
<input className="mt-1 w-full rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm text-neutral-100 placeholder-neutral-500 outline-none focus:border-violet-700" name="name" placeholder="Lerato Mokoena" required="" type="text"/>
</div>
<div>
<label className="text-xs text-neutral-400">Business name</label>
<input className="mt-1 w-full rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm text-neutral-100 placeholder-neutral-500 outline-none focus:border-violet-700" name="business" placeholder="Mabopane Spaza" required="" type="text"/>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="text-xs text-neutral-400">Email</label>
<input className="mt-1 w-full rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm text-neutral-100 placeholder-neutral-500 outline-none focus:border-violet-700" name="email" placeholder="you@business.co.za" required="" type="email"/>
</div>
<div>
<label className="text-xs text-neutral-400">Phone</label>
<input className="mt-1 w-full rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm text-neutral-100 placeholder-neutral-500 outline-none focus:border-violet-700" name="phone" placeholder="+27 72 000 0000" required="" type="tel"/>
</div>
</div>
<div>
<label className="text-xs text-neutral-400">Location</label>
<input className="mt-1 w-full rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm text-neutral-100 placeholder-neutral-500 outline-none focus:border-violet-700" name="location" placeholder="Letlhabile" required="" type="text"/>
</div>
<div>
<label className="text-xs text-neutral-400">What do you sell?</label>
<input className="mt-1 w-full rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm text-neutral-100 placeholder-neutral-500 outline-none focus:border-violet-700" name="category" placeholder="Groceries, airtime, beauty, food..." type="text"/>
</div>
<button className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-violet-600/90 px-4 py-2.5 text-sm font-medium tracking-tight text-white hover:bg-violet-600 outline-none focus-visible:ring-2 focus-visible:ring-violet-500/50" type="submit">
<svg className="lucide lucide-send" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg> Request demo
              </button>
<p className="text-[11px] text-neutral-500">By submitting, you agree to be contacted about your request. We respect your privacy.</p>
</form>
</div>
</div>
</div>
</section>

<section className="border-t border-neutral-900/80" id="contact">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
<div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
<div className="grid lg:grid-cols-3 gap-8">
<div className="lg:col-span-2">
<h3 className="text-2xl font-bold tracking-tight text-white">Let’s build the future of township commerce</h3>
<p className="mt-2 text-neutral-300">Investors, banks, and community organisations—get in touch to explore partnerships and pilots.</p>
<div className="mt-5 grid sm:grid-cols-3 gap-4">
<div className="rounded-xl border border-neutral-800 bg-neutral-950 p-4">
<div className="text-xs text-neutral-400">Email</div>
<a className="mt-1 inline-flex items-center gap-2 text-sm text-neutral-200 hover:text-white" href="mailto:hello@townshippay.co.za">
<svg className="lucide lucide-mail" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg> hello@townshippay.co.za
                  </a>
</div>
<div className="rounded-xl border border-neutral-800 bg-neutral-950 p-4">
<div className="text-xs text-neutral-400">Phone</div>
<a className="mt-1 inline-flex items-center gap-2 text-sm text-neutral-200 hover:text-white" href="tel:+27120000000">
<svg className="lucide lucide-phone" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg> +27 12 000 0000
                  </a>
</div>
<div className="rounded-xl border border-neutral-800 bg-neutral-950 p-4">
<div className="text-xs text-neutral-400">Office</div>
<div className="mt-1 flex items-start gap-2 text-sm text-neutral-200">
<svg className="lucide lucide-map-pin" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span>Letlhabile Business Hub, North West</span>
</div>
</div>
</div>
</div>
<div>
<h4 className="text-lg font-semibold tracking-tight text-white">Join our newsletter</h4>
<p className="mt-1 text-sm text-neutral-300">Monthly insights and product updates.</p>
<form className="mt-3 flex gap-2" id="newsletterForm">
<input className="flex-1 rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm text-neutral-100 placeholder-neutral-500 outline-none focus:border-violet-700" placeholder="you@business.co.za" required="" type="email"/>
<button className="inline-flex items-center gap-2 rounded-lg bg-violet-600/90 px-3.5 py-2 text-sm text-white hover:bg-violet-600">
<svg className="lucide lucide-send" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>Subscribe
                </button>
</form>
<p className="mt-2 text-[11px] text-neutral-500">We never sell your data. Unsubscribe anytime.</p>
</div>
</div>
</div>
<div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
<div className="inline-flex items-center gap-2 text-neutral-400 text-sm">
<div className="flex h-8 w-8 items-center justify-center rounded-md border border-neutral-800 bg-neutral-900 text-violet-400">
<span className="text-[0.8rem] font-semibold tracking-tighter">TP</span>
</div>
<span>© <span id="year">2025</span> TownshipPay. All rights reserved.</span>
</div>
<div className="text-[11px] text-neutral-500">Built in Letlhabile with care. Case studies are illustrative; partnerships named are fictional.</div>
</div>
</div>
</section>

<div className="fixed inset-0 z-50 hidden items-center justify-center p-4" id="videoModal">
<div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
<div className="relative w-full max-w-3xl rounded-2xl border border-neutral-800 bg-neutral-950 shadow-2xl">
<div className="flex items-center justify-between border-b border-neutral-900 px-4 py-3">
<div className="inline-flex items-center gap-2 text-sm text-neutral-300">
<svg className="lucide lucide-film" data-lucide="film" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M7 3v18"></path><path d="M3 7.5h4"></path><path d="M3 12h18"></path><path d="M3 16.5h4"></path><path d="M17 3v18"></path><path d="M17 7.5h4"></path><path d="M17 16.5h4"></path></svg> TownshipPay — Explainer
          </div>
<button className="rounded-lg p-1.5 hover:bg-neutral-900 outline-none focus-visible:ring-2 focus-visible:ring-violet-500/50" id="closeVideo">
<svg className="lucide lucide-x" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<div className="p-3">
<div className="rounded-xl border border-neutral-900 bg-black overflow-hidden">
<video className="w-full h-[420px] bg-black" controls="" id="explainerVideo" poster="https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&amp;w=1600&amp;auto=format&amp;fit=crop">
<source src="explainer-video.mp4" type="video/mp4"/>
              Your browser does not support the video tag.
            </video>
</div>
<div className="mt-2 flex items-center justify-between">
<div className="text-[11px] text-neutral-500">Replace explainer-video.mp4 with your hosted file.</div>
<a className="inline-flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-1.5 text-xs hover:bg-neutral-800" href="#demo">
<svg className="lucide lucide-sparkles" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg> Book a demo
            </a>
</div>
</div>
</div>
</div>



    </>
  );
}
