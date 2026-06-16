import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Initialize Lucide icons with stroke width
    document.addEventListener('DOMContentLoaded', () => {
      if (window.lucide) {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      }
    });

    // Smooth scrolling for [data-scroll] and anchor links
    const smoothScroll = (target) => {
      const el = document.querySelector(target);
      if (!el) return;
      const offset = 72; // navbar height approx
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    };
    document.querySelectorAll('[data-scroll]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const t = btn.getAttribute('data-scroll');
        if (t && t.startsWith('#')) {
          e.preventDefault();
          smoothScroll(t);
        }
      });
    });
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', (e) => {
        const href = a.getAttribute('href');
        if (href && href.length > 1) {
          e.preventDefault();
          smoothScroll(href);
          // close mobile menu
          const mm = document.getElementById('mobileMenu');
          if (mm && !mm.classList.contains('hidden')) toggleMobileMenu(false);
        }
      });
    });

    // Mobile menu
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const toggleMobileMenu = (force) => {
      const open = typeof force === 'boolean' ? force : mobileMenu.classList.contains('hidden');
      if (open) {
        mobileMenu.classList.remove('hidden');
        mobileBtn.setAttribute('aria-expanded', 'true');
        mobileBtn.innerHTML = '<i data-lucide="x" class="h-5 w-5" style="stroke-width: 1.5;"></i>';
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      } else {
        mobileMenu.classList.add('hidden');
        mobileBtn.setAttribute('aria-expanded', 'false');
        mobileBtn.innerHTML = '<i data-lucide="menu" class="h-5 w-5" style="stroke-width: 1.5;"></i>';
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      }
    };
    if (mobileBtn) mobileBtn.addEventListener('click', () => toggleMobileMenu());

    // Toast helper
    const toast = (msg = 'Done') => {
      const t = document.getElementById('toast');
      const m = document.getElementById('toastMsg');
      if (!t || !m) return;
      m.textContent = msg;
      t.classList.remove('opacity-0');
      t.classList.add('opacity-100');
      setTimeout(() => {
        t.classList.add('opacity-0');
        t.classList.remove('opacity-100');
      }, 1800);
    };

    // Search form logic
    const bmeXForm = document.getElementById('bmeXSearchForm');
    const bmeXInput = document.getElementById('bmeXInput');
    const bmeXError = document.getElementById('bmeXError');
    const idPattern = /^\d{8}XX1$/;

    const validateBmeX = (value) => idPattern.test((value || '').trim());

    bmeXForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const val = bmeXInput.value.trim();
      if (!validateBmeX(val)) {
        bmeXError.classList.remove('hidden');
        bmeXInput.classList.remove('border-gray-300');
        bmeXInput.classList.add('border-red-500', 'focus:border-red-500', 'focus:ring-red-100');
        return;
      }
      bmeXError.classList.add('hidden');
      bmeXInput.classList.remove('border-red-500', 'focus:border-red-500', 'focus:ring-red-100');
      bmeXInput.classList.add('border-gray-300');
      const route = `/brand/${val}`;
      window.location.href = route;
    });

    bmeXInput.addEventListener('input', () => {
      if (validateBmeX(bmeXInput.value)) {
        bmeXError.classList.add('hidden');
        bmeXInput.classList.remove('border-red-500', 'focus:border-red-500', 'focus:ring-red-100');
        bmeXInput.classList.add('border-gray-300');
      }
    });

    // Copy example ID
    document.getElementById('copyExample').addEventListener('click', async () => {
      const id = document.getElementById('exampleId').textContent.trim();
      try {
        await navigator.clipboard.writeText(id);
        toast('BMeX ID copied');
      } catch (e) {
        toast('Copy failed');
      }
    });

    // About tabs
    const tabButtons = document.querySelectorAll('.about-tab');
    const panels = {
      who: document.getElementById('tab-who'),
      what: document.getElementById('tab-what'),
      why: document.getElementById('tab-why'),
    };
    const setTab = (key) => {
      Object.keys(panels).forEach(k => {
        if (k === key) {
          panels[k].classList.remove('hidden');
        } else {
          panels[k].classList.add('hidden');
        }
      });
      tabButtons.forEach(btn => {
        const active = btn.getAttribute('data-tab') === key;
        if (active) {
          btn.classList.add('bg-gray-900', 'text-white', 'border-gray-900');
          btn.classList.remove('bg-white', 'text-gray-900', 'border-gray-200', 'hover:bg-gray-50');
        } else {
          btn.classList.remove('bg-gray-900', 'text-white', 'border-gray-900');
          btn.classList.add('bg-white', 'text-gray-900', 'border-gray-200');
        }
      });
      if (window.lucide) lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
    };
    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => setTab(btn.getAttribute('data-tab')));
    });
    setTab('who');

    // Support form submission (simulated)
    const supportForm = document.getElementById('supportForm');
    const supportSuccess = document.getElementById('supportSuccess');
    const bmeXIdInput = document.getElementById('bmeXId');
    const bmeXIdError = document.getElementById('bmeXIdError');

    bmeXIdInput.addEventListener('input', () => {
      const val = bmeXIdInput.value.trim();
      if (val === '' || validateBmeX(val)) {
        bmeXIdError.classList.add('hidden');
        bmeXIdInput.classList.remove('border-red-500', 'focus:border-red-500', 'focus:ring-red-100');
        bmeXIdInput.classList.add('border-gray-300');
      }
    });

    supportForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const formData = new FormData(supportForm);
      const payload = Object.fromEntries(formData.entries());

      // Optional BMeX ID validation
      if (payload.bmeXId && !validateBmeX(payload.bmeXId)) {
        bmeXIdError.classList.remove('hidden');
        bmeXIdInput.classList.add('border-red-500', 'focus:border-red-500', 'focus:ring-red-100');
        return;
      }
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="relative isolate">
<div className="pointer-events-none absolute inset-x-0 -top-24 -z-10 h-[240px] bg-gradient-to-b from-gray-50 to-white"></div>
</div>

