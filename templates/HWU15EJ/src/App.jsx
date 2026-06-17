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
"@context":"https://schema.org",
"@type":"Organization",
"name":"ReturnLess",
"url":"https://returnless.app",
"email":"hello@returnless.app",
"logo":"https://placehold.co/160x40/png?text=ReturnLess"
}



{
"@context":"https://schema.org",
"@type":"Product",
"name":"ReturnLess",
"description":"Smart returns-avoidance for Shopify/BigCommerce that routes each return to the highest-margin outcome and proves the savings.",
"category":"SoftwareApplication",
"applicationCategory":"BusinessApplication",
"softwareVersion":"beta",
"offers": {
"@type": "Offer",
"price": "Savings-share",
"priceCurrency": "USD",
"description": "Savings-share pricing in closed beta. No savings, no fee."
},
"releaseNotes":"Soft launch (closed beta). Manual assist to ensure quality."
}



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



    // Icons
    document.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons({ attrs: { strokeWidth: 1.5 } });
    });

    // Mobile menu
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileBtn) {
      mobileBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    }

    // Query params & A/B toggles
    const params = new URLSearchParams(window.location.search);
    const heroVariant = (params.get('hero') || 'a').toLowerCase(); // a|b|c
    const ctaVariant = (params.get('cta') || 'join').toLowerCase(); // join|request|start
    const secondaryPlacement = (params.get('secondary') || 'hero').toLowerCase(); // hero|after
    const proofStyle = (params.get('proof') || 'bullets').toLowerCase(); // bullets|ledger
    const checklist = (params.get('checklist') || 'false').toLowerCase() === 'true';

    const heroHeadline = document.getElementById('heroHeadline');
    const primaryCta = document.getElementById('primaryCta');
    const navJoin = document.getElementById('navJoin');
    const secondaryCtaHero = document.getElementById('secondaryCtaHero');
    const secondaryCtaAfter = document.getElementById('secondaryCtaAfter');
    const proofBullets = document.getElementById('proofBullets');
    const proofLedger = document.getElementById('proofLedger');
    const checklistWrap = document.getElementById('checklistWrap');

    const heroMap = {
      a: 'Stop shipping your profits back.',
      b: 'Don’t pay $12 to return a $9 tee.',
      c: 'Returns that add back margin—not cost.'
    };
    heroHeadline.textContent = heroMap[heroVariant] || heroMap.a;

    const ctaMap = {
      join: 'Join the beta',
      request: 'Request access',
      start: 'Start ROI preview'
    };
    const primaryLabel = ctaMap[ctaVariant] || ctaMap.join;
    [primaryCta, navJoin].forEach(el => { if (el) el.textContent = primaryLabel; });

    if (secondaryPlacement === 'after') {
      if (secondaryCtaHero) secondaryCtaHero.classList.add('hidden');
      if (secondaryCtaAfter) secondaryCtaAfter.classList.remove('hidden');
    }

    if (proofStyle === 'ledger') {
      proofBullets.classList.add('hidden');
      proofLedger.classList.remove('hidden');
      // Initialize chart
      setTimeout(() => {
        const ctx = document.getElementById('ledgerChart');
        if (ctx) {
          new Chart(ctx, {
            type: 'doughnut',
            data: {
              labels: ['Keep/Exchange', 'Consolidate', 'Refurbish/Resell', 'Ship-back'],
              datasets: [{
                data: [42, 18, 24, 16],
                backgroundColor: ['#10b981', '#0ea5e9', '#f59e0b', '#94a3b8'],
                borderWidth: 0
              }]
            },
            options: {
              responsive: true,
              plugins: { legend: { display: false } },
              cutout: '70%'
            }
          });
        }
      }, 0);
    }

    if (checklist) {
      checklistWrap.classList.remove('hidden');
    }

    // UTM capture
    const utmKeys = ['utm_source','utm_medium','utm_campaign'];
    utmKeys.forEach(k => {
      const v = params.get(k) || '';
      try { sessionStorage.setItem(k, v); } catch {}
    });

    // Chips logic (select up to 3)
    const chips = Array.from(document.querySelectorAll('.chip'));
    const categoriesInput = document.getElementById('categories');
    function updateChips() {
      const selected = chips.filter(c => c.getAttribute('aria-pressed') === 'true').map(c => c.dataset.value);
      categoriesInput.value = selected.join(', ');
    }
    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        const selectedCount = chips.filter(c => c.getAttribute('aria-pressed') === 'true').length;
        const isSelected = chip.getAttribute('aria-pressed') === 'true';
        if (!isSelected && selectedCount >= 3) return;
        chip.setAttribute('aria-pressed', String(!isSelected));
        chip.classList.toggle('bg-slate-900', !isSelected);
        chip.classList.toggle('text-white', !isSelected);
        chip.classList.toggle('border-slate-900', !isSelected);
        updateChips();
      });
    });

    // Instrumentation
    const abVariant = JSON.stringify({ hero: heroVariant, cta: ctaVariant, secondary: secondaryPlacement, proof: proofStyle, checklist });
    function track(event, meta={}) {
      const payload = {
        event,
        meta,
        ab: abVariant,
        utm: {
          utm_source: sessionStorage.getItem('utm_source') || '',
          utm_medium: sessionStorage.getItem('utm_medium') || '',
          utm_campaign: sessionStorage.getItem('utm_campaign') || ''
        },
        ts: Date.now()
      };
      console.log('[track]', payload);
    }

    // Event bindings
    if (primaryCta) primaryCta.addEventListener('click', () => track('hero_cta_click'));
    if (secondaryCtaHero) secondaryCtaHero.addEventListener('click', () => track('roi_preview_open', { placement: 'hero' }));
    if (secondaryCtaAfter) secondaryCtaAfter.addEventListener('click', () => track('roi_preview_open', { placement: 'after_how' }));
    document.getElementById('pricing')?.addEventListener('mouseenter', () => track('pricing_view'));
    document.querySelectorAll('#faq details summary').forEach(s => {
      s.addEventListener('click', () => track('faq_expand', { q: s.textContent?.trim() || '' }));
    });

    // Form submit (fake submit -> success state)
    const form = document.getElementById('previewForm');
    const success = document.getElementById('formSuccess');
    const submitBtn = document.getElementById('submitBtn');
    const setHidden = (id, val) => { const el = document.getElementById(id); if (el) el.value = val || ''; };
    // Pre-fill hidden inputs
    setHidden('utm_source', sessionStorage.getItem('utm_source'));
    setHidden('utm_medium', sessionStorage.getItem('utm_medium'));
    setHidden('utm_campaign', sessionStorage.getItem('utm_campaign'));
    setHidden('ab_variant', abVariant);

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      submitBtn.disabled = true;
      submitBtn.classList.add('opacity-70','cursor-not-allowed');
      track('form_submit', { email: document.getElementById('email')?.value || '' });
      setTimeout(() => {
        success.classList.remove('hidden');
        form.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 500);
    });

    // Default hero nav CTA label sync
    if (navJoin) navJoin.textContent = primaryLabel;

    // Elevator copy (OG / alt) constant - can be used if needed
    // “ReturnLess routes each return to the highest‑margin outcome—keep‑it, exchange, donate, refurbish, resell, or ship‑back—and proves the savings.”
  
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
      <div className="aura-background-component fixed top-0 w-full h-screen -z-10"><div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="X0ErZR3QhPzMHfKgBbJJ"></div>
