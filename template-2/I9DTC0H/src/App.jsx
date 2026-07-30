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

    // Icons
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
    const sections = ['#overview','#why','#standard','#consent','#domain','#build','#roadmap','#faq'];
    const navLinks = Array.from(document.querySelectorAll('[data-nav-link]'));
    const mobileLinks = Array.from(document.querySelectorAll('[data-mobile-link]'));
    function setActive(href) {
      [...navLinks, ...mobileLinks].forEach((link) => {
        const isActive = link.getAttribute('href') === href;
        link.classList.toggle('text-white', isActive);
      });
    }
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive('#' + entry.target.id);
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0.01 });
    sections.forEach((id) => { const el = document.querySelector(id); if (el) spy.observe(el); });

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
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMobileOpen(false); });
    document.querySelectorAll('[data-mobile-link]').forEach((a) => a.addEventListener('click', () => setMobileOpen(false)));

    // Charts
    function initCostChart() {
      const ctx = document.getElementById('costChart')?.getContext('2d');
      if (!ctx || typeof Chart === 'undefined') return;
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Closed', 'OPPI'],
          datasets: [
            {
              label: 'Per-profile access cost (USD)',
              data: [4, 0],
              backgroundColor: ['#60a5fa', '#34d399'],
              borderWidth: 0,
              borderRadius: 6
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false }, tooltip: { displayColors: false } },
          scales: {
            x: { grid: { display: false }, ticks: { color: '#a3a3a3', font: { size: 11 } } },
            y: { grid: { color: 'rgba(255,255,255,0.06)' }, ticks: { color: '#a3a3a3', font: { size: 11 } }, suggestedMax: 5 }
          }
        }
      });
    }
    initCostChart();

    // Endpoint demo (Standard section)
    const domainInput = document.getElementById('domain-input');
    const btnFetchJson = document.getElementById('btn-fetch-json');
    const btnFetchOppi = document.getElementById('btn-fetch-oppi');
    const btnCopy = document.getElementById('btn-copy');
    const codebox = document.getElementById('codebox');
    const statusPill = document.getElementById('status-pill');

    const SAMPLE_JSON = {
      "@context":"https://schema.oppi.cv/v1",
      "version":"1.0.0",
      "profile":{
        "basic_info":{"name":"Ada Lovelace","headline":"ML Platform Engineer","location":"Remote • EU"},
        "links":[{"type":"website","url":"https://adalovelace.cv"},{"type":"github","url":"https://github.com/ada"}],
        "experience":[{"company":"ComputeWorks","title":"Senior ML Engineer","startDate":"2022-03","summary":"Shipped vector search infra; 30% faster recall."}],
        "education":[{"institution":"University of London","area":"Mathematics"}],
        "skills":["Python","TensorRT","Kubernetes","Postgres","Rust"]
      }
    };

    const SAMPLE_OPPI = {
      "oppi":"discovery",
      "schemas":["https://schema.oppi.cv/v1"],
      "endpoints":{"json":"https://example.cv/json","discovery":"https://example.cv/oppi.json"},
      "scopes":["basic_info","experience","education","contact:email"],
      "consent":"https://hello.cv/consent"
    };

    function setStatus(text, color='bg-black/40') {
      statusPill.textContent = text;
      statusPill.className = `text-[11px] px-2 py-0.5 rounded border border-white/10 ${color} text-gray-200`;
    }

    async function fetchEndpoint(path) {
      const domain = (domainInput.value || '').trim().replace(/^https?:\/\//,'');
      if (!domain || !domain.endsWith('.cv')) {
        setStatus('Enter a valid .cv domain','bg-amber-500/20');
        codebox.textContent = '// Example domains: firstnamelastname.cv, company.cv';
        return;
      }
      const url = `https://${domain}${path}`;
      setStatus('Fetching…','bg-white/10');
      try {
        const res = await fetch(url, { headers: { 'Accept': 'application/json' } });
        if (!res.ok) throw new Error(String(res.status));
        const json = await res.json();
        codebox.textContent = JSON.stringify(json, null, 2);
        setStatus('200 OK','bg-emerald-500/20');
      } catch (e) {
        // Fallback to sample
        codebox.textContent = JSON.stringify(path === '/oppi.json' ? SAMPLE_OPPI : SAMPLE_JSON, null, 2);
        setStatus('Sample (offline/private)','bg-blue-500/20');
      }
    }

    btnFetchJson?.addEventListener('click', () => fetchEndpoint('/json'));
    btnFetchOppi?.addEventListener('click', () => fetchEndpoint('/oppi.json'));
    btnCopy?.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(codebox.textContent || '');
        btnCopy.innerHTML = '<svg data-lucide="check" width="16" height="16" class="w-4 h-4"></svg><span>Copied</span>';
        if (window.lucide && window.lucide.createIcons) lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        setTimeout(() => { btnCopy.innerHTML = '<svg data-lucide="copy" width="16" height="16" class="w-4 h-4"></svg><span>Copy result</span>'; if (window.lucide && window.lucide.createIcons) lucide.createIcons({ attrs: { 'stroke-width': 1.5 } }); }, 1200);
      } catch {}
    });

    // Consent button (demo redirect)
    const btnConsent = document.getElementById('btn-consent');
    btnConsent?.addEventListener('click', () => {
      const domain = (domainInput.value || 'firstnamelastname.cv').trim().replace(/^https?:\/\//,'');
      const url = `https://hello.cv/consent?client=demo-app&domain=${encodeURIComponent(domain)}&scopes=basic_info,experience`;
      window.open(url, '_blank');
    });

    // CTA tester
    const testerInput = document.getElementById('tester-input');
    const testerFetch = document.getElementById('tester-fetch');
    const testerBox = document.getElementById('tester-box');
    const testerStatus = document.getElementById('tester-status');

    function setTesterStatus(text, color='bg-black/40') {
      testerStatus.textContent = text;
      testerStatus.className = `text-[11px] px-2 py-0.5 rounded border border-white/10 ${color} text-gray-200`;
    }

    testerFetch?.addEventListener('click', async () => {
      const domain = (testerInput.value || '').trim().replace(/^https?:\/\//,'');
      if (!domain || !domain.endsWith('.cv')) {
        setTesterStatus('Invalid domain','bg-amber-500/20');
        testerBox.textContent = '// Enter a valid .cv domain';
        return;
      }
      const url = `https://${domain}/json`;
      setTesterStatus('Fetching…','bg-white/10');
      try {
        const res = await fetch(url, { headers: { 'Accept': 'application/json' } });
        if (!res.ok) throw new Error(String(res.status));
        const json = await res.json();
        testerBox.textContent = JSON.stringify(json, null, 2);
        setTesterStatus('200 OK','bg-emerald-500/20');
      } catch {
        testerBox.textContent = JSON.stringify(SAMPLE_JSON, null, 2);
        setTesterStatus('Sample (offline/private)','bg-blue-500/20');
      }
    });

    // Copy curl
    const btnCopyCurl = document.getElementById('btn-copy-curl');
    btnCopyCurl?.addEventListener('click', async () => {
      const text = document.getElementById('curlbox').innerText || '';
      try {
        await navigator.clipboard.writeText(text);
        btnCopyCurl.innerHTML = '<svg data-lucide="check" width="14" height="14" class="w-3.5 h-3.5"></svg> Copied';
        if (window.lucide && window.lucide.createIcons) lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        setTimeout(() => { btnCopyCurl.innerHTML = '<svg data-lucide="clipboard" width="14" height="14" class="w-3.5 h-3.5"></svg> Copy'; if (window.lucide && window.lucide.createIcons) lucide.createIcons({ attrs: { 'stroke-width': 1.5 } }); }, 1000);
      } catch {}
    });

    // Footer year
    document.getElementById('year').textContent = new Date().getFullYear().toString();
  
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
      

<div className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-blue-400 to-purple-400 w-0 z-[70]" id="scroll-progress" style={{width: `0%`}}></div>

<header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md border-b bg-black/60 border-white/5 transition-transform duration-300 will-change-transform" id="site-header">
<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16">
<div className="h-full flex items-center justify-between">

<a className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md" href="#overview">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-[inset_0_0_0_2px_rgba(255,255,255,0.06)]">

<svg className="text-white" fill="none" height="18" viewBox="0 0 64 64" width="18" xmlns="http://www.w3.org/2000/svg">
<path stroke="currentColor" strokeLinecap="round" strokeWidth="4"></path>
<circle cx="10" cy="42" fill="currentColor"></circle>
<text fill="currentColor" fontFamily="Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial" fontSize="22" font-weight="600">cv</text>
</svg>
</span>
<span className="text-lg tracking-tight" style={{fontFamily: `'Plus Jakarta Sans', Inter, sans-serif`}}>OPPI</span>
</a>

<div className="hidden md:flex items-center gap-1 rounded-full border border-white/10 px-2">
<a className="px-3 py-2 text-sm text-gray-300 hover:text-white transition" data-nav-link="" href="#why">Why</a>
<a className="px-3 py-2 text-sm text-gray-300 hover:text-white transition" data-nav-link="" href="#standard">Standard</a>
<a className="px-3 py-2 text-sm text-gray-300 hover:text-white transition" data-nav-link="" href="#consent">Consent</a>
<a className="px-3 py-2 text-sm text-gray-300 hover:text-white transition" data-nav-link="" href="#domain">.cv Domain</a>
<a className="px-3 py-2 text-sm text-gray-300 hover:text-white transition" data-nav-link="" href="#build">Build</a>
<a className="px-3 py-2 text-sm text-gray-300 hover:text-white transition" data-nav-link="" href="#roadmap">Roadmap</a>
<a className="px-3 py-2 text-sm text-gray-300 hover:text-white transition" data-nav-link="" href="#faq">FAQ</a>
</div>

<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm bg-gray-100 text-black hover:bg-gray-200 transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500" href="https://docs.ola.cv" rel="noreferrer" target="_blank">
<svg className="w-4 h-4" data-lucide="book-open" height="16" width="16"></svg>
            Docs
          </a>
<a className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm bg-blue-400 text-black hover:bg-blue-300 transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500" href="#cta">
            Get Access
            <svg className="w-4 h-4" data-lucide="arrow-right" height="16" width="16"></svg>
</a>
<button aria-controls="mobile-panel" aria-expanded="false" className="md:hidden p-2 rounded-md transition-colors hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500" id="nav-toggle">
<svg className="w-5 h-5" data-lucide="menu" height="22" width="22"></svg>
<svg className="w-5 h-5 hidden" data-lucide="x" height="22" width="22"></svg>
</button>
</div>
</div>
</nav>

<div className="fixed inset-0 z-40 opacity-0 pointer-events-none" id="mobile-panel">
<div className="absolute inset-0 bg-black/60" data-close-overlay=""></div>
<div className="absolute inset-x-0 top-0 mx-3 mt-2 rounded-2xl bg-[#0b0b0b]/95 border border-white/10 p-4 transition-all duration-200" style={{transform: `translateY(-8px)`, opacity: `0`}}>
<div className="flex items-center gap-2">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
<svg className="w-4 h-4" data-lucide="globe" height="16" width="16"></svg>
</span>
<p className="text-sm">Navigate</p>
</div>
<div className="mt-3 grid grid-cols-2 gap-2 text-sm">
<a className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10" data-mobile-link="" href="#why">Why</a>
<a className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10" data-mobile-link="" href="#standard">Standard</a>
<a className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10" data-mobile-link="" href="#consent">Consent</a>
<a className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10" data-mobile-link="" href="#domain">.cv Domain</a>
<a className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10" data-mobile-link="" href="#build">Build</a>
<a className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10" data-mobile-link="" href="#roadmap">Roadmap</a>
<a className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10" data-mobile-link="" href="#faq">FAQ</a>
<a className="px-3 py-2 rounded-lg bg-blue-400 text-black hover:bg-blue-300" data-mobile-link="" href="#cta">Get Access</a>
</div>
</div>
</div>
</header>

<section className="relative overflow-hidden pt-28 sm:pt-32 pb-14" id="overview">

<div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(37,99,235,0.18),transparent_60%)]"></div>
<img alt="" className="pointer-events-none select-none absolute inset-0 w-full h-full object-cover opacity-[0.13] -z-20" src="https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=2000&auto=format&fit=crop" />
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
<div className="lg:col-span-7 text-center lg:text-left">
<p className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-blue-300/90">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-blue-500/10 ring-1 ring-blue-400/30 text-blue-300">
<svg className="w-3.5 h-3.5" data-lucide="circle-dot" height="14" width="14"></svg>
</span>
            Open Professional Profile Initiative
          </p>
