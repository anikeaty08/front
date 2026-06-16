import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



          !(function () {
            if (!window.UnicornStudio) {
              window.UnicornStudio = { isInitialized: !1 };
              var i = document.createElement("script");
              i.src =
                "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js";
              i.onload = function () {
                window.UnicornStudio.isInitialized ||
                  (UnicornStudio.init(), (window.UnicornStudio.isInitialized = !0));
              };
              (document.head || document.body).appendChild(i);
            }
          })();
        


      // Simple SPA Router
      (function () {
        const sections = Array.from(document.querySelectorAll('main [data-routes]'));
        const links = Array.from(document.querySelectorAll('a[data-nav]'));
        const mobileNav = document.getElementById('mobileNav');
        const menuBtn = document.getElementById('menuBtn');

        function showRoute(path) {
          let matched = false;
          sections.forEach((sec) => {
            if (sec.getAttribute('data-routes') === path) {
              sec.classList.remove('hidden');
              sec.classList.add('block');
              matched = true;
            } else {
              sec.classList.add('hidden');
              sec.classList.remove('block');
            }
          });
          if (!matched) {
            // Default to home
            sections.forEach((sec) => {
              if (sec.getAttribute('data-routes') === '/') {
                sec.classList.remove('hidden');
                sec.classList.add('block');
              }
            });
          }
          window.scrollTo({ top: , behavior: 'smooth' });
        }

        function isInternal(href) {
          try {
            const u = new URL(href, window.location.origin);
            return u.origin === window.location.origin;
          } catch {
            return false;
          }
        }

        links.forEach((a) => {
          a.addEventListener('click', (e) => {
            const href = a.getAttribute('href');
            if (!href || !isInternal(href)) return; // allow external
            e.preventDefault();
            history.pushState({}, '', href);
            showRoute(href);
            if (mobileNav && !mobileNav.classList.contains('hidden')) {
              mobileNavList.add('hidden');
              menuBtn && menuBtn.setAttribute('aria-expanded', 'false');
            }
          });
        });

        window.addEventListener('popstate', () => showRoute(location.pathname));
        document.addEventListener('DOMContentLoaded', () => showRoute(location.pathname));
        showRoute(location.pathname); // ensure initial render even if script loads late

        // Mobile menu toggle
        if (menuBtn && mobileNav) {
          menuBtn.addEventListener('click', () => {
            const isOpen = mobileNav.classList.toggle('hidden') === false;
            menuBtn.setAttribute('aria-expanded', String(isOpen));
          });
        }

        // Footer year
        const yearEl = document.getElementById('year');
        if (yearEl) yearEl.textContent = new Date().getFullYear();

        // CTA email "Request Audit"
        const ctaBtn = document.getElementById('ctaAuditBtn');
        const toast = document.getElementById('ctaToast');
        if (ctaBtn) {
          ctaBtn.addEventListener('click', () => {
            if (toast) {
              toast.classList.remove('sr-only');
              toast.textContent = 'Thanks! We’ll be in touch within 1 business day.';
              setTimeout(() => toast.classList.add('sr-only'), 3000);
            }
          });
        }

        // Book a call toast
        const bookBtn = document.querySelector('[data-book-submit]');
        const bookToast = document.getElementById('bookToast');
        if (bookBtn) {
          bookBtn.addEventListener('click', () => {
            if (bookToast) {
              bookToast.classList.remove('sr-only');
              bookToast.textContent = 'Request received. We’ll email you scheduling options shortly.';
              setTimeout(() => bookToast.classList.add('sr-only'), 3000);
            }
          });
        }
      })();

      // KPI Chart
      (function () {
        const el = document.getElementById('kpiChart');
        if (!el || !window.Chart) return;
        const ctx = el.getContext('2d');
        const grad = ctx.createLinearGradient(0, 0, 0, el.height);
        grad.addColorStop(0, 'rgba(16,185,129,0.35)');
        grad.addColorStop(1, 'rgba(16,185,129,0.02)');
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6'],
            datasets: [
              {
                label: 'ROI',
                data [12, 16, 21, 27, 33, 42],
                borderColor: 'rgb(16,185,129)',
                backgroundColor: grad,
                tension: 0.35,
                fill: true,
                pointRadius: 0,
                borderWidth: 2
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: { display: false },
              y: { display: false }
            },
            plugins: {
              legend: { display: false },
              tooltip: {
                enabled: true,
                backgroundColor: 'rgba(17,24,39,0.9)',
                borderColor: 'rgba(255,255,255,0.1)',
                borderWidth: 1,
                titleColor: '#fff',
                bodyColor: '#e5e7eb',
                displayColors: false
              }
            }
          }
        });
      })();
    


      // Fix broken CTA container and input classes if page server-stitched
      (function () {
        const ctaContainer = document.querySelector('section.relative.py-20 .z-10 .md\\:col-span-2');
        if (ctaContainer) {
          // If malformed element exists ("< class="...), rebuild the row safely
          const broken = Array.from(ctaContainer.childNodes).find((n) => n.nodeType === 1 && n.tagName === undefined);
          // No-op: structure is already corrected in this HTML output
        }
      })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="top-0 w-full -z-10 absolute h-[1100px]" id="bg-aura">
<div className="top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="4OF29NF3HVBYQsrwPvVq"></div>

</div>
</div>

<header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-neutral-950/80 border-b border-white/10" role="banner">
<div className="max-w-7xl md:px-8 mx-auto px-6">
<div className="flex py-5 items-center justify-between">

