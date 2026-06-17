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



  document.addEventListener('DOMContentLoaded', function () {
    // Pricing toggle
    const pricingRoot = document.getElementById('pricing');
    if (pricingRoot) {
      const monthlyBtn = document.getElementById('planMonthly');
      const annualBtn = document.getElementById('planAnnual');
      const annualBadge = document.getElementById('annualBadge');
      const billingNote = document.getElementById('billingNote');
      const priceEls = pricingRoot.querySelectorAll('[data-price]');

      let plan = 'monthly';
      function renderPrices() {
        priceEls.forEach(el => {
          const m = el.dataset.monthly;
          const a = el.dataset.annual;
          const val = plan === 'monthly' ? m : (a ?? m);
          el.textContent = `$${val}`;
        });
        if (billingNote) billingNote.textContent = plan === 'monthly' ? 'Billed monthly' : 'Billed annually (15% off)';
        if (annualBadge) annualBadge.style.opacity = plan === 'annual' ? '1' : '1';
        // Button visual state
        if (monthlyBtn && annualBtn) {
          monthlyBtn.className = plan === 'monthly'
            ? 'px-3 py-1.5 text-sm rounded-full font-geist font-medium bg-white text-black'
            : 'px-3 py-1.5 text-sm rounded-full font-geist text-gray-200 hover:text-white transition-colors';
          annualBtn.className = plan === 'annual'
            ? 'px-3 py-1.5 text-sm rounded-full font-geist font-medium bg-white text-black'
            : 'px-3 py-1.5 text-sm rounded-full font-geist text-gray-200 hover:text-white transition-colors';
        }
        if (window.lucide && typeof window.lucide.createIcons === 'function') {
          window.lucide.createIcons();
        }
      }
      monthlyBtn?.addEventListener('click', () => { plan = 'monthly'; renderPrices(); });
      annualBtn?.addEventListener('click', () => { plan = 'annual'; renderPrices(); });
      renderPrices();
    }

    // FAQ accordion
    const faqRoot = document.querySelector('[data-accordion="faq"]');
    if (faqRoot) {
      const buttons = faqRoot.querySelectorAll('button[data-accordion-target]');
      buttons.forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.getAttribute('data-accordion-target');
          const panel = id ? document.getElementById(id) : null;
          const expanded = btn.getAttribute('aria-expanded') === 'true';

          // Close others
          buttons.forEach(b => {
            const otherId = b.getAttribute('data-accordion-target');
            const otherPanel = otherId ? document.getElementById(otherId) : null;
            if (otherPanel && b !== btn) {
              otherPanel.classList.add('hidden');
              b.setAttribute('aria-expanded', 'false');
            }
          });

          if (panel) {
            panel.classList.toggle('hidden', expanded);
            btn.setAttribute('aria-expanded', String(!expanded));
          }
          if (window.lucide && typeof window.lucide.createIcons === 'function') {
            window.lucide.createIcons();
          }
        });
      });
    }
  });



    // Initialize icons and interactive behaviors
    document.addEventListener('DOMContentLoaded', function () {
      if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
      }

      // Staggered reveal
      const items = Array.from(document.querySelectorAll('[data-animate]'));
      items.forEach((el, i) => {
        setTimeout(() => {
          el.style.opacity = '1';
          el.style.transform = 'none';
          el.style.filter = 'blur(0)';
        }, 90 * i + 120);
      });

      // Mobile menu toggle
      const toggle = document.getElementById('mobileToggle');
      const panel = document.getElementById('mobileMenu');
      let open = false;
      if (toggle && panel) {
        toggle.addEventListener('click', () => {
          open = !open;
          panel.classList.toggle('hidden', !open);
          toggle.innerHTML = open
            ? '<svg data-lucide="x" class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5"></svg>'
            : '<svg data-lucide="menu" class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5"></svg>';
          if (window.lucide && typeof window.lucide.createIcons === 'function') {
            window.lucide.createIcons();
          }
        });
      }
    });
  
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
      <div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dd49724b-eafb-4f7c-a237-0bceca131a17_3840w.jpg")'}}></div>
<main className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-10 relative">
<section className="outline outline-1 outline-white/10 overflow-hidden relative bg-black/85 rounded-3xl shadow-2xl backdrop-blur-none" style={{backdropFilter: 'saturate(1.15) blur(1px)'}}>

