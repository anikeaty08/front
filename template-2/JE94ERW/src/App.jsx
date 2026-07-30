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
      {

try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

}

{

      // Helpers
      const $ = (sel, ctx = document) => ctx.querySelector(sel);
      const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

      // Mobile menu toggle
      const menuBtn = $('#menuBtn');
      const mobileMenu = $('#mobileMenu');
      if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
          const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
          menuBtn.setAttribute('aria-expanded', String(!expanded));
          mobileMenu.classList.toggle('hidden');
        });
      }

      // Guide modal
      const guideBtn = $('#guideBtn');
      const guideModal = $('#guideModal');
      const guideOverlay = $('#guideOverlay');
      const guideClose = $('#guideClose');

      let lastFocus = null;
      const focusableSel = 'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])';

      function openGuide() {
        lastFocus = document.activeElement;
        guideModal.classList.remove('hidden');
        guideBtn.setAttribute('aria-expanded', 'true');
        // focus first focusable
        const focusables = $$(focusableSel, guideModal).filter(el => !el.hasAttribute('disabled'));
        if (focusables.length) focusables[0].focus();
        document.addEventListener('keydown', trapGuide);
      }

      function closeGuide() {
        guideModal.classList.add('hidden');
        guideBtn.setAttribute('aria-expanded', 'false');
        document.removeEventListener('keydown', trapGuide);
        if (lastFocus) lastFocus.focus();
      }

      function trapGuide(e) {
        if (e.key === 'Escape') {
          closeGuide();
          return;
        }
        if (e.key === 'Tab') {
          const focusables = $$(focusableSel, guideModal).filter(el => el.offsetParent !== null);
          if (!focusables.length) return;
          const first = focusables[0];
          const last = focusables[focusables.length - 1];
          if (e.shiftKey && document.activeElement === first) {
            e.preventDefault(); last.focus();
          } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault(); first.focus();
          }
        }
      }

      if (guideBtn && guideModal) {
        guideBtn.addEventListener('click', openGuide);
        if (guideOverlay) guideOverlay.addEventListener('click', closeGuide);
        if (guideClose) guideClose.addEventListener('click', closeGuide);
      }

      // Year
      const yearEl = $('#year');
      if (yearEl) yearEl.textContent = new Date().getFullYear();

      // Form metadata
      const setMeta = () => {
        const d = new Date();
        const tz =.DateTimeFormat().resolvedOptions().timeZone || '';
        const screenMeta = `${window.screen.width}x${window.screen.height}@${window.devicePixelRatio || 1}`;
        $('#meta_page_url') && ($('#meta_page_url').value = location.href);
        $('#meta_referrer') && ($('#meta_referrer').value = document.referrer || '');
        $('#meta_user_agent') && ($('#meta_user_agent').value = navigator.userAgent || '');
        $('#meta_timestamp') && ($('#meta_timestamp').value = d.toISOString());
        $('#meta_timezone') && ($('#meta_timezone').value = tz);
        $('#meta_screen') && ($('#meta_screen').value = screenMeta);
      };
      setMeta();

      // Optional: AJAX form submit for inline status
      const form = $('#irForm');
      const statusEl = $('#formStatus');
      if (form) {
        form.addEventListener('submit', async (e) => {
          e.preventDefault();
          if (statusEl) {
            statusEl.textContent = 'Sending…';
            statusEl.classList.remove('text-emerald-600', 'text-red-600');
          }
          const data = new FormData(form);
          try {
            const res = await fetch(form.action, { method: 'POST', body: data });
            const json = await res.json();
            if (json.success) {
              if (statusEl) {
                statusEl.textContent = 'Thank you — we will be in touch shortly.';
                statusEl.classList.add('text-emerald-600');
              }
              form.reset();
            } else {
              throw new Error(json.message || 'Submission failed');
            }
          } catch (err) {
            if (statusEl) {
              statusEl.textContent = 'Could not submit. Please check your details or try again.';
              statusEl.classList.add('text-red-600');
            }
          }
        });
      }

      // Chart
      const rampCanvas = $('#rampChart');
      if (rampCanvas && window.Chart) {
        const ctx = rampCanvas.getContext('2d');
        const gradient = ctx.createLinearGradient(0, 0, 0, 200);
        gradient.addColorStop(0, 'rgba(15, 23, 42, 0.25)');
        gradient.addColorStop(1, 'rgba(15, 23, 42, 0.02)');
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['2024', '2025', '2026', '2027', '2028', '2029'],
            datasets: [{
              label: 'Projects per year',
              data: [1, 3, 6, 12, 16, 20],
              tension: 0.35,
              borderColor: 'rgb(15, 23, 42)',
              backgroundColor: gradient,
              fill: true,
              pointRadius: 2.5,
              pointHoverRadius: 4,
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false },
              tooltip: {
                backgroundColor: 'rgba(15, 23, 42, 0.9)',
                padding: 10,
                displayColors: false
              }
            },
            scales: {
              x: {
                grid: { display: false },
                ticks: { color: '#64748b', font: { size: 11 } }
              },
              y: {
                grid: { color: 'rgba(148, 163, 184, 0.2)', drawBorder: false },
                ticks: { color: '#64748b', font: { size: 11 }, stepSize: 4 },
                suggestedMin: 0,
                suggestedMax: 20
              }
            }
          }
        });
      }
    
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
      