</div>

<div className="w-full border-b bg-red-950 border-red-900">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 text-xs sm:text-sm flex items-center justify-between text-red-100">
<div className="flex items-center gap-2">
<svg className="lucide lucide-flask-conical text-indigo-400" data-lucide="flask-conical" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" strokewidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"></path><path d="M6.453 15h11.094"></path><path d="M8.5 2h7"></path></svg>
<span className="font-geist-mono text-red-100" style={{}}>Early access: We’re onboarding a small cohort to co‑shape ReturnLess. Want in?</span>
</div>
<a className="hidden sm:inline-flex items-center gap-1 font-geist-mono text-red-300 hover:text-red-200" href="#roi-preview" style={{}}>
        Join the beta
        <svg className="lucide lucide-arrow-right text-indigo-300" data-lucide="arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" strokewidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>

<header className="sticky top-0 z-40 backdrop-blur border-b bg-black/80 border-stone-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
<div className="flex items-center justify-between">
<a className="flex items-center gap-2" href="#">
<div className="h-6 w-6 rounded-md flex items-center justify-center bg-stone-100">
<svg className="lucide lucide-box text-black" data-lucide="box" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" strokewidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
</div>
<span className="text-base sm:text-lg font-semibold tracking-tight font-geist-mono text-stone-100" style={{}}>ReturnLess</span>
</a>
<nav className="hidden md:flex items-center gap-6 text-sm">
<a className="font-geist-mono text-stone-300 hover:text-stone-100" href="#how-it-works" style={{}}>How it works</a>
<a className="font-geist-mono text-stone-300 hover:text-stone-100" href="#value" style={{}}>Value</a>
<a className="font-geist-mono text-stone-300 hover:text-stone-100" href="#pricing" style={{}}>Pricing</a>
<a className="font-geist-mono text-stone-300 hover:text-stone-100" href="#faq" style={{}}>FAQ</a>
<a className="font-medium font-geist-mono text-red-300 hover:text-red-100" href="#roi-preview" style={{}}>ROI preview</a>
</nav>
<div className="flex items-center gap-2">
<a className="hidden sm:inline-flex items-center h-9 px-3 rounded-full border text-sm transition font-geist-mono border-stone-700 text-stone-100 hover:bg-stone-950" href="#roi-preview" id="navJoin" style={{}}>Join the beta</a>
<button className="md:hidden inline-flex items-center justify-center rounded-lg border p-2 border-stone-700" id="mobileMenuBtn">
<svg className="lucide lucide-menu text-slate-100" data-lucide="menu" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" strokewidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</div>
<div className="md:hidden hidden mt-3 pt-3 border-t border-stone-800" id="mobileMenu">
<div className="grid gap-2 text-sm">
<a className="py-2 font-geist-mono" href="#how-it-works" style={{}}>How it works</a>
<a className="py-2 font-geist-mono" href="#value" style={{}}>Value</a>
<a className="py-2 font-geist-mono" href="#pricing" style={{}}>Pricing</a>
<a className="py-2 font-geist-mono" href="#faq" style={{}}>FAQ</a>
<a className="py-2 font-geist-mono text-red-300" href="#roi-preview" style={{}}>ROI preview</a>
</div>
</div>
</div>
</header>

<section className="relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
<div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

<div className="">
<h1 className="sm:text-5xl lg:text-6xl text-3xl font-semibold tracking-tight font-geist-mono text-stone-100" id="heroHeadline" style={{}}>Stop shipping your profits back.</h1>
<p className="mt-5 text-base sm:text-lg font-geist-mono text-stone-300" style={{}}>
            ReturnLess chooses the smartest outcome for every return—keep‑it, exchange, donate, refurbish, resell, or ship‑back—and shows your measured savings.
          </p>