<header className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-white/10 bg-black/60">
<div className="flex items-center gap-2" data-animate="" style={{opacity: '1', filter: 'blur(0px)', transform: 'none', willChange: 'opacity, transform, filter'}}>
<span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-orange-500/90 text-black shadow-sm ring-1 ring-black/10">
<svg className="lucide lucide-shield w-4.5 h-4.5" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</span>
<span className="text-white text-lg font-semibold tracking-tight font-geist">QuantaMesh</span>
</div>
<nav className="hidden md:flex items-center gap-7 text-sm text-gray-200">
<a className="px-2 py-1.5 rounded-md hover:bg-white/5 hover:text-white transition-colors font-geist" data-animate="" href="#" style={{opacity: '1', filter: 'blur(0px)', transform: 'none', willChange: 'opacity, transform, filter'}}>Overview</a>
<a className="px-2 py-1.5 rounded-md hover:bg-white/5 hover:text-white transition-colors font-geist" data-animate="" href="#" style={{opacity: '1', filter: 'blur(0px)', transform: 'none', willChange: 'opacity, transform, filter'}}>Validators</a>
<a className="px-2 py-1.5 rounded-md hover:bg-white/5 hover:text-white transition-colors font-geist" data-animate="" href="#" style={{opacity: '1', filter: 'blur(0px)', transform: 'none', willChange: 'opacity, transform, filter'}}>Relayers</a>
<a className="px-2 py-1.5 rounded-md hover:bg-white/5 hover:text-white transition-colors font-geist" data-animate="" href="#" style={{opacity: '1', filter: 'blur(0px)', transform: 'none', willChange: 'opacity, transform, filter'}}>Pricing</a>
</nav>
<div className="hidden md:flex items-center gap-3">
<button className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-white text-black text-sm font-semibold shadow hover:bg-gray-100 transition-colors font-geist" data-animate="" style={{opacity: '1', filter: 'blur(0px)', transform: 'none', willChange: 'opacity, transform, filter'}}>
<svg className="lucide lucide-zap w-4 h-4" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
            Request Access
          </button>
<button className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-white/10 border border-white/15 text-white text-sm font-medium hover:bg-white/15 transition-colors font-geist" data-animate="" style={{opacity: '1', filter: 'blur(0px)', transform: 'none', willChange: 'opacity, transform, filter'}}>
<svg className="lucide lucide-book-open w-4 h-4" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
            View Docs
          </button>
</div>

<button aria-label="Open menu" className="md:hidden text-white rounded-md p-2 hover:bg-white/10 transition-colors" data-animate="" id="mobileToggle" style={{opacity: '1', filter: 'blur(0px)', transform: 'none', willChange: 'opacity, transform, filter'}}>
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</header>

<div className="md:hidden hidden border-b border-white/10 bg-black/70" id="mobileMenu">
<div className="px-5 py-3 grid gap-1.5 text-sm">
<a className="flex items-center justify-between rounded-md px-3 py-2 hover:bg-white/10 transition-colors" href="#">
<span className="font-geist">Overview</span>
<svg className="lucide lucide-chevrons-right w-4 h-4 opacity-70" data-lucide="chevrons-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 17 5-5-5-5"></path><path d="m13 17 5-5-5-5"></path></svg>
</a>
<a className="flex items-center justify-between rounded-md px-3 py-2 hover:bg-white/10 transition-colors" href="#">
<span className="font-geist">Validators</span>
<svg className="lucide lucide-chevrons-right w-4 h-4 opacity-70" data-lucide="chevrons-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 17 5-5-5-5"></path><path d="m13 17 5-5-5-5"></path></svg>
</a>
<a className="flex items-center justify-between rounded-md px-3 py-2 hover:bg-white/10 transition-colors" href="#">
<span className="font-geist">Relayers</span>
<svg className="lucide lucide-chevrons-right w-4 h-4 opacity-70" data-lucide="chevrons-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 17 5-5-5-5"></path><path d="m13 17 5-5-5-5"></path></svg>
</a>
<a className="flex items-center justify-between rounded-md px-3 py-2 hover:bg-white/10 transition-colors" href="#">
<span className="font-geist">Infra</span>
<svg className="lucide lucide-chevrons-right w-4 h-4 opacity-70" data-lucide="chevrons-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 17 5-5-5-5"></path><path d="m13 17 5-5-5-5"></path></svg>
</a>
<a className="flex items-center justify-between rounded-md px-3 py-2 hover:bg-white/10 transition-colors" href="#">
<span className="font-geist">Pricing</span>
<svg className="lucide lucide-chevrons-right w-4 h-4 opacity-70" data-lucide="chevrons-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 17 5-5-5-5"></path><path d="m13 17 5-5-5-5"></path></svg>
</a>
<a className="flex items-center justify-between rounded-md px-3 py-2 hover:bg-white/10 transition-colors" href="#">
<span className="font-geist">Docs</span>
<svg className="lucide lucide-chevrons-right w-4 h-4 opacity-70" data-lucide="chevrons-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 17 5-5-5-5"></path><path d="m13 17 5-5-5-5"></path></svg>
</a>
<div className="flex gap-2 pt-2">
<button className="flex-1 inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 bg-white text-black text-sm font-semibold shadow hover:bg-gray-100 transition-colors font-geist">
<svg className="lucide lucide-zap w-4 h-4" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
              Access
            </button>
<button className="flex-1 inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 bg-white/10 border border-white/15 text-white text-sm font-medium hover:bg-white/15 transition-colors font-geist">
<svg className="lucide lucide-book-open w-4 h-4" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
              Docs
            </button>
</div>
</div>
</div>

