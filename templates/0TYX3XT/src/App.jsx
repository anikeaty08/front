import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Live local time
      (function () {
        const el = document.getElementById('localTime');
        function tick() {
          const d = new Date();
          const hh = String(d.getHours()).padStart(2, '0');
          const mm = String(d.getMinutes()).padStart(2, '0');
          const ss = String(d.getSeconds()).padStart(2, '0');
          el.textContent = hh + ':' + mm + ':' + ss;
        }
        tick();
        setInterval(tick, 1000);
      })();

      // Year
      document.getElementById('year').textContent = new Date().getFullYear();

      // FAQ accordion
      (function () {
        const root = document.getElementById('faq');
        if (!root) return;
        root.querySelectorAll('[data-accordion-item]').forEach((item) => {
          const open = item.hasAttribute('data-open');
          const btn = item.querySelector('[data-accordion="faq"]');
          const content = item.querySelector('[data-qa="a"]');
          const plus = item.querySelector('[data-icon="plus"]');
          const minus = item.querySelector('[data-icon="minus"]');
          btn.setAttribute('aria-expanded', open ? 'true' : 'false');
          if (!open) content.classList.add('hidden');
          plus.classList.toggle('hidden', open);
          minus.classList.toggle('hidden', !open);

          btn.addEventListener('click', () => {
            const expanded = btn.getAttribute('aria-expanded') === 'true';
            btn.setAttribute('aria-expanded', String(!expanded));
            content.classList.toggle('hidden');
            plus.classList.toggle('hidden');
            minus.classList.toggle('hidden');
          });
        });
      })();

      // Pricing upsell toggle
      (function () {
        const root = document.getElementById('pricing');
        if (!root) return;
        const switchEl = root.querySelector('[data-upsell-switch]');
        const knob = root.querySelector('[data-upsell-knob]');
        const amountEl = root.querySelector('[data-amount]');
        const periodEl = root.querySelector('[data-period]');

        const base = 3000;
        const addon = 2500;
        let upsell = false;

        function money(n) {
          return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
        }
        function render() {
          amountEl.textContent = money(base + (upsell ? addon : 0));
          periodEl.textContent = '/project' + (upsell ? ' + /month' : '');
          switchEl.setAttribute('aria-checked', upsell ? 'true' : 'false');
          switchEl.classList.toggle('bg-white', upsell);
          switchEl.classList.toggle('bg-white/10', !upsell);
          knob.classList.toggle('translate-x-5', upsell);
          knob.classList.toggle('translate-x-0', !upsell);
        }
        switchEl.addEventListener('click', () => { upsell = !upsell; render(); });
        render();
      })();

      // Render Lucide icons
      if (window.lucide && typeof lucide.createIcons === 'function') {
        lucide.createIcons();
      }
      document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide && typeof lucide.createIcons === 'function') {
          lucide.createIcons();
        }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 -z-10">
<div className="absolute inset-0 opacity-[0.35] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
<div className="absolute inset-0 opacity-[0.12] bg-[linear-gradient(to_right,rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.08)_1px,transparent_1px)] [background-size:120px_1px,1px_120px]"></div>
<div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/60"></div>
</div>

<header className="max-w-7xl mx-auto pt-6 px-4 sm:px-6">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-xs sm:text-sm tracking-tight text-gray-600">VIP/ <span className="tabular-nums" id="localTime">00:00:00</span></span>
</div>

<nav aria-label="Primary" className="hidden md:flex items-center gap-6">
<a className="text-sm font-medium tracking-tight text-gray-700 hover:text-gray-900 transition-colors" href="#impact">Impact</a>
<a className="text-sm font-medium tracking-tight text-gray-700 hover:text-gray-900 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium tracking-tight text-gray-700 hover:text-gray-900 transition-colors" href="#work">Work</a>
<a className="text-sm font-medium tracking-tight text-gray-700 hover:text-gray-900 transition-colors" href="#pricing">Pricing</a>
<a className="text-sm font-medium tracking-tight text-gray-700 hover:text-gray-900 transition-colors" href="#faq">FAQ</a>
<a className="text-sm font-medium tracking-tight text-gray-700 hover:text-gray-900 transition-colors" href="#contact">Contact</a>
</nav>
<a className="group inline-flex items-center gap-2 text-sm font-medium tracking-tight text-white bg-gray-900 hover:bg-gray-800 border border-gray-200/10 rounded-full px-4 py-2" href="#contact">
<span>Start Project</span>
<svg className="w-4 h-4 stroke-1.5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</header>

