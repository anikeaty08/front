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



      // Lucide icons
      lucide.createIcons({ attrs: { "stroke-width": 1.5 } });

      // Year
      document.getElementById('year').textContent = new Date().getFullYear();

      // Chart.js: Earnings
      const ctx = document.getElementById('earningsChart').getContext('2d');
      const gradient = ctx.createLinearGradient(0, 0, 0, 160);
      gradient.addColorStop(0, 'rgba(144,208,64,0.35)');
      gradient.addColorStop(1, 'rgba(144,208,64,0.00)');

      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
          datasets: [{
            label: 'Commission (€)',
            data: [120, 180, 220, 260, 240, 310, 355],
            borderColor: '#90D040',
            backgroundColor: gradient,
            fill: true,
            tension: 0.35,
            pointRadius: 0,
            borderWidth: 2
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              grid: { color: 'rgba(255,255,255,0.05)' },
              ticks: { color: 'rgba(229,229,229,0.8)', font: { size: 11 } }
            },
            y: {
              grid: { color: 'rgba(255,255,255,0.05)' },
              ticks: { color: 'rgba(229,229,229,0.8)', font: { size: 11 } }
            }
          },
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              backgroundColor: 'rgba(17,17,17,0.9)',
              borderColor: 'rgba(255,255,255,0.08)',
              borderWidth: 1,
              titleColor: '#fff',
              bodyColor: '#d4d4d8',
              padding: 10,
              displayColors: false
            }
          }
        }
      });

      // Pricing toggle binding via peer simulation
      const toggle = document.getElementById('planToggle');
      const rootPricing = document.getElementById('pricing');
      function syncToggle() {
        if (toggle.checked) {
          rootPricing.classList.add('peer-checked');
        } else {
          rootPricing.classList.remove('peer-checked');
        }
      }
      toggle.addEventListener('change', syncToggle);
      syncToggle();
    
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
      

<div bis_size="{&quot;x&quot;:0,&quot;y&quot;:1010,&quot;w&quot;:1312,&quot;h&quot;:955,&quot;abs_x&quot;:480,&quot;abs_y&quot;:1053}" className="pointer-events-none fixed inset-0 z-0">
<div bis_size="{&quot;x&quot;:386,&quot;y&quot;:882,&quot;w&quot;:540,&quot;h&quot;:540,&quot;abs_x&quot;:866,&quot;abs_y&quot;:925}" className="absolute -top-32 left-1/2 h-[540px] w-[540px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(144,208,64,0.12),transparent_60%)] blur-2xl"></div>
</div>

<header bis_size="{&quot;x&quot;:0,&quot;y&quot;:1010,&quot;w&quot;:1312,&quot;h&quot;:64,&quot;abs_x&quot;:480,&quot;abs_y&quot;:1053}" className="sticky top-0 z-50">
<div bis_size="{&quot;x&quot;:16,&quot;y&quot;:1010,&quot;w&quot;:1280,&quot;h&quot;:0,&quot;abs_x&quot;:496,&quot;abs_y&quot;:1053}" className="mx-auto max-w-7xl px-4">
<div bis_size="{&quot;x&quot;:32,&quot;y&quot;:1010,&quot;w&quot;:1248,&quot;h&quot;:0,&quot;abs_x&quot;:512,&quot;abs_y&quot;:1053}" className="mt-4"></div>
</div>
<div bis_size="{&quot;x&quot;:16,&quot;y&quot;:1010,&quot;w&quot;:1280,&quot;h&quot;:64,&quot;abs_x&quot;:496,&quot;abs_y&quot;:1053}" className="mx-auto max-w-7xl rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur supports-[backdrop-filter]:bg-white/5">
<div bis_size="{&quot;x&quot;:33,&quot;y&quot;:1023,&quot;w&quot;:1246,&quot;h&quot;:38,&quot;abs_x&quot;:513,&quot;abs_y&quot;:1066}" className="flex items-center justify-between">
<a bis_size="{&quot;x&quot;:33,&quot;y&quot;:1024,&quot;w&quot;:241,&quot;h&quot;:36,&quot;abs_x&quot;:513,&quot;abs_y&quot;:1067}" className="flex items-center gap-3 group" href="#">
<div bis_size="{&quot;x&quot;:33,&quot;y&quot;:1024,&quot;w&quot;:36,&quot;h&quot;:36,&quot;abs_x&quot;:513,&quot;abs_y&quot;:1067}" className="grid h-9 w-9 place-content-center ring-1 ring-white/10 transition-colors group-hover:bg-white/10 text-zinc-100 bg-white/5 rounded-md">
<span bis_size="{&quot;x&quot;:45,&quot;y&quot;:1030,&quot;w&quot;:10,&quot;h&quot;:24,&quot;abs_x&quot;:525,&quot;abs_y&quot;:1073}" className="text-base font-semibold tracking-tight">A</span>
</div>
<div bis_size="{&quot;x&quot;:81,&quot;y&quot;:1025,&quot;w&quot;:193,&quot;h&quot;:33,&quot;abs_x&quot;:561,&quot;abs_y&quot;:1068}" className="flex flex-col leading-tight">
<span bis_size="{&quot;x&quot;:81,&quot;y&quot;:1025,&quot;w&quot;:193,&quot;h&quot;:18,&quot;abs_x&quot;:561,&quot;abs_y&quot;:1068}" className="text-[15px] font-semibold text-zinc-100 tracking-tight">UP</span>
<span bis_size="{&quot;x&quot;:81,&quot;y&quot;:1043,&quot;w&quot;:193,&quot;h&quot;:15,&quot;abs_x&quot;:561,&quot;abs_y&quot;:1086}" className="text-[11px] font-medium text-zinc-400 tracking-tight">Workspaces for Accounting Teams</span>
</div>
</a>
<nav bis_size="{&quot;x&quot;:487,&quot;y&quot;:1032,&quot;w&quot;:292,&quot;h&quot;:20,&quot;abs_x&quot;:967,&quot;abs_y&quot;:1075}" className="hidden items-center gap-7 md:flex">
<a bis_size="{&quot;x&quot;:487,&quot;y&quot;:1032,&quot;w&quot;:57,&quot;h&quot;:20,&quot;abs_x&quot;:967,&quot;abs_y&quot;:1075}" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors" href="#features">Features</a>
<a bis_size="{&quot;x&quot;:573,&quot;y&quot;:1032,&quot;w&quot;:45,&quot;h&quot;:20,&quot;abs_x&quot;:1053,&quot;abs_y&quot;:1075}" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors" href="#pricing">Pricing</a>
<a bis_size="{&quot;x&quot;:647,&quot;y&quot;:1032,&quot;w&quot;:77,&quot;h&quot;:20,&quot;abs_x&quot;:1127,&quot;abs_y&quot;:1075}" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors" href="#compliance">Compliance</a>
<a bis_size="{&quot;x&quot;:753,&quot;y&quot;:1032,&quot;w&quot;:27,&quot;h&quot;:20,&quot;abs_x&quot;:1233,&quot;abs_y&quot;:1075}" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors" href="#faq">FAQ</a>
</nav>
<div bis_size="{&quot;x&quot;:993,&quot;y&quot;:1023,&quot;w&quot;:285,&quot;h&quot;:38,&quot;abs_x&quot;:1473,&quot;abs_y&quot;:1066}" className="hidden items-center gap-3 md:flex">
<a bis_size="{&quot;x&quot;:1097,&quot;y&quot;:1024,&quot;w&quot;:181,&quot;h&quot;:36,&quot;abs_x&quot;:1577,&quot;abs_y&quot;:1067}" className="inline-flex items-center gap-2 transition-all hover:opacity-90 focus:outline focus:outline-2 focus:outline-[var(--accent)] text-sm font-semibold text-black tracking-tight rounded-md pt-2 pr-4 pb-2 pl-4" href="#demo" style={{backgroundColor: `var(--accent)`}}>Get started for Free<svg bis_size="{&quot;x&quot;:1247,&quot;y&quot;:1034,&quot;w&quot;:16,&quot;h&quot;:16,&quot;abs_x&quot;:1727,&quot;abs_y&quot;:1077}" className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
</div>

<div bis_size="{&quot;x&quot;:0,&quot;y&quot;:1010,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:480,&quot;abs_y&quot;:1053}" className="md:hidden flex items-center gap-2">
<button bis_size="{&quot;x&quot;:0,&quot;y&quot;:1010,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:480,&quot;abs_y&quot;:1053}" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-zinc-200 transition-all hover:bg-white/10 hover:text-white focus:outline focus:outline-2 focus:outline-[var(--accent)]">
<svg bis_size="{&quot;x&quot;:0,&quot;y&quot;:1010,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:480,&quot;abs_y&quot;:1053}" className="lucide lucide-globe h-4 w-4" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</button>
<a bis_size="{&quot;x&quot;:0,&quot;y&quot;:1010,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:480,&quot;abs_y&quot;:1053}" className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold tracking-tight text-black hover:opacity-90 focus:outline focus:outline-2 focus:outline-[var(--accent)]" href="#demo" style={{backgroundColor: `var(--accent)`}}>
              Demo
            </a>
</div>
</div>
</div>
</header>

<section bis_size="{&quot;x&quot;:16,&quot;y&quot;:80,&quot;w&quot;:1280,&quot;h&quot;:805,&quot;abs_x&quot;:496,&quot;abs_y&quot;:123}" className="relative z-10 mx-auto max-w-7xl px-4 pt-16 sm:pt-20">
<div bis_size="{&quot;x&quot;:32,&quot;y&quot;:160,&quot;w&quot;:1248,&quot;h&quot;:599,&quot;abs_x&quot;:512,&quot;abs_y&quot;:203}" className="grid items-center gap-10 lg:grid-cols-2">
<div bis_size="{&quot;x&quot;:32,&quot;y&quot;:160,&quot;w&quot;:604,&quot;h&quot;:599,&quot;abs_x&quot;:512,&quot;abs_y&quot;:203}" className="space-y-7">
<h1 bis_size="{&quot;x&quot;:32,&quot;y&quot;:215,&quot;w&quot;:604,&quot;h&quot;:300,&quot;abs_x&quot;:512,&quot;abs_y&quot;:258}" className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
            Collaborative accounting workspaces built for firms, managers, and clients
          </h1>
<p bis_size="{&quot;x&quot;:32,&quot;y&quot;:543,&quot;w&quot;:604,&quot;h&quot;:84,&quot;abs_x&quot;:512,&quot;abs_y&quot;:586}" className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            Centralize tasks, folders, forms, OCR search, and secure messaging in one place. Automate billing and commissions, archive with audit trails, and stay compliant — from onboarding to payroll and beyond.
          </p>