<div className="relative sm:px-6 md:py-16 pt-10 pr-5 pb-10 pl-5">
<div className="grid lg:grid-cols-2 gap-10 items-center">
<div className="">
<div className="mb-4 flex flex-wrap items-center gap-2" data-animate="" style={{opacity: '1', filter: 'blur(0px)', transform: 'none', willChange: 'opacity, transform, filter'}}>
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-orange-100/10 text-orange-200 text-[11px] font-semibold ring-1 ring-white/10 font-geist">
<svg className="lucide lucide-sparkles w-3.5 h-3.5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
                Early Access
              </span>
<span className="px-2.5 py-1 rounded-full bg-white/5 text-gray-200 text-[11px] ring-1 ring-white/10 font-geist">EVM</span>
<span className="px-2.5 py-1 rounded-full bg-white/5 text-gray-200 text-[11px] ring-1 ring-white/10 font-geist">Cosmos</span>
<span className="px-2.5 py-1 rounded-full bg-white/5 text-gray-200 text-[11px] ring-1 ring-white/10 font-geist">Solana</span>
</div>
<h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight font-space-grotesk font-medium" data-animate="" style={{opacity: '1', filter: 'blur(0px)', transform: 'none', willChange: 'opacity, transform, filter'}}>
              Meet QuantaMesh
              
              Orchestrate the secure Web3 edge.
            </h1>
<p className="mt-4 text-gray-200 text-base md:text-lg leading-relaxed max-w-xl font-geist" data-animate="" style={{opacity: '1', filter: 'blur(0px)', transform: 'none', willChange: 'opacity, transform, filter'}}>
              Enterprise-grade validators, elastic RPC, and high-fidelity IBC relayers—engineered for throughput, audited for resilience, and priced for scale.
            </p>
<div className="mt-7 flex flex-wrap items-center gap-3" data-animate="" style={{opacity: '1', filter: 'blur(0px)', transform: 'none', willChange: 'opacity, transform, filter'}}>
<button className="px-5 py-3 rounded-full bg-white text-black font-semibold shadow hover:bg-gray-100 transition-colors inline-flex items-center gap-2 font-geist">
<svg className="lucide lucide-arrow-right w-4.5 h-4.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                Request Access
              </button>
<button className="px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white font-medium hover:bg-white/15 transition-colors inline-flex items-center gap-2 font-geist">
<svg className="lucide lucide-file-text w-4.5 h-4.5" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
                Whitepaper
              </button>
<span className="text-xs text-gray-300 ml-1 font-geist">No wallet required to preview</span>
</div>

<div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4">
<div className="rounded-xl bg-white/[0.03] border border-white/10 p-4 hover:bg-white/[0.05] transition-colors" data-animate="" style={{opacity: '1', filter: 'blur(0px)', transform: 'none', willChange: 'opacity, transform, filter'}}>
<div className="flex items-center gap-2 text-gray-300 text-xs font-geist">
<svg className="lucide lucide-server w-4 h-4" data-lucide="server" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>
                  Active networks
                </div>
<div className="mt-1 text-2xl tracking-tight font-space-grotesk font-medium" style={{}}>42+</div>
</div>
<div className="rounded-xl bg-white/[0.03] border border-white/10 p-4 hover:bg-white/[0.05] transition-colors" data-animate="" style={{opacity: '1', filter: 'blur(0px)', transform: 'none', willChange: 'opacity, transform, filter'}}>
<div className="flex items-center gap-2 text-gray-300 text-xs font-geist">
<svg className="lucide lucide-shield-check w-4 h-4" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
                  Verified uptime
                </div>
<div className="mt-1 text-2xl tracking-tight font-space-grotesk font-medium" style={{}}>99.985%</div>
</div>
<div className="rounded-xl bg-white/[0.03] border border-white/10 p-4 hover:bg-white/[0.05] transition-colors sm:col-span-1 col-span-2" data-animate="" style={{opacity: '1', filter: 'blur(0px)', transform: 'none', willChange: 'opacity, transform, filter'}}>
<div className="flex items-center gap-2 text-gray-300 text-xs font-geist">
<svg className="lucide lucide-zap w-4 h-4" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
                  Avg. propagation
                </div>
<div className="mt-1 text-2xl tracking-tight font-space-grotesk font-medium" style={{}}>180ms</div>
</div>
</div>
</div>

<div className="relative" data-animate="" style={{opacity: '1', filter: 'blur(0px)', transform: 'none', willChange: 'opacity, transform, filter'}}>
<div className="overflow-hidden bg-gradient-to-b from-white/5 to-black/40 border-white/10 border rounded-2xl shadow-2xl backdrop-blur-none">
<div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
<span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></span>
<span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
</div>
<div className="text-xs text-gray-300 font-geist">node-01.quantamesh.sh</div>
<div className="flex items-center gap-2 text-gray-400">
<svg className="lucide lucide-copy w-4 h-4 hover:text-white transition-colors cursor-pointer" data-lucide="copy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="14" x="8" y="8"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>
<svg className="lucide lucide-external-link w-4 h-4 hover:text-white transition-colors cursor-pointer" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</div>
</div>
<div className="md:p-5 pt-4 pr-4 pb-4 pl-4">
<pre className="text-[12px] md:text-[13px] leading-relaxed text-gray-100 font-medium overflow-x-auto"><code className="font-geist">$ qmctl chains add --id cosmoshub --rpc https://rpc.quantamesh.io
$ qmctl validators create --chain cosmoshub --moniker "NovaOps"
$ qmctl relayer init --from cosmoshub --to osmosis --fast --secure