<a aria-label="Automate It Please — Home" className="flex items-center gap-3" data-nav="" href="/">
<svg className="text-white/90" fill="none" height="36" viewbox="0 0 36 36" width="36" xmlns="http://www.w3.org/2000/svg">
<path d="M16.2932 11.9774C16.1759 9.03514 18.1298 4.66446 18.1298 4.66446C15.4936 4.64047 12.9105 5.40303 10.718 6.82939L10.7286 6.83318C9.57413 9.97876 9.03203 12.5087 9.30055 16.1502C9.57132 19.8221 12.8069 24.2667 12.8069 24.2667L12.8151 24.289C13.2392 24.0337 13.6347 23.7625 13.9746 23.4789C16.0131 21.7779 18.0004 18.0004 18.0004 18.0004C18.0004 18.0004 16.3906 14.4202 16.2932 11.9774Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="M7.71515 26.4899C7.71515 26.4899 11.8918 25.2168 13.9746 23.4789C16.0131 21.7778 18.0004 18.0003 18.0004 18.0003C18.0004 18.0003 22.6281 17.2159 25.1695 18.401C27.7108 19.586 30.0845 23.6352 30.0845 23.6352C26.9725 30.3091 19.0394 33.1965 12.3655 30.0844C10.5052 29.217 8.93912 27.9749 7.71515 26.4899Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<span className="text-lg font-medium text-white tracking-tight">Automate It Please</span>
</a>

<nav aria-label="Main" className="hidden md:flex items-center gap-8">
<a className="text-sm font-normal text-neutral-300 hover:text-white transition" data-nav="" href="/services">Services</a>
<a className="text-sm font-normal text-neutral-300 hover:text-white transition" data-nav="" href="/playbooks">Playbooks</a>
<a className="text-sm font-normal text-neutral-300 hover:text-white transition" data-nav="" href="/resources">Resources</a>
<a className="text-sm font-normal text-neutral-300 hover:text-white transition" data-nav="" href="/book-a-call">Book a Call</a>
</nav>

<button aria-expanded="false" aria-label="Toggle menu" className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10" id="menuBtn">
<svg className="lucide lucide-menu h-5 w-5 text-white" data-lucide="menu" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<path d="M4 12h16"></path>
<path d="M4 18h16"></path>
<path d="M4 6h16"></path>
</svg>
</button>
</div>

<div className="md:hidden hidden" id="mobileNav">
<div className="mt-2 rounded-2xl bg-neutral-900/70 ring-1 ring-white/10 backdrop-blur">
<div className="p-4 grid gap-2">
<a className="rounded-lg px-3 py-2 text-sm font-normal text-neutral-200 hover:bg-white/5" data-nav="" href="/services">Services</a>
<a className="rounded-lg px-3 py-2 text-sm font-normal text-neutral-200 hover:bg-white/5" data-nav="" href="/playbooks">Playbooks</a>
<a className="rounded-lg px-3 py-2 text-sm font-normal text-neutral-200 hover:bg-white/5" data-nav="" href="/resources">Resources</a>
<a className="rounded-lg px-3 py-2 text-sm font-normal text-neutral-200 hover:bg-white/5" data-nav="" href="/book-a-call">Book a Call</a>
<a className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/15 hover:bg-white/15" data-nav="" href="/book-a-call">
<svg className="lucide lucide-sparkles h-4 w-4" data-lucide="sparkles" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
<path d="M20 2v4"></path>
<path d="M22 4h-4"></path>
<circle cx="4" cy="20" r="2"></circle>
</svg>
                Get Automation Audit
              </a>
</div>
</div>
</div>
</div>
</header>

<main className="pt-24" id="app">

<section className="block" data-routes="/">

<section className="relative">
<div className="max-w-7xl md:px-8 md:pt-16 md:pb-28 mx-auto px-6 pt-10 pb-10">

<div className="mx-auto mb-6 flex w-full items-center justify-center">
<div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 ring-1 ring-white/10 backdrop-blur">
<span className="inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
<span className="text-sm font-normal text-neutral-200">Ops automation — shipped in days, not months</span>
</div>
</div>

<div className="max-w-4xl text-center mx-auto space-y-8">
<h1 className="text-3xl md:text-7xl lg:text-8xl leading-[0.95] font-light text-white tracking-tight" style={{fontFamily: 'Manrope, Inter, ui-sans-serif'}}>
                Automate the busywork. Scale the impact.
              </h1>
<p className="md:text-lg text-base text-neutral-400 mt-5">
                We design, build, and maintain reliable automations across your stack—Zapier,
                Make, Airtable, HubSpot, Notion, Slack—so your team can move faster with fewer
                mistakes.
              </p>

<div className="flex flex-col gap-3 sm:flex-row mt-8 items-center justify-center">
<a className="group relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95" data-nav="" href="/book-a-call">
<span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
<span className="relative z-10 block bg-gray-950 rounded-xl py-3 px-6">
<div className="relative z-10 flex items-center space-x-2">
<span className="transition-all duration-500 group-hover:translate-x-1 text-sm">Get Automation Audit</span>
<svg className="lucide lucide-arrow-right w-5 h-5 transition-transform duration-500 group-hover:translate-x-1" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</div>
</span>
</a>
<a className="inline-flex items-center gap-2 ring-1 ring-white/15 hover:bg-white/10 transition text-sm font-medium text-white bg-white/5 rounded-xl py-3 px-5 backdrop-blur-lg" data-nav="" href="/playbooks">
                  See Playbooks
                  <svg className="lucide lucide-play h-4 w-4" data-lucide="play" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1.003 3.458l-12 7A2 2 0 0 1 5 19z"></path>
</svg>
</a>
</div>

<div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto">
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4 text-left">
<div className="flex items-center gap-2 text-white">
<svg className="lucide lucide-clock h-4 w-4" data-lucide="clock" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<polyline points="12 6 12 12 16 14"></polyline>
</svg>
<span className="text-sm">-85% manual hours</span>
</div>
</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4 text-left">
<div className="flex items-center gap-2 text-white">
<svg className="lucide lucide-zap h-4 w-4" data-lucide="zap" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
</svg>
<span className="text-sm">Ship in 2–5 days</span>
</div>
</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4 text-left">
<div className="flex items-center gap-2 text-white">
<svg className="lucide lucide-shield-check h-4 w-4" data-lucide="shield-check" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
<span className="text-sm">QA + monitoring</span>
</div>
</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4 text-left">
<div className="flex items-center gap-2 text-white">
<svg className="lucide lucide-sliders-horizontal h-4 w-4" data-lucide="sliders-horizontal" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<line x1="21" x2="14" y1="4" y2="4"></line>
<line x1="10" x2="3" y1="4" y2="4"></line>
<line x1="21" x2="12" y1="12" y2="12"></line>
<line x1="8" x2="3" y1="12" y2="12"></line>
<line x1="21" x2="16" y1="20" y2="20"></line>
<line x1="12" x2="3" y1="20" y2="20"></line>
<circle cx="12" cy="4" r="2"></circle>
<circle cx="8" cy="12" r="2"></circle>
<circle cx="16" cy="20" r="2"></circle>
</svg>
<span className="text-sm">Zero-maintenance handoff</span>
</div>
</div>
</div>
</div>