<div bis_size="{&quot;x&quot;:32,&quot;y&quot;:655,&quot;w&quot;:604,&quot;h&quot;:44,&quot;abs_x&quot;:512,&quot;abs_y&quot;:698}" className="flex flex-col gap-3 sm:flex-row">
<a bis_size="{&quot;x&quot;:32,&quot;y&quot;:655,&quot;w&quot;:189,&quot;h&quot;:44,&quot;abs_x&quot;:512,&quot;abs_y&quot;:698}" className="inline-flex items-center justify-center gap-2 ring-1 ring-black/10 transition-all hover:-translate-y-0.5 hover:opacity-90 focus:outline focus:outline-2 focus:outline-[var(--accent)] text-sm font-semibold text-black tracking-tight rounded-md pt-3 pr-5 pb-3 pl-5 shadow-sm" href="#demo" style={{backgroundColor: `var(--accent)`}}>Get started for Free<svg bis_size="{&quot;x&quot;:185,&quot;y&quot;:669,&quot;w&quot;:16,&quot;h&quot;:16,&quot;abs_x&quot;:665,&quot;abs_y&quot;:712}" className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
</div>
<div bis_size="{&quot;x&quot;:32,&quot;y&quot;:727,&quot;w&quot;:604,&quot;h&quot;:32,&quot;abs_x&quot;:512,&quot;abs_y&quot;:770}" className="flex flex-wrap items-center gap-5 pt-3 text-sm text-zinc-400">
<div bis_size="{&quot;x&quot;:32,&quot;y&quot;:739,&quot;w&quot;:104,&quot;h&quot;:20,&quot;abs_x&quot;:512,&quot;abs_y&quot;:782}" className="inline-flex items-center gap-2">
<svg bis_size="{&quot;x&quot;:32,&quot;y&quot;:741,&quot;w&quot;:16,&quot;h&quot;:16,&quot;abs_x&quot;:512,&quot;abs_y&quot;:784}" className="lucide lucide-shield-check h-4 w-4 text-zinc-300" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
              GDPR-ready
            </div>
<div bis_size="{&quot;x&quot;:156,&quot;y&quot;:739,&quot;w&quot;:101,&quot;h&quot;:20,&quot;abs_x&quot;:636,&quot;abs_y&quot;:782}" className="inline-flex items-center gap-2">
<svg bis_size="{&quot;x&quot;:156,&quot;y&quot;:741,&quot;w&quot;:16,&quot;h&quot;:16,&quot;abs_x&quot;:636,&quot;abs_y&quot;:784}" className="lucide lucide-lock h-4 w-4 text-zinc-300" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              AVV signing
            </div>
<div bis_size="{&quot;x&quot;:278,&quot;y&quot;:739,&quot;w&quot;:146,&quot;h&quot;:20,&quot;abs_x&quot;:758,&quot;abs_y&quot;:782}" className="inline-flex items-center gap-2">
<svg bis_size="{&quot;x&quot;:278,&quot;y&quot;:741,&quot;w&quot;:16,&quot;h&quot;:16,&quot;abs_x&quot;:758,&quot;abs_y&quot;:784}" className="lucide lucide-languages h-4 w-4 text-zinc-300" data-lucide="languages" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m5 8 6 6"></path><path d="m4 14 6-6 2-3"></path><path d="M2 5h12"></path><path d="M7 2h1"></path><path d="m22 22-5-10-5 10"></path><path d="M14 18h6"></path></svg>
              EN • DE • AR (RTL)
            </div>
<div bis_size="{&quot;x&quot;:444,&quot;y&quot;:739,&quot;w&quot;:107,&quot;h&quot;:20,&quot;abs_x&quot;:924,&quot;abs_y&quot;:782}" className="inline-flex items-center gap-2">
<svg bis_size="{&quot;x&quot;:444,&quot;y&quot;:741,&quot;w&quot;:16,&quot;h&quot;:16,&quot;abs_x&quot;:924,&quot;abs_y&quot;:784}" className="lucide lucide-search h-4 w-4 text-zinc-300" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
              OCR full‑text
            </div>
</div>
</div>

<div bis_size="{&quot;x&quot;:676,&quot;y&quot;:255,&quot;w&quot;:604,&quot;h&quot;:408,&quot;abs_x&quot;:1156,&quot;abs_y&quot;:298}" className="relative">
<div bis_size="{&quot;x&quot;:676,&quot;y&quot;:255,&quot;w&quot;:604,&quot;h&quot;:408,&quot;abs_x&quot;:1156,&quot;abs_y&quot;:298}" className="rounded-xl border border-white/10 bg-white/5 p-2 backdrop-blur">
<img alt="Product preview" bis_size="{&quot;x&quot;:685,&quot;y&quot;:264,&quot;w&quot;:586,&quot;h&quot;:390,&quot;abs_x&quot;:1165,&quot;abs_y&quot;:307}" className="h-full w-full rounded-lg object-cover" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop" />
</div>
<div bis_size="{&quot;x&quot;:1168,&quot;y&quot;:223,&quot;w&quot;:144,&quot;h&quot;:144,&quot;abs_x&quot;:1648,&quot;abs_y&quot;:266}" className="pointer-events-none absolute -right-8 -top-8 hidden h-36 w-36 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(144,208,64,0.18),transparent_60%)] blur-xl lg:block"></div>
</div>
</div>

<div bis_size="{&quot;x&quot;:32,&quot;y&quot;:799,&quot;w&quot;:1248,&quot;h&quot;:86,&quot;abs_x&quot;:512,&quot;abs_y&quot;:842}" className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
<div bis_size="{&quot;x&quot;:32,&quot;y&quot;:799,&quot;w&quot;:300,&quot;h&quot;:86,&quot;abs_x&quot;:512,&quot;abs_y&quot;:842}" className="rounded-lg border border-white/10 bg-white/5 p-4">
<div bis_size="{&quot;x&quot;:49,&quot;y&quot;:816,&quot;w&quot;:266,&quot;h&quot;:32,&quot;abs_x&quot;:529,&quot;abs_y&quot;:859}" className="text-2xl font-semibold tracking-tight text-white">6+</div>
<div bis_size="{&quot;x&quot;:49,&quot;y&quot;:848,&quot;w&quot;:266,&quot;h&quot;:20,&quot;abs_x&quot;:529,&quot;abs_y&quot;:891}" className="text-sm text-zinc-400">Core roles</div>
</div>
<div bis_size="{&quot;x&quot;:348,&quot;y&quot;:799,&quot;w&quot;:300,&quot;h&quot;:86,&quot;abs_x&quot;:828,&quot;abs_y&quot;:842}" className="rounded-lg border border-white/10 bg-white/5 p-4">
<div bis_size="{&quot;x&quot;:365,&quot;y&quot;:816,&quot;w&quot;:266,&quot;h&quot;:32,&quot;abs_x&quot;:845,&quot;abs_y&quot;:859}" className="text-2xl font-semibold tracking-tight text-white">10+</div>
<div bis_size="{&quot;x&quot;:365,&quot;y&quot;:848,&quot;w&quot;:266,&quot;h&quot;:20,&quot;abs_x&quot;:845,&quot;abs_y&quot;:891}" className="text-sm text-zinc-400">V1 features</div>
</div>
<div bis_size="{&quot;x&quot;:664,&quot;y&quot;:799,&quot;w&quot;:300,&quot;h&quot;:86,&quot;abs_x&quot;:1144,&quot;abs_y&quot;:842}" className="rounded-lg border border-white/10 bg-white/5 p-4">
<div bis_size="{&quot;x&quot;:681,&quot;y&quot;:816,&quot;w&quot;:266,&quot;h&quot;:32,&quot;abs_x&quot;:1161,&quot;abs_y&quot;:859}" className="text-2xl font-semibold tracking-tight text-white">2</div>
<div bis_size="{&quot;x&quot;:681,&quot;y&quot;:848,&quot;w&quot;:266,&quot;h&quot;:20,&quot;abs_x&quot;:1161,&quot;abs_y&quot;:891}" className="text-sm text-zinc-400">Billing modes</div>
</div>
<div bis_size="{&quot;x&quot;:980,&quot;y&quot;:799,&quot;w&quot;:300,&quot;h&quot;:86,&quot;abs_x&quot;:1460,&quot;abs_y&quot;:842}" className="rounded-lg border border-white/10 bg-white/5 p-4">
<div bis_size="{&quot;x&quot;:997,&quot;y&quot;:816,&quot;w&quot;:266,&quot;h&quot;:32,&quot;abs_x&quot;:1477,&quot;abs_y&quot;:859}" className="text-2xl font-semibold tracking-tight text-white">100%</div>
<div bis_size="{&quot;x&quot;:997,&quot;y&quot;:848,&quot;w&quot;:266,&quot;h&quot;:20,&quot;abs_x&quot;:1477,&quot;abs_y&quot;:891}" className="text-sm text-zinc-400">Audit logged</div>
</div>
</div>
</section>

<section bis_size="{&quot;x&quot;:16,&quot;y&quot;:933,&quot;w&quot;:1280,&quot;h&quot;:0,&quot;abs_x&quot;:496,&quot;abs_y&quot;:976}" className="mx-auto mt-12 max-w-7xl px-4">
</section>

<section bis_size="{&quot;x&quot;:16,&quot;y&quot;:933,&quot;w&quot;:1280,&quot;h&quot;:954,&quot;abs_x&quot;:496,&quot;abs_y&quot;:976}" className="max-w-7xl sm:py-20 mr-auto ml-auto pt-16 pr-4 pb-16 pl-4" id="features">
<div bis_size="{&quot;x&quot;:32,&quot;y&quot;:1013,&quot;w&quot;:1248,&quot;h&quot;:72,&quot;abs_x&quot;:512,&quot;abs_y&quot;:1056}" className="mb-8 flex items-end justify-between">
<div bis_size="{&quot;x&quot;:32,&quot;y&quot;:1013,&quot;w&quot;:743,&quot;h&quot;:72,&quot;abs_x&quot;:512,&quot;abs_y&quot;:1056}" className="">
<h2 bis_size="{&quot;x&quot;:32,&quot;y&quot;:1013,&quot;w&quot;:743,&quot;h&quot;:40,&quot;abs_x&quot;:512,&quot;abs_y&quot;:1056}" className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Everything you need to run modern accounting</h2>
<p bis_size="{&quot;x&quot;:32,&quot;y&quot;:1061,&quot;w&quot;:743,&quot;h&quot;:24,&quot;abs_x&quot;:512,&quot;abs_y&quot;:1104}" className="mt-2 text-zinc-400">From onboarding to billing, tasks to archiving — built around secure workspaces and clear permissions.</p>
</div>
</div>
<div bis_size="{&quot;x&quot;:32,&quot;y&quot;:1117,&quot;w&quot;:1248,&quot;h&quot;:690,&quot;abs_x&quot;:512,&quot;abs_y&quot;:1160}" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