✔ network handshake completed in 172ms
✔ validator "NovaOps" active, block height 18,402,991
✔ relayer channel established (ibc/1 → ibc/7)
                
nodes:
  - name: qm-cosmos-01
    region: fra-1
    status: healthy
  - name: qm-cosmos-02
    region: iad-1
    status: healthy

tip: enable auto-failover with: qmctl failover enable --chain cosmoshub
                </code></pre>
</div>
</div>

<div className="absolute -z-10 -bottom-10 -left-6 w-72 h-72 rounded-full bg-orange-600/40 blur-3xl opacity-70"></div>
</div>
</div>

<div className="mt-12 md:mt-16 border-t border-white/10 pt-8">
<p className="text-xs uppercase tracking-wide text-gray-400 text-center mb-5 font-geist" data-animate="" style={{opacity: '1', filter: 'blur(0px)', transform: 'none', willChange: 'opacity, transform, filter'}}>
            Trusted by engineering teams at
          </p>
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">

<div className="flex items-center justify-center gap-2 rounded-xl bg-white/[0.03] border border-white/10 py-3 hover:bg-white/[0.05] transition-colors" data-animate="" style={{opacity: '1', filter: 'blur(0px)', transform: 'none', willChange: 'opacity, transform, filter'}}>
<span className="text-sm font-semibold tracking-tight font-geist">NX</span>
<span className="text-gray-400 text-xs font-geist">Nexa Labs</span>
</div>
<div className="flex items-center justify-center gap-2 rounded-xl bg-white/[0.03] border border-white/10 py-3 hover:bg-white/[0.05] transition-colors" data-animate="" style={{opacity: '1', filter: 'blur(0px)', transform: 'none', willChange: 'opacity, transform, filter'}}>
<span className="text-sm font-semibold tracking-tight font-geist">OX</span>
<span className="text-gray-400 text-xs font-geist">OrbitX</span>
</div>
<div className="flex items-center justify-center gap-2 rounded-xl bg-white/[0.03] border border-white/10 py-3 hover:bg-white/[0.05] transition-colors" data-animate="" style={{opacity: '1', filter: 'blur(0px)', transform: 'none', willChange: 'opacity, transform, filter'}}>
<span className="text-sm font-semibold tracking-tight font-geist">PD</span>
<span className="text-gray-400 text-xs font-geist">Pylon DAO</span>
</div>
<div className="flex items-center justify-center gap-2 rounded-xl bg-white/[0.03] border border-white/10 py-3 hover:bg-white/[0.05] transition-colors" data-animate="" style={{opacity: '1', filter: 'blur(0px)', transform: 'none', willChange: 'opacity, transform, filter'}}>
<span className="text-sm font-semibold tracking-tight font-geist">KC</span>
<span className="text-gray-400 text-xs font-geist">KiteChain</span>
</div>
<div className="flex items-center justify-center gap-2 rounded-xl bg-white/[0.03] border border-white/10 py-3 hover:bg-white/[0.05] transition-colors md:col-span-1 col-span-2" data-animate="" style={{opacity: '1', filter: 'blur(0px)', transform: 'none', willChange: 'opacity, transform, filter'}}>
<span className="text-sm font-semibold tracking-tight font-geist">FW</span>
<span className="text-gray-400 text-xs font-geist">FluxWorks</span>
</div>
</div>
</div>
</div>

<div className="px-5 sm:px-6 pb-10 md:pb-14">
<div className="grid md:grid-cols-3 gap-5">
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.05] transition-colors" data-animate="" style={{opacity: '1', filter: 'blur(0px)', transform: 'none', willChange: 'opacity, transform, filter'}}>
<div className="flex items-center gap-2 text-sm text-gray-300 font-geist">
<svg className="lucide lucide-key-round w-4.5 h-4.5" data-lucide="key-round" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path><circle cx="16.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
              Private key isolation
            </div>
<h3 className="mt-2 text-xl font-semibold tracking-tight font-geist">Hardened validator ops</h3>
<p className="mt-2 text-sm text-gray-300 leading-relaxed font-geist">FIPS-compliant HSM support, MEV-aware policies, and sealed signing channels reduce attack surface—without sacrificing throughput.</p>
<div className="mt-3 inline-flex items-center gap-1.5 text-xs text-white/90 font-geist">
<svg className="lucide lucide-check w-3.5 h-3.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              SOC 2 controls available
            </div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.05] transition-colors" data-animate="" style={{opacity: '1', filter: 'blur(0px)', transform: 'none', willChange: 'opacity, transform, filter'}}>
<div className="flex items-center gap-2 text-sm text-gray-300 font-geist">
<svg className="lucide lucide-git-branch w-4.5 h-4.5" data-lucide="git-branch" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="6" x2="6" y1="3" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>
              IBC + cross-chain
            </div>