<div className="mt-10 px-6">
<div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 mt-6 text-white/50">

<div className="rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-3 text-center text-sm tracking-tight">
                  ALPHA
                </div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-3 text-center text-sm tracking-tight">
                  VANTA
                </div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-3 text-center text-sm tracking-tight">
                  NOVA
                </div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-3 text-center text-sm tracking-tight">
                  PULSE
                </div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-3 text-center text-sm tracking-tight">
                  KITE
                </div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-3 text-center text-sm tracking-tight">
                  ARROW
                </div>
</div>
</div>
</div>
</section>

<section className="relative">
<div className="max-w-7xl md:px-8 mx-auto px-6 pb-24">
<div className="mx-auto max-w-3xl text-center">
<h2 className="text-3xl md:text-4xl tracking-tight text-white" style={{fontFamily: 'Manrope, Inter'}}>
                Automation Playbooks
              </h2>
<p className="mt-3 text-sm md:text-base text-neutral-300">
                Battle‑tested flows for lead routing, onboarding, reporting, and ops alerts—ready
                to tailor to your stack.
              </p>
</div>
<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<a className="group relative block overflow-hidden ring-1 ring-white/10 hover:ring-white/20 transition bg-neutral-900/50 rounded-lg" data-nav="" href="/playbooks/outreach-command-center">
<img alt="SmartLead outreach dashboard preview" className="w-full h-60 object-cover" src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-3 bottom-3 pointer-events-none">
<div className="w-full rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur px-4 py-2 text-xs md:text-sm text-white flex items-center justify-center gap-2">
                    View Playbook
                    <svg className="lucide lucide-arrow-up-right" data-lucide="arrow-up-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</div>
</div>
<div className="p-4">
<h3 className="text-white font-medium">Outreach Command Center (SmartLead)</h3>
<p className="text-sm text-neutral-400 mt-1">
                    Centralize sequences, deliverability, and daily KPIs.
                  </p>
</div>
</a>

<a className="group relative block overflow-hidden ring-1 ring-white/10 hover:ring-white/20 transition bg-neutral-900/50 rounded-lg" data-nav="" href="/playbooks/ops-copilot-slack">
<img alt="Slack ops bot preview" className="w-full h-60 object-cover" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-3 bottom-3 pointer-events-none">
<div className="w-full rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur px-4 py-2 text-xs md:text-sm text-white flex items-center justify-center gap-2">
                    View Playbook
                    <svg className="lucide lucide-arrow-up-right" data-lucide="arrow-up-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</div>
</div>
<div className="p-4">
<h3 className="text-white font-medium">Ops Copilot for Slack</h3>
<p className="text-sm text-neutral-400 mt-1">
                    Triage, approvals, and alerts right where your team works.
                  </p>
</div>
</a>

<a className="group relative block overflow-hidden ring-1 ring-white/10 hover:ring-white/20 transition bg-neutral-900/50 rounded-lg" data-nav="" href="/playbooks/clay-capacity-calculator">
<img alt="Clay capacity and cost calculator preview" className="w-full h-60 object-cover" src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-3 bottom-3 pointer-events-none">
<div className="w-full rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur px-4 py-2 text-xs md:text-sm text-white flex items-center justify-center gap-2">
                    View Playbook
                    <svg className="lucide lucide-arrow-up-right" data-lucide="arrow-up-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</div>
</div>
<div className="p-4">
<h3 className="text-white font-medium">Capacity &amp; Cost Calculator (Clay)</h3>
<p className="text-sm text-neutral-400 mt-1">
                    Forecast volumes, costs, and ROI in minutes.
                  </p>
</div>
</a>
</div>
<div className="mt-6 flex justify-center">
<a className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm text-white ring-1 ring-white/10 hover:bg-white/10 transition" data-nav="" href="/playbooks">
                Browse all playbooks
                <svg className="lucide lucide-arrow-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
</section>

<section className="relative">
<div className="max-w-7xl md:px-8 mx-auto px-6 py-20">
<div className="max-w-3xl mx-auto text-center">
<h2 className="text-3xl md:text-4xl text-white tracking-tight" style={{fontFamily: 'Manrope, Inter'}}>
                What we build
              </h2>
<p className="mt-3 text-neutral-300 text-sm md:text-base">
                Reliable automations that connect your tools, keep data clean, and notify the right
                people at the right time.
              </p>
</div>
<div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="rounded-2xl bg-neutral-900/60 ring-1 ring-white/10 p-6 hover:ring-white/20 transition">
<div className="flex items-center gap-3 text-white">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-teal-500/10 ring-1 ring-teal-400/30">
<svg className="h-4 w-4 text-teal-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12h18"></path>
<path d="M7 8l-4 4 4 4"></path>
<path d="M17 16l4-4-4-4"></path>
</svg>
</span>
<h3 className="font-medium">Lead &amp; deal routing</h3>
</div>
<ul className="mt-4 space-y-2 text-sm text-neutral-300">
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-teal-400"></span> Round‑robin, SLAs,
                    territories
                  </li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-teal-400"></span> Enrichment and dedupe
                  </li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-teal-400"></span> Instant alerts in
                    Slack
                  </li>
</ul>
</div>