<div className="mt-7 flex flex-col sm:flex-row gap-3 sm:items-center" id="heroCtas">
<a className="inline-flex items-center justify-center h-11 px-5 rounded-full text-sm font-medium transition font-geist-mono bg-stone-100 text-black hover:bg-stone-200" href="#roi-preview" id="primaryCta" style={{}}>Join the beta</a>
<a className="inline-flex items-center justify-center h-11 px-5 rounded-full border text-sm font-geist-mono border-stone-700 text-stone-100 hover:bg-stone-950" href="#roi-preview" id="secondaryCtaHero" style={{}}>
              Get an ROI preview
              <svg className="lucide lucide-arrow-right ml-2" data-lucide="arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" strokewidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<p className="mt-2 text-xs text-stone-500 font-geist-mono" style={{}}>Limited to 5 new merchants this month.</p>

<div className="mt-6 grid sm:grid-cols-3 gap-3">
<div className="rounded-md border px-3 py-2 text-xs font-geist-mono border-stone-800 text-stone-300 bg-black" style={{}}>
              Shopify/BigCommerce compatible (beta)
            </div>
<div className="rounded-md border px-3 py-2 text-xs font-geist-mono border-stone-800 text-stone-300 bg-black" style={{}}>
              Savings‑share pricing: no savings, no fee
            </div>
<div className="rounded-md border px-3 py-2 text-xs font-geist-mono border-stone-800 text-stone-300 bg-black" style={{}}>
              Privacy‑safe demo—no store access required
            </div>
</div>

<div className="mt-8" id="proofWrap">

<div className="grid gap-3" id="proofBullets">
<div className="flex items-start gap-3">
<div className="h-6 w-6 rounded-md border flex items-center justify-center bg-pink-950 border-pink-800">
<svg className="lucide lucide-check text-green-400" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" strokewidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<p className="text-sm font-geist-mono text-stone-300" style={{}}>Savings ledger: cash saved, avoided emissions, CX impact</p>
</div>
<div className="flex items-start gap-3">
<div className="h-6 w-6 rounded-md border flex items-center justify-center bg-red-950 border-red-800">
<svg className="lucide lucide-notebook-text text-blue-400" data-lucide="notebook-text" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" strokewidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M2 6h4"></path><path d="M2 10h4"></path><path d="M2 14h4"></path><path d="M2 18h4"></path><rect height="20" rx="2" width="16" x="4" y="2"></rect><path d="M9.5 8h5"></path><path d="M9.5 12H16"></path><path d="M9.5 16H14"></path></svg>
</div>
<p className="text-sm font-geist-mono text-stone-300" style={{}}>Preview runs on a sample CSV—no engineering required</p>
</div>
<div className="flex items-start gap-3">
<div className="h-6 w-6 rounded-md border flex items-center justify-center bg-pink-950 border-pink-800">
<svg className="lucide lucide-shield text-amber-400" data-lucide="shield" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" strokewidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</div>
<p className="text-sm font-geist-mono text-stone-300" style={{}}>Fraud guardrails: caps by SKU/customer, velocity checks</p>
</div>
</div>

<div className="hidden mt-4 rounded-lg border p-4 border-stone-800" id="proofLedger">
<div className="flex items-center justify-between">
<div>
<h3 className="text-base font-semibold tracking-tight font-geist-mono" style={{}}>Savings ledger (preview)</h3>
<p className="text-xs font-geist-mono text-stone-400" style={{}}>Modeled vs ship‑back baseline</p>
</div>
<div className="text-right">
<p className="text-xs text-stone-500 font-geist-mono" style={{}}>Last run</p>
<p className="text-sm font-geist-mono text-stone-200" style={{}}>Sample file – simulated</p>
</div>
</div>
<div className="mt-4">
<div className="relative w-full max-w-sm">
<div className="rounded-md border p-2 border-stone-800">
<div className="relative">
<div className="w-full">
<div className="rounded-md p-3 bg-stone-950">
<div className="text-sm font-geist-mono text-stone-300" style={{}}>Dispositions</div>
<div className="mt-2">
<div className="relative">
<div className="rounded-md border p-3 bg-black border-stone-800">
<div className="grid grid-cols-2 gap-3">
<div className="text-xs text-stone-400">
<div className="flex items-center gap-2 font-geist-mono" style={{}}>
<span className="h-2.5 w-2.5 rounded-sm bg-red-500"></span>
                                      Keep / Instant exchange
                                    </div>
<div className="flex items-center gap-2 mt-1 font-geist-mono" style={{}}>
<span className="h-2.5 w-2.5 rounded-sm bg-red-500"></span>
                                      Consolidate to hub
                                    </div>
<div className="flex items-center gap-2 mt-1 font-geist-mono" style={{}}>
<span className="h-2.5 w-2.5 rounded-sm bg-pink-500"></span>
                                      Refurbish / Resell
                                    </div>
<div className="flex items-center gap-2 mt-1 font-geist-mono" style={{}}>
<span className="h-2.5 w-2.5 rounded-sm bg-stone-600"></span>
                                      Ship‑back
                                    </div>
</div>
<div className="">
<div className="relative">
<div className="relative">
<div className="rounded-md p-2 bg-stone-900">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="">
<div>
<div className="relative">
<div className="relative">
<div>

<div className="relative">
<canvas aria-label="Savings ledger chart" height="180" id="ledgerChart" width="180"></canvas>
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
<p className="mt-3 text-xs text-stone-500 font-geist-mono" style={{}}>Illustrative only. Your preview uses your sample file.</p>
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

<div className="hidden mt-5" id="checklistWrap">
<a className="inline-flex items-center gap-2 text-sm font-geist-mono text-stone-100 hover:text-stone-300" href="#" style={{}}>
              Download the 1‑page Returns Savings Checklist
              <svg className="lucide lucide-download text-slate-300" data-lucide="download" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" strokewidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</a>