<div bis_size="{&quot;x&quot;:32,&quot;y&quot;:1117,&quot;w&quot;:405,&quot;h&quot;:154,&quot;abs_x&quot;:512,&quot;abs_y&quot;:1160}" className="group rounded-lg border border-white/10 bg-white/5 p-5 transition-colors hover:bg-white/[0.07]">
<div bis_size="{&quot;x&quot;:53,&quot;y&quot;:1138,&quot;w&quot;:363,&quot;h&quot;:28,&quot;abs_x&quot;:533,&quot;abs_y&quot;:1181}" className="flex items-center gap-3">
<svg bis_size="{&quot;x&quot;:53,&quot;y&quot;:1142,&quot;w&quot;:20,&quot;h&quot;:20,&quot;abs_x&quot;:533,&quot;abs_y&quot;:1185}" className="lucide lucide-clipboard-check h-5 w-5 text-zinc-200" data-lucide="clipboard-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="m9 14 2 2 4-4"></path></svg>
<h3 bis_size="{&quot;x&quot;:85,&quot;y&quot;:1138,&quot;w&quot;:149,&quot;h&quot;:28,&quot;abs_x&quot;:565,&quot;abs_y&quot;:1181}" className="text-lg font-semibold tracking-tight text-white">Onboarding & AVV</h3>
</div>
<p bis_size="{&quot;x&quot;:53,&quot;y&quot;:1174,&quot;w&quot;:363,&quot;h&quot;:40,&quot;abs_x&quot;:533,&quot;abs_y&quot;:1217}" className="mt-2 text-sm text-zinc-400">Step‑by‑step setup with skip/support, booking, and required AVV signing before access.</p>
<div bis_size="{&quot;x&quot;:53,&quot;y&quot;:1226,&quot;w&quot;:363,&quot;h&quot;:24,&quot;abs_x&quot;:533,&quot;abs_y&quot;:1269}" className="mt-3 flex flex-wrap gap-2 text-xs">
<span bis_size="{&quot;x&quot;:53,&quot;y&quot;:1226,&quot;w&quot;:185,&quot;h&quot;:24,&quot;abs_x&quot;:533,&quot;abs_y&quot;:1269}" className="rounded-md bg-white/5 px-2 py-1 text-zinc-300 ring-1 ring-white/10">Email confirmation & rate limit</span>
<span bis_size="{&quot;x&quot;:246,&quot;y&quot;:1226,&quot;w&quot;:110,&quot;h&quot;:24,&quot;abs_x&quot;:726,&quot;abs_y&quot;:1269}" className="rounded-md bg-white/5 px-2 py-1 text-zinc-300 ring-1 ring-white/10">Support booking</span>
</div>
</div>

<div bis_size="{&quot;x&quot;:453,&quot;y&quot;:1117,&quot;w&quot;:405,&quot;h&quot;:154,&quot;abs_x&quot;:933,&quot;abs_y&quot;:1160}" className="group rounded-lg border border-white/10 bg-white/5 p-5 transition-colors hover:bg-white/[0.07]">
<div bis_size="{&quot;x&quot;:474,&quot;y&quot;:1138,&quot;w&quot;:363,&quot;h&quot;:28,&quot;abs_x&quot;:954,&quot;abs_y&quot;:1181}" className="flex items-center gap-3">
<svg bis_size="{&quot;x&quot;:474,&quot;y&quot;:1142,&quot;w&quot;:20,&quot;h&quot;:20,&quot;abs_x&quot;:954,&quot;abs_y&quot;:1185}" className="lucide lucide-users h-5 w-5 text-zinc-200" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<h3 bis_size="{&quot;x&quot;:506,&quot;y&quot;:1138,&quot;w&quot;:162,&quot;h&quot;:28,&quot;abs_x&quot;:986,&quot;abs_y&quot;:1181}" className="text-lg font-semibold tracking-tight text-white">Workspaces & Roles</h3>
</div>
<p bis_size="{&quot;x&quot;:474,&quot;y&quot;:1174,&quot;w&quot;:363,&quot;h&quot;:40,&quot;abs_x&quot;:954,&quot;abs_y&quot;:1217}" className="mt-2 text-sm text-zinc-400">One workspace per client, with granular access for Accounting firm, Manager, Accountant, Client.</p>
<div bis_size="{&quot;x&quot;:474,&quot;y&quot;:1226,&quot;w&quot;:363,&quot;h&quot;:24,&quot;abs_x&quot;:954,&quot;abs_y&quot;:1269}" className="mt-3 flex flex-wrap gap-2 text-xs">
<span bis_size="{&quot;x&quot;:474,&quot;y&quot;:1226,&quot;w&quot;:83,&quot;h&quot;:24,&quot;abs_x&quot;:954,&quot;abs_y&quot;:1269}" className="rounded-md bg-white/5 px-2 py-1 text-zinc-300 ring-1 ring-white/10">Participants</span>
<span bis_size="{&quot;x&quot;:565,&quot;y&quot;:1226,&quot;w&quot;:84,&quot;h&quot;:24,&quot;abs_x&quot;:1045,&quot;abs_y&quot;:1269}" className="rounded-md bg-white/5 px-2 py-1 text-zinc-300 ring-1 ring-white/10">Permissions</span>
</div>
</div>

<div bis_size="{&quot;x&quot;:874,&quot;y&quot;:1117,&quot;w&quot;:405,&quot;h&quot;:154,&quot;abs_x&quot;:1354,&quot;abs_y&quot;:1160}" className="group rounded-lg border border-white/10 bg-white/5 p-5 transition-colors hover:bg-white/[0.07]">
<div bis_size="{&quot;x&quot;:895,&quot;y&quot;:1138,&quot;w&quot;:363,&quot;h&quot;:28,&quot;abs_x&quot;:1375,&quot;abs_y&quot;:1181}" className="flex items-center gap-3">
<svg bis_size="{&quot;x&quot;:895,&quot;y&quot;:1142,&quot;w&quot;:20,&quot;h&quot;:20,&quot;abs_x&quot;:1375,&quot;abs_y&quot;:1185}" className="lucide lucide-folder-open h-5 w-5 text-zinc-200" data-lucide="folder-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"></path></svg>
<h3 bis_size="{&quot;x&quot;:927,&quot;y&quot;:1138,&quot;w&quot;:145,&quot;h&quot;:28,&quot;abs_x&quot;:1407,&quot;abs_y&quot;:1181}" className="text-lg font-semibold tracking-tight text-white">Folders & Uploads</h3>
</div>
<p bis_size="{&quot;x&quot;:895,&quot;y&quot;:1174,&quot;w&quot;:363,&quot;h&quot;:40,&quot;abs_x&quot;:1375,&quot;abs_y&quot;:1217}" className="mt-2 text-sm text-zinc-400">Top‑level by firm, subfolders by all. Drag & drop, camera scan, PDF‑only V1, statuses, and audit.</p>
<div bis_size="{&quot;x&quot;:895,&quot;y&quot;:1226,&quot;w&quot;:363,&quot;h&quot;:24,&quot;abs_x&quot;:1375,&quot;abs_y&quot;:1269}" className="mt-3 flex flex-wrap gap-2 text-xs">
<span bis_size="{&quot;x&quot;:895,&quot;y&quot;:1226,&quot;w&quot;:155,&quot;h&quot;:24,&quot;abs_x&quot;:1375,&quot;abs_y&quot;:1269}" className="rounded-md bg-white/5 px-2 py-1 text-zinc-300 ring-1 ring-white/10">Virus & duplicate checks</span>
<span bis_size="{&quot;x&quot;:1059,&quot;y&quot;:1226,&quot;w&quot;:130,&quot;h&quot;:24,&quot;abs_x&quot;:1539,&quot;abs_y&quot;:1269}" className="rounded-md bg-white/5 px-2 py-1 text-zinc-300 ring-1 ring-white/10">Auto‑task on upload</span>
</div>
</div>

<div bis_size="{&quot;x&quot;:32,&quot;y&quot;:1287,&quot;w&quot;:405,&quot;h&quot;:118,&quot;abs_x&quot;:512,&quot;abs_y&quot;:1330}" className="group rounded-lg border border-white/10 bg-white/5 p-5 transition-colors hover:bg-white/[0.07]">
<div bis_size="{&quot;x&quot;:53,&quot;y&quot;:1308,&quot;w&quot;:363,&quot;h&quot;:28,&quot;abs_x&quot;:533,&quot;abs_y&quot;:1351}" className="flex items-center gap-3">
<svg bis_size="{&quot;x&quot;:53,&quot;y&quot;:1312,&quot;w&quot;:20,&quot;h&quot;:20,&quot;abs_x&quot;:533,&quot;abs_y&quot;:1355}" className="lucide lucide-scan-search h-5 w-5 text-zinc-200" data-lucide="scan-search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><circle cx="12" cy="12" r="3"></circle><path d="m16 16-1.9-1.9"></path></svg>
<h3 bis_size="{&quot;x&quot;:85,&quot;y&quot;:1308,&quot;w&quot;:105,&quot;h&quot;:28,&quot;abs_x&quot;:565,&quot;abs_y&quot;:1351}" className="text-lg font-semibold tracking-tight text-white">OCR & Filters</h3>
</div>
<p bis_size="{&quot;x&quot;:53,&quot;y&quot;:1344,&quot;w&quot;:363,&quot;h&quot;:40,&quot;abs_x&quot;:533,&quot;abs_y&quot;:1387}" className="mt-2 text-sm text-zinc-400">Full‑text OCR search with filters for date range, type, folder, and client number.</p>
</div>

<div bis_size="{&quot;x&quot;:453,&quot;y&quot;:1287,&quot;w&quot;:405,&quot;h&quot;:118,&quot;abs_x&quot;:933,&quot;abs_y&quot;:1330}" className="group rounded-lg border border-white/10 bg-white/5 p-5 transition-colors hover:bg-white/[0.07]">
<div bis_size="{&quot;x&quot;:474,&quot;y&quot;:1308,&quot;w&quot;:363,&quot;h&quot;:28,&quot;abs_x&quot;:954,&quot;abs_y&quot;:1351}" className="flex items-center gap-3">
<svg bis_size="{&quot;x&quot;:474,&quot;y&quot;:1312,&quot;w&quot;:20,&quot;h&quot;:20,&quot;abs_x&quot;:954,&quot;abs_y&quot;:1355}" className="lucide lucide-kanban h-5 w-5 text-zinc-200" data-lucide="kanban" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 5v11"></path><path d="M12 5v6"></path><path d="M18 5v14"></path></svg>
<h3 bis_size="{&quot;x&quot;:506,&quot;y&quot;:1308,&quot;w&quot;:141,&quot;h&quot;:28,&quot;abs_x&quot;:986,&quot;abs_y&quot;:1351}" className="text-lg font-semibold tracking-tight text-white">Tasks & Workflow</h3>
</div>
<p bis_size="{&quot;x&quot;:474,&quot;y&quot;:1344,&quot;w&quot;:363,&quot;h&quot;:40,&quot;abs_x&quot;:954,&quot;abs_y&quot;:1387}" className="mt-2 text-sm text-zinc-400">Kanban with drag & drop, default case handlers, substitution rules, and notifications.</p>
</div>

