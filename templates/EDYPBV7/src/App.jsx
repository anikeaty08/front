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



  // Small satisfaction sparkline chart
  (function(){
    const ctx = document.getElementById('satisfactionSpark');
    if (!ctx) return;
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug'],
        datasets: [{
          data: [86,88,90,91,92,92,93,94],
          borderColor: '#111827',
          backgroundColor: 'rgba(17,24,39,0.06)',
          tension: 0.4,
          pointRadius: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        elements: { line: { borderWidth: 2 } },
        plugins: { legend: { display: false } },
        scales: {
          x: { display: false },
          y: { display: false }
        },
        interaction: { intersect: false, mode: 'index' }
      }
    });
  })();

  // Initialize lucide icons if not already
  if (window.lucide) lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });



    // Billing toggle behavior
    const monthlyBtn = document.getElementById('monthlyBtn');
    const yearlyBtn = document.getElementById('yearlyBtn');
    const priceAValue = document.getElementById('priceAValue');
    const priceADuration = document.getElementById('priceADuration');
    const priceBValue = document.getElementById('priceBValue');
    const priceBDuration = document.getElementById('priceBDuration');

    let isYearly = false;

    function updatePrices() {
      if (!isYearly) {
        priceAValue.textContent = '$29';
        priceADuration.textContent = '/mo';
        priceBValue.textContent = '$79';
        priceBDuration.textContent = '/seat/mo';

        monthlyBtn.setAttribute('aria-selected', 'true');
        yearlyBtn.setAttribute('aria-selected', 'false');
        monthlyBtn.classList.add('bg-gray-100');
        yearlyBtn.classList.remove('bg-gray-100');
        yearlyBtn.classList.add('bg-white');
      } else {
        priceAValue.textContent = '$278';
        priceADuration.textContent = '/yr';
        priceBValue.textContent = '$758';
        priceBDuration.textContent = '/seat/yr';

        yearlyBtn.setAttribute('aria-selected', 'true');
        monthlyBtn.setAttribute('aria-selected', 'false');
        yearlyBtn.classList.add('bg-gray-100');
        monthlyBtn.classList.remove('bg-gray-100');
        monthlyBtn.classList.add('bg-white');
      }
    }

    monthlyBtn.addEventListener('click', () => {
      if (isYearly) { isYearly = false; updatePrices(); }
    });
    yearlyBtn.addEventListener('click', () => {
      if (!isYearly) { isYearly = true; updatePrices(); }
    });

    updatePrices();

    // Download current HTML as a file
    document.getElementById('downloadBtn').addEventListener('click', () => {
      const html = document.documentElement.outerHTML;
      const blob = new Blob([html], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'orbitstack-pricing.html';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    });

    // Lucide icons
    window.addEventListener('DOMContentLoaded', () => {
      if (window.lucide) lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
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
      
<main className="min-h-screen">

<section className="w-full mx-auto max-w-6xl px-4 py-6">
<div className="overflow-hidden ring-1 ring-black/5 bg-white/70 rounded-2xl mr-auto ml-auto" style={{backdropFilter: 'blur(8px)'}}>
<div className="md:p-8 ring-white/10 text-white bg-black bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f6fde9e4-e981-4763-98e7-63ee9ff8d84f_1600w.jpg)] bg-cover pt-6 pr-6 pb-6 pl-6" style={{backgroundColor: 'rgb(0, 0, 0)', color: 'rgb(230, 238, 248)', backdropFilter: 'blur(8px)'}}>
<div className="flex items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="flex items-center justify-center w-9 h-9 rounded-lg bg-white text-black tracking-tight text-sm font-semibold">OS</div>
<div className="text-sm text-white/80">OrbitStack • Design Infrastructure</div>
</div>
<div className="hidden sm:flex items-center gap-2">
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 text-white hover:bg-white/10 ring-1 ring-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30">
<svg className="lucide lucide-book-open w-4 h-4" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
<span className="text-sm font-medium">Docs</span>
</button>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40">
<svg className="lucide lucide-log-in w-4 h-4" data-lucide="log-in" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 17 5-5-5-5"></path><path d="M15 12H3"></path><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path></svg>
<span className="text-sm font-medium">Sign in</span>
</button>
</div>
</div>
<div className="max-w-2xl text-center mt-12 mr-auto mb-12 ml-auto">
<h1 className="sm:text-4xl md:text-5xl text-3xl font-semibold text-white tracking-tight">Transparent, flexible pricing for growing teams</h1>
<p className="text-white/70 mt-3">Choose a plan that scales from your first concept to your millionth user. Cancel anytime.</p>

</div>
</div>
</div>

<div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6" id="aura-eme3rgvsk">
<div className="relative">
<img alt="Team collaboration" className="w-full h-36 object-cover rounded-xl ring-1 ring-black/5" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/5fb15496-02f2-468a-ad43-14c83684187f_800w.jpg"/>
<div className="absolute inset-0 bg-black/40 rounded-xl flex items-center justify-center">
<div className="text-white text-center">
<div className="text-sm font-medium">Team Sync</div>
<div className="text-xs opacity-80">Real-time collaboration</div>
</div>
</div>
</div>
<div className="relative">
<img alt="3D render" className="w-full h-36 object-cover rounded-xl ring-1 ring-black/5" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c4cad3af-aa22-4b54-a533-ecbea523307a_800w.jpg"/>
<div className="absolute inset-0 bg-black/40 rounded-xl flex items-center justify-center">
<div className="text-white text-center">
<div className="text-sm font-medium">3D Assets</div>
<div className="text-xs opacity-80">Premium mockups</div>
</div>
</div>
</div>
<div className="relative">
<img alt="Minimal interface" className="w-full h-36 object-cover rounded-xl ring-1 ring-black/5" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/35e1d968-74f7-4c60-aa59-4be460bf1b97_800w.jpg"/>
<div className="absolute inset-0 bg-black/40 rounded-xl flex items-center justify-center">
<div className="text-white text-center">
<div className="text-sm font-medium">Clean UI</div>
<div className="text-xs opacity-80">Minimal design system</div>
</div>
</div>
</div>
<div className="relative">
<img alt="Modern workspace" className="w-full h-36 object-cover rounded-xl ring-1 ring-black/5" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0a0b9575-3354-4375-82b0-d9c58b57c504_800w.jpg"/>
<div className="absolute inset-0 bg-black/40 rounded-xl flex items-center justify-center">
<div className="text-white text-center">
<div className="text-sm font-medium">Workspace</div>
<div className="text-xs opacity-80">Modern environment</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full max-w-6xl mr-auto ml-auto pt-6 pr-4 pb-6 pl-4">
<div className="grid md:grid-cols-2 gap-6 items-stretch">

<article className="relative bg-white rounded-2xl shadow-sm ring-1 ring-black/5 p-6 overflow-hidden transition hover:shadow-lg">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-gray-600 tracking-tight">Solo Creator</div>
<div className="text-xs uppercase text-gray-500 flex items-center gap-1.5">
<span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-yellow-100 text-yellow-700 ring-1 ring-yellow-200">
<svg className="lucide lucide-zap w-3.5 h-3.5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</span>
              Popular
            </div>
</div>
<div className="mt-3">
<h2 className="text-2xl sm:text-3xl md:text-2xl font-semibold tracking-tight">Designed for independent makers</h2>
<p className="text-sm text-gray-600 mt-1">Everything you need to ship fast and look professional.</p>
</div>
<div className="mt-5 flex items-baseline gap-2">
<span className="text-5xl font-semibold tracking-tight" id="priceAValue">$29</span>
<span aria-live="polite" className="text-sm text-gray-600" id="priceADuration">/mo</span>
</div>
<div className="mt-4 flex items-center gap-3">
<button aria-label="Start Solo plan" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gray-900 text-white shadow-sm hover:bg-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40">
<svg className="lucide lucide-rocket w-4 h-4" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
<span className="font-medium">Start Solo</span>
</button>
<button aria-label="View features" className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white text-gray-900 ring-1 ring-black/10 hover:bg-gray-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20">
<svg className="lucide lucide-list-checks w-4 h-4" data-lucide="list-checks" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m3 17 2 2 4-4"></path><path d="m3 7 2 2 4-4"></path><path d="M13 6h8"></path><path d="M13 12h8"></path><path d="M13 18h8"></path></svg>
<span className="text-sm font-medium">View features</span>
</button>
</div>
<div className="mt-5 h-px bg-gray-100"></div>
<ul className="mt-4 space-y-2.5 text-gray-800 text-sm">
<li className="flex items-start gap-2.5">
<svg className="lucide lucide-check w-4.5 h-4.5 text-emerald-600 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              For solo creators, freelancers &amp; consultants
            </li>
<li className="flex items-start gap-2.5">
<svg className="lucide lucide-check w-4.5 h-4.5 text-emerald-600 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Web editor, mockups &amp; asset library (5,000+ items)
            </li>
<li className="flex items-start gap-2.5">
<svg className="lucide lucide-check w-4.5 h-4.5 text-emerald-600 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Unlimited drafts &amp; 10 active projects
            </li>
<li className="flex items-start gap-2.5">
<svg className="lucide lucide-check w-4.5 h-4.5 text-emerald-600 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              AI assist for copy &amp; layout (200 credits/mo)
            </li>
<li className="flex items-start gap-2.5">
<svg className="lucide lucide-check w-4.5 h-4.5 text-emerald-600 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Email support 24/7
            </li>
</ul>
</article>

<article className="relative overflow-hidden ring-1 ring-black/5 text-white bg-gray-900 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/046f0e74-64ae-4e71-ae2d-67940e33e9bc_1600w.jpg)] bg-cover rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-sm" style={{}}>
<div className="flex items-center justify-between">
<div className="text-sm font-medium/relaxed" style={{opacity: '.95'}}>Scale Team</div>
<span aria-label="Top pick" className="inline-flex items-center gap-1 text-xs uppercase border border-white/70 rounded px-2 py-1" style={{opacity: '.95'}}>
<svg className="lucide lucide-crown w-3.5 h-3.5" data-lucide="crown" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path><path d="M5 21h14"></path></svg>
              Most Popular
            </span>
</div>
<div className="mt-3">
<h2 className="text-2xl sm:text-3xl md:text-2xl font-semibold tracking-tight">Built for teams and agencies</h2>
<p className="text-sm text-white/85 mt-1">Collaboration, permissions, and performance at scale.</p>
</div>
<div className="mt-5 flex items-baseline gap-2">
<span className="text-5xl font-semibold tracking-tight" id="priceBValue">$79</span>
<span aria-live="polite" className="text-sm text-white/90" id="priceBDuration">/seat/mo</span>
</div>
<div className="mt-4 flex items-center gap-3">
<button aria-label="Start Team plan" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-black text-white shadow-sm hover:bg-gray-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60">
<svg className="lucide lucide-users w-4 h-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="font-medium">Start Team</span>
</button>
<button aria-label="Talk to sales" className="inline-flex gap-2 ring-1 ring-white/20 hover:bg-white/15 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 text-white bg-white/10 rounded-xl pt-3 pr-4 pb-3 pl-4 backdrop-blur-lg items-center">
<svg className="lucide lucide-messages-square w-4 h-4" data-lucide="messages-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path><path d="M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1"></path></svg>
<span className="text-sm font-medium">Talk to sales</span>
</button>
</div>
<div className="mt-5 h-px bg-white/50"></div>
<ul className="mt-4 space-y-2.5 text-white text-sm">
<li className="flex items-start gap-2.5">
<svg className="lucide lucide-check w-4.5 h-4.5 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Everything in Solo
            </li>
<li className="flex items-start gap-2.5">
<svg className="lucide lucide-check w-4.5 h-4.5 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Unlimited projects &amp; shared libraries
            </li>
<li className="flex items-start gap-2.5">
<svg className="lucide lucide-check w-4.5 h-4.5 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Roles, permissions &amp; version history
            </li>
<li className="flex items-start gap-2.5">
<svg className="lucide lucide-check w-4.5 h-4.5 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              SSO/SAML, audit logs &amp; API access
            </li>
<li className="flex items-start gap-2.5">
<svg className="lucide lucide-check w-4.5 h-4.5 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Priority support &amp; 99.9% SLA
            </li>
</ul>
</article>
</div>
<p className="text-center text-gray-600 text-sm mt-5" id="note">
        Prices in USD. Tax excluded where applicable. Discounts auto-applied to yearly billing.
      </p>

</section><section className="w-full max-w-6xl mr-auto ml-auto pt-12 pr-4 pb-12 pl-4">
<div className="ring-1 ring-black/5 bg-white rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-sm" id="aura-eme3rilb9">
<div className="flex items-start justify-between gap-4">
<div className="">
<h3 className="text-2xl font-semibold tracking-tight">Plan comparison</h3>
<p className="text-sm text-gray-600 mt-1">Quick overview of what's included with each plan so you can pick the right fit.</p>
</div>
<div className="hidden sm:flex items-center gap-3">
<span className="text-sm text-gray-500">Pricing basis</span>
<div className="inline-flex rounded-xl bg-gray-50 ring-1 ring-black/5 p-1">
<button className="px-3 py-1 text-sm font-medium bg-white rounded-lg" id="monthlyBtnCompact">Monthly</button>
<button className="px-3 py-1 text-sm font-medium text-gray-600 rounded-lg" id="yearlyBtnCompact">Yearly</button>
</div>
</div>
</div>
<div className="mt-6 overflow-x-auto">
<table className="w-full min-w-[720px] border-collapse text-sm">
<thead className="">
<tr className="text-left text-gray-600 text-xs uppercase">
<th className="py-3 pr-4 bg-gray-50/50">Features</th>
<th className="py-3 px-4 text-center bg-blue-50/30">Solo Creator</th>
<th className="py-3 px-4 text-center bg-purple-50/30">Scale Team</th>
<th className="py-3 px-4 text-center bg-gray-50/50">Enterprise</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">
<tr className="bg-white">
<td className="py-4 pr-4 w-1/2 text-gray-800 bg-gray-50/30">Price</td>
<td className="py-4 px-4 text-center font-semibold text-gray-900 bg-blue-50/20">$29 / mo</td>
<td className="py-4 px-4 text-center font-semibold text-gray-900 bg-purple-50/20">$79 / seat / mo</td>
<td className="py-4 px-4 text-center font-semibold text-gray-900 bg-gray-50/30">Custom</td>
</tr>
<tr className="bg-gray-50/20">
<td className="py-4 pr-4 text-gray-800 bg-gray-50/50">Projects</td>
<td className="py-4 px-4 text-center text-gray-700 bg-blue-50/30">10 active</td>
<td className="py-4 px-4 text-center text-gray-700 bg-purple-50/30">Unlimited</td>
<td className="py-4 px-4 text-center text-gray-700 bg-gray-50/50">Unlimited</td>
</tr>
<tr className="bg-white">
<td className="py-4 pr-4 text-gray-800 bg-gray-50/30">Shared libraries</td>
<td className="py-4 px-4 text-center text-gray-700 bg-blue-50/20">Limited</td>
<td className="py-4 px-4 text-center text-gray-700 bg-purple-50/20">Included</td>
<td className="py-4 px-4 text-center text-gray-700 bg-gray-50/30">Included</td>
</tr>
<tr className="bg-gray-50/20">
<td className="py-4 pr-4 text-gray-800 bg-gray-50/50">Roles &amp; permissions</td>
<td className="py-4 px-4 text-center text-gray-700 bg-blue-50/30">—</td>
<td className="py-4 px-4 text-center bg-purple-50/30">
<svg className="lucide lucide-check w-4 h-4 inline-block text-emerald-600" data-lucide="check" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</td>
<td className="py-4 px-4 text-center bg-gray-50/50">
<svg className="lucide lucide-check w-4 h-4 inline-block text-emerald-600" data-lucide="check" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</td>
</tr>
<tr className="bg-white">
<td className="py-4 pr-4 text-gray-800 bg-gray-50/30">SSO / SAML &amp; audit logs</td>
<td className="py-4 px-4 text-center text-gray-700 bg-blue-50/20">—</td>
<td className="py-4 px-4 text-center bg-purple-50/20">
<svg className="lucide lucide-check w-4 h-4 inline-block text-emerald-600" data-lucide="check" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</td>
<td className="py-4 px-4 text-center bg-gray-50/30">
<svg className="lucide lucide-check w-4 h-4 inline-block text-emerald-600" data-lucide="check" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</td>
</tr>
<tr className="bg-gray-50/20">
<td className="py-4 pr-4 text-gray-800 bg-gray-50/50">AI credits (monthly)</td>
<td className="py-4 px-4 text-center text-gray-700 bg-blue-50/30">200</td>
<td className="py-4 px-4 text-center text-gray-700 bg-purple-50/30">1,000</td>
<td className="py-4 px-4 text-center text-gray-700 bg-gray-50/50">Custom allocation</td>
</tr>
<tr className="bg-white">
<td className="py-4 pr-4 text-gray-800 bg-gray-50/30">Support</td>
<td className="py-4 px-4 text-center text-gray-700 bg-blue-50/20">Email 24/7</td>
<td className="py-4 px-4 text-center text-gray-700 bg-purple-50/20">Priority</td>
<td className="py-4 px-4 text-center text-gray-700 bg-gray-50/30">Dedicated success</td>
</tr>
<tr className="bg-gray-50/20">
<td className="py-4 pr-4 text-gray-800 bg-gray-50/50">Uptime SLA</td>
<td className="py-4 px-4 text-center text-gray-700 bg-blue-50/30">—</td>
<td className="py-4 px-4 text-center text-gray-700 bg-purple-50/30">99.9%</td>
<td className="py-4 px-4 text-center text-gray-700 bg-gray-50/50">99.99%</td>
</tr>
<tr className="bg-white">
<td className="py-4 pr-4 text-gray-800 bg-gray-50/30">Custom onboarding &amp; integrations</td>
<td className="py-4 px-4 text-center text-gray-700 bg-blue-50/20">—</td>
<td className="py-4 px-4 text-center text-gray-700 bg-purple-50/20">Available</td>
<td className="py-4 px-4 text-center text-gray-700 bg-gray-50/30">Included</td>
</tr>
</tbody>
</table>
</div>
<div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-sm text-gray-600">Need a tailored plan? Enterprise includes SLAs, custom billing, and a dedicated onboarding team.</p>
<div className="flex items-center gap-3">
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-900 text-white shadow-sm hover:bg-black transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40">
<svg className="lucide lucide-clipboard-copy w-4 h-4" data-lucide="clipboard-copy" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect height="4" rx="1" width="8" x="8" y="2"></rect><path d="M9 13h6"></path><path d="M12 10v6"></path></svg>
<span className="font-medium">Contact sales</span>
</button>
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-gray-900 ring-1 ring-black/10 hover:bg-gray-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20">
<svg className="lucide lucide-download w-4 h-4" data-lucide="download" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="M7 10 12 15 17 10"></path><path d="M12 15V3"></path></svg>
<span className="text-sm font-medium">Download CSV</span>
</button>
</div>
</div>
</div>
</section>

<section className="w-full mx-auto max-w-6xl px-4 pb-10">
<div className="grid md:grid-cols-3 gap-6">
<div className="md:col-span-1">
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight">Questions, answered</h3>
<p className="text-sm text-gray-600 mt-2">Can’t find what you’re looking for? Our team is here to help 24/7.</p>
</div>
<div className="md:col-span-2 space-y-3">
<details className="group rounded-xl bg-white ring-1 ring-black/5 p-4 open:ring-black/10">
<summary className="flex items-center justify-between cursor-pointer select-none">
<span className="text-sm font-medium text-gray-900">Can I switch between Monthly and Yearly later?</span>
<svg className="lucide lucide-chevron-down w-4 h-4 text-gray-500 group-open:rotate-180 transition-transform" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="text-sm text-gray-600 mt-3">Yes. You can switch plans anytime. When upgrading to Yearly, we’ll prorate your remaining time automatically.</p>
</details>
<details className="group rounded-xl bg-white ring-1 ring-black/5 p-4 open:ring-black/10">
<summary className="flex items-center justify-between cursor-pointer select-none">
<span className="text-sm font-medium text-gray-900">Do you offer trials or refunds?</span>
<svg className="lucide lucide-chevron-down w-4 h-4 text-gray-500 group-open:rotate-180 transition-transform" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="text-sm text-gray-600 mt-3">We offer a 14-day free trial on all plans and a 7‑day refund window if things aren’t working out.</p>
</details>
<details className="group rounded-xl bg-white ring-1 ring-black/5 p-4 open:ring-black/10">
<summary className="flex items-center justify-between cursor-pointer select-none">
<span className="text-sm font-medium text-gray-900">Is the Team price per seat?</span>
<svg className="lucide lucide-chevron-down w-4 h-4 text-gray-500 group-open:rotate-180 transition-transform" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="text-sm text-gray-600 mt-3">Yes. Team pricing is per seat. Volume pricing is available for 25+ seats—contact sales for a tailored quote.</p>
</details>
</div>
</div>
</section><section className="w-full max-w-6xl mr-auto ml-auto px-4 pt-12 pb-6">
<div className="ring-1 ring-black/5 bg-white rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-sm">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
<div className="">
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">What our customers say</h3>
<p className="text-sm text-gray-600 mt-1 max-w-xl">Real feedback from teams and creators using OrbitStack to ship faster, collaborate better, and scale with confidence.</p>
</div>
<div className="flex items-center gap-4">
<div className="hidden sm:flex items-center bg-gray-50 ring-1 ring-black/5 rounded-xl px-3 py-2">
<svg className="lucide lucide-star w-4 h-4 text-amber-500" data-lucide="star" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<div className="text-sm ml-2">
<div className="font-semibold">4.9</div>
<div className="text-xs text-gray-500">Average rating</div>
</div>
</div>
</div>
</div>
<div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="bg-white ring-1 ring-black/5 rounded-xl p-5">
<div className="flex items-start gap-3">
<img alt="Sarah Chen" className="w-10 h-10 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/76672c59-0193-4795-ba6b-96fe356d9cab_800w.jpg" style={{}}/>
<div className="flex-1">
<div className="flex items-center gap-1 mb-2">
<svg className="w-4 h-4 text-amber-500" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-4 h-4 text-amber-500" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-4 h-4 text-amber-500" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-4 h-4 text-amber-500" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-4 h-4 text-amber-500" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
<p className="text-sm text-gray-800 leading-relaxed">"OrbitStack transformed how we approach design systems. The collaboration features are incredible."</p>
<div className="mt-3">
<div className="font-semibold text-gray-900 text-sm">Sarah Chen</div>
<div className="text-xs text-gray-500">Design Director, Zenith</div>
</div>
</div>
</div>
</div>

<div className="bg-gray-900 text-white rounded-xl p-5">
<div className="flex items-start gap-3">
<img alt="Marcus Rodriguez" className="w-10 h-10 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b1c1e147-5d35-4171-9f02-24e269c2c8b3_320w.jpg" style={{}}/>
<div className="flex-1">
<div className="flex items-center gap-1 mb-2">
<svg className="w-4 h-4 text-amber-500" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-4 h-4 text-amber-500" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-4 h-4 text-amber-500" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-4 h-4 text-amber-500" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-4 h-4 text-amber-500" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
<p className="text-sm text-white/90 leading-relaxed">"Switching to OrbitStack cut our design-to-dev handoff time by 60%. Game changer for our workflow."</p>
<div className="mt-3">
<div className="font-semibold text-white text-sm">Marcus Rodriguez</div>
<div className="text-xs text-white/70">Lead Developer, Pulse</div>
</div>
</div>
</div>
</div>

<div className="bg-white ring-1 ring-black/5 rounded-xl p-5">
<div className="flex items-start gap-3">
<img alt="Emma Thompson" className="w-10 h-10 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/bcaefeee-31cd-4c69-9a33-39ee0ad78c30_320w.jpg" style={{}}/>
<div className="flex-1">
<div className="flex items-center gap-1 mb-2">
<svg className="w-4 h-4 text-amber-500" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-4 h-4 text-amber-500" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-4 h-4 text-amber-500" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-4 h-4 text-amber-500" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-4 h-4 text-amber-500" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
<p className="text-sm text-gray-800 leading-relaxed">"The AI-powered features save us hours every week. It's like having a design assistant that never sleeps."</p>
<div className="mt-3">
<div className="font-semibold text-gray-900 text-sm">Emma Thompson</div>
<div className="text-xs text-gray-500">Creative Lead, Flux Studios</div>
</div>
</div>
</div>
</div>
</div>
<div className="mt-6 flex items-center justify-between gap-4">
<p className="text-sm text-gray-600">Thousands of teams trust OrbitStack to power their design infrastructure.</p>
<div className="flex items-center gap-3">
<a className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-900 text-white hover:bg-black transition-colors text-sm font-semibold" href="#">
<svg className="lucide lucide-users w-4 h-4" data-lucide="users" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span>Read more reviews</span>
</a>
</div>
</div>
</div>
</section><footer className="w-full max-w-6xl mr-auto ml-auto px-4 pt-10 pb-12">
<div className="ring-1 ring-white/10 bg-gray-900 text-white rounded-2xl pt-6 pr-6 pb-6 pl-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
<div className="">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-lg bg-white text-black flex items-center justify-center font-semibold tracking-tight">OS</div>
<div className="">
<div className="text-sm font-semibold text-white">OrbitStack</div>
<div className="text-xs text-gray-400">Design infrastructure for modern teams</div>
</div>
</div>
<p className="text-xs text-gray-300 mt-4">Built for creators and enterprise teams. Secure, fast, and delightful to use.</p>
<div className="flex gap-3 mt-4 items-center">
<a aria-label="Twitter" className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-gray-800 ring-1 ring-white/10 text-gray-300 hover:bg-gray-700 hover:text-white" href="#">
<svg className="w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a aria-label="GitHub" className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-gray-800 ring-1 ring-white/10 text-gray-300 hover:bg-gray-700 hover:text-white" href="#">
<svg className="w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
<a aria-label="LinkedIn" className="inline-flex items-center justify-center w-9 h-9 ring-1 ring-white/10 hover:bg-gray-700 text-gray-300 hover:text-white bg-gray-800 rounded-lg" href="#">
<svg className="w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</div>
</div>
<div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-4">
<div className="">
<h4 className="text-sm font-semibold text-white">Product</h4>
<ul className="mt-3 space-y-2 text-sm text-gray-300">
<li><a className="hover:text-white hover:underline" href="#">Features</a></li>
<li><a className="hover:text-white hover:underline" href="#">Pricing</a></li>
<li className=""><a className="hover:text-white hover:underline" href="#">Integrations</a></li>
<li className=""><a className="hover:text-white hover:underline" href="#">API</a></li>
</ul>
</div>
<div className="">
<h4 className="text-sm font-semibold text-white">Company</h4>
<ul className="mt-3 space-y-2 text-sm text-gray-300">
<li className=""><a className="hover:text-white hover:underline" href="#">Careers</a></li>
<li><a className="hover:text-white hover:underline" href="#">Blog</a></li>
<li><a className="hover:text-white hover:underline" href="#">Press</a></li>
</ul>
</div>
<div className="">
<h4 className="text-sm font-semibold text-white">Support</h4>
<ul className="mt-3 space-y-2 text-sm text-gray-300">
<li className=""><a className="hover:text-white hover:underline" href="#">Docs</a></li>
<li><a className="hover:text-white hover:underline" href="#">Contact</a></li>
<li><a className="hover:text-white hover:underline" href="#">Status</a></li>
<li><a className="hover:text-white hover:underline" href="#">Security</a></li>
</ul>
</div>
<div className="">
<h4 className="text-sm font-semibold text-white">Legal</h4>
<ul className="mt-3 space-y-2 text-sm text-gray-300">
<li className=""><a className="hover:text-white hover:underline" href="#">Terms</a></li>
<li><a className="hover:text-white hover:underline" href="#">Privacy</a></li>
<li><a className="hover:text-white hover:underline" href="#">GDPR</a></li>
<li className=""><a className="hover:text-white hover:underline" href="#">Cookies</a></li>
</ul>
</div>
</div>
<div className="">
<h4 className="text-sm font-semibold text-white">Get updates</h4>
<p className="text-xs text-gray-300 mt-2">Join 20,000+ teams receiving product updates and design tips.</p>
<form className="mt-4 flex items-center gap-2" onsubmit="event.preventDefault();">
<label className="sr-only" htmlFor="newsletter">Email</label>
<input className="w-full px-3 py-2 rounded-lg bg-gray-800 ring-1 ring-white/10 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20" id="newsletter" placeholder="you@company.com" type="email"/>
<button aria-label="Subscribe" className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white text-gray-900 text-sm font-semibold hover:bg-gray-100 transition-colors">
<svg className="w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-10 5L2 7"></path></svg>
<span>Subscribe</span>
</button>
</form>
</div>
</div>
<div className="mt-6 border-t border-gray-700 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-xs text-gray-400">© 2025 OrbitStack, Inc. All rights reserved.</p>
<div className="flex items-center gap-4 text-xs text-gray-400">
<a className="hover:text-white hover:underline" href="#">Status</a>
<a className="hover:text-white hover:underline" href="#">Contact support</a>
<a className="hover:text-white hover:underline" href="#">Privacy</a>
</div>
</div>
</div>
</footer>
</main>




    </>
  );
}