<h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight" style={{fontFamily: `'Plus Jakarta Sans', Inter, sans-serif`, fontWeight: `600`}}>
            A new standard for AI‑driven talent discovery of first‑party data
          </h1>
<p className="mt-5 text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0">
            Built on user‑owned .cv domains to deliver sovereignty, interoperability, and machine‑readable profiles by default.
          </p>
<div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
<a className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm bg-blue-400 text-black hover:bg-blue-300 transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500" href="#cta">
              Get OPPI access
              <svg className="w-4 h-4" data-lucide="arrow-right" height="18" width="18"></svg>
</a>
<a className="inline-flex items-center gap-2 hover:bg-white/10 transition-all text-gray-100 bg-white/5 border-white/10 border rounded-full px-5 py-3 backdrop-blur-lg" href="#standard">
              View the standard
              <svg className="w-4 h-4" data-lucide="code-2" height="18" width="18"></svg>
</a>
</div>
<p className="mt-6 text-sm text-gray-400">Published: September 8, 2025</p>
</div>

<div className="lg:col-span-5">
<div className="relative mx-auto max-w-md">
<div className="rounded-2xl border border-white/10 bg-gradient-to-b from-gray-950/80 to-black/80 p-5">
<div className="flex items-center gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
<svg className="w-4.5 h-4.5 text-blue-300" data-lucide="shield-check" height="18" width="18"></svg>
</span>
<div>
<p className="text-sm">First‑party by design</p>
<p className="text-xs text-gray-400">GDPR/CCPA aligned • Permissioned access • Portable identity</p>
</div>
</div>
<div className="mt-5 grid grid-cols-3 gap-3 text-center">
<div className="rounded-lg bg-white/5 border border-white/10 p-3">
<p className="text-xs text-gray-400">API tax</p>
<p className="text-lg">-$4</p>
</div>
<div className="rounded-lg bg-white/5 border border-white/10 p-3">
<p className="text-xs text-gray-400">Access</p>
<p className="text-lg">Direct</p>
</div>
<div className="rounded-lg bg-white/5 border border-white/10 p-3">
<p className="text-xs text-gray-400">Format</p>
<p className="text-lg">JSON</p>
</div>
</div>
<div className="mt-5 rounded-lg border border-white/10 bg-black/40 p-3">
<p className="text-xs text-gray-300">Cost impact</p>
<div className="mt-2">