<section className="max-w-7xl mx-auto mt-8 mb-8 px-4 sm:px-6">
<div className="relative overflow-hidden rounded-[32px] bg-white border border-white/20 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_8px_30px_rgba(0,0,0,0.08)]">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.07] via-transparent to-indigo-500/[0.07]"></div>
</div>
<div className="relative p-6 sm:p-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
<div className="lg:col-span-7">
<h1 className="text-[36px] sm:text-[52px] lg:text-[64px] leading-[1.05] font-semibold tracking-tight text-gray-900">Marketing that Builds Financial Brands.</h1>
<p className="mt-4 text-base sm:text-lg text-gray-700">
                We don't just create visuals; we engineer customer acquisition engines for credit unions and ambitious finance companies. From AI-powered SEO to high-performance content, we build the marketing assets you need to grow your membership and bottom line.
              </p>
<div className="mt-6 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium tracking-tight text-white bg-emerald-600 hover:bg-emerald-700 border border-emerald-700/20 shadow-sm" href="#impact">
<svg className="w-4 h-4 stroke-1.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>
</svg>
<span>See Our Impact</span>
</a>
<span className="text-xs text-gray-500">Credit Union + Fintech Specialists</span>
</div>
</div>
<div className="lg:col-span-5">
<div className="relative overflow-hidden rounded-2xl bg-neutral-900 h-[260px] sm:h-[320px]">
<img alt="Finance growth dashboard" className="absolute inset-0 w-full h-full object-cover opacity-70" src="https://images.unsplash.com/photo-1526470498-9ae73c665de8?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-white/90 text-sm">Acquisition Engine</p>
<h3 className="text-white text-2xl font-semibold tracking-tight">AI-First Growth Stack</h3>
<div className="mt-3 grid grid-cols-3 gap-2">
<div className="rounded-lg bg-white/10 border border-white/10 p-3 backdrop-blur-sm">
<p className="text-white text-lg font-semibold tracking-tight">+42%</p>
<p className="text-[11px] text-white/70">MQLs</p>
</div>
<div className="rounded-lg bg-white/10 border border-white/10 p-3 backdrop-blur-sm">
<p className="text-white text-lg font-semibold tracking-tight">-31%</p>
<p className="text-[11px] text-white/70">CPA</p>
</div>
<div className="rounded-lg bg-white/10 border border-white/10 p-3 backdrop-blur-sm">
<p className="text-white text-lg font-semibold tracking-tight">3.1x</p>
<p className="text-[11px] text-white/70">ROI</p>
</div>
</div>
</div>
</div>
<p className="mt-3 text-xs text-gray-500">Results are illustrative; outcomes vary by strategy and execution.</p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto mt-6 mb-8 px-4 sm:px-6" id="impact">
<div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
<div className="rounded-2xl bg-white border border-gray-200/60 p-4">
<div className="text-2xl font-semibold tracking-tight">120+</div>
<p className="text-[12px] text-gray-600 mt-0.5">Financial Sector Projects</p>
</div>
<div className="rounded-2xl bg-white border border-gray-200/60 p-4">
<div className="text-2xl font-semibold tracking-tight">60+</div>
<p className="text-[12px] text-gray-600 mt-0.5">High-Value Clients</p>
</div>
<div className="rounded-2xl bg-white border border-gray-200/60 p-4">
<div className="text-2xl font-semibold tracking-tight">5+</div>
<p className="text-[12px] text-gray-600 mt-0.5">Years of Technical Expertise</p>
</div>
<div className="rounded-2xl bg-white border border-gray-200/60 p-4">
<div className="text-2xl font-semibold tracking-tight">98%</div>
<p className="text-[12px] text-gray-600 mt-0.5">Client Retention Rate</p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto mt-10 mb-8 px-4 sm:px-6" id="work">
<div className="relative overflow-hidden rounded-[32px] bg-white border border-white/20 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_8px_30px_rgba(0,0,0,0.08)]">
<div className="relative p-6 sm:p-8">
<div className="flex items-center justify-between">
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight">Recent Engagements</h2>
<a className="inline-flex items-center gap-2 text-sm font-medium tracking-tight text-gray-800 bg-gray-100 hover:bg-gray-200 rounded-full px-3 py-1.5 border border-gray-200/60" href="#work">
<span>View All Projects</span>
<svg className="w-4 h-4 stroke-1.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path><path d="M7 17 17 7"></path>
</svg>
</a>
</div>
<div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">