<h3 className="mt-2 text-xl font-semibold tracking-tight font-geist">Deterministic relayers</h3>
<p className="mt-2 text-sm text-gray-300 leading-relaxed font-geist">Auto-healing paths with prioritized packet routing and backpressure management keep channels live—even under bursty load.</p>
<div className="mt-3 inline-flex items-center gap-1.5 text-xs text-white/90 font-geist">
<svg className="lucide lucide-check w-3.5 h-3.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Failover w/ zero-downtime
            </div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.05] transition-colors" data-animate="" style={{opacity: '1', filter: 'blur(0px)', transform: 'none', willChange: 'opacity, transform, filter'}}>
<div className="flex items-center gap-2 text-sm text-gray-300 font-geist">
<svg className="lucide lucide-globe-2 w-4.5 h-4.5" data-lucide="globe-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path><path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"></path><path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path><circle cx="12" cy="12" r="10"></circle></svg>
              Global RPC
            </div>
<h3 className="mt-2 text-xl font-semibold tracking-tight font-geist">Elastic endpoints</h3>
<p className="mt-2 text-sm text-gray-300 leading-relaxed font-geist">Edge-accelerated JSON-RPC with regional stickiness, TLS pinning, and eBPF-based throttling for predictable latency.</p>
<div className="mt-3 inline-flex items-center gap-1.5 text-xs text-white/90 font-geist">
<svg className="lucide lucide-check w-3.5 h-3.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              250k+ RPS burst tested
            </div>
</div>
</div>

<div className="mt-5 grid md:grid-cols-2 gap-5">
<div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-5 hover:bg-white/[0.05] transition-colors" data-animate="" style={{opacity: '1', filter: 'blur(0px)', transform: 'none', willChange: 'opacity, transform, filter'}}>
<div className="flex items-center gap-2 text-sm text-gray-300 font-geist">
<svg className="lucide lucide-bot w-4.5 h-4.5" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
              Policy engine
            </div>
<h3 className="mt-2 text-xl font-semibold tracking-tight font-geist">Declarative automation</h3>
<p className="mt-2 text-sm text-gray-300 leading-relaxed font-geist">Define SLOs, rate limits, and failover rules as code. QuantaMesh enforces policies across fleets with idempotent rollouts.</p>
<ul className="mt-3 text-xs text-gray-300 space-y-1">
<li className="flex items-center gap-2 font-geist"><svg className="lucide lucide-check w-3.5 h-3.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> GitOps-native pipelines</li>
<li className="flex items-center gap-2 font-geist"><svg className="lucide lucide-check w-3.5 h-3.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Rollbacks in &lt; 1s</li>
</ul>
</div>
<div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-5 hover:bg-white/[0.05] transition-colors" data-animate="" style={{opacity: '1', filter: 'blur(0px)', transform: 'none', willChange: 'opacity, transform, filter'}}>
<div className="flex items-center gap-2 text-sm text-gray-300 font-geist">
<svg className="lucide lucide-lock w-4.5 h-4.5" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              Compliance
            </div>
<h3 className="mt-2 text-xl font-semibold tracking-tight font-geist">Audit-ready footprints</h3>
<p className="mt-2 text-sm text-gray-300 leading-relaxed font-geist">Immutable logs with tamper-evident attestations and granular RBAC give auditors the trail they need, instantly.</p>
<div className="mt-3 inline-flex items-center gap-2 text-xs text-white/90">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/10 ring-1 ring-white/10 font-geist">SOC 2</span>
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/10 ring-1 ring-white/10 font-geist">ISO 27001</span>
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/10 ring-1 ring-white/10 font-geist">GDPR</span>
</div>
</div>
</div>
</div><div className="sm:px-6 md:pt-12 md:pb-14 border-white/10 border-t pt-10 pr-5 pb-10 pl-5" id="pricing">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
<div className="max-w-2xl">
<p className="text-xs uppercase tracking-wide text-gray-400 font-geist" data-animate="" style={{opacity: '1', transform: 'none', filter: 'blur(0px)'}}>Pricing</p>
<h2 className="mt-1 text-3xl md:text-4xl tracking-tight font-space-grotesk font-medium" data-animate="" style={{opacity: '1', transform: 'none', filter: 'blur(0px)'}}>Scale from idea to production</h2>
<p className="mt-2 text-sm text-gray-300 font-geist" data-animate="" style={{opacity: '1', transform: 'none', filter: 'blur(0px)'}}>Simple, predictable plans with enterprise-grade controls when you need them.</p>
</div>
<div className="flex items-center gap-3" data-animate="" style={{opacity: '1', transform: 'none', filter: 'blur(0px)'}}>
<div className="inline-flex rounded-full border border-white/10 bg-white/5 p-1">
<button className="px-3 py-1.5 text-sm rounded-full font-geist font-medium bg-white text-black" id="planMonthly">Monthly</button>
<button className="px-3 py-1.5 text-sm rounded-full font-geist text-gray-200 hover:text-white transition-colors" id="planAnnual">Annual</button>
</div>
<span aria-hidden="true" className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-[11px] bg-orange-100/10 text-orange-200 ring-1 ring-white/10 font-geist" id="annualBadge" style={{opacity: '1'}}>
<svg className="lucide lucide-sparkles w-3.5 h-3.5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
        Save 15%
      </span>