<div className="w-full h-28">
<div className="w-full h-full">
<canvas id="costChart"></canvas>
</div>
</div>
</div>
<p className="mt-2 text-[11px] text-gray-500">Comparison: Closed data vs OPPI</p>
</div>
</div>
</div>
</div>
</div>

<div className="mt-10 flex items-center gap-6 justify-center lg:justify-start">
<div className="flex -space-x-2">
<img alt="" className="w-9 h-9 rounded-full border-2 border-black object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=160" />
<img alt="" className="w-9 h-9 rounded-full border-2 border-black object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=160" />
<img alt="" className="w-9 h-9 rounded-full border-2 border-black object-cover" src="https://images.unsplash.com/photo-1500649297466-74794c70acfc?q=80&w=160" />
<div className="w-9 h-9 rounded-full border-2 border-black bg-blue-400 flex items-center justify-center text-black text-xs"> 2k+ </div>
</div>
<div>
<p className="text-sm text-gray-100">Early adopters across platforms and agencies</p>
<p className="text-sm text-gray-400">From sourcing to ATS to AI copilots</p>
</div>
</div>
</div>
</section>

<section className="py-16 bg-gray-950" id="why">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between gap-6">
<div>
<p className="text-sm uppercase tracking-wider text-blue-300/90">Why OPPI</p>
<h2 className="mt-2 text-3xl lg:text-4xl tracking-tight text-white" style={{fontFamily: `'Plus Jakarta Sans', Inter, sans-serif`, fontWeight: `600`}}>
            The current model is a strategic inefficiency
          </h2>