</div>
</div>

<div className="relative">
<div className="rounded-2xl border p-5 bg-gradient-to-b border-stone-800 from-stone-950 to-black">
<h2 className="sr-only font-geist-mono" style={{}}>Return routing options with savings indicator</h2>

<div className="relative">
<svg aria-label="Return routing options with savings indicator" className="w-full h-auto" role="img" viewbox="0 0 640 360">

<rect fill="#0f172a" height="60" opacity="0.95" rx="12" width="140" x="20" y="40"></rect>
<text className="font-geist-mono" fill="#fff" fontSize="14" style={{fontFamily: 'Inter'}} text-anchor="middle" x="90" y="77">Customer</text>

<rect fill="#334155" height="60" rx="12" width="160" x="220" y="40"></rect>
<text className="font-geist-mono" fill="#fff" fontSize="14" style={{fontFamily: 'Inter'}} text-anchor="middle" x="300" y="77">Return request</text>

<rect fill="#111827" height="60" rx="12" width="180" x="440" y="40"></rect>
<text className="font-geist-mono" fill="#fff" fontSize="14" style={{fontFamily: 'Inter'}} text-anchor="middle" x="530" y="77">ReturnLess</text>

<line stroke="#94a3b8" strokeWidth="2" x1="160" x2="220" y1="70" y2="70"></line>
<polygon fill="#94a3b8" points="220,70 212,65 212,75"></polygon>
<line stroke="#94a3b8" strokeWidth="2" x1="380" x2="440" y1="70" y2="70"></line>
<polygon fill="#94a3b8" points="440,70 432,65 432,75"></polygon>

<rect fill="#10b981" height="48" opacity="0.9" rx="10" width="120" x="40" y="200"></rect>
<text className="font-geist-mono" fill="#fff" fontSize="12" style={{fontFamily: 'Inter'}} text-anchor="middle" x="100" y="230">Keep / Exchange</text>
<rect fill="#38bdf8" height="48" opacity="0.9" rx="10" width="120" x="190" y="200"></rect>
<text className="font-geist-mono" fill="#0b1220" fontSize="12" style={{fontFamily: 'Inter'}} text-anchor="middle" x="250" y="230">Donate</text>
<rect fill="#f59e0b" height="48" opacity="0.9" rx="10" width="120" x="340" y="200"></rect>
<text className="font-geist-mono" fill="#0b1220" fontSize="12" style={{fontFamily: 'Inter'}} text-anchor="middle" x="400" y="230">Refurbish / Resell</text>
<rect fill="#cbd5e1" height="48" rx="10" width="120" x="490" y="200"></rect>
<text className="font-geist-mono" fill="#0b1220" fontSize="12" style={{fontFamily: 'Inter'}} text-anchor="middle" x="550" y="230">Ship‑back</text>

<line stroke="#cbd5e1" strokeWidth="2" x1="530" x2="100" y1="100" y2="200"></line>
<line stroke="#cbd5e1" strokeWidth="2" x1="530" x2="250" y1="100" y2="200"></line>
<line stroke="#cbd5e1" strokeWidth="2" x1="530" x2="400" y1="100" y2="200"></line>
<line stroke="#cbd5e1" strokeWidth="2" x1="530" x2="550" y1="100" y2="200"></line>

<circle cx="470" cy="130" fill="#16a34a" r="18"></circle>
<text className="font-geist-mono" fill="#fff" fontSize="12" style={{fontFamily: 'Inter'}} text-anchor="middle" x="470" y="134">$</text>
</svg>
</div>
<div className="mt-4 rounded-md border p-3 border-stone-800 bg-black">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="lucide lucide-line-chart text-emerald-400" data-lucide="line-chart" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" strokewidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
<p className="text-sm font-geist-mono text-stone-200" style={{}}>Modeled savings vs ship‑back baseline</p>
</div>
<div className="text-sm font-geist-mono text-stone-300" style={{}}>$ saved (preview)</div>
</div>
<div className="mt-3 h-2 rounded-full overflow-hidden bg-stone-900">
<div className="h-2 rounded-full bg-red-500" style={{width: '62%'}}></div>
</div>
<p className="mt-2 text-xs text-stone-500 font-geist-mono" style={{}}>Illustrative bar only—your preview shows the measured ledger.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 sm:py-16 border-t border-stone-800 bg-stone-950">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-3xl">
<h2 className="text-2xl sm:text-4xl tracking-tight font-geist-mono font-semibold text-stone-100" style={{}}>Reverse logistics is a profit leak.</h2>
<div className="mt-5 grid gap-3 text-stone-300">
<p className="font-geist-mono" style={{}}>Return shipping + handling often cost more than the item.</p>
<p className="font-geist-mono" style={{}}>Blunt policies (“free returns for all” or “no returns”) either drain margin or damage loyalty.</p>
<p className="font-geist-mono" style={{}}>Teams lack a per‑item, profit‑aware way to choose keep/donate/refurbish/resell.</p>
<p className="font-geist-mono" style={{}}>Fraud and wardrobing slip through.</p>
</div>
<div className="mt-6 rounded-lg border p-4 text-sm flex items-start gap-2 border-pink-800 bg-pink-950 text-pink-200">
<svg className="lucide lucide-target mt-0.5" data-lucide="target" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" strokewidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
<p className="font-geist-mono" style={{}}><strong className="font-semibold font-geist-mono" style={{}}>Beta goal:</strong> prove we can cut your return costs and write‑offs this quarter—then scale.</p>
</div>
</div>
</div>
</section>