<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute -top-24 -left-24 h-[520px] w-[520px] rounded-full bg-gradient-to-tr from-indigo-500/30 via-sky-400/20 to-emerald-400/20 blur-3xl"></div>
<div className="absolute -bottom-24 -right-24 h-[520px] w-[520px] rounded-full bg-gradient-to-tr from-fuchsia-500/20 via-pink-400/20 to-amber-300/20 blur-3xl"></div>
<div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-gradient-to-tr from-slate-900/10 to-slate-600/10 blur-2xl"></div>
</div>

<header className="sticky top-0 z-50 supports-[backdrop-filter]:bg-white/60 bg-white/80 border-slate-200/60 border-b backdrop-blur">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<a className="inline-flex items-center justify-center bg-center mix-blend-multiply w-[170px] h-[60px] bg-[url(https://iili.io/KuG1Bsf.png?w=800&q=80)] bg-cover rounded invert-0" href="#"></a><a className="flex items-center gap-3" href="#">
</a>
<div className="flex items-center gap-3">
<a className="hidden md:inline-flex items-center gap-2 rounded-xl bg-slate-900 text-white text-sm font-semibold px-4 py-2.5 shadow-lg shadow-slate-900/10 hover:shadow-slate-900/20 transition" href="#join">
<span className="">Join the Waitlist</span>
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</a>
<button aria-expanded="false" aria-label="Open menu" className="md:hidden inline-flex items-center justify-center rounded-full h-9 w-9 ring-1 ring-slate-200 hover:ring-slate-300 transition" id="menuBtn">
<svg className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
</button>
</div>
</div><div className="absolute inset-y-0 left-4 sm:left-6 lg:left-8 flex items-center z-10">
<a aria-label="The Strait of Tangier Company — Home" className="inline-flex items-center" href="/">
</a>
</div>
</div>

<div className="hidden border-t border-slate-200 bg-white md:hidden" id="mobileMenu">
<div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 gap-3 text-sm">
<a className="rounded-lg px-3 py-2 ring-1 ring-slate-200 hover:bg-slate-50" href="#overview">Overview</a>
<a className="rounded-lg px-3 py-2 ring-1 ring-slate-200 hover:bg-slate-50" href="#trust">Trust & Governance</a>
<a className="rounded-lg px-3 py-2 ring-1 ring-slate-200 hover:bg-slate-50" href="#process">Our System</a>
<a className="rounded-lg px-3 py-2 ring-1 ring-slate-200 hover:bg-slate-50" href="#status">2027 Plan</a>
<a className="rounded-lg px-3 py-2 ring-1 ring-slate-200 hover:bg-slate-50" href="#tangier">Tangier</a>
<a className="rounded-lg px-3 py-2 ring-1 ring-slate-200 hover:bg-slate-50" href="#investors">Investors</a>
<a className="rounded-lg px-3 py-2 ring-1 ring-slate-200 hover:bg-slate-50" href="#contact">Contact</a>
<a className="rounded-lg px-3 py-2 bg-slate-900 text-white" href="#join">Join the Waitlist</a>
</div>
</div>
</div>
</header>

<section className="relative">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-12 gap-8 md:gap-10 md:py-20 pt-14 pb-14 items-center">
<div className="lg:col-span-7">
<h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
              Welcome to The Strait of Tangier Company
            </h1>
<p className="mt-4 text-base sm:text-lg text-slate-600">
              Where Trust Meets Technology in Real Estate. A new standard for investment in Tangier — structured, transparent, and powered by AI.
            </p>
<div className="mt-6 grid gap-2 text-sm text-slate-700">
<div className="inline-flex items-center gap-2">
<svg className="lucide lucide-check-circle-2 h-4.5 w-4.5 text-emerald-600" data-lucide="check-circle-2" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><path></path></svg>
                Building lifestyle-first communities that deliver lasting value for professionals and global investors.
              </div>
</div>
<div className="mt-7 flex flex-wrap gap-3">
<a className="inline-flex items-center gap-2 rounded-xl bg-slate-900 text-white text-sm font-semibold px-4 py-2.5 shadow-lg shadow-slate-900/10 hover:shadow-slate-900/20 transition" href="#join">
<span>Join the Waitlist</span>
<svg className="lucide lucide-user-plus h-4 w-4" data-lucide="user-plus" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="9" cy="7"></circle><line></line><line></line></svg>
</a>
<a className="inline-flex items-center gap-2 rounded-xl bg-white text-slate-900 ring-1 ring-slate-200 text-sm font-semibold px-4 py-2.5 shadow-sm hover:bg-slate-50 transition" href="#teaser">
<span className="">Download Investor Teaser</span>
<svg className="lucide lucide-download h-4 w-4" data-lucide="download" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
</a>
</div>
<div className="mt-5 text-xs text-slate-500">
              Investor onboarding already underway — 100+ on the waitlist.
            </div>