<header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-gray-200">
<nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">

<a className="inline-flex items-center gap-2.5 group" href="#home">
<div className="h-8 w-8 rounded-md border border-gray-200 bg-white shadow-sm flex items-center justify-center">
<span className="text-[0.8rem] tracking-tight font-semibold text-gray-900">BMx</span>
</div>
<span className="text-[15px] sm:text-[16px] font-medium tracking-tight text-gray-900">Brand Magics</span>
</a>

<div className="hidden md:flex items-center gap-6">
<a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#home">Home</a>
<a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#products">Products</a>
<a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#modules">Modules</a>
<a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#services">Services</a>
<a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#about">About</a>
<a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#support">Support</a>
</div>

<div className="hidden md:flex items-center gap-3">
<button className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3.5 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 hover:border-gray-300 hover:shadow-sm transition" data-scroll="#search">
<i className="h-4 w-4" data-lucide="search" style={{strokeWidth: '1.5'}}></i>
<span>Search BMeX ID</span>
</button>
</div>

<button aria-expanded="false" aria-label="Open menu" className="md:hidden inline-flex items-center justify-center rounded-md border border-gray-200 bg-white p-2 text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition" id="mobileMenuBtn">
<i className="h-5 w-5" data-lucide="menu" style={{strokeWidth: '1.5'}}></i>
</button>
</div>

<div className="md:hidden hidden border-t border-gray-200" id="mobileMenu">
<div className="py-3 space-y-1">
<a className="block px-2.5 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md" href="#home">Home</a>
<a className="block px-2.5 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md" href="#products">Products</a>
<a className="block px-2.5 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md" href="#modules">Modules</a>
<a className="block px-2.5 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md" href="#services">Services</a>
<a className="block px-2.5 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md" href="#about">About</a>
<a className="block px-2.5 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md" href="#support">Support</a>
<button className="mt-1 w-full inline-flex items-center justify-center gap-2 rounded-md border border-gray-200 bg-white px-3.5 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 hover:border-gray-300 transition" data-scroll="#search">
<i className="h-4 w-4" data-lucide="search" style={{strokeWidth: '1.5'}}></i>
            Search BMeX ID
          </button>
</div>
</div>
</nav>
</header>