<article className="group overflow-hidden rounded-2xl bg-white border border-gray-200/60">
<div className="relative aspect-[16/10]">
<img alt="Member growth campaign" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
</div>
<div className="p-4">
<div className="flex items-center gap-2 text-xs text-gray-600">
<svg className="w-4 h-4 stroke-1.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8 6h13"></path><path d="M8 12h13"></path><path d="M8 18h13"></path><path d="M3 6h.01"></path><path d="M3 12h.01"></path><path d="M3 18h.01"></path></svg>
<span>Member Growth Campaign</span>
</div>
<h3 className="mt-2 text-base font-semibold tracking-tight">[Credit Union Name] Member Acquisition</h3>
<p className="text-sm text-gray-600 mt-1">Multi-channel campaign driving a record number of new member sign-ups in Q3.</p>
</div>
</article>

<article className="group overflow-hidden rounded-2xl bg-white border border-gray-200/60">
<div className="relative aspect-[16/10]">
<img alt="Digital branch experience" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
</div>
<div className="p-4">
<div className="flex items-center gap-2 text-xs text-gray-600">
<svg className="w-4 h-4 stroke-1.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="3"></rect><path d="M8 21h8"></path><path d="M12 17v4"></path></svg>
<span>Digital Experience</span>
</div>
<h3 className="mt-2 text-base font-semibold tracking-tight">[Financial Institution] Digital Branch</h3>
<p className="text-sm text-gray-600 mt-1">A complete UI/UX and website overhaul focused on user experience and loan application conversion.</p>
</div>
</article>

<article className="group overflow-hidden rounded-2xl bg-white border border-gray-200/60">
<div className="relative aspect-[16/10]">
<img alt="SEO &amp; content strategy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1504711331083-9c895941bf81?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
</div>
<div className="p-4">
<div className="flex items-center gap-2 text-xs text-gray-600">
<svg className="w-4 h-4 stroke-1.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M2 12h20"></path><path d="M12 2a15.3 15.3 0 0 0 0 20"></path></svg>
<span>SEO &amp; Content Strategy</span>
</div>
<h3 className="mt-2 text-base font-semibold tracking-tight">[Fintech Startup] Authority Engine</h3>
<p className="text-sm text-gray-600 mt-1">AI-First SEO strategy that established topical authority and captured top search rankings.</p>
</div>
</article>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto mt-10 mb-8 px-4 sm:px-6">
<div className="relative overflow-hidden rounded-[32px] bg-white border border-white/20 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_8px_30px_rgba(0,0,0,0.08)]">
<div className="relative p-6 sm:p-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
<div className="lg:col-span-5">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Your Growth Partner in Finance.</h2>
<p className="mt-3 text-sm sm:text-base text-gray-700">
                We are a boutique creative agency with a core focus on the financial sector. Our team is a unique hybrid of marketing strategists, content creators, and expert developers. We help credit unions and finance brands connect with their members and drive measurable growth through intentional strategy and high-performance digital experiences.
              </p>
<a className="mt-5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium tracking-tight text-white bg-gray-900 hover:bg-gray-800 border border-gray-200/10" href="#team">
<svg className="w-4 h-4 stroke-1.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M19 8a4 4 0 0 1 0 8"></path></svg>
<span>Meet The Team</span>
</a>
</div>
<div className="lg:col-span-7">
<div className="relative overflow-hidden rounded-2xl border border-gray-200/60">
<img alt="Team collaborating" className="w-full h-[280px] sm:h-[380px] object-cover" src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-2">
<div className="rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200/80 p-3">
<div className="text-lg font-semibold tracking-tight">120+</div>
<p className="text-[11px] text-gray-600">Projects</p>
</div>
<div className="rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200/80 p-3">
<div className="text-lg font-semibold tracking-tight">5+</div>
<p className="text-[11px] text-gray-600">Years</p>
</div>
<div className="rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200/80 p-3">
<div className="text-lg font-semibold tracking-tight">98%
<p className="text-[11px] text-gray-600">Retention</p>
</div>
</div>
</div>
<p className="mt-3 text-xs text-gray-500">San Francisco, CA • Remote-first • Finance vertical experts</p>
</div>
</div>
</div>
</div>
</div></section>

<section className="max-w-7xl mx-auto mt-10 mb-8 px-4 sm:px-6" id="services">
<div className="relative overflow-hidden rounded-[32px] bg-white border border-white/20 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_8px_30px_rgba(0,0,0,0.08)]">
<div className="relative p-6 sm:p-8">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Solutions Engineered for Growth.</h2>