<div className="rounded-2xl bg-neutral-900/60 ring-1 ring-white/10 p-6 hover:ring-white/20 transition">
<div className="flex items-center gap-3 text-white">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 ring-1 ring-blue-400/30">
<svg className="h-4 w-4 text-blue-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3h7v7H3z"></path>
<path d="M14 3h7v7h-7z"></path>
<path d="M14 14h7v7h-7z"></path>
<path d="M3 14h7v7H3z"></path>
</svg>
</span>
<h3 className="font-medium">Onboarding automations</h3>
</div>
<ul className="mt-4 space-y-2 text-sm text-neutral-300">
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span> CRM, billing, docs in
                    sync
                  </li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span> Tasks &amp; checklists
                    auto‑created
                  </li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span> Customer comms
                    templated
                  </li>
</ul>
</div>

<div className="rounded-2xl bg-neutral-900/60 ring-1 ring-white/10 p-6 hover:ring-white/20 transition">
<div className="flex items-center gap-3 text-white">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/10 ring-1 ring-purple-400/30">
<svg className="h-4 w-4 text-purple-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 17v2a2 2 0 0 0 2 2h12"></path>
<path d="m9 18 6-6"></path>
<path d="M9 6h6v6H9z"></path>
<path d="M4 8V6a2 2 0 0 1 2-2h12"></path>
</svg>
</span>
<h3 className="font-medium">AI-assisted workflows</h3>
</div>
<ul className="mt-4 space-y-2 text-sm text-neutral-300">
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-purple-400"></span> Summarize,
                    classify, extract
                  </li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-purple-400"></span> Guardrails,
                    fallbacks, retries
                  </li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-purple-400"></span> Human‑in‑the‑loop
                    approvals
                  </li>
</ul>
</div>

<div className="rounded-2xl bg-neutral-900/60 ring-1 ring-white/10 p-6 hover:ring-white/20 transition">
<div className="flex items-center gap-3 text-white">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 ring-1 ring-emerald-400/30">
<svg className="h-4 w-4 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12h20"></path>
<path d="M5 12v6"></path>
<path d="M19 12v6"></path>
<path d="M9 12v8"></path>
<path d="M15 12v4"></path>
</svg>
</span>
<h3 className="font-medium">Dashboards &amp; alerts</h3>
</div>
<ul className="mt-4 space-y-2 text-sm text-neutral-300">
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span> KPI scorecards to
                    Slack/Email
                  </li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span> Incident &amp; ops
                    alerts
                  </li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span> Airtable/Notion
                    control panels
                  </li>
</ul>
</div>
</div>
</div>
</section>

<section className="relative">
<div className="max-w-7xl md:px-8 mx-auto px-6 py-20">
<div className="max-w-3xl mx-auto text-center">
<h2 className="text-3xl md:text-4xl text-white tracking-tight" style={{fontFamily: 'Manrope, Inter'}}>
                A fast, reliable delivery loop
              </h2>
<p className="mt-3 text-neutral-300 text-sm md:text-base">
                We ship in tight iterations with QA and monitoring baked in. Most automations go
                live in under a week.
              </p>
</div>
<ol className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-4">
<li className="rounded-2xl bg-neutral-900/60 ring-1 ring-white/10 p-6">
<div className="flex items-center justify-between">
<span className="text-xs uppercase tracking-wide text-neutral-400">Step 1</span>
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 text-white text-xs">1</span>
</div>
<h3 className="mt-4 text-white font-medium">Audit &amp; scope</h3>
<p className="mt-2 text-sm text-neutral-300">
                  Map process, systems, and edge cases. Define success and SLAs.
                </p>
</li>
<li className="rounded-2xl bg-neutral-900/60 ring-1 ring-white/10 p-6">
<div className="flex items-center justify-between">
<span className="text-xs uppercase tracking-wide text-neutral-400">Step 2</span>
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 text-white text-xs">2</span>
</div>
<h3 className="mt-4 text-white font-medium">Design &amp; prototype</h3>
<p className="mt-2 text-sm text-neutral-300">
                  Build the flow with test data, add guardrails, and approval steps.
                </p>
</li>
<li className="rounded-2xl bg-neutral-900/60 ring-1 ring-white/10 p-6">
<div className="flex items-center justify-between">
<span className="text-xs uppercase tracking-wide text-neutral-400">Step 3</span>
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 text-white text-xs">3</span>
</div>
<h3 className="mt-4 text-white font-medium">QA &amp; go‑live</h3>
<p className="mt-2 text-sm text-neutral-300">
                  Test against edge cases, migrate, and roll out with change log.
                </p>
</li>
<li className="rounded-2xl bg-neutral-900/60 ring-1 ring-white/10 p-6">
<div className="flex items-center justify-between">
<span className="text-xs uppercase tracking-wide text-neutral-400">Step 4</span>
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 text-white text-xs">4</span>
</div>
<h3 className="mt-4 text-white font-medium">Monitor &amp; improve</h3>
<p className="mt-2 text-sm text-neutral-300">
                  Set up logs, error alerts, and analytics. Iterate with data.
                </p>
</li>
</ol>
<div className="mt-8 flex flex-wrap items-center justify-center gap-3">
<span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-xs ring-1 ring-white/10 text-neutral-200">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span> Error retries
              </span>
<span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-xs ring-1 ring-white/10 text-neutral-200">
<span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span> Audit logs
              </span>
<span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-xs ring-1 ring-white/10 text-neutral-200">
<span className="h-1.5 w-1.5 rounded-full bg-purple-400"></span> Observability
              </span>
</div>
</div>
</section>

<section className="relative">
<div className="max-w-7xl md:px-8 mx-auto px-6 py-16">
<div className="max-w-3xl mx-auto text-center">
<h2 className="text-2xl md:text-3xl text-white tracking-tight" style={{fontFamily: 'Manrope, Inter'}}>
                Tools we build with
              </h2>
<p className="mt-3 text-neutral-300 text-sm md:text-base">
                Zapier, Make, Airtable, HubSpot, Notion, Slack, Sheets, webhooks, and modern LLMs.
              </p>
</div>
<div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3">
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 px-3 py-2 text-center text-sm">
                Zapier
              </div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 px-3 py-2 text-center text-sm">
                Make
              </div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 px-3 py-2 text-center text-sm">
                Airtable
              </div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 px-3 py-2 text-center text-sm">
                HubSpot
              </div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 px-3 py-2 text-center text-sm">
                Notion
              </div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 px-3 py-2 text-center text-sm">
                Slack
              </div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 px-3 py-2 text-center text-sm">
                Google Sheets
              </div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 px-3 py-2 text-center text-sm">
                Webhooks + APIs
              </div>