<section className="relative overflow-hidden" id="home">
<div className="absolute inset-0 -z-10">
<div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[480px] w-[1200px] rounded-full bg-gradient-to-b from-gray-50 to-white blur-3xl opacity-90"></div>
<div className="pointer-events-none absolute top-20 right-[-120px] h-64 w-64 rounded-full bg-gray-100 blur-2xl"></div>
<div className="pointer-events-none absolute bottom-10 left-[-120px] h-64 w-64 rounded-full bg-gray-100 blur-2xl"></div>
</div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-14 sm:pt-20 sm:pb-16">
<div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
<div className="lg:col-span-7">
<p className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs text-gray-600 shadow-sm">
<i className="h-3.5 w-3.5 text-gray-700" data-lucide="shield-check" style={{strokeWidth: '1.5'}}></i>
            Secure, brand-driven finance infrastructure
          </p>
<h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900">
            Brand Magics Exchange (BMeX)
          </h1>
<p className="mt-4 text-base sm:text-lg text-gray-600">
            The Future of Brand-Based Finance and Growth.
          </p>
<div className="mt-6 flex flex-col sm:flex-row gap-3">
<button className="inline-flex items-center justify-center gap-2 rounded-md bg-gray-900 text-white px-4 py-2.5 text-sm font-medium hover:bg-black transition shadow-sm" data-scroll="#products">
<i className="h-4 w-4" data-lucide="box" style={{strokeWidth: '1.5'}}></i>
              Explore Products
            </button>
<button className="inline-flex items-center justify-center gap-2 rounded-md border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-50 hover:border-gray-300 transition" data-scroll="#search">
<i className="h-4 w-4" data-lucide="search" style={{strokeWidth: '1.5'}}></i>
              Search BMeX ID
            </button>
</div>
<div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
<div className="rounded-lg border border-gray-200 bg-white p-3">
<p className="text-xs text-gray-500">IDs Issued</p>
<p className="mt-1 text-xl font-semibold tracking-tight text-gray-900">128k+</p>
</div>
<div className="rounded-lg border border-gray-200 bg-white p-3">
<p className="text-xs text-gray-500">Active Brands</p>
<p className="mt-1 text-xl font-semibold tracking-tight text-gray-900">42k+</p>
</div>
<div className="rounded-lg border border-gray-200 bg-white p-3">
<p className="text-xs text-gray-500">Modules</p>
<p className="mt-1 text-xl font-semibold tracking-tight text-gray-900">25+</p>
</div>
<div className="rounded-lg border border-gray-200 bg-white p-3">
<p className="text-xs text-gray-500">Countries</p>
<p className="mt-1 text-xl font-semibold tracking-tight text-gray-900">65+</p>
</div>
</div>
</div>
<div className="lg:col-span-5">
<div className="relative rounded-xl border border-gray-200 bg-white p-4 sm:p-5 shadow-sm">
<img alt="Abstract technology background" className="h-64 w-full object-cover rounded-md" src="https://images.unsplash.com/photo-1545987796-200677ee1011?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-md bg-white/90 border border-gray-200 backdrop-blur px-3 py-1.5 text-xs text-gray-700 shadow-sm">
<i className="h-3.5 w-3.5" data-lucide="sparkles" style={{strokeWidth: '1.5'}}></i>
              BMeX — Trade Brand Equity Units
            </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-14 sm:py-16 border-t border-gray-200 bg-white" id="search">
<div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
<div className="max-w-3xl">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">Search BMeX ID</h2>
<p className="mt-2 text-gray-600 text-sm sm:text-base">
          Enter an 8-digit Brand ID followed by ‘XX1’. Use this secure global ID to identify and transact with brands without exposing account numbers.
        </p>