<div bis_size="{&quot;x&quot;:874,&quot;y&quot;:1287,&quot;w&quot;:405,&quot;h&quot;:118,&quot;abs_x&quot;:1354,&quot;abs_y&quot;:1330}" className="group rounded-lg border border-white/10 bg-white/5 p-5 transition-colors hover:bg-white/[0.07]">
<div bis_size="{&quot;x&quot;:895,&quot;y&quot;:1308,&quot;w&quot;:363,&quot;h&quot;:28,&quot;abs_x&quot;:1375,&quot;abs_y&quot;:1351}" className="flex items-center gap-3">
<svg bis_size="{&quot;x&quot;:895,&quot;y&quot;:1312,&quot;w&quot;:20,&quot;h&quot;:20,&quot;abs_x&quot;:1375,&quot;abs_y&quot;:1355}" className="lucide lucide-id-card h-5 w-5 text-zinc-200" data-lucide="id-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10h2"></path><path d="M16 14h2"></path><path d="M6.17 15a3 3 0 0 1 5.66 0"></path><circle cx="9" cy="11" r="2"></circle><rect height="14" rx="2" width="20" x="2" y="5"></rect></svg>
<h3 bis_size="{&quot;x&quot;:927,&quot;y&quot;:1308,&quot;w&quot;:160,&quot;h&quot;:28,&quot;abs_x&quot;:1407,&quot;abs_y&quot;:1351}" className="text-lg font-semibold tracking-tight text-white">Workers & SV Portal</h3>
</div>
<p bis_size="{&quot;x&quot;:895,&quot;y&quot;:1344,&quot;w&quot;:363,&quot;h&quot;:40,&quot;abs_x&quot;:1375,&quot;abs_y&quot;:1387}" className="mt-2 text-sm text-zinc-400">Create, validate, manage workers. Submit Sofort SV Meldung and store confirmations.</p>
</div>

<div bis_size="{&quot;x&quot;:32,&quot;y&quot;:1421,&quot;w&quot;:405,&quot;h&quot;:118,&quot;abs_x&quot;:512,&quot;abs_y&quot;:1464}" className="group rounded-lg border border-white/10 bg-white/5 p-5 transition-colors hover:bg-white/[0.07]">
<div bis_size="{&quot;x&quot;:53,&quot;y&quot;:1442,&quot;w&quot;:363,&quot;h&quot;:28,&quot;abs_x&quot;:533,&quot;abs_y&quot;:1485}" className="flex items-center gap-3">
<svg bis_size="{&quot;x&quot;:53,&quot;y&quot;:1446,&quot;w&quot;:20,&quot;h&quot;:20,&quot;abs_x&quot;:533,&quot;abs_y&quot;:1489}" className="lucide lucide-signature h-5 w-5 text-zinc-200" data-lucide="signature" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 17-2.156-1.868A.5.5 0 0 0 18 15.5v.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1c0-2.545-3.991-3.97-8.5-4a1 1 0 0 0 0 5c4.153 0 4.745-11.295 5.708-13.5a2.5 2.5 0 1 1 3.31 3.284"></path><path d="M3 21h18"></path></svg>
<h3 bis_size="{&quot;x&quot;:85,&quot;y&quot;:1442,&quot;w&quot;:157,&quot;h&quot;:28,&quot;abs_x&quot;:565,&quot;abs_y&quot;:1485}" className="text-lg font-semibold tracking-tight text-white">Forms & Signatures</h3>
</div>
<p bis_size="{&quot;x&quot;:53,&quot;y&quot;:1478,&quot;w&quot;:363,&quot;h&quot;:40,&quot;abs_x&quot;:533,&quot;abs_y&quot;:1521}" className="mt-2 text-sm text-zinc-400">Conditional logic, auto‑fill, in‑app or external signatures, and PDF/CSV output to folders.</p>
</div>

<div bis_size="{&quot;x&quot;:453,&quot;y&quot;:1421,&quot;w&quot;:405,&quot;h&quot;:118,&quot;abs_x&quot;:933,&quot;abs_y&quot;:1464}" className="group rounded-lg border border-white/10 bg-white/5 p-5 transition-colors hover:bg-white/[0.07]">
<div bis_size="{&quot;x&quot;:474,&quot;y&quot;:1442,&quot;w&quot;:363,&quot;h&quot;:28,&quot;abs_x&quot;:954,&quot;abs_y&quot;:1485}" className="flex items-center gap-3">
<svg bis_size="{&quot;x&quot;:474,&quot;y&quot;:1446,&quot;w&quot;:20,&quot;h&quot;:20,&quot;abs_x&quot;:954,&quot;abs_y&quot;:1489}" className="lucide lucide-calendar-check-2 h-5 w-5 text-zinc-200" data-lucide="calendar-check-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><path d="M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"></path><path d="M3 10h18"></path><path d="m16 20 2 2 4-4"></path></svg>
<h3 bis_size="{&quot;x&quot;:506,&quot;y&quot;:1442,&quot;w&quot;:158,&quot;h&quot;:28,&quot;abs_x&quot;:986,&quot;abs_y&quot;:1485}" className="text-lg font-semibold tracking-tight text-white">Book Appointments</h3>
</div>
<p bis_size="{&quot;x&quot;:474,&quot;y&quot;:1478,&quot;w&quot;:363,&quot;h&quot;:40,&quot;abs_x&quot;:954,&quot;abs_y&quot;:1521}" className="mt-2 text-sm text-zinc-400">Clients book times with accountants. Automatic email notifications and calendar holds.</p>
</div>

<div bis_size="{&quot;x&quot;:874,&quot;y&quot;:1421,&quot;w&quot;:405,&quot;h&quot;:118,&quot;abs_x&quot;:1354,&quot;abs_y&quot;:1464}" className="group rounded-lg border border-white/10 bg-white/5 p-5 transition-colors hover:bg-white/[0.07]">
<div bis_size="{&quot;x&quot;:895,&quot;y&quot;:1442,&quot;w&quot;:363,&quot;h&quot;:28,&quot;abs_x&quot;:1375,&quot;abs_y&quot;:1485}" className="flex items-center gap-3">
<svg bis_size="{&quot;x&quot;:895,&quot;y&quot;:1446,&quot;w&quot;:20,&quot;h&quot;:20,&quot;abs_x&quot;:1375,&quot;abs_y&quot;:1489}" className="lucide lucide-receipt-euro h-5 w-5 text-zinc-200" data-lucide="receipt-euro" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"></path><path d="M8 12h5"></path><path d="M16 9.5a4 4 0 1 0 0 5.2"></path></svg>
<h3 bis_size="{&quot;x&quot;:927,&quot;y&quot;:1442,&quot;w&quot;:176,&quot;h&quot;:28,&quot;abs_x&quot;:1407,&quot;abs_y&quot;:1485}" className="text-lg font-semibold tracking-tight text-white">Billing & Commissions</h3>
</div>
<p bis_size="{&quot;x&quot;:895,&quot;y&quot;:1478,&quot;w&quot;:363,&quot;h&quot;:40,&quot;abs_x&quot;:1375,&quot;abs_y&quot;:1521}" className="mt-2 text-sm text-zinc-400">Mandants billed monthly/yearly; BUs earn 10% on base subscriptions with downloadable reports.</p>
</div>

<div bis_size="{&quot;x&quot;:32,&quot;y&quot;:1555,&quot;w&quot;:405,&quot;h&quot;:118,&quot;abs_x&quot;:512,&quot;abs_y&quot;:1598}" className="group rounded-lg border border-white/10 bg-white/5 p-5 transition-colors hover:bg-white/[0.07]">
<div bis_size="{&quot;x&quot;:53,&quot;y&quot;:1576,&quot;w&quot;:363,&quot;h&quot;:28,&quot;abs_x&quot;:533,&quot;abs_y&quot;:1619}" className="flex items-center gap-3">
<svg bis_size="{&quot;x&quot;:53,&quot;y&quot;:1580,&quot;w&quot;:20,&quot;h&quot;:20,&quot;abs_x&quot;:533,&quot;abs_y&quot;:1623}" className="lucide lucide-archive-restore h-5 w-5 text-zinc-200" data-lucide="archive-restore" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="5" rx="1" width="20" x="2" y="3"></rect><path d="M4 8v11a2 2 0 0 0 2 2h2"></path><path d="M20 8v11a2 2 0 0 1-2 2h-2"></path><path d="m9 15 3-3 3 3"></path><path d="M12 12v9"></path></svg>
<h3 bis_size="{&quot;x&quot;:85,&quot;y&quot;:1576,&quot;w&quot;:157,&quot;h&quot;:28,&quot;abs_x&quot;:565,&quot;abs_y&quot;:1619}" className="text-lg font-semibold tracking-tight text-white">Archiving & Restore</h3>
</div>
<p bis_size="{&quot;x&quot;:53,&quot;y&quot;:1612,&quot;w&quot;:363,&quot;h&quot;:40,&quot;abs_x&quot;:533,&quot;abs_y&quot;:1655}" className="mt-2 text-sm text-zinc-400">Year‑end or manual archives with checksums, manifest, search, and one‑click restore.</p>
</div>

<div bis_size="{&quot;x&quot;:453,&quot;y&quot;:1555,&quot;w&quot;:405,&quot;h&quot;:118,&quot;abs_x&quot;:933,&quot;abs_y&quot;:1598}" className="group rounded-lg border border-white/10 bg-white/5 p-5 transition-colors hover:bg-white/[0.07]" id="compliance">
<div bis_size="{&quot;x&quot;:474,&quot;y&quot;:1576,&quot;w&quot;:363,&quot;h&quot;:28,&quot;abs_x&quot;:954,&quot;abs_y&quot;:1619}" className="flex items-center gap-3">
<svg bis_size="{&quot;x&quot;:474,&quot;y&quot;:1580,&quot;w&quot;:20,&quot;h&quot;:20,&quot;abs_x&quot;:954,&quot;abs_y&quot;:1623}" className="lucide lucide-file-clock h-5 w-5 text-zinc-200" data-lucide="file-clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"></path><path d="M8 14v2.2l1.6 1"></path><circle cx="8" cy="16" r="6"></circle></svg>
<h3 bis_size="{&quot;x&quot;:506,&quot;y&quot;:1576,&quot;w&quot;:109,&quot;h&quot;:28,&quot;abs_x&quot;:986,&quot;abs_y&quot;:1619}" className="text-lg font-semibold tracking-tight text-white">GDPR & Audit</h3>
</div>
<p bis_size="{&quot;x&quot;:474,&quot;y&quot;:1612,&quot;w&quot;:363,&quot;h&quot;:40,&quot;abs_x&quot;:954,&quot;abs_y&quot;:1655}" className="mt-2 text-sm text-zinc-400">Consent history, data export, right to be forgotten, personal data access control, activity reports.</p>
</div>