</div>
<div className="lg:col-span-5">
<div className="ring-1 ring-slate-200 shadow-[0_2px_0_rgba(0,0,0,0.03),0_24px_48px_-24px_rgba(0,0,0,0.25)] bg-white/80 rounded-3xl pt-6 pr-6 pb-6 pl-6 backdrop-blur">
<div className="flex items-center gap-2">
<span className="inline-grid place-items-center h-9 w-9 rounded-xl bg-slate-900 text-white ring-1 ring-black/10 shadow">
<svg className="lucide lucide-shield-check h-5 w-5" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</span>
<div className="">
<h3 className="text-lg font-semibold tracking-tight">Built on Trust, Designed for Growth</h3>
</div>
</div>
<div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
<div className="group relative overflow-hidden rounded-2xl ring-1 ring-slate-200 bg-slate-100 aspect-[4/3]">
<img alt="Modern facade detail" className="transition-transform duration-500 group-hover:scale-[1.03] w-full h-full object-cover" decoding="async" loading="eager" sizes="(min-width: 1024px) 240px, (min-width: 640px) 50vw, 100vw" src="https://iili.io/KTQjlx2.png?w=800&q=80" style={{}} />
</div>
<div className="group relative overflow-hidden rounded-2xl ring-1 ring-slate-200 bg-slate-100 aspect-[4/3]">
<img alt="Light-filled interior" className="h-full w-full transition-transform duration-500 group-hover:scale-[1.03] object-cover" decoding="async" loading="lazy" sizes="(min-width: 1024px) 240px, (min-width: 640px) 50vw, 100vw" src="https://iili.io/KTQjYN4.png?w=800&q=80" style={{}} />
</div>
<div className="group relative overflow-hidden rounded-2xl ring-1 ring-slate-200 bg-slate-100 aspect-[4/3]">
<img alt="Construction progress drone view" className="h-full w-full transition-transform duration-500 group-hover:scale-[1.03] object-cover" decoding="async" loading="lazy" sizes="(min-width: 1024px) 240px, (min-width: 640px) 50vw, 100vw" src="https://iili.io/KTQjASs.png?w=800&q=80" style={{}} />
</div>
<div className="group relative overflow-hidden rounded-2xl ring-1 ring-slate-200 bg-slate-100 aspect-[4/3]">
<img alt="Amenity-first living" className="h-full w-full transition-transform duration-500 group-hover:scale-[1.03] object-cover" decoding="async" loading="lazy" sizes="(min-width: 1024px) 240px, (min-width: 640px) 50vw, 100vw" src="https://iili.io/KTQjaDl.png?w=800&q=80" style={{}} />
</div>
</div>
</div>
</div>
</div>

<div className="md:mt-0 border-slate-200 border-t mt-2 mb-2 pt-8 pb-8">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
<div className="rounded-2xl ring-1 ring-slate-200 bg-white p-4">
<div className="flex items-center gap-2">
<svg className="lucide lucide-scale h-4.5 w-4.5 text-slate-900" data-lucide="scale" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path><path></path></svg>
<span className="text-sm font-medium text-slate-800">UK‑level governance</span>
</div>
</div>
<div className="rounded-2xl ring-1 ring-slate-200 bg-white p-4">
<div className="flex items-center gap-2">
<svg className="lucide lucide-percent h-4.5 w-4.5 text-slate-900" data-lucide="percent" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><line></line><circle cx="6.5" cy="6.5"></circle><circle cx="17.5" cy="17.5"></circle></svg>
<span className="text-sm font-medium text-slate-800">Tangier’s 60–70% price advantage</span>
</div>
</div>
<div className="rounded-2xl ring-1 ring-slate-200 bg-white p-4">
<div className="flex items-center gap-2">
<svg className="lucide lucide-badge-pound-sterling h-4.5 w-4.5 text-slate-900" data-lucide="badge-pound-sterling" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path></svg>
<span className="text-sm font-medium text-slate-800">Structured returns w/ legal clarity</span>
</div>
</div>
<div className="rounded-2xl ring-1 ring-slate-200 bg-white p-4">
<div className="flex items-center gap-2">
<svg className="h-4.5 w-4.5 text-slate-900" data-lucide="passport" fill="none" height="20" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" width="14"></rect><path></path><path></path></svg>
<span className="text-sm font-medium text-slate-800">Visa‑ready packages</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="md:py-24 bg-slate-50 pt-16 pb-16" id="process">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto">
<span className="inline-flex items-center gap-2 rounded-full ring-1 ring-slate-200 bg-white px-3 py-1.5 text-xs text-slate-700 shadow-sm">
<svg className="lucide lucide-cpu h-3.5 w-3.5" data-lucide="cpu" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><rect height="16" rx="2" width="16"></rect><rect height="8" rx="1" width="8"></rect></svg>
            OUR SYSTEM
          </span>
<h2 className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight">We don’t just build homes — we build systems.</h2>
<p className="mt-3 text-sm text-slate-600">
            A 20‑step development process powered by automation and AI — from land appraisal to off‑plan sales. Each project trains the system to get smarter, faster, and more efficient.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