</div>
</div>
<div className="mt-8 grid md:grid-cols-2 gap-6">
<div className="group rounded-xl border border-white/10 bg-black/40 p-6 hover:bg-black/50 transition-colors">
<div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center">
<svg className="w-5 h-5 text-gray-300" data-lucide="lock" height="20" width="20"></svg>
</div>
<h3 className="mt-4 text-lg tracking-tight">Closed data inflates costs and limits opportunity</h3>
<p className="mt-3 text-sm text-gray-400">
            LinkedIn’s walled garden monetizes access at $4 per profile, restricts communication, and locks data away from the AI systems that now power talent discovery. This closed model inflates costs, limits opportunity, and creates a single point of failure for the entire industry.
          </p>
</div>
<div className="group rounded-xl border border-white/10 bg-black/40 p-6 hover:bg-black/50 transition-colors">
<div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center">
<svg className="w-5 h-5 text-gray-300" data-lucide="cpu" height="20" width="20"></svg>
</div>
<h3 className="mt-4 text-lg tracking-tight">AI needs permissioned, real‑time, structured data</h3>
<p className="mt-3 text-sm text-gray-400">
            Relying on a single platform forces the industry to pay a multi‑billion dollar API tax for incomplete data. Next‑generation tools require vast amounts of structured, permissioned, and real‑time data to be effective.
          </p>
</div>
</div>
<div className="mt-8 rounded-2xl border border-white/10 bg-gradient-to-b from-gray-950 to-black p-6">
<div className="flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
<svg className="w-4.5 h-4.5" data-lucide="shuffle" height="18" width="18"></svg>
</span>
<div>
<p className="text-sm">The OPPI solution: sovereignty and interoperability</p>
<p className="text-xs text-gray-400">A canonical, portable profile on a user‑owned .cv domain.</p>
</div>
</div>
<div className="mt-5 grid md:grid-cols-3 gap-4">
<div className="rounded-xl border border-white/10 bg-white/5 p-4">
<p className="text-sm">For Professionals</p>
<p className="mt-2 text-sm text-gray-400">Unconditional ownership with granular sharing controls.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-4">
<p className="text-sm">For Recruiters & Platforms</p>
<p className="mt-2 text-sm text-gray-400">Direct, cost‑free access to verified first‑party data—accurate and compliant.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-4">
<p className="text-sm">For the AI Ecosystem</p>
<p className="mt-2 text-sm text-gray-400">A standardized, machine‑readable layer with simple endpoints like <span className="text-gray-200">/json</span>.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16" id="standard">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-12 gap-8 items-start">
<div className="lg:col-span-5">
<p className="text-sm uppercase tracking-wider text-blue-300/90">The OPPI Standard</p>
<h2 className="mt-2 text-3xl lg:text-4xl tracking-tight" style={{fontFamily: `'Plus Jakarta Sans', Inter, sans-serif`, fontWeight: `600`}}>
            Canonical, portable, machine‑readable profiles
          </h2>
<p className="mt-3 text-gray-300">
            A predictable convention enables universal access to clean JSON without scraping. Profiles live on user‑owned .cv domains and can be hosted by multiple providers.
          </p>
<ul className="mt-6 space-y-3 text-sm text-gray-300">
<li className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-md bg-white/5 border border-white/10">
<svg className="w-4 h-4 text-teal-300" data-lucide="check" height="16" width="16"></svg>
</span>
              Endpoint: <span className="ml-1 text-gray-100">https://[user].cv/json</span> (permissioned view)
            </li>
<li className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-md bg-white/5 border border-white/10">
<svg className="w-4 h-4 text-teal-300" data-lucide="check" height="16" width="16"></svg>
</span>
              Discovery file: <span className="ml-1 text-gray-100">https://[user].cv/oppi.json</span> (public schema + capabilities)
            </li>
<li className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-md bg-white/5 border border-white/10">
<svg className="w-4 h-4 text-teal-300" data-lucide="check" height="16" width="16"></svg>
</span>
              Native compliance: portable by default with revocable consent.
            </li>
</ul>
</div>
<div className="lg:col-span-7">
<div className="rounded-2xl border border-white/10 bg-gradient-to-b from-gray-950 to-black p-5">
<div className="flex flex-wrap items-center gap-2">
<button className="text-xs px-3 py-1.5 rounded-md bg-blue-400 text-black hover:bg-blue-300 inline-flex items-center gap-2" id="btn-fetch-json" type="button">
<svg className="w-4 h-4" data-lucide="download" height="16" width="16"></svg>
                Fetch /json
              </button>
<button className="text-xs px-3 py-1.5 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 inline-flex items-center gap-2" id="btn-fetch-oppi" type="button">
<svg className="w-4 h-4" data-lucide="file" height="16" width="16"></svg>
                Fetch /oppi.json
              </button>