<div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-6 border-t border-gray-200/70 pt-6">
<div className="md:col-span-3">
<p className="text-xs uppercase tracking-wide text-gray-500">Service 1</p>
<h3 className="mt-1 text-lg font-semibold tracking-tight">Strategy that Drives Results</h3>
</div>
<div className="md:col-span-9">
<ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
<li className="flex items-start gap-2 text-sm text-gray-800">
<svg className="w-4 h-4 text-emerald-600 stroke-1.5 mt-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                  Brand Strategy &amp; Positioning
                </li>
<li className="flex items-start gap-2 text-sm text-gray-800">
<svg className="w-4 h-4 text-emerald-600 stroke-1.5 mt-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                  Member Acquisition Campaigns
                </li>
<li className="flex items-start gap-2 text-sm text-gray-800">
<svg className="w-4 h-4 text-emerald-600 stroke-1.5 mt-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                  Content &amp; AI-First SEO Strategy
                </li>
</ul>
</div>
</div>

<div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-6 border-t border-gray-200/70 pt-6">
<div className="md:col-span-3">
<p className="text-xs uppercase tracking-wide text-gray-500">Service 2</p>
<h3 className="mt-1 text-lg font-semibold tracking-tight">Digital Platforms that Convert</h3>
</div>
<div className="md:col-span-9">
<ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
<li className="flex items-start gap-2 text-sm text-gray-800">
<svg className="w-4 h-4 text-emerald-600 stroke-1.5 mt-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                  AI-Ready Website Development
                </li>
<li className="flex items-start gap-2 text-sm text-gray-800">
<svg className="w-4 h-4 text-emerald-600 stroke-1.5 mt-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                  UI/UX for Financial Apps
                </li>
<li className="flex items-start gap-2 text-sm text-gray-800">
<svg className="w-4 h-4 text-emerald-600 stroke-1.5 mt-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                  Landing Page &amp; Funnel Optimization
                </li>
</ul>
</div>
</div>

<div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-6 border-t border-gray-200/70 pt-6">
<div className="md:col-span-3">
<p className="text-xs uppercase tracking-wide text-gray-500">Service 3</p>
<h3 className="mt-1 text-lg font-semibold tracking-tight">Creative that Captures Attention</h3>
</div>
<div className="md:col-span-9">
<ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
<li className="flex items-start gap-2 text-sm text-gray-800">
<svg className="w-4 h-4 text-emerald-600 stroke-1.5 mt-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                  High-Performance Ad Creative
                </li>
<li className="flex items-start gap-2 text-sm text-gray-800">
<svg className="w-4 h-4 text-emerald-600 stroke-1.5 mt-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                  Short-Form Video &amp; Social Media
                </li>
<li className="flex items-start gap-2 text-sm text-gray-800">
<svg className="w-4 h-4 text-emerald-600 stroke-1.5 mt-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                  Email &amp; Newsletter Campaigns
                </li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto mt-10 mb-8 px-4 sm:px-6" id="faq">
<div className="relative overflow-hidden rounded-[32px] bg-white border border-white/20 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_8px_30px_rgba(0,0,0,0.08)]">
<div className="relative p-6 sm:p-8">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
<div className="md:col-span-5">
<h2 className="relative z-10 break-words text-[44px] sm:text-[64px] leading-none font-semibold tracking-tight">Your Questions, Answered.</h2>
<p className="mt-3 text-sm sm:text-base text-gray-700">Transparent answers about process, compliance, and integration.</p>
<a className="mt-5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium tracking-tight text-gray-900 bg-gray-100 hover:bg-gray-200 border border-gray-200/70" href="#contact">
<span>Get in touch</span>
<svg className="w-4 h-4 stroke-1.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a8 8 0 1 1-3-6.3L22 3"></path><path d="M22 3v6h-6"></path></svg>
</a>
</div>
<div className="md:col-span-7 relative z-0">
<div className="space-y-3">

<div className="rounded-2xl bg-white border border-gray-200/70" data-accordion-item="" data-open="true">
<button aria-expanded="true" className="w-full flex items-center justify-between gap-4 p-5 text-left" data-accordion="faq" type="button">
<span className="text-base sm:text-lg font-semibold tracking-tight">How do you measure the ROI of your projects?</span>
<span className="shrink-0 flex items-center">
<svg className="w-5 h-5 stroke-1.5 hidden" data-icon="plus" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<svg className="w-5 h-5 stroke-1.5" data-icon="minus" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</span>
</button>
<div className="px-5 pb-5 text-sm text-gray-700" data-qa="a">
                    We start every project by defining key performance indicators (KPIs) with you—whether it's new member sign-ups, loan applications, or cost-per-acquisition. We integrate analytics into everything we build to track progress against these goals and provide clear, concise performance reports.
                  </div>