</div>
<div className="mt-6 rounded-xl border border-gray-200 bg-white p-4 sm:p-6 shadow-sm">
<form className="flex flex-col md:flex-row items-stretch md:items-center gap-3" id="bmeXSearchForm">
<div className="relative flex-1">
<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
<i className="h-4.5 w-4.5" data-lucide="scan-search" style={{strokeWidth: '1.5'}}></i>
</div>
<input className="w-full rounded-md border border-gray-300 bg-white pl-9 pr-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-100 focus:border-gray-400 transition" id="bmeXInput" name="bmeXId" pattern="^\d{8}XX1$" placeholder="e.g. 12345678XX1" required=""/>
</div>
<button className="inline-flex items-center justify-center gap-2 rounded-md bg-gray-900 text-white px-4 py-2.5 text-sm font-medium hover:bg-black transition" type="submit">
<i className="h-4 w-4" data-lucide="search" style={{strokeWidth: '1.5'}}></i>
            Search
          </button>
</form>
<p className="mt-2 text-sm text-red-600 hidden" id="bmeXError">Invalid format. Expected 8 digits + 'XX1'.</p>
<div className="mt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
<div className="text-sm text-gray-700">
<span className="font-medium text-gray-900">Example:</span> Acme Apparel — BMeX ID: <span className="font-medium text-gray-900" id="exampleId">12345678XX1</span>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 hover:border-gray-300 transition" id="copyExample">
<i className="h-4 w-4" data-lucide="copy" style={{strokeWidth: '1.5'}}></i>
              Copy ID
            </button>
<a className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 hover:border-gray-300 transition" href="/product/paymagics">
<i className="h-4 w-4" data-lucide="external-link" style={{strokeWidth: '1.5'}}></i>
              Open in Paymagics
            </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-14 sm:py-16 bg-gray-50 border-t border-gray-200" id="products">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-3xl">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">Our Products</h2>
<p className="mt-2 text-gray-600 text-sm sm:text-base">
          Empowering brands through technology — list, trade, manage, and scale your brand with our suite of tools.
        </p>
</div>
<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

<div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow transition">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-md border border-gray-200 bg-white flex items-center justify-center">
<i className="h-4.5 w-4.5 text-gray-800" data-lucide="building-2" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900">BMeX – Brand Magics Exchange</h3>
<p className="mt-1 text-sm text-gray-600">List, Trade, or Pledge Brand Equity Units.</p>
</div>
</div>
<div className="mt-4">
<a className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-900 hover:underline" href="/product/bmex">
              Explore
              <i className="h-4 w-4" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
</div>
<div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow transition">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-md border border-gray-200 bg-white flex items-center justify-center">
<i className="h-4.5 w-4.5 text-gray-800" data-lucide="shield" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900">BossMagics</h3>
<p className="mt-1 text-sm text-gray-600">Automated Due Diligence and Compliance Engine.</p>
</div>
</div>
<div className="mt-4">
<a className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-900 hover:underline" href="/product/bossmagics">
              Open
              <i className="h-4 w-4" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
</div>
<div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow transition">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-md border border-gray-200 bg-white flex items-center justify-center">
<i className="h-4.5 w-4.5 text-gray-800" data-lucide="target" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900">LeadMagics</h3>
<p className="mt-1 text-sm text-gray-600">Marketing Automation and Lead Nurturing.</p>
</div>
</div>
<div className="mt-4">
<a className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-900 hover:underline" href="/product/leadmagics">
              Open
              <i className="h-4 w-4" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
</div>
<div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow transition">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-md border border-gray-200 bg-white flex items-center justify-center">
<i className="h-4.5 w-4.5 text-gray-800" data-lucide="handshake" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900">SalesMagics</h3>
<p className="mt-1 text-sm text-gray-600">Sales CRM and Deal Management Platform.</p>
</div>
</div>
<div className="mt-4">
<a className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-900 hover:underline" href="/product/salesmagics">
              Open
              <i className="h-4 w-4" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
</div>
<div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow transition">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-md border border-gray-200 bg-white flex items-center justify-center">
<i className="h-4.5 w-4.5 text-gray-800" data-lucide="workflow" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900">TaskMagics</h3>
<p className="mt-1 text-sm text-gray-600">Operations and Workflow Automation.</p>
</div>
</div>
<div className="mt-4">
<a className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-900 hover:underline" href="/product/taskmagics">
              Open
              <i className="h-4 w-4" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