<button className="ml-auto text-xs px-3 py-1.5 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 inline-flex items-center gap-2" id="btn-copy" type="button">
<svg className="w-4 h-4" data-lucide="copy" height="16" width="16"></svg>
                Copy result
              </button>
</div>
<div className="mt-3 grid sm:grid-cols-[1fr,auto] gap-2">
<input className="w-full bg-black/50 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-500" id="domain-input" placeholder="Enter a .cv domain (e.g., firstnamelastname.cv)" spellcheck="false" type="text" />
<button className="text-xs px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 inline-flex items-center gap-2" id="btn-consent" type="button">
<svg className="w-4 h-4" data-lucide="key-round" height="16" width="16"></svg>
                Start consent
              </button>
</div>
<div className="mt-3 rounded-lg border border-white/10 bg-white/5">
<div className="px-3 py-2 border-b border-white/10 flex items-center justify-between">
<p className="text-xs text-gray-300">Response</p>
<span className="text-[11px] px-2 py-0.5 rounded bg-black/40 border border-white/10 text-gray-400" id="status-pill">Idle</span>
</div>
<pre className="overflow-x-auto p-3 text-[12px] leading-relaxed text-gray-200" id="codebox"><code>// Select an endpoint above to preview JSON</code></pre>
</div>

<div className="mt-4 grid md:grid-cols-3 gap-3">
<div className="rounded-lg border border-white/10 bg-white/5 p-3">
<p className="text-xs text-gray-400">Scopes (example)</p>
<p className="text-sm mt-1">basic_info, experience, education</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-3">
<p className="text-xs text-gray-400">Schema</p>
<p className="text-sm mt-1">OPPI v1 • JSON Resume compatible</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-3">
<p className="text-xs text-gray-400">Versioning</p>
<p className="text-sm mt-1">Semver with content negotiation</p>
</div>
</div>
</div>
</div>
</div>

<div className="mt-12 grid lg:grid-cols-3 gap-4">
<div className="rounded-xl border border-white/10 bg-black/40 p-5">
<div className="flex items-center gap-2">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
<svg className="w-4.5 h-4.5" data-lucide="scale" height="18" width="18"></svg>
</span>
<p className="text-sm">Regulatory alignment</p>
</div>
<p className="mt-2 text-sm text-gray-400">
            GDPR, CCPA, and other laws mandate data portability and consent. OPPI turns a legal requirement into a feature with revocable access.
          </p>
</div>
<div className="rounded-xl border border-white/10 bg-black/40 p-5">
<div className="flex items-center gap-2">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
<svg className="w-4.5 h-4.5" data-lucide="piggy-bank" height="18" width="18"></svg>
</span>
<p className="text-sm">Cost savings</p>
</div>
<p className="mt-2 text-sm text-gray-400">
            Eliminate the proprietary API tax and reinvest in matching quality and candidate experience.
          </p>
</div>
<div className="rounded-xl border border-white/10 bg-black/40 p-5">
<div className="flex items-center gap-2">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
<svg className="w-4.5 h-4.5" data-lucide="trophy" height="18" width="18"></svg>
</span>
<p className="text-sm">Competitive data advantage</p>
</div>
<p className="mt-2 text-sm text-gray-400">
            Richer, permissioned data streams yield faster, more accurate matches. Early adopters will win.
          </p>
</div>
</div>
</div>
</section>

<section className="bg-gray-950 py-16" id="consent">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<p className="text-sm uppercase tracking-wider text-blue-300/90">Consent Workflow</p>
<h2 className="mt-2 text-3xl lg:text-4xl tracking-tight" style={{fontFamily: `'Plus Jakarta Sans', Inter, sans-serif`, fontWeight: `600`}}>
        Permissioned access that’s simple and compliant
      </h2>
<p className="mt-3 text-gray-300 max-w-3xl">
        Services are opt‑in by default. When a user inputs their .cv domain, your app redirects to a consent endpoint managed by the user’s OPPI host. Scopes are approved, access can be revoked, and data is fetched from the canonical source.
      </p>
<div className="mt-8 grid lg:grid-cols-5 gap-3">
<div className="rounded-xl border border-white/10 bg-white/5 p-4 flex items-start gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 ring-1 ring-blue-400/30 text-blue-300">
<svg className="w-4 h-4" data-lucide="terminal" height="16" width="16"></svg>
</span>
<div>
<p className="text-sm">1. Input</p>
<p className="text-xs text-gray-400">User enters firstnamelastname.cv</p>
</div>
</div>
<div className="flex items-center justify-center">
<svg className="w-4.5 h-4.5 text-gray-500" data-lucide="arrow-right" height="18" width="18"></svg>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-4 flex items-start gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/10 ring-1 ring-amber-400/30 text-amber-300">
<svg className="w-4 h-4" data-lucide="key" height="16" width="16"></svg>
</span>
<div>
<p className="text-sm">2. Redirect</p>
<p className="text-xs text-gray-400">To host consent screen</p>
</div>
</div>
<div className="flex items-center justify-center">
<svg className="w-4.5 h-4.5 text-gray-500" data-lucide="arrow-right" height="18" width="18"></svg>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-4 flex items-start gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 ring-1 ring-emerald-400/30 text-emerald-300">
<svg className="w-4 h-4" data-lucide="check-circle-2" height="16" width="16"></svg>
</span>
<div>
<p className="text-sm">3. Fetch</p>
<p className="text-xs text-gray-400">Receive 200 and scoped access</p>
</div>
</div>
</div>
<div className="mt-8 rounded-2xl border border-white/10 bg-gradient-to-b from-gray-950 to-black p-5">
<div className="grid md:grid-cols-2 gap-4">
<div>
<p className="text-sm">Minimal client flow (pseudo‑code)</p>
<div className="mt-2 rounded-lg border border-white/10 bg-white/5">
<pre className="p-3 text-[12px] leading-relaxed text-gray-200 overflow-x-auto"><code>const domain = 'firstnamelastname.cv'
const consentUrl = `https://hello.cv/consent?client=your-app&domain=${"{"}domain{"}"}&scopes=basic_info,experience`
window.location.href = consentUrl
// After approval:
const res = await fetch(`https://${"{"}domain{"}"}/json`, {"{"} headers: {"{"} 'OPPI-Scope': 'basic_info' {"}"} {"}"})
const profile = await res.json()</code></pre>
</div>
</div>
<div>
<p className="text-sm">Server best practices</p>
<ul className="mt-2 space-y-2 text-sm text-gray-300">
<li className="flex items-start gap-2">
<svg className="mt-0.5 w-4 h-4 text-teal-300" data-lucide="shield" height="16" width="16"></svg>
                Cache, don’t copy. Respect expires headers and revocations.
              </li>