<div className="rounded-3xl ring-1 ring-slate-200 bg-white p-6">
<div className="flex items-center gap-3">
<span className="inline-grid place-items-center h-9 w-9 rounded-xl bg-slate-900 text-white ring-1 ring-black/10">
<svg className="lucide lucide-file-signature h-5 w-5" data-lucide="file-signature" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
</span>
<h3 className="text-lg font-semibold tracking-tight">Smart contract generation</h3>
</div>
<p className="mt-2 text-sm text-slate-600">Auto‑generated legal packs aligned to UK‑level governance with Moroccan compliance.</p>
</div>
<div className="rounded-3xl ring-1 ring-slate-200 bg-white p-6">
<div className="flex items-center gap-3">
<span className="inline-grid place-items-center h-9 w-9 rounded-xl bg-slate-900 text-white ring-1 ring-black/10">
<svg className="lucide lucide-gauge h-5 w-5" data-lucide="gauge" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</span>
<h3 className="text-lg font-semibold tracking-tight">Real‑time investor dashboards</h3>
</div>
<p className="mt-2 text-sm text-slate-600">Track milestones, documentation, and returns in a single transparent view.</p>
</div>
<div className="ring-1 ring-slate-200 bg-white rounded-3xl pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center gap-3">
<span className="inline-grid place-items-center h-9 w-9 rounded-xl bg-slate-900 text-white ring-1 ring-black/10">
<svg className="lucide lucide-drone h-5 w-5" data-lucide="drone" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><rect height="8" rx="1" width="4"></rect></svg>
</span>
<h3 className="text-lg font-semibold tracking-tight">Automated monitoring</h3>
</div>
<p className="text-sm text-slate-600 mt-2">Drones and XR for progress tracking with verifiable audit trails.</p>
</div>
</div>
</div>
</section>

<section className="md:py-24 bg-white pt-16 pb-16" id="status">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto">
<span className="inline-flex items-center gap-2 rounded-full ring-1 ring-slate-200 bg-white px-3 py-1.5 text-xs text-slate-700 shadow-sm">
<svg className="lucide lucide-trending-up h-3.5 w-3.5" data-lucide="trending-up" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
            2027 VISION
          </span>
<h2 className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight">Scalable. Sustainable. Ready for 2027.</h2>
<p className="mt-3 text-sm text-slate-600">Delivering 10–20 high‑quality developments per year via a repeatable, capital‑light system.</p>
</div>
<div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
<div className="lg:col-span-6 rounded-3xl ring-1 ring-slate-200 bg-slate-50 p-6">
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
<div className="rounded-2xl bg-white ring-1 ring-slate-200 p-4">
<p className="text-xs font-medium text-slate-500">Phase 1</p>
<h3 className="mt-1 text-base font-semibold tracking-tight">POC — The Club Residences</h3>
<p className="mt-1 text-xs text-slate-600">Underway</p>
</div>
<div className="rounded-2xl bg-white ring-1 ring-slate-200 p-4">
<p className="text-xs font-medium text-slate-500">Phase 2</p>
<h3 className="mt-1 text-base font-semibold tracking-tight">Investor Acceleration</h3>
<p className="mt-1 text-xs text-slate-600">Opening Q3 2026</p>
</div>
<div className="rounded-2xl bg-white ring-1 ring-slate-200 p-4">
<p className="text-xs font-medium text-slate-500">Phase 3</p>
<h3 className="mt-1 text-base font-semibold tracking-tight">Annual Rollout</h3>
<p className="mt-1 text-xs text-slate-600">Begins 2027</p>
</div>
</div>
<div className="mt-5 rounded-2xl bg-white ring-1 ring-slate-200 p-4">
<div className="grid grid-cols-3 gap-3 text-center">
<div>
<p className="text-2xl font-semibold tracking-tight">10–20</p>
<p className="mt-1 text-xs text-slate-500">Projects/year</p>
</div>
<div className="">
<p className="text-2xl font-semibold tracking-tight">Capital‑light</p>
<p className="mt-1 text-xs text-slate-500">Repeatable system</p>
</div>
<div>
<p className="text-2xl font-semibold tracking-tight">AI‑native</p>
<p className="mt-1 text-xs text-slate-500">Process‑driven</p>
</div>
</div>
</div>
</div>
<div className="lg:col-span-6 rounded-3xl ring-1 ring-slate-200 p-6">
<h3 className="text-base font-semibold tracking-tight text-slate-900">Projected ramp</h3>
<p className="mt-1 text-xs text-slate-600">Illustrative cadence as the system compounds.</p>
<div className="mt-3 overflow-hidden rounded-2xl ring-1 ring-slate-200">
<img alt="Tangier skyline and coastline" className="h-44 w-full object-cover" decoding="async" loading="lazy" sizes="(min-width: 1024px) 540px, 100vw" src="https://iili.io/KTQjjOx.png?w=800&q=80" style={{}} />
</div>
</div>
</div>
</div>
</section>