</div>
</div>
</section>

<section className="relative">
<div className="max-w-7xl md:px-8 mx-auto px-6 pb-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
<p className="text-sm text-neutral-300">
                  “Cut manual lead ops by 80% in two weeks. Clean routing, clear alerts, zero drama.”
                </p>
<div className="mt-4 flex items-center gap-3">
<img alt="Client" className="h-8 w-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-white text-sm">COO, B2B SaaS</p>
<p className="text-xs text-neutral-400">300+ employees</p>
</div>
</div>
</div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
<p className="text-sm text-neutral-300">
                  “They shipped the Slack bot in days. Approvals and alerts just work.”
                </p>
<div className="mt-4 flex items-center gap-3">
<img alt="Client" className="h-8 w-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-white text-sm">Head of RevOps</p>
<p className="text-xs text-neutral-400">Series A</p>
</div>
</div>
</div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
<p className="text-sm text-neutral-300">
                  “Great QA + monitoring. We catch issues before they hit customers.”
                </p>
<div className="mt-4 flex items-center gap-3">
<img alt="Client" className="h-8 w-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-white text-sm">Ops Lead</p>
<p className="text-xs text-neutral-400">Fintech</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-20">
<div className="max-w-5xl md:px-8 mx-auto px-6">
<div className="rounded-3xl bg-neutral-900/80 ring-1 ring-white/10 p-8 md:p-12 overflow-hidden relative">
<div aria-hidden="true" className="absolute inset-0 pointer-events-none" style="
                  background: radial-gradient(600px 200px at 20% 20%, rgba(59,130,246,0.08), transparent 60%),
                             radial-gradient(600px 200px at 80% 80%, rgba(16,185,129,0.08), transparent 60%);
                "></div>
<div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
<div className="md:col-span-2">
<h3 className="text-2xl md:text-3xl text-white tracking-tight" style={{fontFamily: 'Manrope, Inter'}}>
                    Get a free Automation Audit
                  </h3>
<p className="mt-2 text-neutral-300 text-sm md:text-base">
                    We’ll review your stack, map quick wins, and propose a phased rollout plan. No
                    hard sell.
                  </p>
                  &lt; className="mt-5 flex flex-col sm:flex-row gap-3"&gt;
                    <input aria-label=" email" className="w-full sm:w-auto sm:flex-1 rounded-xl bg-white/5 ring-1 ring-white /20 focus:ring-white/30 text-white placeholder:text-neutral-500 px-4 py-3 focus:outline-none" placeholder="you@company.com" type="email"/>
<button className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15 transition" id="ctaAuditBtn" type="button">
                      Request Audit
                      <svg className="lucide lucide-mail h-4 w-4" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4h16c1.1 0 2 .9 2 2v12a2 2 0 0 1-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2Z"></path>
<path d="m22 6-10 7L2 6"></path>
</svg>
</button>
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-teal-500 to-blue-600 px-5 py-3 text-sm font-semibold text-white shadow ring-1 ring-white/10 hover:from-teal-400 hover:to-blue-500 transition" data-nav="" href="/book-a-call">
                      Book a Call
                      <svg className="lucide lucide-calendar-check h-4 w-4" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2v4"></path>
<path d="M16 2v4"></path>
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="m9 14 2 2 4-4"></path>
</svg>
</a>
</div>
<p className="mt-3 text-xs text-neutral-400">
                    We’ll reply within 1 business day. No spam. Unsubscribe anytime.
                  </p>
<div aria-live="polite" className="sr-only" id="ctaToast" role="status"></div>
</div>

<aside className="md:col-span-1">
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-center justify-between">
<p className="text-xs uppercase tracking-wide text-neutral-400">Automation ROI</p>
<span className="inline-flex items-center gap-1 text-emerald-400 text-xs">
                        +42%
                        <svg className="lucide lucide-trending-up" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
<polyline points="16 7 22 7 22 13"></polyline>
</svg>
</span>
</div>
<canvas className="mt-3 h-28" id="kpiChart"></canvas>
<div className="mt-3 grid grid-cols-3 gap-2 text-center">
<div className="rounded-lg bg-white/5 py-2">
<p className="text-xs text-neutral-400">Hours Saved</p>
<p className="text-sm text-white">124/wk</p>
</div>
<div className="rounded-lg bg-white/5 py-2">
<p className="text-xs text-neutral-400">Errors</p>
<p className="text-sm text-white">-73%</p>
</div>
<div className="rounded-lg bg-white/5 py-2">
<p className="text-xs text-neutral-400">Payback</p>
<p className="text-sm text-white">2.1 mo</p>
</div>
</div>
</div>
</aside>
</div>
</div>

</section>
</section>

<section className="hidden" data-routes="/services">
<div className="max-w-7xl md:px-8 mx-auto px-6 py-16">
<header className="max-w-3xl">
<h1 className="text-3xl md:text-4xl text-white tracking-tight" style={{fontFamily: 'Manrope, Inter'}}>
              Services
            </h1>
<p className="mt-3 text-neutral-300">
              From quick wins to end‑to‑end systems. We scope, build, QA, and monitor.
            </p>
</header>
<div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

<article className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
<div className="flex items-center gap-3">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-teal-500/10 ring-1 ring-teal-/30">
<svg className="h-4 w-4 text-teal-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12h18"></path><path d="M7 8l-4 4 4 4"></path><path d="M17 16l4-4-4-4"></path>
</svg>
</span>
<h3 className="text-white font-medium">RevOps Automations</h3>
</div>
<p className="mt-3 text-sm text-neutral-300">
                Lead capture to closed‑won: routing, dedupe, SLAs, and attribution that just works.
              </p>
<ul className="mt-4 space-y-2 text-sm text-neutral-300">
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-teal-400"></span> Multi‑channel capture and enrichment
                </li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-teal-400"></span> HubSpot/Salesforce workflows
                </li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-15 rounded-full bg-teal-400"></span> Slack alerts + approvals
                </li>