<section className="py-12 sm:py-16" id="how-it-works">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-2xl sm:text-4xl tracking-tight font-geist-mono font-semibold text-stone-100" style={{}}>How it works</h2>
<div className="mt-8 grid md:grid-cols-3 gap-6">
<div className="rounded-xl border p-5 border-stone-800">
<div className="flex items-center gap-2">
<div className="h-9 w-9 rounded-lg flex items-center justify-center bg-stone-100 text-black">
<span className="text-sm font-geist-mono" style={{}}>1</span>
</div>
<h3 className="text-lg font-semibold tracking-tight font-geist-mono" style={{}}>Connect or upload</h3>
</div>
<p className="mt-3 text-sm font-geist-mono text-stone-300" style={{}}>Share a sample returns CSV or connect your store (read‑only).</p>
<p className="mt-2 text-xs text-stone-500 font-geist-mono" style={{}}>For the preview, a file upload is enough—no engineering needed.</p>
</div>
<div className="rounded-xl border p-5 border-stone-800">
<div className="flex items-center gap-2">
<div className="h-9 w-9 rounded-lg flex items-center justify-center bg-stone-100 text-black">
<span className="text-sm font-geist-mono" style={{}}>2</span>
</div>
<h3 className="text-lg font-semibold tracking-tight font-geist-mono" style={{}}>Decision engine simulates outcomes</h3>
</div>
<p className="mt-3 text-sm font-geist-mono text-stone-300" style={{}}>We model the highest‑margin disposition for each RMA: keep‑it, instant exchange, consolidate to hub, refurbish, resell, donate, or ship‑back.</p>
</div>
<div className="rounded-xl border p-5 border-stone-800">
<div className="flex items-center gap-2">
<div className="h-9 w-9 rounded-lg flex items-center justify-center bg-stone-100 text-black">
<span className="text-sm font-geist-mono" style={{}}>3</span>
</div>
<h3 className="text-lg font-semibold tracking-tight font-geist-mono" style={{}}>See measured savings</h3>
</div>
<p className="mt-3 text-sm font-geist-mono text-stone-300" style={{}}>We compare against your current ‘ship‑back’ baseline and produce a savings ledger: cash saved, avoided emissions, CX impact.</p>
</div>
</div>
<div className="hidden mt-6" id="secondaryCtaAfter">
<a className="inline-flex items-center h-11 px-5 rounded-full text-sm font-geist-mono bg-stone-100 text-black hover:bg-stone-200" href="#roi-preview" style={{}}>
          Get an ROI preview
          <svg className="lucide lucide-arrow-right ml-2" data-lucide="arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" strokewidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</section>

<section className="py-12 sm:py-16 border-t border-stone-800 bg-stone-950" id="value">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-2xl sm:text-4xl tracking-tight font-geist-mono font-semibold text-stone-100" style={{}}>Why operators choose ReturnLess</h2>
<div className="mt-8 grid md:grid-cols-3 gap-6">
<div className="rounded-xl border p-5 border-stone-800 bg-black">
<div className="flex items-center gap-2">
<svg className="lucide lucide-gauge text-slate-100" data-lucide="gauge" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" strokewidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m12 14 4-4"></path><path d="M3.34 19a10 10 0 1 1 17.32 0"></path></svg>
<h3 className="text-lg font-semibold tracking-tight font-geist-mono" style={{}}>Smart dispositioning</h3>
</div>
<p className="mt-2 text-sm font-geist-mono text-stone-300" style={{}}>Profit‑aware decisions per item, not one‑size‑fits‑none.</p>
<p className="mt-2 text-xs text-stone-500 font-geist-mono" style={{}}>Per‑item profit math beats blanket policies.</p>
</div>
<div className="rounded-xl border p-5 border-stone-800 bg-black">
<div className="flex items-center gap-2">
<svg className="lucide lucide-receipt-text text-slate-100" data-lucide="receipt-text" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" strokewidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"></path><path d="M14 8H8"></path><path d="M16 12H8"></path><path d="M13 16H8"></path></svg>
<h3 className="text-lg font-semibold tracking-tight font-geist-mono" style={{}}>Measured savings</h3>
</div>
<p className="mt-2 text-sm font-geist-mono text-stone-300" style={{}}>Transparent ledger that proves value, or you don’t pay.</p>
<p className="mt-2 text-xs text-stone-500 font-geist-mono" style={{}}>A ledger your CFO will actually read.</p>
</div>
<div className="rounded-xl border p-5 border-stone-800 bg-black">
<div className="flex items-center gap-2">
<svg className="lucide lucide-smile-plus text-slate-100" data-lucide="smile-plus" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" strokewidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 11v1a10 10 0 1 1-9-10"></path><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line><path d="M16 5h6"></path><path d="M19 2v6"></path></svg>
<h3 className="text-lg font-semibold tracking-tight font-geist-mono" style={{}}>CX‑first returns</h3>
</div>
<p className="mt-2 text-sm font-geist-mono text-stone-300" style={{}}>Instant keep‑it and exchanges reduce friction and bad reviews.</p>
<p className="mt-2 text-xs text-stone-500 font-geist-mono" style={{}}>Instant decisions that reduce support tickets.</p>
</div>
<div className="rounded-xl border p-5 border-stone-800 bg-black">
<div className="flex items-center gap-2">
<svg className="lucide lucide-shield-check text-slate-100" data-lucide="shield-check" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" strokewidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<h3 className="text-lg font-semibold tracking-tight font-geist-mono" style={{}}>Fraud guardrails</h3>
</div>
<p className="mt-2 text-sm font-geist-mono text-stone-300" style={{}}>Caps by SKU/customer, velocity checks, selective verification.</p>
<p className="mt-2 text-xs text-stone-500 font-geist-mono" style={{}}>Keep generosity from becoming a loophole.</p>
</div>
<div className="rounded-xl border p-5 border-stone-800 bg-black">
<div className="flex items-center gap-2">
<svg className="lucide lucide-plug text-slate-100" data-lucide="plug" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" strokewidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 22v-5"></path><path d="M9 8V2"></path><path d="M15 8V2"></path><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"></path></svg>
<h3 className="text-lg font-semibold tracking-tight font-geist-mono" style={{}}>Plug‑in friendly</h3>
</div>
<p className="mt-2 text-sm font-geist-mono text-stone-300" style={{}}>Shopify/BigCommerce app (beta) + API.</p>
<p className="mt-2 text-xs text-stone-500 font-geist-mono" style={{}}>App + API, minimal lift.</p>
</div>
<div className="rounded-xl border p-5 border-stone-800 bg-black">
<div className="flex items-center gap-2">
<svg className="lucide lucide-trees text-slate-100" data-lucide="trees" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" strokewidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z"></path><path d="M7 16v6"></path><path d="M13 19v3"></path><path d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5"></path></svg>
<h3 className="text-lg font-semibold tracking-tight font-geist-mono" style={{}}>Sustainability signal</h3>
</div>
<p className="mt-2 text-sm font-geist-mono text-stone-300" style={{}}>Donate or refurbish to avoid waste, with receipts.</p>
<p className="mt-2 text-xs text-stone-500 font-geist-mono" style={{}}>Less landfill, more goodwill.</p>
</div>
</div>
</div>
</section>