</div>

<div className="rounded-2xl bg-white border border-gray-200/70" data-accordion-item="">
<button aria-expanded="false" className="w-full flex items-center justify-between gap-4 p-5 text-left" data-accordion="faq" type="button">
<span className="text-base sm:text-lg font-semibold tracking-tight">Do you have experience with financial industry compliance?</span>
<span className="shrink-0 flex items-center">
<svg className="w-5 h-5 stroke-1.5" data-icon="plus" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<svg className="w-5 h-5 stroke-1.5 hidden" data-icon="minus" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</span>
</button>
<div className="px-5 pb-5 text-sm text-gray-700 hidden" data-qa="a">
                    Yes. While we are not a legal firm, we are experienced in working within the marketing compliance guidelines common in the financial sector and partner with your compliance team to ensure all creative meets the necessary standards.
                  </div>
</div>

<div className="rounded-2xl bg-white border border-gray-200/70" data-accordion-item="">
<button aria-expanded="false" className="w-full flex items-center justify-between gap-4 p-5 text-left" data-accordion="faq" type="button">
<span className="text-base sm:text-lg font-semibold tracking-tight">What makes your "AI-First SEO" different?</span>
<span className="shrink-0 flex items-center">
<svg className="w-5 h-5 stroke-1.5" data-icon="plus" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<svg className="w-5 h-5 stroke-1.5 hidden" data-icon="minus" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</span>
</button>
<div className="px-5 pb-5 text-sm text-gray-700 hidden" data-qa="a">
                    Traditional SEO focuses on keywords. Our AI-First approach structures your website's data so that AI search engines (like Google's new AI Overviews) can understand your expertise and recommend you directly. It's about future-proofing your organic growth.
                  </div>
</div>

<div className="rounded-2xl bg-white border border-gray-200/70" data-accordion-item="">
<button aria-expanded="false" className="w-full flex items-center justify-between gap-4 p-5 text-left" data-accordion="faq" type="button">
<span className="text-base sm:text-lg font-semibold tracking-tight">Can you integrate with our existing core banking software or CRM?</span>
<span className="shrink-0 flex items-center">
<svg className="w-5 h-5 stroke-1.5" data-icon="plus" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<svg className="w-5 h-5 stroke-1.5 hidden" data-icon="minus" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</span>
</button>
<div className="px-5 pb-5 text-sm text-gray-700 hidden" data-qa="a">
                    We have extensive experience integrating with third-party APIs and platforms. We can scope out integrations with most modern CRMs and financial software to ensure a seamless data flow for your marketing operations.
                  </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto mt-10 mb-8 px-4 sm:px-6" id="pricing">
<div className="relative overflow-hidden rounded-[32px] bg-neutral-950 text-white border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.18)]">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_20%_-20%,rgba(255,255,255,0.08),transparent_60%)]"></div>
<div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_80%_120%,rgba(255,255,255,0.06),transparent_60%)]"></div>
<div className="absolute inset-0 bg-[radial-gradient(#ffffff0d_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.15]"></div>
</div>
<div className="relative p-6 sm:p-8">
<div className="text-center">
<h2 className="text-[36px] sm:text-[52px] leading-none font-semibold tracking-tight">Transparent Pricing for Clear Results.</h2>
</div>
<div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-stretch">

<div className="md:col-span-5">
<div className="h-full rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 flex flex-col">
<p className="text-sm text-white/80">Foundational Acquisition Website</p>
<div className="mt-3 flex items-end gap-2">
<div className="text-5xl sm:text-6xl font-semibold tracking-tight tabular-nums" data-amount="">$3,000</div>
<div className="pb-2 text-white/70 text-base" data-period="">/project</div>
</div>
<div className="mt-6 text-xs text-white/70 flex items-center justify-between">
<span>Timeline</span>
<span>4–6 weeks</span>
</div>
</div>
</div>