<section className="md:py-24 pt-16 pb-16 bg-slate-50" id="tangier">
<div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pl-4">
<div className="text-center max-w-3xl mx-auto">
<span className="inline-flex items-center gap-2 rounded-full ring-1 ring-slate-200 bg-white px-3 py-1.5 text-xs text-slate-700 shadow-sm">
<svg className="lucide lucide-map-pin h-3.5 w-3.5" data-lucide="map-pin" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="12" cy="10"></circle></svg>
            THE TANGIER ADVANTAGE
          </span>
<h2 className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight">Tangier isn’t just emerging — it’s converging.</h2>
<p className="mt-3 text-sm text-slate-600">World‑class infrastructure and lifestyle — at a structural price advantage.</p>
</div>
<div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-3">
<div className="overflow-hidden rounded-2xl ring-1 ring-slate-200 bg-slate-100 aspect-[3/2]">
<img alt="Old Medina meets modern Tangier" className="h-full w-full object-cover" decoding="async" loading="lazy" sizes="(min-width: 1024px) 360px, 50vw" src="https://iili.io/KTQjbgn.png?w=800&q=80" />
</div>
<div className="overflow-hidden rounded-2xl ring-1 ring-slate-200 bg-slate-100 aspect-[3/2]">
<img alt="Coastal promenade and skyline" className="h-full w-full object-cover" decoding="async" loading="lazy" sizes="(min-width: 1024px) 360px, 50vw" src="https://iili.io/KTQj6Ov.png?w=800&q=80" style={{}} />
</div>
<div className="hidden md:block overflow-hidden rounded-2xl ring-1 ring-slate-200 bg-slate-100 aspect-[3/2]">
<img alt="Modern architecture detail" className="h-full w-full object-cover" decoding="async" loading="lazy" sizes="(min-width: 1024px) 360px, 33vw" src="https://iili.io/KTQjeWB.png?w=800&q=80" style={{}} />
</div>
</div>
<div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
</div>
</div>
</section>

<section className="md:py-24 pt-16 pb-16 bg-white" id="investors">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto">
<span className="inline-flex items-center gap-2 rounded-full ring-1 ring-slate-200 bg-white px-3 py-1.5 text-xs text-slate-700 shadow-sm">
<svg className="lucide lucide-key-round h-3.5 w-3.5" data-lucide="key-round" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="16.5" cy="7.5" fill="currentColor"></circle></svg>
            TIER 1 MEMBERSHIP
          </span>
<h2 className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight">Become a Tier 1 Investor</h2>
<p className="mt-3 text-sm text-slate-600">Exclusive, early access to deal flow, materials, dashboards, and pre‑sale opportunities.</p>
</div>
<div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
<div className="lg:col-span-7 rounded-3xl ring-1 ring-slate-200 bg-slate-50 p-6">
<div className="grid sm:grid-cols-2 gap-4">
<div className="rounded-2xl bg-white ring-1 ring-slate-200 p-4">
<div className="flex items-center gap-2 text-sm text-slate-700">
<svg className="lucide lucide-video h-4.5 w-4.5 text-slate-900" data-lucide="video" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path></path><rect height="12" rx="2" width="14"></rect></svg>
                  Investor‑only walkthroughs
                </div>
</div>
<div className="rounded-2xl bg-white ring-1 ring-slate-200 p-4">
<div className="flex items-center gap-2 text-sm text-slate-700">
<svg className="lucide lucide-file-text h-4.5 w-4.5 text-slate-900" data-lucide="file-text" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path><path></path></svg>
                  Custom teaser packs
                </div>
</div>
<div className="rounded-2xl bg-white ring-1 ring-slate-200 p-4">
<div className="flex items-center gap-2 text-sm text-slate-700">
<svg className="lucide lucide-layout-dashboard h-4.5 w-4.5 text-slate-900" data-lucide="layout-dashboard" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7"></rect><rect height="5" rx="1" width="7"></rect><rect height="9" rx="1" width="7"></rect><rect height="5" rx="1" width="7"></rect></svg>
                  CRM dashboards
                </div>
</div>
<div className="rounded-2xl bg-white ring-1 ring-slate-200 p-4">
<div className="flex items-center gap-2 text-sm text-slate-700">
<svg className="lucide lucide-ticket h-4.5 w-4.5 text-slate-900" data-lucide="ticket" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path></svg>
                  Pre‑sale opportunities
                </div>