<section className="py-12 sm:py-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-2xl sm:text-4xl tracking-tight font-geist-mono font-semibold text-stone-100" style={{}}>What you get in the beta</h2>
<div className="mt-6 grid md:grid-cols-2 gap-6">
<ul className="space-y-3">
<li className="flex items-start gap-3">
<svg className="lucide lucide-sparkles mt-0.5 text-slate-100" data-lucide="sparkles" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" strokewidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="text-sm font-geist-mono text-stone-300" style={{}}>White‑glove onboarding and a one‑time ROI preview from your sample file.</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-sliders-horizontal mt-0.5 text-slate-100" data-lucide="sliders-horizontal" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" strokewidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><line x1="21" x2="14" y1="4" y2="4"></line><line x1="10" x2="3" y1="4" y2="4"></line><line x1="21" x2="12" y1="12" y2="12"></line><line x1="8" x2="3" y1="12" y2="12"></line><line x1="21" x2="16" y1="20" y2="20"></line><line x1="12" x2="3" y1="20" y2="20"></line><line x1="14" x2="14" y1="2" y2="6"></line><line x1="8" x2="8" y1="10" y2="14"></line><line x1="16" x2="16" y1="18" y2="22"></line></svg>
<span className="text-sm font-geist-mono text-stone-300" style={{}}>Pilot policies tailored to your SKUs and margins.</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-file-bar-chart mt-0.5 text-slate-100" data-lucide="file-bar-chart" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" strokewidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M8 18v-2"></path><path d="M12 18v-4"></path><path d="M16 18v-6"></path></svg>
<span className="text-sm font-geist-mono text-stone-300" style={{}}>Weekly report of dispositions and modeled savings.</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-hand-coins mt-0.5 text-slate-100" data-lucide="hand-coins" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" strokewidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"></path><path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"></path><path d="m2 16 6 6"></path><circle cx="16" cy="9" r="2.9"></circle><circle cx="6" cy="5" r="3"></circle></svg>
<span className="text-sm font-geist-mono text-stone-300" style={{}}>Savings‑share pricing when you go live.</span>
</li>
</ul>
<div className="rounded-xl border p-5 border-stone-800 bg-stone-950">
<div className="flex items-center justify-between">
<p className="text-sm font-geist-mono text-stone-300" style={{}}>Ready to see your numbers?</p>
<a className="inline-flex items-center h-10 px-4 rounded-full text-sm font-geist-mono bg-stone-100 text-black hover:bg-stone-200" href="#roi-preview" style={{}}>
              Join the beta
              <svg className="lucide lucide-arrow-right ml-2" data-lucide="arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" strokewidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 sm:py-16 border-t border-stone-800 bg-stone-950" id="pricing">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-2xl sm:text-4xl tracking-tight font-geist-mono font-semibold text-stone-100" style={{}}>Pricing that aligns with your margin.</h2>
<p className="mt-3 font-geist-mono text-stone-300" style={{}}>ReturnLess charges a small % of verified savings. No savings, no fee. During beta, onboarding is free.</p>
<p className="mt-1 text-xs text-stone-500 font-geist-mono" style={{}}>We’ll confirm the exact % after your ROI preview.</p>
<div className="mt-6 rounded-xl border p-5 border-stone-800 bg-black">
<div className="flex items-center gap-2">
<svg className="lucide lucide-handshake text-slate-100" data-lucide="handshake" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" strokewidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m11 17 2 2a1 1 0 1 0 3-3"></path><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path><path d="m21 3 1 11h-2"></path><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path><path d="M3 4h8"></path></svg>
<span className="text-sm font-geist-mono text-stone-200" style={{}}>Savings‑share, aligned incentives, predictable pilot.</span>
</div>
</div>
</div>
</section>

<section className="py-12 sm:py-16" id="faq">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-2xl sm:text-4xl tracking-tight font-geist-mono font-semibold text-stone-100" style={{}}>FAQ</h2>
<div className="mt-6 divide-y border rounded-xl divide-stone-800 border-stone-800 bg-black">