</div>
<div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow transition">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-md border border-gray-200 bg-white flex items-center justify-center">
<i className="h-4.5 w-4.5 text-gray-800" data-lucide="users-2" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900">HireMagics</h3>
<p className="mt-1 text-sm text-gray-600">Human Resource and Talent Management.</p>
</div>
</div>
<div className="mt-4">
<a className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-900 hover:underline" href="/product/hiremagics">
              Open
              <i className="h-4 w-4" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
</div>
<div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow transition">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-md border border-gray-200 bg-white flex items-center justify-center">
<i className="h-4.5 w-4.5 text-gray-800" data-lucide="banknote" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900">MoneyMagics</h3>
<p className="mt-1 text-sm text-gray-600">Finance, Accounting, and Payment Control.</p>
</div>
</div>
<div className="mt-4">
<a className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-900 hover:underline" href="/product/moneymagics">
              Open
              <i className="h-4 w-4" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
</div>
<div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow transition">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-md border border-gray-200 bg-white flex items-center justify-center">
<i className="h-4.5 w-4.5 text-gray-800" data-lucide="scale" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900">LexMagics</h3>
<p className="mt-1 text-sm text-gray-600">Legal Management, Contracts, and Compliance.</p>
</div>
</div>
<div className="mt-4">
<a className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-900 hover:underline" href="/product/lexmagics">
              Open
              <i className="h-4 w-4" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
</div>
<div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow transition">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-md border border-gray-200 bg-white flex items-center justify-center">
<i className="h-4.5 w-4.5 text-gray-800" data-lucide="rocket" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900">ScaleMagics</h3>
<p className="mt-1 text-sm text-gray-600">Research &amp; Development for Brand Scaling.</p>
</div>
</div>
<div className="mt-4">
<a className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-900 hover:underline" href="/product/scalemagics">
              Open
              <i className="h-4 w-4" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
</div>
<div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow transition">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-md border border-gray-200 bg-white flex items-center justify-center">
<i className="h-4.5 w-4.5 text-gray-800" data-lucide="goal" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900">GoalMagics</h3>
<p className="mt-1 text-sm text-gray-600">Goal Management and OKR System.</p>
</div>
</div>
<div className="mt-4">
<a className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-900 hover:underline" href="/product/goalmagics">
              Open
              <i className="h-4 w-4" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-14 sm:py-16 bg-white border-t border-gray-200" id="modules">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-3xl">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">Free Modules (Always On Freemium)</h2>
<p className="mt-2 text-gray-600 text-sm sm:text-base">
          These core tools are always free, with no subscription required.
        </p>
</div>
<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
<div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow transition">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-md border border-gray-200 bg-white flex items-center justify-center">
<i className="h-4.5 w-4.5 text-gray-800" data-lucide="contact" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<h3 className="text-base font-semibold tracking-tight text-gray-900">Paymagics</h3>
<p className="mt-1 text-sm text-gray-600">BMeX ID–based payments without revealing account numbers.</p>
</div>
</div>
<div className="mt-4">
<a className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-900 hover:underline" href="/product/paymagics">
              Explore <i className="h-4 w-4" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
</div>
<div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow transition">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-md border border-gray-200 bg-white flex items-center justify-center">
<i className="h-4.5 w-4.5 text-gray-800" data-lucide="trend-up" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<h3 className="text-base font-semibold tracking-tight text-gray-900">Growmagics</h3>
<p className="mt-1 text-sm text-gray-600">Freemium marketing and growth analytics tools.</p>
</div>
</div>
<div className="mt-4">
<a className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-900 hover:underline" href="/product/growmagics">
              Explore <i className="h-4 w-4" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
</div>
<div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow transition">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-md border border-gray-200 bg-white flex items-center justify-center">
<i className="h-4.5 w-4.5 text-gray-800" data-lucide="signature" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<h3 className="text-base font-semibold tracking-tight text-gray-900">Signmagics</h3>
<p className="mt-1 text-sm text-gray-600">Digital signatures and document workflows.</p>
</div>
</div>
<div className="mt-4">
<a className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-900 hover:underline" href="/product/signmagics">
              Explore <i className="h-4 w-4" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