<li className="flex items-start gap-2">
<svg className="mt-0.5 w-4 h-4 text-teal-300" data-lucide="rotate-ccw" height="16" width="16"></svg>
                Build idempotent refresh jobs from the .cv source.
              </li>
<li className="flex items-start gap-2">
<svg className="mt-0.5 w-4 h-4 text-teal-300" data-lucide="file-code-2" height="16" width="16"></svg>
                Be schema‑version aware and tolerant to unknown fields.
              </li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-16" id="domain">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-12 gap-8 items-start">
<div className="lg:col-span-5">
<p className="text-sm uppercase tracking-wider text-blue-300/90">The .cv Domain</p>
<h2 className="mt-2 text-3xl lg:text-4xl tracking-tight" style={{fontFamily: `'Plus Jakarta Sans', Inter, sans-serif`, fontWeight: `600`}}>
            The trusted primitive for portable identity
          </h2>
<p className="mt-3 text-gray-300">
            A simple internet tool that belongs to the individual, built to withstand shifting privacy laws and platform policies.
          </p>
</div>
<div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
<div className="rounded-xl border border-white/10 bg-black/40 p-5">
<div className="flex items-center gap-2">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
<svg className="w-4.5 h-4.5" data-lucide="box" height="18" width="18"></svg>
</span>
<p className="text-sm">Absolute portability</p>
</div>
<p className="mt-2 text-sm text-gray-400">
              Identity is independent of any provider. Transfer or self‑host to keep your professional identity permanent.
            </p>
</div>
<div className="rounded-xl border border-white/10 bg-black/40 p-5">
<div className="flex items-center gap-2">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
<svg className="w-4.5 h-4.5" data-lucide="badge-check" height="18" width="18"></svg>
</span>
<p className="text-sm">Bridge to verifiable credentials</p>
</div>
<p className="mt-2 text-sm text-gray-400">
              Domains act like unique, ownable identifiers—a clean path to cryptographic proofs for education and work history.
            </p>
</div>
<div className="rounded-xl border border-white/10 bg-black/40 p-5">
<div className="flex items-center gap-2">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
<svg className="w-4.5 h-4.5" data-lucide="server" height="18" width="18"></svg>
</span>
<p className="text-sm">Decentralized hosting</p>
</div>
<p className="mt-2 text-sm text-gray-400">
              Hello.cv is one host of many. The standard is open to prevent new monopolies and keep the ecosystem competitive.
            </p>
</div>
<div className="rounded-xl border border-white/10 bg-black/40 p-5">
<div className="flex items-center gap-2">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
<svg className="w-4.5 h-4.5" data-lucide="globe-2" height="18" width="18"></svg>
</span>
<p className="text-sm">Universal data access</p>
</div>
<p className="mt-2 text-sm text-gray-400">
              A predictable convention gives any platform clean, AI‑ready JSON without scraping.
            </p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-gray-950 py-16" id="build">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-6 items-start">

<div className="rounded-2xl border border-white/10 bg-gradient-to-b from-gray-950 to-black p-6">
<div className="flex items-center justify-between">
<h3 className="text-xl tracking-tight" style={{fontFamily: `'Plus Jakarta Sans', Inter, sans-serif`, fontWeight: `600`}}>For Platforms & Recruiters</h3>
<span className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10">Data Consumers</span>
</div>
<ul className="mt-4 space-y-3 text-sm text-gray-300">
<li className="flex items-start gap-2">
<svg className="mt-0.5 w-4 h-4 text-teal-300" data-lucide="link" height="16" width="16"></svg>
              Integrate the OPPI API: add a .cv input and call https://[user-domain.cv]/json.
            </li>
<li className="flex items-start gap-2">
<svg className="mt-0.5 w-4 h-4 text-teal-300" data-lucide="file-json" height="16" width="16"></svg>
              Parse according to the published schema; handle version upgrades gracefully.
            </li>
<li className="flex items-start gap-2">
<svg className="mt-0.5 w-4 h-4 text-teal-300" data-lucide="user-check" height="16" width="16"></svg>
              Implement the consent flow and honor scopes.
            </li>