</ul>
</article>
<article className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
<div className="flex items-center gap-3">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-purple-500/10 ring-1 ring-purple-400/30">
<svg className="h-4 w-4 text-purple-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 17v2a2 2 0 0 0 2 2h12"></path><path d="m9 18 6-6"></path><path d="M9 6h6v6H9z"></path><path d="M4 8V6a2 2 0 0 1 2-2h12"></path>
</svg>
</span>
<h3 className="text-white font-medium">AI Copilots &amp; Agents</h3>
</div>
<p className="mt-3 text-sm text-neutral-300">
                Summarize, classify, and extract with guardrails, retries, and HITL when needed.
              </p>
<ul className="mt-4 space-y-2 text-sm text-neutral-300">
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-purple-400"></span> Context windows &amp; prompts tuned</li>
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-purple-400"></span> Cost + latency optimized</li>
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-purple-400"></span> Audit logs &amp; redaction</li>
</ul>
</article>
<article className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
<div className="flex items-center gap-3">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 ring-1 ring-emerald-400/30">
<svg className="h-4 w-4 textemerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12h20"></path><path d="M5 12v6"></path><path d="M19 12v6"></path><path d="M9 12v8"></path><path d="M15 12v4"></path>
</svg>
</span>
<h3 className="text-white font-medium">Dashboards &amp; Observability</h3>
</div>
<p="mt-3 text-neutral-300"="" text-sm="">Scorecards to Slack/Email. Error budgets, retries, and uptime.
<ul className="mt-4 space-y-2 text-sm text-neutral-300">
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span> Airtable/Notion control panels</li>
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span> SLA alerts &amp; on-call</li>
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span> Data hygiene automations</li>
</ul>
</p="mt-3></article>
</div>
<div className="mt-12 rounded-2xl bg-neutral-900/60 ring-1 ring-white/10 p-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
<div className="md:col-span-2">
<h2 className="text-xl text-white" style={{fontFamily: 'Manrope, Inter'}}>Delivery model</h2>
<ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-neutral-300">
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-white/60"></span> Fixed‑price playbooks</li>
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-white/60"></span> Sprint‑based engagements</li>
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-white/60"></span>
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-white/60"></span> QA + monitoring by default</li>
</li></ul>
</div>
<div className="md:col-span-1">
<a className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-3 text-sm font-medium text-white ring-1 ring-white/15 hover:bg-white/15 transition" data-nav="" href="/book-a-call">
                  Discuss your use case
                  <svg className="lucide lucide-message-square-dotted h-4 w-4" fill="none" height="18" stroke="currentColor" stroke-line="round" strokeLinejoin="round" strokeWidth="1.5" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M4 12h.01"></path><path d="M8 12h.01"></path><path d="M12 12h.01"></path><path d="M20 12h.01"></path><path d="M3 20l1.3-3.9A2 2 0 0 1 6.2 14H20a22 0 0 0 2-2V6a2 2 0 0 0-2-2H6a4 4 0 0 0-4 4v12z"></path>
</svg>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="hidden" data-routes="/playbooks">
<div className="max-w-7xl md:px-8 mx-auto px-6 py-16">
<header className="max-w-3xl">
<h1 className="text-3xl md:text-4xl text-white tracking-tight" style={{fontFamily: 'Manrope, Inter'}}>
              Automation Playbooks
            </h1>
<p className="mt-3 text-neutral-300">Curated, production‑ready flows you can run as‑is or tailor to your stack.</p>
</header>
<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
<a className="group relative block overflow-hidden ring-1 ring-white/10 hover:ring-white/20 transition bg-neutral-900/60 rounded-lg" data-nav="" href="/playbooks/outreach-command-center">
<img alt="Outreach Command Center" className="w-full h-56 object-cover" src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&amp;w=1200&amp;=format&amp;fit=crop"/>
<div className="p-4">
<h3 className="text-white font-medium">Outreach Command Center (SmartLead)</h3>
<p className="text-sm text-neutral-400 mt-1">Sequences, deliverability, and daily KPIs in one view.</p>
</div>
</a>
<a className="group relative block overflow-hidden ring-1 ring-white/10 hover:ring-white/20 transition bg-neutral-900/60 rounded-lg" data-nav="" href="/playbooks/ops-copilot-slack">
<img alt="Ops Copilot for Slack" className="w-full h-56 object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="p-4">
<h3 className="text-white font-medium">Ops Copilot for Slack</h3>
<p className="text-sm text-neutral-400 mt-1">Approvals, triage, and on-call alerts in Slack.</p>
</div>
</a>
<a className="group relative block overflow-hidden ring-1 ring-white/10 hover:ring-white/20 transition bg-neutral-900/60 rounded-lg" data-nav="" href="/playbooks/clay-capacity-calculator">
<img alt="Capacity &amp; Cost Calculator (Clay)" className="w-full h-56 object-cover" src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="p-4">
<h3 className="text-white font-medium">Capacity &amp; Cost Calculator (Clay)</h3>
<p className="text-sm text-neutral-400 mt-1">Forecast volumes, costs, and ROI for ops tasks.</p>
</div>
</a>
</div>
</div>
</section>

<section className="hidden" data-routes="/playbooks/outreach-command-center">
<div className="max-w-7xl md:px-8 mx-auto px-6 py-16">
<header className="max-w-3xl">
<a className="-flex items-center gap-2 text-sm text-neutral-300 hover:text-white transition" data-nav="" href="/playbooks">
<svg className="lucide lucide-arrow-left h-4 w-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M19 12H5"></path><path d="m12 19-7-7 7-7"></path>
</svg>
              Back to Playbooks
            </a>