<div bis_size="{&quot;x&quot;:874,&quot;y&quot;:1555,&quot;w&quot;:405,&quot;h&quot;:118,&quot;abs_x&quot;:1354,&quot;abs_y&quot;:1598}" className="group rounded-lg border border-white/10 bg-white/5 p-5 transition-colors hover:bg-white/[0.07]">
<div bis_size="{&quot;x&quot;:895,&quot;y&quot;:1576,&quot;w&quot;:363,&quot;h&quot;:28,&quot;abs_x&quot;:1375,&quot;abs_y&quot;:1619}" className="flex items-center gap-3">
<svg bis_size="{&quot;x&quot;:895,&quot;y&quot;:1580,&quot;w&quot;:20,&quot;h&quot;:20,&quot;abs_x&quot;:1375,&quot;abs_y&quot;:1623}" className="lucide lucide-message-square h-5 w-5 text-zinc-200" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
<h3 bis_size="{&quot;x&quot;:927,&quot;y&quot;:1576,&quot;w&quot;:141,&quot;h&quot;:28,&quot;abs_x&quot;:1407,&quot;abs_y&quot;:1619}" className="text-lg font-semibold tracking-tight text-white">Chat & Templates</h3>
</div>
<p bis_size="{&quot;x&quot;:895,&quot;y&quot;:1612,&quot;w&quot;:363,&quot;h&quot;:40,&quot;abs_x&quot;:1375,&quot;abs_y&quot;:1655}" className="mt-2 text-sm text-zinc-400">One‑on‑one chat, file attachments, message templates (free or paid) with notifications.</p>
</div>

<div bis_size="{&quot;x&quot;:32,&quot;y&quot;:1689,&quot;w&quot;:405,&quot;h&quot;:118,&quot;abs_x&quot;:512,&quot;abs_y&quot;:1732}" className="group rounded-lg border border-white/10 bg-white/5 p-5 transition-colors hover:bg-white/[0.07]">
<div bis_size="{&quot;x&quot;:53,&quot;y&quot;:1710,&quot;w&quot;:363,&quot;h&quot;:28,&quot;abs_x&quot;:533,&quot;abs_y&quot;:1753}" className="flex items-center gap-3">
<svg bis_size="{&quot;x&quot;:53,&quot;y&quot;:1714,&quot;w&quot;:20,&quot;h&quot;:20,&quot;abs_x&quot;:533,&quot;abs_y&quot;:1757}" className="lucide lucide-languages h-5 w-5 text-zinc-200" data-lucide="languages" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m5 8 6 6"></path><path d="m4 14 6-6 2-3"></path><path d="M2 5h12"></path><path d="M7 2h1"></path><path d="m22 22-5-10-5 10"></path><path d="M14 18h6"></path></svg>
<h3 bis_size="{&quot;x&quot;:85,&quot;y&quot;:1710,&quot;w&quot;:95,&quot;h&quot;:28,&quot;abs_x&quot;:565,&quot;abs_y&quot;:1753}" className="text-lg font-semibold tracking-tight text-white">Localization</h3>
</div>
<p bis_size="{&quot;x&quot;:53,&quot;y&quot;:1746,&quot;w&quot;:363,&quot;h&quot;:40,&quot;abs_x&quot;:533,&quot;abs_y&quot;:1789}" className="mt-2 text-sm text-zinc-400">Interface in English, German, Arabic, with full RTL support and persisted language choice.</p>
</div>
</div>
</section>

<section bis_size="{&quot;x&quot;:16,&quot;y&quot;:1887,&quot;w&quot;:1280,&quot;h&quot;:64,&quot;abs_x&quot;:496,&quot;abs_y&quot;:1930}" className="mx-auto max-w-7xl px-4 pb-16" id="use-cases">
</section>

<section bis_size="{&quot;x&quot;:16,&quot;y&quot;:1951,&quot;w&quot;:1280,&quot;h&quot;:688,&quot;abs_x&quot;:496,&quot;abs_y&quot;:1994}" className="mx-auto max-w-7xl px-4 py-16 sm:py-20" id="pricing">
<div bis_size="{&quot;x&quot;:32,&quot;y&quot;:2031,&quot;w&quot;:1248,&quot;h&quot;:72,&quot;abs_x&quot;:512,&quot;abs_y&quot;:2074}" className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
<div bis_size="{&quot;x&quot;:32,&quot;y&quot;:2031,&quot;w&quot;:862,&quot;h&quot;:72,&quot;abs_x&quot;:512,&quot;abs_y&quot;:2074}" className="">
<h2 bis_size="{&quot;x&quot;:32,&quot;y&quot;:2031,&quot;w&quot;:862,&quot;h&quot;:40,&quot;abs_x&quot;:512,&quot;abs_y&quot;:2074}" className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Simple pricing for Mandants, clear commissions for firms</h2>
</div>

<div bis_size="{&quot;x&quot;:1116,&quot;y&quot;:2079,&quot;w&quot;:163,&quot;h&quot;:24,&quot;abs_x&quot;:1596,&quot;abs_y&quot;:2122}" className="flex items-center gap-3">
<span bis_size="{&quot;x&quot;:1116,&quot;y&quot;:2081,&quot;w&quot;:52,&quot;h&quot;:20,&quot;abs_x&quot;:1596,&quot;abs_y&quot;:2124}" className="text-sm text-zinc-400">Monthly</span>
<label bis_size="{&quot;x&quot;:1180,&quot;y&quot;:2079,&quot;w&quot;:48,&quot;h&quot;:24,&quot;abs_x&quot;:1660,&quot;abs_y&quot;:2122}" className="relative inline-flex cursor-pointer items-center">
<input bis_size="{&quot;x&quot;:1179,&quot;y&quot;:2090,&quot;w&quot;:1,&quot;h&quot;:1,&quot;abs_x&quot;:1659,&quot;abs_y&quot;:2133}" className="peer sr-only" id="planToggle" type="checkbox" />
<div bis_size="{&quot;x&quot;:1180,&quot;y&quot;:2079,&quot;w&quot;:48,&quot;h&quot;:24,&quot;abs_x&quot;:1660,&quot;abs_y&quot;:2122}" className="h-6 w-12 rounded-full bg-white/10 ring-1 ring-white/10 transition-colors peer-checked:bg-[var(--accent)]/30"></div>
<div bis_size="{&quot;x&quot;:1183,&quot;y&quot;:2082,&quot;w&quot;:18,&quot;h&quot;:18,&quot;abs_x&quot;:1663,&quot;abs_y&quot;:2125}" className="absolute left-[3px] top-[3px] h-[18px] w-[18px] rounded-full bg-white transition-all peer-checked:translate-x-6"></div>
</label>
<span bis_size="{&quot;x&quot;:1240,&quot;y&quot;:2081,&quot;w&quot;:39,&quot;h&quot;:20,&quot;abs_x&quot;:1720,&quot;abs_y&quot;:2124}" className="text-sm text-zinc-400">Yearly</span>
</div>
</div>
<div bis_size="{&quot;x&quot;:32,&quot;y&quot;:2135,&quot;w&quot;:1248,&quot;h&quot;:342,&quot;abs_x&quot;:512,&quot;abs_y&quot;:2178}" className="grid gap-4 lg:grid-cols-2">