<details className="group p-5">
<summary className="flex cursor-pointer items-center justify-between">
<span className="text-sm sm:text-base font-geist-mono text-stone-100" style={{}}>Do I need a dev to test this?</span>
<svg className="lucide lucide-chevron-down group-open:rotate-180 transition-transform text-slate-400" data-lucide="chevron-down" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" strokewidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-3 text-sm font-geist-mono text-stone-300" style={{}}>No. A sample CSV is enough for the ROI preview.</p>
</details>
<details className="group p-5">
<summary className="flex cursor-pointer items-center justify-between">
<span className="text-sm sm:text-base font-geist-mono text-stone-100" style={{}}>Is this live today?</span>
<svg className="lucide lucide-chevron-down group-open:rotate-180 transition-transform text-slate-400" data-lucide="chevron-down" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" strokewidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-3 text-sm font-geist-mono text-stone-300" style={{}}>We’re in closed beta with a manual assist to ensure quality.</p>
</details>
<details className="group p-5">
<summary className="flex cursor-pointer items-center justify-between">
<span className="text-sm sm:text-base font-geist-mono text-stone-100" style={{}}>Which platforms?</span>
<svg className="lucide lucide-chevron-down group-open:rotate-180 transition-transform text-slate-400" data-lucide="chevron-down" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" strokewidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-3 text-sm font-geist-mono text-stone-300" style={{}}>Shopify and BigCommerce first; Woo/Magento next.</p>
</details>
<details className="group p-5">
<summary className="flex cursor-pointer items-center justify-between">
<span className="text-sm sm:text-base font-geist-mono text-stone-100" style={{}}>What about refunds abuse?</span>
<svg className="lucide lucide-chevron-down group-open:rotate-180 transition-transform text-slate-400" data-lucide="chevron-down" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" strokewidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-3 text-sm font-geist-mono text-stone-300" style={{}}>We throttle keep‑it and require extra verification on risky patterns.</p>
</details>
<details className="group p-5">
<summary className="flex cursor-pointer items-center justify-between">
<span className="text-sm sm:text-base font-geist-mono text-stone-100" style={{}}>Data security?</span>
<svg className="lucide lucide-chevron-down group-open:rotate-180 transition-transform text-slate-400" data-lucide="chevron-down" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" strokewidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-3 text-sm font-geist-mono text-stone-300" style={{}}>Read‑only access for the preview; we sign a standard NDA on request.</p>
</details>
</div>
</div>
</section>

<section className="py-12 sm:py-16 border-t border-stone-800 bg-stone-950" id="roi-preview">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-10">
<div>
<h2 className="text-2xl sm:text-4xl tracking-tight font-geist-mono font-semibold text-stone-100" style={{}}>Get your ROI preview (free)</h2>
<p className="mt-3 font-geist-mono text-stone-300" style={{}}>We’ll run your sample file against our decision engine and email a secure savings ledger preview.</p>

<div className="mt-6 rounded-xl border p-5 border-stone-800 bg-black">
<h3 className="text-lg font-semibold tracking-tight font-geist-mono text-stone-100" style={{}}>Built for operators, not theory.</h3>
<ul className="mt-3 space-y-2 text-sm text-stone-300">
<li className="flex items-start gap-2">
<svg className="lucide lucide-cpu mt-0.5 text-slate-100" data-lucide="cpu" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" strokewidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
<span className="font-geist-mono" style={{}}>Designed by ex‑payments + logistics engineers.</span>
</li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-book-open mt-0.5 text-slate-100" data-lucide="book-open" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" strokewidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
<span className="font-geist-mono" style={{}}>Informed by reverse‑logistics best practices and industry data.</span>
</li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-scale mt-0.5 text-slate-100" data-lucide="scale" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" strokewidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path d="M7 21h10"></path><path d="M12 3v18"></path><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path></svg>
<span className="font-geist-mono" style={{}}>Backed by a savings‑first philosophy: measure, then scale.</span>
</li>
</ul>
</div>

<div className="mt-6 rounded-xl border p-5 border-stone-800 bg-black">
<div className="flex items-center gap-2">
<svg className="lucide lucide-test-tube-2 text-slate-100" data-lucide="test-tube-2" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" strokewidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01a2.83 2.83 0 0 1 0-4L17 3"></path><path d="m16 2 6 6"></path><path d="M12 16H4"></path></svg>
<h4 className="text-base font-semibold tracking-tight font-geist-mono" style={{}}>Experiment card</h4>
</div>
<ul className="mt-2 text-sm text-stone-300">
<li className="font-geist-mono" style={{}}>Comprehension target: ≥ 80%</li>
<li className="font-geist-mono" style={{}}>Hero‑CTA CTR: ≥ 3–5% (warm traffic)</li>
<li className="font-geist-mono" style={{}}>Email submit: ≥ 2–3%</li>
</ul>
</div>
</div>