</div>
<div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow transition">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-md border border-gray-200 bg-white flex items-center justify-center">
<i className="h-4.5 w-4.5 text-gray-800" data-lucide="notebook-pen" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<h3 className="text-base font-semibold tracking-tight text-gray-900">Basic CRM</h3>
<p className="mt-1 text-sm text-gray-600">Essential contact and lead management — free forever.</p>
</div>
</div>
<div className="mt-4">
<a className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-900 hover:underline" href="/product/basiccrm">
              Explore <i className="h-4 w-4" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
</div>
</div>
<p className="mt-6 text-sm text-gray-600">
        All other modules are Pay-As-You-Go — no subscription plans required.
      </p>
</div>
</section>

<section className="py-14 sm:py-16 bg-gray-50 border-t border-gray-200" id="services">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-3xl">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">Our Services</h2>
<p className="mt-2 text-gray-600 text-sm sm:text-base">
          Helping you grow strategically and operate efficiently.
        </p>
</div>
<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow transition">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-md border border-gray-200 bg-white flex items-center justify-center">
<i className="h-4.5 w-4.5 text-gray-800" data-lucide="wand-2" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900">Functional Consulting</h3>
<p className="mt-1 text-sm text-gray-600">Process optimization and implementation assistance.</p>
</div>
</div>
</div>
<div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow transition">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-md border border-gray-200 bg-white flex items-center justify-center">
<i className="h-4.5 w-4.5 text-gray-800" data-lucide="compass" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900">Goal Orientation</h3>
<p className="mt-1 text-sm text-gray-600">Align your brand goals with measurable outcomes.</p>
</div>
</div>
</div>
<div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow transition">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-md border border-gray-200 bg-white flex items-center justify-center">
<i className="h-4.5 w-4.5 text-gray-800" data-lucide="badge-dollar-sign" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900">Sales Acceleration</h3>
<p className="mt-1 text-sm text-gray-600">Boost sales pipeline and deal conversions.</p>
</div>
</div>
</div>
<div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow transition">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-md border border-gray-200 bg-white flex items-center justify-center">
<i className="h-4.5 w-4.5 text-gray-800" data-lucide="merge" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900">M&amp;A Advisory</h3>
<p className="mt-1 text-sm text-gray-600">Valuation, due diligence, and transaction support.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-14 sm:py-16 bg-white border-t border-gray-200" id="about">
<div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">About Us</h2>
<div className="mt-6 rounded-xl border border-gray-200 bg-white p-2 shadow-sm">
<div className="flex flex-wrap gap-2 p-2">
<button className="about-tab inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 hover:border-gray-300 transition aria-selected:true" data-tab="who">
<i className="h-4 w-4" data-lucide="id-card" style={{strokeWidth: '1.5'}}></i>
            Who We Are
          </button>
<button className="about-tab inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 hover:border-gray-300 transition" data-tab="what">
<i className="h-4 w-4" data-lucide="layers" style={{strokeWidth: '1.5'}}></i>
            What We Do
          </button>
<button className="about-tab inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 hover:border-gray-300 transition" data-tab="why">
<i className="h-4 w-4" data-lucide="lightbulb" style={{strokeWidth: '1.5'}}></i>
            Why We Do It
          </button>
</div>
<div className="mt-2 border-t border-gray-200 p-4">
<div className="about-panel" id="tab-who">
<p className="text-sm sm:text-base text-gray-700">
              We are Brand Magics — a fintech and brand-exchange ecosystem designed to make brands financially empowered and tradable.
            </p>
</div>
<div className="about-panel hidden" id="tab-what">
<p className="text-sm sm:text-base text-gray-700">
              We issue BMeX IDs and offer a comprehensive suite of tools to list, trade, operate, and grow brands.
            </p>
</div>
<div className="about-panel hidden" id="tab-why">
<p className="text-sm sm:text-base text-gray-700">
              To create a secure, transparent, and brand-driven financial infrastructure — where innovation meets trust.
            </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-14 sm:py-16 bg-gray-50 border-t border-gray-200" id="team">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between gap-4">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">Our Team</h2>
</div>
<a className="inline-flex items-center gap-1.5 rounded-md border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 hover:border-gray-300 transition" href="/team">
          View Full Team
          <i className="h-4 w-4" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