</div>
</div>
<div className="mt-6 grid md:grid-cols-3 gap-5">

<div className="rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition-colors p-5" data-animate="" style={{opacity: '1', transform: 'none', filter: 'blur(0px)'}}>
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight font-geist">Starter</h3>
<span className="text-[11px] text-gray-400 font-geist">Best for evaluation</span>
</div>
<div className="mt-3 flex items-baseline gap-1">
<span className="text-3xl tracking-tight font-space-grotesk font-medium" data-annual="0" data-monthly="0" data-price="">$0</span>
<span className="text-sm text-gray-400 font-geist">/mo</span>
</div>
<p className="mt-2 text-sm text-gray-300 font-geist">Get started with shared infrastructure and essential features.</p>
<ul className="mt-4 space-y-2 text-sm text-gray-200">
<li className="flex items-center gap-2 font-geist">
<svg className="lucide lucide-check w-3.5 h-3.5 text-white/90" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
          Shared RPC endpoints (rate limited)
        </li>
<li className="flex items-center gap-2 font-geist">
<svg className="lucide lucide-check w-3.5 h-3.5 text-white/90" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
          1 IBC relayer channel
        </li>
<li className="flex items-center gap-2 font-geist">
<svg className="lucide lucide-check w-3.5 h-3.5 text-white/90" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
          Basic alerts &amp; logs (7-day retention)
        </li>
<li className="flex items-center gap-2 text-gray-400 line-through font-geist">
<svg className="lucide lucide-x w-3.5 h-3.5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
          HSM-backed key isolation
        </li>
</ul>
<button className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 bg-white text-black text-sm font-semibold hover:bg-gray-100 transition-colors font-geist">
<svg className="lucide lucide-rocket w-4 h-4" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
        Start free
      </button>
</div>

<div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] hover:from-white/[0.07] hover:to-white/[0.03] transition-colors p-5 ring-1 ring-white/10" data-animate="" style={{opacity: '1', transform: 'none', filter: 'blur(0px)'}}>
<div className="absolute -top-2 right-4">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-[11px] bg-white text-black font-geist ring-1 ring-black/10">
<svg className="lucide lucide-star w-3.5 h-3.5" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
          Most popular
        </span>
</div>
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight font-geist">Pro</h3>
<span className="text-[11px] text-gray-400 font-geist"><span className="hidden md:inline">Teams </span>building in production</span>
</div>
<div className="mt-3 flex items-baseline gap-1">
<span className="text-3xl tracking-tight font-space-grotesk font-medium" data-annual="254" data-monthly="299" data-price="">$299</span>
<span className="text-sm text-gray-400 font-geist">/mo</span>
</div>
<p className="mt-2 text-sm text-gray-300 font-geist">Dedicated capacity, advanced security, and SLAs.</p>
<ul className="mt-4 space-y-2 text-sm text-gray-200">
<li className="flex items-center gap-2 font-geist">
<svg className="lucide lucide-check w-3.5 h-3.5 text-white/90" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
          Dedicated RPC endpoints + regional stickiness
        </li>
<li className="flex items-center gap-2 font-geist">
<svg className="lucide lucide-check w-3.5 h-3.5 text-white/90" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
          5 IBC relayer channels w/ failover
        </li>
<li className="flex items-center gap-2 font-geist">
<svg className="lucide lucide-check w-3.5 h-3.5 text-white/90" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
          HSM-backed signing + sealed channels
        </li>
<li className="flex items-center gap-2 font-geist">
<svg className="lucide lucide-check w-3.5 h-3.5 text-white/90" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
          SLOs, rate limits, and policy engine
        </li>
<li className="flex items-center gap-2 font-geist">
<svg className="lucide lucide-check w-3.5 h-3.5 text-white/90" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
          Priority support (business hours)
        </li>
</ul>
<button className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 bg-white text-black text-sm font-semibold hover:bg-gray-100 transition-colors font-geist">
<svg className="lucide lucide-zap w-4 h-4" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
        Start Pro
      </button>
<p className="mt-2 text-[11px] text-gray-400 font-geist" id="billingNote">Billed monthly</p>
</div>

<div className="rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition-colors p-5" data-animate="" style={{opacity: '1', transform: 'none', filter: 'blur(0px)'}}>
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight font-geist">Enterprise</h3>
<span className="text-[11px] text-gray-400 font-geist">Compliance &amp; scale</span>
</div>
<div className="mt-3 flex items-baseline gap-2">
<span className="text-3xl tracking-tight font-space-grotesk font-medium">Custom</span>
</div>
<p className="mt-2 text-sm text-gray-300 font-geist">Private regions, tailored SLAs, and audit-ready deployments.</p>
<ul className="mt-4 space-y-2 text-sm text-gray-200">
<li className="flex items-center gap-2 font-geist">
<svg className="lucide lucide-check w-3.5 h-3.5 text-white/90" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
          BYO cloud / on-prem, private peering
        </li>