<li className="flex items-start gap-2">
<svg className="mt-0.5 w-4 h-4 text-teal-300" data-lucide="database-backup" height="16" width="16"></svg>
              Cache, don’t copy. Refresh from the source and respect expires headers.
            </li>
<li className="flex items-start gap-2">
<svg className="mt-0.5 w-4 h-4 text-teal-300" data-lucide="megaphone" height="16" width="16"></svg>
              Promote the standard: “Connect your .cv to improve match quality.”
            </li>
</ul>
<a className="mt-5 inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm bg-blue-400 text-black hover:bg-blue-300 transition-all" href="https://docs.ola.cv" rel="noreferrer" target="_blank">Read developer docs <svg className="w-4 h-4" data-lucide="arrow-up-right" height="16" width="16"></svg></a>
</div>

<div className="rounded-2xl border border-white/10 bg-gradient-to-b from-gray-950 to-black p-6">
<div className="flex items-center justify-between">
<h3 className="text-xl tracking-tight" style={{fontFamily: `'Plus Jakarta Sans', Inter, sans-serif`, fontWeight: `600`}}>For Professionals</h3>
<span className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10">Users</span>
</div>
<ul className="mt-4 space-y-3 text-sm text-gray-300">
<li className="flex items-start gap-2">
<svg className="mt-0.5 w-4 h-4 text-teal-300" data-lucide="globe" height="16" width="16"></svg>
              Register your .cv with a data host (pilot: hello.cv) or self‑host.
            </li>
<li className="flex items-start gap-2">
<svg className="mt-0.5 w-4 h-4 text-teal-300" data-lucide="wand-2" height="16" width="16"></svg>
              Use builder.oppi.cv to generate your oppi.json in seconds.
            </li>
<li className="flex items-start gap-2">
<svg className="mt-0.5 w-4 h-4 text-teal-300" data-lucide="toggle-right" height="16" width="16"></svg>
              Manage consent in your privacy dashboard; revoke any time.
            </li>
<li className="flex items-start gap-2">
<svg className="mt-0.5 w-4 h-4 text-teal-300" data-lucide="id-card" height="16" width="16"></svg>
              Request verifications from universities and employers.
            </li>
</ul>

<div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-2">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
<svg className="w-4.5 h-4.5" data-lucide="server-cog" height="18" width="18"></svg>
</span>
<p className="text-sm">Self‑host in 2 steps</p>
</div>
<ol className="mt-3 space-y-2 text-sm text-gray-300 list-decimal list-inside">
<li>Create your JSON at <span className="text-gray-100">builder.oppi.cv</span> and download oppi.json.</li>
<li>Upload to your site root so it’s available at <span className="text-gray-100">https://yourdomain.cv/oppi.json</span> (or <span className="text-gray-100">/.well-known/oppi.json</span>).</li>
</ol>
<div className="mt-3 rounded-lg border border-white/10 bg-black/40">
<div className="px-3 py-2 border-b border-white/10 flex items-center justify-between">
<p className="text-xs text-gray-300">Quick test</p>
<button className="text-[11px] px-2 py-0.5 rounded bg-white/5 border border-white/10 hover:bg-white/10 inline-flex items-center gap-1.5" id="btn-copy-curl" type="button">
<svg className="w-3.5 h-3.5" data-lucide="clipboard" height="14" width="14"></svg> Copy
                </button>
</div>
<pre className="p-3 text-[12px] leading-relaxed text-gray-200 overflow-x-auto" id="curlbox"><code>curl -s https://yourdomain.cv/oppi.json | jq</code></pre>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16" id="roadmap">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<p className="text-sm uppercase tracking-wider text-blue-300/90">Roadmap for Industry Leadership</p>
<h2 className="mt-2 text-3xl lg:text-4xl tracking-tight" style={{fontFamily: `'Plus Jakarta Sans', Inter, sans-serif`, fontWeight: `600`}}>
        From standard to default identity layer
      </h2>
<div className="mt-8 grid md:grid-cols-3 gap-4">
<div className="rounded-2xl border border-white/10 bg-gradient-to-b from-gray-950 to-black p-5">
<p className="text-sm">Now</p>
<p className="mt-2 text-sm text-gray-400">
            .cv standard defined: structured schemas, JSON endpoints, granular consent dashboards.
          </p>
</div>
<div className="rounded-2xl border border-white/10 bg-gradient-to-b from-gray-950 to-black p-5">
<p className="text-sm">Next 18 months</p>
<p className="mt-2 text-sm text-gray-400">
            Industry‑specific schemas and real‑time update APIs.
          </p>
</div>
<div className="rounded-2xl border border-white/10 bg-gradient-to-b from-gray-950 to-black p-5">
<p className="text-sm">Next 5 years</p>
<p className="mt-2 text-sm text-gray-400">
            .cv profiles become the default identity layer, evolving into full professional operating systems.
          </p>
</div>
</div>
</div>
</section>

<section className="bg-gray-950 py-16" id="cta">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="rounded-2xl overflow-hidden border border-white/10">
<div className="grid lg:grid-cols-2">
<div className="p-6 sm:p-8 bg-gradient-to-b from-gray-950 to-black">
<h3 className="text-2xl tracking-tight" style={{fontFamily: `'Plus Jakarta Sans', Inter, sans-serif`, fontWeight: `600`}}>Adopt OPPI</h3>
<p className="mt-2 text-sm text-gray-300">
              We’re prioritizing existing data leaders today. Reduce data costs, simplify compliance, and build on a superior AI data foundation.
            </p>