<div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-5">
<div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow transition">
<div className="flex items-center gap-4">
<img alt="Asha Kumar" className="h-14 w-14 rounded-full object-cover border border-gray-200" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div>
<h3 className="text-base font-semibold tracking-tight text-gray-900">Asha Kumar</h3>
<p className="text-sm text-gray-600">Chief Executive Officer</p>
</div>
</div>
</div>
<div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow transition">
<div className="flex items-center gap-4">
<img alt="Rahul Menon" className="h-14 w-14 rounded-full object-cover border border-gray-200" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div>
<h3 className="text-base font-semibold tracking-tight text-gray-900">Rahul Menon</h3>
<p className="text-sm text-gray-600">Head of Product</p>
</div>
</div>
</div>
<div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow transition">
<div className="flex items-center gap-4">
<img alt="Leila Farouk" className="h-14 w-14 rounded-full object-cover border border-gray-200" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div>
<h3 className="text-base font-semibold tracking-tight text-gray-900">Leila Farouk</h3>
<p className="text-sm text-gray-600">Head of Growth</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-14 sm:py-16 bg-white border-t border-gray-200" id="support">
<div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
<div className="max-w-3xl">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">Support &amp; Helpdesk</h2>
<p className="mt-2 text-gray-600 text-sm sm:text-base">Need assistance? Raise a ticket or access our knowledge base.</p>
</div>
<div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="lg:col-span-2 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
<form className="space-y-4" id="supportForm">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-gray-800" htmlFor="name">Full Name</label>
<input className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-100 focus:border-gray-400 transition" id="name" name="name" placeholder="Jane Doe" required=""/>
</div>
<div>
<label className="block text-sm font-medium text-gray-800" htmlFor="email">Email</label>
<input className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-100 focus:border-gray-400 transition" id="email" name="email" placeholder="you@company.com" required="" type="email"/>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-gray-800" htmlFor="bmeXId">BMeX ID (optional)</label>
<input className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-100 focus:border-gray-400 transition" id="bmeXId" name="bmeXId" pattern="^\d{8}XX1$" placeholder="12345678XX1"/>
<p className="mt-1 text-xs text-red-600 hidden" id="bmeXIdError">Invalid format. Expected 8 digits + 'XX1'.</p>
</div>
<div>
<label className="block text-sm font-medium text-gray-800" htmlFor="subject">Subject</label>
<input className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-100 focus:border-gray-400 transition" id="subject" name="subject" placeholder="How can we help?" required=""/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-800" htmlFor="description">Message</label>
<textarea className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-100 focus:border-gray-400 transition" id="description" name="description" placeholder="Describe your issue or request..." required="" rows="5"></textarea>
</div>
<div className="flex flex-col sm:flex-row gap-3">
<button className="inline-flex items-center justify-center gap-2 rounded-md bg-gray-900 text-white px-4 py-2.5 text-sm font-medium hover:bg-black transition" type="submit">
<i className="h-4 w-4" data-lucide="send" style={{strokeWidth: '1.5'}}></i>
                Submit Ticket
              </button>
<a className="inline-flex items-center justify-center gap-2 rounded-md border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-50 hover:border-gray-300 transition" href="/support/kb">
<i className="h-4 w-4" data-lucide="library" style={{strokeWidth: '1.5'}}></i>
                Open Knowledge Base
              </a>