</div>
</div>
<div className="mt-5 rounded-2xl bg-white ring-1 ring-slate-200 p-4">
<div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
<div>
<p className="text-sm text-slate-500">Minimum</p>
<p className="text-lg font-semibold tracking-tight">£20,000</p>
</div>
<div>
<p className="text-sm text-slate-500">Typical</p>
<p className="text-lg font-semibold tracking-tight">£50k–£250k+</p>
</div>
<div>
<p className="text-sm text-slate-500">Returns</p>
<p className="text-lg font-semibold tracking-tight">Uplift / Rental</p>
</div>
<div>
<p className="text-sm text-slate-500">Exit‑ready</p>
<p className="text-lg font-semibold tracking-tight">Resale + Visa</p>
</div>
</div>
</div>
</div>
<div className="lg:col-span-5 ring-slate-200 ring-1 rounded-3xl pt-6 pr-6 pb-6 pl-6">
<div className="mb-4 overflow-hidden rounded-2xl ring-1 ring-slate-200 aspect-[16/9] bg-slate-100">
<img alt="Premium residential render" className="h-full w-full object-cover" decoding="async" loading="lazy" sizes="(min-width: 1024px) 440px, 100vw" src="https://iili.io/KTQjjOx.png?w=800&q=80" style={{}} />
</div>
<h3 className="text-base font-semibold tracking-tight">Who it’s for</h3>
<p className="mt-1 text-sm text-slate-600">Small business owners, UK landlords, and professionals priced out of major EU capitals.</p>
<div className="mt-4 grid gap-3">
</div>
</div>
</div>
</div>
</section>


<section className="md:py-24 pt-16 pb-16 bg-white" id="trust">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto">
<span className="inline-flex items-center gap-2 rounded-full ring-1 ring-slate-200 bg-white px-3 py-1.5 text-xs text-slate-700 shadow-sm">
<svg className="lucide lucide-shield h-3.5 w-3.5" data-lucide="shield" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
            TRUST & GOVERNANCE
          </span>
<h2 className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight">Trust by design. Governance by default.</h2>
<p className="mt-3 text-sm text-slate-600">UK‑grade structures, Moroccan compliance, and verifiable investor oversight built into every decision.</p>
</div>
<div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="rounded-3xl ring-1 ring-slate-200 bg-slate-50 p-6">
<div className="flex items-center gap-3">
<span className="inline-grid place-items-center h-9 w-9 rounded-xl bg-slate-900 text-white ring-1 ring-black/10">
<svg className="lucide lucide-file-lock-2 h-5 w-5" data-lucide="file-lock-2" fill="none" height="20" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path><rect height="14" rx="2" width="16"></rect></svg>
</span>
<h3 className="text-base font-semibold tracking-tight">SPV‑based projects</h3>
</div>
<p className="mt-2 text-sm text-slate-600">Ring‑fenced vehicles, clean cap tables, investor rights defined upfront.</p>
</div>
<div className="rounded-3xl ring-1 ring-slate-200 bg-slate-50 p-6">
<div className="flex items-center gap-3">
<span className="inline-grid place-items-center h-9 w-9 rounded-xl bg-slate-900 text-white ring-1 ring-black/10">
<svg className="lucide lucide-hand-coins h-5 w-5" data-lucide="hand-coins" fill="none" height="20" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path></svg>
</span>
<h3 className="text-base font-semibold tracking-tight">Milestone‑based releases</h3>
</div>
<p className="mt-2 text-sm text-slate-600">Escrowed flows with drawdowns tied to verifiable site progress.</p>
</div>
<div className="rounded-3xl ring-1 ring-slate-200 bg-slate-50 p-6">
<div className="flex items-center gap-3">
<span className="inline-grid place-items-center h-9 w-9 rounded-xl bg-slate-900 text-white ring-1 ring-black/10">
<svg className="lucide lucide-file-search h-5 w-5" data-lucide="file-search" fill="none" height="20" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><circle cx="10" cy="10"></circle></svg>
</span>
<h3 className="text-base font-semibold tracking-tight">Independent oversight</h3>
</div>
<p className="mt-2 text-sm text-slate-600">Third‑party legal and technical review with documented audit trails.</p>
</div>
<div className="rounded-3xl ring-1 ring-slate-200 bg-slate-50 p-6">
<div className="flex items-center gap-3">
<span className="inline-grid place-items-center h-9 w-9 rounded-xl bg-slate-900 text-white ring-1 ring-black/10">
<svg className="lucide lucide-globe h-5 w-5" data-lucide="globe" fill="none" height="20" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
</span>
<h3 className="text-base font-semibold tracking-tight">Cross‑border compliance</h3>
</div>
<p className="mt-2 text-sm text-slate-600">UK governance standards mapped to Moroccan legal frameworks.</p>
</div>
</div>
</div>
</section>

<section className="md:py-24 pt-16 pb-20 bg-slate-50" id="contact">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
<div className="lg:col-span-5">
<h2 className="md:text-4xl text-3xl font-semibold tracking-tight">Contact Us</h2>
<p className="text-sm text-slate-600 mt-3"></p>
<div className="mt-4 overflow-hidden rounded-2xl ring-1 ring-slate-200 aspect-[16/9] bg-white/60">
<img alt="Calm workspace for investor relations" className="h-full w-full object-cover" decoding="async" loading="lazy" sizes="(min-width: 1024px) 420px, 100vw" src="https://iili.io/KTQjXHb.png?w=800&q=80" style={{}} />
</div>
<div className="mt-6 grid gap-3">
<div className="flex items-start gap-3 rounded-2xl bg-white ring-1 ring-slate-200 p-4">
<svg className="lucide lucide-clock h-5 w-5 text-slate-900" data-lucide="clock" fill="none" height="20" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><path></path></svg>
<div className="text-sm">
<p className="font-medium">Response time</p>
<p className="text-slate-600 text-xs">Usually 24–48 hours.</p>
</div>
</div>
<div className="flex items-start gap-3 rounded-2xl bg-white ring-1 ring-slate-200 p-4">
<svg className="lucide lucide-shield-check h-5 w-5 text-slate-900" data-lucide="shield-check" fill="none" height="20" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
<div className="text-sm">
<p className="font-medium">Private & secure</p>
<p className="text-slate-600 text-xs">Your details are never shared.</p>
</div>
</div>
</div>
</div>
<div className="lg:col-span-7">
<form action="https://api.web3forms.com/submit" className="rounded-3xl bg-white ring-1 ring-slate-200 p-6" id="irForm" method="POST" novalidate="">