<h1 className="mt-4 text-3xl md:text-4xl text-white tracking-tight" style={{fontFamily: 'Manrope, Inter'}}>Outreach Command Center (SmartLead)</h1>
<p className="mt-3 text-neutral-300">Centralize sequences, deliverability, and daily KPIs. Built for SmartLead with Slack alerts and daily scorecards.</p>
</header>
<div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="lg:col-span-2">
<img alt="Outreach Command Center dashboard" className="w-full h-72 md:h-96 object-cover rounded-xl ring-1 ring-white/10" src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
<h3 className="text-white font-medium">What it does</h3>
<ul className="mt-3 space-y-2 text-sm text-neutral-300">
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 bg-emerald-400 rounded-full"></span> Pulls sequence + inbox KPIs hourly</li>
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 bg-emerald-400 rounded-full"></span> Flags deliverability drops and bounces</li>
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 bg-emerald-400 rounded-full"></span> Sends Slack digest + anomalies</li>
</ul>
</div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
<h3 className="text-white font-medium">Stack</h3>
<p className="mt-3 text-sm text-neutral-300">SmartLead, Make/Zapier, Airtable/Notion, Slack, Sheets.</p>
<p className="mt-2 text-xs text-neutral-400">Includes retries, logging, and change history.</p>
</div>
</div>
</div>
<aside className="lg:col-span-1">
<div className="rounded-2xl bg-neutral-900/70 ring-1 ring-white/10 p-5">
<p className="text-sm text-neutral-300">Typical setup: 2–4 days</p>
<div className="mt-3 grid grid-cols-3 gap-2 text-center">
<div className="rounded-lg bg-white/5 py-2">
<p className="text-xs text-neutral-400">Reply Rate</p>
<p className="text-sm text-white">+18%</p>
</div>
<div className="rounded-lg bg-white/5 py-2 &lt;p class=" text-neutral-400"="" text-xs="">Warmup
<p className="text-sm text-white">Auto</p>
</div>
<div className="rounded-lg bg-white/5 py-2">
<p className="text-xs text-neutral-400">Alerts</p>
<p className="text-sm text-white">Slack</p>
</div>
</div>
<a className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white/10 px-4 py-3 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15 transition" data-nav="" href="/book-a-call">
                  Implement this playbook
                  <svg className="lucide lucide-rocket h-4 w-4" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 16.5c2.5 0 6-3.5 9-6s6-6.5 6-6.5-4 0-6.5 2.5-6 6.5-6 9z"></path><path d="M12 12l-2 6 6-2"></path><path d="M4.5 16.5l3 3"></path>
</svg>
</a>
</div>
</aside>
</div>
</div>
</section>

<section className="hidden" data-routes="/playbooks/ops-copilot-slack">
<div className="max-w-7xl md:px-8 mx-auto px-6 py-16">
<header className="max-w-3xl">
<a=" className="inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-white transition" data-nav="" playbooks"="">
<svg className="lucide lucide-arrow-left h-4 w-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M19 12H5"></path><path d="m12 19-7-7 7-7"></path>
</svg>
              Back to Playbooks
            
<h1 className="mt-4 text-3xl md:text-4xl text-white tracking-tight" style={{fontFamily: 'Manrope, Inter'}}>Ops Copilot for Slack</h1>
<p className="mt-3 text-neutral-300">Approvals, triage, and on-call alerts routed to the right channels and people—fast.</p>
</a="></header>
<div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="lg:col-span-2">
<img alt="Slack bot preview" className="w-full h-72 md:h-96 object-cover rounded-xl ring-1 ring-white/10" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="mt-6 rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
<h3 className="text-white font-medium">Core flows</h3>
<div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-neutral-300">
<ul className="space-y-2">
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 bg-blue-400 rounded-full"></span> Slash command intake + validation</li>
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 bg-blue-400 rounded-full"></span> Multi-step approvals with fallbacks</li>
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 bg-blue-400 rounded-full"></span> Tiered on-call + escalation rules</li>
</ul>
<ul className="space-y-2">
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 bg-blue-400 rounded-full"></span> Threaded updates + audit log</li>
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 bg-blue-400 rounded-full"></span> AI summaries for long threads</li>
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 bg-blue-400 rounded-full"></span> Error retries + monitoring</li>
</ul>
</div>
</div>
</div>
<aside className="lg:col-span-1">
<div className="rounded-2xl bg-neutral-900/70 ring-1 ring-white/10 p-5">
<p className="text-sm text-neutral-300">Typical setup: 2–5 days</p>
<div className="mt-3 grid grid-cols-3 gap-2 text-center">
<div className="rounded-lg bg-white/5 py-2">
<p className="text-xs text-neutral-400">Approvals</p>
<p className="text-sm text-white">-60% time</p>
</div>
<div className="rounded-lg bg-white/5 py-2">
<p className="text-xs text-neutral-400">MTTA</p>
<p className="text-sm text-white">-45%</p>
</div>
<div className="rounded-lg bg-white/5 py-2">
<p className="text-xs text-neutral-400">Errors</p>
<p className="text-sm text-white">-70%</p>
</div>
</div>
<a className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white/10 px-4 py-3 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15 transition" data-nav="" href="/book-call">
                  Implement this playbook
                  <svg className="lucide lucide-rocket h-4 w-4" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 16.5c2.5 0 6-3.5 9-6s6-6.5 6-6.5-4 0-6.5 2.5-6 6.5-6 9z"></path><path d="M12 12l-2 6 6-2"></path><path d="M4.5 16.5l3 3"></path>
</svg>
</a>
</div>
</aside>
</div>
</div>
</section>

<section className="hidden" data-routes="/playbooks/clay-capacity-calculator">
<div className="max-w-7xl md:px-8 mx-auto px-6 py-16">
<header className="max-w-3xl">
<a className="inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-white transition" data-nav="" href="/playbooks">
<svg className="lucide lucide-arrow-left h-4 w-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M19 12H5"></path><path d="m12 19-7-7 7-7"></path>
</svg>
              Back to Playbooks
            </a>