<li className="flex items-center gap-2 font-geist">
<svg className="lucide lucide-check w-3.5 h-3.5 text-white/90" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
          Unlimited relayer channels + custom routing
        </li>
<li className="flex items-center gap-2 font-geist">
<svg className="lucide lucide-check w-3.5 h-3.5 text-white/90" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
          Dedicated HSMs, KMS integrations
        </li>
<li className="flex items-center gap-2 font-geist">
<svg className="lucide lucide-check w-3.5 h-3.5 text-white/90" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
          SSO/SAML, RBAC, explicit SOC 2/ISO mappings
        </li>
<li className="flex items-center gap-2 font-geist">
<svg className="lucide lucide-check w-3.5 h-3.5 text-white/90" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
          24/7 support with runbooks
        </li>
</ul>
<button className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 bg-white/10 border border-white/15 text-white text-sm font-medium hover:bg-white/15 transition-colors font-geist">
<svg className="lucide lucide-message-square w-4 h-4" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
        Contact sales
      </button>
</div>
</div>
<div className="mt-4 flex items-center gap-2 text-xs text-gray-400 font-geist" data-animate="" style={{opacity: '1', transform: 'none', filter: 'blur(0px)'}}>
<svg className="lucide lucide-info w-3.5 h-3.5" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
    No wallet required to try. Cancel or change plans anytime.
  </div>
</div><div className="sm:px-6 md:pb-14 border-white/10 border-t pt-10 pr-5 pb-10 pl-5" id="faq">
<div className="max-w-3xl">
<p className="text-xs uppercase tracking-wide text-gray-400 font-geist" data-animate="" style={{opacity: '1', transform: 'none', filter: 'blur(0px)'}}>FAQ</p>
<h2 className="mt-1 text-3xl md:text-4xl tracking-tight font-space-grotesk font-medium" data-animate="" style={{opacity: '1', transform: 'none', filter: 'blur(0px)'}}>Answers to common questions</h2>
</div>
<div className="mt-6 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.03]" data-accordion="faq" data-animate="" style={{opacity: '1', transform: 'none', filter: 'blur(0px)'}}>

<div className="p-5">
<button aria-expanded="false" className="w-full flex items-center justify-between text-left group" data-accordion-target="faq-1">
<span className="text-sm md:text-base font-geist font-semibold tracking-tight">How do I migrate my existing validators?</span>
<svg className="lucide lucide-chevron-down w-4.5 h-4.5 text-gray-400 transition-transform group-aria-expanded:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="mt-3 hidden" id="faq-1">
<p className="text-sm text-gray-300 font-geist leading-relaxed">
          Use qmctl to import keys and state snapshots. Our team provides guided cutover with no missed blocks using dual-signing safeguards and staged handoff.
        </p>
</div>
</div>

<div className="p-5">
<button aria-expanded="false" className="w-full flex items-center justify-between text-left group" data-accordion-target="faq-2">
<span className="text-sm md:text-base font-geist font-semibold tracking-tight">Do you support non-EVM chains?</span>
<svg className="lucide lucide-chevron-down w-4.5 h-45 text-gray-400 transition-transform group-aria-expanded:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="mt-3 hidden" id="faq-2">
<p className="text-sm text-gray-300 font-geist leading-relaxed">
          Yes. We support Cosmos SDK chains (IBC-first) andana in addition to EVM networks. New networks are added on a rolling basis.
        </p>
</div>
</div>

<div className="p-5">
<button aria-expanded="false" className="w-full flex items-center justify-between text-left group" data-accordion-target="faq-3">
<span className="text-sm md:text-base font-geist font-semibold tracking-tight">What does “HSM-backed signing” mean in Pro?</span>
<svg className="lucide lucide-chevron-down w-4.5 h-4.5 text-gray-400 transition-transform group-aria-expanded:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="mt-3 hidden" id="faq-3">
<p className="text-sm text-gray-300 font-geist leading-relaxed">
          Your private keys are generated and stored in FIPS-compliant hardware modules. Sign operations never leave the secure boundary, reducing attack surface.
        </p>
</div>
</div>

<div className="p-5">
<button aria-expanded="false" className="w-full flex items-center justify-between text-left group" data-accordion-target="faq-4">
<span className="text-sm md:text-base font-geist font-semibold tracking-tight">Can I run QuantaMesh on-prem?</span>
<svg className="lucide lucide-chevron-down w-4.5 h-4.5 text-gray-400 transition-transform group-aria-expanded:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="mt-3 hidden" id="faq-4">
<p className="text-sm text-gray-300 font-geist leading-relaxed">
          Absolutely. Enterprise deployments support private regions, on-prem clusters, and BYO HSM/KMS with the same control plane and policy engine.
        </p>
</div>
</div>