<div className="mt-5 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm bg-blue-400 text-black hover:bg-blue-300 transition-all" href="https://docs.ola.cv" rel="noreferrer" target="_blank">
                Register for access
                <svg className="w-4 h-4" data-lucide="arrow-up-right" height="16" width="16"></svg>
</a>
<a className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm bg-white/5 text-gray-100 hover:bg-white/10 border border-white/10 transition-all" href="#">
                Join pilot waitlist
                <svg className="w-4 h-4" data-lucide="clock" height="16" width="16"></svg>
</a>
</div>
</div>
<div className="relative bg-black">
<img alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.20]" src="https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1800&auto=format&fit=crop" />
<div className="relative p-6 sm:p-8">
<p className="text-sm text-gray-300">Live endpoint tester</p>
<div className="mt-3 grid sm:grid-cols-[1fr,auto] gap-2">
<input className="w-full bg-black/50 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-500" id="tester-input" placeholder="e.g., johndoe.cv" spellcheck="false" type="text" />
<button className="text-xs px-3 py-2 rounded-lg bg-blue-400 text-black hover:bg-blue-300 inline-flex items-center gap-2" id="tester-fetch" type="button">
<svg className="w-4 h-4" data-lucide="download" height="16" width="16"></svg>
                  Fetch /json
                </button>
</div>
<div className="mt-3 rounded-lg border border-white/10 bg-white/5">
<div className="px-3 py-2 border-b border-white/10 flex items-center justify-between">
<p className="text-xs text-gray-300">Output</p>
<span className="text-[11px] px-2 py-0.5 rounded bg-black/40 border border-white/10 text-gray-400" id="tester-status">Idle</span>
</div>
<pre className="p-3 text-[12px] leading-relaxed text-gray-200 overflow-x-auto" id="tester-box"><code>// Enter a domain and fetch a permissioned /json view</code></pre>
</div>
<p className="mt-2 text-[11px] text-gray-500">If a domain is private or offline, a sample response will be shown.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16" id="faq">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<p className="text-sm uppercase tracking-wider text-blue-300/90">FAQ</p>
<h2 className="mt-2 text-3xl lg:text-4xl tracking-tight" style={{fontFamily: `'Plus Jakarta Sans', Inter, sans-serif`, fontWeight: `600`}}>Common questions</h2>
<div className="mt-8 grid md:grid-cols-2 gap-4">
<div className="rounded-xl border border-white/10 bg-black/40 p-5">
<p className="text-sm">Is OPPI a platform?</p>
<p className="mt-2 text-sm text-gray-400">
            No. It’s an open standard and ecosystem. Hosts like Hello.cv can participate, but users always own the .cv domain and data.
          </p>
</div>
<div className="rounded-xl border border-white/10 bg-black/40 p-5">
<p className="text-sm">What about privacy?</p>
<p className="mt-2 text-sm text-gray-400">
            Profiles are permissioned by default. Data access requires explicit consent, can be scoped, and is revocable.
          </p>
</div>
<div className="rounded-xl border border-white/10 bg-black/40 p-5">
<p className="text-sm">How do updates work?</p>
<p className="mt-2 text-sm text-gray-400">
            The .cv profile is the canonical source. Consumers should refresh from the source and respect cache controls.
          </p>
</div>
<div className="rounded-xl border border-white/10 bg-black/40 p-5">
<p className="text-sm">Can I self‑host?</p>
<p className="mt-2 text-sm text-gray-400">
            Yes. Upload oppi.json to your root or .well‑known path. You may run your own dynamic /json endpoint too.
          </p>
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
<svg aria-hidden="true" className="w-[18px] h-[18px]" data-lucide="sparkle" height="18" width="18"></svg>
</span>
<span className="text-lg tracking-tight" style={{fontFamily: `'Plus Jakarta Sans', Inter, sans-serif`}}>OPPI</span>
</a>
<p className="mt-3 text-sm text-gray-400 max-w-md">
            Open Professional Profile Initiative — a user‑owned standard for AI‑ready professional data.
          </p>
</div>
<div>
<h4 className="text-sm">Explore</h4>
<ul className="mt-3 space-y-2 text-sm text-gray-400">
<li><a className="hover:text-gray-200" href="#standard">Standard</a></li>
<li><a className="hover:text-gray-200" href="#consent">Consent</a></li>
<li><a className="hover:text-gray-200" href="#domain">.cv Domain</a></li>
</ul>
</div>
<div>
<h4 className="text-sm">Build</h4>
<ul className="mt-3 space-y-2 text-sm text-gray-400">
<li><a className="hover:text-gray-200" href="https://docs.ola.cv" rel="noreferrer" target="_blank">Docs</a></li>
<li><a className="hover:text-gray-200" href="#cta">Get access</a></li>
</ul>
</div>
</div>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-xs text-gray-500">© <span id="year">2025</span> OPPI. All rights reserved.</p>
<div className="flex items-center gap-4 text-xs text-gray-500">
<a className="hover:text-gray-300" href="#">Terms</a>
<a className="hover:text-gray-300" href="#">Privacy</a>
<a className="inline-flex items-center gap-1 hover:text-gray-300" href="#overview">
            Back to top
            <svg className="w-3.5 h-3.5" data-lucide="arrow-up" height="14" width="14"></svg>
</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