<input name="access_key" type="hidden" value="ACCESS_KEY_HERE" />

<input id="meta_page_url" name="page_url" type="hidden" />
<input id="meta_referrer" name="referrer" type="hidden" />
<input id="meta_user_agent" name="user_agent" type="hidden" />
<input id="meta_timestamp" name="timestamp_iso" type="hidden" />
<input id="meta_timezone" name="timezone" type="hidden" />
<input id="meta_screen" name="screen" type="hidden" />
<input className="hidden" name="botcheck" style={{display: `none`}} type="checkbox" />
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="">
<label className="text-sm font-medium text-slate-700" htmlFor="name">Full name</label>
<input className="mt-1 w-full rounded-xl border-slate-200 focus:border-slate-400 focus:ring-slate-400/30 text-sm" id="name" name="name" placeholder="Jane Doe" required type="text" />
</div>
<div className="">
<label className="text-sm font-medium text-slate-700" htmlFor="email">Email</label>
<input className="mt-1 w-full rounded-xl border-slate-200 focus:border-slate-400 focus:ring-slate-400/30 text-sm" id="email" name="email" placeholder="jane@company.com" required type="email" />
</div>
<div className="">
<label className="text-sm font-medium text-slate-700" htmlFor="phone">Phone (optional)</label>
<input className="mt-1 w-full rounded-xl border-slate-200 focus:border-slate-400 focus:ring-slate-400/30 text-sm" id="phone" name="phone" placeholder="+44 20 0000 0000" type="tel" />
</div>
<div className="">
<label className="text-sm font-medium text-slate-700" htmlFor="interest">I’m interested in</label>
<select className="mt-1 w-full rounded-xl border-slate-200 focus:border-slate-400 focus:ring-slate-400/30 text-sm" id="interest" name="interest">
<option value="tier1">Tier 1 Membership</option>
<option value="teaser">Investor Teaser Pack</option>
<option value="walkthrough">Private Walkthrough</option>
<option value="general">General enquiry</option>
</select>
</div>
<div className="sm:col-span-2">
<label className="text-sm font-medium text-slate-700" htmlFor="message">Message</label>
<textarea className="mt-1 w-full rounded-xl border-slate-200 focus:border-slate-400 focus:ring-slate-400/30 text-sm" id="message" name="message" placeholder="Tell us a little about your goals…" rows="4"></textarea>
</div>
<div className="sm:col-span-2">
<label className="inline-flex items-center gap-2 text-xs text-slate-600">
<input className="rounded border-slate-300 text-slate-900 focus:ring-slate-400" name="consent" required type="checkbox" />
                    I consent to be contacted by The Strait of Tangier Company and agree to the privacy notice.
                  </label>
</div>
</div>
<div className="mt-5 flex flex-wrap gap-3">
<button className="inline-flex items-center gap-2 rounded-xl bg-slate-900 text-white text-sm font-semibold px-4 py-2.5 shadow-lg shadow-slate-900/10 hover:shadow-slate-900/20 transition" type="submit">
<span>Send enquiry</span>
<svg className="lucide lucide-send h-4 w-4" data-lucide="send" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</button>
<p className="text-xs text-slate-600" id="formStatus"></p>
</div>
<p className="mt-3 text-[11px] text-slate-500">Tip: Replace ACCESS_KEY_HERE with your Web3Forms access key. Or switch the form action to your preferred provider (Formspark, Formspree, Basin, etc.).</p>
</form>
</div>
</div>
</div>
</section>

<footer className="border-t border-slate-200 bg-white">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
<div>
<div className="flex items-center gap-2">
<span className="inline-grid place-items-center h-9 w-9 rounded-full bg-slate-900 text-white ring-1 ring-black/10">
<svg className="lucide lucide-building-2 h-4.5 w-4.5" data-lucide="building-2" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
</span>
<span className="font-semibold">The Strait of Tangier Company</span>
</div>
<p className="mt-3 text-slate-600">Trust meets technology in real estate. Structured, investor‑grade development in Tangier.</p>
</div>
<div className="">
</div>
<div className="">
<p className="font-semibold text-slate-900">Legal</p>
<ul className="mt-2 space-y-2">
<li className=""><a className="hover:text-slate-900 text-slate-600" href="#">Privacy</a></li>
<li className=""><a className="hover:text-slate-900 text-slate-600" href="#">Terms</a></li>
<li><a className="hover:text-slate-900 text-slate-600" href="#">Cookies</a></li>
</ul>
</div>
<div className="">
<p className="font-semibold text-slate-900">Get updates</p>
<p className="mt-2 text-slate-600">Join the waitlist to receive news and early access.</p>
<a className="mt-3 inline-flex items-center gap-2 rounded-xl bg-slate-900 text-white text-xs font-semibold px-3 py-2 shadow-sm hover:shadow transition" href="#contact">
              Join the Waitlist
              <svg className="lucide lucide-arrow-right h-3.5 w-3.5" data-lucide="arrow-right" fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</a>