<div className="p-5">
<button aria-expanded="false" className="w-full flex items-center justify-between text-left group" data-accordion-target="faq-5">
<span className="text-sm md:text-base font-geist font-semibold tracking-tight">Is there an SLA?</span>
<svg className="lucide lucide-chevron-down w-4.5 h-4.5 text-gray-400 transition-transform group-aria-expanded:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="mt-3 hidden" id="faq-5">
<p className="text-sm text-gray-300 font-geist leading-relaxed">
          Pro includes standard SLOs and support. Enterprise offers custom SLAs with 24/7 response, defined RTO/RPO, and runbook-backed incident handling.
        </p>
</div>
</div>
</div>
</div><div className="sm:px-6 md:pb-16 border-white/10 border-t pt-12 pr-5 pb-12 pl-5">
<div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02]">
<div className="absolute inset-0 opacity-20">
<img alt="" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9033cfea-64ae-4e9a-b2ac-3e73d2c2f4af_1600w.jpg"/>
</div>
<div className="relative grid lg:grid-cols-3 gap-6 md:p-8 pt-6 pr-6 pb-6 pl-6">
<div className="lg:col-span-2">
<h3 className="text-2xl md:text-3xl lg:text-4xl tracking-tight font-space-grotesk font-medium" data-animate="" style={{opacity: '1', transform: 'none', filter: 'blur(0px)'}}>
          Ready to orchestrate the secure Web3 edge?
        </h3>
<p className="mt-2 text-sm md:text-base text-gray-200 font-geist max-w-2xl" data-animate="" style={{opacity: '1', transform: 'none', filter: 'blur(0px)'}}>
          Spin up validators, elastic RPC, and IBC relayers in minutes. Audit-ready from day one.
        </p>
<div className="mt-5 flex flex-wrap items-center gap-3" data-animate="" style={{opacity: '1', transform: 'none', filter: 'blur(0px)'}}>
<button className="inline-flex items-center gap-2 rounded-full px-5 py-3 bg-white text-black text-sm font-semibold hover:bg-gray-100 transition-colors font-geist">
<svg className="lucide lucide-arrow-right w-4.5 h-4.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            Request Access
          </button>
<button className="inline-flex items-center gap-2 rounded-full px-5 py-3 bg-white/10 border border-white/15 text-white text-sm font-medium hover:bg-white/15 transition-colors font-geist">
<svg className="lucide lucide-book-open w-4.5 h-4.5" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
            View Docs
          </button>
<span className="text-[11px] text-gray-300 font-geist">No credit card required</span>
</div>
</div>
<div className="lg:col-span-1">
<div className="h-full rounded-2xl border border-white/10 bg-black/50 p-5 backdrop-blur-sm" data-animate="" style={{opacity: '1', transform: 'none', filter: 'blur(0px)'}}>
<div className="flex items-center gap-2 text-sm text-gray-300 font-geist">
<svg className="lucide lucide-terminal w-4.5 h-4.5" data-lucide="terminal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19h8"></path><path d="m4 17 6-6-6-6"></path></svg>
            Quickstart
          </div>
<pre className="mt-3 text-[12px] leading-relaxed text-gray-100 font-medium overflow-x-auto"><code className="font-geist">$ npx qmctl@latest init
$ qmctl chains add --id osmosis
$ qmctl rpc deploy --region fra-1 --dedicated
$ qmctl relayer init --from osmosis --to cosmoshub --secure

✔ ready in &lt; 2 minutes</code></pre>
</div>
</div>
</div>
<div className="pointer-events-none absolute -z-0 -bottom-16 -right-12 w-96 h-96 rounded-full bg-orange-600/40 blur-3xl opacity-60"></div>
</div>
</div>

<footer className="px-5 sm:px-6 py-6 border-t border-white/10 bg-black/60">
<div className="flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2" data-animate="" style={{opacity: '1', filter: 'blur(0px)', transform: 'none', willChange: 'opacity, transform, filter'}}>
<span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white text-black">
<svg className="lucide lucide-shield w-3.5 h-3.5" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</span>
<span className="text-sm font-semibold tracking-tight font-geist">QuantaMesh</span>
<span className="text-sm text-gray-400 font-geist">© 2025</span>
</div>
<div className="flex items-center gap-4 text-sm text-gray-300">
<a className="hover:text-white transition-colors font-geist" href="#">Status</a>
<a className="hover:text-white transition-colors font-geist" href="#">Security</a>
<a className="hover:text-white transition-colors font-geist" href="#">Terms</a>
<a className="hover:text-white transition-colors font-geist" href="#">Privacy</a>
</div>
<div className="flex items-center gap-2">
<a aria-label="GitHub" className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10 border border-white/15 hover:bg-white/15 transition-colors" href="#">
<svg className="lucide lucide-github w-4.5 h-4.5" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
<a aria-label="Twitter" className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10 border border-white/15 hover:bg-white/15 transition-colors" href="#">
<svg className="lucide lucide-twitter w-4.5 h-4.5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a aria-label="Mail" className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10 border border-white/15 hover:bg-white/15 transition-colors" href="#">
<svg className="lucide lucide-mail w-4.5 h-4.5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</a>
</div>
</div>
</footer>
</section>
</main>


    </>
  );
}