</div>
<p className="text-sm text-green-700 hidden" id="supportSuccess">Ticket created successfully.</p>
</form>
</div>
<div className="lg:col-span-1 space-y-4">
<div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-md border border-gray-200 bg-white flex items-center justify-center">
<i className="h-4.5 w-4.5 text-gray-800" data-lucide="help-circle" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<h3 className="text-base font-semibold tracking-tight text-gray-900">Faster Resolution Tips</h3>
<ul className="mt-2 space-y-1 text-sm text-gray-600 list-disc pl-5">
<li>Include your BMeX ID if available.</li>
<li>Add screenshots and timestamps.</li>
<li>Share steps to reproduce the issue.</li>
</ul>
</div>
</div>
</div>
<div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-md border border-gray-200 bg-white flex items-center justify-center">
<i className="h-4.5 w-4.5 text-gray-800" data-lucide="clock" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<h3 className="text-base font-semibold tracking-tight text-gray-900">Availability</h3>
<p className="mt-1 text-sm text-gray-600">Mon–Fri, 9:00–18:00 (UTC)</p>
</div>
</div>
</div>
<div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-md border border-gray-200 bg-white flex items-center justify-center">
<i className="h-4.5 w-4.5 text-gray-800" data-lucide="shield-check" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<h3 className="text-base font-semibold tracking-tight text-gray-900">Security</h3>
<p className="mt-1 text-sm text-gray-600">We never ask for sensitive account numbers. Use BMeX IDs for secure verification.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-gray-50 border-t border-gray-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
<div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
<div className="col-span-2">
<div className="inline-flex items-center gap-2">
<div className="h-8 w-8 rounded-md border border-gray-200 bg-white shadow-sm flex items-center justify-center">
<span className="text-[0.8rem] tracking-tight font-semibold text-gray-900">BMx</span>
</div>
<span className="text-[16px] font-medium tracking-tight text-gray-900">Brand Magics</span>
</div>
<p className="mt-3 text-sm text-gray-600 max-w-sm">
            Brand Magics Exchange (BMeX) — building a secure, transparent, and brand-driven financial ecosystem.
          </p>
</div>
<div>
<h4 className="text-sm font-semibold tracking-tight text-gray-900">Explore</h4>
<ul className="mt-3 space-y-2">
<li><a className="text-sm text-gray-600 hover:text-gray-900" href="#products">Products</a></li>
<li><a className="text-sm text-gray-600 hover:text-gray-900" href="#modules">Modules</a></li>
<li><a className="text-sm text-gray-600 hover:text-gray-900" href="#services">Services</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold tracking-tight text-gray-900">Company</h4>
<ul className="mt-3 space-y-2">
<li><a className="text-sm text-gray-600 hover:text-gray-900" href="#about">About Us</a></li>
<li><a className="text-sm text-gray-600 hover:text-gray-900" href="#team">Team</a></li>
<li><a className="text-sm text-gray-600 hover:text-gray-900" href="#support">Support</a></li>
</ul>
</div>
<div className="col-span-2 sm:col-span-4 border-t border-gray-200 mt-8 pt-8">
<div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
<div>
<h4 className="text-sm font-semibold tracking-tight text-gray-900">Legal</h4>
<ul className="mt-3 space-y-2">
<li><a className="text-sm text-gray-600 hover:text-gray-900" href="#">Privacy Policy</a></li>
<li><a className="text-sm text-gray-600 hover:text-gray-900" href="#">Terms of Use</a></li>
</ul>
</div>
<div className="sm:col-span-2">
<div className="rounded-lg border border-gray-200 bg-white p-4 flex items-start gap-3">
<i className="h-4.5 w-4.5 text-gray-800 mt-0.5" data-lucide="mail" style={{strokeWidth: '1.5'}}></i>
<div>
<p className="text-sm text-gray-700">Stay in the loop</p>
<form className="mt-2 flex gap-2" id="newsletter">
<input className="flex-1 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-100 focus:border-gray-400 transition" placeholder="you@company.com" type="email"/>
<button className="inline-flex items-center justify-center gap-2 rounded-md bg-gray-900 text-white px-3.5 py-2 text-sm font-medium hover:bg-black transition">
                      Subscribe
                    </button>
</form>
</div>
</div>
</div>
</div>
<p className="mt-8 text-xs text-gray-500">© 2025 Brand Magics Exchange. All rights reserved.</p>
</div>
</div>
</div>
</footer>

<div className="pointer-events-none fixed bottom-5 inset-x-0 mx-auto w-full max-w-md px-4 opacity-0 transition" id="toast">
<div className="rounded-md border border-gray-200 bg-white shadow-sm px-3.5 py-2.5 text-sm text-gray-900 flex items-center gap-2">
<i className="h-4.5 w-4.5 text-emerald-600" data-lucide="check-circle-2" style={{strokeWidth: '1.5'}}></i>
<span id="toastMsg">Action completed.</span>
</div>
</div>

    </>
  );
}