</div>
</div>
<div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-4 text-xs text-slate-500">
<p>© <span id="year"></span> The Strait of Tangier Company. All rights reserved.</p>
<p>Made with systems thinking.</p>
</div>
</div>
</footer>

<button aria-controls="guideModal" aria-expanded="false" className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-slate-900 text-white text-xs font-semibold px-4 py-2 shadow-lg shadow-slate-900/20 hover:shadow-slate-900/30 transition" id="guideBtn">
<svg className="lucide lucide-book-open-text h-4 w-4" data-lucide="book-open-text" fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
<span>Quick guide</span>
</button>

<div aria-labelledby="guideTitle" aria-modal="true" className="fixed inset-0 z-[60] hidden" id="guideModal" role="dialog">
<div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" id="guideOverlay"></div>
<div className="relative mx-auto max-w-lg w-[92%] sm:w-full mt-24">
<div className="rounded-3xl bg-white ring-1 ring-slate-200 shadow-2xl overflow-hidden">
<div className="flex items-center justify-between p-5">
<div className="flex items-center gap-3">
<span className="inline-grid place-items-center h-9 w-9 rounded-xl bg-slate-900 text-white ring-1 ring-black/10">
<svg className="lucide lucide-book-open-text h-4.5 w-4.5" data-lucide="book-open-text" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
</span>
<h3 className="text-base font-semibold tracking-tight" id="guideTitle">Investor quick guide</h3>
</div>
<button aria-label="Close guide" className="inline-flex items-center justify-center h-9 w-9 rounded-full ring-1 ring-slate-200 hover:ring-slate-300 transition" id="guideClose">
<svg className="lucide lucide-x h-4.5 w-4.5" data-lucide="x" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</button>
</div>
<div className="px-5 pb-5">
<div className="grid gap-3">
<div className="flex items-start gap-3 rounded-2xl bg-slate-50 ring-1 ring-slate-200 p-4">
<span className="inline-grid place-items-center h-8 w-8 rounded-lg bg-white ring-1 ring-slate-200">
<svg className="lucide lucide-shield-check h-4 w-4 text-slate-900" data-lucide="shield-check" fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</span>
<div>
<p className="text-sm font-medium">Trust & governance</p>
<p className="text-xs text-slate-600">Learn how SPVs, escrowed releases, and audits protect investors.</p>
</div>
</div>
<div className="flex items-start gap-3 rounded-2xl bg-slate-50 ring-1 ring-slate-200 p-4">
<span className="inline-grid place-items-center h-8 w-8 rounded-lg bg-white ring-1 ring-slate-200">
<svg className="lucide lucide-map-pin h-4 w-4 text-slate-900" data-lucide="map-pin" fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="12" cy="10"></circle></svg>
</span>
<div>
<p className="text-sm font-medium">Why Tangier</p>
<p className="text-xs text-slate-600">Structural price advantage plus world‑class connectivity.</p>
</div>
</div>
<div className="flex items-start gap-3 rounded-2xl bg-slate-50 ring-1 ring-slate-200 p-4">
<span className="inline-grid place-items-center h-8 w-8 rounded-lg bg-white ring-1 ring-slate-200">
<svg className="lucide lucide-key-round h-4 w-4 text-slate-900" data-lucide="key-round" fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="16.5" cy="7.5" fill="currentColor"></circle></svg>
</span>
<div>
<p className="text-sm font-medium">Tier 1 membership</p>
<p className="text-xs text-slate-600">Early access to deal flow, dashboards, and pre‑sales.</p>
</div>
</div>
</div>
<div className="mt-5 flex flex-wrap gap-3">
<a className="inline-flex items-center gap-2 rounded-xl bg-slate-900 text-white text-xs font-semibold px-3 py-2 shadow-lg shadow-slate-900/10 hover:shadow-slate-900/20 transition" href="#contact">
                Apply for Tier 1
                <svg className="lucide lucide-arrow-right h-3.5 w-3.5" data-lucide="arrow-right" fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</a>
<a className="inline-flex items-center gap-2 rounded-xl bg-white text-slate-900 ring-1 ring-slate-200 text-xs font-semibold px-3 py-2 shadow-sm hover:bg-slate-50 transition" href="#teaser">
                Get teaser pack
                <svg className="lucide lucide-file-down h-3.5 w-3.5" data-lucide="file-down" fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path></svg>
</a>
</div>
</div>
</div>
</div>
</div>




    </>
  );
}