<div bis_size="{&quot;x&quot;:32,&quot;y&quot;:2135,&quot;w&quot;:616,&quot;h&quot;:342,&quot;abs_x&quot;:512,&quot;abs_y&quot;:2178}" className="rounded-xl border border-white/10 bg-white/5 p-6">
<div bis_size="{&quot;x&quot;:57,&quot;y&quot;:2160,&quot;w&quot;:566,&quot;h&quot;:52,&quot;abs_x&quot;:537,&quot;abs_y&quot;:2203}" className="flex items-center justify-between">
<div bis_size="{&quot;x&quot;:57,&quot;y&quot;:2160,&quot;w&quot;:193,&quot;h&quot;:52,&quot;abs_x&quot;:537,&quot;abs_y&quot;:2203}" className="">
<h3 bis_size="{&quot;x&quot;:57,&quot;y&quot;:2160,&quot;w&quot;:193,&quot;h&quot;:28,&quot;abs_x&quot;:537,&quot;abs_y&quot;:2203}" className="text-xl font-semibold tracking-tight text-white">Accounting Firm</h3>
<p bis_size="{&quot;x&quot;:57,&quot;y&quot;:2192,&quot;w&quot;:193,&quot;h&quot;:20,&quot;abs_x&quot;:537,&quot;abs_y&quot;:2235}" className="text-sm text-zinc-400 mt-1">Free to use. Earn commission.</p>
</div>
<svg bis_size="{&quot;x&quot;:603,&quot;y&quot;:2176,&quot;w&quot;:20,&quot;h&quot;:20,&quot;abs_x&quot;:1083,&quot;abs_y&quot;:2219}" className="lucide lucide-wallet h-5 w-5 text-zinc-300" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
</div>
<div bis_size="{&quot;x&quot;:57,&quot;y&quot;:2232,&quot;w&quot;:566,&quot;h&quot;:40,&quot;abs_x&quot;:537,&quot;abs_y&quot;:2275}" className="mt-5 flex items-baseline gap-2">
<div bis_size="{&quot;x&quot;:57,&quot;y&quot;:2232,&quot;w&quot;:69,&quot;h&quot;:40,&quot;abs_x&quot;:537,&quot;abs_y&quot;:2275}" className="text-4xl font-semibold tracking-tight text-white">10%</div>
<div bis_size="{&quot;x&quot;:134,&quot;y&quot;:2250,&quot;w&quot;:293,&quot;h&quot;:20,&quot;abs_x&quot;:614,&quot;abs_y&quot;:2293}" className="text-sm text-zinc-400">commission on each active Mandant base fee</div>
</div>
<ul bis_size="{&quot;x&quot;:57,&quot;y&quot;:2288,&quot;w&quot;:566,&quot;h&quot;:104,&quot;abs_x&quot;:537,&quot;abs_y&quot;:2331}" className="mt-4 space-y-2 text-sm text-zinc-300">
<li bis_size="{&quot;x&quot;:57,&quot;y&quot;:2288,&quot;w&quot;:566,&quot;h&quot;:20,&quot;abs_x&quot;:537,&quot;abs_y&quot;:2331}" className="flex items-center gap-2"><svg bis_size="{&quot;x&quot;:57,&quot;y&quot;:2290,&quot;w&quot;:16,&quot;h&quot;:16,&quot;abs_x&quot;:537,&quot;abs_y&quot;:2333}" className="lucide lucide-check h-4 w-4 text-[var(--accent)]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Monthly commission dashboard</li>
<li bis_size="{&quot;x&quot;:57,&quot;y&quot;:2316,&quot;w&quot;:566,&quot;h&quot;:20,&quot;abs_x&quot;:537,&quot;abs_y&quot;:2359}" className="flex items-center gap-2"><svg bis_size="{&quot;x&quot;:57,&quot;y&quot;:2318,&quot;w&quot;:16,&quot;h&quot;:16,&quot;abs_x&quot;:537,&quot;abs_y&quot;:2361}" className="lucide lucide-check h-4 w-4 text-[var(--accent)]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Reports as PDF/CSV</li>
<li bis_size="{&quot;x&quot;:57,&quot;y&quot;:2344,&quot;w&quot;:566,&quot;h&quot;:20,&quot;abs_x&quot;:537,&quot;abs_y&quot;:2387}" className="flex items-center gap-2"><svg bis_size="{&quot;x&quot;:57,&quot;y&quot;:2346,&quot;w&quot;:16,&quot;h&quot;:16,&quot;abs_x&quot;:537,&quot;abs_y&quot;:2389}" className="lucide lucide-check h-4 w-4 text-[var(--accent)]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Payouts processed monthly</li>
<li bis_size="{&quot;x&quot;:57,&quot;y&quot;:2372,&quot;w&quot;:566,&quot;h&quot;:20,&quot;abs_x&quot;:537,&quot;abs_y&quot;:2415}" className="flex items-center gap-2"><svg bis_size="{&quot;x&quot;:57,&quot;y&quot;:2374,&quot;w&quot;:16,&quot;h&quot;:16,&quot;abs_x&quot;:537,&quot;abs_y&quot;:2417}" className="lucide lucide-check h-4 w-4 text-[var(--accent)]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Stripe payments: cards, SEPA, Apple Pay (region‑based)</li>
</ul>
<div bis_size="{&quot;x&quot;:57,&quot;y&quot;:2416,&quot;w&quot;:566,&quot;h&quot;:36,&quot;abs_x&quot;:537,&quot;abs_y&quot;:2459}" className="mt-6 flex gap-3">
<a bis_size="{&quot;x&quot;:57,&quot;y&quot;:2416,&quot;w&quot;:140,&quot;h&quot;:36,&quot;abs_x&quot;:537,&quot;abs_y&quot;:2459}" className="inline-flex items-center gap-2 hover:opacity-90 focus:outline focus:outline-2 focus:outline-[var(--accent)] text-sm font-semibold text-black tracking-tight rounded-md pt-2 pr-4 pb-2 pl-4" href="#demo" style={{backgroundColor: `var(--accent)`}}>Start for Free<svg bis_size="{&quot;x&quot;:165,&quot;y&quot;:2426,&quot;w&quot;:16,&quot;h&quot;:16,&quot;abs_x&quot;:645,&quot;abs_y&quot;:2469}" className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
</div>
</div>
</div>

<div bis_size="{&quot;x&quot;:32,&quot;y&quot;:2501,&quot;w&quot;:1248,&quot;h&quot;:58,&quot;abs_x&quot;:512,&quot;abs_y&quot;:2544}" className="mx-auto mt-6 max-w-7xl">
</div>
</section>

<section bis_size="{&quot;x&quot;:16,&quot;y&quot;:2639,&quot;w&quot;:1280,&quot;h&quot;:368,&quot;abs_x&quot;:496,&quot;abs_y&quot;:2682}" className="mx-auto max-w-7xl px-4 pb-16">
<div bis_size="{&quot;x&quot;:32,&quot;y&quot;:2639,&quot;w&quot;:1248,&quot;h&quot;:304,&quot;abs_x&quot;:512,&quot;abs_y&quot;:2682}" className="grid gap-6 lg:grid-cols-2">
<div bis_size="{&quot;x&quot;:32,&quot;y&quot;:2639,&quot;w&quot;:612,&quot;h&quot;:304,&quot;abs_x&quot;:512,&quot;abs_y&quot;:2682}" className="rounded-xl border border-white/10 bg-white/5 p-6">
<div bis_size="{&quot;x&quot;:57,&quot;y&quot;:2664,&quot;w&quot;:562,&quot;h&quot;:28,&quot;abs_x&quot;:537,&quot;abs_y&quot;:2707}" className="flex items-center justify-between">
<h3 bis_size="{&quot;x&quot;:57,&quot;y&quot;:2664,&quot;w&quot;:202,&quot;h&quot;:28,&quot;abs_x&quot;:537,&quot;abs_y&quot;:2707}" className="text-xl font-semibold tracking-tight text-white">Your Clients & Earnings</h3>
<svg bis_size="{&quot;x&quot;:599,&quot;y&quot;:2668,&quot;w&quot;:20,&quot;h&quot;:20,&quot;abs_x&quot;:1079,&quot;abs_y&quot;:2711}" className="lucide lucide-bar-chart-3 h-5 w-5 text-zinc-300" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
</div>
<p bis_size="{&quot;x&quot;:57,&quot;y&quot;:2696,&quot;w&quot;:562,&quot;h&quot;:20,&quot;abs_x&quot;:537,&quot;abs_y&quot;:2739}" className="mt-1 text-sm text-zinc-400">Monitor monthly commissions at a glance.</p>
<div bis_size="{&quot;x&quot;:57,&quot;y&quot;:2732,&quot;w&quot;:562,&quot;h&quot;:186,&quot;abs_x&quot;:537,&quot;abs_y&quot;:2775}" className="mt-4 rounded-lg border border-white/10 bg-black/20 p-3">
<div bis_size="{&quot;x&quot;:70,&quot;y&quot;:2745,&quot;w&quot;:536,&quot;h&quot;:160,&quot;abs_x&quot;:550,&quot;abs_y&quot;:2788}" className="">
<canvas bis_size="{&quot;x&quot;:70,&quot;y&quot;:2745,&quot;w&quot;:536,&quot;h&quot;:160,&quot;abs_x&quot;:550,&quot;abs_y&quot;:2788}" className="h-40 w-full" height="320" id="earningsChart" style={{display: `block`, boxSizing: `border-box`, height: `160px`, width: `536px`}} width="1072"></canvas>
</div>
</div>
</div>
<div bis_size="{&quot;x&quot;:668,&quot;y&quot;:2639,&quot;w&quot;:612,&quot;h&quot;:304,&quot;abs_x&quot;:1148,&quot;abs_y&quot;:2682}" className="rounded-xl border border-white/10 bg-white/5 p-6">
<div bis_size="{&quot;x&quot;:693,&quot;y&quot;:2664,&quot;w&quot;:562,&quot;h&quot;:28,&quot;abs_x&quot;:1173,&quot;abs_y&quot;:2707}" className="flex items-center justify-between">
<h3 bis_size="{&quot;x&quot;:693,&quot;y&quot;:2664,&quot;w&quot;:158,&quot;h&quot;:28,&quot;abs_x&quot;:1173,&quot;abs_y&quot;:2707}" className="text-xl font-semibold tracking-tight text-white">Security & Privacy</h3>
<svg bis_size="{&quot;x&quot;:1235,&quot;y&quot;:2668,&quot;w&quot;:20,&quot;h&quot;:20,&quot;abs_x&quot;:1715,&quot;abs_y&quot;:2711}" className="lucide lucide-shield h-5 w-5 text-zinc-300" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</div>
<ul bis_size="{&quot;x&quot;:693,&quot;y&quot;:2704,&quot;w&quot;:562,&quot;h&quot;:116,&quot;abs_x&quot;:1173,&quot;abs_y&quot;:2747}" className="mt-3 space-y-3 text-sm text-zinc-300">
<li bis_size="{&quot;x&quot;:693,&quot;y&quot;:2704,&quot;w&quot;:562,&quot;h&quot;:20,&quot;abs_x&quot;:1173,&quot;abs_y&quot;:2747}" className="flex items-start gap-3"><svg bis_size="{&quot;x&quot;:693,&quot;y&quot;:2706,&quot;w&quot;:16,&quot;h&quot;:16,&quot;abs_x&quot;:1173,&quot;abs_y&quot;:2749}" className="lucide lucide-file-lock-2 mt-0.5 h-4 w-4 text-[var(--accent)]" data-lucide="file-lock-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v1"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><rect height="5" rx="1" width="8" x="2" y="13"></rect><path d="M8 13v-2a2 2 0 1 0-4 0v2"></path></svg> AVV signing required before workspace access</li>
<li bis_size="{&quot;x&quot;:693,&quot;y&quot;:2736,&quot;w&quot;:562,&quot;h&quot;:20,&quot;abs_x&quot;:1173,&quot;abs_y&quot;:2779}" className="flex items-start gap-3"><svg bis_size="{&quot;x&quot;:693,&quot;y&quot;:2738,&quot;w&quot;:16,&quot;h&quot;:16,&quot;abs_x&quot;:1173,&quot;abs_y&quot;:2781}" className="lucide lucide-clipboard-list mt-0.5 h-4 w-4 text-[var(--accent)]" data-lucide="clipboard-list" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="M12 11h4"></path><path d="M12 16h4"></path><path d="M8 11h.01"></path><path d="M8 16h.01"></path></svg> Complete audit log on actions and invoices</li>
<li bis_size="{&quot;x&quot;:693,&quot;y&quot;:2768,&quot;w&quot;:562,&quot;h&quot;:20,&quot;abs_x&quot;:1173,&quot;abs_y&quot;:2811}" className="flex items-start gap-3"><svg bis_size="{&quot;x&quot;:693,&quot;y&quot;:2770,&quot;w&quot;:16,&quot;h&quot;:16,&quot;abs_x&quot;:1173,&quot;abs_y&quot;:2813}" className="lucide lucide-user-round mt-0.5 h-4 w-4 text-[var(--accent)]" data-lucide="user-round" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="8" r="5"></circle><path d="M20 21a8 8 0 0 0-16 0"></path></svg> Client‑centric data visibility and RTL localization</li>
<li bis_size="{&quot;x&quot;:693,&quot;y&quot;:2800,&quot;w&quot;:562,&quot;h&quot;:20,&quot;abs_x&quot;:1173,&quot;abs_y&quot;:2843}" className="flex items-start gap-3"><svg bis_size="{&quot;x&quot;:693,&quot;y&quot;:2802,&quot;w&quot;:16,&quot;h&quot;:16,&quot;abs_x&quot;:1173,&quot;abs_y&quot;:2845}" className="lucide lucide-database mt-0.5 h-4 w-4 text-[var(--accent)]" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg> Archiving with manifest and checksum verification</li>
</ul>
</div>
</div>
</section>