<div className="lg:pl-6">
<form className="rounded-2xl border p-5 sm:p-6 border-stone-800 bg-black" id="previewForm">
<div className="grid sm:grid-cols-2 gap-4">
<div className="sm:col-span-2">
<label className="block text-sm font-geist-mono text-stone-300" htmlFor="email" style={{}}>Email</label>
<input className="mt-1 w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-900 border-stone-700" id="email" name="email" placeholder="you@brand.com" required="" type="email"/>
</div>
<div>
<label className="block text-sm font-geist-mono text-stone-300" htmlFor="name" style={{}}>Name</label>
<input className="mt-1 w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-900 border-stone-700" id="name" name="name" placeholder="Your name" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-geist-mono text-stone-300" htmlFor="company" style={{}}>Company/Brand</label>
<input className="mt-1 w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-900 border-stone-700" id="company" name="company" placeholder="Brand Inc." required="" type="text"/>
</div>
<div>
<label className="block text-sm font-geist-mono text-stone-300" htmlFor="platform" style={{}}>Platform</label>
<select className="mt-1 w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-900 border-stone-700" id="platform" name="platform">
<option className="font-geist-mono" style={{}}>Shopify</option>
<option className="font-geist-mono" style={{}}>BigCommerce</option>
<option className="font-geist-mono" style={{}}>Other</option>
</select>
</div>
<div>
<label className="block text-sm font-geist-mono text-stone-300" htmlFor="monthlyOrders" style={{}}>Monthly orders</label>
<select className="mt-1 w-full rounded-lg border px-3 py-2 text-sm border-stone-700" id="monthlyOrders" name="monthlyOrders">
<option className="font-geist-mono" style={{}}>1k–3k</option>
<option className="font-geist-mono" style={{}}>3k–10k</option>
<option className="font-geist-mono" style={{}}>10k–25k</option>
<option className="font-geist-mono" style={{}}>25k–50k</option>
</select>
</div>
<div>
<label className="block text-sm font-geist-mono text-stone-300" htmlFor="returnRate" style={{}}>Return rate (estimate)</label>
<input className="mt-1 w-full rounded-lg border px-3 py-2 text-sm border-stone-700" id="returnRate" name="returnRate" placeholder="e.g., 12%" type="text"/>
</div>
<div className="sm:col-span-2">
<label className="block text-sm font-geist-mono text-stone-300" style={{}}>Top 3 product categories</label>
<div className="mt-2 flex flex-wrap gap-2" id="categoryChips">

<button aria-pressed="false" className="chip inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-geist-mono border-stone-700 text-stone-200 hover:bg-stone-950" data-value="Apparel" style={{}} type="button">
                    Apparel
                  </button>
<button aria-pressed="false" className="chip inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-geist-mono border-stone-700 text-stone-200 hover:bg-stone-950" data-value="Footwear" style={{}} type="button">
                    Footwear
                  </button>
<button aria-pressed="false" className="chip inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-geist-mono border-stone-700 text-stone-200 hover:bg-stone-950" data-value="Accessories" style={{}} type="button">
                    Accessories
                  </button>
<button aria-pressed="false" className="chip inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-geist-mono border-stone-700 text-stone-200 hover:bg-stone-950" data-value="Home" style={{}} type="button">
                    Home
                  </button>
<button aria-pressed="false" className="chip inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-geist-mono border-stone-700 text-stone-200 hover:bg-stone-950" data-value="Beauty" style={{}} type="button">
                    Beauty
                  </button>
<button aria-pressed="false" className="chip inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-geist-mono border-stone-700 text-stone-200 hover:bg-stone-950" data-value="Electronics" style={{}} type="button">
                    Electronics
                  </button>
</div>
<input id="categories" name="categories" type="hidden"/>
</div>
<div className="sm:col-span-2">
<label className="block text-sm font-geist-mono text-stone-300" htmlFor="file" style={{}}>Upload sample returns CSV (optional)</label>
<label className="mt-1 flex items-center justify-between rounded-lg border px-3 py-2 text-sm cursor-pointer border-stone-700 hover:bg-stone-950" htmlFor="file">
<span className="font-geist-mono text-stone-400" style={{}}>Choose file…</span>
<svg className="lucide lucide-upload text-slate-300" data-lucide="upload" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" strokewidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v12"></path><path d="m17 8-5-5-5 5"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path></svg>
</label>
<input accept=".csv" className="sr-only" id="file" name="file" type="file"/>
</div>
<div className="sm:col-span-2">
<label className="inline-flex items-center gap-2">
<input className="h-4 w-4 rounded focus:ring-stone-900 border-stone-700 text-stone-100" id="consent" name="consent" required="" type="checkbox"/>
<span className="text-sm font-geist-mono text-stone-300" style={{}}>I agree to be contacted about early access.</span>
</label>
</div>

<input id="utm_source" name="utm_source" type="hidden" value=""/>
<input id="utm_medium" name="utm_medium" type="hidden" value=""/>
<input id="utm_campaign" name="utm_campaign" type="hidden" value=""/>
<input id="ab_variant" name="ab_variant" type="hidden" value='{"hero":"a","cta":"join","secondary":"hero","proof":"bullets","checklist":false}'/>
</div>
<button className="mt-5 w-full inline-flex items-center justify-center h-11 px-5 rounded-full text-sm font-geist-mono bg-stone-100 text-black hover:bg-stone-200" id="submitBtn" style={{}} type="submit">
              Show me the savings
              <svg className="lucide lucide-arrow-right ml-2" data-lucide="arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" strokewidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<div className="hidden mt-4 rounded-lg border p-4 text-sm font-geist-mono border-pink-800 bg-pink-950 text-pink-200" id="formSuccess" style={{}}>
              Thanks—check your inbox. We’ll send a secure link to drop your sample file plus an example report.
            </div>
</form>
</div>
</div>
</div>
</section>

<footer className="border-t border-stone-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
<div>
<p className="text-sm font-geist-mono text-stone-300" style={{}}>By joining the beta you consent to us emailing you about early access. We never sell your data.</p>
<p className="mt-2 text-xs text-stone-500 font-geist-mono" style={{}}>We’re recruiting 5 pilot merchants this month.</p>
</div>
<div className="text-sm text-stone-300">
<div className="flex items-center gap-4">
<a className="font-geist-mono hover:text-stone-100" href="#" style={{}}>Privacy</a>
<a className="font-geist-mono hover:text-stone-100" href="#" style={{}}>Terms</a>
<a className="font-geist-mono hover:text-stone-100" href="mailto:hello@returnless.app" style={{}}>hello@returnless.app</a>
</div>
</div>
</div>
</div>
</footer>





    </>
  );
}