<div className="md:col-span-4">
<div className="h-full rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
<ul className="space-y-3">
<li className="flex items-start gap-2">
<svg className="w-5 h-5 text-white/80 stroke-1.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<span className="text-sm">Complete UI/UX &amp; Strategic Design</span>
</li>
<li className="flex items-start gap-2">
<svg className="w-5 h-5 text-white/80 stroke-1.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="3"></rect><path d="M8 21h8"></path><path d="M12 17v4"></path></svg>
<span className="text-sm">AI-Ready Website Built on Next.js</span>
</li>
<li className="flex items-start gap-2">
<svg className="w-5 h-5 text-white/80 stroke-1.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="18" x="3" y="4"></rect><path d="M7 8h10"></path><path d="M7 12h6"></path></svg>
<span className="text-sm">Full CMS for Team Management</span>
</li>
</ul>
<a className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium tracking-tight text-gray-900 bg-white hover:bg-white/90 transition-colors border border-white/10" href="#contact">
<span>Start a Conversation</span>
<svg className="w-4 h-4 stroke-1.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>

<div className="md:col-span-3">
<div className="h-full rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 flex flex-col justify-between">
<div>
<p className="text-sm font-medium tracking-tight">Need ongoing growth?</p>
<p className="mt-1 text-sm text-white/70">Add our monthly Growth Retainer for ongoing SEO, content marketing, and performance analytics.</p>
</div>
<div className="mt-6 flex items-center justify-between">
<div className="text-sm">
<span className="text-white/90">+ $2,500</span>
<span className="text-white/60">/month</span>
</div>
<button aria-checked="false" className="inline-flex h-6 w-11 ring-1 ring-white/10 transition-colors duration-200 bg-white/10 rounded-full items-center" data-upsell-switch="" role="switch" type="button">
<span className="h-4 w-4 rounded-full bg-white transition-transform duration-200 translate-x-0" data-upsell-knob=""></span>
<span className="sr-only">Toggle Growth Retainer add-on</span>
</button>
</div>
</div>
</div>
</div>
<p className="mt-4 text-[11px] text-white/60 text-center">Every engagement is scoped to your goals. No long-term lock-in unless specified.</p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto mt-12 mb-16 px-4 sm:px-6" id="contact">
<div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-neutral-950 text-white p-6 sm:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.18)]">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_15%_-20%,rgba(255,255,255,0.06),transparent_60%)]"></div>
<div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_85%_120%,rgba(255,255,255,0.05),transparent_60%)]"></div>
<div className="absolute inset-0 bg-[radial-gradient(#ffffff0d_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.15]"></div>
</div>
<div className="relative">
<h2 className="text-[40px] sm:text-[56px] leading-[1.05] font-semibold tracking-tight">Ready to build your growth engine?</h2>
<p className="mt-2 text-white/80">Let's build something unforgettable—together.</p>
<div className="mt-6 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium tracking-tight text-gray-900 bg-white hover:bg-white/90 border border-white/10" href="mailto:hello@vipcreative.studio">
<svg className="w-4 h-4 stroke-1.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.99 5.73a2 2 0 0 1-2.02 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<span>hello@vipcreative.studio</span>
</a>
<a className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium tracking-tight text-white bg-emerald-600 hover:bg-emerald-700 border border-emerald-700/20" href="#book">
<svg className="w-4 h-4 stroke-1.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span>Schedule a Discovery Call</span>
</a>
<a className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium tracking-tight text-white bg-gray-900 hover:bg-gray-800 border border-white/10" href="#contact">
<svg className="w-4 h-4 stroke-1.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
<span>Start Project</span>
</a>
</div>
<div className="mt-8 border-t border-white/10 pt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
<div>
<p className="text-sm text-white/70">Explore</p>
<div className="mt-3 grid grid-cols-2 gap-2 text-sm">
<a className="font-medium tracking-tight hover:underline" href="#impact">Impact</a>
<a className="font-medium tracking-tight hover:underline" href="#pricing">Pricing</a>
<a className="font-medium tracking-tight hover:underline" href="#faq">FAQ</a>
<a className="font-medium tracking-tight hover:underline" href="#services">Services</a>
</div>
</div>
<div>
<p className="text-sm text-white/70">Details</p>
<div className="mt-3 grid grid-cols-1 gap-2 text-sm">
<a className="font-medium tracking-tight hover:underline" href="#">Privacy Policy</a>
<a className="font-medium tracking-tight hover:underline" href="#">Terms</a>
</div>
</div>
</div>
<p className="mt-6 text-xs text-white/70">© <span id="year">2025</span> VIP Creative — Finance Growth Studio</p>
</div>
</div>
</section>



    </>
  );
}