<section bis_size="{&quot;x&quot;:16,&quot;y&quot;:3007,&quot;w&quot;:1280,&quot;h&quot;:64,&quot;abs_x&quot;:496,&quot;abs_y&quot;:3050}" className="mx-auto max-w-7xl px-4 pb-16" id="demo">
</section>

<section bis_size="{&quot;x&quot;:16,&quot;y&quot;:3071,&quot;w&quot;:1280,&quot;h&quot;:389,&quot;abs_x&quot;:496,&quot;abs_y&quot;:3114}" className="mx-auto max-w-7xl px-4 pb-16" id="faq">
<div bis_size="{&quot;x&quot;:32,&quot;y&quot;:3071,&quot;w&quot;:1248,&quot;h&quot;:56,&quot;abs_x&quot;:512,&quot;abs_y&quot;:3114}" className="mb-6">
<h3 bis_size="{&quot;x&quot;:32,&quot;y&quot;:3071,&quot;w&quot;:1248,&quot;h&quot;:32,&quot;abs_x&quot;:512,&quot;abs_y&quot;:3114}" className="text-2xl font-semibold tracking-tight text-white">Frequently asked questions</h3>
<p bis_size="{&quot;x&quot;:32,&quot;y&quot;:3107,&quot;w&quot;:1248,&quot;h&quot;:20,&quot;abs_x&quot;:512,&quot;abs_y&quot;:3150}" className="mt-1 text-sm text-zinc-400">Everything from folders to archiving and GDPR.</p>
</div>
<div bis_size="{&quot;x&quot;:32,&quot;y&quot;:3151,&quot;w&quot;:1248,&quot;h&quot;:245,&quot;abs_x&quot;:512,&quot;abs_y&quot;:3194}" className="divide-y divide-white/10 rounded-xl border border-white/10 bg-white/5">
<details bis_size="{&quot;x&quot;:33,&quot;y&quot;:3152,&quot;w&quot;:1246,&quot;h&quot;:60,&quot;abs_x&quot;:513,&quot;abs_y&quot;:3195}" className="group p-5">
<summary bis_size="{&quot;x&quot;:53,&quot;y&quot;:3172,&quot;w&quot;:1206,&quot;h&quot;:20,&quot;abs_x&quot;:533,&quot;abs_y&quot;:3215}" className="flex cursor-pointer list-none items-center justify-between">
<span bis_size="{&quot;x&quot;:53,&quot;y&quot;:3172,&quot;w&quot;:354,&quot;h&quot;:20,&quot;abs_x&quot;:533,&quot;abs_y&quot;:3215}" className="text-sm font-medium text-zinc-200">Can clients create subfolders and upload documents?</span>
<svg bis_size="{&quot;x&quot;:1243,&quot;y&quot;:3174,&quot;w&quot;:16,&quot;h&quot;:16,&quot;abs_x&quot;:1723,&quot;abs_y&quot;:3217}" className="lucide lucide-chevron-down h-4 w-4 text-zinc-400 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div bis_size="{&quot;x&quot;:53,&quot;y&quot;:3204,&quot;w&quot;:1206,&quot;h&quot;:20,&quot;abs_x&quot;:533,&quot;abs_y&quot;:3247}" className="mt-3 text-sm text-zinc-400">Yes. Clients can create subfolders and upload PDFs. All uploads are validated, stored, and create tasks with notifications.</div>
</details>
<details bis_size="{&quot;x&quot;:33,&quot;y&quot;:3212,&quot;w&quot;:1246,&quot;h&quot;:61,&quot;abs_x&quot;:513,&quot;abs_y&quot;:3255}" className="group p-5">
<summary bis_size="{&quot;x&quot;:53,&quot;y&quot;:3233,&quot;w&quot;:1206,&quot;h&quot;:20,&quot;abs_x&quot;:533,&quot;abs_y&quot;:3276}" className="flex cursor-pointer list-none items-center justify-between">
<span bis_size="{&quot;x&quot;:53,&quot;y&quot;:3233,&quot;w&quot;:358,&quot;h&quot;:20,&quot;abs_x&quot;:533,&quot;abs_y&quot;:3276}" className="text-sm font-medium text-zinc-200">How do paid templates and extras appear on invoices?</span>
<svg bis_size="{&quot;x&quot;:1243,&quot;y&quot;:3235,&quot;w&quot;:16,&quot;h&quot;:16,&quot;abs_x&quot;:1723,&quot;abs_y&quot;:3278}" className="lucide lucide-chevron-down h-4 w-4 text-zinc-400 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div bis_size="{&quot;x&quot;:53,&quot;y&quot;:3265,&quot;w&quot;:1206,&quot;h&quot;:20,&quot;abs_x&quot;:533,&quot;abs_y&quot;:3308}" className="mt-3 text-sm text-zinc-400">When a Mandant selects a paid item, the price is confirmed and the charge is added to the next invoice automatically with an audit record.</div>
</details>
<details bis_size="{&quot;x&quot;:33,&quot;y&quot;:3273,&quot;w&quot;:1246,&quot;h&quot;:61,&quot;abs_x&quot;:513,&quot;abs_y&quot;:3316}" className="group p-5">
<summary bis_size="{&quot;x&quot;:53,&quot;y&quot;:3294,&quot;w&quot;:1206,&quot;h&quot;:20,&quot;abs_x&quot;:533,&quot;abs_y&quot;:3337}" className="flex cursor-pointer list-none items-center justify-between">
<span bis_size="{&quot;x&quot;:53,&quot;y&quot;:3294,&quot;w&quot;:360,&quot;h&quot;:20,&quot;abs_x&quot;:533,&quot;abs_y&quot;:3337}" className="text-sm font-medium text-zinc-200">Can we restore archived files back to working storage?</span>
<svg bis_size="{&quot;x&quot;:1243,&quot;y&quot;:3296,&quot;w&quot;:16,&quot;h&quot;:16,&quot;abs_x&quot;:1723,&quot;abs_y&quot;:3339}" className="lucide lucide-chevron-down h-4 w-4 text-zinc-400 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div bis_size="{&quot;x&quot;:53,&quot;y&quot;:3326,&quot;w&quot;:1206,&quot;h&quot;:20,&quot;abs_x&quot;:533,&quot;abs_y&quot;:3369}" className="mt-3 text-sm text-zinc-400">Yes. Use Archive Search to find items and restore single files or bulk periods with checksum verification and audit logs.</div>
</details>
<details bis_size="{&quot;x&quot;:33,&quot;y&quot;:3334,&quot;w&quot;:1246,&quot;h&quot;:61,&quot;abs_x&quot;:513,&quot;abs_y&quot;:3377}" className="group p-5">
<summary bis_size="{&quot;x&quot;:53,&quot;y&quot;:3355,&quot;w&quot;:1206,&quot;h&quot;:20,&quot;abs_x&quot;:533,&quot;abs_y&quot;:3398}" className="flex cursor-pointer list-none items-center justify-between">
<span bis_size="{&quot;x&quot;:53,&quot;y&quot;:3355,&quot;w&quot;:309,&quot;h&quot;:20,&quot;abs_x&quot;:533,&quot;abs_y&quot;:3398}" className="text-sm font-medium text-zinc-200">Do you support Arabic and right‑to‑left layout?</span>
<svg bis_size="{&quot;x&quot;:1243,&quot;y&quot;:3357,&quot;w&quot;:16,&quot;h&quot;:16,&quot;abs_x&quot;:1723,&quot;abs_y&quot;:3400}" className="lucide lucide-chevron-down h-4 w-4 text-zinc-400 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div bis_size="{&quot;x&quot;:53,&quot;y&quot;:3387,&quot;w&quot;:1206,&quot;h&quot;:20,&quot;abs_x&quot;:533,&quot;abs_y&quot;:3430}" className="mt-3 text-sm text-zinc-400">Yes, the interface supports EN/DE/AR with correct RTL rendering and automatic persistence across sessions.</div>
</details>
</div>
</section>