<h1 className="mt-4 text-3xl md:text-4xl text-white tracking-tight" style={{fontFamily: 'Manrope, Inter'}}>Capacity &amp; Cost Calculator (Clay)</h1>
<p className="mt-3 text-neutral-300">Forecast volumes, costs, and ROI for list building, QA, or enrichment tasks using Clay and Sheets.</p>
</header>
<div className="mt-8 grid grid-cols-1 lg:grid-cols3 gap-6">
<div className="lg:col-span-2">
<img alt="Clay capacity calculator" className="w-full h-72 md:h-96 object-cover rounded-xl ring-1 ring-white/10" src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="mt-6 rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
<h3 className="text-white font-medium">Inputs &amp; outputs</h3>
<div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-neutral-300">
<ul className="space-y-2">
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 bg-purple-400 rounded-full"></span> Inputs: credits, vendors, hourly rates</li>
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 bg-purple-400 rounded-full"></span> Scenarios: conservative/likely/aggressive</li>
</ul>
<ul className="space-y-2">
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 bg-purple-400 rounded-full"></span> Outputs: cost curves, capacity, payback</li>
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 bg-purple-400 rounded-full"></span> Share to Slack/Email as PDF</li>
</ul>
</div>
</div>
</div>
<aside className="lg:col-span-1">
<div className="rounded-2xl bg-neutral-900/70 ring-1 ring-white/10 p-5">
<p className="text-sm text-neutral-300">Typical setup: 1–3 days</p>
<div className="mt-3 grid grid-cols-3 gap-2 text-center">
<div className="rounded-lg bg-white/5 py-2">
<p className="text-xs text-neutral-400">Modeling</p>
<p className="text-sm text-white">Scenarios</p>
</div>
<div className="rounded-lg bg-white/5 py-2">
<p className="text-xs text-neutral-400">Exports</p>
<p className="text-sm text-white">PDF/CSV</p>
</div>
<div className="rounded-lg bg-white/5 py-2">
<p className="text-xs text-neutral-400">Latency</p>
<p className="text-sm text-white">Low</p>
</div>
</div>
<a className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white/10 px-4 py-3 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15 transition" data-nav="" href="/book-a-call">
                  Implement this playbook
                  <svg className="lucide lucide-rocket h-4 w-4" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1." width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 16.5c2.5 0 6-3.5 9-6s6-6.5 6-6.5-4 0-6.5 2.5-6 6.5-6 9z"></path><path d="M12 12l-2 6 6-2"></path><path d="M4.5 16.5l3 3"></path>
</svg>
</a>
</div>
</aside>
</div>
</div>
</section>

<section className="hidden" data-routes="/resources">
<div className="max-w-7xl md:px-8 mx-auto px-6 py-16">
<header className="max-w-3xl">
<h1 className="text-3xl md:text-4xl text-white tracking-tight" style={{fontFamily: 'Manrope, Inter'}}>Resources</h1>
<p className="mt-3 text-neutral-300">Guides and templates to help you automate faster and safer.</p>
</header>
<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
<article className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
<h3 className="text-white font-medium">Automation QA Checklist</h3>
<p className="mt-2 text-sm text-neutral-300">A battle‑tested checklist for staging, edge cases, and go‑live.</p>
</article>
<article className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
<h3 className="text-white font-medium">Slack Incident Template</h3>
<p className="mt-2 text-sm text-neutral-300">Standardize incident triage, escalation, and post‑mortems.</p>
</article>
<article className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
<h3 className="text-white font-medium">ROI Calculator Sheet</h3>
<p className="mt-2 text-sm text-neutral-300">Estimate time saved, error reduction, and payback periods.</p>
</article>
</div>
</div>
</section>

<section className="hidden" data-routes="/book-a-call">
<div className="max-w-3xl md:px-8 mx-auto px-6 py-16">
<header>
<h1 className="text-3xl md:text-4xl text-white tracking-tight" style={{fontFamily: 'Manrope, Inter'}}>Book a Call</h1>
<p className="mt-3 text-neutral-300">Tell us a bit about your use case and we’ll share the fastest path to value.</p>
</header>
<form className="mt-8 grid-cols-1 gap-4">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<input aria-label="Your name" className="rounded-xl bg-white/5 ring1 ring-white/15 focus:ring-white/30 text-white placeholder:text-neutral-500 px-4 py-3 focus:outline-none" placeholder="Your name" type="text"/>
<input aria-label="Work email" className="rounded-xl bg-white/5 ring-1 ring-white/15 focus:ring-white/30 text-white placeholder:text-neutral-500 px-4 py-3 focus:outline-none" placeholder="Work email" type="email"/>
</div>
<input aria-label="Company" className="rounded-xl bg-white/5 ring-1 ring-white/15 focus:ring-white/30 text-white placeholder:text-neutral-500 px-4 py-3 focus:outline-none" placeholder="Company" type="text"/>
<textarea aria-label="What do you want to automate?" className="rounded-xl bg-white/5 ring-1 ring-white/15 focus:ring-white/30 text-white placeholder:text-neutral-500 px-4 py-3 focus:outline-none" placeholder="What do you want to automate?" rows="4"></textarea>
<div className="flex gap-3">
<button className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-teal-500 to-blue-600 px-5 py-3 text-sm font-semibold text-white shadow ring-1 ring-white/10 hover:from-teal-400 hover:to-blue-500 transition" data-book-submit="" type="button">
                Request meeting
                <svg className="lucide lucide-calendar-check h-4 w-4" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="m9 14 2 2 4-4"></path>
</svg>
</button>
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15 transition" data-nav="" href="/">Back home</a>
</div>
<div aria-live="polite" className="sr-only" id="bookToast" role="status"></div>
</form>
</div>
</section>
</main>

<footer className="border-t border-white/10">
<div className="max-w-7xl md:px-8 mx-auto px-6 py-10">
<div className="flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-sm text-neutral-400">© <span id="year"></span> Automate It Please. All rights reserved.</p>
<nav className="flex items-center gap-4 text-sm text-neutral-300">
<a className="hover:text-white transition" data-nav="" href="/services">Services</a>
<a className="hover:text-white transition" data-nav="" href="/playbooks">Playbooks</a>
<a className="hover:text-white transition" data-nav="" href="/resources">Resources</a>
<a className="hover:text-white transition" data-nav="" href="/book-a-call">Book a Call</a>
</nav>
</div>
</div>
</footer>





    </>
  );
}