<footer bis_size="{&quot;x&quot;:0,&quot;y&quot;:3460,&quot;w&quot;:1312,&quot;h&quot;:294,&quot;abs_x&quot;:480,&quot;abs_y&quot;:3503}" className="border-t border-white/10">
<div bis_size="{&quot;x&quot;:16,&quot;y&quot;:3461,&quot;w&quot;:1280,&quot;h&quot;:293,&quot;abs_x&quot;:496,&quot;abs_y&quot;:3504}" className="mx-auto max-w-7xl px-4 py-10">
<div bis_size="{&quot;x&quot;:32,&quot;y&quot;:3501,&quot;w&quot;:1248,&quot;h&quot;:132,&quot;abs_x&quot;:512,&quot;abs_y&quot;:3544}" className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
<div bis_size="{&quot;x&quot;:32,&quot;y&quot;:3501,&quot;w&quot;:288,&quot;h&quot;:132,&quot;abs_x&quot;:512,&quot;abs_y&quot;:3544}" className="space-y-3">
<div bis_size="{&quot;x&quot;:32,&quot;y&quot;:3501,&quot;w&quot;:288,&quot;h&quot;:32,&quot;abs_x&quot;:512,&quot;abs_y&quot;:3544}" className="flex items-center gap-3">
<div bis_size="{&quot;x&quot;:32,&quot;y&quot;:3501,&quot;w&quot;:32,&quot;h&quot;:32,&quot;abs_x&quot;:512,&quot;abs_y&quot;:3544}" className="grid h-8 w-8 place-content-center rounded-md ring-1 ring-white/10 bg-white/5 text-zinc-100">
<span bis_size="{&quot;x&quot;:43,&quot;y&quot;:3507,&quot;w&quot;:8,&quot;h&quot;:19,&quot;abs_x&quot;:523,&quot;abs_y&quot;:3550}" className="text-[13px] font-semibold tracking-tight">A</span>
</div>
<span bis_size="{&quot;x&quot;:76,&quot;y&quot;:3507,&quot;w&quot;:79,&quot;h&quot;:20,&quot;abs_x&quot;:556,&quot;abs_y&quot;:3550}" className="text-sm font-semibold text-white tracking-tight">UP</span>
</div>
<p bis_size="{&quot;x&quot;:32,&quot;y&quot;:3545,&quot;w&quot;:288,&quot;h&quot;:60,&quot;abs_x&quot;:512,&quot;abs_y&quot;:3588}" className="text-sm text-zinc-400">Secure workspaces for firms and clients to collaborate on the entire accounting lifecycle.</p>
<div bis_size="{&quot;x&quot;:32,&quot;y&quot;:3617,&quot;w&quot;:288,&quot;h&quot;:16,&quot;abs_x&quot;:512,&quot;abs_y&quot;:3660}" className="flex gap-3 text-zinc-400">
<svg bis_size="{&quot;x&quot;:32,&quot;y&quot;:3617,&quot;w&quot;:16,&quot;h&quot;:16,&quot;abs_x&quot;:512,&quot;abs_y&quot;:3660}" className="lucide lucide-twitter h-4 w-4 hover:text-white" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
<svg bis_size="{&quot;x&quot;:60,&quot;y&quot;:3617,&quot;w&quot;:16,&quot;h&quot;:16,&quot;abs_x&quot;:540,&quot;abs_y&quot;:3660}" className="lucide lucide-github h-4 w-4 hover:text-white" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
<svg bis_size="{&quot;x&quot;:88,&quot;y&quot;:3617,&quot;w&quot;:16,&quot;h&quot;:16,&quot;abs_x&quot;:568,&quot;abs_y&quot;:3660}" className="lucide lucide-linkedin h-4 w-4 hover:text-white" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</div>
</div>
<div bis_size="{&quot;x&quot;:352,&quot;y&quot;:3501,&quot;w&quot;:288,&quot;h&quot;:132,&quot;abs_x&quot;:832,&quot;abs_y&quot;:3544}" className="space-y-3">
<h4 bis_size="{&quot;x&quot;:352,&quot;y&quot;:3501,&quot;w&quot;:288,&quot;h&quot;:20,&quot;abs_x&quot;:832,&quot;abs_y&quot;:3544}" className="text-sm font-semibold tracking-tight text-white">Product</h4>
<ul bis_size="{&quot;x&quot;:352,&quot;y&quot;:3533,&quot;w&quot;:288,&quot;h&quot;:92,&quot;abs_x&quot;:832,&quot;abs_y&quot;:3576}" className="space-y-1 text-sm text-zinc-400">
<li bis_size="{&quot;x&quot;:352,&quot;y&quot;:3533,&quot;w&quot;:288,&quot;h&quot;:20,&quot;abs_x&quot;:832,&quot;abs_y&quot;:3576}" className=""><a bis_size="{&quot;x&quot;:352,&quot;y&quot;:3534,&quot;w&quot;:56,&quot;h&quot;:16,&quot;abs_x&quot;:832,&quot;abs_y&quot;:3577}" className="hover:text-white" href="#features">Features</a></li>
<li bis_size="{&quot;x&quot;:352,&quot;y&quot;:3557,&quot;w&quot;:288,&quot;h&quot;:20,&quot;abs_x&quot;:832,&quot;abs_y&quot;:3600}" className=""><a bis_size="{&quot;x&quot;:352,&quot;y&quot;:3558,&quot;w&quot;:68,&quot;h&quot;:16,&quot;abs_x&quot;:832,&quot;abs_y&quot;:3601}" className="hover:text-white" href="#use-cases">Use Cases</a></li>
<li bis_size="{&quot;x&quot;:352,&quot;y&quot;:3581,&quot;w&quot;:288,&quot;h&quot;:20,&quot;abs_x&quot;:832,&quot;abs_y&quot;:3624}"><a bis_size="{&quot;x&quot;:352,&quot;y&quot;:3582,&quot;w&quot;:44,&quot;h&quot;:16,&quot;abs_x&quot;:832,&quot;abs_y&quot;:3625}" className="hover:text-white" href="#pricing">Pricing</a></li>
<li bis_size="{&quot;x&quot;:352,&quot;y&quot;:3605,&quot;w&quot;:288,&quot;h&quot;:20,&quot;abs_x&quot;:832,&quot;abs_y&quot;:3648}" className=""><a bis_size="{&quot;x&quot;:352,&quot;y&quot;:3606,&quot;w&quot;:26,&quot;h&quot;:16,&quot;abs_x&quot;:832,&quot;abs_y&quot;:3649}" className="hover:text-white" href="#faq">FAQ</a></li>
</ul>
</div>
<div bis_size="{&quot;x&quot;:672,&quot;y&quot;:3501,&quot;w&quot;:288,&quot;h&quot;:132,&quot;abs_x&quot;:1152,&quot;abs_y&quot;:3544}" className="space-y-3">
<h4 bis_size="{&quot;x&quot;:672,&quot;y&quot;:3501,&quot;w&quot;:288,&quot;h&quot;:20,&quot;abs_x&quot;:1152,&quot;abs_y&quot;:3544}" className="text-sm font-semibold tracking-tight text-white">Compliance</h4>
<ul bis_size="{&quot;x&quot;:672,&quot;y&quot;:3533,&quot;w&quot;:288,&quot;h&quot;:92,&quot;abs_x&quot;:1152,&quot;abs_y&quot;:3576}" className="space-y-1 text-sm text-zinc-400">
<li bis_size="{&quot;x&quot;:672,&quot;y&quot;:3533,&quot;w&quot;:288,&quot;h&quot;:20,&quot;abs_x&quot;:1152,&quot;abs_y&quot;:3576}"><a bis_size="{&quot;x&quot;:672,&quot;y&quot;:3534,&quot;w&quot;:38,&quot;h&quot;:16,&quot;abs_x&quot;:1152,&quot;abs_y&quot;:3577}" className="hover:text-white" href="#compliance">GDPR</a></li>
<li bis_size="{&quot;x&quot;:672,&quot;y&quot;:3557,&quot;w&quot;:288,&quot;h&quot;:20,&quot;abs_x&quot;:1152,&quot;abs_y&quot;:3600}"><a bis_size="{&quot;x&quot;:672,&quot;y&quot;:3558,&quot;w&quot;:26,&quot;h&quot;:16,&quot;abs_x&quot;:1152,&quot;abs_y&quot;:3601}" className="hover:text-white" href="#compliance">AVV</a></li>
<li bis_size="{&quot;x&quot;:672,&quot;y&quot;:3581,&quot;w&quot;:288,&quot;h&quot;:20,&quot;abs_x&quot;:1152,&quot;abs_y&quot;:3624}"><a bis_size="{&quot;x&quot;:672,&quot;y&quot;:3582,&quot;w&quot;:68,&quot;h&quot;:16,&quot;abs_x&quot;:1152,&quot;abs_y&quot;:3625}" className="hover:text-white" href="#compliance">Audit Logs</a></li>
<li bis_size="{&quot;x&quot;:672,&quot;y&quot;:3605,&quot;w&quot;:288,&quot;h&quot;:20,&quot;abs_x&quot;:1152,&quot;abs_y&quot;:3648}"><a bis_size="{&quot;x&quot;:672,&quot;y&quot;:3606,&quot;w&quot;:93,&quot;h&quot;:16,&quot;abs_x&quot;:1152,&quot;abs_y&quot;:3649}" className="hover:text-white" href="#compliance">Data Requests</a></li>
</ul>
</div>
<div bis_size="{&quot;x&quot;:992,&quot;y&quot;:3501,&quot;w&quot;:288,&quot;h&quot;:132,&quot;abs_x&quot;:1472,&quot;abs_y&quot;:3544}" className="space-y-3">
<h4 bis_size="{&quot;x&quot;:992,&quot;y&quot;:3501,&quot;w&quot;:288,&quot;h&quot;:20,&quot;abs_x&quot;:1472,&quot;abs_y&quot;:3544}" className="text-sm font-semibold tracking-tight text-white">Language</h4>
<div bis_size="{&quot;x&quot;:992,&quot;y&quot;:3533,&quot;w&quot;:288,&quot;h&quot;:30,&quot;abs_x&quot;:1472,&quot;abs_y&quot;:3576}" className="flex gap-2">
<button bis_size="{&quot;x&quot;:992,&quot;y&quot;:3533,&quot;w&quot;:42,&quot;h&quot;:30,&quot;abs_x&quot;:1472,&quot;abs_y&quot;:3576}" className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-300 transition hover:bg-white/10 focus:outline focus:outline-2 focus:outline-[var(--accent)]">EN</button>
<button bis_size="{&quot;x&quot;:1042,&quot;y&quot;:3533,&quot;w&quot;:41,&quot;h&quot;:30,&quot;abs_x&quot;:1522,&quot;abs_y&quot;:3576}" className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-300 transition hover:bg-white/10 focus:outline focus:outline-2 focus:outline-[var(--accent)]">DE</button>
<button bis_size="{&quot;x&quot;:1091,&quot;y&quot;:3533,&quot;w&quot;:41,&quot;h&quot;:30,&quot;abs_x&quot;:1571,&quot;abs_y&quot;:3576}" className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-300 transition hover:bg-white/10 focus:outline focus:outline-2 focus:outline-[var(--accent)]">AR</button>
</div>
<p bis_size="{&quot;x&quot;:992,&quot;y&quot;:3575,&quot;w&quot;:288,&quot;h&quot;:16,&quot;abs_x&quot;:1472,&quot;abs_y&quot;:3618}" className="text-xs text-zinc-500">Arabic displays in RTL.</p>
</div>
</div>
<div bis_size="{&quot;x&quot;:32,&quot;y&quot;:3673,&quot;w&quot;:1248,&quot;h&quot;:41,&quot;abs_x&quot;:512,&quot;abs_y&quot;:3716}" className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
<p bis_size="{&quot;x&quot;:32,&quot;y&quot;:3698,&quot;w&quot;:229,&quot;h&quot;:16,&quot;abs_x&quot;:512,&quot;abs_y&quot;:3741}" className="text-xs text-zinc-500">© <span bis_size="{&quot;x&quot;:46,&quot;y&quot;:3699,&quot;w&quot;:29,&quot;h&quot;:14,&quot;abs_x&quot;:526,&quot;abs_y&quot;:3742}" id="year">2025</span> AccountOps. All rights reserved.</p>
<div bis_size="{&quot;x&quot;:1125,&quot;y&quot;:3698,&quot;w&quot;:154,&quot;h&quot;:16,&quot;abs_x&quot;:1605,&quot;abs_y&quot;:3741}" className="flex items-center gap-4 text-xs text-zinc-500">
<a bis_size="{&quot;x&quot;:1125,&quot;y&quot;:3698,&quot;w&quot;:41,&quot;h&quot;:16,&quot;abs_x&quot;:1605,&quot;abs_y&quot;:3741}" className="hover:text-white" href="#">Privacy</a>
<a bis_size="{&quot;x&quot;:1182,&quot;y&quot;:3698,&quot;w&quot;:34,&quot;h&quot;:16,&quot;abs_x&quot;:1662,&quot;abs_y&quot;:3741}" className="hover:text-white" href="#">Terms</a>
<a bis_size="{&quot;x&quot;:1233,&quot;y&quot;:3698,&quot;w&quot;:46,&quot;h&quot;:16,&quot;abs_x&quot;:1713,&quot;abs_y&quot;:3741}" className="hover:text-white" href="#">Security</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
